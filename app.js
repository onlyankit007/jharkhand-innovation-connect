
const CH_KEY="jic_v4_challenges", THEME_KEY="jic_v4_theme", FONT_KEY="jic_v4_font";

const demo=[
{id:"JIC-2026-000124",title:"Village Water Quality Monitoring",category:"Water & Sanitation",district:"Ranchi",priority:"High",status:"PROTOTYPE",progress:68,university:"Jharkhand University of Technology",industry:"AquaTech Solutions",updated:"10 Sep 2026, 20:42",events:[
["SUBMITTED","Challenge submitted","08 Sep 2026 • 10:12","done"],["VALIDATION","Evidence reviewed","08 Sep 2026 • 15:20","done"],["AI ANALYSIS","Domain and expertise identified","08 Sep 2026 • 15:23","done"],["UNIVERSITY MATCHED","Best-fit institution selected","09 Sep 2026 • 11:05","done"],["TEAM FORMATION","Faculty + student team formed","09 Sep 2026 • 17:40","done"],["PROTOTYPE","Prototype development","10 Sep 2026 • 20:42","active"],["TESTING","Field testing","Pending","pending"],["PILOT","Pilot deployment","Pending","pending"],["DEPLOYMENT","Community deployment","Pending","pending"],["IMPACT VERIFIED","Impact verification","Pending","pending"]]},
{id:"JIC-2026-000119",title:"Smart Waste Collection Route",category:"Environment",district:"Dhanbad",priority:"Medium",status:"PILOT",progress:84,university:"IIT (ISM) Dhanbad",industry:"GreenRoute Labs",updated:"09 Sep 2026 • 14:20",events:[]},
{id:"JIC-2026-000111",title:"Rural Digital Learning Support",category:"Education",district:"Deoghar",priority:"High",status:"IN DEVELOPMENT",progress:52,university:"Central University of Jharkhand",industry:"EduLink Foundation",updated:"08 Sep 2026 • 13:40",events:[]},
{id:"JIC-2026-000098",title:"Smart Irrigation for Small Farms",category:"Agriculture",district:"Dumka",priority:"Medium",status:"DEPLOYED",progress:100,university:"Birsa Agriculture University",industry:"AgriSense",updated:"06 Sep 2026 • 17:10",events:[]}
];

const universities=[
["Jharkhand University of Technology","Ranchi","IoT, AI, Smart Systems, Engineering","92%"],
["IIT (ISM) Dhanbad","Dhanbad","AI, Data, Environment, Mining Technology","89%"],
["NIT Jamshedpur","Jamshedpur","Automation, Electronics, Engineering","87%"],
["Birsa Agriculture University","Ranchi","Agriculture, Water, Rural Technology","86%"],
["Ranchi University","Ranchi","Science, Community Research, Social Sciences","82%"],
["Central University of Jharkhand","Ranchi","Multidisciplinary Research, Science, Social Sciences","80%"],
["IIIT Ranchi","Ranchi","AI, ML, Software, Data Science","84%"],
["Dr. Shyama Prasad Mukherjee University","Ranchi","Technology, Science, Management","78%"],
["Jamshedpur Women's University","Jamshedpur","Science, Education, Community Innovation","76%"]
];

