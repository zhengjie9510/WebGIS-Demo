(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-602fa36a"],{b3e9:function(e,n,a){},de3b:function(e,n,a){"use strict";a.r(n);var t=a("7a23"),r={id:"cesiumContainer"};function i(e,n,a,i,o,c){return Object(t["openBlock"])(),Object(t["createElementBlock"])("div",r)}a("e877");var o=a("ec35"),c={mounted:function(){this.init()},methods:{init:function(){var e=new o["x"]("cesiumContainer");o["j"].supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;var n=e.scene,a=n.primitives.add(new o["t"]({geometryInstances:new o["k"]({geometry:new o["q"]({positions:o["d"].fromDegreesArray([-124,40,-80,40]),width:5})}),appearance:new o["r"]({material:new o["m"]({fabric:{uniforms:{color:new o["f"](1,0,0,1),percentage:.1,offset:0},source:"\n                  uniform vec4 color;\n                  uniform float percentage;\n                  czm_material czm_getMaterial(czm_materialInput materialInput)\n                  {\n                      czm_material material = czm_getDefaultMaterial(materialInput);\n                      float s = materialInput.s;\n                      material.diffuse = color.rgb;\n                      if(s > percentage + offset || s < offset){\n                          material.alpha = 0.0;\n                      }\n                      else{\n                          material.alpha = (s-offset)/(percentage) ;\n                      }\n                      return material;\n                  }"}})})}));e.scene.preUpdate.addEventListener((function(){var e=a.appearance.material.uniforms.offset;e+=.01,e>1&&(e=0),a.appearance.material.uniforms.offset=e}))}}},s=(a("e8b9"),a("d959")),f=a.n(s);const m=f()(c,[["render",i],["__scopeId","data-v-02e3ac55"]]);n["default"]=m},e8b9:function(e,n,a){"use strict";a("b3e9")}}]);