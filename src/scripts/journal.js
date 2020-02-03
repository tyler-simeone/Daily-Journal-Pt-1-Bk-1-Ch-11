import API from "./data.js"
import { FACTORY , HTML } from "./entryComponent.js";
import DOM from "./entriesDOM.js"

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

API.getJournalEntries().then(parsedResp => {
    parsedResp.forEach(entry => {
        const entryAsHTML = HTML.makeJournalEntryComponent(entry);
        DOM.renderJournalEntries(entryAsHTML);
    })
});

const btn = document.querySelector("#save-entry");
btn.addEventListener("click", () => API.saveJournalEntry(FACTORY.createEntry()))

// Now createEntry is actually running thanks to '()'! 
// And the () => made code only execute when btn is clicked not on
//  page reload.