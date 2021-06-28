//animation
let threePage = document.getElementById('threePage');
let threePage1 = document.getElementById('threePage1');
let navbarHeading = document.getElementById('navbarHeading');
let hidden = document.getElementById('hidden');
let search = document.getElementById('search');
let x = 0;
hidden.addEventListener('click',function(){
    hidden.style.display = 'none';
    funPage();
})
function funPage(){
    if(x === 0){
        threePage.style.display = 'flex';
        threePage1.style.display = 'flex';
        threePage.style.animationName = 'pageAnimation';
        threePage1.style.animationName = 'pageAnimation1';
        navbarHeading.style.boxShadow = '0 0 40px rgb(189, 11, 11)';
        hidden.style.display = 'block'
        x = 1;
    }
    else if(x === 1){
        threePage.style.animationName = 'pageAnimationReturn';
        threePage1.style.animationName = 'pageAnimation1Return';
        navbarHeading.style.boxShadow = '0 0 2px rgb(189, 11, 11)';
        hidden.style.display = 'none';
        setTimeout(function(){
            threePage.style.display = 'none';
            threePage1.style.display = 'none';
        x = 0;
        },1000);
        x = 2;
    }
}

navbarHeading.style.width = navbarHeading.offsetWidth+1+'px';
navbarHeading.addEventListener('mouseenter',function(){
    navbarHeading.style.width = navbarHeading.offsetWidth+10+'px';
})
navbarHeading.addEventListener('mouseleave',function(){
    navbarHeading.style.width = navbarHeading.offsetWidth-10+'px';
})



// new page  A B C
let A = document.querySelector('.containerA');
let B = document.querySelector('.containerB');
let C = document.querySelector('.containerC');

let pagea = document.getElementById('pagea');
let pageb = document.getElementById('pageb');
let pagec = document.getElementById('pagec');
let paged = document.getElementById('paged');
let pagee = document.getElementById('pagee');
let pagef = document.getElementById('pagef');
pagea.style.color = 'rgb(100, 25, 25)';
paged.style.color = 'rgb(100, 25, 25)';
function funA(){
    funPage();
    A.style.display = 'block';
    B.style.display = 'none';
    C.style.display = 'none';
    search.style.display = 'block';
    pagea.style.color = 'rgb(100, 25, 25)';
    paged.style.color = 'rgb(100, 25, 25)';
    pageb.style.color = 'rgb(189, 11, 11)';
    pagec.style.color = 'rgb(189, 11, 11)';
    pagee.style.color = 'rgb(189, 11, 11)';
    pagef.style.color = 'rgb(189, 11, 11)';
}
function funB(){
    funPage();
    B.style.display = 'block';
    A.style.display = 'none';
    C.style.display = 'none';
    search.style.display = 'block';
    pageb.style.color = 'rgb(100, 25, 25)';
    pagee.style.color = 'rgb(100, 25, 25)';
    pagea.style.color = 'rgb(189, 11, 11)';
    pagec.style.color = 'rgb(189, 11, 11)';
    paged.style.color = 'rgb(189, 11, 11)';
    pagef.style.color = 'rgb(189, 11, 11)';

}
function funC(){
    funPage();
    C.style.display = 'block';
    B.style.display = 'none';
    A.style.display = 'none';
    search.style.display = 'none';
    pagec.style.color = 'rgb(100, 25, 25)';
    pagef.style.color = 'rgb(100, 25, 25)';
    pagea.style.color = 'rgb(189, 11, 11)';
    pageb.style.color = 'rgb(189, 11, 11)';
    paged.style.color = 'rgb(189, 11, 11)';
    pagee.style.color = 'rgb(189, 11, 11)';

}

//real stuff

//add book
let bookName = document.getElementById('bookName');
let authorName = document.getElementById('authorName');
let containerAddBook = document.getElementById('containerAddBook');
let bookNameVar = 0, authorNameVar = 0;
bookName.addEventListener('input',function(){
    if(bookName.value.length > 0){
        bookNameVar = 1;
    }
    else{
        bookNameVar = 0;
    }
})
authorName.addEventListener('input',function(){
    if(authorName.value.length > 0){
        authorNameVar = 1;
    }
    else{
        authorNameVar = 0;
    }
})
containerAddBook.addEventListener('mouseenter',function(){
    if(bookNameVar === 1 && authorNameVar === 1){
        containerAddBook.style.cursor = 'pointer';
        containerAddBook.style.boxShadow = '0 0 20px  rgb(189, 11, 11)';
        containerAddBook.style.width = containerAddBook.offsetWidth+8+'px';
    }
})
containerAddBook.addEventListener('mouseleave',function(){
    if(bookNameVar === 1 && authorNameVar === 1){
        containerAddBook.style.cursor = 'not-allowed';
        containerAddBook.style.boxShadow = 'none';
        containerAddBook.style.width = containerAddBook.offsetWidth-8+'px';
    }
})
containerAddBook.addEventListener('click',function(){
    containerAddBook.style.boxShadow = '0 0 20px  rgb(189, 11, 11)';
    containerAddBook.style.width = containerAddBook.offsetWidth+8+'px';
    bookNameVar = 0; authorNameVar = 0;
    setTimeout(function(){
        containerAddBook.style.boxShadow = 'none';
        containerAddBook.style.width = containerAddBook.offsetWidth-8+'px';
    },500);
    let authorNameValue = authorName.value;
    let bookNameValue = bookName.value;
    authorName.value = '';
    bookName.value = '';
    if(authorNameValue.length > 0 && bookNameValue.length > 0){
        containerAddBook.style.cursor = 'not-allowed';
        containerAddBook.style.boxShadow = 'none';
        containerAddBook.style.width = containerAddBook.offsetWidth-8+'px';
    }
})