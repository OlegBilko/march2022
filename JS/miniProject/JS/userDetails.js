let url = new URL(location);
let getUser = url.searchParams.get('user');
let user = JSON.parse(getUser);

let allUserInfo = document.createElement("div");
allUserInfo.classList.add('wrapUserDetails');

allUserInfo.innerHTML = `
<h2> ${user.id}. ${user.name} </h2><br>
<h3>Username: ${user.username}</h3><br>
<p>Email: ${user.email}</p>

Address: <br>
<p class="address">street: ${user.address.street}<br> 
suite: ${user.address.suite}<br>
city: ${user.address.city}<br>
zipcode: ${user.address.zipcode}</p>
<span class="geoWord">Geo:</span>
 <p class="geo">
 lat: ${user.address.geo.lat}<br>
 lng: ${user.address.geo.lng}</p>
 
 phone: ${user.phone} <br>
 website: ${user.website}<br>
 
 Company:<br>
 <p class="company">company name: ${user.company.name}<br>
 catchPhrase: ${user.company.catchPhrase}<br>
 bs: ${user.company.bs}</p>
`
document.body.appendChild(allUserInfo);
let postBtn = document.createElement('button');
postBtn.classList.add('btn');
postBtn.classList.add('btnGetPost');
postBtn.innerText = "post of current user";
allUserInfo.appendChild(postBtn);

postBtn.onclick = () => {
    let wrapForTitles = document.createElement("div");
    wrapForTitles.classList.add('wrapForTitles');
    document.body.appendChild(wrapForTitles);

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(value => {
            for (const post of value) {
                let userPost = document.createElement("div");
                userPost.innerHTML = `${post.title} <br>`;
                userPost.classList.add('postTitle');
                wrapForTitles.appendChild(userPost);

                postBtn.onclick = '';  //щоб при повторному кліку не дублювались тайтли постів

                let postDetailsBtn = document.createElement("button");
                postDetailsBtn.classList.add('btn');
                postDetailsBtn.innerText = 'Post Details';
                userPost.appendChild(postDetailsBtn);

                postDetailsBtn.onclick = () => {
                    location.href = `../HTML/postDetails.html?post=${JSON.stringify(post)}`;
                }
            }
        });
};
