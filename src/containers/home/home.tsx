import React, { useState } from 'react';
import Head from 'next/head';
import sideImage from 'assets/images/side.png';
import bowlImage from 'assets/images/bowl.png';

import bowl1 from 'assets/images/image_name/bowl1.png';
import bowl2 from 'assets/images/image_name/bowl2.png';

import alfredo from 'assets/images/image_name/alfredo.png';
import aglioOlio from 'assets/images/image_name/aglio-olio.png';
import arrabiata from 'assets/images/arrabiata.png';
import pesto from 'assets/images/image_name/pesto.png';
import mushroom from 'assets/images/image_name/mushroom.png';

import penne from 'assets/images/image_name/penne.png';
import spag from 'assets/images/image_name/spag.png';
import elbowMacaroni from 'assets/images/image_name/elbow.png';
import quinoaPenne from 'assets/images/image_name/quinoa.png';
import wholeWheatSpaghetti from 'assets/images/image_name/whole-wheat.png';

import brocconi from 'assets/images/image_name/brolloc.png';
import bellPepper from 'assets/images/image_name/bell-pepper.png';
import quinoa from 'assets/images/image_name/quin.png';
import mushroom2 from 'assets/images/image_name/mushrooms2.png';
import wholeWheatSpaghetti2 from 'assets/images/image_name/whole.png';

import blackOlives from 'assets/images/image_name/blackolives.png';
import sundriedTomato from 'assets/images/image_name/sundried.png';
import basil from 'assets/images/image_name/basil.png';
import parsley from 'assets/images/image_name/parsley.png';
import parmesanCheese from 'assets/images/image_name/parmesan.png';

import grilledChicken from 'assets/images/image_name/grill_chicken.png';
import shrimp from 'assets/images/image_name/shrimp.png';
import bacon from 'assets/images/image_name/bacon.png';
import sausage from 'assets/images/image_name/sausage.png';
import meatBalls from 'assets/images/image_name/meatballs.png';

import farmFreshSalad from 'assets/images/farm-fresh-salad.png';
import frenchFries from 'assets/images/french-fries.png';
import garlicBread from 'assets/images/garlic-bread.png';

import { ReactComponent as BackLogo } from '../../assets/icons/back2.svg';
import { ReactComponent as PastoLogo } from '../../assets/icons/pastalogo.svg';

import Link from 'next/link';
import Router from 'next/router';
import styles from './pasta.scss';
import Button from '../../components/Button';
import { ButtonTypes } from '../../components/Button/Button';

