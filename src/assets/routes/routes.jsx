import { Route, Routes } from 'react-router-dom';

import { Projects } from '../components/Projects';
import { Home } from '../containers/Home/';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Projects />} />
    </Routes>
  );
}

export default Router;
