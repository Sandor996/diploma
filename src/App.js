import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

function App() {

  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
