function greeter(person: any) {
    return "Hello, " + person;
}

let user = "Pedrus";

document.body.innerHTML = greeter(user);