name_of_the_student_arrey=[];
function submit()
{
    var display_student_arrey=[];
    
    for (var j=1; j<= 4; j++)
    {
        var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        name_of_the_student_arrey.push(name_of_the_student);
    }
    console.log(name_of_the_student_arrey);
    var lenght_of_name_of_students_array=name_of_the_student_arrey.length;
    console.log(lenght_of_name_of_students_array);
    
    for (var k=0; k<lenght_of_name_of_students_array; k++)
    {
        display_student_arrey.push("<h4>Name- "+ name_of_the_student_arrey[k] + "</h4>");
        console.log(display_student_arrey);

    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_arrey;
    var remove_commas=display_student_arrey.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_with_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    
}
function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_student_array_sorting = [];

var lenght_of_name_of_students_array = name_of_the_student_array.length;
console.log(lenght_of_name_of_students_array);

for (var k = 0; k < lenght_of_name_of_students_array; k++)
{
    display_student_array_sorting.push("NAME- " + name_of_the_student_array[k] + "</h4>");
    console.log(display_student_array_sorting);
}

var remove_commas = display_student_array_sorting.join(" ");
console.log(remove_commas);

document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}