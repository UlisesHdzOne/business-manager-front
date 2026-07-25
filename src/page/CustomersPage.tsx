import { UserPlus } from "lucide-react";
import Header from "../component/Header";
import QuickActions from "../component/QuickActions";
import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerService";
import type { Customer } from "../types/customer";

const CustomersPage = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const data = await getCustomers();

        setCustomers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadCustomers();
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
