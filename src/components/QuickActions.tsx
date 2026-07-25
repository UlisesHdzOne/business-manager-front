import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface QuickActionLink {
  label: string;
  icon: LucideIcon;
  to: string;
}

interface QuickActionsProps {
  title: string;
  description?: string;
  links: QuickActionLink[];
}

const QuickActions = ({ title, description, links }: QuickActionsProps) => {
  return (
    <section
      aria-labelledby="quick-actions-title"
      className="rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 p-6 text-white shadow-lg"
    >
      <header className="mb-4">
        <h2 id="quick-actions-title" className="text-xl font-semibold">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-blue-100">{description}</p>
        )}
      </header>

      <nav aria-label={title}>
        <ul className="flex flex-wrap justify-end gap-3">
          {links.map(({ label, icon: Icon, to }) => (
            <li key={`${label}-${to}`}>
              <Link
                to={to}
                className="flex items-center gap-2 rounded-lg bg-white/30 px-4 py-2 font-medium shadow transition-transform hover:scale-[0.98] hover:bg-white/40 active:scale-95"
              >
                <Icon className="size-4" aria-hidden="true" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default QuickActions;
