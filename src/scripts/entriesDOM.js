const containerEl = document.querySelector(".entryLog");

const DOM = {
    renderJournalEntries(jsonData) {
        containerEl.innerHTML += jsonData;
    }
} 

export {DOM, containerEl}