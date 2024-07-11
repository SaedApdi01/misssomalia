import { missSomalia ,updatelocalStorage } from "../data/missSomalia.js";


function getVoteID(id){
    const UrlParams = new URLSearchParams(window.location.search)
    return UrlParams.get(id)
}

function successVote(){
    updatelocalStorage()
    document.querySelector('.alert').style.display = 'block'
    document.querySelector('.alert').textContent = 'Waad ku Guulaysatay Codayntan'; 
    document.querySelector('.success').style.backgroundColor = '#4CAF50'; 
    document.querySelector('.miss-somali-cnt').style.display = 'none'; 
    document.querySelector('.miss-img').style.display = 'none'; 
}

function errorVote(){
    document.querySelector('.alert').style.display = 'block'
    document.querySelector('.alert').textContent = 'Fadlan hubi in evc numberkaagu uu yahay 7 number'; 
    document.querySelector('.success').style.backgroundColor = 'red'; 
}

const voteId = parseInt(getVoteID('voteId')); 
const checkMiss = missSomalia.filter(miss => miss.missID === voteId);
let missHTML = ''; 

checkMiss.forEach(miss => {
  missHTML += `
      <img class="miss-img" src="${miss.missIMG}" alt="">
        <div class="miss-vote">
         <div class="alert success">
            You voted!
        </div>
        <div class="miss-somali-cnt">
            <h2>${miss.missName}</h2>
            <p>${miss.missDesc}</p>
            <p>Kudir 0.1$ + (+2526534353) si,aad u caawiso Kabadha aad ucodaysay</p>
            <input  id="evc-number" type="number" placeholder="Enter your EVC number" required>
            <button  class="vote-btn" data-votenow-id="${miss.missID}">U Codee💖</button>
        </div>
        </div>
  `; 

  document.querySelector('.miss-info').innerHTML = missHTML; 

  document.querySelectorAll('.vote-btn').forEach(button => {
    button.addEventListener('click' , function(){ 
        const evcNumber = document.getElementById('evc-number'); 
        const evcValue = parseInt(evcNumber.value); 
        if(evcNumber.value.length > 7){
            miss.missVotes.missAllVotes++; 
            evcNumber.value = ''; 
           successVote()
        }else{
           errorVote()
        }
    })
  })

})