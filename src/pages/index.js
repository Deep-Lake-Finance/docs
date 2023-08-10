import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
    <div className="headerpara">
      Deep Lake's API stand as a comprehensive collection of APIs meticulously
      crafted to streamline Bitcoin development and access to transaction
      primitives. This encompasses a wide array of functionalities, including
      DLCs, PSBTs, Taproot, Schnorr signatures, and an array of others. By
      leveraging Deep Lake's capabilities, developers are empowered to forge
      trust-minimized and non-custodial smart contract applications directly
      within the Bitcoin ecosystem, eliminating the need for side chains,
      wrapping, or bridging mechanisms.        
    </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
