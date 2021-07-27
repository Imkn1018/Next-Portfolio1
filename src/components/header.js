import Link from 'next/link';
import Image from 'next/image';
import * as style from '../styles/common.module.scss';

const Header = () => {
  return (
    <header className={style.headerWrapper}>
      <div className={style.container}>
        <div className={style.flexContainer}>
          <Link href="/">
            <a>
              <Image
                src="/images/headerLogo.png"
                alt="logo"
                width={200}
                height={80}
                className={style.headerLogo}
              />
            </a>
          </Link>
          <ul>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
