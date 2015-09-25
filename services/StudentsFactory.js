studentRoster.factory('StudentsFactory', function StudentsFactory(){
    var factory = {};
    factory.students = [];

    // student constructor
    factory.addStudent = function() {
        factory.students.push({ name: factory.studentName, attendance: false });
        factory.studentName = null;
    };
    return factory;
});
