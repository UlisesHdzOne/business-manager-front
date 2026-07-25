import { FileText, ShoppingCart, UserPlus } from "lucide-react";
import Header from "../component/Header";
import QuickActions from "../component/QuickActions";

const HomePage = () => {
  return (
    <main className="space-y-8">
      <Header
        title="Pasteleria Hilda"
        description="Bienvenido al panel de administración"
      />

      <QuickActions
        title="Acciones rápidas"
        description="Selecciona una opción para continuar"
        links={[
          { label: "Clientes", icon: UserPlus, to: "/customers" },
          { label: "Pedidos", icon: ShoppingCart, to: "/orders" },
          { label: "Reportes", icon: FileText, to: "/reports" },
        ]}
      />
    </main>
  );
};

export default HomePage;
