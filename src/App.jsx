import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Title from './components/Title/Title';

const App = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <div className="container">
      <Title subTitle='Our Services' title='What we offer' />
      <Services/>
    </div>
    
    </div>
  )
}

export default App
