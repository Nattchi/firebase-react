import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth/cordova";
import GoogleSignin from "../assets/btn_google_signin_dark_pressed_web.png";

export function Welcome() {
    function googleSignIn() {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
    }

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in" type="button">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
        />
      </button>
    </main>
  );
}

