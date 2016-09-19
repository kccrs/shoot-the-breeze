export default function filterByUser(prop1, prop2) {  
    let filteredMessages = [];
    let filterBy = prop1;
    let regexp = new RegExp(filterBy, 'i');
    filteredMessages = prop2.filter(m => {
        if (regexp.test(m.user.uid)) {
            return m;
        }
    });
    return filteredMessages;
}
