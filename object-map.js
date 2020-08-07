
const students=[
{ id:21, name:'rashed'},
{ id:25, name:'shihab'},
{ id:30, name:'jishan' },

];



// function map(element){



const names=students.map(s=>s.name)
const ids=students.map(element=>element.id)
const bigger=students.filter(element=>element.id>25)
console.log(names);
console.log(ids);
console.log(bigger);
    


