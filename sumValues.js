function sumofN(n)
{
    let sum=0
    for(let i=1;i<=n;i++)
{
    sum=sum+i
    console.log(i+ "=" +sum)
}
    return sum
}
let result=sumofN(5)
console.log("Final sum =" , result)
