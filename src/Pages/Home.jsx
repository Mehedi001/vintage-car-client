
import Banner from "../components/Banner/Banner";
import Category from "../components/Category/Category";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import SmallCard from "../components/SmallCard";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Contact></Contact>
           <SmallCard></SmallCard>
        </div>
    );
};

export default Home;