export const getCustomers = async () => {
  const response = await fetch("http://localhost:3000/customers");

  if (!response.ok) {
    throw new Error("Error al obtener clientes");
  }

  const data = await response.json();

  return data.data;
};
