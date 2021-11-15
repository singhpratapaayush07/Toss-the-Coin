
  const coin = document.querySelector('.coin');
  const button = document.querySelector('.button');
  const status= document.querySelector('#status');


  function deferFn(callback, ms) {
    setTimeout(callback, ms);
  }

  function updateResult(result){
    status.innerText = result.toUpperCase();
  }


  function flipCoin() {
    coin.setAttribute('class', '');
    const random = Math.random();
    const result = random < 0.5 ? 'head' : 'tail';
   deferFn(function() {
     coin.setAttribute('class', 'coin animate-' + result);
     deferFn(updateResult.bind(null, result), 2900);
   }, 100);
  }



  button.addEventListener('click', flipCoin);
