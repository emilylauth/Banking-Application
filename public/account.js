function AccountDetails() {
  const [status, setStatus] = React.useState("");

  function handle() {
    return true;
  }

  return (
    <>
      <NavBar />
      <Card
        bgcolor="card border-secondary mb-3 text-center card-body text-secondary"
        header="Account"
        status={status}
        account={handle}
      />
    </>
  );
}
