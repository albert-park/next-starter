import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Row from '../index';
import Link from 'next/link';

const renderTest = () => {
  return (
    render(
    <Row>
      <Link href="/">
        <a href="/" data-testid="test-child">Test Link</a>
      </Link>
    </Row>
    )
  )
}
  
describe('Layout Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = renderTest();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all children', () => {
    const { container, getByTestId } = renderTest();
    expect(container.children.length).toBeGreaterThan(0);
    expect(getByTestId("test-child")).toBeDefined();
  })
});
