fetch("http://localhost:3000/entries")
    .then(resp => resp.json())
    .then(parsedResp => {
        parsedResp.forEach(entry => {
            const entryAsHTML = makeJournalEntryComponent(entry);
            renderJournalEntries(entryAsHTML);
        })
    })