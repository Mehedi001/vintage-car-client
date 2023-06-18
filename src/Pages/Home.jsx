
import Banner from "../components/Banner/Banner";
import Category from "../components/Category/Category";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import SmallCard from "../components/SmallCard";
import useTitle from "../hooks/useTitle";




const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <hr className="my-16" />
            <Category></Category>
            <hr className="my-16" />
            <Contact></Contact>
            <hr className="my-16" />
           <SmallCard></SmallCard>
        </div>
    );
};

export default Home;