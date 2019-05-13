function returnValidationFields(){
    return ['name', 'dialog']
}

function returnAllFieldNames(){
    return ['name', 'subject', 'intent', 'trigger_id', 'topic_id', 'dialog']
}

function clearFields() {
    let fields = returnValidationFields();
    fields.forEach( (field)=> {
        document.querySelector(`[name="${field}"]`).value = '';
    })
    document.querySelector('.save-data').classList.remove('hidden');
}

module.exports = {
    returnValidationFields : returnValidationFields,
    returnAllFieldNames : returnAllFieldNames,
    clearFields : clearFields
}