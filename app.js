// class Person {
//     constructor(firstName, lastName, birthYear, gender) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthYear = birthYear;
//         this.gender = gender;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     getGender() {
//         return this.gender;
//     }

//     getAge() {
//         return new Date().getFullYear() - this.birthYear;
//     }
// }

// class Student extends Person {
//     constructor(firstName, lastName, birthYear, gender, level, rollNumber) {
//         super(firstName, lastName, birthYear, gender);
//         this.level = level;
//         this.rollNumber = rollNumber;
//     }

//     getIntro() {
//         return `Assalamualaikum, I'm ${this.firstName} ${this.lastName}. I study in ${this.level}, and my roll number is ${this.rollNumber}.`;
//     }
// }

// const person1 = new Person("Mimi", "Yasir", 2005, "Female");
// console.log(person1);

// const student1 = new Student("Mahi", "Yamin", 2007, "Honors", 511893);
// console.log(student1);
// console.log(student1.getFullName());
// console.log(student1.getIntro());

// Donate
const inputName = document.querySelector(".input_name");
const inputDonate = document.querySelector(".input_donate");
const donorsContainer = document.querySelector(".doners_container");
const btnDonate = document.querySelector(".btn_donate");

class BloodDonationCamp {
    name;
    donation;
    li;

    constructor() {
        btnDonate.addEventListener("click", this.getDonation.bind(this));
    }

    getDonation() {
        this.name = inputName.value;
        this.donation = inputDonate.value;

        if (!this.name || !this.donation) {
            return alert(`Please input valid name and donation`);
        }

        this.createListItem(this.name, this.donation);
    }


    createListItem(name, donation) {
        this.li = document.createElement("li");
        this.li.classList.add('donor-item');

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => this.removeDonor(this.li));
        this.li.textContent = `${name} ----- ${donation}`;
        this.li.appendChild(deleteBtn);
        this.appendItem(this.li);
    }

    removeDonor(item) {
        item.remove();
    }

    appendItem(item) {
        donorsContainer.append(item);
        inputName.value = "";
        inputDonate.value = "";
    }
}

new BloodDonationCamp();
