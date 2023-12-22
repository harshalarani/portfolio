import React, { useEffect } from 'react';
import './first.css';
import me from './me.png'
import SkillBar from './SkillBar';


function First() {
  useEffect(() => {
    const handleScroll = () => {
      // Select multiple elements individually
      const textElements = document.querySelectorAll('.atext, .sfirst');
  
      textElements.forEach((el) => {
        const textPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Adjust this value to change when the animation triggers
  
        if (textPosition < screenPosition) {
          el.classList.add('animate'); // Add 'animate' to each element when it meets the condition
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  

  return (
   
    <div className="container">
      <h1 className="title">
        <span>Hi, nice</span>
        <span>to see</span>
        <span>you here</span>
      </h1>

      <h2 className="title">
        <span>I am</span>
        <span>Harshala Rani.</span>
      </h2>
      <img src={me} alt="me" className="me" />

      

<div className="atext">
<section id="about" className="section">
<p>Hey there! I'm Harshala, the <span className='hatext'> strategic coder </span> with a knack for turning lines of code into game-changing strategies.</p> 

<p>Back in my second year of engineering, I <span className='hatext'>kickstarted a blog</span> from scratch using <span className='hatext'>React.js</span>. Not just any blog—it's alive and kicking on <span className='hatext'>Vercel</span>, sipping data insights from <span className='hatext'>Google Analytics</span>. Yep, I’m that cool data-driven strategist!</p> 

<p>Pressure? Bring it on! I'm the <span className='hatext'>ultimate multitasker</span>—juggling <span className='hatext'>leadership at 'U and I', freelancing as a tutor</span>, and running my buzzing blog. Academics? Nailed it. And in between, I fuel my brain with <span className='hatext'>books</span> and keep my <span className='hatext'>fitness</span> game strong.</p> 

<p>I’m not your average coder—I’m a strategy maestro, a multitasking guru, and a growth junkie—both in my code and in life.</p>

</section>    
</div>

<div className="sfirst">
<section id="skills" className="section">
  
            <SkillBar skill="HTML,CSS,JS" percentage={90} />
            <SkillBar skill="React JS" percentage={85} />
            <SkillBar skill="Python-Numpy,SciPy,Pandas" percentage={80} />
            <SkillBar skill="Data Analytics" percentage={65} />
            <SkillBar skill="SQL, NoSQL- Mongo DB" percentage={80} />
            <SkillBar skill="C,C++" percentage={78} />
            <SkillBar skill="Excel" percentage={90} />
            </section>
        </div>
    
    
    </div>
  );
}

export default First;
