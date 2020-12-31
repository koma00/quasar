export default function () {
  const retVal = {
    endpoints: {
      createJWT: 'http://127.0.0.1:8000/api/user/create/',
      loginJWT: 'http://127.0.0.1:8000/api/user/auth/'
    }
  }
  const loginStr = localStorage.getItem('login')
  // if the item doesn't exist, return null
  if (!loginStr) {
    return retVal
  }
  const login = JSON.parse(loginStr)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (now.getTime() > login.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem('login')
    return retVal
  }
  retVal.login = login.value
  return retVal
}
