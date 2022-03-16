import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';

// components
import Header from "./pages/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import Authentication from "./pages/authentication/authentication.component";
import ShopPage from "./pages/shop/shop.compnent";
import { auth } from './firebase/firebase.utiles'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser : null
    }
  }
  unsubscribeFromAuth= null
  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Header/>}>
        <Route index element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/auth' element={<Authentication />} />
        </Route>
      
      </Routes>
    </div>
  );
  }
}

export default App;
