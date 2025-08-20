
import "./skills.css"
import rithick2 from "../../assets/rithick3.png"
import Html from "../../assets/html.png"
import Css from "../../assets/css.png"
import JS from "../../assets/javascript.png"
import react1 from "../../assets/react.png"
import Next from "../../assets/nextjs.png"
import Tailwind from "../../assets/tailwind.png"
import Git from "../../assets/git.png"

const skills = () => {
    return (
        <div id='skills' className="skills flex justify-center items-center flex-col">
            <h1 
              data-aos="fade-down" 
              data-aos-duration="1500" 
              data-aos-once="true" 
              data-aos-easing="ease-in-out"
            className='title'>Skills</h1>
            <div className="skills-full gap-50 flex justify-center items-center ">
                <div className="skills-left flex flex-col items-center justify-center ">
                   <div 
                     data-aos="zoom-out-right" 
                     data-aos-duration="2000" 
                     data-aos-once="true" 
                     data-aos-easing="ease-in-out"
                   className='skills-left-img   bg-purple-400'>
                    <img className='skill-img-me' src={rithick2} />
                   </div>
                   <h2 
                        data-aos="fade-up" 
                        data-aos-duration="1500" 
                        data-aos-once="true" 
                        data-aos-easing="ease-in-out"
                   className='about-skills'>I bring a wide range of skills to the table,
                    along with all the required certifications.
                    I am adept at adapting <br />to new technologies and staying
                    up to date with lastest developments.I have hands on experience with
                    <br /><span className='font-bold text-xl'>HTML, CSS, JavaScript, React, Next JS, Tailwind</span> and <span className='font-bold  text-xl'>Git </span> . I am capable of quickly mastering
                    <br />new tools and  framework as needed.</h2>
                </div>
                <div className="skills-right ">
                      <h1
                        data-aos="zoom-in-left" 
                        data-aos-duration="1000" 
                        data-aos-once="true" 
                        data-aos-easing="ease-in-out"
                      >Languages :</h1>
                    <div 
                        data-aos="fade-left" 
                        data-aos-duration="1300" 
                        data-aos-once="true" 
                        data-aos-easing="ease-in-out"
                    className='language flex gap-10 w-20 '>
                        <img src={Html} />
                        <img src={Css} />
                        <img src={JS} />
                    </div>
                    <h1
                    data-aos="zoom-in-left" 
                        data-aos-duration="1800" 
                        data-aos-once="true" 
                        data-aos-easing="ease-in-out"
                    >Libraries / Frameworks :</h1>
                    <div 
                        data-aos="fade-left" 
                        data-aos-duration="2100" 
                        data-aos-once="true" 
                        data-aos-easing="ease-in-out"
                    className='library flex gap-10 w-20 '>
                        <img src={react1} />
                        <img src={Next} />
                        <img className='' src={Tailwind} />
                    </div>
                    <h1
                        data-aos="zoom-in-left" 
                        data-aos-duration="2500" 
                        data-aos-once="true" 
                        data-aos-easing="ease-in-out"
                    >Version Control Tool :</h1>
                    <div 
                        data-aos="fade-left" 
                        data-aos-duration="2800" 
                        data-aos-once="true" 
                        data-aos-easing="ease-in-out"
                    className='tool flex gap-10 w-20'>
                        <img src={Git} />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default skills
