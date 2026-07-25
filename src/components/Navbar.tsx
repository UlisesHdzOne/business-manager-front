import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-white shadow px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-lg">
          Pastelería Hilda
        </Link>

        {/* Navegación principal */}
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/">Dashboard</Link>
          <Link to="/customers">Clientes</Link>
          <Link to="/orders">Pedidos</Link>
          <Link to="/reports">Reportes</Link>
        </div>

        {/* Usuario */}
        <div className="text-sm">Admin</div>
      </nav>
    </header>
  );
};

export default Navbar;
