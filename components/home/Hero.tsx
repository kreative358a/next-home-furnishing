import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text:xl sm:text-2xl md:text-3xl xl:text-4xl tracking-tight '>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl sm:text-lg leading-8 text-muted-foreground text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          maxime laboriosam, deserunt velit qui quia? Dolor dolores esse
          corporis. Dolores.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/products'>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
