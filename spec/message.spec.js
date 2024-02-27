const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

//Test 4 if a name is not passed into constructor, it throws an error.
describe("Message class", function() {
    it("should throw an error if name is missing", function() {
        expect(function() {new Message();}).toThrowError('Name parameter is required');
    });
});

//Test 5 checks to see if constructor correctly sets the name property in new message object.
describe("Message class", function() {
    it('should set the name property correctly', function() {
        const testCommands = [
            new Command('MODE_CHANGE', 'LOW_POWER'),
            new Command('STATUS_CHECK')
        ];
        const testMessage = new Message('Test message with two commands', testCommands);
        expect(testMessage.name).toBe('Test message with two commands');
    });
});

//Test 6 checks to see if command property contains data passed in from the Message(name, command) call.
describe("Message class", function() {
    it('should contain the commands array passed into the constructor', function() {
        const testCommands = [
            new Command('MODE_CHANGE', 'LOW_POWER'),
            new Command('STATUS_CHECK')
        ];
        const testMessage = new Message('Test message with two commands', testCommands);
        expect(testMessage.commands).toEqual(testCommands);
    });
});
