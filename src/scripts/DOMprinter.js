

const everyonePrinter = {
    loginForm: () => {
        return `
 <form>
        <input type="text" id="username-input" placeholder="username">
        <input type="password" id="password-input" placeholder="password">
 </form>
    <button id="login-btn">Login</button>
  `
    }
}

export default everyonePrinter