import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Item } from '../models';
import Alert from './Alert';

type field = string[];

interface ICustomProps {
  parentId?: object;
  networkError: string;
  loading: boolean;
  closeModal: () => void;
  handleItem: (item: Item) => void;
  fields: field[];
  mode: string;
  item: Item;
}

class HandleItemForm extends React.Component<ICustomProps & InjectedFormProps<{}, ICustomProps>> {
  componentDidMount() {
    const { initialize, mode, item } = this.props;
    if (mode === 'edit') {
      initialize(item);
    }
  }

  handleItem = async (item: Item) => {
    const { closeModal, handleItem, reset, parentId } = this.props;
    const newItem = parentId ? { ...item, ...parentId } : item;
    await handleItem(newItem);
    const { networkError } = this.props;
    if (!networkError) {
      reset();
      closeModal();
    }
  }
  renderFields() {
    const { fields } = this.props;
    return fields.map((item: field) => {
      const [name, label] = item;
      return (
        <div key={label} className="form-group">
          <label htmlFor={`${name}Input`}>{label}</label>
          <Field
            component="input"
            type="text"
            name={name}
            className="form-control"
            id={`${name}Input`}
            placeholder={label}
            required={true}
          />
        </div>
      );
    });
  }

  render() {
    const { handleSubmit, closeModal, networkError, loading } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleItem)}>
        {networkError && (<Alert message={networkError} />)}
        <div className="modal-body">
          {this.renderFields()}
        </div>
        <div className="modal-footer">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >Добавить
          </button>
          <button type="button" className="btn btn-secondary" onClick={closeModal}>Закрыть</button>
        </div>
      </form>
    );
  }
}

export default reduxForm<{}, ICustomProps>({ form: 'handleItem' })(HandleItemForm);
