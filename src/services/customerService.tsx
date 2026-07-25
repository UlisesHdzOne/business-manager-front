import type { ApiResponse } from "../types/api";
import type { Customer } from "../types/customer";

export const getCustomers = async (): Promise<Customer[]> => {
  const response = await fetch("http://localhost:3000/customers");

  if (!response.ok) {
    throw new Error("Error al obtener clientes");
  }

  const result: ApiResponse<Customer[]> = await response.json();

  return result.data;
};
