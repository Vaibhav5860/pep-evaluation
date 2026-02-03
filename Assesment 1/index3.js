function once(func) {
    let notOnce = false;


    return function () {
        
        if (!notOnce) {
            notOnce = true;
            return func();
        }
    };
}

function greet() {
    console.log("Hello");
}

const greetOnce = once(greet);

greetOnce();
greetOnce(); 
greetOnce(); 