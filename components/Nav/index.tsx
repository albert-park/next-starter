import React, { FC } from 'react';
import NavStyles, {
  StyledAnchor, StyledLi, StyledNav, StyledUl,
} from './index.styles';

export const links = [
  { href: '/', label: 'Home', key: '' },
  { href: 'https://zeit.co/now', label: 'ZEIT', key: '' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub', key: '' },
].map((link) => {
  Object.assign(link, { key: `nav-link-${link.href}-${link.label}` });
  return link;
});

const Nav: FC = () => (
  <StyledNav>
    <StyledUl>
      {links.map(({ key, href, label }) => (
        <StyledLi key={key}>
          <StyledAnchor href={href}>{label}</StyledAnchor>
        </StyledLi>
      ))}
    </StyledUl>

    <style jsx>
      {NavStyles}
    </style>
  </StyledNav>
);

export default Nav;
