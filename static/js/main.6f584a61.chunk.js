(this.webpackJsonpprayter=this.webpackJsonpprayter||[]).push([[0],{38:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(2),s=r(27),c=r.n(s),l=r(7),i=(r(38),r(9)),u=r.n(i),o=r(15),b=r(28),d=r(29),j=r(32),p=r(31),m=r(25),h=r(19);r(40),r(42);h.a.initializeApp({apiKey:"AIzaSyAE2tUZXM3GPw9Jjy3G5y4Fp7MINMaO-j8",authDomain:"pray-290920.firebaseapp.com",databaseURL:"https://pray-290920.firebaseio.com",projectId:"pray-290920",storageBucket:"pray-290920.appspot.com",messagingSenderId:"951976358196",appId:"1:951976358196:web:4686903027ee94f7ea3561",measurementId:"G-TRF9JGHQCR"});var x=h.a.auth(),O=h.a.firestore(),f=O,g=new h.a.auth.GoogleAuthProvider,w=function(){x.signInWithPopup(g)},v=function(){var e=Object(o.a)(u.a.mark((function e(t,r){var a,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=O.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=16;break}return n=t.email,s=t.displayName,e.prev=8,e.next=11,a.set(Object(m.a)({displayName:s,email:n},r));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.error("Error creating user document",e.t0);case 16:return e.abrupt("return",y(t));case 17:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t,r){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.uid){e.next=2;break}return e.abrupt("return",null);case 2:return t.email,e.next=5,f.collection("rooms").doc("prayer").collection("private").doc(t.uid).collection("messages").orderBy("date","asc").limit(5);case 5:return r=e.sent,e.abrupt("return",{user:t.email,private:r});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=Object(n.createContext)({user:null}),S=function(e){Object(j.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(b.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={user:null},e.componentDidMount=Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x.onAuthStateChanged(function(){var t=Object(o.a)(u.a.mark((function t(r){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(r);case 2:a=t.sent,e.setState({user:a}),console.log("userprovider"+e.state.user);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(r,[{key:"render",value:function(){return Object(a.jsx)(N.Provider,{value:this.state.user,children:this.props.children})}}]),r}(n.Component),E=r(5),k=r(8),P=function(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)(""),i=Object(k.a)(c,2),u=i[0],o=i[1],b=Object(n.useState)(null),d=Object(k.a)(b,2),j=d[0],p=d[1],m=function(e){var t=e.currentTarget,r=t.name,a=t.value;"userEmail"===r?s(a):"userPassword"===r&&o(a)};return Object(a.jsxs)("div",{className:"mt-8",children:[Object(a.jsx)("h1",{className:"text-3xl mb-2 text-center font-bold",children:"Sign In"}),Object(a.jsxs)("div",{className:"border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8",children:[null!==j&&Object(a.jsx)("div",{className:"py-4 bg-red-600 w-full text-white text-center mb-3",children:j}),Object(a.jsxs)("form",{className:"",children:[Object(a.jsx)("label",{htmlFor:"userEmail",className:"block",children:"Email:"}),Object(a.jsx)("input",{type:"email",className:"my-1 p-1 w-full",name:"userEmail",value:r,placeholder:"E.g: faruq123@gmail.com",id:"userEmail",onChange:function(e){return m(e)}}),Object(a.jsx)("label",{htmlFor:"userPassword",className:"block",children:"Password:"}),Object(a.jsx)("input",{type:"password",className:"mt-1 mb-3 p-1 w-full",name:"userPassword",value:u,placeholder:"Your Password",id:"userPassword",onChange:function(e){return m(e)}}),Object(a.jsx)("button",{className:"bg-green-400 hover:bg-green-500 w-full py-2 text-white",onClick:function(e){!function(e,t,r){e.preventDefault(),x.signInWithEmailAndPassword(t,r).catch((function(e){p("Error signing in with password and email!"),console.error("Error signing in with password and email",e)})),console.log("signed in")}(e,r,u)},children:"Sign in"})]}),Object(a.jsx)("p",{className:"text-center my-3",children:"or"}),Object(a.jsx)("button",{onClick:w,className:"bg-red-500 hover:bg-red-600 w-full py-2 text-white",children:"Sign in with Google"}),Object(a.jsxs)("p",{className:"text-center my-3",children:["Don't have an account?"," ",Object(a.jsx)(l.b,{to:"/signup",className:"text-blue-500 hover:text-blue-600",children:"Sign up here"})," ",Object(a.jsx)("br",{})," ",Object(a.jsx)(l.b,{to:"/passwordreset",className:"text-blue-500 hover:text-blue-600",children:"Forgot Password?"})]})]})]})},C=function(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)(""),i=Object(k.a)(c,2),b=i[0],d=i[1],j=Object(n.useState)(""),p=Object(k.a)(j,2),m=p[0],h=p[1],O=Object(n.useState)(null),f=Object(k.a)(O,2),g=f[0],w=f[1],y=function(){var e=Object(o.a)(u.a.mark((function e(t,r,a){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.createUserWithEmailAndPassword(r,a);case 4:n=e.sent,c=n.user,v(c,{displayName:m}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),w("Error Signing up with email and password"),console.log(e.t0);case 13:s(""),d(""),h("");case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,r,a){return e.apply(this,arguments)}}(),N=function(e){var t=e.currentTarget,r=t.name,a=t.value;"userEmail"===r?s(a):"userPassword"===r?d(a):"displayName"===r&&h(a)};return Object(a.jsxs)("div",{className:"mt-8",children:[Object(a.jsx)("h1",{className:"text-3xl mb-2 text-center font-bold",children:"Sign Up"}),Object(a.jsxs)("div",{className:"border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8",children:[null!==g&&Object(a.jsx)("div",{className:"py-4 bg-red-600 w-full text-white text-center mb-3",children:g}),Object(a.jsxs)("form",{className:"",children:[Object(a.jsx)("label",{htmlFor:"displayName",className:"block",children:"Display Name:"}),Object(a.jsx)("input",{type:"text",className:"my-1 p-1 w-full ",name:"displayName",value:m,placeholder:"E.g: Faruq",id:"displayName",onChange:function(e){return N(e)}}),Object(a.jsx)("label",{htmlFor:"userEmail",className:"block",children:"Email:"}),Object(a.jsx)("input",{type:"email",className:"my-1 p-1 w-full",name:"userEmail",value:r,placeholder:"E.g: faruq123@gmail.com",id:"userEmail",onChange:function(e){return N(e)}}),Object(a.jsx)("label",{htmlFor:"userPassword",className:"block",children:"Password:"}),Object(a.jsx)("input",{type:"password",className:"mt-1 mb-3 p-1 w-full",name:"userPassword",value:b,placeholder:"Your Password",id:"userPassword",onChange:function(e){return N(e)}}),Object(a.jsx)("button",{className:"bg-green-400 hover:bg-green-500 w-full py-2 text-white",onClick:function(e){y(e,r,b)},children:"Sign up"})]}),Object(a.jsx)("p",{className:"text-center my-3",children:"or"}),Object(a.jsx)("button",{className:"bg-red-500 hover:bg-red-600 w-full py-2 text-white",children:"Sign In with Google"}),Object(a.jsxs)("p",{className:"text-center my-3",children:["Already have an account?"," ",Object(a.jsx)(l.b,{to:"/",className:"text-blue-500 hover:text-blue-600",children:"Sign in here"})]})]})]})},I=function(){return Object(a.jsx)("div",{children:"profile page "})},F=function(){var e=Object(n.useState)(""),t=Object(k.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)(!1),i=Object(k.a)(c,2),u=i[0],o=i[1],b=Object(n.useState)(null),d=Object(k.a)(b,2),j=d[0],p=d[1];return Object(a.jsxs)("div",{className:"mt-8",children:[Object(a.jsx)("h1",{className:"text-xl text-center font-bold mb-3",children:"Reset your Password"}),Object(a.jsxs)("div",{className:"border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8",children:[Object(a.jsxs)("form",{action:"",children:[u&&Object(a.jsx)("div",{className:"py-3 bg-green-400 w-full text-white text-center mb-3",children:"An email has been sent to you!"}),null!==j&&Object(a.jsx)("div",{className:"py-3 bg-red-600 w-full text-white text-center mb-3",children:j}),Object(a.jsx)("label",{htmlFor:"userEmail",className:"w-full block",children:"Email:"}),Object(a.jsx)("input",{type:"email",name:"userEmail",id:"userEmail",value:r,placeholder:"Input your email",onChange:function(e){var t=e.currentTarget,r=t.name,a=t.value;"userEmail"===r&&s(a)},className:"mb-3 w-full px-1 py-2"}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),x.sendPasswordResetEmail(r).then((function(){o(!0),setTimeout((function(){o(!1)}),3e3)})).catch((function(){p("Error resetting password")}))},className:"w-full bg-blue-400 text-white py-3",children:"Send me a reset link"})]}),Object(a.jsx)(l.b,{to:"/",className:"my-2 text-blue-700 hover:text-blue-800 text-center block",children:"\u2190 back to sign in page"})]})]})},A=function(){var e=Object(n.useContext)(N),t=Object(n.useState)(""),r=Object(k.a)(t,2),s=r[0],c=r[1];return e.private.onSnapshot().then((function(e){var t=[];e.forEach((function(e){var r=e.data().message,a=(e.id,e.data().userId),n={message:r,messageType:"private",date:e.data().date,userId:a,recurring:e.data().recurring};t.push(n)})),c(t)})),Object(a.jsxs)("div",{children:["private",s.length]})},D=function(){Object(n.useContext)(N);return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"w-full py-3 bg-red-600 mt-4 text-white",onClick:function(){x.signOut()},children:"Sign out"}),Object(a.jsx)(I,{}),Object(a.jsx)(A,{})]})};var T=function(){return Object(n.useContext)(N)?Object(a.jsx)(D,{}):Object(a.jsx)(l.a,{basename:"/prayter-reactjs",children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/",children:"Sign in"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/signup",children:"Sign up"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/profile",children:"Profile"})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/passwordreset",children:"Password Reset"})})]}),Object(a.jsxs)(E.c,{children:[Object(a.jsxs)(E.a,{exact:!0,path:"/",children:[" ",Object(a.jsx)(P,{})," "]}),Object(a.jsxs)(E.a,{exact:!0,path:"/signin",children:[" ",Object(a.jsx)(P,{})," "]}),Object(a.jsxs)(E.a,{path:"/signup",children:[" ",Object(a.jsx)(C,{})," "]}),Object(a.jsxs)(E.a,{path:"/profile",children:[" ",Object(a.jsx)(I,{})," "]}),Object(a.jsxs)(E.a,{path:"/passwordreset",children:[" ",Object(a.jsx)(F,{})," "]})]})]})})};var G=function(){return Object(a.jsx)(S,{children:Object(a.jsx)(T,{})})},R=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,50)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))};c.a.render(Object(a.jsx)(l.a,{children:Object(a.jsx)(G,{})}),document.getElementById("root")),R()}},[[49,1,2]]]);
//# sourceMappingURL=main.6f584a61.chunk.js.map