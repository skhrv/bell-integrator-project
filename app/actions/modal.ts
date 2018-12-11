import { action } from 'typesafe-actions';
import { Item } from '../models';
import { Modal } from './consts';

export const closeModal = () => action(Modal.CLOSE);

export const openEditModal = (item: Item) => action(Modal.EDIT, item);

export const openAddModal = () => action(Modal.ADD);
