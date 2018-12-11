import * as React from 'react';
import * as Modal from 'react-modal';
import { RouteComponentProps } from 'react-router-dom';
import { HandleItemFormContainer } from '../containers/HandleItemFormContainer';
import { IEmployee, IPropsList } from '../models';
import { Alert } from './Alert';
import { modalStyles } from './App';
import { Loader } from './Loader';

interface IEmployeeRouter {
  subDivisionId: string;
}

interface ICustomProps extends IPropsList, RouteComponentProps<IEmployeeRouter> {
  employees: IEmployee[];
  onEmployeesFetch: () => void;
  onAddEmployee: (employee: IEmployee) => void;
  onEditEmployee: (employee: IEmployee) => void;
  onRemoveEmployee: (id: string) => void;
}

const fields = [
  ['fullname', 'Полное имя'],
  ['phone', 'Номер телефона'],
  ['address', 'Адрес'],
  ['position', 'Должность'],
];

Modal.setAppElement('#app');

export default class EmployeesList extends React.Component<ICustomProps> {
  async componentWillMount() {
    await this.props.onEmployeesFetch();
  }

  editItem = (item: IEmployee) => () => {
    this.props.openEditModal(item);
  }
  addItem = () => {
    this.props.openAddModal();
  }
  removeItem = (id: string) => () => {
    this.props.onRemoveEmployee(id);
  }
  closeModal = () => {
    this.props.closeModal();
  }
  renderItems() {
    const { subDivisionId } = this.props.match.params;
    const employees = Object.values(this.props.employees);
    const renderedItems = employees.filter(({ subDivisionId: id }) => String(id) === subDivisionId)
      .map((employee, index) => {
        const { id, fullname, phone, address, position } = employee;
        return (
          <tr key={id} >
            <th scope="row">{index + 1}</th>
            <td>{fullname}</td>
            <td>{position}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>
              <button
                type="button"
                className="btn btn-info btn-sm mr-2 mb-1"
                onClick={this.editItem(employee)}
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
    const { subDivisionId } = this.props.match.params;
    const { open, mode, currentItemEdit } = this.props.modal;
    const { onEditEmployee, onAddEmployee } = this.props;
    let currentHandleItem;
    let title;
    if (mode === 'edit') {
      title = 'Редактировать сотрудника';
      currentHandleItem = onEditEmployee;
    } else if (mode === 'add') {
      title = 'Добавить сотрудника';
      currentHandleItem = onAddEmployee;
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
          parentId={{ subDivisionId }}
          mode={mode}
          item={currentItemEdit}
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
          <h1 className="h3 mr-3">Список сотрудников</h1>
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
              <th scope="col">ФИО</th>
              <th scope="col">Должность</th>
              <th scope="col">Телефон</th>
              <th scope="col">Адрес</th>
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
