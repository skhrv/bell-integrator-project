import * as React from 'react';
import * as Modal from 'react-modal';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ISubDivision } from '../actions/models';
import { AddFormContainer } from '../containers/AddFormContainer';
import { Alert } from './Alert';
import { Loader } from './Loader';

interface ISubDivisionRouter {
  companyId: string;
}
interface ICustomProps extends RouteComponentProps<ISubDivisionRouter> {
  subDivisions: ISubDivision[];
  onSubDivisionsFetch: () => void;
  onAddSubDivision: (subDivision: ISubDivision) => void;
  error: string;
  loading: boolean;
}

interface IState {
  modalIsOpen: boolean;
}

const fields = [
  ['name', 'Название подразделения'], ['phone', 'Номер телефона'],
];

Modal.setAppElement('#app');

export default class SubDivisionList extends React.Component<ICustomProps, IState> {
  constructor(props: ICustomProps) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  async componentWillMount() {
    await this.props.onSubDivisionsFetch();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  renderItems() {
    const { companyId } = this.props.match.params;
    const subDivisions = Object.values(this.props.subDivisions);
    const renderedItems = subDivisions.filter(({ companyId: id }) => String(id) === companyId)
      .map(({ id, name, phone }, index) => (
        <tr key={id} >
          <th scope="row">{index + 1}</th>
          <td><Link to={`companies/${id}`}>{name}</Link></td>
          <td>{phone}</td>
          <td>
            <button type="button" className="btn btn-info btn-sm mr-2">Редактировать</button>
            <button type="button" className="btn btn-danger btn-sm">Удалить</button>
          </td>
        </tr >
      ));

    return renderedItems;
  }
  renderModal() {
    const { companyId } = this.props.match.params;
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
        contentLabel="Добавить подразделение"
        style={customStyles}
      >
        <h5 className="modal-title">Добавить подразделение</h5>
        <AddFormContainer
          closeModal={this.closeModal}
          addItem={this.props.onAddSubDivision}
          fields={fields}
          parentId={{ companyId }}
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
          <h1 className="h3 mr-3">Список подразделений</h1>
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
