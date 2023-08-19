let password = document.getElementById("password")
let email = document.getElementById("email")

const Login = async () => {
    let data = {
        Email: email.value,
        Name: "vi nguyen",
        Password: password.value,
        Role: 1,
    }
    try {
        let oke = await fetch("https://teachingserver.org/U2FsdGVkX18AeiJ4nGv9yOelNe9kZ+zcuHnWdjS+pINBxUg9sSeXfw==/user/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
        if (oke.status === 200) {
            window.location = "https://www.youtube.com/watch?v=6nJrZ8BfPmI"
        }
    } catch (error) {
        alert(error)
    }
}