import {Types} from "../action-types/action-types";
import firebase from "firebase/compat/app";
import {signIn, signUp} from "../../services/http-services-auth";
import 'firebase/compat/auth';
import {getProfileDataAction} from "./profile-actions";

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

export const loginAction =  (navigate) => async (dispatch) => {
  const {user} = await auth.signInWithPopup(googleProvider);
  user.getIdToken().then(token => {
      signIn(token)
          .then(response => {
              if (response.ok) {
                  dispatch({type: Types.AUTH_TRUE})
                  dispatch({type: Types.AUTH_TOKEN_ID, payload: token})
                  dispatch(getProfileDataAction(token))
                  navigate(-1)
              } else {
                  signUp(token)
                      .then(response => {
                          if (response.ok) {
                              dispatch({type: Types.AUTH_TRUE})
                              dispatch({type: Types.AUTH_TOKEN_ID, payload: token})
                              dispatch(getProfileDataAction(token))
                              navigate(-1)
                          }
                      })
              }
          })
    })
};
