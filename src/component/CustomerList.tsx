import type { Customer } from "../types/customer";
import CustomerCard from "./CustomerCard";

interface CustomerListProps {
  customers: Customer[];
}
const CustomerList = ({ customers }: CustomerListProps) => {
  return (
    <section className="space-y-2">
      {customers.map((customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </section>
  );
};

export default CustomerList;
