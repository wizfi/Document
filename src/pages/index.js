import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/easy_to_use.JPG',
    description: (
      <>
        WizFi360 is fast & simple plug-and-play module for the addition of wireless capabilities.
      </>
    ),
  },
  {
    title: <>SDK Customization</>,
    imageUrl: 'img/img_sdk.png',
    description: (
      <>
        To minimize customers' burden we provide software customization services, like AT command customization.
      </>
    ),
  },
  {
    title: <>HDK Customization</>,
    imageUrl: 'img/img_hdk.png',
    description: (
      <>
        Need more pins or different dimensions? Let us know, we will modify our module according to your project requirements.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`All about ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        
          <div className="container">
            <div className="row">
              <div className={classnames('col col--5 col--offset-1')}>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      'button button--outline button--secondary button--lg',
                      styles.getStarted,
                    )}
                    to={useBaseUrl('docs/intro')}>
                    Get Started
                  </Link>
                </div>
              </div>
              <div className={classnames('col col--5')}>
                <img className={styles.heroImg} src="img/img_slide1_wizfi360_1.png" />
              </div>
            </div>         
          </div>

      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
