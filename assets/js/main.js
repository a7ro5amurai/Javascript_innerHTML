// const sayHello = document.getElementById("info");
// console.log(info);

document.getElementById("info").innerHTML = "<h2>Hello World</h2>";

document.getElementById("info").innerHTML += "<h3>How are you?</h3>";

// sayHello.innerHTML = "<h2>Hello World</h2>";
// sayHello.innerHTML += "<h3>How are you?</h3>";

// const Container = document.getElementById("container")

// Container.innerHTML = "<p>start of the element</p>"

document.getElementById("container").innerHTML = "<p>start of the element</p>"

document.write("end of the element")

let parrot = "<img src='./assets/img/david-clode-EmrBdJ4G0CE-unsplash.jpg' alt='parrot'>"

document.getElementById("gallery").innerHTML = `<figure> ${parrot} <figcaption>Fig 1</figcaption> </figure>`
document.getElementById("gallery").innerHTML += `<figure> ${parrot} <figcaption>Fig 2</figcaption> </figure>`
document.getElementById("gallery").innerHTML += `<figure> ${parrot} <figcaption>Fig 3</figcaption> </figure>`
