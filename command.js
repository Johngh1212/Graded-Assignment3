class Command {
   constructor(commandType, value) {//commandType is string that represents that of command.
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 
 }
 
 
 module.exports = Command;