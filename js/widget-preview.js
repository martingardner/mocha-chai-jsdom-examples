let prevInterval = setInterval(checkIFrameExist, 500);

function checkIFrameExist(){
    let mainWidgetWrapper = document.getElementById('mainWidgetWrapper');
    if(mainWidgetWrapper){
        updateIFrame(mainWidgetWrapper);
    }
}

function updateIFrame(mainWidgetWrapper){
    clearInterval(prevInterval);
    mainWidgetWrapper.style.zIndex = '200';
}

module.exports = {
    prevInterval : prevInterval,
    checkIFrameExist : checkIFrameExist,
    updateIFrame : updateIFrame
}