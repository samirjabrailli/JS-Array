let txt = document.getElementById("txt")

let arr = [2,3,4,5,6,7,8,9,10]

let elave = arr.push(11,12,13,14,15,16,17,18,19,20)

arr.shift()

console.log();

function bas() {
    
    for(i = 0; i < arr.length; i++){
        if(arr[i] %2 == 0){
            console.log(arr[i]);
            
        }
    }
}