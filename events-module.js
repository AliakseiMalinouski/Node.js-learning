// МОДУЛЬ СОБЫТИЙ EVENT EMMITER

const EventEmitter = require('events');

class JSX extends EventEmitter {
    createJsx () {
        this.emit('some_event', [
            {
                title: "Node.js"
            },
            {
                title: 'React'
            }
        ]);
    }
}

let jsx = new JSX();

jsx.on('some_event', (array) => {
    let result = array.map((elem, index) => (
    `<li>${elem.title} has number ${index}</li>`
    ));
    console.log(`<ul> ${result.join("")} </ul>`)
    return `<ul> ${result.join("")} </ul>`;
});

console.log(jsx.createJsx())



function generatePassword (data) {
    let {
        name, 
        email
    } = data;

    let result =  `${name} ${email}`.toLowerCase().trim();
    
    let resultWithoutSpaces = [];

    result.split("").forEach(elem => {
        if(elem === ' ') resultWithoutSpaces.push('')
        else resultWithoutSpaces.push(elem);
    });
    
    console.log(resultWithoutSpaces.join(""))

    return resultWithoutSpaces.join("");
}

emitter.on("register", generatePassword);

emitter.emit("register", {
    name: 'Aleksy',
    email: 'aleksyma li owsk i21@gm ail.c om'
});




