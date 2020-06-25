const questions = {
  1: {
    question: 'What does path rhyme with?',
    options: ['hearth', 'hath'],
  },
  2: {
    question: 'What does book rhyme with?',
    options: ['luck', 'look', 'either'],
  },
  3: {
    question: 'What does scone rhyme with?',
    options: ['one', 'alone'],
  },
  4: {
    question: 'What does room rhyme with?',
    options: ['zoom', 'rum'],
  },
  5: {
    question: 'Do the words ion and iron sound alike?',
    options: ['yes', 'no'],
  }
}

export default questions

const regions = {
  NE: 'North East',
  NW: 'North West',
  YH: 'Yorkshire and The Humber',
  EM: 'East Midlands',
  WM: 'West Midlands',
  E: 'Eastern',
  L: 'London',
  SE: 'South East',
  SW: 'South West',
  NI: 'Northern Ireland',
  S: 'Scotland',
  W: 'Wales',
}

const regionList = [
  'NE', 'NW', 'YH', 'EM', 'WM', 'E', 'L', 'SE', 'SW', 'NI', 'S', 'W'
]

const weightings = {
  'hearth' : {
    NE: 2,
    NW: 2,
    YH: 2,
    EM: 2,
    WM: 2,
    E:  0,
    L:  0,
    SE: 0,
    SW: 0,
    NI: 2,
    S:  0,
    W:  0,
  },
  'scone' : {
    NE: 2,
    NW: 2,
    YH: 0,
    EM: 0,
    WM: 1,
    E:  1,
    L:  2,
    SE: 1,
    SW: 1,
    NI: 2,
    S:  2,
    W:  2,
  }
}
