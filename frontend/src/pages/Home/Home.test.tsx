import { render, screen } from "@testing-library/react"
import { Home } from "./index"

describe("<Home />", () => {
  it("should display Carapuce", () => {
    render(<Home />)
    const carapuce = screen.getByText(/Carapuce/)
    expect(carapuce).toBeInTheDocument()
  })
})
