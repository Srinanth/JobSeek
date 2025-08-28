import { Link } from 'react-router';
import heroImg from '../assets/heroimg.png'

const Home = () => {
  return (
    <div className="pt-16 min-h-screen bg-blue-300/10 lg:pb-30">
      {/*Landing */}
      <section className="max-w-screen-2xl w-full h-full m-auto px-6 lg:flex">
        {/* Left */}
        <div className="md:pt-30 pt-20 flex-1">
          {/*Text box */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold">Find Your Dream Job with <span className="text-blue-500">AI-Powered</span> Recommendations</h2>
            <p className="text-gray-500 text-lg sm:text-xl pt-8">Discover thousands of job opportunities tailored to your skills and preferences. Let our intelligent matching system connect you with the perfect career opportunities.</p>
          </div>

          {/*Stats */}
          <div className="bg-white p-4 flex sm:gap-8 gap-4 border border-gray-200 rounded-lg shadow-md mt-8 w-fit">
            <div>
              <h2 className="text-blue-500 font-bold text-3xl">50K+</h2>
              <p className="text-gray-500 text-sm">Active Jobs</p>
            </div>
            <div className="border-x-4 sm:px-7 px-4 border-x-blue-500">
              <h2 className="text-blue-500 font-bold text-3xl">21K+</h2>
              <p className="text-gray-500 text-sm">Happy Users</p>
            </div>
            <div>
              <h2 className="text-blue-500 font-bold text-3xl">500+</h2>
              <p className="text-gray-500 text-sm">Companies</p>
            </div>
          </div>

          {/* Buttons CTA*/}
          <div className="mt-8 flex gap-4">
            <Link className="sm:px-10 px-5 sm:text-md text-sm py-4 bg-white border border-gray-200 rounded-lg capitalize cursor-pointer text-blue-500 font-bold" to={'/signup'}>Get Started for free <i className="fa fa-arrow-right pl-3 text-blue-500"></i> </Link>
            <Link className="border border-gray-300 text-gray-500 font-bold  cursor-pointer sm:px-6 sm:text-md text-sm px-5 rounded-lg py-4" to={'/login'}>Sign In</Link>
          </div>
        </div>

        {/*Right */}
        <div className="lg:min-w-190 lg:flex lg:h-full justify-center lg:mt-50 mb-10">
          <img src={heroImg} alt="Hero Image" className="lg:w-150 md:h-100 mt-6 lg:rotate-3 rounded-xl border border-gray-200 shadow-2xl" />
        </div>
      </section>
    </div>
  );
};

export default Home;
