
class Rover {
    constructor(position) { // represents rover position
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110; // value given
    }
  
    receiveMessage(message) {
      const results = [];
    
    // for statement returns an object containing at least two properties:
      for (let i = 0; i < message.commands.length; i++) {
        let command = message.commands[i];
        let result = this.executeCommand(command);
        results.push(result);
      }
    
      return {//an array of results
        message: message.name,
        results: results,
      };
    };

    // if statement that executes and respond to differenet commands
    executeCommand(command) {
      if (command.commandType === 'MODE_CHANGE') {
        this.mode = command.value;
        return { completed: true };
      } else if (command.commandType === 'MOVE') {
        if (this.mode === 'LOW_POWER') {
          return { completed: false };
        } else {
          this.position = command.value;
          return { completed: true };
        }
      } else if (command.commandType === 'STATUS_CHECK') {
        return {
          completed: true,
          roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position,
          },
        };
      } else {
        return { completed: false };
      }
    }
  }
  
module.exports = Rover;

