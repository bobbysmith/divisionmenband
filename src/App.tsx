import About from './components/About/About';
import Albums from './components/Albums/Albums';
import Bio from './components/Bio/Bio';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Musicians from './components/Musicians/Musicians';
import Photos from './components/Photos/Photos';
import Reviews from './components/Reviews/Reviews';
import Social from './components/Social/Social';
import Videos from './components/Videos/Videos';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Musicians />
        <Albums />
        <Photos />
        <Bio />
        <Videos />
        <Reviews />
        <Social />
      </main>
      <Footer />
    </>
  );
}
