import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Aside from "./pages/Aside"
import Blog from "./pages/Blog"
import Inicio from "./pages/Inicio"
import Tienda from "./pages/Tienda"
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="container">
          <section>
            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/tienda" element={<Tienda/>} />
            </Routes>
          </section>
          <Aside />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
