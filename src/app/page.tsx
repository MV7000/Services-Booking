import PreloaderHome from '@/components/PreloaderHome/PreloaderHome';
import HomeElement from '../components/Home/HomeElement';

export default function Home() {
  return (
    <main className='bg-[linear-gradient(90deg,_rgba(0,109,125,1)_0%,_rgba(201,241,247,1)_35%,_rgba(76,164,177,1)_100%)]'>
      <PreloaderHome />
      <HomeElement />
    </main>
  );
}
