import inquirer from "inquirer";
// let fruitchart = ["Apple", "Banana", "Watermalen"];
// fruitchart.pop();
// console.log(fruitchart);
// let i = 0;//initialize
// while(i <= 10){
//    console.log(i)
//    i++
//    ///code EECUTE
// };
let todos = [];
let con = true;
while (con) {
    //do{
    // let ans = await inquirer.prompt({
    //     type: "list",
    //     message: "Select an operation",
    //     name: "Select",
    //     choices: ["update","veiw", "delete"]
    // } );
    let Task = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add your TODOS?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: " DO you want to add More?",
            default: "false",
        },
    ]);
    todos.push(Task.todo);
    con = Task.addMore;
    console.log(todos);
}
