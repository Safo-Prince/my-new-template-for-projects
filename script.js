async function getQuote(){
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const apiURL ='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
try{
const response = await fetch(proxyUrl + apiURL);
const data = await response.json()
}catch(error){
    console.log('whoops,no quote',error)
}
}
getQuote()