const journalEntries = [
    {
        date: "01-19-2020",
        concepts: "Data collection with objects",
        entry: "In this exercise we covered how to record data input using objects and their properties.",
        mood: "happy"
    },
    {
        date: "01-19-2020",
        concepts: "Accessing nested data in objects",
        entry: "In this exercise we learned how to access deeply-nested data by chaining properties and array-index selectors to obtain the correct location in the data structure.",
        mood: "happy"
    },
    {
        date: "01-19-2020",
        concepts: "Git workflow",
        entry: "In this exercise we covered how to use git and github to save versions of our codebase to the github cloud, so that we won't lose our hard work and so that we have a reference to previous code versions if we need them.",
        mood: "happy"
    }
];

const makeJournalEntryComponent = (journalEntry) => {
    return `
        <h2>${journalEntry.concepts}</h2>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.date}</p>
    `
};

const containerEl = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
    for (let i = 0; i < journalEntries.length; i++) {
        containerEl.innerHTML += makeJournalEntryComponent(entries[i]);
    }
}

renderJournalEntries(journalEntries);