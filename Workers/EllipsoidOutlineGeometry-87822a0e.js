define(["exports","./Transforms-20461479","./Matrix3-81054f0f","./ComponentDatatype-ab629b88","./defaultValue-f6d5e6da","./GeometryAttribute-b8117bde","./GeometryAttributes-1e4ddcd2","./GeometryOffsetAttribute-2579b8d2","./IndexDatatype-d3db4e7d","./Math-2ce22ee9"],(function(t,i,e,n,a,o,r,s,u,m){"use strict";const f=new e.Cartesian3(1,1,1),d=Math.cos,l=Math.sin;function c(t){t=a.defaultValue(t,a.defaultValue.EMPTY_OBJECT);const i=a.defaultValue(t.radii,f),n=a.defaultValue(t.innerRadii,i),o=a.defaultValue(t.minimumClock,0),r=a.defaultValue(t.maximumClock,m.CesiumMath.TWO_PI),s=a.defaultValue(t.minimumCone,0),u=a.defaultValue(t.maximumCone,m.CesiumMath.PI),d=Math.round(a.defaultValue(t.stackPartitions,10)),l=Math.round(a.defaultValue(t.slicePartitions,8)),c=Math.round(a.defaultValue(t.subdivisions,128));this._radii=e.Cartesian3.clone(i),this._innerRadii=e.Cartesian3.clone(n),this._minimumClock=o,this._maximumClock=r,this._minimumCone=s,this._maximumCone=u,this._stackPartitions=d,this._slicePartitions=l,this._subdivisions=c,this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}c.packedLength=2*e.Cartesian3.packedLength+8,c.pack=function(t,i,n){return n=a.defaultValue(n,0),e.Cartesian3.pack(t._radii,i,n),n+=e.Cartesian3.packedLength,e.Cartesian3.pack(t._innerRadii,i,n),n+=e.Cartesian3.packedLength,i[n++]=t._minimumClock,i[n++]=t._maximumClock,i[n++]=t._minimumCone,i[n++]=t._maximumCone,i[n++]=t._stackPartitions,i[n++]=t._slicePartitions,i[n++]=t._subdivisions,i[n]=a.defaultValue(t._offsetAttribute,-1),i};const C=new e.Cartesian3,_=new e.Cartesian3,p={radii:C,innerRadii:_,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};c.unpack=function(t,i,n){i=a.defaultValue(i,0);const o=e.Cartesian3.unpack(t,i,C);i+=e.Cartesian3.packedLength;const r=e.Cartesian3.unpack(t,i,_);i+=e.Cartesian3.packedLength;const s=t[i++],u=t[i++],m=t[i++],f=t[i++],d=t[i++],l=t[i++],h=t[i++],y=t[i];return a.defined(n)?(n._radii=e.Cartesian3.clone(o,n._radii),n._innerRadii=e.Cartesian3.clone(r,n._innerRadii),n._minimumClock=s,n._maximumClock=u,n._minimumCone=m,n._maximumCone=f,n._stackPartitions=d,n._slicePartitions=l,n._subdivisions=h,n._offsetAttribute=-1===y?void 0:y,n):(p.minimumClock=s,p.maximumClock=u,p.minimumCone=m,p.maximumCone=f,p.stackPartitions=d,p.slicePartitions=l,p.subdivisions=h,p.offsetAttribute=-1===y?void 0:y,new c(p))},c.createGeometry=function(t){const f=t._radii;if(f.x<=0||f.y<=0||f.z<=0)return;const c=t._innerRadii;if(c.x<=0||c.y<=0||c.z<=0)return;const C=t._minimumClock,_=t._maximumClock,p=t._minimumCone,h=t._maximumCone,y=t._subdivisions,b=e.Ellipsoid.fromCartesian3(f);let k=t._slicePartitions+1,x=t._stackPartitions+1;k=Math.round(k*Math.abs(_-C)/m.CesiumMath.TWO_PI),x=Math.round(x*Math.abs(h-p)/m.CesiumMath.PI),k<2&&(k=2),x<2&&(x=2);let A=0,P=1;const v=c.x!==f.x||c.y!==f.y||c.z!==f.z;let M=!1,w=!1;v&&(P=2,p>0&&(M=!0,A+=k),h<Math.PI&&(w=!0,A+=k));const V=y*P*(x+k),g=new Float64Array(3*V),G=2*(V+A-(k+x)*P),E=u.IndexDatatype.createTypedArray(V,G);let O,D,I,T,z=0;const L=new Array(x),R=new Array(x);for(O=0;O<x;O++)T=p+O*(h-p)/(x-1),L[O]=l(T),R[O]=d(T);const N=new Array(y),B=new Array(y);for(O=0;O<y;O++)I=C+O*(_-C)/(y-1),N[O]=l(I),B[O]=d(I);for(O=0;O<x;O++)for(D=0;D<y;D++)g[z++]=f.x*L[O]*B[D],g[z++]=f.y*L[O]*N[D],g[z++]=f.z*R[O];if(v)for(O=0;O<x;O++)for(D=0;D<y;D++)g[z++]=c.x*L[O]*B[D],g[z++]=c.y*L[O]*N[D],g[z++]=c.z*R[O];for(L.length=y,R.length=y,O=0;O<y;O++)T=p+O*(h-p)/(y-1),L[O]=l(T),R[O]=d(T);for(N.length=k,B.length=k,O=0;O<k;O++)I=C+O*(_-C)/(k-1),N[O]=l(I),B[O]=d(I);for(O=0;O<y;O++)for(D=0;D<k;D++)g[z++]=f.x*L[O]*B[D],g[z++]=f.y*L[O]*N[D],g[z++]=f.z*R[O];if(v)for(O=0;O<y;O++)for(D=0;D<k;D++)g[z++]=c.x*L[O]*B[D],g[z++]=c.y*L[O]*N[D],g[z++]=c.z*R[O];for(z=0,O=0;O<x*P;O++){const t=O*y;for(D=0;D<y-1;D++)E[z++]=t+D,E[z++]=t+D+1}let S=x*y*P;for(O=0;O<k;O++)for(D=0;D<y-1;D++)E[z++]=S+O+D*k,E[z++]=S+O+(D+1)*k;if(v)for(S=x*y*P+k*y,O=0;O<k;O++)for(D=0;D<y-1;D++)E[z++]=S+O+D*k,E[z++]=S+O+(D+1)*k;if(v){let t=x*y*P,i=t+y*k;if(M)for(O=0;O<k;O++)E[z++]=t+O,E[z++]=i+O;if(w)for(t+=y*k-k,i+=y*k-k,O=0;O<k;O++)E[z++]=t+O,E[z++]=i+O}const U=new r.GeometryAttributes({position:new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:g})});if(a.defined(t._offsetAttribute)){const i=g.length,e=t._offsetAttribute===s.GeometryOffsetAttribute.NONE?0:1,a=new Uint8Array(i/3).fill(e);U.applyOffset=new o.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:a})}return new o.Geometry({attributes:U,indices:E,primitiveType:o.PrimitiveType.LINES,boundingSphere:i.BoundingSphere.fromEllipsoid(b),offsetAttribute:t._offsetAttribute})},t.EllipsoidOutlineGeometry=c}));