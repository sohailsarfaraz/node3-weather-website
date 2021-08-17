const request = require('request')

const forecast = (location, latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dade6161dad8f8c812c3b05d47acd749&query=' + location;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log('body',body);
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast