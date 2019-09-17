import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav, { links } from '../index';

const renderTest = () => {
  return (render(<Nav />))
} 

describe('Nav Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = renderTest();
    expect(asFragment()).toMatchSnapshot();
  });
  links.map((link) => (
    it('renders each link text correctly', () => {
      const { getByText } = renderTest();
      expect(getByText(link.label)).toHaveTextContent(link.label);
      expect(getByText(link.label)).toBeVisible();
    })));

  it('renders the correct number of links', () => {
    const { container } = renderTest();
    expect(container.querySelectorAll('li')).toHaveLength(links.length);
  });
});
