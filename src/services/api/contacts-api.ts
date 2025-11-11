import { AxiosResponse } from "axios";
import { endpoints } from "../../constants";
import {
  CreateContact,
  GenericResponse,
  ResultContact,
  UpdateContact,
} from "../../models/api";
import { genericDelete, genericPost, genericPut } from "./api-service";

export const createContact = async (
  body: CreateContact
): Promise<AxiosResponse<ResultContact>> => {
  try {
    return await genericPost(`${endpoints.contacts.create}`, body, {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_CLIENT_ANON_KEY,
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_CLIENT_ANON_KEY}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const updateContact = async (
  id: number,
  body: UpdateContact
): Promise<AxiosResponse<ResultContact>> => {
  try {
    return await genericPut(`${endpoints.contacts.update}eq.${id}`, body);
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async (
  id: number
): Promise<AxiosResponse<GenericResponse>> => {
  try {
    return await genericDelete(`${endpoints.contacts.delete}${id}`);
  } catch (error) {
    throw error;
  }
};
