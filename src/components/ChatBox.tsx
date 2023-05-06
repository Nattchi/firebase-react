import Message from "./Message"
import {SendMessage} from "./SendMessage"
import { Key, useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";

export function ChatBox() {
    const [messages, setMessages] = useState([]);
    const scroll = useRef() as any;

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const messages:any = [];
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return (() => unsubscribe) as any;
    }, []);
    
    return (
      <main className="chat-box">
          <div className="message-wrapper">
                {messages?.map((message: { id: Key }) => (
                    <Message key={message.id} message={message} />
                ))}
          </div>
            {/* when a new message enters the chat, the screen scrolls dowwn to the scroll div */}
            <span ref={scroll}></span>
            <SendMessage scroll={scroll} />
      </main>
  )
}
