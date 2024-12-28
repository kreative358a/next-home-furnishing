import { cn } from '@/lib/utils';

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('px-2 sm:px-4 mx-auto max-w-6xl xl:max-w-7xl md:px-8 2xl:max-w-[90%]', className)}>
      {children}
    </div>
  );
}
export default Container;
