import 'https://www.puck-js.com/puck.js';


export const write = cmd => {
  console.info('send: %o', cmd);
  if (location.protocol === 'https:') {
    Puck.write(`${cmd}\n`);
  }
};

