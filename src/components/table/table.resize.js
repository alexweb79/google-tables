import {$} from '@core/Dom';

export function resizeHendler($root, event) {
  return new Promise(resolve => {
    const $resizer = $(event.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const type = $resizer.data.resize
    let value

    $resizer.css({opacity: 1})

    if (type === 'col') {
      $resizer.css({height: 100 + 'vh'})

      document.onmousemove = (e) => {
        const delta = e.pageX - coords.right
        value = coords.width + delta
        $resizer.css({right: -delta + 'px'})
      }
    } else if (type === 'row') {
      $resizer.css({width: 100 + 'vw'})

      document.onmousemove = (e) => {
        const delta = e.pageY - coords.bottom
        value = coords.height + delta
        $resizer.css({bottom: -delta + 'px'})
      }
    }

    document.onmouseup = () => {
      document.onmousemove = null
      document.onmouseup = null

      if (type === 'col') {
        $resizer.css({height: 'auto'})
        $parent.css({width: value + 'px'})
        $root.findAll(`[data-col="${$parent.data.col}"]`)
            .forEach(el => el.style.width = value + 'px')
      } else if (type === 'row') {
        $resizer.css({width: 'auto'})
        $parent.css({height: value + 'px'})
      }

      resolve({
        value,
        type,
        id: $parent.data[type]
      })

      $resizer.css({
        opacity: 0,
        right: 0,
        bottom: 0
      })
    }
  })
}
