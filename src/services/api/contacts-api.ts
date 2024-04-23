import { endpoints } from "../../constants";
import { genericGet } from "./api-service";

export const getContactById = async (id: number) => {
  try {
    return await genericGet(`${endpoints.contacts.getById}${id}`);
  } catch (error) {
    throw error;
  }
};
