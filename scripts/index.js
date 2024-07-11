import {missSomalia , updatelocalStorage} from '../data/missSomalia.js'; 

let missSomaliaHTML = ''; 

missSomalia.forEach(miss => {
    missSomaliaHTML += `
        <div class="miss-somalia" style="background-image: url('${miss.missIMG}');">
          <div class="miss-info">
            <p>${miss.missName}</p>
            <p>da,da : <span>${miss.missAge} Sano Jir</span></p>`
             missSomaliaHTML += `
            <p>Codadka Ay Heshay: <span>${miss.missVotes.missAllVotes}+</span></p>
            <button class="vote-btn" data-vote-id="${miss.missID}">U Codee💖</button> 
          </div>  
        </div>
    `;
    updatelocalStorage()
    document.querySelector('.miss-container').innerHTML = missSomaliaHTML; 

    document.querySelectorAll('.vote-btn').forEach(button => {
        button.addEventListener('click' , function(){
            const voteId = button.dataset.voteId; 
            window.location.href = `misssomalia.html?voteId=${voteId}`; 
        })
    })
})