import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <ul className="w-full">
          <br></br>
          Одной темной ночью на прошедших выходных зародилась новая религия - петушарианство.
Как известно, главный петушара - Серега, он же и мессия в нашей конфессии.
          <br></br>
Обряд посвящения петушары - получить пощёчину арчи от другого петушары (желательно при этом быть в говно). В эту религию нельзя войти если существуют какие-то обидки и недомолвки между петушарами.
          <br></br>
Пощёчина Арчи - это главный священный обряд петушарианства, момент высочайшего просветления и абсолютного прощения. Каждый может даровать другому абсолютное прощение, каждый в этой религии - Иисус, каждый этой в религии - петушара.
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
