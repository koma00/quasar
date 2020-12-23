/*
export function someMutation (state) {
}
*/
export const updateLogin = (state, opened) => {
  const now = new Date()
  const item = {
    value: opened,
    expiry: now.getTime() + 72 * 60 * 60 * 1000 // 72 hours
  }
  state.login = item
  localStorage.setItem('login', JSON.stringify(item))
}

export const destroyLogin = (state) => {
  localStorage.removeItem('login')
  state = undefined
}
