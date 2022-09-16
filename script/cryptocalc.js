function divideBuy() 
{ 
        numbtc = document.getElementById("btc").value;
        numusd = document.getElementById("usd").value;
        document.getElementById("result").innerHTML = numusd / numbtc;
}
