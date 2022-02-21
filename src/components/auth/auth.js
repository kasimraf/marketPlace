import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {connect} from "react-redux";
import {Types} from "../../redux/action-types/action-types";




const Auth = (props) => {

    firebase.initializeApp({
        apiKey: "AIzaSyARIsE_fCvCoXNHS8RDd1oZjghGdjcdYE0",
        authDomain: "marketplace-336916.firebaseapp.com",
        projectId: "marketplace-336916",
        storageBucket: "marketplace-336916.appspot.com",
        messagingSenderId: "128154773507",
        appId: "1:128154773507:web:41ee55e824a751838d0636",
        measurementId: "G-8H7YM96Q9K"
    });


    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider()

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider).then((res) => {
            console.log(res)
            res.user.getIdToken().then(r => {
                props.authTokenId(r)
                const Url = "http://localhost";
                const Port = "8080";
                const Version = 'v1'
                fetch(`${Url}:${Port}/api/${Version}/profile/signup`, {
                    headers: {
                        'Authorization': 'Bearer ' + r
                    },
                    method: "POST",
                }).then(response => props.authTrue())
            })

        }).catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div className="login-buttons">
            <button className="login-provider-button" onClick={signInWithGoogle}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
                <span> Continue with Google</span>
            </button>
        </div>
    );
}

export default connect(
    state => ({

    }),
    dispatch => ({
        authTrue: () => {
            dispatch({type: Types.AUTH_TRUE})
        },
        authTokenId: (token) => {
            dispatch({type: Types.AUTH_TOKEN_ID, payload: token})
        }
    })
)(Auth);