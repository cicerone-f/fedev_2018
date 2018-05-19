const eventTypes = {
  JUMP: 'JUMP',
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
  DOWN: 'DOWN'
}

const events = [
  { type: eventTypes.JUMP, distance: 2, obstacle: true },
  { type: eventTypes.RIGHT, distance: 12, obstacle: false },
  { type: eventTypes.DOWN, distance: 4, obstacle: true },
  { type: eventTypes.JUMP, distance: 5, obstacle: true },
  { type: eventTypes.RIGHT, distance: 22, obstacle: false },
  { type: eventTypes.LEFT, distance: 19, obstacle: false },
  { type: eventTypes.DOWN, distance: 3, obstacle: false },
  { type: eventTypes.RIGHT, distance: 23, obstacle: true },
  { type: eventTypes.RIGHT, distance: 1, obstacle: false },
  { type: eventTypes.LEFT, distance: 23, obstacle: false },
  { type: eventTypes.JUMP, distance: 34, obstacle: true }
]

const result = events
  .filter(function (event) {
    return event.type === eventTypes.RIGHT
  })
  .filter(function (event) {
    return event.obstacle === false
  })
  .map(function (event) {
    return event.distance
  })
  .reduce(function (accumulator, item) {
    return accumulator + item
  })

result
