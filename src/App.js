import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const location = useLocation()
  const noHeaderPages = ['/login', "/signup", "/donate", "/feedback","/contact"]
  const showHeader = !noHeaderPages.includes(location.pathname)
  return (
    <div className="App">
      {showHeader && <Header/>}
      <Outlet/>
      {showHeader && <Footer/>}
    </div>
  );
}

export default App;
