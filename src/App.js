import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';

// components
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import Login from "./pages/logIn/login.component";
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
      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
  }
}

export default App;
