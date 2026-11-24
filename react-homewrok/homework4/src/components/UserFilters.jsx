import React from "react";

function UserFilters({ filters, onChange }) {
  return (
    <div className="filters-box">
      <label>
        <input
          type="checkbox"
          name="name"
          checked={filters.name}
          onChange={onChange}
        />
        Name
      </label>

      <label>
        <input
          type="checkbox"
          name="email"
          checked={filters.email}
          onChange={onChange}
        />
        Email
      </label>

      <label>
        <input
          type="checkbox"
          name="country"
          checked={filters.country}
          onChange={onChange}
        />
        Country
      </label>

      <label>
        <input
          type="checkbox"
          name="phone"
          checked={filters.phone}
          onChange={onChange}
        />
        Phone
      </label>
    </div>
  );
}

export default UserFilters;