const bubble = (arr) => {
    let swaps = 0;
    let result;
    let arrLen = arr.length-1
    for (let i=0; i<arrLen; i++) {
        for(let j=0; j< arrLen-i;j++) {
            if (arr[j] > arr[j+1]) {
              let moveRight = arr[j+1]
              let moveLeft = arr[j]
              arr[j] = moveRight
              arr[j+1] = moveLeft
              swaps+=1
            }
        }
    }

    result = arr;
    console.log(`Final result: ${result} \nSwaps: ${swaps}`)
}

let sequence = [4, 3, 5, 0, 1]
bubble(sequence)

// output: 
// Final result: 0,1,3,4,5
// Swaps: 7
