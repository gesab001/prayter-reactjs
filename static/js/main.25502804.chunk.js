(this.webpackJsonpprayter=this.webpackJsonpprayter||[]).push([[0],{35:function(e,t,n){},41:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(2),c=n(28),r=n.n(c),s=n(14),o=(n(35),n(12)),d=n(13),l=n(16),u=n(15),h=n(22);n(36),n(38);h.a.initializeApp({apiKey:"AIzaSyAE2tUZXM3GPw9Jjy3G5y4Fp7MINMaO-j8",authDomain:"pray-290920.firebaseapp.com",databaseURL:"https://pray-290920.firebaseio.com",projectId:"pray-290920",storageBucket:"pray-290920.appspot.com",messagingSenderId:"951976358196",appId:"1:951976358196:web:4686903027ee94f7ea3561",measurementId:"G-TRF9JGHQCR"});var j=h.a.auth(),b=h.a.firestore(),f=function(e,t){console.log("add: "+e);var n=b.collection("rooms").doc(e).collection("private").doc(t.userId).collection("messages");n.add({author:t.author,userId:t.userId,message:t.message,date:t.date,recurring:t.recurring}).then((function(e){console.log(n,t.message,"private",t.date,t.userId,e.id,t.recurring)})).catch((function(e){console.error("Error adding document: ",e)}))},g=function(e,t,n){b.collection("rooms").doc(e).collection("private").doc(t).collection("messages").doc(n).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))},m=(n(41),n(17)),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).componentDidMount=function(){i.unsubscribe=b.collection("rooms").doc("fasting").collection("private").doc(j.currentUser.uid).collection("messages").orderBy("date","desc").onSnapshot(i.onDataChange)},i.newFastHandler=function(e){var t="Dear heavenly Father, help me to fast from "+e.currentTarget.innerHTML+" for 60 days, in Jesus' name, Amen";i.setState({newfast:t})},i.addFast=function(e){console.log("add: "+i.state.newfast);var t=j.currentUser.email,n=j.currentUser.uid,a=i.state.newfast,c=Date.now();f("fasting",{author:t,userId:n,message:a,date:c,recurring:!1})},i.deleteFast=function(e,t){console.log("remove: "+t);var n=j.currentUser.uid;g("fasting",n,t)},i.getDate=function(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},i.getEndDate=function(e){e+=5184e6;return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},i.onDataChange=i.onDataChange.bind(Object(m.a)(i)),i.state={newfast:null,fastlist:[],inputField:null},i.unsubscribe=void 0,i}return Object(d.a)(n,[{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"onDataChange",value:function(e){var t=this.state.fastlist;e.docChanges().forEach((function(e){var n={id:e.doc.id,item:e.doc.data()};if("added"===e.type&&(console.log("New prayer: ",e.doc.id),t.unshift(n)),"modified"===e.type&&console.log("Modified prayer: ",e.doc.data()),"removed"===e.type){console.log("Removed prayer: ",e.doc.data());var i=t.filter((function(e,t,i){return e.id!=n.id}));t=i}})),this.setState({fastlist:t})}},{key:"render",value:function(){var e=this;this.state.fastlist;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(s.b,{to:"/home",children:"Cancel"}),Object(i.jsx)("h1",{children:"New fast"}),Object(i.jsx)("div",{children:"Dear heavenly Father, help me to fast from  "}),Object(i.jsx)("div",{contentEditable:!0,onInput:function(t){return e.newFastHandler(t)}}),Object(i.jsx)("div",{children:"for 60 days, in Jesus' name, Amen."}),Object(i.jsx)("button",{onClick:function(t){e.addFast(t)},children:"Send"})]})})}}]),n}(a.Component),p=(n(46),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).componentDidMount=function(){i.unsubscribe=b.collection("rooms").doc("prayer").collection("private").doc(j.currentUser.uid).collection("messages").orderBy("date","desc").limit(3).onSnapshot(i.onDataChange),i.unsubscribe2=b.collection("rooms").doc("fasting").collection("private").doc(j.currentUser.uid).collection("messages").orderBy("date","desc").limit(3).onSnapshot(i.onDataChange2)},i.deleteItem=function(e,t,n){if("cancel this item"==prompt("type: cancel this item")){console.log("remove: "+n);var i=j.currentUser.uid;g(t,i,n),alert("item deleted")}else alert("item not deleted")},i.getStartDate=function(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},i.getEndDate=function(e){e+=5184e6;return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},i.onDataChange=i.onDataChange.bind(Object(m.a)(i)),i.onDataChange2=i.onDataChange2.bind(Object(m.a)(i)),i.state={newprayer:null,list:[],list2:[]},i.unsubscribe=void 0,i.unsubscribe2=void 0,i}return Object(d.a)(n,[{key:"componentWillUnmount",value:function(){this.unsubscribe(),this.unsubscribe2()}},{key:"onDataChange",value:function(e){var t=this.state.list;e.docChanges().forEach((function(e){var n={id:e.doc.id,item:e.doc.data()};if("added"===e.type&&(console.log("New prayer: ",e.doc.data()),t.unshift(n)),"modified"===e.type&&console.log("Modified prayer: ",e.doc.data()),"removed"===e.type){console.log("Removed prayer: ",e.doc.data());var i=t.filter((function(e,t,i){return e.id!=n.id}));t=i}})),this.setState({list:t})}},{key:"onDataChange2",value:function(e){var t=this.state.list2;e.docChanges().forEach((function(e){var n={id:e.doc.id,item:e.doc.data()};if("added"===e.type&&(console.log("New prayer: ",e.doc.data()),t.unshift(n)),"modified"===e.type&&console.log("Modified prayer: ",e.doc.data()),"removed"===e.type){console.log("Removed prayer: ",e.doc.data());var i=t.filter((function(e,t,i){return e.id!=n.id}));t=i}})),this.setState({list2:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.list,a=t.list2,c={position:"relative",zIndex:"1"};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Prayer"}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:n&&n.map((function(t,n){return Object(i.jsx)("li",{children:Object(i.jsxs)("div",{class:"article",children:[Object(i.jsxs)("p",{children:["Submitted: ",e.getStartDate(t.item.date)]}),Object(i.jsx)("p",{children:t.item.message}),Object(i.jsx)("button",{onClick:function(n){e.deleteItem(n,"prayer",t.id)},children:"Delete"})]})})}))})}),Object(i.jsx)("h1",{children:"Fasting"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("ul",{children:a&&a.map((function(t,n){return Object(i.jsx)("li",{children:Object(i.jsxs)("div",{class:"article",children:[Object(i.jsxs)("p",{children:["From: ",e.getStartDate(t.item.date)]}),Object(i.jsxs)("p",{children:["To: ",e.getEndDate(t.item.date)]}),Object(i.jsx)("p",{children:t.item.message}),Object(i.jsx)("button",{style:c,onClick:function(n){e.deleteItem(n,"fasting",t.id)},children:"Delete"})]})})}))}),Object(i.jsx)("div",{style:{height:"calc(6.5625rem)"}})]})]})}}]),n}(a.Component)),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.unsubscribe=b.collection("rooms").doc("fasting").collection("private").doc(j.currentUser.uid).collection("messages").orderBy("date","desc").onSnapshot(a.onDataChange)},a.getDate=function(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},a.getEndDate=function(e){e+=5184e6;return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},a.signOutHandler=function(e){j.signOut(),window.location.reload(!1)},a.onViewChange=function(e){e.preventDefault(),a.setState({view:e.currentTarget.value})},a.renderSwitch=function(e){return Object(i.jsx)(p,{room:e})},a.setActiveButton=function(e){alert("hello")},a.onDataChange=a.onDataChange.bind(Object(m.a)(a)),a.state={newfast:null,fastlist:[],inputField:null,view:"prayer"},a.unsubscribe=void 0,a}return Object(d.a)(n,[{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"onDataChange",value:function(e){var t=this.state.fastlist;e.docChanges().forEach((function(e){var n={id:e.doc.id,item:e.doc.data()};if("added"===e.type&&(console.log("New prayer: ",e.doc.id),t.unshift(n)),"modified"===e.type&&console.log("Modified prayer: ",e.doc.data()),"removed"===e.type){console.log("Removed prayer: ",e.doc.data());var i=t.filter((function(e,t,i){return e.id!=n.id}));t=i}})),this.setState({fastlist:t})}},{key:"render",value:function(){var e=this,t=this.state,n=(t.fastlist,t.view);return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"button",onClick:function(t){e.signOutHandler(t)},children:"Sign out "}),this.renderSwitch(n),Object(i.jsxs)("div",{class:"bottom-menu",children:[Object(i.jsx)("div",{class:"floating-button-container",children:Object(i.jsx)(s.b,{to:"/compose/tweet",children:Object(i.jsx)("div",{class:"floating-button",children:Object(i.jsx)("svg",{viewBox:"0 0 24 24",children:Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"})})})})})}),Object(i.jsxs)("nav",{class:"nav-menu",children:[Object(i.jsx)("div",{class:"nav-button",onClick:function(t){e.setActiveButton(t)},children:Object(i.jsx)("svg",{class:"svg-nav-button",viewBox:"0 0 24 24",children:Object(i.jsxs)("g",{children:[Object(i.jsx)("path",{d:"M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"}),Object(i.jsx)("path",{d:"M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"})]})})}),Object(i.jsx)("div",{class:"nav-button",onClick:function(t){e.setActiveButton(t)},children:Object(i.jsx)("svg",{class:"svg-nav-button",viewBox:"0 0 24 24",children:Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})})})}),Object(i.jsx)("div",{class:"nav-button",onClick:function(t){e.setActiveButton(t)},children:Object(i.jsx)("svg",{class:"svg-nav-button",viewBox:"0 0 24 24",children:Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"})})})}),Object(i.jsx)("div",{class:"nav-button",onClick:function(t){e.setActiveButton(t)},children:Object(i.jsx)("svg",{class:"svg-nav-button",viewBox:"0 0 24 24",children:Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"})})})})]})]})]})}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).newFastHandler=function(e){var t="Dear heavenly Father, help me to fast from "+e.currentTarget.innerHTML+" for 60 days, in Jesus' name, Amen";i.setState({newfast:t}),i.setState({inputField:e.currentTarget})},i.addFast=function(e){console.log("add: "+i.state.newfast);var t=j.currentUser.email,n=j.currentUser.uid,a=i.state.newfast,c=Date.now();f("fasting",{author:t,userId:n,message:a,date:c,recurring:!1}),i.state.inputField.innerHTML=""},i.newprayerHandler=function(e){var t="Dear heavenly Father,  "+e.currentTarget.innerHTML+" in Jesus' name, Amen";i.setState({message:t}),i.setState({inputField:e.currentTarget})},i.addPrayer=function(e){console.log("add: "+i.state.message);var t=j.currentUser.email,n=j.currentUser.uid,a=i.state.message,c=Date.now();f("prayer",{author:t,userId:n,message:a,date:c,recurring:!1}),i.state.inputField.innerHTML=""},i.state={newfast:null,fastlist:[],inputField:null},i}return Object(d.a)(n,[{key:"render",value:function(){var e=this;this.state.fastlist;return Object(i.jsxs)("div",{children:[Object(i.jsx)(s.b,{to:"/home",children:"Back"}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("label",{children:["Prayer",Object(i.jsx)("input",{type:"radio",id:"prayer",name:"view",value:"prayer",onChange:function(t){return e.onViewChange(t)}})]}),Object(i.jsxs)("label",{children:["Fasting",Object(i.jsx)("input",{type:"radio",id:"fasting",name:"view",value:"fasting",onChange:function(t){return e.onViewChange(t)}})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"New fast"}),Object(i.jsx)("div",{children:"Dear heavenly Father, help me to fast from  "}),Object(i.jsx)("div",{contentEditable:!0,onInput:function(t){return e.newFastHandler(t)}}),Object(i.jsx)("div",{children:"for 60 days, in Jesus' name, Amen."}),Object(i.jsx)("button",{onClick:function(t){e.addFast(t)},children:"Send"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"New prayer"}),Object(i.jsx)("div",{children:"Dear heavenly Father, "}),Object(i.jsx)("div",{ref:this.inputField,contentEditable:!0,onInput:function(t){return e.newprayerHandler(t)}}),Object(i.jsx)("div",{children:"in Jesus' name, Amen."}),Object(i.jsx)("button",{onClick:function(t){e.addPrayer(t)},children:"Send"})]})]})}}]),n}(a.Component),y=n(5),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){j.onAuthStateChanged((function(e){null!=e&&(console.log(e.uid),a.setState({user:e}))}))},a.onChangeHandlerUsername=function(e){var t=e.currentTarget.value;a.setState({username:t})},a.onChangeHandlerPassword=function(e){var t=e.currentTarget.value;console.log("password: ",t),a.setState({password:t})},a.signInHandler=function(e){e.preventDefault(),j.signInWithEmailAndPassword(a.state.username,a.state.password).catch((function(e){console.log("Error signing in with password and email",e),a.setState({error:e})}))},a.onViewChange=function(e){e.preventDefault(),a.setState({view:e.currentTarget.value})},a.signOutHandler=function(e){j.signOut(),a.setState({user:null}),window.location.reload(!1)},a.renderSwitch=function(e){switch(e){case"fasting":return Object(i.jsx)(v,{});default:return Object(i.jsx)(p,{})}},a.state={user:null,username:null,password:null,error:null,view:"prayer"},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;if(null===this.state.user)return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:this.signInHandler,children:[Object(i.jsx)("div",{children:"Username"}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{required:!0,type:"email",onChange:function(t){return e.onChangeHandlerUsername(t)}})}),Object(i.jsx)("div",{children:"Password"}),Object(i.jsx)("input",{type:"password",required:!0,onChange:function(t){return e.onChangeHandlerPassword(t)}}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"submit",value:"Sign in"})})]})});var t=this.state;t.prayerlist,t.view;return Object(i.jsx)(s.a,{basename:"/prayter-reactjs",children:Object(i.jsxs)(y.d,{children:[Object(i.jsxs)(y.b,{exact:!0,path:"/",children:[" ",Object(i.jsx)(y.a,{to:"/home"})," "]}),Object(i.jsxs)(y.b,{exact:!0,path:"/home",children:[" ",Object(i.jsx)(O,{})," "]}),Object(i.jsxs)(y.b,{exact:!0,path:"/compose/tweet",children:[" ",Object(i.jsx)(x,{})," "]})]})})}}]),n}(a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(i.jsx)(s.a,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),C()}},[[47,1,2]]]);
//# sourceMappingURL=main.25502804.chunk.js.map