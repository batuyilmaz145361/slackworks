const VALID_EMAIL = "digitalAcademy@gmail.com";
const VALID_PASSWORD = "iLoveReact123";

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isCredentialsValid =
    email.trim() === VALID_EMAIL && password === VALID_PASSWORD;

  const handleSubmit = (e) => {
    e.preventDefault();
    isCredentialsValid && onLoginSuccess();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>შესვლა</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button type="submit" disabled={!isCredentialsValid}>
        საიტზე გადასვლა
      </button>
    </form>
  );
};

window.LoginForm = LoginForm;
