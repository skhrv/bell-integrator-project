import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { ICompany, IEmployee, ISubDivision } from '../actions/models';
import { Alert } from './Alert';

type AddedItem = ICompany | ISubDivision | IEmployee;

type field = string[];

interface ICustomProps {
  parentId?: object;
  networkError: string;
  loading: boolean;
  closeModal: () => void;
  addItem: (item: AddedItem) => void;
  fields: field[];
}

class AddItemForm extends React.Component<ICustomProps & InjectedFormProps<{}, ICustomProps>> {
  addCompany = async (item: AddedItem) => {
    const { closeModal, addItem, reset, parentId } = this.props;
    console.log(addItem);
    const newItem = parentId ? { ...item, ...parentId } : item;
    await addItem(newItem);
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
      <form onSubmit={handleSubmit(this.addCompany)}>
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
          <button className="btn btn-secondary" onClick={closeModal}>Закрыть</button>
        </div>
      </form>
    );
  }
}

export default reduxForm<{}, ICustomProps>({ form: 'addItem' })(AddItemForm);