const Home: React.SFC<{}> = () => {
  const [showItem, setShowItem] = useState(0);
  const [bowl, setBowl] = useState('');
  const [sauce, setSauce] = useState('');
  const [pasta, setPasta] = useState('');
  const [veggies, setVeggies] = useState('')
  const [garnish, setGarnish] = useState('');
  const [meat, setMeat] = useState('');


  const goBack = () => {
    if (showItem > 0 && showItem <= 5) {
      setShowItem(showItem - 1);
    }
  }

  return (
    <>
      <Head>
        <title>Pasta</title>
      </Head>

      <main className={styles.background}>
        <div className={styles.wrapper}>
          <div className={styles.sideImage}>
            <img
              alt="Side background"
              src={sideImage}
            />
          </div>

          <div className={styles.backLogo}>
            <BackLogo onClick={() => goBack()} />
            <PastoLogo />
          </div>

          {
            showItem === 0 && (
              <section>
                <div className={styles.bowlOne} onClick={() => setBowl('Mini Bowl 350ml')}>
                  <img
                    alt="bowl"
                    src={bowl1}
                  />
                </div>
                <div className={styles.bowlOne} onClick={() => setBowl('Regular Bowl 650ml')}>
                  <img
                    alt="bowl"
                    src={bowl2}
                  />
                </div>
              </section>
            )
          }
          {
            showItem === 1 && (
              <section>

                <div className={styles.sauceBowl}>
                  <img
                    alt="sauce"
                    src={bowlImage}
                  />
                </div>

                <div className={styles.sauceOne} onClick={() => setSauce('Alfredo')}>
                  <img
                    alt="sauce"
                    src={alfredo}
                  />

                </div>

                <div className={styles.sauceTwo} onClick={() => setSauce('Aglio Olio')}>
                  <img
                    alt="sauce"
                    src={aglioOlio}
                  />
                </div>

                <div className={styles.sauceThree} onClick={() => setSauce('Arrabiata')}>
                  <img
                    alt="sauce"
                    src={arrabiata}
                  />
                </div>
                <div className={styles.sauceFour} onClick={() => setSauce('Pesto')}>
                  <img
                    alt="sauce"
                    src={pesto}
                  />
                </div>
                <div className={styles.sauceFive} onClick={() => setSauce('Mushroom')}>
                  <img
                    alt="sauce"
                    src={mushroom}
                  />
                </div>


              </section>
            )
          }

          {
            showItem === 2 && (
              <section>

                <div className={styles.sauceBowl}>
                  <img
                    alt="sauce"
                    src={bowlImage}
                  />
                </div>

                <div className={styles.sauceOne} onClick={() => setPasta('Penne')}>
                  <img
                    alt="sauce"
                    src={penne}
                  />
                </div>

                <div className={styles.sauceTwo} onClick={() => setPasta('Spaghetti')}>
                  <img
                    alt="sauce"
                    src={spag}
                  />
                </div>

                <div className={styles.sauceThree} onClick={() => setPasta('Elbow Macaroni')}>
                  <img
                    alt="sauce"
                    src={elbowMacaroni}
                  />
                </div>
                <div className={styles.sauceFour} onClick={() => setPasta('Quinoa Penne')}>
                  <img
                    alt="sauce"
                    src={quinoaPenne}
                  />
                </div>
                <div className={styles.sauceFive} onClick={() => setPasta('Whole wheat spaghetti')}>
                  <img
                    alt="sauce"
                    src={wholeWheatSpaghetti}
                  />
                </div>
              </section>
            )
          }

          {
            showItem === 3 && (
              <section>

                <div className={styles.sauceBowl}>
                  <img
                    alt="sauce"
                    src={bowlImage}
                  />
                </div>

                <div className={styles.sauceOne} onClick={() => setVeggies('Broccoli')}>
                  <img
                    alt="sauce"
                    src={brocconi}
                  />
                </div>

                <div className={styles.sauceTwo} onClick={() => setVeggies('Bell pepper')}>
                  <img
                    alt="sauce"
                    src={bellPepper}
                  />
                </div>

                <div className={styles.sauceThree} onClick={() => setVeggies('Mushroom')}>
                  <img
                    alt="sauce"
                    src={mushroom2}
                  />
                </div>
                <div className={styles.sauceFour} onClick={() => setVeggies('Quinoa penne')}>
                  <img
                    alt="sauce"
                    src={quinoa}
                  />
                </div>
                <div className={styles.sauceFive} onClick={() => setVeggies('Tomatoes')}>
                  <img
                    alt="sauce"
                    src={wholeWheatSpaghetti2}
                  />
                </div>
              </section>
            )
          }

          {
            showItem === 4 && (
              <section>

                <div className={styles.sauceBowl}>
                  <img
                    alt="sauce"
                    src={bowlImage}
                  />
                </div>

                <div className={styles.sauceOne} onClick={() => setGarnish('Black Olives')}>
                  <img
                    alt="sauce"
                    src={blackOlives}
                  />
                </div>

                <div className={styles.sauceTwo} onClick={() => setGarnish('Sundried Tomatoes')}>
                  <img
                    alt="sauce"
                    src={sundriedTomato}
                  />
                </div>

                <div className={styles.sauceThree} onClick={() => setGarnish('Basil')}>
                  <img
                    alt="sauce"
                    src={basil}
                  />
                </div>
                <div className={styles.sauceFour} onClick={() => setGarnish('Parsley')}>
                  <img
                    alt="sauce"
                    src={parsley}
                  />
                </div>
                <div className={styles.sauceFive} onClick={() => setGarnish('Parmesan cheese')}>
                  <img
                    alt="sauce"
                    src={parmesanCheese}
                  />
                </div>
              </section>
            )
          }

          {
            showItem === 5 && (
              <section>

                <div className={styles.sauceBowl}>
                  <img
                    alt="sauce"
                    src={bowlImage}
                  />
                </div>

                <div className={styles.sauceOne} onClick={() => setMeat('Grilled chicken')}>
                  <img
                    alt="sauce"
                    src={grilledChicken}
                  />
                </div>

                <div className={styles.sauceTwo} onClick={() => setMeat('Shrimp')}>
                  <img
                    alt="sauce"
                    src={shrimp}
                  />
                </div>

                <div className={styles.sauceThree} onClick={() => setMeat('Bacon')}>
                  <img
                    alt="sauce"
                    src={bacon}
                  />
                </div>
                <div className={styles.sauceFour} onClick={() => setMeat('Sausage')}>
                  <img
                    alt="sauce"
                    src={sausage}
                  />
                </div>
                <div className={styles.sauceFive} onClick={() => setMeat('Meat balls')}>
                  <img
                    alt="sauce"
                    src={meatBalls}
                  />
                </div>
              </section>
            )
          }

          {
            showItem === 6 && (
              <section className={styles.sideSection}>
                <h5>Select your sides</h5>
                <div className={styles.sidesCard}>
                  <div>
                    <img
                      alt="french fries"
                      src={frenchFries}
                    />
                  </div>
                  <h4>French fries</h4>
                </div>

                <div
                  className={styles.sidesCard}
                  style={{ background: '#FFF0CA' }}
                >
                  <div>
                    <img
                      alt="Farm fresh salad"
                      src={farmFreshSalad}
                    />
                  </div>
                  <h4>Farm Fresh Salad</h4>
                </div>

                <div className={styles.sidesCard}>
                  <div>
                    <img
                      alt="Garlic Bread"
                      src={garlicBread}
                    />
                  </div>
                  <h4>Garlic Bread</h4>
                </div>
              </section>
            )
          }

          <section className={styles.selectSection}>
            <h2>Select the bowl</h2>

            <div>
              <div className={styles.detailCard}>

                <ul>
                  {
                    bowl && (
                      <>
                        <li>Bowl</li>
                        <li>{bowl}</li>
                      </>
                    )
                  }
                </ul>
                <div className={styles.insideCard}>
                  <ul>
                    {
                      sauce && (
                        <>
                          <li>Sauces</li>
                          <li>{sauce}</li>
                        </>
                      )
                    }
                    <br />
                    {
                      veggies && (
                        <>
                          <li>Veggies</li>
                          <li>{veggies}</li>
                        </>
                      )
                    }
                    <br />
                    {
                      meat && (
                        <>
                          <li>Meat</li>
                          <li>{meat}</li>
                        </>
                      )
                    }
                  </ul>
                  <ul>
                    {
                      pasta && (
                        <>
                          <li>Pasta</li>
                          <li>{pasta}</li>
                        </>
                      )
                    }

                    <br />

                    {
                      garnish && (
                        <>
                          <li>Garnish</li>
                          <li>{garnish}</li>
                        </>
                      )
                    }
                  </ul>

                </div>

              </div>
            </div>

            <div className={styles.bottomButton}>
              <Link href="/your-cart">
                <Button type={ButtonTypes.outline}>Your Cart</Button>
              </Link>
              <Button
                className={styles.ml20}
                onClick={
                  showItem < 5 ? () => setShowItem(showItem + 1) : () => Router.push('/your-cart')
                }
                type={ButtonTypes.primary}
              >
                Next
              </Button>
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default Home;
