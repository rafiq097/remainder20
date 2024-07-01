let email = document.getElementById("email");
let messageBox = document.getElementById("message");

let res = fetch("/users/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

console.log(res);