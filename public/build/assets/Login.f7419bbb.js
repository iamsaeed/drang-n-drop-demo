import{o as l,c as a,a as e,u as w,d as x,r as f,w as c,v as d,e as s,t as u,f as m,b as p,g as b,h as v,i}from"./app.30c6c5b7.js";import{u as k}from"./titleStore.a8da10d5.js";function g(_,t){return l(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"})])}const y={class:"p-5 h-full flex-col items-center"},C=e("h4",{class:"mb-3 text-center"},"Welcome to Login",-1),V={class:"mb-5"},N=e("label",null,"Email",-1),S={key:0,class:"text-danger"},A={class:"mb-5"},B=e("label",null,"Password",-1),L={key:0,class:"text-danger"},D=e("div",{class:"mb-5 space-x-2"},[e("input",{type:"checkbox",name:"checkbox",id:"checkbox"}),e("span",null,"Remember")],-1),E=e("div",{class:"mb-5"},[e("button",{type:"submit",class:"btn btn-primary w-full"},"Login")],-1),M={class:"mb-5 items-center space-x-5 text-center"},T=i("New on our platform? "),U=i("Create an account"),j={class:"text-center space-y-2"},H=e("hr",null,null,-1),P={class:"flex justify-around"},R=i(" Demo Account Credentials "),W=e("p",null,"Username: demo@tooeasy.in",-1),$=e("p",null,"Password: password",-1),q=e("hr",null,null,-1),J={name:"Login",setup(_){const t=w(),o=x();return k().set("Login"),(F,r)=>{const h=f("router-link");return l(),a("div",y,[C,e("form",{onSubmit:r[2]||(r[2]=v(n=>s(t).login(),["prevent"]))},[e("div",V,[N,c(e("input",{type:"email","onUpdate:modelValue":r[0]||(r[0]=n=>s(t).user.email=n),placeholder:"email@email.com",class:"form-control mt-1"},null,512),[[d,s(t).user.email]]),s(o).errors&&s(o).errors.email?(l(),a("span",S,u(s(o).errors.email),1)):m("",!0)]),e("div",A,[B,c(e("input",{type:"password","onUpdate:modelValue":r[1]||(r[1]=n=>s(t).user.password=n),placeholder:"************",class:"form-control mt-1"},null,512),[[d,s(t).user.password]]),s(o).errors&&s(o).errors.password?(l(),a("span",L,u(s(o).errors.password),1)):m("",!0)]),D,E,e("div",M,[e("span",null,[T,p(h,{to:{name:"register"}},{default:b(()=>[U]),_:1})])])],32),e("div",j,[H,e("h4",P,[R,p(s(g),{title:"Copy",onClick:s(t).copyCredentials,class:"h-6 w-6 cursor-pointer"},null,8,["onClick"])]),W,$,q])])}}};export{J as default};