import { useCoins } from "../../context/AppContext";
import CoinCard from "../CoinCard/CoinCard";

const CardList = () => {
  const { coins } = useCoins();

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
