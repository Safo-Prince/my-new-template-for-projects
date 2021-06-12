const quoteContainer =document.getElementById('quote-container')
const quoteText =document.getElementById('quote')
const authorText =document.getElementById('author')
const twitterBtn =document.getElementById('twitter')
const newQuoteBtn =document.getElementById('new-quote')


async function getQuote(){
const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/'
const apiURL ='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'

try{
const response = await fetch(proxyUrl + apiURL);
const data = await response.json()
// validating our author name because some quotes don't have authors
if(data.quoteAuthor ===''){
    authorText.innerText = 'unknown'
}else{
    authorText.innerText =data.quoteAuthor;
}

// reducing the font size for quotes with long words
if(data.quoteText.lenght > 120){
    quoteText.classList.add('long-quote');
}else{
    quoteText.classList.remove('long-quote');
}
quoteText.innerText = data.quoteText;
}catch(error){
    
}
}

function tweetQuote(){
    const quote = quoteText.innerText ;
    const author = authorText.innerText;
    const twitterUrl =`https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl,'_blank')
  }

  // Event listener
newQuoteBtn.addEventListener('click',getQuote)
twitterBtn.addEventListener('click',tweetQuote)
getQuote()