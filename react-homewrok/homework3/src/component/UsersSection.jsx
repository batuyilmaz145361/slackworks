const INITIAL_COUNT = 5;

const UsersSection = () => {
  const allUsers = window.usersData || [];
  const CardComponent = window.UserCard;
  const [visibleCount, setVisibleCount] = React.useState(INITIAL_COUNT);

  const visibleUsers = allUsers.slice(0, visibleCount);
  const hasMoreUsers = visibleCount < allUsers.length;

  const handleLoadMore = () => {
    setVisibleCount(allUsers.length);
  };

  return (
    <section className="users-section">
      <h2>
        მომხმარებლები ({visibleUsers.length} / {allUsers.length})
      </h2>

      <div className="users-grid">
        {visibleUsers.map((user) => (
          <CardComponent key={user.login.uuid} user={user} />
        ))}
      </div>

      {hasMoreUsers && (
        <button
          type="button"
          className="load-more-btn"
          onClick={handleLoadMore}
        >
          ყველას ნახვა (+{allUsers.length - visibleCount})
        </button>
      )}
    </section>
  );
};

window.UsersSection = UsersSection;
