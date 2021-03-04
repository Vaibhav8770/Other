let id = new URLSearchParams(window.location.search).get('id');
console.log(id);
let data = document.querySelector('.details');
let renderDetails = async() => {
    console.log('started');
    let res = await fetch('http://localhost:3000/posts/' + id);
    console.log("got data");
    let post = await res.json();
    console.log("response got");

    let template = `<div class="post">
                    <h1>${post.title}</h1>
                    <p>
                    <img src="${post.image}">
                    ${post.body}
                    </p>
                    </div>`
    data.innerHTML = template;
}
window.addEventListener('DOMContentLoaded', () => renderDetails())