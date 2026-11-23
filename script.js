"use strict";
const projectDetails = {
  loyalty:{
    eyebrow:"CAPILLARY TECHNOLOGIES · ENTERPRISE SAAS",
    title:"Making complex configuration feel simple.",
    lead:"How do you make powerful loyalty tooling approachable without taking away the flexibility teams depend on? A look at simplifying subscription and tier-configuration journeys.",
    tags:["Product design","Enterprise UX","Configuration","Interaction patterns"],
    challenge:"Enterprise loyalty platforms need to serve many use cases, from enrolling customers to configuring benefits, thresholds and tiers. When every option competes for attention, people can lose their sense of progress and the consequences of their decisions.",
    approach:"I explored how information could be grouped around the decisions users actually make: understanding the setting, choosing an option, and reviewing the result. My work included step-based journeys, field naming, supporting microcopy and reviewing how program-level and organisation-level settings should be differentiated.",
    solution:"The design direction favors progressive disclosure, predictable form patterns and clear review states. Related settings sit together, advanced metadata becomes available when needed, and important choices can be reviewed in plain language before completion.",
    learning:"Designing for power users isn't about making fewer capabilities available. It's about giving each capability the right place, vocabulary, and moment."
  },
  referrals:{
    eyebrow:"CAPILLARY TECHNOLOGIES · GROWTH EXPERIENCES",
    title:"Better journeys, shared with others.",
    lead:"Exploring a clear, configurable creation journey for referral programs, from code setup to a confident final review.",
    tags:["Workflow design","Referrals","Design exploration","B2B SaaS"],
    challenge:"Referral tools can combine many interdependent options, including code formats, eligibility and extra metadata. Without good hierarchy, a setup flow can feel like a long checklist rather than a guided journey.",
    approach:"I worked through the creation sequence, identifying what should be editable, what should be read-only and what needs explanation. Particular attention went to code customization, useful defaults, review steps, and confirmation moments.",
    solution:"The proposed flow makes the journey legible through smaller steps, contextual helper text and a clear summary before saving. The intent is to reduce ambiguity without hiding the power of advanced configurations.",
    learning:"A good setup flow doesn't just collect values. It helps people understand what their choices mean."
  },
  claimx:{
    eyebrow:"ONSURITY · HEALTHTECH OPERATIONS",
    title:"One workspace. Many moving parts.",
    lead:"Claim X — an internal insurance claims workspace designed around coordination, information clarity and operational handoffs.",
    tags:["Internal tools","Healthcare","CRM","Workflow mapping"],
    challenge:"Claims work moves across different roles and review stages. Fragmented information, manual checks and unclear handoffs can make it harder for teams to know what has happened and what needs attention next.",
    approach:"I examined the lifecycle of a claim and the needs of the teams involved, looking at entry points, verification stages, status visibility and information organization. The work balanced business requirements with the need for easy-to-scan screens.",
    solution:"The resulting design direction focused on consistent navigation, structured claim information and clearer status changes across intake, medical review and audit. A cohesive visual language helped connect different parts of the experience.",
    learning:"In operational software, clarity isn't decoration. It is what lets multiple people work from the same understanding."
  },
  claimform:{
    eyebrow:"ONSURITY · CUSTOMER EXPERIENCE",
    title:"Less paperwork. More peace of mind.",
    lead:"Rethinking how people submit insurance claims with a more supportive, step-by-step journey.",
    tags:["Form UX","Healthcare","Journey mapping","User experience"],
    challenge:"Insurance claim forms ask for a lot of important information at an inconvenient moment. The challenge was to make submission more understandable and approachable while retaining necessary accuracy.",
    approach:"The exploration began with research into common frustrations, patterns from comparable experiences, and alternative flow concepts. I mapped a guided, multi-step path and considered a more radical simplification, weighing usability against technical feasibility.",
    solution:"The direction prioritized smaller, logical stages, clearer field labels, document upload guidance and visible progress. It aimed to make each next action understandable rather than overwhelm users with an entire claim at once.",
    learning:"Constraints matter. The strongest experience is often the one that pairs meaningful simplification with a realistic implementation path."
  },
  invoice:{
    eyebrow:"ONSURITY · INFORMATION DESIGN",
    title:"Invoices that explain themselves.",
    lead:"A clearer invoice for a more confident billing experience, designed around understanding the amount due and how it was calculated.",
    tags:["Information hierarchy","Billing UX","Visual design","Healthtech"],
    challenge:"Invoices could include complicated calculations across billing periods. Customers had to spend time figuring out what they owed and why, while internal teams were repeating explanations.",
    approach:"I spoke with internal stakeholders to understand how plans were sold and how billing was explained. I paid attention to the questions customers asked when they first saw their invoice and where the content hierarchy created friction.",
    solution:"The redesign direction brought the total due to the foreground, clarified component calculations, and gave the payment action a more obvious place. Supporting information was organized to answer common questions in context.",
    learning:"A well-designed financial document can be both a transaction record and a conversation that answers questions before they're asked."
  },
  system:{
    eyebrow:"PERSONAL EXPLORATION · DESIGN FOUNDATIONS",
    title:"Building blocks for better products.",
    lead:"An exploration of reusable design foundations that support clarity and consistency as interfaces grow.",
    tags:["Design systems","Components","Accessibility","Scalability"],
    challenge:"When screens evolve independently, inconsistencies in buttons, inputs, typography and states accumulate. Those differences add design and engineering work and can make experiences harder to learn.",
    approach:"I explored the foundations of a component library: type scales, color roles, input patterns, buttons, selection controls and interaction states. The focus was on reusability and an understandable structure for growth.",
    solution:"The proposed approach documents foundations, defines purposeful variants and treats accessibility, feedback states and responsive behavior as properties of the components themselves.",
    learning:"A design system is not a collection of polished screens. It's a shared set of decisions that gives future design work a stronger starting point."
  }
};
const $=(s,root=document)=>root.querySelector(s);
const $$=(s,root=document)=>Array.from(root.querySelectorAll(s));
const toastEl=$("#toast");
let toastTimer;
function toast(message){if(!toastEl)return;toastEl.textContent=message;toastEl.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toastEl.classList.remove("show"),2600)}
const navLinks=$("#navLinks"), menuToggle=$("#menuToggle");
menuToggle?.addEventListener("click",()=>{
 const isOpen=navLinks.classList.toggle("is-open");
 menuToggle.setAttribute("aria-expanded",String(isOpen));
 menuToggle.setAttribute("aria-label",isOpen?"Close menu":"Open menu");
});
$$(".nav-links a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("is-open");menuToggle?.setAttribute("aria-expanded","false")}));
const themeToggle=$("#themeToggle"),root=document.documentElement;
let theme="light";try{const stored=localStorage.getItem("sarath-portfolio-theme");if(stored==="dark")theme="dark"}catch(e){}
function setTheme(next){theme=next;root.dataset.theme=theme;$("#themeIcon").textContent=theme==="dark"?"☀":"☾";themeToggle?.setAttribute("aria-label",theme==="dark"?"Switch to light theme":"Switch to dark theme");document.querySelector('meta[name="theme-color"]')?.setAttribute("content",theme==="dark"?"#181b19":"#f6f4ef");try{localStorage.setItem("sarath-portfolio-theme",theme)}catch(e){}}
setTheme(theme);themeToggle?.addEventListener("click",()=>setTheme(theme==="light"?"dark":"light"));
const progress=$("#progress");let scrollRequested=false;
function handleScroll(){const height=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(height>0?window.scrollY/height*100:0)+"%";scrollRequested=false}
window.addEventListener("scroll",()=>{if(!scrollRequested){scrollRequested=true;requestAnimationFrame(handleScroll)}},{passive:true});handleScroll();
const io=window.IntersectionObserver?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");io.unobserve(entry.target)}})},{threshold:.075,rootMargin:"0px 0px -20px 0px"}):null;
$$(".reveal").forEach(el=>{if(io)io.observe(el);else el.classList.add("visible")});
const cards=$$(".project-card"),filters=$$(".filter");
filters.forEach(btn=>btn.addEventListener("click",()=>{
 const filter=btn.dataset.filter;
 filters.forEach(b=>{const selected=b===btn;b.classList.toggle("is-active",selected);b.setAttribute("aria-pressed",String(selected))});
 cards.forEach(card=>{const show=filter==="all"||card.dataset.category===filter;card.hidden=!show;if(show){card.classList.add("visible")}});
}));
const dialog=$("#caseDialog");let lastFocused=null;
function openCase(id){
 const data=projectDetails[id];if(!data)return;
 lastFocused=document.activeElement;
 const textMap={caseEyebrow:data.eyebrow,caseTitle:data.title,caseLead:data.lead,caseChallenge:data.challenge,caseApproach:data.approach,caseSolution:data.solution,caseLearning:data.learning};
 Object.entries(textMap).forEach(([id,text])=>{const el=document.getElementById(id);if(el)el.textContent=text});
 const tags=$("#caseTags");tags.replaceChildren();data.tags.forEach(tag=>{const span=document.createElement("span");span.textContent=tag;tags.appendChild(span)});
 dialog.showModal();$(".dialog-scroll",dialog).scrollTop=0;document.body.style.overflow="hidden";
 try{history.replaceState(null,"","#project-"+id)}catch(e){}
}
function closeCase(){if(dialog.open)dialog.close();document.body.style.overflow="";if(lastFocused instanceof HTMLElement)lastFocused.focus({preventScroll:true});try{if(location.hash.startsWith("#project-"))history.replaceState(null,"",location.pathname+location.search+"#work")}catch(e){}}
cards.forEach(card=>card.addEventListener("click",()=>openCase(card.dataset.project)));
$("#closeDialog").addEventListener("click",closeCase);$("#dialogDone").addEventListener("click",closeCase);
dialog.addEventListener("click",e=>{if(e.target===dialog)closeCase()});dialog.addEventListener("close",()=>{document.body.style.overflow="";if(lastFocused instanceof HTMLElement)lastFocused.focus({preventScroll:true})});
const directProject=location.hash.startsWith("#project-")?location.hash.slice(9):null;if(directProject&&projectDetails[directProject])setTimeout(()=>openCase(directProject),150);
$("#year").textContent=String(new Date().getFullYear());
const state={step:0,name:"Gold membership",cycle:"Monthly",reward:"Points",completed:false};
const demoContent=$("#demoContent"),back=$("#demoBack"),next=$("#demoNext");
function escapeHTML(text){return String(text).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]))}
function renderDemo(){
 $$(".stepper .step").forEach((el,index)=>{el.classList.toggle("active",index===Math.min(state.step,2));el.classList.toggle("done",index<state.step);el.setAttribute("aria-current",index===state.step?"step":"false")});
 back.disabled=state.step===0&&!state.completed;back.textContent=state.completed?"← Start over":"← Back";
 next.hidden=state.completed;next.innerHTML=state.step===2?"Create preview <span>✳</span>":'Continue <span>→</span>';
 if(state.completed){
  demoContent.innerHTML='<div class="demo-complete"><div class="demo-check" aria-hidden="true">✳</div><h4>Nice work!</h4><p>Your fictional plan is ready for review. Nothing was saved — this is just a tiny taste of a simple setup experience.</p></div>';
 } else if(state.step===0){
  demoContent.innerHTML='<label class="demo-label" for="planName">Plan name</label><input id="planName" class="demo-field" type="text" maxlength="48" autocomplete="off" placeholder="e.g. Gold membership" value="'+escapeHTML(state.name)+'"><label class="demo-label" for="billingCycle">Renewal cycle</label><select id="billingCycle" class="demo-field"><option value="Monthly">Monthly</option><option value="Quarterly">Quarterly</option><option value="Annually">Annually</option></select><p class="demo-tip">Start with the essentials. You can review everything before finishing.</p>';
  $("#billingCycle").value=state.cycle;
  $("#planName").addEventListener("input",event=>state.name=event.target.value);
  $("#billingCycle").addEventListener("change",event=>state.cycle=event.target.value);
 } else if(state.step===1){
  demoContent.innerHTML='<label class="demo-label">Choose a primary reward</label><div class="demo-choice-list"><button type="button" class="demo-choice" data-reward="Points" aria-pressed="false"><strong>✦ Points</strong><small>Reward purchases</small></button><button type="button" class="demo-choice" data-reward="Benefits" aria-pressed="false"><strong>✧ Benefits</strong><small>Unlock perks</small></button></div><p class="demo-tip">A clear choice helps people understand the impact of their settings.</p>';
  $$(".demo-choice",demoContent).forEach(btn=>{const active=btn.dataset.reward===state.reward;btn.classList.toggle("selected",active);btn.setAttribute("aria-pressed",String(active));btn.addEventListener("click",()=>{state.reward=btn.dataset.reward;renderDemo()})});
 } else {
  demoContent.innerHTML='<label class="demo-label">Review your selections</label><div class="demo-review"><div class="demo-review-row"><span>Plan name</span><strong>'+escapeHTML(state.name.trim())+'</strong></div><div class="demo-review-row"><span>Renewal</span><strong>'+escapeHTML(state.cycle)+'</strong></div><div class="demo-review-row"><span>Reward type</span><strong>'+escapeHTML(state.reward)+'</strong></div></div><p class="demo-tip" style="margin-top:13px">A final review turns setup into a confident decision. This is a non-functional illustration.</p>';
 }
}
next.addEventListener("click",()=>{
 if(state.step===0){const input=$("#planName");state.name=input.value.trim();if(!state.name){input.focus();toast("Give your plan a name first");return}}
 if(state.step<2)state.step++;else state.completed=true;
 renderDemo();
});
back.addEventListener("click",()=>{if(state.completed){state.step=0;state.completed=false}else if(state.step>0)state.step--;renderDemo()});
renderDemo();
const heroVisual=$("#heroVisual");
if(window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches){
 heroVisual?.addEventListener("pointermove",e=>{
  const rect=heroVisual.getBoundingClientRect();
  const x=(e.clientX-rect.left-rect.width/2)/rect.width;
  const y=(e.clientY-rect.top-rect.height/2)/rect.height;
  heroVisual.style.setProperty("--pointer-x",(x*8)+"px");
  heroVisual.style.setProperty("--pointer-y",(y*8)+"px");
 });
 heroVisual?.addEventListener("pointerleave",()=>{heroVisual.style.setProperty("--pointer-x","0px");heroVisual.style.setProperty("--pointer-y","0px")});
}
