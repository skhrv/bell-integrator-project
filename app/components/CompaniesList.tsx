import * as React from 'react';
import * as Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { DialogConfirmDeleteContainer } from '../containers/DialogConfirmDeleteContainer';
import { HandleItemFormContainer } from '../containers/HandleItemFormContainer';
import { ICompany, IPropsList } from '../models';
import { Alert } from './Alert';
import { modalStyles } from './App';
import { Loader } from './Loader';

interface ICustomProps extends IPropsList {
  companies: ICompany[];
  onCompaniesFetch: () => void;
  onAddCompany: (company: ICompany) => void;
  onEditCompany: (company: ICompany) => void;
  onRemoveCompany: (id: string) => void;
  openDialogConfirmDelete: (id: string) => void;
}

const fields = [
  ['name', 'Название организации'], ['inn', 'ИНН'], ['address', 'Адрес'],
];

Modal.setAppElement('#app');

export default class CompaniesList extends React.Component<ICustomProps> {
  async componentDidMount() {
    await this.props.onCompaniesFetch();
  }

  editItem = (item: ICompany) => () => {
    this.props.openEditModal(item);
  }
  addItem = () => {
    this.props.openAddModal();
  }
  removeItem = (id: string) => () => {
    this.props.openDialogConfirmDelete(id);
  }
  closeModal = () => {
    this.props.closeModal();
  }
  renderItems() {
    const companies = Object.values(this.props.companies);
    const renderedItems = companies.map((company, index) => {
      const { id, inn, name, address } = company;
      return (
        <tr key={id} >
          <th scope="row">{index + 1}</th>
          <td><Link to={`companies/${id}`}>{name}</Link></td>
          <td>{address}</td>
          <td>{inn}</td>
          <td>
            <button
              type="button"
              className="btn btn-info btn-sm mr-2 mb-1"
              onClick={this.editItem(company)}
            >Редактировать
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm mb-1"
              onClick={this.removeItem(id)}
            >Удалить
            </button>
          </td>
        </tr >
      );
    });
    const emptyList = <tr><td align="center" colSpan={100}>Список пуст</td></tr>;
    return renderedItems.length === 0 ? emptyList : renderedItems;
  }
  renderModal() {
    const { open, mode, currentItemEdit } = this.props.modal;
    const { onEditCompany, onAddCompany } = this.props;
    let currentHandleItem;
    let title;
    if (mode === 'edit') {
      title = 'Редактировать организацию';
      currentHandleItem = onEditCompany;
    } else if (mode === 'add') {
      title = 'Добавить организацию';
      currentHandleItem = onAddCompany;
    }
    return (
      <Modal
        isOpen={open}
        onRequestClose={this.closeModal}
        style={modalStyles}
      >
        <h5 className="modal-title">{title}</h5>
        <HandleItemFormContainer
          closeModal={this.closeModal}
          handleItem={currentHandleItem}
          fields={fields}
          mode={mode}
          item={currentItemEdit}
        />
      </Modal >
    );
  }
  render() {
    const { error, loading, onRemoveCompany } = this.props;
    return (
      <React.Fragment>
        {error && (<Alert message={error} />)}
        {this.renderModal()}
        <DialogConfirmDeleteContainer onConfirm={onRemoveCompany} />
        <div className="d-flex mb-1">
          <h1 className="h3 mr-3">Список органиаций</h1>
          <button
            onClick={this.addItem}
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
