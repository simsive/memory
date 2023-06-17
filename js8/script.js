const card = document.querySelectorAll('.cell');
const front = document.querySelectorAll('.front');
const container = document.querySelector('.container')
const score = document.querySelector('.score span')
const result = document.getElementById("result")
const memory = document.getElementById("h22")
shuffleimage();
clicking();
function shuffleimage(){
    card.forEach(c=>{
      const num = [...Array(card.length).keys()];
      const random = Math.floor(Math.random()*card.length);

      c.style.order=num[random];
    });
}




function clicking(){
    for(let i =0; i<card.length; i++){

        front[i].classList.add('show')

        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);
       card[i].addEventListener("click",()=>{
        front[i].classList.add('flip');
       const flipped= document.querySelectorAll(".flip")

       if(flipped.length == 2){

    container.style.pointerEvents = 'none'

        setInterval(() => {
            container.style.pointerEvents = 'all'  
        }, 1000);
        matchMedia(flipped[0],flipped[1])
       }
       });
    }
}


   function   matchMedia(cardOne,cardTwo){
   if(cardOne.dataset.index ==cardTwo.dataset.index){
   score.innerHTML = parseInt(score.innerHTML) + 1
    cardOne.classList.remove('flip')
    cardTwo.classList.remove('flip')  
    cardOne.classList.add('match')
    cardTwo.classList.add('match')
    if(score.innerHTML == 6 ){
        document.getElementById("result").innerHTML= "  "
        memory.innerHTML="you won!"
    }
    
   }else{
    setTimeout(() => {
        cardOne.classList.remove('flip')
    cardTwo.classList.remove('flip')   
    }, 500);
 } 
   }
