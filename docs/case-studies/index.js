import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from "./index.module.css";
import Link from "@docusaurus/Link";

function UseCase() {
  return (
    <Layout
      title="Case Studies"
      description="Deep Lake API Case Studies">
      <main>
      <section className={styles.UseCaseSection}>
        <div className={styles.UseCaseRow}>
            <div className={styles.UseCaseColumn}>
              <Link to="/case-studies/bitcoin-lock">
                <div className={styles.UseCase}>Simple Bitcoin Lock</div>
              </Link>
          </div>
            <div className={styles.UseCaseColumn}>
              <Link to="/case-studies/time-lock">
                <div className={styles.UseCase}>Bitcoin Time Lock</div>
                </Link>
          </div>
            <div className={styles.UseCaseColumn}>
              <Link to="/case-studies/asset-swap">
                <div className={styles.UseCase}>Bitcoin Asset Swap</div>
                </Link>
          </div>
        </div>
        <div className={styles.UseCaseRow}>
            <div className={styles.UseCaseColumn}>
              <Link to="/case-studies/ordinal-lending">
                <div className={styles.UseCase}>Ordinal Lending</div>
                </Link>
          </div>
            <div className={styles.UseCaseColumn}>
              <Link to="/case-studies/ordinal-staking">
                <div className={styles.UseCase}>Ordinal Staking</div>
                </Link>
          </div>
            <div className={styles.UseCaseColumn}>
              <Link to="/case-studies/ordinal-offers">
                <div className={styles.UseCase}>Ordinal Offers</div>
                </Link>
          </div>
        </div>
      </section>
      </main>
    </Layout>
  );
}

export default UseCase;
