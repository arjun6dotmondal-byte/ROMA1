const chat=document.getElementById('chat');
function addBubble(text,kind){const el=document.createElement('div');el.className='bubble '+kind;el.textContent=text;chat.appendChild(el);chat.scrollTop=chat.scrollHeight}
document.getElementById('chatForm').addEventListener('submit',e=>{e.preventDefault();const input=document.getElementById('message');const value=input.value.trim();if(!value)return;addBubble(value,'user');addBubble('Your message is shown in this starter app, but the AI service is not connected yet. We will connect it in the next setup step.','bot');input.value=''});
document.querySelectorAll('[data-prompt]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('message').value=b.dataset.prompt;document.getElementById('message').focus()}));
const note=document.getElementById('note');note.value=localStorage.getItem('roma_note')||'';
document.getElementById('saveNote').addEventListener('click',()=>{localStorage.setItem('roma_note',note.value);document.getElementById('saved').textContent='Note saved on this device.'});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}))}
