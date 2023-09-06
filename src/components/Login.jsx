import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
        </div>

        <div className="card-body">
          <form action="">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Email</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input type="submit" value={"log In"} className="btn" />
            </div>

            <div className="form-group">
              <span>
                <Link to="/messenger/register">Register your Account</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
