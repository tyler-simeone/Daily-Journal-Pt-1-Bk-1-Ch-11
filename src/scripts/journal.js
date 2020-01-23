fetch("http://localhost:3000/entries")
    .then(resp => resp.json())
    .then(parsedResp => {
        parsedResp.forEach(entry => {
            const entryAsHTML = makeJournalEntryComponent(entry);
            renderJournalEntries(entryAsHTML);
        })
    })

const makeJournalEntryComponent = (journalEntry) => {
    return `
        <h2>${journalEntry.concepts}</h2>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.date}</p>
    `
};

const containerEl = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
    containerEl.innerHTML += entries;
}

// renderJournalEntries(journalEntries);