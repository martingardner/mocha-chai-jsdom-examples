const chai = require('chai');
chai.use( require('chai-dom') );
const jsdom = require('jsdom-global');

global.document = jsdom();

const widgetPreviewFunctions = require('../js/widget-preview');

describe('widget-preview.js', ()=> {

    before( ()=> {
        jsdom();

        let windowZ = document.createElement('div');
        let mainWidgetWrapper = document.createElement('div');
        mainWidgetWrapper.id = 'mainWidgetWrapper';

        windowZ.appendChild(mainWidgetWrapper);
        document.body.appendChild(windowZ);

    });

    afterEach( ()=> {
        document.querySelector('#mainWidgetWrapper').getElementsByClassName.zIndex = '1';
    });

    it('prevInterval should exist', ()=> {
        chai
        .should( widgetPreviewFunctions.prevInterval )
        .should
        .exist
    });

    describe('function checkIFrameExist', ()=> {

        it('mainWidgetWrapper should exist', ()=> {
            widgetPreviewFunctions.checkIFrameExist();

            chai
            .should( document.querySelector('#mainWidgetWrapper') )
            .should
            .exist
        });

    });

    describe('function updateIFrame', ()=> {

        it('mainWidgetWrapper should have a zIndex of 200', ()=> {
            let mainWidgetWrapper = document.querySelector('#mainWidgetWrapper');
            widgetPreviewFunctions.updateIFrame( mainWidgetWrapper );

            chai
            .expect( mainWidgetWrapper.style.zIndex )
            .to
            .equal('200')
        });

    });

});