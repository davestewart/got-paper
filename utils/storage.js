export default {
  set (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },

  get (key) {
    const value = localStorage.getItem(key)
    return value !== undefined
      ? JSON.parse(value)
      : undefined
  }
}
