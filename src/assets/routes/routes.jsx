import { Route, Routes } from 'react-router-dom'
import { Home } from '../containers/Home/'
import { Projects } from '../components/Projects'


function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Projects />} />
    </Routes>
  )
}

export default Router