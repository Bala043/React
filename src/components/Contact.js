
const Contact = () => {  
  return (
      <div data-testid="contact-container" className="contact-container">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="contact-card">
          <p><strong>Name:</strong> Balavignesh</p>
          <p><strong>Email:</strong> balavignesh043@gmail.com</p>
          <p><strong>Phone:</strong> +91-8870982596</p>
          <p><strong>Location:</strong> Coimbatore, Tamil Nadu</p>
          <hr/>
          <h2 className="developer-title">About the Developer</h2>
          <p className="developer-desc">
            This project was designed and developed with❤️by <strong>Balavignesh</strong>, a passionate <strong>React Developer</strong>.
            Dedicated to building real-world applications with sleek UI and blazing performance. 
          </p>
        </div>
      </div>
    );
  };
export default Contact;