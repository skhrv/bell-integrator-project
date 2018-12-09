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
  name: string;
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
