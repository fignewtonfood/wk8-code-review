studentRoster.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory){
    $scope.students = StudentsFactory.students;
    $scope.addStudentIsPresent = function(student) {
        student.attendance = true;
    };
});
