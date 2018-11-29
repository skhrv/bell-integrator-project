import * as React from 'react';
import { IUserPayload } from '../actions/index';

interface ILoginProps {
  onLogin: (user: IUserPayload) => void;
  loginStatus: boolean;
  loading: boolean;
}
interface ILoginState {
  email: string;
  password: string;
}
export default class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  private handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.onLogin({ email, password });
  }

  private handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ email: value });
  }

  private handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ password: value });
  }

  public render() {
    const disabled = this.props.loading;
    return (
      <div className="col-md-3 mx-auto mt-4">
      <p className="h3 text-center mb-3">Please login</p>
        <form onSubmit={this.handleSubmitLogin}>
          <div className="form-group">
            <label htmlFor="InputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleInputEmail}
              value={this.state.email}
              disabled={disabled}
              required={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword1">Password</label>
            <input
              type="password"
              name="password"
              id="InputPassword1"
              className="form-control"
              placeholder="Password"
              onChange={this.handleInputPassword}
              value={this.state.password}
              disabled={disabled}
              required={true}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={disabled}
          >Log in
          </button>
        </form>
      </div >
    );
  }
}
