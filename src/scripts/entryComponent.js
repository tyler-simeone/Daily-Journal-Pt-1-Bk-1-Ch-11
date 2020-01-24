const makeJournalEntryComponent = (journalEntry) => {
    return `
        <h2>${journalEntry.concepts}</h2>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.date}</p>
    `
};