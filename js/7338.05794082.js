"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[7338],{77338:function(e,n,o){o.r(n),o.d(n,{default:function(){return S}});var t=o(73396);const i={id:"cesiumContainer"};function r(e,n,o,r,a,c){return(0,t.wg)(),(0,t.iD)("div",i)}o(63408),o(14590);var a=o(89262),c=o(40985),s=o(52420),l=o(78393),d=o(25100),u=o(54117),m=o(40617),p=o(86337),v=o(85363),Z=o(121),w=o(67584),g=o(82104),h=o(61562),f=o(36284),y=o(92119),_=o(70805),b={mounted(){this.init()},methods:{init(){var e=new a.Z("cesiumContainer");c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;var n=e.scene,o=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),t=new Float32Array([.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1,1,1,1,1,1,1,1,1,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1]),i=new s.Z({position:new l.Z({componentDatatype:d.Z.DOUBLE,componentsPerAttribute:3,values:o}),color:new l.Z({componentDatatype:d.Z.FLOAT,componentsPerAttribute:3,values:t})}),r=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),b=new u.Z(new m.Z(0,0,0),2),P=new p.Z({attributes:i,indices:r,primitiveType:v.Z.TRIANGLES,boundingSphere:b}),D=Z.Z.multiplyByUniformScale(Z.Z.multiplyByTranslation(w.Z.eastNorthUpToFixedFrame(m.Z.fromDegrees(116.23,39.54)),new m.Z(0,0,25),new Z.Z),25,new Z.Z),S=new g.Z({geometry:P,modelMatrix:D});function A(){return"\n          in vec3 position3DHigh;\n          in vec3 position3DLow;\n          in float batchId;\n          in vec4 color;\n          out vec4 v_color;\n          void main() {\n              vec4 position = czm_modelViewProjectionRelativeToEye *czm_computePosition();\n              v_color = color;\n              gl_Position = position;\n          }"}function T(){return"\n          in vec4 v_color;\n          void main() {\n              vec4 color = czm_gammaCorrect(v_color);\n              out_FragColor = color;\n          }"}let L=new h.Z({translucent:!1,closed:!0,renderState:{blending:f.Z.PRE_MULTIPLIED_ALPHA_BLEND,depthTest:{enabled:!0},depthMask:!0},fragmentShaderSource:T(),vertexShaderSource:A()});n.primitives.add(new y.Z({geometryInstances:S,appearance:L,asynchronous:!1})),e.camera.flyTo({destination:m.Z.fromDegrees(116.23,39.54,500),orientation:{heading:_.Z.toRadians(0),pitch:_.Z.toRadians(-90),roll:0}})}}},P=o(40089);const D=(0,P.Z)(b,[["render",r],["__scopeId","data-v-1997bc3d"]]);var S=D}}]);
//# sourceMappingURL=7338.05794082.js.map