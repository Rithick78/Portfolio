import React from 'react'
import "./project.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "../../assets/f-link.png"
import github from "../../assets/github.png"

const Projects = [
    {
        no: "1",
        name: "Portfolio",
        tool:"HTML  CSS  JavaScrit  React  Tailwind ",
        desc: "I explored modern web design concepts and enhanced my skills in creating engaging UI components.I also learned how to incorporate smooth animations and interactive effects to improve user experience.The portfolio is fully responsive and adats seamlessly to all screen sizes.  ",
        img: '/images/portfolio.png',
        date:"JUNE 2025",
        links:'https://portfoliorj8.netlify.app/',
        linkss:'https://github.com/Rithick78/Portfolio'
    },
    {
        no: "2",
        name: "To-Do List Website",
        tool:"HTML  CSS  JavaScrit  React  Tailwind ",
        desc: "I learned how to implement full CRUD (Create, Read, Update, Delete) functionality, allowing users to efficiently manage their tasks. I also gained hands-on experience with state management in React and the utility-first approach of Tailwind CSS.The application is fully responsive and works smoothly across all screen sizes and devices.",
        img: "/images/todo.png",
        date:"MAY 2025",
        links:'https://todolistrj.netlify.app/',
        linkss:'https://github.com/Rithick78/Todo-list',
    },
    {
        no: "3",
        name: "Weather Website",
        tool:"HTML  CSS  JavaScrit  React ",
        desc: "I learned how to fetch real-time data from the internet using the asynchronous fetch method in JavaScript. I also focused on making the application fully responsive, ensuring that it works seamlessly across all screen sizes and devices.",
        img: "/images/weather.png",
        date:"APRIL 2025",
        links:'https://weatherrj.netlify.app/',
        linkss:'https://github.com/Rithick78/Weather-finder',
    },
    
]
const project = () => {

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
     responsive: [
      {
        breakpoint: 1000, // for screen widths <= 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // for screen widths <= 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350, // for screen widths <= 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

    return (
        <div id='project' className='project p-5 mt-10 flex gap-12 flex-col justify-center items-center'>
            <h1 
               data-aos="fade-down" 
               data-aos-duration="1500" 
               data-aos-once="true" 
               data-aos-easing="ease-in-out"
            className='title-p'>Projects</h1>

            <div 
               data-aos="fade" 
               data-aos-duration="2500" 
               data-aos-once="true" 
               data-aos-easing="ease-in-out"
            className=' project-sum text-center font-semibold text-[17px] text-[#550d94]'>
                <h1 > Welcome to my project page! Here, you'll find
                    a collection of the work I've done-ranging
                    from <br /> frontend web development to creative
                    problem-solving and design. Each project
                    reflects my growth, passion for<br /> coding, and
                    commitment to building clean, responsive,
                    and user-friendly applications. I'm constantly
                    learning and pushing my limits,<br /> and these
                    projects are a testament to that journey.</h1>

            </div>

            <div className="my-projects w-3/4 m-auto  ">
               <Slider {...settings}> {Projects.map((p, index) => {
                    return (<div 
                        data-aos="fade-up" 
                        data-aos-duration={index*1100} 
                        data-aos-once="true" 
                        data-aos-easing="ease-in-out"  
                    key={index} className="card ">
                        <div className="card-img " key={index}>
                            <img src={p.img} />
                        </div>
                        <h1 className='text-[23px] font-medium '>{p.no}. {p.name}</h1>
                        <h2 className='font-semibold '>{p.tool}</h2>
                        <p className=' text-[17px]'>{p.desc}</p>
                        <div className="card-footer flex justify-evenly gap-10 ">
                            <div className="date">
                              <p>{p.date}</p>
                            </div>
                            <div className="links flex items-center gap-3">
                                <a href={p.links}><img className="img-link" src={Link} /></a>
                                <a href={p.linkss}><img className="img-git" src={github} /></a>
                            </div>
                        </div>
                    </div>
                    )
                })}</Slider >
            </div>
        </div>)
}


export default project
