function intersection(arr1,arr2)
{
let result =[]
for(let i=0; i<arr1.length; i++)
    {
    let element=arr1[i]
    if(arr2.includes(element) && !result.includes(element))
    {
        result.push(element)
    }
}
return result
}
console.log(intersection([5,6,7,8], [7,8,9,0]))