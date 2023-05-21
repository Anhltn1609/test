
import '../../assets/sass/scss/Footer.scss'
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-wrapper-infor">
          <div className="title">
            <div className="logo-short"></div>
            <div className="logo-tall"></div>
            <div className="title-content ">DataWarehouse</div>
          </div>
          <p className="location">
            Warehouse Society, 234
            <br/>
            Bahagia Ave Street PRBW 29281
          </p>
          <p className="contact">
            info@warehouse.project
            <br/>
            1-232-3434 (Main)
          </p>
          <p className="more-infor">
            © Datawarehouse™, 2020. All rights reserved.
            <br/>
            Company Registration Number: 21479524.          
          </p>
        </div>
        <div className="footer-wrapper-about">
          <h1>About</h1>
          <ul>
            <li>Profile</li>
            <li>Features</li>
            <li>Careers</li>
            <li>DW news</li>
          </ul>
        </div>
        <div className="footer-wrapper-help">
          <h1>Help</h1>
          <ul>
            <li>Support</li>
            <li>Sign Up</li>
            <li>Guide</li>
            <li>Resports</li>
            <li>Q&A</li>
          </ul>
        </div>
        <div className="footer-wrapper-social">
          <h1>Social Media</h1>
            <div className="icons">
              <div className="icons-child"></div>
              <div className="icons-child"></div>
              <div className="icons-child"></div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Footer