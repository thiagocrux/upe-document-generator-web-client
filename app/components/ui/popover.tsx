'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';

import { cn } from '@/lib/shared.utils';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'data-[side=left]:slide-in-from-right-2 data-[side=top]:slide-in-from-bottom-2 z-50 bg-popover data-[side=bottom]:slide-in-from-top-2 data-[side=right]:slide-in-from-left-2 shadow-md p-4 border rounded-md outline-none w-72 text-popover-foreground origin-[--radix-popover-content-transform-origin] data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };
