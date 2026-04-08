const nums =[2,4,7,8,11,14]
const target = 18
let outcome = []
for (let i=0;i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++)
    {
        if(nums[i]+nums[j]===target){
        outcome.push([i,j])
    }
}
}
console.log(outcome)