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
            <h1>Hello, world!</h1>
                <p>Welcome to your new single-page application, built with:</p>
                <img src={`${url}`}></img>
            <ul>
                <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            </ul>
            <p>To help you get started, we have also set up:</p>
            <ul>
                <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
                <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
                <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
            </ul>
            <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
            </div>
        );
    }

    async getImage() {
        let url = await storageRef.child(`check_${ Math.floor(Math.random() * 50) }.png`).getDownloadURL();
        this.setState({ url });
    }
}
