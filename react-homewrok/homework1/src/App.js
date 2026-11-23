function UserCard(props) {
  return React.createElement("div", { className: "shopping-item" }, [
    React.createElement(
      "h2",
      { className: "user-name" },
      `${props.firstname} ${props.lastname}`
    ),
    React.createElement("p", null, `Age: ${props.age}`),
    React.createElement("p", null, `Gender: ${props.gender}`),
    React.createElement("p", null, `Email: ${props.email}`),
    React.createElement("p", null, `Job: ${props.job}`),
  ]);
}

function App() {
  return React.createElement("main", { className: "container" }, [
    ...data.map((user) =>
      React.createElement(UserCard, {
        key: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        age: user.age,
        gender: user.gender,
        email: user.email,
        job: user.job,
      })
    ),
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
