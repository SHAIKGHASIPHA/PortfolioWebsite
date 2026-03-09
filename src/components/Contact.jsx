function Contact() {
  return (
    <div className="contact">
    <div className="contact-page">
      
      <div className="contact-tittle">
        <h2>Contact <span>Me</span></h2>
        <p>Let's Work Together,Grow Together</p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2><i className="fa-solid fa-address-card"></i> Contact Info</h2>

          <p><i className="fa-solid fa-location-dot"></i> Location:</p>
          <h4>Andhra Pradesh, India</h4>

          <p><i className="fa-regular fa-envelope"></i> Email:</p>
          <h4>shaiksony2006@gmail.com</h4>

          <p><i className="fa-solid fa-square-phone"></i> Telephone:</p>
          <h4>8498817165</h4>
           <div className="contact-section">
          <h2>Connect with me</h2>
          <div className="social-icon">
            <a href="https://www.linkedin.com">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://codechef.com">
              <i className="fa-solid fa-code"></i>
            </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        
        <div className="contact-right">
          <h2>Send Message</h2>
          <p>If you have any project idea in mind,Let's collabrate </p>
          <form>
            <input type="text" placeholder=" Enter Your Name" />
            <input type="email" placeholder=" Enter Your Email" />
            <textarea placeholder="About Project"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      


   </div>
  </div>
</div>
  );
}

export default Contact;