class Person {
    constructor (name, surname, age) {
        this.Name = name;
        this.Surname = surname;
        this.Age = age;
    }
    ShowInfo () {
        return `${this.Name} ${this.Surname} ${this.Age}`; 
    }
  	
}

class Developer extends Person {
    constructor (name, surname, age, education , behavior) {
        super(name, surname, age);
        this.Education = education;
        this.Behavior= behavior
    }

    DeveloperInfo () {
        return `${this.Name} ${this.Surname} ${this.Education} ${this.Behavior} `  ;
    }
}