function esc(v){return String(v??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function load(){try{const x=JSON.parse(localStorage.getItem(CH_KEY));return Array.isArray(x)&&x.length?x:structuredClone(demo)}catch{return structuredClone(demo)}}
function save(){localStorage.setItem(CH_KEY,JSON.stringify(challenges))}
let challenges=load();

function prefs(){document.documentElement.dataset.theme=localStorage.getItem(THEME_KEY)||"light";document.documentElement.style.setProperty("--scale",localStorage.getItem(FONT_KEY)||"1")}
prefs();

function toast(title,msg=""){const r=document.getElementById("toast-root");r.innerHTML=`<div class="toast"><strong>${esc(title)}</strong>${msg?`<small>${esc(msg)}</small>`:""}</div>`;setTimeout(()=>r.innerHTML="",3200)}

function shell(content){
document.getElementById("app").innerHTML=`
<header class="topbar">
<div class="brand"><img class="brand-logo" src="logo.png" alt="Jharkhand Innovation Connect logo"></div>
<nav class="nav" aria-label="Main navigation">
<button class="nav-btn" onclick="home()">Home</button><button class="nav-btn" onclick="submitPage()">Submit</button><button class="nav-btn" onclick="trackPage()">Track</button><button class="nav-btn" onclick="universitiesPage()">Universities</button><button class="nav-btn" onclick="explore()">Explore</button>
<button class="icon-btn" aria-label="Accessibility settings" onclick="toggleSettings()">A</button><button class="primary" onclick="login()">Login / Register</button>
</nav></header>${content}<footer class="footer"><div class="container"><b>Jharkhand Innovation Connect</b><br><small>A transparent ecosystem for community challenges, university innovation and industry collaboration.</small></div></footer>`}

function home(){
shell(`<main id="main">
<section class="hero"><div class="container hero-grid"><div>
<span class="pill">SIH26043 • SMART EDUCATION • SOFTWARE</span>
<h1>Ideas are powerful.<br><span>Impact is better.</span></h1>
<p class="hero-copy">Raise a real community challenge, discover the right expertise, collaborate with universities and industry, and track progress all the way to verified impact.</p>
<div class="hero-actions"><button class="primary" onclick="submitPage()">＋ Submit a Challenge</button><button class="secondary" onclick="trackPage()">Track a Challenge</button><button class="ghost" onclick="universitiesPage()">Find Expertise →</button></div>
<div class="trust-row"><span>✓ Transparent tracking</span><span>✓ Role-based portals</span><span>✓ Evidence-led milestones</span></div>
</div>
<div class="hero-dashboard"><div class="hero-window"><div class="window-head"><div class="window-dots"><i></i><i></i><i></i></div><span class="window-label">LIVE PROJECT WORKSPACE</span></div>
<div class="hero-kpis"><div class="hero-kpi"><b>1,247</b><small>Challenges</small></div><div class="hero-kpi"><b>267</b><small>Solutions</small></div><div class="hero-kpi"><b>51</b><small>Deployed</small></div></div>
<div class="hero-activity">
<div class="activity-line"><div class="activity-icon">✓</div><div><b>University matched</b><small>JIC-2026-000124 • 92% fit</small></div></div>
<div class="activity-line"><div class="activity-icon">↗</div><div><b>Prototype milestone updated</b><small>Progress moved to 68%</small></div></div>
<div class="activity-line"><div class="activity-icon">◎</div><div><b>Industry partner added</b><small>AquaTech Solutions</small></div></div>
</div></div></div></div></section>

<div class="container stat-wrap"><div class="stats">
<div class="stat"><strong>1,247</strong><span>Challenges submitted</span><div class="up">↑ 12.4% this month</div></div>
<div class="stat"><strong>932</strong><span>Validated challenges</span><div class="up">↑ 8.1% this month</div></div>
<div class="stat"><strong>267</strong><span>Solutions developed</span><div class="up">↑ 14.7% this month</div></div>
<div class="stat"><strong>51</strong><span>Community deployments</span><div class="up">↑ 6.2% this month</div></div>
</div></div>

<section class="section"><div class="container"><div class="section-head"><div><h2>From problem to impact</h2><p>A single, visible lifecycle for every challenge.</p></div></div>
<div class="process">${[["01","Submit","Citizen shares the problem"],["02","Analyze","AI assists classification"],["03","Match","Find right expertise"],["04","Build","University + industry"],["05","Impact","Pilot, deploy, verify"]].map(x=>`<div class="process-card"><div class="process-no">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join("")}</div></div></section>

<section class="section" style="background:var(--surface)"><div class="container"><div class="section-head"><div><h2>Impact intelligence</h2><p>Sample analytics for the prototype dashboard.</p></div><button class="secondary" onclick="governmentDashboard()">Open dashboard</button></div>
<div class="bento">
<div class="panel"><h3>Challenges received</h3><div class="panel-sub">Illustrative monthly trend</div><div class="chart">${[92,115,132,146,171,196,218,177,0].map((v,i)=>`<div class="chart-col"><span class="chart-val">${v||""}</span><div class="chart-bar" style="height:${Math.max(4,v/2.2)}px"></div><span class="chart-label">${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"][i]}</span></div>`).join("")}</div><div class="legend"><span><i style="background:var(--primary)"></i>Challenges received</span><span>Demo values</span></div></div>
<div class="panel"><h3>Domain mix</h3><div class="panel-sub">Illustrative portfolio distribution</div><div class="donut-row"><div class="donut"><div class="donut-center"><div><strong>1,247</strong><small>total challenges</small></div></div></div><div class="mini-list"><div class="mini-item"><span>Water & Sanitation</span><b>36%</b></div><div class="mini-item"><span>Environment</span><b>21%</b></div><div class="mini-item"><span>Education</span><b>19%</b></div><div class="mini-item"><span>Agriculture</span><b>13%</b></div><div class="mini-item"><span>Other</span><b>11%</b></div></div></div></div>
</div></div></section>

<section class="section"><div class="container"><div class="section-head"><div><h2>Challenges in motion</h2><p>Publicly visible progress snapshots.</p></div><button class="secondary" onclick="explore()">Explore all</button></div><div class="challenge-grid">${challenges.slice(0,3).map(card).join("")}</div></div></section>
</main>`)}

function card(c){return `<article class="card challenge-card"><div class="row"><span class="tag">${esc(c.category)}</span><span class="status ${c.progress===100?"green":c.progress>70?"orange":"blue"}">${esc(c.status)}</span></div><h3>${esc(c.title)}</h3><p>${esc(c.district)}, Jharkhand • ${esc(c.id)}</p><div class="tags"><span class="tag">Priority: ${esc(c.priority)}</span><span class="tag">${c.progress}% complete</span></div><div class="progress"><span style="width:${c.progress}%"></span></div><div style="display:flex;justify-content:space-between;margin-top:9px;font-size:.73rem"><span class="meta">Current progress</span><b>${c.progress}%</b></div><button class="secondary" style="margin-top:13px" onclick="trackSpecific('${esc(c.id)}')">Open tracker</button></article>`}

function submitPage(){
shell(`<main id="main" class="page"><div class="container"><div class="page-head"><div><span class="pill">CITIZEN PORTAL</span><h1>Submit a Challenge</h1><p>Every submission receives a unique tracking ID.</p></div></div><div class="form-shell"><div class="card form-card"><form onsubmit="submitChallenge(event)"><div class="form-grid">
<div class="field full"><label for="title">Problem title *</label><input id="title" required placeholder="e.g. Irregular drinking water supply in village"></div>
<div class="field full"><label for="desc">Problem description *</label><textarea id="desc" rows="6" required placeholder="What is happening? Who is affected? What outcome would help?"></textarea></div>
<div class="field"><label for="cat">Category</label><select id="cat">${["Water & Sanitation","Education","Agriculture","Healthcare","Environment","Smart City","Transport","Energy","Other"].map(x=>`<option>${x}</option>`).join("")}</select></div>
<div class="field"><label for="district">District</label><select id="district">${["Ranchi","Dhanbad","Jamshedpur","Deoghar","Dumka","Palamu","Hazaribagh","Bokaro","Giridih","Other"].map(x=>`<option>${x}</option>`).join("")}</select></div>
<div class="field"><label for="priority">Priority</label><select id="priority"><option>Medium</option><option>High</option><option>Low</option></select></div>
<div class="field"><label for="location">Location / landmark</label><input id="location" placeholder="Optional"></div>
<div class="field full"><label for="evidence">Photo / video / document</label><input id="evidence" type="file" accept="image/*,video/*,.pdf"></div>
</div><div class="notice"><b>What happens next?</b> Your challenge is registered → reviewed → analyzed → matched with suitable expertise → tracked through project milestones.</div><button class="primary" type="submit">Submit Challenge →</button></form></div></div></div></main>`)}

function submitChallenge(e){
e.preventDefault();
const id="JIC-"+new Date().getFullYear()+"-"+String(Math.floor(100000+Math.random()*899999));
const c={id,title:document.getElementById("title").value.trim(),description:document.getElementById("desc").value.trim(),category:document.getElementById("cat").value,district:document.getElementById("district").value,priority:document.getElementById("priority").value,status:"SUBMITTED",progress:0,university:"Pending AI matching",industry:"Not assigned",updated:new Date().toLocaleString("en-IN"),events:[
["SUBMITTED","Challenge submitted successfully","Just now","done"],["VALIDATION","Awaiting review","Pending","pending"],["AI ANALYSIS","AI categorization and matching","Pending","pending"],["UNIVERSITY MATCHED","Suitable institution","Pending","pending"],["TEAM FORMATION","Student + faculty team","Pending","pending"],["PROTOTYPE","Prototype development","Pending","pending"],["TESTING","Testing","Pending","pending"],["PILOT","Pilot","Pending","pending"],["DEPLOYMENT","Deployment","Pending","pending"],["IMPACT VERIFIED","Impact verification","Pending","pending"]]};
challenges.unshift(c);save();toast("Challenge submitted",id);
document.getElementById("app").innerHTML=`<main id="main" class="page"><div class="container"><div class="card" style="max-width:740px;margin:50px auto;text-align:center;padding:55px 30px"><div style="font-size:55px;color:var(--green)">✓</div><h1>Challenge submitted</h1><p class="meta">Your unique tracking ID</p><div class="id">${id}</div><p>Keep this ID safe to follow every milestone.</p><div class="hero-actions" style="justify-content:center"><button class="primary" onclick="trackSpecific('${id}')">Track now</button><button class="secondary" onclick="home()">Back home</button></div></div></div></main>`}

function trackPage(){shell(`<main id="main" class="page"><div class="container"><div class="page-head"><div><span class="pill">TRACKING</span><h1>Track your challenge</h1><p>Use the Challenge ID generated after submission.</p></div></div><div class="track-box"><input id="trackid" class="track-input" placeholder="JIC-2026-000124" aria-label="Challenge ID"><button class="primary" onclick="trackSpecific(document.getElementById('trackid').value.trim())">Track status</button></div><div class="card" style="width:min(770px,100%);margin:auto"><b>Demo ID:</b> JIC-2026-000124</div></div></main>`)}

function trackSpecific(id){
const c=challenges.find(x=>x.id===id);if(!c){toast("Challenge not found","Please check the Challenge ID.");return}
shell(`<main id="main" class="page"><div class="container"><div class="page-head"><div><span class="pill">LIVE PROJECT TRACKER</span><h1>${esc(c.id)}</h1><p>${esc(c.title)} • ${esc(c.district)}, Jharkhand</p></div><span class="status ${c.progress===100?"green":"orange"}">${esc(c.status)}</span></div><div class="tracker">
<section class="card tracker-card"><div class="tracker-title-row"><div><div class="meta">Current stage</div><h2>${esc(c.status)}</h2></div><strong style="font-size:1.65rem">${c.progress}%</strong></div><div class="progress progress-big"><span style="width:${c.progress}%"></span></div><div class="meta">Overall milestone completion</div><div class="timeline">${(c.events||[]).map(e=>`<div class="event ${e[3]}"><div class="dot">${e[3]==="done"?"✓":e[3]==="active"?"•":"○"}</div><div><h4>${esc(e[0])}</h4><p>${esc(e[1])} • ${esc(e[2])}</p></div></div>`).join("")}</div></section>
<aside><div class="card"><div class="meta">Matched university</div><h3>${esc(c.university)}</h3><hr style="border:0;border-top:1px solid var(--border);margin:17px 0"><div class="meta">Industry partner</div><h3>${esc(c.industry)}</h3><hr style="border:0;border-top:1px solid var(--border);margin:17px 0"><div class="meta">Last updated</div><b>${esc(c.updated)}</b></div><div class="card" style="margin-top:16px"><h3>Evidence & transparency</h3><p class="meta">Production milestones can include owner, timestamp, evidence and verification state.</p></div></aside></div></div></main>`)}

function explore(){shell(`<main id="main" class="page"><div class="container"><div class="page-head"><div><span class="pill">PUBLIC CHALLENGES</span><h1>Explore challenges</h1><p>Browse visible work by stage and domain.</p></div><button class="primary" onclick="submitPage()">＋ Submit</button></div><div class="challenge-grid">${challenges.map(card).join("")}</div></div></main>`)}

function universitiesPage(){shell(`<main id="main" class="page"><div class="container"><div class="page-head"><div><span class="pill">EXPERTISE MATCHING</span><h1>Find the right university</h1><p>Search research strengths and technology areas.</p></div></div><div class="search"><input id="usearch" oninput="filterUni()" placeholder="Search AI, water, agriculture, IoT..." aria-label="Search universities"></div><div id="unilist" class="uni-grid">${universities.map(uCard).join("")}</div></div></main>`)}
function uCard(u){return `<article class="card"><div class="row"><span class="status green">${u[3]} MATCH</span><span class="score">PROFILE READY</span></div><h3>${esc(u[0])}</h3><p class="meta">${esc(u[1])}, Jharkhand</p><div class="tags">${u[2].split(", ").map(x=>`<span class="tag">${esc(x)}</span>`).join("")}</div><button class="secondary" onclick="toast('Institution selected','${esc(u[0])}')">View profile</button></article>`}
function filterUni(){const q=document.getElementById("usearch").value.toLowerCase();const out=universities.filter(u=>u.join(" ").toLowerCase().includes(q)).map(uCard).join("");document.getElementById("unilist").innerHTML=out||`<div class="card empty">No matching institution found.</div>`}

function login(){document.body.insertAdjacentHTML("beforeend",`<div class="modal" id="loginModal" role="dialog" aria-modal="true" aria-label="Choose portal"><div class="modal-card"><button class="modal-close" onclick="closeLogin()">×</button><span class="pill">PORTAL ACCESS</span><h2>Choose your portal</h2><p class="meta">Every role gets its own permissions and workspace.</p><div class="role-grid">
<button class="role-card" onclick="portal('Citizen')">👤 <b>Citizen</b><div class="meta">Submit & track challenges</div></button>
<button class="role-card" onclick="portal('University')">🎓 <b>University</b><div class="meta">Solve & manage projects</div></button>
<button class="role-card" onclick="portal('Industry')">🏢 <b>Industry</b><div class="meta">Partner & support</div></button>
<button class="role-card" onclick="portal('Government')">🏛️ <b>Government</b><div class="meta">Monitor & verify impact</div></button>
</div></div></div>`)}
function closeLogin(){document.getElementById("loginModal")?.remove()}
function portal(role){
closeLogin();if(role==="Citizen"){submitPage();return}
const stats={University:["24","11","38","Assigned challenges"],Industry:["18","7","29","Active partnerships"],Government:["1,247","418","51","Total challenges"]}[role];
shell(`<main id="main" class="side-layout"><aside class="sidebar"><div class="sidebar-head"><b>${role} Portal</b><br><small>Innovation workspace</small></div><button class="side-btn active">▣ Overview</button><button class="side-btn">◫ Challenges</button><button class="side-btn">◈ Projects</button><button class="side-btn">◎ Analytics</button><button class="side-btn">🔔 Notifications</button><button class="side-btn">⚙ Profile</button></aside><section class="dashboard"><div class="page-head"><div><span class="pill">${role.toUpperCase()} PORTAL</span><h1>${role} dashboard</h1><p>Monitor activity, progress and outcomes.</p></div></div><div class="kpi-grid"><div class="stat"><strong>${stats[0]}</strong><span>${stats[3]}</span></div><div class="stat"><strong>${stats[1]}</strong><span>Active projects</span></div><div class="stat"><strong>${stats[2]}</strong><span>Completed outcomes</span></div><div class="stat"><strong>LIVE</strong><span>Realtime-ready</span></div></div><div class="bento" style="margin-top:18px"><div class="panel"><h3>Project progress</h3><div class="panel-sub">Sample portfolio view</div><div class="chart">${[68,84,52,100,43].map((v,i)=>`<div class="chart-col"><span class="chart-val">${v}%</span><div class="chart-bar" style="height:${Math.max(7,v*1.7)}px"></div><span class="chart-label">${["Water","Waste","Learning","Irrigation","Transport"][i]}</span></div>`).join("")}</div></div><div class="panel"><h3>Project stages</h3><div class="panel-sub">Illustrative mix</div><div class="donut-row"><div class="donut"><div class="donut-center"><div><strong>32</strong><small>projects</small></div></div></div><div class="mini-list"><div class="mini-item"><span>Development</span><b>36%</b></div><div class="mini-item"><span>Testing</span><b>21%</b></div><div class="mini-item"><span>Pilot</span><b>19%</b></div><div class="mini-item"><span>Deployed</span><b>13%</b></div></div></div></div></div><div class="card" style="margin-top:18px"><h3>Projects requiring attention</h3><div class="table-wrap"><table class="table"><thead><tr><th>Challenge</th><th>Stage</th><th>Progress</th><th>University</th><th>Action</th></tr></thead><tbody>${challenges.map(c=>`<tr><td>${esc(c.id)}<br><b>${esc(c.title)}</b></td><td>${esc(c.status)}</td><td>${c.progress}%</td><td>${esc(c.university)}</td><td><button class="secondary" onclick="trackSpecific('${esc(c.id)}')">Open</button></td></tr>`).join("")}</tbody></table></div></div></section></main>`)}
function governmentDashboard(){portal("Government")}

function toggleSettings(){const o=document.getElementById("settingsPanel");if(o){o.remove();return}const scale=parseFloat(localStorage.getItem(FONT_KEY)||"1");document.body.insertAdjacentHTML("beforeend",`<section class="settings" id="settingsPanel" aria-label="Accessibility settings"><div style="display:flex;justify-content:space-between;align-items:center"><strong>Accessibility</strong><button class="small-btn" onclick="document.getElementById('settingsPanel').remove()">Close</button></div><div class="settings-row"><span>Dark mode</span><button class="small-btn" onclick="toggleTheme()">Toggle</button></div><div class="settings-row"><span>Text size</span><div class="font-btns"><button class="small-btn" onclick="changeFont(-.1)">A−</button><button class="small-btn" onclick="resetFont()">A</button><button class="small-btn" onclick="changeFont(.1)">A+</button></div></div><div class="settings-row"><span>Scale</span><b>${Math.round(scale*100)}%</b></div><small class="meta">Preferences are saved in this browser.</small></section>`)}
function toggleTheme(){const c=document.documentElement.dataset.theme||"light";localStorage.setItem(THEME_KEY,c==="dark"?"light":"dark");prefs();toggleSettings();toast("Theme updated")}
function changeFont(d){const c=parseFloat(localStorage.getItem(FONT_KEY)||"1");const n=Math.max(.9,Math.min(1.4,+(c+d).toFixed(1)));localStorage.setItem(FONT_KEY,String(n));prefs();toggleSettings();toast("Text size updated")}
function resetFont(){localStorage.setItem(FONT_KEY,"1");prefs();toggleSettings();toast("Text size reset")}
home();
