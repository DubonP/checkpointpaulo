import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/Body/Body";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
            <Header />
            <Body />  
            <Footer />                      
            </div>
        );
    }
}

export default App;