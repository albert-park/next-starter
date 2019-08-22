import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav, { links } from '../index';

describe('Nav Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
  links.map((link) => (
    it('renders each link text correctly', () => {
      const { getByText } = render(<Nav />);
      expect(getByText(link.label)).toHaveTextContent(link.label);
      expect(getByText(link.label)).toBeVisible();
    })));

  it('renders the correct number of links', () => {
    const { container } = render(<Nav />);
    expect(container.querySelectorAll('li')).toHaveLength(links.length);
  });
});
