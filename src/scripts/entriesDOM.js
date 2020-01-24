const containerEl = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
    containerEl.innerHTML += entries;
}