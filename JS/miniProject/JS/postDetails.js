let postUrl = new URL(location);
let getPost = postUrl.searchParams.get('post');
let post = JSON.parse(getPost);

let allPostInfo = document.createElement("div")
allPostInfo.classList.add('postInfo');
const { userId, id, title, body } = post;

allPostInfo.innerHTML = `
<p>user id: ${userId}</p>
<p>Post id: ${id}</p>
<p>Post title: ${title}</p>
<p>Post body: ${body}</p>
`
document.body.appendChild(allPostInfo);

let commentHeader = document.createElement("h1");
commentHeader.innerHTML = 'All comments for this post';
document.body.appendChild(commentHeader);

let commentBox = document.createElement("div");
commentBox.classList.add('commentBox');
document.body.appendChild(commentBox)

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(value => {
        for (const comment of value) {
            let commentContainer = document.createElement("div");
            commentContainer.classList.add('commentContainer');
            commentContainer.innerHTML = `Comment: ${comment.body}`;
            commentBox.appendChild(commentContainer);
        }
    })