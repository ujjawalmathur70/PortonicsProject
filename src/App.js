import logo from './logo.svg';
// import './App.css';
import Index from './component/Index';
import Carasol from './component/Carasol';
import Card from './component/Card';
import Card1 from './component/Card1';
import c1 from "./images/c1.webp"
import c2 from "./images/c2.webp"
import c3 from "./images/c3.webp"
import c4 from "./images/c4.webp"
import w1 from "../src/images/Wireless_Chargers.webp"
import "../src/cssfiles/index.css"
import cc1 from "./images/cc1.webp"
import cc2 from "./images/cc2.webp"
import cc3 from "./images/cc3.webp"
import cc4 from "./images/cc4.webp"
import ccc1 from "./images/ccc1.webp"
import ccc2 from "./images/ccc2.webp"
import ccc3 from "./images/ccc3.webp"
import ccc4 from "./images/ccc4.jpg"
import Hard2 from './component/Hard2';
import Card3 from './component/Card3';
import cccc1 from "./images/cccc1.webp"
import cccc2 from "./images/cccc2.webp"
import cccc3 from "./images/cccc3.webp"
import cccc4 from "./images/cccc4.webp"
import Card4 from './component/Card4';
import ccccc1 from "./images/ccccc1.webp"
import ccccc2 from "./images/ccccc2.webp"
import ccccc3 from "./images/ccccc3.webp"
import ccccc4 from "./images/ccccc4.webp"
import Card5 from './component/Card5';
import cccccc1 from "./images/cccccc1.webp"
import cccccc2 from "./images/cccccc2.webp"
import cccccc3 from "./images/cccccc3.webp"
import cccccc4 from "./images/cccccc4.webp"
import Add from './component/Add';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Index />
      <Carasol />
      <div className='container'>
        <br />
        <h3>POPULAR CATAGORIES </h3>
        <div className='h1'>
          <div>
            <Card img={c1} name="Audio" />
          </div>
          <div>
            <Card img={c2} name="Car Accessories" />
          </div>
          <div>
            <Card img={c3} name="Phone Accessories" />
          </div>
          <div>
            <Card img={c4} name="Computer Accessories" />
          </div>
        </div>
        {/* <img src={w1} alt="" /> */}
      </div><br /><br />
      <img style={{ width: '100%' }} src={w1} alt="" />
      <div className='container'>
        <br />
        <h3>NEW LAUNCHES</h3>

        <div className='h1'>

          <div>
            <Card1 img={cc1} s="Headphone  technology"  name=" DASH 10" sub="Dual wireless karaoke mic" mrp="₹500" delmrp="₹800" />
          </div>
          <div>
            <Card1 img={cc2} s="touch pad" name=" MPORT 30 PLUS" sub="micro sd & card" mrp="₹400" delmrp="₹750" />
          </div>
          <div>
            <Card1 img={cc3} s="wireless speaker dual " name=" MUFFS M4" sub="40mm dynamic driver" mrp="₹700" delmrp="₹1250"  />
          </div>
          <div>
            <Card1 img={cc4} s="micro sd card connector" name=" RUFFPAD 22" sub="mono color lcd" mrp="₹900"  delmrp="₹1450" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className='container'>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <hr />
        <h3>AUDIO</h3>

        <div className='h1'>

          <div>
            <Hard2 img={ccc1} s="Bass boost technology" name=" HARMONY" sub="bass bost trechnolagy " mrp="₹500" delmrp="₹800"/>
          </div>
          <div>
            <Hard2 img={ccc2} s="Harmonic speekar" name=" HARMONICS TWINS S5" sub="15 hours play time" mrp="₹400" delmrp="₹750"/>
          </div>
          <div>
            <Hard2 img={ccc3} s="Dual bass airbirds" name=" DECIVEL 20" sub="5 hours play time" mrp="₹700" delmrp="₹1120"/>
          </div>
          <div>
            <Hard2 img={ccc4} s="Full Automatic Radio" name=" MUFFS M22" sub="40 hour play time" mrp="₹900" delmrp="₹1200" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className='container'>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <hr />
        <h3>COMPUTER ACCESSORIES</h3>

        <div className='h1'>

          <div>
            <Card3 img={cccc1} s="Green and white keyboard" name=" BUBBLE SQUARE" sub="2.4GHz &bluooth " mrp="₹500" delmrp="₹800" />
          </div>
          <div>
            <Card3 img={cccc2} s="Projector wireless" name=" PICO 12" sub="Smartdlp Projector" mrp="₹400" delmrp="₹750" />
          </div>
          <div>
            <Card3 img={cccc3} s="Multi connector  " name=" MPORT 13C" sub="HDMI ethernet" mrp="₹700" delmrp="₹1250"  />
          </div>
          <div>
            <Card3 img={cccc4} s="black and red keyboard" name=" KEY5 COMBO" sub="2.4Ghz wireless" mrp="₹900" delmrp="₹1400" />
          </div>
        </div>
        {/* <img style={{ width: '100%' }} src={w1} alt="" /> */}
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      {/*  */}
      <img style={{ width: '100%' }} src={w1} alt="" />
      <div className='container'>
    <br /><br />

        <hr />
        <h3>CAR ACCESSORIES</h3>

        <div className='h1'>

          <div>
            <Card4 img={ccccc1} s="5.3 Multy colour lighting" name=" AUTO TUNE" sub="bluooth  5.3 multy colour lighting" mrp="₹500" delmrp="₹720" />
          </div>
          <div>
            <Card4 img={ccccc2} s="Multy function button" name=" AUTO 21" sub="bluthooth5.3  multy function button" mrp="₹400" delmrp="₹699" />
          </div>
          <div>
            <Card4 img={ccccc3} s="Typec Cable Double portable" name=" CAR POWER 65" sub="100w typec cable double portable" mrp="₹700" delmrp="₹1111" />
          </div>
          <div>
            <Card4 img={ccccc4} s="Display Powerful motor" name=" BAYU LITE" sub="digital display powerful motor" mrp="₹900" delmrp="₹1230" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className='container'>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /> 

        <hr />
        <h3>MOBILE ACCESSORIES</h3>

        <div className='h1'>

          <div>
            <Card5 img={cccccc1} s="Wireless charger" name=" AUTO TUNE" sub="bluooth  5.3 multy colour lighting" mrp="₹500" delmrp="₹700" />
          </div>
          <div>
            <Card5 img={cccccc2} s="Wireless charger multi" name=" AUTO 21" sub="bluthooth5.3  multy function button" mrp="₹400" delmrp="₹750" />
          </div>
          <div>
            <Card5 img={cccccc3} s="Double portable" name=" CAR POWER 65" sub="100w typec cable double portable" mrp="₹700" delmrp="₹859" />
          </div>
          <div>
            <Card5 img={cccccc4} s="Typec cable double portable" name=" BAYU LITE" sub="digital display powerful motor" mrp="₹900" delmrp="₹1300" />
          </div>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Add/>

<Footer/>
    </div>
  );
}

export default App;
