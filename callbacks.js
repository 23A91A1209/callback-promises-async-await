// function fun1(fun2){
//     console.log("fun1")
//     fun2();

// }
// function fun2(){
//     console.log("fun2");
// }
// fun1(fun2)


function getuserdetails(id,getusersubjects){
    console.log("getting userdetails",id)
    getusersubjects({rollno:"345"})
}
function getusersubjects(rollno,getusermarks){
    console.log("getting user subjects",rollno);
    getusermarks({subid:"en-1"})
}
function getusermarks(subid){
    console.log("getting users with subid",subid);
}
getuserdetails("123" ,function(rollno){
    getusersubjects(rollno,function(subid){
        getusermarks(subid)
    })
})