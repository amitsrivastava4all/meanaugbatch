describe("Add test suite",function(){
    var fact ;
    beforeEach(module("myapp"));
    beforeEach(inject(function(myfactory){
        console.log("::Inside Factory Injection ",myfactory);
    fact = myfactory;
    }))
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