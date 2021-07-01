let form = document.querySelector('form');

let createPost = async(e) => {
    e.preventDefault();
    let detail = {
        title: form.title.value,
        body: form.body.value,
        image: form.image.value,
        likes: 0
    }

    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(detail),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    alert("Your Character Added Successfully")
    window.location.replace('index.html')
}
form.addEventListener('submit', createPost)