import './App.css'
import { useState } from 'react';
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact';
// import SelectedContact from "./components/SelectedContact.jsx";


export default function App() {
const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}  />
      )};
    </>
  );
}