import React, { Component } from 'react';
import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD27FMMpEt0QF6J6-enj6upm9etg8_6sjI",
    authDomain: "citi-hbcu.firebaseapp.com",
    projectId: "citi-hbcu",
    storageBucket: "citi-hbcu.appspot.com",
    messagingSenderId: "558865536745",
    appId: "1:558865536745:web:18272077222d6c25138278",
    measurementId: "G-29EZG0XFRC"
};

firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();

var storageRef = storage.ref();

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { url: "" };
    }

    componentDidMount() {
        this.getImage();
    }

    render() {

        let { url, files } = this.state;

        return (
            <div>
            <div class="nav-container">
                <div class="wrapper">
                    <nav>
                        <div class="logo"> CHECK BOT </div>
                        <ul class="nav-items">
                            <li>
                                Powered by Hello World
	                        </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="header-container">
                <div class="wrapper">
                    <header>
                        <div>
                            
                                <p>
                                <br />
                                <img src={`${url}`}></img>
                                    <br />QUICK.<br /><br />EFFORTLESS. <br /><br /> EFFICIENT. <br /><br />
                                    <button onClick={this.upload}>Try It</button>
                                </p>
                                
                                <br /><br />

                            
                                
                        </div>
                    </header>
                    
                </div>
            </div> 
            </div>
        );
    }

    upload() {
        /*
            Get OCR Results
        */
    }

    async getImage() {
        let url = await storageRef.child(`check_${ Math.floor(Math.random() * 50) }.png`).getDownloadURL();
        this.setState({ url });
    }

}
