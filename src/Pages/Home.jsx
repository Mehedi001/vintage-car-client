import Banner from "../components/Banner/Banner";
import SingleCar from "../components/Cars/SingleCar";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SingleCar></SingleCar>
            <Contact></Contact>
        </div>
    );
};

export default Home;