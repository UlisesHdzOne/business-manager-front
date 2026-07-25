import { useEffect, useState } from "react";
import type { Customer } from "../types/customer";
import { getCustomers } from "../services/customerService";

export const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        setError(null);
        setLoading(true);
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

  return {
    customers,
    loading,
    error,
  };
};
