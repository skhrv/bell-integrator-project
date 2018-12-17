import * as React from 'react';
import * as Modal from 'react-modal';
import { IDialogConfirmDelete } from '../models';
import { modalStyles } from './App';

interface ICustomProps extends IDialogConfirmDelete {
  closeDialogConfirmDelete: () => void;
  onConfirm: (id: string) => void;
}

Modal.setAppElement('#app');

const DialogConfirmDelete = (props: ICustomProps) => {
  const { open, deleteId, closeDialogConfirmDelete, onConfirm } = props;
  const confirmHandle = () => {
    onConfirm(deleteId);
    closeDialogConfirmDelete();
  };
  return (
    <Modal
      isOpen={open}
      onRequestClose={closeDialogConfirmDelete}
      style={modalStyles}
    >
      <h5 className="modal-title">Вы уверены?</h5>
      <div className="modal-body">
        <p>Вы действительно хотите удалить эту запись?</p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={closeDialogConfirmDelete}
        >Нет
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={confirmHandle}
        >Да, удаляем её!
        </button>
      </div>
    </Modal >);
};
export default DialogConfirmDelete;
