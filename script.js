const container = document.querySelector('.container');
const names =["Joe", "John", "Mary", "Miranda", "Liliana"];
const occupation = ["Surgon", "Contracter", "Author", "Teacher" ];
const prices = ["$30", "$40", "$50", "$60", "$70", "$80"];

function randomPerson(){
    const nameIdx = Math.floor(Math.random()* names.length);
    const jobIdx = Math.floor(Math.random()* occupation.length);
    const priceIdx = Math.floor(Math.random()* prices.length);
    const person = {
        name: names[nameIdx],
        job: occupation[jobIdx],
        price: prices[priceIdx]
    };

    return person;
}

const freelancers = [ randomPerson(), randomPerson()];


function mkList(){
    const html = freelancers.map((person) => {
        return `<li> ${person.name} Occupation: ${person.job} Price / HR: ${person.price}</li>`
    });
    container.innerHTML = html.join('');
}

setInterval( ()=> {
    const newPerson = randomPerson();
    freelancers.push(newPerson);
    mkList();
    
}, 1000);
mkList();