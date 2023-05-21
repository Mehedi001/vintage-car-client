/* eslint-disable react/no-unescaped-entities */
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner min-h-[200px] py-8 lg:py-0 lg:min-h-[600px] flex flex-col justify-center items-center'>
            <h3 className='text-white font-bold text-3xl lg:text-7xl text-center'>Welcome Kid Lover!!</h3>
            <p className='font-mono text-gray-200 w-4/5 lg:w-3/5 text-center my-4'>Welcome to our Toy Store, where imagination comes to life! We're thrilled to have you here and can't wait to help you find the perfect toys for endless fun and excitement. At our store, you'll discover a wide range of toys that cater to every age, interest, and play style. From classic favorites to the latest trends, we strive to provide a diverse selection that sparks creativity, encourages learning, and ignites the joy of play.</p>
        </div>
    );
};

export default Banner;