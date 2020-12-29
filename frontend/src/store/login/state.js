export default function () {
  const loginStr = localStorage.getItem('login')
  // if the item doesn't exist, return null
  if (!loginStr) {
    return {
      endpoints: {
        createJWT: 'http://127.0.0.1:8000/api/user/create/'
      }
    }
  }
  const login = JSON.parse(loginStr)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (now.getTime() > login.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem('login')
    return {
      endpoints: {
        createJWT: 'https://127.0.0.1:8000/api/user/create/'
      }
    }
  }
  return {
    endpoints: {
      createJWT: 'https://127.0.0.1:8000/api/user/create/'
    },
    login: login.value
  }
}
