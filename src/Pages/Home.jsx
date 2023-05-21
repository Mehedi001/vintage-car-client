
import Banner from "../components/Banner/Banner";
import SingleCarCard from "../components/Cars/SingleCarCard";
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
            <SingleCarCard></SingleCarCard>
            <Contact></Contact>
           <SmallCard></SmallCard>
        </div>
    );
};

export default Home;