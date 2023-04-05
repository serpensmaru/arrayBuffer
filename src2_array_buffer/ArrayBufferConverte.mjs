export default class ArrayBufferConverte {

    load(buffer) {
      this.buffer = buffer
    }
    toString() {
      // const bufferView = new Uint16Array(this.buffer);
      // let outputString = '';
      // for (let i = 0; i < bufferView.length; i += 1) {
      //   outputString += String.fromCharCode(bufferView[i]);
      // }
      // return outputString;

      return String.fromCharCode.apply(null, new Uint16Array(this.buffer));
    }
  }
