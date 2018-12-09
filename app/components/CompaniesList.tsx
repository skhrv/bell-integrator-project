import * as React from 'react';
import * as Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { ICompany } from '../actions/models';
import { AddFormContainer } from '../containers/AddFormContainer';
import { Alert } from './Alert';
import { Loader } from './Loader';

interface IPropsCompaniesList {
  companies: ICompany[];
  onCompaniesFetch: () => void;
  onAddCompany: (company: ICompany) => void;
  error: string;
  loading: boolean;
}

interface IState {
  modalIsOpen: boolean;
}

const fields = [
  ['name', 'Название организации'], ['inn', 'ИНН'], ['address', 'Адрес'],
];

Modal.setAppElement('#app');

export default class CompaniesList extends React.Component<IPropsCompaniesList, IState> {
  constructor(props: IPropsCompaniesList) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  async componentWillMount() {
    await this.props.onCompaniesFetch();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  renderItems() {
    const companies = Object.values(this.props.companies);
    const renderedItems = companies.map(({ id, inn, name, address }, index) => (
      <tr key={id} >
        <th scope="row">{index + 1}</th>
        <td><Link to={`sub_divisions/${id}`}>{name}</Link></td>
        <td>{address}</td>
        <td>{inn}</td>
        <td>
          <button type="button" className="btn btn-info btn-sm mr-2">Редактировать</button>
          <button type="button" className="btn btn-danger btn-sm">Удалить</button>
        </td>
      </tr >
    ));
    return renderedItems;
  }
  renderModal() {
    const customStyles = {
      content: {
        top: '50%',
        left: '30%',
        right: '30%',
        bottom: 'auto',
        transform: 'translateY(-50%)',
      },
    };
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Добавить организацию"
        style={customStyles}
      >
        <h5 className="modal-title">Добавить органиацию</h5>
        <AddFormContainer
          closeModal={this.closeModal}
          addItem={this.props.onAddCompany}
          fields={fields}
        />
      </Modal >
    );
  }
  render() {
    const { error, loading } = this.props;
    return (
      <React.Fragment>
        {error && (<Alert message={error} />)}
        {this.renderModal()}
        <div className="d-flex mb-1">
          <h1 className="h3 mr-3">Список органиаций</h1>
          <button
            onClick={this.openModal}
            type="button"
            className="btn btn-outline-primary btn-sm mr-3"
          >Добавить запись
          </button>
        </div >
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Адрес</th>
              <th scope="col">ИНН</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {!error && this.renderItems()}
          </tbody>
        </table>
        {loading && (<Loader />)}
      </React.Fragment>
    );
  }
}
