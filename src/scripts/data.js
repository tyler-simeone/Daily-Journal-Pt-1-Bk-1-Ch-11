import {FACTORY, HTML} from "./entryComponent.js"
import {DOM, containerEl} from "./entriesDOM.js"

/* 
    This is strictly 'Helper' code. It is not this file's 
    responsibility to execute the code.
*/

// Controls DB connections to my web page
const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    },
    getSomeJournalEntries(id) {
        return fetch(`http://localhost:8088/entries/${id}`)
            .then(resp => resp.json())
            .then(entry => {
                const entryAsHtml = HTML.makeJournalEntryComponent(entry)
                DOM.renderJournalEntries(entryAsHtml)
            })
            
    },
    saveJournalEntry (obj) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(r=>r.json())
    },
    rmJournalEntry(recipeId) {
        return fetch(`http://localhost:8088/entries/${recipeId}`, {
            method: "DELETE"  
        }).then(resp => resp.json())
    },
    editJournalEntry(recipeId) {
        const updatedObj = {
            date: document.querySelector("#journalDate").value,
            concepts: document.querySelector("#journalConcepts").value,
            entry: document.querySelector("#journalEntry").value,
            mood: document.querySelector("#journalMood").value
        }

        return fetch(`http://localhost:8088/entries/${recipeId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObj)
        })
            .then(resp => resp.json())
            
    }
}

export default API  