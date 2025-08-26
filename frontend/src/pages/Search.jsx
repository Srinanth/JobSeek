import Filter from '../components/Filter'
import Listings from '../components/Listings'

const Search = () => {
    return (
        <div className='pt-18'>
            <section className='bg-blue-200/20 '>
                <div className="max-w-screen-2xl w-full mx-auto px-6 flex flex-col items-center justify-center min-h-90">
                    {/* TextBox */}
                    <div className='text-center pb-6'>
                        <h2 className="capitalize text-4xl font-bold pb-3">Find your dream job</h2>
                        <p className='text-lg text-gray-600'>Discover oppertunities that matches your skills and aspirations</p>
                    </div>

                    {/*SearchBar*/}
                    <div className='bg-white min-h-16 w-fit flex items-center p-6 rounded-xl shadow-xl border border-gray-200 gap-4'>
                        <div className='flex gap-4'>
                            <input type="text" className='outline outline-gray-300 p-4 rounded-lg' placeholder='Job title, keywords or company name' />
                            <input type="text" className='outline outline-gray-300 p-4 rounded-lg' placeholder='Location' />
                        </div>
                        <button className='p-4 bg-blue-500 text-white rounded-lg cursor-pointer'>Search Jobs</button>
                    </div>
                </div>
            </section>

            {/* JobListing and filters */}
            <section className='bg-white'>
                <div className="max-w-screen-2xl w-full mx-auto px-6 flex gap-3 pt-6">
                    <Filter />
                    <Listings />
                </div>
            </section>
        </div>
    )
}

export default Search