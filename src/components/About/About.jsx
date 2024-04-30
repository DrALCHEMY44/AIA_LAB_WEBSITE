import './About.css';
import about_img from '../../assets/About.png';
import play_icon from '../../assets/play_icon.png';

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_icon} alt="" className="play_icon" />
        </div>
        <div className="about-right">
            <h3>About AIA-LAB</h3>
            <h2>At the top of Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, nam necessitatibus dolores magnam sapiente eligendi quas, quis deleniti dolor omnis quasi nesciunt eos iste laborum voluptatem, quos expedita consectetur! Beatae?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, natus vero ex nulla dolorem quam rerum quisquam odit laboriosam cumque praesentium delectus! Perspiciatis optio repellendus quas quis voluptatem odit earum!
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi fuga voluptatum et harum quaerat, quasi sed ullam repellat voluptate debitis quia similique quidem fugit eveniet rerum commodi quis. Ipsa, voluptas!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, numquam dolor laudantium maiores fuga, aut optio officia, distinctio nostrum hic ratione explicabo exercitationem odit? Asperiores voluptatum minima voluptate numquam dolores?</p>
        </div>
      
    </div>
  )
}

export default About
