const bel = require('bel')
const csjs = require('csjs-inject')
const validator = require('solidity-validator')

module.exports = displayBooleanInput

function displayBooleanInput ({ theme: { classes: css, colors }, cb }) {
  const boolFalse = bel `<div class=${css.false} data-state="active" data-type="boolean" value="false" onclick=${toggle}>false</div>`
  const boolTrue = bel `<div class=${css.true} data-state="" data-type="boolean" value="true" onclick=${toggle}>true</div>`
  const input = bel`<div class=${css.booleanField}>
    ${boolFalse}
    ${boolTrue}
  </div>`
  return input
  function toggle (e) {
    const value = e.target.innerHTML
    if (value === 'true') {
      boolFalse.style.color = colors.whiteSmoke
      boolFalse.style.backgroundColor = colors.dark
      boolFalse.dataset.state = ""
      boolTrue.dataset.state = "active"
      boolTrue.style.color = colors.dark
      boolTrue.style.backgroundColor = colors.aquaMarine
    } else if (value === 'false') {
      boolTrue.style.color = colors.whiteSmoke
      boolTrue.style.backgroundColor = colors.dark
      boolTrue.dataset.state = ""
      boolFalse.dataset.state = "active"
      boolFalse.style.color = colors.whiteSmoke
      boolFalse.style.backgroundColor = colors.violetRed
    }
    cb(validator.getMessage('boolean', value), value)
  }
}
