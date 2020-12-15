import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

it('renders the first 20 countries', async () => {
  render(<App />)

  // before fetching
  const loadingText = screen.getByText(/loading/i)
  expect(document.body.contains(loadingText))
})
