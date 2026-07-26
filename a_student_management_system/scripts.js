const students = [];

function addStudent(name, grade) {
    students.push({name, grade});
}

function removeStudent(name) {
    const index = students.findIndex((student) => student.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(name, "has been removed");
    } else {
        console.log(name, "was not found");
    }
}

function filterTopStudents(minGrade) {
    return students.filter((student) => student.grade >= minGrade);
}

function formatStudentList() {
    return students.map(student => `${student.name} - Grade: ${student.grade}`);
}

console.log("students =", students);

addStudent("Alice", 85);
addStudent("Bob", 90);
addStudent("Charles", 78);
addStudent("Davie", 60);
addStudent("Emma", 92);

console.log(formatStudentList());
