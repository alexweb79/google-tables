function toButton(button) {
  const meta = `
    data-type="button"
    data-value='${JSON.stringify(button.value)}'
  `
  return `
    <div class="button ${button.status === true ? 'active' : '' }" ${meta}>
      <i class="material-icons" ${meta}>${button.icon}</i>
    </div>
  `
}

export function createToolbar(state) {
  const buttons = [
    {
      icon: 'format_align_left',
      status: state['textAlign'] === 'left',
      value: {textAlign: 'left'}
    },
    {
      icon: 'format_align_center',
      status: state['textAlign'] === 'center',
      value: {textAlign: 'center'}
    },
    {
      icon: 'format_align_right',
      status: state['textAlign'] === 'right',
      value: {textAlign: 'right'}
    },
    {
      icon: 'format_bold',
      status: state['fontWeight'] === 'bold',
      value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold'}
    },
    {
      icon: 'format_italic',
      status: state['fontStyle'] === 'italic',
      value: {fontStyle: state['fontStyle'] === 'italic' ? 'normal' : 'italic'}
    },
    {
      icon: 'format_underlined',
      status: state['textDecoration'] === 'underline',
      value: {textDecoration: state['textDecoration'] === 'underline' ? 'none' : 'underline'}
    },
  ]
  return buttons.map(toButton).join('')
}
