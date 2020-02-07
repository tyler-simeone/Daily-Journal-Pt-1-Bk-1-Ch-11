import API from "./data.js"
import { FACTORY , HTML } from "./entryComponent.js";
import DOM from "./entriesDOM.js"
import containerEl from "./entriesDOM.js"

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



// Posting user inp data to DB
const btn = document.querySelector("#save-entry");
btn.addEventListener("click", () => API.saveJournalEntry(FACTORY.createEntry()))
// Now createEntry is actually running thanks to '()'! 
// And the () => made code only execute when btn is clicked not on
// page reload.


const moods = document.getElementsByName("moods")

// moods.forEach(el => {
//     el.addEventListener("click", event => {
//         const mood = event.target.value

//         API.getJournalEntries().then(resp => resp.filter(entry => {
//             if (entry.mood !== mood) {
//                 const notMood = entry;
                
//                 API.rmJournalEntry(notMood.id)
                
//             }
//         }));
//     })
// })

moods.forEach(el => {
    el.addEventListener("click", event => {
        const mood = event.target.value

        API.getJournalEntries().then(resp => resp.filter(entry => {
            if (entry.mood === mood) {
                // containerEl.innerHtml = "";
                API.getSomeJournalEntries(entry.id)
                
            }
        }));
    })
})