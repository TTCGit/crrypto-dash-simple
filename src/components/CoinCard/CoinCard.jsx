const CoinCard = ({
  image,
  current_price,
  market_cap,
  id,
  name,
  symbol,
  price_change_percentage_24h,
}) => {
  const formatNum = (value) => new Intl.NumberFormat("en-US").format(value);

  return (
    <div
      className="flex flex-col bg-card p-4 rounded-lg gap-4 cursor-pointer transition-all duration-200 ease-in hover:shadow-glow shadow-sm 
    hover:-translate-y-0.5">
      <div className="flex gap-4">
        <img
          src={image}
          alt={name}
          width={40}
          height={40}
          className="object-contain"
        />
        <div>
          <h3 className="text-xl font-semibold text-text-primary">{name}</h3>
          <span className="uppercase text-text-muted text-sm">{symbol}</span>
        </div>
      </div>
      <div className="text-sm flex flex-col gap-1">
        <p className="text-text-primary">Price: {formatNum(current_price)}</p>
        <span className="text-red">
          {price_change_percentage_24h.toFixed(2)}
        </span>
        <p className="text-text-primary">Market cap: {formatNum(market_cap)}</p>
      </div>
    </div>
  );
};

export default CoinCard;
