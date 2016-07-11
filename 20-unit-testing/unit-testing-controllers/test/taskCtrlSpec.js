describe('TaskCtrl Test', function() {
    beforeEach(module('taskApp'));

    var scope = {}, ctrl;
    beforeEach(inject(function($controller) {
        ctrl = $controller('taskCtrl', {
            $scope: scope
        });
        console.log(ctrl);
    }));

    it('should contain some items', function() {
        expect(ctrl.tasks.length).toEqual(5);
    });

    it('should have getTaskClass method working fine', function() {
        var classObject = ctrl.getTaskClass({
            priority: 5
        });
        expect(classObject.critical).toEqual(true);

        var classObject = ctrl.getTaskClass({
            priority: 1
        });
        expect(classObject.trivial).toEqual(true);

        var classObject = ctrl.getTaskClass({
            priority: 3
        });
        expect(classObject.normal).toEqual(true);
    });

    it('should increase priority properly', function() {
        var todo = {
            priority: 1
        };
        ctrl.decreasePriority(todo);
        expect(todo.priority).toEqual(1);

        todo = {
            priority: 3
        };
        ctrl.decreasePriority(todo);
        expect(todo.priority).toEqual(2);
    })

    it('should decrease priority properly', function() {
        var todo = {
            priority: 1
        };
        ctrl.increasePriority(todo);
        expect(todo.priority).toEqual(2);

        todo = {
            priority: 5
        };
        ctrl.increasePriority(todo);
        expect(todo.priority).toEqual(5);
    })
})
