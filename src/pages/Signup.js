import React from "react";

const Signup = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Full Name" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
