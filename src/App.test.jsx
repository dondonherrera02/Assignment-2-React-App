import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders Dondon Herrera on the page', () => {
    render(<App />)
    const nameElement = screen.getByText(/Dondon Herrera/i)
    expect(nameElement).toBeInTheDocument()
  })
})