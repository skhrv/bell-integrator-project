import { action } from 'typesafe-actions';
import { DialogConfirmDelete } from './consts';

export const closeDialogConfirmDelete = () => action(DialogConfirmDelete.CLOSE);

export const openDialogConfirmDelete = (id: string) => action(DialogConfirmDelete.OPEN, id);
