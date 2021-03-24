const list = ['best', 'company', 'ever']

function rokket(lists) {
    let longer = ''

    lists.forEach(element => { 
        if(element.length > longer.length ){ 
            longer = element 
        }
    });

    return longer;
}


console.log(rokket(list));