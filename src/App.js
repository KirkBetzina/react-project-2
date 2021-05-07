
import Main from './components/Main'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import './App.css';
import Header from './components/Header';
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/'>
            <Main/>
          </Route>
          <Route path ='/AboutMe'>
            <AboutMe/>
          </Route>
          <Route path ='/Main'></Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
