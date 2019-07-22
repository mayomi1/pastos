import React from 'react';
import sharedStyles from "../shared.scss";
import cartStyles from "../yourCart/yourCart.scss";
import styles from './contact.scss';
import {ReactComponent as BackLogo} from "../../assets/icons/back2.svg";
import Link from "next/link";

const Contact: React.SFC<{}> = () => {
  return (
    <div className={sharedStyles.container}>
      <div className={sharedStyles.wrapper}>
        <div className={sharedStyles.header}>
          <Link href="/"><BackLogo /></Link>
          Contact
        </div>

        <div className={cartStyles.cartWrapper}>
          <div className={styles.contactCard}>
            <h4>You can e-mail us anytime!</h4>
            <h5>MAIL ADDRESS</h5>
            <span>
              about_us@pastaproject.in
            </span>
          </div>
        </div>

        <div className={styles.contactCard2}>
          <h4>Talk to us</h4>
          <p>Click here and talk to our customer support right away.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
