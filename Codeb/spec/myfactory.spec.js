describe("Add test suite",function(){
    var fact ;
    var $controller;
    beforeEach(module("myapp"));  //ng-app
    beforeEach(inject(function(_$controller_,myfactory){  //ng-controller
        $controller = _$controller_;
        fact = myfactory;
        console.log("Controller Injected ",$controller);
    }));
    beforeEach(inject(function(myfactory){
        console.log("::Inside Factory Injection ",myfactory);
    fact = myfactory;
    }))
    it("should add 2 numbers in Controller",function(){
        var scope = {};
        var ctrl = $controller("myctrl",{$scope:scope});
        console.log("After Load ",ctrl);
        scope.firstNumber = 100;
        scope.secondNumber = 200;
        scope.addition(scope.firstNumber, scope.secondNumber);
        expect(scope.result).toEqual(300);
    });
    it("should add 2 numbers",function(){
        var firstNumber = 10;
        var secondNumber = 20;
        var result = fact.add(firstNumber,secondNumber);
        expect(result).toEqual(30);
    })
    it("should add 1 numbers",function(){
        var firstNumber = 10;
       //myfactory.spec.js var secondNumber = 20;
        var result = fact.add(firstNumber);
        expect(result).toEqual(10);
    })
})