#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome To my Todolist");
let todos = [];
let con = true;
//while(con){
// //do{
//     // let ans = await inquirer.prompt({
//     //     type: "list",
//     //     message: "Select an operation",
//     //     name: "Select",
//     //     choices: ["update","veiw", "delete"]
//     // } );
// let Task = await inquirer.prompt(
//     [
//     {
//         name: "todo",
//          type: "input",
//          message:"What you want to add your TODOS?",
//      } ,
//      {
//         name: "addMore",
//         type: "confirm",
//         message: " DO you want to add More?",
//         default: "false",
//      } ,
//     ]);
//   todos.push(Task.todo);
//    con= Task.addMore
//     console.log(todos);
//
// }
//Upgrade Todolist
let newtodoTask = async () => {
    while (con) {
        let select = await inquirer.prompt([{
                name: "choices",
                type: "list",
                message: "Selec an operation todolist",
                choices: ["Add Todo", "Update Todo", "Delete Todo", "View Todo", "Exite"]
            }]);
        if (select.choices === "Add Todo") {
            await addTodo();
        }
        else if (select.choices === "Update Todo") {
            await updateTodo();
        }
        else if (select.choices === "Delete Todo") {
            await deleteTodo();
        }
        else if (select.choices === "View Todo") {
            await viewTodo();
        }
        else if (select.choices === "Exite") {
            con = false;
        }
    }
};
let addTodo = async () => {
    let newtodo = await inquirer.prompt([{
            name: "Todo",
            type: "input",
            message: "Enter your Add To Do",
        }]);
    todos.push(newtodo.Todo);
    console.log(`\n ${newtodo.Todo} :Todo Task add sucessfully in Todolist`);
};
let viewTodo = async () => {
    console.log('\n your Todo list view `\n');
    todos.forEach((todo, index) => {
        console.log(`${index + 1}: ${todo}`);
    });
};
let deleteTodo = async () => {
    await viewTodo();
    let Todoinddex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the Index Number ,'Your Todo for to delete in Todolist"
        }]);
    let deletedTodo = todos.splice(Todoinddex.index - 1, 1);
    console.log(`\n ${deletedTodo} This todo task has been deleted From Todolist\n`);
};
let updateTodo = async () => {
    await viewTodo();
    let updateTodoindex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: "Enter the Index Number ,'Your Todo for the update in Todolist"
        }, {
            name: "newtodo",
            type: "input",
            message: "Now Enter new TodoTask in Todolist"
        }]);
    todos[updateTodoindex.index - 1] = updateTodoindex.newtodo;
    console.log(`\n Todo at index no. ${updateTodoindex.index - 1} Updated successfully [Update Todolist your cheak 'view in Todolist']`);
};
newtodoTask();
