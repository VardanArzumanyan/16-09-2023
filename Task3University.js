class UniversityMember {
  constructor(name, age, role, energy = 24) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.energy = energy;
  }
  info() {
    return {
      name: this.name,
      age: this.age,
      role: this.role,
      energy: this.energy,
    };
  }
}

class University {
  constructor() {
    this.teachers = [];
    this.students = [];
  }

  addMember(member) {
    if (member instanceof Teacher) {
      this.teachers.push(member);
    } else if (member instanceof Student) {
      this.students.push(member);
    } else {
      console.log("Invalid member");
    }
  }

  removeMember(member) {
    if (member instanceof Teacher) {
      let index = this.teachers.indexOf(member);
      if (index !== -1) {
        this.teachers.splice(index, 1);
      }
    } else if (member instanceof Student) {
      let index = this.students.indexOf(member);
      if (index !== -1) {
        this.students.splice(index, 1);
      }
    } else {
        console.log("Invalid member");
    }
  }

  startLesson(){
    this.students.forEach(student => {
        student.energy -=2;
    });
    this.teachers.forEach(teacher => {
        teacher.energy -= 5;
    });

    console.log("Lesson started");
  }
}

class Teacher extends UniversityMember {
  constructor(name, age, energy = 24) {
    super(name, age, "teacher", energy);
  }
}

class Student extends UniversityMember {
  constructor(name, age, energy = 24) {
    super(name, age, "student", energy);
  }
}

let university = new University();
let teacher1 = new Teacher("A", 30);
let teacher2 = new Teacher("B", 50);
let student1 = new Student("C", 10);
let student2 = new Student("D", 20);

university.addMember(teacher1);
university.addMember(teacher2);
university.addMember(student1);
university.addMember(student2);

university.startLesson();
console.log(teacher1.info());
console.log(student1.info());
