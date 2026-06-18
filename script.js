let array = [];

generateArray();

function generateArray() {
    array = [];

    const container = document.getElementById("array-container");
    container.innerHTML = "";

    for (let i = 0; i < 30; i++) {
        let value = Math.floor(Math.random() * 300) + 20;
        array.push(value);

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;

        container.appendChild(bar);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length - i - 1; j++) {

            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";

            await sleep(50);

            if (array[j] > array[j + 1]) {

                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                bars[j].style.height = `${array[j]}px`;
                bars[j + 1].style.height = `${array[j + 1]}px`;
            }

            bars[j].style.background = "#00adb5";
            bars[j + 1].style.background = "#00adb5";
        }

        bars[array.length - i - 1].style.background = "green";
    }
}

async function selectionSort() {

    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < array.length; i++) {

        let minIndex = i;

        bars[minIndex].style.background = "red";

        for (let j = i + 1; j < array.length; j++) {

            bars[j].style.background = "yellow";

            await sleep(50);

            if (array[j] < array[minIndex]) {

                bars[minIndex].style.background = "#00adb5";
                minIndex = j;
                bars[minIndex].style.background = "red";
            } else {
                bars[j].style.background = "#00adb5";
            }
        }

        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

        bars[i].style.height = `${array[i]}px`;
        bars[minIndex].style.height = `${array[minIndex]}px`;

        bars[minIndex].style.background = "#00adb5";
        bars[i].style.background = "green";
    }
}

async function insertionSort() {

    const bars = document.getElementsByClassName("bar");

    for (let i = 1; i < array.length; i++) {

        let key = array[i];
        let j = i - 1;

        bars[i].style.background = "red";

        await sleep(50);

        while (j >= 0 && array[j] > key) {

            array[j + 1] = array[j];

            bars[j + 1].style.height = `${array[j]}px`;

            j--;

            await sleep(50);
        }

        array[j + 1] = key;

        bars[j + 1].style.height = `${key}px`;

        bars[i].style.background = "green";
    }
}
