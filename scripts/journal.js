const journalEntry = {
    date: "01-19-2020",
    concepts: "Data collection with objects",
    entry: "In this exercise we covered how to record data input using objects and their properties.",
    mood: "happy"
};

const journalEntry_2 = {
    date: "01-19-2020",
    concepts: "Accessing nested data in objects",
    entry: "In this exercise we learned how to access deeply-nested data by chaining properties and array-index selectors to obtain the correct location in the data structure.",
    mood: "happy"
};

const journalEntry_3 = {
    date: "01-19-2020",
    concepts: "Git workflow",
    entry: "In this exercise we covered how to use git and github to save versions of our codebase to the github cloud, so that we won't lose our hard work and so that we have a reference to previous code versions if we need them.",
    mood: "happy"
};
let journalEntries = [];

journalEntries.push(journalEntry);
journalEntries.push(journalEntry_2);
journalEntries.push(journalEntry_3);

// console.log(journalEntries);