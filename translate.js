function Translate(word, language) {
    this.apiKey = "trnsl.1.1.20200516T230738Z.a73114777ffe4800.f2efbbc684ec9d920dd2e2f53ea55dcf4eb8902c"
    this.word = word
    this.language = language
}


Translate.prototype.translateWord = function () {

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.word}&lang=${this.language}`

    return new Promise((resolve, reject) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })

}


Translate.prototype.changeParameters = function (newWord, newLanguage) {
    this.language = newLanguage
    this.word = newWord
}
