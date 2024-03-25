const Heading = () => {
  const currentDate = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };

  return (
    <header>
      <h2 className="h2">Good day to reach your Goals, Garv!</h2>

      <div className="date-box">
        <img className="calendar" src="./calendar.png" alt="" />
        <span className="date">
          {currentDate.toLocaleDateString("en-US", options)}
        </span>
      </div>
      <div className="user-icon">
        <img className="bell" src="./Group 767.png" alt="" />
        <img className="calendar" src="./User-Profile.png" alt="User Icon" />

        <span className="username">Garv Thanvi</span>
      </div>
    </header>
  );
};

export default Heading;
