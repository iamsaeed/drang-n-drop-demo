import{u as _}from"./titleStore.a8da10d5.js";import{j as m,_ as f,K as y,o,c as a,a as r,F as h,G as g,f as w,t as u,h as d}from"./app.30c6c5b7.js";const b=m({id:"locationId",state:()=>({countries:[],cities:[]}),actions:{get(){axios({method:"get",url:"/api/getAllLocations",data:this.user}).then(e=>{this.countries=e.data.countries,this.cities=e.data.cities,this.addCityArrayToCountry()}).catch(e=>{})},addCityArrayToCountry(){this.countries.forEach(e=>{e.cities=[]})}}}),D={setup(){const e=_(),t=b(),i=y();return{title:e,locations:t,notification:i}},data(){return{dragOptions:{group:"kanban",animation:150,handle:".drag-handle"},city:null}},created(){this.title.set("Dashboard"),this.locations.get()},methods:{dragStart(e,t){this.city=t},onDrop(e,t){this.locations.countries.forEach(i=>{i.id===t.id&&this.city.parent_id===i.id&&(i.cities.push(this.city),this.locations.cities.splice(this.locations.cities.indexOf(this.city),1)),i.id===t.id&&this.city.parent_id!==i.id&&this.notification.setMessage("Move to the correct country","error")})}}},v={class:"flex flex-wrap -mx-4"},x={class:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"},k={class:"bg-gray-200 dark:bg-gray-700 p-4 rounded shadow"},C=r("h2",{class:"text-lg font-semibold mb-4"},"Cities",-1),S={class:"space-y-2"},N=["onDragstart"],F={class:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"},z={class:"bg-gray-200 dark:bg-gray-700 p-4 rounded shadow"},A={class:"text-lg font-semibold mb-4 uppercase"},B={class:"space-y-2"},E=["onDrop"],L=["onDrop"];function M(e,t,i,c,T,l){return o(),a("div",v,[r("div",x,[r("div",k,[C,r("ul",S,[c.locations.cities?(o(!0),a(h,{key:0},g(c.locations.cities,s=>(o(),a("li",{onDragstart:n=>l.dragStart(n,s),class:"bg-white dark:bg-gray-800 dark:text-gray-400 p-2 rounded shadow cursor-move capitalize",draggable:"true"},u(s.name),41,N))),256)):w("",!0)])])]),(o(!0),a(h,null,g(c.locations.countries,s=>(o(),a("div",F,[r("div",z,[r("h2",A,u(s.name),1),r("ul",B,[s.cities.length?(o(!0),a(h,{key:0},g(s.cities,n=>(o(),a("li",{class:"bg-white dark:bg-gray-800 dark:text-gray-400 p-2 rounded shadow capitalize",onDrop:p=>l.onDrop(p,s),onDragenter:t[0]||(t[0]=d(()=>{},["prevent"])),onDragover:t[1]||(t[1]=d(()=>{},["prevent"]))},u(s.cities.length?n.name:"No Cities Found"),41,E))),256)):(o(),a("li",{key:1,class:"bg-white dark:bg-gray-800 dark:text-gray-400 p-2 rounded shadow capitalize",onDrop:n=>l.onDrop(n,s),onDragenter:t[2]||(t[2]=d(()=>{},["prevent"])),onDragover:t[3]||(t[3]=d(()=>{},["prevent"]))},"No Cities Found",40,L))])])]))),256))])}const j=f(D,[["render",M]]);export{j as default};
