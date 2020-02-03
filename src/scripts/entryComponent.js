/* 
    This is strictly 'Helper' code. It is not this file's 
    responsibility to execute the code. 
    
    Holds the piece that creates the DOM component that will hold
    the JSON data object's values.
*/

const HTML = {
    makeJournalEntryComponent(journalEntry) {
        return `
            <h2>${journalEntry.concepts}</h2>
            <p>${journalEntry.entry}</p>
            <p>${journalEntry.date}</p>
        `
    }
}



/*
    Posting user input to DOM...
*/


const FACTORY = {
    createEntry() {
        const dateEl = document.querySelector("#journalDate").value;
        const conceptsEl = document.querySelector("#journalConcepts").value;
        const entryEl = document.querySelector("#journalEntry").value;
        const moodEl = document.querySelector("#journalMood").value;
        // if (date || concepts || entry || mood === null || "") {
        //     window.alert("Please enter a value");
        // } else {
            return {
                "date": dateEl,
                "concepts": conceptsEl,
                "entry": entryEl,
                "mood": moodEl
            }
        // }
    }
}

export { FACTORY, HTML };