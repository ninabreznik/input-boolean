const bel = require('bel')
const csjs = require('csjs-inject')
const validator = require('solidity-validator')

module.exports = displayBooleanInput

function displayBooleanInput ({ theme: { classes: css, colors }, type, cb }) {
  const boolFalse = bel `<div class=${css.false} data-state="" data-type="boolean" value="false" onclick=${toggle}>false</div>`
  const boolTrue = bel `<div class=${css.true} data-state="" data-type="boolean" value="true" onclick=${toggle}>true</div>`
  const input = bel`<div class=${css.booleanField}>
    ${boolFalse}
    ${boolTrue}
  </div>`
  return input

  function toggle (e) {
    let value = e.target.innerHTML
    cb(validator.getMessage('boolean', value), e.target, value)
    if (value === 'true') {
      boolFalse.style.color = colors.slateGrey
      boolFalse.style.backgroundColor = colors.darkSmoke
      boolFalse.dataset.state = ""
      boolTrue.dataset.state = "active"
      boolTrue.style.color = colors.dark
      boolTrue.style.backgroundColor = colors.aquaMarine
    } else if (value === 'false') {
      boolTrue.style.color = colors.slateGrey
      boolTrue.style.backgroundColor = colors.darkSmoke
      boolTrue.dataset.state = ""
      boolFalse.dataset.state = "active"
      boolFalse.style.color = colors.dark
      boolFalse.style.backgroundColor = colors.violetRed
    }
  }

}
