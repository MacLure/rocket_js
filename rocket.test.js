
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      testRocket1 = new Rocket();
      expect(testRocket1.name).toBeDefined();
      expect(testRocket1.colour).toBeDefined();
      expect(testRocket1.flying).toEqual(false);
    });

    test("it should set the rocket's name if provided", () => {
      testRocket2 = new Rocket();
      testRocket2.name = ("MyRocket");
      expect(testRocket2.name).toEqual("MyRocket");

      testRocket3 = new Rocket();
      testRocket3.name = ("");
      expect(testRocket3.name).toEqual("");

      testRocket4 = new Rocket();
      testRocket4.name = (543);
      expect(testRocket4.name).toEqual(543);

      testRocket5 = new Rocket();
      testRocket5.name = (["Enterprise", "Rocinante"]);
      expect(testRocket5.name).toEqual(["Enterprise", "Rocinante"]);

      testRocket5 = new Rocket();
      testRocket5.name = ({age: 35, hobby: "astronomy"});
      expect(testRocket5.name).toEqual({age: 35, hobby: "astronomy"});

    });
  });

  describe('liftOff', () => {
    
    testRocket6 = new Rocket();
    testRocket6.flying = false;
    expect(testRocket6.liftOff()).toEqual(true);
    expect(testRocket6.flying).toEqual(true);

    testRocket7 = new Rocket();
    testRocket7.flying = true;
    expect(testRocket7.liftOff()).toEqual(false);
    expect(testRocket7.flying).toEqual(true);

  });

  describe('land', () => {
    
    testRocket8 = new Rocket();
    testRocket8.flying = false;
    expect(testRocket8.land()).toEqual(false);
    expect(testRocket8.flying).toEqual(false);

    testRocket9 = new Rocket();
    testRocket9.flying = true;
    expect(testRocket9.land()).toEqual(true);
    expect(testRocket9.flying).toEqual(false);

  });

  describe('status', () => {
    
    testRocket10 = new Rocket();
    testRocket10.flying = true;
    expect(testRocket10.status()).toEqual(`Rocket ${testRocket10.name} is flying through the sky!`);

    testRocket11 = new Rocket();
    testRocket11.flying = false;
    expect(testRocket11.status()).toEqual(`Rocket ${testRocket11.name} is ready for liftoff!`);

  });

  describe('sendCodedSignal', () => {
    
    testRocket12 = new Rocket();
    expect(testRocket12.sendCodedSignal()).toEqual('boop');

    testRocket13 = new Rocket();
    expect(testRocket13.sendCodedSignal(9)).toEqual('beep');

    testRocket13 = new Rocket();
    expect(testRocket13.sendCodedSignal(-12)).toEqual('beep');

    testRocket13 = new Rocket();
    expect(testRocket13.sendCodedSignal(9.5)).toEqual('beep');

    testRocket14 = new Rocket();
    testRocket14.liftOff()
    expect(testRocket14.sendCodedSignal(11)).toEqual('boop boop boop');

    testRocket15 = new Rocket();
    testRocket15.liftOff()
    expect(testRocket15.sendCodedSignal(10)).toEqual('boop boop boop');

    testRocket16 = new Rocket();
    expect(testRocket16.sendCodedSignal(12)).toEqual('boop beep beep');

  });

  
});
