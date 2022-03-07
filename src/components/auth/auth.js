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
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                <span> Войти с помощью Google</span>
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