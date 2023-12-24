class Person {
    constructor(firstName, lastName, birthYear, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.gender = gender;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getGender() {
        return this.gender;
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }
}

class Student extends Person {
    constructor(firstName, lastName, birthYear, gender, level, rollNumber) {
        super(firstName, lastName, birthYear, gender);
        this.level = level;
        this.rollNumber = rollNumber;
    }

    getIntro() {
        return `Assalamualaikum, I'm ${this.firstName} ${this.lastName}. I study in ${this.level}, and my roll number is ${this.rollNumber}.`;
    }
}

const person1 = new Person("Mimi", "Yasir", 2005, "Female");
console.log(person1);

const student1 = new Student("Mahi", "Yamin", 2007, "Honors", 511893);
console.log(student1);
console.log(student1.getFullName());
console.log(student1.getIntro());
