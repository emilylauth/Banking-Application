function CreateAccount() {
  const [status, setStatus] = React.useState("");

  function handle() {
    return true;
  }

  return (
    <>
      <NavBar />
      <Card
        bgcolor="card border-dark mb-3 card-body text-dark"
        header="Create Account"
        handle={handle}
        submitButton="Continue to Account"
        status={status}
      />
    </>
  );
}
