export function getPaperData () {
  return {
    poops: {
      poopsDay: 1,
      wipesPoop: 6,
      sheetsWipe: 3,
    },

    pees: {
      peesDay: 5,
      sheetsPee: 0,
    },

    extras: {
      sheetsDay: 0,
      sheetsMonth: 0,
    },
  }
}

export function clone (data) {
  return JSON.parse(JSON.stringify(data))
}
