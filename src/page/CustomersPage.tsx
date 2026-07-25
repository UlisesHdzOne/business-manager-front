import { UserPlus } from "lucide-react";
import Header from "../component/Header";
import QuickActions from "../component/QuickActions";
import { useEffect, useState } from "react";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/customers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener clientes");
        }
        return response.json();
      })
      .then((data) => {
        setCustomers(data.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
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

      {loading && <p>Cargando ... Clientes</p>}
      {error && (
        <p className="text-red-600">
          Ha ocurrido un error al cargar clientes: {error}
        </p>
      )}
      {!loading && !error && (
        <section>
          {customers.map((customer) => (
            <div key={customer.id}>
              <h2>{customer.firstName}</h2>
              <p>{customer.lastName}</p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default CustomersPage;
