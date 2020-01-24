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
