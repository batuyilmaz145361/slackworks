import React from "react";

function UserCard({ user, filters }) {
  return (
    <div className="user-card">
      {filters.name && (
        <p>
          <strong>Name:</strong> {user.name.first} {user.name.last}
        </p>
      )}
      {filters.email && (
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      )}
      {filters.country && (
        <p>
          <strong>Country:</strong> {user.location.country}
        </p>
      )}
      {filters.phone && (
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      )}
    </div>
  );
}

export default UserCard;