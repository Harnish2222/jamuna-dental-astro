import { forwardRef, useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from 'react';

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
  children?: ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, ...rest }, ref) => (
    <a ref={ref} href={to} {...rest}>
      {children}
    </a>
  ),
);
Link.displayName = 'Link';

export interface Location {
  pathname: string;
  hash: string;
  search: string;
}

const emptyLocation: Location = { pathname: '/', hash: '', search: '' };

export function useLocation(): Location {
  const [loc, setLoc] = useState<Location>(() => {
    if (typeof window === 'undefined') return emptyLocation;
    const { pathname, hash, search } = window.location;
    return { pathname, hash, search };
  });

  useEffect(() => {
    const update = () => {
      const { pathname, hash, search } = window.location;
      setLoc({ pathname, hash, search });
    };
    window.addEventListener('popstate', update);
    window.addEventListener('hashchange', update);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('hashchange', update);
    };
  }, []);

  return loc;
}
