(this["webpackJsonpterminal-chat"]=this["webpackJsonpterminal-chat"]||[]).push([[0],{44:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var c=a(12),r=a(36),n=a.n(r),s=a(0),i=a.n(s),u=a(1),l=a(14),o=(a(44),a(25)),d=(a(45),a(50),o.a.initializeApp({apiKey:"AIzaSyAIRsRlGnUrRpxYcUUklk76Ej3cUeYhWO0",authDomain:"terminal-chat-val8119.firebaseapp.com",projectId:"terminal-chat-val8119",storageBucket:"terminal-chat-val8119.appspot.com",messagingSenderId:"606376017489",appId:"1:606376017489:web:2e8d372e5cd2719abb4270",measurementId:"G-FMPES68B74"}),o.a.auth()),j=o.a.firestore(),p=a(37),m=a(38),b=a(15);function h(){var e=Object(c.useRef)(),t=j.collection("messages"),a=t.orderBy("createdAt").limit(75),r=Object(m.a)(a,{idField:"id"}),n=Object(l.a)(r,1)[0],s=Object(c.useState)(""),p=Object(l.a)(s,2),h=p[0],x=p[1],v=function(){var e=Object(u.a)(i.a.mark((function e(a){var c,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),c=d.currentUser,r=c.uid,n=c.displayName,e.next=4,t.add({text:h,createdAt:o.a.firestore.FieldValue.serverTimestamp(),displayName:n,uid:r});case 4:x("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App crt",children:[Object(b.jsxs)("div",{className:"ChatBox",children:[n&&n.map((function(e){return Object(b.jsx)(O,{message:e},e.id)})),Object(b.jsx)("div",{ref:e})]}),Object(b.jsxs)("footer",{children:[Object(b.jsxs)("label",{children:[d.currentUser.displayName,"@terminal-chat >"]}),Object(b.jsx)("form",{onSubmit:v,children:Object(b.jsx)("input",{className:"crt",id:"TextBox",value:h,onChange:function(e){return x(e.target.value)},autofocus:"true"})}),Object(b.jsx)("button",{className:"crt",onClick:function(){return d.signOut()},children:"SIGN OUT"})]})]})}function O(e){var t=e.message,a=t.text,c=t.uid,r=t.displayName,n=c===d.currentUser.uid?"sent":"received";return Object(b.jsx)("div",{className:"message ".concat(n),children:Object(b.jsxs)("p",{children:[r.split(" ")[0].toLowerCase(),": ",a]})})}function x(){return Object(b.jsx)("div",{className:"SignIn crt",children:Object(b.jsx)("button",{className:"crt",onClick:function(){var e=new o.a.auth.GoogleAuthProvider;d.signInWithPopup(e)},children:"SIGN IN"})})}var v=function(){var e=Object(p.a)(d),t=Object(l.a)(e,1)[0];return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{children:t?Object(b.jsx)(h,{}):Object(b.jsx)(x,{})})})};n.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.7b609d07.chunk.js.map