import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'

it('renders the first 20 countries', async () => {
  renderWithQueryClient(<App />)

  // before fetching
  const loadingText = screen.getByText(/loading/i)
  expect(document.body.contains(loadingText))
})

const renderWithQueryClient = (children: JSX.Element) => {
  const client = new QueryClient()
  return render(
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  )
}
