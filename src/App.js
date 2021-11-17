import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import AddMaterial from './pages/addMaterial';
import SearchMaterial from './pages/searchMaterial';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/addMaterial' element={<AddMaterial/>} />
		<Route path='/searchMaterial' element={<SearchMaterial/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/sign-up' element={<SignUp/>} />
	</Switch>
	</Router>
);
}

export default App;

