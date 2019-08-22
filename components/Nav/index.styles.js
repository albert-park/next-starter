import css from 'styled-jsx/css';
import styled from 'styled-components';

export default css`
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
      Helvetica, sans-serif;
  }
`;

export const StyledNav = styled.nav`
  text-align: center;
`;

export const StyledUl = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 4px 16px;
`;

export const StyledLi = styled.li`
    display: flex;
    padding: 6px 8px;
`;

export const StyledAnchor = styled.a`
    color: #067df7;
    text-decoration: none;
    font-size: 13px;
`;
