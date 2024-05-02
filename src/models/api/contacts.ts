export interface BasicContact {
  name: string;
  email: string;
  phone: string;
}

export interface ResultContact extends BasicContact {
  id: number;
}

export interface CreateContact extends BasicContact {}
