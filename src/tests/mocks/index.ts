import { setupServer } from 'msw/node'
import { countryHandlers } from './countries'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...countryHandlers)
