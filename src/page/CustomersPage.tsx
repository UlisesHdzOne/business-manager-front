import { UserPlus } from "lucide-react";
import Header from "../component/Header";
import QuickActions from "../component/QuickActions";

const CustomersPage = () => {
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
    </main>
  );
};

export default CustomersPage;
