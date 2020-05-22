const everyonePrinter = {
  loginForm: () => {
    return `
    <div id="login">
      <form>
        <input type="text" id="username-input" placeholder="username">
        <input type="password" id="password-input" placeholder="password">
      </form>
      <button id="login-btn">Login</button>
    </div>
  `;
  },
};

export default everyonePrinter;
