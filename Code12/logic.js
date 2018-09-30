const payrollObject = {
    salary: 0,    
    takeSalary(salary){
        this.salary  = salary;
    },
    hra(){
        return this.salary * 0.30;
    },
    da(){
        return this.salary * 0.20;
    }
}