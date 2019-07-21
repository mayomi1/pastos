import React from 'react';
import sharedStyles from "../shared.scss";
import cartStyles from "../yourCart/yourCart.scss";

const ThankYou: React.SFC<{}> = () => {
  return (
    <div className={sharedStyles.container}>
      <div className={sharedStyles.wrapper}>
        <div className={sharedStyles.header}>
          Thank You
        </div>

        <div className={cartStyles.cartWrapper}>

        </div>
      </div>
    </div>
  );
}

export default ThankYou;
