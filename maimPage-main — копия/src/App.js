import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './components/mainPage';
import { PageWithGraph } from './components/secondPage';

class App extends React.Component {

  render() {
    return (
      <div id='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage></MainPage>}></Route>
            <Route path="/largeGraph" element={<PageWithGraph></PageWithGraph>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
