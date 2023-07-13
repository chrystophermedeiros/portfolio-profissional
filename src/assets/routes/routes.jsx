import { Route, Routes } from 'react-router-dom'
import { Home } from '../containers/Home/'
import { Portfolio } from '../components/Portfolio'


function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}

export default Router