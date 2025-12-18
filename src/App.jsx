import CardList from "./components/CardList/CardList";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  return (
    <div className="h-screen bg-primary">
      <div className="container mx-auto px-8 py-20">
        <SearchBar />
        <CardList />
      </div>
    </div>
  );
};

export default App;
