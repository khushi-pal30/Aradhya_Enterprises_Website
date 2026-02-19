import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <h6 className="mb-3">About Us</h6>
            <p className="mb-0">
             Aradhya Enterprises is a trusted wholesaler of kitchenware and hotel setup products, offering a wide range of high-quality items at the best prices. We are committed to delivering durable, reliable, and cost-effective solutions that meet the daily needs of hotels, restaurants, and commercial kitchens.
            </p>
          </div>
          <div className="col-md-3">
          <h6 className="mb-3">Visit Us</h6>
          <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i>Shop No. C/16G, Ganpati Mandir, Industrial Area Kanchpada Malad(W),Mumbai-400064</p>
          <p className="mb-1"><a href="https://www.google.com/maps?q=Shop+No.+C/16G,+Ganpati+Mandir,+Industrial+Area+Kanchpada+Malad(W),Mumbai-400064" target="_blank" rel="noopener noreferrer">Get Directions</a></p>

          </div>
          <div className="col-md-3">
          <h6 className="mb-3">Contact Us</h6>
          <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i>8898351605,7045708815</p>
          <p className="mb-0"><i className="bi bi-envelope-fill me-2"></i>anilpal8898@gmail.com</p>
          </div>

          
            
            
          

        </div>
      </div>
      <p><center>© {new Date().getFullYear()} Aradhya Enterprises. All Rights Reserved.</center></p>
      
    </footer>
  );
}

export default Footer;


