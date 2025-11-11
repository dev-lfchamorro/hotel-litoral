import { Endpoints } from "../types";

const endpoints: Endpoints = {
  contacts: {
    create: "/contact",
    delete: "/contact?id=",
    get: "/contact?select=*",
    update: "/contact?id=",
  },
};

export default endpoints;
