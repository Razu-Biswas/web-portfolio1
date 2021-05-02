import React from 'react';
import './ContactUs.css'
import emailjs from 'emailjs-com';




const ContactUs = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_7lu8heh', 'template_ewtnajb', e.target, 'user_k4VrG4YWTBi0LACHHbA6P')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (

        <div class="contact">
            <div class="container">
                <div class="info">
                    <h2 style={{ textAlign: "left" }}>Contact Me</h2>
                    <p>My name is Razu. I love to study and new Technology, TypScript, ReactNative and love JavaScript & React.</p>
                    <p>
                        City Dhaka,<br />
                            Bangladesh.<br />

                    </p>
                    <p>
                        <strong>Email:</strong>razubiswas114@gmail.com<br />
                        <strong>phone:</strong>  +88 01303184861
                         </p>
                </div>
                <form class="from" onSubmit={sendEmail}>
                    <label> Name*</label>
                    <input name="name" type="text" />
                    <label> Email address*</label>
                    <input name="email" type="text" />
                    <label> Message*</label>
                    <textarea name="message"></textarea>
                    <input type="submit" value="contact ME" />
                </form>
            </div>
        </div>

    );
};

export default ContactUs;