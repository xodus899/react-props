import React from "react";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div className="contacts">
      <h1>My Contacts</h1>
      <ContactCard
        name="John"
        img="https://picsum.photos/200"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
      <ContactCard
        name="Tiger"
        img="https://picsum.photos/200"
        tel="234 567 8901"
        email="theTiger@mail.com"
      />
      <ContactCard
        name="Mickelson"
        img="https://picsum.photos/200"
        tel="345 678 9012"
        email="M@mail.com"
      />
    </div>
  );
}

export default App;
