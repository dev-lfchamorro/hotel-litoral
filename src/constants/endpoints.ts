import { Endpoints } from "../types";

const endpoints: Endpoints = {
  contacts: {
    create: "/contacts/create-contact/",
    delete: "/contacts/delete-contact/",
    get: "/contacts/get-contacts/",
    getById: "/contacts/get-contacts/",
    update: "/contacts/update-contact/",
  },
};

export default endpoints;
