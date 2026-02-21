import { cn } from '@/lib/shared.utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('bg-primary/10 rounded-md animate-pulse', className)}
      {...props}
    />
  );
}

export { Skeleton };
