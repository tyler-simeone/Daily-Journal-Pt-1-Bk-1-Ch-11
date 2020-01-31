import newJournalEntry from "journal.js"

/* 
    This is strictly 'Helper' code. It is not this file's 
    responsibility to execute the code. 
    
    Holds the piece that gets the data from the JSON server.
*/

    const API = {
        getJournalEntries () {
            return fetch("http://localhost:8088/entries")
                .then(response => response.json())
        },
        postJournalEntries () {
            return fetch("http://localhost:8088/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newJournalEntry)
            })
        }
    }

    export default API  