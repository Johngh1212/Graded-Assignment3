const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

//Test if commandType is not passed, it will throw and error
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

//Test 2 test checks that constructor in Command class sets the commandType property correctly.
  it('constructor sets command type', function() {
    const cmd = new Command('MOVE', 12);
    expect(cmd.commandType).toBe('MOVE');
  });

//Test 3 Checks if constructor sets the value property correctly in new object.
  it('constructor sets a value passed in as the 2nd argument', function() {
    const cmd = new Command('MOVE', 12);
    expect(cmd.value).toBe(12);
  }); 
});



 