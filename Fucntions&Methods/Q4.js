// Q We are givern arrayof marks of students . filter out
//of the marks o fstudents that scored 90+

let marks = [10,20,30 ,40 ,50 , 90 , 91, 92 , 93 ,94 , 95 ];

let moreMarks = marks.filter((mark)=>{
    return mark>90;
})
console.log(moreMarks);