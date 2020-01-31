/* 
    This is strictly 'Helper' code. It is not this file's 
    responsibility to execute the code. 
    
    Holds the piece that gets the data from the JSON server.
*/

    const API = {
        getJournalEntries () {
            return fetch("http://localhost:8088/entries")
                .then(response => response.json())
        }
    }

    export default API