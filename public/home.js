function Home() {
  return (
    <>
      <NavBar />
      <Card
        bgcolor="light"
        txtcolor="black"
        header="MIT xPRO BadBank"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={
          <img
            src="img/bank.png"
            className="img-fluid"
            alt="Responsive image"
          />
        }
      />
    </>
  );
}
