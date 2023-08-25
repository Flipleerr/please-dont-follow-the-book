document.write("jajajaj im not spanish!!!!1!")

function alertUser() {
    alert("OW!!!!")
}

var newWindow
function createWindow() {
    newWindow = window.open("", "", "height=300, width=300")
}

function closeWindow() {
    if (newWindow) {
        newWindow.close()
    }
}