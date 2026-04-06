import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white py-20">
      <Image
        src="/hero.png"
        alt="Background tattoo art"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30"
        priority
      />
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter mb-4">
          Reesa
        </h1>
        <p className="text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto">
          Color Realism | Color Micro Realism | Blk & Grey | Fine Line |
          Portraits
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#booking"
            className="w-full sm:w-auto bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition-colors text-center"
          >
            Book Now
          </Link>
          <Link
            href="#portfolio"
            className="w-full sm:w-auto border border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-black transition-colors text-center"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
