// Клас - замовник
class Сustomer {

    // Конструктор класу
    constructor (name, age) {

        this.name = name;
        this.age = age;
        this.projects_list=[];

        if (typeof name === 'undefined') { this.name = "Невідомий замовник"; }

    }

}

// Клас - проект
class Project {

    constructor (name, performer,customer) {

        this.name = name;
        this.performer = performer;
        this.customer = customer;

        if (typeof name === 'undefined') { this.name = "Невідомий проект"; }

    }

}

// Клас - виконавець
class Performer {

    constructor (name, age) {

        this.name = name;
        this.age = age;
        this.projects_list = [];

        if (typeof name === 'undefined')    { this.name = "Невідомий виконавець"; }
    }

}

// проектів на виконанні
let global_project_list = new Array();
let global_customers_list= new Array();
let global_performer_list= new Array();
//////////////////////////////////////////////////////////////
// Знайти замовника в колекції
exports.find_Сustomer = (name, age) => {

    for (let customer of global_customers_list) {

        if (name === customer.name &&
            age === customer.age) { return customer; }

    }

    return -1;

}
// Додавання нового замовника
exports.add_Сustomer = (name, age) => {

    let customer = new Сustomer(name, age);
    global_customers_list.push(customer);

    return customer;

}
// Видалити замовника з колекції
exports.remove_Сustomer = (name, age) => {

    for (let id = 0; id < global_customers_list.length; id++) {

        let customer = global_customers_list[id];

        if (customer.name === name &&
            customer.age === age) { global_customers_list.splice(id, 1);
         return 1; }

    }

    return -1;

}
// Редагувати замовника в колекції
exports.edit_Сustomer = (name, age, new_name, new_age) => {

    for (let id = 0; id < global_customers_list.length; id++) {

        let customer = global_customers_list[id];

        if (customer.name === name &&
            customer.age === age) { global_customers_list[id].name = new_name;
           global_customers_list[id].age = new_age;
             return 1; }

    }

    return -1;

}
// Отримати список замовників
exports.get_Customer_List = () => {

    console.log("\n" + "Список усіх замовників:");

    for (let id = 0; id < global_customers_list.length; id++) {

        let cust = global_customers_list[id];
        console.log(`Назва замовника: ${cust.name}, вік замовника: ${cust.age}`);

    }

    console.log();

    return global_customers_list;

}
///////////////////////////////////////////////////////////////////////////

// Додавання нового проекту
exports.add_Project = (name, performer,customer) => {

    let project = new Project(name,performer,customer);
    global_project_list.push(project);

    return project;

}

// Видалення проетку з колекції
exports.remove_Project = (name, performer,customer) => {

    for (let id = 0; id < global_project_list.length; id++) {

        let project = global_project_list[id];

        if (project.name === name &&
            project.performer === performer &&
            project.customer === customer ) { global_project_list.splice(id, 1);
         return 1; }

    }

    return -1;

}

// Редагувати проект в колекції
exports.edit_Project = (name, performer,customer, new_name, new_performer, new_customer) => {

    let project = find_Project(name, performer,customer);

    if (project === -1) { return -1; }

    let id = global_project_list.indexOf(project);

    global_project_list[id].name = new_name;
    global_project_list[id].performer = new_performer;
    global_project_list[id].customer = new_customer;

    return 1;

}
// Отримати список проектів у конкретного виконавця
exports.get_Project_List = () => {

    console.log("\n" + `Список усіх проекті:`);

    for (let id = 0; id < global_project_list.length; id++) {

        let project = global_project_list[id];
        console.log(`\t Назва проекту: ${project.name}, виконавець:${project.performer}, замовник:${project.customer}`);

    }

    console.log();

    return global_project_list;

}

// Знайти проект
const find_Project = (name,performer,customer) => {

    for (let id = 0; id < global_project_list.length; id++) {

        let project = global_project_list[id];

        if (name === project.name &&
            performer === project.performer &&
            customer === project.customer) { return project; }

    }

    return -1;

}

// Знайти проект
exports.find_Project = find_Project;
///////////////////////////////////////////////////////////////////
// Додавання виконавця в колекцію
exports.add_Performer = (name, age) => {

    let performer = new Performer(name, age);
    global_performer_list.push(performer);

    return performer;

}
// Знайти виконавця в колекції
exports.find_Performer = (name, age) => {

    for (let performer of global_performer_list) {

        if (name === performer.name &&
            age === performer.age) { return performer; }

    }

    return -1;

}
// Видалення виконавця з колекцію
exports.remove_Performer = (name, age) => {

    for (let id = 0; id < global_performer_list.length; id++) {

        let performer = global_performer_list[id];

        if (performer.name === name &&
            performer.age === age) { global_performer_list.splice(id, 1);
         return 1; }

    }

    return -1;

}
// Редагувати виконавця в колекції
exports.edit_Performer = (name, age, new_name, new_age) => {

    for (let id = 0; id < global_performer_list.length; id++) {

        let performer = global_performer_list[id];

        if (performer.name === name &&
            performer.age === age) { global_performer_list[id].name = new_name;
                global_performer_list[id].age = new_age;
             return 1; }

    }

    return -1;

}
// Отримати список виконавців
exports.get_Performer_List = () => {

    console.log("\n" + "Список усіх виконавців:");

    for (let id = 0; id < global_performer_list.length; id++) {

        let performer = global_performer_list[id];
        console.log(`Ім'я виконавця: ${performer.name}, вік виконавця: ${performer.age}`);
    }

    console.log();

    return global_performer_list;

}
////////////////////////////////////////////////////

// // Пошук усіх проектів замовника
exports.get_User_Customer_List = (userName) => {

    console.log("\n" + `Список усіх проектів замовника ${userName}:`);

    for (let id = 0; id < global_project_list.length; id++) {
        if (
            global_project_list[id].customer === userName
          ){
        let project = global_project_list[id];
      console.log(`\tНазва проекту: ${project.name}`);
          }
    }

    console.log();

    return global_project_list;

}


// Пошук усіх проектів виконавця
exports.get_User_Performer_List = (userName) => {
  console.log("\n" + `Список усіх проектів виконавця ${userName}:`);

  for (let id = 0; id < global_project_list.length; id++) {
    if (
      global_project_list[id].performer === userName
    ) {
      let project = global_project_list[id];
      console.log(`\tНазва проекту: ${project.name}`);
    }
  }

  console.log();

  return global_project_list;
};