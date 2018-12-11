import * as React from 'react';
import * as Modal from 'react-modal';
import { Link, RouteComponentProps } from 'react-router-dom';
import { DialogConfirmDeleteContainer } from '../containers/DialogConfirmDeleteContainer';
import { HandleItemFormContainer } from '../containers/HandleItemFormContainer';
import { IPropsList, ISubDivision } from '../models';
import { Alert } from './Alert';
import { modalStyles } from './App';
import { Loader } from './Loader';

interface ISubDivisionRouter {
  companyId: string;
}
interface ICustomProps extends IPropsList, RouteComponentProps<ISubDivisionRouter> {
  subDivisions: ISubDivision[];
  onSubDivisionsFetch: () => void;
  onAddSubDivision: (subDivision: ISubDivision) => void;
  onEditSubDivision: (subDivision: ISubDivision) => void;
  onRemoveSubDivision: (id: string) => void;
  openDialogConfirmDelete: (id: string) => void;
}

const fields = [
  ['name', 'Название подразделения'], ['phone', 'Номер телефона'],
];

Modal.setAppElement('#app');

export default class SubDivisionsList extends React.Component<ICustomProps> {
  async componentDidMount() {
    await this.props.onSubDivisionsFetch();
  }

  editItem = (item: ISubDivision) => () => {
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
    const { companyId } = this.props.match.params;
    const subDivisions = Object.values(this.props.subDivisions);
    const renderedItems = subDivisions.filter(({ companyId: id }) => String(id) === companyId)
      .map((subDivision, index) => {
        const { id, name, phone } = subDivision;
        return (
          <tr key={id} >
            <th scope="row">{index + 1}</th>
            <td><Link to={`companies/${companyId}/${id}`}>{name}</Link></td>
            <td>{phone}</td>
            <td>
              <button
                type="button"
                className="btn btn-info btn-sm mr-2 mb-1"
                onClick={this.editItem(subDivision)}
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

    return renderedItems;
  }
  renderModal() {
    const { companyId } = this.props.match.params;
    const { open, mode, currentItemEdit } = this.props.modal;
    const { onEditSubDivision, onAddSubDivision } = this.props;
    let currentHandleItem;
    let title;
    if (mode === 'edit') {
      title = 'Редактировать подразделение';
      currentHandleItem = onEditSubDivision;
    } else if (mode === 'add') {
      title = 'Добавить подразделение';
      currentHandleItem = onAddSubDivision;
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
          parentId={{ companyId }}
          mode={mode}
          item={currentItemEdit}
        />
      </Modal >
    );
  }
  render() {
    const { error, loading, onRemoveSubDivision } = this.props;
    return (
      <React.Fragment>
        {error && (<Alert message={error} />)}
        {this.renderModal()}
        <DialogConfirmDeleteContainer onConfirm={onRemoveSubDivision} />
        <div className="d-flex mb-1">
          <h1 className="h3 mr-3">Список подразделений</h1>
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
              <th scope="col">Телефон</th>
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
