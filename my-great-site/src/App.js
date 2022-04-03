import './App.css';
import Header from './Header/Header';

import Body from './Body/Body';
import Footer from './Footer/Footer';
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
