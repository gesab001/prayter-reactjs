(this.webpackJsonpprayter=this.webpackJsonpprayter||[]).push([[0],{34:function(e,t,n){e.exports={errorMessage:"SignUp_errorMessage__3AIiQ"}},40:function(e,t,n){},45:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n(2),a=n(31),c=n.n(a),r=n(10),o=(n(40),n(14)),l=n(15),d=n(17),u=n(16),h=n(3);n(22),n(42);h.a.initializeApp({apiKey:"AIzaSyAE2tUZXM3GPw9Jjy3G5y4Fp7MINMaO-j8",authDomain:"pray-290920.firebaseapp.com",databaseURL:"https://pray-290920.firebaseio.com",projectId:"pray-290920",storageBucket:"pray-290920.appspot.com",messagingSenderId:"951976358196",appId:"1:951976358196:web:4686903027ee94f7ea3561",measurementId:"G-TRF9JGHQCR"});var j=h.a.auth(),b=h.a.firestore(),m=function(e,t){console.log("add: "+e);var n=b.collection("rooms").doc(e).collection("private").doc(t.userId).collection("messages");n.add({author:t.author,userId:t.userId,message:t.message,date:t.date,recurring:t.recurring}).then((function(e){console.log(n,t.message,"private",t.date,t.userId,e.id,t.recurring)})).catch((function(e){console.error("Error adding document: ",e)}))},g=function(e,t,n){b.collection("rooms").doc(e).collection("private").doc(t).collection("messages").doc(n).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))},f=(n(45),n(19)),p=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).componentDidMount=function(){i.unsubscribe=b.collection("rooms").doc("fasting").collection("private").doc(j.currentUser.uid).collection("messages").orderBy("date","desc").onSnapshot(i.onDataChange)},i.newFastHandler=function(e){var t="Dear heavenly Father, help me to fast from "+e.currentTarget.innerHTML+" for 60 days, in Jesus' name, Amen";i.setState({newfast:t})},i.addFast=function(e){console.log("add: "+i.state.newfast);var t=j.currentUser.email,n=j.currentUser.uid,s=i.state.newfast,a=Date.now();m("fasting",{author:t,userId:n,message:s,date:a,recurring:!1})},i.deleteFast=function(e,t){console.log("remove: "+t);var n=j.currentUser.uid;g("fasting",n,t)},i.getDate=function(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},i.getEndDate=function(e){e+=5184e6;return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},i.onDataChange=i.onDataChange.bind(Object(f.a)(i)),i.state={newfast:null,fastlist:[],inputField:null},i.unsubscribe=void 0,i}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"onDataChange",value:function(e){var t=this.state.fastlist;e.docChanges().forEach((function(e){var n={id:e.doc.id,item:e.doc.data()};if("added"===e.type&&(console.log("New prayer: ",e.doc.id),t.unshift(n)),"modified"===e.type&&console.log("Modified prayer: ",e.doc.data()),"removed"===e.type){console.log("Removed prayer: ",e.doc.data());var i=t.filter((function(e,t,i){return e.id!=n.id}));t=i}})),this.setState({fastlist:t})}},{key:"render",value:function(){var e=this;this.state.fastlist;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(r.b,{to:"/home",children:"Cancel"}),Object(i.jsx)("h1",{children:"New fast"}),Object(i.jsx)("div",{children:"Dear heavenly Father, help me to fast from  "}),Object(i.jsx)("div",{contentEditable:!0,onInput:function(t){return e.newFastHandler(t)}}),Object(i.jsx)("div",{children:"for 60 days, in Jesus' name, Amen."}),Object(i.jsx)("button",{onClick:function(t){e.addFast(t)},children:"Send"})]})})}}]),n}(s.Component),v=(n(50),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).componentDidMount=function(){i.unsubscribe=b.collection("rooms").doc("prayer").collection("private").doc(j.currentUser.uid).collection("messages").orderBy("date","desc").limit(3).onSnapshot(i.onDataChange),i.unsubscribe2=b.collection("rooms").doc("fasting").collection("private").doc(j.currentUser.uid).collection("messages").orderBy("date","desc").limit(3).onSnapshot(i.onDataChange2)},i.deleteItem=function(e,t,n){if("cancel this item"==prompt("type: cancel this item")){console.log("remove: "+n);var i=j.currentUser.uid;g(t,i,n),alert("item deleted")}else alert("item not deleted")},i.getStartDate=function(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},i.getEndDate=function(e){e+=5184e6;return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},i.onDataChange=i.onDataChange.bind(Object(f.a)(i)),i.onDataChange2=i.onDataChange2.bind(Object(f.a)(i)),i.state={newprayer:null,list:[],list2:[]},i.unsubscribe=void 0,i.unsubscribe2=void 0,i}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){this.unsubscribe(),this.unsubscribe2()}},{key:"onDataChange",value:function(e){var t=this.state.list;e.docChanges().forEach((function(e){var n={id:e.doc.id,item:e.doc.data()};if("added"===e.type&&(console.log("New prayer: ",e.doc.data()),t.unshift(n)),"modified"===e.type&&console.log("Modified prayer: ",e.doc.data()),"removed"===e.type){console.log("Removed prayer: ",e.doc.data());var i=t.filter((function(e,t,i){return e.id!=n.id}));t=i}})),this.setState({list:t})}},{key:"onDataChange2",value:function(e){var t=this.state.list2;e.docChanges().forEach((function(e){var n={id:e.doc.id,item:e.doc.data()};if("added"===e.type&&(console.log("New prayer: ",e.doc.data()),t.unshift(n)),"modified"===e.type&&console.log("Modified prayer: ",e.doc.data()),"removed"===e.type){console.log("Removed prayer: ",e.doc.data());var i=t.filter((function(e,t,i){return e.id!=n.id}));t=i}})),this.setState({list2:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.list,s=t.list2,a={position:"relative",zIndex:"1"};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Prayer"}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:n&&n.map((function(t,n){return Object(i.jsx)("li",{children:Object(i.jsxs)("div",{class:"article",children:[Object(i.jsxs)("p",{children:["Submitted: ",e.getStartDate(t.item.date)]}),Object(i.jsx)("p",{children:t.item.message}),Object(i.jsx)("button",{onClick:function(n){e.deleteItem(n,"prayer",t.id)},children:"Delete"})]})})}))})}),Object(i.jsx)("h1",{children:"Fasting"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("ul",{children:s&&s.map((function(t,n){return Object(i.jsx)("li",{children:Object(i.jsxs)("div",{class:"article",children:[Object(i.jsxs)("p",{children:["From: ",e.getStartDate(t.item.date)]}),Object(i.jsxs)("p",{children:["To: ",e.getEndDate(t.item.date)]}),Object(i.jsx)("p",{children:t.item.message}),Object(i.jsx)("button",{style:a,onClick:function(n){e.deleteItem(n,"fasting",t.id)},children:"Delete"})]})})}))}),Object(i.jsx)("div",{style:{height:"calc(6.5625rem)"}})]})]})}}]),n}(s.Component)),x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).componentDidMount=function(){s.unsubscribe=b.collection("rooms").doc("fasting").collection("private").doc(j.currentUser.uid).collection("messages").orderBy("date","desc").onSnapshot(s.onDataChange)},s.getDate=function(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},s.getEndDate=function(e){e+=5184e6;return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},s.signOutHandler=function(e){j.signOut(),window.location.reload(!1)},s.onViewChange=function(e){e.preventDefault(),s.setState({view:e.currentTarget.value})},s.renderSwitch=function(e){return Object(i.jsx)(v,{room:e})},s.setActiveButton=function(e){alert("hello")},s.onDataChange=s.onDataChange.bind(Object(f.a)(s)),s.state={newfast:null,fastlist:[],inputField:null,view:"prayer"},s.unsubscribe=void 0,s}return Object(l.a)(n,[{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"onDataChange",value:function(e){var t=this.state.fastlist;e.docChanges().forEach((function(e){var n={id:e.doc.id,item:e.doc.data()};if("added"===e.type&&(console.log("New prayer: ",e.doc.id),t.unshift(n)),"modified"===e.type&&console.log("Modified prayer: ",e.doc.data()),"removed"===e.type){console.log("Removed prayer: ",e.doc.data());var i=t.filter((function(e,t,i){return e.id!=n.id}));t=i}})),this.setState({fastlist:t})}},{key:"render",value:function(){var e=this,t=this.state,n=(t.fastlist,t.view);return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"button",onClick:function(t){e.signOutHandler(t)},children:"Sign out "}),this.renderSwitch(n),Object(i.jsxs)("div",{class:"bottom-menu",children:[Object(i.jsx)("div",{class:"floating-button-container",children:Object(i.jsx)(r.b,{to:"/compose/tweet",children:Object(i.jsx)("div",{class:"floating-button",children:Object(i.jsx)("svg",{viewBox:"0 0 24 24",children:Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"})})})})})}),Object(i.jsxs)("nav",{class:"nav-menu",children:[Object(i.jsx)("div",{class:"nav-button",onClick:function(t){e.setActiveButton(t)},children:Object(i.jsx)("svg",{class:"svg-nav-button",viewBox:"0 0 24 24",children:Object(i.jsxs)("g",{children:[Object(i.jsx)("path",{d:"M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"}),Object(i.jsx)("path",{d:"M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"})]})})}),Object(i.jsx)("div",{class:"nav-button",onClick:function(t){e.setActiveButton(t)},children:Object(i.jsx)("svg",{class:"svg-nav-button",viewBox:"0 0 24 24",children:Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})})})}),Object(i.jsx)("div",{class:"nav-button",onClick:function(t){e.setActiveButton(t)},children:Object(i.jsx)("svg",{class:"svg-nav-button",viewBox:"0 0 24 24",children:Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"})})})}),Object(i.jsx)("div",{class:"nav-button",onClick:function(t){e.setActiveButton(t)},children:Object(i.jsx)("svg",{class:"svg-nav-button",viewBox:"0 0 24 24",children:Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"})})})})]})]})]})}}]),n}(s.Component),O=(n(51),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).newFastHandler=function(e){var t="Dear heavenly Father, help me to fast from "+e.currentTarget.innerHTML+" for 60 days, in Jesus' name, Amen";i.setState({newfast:t}),i.setState({inputField:e.currentTarget})},i.addFast=function(e){console.log("add: "+i.state.newfast);var t=j.currentUser.email,n=j.currentUser.uid,s=i.state.newfast,a=Date.now();m("fasting",{author:t,userId:n,message:s,date:a,recurring:!1}),i.state.inputField.innerHTML=""},i.newprayerHandler=function(e){var t="Dear heavenly Father,  "+e.currentTarget.innerHTML+" in Jesus' name, Amen";i.setState({message:t}),i.setState({inputField:e.currentTarget})},i.addPrayer=function(e){console.log("add: "+i.state.message);var t=j.currentUser.email,n=j.currentUser.uid,s=i.state.message,a=Date.now();m("prayer",{author:t,userId:n,message:s,date:a,recurring:!1}),i.state.inputField.innerHTML=""},i.onViewChange=function(e){console.log(e.target.id),"prayer"===e.target.id?i.setState({fastForm:!1}):"fasting"===e.target.id&&i.setState({fastForm:!0})},i.state={newfast:null,fastlist:[],inputField:null,fastForm:!1},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this;this.state.fastlist;return Object(i.jsxs)("div",{children:[Object(i.jsx)(r.b,{to:"/home",children:"Back"}),Object(i.jsxs)("div",{className:"fastpraybuttonContainer",children:[Object(i.jsxs)("div",{className:"pray",children:["Prayer",Object(i.jsx)("input",{type:"radio",id:"prayer",name:"view",value:"prayer",onChange:function(t){return e.onViewChange(t)}})]}),Object(i.jsxs)("div",{className:"fast",children:["Fasting",Object(i.jsx)("input",{type:"radio",id:"fasting",name:"view",value:"fasting",onChange:function(t){return e.onViewChange(t)}})]})]}),this.state.fastForm?Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"New fast"}),Object(i.jsx)("div",{children:"Dear heavenly Father, help me to fast from  "}),Object(i.jsx)("div",{contentEditable:!0,onInput:function(t){return e.newFastHandler(t)}}),Object(i.jsx)("div",{children:"for 60 days, in Jesus' name, Amen."}),Object(i.jsx)("button",{onClick:function(t){e.addFast(t)},children:"Send"})]}):Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"New prayer"}),Object(i.jsx)("blockquote",{children:"Proverbs 28:9. He that turneth away his ear from hearing the law, even his prayer [shall be] abomination."}),Object(i.jsx)("div",{children:"Dear heavenly Father, "}),Object(i.jsx)("div",{ref:this.inputField,contentEditable:!0,onInput:function(t){return e.newprayerHandler(t)}}),Object(i.jsx)("div",{children:"in Jesus' name, Amen."}),Object(i.jsx)("button",{onClick:function(t){e.addPrayer(t)},children:"Send"})]})]})}}]),n}(s.Component)),w=n(29),y=n.n(w),C=n(33),F=n(18),S=n(34),k=n.n(S),N=function(){var e=Object(s.useState)(""),t=Object(F.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),r=Object(F.a)(c,2),o=r[0],l=r[1],d=Object(s.useState)(""),u=Object(F.a)(d,2),h=(u[0],u[1]),b=Object(s.useState)(""),m=Object(F.a)(b,2),g=m[0],f=m[1],p=Object(s.useState)(null),v=Object(F.a)(p,2),x=v[0],O=v[1],w=function(){var e=Object(C.a)(y.a.mark((function e(t,n,i){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log(n+i),e.next=5,j.createUserWithEmailAndPassword(n,i);case 5:s=e.sent,s.user,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),O(e.t0.message),console.log(e.t0.message);case 13:a(""),l(""),f("");case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n,i){return e.apply(this,arguments)}}(),S=function(e){var t=e.currentTarget,n=t.name,i=t.value;"userEmail"===n?a(i):"userPassword"===n?l(i):"displayName"===n?f(i):"userPhoneNumber"===n&&h(i)};return Object(i.jsxs)("div",{className:"mt-8",children:[Object(i.jsx)("h1",{className:"text-3xl mb-2 text-center font-bold",children:"Sign Up"}),Object(i.jsxs)("div",{className:"border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8",children:[null!==x&&Object(i.jsx)("div",{className:k.a.errorMessage,children:x}),Object(i.jsxs)("form",{className:"",children:[Object(i.jsx)("label",{htmlFor:"displayName",className:"block",children:"Display Name:"}),Object(i.jsx)("input",{type:"text",className:"my-1 p-1 w-full ",name:"displayName",value:g,placeholder:"E.g: Faruq",id:"displayName",onChange:function(e){return S(e)}}),Object(i.jsx)("label",{htmlFor:"userEmail",className:"block",children:"Email:"}),Object(i.jsx)("input",{type:"email",className:"my-1 p-1 w-full",name:"userEmail",value:n,placeholder:"E.g: faruq123@gmail.com",id:"userEmail",onChange:function(e){return S(e)}}),Object(i.jsx)("label",{htmlFor:"userPassword",className:"block",children:"Password:"}),Object(i.jsx)("input",{type:"password",className:"mt-1 mb-3 p-1 w-full",name:"userPassword",value:o,placeholder:"Your Password",id:"userPassword",onChange:function(e){return S(e)}}),Object(i.jsx)("button",{className:"bg-green-400 hover:bg-green-500 w-full py-2 text-white",onClick:function(e){w(e,n,o)},children:"Sign up"})]})]})]})},D=function(){var e=Object(s.useState)(""),t=Object(F.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),r=Object(F.a)(c,2),o=r[0],l=r[1],d=Object(s.useState)(null),u=Object(F.a)(d,2),h=u[0],b=u[1];return Object(i.jsxs)("div",{className:"mt-8",children:[Object(i.jsx)("h1",{className:"text-xl text-center font-bold mb-3",children:"Reset your Password"}),Object(i.jsx)("div",{className:"border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8",children:Object(i.jsxs)("form",{action:"",children:[o&&Object(i.jsx)("div",{className:"py-3 bg-green-400 w-full text-white text-center mb-3",children:"An email has been sent to you!"}),null!==h&&Object(i.jsx)("div",{className:"py-3 bg-red-600 w-full text-white text-center mb-3",children:h}),Object(i.jsx)("label",{htmlFor:"userEmail",className:"w-full block",children:"Email:"}),Object(i.jsx)("input",{type:"email",name:"userEmail",id:"userEmail",value:n,placeholder:"Input your email",onChange:function(e){var t=e.currentTarget,n=t.name,i=t.value;"userEmail"===n&&a(i)},className:"mb-3 w-full px-1 py-2"}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault(),j.sendPasswordResetEmail(n).then((function(){l(!0),setTimeout((function(){l(!1)}),3e3)})).catch((function(){b("Error resetting password")}))},className:"w-full bg-blue-400 text-white py-3",children:"Send me a reset link"})]})})]})};n(53);var I=n(6),P=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).componentDidMount=function(){j.onAuthStateChanged((function(e){null!=e&&(console.log(e.uid),s.setState({user:e}))}))},s.googleProvider=function(){var e=new h.a.auth.GoogleAuthProvider;return e.addScope("https://www.googleapis.com/auth/userinfo.email"),e.addScope("https://www.googleapis.com/auth/userinfo.profile"),e.setCustomParameters({login_hint:"user@example.com"}),e},s.githubProvider=function(){return new h.a.auth.GithubAuthProvider},s.yahooProvider=function(){return new h.a.auth.OAuthProvider("yahoo.com")},s.twitterProvider=function(){return new h.a.auth.TwitterAuthProvider},s.microsoftProvider=function(){return new h.a.auth.OAuthProvider("microsoft.com")},s.signInWithMicrosoft=function(){!function(e){h.a.auth().signInWithPopup(e).then((function(e){var t=e.credential,n=t.accessToken;t.idToken,console.log("access token"+n)})).catch((function(e){console.log(e)}))}(s.microsoftProvider())},s.signInWithTwitter=function(){!function(e){h.a.auth().signInWithPopup(e).then((function(e){var t=e.credential;t.accessToken,t.secret,e.user})).catch((function(e){e.code,e.message,e.email,e.credential}))}(s.twitterProvider())},s.signInWithYahoo=function(){!function(e){h.a.auth().signInWithPopup(e).then((function(e){var t=e.credential.accessToken,n=e.user;console.log(t),console.log(n)})).catch((function(e){e.code,e.message,console.log(e.code),console.log(e.message)}))}(s.yahooProvider())},s.signInWithGithub=function(){!function(e){h.a.auth().signInWithPopup(e).then((function(e){var t=e.credential.accessToken,n=e.user;console.log(t),console.log(n)})).catch((function(e){e.code,e.message,console.log(e.code),console.log(e.message)}))}(s.githubProvider())},s.signInWithGoogle=function(){!function(e){h.a.auth().signInWithPopup(e).then((function(e){e.credential.accessToken,e.user})).catch((function(e){e.code,e.message,e.email,e.credential}))}(s.googleProvider())},s.signInWithPhonenumber=function(e){s.state.confirmationResult.confirm(e).then((function(e){s.setState({user:e.user})})).catch((function(e){console.log(e)}))},s.onChangeHandlerUsername=function(e){var t=e.currentTarget.value;s.setState({username:t})},s.onChangeHandlerPassword=function(e){var t=e.currentTarget.value;console.log("password: ",t),s.setState({password:t})},s.createUserWithPhoneNumberHandler=function(e,t){t=window.prompt("enter phone number");e.preventDefault();var n=new h.a.auth.RecaptchaVerifier(e.target,{size:"invisible",callback:function(e){console.log(e)}});h.a.auth().signInWithPhoneNumber(t,n).then((function(e){var t=window.prompt("code: ");e.confirm(t)})).catch((function(e){s.setState({error:e.message})}))},s.signInHandler=function(e){e.preventDefault(),j.signInWithEmailAndPassword(s.state.username,s.state.password).catch((function(e){console.log("Error signing in with password and email",e),s.setState({error:e})}))},s.onViewChange=function(e){e.preventDefault(),s.setState({view:e.currentTarget.value})},s.signOutHandler=function(e){j.signOut(),s.setState({user:null}),window.location.reload(!1)},s.renderSwitch=function(e){switch(e){case"fasting":return Object(i.jsx)(p,{});default:return Object(i.jsx)(v,{})}},s.signupHandler=function(){console.log(s.state.signup),s.setState({signup:!0}),console.log(s.state.signup)},s.showSignIn=function(){s.setState({signup:!1})},s.forgotPasswordHandler=function(){s.setState({forgotpassword:!0})},s.turnOffPasswordReset=function(){s.setState({forgotpassword:!1})},s.onChangeHandler=function(e){var t=e.currentTarget,n=t.name,i=t.value;"userPhoneNumber"===n?s.setState({phoneNumber:i}):"verificationCode"===n&&s.setState({verificationCode:i})},s.state={user:null,username:null,password:null,error:null,view:"prayer",signup:!1,forgotpassword:!1,phoneNumber:null,verificationCode:null,confirmationResult:void 0},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;if(null===this.state.user)return Object(i.jsxs)("div",{className:"loginContainer",children:[Object(i.jsxs)("div",{className:"left",children:[Object(i.jsx)("p",{children:"Your ultimate app to overcoming sin. "}),Object(i.jsx)("p",{children:"Join now to experience the power."})]}),this.state.forgotpassword?Object(i.jsxs)("div",{children:["forgot password",Object(i.jsx)(D,{}),Object(i.jsx)("button",{onClick:function(t){e.turnOffPasswordReset()},children:"Back to sign in page"})]}):Object(i.jsxs)("div",{className:"right",children:["       ",this.state.signup?Object(i.jsxs)("div",{children:[Object(i.jsx)(N,{}),"Already have an account? ",Object(i.jsx)("button",{onClick:function(t){e.showSignIn()},children:"Sign in here"})]}):Object(i.jsxs)("div",{className:"emailPasswordForm",children:[Object(i.jsxs)("div",{className:"signInButtonsContainer",children:[Object(i.jsxs)("div",{className:"loginbuttons",children:[Object(i.jsx)("div",{className:"socialIcons",onClick:function(t){e.createUserWithPhoneNumberHandler(t)},children:Object(i.jsx)("img",{className:"smsButton",src:"https://image.flaticon.com/icons/png/128/733/733533.png"})}),Object(i.jsx)("div",{children:"  Log in with Phone"})]}),Object(i.jsxs)("div",{className:"loginbuttons",children:[Object(i.jsx)("div",{className:"socialIcons",onClick:function(t){e.signInWithGoogle()},children:Object(i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",viewBox:"0 0 48 48",children:Object(i.jsxs)("g",{children:[Object(i.jsx)("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),Object(i.jsx)("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),Object(i.jsx)("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),Object(i.jsx)("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),Object(i.jsx)("path",{fill:"none",d:"M0 0h48v48H0z"})]})})}),Object(i.jsx)("div",{children:"  Log in with Google"})]}),Object(i.jsxs)("div",{className:"loginbuttons",children:[Object(i.jsx)("div",{className:"signInButtons",onClick:function(t){e.signInWithGithub()},children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",viewBox:"0 0 24 24",children:Object(i.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),Object(i.jsx)("div",{children:"  Log in with Github"})]}),Object(i.jsxs)("div",{className:"loginbuttons",children:[Object(i.jsx)("div",{className:"signInButtons",onClick:function(t){e.signInWithYahoo()},children:Object(i.jsxs)("svg",{width:"32px",height:"32px",viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[Object(i.jsx)("defs",{children:Object(i.jsx)("polygon",{id:"path-1",points:"0.171073913 0.0931111111 9.4455087 0.0931111111 9.4455087 9.92442222 0.171073913 9.92442222"})}),Object(i.jsxs)("g",{id:"favicon_y19_32x32_custom",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:[Object(i.jsx)("rect",{fill:"#6001D2",x:"0",y:"0",width:"32",height:"32"}),Object(i.jsxs)("g",{id:"y!",transform:"translate(5.000000, 6.000000)",children:[Object(i.jsx)("polygon",{id:"Fill-1",fill:"#FFFFFF",points:"9.70835927 5 7.04604411 11.4197051 4.40657437 5 0 5 4.91176421 16.0265583 3.14442407 20 7.45914574 20 14 5"}),Object(i.jsxs)("g",{id:"!",transform:"translate(12.000000, 0.000000)",children:[Object(i.jsx)("path",{d:"M2.88747609,10.8773778 C1.30323696,10.8773778 0.114280435,12.0684889 0.114280435,13.4547111 C0.114280435,14.8184889 1.25660652,15.9449333 2.79421522,15.9449333 C4.37917174,15.9449333 5.56741087,14.7756 5.56741087,13.3678222 C5.56741087,11.9818222 4.42580217,10.8773778 2.88747609,10.8773778",id:"Fill-2",fill:"#FFFFFF"}),Object(i.jsxs)("g",{id:"Group-6",transform:"translate(1.434783, 0.000000)",children:[Object(i.jsx)("mask",{id:"mask-2",fill:"white",children:Object(i.jsx)("use",{xlinkHref:"#path-1"})}),Object(i.jsx)("g",{id:"Clip-5"}),Object(i.jsx)("polygon",{id:"Fill-4",fill:"#FFFFFF",mask:"url(#mask-2)",points:"4.55194348 0.0930888889 0.171073913 9.92442222 5.06487826 9.92442222 9.4455087 0.0930888889"})]})]})]})]})]})}),Object(i.jsx)("div",{children:"  Log in with Yahoo"})]}),Object(i.jsxs)("div",{className:"loginbuttons",children:[Object(i.jsx)("div",{className:"socialIcons",onClick:function(t){e.signInWithTwitter()},children:Object(i.jsx)("svg",{viewBox:"0 0 24 24",width:"32px",height:"32px",className:"twitter",children:Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})})})}),Object(i.jsx)("div",{children:"  Log in with Twitter"})]})]}),Object(i.jsxs)("form",{onSubmit:this.signInHandler,children:[Object(i.jsx)("div",{children:"Username"}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{required:!0,type:"email",onChange:function(t){return e.onChangeHandlerUsername(t)}})}),Object(i.jsxs)("div",{children:["Password ",Object(i.jsx)("span",{className:"forgotPassword",onClick:function(t){e.forgotPasswordHandler()},children:"Forgot Password"})]}),Object(i.jsx)("input",{type:"password",required:!0,onChange:function(t){return e.onChangeHandlerPassword(t)}}),Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"submit",value:"Log in"}),"  "]})]}),Object(i.jsx)("div",{children:null!==this.state.error&&Object(i.jsx)("div",{children:window.alert(this.state.error)})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Don't have an account?"}),Object(i.jsx)("span",{className:"signUpLink",onClick:function(t){e.signupHandler()},children:" Sign up "})," "]})]})]})]});var t=this.state;t.prayerlist,t.view;return Object(i.jsx)(r.a,{basename:"/prayter-reactjs",children:Object(i.jsxs)(I.d,{children:[Object(i.jsxs)(I.b,{exact:!0,path:"/",children:[" ",Object(i.jsx)(I.a,{to:"/home"})," "]}),Object(i.jsxs)(I.b,{exact:!0,path:"/home",children:[" ",Object(i.jsx)(x,{})," "]}),Object(i.jsxs)(I.b,{exact:!0,path:"/compose/tweet",children:[" ",Object(i.jsx)(O,{})," "]}),Object(i.jsxs)(I.b,{exact:!0,path:"/compose/tweet",children:[" ",Object(i.jsx)(O,{})," "]})]})})}}]),n}(s.Component),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};c.a.render(Object(i.jsx)(r.a,{children:Object(i.jsx)(P,{})}),document.getElementById("root")),H()}},[[54,1,2]]]);
//# sourceMappingURL=main.0abf91c0.chunk.js.map