import './App.css';
import Header from './components/Header/Header';

import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div className="app-wrapper" >
      <div className = "header">
        <Header />
      </div>
      <div className = "content">
        <Body />
      </div>
      <div className = "footer">
      <Footer />
      </div>
    </div>
  );
}

export default App;
