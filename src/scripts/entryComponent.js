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