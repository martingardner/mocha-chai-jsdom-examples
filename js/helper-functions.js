function checkColorForSymbol(color){
    if(color.indexOf('#') === -1){
        return '#' + color;
    } else {
        return color;
    }
}

function stripColorSymbol(color){
    if(color.indexOf('#') > -1){
        let indexes = [];
        for(let i = 0; i < color.length; i++){
            if(color[i] !== '#'){
                indexes.push(color[i])
            }
        }
        return indexes.join('');
    } else {
        return color;
    }
}

function classLengthQuery(target){
    return document.querySelectorAll(target).length;
}




//if(typeof module === 'undefined' && typeof module.exports !== 'undefined'){
    module.exports = {
        checkColorForSymbol : checkColorForSymbol,
        stripColorSymbol : stripColorSymbol,
        classLengthQuery : classLengthQuery
    }
//}