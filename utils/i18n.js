export function translateOptions (path, input, vm) {
  const keys = Array.isArray(input) ? input : Object.keys(input)
  return keys.reduce((output, key) => {
    output[key] = vm.$t(`${path}.${key}`)
    return output
  }, {})
}
