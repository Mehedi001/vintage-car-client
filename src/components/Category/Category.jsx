import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import './Category.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Category = () => {

    const [carData, setCarData] = useState([]);
    const [toggleState, setToggleState] = useState(1);


    const toggleTab = (index, Category) => {
        setToggleState(index);
        setCarData([]);
        fetch(`https://vintage-car-server.vercel.app/toys/${Category}`)
            .then(res => res.json())
            .then(data => setCarData(data.slice(0, 4)))
    };
    AOS.init({

        offset: 100,
        duration: 600,
        easing: 'ease-in',
        delay: 100,
    });

    useEffect(() => {
        fetch('https://vintage-car-server.vercel.app/toys/Regular')
            .then(res => res.json())
            .then(data => setCarData(data.slice(0, 4)))
    }, [])



    return (
        <div data-aos="fade-down" className='my-8'>

            <h2 className='text-2xl lg:text-5xl mt-10 text-center font-bold'>Sort by category</h2>
            <div className="catCat">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1, 'Regular')}
                    >
                        Regular
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2, 'Sports')}
                    >
                        Sports
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3, 'Vintage')}
                    >
                        Vintage
                    </button>
                    <button
                        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(4, 'Bus')}
                    >
                        Bus
                    </button>
                    <button
                        className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(5, 'Military')}
                    >
                        Military
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <div className='my-14'>
                        <h2>Regular</h2>
                        <hr />
                        </div>
                        <div className='flex gap-4 my-16 lg:justify-between flex-col lg:flex-row'>
                            {
                                carData.map(car => <div className='flex flex-col '
                                    key={car._id}>
                                    <img className='w-4/6 rounded-md' src={car.photo} alt="" />
                                    <div className='px-2'>
                                        <h4 className='text-xl font mt-4'>{car.toyName}</h4>
                                        <h2 className='text-4xl my-2 font-semibold'>${car.price}</h2>
                                        <p className='text-xl'>{car.rating} Star</p>
                                        <Link to={`/toy/${car._id}`} className='btn mt-2'>View Details</Link>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h2>Sports</h2>
                        <hr />
                        <div className='flex my-16 gap-4 lg:justify-between flex-col lg:flex-row'>
                            {
                                carData.map(car => <div key={car._id}>
                                    <img className='w-4/6 rounded-md' src={car.photo} alt="" />
                                    <div className='px-2'>
                                        <h4 className='text-xl mt-4'>{car.toyName}</h4>
                                        <h2 className='text-4xl font-semibold'>${car.price}</h2>
                                        <p className='text-2xl'>{car.rating} ★★★★★</p>
                                        <Link to={`/toy/${car._id}`} className='btn mt-2'>View Details</Link>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h2>Vintage</h2>
                        <hr />
                        <div className='flex my-16 gap-4 lg:justify-between flex-col lg:flex-row'>
                            {
                                carData.map(car => <div key={car._id}>
                                    <img className='w-4/6 rounded-md' src={car.photo} alt="" />
                                    <div className='px-2'>
                                        <h4 className='text-xl mt-4'>{car.toyName}</h4>
                                        <h2 className='text-4xl font-semibold'>${car.price}</h2>
                                        <p className='text-2xl'>{car.rating} ★★★★★</p>
                                        <Link to={`/toy/${car._id}`} className='btn mt-2'>View Details</Link>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                    >
                        <h2>Bus</h2>
                        <hr />
                        <div className='flex my-16 gap-4 lg:justify-between flex-col lg:flex-row'>
                            {
                                carData.map(car => <div key={car._id}>
                                    <img className='w-4/6 rounded-md' src={car.photo} alt="" />
                                    <div className='px-2'>
                                        <h4 className='text-xl mt-4'>{car.toyName}</h4>
                                        <h2 className='text-4xl font-semibold'>${car.price}</h2>
                                        <p className='text-2xl'>{car.rating} ★★★★★</p>
                                        <Link to={`/toy/${car._id}`} className='btn mt-2'>View Details</Link>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div
                        className={toggleState === 5 ? "content  active-content" : "content"}
                    >
                        <h2>Military</h2>
                        <hr />
                        <div className='flex my-16 gap-4 lg:justify-between flex-col lg:flex-row'>
                            {
                                carData.map(car => <div key={car._id}>
                                    <img className='w-4/6 rounded-md' src={car.photo} alt="" />
                                    <div className='px-2'>
                                        <h4 className='text-xl mt-4'>{car.toyName}</h4>
                                        <h2 className='text-4xl font-semibold'>${car.price}</h2>
                                        <p className='text-2xl'>{car.rating} ★★★★★</p>
                                        <Link to={`/toy/${car._id}`} className='btn mt-2'>View Details</Link>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;