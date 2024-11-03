import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './Layout';

import LoginDashboard from './pages/LoginDashboard';
import Login from './pages/Login'
import Unauthorised from './pages/Unauthorised';
import Missing from './pages/Missing';
import AuthToken from './components/Context/AuthToken';

const App = () => {
  const { setAccessToken } = AuthToken();

  return (
    <main>
      <Toaster position='top-center' richColors />
      <Routes>
        <Route path='/' element={<LoginDashboard />} />
        <Route path='/login' element={<Login  />} />
        <Route path='/app/*' element={<Layout />} />
        <Route path='/unauthorised' element={<Unauthorised />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </main>
  );
};

export default App;
