const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["index.js","index3.js","web-ifc-api.js","index2.js"])))=>i.map(i=>d[i]);
const Ah="modulepreload",Sh=function(n){return"/"+n},Nr={},Je=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(e.map(l=>{if(l=Sh(l),l in Nr)return;Nr[l]=!0;const h=l.endsWith(".css"),c=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":Ah,h||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),h)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="175",rm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},om=0,am=1,lm=2,hm=1,cm=2,um=3,Jn=0,Aa=1,dm=2,Ch=0,jr=1,pm=2,fm=3,mm=4,ym=5,Ur=100,gm=101,bm=102,xm=103,vm=104,wm=200,_m=201,Mm=202,Am=203,Vr=204,Hr=205,Sm=206,Cm=207,zm=208,Em=209,Tm=210,Fm=211,km=212,Bm=213,$m=214,Rm=0,Im=1,Om=2,Wr=3,Pm=4,Dm=5,Lm=6,Nm=7,Sa=0,jm=1,Um=2,Vm=0,Hm=1,Wm=2,qm=3,Gm=4,Xm=5,Zm=6,Ym=7,Ca=300,zh=301,Jm=302,Qm=303,Km=304,ty=306,qr=1e3,Ye=1001,Gr=1002,ne=1003,ey=1004,iy=1005,Us=1006,sy=1007,za=1008,Ea=1009,Eh=1010,Th=1011,Fh=1012,kh=1013,Ta=1014,br=1015,Bh=1016,$h=1017,Rh=1018,ny=1020,Ih=35902,Oh=1021,Ph=1022,Fa=1023,Dh=1024,Lh=1025,Xr=1026,Nh=1027,ka=1028,jh=1029,Uh=1030,Vh=1031,Hh=1033,Wh=33776,qh=33777,Gh=33778,Xh=33779,Zh=35840,Yh=35841,Jh=35842,Qh=35843,Kh=36196,tc=37492,ec=37496,ic=37808,sc=37809,nc=37810,rc=37811,oc=37812,ac=37813,lc=37814,hc=37815,cc=37816,uc=37817,dc=37818,pc=37819,fc=37820,mc=37821,yc=36492,gc=36494,bc=36495,xc=36283,vc=36284,wc=36285,_c=36286,Mc=3200,ry=3201,Ac=0,oy=1,Ba="",Tt="srgb",Zr="srgb-linear",Yr="linear",wn="srgb",Re=7680,Jr=519,ay=512,ly=513,hy=514,cy=515,uy=516,dy=517,py=518,fy=519,Qn=35044,my=35048,yy="300 es",se=2e3,Vs=2001;class di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qr=1234567;const Qe=Math.PI/180,Hs=180/Math.PI;function Ut(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rt[n&255]+rt[n>>8&255]+rt[n>>16&255]+rt[n>>24&255]+"-"+rt[t&255]+rt[t>>8&255]+"-"+rt[t>>16&15|64]+rt[t>>24&255]+"-"+rt[e&63|128]+rt[e>>8&255]+"-"+rt[e>>16&255]+rt[e>>24&255]+rt[i&255]+rt[i>>8&255]+rt[i>>16&255]+rt[i>>24&255]).toLowerCase()}function B(n,t,e){return Math.max(t,Math.min(e,n))}function xr(n,t){return(n%t+t)%t}function Sc(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Cc(n,t,e){return n!==t?(e-n)/(t-n):0}function Ri(n,t,e){return(1-e)*n+e*t}function zc(n,t,e,i){return Ri(n,t,1-Math.exp(-e*i))}function Ec(n,t=1){return t-Math.abs(xr(n,t*2)-t)}function Tc(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Fc(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function kc(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Bc(n,t){return n+Math.random()*(t-n)}function $c(n){return n*(.5-Math.random())}function Rc(n){n!==void 0&&(Qr=n);let t=Qr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ic(n){return n*Qe}function Oc(n){return n*Hs}function Pc(n){return(n&n-1)===0&&n!==0}function Dc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nc(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),c=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),f=o((i-t)/2);switch(s){case"XYX":n.set(a*c,l*u,l*d,a*h);break;case"YZY":n.set(l*d,a*c,l*u,a*h);break;case"ZXZ":n.set(l*u,l*d,a*c,a*h);break;case"XZX":n.set(a*c,l*f,l*p,a*h);break;case"YXY":n.set(l*p,a*c,l*f,a*h);break;case"ZYZ":n.set(l*f,l*p,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ft(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function P(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gy={DEG2RAD:Qe,RAD2DEG:Hs,generateUUID:Ut,clamp:B,euclideanModulo:xr,mapLinear:Sc,inverseLerp:Cc,lerp:Ri,damp:zc,pingpong:Ec,smoothstep:Tc,smootherstep:Fc,randInt:kc,randFloat:Bc,randFloatSpread:$c,seededRandom:Rc,degToRad:Ic,radToDeg:Oc,isPowerOfTwo:Pc,ceilPowerOfTwo:Dc,floorPowerOfTwo:Lc,setQuaternionFromProperEuler:Nc,normalize:P,denormalize:Ft};class Z{constructor(t=0,e=0){Z.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=B(this.x,t.x,e.x),this.y=B(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=B(this.x,t,e),this.y=B(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(B(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(B(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,i,s,r,o,a,l,h){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],p=i[5],f=i[8],m=s[0],y=s[3],b=s[6],v=s[1],x=s[4],g=s[7],A=s[2],M=s[5],C=s[8];return r[0]=o*m+a*v+l*A,r[3]=o*y+a*x+l*M,r[6]=o*b+a*g+l*C,r[1]=h*m+c*v+u*A,r[4]=h*y+c*x+u*M,r[7]=h*b+c*g+u*C,r[2]=d*m+p*v+f*A,r[5]=d*y+p*x+f*M,r[8]=d*b+p*g+f*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-i*r*c+i*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*r,p=h*r-o*l,f=e*u+i*d+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/f;return t[0]=u*m,t[1]=(s*h-c*i)*m,t[2]=(a*i-s*o)*m,t[3]=d*m,t[4]=(c*e-s*l)*m,t[5]=(s*r-a*e)*m,t[6]=p*m,t[7]=(i*l-h*e)*m,t[8]=(o*e-i*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_n.makeScale(t,e)),this}rotate(t){return this.premultiply(_n.makeRotation(-t)),this}translate(t,e){return this.premultiply(_n.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _n=new Gt;function jc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Kn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function by(){const n=Kn("canvas");return n.style.display="block",n}const Kr={};function xy(n){n in Kr||(Kr[n]=!0,console.warn(n))}function vy(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function wy(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _y(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const to=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eo=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uc(){const n={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===wn&&(s.r=Vt(s.r),s.g=Vt(s.g),s.b=Vt(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wn&&(s.r=Ke(s.r),s.g=Ke(s.g),s.b=Ke(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ba?Yr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zr]:{primaries:t,whitePoint:i,transfer:Yr,toXYZ:to,fromXYZ:eo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:t,whitePoint:i,transfer:wn,toXYZ:to,fromXYZ:eo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),n}const xt=Uc();function Vt(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ke(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ie;class Vc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ie===void 0&&(Ie=Kn("canvas")),Ie.width=t.width,Ie.height=t.height;const s=Ie.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ie}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Kn("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vt(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vt(e[i]/255)*255):e[i]=Vt(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hc=0;class vr{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Ut(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mn(s[o].image)):r.push(Mn(s[o]))}else r=Mn(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Mn(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wc=0;class mt extends di{constructor(t=mt.DEFAULT_IMAGE,e=mt.DEFAULT_MAPPING,i=Ye,s=Ye,r=Us,o=za,a=Fa,l=Ea,h=mt.DEFAULT_ANISOTROPY,c=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=Ut(),this.name="",this.source=new vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ca)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qr:t.x=t.x-Math.floor(t.x);break;case Ye:t.x=t.x<0?0:1;break;case Gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qr:t.y=t.y-Math.floor(t.y);break;case Ye:t.y=t.y<0?0:1;break;case Gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=Ca;mt.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,i=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],p=l[5],f=l[9],m=l[2],y=l[6],b=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-m)<.01&&Math.abs(f-y)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+m)<.1&&Math.abs(f+y)<.1&&Math.abs(h+p+b-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(h+1)/2,g=(p+1)/2,A=(b+1)/2,M=(c+d)/4,C=(u+m)/4,S=(f+y)/4;return x>g&&x>A?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=M/i,r=C/i):g>A?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=M/s,r=S/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=C/r,s=S/r),this.set(i,s,r,e),this}let v=Math.sqrt((y-f)*(y-f)+(u-m)*(u-m)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(y-f)/v,this.y=(u-m)/v,this.z=(d-c)/v,this.w=Math.acos((h+p+b-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=B(this.x,t.x,e.x),this.y=B(this.y,t.y,e.y),this.z=B(this.z,t.z,e.z),this.w=B(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=B(this.x,t,e),this.y=B(this.y,t,e),this.z=B(this.z,t,e),this.w=B(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(B(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qc extends di{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Us,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new mt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new vr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gc extends qc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class My extends mt{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ne,this.minFilter=ne,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ay extends mt{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ne,this.minFilter=ne,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3];const d=r[o+0],p=r[o+1],f=r[o+2],m=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=f,t[e+3]=m;return}if(u!==m||l!==d||h!==p||c!==f){let y=1-a;const b=l*d+h*p+c*f+u*m,v=b>=0?1:-1,x=1-b*b;if(x>Number.EPSILON){const A=Math.sqrt(x),M=Math.atan2(A,b*v);y=Math.sin(y*M)/A,a=Math.sin(a*M)/A}const g=a*v;if(l=l*y+d*g,h=h*y+p*g,c=c*y+f*g,u=u*y+m*g,y===1-a){const A=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=A,h*=A,c*=A,u*=A}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],h=i[s+2],c=i[s+3],u=r[o],d=r[o+1],p=r[o+2],f=r[o+3];return t[e]=a*f+c*u+l*p-h*d,t[e+1]=l*f+c*d+h*u-a*p,t[e+2]=h*f+c*p+a*d-l*u,t[e+3]=c*f-a*u-l*d-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u-d*p*f;break;case"YXZ":this._x=d*c*u+h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u+d*p*f;break;case"ZXY":this._x=d*c*u-h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u-d*p*f;break;case"ZYX":this._x=d*c*u-h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u+d*p*f;break;case"YZX":this._x=d*c*u+h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u-d*p*f;break;case"XZY":this._x=d*c*u-h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-h)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(c-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+h)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-h)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(B(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-i*h,this._z=r*c+o*h+i*l-s*a,this._w=o*c-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,i=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(io.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(io.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),c=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*h+o*u-a*c,this.y=i+l*c+a*h-r*u,this.z=s+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=B(this.x,t.x,e.x),this.y=B(this.y,t.y,e.y),this.z=B(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=B(this.x,t,e),this.y=B(this.y,t,e),this.z=B(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(B(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return An.copy(this).projectOnVector(t),this.sub(An)}reflect(t){return this.sub(An.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(B(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const An=new w,io=new Yi;class ce{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(St.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(St.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=St.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,St):St.fromBufferAttribute(r,o),St.applyMatrix4(t.matrixWorld),this.expandByPoint(St);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hs.copy(i.boundingBox)),hs.applyMatrix4(t.matrixWorld),this.union(hs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,St),St.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_i),cs.subVectors(this.max,_i),Oe.subVectors(t.a,_i),Pe.subVectors(t.b,_i),De.subVectors(t.c,_i),Yt.subVectors(Pe,Oe),Jt.subVectors(De,Pe),ye.subVectors(Oe,De);let e=[0,-Yt.z,Yt.y,0,-Jt.z,Jt.y,0,-ye.z,ye.y,Yt.z,0,-Yt.x,Jt.z,0,-Jt.x,ye.z,0,-ye.x,-Yt.y,Yt.x,0,-Jt.y,Jt.x,0,-ye.y,ye.x,0];return!Sn(e,Oe,Pe,De,cs)||(e=[1,0,0,0,1,0,0,0,1],!Sn(e,Oe,Pe,De,cs))?!1:(us.crossVectors(Yt,Jt),e=[us.x,us.y,us.z],Sn(e,Oe,Pe,De,cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,St).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(St).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pt),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pt=[new w,new w,new w,new w,new w,new w,new w,new w],St=new w,hs=new ce,Oe=new w,Pe=new w,De=new w,Yt=new w,Jt=new w,ye=new w,_i=new w,cs=new w,us=new w,ge=new w;function Sn(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ge.fromArray(n,r);const a=s.x*Math.abs(ge.x)+s.y*Math.abs(ge.y)+s.z*Math.abs(ge.z),l=t.dot(ge),h=e.dot(ge),c=i.dot(ge);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const Xc=new ce,Mi=new w,Cn=new w;class Ee{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Xc.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);const e=Mi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Mi,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cn.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(Cn)),this.expandByPoint(Mi.copy(t.center).sub(Cn))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dt=new w,zn=new w,ds=new w,Qt=new w,En=new w,ps=new w,Tn=new w;class nn{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dt)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dt.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dt.copy(this.origin).addScaledVector(this.direction,e),Dt.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){zn.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),Qt.copy(this.origin).sub(zn);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ds),a=Qt.dot(this.direction),l=-Qt.dot(ds),h=Qt.lengthSq(),c=Math.abs(1-o*o);let u,d,p,f;if(c>0)if(u=o*l-a,d=o*a-l,f=r*c,u>=0)if(d>=-f)if(d<=f){const m=1/c;u*=m,d*=m,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+h;else d<=-f?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+h):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(zn).addScaledVector(ds,d),p}intersectSphere(t,e){Dt.subVectors(t.center,this.origin);const i=Dt.dot(this.direction),s=Dt.dot(Dt)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Dt)!==null}intersectTriangle(t,e,i,s,r){En.subVectors(e,t),ps.subVectors(i,t),Tn.crossVectors(En,ps);let o=this.direction.dot(Tn),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qt.subVectors(this.origin,t);const l=a*this.direction.dot(ps.crossVectors(Qt,ps));if(l<0)return null;const h=a*this.direction.dot(En.cross(Qt));if(h<0||l+h>o)return null;const c=-a*Qt.dot(Tn);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class W{constructor(t,e,i,s,r,o,a,l,h,c,u,d,p,f,m,y){W.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,c,u,d,p,f,m,y)}set(t,e,i,s,r,o,a,l,h,c,u,d,p,f,m,y){const b=this.elements;return b[0]=t,b[4]=e,b[8]=i,b[12]=s,b[1]=r,b[5]=o,b[9]=a,b[13]=l,b[2]=h,b[6]=c,b[10]=u,b[14]=d,b[3]=p,b[7]=f,b[11]=m,b[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new W().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Le.setFromMatrixColumn(t,0).length(),r=1/Le.setFromMatrixColumn(t,1).length(),o=1/Le.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*c,p=o*u,f=a*c,m=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=p+f*h,e[5]=d-m*h,e[9]=-a*l,e[2]=m-d*h,e[6]=f+p*h,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,p=l*u,f=h*c,m=h*u;e[0]=d+m*a,e[4]=f*a-p,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=p*a-f,e[6]=m+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,p=l*u,f=h*c,m=h*u;e[0]=d-m*a,e[4]=-o*u,e[8]=f+p*a,e[1]=p+f*a,e[5]=o*c,e[9]=m-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,p=o*u,f=a*c,m=a*u;e[0]=l*c,e[4]=f*h-p,e[8]=d*h+m,e[1]=l*u,e[5]=m*h+d,e[9]=p*h-f,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*h,f=a*l,m=a*h;e[0]=l*c,e[4]=m-d*u,e[8]=f*u+p,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=p*u+f,e[10]=d-m*u}else if(t.order==="XZY"){const d=o*l,p=o*h,f=a*l,m=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+m,e[5]=o*c,e[9]=p*u-f,e[2]=f*u-p,e[6]=a*c,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zc,t,Yc)}lookAt(t,e,i){const s=this.elements;return dt.subVectors(t,e),dt.lengthSq()===0&&(dt.z=1),dt.normalize(),Kt.crossVectors(i,dt),Kt.lengthSq()===0&&(Math.abs(i.z)===1?dt.x+=1e-4:dt.z+=1e-4,dt.normalize(),Kt.crossVectors(i,dt)),Kt.normalize(),fs.crossVectors(dt,Kt),s[0]=Kt.x,s[4]=fs.x,s[8]=dt.x,s[1]=Kt.y,s[5]=fs.y,s[9]=dt.y,s[2]=Kt.z,s[6]=fs.z,s[10]=dt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],p=i[13],f=i[2],m=i[6],y=i[10],b=i[14],v=i[3],x=i[7],g=i[11],A=i[15],M=s[0],C=s[4],S=s[8],E=s[12],z=s[1],k=s[5],F=s[9],$=s[13],R=s[2],U=s[6],q=s[10],nt=s[14],Y=s[3],L=s[7],J=s[11],ut=s[15];return r[0]=o*M+a*z+l*R+h*Y,r[4]=o*C+a*k+l*U+h*L,r[8]=o*S+a*F+l*q+h*J,r[12]=o*E+a*$+l*nt+h*ut,r[1]=c*M+u*z+d*R+p*Y,r[5]=c*C+u*k+d*U+p*L,r[9]=c*S+u*F+d*q+p*J,r[13]=c*E+u*$+d*nt+p*ut,r[2]=f*M+m*z+y*R+b*Y,r[6]=f*C+m*k+y*U+b*L,r[10]=f*S+m*F+y*q+b*J,r[14]=f*E+m*$+y*nt+b*ut,r[3]=v*M+x*z+g*R+A*Y,r[7]=v*C+x*k+g*U+A*L,r[11]=v*S+x*F+g*q+A*J,r[15]=v*E+x*$+g*nt+A*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14],f=t[3],m=t[7],y=t[11],b=t[15];return f*(+r*l*u-s*h*u-r*a*d+i*h*d+s*a*p-i*l*p)+m*(+e*l*p-e*h*d+r*o*d-s*o*p+s*h*c-r*l*c)+y*(+e*h*u-e*a*p-r*o*u+i*o*p+r*a*c-i*h*c)+b*(-s*a*c-e*l*u+e*a*d+s*o*u-i*o*d+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],f=t[12],m=t[13],y=t[14],b=t[15],v=u*y*h-m*d*h+m*l*p-a*y*p-u*l*b+a*d*b,x=f*d*h-c*y*h-f*l*p+o*y*p+c*l*b-o*d*b,g=c*m*h-f*u*h+f*a*p-o*m*p-c*a*b+o*u*b,A=f*u*l-c*m*l-f*a*d+o*m*d+c*a*y-o*u*y,M=e*v+i*x+s*g+r*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/M;return t[0]=v*C,t[1]=(m*d*r-u*y*r-m*s*p+i*y*p+u*s*b-i*d*b)*C,t[2]=(a*y*r-m*l*r+m*s*h-i*y*h-a*s*b+i*l*b)*C,t[3]=(u*l*r-a*d*r-u*s*h+i*d*h+a*s*p-i*l*p)*C,t[4]=x*C,t[5]=(c*y*r-f*d*r+f*s*p-e*y*p-c*s*b+e*d*b)*C,t[6]=(f*l*r-o*y*r-f*s*h+e*y*h+o*s*b-e*l*b)*C,t[7]=(o*d*r-c*l*r+c*s*h-e*d*h-o*s*p+e*l*p)*C,t[8]=g*C,t[9]=(f*u*r-c*m*r-f*i*p+e*m*p+c*i*b-e*u*b)*C,t[10]=(o*m*r-f*a*r+f*i*h-e*m*h-o*i*b+e*a*b)*C,t[11]=(c*a*r-o*u*r-c*i*h+e*u*h+o*i*p-e*a*p)*C,t[12]=A*C,t[13]=(c*m*s-f*u*s+f*i*d-e*m*d-c*i*y+e*u*y)*C,t[14]=(f*a*s-o*m*s-f*i*l+e*m*l+o*i*y-e*a*y)*C,t[15]=(o*u*s-c*a*s+c*i*l-e*u*l-o*i*d+e*a*d)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+i,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,d=r*h,p=r*c,f=r*u,m=o*c,y=o*u,b=a*u,v=l*h,x=l*c,g=l*u,A=i.x,M=i.y,C=i.z;return s[0]=(1-(m+b))*A,s[1]=(p+g)*A,s[2]=(f-x)*A,s[3]=0,s[4]=(p-g)*M,s[5]=(1-(d+b))*M,s[6]=(y+v)*M,s[7]=0,s[8]=(f+x)*C,s[9]=(y-v)*C,s[10]=(1-(d+m))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Le.set(s[0],s[1],s[2]).length();const o=Le.set(s[4],s[5],s[6]).length(),a=Le.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ct.copy(this);const h=1/r,c=1/o,u=1/a;return Ct.elements[0]*=h,Ct.elements[1]*=h,Ct.elements[2]*=h,Ct.elements[4]*=c,Ct.elements[5]*=c,Ct.elements[6]*=c,Ct.elements[8]*=u,Ct.elements[9]*=u,Ct.elements[10]*=u,e.setFromRotationMatrix(Ct),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=se){const l=this.elements,h=2*r/(e-t),c=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let p,f;if(a===se)p=-(o+r)/(o-r),f=-2*o*r/(o-r);else if(a===Vs)p=-o/(o-r),f=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=se){const l=this.elements,h=1/(e-t),c=1/(i-s),u=1/(o-r),d=(e+t)*h,p=(i+s)*c;let f,m;if(a===se)f=(o+r)*u,m=-2*u;else if(a===Vs)f=r*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Le=new w,Ct=new W,Zc=new w(0,0,0),Yc=new w(1,1,1),Kt=new w,fs=new w,dt=new w,so=new W,no=new Yi;class oe{constructor(t=0,e=0,i=0,s=oe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-B(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(B(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return so.makeRotationFromQuaternion(t),this.setFromRotationMatrix(so,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return no.setFromEuler(this),this.setFromQuaternion(no,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oe.DEFAULT_ORDER="XYZ";class $a{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jc=0;const ro=new w,Ne=new Yi,Lt=new W,ms=new w,Ai=new w,Qc=new w,Kc=new Yi,oo=new w(1,0,0),ao=new w(0,1,0),lo=new w(0,0,1),ho={type:"added"},tu={type:"removed"},je={type:"childadded",child:null},Fn={type:"childremoved",child:null};class it extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Ut(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DEFAULT_UP.clone();const t=new w,e=new oe,i=new Yi,s=new w(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new W},normalMatrix:{value:new Gt}}),this.matrix=new W,this.matrixWorld=new W,this.matrixAutoUpdate=it.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ne.setFromAxisAngle(t,e),this.quaternion.multiply(Ne),this}rotateOnWorldAxis(t,e){return Ne.setFromAxisAngle(t,e),this.quaternion.premultiply(Ne),this}rotateX(t){return this.rotateOnAxis(oo,t)}rotateY(t){return this.rotateOnAxis(ao,t)}rotateZ(t){return this.rotateOnAxis(lo,t)}translateOnAxis(t,e){return ro.copy(t).applyQuaternion(this.quaternion),this.position.add(ro.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oo,t)}translateY(t){return this.translateOnAxis(ao,t)}translateZ(t){return this.translateOnAxis(lo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Lt.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ms.copy(t):ms.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lt.lookAt(Ai,ms,this.up):Lt.lookAt(ms,Ai,this.up),this.quaternion.setFromRotationMatrix(Lt),s&&(Lt.extractRotation(s.matrixWorld),Ne.setFromRotationMatrix(Lt),this.quaternion.premultiply(Ne.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ho),je.child=t,this.dispatchEvent(je),je.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tu),Fn.child=t,this.dispatchEvent(Fn),Fn.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Lt.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Lt.multiply(t.parent.matrixWorld)),t.applyMatrix4(Lt),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ho),je.child=t,this.dispatchEvent(je),je.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,t,Qc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,Kc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),f=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}it.DEFAULT_UP=new w(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zt=new w,Nt=new w,kn=new w,jt=new w,Ue=new w,Ve=new w,co=new w,Bn=new w,$n=new w,Rn=new w,In=new re,On=new re,Pn=new re;class vt{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),zt.subVectors(t,e),s.cross(zt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){zt.subVectors(s,e),Nt.subVectors(i,e),kn.subVectors(t,e);const o=zt.dot(zt),a=zt.dot(Nt),l=zt.dot(kn),h=Nt.dot(Nt),c=Nt.dot(kn),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(h*l-a*c)*d,f=(o*c-a*l)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,jt)===null?!1:jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jt.x),l.addScaledVector(o,jt.y),l.addScaledVector(a,jt.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return In.setScalar(0),On.setScalar(0),Pn.setScalar(0),In.fromBufferAttribute(t,e),On.fromBufferAttribute(t,i),Pn.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(In,r.x),o.addScaledVector(On,r.y),o.addScaledVector(Pn,r.z),o}static isFrontFacing(t,e,i,s){return zt.subVectors(i,e),Nt.subVectors(t,e),zt.cross(Nt).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zt.subVectors(this.c,this.b),Nt.subVectors(this.a,this.b),zt.cross(Nt).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vt.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vt.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return vt.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return vt.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vt.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ue.subVectors(s,i),Ve.subVectors(r,i),Bn.subVectors(t,i);const l=Ue.dot(Bn),h=Ve.dot(Bn);if(l<=0&&h<=0)return e.copy(i);$n.subVectors(t,s);const c=Ue.dot($n),u=Ve.dot($n);if(c>=0&&u<=c)return e.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(Ue,o);Rn.subVectors(t,r);const p=Ue.dot(Rn),f=Ve.dot(Rn);if(f>=0&&p<=f)return e.copy(r);const m=p*h-l*f;if(m<=0&&h>=0&&f<=0)return a=h/(h-f),e.copy(i).addScaledVector(Ve,a);const y=c*f-p*u;if(y<=0&&u-c>=0&&p-f>=0)return co.subVectors(r,s),a=(u-c)/(u-c+(p-f)),e.copy(s).addScaledVector(co,a);const b=1/(y+m+d);return o=m*b,a=d*b,e.copy(i).addScaledVector(Ue,o).addScaledVector(Ve,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ra={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},te={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Dn(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,xt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=xt.workingColorSpace){if(t=xr(t,1),e=B(e,0,1),i=B(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Dn(o,r,t+1/3),this.g=Dn(o,r,t),this.b=Dn(o,r,t-1/3)}return xt.toWorkingColorSpace(this,s),this}setStyle(t,e=Tt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tt){const i=Ra[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vt(t.r),this.g=Vt(t.g),this.b=Vt(t.b),this}copyLinearToSRGB(t){return this.r=Ke(t.r),this.g=Ke(t.g),this.b=Ke(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tt){return xt.fromWorkingColorSpace(ot.copy(this),t),Math.round(B(ot.r*255,0,255))*65536+Math.round(B(ot.g*255,0,255))*256+Math.round(B(ot.b*255,0,255))}getHexString(t=Tt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xt.workingColorSpace){xt.fromWorkingColorSpace(ot.copy(this),e);const i=ot.r,s=ot.g,r=ot.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=xt.workingColorSpace){return xt.fromWorkingColorSpace(ot.copy(this),e),t.r=ot.r,t.g=ot.g,t.b=ot.b,t}getStyle(t=Tt){xt.fromWorkingColorSpace(ot.copy(this),t);const e=ot.r,i=ot.g,s=ot.b;return t!==Tt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(te),this.setHSL(te.h+t,te.s+e,te.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(te),t.getHSL(ys);const i=Ri(te.h,ys.h,e),s=Ri(te.s,ys.s,e),r=Ri(te.l,ys.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ot=new $t;$t.NAMES=Ra;let eu=0;class Te extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Ut(),this.name="",this.type="Material",this.blending=jr,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vr,this.blendDst=Hr,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Re,this.stencilZFail=Re,this.stencilZPass=Re,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vr&&(i.blendSrc=this.blendSrc),this.blendDst!==Hr&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Re&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Re&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Re&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wr extends Te{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oe,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const X=new w,gs=new Z;let iu=0;class Ht{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qn,this.updateRanges=[],this.gpuType=br,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)gs.fromBufferAttribute(this,e),gs.applyMatrix3(t),this.setXY(e,gs.x,gs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)X.fromBufferAttribute(this,e),X.applyMatrix3(t),this.setXYZ(e,X.x,X.y,X.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)X.fromBufferAttribute(this,e),X.applyMatrix4(t),this.setXYZ(e,X.x,X.y,X.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)X.fromBufferAttribute(this,e),X.applyNormalMatrix(t),this.setXYZ(e,X.x,X.y,X.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)X.fromBufferAttribute(this,e),X.transformDirection(t),this.setXYZ(e,X.x,X.y,X.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ft(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=P(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ft(e,this.array)),e}setX(t,e){return this.normalized&&(e=P(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ft(e,this.array)),e}setY(t,e){return this.normalized&&(e=P(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ft(e,this.array)),e}setZ(t,e){return this.normalized&&(e=P(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ft(e,this.array)),e}setW(t,e){return this.normalized&&(e=P(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=P(e,this.array),i=P(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=P(e,this.array),i=P(i,this.array),s=P(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=P(e,this.array),i=P(i,this.array),s=P(s,this.array),r=P(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qn&&(t.usage=this.usage),t}}class Sy extends Ht{constructor(t,e,i){super(new Uint8Array(t),e,i)}}class su extends Ht{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class nu extends Ht{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class H extends Ht{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ru=0;const bt=new W,Ln=new it,He=new w,pt=new ce,Si=new ce,Q=new w;class ct extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Ut(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jc(t)?nu:su)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bt.makeRotationFromQuaternion(t),this.applyMatrix4(bt),this}rotateX(t){return bt.makeRotationX(t),this.applyMatrix4(bt),this}rotateY(t){return bt.makeRotationY(t),this.applyMatrix4(bt),this}rotateZ(t){return bt.makeRotationZ(t),this.applyMatrix4(bt),this}translate(t,e,i){return bt.makeTranslation(t,e,i),this.applyMatrix4(bt),this}scale(t,e,i){return bt.makeScale(t,e,i),this.applyMatrix4(bt),this}lookAt(t){return Ln.lookAt(t),Ln.updateMatrix(),this.applyMatrix4(Ln.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(He).negate(),this.translate(He.x,He.y,He.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new H(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ce);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];pt.setFromBufferAttribute(r),this.morphTargetsRelative?(Q.addVectors(this.boundingBox.min,pt.min),this.boundingBox.expandByPoint(Q),Q.addVectors(this.boundingBox.max,pt.max),this.boundingBox.expandByPoint(Q)):(this.boundingBox.expandByPoint(pt.min),this.boundingBox.expandByPoint(pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ee);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const i=this.boundingSphere.center;if(pt.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(Q.addVectors(pt.min,Si.min),pt.expandByPoint(Q),Q.addVectors(pt.max,Si.max),pt.expandByPoint(Q)):(pt.expandByPoint(Si.min),pt.expandByPoint(Si.max))}pt.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Q.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Q));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Q.fromBufferAttribute(a,h),l&&(He.fromBufferAttribute(t,h),Q.add(He)),s=Math.max(s,i.distanceToSquared(Q))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new w,l[S]=new w;const h=new w,c=new w,u=new w,d=new Z,p=new Z,f=new Z,m=new w,y=new w;function b(S,E,z){h.fromBufferAttribute(i,S),c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,z),d.fromBufferAttribute(r,S),p.fromBufferAttribute(r,E),f.fromBufferAttribute(r,z),c.sub(h),u.sub(h),p.sub(d),f.sub(d);const k=1/(p.x*f.y-f.x*p.y);isFinite(k)&&(m.copy(c).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(k),y.copy(u).multiplyScalar(p.x).addScaledVector(c,-f.x).multiplyScalar(k),a[S].add(m),a[E].add(m),a[z].add(m),l[S].add(y),l[E].add(y),l[z].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let S=0,E=v.length;S<E;++S){const z=v[S],k=z.start,F=z.count;for(let $=k,R=k+F;$<R;$+=3)b(t.getX($+0),t.getX($+1),t.getX($+2))}const x=new w,g=new w,A=new w,M=new w;function C(S){A.fromBufferAttribute(s,S),M.copy(A);const E=a[S];x.copy(E),x.sub(A.multiplyScalar(A.dot(E))).normalize(),g.crossVectors(M,E);const k=g.dot(l[S])<0?-1:1;o.setXYZW(S,x.x,x.y,x.z,k)}for(let S=0,E=v.length;S<E;++S){const z=v[S],k=z.start,F=z.count;for(let $=k,R=k+F;$<R;$+=3)C(t.getX($+0)),C(t.getX($+1)),C(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ht(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new w,r=new w,o=new w,a=new w,l=new w,h=new w,c=new w,u=new w;if(t)for(let d=0,p=t.count;d<p;d+=3){const f=t.getX(d+0),m=t.getX(d+1),y=t.getX(d+2);s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,y),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),a.fromBufferAttribute(i,f),l.fromBufferAttribute(i,m),h.fromBufferAttribute(i,y),a.add(c),l.add(c),h.add(c),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Q.fromBufferAttribute(t,e),Q.normalize(),t.setXYZ(e,Q.x,Q.y,Q.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c);let p=0,f=0;for(let m=0,y=l.length;m<y;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let b=0;b<c;b++)d[f++]=h[p++]}return new Ht(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ct,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,i);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){const d=h[c],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uo=new W,be=new nn,bs=new Ee,po=new w,xs=new w,vs=new w,ws=new w,Nn=new w,_s=new w,fo=new w,Ms=new w;class rn extends it{constructor(t=new ct,e=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){_s.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=a[l],u=r[l];c!==0&&(Nn.fromBufferAttribute(u,t),o?_s.addScaledVector(Nn,c):_s.addScaledVector(Nn.sub(e),c))}e.add(_s)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(r),be.copy(t.ray).recast(t.near),!(bs.containsPoint(be.origin)===!1&&(be.intersectSphere(bs,po)===null||be.origin.distanceToSquared(po)>(t.far-t.near)**2))&&(uo.copy(r).invert(),be.copy(t.ray).applyMatrix4(uo),!(i.boundingBox!==null&&be.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,be)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,m=d.length;f<m;f++){const y=d[f],b=o[y.materialIndex],v=Math.max(y.start,p.start),x=Math.min(a.count,Math.min(y.start+y.count,p.start+p.count));for(let g=v,A=x;g<A;g+=3){const M=a.getX(g),C=a.getX(g+1),S=a.getX(g+2);s=As(this,b,t,i,h,c,u,M,C,S),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{const f=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let y=f,b=m;y<b;y+=3){const v=a.getX(y),x=a.getX(y+1),g=a.getX(y+2);s=As(this,o,t,i,h,c,u,v,x,g),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,m=d.length;f<m;f++){const y=d[f],b=o[y.materialIndex],v=Math.max(y.start,p.start),x=Math.min(l.count,Math.min(y.start+y.count,p.start+p.count));for(let g=v,A=x;g<A;g+=3){const M=g,C=g+1,S=g+2;s=As(this,b,t,i,h,c,u,M,C,S),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{const f=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let y=f,b=m;y<b;y+=3){const v=y,x=y+1,g=y+2;s=As(this,o,t,i,h,c,u,v,x,g),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}}function ou(n,t,e,i,s,r,o,a){let l;if(t.side===Aa?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Jn,a),l===null)return null;Ms.copy(a),Ms.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Ms);return h<e.near||h>e.far?null:{distance:h,point:Ms.clone(),object:n}}function As(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,xs),n.getVertexPosition(l,vs),n.getVertexPosition(h,ws);const c=ou(n,t,e,i,xs,vs,ws,fo);if(c){const u=new w;vt.getBarycoord(fo,xs,vs,ws,u),s&&(c.uv=vt.getInterpolatedAttribute(s,a,l,h,u,new Z)),r&&(c.uv1=vt.getInterpolatedAttribute(r,a,l,h,u,new Z)),o&&(c.normal=vt.getInterpolatedAttribute(o,a,l,h,u,new w),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new w,materialIndex:0};vt.getNormal(xs,vs,ws,d.normal),c.face=d,c.barycoord=u}return c}class on extends ct{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],c=[],u=[];let d=0,p=0;f("z","y","x",-1,-1,i,e,t,o,r,0),f("z","y","x",1,-1,i,e,-t,o,r,1),f("x","z","y",1,1,t,i,e,s,o,2),f("x","z","y",1,-1,t,i,-e,s,o,3),f("x","y","z",1,-1,t,e,i,s,r,4),f("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new H(h,3)),this.setAttribute("normal",new H(c,3)),this.setAttribute("uv",new H(u,2));function f(m,y,b,v,x,g,A,M,C,S,E){const z=g/C,k=A/S,F=g/2,$=A/2,R=M/2,U=C+1,q=S+1;let nt=0,Y=0;const L=new w;for(let J=0;J<q;J++){const ut=J*k-$;for(let $e=0;$e<U;$e++){const ls=$e*z-F;L[m]=ls*v,L[y]=ut*x,L[b]=R,h.push(L.x,L.y,L.z),L[m]=0,L[y]=0,L[b]=M>0?1:-1,c.push(L.x,L.y,L.z),u.push($e/C),u.push(1-J/S),nt+=1}}for(let J=0;J<S;J++)for(let ut=0;ut<C;ut++){const $e=d+ut+U*J,ls=d+ut+U*(J+1),Mh=d+(ut+1)+U*(J+1),Lr=d+(ut+1)+U*J;l.push($e,ls,Lr),l.push(ls,Mh,Lr),Y+=6}a.addGroup(p,Y,E),p+=Y,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function an(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function au(n){const t={};for(let e=0;e<n.length;e++){const i=an(n[e]);for(const s in i)t[s]=i[s]}return t}function lu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Cy(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xt.workingColorSpace}const zy={clone:an,merge:au};var hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class uu extends Te{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hu,this.fragmentShader=cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=an(t.uniforms),this.uniformsGroups=lu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ia extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new W,this.projectionMatrix=new W,this.projectionMatrixInverse=new W,this.coordinateSystem=se}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ee=new w,mo=new Z,yo=new Z;class _e extends Ia{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qe*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(Qe*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ee.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ee.x,ee.y).multiplyScalar(-t/ee.z),ee.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ee.x,ee.y).multiplyScalar(-t/ee.z)}getViewSize(t,e){return this.getViewBounds(t,mo,yo),e.subVectors(yo,mo)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qe*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const We=-90,qe=1;class du extends it{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _e(We,qe,t,e);s.layers=this.layers,this.add(s);const r=new _e(We,qe,t,e);r.layers=this.layers,this.add(r);const o=new _e(We,qe,t,e);o.layers=this.layers,this.add(o);const a=new _e(We,qe,t,e);a.layers=this.layers,this.add(a);const l=new _e(We,qe,t,e);l.layers=this.layers,this.add(l);const h=new _e(We,qe,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===se)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=m,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(u,d,p),t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class pu extends mt{constructor(t=[],e=zh,i,s,r,o,a,l,h,c){super(t,e,i,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ey extends Gc{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new pu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Us}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new on(5,5,5),r=new uu({name:"CubemapFromEquirect",uniforms:an(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Aa,blending:Ch});r.uniforms.tEquirect.value=e;const o=new rn(s,r),a=e.minFilter;return e.minFilter===za&&(e.minFilter=Us),new du(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class Ss extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fu={type:"move"};class Ty{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const m of t.hand.values()){const y=e.getJointPose(m,i),b=this._getHandJoint(h,m);y!==null&&(b.matrix.fromArray(y.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=y.radius),b.visible=y!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,f=.005;h.inputState.pinching&&d>p+f?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=p-f&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ss;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Fy extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oe,this.environmentIntensity=1,this.environmentRotation=new oe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qn,this.updateRanges=[],this.version=0,this.uuid=Ut()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ut()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ut()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const at=new w;class Oa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)at.fromBufferAttribute(this,e),at.applyMatrix4(t),this.setXYZ(e,at.x,at.y,at.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)at.fromBufferAttribute(this,e),at.applyNormalMatrix(t),this.setXYZ(e,at.x,at.y,at.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)at.fromBufferAttribute(this,e),at.transformDirection(t),this.setXYZ(e,at.x,at.y,at.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ft(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=P(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=P(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=P(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=P(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=P(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ft(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ft(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ft(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ft(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=P(e,this.array),i=P(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=P(e,this.array),i=P(i,this.array),s=P(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=P(e,this.array),i=P(i,this.array),s=P(s,this.array),r=P(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ht(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Oa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yu extends mt{constructor(t=null,e=1,i=1,s,r,o,a,l,h=ne,c=ne,u,d){super(null,o,a,l,h,c,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class go extends Ht{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ge=new W,bo=new W,Cs=[],xo=new ce,gu=new W,Ci=new rn,zi=new Ee;class ky extends rn{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new go(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,gu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ce),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ge),xo.copy(t.boundingBox).applyMatrix4(Ge),this.boundingBox.union(xo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ee),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ge),zi.copy(t.boundingSphere).applyMatrix4(Ge),this.boundingSphere.union(zi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ci.geometry=this.geometry,Ci.material=this.material,Ci.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(i),t.ray.intersectsSphere(zi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ge),bo.multiplyMatrices(i,Ge),Ci.matrixWorld=bo,Ci.raycast(t,Cs);for(let o=0,a=Cs.length;o<a;o++){const l=Cs[o];l.instanceId=r,l.object=this,e.push(l)}Cs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new go(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new yu(new Float32Array(s*this.count),s,this.count,ka,br));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<i.length;h++)o+=i[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const jn=new w,bu=new w,xu=new Gt;class Xe{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=jn.subVectors(i,e).cross(bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(jn),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xu.getNormalMatrix(t),s=this.coplanarPoint(jn).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xe=new Ee,zs=new w;class vu{constructor(t=new Xe,e=new Xe,i=new Xe,s=new Xe,r=new Xe,o=new Xe){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=se){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],c=s[5],u=s[6],d=s[7],p=s[8],f=s[9],m=s[10],y=s[11],b=s[12],v=s[13],x=s[14],g=s[15];if(i[0].setComponents(l-r,d-h,y-p,g-b).normalize(),i[1].setComponents(l+r,d+h,y+p,g+b).normalize(),i[2].setComponents(l+o,d+c,y+f,g+v).normalize(),i[3].setComponents(l-o,d-c,y-f,g-v).normalize(),i[4].setComponents(l-a,d-u,y-m,g-x).normalize(),e===se)i[5].setComponents(l+a,d+u,y+m,g+x).normalize();else if(e===Vs)i[5].setComponents(a,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xe.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xe.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xe)}intersectsSprite(t){return xe.center.set(0,0,0),xe.radius=.7071067811865476,xe.applyMatrix4(t.matrixWorld),this.intersectsSphere(xe)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(zs.x=s.normal.x>0?t.max.x:t.min.x,zs.y=s.normal.y>0?t.max.y:t.min.y,zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wu extends Te{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ws=new w,qs=new w,vo=new W,Ei=new nn,Es=new Ee,Un=new w,wo=new w;class _u extends it{constructor(t=new ct,e=new wu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ws.fromBufferAttribute(e,s-1),qs.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ws.distanceTo(qs);t.setAttribute("lineDistance",new H(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),Es.radius+=r,t.ray.intersectsSphere(Es)===!1)return;vo.copy(s).invert(),Ei.copy(t.ray).applyMatrix4(vo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=p,y=f-1;m<y;m+=h){const b=c.getX(m),v=c.getX(m+1),x=Ts(this,t,Ei,l,b,v,m);x&&e.push(x)}if(this.isLineLoop){const m=c.getX(f-1),y=c.getX(p),b=Ts(this,t,Ei,l,m,y,f-1);b&&e.push(b)}}else{const p=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=p,y=f-1;m<y;m+=h){const b=Ts(this,t,Ei,l,m,m+1,m);b&&e.push(b)}if(this.isLineLoop){const m=Ts(this,t,Ei,l,f-1,p,f-1);m&&e.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ts(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(Ws.fromBufferAttribute(a,s),qs.fromBufferAttribute(a,r),e.distanceSqToSegment(Ws,qs,Un,wo)>i)return;Un.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Un);if(!(h<t.near||h>t.far))return{distance:h,point:wo.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const _o=new w,Mo=new w;class By extends _u{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)_o.fromBufferAttribute(e,s),Mo.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+_o.distanceTo(Mo);t.setAttribute("lineDistance",new H(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mu extends Te{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ao=new W,tr=new nn,Fs=new Ee,ks=new w;class $y extends it{constructor(t=new ct,e=new Mu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(s),Fs.radius+=r,t.ray.intersectsSphere(Fs)===!1)return;Ao.copy(s).invert(),tr.copy(t.ray).applyMatrix4(Ao);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let f=d,m=p;f<m;f++){const y=h.getX(f);ks.fromBufferAttribute(u,y),So(ks,y,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let f=d,m=p;f<m;f++)ks.fromBufferAttribute(u,f),So(ks,f,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function So(n,t,e,i,s,r,o){const a=tr.distanceSqToPoint(n);if(a<e){const l=new w;tr.closestPointToPoint(n,l),l.applyMatrix4(i);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ry extends mt{constructor(t,e,i=Ta,s,r,o,a=ne,l=ne,h,c=Xr){if(c!==Xr&&c!==Nh)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,c,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Pa extends ct{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],d=[],p=[];let f=0;const m=[],y=i/2;let b=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new H(u,3)),this.setAttribute("normal",new H(d,3)),this.setAttribute("uv",new H(p,2));function v(){const g=new w,A=new w;let M=0;const C=(e-t)/i;for(let S=0;S<=r;S++){const E=[],z=S/r,k=z*(e-t)+t;for(let F=0;F<=s;F++){const $=F/s,R=$*l+a,U=Math.sin(R),q=Math.cos(R);A.x=k*U,A.y=-z*i+y,A.z=k*q,u.push(A.x,A.y,A.z),g.set(U,C,q).normalize(),d.push(g.x,g.y,g.z),p.push($,1-z),E.push(f++)}m.push(E)}for(let S=0;S<s;S++)for(let E=0;E<r;E++){const z=m[E][S],k=m[E+1][S],F=m[E+1][S+1],$=m[E][S+1];(t>0||E!==0)&&(c.push(z,k,$),M+=3),(e>0||E!==r-1)&&(c.push(k,F,$),M+=3)}h.addGroup(b,M,0),b+=M}function x(g){const A=f,M=new Z,C=new w;let S=0;const E=g===!0?t:e,z=g===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,y*z,0),d.push(0,z,0),p.push(.5,.5),f++;const k=f;for(let F=0;F<=s;F++){const R=F/s*l+a,U=Math.cos(R),q=Math.sin(R);C.x=E*q,C.y=y*z,C.z=E*U,u.push(C.x,C.y,C.z),d.push(0,z,0),M.x=U*.5+.5,M.y=q*.5*z+.5,p.push(M.x,M.y),f++}for(let F=0;F<s;F++){const $=A+F,R=k+F;g===!0?c.push(R,R+1,$):c.push(R+1,R,$),S+=3}h.addGroup(b,S,g===!0?1:2),b+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _r extends ct{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),h(i),c(),this.setAttribute("position",new H(r,3)),this.setAttribute("normal",new H(r.slice(),3)),this.setAttribute("uv",new H(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new w,g=new w,A=new w;for(let M=0;M<e.length;M+=3)p(e[M+0],x),p(e[M+1],g),p(e[M+2],A),l(x,g,A,v)}function l(v,x,g,A){const M=A+1,C=[];for(let S=0;S<=M;S++){C[S]=[];const E=v.clone().lerp(g,S/M),z=x.clone().lerp(g,S/M),k=M-S;for(let F=0;F<=k;F++)F===0&&S===M?C[S][F]=E:C[S][F]=E.clone().lerp(z,F/k)}for(let S=0;S<M;S++)for(let E=0;E<2*(M-S)-1;E++){const z=Math.floor(E/2);E%2===0?(d(C[S][z+1]),d(C[S+1][z]),d(C[S][z])):(d(C[S][z+1]),d(C[S+1][z+1]),d(C[S+1][z]))}}function h(v){const x=new w;for(let g=0;g<r.length;g+=3)x.x=r[g+0],x.y=r[g+1],x.z=r[g+2],x.normalize().multiplyScalar(v),r[g+0]=x.x,r[g+1]=x.y,r[g+2]=x.z}function c(){const v=new w;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const g=y(v)/2/Math.PI+.5,A=b(v)/Math.PI+.5;o.push(g,1-A)}f(),u()}function u(){for(let v=0;v<o.length;v+=6){const x=o[v+0],g=o[v+2],A=o[v+4],M=Math.max(x,g,A),C=Math.min(x,g,A);M>.9&&C<.1&&(x<.2&&(o[v+0]+=1),g<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,x){const g=v*3;x.x=t[g+0],x.y=t[g+1],x.z=t[g+2]}function f(){const v=new w,x=new w,g=new w,A=new w,M=new Z,C=new Z,S=new Z;for(let E=0,z=0;E<r.length;E+=9,z+=6){v.set(r[E+0],r[E+1],r[E+2]),x.set(r[E+3],r[E+4],r[E+5]),g.set(r[E+6],r[E+7],r[E+8]),M.set(o[z+0],o[z+1]),C.set(o[z+2],o[z+3]),S.set(o[z+4],o[z+5]),A.copy(v).add(x).add(g).divideScalar(3);const k=y(A);m(M,z+0,v,k),m(C,z+2,x,k),m(S,z+4,g,k)}}function m(v,x,g,A){A<0&&v.x===1&&(o[x]=v.x-1),g.x===0&&g.z===0&&(o[x]=A/2/Math.PI+.5)}function y(v){return Math.atan2(v.z,-v.x)}function b(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.vertices,t.indices,t.radius,t.details)}}const Bs=new w,$s=new w,Vn=new w,Rs=new vt;class Iy extends ct{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Qe*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,h=[0,0,0],c=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){o?(h[0]=o.getX(f),h[1]=o.getX(f+1),h[2]=o.getX(f+2)):(h[0]=f,h[1]=f+1,h[2]=f+2);const{a:m,b:y,c:b}=Rs;if(m.fromBufferAttribute(a,h[0]),y.fromBufferAttribute(a,h[1]),b.fromBufferAttribute(a,h[2]),Rs.getNormal(Vn),u[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,u[2]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const x=(v+1)%3,g=u[v],A=u[x],M=Rs[c[v]],C=Rs[c[x]],S=`${g}_${A}`,E=`${A}_${g}`;E in d&&d[E]?(Vn.dot(d[E].normal)<=r&&(p.push(M.x,M.y,M.z),p.push(C.x,C.y,C.z)),d[E]=null):S in d||(d[S]={index0:h[v],index1:h[x],normal:Vn.clone()})}}for(const f in d)if(d[f]){const{index0:m,index1:y}=d[f];Bs.fromBufferAttribute(a,m),$s.fromBufferAttribute(a,y),p.push(Bs.x,Bs.y,Bs.z),p.push($s.x,$s.y,$s.z)}this.setAttribute("position",new H(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Au(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Da(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(i&&(r=Tu(n,t,r,e)),n.length>80*e){a=1/0,l=1/0;let c=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const p=n[d],f=n[d+1];p<a&&(a=p),f<l&&(l=f),p>c&&(c=p),f>u&&(u=f)}h=Math.max(c-a,u-l),h=h!==0?32767/h:0}return Ni(r,o,e,a,l,h,0),o}function Da(n,t,e,i,s){let r;if(s===Nu(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Co(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Co(o/i|0,n[o],n[o+1],r);return r&&ei(r,r.next)&&(Ui(r),r=r.next),r}function Se(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ei(e,e.next)||V(e.prev,e,e.next)===0)){if(Ui(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ni(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Ru(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,h=n.next;if(r?Cu(n,i,s,r):Su(n)){t.push(l.i,n.i,h.i),Ui(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=zu(Se(n),t),Ni(n,t,e,i,s,r,2)):o===2&&Eu(n,t,e,i,s,r):Ni(Se(n),t,e,i,s,r,1);break}}}function Su(n){const t=n.prev,e=n,i=n.next;if(V(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,c=Math.min(s,r,o),u=Math.min(a,l,h),d=Math.max(s,r,o),p=Math.max(a,l,h);let f=i.next;for(;f!==t;){if(f.x>=c&&f.x<=d&&f.y>=u&&f.y<=p&&ki(s,a,r,l,o,h,f.x,f.y)&&V(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Cu(n,t,e,i){const s=n.prev,r=n,o=n.next;if(V(s,r,o)>=0)return!1;const a=s.x,l=r.x,h=o.x,c=s.y,u=r.y,d=o.y,p=Math.min(a,l,h),f=Math.min(c,u,d),m=Math.max(a,l,h),y=Math.max(c,u,d),b=er(p,f,t,e,i),v=er(m,y,t,e,i);let x=n.prevZ,g=n.nextZ;for(;x&&x.z>=b&&g&&g.z<=v;){if(x.x>=p&&x.x<=m&&x.y>=f&&x.y<=y&&x!==s&&x!==o&&ki(a,c,l,u,h,d,x.x,x.y)&&V(x.prev,x,x.next)>=0||(x=x.prevZ,g.x>=p&&g.x<=m&&g.y>=f&&g.y<=y&&g!==s&&g!==o&&ki(a,c,l,u,h,d,g.x,g.y)&&V(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;x&&x.z>=b;){if(x.x>=p&&x.x<=m&&x.y>=f&&x.y<=y&&x!==s&&x!==o&&ki(a,c,l,u,h,d,x.x,x.y)&&V(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;g&&g.z<=v;){if(g.x>=p&&g.x<=m&&g.y>=f&&g.y<=y&&g!==s&&g!==o&&ki(a,c,l,u,h,d,g.x,g.y)&&V(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function zu(n,t){let e=n;do{const i=e.prev,s=e.next.next;!ei(i,s)&&Na(i,e,e.next,s)&&ji(i,s)&&ji(s,i)&&(t.push(i.i,e.i,s.i),Ui(e),Ui(e.next),e=n=s),e=e.next}while(e!==n);return Se(e)}function Eu(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pu(o,a)){let l=ja(o,a);o=Se(o,o.next),l=Se(l,l.next),Ni(o,t,e,i,s,r,0),Ni(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Tu(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=Da(n,a,l,i,!1);h===h.next&&(h.steiner=!0),s.push(Ou(h))}s.sort(Fu);for(let r=0;r<s.length;r++)e=ku(s[r],e);return e}function Fu(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function ku(n,t){const e=Bu(n,t);if(!e)return t;const i=ja(e,n);return Se(i,i.next),Se(e,e.next)}function Bu(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(ei(n,e))return e;do{if(ei(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,h=o.y;let c=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&La(s<h?i:r,s,l,h,s<h?r:i,s,e.x,e.y)){const u=Math.abs(s-e.y)/(i-e.x);ji(e,n)&&(u<c||u===c&&(e.x>o.x||e.x===o.x&&$u(o,e)))&&(o=e,c=u)}e=e.next}while(e!==a);return o}function $u(n,t){return V(n.prev,n,t.prev)<0&&V(t.next,n,n.next)<0}function Ru(n,t,e,i){let s=n;do s.z===0&&(s.z=er(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Iu(s)}function Iu(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function er(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ou(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function La(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function ki(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&La(n,t,e,i,s,r,o,a)}function Pu(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Du(n,t)&&(ji(n,t)&&ji(t,n)&&Lu(n,t)&&(V(n.prev,n,t.prev)||V(n,t.prev,t))||ei(n,t)&&V(n.prev,n,n.next)>0&&V(t.prev,t,t.next)>0)}function V(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ei(n,t){return n.x===t.x&&n.y===t.y}function Na(n,t,e,i){const s=Os(V(n,t,e)),r=Os(V(n,t,i)),o=Os(V(e,i,n)),a=Os(V(e,i,t));return!!(s!==r&&o!==a||s===0&&Is(n,e,t)||r===0&&Is(n,i,t)||o===0&&Is(e,n,i)||a===0&&Is(e,t,i))}function Is(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Os(n){return n>0?1:n<0?-1:0}function Du(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Na(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ji(n,t){return V(n.prev,n,n.next)<0?V(n,t,n.next)>=0&&V(n,n.prev,t)>=0:V(n,t,n.prev)<0||V(n,n.next,t)<0}function Lu(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ja(n,t){const e=ir(n.i,n.x,n.y),i=ir(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Co(n,t,e,i){const s=ir(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ui(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ir(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Nu(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class ju{static triangulate(t,e,i=2){return Au(t,e,i)}}class Ua{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Ua.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];zo(t),Eo(i,t);let o=t.length;e.forEach(zo);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Eo(i,e[l]);const a=ju.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function zo(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Eo(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Va extends _r{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Va(t.radius,t.detail)}}class Ha extends ct{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,c=l+1,u=t/a,d=e/l,p=[],f=[],m=[],y=[];for(let b=0;b<c;b++){const v=b*d-o;for(let x=0;x<h;x++){const g=x*u-r;f.push(g,-v,0),m.push(0,0,1),y.push(x/a),y.push(1-b/l)}}for(let b=0;b<l;b++)for(let v=0;v<a;v++){const x=v+h*b,g=v+h*(b+1),A=v+1+h*(b+1),M=v+1+h*b;p.push(x,g,M),p.push(g,A,M)}this.setIndex(p),this.setAttribute("position",new H(f,3)),this.setAttribute("normal",new H(m,3)),this.setAttribute("uv",new H(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wa extends ct{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let h=0;const c=[],u=new w,d=new w,p=[],f=[],m=[],y=[];for(let b=0;b<=i;b++){const v=[],x=b/i;let g=0;b===0&&o===0?g=.5/e:b===i&&l===Math.PI&&(g=-.5/e);for(let A=0;A<=e;A++){const M=A/e;u.x=-t*Math.cos(s+M*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+M*r)*Math.sin(o+x*a),f.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),y.push(M+g,1-x),v.push(h++)}c.push(v)}for(let b=0;b<i;b++)for(let v=0;v<e;v++){const x=c[b][v+1],g=c[b][v],A=c[b+1][v],M=c[b+1][v+1];(b!==0||o>0)&&p.push(x,g,M),(b!==i-1||l<Math.PI)&&p.push(g,A,M)}this.setIndex(p),this.setAttribute("position",new H(f,3)),this.setAttribute("normal",new H(m,3)),this.setAttribute("uv",new H(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qa extends ct{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],h=[],c=new w,u=new w,d=new w;for(let p=0;p<=i;p++)for(let f=0;f<=s;f++){const m=f/s*r,y=p/i*Math.PI*2;u.x=(t+e*Math.cos(y))*Math.cos(m),u.y=(t+e*Math.cos(y))*Math.sin(m),u.z=e*Math.sin(y),a.push(u.x,u.y,u.z),c.x=t*Math.cos(m),c.y=t*Math.sin(m),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(f/s),h.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=s;f++){const m=(s+1)*p+f-1,y=(s+1)*(p-1)+f-1,b=(s+1)*(p-1)+f,v=(s+1)*p+f;o.push(m,y,v),o.push(y,b,v)}this.setIndex(o),this.setAttribute("position",new H(a,3)),this.setAttribute("normal",new H(l,3)),this.setAttribute("uv",new H(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Oy extends ct{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new w,r=new w;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let h=0,c=l.length;h<c;++h){const u=l[h],d=u.start,p=u.count;for(let f=d,m=d+p;f<m;f+=3)for(let y=0;y<3;y++){const b=a.getX(f+y),v=a.getX(f+(y+1)%3);s.fromBufferAttribute(o,b),r.fromBufferAttribute(o,v),To(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let h=0;h<3;h++){const c=3*a+h,u=3*a+(h+1)%3;s.fromBufferAttribute(o,c),r.fromBufferAttribute(o,u),To(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new H(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function To(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class Py extends Te{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oe,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dy extends Te{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ly extends Te{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ga extends it{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Hn=new W,Fo=new w,ko=new w;class Uu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new W,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vu,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Fo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fo),ko.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ko),e.updateMatrixWorld(),Hn.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hn),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hn)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vu extends Ia{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Hu extends Uu{constructor(){super(new Vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ny extends Ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new Hu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jy extends Ga{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Uy extends ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Vy extends _e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Hy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bo(){return performance.now()}class Wy extends mu{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const $o=new W;class qy{constructor(t,e,i=0,s=1/0){this.ray=new nn(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new $a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $o.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($o),this}intersectObject(t,e=!0,i=[]){return sr(t,this,i,e),i.sort(Ro),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)sr(t[s],this,i,e);return i.sort(Ro),i}}function Ro(n,t){return n.distance-t.distance}function sr(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)sr(r[o],t,e,!0)}}class Gy{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=B(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(B(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Io=new w,Ps=new w;class Xy{constructor(t=new w,e=new w){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Io.subVectors(t,this.start),Ps.subVectors(this.end,this.start);const i=Ps.dot(Ps);let r=Ps.dot(Io)/i;return e&&(r=B(r,0,1)),r}closestPointToPoint(t,e,i){const s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Zy extends di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Yy(n,t,e,i){const s=Wu(i);switch(e){case Oh:return n*t;case Dh:return n*t;case Lh:return n*t*2;case ka:return n*t/s.components*s.byteLength;case jh:return n*t/s.components*s.byteLength;case Uh:return n*t*2/s.components*s.byteLength;case Vh:return n*t*2/s.components*s.byteLength;case Ph:return n*t*3/s.components*s.byteLength;case Fa:return n*t*4/s.components*s.byteLength;case Hh:return n*t*4/s.components*s.byteLength;case Wh:case qh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Gh:case Xh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yh:case Qh:return Math.max(n,16)*Math.max(t,8)/4;case Zh:case Jh:return Math.max(n,8)*Math.max(t,8)/2;case Kh:case tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case yc:case gc:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case xc:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wc:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wu(n){switch(n){case Ea:case Eh:return{byteLength:1,components:1};case Fh:case Th:case Bh:return{byteLength:2,components:1};case $h:case Rh:return{byteLength:2,components:4};case Ta:case kh:case br:return{byteLength:4,components:1};case Ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);var qu=Object.defineProperty,Gu=(n,t,e)=>t in n?qu(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ve=(n,t,e)=>(Gu(n,typeof t!="symbol"?t+"":t,e),e);const ii=Math.min,Wt=Math.max,Gs=Math.round,ae=n=>({x:n,y:n}),Xu={left:"right",right:"left",bottom:"top",top:"bottom"},Zu={start:"end",end:"start"};function Oo(n,t,e){return Wt(n,ii(t,e))}function Ji(n,t){return typeof n=="function"?n(t):n}function qt(n){return n.split("-")[0]}function ln(n){return n.split("-")[1]}function Xa(n){return n==="x"?"y":"x"}function Za(n){return n==="y"?"height":"width"}function Ce(n){return["top","bottom"].includes(qt(n))?"y":"x"}function Ya(n){return Xa(Ce(n))}function Yu(n,t,e){e===void 0&&(e=!1);const i=ln(n),s=Ya(n),r=Za(s);let o=s==="x"?i===(e?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=Xs(o)),[o,Xs(o)]}function Ju(n){const t=Xs(n);return[nr(n),t,nr(t)]}function nr(n){return n.replace(/start|end/g,t=>Zu[t])}function Qu(n,t,e){const i=["left","right"],s=["right","left"],r=["top","bottom"],o=["bottom","top"];switch(n){case"top":case"bottom":return e?t?s:i:t?i:s;case"left":case"right":return t?r:o;default:return[]}}function Ku(n,t,e,i){const s=ln(n);let r=Qu(qt(n),e==="start",i);return s&&(r=r.map(o=>o+"-"+s),t&&(r=r.concat(r.map(nr)))),r}function Xs(n){return n.replace(/left|right|bottom|top/g,t=>Xu[t])}function td(n){return{top:0,right:0,bottom:0,left:0,...n}}function Ja(n){return typeof n!="number"?td(n):{top:n,right:n,bottom:n,left:n}}function si(n){const{x:t,y:e,width:i,height:s}=n;return{width:i,height:s,top:e,left:t,right:t+i,bottom:e+s,x:t,y:e}}function Po(n,t,e){let{reference:i,floating:s}=n;const r=Ce(t),o=Ya(t),a=Za(o),l=qt(t),h=r==="y",c=i.x+i.width/2-s.width/2,u=i.y+i.height/2-s.height/2,d=i[a]/2-s[a]/2;let p;switch(l){case"top":p={x:c,y:i.y-s.height};break;case"bottom":p={x:c,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:u};break;case"left":p={x:i.x-s.width,y:u};break;default:p={x:i.x,y:i.y}}switch(ln(t)){case"start":p[o]-=d*(e&&h?-1:1);break;case"end":p[o]+=d*(e&&h?-1:1);break}return p}const ed=async(n,t,e)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:o}=e,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let h=await o.getElementRects({reference:n,floating:t,strategy:s}),{x:c,y:u}=Po(h,i,l),d=i,p={},f=0;for(let m=0;m<a.length;m++){const{name:y,fn:b}=a[m],{x:v,y:x,data:g,reset:A}=await b({x:c,y:u,initialPlacement:i,placement:d,strategy:s,middlewareData:p,rects:h,platform:o,elements:{reference:n,floating:t}});c=v??c,u=x??u,p={...p,[y]:{...p[y],...g}},A&&f<=50&&(f++,typeof A=="object"&&(A.placement&&(d=A.placement),A.rects&&(h=A.rects===!0?await o.getElementRects({reference:n,floating:t,strategy:s}):A.rects),{x:c,y:u}=Po(h,d,l)),m=-1)}return{x:c,y:u,placement:d,strategy:s,middlewareData:p}};async function Qa(n,t){var e;t===void 0&&(t={});const{x:i,y:s,platform:r,rects:o,elements:a,strategy:l}=n,{boundary:h="clippingAncestors",rootBoundary:c="viewport",elementContext:u="floating",altBoundary:d=!1,padding:p=0}=Ji(t,n),f=Ja(p),m=a[d?u==="floating"?"reference":"floating":u],y=si(await r.getClippingRect({element:(e=await(r.isElement==null?void 0:r.isElement(m)))==null||e?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:h,rootBoundary:c,strategy:l})),b=u==="floating"?{x:i,y:s,width:o.floating.width,height:o.floating.height}:o.reference,v=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),x=await(r.isElement==null?void 0:r.isElement(v))?await(r.getScale==null?void 0:r.getScale(v))||{x:1,y:1}:{x:1,y:1},g=si(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:v,strategy:l}):b);return{top:(y.top-g.top+f.top)/x.y,bottom:(g.bottom-y.bottom+f.bottom)/x.y,left:(y.left-g.left+f.left)/x.x,right:(g.right-y.right+f.right)/x.x}}const id=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(t){var e,i;const{placement:s,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:h}=t,{mainAxis:c=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...y}=Ji(n,t);if((e=r.arrow)!=null&&e.alignmentOffset)return{};const b=qt(s),v=Ce(a),x=qt(a)===a,g=await(l.isRTL==null?void 0:l.isRTL(h.floating)),A=d||(x||!m?[Xs(a)]:Ju(a)),M=f!=="none";!d&&M&&A.push(...Ku(a,m,f,g));const C=[a,...A],S=await Qa(t,y),E=[];let z=((i=r.flip)==null?void 0:i.overflows)||[];if(c&&E.push(S[b]),u){const R=Yu(s,o,g);E.push(S[R[0]],S[R[1]])}if(z=[...z,{placement:s,overflows:E}],!E.every(R=>R<=0)){var k,F;const R=(((k=r.flip)==null?void 0:k.index)||0)+1,U=C[R];if(U)return{data:{index:R,overflows:z},reset:{placement:U}};let q=(F=z.filter(nt=>nt.overflows[0]<=0).sort((nt,Y)=>nt.overflows[1]-Y.overflows[1])[0])==null?void 0:F.placement;if(!q)switch(p){case"bestFit":{var $;const nt=($=z.filter(Y=>{if(M){const L=Ce(Y.placement);return L===v||L==="y"}return!0}).map(Y=>[Y.placement,Y.overflows.filter(L=>L>0).reduce((L,J)=>L+J,0)]).sort((Y,L)=>Y[1]-L[1])[0])==null?void 0:$[0];nt&&(q=nt);break}case"initialPlacement":q=a;break}if(s!==q)return{reset:{placement:q}}}return{}}}};function Ka(n){const t=ii(...n.map(r=>r.left)),e=ii(...n.map(r=>r.top)),i=Wt(...n.map(r=>r.right)),s=Wt(...n.map(r=>r.bottom));return{x:t,y:e,width:i-t,height:s-e}}function sd(n){const t=n.slice().sort((s,r)=>s.y-r.y),e=[];let i=null;for(let s=0;s<t.length;s++){const r=t[s];!i||r.y-i.y>i.height/2?e.push([r]):e[e.length-1].push(r),i=r}return e.map(s=>si(Ka(s)))}const nd=function(n){return n===void 0&&(n={}),{name:"inline",options:n,async fn(t){const{placement:e,elements:i,rects:s,platform:r,strategy:o}=t,{padding:a=2,x:l,y:h}=Ji(n,t),c=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(i.reference))||[]),u=sd(c),d=si(Ka(c)),p=Ja(a);function f(){if(u.length===2&&u[0].left>u[1].right&&l!=null&&h!=null)return u.find(y=>l>y.left-p.left&&l<y.right+p.right&&h>y.top-p.top&&h<y.bottom+p.bottom)||d;if(u.length>=2){if(Ce(e)==="y"){const z=u[0],k=u[u.length-1],F=qt(e)==="top",$=z.top,R=k.bottom,U=F?z.left:k.left,q=F?z.right:k.right,nt=q-U,Y=R-$;return{top:$,bottom:R,left:U,right:q,width:nt,height:Y,x:U,y:$}}const y=qt(e)==="left",b=Wt(...u.map(z=>z.right)),v=ii(...u.map(z=>z.left)),x=u.filter(z=>y?z.left===v:z.right===b),g=x[0].top,A=x[x.length-1].bottom,M=v,C=b,S=C-M,E=A-g;return{top:g,bottom:A,left:M,right:C,width:S,height:E,x:M,y:g}}return d}const m=await r.getElementRects({reference:{getBoundingClientRect:f},floating:i.floating,strategy:o});return s.reference.x!==m.reference.x||s.reference.y!==m.reference.y||s.reference.width!==m.reference.width||s.reference.height!==m.reference.height?{reset:{rects:m}}:{}}}};async function rd(n,t){const{placement:e,platform:i,elements:s}=n,r=await(i.isRTL==null?void 0:i.isRTL(s.floating)),o=qt(e),a=ln(e),l=Ce(e)==="y",h=["left","top"].includes(o)?-1:1,c=r&&l?-1:1,u=Ji(t,n);let{mainAxis:d,crossAxis:p,alignmentAxis:f}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof f=="number"&&(p=a==="end"?f*-1:f),l?{x:p*c,y:d*h}:{x:d*h,y:p*c}}const tl=function(n){return{name:"offset",options:n,async fn(t){var e,i;const{x:s,y:r,placement:o,middlewareData:a}=t,l=await rd(t,n);return o===((e=a.offset)==null?void 0:e.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:r+l.y,data:{...l,placement:o}}}}},od=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(t){const{x:e,y:i,placement:s}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:y=>{let{x:b,y:v}=y;return{x:b,y:v}}},...l}=Ji(n,t),h={x:e,y:i},c=await Qa(t,l),u=Ce(qt(s)),d=Xa(u);let p=h[d],f=h[u];if(r){const y=d==="y"?"top":"left",b=d==="y"?"bottom":"right",v=p+c[y],x=p-c[b];p=Oo(v,p,x)}if(o){const y=u==="y"?"top":"left",b=u==="y"?"bottom":"right",v=f+c[y],x=f-c[b];f=Oo(v,f,x)}const m=a.fn({...t,[d]:p,[u]:f});return{...m,data:{x:m.x-e,y:m.y-i,enabled:{[d]:r,[u]:o}}}}}};function hn(){return typeof window<"u"}function le(n){return el(n)?(n.nodeName||"").toLowerCase():"#document"}function yt(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function ue(n){var t;return(t=(el(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function el(n){return hn()?n instanceof Node||n instanceof yt(n).Node:!1}function Rt(n){return hn()?n instanceof Element||n instanceof yt(n).Element:!1}function It(n){return hn()?n instanceof HTMLElement||n instanceof yt(n).HTMLElement:!1}function Do(n){return!hn()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof yt(n).ShadowRoot}function Qi(n){const{overflow:t,overflowX:e,overflowY:i,display:s}=wt(n);return/auto|scroll|overlay|hidden|clip/.test(t+i+e)&&!["inline","contents"].includes(s)}function ad(n){return["table","td","th"].includes(le(n))}function ld(n){return[":popover-open",":modal"].some(t=>{try{return n.matches(t)}catch{return!1}})}function Mr(n){const t=Ar(),e=Rt(n)?wt(n):n;return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(e.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(e.contain||"").includes(i))}function hd(n){let t=ni(n);for(;It(t)&&!cn(t);){if(Mr(t))return t;if(ld(t))return null;t=ni(t)}return null}function Ar(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function cn(n){return["html","body","#document"].includes(le(n))}function wt(n){return yt(n).getComputedStyle(n)}function un(n){return Rt(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function ni(n){if(le(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Do(n)&&n.host||ue(n);return Do(t)?t.host:t}function il(n){const t=ni(n);return cn(t)?n.ownerDocument?n.ownerDocument.body:n.body:It(t)&&Qi(t)?t:il(t)}function sl(n,t,e){var i;t===void 0&&(t=[]);const s=il(n),r=s===((i=n.ownerDocument)==null?void 0:i.body),o=yt(s);return r?(cd(o),t.concat(o,o.visualViewport||[],Qi(s)?s:[],[])):t.concat(s,sl(s,[]))}function cd(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function nl(n){const t=wt(n);let e=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=It(n),r=s?n.offsetWidth:e,o=s?n.offsetHeight:i,a=Gs(e)!==r||Gs(i)!==o;return a&&(e=r,i=o),{width:e,height:i,$:a}}function rl(n){return Rt(n)?n:n.contextElement}function ti(n){const t=rl(n);if(!It(t))return ae(1);const e=t.getBoundingClientRect(),{width:i,height:s,$:r}=nl(t);let o=(r?Gs(e.width):e.width)/i,a=(r?Gs(e.height):e.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const ud=ae(0);function ol(n){const t=yt(n);return!Ar()||!t.visualViewport?ud:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function dd(n,t,e){return t===void 0&&(t=!1),!e||t&&e!==yt(n)?!1:t}function Vi(n,t,e,i){t===void 0&&(t=!1),e===void 0&&(e=!1);const s=n.getBoundingClientRect(),r=rl(n);let o=ae(1);t&&(i?Rt(i)&&(o=ti(i)):o=ti(n));const a=dd(r,e,i)?ol(r):ae(0);let l=(s.left+a.x)/o.x,h=(s.top+a.y)/o.y,c=s.width/o.x,u=s.height/o.y;if(r){const d=yt(r),p=i&&Rt(i)?yt(i):i;let f=d,m=f.frameElement;for(;m&&i&&p!==f;){const y=ti(m),b=m.getBoundingClientRect(),v=wt(m),x=b.left+(m.clientLeft+parseFloat(v.paddingLeft))*y.x,g=b.top+(m.clientTop+parseFloat(v.paddingTop))*y.y;l*=y.x,h*=y.y,c*=y.x,u*=y.y,l+=x,h+=g,f=yt(m),m=f.frameElement}}return si({width:c,height:u,x:l,y:h})}const pd=[":popover-open",":modal"];function al(n){return pd.some(t=>{try{return n.matches(t)}catch{return!1}})}function fd(n){let{elements:t,rect:e,offsetParent:i,strategy:s}=n;const r=s==="fixed",o=ue(i),a=t?al(t.floating):!1;if(i===o||a&&r)return e;let l={scrollLeft:0,scrollTop:0},h=ae(1);const c=ae(0),u=It(i);if((u||!u&&!r)&&((le(i)!=="body"||Qi(o))&&(l=un(i)),It(i))){const d=Vi(i);h=ti(i),c.x=d.x+i.clientLeft,c.y=d.y+i.clientTop}return{width:e.width*h.x,height:e.height*h.y,x:e.x*h.x-l.scrollLeft*h.x+c.x,y:e.y*h.y-l.scrollTop*h.y+c.y}}function md(n){return Array.from(n.getClientRects())}function ll(n){return Vi(ue(n)).left+un(n).scrollLeft}function yd(n){const t=ue(n),e=un(n),i=n.ownerDocument.body,s=Wt(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=Wt(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let o=-e.scrollLeft+ll(n);const a=-e.scrollTop;return wt(i).direction==="rtl"&&(o+=Wt(t.clientWidth,i.clientWidth)-s),{width:s,height:r,x:o,y:a}}function gd(n,t){const e=yt(n),i=ue(n),s=e.visualViewport;let r=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;const h=Ar();(!h||h&&t==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a,y:l}}function bd(n,t){const e=Vi(n,!0,t==="fixed"),i=e.top+n.clientTop,s=e.left+n.clientLeft,r=It(n)?ti(n):ae(1),o=n.clientWidth*r.x,a=n.clientHeight*r.y,l=s*r.x,h=i*r.y;return{width:o,height:a,x:l,y:h}}function Lo(n,t,e){let i;if(t==="viewport")i=gd(n,e);else if(t==="document")i=yd(ue(n));else if(Rt(t))i=bd(t,e);else{const s=ol(n);i={...t,x:t.x-s.x,y:t.y-s.y}}return si(i)}function hl(n,t){const e=ni(n);return e===t||!Rt(e)||cn(e)?!1:wt(e).position==="fixed"||hl(e,t)}function xd(n,t){const e=t.get(n);if(e)return e;let i=sl(n,[]).filter(a=>Rt(a)&&le(a)!=="body"),s=null;const r=wt(n).position==="fixed";let o=r?ni(n):n;for(;Rt(o)&&!cn(o);){const a=wt(o),l=Mr(o);!l&&a.position==="fixed"&&(s=null),(r?!l&&!s:!l&&a.position==="static"&&s&&["absolute","fixed"].includes(s.position)||Qi(o)&&!l&&hl(n,o))?i=i.filter(h=>h!==o):s=a,o=ni(o)}return t.set(n,i),i}function vd(n){let{element:t,boundary:e,rootBoundary:i,strategy:s}=n;const r=[...e==="clippingAncestors"?xd(t,this._c):[].concat(e),i],o=r[0],a=r.reduce((l,h)=>{const c=Lo(t,h,s);return l.top=Wt(c.top,l.top),l.right=ii(c.right,l.right),l.bottom=ii(c.bottom,l.bottom),l.left=Wt(c.left,l.left),l},Lo(t,o,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function wd(n){const{width:t,height:e}=nl(n);return{width:t,height:e}}function _d(n,t,e){const i=It(t),s=ue(t),r=e==="fixed",o=Vi(n,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=ae(0);if(i||!i&&!r)if((le(t)!=="body"||Qi(s))&&(a=un(t)),i){const u=Vi(t,!0,r,t);l.x=u.x+t.clientLeft,l.y=u.y+t.clientTop}else s&&(l.x=ll(s));const h=o.left+a.scrollLeft-l.x,c=o.top+a.scrollTop-l.y;return{x:h,y:c,width:o.width,height:o.height}}function No(n,t){return!It(n)||wt(n).position==="fixed"?null:t?t(n):n.offsetParent}function cl(n,t){const e=yt(n);if(!It(n)||al(n))return e;let i=No(n,t);for(;i&&ad(i)&&wt(i).position==="static";)i=No(i,t);return i&&(le(i)==="html"||le(i)==="body"&&wt(i).position==="static"&&!Mr(i))?e:i||hd(n)||e}const Md=async function(n){const t=this.getOffsetParent||cl,e=this.getDimensions;return{reference:_d(n.reference,await t(n.floating),n.strategy),floating:{x:0,y:0,...await e(n.floating)}}};function Ad(n){return wt(n).direction==="rtl"}const Sd={convertOffsetParentRelativeRectToViewportRelativeRect:fd,getDocumentElement:ue,getClippingRect:vd,getOffsetParent:cl,getElementRects:Md,getClientRects:md,getDimensions:wd,getScale:ti,isElement:Rt,isRTL:Ad},ul=od,dl=id,pl=nd,fl=(n,t,e)=>{const i=new Map,s={platform:Sd,...e},r={...s.platform,_c:i};return ed(n,t,{...s,platform:r})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ns=globalThis,Sr=Ns.ShadowRoot&&(Ns.ShadyCSS===void 0||Ns.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Cr=Symbol(),jo=new WeakMap;let ml=class{constructor(n,t,e){if(this._$cssResult$=!0,e!==Cr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=t}get styleSheet(){let n=this.o;const t=this.t;if(Sr&&n===void 0){const e=t!==void 0&&t.length===1;e&&(n=jo.get(t)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),e&&jo.set(t,n))}return n}toString(){return this.cssText}};const Cd=n=>new ml(typeof n=="string"?n:n+"",void 0,Cr),D=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new ml(e,n,Cr)},zd=(n,t)=>{if(Sr)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=Ns.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},Uo=Sr?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Cd(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ed,defineProperty:Td,getOwnPropertyDescriptor:Fd,getOwnPropertyNames:kd,getOwnPropertySymbols:Bd,getPrototypeOf:$d}=Object,ri=globalThis,Vo=ri.trustedTypes,Rd=Vo?Vo.emptyScript:"",Ho=ri.reactiveElementPolyfillSupport,Ii=(n,t)=>n,Zs={toAttribute(n,t){switch(t){case Boolean:n=n?Rd:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},zr=(n,t)=>!Ed(n,t),Wo={attribute:!0,type:String,converter:Zs,reflect:!1,hasChanged:zr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ri.litPropertyMetadata??(ri.litPropertyMetadata=new WeakMap);class Ze extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Wo){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Td(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Fd(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return s?.call(this)},set(o){const a=s?.call(this);r.call(this,o),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Wo}static _$Ei(){if(this.hasOwnProperty(Ii("elementProperties")))return;const t=$d(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ii("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ii("properties"))){const e=this.properties,i=[...kd(e),...Bd(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Uo(s))}else t!==void 0&&e.push(Uo(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zd(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:Zs).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:Zs;this._$Em=r,this[r]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??zr)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}Ze.elementStyles=[],Ze.shadowRootOptions={mode:"open"},Ze[Ii("elementProperties")]=new Map,Ze[Ii("finalized")]=new Map,Ho?.({ReactiveElement:Ze}),(ri.reactiveElementVersions??(ri.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ys=globalThis,Js=Ys.trustedTypes,qo=Js?Js.createPolicy("lit-html",{createHTML:n=>n}):void 0,yl="$lit$",ie=`lit$${Math.random().toFixed(9).slice(2)}$`,gl="?"+ie,Id=`<${gl}>`,ze=document,Hi=()=>ze.createComment(""),Wi=n=>n===null||typeof n!="object"&&typeof n!="function",Er=Array.isArray,Od=n=>Er(n)||typeof n?.[Symbol.iterator]=="function",Wn=`[ 	
\f\r]`,Ti=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Go=/-->/g,Xo=/>/g,we=RegExp(`>|${Wn}(?:([^\\s"'>=/]+)(${Wn}*=${Wn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zo=/'/g,Yo=/"/g,bl=/^(?:script|style|textarea|title)$/i,Pd=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),T=Pd(1),oi=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Jo=new WeakMap,Me=ze.createTreeWalker(ze,129);function xl(n,t){if(!Er(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return qo!==void 0?qo.createHTML(t):t}const Dd=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":t===3?"<math>":"",o=Ti;for(let a=0;a<e;a++){const l=n[a];let h,c,u=-1,d=0;for(;d<l.length&&(o.lastIndex=d,c=o.exec(l),c!==null);)d=o.lastIndex,o===Ti?c[1]==="!--"?o=Go:c[1]!==void 0?o=Xo:c[2]!==void 0?(bl.test(c[2])&&(s=RegExp("</"+c[2],"g")),o=we):c[3]!==void 0&&(o=we):o===we?c[0]===">"?(o=s??Ti,u=-1):c[1]===void 0?u=-2:(u=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?we:c[3]==='"'?Yo:Zo):o===Yo||o===Zo?o=we:o===Go||o===Xo?o=Ti:(o=we,s=void 0);const p=o===we&&n[a+1].startsWith("/>")?" ":"";r+=o===Ti?l+Id:u>=0?(i.push(h),l.slice(0,u)+yl+l.slice(u)+ie+p):l+ie+(u===-2?a:p)}return[xl(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class qi{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const a=t.length-1,l=this.parts,[h,c]=Dd(t,e);if(this.el=qi.createElement(h,i),Me.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=Me.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(yl)){const d=c[o++],p=s.getAttribute(u).split(ie),f=/([.?@])?(.*)/.exec(d);l.push({type:1,index:r,name:f[2],strings:p,ctor:f[1]==="."?Nd:f[1]==="?"?jd:f[1]==="@"?Ud:dn}),s.removeAttribute(u)}else u.startsWith(ie)&&(l.push({type:6,index:r}),s.removeAttribute(u));if(bl.test(s.tagName)){const u=s.textContent.split(ie),d=u.length-1;if(d>0){s.textContent=Js?Js.emptyScript:"";for(let p=0;p<d;p++)s.append(u[p],Hi()),Me.nextNode(),l.push({type:2,index:++r});s.append(u[d],Hi())}}}else if(s.nodeType===8)if(s.data===gl)l.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(ie,u+1))!==-1;)l.push({type:7,index:r}),u+=ie.length-1}r++}}static createElement(t,e){const i=ze.createElement("template");return i.innerHTML=t,i}}function ai(n,t,e=n,i){var s,r;if(t===oi)return t;let o=i!==void 0?(s=e._$Co)==null?void 0:s[i]:e._$Cl;const a=Wi(t)?void 0:t._$litDirective$;return o?.constructor!==a&&((r=o?._$AO)==null||r.call(o,!1),a===void 0?o=void 0:(o=new a(n),o._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=o:e._$Cl=o),o!==void 0&&(t=ai(n,o._$AS(n,t.values),o,i)),t}class Ld{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??ze).importNode(e,!0);Me.currentNode=s;let r=Me.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new Ki(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new Vd(r,this,t)),this._$AV.push(h),l=i[++a]}o!==l?.index&&(r=Me.nextNode(),o++)}return Me.currentNode=ze,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Ki{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ai(this,t,e),Wi(t)?t===G||t==null||t===""?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==oi&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Od(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&Wi(this._$AH)?this._$AA.nextSibling.data=t:this.T(ze.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=qi.createElement(xl(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)==null?void 0:e._$AD)===r)this._$AH.p(i);else{const o=new Ld(r,this),a=o.u(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(t){let e=Jo.get(t.strings);return e===void 0&&Jo.set(t.strings,e=new qi(t)),e}k(t){Er(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Ki(this.O(Hi()),this.O(Hi()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class dn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=ai(this,t,e,0),o=!Wi(t)||t!==this._$AH&&t!==oi,o&&(this._$AH=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=ai(this,a[i+l],e,l),h===oi&&(h=this._$AH[l]),o||(o=!Wi(h)||h!==this._$AH[l]),h===G?t=G:t!==G&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nd extends dn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class jd extends dn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class Ud extends dn{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=ai(this,t,e,0)??G)===oi)return;const i=this._$AH,s=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==G&&(i===G||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Vd{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ai(this,t)}}const Qo=Ys.litHtmlPolyfillSupport;Qo?.(qi,Ki),(Ys.litHtmlVersions??(Ys.litHtmlVersions=[])).push("3.2.1");const li=(n,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const r=e?.renderBefore??null;i._$litPart$=s=new Ki(t.insertBefore(Hi(),r),r,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let O=class extends Ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(n){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=li(t,this.renderRoot,this.renderOptions)}connectedCallback(){var n;super.connectedCallback(),(n=this._$Do)==null||n.setConnected(!0)}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this._$Do)==null||n.setConnected(!1)}render(){return oi}};var Ko;O._$litElement$=!0,O.finalized=!0,(Ko=globalThis.litElementHydrateSupport)==null||Ko.call(globalThis,{LitElement:O});const ta=globalThis.litElementPolyfillSupport;ta?.({LitElement:O});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hd={attribute:!0,type:String,converter:Zs,reflect:!1,hasChanged:zr},Wd=(n=Hd,t,e)=>{const{kind:i,metadata:s}=e;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(e.name,n),i==="accessor"){const{name:o}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,n)},init(a){return a!==void 0&&this.P(o,void 0,n),a}}}if(i==="setter"){const{name:o}=e;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,n)}}throw Error("Unsupported decorator location: "+i)};function _(n){return(t,e)=>typeof e=="object"?Wd(n,t,e):((i,s,r)=>{const o=s.hasOwnProperty(r);return s.constructor.createProperty(r,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,r):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pi(n){return _({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qd=n=>n.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gd={CHILD:2},Xd=n=>(...t)=>({_$litDirective$:n,values:t});let Zd=class{constructor(n){}get _$AU(){return this._$AM._$AU}_$AT(n,t,e){this._$Ct=n,this._$AM=t,this._$Ci=e}_$AS(n,t){return this.update(n,t)}update(n,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oi=(n,t)=>{var e;const i=n._$AN;if(i===void 0)return!1;for(const s of i)(e=s._$AO)==null||e.call(s,t,!1),Oi(s,t);return!0},Qs=n=>{let t,e;do{if((t=n._$AM)===void 0)break;e=t._$AN,e.delete(n),n=t}while(e?.size===0)},vl=n=>{for(let t;t=n._$AM;n=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(n))break;e.add(n),Qd(t)}};function Yd(n){this._$AN!==void 0?(Qs(this),this._$AM=n,vl(this)):this._$AM=n}function Jd(n,t=!1,e=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(i))for(let r=e;r<i.length;r++)Oi(i[r],!1),Qs(i[r]);else i!=null&&(Oi(i,!1),Qs(i));else Oi(this,n)}const Qd=n=>{n.type==Gd.CHILD&&(n._$AP??(n._$AP=Jd),n._$AQ??(n._$AQ=Yd))};class Kd extends Zd{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),vl(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),e&&(Oi(this,t),Qs(this))}setValue(t){if(qd(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hi=()=>new tp;class tp{}const qn=new WeakMap,ci=Xd(class extends Kd{render(n){return G}update(n,[t]){var e;const i=t!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=(e=n.options)==null?void 0:e.host,this.rt(this.ct=n.element)),G}rt(n){if(this.isConnected||(n=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=qn.get(t);e===void 0&&(e=new WeakMap,qn.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,n),n!==void 0&&this.Y.call(this.ht,n)}else this.Y.value=n}get lt(){var n,t;return typeof this.Y=="function"?(n=qn.get(this.ht??globalThis))==null?void 0:n.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const wl=Object.freeze({left:0,top:0,width:16,height:16}),Ks=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ts=Object.freeze({...wl,...Ks}),rr=Object.freeze({...ts,body:"",hidden:!1}),ep=Object.freeze({width:null,height:null}),_l=Object.freeze({...ep,...Ks});function ip(n,t=0){const e=n.replace(/^-?[0-9.]*/,"");function i(s){for(;s<0;)s+=4;return s%4}if(e===""){const s=parseInt(n);return isNaN(s)?0:i(s)}else if(e!==n){let s=0;switch(e){case"%":s=25;break;case"deg":s=90}if(s){let r=parseFloat(n.slice(0,n.length-e.length));return isNaN(r)?0:(r=r/s,r%1===0?i(r):0)}}return t}const sp=/[\s,]+/;function np(n,t){t.split(sp).forEach(e=>{switch(e.trim()){case"horizontal":n.hFlip=!0;break;case"vertical":n.vFlip=!0;break}})}const Ml={..._l,preserveAspectRatio:""};function ea(n){const t={...Ml},e=(i,s)=>n.getAttribute(i)||s;return t.width=e("width",null),t.height=e("height",null),t.rotate=ip(e("rotate","")),np(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function rp(n,t){for(const e in Ml)if(n[e]!==t[e])return!0;return!1}const Pi=/^[a-z0-9]+(-[a-z0-9]+)*$/,es=(n,t,e,i="")=>{const s=n.split(":");if(n.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;i=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),l=s.pop(),h={provider:s.length>0?s[0]:i,prefix:l,name:a};return t&&!js(h)?null:h}const r=s[0],o=r.split("-");if(o.length>1){const a={provider:i,prefix:o.shift(),name:o.join("-")};return t&&!js(a)?null:a}if(e&&i===""){const a={provider:i,prefix:"",name:r};return t&&!js(a,e)?null:a}return null},js=(n,t)=>n?!!((n.provider===""||n.provider.match(Pi))&&(t&&n.prefix===""||n.prefix.match(Pi))&&n.name.match(Pi)):!1;function op(n,t){const e={};!n.hFlip!=!t.hFlip&&(e.hFlip=!0),!n.vFlip!=!t.vFlip&&(e.vFlip=!0);const i=((n.rotate||0)+(t.rotate||0))%4;return i&&(e.rotate=i),e}function ia(n,t){const e=op(n,t);for(const i in rr)i in Ks?i in n&&!(i in e)&&(e[i]=Ks[i]):i in t?e[i]=t[i]:i in n&&(e[i]=n[i]);return e}function ap(n,t){const e=n.icons,i=n.aliases||Object.create(null),s=Object.create(null);function r(o){if(e[o])return s[o]=[];if(!(o in s)){s[o]=null;const a=i[o]&&i[o].parent,l=a&&r(a);l&&(s[o]=[a].concat(l))}return s[o]}return Object.keys(e).concat(Object.keys(i)).forEach(r),s}function lp(n,t,e){const i=n.icons,s=n.aliases||Object.create(null);let r={};function o(a){r=ia(i[a]||s[a],r)}return o(t),e.forEach(o),ia(n,r)}function Al(n,t){const e=[];if(typeof n!="object"||typeof n.icons!="object")return e;n.not_found instanceof Array&&n.not_found.forEach(s=>{t(s,null),e.push(s)});const i=ap(n);for(const s in i){const r=i[s];r&&(t(s,lp(n,s,r)),e.push(s))}return e}const hp={provider:"",aliases:{},not_found:{},...wl};function Gn(n,t){for(const e in t)if(e in n&&typeof n[e]!=typeof t[e])return!1;return!0}function Sl(n){if(typeof n!="object"||n===null)return null;const t=n;if(typeof t.prefix!="string"||!n.icons||typeof n.icons!="object"||!Gn(n,hp))return null;const e=t.icons;for(const s in e){const r=e[s];if(!s.match(Pi)||typeof r.body!="string"||!Gn(r,rr))return null}const i=t.aliases||Object.create(null);for(const s in i){const r=i[s],o=r.parent;if(!s.match(Pi)||typeof o!="string"||!e[o]&&!i[o]||!Gn(r,rr))return null}return t}const tn=Object.create(null);function cp(n,t){return{provider:n,prefix:t,icons:Object.create(null),missing:new Set}}function he(n,t){const e=tn[n]||(tn[n]=Object.create(null));return e[t]||(e[t]=cp(n,t))}function Tr(n,t){return Sl(t)?Al(t,(e,i)=>{i?n.icons[e]=i:n.missing.add(e)}):[]}function up(n,t,e){try{if(typeof e.body=="string")return n.icons[t]={...e},!0}catch{}return!1}function dp(n,t){let e=[];return(typeof n=="string"?[n]:Object.keys(tn)).forEach(i=>{(typeof i=="string"&&typeof t=="string"?[t]:Object.keys(tn[i]||{})).forEach(s=>{const r=he(i,s);e=e.concat(Object.keys(r.icons).map(o=>(i!==""?"@"+i+":":"")+s+":"+o))})}),e}let Gi=!1;function Cl(n){return typeof n=="boolean"&&(Gi=n),Gi}function Xi(n){const t=typeof n=="string"?es(n,!0,Gi):n;if(t){const e=he(t.provider,t.prefix),i=t.name;return e.icons[i]||(e.missing.has(i)?null:void 0)}}function zl(n,t){const e=es(n,!0,Gi);if(!e)return!1;const i=he(e.provider,e.prefix);return up(i,e.name,t)}function sa(n,t){if(typeof n!="object")return!1;if(typeof t!="string"&&(t=n.provider||""),Gi&&!t&&!n.prefix){let s=!1;return Sl(n)&&(n.prefix="",Al(n,(r,o)=>{o&&zl(r,o)&&(s=!0)})),s}const e=n.prefix;if(!js({provider:t,prefix:e,name:"a"}))return!1;const i=he(t,e);return!!Tr(i,n)}function na(n){return!!Xi(n)}function pp(n){const t=Xi(n);return t?{...ts,...t}:null}function fp(n){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);n.sort((s,r)=>s.provider!==r.provider?s.provider.localeCompare(r.provider):s.prefix!==r.prefix?s.prefix.localeCompare(r.prefix):s.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return n.forEach(s=>{if(i.name===s.name&&i.prefix===s.prefix&&i.provider===s.provider)return;i=s;const r=s.provider,o=s.prefix,a=s.name,l=e[r]||(e[r]=Object.create(null)),h=l[o]||(l[o]=he(r,o));let c;a in h.icons?c=t.loaded:o===""||h.missing.has(a)?c=t.missing:c=t.pending;const u={provider:r,prefix:o,name:a};c.push(u)}),t}function El(n,t){n.forEach(e=>{const i=e.loaderCallbacks;i&&(e.loaderCallbacks=i.filter(s=>s.id!==t))})}function mp(n){n.pendingCallbacksFlag||(n.pendingCallbacksFlag=!0,setTimeout(()=>{n.pendingCallbacksFlag=!1;const t=n.loaderCallbacks?n.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const i=n.provider,s=n.prefix;t.forEach(r=>{const o=r.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==s)return!0;const h=l.name;if(n.icons[h])o.loaded.push({provider:i,prefix:s,name:h});else if(n.missing.has(h))o.missing.push({provider:i,prefix:s,name:h});else return e=!0,!0;return!1}),o.pending.length!==a&&(e||El([n],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let yp=0;function gp(n,t,e){const i=yp++,s=El.bind(null,e,i);if(!t.pending.length)return s;const r={id:i,icons:t,callback:n,abort:s};return e.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),s}const or=Object.create(null);function ra(n,t){or[n]=t}function ar(n){return or[n]||or[""]}function bp(n,t=!0,e=!1){const i=[];return n.forEach(s=>{const r=typeof s=="string"?es(s,t,e):s;r&&i.push(r)}),i}var xp={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function vp(n,t,e,i){const s=n.resources.length,r=n.random?Math.floor(Math.random()*s):n.index;let o;if(n.random){let M=n.resources.slice(0);for(o=[];M.length>1;){const C=Math.floor(Math.random()*M.length);o.push(M[C]),M=M.slice(0,C).concat(M.slice(C+1))}o=o.concat(M)}else o=n.resources.slice(r).concat(n.resources.slice(0,r));const a=Date.now();let l="pending",h=0,c,u=null,d=[],p=[];typeof i=="function"&&p.push(i);function f(){u&&(clearTimeout(u),u=null)}function m(){l==="pending"&&(l="aborted"),f(),d.forEach(M=>{M.status==="pending"&&(M.status="aborted")}),d=[]}function y(M,C){C&&(p=[]),typeof M=="function"&&p.push(M)}function b(){return{startTime:a,payload:t,status:l,queriesSent:h,queriesPending:d.length,subscribe:y,abort:m}}function v(){l="failed",p.forEach(M=>{M(void 0,c)})}function x(){d.forEach(M=>{M.status==="pending"&&(M.status="aborted")}),d=[]}function g(M,C,S){const E=C!=="success";switch(d=d.filter(z=>z!==M),l){case"pending":break;case"failed":if(E||!n.dataAfterTimeout)return;break;default:return}if(C==="abort"){c=S,v();return}if(E){c=S,d.length||(o.length?A():v());return}if(f(),x(),!n.random){const z=n.resources.indexOf(M.resource);z!==-1&&z!==n.index&&(n.index=z)}l="completed",p.forEach(z=>{z(S)})}function A(){if(l!=="pending")return;f();const M=o.shift();if(M===void 0){if(d.length){u=setTimeout(()=>{f(),l==="pending"&&(x(),v())},n.timeout);return}v();return}const C={status:"pending",resource:M,callback:(S,E)=>{g(C,S,E)}};d.push(C),h++,u=setTimeout(A,n.rotate),e(M,t,C.callback)}return setTimeout(A),b}function Tl(n){const t={...xp,...n};let e=[];function i(){e=e.filter(o=>o().status==="pending")}function s(o,a,l){const h=vp(t,o,a,(c,u)=>{i(),l&&l(c,u)});return e.push(h),h}function r(o){return e.find(a=>o(a))||null}return{query:s,find:r,setIndex:o=>{t.index=o},getIndex:()=>t.index,cleanup:i}}function Fr(n){let t;if(typeof n.resources=="string")t=[n.resources];else if(t=n.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:n.path||"/",maxURL:n.maxURL||500,rotate:n.rotate||750,timeout:n.timeout||5e3,random:n.random===!0,index:n.index||0,dataAfterTimeout:n.dataAfterTimeout!==!1}}const pn=Object.create(null),Ds=["https://api.simplesvg.com","https://api.unisvg.com"],lr=[];for(;Ds.length>0;)Ds.length===1||Math.random()>.5?lr.push(Ds.shift()):lr.push(Ds.pop());pn[""]=Fr({resources:["https://api.iconify.design"].concat(lr)});function oa(n,t){const e=Fr(t);return e===null?!1:(pn[n]=e,!0)}function fn(n){return pn[n]}function wp(){return Object.keys(pn)}function aa(){}const Xn=Object.create(null);function _p(n){if(!Xn[n]){const t=fn(n);if(!t)return;const e=Tl(t),i={config:t,redundancy:e};Xn[n]=i}return Xn[n]}function Fl(n,t,e){let i,s;if(typeof n=="string"){const r=ar(n);if(!r)return e(void 0,424),aa;s=r.send;const o=_p(n);o&&(i=o.redundancy)}else{const r=Fr(n);if(r){i=Tl(r);const o=n.resources?n.resources[0]:"",a=ar(o);a&&(s=a.send)}}return!i||!s?(e(void 0,424),aa):i.query(t,s,e)().abort}const la="iconify2",Zi="iconify",kl=Zi+"-count",ha=Zi+"-version",Bl=36e5,Mp=168,Ap=50;function hr(n,t){try{return n.getItem(t)}catch{}}function kr(n,t,e){try{return n.setItem(t,e),!0}catch{}}function ca(n,t){try{n.removeItem(t)}catch{}}function cr(n,t){return kr(n,kl,t.toString())}function ur(n){return parseInt(hr(n,kl))||0}const Ae={local:!0,session:!0},$l={local:new Set,session:new Set};let Br=!1;function Sp(n){Br=n}let Ls=typeof window>"u"?{}:window;function Rl(n){const t=n+"Storage";try{if(Ls&&Ls[t]&&typeof Ls[t].length=="number")return Ls[t]}catch{}Ae[n]=!1}function Il(n,t){const e=Rl(n);if(!e)return;const i=hr(e,ha);if(i!==la){if(i){const a=ur(e);for(let l=0;l<a;l++)ca(e,Zi+l.toString())}kr(e,ha,la),cr(e,0);return}const s=Math.floor(Date.now()/Bl)-Mp,r=a=>{const l=Zi+a.toString(),h=hr(e,l);if(typeof h=="string"){try{const c=JSON.parse(h);if(typeof c=="object"&&typeof c.cached=="number"&&c.cached>s&&typeof c.provider=="string"&&typeof c.data=="object"&&typeof c.data.prefix=="string"&&t(c,a))return!0}catch{}ca(e,l)}};let o=ur(e);for(let a=o-1;a>=0;a--)r(a)||(a===o-1?(o--,cr(e,o)):$l[n].add(a))}function Ol(){if(!Br){Sp(!0);for(const n in Ae)Il(n,t=>{const e=t.data,i=t.provider,s=e.prefix,r=he(i,s);if(!Tr(r,e).length)return!1;const o=e.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,o):o,!0})}}function Cp(n,t){const e=n.lastModifiedCached;if(e&&e>=t)return e===t;if(n.lastModifiedCached=t,e)for(const i in Ae)Il(i,s=>{const r=s.data;return s.provider!==n.provider||r.prefix!==n.prefix||r.lastModified===t});return!0}function zp(n,t){Br||Ol();function e(i){let s;if(!Ae[i]||!(s=Rl(i)))return;const r=$l[i];let o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=ur(s),o>=Ap||!cr(s,o+1))return;const a={cached:Math.floor(Date.now()/Bl),provider:n.provider,data:t};return kr(s,Zi+o.toString(),JSON.stringify(a))}t.lastModified&&!Cp(n,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function ua(){}function Ep(n){n.iconsLoaderFlag||(n.iconsLoaderFlag=!0,setTimeout(()=>{n.iconsLoaderFlag=!1,mp(n)}))}function Tp(n,t){n.iconsToLoad?n.iconsToLoad=n.iconsToLoad.concat(t).sort():n.iconsToLoad=t,n.iconsQueueFlag||(n.iconsQueueFlag=!0,setTimeout(()=>{n.iconsQueueFlag=!1;const{provider:e,prefix:i}=n,s=n.iconsToLoad;delete n.iconsToLoad;let r;!s||!(r=ar(e))||r.prepare(e,i,s).forEach(o=>{Fl(e,o,a=>{if(typeof a!="object")o.icons.forEach(l=>{n.missing.add(l)});else try{const l=Tr(n,a);if(!l.length)return;const h=n.pendingIcons;h&&l.forEach(c=>{h.delete(c)}),zp(n,a)}catch(l){console.error(l)}Ep(n)})})}))}const $r=(n,t)=>{const e=bp(n,!0,Cl()),i=fp(e);if(!i.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(i.loaded,i.missing,i.pending,ua)}),()=>{l=!1}}const s=Object.create(null),r=[];let o,a;return i.pending.forEach(l=>{const{provider:h,prefix:c}=l;if(c===a&&h===o)return;o=h,a=c,r.push(he(h,c));const u=s[h]||(s[h]=Object.create(null));u[c]||(u[c]=[])}),i.pending.forEach(l=>{const{provider:h,prefix:c,name:u}=l,d=he(h,c),p=d.pendingIcons||(d.pendingIcons=new Set);p.has(u)||(p.add(u),s[h][c].push(u))}),r.forEach(l=>{const{provider:h,prefix:c}=l;s[h][c].length&&Tp(l,s[h][c])}),t?gp(t,i,r):ua},Fp=n=>new Promise((t,e)=>{const i=typeof n=="string"?es(n,!0):n;if(!i){e(n);return}$r([i||n],s=>{if(s.length&&i){const r=Xi(i);if(r){t({...ts,...r});return}}e(n)})});function kp(n){try{const t=typeof n=="string"?JSON.parse(n):n;if(typeof t.body=="string")return{...t}}catch{}}function Bp(n,t){const e=typeof n=="string"?es(n,!0,!0):null;if(!e){const r=kp(n);return{value:n,data:r}}const i=Xi(e);if(i!==void 0||!e.prefix)return{value:n,name:e,data:i};const s=$r([e],()=>t(n,e,Xi(e)));return{value:n,name:e,loading:s}}function Zn(n){return n.hasAttribute("inline")}let Pl=!1;try{Pl=navigator.vendor.indexOf("Apple")===0}catch{}function $p(n,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(Pl||n.indexOf("<a")===-1)?"svg":n.indexOf("currentColor")===-1?"bg":"mask"}const Rp=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Ip=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function dr(n,t,e){if(t===1)return n;if(e=e||100,typeof n=="number")return Math.ceil(n*t*e)/e;if(typeof n!="string")return n;const i=n.split(Rp);if(i===null||!i.length)return n;const s=[];let r=i.shift(),o=Ip.test(r);for(;;){if(o){const a=parseFloat(r);isNaN(a)?s.push(r):s.push(Math.ceil(a*t*e)/e)}else s.push(r);if(r=i.shift(),r===void 0)return s.join("");o=!o}}function Op(n,t="defs"){let e="";const i=n.indexOf("<"+t);for(;i>=0;){const s=n.indexOf(">",i),r=n.indexOf("</"+t);if(s===-1||r===-1)break;const o=n.indexOf(">",r);if(o===-1)break;e+=n.slice(s+1,r).trim(),n=n.slice(0,i).trim()+n.slice(o+1)}return{defs:e,content:n}}function Pp(n,t){return n?"<defs>"+n+"</defs>"+t:t}function Dp(n,t,e){const i=Op(n);return Pp(i.defs,t+i.content+e)}const Lp=n=>n==="unset"||n==="undefined"||n==="none";function Dl(n,t){const e={...ts,...n},i={..._l,...t},s={left:e.left,top:e.top,width:e.width,height:e.height};let r=e.body;[e,i].forEach(m=>{const y=[],b=m.hFlip,v=m.vFlip;let x=m.rotate;b?v?x+=2:(y.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),y.push("scale(-1 1)"),s.top=s.left=0):v&&(y.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),y.push("scale(1 -1)"),s.top=s.left=0);let g;switch(x<0&&(x-=Math.floor(x/4)*4),x=x%4,x){case 1:g=s.height/2+s.top,y.unshift("rotate(90 "+g.toString()+" "+g.toString()+")");break;case 2:y.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:g=s.width/2+s.left,y.unshift("rotate(-90 "+g.toString()+" "+g.toString()+")");break}x%2===1&&(s.left!==s.top&&(g=s.left,s.left=s.top,s.top=g),s.width!==s.height&&(g=s.width,s.width=s.height,s.height=g)),y.length&&(r=Dp(r,'<g transform="'+y.join(" ")+'">',"</g>"))});const o=i.width,a=i.height,l=s.width,h=s.height;let c,u;o===null?(u=a===null?"1em":a==="auto"?h:a,c=dr(u,l/h)):(c=o==="auto"?l:o,u=a===null?dr(c,h/l):a==="auto"?h:a);const d={},p=(m,y)=>{Lp(y)||(d[m]=y.toString())};p("width",c),p("height",u);const f=[s.left,s.top,l,h];return d.viewBox=f.join(" "),{attributes:d,viewBox:f,body:r}}function Rr(n,t){let e=n.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in t)e+=" "+i+'="'+t[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+n+"</svg>"}function Np(n){return n.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function jp(n){return"data:image/svg+xml,"+Np(n)}function Ll(n){return'url("'+jp(n)+'")'}const Up=()=>{let n;try{if(n=fetch,typeof n=="function")return n}catch{}};let en=Up();function Vp(n){en=n}function Hp(){return en}function Wp(n,t){const e=fn(n);if(!e)return 0;let i;if(!e.maxURL)i=0;else{let s=0;e.resources.forEach(o=>{s=Math.max(s,o.length)});const r=t+".json?icons=";i=e.maxURL-s-e.path.length-r.length}return i}function qp(n){return n===404}const Gp=(n,t,e)=>{const i=[],s=Wp(n,t),r="icons";let o={type:r,provider:n,prefix:t,icons:[]},a=0;return e.forEach((l,h)=>{a+=l.length+1,a>=s&&h>0&&(i.push(o),o={type:r,provider:n,prefix:t,icons:[]},a=l.length),o.icons.push(l)}),i.push(o),i};function Xp(n){if(typeof n=="string"){const t=fn(n);if(t)return t.path}return"/"}const Zp=(n,t,e)=>{if(!en){e("abort",424);return}let i=Xp(t.provider);switch(t.type){case"icons":{const r=t.prefix,o=t.icons.join(","),a=new URLSearchParams({icons:o});i+=r+".json?"+a.toString();break}case"custom":{const r=t.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:e("abort",400);return}let s=503;en(n+i).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{e(qp(o)?"abort":"next",o)});return}return s=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?e("abort",r):e("next",s)});return}setTimeout(()=>{e("success",r)})}).catch(()=>{e("next",s)})},Yp={prepare:Gp,send:Zp};function da(n,t){switch(n){case"local":case"session":Ae[n]=t;break;case"all":for(const e in Ae)Ae[e]=t;break}}const Yn="data-style";let Nl="";function Jp(n){Nl=n}function pa(n,t){let e=Array.from(n.childNodes).find(i=>i.hasAttribute&&i.hasAttribute(Yn));e||(e=document.createElement("style"),e.setAttribute(Yn,Yn),n.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+Nl}function jl(){ra("",Yp),Cl(!0);let n;try{n=window}catch{}if(n){if(Ol(),n.IconifyPreload!==void 0){const t=n.IconifyPreload,e="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!sa(i))&&console.error(e)}catch{console.error(e)}})}if(n.IconifyProviders!==void 0){const t=n.IconifyProviders;if(typeof t=="object"&&t!==null)for(const e in t){const i="IconifyProviders["+e+"] is invalid.";try{const s=t[e];if(typeof s!="object"||!s||s.resources===void 0)continue;oa(e,s)||console.error(i)}catch{console.error(i)}}}}return{enableCache:t=>da(t,!0),disableCache:t=>da(t,!1),iconLoaded:na,iconExists:na,getIcon:pp,listIcons:dp,addIcon:zl,addCollection:sa,calculateSize:dr,buildIcon:Dl,iconToHTML:Rr,svgToURL:Ll,loadIcons:$r,loadIcon:Fp,addAPIProvider:oa,appendCustomStyle:Jp,_api:{getAPIConfig:fn,setAPIModule:ra,sendAPIQuery:Fl,setFetch:Vp,getFetch:Hp,listAPIProviders:wp}}}const pr={"background-color":"currentColor"},Ul={"background-color":"transparent"},fa={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},ma={"-webkit-mask":pr,mask:pr,background:Ul};for(const n in ma){const t=ma[n];for(const e in fa)t[n+"-"+e]=fa[e]}function ya(n){return n?n+(n.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Qp(n,t,e){const i=document.createElement("span");let s=n.body;s.indexOf("<a")!==-1&&(s+="<!-- "+Date.now()+" -->");const r=n.attributes,o=Rr(s,{...r,width:t.width+"",height:t.height+""}),a=Ll(o),l=i.style,h={"--svg":a,width:ya(r.width),height:ya(r.height),...e?pr:Ul};for(const c in h)l.setProperty(c,h[c]);return i}let Di;function Kp(){try{Di=window.trustedTypes.createPolicy("iconify",{createHTML:n=>n})}catch{Di=null}}function tf(n){return Di===void 0&&Kp(),Di?Di.createHTML(n):n}function ef(n){const t=document.createElement("span"),e=n.attributes;let i="";e.width||(i="width: inherit;"),e.height||(i+="height: inherit;"),i&&(e.style=i);const s=Rr(n.body,e);return t.innerHTML=tf(s),t.firstChild}function fr(n){return Array.from(n.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function ga(n,t){const e=t.icon.data,i=t.customisations,s=Dl(e,i);i.preserveAspectRatio&&(s.attributes.preserveAspectRatio=i.preserveAspectRatio);const r=t.renderedMode;let o;switch(r){case"svg":o=ef(s);break;default:o=Qp(s,{...ts,...e},r==="mask")}const a=fr(n);a?o.tagName==="SPAN"&&a.tagName===o.tagName?a.setAttribute("style",o.getAttribute("style")):n.replaceChild(o,a):n.appendChild(o)}function ba(n,t,e){const i=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:n,lastRender:i}}function sf(n="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const i=t.get(n);if(i)return i;const s=["icon","mode","inline","observe","width","height","rotate","flip"],r=class extends e{constructor(){super(),ve(this,"_shadowRoot"),ve(this,"_initialised",!1),ve(this,"_state"),ve(this,"_checkQueued",!1),ve(this,"_connected",!1),ve(this,"_observer",null),ve(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=Zn(this);pa(a,l),this._state=ba({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return s.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=Zn(this),h=this._state;l!==h.inline&&(h.inline=l,pa(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return Zn(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}ga(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const h=this.getAttribute("mode"),c=ea(this);(a.attrMode!==h||rp(a.customisations,c)||!fr(this._shadowRoot))&&this._renderIcon(a.icon,c,h)}_iconChanged(a){const l=Bp(a,(h,c,u)=>{const d=this._state;if(d.rendered||this.getAttribute("icon")!==h)return;const p={value:h,name:c,data:u};p.data?this._gotIconData(p):d.icon=p});l.data?this._gotIconData(l):this._state=ba(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=fr(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,ea(this),this.getAttribute("mode"))}_renderIcon(a,l,h){const c=$p(a.data.body,h),u=this._state.inline;ga(this._shadowRoot,this._state={rendered:!0,icon:a,inline:u,customisations:l,attrMode:h,renderedMode:c})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const l=a.some(h=>h.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};s.forEach(a=>{a in r.prototype||Object.defineProperty(r.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const o=jl();for(const a in o)r[a]=r.prototype[a]=o[a];return t.define(n,r),r}sf()||jl();const nf=D`
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(
      --bim-scrollbar--c,
      color-mix(in lab, var(--bim-ui_main-base), white 15%)
    );
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-base));
  }
`,rf=D`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: hsl(210 10% 5%);
    --bim-ui_gray-1: hsl(210 10% 10%);
    --bim-ui_gray-2: hsl(210 10% 20%);
    --bim-ui_gray-3: hsl(210 10% 30%);
    --bim-ui_gray-4: hsl(210 10% 40%);
    --bim-ui_gray-6: hsl(210 10% 60%);
    --bim-ui_gray-7: hsl(210 10% 70%);
    --bim-ui_gray-8: hsl(210 10% 80%);
    --bim-ui_gray-9: hsl(210 10% 90%);
    --bim-ui_gray-10: hsl(210 10% 95%);

    /* Brand Colors */
    --bim-ui_main-base: #6528d7;
    --bim-ui_accent-base: #bcf124;

    /* Brand Colors Contrasts */
    --bim-ui_main-contrast: var(--bim-ui_gray-10);
    --bim-ui_accent-contrast: var(--bim-ui_gray-0);

    /* Sizes */
    --bim-ui_size-4xs: 0.375rem;
    --bim-ui_size-3xs: 0.5rem;
    --bim-ui_size-2xs: 0.625rem;
    --bim-ui_size-xs: 0.75rem;
    --bim-ui_size-sm: 0.875rem;
    --bim-ui_size-base: 1rem;
    --bim-ui_size-lg: 1.125rem;
    --bim-ui_size-xl: 1.25rem;
    --bim-ui_size-2xl: 1.375rem;
    --bim-ui_size-3xl: 1.5rem;
    --bim-ui_size-4xl: 1.625rem;
    --bim-ui_size-5xl: 1.75rem;
    --bim-ui_size-6xl: 1.875rem;
    --bim-ui_size-7xl: 2rem;
    --bim-ui_size-8xl: 2.125rem;
    --bim-ui_size-9xl: 2.25rem;
  }

  /* Background Colors */
  @media (prefers-color-scheme: dark) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-0);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-10);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
      --bim-ui_accent-base: #6528d7;
    }
  }

  html.bim-ui-dark {
    --bim-ui_bg-base: var(--bim-ui_gray-0);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: var(--bim-ui_gray-10);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
    --bim-ui_accent-base: #6528d7;
  }

  [data-context-dialog]::backdrop {
    background-color: transparent;
  }
`,de={scrollbar:nf,globalStyles:rf},Vl=class I{static set config(t){this._config={...I._config,...t}}static get config(){return I._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=de.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){I.init()}static init(){I.addGlobalStyles(),I.defineCustomElement("bim-button",uf),I.defineCustomElement("bim-checkbox",fi),I.defineCustomElement("bim-color-input",Fe),I.defineCustomElement("bim-context-menu",yr),I.defineCustomElement("bim-dropdown",Xt),I.defineCustomElement("bim-grid",Pr),I.defineCustomElement("bim-icon",xf),I.defineCustomElement("bim-input",ss),I.defineCustomElement("bim-label",yi),I.defineCustomElement("bim-number-input",gt),I.defineCustomElement("bim-option",et),I.defineCustomElement("bim-panel",ke),I.defineCustomElement("bim-panel-section",gi),I.defineCustomElement("bim-selector",bi),I.defineCustomElement("bim-table",At),I.defineCustomElement("bim-tabs",me),I.defineCustomElement("bim-tab",ft),I.defineCustomElement("bim-table-cell",nh),I.defineCustomElement("bim-table-children",oh),I.defineCustomElement("bim-table-group",lh),I.defineCustomElement("bim-table-row",Be),I.defineCustomElement("bim-text-input",Ot),I.defineCustomElement("bim-toolbar",vn),I.defineCustomElement("bim-toolbar-group",bn),I.defineCustomElement("bim-toolbar-section",wi),I.defineCustomElement("bim-viewport",xh)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let i=0;i<10;i++){const s=Math.floor(Math.random()*t.length);e+=t.charAt(s)}return e}};Vl._config={sectionLabelOnVerticalToolbar:!1};let Ir=Vl;class ui extends O{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const i of t)this.elements.add(i);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const i of e)i.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const i=e[0];if(!i.isIntersecting)return;const s=i.target;t.unobserve(s);const r=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][r];o&&(this.visibleElements=[...this.visibleElements,o],t.observe(o))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,i=[...this.elements][e];i&&t.observe(i)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const i=document.createDocumentFragment();if(t.length===0)return li(t(),i),i.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let s=e;const r=t,o=l=>(s={...s,...l},li(r(s,o),i),s);o(e);const a=()=>s;return[i.firstElementChild,o,a]}}const sn=(n,t={},e=!0)=>{let i={};for(const s of n.children){const r=s,o=r.getAttribute("name")||r.getAttribute("label"),a=t[o];if(o){if("value"in r&&typeof r.value<"u"&&r.value!==null){const l=r.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;i[o]=a?a(r.value):r.value}else if(e){const l=sn(r,t);if(Object.keys(l).length===0)continue;i[o]=a?a(l):l}}else e&&(i={...i,...sn(r,t)})}return i},mn=n=>n==="true"||n==="false"?n==="true":n&&!isNaN(Number(n))&&n.trim()!==""?Number(n):n,of=[">=","<=","=",">","<","?","/","#"];function xa(n){const t=of.find(o=>n.split(o).length===2),e=n.split(t).map(o=>o.trim()),[i,s]=e,r=s.startsWith("'")&&s.endsWith("'")?s.replace(/'/g,""):mn(s);return{key:i,condition:t,value:r}}const mr=n=>{try{const t=[],e=n.split(/&(?![^()]*\))/).map(i=>i.trim());for(const i of e){const s=!i.startsWith("(")&&!i.endsWith(")"),r=i.startsWith("(")&&i.endsWith(")");if(s){const o=xa(i);t.push(o)}if(r){const o={operator:"&",queries:i.replace(/^(\()|(\))$/g,"").split("&").map(a=>a.trim()).map((a,l)=>{const h=xa(a);return l>0&&(h.operator="&"),h})};t.push(o)}}return t}catch{return null}},va=(n,t,e)=>{let i=!1;switch(t){case"=":i=n===e;break;case"?":i=String(n).includes(String(e));break;case"<":(typeof n=="number"||typeof e=="number")&&(i=n<e);break;case"<=":(typeof n=="number"||typeof e=="number")&&(i=n<=e);break;case">":(typeof n=="number"||typeof e=="number")&&(i=n>e);break;case">=":(typeof n=="number"||typeof e=="number")&&(i=n>=e);break;case"/":i=String(n).startsWith(String(e));break}return i};var af=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,Hl=(n,t,e,i)=>{for(var s=lf(t,e),r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&af(t,e,s),s},K;const Or=(K=class extends O{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(n){this._placement=n,this.updatePosition()}static removeMenus(){for(const n of K.menus)n instanceof K&&(n.visible=!1);K.dialog.close(),K.dialog.remove()}get visible(){return this._visible}set visible(n){var t;this._visible=n,n?(K.dialog.parentElement||document.body.append(K.dialog),this._previousContainer=this.parentElement,K.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,K.dialog.append(this),K.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):((t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.dispatchEvent(new Event("hidden")))}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const n=this.placement??"right",t=await fl(this._previousContainer,this,{placement:n,middleware:[tl(10),pl(),dl(),ul({padding:5})]}),{x:e,y:i}=t;this.style.left=`${e}px`,this.style.top=`${i}px`}connectedCallback(){super.connectedCallback(),K.menus.push(this)}render(){return T` <slot></slot> `}},K.styles=[de.scrollbar,D`
      :host {
        pointer-events: auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        flex-direction: column;
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        padding: 0.5rem;
        border-radius: var(--bim-ui_size-4xs);
        display: flex;
        background-color: var(
          --bim-context-menu--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      :host(:not([visible])) {
        display: none;
      }
    `],K.dialog=ui.create(()=>T` <dialog
      @click=${n=>{n.target===K.dialog&&K.removeMenus()}}
      @cancel=${()=>K.removeMenus()}
      data-context-dialog
      style="
      width: 0;
      height: 0;
      position: relative;
      padding: 0;
      border: none;
      outline: none;
      margin: none;
      overflow: visible;
      background-color: transparent;
    "
    ></dialog>`),K.menus=[],K);Hl([_({type:String,reflect:!0})],Or.prototype,"placement");Hl([_({type:Boolean,reflect:!0})],Or.prototype,"visible");let yr=Or;var hf=Object.defineProperty,cf=Object.getOwnPropertyDescriptor,kt=(n,t,e,i)=>{for(var s=i>1?void 0:i?cf(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&hf(t,e,s),s},Fi;const _t=(Fi=class extends O{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=hi(),this._tooltip=hi(),this._mouseLeave=!1,this.onClick=n=>{n.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const n=this._contextMenu;if(n){const t=this.getAttribute("data-context-group");t&&n.setAttribute("data-context-group",t),this.closeNestedContexts();const e=Ir.newRandomId();for(const i of n.children)i instanceof Fi&&i.setAttribute("data-context-group",e);n.visible=!0}},this.mouseLeave=!0}set loading(n){if(this._loading=n,n)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=n,this.icon="eos-icons:loading";else{const{disabled:t,icon:e}=this._stateBeforeLoading;this.disabled=t,this.icon=e}}get loading(){return this._loading}set mouseLeave(n){this._mouseLeave=n,n&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:n}=this._parent,{value:t}=this._tooltip;n&&t&&fl(n,t,{placement:"bottom",middleware:[tl(10),pl(),dl(),ul({padding:5})]}).then(e=>{const{x:i,y:s}=e;Object.assign(t.style,{left:`${i}px`,top:`${s}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const n=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},n)}closeNestedContexts(){const n=this.getAttribute("data-context-group");if(n)for(const t of yr.dialog.children){const e=t.getAttribute("data-context-group");if(t instanceof yr&&e===n){t.visible=!1,t.removeAttribute("data-context-group");for(const i of t.children)i instanceof Fi&&(i.closeNestedContexts(),i.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const n=T`
      <div ${ci(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?T`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?T`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,t=T`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      style="fill: var(--bim-label--c)"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;return T`
      <div ${ci(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?T`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${()=>this.mouseLeave=!0}
              >
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${this.label}${this.label&&this._contextMenu?t:null}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?n:null}
      </div>
      <slot></slot>
    `}},Fi.styles=D`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      display: block;
      flex: 1;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    bim-label {
      pointer-events: none;
    }

    .parent {
      --bim-icon--c: var(--bim-label--c);
      position: relative;
      display: flex;
      height: 100%;
      user-select: none;
      row-gap: 0.125rem;
      min-height: var(--bim-ui_size-5xl);
      min-width: var(--bim-ui_size-5xl);
    }

    .button,
    .children {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
    }

    .children {
      padding: 0 0.375rem;
      position: absolute;
      height: 100%;
      right: 0;
    }

    :host(:not([label-hidden])[icon][vertical]) .parent {
      min-height: 2.5rem;
    }

    .button {
      flex-grow: 1;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host(:hover),
    :host([active]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 0.5rem;
    }

    :host([disabled]) {
      --bim-label--c: var(--bim-ui_bg-contrast-80) !important;
      background-color: gray !important;
    }

    ::slotted(bim-button) {
      --bim-icon--fz: var(--bim-ui_size-base);
      --bim-button--bdrs: var(--bim-ui_size-4xs);
      --bim-button--olw: 0;
      --bim-button--olc: transparent;
    }

    .tooltip {
      position: absolute;
      padding: 0.75rem;
      z-index: 99;
      display: flex;
      flex-flow: column;
      row-gap: 0.375rem;
      box-shadow: 0 0 10px 3px rgba(0 0 0 / 20%);
      outline: 1px solid var(--bim-ui_bg-contrast-40);
      font-size: var(--bim-ui_size-xs);
      border-radius: var(--bim-ui_size-4xs);
      background-color: var(--bim-ui_bg-contrast-20);
      color: var(--bim-ui_bg-contrast-100);
    }

    .tooltip p {
      margin: 0;
      padding: 0;
    }

    :host(:not([tooltip-visible])) .tooltip {
      display: none;
    }
  `,Fi);kt([_({type:String,reflect:!0})],_t.prototype,"label",2);kt([_({type:Boolean,attribute:"label-hidden",reflect:!0})],_t.prototype,"labelHidden",2);kt([_({type:Boolean,reflect:!0})],_t.prototype,"active",2);kt([_({type:Boolean,reflect:!0,attribute:"disabled"})],_t.prototype,"disabled",2);kt([_({type:String,reflect:!0})],_t.prototype,"icon",2);kt([_({type:Boolean,reflect:!0})],_t.prototype,"vertical",2);kt([_({type:Number,attribute:"tooltip-time",reflect:!0})],_t.prototype,"tooltipTime",2);kt([_({type:Boolean,attribute:"tooltip-visible",reflect:!0})],_t.prototype,"tooltipVisible",2);kt([_({type:String,attribute:"tooltip-title",reflect:!0})],_t.prototype,"tooltipTitle",2);kt([_({type:String,attribute:"tooltip-text",reflect:!0})],_t.prototype,"tooltipText",2);kt([_({type:Boolean,reflect:!0})],_t.prototype,"loading",1);let uf=_t;var df=Object.defineProperty,is=(n,t,e,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&df(t,e,s),s};const Wl=class extends O{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){return T`
      <div class="parent">
        ${this.label?T`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};Wl.styles=D`
    :host {
      display: block;
    }

    .parent {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.25rem;
      width: 100%;
      align-items: center;
      transition: all 0.15s;
    }

    :host([inverted]) .parent {
      flex-direction: row-reverse;
      justify-content: start;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
      transition: all 0.15s;
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }
  `;let fi=Wl;is([_({type:String,reflect:!0})],fi.prototype,"icon");is([_({type:String,reflect:!0})],fi.prototype,"name");is([_({type:String,reflect:!0})],fi.prototype,"label");is([_({type:Boolean,reflect:!0})],fi.prototype,"checked");is([_({type:Boolean,reflect:!0})],fi.prototype,"inverted");var pf=Object.defineProperty,mi=(n,t,e,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&pf(t,e,s),s};const ql=class extends O{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=hi(),this._textInput=hi(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:i}=t;this.color=e,i&&(this.opacity=i)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:i}=e;let s=i.replace(/[^a-fA-F0-9]/g,"");s.startsWith("#")||(s=`#${s}`),e.value=s.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return T`
      <div class="parent">
        <bim-input
          .label=${this.label}
          .icon=${this.icon}
          .vertical="${this.vertical}"
        >
          <div class="color-container">
            <div
              style="display: flex; align-items: center; gap: .375rem; height: 100%; flex: 1; padding: 0 0.5rem;"
            >
              <input
                ${ci(this._colorInput)}
                @input="${this.onColorInput}"
                type="color"
                aria-label=${this.label||this.name||"Color Input"}
                value="${this.color}"
              />
              <div
                @click=${this.focus}
                class="sample"
                style="background-color: ${this.color}"
              ></div>
              <input
                ${ci(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
              />
            </div>
            ${this.opacity!==void 0?T`<bim-number-input
                  @change=${this.onOpacityInput}
                  slider
                  suffix="%"
                  min="0"
                  value=${this.opacity}
                  max="100"
                ></bim-number-input>`:null}
          </div>
        </bim-input>
      </div>
    `}};ql.styles=D`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-ui_accent-base);
    }

    .parent {
      display: flex;
      gap: 0.375rem;
    }

    .color-container {
      position: relative;
      outline: none;
      display: flex;
      height: 100%;
      gap: 0.5rem;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      border-radius: var(--bim-color-input--bdrs, var(--bim-ui_size-4xs));
    }

    .color-container input[type="color"] {
      position: absolute;
      bottom: -0.25rem;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    .color-container .sample {
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
      background-color: #fff;
    }

    .color-container input[type="text"] {
      height: 100%;
      flex: 1;
      width: 3.25rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      background-color: transparent;
      padding: 0%;
      outline: none;
      border: none;
      color: var(--bim-color-input--c, var(--bim-ui_bg-contrast-100));
    }

    bim-number-input {
      flex-grow: 0;
    }
  `;let Fe=ql;mi([_({type:String,reflect:!0})],Fe.prototype,"name");mi([_({type:String,reflect:!0})],Fe.prototype,"label");mi([_({type:String,reflect:!0})],Fe.prototype,"icon");mi([_({type:Boolean,reflect:!0})],Fe.prototype,"vertical");mi([_({type:Number,reflect:!0})],Fe.prototype,"opacity");mi([_({type:String,reflect:!0})],Fe.prototype,"color");var ff=Object.defineProperty,mf=Object.getOwnPropertyDescriptor,pe=(n,t,e,i)=>{for(var s=i>1?void 0:i?mf(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&ff(t,e,s),s};const Gl=class extends O{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?mn(this.label):this.label}set value(t){this._value=t}render(){return T`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?T` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?T`<bim-checkbox
                    style="pointer-events: none"
                    .checked=${this.checked}
                  ></bim-checkbox>`:null}
              <bim-label
                .vertical=${this.vertical}
                .icon=${this.icon}
                .img=${this.img}
                >${this.label}</bim-label
              >
            </div>`:null}
        ${!this.checkbox&&!this.noMark&&this.checked?T`<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.125rem"
              viewBox="0 0 24 24"
              width="1.125rem"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>`:null}
        <slot></slot>
      </div>
    `}};Gl.styles=D`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      display: block;
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.5rem;
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:hover) {
      cursor: pointer;
      background-color: color-mix(
        in lab,
        var(--bim-selector--bgc, var(--bim-ui_bg-contrast-20)),
        var(--bim-ui_main-base) 10%
      );
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    .parent {
      box-sizing: border-box;
      display: flex;
      justify-content: var(--bim-option--jc, space-between);
      column-gap: 0.5rem;
      align-items: center;
      min-height: 1.75rem;
      height: 100%;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }

    bim-label {
      pointer-events: none;
    }
  `;let et=Gl;pe([_({type:String,reflect:!0})],et.prototype,"img",2);pe([_({type:String,reflect:!0})],et.prototype,"label",2);pe([_({type:String,reflect:!0})],et.prototype,"icon",2);pe([_({type:Boolean,reflect:!0})],et.prototype,"checked",2);pe([_({type:Boolean,reflect:!0})],et.prototype,"checkbox",2);pe([_({type:Boolean,attribute:"no-mark",reflect:!0})],et.prototype,"noMark",2);pe([_({converter:{fromAttribute(n){return n&&mn(n)}}})],et.prototype,"value",1);pe([_({type:Boolean,reflect:!0})],et.prototype,"vertical",2);var yf=Object.defineProperty,gf=Object.getOwnPropertyDescriptor,fe=(n,t,e,i)=>{for(var s=i>1?void 0:i?gf(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&yf(t,e,s),s};const Xl=class extends ui{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=hi(),this.onOptionClick=t=>{const e=t.target,i=this._value.has(e);if(!this.multiple&&!this.required&&!i)this._value=new Set([e]);else if(!this.multiple&&!this.required&&i)this._value=new Set([]);else if(!this.multiple&&this.required&&!i)this._value=new Set([e]);else if(this.multiple&&!this.required&&!i)this._value=new Set([...this._value,e]);else if(this.multiple&&!this.required&&i){const s=[...this._value].filter(r=>r!==e);this._value=new Set(s)}else if(this.multiple&&this.required&&!i)this._value=new Set([...this._value,e]);else if(this.multiple&&this.required&&i){const s=[...this._value].filter(o=>o!==e),r=new Set(s);r.size!==0&&(this._value=r)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){if(t){const{value:e}=this._contextMenu;if(!e)return;for(const i of this.elements)e.append(i);this._visible=!0}else{for(const e of this.elements)this.append(e);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=new Set;for(const i of t){const s=this.findOption(i);if(s&&(e.add(s),!this.multiple&&Object.keys(t).length===1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(t=>t instanceof et&&t.checked).map(t=>t.value)}get _options(){const t=new Set([...this.elements]);for(const e of this.children)e instanceof et&&t.add(e);return[...t]}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);const i=new Set;for(const s of this.elements){if(!(s instanceof et)){s.remove();continue}s.checked&&i.add(s),s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick)}this._value=i}updateOptionsState(){for(const t of this._options)t instanceof et&&(t.checked=this._value.has(t))}findOption(t){return this._options.find(e=>e instanceof et?e.label===t||e.value===t:!1)}render(){let t,e,i;if(this._value.size===0)t="Select an option...";else if(this._value.size===1){const s=[...this._value][0];t=s?.label||s?.value,e=s?.img,i=s?.icon}else t=`Multiple (${this._value.size})`;return T`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div class="input" @click=${()=>this.visible=!this.visible}>
          <bim-label
            .img=${e}
            .icon=${i}
            style="overflow: hidden;"
            >${t}</bim-label
          >
          <svg
            style="flex-shrink: 0; fill: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100))"
            xmlns="http://www.w3.org/2000/svg"
            height="1.125rem"
            viewBox="0 0 24 24"
            width="1.125rem"
            fill="#9ca3af"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
          <bim-context-menu
            ${ci(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};Xl.styles=[de.scrollbar,D`
      :host {
        --bim-input--bgc: var(
          --bim-dropdown--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        --bim-input--olw: 2px;
        --bim-input--olc: transparent;
        --bim-input--bdrs: var(--bim-ui_size-4xs);
        flex: 1;
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      .input {
        --bim-label--fz: var(--bim-drodown--fz, var(--bim-ui_size-xs));
        --bim-label--c: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
        height: 100%;
        display: flex;
        flex: 1;
        overflow: hidden;
        column-gap: 0.25rem;
        outline: none;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.5rem;
      }

      bim-label {
        pointer-events: none;
      }
    `];let Xt=Xl;fe([_({type:String,reflect:!0})],Xt.prototype,"name",2);fe([_({type:String,reflect:!0})],Xt.prototype,"icon",2);fe([_({type:String,reflect:!0})],Xt.prototype,"label",2);fe([_({type:Boolean,reflect:!0})],Xt.prototype,"multiple",2);fe([_({type:Boolean,reflect:!0})],Xt.prototype,"required",2);fe([_({type:Boolean,reflect:!0})],Xt.prototype,"vertical",2);fe([_({type:Boolean,reflect:!0})],Xt.prototype,"visible",1);fe([pi()],Xt.prototype,"_value",2);var bf=Object.defineProperty,Zl=(n,t,e,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&bf(t,e,s),s};const Yl=class extends O{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._updateFunctions={}}set layouts(t){this._layouts=t;const e={};for(const[i,s]of Object.entries(t))for(const r in s.elements)e[i]||(e[i]={}),e[i][r]=o=>{const a=this._updateFunctions[i];if(!a)return;const l=a[r];l&&l(o)};this.updateComponent=e}get layouts(){return this._layouts}getLayoutAreas(t){const{template:e}=t,i=e.split(`
`).map(s=>s.trim()).map(s=>s.split('"')[1]).filter(s=>s!==void 0).flatMap(s=>s.split(/\s+/));return[...new Set(i)].filter(s=>s!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this._updateFunctions={},this.layouts[this.layout]){this.innerHTML="",this._updateFunctions[this.layout]={};const t=this._updateFunctions[this.layout],e=this.layouts[this.layout],i=this.getLayoutAreas(e).map(s=>{const r=e.elements[s];if(!r)return null;if(r instanceof HTMLElement)return r.style.gridArea=s,r;if("template"in r){const{template:o,initialState:a}=r,[l,h]=ui.create(o,a);return l.style.gridArea=s,t[s]=h,l}return ui.create(r)}).filter(s=>!!s);this.style.gridTemplate=e.template,this.append(...i),this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange)}}else this._updateFunctions={},this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return T`<slot></slot>`}};Yl.styles=D`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    /* :host(:not([layout])) {
      display: none;
    } */

    :host([floating]) {
      --bim-panel--bdrs: var(--bim-ui_size-4xs);
      background-color: transparent;
      padding: 1rem;
      gap: 1rem;
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }

    :host(:not([floating])) {
      --bim-panel--bdrs: 0;
      background-color: var(--bim-ui_bg-contrast-20);
      gap: 1px;
    }
  `;let Pr=Yl;Zl([_({type:Boolean,reflect:!0})],Pr.prototype,"floating");Zl([_({type:String,reflect:!0})],Pr.prototype,"layout");const gr=class extends O{render(){return T`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};gr.styles=D`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
      transition: all 0.15s;
      display: flex;
    }
  `,gr.properties={icon:{type:String}};let xf=gr;var vf=Object.defineProperty,yn=(n,t,e,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&vf(t,e,s),s};const Jl=class extends O{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const e of this.children){const i=e;"value"in i?t[i.name||i.label]=i.value:"checked"in i&&(t[i.name||i.label]=i.checked)}return t}set value(t){const e=[...this.children];for(const i in t){const s=e.find(a=>{const l=a;return l.name===i||l.label===i});if(!s)continue;const r=s,o=t[i];typeof o=="boolean"?r.checked=o:r.value=o}}render(){return T`
      <div class="parent">
        ${this.label||this.icon?T`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};Jl.styles=D`
    :host {
      flex: 1;
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 0.375rem;
      user-select: none;
      flex: 1;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .input {
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      min-height: 1.75rem;
      min-width: 3rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: var(--bim-input--p, 0);
      background-color: var(--bim-input--bgc, transparent);
      outline: var(--bim-input--olw, 2px) solid
        var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
      transition: all 0.15s;
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: fit-content;
    }
  `;let ss=Jl;yn([_({type:String,reflect:!0})],ss.prototype,"name");yn([_({type:String,reflect:!0})],ss.prototype,"label");yn([_({type:String,reflect:!0})],ss.prototype,"icon");yn([_({type:Boolean,reflect:!0})],ss.prototype,"vertical");var wf=Object.defineProperty,ns=(n,t,e,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&wf(t,e,s),s};const Ql=class extends O{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?mn(this.textContent):this.textContent}render(){return T`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?T`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?T`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};Ql.styles=D`
    :host {
      --bim-icon--c: var(--bim-label--c);
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-60));
      font-size: var(--bim-label--fz, var(--bim-ui_size-xs));
      overflow: hidden;
      display: block;
      white-space: nowrap;
      line-height: 1.1em;
      transition: all 0.15s;
    }

    .parent {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
      row-gap: 0.125rem;
      user-select: text;
      height: 100%;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .parent p {
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      align-items: center;
      gap: 0.125rem;
    }

    :host([label-hidden]) .parent p,
    :host(:empty) .parent p {
      display: none;
    }

    img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 100%;
      margin-right: 0.125rem;
    }

    :host(:not([vertical])) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.8)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `;let yi=Ql;ns([_({type:String,reflect:!0})],yi.prototype,"img");ns([_({type:Boolean,attribute:"label-hidden",reflect:!0})],yi.prototype,"labelHidden");ns([_({type:String,reflect:!0})],yi.prototype,"icon");ns([_({type:Boolean,attribute:"icon-hidden",reflect:!0})],yi.prototype,"iconHidden");ns([_({type:Boolean,reflect:!0})],yi.prototype,"vertical");var _f=Object.defineProperty,Mf=Object.getOwnPropertyDescriptor,Mt=(n,t,e,i)=>{for(var s=i>1?void 0:i?Mf(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&_f(t,e,s),s};const Kl=class extends O{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=hi(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let i=t;if(i=i.replace(/[^0-9.-]/g,""),i=i.replace(/(\..*)\./g,"$1"),i.endsWith(".")||(i.lastIndexOf("-")>0&&(i=i[0]+i.substring(1).replace(/-/g,"")),i==="-"||i==="-0"))return;let s=Number(i);Number.isNaN(s)||(s=this.min!==void 0?Math.max(s,this.min):s,s=this.max!==void 0?Math.min(s,this.max):s,this.value!==s&&(this._value=s,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,i=this.value;let s=!1;const r=l=>{var h;s=!0;const{clientX:c}=l,u=this.step??1,d=((h=u.toString().split(".")[1])==null?void 0:h.length)||0,p=1/(this.sensitivity??1),f=(c-e)/p;if(Math.floor(Math.abs(f))!==Math.abs(f))return;const m=i+f*u;this.setValue(m.toFixed(d))},o=()=>{this.slider=!0,this.removeEventListener("blur",o)},a=()=>{document.removeEventListener("mousemove",r),document.body.style.cursor="default",s?s=!1:(this.addEventListener("blur",o),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const e=i=>{i.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=T`
      ${this.pref||this.icon?T`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${ci(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${a=>a.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?T`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,e=this.min??-1/0,i=this.max??1/0,s=100*(this.value-e)/(i-e),r=T`
      <style>
        .slider-indicator {
          width: ${`${s}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?T`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?T`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,o=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return T`
      <bim-input
        title=${o}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?r:t}
      </bim-input>
    `}};Kl.styles=D`
    :host {
      --bim-input--bgc: var(
        --bim-number-input--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(
        --bim-number-input¡focus--c,
        var(--bim-ui_accent-base)
      );
    }

    :host(:not([slider])) bim-label {
      --bim-label--c: var(
        --bim-number-input_affixes--c,
        var(--bim-ui_bg-contrast-60)
      );
      --bim-label--fz: var(
        --bim-number-input_affixes--fz,
        var(--bim-ui_size-xs)
      );
    }

    p {
      margin: 0;
      padding: 0;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      padding: 0;
      flex-grow: 1;
      text-align: right;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      font-size: var(--bim-number-input--fz, var(--bim-ui_size-xs));
      color: var(--bim-number-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([suffix]:not([pref])) input {
      text-align: left;
    }

    :host([slider]) {
      --bim-input--p: 0;
    }

    :host([slider]) .slider {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .slider {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0 0.5rem;
    }

    .slider-indicator {
      height: 100%;
      background-color: var(--bim-ui_main-base);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }

    bim-input {
      display: flex;
    }

    bim-label {
      pointer-events: none;
    }
  `;let gt=Kl;Mt([_({type:String,reflect:!0})],gt.prototype,"name",2);Mt([_({type:String,reflect:!0})],gt.prototype,"icon",2);Mt([_({type:String,reflect:!0})],gt.prototype,"label",2);Mt([_({type:String,reflect:!0})],gt.prototype,"pref",2);Mt([_({type:Number,reflect:!0})],gt.prototype,"min",2);Mt([_({type:Number,reflect:!0})],gt.prototype,"value",1);Mt([_({type:Number,reflect:!0})],gt.prototype,"step",2);Mt([_({type:Number,reflect:!0})],gt.prototype,"sensitivity",2);Mt([_({type:Number,reflect:!0})],gt.prototype,"max",2);Mt([_({type:String,reflect:!0})],gt.prototype,"suffix",2);Mt([_({type:Boolean,reflect:!0})],gt.prototype,"vertical",2);Mt([_({type:Boolean,reflect:!0})],gt.prototype,"slider",2);var Af=Object.defineProperty,Sf=Object.getOwnPropertyDescriptor,rs=(n,t,e,i)=>{for(var s=i>1?void 0:i?Sf(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Af(t,e,s),s};const th=class extends O{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return sn(this,this.valueTransform)}set value(t){const e=[...this.children];for(const i in t){const s=e.find(o=>{const a=o;return a.name===i||a.label===i});if(!s)continue;const r=s;r.value=t[i]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,T`
      <div class="parent">
        ${this.label||this.name||this.icon?T`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};th.styles=[de.scrollbar,D`
      :host {
        display: flex;
        border-radius: var(--bim-ui_size-base);
        background-color: var(--bim-ui_bg-base);
        overflow: auto;
      }

      :host([hidden]) {
        display: none;
      }

      .parent {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
        overflow: auto;
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([header-hidden]) .parent bim-label {
        display: none;
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `];let ke=th;rs([_({type:String,reflect:!0})],ke.prototype,"icon",2);rs([_({type:String,reflect:!0})],ke.prototype,"name",2);rs([_({type:String,reflect:!0})],ke.prototype,"label",2);rs([_({type:Boolean,reflect:!0})],ke.prototype,"hidden",1);rs([_({type:Boolean,attribute:"header-hidden",reflect:!0})],ke.prototype,"headerHidden",2);var Cf=Object.defineProperty,os=(n,t,e,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&Cf(t,e,s),s};const eh=class extends O{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={}}get value(){const t=this.parentElement;let e;return t instanceof ke&&(e=t.valueTransform),Object.values(this.valueTransform).length!==0&&(e=this.valueTransform),sn(this,e)}set value(t){const e=[...this.children];for(const i in t){const s=e.find(o=>{const a=o;return a.name===i||a.label===i});if(!s)continue;const r=s;r.value=t[i]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const t=this.label||this.icon||this.name||this.fixed,e=T`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`,i=T`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,s=this.collapsed?e:i,r=T`
      <div
        class="header"
        title=${this.label??""}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?T`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:s}
      </div>
    `;return T`
      <div class="parent">
        ${t?r:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};eh.styles=[de.scrollbar,D`
      :host {
        display: block;
        pointer-events: auto;
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(--bim-ui_accent-base);
        color: var(--bim-ui_accent-base);
        cursor: pointer;
      }

      :host(:not([fixed])) .header:hover svg {
        fill: var(--bim-ui_accent-base);
      }

      .header {
        --bim-label--fz: var(--bim-ui_size-sm);
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        height: 1.5rem;
        padding: 0.75rem 1rem;
      }

      .header svg {
        fill: var(--bim-ui_bg-contrast-80);
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }

      .title p {
        font-size: var(--bim-ui_size-sm);
      }

      .components {
        display: flex;
        flex-direction: column;
        row-gap: 0.75rem;
        padding: 0.125rem 1rem 1rem;
      }

      :host(:not([fixed])[collapsed]) .components {
        display: none;
        height: 0px;
      }

      bim-label {
        pointer-events: none;
      }
    `];let gi=eh;os([_({type:String,reflect:!0})],gi.prototype,"icon");os([_({type:String,reflect:!0})],gi.prototype,"label");os([_({type:String,reflect:!0})],gi.prototype,"name");os([_({type:Boolean,reflect:!0})],gi.prototype,"fixed");os([_({type:Boolean,reflect:!0})],gi.prototype,"collapsed");var zf=Object.defineProperty,as=(n,t,e,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&zf(t,e,s),s};const ih=class extends O{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof et&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const i of this._options)i.checked=i===e;this._value=e,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const i of e)i instanceof et&&(i.noMark=!0,i.removeEventListener("click",this.onOptionClick),i.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(e=>e instanceof et?e.label===t||e.value===t:!1)}firstUpdated(){const t=[...this.children].find(e=>e instanceof et&&e.checked);t&&(this._value=t)}render(){return T`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};ih.styles=D`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      --bim-input--g: 0;
      --bim-option--jc: center;
      flex: 1;
      display: block;
    }

    ::slotted(bim-option) {
      border-radius: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }
  `;let bi=ih;as([_({type:String,reflect:!0})],bi.prototype,"name");as([_({type:String,reflect:!0})],bi.prototype,"icon");as([_({type:String,reflect:!0})],bi.prototype,"label");as([_({type:Boolean,reflect:!0})],bi.prototype,"vertical");as([pi()],bi.prototype,"_value");const Ef=()=>T`
    <style>
      div {
        display: flex;
        gap: 0.375rem;
        border-radius: 0.25rem;
        min-height: 1.25rem;
      }

      [data-type="row"] {
        background-color: var(--bim-ui_bg-contrast-10);
        animation: row-loading 1s linear infinite alternate;
        padding: 0.5rem;
      }

      [data-type="cell"] {
        background-color: var(--bim-ui_bg-contrast-20);
        flex: 0.25;
      }

      @keyframes row-loading {
        0% {
          background-color: var(--bim-ui_bg-contrast-10);
        }
        100% {
          background-color: var(--bim-ui_bg-contrast-20);
        }
      }
    </style>
    <div style="display: flex; flex-direction: column;">
      <div data-type="row" style="gap: 2rem">
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 2"></div>
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 0.5"></div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.7s5"></div>
        </div>
      </div>
    </div>
  `,Tf=()=>T`
    <style>
      .loader {
        grid-area: Processing;
        position: relative;
        padding: 0.125rem;
      }
      .loader:before {
        content: "";
        position: absolute;
      }
      .loader .loaderBar {
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: var(--bim-ui_main-base);
        /* width: 25%; */
        width: 0;
        animation: borealisBar 2s linear infinite;
      }

      @keyframes borealisBar {
        0% {
          left: 0%;
          right: 100%;
          width: 0%;
        }
        10% {
          left: 0%;
          right: 75%;
          width: 25%;
        }
        90% {
          right: 0%;
          left: 75%;
          width: 25%;
        }
        100% {
          left: 100%;
          right: 0%;
          width: 0%;
        }
      }
    </style>
    <div class="loader">
      <div class="loaderBar"></div>
    </div>
  `;var Ff=Object.defineProperty,kf=(n,t,e,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&Ff(t,e,s),s};const sh=class extends O{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return T`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};sh.styles=D`
    :host {
      padding: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([data-column-index="0"]) {
      justify-content: normal;
    }

    :host([data-column-index="0"]:not([data-cell-header]))
      ::slotted(bim-label) {
      text-align: left;
    }

    ::slotted(*) {
      --bim-input--bgc: transparent;
      --bim-input--olc: var(--bim-ui_bg-contrast-20);
      --bim-input--olw: 1px;
    }

    ::slotted(bim-input) {
      --bim-input--olw: 0;
    }

    ::slotted(bim-label) {
      white-space: normal;
      text-align: center;
    }
  `;let nh=sh;kf([_({type:String,reflect:!0})],nh.prototype,"column");var Bf=Object.defineProperty,$f=(n,t,e,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&Bf(t,e,s),s};const rh=class extends O{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(t,e=!1){for(const i of this._groups)i.childrenHidden=typeof t>"u"?!i.childrenHidden:!t,e&&i.toggleChildren(t,e)}render(){return this._groups=[],T`
      <slot></slot>
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};rh.styles=D`
    :host {
      --bim-button--bgc: transparent;
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }

    ::slotted(.branch.branch-vertical) {
      top: 0;
      bottom: 1.125rem;
    }
  `;let oh=rh;$f([_({type:Array,attribute:!1})],oh.prototype,"data");var Rf=Object.defineProperty,If=(n,t,e,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&Rf(t,e,s),s};const ah=class extends O{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(t,e=!1){this._children&&(this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,e&&this._children.toggleGroups(t,e))}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const t=this.table.getGroupIndentation(this.data)??0,e=T`
      ${this.table.noIndentation?null:T`
            <style>
              .branch-vertical {
                left: ${t+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,i=document.createDocumentFragment();li(e,i);let s=null;this.table.noIndentation||(s=document.createElement("div"),s.classList.add("branch","branch-horizontal"),s.style.left=`${t-1+(this.table.selectableRows?2.05:.5625)}rem`);let r=null;if(!this.table.noIndentation){const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("height","9.5"),l.setAttribute("width","7.5"),l.setAttribute("viewBox","0 0 4.6666672 7.3333333");const h=document.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),l.append(h);const c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttribute("height","6.5"),c.setAttribute("width","9.5"),c.setAttribute("viewBox","0 0 5.9111118 5.0175439");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),c.append(u),r=document.createElement("div"),r.addEventListener("click",d=>{d.stopPropagation(),this.toggleChildren()}),r.classList.add("caret"),r.style.left=`${(this.table.selectableRows?1.5:.125)+t}rem`,this.childrenHidden?r.append(l):r.append(c)}const o=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&o.append(i),o.table=this.table,o.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:o}})),r&&this.data.children&&o.append(r),t!==0&&(!this.data.children||this.childrenHidden)&&s&&o.append(s);let a;if(this.data.children){a=document.createElement("bim-table-children"),this._children=a,a.table=this.table,a.data=this.data.children;const l=document.createDocumentFragment();li(e,l),a.append(l)}return T`
      <div class="parent">${o} ${this.childrenHidden?null:a}</div>
    `}};ah.styles=D`
    :host {
      position: relative;
    }

    .parent {
      display: grid;
      grid-template-areas: "Data" "Children";
    }

    .branch {
      position: absolute;
      z-index: 1;
    }

    .branch-vertical {
      border-left: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .branch-horizontal {
      top: 50%;
      width: 1rem;
      border-bottom: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .caret {
      position: absolute;
      z-index: 2;
      transform: translateY(-50%) rotate(0deg);
      top: 50%;
      display: flex;
      width: 0.95rem;
      height: 0.95rem;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .caret svg {
      fill: var(--bim-ui_bg-contrast-60);
    }
  `;let lh=ah;If([_({type:Boolean,attribute:"children-hidden",reflect:!0})],lh.prototype,"childrenHidden");var Of=Object.defineProperty,xi=(n,t,e,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&Of(t,e,s),s};const hh=class extends O{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(t=>{this._intersecting=t[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(t=>!this.hiddenColumns.includes(t.name)).map(t=>t.name)}get _columnWidths(){return this.columns.filter(t=>!this.hiddenColumns.includes(t.name)).map(t=>t.width)}get _isSelected(){var t;return(t=this.table)==null?void 0:t.selection.has(this.data)}onSelectionChange(t){if(!this.table)return;const e=t.target;this.selected=e.value,e.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const t=this.table.getRowIndentation(this.data)??0,e=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,i=[];for(const s in e){if(this.hiddenColumns.includes(s))continue;const r=e[s];let o;if(typeof r=="string"||typeof r=="boolean"||typeof r=="number"?(o=document.createElement("bim-label"),o.textContent=String(r)):r instanceof HTMLElement?o=r:(o=document.createDocumentFragment(),li(r,o)),!o)continue;const a=document.createElement("bim-table-cell");a.append(o),a.column=s,this._columnNames.indexOf(s)===0&&(a.style.marginLeft=`${this.table.noIndentation?0:t+.75}rem`);const l=this._columnNames.indexOf(s);a.setAttribute("data-column-index",String(l)),a.toggleAttribute("data-no-indentation",l===0&&this.table.noIndentation),a.toggleAttribute("data-cell-header",this.isHeader),a.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:a}})),i.push(a)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,T`
      ${!this.isHeader&&this.table.selectableRows?T`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${i}
      <slot></slot>
    `}render(){return T`${this._intersecting?this.compute():T``}`}};hh.styles=D`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      transition: all 0.15s;
    }

    ::slotted(.branch.branch-vertical) {
      top: 50%;
      bottom: 0;
    }

    :host([selected]) {
      background-color: color-mix(
        in lab,
        var(--bim-ui_bg-contrast-20) 30%,
        var(--bim-ui_main-base) 10%
      );
    }
  `;let Be=hh;xi([_({type:Boolean,reflect:!0})],Be.prototype,"selected");xi([_({attribute:!1})],Be.prototype,"columns");xi([_({attribute:!1})],Be.prototype,"hiddenColumns");xi([_({attribute:!1})],Be.prototype,"data");xi([_({type:Boolean,attribute:"is-header",reflect:!0})],Be.prototype,"isHeader");xi([pi()],Be.prototype,"_intersecting");var Pf=Object.defineProperty,Df=Object.getOwnPropertyDescriptor,Bt=(n,t,e,i)=>{for(var s=i>1?void 0:i?Df(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Pf(t,e,s),s};const ch=class extends O{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(t,e)=>Object.values(e.data).some(i=>String(i).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let i=!1;const s=mr(t)??[];for(const r of s){if("queries"in r){i=!1;break}const{condition:o,value:a}=r;let{key:l}=r;if(l.startsWith("[")&&l.endsWith("]")){const h=l.replace("[","").replace("]","");l=h,i=Object.keys(e.data).filter(c=>c.includes(h)).map(c=>va(e.data[c],o,a)).some(c=>c)}else i=va(e.data[l],o,a);if(!i)break}return i}}set columns(t){const e=[];for(const i of t){const s=typeof i=="string"?{name:i,width:`minmax(${this.minColWidth}, 1fr)`}:i;e.push(s)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns){const{name:i}=e;t[i]=String(i)}return t}get value(){return this._filteredData}set queryString(t){this.toggleAttribute("data-processing",!0),this._queryString=t&&t.trim()!==""?t.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(t){this._data=t,this.updateFilteredData(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set hiddenColumns(t){this._hiddenColumns=t,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(mr(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(t){let e=!1;for(const i of t){const{children:s,data:r}=i;for(const o in r)this._columns.map(a=>typeof a=="string"?a:a.name).includes(o)||(this._columns.push({name:o,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(s){const o=this.computeMissingColumns(s);o&&!e&&(e=o)}}return e}generateText(t="comma",e=this.value,i="",s=!0){const r=this._textDelimiters[t];let o="";const a=this.columns.map(l=>l.name);if(s){this.indentationInText&&(o+=`Indentation${r}`);const l=`${a.join(r)}
`;o+=l}for(const[l,h]of e.entries()){const{data:c,children:u}=h,d=this.indentationInText?`${i}${l+1}${r}`:"",p=a.map(m=>c[m]??""),f=`${d}${p.join(r)}
`;o+=f,u&&(o+=this.generateText(t,h.children,`${i}${l+1}.`,!1))}return o}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(t){const e={};for(const s of Object.keys(this.dataTransform)){const r=this.columns.find(o=>o.name===s);r&&r.forceDataTransform&&(s in t||(t[s]=""))}const i=t;for(const s in i){const r=this.dataTransform[s];r?e[s]=r(i[s],t):e[s]=t[s]}return e}downloadData(t="BIM Table Data",e="json"){let i=null;if(e==="json"&&(i=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(i=new File([this.csv],`${t}.csv`)),e==="tsv"&&(i=new File([this.tsv],`${t}.tsv`)),!i)return;const s=document.createElement("a");s.href=URL.createObjectURL(i),s.download=i.name,s.click(),URL.revokeObjectURL(s.href)}getRowIndentation(t,e=this.value,i=0){for(const s of e){if(s.data===t)return i;if(s.children){const r=this.getRowIndentation(t,s.children,i+1);if(r!==null)return r}}return null}getGroupIndentation(t,e=this.value,i=0){for(const s of e){if(s===t)return i;if(s.children){const r=this.getGroupIndentation(t,s.children,i+1);if(r!==null)return r}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(t=!1){if(this._filteredData.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.data=e,this.loading=!1,this._errorLoading=!1,!0}catch(e){if(this.loading=!1,this._filteredData.length!==0)return!1;const i=this.querySelector("[slot='error-loading']"),s=i?.querySelector("[data-table-element='error-message']");return e instanceof Error&&s&&e.message.trim()!==""&&(s.textContent=e.message),this._errorLoading=!0,!1}}filter(t,e=this.filterFunction??this._stringFilterFunction,i=this.data){const s=[];for(const r of i)if(e(t,r)){if(this.preserveStructureOnFilter){const o={data:r.data};if(r.children){const a=this.filter(t,e,r.children);a.length&&(o.children=a)}s.push(o)}else if(s.push({data:r.data}),r.children){const o=this.filter(t,e,r.children);s.push(...o)}}else if(r.children){const o=this.filter(t,e,r.children);this.preserveStructureOnFilter&&o.length?s.push({data:r.data,children:o}):s.push(...o)}return s}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return Ef();if(this._errorLoading)return T`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return T`<slot name="missing-data"></slot>`;const t=document.createElement("bim-table-row");t.table=this,t.isHeader=!0,t.data=this._headerRowData,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const e=document.createElement("bim-table-children");return e.table=this,e.data=this.value,e.style.gridArea="Body",e.style.backgroundColor="transparent",T`
      <div class="parent">
        ${this.headersHidden?null:t} ${Tf()}
        <div style="overflow-x: hidden; grid-area: Body">${e}</div>
      </div>
    `}};ch.styles=[de.scrollbar,D`
      :host {
        position: relative;
        overflow: auto;
        display: block;
        pointer-events: auto;
      }

      :host(:not([data-processing])) .loader {
        display: none;
      }

      .parent {
        display: grid;
        grid-template:
          "Header" auto
          "Processing" auto
          "Body" 1fr
          "Footer" auto;
        overflow: auto;
        height: 100%;
      }

      .parent > bim-table-row[is-header] {
        color: var(--bim-table_header--c, var(--bim-ui_bg-contrast-100));
        background-color: var(
          --bim-table_header--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      .controls {
        display: flex;
        gap: 0.375rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      }
    `];let At=ch;Bt([pi()],At.prototype,"_filteredData",2);Bt([_({type:Boolean,attribute:"headers-hidden",reflect:!0})],At.prototype,"headersHidden",2);Bt([_({type:String,attribute:"min-col-width",reflect:!0})],At.prototype,"minColWidth",2);Bt([_({type:Array,attribute:!1})],At.prototype,"columns",1);Bt([_({type:Array,attribute:!1})],At.prototype,"data",1);Bt([_({type:Boolean,reflect:!0})],At.prototype,"expanded",2);Bt([_({type:Boolean,reflect:!0,attribute:"selectable-rows"})],At.prototype,"selectableRows",2);Bt([_({attribute:!1})],At.prototype,"selection",2);Bt([_({type:Boolean,attribute:"no-indentation",reflect:!0})],At.prototype,"noIndentation",2);Bt([_({type:Boolean,reflect:!0})],At.prototype,"loading",2);Bt([pi()],At.prototype,"_errorLoading",2);var Lf=Object.defineProperty,Nf=Object.getOwnPropertyDescriptor,vi=(n,t,e,i)=>{for(var s=i>1?void 0:i?Nf(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Lf(t,e,s),s};const uh=class extends O{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof ft&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],i=e.find(s=>s instanceof ft&&s.name===t);for(const s of e){if(!(s instanceof ft))continue;s.hidden=i!==s;const r=this.getTabSwitcher(s.name);r&&r.toggleAttribute("data-active",!s.hidden)}}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(e=>e.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof ft))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name}),e.setAttribute("data-name",t.name),e.className="switcher";const i=document.createElement("bim-label");i.textContent=t.label??null,i.icon=t.icon,e.append(i),this._switchers.push(e)}}updateSwitchers(){for(const t of this.children){if(!(t instanceof ft))continue;const e=this._switchers.find(s=>s.getAttribute("data-name")===t.name);if(!e)continue;const i=e.querySelector("bim-label");i&&(i.textContent=t.label??null,i.icon=t.icon)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),i=e.find(s=>s instanceof ft?this.tab?s.name===this.tab:!s.hidden:!1);i&&i instanceof ft&&(this.tab=i.name);for(const s of e){if(!(s instanceof ft)){s.remove();continue}s.removeEventListener("hiddenchange",this.onTabHiddenChange),i!==s&&(s.hidden=!0),s.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return T`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};uh.styles=[de.scrollbar,D`
      * {
        box-sizing: border-box;
      }

      :host {
        background-color: var(--bim-ui_bg-base);
        display: block;
        overflow: auto;
      }

      .parent {
        display: grid;
        grid-template: "switchers" auto "content" 1fr;
        height: 100%;
      }

      :host([bottom]) .parent {
        grid-template: "content" 1fr "switchers" auto;
      }

      .switchers {
        display: flex;
        height: 2.25rem;
        font-weight: 600;
        grid-area: switchers;
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        background-color: var(--bim-ui_bg-base);
        cursor: pointer;
        pointer-events: auto;
        padding: 0rem 0.75rem;
        display: flex;
        justify-content: center;
        transition: all 0.15s;
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      .switcher:hover,
      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_main-contrast);
        background-color: var(--bim-ui_main-base);
      }

      .switchers bim-label {
        pointer-events: none;
      }

      :host([switchers-hidden]) .switchers {
        display: none;
      }

      .content {
        grid-area: content;
        overflow: auto;
      }

      :host(:not([bottom])) .content {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([bottom]) .content {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host(:not([tab])) .content {
        display: none;
      }

      :host([floating]) {
        background-color: transparent;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: auto;
      }

      :host([floating]:not([bottom])) .switchers {
        border-radius: var(--bim-ui_size-2xs) var(--bim-ui_size-2xs) 0 0;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]) .switchers {
        border-radius: 0 0 var(--bim-ui_size-2xs) var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]:not([tab])) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]:not([tab])) .switchers {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }
    `];let me=uh;vi([pi()],me.prototype,"_switchers",2);vi([_({type:Boolean,reflect:!0})],me.prototype,"bottom",2);vi([_({type:Boolean,attribute:"switchers-hidden",reflect:!0})],me.prototype,"switchersHidden",2);vi([_({type:Boolean,reflect:!0})],me.prototype,"floating",2);vi([_({type:String,reflect:!0})],me.prototype,"tab",1);vi([_({type:Boolean,attribute:"switchers-full",reflect:!0})],me.prototype,"switchersFull",2);var jf=Object.defineProperty,Uf=Object.getOwnPropertyDescriptor,gn=(n,t,e,i)=>{for(var s=i>1?void 0:i?Uf(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&jf(t,e,s),s};const dh=class extends O{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(t){this._label=t;const e=this.parentElement;e instanceof me&&e.updateSwitchers()}get label(){return this._label}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return T` <slot></slot> `}};dh.styles=D`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let ft=dh;gn([_({type:String,reflect:!0})],ft.prototype,"name",2);gn([_({type:String,reflect:!0})],ft.prototype,"label",1);gn([_({type:String,reflect:!0})],ft.prototype,"icon",2);gn([_({type:Boolean,reflect:!0})],ft.prototype,"hidden",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wa=n=>n??G;var Vf=Object.defineProperty,Hf=Object.getOwnPropertyDescriptor,Zt=(n,t,e,i)=>{for(var s=i>1?void 0:i?Hf(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Vf(t,e,s),s};const ph=class extends O{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return mr(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("input");e?.focus()})}render(){return T`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?T` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              placeholder=${wa(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:T` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${wa(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};ph.styles=[de.scrollbar,D`
      :host {
        --bim-input--bgc: var(--bim-ui_bg-contrast-20);
        flex: 1;
        display: block;
      }

      input,
      textarea {
        font-family: inherit;
        background-color: transparent;
        border: none;
        width: 100%;
        padding: var(--bim-ui_size-3xs);
        color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
      }

      input {
        outline: none;
        height: 100%;
        padding: 0 var(--bim-ui_size-3xs); /* Override padding */
        border-radius: var(--bim-text-input--bdrs, var(--bim-ui_size-4xs));
      }

      textarea {
        line-height: 1.1rem;
        resize: vertical;
      }

      :host(:focus) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      /* :host([disabled]) {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
    } */
    `];let Ot=ph;Zt([_({type:String,reflect:!0})],Ot.prototype,"icon",2);Zt([_({type:String,reflect:!0})],Ot.prototype,"label",2);Zt([_({type:String,reflect:!0})],Ot.prototype,"name",2);Zt([_({type:String,reflect:!0})],Ot.prototype,"placeholder",2);Zt([_({type:String,reflect:!0})],Ot.prototype,"value",2);Zt([_({type:Boolean,reflect:!0})],Ot.prototype,"vertical",2);Zt([_({type:Number,reflect:!0})],Ot.prototype,"debounce",2);Zt([_({type:Number,reflect:!0})],Ot.prototype,"rows",2);Zt([_({type:String,reflect:!0})],Ot.prototype,"type",1);var Wf=Object.defineProperty,qf=Object.getOwnPropertyDescriptor,fh=(n,t,e,i)=>{for(var s=i>1?void 0:i?qf(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Wf(t,e,s),s};const mh=class extends O{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return T`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};mh.styles=D`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }
  `;let bn=mh;fh([_({type:Number,reflect:!0})],bn.prototype,"rows",2);fh([_({type:Boolean,reflect:!0})],bn.prototype,"vertical",1);var Gf=Object.defineProperty,Xf=Object.getOwnPropertyDescriptor,xn=(n,t,e,i)=>{for(var s=i>1?void 0:i?Xf(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Gf(t,e,s),s};const yh=class extends O{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof bn&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return T`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?T`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};yh.styles=D`
    :host {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-60);
      display: block;
      flex: 1;
    }

    :host(:not([vertical])) ::slotted(bim-button[vertical]) {
      --bim-icon--fz: var(--bim-ui_size-5xl);
      min-height: 3.75rem;
    }

    .parent {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;
      height: 100%;
      box-sizing: border-box;
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: row-reverse;
    }

    :host([vertical]) .parent > bim-label {
      writing-mode: tb;
    }

    .children {
      display: flex;
      gap: 0.25rem;
    }

    :host([vertical]) .children {
      flex-direction: column;
    }
  `;let wi=yh;xn([_({type:String,reflect:!0})],wi.prototype,"label",2);xn([_({type:String,reflect:!0})],wi.prototype,"icon",2);xn([_({type:Boolean,reflect:!0})],wi.prototype,"vertical",1);xn([_({type:Boolean,attribute:"label-hidden",reflect:!0})],wi.prototype,"labelHidden",1);var Zf=Object.defineProperty,Yf=Object.getOwnPropertyDescriptor,Dr=(n,t,e,i)=>{for(var s=i>1?void 0:i?Yf(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Zf(t,e,s),s};const gh=class extends O{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof wi&&(e.labelHidden=this.vertical&&!Ir.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return T`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};gh.styles=D`
    :host {
      --bim-button--bgc: transparent;
      background-color: var(--bim-ui_bg-base);
      border-radius: var(--bim-ui_size-2xs);
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .parent {
      display: flex;
      width: min-content;
      pointer-events: auto;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    :host([vertical]) {
      width: min-content;
      border-radius: var(--bim-ui_size-2xs);
      border: 1px solid var(--bim-ui_bg-contrast-20);
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-20);
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      border-right: none;
    }
  `;let vn=gh;Dr([_({type:String,reflect:!0})],vn.prototype,"icon",2);Dr([_({type:Boolean,attribute:"labels-hidden",reflect:!0})],vn.prototype,"labelsHidden",2);Dr([_({type:Boolean,reflect:!0})],vn.prototype,"vertical",1);var Jf=Object.defineProperty,Qf=(n,t,e,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(t,e,s)||s);return s&&Jf(t,e,s),s};const bh=class extends O{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return T`
      <div class="parent">
        <slot></slot>
      </div>
    `}};bh.styles=D`
    :host {
      display: grid;
      min-width: 0;
      min-height: 0;
      height: 100%;
    }

    .parent {
      overflow: hidden;
      position: relative;
    }
  `;let xh=bh;Qf([_({type:String,reflect:!0})],xh.prototype,"name");let ht=null,j=null,Bi=null,st=null,vh=null,Li=null,$i=null,lt=null,tt=null,Et=null,N=null;function Kf(){return new Promise(n=>{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()})}async function wh(){console.log("🟢 main.js loaded"),await Kf(),console.log("✅ DOM is ready");const n=document.getElementById("container");if(!n){console.warn('❌ No container found with ID "container" — Retrying in 100ms'),setTimeout(wh,100);return}console.log("✅ Container found:",n);try{const{Components:e,Worlds:i,SimpleScene:s,SimpleCamera:r}=await Je(async()=>{const{Components:l,Worlds:h,SimpleScene:c,SimpleCamera:u}=await import("./index.js");return{Components:l,Worlds:h,SimpleScene:c,SimpleCamera:u}},__vite__mapDeps([0,1,2])),{PostproductionRenderer:o}=await Je(async()=>{const{PostproductionRenderer:l}=await import("./index2.js");return{PostproductionRenderer:l}},__vite__mapDeps([3,1,2]));ht=new e,console.log("✅ Components instantiated:",ht),await ht.init(),console.log("✅ Components initialized");const a=ht.get(i);console.log("✅ Worlds retrieved:",a),j=a.create(s,r,o),console.log("✅ World created:",j),j.scene=new s(ht),j.renderer=new o(ht,n),j.camera=new r(ht),console.log("✅ World components set:",{scene:j.scene,renderer:j.renderer,camera:j.camera}),j.scene.setup(),j.renderer.postproduction.enabled=!0,j.scene.three.background=new $t(15658734),j.camera.controls.setLookAt(12,6,8,0,0,0),console.log("✅ Scene setup complete")}catch(e){throw console.error("❌ Error initializing scene:",e),e}try{const e=new on(1,1,1),i=new wr({color:16711680}),s=new rn(e,i);j.scene.three.add(s),console.log("🧪 Added test cube")}catch(e){console.error("❌ Error adding test cube:",e)}const t=()=>{try{requestAnimationFrame(t),j?.renderer?.three&&typeof j.renderer.three.render=="function"&&j.renderer.three.render(j.scene.three,j.camera.three)}catch(e){console.error("❌ Animation loop error:",e)}};t(),console.log("🟢 Animation loop started");try{const{Grids:e}=await Je(async()=>{const{Grids:s}=await import("./index.js");return{Grids:s}},__vite__mapDeps([0,1,2])),i=ht.get(e).create(j);j.renderer.postproduction.customEffects.excludedMeshes.push(i.three),console.log("✅ Grid added")}catch(e){console.error("❌ Error creating grid:",e)}}function tm(){try{Ir.init(),console.log("✅ BUI.Manager initialized");const n=ui.create(()=>T`
            <bim-panel active label="IFC Viewer Controls" class="options-menu">
                <bim-panel-section collapsed label="Controls">
                    <bim-button label="Load IFC" @click="${()=>_h()}"></bim-button>
                    <bim-button label="Export Fragments" @click="${()=>im()}"></bim-button>
                    <bim-button label="Dispose Fragments" @click="${()=>sm()}"></bim-button>
                </bim-panel-section>
            </bim-panel>
            `);document.body.append(n),console.log("✅ UI panel added");const t=ui.create(()=>T`
                <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
                    @click="${()=>n.classList.toggle("options-menu-visible")}">
                </bim-button>
            `);document.body.append(t),console.log("✅ UI button added")}catch(n){console.error("❌ Error initializing UI:",n)}}async function em(){try{if(!ht)throw new Error("Components not initialized");const{IfcLoader:n,FragmentsManager:t,IfcPropertiesManager:e}=await Je(async()=>{const{IfcLoader:a,FragmentsManager:l,IfcPropertiesManager:h}=await import("./index.js");return{IfcLoader:a,FragmentsManager:l,IfcPropertiesManager:h}},__vite__mapDeps([0,1,2])),{Highlighter:i,Outliner:s}=await Je(async()=>{const{Highlighter:a,Outliner:l}=await import("./index2.js");return{Highlighter:a,Outliner:l}},__vite__mapDeps([3,1,2])),r=await Je(()=>import("./web-ifc-api.js").then(a=>a.W),[]);Bi=ht.get(n),await Bi.setup(),Bi.settings.webIfc.COORDINATE_TO_ORIGIN=!0;const o=[r.IFCTENDONANCHOR,r.IFCREINFORCINGBAR,r.IFCREINFORCINGELEMENT];for(const a of o)Bi.settings.excludedCategories.add(a);console.log("✅ IFC Loader initialized"),st=ht.get(t),console.log("🧪 Available methods on fragments:",Object.getOwnPropertyNames(st)),vh=ht.get(e),console.log("✅ Properties Manager initialized"),Li=ht.get(i),Li.setup({world:j}),Li.zoomToSelection=!0,console.log("✅ Highlighter initialized"),$i=ht.get(s),$i.world=j,$i.enabled=!0,$i.create("highlight",new wr({color:15844367,transparent:!0,opacity:.5})),console.log("✅ Outliner initialized")}catch(n){throw console.error("❌ Error initializing IFC components:",n),n}}async function _h(){console.log("⏳ Loading IFC...");try{const n=window.location.pathname.split("/").pop();n||console.warn("⚠️ Empty model_id from URL. Falling back to first available IFC file."),console.log("🧪 Fetching IFC file for model_id:",n);const t=await fetch("/ifc-files/");if(!t.ok)throw new Error(`HTTP error ${t.status}: ${t.statusText}`);const e=await t.json();console.log("🧪 API response:",e);let i=e.find(h=>h.url.includes(n));if(!i&&e.length>0&&(console.warn("⚠️ No IFC file found for model_id:",n,"Using first available file."),i=e[0]),!i)throw new Error(`No IFC file found for model_id: ${n}`);console.log("🧪 Found IFC file:",i.url);const s=await fetch(i.url);if(!s.ok)throw new Error(`HTTP error ${s.status}: ${s.statusText}`);const r=await s.arrayBuffer(),o=new Uint8Array(r);if(console.log("🧪 IFC file fetched, buffer size:",o.length),lt=await Bi.load(o),!lt)throw new Error("Failed to load IFC model");lt.name=n||i.name,j.scene.three.add(lt),console.log("✅ IFC model loaded:",lt),tt=lt.uuid;const a=st.groups.get(tt);a?console.log("✅ Fragment group loaded:",a,"UUID:",tt):console.warn("⚠️ No fragment group registered for model.uuid",tt);const l=new ce().setFromObject(lt);console.log("🧪 Model bounding box:",l),j.camera.controls.fitToBox(lt,!0),console.log("✅ IFC Loaded – Group UUID:",tt),console.log("🧪 Available fragment groups after loading:",Array.from(st.groups.keys()))}catch(n){console.error("❌ Error loading IFC model:",n);const t=document.createElement("div");t.style.position="absolute",t.style.top="10px",t.style.left="10px",t.style.color="red",t.style.background="white",t.style.padding="10px",t.style.border="1px solid red",t.textContent=`Error loading IFC: ${n.message}`,document.body.appendChild(t)}}function im(){if(!lt||!tt){console.warn("⚠️ No model loaded to export fragments");return}const n=st.groups.get(tt);if(!n){console.warn("⚠️ No fragment group found for model UUID:",tt);return}if(typeof st.export=="function"){const t=st.export(n);if(t){const e=new Blob([t]),i=URL.createObjectURL(e),s=document.createElement("a");s.href=i,s.download=`${lt.name}_fragments.frag`,s.click(),URL.revokeObjectURL(i),console.log("✅ Fragments exported")}else console.warn("⚠️ Failed to export fragments")}else console.warn("⚠️ fragments.export is not available")}function sm(){if(!lt||!tt){console.warn("⚠️ No model loaded to dispose fragments");return}st.disposeGroup(tt),j.scene.three.remove(lt),lt=null,tt=null,Et=null,N&&(N.style.display="none"),console.log("✅ Fragments disposed")}function nm(){try{N=document.createElement("button"),N.textContent="✅ Select as Reusable",N.style.position="absolute",N.style.top="10px",N.style.right="10px",N.style.padding="10px",N.style.fontSize="14px",N.style.display="none",N.style.background="#4CAF50",N.style.color="white",N.style.border="none",N.style.borderRadius="4px",N.style.cursor="pointer",document.body.appendChild(N),console.log("✅ Save button created"),Li.events.select.onHighlight.add(n=>{console.log("🧪 Selection map:",n),console.log("🧪 Available fragment groups:",Array.from(st.groups.keys()));const t=Object.entries(n);if(!t.length){console.warn("⚠️ Empty selection"),Et=null,N.style.display="none";return}const[e,i]=t[0],s=Array.from(i);if(!s.length){console.warn("⚠️ No expressIDs found in fragment"),Et=null,N.style.display="none";return}if(!st.groups||!st.groups.size){console.error("❌ FragmentsManager groups map is empty or not initialized"),Et=null,N.style.display="none";return}if(!tt){console.error("❌ modelGroupUUID is not set. Cannot process selection."),Et=null,N.style.display="none";return}if(!st.groups.get(tt)){console.error("❌ No fragment group found for model UUID:",tt),console.log("🧪 Current model:",lt),console.log("🧪 Available groups:",Array.from(st.groups.keys())),Et=null,N.style.display="none";return}console.log("🧪 Using fragment group for model UUID:",tt),Et={id:s[0],fragments:[{id:tt}]},console.log("✅ Selection parsed:",Et),N.style.display="block"}),Li.events.select.onClear.add(()=>{$i.clear("highlight"),Et=null,N.style.display="none"}),N.onclick=async()=>{if(console.log("🟩 Button clicked"),!Et){console.warn("⚠️ No selection found");return}const{id:n,fragments:t}=Et;if(!n||!t?.length){console.warn("⚠️ Invalid selection");return}let e=t[0].id,i=st.groups.get(e);if(!i&&(console.warn("⚠️ No fragment group found for ID:",e,"Falling back to model UUID"),e=tt,i=st.groups.get(e),!i)){console.warn("⚠️ No fragment group found for model UUID:",e);return}try{let s=null;console.log("🧪 Retrieving properties for expressID:",n);try{if(s=await vh.getItemProperties(lt,n),!s)throw new Error("No properties returned")}catch(c){console.warn("⚠️ Failed to retrieve properties with propertiesManager:",c),s={expressID:n,fragmentID:e,modelUUID:tt}}console.log("🧠 Properties:",s);let r=null;typeof st.export=="function"?(console.log("🧪 Exporting fragment data for group:",e),r=st.export(i),r||console.warn("⚠️ Failed to export fragment data for fragmentID:",e)):console.warn("⚠️ fragments.export is not available. Skipping geometry export.");const o=s.GlobalId||`frag_${n}`,a=new FormData;a.append("metadata",new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),`${o}.json`),r&&a.append("fragment",new Blob([r],{type:"application/octet-stream"}),`${o}.frag`),console.log("🕒 Sending fetch request to /upload-fragment/");const l=await fetch("/upload-fragment/",{method:"POST",body:a});if(console.log("📡 Response status:",l.status),!l.ok){const c=await l.text();throw console.error("❌ Raw response:",c),new Error(`Server returned status ${l.status}: ${c}`)}const h=await l.json();if(l.ok&&h.status==="ok")console.log("✅ Files uploaded:",h),alert("✅ Component saved to server!"),N.style.display="none";else throw new Error(h.message||"Failed to upload files")}catch(s){console.error("❌ Save error:",s),alert("❌ Failed to save component: "+s.message)}},console.log("✅ Selection setup complete")}catch(n){console.error("❌ Error setting up selection:",n)}}async function _a(){try{console.log("🚀 Starting application initialization..."),await wh(),console.log("✅ Scene initialization complete"),tm(),console.log("✅ UI initialization complete"),await em(),console.log("✅ IFC components initialization complete"),nm(),console.log("✅ Selection setup complete"),await _h(),console.log("✅ IFC loading complete"),console.log("🎉 Application fully initialized!")}catch(n){console.error("❌ Initialization error:",n);const t=document.createElement("div");t.style.position="fixed",t.style.top="50%",t.style.left="50%",t.style.transform="translate(-50%, -50%)",t.style.background="#ffebee",t.style.color="#c62828",t.style.padding="20px",t.style.border="2px solid #c62828",t.style.borderRadius="8px",t.style.zIndex="10000",t.innerHTML=`
            <h3>Initialization Error</h3>
            <p>${n.message}</p>
            <button onclick="this.parentElement.remove()" style="margin-top: 10px; padding: 5px 10px;">Close</button>
        `,document.body.appendChild(t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_a):_a();export{ne as $,jy as A,ce as B,Hy as C,Ny as D,Iy as E,Jn as F,H as G,Va as H,ky as I,_u as J,qa as K,wu as L,rn as M,Wa as N,Vu as O,_e as P,Yi as Q,qy as R,Fy as S,vt as T,oe as U,w as V,Gc as W,Vm as X,Bh as Y,Ch as Z,Fa as _,$t as a,uy as a$,zy as a0,Us as a1,Ry as a2,ny as a3,Ta as a4,Nh as a5,Xr as a6,yu as a7,Ba as a8,qr as a9,Ty as aA,Hs as aB,Wr as aC,bm as aD,gm as aE,Ur as aF,$m as aG,Bm as aH,km as aI,Fm as aJ,Cm as aK,Em as aL,Hr as aM,Am as aN,Sm as aO,zm as aP,Tm as aQ,Vr as aR,Mm as aS,_m as aT,wm as aU,Gr as aV,Ye as aW,sy as aX,iy as aY,ey as aZ,dy as a_,ka as aa,br as ab,Ma as ac,Mu as ad,$y as ae,Ss as af,Ua as ag,Uy as ah,Wy as ai,Oa as aj,Oy as ak,my as al,By as am,by as an,Tt as ao,vu as ap,xy as aq,za as ar,Ea as as,wy as at,_y as au,Zr as av,vy as aw,se as ax,di as ay,Vy as az,gy as b,Om as b$,py as b0,hy as b1,cy as b2,ly as b3,fy as b4,ay as b5,ry as b6,Ly as b7,hm as b8,um as b9,tc as bA,ec as bB,ic as bC,sc as bD,nc as bE,rc as bF,oc as bG,ac as bH,lc as bI,hc as bJ,cc as bK,uc as bL,dc as bM,pc as bN,fc as bO,mc as bP,yc as bQ,gc as bR,bc as bS,xc as bT,vc as bU,wc as bV,_c as bW,Nm as bX,Lm as bY,Dm as bZ,Pm as b_,Fh as ba,$h as bb,Rh as bc,mt as bd,Ih as be,Eh as bf,Th as bg,kh as bh,Oh as bi,Ph as bj,Dh as bk,Lh as bl,jh as bm,Uh as bn,Vh as bo,Hh as bp,Wh as bq,qh as br,Gh as bs,Xh as bt,wn as bu,Zh as bv,Yh as bw,Jh as bx,Qh as by,Kh as bz,Ee as c,Im as c0,Rm as c1,om as c2,am as c3,lm as c4,jr as c5,ym as c6,mm as c7,fm as c8,pm as c9,Hm as cA,pu as cB,Ay as cC,Kn as cD,Um as cE,jm as cF,Sa as cG,xm as cH,vm as cI,Sy as cJ,go as cK,Qm as ca,Km as cb,Ey as cc,My as cd,au as ce,ty as cf,Ac as cg,oy as ch,Cy as ci,an as cj,Yy as ck,Yr as cl,zh as cm,Jm as cn,nu as co,su as cp,jc as cq,yy as cr,$a as cs,cm as ct,Xm as cu,Ym as cv,Zm as cw,Gm as cx,qm as cy,Wm as cz,Gy as d,W as e,re as f,Z as g,rm as h,Py as i,ct as j,Ht as k,nn as l,Ha as m,uu as n,dm as o,Xe as p,Xy as q,Aa as r,wr as s,Gt as t,on as u,xt as v,Pa as w,it as x,Dy as y,Zy as z};
//# sourceMappingURL=main.js.map
