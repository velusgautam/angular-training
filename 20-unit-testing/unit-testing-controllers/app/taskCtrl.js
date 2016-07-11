angular.module('taskApp', [])
    .controller('taskCtrl', function($scope) {
        var ctrl = this;
        ctrl.tasks = [{
            id: 1,
            label: '1st task',
            priority: 3,
            assignee: 'Ram'
        }, {
            id: 2,
            label: '2nd task',
            priority: 2
        }, {
            id: 3,
            label: '3rd task',
            priority: 1,
            assignee: 'Shyam'
        }, {
            id: 4,
            label: '4th task',
            priority: 5,
            assignee: 'Mohan'
        }, ];

        ctrl.getTaskClass = function(task) {
            return {
                critical: task.priority > 3,
                normal: task.priority >= 2 && task.priority <= 3,
                trivial: task.priority == 1
            }
        };

        ctrl.increasePriority = function(task) {
            task.priority < 5 && task.priority++;
        };

        ctrl.decreasePriority = function(task) {
            task.priority > 1 && task.priority--;
        };
    });
