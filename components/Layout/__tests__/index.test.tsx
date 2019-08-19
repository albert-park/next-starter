import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Layout from '../index';

const mockLayoutProps = {
  title: 'Test title'
}

const mockHeadline = `Welcome to Next.js Starter ${mockLayoutProps.title} Page!`

describe('Layout Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Layout {...mockLayoutProps}/>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders headline with title prop', () => {
    const { getByText } = render(<Layout {...mockLayoutProps}/>)
    expect(getByText(mockHeadline)).toHaveTextContent(mockHeadline)
    expect(getByText(mockHeadline)).toBeVisible()
  })
})