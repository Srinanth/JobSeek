import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router';


const Page404 = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <DotLottieReact
        src="https://lottie.host/fa34ff80-4e53-4ed7-9eb6-e51c24237be1/B3rkXkteUu.lottie"
        loop
        autoplay
        className='h-150'
      />
      <Link to={'/'} className='bg-blue-500 py-2 px-6 text-white font-bold rounded-lg cursor-pointer' >Go Home</Link>
    </div>
  )
}

export default Page404