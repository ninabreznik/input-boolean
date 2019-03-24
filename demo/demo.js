const csjs = require('csjs-inject')
const inputboolean = require('../')

document.body.innerHTML = `<style>
.booleanField {
  width: 300px;
}
.false {
  background-color: red;
  color: #cfcfcf;
}
.true {
  color: #cfcfcf;
}
</style>`

const classes = { false: 'false', true: 'true', booleanField: 'booleanField' }
const colors = {
  slateGrey: 'grey',
  dark: 'black',
  aquaMarine: 'green',
  violetRed: 'red'
}
const log = document.createElement('pre')
const el = inputboolean({ theme: { classes, colors }, cb: (err, val) => {
  if (err) log.appendChild(document.createTextNode(`${err}\n`))
  else log.appendChild(document.createTextNode(`ok: ${val}\n`))
} })
document.body.appendChild(el)
document.body.appendChild(log)
