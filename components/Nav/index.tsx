import React, { FC } from 'react';
import Link from 'next/link';
import NavStyles from './index.styles';

export const links = [
  { href: '/', label: 'Home', key: '' },
  { href: 'https://zeit.co/now', label: 'ZEIT', key: '' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub', key: '' },
].map((link) => {
  Object.assign(link, { key: `nav-link-${link.href}-${link.label}` });
  return link;
});

const Nav: FC = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>
      {NavStyles}
    </style>
  </nav>
);

export default Nav;
