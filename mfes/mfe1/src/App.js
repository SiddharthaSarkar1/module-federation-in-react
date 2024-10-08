import React, { Suspense } from "react";
// import CartApp from 'app2/App';

const CartApp = React.lazy(() => import("app2/App"));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>Product Listing</h1>
      </div>
      <Suspense fallback="Loading...">
        <CartApp />
      </Suspense>
    </div>
  );
};

export default App;
