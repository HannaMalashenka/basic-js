class VigenereCipheringMachine {
  constructor(bool) {
    (bool === true || bool === undefined) ? this.isDirect = true : this.isDirect = false;
  }

  calculateOutput(message, key, encryptOrDecrypt) {
    if (!message || !key) throw new Error();
    let output = "",
    iterator = 0;
    for (let i = 0; i < message.length; i++) {
      const stringLetter = message[i].toUpperCase();
      if (stringLetter >= 'A' && stringLetter <= 'Z') {
        const keyLetter = i < key.length 
          ? key[iterator].toUpperCase() 
          : key[iterator % key.length].toUpperCase();
        iterator++;
        output += encryptOrDecrypt
          ? String.fromCharCode((stringLetter.charCodeAt(0) + keyLetter.charCodeAt(0)) % 26 + 65)
          : String.fromCharCode((26 + stringLetter.charCodeAt(0) - keyLetter.charCodeAt(0)) % 26 + 65)
      }

      else output += message[i];
    }

    return this.isDirect ? output : output.split('').reverse().join('');
  }
  encrypt(message, key) {
    return this.calculateOutput(message, key, true);
  }    
  decrypt(encryptedMessage, key) {
    return this.calculateOutput(encryptedMessage, key, false);
  }
}

module.exports = VigenereCipheringMachine;
