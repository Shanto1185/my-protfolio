import React from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

    const sentEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_gfa6g5w', 'template_ckzausc', e.target, 'user_HPwsTo9M7XjU9noGEGd38')
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }

    return (
        <div className="container w-50 p-5" id="contact">
            <h1 className="mb-5">Contact With Me</h1>
            <form onSubmit={sentEmail}>
                <input type="text" name="name" placeholder="Your Name" className="form-control text-align-left" />
                <br />
                <input type="email" name="email" placeholder="Your Email" className="form-control" />
                <br />
                <textarea name="message" rows="4" placeholder="Type Your Message" className="form-control" />
                <br />
                <input type="submit" value="Send" className="form-control btn btn-danger" />
            </form>
        </div>
    );
};

export default Contact;