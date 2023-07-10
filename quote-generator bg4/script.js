const nxtBtn = document.getElementById("nxtBtn");
const quote = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".quote-author");

nxtBtn.addEventListener("click", randomQuote);

async function randomQuote(){
    const res =  await fetch('https://dummyjson.com/quotes/random');
    const data = await res.json();
    console.log(data.quote)
    const random = Math.floor(Math.random() * data);
    
    // let random_quote = data[random];
    // let random_author  = data[random].author;

   quote.innerHTML = data.quote;
   quoteAuthor.innerHTML =  data.author;
   
}
randomQuote()