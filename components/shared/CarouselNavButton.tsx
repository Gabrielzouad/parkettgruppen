'use client';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Custom event names for carousel control
const CAROUSEL_PREV_EVENT = 'carousel-prev-event';
const CAROUSEL_NEXT_EVENT = 'carousel-next-event';

// Create a global event dispatcher for carousel navigation
export const dispatchCarouselEvent = (eventName: string) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(eventName));
  }
};

interface CarouselButtonsProps {
  className?: string;
}

export function CarouselButtons({ className = '' }: CarouselButtonsProps) {
  const handlePrev = () => {
    dispatchCarouselEvent(CAROUSEL_PREV_EVENT);
  };

  const handleNext = () => {
    dispatchCarouselEvent(CAROUSEL_NEXT_EVENT);
  };

  return (
    <div className={`flex gap-4 ${className}`}>
      <Button
        variant='outline'
        size='icon'
        onClick={handlePrev}
        className='bg-slate-900 text-white border-none h-12 w-12 rounded-full'
      >
        <ArrowLeft className='h-6 w-6' />
        <span className='sr-only'>Previous slide</span>
      </Button>
      <Button
        variant='outline'
        size='icon'
        onClick={handleNext}
        className='bg-slate-900 text-white border-none h-12 w-12 rounded-full'
      >
        <ArrowRight className='h-6 w-6' />
        <span className='sr-only'>Next slide</span>
      </Button>
    </div>
  );
}

// Export the event names for use in the carousel component
export { CAROUSEL_PREV_EVENT, CAROUSEL_NEXT_EVENT };
