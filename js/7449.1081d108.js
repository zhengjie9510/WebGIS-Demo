"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[7449],{37449:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var i=t(73396);const o=e=>((0,i.dD)("data-v-696b385c"),e=e(),(0,i.Cn)(),e),c={class:"container"},s=o((()=>(0,i._)("canvas",{id:"c"},null,-1))),l=[s];function a(e,n,t,o,s,a){return(0,i.wg)(),(0,i.iD)("div",c,l)}var d=t(11114),r={mounted(){this.init()},methods:{init(){const e=document.querySelector("#c"),n=new d.xsS,t=new d.cPb(45,e.clientWidth/e.clientHeight,.1,1e4);t.position.y=-50,t.position.z=50,t.lookAt(0,0,0),n.add(t);const i=new d.CP7({canvas:e,antialias:!0});i.setSize(e.innerWidth,e.innerHeight),i.setPixelRatio(window.devicePixelRatio);const o=12,c=8,s=new d.bnF;s.moveTo(-o/2,-c/2),s.lineTo(-o/2,c/2),s.lineTo(o/2,c/2),s.lineTo(o/2,-c/2),s.lineTo(-o/2,-c/2);const l={steps:1,depth:1,bevelEnabled:!0,bevelThickness:1,bevelSize:0,bevelOffset:0,bevelSegments:1},a=new d.O7d(s,l),r=new d.vBJ({color:65280}),u=new d.vBJ({color:255}),h=new d.Kj0(a,[r,u]);function v(){if(w(i)){const e=i.domElement;t.aspect=e.clientWidth/e.clientHeight,t.updateProjectionMatrix()}h.rotateZ(.01),i.render(n,t),requestAnimationFrame(v)}function w(e){const n=e.domElement,t=n.clientWidth,i=n.clientHeight,o=n.width!==t||n.height!==i;return o&&e.setSize(t,i,!1),o}n.add(h),v()}}},u=t(40089);const h=(0,u.Z)(r,[["render",a],["__scopeId","data-v-696b385c"]]);var v=h}}]);
//# sourceMappingURL=7449.1081d108.js.map