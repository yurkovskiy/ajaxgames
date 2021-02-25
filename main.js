const btn = document.getElementById("btnData");
const userdata = document.getElementById("userdata");


btn.addEventListener("click", handler);

// call to github
async function getData(username) {
    const URI = `https://api.github.com/users/${username}`;
    return await fetch(URI).then((response) => {
        return response.json();
    });
}

// UI generator
function buildUI(data) {
    data.then((resp) => {
        for (let item in resp) {
            let elem = document.createElement("li");
            elem.innerText = `${item}: ${resp[item]}`;
            userdata.appendChild(elem);
        }
    });
}


function handler() {
    return buildUI(getData(document.getElementById("user").value));
}