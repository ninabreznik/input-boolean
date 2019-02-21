var bel = require('bel')
var csjs = require('csjs-inject')
var validator = require('solidity-validator')

module.exports = displayBooleanInput

function displayBooleanInput({theme: {classes: css, colors}, type, cb}) {
  var boolFalse = bel `<div class=${css.false} data-type=${type} value="false" onclick=${e=>toggle(e, type)}>false</div>`
  var boolTrue = bel `<div class=${css.true} data-type=${type} value="true" onclick=${e=>toggle(e, type)}>true</div>`

  var input = bel`
    <div class=${css.booleanField}>
      ${boolFalse}
      ${boolTrue}
    </div>
  `

  return input

  function toggle (e, type) {
    if (e.target.innerHTML === 'true') {
      boolFalse.style.color = colors.slateGrey
      boolFalse.style.backgroundColor = colors.dark
      boolTrue.style.color = colors.dark
      boolTrue.style.backgroundColor = colors.aquaMarine

    } else if (e.target.innerHTML === 'false') {
      boolTrue.style.color = colors.slateGrey
      boolTrue.style.backgroundColor = colors.dark
      boolFalse.style.color = colors.dark
      boolFalse.style.backgroundColor = colors.violetRed
    }
    validate(e, type)
  }

  function validate (e, type) {
    var msg = validator.getMessage(type, e.target.innerHTML)
    if (msg) cb(msg)
    else cb(null)
  }
}
