let mainDiv = document.createElement("div");
mainDiv.classList.add('mainDiv');
document.body.appendChild(mainDiv);


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
        for (const user of value) {
            let eachUser = document.createElement("div");
            eachUser.classList.add('eachUser');
            eachUser.innerHTML = `${user.id}` + ' .' + `${user.name} <br>`;
            mainDiv.appendChild(eachUser);

            let btn = document.createElement("button");
            btn.classList.add('btn');
            btn.innerText = 'Details';
            eachUser.appendChild(btn);

            btn.onclick = () => {
                location.href = `./userDatails.html?user=${JSON.stringify(user)}`

            }

        }
    });