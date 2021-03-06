studentRoster.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory){
    $scope.students = StudentsFactory.students;
// sets student attendance field to true
    $scope.addStudentIsPresent = function(student) {
        student.attendance = true;
    };
// sets student attendance field to false
    $scope.addStudentIsGone = function(student) {
        student.attendance = false;
    };
});
