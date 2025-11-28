import { useEffect, useState } from 'react'
import io from 'socket.io-client'
export default function OpportunityChat({ opportunityId, userId, role }){
  const [socket,setSocket]=useState(null); const [messages,setMessages]=useState([]); const [text,setText]=useState('');
  useEffect(()=>{ const s = io(process.env.NEXT_PUBLIC_SOCKET_URL || ''); setSocket(s); s.emit('joinOpportunity',{ opportunityId, userId, role }); s.on('oppMessage', msg=>setMessages(prev=>[...prev,msg])); s.on('systemMessage', m=>setMessages(prev=>[...prev, { system:true, ...m }])); return ()=> s.disconnect(); }, [opportunityId, userId, role]);
  const send = ()=>{ if(!text) return; socket.emit('oppMessage',{ opportunityId, userId, text }); setText(''); }
  return (<div style={{border:'1px solid #ccc',padding:8}}><div style={{height:160,overflow:'auto',marginBottom:8}}>{messages.map((m,i)=>(<div key={i}>{m.system? m.message : `${m.userId}: ${m.text}`}</div>))}</div><input value={text} onChange={e=>setText(e.target.value)} style={{width:'100%',padding:8}} /><button onClick={send}>Send</button></div>)
}