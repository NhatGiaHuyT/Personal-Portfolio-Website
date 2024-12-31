import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import ParallaxSection from '../components/ParallaxSection';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import MyJourney from '../components/MyJourney';
import Charts from '../components/Charts';
import { getAllPosts } from '../lib/api';

const Home = ({ posts }) => {
  return (
    <Layout>
      <Hero />
      <About />
      <ParallaxSection />
      <Skills />
      <MyJourney />
      <Projects />
      <Testimonials />
      <Charts />
      <Blog posts={posts} />
      <Contact />
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

  return {
    props: { posts },
  };
}

export default Home;