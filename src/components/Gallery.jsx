import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Gallery = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div data-aos="fade-down" className='mx-auto w-3/4'>
            <h2 className='text-5xl font-semibold text-center my-12'>Showcase of Car Toys</h2>
            <Carousel
            responsive={responsive}>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/ZSbt9Jk/1.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/X5mhsP2/2.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/QFnkLdY/3.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/8YJzKgn/4.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/1mHwvH4/5.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/dgcvThw/6.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/Zfhbnmj/7.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/Bw0qP8q/8.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/9v29ndj/9.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/yPHn2Bc/10.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/nnqG3S3/11.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/JmdYzzZ/12.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/0GBdXGT/13.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/2d9WhGf/14.jpg" alt="" /></div>
                <div><img className='w-3/4 rounded-lg ' src="https://i.ibb.co/zfxbXm5/15.jpg" alt="" /></div>     
            </Carousel>;
        </div>
    );
};

export default Gallery;