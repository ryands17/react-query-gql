import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { QueryClient, QueryClientProvider } from 'react-query'

it('shows the loading state', async () => {
  renderWithQueryClient(<App />)

  // before fetching
  expect(screen.getByText(/loading/i)).toBeInTheDocument()
})

it('renders the first 20 countries', async () => {
  renderWithQueryClient(<App />)

  expect((await screen.findByTestId('country-list')).children).toHaveLength(10)
  expect(
    (await screen.findByTestId('country-list')).children[0]
  ).toHaveTextContent(/andorra/i)
})

const renderWithQueryClient = (children: JSX.Element) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: 1,
        retry: 0,
      },
    },
  })
  return render(
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  )
}
