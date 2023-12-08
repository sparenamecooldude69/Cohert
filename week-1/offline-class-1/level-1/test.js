// // function getlength(str){
// // console.log(str);
// // console.log(str.length);
// // return str.length;
// // }
// // getlength("Bharat Krishna Verma");


// // function findex(str,target){
// // console.log(str);
// // console.log(str.lastIndexOf(target));
// // }
// // findex("bharat krishna krishna krishna","krishna");

// //SLICE
// // function string_in_range(string,start,end){
// //     console.log("string is :",string);
// //     console.log("requires string is:",string.slice(start,end));
// // }
// // string_in_range("bharat_krishna_verma",0,7);




// // function cutstring(string,startindex,endindex)
// // {
// //     let newstring="";
// //     for(let i=0;i<string.length;i++){
// //         if(i>=startindex&&i<endindex){
// //             newstring=newstring+string[i];
// //         }
// //     }
// //     return newstring;
// // }
// // let value="Bharat_Krishna_Verma";
// // console.log(cutstring(value,3,7));

// //SPLIT
// // const value="Bharat_Krishna_Verma";
// // const array=value.split("_");
// // console.log(array);



// // console.log(parseInt("696969bdjbksbgkg"))


// //ARRAY
// // const intialarray=[1,4,23,6,3,3];
// // console.log(intialarray);
// // intialarray.push(9);
// // console.log(intialarray);
// // intialarray.pop();
// // console.log(intialarray);
// // intialarray.unshift(11);
// // console.log(intialarray);
// // intialarray.shift();
// // console.log(intialarray);




// //CONCAT
// // const array1=[1,2,3,4,5,6];
// // const array2=[123,223,334,34,45,9];
// // const newarray=array1.concat(array2);
// // console.log(newarray);




// //FOREACH
// function print(fn){
//     console.log(fn+"  yahooo!");
// }
// const array=[1,5,3];
// array.forEach(print);



// class Animal{
//     constructor(name,legs,speaks){
//         this.name=name;
//         this.legs=legs;
//         this.speaks=speaks;
//     }
//     speak(){
//         console.log("i speak"+ this.speaks );
//     }
// }
// let dog=new Animal("kalu",4,"bhauu bhauuu");
// dog.speak();

const currentdate=new Date();
console.log("Time in miliseconds    ",currentdate.getTime())