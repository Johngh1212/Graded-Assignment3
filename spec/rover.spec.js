const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  // Test 7 Constructor sets position and default values for mode and generatorWatts
  it('constructor sets position and default values for mode and generatorWatts', () => {
    const rover = new Rover(98382);
    expect(rover.position).toBe(98382);
    expect(rover.mode).toBe('NORMAL');
    expect(rover.generatorWatts).toBe(110);
  });

  // Test 8 receiveMessage contains the name of the message and return a response.
  it('response returned by receiveMessage contains the name of the message', () => {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.message).toBe('Test message with two commands');
  });

  // Test 9 Response returned by receiveMessage includes two results if two commands are sent in the message
  it('response returned by receiveMessage includes two results if two commands are sent in the message', () => {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results.length).toBe(2);
  });

  // Test 10 Responds correctly to the status check command
  it('responds correctly to the status check command', () => {
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Status check message', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[0].completed).toBe(true);
    expect(response.results[0].roverStatus).toEqual({
      mode : 'NORMAL',
      generatorWatts :  110,
      position : 98382,
    });
  });

  // Test 11 Responds correctly to the mode change command
  it('responds correctly to the mode change command', () => {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Mode change message', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[0].completed).toBe(true);
    expect(rover.mode).toBe('LOW_POWER');
  });

  // Test 12 Responds with a false completed value when attempting to move in LOW_POWER mode
  it('responds with a false completed value when attempting to move in LOW_POWER mode', () => {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 100)];
    let message = new Message('Move in LOW_POWER mode message', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[1].completed).toBe(false);
    expect(rover.position).toBe(98382); // Position should not change
  });

  // Test 13 Responds with the position for the move command
  it('responds with the position for the move command', () => {
    let commands = [new Command('MOVE', 10000)];
    let message = new Message('Move command message', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results[0].completed).toBe(true);
    expect(rover.position).toBe(10000);
  });
});
