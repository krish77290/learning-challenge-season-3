class Employee
{
    //initiallizing an object
    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }
//passing a object to a variable
var e1=new Employee(101,'murali');
var e2=new Employee(102,'krishna');
e1.detail();
e2.detail();