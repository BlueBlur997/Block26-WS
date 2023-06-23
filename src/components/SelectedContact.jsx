import { useState, useEffect } from "react";
import { render } from "react-dom";

export default function SelectedContact( {setSelectedContactId, selectedContactId} ) {
    const [contact, setContacts] = useState({});
    useEffect(() => {
        async function fetchSelectedContacts() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                console.log(response , `this is a response`)
                const result = await response.json();
                console.log(result , `this is the result`)
                setContacts(result);
                // console.log(contact , `state`)
            } catch (error) {
                console.log(error);
            }
        }
        fetchSelectedContacts()
    }, []);  
    
    
        return (
            <div style={{ height: `250px` }}>
                <h1>Your Selected Contact</h1>
                <p> {contact.name} </p>
                <p> {contact.email} </p>
                <p> {contact.phone} </p>
                <button onClick={() => {
                    setSelectedContactId(null)
                } } >Back</button>
            </div>
          );
    }