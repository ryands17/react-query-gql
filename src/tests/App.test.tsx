import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import { QueryClient, QueryClientProvider } from 'react-query'

it('shows the loading state', async () => {
  renderWithQueryClient(<App />)

  // before fetching
  await waitFor(() => {
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })
})

it('renders the first 20 countries', async () => {
  renderWithQueryClient(<App />)

  await waitFor(() => {
    expect(screen.getByTestId('country-list').children).toHaveLength(10)
    expect(screen.getByTestId('country-list').children[0]).toHaveTextContent(
      /andorra/i
    )
  })
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
