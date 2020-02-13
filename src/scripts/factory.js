// Making DOM component to get json obj data onto page
const HTML = {
    makeJournalEntryComponent(journalEntry) {
        return `
            <section id="${journalEntry.id}" class="dynamicContent__container">
                <h2>${journalEntry.concepts}</h2>
                <p>${journalEntry.entry}</p>
                <p>${journalEntry.date}</p>
                <div id="btnContainer" class="dynamicBtn__container">
                    <button id="editBtn--${journalEntry.id}" class="editBtn">
                        Edit
                    </button>
                    <button id="deleteBtn--${journalEntry.id}" class="deleteBtn">
                        Delete
                    </button>
                </div>
            </section>
        `
    }
}

// Making object to be POSTed to json DB w/ values of user inp
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
export {FACTORY, HTML}