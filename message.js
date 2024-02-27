class Message {
  constructor(name, commands) {
      this.name = name;
      this.commands = commands;
      if (!name) {
          throw new Error("Name parameter is required.");
      }
  }
}

// Example usage:
// const command1 = new Command('MODE_CHANGE', 'LOW_POWER');
// const command2 = new Command('STATUS_CHECK');
// const message = new Message('Test Message', [command1, command2]);

//console.log(message);

// describe('Message', () => {
//    it('throws an error if a name is NOT passed into the constructor as the first parameter', () => {
//      // Attempt to create a message without a name
//      const createMessageWithoutName = () => {
//        new Message();
//      };
 
//      // Expect an error to be thrown
//      expect(createMessageWithoutName).toThrowError('Name is required for a message.');
//    });
 
//    it('constructor sets name and commands properties', () => {
//      const name = 'Test Message';
//      const commands = [
//        { commandType: 'MODE_CHANGE', value: 'LOW_POWER' },
//        { commandType: 'STATUS_CHECK' }
//      ];
 
//      const message = new Message(name, commands);
 
//      // Verify that the name and commands properties are correctly set
//      expect(message.name).toBe(name);
//      expect(message.commands).toEqual(commands);
//    });
//  });

// describe('Message class', () => {
//    it('constructor sets name', () => {
//      const name = 'Test Message';
//      const commands = [
//        { commandType: 'MODE_CHANGE', value: 'LOW_POWER' },
//        { commandType: 'STATUS_CHECK' }
//      ];
 
//      const message = new Message(name, commands);
 
//      // Verify that the name property is correctly set
//      expect(message.name).toBe(name);
//    });

//const Message = require('./message'); // Assuming the Message class is in a file named 'message.js'

// describe('Message class', () => {
//   it('contains a commands array passed into the constructor as the 2nd argument', () => {
//     const name = 'Test Message';
//     const commands = [
//       { commandType: 'MODE_CHANGE', value: 'LOW_POWER' },
//       { commandType: 'STATUS_CHECK' }
//     ];

//     const message = new Message(name, commands);

//     // Verify that the commands property contains the expected data
//     expect(message.commands).toEqual(commands);
//   });
// });
module.exports = Message;

