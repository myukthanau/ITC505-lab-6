// Display last modified date
var x = document.lastModified;
document.getElementById('lastModified').textContent = x;

// Function to perform bubble sort in descending order
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] < arr[j + 1]) { // Change comparison for descending order
                // Swap values
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Event listener for sorting numbers
document.getElementById("sortButton").addEventListener("click", function () {
    let input = document.getElementById("numberInput").value;
    // Split input by commas, trim spaces, and convert each to a number
    let array = input.split(",").map(num => parseFloat(num.trim()));  
    
    // Check if any value is NaN (invalid input)
    if (array.some(isNaN)) {
        document.getElementById("sortedArrayDisplay").textContent = "Please enter valid numbers.";
    } else {
        let sortedArray = bubbleSort(array); // Sort the array in descending order
        document.getElementById("sortedArrayDisplay").textContent = sortedArray.join(", ");
    }
});
