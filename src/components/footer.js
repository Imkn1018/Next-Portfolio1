import Link from 'next/link';
import * as style from '../styles/common.module.scss';

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.insideContainer}>
        <a href="https://github.com/Imkn1018">
          <img src="/images/github.svg" alt="logo" />
        </a>

        <a href="https://twitter.com/imkm1018">
          <img src="/images/twitter.svg" alt="logo" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100010857344034">
          <img src="/images/facebook.svg" alt="logo" />
        </a>
        <hr />
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <p>©{new Date().getFullYear()} Kentaro Imai</p>
      </div>
    </footer>
  );
};

export default Footer;
