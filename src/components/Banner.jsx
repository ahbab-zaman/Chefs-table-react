import '../components/Banner.css'
const Banner = () => {

  return (
    <div className='w-11/12 mx-auto'>
     <div className="hero banner-img rounded-xl bg-cover bg-no-repeat h-[450px]">
        <div className="hero-content text-neutral-content text-center">
          <div>
            <h1 className="mb-5 text-4xl font-bold w-3/4 mx-auto">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5 w-3/4 mx-auto">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           <div className='space-x-2'>
           <button className="btn bg-[#0BE58A] outline-none rounded-full font-semibold">Explore Now</button>
           <button className="btn bg-transparent outline-none rounded-full text-white font-semibold">Our Feedback</button>
           
           </div>
          </div>
        </div>
      </div>
     </div>

  );
};

export default Banner;
