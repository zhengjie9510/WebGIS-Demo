"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[820],{85820:function(e,i,o){o.r(i),o.d(i,{default:function(){return w}});var t=o(73396);const n={id:"cesiumContainer"};function r(e,i,o,r,s,c){return(0,t.wg)(),(0,t.iD)("div",n)}var s=o(42891),c=o(91845),l=o(76377),a=o(92887),d=o(65733),u=o(69324),p=o(56114),g=o(51948),h={data(){return{path:"/webgis-demo/"}},mounted(){this.init()},methods:{init(){var e=new s.Z("cesiumContainer");c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0,e.scene.debugShowFramesPerSecond=!0;const i=e.scene.primitives.add(new l.Z({url:this.path+"SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json"}));i.style=new a.Z({color:{conditions:[["${Height} >= 83","color('purple')"],["${Height} >= 80","color('red')"],["${Height} >= 70","color('orange')"],["${Height} >= 12","color('yellow')"],["${Height} >= 7","color('lime')"],["${Height} >= 1","color('DARKORANGE')"],["true","color('blue')"]]}}),e.zoomTo(i),console.log(this.path);const o={primitive:void 0,originalColor:new d.Z},t=new u.Z(e.scene.canvas);t.setInputAction((i=>{const t=e.scene.pick(i.position);o.primitive&&(o.primitive.color=o.originColor,o.primitive=void 0,o.originColor=void 0),p.Z(t)&&(o.primitive=t,o.originColor=d.Z.clone(t.color),t.color=d.Z.CYAN)}),g.Z.LEFT_CLICK)}}},m=o(40089);const v=(0,m.Z)(h,[["render",r],["__scopeId","data-v-21f4c32c"]]);var w=v}}]);
//# sourceMappingURL=820.97bb071d.js.map