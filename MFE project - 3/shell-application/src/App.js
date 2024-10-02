import React from "react";

const Button = React.lazy(() => import("MicroFrontend/Button"));

const App = () => {
  return (
    <>
      <h1>Shell Application</h1>
      <Button buttonName={"Click this button"} />
    </>
  );
};

export default App;
