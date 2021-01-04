const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=88cb06ba50103cb611375faaa1f97483&query=45,-75&units=s'

const request = http.request(url, (response) =>{

    let data = ''

    response.on('data', (chunk) =>{
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})
  
request.on('error', (error) => {
    console.log('An error', error)
})

request.end()