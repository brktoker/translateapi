const translateForm = document.getElementById("translate-form")
const translate = new Translate()
const ui = new UI()
eventlistener()

function eventlistener() {

    translateForm.addEventListener("submit", translateWord)
    document.getElementById("language").onchange = function () {
        ui.changeUI()
    }
}



function translateWord(e) {
    translate.changeParameters(document.getElementById("word").value, document.querySelector("#language").value)
    translate.translateWord()
        .then((data) => {
            ui.translateText(data)
            console.log(data)
        })
        .catch(err => console.log(err))

    e.preventDefault()
}