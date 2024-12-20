import { Button } from '@/components/ui/button';
import LoadingContainer from '@/components/global/LoadingContainer';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { Suspense } from 'react';

function HomePage() {
  return (
    <div>
       <Hero />
       <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
      <h1 className='text-3xl'>HomePage</h1>
      <Button variant='default' size='lg' className='capitalize m-8 bg-primary text-blue-50 dark:text-blue-950'>
        Click me
      </Button>
    </div>
  )
}
export default HomePage