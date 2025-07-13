import "./styles.css";

import displayProject from "./display/ProjectDisplayer";
import Task from "./modules/Task";
import Project from "./modules/Project";
import TodoList from "./modules/TodoList";

import TodoController from "./controllers/TodoController";

const myProject = new Project("My Project");

const task1 = new Task("Curat in camera", "");
const task2 = new Task("Spalat vase", "");
const task3 = new Task("Tuns iarba", "");

const TodoApp = new TodoController();

TodoApp.addProject(myProject);
TodoApp.addTask(task1);
TodoApp.addTask(task2);
TodoApp.addTask(task3);

// // todolist controller leaga index cu ui de ex cand adaug un project trb sa il adaug in todolist si trb sa updatez si pagina

const anotherProject = new Project("Birou");

const anotherTask = new Task("codeaza", "");

anotherProject.addTask(anotherTask);

TodoApp.addProject(anotherProject);
TodoApp.addTask(anotherTask);

TodoApp.switchToProject(myProject);
