import React from 'react'
import "./contact.css"
import call from "../../assets/mobile.png"
import map from "../../assets/map.png"
import mail from "../../assets/gmail.png"

const contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9cea041a-bd0b-40ee-8f48-1745654c491a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Mail Send Successfully");
    }
     
  };

    return (
        <div id='contact' className='contact bg-purple-100 rounded-[100px] flex flex-col gap-30'>
            <h1
               data-aos="fade-down" 
               data-aos-duration="1500" 
               data-aos-once="true" 
               data-aos-easing="ease-in-out"
            className='c-title text-center'>Contact</h1>
            <div className="contact-sec p-10 flex justify-evenly items-center">
                <div 
                        data-aos="fade-right" 
                        data-aos-duration="3000" 
                        data-aos-once="true" 
                        data-aos-easing="ease-in-out"
                className="contact-left flex flex-col  gap-10">
                    <h2 className='text-center text-3xl font-semibold'>Get in touch </h2>
                    <p className='text-[18px] ' > Hi, I'm a fresher actively looking for a job opportunity as a Frontend Web Developer. <br /> I'm passionate about web development and eager to start my career with a company<br /> where I can learn, grow, and contribute.
If you have any openings or would like to <br />know more about me, feel free to get in touch.</p>
                    <div className="info-sec flex flex-col items-start gap-10">
                     <div className="info">
                        <img src={mail} /> <span>rithickjackson8@gamil.com</span>
                    </div>
                    <div className="info">
                        <img src={call} /><span>+91-6383534076</span>
                    </div>
                    <div className="info">
                        <img src={map} /><span>Chennai-119,Tamil nadu</span>
                    </div>
                    </div>
                    
                </div>
                <form 
                     data-aos="fade-left" 
                     data-aos-duration="3000" 
                     data-aos-once="true" 
                     data-aos-easing="ease-in-out"
                onSubmit={onSubmit}  className="contact-right flex items-start flex-col gap-5">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name="name" placeholder='Enter Your Name ' />
                    <label htmlFor="">Email</label>
                    <input type='email' name="email" placeholder='Enter Your Email' />
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" placeholder='Enter Your Message...' ></textarea>
                    <button type='submit' >Submit Now</button>
                </form>

            </div>
        </div>
    )
}

export default contact
