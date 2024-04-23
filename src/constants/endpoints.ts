import { Endpoints } from "../types";

const endpoints: Endpoints = {
  contacts: {
    create: "/contacts/create-contact",
    delete: "/contacts/delete-contact/:id",
    get: "/contacts/get-contacts",
    getById: "/contacts/get-contacts/:id",
    update: "/contacts/update-contact",
  },
};

export default endpoints;
