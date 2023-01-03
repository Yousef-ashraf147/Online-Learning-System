const UnauthorizedAccess = () => {
  return (
    <>
      <p style={{ fontSize: "1.4rem" }}>
        <h2 style={{ fontSize: "2rem" }}>
          <b>401 - Unauthorized </b>
        </h2>{" "}
        <br></br>
        You are not allowed to access this page.
      </p>
      <br></br>
      <img src={require(".//Stop.png")} />
    </>
  );
};

export default UnauthorizedAccess;
