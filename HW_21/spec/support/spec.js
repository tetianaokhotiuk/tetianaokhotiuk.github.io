var app = require('../../app.js');



describe("app", function() {
 

  it("It should call to plus method", function() {
	 var res = app.plus(5,2)

    expect(res).toBe(7);
  });

  it("It should call to minus method", function() {
	 var res1 = app.minus(5,2)

    expect(res1).toBe(3);
  });

  it("It should call to multiply method", function() {
	 var res2 = app.multiply(5,2)

    expect(res2).toBe(10);
  });

  it("It should call to division method", function() {
	 var res3 = app.division(5,2)

    expect(res3).toBe(2.5);
  });
});