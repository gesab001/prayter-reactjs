(this.webpackJsonpprayter=this.webpackJsonpprayter||[]).push([[0],{35:function(e,t,n){},41:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(2),r=n(28),o=n.n(r),c=n(14),s=(n(35),n(12)),d=n(13),l=n(16),u=n(15),h=n(22);n(36),n(38);h.a.initializeApp({apiKey:"AIzaSyAE2tUZXM3GPw9Jjy3G5y4Fp7MINMaO-j8",authDomain:"pray-290920.firebaseapp.com",databaseURL:"https://pray-290920.firebaseio.com",projectId:"pray-290920",storageBucket:"pray-290920.appspot.com",messagingSenderId:"951976358196",appId:"1:951976358196:web:4686903027ee94f7ea3561",measurementId:"G-TRF9JGHQCR"});var j=h.a.auth(),f=h.a.firestore(),m=function(e,t){console.log("add: "+e);var n=f.collection("rooms").doc(e).collection("private").doc(t.userId).collection("messages");n.add({author:t.author,userId:t.userId,message:t.message,date:t.date,recurring:t.recurring}).then((function(e){console.log(n,t.message,"private",t.date,t.userId,e.id,t.recurring)})).catch((function(e){console.error("Error adding document: ",e)}))},g=function(e,t,n){f.collection("rooms").doc(e).collection("private").doc(t).collection("messages").doc(n).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))},b=(n(41),n(17)),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).componentDidMount=function(){i.unsubscribe=f.collection("rooms").doc("fasting").collection("private").doc(j.currentUser.uid).collection("messages").orderBy("date","desc").onSnapshot(i.onDataChange)},i.newFastHandler=function(e){var t="Dear heavenly Father, help me to fast from "+e.currentTarget.innerHTML+" for 60 days, in Jesus' name, Amen";i.setState({newfast:t})},i.addFast=function(e){console.log("add: "+i.state.newfast);var t=j.currentUser.email,n=j.currentUser.uid,a=i.state.newfast,r=Date.now();m("fasting",{author:t,userId:n,message:a,date:r,recurring:!1})},i.deleteFast=function(e,t){console.log("remove: "+t);var n=j.currentUser.uid;g("fasting",n,t)},i.getDate=function(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},i.getEndDate=function(e){e+=5184e6;return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},i.onDataChange=i.onDataChange.bind(Object(b.a)(i)),i.state={newfast:null,fastlist:[],inputField:null},i.unsubscribe=void 0,i}return Object(d.a)(n,[{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"onDataChange",value:function(e){var t=this.state.fastlist;e.docChanges().forEach((function(e){var n={id:e.doc.id,item:e.doc.data()};if("added"===e.type&&(console.log("New prayer: ",e.doc.id),t.unshift(n)),"modified"===e.type&&console.log("Modified prayer: ",e.doc.data()),"removed"===e.type){console.log("Removed prayer: ",e.doc.data());var i=t.filter((function(e,t,i){return e.id!=n.id}));t=i}})),this.setState({fastlist:t})}},{key:"render",value:function(){var e=this;this.state.fastlist;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(c.b,{to:"/home",children:"Cancel"}),Object(i.jsx)("h1",{children:"New fast"}),Object(i.jsx)("div",{children:"Dear heavenly Father, help me to fast from  "}),Object(i.jsx)("div",{contentEditable:!0,onInput:function(t){return e.newFastHandler(t)}}),Object(i.jsx)("div",{children:"for 60 days, in Jesus' name, Amen."}),Object(i.jsx)("button",{onClick:function(t){e.addFast(t)},children:"Send"})]})})}}]),n}(a.Component),v=(n(46),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).componentDidMount=function(){i.unsubscribe=f.collection("rooms").doc("prayer").collection("private").doc(j.currentUser.uid).collection("messages").orderBy("date","desc").limit(3).onSnapshot(i.onDataChange),i.unsubscribe2=f.collection("rooms").doc("fasting").collection("private").doc(j.currentUser.uid).collection("messages").orderBy("date","desc").limit(3).onSnapshot(i.onDataChange2)},i.deleteItem=function(e,t,n){if("cancel this item"==prompt("type: cancel this item")){console.log("remove: "+n);var i=j.currentUser.uid;g(t,i,n),alert("item deleted")}else alert("item not deleted")},i.getStartDate=function(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},i.getEndDate=function(e){e+=5184e6;return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},i.onDataChange=i.onDataChange.bind(Object(b.a)(i)),i.onDataChange2=i.onDataChange2.bind(Object(b.a)(i)),i.state={newprayer:null,list:[],list2:[]},i.unsubscribe=void 0,i.unsubscribe2=void 0,i}return Object(d.a)(n,[{key:"componentWillUnmount",value:function(){this.unsubscribe(),this.unsubscribe2()}},{key:"onDataChange",value:function(e){var t=this.state.list;e.docChanges().forEach((function(e){var n={id:e.doc.id,item:e.doc.data()};if("added"===e.type&&(console.log("New prayer: ",e.doc.data()),t.unshift(n)),"modified"===e.type&&console.log("Modified prayer: ",e.doc.data()),"removed"===e.type){console.log("Removed prayer: ",e.doc.data());var i=t.filter((function(e,t,i){return e.id!=n.id}));t=i}})),this.setState({list:t})}},{key:"onDataChange2",value:function(e){var t=this.state.list2;e.docChanges().forEach((function(e){var n={id:e.doc.id,item:e.doc.data()};if("added"===e.type&&(console.log("New prayer: ",e.doc.data()),t.unshift(n)),"modified"===e.type&&console.log("Modified prayer: ",e.doc.data()),"removed"===e.type){console.log("Removed prayer: ",e.doc.data());var i=t.filter((function(e,t,i){return e.id!=n.id}));t=i}})),this.setState({list2:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.list,a=t.list2,r={position:"relative",zIndex:"1"};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Prayer"}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:n&&n.map((function(t,n){return Object(i.jsx)("li",{children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["Submitted: ",e.getStartDate(t.item.date)]}),Object(i.jsx)("p",{children:t.item.message}),Object(i.jsx)("button",{onClick:function(n){e.deleteItem(n,"prayer",t.id)},children:"Delete"})]})})}))})}),Object(i.jsx)("h1",{children:"Fasting"}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:a&&a.map((function(t,n){return Object(i.jsx)("li",{children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["From: ",e.getStartDate(t.item.date)]}),Object(i.jsxs)("p",{children:["To: ",e.getEndDate(t.item.date)]}),Object(i.jsx)("p",{children:t.item.message}),Object(i.jsx)("button",{style:r,onClick:function(n){e.deleteItem(n,"fasting",t.id)},children:"Delete"})]})})}))})})]})}}]),n}(a.Component)),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.unsubscribe=f.collection("rooms").doc("fasting").collection("private").doc(j.currentUser.uid).collection("messages").orderBy("date","desc").onSnapshot(a.onDataChange)},a.getDate=function(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},a.getEndDate=function(e){e+=5184e6;return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)},a.signOutHandler=function(e){j.signOut(),window.location.reload(!1)},a.onViewChange=function(e){e.preventDefault(),a.setState({view:e.currentTarget.value})},a.renderSwitch=function(e){return Object(i.jsx)(v,{room:e})},a.onDataChange=a.onDataChange.bind(Object(b.a)(a)),a.state={newfast:null,fastlist:[],inputField:null,view:"prayer"},a.unsubscribe=void 0,a}return Object(d.a)(n,[{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"onDataChange",value:function(e){var t=this.state.fastlist;e.docChanges().forEach((function(e){var n={id:e.doc.id,item:e.doc.data()};if("added"===e.type&&(console.log("New prayer: ",e.doc.id),t.unshift(n)),"modified"===e.type&&console.log("Modified prayer: ",e.doc.data()),"removed"===e.type){console.log("Removed prayer: ",e.doc.data());var i=t.filter((function(e,t,i){return e.id!=n.id}));t=i}})),this.setState({fastlist:t})}},{key:"render",value:function(){var e=this,t=this.state,n=(t.fastlist,t.view);return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"button",onClick:function(t){e.signOutHandler(t)},children:"Sign out "}),this.renderSwitch(n),Object(i.jsx)("div",{class:"floating-button-container",children:Object(i.jsx)(c.b,{to:"/compose/tweet",children:Object(i.jsx)("div",{class:"floating-button",children:Object(i.jsx)("svg",{viewBox:"0 0 24 24",children:Object(i.jsx)("g",{children:Object(i.jsx)("path",{d:"M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"})})})})})})]})}}]),n}(a.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).newFastHandler=function(e){var t="Dear heavenly Father, help me to fast from "+e.currentTarget.innerHTML+" for 60 days, in Jesus' name, Amen";i.setState({newfast:t}),i.setState({inputField:e.currentTarget})},i.addFast=function(e){console.log("add: "+i.state.newfast);var t=j.currentUser.email,n=j.currentUser.uid,a=i.state.newfast,r=Date.now();m("fasting",{author:t,userId:n,message:a,date:r,recurring:!1}),i.state.inputField.innerHTML=""},i.newprayerHandler=function(e){var t="Dear heavenly Father,  "+e.currentTarget.innerHTML+" in Jesus' name, Amen";i.setState({message:t}),i.setState({inputField:e.currentTarget})},i.addPrayer=function(e){console.log("add: "+i.state.message);var t=j.currentUser.email,n=j.currentUser.uid,a=i.state.message,r=Date.now();m("prayer",{author:t,userId:n,message:a,date:r,recurring:!1}),i.state.inputField.innerHTML=""},i.state={newfast:null,fastlist:[],inputField:null},i}return Object(d.a)(n,[{key:"render",value:function(){var e=this;this.state.fastlist;return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.b,{to:"/home",children:"Back"}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("label",{children:["Prayer",Object(i.jsx)("input",{type:"radio",id:"prayer",name:"view",value:"prayer",onChange:function(t){return e.onViewChange(t)}})]}),Object(i.jsxs)("label",{children:["Fasting",Object(i.jsx)("input",{type:"radio",id:"fasting",name:"view",value:"fasting",onChange:function(t){return e.onViewChange(t)}})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"New fast"}),Object(i.jsx)("div",{children:"Dear heavenly Father, help me to fast from  "}),Object(i.jsx)("div",{contentEditable:!0,onInput:function(t){return e.newFastHandler(t)}}),Object(i.jsx)("div",{children:"for 60 days, in Jesus' name, Amen."}),Object(i.jsx)("button",{onClick:function(t){e.addFast(t)},children:"Send"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"New prayer"}),Object(i.jsx)("div",{children:"Dear heavenly Father, "}),Object(i.jsx)("div",{ref:this.inputField,contentEditable:!0,onInput:function(t){return e.newprayerHandler(t)}}),Object(i.jsx)("div",{children:"in Jesus' name, Amen."}),Object(i.jsx)("button",{onClick:function(t){e.addPrayer(t)},children:"Send"})]})]})}}]),n}(a.Component),x=n(5),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){j.onAuthStateChanged((function(e){null!=e&&(console.log(e.uid),a.setState({user:e}))}))},a.onChangeHandlerUsername=function(e){var t=e.currentTarget.value;a.setState({username:t})},a.onChangeHandlerPassword=function(e){var t=e.currentTarget.value;console.log("password: ",t),a.setState({password:t})},a.signInHandler=function(e){e.preventDefault(),j.signInWithEmailAndPassword(a.state.username,a.state.password).catch((function(e){console.log("Error signing in with password and email",e),a.setState({error:e})}))},a.onViewChange=function(e){e.preventDefault(),a.setState({view:e.currentTarget.value})},a.signOutHandler=function(e){j.signOut(),a.setState({user:null}),window.location.reload(!1)},a.renderSwitch=function(e){switch(e){case"fasting":return Object(i.jsx)(p,{});default:return Object(i.jsx)(v,{})}},a.state={user:null,username:null,password:null,error:null,view:"prayer"},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;if(null===this.state.user)return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:this.signInHandler,children:[Object(i.jsx)("div",{children:"Username"}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{required:!0,type:"email",onChange:function(t){return e.onChangeHandlerUsername(t)}})}),Object(i.jsx)("div",{children:"Password"}),Object(i.jsx)("input",{type:"password",required:!0,onChange:function(t){return e.onChangeHandlerPassword(t)}}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"submit",value:"Sign in"})})]})});var t=this.state;t.prayerlist,t.view;return Object(i.jsx)(c.a,{basename:"/prayter-reactjs",children:Object(i.jsxs)(x.d,{children:[Object(i.jsxs)(x.b,{exact:!0,path:"/",children:[" ",Object(i.jsx)(x.a,{to:"/home"})," "]}),Object(i.jsxs)(x.b,{exact:!0,path:"/home",children:[" ",Object(i.jsx)(O,{})," "]}),Object(i.jsxs)(x.b,{exact:!0,path:"/compose/tweet",children:[" ",Object(i.jsx)(y,{})," "]})]})})}}]),n}(a.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),r(e),o(e)}))};o.a.render(Object(i.jsx)(c.a,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),D()}},[[47,1,2]]]);
//# sourceMappingURL=main.718013ec.chunk.js.map