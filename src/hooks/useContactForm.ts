import { useState } from "react";
import { isEmpty, isValidEmail, isValidPhone } from "../helpers";
import { ContactForm } from "../types";

export const useContactForm = () => {
  const initialValues: ContactForm = {
    email: "",
    message: "",
    name: "",
    phone: "",
  };

  const [formData, setFormData] = useState<ContactForm>(initialValues);
  const [errors, setErrors] = useState<ContactForm>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (isEmpty(formData.name)) {
      setErrors({
        ...initialValues,
        name: "O nome é obrigatório",
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrors({ ...initialValues, email: "E-mail inválido" });
      return;
    }

    if (!isEmpty(formData.phone) && !isValidPhone(formData.phone)) {
      setErrors({
        ...initialValues,
        phone: "Telefone inválido",
      });
      return;
    }

    if (isEmpty(formData.message)) {
      setErrors({
        ...initialValues,
        message: "A mensagem é obrigatória",
      });
      return;
    }

    setErrors(initialValues);
  };

  return { errors, handleChange, formData, handleSave };
};
