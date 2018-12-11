export interface IUser {
  email: string;
  password: string;
}

export interface ICompany {
  id?: string;
  name: string;
  inn: number;
  address: string;
}

export interface IEmployee {
  id?: string;
  subDivisionId: string;
  fullname: string;
  phone: string;
  address: string;
  position: string;
}

export interface ISubDivision {
  id?: string;
  companyId: string;
  name: string;
  phone: string;
}

export type Item = ICompany | ISubDivision | IEmployee;

export interface IModalState {
  open: boolean;
  mode: string;
  currentItemEdit: ICompany | ISubDivision | IEmployee;
}

export interface IDialogConfirmDelete {
  open: boolean;
  deleteId: string;
}

export interface IPropsList {
  error: string;
  loading: boolean;
  openModal: () => void;
  closeModal: () => void;
  openEditModal: (payload: Item) => void;
  openAddModal: () => void;
  modal: IModalState;
  DialogConfirmDelete: IDialogConfirmDelete;
}

export interface IStoreState {
  companies: ICompany[];
  dialogConfirmDelete: IDialogConfirmDelete;
  employees: IEmployee[];
  error: string | null;
  loading: boolean;
  loginStatus: boolean;
  modal: IModalState;
  subDivisions: ISubDivision[];
}

export interface IAction {
  type: string;
  payload?: any;
}
