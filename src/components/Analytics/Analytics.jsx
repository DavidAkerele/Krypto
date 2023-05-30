import './Analytics.css'
import ana from '../../assets/ana.svg'

const Analytics = () => {
  return <div className='analytics-container'>
    <img src={ana} alt="" />
    <div className="featright">
        <p className="tit">Analytics</p>
        <h1 className='head'>built-in analytics to track your nfts</h1>
        <p className='yarnz'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time. </p>
        <button className='featbtn'>view our pricing</button>
    </div>
  </div>;
};

export default Analytics;
