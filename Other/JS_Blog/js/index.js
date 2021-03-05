let data = document.querySelector('.blogs');
let search = document.querySelector('.search');

const renderPosts = async(term) => {
    let url = 'http://localhost:3000/posts?_sort=likes&_order=desc';
    if (term) {
        url += `&q=${term}`
    }
    let res = await fetch(url);
    let posts = await res.json();
    console.log(posts);

    let template = "";
    posts.forEach(post => {
        template += `
        <div class="post">
        <h2>${post.title}</h2>
        <p>${post.body.slice(0,250)}
        </p>
        <a href="details.html?id=${post.id}">Read More.....</a>
        <span><i class="far fa-thumbs-up"></i> ${post.likes} Likes</span>
        </div>
        `
    });
    data.innerHTML = template;
};


search.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPosts(search.term.value);
})

window.addEventListener('DOMContentLoaded', () => renderPosts());