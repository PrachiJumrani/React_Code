import React from 'react'
import './Contact.css'
import msg_icon from'../../assets/msg-icon.png'
import mail_icon from'../../assets/mail-icon.png'
import phone_icon from'../../assets/phone-icon.png'
import location_icon from'../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "41aec4b5-6c14-48b8-a4aa-ea8fffa9ca0b");

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
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon}/></h3>
            <p>Feel free to reach out through contact form or find our contact info below.
                Your feedback,questions and suggestions are important to us as we strive to provide exceptional service to our university community
            </p>
            <ul>
                <li><img src={mail_icon}/>psjumrani13@gmail.com</li>
                <li><img src={phone_icon}/>8390375304</li>
                <li><img src={location_icon}/> Sangli </li>
            </ul>
        </div>
        <div className="contact-col">
            <form  onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name='message' rows='6' placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow}/></button>

            </form>
            <span>{result}</span>
        </div>

      
    </div>
  )
}

export default Contact
