import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { ICompany } from '../actions';
import { Alert } from './Alert';

interface ICustomProps {
  networkError: string;
  loading: boolean;
  onAddCompany: (company: ICompany) => void;
  closeModal: () => void;
}

class AddCompanyForm extends React.Component<ICustomProps & InjectedFormProps<{}, ICustomProps>> {
  addCompany = async (company: ICompany) => {
    const { closeModal, onAddCompany, reset } = this.props;
    await onAddCompany(company);
    const { networkError } = this.props;
    if (!networkError) {
      reset();
      closeModal();
    }
  }

  render() {
    const { handleSubmit, closeModal, networkError, loading } = this.props;
    return (
      <form onSubmit={handleSubmit(this.addCompany)}>
        {networkError && (<Alert message={networkError} />)}
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="companyNameInput">Название органиации</label>
            <Field
              component="input"
              type="text"
              name="name"
              className="form-control"
              id="companyNameInput"
              placeholder="Название организации"
              required={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="companyInnInput">ИНН</label>
            <Field
              component="input"
              type="number"
              name="inn"
              className="form-control"
              id="companyInnInput"
              placeholder="ИНН"
              required={true}
            />
          </div>

          <div className="form-group">
            <label htmlFor="companyAddressInput">Адрес</label>
            <Field
              component="input"
              type="text"
              name="address"
              className="form-control"
              id="companyAddressInput"
              placeholder="Адрес"
              required={true}
            />
          </div>
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

export default reduxForm<{}, ICustomProps>({ form: 'newCompany' })(AddCompanyForm);
