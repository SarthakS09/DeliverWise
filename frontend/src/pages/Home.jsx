import InputForm from "../components/InputForm";
import CompareCard from "../components/CompareCard";
import Loader from "../components/Loader";
import { useCompare } from "../hooks/useCompare";

const Home = () => {
  const { loading, results, getComparison } = useCompare();

  return (
    <div className="home">
      <h1>🚚 DeliverWise</h1>
      <InputForm onCompare={getComparison} />
      {loading && <Loader />}
      <div className="results">
        {results &&
          Object.entries(results).map(([platform, data]) => (
            <CompareCard
              key={platform}
              platform={platform}
              price={data.price}
              time={data.time}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
