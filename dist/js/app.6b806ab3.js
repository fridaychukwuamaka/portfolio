(()=>{"use strict";var e={861:(e,i,t)=>{var a=t(963),n=t(201),o=t(252),l=t(577);const r={key:0},s={key:0,id:"others"},d={id:"not-mobile"},c={id:"mobile"},p={id:"page"},u={id:"work"},m={id:"experience"},g={id:"contact"},h={id:"menu"},f=(0,o._)("p",null,"Home",-1),v=(0,o._)("p",null,"About",-1),w=(0,o._)("p",null,"My projects",-1),k=(0,o._)("p",null,"Experience",-1),b={id:"download-cv"},_={id:"side-bar"},y={id:"to-top"},A={href:"#mobile"};function C(e,i,t,n,C,D){const x=(0,o.up)("SplashScreen"),I=(0,o.up)("HeaderSection"),F=(0,o.up)("router-view"),W=(0,o.up)("HomePage"),S=(0,o.up)("AboutPage"),H=(0,o.up)("WorkPage"),M=(0,o.up)("ExperiencePage"),L=(0,o.up)("ContactPage"),j=(0,o.up)("router-link"),E=(0,o.up)("SideBar"),P=(0,o.up)("vue-feather");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(a.uT,{name:"fade3",appear:""},{default:(0,o.w5)((()=>[e.splashScreen?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(x)]))])),_:1}),e.splashScreen?((0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(I),(0,o._)("div",d,[(0,o.Wm)(F)]),(0,o._)("div",c,[(0,o.Wm)(W),(0,o._)("div",p,[(0,o.Wm)(S)]),(0,o._)("div",u,[(0,o.Wm)(H)]),(0,o._)("div",m,[(0,o.Wm)(M)]),(0,o._)("div",g,[(0,o.Wm)(L)])]),(0,o._)("div",h,[(0,o._)("ul",null,[(0,o.Wm)(j,{to:"/",class:"route"},{default:(0,o.w5)((()=>[(0,o._)("li",{onClick:i[0]||(i[0]=e=>D.activeLink(0))},[f,(0,o._)("div",{class:(0,l.C_)({growed:0==e.link&&"/"==e.currentRoute})},null,2)])])),_:1}),(0,o.Wm)(j,{to:"/about",class:"route"},{default:(0,o.w5)((()=>[(0,o._)("li",{onClick:i[1]||(i[1]=e=>D.activeLink(1))},[v,(0,o._)("div",{class:(0,l.C_)({growed:1==e.link||"/about"==e.currentRoute})},null,2)])])),_:1}),(0,o.Wm)(j,{to:"/work",class:"route"},{default:(0,o.w5)((()=>[(0,o._)("li",{onClick:i[2]||(i[2]=e=>D.activeLink(2))},[w,(0,o._)("div",{class:(0,l.C_)({growed:2==e.link||"/work"==e.currentRoute})},null,2)])])),_:1}),(0,o.Wm)(j,{to:"/experience",class:"route"},{default:(0,o.w5)((()=>[(0,o._)("li",{onClick:i[3]||(i[3]=e=>D.activeLink(3))},[k,(0,o._)("div",{class:(0,l.C_)({growed:3==e.link||"/experience"==e.currentRoute})},null,2)])])),_:1})]),(0,o._)("div",b,[(0,o._)("a",{onClick:i[4]||(i[4]=(...e)=>D.openPdf&&D.openPdf(...e)),download:""},"Resume")])]),(0,o._)("div",_,[(0,o.Wm)(E)]),(0,o.Wm)(a.uT,{name:"fade",appear:""},{default:(0,o.w5)((()=>[(0,o._)("div",y,[(0,o._)("a",A,[(0,o.Wm)(P,{type:"chevron-up",class:"chevron-up-icon",size:"1.5rem"})])])])),_:1})])):(0,o.kq)("",!0)])}const D=e=>((0,o.dD)("data-v-5b36eed8"),e=e(),(0,o.Cn)(),e),x={id:"cover"},I={id:"menu-open"},F={id:"none-shadow"},W={href:"#cover"},S=D((()=>(0,o._)("a",null,"Home",-1))),H={href:"#page"},M=D((()=>(0,o._)("a",null,"About",-1))),L={href:"#work"},j=D((()=>(0,o._)("a",null,"My projects",-1))),E={href:"#experience"},P=D((()=>(0,o._)("a",null,"Experience",-1))),T={href:"#contact"},B=D((()=>(0,o._)("a",null,"Contact",-1))),Z={class:"title"},G={id:"hello"},R=D((()=>(0,o._)("p",{id:"first"},"Hello,",-1))),U=D((()=>(0,o._)("p",{id:"second"},"I'm Chukwuamaka Friday",-1))),V=D((()=>(0,o._)("p",{id:"story"},"I am fullstack mobile developer",-1))),K=D((()=>(0,o._)("div",{style:{height:"75px"}},null,-1)));function z(e,i,t,n,r,s){return(0,o.wg)(),(0,o.iD)("div",x,[(0,o.Wm)(a.uT,{name:"fade"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",I,[(0,o._)("div",{onClick:i[0]||(i[0]=i=>e.menu=!e.menu),id:"shadowed"}),(0,o._)("div",F,[(0,o._)("p",{id:"back",onClick:i[1]||(i[1]=i=>e.menu=!e.menu)},"back"),(0,o._)("ul",null,[(0,o._)("a",W,[(0,o._)("li",{onClick:i[2]||(i[2]=e=>s.toggle(0))},[S,(0,o._)("div",{class:(0,l.C_)({selected:0==e.selectMenu})},null,2)])]),(0,o._)("a",H,[(0,o._)("li",{onClick:i[3]||(i[3]=e=>s.toggle(1))},[M,(0,o._)("div",{class:(0,l.C_)({selected:1==e.selectMenu})},null,2)])]),(0,o._)("a",L,[(0,o._)("li",{onClick:i[4]||(i[4]=e=>s.toggle(2))},[j,(0,o._)("div",{class:(0,l.C_)({selected:2==e.selectMenu})},null,2)])]),(0,o._)("a",E,[(0,o._)("li",{onClick:i[5]||(i[5]=e=>s.toggle(3))},[P,(0,o._)("div",{class:(0,l.C_)({selected:3==e.selectMenu})},null,2)])]),(0,o._)("a",T,[(0,o._)("li",{onClick:i[6]||(i[6]=e=>s.toggle(4))},[B,(0,o._)("div",{class:(0,l.C_)({selected:4==e.selectMenu})},null,2)])]),(0,o._)("li",{onClick:i[7]||(i[7]=(...e)=>s.openPdf&&s.openPdf(...e)),id:"download"},"Resume")])])],512),[[a.F8,e.menu]])])),_:1}),(0,o._)("div",Z,[(0,o._)("div",G,[(0,o.Wm)(a.uT,{name:"fade",appear:""},{default:(0,o.w5)((()=>[R])),_:1}),(0,o.Wm)(a.uT,{name:"slide-home-side",appear:""},{default:(0,o.w5)((()=>[U])),_:1})]),(0,o.Wm)(a.uT,{name:"slide-home-up",appear:""},{default:(0,o.w5)((()=>[V])),_:1})]),K])}const q={name:"HomePage",components:{},props:{msg:String},data:()=>({selectMenu:0,menu:!1}),methods:{toggle(e){this.selectMenu=e},openPdf(){window.open("/path/to/your/pdf/file.pdf")}}};var Y=t(744);const Q=(0,Y.Z)(q,[["render",z],["__scopeId","data-v-5b36eed8"]]),N=Q,O=t.p+"img/IMG_20200810_170143564~3.98ac39ac.jpeg",X=e=>((0,o.dD)("data-v-25245df4"),e=e(),(0,o.Cn)(),e),J={id:"page"},$=X((()=>(0,o._)("div",{id:"title"},[(0,o._)("p",null,"About"),(0,o._)("div")],-1))),ee={id:"about"},ie={id:"row"},te=X((()=>(0,o._)("div",null,[(0,o._)("p",{id:"text"},[(0,o.Uk)(" Hello, I'm "),(0,o._)("b",null,"Friday Chukwuamaka Kareen"),(0,o.Uk)(", a mobile developer residing in Nigeria. I have a passion for problem-solving, whether it involves finding the most elegant code solution or determining the perfect chord progression. I thrive on challenges and enjoy discovering innovative solutions. My forte lies in translating UI/UX designs into visible code, evident in my projects and this website. Recently, I have been working with the following: ")]),(0,o._)("p",{id:"text"}," Here are a few technologies I've been working with recently: "),(0,o._)("ul",{class:"skills-list"},[(0,o._)("li",null,"Flutter"),(0,o._)("li",null,"Firebase"),(0,o._)("li",null,"Node.js"),(0,o._)("li",null,"Vue"),(0,o._)("li",null,"MongoDB"),(0,o._)("li",null,"Arduino")])],-1))),ae=X((()=>(0,o._)("img",{id:"image",src:O,alt:"pix"},null,-1)));function ne(e,i,t,n,l,r){return(0,o.wg)(),(0,o.iD)("div",J,[$,(0,o._)("div",ee,[(0,o._)("div",ie,[(0,o.Wm)(a.uT,{name:"slide-home-up",appear:""},{default:(0,o.w5)((()=>[te])),_:1}),(0,o.Wm)(a.uT,{name:"fade3",appear:""},{default:(0,o.w5)((()=>[ae])),_:1})])])])}const oe={name:"AboutPage",components:{},props:{msg:String}},le=(0,Y.Z)(oe,[["render",ne],["__scopeId","data-v-25245df4"]]),re=le,se=e=>((0,o.dD)("data-v-47355ff8"),e=e(),(0,o.Cn)(),e),de={id:"work"},ce=se((()=>(0,o._)("div",{id:"title"},[(0,o._)("p",null,"My projects"),(0,o._)("div")],-1))),pe={id:"projects"},ue=["src"],me={id:"writings"},ge={id:"heading"},he={id:"tools"},fe={id:"subtitle"},ve={id:"links"},we=["href"],ke=se((()=>(0,o._)("p",null,"XD Link",-1))),be=[ke],_e=["href"],ye=se((()=>(0,o._)("p",null,"App Link",-1))),Ae=[ye],Ce=["href"],De=se((()=>(0,o._)("p",null,"View code",-1))),xe=[De];function Ie(e,i,t,n,r,s){return(0,o.wg)(),(0,o.iD)("div",de,[ce,(0,o.Wm)(a.uT,{name:"fade6",appear:""},{default:(0,o.w5)((()=>[(0,o._)("div",pe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.works,((e,i)=>((0,o.wg)(),(0,o.iD)("div",{id:"project",key:i},[(0,o._)("img",{src:e.img,id:"imagex",alt:""},null,8,ue),(0,o.wy)((0,o._)("div",{id:"image",style:(0,l.j5)({"background-image":"url("+e.img+")"})},null,4),[[a.F8,null!=e.img]]),(0,o._)("div",me,[(0,o._)("div",ge,(0,l.zw)(e.title),1),(0,o._)("div",he,[(0,o.Uk)(" Tools: "),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.tools,((e,i)=>((0,o.wg)(),(0,o.iD)("p",{key:i},(0,l.zw)(e),1)))),128))]),(0,o._)("div",fe,(0,l.zw)(e.detail),1),(0,o._)("div",ve,[(0,o.wy)((0,o._)("a",{rel:"noreferrer",target:"_blank",href:e.xd_link,id:"link"},be,8,we),[[a.F8,null!=e.xd_link]]),(0,o.wy)((0,o._)("a",{rel:"noreferrer",target:"_blank",href:e.appLink,id:"link"},Ae,8,_e),[[a.F8,null!=e.appLink]]),(0,o.wy)((0,o._)("a",{rel:"noreferrer",target:"_blank",href:e.code_link,id:"link"},xe,8,Ce),[[a.F8,null!=e.code_link]])])])])))),128))])])),_:1})])}const Fe={name:"WorkPage",components:{},data:()=>({works:[{title:"Yournews.ai",detail:"Yournews is a mobile application that provides users with the latest news and information on a wide range of topics. The app uses artificial intelligence to deliver personalized news content based on the user's preferences. Users can also interact with the app through voice commands, making it easy to stay informed on the go.",appLink:"https://play.google.com/store/apps/details?id=com.yournews.ai",tools:["Flutter, Riverpod, Hive, ChatGPT"]},{title:"Yourchat.ai",detail:"Yourchat is a revolutionary mobile application that seamlessly connects users with artificial intelligence, enabling engaging conversations and instant access to accurate information. Through its user-friendly interface, users can effortlessly ask questions and receive immediate responses, eliminating the need for extensive searches.",appLink:"https://play.google.com/store/apps/details?id=com.yourchat.ai",img:t(666),tools:["Flutter, Riverpod, SQLite, ChatGPT"]},{title:"Vanmates Housing",detail:"The Vanmates Housing App offers a wealth of features that will make your life easier. Firstly, you can access all the details of your booked accommodation right from the app. Whether it's the location, room details, or house information, you can find everything you need in one place. You can even download your contract details directly from the app.",appLink:"https://apps.apple.com/us/app/itunes-connect/id376771144",img:t(852),tools:["Flutter, Riverpod, Firebase, Hive, Notification"]},{title:"Deigit",detail:"Degeit is a mobile application that helps merchants to generate digital copies of receipt for every transaction made. It is specially made for merchants who sell online (Instagram, Facebook, Twitter, WhatsApp, Telegram. etc.).",appLink:"https://play.google.com/store/apps/details?id=xyz.degeit",img:t(158),tools:["Flutter, Provider"]},{title:"Daabo",detail:"Daabo provides device protection and repair services for mobile phones, laptops, tablets, and other electronic devices.",appLink:"https://play.google.com/store/apps/details?id=com.getdaabo.daabo",img:t(37),tools:["Flutter, Getx, Firebase"]},{title:"Deepend",detail:"Deepend is an all in one mobile app for anything ranging from food ordering, equipment renting, studio booking, VR Games and Hotel booking.",appLink:"https://play.google.com/store/apps/details?id=com.deepend",img:t(984),tools:["Flutter, Getx"]},{title:"Hayahg",detail:"Hayahg mobile app is a platform that connects truck drivers with freight companies. It allows drivers to find and book loads, track their earnings, and manage their schedules.",appLink:"https://play.google.com/store/apps/details?id=com.hayahg.drivers",tools:["Flutter, Getx"]},{title:"Portfolio Website",detail:"It is a portfolio website I built for myself using Vue",code_link:"https://github.com/fridaychukwuamaka/portfolio",app_link:"/",img:t(229),tools:["Vue js","Netlify"]},{title:"Smart Irrigation",detail:"It is a mobile app connected to an embedded system, it allows the user to get information about the farm and can also send commands to the embedded system built with Esp32.",code_link:"https://github.com/fridaychukwuamaka/smart_irrigation",app_link:"https://drive.google.com/file/d/18cPcgRh_2-v6IU9M-uzsSccKcpjHgCfS/view?usp=sharing",img:t(997),tools:["Flutter","Firebase","Arduino","ESP32"]},{title:"Music Player",detail:"A mobile app built with flutter that is able to plays all the songs on the local storage. User can also create and delete playlist",code_link:"https://github.com/fridaychukwuamaka/music_app_v3",app_link:"https://drive.google.com/file/d/1wc29LKxza05L8P6U-uRdmYcZ5zx5nctk/view?usp=sharing",img:t(591),xd_link:"https://xd.adobe.com/view/b4047f80-64cc-473c-8c0c-c3d67369f134-e157/",tools:["Flutter"]},{title:"BLE Scanner",detail:"It is a mobile app built with flutter that can scan low energy devices such as headphone, airpods etc. and also get their distance from the mobile phone",code_link:"https://github.com/fridaychukwuamaka/BLE-scanner",app_link:"https://drive.google.com/file/d/1-wcwSs9IuE2q2l0nwKF0xbmnk5seI_eU/view?usp=sharing",img:null,tools:["Flutter"]},{title:"Scam Story app",detail:"It is a mobile app where scam victims can share their stories and also get the latest scam news.",code_link:"https://github.com/fridaychukwuamaka/scam_stories_app",app_link:"https://drive.google.com/file/d/1DgOylHtYHYH37IIzmKj6Nh9-vgwbaYK3/view?usp=sharing",img:null,tools:["Flutter","Firebase","Getx"]}]})},We=(0,Y.Z)(Fe,[["render",Ie],["__scopeId","data-v-47355ff8"]]),Se=We,He=e=>((0,o.dD)("data-v-507e56ca"),e=e(),(0,o.Cn)(),e),Me={id:"contact"},Le=He((()=>(0,o._)("div",{id:"title"},[(0,o._)("p",null,"Contact"),(0,o._)("div")],-1))),je=He((()=>(0,o._)("p",{id:"contact-text"}," If you want to talk to me, feel free to email or DM me using the following platforms. ",-1))),Ee={id:"icon-row"},Pe={target:"_blank",href:"https://www.linkedin.com/in/chukwuamaka-friday-14622a169/",id:"icon"},Te=He((()=>(0,o._)("p",null,"LinkedIn",-1))),Be={target:"_blank",href:"https://github.com/fridaychukwuamaka",id:"icon"},Ze=He((()=>(0,o._)("p",null,"GitHub",-1))),Ge={action:"mailto:fridaychukwuamaka@gmail.com?subject= message",method:"get",enctype:"text/plain"},Re={id:"icon",class:"email-icon"},Ue=He((()=>(0,o._)("p",null,"Email",-1))),Ve=He((()=>(0,o._)("div",{id:"footer"},[(0,o.Uk)("Designed & developed by"),(0,o._)("br"),(0,o.Uk)("Chukwuamaka Friday")],-1)));function Ke(e,i,t,a,n,l){const r=(0,o.up)("vue-feather");return(0,o.wg)(),(0,o.iD)("div",Me,[Le,je,(0,o._)("div",Ee,[(0,o._)("a",Pe,[(0,o.Wm)(r,{type:"linkedin",size:"20"}),Te]),(0,o._)("a",Be,[(0,o.Wm)(r,{type:"github",size:"20"}),Ze]),(0,o._)("form",Ge,[(0,o._)("button",Re,[(0,o.Wm)(r,{type:"mail",size:"20"}),Ue])])]),Ve])}var ze=t(801);const qe={name:"ContactPage",components:{"vue-feather":ze.Z}},Ye=(0,Y.Z)(qe,[["render",Ke],["__scopeId","data-v-507e56ca"]]),Qe=Ye,Ne=e=>((0,o.dD)("data-v-4078b545"),e=e(),(0,o.Cn)(),e),Oe={id:"experience"},Xe=Ne((()=>(0,o._)("div",{id:"title"},[(0,o._)("p",null,"Experience"),(0,o._)("div")],-1))),Je={id:"view"},$e={id:"tab-bar"},ei=["onClick"],ii={id:"tab-view"},ti={key:0},ai={id:"tab-role"},ni={id:"tab-period"},oi={id:"exprnce"},li={id:"place"},ri={id:"period"};function si(e,i,t,n,r,s){const d=(0,o.up)("vue-feather");return(0,o.wg)(),(0,o.iD)("div",Oe,[(0,o.Wm)(a.uT,{name:"fade",appear:""},{default:(0,o.w5)((()=>[Xe])),_:1}),(0,o.Wm)(a.uT,{name:"slide1",appear:""},{default:(0,o.w5)((()=>[(0,o._)("div",Je,[(0,o._)("div",$e,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.experience,((i,t)=>((0,o.wg)(),(0,o.iD)("button",{key:t,class:(0,l.C_)({unselected:e.currentIndex!=t}),onClick:e=>s.moveTo(t)},[(0,o.Uk)((0,l.zw)(i.placement)+" ",1),(0,o.Wm)(a.uT,{name:"fade2"},{default:(0,o.w5)((()=>[e.currentIndex==t?((0,o.wg)(),(0,o.j4)(d,{key:0,type:"chevron-right",size:"1.1rem",id:"chevron-right-icon"})):(0,o.kq)("",!0)])),_:2},1024)],10,ei)))),128))]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.experience,((i,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t},[(0,o._)("div",ii,[(0,o.Wm)(a.uT,{name:"slide"},{default:(0,o.w5)((()=>[e.currentIndex==t?((0,o.wg)(),(0,o.iD)("div",ti,[(0,o._)("p",ai,(0,l.zw)(i.role),1),(0,o._)("ol",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.desc,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e,id:"tab-desc"},(0,l.zw)(e),1)))),128))]),(0,o._)("p",ni,(0,l.zw)(i.period),1)])):(0,o.kq)("",!0)])),_:2},1024)])])))),128))])])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.experience,((e,i)=>((0,o.wg)(),(0,o.iD)("div",{id:"row",key:i},[(0,o._)("div",oi,[(0,o._)("p",li,(0,l.zw)(e.placement)+" - "+(0,l.zw)(e.role),1),(0,o._)("ol",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.desc,(e=>((0,o.wg)(),(0,o.iD)("li",{id:"desc",key:e},(0,l.zw)(e),1)))),128))]),(0,o._)("p",ri,(0,l.zw)(e.period),1)])])))),128))])}const di={name:"ExperiencePage",components:{"vue-feather":ze.Z},data:()=>({experience:[{placement:"ACIAGA Inc",role:"Fullstack Developer",desc:["Created and released two AI-driven mobile apps, accumulating more than 10,000 downloads, demonstrating expertise in Flutter framework and AI integration.","Efficiently transitioned a codebase from Python Flask to Node.js Express, boosting scalability and performance of the app.","Led the introduction of continuous integration and deployment pipelines, streamlining development processes and ensuring smooth delivery of updates to production environments"],period:"November 2023 - Present"},{placement:"LVNDR Health",role:"Fullstack Developer",desc:["Developed an interactive cross-platform mobile app and crafted a progressive web app using Flutter and Flutter-web.","Identified and resolved compatibility issues across different devices and platforms, reducing testing time by 20% and ensuring a smooth user experience.","Added a feature displaying calls to users, resulting in a 60% increase in call volume compared to the previous app version.","Enhanced unit test coverage from 10% to 80% by incorporating unit tests for Mobx stores and services with the mocktail library.","Managed a data pipeline for a mobile and web app using Firebase with cloud functions and Typescript."],period:"September 2022 - Aug 2023"},{placement:"Ultainfinity Global Group",role:"Mobile Developer",desc:["Built and delivered software solutions using a range of blockchain platforms and protocols, including Ethereum and Solana.","Rolled out the Solana wallet mobile app for both iOS and Android, enabling functions such as sending and receiving transactions, managing addresses, and viewing transaction history.","Designed and verified the secure storage of confidential user data for the app, leading to an improved user experience without any data breaches occurring."],period:"April 2022 - September 2022"},{placement:"Green Mouse Technologies",role:"Mobile Developer",desc:["Developed, maintained, and overseen intricate software solutions for clients in various industries such as transportation and e-commerce. This was achieved by consistent client communication, deadline management, and successful project delivery.","Supervised the technical aspects of complex and extensive undertakings, guaranteeing timely completion and maintaining exceptional levels of quality (90% of projects finished on time and with defect-free code) via defect tracking, version control, and development methodology","Stayed up-to-date with the latest advancements in technology and advised clients on how to integrate new technologies into their solutions","Developed mobile applications with efficient user interfaces and optimized performance for Android and iOS mobile environments, resulting in increased user satisfaction and a 23% increase in application downloads"],period:"Dec 2021 - April 2022"},{placement:"Rentvec",role:"Mobile Developer",desc:["Designed and developed the company's car-rental product with a cross-functional team of designers, back-end developers, and project managers.","Delivered a high-quality app with 100% code coverage by employing Flutter widgets, animations, and custom components to implement intricate UI designs across two platforms in less than a month.","Using third-party libraries and APIs to integrate advanced features, including push notifications, maps, and camera functions, leading to a higher customer engagement and retention.","Optimized speed performance by 20% and reduced network latency by 30% by reducing the rate of the widget rebuild and implementing a caching mechanism."],period:"Dec 2021 - April 2022"},{placement:"HNG Internship",role:"Mobile Developer",desc:["Contributed to the development of a mobile application that generates merchant receipts and manages inventory within a team of four developers, using Agile development, and test-driven development.","Improved the overall code quality by performing code reviews and testing the beta release of the app, to ensure proper functionality and reduce the number of bugs reported by beta testers.","Conducted comprehensive testing of the application code using multiple devices, which resulted in superior mobile responsiveness on all screen sizes.","Accelerated the development process by developing reusable components for later usage and reducing the production time of features from 2 weeks to 2 days."],period:"June 2020 - August 2020"},{placement:"Bincom Dev Centre",role:"Frontend Developer",desc:["Worked as a front-end web developer and contributed to a Bincom product, Social Lender, using the Angular and Ionic framework.","Integrated payment options (Paystack and Flutterwave) on Social Lender's Android app, which more than 10,000 users use to access loans.","Managed social lender mobile app on Play Store by publishing release candidates, collecting user feedback, and implementing requested features.","Performed quality assurance tests to discover errors and optimize usability to improve the user experience of the application."],period:"June 2019 - December 2019"}],currentIndex:0}),methods:{moveTo(e){this.currentIndex=e}}},ci=(0,Y.Z)(di,[["render",si],["__scopeId","data-v-4078b545"]]),pi=ci,ui="data:image/png;base64,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",mi=e=>((0,o.dD)("data-v-4854bdb4"),e=e(),(0,o.Cn)(),e),gi={id:"header"},hi={class:"heading"},fi=mi((()=>(0,o._)("img",{id:"logo",alt:"logo",src:ui},null,-1))),vi={id:"menu-open"},wi={id:"none-shadow"},ki={href:"#mobile"},bi=mi((()=>(0,o._)("a",null,"Home",-1))),_i={href:"#page"},yi=mi((()=>(0,o._)("a",null,"About",-1))),Ai={href:"#work"},Ci=mi((()=>(0,o._)("a",null,"My projects",-1))),Di={href:"#experience"},xi=mi((()=>(0,o._)("a",null,"Experience",-1))),Ii={href:"#contact"},Fi=mi((()=>(0,o._)("a",null,"Contact",-1))),Wi={id:"download"};function Si(e,i,t,n,r,s){const d=(0,o.up)("vue-feather");return(0,o.wg)(),(0,o.iD)("div",gi,[(0,o._)("div",hi,[fi,(0,o.Wm)(d,{type:"menu",size:"20",id:"menu-icon",onClick:i[0]||(i[0]=i=>e.menu=!e.menu)})]),(0,o.Wm)(a.uT,{name:"drawer-open",animation:"transition"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",vi,[(0,o._)("div",{onClick:i[1]||(i[1]=i=>e.menu=!e.menu),id:"shadowed"}),(0,o._)("div",wi,[(0,o.Wm)(d,{type:"arrow-left",size:"20",id:"back",onClick:i[2]||(i[2]=i=>e.menu=!e.menu)}),(0,o._)("ul",null,[(0,o._)("a",ki,[(0,o._)("li",{onClick:i[3]||(i[3]=e=>s.toggle(0))},[bi,(0,o._)("div",{class:(0,l.C_)({selected:0==e.selectMenu})},null,2)])]),(0,o._)("a",_i,[(0,o._)("li",{onClick:i[4]||(i[4]=e=>s.toggle(1))},[yi,(0,o._)("div",{class:(0,l.C_)({selected:1==e.selectMenu})},null,2)])]),(0,o._)("a",Ai,[(0,o._)("li",{onClick:i[5]||(i[5]=e=>s.toggle(2))},[Ci,(0,o._)("div",{class:(0,l.C_)({selected:2==e.selectMenu})},null,2)])]),(0,o._)("a",Di,[(0,o._)("li",{onClick:i[6]||(i[6]=e=>s.toggle(3))},[xi,(0,o._)("div",{class:(0,l.C_)({selected:3==e.selectMenu})},null,2)])]),(0,o._)("a",Ii,[(0,o._)("li",{onClick:i[7]||(i[7]=e=>s.toggle(4))},[Fi,(0,o._)("div",{class:(0,l.C_)({selected:4==e.selectMenu})},null,2)])]),(0,o._)("li",Wi,[(0,o._)("a",{onClick:i[8]||(i[8]=(...e)=>s.openPdf&&s.openPdf(...e)),download:""},"Resume")])])])],512),[[a.F8,e.menu]])])),_:1})])}const Hi={name:"HeaderSection",components:{"vue-feather":ze.Z},data:()=>({selectMenu:0,menu:!1}),methods:{openPdf(){window.open("/files/resume.pdf")},toggle(e){this.selectMenu=e}}},Mi=(0,Y.Z)(Hi,[["render",Si],["__scopeId","data-v-4854bdb4"]]),Li=Mi,ji=e=>((0,o.dD)("data-v-2ffbae16"),e=e(),(0,o.Cn)(),e),Ei={id:"splash-screen"},Pi=ji((()=>(0,o._)("img",{id:"logo",alt:"logo",src:ui},null,-1))),Ti=ji((()=>(0,o._)("p",{id:"signature"},"amaka",-1))),Bi=[Pi,Ti];function Zi(e,i,t,a,n,l){return(0,o.wg)(),(0,o.iD)("div",Ei,Bi)}const Gi={name:"SplashScreen"},Ri=(0,Y.Z)(Gi,[["render",Zi],["__scopeId","data-v-2ffbae16"]]),Ui=Ri,Vi={id:"side-bar-column"},Ki={target:"_blank",href:"https://www.linkedin.com/in/chukwuamaka-friday-14622a169/",id:"icon"},zi={target:"_blank",href:"https://github.com/fridaychukwuamaka",id:"icon"},qi={action:"mailto:fridaychukwuamaka@gmail.com?subject= message",method:"get",enctype:"text/plain"},Yi={style:{cursor:"pointer"},id:"icon",class:"email-icon"};function Qi(e,i,t,a,n,l){const r=(0,o.up)("vue-feather");return(0,o.wg)(),(0,o.iD)("div",Vi,[(0,o._)("a",Ki,[(0,o.Wm)(r,{type:"linkedin",size:"20"})]),(0,o._)("a",zi,[(0,o.Wm)(r,{type:"github",size:"20"})]),(0,o._)("form",qi,[(0,o._)("button",Yi,[(0,o.Wm)(r,{type:"mail",size:"20"})])])])}const Ni={name:"SideBar",components:{"vue-feather":ze.Z}},Oi=(0,Y.Z)(Ni,[["render",Qi],["__scopeId","data-v-00b7eacd"]]),Xi=Oi,Ji={name:"App",components:{"vue-feather":ze.Z,HeaderSection:Li,SplashScreen:Ui,SideBar:Xi,HomePage:N,AboutPage:re,WorkPage:Se,ExperiencePage:pi,ContactPage:Qe},data:()=>({splashScreen:!1,windowWidth:window.screen.availWidth,currentRoute:window.location.pathname,link:0}),methods:{activeLink(e){this.link=e},openPdf(){window.open("/files/resume.pdf")}},beforeUpdate:function(){this.currentRoute=window.location.pathname},beforeCreate:function(){this.splashScreen=!1,setTimeout((()=>{this.splashScreen=!0,console.log("splashScreen",this.splashScreen)}),1500)}},$i=(0,Y.Z)(Ji,[["render",C]]),et=$i,it=[{path:"/",component:N},{path:"/about",component:re},{path:"/work",component:Se},{path:"/experience",component:pi},{path:"/:pathMatch(.*)*",name:"NotFound",component:pi}],tt=(0,n.p7)({history:(0,n.PO)(),routes:it});(0,a.ri)(et).use(tt).mount("#app")},158:(e,i,t)=>{e.exports=t.p+"img/PROMO.a0d979f8.jpg"},37:(e,i,t)=>{e.exports=t.p+"img/daabo_cover.4d228ff8.jpeg"},984:(e,i,t)=>{e.exports=t.p+"img/deepend_cover.8b363353.jpeg"},997:(e,i,t)=>{e.exports=t.p+"img/irrigation.bc618252.png"},591:(e,i,t)=>{e.exports=t.p+"img/musicapp.14fdf10a.png"},229:(e,i,t)=>{e.exports=t.p+"img/portfolio_cover.27f7a165.jpeg"},852:(e,i,t)=>{e.exports=t.p+"img/vanmates_cover.9212c075.jpg"},666:(e,i,t)=>{e.exports=t.p+"img/yourchat_cover.b2437403.png"}},i={};function t(a){var n=i[a];if(void 0!==n)return n.exports;var o=i[a]={exports:{}};return e[a].call(o.exports,o,o.exports,t),o.exports}t.m=e,(()=>{var e=[];t.O=(i,a,n,o)=>{if(!a){var l=1/0;for(c=0;c<e.length;c++){for(var[a,n,o]=e[c],r=!0,s=0;s<a.length;s++)(!1&o||l>=o)&&Object.keys(t.O).every((e=>t.O[e](a[s])))?a.splice(s--,1):(r=!1,o<l&&(l=o));if(r){e.splice(c--,1);var d=n();void 0!==d&&(i=d)}}return i}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,n,o]}})(),(()=>{t.n=e=>{var i=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(i,{a:i}),i}})(),(()=>{t.d=(e,i)=>{for(var a in i)t.o(i,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i)})(),(()=>{t.p="/"})(),(()=>{var e={143:0};t.O.j=i=>0===e[i];var i=(i,a)=>{var n,o,[l,r,s]=a,d=0;if(l.some((i=>0!==e[i]))){for(n in r)t.o(r,n)&&(t.m[n]=r[n]);if(s)var c=s(t)}for(i&&i(a);d<l.length;d++)o=l[d],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},a=self["webpackChunktest"]=self["webpackChunktest"]||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))})();var a=t.O(void 0,[998],(()=>t(861)));a=t.O(a)})();
//# sourceMappingURL=app.6b806ab3.js.map