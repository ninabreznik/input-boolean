var bel = require('bel')
var csjs = require('csjs-inject')

module.exports = displayBooleanInput

function displayBooleanInput({name, theme: {classes: css, colors}}) {
  var boolFalse = bel `<div class=${css.false} onclick=${e=>toggle(e)}>false</div>`
  var boolTrue = bel `<div class=${css.true} onclick=${e=>toggle(e)}>true</div>`

  return bel`
    <div class=${css.inputContainer}>
      <div class=${css.inputTitle}>${name}</div>
      <div class=${css.inputFields}>
      ${boolFalse}
      ${boolTrue}
      </div>
    </div>
  `

  function toggle (e) {
    if (e.target.innerHTML === 'true') {
      boolFalse.style.color = colors.slateGrey
      boolFalse.style.backgroundColor = colors.lavenderGrey
      boolTrue.style.color = colors.white
      boolTrue.style.backgroundColor = colors.aquaMarine

    } else if (e.target.innerHTML === 'false') {
      boolTrue.style.color = colors.slateGrey
      boolTrue.style.backgroundColor = colors.lavenderGrey
      boolFalse.style.color = colors.white
      boolFalse.style.backgroundColor = colors.violetRed
    }
  }
}
