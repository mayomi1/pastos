import React from 'react';
import Link from 'next/link';
import CoolTabs from 'react-cool-tabs';
import sharedStyles from '../shared.scss';
import { ReactComponent as BackLogo } from '../../assets/icons/back2.svg';
import styles from './address.scss';

const Content1: React.SFC<{}> = () => {
  return (
    <div className={styles.content1}>
      <button className={styles.homeBtn}>Home</button>
      <h3>Mayan Sachan</h3>
      <div className={sharedStyles.col}>
        <h4>9415 730 069</h4>
        <div>mayansachan@gmail.com</div>
      </div>

      <p>
        1912, Block A, Sector 45, Gurugram, Haryana,
        India 122003
      </p>
    </div>
  );
};

const Content2: React.SFC<{}> = () => {
  return (
    <div>
      this is Content2
    </div>
  );
};

const ManageAddress: React.SFC<{}> = () => {
  return (
    <div className={sharedStyles.container}>
      <div className={sharedStyles.wrapper}>

        <div className={sharedStyles.header}>
          Manage Address
        </div>
        <div className={styles.addressBtnTop}>
          <div></div>
          <Link href='/address/add'><button className={styles.addressBtn}>Add address</button></Link>
        </div>
        <div className={styles.addressWrap}>
          <CoolTabs
            activeLeftTabBorderBottomStyle={{ background: 'white', height: 4 }}
            activeRightTabBorderBottomStyle={{ background: 'white', height: 4 }}
            activeTabStyle={{ background: '#67023F', color: 'white' }}
            borderTransitionStyle="all 0.6s ease-in"
            contentTransitionStyle="transform 0.6s ease-in"
            leftContent={<Content1 />}
            leftContentStyle={{ background: 'white' }}
            leftTabTitle="HOME"
            rightContent={<Content2 />}
            rightContentStyle={{ background: 'white' }}
            rightTabTitle="WORK"
            style={{ width: 550, height: 500, background: 'white' }}
            tabKey="1"
            tabsBorderBottomStyle={{ background: 'white', height: 4 }}
            unActiveTabStyle={{ background: '#67023F', color: '#B98AA7' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageAddress;
