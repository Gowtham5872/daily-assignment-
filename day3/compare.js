let obj1={
    name:'person1',
    age:5
}
let obj2={
    age:5,
    name:'person1'
}
if(obj1.name===obj2.name&&obj1.age===obj2.age){
    console.log('true');
}else{
    console.log('false');
}