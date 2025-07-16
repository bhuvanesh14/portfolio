const numbers = [1, 2, 3, 4, 5, 6];


const numGreaterthan5 = numbers.filter(val => val > 5);
console.log(numGreaterthan5);

const mappedNUmbers = numbers.map(val => ({num: val}));
console.log(mappedNUmbers);

const mul = numbers.reduce(
    (curResult, curValue) => curResult * curValue, 
    1
    );
    console.log(mul);   

    function findmax(...nums) {
        let curMax = nums[0];
        let curMin = nums[0];
        for(const num of nums) {
            if(num > curMax) {
                curMax = num;
            }
            if(num < curMin) {
             curMin = num;
            }
        }
        return [curMin, curMax];
    }

    const [min, max] =  findmax(...numbers);
    console.log(min, max);

    const userIds = new Set();
    userIds.add(10);
    userIds.add(-5);
    userIds.add(-5);

    console.log(userIds);