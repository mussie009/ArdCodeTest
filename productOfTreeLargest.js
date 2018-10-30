function productOfThreeLargest(arr) {
    
    let firstLargest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    let thirdLargest = Number.NEGATIVE_INFINITY;

    for (i=0; i<arr.length ; i++) 
        { 
            /* If current element is smaller than 
            firstLargest*/
            if (arr[i] > firstLargest) 
            { 
                thirdLargest = secondLargest; 
                secondLargest = firstLargest; 
                firstLargest = arr[i]; 
            } 

            /* If arr[i] is in between firstLargest and 
            secondLargest then update secondLargest  */
            else if (arr[i] > secondLargest) 
            { 
                thirdLargest = secondLargest; 
                secondLargest = arr[i]; 
            } 

            else if (arr[i] > thirdLargest) {
                thirdLargest = arr[i]; 

            }
                
        } 
    
    return (firstLargest * secondLargest * thirdLargest);
};
