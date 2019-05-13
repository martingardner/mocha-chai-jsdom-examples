const chai = require('chai');
const jsdom = require('jsdom-global');

global.document = jsdom();

const helperFunctions = require('../js/helper-functions');

describe('helper-functions.js tests', ()=> {

        describe('function checkColorForSymbol', ()=> {

            it('should return #FF0000 when given FF0000', ()=> {
                chai
                .expect( helperFunctions.checkColorForSymbol('FF0000') )
                .to
                .equal('#FF0000');
            });

            it('should return #FF0000 when given #FF0000', ()=> {
                chai
                .expect( helperFunctions.checkColorForSymbol('#FF0000') )
                .to
                .equal('#FF0000');
            });

        });

        describe('function stripColorSymbol', ()=> {

            it('should return FF0000 when given #FF0000', ()=> {
                chai
                .expect( helperFunctions.stripColorSymbol('#FF0000') )
                .to
                .equal('FF0000')
            });

            it('should return FF0000 when given FF0000', ()=> {
                chai
                .expect( helperFunctions.stripColorSymbol('FF0000') )
                .to
                .equal('FF0000')
            });

            it('should return FF0000 when given #FF0000#', ()=> {
                chai
                .expect( helperFunctions.stripColorSymbol('#FF0000#') )
                .to
                .equal('FF0000')
            });

        });

        describe('function classLengthQuery', ()=> {

            before( ()=> {
                jsdom();

                let elem = document.createElement('div');
                elem.classList.add('class-length-query');
                document.body.appendChild(elem);

                let doubleElemArr = ['one', 'two'];
                doubleElemArr.forEach( (val)=> {
                    let doubleElem = document.createElement('div');
                    doubleElem.classList.add('class-length-double');
                    doubleElem.innerHTML = val;
                    document.body.appendChild(doubleElem);
                });
            });

            it('should return 1 when given .class-length-query', ()=> {
                chai
                .expect( helperFunctions.classLengthQuery('.class-length-query') )
                .to
                .equal(1);
            });

            it('should return 2 when given .class-length-double', ()=> {
                chai
                .expect( helperFunctions.classLengthQuery('.class-length-double') )
                .to
                .equal(2);
            });


        });

});