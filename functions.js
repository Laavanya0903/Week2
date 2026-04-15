//Function Declaration
function userProfile(name)
{
    console.log("Hello   " +  name)
}
userProfile("Laavanya")


//Arrow Function
const double =(num) => 
{
    return num*2
}
console.log(double(8))


//Anonymous Function
function message()
{
    console.log("This message is delayed by 2 seconds")
}
setTimeout(message, 2000)


//Callback Function
function getUserData(callback) 
{
    setTimeout(function () {
        const user = {
            name: "Laavanya", age: 28
        }
        callback(user)
    }, 3000)
}
getUserData(function (user)
 {
    console.log("Name:", user.name)
    console.log("Age:", user.age)
}
)