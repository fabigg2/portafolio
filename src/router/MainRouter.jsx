import { Route, Routes } from "react-router-dom"
import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import { Home } from "../pages/Home"
import { Skills } from "../pages/Skills"
import { Works } from "../pages/Works"

export const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
