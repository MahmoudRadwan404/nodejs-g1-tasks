class employee{
    id;
    firstname;
    lastname;
    salary;
    employee(id,firstname,lastname,salary){
this.firstname=firstname;
this.lastname=lastname;
this.salary=salary;
this.id=id;
    }
get id(){
    return this.id;
}
get firstname(){
    return this.firstname
}
get lastname(){
    return this.lastname
}
get salary(){
    return this.salary
}
get name(){
    return this.firstname+" "+this.lastname
}
setsalary(salary){
this.salary=salary
}
raisesalary(salary){
return this.salary*(this.salary*(20/100))
}

}