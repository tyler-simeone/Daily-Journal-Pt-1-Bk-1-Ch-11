/* 
    This is strictly 'Helper' code. It is not this file's 
    responsibility to execute the code. 
*/

// Making DOM component to get json obj data onto page
const HTML = {
    makeJournalEntryComponent(journalEntry) {
        return `
            <h2>${journalEntry.concepts}</h2>
            <p>${journalEntry.entry}</p>
            <p>${journalEntry.date}</p>
        `
    }
}

// Making object to be posted to json DB w/ values of user inp
const FACTORY = {
    createEntry() {
        const dateEl = document.querySelector("#journalDate").value;
        const conceptsEl = document.querySelector("#journalConcepts").value;
        const entryEl = document.querySelector("#journalEntry").value;
        const moodEl = document.querySelector("#journalMood").value;
        if (dateEl === "" || conceptsEl === "" || entryEl === "") {
            window.alert("Please enter a value");
        } else {
            return {
                "date": dateEl,
                "concepts": conceptsEl,
                "entry": entryEl,
                "mood": moodEl
            }
        }
    }
}

export { FACTORY, HTML };