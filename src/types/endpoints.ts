export type Endpoints = {
  contacts: ContactEndpoints;
};

type ContactEndpoints = {
  create: string;
  delete: string;
  get: string;
  update: string;
};
