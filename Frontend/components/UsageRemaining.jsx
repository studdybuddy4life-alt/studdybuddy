import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function UsageRemaining({ userId }) {
  const [data, setData] = useState(null);
  useEffect(()=>{ if(!userId) return; axios.get(`${process.env.NEXT_PUBLIC_API_URL||''}/subscription-usage/today/${userId}`).then(r=>setData(r.data)).catch(()=>setData(null)); }, [userId]);
  if(!data) return <div>Loading usage...</div>;
  if(!data.isSubscriber) return <div>You are not a subscriber.</div>;
  const pct = data.dailyLimit? Math.min(100, Math.round((data.minutesUsed/data.dailyLimit)*100)) : 0;
  const warn = data.minutesRemaining <= Math.floor(0.2*data.dailyLimit);
  return (<div style={{border:'1px solid #ddd',padding:12,width:360}}><div style={{display:'flex',justifyContent:'space-between'}}><strong>Today's Usage</strong><small>{data.minutesUsed}/{data.dailyLimit} min</small></div><div style={{height:10,background:'#eee',borderRadius:6,overflow:'hidden',margin:'8px 0'}}><div style={{height:10,width: `${pct}%`, background: warn? 'orange':'green' }} /></div><div><strong>{data.minutesRemaining} min</strong> remaining • {data.sessionsToday} sessions</div>{warn && <div style={{color:'red',marginTop:8}}>⚠️ Near daily limit</div>}</div>)
}