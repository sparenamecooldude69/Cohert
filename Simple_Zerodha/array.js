// let studentarray = [23,10,30,56,80];
// for(let i=0;i<=studentarray.length;i++){
//     if(studentarray[i]%2==0){
//     console.log(studentarray[i]);}  
// }
// const user1={
//     name:"hvowp",
//     gender:"male",
//     age:"48",
// }

// console.log(user1["age"])
const allstudents = [{
    firstname: "bsnvb",
    age: "46",
    gender: "male"
},
{
    firstname: "bsnvbwbw",
    age: "23",
    gender: "male"
},
{
    firstname: " bs",
    age: "4",
    gender: "female"
}
]       
for(let i=0;i<=allstudents.length;i++){
    if(allstudents[i]["gender"]=="male"){
        console.log(allstudents[i]["firstname"])
    }
}