/* 
    This is strictly 'Helper' code. It is not this file's 
    responsibility to execute the code. 
    
    Holds the piece that adds the DOM component to the page to
    make the JSON data visible.
*/

const containerEl = document.querySelector(".entryLog");

const DOM = {
    renderJournalEntries(jsonData) {
        containerEl.innerHTML += jsonData;
    }
}

export default DOM