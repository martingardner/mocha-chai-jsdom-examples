const chai = require('chai');
chai.use( require('chai-dom') );
const jsdom = require('jsdom-global');

global.document = jsdom();

const vaDataToolFunc = require('../js/virtual-assistant-datatool');

describe('virtual-assistant-datatool.js', ()=> {

    before( ()=> {

        jsdom();

        let windowZ = document.createElement('div');
        let nameValid = document.createElement('input');
        let dialogValid = document.createElement('input');
        let saveData = document.createElement('div');

        nameValid.setAttribute('type', 'text');
        nameValid.name = 'name';
        nameValid.value = '';
        dialogValid.setAttribute('type', 'text');
        dialogValid.name = 'dialog';
        dialogValid.value = '';
        saveData.classList.add('save-data');

        windowZ.appendChild(saveData);
        windowZ.appendChild(nameValid);
        windowZ.appendChild(dialogValid);

        document.body.appendChild(windowZ);
    });

    describe('function returnValidationFields', ()=> {

        it('should contain name and dialog in the array when checked', ()=> {
            chai
            .expect( vaDataToolFunc.returnValidationFields() )
            .to
            .eql(['name', 'dialog'])
        });

    });

    describe('function returnAllFieldNames', ()=> {

        it('should contain name, subject, intent, trigger_id, topic_id, and dialog in the array', ()=> {
            chai
            .expect( vaDataToolFunc.returnAllFieldNames() )
            .to
            .eql(['name', 'subject', 'intent', 'trigger_id', 'topic_id', 'dialog'])
        });

    });

    describe('function clearFields', ()=> {

        it('should not have the hidden class on save-data', ()=> {
            document.querySelector('.save-data').classList.add('hidden');
            vaDataToolFunc.clearFields();

            chai
            .expect( document.querySelector('.save-data') )
            .not
            .to
            .have
            .class('hidden');
        });

        it('should not have a value for the name field', ()=> {
            document.querySelector('[name="name"]').value = 'Test';
            vaDataToolFunc.clearFields();

            chai
            .expect( document.querySelector('[name="name"]').value )
            .to
            .have
            .value()
        });

    });

});

