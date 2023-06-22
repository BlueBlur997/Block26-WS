import { useState, useEffect } from "react";

export default function SelectedContact() {
    const [contact, setContacts] = useState
    useEffect(() => {
        async function fetchSelectedContacts() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${SelectedContact}`)
                console.log(response , `this is a response`)
                const result = await response.json();
                console.log(result , `this is the result`)
                setContact(result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSelectedContacts()
    }, []);
}