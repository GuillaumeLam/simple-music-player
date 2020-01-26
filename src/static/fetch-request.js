const request = require('request');
request('http://conuhacks-2020.tsp.cld.touchtunes.com/', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

let req= request.get('http://conuhacks-2020.tsp.cld.touchtunes.com/', {
  'auth': {
    'Authentication': 'b69e0bf19bbe341dd71adfab54fbabcb'
  }
});

	    fetch(req)
            .then( (response)=>{
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error('BAD HTTP stuff');
                }
            })
            .then( (jsonData) =>{
                console.log(jsonData);
                p.textContent = JSON.stringify(jsonData, null, 4);
            })
            .catch( (err) =>{
                console.log('ERROR:', err.message);
            });
       


