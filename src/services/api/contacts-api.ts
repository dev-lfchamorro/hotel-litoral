import { AxiosResponse } from "axios";
import { endpoints } from "../../constants";
import { CreateContact, ResultContact } from "../../models/api";
import { genericGet, genericPost } from "./api-service";

export const getContactById = async (
  id: number
): Promise<AxiosResponse<ResultContact>> => {
  try {
    return await genericGet(`${endpoints.contacts.getById}${id}`);
  } catch (error) {
    throw error;
  }
};

export const createContact = async (
  body: CreateContact
): Promise<AxiosResponse<ResultContact>> => {
  try {
    return await genericPost(`${endpoints.contacts.create}`, body);
  } catch (error) {
    throw error;
  }
};
