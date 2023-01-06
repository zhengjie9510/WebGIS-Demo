define(["exports","./Matrix3-b6f074fa","./defaultValue-0a909f67","./EllipsoidGeodesic-b00a0416","./EllipsoidRhumbLine-7f84cca0","./IntersectionTests-87baf287","./Math-e97915da","./Matrix2-163b5a1d","./Plane-1c5a21a3"],(function(e,t,a,n,i,r,o,s,c){"use strict";const l={numberOfPoints:function(e,a,n){const i=t.Cartesian3.distance(e,a);return Math.ceil(i/n)},numberOfPointsRhumbLine:function(e,t,a){const n=Math.pow(e.longitude-t.longitude,2)+Math.pow(e.latitude-t.latitude,2);return Math.max(1,Math.ceil(Math.sqrt(n/(a*a))))}},u=new t.Cartographic;l.extractHeights=function(e,t){const a=e.length,n=new Array(a);for(let i=0;i<a;i++){const a=e[i];n[i]=t.cartesianToCartographic(a,u).height}return n};const h=new s.Matrix4,f=new t.Cartesian3,g=new t.Cartesian3,C=new c.Plane(t.Cartesian3.UNIT_X,0),p=new t.Cartesian3,d=new c.Plane(t.Cartesian3.UNIT_X,0),m=new t.Cartesian3,w=new t.Cartesian3,P=[];function T(e,t,a){const n=P;let i;if(n.length=e,t===a){for(i=0;i<e;i++)n[i]=t;return n}const r=(a-t)/e;for(i=0;i<e;i++){const e=t+i*r;n[i]=e}return n}const y=new t.Cartographic,A=new t.Cartographic,b=new t.Cartesian3,E=new t.Cartesian3,M=new t.Cartesian3,R=new n.EllipsoidGeodesic;let S=new i.EllipsoidRhumbLine;function x(e,a,n,i,r,o,s,c){const u=i.scaleToGeodeticSurface(e,E),h=i.scaleToGeodeticSurface(a,M),f=l.numberOfPoints(e,a,n),g=i.cartesianToCartographic(u,y),C=i.cartesianToCartographic(h,A),p=T(f,r,o);R.setEndPoints(g,C);const d=R.surfaceDistance/f;let m=c;g.height=r;let w=i.cartographicToCartesian(g,b);t.Cartesian3.pack(w,s,m),m+=3;for(let l=1;l<f;l++){const e=R.interpolateUsingSurfaceDistance(l*d,A);e.height=p[l],w=i.cartographicToCartesian(e,b),t.Cartesian3.pack(w,s,m),m+=3}return m}function D(e,a,n,r,o,s,c,u){const h=r.cartesianToCartographic(e,y),f=r.cartesianToCartographic(a,A),g=l.numberOfPointsRhumbLine(h,f,n);h.height=0,f.height=0;const C=T(g,o,s);S.ellipsoid.equals(r)||(S=new i.EllipsoidRhumbLine(void 0,void 0,r)),S.setEndPoints(h,f);const p=S.surfaceDistance/g;let d=u;h.height=o;let m=r.cartographicToCartesian(h,b);t.Cartesian3.pack(m,c,d),d+=3;for(let i=1;i<g;i++){const e=S.interpolateUsingSurfaceDistance(i*p,A);e.height=C[i],m=r.cartographicToCartesian(e,b),t.Cartesian3.pack(m,c,d),d+=3}return d}l.wrapLongitude=function(e,n){const i=[],o=[];if(a.defined(e)&&e.length>0){n=a.defaultValue(n,s.Matrix4.IDENTITY);const l=s.Matrix4.inverseTransformation(n,h),u=s.Matrix4.multiplyByPoint(l,t.Cartesian3.ZERO,f),P=t.Cartesian3.normalize(s.Matrix4.multiplyByPointAsVector(l,t.Cartesian3.UNIT_Y,g),g),T=c.Plane.fromPointNormal(u,P,C),y=t.Cartesian3.normalize(s.Matrix4.multiplyByPointAsVector(l,t.Cartesian3.UNIT_X,p),p),A=c.Plane.fromPointNormal(u,y,d);let b=1;i.push(t.Cartesian3.clone(e[0]));let E=i[0];const M=e.length;for(let n=1;n<M;++n){const s=e[n];if(c.Plane.getPointDistance(A,E)<0||c.Plane.getPointDistance(A,s)<0){const e=r.IntersectionTests.lineSegmentPlane(E,s,T,m);if(a.defined(e)){const a=t.Cartesian3.multiplyByScalar(P,5e-9,w);c.Plane.getPointDistance(T,E)<0&&t.Cartesian3.negate(a,a),i.push(t.Cartesian3.add(e,a,new t.Cartesian3)),o.push(b+1),t.Cartesian3.negate(a,a),i.push(t.Cartesian3.add(e,a,new t.Cartesian3)),b=1}}i.push(t.Cartesian3.clone(e[n])),b++,E=s}o.push(b)}return{positions:i,lengths:o}},l.generateArc=function(e){a.defined(e)||(e={});const n=e.positions,i=n.length,r=a.defaultValue(e.ellipsoid,t.Ellipsoid.WGS84);let s=a.defaultValue(e.height,0);const c=Array.isArray(s);if(i<1)return[];if(1===i){const e=r.scaleToGeodeticSurface(n[0],E);if(s=c?s[0]:s,0!==s){const a=r.geodeticSurfaceNormal(e,b);t.Cartesian3.multiplyByScalar(a,s,a),t.Cartesian3.add(e,a,e)}return[e.x,e.y,e.z]}let u=e.minDistance;if(!a.defined(u)){const t=a.defaultValue(e.granularity,o.CesiumMath.RADIANS_PER_DEGREE);u=o.CesiumMath.chordLength(t,r.maximumRadius)}let h,f=0;for(h=0;h<i-1;h++)f+=l.numberOfPoints(n[h],n[h+1],u);const g=3*(f+1),C=new Array(g);let p=0;for(h=0;h<i-1;h++)p=x(n[h],n[h+1],u,r,c?s[h]:s,c?s[h+1]:s,C,p);P.length=0;const d=n[i-1],m=r.cartesianToCartographic(d,y);m.height=c?s[i-1]:s;const w=r.cartographicToCartesian(m,b);return t.Cartesian3.pack(w,C,g-3),C};const N=new t.Cartographic,G=new t.Cartographic;l.generateRhumbArc=function(e){a.defined(e)||(e={});const n=e.positions,i=n.length,r=a.defaultValue(e.ellipsoid,t.Ellipsoid.WGS84);let s=a.defaultValue(e.height,0);const c=Array.isArray(s);if(i<1)return[];if(1===i){const e=r.scaleToGeodeticSurface(n[0],E);if(s=c?s[0]:s,0!==s){const a=r.geodeticSurfaceNormal(e,b);t.Cartesian3.multiplyByScalar(a,s,a),t.Cartesian3.add(e,a,e)}return[e.x,e.y,e.z]}const u=a.defaultValue(e.granularity,o.CesiumMath.RADIANS_PER_DEGREE);let h,f,g=0,C=r.cartesianToCartographic(n[0],N);for(h=0;h<i-1;h++)f=r.cartesianToCartographic(n[h+1],G),g+=l.numberOfPointsRhumbLine(C,f,u),C=t.Cartographic.clone(f,N);const p=3*(g+1),d=new Array(p);let m=0;for(h=0;h<i-1;h++)m=D(n[h],n[h+1],u,r,c?s[h]:s,c?s[h+1]:s,d,m);P.length=0;const w=n[i-1],T=r.cartesianToCartographic(w,y);T.height=c?s[i-1]:s;const A=r.cartographicToCartesian(T,b);return t.Cartesian3.pack(A,d,p-3),d},l.generateCartesianArc=function(e){const a=l.generateArc(e),n=a.length/3,i=new Array(n);for(let r=0;r<n;r++)i[r]=t.Cartesian3.unpack(a,3*r);return i},l.generateCartesianRhumbArc=function(e){const a=l.generateRhumbArc(e),n=a.length/3,i=new Array(n);for(let r=0;r<n;r++)i[r]=t.Cartesian3.unpack(a,3*r);return i};var I=l;e.PolylinePipeline=I}));