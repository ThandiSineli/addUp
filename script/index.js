function calculateSum() {
    let inputArray = document.getElementById('Array').value;
    let numbers = inputArray.split(',').map(Number);
    let sum = numbers.reduce((acc, current) => acc + current, 0);
    document.getElementById('output').innerText = `The sum is: ${sum}`;
}

document.getElementById('Array').addEventListener('input', calculateSum);
