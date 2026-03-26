

function Contact() {

  return (
    <div className="contact">
      <div className="contact-page">
        <div className="contact-hero">
          <h1>Get In Touch</h1>
          <p>Let’s work together & grow together 🚀</p>
        </div>

        <div className="contact-container">
          {/* LEFT SIDE */}
          <div className="contact-left slide-right">
            <h2>Let’s Connect 🤝</h2>
            <p>I’m open to internships, projects, and collaborations.</p>

            <div className="contact-links">
              <a href="mailto:shaiksony2006@gmail.com">
                <i className="fa-regular fa-envelope"></i>
                
              </a>

              <a href="https://www.linkedin.com/in/shaik-ghasipha-a95085386?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
                
              </a>

              <a href="https://github.com/SHAIKGHASIPHA" target="_blank">
                <i className="fa-brands fa-github"></i>
            
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right slide-left">
            <h2>Send Message</h2>
            <p>If you have any project idea, let’s collaborate 🚀</p>

            <form>
              <input type="text" placeholder="Enter Your Name" />
              <input type="email" placeholder="Enter Your Email" />
              <textarea placeholder="About Project"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          
        </div>
        <div className="ending">
          <h4><i>Thank you</i></h4>
        </div>
      </div>
    </div>
  );
}export default Contact;