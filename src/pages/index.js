import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import * as style from '../styles/index.module.scss';
import { Skills } from '../components/oraganisms/Skills';
import { Works } from '../components/oraganisms/Works';

const Index = () => {
  return (
    <Layout>
      <Seo title="Imkn" description="Kentaro Imaiのポートフォリオサイトです" />
      <div className={style.hero}>
        <Image
          src="/images/index-hero.jpg"
          alt="hero"
          // layout="fill"
          width={2000}
          height={1000}
          objectFit="cover"
          quality={90}
        />
        <div className={style.textContainer}>
          <h1>I'm Kentaro Imai!</h1>
          <h3>JavaScript Developer</h3>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.profile}>
          <div>
            <h1>Kentaro Imai</h1>
            <br />
            <p>神奈川県横浜市出身。</p>

            <p>大学・大学院で海洋科学を専攻。</p>

            <p>地元の地方公務員として一年務めたのち、</p>
            <p>フロントエンドエンジニアを目指して,</p>
            <p>日々学習を続けている。</p>
          </div>
          <Image
            src="/images/profile.jpg"
            alt="hero"
            height={1195}
            width={1000}
            quality={90}
          />
        </div>
        <Works />
        <Skills />

        <div className={style.ctaButton}>
          <Link href="/contact">
            <a>Make It Happen!</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
