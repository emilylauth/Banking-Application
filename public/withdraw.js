function Withdraw() {
  // const [show, setShow]     = React.useState(true);
  // const [status, setStatus] = React.useState('');

  function handle() {
    return true;
  }

  return (
    <>
      <NavBar />
      <Card
        bgcolor="light"
        txtcolor="dark"
        header="Withdraw Amount"
        status={status}
        withdraw={handle}
        submitButtonWithdraw="Withdrawl Successful"
      />
    </>
  );
}
