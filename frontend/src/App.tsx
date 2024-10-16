import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Root } from "./components/Root"

import { Home } from "./pages/Home"
import { PokemonPage } from "./pages/PokemonPage"

export const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonPage />} />
        </Routes>
      </BrowserRouter>
    </Root>
  )
}
