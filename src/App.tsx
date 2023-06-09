import { auth } from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavBar } from 'components/NavBar'
import { ChatBox } from 'components/ChatBox'
import { Welcome } from 'components/Welcome'
import './App.css'

export default function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}
