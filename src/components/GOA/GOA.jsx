import '../Analytics/Analytics.css'
import goa from '../../assets/goa.svg'
const GOA = () => {
    return <div className='analytics-container'>
    <div className="featright">
        <p className="tit">get our app</p>
        <h1 className='head'>browse nfts from your smartphone</h1>
        <p className='yarnz'>Our Krypto app is the easiest way to keep track of your assets when you’re on the go.</p>
        <button className='featbtn'>Download on ios</button>
    </div>
    <img src={goa} alt="" />
  </div>;
};

export default GOA;
