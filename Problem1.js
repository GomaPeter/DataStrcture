//intialize Functions
function sumofDistinctElements(set1, set2) {
  let distinctElements = [];

  // comparing element of set1 to set2 and element not present in both is added to the Distinctelement
  for(let i = 0; i < set1.length; i++) {
    if(!set2.includes(set1[i])) {
      distinctElements.push(set1[i]);
    }
  }

  // comparing element of set2 to set1 and element not present in both is added to Distinctelement
  for(let i = 0; i < set2.length; i++ ) {
    if(!set1.includes(set2[i])) {
      distinctElements.push(set2[i]);
    }
  }
  //intialize the the sum of Distinct Element
  let sum = 0;
  for (let i = 0; i < distinctElements.length; i++) {
    sum += distinctElements[i];
  }

  return sum;
}

//Examples Based on element Given
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumofDistinctElements(set1, set2);
console.log(result);