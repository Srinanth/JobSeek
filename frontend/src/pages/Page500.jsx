import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router';

const Page500 = () => {
    return (
        <div className='flex items-center justify-center flex-col h-screen'>
            <DotLottieReact
                src="https://lottie.host/cabb76ff-80d7-44d9-adf6-748474a4c662/hFbt8X7tmS.lottie"
                loop
                autoplay
                className='h-150'
            />
            <Link to={'/'} className='bg-blue-500 py-2 px-6 text-white font-bold rounded-lg cursor-pointer' >Go Home</Link>
        </div>
    )
}

export default Page500
