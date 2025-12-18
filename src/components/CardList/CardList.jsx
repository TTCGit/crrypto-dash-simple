import { useCoins } from "../../context/AppContext";
import CoinCard from "../CoinCard/CoinCard";

const CardList = () => {
  const { coins, loading, error } = useCoins();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <p className="text-text-secondary text-lg">Loading coins...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-100">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="my-8 grid grid-cols-4 gap-6">
      {coins.map((coin) => (
        <CoinCard
          key={coin.id}
          {...coin}
        />
      ))}
    </div>
  );
};

export default CardList;
