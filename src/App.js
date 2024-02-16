import './App.css';

function App() {
  return (
    <div className="App">
      <div class="topnav">
        <a className='smallHeader'>Brainwave.io</a>
        <div class="topnav-right">
          <a>Demos</a>
          <a>Pages</a>
          <a>Support</a>
          <a>Contact</a>
          <a>|</a>
          <button>Sign In</button>
        </div>
      </div>
      <div className='mainSection'>
        <h1>Pricing & Plans</h1>
        <p>With lots of unique blocks, you can easily build a page 
          without coding.<br /> Build your next consultancy website 
          within few minutes. <br /> <br /> <br />
          <a className='monthlyText'>Montly<button className='monthlyButton'></button></a>
          <a>Yearly <button className='yearlyButton'>Save 25%</button></a>
        </p>
        <div className='cost'>
          <div className='costBoxes'>
            <h2>Starter</h2>
            <p className='money'>$19 / month</p>
            <p>billed monthly</p>
            <ul>
              <li><a>Commercial Lie</a></li>
              <li><a>100+ HTML UL B</a></li>
              <li><a>01 Domain Sup</a></li>
              <li><a>6 Month Premium</a></li>
              <li><a>Lifetime Update</a></li>
            </ul>
            <button className='leftButton'>Start Free Trail <i className="arrow right"></i></button>
            <p>No credit card required</p>
          </div>
        <div className='costBoxes'>
          <h2>Standard</h2>
          <p className='money'>$49 / month</p>
          <p>billed monthly</p>
          <ul>
            <li><a>Commercial Lie</a></li>
            <li><a>100+ HTML UL B</a></li>
            <li><a>01 Domain Sup</a></li>
            <li><a>6 Month Premium</a></li>
            <li><a>Lifetime Update</a></li>
          </ul>
          <button className='middleButton'>Start Free Trail <i class="arrow right"></i></button>
          <p>No credit card required</p>
        </div>
        <div className='costBoxes'>
          <h2>Premium</h2>
          <p className='money'>$99 / month</p>
          <p>billed monthly</p>
          <ul>
            <li><a>Commercial Lie</a></li>
            <li><a>100+ HTML UL B</a></li>
            <li><a>01 Domain Sup</a></li>
            <li><a>6 Month Premium</a></li>
            <li><a>Lifetime Update</a></li>
          </ul>
          <button className='rightButton'>Start Free Trail <i class="arrow right"></i></button>
          <p>No credit card required</p>
        </div>
      </div>
      </div>
      <h3>Check our features</h3>
        <p>
          With lots of unique blocks, you can easily build a page without coding. 
          <br/> Build your next consultancy website within few minutes.
        </p>
      <div className='bottomBox'>
        <div>
          <h5>Quick Step Process</h5>
          <p>With lots of unique blocks, you can <br /> easily build a page without coding. <br /> Build your next landing page.</p>
        </div>
        <div>
          <h5>Create custom orders</h5>
          <p>With lots of unique blocks, you can <br /> easily build a page without coding. <br /> Build your next landing page.</p>
        </div>
        <div>
          <h5>Multiple coupons</h5>
          <p>With lots of unique blocks, you can <br /> easily build a page without coding. <br /> Build your next landing page.</p>
        </div>
        <div>
          <h5>Organize your campaigns</h5>
          <p>With lots of unique blocks, you can <br /> easily build a page without coding. <br /> Build your next landing page.</p>
        </div>
        <div>
          <h5>Manage customers</h5>
          <p>With lots of unique blocks, you can <br /> easily build a page without coding. <br /> Build your next landing page.</p>
        </div>
        <div>
          <h5>Track progress fast</h5>
          <p>With lots of unique blocks, you <br /> can easily build a page without coding. <br /> Build your next landing page.</p>
        </div>
      </div>
      <div className='footer'>
        <ul className='bottomList'>
          <h4>Company</h4>
          <li><a>About Us</a></li>
          <li><a>Contact Us</a></li>
          <li><a>Careers</a></li>
          <li><a>Press</a></li>
        </ul>

        <ul className='bottomList'>
          <h4>Product</h4>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>News</a></li>
          <li><a>Help Desk</a></li>
          <li><a>Support</a></li>
        </ul>

        <ul className='bottomList'>
          <h4>Services</h4>
          <li><a>Digital Marketing</a></li>
          <li><a>Content Writing</a></li>
          <li><a>SEO for Business</a></li>
          <li><a>UI Design</a></li>
        </ul>

        <ul className='bottomList'>
          <h4>Legal</h4>
          <li><a>Privacy Policy</a></li>
          <li><a>Terms & Conditions</a></li>
          <li><a>Return Policy</a></li>
        </ul>

        <ul className='bottomList'>
          <h4>Contact Us</h4>
          <li><a>support@brainwave.io</a></li>
          <li><a>+133-394-3439-1435</a></li>
        </ul>

        <div className='separator'>
          <p>2024 Copyright, All Right Reserved, Made by Seju_ui_ux with</p>
          <div className='socialMediaIcons'>
            <a class="fa fa-twitter"></a>
            <a class="fa fa-facebook"></a>
            <a class="fa fa-instagram"></a>
            <a class="fa fa-linkedin"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
