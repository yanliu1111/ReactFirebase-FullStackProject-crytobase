import React from "react";
import SaveCoin from "../components/SaveCoin";

const Account = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Account</h1>
          <p>Welcome, User</p>
          <button>Sign Out</button>
        </div>
      </div>
      <div>
        <div>
          <h1>Watch List</h1>
          <SaveCoin />
        </div>
      </div>
    </div>
  );
};

export default Account;
