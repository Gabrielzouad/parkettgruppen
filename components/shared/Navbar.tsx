'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import { produkter } from '@/lib/constants';

export function Navbar() {
  return (
    <div className='flex justify-between mx-auto max-w-screen-2xl pt-4 px-6 sm:px-8 md:px-12'>
      <Link href='/'>
        <Image
          src='/parketgruppen.png'
          alt='shadcn/ui'
          width={150}
          height={150}
          className='cursor-pointer'
        />
      </Link>
      <NavigationMenu className='hidden sm:flex'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='#about' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                OM OSS
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='#prosjekter' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                PROSJEKTER
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>PRODUKTER</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                {produkter.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='#blogg' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                BLOGG
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/docs' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                KONTAKT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
