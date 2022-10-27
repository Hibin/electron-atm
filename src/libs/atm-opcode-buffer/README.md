# atm-opcode-buffer

ATM Operation Code Buffer service, used by [Electron ATM](https://github.com/timgabets/electron-atm) and [ATM State Navigator](https://github.com/timgabets/states-navigator) applications.

## To use:
```javascript
const OperationCodeBufferService = require('atm-opcode-buffer');
var opcode = new OperationCodeBufferService();

var stateD = { 
  clear_mask: '000', 
  A_preset_mask: '000', // 0000 0000
  B_preset_mask: '042', // 0010 1010
  C_preset_mask: '006', // 0000 0110 
  D_preset_mask: '000', // 0000 0000
  extension_state: '000' 
};

s.setBufferFromState(stateD);

console.log(s.buffer);
> ' CCB B  '

```