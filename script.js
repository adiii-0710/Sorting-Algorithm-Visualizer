let array = [];
const arrayContainer = document.getElementById("array");

function generateArray() {
    array = [];
    arrayContainer.innerHTML = "";

    let size = parseInt(document.getElementById("size").value);

    if (size > 150) {
        alert("Please enter value less than or equal to 150");
        return;
    }

    for (let i = 0; i < size; i++) {
        let value = Math.floor(Math.random() * 300) + 20;
        array.push(value);

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = value + "px";

        // 🔑 Auto-scale bar width
        const containerWidth = arrayContainer.clientWidth;
        const barWidth = containerWidth / size - 2;
        bar.style.width = barWidth + "px";

        arrayContainer.appendChild(bar);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//  Bubble Sort
async function bubbleSort() {
    let bars = document.getElementsByClassName("bar");
    let speed = document.getElementById("speed").value;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {

            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";

            await sleep(speed);

            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                bars[j].style.height = array[j] + "px";
                bars[j + 1].style.height = array[j + 1] + "px";
            }

            bars[j].style.background = "steelblue";
            bars[j + 1].style.background = "steelblue";
        }
    }
}

// Selection Sort
async function selectionSort() {
    let bars = document.getElementsByClassName("bar");
    let speed = document.getElementById("speed").value;

    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        bars[minIndex].style.background = "orange";

        for (let j = i + 1; j < array.length; j++) {
            bars[j].style.background = "red";
            await sleep(speed);

            if (array[j] < array[minIndex]) {
                bars[minIndex].style.background = "steelblue";
                minIndex = j;
                bars[minIndex].style.background = "orange";
            } else {
                bars[j].style.background = "steelblue";
            }
        }

        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

        bars[i].style.height = array[i] + "px";
        bars[minIndex].style.height = array[minIndex] + "px";

        bars[minIndex].style.background = "steelblue";
    }
}

// Initial load
generateArray();
