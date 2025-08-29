import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function TerminalOutput() {
  const [output, setOutput] = useState("");
  const indexRef = useRef(0);

  const commands = [
    { cmd: "$ whoami", output: "divine_eboigbe" },
    {
      cmd: "$ cat skills.txt",
      output: "Python • Java • JS • Docker • AWS • Terraform • Security",
    },
    {
      cmd: "$ echo 'focus'",
      output: "Secure cloud infra & automation (AWS + Terraform)",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (indexRef.current < commands.length) {
        const { cmd, output } = commands[indexRef.current];
        setOutput((prev) => prev + (prev ? "\n" : "") + cmd + "\n" + output);
        indexRef.current += 1;
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.terminal}>
      <div className={styles["terminal-header"]}>
        <div className={styles["terminal-buttons"]}>
          <span className={clsx(styles["terminal-button"], styles.red)}></span>
          <span
            className={clsx(styles["terminal-button"], styles.yellow)}
          ></span>
          <span
            className={clsx(styles["terminal-button"], styles.green)}
          ></span>
        </div>
        <div className={styles["terminal-title"]}>terminal</div>
      </div>
      <div className={styles["terminal-body"]}>
        <pre>{output}</pre>
        <span className={styles["terminal-cursor"]}>_</span>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles["hero-grid"]}>
          <div className={styles["hero-content"]}>
            <Heading as="h1" className={styles.hero__title}>
              {siteConfig.title}
            </Heading>
            <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
            <p className={styles["hero-description"]}>
              I am a software engineer with a strong interest in cloud security.
              I build secure and reliable cloud infrastructure and developer
              tools, with a current focus on AWS, Terraform, and secure cloud
              architectures.
            </p>

            <div className={styles.buttons}>
              <Link
                className={clsx(
                  styles.button,
                  styles["button--secondary"],
                  styles["button--lg"]
                )}
                to="/projects/intro"
              >
                View Projects
              </Link>
              <Link
                className={clsx(
                  styles.button,
                  styles["button--outline"],
                  styles["button--lg"]
                )}
                to="/about"
              >
                About
              </Link>
            </div>
          </div>
          <div className={styles["hero-terminal"]}>
            <TerminalOutput />
          </div>
        </div>

        {/* <div className={styles["stats-grid"]}>
          <div className={styles["stat-item"]}>
            <div className={styles["stat-number"]}>3</div>
            <div className={styles["stat-label"]}>Languages</div>
          </div>
          <div className={styles["stat-item"]}>
            <div className={styles["stat-number"]}>Docker</div>
            <div className={styles["stat-label"]}>Ready</div>
          </div>
          <div className={styles["stat-item"]}>
            <div className={styles["stat-number"]}>Linux</div>
            <div className={styles["stat-label"]}>Power User</div>
          </div>
          <div className={styles["stat-item"]}>
            <div className={styles["stat-number"]}>Cloud Security</div>
            <div className={styles["stat-label"]}>Learning</div>
          </div>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Cloud Security Enthusiast - Building secure cloud tools and infrastructure"
    >
      <HomepageHeader />
    </Layout>
  );
}
