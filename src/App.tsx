import React from 'react';
import './App.css';
import {Member} from './pages'
import Counter from "./pages/Counter";
import Greeting from './components/Greeting'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import SigninTest from './components/SigninTest';
import Signin from './components/Signin';
import HideTest from "./components/HideTest";
import CounterComponent from "./containers/CounterComponent";

const App = () => <div className="App">
    <CounterComponent/>
</div>


export default App;