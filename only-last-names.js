const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
]


function rokket(contacts) {
    return contacts.map(contact => contact.lastName)
}


console.log(rokket(contacts))