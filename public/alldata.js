// const { response } = require("express");

function AllData() {
  const [data, setData] = React.useState("");

  // React hook
  React.useEffect(() => {
    // fetch all accounts from DB
    fetch("/account/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  console.log(data);

  function userNumber(i) {
    return `Account ${i + 1}`;
  }

  function userInfo(user) {
    return [user.name, user.email, user.password, user.balance];
  }

  if (data) {
    return (
      <>
        <NavBar />
        <h3>All data in store:</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((user, i) => (
            <Card
              index={i}
              key={i}
              bgcolor="light"
              txtcolor="black"
              header={userNumber(i)}
              // text={userNumber(i)}
              allData={userInfo(user)}
            />
          ))}
        </div>
      </>
    );
  }
}
