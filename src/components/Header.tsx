import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  backHref?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

const Header = ({ backHref, title, description, action }: HeaderProps) => {
  return (
    <header className="bg-blue-600 space-y-3 rounded-xl p-6 border shadow-sm">
      {backHref && (
        <Link
          to={backHref}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Volver
        </Link>
      )}

      <div className="flex justify-between items-end text-white">
        <div>
          <h1 className="text-3xl font-semibold">{title}</h1>

          {description && (
            <p className="text-sm text-blue-200 mt-1">{description}</p>
          )}
        </div>

        {action}
      </div>
    </header>
  );
};

export default Header;
