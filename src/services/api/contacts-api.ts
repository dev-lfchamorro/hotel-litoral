import { AxiosResponse } from "axios";
import { endpoints } from "../../constants";
import { CreateContact, ResultContact, UpdateContact } from "../../models/api";
import {
  genericDelete,
  genericGet,
  genericPost,
  genericPut,
} from "./api-service";

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

export const updateContact = async (
  body: UpdateContact
): Promise<AxiosResponse<ResultContact>> => {
  try {
    return await genericPut(`${endpoints.contacts.update}`, body);
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async (
  id: number
): Promise<AxiosResponse<ResultContact>> => {
  try {
    return await genericDelete(`${endpoints.contacts.delete}${id}`);
  } catch (error) {
    throw error;
  }
};
