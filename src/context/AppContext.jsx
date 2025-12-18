import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [limit, setLimit] = useState("10");

  const fetchIcons = async () => {
    try {
      setLoading(true);

      const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`;
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
  }, [limit]);

  const searchCoins = coins
    .filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    )
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case "market_cap_desc":
          return b.market_cap - a.market_cap;
        case "market_cap_asc":
          return a.market_cap - b.market_cap;
        case "price_desc":
          return b.current_price - a.current_price;
        case "price_asc":
          return a.current_price - b.current_price;
        case "change_desc":
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case "change_asc":
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
      }
    });

  return (
    <AppContext.Provider
      value={{
        coins: searchCoins,
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        limit,
        setLimit,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export function useCoins() {
  return useContext(AppContext);
}
