let data = document.querySelector('.blogs ');
const renderPosts = async() => {
    let url = 'http://localhost:3000/posts?_sort=likes&_order=desc';
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

window.addEventListener('DOMContentLoaded', () => renderPosts());