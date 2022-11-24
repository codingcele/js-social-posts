const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let container = document.getElementById("container");

posts.forEach(function(element) {

    let src = element["author"].image;

    let name = element["author"].name;

    let initialDate = element["created"];
    let myArray = initialDate.split("-");
    let date = myArray[1] + "-" + myArray[2] + "-" + myArray[0];

    let text = element["content"];

    let image = element["media"];

    let likesNum = element["likes"];

    container.innerHTML += `<div class="post">
                                <div class="post__header">
                                    <div class="post-meta">                    
                                        <div class="post-meta__icon">
                                            <img class="profile-pic" src=${src}>                    
                                        </div>
                                        <div class="post-meta__data">
                                            <div class="post-meta__author">
                                                ${name}
                                            </div>
                                            <div class="post-meta__time">
                                                ${date}
                                            </div>
                                        </div>                    
                                    </div>
                                </div>
                                <div class="post__text">
                                    ${text}
                                </div>
                                <div class="post__image">
                                    <img src=${image} alt="">
                                </div>
                                <div class="post__footer">
                                    <div class="likes js-likes">
                                        <div class="likes__cta" id="likes__cta">
                                            <a class="like-button  js-like-button" data-postid="1">
                                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                <span class="like-button__label">Mi Piace</span>
                                            </a>
                                        </div>
                                        <div class="likes__counter">
                                            Piace a <b id="like-counter-1" class="js-likes-counter">${likesNum}</b> persone
                                        </div>
                                    </div> 
                                </div>            
                            </div>`;                        
})

for (let i = 0; i < posts.length; i++) {
    let clicked = false;
    let likesBtn = document.getElementsByClassName("likes__cta");
    let likesCounter = document.getElementsByClassName("js-likes-counter");
    let likeIcon = document.getElementsByClassName("like-button__icon fas fa-thumbs-up");
    let miPiace = document.getElementsByClassName("like-button__label");
    likesBtn[i].addEventListener("click", function() {
        if (!clicked) {
            clicked = true;
            likesCounter[i].textContent++;
            likeIcon[i].classList.add("red");
            miPiace[i].classList.add("red");
        }
        else {
            clicked = false;
            likesCounter[i].textContent--;
            likeIcon[i].classList.remove("red");
            miPiace[i].classList.remove("red");
        }
    })
}






/* for (let i = 0; i < posts.length; i++) {
    let element = posts[i];

    let post = `<div class="post" id="post"></div>`;
    container.innerHTML += post;

    let postHeader = `<div class="post__header" id="post__header"></div>`;
    document.getElementById("post").innerHTML += postHeader;

    let postMeta = `<div class="post-meta" id="post-meta"></div>`;
    document.getElementById("post__header").innerHTML += postMeta;

    let postMetaIcon = `<div class="post-meta__icon" id="post-meta__icon"></div>`;
    document.getElementById("post-meta").innerHTML += postMetaIcon;

} */


/* let addPosts = function() {
    let post = `<div class="post" id="post"></div>`;
    container.innerHTML += post;

    let postHeader = `<div class="post__header" id="post__header"></div>`;
    document.getElementById("post").innerHTML += postHeader;


    let postMeta = `<div class="post-meta" id="post-meta"></div>`;
    document.getElementById("post__header").innerHTML += postMeta;

    let postMetaIcon = `<div class="post-meta__icon" id="post-meta__icon"></div>`;
    document.getElementById("post-meta").innerHTML += postMetaIcon;

    let imgAuthor = ["author"].image;
    let icon = `<img class="profile-pic" id="profile-pic" src=${imgAuthor} alt="Phil Mangione"></img>`;
    document.getElementById("post-meta__icon").innerHTML += icon;

    let postMetaData = `<div class="post-meta__data" id="post-meta__data"></div>`
    document.getElementById("post-meta").innerHTML += postMetaData;
    
    let name = ["author"]["name"]
    let date = ["created"];
    let postMetaAuthor = `<div class="post-meta__author" id="post-meta__author">${name}</div>`;
    let postMetaTime = `<div class="post-meta__time" id="post-meta__time">${date}</div>`;
    document.getElementById("post-meta__data").innerHTML += postMetaAuthor;
    document.getElementById("post-meta__data").innerHTML += postMetaTime;
} */

