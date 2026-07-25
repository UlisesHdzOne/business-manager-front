import { UserPlus } from "lucide-react";
import Header from "../components/Header";
import QuickActions from "../components/QuickActions";
import { useCustomers } from "../features/customers/hooks/useCustomers";
import CustomerList from "../features/customers/components/CustomerList";

const CustomersPage = () => {
  const { customers, loading, error } = useCustomers();

  return (
    <main className="space-y-8">
      <Header
        title="Clientes"
        description="Gestiona la información de tus clientes"
        backHref="/"
      />

      <QuickActions
        title="Acciones rápidas"
        description="Selecciona una opción para continuar"
        links={[
          { label: "Crear Cliente", icon: UserPlus, to: "/customers/create" },
        ]}
      />

      {loading && <p>Cargando Clientes...</p>}

      {error && (
        <p className="text-red-600">
          Ha ocurrido un error al cargar clientes: {error}
        </p>
      )}

      {!loading && !error && customers.length === 0 && (
        <p>No hay clientes registrados</p>
      )}

      {!loading && !error && customers.length > 0 && (
        <CustomerList customers={customers} />
      )}
    </main>
  );
};

export default CustomersPage;
