const UserCard = ({ user }) => {
  const { name, email, phone, location, picture, dob, nat } = user;
  const fullName = `${name.title} ${name.first} ${name.last}`;

  return (
    <article className="user-card">
      <div className="user-card__header">
        <img
          src={picture.medium}
          alt={fullName}
          className="user-card__avatar"
        />
        <div>
          <h3 className="user-card__name">{fullName}</h3>
          <span className="user-card__nat">
            Country: {location.country} ({nat})
          </span>
        </div>
      </div>

      <div className="user-card__info">
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>City:</strong> {location.city}, {location.state}
        </p>
        <p>
          <strong>Age:</strong> {dob.age}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
      </div>
    </article>
  );
};

window.UserCard = UserCard;
