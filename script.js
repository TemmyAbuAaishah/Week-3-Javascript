let greeting = "Hello world";
console.log(greeting);

let a = 5;
console.log(a);

let b = 10;
console.log(b);

if (a > b) {
    console.log("true");
} else {
    console.log("false");
}

function add (a, b) {
    return a + b;
}
console.log(add(5, 10));

function subtract (a, b) {
    return a - b;
}
console.log(subtract(5, 10));

function multiply (a, b) {
    return a * b;
}
console.log(multiply(a, b));

function divide (b, a) {
    return b/a;
}
console.log(divide(10, 5));

const title = document.getElementById('title');
const button = document.querySelector('#changeTitleBtn');
button.addEventListener('click', () => {
    title.textContent = "Title Changed!";
});


const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
    }
});
