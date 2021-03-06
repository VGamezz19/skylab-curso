//const bl = require('bl')

const concatStreem = require('concat-stream')
//node . 'http://google.com'
const http = require('http')
const [node, path, ...url] = process.argv

function httpReque(url, i = 0, otherHttp = '') {
    if (!url instanceof Array) throw new Error("httpReque([...]) <-- it shuld be an Array!")
    if (i === url.length) return;

    return httpReque(url, i + 1, http.get(url[i], (res) => {
        res.setEncoding('utf-8')
        res.pipe(
            concatStreem(data => {
                console.log(data)

                return otherHttp
            })
        )
    }))
}

httpReque(url)
