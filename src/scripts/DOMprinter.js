const everyonePrinter = {
  // add ---> <input type="password" id="password-input" placeholder="password">
  loginForm: () => {
    return `
    <div id="login">
      <form>
        <input type="text" id="username-input" placeholder="username">
      </form>
      <button id="login-btn">Login</button>
    </div>
  `;
  },


  registrationForm: () => {
    return `
    <div id="register">
    <form>
      <input type="text" id="registerName-input" placeholder="Name">
      <input type="text" id="registerUsername-input" placeholder="username">
      <input type="email" id="registerEmail-input" placeholder="email">
    </form>
    <button id="register-btn">Register</button>
  </div>
      `
  }
};

export default everyonePrinter;
