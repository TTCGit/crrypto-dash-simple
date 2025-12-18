import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

export function AppProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchIcons = async () => {
    try {
      setLoading(true);

      const res = await fetch(API_URL);
      const data = await res.json();

      setCoins(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIcons();
  }, []);

  return (
    <AppContext.Provider value={{ coins }}>{children}</AppContext.Provider>
  );
}

export function useCoins() {
  return useContext(AppContext);
}
