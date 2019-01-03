/* function range(start, end, step = start < end ? 1 : -1){
let numbers = new Array();

if(step > 0){

    for(let i = start;i<=end;i+=step){
        numbers.push(i);
    }

}else{

    for(let i = start;i>=end;i+=step){
        numbers.push(i);
    }

}


return numbers;
}

console.log(range(5, 2, -1));


function sum(array){

    let total=0;
    
    for(let a of array){
total +=a;
    }

    return total;

}

console.log(sum(range(1,10,2))); */

/* let arrayValue = [1, 2, 3, 4, 5];

function reverseArray(numbers){

    let newArray = Array();

    for(let i=numbers.length-1;i>=0;i--){

        newArray.push(numbers[i]);

    }

    return newArray;

}

console.log(reverseArray(arrayValue));

function reverseArrayInPlace(numbers){

    for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
        let old = numbers[i];
        numbers[i] = numbers[numbers.length - 1 - i];
        numbers[numbers.length - 1 - i] = old;
      }

      return numbers;

}



reverseArrayInPlace(arrayValue);
console.log(arrayValue); */


