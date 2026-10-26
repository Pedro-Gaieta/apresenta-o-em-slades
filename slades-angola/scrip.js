let nextbtn = document.querySelector('.next');
let backbtn = document.querySelector('.back');

let conteiner  = document.querySelector('.conteiner');
let list = document.querySelector('.conteiner .list');
let thum = document.querySelector('.conteiner .thumb');

nextbtn.onclick = () => moversidadeOnclick('next');
backbtn.onclick = () => moversidadeOnclick('back');

function moversidadeOnclick(type){
    let listitem = document.querySelectorAll('.list .list-item');
    let thubitem = document.querySelectorAll('.thumb .thumb-list');

    console.log(listitem)
    console.log(thubitem)

    if (type === 'next') {
        list.appendChild(listitem[0]);
        thum.appendChild(thubitem[0]);
          
    }else{
        list.prepend(listitem[listitem.length - 1]);
        thum.prepend(thubitem[thubitem.length - 1]);
      conteiner.classList.add('next');
        conteiner.classList.add('back');
    }

    setTimeout(() => {
        conteiner.classList.add('next');
        conteiner.classList.add('back');    
    }, 3000);
}