function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const LoginComponent = window.LoginForm;
  const UsersComponent = window.UsersSection;

  return (
    <div className="App">
      {isAuthenticated ? (
        <UsersComponent />
      ) : (
        <LoginComponent onLoginSuccess={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
