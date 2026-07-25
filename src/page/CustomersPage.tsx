import { UserPlus } from "lucide-react";
import Header from "../component/Header";
import QuickActions from "../component/QuickActions";
import { useEffect, useState } from "react";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data.data);
      });
  }, []);

  return (
    <main className="space-y-8">
      <Header
        title="Cliente"
        description="Gestiona la información de tus clientes"
        backHref="/"
      />

      <QuickActions
        title="Acciones rápidas"
        description="Selecciona una opción para continuar"
        links={[{ label: "Crear Cliente", icon: UserPlus, to: "/customers" }]}
      />

      <div>
        {customers.map((customer) => (
          <div key={customer.id}>
            <h2>{customer.firstName}</h2>
            <p>{customer.lastName}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CustomersPage;
