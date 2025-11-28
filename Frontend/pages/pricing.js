import axios from 'axios'
const PRICE_PER_HOUR = 20
const GST = 0.05
const unit = PRICE_PER_HOUR * (1+GST)
export default function Pricing(){
  const ten = (10 * unit * 0.975).toFixed(2)
  const twenty = (20 * unit * 0.95).toFixed(2)
  const fifty = (50 * unit * 0.9).toFixed(2)
  const hundred = (100 * unit * 0.8).toFixed(2)
  return (
    <div style={{padding:30,fontFamily:'Arial'}}>
      <h1>Pricing</h1>
      <ul>
        <li>1 hour — ${ (1*unit).toFixed(2) } <a href="https://www.paypal.com/ncp/payment/4SUKNWKYVLMRE" target="_blank">Buy</a></li>
        <li>10 hours — ${ten} (2.5% discount) <a href="https://www.paypal.com/ncp/payment/6LLB44PPX2MV8" target="_blank">Buy</a></li>
        <li>20 hours — ${twenty} (5% discount) <a href="https://www.paypal.com/ncp/payment/VR8SQ7D78AYUC" target="_blank">Buy</a></li>
        <li>50 hours — ${fifty} (10% discount) <a href="https://www.paypal.com/ncp/payment/T8E8HNJY26QXY" target="_blank">Buy</a></li>
        <li>100 hours — ${hundred} (20% discount) <a href="https://www.paypal.com/ncp/payment/VVY6EJUDWY5ZE" target="_blank">Buy</a></li>
      </ul>
      <h2>Monthly</h2>
      <p>$499/month — Unlimited minutes (capped at 90 min/day), max 2 sessions/day. <a href="https://www.paypal.com/ncp/payment/VDFY4SEECAHDU" target="_blank">Subscribe</a></p>
    </div>
  )
}