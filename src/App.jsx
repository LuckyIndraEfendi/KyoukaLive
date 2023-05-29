import { Details, Dashboard, Homepage, Watch, Search } from "./pages"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/watch/anime/:animeId/:animeName/episode/:epsId" element={<Watch />} />
        <Route path="/details/anime/:animeId/:animeName" element={<Details />} />
        <Route path="/search/:animeName" element={<Search />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
