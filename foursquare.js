var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.foursquare.com/v2/venues/search?client_id=IOEER2IWKPTOTFF3D51HCVIJ0SFGFAVC4UF5OFQ22R45QXNI&client_secret=O4CBHGMTRDUFOQS5O4VVVS5REYCYI0QQFK2S1JLEXN3S1ITG&v=20130815%20&ll=40.8608927,-73.8917978&limit=1", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
console.log(xhr.response);
var json = JSON.parse(xhr.response);
console.log(json.response.venues[0].location.address);







var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.foursquare.com/v2/venues/search?client_id=IOEER2IWKPTOTFF3D51HCVIJ0SFGFAVC4UF5OFQ22R45QXNI&client_secret=O4CBHGMTRDUFOQS5O4VVVS5REYCYI0QQFK2S1JLEXN3S1ITG&v=20130815%20&ll=40.8608927,-73.8917978&limit=1", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
console.log(xhr.response);
var json = JSON.parse(xhr.response);
console.log(json.response.venues[0].location.formattedAddress[0]+" "+json.response.venues[0].location.formattedAddress[1]+" "+json.response.venues[0].location.formattedAddress[2]); 
