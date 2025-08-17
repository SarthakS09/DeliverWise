import { useState } from "react";
import { compareDelivery } from "../services/compareService";

export const useCompare = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const getComparison = async (pickup, drop, orderValue) => {
    setLoading(true);
    const data = await compareDelivery(pickup, drop, orderValue);
    setResults(data);
    setLoading(false);
  };

  return { loading, results, getComparison };
};
