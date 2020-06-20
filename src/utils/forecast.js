const request = require('request')





const forecast = (latitude,longitude,callback) =>{

const url = 'http://api.weatherstack.com/current?access_key=21d8bfb4a44411f11f5234a05eb8a194&query='+latitude+','+longitude+'&units=m'
        request({  url, json : true },(error,{  body }) => {
                if(error){
                            callback('unable to connect to weather service  ...',undefined)

                }
                else if(body.error){
                        callback('Unable to find the location  ...',undefined)

                }
                else{
                    //.current
                            //run the final correct code
                            
                    callback(undefined, body.current.weather_descriptions[0] + '   And  It is currently  '+body.current.temperature + '  degree  . ')
                }



        })


}

module.exports=forecast






