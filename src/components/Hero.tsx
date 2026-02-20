import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <Image
        src="/hero.jpg"
        alt="Background tattoo art"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30"
        priority
      />
      <div className="relative z-10 p-6">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4">
          Ressa
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8">
          Fine Line & Blackwork Tattoo Artist
        </p>
        <div className="space-x-4">
          <Link href="#booking" className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
            Book Now
          </Link>
          <Link href="#portfolio" className="border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
