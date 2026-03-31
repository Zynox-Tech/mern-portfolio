import "./services.css";
export const Services = () => {
  return (
    <>
    <section>
    <div className="services-top">
    <h1>services</h1>
    <p>
       Welcome to My Web Development Services
    </p>
  </div>
<div className="services-container">
  <div className="img-txt">
    <div className="img-box">
      <img src="./images/shopify.jpg" alt="Shopify Services" />
    </div>
    <div className="contant">
      <h3>shopify store</h3>
      <p>Create a professional Shopify store that’s easy to use and helps you sell more online.</p>
    </div>

  </div>
  <div className="description">
    <h2>shopify store</h2>
    <p>I create clean, professional, and easy-to-use Shopify stores that help you sell more products online. My designs are modern and straightforward, making it easy for your customers to find what they need. Whether you're starting a new store or updating an existing one, I can build a Shopify store that looks great and works smoothly.</p>
  </div>
  </div>
  
  <div className="services-container">
  <div className="img-txt">
    <div className="img-box">
      <img src="./images/wordpress.jpeg" alt="Wordpress Services" />
    </div>
    <div className="contant">
      <h3>WordPress Websites</h3>
      <p>Get a custom WordPress site that’s both attractive and functional, made just for you.

</p>
    </div>

  </div>
  <div className="description">
    <h2>WordPress Websites</h2>
    <p>I design and build custom WordPress websites that are both attractive and easy to use. I focus on creating clean, user-friendly designs that meet your specific needs. Whether you need a blog, a business website, or an online portfolio, I can create a WordPress site that stands out and works well</p>
  </div>
  </div>
  <div className="services-container">
  <div className="img-txt">
    <div className="img-box">
      <img src="./images/mern.jpeg" alt="MERN Services" />
    </div>
    <div className="contant">
      <h3> MERN Stack Websites</h3>
      <p>Build dynamic web apps with custom services and admin dashboards using the MERN stack.</p>
    </div>

  </div>
  <div className="description">
    <h2>MERN Stack Websites</h2>
    <p>I develop responsive and dynamic web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). I can create dynamic services and custom admin dashboards tailored to your needs. My experience with these technologies allows me to build fast, scalable websites that fit your requirements. Whether it’s a simple app or a more complex platform, I deliver solutions that work efficiently and effectively.</p>
  </div>
  </div>


    </section>
    
    </>
  )
}