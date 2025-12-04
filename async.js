function getuserdetails(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve({userrollno:"678"}) 
        }, 2000);
    })
}
const myfun=async() =>{
    console.log("123")
    const result=getuserdetails("123")
    console.log(result)
    console.log("456")
}
console.log("456")
console.log("123")
myfun()