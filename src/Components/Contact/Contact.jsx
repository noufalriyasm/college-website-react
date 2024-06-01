import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';


function Contact(){


 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9a88a9f4-ef75-433c-a9ba-e396a93cd696");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact" id='contact'>
        <div className="contact-col">
            <h3>Send Us a Message <img src={msg_icon}></img></h3>
            <p>Feel free to reach out through contact form or find 
                our contact information below.yoiur feedback,questions,
                and suggestions are important to us we strive to provide exceptional
                service to our university community.
            </p>
            <ul>
                <li> <img src={mail_icon}></img>noufal@gmail.com </li>
                <li> <img src={phone_icon}></img>0012345685 </li>
                <li> <img src={location_icon}></img>AREA-52,USA </li>
            </ul>
        </div>
        <div className="contact-col">
            
            <form onSubmit={onSubmit}>
            <h2>Contact Form</h2>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your Name' required></input>
                <label>Contact Number</label>
                <input type='tel' name='phone' placeholder='Enter Contact Number' required></input>
                <label>Write Your Message</label>
                <textarea name='message' rows="6" placeholder='Enter Your Message' required></textarea>
                <button className='btn' type='submit'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact