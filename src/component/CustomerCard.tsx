import type { Customer } from "../types/customer";

interface CustomerCardProps {
  customer: Customer;
}

const CustomerCard = ({ customer }: CustomerCardProps) => {
  return (
    <article className="rounded-xl border bg-white p-4 shadow-sm space-y-3">
      <div>
        <h3 className="text-lg font-semibold">
          {customer.firstName} {customer.lastName}
        </h3>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="px-3 py-1 rounded-lg bg-blue-600 text-white text-sm"
        >
          Editar
        </button>

        <button
          type="button"
          className="px-3 py-1 rounded-lg bg-red-600 text-white text-sm"
        >
          Eliminar
        </button>
      </div>
    </article>
  );
};

export default CustomerCard;
