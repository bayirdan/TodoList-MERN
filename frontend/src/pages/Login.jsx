const Login = () => {
  return (
    <div className="register-login">
      <h1>Login</h1>
      <div className="form">
        <form>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email..."
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password..."
            />
          </div>
          <div className="form-group">
            <button type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
