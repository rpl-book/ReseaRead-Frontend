import FeaturedBook from "@/components/FeaturedBook";
import ContinueReading from "@/components/ContinueReading/";
import NewRelease from "@/components/NewRelease/";
import TopPicks from "@/components/TopPicks/";


const Home = () => {
  return (
    <main>
      <div className="container mx-auto max-w-screen-lg">
        <FeaturedBook/>
        <ContinueReading/>
        <NewRelease/>
        <TopPicks/>
      </div>
    </main>
  );
};

export default Home;
