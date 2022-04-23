const Register = () => {
  return (
    <div className="register-login">
      <h1>Register</h1>
      <div className="form">
        <form>
          <div className="form-group">
            <input type="text" name="name" id="name" placeholder="name..." />
          </div>
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
            <input
              type="password"
              name="password2"
              id="password2"
              placeholder="confirm password..."
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

export default Register;
