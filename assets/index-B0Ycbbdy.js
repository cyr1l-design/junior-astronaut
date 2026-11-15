(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ql="170",n0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},i0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rp=0,Fh=1,op=2,s0=3,r0=0,ru=1,ou=2,di=3,Hi=0,nn=1,qt=2,vi=0,zs=1,bn=2,Oh=3,zh=4,ap=5,os=100,lp=101,cp=102,hp=103,up=104,dp=200,fp=201,pp=202,mp=203,cl=204,hl=205,gp=206,vp=207,xp=208,yp=209,_p=210,bp=211,Mp=212,wp=213,Sp=214,ul=0,dl=1,fl=2,Gs=3,pl=4,ml=5,gl=6,vl=7,Xo=0,Tp=1,Ap=2,Oi=0,au=1,lu=2,cu=3,hu=4,Ep=5,uu=6,ec=7,Bh="attached",Cp="detached",tc=300,Vi=301,us=302,Co=303,Ro=304,zr=306,_i=1e3,Xn=1001,Po=1002,hn=1003,du=1004,o0=1004,Sr=1005,a0=1005,Yt=1006,xo=1007,l0=1007,pi=1008,c0=1008,bi=1009,fu=1010,pu=1011,Pr=1012,nc=1013,Gi=1014,Ln=1015,xi=1016,ic=1017,sc=1018,Ws=1020,mu=35902,gu=1021,vu=1022,wn=1023,xu=1024,yu=1025,Bs=1026,Xs=1027,rc=1028,qo=1029,_u=1030,oc=1031,h0=1032,ac=1033,yo=33776,_o=33777,bo=33778,Mo=33779,xl=35840,yl=35841,_l=35842,bl=35843,Ml=36196,wl=37492,Sl=37496,Tl=37808,Al=37809,El=37810,Cl=37811,Rl=37812,Pl=37813,Il=37814,Ll=37815,Dl=37816,Ul=37817,Nl=37818,kl=37819,Fl=37820,Ol=37821,wo=36492,zl=36494,Bl=36495,bu=36283,Hl=36284,Vl=36285,Gl=36286,Rp=2200,Pp=2201,Ip=2202,Io=2300,Wl=2301,rl=2302,Ns=2400,ks=2401,Lo=2402,lc=2500,Mu=2501,u0=0,d0=1,f0=2,Lp=3200,wu=3201,p0=3202,m0=3203,ps=0,Dp=1,Ui="",Vt="srgb",Ks="srgb-linear",$o="linear",Tt="srgb",g0=0,Is=7680,v0=7681,x0=7682,y0=7683,_0=34055,b0=34056,M0=5386,w0=512,S0=513,T0=514,A0=515,E0=516,C0=517,R0=518,Hh=519,Up=512,Np=513,kp=514,Su=515,Fp=516,Op=517,zp=518,Bp=519,Do=35044,P0=35048,I0=35040,L0=35045,D0=35049,U0=35041,N0=35046,k0=35050,F0=35042,O0="100",Vh="300 es",mi=2e3,Uo=2001;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rd=1234567;const Hs=Math.PI/180,Ir=180/Math.PI;function Bn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[s&255]+un[s>>8&255]+un[s>>16&255]+un[s>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function Ft(s,e,t){return Math.max(e,Math.min(t,s))}function Tu(s,e){return(s%e+e)%e}function z0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function B0(s,e,t){return s!==e?(t-s)/(e-s):0}function So(s,e,t){return(1-t)*s+t*e}function H0(s,e,t,n){return So(s,e,1-Math.exp(-t*n))}function V0(s,e=1){return e-Math.abs(Tu(s,e*2)-e)}function G0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function W0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function X0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function q0(s,e){return s+Math.random()*(e-s)}function $0(s){return s*(.5-Math.random())}function Y0(s){s!==void 0&&(rd=s);let e=rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Z0(s){return s*Hs}function K0(s){return s*Ir}function J0(s){return(s&s-1)===0&&s!==0}function j0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Q0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function eg(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const tn={DEG2RAD:Hs,RAD2DEG:Ir,generateUUID:Bn,clamp:Ft,euclideanModulo:Tu,mapLinear:z0,inverseLerp:B0,lerp:So,damp:H0,pingpong:V0,smoothstep:G0,smootherstep:W0,randInt:X0,randFloat:q0,randFloatSpread:$0,seededRandom:Y0,degToRad:Z0,radToDeg:K0,isPowerOfTwo:J0,ceilPowerOfTwo:j0,floorPowerOfTwo:Q0,setQuaternionFromProperEuler:eg,normalize:at,denormalize:Mn};class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,i,r,o,a,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=i[0],g=i[3],m=i[6],y=i[1],_=i[4],x=i[7],I=i[2],C=i[5],S=i[8];return r[0]=o*v+a*y+l*I,r[3]=o*g+a*_+l*C,r[6]=o*m+a*x+l*S,r[1]=c*v+h*y+u*I,r[4]=c*g+h*_+u*C,r[7]=c*m+h*x+u*S,r[2]=d*v+f*y+p*I,r[5]=d*g+f*_+p*C,r[8]=d*m+f*x+p*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fc.makeScale(e,t)),this}rotate(e){return this.premultiply(Fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fc=new st;function Hp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const tg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Tr(s,e){return new tg[s](e)}function No(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vp(){const s=No("canvas");return s.style.display="block",s}const od={};function fo(s){s in od||(od[s]=!0,console.warn(s))}function ng(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ig(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sg(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const pt={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Tt&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Tt&&(s.r=Cr(s.r),s.g=Cr(s.g),s.b=Cr(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?$o:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ad=[.64,.33,.3,.6,.15,.06],ld=[.2126,.7152,.0722],cd=[.3127,.329],hd=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ud=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt.define({[Ks]:{primaries:ad,whitePoint:cd,transfer:$o,toXYZ:hd,fromXYZ:ud,luminanceCoefficients:ld,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:ad,whitePoint:cd,transfer:Tt,toXYZ:hd,fromXYZ:ud,luminanceCoefficients:ld,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}});let nr;class Gp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=No("canvas")),nr.width=e.width,nr.height=e.height;const n=nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=No("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rg=0;class Fs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Oc(i[o].image)):r.push(Oc(i[o]))}else r=Oc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Oc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let og=0;class Ot extends wi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Xn,i=Xn,r=Yt,o=pi,a=wn,l=bi,c=Ot.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Bn(),this.name="",this.source=new Fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _i:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _i:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=tc;Ot.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,i=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(f+1)/2,I=(m+1)/2,C=(h+d)/4,S=(u+v)/4,E=(p+g)/4;return _>x&&_>I?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=C/n,r=S/n):x>I?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=C/i,r=E/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=S/r,i=E/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wp extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Wp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cc extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ag extends Sn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new cc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Au extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lg extends Sn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Au(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Ct{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==p){let g=1-a;const m=l*d+c*f+h*p+u*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const I=Math.sqrt(_),C=Math.atan2(I,m*y);g=Math.sin(g*C)/I,a=Math.sin(a*C)/I}const x=a*y;if(l=l*g+d*x,c=c*g+f*x,h=h*g+p*x,u=u*g+v*x,g===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new A,dd=new Ct;class Tn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),la.subVectors(this.max,Yr),ir.subVectors(e.a,Yr),sr.subVectors(e.b,Yr),rr.subVectors(e.c,Yr),Ji.subVectors(sr,ir),ji.subVectors(rr,sr),xs.subVectors(ir,rr);let t=[0,-Ji.z,Ji.y,0,-ji.z,ji.y,0,-xs.z,xs.y,Ji.z,0,-Ji.x,ji.z,0,-ji.x,xs.z,0,-xs.x,-Ji.y,Ji.x,0,-ji.y,ji.x,0,-xs.y,xs.x,0];return!Bc(t,ir,sr,rr,la)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,ir,sr,rr,la))?!1:(ca.crossVectors(Ji,ji),t=[ca.x,ca.y,ca.z],Bc(t,ir,sr,rr,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new A,new A,new A,new A,new A,new A,new A,new A],Zn=new A,aa=new Tn,ir=new A,sr=new A,rr=new A,Ji=new A,ji=new A,xs=new A,Yr=new A,la=new A,ca=new A,ys=new A;function Bc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ys.fromArray(s,r);const a=i.x*Math.abs(ys.x)+i.y*Math.abs(ys.y)+i.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),h=n.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const cg=new Tn,Zr=new A,Hc=new A;class mn{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Hc)),this.expandByPoint(Zr.copy(e.center).sub(Hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new A,Vc=new A,ha=new A,Qi=new A,Gc=new A,ua=new A,Wc=new A;class Br{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Vc.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(Vc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ha),a=Qi.dot(this.direction),l=-Qi.dot(ha),c=Qi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Vc).addScaledVector(ha,d),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const n=Ei.dot(this.direction),i=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,i,r){Gc.subVectors(t,e),ua.subVectors(n,e),Wc.crossVectors(Gc,ua);let o=this.direction.dot(Wc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const l=a*this.direction.dot(ua.crossVectors(Qi,ua));if(l<0)return null;const c=a*this.direction.dot(Gc.cross(Qi));if(c<0||l+c>o)return null;const h=-a*Qi.dot(Wc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,p,v,g){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,p,v,g)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,p=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d+v*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,p=a*h,v=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hg,e,ug)}lookAt(e,t,n){const i=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),es.crossVectors(n,kn),es.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),es.crossVectors(n,kn)),es.normalize(),da.crossVectors(kn,es),i[0]=es.x,i[4]=da.x,i[8]=kn.x,i[1]=es.y,i[5]=da.y,i[9]=kn.y,i[2]=es.z,i[6]=da.z,i[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],y=n[3],_=n[7],x=n[11],I=n[15],C=i[0],S=i[4],E=i[8],w=i[12],b=i[1],P=i[5],N=i[9],U=i[13],D=i[2],F=i[6],z=i[10],k=i[14],B=i[3],X=i[7],Y=i[11],ne=i[15];return r[0]=o*C+a*b+l*D+c*B,r[4]=o*S+a*P+l*F+c*X,r[8]=o*E+a*N+l*z+c*Y,r[12]=o*w+a*U+l*k+c*ne,r[1]=h*C+u*b+d*D+f*B,r[5]=h*S+u*P+d*F+f*X,r[9]=h*E+u*N+d*z+f*Y,r[13]=h*w+u*U+d*k+f*ne,r[2]=p*C+v*b+g*D+m*B,r[6]=p*S+v*P+g*F+m*X,r[10]=p*E+v*N+g*z+m*Y,r[14]=p*w+v*U+g*k+m*ne,r[3]=y*C+_*b+x*D+I*B,r[7]=y*S+_*P+x*F+I*X,r[11]=y*E+_*N+x*z+I*Y,r[15]=y*w+_*U+x*k+I*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],y=u*g*c-v*d*c+v*l*f-a*g*f-u*l*m+a*d*m,_=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,x=h*v*c-p*u*c+p*a*f-o*v*f-h*a*m+o*u*m,I=p*u*l-h*v*l-p*a*d+o*v*d+h*a*g-o*u*g,C=t*y+n*_+i*x+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/C;return e[0]=y*S,e[1]=(v*d*r-u*g*r-v*i*f+n*g*f+u*i*m-n*d*m)*S,e[2]=(a*g*r-v*l*r+v*i*c-n*g*c-a*i*m+n*l*m)*S,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*S,e[4]=_*S,e[5]=(h*g*r-p*d*r+p*i*f-t*g*f-h*i*m+t*d*m)*S,e[6]=(p*l*r-o*g*r-p*i*c+t*g*c+o*i*m-t*l*m)*S,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*S,e[8]=x*S,e[9]=(p*u*r-h*v*r-p*n*f+t*v*f+h*n*m-t*u*m)*S,e[10]=(o*v*r-p*a*r+p*n*c-t*v*c-o*n*m+t*a*m)*S,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*S,e[12]=I*S,e[13]=(h*v*i-p*u*i+p*n*d-t*v*d-h*n*g+t*u*g)*S,e[14]=(p*a*i-o*v*i-p*n*l+t*v*l+o*n*g-t*a*g)*S,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,v=o*h,g=o*u,m=a*u,y=l*c,_=l*h,x=l*u,I=n.x,C=n.y,S=n.z;return i[0]=(1-(v+m))*I,i[1]=(f+x)*I,i[2]=(p-_)*I,i[3]=0,i[4]=(f-x)*C,i[5]=(1-(d+m))*C,i[6]=(g+y)*C,i[7]=0,i[8]=(p+_)*S,i[9]=(g-y)*S,i[10]=(1-(d+v))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=or.set(i[0],i[1],i[2]).length();const o=or.set(i[4],i[5],i[6]).length(),a=or.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Kn.copy(this);const c=1/r,h=1/o,u=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,t.setFromRotationMatrix(Kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=mi){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,p;if(a===mi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Uo)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=mi){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*h;let p,v;if(a===mi)p=(o+r)*u,v=-2*u;else if(a===Uo)p=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const or=new A,Kn=new Ze,hg=new A(0,0,0),ug=new A(1,1,1),es=new A,da=new A,kn=new A,fd=new Ze,pd=new Ct;class St{constructor(e=0,t=0,n=0,i=St.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}St.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dg=0;const md=new A,ar=new Ct,Ci=new Ze,fa=new A,Kr=new A,fg=new A,pg=new Ct,gd=new A(1,0,0),vd=new A(0,1,0),xd=new A(0,0,1),yd={type:"added"},mg={type:"removed"},lr={type:"childadded",child:null},Xc={type:"childremoved",child:null};class _t extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new A,t=new St,n=new Ct,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new st}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(vd,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,t){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(vd,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Kr,fa,this.up):Ci.lookAt(fa,Kr,this.up),this.quaternion.setFromRotationMatrix(Ci),i&&(Ci.extractRotation(i.matrixWorld),ar.setFromRotationMatrix(Ci),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yd),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mg),Xc.child=e,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yd),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,fg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,pg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new A(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new A,Ri=new A,qc=new A,Pi=new A,cr=new A,hr=new A,_d=new A,$c=new A,Yc=new A,Zc=new A,Kc=new yt,Jc=new yt,jc=new yt;class In{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jn.subVectors(e,t),i.cross(Jn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Jn.subVectors(i,t),Ri.subVectors(n,t),qc.subVectors(e,t);const o=Jn.dot(Jn),a=Jn.dot(Ri),l=Jn.dot(qc),c=Ri.dot(Ri),h=Ri.dot(qc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Kc.setScalar(0),Jc.setScalar(0),jc.setScalar(0),Kc.fromBufferAttribute(e,t),Jc.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Kc,r.x),o.addScaledVector(Jc,r.y),o.addScaledVector(jc,r.z),o}static isFrontFacing(e,t,n,i){return Jn.subVectors(n,t),Ri.subVectors(e,t),Jn.cross(Ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Jn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return In.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;cr.subVectors(i,n),hr.subVectors(r,n),$c.subVectors(e,n);const l=cr.dot($c),c=hr.dot($c);if(l<=0&&c<=0)return t.copy(n);Yc.subVectors(e,i);const h=cr.dot(Yc),u=hr.dot(Yc);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(cr,o);Zc.subVectors(e,r);const f=cr.dot(Zc),p=hr.dot(Zc);if(p>=0&&f<=p)return t.copy(r);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(hr,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return _d.subVectors(r,i),a=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(_d,a);const m=1/(g+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(cr,o).addScaledVector(hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Qc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Tu(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Qc(o,r,e+1/3),this.g=Qc(o,r,e),this.b=Qc(o,r,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Xp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return pt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Ft(dn.r*255,0,255))*65536+Math.round(Ft(dn.g*255,0,255))*256+Math.round(Ft(dn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,r=dn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Vt){pt.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(pa);const n=So(ts.h,pa.h,t),i=So(ts.s,pa.s,t),r=So(ts.l,pa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Ie;Ie.NAMES=Xp;let gg=0;class vn extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Bn(),this.name="",this.blending=zs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==hl&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cn extends vn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new St,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ni=vg();function vg(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Rn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ft(s,-65504,65504),Ni.floatView[0]=s;const e=Ni.uint32View[0],t=e>>23&511;return Ni.baseTable[t]+((e&8388607)>>Ni.shiftTable[t])}function po(s){const e=s>>10;return Ni.uint32View[0]=Ni.mantissaTable[Ni.offsetTable[e]+(s&1023)]+Ni.exponentTable[e],Ni.floatView[0]}const xg={toHalfFloat:Rn,fromHalfFloat:po},Bt=new A,ma=new de;class ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Do,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}}class yg extends ut{constructor(e,t,n){super(new Int8Array(e),t,n)}}class _g extends ut{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class bg extends ut{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Mg extends ut{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Eu extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wg extends ut{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Cu extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Sg extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=po(this.array[e*this.itemSize]);return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=Rn(t),this}getY(e){let t=po(this.array[e*this.itemSize+1]);return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=Rn(t),this}getZ(e){let t=po(this.array[e*this.itemSize+2]);return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=Rn(t),this}getW(e){let t=po(this.array[e*this.itemSize+3]);return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=Rn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=Rn(t),this.array[e+1]=Rn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=Rn(t),this.array[e+1]=Rn(n),this.array[e+2]=Rn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=Rn(t),this.array[e+1]=Rn(n),this.array[e+2]=Rn(i),this.array[e+3]=Rn(r),this}}class Ye extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tg=0;const Wn=new Ze,eh=new _t,ur=new A,Fn=new Tn,Jr=new Tn,Jt=new A;class nt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hp(e)?Cu:Eu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return eh.lookAt(e),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Fn.min,Jr.min),Fn.expandByPoint(Jt),Jt.addVectors(Fn.max,Jr.max),Fn.expandByPoint(Jt)):(Fn.expandByPoint(Jr.min),Fn.expandByPoint(Jr.max))}Fn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(ur.fromBufferAttribute(e,c),Jt.add(ur)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new A,l[E]=new A;const c=new A,h=new A,u=new A,d=new de,f=new de,p=new de,v=new A,g=new A;function m(E,w,b){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),a[E].add(v),a[w].add(v),a[b].add(v),l[E].add(g),l[w].add(g),l[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let E=0,w=y.length;E<w;++E){const b=y[E],P=b.start,N=b.count;for(let U=P,D=P+N;U<D;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new A,x=new A,I=new A,C=new A;function S(E){I.fromBufferAttribute(i,E),C.copy(I);const w=a[E];_.copy(w),_.sub(I.multiplyScalar(I.dot(w))).normalize(),x.crossVectors(C,w);const P=x.dot(l[E])<0?-1:1;o.setXYZW(E,_.x,_.y,_.z,P)}for(let E=0,w=y.length;E<w;++E){const b=y[E],P=b.start,N=b.count;for(let U=P,D=P+N;U<D;U+=3)S(e.getX(U+0)),S(e.getX(U+1)),S(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new ut(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bd=new Ze,_s=new Br,ga=new mn,Md=new A,va=new A,xa=new A,ya=new A,th=new A,_a=new A,wd=new A,ba=new A;class je extends _t{constructor(e=new nt,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){_a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(th.fromBufferAttribute(u,e),o?_a.addScaledVector(th,h):_a.addScaledVector(th.sub(t),h))}t.add(_a)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(ga.containsPoint(_s.origin)===!1&&(_s.intersectSphere(ga,Md)===null||_s.origin.distanceToSquared(Md)>(e.far-e.near)**2))&&(bd.copy(r).invert(),_s.copy(e.ray).applyMatrix4(bd),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,I=_;x<I;x+=3){const C=a.getX(x),S=a.getX(x+1),E=a.getX(x+2);i=Ma(this,m,e,n,c,h,u,C,S,E),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const y=a.getX(g),_=a.getX(g+1),x=a.getX(g+2);i=Ma(this,o,e,n,c,h,u,y,_,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,I=_;x<I;x+=3){const C=x,S=x+1,E=x+2;i=Ma(this,m,e,n,c,h,u,C,S,E),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const y=g,_=g+1,x=g+2;i=Ma(this,o,e,n,c,h,u,y,_,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Ag(s,e,t,n,i,r,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Hi,a),l===null)return null;ba.copy(a),ba.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ba);return c<t.near||c>t.far?null:{distance:c,point:ba.clone(),object:s}}function Ma(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,va),s.getVertexPosition(l,xa),s.getVertexPosition(c,ya);const h=Ag(s,e,t,n,va,xa,ya,wd);if(h){const u=new A;In.getBarycoord(wd,va,xa,ya,u),i&&(h.uv=In.getInterpolatedAttribute(i,a,l,c,u,new de)),r&&(h.uv1=In.getInterpolatedAttribute(r,a,l,c,u,new de)),o&&(h.normal=In.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new A,materialIndex:0};In.getNormal(va,xa,ya,d.normal),h.face=d,h.barycoord=u}return h}class qi extends nt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function p(v,g,m,y,_,x,I,C,S,E,w){const b=x/S,P=I/E,N=x/2,U=I/2,D=C/2,F=S+1,z=E+1;let k=0,B=0;const X=new A;for(let Y=0;Y<z;Y++){const ne=Y*P-U;for(let ue=0;ue<F;ue++){const we=ue*b-N;X[v]=we*y,X[g]=ne*_,X[m]=D,c.push(X.x,X.y,X.z),X[v]=0,X[g]=0,X[m]=C>0?1:-1,h.push(X.x,X.y,X.z),u.push(ue/S),u.push(1-Y/E),k+=1}}for(let Y=0;Y<E;Y++)for(let ne=0;ne<S;ne++){const ue=d+ne+F*Y,we=d+ne+F*(Y+1),Q=d+(ne+1)+F*(Y+1),re=d+(ne+1)+F*Y;l.push(ue,we,re),l.push(we,Q,re),B+=6}a.addGroup(f,B,w),f+=B,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _n(s){const e={};for(let t=0;t<s.length;t++){const n=Lr(s[t]);for(const i in n)e[i]=n[i]}return e}function Eg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function qp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Dr={clone:Lr,merge:_n};var Cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends vn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cg,this.fragmentShader=Rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=Eg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uc extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new A,Sd=new de,Td=new de;class en extends uc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Sd,Td),t.subVectors(Td,Sd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,fr=1;class $p extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(dr,fr,e,t);i.layers=this.layers,this.add(i);const r=new en(dr,fr,e,t);r.layers=this.layers,this.add(r);const o=new en(dr,fr,e,t);o.layers=this.layers,this.add(o);const a=new en(dr,fr,e,t);a.layers=this.layers,this.add(a);const l=new en(dr,fr,e,t);l.layers=this.layers,this.add(l);const c=new en(dr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Yo extends Ot{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yp extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qi(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:vi});r.uniforms.tEquirect.value=t;const o=new je(i,r),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=Yt),new $p(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const nh=new A,Pg=new A,Ig=new st;class ss{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=nh.subVectors(n,t).cross(Pg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(nh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ig.getNormalMatrix(e),i=this.coplanarPoint(nh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new mn,wa=new A;class Zo{constructor(e=new ss,t=new ss,n=new ss,i=new ss,r=new ss,o=new ss){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],v=i[10],g=i[11],m=i[12],y=i[13],_=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,g-f,x-m).normalize(),n[1].setComponents(l+r,d+c,g+f,x+m).normalize(),n[2].setComponents(l+o,d+h,g+p,x+y).normalize(),n[3].setComponents(l-o,d-h,g-p,x-y).normalize(),n[4].setComponents(l-a,d-u,g-v,x-_).normalize(),t===mi)n[5].setComponents(l+a,d+u,g+v,x+_).normalize();else if(t===Uo)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wa.x=i.normal.x>0?e.max.x:e.min.x,wa.y=i.normal.y>0?e.max.y:e.min.y,wa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Lg(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class $n extends nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){const y=m*d-o;for(let _=0;_<c;_++){const x=_*u-r;p.push(x,-y,0),v.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const _=y+c*m,x=y+c*(m+1),I=y+1+c*(m+1),C=y+1+c*m;f.push(_,x,C),f.push(x,I,C)}this.setIndex(f),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ug=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$g=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ov=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",hv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_v=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ev=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Iv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ov=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$v=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ax=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ax=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ex=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ey=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ty=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ry=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ly=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:Dg,alphahash_pars_fragment:Ug,alphamap_fragment:Ng,alphamap_pars_fragment:kg,alphatest_fragment:Fg,alphatest_pars_fragment:Og,aomap_fragment:zg,aomap_pars_fragment:Bg,batching_pars_vertex:Hg,batching_vertex:Vg,begin_vertex:Gg,beginnormal_vertex:Wg,bsdfs:Xg,iridescence_fragment:qg,bumpmap_pars_fragment:$g,clipping_planes_fragment:Yg,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:Kg,clipping_planes_vertex:Jg,color_fragment:jg,color_pars_fragment:Qg,color_pars_vertex:ev,color_vertex:tv,common:nv,cube_uv_reflection_fragment:iv,defaultnormal_vertex:sv,displacementmap_pars_vertex:rv,displacementmap_vertex:ov,emissivemap_fragment:av,emissivemap_pars_fragment:lv,colorspace_fragment:cv,colorspace_pars_fragment:hv,envmap_fragment:uv,envmap_common_pars_fragment:dv,envmap_pars_fragment:fv,envmap_pars_vertex:pv,envmap_physical_pars_fragment:Tv,envmap_vertex:mv,fog_vertex:gv,fog_pars_vertex:vv,fog_fragment:xv,fog_pars_fragment:yv,gradientmap_pars_fragment:_v,lightmap_pars_fragment:bv,lights_lambert_fragment:Mv,lights_lambert_pars_fragment:wv,lights_pars_begin:Sv,lights_toon_fragment:Av,lights_toon_pars_fragment:Ev,lights_phong_fragment:Cv,lights_phong_pars_fragment:Rv,lights_physical_fragment:Pv,lights_physical_pars_fragment:Iv,lights_fragment_begin:Lv,lights_fragment_maps:Dv,lights_fragment_end:Uv,logdepthbuf_fragment:Nv,logdepthbuf_pars_fragment:kv,logdepthbuf_pars_vertex:Fv,logdepthbuf_vertex:Ov,map_fragment:zv,map_pars_fragment:Bv,map_particle_fragment:Hv,map_particle_pars_fragment:Vv,metalnessmap_fragment:Gv,metalnessmap_pars_fragment:Wv,morphinstance_vertex:Xv,morphcolor_vertex:qv,morphnormal_vertex:$v,morphtarget_pars_vertex:Yv,morphtarget_vertex:Zv,normal_fragment_begin:Kv,normal_fragment_maps:Jv,normal_pars_fragment:jv,normal_pars_vertex:Qv,normal_vertex:ex,normalmap_pars_fragment:tx,clearcoat_normal_fragment_begin:nx,clearcoat_normal_fragment_maps:ix,clearcoat_pars_fragment:sx,iridescence_pars_fragment:rx,opaque_fragment:ox,packing:ax,premultiplied_alpha_fragment:lx,project_vertex:cx,dithering_fragment:hx,dithering_pars_fragment:ux,roughnessmap_fragment:dx,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:px,shadowmap_pars_vertex:mx,shadowmap_vertex:gx,shadowmask_pars_fragment:vx,skinbase_vertex:xx,skinning_pars_vertex:yx,skinning_vertex:_x,skinnormal_vertex:bx,specularmap_fragment:Mx,specularmap_pars_fragment:wx,tonemapping_fragment:Sx,tonemapping_pars_fragment:Tx,transmission_fragment:Ax,transmission_pars_fragment:Ex,uv_pars_fragment:Cx,uv_pars_vertex:Rx,uv_vertex:Px,worldpos_vertex:Ix,background_vert:Lx,background_frag:Dx,backgroundCube_vert:Ux,backgroundCube_frag:Nx,cube_vert:kx,cube_frag:Fx,depth_vert:Ox,depth_frag:zx,distanceRGBA_vert:Bx,distanceRGBA_frag:Hx,equirect_vert:Vx,equirect_frag:Gx,linedashed_vert:Wx,linedashed_frag:Xx,meshbasic_vert:qx,meshbasic_frag:$x,meshlambert_vert:Yx,meshlambert_frag:Zx,meshmatcap_vert:Kx,meshmatcap_frag:Jx,meshnormal_vert:jx,meshnormal_frag:Qx,meshphong_vert:ey,meshphong_frag:ty,meshphysical_vert:ny,meshphysical_frag:iy,meshtoon_vert:sy,meshtoon_frag:ry,points_vert:oy,points_frag:ay,shadow_vert:ly,shadow_frag:cy,sprite_vert:hy,sprite_frag:uy},He={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ei={basic:{uniforms:_n([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:_n([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:_n([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:_n([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:_n([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:_n([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:_n([He.points,He.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:_n([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:_n([He.common,He.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:_n([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:_n([He.sprite,He.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:_n([He.common,He.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:_n([He.lights,He.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ei.physical={uniforms:_n([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Sa={r:0,b:0,g:0},Ms=new St,dy=new Ze;function fy(s,e,t,n,i,r,o){const a=new Ie(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const x=p(y);x===null?m(a,l):x&&x.isColor&&(m(x,1),_=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,_){const x=p(_);x&&(x.isCubeTexture||x.mapping===zr)?(h===void 0&&(h=new je(new qi(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Lr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ms.copy(_.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dy.makeRotationFromEuler(Ms)),h.material.toneMapped=pt.getTransfer(x.colorSpace)!==Tt,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new je(new $n(2,2),new At({name:"BackgroundMaterial",uniforms:Lr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=pt.getTransfer(x.colorSpace)!==Tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,_){y.getRGB(Sa,qp(s)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:v,addToRenderList:g}}function py(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(b,P,N,U,D){let F=!1;const z=u(U,N,P);r!==z&&(r=z,c(r.object)),F=f(b,U,N,D),F&&p(b,U,N,D),D!==null&&e.update(D,s.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,x(b,P,N,U),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,P,N){const U=N.wireframe===!0;let D=n[b.id];D===void 0&&(D={},n[b.id]=D);let F=D[P.id];F===void 0&&(F={},D[P.id]=F);let z=F[U];return z===void 0&&(z=d(l()),F[U]=z),z}function d(b){const P=[],N=[],U=[];for(let D=0;D<t;D++)P[D]=0,N[D]=0,U[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:U,object:b,attributes:{},index:null}}function f(b,P,N,U){const D=r.attributes,F=P.attributes;let z=0;const k=N.getAttributes();for(const B in k)if(k[B].location>=0){const Y=D[B];let ne=F[B];if(ne===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),Y===void 0||Y.attribute!==ne||ne&&Y.data!==ne.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function p(b,P,N,U){const D={},F=P.attributes;let z=0;const k=N.getAttributes();for(const B in k)if(k[B].location>=0){let Y=F[B];Y===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor));const ne={};ne.attribute=Y,Y&&Y.data&&(ne.data=Y.data),D[B]=ne,z++}r.attributes=D,r.attributesNum=z,r.index=U}function v(){const b=r.newAttributes;for(let P=0,N=b.length;P<N;P++)b[P]=0}function g(b){m(b,0)}function m(b,P){const N=r.newAttributes,U=r.enabledAttributes,D=r.attributeDivisors;N[b]=1,U[b]===0&&(s.enableVertexAttribArray(b),U[b]=1),D[b]!==P&&(s.vertexAttribDivisor(b,P),D[b]=P)}function y(){const b=r.newAttributes,P=r.enabledAttributes;for(let N=0,U=P.length;N<U;N++)P[N]!==b[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function _(b,P,N,U,D,F,z){z===!0?s.vertexAttribIPointer(b,P,N,D,F):s.vertexAttribPointer(b,P,N,U,D,F)}function x(b,P,N,U){v();const D=U.attributes,F=N.getAttributes(),z=P.defaultAttributeValues;for(const k in F){const B=F[k];if(B.location>=0){let X=D[k];if(X===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(X=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(X=b.instanceColor)),X!==void 0){const Y=X.normalized,ne=X.itemSize,ue=e.get(X);if(ue===void 0)continue;const we=ue.buffer,Q=ue.type,re=ue.bytesPerElement,ge=Q===s.INT||Q===s.UNSIGNED_INT||X.gpuType===nc;if(X.isInterleavedBufferAttribute){const ve=X.data,he=ve.stride,Se=X.offset;if(ve.isInstancedInterleavedBuffer){for(let J=0;J<B.locationSize;J++)m(B.location+J,ve.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let J=0;J<B.locationSize;J++)g(B.location+J);s.bindBuffer(s.ARRAY_BUFFER,we);for(let J=0;J<B.locationSize;J++)_(B.location+J,ne/B.locationSize,Q,Y,he*re,(Se+ne/B.locationSize*J)*re,ge)}else{if(X.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)m(B.location+ve,X.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ve=0;ve<B.locationSize;ve++)g(B.location+ve);s.bindBuffer(s.ARRAY_BUFFER,we);for(let ve=0;ve<B.locationSize;ve++)_(B.location+ve,ne/B.locationSize,Q,Y,ne*re,ne/B.locationSize*ve*re,ge)}}else if(z!==void 0){const Y=z[k];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(B.location,Y);break;case 3:s.vertexAttrib3fv(B.location,Y);break;case 4:s.vertexAttrib4fv(B.location,Y);break;default:s.vertexAttrib1fv(B.location,Y)}}}}y()}function I(){E();for(const b in n){const P=n[b];for(const N in P){const U=P[N];for(const D in U)h(U[D].object),delete U[D];delete P[N]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const N in P){const U=P[N];for(const D in U)h(U[D].object),delete U[D];delete P[N]}delete n[b.id]}function S(b){for(const P in n){const N=n[P];if(N[b.id]===void 0)continue;const U=N[b.id];for(const D in U)h(U[D].object),delete U[D];delete N[b.id]}}function E(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function my(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v]*d[v];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gy(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==wn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const E=S===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==bi&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Ln&&!E)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=p>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:I,maxSamples:C}}function vy(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ss,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{const y=r?0:n,_=y*4;let x=m.clippingState||null;l.value=x,x=h(p,d,_,f);for(let I=0;I!==_;++I)x[I]=t[I];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function xy(s){let e=new WeakMap;function t(o,a){return a===Co?o.mapping=Vi:a===Ro&&(o.mapping=us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Co||a===Ro)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yp(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ko extends uc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ar=4,Ad=[.125,.215,.35,.446,.526,.582],Us=20,ih=new Ko,Ed=new Ie;let sh=null,rh=0,oh=0,ah=!1;const Ls=(1+Math.sqrt(5))/2,pr=1/Ls,Cd=[new A(-Ls,pr,0),new A(Ls,pr,0),new A(-pr,0,Ls),new A(pr,0,Ls),new A(0,Ls,-pr),new A(0,Ls,pr),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,rh,oh),this._renderer.xr.enabled=ah,e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:xi,format:wn,colorSpace:Ks,depthBuffer:!1},i=Rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yy(r)),this._blurMaterial=_y(r,e,t)}return i}_compileMaterial(e){const t=new je(this._lodPlanes[0],e);this._renderer.compile(t,ih)}_sceneToCubeUV(e,t,n,i){const a=new en(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ed),h.toneMapping=Oi,h.autoClear=!1;const f=new cn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),p=new je(new qi,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(Ed),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const _=this._cubeSize;Ta(i,y*_,m>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Vi||e.mapping===us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ih)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cd[(i-r-1)%Cd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new je(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Us-1),v=r/p,g=isFinite(r)?1+Math.floor(h*v):Us;g>Us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Us}`);const m=[];let y=0;for(let S=0;S<Us;++S){const E=S/v,w=Math.exp(-E*E/2);m.push(w),S===0?y+=w:S<g&&(y+=2*w)}for(let S=0;S<m.length;S++)m[S]=m[S]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;const x=this._sizeLods[i],I=3*x*(i>_-Ar?i-_+Ar:0),C=4*(this._cubeSize-x);Ta(t,I,C,3*x,2*x),l.setRenderTarget(t),l.render(u,ih)}}function yy(s){const e=[],t=[],n=[];let i=s;const r=s-Ar+1+Ad.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ar?l=Ad[o-s+Ar-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,g=2,m=1,y=new Float32Array(v*p*f),_=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let C=0;C<f;C++){const S=C%3*2/3-1,E=C>2?0:-1,w=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];y.set(w,v*p*C),_.set(d,g*p*C);const b=[C,C,C,C,C,C];x.set(b,m*p*C)}const I=new nt;I.setAttribute("position",new ut(y,v)),I.setAttribute("uv",new ut(_,g)),I.setAttribute("faceIndex",new ut(x,m)),e.push(I),i>Ar&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rd(s,e,t){const n=new Sn(s,e,t);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function _y(s,e,t){const n=new Float32Array(Us),i=new A(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Pd(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Id(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function by(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Co||l===Ro,h=l===Vi||l===us;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Gh(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Gh(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function My(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&fo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wy(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);for(const p in d.morphAttributes){const v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const v=f[p];for(let g=0,m=v.length;g<m;g++)e.update(v[g],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,p=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){const I=y[_+0],C=y[_+1],S=y[_+2];d.push(I,C,C,S,S,I)}}else if(p!==void 0){const y=p.array;v=p.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const I=_+0,C=_+1,S=_+2;d.push(I,C,C,S,S,I)}}else return;const g=new(Hp(d)?Cu:Eu)(d,1);g.version=v;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Sy(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function u(d,f,p,v){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y]*v[y];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ty(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ay(s,e,t){const n=new WeakMap,i=new yt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let I=a.attributes.position.count*x,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const S=new Float32Array(I*C*4*u),E=new cc(S,I,C,u);E.type=Ln,E.needsUpdate=!0;const w=x*4;for(let P=0;P<u;P++){const N=m[P],U=y[P],D=_[P],F=I*C*4*P;for(let z=0;z<N.count;z++){const k=z*w;p===!0&&(i.fromBufferAttribute(N,z),S[F+k+0]=i.x,S[F+k+1]=i.y,S[F+k+2]=i.z,S[F+k+3]=0),v===!0&&(i.fromBufferAttribute(U,z),S[F+k+4]=i.x,S[F+k+5]=i.y,S[F+k+6]=i.z,S[F+k+7]=0),g===!0&&(i.fromBufferAttribute(D,z),S[F+k+8]=i.x,S[F+k+9]=i.y,S[F+k+10]=i.z,S[F+k+11]=D.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new de(I,C)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ey(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Pu extends Ot{constructor(e,t,n,i,r,o,a,l,c,h=Bs){if(h!==Bs&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bs&&(n=Gi),n===void 0&&h===Xs&&(n=Ws),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Kp=new Ot,Ld=new Pu(1,1),Jp=new cc,jp=new Au,Qp=new Yo,Dd=[],Ud=[],Nd=new Float32Array(16),kd=new Float32Array(9),Fd=new Float32Array(4);function Hr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Dd[i];if(r===void 0&&(r=new Float32Array(i),Dd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Zt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function dc(s,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Cy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ry(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2fv(this.addr,e),Kt(t,e)}}function Py(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;s.uniform3fv(this.addr,e),Kt(t,e)}}function Iy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4fv(this.addr,e),Kt(t,e)}}function Ly(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Fd.set(n),s.uniformMatrix2fv(this.addr,!1,Fd),Kt(t,n)}}function Dy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;kd.set(n),s.uniformMatrix3fv(this.addr,!1,kd),Kt(t,n)}}function Uy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Nd.set(n),s.uniformMatrix4fv(this.addr,!1,Nd),Kt(t,n)}}function Ny(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ky(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2iv(this.addr,e),Kt(t,e)}}function Fy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3iv(this.addr,e),Kt(t,e)}}function Oy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4iv(this.addr,e),Kt(t,e)}}function zy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function By(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2uiv(this.addr,e),Kt(t,e)}}function Hy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3uiv(this.addr,e),Kt(t,e)}}function Vy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4uiv(this.addr,e),Kt(t,e)}}function Gy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ld.compareFunction=Su,r=Ld):r=Kp,t.setTexture2D(e||r,i)}function Wy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jp,i)}function Xy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qp,i)}function qy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jp,i)}function $y(s){switch(s){case 5126:return Cy;case 35664:return Ry;case 35665:return Py;case 35666:return Iy;case 35674:return Ly;case 35675:return Dy;case 35676:return Uy;case 5124:case 35670:return Ny;case 35667:case 35671:return ky;case 35668:case 35672:return Fy;case 35669:case 35673:return Oy;case 5125:return zy;case 36294:return By;case 36295:return Hy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return qy}}function Yy(s,e){s.uniform1fv(this.addr,e)}function Zy(s,e){const t=Hr(e,this.size,2);s.uniform2fv(this.addr,t)}function Ky(s,e){const t=Hr(e,this.size,3);s.uniform3fv(this.addr,t)}function Jy(s,e){const t=Hr(e,this.size,4);s.uniform4fv(this.addr,t)}function jy(s,e){const t=Hr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Qy(s,e){const t=Hr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function e_(s,e){const t=Hr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function t_(s,e){s.uniform1iv(this.addr,e)}function n_(s,e){s.uniform2iv(this.addr,e)}function i_(s,e){s.uniform3iv(this.addr,e)}function s_(s,e){s.uniform4iv(this.addr,e)}function r_(s,e){s.uniform1uiv(this.addr,e)}function o_(s,e){s.uniform2uiv(this.addr,e)}function a_(s,e){s.uniform3uiv(this.addr,e)}function l_(s,e){s.uniform4uiv(this.addr,e)}function c_(s,e,t){const n=this.cache,i=e.length,r=dc(t,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Kp,r[o])}function h_(s,e,t){const n=this.cache,i=e.length,r=dc(t,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||jp,r[o])}function u_(s,e,t){const n=this.cache,i=e.length,r=dc(t,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Qp,r[o])}function d_(s,e,t){const n=this.cache,i=e.length,r=dc(t,i);Zt(n,r)||(s.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jp,r[o])}function f_(s){switch(s){case 5126:return Yy;case 35664:return Zy;case 35665:return Ky;case 35666:return Jy;case 35674:return jy;case 35675:return Qy;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return o_;case 36295:return a_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}class p_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$y(t.type)}}class m_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f_(t.type)}}class g_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function Od(s,e){s.seq.push(e),s.map[e.id]=e}function v_(s,e,t){const n=s.name,i=n.length;for(lh.lastIndex=0;;){const r=lh.exec(n),o=lh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Od(t,c===void 0?new p_(a,s,e):new m_(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new g_(a),Od(t,u)),t=u}}}class ol{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);v_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function zd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const x_=37297;let y_=0;function __(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Bd=new st;function b_(s){pt._getMatrix(Bd,pt.workingColorSpace,s);const e=`mat3( ${Bd.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(s)){case $o:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+__(s.getShaderSource(e),o)}else return i}function M_(s,e){const t=b_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function w_(s,e){let t;switch(e){case au:t="Linear";break;case lu:t="Reinhard";break;case cu:t="Cineon";break;case hu:t="ACESFilmic";break;case uu:t="AgX";break;case ec:t="Neutral";break;case Ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Aa=new A;function S_(){pt.getLuminanceCoefficients(Aa);const s=Aa.x.toFixed(4),e=Aa.y.toFixed(4),t=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function A_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function E_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function mo(s){return s!==""}function Vd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(s){return s.replace(C_,P_)}const R_=new Map;function P_(s,e){let t=ot[e];if(t===void 0){const n=R_.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wh(t)}const I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wd(s){return s.replace(I_,L_)}function L_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function D_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ru?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ou?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function U_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vi:case us:e="ENVMAP_TYPE_CUBE";break;case zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function k_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xo:e="ENVMAP_BLENDING_MULTIPLY";break;case Tp:e="ENVMAP_BLENDING_MIX";break;case Ap:e="ENVMAP_BLENDING_ADD";break}return e}function F_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function O_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=D_(t),c=U_(t),h=N_(t),u=k_(t),d=F_(t),f=T_(t),p=A_(r),v=i.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(mo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(mo).join(`
`),m.length>0&&(m+=`
`)):(g=[Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),m=[Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?ot.tonemapping_pars_fragment:"",t.toneMapping!==Oi?w_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,M_("linearToOutputTexel",t.outputColorSpace),S_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),o=Wh(o),o=Vd(o,t),o=Gd(o,t),a=Wh(a),a=Vd(a,t),a=Gd(a,t),o=Wd(o),a=Wd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+g+o,x=y+m+a,I=zd(i,i.VERTEX_SHADER,_),C=zd(i,i.FRAGMENT_SHADER,x);i.attachShader(v,I),i.attachShader(v,C),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function S(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(v).trim(),U=i.getShaderInfoLog(I).trim(),D=i.getShaderInfoLog(C).trim();let F=!0,z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,I,C);else{const k=Hd(i,I,"vertex"),B=Hd(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+k+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||D==="")&&(z=!1);z&&(P.diagnostics={runnable:F,programLog:N,vertexShader:{log:U,prefix:g},fragmentShader:{log:D,prefix:m}})}i.deleteShader(I),i.deleteShader(C),E=new ol(i,v),w=E_(i,v)}let E;this.getUniforms=function(){return E===void 0&&S(this),E};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(v,x_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=C,this}let z_=0;class B_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new H_(e),t.set(e,n)),n}}class H_{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}}function V_(s,e,t,n,i,r,o){const a=new hc,l=new B_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,P,N,U){const D=N.fog,F=U.geometry,z=w.isMeshStandardMaterial?N.environment:null,k=(w.isMeshStandardMaterial?t:e).get(w.envMap||z),B=k&&k.mapping===zr?k.image.height:null,X=p[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const Y=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ne=Y!==void 0?Y.length:0;let ue=0;F.morphAttributes.position!==void 0&&(ue=1),F.morphAttributes.normal!==void 0&&(ue=2),F.morphAttributes.color!==void 0&&(ue=3);let we,Q,re,ge;if(X){const Pe=ei[X];we=Pe.vertexShader,Q=Pe.fragmentShader}else we=w.vertexShader,Q=w.fragmentShader,l.update(w),re=l.getVertexShaderID(w),ge=l.getFragmentShaderID(w);const ve=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),Se=U.isInstancedMesh===!0,J=U.isBatchedMesh===!0,ye=!!w.map,j=!!w.matcap,oe=!!k,R=!!w.aoMap,ee=!!w.lightMap,K=!!w.bumpMap,Me=!!w.normalMap,fe=!!w.displacementMap,ae=!!w.emissiveMap,_e=!!w.metalnessMap,L=!!w.roughnessMap,T=w.anisotropy>0,q=w.clearcoat>0,ie=w.dispersion>0,ce=w.iridescence>0,te=w.sheen>0,Te=w.transmission>0,xe=T&&!!w.anisotropyMap,Ae=q&&!!w.clearcoatMap,Je=q&&!!w.clearcoatNormalMap,me=q&&!!w.clearcoatRoughnessMap,Ne=ce&&!!w.iridescenceMap,Xe=ce&&!!w.iridescenceThicknessMap,Le=te&&!!w.sheenColorMap,ke=te&&!!w.sheenRoughnessMap,rt=!!w.specularMap,Qe=!!w.specularColorMap,bt=!!w.specularIntensityMap,Z=Te&&!!w.transmissionMap,Fe=Te&&!!w.thicknessMap,le=!!w.gradientMap,be=!!w.alphaMap,Be=w.alphaTest>0,Oe=!!w.alphaHash,G=!!w.extensions;let Ce=Oi;w.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ce=s.toneMapping);const Ge={shaderID:X,shaderType:w.type,shaderName:w.name,vertexShader:we,fragmentShader:Q,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:J,batchingColor:J&&U._colorsTexture!==null,instancing:Se,instancingColor:Se&&U.instanceColor!==null,instancingMorph:Se&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ks,alphaToCoverage:!!w.alphaToCoverage,map:ye,matcap:j,envMap:oe,envMapMode:oe&&k.mapping,envMapCubeUVHeight:B,aoMap:R,lightMap:ee,bumpMap:K,normalMap:Me,displacementMap:d&&fe,emissiveMap:ae,normalMapObjectSpace:Me&&w.normalMapType===Dp,normalMapTangentSpace:Me&&w.normalMapType===ps,metalnessMap:_e,roughnessMap:L,anisotropy:T,anisotropyMap:xe,clearcoat:q,clearcoatMap:Ae,clearcoatNormalMap:Je,clearcoatRoughnessMap:me,dispersion:ie,iridescence:ce,iridescenceMap:Ne,iridescenceThicknessMap:Xe,sheen:te,sheenColorMap:Le,sheenRoughnessMap:ke,specularMap:rt,specularColorMap:Qe,specularIntensityMap:bt,transmission:Te,transmissionMap:Z,thicknessMap:Fe,gradientMap:le,opaque:w.transparent===!1&&w.blending===zs&&w.alphaToCoverage===!1,alphaMap:be,alphaTest:Be,alphaHash:Oe,combine:w.combine,mapUv:ye&&v(w.map.channel),aoMapUv:R&&v(w.aoMap.channel),lightMapUv:ee&&v(w.lightMap.channel),bumpMapUv:K&&v(w.bumpMap.channel),normalMapUv:Me&&v(w.normalMap.channel),displacementMapUv:fe&&v(w.displacementMap.channel),emissiveMapUv:ae&&v(w.emissiveMap.channel),metalnessMapUv:_e&&v(w.metalnessMap.channel),roughnessMapUv:L&&v(w.roughnessMap.channel),anisotropyMapUv:xe&&v(w.anisotropyMap.channel),clearcoatMapUv:Ae&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Je&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:ke&&v(w.sheenRoughnessMap.channel),specularMapUv:rt&&v(w.specularMap.channel),specularColorMapUv:Qe&&v(w.specularColorMap.channel),specularIntensityMapUv:bt&&v(w.specularIntensityMap.channel),transmissionMapUv:Z&&v(w.transmissionMap.channel),thicknessMapUv:Fe&&v(w.thicknessMap.channel),alphaMapUv:be&&v(w.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Me||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(ye||be),fog:!!D,useFog:w.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:he,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ce,decodeVideoTexture:ye&&w.map.isVideoTexture===!0&&pt.getTransfer(w.map.colorSpace)===Tt,decodeVideoTextureEmissive:ae&&w.emissiveMap.isVideoTexture===!0&&pt.getTransfer(w.emissiveMap.colorSpace)===Tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===qt,flipSided:w.side===nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:G&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(G&&w.extensions.multiDraw===!0||J)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function m(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)b.push(P),b.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(b,w),_(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function _(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const b=p[w.type];let P;if(b){const N=ei[b];P=Dr.clone(N.uniforms)}else P=w.uniforms;return P}function I(w,b){let P;for(let N=0,U=h.length;N<U;N++){const D=h[N];if(D.cacheKey===b){P=D,++P.usedTimes;break}}return P===void 0&&(P=new O_(s,b,w,r),h.push(P)),P}function C(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function S(w){l.remove(w)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:I,releaseProgram:C,releaseShaderCache:S,programs:h,dispose:E}}function G_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function W_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $d(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,p,v,g){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},s[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),e++,m}function a(u,d,f,p,v,g){const m=o(u,d,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(u,d,f,p,v,g){const m=o(u,d,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||W_),n.length>1&&n.sort(d||qd),i.length>1&&i.sort(d||qd)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function X_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new $d,s.set(n,[o])):i>=r.length?(o=new $d,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function q_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ie};break;case"SpotLight":t={position:new A,direction:new A,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function $_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Y_=0;function Z_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function K_(s){const e=new q_,t=$_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const i=new A,r=new Ze,o=new Ze;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,y=0,_=0,x=0,I=0,C=0,S=0;c.sort(Z_);for(let w=0,b=c.length;w<b;w++){const P=c[w],N=P.color,U=P.intensity,D=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*U,u+=N.g*U,d+=N.b*U;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],U);S++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,B=t.get(P);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=z,f++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(N).multiplyScalar(U),z.distance=D,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[v]=z;const k=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,k.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[v]=k.matrix,P.castShadow){const B=t.get(P);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=F,x++}v++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(N).multiplyScalar(U),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=z,g++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const k=P.shadow,B=t.get(P);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,B.shadowCameraNear=k.camera.near,B.shadowCameraFar=k.camera.far,n.pointShadow[p]=B,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=P.shadow.matrix,_++}n.point[p]=z,p++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(U),z.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[m]=z,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const E=n.hash;(E.directionalLength!==f||E.pointLength!==p||E.spotLength!==v||E.rectAreaLength!==g||E.hemiLength!==m||E.numDirectionalShadows!==y||E.numPointShadows!==_||E.numSpotShadows!==x||E.numSpotMaps!==I||E.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=S,E.directionalLength=f,E.pointLength=p,E.spotLength=v,E.rectAreaLength=g,E.hemiLength=m,E.numDirectionalShadows=y,E.numPointShadows=_,E.numSpotShadows=x,E.numSpotMaps=I,E.numLightProbes=S,n.version=Y_++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0;const g=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const _=c[m];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function Yd(s){const e=new K_(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function J_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Yd(s),e.set(i,[a])):r>=o.length?(a=new Yd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class fc extends vn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iu extends vn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const j_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function e1(s,e,t){let n=new Zo;const i=new de,r=new de,o=new yt,a=new fc({depthPacking:wu}),l=new Iu,c={},h=t.maxTextureSize,u={[Hi]:nn,[nn]:Hi,[qt]:qt},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:j_,fragmentShader:Q_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new nt;p.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new je(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let m=this.type;this.render=function(C,S,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const w=s.getRenderTarget(),b=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(vi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=m!==di&&this.type===di,D=m===di&&this.type!==di;for(let F=0,z=C.length;F<z;F++){const k=C[F],B=k.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const X=B.getFrameExtents();if(i.multiply(X),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,B.mapSize.y=r.y)),B.map===null||U===!0||D===!0){const ne=this.type!==di?{minFilter:hn,magFilter:hn}:{};B.map!==null&&B.map.dispose(),B.map=new Sn(i.x,i.y,ne),B.map.texture.name=k.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const Y=B.getViewportCount();for(let ne=0;ne<Y;ne++){const ue=B.getViewport(ne);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),N.viewport(o),B.updateMatrices(k,ne),n=B.getFrustum(),x(S,E,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===di&&y(B,E),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,b,P)};function y(C,S){const E=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Sn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(S,null,E,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(S,null,E,f,v,null)}function _(C,S,E,w){let b=null;const P=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)b=P;else if(b=E.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=b.uuid,U=S.uuid;let D=c[N];D===void 0&&(D={},c[N]=D);let F=D[U];F===void 0&&(F=b.clone(),D[U]=F,S.addEventListener("dispose",I)),b=F}if(b.visible=S.visible,b.wireframe=S.wireframe,w===di?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:u[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=s.properties.get(b);N.light=E}return b}function x(C,S,E,w,b){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===di)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const U=e.update(C),D=C.material;if(Array.isArray(D)){const F=U.groups;for(let z=0,k=F.length;z<k;z++){const B=F[z],X=D[B.materialIndex];if(X&&X.visible){const Y=_(C,X,w,b);C.onBeforeShadow(s,C,S,E,U,Y,B),s.renderBufferDirect(E,null,U,Y,C,B),C.onAfterShadow(s,C,S,E,U,Y,B)}}}else if(D.visible){const F=_(C,D,w,b);C.onBeforeShadow(s,C,S,E,U,F,null),s.renderBufferDirect(E,null,U,F,C,null),C.onAfterShadow(s,C,S,E,U,F,null)}}const N=C.children;for(let U=0,D=N.length;U<D;U++)x(N[U],S,E,w,b)}function I(C){C.target.removeEventListener("dispose",I);for(const E in c){const w=c[E],b=C.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const t1={[ul]:dl,[fl]:gl,[pl]:vl,[Gs]:ml,[dl]:ul,[gl]:fl,[vl]:pl,[ml]:Gs};function n1(s,e){function t(){let Z=!1;const Fe=new yt;let le=null;const be=new yt(0,0,0,0);return{setMask:function(Be){le!==Be&&!Z&&(s.colorMask(Be,Be,Be,Be),le=Be)},setLocked:function(Be){Z=Be},setClear:function(Be,Oe,G,Ce,Ge){Ge===!0&&(Be*=Ce,Oe*=Ce,G*=Ce),Fe.set(Be,Oe,G,Ce),be.equals(Fe)===!1&&(s.clearColor(Be,Oe,G,Ce),be.copy(Fe))},reset:function(){Z=!1,le=null,be.set(-1,0,0,0)}}}function n(){let Z=!1,Fe=!1,le=null,be=null,Be=null;return{setReversed:function(Oe){if(Fe!==Oe){const G=e.get("EXT_clip_control");Fe?G.clipControlEXT(G.LOWER_LEFT_EXT,G.ZERO_TO_ONE_EXT):G.clipControlEXT(G.LOWER_LEFT_EXT,G.NEGATIVE_ONE_TO_ONE_EXT);const Ce=Be;Be=null,this.setClear(Ce)}Fe=Oe},getReversed:function(){return Fe},setTest:function(Oe){Oe?ve(s.DEPTH_TEST):he(s.DEPTH_TEST)},setMask:function(Oe){le!==Oe&&!Z&&(s.depthMask(Oe),le=Oe)},setFunc:function(Oe){if(Fe&&(Oe=t1[Oe]),be!==Oe){switch(Oe){case ul:s.depthFunc(s.NEVER);break;case dl:s.depthFunc(s.ALWAYS);break;case fl:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case pl:s.depthFunc(s.EQUAL);break;case ml:s.depthFunc(s.GEQUAL);break;case gl:s.depthFunc(s.GREATER);break;case vl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=Oe}},setLocked:function(Oe){Z=Oe},setClear:function(Oe){Be!==Oe&&(Fe&&(Oe=1-Oe),s.clearDepth(Oe),Be=Oe)},reset:function(){Z=!1,le=null,be=null,Be=null,Fe=!1}}}function i(){let Z=!1,Fe=null,le=null,be=null,Be=null,Oe=null,G=null,Ce=null,Ge=null;return{setTest:function(Pe){Z||(Pe?ve(s.STENCIL_TEST):he(s.STENCIL_TEST))},setMask:function(Pe){Fe!==Pe&&!Z&&(s.stencilMask(Pe),Fe=Pe)},setFunc:function(Pe,dt,Et){(le!==Pe||be!==dt||Be!==Et)&&(s.stencilFunc(Pe,dt,Et),le=Pe,be=dt,Be=Et)},setOp:function(Pe,dt,Et){(Oe!==Pe||G!==dt||Ce!==Et)&&(s.stencilOp(Pe,dt,Et),Oe=Pe,G=dt,Ce=Et)},setLocked:function(Pe){Z=Pe},setClear:function(Pe){Ge!==Pe&&(s.clearStencil(Pe),Ge=Pe)},reset:function(){Z=!1,Fe=null,le=null,be=null,Be=null,Oe=null,G=null,Ce=null,Ge=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,y=null,_=null,x=null,I=null,C=null,S=new Ie(0,0,0),E=0,w=!1,b=null,P=null,N=null,U=null,D=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),z=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),z=k>=2);let X=null,Y={};const ne=s.getParameter(s.SCISSOR_BOX),ue=s.getParameter(s.VIEWPORT),we=new yt().fromArray(ne),Q=new yt().fromArray(ue);function re(Z,Fe,le,be){const Be=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(Z,Oe),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let G=0;G<le;G++)Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?s.texImage3D(Fe,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(Fe+G,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return Oe}const ge={};ge[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(s.DEPTH_TEST),o.setFunc(Gs),K(!1),Me(Fh),ve(s.CULL_FACE),R(vi);function ve(Z){h[Z]!==!0&&(s.enable(Z),h[Z]=!0)}function he(Z){h[Z]!==!1&&(s.disable(Z),h[Z]=!1)}function Se(Z,Fe){return u[Z]!==Fe?(s.bindFramebuffer(Z,Fe),u[Z]=Fe,Z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Fe),Z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Fe),!0):!1}function J(Z,Fe){let le=f,be=!1;if(Z){le=d.get(Fe),le===void 0&&(le=[],d.set(Fe,le));const Be=Z.textures;if(le.length!==Be.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,G=Be.length;Oe<G;Oe++)le[Oe]=s.COLOR_ATTACHMENT0+Oe;le.length=Be.length,be=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,be=!0);be&&s.drawBuffers(le)}function ye(Z){return p!==Z?(s.useProgram(Z),p=Z,!0):!1}const j={[os]:s.FUNC_ADD,[lp]:s.FUNC_SUBTRACT,[cp]:s.FUNC_REVERSE_SUBTRACT};j[hp]=s.MIN,j[up]=s.MAX;const oe={[dp]:s.ZERO,[fp]:s.ONE,[pp]:s.SRC_COLOR,[cl]:s.SRC_ALPHA,[_p]:s.SRC_ALPHA_SATURATE,[xp]:s.DST_COLOR,[gp]:s.DST_ALPHA,[mp]:s.ONE_MINUS_SRC_COLOR,[hl]:s.ONE_MINUS_SRC_ALPHA,[yp]:s.ONE_MINUS_DST_COLOR,[vp]:s.ONE_MINUS_DST_ALPHA,[bp]:s.CONSTANT_COLOR,[Mp]:s.ONE_MINUS_CONSTANT_COLOR,[wp]:s.CONSTANT_ALPHA,[Sp]:s.ONE_MINUS_CONSTANT_ALPHA};function R(Z,Fe,le,be,Be,Oe,G,Ce,Ge,Pe){if(Z===vi){v===!0&&(he(s.BLEND),v=!1);return}if(v===!1&&(ve(s.BLEND),v=!0),Z!==ap){if(Z!==g||Pe!==w){if((m!==os||x!==os)&&(s.blendEquation(s.FUNC_ADD),m=os,x=os),Pe)switch(Z){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bn:s.blendFunc(s.ONE,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}y=null,_=null,I=null,C=null,S.set(0,0,0),E=0,g=Z,w=Pe}return}Be=Be||Fe,Oe=Oe||le,G=G||be,(Fe!==m||Be!==x)&&(s.blendEquationSeparate(j[Fe],j[Be]),m=Fe,x=Be),(le!==y||be!==_||Oe!==I||G!==C)&&(s.blendFuncSeparate(oe[le],oe[be],oe[Oe],oe[G]),y=le,_=be,I=Oe,C=G),(Ce.equals(S)===!1||Ge!==E)&&(s.blendColor(Ce.r,Ce.g,Ce.b,Ge),S.copy(Ce),E=Ge),g=Z,w=!1}function ee(Z,Fe){Z.side===qt?he(s.CULL_FACE):ve(s.CULL_FACE);let le=Z.side===nn;Fe&&(le=!le),K(le),Z.blending===zs&&Z.transparent===!1?R(vi):R(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);const be=Z.stencilWrite;a.setTest(be),be&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ae(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):he(s.SAMPLE_ALPHA_TO_COVERAGE)}function K(Z){b!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),b=Z)}function Me(Z){Z!==rp?(ve(s.CULL_FACE),Z!==P&&(Z===Fh?s.cullFace(s.BACK):Z===op?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):he(s.CULL_FACE),P=Z}function fe(Z){Z!==N&&(z&&s.lineWidth(Z),N=Z)}function ae(Z,Fe,le){Z?(ve(s.POLYGON_OFFSET_FILL),(U!==Fe||D!==le)&&(s.polygonOffset(Fe,le),U=Fe,D=le)):he(s.POLYGON_OFFSET_FILL)}function _e(Z){Z?ve(s.SCISSOR_TEST):he(s.SCISSOR_TEST)}function L(Z){Z===void 0&&(Z=s.TEXTURE0+F-1),X!==Z&&(s.activeTexture(Z),X=Z)}function T(Z,Fe,le){le===void 0&&(X===null?le=s.TEXTURE0+F-1:le=X);let be=Y[le];be===void 0&&(be={type:void 0,texture:void 0},Y[le]=be),(be.type!==Z||be.texture!==Fe)&&(X!==le&&(s.activeTexture(le),X=le),s.bindTexture(Z,Fe||ge[Z]),be.type=Z,be.texture=Fe)}function q(){const Z=Y[X];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ce(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function xe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ae(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ne(){try{s.texImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Xe(){try{s.texImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Le(Z){we.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),we.copy(Z))}function ke(Z){Q.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),Q.copy(Z))}function rt(Z,Fe){let le=c.get(Fe);le===void 0&&(le=new WeakMap,c.set(Fe,le));let be=le.get(Z);be===void 0&&(be=s.getUniformBlockIndex(Fe,Z.name),le.set(Z,be))}function Qe(Z,Fe){const be=c.get(Fe).get(Z);l.get(Fe)!==be&&(s.uniformBlockBinding(Fe,be,Z.__bindingPointIndex),l.set(Fe,be))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},X=null,Y={},u={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,y=null,_=null,x=null,I=null,C=null,S=new Ie(0,0,0),E=0,w=!1,b=null,P=null,N=null,U=null,D=null,we.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:he,bindFramebuffer:Se,drawBuffers:J,useProgram:ye,setBlending:R,setMaterial:ee,setFlipSided:K,setCullFace:Me,setLineWidth:fe,setPolygonOffset:ae,setScissorTest:_e,activeTexture:L,bindTexture:T,unbindTexture:q,compressedTexImage2D:ie,compressedTexImage3D:ce,texImage2D:Ne,texImage3D:Xe,updateUBOMapping:rt,uniformBlockBinding:Qe,texStorage2D:Je,texStorage3D:me,texSubImage2D:te,texSubImage3D:Te,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ae,scissor:Le,viewport:ke,reset:bt}}function i1(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function s1(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function r1(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Xh(s,e,t,n){const i=o1(n);switch(t){case gu:return s*e;case xu:return s*e;case yu:return s*e*2;case rc:return s*e/i.components*i.byteLength;case qo:return s*e/i.components*i.byteLength;case _u:return s*e*2/i.components*i.byteLength;case oc:return s*e*2/i.components*i.byteLength;case vu:return s*e*3/i.components*i.byteLength;case wn:return s*e*4/i.components*i.byteLength;case ac:return s*e*4/i.components*i.byteLength;case yo:case _o:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bo:case Mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yl:case bl:return Math.max(s,16)*Math.max(e,8)/4;case xl:case _l:return Math.max(s,8)*Math.max(e,8)/2;case Ml:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Al:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case El:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wo:case zl:case Bl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bu:case Hl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vl:case Gl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o1(s){switch(s){case bi:case fu:return{byteLength:1,components:1};case Pr:case pu:case xi:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case Gi:case nc:case Ln:return{byteLength:4,components:1};case mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const a1={contain:i1,cover:s1,fill:r1,getByteLength:Xh};function l1(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,T){return f?new OffscreenCanvas(L,T):No("canvas")}function v(L,T,q){let ie=1;const ce=_e(L);if((ce.width>q||ce.height>q)&&(ie=q/Math.max(ce.width,ce.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const te=Math.floor(ie*ce.width),Te=Math.floor(ie*ce.height);u===void 0&&(u=p(te,Te));const xe=T?p(te,Te):u;return xe.width=te,xe.height=Te,xe.getContext("2d").drawImage(L,0,0,te,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+te+"x"+Te+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),L;return L}function g(L){return L.generateMipmaps}function m(L){s.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(L,T,q,ie,ce=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=T;if(T===s.RED&&(q===s.FLOAT&&(te=s.R32F),q===s.HALF_FLOAT&&(te=s.R16F),q===s.UNSIGNED_BYTE&&(te=s.R8)),T===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(te=s.R8UI),q===s.UNSIGNED_SHORT&&(te=s.R16UI),q===s.UNSIGNED_INT&&(te=s.R32UI),q===s.BYTE&&(te=s.R8I),q===s.SHORT&&(te=s.R16I),q===s.INT&&(te=s.R32I)),T===s.RG&&(q===s.FLOAT&&(te=s.RG32F),q===s.HALF_FLOAT&&(te=s.RG16F),q===s.UNSIGNED_BYTE&&(te=s.RG8)),T===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(te=s.RG8UI),q===s.UNSIGNED_SHORT&&(te=s.RG16UI),q===s.UNSIGNED_INT&&(te=s.RG32UI),q===s.BYTE&&(te=s.RG8I),q===s.SHORT&&(te=s.RG16I),q===s.INT&&(te=s.RG32I)),T===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(te=s.RGB8UI),q===s.UNSIGNED_SHORT&&(te=s.RGB16UI),q===s.UNSIGNED_INT&&(te=s.RGB32UI),q===s.BYTE&&(te=s.RGB8I),q===s.SHORT&&(te=s.RGB16I),q===s.INT&&(te=s.RGB32I)),T===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),q===s.UNSIGNED_INT&&(te=s.RGBA32UI),q===s.BYTE&&(te=s.RGBA8I),q===s.SHORT&&(te=s.RGBA16I),q===s.INT&&(te=s.RGBA32I)),T===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),T===s.RGBA){const Te=ce?$o:pt.getTransfer(ie);q===s.FLOAT&&(te=s.RGBA32F),q===s.HALF_FLOAT&&(te=s.RGBA16F),q===s.UNSIGNED_BYTE&&(te=Te===Tt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(L,T){let q;return L?T===null||T===Gi||T===Ws?q=s.DEPTH24_STENCIL8:T===Ln?q=s.DEPTH32F_STENCIL8:T===Pr&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Gi||T===Ws?q=s.DEPTH_COMPONENT24:T===Ln?q=s.DEPTH_COMPONENT32F:T===Pr&&(q=s.DEPTH_COMPONENT16),q}function I(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==hn&&L.minFilter!==Yt?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function C(L){const T=L.target;T.removeEventListener("dispose",C),E(T),T.isVideoTexture&&h.delete(T)}function S(L){const T=L.target;T.removeEventListener("dispose",S),b(T)}function E(L){const T=n.get(L);if(T.__webglInit===void 0)return;const q=L.source,ie=d.get(q);if(ie){const ce=ie[T.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&w(L),Object.keys(ie).length===0&&d.delete(q)}n.remove(L)}function w(L){const T=n.get(L);s.deleteTexture(T.__webglTexture);const q=L.source,ie=d.get(q);delete ie[T.__cacheKey],o.memory.textures--}function b(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let ce=0;ce<T.__webglFramebuffer[ie].length;ce++)s.deleteFramebuffer(T.__webglFramebuffer[ie][ce]);else s.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)s.deleteFramebuffer(T.__webglFramebuffer[ie]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=L.textures;for(let ie=0,ce=q.length;ie<ce;ie++){const te=n.get(q[ie]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(q[ie])}n.remove(L)}let P=0;function N(){P=0}function U(){const L=P;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function D(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function F(L,T){const q=n.get(L);if(L.isVideoTexture&&fe(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){const ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(q,L,T);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+T)}function z(L,T){const q=n.get(L);if(L.version>0&&q.__version!==L.version){Q(q,L,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+T)}function k(L,T){const q=n.get(L);if(L.version>0&&q.__version!==L.version){Q(q,L,T);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+T)}function B(L,T){const q=n.get(L);if(L.version>0&&q.__version!==L.version){re(q,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+T)}const X={[_i]:s.REPEAT,[Xn]:s.CLAMP_TO_EDGE,[Po]:s.MIRRORED_REPEAT},Y={[hn]:s.NEAREST,[du]:s.NEAREST_MIPMAP_NEAREST,[Sr]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[xo]:s.LINEAR_MIPMAP_NEAREST,[pi]:s.LINEAR_MIPMAP_LINEAR},ne={[Up]:s.NEVER,[Bp]:s.ALWAYS,[Np]:s.LESS,[Su]:s.LEQUAL,[kp]:s.EQUAL,[zp]:s.GEQUAL,[Fp]:s.GREATER,[Op]:s.NOTEQUAL};function ue(L,T){if(T.type===Ln&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Yt||T.magFilter===xo||T.magFilter===Sr||T.magFilter===pi||T.minFilter===Yt||T.minFilter===xo||T.minFilter===Sr||T.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,X[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,X[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,X[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Y[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Y[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ne[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hn||T.minFilter!==Sr&&T.minFilter!==pi||T.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function we(L,T){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",C));const ie=T.source;let ce=d.get(ie);ce===void 0&&(ce={},d.set(ie,ce));const te=D(T);if(te!==L.__cacheKey){ce[te]===void 0&&(ce[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ce[te].usedTimes++;const Te=ce[L.__cacheKey];Te!==void 0&&(ce[L.__cacheKey].usedTimes--,Te.usedTimes===0&&w(T)),L.__cacheKey=te,L.__webglTexture=ce[te].texture}return q}function Q(L,T,q){let ie=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=s.TEXTURE_3D);const ce=we(L,T),te=T.source;t.bindTexture(ie,L.__webglTexture,s.TEXTURE0+q);const Te=n.get(te);if(te.version!==Te.__version||ce===!0){t.activeTexture(s.TEXTURE0+q);const xe=pt.getPrimaries(pt.workingColorSpace),Ae=T.colorSpace===Ui?null:pt.getPrimaries(T.colorSpace),Je=T.colorSpace===Ui||xe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let me=v(T.image,!1,i.maxTextureSize);me=ae(T,me);const Ne=r.convert(T.format,T.colorSpace),Xe=r.convert(T.type);let Le=_(T.internalFormat,Ne,Xe,T.colorSpace,T.isVideoTexture);ue(ie,T);let ke;const rt=T.mipmaps,Qe=T.isVideoTexture!==!0,bt=Te.__version===void 0||ce===!0,Z=te.dataReady,Fe=I(T,me);if(T.isDepthTexture)Le=x(T.format===Xs,T.type),bt&&(Qe?t.texStorage2D(s.TEXTURE_2D,1,Le,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,Le,me.width,me.height,0,Ne,Xe,null));else if(T.isDataTexture)if(rt.length>0){Qe&&bt&&t.texStorage2D(s.TEXTURE_2D,Fe,Le,rt[0].width,rt[0].height);for(let le=0,be=rt.length;le<be;le++)ke=rt[le],Qe?Z&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,ke.width,ke.height,Ne,Xe,ke.data):t.texImage2D(s.TEXTURE_2D,le,Le,ke.width,ke.height,0,Ne,Xe,ke.data);T.generateMipmaps=!1}else Qe?(bt&&t.texStorage2D(s.TEXTURE_2D,Fe,Le,me.width,me.height),Z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,Ne,Xe,me.data)):t.texImage2D(s.TEXTURE_2D,0,Le,me.width,me.height,0,Ne,Xe,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Qe&&bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Le,rt[0].width,rt[0].height,me.depth);for(let le=0,be=rt.length;le<be;le++)if(ke=rt[le],T.format!==wn)if(Ne!==null)if(Qe){if(Z)if(T.layerUpdates.size>0){const Be=Xh(ke.width,ke.height,T.format,T.type);for(const Oe of T.layerUpdates){const G=ke.data.subarray(Oe*Be/ke.data.BYTES_PER_ELEMENT,(Oe+1)*Be/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,Oe,ke.width,ke.height,1,Ne,G)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,ke.width,ke.height,me.depth,Ne,ke.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,Le,ke.width,ke.height,me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?Z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,ke.width,ke.height,me.depth,Ne,Xe,ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,Le,ke.width,ke.height,me.depth,0,Ne,Xe,ke.data)}else{Qe&&bt&&t.texStorage2D(s.TEXTURE_2D,Fe,Le,rt[0].width,rt[0].height);for(let le=0,be=rt.length;le<be;le++)ke=rt[le],T.format!==wn?Ne!==null?Qe?Z&&t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,ke.width,ke.height,Ne,ke.data):t.compressedTexImage2D(s.TEXTURE_2D,le,Le,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?Z&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,ke.width,ke.height,Ne,Xe,ke.data):t.texImage2D(s.TEXTURE_2D,le,Le,ke.width,ke.height,0,Ne,Xe,ke.data)}else if(T.isDataArrayTexture)if(Qe){if(bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Le,me.width,me.height,me.depth),Z)if(T.layerUpdates.size>0){const le=Xh(me.width,me.height,T.format,T.type);for(const be of T.layerUpdates){const Be=me.data.subarray(be*le/me.data.BYTES_PER_ELEMENT,(be+1)*le/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,be,me.width,me.height,1,Ne,Xe,Be)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ne,Xe,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,me.width,me.height,me.depth,0,Ne,Xe,me.data);else if(T.isData3DTexture)Qe?(bt&&t.texStorage3D(s.TEXTURE_3D,Fe,Le,me.width,me.height,me.depth),Z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ne,Xe,me.data)):t.texImage3D(s.TEXTURE_3D,0,Le,me.width,me.height,me.depth,0,Ne,Xe,me.data);else if(T.isFramebufferTexture){if(bt)if(Qe)t.texStorage2D(s.TEXTURE_2D,Fe,Le,me.width,me.height);else{let le=me.width,be=me.height;for(let Be=0;Be<Fe;Be++)t.texImage2D(s.TEXTURE_2D,Be,Le,le,be,0,Ne,Xe,null),le>>=1,be>>=1}}else if(rt.length>0){if(Qe&&bt){const le=_e(rt[0]);t.texStorage2D(s.TEXTURE_2D,Fe,Le,le.width,le.height)}for(let le=0,be=rt.length;le<be;le++)ke=rt[le],Qe?Z&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,Ne,Xe,ke):t.texImage2D(s.TEXTURE_2D,le,Le,Ne,Xe,ke);T.generateMipmaps=!1}else if(Qe){if(bt){const le=_e(me);t.texStorage2D(s.TEXTURE_2D,Fe,Le,le.width,le.height)}Z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,Xe,me)}else t.texImage2D(s.TEXTURE_2D,0,Le,Ne,Xe,me);g(T)&&m(ie),Te.__version=te.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function re(L,T,q){if(T.image.length!==6)return;const ie=we(L,T),ce=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);const te=n.get(ce);if(ce.version!==te.__version||ie===!0){t.activeTexture(s.TEXTURE0+q);const Te=pt.getPrimaries(pt.workingColorSpace),xe=T.colorSpace===Ui?null:pt.getPrimaries(T.colorSpace),Ae=T.colorSpace===Ui||Te===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Je=T.isCompressedTexture||T.image[0].isCompressedTexture,me=T.image[0]&&T.image[0].isDataTexture,Ne=[];for(let be=0;be<6;be++)!Je&&!me?Ne[be]=v(T.image[be],!0,i.maxCubemapSize):Ne[be]=me?T.image[be].image:T.image[be],Ne[be]=ae(T,Ne[be]);const Xe=Ne[0],Le=r.convert(T.format,T.colorSpace),ke=r.convert(T.type),rt=_(T.internalFormat,Le,ke,T.colorSpace),Qe=T.isVideoTexture!==!0,bt=te.__version===void 0||ie===!0,Z=ce.dataReady;let Fe=I(T,Xe);ue(s.TEXTURE_CUBE_MAP,T);let le;if(Je){Qe&&bt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,rt,Xe.width,Xe.height);for(let be=0;be<6;be++){le=Ne[be].mipmaps;for(let Be=0;Be<le.length;Be++){const Oe=le[Be];T.format!==wn?Le!==null?Qe?Z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be,0,0,Oe.width,Oe.height,Le,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be,rt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be,0,0,Oe.width,Oe.height,Le,ke,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be,rt,Oe.width,Oe.height,0,Le,ke,Oe.data)}}}else{if(le=T.mipmaps,Qe&&bt){le.length>0&&Fe++;const be=_e(Ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,rt,be.width,be.height)}for(let be=0;be<6;be++)if(me){Qe?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ne[be].width,Ne[be].height,Le,ke,Ne[be].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,rt,Ne[be].width,Ne[be].height,0,Le,ke,Ne[be].data);for(let Be=0;Be<le.length;Be++){const G=le[Be].image[be].image;Qe?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be+1,0,0,G.width,G.height,Le,ke,G.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be+1,rt,G.width,G.height,0,Le,ke,G.data)}}else{Qe?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Le,ke,Ne[be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,rt,Le,ke,Ne[be]);for(let Be=0;Be<le.length;Be++){const Oe=le[Be];Qe?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be+1,0,0,Le,ke,Oe.image[be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Be+1,rt,Le,ke,Oe.image[be])}}}g(T)&&m(s.TEXTURE_CUBE_MAP),te.__version=ce.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ge(L,T,q,ie,ce,te){const Te=r.convert(q.format,q.colorSpace),xe=r.convert(q.type),Ae=_(q.internalFormat,Te,xe,q.colorSpace),Je=n.get(T),me=n.get(q);if(me.__renderTarget=T,!Je.__hasExternalTextures){const Ne=Math.max(1,T.width>>te),Xe=Math.max(1,T.height>>te);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,te,Ae,Ne,Xe,T.depth,0,Te,xe,null):t.texImage2D(ce,te,Ae,Ne,Xe,0,Te,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Me(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,ce,me.__webglTexture,0,K(T)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,ce,me.__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(L,T,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const ie=T.depthTexture,ce=ie&&ie.isDepthTexture?ie.type:null,te=x(T.stencilBuffer,ce),Te=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=K(T);Me(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,te,T.width,T.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,te,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,te,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,L)}else{const ie=T.textures;for(let ce=0;ce<ie.length;ce++){const te=ie[ce],Te=r.convert(te.format,te.colorSpace),xe=r.convert(te.type),Ae=_(te.internalFormat,Te,xe,te.colorSpace),Je=K(T);q&&Me(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Ae,T.width,T.height):Me(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,Ae,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(T.depthTexture);ie.__renderTarget=T,(!ie.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F(T.depthTexture,0);const ce=ie.__webglTexture,te=K(T);if(T.depthTexture.format===Bs)Me(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(T.depthTexture.format===Xs)Me(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Se(L){const T=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ie=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ie){const ce=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ie.removeEventListener("dispose",ce)};ie.addEventListener("dispose",ce),T.__depthDisposeCallback=ce}T.__boundDepthTexture=ie}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");he(T.__webglFramebuffer,L)}else if(q){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]===void 0)T.__webglDepthbuffer[ie]=s.createRenderbuffer(),ve(T.__webglDepthbuffer[ie],L,!1);else{const ce=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=T.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,te)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ve(T.__webglDepthbuffer,L,!1);else{const ie=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ce)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function J(L,T,q){const ie=n.get(L);T!==void 0&&ge(ie.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Se(L)}function ye(L){const T=L.texture,q=n.get(L),ie=n.get(T);L.addEventListener("dispose",S);const ce=L.textures,te=L.isWebGLCubeRenderTarget===!0,Te=ce.length>1;if(Te||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=T.version,o.memory.textures++),te){q.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)q.__webglFramebuffer[xe][Ae]=s.createFramebuffer()}else q.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let xe=0;xe<T.mipmaps.length;xe++)q.__webglFramebuffer[xe]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Te)for(let xe=0,Ae=ce.length;xe<Ae;xe++){const Je=n.get(ce[xe]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&Me(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let xe=0;xe<ce.length;xe++){const Ae=ce[xe];q.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[xe]);const Je=r.convert(Ae.format,Ae.colorSpace),me=r.convert(Ae.type),Ne=_(Ae.internalFormat,Je,me,Ae.colorSpace,L.isXRRenderTarget===!0),Xe=K(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Ne,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,q.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),ue(s.TEXTURE_CUBE_MAP,T);for(let xe=0;xe<6;xe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)ge(q.__webglFramebuffer[xe][Ae],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else ge(q.__webglFramebuffer[xe],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(T)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let xe=0,Ae=ce.length;xe<Ae;xe++){const Je=ce[xe],me=n.get(Je);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),ue(s.TEXTURE_2D,Je),ge(q.__webglFramebuffer,L,Je,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),g(Je)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,ie.__webglTexture),ue(xe,T),T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)ge(q.__webglFramebuffer[Ae],L,T,s.COLOR_ATTACHMENT0,xe,Ae);else ge(q.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,xe,0);g(T)&&m(xe),t.unbindTexture()}L.depthBuffer&&Se(L)}function j(L){const T=L.textures;for(let q=0,ie=T.length;q<ie;q++){const ce=T[q];if(g(ce)){const te=y(L),Te=n.get(ce).__webglTexture;t.bindTexture(te,Te),m(te),t.unbindTexture()}}}const oe=[],R=[];function ee(L){if(L.samples>0){if(Me(L)===!1){const T=L.textures,q=L.width,ie=L.height;let ce=s.COLOR_BUFFER_BIT;const te=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(L),xe=T.length>1;if(xe)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Ae]);const Je=n.get(T[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,q,ie,0,0,q,ie,ce,s.NEAREST),l===!0&&(oe.length=0,R.length=0,oe.push(s.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.resolveDepthBuffer===!1&&(oe.push(te),R.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Ae]);const Je=n.get(T[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function K(L){return Math.min(i.maxSamples,L.samples)}function Me(L){const T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function fe(L){const T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function ae(L,T){const q=L.colorSpace,ie=L.format,ce=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Ks&&q!==Ui&&(pt.getTransfer(q)===Tt?(ie!==wn||ce!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function _e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=B,this.rebindTextures=J,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Me}function em(s,e){function t(n,i=Ui){let r;const o=pt.getTransfer(i);if(n===bi)return s.UNSIGNED_BYTE;if(n===ic)return s.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===mu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fu)return s.BYTE;if(n===pu)return s.SHORT;if(n===Pr)return s.UNSIGNED_SHORT;if(n===nc)return s.INT;if(n===Gi)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===xi)return s.HALF_FLOAT;if(n===gu)return s.ALPHA;if(n===vu)return s.RGB;if(n===wn)return s.RGBA;if(n===xu)return s.LUMINANCE;if(n===yu)return s.LUMINANCE_ALPHA;if(n===Bs)return s.DEPTH_COMPONENT;if(n===Xs)return s.DEPTH_STENCIL;if(n===rc)return s.RED;if(n===qo)return s.RED_INTEGER;if(n===_u)return s.RG;if(n===oc)return s.RG_INTEGER;if(n===ac)return s.RGBA_INTEGER;if(n===yo||n===_o||n===bo||n===Mo)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===yl||n===_l||n===bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===wl||n===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===wl)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tl||n===Al||n===El||n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===kl||n===Fl||n===Ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===El)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===zl||n===Bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wo)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bu||n===Hl||n===Vl||n===Gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class tm extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class it extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c1={type:"move"};class ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const h1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class d1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ot,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new At({vertexShader:h1,fragmentShader:u1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f1 extends wi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const v=new d1,g=t.getContextAttributes();let m=null,y=null;const _=[],x=[],I=new de;let C=null;const S=new en;S.viewport=new yt;const E=new en;E.viewport=new yt;const w=[S,E],b=new tm;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=_[Q];return re===void 0&&(re=new ch,_[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=_[Q];return re===void 0&&(re=new ch,_[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=_[Q];return re===void 0&&(re=new ch,_[Q]=re),re.getHandSpace()};function U(Q){const re=x.indexOf(Q.inputSource);if(re===-1)return;const ge=_[re];ge!==void 0&&(ge.update(Q.inputSource,Q.frame,c||o),ge.dispatchEvent({type:Q.type,data:Q.inputSource}))}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",F);for(let Q=0;Q<_.length;Q++){const re=x[Q];re!==null&&(x[Q]=null,_[Q].disconnect(re))}P=null,N=null,v.reset(),e.setRenderTarget(m),f=null,d=null,u=null,i=null,y=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){const re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Sn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,ge=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=g.stencil?Xs:Bs,ge=g.stencil?Ws:Gi);const he={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(he),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Sn(d.textureWidth,d.textureHeight,{format:wn,type:bi,depthTexture:new Pu(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F(Q){for(let re=0;re<Q.removed.length;re++){const ge=Q.removed[re],ve=x.indexOf(ge);ve>=0&&(x[ve]=null,_[ve].disconnect(ge))}for(let re=0;re<Q.added.length;re++){const ge=Q.added[re];let ve=x.indexOf(ge);if(ve===-1){for(let Se=0;Se<_.length;Se++)if(Se>=x.length){x.push(ge),ve=Se;break}else if(x[Se]===null){x[Se]=ge,ve=Se;break}if(ve===-1)break}const he=_[ve];he&&he.connect(ge)}}const z=new A,k=new A;function B(Q,re,ge){z.setFromMatrixPosition(re.matrixWorld),k.setFromMatrixPosition(ge.matrixWorld);const ve=z.distanceTo(k),he=re.projectionMatrix.elements,Se=ge.projectionMatrix.elements,J=he[14]/(he[10]-1),ye=he[14]/(he[10]+1),j=(he[9]+1)/he[5],oe=(he[9]-1)/he[5],R=(he[8]-1)/he[0],ee=(Se[8]+1)/Se[0],K=J*R,Me=J*ee,fe=ve/(-R+ee),ae=fe*-R;if(re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ae),Q.translateZ(fe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),he[10]===-1)Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const _e=J+fe,L=ye+fe,T=K-ae,q=Me+(ve-ae),ie=j*ye/L*_e,ce=oe*ye/L*_e;Q.projectionMatrix.makePerspective(T,q,ie,ce,_e,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function X(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let re=Q.near,ge=Q.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),b.near=E.near=S.near=re,b.far=E.far=S.far=ge,(P!==b.near||N!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,N=b.far),S.layers.mask=Q.layers.mask|2,E.layers.mask=Q.layers.mask|4,b.layers.mask=S.layers.mask|E.layers.mask;const ve=Q.parent,he=b.cameras;X(b,ve);for(let Se=0;Se<he.length;Se++)X(he[Se],ve);he.length===2?B(b,S,E):b.projectionMatrix.copy(S.projectionMatrix),Y(Q,b,ve)};function Y(Q,re,ge){ge===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(ge.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ir*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let ne=null;function ue(Q,re){if(h=re.getViewerPose(c||o),p=re,h!==null){const ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ve=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,ve=!0);for(let Se=0;Se<ge.length;Se++){const J=ge[Se];let ye=null;if(f!==null)ye=f.getViewport(J);else{const oe=u.getViewSubImage(d,J);ye=oe.viewport,Se===0&&(e.setRenderTargetTextures(y,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(y))}let j=w[Se];j===void 0&&(j=new en,j.layers.enable(Se),j.viewport=new yt,w[Se]=j),j.matrix.fromArray(J.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(J.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ye.x,ye.y,ye.width,ye.height),Se===0&&(b.matrix.copy(j.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ve===!0&&b.cameras.push(j)}const he=i.enabledFeatures;if(he&&he.includes("depth-sensing")){const Se=u.getDepthInformation(ge[0]);Se&&Se.isValid&&Se.texture&&v.init(e,Se,i.renderState)}}for(let ge=0;ge<_.length;ge++){const ve=x[ge],he=_[ge];ve!==null&&he!==void 0&&he.update(ve,re,c||o)}ne&&ne(Q,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),p=null}const we=new Zp;we.setAnimationLoop(ue),this.setAnimationLoop=function(Q){ne=Q},this.dispose=function(){}}}const ws=new St,p1=new Ze;function m1(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,qp(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,_,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),_=y.envMap,x=y.envMapRotation;_&&(g.envMap.value=_,ws.copy(x),ws.x*=-1,ws.y*=-1,ws.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),g.envMapRotation.value.setFromMatrix4(p1.makeRotationFromEuler(ws)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function g1(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=i[y.id];x===void 0&&(p(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",g));const I=_.program;n.updateUBOMapping(y,I);const C=e.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function h(y){const _=u();y.__bindingPointIndex=_;const x=s.createBuffer(),I=y.__size,C=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,I,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],x=y.uniforms,I=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let C=0,S=x.length;C<S;C++){const E=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,b=E.length;w<b;w++){const P=E[w];if(f(P,C,w,I)===!0){const N=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let D=0;for(let F=0;F<U.length;F++){const z=U[F],k=v(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,N+D,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,D),D+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,_,x,I){const C=y.value,S=_+"_"+x;if(I[S]===void 0)return typeof C=="number"||typeof C=="boolean"?I[S]=C:I[S]=C.clone(),!0;{const E=I[S];if(typeof C=="number"||typeof C=="boolean"){if(E!==C)return I[S]=C,!0}else if(E.equals(C)===!1)return E.copy(C),!0}return!1}function p(y){const _=y.uniforms;let x=0;const I=16;for(let S=0,E=_.length;S<E;S++){const w=Array.isArray(_[S])?_[S]:[_[S]];for(let b=0,P=w.length;b<P;b++){const N=w[b],U=Array.isArray(N.value)?N.value:[N.value];for(let D=0,F=U.length;D<F;D++){const z=U[D],k=v(z),B=x%I,X=B%k.boundary,Y=B+X;x+=X,Y!==0&&I-Y<k.storage&&(x+=I-Y),N.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=k.storage}}}const C=x%I;return C>0&&(x+=I-C),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){const _=y.target;_.removeEventListener("dispose",g);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class nm{constructor(e={}){const{canvas:t=Vp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=Oi,this.toneMappingExposure=1;const x=this;let I=!1,C=0,S=0,E=null,w=-1,b=null;const P=new yt,N=new yt;let U=null;const D=new Ie(0);let F=0,z=t.width,k=t.height,B=1,X=null,Y=null;const ne=new yt(0,0,z,k),ue=new yt(0,0,z,k);let we=!1;const Q=new Zo;let re=!1,ge=!1;const ve=new Ze,he=new Ze,Se=new A,J=new yt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function oe(){return E===null?B:1}let R=n;function ee(M,H){return t.getContext(M,H)}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ql}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),R===null){const H="webgl2";if(R=ee(H,M),R===null)throw ee(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let K,Me,fe,ae,_e,L,T,q,ie,ce,te,Te,xe,Ae,Je,me,Ne,Xe,Le,ke,rt,Qe,bt,Z;function Fe(){K=new My(R),K.init(),Qe=new em(R,K),Me=new gy(R,K,e,Qe),fe=new n1(R,K),Me.reverseDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),ae=new Ty(R),_e=new G_,L=new l1(R,K,fe,_e,Me,Qe,ae),T=new xy(x),q=new by(x),ie=new Lg(R),bt=new py(R,ie),ce=new wy(R,ie,ae,bt),te=new Ey(R,ce,ie,ae),Le=new Ay(R,Me,L),me=new vy(_e),Te=new V_(x,T,q,K,Me,bt,me),xe=new m1(x,_e),Ae=new X_,Je=new J_(K),Xe=new fy(x,T,q,fe,te,f,l),Ne=new e1(x,te,Me),Z=new g1(R,ae,Me,fe),ke=new my(R,K,ae),rt=new Sy(R,K,ae),ae.programs=Te.programs,x.capabilities=Me,x.extensions=K,x.properties=_e,x.renderLists=Ae,x.shadowMap=Ne,x.state=fe,x.info=ae}Fe();const le=new f1(x,R);this.xr=le,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=K.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=K.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(M){M!==void 0&&(B=M,this.setSize(z,k,!1))},this.getSize=function(M){return M.set(z,k)},this.setSize=function(M,H,W=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=M,k=H,t.width=Math.floor(M*B),t.height=Math.floor(H*B),W===!0&&(t.style.width=M+"px",t.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(z*B,k*B).floor()},this.setDrawingBufferSize=function(M,H,W){z=M,k=H,B=W,t.width=Math.floor(M*W),t.height=Math.floor(H*W),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(ne)},this.setViewport=function(M,H,W,$){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,H,W,$),fe.viewport(P.copy(ne).multiplyScalar(B).round())},this.getScissor=function(M){return M.copy(ue)},this.setScissor=function(M,H,W,$){M.isVector4?ue.set(M.x,M.y,M.z,M.w):ue.set(M,H,W,$),fe.scissor(N.copy(ue).multiplyScalar(B).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(M){fe.setScissorTest(we=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){Y=M},this.getClearColor=function(M){return M.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(M=!0,H=!0,W=!0){let $=0;if(M){let V=!1;if(E!==null){const pe=E.texture.format;V=pe===ac||pe===oc||pe===qo}if(V){const pe=E.texture.type,Ee=pe===bi||pe===Gi||pe===Pr||pe===Ws||pe===ic||pe===sc,De=Xe.getClearColor(),Ve=Xe.getClearAlpha(),qe=De.r,tt=De.g,$e=De.b;Ee?(p[0]=qe,p[1]=tt,p[2]=$e,p[3]=Ve,R.clearBufferuiv(R.COLOR,0,p)):(v[0]=qe,v[1]=tt,v[2]=$e,v[3]=Ve,R.clearBufferiv(R.COLOR,0,v))}else $|=R.COLOR_BUFFER_BIT}H&&($|=R.DEPTH_BUFFER_BIT),W&&($|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Ae.dispose(),Je.dispose(),_e.dispose(),T.dispose(),q.dispose(),te.dispose(),bt.dispose(),Z.dispose(),Te.dispose(),le.dispose(),le.removeEventListener("sessionstart",sn),le.removeEventListener("sessionend",ai),rn.stop()};function be(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const M=ae.autoReset,H=Ne.enabled,W=Ne.autoUpdate,$=Ne.needsUpdate,V=Ne.type;Fe(),ae.autoReset=M,Ne.enabled=H,Ne.autoUpdate=W,Ne.needsUpdate=$,Ne.type=V}function Oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function G(M){const H=M.target;H.removeEventListener("dispose",G),Ce(H)}function Ce(M){Ge(M),_e.remove(M)}function Ge(M){const H=_e.get(M).programs;H!==void 0&&(H.forEach(function(W){Te.releaseProgram(W)}),M.isShaderMaterial&&Te.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,W,$,V,pe){H===null&&(H=ye);const Ee=V.isMesh&&V.matrixWorld.determinant()<0,De=Nc(M,H,W,$,V);fe.setMaterial($,Ee);let Ve=W.index,qe=1;if($.wireframe===!0){if(Ve=ce.getWireframeAttribute(W),Ve===void 0)return;qe=2}const tt=W.drawRange,$e=W.attributes.position;let ct=tt.start*qe,ft=(tt.start+tt.count)*qe;pe!==null&&(ct=Math.max(ct,pe.start*qe),ft=Math.min(ft,(pe.start+pe.count)*qe)),Ve!==null?(ct=Math.max(ct,0),ft=Math.min(ft,Ve.count)):$e!=null&&(ct=Math.max(ct,0),ft=Math.min(ft,$e.count));const Mt=ft-ct;if(Mt<0||Mt===1/0)return;bt.setup(V,$,De,W,Ve);let on,mt=ke;if(Ve!==null&&(on=ie.get(Ve),mt=rt,mt.setIndex(on)),V.isMesh)$.wireframe===!0?(fe.setLineWidth($.wireframeLinewidth*oe()),mt.setMode(R.LINES)):mt.setMode(R.TRIANGLES);else if(V.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),fe.setLineWidth(Ke*oe()),V.isLineSegments?mt.setMode(R.LINES):V.isLineLoop?mt.setMode(R.LINE_LOOP):mt.setMode(R.LINE_STRIP)}else V.isPoints?mt.setMode(R.POINTS):V.isSprite&&mt.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)mt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ke=V._multiDrawStarts,Nn=V._multiDrawCounts,vt=V._multiDrawCount,En=Ve?ie.get(Ve).bytesPerElement:1,Yn=_e.get($).currentProgram.getUniforms();for(let an=0;an<vt;an++)Yn.setValue(R,"_gl_DrawID",an),mt.render(Ke[an]/En,Nn[an])}else if(V.isInstancedMesh)mt.renderInstances(ct,Mt,V.count);else if(W.isInstancedBufferGeometry){const Ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Nn=Math.min(W.instanceCount,Ke);mt.renderInstances(ct,Mt,Nn)}else mt.render(ct,Mt)};function Pe(M,H,W){M.transparent===!0&&M.side===qt&&M.forceSinglePass===!1?(M.side=nn,M.needsUpdate=!0,tr(M,H,W),M.side=Hi,M.needsUpdate=!0,tr(M,H,W),M.side=qt):tr(M,H,W)}this.compile=function(M,H,W=null){W===null&&(W=M),m=Je.get(W),m.init(H),_.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),M!==W&&M.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const $=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pe=V.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){const De=pe[Ee];Pe(De,W,V),$.add(De)}else Pe(pe,W,V),$.add(pe)}),_.pop(),m=null,$},this.compileAsync=function(M,H,W=null){const $=this.compile(M,H,W);return new Promise(V=>{function pe(){if($.forEach(function(Ee){_e.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){V(M);return}setTimeout(pe,10)}K.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let dt=null;function Et(M){dt&&dt(M)}function sn(){rn.stop()}function ai(){rn.start()}const rn=new Zp;rn.setAnimationLoop(Et),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(M){dt=M,le.setAnimationLoop(M),M===null?rn.stop():rn.start()},le.addEventListener("sessionstart",sn),le.addEventListener("sessionend",ai),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(H),H=le.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,H,E),m=Je.get(M,_.length),m.init(H),_.push(m),he.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(he),ge=this.localClippingEnabled,re=me.init(this.clippingPlanes,ge),g=Ae.get(M,y.length),g.init(),y.push(g),le.enabled===!0&&le.isPresenting===!0){const pe=x.xr.getDepthSensingMesh();pe!==null&&Yi(pe,H,-1/0,x.sortObjects)}Yi(M,H,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(X,Y),j=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,j&&Xe.addToRenderList(g,M),this.info.render.frame++,re===!0&&me.beginShadows();const W=m.state.shadowsArray;Ne.render(W,M,H),re===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,V=g.transmissive;if(m.setupLights(),H.isArrayCamera){const pe=H.cameras;if(V.length>0)for(let Ee=0,De=pe.length;Ee<De;Ee++){const Ve=pe[Ee];Ti($,V,M,Ve)}j&&Xe.render(M);for(let Ee=0,De=pe.length;Ee<De;Ee++){const Ve=pe[Ee];li(g,M,Ve,Ve.viewport)}}else V.length>0&&Ti($,V,M,H),j&&Xe.render(M),li(g,M,H);E!==null&&(L.updateMultisampleRenderTarget(E),L.updateRenderTargetMipmap(E)),M.isScene===!0&&M.onAfterRender(x,M,H),bt.resetDefaultState(),w=-1,b=null,_.pop(),_.length>0?(m=_[_.length-1],re===!0&&me.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Yi(M,H,W,$){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Q.intersectsSprite(M)){$&&J.setFromMatrixPosition(M.matrixWorld).applyMatrix4(he);const Ee=te.update(M),De=M.material;De.visible&&g.push(M,Ee,De,W,J.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Q.intersectsObject(M))){const Ee=te.update(M),De=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),J.copy(M.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),J.copy(Ee.boundingSphere.center)),J.applyMatrix4(M.matrixWorld).applyMatrix4(he)),Array.isArray(De)){const Ve=Ee.groups;for(let qe=0,tt=Ve.length;qe<tt;qe++){const $e=Ve[qe],ct=De[$e.materialIndex];ct&&ct.visible&&g.push(M,Ee,ct,W,J.z,$e)}}else De.visible&&g.push(M,Ee,De,W,J.z,null)}}const pe=M.children;for(let Ee=0,De=pe.length;Ee<De;Ee++)Yi(pe[Ee],H,W,$)}function li(M,H,W,$){const V=M.opaque,pe=M.transmissive,Ee=M.transparent;m.setupLightsView(W),re===!0&&me.setGlobalState(x.clippingPlanes,W),$&&fe.viewport(P.copy($)),V.length>0&&vs(V,H,W),pe.length>0&&vs(pe,H,W),Ee.length>0&&vs(Ee,H,W),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ti(M,H,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Sn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?xi:bi,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const pe=m.state.transmissionRenderTarget[$.id],Ee=$.viewport||P;pe.setSize(Ee.z,Ee.w);const De=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(D),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),j&&Xe.render(W);const Ve=x.toneMapping;x.toneMapping=Oi;const qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),re===!0&&me.setGlobalState(x.clippingPlanes,$),vs(M,W,$),L.updateMultisampleRenderTarget(pe),L.updateRenderTargetMipmap(pe),K.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let $e=0,ct=H.length;$e<ct;$e++){const ft=H[$e],Mt=ft.object,on=ft.geometry,mt=ft.material,Ke=ft.group;if(mt.side===qt&&Mt.layers.test($.layers)){const Nn=mt.side;mt.side=nn,mt.needsUpdate=!0,sa(Mt,W,$,on,mt,Ke),mt.side=Nn,mt.needsUpdate=!0,tt=!0}}tt===!0&&(L.updateMultisampleRenderTarget(pe),L.updateRenderTargetMipmap(pe))}x.setRenderTarget(De),x.setClearColor(D,F),qe!==void 0&&($.viewport=qe),x.toneMapping=Ve}function vs(M,H,W){const $=H.isScene===!0?H.overrideMaterial:null;for(let V=0,pe=M.length;V<pe;V++){const Ee=M[V],De=Ee.object,Ve=Ee.geometry,qe=$===null?Ee.material:$,tt=Ee.group;De.layers.test(W.layers)&&sa(De,H,W,Ve,qe,tt)}}function sa(M,H,W,$,V,pe){M.onBeforeRender(x,H,W,$,V,pe),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(x,H,W,$,M,pe),V.transparent===!0&&V.side===qt&&V.forceSinglePass===!1?(V.side=nn,V.needsUpdate=!0,x.renderBufferDirect(W,H,$,V,M,pe),V.side=Hi,V.needsUpdate=!0,x.renderBufferDirect(W,H,$,V,M,pe),V.side=qt):x.renderBufferDirect(W,H,$,V,M,pe),M.onAfterRender(x,H,W,$,V,pe)}function tr(M,H,W){H.isScene!==!0&&(H=ye);const $=_e.get(M),V=m.state.lights,pe=m.state.shadowsArray,Ee=V.state.version,De=Te.getParameters(M,V.state,pe,H,W),Ve=Te.getProgramCacheKey(De);let qe=$.programs;$.environment=M.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(M.isMeshStandardMaterial?q:T).get(M.envMap||$.environment),$.envMapRotation=$.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,qe===void 0&&(M.addEventListener("dispose",G),qe=new Map,$.programs=qe);let tt=qe.get(Ve);if(tt!==void 0){if($.currentProgram===tt&&$.lightsStateVersion===Ee)return oa(M,De),tt}else De.uniforms=Te.getUniforms(M),M.onBeforeCompile(De,x),tt=Te.acquireProgram(De,Ve),qe.set(Ve,tt),$.uniforms=De.uniforms;const $e=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&($e.clippingPlanes=me.uniform),oa(M,De),$.needsLights=Re(M),$.lightsStateVersion=Ee,$.needsLights&&($e.ambientLightColor.value=V.state.ambient,$e.lightProbe.value=V.state.probe,$e.directionalLights.value=V.state.directional,$e.directionalLightShadows.value=V.state.directionalShadow,$e.spotLights.value=V.state.spot,$e.spotLightShadows.value=V.state.spotShadow,$e.rectAreaLights.value=V.state.rectArea,$e.ltc_1.value=V.state.rectAreaLTC1,$e.ltc_2.value=V.state.rectAreaLTC2,$e.pointLights.value=V.state.point,$e.pointLightShadows.value=V.state.pointShadow,$e.hemisphereLights.value=V.state.hemi,$e.directionalShadowMap.value=V.state.directionalShadowMap,$e.directionalShadowMatrix.value=V.state.directionalShadowMatrix,$e.spotShadowMap.value=V.state.spotShadowMap,$e.spotLightMatrix.value=V.state.spotLightMatrix,$e.spotLightMap.value=V.state.spotLightMap,$e.pointShadowMap.value=V.state.pointShadowMap,$e.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=tt,$.uniformsList=null,tt}function ra(M){if(M.uniformsList===null){const H=M.currentProgram.getUniforms();M.uniformsList=ol.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function oa(M,H){const W=_e.get(M);W.outputColorSpace=H.outputColorSpace,W.batching=H.batching,W.batchingColor=H.batchingColor,W.instancing=H.instancing,W.instancingColor=H.instancingColor,W.instancingMorph=H.instancingMorph,W.skinning=H.skinning,W.morphTargets=H.morphTargets,W.morphNormals=H.morphNormals,W.morphColors=H.morphColors,W.morphTargetsCount=H.morphTargetsCount,W.numClippingPlanes=H.numClippingPlanes,W.numIntersection=H.numClipIntersection,W.vertexAlphas=H.vertexAlphas,W.vertexTangents=H.vertexTangents,W.toneMapping=H.toneMapping}function Nc(M,H,W,$,V){H.isScene!==!0&&(H=ye),L.resetTextureUnits();const pe=H.fog,Ee=$.isMeshStandardMaterial?H.environment:null,De=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ks,Ve=($.isMeshStandardMaterial?q:T).get($.envMap||Ee),qe=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,tt=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),$e=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,ft=!!W.morphAttributes.color;let Mt=Oi;$.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const on=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,mt=on!==void 0?on.length:0,Ke=_e.get($),Nn=m.state.lights;if(re===!0&&(ge===!0||M!==b)){const Gn=M===b&&$.id===w;me.setState($,M,Gn)}let vt=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Nn.state.version||Ke.outputColorSpace!==De||V.isBatchedMesh&&Ke.batching===!1||!V.isBatchedMesh&&Ke.batching===!0||V.isBatchedMesh&&Ke.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ke.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ke.instancing===!1||!V.isInstancedMesh&&Ke.instancing===!0||V.isSkinnedMesh&&Ke.skinning===!1||!V.isSkinnedMesh&&Ke.skinning===!0||V.isInstancedMesh&&Ke.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ke.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ke.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ke.instancingMorph===!1&&V.morphTexture!==null||Ke.envMap!==Ve||$.fog===!0&&Ke.fog!==pe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==me.numPlanes||Ke.numIntersection!==me.numIntersection)||Ke.vertexAlphas!==qe||Ke.vertexTangents!==tt||Ke.morphTargets!==$e||Ke.morphNormals!==ct||Ke.morphColors!==ft||Ke.toneMapping!==Mt||Ke.morphTargetsCount!==mt)&&(vt=!0):(vt=!0,Ke.__version=$.version);let En=Ke.currentProgram;vt===!0&&(En=tr($,H,V));let Yn=!1,an=!1,Vn=!1;const wt=En.getUniforms(),ci=Ke.uniforms;if(fe.useProgram(En.program)&&(Yn=!0,an=!0,Vn=!0),$.id!==w&&(w=$.id,an=!0),Yn||b!==M){fe.buffers.depth.getReversed()?(ve.copy(M.projectionMatrix),ig(ve),sg(ve),wt.setValue(R,"projectionMatrix",ve)):wt.setValue(R,"projectionMatrix",M.projectionMatrix),wt.setValue(R,"viewMatrix",M.matrixWorldInverse);const Zi=wt.map.cameraPosition;Zi!==void 0&&Zi.setValue(R,Se.setFromMatrixPosition(M.matrixWorld)),Me.logarithmicDepthBuffer&&wt.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&wt.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,an=!0,Vn=!0)}if(V.isSkinnedMesh){wt.setOptional(R,V,"bindMatrix"),wt.setOptional(R,V,"bindMatrixInverse");const Gn=V.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),wt.setValue(R,"boneTexture",Gn.boneTexture,L))}V.isBatchedMesh&&(wt.setOptional(R,V,"batchingTexture"),wt.setValue(R,"batchingTexture",V._matricesTexture,L),wt.setOptional(R,V,"batchingIdTexture"),wt.setValue(R,"batchingIdTexture",V._indirectTexture,L),wt.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&wt.setValue(R,"batchingColorTexture",V._colorsTexture,L));const $r=W.morphAttributes;if(($r.position!==void 0||$r.normal!==void 0||$r.color!==void 0)&&Le.update(V,W,En),(an||Ke.receiveShadow!==V.receiveShadow)&&(Ke.receiveShadow=V.receiveShadow,wt.setValue(R,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ci.envMap.value=Ve,ci.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(ci.envMapIntensity.value=H.environmentIntensity),an&&(wt.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ke.needsLights&&kc(ci,Vn),pe&&$.fog===!0&&xe.refreshFogUniforms(ci,pe),xe.refreshMaterialUniforms(ci,$,B,k,m.state.transmissionRenderTarget[M.id]),ol.upload(R,ra(Ke),ci,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ol.upload(R,ra(Ke),ci,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&wt.setValue(R,"center",V.center),wt.setValue(R,"modelViewMatrix",V.modelViewMatrix),wt.setValue(R,"normalMatrix",V.normalMatrix),wt.setValue(R,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Gn=$.uniformsGroups;for(let Zi=0,Ki=Gn.length;Zi<Ki;Zi++){const sd=Gn[Zi];Z.update(sd,En),Z.bind(sd,En)}}return En}function kc(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function Re(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(M,H,W){_e.get(M.texture).__webglTexture=H,_e.get(M.depthTexture).__webglTexture=W;const $=_e.get(M);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,H){const W=_e.get(M);W.__webglFramebuffer=H,W.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(M,H=0,W=0){E=M,C=H,S=W;let $=!0,V=null,pe=!1,Ee=!1;if(M){const Ve=_e.get(M);if(Ve.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(R.FRAMEBUFFER,null),$=!1;else if(Ve.__webglFramebuffer===void 0)L.setupRenderTarget(M);else if(Ve.__hasExternalTextures)L.rebindTextures(M,_e.get(M.texture).__webglTexture,_e.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const $e=M.depthTexture;if(Ve.__boundDepthTexture!==$e){if($e!==null&&_e.has($e)&&(M.width!==$e.image.width||M.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(M)}}const qe=M.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ee=!0);const tt=_e.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(tt[H])?V=tt[H][W]:V=tt[H],pe=!0):M.samples>0&&L.useMultisampledRTT(M)===!1?V=_e.get(M).__webglMultisampledFramebuffer:Array.isArray(tt)?V=tt[W]:V=tt,P.copy(M.viewport),N.copy(M.scissor),U=M.scissorTest}else P.copy(ne).multiplyScalar(B).floor(),N.copy(ue).multiplyScalar(B).floor(),U=we;if(fe.bindFramebuffer(R.FRAMEBUFFER,V)&&$&&fe.drawBuffers(M,V),fe.viewport(P),fe.scissor(N),fe.setScissorTest(U),pe){const Ve=_e.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ve.__webglTexture,W)}else if(Ee){const Ve=_e.get(M.texture),qe=H||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ve.__webglTexture,W||0,qe)}w=-1},this.readRenderTargetPixels=function(M,H,W,$,V,pe,Ee){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De){fe.bindFramebuffer(R.FRAMEBUFFER,De);try{const Ve=M.texture,qe=Ve.format,tt=Ve.type;if(!Me.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-$&&W>=0&&W<=M.height-V&&R.readPixels(H,W,$,V,Qe.convert(qe),Qe.convert(tt),pe)}finally{const Ve=E!==null?_e.get(E).__webglFramebuffer:null;fe.bindFramebuffer(R.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(M,H,W,$,V,pe,Ee){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De){const Ve=M.texture,qe=Ve.format,tt=Ve.type;if(!Me.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=M.width-$&&W>=0&&W<=M.height-V){fe.bindFramebuffer(R.FRAMEBUFFER,De);const $e=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,$e),R.bufferData(R.PIXEL_PACK_BUFFER,pe.byteLength,R.STREAM_READ),R.readPixels(H,W,$,V,Qe.convert(qe),Qe.convert(tt),0);const ct=E!==null?_e.get(E).__webglFramebuffer:null;fe.bindFramebuffer(R.FRAMEBUFFER,ct);const ft=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ng(R,ft,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,$e),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,pe),R.deleteBuffer($e),R.deleteSync(ft),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,H=null,W=0){M.isTexture!==!0&&(fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1]);const $=Math.pow(2,-W),V=Math.floor(M.image.width*$),pe=Math.floor(M.image.height*$),Ee=H!==null?H.x:0,De=H!==null?H.y:0;L.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,Ee,De,V,pe),fe.unbindTexture()},this.copyTextureToTexture=function(M,H,W=null,$=null,V=0){M.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,M=arguments[1],H=arguments[2],V=arguments[3]||0,W=null);let pe,Ee,De,Ve,qe,tt,$e,ct,ft;const Mt=M.isCompressedTexture?M.mipmaps[V]:M.image;W!==null?(pe=W.max.x-W.min.x,Ee=W.max.y-W.min.y,De=W.isBox3?W.max.z-W.min.z:1,Ve=W.min.x,qe=W.min.y,tt=W.isBox3?W.min.z:0):(pe=Mt.width,Ee=Mt.height,De=Mt.depth||1,Ve=0,qe=0,tt=0),$!==null?($e=$.x,ct=$.y,ft=$.z):($e=0,ct=0,ft=0);const on=Qe.convert(H.format),mt=Qe.convert(H.type);let Ke;H.isData3DTexture?(L.setTexture3D(H,0),Ke=R.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(L.setTexture2DArray(H,0),Ke=R.TEXTURE_2D_ARRAY):(L.setTexture2D(H,0),Ke=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment);const Nn=R.getParameter(R.UNPACK_ROW_LENGTH),vt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),En=R.getParameter(R.UNPACK_SKIP_PIXELS),Yn=R.getParameter(R.UNPACK_SKIP_ROWS),an=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Mt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Mt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,qe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,tt);const Vn=M.isDataArrayTexture||M.isData3DTexture,wt=H.isDataArrayTexture||H.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const ci=_e.get(M),$r=_e.get(H),Gn=_e.get(ci.__renderTarget),Zi=_e.get($r.__renderTarget);fe.bindFramebuffer(R.READ_FRAMEBUFFER,Gn.__webglFramebuffer),fe.bindFramebuffer(R.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let Ki=0;Ki<De;Ki++)Vn&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(M).__webglTexture,V,tt+Ki),M.isDepthTexture?(wt&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(H).__webglTexture,V,ft+Ki),R.blitFramebuffer(Ve,qe,pe,Ee,$e,ct,pe,Ee,R.DEPTH_BUFFER_BIT,R.NEAREST)):wt?R.copyTexSubImage3D(Ke,V,$e,ct,ft+Ki,Ve,qe,pe,Ee):R.copyTexSubImage2D(Ke,V,$e,ct,ft+Ki,Ve,qe,pe,Ee);fe.bindFramebuffer(R.READ_FRAMEBUFFER,null),fe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else wt?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(Ke,V,$e,ct,ft,pe,Ee,De,on,mt,Mt.data):H.isCompressedArrayTexture?R.compressedTexSubImage3D(Ke,V,$e,ct,ft,pe,Ee,De,on,Mt.data):R.texSubImage3D(Ke,V,$e,ct,ft,pe,Ee,De,on,mt,Mt):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,V,$e,ct,pe,Ee,on,mt,Mt.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,V,$e,ct,Mt.width,Mt.height,on,Mt.data):R.texSubImage2D(R.TEXTURE_2D,V,$e,ct,pe,Ee,on,mt,Mt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Nn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,vt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,En),R.pixelStorei(R.UNPACK_SKIP_ROWS,Yn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,an),V===0&&H.generateMipmaps&&R.generateMipmap(Ke),fe.unbindTexture()},this.copyTextureToTexture3D=function(M,H,W=null,$=null,V=0){return M.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,$=arguments[1]||null,M=arguments[2],H=arguments[3],V=arguments[4]||0),fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,H,W,$,V)},this.initRenderTarget=function(M){_e.get(M).__webglFramebuffer===void 0&&L.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?L.setTextureCube(M,0):M.isData3DTexture?L.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?L.setTexture2DArray(M,0):L.setTexture2D(M,0),fe.unbindTexture()},this.resetState=function(){C=0,S=0,E=null,fe.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}class Vs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new Vs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mc extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new St,this.environmentIntensity=1,this.environmentRotation=new St,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Do,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new A;class qs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vc extends vn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let mr;const jr=new A,gr=new A,vr=new A,xr=new de,Qr=new de,im=new Ze,Ea=new A,eo=new A,Ca=new A,Zd=new de,hh=new de,Kd=new de;class Lu extends _t{constructor(e=new vc){if(super(),this.isSprite=!0,this.type="Sprite",mr===void 0){mr=new nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gc(t,5);mr.setIndex([0,1,2,0,2,3]),mr.setAttribute("position",new qs(n,3,0,!1)),mr.setAttribute("uv",new qs(n,2,3,!1))}this.geometry=mr,this.material=e,this.center=new de(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),im.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-vr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Ra(Ea.set(-.5,-.5,0),vr,o,gr,i,r),Ra(eo.set(.5,-.5,0),vr,o,gr,i,r),Ra(Ca.set(.5,.5,0),vr,o,gr,i,r),Zd.set(0,0),hh.set(1,0),Kd.set(1,1);let a=e.ray.intersectTriangle(Ea,eo,Ca,!1,jr);if(a===null&&(Ra(eo.set(-.5,.5,0),vr,o,gr,i,r),hh.set(0,1),a=e.ray.intersectTriangle(Ea,Ca,eo,!1,jr),a===null))return;const l=e.ray.origin.distanceTo(jr);l<e.near||l>e.far||t.push({distance:l,point:jr.clone(),uv:In.getInterpolation(jr,Ea,eo,Ca,Zd,hh,Kd,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ra(s,e,t,n,i,r){xr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Qr.x=r*xr.x-i*xr.y,Qr.y=i*xr.x+r*xr.y):Qr.copy(xr),s.copy(e),s.x+=Qr.x,s.y+=Qr.y,s.applyMatrix4(im)}const Pa=new A,Jd=new A;class sm extends _t{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Pa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Pa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Pa.setFromMatrixPosition(e.matrixWorld),Jd.setFromMatrixPosition(this.matrixWorld);const n=Pa.distanceTo(Jd)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const jd=new A,Qd=new yt,ef=new yt,v1=new A,tf=new Ze,Ia=new A,uh=new mn,nf=new Ze,dh=new Br;class rm extends je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bh,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Tn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ia),this.boundingBox.expandByPoint(Ia)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ia),this.boundingSphere.expandByPoint(Ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uh.copy(this.boundingSphere),uh.applyMatrix4(i),e.ray.intersectsSphere(uh)!==!1&&(nf.copy(i).invert(),dh.copy(e.ray).applyMatrix4(nf),!(this.boundingBox!==null&&dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Qd.fromBufferAttribute(i.attributes.skinIndex,e),ef.fromBufferAttribute(i.attributes.skinWeight,e),jd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ef.getComponent(r);if(o!==0){const a=Qd.getComponent(r);tf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(v1.copy(jd).applyMatrix4(tf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Du extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ii extends Ot{constructor(e=null,t=1,n=1,i,r,o,a,l,c=hn,h=hn,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sf=new Ze,x1=new Ze;class xc{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:x1;sf.multiplyMatrices(a,t[r]),sf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ii(t,e,e,wn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Du),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class $s extends ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yr=new Ze,rf=new Ze,La=[],of=new Tn,y1=new Ze,to=new je,no=new mn;class pn extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,y1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),of.copy(e.boundingBox).applyMatrix4(yr),this.boundingBox.union(of)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),no.copy(e.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(no)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(to.geometry=this.geometry,to.material=this.material,to.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(n),e.ray.intersectsSphere(no)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,yr),rf.multiplyMatrices(n,yr),to.matrixWorld=rf,to.raycast(e,La);for(let o=0,a=La.length;o<a;o++){const l=La[o];l.instanceId=r,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ii(new Float32Array(i*this.count),i,this.count,rc,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function fh(s,e){return s-e}function _1(s,e){return s.z-e.z}function b1(s,e){return e.z-s.z}class M1{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Cn=new Ze,w1=new Ie(1,1,1),ph=new Zo,Da=new Tn,Ss=new mn,io=new A,af=new A,S1=new A,mh=new M1,fn=new je,Ua=[];function T1(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Ts(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class om extends je{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,i){super(new nt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ii(t,e,e,wn,Ln);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new ii(t,e,e,qo,Gi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new ii(t,e,e,wn,Ln);n.colorSpace=pt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const o=e.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new ut(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new ut(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Cn),this.getBoundingBoxAt(r,Da).applyMatrix4(Cn),e.union(Da)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Cn),this.getBoundingSphereAt(r,Ss).applyMatrix4(Cn),e.union(Ss)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(fh),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Cn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(w1.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(fh),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);T1(u,d,l);const f=u.itemSize;for(let p=u.count,v=c;p<v;p++){const g=l+p;for(let m=0;m<f;m++)d.setComponent(g,m,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){const h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,l+o.getX(d));for(let d=o.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,p=f.array,v=e-u;for(let g=h;g<h+d;g++)p[g]=p[g]+v;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(const f in d){const p=d[f],{array:v,itemSize:g}=p;v.copyWithin(e*g,h*g,(h+u)*g),p.addUpdateRange(e*g,u*g)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const r=new Tn,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(io.fromBufferAttribute(a,h))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const r=new mn;this.getBoundingBoxAt(e,Da),Da.getCenter(r.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;o&&(u=o.getX(u)),io.fromBufferAttribute(a,u),l=Math.max(l,r.center.distanceToSquared(io))}r.radius=Math.sqrt(l),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){const n=this._instanceInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._instanceInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._instanceInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._instanceInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._instanceInfo,i=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=i.length||i[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(fh);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),r=new Int32Array(e);Ts(this._multiDrawCounts,i),Ts(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Ts(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Ts(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Ts(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new nt,this._initializeGeometry(r));const o=this.geometry;r.index&&Ts(r.index.array,o.index.array);for(const a in r.attributes)Ts(r.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;fn.material=this.material,fn.geometry.index=o.index,fn.geometry.attributes=o.attributes,fn.geometry.boundingBox===null&&(fn.geometry.boundingBox=new Tn),fn.geometry.boundingSphere===null&&(fn.geometry.boundingSphere=new mn);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,h=i[c];fn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,fn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,fn.geometry.boundingBox),this.getBoundingSphereAt(c,fn.geometry.boundingSphere),fn.raycast(e,Ua);for(let u=0,d=Ua.length;u<d;u++){const f=Ua[u];f.object=this,f.batchId=a,t.push(f)}Ua.length=0}fn.material=null,fn.geometry.index=null,fn.geometry.attributes={},fn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data;d&&(Cn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),ph.setFromProjectionMatrix(Cn,e.coordinateSystem));let v=0;if(this.sortObjects){Cn.copy(this.matrixWorld).invert(),io.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Cn),af.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Cn);for(let y=0,_=l.length;y<_;y++)if(l[y].visible&&l[y].active){const x=l[y].geometryIndex;this.getMatrixAt(y,Cn),this.getBoundingSphereAt(x,Ss).applyMatrix4(Cn);let I=!1;if(d&&(I=!ph.intersectsSphere(Ss)),!I){const C=u[x],S=S1.subVectors(Ss.center,io).dot(af);mh.push(C.start,C.count,S,y)}}const g=mh.list,m=this.customSort;m===null?g.sort(r.transparent?b1:_1):m.call(this,g,n);for(let y=0,_=g.length;y<_;y++){const x=g[y];c[v]=x.start*a,h[v]=x.count,p[v]=x.index,v++}mh.reset()}else for(let g=0,m=l.length;g<m;g++)if(l[g].visible&&l[g].active){const y=l[g].geometryIndex;let _=!1;if(d&&(this.getMatrixAt(g,Cn),this.getBoundingSphereAt(y,Ss).applyMatrix4(Cn),_=!ph.intersectsSphere(Ss)),!_){const x=u[y];c[v]=x.start*a,h[v]=x.count,p[v]=g,v++}}f.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,o){this.onBeforeRender(e,null,i,r,o)}}class An extends vn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xl=new A,ql=new A,lf=new Ze,so=new Br,Na=new mn,gh=new A,cf=new A;class ds extends _t{constructor(e=new nt,t=new An){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Xl.fromBufferAttribute(t,i-1),ql.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xl.distanceTo(ql);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;lf.copy(i).invert(),so.copy(e.ray).applyMatrix4(lf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){const m=h.getX(v),y=h.getX(v+1),_=ka(this,e,so,l,m,y);_&&t.push(_)}if(this.isLineLoop){const v=h.getX(p-1),g=h.getX(f),m=ka(this,e,so,l,v,g);m&&t.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){const m=ka(this,e,so,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=ka(this,e,so,l,p-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ka(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Xl.fromBufferAttribute(o,i),ql.fromBufferAttribute(o,r),t.distanceSqToSegment(Xl,ql,gh,cf)>n)return;gh.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(gh);if(!(l<e.near||l>e.far))return{distance:l,point:cf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const hf=new A,uf=new A;class Si extends ds{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)hf.fromBufferAttribute(t,i),uf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hf.distanceTo(uf);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class am extends ds{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Uu extends vn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const df=new Ze,qh=new Br,Fa=new mn,Oa=new A;class ko extends _t{constructor(e=new nt,t=new Uu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;df.copy(i).invert(),qh.copy(e.ray).applyMatrix4(df);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,v=f;p<v;p++){const g=c.getX(p);Oa.fromBufferAttribute(u,g),ff(Oa,g,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,v=f;p<v;p++)Oa.fromBufferAttribute(u,p),ff(Oa,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ff(s,e,t,n,i,r,o){const a=qh.distanceSqToPoint(s);if(a<t){const l=new A;qh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class A1 extends Ot{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Yt,this.magFilter=r!==void 0?r:Yt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class E1 extends Ot{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=hn,this.minFilter=hn,this.generateMipmaps=!1,this.needsUpdate=!0}}class yc extends Ot{constructor(e,t,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class C1 extends yc{constructor(e,t,n,i,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Xn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R1 extends yc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Vi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Vr extends Ot{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new de:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],r=[],o=[],a=new A,l=new Ze;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Ft(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ft(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _c extends si{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new de){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lm extends _c{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nu(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const za=new A,vh=new Nu,xh=new Nu,yh=new Nu;class Ur extends si{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(za.subVectors(i[0],i[1]).add(i[0]),c=za);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(za.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=za),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),vh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,g),xh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,g),yh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(vh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),xh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),yh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(vh.calc(l),xh.calc(l),yh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pf(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function P1(s,e){const t=1-s;return t*t*e}function I1(s,e){return 2*(1-s)*s*e}function L1(s,e){return s*s*e}function To(s,e,t,n){return P1(s,e)+I1(s,t)+L1(s,n)}function D1(s,e){const t=1-s;return t*t*t*e}function U1(s,e){const t=1-s;return 3*t*t*s*e}function N1(s,e){return 3*(1-s)*s*s*e}function k1(s,e){return s*s*s*e}function Ao(s,e,t,n,i){return D1(s,e)+U1(s,t)+N1(s,n)+k1(s,i)}class ku extends si{constructor(e=new de,t=new de,n=new de,i=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new de){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ao(e,i.x,r.x,o.x,a.x),Ao(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cm extends si{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ao(e,i.x,r.x,o.x,a.x),Ao(e,i.y,r.y,o.y,a.y),Ao(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fu extends si{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hm extends si{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ou extends si{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(To(e,i.x,r.x,o.x),To(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zu extends si{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(To(e,i.x,r.x,o.x),To(e,i.y,r.y,o.y),To(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bu extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(pf(a,l.x,c.x,h.x,u.x),pf(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new de().fromArray(i))}return this}}var $l=Object.freeze({__proto__:null,ArcCurve:lm,CatmullRomCurve3:Ur,CubicBezierCurve:ku,CubicBezierCurve3:cm,EllipseCurve:_c,LineCurve:Fu,LineCurve3:hm,QuadraticBezierCurve:Ou,QuadraticBezierCurve3:zu,SplineCurve:Bu});class um extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $l[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new $l[i.type]().fromJSON(i))}return this}}class Fo extends um{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fu(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Ou(this.currentPoint.clone(),new de(e,t),new de(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new ku(this.currentPoint.clone(),new de(e,t),new de(n,i),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Bu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new _c(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $i extends nt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ft(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new A,d=new de,f=new A,p=new A,v=new A;let g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let y=0;y<=t;y++){const _=n+y*h*i,x=Math.sin(_),I=Math.cos(_);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*x,u.y=e[C].y,u.z=e[C].x*I,o.push(u.x,u.y,u.z),d.x=y/t,d.y=C/(e.length-1),a.push(d.x,d.y);const S=l[3*C+0]*x,E=l[3*C+1],w=l[3*C+0]*I;c.push(S,E,w)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const x=_+y*e.length,I=x,C=x+e.length,S=x+e.length+1,E=x+1;r.push(I,C,E),r.push(S,E,C)}this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("uv",new Ye(a,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.points,e.segments,e.phiStart,e.phiLength)}}class bc extends $i{constructor(e=1,t=1,n=4,i=8){const r=new Fo;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new bc(e.radius,e.length,e.capSegments,e.radialSegments)}}class Gr extends nt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new A,h=new de;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(a,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hn extends nt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const v=[],g=n/2;let m=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function y(){const x=new A,I=new A;let C=0;const S=(t-e)/n;for(let E=0;E<=r;E++){const w=[],b=E/r,P=b*(t-e)+e;for(let N=0;N<=i;N++){const U=N/i,D=U*l+a,F=Math.sin(D),z=Math.cos(D);I.x=P*F,I.y=-b*n+g,I.z=P*z,u.push(I.x,I.y,I.z),x.set(F,S,z).normalize(),d.push(x.x,x.y,x.z),f.push(U,1-b),w.push(p++)}v.push(w)}for(let E=0;E<i;E++)for(let w=0;w<r;w++){const b=v[w][E],P=v[w+1][E],N=v[w+1][E+1],U=v[w][E+1];(e>0||w!==0)&&(h.push(b,P,U),C+=3),(t>0||w!==r-1)&&(h.push(P,N,U),C+=3)}c.addGroup(m,C,0),m+=C}function _(x){const I=p,C=new de,S=new A;let E=0;const w=x===!0?e:t,b=x===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),p++;const P=p;for(let N=0;N<=i;N++){const D=N/i*l+a,F=Math.cos(D),z=Math.sin(D);S.x=w*z,S.y=g*b,S.z=w*F,u.push(S.x,S.y,S.z),d.push(0,b,0),C.x=F*.5+.5,C.y=z*.5*b+.5,f.push(C.x,C.y),p++}for(let N=0;N<i;N++){const U=I+N,D=P+N;x===!0?h.push(D,D+1,U):h.push(D+1,D,U),E+=3}c.addGroup(m,E,x===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bi extends Hn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Bi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ms extends nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new A,x=new A,I=new A;for(let C=0;C<t.length;C+=3)f(t[C+0],_),f(t[C+1],x),f(t[C+2],I),l(_,x,I,y)}function l(y,_,x,I){const C=I+1,S=[];for(let E=0;E<=C;E++){S[E]=[];const w=y.clone().lerp(x,E/C),b=_.clone().lerp(x,E/C),P=C-E;for(let N=0;N<=P;N++)N===0&&E===C?S[E][N]=w:S[E][N]=w.clone().lerp(b,N/P)}for(let E=0;E<C;E++)for(let w=0;w<2*(C-E)-1;w++){const b=Math.floor(w/2);w%2===0?(d(S[E][b+1]),d(S[E+1][b]),d(S[E][b])):(d(S[E][b+1]),d(S[E+1][b+1]),d(S[E+1][b]))}}function c(y){const _=new A;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){const y=new A;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const x=g(y)/2/Math.PI+.5,I=m(y)/Math.PI+.5;o.push(x,1-I)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){const _=o[y+0],x=o[y+2],I=o[y+4],C=Math.max(_,x,I),S=Math.min(_,x,I);C>.9&&S<.1&&(_<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){const x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function p(){const y=new A,_=new A,x=new A,I=new A,C=new de,S=new de,E=new de;for(let w=0,b=0;w<r.length;w+=9,b+=6){y.set(r[w+0],r[w+1],r[w+2]),_.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),C.set(o[b+0],o[b+1]),S.set(o[b+2],o[b+3]),E.set(o[b+4],o[b+5]),I.copy(y).add(_).add(x).divideScalar(3);const P=g(I);v(C,b+0,y,P),v(S,b+2,_,P),v(E,b+4,x,P)}}function v(y,_,x,I){I<0&&y.x===1&&(o[_]=y.x-1),x.x===0&&x.z===0&&(o[_]=I/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.vertices,e.indices,e.radius,e.details)}}class Mc extends ms{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mc(e.radius,e.detail)}}const Ba=new A,Ha=new A,_h=new A,Va=new In;class dm extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Hs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:g,c:m}=Va;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Va.getNormal(_h),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const _=(y+1)%3,x=u[y],I=u[_],C=Va[h[y]],S=Va[h[_]],E=`${x}_${I}`,w=`${I}_${x}`;w in d&&d[w]?(_h.dot(d[w].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(S.x,S.y,S.z)),d[w]=null):E in d||(d[E]={index0:c[y],index1:c[_],normal:_h.clone()})}}for(const p in d)if(d[p]){const{index0:v,index1:g}=d[p];Ba.fromBufferAttribute(a,v),Ha.fromBufferAttribute(a,g),f.push(Ba.x,Ba.y,Ba.z),f.push(Ha.x,Ha.y,Ha.z)}this.setAttribute("position",new Ye(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class cs extends Fo{constructor(e){super(e),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Fo().fromJSON(i))}return this}}const F1={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=fm(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=V1(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let p=t;p<i;p+=t)u=s[p],d=s[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Oo(r,o,t,a,l,f,0),o}};function fm(s,e,t,n,i){let r,o;if(i===Q1(s,e,t,n)>0)for(r=e;r<t;r+=n)o=mf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=mf(r,s[r],s[r+1],o);return o&&wc(o,o.next)&&(Bo(o),o=o.next),o}function Ys(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(wc(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Bo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Oo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&$1(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?z1(s,n,i,r):O1(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Bo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=B1(Ys(s),e,t),Oo(s,e,t,n,i,r,2)):o===2&&H1(s,e,t,n,i,r):Oo(Ys(s),e,t,n,i,r,1);break}}}function O1(s){const e=s.prev,t=s,n=s.next;if(Dt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Er(i,a,r,l,o,c,p.x,p.y)&&Dt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function z1(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Dt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=$h(f,p,e,t,n),y=$h(v,g,e,t,n);let _=s.prevZ,x=s.nextZ;for(;_&&_.z>=m&&x&&x.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==i&&_!==o&&Er(a,h,l,u,c,d,_.x,_.y)&&Dt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Er(a,h,l,u,c,d,x.x,x.y)&&Dt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==i&&_!==o&&Er(a,h,l,u,c,d,_.x,_.y)&&Dt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Er(a,h,l,u,c,d,x.x,x.y)&&Dt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function B1(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!wc(i,r)&&pm(i,n,n.next,r)&&zo(i,r)&&zo(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Bo(n),Bo(n.next),n=s=r),n=n.next}while(n!==s);return Ys(n)}function H1(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K1(o,a)){let l=mm(o,a);o=Ys(o,o.next),l=Ys(l,l.next),Oo(o,e,t,n,i,r,0),Oo(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function V1(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=fm(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Z1(c));for(i.sort(G1),r=0;r<i.length;r++)t=W1(i[r],t);return t}function G1(s,e){return s.x-e.x}function W1(s,e){const t=X1(s,e);if(!t)return e;const n=mm(t,s);return Ys(n,n.next),Ys(t,t.next)}function X1(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Er(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),zo(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&q1(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function q1(s,e){return Dt(s.prev,s,e.prev)<0&&Dt(e.next,s,s.next)<0}function $1(s,e,t,n){let i=s;do i.z===0&&(i.z=$h(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Y1(i)}function Y1(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function $h(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Z1(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Er(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function K1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!J1(s,e)&&(zo(s,e)&&zo(e,s)&&j1(s,e)&&(Dt(s.prev,s,e.prev)||Dt(s,e.prev,e))||wc(s,e)&&Dt(s.prev,s,s.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function wc(s,e){return s.x===e.x&&s.y===e.y}function pm(s,e,t,n){const i=Wa(Dt(s,e,t)),r=Wa(Dt(s,e,n)),o=Wa(Dt(t,n,s)),a=Wa(Dt(t,n,e));return!!(i!==r&&o!==a||i===0&&Ga(s,t,e)||r===0&&Ga(s,n,e)||o===0&&Ga(t,s,n)||a===0&&Ga(t,e,n))}function Ga(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Wa(s){return s>0?1:s<0?-1:0}function J1(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&pm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function zo(s,e){return Dt(s.prev,s,s.next)<0?Dt(s,e,s.next)>=0&&Dt(s,s.prev,e)>=0:Dt(s,e,s.prev)<0||Dt(s,s.next,e)<0}function j1(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function mm(s,e){const t=new Yh(s.i,s.x,s.y),n=new Yh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function mf(s,e,t,n){const i=new Yh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Bo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Yh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Q1(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class yi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return yi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];gf(e),vf(n,e);let o=e.length;t.forEach(gf);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,vf(n,t[l]);const a=F1.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function gf(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function vf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Jo extends nt{constructor(e=new cs([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ye(i,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:eb;let _,x=!1,I,C,S,E;m&&(_=m.getSpacedPoints(h),x=!0,d=!1,I=m.computeFrenetFrames(h,!1),C=new A,S=new A,E=new A),d||(g=0,f=0,p=0,v=0);const w=a.extractPoints(c);let b=w.shape;const P=w.holes;if(!yi.isClockWise(b)){b=b.reverse();for(let j=0,oe=P.length;j<oe;j++){const R=P[j];yi.isClockWise(R)&&(P[j]=R.reverse())}}const U=yi.triangulateShape(b,P),D=b;for(let j=0,oe=P.length;j<oe;j++){const R=P[j];b=b.concat(R)}function F(j,oe,R){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(oe,R)}const z=b.length,k=U.length;function B(j,oe,R){let ee,K,Me;const fe=j.x-oe.x,ae=j.y-oe.y,_e=R.x-j.x,L=R.y-j.y,T=fe*fe+ae*ae,q=fe*L-ae*_e;if(Math.abs(q)>Number.EPSILON){const ie=Math.sqrt(T),ce=Math.sqrt(_e*_e+L*L),te=oe.x-ae/ie,Te=oe.y+fe/ie,xe=R.x-L/ce,Ae=R.y+_e/ce,Je=((xe-te)*L-(Ae-Te)*_e)/(fe*L-ae*_e);ee=te+fe*Je-j.x,K=Te+ae*Je-j.y;const me=ee*ee+K*K;if(me<=2)return new de(ee,K);Me=Math.sqrt(me/2)}else{let ie=!1;fe>Number.EPSILON?_e>Number.EPSILON&&(ie=!0):fe<-Number.EPSILON?_e<-Number.EPSILON&&(ie=!0):Math.sign(ae)===Math.sign(L)&&(ie=!0),ie?(ee=-ae,K=fe,Me=Math.sqrt(T)):(ee=fe,K=ae,Me=Math.sqrt(T/2))}return new de(ee/Me,K/Me)}const X=[];for(let j=0,oe=D.length,R=oe-1,ee=j+1;j<oe;j++,R++,ee++)R===oe&&(R=0),ee===oe&&(ee=0),X[j]=B(D[j],D[R],D[ee]);const Y=[];let ne,ue=X.concat();for(let j=0,oe=P.length;j<oe;j++){const R=P[j];ne=[];for(let ee=0,K=R.length,Me=K-1,fe=ee+1;ee<K;ee++,Me++,fe++)Me===K&&(Me=0),fe===K&&(fe=0),ne[ee]=B(R[ee],R[Me],R[fe]);Y.push(ne),ue=ue.concat(ne)}for(let j=0;j<g;j++){const oe=j/g,R=f*Math.cos(oe*Math.PI/2),ee=p*Math.sin(oe*Math.PI/2)+v;for(let K=0,Me=D.length;K<Me;K++){const fe=F(D[K],X[K],ee);ve(fe.x,fe.y,-R)}for(let K=0,Me=P.length;K<Me;K++){const fe=P[K];ne=Y[K];for(let ae=0,_e=fe.length;ae<_e;ae++){const L=F(fe[ae],ne[ae],ee);ve(L.x,L.y,-R)}}}const we=p+v;for(let j=0;j<z;j++){const oe=d?F(b[j],ue[j],we):b[j];x?(S.copy(I.normals[0]).multiplyScalar(oe.x),C.copy(I.binormals[0]).multiplyScalar(oe.y),E.copy(_[0]).add(S).add(C),ve(E.x,E.y,E.z)):ve(oe.x,oe.y,0)}for(let j=1;j<=h;j++)for(let oe=0;oe<z;oe++){const R=d?F(b[oe],ue[oe],we):b[oe];x?(S.copy(I.normals[j]).multiplyScalar(R.x),C.copy(I.binormals[j]).multiplyScalar(R.y),E.copy(_[j]).add(S).add(C),ve(E.x,E.y,E.z)):ve(R.x,R.y,u/h*j)}for(let j=g-1;j>=0;j--){const oe=j/g,R=f*Math.cos(oe*Math.PI/2),ee=p*Math.sin(oe*Math.PI/2)+v;for(let K=0,Me=D.length;K<Me;K++){const fe=F(D[K],X[K],ee);ve(fe.x,fe.y,u+R)}for(let K=0,Me=P.length;K<Me;K++){const fe=P[K];ne=Y[K];for(let ae=0,_e=fe.length;ae<_e;ae++){const L=F(fe[ae],ne[ae],ee);x?ve(L.x,L.y+_[h-1].y,_[h-1].x+R):ve(L.x,L.y,u+R)}}}Q(),re();function Q(){const j=i.length/3;if(d){let oe=0,R=z*oe;for(let ee=0;ee<k;ee++){const K=U[ee];he(K[2]+R,K[1]+R,K[0]+R)}oe=h+g*2,R=z*oe;for(let ee=0;ee<k;ee++){const K=U[ee];he(K[0]+R,K[1]+R,K[2]+R)}}else{for(let oe=0;oe<k;oe++){const R=U[oe];he(R[2],R[1],R[0])}for(let oe=0;oe<k;oe++){const R=U[oe];he(R[0]+z*h,R[1]+z*h,R[2]+z*h)}}n.addGroup(j,i.length/3-j,0)}function re(){const j=i.length/3;let oe=0;ge(D,oe),oe+=D.length;for(let R=0,ee=P.length;R<ee;R++){const K=P[R];ge(K,oe),oe+=K.length}n.addGroup(j,i.length/3-j,1)}function ge(j,oe){let R=j.length;for(;--R>=0;){const ee=R;let K=R-1;K<0&&(K=j.length-1);for(let Me=0,fe=h+g*2;Me<fe;Me++){const ae=z*Me,_e=z*(Me+1),L=oe+ee+ae,T=oe+K+ae,q=oe+K+_e,ie=oe+ee+_e;Se(L,T,q,ie)}}}function ve(j,oe,R){l.push(j),l.push(oe),l.push(R)}function he(j,oe,R){J(j),J(oe),J(R);const ee=i.length/3,K=y.generateTopUV(n,i,ee-3,ee-2,ee-1);ye(K[0]),ye(K[1]),ye(K[2])}function Se(j,oe,R,ee){J(j),J(oe),J(ee),J(oe),J(R),J(ee);const K=i.length/3,Me=y.generateSideWallUV(n,i,K-6,K-3,K-2,K-1);ye(Me[0]),ye(Me[1]),ye(Me[3]),ye(Me[1]),ye(Me[2]),ye(Me[3])}function J(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function ye(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return tb(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new $l[i.type]().fromJSON(i)),new Jo(n,e.options)}}const eb={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new de(r,o),new de(a,l),new de(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-u),new de(d,1-p),new de(v,1-m)]:[new de(a,1-l),new de(h,1-u),new de(f,1-p),new de(g,1-m)]}};function tb(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wr extends ms{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wr(e.radius,e.detail)}}class jo extends ms{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jo(e.radius,e.detail)}}class Sc extends nt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new A,p=new de;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const m=r+g/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let v=0;v<i;v++){const g=v*(n+1);for(let m=0;m<n;m++){const y=m+g,_=y,x=y+n+1,I=y+n+2,C=y+1;a.push(_,x,C),a.push(x,I,C)}}this.setIndex(a),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Tc extends nt{constructor(e=new cs([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ye(i,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(o,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const p=d.holes;yi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];yi.isClockWise(y)===!0&&(p[g]=y.reverse())}const v=yi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){const y=f[g];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=v.length;g<m;g++){const y=v[g],_=y[0]+u,x=y[1]+u,I=y[2]+u;n.push(_,x,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return nb(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Tc(n,e.curveSegments)}}function nb(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Dn extends nt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new A,d=new A,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const y=[],_=m/n;let x=0;m===0&&o===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){const C=I/t;u.x=-e*Math.cos(i+C*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(i+C*r)*Math.sin(o+_*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(C+x,1-_),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const _=h[m][y+1],x=h[m][y],I=h[m+1][y],C=h[m+1][y+1];(m!==0||o>0)&&f.push(_,x,C),(m!==n-1||l<Math.PI)&&f.push(x,I,C)}this.setIndex(f),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ac extends ms{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ac(e.radius,e.detail)}}class Wi extends nt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const v=p/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const v=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,y=(i+1)*f+p;o.push(v,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ec extends nt{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],u=new A,d=new A,f=new A,p=new A,v=new A,g=new A,m=new A;for(let _=0;_<=n;++_){const x=_/n*r*Math.PI*2;y(x,r,o,e,f),y(x+.01,r,o,e,p),g.subVectors(p,f),m.addVectors(p,f),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let I=0;I<=i;++I){const C=I/i*Math.PI*2,S=-t*Math.cos(C),E=t*Math.sin(C);u.x=f.x+(S*m.x+E*v.x),u.y=f.y+(S*m.y+E*v.y),u.z=f.z+(S*m.z+E*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(_/n),h.push(I/i)}}for(let _=1;_<=n;_++)for(let x=1;x<=i;x++){const I=(i+1)*(_-1)+(x-1),C=(i+1)*_+(x-1),S=(i+1)*_+x,E=(i+1)*(_-1)+x;a.push(I,C,E),a.push(C,S,E)}this.setIndex(a),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2));function y(_,x,I,C,S){const E=Math.cos(_),w=Math.sin(_),b=I/x*_,P=Math.cos(b);S.x=C*(2+P)*.5*E,S.y=C*(2+P)*w*.5,S.z=C*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Js extends nt{constructor(e=new zu(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,l=new A,c=new de;let h=new A;const u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function v(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),y(),m()}function g(_){h=e.getPointAt(_/t,h);const x=o.normals[_],I=o.binormals[_];for(let C=0;C<=i;C++){const S=C/i*Math.PI*2,E=Math.sin(S),w=-Math.cos(S);l.x=w*x.x+E*I.x,l.y=w*x.y+E*I.y,l.z=w*x.z+E*I.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=t;_++)for(let x=1;x<=i;x++){const I=(i+1)*(_-1)+(x-1),C=(i+1)*_+(x-1),S=(i+1)*_+x,E=(i+1)*(_-1)+x;p.push(I,C,E),p.push(C,S,E)}}function y(){for(let _=0;_<=t;_++)for(let x=0;x<=i;x++)c.x=_/t,c.y=x/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Js(new $l[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class gm extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new A,r=new A;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let p=d,v=d+f;p<v;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),y=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,y),xf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),xf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ye(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function xf(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var yf=Object.freeze({__proto__:null,BoxGeometry:qi,CapsuleGeometry:bc,CircleGeometry:Gr,ConeGeometry:Bi,CylinderGeometry:Hn,DodecahedronGeometry:Mc,EdgesGeometry:dm,ExtrudeGeometry:Jo,IcosahedronGeometry:Wr,LatheGeometry:$i,OctahedronGeometry:jo,PlaneGeometry:$n,PolyhedronGeometry:ms,RingGeometry:Sc,ShapeGeometry:Tc,SphereGeometry:Dn,TetrahedronGeometry:Ac,TorusGeometry:Wi,TorusKnotGeometry:Ec,TubeGeometry:Js,WireframeGeometry:gm});class vm extends vn{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Ie(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Hu extends At{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Rt extends vn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new St,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xm extends Rt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ym extends vn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new St,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _m extends vn{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class bm extends vn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Mm extends vn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new St,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wm extends vn{static get type(){return"MeshMatcapMaterial"}constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.color=new Ie(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sm extends An{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Os(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Tm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Am(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Zh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Vu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}function ib(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<t||p>=n)){u.push(c.times[f]);for(let v=0;v<h;++v)d.push(c.values[f*h+v])}}u.length!==0&&(c.times=Os(u,c.times.constructor),c.values=Os(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function sb(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let v;if(r<=a.times[0]){const m=h,y=u-h;v=a.values.slice(m,y)}else if(r>=a.times[p]){const m=p*u+h,y=m+u-h;v=a.values.slice(m,y)}else{const m=a.createInterpolant(),y=h,_=u-h;m.evaluate(r),v=m.resultBuffer.slice(y,_)}l==="quaternion"&&new Ct().fromArray(v).normalize().conjugate().toArray(v);const g=c.times.length;for(let m=0;m<g;++m){const y=m*f+d;if(l==="quaternion")Ct.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{const _=f-d*2;for(let x=0;x<_;++x)c.values[y+x]-=v[x]}}}return s.blendMode=Mu,s}const rb={convertArray:Os,isTypedArray:Tm,getKeyframeOrder:Am,sortedArray:Zh,flattenJSON:Vu,subclip:ib,makeClipAdditive:sb};class Qo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Em extends Qo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ns,endingEnd:Ns}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ks:r=e,a=2*t-n;break;case Lo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ks:o=e,l=2*n-t;break;case Lo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*v+.5*p,x=f*g-f*v;for(let I=0;I!==a;++I)r[I]=m*o[h+I]+y*o[c+I]+_*o[l+I]+x*o[u+I];return r}}class Gu extends Qo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Cm extends Qo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ri{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Os(t,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Os(e.times,Array),values:Os(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Em(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Io:t=this.InterpolantFactoryMethodDiscrete;break;case Wl:t=this.InterpolantFactoryMethodLinear;break;case rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Io;case this.InterpolantFactoryMethodLinear:return Wl;case this.InterpolantFactoryMethodSmooth:return rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Tm(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===rl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const v=t[u+p];if(v!==t[d+p]||v!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Wl;class js extends ri{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="bool";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Io;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class Wu extends ri{}Wu.prototype.ValueTypeName="color";class Ho extends ri{}Ho.prototype.ValueTypeName="number";class Rm extends Qo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Ct.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ea extends ri{InterpolantFactoryMethodLinear(e){return new Rm(this.times,this.values,this.getValueSize(),e)}}ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends ri{constructor(e,t,n){super(e,t,n)}}Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Io;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Vo extends ri{}Vo.prototype.ValueTypeName="vector";class Go{constructor(e="",t=-1,n=[],i=lc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ab(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ri.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Am(l);l=Zh(l,1,h),c=Zh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ho(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,v){if(f.length!==0){const g=[],m=[];Vu(f,g,m,p),g.length!==0&&v.push(new u(d,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(const v in f){const g=[],m=[];for(let y=0;y!==d[p].morphTargets.length;++y){const _=d[p];g.push(_.time),m.push(_.morphTarget===v?1:0)}i.push(new Ho(".morphTargetInfluence["+v+"]",g,m))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Vo,f+".position",d,"pos",i),n(ea,f+".quaternion",d,"rot",i),n(Vo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ob(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ho;case"vector":case"vector2":case"vector3":case"vector4":return Vo;case"color":return Wu;case"quaternion":return ea;case"bool":case"boolean":return js;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ab(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ob(s.type);if(s.times===void 0){const t=[],n=[];Vu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ki={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Cc{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const Pm=new Cc;class Un{constructor(e){this.manager=e!==void 0?e:Pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Un.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii={};class lb extends Error{constructor(e,t){super(e),this.response=t}}class Xi extends Un{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:i});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ii[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let v=0;const g=new ReadableStream({start(m){y();function y(){u.read().then(({done:_,value:x})=>{if(_)m.close();else{v+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let C=0,S=h.length;C<S;C++){const E=h[C];E.onProgress&&E.onProgress(I)}m.enqueue(x),y()}},_=>{m.error(_)})}}});return new Response(g)}else throw new lb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ki.add(e,c);const h=Ii[e];delete Ii[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ii[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class cb extends Un{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Xi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Go.parse(e[n]);t.push(i)}return t}}class hb extends Un{constructor(e){super(e)}load(e,t,n,i){const r=this,o=[],a=new yc,l=new Xi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(d){const f=r.parse(d,!0);o[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=Yt),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+v]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=Yt),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class Nr extends Un{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ki.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=No("img");function l(){h(),ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ub extends Un{constructor(e){super(e)}load(e,t,n,i){const r=new Yo;r.colorSpace=Vt;const o=new Nr(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class db extends Un{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new ii,a=new Xi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Xn,o.wrapT=c.wrapT!==void 0?c.wrapT:Xn,o.magFilter=c.magFilter!==void 0?c.magFilter:Yt,o.minFilter=c.minFilter!==void 0?c.minFilter:Yt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=pi),c.mipmapCount===1&&(o.minFilter=Yt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Rc extends Un{constructor(e){super(e)}load(e,t,n,i){const r=new Ot,o=new Nr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class gs extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pc extends gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bh=new Ze,_f=new A,bf=new A;class Xu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_f.setFromMatrixPosition(e.matrixWorld),t.position.copy(_f),bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bf),t.updateMatrixWorld(),bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fb extends Xu{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ir*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yl extends gs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new fb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Mf=new Ze,ro=new A,Mh=new A;class pb extends Xu{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),n.position.copy(ro),Mh.copy(n.position),Mh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mh),n.updateMatrixWorld(),i.makeTranslation(-ro.x,-ro.y,-ro.z),Mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf)}}class ta extends gs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mb extends Xu{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ic extends gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new mb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Im extends gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lm extends gs{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Dm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new A)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class Um extends gs{constructor(e=new Dm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Lc extends Un{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,o=new Xi(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new Ie().setHex(o.value);break;case"v2":i.uniforms[r].value=new de().fromArray(o.value);break;case"v3":i.uniforms[r].value=new A().fromArray(o.value);break;case"v4":i.uniforms[r].value=new yt().fromArray(o.value);break;case"m3":i.uniforms[r].value=new st().fromArray(o.value);break;case"m4":i.uniforms[r].value=new Ze().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new de().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return Lc.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:vm,SpriteMaterial:vc,RawShaderMaterial:Hu,ShaderMaterial:At,PointsMaterial:Uu,MeshPhysicalMaterial:xm,MeshStandardMaterial:Rt,MeshPhongMaterial:ym,MeshToonMaterial:_m,MeshNormalMaterial:bm,MeshLambertMaterial:Mm,MeshDepthMaterial:fc,MeshDistanceMaterial:Iu,MeshBasicMaterial:cn,MeshMatcapMaterial:wm,LineDashedMaterial:Sm,LineBasicMaterial:An,Material:vn};return new t[e]}}class Kh{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Nm extends nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class km extends Un{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Xi(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),y=Tr(g.type,m),_=new gc(y,g.stride);return _.uuid=g.uuid,t[p]=_,_}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const o=e.isInstancedBufferGeometry?new Nm:new nt,a=e.data.index;if(a!==void 0){const f=Tr(a.type,a.array);o.setIndex(new ut(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let v;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);v=new qs(g,p.itemSize,p.offset,p.normalized)}else{const g=Tr(p.type,p.array),m=p.isInstancedBufferAttribute?$s:ut;v=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),o.setAttribute(f,v)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],v=[];for(let g=0,m=p.length;g<m;g++){const y=p[g];let _;if(y.isInterleavedBufferAttribute){const x=i(e.data,y.data);_=new qs(x,y.itemSize,y.offset,y.normalized)}else{const x=Tr(y.type,y.array);_=new ut(x,y.itemSize,y.normalized)}y.name!==void 0&&(_.name=y.name),v.push(_)}o.morphAttributes[f]=v}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const v=u[f];o.addGroup(v.start,v.count,v.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new A;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new mn(f,d.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class gb extends Un{constructor(e){super(e)}load(e,t,n,i){const r=this,o=this.path===""?Kh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Xi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Kh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new Xi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(e,t),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,r,l,a,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(const d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,i,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new cs().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=new xc().fromJSON(e[r],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new km;for(let r=0,o=e.length;r<o;r++){let a;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in yf?a=yf[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Lc;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Go.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function o(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:Tr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Cc(t);r=new Nr(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,v=d.length;p<v;p++){const g=d[p],m=a(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new ii(m.data,m.width,m.height)))}i[u.uuid]=new Fs(f)}else{const f=a(u.url);i[u.uuid]=new Fs(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:Tr(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new Nr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new ii(p.data,p.width,p.height)))}n[l.uuid]=new Fs(h)}else{const h=await r(l.url);n[l.uuid]=new Fs(h)}}}return n}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let h;Array.isArray(c)?(h=new Yo,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new ii:h=new Ot,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,vb)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],wf),h.wrapT=n(a.wrap[1],wf)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,Sf)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,Sf)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(e,t,n,i,r){let o;function a(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,v=d.length;p<v;p++){const g=d[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":o=new mc,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Ie(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new pc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Vs(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new en(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Ko(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new Im(e.color,e.intensity);break;case"DirectionalLight":o=new Ic(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new ta(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new Lm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new Yl(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new Pc(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new Um().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),u=l(e.material),o=new rm(h,u),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),u=l(e.material),o=new je(h,u);break;case"InstancedMesh":h=a(e.geometry),u=l(e.material);const d=e.count,f=e.instanceMatrix,p=e.instanceColor;o=new pn(h,u,d),o.instanceMatrix=new $s(new Float32Array(f.array),16),p!==void 0&&(o.instanceColor=new $s(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=a(e.geometry),u=l(e.material),o=new om(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(v=>{const g=new Tn;g.min.fromArray(v.boxMin),g.max.fromArray(v.boxMax);const m=new mn;return m.radius=v.sphereRadius,m.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:g,sphereInitialized:v.sphereInitialized,sphere:m}}),o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":o=new sm;break;case"Line":o=new ds(a(e.geometry),l(e.material));break;case"LineLoop":o=new am(a(e.geometry),l(e.material));break;case"LineSegments":o=new Si(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new ko(a(e.geometry),l(e.material));break;case"Sprite":o=new Lu(l(e.material));break;case"Group":o=new it;break;case"Bone":o=new Du;break;default:o=new _t}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];o.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],v=o.getObjectByProperty("uuid",p.object);v!==void 0&&o.addLevel(v,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new _t}})}}const vb={UVMapping:tc,CubeReflectionMapping:Vi,CubeRefractionMapping:us,EquirectangularReflectionMapping:Co,EquirectangularRefractionMapping:Ro,CubeUVReflectionMapping:zr},wf={RepeatWrapping:_i,ClampToEdgeWrapping:Xn,MirroredRepeatWrapping:Po},Sf={NearestFilter:hn,NearestMipmapNearestFilter:du,NearestMipmapLinearFilter:Sr,LinearFilter:Yt,LinearMipmapNearestFilter:xo,LinearMipmapLinearFilter:pi};class xb extends Un{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ki.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ki.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ki.add(e,l),r.manager.itemStart(e)}}let Xa;class qu{static getContext(){return Xa===void 0&&(Xa=new(window.AudioContext||window.webkitAudioContext)),Xa}static setContext(e){Xa=e}}class yb extends Un{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Xi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);qu.getContext().decodeAudioData(c,function(u){t(u)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),r.manager.itemError(e)}}}const Tf=new Ze,Af=new Ze,As=new Ze;class _b{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new en,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new en,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,As.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,o=t.near*Math.tan(Hs*t.fov*.5)/t.zoom;let a,l;Af.elements[12]=-i,Tf.elements[12]=i,a=-o*t.aspect+r,l=o*t.aspect+r,As.elements[0]=2*t.near/(l-a),As.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(As),a=-o*t.aspect-r,l=o*t.aspect-r,As.elements[0]=2*t.near/(l-a),As.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(As)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Af),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Tf)}}class Dc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ef();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ef(){return performance.now()}const Es=new A,Cf=new Ct,bb=new A,Cs=new A;class Mb extends _t{constructor(){super(),this.type="AudioListener",this.context=qu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Dc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Es,Cf,bb),Cs.set(0,0,-1).applyQuaternion(Cf),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Es.x,i),t.positionY.linearRampToValueAtTime(Es.y,i),t.positionZ.linearRampToValueAtTime(Es.z,i),t.forwardX.linearRampToValueAtTime(Cs.x,i),t.forwardY.linearRampToValueAtTime(Cs.y,i),t.forwardZ.linearRampToValueAtTime(Cs.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Es.x,Es.y,Es.z),t.setOrientation(Cs.x,Cs.y,Cs.z,n.x,n.y,n.z)}}let Fm=class extends _t{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};const Rs=new A,Rf=new Ct,wb=new A,Ps=new A;class Sb extends Fm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Rs,Rf,wb),Ps.set(0,0,1).applyQuaternion(Rf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Rs.x,n),t.positionY.linearRampToValueAtTime(Rs.y,n),t.positionZ.linearRampToValueAtTime(Rs.z,n),t.orientationX.linearRampToValueAtTime(Ps.x,n),t.orientationY.linearRampToValueAtTime(Ps.y,n),t.orientationZ.linearRampToValueAtTime(Ps.z,n)}else t.setPosition(Rs.x,Rs.y,Rs.z),t.setOrientation(Ps.x,Ps.y,Ps.z)}}class Tb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Om{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Ct.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Ct.multiplyQuaternionsFlat(e,o,e,t,e,n),Ct.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const $u="\\[\\]\\.:\\/",Ab=new RegExp("["+$u+"]","g"),Yu="[^"+$u+"]",Eb="[^"+$u.replace("\\.","")+"]",Cb=/((?:WC+[\/:])*)/.source.replace("WC",Yu),Rb=/(WCOD+)?/.source.replace("WCOD",Eb),Pb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yu),Ib=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yu),Lb=new RegExp("^"+Cb+Rb+Pb+Ib+"$"),Db=["material","materials","bones","map"];class Ub{constructor(e,t,n){const i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ab,"")}static parseTrackName(e){const t=Lb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Db.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=Ub;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Nb{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Bn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(d);for(let v=0,g=o;v!==g;++v)r[v].push(new xt(d,n[v],i[v]))}else if(p<c){a=e[p];const v=--c,g=e[v];t[g.uuid]=p,e[p]=g,t[f]=v,e[v]=d;for(let m=0,y=o;m!==y;++m){const _=r[m],x=_[v];let I=_[p];_[p]=x,I===void 0&&(I=new xt(d,n[m],i[m])),_[v]=I}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,p=i;f!==p;++f){const v=n[f],g=v[u],m=v[h];v[h]=g,v[u]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const d=--r,f=e[d],p=--o,v=e[p];t[f.uuid]=u,e[u]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let g=0,m=i;g!==m;++g){const y=n[g],_=y[d],x=y[p];y[u]=_,y[d]=x,y.pop()}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let p=0,v=i;p!==v;++p){const g=n[p];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,o.push(e),a.push(t),r.push(u);for(let d=h,f=l.length;d!==f;++d){const p=l[d];u[d]=new xt(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class zm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ns,endingEnd:Ns};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Pp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Mu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case lc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Ip;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Rp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ks,i.endingEnd=ks):(e?i.endingStart=this.zeroSlopeAtStart?ks:Ns:i.endingStart=Lo,t?i.endingEnd=this.zeroSlopeAtEnd?ks:Ns:i.endingEnd=Lo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const kb=new Float32Array(1);class Fb extends wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;p=new Om(xt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Gu(new Float32Array(2),new Float32Array(2),1,kb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Go.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=lc),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new zm(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Go.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Zu{constructor(e){this.value=e}clone(){return new Zu(this.value.clone===void 0?this.value:this.value.clone())}}let Ob=0;class zb extends wi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Ob++}),this.name="",this.usage=Do,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class Bb extends gc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Hb{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Pf=new Ze;class Vb{constructor(e,t,n=0,i=1/0){this.ray=new Br(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pf),this}intersectObject(e,t=!0,n=[]){return Jh(e,this,n,t),n.sort(If),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Jh(e[i],this,n,t);return n.sort(If),n}}function If(s,e){return s.distance-e.distance}function Jh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Jh(r[o],e,t,!0)}}class Gb{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wb{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Ku{constructor(e,t,n,i){Ku.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}const Lf=new de;class Xb{constructor(e=new de(1/0,1/0),t=new de(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Lf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Lf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Df=new A,qa=new A;class qb{constructor(e=new A,t=new A){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Df.subVectors(e,this.start),qa.subVectors(this.end,this.start);const n=qa.dot(qa);let r=qa.dot(Df)/n;return t&&(r=Ft(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Uf=new A;class $b extends _t{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new nt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ye(i,3));const r=new An({fog:!1,toneMapped:!1});this.cone=new Si(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Uf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Uf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const is=new A,$a=new Ze,wh=new Ze;class Yb extends Si{constructor(e){const t=Bm(e),n=new nt,i=[],r=[],o=new Ie(0,0,1),a=new Ie(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new Ye(i,3)),n.setAttribute("color",new Ye(r,3));const l=new An({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");wh.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&($a.multiplyMatrices(wh,a.matrixWorld),is.setFromMatrixPosition($a),i.setXYZ(o,is.x,is.y,is.z),$a.multiplyMatrices(wh,a.parent.matrixWorld),is.setFromMatrixPosition($a),i.setXYZ(o+1,is.x,is.y,is.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Bm(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Bm(s.children[t]));return e}class Zb extends je{constructor(e,t,n){const i=new Dn(t,4,2),r=new cn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Kb=new A,Nf=new Ie,kf=new Ie;class Jb extends _t{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new jo(t);i.rotateY(Math.PI*.5),this.material=new cn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new ut(o,3)),this.add(new je(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Nf.copy(this.light.color),kf.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?Nf:kf;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Kb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class jb extends Si{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ie(n),i=new Ie(i);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const v=d===r?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const h=new nt;h.setAttribute("position",new Ye(l,3)),h.setAttribute("color",new Ye(c,3));const u=new An({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Qb extends Si{constructor(e=10,t=16,n=8,i=64,r=4473924,o=8947848){r=new Ie(r),o=new Ie(o);const a=[],l=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,p);const v=u&1?r:o;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let u=0;u<n;u++){const d=u&1?r:o,f=e-e/n*u;for(let p=0;p<i;p++){let v=p/i*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f;a.push(g,0,m),l.push(d.r,d.g,d.b),v=(p+1)/i*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f,a.push(g,0,m),l.push(d.r,d.g,d.b)}}const c=new nt;c.setAttribute("position",new Ye(a,3)),c.setAttribute("color",new Ye(l,3));const h=new An({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ff=new A,Ya=new A,Of=new A;class eM extends _t{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new nt;i.setAttribute("position",new Ye([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new An({fog:!1,toneMapped:!1});this.lightPlane=new ds(i,r),this.add(this.lightPlane),i=new nt,i.setAttribute("position",new Ye([0,0,0,0,0,1],3)),this.targetLine=new ds(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ff.setFromMatrixPosition(this.light.matrixWorld),Ya.setFromMatrixPosition(this.light.target.matrixWorld),Of.subVectors(Ya,Ff),this.lightPlane.lookAt(Ya),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ya),this.targetLine.scale.z=Of.length()}}const Za=new A,Nt=new uc;class tM extends Si{constructor(e){const t=new nt,n=new An({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,v){l(p),l(v)}function l(p){i.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new Ye(i,3)),t.setAttribute("color",new Ye(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new Ie(16755200),h=new Ie(16711680),u=new Ie(43775),d=new Ie(16777215),f=new Ie(3355443);this.setColors(c,h,u,d,f)}setColors(e,t,n,i,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Nt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),zt("c",t,e,Nt,0,0,-1),zt("t",t,e,Nt,0,0,1),zt("n1",t,e,Nt,-n,-i,-1),zt("n2",t,e,Nt,n,-i,-1),zt("n3",t,e,Nt,-n,i,-1),zt("n4",t,e,Nt,n,i,-1),zt("f1",t,e,Nt,-n,-i,1),zt("f2",t,e,Nt,n,-i,1),zt("f3",t,e,Nt,-n,i,1),zt("f4",t,e,Nt,n,i,1),zt("u1",t,e,Nt,n*.7,i*1.1,-1),zt("u2",t,e,Nt,-n*.7,i*1.1,-1),zt("u3",t,e,Nt,0,i*2,-1),zt("cf1",t,e,Nt,-n,0,1),zt("cf2",t,e,Nt,n,0,1),zt("cf3",t,e,Nt,0,-i,1),zt("cf4",t,e,Nt,0,i,1),zt("cn1",t,e,Nt,-n,0,-1),zt("cn2",t,e,Nt,n,0,-1),zt("cn3",t,e,Nt,0,-i,-1),zt("cn4",t,e,Nt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function zt(s,e,t,n,i,r,o){Za.set(i,r,o).unproject(n);const a=e[s];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Za.x,Za.y,Za.z)}}const Ka=new Tn;class nM extends Si{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new nt;r.setIndex(new ut(n,1)),r.setAttribute("position",new ut(i,3)),super(r,new An({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ka.setFromObject(this.object),Ka.isEmpty())return;const t=Ka.min,n=Ka.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class iM extends Si{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new nt;r.setIndex(new ut(n,1)),r.setAttribute("position",new Ye(i,3)),super(r,new An({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class sM extends ds{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new nt;o.setAttribute("position",new Ye(r,3)),o.computeBoundingSphere(),super(o,new An({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new nt;l.setAttribute("position",new Ye(a,3)),l.computeBoundingSphere(),this.add(new je(l,new cn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const zf=new A;let Ja,Sh;class rM extends _t{constructor(e=new A(0,0,1),t=new A(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Ja===void 0&&(Ja=new nt,Ja.setAttribute("position",new Ye([0,0,0,0,1,0],3)),Sh=new Hn(0,.5,1,5,1),Sh.translate(0,-.5,0)),this.position.copy(t),this.line=new ds(Ja,new An({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new je(Sh,new cn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{zf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(zf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class oM extends Si{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new nt;i.setAttribute("position",new Ye(t,3)),i.setAttribute("color",new Ye(n,3));const r=new An({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Ie,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class aM{constructor(){this.type="ShapePath",this.color=new Ie,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Fo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const y=[];for(let _=0,x=m.length;_<x;_++){const I=m[_],C=new cs;C.curves=I.curves,y.push(C)}return y}function n(m,y){const _=y.length;let x=!1;for(let I=_-1,C=0;C<_;I=C++){let S=y[I],E=y[C],w=E.x-S.x,b=E.y-S.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(S=y[C],w=-w,E=y[I],b=-b),m.y<S.y||m.y>E.y)continue;if(m.y===S.y){if(m.x===S.x)return!0}else{const P=b*(m.x-S.x)-w*(m.y-S.y);if(P===0)return!0;if(P<0)continue;x=!x}}else{if(m.y!==S.y)continue;if(E.x<=m.x&&m.x<=S.x||S.x<=m.x&&m.x<=E.x)return!0}}return x}const i=yi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new cs,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],p=0,v;d[p]=void 0,f[p]=[];for(let m=0,y=r.length;m<y;m++)a=r[m],v=a.getPoints(),o=i(v),o=e?!o:o,o?(!h&&d[p]&&p++,d[p]={s:new cs,p:v},d[p].s.curves=a.curves,h&&p++,f[p]=[]):f[p].push({h:a,p:v[0]});if(!d[0])return t(r);if(d.length>1){let m=!1,y=0;for(let _=0,x=d.length;_<x;_++)u[_]=[];for(let _=0,x=d.length;_<x;_++){const I=f[_];for(let C=0;C<I.length;C++){const S=I[C];let E=!0;for(let w=0;w<d.length;w++)n(S.p,d[w].p)&&(_!==w&&y++,E?(E=!1,u[w].push(S)):m=!0);E&&u[_].push(S)}}y>0&&m===!1&&(f=u)}let g;for(let m=0,y=d.length;m<y;m++){l=d[m].s,c.push(l),g=f[m];for(let _=0,x=g.length;_<x;_++)l.holes.push(g[_].h)}return c}}class Hm extends wi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class lM extends Sn{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);const cM=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:hu,AddEquation:os,AddOperation:Ap,AdditiveAnimationBlendMode:Mu,AdditiveBlending:bn,AgXToneMapping:uu,AlphaFormat:gu,AlwaysCompare:Bp,AlwaysDepth:dl,AlwaysStencilFunc:Hh,AmbientLight:Im,AnimationAction:zm,AnimationClip:Go,AnimationLoader:cb,AnimationMixer:Fb,AnimationObjectGroup:Nb,AnimationUtils:rb,ArcCurve:lm,ArrayCamera:tm,ArrowHelper:rM,AttachedBindMode:Bh,Audio:Fm,AudioAnalyser:Tb,AudioContext:qu,AudioListener:Mb,AudioLoader:yb,AxesHelper:oM,BackSide:nn,BasicDepthPacking:Lp,BasicShadowMap:r0,BatchedMesh:om,Bone:Du,BooleanKeyframeTrack:js,Box2:Xb,Box3:Tn,Box3Helper:iM,BoxGeometry:qi,BoxHelper:nM,BufferAttribute:ut,BufferGeometry:nt,BufferGeometryLoader:km,ByteType:fu,Cache:ki,Camera:uc,CameraHelper:tM,CanvasTexture:Vr,CapsuleGeometry:bc,CatmullRomCurve3:Ur,CineonToneMapping:cu,CircleGeometry:Gr,ClampToEdgeWrapping:Xn,Clock:Dc,Color:Ie,ColorKeyframeTrack:Wu,ColorManagement:pt,CompressedArrayTexture:C1,CompressedCubeTexture:R1,CompressedTexture:yc,CompressedTextureLoader:hb,ConeGeometry:Bi,ConstantAlphaFactor:wp,ConstantColorFactor:bp,Controls:Hm,CubeCamera:$p,CubeReflectionMapping:Vi,CubeRefractionMapping:us,CubeTexture:Yo,CubeTextureLoader:ub,CubeUVReflectionMapping:zr,CubicBezierCurve:ku,CubicBezierCurve3:cm,CubicInterpolant:Em,CullFaceBack:Fh,CullFaceFront:op,CullFaceFrontBack:s0,CullFaceNone:rp,Curve:si,CurvePath:um,CustomBlending:ap,CustomToneMapping:Ep,CylinderGeometry:Hn,Cylindrical:Wb,Data3DTexture:Au,DataArrayTexture:cc,DataTexture:ii,DataTextureLoader:db,DataUtils:xg,DecrementStencilOp:y0,DecrementWrapStencilOp:b0,DefaultLoadingManager:Pm,DepthFormat:Bs,DepthStencilFormat:Xs,DepthTexture:Pu,DetachedBindMode:Cp,DirectionalLight:Ic,DirectionalLightHelper:eM,DiscreteInterpolant:Cm,DodecahedronGeometry:Mc,DoubleSide:qt,DstAlphaFactor:gp,DstColorFactor:xp,DynamicCopyUsage:k0,DynamicDrawUsage:P0,DynamicReadUsage:D0,EdgesGeometry:dm,EllipseCurve:_c,EqualCompare:kp,EqualDepth:pl,EqualStencilFunc:T0,EquirectangularReflectionMapping:Co,EquirectangularRefractionMapping:Ro,Euler:St,EventDispatcher:wi,ExtrudeGeometry:Jo,FileLoader:Xi,Float16BufferAttribute:Sg,Float32BufferAttribute:Ye,FloatType:Ln,Fog:pc,FogExp2:Vs,FramebufferTexture:E1,FrontSide:Hi,Frustum:Zo,GLBufferAttribute:Hb,GLSL1:O0,GLSL3:Vh,GreaterCompare:Fp,GreaterDepth:gl,GreaterEqualCompare:zp,GreaterEqualDepth:ml,GreaterEqualStencilFunc:R0,GreaterStencilFunc:E0,GridHelper:jb,Group:it,HalfFloatType:xi,HemisphereLight:Pc,HemisphereLightHelper:Jb,IcosahedronGeometry:Wr,ImageBitmapLoader:xb,ImageLoader:Nr,ImageUtils:Gp,IncrementStencilOp:x0,IncrementWrapStencilOp:_0,InstancedBufferAttribute:$s,InstancedBufferGeometry:Nm,InstancedInterleavedBuffer:Bb,InstancedMesh:pn,Int16BufferAttribute:Mg,Int32BufferAttribute:wg,Int8BufferAttribute:yg,IntType:nc,InterleavedBuffer:gc,InterleavedBufferAttribute:qs,Interpolant:Qo,InterpolateDiscrete:Io,InterpolateLinear:Wl,InterpolateSmooth:rl,InvertStencilOp:M0,KeepStencilOp:Is,KeyframeTrack:ri,LOD:sm,LatheGeometry:$i,Layers:hc,LessCompare:Np,LessDepth:fl,LessEqualCompare:Su,LessEqualDepth:Gs,LessEqualStencilFunc:A0,LessStencilFunc:S0,Light:gs,LightProbe:Um,Line:ds,Line3:qb,LineBasicMaterial:An,LineCurve:Fu,LineCurve3:hm,LineDashedMaterial:Sm,LineLoop:am,LineSegments:Si,LinearFilter:Yt,LinearInterpolant:Gu,LinearMipMapLinearFilter:c0,LinearMipMapNearestFilter:l0,LinearMipmapLinearFilter:pi,LinearMipmapNearestFilter:xo,LinearSRGBColorSpace:Ks,LinearToneMapping:au,LinearTransfer:$o,Loader:Un,LoaderUtils:Kh,LoadingManager:Cc,LoopOnce:Rp,LoopPingPong:Ip,LoopRepeat:Pp,LuminanceAlphaFormat:yu,LuminanceFormat:xu,MOUSE:n0,Material:vn,MaterialLoader:Lc,MathUtils:tn,Matrix2:Ku,Matrix3:st,Matrix4:Ze,MaxEquation:up,Mesh:je,MeshBasicMaterial:cn,MeshDepthMaterial:fc,MeshDistanceMaterial:Iu,MeshLambertMaterial:Mm,MeshMatcapMaterial:wm,MeshNormalMaterial:bm,MeshPhongMaterial:ym,MeshPhysicalMaterial:xm,MeshStandardMaterial:Rt,MeshToonMaterial:_m,MinEquation:hp,MirroredRepeatWrapping:Po,MixOperation:Tp,MultiplyBlending:zh,MultiplyOperation:Xo,NearestFilter:hn,NearestMipMapLinearFilter:a0,NearestMipMapNearestFilter:o0,NearestMipmapLinearFilter:Sr,NearestMipmapNearestFilter:du,NeutralToneMapping:ec,NeverCompare:Up,NeverDepth:ul,NeverStencilFunc:w0,NoBlending:vi,NoColorSpace:Ui,NoToneMapping:Oi,NormalAnimationBlendMode:lc,NormalBlending:zs,NotEqualCompare:Op,NotEqualDepth:vl,NotEqualStencilFunc:C0,NumberKeyframeTrack:Ho,Object3D:_t,ObjectLoader:gb,ObjectSpaceNormalMap:Dp,OctahedronGeometry:jo,OneFactor:fp,OneMinusConstantAlphaFactor:Sp,OneMinusConstantColorFactor:Mp,OneMinusDstAlphaFactor:vp,OneMinusDstColorFactor:yp,OneMinusSrcAlphaFactor:hl,OneMinusSrcColorFactor:mp,OrthographicCamera:Ko,PCFShadowMap:ru,PCFSoftShadowMap:ou,PMREMGenerator:Gh,Path:Fo,PerspectiveCamera:en,Plane:ss,PlaneGeometry:$n,PlaneHelper:sM,PointLight:ta,PointLightHelper:Zb,Points:ko,PointsMaterial:Uu,PolarGridHelper:Qb,PolyhedronGeometry:ms,PositionalAudio:Sb,PropertyBinding:xt,PropertyMixer:Om,QuadraticBezierCurve:Ou,QuadraticBezierCurve3:zu,Quaternion:Ct,QuaternionKeyframeTrack:ea,QuaternionLinearInterpolant:Rm,RED_GREEN_RGTC2_Format:Vl,RED_RGTC1_Format:bu,REVISION:Ql,RGBADepthPacking:wu,RGBAFormat:wn,RGBAIntegerFormat:ac,RGBA_ASTC_10x10_Format:kl,RGBA_ASTC_10x5_Format:Dl,RGBA_ASTC_10x6_Format:Ul,RGBA_ASTC_10x8_Format:Nl,RGBA_ASTC_12x10_Format:Fl,RGBA_ASTC_12x12_Format:Ol,RGBA_ASTC_4x4_Format:Tl,RGBA_ASTC_5x4_Format:Al,RGBA_ASTC_5x5_Format:El,RGBA_ASTC_6x5_Format:Cl,RGBA_ASTC_6x6_Format:Rl,RGBA_ASTC_8x5_Format:Pl,RGBA_ASTC_8x6_Format:Il,RGBA_ASTC_8x8_Format:Ll,RGBA_BPTC_Format:wo,RGBA_ETC2_EAC_Format:Sl,RGBA_PVRTC_2BPPV1_Format:bl,RGBA_PVRTC_4BPPV1_Format:_l,RGBA_S3TC_DXT1_Format:_o,RGBA_S3TC_DXT3_Format:bo,RGBA_S3TC_DXT5_Format:Mo,RGBDepthPacking:p0,RGBFormat:vu,RGBIntegerFormat:h0,RGB_BPTC_SIGNED_Format:zl,RGB_BPTC_UNSIGNED_Format:Bl,RGB_ETC1_Format:Ml,RGB_ETC2_Format:wl,RGB_PVRTC_2BPPV1_Format:yl,RGB_PVRTC_4BPPV1_Format:xl,RGB_S3TC_DXT1_Format:yo,RGDepthPacking:m0,RGFormat:_u,RGIntegerFormat:oc,RawShaderMaterial:Hu,Ray:Br,Raycaster:Vb,RectAreaLight:Lm,RedFormat:rc,RedIntegerFormat:qo,ReinhardToneMapping:lu,RenderTarget:Wp,RepeatWrapping:_i,ReplaceStencilOp:v0,ReverseSubtractEquation:cp,RingGeometry:Sc,SIGNED_RED_GREEN_RGTC2_Format:Gl,SIGNED_RED_RGTC1_Format:Hl,SRGBColorSpace:Vt,SRGBTransfer:Tt,Scene:mc,ShaderChunk:ot,ShaderLib:ei,ShaderMaterial:At,ShadowMaterial:vm,Shape:cs,ShapeGeometry:Tc,ShapePath:aM,ShapeUtils:yi,ShortType:pu,Skeleton:xc,SkeletonHelper:Yb,SkinnedMesh:rm,Source:Fs,Sphere:mn,SphereGeometry:Dn,Spherical:Gb,SphericalHarmonics3:Dm,SplineCurve:Bu,SpotLight:Yl,SpotLightHelper:$b,Sprite:Lu,SpriteMaterial:vc,SrcAlphaFactor:cl,SrcAlphaSaturateFactor:_p,SrcColorFactor:pp,StaticCopyUsage:N0,StaticDrawUsage:Do,StaticReadUsage:L0,StereoCamera:_b,StreamCopyUsage:F0,StreamDrawUsage:I0,StreamReadUsage:U0,StringKeyframeTrack:Qs,SubtractEquation:lp,SubtractiveBlending:Oh,TOUCH:i0,TangentSpaceNormalMap:ps,TetrahedronGeometry:Ac,Texture:Ot,TextureLoader:Rc,TextureUtils:a1,TorusGeometry:Wi,TorusKnotGeometry:Ec,Triangle:In,TriangleFanDrawMode:f0,TriangleStripDrawMode:d0,TrianglesDrawMode:u0,TubeGeometry:Js,UVMapping:tc,Uint16BufferAttribute:Eu,Uint32BufferAttribute:Cu,Uint8BufferAttribute:_g,Uint8ClampedBufferAttribute:bg,Uniform:Zu,UniformsGroup:zb,UniformsLib:He,UniformsUtils:Dr,UnsignedByteType:bi,UnsignedInt248Type:Ws,UnsignedInt5999Type:mu,UnsignedIntType:Gi,UnsignedShort4444Type:ic,UnsignedShort5551Type:sc,UnsignedShortType:Pr,VSMShadowMap:di,Vector2:de,Vector3:A,Vector4:yt,VectorKeyframeTrack:Vo,VideoTexture:A1,WebGL3DRenderTarget:lg,WebGLArrayRenderTarget:ag,WebGLCoordinateSystem:mi,WebGLCubeRenderTarget:Yp,WebGLMultipleRenderTargets:lM,WebGLRenderTarget:Sn,WebGLRenderer:nm,WebGLUtils:em,WebGPUCoordinateSystem:Uo,WireframeGeometry:gm,WrapAroundEnding:Lo,ZeroCurvatureEnding:Ns,ZeroFactor:dp,ZeroSlopeEnding:ks,ZeroStencilOp:g0,createCanvasElement:Vp},Symbol.toStringTag,{value:"Module"}));function ja(s,e){const t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Qt(s,e){const t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,o=i*i*(3-2*i),a=r*r*(3-2*r),l=ja(t,n),c=ja(t+1,n),h=ja(t,n+1),u=ja(t+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+u)*o*a}function Lt(s,e,t=5){let n=0,i=.5;for(let r=0;r<t;r++)n+=i*Qt(s,e),s*=2.03,e*=2.03,i*=.5;return n}function gn(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}const lt={habitat:{x:0,z:0,radius:7,doorAngleDeg:45},solarArray:{x:-15,z:13,cols:4,rows:3},reactor:{x:26,z:-30},cableSpool:{x:28,z:22},cryobot:{x:40,z:24},cave:{x:-50,z:-30,radius:16,mouthAngleDeg:-15},westRidge:{centerX:-104,height:64,eastRun:62,westRun:85,northEnd:-175},massif:{x:-30,z:350,height:170,radius:240},canyon:{centerX:100,depth:38,halfWidth:22,rim:7,farRidge:34,rimBack:12,notchZ:10,walkLimit:10},basePad:{x:12,z:4,inner:40,outer:62},iceArch:{x:60,z:126,span:42,height:28,spanDeg:-26},playRadius:240,spawn:{x:20,z:58,lookAtX:11,lookAtY:17,lookAtZ:-42}},kr=[{name:"Spool Linea",slope:.9,offset:-22,wobbleAmp:5,wobbleFreq:.02,width:7},{name:"Far Linea",slope:-.25,offset:-95,wobbleAmp:10,wobbleFreq:.013,width:12}],Ut={jupiterDir:new A(-.22,.42,-1).normalize(),jupiterAngularDiameterDeg:12.2,ioDir:new A(.05,.6,-1).normalize(),ioAngularDiameterDeg:.6,sunDir:new A(1,.32,-.22).normalize(),sunAngularDiameterDeg:.1,auroraCenterDir:new A(-1,0,-.35).normalize()},It=(s,e,t)=>{const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)};function jt(s,e,t=4){const n=1-Math.abs(2*Lt(s,e,t)-1);return n*n}function hM(s,e,t){return Math.abs(t-(s.slope*e+s.offset+s.wobbleAmp*Math.sin(e*s.wobbleFreq)))}function ht(s,e,t=!0){let n=1.3*Lt(s/70,e/70)-.65;n+=.5*Lt(s/19+4.2,e/23+1.7,3)-.25;const i=Math.hypot(s,e);n+=16*It(.6,.9,Lt(s/210+40,e/210+17,3))*It(230,420,i);const r=lt.westRidge,o=r.centerX+12*Math.sin(e/70),a=s-o,l=It(r.northEnd,r.northEnd+80,e)*(1-It(230,330,e)),c=Math.abs(a)/(a>0?r.eastRun:r.westRun);let h=0;if(c<1.25&&l>0){const U=It(1.25,.1,c);h=U*U*l;const D=jt(s/95+3.3,e/62+9.1,4),F=jt(s/44+7.2,e/44+1.4,3),z=.66+.6*Lt(e/55,3.1);n+=r.height*l*z*(U*U*(.36+.64*D)+.36*Math.exp(-c*c*7))*(.9+.2*F),n+=l*U*(8*jt(s/21+1.7,e/21+5.3,3)+2.6*jt(s/8.5+4,e/8.5+2,2)),n+=l*27*U*(1-.55*U)*(jt(s/54+5.1,e/22+2.7,4)-.4)}n+=.7*r.height*Math.exp(-Math.pow((a+80)/30,2))*l*(.6+.8*Lt(e/60+11,5.2));{const U=lt.cave,D=Math.pow(s-(U.x-15),2)+Math.pow(e-U.z,2);D<60*60&&(n+=23*Math.exp(-D/(23*23))*It(U.x+4,U.x-10,s)*(.8+.4*jt(s/14+2,e/14+7,2)));for(const F of[-1,1]){const z=U.z+F*27+3*Math.sin(s/9+F),k=e-z;if(Math.abs(k)<16&&s>U.x-30&&s<U.x+30){const B=It(U.x+27,U.x+8,s)*It(U.x-30,U.x-12,s),X=Math.exp(-Math.pow(k/4.2,2));n+=B*X*(3+7*jt(s/10+3+F,e/10+6,3))*(.75+.5*jt(s/4.5,e/4.5+2*F,2))}}}const u=lt.massif,d=Math.hypot((s-u.x)*.8,e-u.z)/u.radius;let f=0;if(d<1.25){f=It(1.25,.12,d);const U=jt(s/150+3,e/150+9,4),D=jt(s/52+7,e/52+1,3);n+=u.height*(f*f*(.38+.62*U)+.42*Math.exp(-d*d*7))*(.9+.2*D),n+=f*(11*jt(s/24+1,e/24+5,3)+3.5*jt(s/9,e/9+2,2))}const p=lt.canyon,v=p.centerX+14*Math.sin(e/130),m=Math.abs(s-v)+5*(Lt(s/16,e/16,3)-.47);let y=It(p.halfWidth+6,p.halfWidth-8,m);const _=y*3,x=Math.floor(_);let I=_-x;if(I=I*I*(3-2*I),I=I*I*(3-2*I),y=y*.3+(x+I)/3*.7,n-=p.depth*y,s>v)n+=p.rim*Math.exp(-Math.pow((m-p.halfWidth-8)/6,2))*(.75+.5*Lt(e/40+3,s/40));else{const U=s-(v-p.halfWidth-p.rimBack);if(U>-34&&U<18){const D=Math.exp(-Math.pow(U/(U<0?10:6),2)),F=jt(e/34+4.3,s/80+2.1,3),z=It(.3,.55,Lt(e/75+13.7,2.2,3)),k=1-Math.exp(-Math.pow((e-p.notchZ)/13,2)),B=(3+9.5*F*F)*(.3+.7*z)*k;n+=D*B*(.8+.4*jt(s/13+3,e/13+8,3)),n+=D*k*(3*jt(s/6.5+1,e/6.5+5,2)-1)}}n+=2.2*Lt(s/9,e/9,3)*y*y*y;const C=s-v-p.halfWidth-24;if(C>-40&&C<60){const U=Math.exp(-Math.pow(C/15,2)),D=.4+.95*jt(e/45+4,s/45+2,3);n+=p.farRidge*U*D*(.65+.55*Lt(e/120+9,1.3)),n+=U*6*jt(s/12+5,e/12+1,2)}const S=It(900,1700,i);if(S>0){const U=jt(s/190+2,e/190+7,4);n+=S*(60*Lt(s/260+5,e/260)+110*U*U)*(.35+.65*It(.35,.6,Lt(s/520+1,e/520+4,3)))}{const U=It(50,200,Math.hypot(s-12,e-4)),D=(2.6+3.4*U)*(Lt(s/36+13,e/36+5,3)-.45),F=7*U*It(.42,.75,Lt(s/110+31,e/110+17,3)),z=Math.exp(-Math.pow((Lt(s/17+2,e/23+8,2)-.5)/.07,2)),k=It(.45,.7,Lt(s/90+21,e/90+3,2)),B=Math.exp(-Math.pow((Lt(s/60+6,e/26+2,3)-.5)/.05,2));if(n+=D+F+(1.6+1.6*U)*z*k+4.5*U*B*k,t){const X=Math.max(Math.abs(s-12)/152,Math.abs(e+20)/170),Y=1-It(.72,.93,X);if(Y>0){const ne=Lt(s/9.5+3.7,e/12+8.1,2)-.375,ue=.35+.65*It(.25,.5,Lt(s/47+9,e/47+14,2));n+=1.15*ne*ue*Y}}}const E=lt.basePad,w=It(E.outer,E.inner,Math.hypot((s-E.x)*(s<E.x?1.38:1),e-E.z));n=n*(1-w);const b=lt.cave,P=It(b.radius+3.5,b.radius+.2,Math.hypot(s-b.x,e-b.z));n=n*(1-P);const N=(1-It(.02,.2,h))*(1-It(0,.15,y))*(1-P)*(1-S)*(1-It(.05,.3,f));if(N>0)for(let U=0;U<kr.length;U++){const D=kr[U],F=hM(D,s,e),z=D.width;if(F<z*2.4){const k=z/7,B=-.5*k*Math.exp(-Math.pow(F/(z*.42),2)),X=(.22+.4*Lt(s/15+U*7,e/15,2))*k*Math.exp(-Math.pow((F-z*.95)/(z*.42),2));n+=(B+X)*N}}return n}const gi=(()=>{const s=new Cc,e=new Rc(s),t="./textures/",n=(l,c)=>{const h=e.load(t+l);return h.wrapS=h.wrapT=_i,h.anisotropy=8,c&&(h.colorSpace=Vt),h},i={uTexOn:{value:0},uIceAway:{value:new A(-Ut.sunDir.x,0,-Ut.sunDir.z).normalize()},uIceDay:{value:1},tFrostC:{value:n("frost/color.jpg",!0)},tFrostN:{value:n("frost/normal.jpg",!1)},tIceC:{value:n("ice-bare/color.jpg",!0)},tIceN:{value:n("ice-bare/normal.jpg",!1)},tCrackC:{value:n("ice-cracked/color.jpg",!0)},tCrackN:{value:n("ice-cracked/normal.jpg",!1)},tSaltC:{value:n("salt/color.jpg",!0)},tSaltN:{value:n("salt/normal.jpg",!1)}},r=new ii(new Uint8Array([128,128,128,255]),1,1);r.needsUpdate=!0,i.tCliff={value:r};const o=new Nr(s),a={};return o.load(t+"cliff/normal.jpg",l=>{a.normal=l}),o.load(t+"cliff/height.jpg",l=>{a.height=l}),s.onLoad=()=>{if(a.normal&&a.height){const l=a.normal.width,c=document.createElement("canvas");c.width=c.height=l;const h=c.getContext("2d",{willReadFrequently:!0});h.drawImage(a.height,0,0,l,l);const u=h.getImageData(0,0,l,l).data;h.drawImage(a.normal,0,0,l,l);const d=h.getImageData(0,0,l,l);for(let p=0;p<u.length;p+=4)d.data[p+2]=u[p];h.putImageData(d,0,0);const f=new Vr(c);f.wrapS=f.wrapT=_i,f.anisotropy=8,i.tCliff.value=f}i.uTexOn.value=1},i})(),oo=s=>Number.isInteger(s)?s.toFixed(1):String(s),uM=kr.map(s=>{const e=oo(s.width/7);return`{
    float ld = abs(p.y - (${oo(s.slope)}*p.x + (${oo(s.offset)}) + ${oo(s.wobbleAmp)}*sin(p.x*${oo(s.wobbleFreq)})));
    linea = max(linea, 1.0 - smoothstep(0.5*${e}, 2.4*${e}*rag, ld));
    core = max(core, 1.0 - smoothstep(0.25*${e}, 1.0*${e}, ld));
  }`}).join(`
`),dM=`
varying vec3 vWPos;
varying vec3 vWNormal;
vec3 iceCol; float iceGloss; float iceFace; float iceSalt; float iceH; vec2 iceTilt;
vec3 iceDetailN;   // world-space bend of the surface from the photo textures
float iceSnow;     // 1 = frost-covered, 0 = bare ice
float iceAO;       // 1 = open surface, lower = down in a hollow (less light reaches it)
uniform float uTexOn;
uniform vec3 uIceAway;
uniform float uIceDay;
uniform sampler2D tFrostC, tFrostN, tIceC, tIceN, tCrackC, tCrackN, tSaltC, tSaltN, tCliff;
// Cliff relief: xy = which way the surface leans, z = how far it sticks out (0..1).
vec3 tCliffAt(vec2 uv){ vec3 c = texture(tCliff, uv).rgb; return vec3((c.xy*2.0 - 1.0) * uTexOn, c.z); }
float tLumOf(vec3 c){ return dot(c, vec3(0.3, 0.59, 0.11)); }
// A texture's light-and-dark pattern, as "times its own average" (1 = average).
// Only the pattern is used, so the ice keeps its own colours. If the texture
// hasn't loaded yet both reads are 0 and this gives 1 (no change).
float tDetail(sampler2D t, vec2 uv){
  return (tLumOf(texture(t, uv).rgb) + 0.02) / (tLumOf(textureLod(t, vec2(0.5), 10.0).rgb) + 0.02);
}
// A normal map's sideways tilt (0 until loaded).
vec2 tTilt(sampler2D t, vec2 uv){ return (texture(t, uv).xy*2.0 - 1.0) * uTexOn; }
float iHash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
vec2 iHash2(vec2 p){ p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3))); return fract(sin(p)*43758.5453); }
// Smooth noise. The quintic curve keeps its slope smooth across grid lines,
// so no square grid shows when it is used for relief.
float iNoise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*f*(f*(f*6.-15.)+10.);
  return mix(mix(iHash(i),iHash(i+vec2(1,0)),u.x), mix(iHash(i+vec2(0,1)),iHash(i+vec2(1,1)),u.x), u.y); }
const mat2 iRot = mat2(0.8, -0.6, 0.6, 0.8);   // each layer is turned, so layers never line up
float iFbm(vec2 p){ float v=0., a=.5; for(int i=0;i<4;i++){ v+=a*iNoise(p); p = iRot*p*2.03 + 7.3; a*=.5; } return v; }
// Distance to the nearest cell edge, plus a random number per cell.
float iVoronoi(vec2 x, out float cellId, out vec2 edgeDir){
  vec2 n=floor(x), f=fract(x); vec2 mg, mr; float md=8.;
  for(int j=-1;j<=1;j++) for(int i=-1;i<=1;i++){ vec2 g=vec2(float(i),float(j)); vec2 o=iHash2(n+g); vec2 r=g+o-f; float d=dot(r,r); if(d<md){ md=d; mr=r; mg=g; } }
  cellId = iHash(n+mg);
  edgeDir = vec2(1.0, 0.0);   // which way the nearest cell edge lies
  md=8.; float sm=8.;
  for(int j=-2;j<=2;j++) for(int i=-2;i<=2;i++){ vec2 g=mg+vec2(float(i),float(j)); vec2 o=iHash2(n+g); vec2 r=g+o-f;
    if(dot(mr-r,mr-r)>0.00001){ vec2 en = normalize(r-mr); float dd = dot(0.5*(mr+r), en); if(dd<md){ md=dd; edgeDir=en; }
      // Smooth minimum: where two edges meet, the distance blends instead
      // of switching, so every plate gets rounded corners, not sharp points.
      float hk = max(0.14 - abs(sm - dd), 0.0) / 0.14; sm = min(sm, dd) - hk*hk*0.14*0.25; } }
  return max(sm, 0.0);
}
// Steepness of a groove wall, for a groove "w" wide, at distance e from its
// middle (the slope of a smoothstep).
float iGroove(float e, float w){ float t = clamp(e/w, 0.0, 1.0); return 6.0*t*(1.0 - t)/w; }
// A crisp line where value v crosses 0, "w" wide, antialiased at any distance.
float iLine(float v, float w){ float a = fwidth(v); return 1.0 - smoothstep(w, w + a*1.5, abs(v)); }
// How much a pattern of this size can still be shown before it turns to
// pixel noise (1 = fine, 0 = too small on screen).
float iShow(vec2 q){ vec2 w = fwidth(q); return 1.0 - smoothstep(0.12, 0.45, max(w.x, w.y)); }

// Wrinkled, creased noise (0..1): the look of worn ice and rock.
float iRidge(vec2 p){ float v=0., a=.55; for(int i=0;i<3;i++){ float n = 1.0 - abs(2.0*iNoise(p) - 1.0); v += a*n*n; p = iRot*p*2.17 + 13.1; a *= .5; } return v; }

// The big shapes on a steep face, seen square-on from one side:
// x = buttresses (~25 m), y = creases (~5 m), z = grooves running down.
vec3 iFaceForms(vec2 q){
  vec2 qs = vec2(q.x, q.y*0.5);   // squashed, so features run down the slope
  float sB = iShow(qs*0.19);
  float r1 = iRidge(qs*0.04 + 5.0);
  float r2 = iRidge(qs*0.19 + 9.0) * sB;
  float fl = mix(0.5, iNoise(vec2(q.x*0.55 + 3.0*r1, q.y*0.05)), sB);
  return vec3(r1, r2, fl);
}

void iceSurface(vec3 wp, vec3 wn, float dist){
  vec2 p = wp.xz;
  vec3 salt = vec3(0.84,0.26,0.13);
  vec3 saltDark = vec3(0.45,0.09,0.06);
  float nearK = 1.0 - smoothstep(18.0, 60.0, dist);
  float midK = 1.0 - smoothstep(220.0, 520.0, dist);

  float steep = 1.0 - clamp(wn.y, 0.0, 1.0);
  float face = smoothstep(0.2, 0.5, steep);
  float flat_ = 1.0 - face;

  // Photo-texture detail. Read here, outside the branches below, so the
  // GPU can pick the right sharpness for every pixel.
  // Ground: seen from above. Frost at two sizes, turned against each other,
  // so its repeat doesn't show.
  vec2 uvF1 = p / 2.6, uvF2 = (iRot * p) / 11.0, uvK = p / 4.2;
  float frostG = mix(tDetail(tFrostC, uvF1), tDetail(tFrostC, uvF2), 0.45);
  vec2 frostGN = tTilt(tFrostN, uvF1) + 0.6*tTilt(tFrostN, uvF2);
  float crackG = tDetail(tCrackC, uvK);
  vec2 crackGN = tTilt(tCrackN, uvK);
  // Steep faces: seen from the side, blended between the two wall
  // directions; stretched downhill so the grain runs down the slope.
  vec2 qX = vec2(wp.z, wp.y*0.5), qZ = vec2(wp.x, wp.y*0.5);
  float wX = wn.x*wn.x, wZ = wn.z*wn.z; float wS = wX + wZ + 1e-4; wX /= wS; wZ /= wS;
  float frostW = tDetail(tFrostC, qX/3.0)*wX + tDetail(tFrostC, qZ/3.0)*wZ;
  vec2 fnX = tTilt(tFrostN, qX/3.0), fnZ = tTilt(tFrostN, qZ/3.0);
  vec3 frostWN = wX*vec3(0.0, 0.5*fnX.y, fnX.x) + wZ*vec3(fnZ.x, 0.5*fnZ.y, 0.0);
  // The cliff relief, at two sizes. Big: layered ledges and blocks (one
  // repeat is about 36 m on the mountain, smaller on smaller things).
  // Small: the same relief turned on its side, so its grooves run down the
  // slope, about 9 m a repeat. Each is nudged by slow noise so the repeat
  // doesn't show across a whole mountainside.
  vec2 fX = vec2(wp.z, wp.y) * ICE_FACE_SCALE, fZ = vec2(wp.x, wp.y) * ICE_FACE_SCALE;
  vec2 nudge = 0.22*vec2(iNoise(fX*0.017 + 3.0), iNoise(fZ*0.017 + 11.0));
  vec3 cXa = tCliffAt(fX.yx/30.0 + nudge), cZa = tCliffAt(fZ.yx/30.0 + nudge.yx);
  vec3 cXb = tCliffAt(fX/11.0 + 0.37 + nudge.yx), cZb = tCliffAt(fZ/11.0 + 0.61 + nudge);
  // Close up, a third, fine layer (about 3 m a repeat): chips and cracks
  // you only see when you walk right up to a wall.
  float fineFace = 1.0 - smoothstep(22.0, 70.0, dist);
  vec3 cXc = tCliffAt(fX/3.1 + 0.19), cZc = tCliffAt(fZ/3.1 + 0.83);
  float cliffC = cXc.z*wX + cZc.z*wZ;
  float cliffA = cXa.z*wX + cZa.z*wZ;   // big flutes and blocks, 0 (deep) .. 1 (sticking out)
  float cliffB = cXb.z*wX + cZb.z*wZ;   // small ledges and chips
  vec3 cliffN = wX*(1.8*vec3(0.0, cXa.x, cXa.y) + 1.0*vec3(0.0, cXb.y, cXb.x))
              + wZ*(1.8*vec3(cZa.y, cZa.x, 0.0) + 1.0*vec3(cZb.x, cZb.y, 0.0));
  cliffN += fineFace * 0.9 * (wX*vec3(0.0, cXc.y, cXc.x) + wZ*vec3(cZc.x, cZc.y, 0.0));
  // The same relief seen from above, large and soft: gentle lumps and
  // hollows in the frost on open ground.
  vec3 cTop = tCliffAt(p/15.0 + nudge);
  // Salt: the stone texture's own colour and grain (Cyril: the plain colour
  // looked like a marker stroke). Two sizes, so the grain shows up close
  // without the repeat showing further off. Contrast raised, and pushed
  // from ochre toward Europa's red-brown.
  vec2 uvS1 = p / 2.8, uvS2 = (iRot * p) / 9.0;
  vec3 saltRaw = mix(texture(tSaltC, uvS1).rgb, texture(tSaltC, uvS2).rgb, 0.4);
  float saltAvg = tLumOf(textureLod(tSaltC, vec2(0.5), 10.0).rgb) + 1e-3;
  vec3 saltRel = saltRaw / saltAvg;
  float saltL = mix(1.0, tLumOf(saltRel), uTexOn);   // the stone's light and dark, 1 = average
  saltRel = mix(vec3(tLumOf(saltRel)), saltRel, 0.55); // calm the texture's yellow-green
  vec3 saltTex = pow(saltRel, vec3(1.5)) * vec3(0.88, 0.5, 0.36);
  salt = mix(salt, saltTex * 0.5, uTexOn);
  saltDark = mix(saltDark, saltTex * 0.2, uTexOn);
  vec2 saltN = tTilt(tSaltN, uvS1) + 0.5*tTilt(tSaltN, uvS2);
  vec3 gN = vec3(0.0), fN = vec3(0.0);
  float mid = iFbm(p*0.05 + 7.0);
  float grainA = iNoise(p*3.3)*iShow(p*3.3);
  float grain = grainA;

  vec3 gCol = vec3(0.9); float gH = 0.0; float gSalt = 0.0; float gDark = 0.0; float gGloss = 0.0; vec2 gTilt = vec2(0.0);
  float gSaltyDark = 0.0;   // how much of the dark (crevice) colour is salt rather than shadowed ice
  if (flat_ > 0.002) {
    float big = iFbm(p*0.012);
    float plateId, chipId;
    // Bend the plate pattern so the plates look broken, not like honeycomb.
    vec2 warp = vec2(iNoise(p*0.03), iNoise(p*0.03 + 17.0)) - 0.5;
    vec2 warp2 = vec2(iNoise(p*0.11 + 5.0), iNoise(p*0.11 + 23.0)) - 0.5;
    vec2 pa = (p + 34.0*warp + 7.0*warp2)*0.022 + 3.1;    // big plates, ~45 m
    vec2 pb = (p + 12.0*warp.yx + 4.0*warp2.yx)*0.09;     // small plates, ~11 m
    vec2 nA = vec2(1.0, 0.0), nB = vec2(1.0, 0.0), nC = vec2(1.0, 0.0);
    // Drifts of frost bury the small cracks in places, so the ground isn't
    // the same everywhere.
    float plain = smoothstep(0.93, 0.99, wn.y) * (1.0 - smoothstep(2.5, 8.0, wp.y));
    float cover = max(smoothstep(0.45, 0.62, iFbm(p*0.035 + 50.0)), 1.0 - plain);
    float showB = iShow(pb) * midK * (1.0 - 0.85*cover) * min(1.0, plain*4.0);
    // The plate patterns are the costliest part of this shader, so each is
    // only worked out where it can actually be seen: big plates on level
    // ground, small ones where they are large enough on screen. Elsewhere
    // (slopes, slabs, far ground) they are skipped.
    float e2 = 1.0, e = 1.0; plateId = 0.5; chipId = 0.5;
    if (plain > 0.002) e2 = iVoronoi(pa, plateId, nA);
    if (showB > 0.004) e = iVoronoi(pb, chipId, nB);

    // Every plate gets its own pastel tint.
    gCol = mix(vec3(0.84,0.93,1.00), vec3(0.98,0.96,0.93), smoothstep(0.3, 0.7, big));
    gCol = mix(gCol, vec3(1.00,0.87,0.84), 0.2*smoothstep(0.5, 0.8, mid));
    gCol = mix(gCol, vec3(0.66,0.85,0.99), 0.55*plateId*plateId);
    gCol = mix(gCol, vec3(0.85,0.83,0.99), 0.4*fract(plateId*7.3)*fract(plateId*7.3));
    gCol *= 0.84 + 0.16*mix(chipId, 0.7, cover);
    gCol = mix(gCol, vec3(0.94,0.97,1.00), 0.55*cover);
    gCol = mix(vec3(0.93,0.96,1.00)*(0.92 + 0.1*iRidge(p*0.3 + 2.0)), gCol, plain);
    gCol *= 1.0 + 0.12*nearK*(grain - 0.5);
    // Photo detail: frost powder where frost lies (drifts and gentle slopes),
    // cracked ice on the open plates.
    float frostAmt = max(cover, 1.0 - plain);
    gCol *= mix(1.0, mix(crackG, frostG, frostAmt), 0.85);
    vec2 gN2 = mix(crackGN*0.9, frostGN*1.25, frostAmt);
    // Soft lumps and hollows in the frost (real surface directions, so the
    // low Sun lights one side of each lump and shades the other).
    gN2 += cTop.xy * (0.8 + 0.4*frostAmt);
    gCol *= 0.88 + 0.2*cTop.z;
    gN = vec3(gN2.x, 0.0, gN2.y);

    // Seams between big plates (deep red, cut in), cracks between small
    // plates, and hairline veins wandering across them.
    float seamW = 0.004 + 0.011*iNoise(p*0.09 + 60.0);   // seams widen and pinch (about 0.4 to 1.3 m)
    // Ragged, broken edges that follow the stone's grain, not a clean stroke.
    seamW *= clamp(0.35 + 0.75*saltL + 0.3*(iNoise(p*1.7 + 3.0) - 0.5), 0.2, 1.8);
    float seam = (1.0 - smoothstep(seamW, seamW + fwidth(e2)*1.5, e2)) * plain;
    float seamHalo = (1.0 - smoothstep(0.0, 0.07, e2)) * plain;
    float crack = (1.0 - smoothstep(0.02, 0.02 + fwidth(e)*1.5, e)) * showB;
    // Up close, a third layer: fine angular cracks, ~3 m apart.
    float fineKRaw = 1.0 - smoothstep(40.0, 90.0, dist);
    float fineK = fineKRaw * (1.0 - cover);
    float vein = 0.0; float fineId = 0.0; float e3 = 1.0;
    if (fineK > 0.002) {
      vec2 warp3 = vec2(iNoise(p*0.42 + 9.0), iNoise(p*0.42 + 31.0)) - 0.5;
      vec2 pc = (p + 5.0*warp2 + 2.6*warp3)*0.3 + 11.0;   // bent so the cracks don't look like tiles
      e3 = iVoronoi(pc, fineId, nC);
      vein = (1.0 - smoothstep(0.018, 0.018 + fwidth(e3)*1.5, e3)) * fineK * iShow(pc);
    }
    float linea = 0.0; float core = 0.0;
    float rag = 0.75 + 0.5*iNoise(p*0.35);
    ${uM}
    linea = linea * linea * (0.55 + 0.45*smoothstep(0.3, 0.7, mid));
    // Salt is rare (Cyril: the whole floor was stripes). It lies along the
    // two big red lines and in a few patches of plate seams; everywhere else
    // a seam or crack is just a dark-blue crevice in clean ice.
    float saltySeam = smoothstep(0.6, 0.7, iFbm(p*0.006 + 41.0));
    float stain = (0.15 + 0.6*smoothstep(0.4, 0.75, mid)) * seamHalo * seamHalo * (0.6 + 0.4*iNoise(p*0.8 + 12.0)) * saltySeam;
    gSalt = clamp(stain*0.35 + linea*0.85, 0.0, 1.0);
    float seamCore = (1.0 - smoothstep(seamW*0.35, seamW*0.35 + fwidth(e2)*1.5, e2)) * plain;
    gSalt = max(gSalt, seam*0.9*saltySeam);
    gDark = clamp(core*0.9 + seamCore*0.7 + crack*0.4 + vein*0.25, 0.0, 1.0);
    gSaltyDark = max(core, saltySeam * max(seamCore, seam));
    // The stone's bumps, wherever there is salt.
    gN += vec3(saltN.x, 0.0, saltN.y) * 0.9 * max(gSalt, core);
    gCol *= 0.93 + 0.14*fineId*fineK;

    // Relief: plates tilt a little, seams and cracks are cut in.
    // Each plate's tilt is measured from the plate's own middle, so the
    // numbers stay small and the lighting stays clean.
    vec2 tiltA = (iHash2(vec2(plateId*37.1, plateId*11.7)) - 0.5) * 0.10;
    vec2 tiltB = (iHash2(vec2(chipId*53.9, chipId*29.3)) - 0.5) * 0.12;
    vec2 tiltC = (iHash2(vec2(fineId*71.3, fineId*13.9)) - 0.5) * 0.10;
    // The tilt of each plate is passed on exactly (as a slope), not measured
    // from pixel to pixel, so plates shade cleanly.
    gTilt = tiltA*plain + tiltB*showB + tiltC*fineK;
    // Grooves along every seam and crack, also as exact slopes: the ground
    // drops toward the nearest edge.
    float wA = seamW + 0.035;
    gTilt -= nA * (1.0*iGroove(e2, wA)*0.022*plain);
    gTilt -= nB * (0.3*iGroove(e, 0.05)*0.09*showB);
    gTilt -= nC * (0.05*iGroove(e3, 0.06)*0.3*fineK);
    gH = 0.0
       + (1.0 - plain)*(0.9*iRidge(p*0.06 + 8.0) + 0.3*iRidge(p*0.3 + 2.0)*iShow(p*0.3))
       - 0.3*core
       + nearK*0.012*grainA
       + 0.22*iFbm(p*0.3 + 70.0) + 0.12*cover*iRidge(p*0.5 + 4.0)*fineKRaw;

    // Smooth "window" ice here and there: glossier, a touch more aqua.
    float window = smoothstep(0.56, 0.68, iFbm(p*0.021 + 31.0));
    gCol = mix(gCol, vec3(0.66,0.88,0.95), 0.4*window);
    gGloss = 0.1 + 0.65*window;   // frost is matte powder; only window ice shines
  }

  vec3 fCol = vec3(0.8); float fH = 0.0; float fDark = 0.0; float fSalt = 0.0; float fSnow = 0.0; float fAO = 1.0;
  if (face > 0.002) {
    // Look at the face square-on: pick the wall plane it is closest to.
    // Small objects use a smaller pattern (ICE_FACE_SCALE), so they get the
    // same buttresses, creases and frost as the big mountain, at their size.
    vec2 q = (abs(wn.x) > abs(wn.z) ? vec2(wp.z, wp.y) : vec2(wp.x, wp.y)) * ICE_FACE_SCALE;
    // Features run down the slope, as if slowly worn: squash the height.
    vec2 qs = vec2(q.x, q.y*0.5);
    // Worked out from both wall directions and blended, so no seam shows
    // where a face turns from one to the other.
    vec3 forms = vec3(0.0);
    if (wX > 0.02) forms += wX * iFaceForms(fX);
    if (wZ > 0.02) forms += wZ * iFaceForms(fZ);
    forms /= max(step(0.02, wX)*wX + step(0.02, wZ)*wZ, 1e-3);
    float r1 = forms.x, r2 = forms.y, flute = forms.z;
    // Only the big, smooth forms go through the height bump; ledges, chips
    // and grooves come from the cliff relief, as exact surface directions.
    fH = 2.4*r1 + 0.6*r2 + 0.4*flute;
    // Which way the surface REALLY faces here, ledges and hollows included.
    vec3 bend = cliffN - wn*dot(cliffN, wn);
    vec3 nP = normalize(wn + bend);
    float relief = 0.62*cliffA + 0.38*cliffB;                // 0 = deep in a hollow, 1 = sticking out
    relief = mix(relief, 0.75*relief + 0.25*cliffC, fineFace);
    // Frost settles on whatever faces up: ledge tops, shelves, gentle
    // shoulders. Undersides, steep chips and hollows stay bare. Because it
    // follows the same relief the light does, a white ledge is also lit like
    // a ledge, which is what makes it read as solid instead of painted.
    float snowV = ICE_FROST + 0.68*wn.y + 0.34*nP.y + ICE_PATCH*(0.42*(r1 - 0.4) + 0.26*(r2 - 0.25) - 0.1*(flute - 0.5)) + 0.24*(relief - 0.5);
    snowV += 0.12*fineFace*(cliffC - 0.5);
    fSnow = smoothstep(0.47, 0.52, snowV);
    // Bare ice is DARK deep blue (the frost is what's white): the strong
    // light-against-dark is most of what gives the faces their depth.
    vec3 bare = mix(vec3(0.07,0.17,0.42), vec3(0.26,0.48,0.80), smoothstep(0.2, 0.85, relief));
    bare *= 0.85 + 0.3*flute;
    bare = mix(bare, vec3(0.30,0.32,0.66), 0.22*iNoise(q*0.03 + 7.0));
    vec3 snowC = vec3(0.93,0.96,1.00) * (0.86 + 0.14*relief);
    snowC *= mix(1.0, frostW, 0.5);
    // The frost has thickness: the bare ice right beside it sits in its
    // shade, and its own edge catches a little extra light.
    bare *= 1.0 - 0.3*smoothstep(0.36, 0.47, snowV);
    snowC *= 1.0 + 0.07*(1.0 - smoothstep(0.52, 0.62, snowV));
    fCol = mix(bare, snowC, fSnow);
    // Hollows and the foot of every ledge gather shade.
    float cavity = smoothstep(0.62, 0.18, relief);
    fAO = 1.0 - 0.6*cavity;
    fCol *= 1.0 - 0.3*cavity;
    fCol *= 0.82 + 0.3*clamp(0.6*r1 + 0.4*r2, 0.0, 1.0);
    fCol *= mix(vec3(0.80,0.90,1.04), vec3(1.0), smoothstep(-30.0, 60.0, wp.y));
    fCol *= 1.0 + 0.12*nearK*(grain - 0.5);
    // Rust: stains that run down the bare ice and gather in its creases.
    float streak = smoothstep(0.55, 0.9, iNoise(vec2(q.x*0.2 + 2.0*iNoise(p*0.04), q.y*0.016)));
    float crease = smoothstep(0.45, 0.1, r2) * smoothstep(0.5, 0.75, iNoise(q*0.09 + 30.0));
    fSalt = clamp(streak*0.42 + crease*0.35, 0.0, 1.0) * (1.0 - 0.85*fSnow) * ICE_RUST;
    fDark = clamp(streak*crease*0.5, 0.0, 1.0) * (1.0 - fSnow) * ICE_RUST;
    fN = bend + frostWN*1.1*fSnow;
  }

  vec3 col = mix(gCol, fCol, face);
  float saltAmt = mix(gSalt, fSalt, face);
  float darkAmt = mix(gDark, fDark, face);
  col = mix(col, salt, saltAmt);
  vec3 crevice = vec3(0.26, 0.40, 0.64);   // a clean crack: deep blue ice in shadow
  col = mix(col, mix(crevice, saltDark, mix(gSaltyDark, 1.0, face)), darkAmt);
  // Down in the canyon the ice turns deeper blue.
  col *= mix(vec3(1.0), vec3(0.62,0.78,1.08), smoothstep(-3.0, -30.0, wp.y));

  iceCol = col;
  iceFace = face;
  iceH = mix(gH, fH, face);
  iceTilt = gTilt * flat_;
  iceDetailN = mix(gN, fN, face);
  iceSalt = max(saltAmt, darkAmt);
  iceSnow = mix(1.0, fSnow, face);
  iceAO = mix(1.0, fAO, face);
  iceGloss = mix(gGloss, 0.75*(1.0 - fSnow), face) * (1.0 - 0.6*iceSalt);
}

// Bend the surface direction by the slope of the bump height.
vec3 iceBump(vec3 N, float h){
  vec3 sx = dFdx(-vViewPosition);
  vec3 sy = dFdy(-vViewPosition);
  vec3 r1 = cross(sy, N);
  vec3 r2 = cross(N, sx);
  float det = dot(sx, r1);
  vec3 grad = sign(det) * (dFdx(h) * r1 + dFdy(h) * r2);
  return normalize(abs(det) * N - grad);
}
`;function Mi(s={},e={}){const{faceScale:t=1,frost:n=0,rust:i=1,patch:r=1}=e,o=new Rt({color:16777215,roughness:.6,metalness:0,...s}),a=`#define ICE_FACE_SCALE ${t.toFixed(3)}
#define ICE_FROST ${n.toFixed(3)}
#define ICE_RUST ${i.toFixed(3)}
#define ICE_PATCH ${r.toFixed(3)}
`;return o.customProgramCacheKey=()=>o.onBeforeCompile.toString()+a,o.onBeforeCompile=l=>{Object.assign(l.uniforms,gi),l.fragmentShader=a+l.fragmentShader,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
varying vec3 vWNormal;`).replace("#include <project_vertex>",`#include <project_vertex>
        vec4 iwp = vec4(transformed, 1.0);
        vec3 iwn = objectNormal;
        #ifdef USE_INSTANCING
          iwp = instanceMatrix * iwp;
          iwn = mat3(instanceMatrix) * iwn;
        #endif
        vWPos = (modelMatrix * iwp).xyz;
        vWNormal = normalize(mat3(modelMatrix) * iwn);`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
`+dM).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 iceN = normalize(vWNormal);
        #ifdef DOUBLE_SIDED
          if (!gl_FrontFacing) iceN = -iceN;
        #endif
        iceSurface(vWPos, iceN, length(vViewPosition));
        diffuseColor.rgb *= iceCol;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(0.7, 0.3, iceGloss);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal = iceBump(normal, iceH);
normal = normalize(normal - (viewMatrix * vec4(iceTilt.x, 0.0, iceTilt.y, 0.0)).xyz);
normal = normalize(normal + (viewMatrix * vec4(iceDetailN, 0.0)).xyz);`).replace("#include <lights_physical_pars_fragment>",ot.lights_physical_pars_fragment.replace("vec3 irradiance = dotNL * directLight.color;","vec3 irradiance = (dotNL * 1.5 / (dotNL + 0.5)) * directLight.color;")).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        // Keep the Sun's mirror-glint on smooth ice from blowing out.
        reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(0.42,0.38,0.32));
        // Hollows get less of the soft all-round light.
        reflectedLight.indirectDiffuse *= iceAO;
        // How much direct light (Sun or a lamp) this spot gets.
        float iceLit = clamp(dot(reflectedLight.directDiffuse, vec3(0.9)), 0.0, 1.0);
        // Stylised: shadowed ice is never dead black (stands in for light
        // bouncing off bright ice all around). It is NOT one flat glow: it
        // comes more from above, and from the side facing away from the Sun
        // (where the sunlit ground bounces light back), so ledges and chips
        // still show their shape inside a shadow.
        vec3 iceNW = inverseTransformDirection(normal, viewMatrix);
        float iceUp = 0.5 + 0.5*iceNW.y;
        float iceBack = max(dot(iceNW, uIceAway), 0.0);
        // The bounce is strong: the sunlit frost plain is a huge bright
        // reflector, so a cliff facing away from the Sun is lit by it, and its
        // ledges and chips show (without it the whole right side of the scene,
        // which the player sees from its shaded side, was one flat blue).
        vec3 iceFill = mix(vec3(0.03,0.06,0.15), vec3(0.08,0.17,0.36), iceUp*iceUp) + vec3(0.17,0.23,0.33)*iceBack*(0.35 + 0.65*iceBack);
        // The bounce is daylight: it fades at night and when Jupiter hides the Sun.
        totalEmissiveRadiance += iceCol * iceFill * iceAO * (1.0 - iceLit) * uIceDay;
        // Bare ice glows a little from inside at its edges (light passing
        // through thin ice); frost doesn't.
        float iceRim = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        totalEmissiveRadiance += iceFace * (1.0 - iceSnow) * (1.0 - iceSalt) * (0.02 + 0.16*iceRim) * vec3(0.12,0.42,0.85) * (0.35 + 0.65*uIceDay);
        // Sparkle: tiny ice crystals catch the Sun near your feet.
        float iceDist = length(vViewPosition);
        if (iceDist < 28.0) {
          vec2 sg = floor(vWPos.xz * 11.0 + 3.0*iNoise(vWPos.xz*0.7));
          float sh = iHash(sg);
          float tw = fract(sh*91.7 + dot(geometryViewDir, vec3(7.1, 3.3, 5.7)));
          float glint = step(0.994, sh) * smoothstep(0.8, 1.0, tw);
          totalEmissiveRadiance += vec3(1.0,0.97,0.92) * glint * iceLit * (1.0 - iceSalt) * (1.0 - iceSalt) * (1.0 - iceDist/28.0) * 2.0;
        }`)},o}function Bf(s,e,t,n,i,r,o){const a=(c,h)=>{const u=[];let d=t,f=c;for(;Math.abs(f)<r;)d=Math.abs(f)<i?Math.min(d*o,n):d*o,f+=h*d,Math.abs(f)>r&&(f=h*r),u.push(f);return u},l=[];for(let c=s;c<=e+1e-6;c+=t)l.push(c);return a(s,-1).reverse().concat(l,a(l[l.length-1],1))}function fM(){const s=Bf(-140,164,2,5,640,2e3,1.08),e=Bf(-190,150,2,5,640,2e3,1.08),t=s.length,n=e.length,i=new Float32Array(t*n*3);let r=0;for(let u=0;u<n;u++)for(let d=0;d<t;d++)i[r++]=s[d],i[r++]=ht(s[d],e[u]),i[r++]=e[u];const o=new Uint32Array((t-1)*(n-1)*6);r=0;for(let u=0;u<n-1;u++)for(let d=0;d<t-1;d++){const f=u*t+d,p=f+1,v=f+t,g=v+1;o[r++]=f,o[r++]=v,o[r++]=p,o[r++]=p,o[r++]=v,o[r++]=g}const a=new nt;a.setAttribute("position",new ut(i,3)),a.setIndex(new ut(o,1)),a.computeVertexNormals();const l=Mi({},{frost:.08,rust:.55}),c=l.onBeforeCompile;l.onBeforeCompile=u=>{c(u),u.uniforms.uHole={value:new A(lt.cryobot.x,lt.cryobot.z,1.16)},u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uHole;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (distance(vWPos.xz, uHole.xy) < uHole.z) discard;`)};const h=new je(a,l);return h.receiveShadow=!0,h.castShadow=!0,h.renderOrder=5,h.name="terrain",h}const ni=6e3;function pM(s){const e=new it;e.name="sky",e.add(mM());const t=gM();e.add(t);const n=xM();e.add(n);const i=yM();e.add(i);const r=_M();e.add(r);const o=e.children[0];return{group:e,update:(l,c,h=1)=>{e.position.copy(l.position),t.rotation.y=c*.004,t.material.uniforms.uCamPos.value.copy(l.position),r.material.uniforms.uTime.value=c,o.material.uniforms.uScale.value=h},jupiter:t,io:n,sun:i,aurora:r}}function mM(){const s=gn(7),e=5e3,n=e+7e3,i=new Float32Array(n*3),r=new Float32Array(n*3),o=new Float32Array(n),a=new Ie,l=new St(1.05,.4,.3),c=new A,h=ni*1.2;for(let p=0;p<n;p++){const v=p>=e;let g=s()*2-1;v&&(g=(s()+s()+s()-1.5)*.22);const m=s()*Math.PI*2,y=Math.sqrt(1-g*g);c.set(y*Math.cos(m),g,y*Math.sin(m)),v&&c.applyEuler(l),i.set([c.x*h,c.y*h,c.z*h],p*3);const _=s();a.setHSL(_<.3?.6:_<.6?.1:0,_<.6?.55:0,v?.5+s()*.25:.85),r.set([a.r,a.g,a.b],p*3),o[p]=v?.9+s()*.7:Math.pow(s(),7)*3.2+1}const u=new nt;u.setAttribute("position",new ut(i,3)),u.setAttribute("color",new ut(r,3)),u.setAttribute("size",new ut(o,1));const d=new At({vertexColors:!0,transparent:!0,depthWrite:!1,uniforms:{uScale:{value:1}},vertexShader:`
      attribute float size; uniform float uScale; varying vec3 vColor; varying float vBig;
      void main(){ vColor = color; vBig = size; vec4 mv = modelViewMatrix * vec4(position,1.0);
        gl_PointSize = max(size * uScale, 1.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`
      varying vec3 vColor; varying float vBig;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.05, d);
        gl_FragColor = vec4(vColor * (1.0 + 0.35 * vBig), a); }`}),f=new ko(u,d);return f.frustumCulled=!1,f}function gM(){const s=ni*Math.tan(tn.degToRad(Ut.jupiterAngularDiameterDeg/2)),e=new Dn(s,96,64),t=Vm(null,2.1,1);new Rc().load("./textures/jupiter-cassini-PIA07782.jpg",i=>{i.colorSpace=Vt,i.anisotropy=8,t.uniforms.uMap.value=vM(i,1.6,1.12)});const n=new je(e,t);return n.position.copy(Ut.jupiterDir).multiplyScalar(ni),n.name="jupiter",n}function Vm(s,e,t){return new At({uniforms:{uMap:{value:s},uSunDir:{value:Ut.sunDir.clone()},uBrightness:{value:e},uAtmosphere:{value:t},uCamPos:{value:new A},uBehind:{value:0}},vertexShader:`
      varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal);
        vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`
      uniform sampler2D uMap; uniform vec3 uSunDir; uniform float uBrightness; uniform float uAtmosphere; uniform vec3 uCamPos; uniform float uBehind;
      varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){
        vec3 tex = texture2D(uMap, vUv).rgb;
        vec3 N = normalize(vN);
        vec3 S = normalize(uSunDir);
        float l = dot(N, S);
        // Day side, with a soft edge where day turns to night (thick air
        // blurs it on Jupiter).
        float lit = smoothstep(-0.08, 0.32, l) * (0.62 + 0.38 * max(l, 0.0));
        // The edge of a gas planet looks darker: you look through more air.
        float mu = clamp(dot(N, normalize(uCamPos - vW)), 0.0, 1.0); // never above 1: pow(1.0 - mu, ...) below must not go negative
        float limb = mix(1.0, pow(mu, 0.45), uAtmosphere);
        vec3 col = tex * lit * limb * uBrightness;
        // Sunlit haze right at the edge of the day side.
        col += uAtmosphere * vec3(1.0, 0.82, 0.60) * pow(1.0 - mu, 4.0) * smoothstep(-0.02, 0.35, l) * 0.9;
        // Night side: almost black, a touch of deep blue so the disc reads.
        col += tex * vec3(0.010, 0.014, 0.030) * (1.0 - lit);
        // Eclipse: with the Sun right behind it, sunlight bends through the
        // planet's air and outlines it with a thin bright ring (spacecraft in
        // Jupiter's shadow have photographed this).
        col += uAtmosphere * uBehind * vec3(1.0, 0.72, 0.42) * (pow(1.0 - mu, 9.0) * 5.0 + pow(1.0 - mu, 3.0) * 0.12);
        gl_FragColor = vec4(col, 1.0);
      }`})}function vM(s,e,t){const n=s.image,i=document.createElement("canvas");i.width=n.width,i.height=n.height;const r=i.getContext("2d");r.filter=`saturate(${e}) contrast(${t})`,r.drawImage(n,0,0);const o=new Vr(i);return o.colorSpace=Vt,o.anisotropy=s.anisotropy,o}function xM(){const s=ni*Math.tan(tn.degToRad(Ut.ioAngularDiameterDeg/2)),e=document.createElement("canvas");e.width=256,e.height=128;const t=e.getContext("2d");t.fillStyle="#e8c45a",t.fillRect(0,0,256,128);const n=gn(3);for(let o=0;o<90;o++)t.fillStyle=["#c9852f","#f3e08a","#7a3d1c","#d9a441"][o%4],t.beginPath(),t.arc(n()*256,n()*128,n()*7+1,0,Math.PI*2),t.fill();const i=new Vr(e);i.colorSpace=Vt;const r=new je(new Dn(s,32,16),Vm(i,2,0));return r.position.copy(Ut.ioDir).multiplyScalar(ni),r.name="io",r}function yM(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d"),n=512/2;t.globalCompositeOperation="lighter";const i=t.createRadialGradient(n,n,0,n,n,n);i.addColorStop(0,"rgba(255,246,230,0.55)"),i.addColorStop(.05,"rgba(255,236,210,0.16)"),i.addColorStop(.25,"rgba(255,225,195,0.03)"),i.addColorStop(1,"rgba(255,220,190,0)"),t.fillStyle=i,t.fillRect(0,0,512,512);const r=(c,h,u,d)=>{t.save(),t.translate(n,n),t.rotate(c);const f=t.createLinearGradient(-h,0,h,0);f.addColorStop(0,"rgba(255,240,220,0)"),f.addColorStop(.5,`rgba(255,248,236,${d})`),f.addColorStop(1,"rgba(255,240,220,0)"),t.fillStyle=f,t.beginPath(),t.moveTo(-h,0),t.lineTo(0,-u),t.lineTo(h,0),t.lineTo(0,u),t.closePath(),t.fill(),t.restore()};r(0,n*.95,2.2,.8),r(Math.PI/2,n*.6,2.2,.7),r(Math.PI/4,n*.28,1.6,.4),r(-Math.PI/4,n*.28,1.6,.4);const o=t.createRadialGradient(n,n,0,n,n,7);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.6,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,250,240,0)"),t.fillStyle=o,t.fillRect(n-8,n-8,16,16);const a=new Vr(e),l=new Lu(new vc({map:a,blending:bn,depthWrite:!1,color:16777215}));return l.material.color.multiplyScalar(5),l.scale.setScalar(ni*.16),l.position.copy(Ut.sunDir).multiplyScalar(ni),l.name="sun",l}function _M(){const s=new Hn(ni*.9,ni*.9,ni*.22,160,1,!0,0,Math.PI*1.3),e=new At({transparent:!0,depthWrite:!1,blending:bn,side:qt,uniforms:{uTime:{value:0},uIntensity:{value:.55}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      varying vec2 vUv; uniform float uTime; uniform float uIntensity;
      float h(float x){ return fract(sin(x*127.1)*43758.5453); }
      float n(float x){ float i=floor(x), f=fract(x); return mix(h(i), h(i+1.), f*f*(3.-2.*f)); }
      void main(){
        float x = vUv.x * 66.0;
        // Slow folds of the curtain, and fine rays inside it.
        float fold = n(x*0.35 + uTime*0.05) * 0.65 + n(x*1.1 - uTime*0.08) * 0.35;
        float rays = 0.55 + 0.45 * n(x*7.0 + uTime*0.25) * n(x*17.0 - uTime*0.4 + 3.0);
        // The curtain's lower edge wanders up and down and is sharp; the
        // light fades upward.
        float base = 0.10 + 0.22 * n(x*0.5 + 4.0 + uTime*0.03);
        float y = vUv.y;
        float lower = smoothstep(base - 0.02, base + 0.05, y);
        float upper = exp(-(y - base) * (3.2 + 2.0 * fold));
        float edges = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        float a = (0.25 + 0.75*fold) * rays * lower * upper * edges * uIntensity;
        vec3 col = mix(vec3(1.0,0.35,0.85), vec3(0.50,0.22,1.0), smoothstep(base, base + 0.45, y));
        col = mix(col, vec3(0.30,0.45,1.0), smoothstep(0.55, 1.0, y));
        gl_FragColor = vec4(col * a * 1.4, a);
      }`}),t=new je(s,e),n=Math.atan2(Ut.auroraCenterDir.x,Ut.auroraCenterDir.z);return t.rotation.y=n-Math.PI*.65,t.position.y=ni*.15,t.name="aurora",t}function bM(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new nt;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Hf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const p=Hf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Hf(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new ut(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){const v=h.getComponent(d,p);a.setComponent(d+u,p,v)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function na(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let o=0;const a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,_=a.length;y<_;y++){const x=a[y],I=s.attributes[x];l[x]=new I.constructor(new I.array.constructor(I.count*I.itemSize),I.itemSize,I.normalized);const C=s.morphAttributes[x];C&&(c[x]||(c[x]=[]),C.forEach((S,E)=>{const w=new S.array.constructor(S.count*S.itemSize);c[x][E]=new S.constructor(w,S.itemSize,S.normalized)}))}const f=e*.5,p=Math.log10(1/e),v=Math.pow(10,p),g=f*v;for(let y=0;y<r;y++){const _=n?n.getX(y):y;let x="";for(let I=0,C=a.length;I<C;I++){const S=a[I],E=s.getAttribute(S),w=E.itemSize;for(let b=0;b<w;b++)x+=`${~~(E[u[b]](_)*v+g)},`}if(x in t)h.push(t[x]);else{for(let I=0,C=a.length;I<C;I++){const S=a[I],E=s.getAttribute(S),w=s.morphAttributes[S],b=E.itemSize,P=l[S],N=c[S];for(let U=0;U<b;U++){const D=u[U],F=d[U];if(P[F](o,E[D](_)),w)for(let z=0,k=w.length;z<k;z++)N[z][F](o,w[z][D](_))}}t[x]=o,h.push(o),o++}}const m=s.clone();for(const y in s.attributes){const _=l[y];if(m.setAttribute(y,new _.constructor(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),y in c)for(let x=0;x<c[y].length;x++){const I=c[y][x];m.morphAttributes[y][x]=new I.constructor(I.array.slice(0,o*I.itemSize),I.itemSize,I.normalized)}}return m.setIndex(h),m}function Uc(s,e=Math.PI/3){const t=Math.cos(e),n=(1+1e-10)*100,i=[new A,new A,new A],r=new A,o=new A,a=new A,l=new A;function c(v){const g=~~(v.x*n),m=~~(v.y*n),y=~~(v.z*n);return`${g},${m},${y}`}const h=s.index?s.toNonIndexed():s,u=h.attributes.position,d={};for(let v=0,g=u.count/3;v<g;v++){const m=3*v,y=i[0].fromBufferAttribute(u,m+0),_=i[1].fromBufferAttribute(u,m+1),x=i[2].fromBufferAttribute(u,m+2);r.subVectors(x,_),o.subVectors(y,_);const I=new A().crossVectors(r,o).normalize();for(let C=0;C<3;C++){const S=i[C],E=c(S);E in d||(d[E]=[]),d[E].push(I)}}const f=new Float32Array(u.count*3),p=new ut(f,3,!1);for(let v=0,g=u.count/3;v<g;v++){const m=3*v,y=i[0].fromBufferAttribute(u,m+0),_=i[1].fromBufferAttribute(u,m+1),x=i[2].fromBufferAttribute(u,m+2);r.subVectors(x,_),o.subVectors(y,_),a.crossVectors(r,o).normalize();for(let I=0;I<3;I++){const C=i[I],S=c(C),E=d[S];l.set(0,0,0);for(let w=0,b=E.length;w<b;w++){const P=E[w];a.dot(P)>t&&l.add(P)}l.normalize(),p.setXYZ(m+I,l.x,l.y,l.z)}}return h.setAttribute("normal",p),h}const Wt=[],Gm={faceScale:2.4,frost:.1,rust:.3,patch:.6},Vf={faceScale:2.2,frost:.12,rust:.12,patch:.7},Pn=(s,e)=>ht(s,e,!1),Wm={faceScale:5,frost:.12,rust:.2,patch:.25},Zl={uSunDir:{value:Ut.sunDir.clone()},uDay:{value:1}};function MM(){const s=new it;return s.name="ice",s.add(RM()),s.add(PM()),s.add(IM()),s.add(UM()),s.add(DM()),s.add(AM()),s.add(SM()),s}function wM(){const s=new Rt({color:16777215,roughness:.88,metalness:0});return s.onBeforeCompile=e=>{e.uniforms.tSaltC=gi.tSaltC,e.uniforms.tSaltN=gi.tSaltN,e.uniforms.uTexOn=gi.uTexOn,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSWPos;
varying vec3 vSWN;`).replace("#include <project_vertex>",`#include <project_vertex>
        vec4 swp = vec4(transformed, 1.0); vec3 swn = objectNormal;
        #ifdef USE_INSTANCING
          swp = instanceMatrix * swp; swn = mat3(instanceMatrix) * swn;
        #endif
        vSWPos = (modelMatrix * swp).xyz; vSWN = normalize(mat3(modelMatrix) * swn);`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vSWPos; varying vec3 vSWN;
        uniform sampler2D tSaltC, tSaltN; uniform float uTexOn;
        vec3 sTri(sampler2D t, vec3 p, vec3 w){ return texture(t, p.zy).rgb*w.x + texture(t, p.xz).rgb*w.y + texture(t, p.xy).rgb*w.z; }`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 sN = normalize(vSWN);
        vec3 sW = pow(abs(sN), vec3(4.0)); sW /= (sW.x + sW.y + sW.z);
        vec3 sP = vSWPos / 2.4;
        vec3 sC = sTri(tSaltC, sP, sW);
        float sAvg = dot(textureLod(tSaltC, vec2(0.5), 10.0).rgb, vec3(0.3, 0.59, 0.11)) + 1e-3;
        vec3 sRel = sC / sAvg; sRel = mix(vec3(dot(sRel, vec3(0.3, 0.59, 0.11))), sRel, 0.55); // calm the texture's yellow-green
        vec3 stone = pow(sRel, vec3(1.5)) * vec3(0.88, 0.5, 0.36) * 0.5;
        diffuseColor.rgb *= mix(vec3(0.45, 0.2, 0.12), stone, uTexOn);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        vec3 sT = (sTri(tSaltN, sP, sW) * 2.0 - 1.0) * uTexOn;
        vec3 sBend = sW.x*vec3(0.0, sT.y, sT.x) + sW.y*vec3(sT.x, 0.0, sT.y) + sW.z*vec3(sT.x, sT.y, 0.0);
        normal = normalize(normal + (viewMatrix * vec4(sBend * 0.8, 0.0)).xyz);`)},s}function SM(){let s=new Wr(1,3);s.deleteAttribute("normal"),s.deleteAttribute("uv"),s=na(s);const e=s.attributes.position;for(let h=0;h<e.count;h++){const u=e.getX(h),d=e.getY(h),f=e.getZ(h),p=.75+.35*Qt(u*2.1+3,f*2.1+d*1.7)+.15*Qt(u*5.3+9,f*5.3-d*4.1);e.setXYZ(h,u*p,d*p,f*p)}s.computeVertexNormals();const t=gn(512),n=lt.basePad,i=lt.cave,r=[];for(const h of kr){const u=h.width/7;for(let d=-230;d<230;d+=(.6+t()*.9)*u){const p=h.slope*d+h.offset+h.wobbleAmp*Math.sin(d*h.wobbleFreq)+(t()-.5)*.7*u;if(Math.hypot(d,p)>235||Math.hypot(d-n.x,p-n.z)<n.outer||Math.hypot(d-i.x,p-i.z)<i.radius+4)continue;const v=ht(d,p);if(v<-2.5||v>14)continue;const g=Math.abs(Pn(d+1.5,p)-Pn(d-1.5,p))+Math.abs(Pn(d,p+1.5)-Pn(d,p-1.5));if(t()<.15||g>.9)continue;const m=(.9+t()*1.5)*u;r.push({x:d,z:p,gh:v,w:m,h:(.22+t()*t()*.55)*u,d:m*(.6+t()*.5),ry:-Math.atan(h.slope)+(t()-.5)*.8})}}const o=new pn(s,wM(),r.length);o.name="saltCrust";const a=new Ze,l=new Ct,c=new St;return r.forEach((h,u)=>{l.setFromEuler(c.set((t()-.5)*.15,h.ry,(t()-.5)*.15)),a.compose(new A(h.x,h.gh-h.h*.45,h.z),l,new A(h.w,h.h,h.d)),o.setMatrixAt(u,a)}),o.castShadow=!0,o.receiveShadow=!0,o}function TM(s,e,t){const n=new it;n.name=e;const i=new Ze,r=new Ct,o=new St;for(const a of[0,1]){const l=s.filter(h=>h.kind===a);if(!l.length)continue;const c=new pn(Xm(a),t,l.length);l.forEach((h,u)=>{r.setFromEuler(o.set(h.rx,h.ry,h.rz,"YXZ")),i.compose(new A(h.x,ht(h.x,h.z)+h.h*(.5-(h.sink??.2)),h.z),r,new A(h.w,h.h,h.d)),c.setMatrixAt(u,i)}),c.castShadow=!0,c.receiveShadow=!0,n.add(c)}return n}function AM(){const s=gn(303),e=(h,u)=>h+s()*(u-h),t=Mi({},Gm),n=lt.canyon,i=h=>n.centerX+14*Math.sin(h/130),r=[],o=(h,u)=>{r.push(h),u&&Wt.push({x:h.x,z:h.z,r:Math.max(h.w,h.d)*.62})};for(let h=-150;h<170;h+=e(5,10)){if(s()<.35)continue;const d={x:i(h)-n.halfWidth-n.rimBack+e(-3,3),z:h,w:e(3,9),h:e(3,8.5),d:e(1.5,4),rx:e(-.5,.5),ry:s()*6.28,rz:e(-.4,.4),kind:s()<.4?1:0};Math.abs(h-n.notchZ)>13&&o(d,!0)}for(let h=-220;h<260;h+=e(4,8)){const u=i(h)+n.halfWidth+24+e(-12,12),d=e(10,32);o({x:u,z:h,w:e(6,16),h:d,d:e(3,8),rx:e(-.6,.6),ry:s()*6.28,rz:e(-.4,.4),kind:s()<.45?1:0,sink:.3},!1)}for(let h=0;h<40;h++){const u=e(170,300),d=e(-20,240);o({x:u,z:d,w:e(5,22),h:e(8,36),d:e(3,10),rx:e(-.45,.45),ry:s()*6.28,rz:e(-.45,.45),kind:s()<.35?1:0},!1)}const a=gn(808),l=(h,u)=>h+a()*(u-h);for(const[h,u,d]of[[-15,47,4.5],[-22,33,3.2],[53,46,5],[61,30,3.6],[-9,60,2.6],[47,60,2.8]])o({x:h,z:u,w:d,h:d*1.3,d:d*.7,rx:l(-.45,.45),ry:a()*6.28,rz:l(-.4,.4),kind:a()<.5?1:0,sink:.25},!0);const c=new it;return c.name="brokenIce",c.add(TM(r,"brokenSlabs",t)),c.add(CM(t)),c}function EM(s){const e=gn(s),t=new cs,n=6+Math.floor(e()*3);for(let r=0;r<n;r++){const o=r/n*Math.PI*2+(e()-.5)*.5,a=.62+e()*.38;r===0?t.moveTo(Math.cos(o)*a,Math.sin(o)*a):t.lineTo(Math.cos(o)*a,Math.sin(o)*a)}t.closePath();const i=new Jo(t,{depth:.22,bevelEnabled:!0,bevelThickness:.1,bevelSize:.09,bevelSegments:3,steps:1});return i.rotateX(-Math.PI/2),i.computeBoundingBox(),i.translate(0,-i.boundingBox.min.y,0),i.computeVertexNormals(),i}function CM(s){const e=lt.basePad,t=lt.cave,n=lt.spawn,i=[],r=m=>{const y=gn(m);return()=>({a:y(),b:y(),c:y(),w:y(),tiltPick:y(),tilt:y(),thick:y(),dir:y(),spin:y(),kind:y(),depth:y()})},o=(m,y)=>kr.some(_=>Math.abs(y-(_.slope*m+_.offset+_.wobbleAmp*Math.sin(m*_.wobbleFreq)))<_.width*1.9),a=(m,y,_)=>Math.abs(Pn(m+2,y)-Pn(m-2,y))+Math.abs(Pn(m,y+2)-Pn(m,y-2))>_,l=(m,y,_,x,I,C,S)=>{const E=x+_.w*(I-x),w=_.tiltPick<C.chance?C.min+_.tilt*(C.max-C.min):_.tilt*.12,b=(S.min+_.thick*(S.max-S.min))*(.6+E*S.grow);i.push({x:m,z:y,w:E,tilt:w,thick:b,dir:_.dir*6.28,spin:_.spin*6.28,kind:Math.floor(_.kind*4),depth:.6+_.depth*.35}),Math.sin(w)*E*.5+b*.32>.75&&Wt.push({x:m,z:y,r:E*.7})},c=r(919);let h=0;for(let m=0;h<170&&m<4e3;m++){const y=c(),_=y.a*Math.PI*2,x=8+Math.pow(y.b,1.6)*190,I=n.x+Math.cos(_)*x,C=n.z+Math.sin(_)*x-20;if(Math.hypot(I-e.x,C-e.z)<e.inner+4||Math.hypot(I-n.x,C-n.z)<13||Math.hypot(I-t.x,C-t.z)<t.radius+9||o(I,C))continue;const S=Pn(I,C);S<-2.5||S>5||a(I,C,1.4)||(l(I,C,y,1.6,6.5,{chance:.45,min:.18,max:.5},{min:.7,max:1.6,grow:.12}),h++)}const u=r(920),d=[];for(let m=0;d.length<190&&m<5e3;m++){const y=u(),_=y.a<.5&&d.length>0,x=_?d[Math.floor(y.b*d.length)]:null,I=_?x.x+(y.c-.5)*28:-40+y.b*190,C=_?x.z+(y.depth-.5)*28:-300+y.c*245;if(Math.hypot(I-e.x,C-e.z)<e.inner+6||Math.hypot(I-t.x,C-t.z)<t.radius+9||o(I,C))continue;const S=Pn(I,C);S<-2.5||S>12||a(I,C,1.8)||(d.push({x:I,z:C}),l(I,C,y,2.5,9,{chance:.5,min:.15,max:.45},{min:.8,max:1.7,grow:.1}))}const f=new it;f.name="plates";const p=new Ze,v=new Ct,g=new St;for(let m=0;m<4;m++){const y=i.filter(x=>x.kind===m);if(!y.length)continue;const _=new pn(EM(41+m*13),s,y.length);y.forEach((x,I)=>{v.setFromEuler(g.set(Math.cos(x.dir)*x.tilt,x.spin,Math.sin(x.dir)*x.tilt,"YXZ"));const C=ht(x.x,x.z)-x.thick*.12-Math.sin(x.tilt)*x.w*.25;p.compose(new A(x.x,C,x.z),v,new A(x.w,x.thick,x.w*x.depth)),_.setMatrixAt(I,p)}),_.castShadow=!0,_.receiveShadow=!0,f.add(_)}return f}const Th=`
uniform vec3 uCaveCenter; uniform vec3 uMouthDir;
bool inCaveMouth(vec3 wp, float grow){
  vec3 rel = wp - uCaveCenter;
  float facing = dot(normalize(rel.xz), normalize(uMouthDir.xz));
  return facing > 0.86 - grow*0.03 && wp.y < 9.0 + grow - (1.0 - facing) * 30.0;
}`;function RM(){const{x:s,z:e,radius:t,mouthAngleDeg:n}=lt.cave,i=new it;i.name="cave";const r=tn.degToRad(n),o=new A(Math.cos(r),0,-Math.sin(r)),a={uCaveCenter:{value:new A(s,0,e)},uMouthDir:{value:o}},l=(Y,ne,ue,we=.25)=>{const Q=Y.attributes.position,re=new A;for(let ge=0;ge<Q.count;ge++){re.fromBufferAttribute(Q,ge);const ve=Qt(re.x*we+ue,re.z*we+re.y*we*.8)+.5*Qt(re.x*we*2.3+ue,re.z*we*2.3-re.y*we);re.multiplyScalar(1+(ve-.75)*ne),Q.setXYZ(ge,re.x,re.y,re.z)}return Y.computeVertexNormals(),Y},c=Mi({},Vf),h=c.onBeforeCompile;c.onBeforeCompile=Y=>{h(Y),Object.assign(Y.uniforms,a),Y.fragmentShader=Y.fragmentShader.replace("#include <common>",`#include <common>
`+Th).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (inCaveMouth(vWPos, 0.0)) discard;`)};const u=l(new Dn(t,96,56,0,Math.PI*2,0,Math.PI/2),.2,1),d=Y=>{const ne=Y.clone(),ue=ne.attributes.position,we=(ge,ve,he)=>{const Se=Math.min(1,Math.max(0,(he-ge)/(ve-ge)));return Se*Se*(3-2*Se)},Q=(ge,ve)=>{const he=1-Math.abs(2*Qt(ge,ve)-1);return he*he},re=17;for(let ge=0;ge<ue.count;ge++){let ve=ue.getX(ge),he=ue.getY(ge),Se=ue.getZ(ge);const J=Math.min(1,Math.max(0,he/t)),ye=Math.hypot(ve,Se)||1e-6,j=ve/ye,oe=Se/ye,R=j*o.x+oe*o.z,ee=Math.atan2(oe,j),K=Math.max(we(.84,.45,R),we(10.4,12,he*.75));if(K<=0)continue;const Me=.62+.55*Q(ee*1.9+4.2,1.7)+.2*Qt(ee*5.1,9.3),fe=Q(ve*.16+2,Se*.16+he*.14)-.42,ae=Qt(ve*.45+7,Se*.45-he*.4)-.5;he+=K*re*Me*Math.pow(J,1.5)/.75;const _e=K*6.5*J*J;ve-=o.x*_e,Se-=o.z*_e;const L=K*(3.4*fe+1.1*ae+4.2*(1-J)*(1-J)*(.35+Qt(ee*2.3+1,5.5)));ve+=j*L,Se+=oe*L,he+=K*1.6*fe/.75,ue.setXYZ(ge,ve,he,Se)}return ne.computeVertexNormals(),ne},f=new je(d(u),c);f.scale.set(1,.75,1),f.castShadow=!0,f.receiveShadow=!0;const p=new fc({depthPacking:wu});p.onBeforeCompile=Y=>{Object.assign(Y.uniforms,a),Y.vertexShader=Y.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <project_vertex>",`#include <project_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),Y.fragmentShader=Y.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
`+Th).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (inCaveMouth(vWPos, 0.0)) discard;`)},f.customDepthMaterial=p;const v=new At({side:nn,uniforms:{...a,uSunDir:Zl.uSunDir,uDay:Zl.uDay,uShell:{value:new de(t,t*.75)},uTexOn:gi.uTexOn,tIceC:gi.tIceC,tFrostC:gi.tFrostC,tCrackC:gi.tCrackC},vertexShader:`
      varying vec3 vWPos; varying vec3 vN;
      void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vWPos = wp.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`
      varying vec3 vWPos; varying vec3 vN;
      uniform vec3 uSunDir; uniform vec2 uShell; uniform float uDay;
      uniform sampler2D tIceC, tFrostC, tCrackC; uniform float uTexOn;
      ${Th}
      float lum(vec3 c){ return dot(c, vec3(0.3, 0.59, 0.11)); }
      // A photo texture's light-and-dark pattern (1 = average), projected
      // from three sides and blended, so it wraps the dome without seams or
      // stretching.
      float tri(sampler2D t, vec3 p, vec3 n){
        vec3 w = pow(abs(n), vec3(4.0)); w /= (w.x + w.y + w.z);
        float v = lum(texture(t, p.zy).rgb)*w.x + lum(texture(t, p.xz).rgb)*w.y + lum(texture(t, p.xy).rgb)*w.z;
        return mix(1.0, (v + 0.02) / (lum(textureLod(t, vec2(0.5), 10.0).rgb) + 0.02), uTexOn);
      }
      void main(){
        if (inCaveMouth(vWPos, 0.0)) discard;
        vec3 rel = vWPos - uCaveCenter;
        vec3 V = normalize(cameraPosition - vWPos);
        vec3 N = normalize(-vN);
        // Glacier-cave ice: light comes through the thin roof, so it is
        // brighter overhead and deep blue low down, with the grain, bubbles
        // and cracks of real ice, and faint layers of old ice.
        float up = smoothstep(-0.5, 10.0, rel.y);
        float grain = tri(tIceC, rel / 7.0, vN);
        float frost = tri(tFrostC, rel / 3.5, vN);
        float cracks = tri(tCrackC, rel / 6.0, vN);
        float swirl = 0.5 + 0.5 * sin(rel.x * 0.35 + 2.0 * sin(rel.z * 0.27 + rel.y * 0.2)) * sin(rel.z * 0.31 + 1.7 * sin(rel.x * 0.23));
        vec3 deep = vec3(0.02, 0.13, 0.38);
        vec3 mid  = vec3(0.07, 0.48, 0.86);
        vec3 lite = vec3(0.52, 0.90, 1.00);
        vec3 col = mix(deep, mid, clamp(0.25 + 0.55*up + 0.25*(swirl - 0.5), 0.0, 1.0));
        col *= mix(1.0, grain, 0.55);
        col = mix(col, lite, clamp((cracks - 1.0) * 0.9 + (frost - 1.0) * 0.5, 0.0, 1.0) * (0.35 + 0.4*up));
        col *= 0.92 + 0.1 * sin(rel.y * 2.3 + 1.4 * sin(rel.x * 0.4 + rel.z * 0.3));
        // Kept between 0 and 1: looking at the wall dead-on, rounding can make
        // dot(N, V) a hair more than 1, and a power of a negative number is
        // not a number at all. That one broken pixel is what the glow effect
        // smeared into black squares inside the cave.
        float fres = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 2.5);
        col += vec3(0.25, 0.75, 1.0) * fres * 0.35;
        float sc = clamp(grain * 0.5, 0.0, 1.0);
        // The glow is daylight coming through the ice: dimmer when it's dark.
        col *= 0.32 + 0.68 * uDay;
        // Does the Sun reach this spot through the mouth? Follow the ray back
        // toward the Sun to where it leaves the cave, and test that point.
        vec3 d = normalize(uSunDir);
        vec3 s = vec3(1.0/uShell.x, 1.0/uShell.y, 1.0/uShell.x);
        vec3 o = rel * s; vec3 dd = d * s;
        float A = dot(dd,dd), B = 2.0*dot(o,dd), C = dot(o,o) - 1.0;
        float disc = B*B - 4.0*A*C;
        if (disc > 0.0) {
          float t = (-B + sqrt(disc)) / (2.0*A);
          vec3 hit = uCaveCenter + rel + d*t;
          if (uDay > 0.3 && d.y > 0.02 && t > 0.0 && inCaveMouth(hit, -0.8)) col = col*0.6 + vec3(1.25, 0.95, 0.62) * (0.55 + 0.45*sc);
        }
        gl_FragColor = vec4(col, 1.0);
      }`}),g=new je(u,v);g.scale.set(.985,.75*.985,.985);const m=Math.acos(.86),y=Y=>t*Math.sqrt(Math.max(0,1-Math.pow(Y/(t*.75),2))),_=[],x=(Y,ne,ue=0)=>{const we=y(ne)+ue;return new A(Math.cos(r+Y)*we,ne,-Math.sin(r+Y)*we)};for(let Y=-1;Y<4.8;Y+=1.2)_.push(x(-m-.03,Math.max(Y,0)+(Y<0?Y:0),.4));for(let Y=0;Y<=16;Y++){const ne=-m+Y/16*2*m;_.push(x(ne,9-(1-Math.cos(ne))*30+.5,.4))}for(let Y=3.6;Y>=-1.2;Y-=1.2)_.push(x(m+.03,Math.max(Y,0)+(Y<0?Y:0),.4));let I=new Js(new Ur(_),54,2,6,!1);{const Y=I.attributes.position,ne=I.attributes.normal;for(let ue=0;ue<Y.count;ue++){const we=Y.getX(ue),Q=Y.getY(ue),re=Y.getZ(ue),ge=Qt(we*.21+3,re*.21+Q*.19)-.45,ve=Qt(we*.62+8,re*.62-Q*.55)-.5,he=2.4*ge+.9*ve;Y.setXYZ(ue,we+ne.getX(ue)*he,Q+ne.getY(ue)*he,re+ne.getZ(ue)*he)}I.deleteAttribute("normal"),I.deleteAttribute("uv"),I=Uc(na(I),.45)}const C=new je(I,Mi({},Vf));C.castShadow=!0,C.receiveShadow=!0;const S=new $i([new de(0,-.05),new de(.5,-.05),new de(.47,.74),new de(0,1)],6),w=((Y,ne,ue,we,Q=!0)=>{const re=new Rt({color:Y,emissive:ne,emissiveIntensity:ue,roughness:.24,metalness:.05,flatShading:Q});return re.onBeforeCompile=ge=>{ge.vertexShader=ge.vertexShader.replace("#include <common>",`#include <common>
varying float vTip;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vTip = position.y;`),ge.fragmentShader=ge.fragmentShader.replace("#include <common>",`#include <common>
varying float vTip;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          float tipK = clamp(vTip, 0.0, 1.0);
          totalEmissiveRadiance *= 0.25 + 1.3 * pow(tipK, ${Math.abs(we).toFixed(1)});
          float rimK = pow(clamp(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 0.0, 1.0), 3.0); // clamped: see the cave wall's fres
          totalEmissiveRadiance += vec3(0.35, 0.85, 1.0) * rimK * 0.9;
          diffuseColor.rgb *= mix(vec3(0.55, 0.75, 1.0), vec3(1.0), tipK);`)},re})(2795228,1088224,.9,2.5),b=gn(11),P=[];for(;P.length<13;){const Y=b()*Math.PI*2,ne=6.5+b()*4.5,ue=Math.cos(Y)*ne,we=Math.sin(Y)*ne,Q=ue*o.x+we*o.z,re=Math.abs(-ue*o.z+we*o.x);Q>-2&&re<5||P.push([ue,we])}const N=9,U=new pn(S,w,P.length*N);U.name="caveCrystals";const D=new Ze,F=new Ct,z=new Ct;new St;const k=new A(0,1,0);let B=0;for(const[Y,ne]of P){const ue=.7+b()*.6;for(let we=0;we<N;we++){const Q=we===0,re=b()*Math.PI*2,ge=Q?0:.35+b()*.9,ve=Math.cos(re)*ge,he=Math.sin(re)*ge,Se=(Q?3.4+b()*2.4:.7+b()*2.3*(1.2-ge*.5))*ue,J=(Q?.85+b()*.4:.22+b()*.35)*ue,ye=Q?b()*.12:.15+ge*.35+b()*.15;F.setFromUnitVectors(k,new A(Math.cos(re)*ye,1,Math.sin(re)*ye).normalize()),F.multiply(z.setFromAxisAngle(k,b()*6.28)),D.compose(new A(Y+ve,ht(s+Y+ve,e+ne+he)-.2,ne+he),F,new A(J,Se,J)),U.setMatrixAt(B++,D)}Wt.push({x:s+Y,z:e+ne,r:1.3*ue})}const X=new ta(5228799,46,26,1.5);return X.position.set(-1,4.5,0),i.add(f,g,C,U,X),i.position.set(s,0,e),i.userData.mouthDir=o,i}function Xm(s){let e=new qi(1,1,1,9,16,5);e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=na(e);const t=e.attributes.position,n=(o,a,l)=>{const c=Math.min(1,Math.max(0,(l-o)/(a-o)));return c*c*(3-2*c)},i=gn(131+s*17),r=[];for(let o=0;o<14;o++){const a=new A(i()*2-1,(i()*2-1)*.6,i()*2-1).normalize(),l=.5*(Math.abs(a.x)+Math.abs(a.y)+Math.abs(a.z));r.push({n:a,d:l*(.74+i()*.2)})}for(let o=0;o<t.count;o++){let a=t.getX(o),l=t.getY(o),c=t.getZ(o);for(const g of r){const m=a*g.n.x+l*g.n.y+c*g.n.z-g.d;m>0&&(a-=g.n.x*m,l-=g.n.y*m,c-=g.n.z*m)}const h=l+.5,u=Qt(a*3+l*2+s*7.3,c*3-l)-.5,d=Qt(a*7+11,l*5+c*6+s)-.5,f=s===0?1-.28*h*h:1-.5*h,p=s===0?1-.3*h:1-.82*h*h,v=Math.abs(c)>.49?.05*Math.sin(a*19+u*4):0;l+=(a*(s===0?.3:.55)+u*.12)*n(.55,1,h),a=a*f*(1+u*.2)+d*.04,c=(c+Math.sign(c)*v)*p*(1+u*.22)-h*.22,t.setXYZ(o,a,l,c)}return Uc(e,.6)}function PM(){const s=gn(21),e=70,t=[];for(let a=0;a<e;a++){const l=a>40,c=l?150+s()*160:46+s()*24,h=l?-260+s()*260:-170+s()*120,u=4+s()*(l?22:12),d=6+s()*(l?40:22),f=3+s()*8,p=new St((s()-.5)*.9,s()*Math.PI,(s()-.5)*.9);t.push({bx:c,bz:h,w:u,h:d,d:f,euler:p,kind:a%3===1?1:0}),l||Wt.push({x:c,z:h,r:Math.max(u,f)*.55})}const n=new it;n.name="chaosBlocks";const i=Mi({},Gm),r=new Ze,o=new Ct;for(const a of[0,1]){const l=t.filter(h=>h.kind===a),c=new pn(Xm(a),i,l.length);l.forEach((h,u)=>{o.setFromEuler(h.euler),r.compose(new A(h.bx,ht(h.bx,h.bz)+h.h*.3,h.bz),o,new A(h.w,h.h,h.d)),c.setMatrixAt(u,r)}),c.castShadow=!0,c.receiveShadow=!0,n.add(c)}return n}function rs(s,e,t){let n=new Wr(1,s);n.deleteAttribute("normal"),n.deleteAttribute("uv"),n=na(n);const i=gn(e),r=[];for(let a=0;a<t;a++){const l=i()*1.7-.7,c=i()*Math.PI*2,h=Math.sqrt(Math.max(0,1-Math.min(1,l*l)));r.push({x:h*Math.cos(c),y:Math.max(-1,Math.min(1,l)),z:h*Math.sin(c),d:.58+i()*.3})}const o=n.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a),c=o.getY(a),h=o.getZ(a);const u=.82+.42*Qt(l*1.5+e,h*1.5+c*1.3);l*=u,c*=u,h*=u;for(const f of r){const p=l*f.x+c*f.y+h*f.z-f.d;p>0&&(l-=f.x*p,c-=f.y*p,h-=f.z*p)}const d=1+.07*(Qt(l*5.5+e*3,h*5.5-c*4.7)-.5);o.setXYZ(a,l*d,Math.max(c*d*.85,-.3),h*d)}return Uc(n,.52)}function IM(){const s=gn(77),e=[],t=(u,d,f)=>{if(Math.hypot(u-12,d-4)<34)return;const p=lt.cave;if(Math.hypot(u-p.x,d-p.z)<p.radius+4)return;const v=ht(u,d);v<-2.5||e.push({cx:u,cz:d,h:v,size:f})},n=(u,d,f)=>{Math.abs(Pn(u+1.5,d)-Pn(u-1.5,d))+Math.abs(Pn(u,d+1.5)-Pn(u,d-1.5))<1&&t(u,d,f)};for(let u=0;u<150;u++)t(40+s()*38,-180+s()*140,.25+s()*s()*1.1);for(let u=0;u<90;u++)n(-36-s()*26,-150+s()*270,.25+s()*s()*1.3);for(let u=0;u<70;u++)n(56+s()*20,-60+s()*220,.2+s()*s()*1);for(let u=0;u<110;u++){const d=s()*Math.PI*2,f=36+s()*120;t(Math.cos(d)*f,Math.sin(d)*f,.15+s()*s()*.6)}{const u=gn(4242);for(let d=0;d<520;d++){const f=u()*Math.PI*2,p=6+Math.pow(u(),.7)*150;n(16+Math.cos(f)*p,24+Math.sin(f)*p,.07+u()*u()*.4)}for(let d=0;d<46;d++){const f=u()*Math.PI*2,p=20+u()*120,v=16+Math.cos(f)*p,g=24+Math.sin(f)*p,m=6+Math.floor(u()*9);for(let y=0;y<m;y++){const _=u()*u()*5,x=u()*Math.PI*2;n(v+Math.cos(x)*_,g+Math.sin(x)*_,y===0?.5+u()*.5:.08+u()*.35)}}}const i=[[11,50,1.9],[8.5,47.5,1],[28.5,47,1.6],[31,49.5,.9],[-6,46,2.4],[-9.5,43,1.2],[44,44,2.2],[47.5,41,1.1],[3,70,2],[36,68,2.6],[-28,40,2.8],[-31,36.5,1.3],[58,10,2.3],[61,-18,1.8],[-24,-52,2.6],[8,-62,2.1],[40,-70,2.9],[-36,5,2.5],[-40,8,1.3],[-31,-12,1],[-29,3,.7],[-45,7,.9],[-30,-44,2],[-33,-48,1.1],[-27,-40,.7],[-36,-52,1.5]];for(const[u,d]of[[-10,-120],[55,-150],[100,-95],[10,-210],[80,-240],[-30,-175]]){const f=4+Math.floor(s()*4);for(let p=0;p<f;p++){const v=u+(s()-.5)*22,g=d+(s()-.5)*22;i.push([v,g,1.4+s()*s()*3.4])}}for(const[u,d,f]of i)e.push({cx:u,cz:d,h:ht(u,d),size:f}),f>1.4&&Wt.push({x:u,z:d,r:f*1.25});const r=new it;r.name="iceChunks";const o=Mi({},Wm),a=[{big:!0,geo:rs(9,3,13)},{big:!0,geo:rs(9,19,16)},{big:!0,geo:rs(9,42,11)},{big:!1,geo:rs(3,7,7)},{big:!1,geo:rs(3,28,9)},{big:!1,geo:rs(3,61,6)}],l=a.map(()=>[]);e.forEach((u,d)=>{const f=u.size>1.15,p=a.map((v,g)=>g).filter(v=>a[v].big===f);l[p[d%p.length]].push(u)});const c=new Ze,h=new Ct;return a.forEach((u,d)=>{if(!l[d].length)return;const f=new pn(u.geo,o,l[d].length);l[d].forEach((p,v)=>{h.setFromEuler(new St((s()-.5)*.4,s()*6.28,(s()-.5)*.4)),c.compose(new A(p.cx,p.h+p.size*.1,p.cz),h,new A(p.size*(.9+s()*.6),p.size*(.65+s()*.45),p.size*(.9+s()*.6))),f.setMatrixAt(v,c)}),f.castShadow=!0,f.receiveShadow=!0,r.add(f)}),r}const LM={faceScale:3.2,frost:.24,rust:.15,patch:.5};function DM(){const s=lt.iceArch,e=new it;e.name="iceArch";const t=tn.degToRad(s.spanDeg),n=Math.cos(t),i=Math.sin(t),r=-i,o=n,a=s.span/2,l=E=>ht(s.x+n*E,s.z+i*E),c=Math.min(l(-a),l(a)),h=[[-1.03,-.22,0],[-.96,.2,.03],[-.74,.6,.08],[-.3,.9,.05],[.24,1,-.05],[.68,.78,-.08],[.95,.36,-.03],[1.04,-.22,0]],u=new Ur(h.map(([E,w,b])=>new A(s.x+n*E*a+r*b*a,c+w*s.height,s.z+i*E*a+o*b*a))),d=64,f=6;let p=new Js(u,d,1,f,!1);const v=p.attributes.position,g=new A;for(let E=0;E<=d;E++){const w=E/d;u.getPointAt(w,g);const b=3.3+(w<.5?4.2:3.3)*Math.pow(Math.abs(2*w-1),1.5);for(let P=0;P<=f;P++){const N=E*(f+1)+P;let U=v.getX(N)-g.x,D=v.getY(N)-g.y,F=v.getZ(N)-g.z;const z=g.x+U*b,k=g.y+D*b,B=g.z+F*b,X=Qt(z*.13+5,B*.13+k*.11)-.45,Y=Qt(z*.4+9,B*.4-k*.36)-.5;let ne=b*(1+.85*X+.3*Y);const ue=Qt(z*.22+31,B*.22+17)-.56;D>.35&&ue>0&&(ne+=b*2.6*ue*(D-.35));const we=U*r+F*o;U-=r*we*.22,F-=o*we*.22,v.setXYZ(N,g.x+U*ne,g.y+D*ne,g.z+F*ne)}}p.deleteAttribute("normal"),p.deleteAttribute("uv"),p=Uc(na(p),.45);const m=new je(p,Mi({},LM));m.castShadow=!0,m.receiveShadow=!0,e.add(m);for(const E of[-.97,.98])Wt.push({x:s.x+n*E*a,z:s.z+i*E*a,r:7.5});const y=[[-1.32,-.3,3.4],[-.72,-.42,2.2],[-1.18,.34,2.6],[-.5,.36,1.5],[.62,-.4,2.4],[1.3,-.26,3],[.74,.4,1.8],[.1,-.5,1.3],[-.12,.46,1.1]],_=gn(505),x=Mi({},Wm),I=[rs(7,88,12),rs(7,131,15)],C=new Ct,S=new Ze;return I.forEach((E,w)=>{const b=y.filter((N,U)=>U%2===w),P=new pn(E,x,b.length);b.forEach(([N,U,D],F)=>{const z=s.x+n*N*a+r*U*a,k=s.z+i*N*a+o*U*a;C.setFromEuler(new St((_()-.5)*.5,_()*6.28,(_()-.5)*.5)),S.compose(new A(z,ht(z,k)+D*.12,k),C,new A(D*(1+_()*.5),D*(.7+_()*.4),D*(1+_()*.5))),P.setMatrixAt(F,S),D>1.4&&Wt.push({x:z,z:k,r:D*1.25})}),P.castShadow=!0,P.receiveShadow=!0,e.add(P)}),e}function UM(){const s=gn(5),e=420,t=new Bi(1,1,4,5);t.translate(0,.5,0);const n=t.attributes.position;for(let a=0;a<n.count;a++){const l=n.getY(a);n.setXYZ(a,n.getX(a)+.35*l*l,l,n.getZ(a)*.4)}t.computeVertexNormals();const i=new pn(t,Mi({},{faceScale:2,rust:.3}),e);i.name="iceBlades";const r=new Ze,o=new Ct;for(let a=0;a<e;a++){const l=-Math.PI/2+(s()-.5)*1.6,c=650+s()*500,h=Math.cos(l)*c,u=Math.sin(l)*c,d=15+s()*30;o.setFromEuler(new St((s()-.5)*.2,s()*3,(s()-.5)*.2)),r.compose(new A(h,ht(h,u)-1,u),o,new A(2+s()*3,d,2+s()*3)),i.setMatrixAt(a,r)}return i.castShadow=!1,i.receiveShadow=!0,i}const as={probe:null,glow:null,uPower:{value:1}},Ju=new A(0,1,0),O={hull:new Rt({color:15328732,roughness:.55,metalness:.1}),panel:new Rt({color:12897496,roughness:.5,metalness:.25}),trim:new Rt({color:16745511,roughness:.5,metalness:.1}),dark:new Rt({color:2764600,roughness:.65,metalness:.4}),foil:new Rt({color:14722362,roughness:.38,metalness:.85}),copper:new Rt({color:13133610,roughness:.5,metalness:.6}),amber:new Rt({color:3348992,emissive:16753978,emissiveIntensity:3.2}),warm:new Rt({color:3348992,emissive:16760944,emissiveIntensity:2.6}),cyan:new Rt({color:6176,emissive:5233919,emissiveIntensity:3}),hot:new Rt({color:4198400,emissive:16738842,emissiveIntensity:2.4})},NM=new Rc,Ah=new Map;function al(s,e,t){const n=`${s}/${e}`;if(!Ah.has(n)){const i=NM.load(`./textures/metal/${s}/${e}.jpg`);i.wrapS=i.wrapT=_i,i.anisotropy=8,t&&(i.colorSpace=Vt),Ah.set(n,i)}return Ah.get(n)}function er(s,e,{scale:t=1,colour:n="pattern",colourMix:i=.5,bump:r=.7,roughMix:o=.6}={}){const a={tMC:{value:al(e,"color",!0)},tMN:{value:al(e,"normal",!1)},tMR:{value:al(e,"roughness",!1)}},l=s.onBeforeCompile;return s.onBeforeCompile=(c,h)=>{l&&l(c,h),Object.assign(c.uniforms,a),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMP;
varying vec3 vMN;
varying vec3 vMX;
varying vec3 vMY;
varying vec3 vMZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMP = position;
vMN = normal;
vMX = normalMatrix * vec3(1.0, 0.0, 0.0);
vMY = normalMatrix * vec3(0.0, 1.0, 0.0);
vMZ = normalMatrix * vec3(0.0, 0.0, 1.0);`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vMP; varying vec3 vMN; varying vec3 vMX; varying vec3 vMY; varying vec3 vMZ;
        uniform sampler2D tMC, tMN, tMR;
        vec3 mTri(sampler2D t, vec3 p, vec3 w){ return texture(t, p.zy).rgb*w.x + texture(t, p.xz).rgb*w.y + texture(t, p.xy).rgb*w.z; }`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 mW = pow(abs(normalize(vMN)), vec3(4.0)); mW /= (mW.x + mW.y + mW.z);
        vec3 mP = vMP / ${t.toFixed(3)};
        vec3 mC = mTri(tMC, mP, mW);
        ${n==="replace"?`diffuseColor.rgb = mix(diffuseColor.rgb, mC, ${i.toFixed(3)});`:`float mL = dot(mC, vec3(0.3, 0.59, 0.11)); float mA = dot(textureLod(tMC, vec2(0.5), 10.0).rgb, vec3(0.3, 0.59, 0.11));
        diffuseColor.rgb *= mix(1.0, (mL + 0.02) / (mA + 0.02), ${i.toFixed(3)});`}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, mTri(tMR, mP, mW).g, ${o.toFixed(3)});`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        vec3 mT = mTri(tMN, mP, mW) * 2.0 - 1.0;
        vec3 mBend = mW.x*vec3(0.0, mT.y, mT.x) + mW.y*vec3(mT.x, 0.0, mT.y) + mW.z*vec3(mT.x, mT.y, 0.0);
        normal = normalize(normal + (vMX * mBend.x + vMY * mBend.y + vMZ * mBend.z) * ${r.toFixed(3)});`)},s.customProgramCacheKey=()=>`metal:${e}:${t}:${n}:${i}:${r}:${o}:`+(l?l.toString():""),s}er(O.hull,"hull-panels",{scale:2.2,colourMix:.35,bump:.9,roughMix:.6});er(O.panel,"brushed-steel",{scale:1.2,colourMix:.5,bump:.6,roughMix:.6});er(O.dark,"dark-coated",{scale:1,colourMix:.5,bump:.6,roughMix:.7});er(O.foil,"gold-foil",{scale:.8,colour:"replace",colourMix:.85,bump:1,roughMix:.8});O.tread=er(new Rt({color:9213086,roughness:.5,metalness:.6}),"floor-plate",{scale:.7,colourMix:.6,bump:1,roughMix:.6});O.shell=er(new Rt({color:15328732,roughness:.5,metalness:.08}),"brushed-steel",{scale:1.6,colourMix:.16,bump:.3,roughMix:.4});O.hazard=new Rt({roughness:.6,metalness:.2});function Kl(s,e){const t=Zs(1024,512,(n,i,r)=>{n.fillStyle="#f1ede4",n.fillRect(0,0,i,r);let o=9;const a=()=>(o=o*1664525+1013904223>>>0,o/4294967296),l=8,c=4,h=i/l,u=r/c;for(let d=0;d<c;d++)for(let f=0;f<l;f++){const p=f*h+(d%2?h/2:0),v=d*u,g=a();n.fillStyle=g<.25?"rgba(120,135,160,0.16)":g>.8?"rgba(255,255,255,0.35)":"rgba(0,0,0,0)",n.fillRect(p,v,h,u),n.fillRect(p-i,v,h,u),n.strokeStyle="rgba(70,80,100,0.55)",n.lineWidth=3,n.strokeRect(p+1.5,v+1.5,h-3,u-3),n.strokeRect(p-i+1.5,v+1.5,h-3,u-3),n.fillStyle="rgba(60,70,90,0.6)";for(const[m,y]of[[10,10],[h-10,10],[10,u-10],[h-10,u-10],[h/2,10],[h/2,u-10]])n.beginPath(),n.arc(p+m,v+y,2.6,0,7),n.fill(),n.beginPath(),n.arc(p-i+m,v+y,2.6,0,7),n.fill();if(a()<.22&&(n.fillStyle="rgba(255,132,39,0.85)",n.fillRect(p+h*.2,v+u*.62,h*.3,u*.1)),a()<.18&&(n.fillStyle="rgba(50,58,72,0.8)",n.fillRect(p+h*.6,v+u*.3,h*.22,u*.3)),a()<.15){n.fillStyle="rgba(50,58,72,0.7)";for(let m=0;m<4;m++)n.fillRect(p+h*.2,v+u*(.25+m*.07),h*.4,3)}}});return t.wrapS=t.wrapT=_i,t.repeat.set(s,e),er(new Rt({map:t,roughness:.55,metalness:.1}),"hull-panels",{scale:2.2,colourMix:.2,bump:.55,roughMix:.5})}function Ue(s,e,t,n,i=0,r=0,o=0){const a=new je(new qi(s,e,t),n);return a.position.set(i,r,o),a}function We(s,e,t,n,i,r=0,o=0,a=0){const l=new je(new Hn(s,e,t,n),i);return l.position.set(r,o,a),l}function ti(s,e,t=0,n=0,i=0,r=16){const o=new je(new Dn(s,r,Math.ceil(r*.6)),e);return o.position.set(t,n,i),o}function et(s,e,t,n,i=6){const r=new A().subVectors(e,s),o=new je(new Hn(t,t,r.length(),i),n);return o.position.addVectors(s,e).multiplyScalar(.5),o.quaternion.setFromUnitVectors(Ju,r.normalize()),o}const ze=(s,e,t)=>new A(s,e,t);function Fi(s,e,t,n=0,i=0,r=0,o=8,a=28){const l=new je(new Wi(s,e,o,a),t);return l.rotation.x=Math.PI/2,l.position.set(n,i,r),l}function kM(s,e,t,n=0,i=0,r=0){const o=new je(new $i(s.map(([a,l])=>new de(a,l)),e),t);return o.position.set(n,i,r),o}function fs(s,e){s.updateMatrixWorld(!0);const t=new Map,n=[];s.traverse(r=>{if(r.isMesh){const o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(r.matrixWorld);for(const a of Object.keys(o.attributes))["position","normal","uv"].includes(a)||o.deleteAttribute(a);t.has(r.material)||t.set(r.material,[]),t.get(r.material).push(o)}else r.isLight&&n.push(r)});const i=new it;i.name=e;for(const[r,o]of t){const a=new je(bM(o),r);a.castShadow=!0,a.receiveShadow=!0,i.add(a)}for(const r of n){const o=r.getWorldPosition(new A);i.add(r),r.position.copy(o)}return i}function hs(s,e,t,n=0){return s.position.set(e,ht(e,t)+n,t),s}function Zs(s,e,t){const n=document.createElement("canvas");n.width=s,n.height=e,t(n.getContext("2d"),s,e);const i=new Vr(n);return i.colorSpace=Vt,i.anisotropy=8,i}function FM(s){O.hazard.map=Zs(256,64,(t,n,i)=>{t.fillStyle="#f0b030",t.fillRect(0,0,n,i),t.fillStyle="#24272e";for(let r=-2;r<10;r++)t.beginPath(),t.moveTo(r*32,i),t.lineTo(r*32+16,i),t.lineTo(r*32+16+i,0),t.lineTo(r*32+i,0),t.fill()}),O.hazard.map.wrapS=_i,O.hazard.map.repeat.set(5,1);const e=new it;return e.name="base",e.add(OM()),e.add(zM()),e.add(BM()),e.add(HM()),e.add(VM()),e.add(GM()),e.add(XM()),e.add(MM()),s.add(e),e}function OM(){const{x:s,z:e,radius:t}=lt.habitat,n=new it,i=2.2,r=t*Math.cos(Math.PI/8),o=Math.PI/8,a=tn.degToRad(lt.habitat.doorAngleDeg),l=Kl(2,1),c=Kl(2,.5),h=(D,F,z,k,B)=>{const X=We(D,F,z,8,k,0,B,0);X.rotation.y=o,n.add(X)};h(t*.8,t*.6,.5,O.foil,i-.3),h(t,t*.8,.9,O.panel,i+.45),h(t,t,3.1,l,i+2.45),h(t*.74,t,1.3,c,i+4.65),h(t*.7,t*.74,.25,O.panel,i+5.42),h(t+.05,t+.05,.42,O.trim,i+1.25),h(t+.04,t+.04,.1,O.dark,i+.92),h(t+.04,t+.04,.12,O.dark,i+4),h(t*.745+.03,t*.745+.03,.1,O.trim,i+5.28);for(let D=0;D<8;D++){const F=Math.PI/8+D*Math.PI/4,z=Math.cos(F),k=Math.sin(F),B=Ue(.4,3.14,.4,O.panel,z*(t-.04),i+2.45,k*(t-.04));B.rotation.y=-F,n.add(B),n.add(et(ze(z*t,i+4,k*t),ze(z*t*.74,i+5.3,k*t*.74),.14,O.panel,6)),n.add(ti(.2,O.dark,z*t,i+4.02,k*t,8))}n.add(We(2.6,2.2,1.3,16,O.dark,0,i-.6,0)),n.add(We(2.25,2.25,.12,16,O.trim,0,i-1.2,0));for(let D=0;D<3;D++){const F=D/3*Math.PI*2+.5;n.add(ti(1,O.foil,Math.cos(F)*3.6,i-.45,Math.sin(F)*3.6)),n.add(Fi(1,.05,O.dark,Math.cos(F)*3.6,i-.45,Math.sin(F)*3.6,6,20))}for(let D=0;D<4;D++){const F=Math.PI/8+D*Math.PI/2,z=(ue,we,Q=0)=>ze(Math.cos(F+Q)*ue,we,Math.sin(F+Q)*ue),k=z(t-.3,i+.9),B=z(t+2.3,.34),X=k.clone().lerp(B,.56);n.add(et(k,B,.15,O.dark,8)),n.add(et(k,X,.27,O.foil,10));const Y=ti(.31,O.dark,0,0,0,10);Y.position.copy(X),n.add(Y),n.add(et(z(t-2.2,i+.1,.3),X,.1,O.panel)),n.add(et(z(t-2.2,i+.1,-.3),X,.1,O.panel));const ne=ti(.27,O.panel,0,0,0,10);ne.position.copy(B),n.add(ne),n.add(We(.95,1.12,.2,16,O.dark,B.x,.1,B.z)),n.add(We(.8,.8,.05,16,O.trim,B.x,.215,B.z))}const u=Zs(256,128,(D,F,z)=>{const k=D.createLinearGradient(0,0,0,z);k.addColorStop(0,"#fff0c4"),k.addColorStop(.55,"#ffc46a"),k.addColorStop(1,"#e8782a"),D.fillStyle=k,D.fillRect(0,0,F,z),D.fillStyle="rgba(120,50,10,0.55)",D.fillRect(18,78,70,50),D.fillRect(150,60,34,68),D.fillRect(196,92,44,36),D.fillStyle="rgba(255,255,230,0.8)",D.fillRect(30,58,26,16),D.fillStyle="#3a2412",D.fillRect(F/2-3,0,6,z)}),d=new Rt({color:1707264,emissive:16777215,emissiveMap:u,emissiveIntensity:2,roughness:.2}),f=D=>{const F=new it;return F.rotation.y=-D,n.add(F),F};for(const D of[-Math.PI/4,3*Math.PI/4,-3*Math.PI/4,0,Math.PI/2,Math.PI,-Math.PI/2]){const F=f(D),z=D===0||D===Math.PI/2,k=z?1.3:2.6,B=i+2.75;F.add(Ue(.1,1.5,k+.5,O.dark,r+.02,B,0));const X=new je(new $n(k,1.15),d);X.rotation.y=Math.PI/2,X.position.set(r+.08,B,0),F.add(X),F.add(Ue(.34,.16,k+.74,O.panel,r+.14,B+.72,0)),F.add(Ue(.4,.12,k+.74,O.panel,r+.17,B-.72,0));for(const Y of[-1,1])F.add(Ue(.28,1.36,.17,O.panel,r+.11,B,Y*(k/2+.2)));z||(F.add(Ue(.26,.16,.5,O.dark,r+.12,i+3.8,0)),F.add(Ue(.2,.05,.4,O.warm,r+.14,i+3.7,0)))}const p=f(a),v=r+.6;p.add(Ue(1.5,3,2.5,O.hull,v,i+1.75,0)),p.add(Ue(1.6,.3,2.6,O.trim,v,i+3.3,0)),p.add(Ue(1.56,.14,2.56,O.dark,v,i+.3,0));for(const D of[-1,1])p.add(Ue(.22,3,.22,O.panel,v+.68,i+1.75,D*1.2));const g=r+1.36;p.add(Ue(.1,2.36,1.56,O.dark,g,i+1.5,0)),p.add(Ue(.08,2.1,1.24,O.panel,g+.04,i+1.42,0)),p.add(Ue(.06,.08,1.24,O.trim,g+.07,i+.72,0));const m=We(.3,.3,.05,20,O.warm,g+.08,i+1.95,0);m.rotation.z=Math.PI/2,p.add(m);const y=Fi(.33,.05,O.dark,g+.09,i+1.95,0,6,20);y.rotation.set(0,Math.PI/2,0),p.add(y),p.add(Ue(.1,.34,.1,O.dark,g+.1,i+1.25,.42));for(const D of[-1,1])p.add(Ue(.06,1.7,.09,O.amber,g+.05,i+1.5,D*.9));p.add(Ue(.06,.26,.2,O.cyan,g+.05,i+1.45,1.08)),p.add(Ue(.3,.14,1.3,O.amber,r+1.45,i+2.95,0)),p.add(Ue(1.5,.12,2.3,O.tread,r+2.1,i+.18,0));const _=7;for(let D=0;D<_;D++)p.add(Ue(.44,.1,1.7,O.tread,r+3.05+D*.42,i+.18-(D+1)*(i+.05)/(_+.4),0));for(const D of[-.95,.95]){const F=ze(r+2.8,i+.2,D),z=ze(r+3.05+_*.42,.25,D),k=ze(0,1,0),B=ze(0,.52,0);p.add(et(F,F.clone().add(k),.05,O.trim)),p.add(et(z,z.clone().add(k),.05,O.trim)),p.add(et(F.clone().add(k),z.clone().add(k),.055,O.trim)),p.add(et(F.clone().add(B),z.clone().add(B),.035,O.trim));for(const X of[.25,.5,.75]){const Y=F.clone().lerp(z,X);p.add(et(Y,Y.clone().add(k),.035,O.trim,5))}p.add(et(ze(r+1.4,i+1.2,D*1.2),F.clone().add(k),.05,O.trim)),p.add(et(ze(r+1.4,i+.72,D*1.2),F.clone().add(B),.035,O.trim)),p.add(et(F,z,.08,O.dark)),p.add(We(.16,.2,.08,8,O.dark,z.x,.05,D))}const x=i+5.55;n.add(We(2.3,2.6,1.3,16,c,0,x+.65,0));const I=Zs(512,32,(D,F,z)=>{D.fillStyle="#ffc878",D.fillRect(0,0,F,z),D.fillStyle="#2a1608";for(let k=0;k<16;k++)D.fillRect(k*32,0,7,z)}),C=new Rt({color:1707264,emissive:16777215,emissiveMap:I,emissiveIntensity:1.9,roughness:.25});n.add(We(2.44,2.52,.42,24,C,0,x+.72,0)),n.add(We(2.56,2.56,.07,16,O.dark,0,x+.97,0)),n.add(We(2.6,2.6,.07,16,O.dark,0,x+.47,0)),n.add(We(2.36,2.36,.1,16,O.trim,0,x+1.3,0)),n.add(We(1.7,2.3,.34,16,O.panel,0,x+1.5,0)),n.add(We(.75,.75,.12,16,O.dark,0,x+1.72,0)),n.add(Fi(.3,.035,O.trim,0,x+1.8,0,5,14));const S=new je(new Wi(t*.69,.045,5,8),O.trim);S.rotation.set(Math.PI/2,0,o),S.position.y=x+.78,n.add(S);for(let D=0;D<8;D++){const F=Math.PI/8+D*Math.PI/4,z=ze(Math.cos(F)*t*.69,x-.02,Math.sin(F)*t*.69);n.add(et(z,z.clone().setY(x+.78),.04,O.trim,5))}n.add(Ue(1.6,.7,1.1,O.panel,-3.1,x+.33,2.3)),n.add(Ue(1.66,.1,1.16,O.trim,-3.1,x+.7,2.3)),n.add(Ue(1,.5,1.4,O.foil,3.3,x+.22,-2.1));for(const[D,F]of[[2.9,2.6],[3.6,1.5],[.4,3.9]])n.add(We(.24,.3,.7,10,O.panel,D,x+.33,F)),n.add(We(.34,.34,.07,10,O.dark,D,x+.74,F));for(const[D,F,z]of[[3.9,-.4,4.4],[-3.9,-.6,3],[1.2,-3.9,2.3]]){n.add(We(.16,.2,.2,8,O.dark,D,x+.08,F)),n.add(et(ze(D,x,F),ze(D,x+z,F),.06,O.dark)),n.add(ti(.14,O.amber,D,x+z+.1,F,8));for(const k of[.55,.72,.86])n.add(et(ze(D-.34,x+z*k,F),ze(D+.34,x+z*k,F),.025,O.dark,4))}const E=ze(-2.5,x+2.7,-3.1);n.add(We(.3,.38,.3,10,O.dark,E.x,x+.12,E.z)),n.add(et(ze(E.x,x,E.z),E,.13,O.panel));const w=[];for(let D=0;D<=8;D++){const F=D/8*1.7;w.push(new de(F,.22*F*F))}const b=O.hull.clone();b.side=qt;const P=new it;P.add(new je(new $i(w,28),b)),P.add(Fi(1.7,.05,O.trim,0,.636,0,5,28)),P.add(et(ze(0,0,0),ze(0,1.15,0),.04,O.dark)),P.add(ti(.13,O.trim,0,1.2,0,8)),P.add(We(.22,.3,.3,10,O.dark,0,-.14,0));for(let D=0;D<3;D++){const F=D/3*Math.PI*2;P.add(et(ze(Math.cos(F)*1.5,.5,Math.sin(F)*1.5),ze(0,1.15,0),.025,O.dark,4))}P.position.copy(E),P.quaternion.setFromUnitVectors(Ju,Ut.sunDir.clone().setY(Ut.sunDir.y+.25).normalize()),n.add(P);const N=new ta(16756848,9,16,1.8);N.position.set(Math.cos(a)*(t+2.6),i+3,Math.sin(a)*(t+2.6)),n.add(N),Wt.push({x:s,z:e,r:t+1});for(const D of[t+2.4,t+3.8])Wt.push({x:s+Math.cos(a)*D,z:e+Math.sin(a)*D,r:1.15});const U=fs(n,"habitat");return hs(U,s,e)}function zM(){const{x:s,z:e,cols:t,rows:n}=lt.solarArray,i=new it,r=(v,g)=>{const m=al("solar-cells",v,g).clone();return m.repeat.set(2,1.2),m.needsUpdate=!0,m},o=new Rt({map:r("color",!0),normalMap:r("normal",!1),roughnessMap:r("roughness",!1),roughness:.6,metalness:.5,emissive:662608,emissiveIntensity:.35}),a=Math.atan2(Ut.sunDir.x,Ut.sunDir.z),l=(Math.PI/2-Math.asin(Ut.sunDir.y))*.85,c=1.55;for(let v=0;v<t;v++)for(let g=0;g<n;g++){const m=new it,y=new it;y.position.y=c,y.rotation.order="YXZ",y.rotation.y=a,y.rotation.x=l,y.add(Ue(2.8,.1,1.8,O.dark));const _=new je(new $n(2.6,1.6),o);_.rotation.x=-Math.PI/2,_.position.y=.056,y.add(_);for(const x of[-1,1])y.add(Ue(2.8,.05,.08,O.panel,0,.07,x*.86)),y.add(Ue(.08,.05,1.8,O.panel,x*1.36,.07,0)),y.add(Ue(.09,.12,1.6,O.panel,x*.8,-.1,0));y.add(Ue(2.5,.12,.12,O.panel,0,-.1,0)),m.add(y),m.add(et(ze(0,0,0),ze(0,c-.05,0),.09,O.dark,8)),m.add(We(.15,.15,.24,10,O.panel,0,c-.14,0)),m.add(et(ze(-.75,.06,.55),ze(0,1.05,0),.04,O.dark,4)),m.add(et(ze(.75,.06,.55),ze(0,1.05,0),.04,O.dark,4)),m.add(et(ze(0,.7,0),ze(-.45,c-.2,-.3),.045,O.trim,5)),m.add(We(.4,.48,.12,12,O.dark,0,.06,0)),m.add(We(.3,.3,.03,12,O.trim,0,.13,0)),i.add(hs(m,s+v*3.2,e+g*3.4));for(const x of[-.78,.78])Wt.push({x:s+v*3.2,z:e+g*3.4+x,r:.95})}const h=e-1.8,u=e+(n-1)*3.4+1.5;for(let v=0;v<t;v++){const g=s+v*3.2,m=ht(g,e);i.add(et(ze(g,m+1.32,h),ze(g,m+1.32,u),.06,O.panel,6));const y=new it;y.add(Ue(.5,.55,.5,O.shell,0,1.1,0),Ue(.54,.08,.54,O.trim,0,1.4,0),Ue(.1,.08,.1,O.amber,.12,1.47,.12)),y.add(et(ze(0,0,0),ze(0,.85,0),.07,O.dark),We(.22,.26,.08,10,O.dark,0,.04,0)),i.add(hs(y,g,h-.1)),Wt.push({x:g,z:h-.1,r:.45})}i.add(et(ze(s-.3,ht(s,h)+.09,h-.55),ze(s+t*3.2-1.6,ht(s,h)+.09,h-.55),.09,O.dark,6));const d=s+t*3.2-1.2,f=e-2.2,p=new it;p.add(Ue(1.3,1.1,.8,O.shell,0,.75,0),Ue(1.36,.12,.86,O.trim,0,1.32,0),Ue(1.36,.08,.86,O.dark,0,.2,0)),p.add(Ue(.03,.9,.02,O.dark,0,.75,.41),Ue(.5,.34,.03,O.cyan,-.32,.92,.41),Ue(.2,.12,.2,O.amber,.4,1.44,.2));for(const v of[-.5,.5])p.add(Ue(.12,.2,.7,O.dark,v,.1,0));return i.add(hs(p,d,f)),Wt.push({x:d,z:f,r:.95}),fs(i,"solarArray")}function BM(){const{x:s,z:e}=lt.reactor,t=new it;t.add(We(3.3,3.7,.22,8,O.panel,0,.11,0)),t.add(We(3,3.3,.5,8,O.dark,0,.42,0)),t.add(We(2.9,2.9,.08,8,O.trim,0,.7,0)),t.add(We(1.5,1.7,1.2,16,O.panel,0,1.32,0)),t.add(We(1.73,1.73,.26,24,O.hazard,0,.9,0)),t.add(We(1.3,1.4,2.6,16,Kl(1,.5),0,3.17,0)),t.add(We(1.36,1.36,.32,16,O.trim,0,3.67,0)),t.add(We(1.4,1.4,.1,16,O.dark,0,2.37,0)),t.add(We(1.36,1.36,.1,16,O.dark,0,4.42,0));const n=new je(new Dn(1.3,20,10,0,Math.PI*2,0,Math.PI/2),O.hull);n.position.y=4.47,n.scale.y=.55,t.add(n),t.add(We(.42,.55,.3,12,O.panel,0,5.2,0)),t.add(We(.58,.58,.06,12,O.trim,0,5.08,0)),t.add(et(ze(0,5.3,0),ze(0,6.3,0),.05,O.dark)),t.add(ti(.2,O.amber,0,6.4,0,10)),t.add(We(1.42,1.42,.07,24,O.cyan,0,3.2,0));for(let a=0;a<4;a++){const l=a/4*Math.PI*2+Math.PI/8;t.add(We(.09,.11,.16,8,O.dark,Math.cos(l)*2.95,.78,Math.sin(l)*2.95)),t.add(ti(.1,O.amber,Math.cos(l)*2.95,.9,Math.sin(l)*2.95,8))}for(let a=0;a<16;a++){const l=a/16*Math.PI*2;t.add(We(.07,.07,.1,6,O.panel,Math.cos(l)*2.7,.76,Math.sin(l)*2.7))}t.add(Fi(1.47,.07,O.copper,0,2.75,0,6,28)),t.add(Fi(1.47,.07,O.copper,0,4.1,0,6,28));for(let a=0;a<4;a++){const l=a/4*Math.PI*2,c=Math.cos(l),h=Math.sin(l);t.add(et(ze(c*1.5,1.95,h*1.5),ze(c*1.5,4.1,h*1.5),.07,O.copper,6)),t.add(et(ze(c*1.5,1.95,h*1.5),ze(c*2.25,1.3,h*2.25),.07,O.copper,6)),a!==1&&(t.add(We(.42,.42,1.1,12,O.foil,c*2.3,1.3,h*2.3)),t.add(ti(.42,O.foil,c*2.3,1.85,h*2.3,12)),t.add(We(.46,.46,.08,12,O.dark,c*2.3,.78,h*2.3)))}t.add(Ue(.9,1.25,.6,O.shell,0,1.37,2.45),Ue(.96,.1,.66,O.trim,0,2.03,2.45),Ue(.96,.08,.66,O.dark,0,.78,2.45)),t.add(Ue(.5,.3,.03,O.cyan,-.1,1.6,2.76),Ue(.12,.12,.03,O.amber,.3,1.66,2.76),Ue(.5,.06,.03,O.dark,-.1,1.3,2.76));const i=Zs(256,128,(a,l,c)=>{a.fillStyle="#d9dee6",a.fillRect(0,0,l,c),a.fillStyle="rgba(90,100,120,0.35)";for(let h=0;h<32;h++)a.fillRect(h*8,0,2,c);a.fillStyle="rgba(60,70,90,0.5)",a.fillRect(0,c/2-2,l,4)}),r=Zs(256,8,(a,l,c)=>{const h=a.createLinearGradient(0,0,l,0);h.addColorStop(0,"#ff5a1e"),h.addColorStop(.35,"#7a2408"),h.addColorStop(1,"#0a0200"),a.fillStyle=h,a.fillRect(0,0,l,c)}),o=new Rt({map:i,emissive:16777215,emissiveMap:r,emissiveIntensity:.9,roughness:.4,metalness:.45,side:qt});for(let a=0;a<4;a++){const l=a/4*Math.PI*2+Math.PI/4,c=new it;c.rotation.y=-l,t.add(c);const h=2.77,u=new je(new $n(5.5,3.2),o);u.position.set(4.3,h,0),c.add(u),c.add(Ue(5.6,.12,.14,O.dark,4.3,h+1.62,0),Ue(5.6,.12,.14,O.dark,4.3,h-1.62,0),Ue(.12,3.3,.14,O.dark,7.07,h,0),Ue(.12,3.3,.14,O.dark,1.55,h,0));for(const d of[2.9,4.3,5.7])c.add(Ue(.06,3.2,.1,O.dark,d,h,0));for(const d of[-1.05,0,1.05])c.add(et(ze(1.35,h+d,0),ze(7,h+d,0),.055,O.copper,6));c.add(et(ze(.9,5,0),ze(7.05,h+1.66,0),.03,O.dark,4)),c.add(et(ze(7.07,h-1.6,0),ze(7.07,.08,0),.07,O.dark)),c.add(We(.26,.32,.1,10,O.dark,7.07,.05,0)),c.add(et(ze(3.2,.72,0),ze(4.6,h-1.6,0),.05,O.dark,5));for(const d of[4.5,6.3])Wt.push({x:s+Math.cos(l)*d,z:e+Math.sin(l)*d,r:.95})}return Wt.push({x:s,z:e,r:3.8}),hs(fs(t,"reactor"),s,e)}const fi={x:-3.2,z:.5};function HM(){const{x:s,z:e}=lt.cryobot,t=new it,n=8.6,i=3,r=.5,o=(N,U)=>{const D=i+(r-i)*(U/n);return ze(Math.cos(N)*D,U,Math.sin(N)*D)},a=[0,1,2].map(N=>N/3*Math.PI*2+.4);a.forEach((N,U)=>{const D=a[(U+1)%3];t.add(et(o(N,.14),o(N,n),.14,O.dark,8)),t.add(et(o(N,.14),o(N,2.2),.19,O.panel,8));const F=o(N,0);t.add(We(.5,.6,.16,12,O.dark,F.x,.08,F.z)),t.add(We(.42,.42,.04,12,O.trim,F.x,.175,F.z));for(const[k,B]of[[.34,0],[-.17,.3],[-.17,-.3]])t.add(We(.05,.05,.16,6,O.panel,F.x+k,.22,F.z+B));for(const k of[2.4,5.6])t.add(et(o(N,k),o(D,k),.055,O.dark,5));t.add(et(o(N,2.4),o(D,5.6),.035,O.panel,4)),t.add(et(o(D,2.4),o(N,5.6),.035,O.panel,4));const z=o(N,5.6);t.add(et(z,ze(Math.cos(N)*.8,5.6,Math.sin(N)*.8),.045,O.dark,5))}),t.add(Fi(.8,.07,O.trim,0,5.6,0,8,28)),t.add(We(.82,.9,.2,16,O.dark,0,n,0)),t.add(We(.86,.86,.07,16,O.trim,0,n+.13,0));const l=Math.atan2(fi.z,fi.x),c=new it;c.rotation.y=-l,c.position.y=n;const h=.44,u=We(h,h,.14,24,O.panel,h,.72,0);u.rotation.x=Math.PI/2,c.add(u);const d=We(.12,.12,.44,10,O.trim,h,.72,0);d.rotation.x=Math.PI/2,c.add(d);for(const N of[-1,1])c.add(Ue(1,.95,.06,O.shell,h,.6,N*.16)),c.add(Ue(1.06,.1,.07,O.trim,h,1.1,N*.16));c.add(Ue(.5,.08,.44,O.dark,h,1.18,0)),c.add(et(ze(h,1.2,0),ze(h,1.75,0),.04,O.dark,5)),c.add(ti(.15,O.amber,h,1.85,0,8)),t.add(c);const f=ze(Math.cos(l),0,Math.sin(l));t.add(et(ze(fi.x+f.x*-.1,.95,fi.z+f.z*-.1),ze(f.x*h*2,n+.78,f.z*h*2),.045,O.dark,6)),t.add(et(ze(0,n+.72,0),ze(0,-6.8,0),.045,O.dark,6));const p=new it;p.rotation.y=-l,p.position.set(fi.x,0,fi.z),p.add(Ue(1.5,.14,1.2,O.dark,0,.07,0));const v=We(.34,.34,.7,18,O.copper,0,.72,-.1);v.rotation.x=Math.PI/2,p.add(v);for(const N of[-1,1]){const U=We(.5,.5,.06,18,O.shell,0,.72,-.1+N*.38);U.rotation.x=Math.PI/2,p.add(U),p.add(Ue(.9,.95,.07,O.panel,0,.6,-.1+N*.46))}p.add(Ue(.5,.5,.36,O.shell,.05,.5,.72),Ue(.54,.08,.4,O.trim,.05,.78,.72),Ue(.1,.08,.1,O.amber,.2,.85,.78)),p.add(Ue(.26,.2,.03,O.cyan,-.05,.52,.91)),t.add(p);const g=new it,m=Kl(.5,1);g.add(We(.55,.55,3.7,18,m,0,4.65,0)),g.add(We(.55,.46,1.9,18,m,0,1.85,0)),g.add(We(.3,.55,.5,18,O.panel,0,6.75,0)),g.add(We(.14,.24,.3,10,O.dark,0,7.13,0));const y=Fi(.11,.035,O.panel,0,7.36,0,5,12);y.rotation.set(0,0,0),g.add(y);for(const N of[1.5,3.1,4.9])g.add(We(.59,.59,.2,18,O.trim,0,N,0));for(const N of[2.8,3.9,5.7,6.45])g.add(We(.575,.575,.07,18,O.dark,0,N,0));for(let N=0;N<3;N++){const U=N/3*Math.PI*2+.9,D=Ue(.12,3.5,.16,O.dark,Math.cos(U)*.6,4.7,Math.sin(U)*.6);D.rotation.y=-U,g.add(D)}for(let N=0;N<4;N++){const U=N/4*Math.PI*2,D=Ue(.05,1,.16,O.amber,Math.cos(U)*.52,2.2,Math.sin(U)*.52);D.rotation.y=-U,g.add(D);const F=Ue(.05,.16,.22,O.cyan,Math.cos(U+.5)*.56,5.3,Math.sin(U+.5)*.56);F.rotation.y=-(U+.5),g.add(F)}g.add(We(.5,.5,.16,18,O.copper,0,.82,0)),g.add(We(.48,.44,.34,18,O.dark,0,.57,0));const _=new je(new Bi(.44,1.3,18),O.hot);_.rotation.x=Math.PI,_.position.y=-.25,g.add(_),t.add(kM([[1.2,0],[1.66,0],[1.66,.1],[1.52,.24],[1.2,.24]],32,O.dark)),t.add(Fi(1.36,.05,O.trim,0,.26,0,6,32));for(let N=0;N<6;N++){const U=N/6*Math.PI*2+.2,D=Ue(.34,.16,.24,O.panel,Math.cos(U)*1.45,.3,Math.sin(U)*1.45);D.rotation.y=-U,t.add(D),N%2===0&&t.add(Ue(.1,.06,.1,O.cyan,Math.cos(U+.5)*1.45,.27,Math.sin(U+.5)*1.45))}const x=fs(t,"cryobot"),I=new At({side:nn,uniforms:{uPower:as.uPower},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      varying vec3 vP; uniform float uPower;
      void main(){
        float d = clamp(-vP.y / 7.0, 0.0, 1.0);            // 0 at the rim, 1 at the bottom
        float rings = 0.85 + 0.15 * sin(vP.y * 9.0);        // melt rings in the wall
        vec3 col = mix(vec3(0.05,0.22,0.36), vec3(0.35,1.25,1.6), smoothstep(0.0, 0.75, d)) * rings;
        gl_FragColor = vec4(col * uPower, 1.0);
      }`}),C=new Hn(1.16,.95,7,28,1,!0);C.translate(0,-3.5,0);const S=new je(C,I);S.name="meltShaft";const E=new je(new Gr(.96,24),O.cyan);E.rotation.x=-Math.PI/2,E.position.y=-7;const w=new je(new Wi(1.85,.36,10,32),Mi());w.rotation.x=Math.PI/2,w.scale.z=.5,w.position.y=0,w.receiveShadow=!0;const b=new ta(6281471,30,18,1.6);b.position.y=.9;const P=fs(g,"probe");x.add(S,E,w,b,P),as.probe=P,as.glow=b,Wt.push({x:s,z:e,r:1.9});for(const N of a)Wt.push({x:s+Math.cos(N)*(i-.35),z:e+Math.sin(N)*(i-.35),r:.75});return Wt.push({x:s+fi.x,z:e+fi.z,r:.95}),hs(x,s,e)}function VM(){const{x:s,z:e}=lt.cableSpool,t=new it,n=1.4,i=new it;i.rotation.z=Math.PI/2,i.position.y=n,i.add(We(.78,.78,1.3,24,O.copper));for(let o=-6;o<=6;o++)i.add(We(.805,.805,.035,24,O.dark,0,o*.098,0));for(const o of[-1,1]){i.add(We(1.2,1.2,.09,28,O.shell,0,o*.72,0)),i.add(We(1.24,1.24,.05,28,O.trim,0,o*.72,0)),i.add(We(.36,.36,.1,12,O.trim,0,o*.8,0));for(let a=0;a<6;a++){const l=a/6*Math.PI*2;i.add(We(.17,.17,.1,10,O.dark,Math.cos(l)*.82,o*.725,Math.sin(l)*.82))}}i.add(We(.2,.2,2,10,O.dark)),t.add(i);for(const o of[-.95,.95]){t.add(et(ze(o,n,0),ze(o,.14,.95),.08,O.dark),et(ze(o,n,0),ze(o,.14,-.95),.08,O.dark)),t.add(et(ze(o,.6,.6),ze(o,.6,-.6),.05,O.dark,5)),t.add(Ue(.2,.14,2.3,O.dark,o,.07,0)),t.add(Ue(.26,.3,.26,O.panel,o,n,0));for(const a of[-1,1])t.add(We(.06,.06,.2,6,O.trim,o,.2,a))}for(const o of[-.95,.95])t.add(Ue(2,.1,.12,O.dark,0,.1,o));t.add(et(ze(-.95,.5,1.15),ze(.95,.5,1.15),.045,O.panel,6)),t.add(Ue(.2,.3,.16,O.trim,.15,.5,1.15));for(const o of[-.95,.95])t.add(et(ze(o,.14,.95),ze(o,.5,1.15),.045,O.panel,5));t.add(Ue(.6,.7,.6,O.shell,1.5,.5,.2),Ue(.64,.1,.64,O.trim,1.5,.88,.2),Ue(.64,.08,.64,O.dark,1.5,.14,.2)),t.add(Ue(.14,.1,.14,O.amber,1.62,.97,.3),Ue(.03,.22,.3,O.cyan,1.81,.56,.2)),t.add(et(ze(1.2,n,0),ze(1.5,.9,.1),.06,O.dark,6)),t.rotation.y=Math.atan2(-(lt.cryobot.z-e),lt.cryobot.x-s)+Math.PI/2;const r=new it;return r.add(t),Wt.push({x:s,z:e,r:1.9}),hs(fs(r,"cableSpool"),s,e)}function Qa(s,e,t=.16){const n=t+.02,i=e.map(([h,u])=>new A(h,ht(h,u)+n,u)),r=new Ur(i),o=r.getSpacedPoints(Math.ceil(r.getLength()/1.2)).map(h=>new A(h.x,ht(h.x,h.z)+n,h.z)),a=new Ur(o);s.add(new je(new Js(a,o.length*2,t,8,!1),O.dark));const l=a.getLength(),c=new A;for(let h=.7;h<l-.3;h+=1.5){const u=a.getPointAt(h/l);a.getTangentAt(h/l,c);const d=We(t*1.32,t*1.32,.13,8,O.panel,u.x,u.y,u.z);d.quaternion.setFromUnitVectors(Ju,c),s.add(d)}for(let h=4;h<l-2;h+=9){const u=a.getPointAt(h/l);a.getTangentAt(h/l,c);const d=new it;d.add(Ue(.26,.08,.7,O.trim,0,-t+.02,0)),d.add(Ue(.2,t*2+.1,t*2+.16,O.dark,0,.02,0));for(const f of[-1,1])d.add(We(.04,.04,.16,6,O.panel,0,-t+.1,f*.28));d.add(et(ze(0,0,.28),ze(0,.62,.28),.035,O.dark,4)),d.add(ti(.13,O.amber,0,.7,.28,8)),d.position.copy(u),d.rotation.y=Math.atan2(c.x,c.z)+Math.PI/2,s.add(d)}}function GM(){const s=new it,e=lt.reactor,t=lt.habitat,n=lt.cableSpool,i=lt.cryobot,r=lt.solarArray;return Qa(s,[[e.x-3,e.z+2],[16,-20],[9,-11],[t.x+4,t.z-4.5]]),Qa(s,[[e.x+3,e.z+3],[35,-15],[39,1],[33,13],[n.x+.5,n.z-1.2]],.18),Qa(s,[[n.x+1.2,n.z+.6],[33,24.6],[i.x+fi.x-.8,i.z+fi.z+.1]],.18),Qa(s,[[r.x+r.cols*3.2-1,r.z-2.9],[-4.4,7.8],[-5.3,5.1]],.1),fs(s,"cables")}const jh=["ICE CORES","SPARES","TOOLS","FOOD","CABLE","SAMPLES"];let Eh=null;function WM(s,e,t){if(!Eh){const a=Zs(1536,512,l=>{jh.forEach((c,h)=>{const u=h%3*512,d=Math.floor(h/3)*256;l.fillStyle="#e6e2d8",l.fillRect(u,d,512,256),l.strokeStyle="#2a2f38",l.lineWidth=10,l.strokeRect(u+16,d+16,480,224),l.fillStyle="#ff8427",l.fillRect(u+32,d+32,448,30),l.fillStyle="#2a2f38",l.textAlign="center",l.textBaseline="middle",l.font="bold 74px sans-serif",l.fillText(c,u+256,d+138),l.font="bold 28px sans-serif",l.fillText(`CRATE ${String(h+1).padStart(2,"0")}  ·  THIS SIDE UP`,u+256,d+206)})});Eh=new Rt({map:a,roughness:.6,metalness:.05})}const n=new $n(e,t),i=n.attributes.uv,r=s%3/3,o=1-(Math.floor(s/3)+1)/2;for(let a=0;a<i.count;a++)i.setXY(a,r+i.getX(a)/3,o+i.getY(a)/2);return new je(n,Eh)}function Gf(s,e){const t=new it,n=s*1.4;t.add(Ue(n,s,s,O.shell,0,s/2,0)),t.add(Ue(n+.04*s,s*.14,s*1.04,O.trim,0,s*.82,0)),t.add(Ue(n+.04*s,s*.08,s*1.04,O.dark,0,s*.1,0)),t.add(Ue(n+.02*s,s*.03,s*1.02,O.dark,0,s*.72,0));for(const i of[-.45,.45])t.add(Ue(s*.12,s*1.03,s*1.05,O.panel,i*s,s/2,0));for(const i of[-1,1])for(const r of[0,1])for(const o of[-1,1])t.add(Ue(s*.17,s*.17,s*.17,O.dark,i*(n/2-s*.05),r*(s-s*.1)+s*.05,o*(s/2-s*.05)));for(const i of[-1,1]){const r=WM(e,s*.72,s*.36);r.position.set(0,s*.41,i*(s/2+.006)),i<0&&(r.rotation.y=Math.PI),t.add(r),t.add(Ue(s*.1,s*.1,s*.05,O.dark,-s*.2,s*.72,i*s*.53),Ue(s*.1,s*.1,s*.05,O.dark,s*.2,s*.72,i*s*.53));const o=i*(n/2+s*.04);t.add(et(ze(o,s*.5,-s*.2),ze(o+i*s*.07,s*.5,-s*.2),s*.025,O.dark,4)),t.add(et(ze(o,s*.5,s*.2),ze(o+i*s*.07,s*.5,s*.2),s*.025,O.dark,4)),t.add(et(ze(o+i*s*.07,s*.5,-s*.2),ze(o+i*s*.07,s*.5,s*.2),s*.03,O.dark,5))}return t}function XM(){const s=new it;return[[11,13,1.1],[12.6,14.1,.9],[13.5,2,1],[-3,12,1.2],[24.5,19,.8],[3,15.5,.7]].forEach(([t,n,i],r)=>{const o=Gf(i,r%jh.length);if(o.rotation.y=t*.3,r===0||r===3){const a=Gf(i*.62,(r+2)%jh.length);a.position.set(i*.12,i,-i*.06),a.rotation.y=.5,o.add(a)}s.add(hs(o,t,n)),Wt.push({x:t,z:n,r:i})}),fs(s,"crates")}const _r=new St(0,0,0,"YXZ"),br=new A,qM={type:"change"},$M={type:"lock"},YM={type:"unlock"},Wf=Math.PI/2;class ZM extends Hm{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=KM.bind(this),this._onPointerlockChange=JM.bind(this),this._onPointerlockError=jM.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;br.setFromMatrixColumn(t.matrix,0),br.crossVectors(t.up,br),t.position.addScaledVector(br,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;br.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(br,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function KM(s){if(this.enabled===!1||this.isLocked===!1)return;const e=s.movementX||s.mozMovementX||s.webkitMovementX||0,t=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.object;_r.setFromQuaternion(n.quaternion),_r.y-=e*.002*this.pointerSpeed,_r.x-=t*.002*this.pointerSpeed,_r.x=Math.max(Wf-this.maxPolarAngle,Math.min(Wf-this.minPolarAngle,_r.x)),n.quaternion.setFromEuler(_r),this.dispatchEvent(qM)}function JM(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent($M),this.isLocked=!0):(this.dispatchEvent(YM),this.isLocked=!1)}function jM(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const QM=1.315,Ch=1.7,Mr=4.2,Rh=7.5,ew=2.6,tw=.7,nw=7.5,iw=4.5,sw=.1,Xf=.2,rw=.72,ow=1.3,aw=1.65,lw=.05,cw=.09,hw=.022,uw=.02,Ph=11,dw=.62,fw=.9,pw=1,mw=16;function gw(s,e,t=null){const n=new ZM(s,e),i=new Set,r=new A,o=new A,a=new A,l=new A,c=new St(0,0,0,"YXZ");let h=0,u=!0,d=0,f=0,p=0,v=0,g=0,m=0,y=0,_=0;const{spawn:x}=lt;s.position.set(x.x,ht(x.x,x.z)+Ch,x.z),s.lookAt(x.lookAtX,x.lookAtY,x.lookAtZ),r.copy(s.position),l.copy(s.position),addEventListener("keydown",P=>{i.add(P.code),P.code==="Space"&&!P.repeat&&n.isLocked&&(f=Xf)}),addEventListener("keyup",P=>i.delete(P.code)),addEventListener("blur",()=>i.clear());const I=new A,C=new A;function S(P,N,U,D){if(Math.hypot(P,N)>lt.playRadius)return!0;const F=ht(P,N);if(F<-3)return!0;const z=lt.canyon;if(P>z.centerX+14*Math.sin(N/130)-z.halfWidth-z.rimBack-z.walkLimit)return!0;const k=F-ht(U,D),B=Math.hypot(P-U,N-D)||1e-6;if(k/B>fw)return!0;if(k>0){if(F>mw)return!0;const we=(ht(P+1,N)-ht(P-1,N))/2,Q=(ht(P,N+1)-ht(P,N-1))/2;if(Math.hypot(we,Q)>pw)return!0}for(const we of Wt)if(Math.hypot(P-we.x,N-we.z)<we.r)return!0;const X=lt.cave,Y=P-X.x,ne=N-X.z,ue=Math.hypot(Y,ne);if(ue<X.radius+5&&ue>X.radius-2.8){const we=tn.degToRad(X.mouthAngleDeg),Q=(Y*Math.cos(we)+ne*-Math.sin(we))/ue,re=Q<.75?5:2;if(Q<.9&&ue<X.radius+re)return!0}return!1}function E(){const P=(N,U)=>i.has(N)||i.has(U);return{fwd:(P("KeyW","ArrowUp")?1:0)-(P("KeyS","ArrowDown")?1:0),side:(P("KeyD","ArrowRight")?1:0)-(P("KeyA","ArrowLeft")?1:0),run:P("ShiftLeft","ShiftRight")}}function w(P,N){if(!n.isLocked&&!N)return;const U=N||E();N&&N.jump&&(f=Xf),s.position.equals(l)||(r.copy(s.position),o.set(0,0,0),h=0,g=m=v=0,u=r.y<=ht(r.x,r.z)+Ch+.05),s.getWorldDirection(I),I.y=0,I.normalize(),C.crossVectors(I,s.up).normalize(),a.set(0,0,0).addScaledVector(I,U.fwd).addScaledVector(C,U.side),a.lengthSq()>1&&a.normalize();const D=U.fwd<0?Mr*tw:U.run&&U.fwd>0?Rh:Mr;a.multiplyScalar(D);const F=a.lengthSq()>0;if(u){const he=1-Math.exp(-(F?nw:iw)*P);o.x+=(a.x-o.x)*he,o.z+=(a.z-o.z)*he,!F&&o.lengthSq()<9e-4&&o.set(0,0,0)}const z=o.x*P,k=o.z*P;S(r.x+z,r.z+k,r.x,r.z)?S(r.x+z,r.z,r.x,r.z)?S(r.x,r.z+k,r.x,r.z)?u?o.multiplyScalar(.5):o.x=o.z=0:(r.z+=k,u||(o.x=0)):(r.x+=z,u||(o.z=0)):(r.x+=z,r.z+=k),f-=P,u&&d<=0&&f>0?(d=sw,f=0,m-=1.5):d>0&&(d-=P,d<=0&&u&&(h=ew,u=!1,t&&t.jump()));const B=ht(r.x,r.z)+Ch;if(u)r.y=B,h=0;else if(h-=QM*P,r.y+=h*P,r.y<=B){const he=Math.max(0,-h);r.y=B,h=0,u=!0,m-=Math.min(he,4)*1.3,he>1&&o.multiplyScalar(rw),t&&he>.4&&t.land(he)}const X=Math.hypot(o.x,o.z),Y=tn.clamp((X-Mr)/(Rh-Mr),0,1),ne=u?Math.min(X/Mr,1):0;v+=(ne-v)*(1-Math.exp(-(u?8:14)*P)),p+=P*Math.PI*tn.lerp(ow,aw,Y)*Math.min(X/Mr,1);const we=(Math.sqrt(Math.sin(p)**2+.02)-Math.sqrt(.02))*tn.lerp(lw,cw,Y)*v,Q=Math.sin(p)*hw*v,re=Math.floor(p/Math.PI);re!==_&&(_=re,t&&u&&v>.35&&t.step(Y,re%2)),m+=(-Ph*Ph*g-2*dw*Ph*m)*P,g=tn.clamp(g+m*P,-.4,.12);const ve=-((o.x*C.x+o.z*C.z)/Rh)*uw-Math.sin(p)*.004*v;y+=(ve-y)*(1-Math.exp(-8*P)),c.setFromQuaternion(s.quaternion),c.z=y,s.quaternion.setFromEuler(c),s.position.set(r.x+C.x*Q,r.y+we+g,r.z+C.z*Q),l.copy(s.position)}return{controls:n,update:w,blocked:S,state:()=>({x:r.x,y:r.y,z:r.z,vx:o.x,vz:o.z,vy:h,grounded:u,speed:Math.hypot(o.x,o.z),camY:s.position.y,knee:g,roll:y})}}function vw(){let s=null,e,t,n,i,r,o=!1;const a=.6;function l(){if(!s){const S=window.AudioContext||window.webkitAudioContext;if(!S)return;s=new S,t=s.createBiquadFilter(),t.type="lowpass",t.frequency.value=1900,t.Q.value=.5,e=s.createGain(),e.gain.value=o?0:a,i=s.createAnalyser(),i.fftSize=2048,r=new Float32Array(i.fftSize),t.connect(e),e.connect(s.destination),e.connect(i),n=s.createBuffer(1,s.sampleRate*2,s.sampleRate);const E=n.getChannelData(0);for(let w=0;w<E.length;w++)E[w]=Math.random()*2-1}s.state==="suspended"&&s.resume()}const c=()=>s&&s.state==="running",h=(S,E)=>S+Math.random()*(E-S);function u(S,E,w,b,P,N=0){const U=s.createBufferSource();U.buffer=n;const D=s.createBiquadFilter();D.type="bandpass",D.frequency.value=w,D.Q.value=b;const F=s.createGain();F.gain.setValueAtTime(1e-4,S),F.gain.linearRampToValueAtTime(P,S+.004),F.gain.exponentialRampToValueAtTime(1e-4,S+E);const z=s.createStereoPanner();z.pan.value=N,U.connect(D).connect(F).connect(z).connect(t),U.start(S,h(0,1.7),E+.05)}function d(S,E,w,b,P){const N=s.createOscillator();N.type="sine",N.frequency.setValueAtTime(E,S),N.frequency.exponentialRampToValueAtTime(w,S+b);const U=s.createGain();U.gain.setValueAtTime(1e-4,S),U.gain.linearRampToValueAtTime(P,S+.008),U.gain.exponentialRampToValueAtTime(1e-4,S+b),N.connect(U).connect(t),N.start(S),N.stop(S+b+.05)}function f(S=0,E=0){if(!c())return;const w=s.currentTime,b=.55+.45*S,P=E?.22:-.22,N=3+Math.floor(Math.random()*3);for(let U=0;U<N;U++)u(w+U*h(.012,.024),h(.018,.045),h(650,1700),h(1.2,3),h(.18,.34)*b,P);d(w,h(78,92),48,.09,.32*b)}function p(S=2.6){if(!c())return;const E=s.currentTime,w=Math.min(Math.max(S/2.6,.3),1.5);d(E,112,36,.34,.55*w),u(E,.26,210,.7,.3*w);for(let b=0;b<7;b++)u(E+b*h(.014,.034),h(.03,.07),h(500,1600),h(1,2.5),h(.12,.24)*w,h(-.3,.3))}function v(){if(!c())return;const S=s.currentTime;d(S,64,96,.11,.3);for(let E=0;E<3;E++)u(S+E*.016,h(.02,.04),h(700,1500),2,.2,h(-.2,.2));u(S+.03,.24,380,.5,.11)}function g(S,E,w,b){const P=s.createOscillator();P.type="triangle",P.frequency.value=E;const N=s.createGain();N.gain.setValueAtTime(1e-4,S),N.gain.linearRampToValueAtTime(b,S+.01),N.gain.exponentialRampToValueAtTime(1e-4,S+w),P.connect(N).connect(e),P.start(S),P.stop(S+w+.05)}function m(S){if(!c())return;const E=s.currentTime;if(S==="tick")g(E,700,.08,.1);else if(S==="done")g(E,520,.12,.12),g(E+.11,780,.2,.12);else if(S==="alarm")for(let w=0;w<3;w++)g(E+w*.24,470,.16,.13);else S==="hatch"&&(d(E,95,38,.5,.5),u(E+.04,.45,260,.6,.22),d(E+.55,70,44,.25,.3))}let y=null;function _(){const S=s.createGain();S.gain.value=.9,S.connect(e);const E=(k,B,X,Y=0)=>{const ne=s.createOscillator();ne.type=k,ne.frequency.value=B,ne.detune.value=Y;const ue=s.createGain();return ue.gain.value=0,ne.connect(ue).connect(X),ne.start(),ue},w=s.createBiquadFilter();w.type="lowpass",w.frequency.value=150,w.connect(S);const b=[E("sawtooth",55,w,-6),E("sawtooth",55,w,7),E("sine",27.5,S)],P=[E("sine",220,S),E("sine",329.6,S),E("triangle",110,S)],N=s.createBiquadFilter();N.type="lowpass",N.frequency.value=300,N.Q.value=.3,N.connect(S);const U=[73.42,110,146.83,185,220,293.66,329.63,369.99].map((k,B)=>E(B%2?"triangle":"sawtooth",k,N,(B%3-1)*5)),D=s.createGain(),F=s.createDelay(1);F.delayTime.value=.36;const z=s.createGain();z.gain.value=.48,D.connect(S),D.connect(F),F.connect(z).connect(F),F.connect(S),y={out:S,drone:b,droneFilter:w,air:P,chord:U,chordFilter:N,bells:D,timers:[]}}function x(S,E,w=0){const b=s.currentTime,P=s.createOscillator();P.type="sine",P.frequency.value=S;const N=s.createGain();N.gain.setValueAtTime(1e-4,b),N.gain.linearRampToValueAtTime(E,b+.012),N.gain.exponentialRampToValueAtTime(1e-4,b+2.2);const U=s.createStereoPanner();U.pan.value=w,P.connect(N).connect(U).connect(y.bells),P.start(b),P.stop(b+2.3)}function I(S){if(!c())return;y||_();const E=s.currentTime,w=(b,P,N)=>b.forEach((U,D)=>U.gain.setTargetAtTime(Array.isArray(P)?P[D]:P,E,N/3));for(const b of y.timers)clearInterval(b);if(y.timers=[],S==="descent")w(y.drone,[.16,.16,.22],2),y.droneFilter.frequency.setTargetAtTime(150,E,.5),y.droneFilter.frequency.linearRampToValueAtTime(420,E+12),w(y.air,0,1),w(y.chord,0,1);else if(S==="ocean"){w(y.drone,[.07,.07,.14],3),y.droneFilter.frequency.cancelScheduledValues(E),y.droneFilter.frequency.setTargetAtTime(200,E,1),w(y.air,[.035,.022,.05],4),w(y.chord,0,1);const b=()=>{x(1174.7,.05,.3)};b(),y.timers.push(setInterval(b,4300))}else if(S==="dark")w(y.drone,[0,0,.05],.5),w(y.air,0,.5),w(y.chord,0,.5);else if(S==="reveal"){d(E,62,30,2.4,.55),w(y.drone,[.05,.05,.16],2),w(y.air,[.03,.03,.04],3),w(y.chord,[.07,.06,.06,.05,.05,.04,.035,.03],5),y.chordFilter.frequency.cancelScheduledValues(E),y.chordFilter.frequency.setValueAtTime(260,E),y.chordFilter.frequency.exponentialRampToValueAtTime(2600,E+7);const b=[587.33,659.25,739.99,880,987.77,1174.66,1318.5,1479.98];let P=0;const N=()=>{x(b[(P*3+Math.floor(Math.random()*2))%b.length],.045+.03*Math.random(),Math.random()*1.4-.7),P++};y.timers.push(setInterval(N,260)),setTimeout(()=>{y.timers.length&&(clearInterval(y.timers.pop()),y.timers.push(setInterval(N,620)))},9e3)}else S==="stop"&&(w(y.drone,0,2),w(y.air,0,2),w(y.chord,0,2))}function C(S){o=S,s&&e.gain.setTargetAtTime(o?0:a,s.currentTime,.02)}return addEventListener("pointerdown",l),addEventListener("keydown",S=>{l(),S.code==="KeyM"&&!S.repeat&&C(!o)}),{step:f,land:p,jump:v,signal:m,music:I,unlock:l,setMuted:C,get muted(){return o},get ready(){return!!c()},level(){if(!c())return 0;i.getFloatTimeDomainData(r);let S=0;for(const E of r)S=Math.max(S,Math.abs(E));return S}}}const qm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Xr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xw=new Ko(-1,1,1,-1,0,1);class yw extends nt{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}}const _w=new yw;class ju{constructor(e){this._mesh=new je(_w,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ll extends Xr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Dr.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ju(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class qf extends Xr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class bw extends Xr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Mw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ll(qm),this.copyPass.material.blending=vi,this.clock=new Dc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qf!==void 0&&(o instanceof qf?n=!0:o instanceof bw&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ww extends Xr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Sw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Fr extends Xr{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Ie(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(r,o,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Sn(r,o,{type:xi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Sn(r,o,{type:xi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Sw;this.highPassUniforms=Dr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new de(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=qm;this.copyUniforms=Dr.clone(h.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:bn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ie,this.oldClearAlpha=1,this.basic=new cn,this.fsQuad=new ju(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Fr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Fr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Fr.BlurDirectionX=new de(1,0);Fr.BlurDirectionY=new de(0,1);const Tw={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Aw extends Xr{constructor(){super();const e=Tw;this.uniforms=Dr.clone(e.uniforms),this.material=new Hu({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ju(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===au?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===cu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ec&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ew={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new de(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`},Cw={uniforms:{tDiffuse:{value:null},uSaturation:{value:1.2},uVignette:{value:.3}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uSaturation; uniform float uVignette; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = max(mix(vec3(l), c.rgb, uSaturation), 0.0);
      c.rgb *= mix(vec3(0.90, 0.97, 1.12), vec3(1.02, 1.0, 0.97), smoothstep(0.03, 0.55, l));
      float v = smoothstep(0.95, 0.25, length(vUv - 0.5));
      c.rgb *= mix(1.0 - uVignette, 1.0, v);
      gl_FragColor = c;
    }`},Rw={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; varying vec2 vUv;
    float safe(float v){ return (v >= 0.0) ? min(v, 2000.0) : 0.0; } // "not a number" fails every comparison, so it lands on 0
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      gl_FragColor = vec4(safe(c.r), safe(c.g), safe(c.b), 1.0);
    }`};function Pw(s,e,t){const n=new Mw(s);n.addPass(new ww(e,t)),n.addPass(new ll(Rw));const i=new Fr(new de(innerWidth,innerHeight),.42,.5,1.02);n.addPass(i),n.addPass(new ll(Cw)),n.addPass(new Aw);const r=new ll(Ew);n.addPass(r);function o(a,l,c,h=0){n.setPixelRatio(c),n.setSize(a,l),r.material.uniforms.resolution.value.set(1/(a*c),1/(l*c));const u=s.getRenderTarget();for(const d of[n.renderTarget1,n.renderTarget2]){if(d.scissorTest=!1,d.scissor.set(0,0,d.width,d.height),!h)continue;s.setRenderTarget(d),s.clear();const f=Math.min(Math.min(d.width,d.height),Math.ceil(h*Math.min(d.width,d.height))+8);d.scissor.set(Math.floor((d.width-f)/2),Math.floor((d.height-f)/2),f,f),d.scissorTest=!0}s.setRenderTarget(u)}return o(innerWidth,innerHeight,s.getPixelRatio()),{composer:n,bloom:i,setSize:o}}const ao=[];function Iw(s){const e=document.getElementById("start"),t=document.getElementById("caption"),n=document.getElementById("crosshair");let i=!1,r=0,o=-1,a=null;const l=e.querySelector(".cta");e.addEventListener("click",()=>{a&&a(()=>{l.textContent="Click to step outside",e.classList.remove("hidden")})?e.classList.add("hidden"):s.lock()}),s.addEventListener("lock",()=>{e.classList.add("hidden"),n.classList.add("show"),i=!0}),s.addEventListener("unlock",()=>{e.classList.remove("hidden"),n.classList.remove("show"),e.querySelector(".cta").textContent="Click to continue"});function c(h){if(!i||!ao.length)return;r+=h;const u=ao.findLastIndex(d=>r>=d.t);u!==o&&(o=u,t.classList.remove("show"),setTimeout(()=>{t.textContent=ao[u].text,t.classList.add("show")},400)),o===ao.length-1&&r>ao[o].t+7&&t.classList.remove("show")}return{update:c,before(h){a=h,l.textContent="Click to begin"}}}const gt={hourSeconds:8,dayHours:85,iceKm:29,plans:{dig:{name:"Dig first",kmh:.7,warmLit:-2,warmDark:-6,freeze:0,thaw:.25,charge:0},share:{name:"Share",kmh:.3,warmLit:4,warmDark:-.8,freeze:0,thaw:.12,charge:0},warm:{name:"Warm first",kmh:0,warmLit:11,warmDark:8,freeze:.04,thaw:0,charge:.5}},startPlan:"share",battery:{start:70,sun:1.2,dark:-.3,redLine:20,graceHours:6,boost:15,boostHours:3},heat:{outsideSun:-3,outsideDark:-5,cave:-10,start:100,warnAt:25},dose:{outside:1.3,habitat:.52,cave:.1,plasmaBoost:3,warnAt:75},plasma:{periodHours:5.6,widthHours:.55,firstAfterStart:3.6},brine:{kmMin:1.6,kmMax:2.6,waitFreezeHours:14,sampleHours:3,sampleFreeze:.4,detourBattery:20},eclipse:{warnHours:5},crack:{kmMin:5.5,kmMax:8,lastsHours:10},sensor:{kmMin:9.5,kmMax:12,slow:.55,bakeHours:4,bakeChill:-5},storm:{kmMin:14,kmMax:16,strength:3,widthHours:1.3,warnHours:5,wallsBattery:25,wallsShield:.35},tide:{kmMin:18.5,kmMax:20,hours:6,strainPerHour:.34,slack:.4,relaxPerHour:.2,warnHours:4,brakeSlow:.65},salt:{kmMin:22.5,kmMax:24.5,thickKm:1.5,slow:.3,jetsBattery:25}},Qu={startHour:9.59,eclipseMidHour:29.3,eclipseHalfHours:1.44,sunUpFrom:4.9,sunUpUntil:33.6},Lw=2.9,$f=.95,Dw=new Ie(16774890),Uw=new Ie(16769725),yn=340,Yf=(s,e,t)=>{const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)};function Nw({sun:s,jupiterShine:e,hemi:t,sky:n}){const i=gt.dayHours,r=Ut.jupiterDir.clone().normalize(),o=Ut.sunDir.clone().normalize(),a=new A().crossVectors(o,r).normalize();a.y<0&&a.negate();const l=new A().crossVectors(new A(0,1,0),a).normalize(),c=new A().crossVectors(a,l).normalize();c.y<0&&c.negate();const h=X=>Math.atan2(X.dot(c),X.dot(l));h(r)<h(o)&&l.negate();const u=h(o),d=h(r),f=tn.degToRad(Ut.jupiterAngularDiameterDeg/2),p={startHour:u/(Math.PI*2)*i,eclipseMidHour:d/(Math.PI*2)*i,eclipseHalfHours:f/(Math.PI*2)*i},v=(X,Y=new A)=>{const ne=X/i*Math.PI*2;return Y.copy(l).multiplyScalar(Math.cos(ne)).addScaledVector(c,Math.sin(ne))},{solarArray:g}=lt,m={x:g.x,z:g.z,y:ht(g.x,g.z)+3},y=new A;function _(X){if(v(X,y),y.y<=.004)return 0;for(let Y=8;Y<2400;Y*=1.045)if(ht(m.x+y.x*Y,m.z+y.z*Y)>m.y+y.y*Y)return 0;return 1}const x=new Float32Array(yn);for(let X=0;X<yn;X++)x[X]=_((X+.5)/yn*i);const I=new Float32Array(yn);for(let X=0;X<yn;X++)I[X]=(x[(X+yn-1)%yn]+2*x[X]+x[(X+1)%yn])/4;const C=X=>{const Y=(X%i+i)%i/i*yn-.5,ne=Math.floor(Y),ue=Y-ne;return I[(ne+yn)%yn]*(1-ue)+I[(ne+1+yn)%yn]*ue},S=X=>{const Y=Math.abs(X-p.eclipseMidHour);return 1-Yf(p.eclipseHalfHours-.12,p.eclipseHalfHours+.12,Y)},E=X=>C(X)*(1-S(X));let w=-1,b=-1;for(let X=0;X<yn;X++){const Y=(X+.5)/yn*i;x[X]&&w<0&&(w=Y),x[X]&&(b=Y)}p.sunUpFrom=w,p.sunUpUntil=b;const P=o.clone(),N=o.clone(),U=new A;let D=0;const F=t.intensity,z=n.sun.position.length(),k={sunlight:1,eclipse:0,jupiterLit:.5,sunHeightDeg:17,night:!1};function B(X,Y){v(X,P);const ne=S(X),ue=E(X),we=(1-P.dot(r))/2,Q=E(X+.6)>.02,re=ue<=.02;return re?D+=((re&&!Q?1:0)-D)*Math.min(1,Y*1.6):D=0,re?(N.copy(r),s.color.copy(Uw),s.intensity=$f*we*D):(N.copy(P),s.color.copy(Dw),s.intensity=Lw*ue),e.intensity=$f*we*(1-D)*.7,t.intensity=F*(.22+.5*ue+.28*we*(1-ue)),gi.uIceDay.value=ue+(1-ue)*(.08+.34*we*D),gi.uIceAway.value.set(-N.x,0,-N.z).normalize(),Zl.uSunDir.value.copy(P),Zl.uDay.value=ue+(1-ue)*.25*we,n.jupiter.material.uniforms.uSunDir.value.copy(P),n.jupiter.material.uniforms.uBehind.value=ne,n.io.material.uniforms.uSunDir.value.copy(P),n.sun.position.copy(P).multiplyScalar(z),n.sun.material.opacity=(1-ne)*Yf(-.03,0,P.y),n.sun.visible=n.sun.material.opacity>.01,k.sunlight=ue,k.eclipse=ne,k.jupiterLit=we,k.night=re,k.sunHeightDeg=tn.radToDeg(Math.asin(P.y)),N.angleTo(U)>2e-5?(U.copy(N),!0):!1}return{update:B,sunlightAt:E,eclipseAt:S,sunDirAt:v,skyTimes:p,lightDir:N,sunDir:P,info:k}}const Qh=(s,e,t)=>Math.min(t,Math.max(e,s)),eu=(s,e,t)=>{const n=Qh((t-s)/(e-s),0,1);return n*n*(3-2*n)};function kw(s,e=Qu){return eu(e.sunUpFrom,e.sunUpFrom+.6,s)*(1-eu(e.sunUpUntil-.6,e.sunUpUntil,s))*(1-$m(s,e))}function $m(s,e=Qu){const t=Math.abs(s-e.eclipseMidHour);return 1-eu(e.eclipseHalfHours-.12,e.eclipseHalfHours+.12,t)}function Fw(s){s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,[s,((e^e>>>14)>>>0)/4294967296]}function Ow(s={}){const e=s.rules||gt,t={...Qu,...s.sky||{}},n=s.sunlightAt||(J=>kw(J,t)),i=e.battery,r=t.startHour+e.plasma.firstAfterStart,o=s.seed;let a,l;function c(){let J=o!==void 0?o:Math.floor(Math.random()*2147483648);const ye=()=>{let R;return[J,R]=Fw(J),R},j=(R,ee)=>R+ye()*(ee-R),oe=e;return{hour:t.startHour,battery:i.start,warmth:oe.heat.start,dose:0,depthKm:0,started:!1,plan:oe.startPlan,boostUntil:0,refreeze:0,lowPowerHours:0,zone:"outside",ended:null,clues:0,cluesMissed:0,log:[],cards:[],hoursIn:{outside:0,habitat:0,cave:0},flags:{},brine:{km:j(oe.brine.kmMin,oe.brine.kmMax),stage:"ahead",until:0},eclipse:{stage:"ahead",day:0},crack:{km:j(oe.crack.kmMin,oe.crack.kmMax),stage:"ahead",until:0},sensor:{km:j(oe.sensor.kmMin,oe.sensor.kmMax),stage:"ahead",blind:!1,bakeUntil:0},storm:{km:j(oe.storm.kmMin,oe.storm.kmMax),crossing:null,stage:"ahead",walls:!1},tide:{km:j(oe.tide.kmMin,oe.tide.kmMax),start:null,stage:"ahead",braked:!1},strain:0,salt:{km:j(oe.salt.kmMin,oe.salt.kmMax),stage:"ahead",jets:!1}}}const h=(J=a.hour)=>(J%e.dayHours+e.dayHours)%e.dayHours,u=(J=a.hour)=>Math.floor(J/e.dayHours)+1,d=(J=a.hour)=>n(h(J)),f=(J=a.hour)=>$m(h(J),t);function p(J=a.hour){const ye=h(J),j=t.eclipseMidHour-t.eclipseHalfHours,oe=t.eclipseMidHour+t.eclipseHalfHours;return ye>=j&&ye<oe?0:ye<j?j-ye:j+e.dayHours-ye}const v=J=>r+J*e.plasma.periodHours,g=(J=a.hour)=>Math.round((J-r)/e.plasma.periodHours);function m(J=a.hour){const ye=g(J),j=J-v(ye),oe=ye===a.storm.crossing,R=oe?e.storm.widthHours:e.plasma.widthHours;return(oe?e.storm.strength:1)*Math.exp(-(j*j)/(R*R))}function y(J=a.hour){const ye=Math.ceil((J-r)/e.plasma.periodHours);return v(ye)-J}const _=()=>a.storm.crossing===null?1/0:v(a.storm.crossing),x=(J=a.hour)=>Math.abs(J-_())<e.storm.widthHours*1.6;function I(J=a.hour){return a.tide.start!==null&&J>=a.tide.start&&J<a.tide.start+e.tide.hours}function C(J=a.hour){return a.tide.start===null||J>=a.tide.start+e.tide.hours?1/0:Math.max(0,a.tide.start-J)}const S=()=>a.hour<a.boostUntil,E=()=>a.sensor.stage==="baking",w=()=>a.salt.stage==="open"&&!a.salt.jets,b=()=>a.brine.stage==="open"||a.brine.stage==="sampling";function P(){if(!a.started||b())return 0;const J=e.plans;let ye=S()?J.dig.kmh:J[a.plan].kmh;return ye*=1-a.refreeze,a.sensor.blind&&(ye*=e.sensor.slow),a.tide.braked&&(ye*=e.tide.brakeSlow),w()&&(ye*=e.salt.slow),ye}function N(J=d()){const ye=S()?e.plans.warm:e.plans[a.plan],j=ye.warmDark+(ye.warmLit-ye.warmDark)*J;return E()?Math.min(j,e.sensor.bakeChill):j}function U(J=d()){return i.dark+(i.sun-i.dark)*J+(S()?0:e.plans[a.plan].charge)}function D(J,ye){a.log.push({hour:a.hour,day:u(),hod:h(),tag:J,text:ye}),a.log.length>200&&a.log.shift()}function F(J,ye,j){return a.flags[J]?!1:(a.flags[J]=!0,D(ye,j),!0)}const z=J=>{delete a.flags[J]};function k(J,ye){a.ended||(a.ended={type:J,cause:ye,hour:a.hour,depthKm:a.depthKm},D("end",J==="breakthrough"?"The cryobot broke through into the ocean.":`Mission called home: ${ye}.`))}function B(J,ye,j){a[J].stage="open",a[J].since=a.hour,a.cards.push(J),D(ye,j)}function X(J,ye=a.zone){if(a.ended||J<=0)return;a.zone=ye,a.hour+=J,a.hoursIn[ye]+=J;const j=d(),oe=m(),R=j>.5,ee=u();ee>(a.flags.dayMarked||1)&&(a.flags.dayMarked=ee,D("clock",`Sunrise: Europa day ${ee} begins.`),l.push({label:`the start of Europa day ${ee}`,state:ge()})),!R&&a.flags.wasLit&&f()<.5&&(D("clock","The Sun went behind the mountain: the long night began."),l.push({label:`nightfall on Europa day ${ee}`,state:ge()})),a.flags.wasLit=R,a.battery=Qh(a.battery+U(j)*J,0,100),a.battery<i.redLine?(F("redline","power",`The battery fell below the red line (${R?"in daylight":"in the dark, with no sunlight to refill it"}).`),a.lowPowerHours+=J,(a.lowPowerHours>=i.graceHours||a.battery<=0)&&k("abort","power")):(a.battery>i.redLine+4&&z("redline"),a.lowPowerHours=Math.max(0,a.lowPowerHours-J));const K=e.heat;let Me;ye==="habitat"?Me=N(j):ye==="cave"?Me=K.cave:Me=K.outsideDark+(K.outsideSun-K.outsideDark)*j,a.warmth=Qh(a.warmth+Me*J,0,100),a.warmth<K.warnAt?F("cold","heat",`The crew got dangerously cold ${ye==="habitat"?`inside the habitat${E()?", with the heaters lent to the camera":`, on the "${e.plans[a.plan].name}" plan ${R?"":"in the dark"}`}`:ye==="cave"?"in the ice cave":R?"outside":"outside in the dark"}.`):a.warmth>K.warnAt+15&&z("cold"),a.warmth<=0&&k("abort","heat");const fe=e.dose,ae=g(),_e=ae===a.storm.crossing;let L=fe.plasmaBoost*oe;_e&&ye==="habitat"&&a.storm.walls&&(L*=e.storm.wallsShield),a.dose=Math.min(100,a.dose+fe[ye]*(1+L)*J),oe>.6&&(ye==="outside"?F("caughtOut"+ae,"radiation",`The crew was outside during ${_e?"the Purple Aurora Storm":"a plasma crossing"}.`):_e&&F("stormIn","radiation",`The crew sat out the Purple Aurora Storm ${ye==="cave"?"under the ice of the cave":a.storm.walls?"in the habitat, behind walls filled with water":"in the habitat, whose thin walls only stop part of it"}.`));for(const xe of[50,75,90])a.dose>=xe&&F("dose"+xe,"radiation",`The dose reached ${xe}% of the limit, with the cryobot ${a.depthKm.toFixed(1)} km down.`);a.dose>=100&&k("abort","radiation");const T=a.eclipse;a.started&&T.day!==ee&&p()>0&&p()<e.eclipse.warnHours&&(T.day=ee,B("eclipse","clock","Forecast: Jupiter would soon hide the Sun for about 3 hours.")),f()>.5&&F("eclipse"+ee,"clock",`Jupiter hid the Sun for about 3 hours. The plan was "${e.plans[a.plan].name}".`),T.stage==="open"&&p()>e.eclipse.warnHours&&(T.stage="done");const q=a.crack;q.stage==="ahead"&&a.depthKm>=q.km?(q.until=a.hour+e.crack.lastsHours,B("crack","science","The scanner found ocean chemicals at the red crack.")):q.stage==="open"&&a.hour>=q.until&&(q.stage="done",a.cluesMissed+=1,D("science","Radiation destroyed the chemicals at the crack before anyone collected them."));const ie=a.sensor;ie.stage==="ahead"&&a.depthKm>=ie.km&&oe>.9?(ie.blind=!0,B("sensor","cryobot","Radiation clouded the cryobot’s guide camera. Half-blind, it digs slower.")):ie.stage==="baking"&&a.hour>=ie.bakeUntil&&(ie.stage="done",ie.blind=!1,D("cryobot","The camera was baked clear and the cryobot could see again."));const ce=a.storm;ce.stage==="ahead"&&a.depthKm>=ce.km?(ce.crossing=Math.ceil((a.hour+e.storm.warnHours-r)/e.plasma.periodHours),B("storm","radiation","Forecast: a Purple Aurora Storm, far stronger than an ordinary crossing.")):ce.stage==="open"&&_()-a.hour<-e.storm.widthHours*1.6&&(ce.stage="done");const te=e.tide,Te=a.tide;if(Te.stage==="ahead"&&a.depthKm>=Te.km&&(Te.start=a.hour+te.warnHours,B("tide","cable","Forecast: the tide would soon grind the fault sideways and pull on the cable.")),!Te.braked&&I()?(a.strain+=te.strainPerHour*J,a.strain>.7&&F("strain","cable","The cable was stretched close to breaking, with nobody at the spool.")):(a.strain=Math.max(0,a.strain-te.relaxPerHour*J),Te.stage==="open"&&C()===1/0&&a.strain===0&&(Te.stage="done")),a.strain>=1&&(a.strain=1,k("abort","cable")),a.started){const xe=e.brine,Ae=e.plans[a.plan];a.brine.stage==="open"?a.refreeze=Math.min(1,a.refreeze+J/xe.waitFreezeHours):a.brine.stage==="sampling"?(a.refreeze=Math.min(1,a.refreeze+xe.sampleFreeze/xe.sampleHours*J),a.hour>=a.brine.until&&(a.brine.stage="done",a.clues+=1,D("science",`The sample of salty water was on board. Behind the stopped cryobot the hole had frozen ${Math.round(a.refreeze*100)}% shut.`))):!S()&&Ae.freeze>0?(a.refreeze=Math.min(1,a.refreeze+Ae.freeze*J),F("freezing","cryobot",'On "Warm first" the cryobot had no heat, and its hole began to freeze shut.')):(a.refreeze=Math.max(0,a.refreeze-(S()?e.plans.dig.thaw:Ae.thaw)*J),a.refreeze===0&&z("freezing")),a.refreeze>=1&&k("abort","cryobot"),a.depthKm=Math.min(e.iceKm,a.depthKm+P()*J),a.brine.stage==="ahead"&&a.depthKm>=a.brine.km&&B("brine","cryobot",`${a.depthKm.toFixed(1)} km down, the cryobot met a pocket of salty water and stopped.`);const Je=a.salt;Je.stage==="ahead"&&a.depthKm>=Je.km?B("salt","cryobot",`${a.depthKm.toFixed(1)} km down, the cryobot ran into a hard layer of salt and slowed to a crawl.`):Je.stage==="open"&&a.depthKm>=Je.km+e.salt.thickKm&&(Je.stage="done",D("cryobot",Je.jets?"The jets cut through the salt layer.":"The cryobot crawled out of the salt layer at last.")),a.depthKm>=e.iceKm&&k("breakthrough")}}function Y(){return a.started?!1:(a.started=!0,D("action","You switched the cryobot on and the dig began."),!0)}function ne(J){return!e.plans[J]||J===a.plan?!1:(a.plan=J,D("action",`You set the reactor to "${e.plans[J].name}".`),!0)}function ue(){return S()?!1:(a.battery=Math.max(0,a.battery-i.boost),a.boostUntil=a.hour+i.boostHours,D("action",`You spent ${i.boost}% of the battery on ${i.boostHours} hours of full power for both the cryobot and the heaters.`),!0)}function we(J,ye){const j=e;if(J==="brine"&&a.brine.stage==="open"){if(ye==="sample")return a.brine.stage="sampling",a.brine.until=a.hour+j.brine.sampleHours,D("action",`You stopped the dig for ${j.brine.sampleHours} hours to take a sample of the salty water.`),!0;if(ye==="detour")return a.brine.stage="done",a.cluesMissed+=1,a.battery=Math.max(0,a.battery-j.brine.detourBattery),D("action",`You steered the cryobot round the pocket. It took ${j.brine.detourBattery}% of the battery, and no sample was taken.`),!0}if(J==="crack"&&ye==="collect"&&a.crack.stage==="open")return a.crack.stage="done",a.clues+=1,D("action","You walked out to the crack and collected the ocean chemicals."),!0;if(J==="sensor"&&ye==="bake"&&a.sensor.stage==="open")return a.sensor.stage="baking",a.sensor.bakeUntil=a.hour+j.sensor.bakeHours,D("action",`You lent the habitat’s heaters to the camera for ${j.sensor.bakeHours} hours to bake it clear.`),!0;if(J==="storm"&&ye==="walls"&&a.storm.stage==="open"&&!a.storm.walls)return a.storm.walls=!0,a.battery=Math.max(0,a.battery-j.storm.wallsBattery),D("action",`You spent ${j.storm.wallsBattery}% of the battery melting ice to fill the habitat’s walls with water.`),!0;if(J==="tide"&&a.tide.stage==="open"&&!a.tide.braked){if(ye==="slack"&&a.strain>=.03)return a.strain=Math.max(0,a.strain-j.tide.slack),z("strain"),D("action","You paid out slack at the cable spool."),!0;if(ye==="brake")return a.tide.braked=!0,a.tide.stage="done",a.strain=0,D("action","You locked the spool and let the cable stretch. It will never snap now, but it carries less power for the rest of the dig."),!0}return J==="salt"&&ye==="jets"&&a.salt.stage==="open"&&!a.salt.jets?(a.salt.jets=!0,a.battery=Math.max(0,a.battery-j.salt.jetsBattery),D("action",`You spent ${j.salt.jetsBattery}% of the battery on the cutting jets.`),!0):!1}function Q(){return["brine","tide","storm","salt","sensor","crack","eclipse"].filter(ye=>{const j=a[ye].stage;return ye==="storm"||ye==="tide"?j==="open":j==="open"||j==="sampling"||j==="baking"})}function re(){return a.cards.shift()||null}const ge=()=>JSON.parse(JSON.stringify(a));function ve(J){a=JSON.parse(JSON.stringify(J)),a.ended=null}function he(){a=c(),l=[{label:"the start of the mission",state:ge()}]}function Se(){const J=l[l.length-1];return ve(J.state),l=l.filter(ye=>ye.state.hour<=J.state.hour),J.label}return he(),{rules:e,sky:t,firstCrossing:r,get state(){return a},step:X,start:Y,setPlan:ne,boost:ue,choose:we,openSituations:Q,nextCard:re,reset:he,retry:Se,snapshot:ge,restore:ve,hourOfDay:h,dayNumber:u,sunlight:d,eclipse:f,eclipseIn:p,plasma:m,nextCrossingIn:y,crossingIndex:g,stormHour:_,inStorm:x,tideNow:I,tideIn:C,digSpeed:P,habitatWarmth:N,batteryRate:U,boosted:S,baking:E,inSalt:w,get lastCheckpoint(){return l[l.length-1].label}}}const se=(s,e,t)=>{const n=document.createElement(s);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n},el=s=>s<1?"under 1 hour":`${Math.round(s)} hour${Math.round(s)===1?"":"s"}`,tl=30,zw={power:{title:"Mission called home: out of power",what:"The battery stayed below the red line for too long, so the base shut itself down to protect its systems. Mission Control is bringing the crew home.",real:"Real story: in 2018 a dust storm on Mars stopped NASA’s Opportunity rover from charging its batteries. It never woke up again."},heat:{title:"Mission called home: too cold",what:"The crew got too cold to carry on safely. Mission Control is bringing them home.",real:"Real story: in 2010 NASA’s Spirit rover on Mars could not get enough power to its heaters through the winter. It never woke up again."},radiation:{title:"Mission called home: radiation limit reached",what:"The crew reached their radiation limit. Nobody is hurt: the rule is to stop before anyone is. Mission Control is bringing them home.",real:"Real rule: NASA allows an astronaut no more than 600 millisieverts of radiation in a whole career."},cryobot:{title:"Mission called home: the cryobot is frozen in",what:"The cryobot went too long without heat, and the meltwater froze solid around it. It is locked in the ice and cannot go on.",real:"Real problem: NASA’s engineers know that meltwater freezes again behind a cryobot, so real designs heat their own sides.",whatWaiting:"The cryobot stopped at a pocket of salty water and waited to be told what to do. While it stood still, the meltwater behind it froze solid. It is locked in the ice and cannot go on.",whatSampling:"While the cryobot stood still to take its sample, the meltwater behind it froze solid. It is locked in the ice and cannot go on."},cable:{title:"Mission called home: the cable snapped",what:"The tide ground the fault sideways and pulled the cryobot’s cable tighter and tighter until it snapped. Without its cable the cryobot cannot go on.",real:"Real problem: Europa’s ice shifts with the tide every day, and a NASA-funded team is studying how a cryobot’s cable could survive it."}};function Bw(s){const e=s.rules,t=se("div","hud hidden");t.id="hud";const n=se("div","hud-panel hud-meters"),i=se("div","hud-where");n.append(i);function r(Re,M){const H=se("div",`meter ${Re}`),W=se("div","m-head"),$=se("span","m-val");W.append(se("span","m-name",M),$);const V=se("div","m-bar"),pe=se("i","m-fill");V.append(pe);const Ee=se("div","m-sub");return H.append(W,V,Ee),n.append(H),{m:H,val:$,bar:V,fill:pe,sub:Ee}}const o=r("power","Battery"),a=se("b","m-redline");a.style.left=`${e.battery.redLine}%`,a.title="The red line",o.bar.append(a);const l=r("heat","Heat"),c=r("dose","Radiation dose"),h=se("div","hud-panel hud-clock"),u=se("div","c-title"),d=se("div","c-next"),f=se("div","c-goal");h.append(u,d,f);const p=se("div","hud-alerts");function v(Re,M){const H=se("div",`hud-alert ${Re} hidden`),W=se("div","a-head"),$=se("span","a-val");W.append(se("b","",M),$);const V=se("div","m-bar"),pe=se("i","m-fill");V.append(pe);const Ee=se("div","a-todo");return H.append(W,V,Ee),p.append(H),{a:H,val:$,fill:pe,todo:Ee}}const g=v("cable","Cable strain"),m=v("hole","Hole freezing shut"),y=Object.keys(e.plans),_=Object.fromEntries(y.map((Re,M)=>[Re,M/(y.length-1)*100])),x=se("div","hud-panel desk desk-power"),I=se("div","k-ends");I.append(se("span","","◀ Cryobot"),se("span","","Crew ▶"));const C=se("div","k-lever"),S=se("b","k-knob");C.append(se("i","k-rail"),...y.map(Re=>{const M=se("i","k-stop");return M.style.left=`${_[Re]}%`,M}),S);const E=se("div","k-names"),w={};for(const Re of y)w[Re]=se("span","",e.plans[Re].name),E.append(w[Re]);const b=se("div","k-row"),P=se("span","k-val");b.append(se("span","","Dig speed"),P);const N=se("div","m-bar k-bar"),U=se("i","m-fill");N.append(U);const D=se("div","k-row"),F=se("span","k-val");D.append(se("span","","Crew"),F);const z=se("div","k-hole"),k=se("div","k-key"),B=se("span");k.append(se("kbd","","Q"),B),x.append(se("div","k-title","Reactor power"),I,C,E,b,N,D,z,k);const X=se("div","hud-panel desk desk-boost"),Y=se("i","p-fill"),ne=se("div","b-text"),ue=se("span");ne.append(se("b","","Boost"),ue),X.append(Y,se("kbd","","R"),ne);const we=se("div","hud-panel desk desk-gauges");function Q(Re){const M=se("div","gauge"),H=se("div","g-head"),W=se("span","g-val");H.append(se("span","g-name",Re),W);const $=se("div","m-bar"),V=se("i","m-fill");$.append(V);const pe=se("div","g-sub");return M.append(H,$,pe),we.append(M),{g:M,val:W,fill:V,sub:pe}}const re=Q("Cable strain"),ge=Q("Hole frozen shut");function ve(Re,M,H){Re.val.textContent=`${Math.round(M*100)}%`,Re.fill.style.width=`${M*100}%`,Re.g.classList.toggle("mid",M>=.3&&M<.7),Re.g.classList.toggle("bad",M>=.7),Re.sub.textContent=H}const he=se("div","hud-panel desk desk-forecast"),Se=se("canvas","c-strip");Se.width=300,Se.height=22;const J=se("div","c-labels");J.append(se("span","","now"),se("span","",`in ${tl} hours`));const ye=se("div","f-legend");for(const[Re,M]of[["day","day"],["night","night"],["ecl","eclipse"],["plasma","plasma"]]){const H=se("span","",M);H.prepend(se("i",Re)),ye.append(H)}const j=se("div","f-list");he.append(se("div","k-title","What is coming"),Se,J,ye,j);const oe=Se.getContext("2d"),R=se("div","hud-panel hud-dig"),ee=se("div","d-level"),K=se("div","d-col"),Me=se("i","d-shaft"),fe=se("b","d-probe");K.append(se("span","d-ice","ice"),Me,fe,se("span","d-ocean","ocean"));const ae=se("div","d-depth"),_e=se("div","d-of",`of ${e.iceKm} km of ice`),L=se("div","d-source","thickness measured by NASA’s Juno"),T=se("div","d-clues");R.append(se("div","d-title","Cryobot"),ee,K,ae,_e,L,T);const q=se("div","hud-toast"),ie=se("div","hud-prompts"),ce=se("div","hud-porthole");ce.append(se("div","p-ring"),se("div","p-label","Inside the habitat"));const te=se("div","hud-end hidden"),Te=se("div","hud-card hidden"),xe=se("div","hud-train hidden"),Ae=se("div","t-step"),Je=se("div","t-text"),me=se("div","t-hint"),Ne=se("div","t-key"),Xe=se("span");Ne.append(se("kbd","","F"),Xe);const Le=se("div","t-skip","T: skip the training");xe.append(Ae,Je,me,Ne,Le);const ke=se("div","hud-way hidden"),rt=se("i","w-arrow"),Qe=se("span","w-label");ke.append(rt,Qe),o.m.dataset.part="battery",l.m.dataset.part="heat",c.m.dataset.part="dose",h.dataset.part="clock",R.dataset.part="dig",x.dataset.part="heat",X.dataset.part="battery",we.dataset.part="clock",he.dataset.part="clock";const bt=se("div","hud-col hud-left");bt.append(n,x,X);const Z=se("div","hud-col hud-top");Z.append(h,p);const Fe=se("div","hud-col hud-right");Fe.append(R,we,he),t.append(ce,bt,Z,Fe,q,ie,ke,xe,Te,te),document.body.append(t);let le=0,be=0;const Be=new Map;function Oe(){const Re=Se.width,M=Se.height,H=s.state.hour;for(let W=0;W<Re;W++){const $=H+W/Re*tl,V=s.sunlight($),pe=s.eclipse($),Ee=Math.round(14+241*V),De=Math.round(22+204*V-8*pe),Ve=Math.round(58+110*V-40*pe);oe.fillStyle=`rgb(${Ee},${De},${Ve})`,oe.fillRect(W,0,1,M),pe>.5&&(oe.fillStyle="rgba(255,140,60,0.9)",oe.fillRect(W,M-3,1,3));const qe=s.plasma($);if(qe>.04){oe.fillStyle=`rgba(190,110,255,${Math.min(1,.35+qe)})`;const tt=Math.round(qe*(M-6));oe.fillRect(W,M-3-tt,1,tt)}}oe.fillStyle="rgba(255,255,255,0.35)";for(let W=1;W*10<tl;W++)oe.fillRect(Math.round(W*10*Re/tl),0,1,4)}function G(){const Re=s.state,M=[],H=s.plasma(),W=s.stormHour()-Re.hour;if(H>.25?M.push({what:Math.abs(W)<2?"PURPLE AURORA STORM":"Plasma crossing",hours:0}):W>0&&W<12?M.push({what:"Purple Aurora Storm",hours:W}):M.push({what:"Plasma crossing",hours:s.nextCrossingIn()}),s.tideNow()?M.push({what:"The fault is moving",hours:0}):s.tideIn()<12&&M.push({what:"The fault moves",hours:s.tideIn()}),s.eclipse()>.5)M.push({what:"Jupiter is hiding the Sun",hours:0});else if(s.sunlight()>.5){for(let $=.25;$<60;$+=.25)if(s.sunlight(Re.hour+$)<.5){M.push({what:s.eclipse(Re.hour+$+.3)>.5?"Eclipse":"Dark",hours:$});break}}else for(let $=.25;$<80;$+=.25)if(s.sunlight(Re.hour+$)>.5){M.push({what:"Sunlight",hours:$});break}return M}const Ce=Re=>Re<=0?"NOW":`in ${el(Re)}`;let Ge=0,Pe="",dt=null;function Et(Re,M){Yi(M),Ti(M),ai(M.way),rn(M.training,M.parts),le>0&&(le-=Re,le<=0&&q.classList.remove("show")),Ge-=Re,!(Re>0&&Ge>0)&&(Ge=.1,sn(M))}function sn(Re){const M=s.state,H=s.plasma(),W=s.sunlight();i.textContent=M.zone==="habitat"?"Inside the habitat":M.zone==="cave"?"In the ice cave":"Outside",t.classList.toggle("inside",M.zone==="habitat");const $=W>.5;o.val.textContent=`${Math.round(M.battery)}%`,o.fill.style.width=`${M.battery}%`;const V=M.battery<e.battery.redLine;o.m.classList.toggle("warn",V),o.sub.textContent=V?`BELOW THE RED LINE: base shuts down in ${el(Math.max(0,e.battery.graceHours-M.lowPowerHours))}`:s.boosted()?`Boost running: ${el(M.boostUntil-M.hour)} of full power left`:s.batteryRate()>.05?$?"Sunlight is filling it":"The reactor’s spare power is filling it":"Dark: slowly draining",l.val.textContent=`${Math.round(M.warmth)}%`,l.fill.style.width=`${M.warmth}%`,l.m.classList.toggle("warn",M.warmth<e.heat.warnAt);const pe=s.habitatWarmth(),Ee=s.boosted()?"Boost":e.plans[M.plan].name;l.sub.textContent=M.zone==="habitat"?s.baking()?"Heaters lent to the camera: cooling":`${Ee}${$?"":", in the dark"}: ${pe>.3?"warming up":pe<-3?"cooling fast":pe<-.3?"cooling slowly":"holding"}`:M.zone==="cave"?"Bare ice all round: cooling fast":$?"Outside in sunlight: cooling":"Outside in the dark: cooling fast",c.val.textContent=`${Math.round(M.dose)}% of limit`,c.fill.style.width=`${M.dose}%`,c.m.classList.toggle("warn",M.dose>e.dose.warnAt),c.m.classList.toggle("surge",H>.25);const De=M.zone==="habitat"?"Habitat walls: rising slowly":M.zone==="cave"?"Under thick ice: almost stopped":"No shelter: rising fast";if(c.sub.textContent=H>.25?`${De} · ${s.inStorm()?"PURPLE AURORA STORM":"PLASMA CROSSING"}`:De,u.textContent=`Europa day ${s.dayNumber()} · hour ${Math.floor(s.hourOfDay())} of ${e.dayHours}`,be-=1,be<=0){be=3,Oe();const Yn=G(),an=Yn.reduce((Vn,wt)=>wt.hours<Vn.hours?wt:Vn);d.textContent=`${an.what} ${Ce(an.hours)}`,d.classList.toggle("now",an.hours<=0),j.replaceChildren(...Yn.map(Vn=>{const wt=se("div",Vn.hours<=0?"f-row now":"f-row");return wt.append(se("span","",Vn.what),se("b","",Ce(Vn.hours))),wt}))}const Ve=M.depthKm/e.iceKm,qe=s.digSpeed(),tt=[M.sensor.blind?"half-blind":"",s.inSalt()?"in salt":"",M.tide.braked?"stretched cable":"",M.refreeze>.02&&qe>0?"melting free":""].filter(Boolean).join(", ");ee.textContent=M.started?M.brine.stage==="open"?"STOPPED at salty water":M.brine.stage==="sampling"?"Stopped: taking a sample":qe===0?`${Ee}: not digging`:`${Ee} · ${qe.toFixed(2)} km an hour${tt?` (${tt})`:""}`:"Not started",Me.style.height=`${Ve*100}%`,fe.style.top=`${Ve*100}%`,ae.textContent=`${M.depthKm.toFixed(1)} km`,R.classList.toggle("warn",M.refreeze>.02||M.strain>.05);const $e=M.zone==="habitat",ct=M.strain>.05&&!M.tide.braked;ve(re,M.strain,M.tide.braked?"Spool locked: it can’t snap":M.strain>=.7?"Close to snapping!":s.tideNow()?"The fault is moving: tightening":M.strain>.02?"Easing off":"Slack"),g.a.classList.toggle("hidden",!ct),g.a.classList.toggle("urgent",M.strain>=.7),ct&&(g.val.textContent=`${Math.round(M.strain*100)}%`,g.fill.style.width=`${M.strain*100}%`,g.todo.textContent=M.strain>=.7?"About to snap! Pay out slack at the cable spool":$e?"Go out to the cable spool and pay out slack":"Pay out slack at the cable spool");const ft=M.brine.stage==="open",Mt=M.brine.stage==="sampling",on=!s.boosted()&&e.plans[M.plan].freeze>0,mt=M.started&&(ft||Mt||on),Ke=mt&&M.refreeze>.02;ve(ge,M.refreeze,M.refreeze<.02&&!mt?"Open":mt?"Freezing shut":"Melting free again"),m.a.classList.toggle("hidden",!Ke),m.a.classList.toggle("urgent",M.refreeze>=.7),Ke&&(m.val.textContent=`${Math.round(M.refreeze*100)}%`,m.fill.style.width=`${M.refreeze*100}%`,m.todo.textContent=ft?"The cryobot is waiting at the salty water: decide there":Mt?"It freezes while the cryobot stands still for its sample":$e?"The cryobot has no heat: move the power lever":"The cryobot has no heat: change the power plan in the habitat"),t.classList.toggle("danger",ct&&M.strain>=.7||Ke&&M.refreeze>=.7);const Nn=s.boosted()?e.plans.dig.kmh:e.plans[M.plan].kmh;U.style.width=`${Nn/e.plans.dig.kmh*100}%`,P.textContent=Nn>0?Nn>=e.plans.dig.kmh?"full":"half":"stopped",F.textContent=s.baking()?"▼ heaters lent to the camera":`${pe>.3?"▲ warming up":pe<-3?"▼ cooling fast":pe<-.3?"▼ cooling slowly":"● holding"}${$?"":" (dark)"}`,D.classList.toggle("up",pe>.3&&!s.baking()),D.classList.toggle("down",pe<-.3||s.baking()),z.textContent=on?"No heat for the cryobot: its hole is freezing":"",T.textContent=M.clues>0?`Life clues on board: ${M.clues}`:"";const vt=Re.tracker||[],En=vt.join("|");f.dataset.key!==En&&(f.dataset.key=En,f.replaceChildren(...vt.map(Yn=>se("div","c-line",Yn))))}function ai(Re){if(ke.classList.toggle("hidden",!Re),!Re)return;const M=`${Re.label} · ${Math.round(Re.dist)} m`;Qe.textContent!==M&&(Qe.textContent=M),ke.classList.toggle("train",!!Re.train),ke.classList.toggle("left",Re.side==="left"),ke.classList.toggle("right",Re.side==="right"),Re.side?(ke.style.left="",ke.style.top=""):(ke.style.left=`${Re.x}px`,ke.style.top=`${Re.y}px`)}function rn(Re,M){const H=Re?`${Re.n}|${Re.text}|${Re.hint}|${Re.key}|${Re.good}`:"";H!==Pe&&(Pe=H,xe.classList.toggle("hidden",!Re),t.classList.toggle("training",!!Re),Re&&(Ae.textContent=`Training · ${Re.n} of ${Re.total}`,Je.textContent=Re.text,me.textContent=Re.hint||"",Xe.textContent=Re.key||"",Ne.classList.toggle("hidden",!Re.key),xe.classList.toggle("good",!!Re.good)));const W=M?M.join(","):"all";if(W!==dt){const $=dt;dt=W;for(const V of t.querySelectorAll("[data-part]")){const pe=!!M&&!M.includes(V.dataset.part),Ee=V.classList.contains("part-off");V.classList.toggle("part-off",pe),Ee&&!pe&&$!==null&&M&&(V.classList.add("part-new"),setTimeout(()=>V.classList.remove("part-new"),5e3))}n.classList.toggle("part-off",!!M&&!["battery","heat","dose"].some(V=>M.includes(V)))}}function Yi(Re){const M=new Set;for(const H of Re.actions||[]){if(H.id==="plan"||H.id==="boost")continue;M.add(H.key);let W=Be.get(H.key);W||(W=se("div","prompt"),W.append(se("i","p-fill"),se("kbd","",H.key),se("span","p-text")),Be.set(H.key,W),ie.append(W));const $=`Hold: ${H.label}`;W.dataset.text!==$&&(W.dataset.text=$,W.querySelector(".p-text").textContent=$),W.querySelector(".p-fill").style.width=`${Math.min(1,H.progress)*100}%`,W.classList.toggle("holding",H.progress>0)}for(const[H,W]of Be)M.has(H)||(W.remove(),Be.delete(H))}let li=null;function Ti(Re){if(!t.classList.contains("inside"))return;const M=s.state,H=Re.actions||[],W=H.find(qe=>qe.id==="plan"),$=H.find(qe=>qe.id==="boost"),V=_[M.plan],pe=W?_[W.next]:V;S.style.left=`${V+(pe-V)*(W?Math.min(1,W.progress):0)}%`,C.classList.toggle("holding",!!W&&W.progress>0),Y.style.width=`${$?Math.min(1,$.progress)*100:0}%`,X.classList.toggle("holding",!!$&&$.progress>0);const Ee=s.boosted()?Math.ceil(M.boostUntil-M.hour):0,De=`${M.plan}|${W?W.next:""}|${$?$.label:""}|${Ee}`;if(De===li)return;li=De;for(const qe of y)w[qe].classList.toggle("on",qe===M.plan);k.classList.toggle("off",!W),W&&(B.textContent=`Hold: move to ${e.plans[W.next].name} (${W.why})`),X.classList.toggle("off",!$),X.classList.toggle("running",Ee>0);const Ve=e.battery;ue.textContent=Ee>0?`Running: ${el(Ee)} left`:$?`Hold: ${$.label.replace(/^boost: /,"")}`:`${Ve.boostHours} hours of full digging AND warmth (−${Ve.boost}% battery)`}let vs="info";function sa(Re,M="info",H=6){le>0&&vs==="warn"&&M!=="warn"||(vs=M,q.textContent=Re,q.className=`hud-toast show ${M}`,le=H)}function tr(Re){t.classList.toggle("hidden",!Re)}function ra({title:Re,story:M,real:H,where:W,options:$}){Te.replaceChildren();const V=se("div","card-box");V.append(se("div","card-tag","Situation"),se("h2","",Re),se("p","card-story",M),se("p","card-real",H));const pe=se("div","card-options");for(const Ve of $){const qe=se("div","card-option");qe.append(se("b","",Ve.name),se("span","",Ve.cost)),pe.append(qe)}const Ee=se("div","card-foot"),De=se("div","card-go");De.append(se("kbd","","F"),se("span","","Carry on")),Ee.append(se("div","card-where",W),De),V.append(pe,Ee),Te.append(V),Te.classList.remove("hidden")}function oa(){Te.classList.add("hidden")}function Nc(Re,{onRetry:M,onRestart:H,retryLabel:W,onReal:$}){const V=s.state;te.replaceChildren();const pe=se("div","end-card");if(Re.type==="breakthrough")pe.classList.add("win"),pe.append(se("h2","","Breakthrough!"),se("p","",`The cryobot melted through all ${e.iceKm} km of ice, and you were the first to see what lives in Europa’s ocean.`),se("p","end-real",`You finished with ${Math.round(V.dose)}% of your radiation limit used, on Europa day ${s.dayNumber()}.`),se("p","",V.clues>=2?"You brought 2 life clues, the salty water and the ocean chemicals, so the cameras knew where to look: you found the most there was to find, even the giant far below.":V.clues===1?"You brought 1 life clue, so the cameras knew a little of where to look. With both clues there is more down there to find.":"You brought no life clues, so the cameras did not know where to look. With clues there is more down there to find."),se("p","end-note","The ocean under Europa’s ice is real. The life in it is imagined: none has been found."));else{const De=zw[Re.cause],Ve=Re.cause==="cryobot"&&V.brine.stage==="open"?De.whatWaiting:Re.cause==="cryobot"&&V.brine.stage==="sampling"?De.whatSampling:De.what;pe.append(se("h2","",De.title),se("p","",Ve),se("p","end-real",De.real));const qe=se("div","end-depth"),tt=se("div","end-bar"),$e=se("i");$e.style.width=`${Re.depthKm/e.iceKm*100}%`,tt.append($e),qe.append(se("div","",`The cryobot got ${Re.depthKm.toFixed(1)} km down. The ice is about ${e.iceKm} km thick (measured by NASA’s Juno spacecraft).`),tt),pe.append(qe);const ct=V.log.filter(ft=>ft.tag===Re.cause||ft.tag==="clock"||ft.tag==="action").slice(-7);if(ct.length){pe.append(se("h3","","What led here"));const ft=se("ol","end-chain");for(const Mt of ct)ft.append(se("li","",`Day ${Mt.day}, hour ${Math.floor(Mt.hod)}: ${Mt.text}`));pe.append(ft)}}const Ee=se("div","end-buttons");if(Re.type!=="breakthrough"&&M){const De=se("button","primary",`Try again from ${W}`);De.addEventListener("click",M),Ee.append(De)}if(Re.type==="breakthrough"||!W.startsWith("the start of the mission")){const De=se("button",Re.type==="breakthrough"?"primary":"",Re.type==="breakthrough"?"Play again":"Start the mission over");De.addEventListener("click",H),Ee.append(De)}if($){const De=se("button","","What’s real?");De.addEventListener("click",$),Ee.append(De)}pe.append(Ee),te.append(pe),te.classList.remove("hidden"),document.body.classList.add("mission-over")}function kc(){te.classList.add("hidden"),document.body.classList.remove("mission-over")}return{update:Et,say:sa,show:tr,showCard:ra,hideCard:oa,showEnd:Nc,hideEnd:kc,root:t}}const Li=s=>`${Math.max(1,Math.round(s))} hour${Math.round(s)===1?"":"s"}`,Zf=s=>`${Math.round(s*100)}%`,tu={brine:{title:"A pocket of salty water",spoken:"The cryobot has melted into a pocket of salty water and stopped. Until you decide, the water behind it goes on freezing.",story:s=>`${s.state.depthKm.toFixed(1)} km down, the cryobot has melted into a pocket of salty water and stopped. Until you decide, the water behind it goes on freezing.`,real:"Real: scientists think pockets of salty water lie inside Europa’s ice, and NASA counts them as a hazard for a cryobot.",where:"Decide at the cryobot.",options:[{name:"Take a sample",cost:`It could hold signs of life. The dig stops for ${gt.brine.sampleHours} hours and the hole freezes partly shut.`},{name:"Steer round it",cost:`Costs ${gt.brine.detourBattery}% of the battery. No sample.`}],status:s=>{const e=s.state;return e.brine.stage==="sampling"?`Taking the sample: ${Li(e.brine.until-e.hour)} left`:`Salty water: the cryobot is waiting for you (hole ${Zf(e.refreeze)} frozen)`}},eclipse:{title:"Jupiter is about to hide the Sun",spoken:"Soon Jupiter will block the Sun for 3 hours. In the dark the same power keeps the habitat less warm, and the battery drains instead of filling. Tonight it will be the same, for far longer.",story:s=>`In about ${Li(s.eclipseIn())} Jupiter will block the Sun for 3 hours. In the dark the same power keeps the habitat less warm, and the battery drains instead of filling. Tonight it will be the same, for far longer.`,real:"Real: on this side of Europa, Jupiter eclipses the Sun once every Europa day, for about 3 hours.",where:"The power plan is set inside the habitat.",options:[{name:"Dig first",cost:"Fastest dig. The crew gets cold, quickly in the dark."},{name:"Share",cost:"Half-speed dig. Warm by day, slowly cooling in the dark."},{name:"Warm first",cost:"The crew warms up. The cryobot gets no heat: no digging, and its hole starts to freeze."},{name:"Boost",cost:`${gt.battery.boost}% of the battery buys ${gt.battery.boostHours} hours of full digging AND warmth.`}],status:s=>s.eclipse()>.5?"Jupiter is hiding the Sun: everything is colder":`Eclipse in ${Li(s.eclipseIn())}: choose your power plan in the habitat`},crack:{title:"Ocean chemicals at the crack",spoken:`The scanner has found ammonia beside the red crack: a sign that ocean water reached the surface there not long ago. Radiation will destroy it in about ${gt.crack.lastsHours} hours.`,story:()=>`The scanner has found ammonia beside the red crack: a sign that ocean water reached the surface there not long ago. Radiation will destroy it in about ${gt.crack.lastsHours} hours.`,real:"Real: ammonia compounds were found near Europa’s cracks in data from NASA’s Galileo. Radiation destroys ammonia quickly, so it must have surfaced recently.",where:"Follow the green beacon.",options:[{name:"Walk out and collect it",cost:"A life clue. It is a long walk in the open: radiation and cold all the way."},{name:"Leave it",cost:"No walk, and no clue."}],status:s=>`Ocean chemicals at the green beacon: gone in ${Li(s.state.crack.until-s.state.hour)}`},sensor:{title:"The cryobot’s camera is clouded",spoken:"Radiation from the plasma crossing has clouded the cryobot’s guide camera. Half-blind, it digs at about half its speed.",story:()=>"Radiation from the plasma crossing has clouded the cryobot’s guide camera. Half-blind, it digs at about half its speed.",real:"Real: radiation damaged the camera on NASA’s Juno spacecraft. Engineers healed it by heating it.",where:"Decide at the cryobot.",options:[{name:"Bake it clear",cost:`The habitat’s heaters go to the camera for ${gt.sensor.bakeHours} hours. The crew gets cold meanwhile.`},{name:"Leave it",cost:"The dig stays at about half speed until you do."}],status:s=>s.state.sensor.stage==="baking"?`Baking the camera: ${Li(s.state.sensor.bakeUntil-s.state.hour)} left, heaters off`:"Clouded camera: the dig is at half speed (bake it at the cryobot)"},storm:{title:"A Purple Aurora Storm is coming",spoken:"A far stronger plasma crossing is on its way, and it will last about 3 hours. The habitat’s thin walls will not stop much of it.",story:s=>`A far stronger plasma crossing will arrive in about ${Li(s.stormHour()-s.state.hour)} and last about 3 hours. The habitat’s thin walls will not stop much of it.`,real:"Real: Jupiter’s plasma sweeps over Europa, and scientists think Io’s eruptions may make it stronger. The purple is our colouring: the real glow is ultraviolet.",where:"Choose where to be when it hits.",options:[{name:"Stay in the habitat",cost:"A big dose of radiation."},{name:"Fill the habitat’s walls with water",cost:`Costs ${gt.storm.wallsBattery}% of the battery to melt the ice. Water blocks most of the storm.`},{name:"Shelter in the ice cave",cost:"Thick ice blocks nearly all of it, but the cave is bitterly cold and a long walk."}],status:s=>{const e=s.stormHour()-s.state.hour,t=s.state.storm.walls?" (walls filled)":"";return e>1?`Purple Aurora Storm in ${Li(e)}${t}`:`PURPLE AURORA STORM${t}`}},tide:{title:"The sideways tide",spoken:`Soon the tide will start to grind the fault sideways, for ${gt.tide.hours} hours. The cryobot’s cable crosses that fault, and will be pulled tighter and tighter until it snaps.`,story:s=>`In about ${Li(s.tideIn())} the tide will start to grind the fault sideways, for ${gt.tide.hours} hours. The cryobot’s cable crosses that fault, and will be pulled tighter and tighter until it snaps.`,real:"Real: Europa’s faults slide sideways with the daily tide. A NASA-funded team is studying how a cryobot’s cable could survive it.",where:"Decide at the cable spool.",options:[{name:"Pay out slack",cost:"Only helps while the cable is tight, so you must come back about three times: outside, at night."},{name:"Lock the spool",cost:"The cable stretches but cannot snap. Stretched, it carries less power: the dig is a third slower for the rest of the mission."}],status:s=>s.tideNow()||s.state.strain>.02?`The fault is moving: cable strain ${Zf(s.state.strain)} (cable spool)`:`The fault moves in ${Li(s.tideIn())} (cable spool)`},salt:{title:"A layer of salt",spoken:"The cryobot has hit a hard layer of salt. It has slowed to a crawl.",story:s=>`${s.state.depthKm.toFixed(1)} km down, the cryobot has hit a hard layer of salt. It has slowed to a crawl.`,real:"Real: NASA expects layers of salt to slow a cryobot, which needs water jets or cutters to get through.",where:"Decide at the cryobot.",options:[{name:"Use the cutting jets",cost:`Costs ${gt.salt.jetsBattery}% of the battery. Through at full speed.`},{name:"Crawl through",cost:"Costs nothing but hours, while your radiation dose climbs."}],status:s=>s.state.salt.jets?"Salt layer: the jets are cutting through":"Salt layer: the dig is crawling (jets at the cryobot)"}},wr=new Ie(133912),Ih=600,Ht=new A(0,-17,-150),hi=new A(0,-24,-205),Kf=-4.5,Xt={uTime:{value:0},uLamp:{value:1},uReveal:{value:0},uHint:{value:.14},uCenter:{value:Ht.clone()},uCamPos:{value:new A},uCamDir:{value:new A(0,0,-1)}},Di=`
  uniform vec3 uCenter; uniform float uReveal; uniform float uHint; uniform float uTime; uniform float uLamp;
  // Before the lamps go off the life is only a faint hint, fainter still in the lamps' glare.
  // Nothing near the window shows at all until then: only the far glow.
  float revealAt(vec3 w){ float d = distance(w, uCenter); return max(uHint * (1.0 - 0.8*uLamp) * smoothstep(28.0, 65.0, d), 1.0 - smoothstep(uReveal - 16.0, uReveal, d)); }
`,lo=(s,e)=>-(Lt(s*.035+7,e*.035+3,4)*7+Lt(s*.15,e*.15,3)*1.4)+4.2,jn=(s,e,t)=>{const n=document.createElement(s);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n};function Hw({camera:s,audio:e}){const t=new mc;t.background=new Ie(0);const n=gn(41),i=(R,ee)=>R+n()*(ee-R),r=new it;t.add(r);const o=new it;t.add(o);const a=[];for(const R of[-1,1]){const ee=new Yl(14677247,0,130,.5,.7,1.1);ee.position.set(R*1.3,-.6,.5),ee.target.position.set(R*3,-1,-40),o.add(ee,ee.target),a.push(ee);const K=new je(new Bi(11,60,24,1,!0),new At({transparent:!0,depthWrite:!1,blending:bn,side:qt,uniforms:{uLamp:Xt.uLamp},vertexShader:`varying float vL; varying vec3 vN; varying vec3 vV;
          void main(){ vL = -position.y / 60.0; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uLamp; varying float vL; varying vec3 vN; varying vec3 vV;
          void main(){ float edge = pow(abs(dot(normalize(vN), normalize(vV))), 1.5); float a = (1.0 - vL) * (1.0 - vL) * edge * 0.16 * uLamp;
            gl_FragColor = vec4(vec3(0.55, 0.8, 1.0) * a, a); }`}));K.geometry.translate(0,-30,0),K.rotation.x=Math.PI/2,K.rotation.z=-R*.07,K.position.copy(ee.position),o.add(K)}const l=new Yl(13627135,0,110,1.05,.8,1);l.position.set(0,.4,0),l.target.position.set(0,26,-30),o.add(l,l.target),t.add(new Pc(1455708,132620,.5));{const R=new $n(520,520,150,150);R.rotateX(Math.PI/2);const ee=R.attributes.position;for(let q=0;q<ee.count;q++)ee.setY(q,lo(ee.getX(q),ee.getZ(q)-110));R.translate(0,0,-110),R.computeVertexNormals();const K=new je(R,new Rt({color:9422054,roughness:.3,metalness:0,emissive:202790,emissiveIntensity:1,side:qt,flatShading:!0}));r.add(K);const Me=new Bi(.5,1,6);Me.rotateX(Math.PI),Me.translate(0,-.5,0);const fe=new pn(Me,K.material,420),ae=new Ze,_e=new Ct,L=new St;for(let q=0;q<420;q++){let ie=i(-70,70);const ce=i(-250,20);Math.abs(ie)<10&&ce>-170&&(ie+=ie<0?-12:12);const te=Math.pow(n(),2.2)*9+.8;L.set(i(-.12,.12),i(0,6.28),i(-.12,.12)),ae.compose(new A(ie,lo(ie,ce)+.3,ce),_e.setFromEuler(L),new A(i(.5,1.6)*(.6+te*.12),te,i(.5,1.6)*(.6+te*.12))),fe.setMatrixAt(q,ae)}r.add(fe);const T=new je(new Gr(2.6,32),new cn({color:new Ie(7331071).multiplyScalar(1.6),side:qt}));T.rotation.x=Math.PI/2,T.position.set(0,lo(0,0)-.05,0),r.add(T)}{const K=new Float32Array(7800),Me=new Float32Array(2600);for(let _e=0;_e<2600;_e++)K[_e*3]=i(0,90),K[_e*3+1]=i(0,90),K[_e*3+2]=i(0,90),Me[_e]=n();const fe=new nt;fe.setAttribute("position",new ut(K,3)),fe.setAttribute("aSeed",new ut(Me,1));const ae=new ko(fe,new At({transparent:!0,depthWrite:!1,blending:bn,uniforms:{...Xt,uBox:{value:90}},vertexShader:`attribute float aSeed; uniform vec3 uCamPos; uniform vec3 uCamDir; uniform float uBox; varying float vBeam; varying float vSeed; varying float vBio; ${Di}
        void main(){
          vec3 drift = vec3(sin(uTime*0.11 + aSeed*40.0)*1.5, -uTime*0.25, cos(uTime*0.09 + aSeed*31.0)*1.5);
          vec3 w = mod(position + drift - uCamPos, uBox) - 0.5*uBox + uCamPos;   // always a cloud around the camera
          vec3 to = w - uCamPos; float d = length(to);
          vBeam = smoothstep(0.80, 0.97, dot(to / max(d, 0.001), uCamDir)) * exp(-d * 0.035);
          vBio = revealAt(w) * step(0.55, aSeed); vSeed = aSeed;
          vec4 mv = viewMatrix * vec4(w, 1.0);
          gl_PointSize = (1.5 + 3.0*aSeed) * 26.0 / max(-mv.z, 1.0);
          gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform float uLamp; uniform float uTime; varying float vBeam; varying float vSeed; varying float vBio;
        void main(){ float r = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, r);
          float tw = 0.5 + 0.5*sin(uTime*(1.0 + 3.0*vSeed) + vSeed*90.0);
          vec3 lit = vec3(0.75, 0.9, 1.0) * vBeam * uLamp * 0.9;
          vec3 bio = mix(vec3(0.2, 1.0, 0.75), vec3(0.3, 0.6, 1.0), fract(vSeed*7.0)) * vBio * tw * tw * 0.9;
          gl_FragColor = vec4((lit + bio) * a, a); }`}));ae.frustumCulled=!1,r.add(ae)}const c=[3535615,5111728,8037119,16736210,11565823,16757575,10354522],h=R=>new Ie(c[R%c.length]),u=new it;r.add(u);const d=(R,ee,K,Me)=>R.setAttribute(ee,new $s(K,Me));function f(R){const ee=R.length,K=new $i([[.001,.62],[.32,.58],[.62,.46],[.86,.24],[1,0],[.9,-.1]].map(([me,Ne])=>new de(me,Ne)),40),Me=new Float32Array(ee),fe=new Float32Array(ee),ae=new Float32Array(ee*3);R.forEach((me,Ne)=>{Me[Ne]=me.phase,fe[Ne]=me.speed,me.color.toArray(ae,Ne*3)}),d(K,"aPhase",Me,1),d(K,"aSpeed",fe,1),d(K,"aColor",ae,3);const _e=new pn(K,new At({transparent:!0,depthWrite:!1,blending:bn,side:qt,uniforms:Xt,vertexShader:`attribute float aPhase; attribute float aSpeed; attribute vec3 aColor; varying vec3 vCol; varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying float vPulse; ${Di}
        void main(){
          float pulse = 0.5 + 0.5*sin(uTime*aSpeed + aPhase); vPulse = pulse;
          float rim = smoothstep(0.15, 1.0, uv.y);
          vec3 p = position; p.xz *= 1.0 - 0.26*rim*pulse; p.y *= 1.0 + 0.2*pulse;
          vec4 w = modelMatrix * instanceMatrix * vec4(p, 1.0);
          w.y += sin(uTime*0.17 + aPhase*1.7)*1.6 + pulse*0.5; w.x += sin(uTime*0.07 + aPhase)*1.2;
          vW = w.xyz; vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal); vCol = aColor; vUv = uv;
          gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform vec3 uCamPos; varying vec3 vCol; varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying float vPulse; ${Di}
        void main(){
          vec3 V = normalize(uCamPos - vW); float fres = pow(1.0 - abs(dot(normalize(vN), V)), 1.6);
          float canals = pow(abs(sin(vUv.x * 3.14159 * 16.0)), 8.0) * smoothstep(0.1, 0.9, vUv.y);
          float rimBand = smoothstep(0.86, 1.0, vUv.y);
          float bio = revealAt(vW);
          vec3 col = vCol * (0.16 + 1.5*fres + 1.1*canals + 2.2*rimBand*(0.5 + 0.5*vPulse)) * bio;
          col += vec3(0.5, 0.7, 0.9) * fres * 0.09 * uLamp * exp(-distance(vW, uCamPos)*0.03);   // a pale ghost in the lamplight
          gl_FragColor = vec4(col, 1.0); }`}),ee),L=9,T=new $n(1,1,1,22);T.translate(0,-.5,0);const q=ee*L,ie=new Float32Array(q),ce=new Float32Array(q),te=new Float32Array(q),Te=new Float32Array(q*3),xe=new pn(T,new At({transparent:!0,depthWrite:!1,blending:bn,side:qt,uniforms:Xt,vertexShader:`attribute float aPhase; attribute float aBob; attribute float aLen; attribute vec3 aColor; varying vec3 vCol; varying float vT; varying vec3 vW; varying float vX; ${Di}
        void main(){
          float t = -position.y; vT = t; vX = position.x;
          vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
          w.x += sin(t*7.0 - uTime*1.5 + aPhase) * 0.09 * aLen * t; w.z += cos(t*5.0 - uTime*1.2 + aPhase*2.0) * 0.09 * aLen * t;
          w.y += sin(uTime*0.17 + aBob*1.7)*1.6; w.x += sin(uTime*0.07 + aBob)*1.2;
          vW = w.xyz; vCol = aColor; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`varying vec3 vCol; varying float vT; varying vec3 vW; varying float vX; ${Di}
        void main(){ float beads = 0.55 + 0.45*sin(vT*60.0 - uTime*3.0); float across = 1.0 - abs(vX)*2.0;
          gl_FragColor = vec4(vCol * (1.0 - vT*0.85) * beads * across * 1.3 * revealAt(vW), 1.0); }`}),q),Ae=new Ze,Je=new Ct;R.forEach((me,Ne)=>{Ae.compose(me.pos,Je.setFromEuler(new St(me.tilt,0,me.tilt*.6)),new A(me.size,me.size,me.size)),_e.setMatrixAt(Ne,Ae);for(let Xe=0;Xe<L;Xe++){const Le=Xe/L*Math.PI*2,ke=Xe%3===0?.25:.82,rt=me.size*(Xe%3===0?i(3.5,5.5):i(1.8,3.6)),Qe=Ne*L+Xe;Ae.compose(new A(me.pos.x+Math.cos(Le)*ke*me.size,me.pos.y,me.pos.z+Math.sin(Le)*ke*me.size),Je.setFromEuler(new St(0,Le,0)),new A(me.size*(Xe%3===0?.16:.07),rt,1)),xe.setMatrixAt(Qe,Ae),ie[Qe]=i(0,6.28),ce[Qe]=me.phase,te[Qe]=rt,me.color.toArray(Te,Qe*3)}}),d(T,"aPhase",ie,1),d(T,"aBob",ce,1),d(T,"aLen",te,1),d(T,"aColor",Te,3),_e.frustumCulled=xe.frustumCulled=!1,u.add(_e,xe)}function p(R){const ee=R.length,K=new Dn(1,40,28),Me=new Float32Array(ee);R.forEach((L,T)=>{Me[T]=L.phase}),d(K,"aPhase",Me,1);const fe=new pn(K,new At({transparent:!0,depthWrite:!1,blending:bn,uniforms:Xt,vertexShader:`attribute float aPhase; varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying float vPh; ${Di}
        void main(){ vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
          w.y += sin(uTime*0.21 + aPhase*2.3)*1.1; w.z += sin(uTime*0.05 + aPhase)*2.5;
          vW = w.xyz; vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal); vUv = uv; vPh = aPhase;
          gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform vec3 uCamPos; varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying float vPh; ${Di}
        vec3 hue(float h){ return clamp(abs(fract(h + vec3(0.0, 0.667, 0.333)) * 6.0 - 3.0) - 1.0, 0.0, 1.0); }
        void main(){
          float rows = pow(abs(cos(vUv.x * 3.14159 * 8.0)), 60.0) * smoothstep(0.06, 0.2, vUv.y) * smoothstep(0.94, 0.8, vUv.y);
          float beat = 0.35 + 0.65 * pow(0.5 + 0.5*sin(vUv.y*70.0 - uTime*7.0 + vPh), 2.0);
          vec3 rainbow = hue(vUv.y*2.5 - uTime*0.35 + vPh) * rows * beat * 3.2;
          float fres = pow(1.0 - abs(dot(normalize(vN), normalize(uCamPos - vW))), 2.2);
          vec3 col = (rainbow + vec3(0.25, 0.9, 1.0) * fres * 0.7) * revealAt(vW);
          col += vec3(0.5, 0.7, 0.9) * fres * 0.08 * uLamp * exp(-distance(vW, uCamPos)*0.03);
          gl_FragColor = vec4(col, 1.0); }`}),ee),ae=new Ze,_e=new Ct;R.forEach((L,T)=>{ae.compose(L.pos,_e.setFromEuler(new St(L.tilt,L.phase,L.tilt)),new A(L.size*.62,L.size,L.size*.62)),fe.setMatrixAt(T,ae)}),fe.frustumCulled=!1,u.add(fe)}function v(R){const ee=new Bi(.5,1,5,6,!0);ee.rotateX(Math.PI),ee.translate(0,-.5,0);const K=new Float32Array(R),Me=new Float32Array(R*3),fe=new Ze,ae=new Ct,_e=new pn(ee,new At({transparent:!0,depthWrite:!1,blending:bn,side:qt,uniforms:Xt,vertexShader:`attribute float aPhase; attribute vec3 aColor; varying vec3 vCol; varying float vT; varying vec3 vW; ${Di}
        void main(){ float t = -position.y; vT = t; vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
          w.x += sin(uTime*0.9 + aPhase + t*3.0) * 0.35 * t; w.z += cos(uTime*0.7 + aPhase*1.3 + t*2.0) * 0.35 * t;
          vW = w.xyz; vCol = aColor; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`varying vec3 vCol; varying float vT; varying vec3 vW; ${Di}
        void main(){ float tip = smoothstep(0.55, 1.0, vT); float pulse = 0.7 + 0.3*sin(uTime*1.3 + vW.x*0.4 + vW.z*0.3);
          gl_FragColor = vec4(vCol * (0.12 + 0.3*vT + 2.4*tip) * pulse * revealAt(vW), 1.0); }`}),R),L=Array.from({length:16},()=>({x:hi.x+i(-55,55),z:hi.z+i(-60,55),r:i(5,14),c:Math.floor(i(0,7))}));for(let T=0;T<R;T++){const q=L[T%L.length],ie=i(0,6.28),ce=Math.sqrt(n())*q.r,te=q.x+Math.cos(ie)*ce,Te=q.z+Math.sin(ie)*ce,xe=i(.6,3.2)*(1-ce/q.r*.6);fe.compose(new A(te,lo(te,Te)+.1,Te),ae.setFromEuler(new St(i(-.3,.3),i(0,6.28),i(-.3,.3))),new A(.14+xe*.05,xe,.14+xe*.05)),_e.setMatrixAt(T,fe),K[T]=i(0,6.28),h(q.c+(n()<.2?1:0)).toArray(Me,T*3)}d(ee,"aPhase",K,1),d(ee,"aColor",Me,3),_e.frustumCulled=!1,u.add(_e)}const g=[],m=R=>{const ee=R.distanceTo(Xt.uCenter.value);return Math.max(Xt.uHint.value*(1-.8*Xt.uLamp.value)*tn.smoothstep(ee,28,65),1-tn.smoothstep(ee,Xt.uReveal.value-16,Xt.uReveal.value))};function y({origin:R,dir:ee,links:K,color:Me,phase:fe}){const ae=new cn({color:0,transparent:!0,blending:bn,depthWrite:!1}),_e=new pn(new Dn(1,8,6),ae,K);_e.frustumCulled=!1,u.add(_e);const L=new A().crossVectors(ee,new A(0,1,0)).normalize(),T=new A().crossVectors(L,ee).normalize(),q=new Ze,ie=new A,ce=Me.clone();g.push(te=>{const Te=R.clone().addScaledVector(ee,Math.sin(te*.05+fe)*14);ae.color.copy(ce).multiplyScalar(1.5*m(Te));for(let xe=0;xe<K;xe++){const Ae=xe*.55;ie.copy(Te).addScaledVector(ee,-Ae).addScaledVector(L,Math.sin(Ae*.35-te*.9+fe)*(1.2+Ae*.04)).addScaledVector(T,Math.cos(Ae*.27-te*.7+fe)*(.8+Ae*.03));const Je=(xe===0?.55:.12+.2*Math.abs(Math.sin(xe*1.7)))*(.8+.2*Math.sin(te*3-xe*.6));q.makeScale(Je,Je,Je).setPosition(ie),_e.setMatrixAt(xe,q)}_e.instanceMatrix.needsUpdate=!0})}function _({centre:R,radius:ee,speed:K,phase:Me,color:fe,size:ae}){const _e=new it,L=new je(new Dn(1,16,10),new cn({color:66826}));L.scale.set(ae*2.6,ae*.6,ae*.45),_e.add(L);const T=[],q=(te,Te,xe,Ae,Je)=>{const me=new je(new Dn(Ae,8,6),new cn({color:0,transparent:!0,blending:bn,depthWrite:!1}));return me.position.set(te,Te,xe),me.userData.base=Je.clone(),_e.add(me),T.push(me),me};for(let te=0;te<14;te++)for(const Te of[-1,1])q(ae*(2.1-te*.32),-ae*.22,Te*ae*.36*Math.sin(Math.PI*(te+1)/16+.3),ae*.07,fe);q(ae*2.2,ae*.2,ae*.3,ae*.1,new Ie(16777215)),q(ae*2.2,ae*.2,-ae*.3,ae*.1,new Ie(16777215));const ie=q(ae*3.4,ae*1.1,0,ae*.22,new Ie(16765562));u.add(_e);const ce=new A;g.push(te=>{const Te=te*K+Me;ce.set(R.x+Math.cos(Te)*ee,R.y+Math.sin(Te*2.1)*3,R.z+Math.sin(Te)*ee*.7),_e.position.copy(ce),_e.rotation.y=-Te-Math.PI/2*Math.sign(K);const xe=m(ce);for(const Ae of T)Ae.material.color.copy(Ae.userData.base).multiplyScalar((Ae===ie?2.6*(.7+.3*Math.sin(te*2.3+Me)):1.7)*xe)})}function x(R){for(;u.children.length;)u.remove(u.children[0]);g.length=0;const ee=(ae,_e,L)=>new A(hi.x+i(-ae,ae),i(_e,L),hi.z+i(-ae,ae*.8)),K=[],Me=16+R*7;for(let ae=0;ae<Me;ae++)K.push({pos:ee(52,-48,-9),size:Math.pow(n(),1.8)*2.6+.7,phase:i(0,6.28),speed:i(.7,1.5),tilt:i(-.3,.3),color:h(ae)});for(let ae=0;ae<5;ae++)K.push({pos:new A(Ht.x+i(-16,16),Ht.y+i(-9,5),Ht.z-i(14,34)),size:i(.6,1.5),phase:i(0,6.28),speed:i(.8,1.6),tilt:i(-.3,.3),color:h(ae+2)});R>=2&&K.push({pos:new A(hi.x+18,-92,hi.z-40),size:21,phase:1.3,speed:.32,tilt:.12,color:new Ie(9071615)}),f(K);const fe=[];for(let ae=0;ae<9+R*3;ae++)fe.push({pos:ee(44,-38,-8),size:i(.8,2.1),phase:i(0,6.28),tilt:i(-.5,.5)});for(let ae=0;ae<3;ae++)fe.push({pos:new A(Ht.x+i(-10,10),Ht.y+i(-5,4),Ht.z-i(9,20)),size:i(.5,.9),phase:i(0,6.28),tilt:i(-.5,.5)});if(p(fe),v(520+R*160),R>=1){for(let ae=0;ae<3;ae++){const _e=new A(i(-1,1),i(-.25,.25),i(-.6,.6)).normalize();y({origin:ee(34,-34,-12),dir:_e,links:110,color:h(ae*2+1),phase:i(0,6.28)})}for(let ae=0;ae<3;ae++)_({centre:new A(hi.x+i(-12,12),i(-34,-16),hi.z+i(-10,14)),radius:i(22,40),speed:i(.05,.09)*(ae%2?-1:1),phase:i(0,6.28),color:h(ae*3),size:i(1.3,2.2)})}}const I={uScroll:{value:0},uOpen:{value:0}},C=new it;{const R=new je(new Hn(2.3,2.3,140,40,1,!0),new At({side:nn,uniforms:I,vertexShader:"varying vec3 vP; varying vec2 vUv; void main(){ vP = position; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform float uScroll; uniform float uOpen; varying vec3 vP; varying vec2 vUv;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+1.0), f.x), f.y); }
        void main(){
          float y = vP.y + uScroll;                       // the wall slides up past us
          float depth = clamp((70.0 - vP.y) / 140.0, 0.0, 1.0);   // 0 at the camera, 1 far below
          float rings = 0.55 + 0.45 * sin(y * 2.4 + 2.0*n(vec2(vUv.x*12.0, y*0.3)));
          float layers = n(vec2(vUv.x * 5.0, y * 0.08)) * 0.6 + n(vec2(vUv.x * 30.0, y * 0.9)) * 0.4;
          float lampFall = exp(-depth * 7.5);             // the lamps only reach so far
          vec3 ice = mix(vec3(0.04, 0.2, 0.36), vec3(0.6, 0.95, 1.15), layers) * rings;
          vec3 col = ice * lampFall * 1.5 + vec3(0.0, 0.02, 0.05);
          col = mix(col, vec3(0.008, 0.04, 0.09), smoothstep(0.25, 0.9, depth) * uOpen);   // dark water coming up
          gl_FragColor = vec4(col, 1.0); }`}));C.add(R);const ee=500,K=new Float32Array(ee*3);for(let ae=0;ae<ee;ae++){const _e=i(0,6.28),L=i(.5,2.1);K[ae*3]=Math.cos(_e)*L,K[ae*3+1]=i(-60,10),K[ae*3+2]=Math.sin(_e)*L}const Me=new nt;Me.setAttribute("position",new ut(K,3));const fe=new ko(Me,new At({transparent:!0,depthWrite:!1,blending:bn,uniforms:I,vertexShader:`uniform float uScroll; varying float vA; void main(){ vec3 q = position; q.y = mod(q.y + uScroll*1.6, 70.0) - 62.0;
        vA = exp(q.y * 0.07) ; vec4 mv = modelViewMatrix * vec4(q, 1.0); gl_PointSize = 60.0 / max(-mv.z, 0.5); gl_Position = projectionMatrix * mv; }`,fragmentShader:"varying float vA; void main(){ float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5)) * clamp(vA, 0.0, 1.0); gl_FragColor = vec4(vec3(0.7, 0.95, 1.0) * a, a); }"}));fe.frustumCulled=!1,C.add(fe),C.position.set(0,Ih,0),t.add(C)}const S=jn("div","ocean-ui hidden"),E=jn("div","ocean-fade"),w=jn("div","ocean-frame"),b=jn("div","ocean-depth"),P=jn("div","ocean-caption"),N=jn("div","prompt ocean-prompt hidden"),U=jn("i","p-fill");N.append(U,jn("kbd","","E"),jn("span","p-text","Hold: switch off the lamps"));const D=jn("div","ocean-label","Imagined: no life has been found on Europa. These creatures are modelled on real animals of Earth’s deep sea that make their own light."),F=jn("div","ocean-skip","Hold F to skip");S.append(w,E,b,P,N,D,F),document.body.append(S);let z="";function k(R){R!==z&&(z=R,P.classList.remove("show"),R&&setTimeout(()=>{z===R&&(P.textContent=R,P.classList.add("show"))},350))}let B="off",X=0,Y=0,ne=0,ue=0,we=!1,Q=29;const re=new A,ge=new A,ve=new St(0,0,0,"YXZ"),he=R=>{const ee=Math.min(1,Math.max(0,R));return ee*ee*(3-2*ee)},Se=R=>{Xt.uLamp.value=R;for(const ee of a)ee.intensity=30*R;l.intensity=9*R};function J(R){B=R,X=0}function ye(R=0,ee=29){Q=ee,x(R),we=!1,Y=0,ne=ue=0,Xt.uReveal.value=0,Se(1),C.visible=!0,r.visible=!1,t.background.set(0),t.fog=null,S.classList.remove("hidden","revealed","done"),document.body.classList.add("diving"),N.classList.add("hidden"),E.style.opacity=1,b.textContent="",k(""),J("fade"),e.music("descent")}function j(){B="off",S.classList.add("hidden"),document.body.classList.remove("diving"),e.music("stop")}function oe(R,ee={}){if(B!=="off"){if(X+=R,Y+=R,Xt.uTime.value=Y,!we&&B!=="reveal"&&(ue=ee.F?ue+R:0,ue>1&&(ue=0,C.visible=!1,r.visible=!0,t.background.copy(wr),t.fog=new Vs(wr.getHex(),.012),E.style.opacity=0,b.textContent="",Se(0),Xt.uReveal.value=400,ge.copy(Ht),s.position.copy(Ht),s.lookAt(hi),S.classList.add("revealed"),N.classList.add("hidden"),e.music("reveal"),J("reveal"),X=12)),B==="fade")k("Breakthrough. The submersible goes down the hole the cryobot made."),s.position.set(0,Ih+40,0),ve.set(-Math.PI/2+.02,0,0),s.quaternion.setFromEuler(ve),E.style.opacity=1-he((X-1.6)/1.4),X>3&&J("shaft");else if(B==="shaft"){const K=X/10,Me=6+70*he(K*1.6)*(1-he((K-.82)/.18)*.8);I.uScroll.value+=Me*R,I.uOpen.value=he((K-.72)/.28),s.position.set(Math.sin(Y*.9)*.12,Ih+40,Math.cos(Y*.7)*.12),ve.set(-Math.PI/2+.03*Math.sin(Y*.6),Y*.07,0),s.quaternion.setFromEuler(ve),b.textContent=`${(Q*he(K)).toFixed(1)} km down`,k(K<.45?`${Q} kilometres of ice, sped up.`:"Below the ice: an ocean with twice the water of all Earth’s seas."),E.style.opacity=he((K-.88)/.12),K>=1&&(C.visible=!1,r.visible=!0,t.background.copy(wr),t.fog=new Vs(wr.getHex(),.012),b.textContent="",e.music("ocean"),J("cruise"))}else if(B==="cruise"){const K=he(X/16);E.style.opacity=1-he(X/2.2),ge.set(Math.sin(K*2.6)*5,Kf+(Ht.y-Kf)*he(K*1.15),Ht.z*K),ge.y=Math.min(ge.y,lo(ge.x,ge.z)-2.8),s.position.copy(ge),re.set(Math.sin(K*2.6+.5)*6,ge.y+22*(1-he(K*1.7))-4*K,ge.z-60),s.lookAt(re),k(X<6?"The underside of Europa’s ice.":X<11.5?"Something is glowing ahead.":"Getting closer…"),X>=16&&J("arrive")}else B==="arrive"?(s.position.set(Ht.x+Math.sin(Y*.3)*.25,Ht.y+Math.sin(Y*.4)*.2,Ht.z),re.copy(hi),s.lookAt(re),k("The lamps are too bright to see it. Switch them off."),N.classList.remove("hidden"),ne=ee.E?ne+R:0,U.style.width=`${Math.min(1,ne/1.2)*100}%`,N.classList.toggle("holding",ne>0),(ne>=1.2||X>40)&&(N.classList.add("hidden"),e.signal("tick"),e.music("dark"),k(""),J("dark"))):B==="dark"?(Se(Math.max(0,1-X/.25)),s.position.set(Ht.x,Ht.y,Ht.z),X>1.7&&(e.music("reveal"),S.classList.add("revealed"),J("reveal"))):B==="reveal"&&(Xt.uReveal.value=Math.min(400,10+330*(1-Math.exp(-X/2.6))),s.position.set(Ht.x+Math.sin(Y*.13)*1.5,Ht.y-Math.min(X,60)*.05,Ht.z-Math.min(X,60)*.5),k(X<1.2?"":X<8?"Life.":X<16?"Look around. You are the first to see it.":""),X>22&&!we&&(we=!0,S.classList.add("done")));B!=="arrive"&&N.classList.add("hidden"),o.position.copy(s.position),o.quaternion.copy(s.quaternion),Xt.uCamPos.value.copy(s.position),s.getWorldDirection(Xt.uCamDir.value);for(const K of g)K(Y)}}return{scene:t,start:ye,stop:j,update:oe,uniforms:Xt,get finished(){return we},get phase(){return B},jump(R,ee=0){J(R),X=ee,R!=="fade"&&R!=="shaft"&&(C.visible=!1,r.visible=!0,t.background.copy(wr),t.fog=new Vs(wr.getHex(),.012),E.style.opacity=0,b.textContent=""),R==="reveal"&&(Se(0),S.classList.add("revealed"))}}}function Vw({camera:s,player:e,sim:t,places:n,isInside:i,isSpeaking:r=()=>!1}){const o=gt.plans;let a=0,l=0,c=0;const h=new A,u=new A,d=Ut.jupiterDir.clone().normalize();let f=0,p=!1,v=null;const g=[{id:"look",text:"Welcome to Europa, an ice moon of Jupiter. Move the mouse to look around.",hint:"Can you find Jupiter?",done:()=>f>1&&h.dot(d)>.975,patience:40,then:"That is Jupiter. It never moves in this sky: one side of Europa always faces it."},{id:"walk",text:"Walk with the W, A, S and D keys. Hold Shift to run.",hint:"Try a few steps, any way you like.",done:()=>a>5,patience:40,then:"You weigh very little here: gravity is only 13% of Earth’s."},{id:"jump",text:"Press Space to jump.",hint:"Jump!",done:()=>{const k=e.state().grounded;return k||(p=!0),p&&k},patience:45,then:"There is no air to push against, so you can’t steer once you are off the ground."},{id:"cryobot",text:`Under your feet is ${gt.iceKm} km of ice, and under that an ocean. Your mission: melt a hole down to it and look for life. The cryobot does the melting.`,hint:"Walk to the cryobot, the tall tripod. Then HOLD the E key to switch it on.",way:{...n.cryobot,label:"Cryobot"},allow:["start"],done:()=>t.state.started,show:["dig"],then:"It is on its way down. The panel on the right shows how deep it has got."},{id:"habitat",show:["dose"],text:"Out here Jupiter’s radiation builds up in your body. When this purple meter is full, the mission is over. So the dig has to win the race.",hint:"Walls slow the radiation down. Walk to the habitat and HOLD E to go inside.",way:{...n.door,label:"Habitat"},allow:["in"],done:()=>i(),then:"Inside, the radiation rises much more slowly."},{id:"plan",show:["heat"],text:`Outside you get cold, and in here you warm up, but the reactor can’t run everything at full. “${o.dig.name}”: fast dig, cold crew. “${o.share.name}”: some of each. “${o.warm.name}”: warm crew, but the cryobot’s hole starts to freeze.`,hint:"HOLD Q to change the power plan. Try it.",allow:["plan"],done:()=>v!==null&&t.state.plan!==v,confirm:"You can change the plan as often as you like, but only from in here."},{id:"battery",show:["battery"],text:"The battery is your spare power. Sunlight fills it and the dark drains it. Holding R spends some of it on 3 hours of full digging AND warmth. It also gets you out of trouble, so don’t waste it.",confirm:!0},{id:"start",show:["clock"],text:"Things will happen out there. Each one stops the clock and gives you choices, and every choice costs something. There is no safe choice.",hint:"The light and the arrow will show you where to go.",confirm:"start"}],m=k=>k.then||(typeof k.confirm=="string"&&k.confirm!=="start"?k.confirm:""),y={};for(const k of g)y[`train-${k.id}`]=k.hint?`${k.text} ${k.hint}`:k.text,m(k)&&(y[`train-${k.id}-done`]=m(k));let _=-1,x=!1,I=0,C=0,S=!1,E=0;const w=[];function b(k){_=k,S=!1,C=0,E=0,p=!1,a=0,{x:l,z:c}=e.state(),v=t.state.plan;for(const B of g[_].show||[])w.includes(B)||w.push(B)}function P(){x=!0,f=0,w.length=0,s.getWorldDirection(u),b(0)}function N(){x=!1,_=-1}function U(k){if(!x)return null;s.getWorldDirection(h),f+=h.angleTo(u),u.copy(h);const B=e.state();a+=Math.hypot(B.x-l,B.z-c),l=B.x,c=B.z;const X=g[_];return C>0?(C-=k,I+=k,C<=0&&r()&&I<12&&(C=.05),C<=0?D():null):(E+=k,!S&&(!X.done||X.done()||X.patience&&E>X.patience)?X.confirm?(S=!0,X.done?"next":null):X.then?(C=3.6,I=0,"next"):D():null)}function D(){return _+1>=g.length?(N(),"end"):(b(_+1),null)}function F(){return!x||!S?null:D()}function z(){return x?(N(),!0):!1}return{begin:P,update:U,confirm:F,skip:z,get active(){return x},get total(){return g.length},lines:y,get voice(){if(!x)return null;const k=g[_],B=C>0||S&&typeof k.confirm=="string"&&k.confirm!=="start";return`train-${k.id}${B?"-done":""}`},allows:k=>x&&(g[_].allow||[]).includes(k),get way(){return x&&C<=0&&g[_].way?g[_].way:null},get parts(){return x?w:null},get view(){if(!x)return null;const k=g[_];if(C>0)return{n:_+1,total:g.length,text:k.then,good:!0};const B=S||k.confirm&&!k.done,X=typeof k.confirm=="string"&&k.confirm!=="start"&&S?k.confirm:"";return{n:_+1,total:g.length,text:X||k.text,hint:B?"":k.hint,key:B?k.confirm==="start"?"Start the mission":"Carry on":""}}}}const Ym=[{id:"radiation",title:"Radiation",say:"Jupiter is beautiful, and dangerous. It wraps Europa in radiation you cannot see or feel. It builds up in your body all the time you are here, and when your dose reaches the limit, the mission is over."},{id:"plasma",title:"Plasma crossings",say:"Every few hours Europa crosses a river of plasma around Jupiter. The sky glows, and the radiation climbs faster. Now and then, a far stronger storm comes.",note:"The purple is our colouring: the real glow is ultraviolet, which eyes can’t see."},{id:"shelter",title:"Shelter",say:"Walls slow the radiation down. The thick ice of the cave stops nearly all of it. But the cave is bitterly cold."},{id:"dark",title:"Cold and dark",say:"Europa is far colder than anywhere on Earth. Once every Europa day, Jupiter hides the Sun for three hours, and the night lasts about two Earth days. In the dark you get cold, and the battery drains."},{id:"power",title:"Power",say:"The reactor cannot run everything at once. Power for the dig, or power for warmth: you choose, and you will have to keep choosing."},{id:"cryobot",title:"The cryobot",say:`The cryobot melts its way down through ${gt.iceKm} kilometres of ice. If it gets no heat, the water behind it freezes and locks it in. On the way it may meet pockets of salty water, and hard layers of salt.`},{id:"tide",title:"The tide",say:"Once every Europa day, the tide grinds this crack sideways and pulls the cryobot’s cable tight. If it pulls too far, the cable snaps."},{id:"go",title:"No safe choice",say:"Every choice here costs something. There is no safe choice. Reach the ocean before your radiation dose reaches the limit. Good luck."}],Gw=Object.fromEntries(Ym.map(s=>[`brief-${s.id}`,s.say])),Jf=1,Ww="./voice/",nu={"clock-start":"The mission clock is running. Good luck!","clock-start-skipped":"Training skipped. The mission clock is running.","plasma-open":"Plasma crossing! You have no shelter out here.",plasma:"Plasma crossing: the sky glows and radiation rises for about an hour.","storm-open":"The Purple Aurora Storm is here, and you are in the open!",storm:"The Purple Aurora Storm is here.","eclipse-start":"Jupiter is hiding the Sun: 3 hours of darkness. Everything is colder and the battery drains.","eclipse-end":"The Sun is back.",night:"The Sun has gone behind the mountain. The long night begins: colder, and no sunlight for the battery.",sunrise:"Sunrise. Warmer, and the battery is filling again.","battery-low":"Battery below the red line! Switch to “Warm first” to let the reactor refill it, or the base shuts down.",cold:"You are getting dangerously cold. Get inside, and give the habitat more heat.","dose-50":"Radiation dose: 50% of your limit.","dose-75":"Radiation dose: 75% of your limit.","dose-90":"Radiation dose: 90% of your limit.","freeze-50":"The cryobot’s hole is 50% frozen shut! It needs heat.","freeze-75":"The cryobot’s hole is 75% frozen shut! It needs heat.","cable-tight":"The cable is close to snapping! Pay out slack at the cable spool.","sample-done":"The sample of salty water is on board: a life clue. The cryobot is digging again.","camera-clear":"The camera is clear again. The cryobot is back to full speed.","crack-gone":"Radiation has destroyed the chemicals at the crack. That clue is gone.","salt-through":"The cryobot is through the salt layer.","boost-over":"The boost has run out. Back to your power plan."},Xw={"end-power":"Mission called home: out of power. The battery stayed below the red line for too long, so the base shut itself down to protect its systems. Mission Control is bringing the crew home.","end-heat":"Mission called home: too cold. The crew got too cold to carry on safely. Mission Control is bringing them home.","end-radiation":"Mission called home: radiation limit reached. Nobody is hurt: the rule is to stop before anyone is. Mission Control is bringing them home.","end-cryobot":"Mission called home: the cryobot is frozen in. It went too long without heat, and the meltwater froze solid around it.","end-cable":"Mission called home: the cable snapped. The tide ground the fault sideways and pulled the cryobot’s cable tighter and tighter until it snapped.","end-win":`Breakthrough! The cryobot melted through all ${gt.iceKm} kilometres of ice, and you were the first to see what lives in Europa’s ocean.`};function qw(s){const e=s.options.map(t=>`${t.name}: ${t.cost}`).join(" ");return`${s.title}. ${s.spoken} Your choices. ${e} ${s.where}`}function $w({audio:s,trainingLines:e}){const t={...Gw,...e,...nu,...Xw};for(const[u,d]of Object.entries(tu))t[`card-${u}`]=qw(d);const n=new Set;let i=null,r=null;function o(u){const d=new Audio(`${Ww}${u}.mp3`),f={id:u,el:d};d.volume=s.muted?0:Jf;const p=v=>{if(v&&n.add(u),i===f&&(i=null,r)){const g=r;r=null,a(g)}};d.addEventListener("ended",()=>p(!1)),d.addEventListener("error",()=>p(!0)),i=f,d.play().catch(()=>p(!1))}function a(u,d=!1){if(!(!t[u]||n.has(u))){if(i&&!d){r=u;return}l(),o(u)}}function l(u=""){if(r&&r.startsWith(u)&&(r=null),i&&i.id.startsWith(u)){const d=i.el;i=null,d.pause()}}function c(){i&&(i.el.volume=s.muted?0:Jf)}function h(){const u=[["The dangers briefing (before the game)",p=>p.startsWith("brief-")],["The training",p=>p.startsWith("train-")],["The seven situations (spoken when the card opens)",p=>p.startsWith("card-")],["Short messages during the mission",p=>p in nu],["The end of a mission",p=>p.startsWith("end-")]];let d=0,f="";for(const[p,v]of u){f+=`
## ${p}

| Save as | Say |
|---|---|
`;for(const[g,m]of Object.entries(t))v(g)&&(d+=m.length,f+=`| \`${g}.mp3\` | ${m} |
`)}return{lines:Object.keys(t).length,characters:d,table:f}}return{say:a,stop:l,update:c,script:h,lines:t,get speaking(){return!!i},get current(){return i?i.id:null},missing:n}}const Yw="./video/europa-intro.mp4",ln=(s,e,t)=>{const n=document.createElement(s);return e&&(n.className=e),t&&(n.textContent=t),n},Zw=s=>{const e=Math.min(1,Math.max(0,s));return e*e*(3-2*e)},jf=(s,e,t)=>s+(e-s)*t;function Kw({camera:s,daylight:e,sky:t,voice:n,restore:i}){const{spawn:r,habitat:o,cave:a,reactor:l,cryobot:c,cableSpool:h}=lt,u=(he,Se,J)=>new A(he,ht(he,Se)+J,Se),d=e.skyTimes.startHour,f=e.skyTimes.eclipseMidHour,p={radiation:{from:u(r.x,r.z,1.7),to:u(r.x-1,r.z-7,1.9),look:new A(r.lookAtX,r.lookAtY,r.lookAtZ),lookTo:new A(6,28,-42),hour:d,aurora:[.3,.5],meters:[["Radiation dose","dose",.04,1]]},plasma:{from:u(30,44,1.8),to:u(26,38,2.1),look:new A(-110,34,-150),lookTo:new A(-130,52,-150),hour:d,aurora:[.4,2.4],meters:[["Radiation dose","dose",.3,1]]},shelter:{from:u(6,-24,2.4),to:u(2,-27,2.6),look:new A(o.x,4,o.z),lookTo:new A(a.x,6,a.z),hour:d,aurora:[.3,.3],meters:[["Outside","dose",0,1],["In the habitat","dose",0,.42],["In the ice cave","dose",0,.1]]},dark:{from:u(r.x,r.z,1.7),to:u(r.x-2,r.z-9,1.8),look:new A(r.lookAtX,r.lookAtY+4,r.lookAtZ),lookTo:new A(6,26,-42),hour:f,aurora:[.3,.3],meters:[["Heat","heat",1,.3],["Battery","power",.8,.35]]},power:{from:u(10,-14,2),to:u(14,-19,2.6),look:new A(l.x,3.5,l.z),lookTo:new A(l.x,4,l.z),hour:d,aurora:[.3,.3],meters:[["Power for the dig","ice",.2,1],["Power for warmth","heat",1,.2]]},cryobot:{from:u(c.x-11,c.z+12,1.8),to:u(c.x-7,c.z+9,3.2),look:new A(c.x,9,c.z),lookTo:new A(c.x,5,c.z),hour:d,aurora:[.3,.3],meters:[["The dig","ice",0,.6],["Hole frozen shut","warn",0,.75]]},tide:{from:u(19,-6,2.6),to:u(21,-1,2.2),look:new A(h.x,.5,h.z-10),lookTo:new A(h.x,1.5,h.z),hour:d,aurora:[.3,.3],meters:[["Cable strain","warn",.08,.96]]},go:{from:u(r.x+2,r.z+6,2.2),to:u(r.x,r.z,1.7),look:new A(r.lookAtX,r.lookAtY,r.lookAtZ),lookTo:new A(r.lookAtX,r.lookAtY,r.lookAtZ),hour:d,aurora:[.3,.3],meters:[]}},v=Ym.map(he=>({...he,...p[he.id],seconds:2.5+he.say.length/15})),g=ln("div","prelude hidden"),m=ln("video","pre-video");m.playsInline=!0,m.preload="none";const y=ln("div","pre-brief"),_=ln("div","pre-fade"),x=ln("div","pre-head"),I=ln("div","pre-count"),C=ln("div","pre-title"),S=ln("div","pre-meters");x.append(I,C,S);const E=ln("div","pre-foot"),w=ln("div","pre-note"),b=ln("div","pre-say");E.append(w,b),y.append(x,E,_);const P=ln("button","pre-skip","Skip ›"),N=ln("div","pre-keys");g.append(m,y,P,N),document.body.appendChild(g);let U="idle",D=null,F=0,z=0,k=-1,B=[];const X=new A;function Y(he){return U!=="idle"?!1:(D=he,U="video",g.classList.remove("hidden"),g.classList.add("on-video"),N.textContent="Enter: skip",m.src=Yw,m.play().catch(()=>{U==="video"&&ne()}),!0)}m.addEventListener("ended",()=>{U==="video"&&ne()}),m.addEventListener("error",()=>{U==="video"&&ne()});function ne(){m.pause(),U="brief",g.classList.remove("on-video"),g.classList.add("on-brief"),N.textContent="Space: next · Enter: skip",ue(0)}function ue(he){F=he,z=0,k=-1;const Se=v[F];I.textContent=`${F+1} / ${v.length}`,C.textContent=Se.title,w.textContent=Se.note||"",b.textContent=Se.say,S.replaceChildren(),B=Se.meters.map(([J,ye,j,oe])=>{const R=ln("div",`pre-meter ${ye}`),ee=ln("i"),K=ln("div","pre-bar");return K.append(ee),R.append(ln("span","",J),K),S.append(R),{fill:ee,from:j,to:oe}}),_.style.opacity=1,n.say(`brief-${Se.id}`,!0),ge(0)}function we(){F+1<v.length?ue(F+1):Q()}function Q(){U==="done"||U==="idle"||(m.pause(),n.stop("brief-"),U="done",g.classList.add("hidden"),i(),D&&D())}function re(){U==="video"?ne():U==="brief"&&Q()}P.addEventListener("click",re),addEventListener("keydown",he=>{U!=="video"&&U!=="brief"||(he.code==="Enter"||he.code==="Escape"?(he.preventDefault(),re()):(he.code==="Space"||he.code==="ArrowRight")&&U==="brief"&&!he.repeat&&(he.preventDefault(),we()))});function ge(he){const Se=v[F],J=Zw(z/Se.seconds);s.position.lerpVectors(Se.from,Se.to,J),s.lookAt(X.lerpVectors(Se.look,Se.lookTo,J)),t.aurora.material.uniforms.uIntensity.value=jf(Se.aurora[0],Se.aurora[1],J);for(const ye of B)ye.fill.style.width=`${jf(ye.from,ye.to,J)*100}%`;return e.update(Se.hour,he)}function ve(he){if(U!=="brief")return!1;z+=he;const Se=v[F];((!n.missing.has(`brief-${Se.id}`)?z>1.5&&!n.speaking:z>Se.seconds)||z>45)&&k<0&&(k=0),k>=0&&(k+=he),_.style.opacity=k>=0?Math.min(1,Math.max(0,(k-.5)/.5)):Math.max(0,1-z/.6);const j=ge(he);return k>1.05&&we(),j}return{begin:Y,update:ve,skip:re,next:we,finish:Q,get active(){return U==="video"||U==="brief"},get state(){return U},get part(){return U==="brief"?v[F].id:null},jump(he,Se=0){return U==="idle"&&Y(null),U==="video"&&ne(),ue(v.findIndex(J=>J.id===he)),z=Se,ge(0)},parts:v}}const kt="real",ui="game",Ds="made",Jw={[kt]:"Real",[ui]:"Changed for the game",[Ds]:"Imagined"},co=[{title:"Europa",lines:[[kt,"Europa is a moon of Jupiter covered in ice. Scientists are almost certain an ocean lies under the ice, with about twice the water of all Earth’s oceans. NASA’s Europa Clipper, launched in 2024, is on its way to find out for sure."],[kt,`The ice is about ${gt.iceKm} km thick where NASA’s Juno spacecraft measured it.`],[kt,`One Europa day lasts ${gt.dayHours} hours. Jupiter never moves in Europa’s sky, and it looks about 24 times wider than our Moon does from Earth.`],[kt,"Gravity is 13% of Earth’s. There is no air: the sky is black even by day, shadows are sharp, and you can’t steer once you have jumped."],[kt,"Sunlight is 25 times weaker than at Earth, so solar panels give only a little power."]]},{title:"The dangers",lines:[[kt,"Jupiter’s radiation is the biggest danger on Europa. Ice and water block it, so the open surface is worst, walls help, and thick ice is the best shelter."],[kt,"NASA lets an astronaut take no more than 600 millisieverts of radiation in a whole career. Your radiation meter is modelled on that limit."],[ui,"How fast the three meters move is made up for the game. Only their order is real: what is worse and what is safer."],[kt,"About every 5.6 hours Europa passes through the thickest part of the cloud of charged particles round Jupiter. Jupiter really does hide the Sun for about 3 hours each Europa day, and the tide really does grind Europa’s cracks sideways, slowly."],[ui,"The purple glow is false colour. The real glow is ultraviolet, which eyes can’t see."],[Ds,"The “Purple Aurora Storm”. Scientists think eruptions on the moon Io may make these crossings stronger, but that is not certain."]]},{title:"The base and the dig",lines:[[Ds,"A base with people on Europa. Nobody has been there, and no such mission is planned."],[ui,`The dig is sped up enormously. A real cryobot would need about 3 years to melt through ${gt.iceKm} km.`],[ui,"Our cryobot gets its power down a cable from the reactor. Real designs carry their own nuclear heater."],[kt,"Meltwater does freeze again behind a cryobot, salt layers do slow it down, and a cable can snap when the ice shifts. NASA-funded engineers are studying all three."],[Ds,"Walls you can fill with water. Water is a real radiation shield, and melting ice really costs a lot of power, but this habitat is imagined."],[ui,"Each situation begins when the cryobot reaches a certain depth, so every mission meets all of them."],[kt,"The stories on the end screens are true: Opportunity lost power in a dust storm on Mars in 2018, and Spirit could not keep warm through the winter of 2010."]]},{title:"The landscape",lines:[[kt,"Europa’s ice is whitish, crossed by long red-brown lines of salt. Pairs of ridges with a trough between them, like our canyon, are real and a few hundred metres tall."],[kt,"We don’t drill in the canyon because it would save only about 1% of the dig, and it is a crack the tide keeps moving, which would tear the cable."],[ui,"The colours are pushed brighter, and the night is lighter than it would be, so that you can see."],[ui,"Europa has no true mountains. Ours are kept to the size of its real ridges."],[Ds,"The big ice arch near the base. Nothing like it has been seen on Europa. Spiky blades of ice may exist there, but nobody has seen them yet."],[kt,"The sounds are only the ones that would travel through your boots and suit. With no air, nothing else could be heard."]]},{title:"Life and the ocean",lines:[[kt,"No life has been found on Europa. Nobody knows yet whether anything lives there."],[kt,"The clues you can collect are things scientists really look for. Data from NASA’s Galileo spacecraft point to ammonia near Europa’s cracks."],[Ds,"Everything alive in the ocean. The creatures are modelled on real deep-sea animals on Earth that make their own light."],[ui,"Most real deep-sea light is blue or green. Our pinks, violets and oranges are for the look."],[Ds,"A submersible with people in it, and getting it down a hole that deep."],[kt,"Under water, haze and soft light are true, unlike on the surface."]]},{title:"Where the facts come from",lines:[[kt,"Ice thickness: NASA’s Juno spacecraft (NASA Jet Propulsion Laboratory)."],[kt,"Europa’s day, size and gravity: NASA’s NSSDC fact sheet and NASA’s Europa pages."],[kt,"The radiation limit: NASA’s Office of the Chief Health and Medical Officer. Radiation at Europa: NASA JPL."],[kt,"Cryobots: NASA’s research into melting probes for ocean worlds."],[kt,"Jupiter’s picture in the sky: NASA/JPL/Space Science Institute, from the Cassini spacecraft (PIA07782)."],[ui,"All of it is saved data, not live. The game’s code was written with an AI assistant, and the narrator is an AI voice."]]}],Pt=(s,e,t)=>{const n=document.createElement(s);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n};function jw(s,e=()=>{}){const t=Pt("div","real-hint");t.append(Pt("kbd","","I"),Pt("span","","What’s real?"));const n=Pt("div","real hidden"),i=Pt("div","real-card"),r=Pt("div","real-head"),o=Pt("span","real-step");r.append(Pt("span","real-tag","What’s real?"),o);const a=Pt("h2"),l=Pt("div","real-list"),c=Pt("div","real-foot"),h=Pt("button","real-nav","◀"),u=Pt("div","real-dots"),d=Pt("button","real-nav","▶"),f=Pt("div","real-keys");f.append(Pt("kbd","","A"),Pt("kbd","","D"),Pt("span","","turn the page"),Pt("kbd","","I"),Pt("span","","close"));const p=Pt("button","real-close","Close");c.append(h,u,d,f,p),i.append(r,a,l,c),n.append(i),s.append(t,n);let v=0,g=!1;function m(){const x=co[v];o.textContent=`${v+1} of ${co.length}`,a.textContent=x.title,l.replaceChildren(...x.lines.map(([I,C])=>{const S=Pt("div",`real-row is-${I}`);return S.append(Pt("b","",Jw[I]),Pt("span","",C)),S})),u.replaceChildren(...co.map((I,C)=>Pt("i",C===v?"on":""))),l.scrollTop=0}function y(x){v=(v+x+co.length)%co.length,m()}function _(x){x!==g&&(g=x,x&&m(),n.classList.toggle("hidden",!x),document.body.classList.toggle("reading",x),e(x))}return h.addEventListener("click",()=>y(-1)),d.addEventListener("click",()=>y(1)),p.addEventListener("click",()=>_(!1)),{open:()=>_(!0),close:()=>_(!1),toggle:()=>_(!g),next:()=>y(1),prev:()=>y(-1),get isOpen(){return g},get page(){return v},hint(x){t.classList.toggle("show",x)}}}const Lh=1.7,Qf=-16.5,ep={KeyE:"E",KeyQ:"Q",KeyR:"R",KeyF:"F"},Dh=["dig","share","warm"];function Qw({scene:s,camera:e,player:t,audio:n,sky:i,daylight:r}){const o=Ow({sky:r.skyTimes,sunlightAt:r.sunlightAt}),a=Bw(o),l=t.controls,c=lt.habitat,h=tn.degToRad(c.doorAngleDeg),u={x:Math.cos(h),z:Math.sin(h)},d=Math.atan2(-u.x,-u.z),f=c.radius*Math.cos(Math.PI/8),p=G=>({x:c.x+u.x*G,z:c.z+u.z*G}),v=p(c.radius+6.3),g=p(f+1.85),m=ht(c.x,c.z)+2.2+1.95,y=lt.cryobot,_=lt.cableSpool,x=lt.cave,I=kr[0],C=-24,S={x:C,z:I.slope*C+I.offset+I.wobbleAmp*Math.sin(I.wobbleFreq*C)},E=new it,w=new Ie(6160296).multiplyScalar(2.2),b=new je(new Hn(.07,.07,26,8),new cn({color:w,transparent:!0,opacity:.85}));b.position.y=13;const P=new je(new Wi(1.6,.07,6,40),new cn({color:w}));P.rotation.x=Math.PI/2,P.position.y=.12,E.add(b,P),E.position.set(S.x,ht(S.x,S.z),S.z),E.visible=!1,s&&s.add(E);const N=new je(new Hn(.09,.09,30,8),new cn({color:16777215,transparent:!0,opacity:.7,depthWrite:!1})),U=new je(new Wi(1.5,.08,6,36),new cn({color:16777215,transparent:!0,opacity:.9,depthWrite:!1}));U.rotation.x=Math.PI/2;const D=new it;N.position.y=15,U.position.y=.15,D.add(N,U),D.visible=!1,s&&s.add(D);const F=new Ie(16765514).multiplyScalar(2.2),z=new Ie(7331071).multiplyScalar(1.8);let k=!1,B=!1,X=!1,Y=null,ne=null,ue=!1,we=0,Q=.5,re=0;const ge=new St(0,0,0,"YXZ");function ve(){if(k)return"habitat";const G=t.state();return Math.hypot(G.x-x.x,G.z-x.z)<x.radius-1?"cave":"outside"}const he=(G,Ce)=>{const Ge=t.state();return Math.hypot(Ge.x-G.x,Ge.z-G.z)<Ce};function Se(G){k=!0,e.position.set(g.x,m,g.z),e.lookAt(g.x+u.x*30,m-3.5,g.z+u.z*30),G||n.signal("hatch")}function J(){k=!1;const G=p(c.radius+6.6);e.position.set(G.x,ht(G.x,G.z)+Lh,G.z),e.lookAt(G.x+u.x*30,ht(G.x,G.z)+Lh,G.z+u.z*30),n.signal("hatch")}function ye(){k=!1;const{spawn:G}=lt;e.position.set(G.x,ht(G.x,G.z)+Lh,G.z),e.lookAt(G.lookAtX,G.lookAtY,G.lookAtZ)}function j(){ge.setFromQuaternion(e.quaternion);let G=ge.y-d;G=Math.atan2(Math.sin(G),Math.cos(G)),ge.y=d+tn.clamp(G,-.95,.95),ge.x=tn.clamp(ge.x,-.55,.5),ge.z=0,e.quaternion.setFromEuler(ge),e.position.set(g.x,m,g.z)}let oe=null;const R=Vw({camera:e,player:t,sim:o,places:{cryobot:y,door:v},isInside:()=>k,isSpeaking:()=>!!oe&&oe.speaking});oe=$w({audio:n,trainingLines:R.lines});const ee=(G,Ce,Ge)=>{a.say(nu[G],Ce,Ge),oe.say(G)};let K=null;const Me=Kw({camera:e,daylight:r,sky:i,voice:oe,restore:()=>ye()});let fe=!1;const ae=jw(a.root);addEventListener("keydown",G=>{if(!G.repeat&&!(ue&&!ne.finished)){if(G.code==="KeyI"&&B&&!Me.active&&(l.isLocked||ae.isOpen||o.state.ended)){ae.toggle();return}ae.isOpen&&(G.code==="KeyD"||G.code==="ArrowRight"?ae.next():(G.code==="KeyA"||G.code==="ArrowLeft")&&ae.prev())}});function _e(){const G=o.state,Ce=Ge=>G.hour-(G[Ge].since||0)<5;return G.started?G.brine.stage==="open"?{...y,label:"Cryobot: salty water"}:G.tide.stage==="open"&&(o.tideNow()||G.strain>.02||o.tideIn()<1.5)?{..._,label:`Cable spool: strain ${Math.round(G.strain*100)}%`}:G.salt.stage==="open"&&!G.salt.jets&&Ce("salt")?{...y,label:"Cryobot: salt layer"}:G.sensor.stage==="open"&&Ce("sensor")?{...y,label:"Cryobot: clouded camera"}:G.crack.stage==="open"?{...S,label:"Ocean chemicals",own:!0}:G.tide.stage==="open"?{..._,label:"Cable spool"}:null:{...y,label:"Cryobot: switch it on"}}const L=new A,T=new A,q=new A;function ie(){const G=B?R.active?R.way:Y||ue||o.state.ended?null:_e():null;if(D.visible=!!G&&!G.own,!G)return null;const Ce=ht(G.x,G.z);D.position.set(G.x,Ce,G.z);const Ge=R.active?F:z;N.material.color.copy(Ge),U.material.color.copy(Ge),N.material.opacity=.5+.2*Math.sin(re*3);const Pe=Math.hypot(G.x-e.position.x,G.z-e.position.z);L.set(G.x,Ce+4.5,G.z),T.copy(L).sub(e.position),e.getWorldDirection(q);const dt=T.dot(q)>0;L.project(e);const Et={label:G.label,dist:Pe,train:R.active};return dt&&Math.abs(L.x)<.9&&Math.abs(L.y)<.86?(Et.x=(L.x*.5+.5)*innerWidth,Et.y=(-L.y*.5+.5)*innerHeight):Et.side=q.x*T.z-q.z*T.x>0?"right":"left",Et}const ce=G=>o.state.battery-G<gt.battery.redLine?" · DROPS BELOW THE RED LINE":"";function te(){const G=o.state,Ce=[],Ge=(Pe,dt,Et)=>a.say(Pe,dt,Et);if(k){Ce.push({id:"out",key:"E",label:"step outside",hold:.9,run:J});const Pe=Dh[(Dh.indexOf(G.plan)+1)%Dh.length],dt=gt.plans,Et={dig:"fastest dig, the crew gets cold",share:"half-speed dig, some warmth",warm:"the crew warms, the cryobot’s hole freezes"};if(Ce.push({id:"plan",key:"Q",label:`power plan: ${dt[G.plan].name} → ${dt[Pe].name} (${Et[Pe]})`,hold:.7,next:Pe,why:Et[Pe],run:()=>{o.setPlan(Pe),n.signal("tick"),R.active||Ge(`Power plan: ${dt[Pe].name}. ${Et[Pe][0].toUpperCase()}${Et[Pe].slice(1)}.`,"info",6)}}),!o.boosted()){const sn=gt.battery;Ce.push({id:"boost",key:"R",label:`boost: ${sn.boostHours} hours of full digging AND warmth (−${sn.boost}% battery${ce(sn.boost)})`,hold:1,run:()=>{o.boost(),n.signal("done"),Ge(`Boost: for ${sn.boostHours} hours the battery runs both the cryobot and the heaters at full.`,"good",7)}})}if(G.storm.stage==="open"&&!G.storm.walls){const sn=gt.storm.wallsBattery;Ce.push({id:"walls",key:"F",label:`fill the walls with water against the storm (−${sn}% battery${ce(sn)})`,hold:1.2,run:()=>{o.choose("storm","walls"),n.signal("done"),Ge("Ice is melting into the walls. Water will block most of the storm in here.","good",8)}})}return Ce}if(he(v,3.4))Ce.push({id:"in",key:"E",label:"go inside the habitat",hold:.9,run:()=>Se()});else if(he(y,7))if(!G.started)Ce.push({id:"start",key:"E",label:"start the cryobot",hold:1.4,run:()=>{o.start(),n.signal("done"),R.active||Ge("The dig has begun. A real cryobot would need about 3 years: ours is sped up.","good",8)}});else if(G.brine.stage==="open"){const Pe=gt.brine;Ce.push({key:"E",label:`take a sample (the dig stops ${Pe.sampleHours} hours, the hole freezes partly)`,hold:1.2,run:()=>{o.choose("brine","sample"),n.signal("done"),Ge(`Taking a sample: it could hold signs of life. The dig stands still for ${Pe.sampleHours} hours.`,"good",8)}}),Ce.push({key:"Q",label:`steer round it (−${Pe.detourBattery}% battery${ce(Pe.detourBattery)}, no sample)`,hold:1.2,run:()=>{o.choose("brine","detour"),n.signal("tick"),Ge("The cryobot steered round the pocket on battery power and is digging again. No sample.","info",8)}})}else{if(G.salt.stage==="open"&&!G.salt.jets){const Pe=gt.salt.jetsBattery;Ce.push({key:"E",label:`cutting jets through the salt (−${Pe}% battery${ce(Pe)})`,hold:1.2,run:()=>{o.choose("salt","jets"),n.signal("done"),Ge("The jets are cutting through the salt at full speed.","good",7)}})}if(G.sensor.stage==="open"){const Pe=gt.sensor;Ce.push({key:"Q",label:`bake the camera clear (habitat heaters off for ${Pe.bakeHours} hours)`,hold:1.2,run:()=>{o.choose("sensor","bake"),n.signal("done"),Ge(`The habitat’s heaters are baking the camera clear. For ${Pe.bakeHours} hours it will be cold in there.`,"info",8)}})}}else G.tide.stage==="open"&&he(_,6)?(G.strain>=.03&&Ce.push({key:"E",label:`pay out slack (cable strain ${Math.round(G.strain*100)}%)`,hold:1,run:()=>{o.choose("tide","slack"),n.signal("tick")}}),Ce.push({key:"Q",label:"lock the spool (cable can’t snap, dig a third slower for good)",hold:1.6,run:()=>{o.choose("tide","brake"),n.signal("done"),Ge("The spool is locked. The cable will stretch instead of snapping, and carry less power from now on.","info",8)}})):G.crack.stage==="open"&&he(S,4)&&Ce.push({key:"E",label:"collect the ocean chemicals",hold:1.5,run:()=>{o.choose("crack","collect"),n.signal("done"),Ge("Collected: a life clue. Scientists will search it for signs of what lives in the ocean.","good",8)}});return Ce}const Te=new Set,xe={E:0,Q:0,R:0,F:0},Ae={E:!1,Q:!1,R:!1,F:!1};addEventListener("keydown",G=>{const Ce=ep[G.code];if(Ce){if(Ce==="F"&&ae.isOpen&&!G.repeat){ae.close(),Ae.F=!0;return}if(!ae.isOpen){if(Ce==="F"&&Y&&!ue&&!G.repeat){Xe(),Ae.F=!0;return}if(Ce==="F"&&R.active&&!G.repeat){Je(R.confirm()),Ae.F=!0;return}Te.add(Ce)}}}),addEventListener("keydown",G=>{G.code==="KeyT"&&R.active&&l.isLocked&&!G.repeat&&(R.skip(),Je("end"))});function Je(G){G==="next"&&n.signal("done"),(G==="end"||!R.active&&!fe)&&(fe=!0,n.signal("done"),rt(),oe.stop("train-"),ee(o.state.started?"clock-start":"clock-start-skipped","good",6))}addEventListener("keyup",G=>{const Ce=ep[G.code];Ce&&(Te.delete(Ce),Ae[Ce]=!1,xe[Ce]=0)}),addEventListener("blur",()=>Te.clear());function me(G,Ce){const Ge=[];for(const Pe of Ce){if(Te.has(Pe.key)&&!Ae[Pe.key]){if(xe[Pe.key]+=G,xe[Pe.key]>=Pe.hold)return xe[Pe.key]=0,Ae[Pe.key]=!0,Pe.run(),[]}else xe[Pe.key]=0;Ge.push({id:Pe.id,key:Pe.key,label:Pe.label,progress:xe[Pe.key]/Pe.hold,next:Pe.next,why:Pe.why})}for(const Pe of Object.keys(xe))Ce.some(dt=>dt.key===Pe)||(xe[Pe]=0);return Ge}function Ne(G){Y=G;const Ce=tu[G];a.showCard({title:Ce.title,story:Ce.story(o),real:Ce.real,where:Ce.where,options:Ce.options}),oe.say(`card-${G}`,!0),n.signal(G==="crack"?"done":"alarm")}function Xe(){Y=null,a.hideCard(),oe.stop("card-")}const Le={plasma:0,eclipse:0,sun:1,low:!1,cold:!1,dose:0,km:0,tight:!1,freeze:0,brine:"ahead",sensor:"ahead",crack:"ahead",salt:"ahead",boosted:!1,storm:!1};function ke(){const G=o.state,Ce=o.plasma(),Ge=o.eclipse(),Pe=o.sunlight(),dt=G.zone==="outside";Ce>.25&&Le.plasma<=.25&&!o.inStorm()&&(dt?(ee("plasma-open","plasma"),n.signal("alarm")):ee("plasma","plasma",4)),Le.plasma=Ce;const Et=o.inStorm()&&Ce>.5;Et&&!Le.storm&&(ee(dt?"storm-open":"storm","warn",8),n.signal("alarm")),Le.storm=Et,Ge>.5&&Le.eclipse<=.5?ee("eclipse-start","warn",8):Ge<.5&&Le.eclipse>=.5?ee("eclipse-end","good"):Ge<.05&&Pe<.5&&Le.sun>=.5?ee("night","warn",9):Ge<.05&&Pe>.5&&Le.sun<=.5&&ee("sunrise","good"),Le.eclipse=Ge,Le.sun=Pe;const sn=G.battery<gt.battery.redLine;sn&&!Le.low&&(ee("battery-low","warn",10),n.signal("alarm")),Le.low=sn;const ai=G.warmth<gt.heat.warnAt;ai&&!Le.cold&&(ee("cold","warn",8),n.signal("alarm")),Le.cold=ai;for(const Ti of[50,75,90])G.dose>=Ti&&Le.dose<Ti&&ee(`dose-${Ti}`,Ti>=75?"warn":"plasma");Le.dose=G.dose;const rn=G.refreeze>=.75?75:G.refreeze>=.5?50:0;rn>Le.freeze&&(ee(`freeze-${rn}`,"warn",8),n.signal("alarm")),Le.freeze=rn;const Yi=G.strain>.7;Yi&&!Le.tight&&(ee("cable-tight","warn",8),n.signal("alarm")),Le.tight=Yi,G.brine.stage==="done"&&Le.brine==="sampling"&&ee("sample-done","good",8),Le.brine=G.brine.stage,G.sensor.stage==="done"&&Le.sensor==="baking"&&ee("camera-clear","good",7),Le.sensor=G.sensor.stage,G.crack.stage==="done"&&Le.crack==="open"&&o.state.cluesMissed>0&&G.hour>=G.crack.until&&ee("crack-gone","info",7),Le.crack=G.crack.stage,G.salt.stage==="done"&&Le.salt==="open"&&ee("salt-through","good",6),Le.salt=G.salt.stage,!o.boosted()&&Le.boosted&&ee("boost-over","info",6),Le.boosted=o.boosted();const li=Math.floor(G.depthKm/5)*5;li>Le.km&&li<gt.iceKm&&a.say(`The cryobot is ${li} km down.`,"good"),Le.km=li}function rt(){const G=o.state;Object.assign(Le,{plasma:o.plasma(),eclipse:o.eclipse(),sun:o.sunlight(),low:!1,cold:!1,dose:G.dose,km:Math.floor(G.depthKm/5)*5,tight:!1,freeze:0,brine:G.brine.stage,sensor:G.sensor.stage,crack:G.crack.stage,salt:G.salt.stage,boosted:o.boosted(),storm:!1})}function Qe(){const G=o.state.ended;Xe(),n.signal(G.type==="breakthrough"?"done":"alarm"),oe.say(G.type==="breakthrough"?"end-win":`end-${G.cause}`,!0),a.showEnd(G,{onReal:()=>ae.open(),retryLabel:o.lastCheckpoint,onRetry:()=>{o.retry().startsWith("the start of the mission")?ye():Se(!0),Z()},onRestart:()=>{o.reset(),ye(),Z()}}),l.isLocked&&l.unlock()}function bt(){ne||(ne=Hw({camera:e,audio:n})),ue=!0,Xe(),oe.stop(),a.root.classList.add("cine"),ne.start(o.state.clues,gt.iceKm)}function Z(){X=!1,ue&&(ue=!1,ne.stop(),a.root.classList.remove("cine")),we=o.state.started?Qf:0,rt(),Xe(),ae.close(),oe.stop(),a.hideEnd(),l.lock()}l.addEventListener("lock",()=>{!B&&!fe&&R.begin(),B=!0,a.show(!0)});function Fe(){if(!o.state.started)return["Walk to the cryobot, the tall tripod, and switch it on."];const Ce=o.openSituations().slice(0,3).map(Ge=>tu[Ge].status(o));return Ce.length?Ce:[`Melt through ${gt.iceKm} km of ice before your radiation dose reaches the limit.`]}let le=1,be=!1;function Be(G){const Ce=o.state;if(oe.update(),Me.active)return Me.update(G);if(ue)return(l.isLocked||ne.finished)&&ne.update(G,{E:Te.has("E"),F:Te.has("F")}),ne.finished&&!be&&(be=!0,Qe()),a.update(G,{actions:[],tracker:[]}),!1;be=!1;const Ge=B&&l.isLocked&&!Ce.ended;let Pe=[];if(Ge&&R.active)k&&j(),o.state.zone=ve(),Je(R.update(G)),R.voice!==K&&(K=R.voice,K&&oe.say(K,!0)),Pe=me(G,te().filter(dt=>R.allows(dt.id)));else if(Ge&&ae.isOpen)k&&j();else if(Ge&&!Y){k&&j(),o.step(G*le/gt.hourSeconds,ve()),ke();const dt=o.nextCard();dt&&!Ce.ended?Ne(dt):Pe=me(G,te())}else Ge&&k&&j();return Ce.ended&&!X&&(X=!0,Ce.ended.type==="breakthrough"?bt():Qe()),Oe(G,Pe)}function Oe(G=0,Ce=[]){const Ge=o.state;re+=G;const Pe=r.update(o.hourOfDay(),G),dt=i.aurora.material.uniforms.uIntensity;dt.value+=(.3+1.9*o.plasma()-dt.value)*Math.min(1,G*3+(G===0?1:0));const Et=o.digSpeed(),sn=Ge.started?.18+2.2*Et:.5;Q+=(sn-Q)*Math.min(1,G*2+(G===0?1:0));const ai=Et>0?1+.07*Math.sin(re*9)+.04*Math.sin(re*23):1;as.uPower.value=Q*ai,as.glow&&(as.glow.intensity=30*Q*ai);const rn=Ge.started?Qf:0;return G===0?we=rn:we+=Math.sign(rn-we)*Math.min(Math.abs(rn-we),G*1.5),as.probe&&(as.probe.position.y=we),E.visible=Ge.crack.stage==="open",E.visible&&(b.material.opacity=.65+.25*Math.sin(re*3)),ae.hint(B&&!Ge.ended&&!Y&&!ae.isOpen),a.update(G,{actions:Ce,tracker:R.active?[]:Fe(),way:k?null:ie(),training:R.view,parts:R.parts}),k&&(D.visible=!1),Pe}return{sim:o,hud:a,update:Be,refresh:Oe,crack:S,training:R,voice:oe,prelude:Me,real:ae,get inside(){return k},get frozen(){return k||!!Y||ue||ae.isOpen},get dive(){return ue?ne:null},startDive(G){return R.active&&R.skip(),fe=!0,G!==void 0&&(o.state.clues=G),B=!0,a.show(!0),X=!0,o.state.ended=o.state.ended||{type:"breakthrough",hour:o.state.hour,depthKm:gt.iceKm},bt(),ne},get card(){return Y},set timeScale(G){le=G},get timeScale(){return le},skip(G,Ce){R.active&&(R.skip(),fe=!0);const Ge=.05;for(let Pe=0;Pe<G&&!o.state.ended;Pe+=Ge)o.step(Ge,Ce||ve());return B=!0,a.show(!0),o.state.ended&&!X&&(X=!0,Qe()),Oe(0)},act(G){const Ce=te().find(Ge=>Ge.key===G);return Ce&&Ce.run(),Oe(0),Ce?Ce.label:null},actions:()=>te().map(G=>`${G.key}: ${G.label}`),openCard:Ne,closeCard:Xe,enterHabitat:Se,leaveHabitat:J,toSpawn:ye}}const ed=Math.min(devicePixelRatio,1.5),tp=Math.min(devicePixelRatio,.75);let Qn=ed;const Gt=new nm({antialias:!1,powerPreference:"high-performance"});Gt.setPixelRatio(Qn);Gt.setSize(innerWidth,innerHeight);Gt.toneMapping=ec;Gt.toneMappingExposure=1;Gt.shadowMap.enabled=!0;Gt.shadowMap.type=ou;Gt.shadowMap.autoUpdate=!1;document.getElementById("app").appendChild(Gt.domElement);const oi=new mc;oi.background=new Ie(0);const qn=new en(60,innerWidth/innerHeight,.1,12e3),$t=new Ic(16774890,2.9);$t.castShadow=!0;$t.shadow.mapSize.set(4096,4096);const ia=120,nl=24,qr=$t.shadow.camera;qr.left=-ia;qr.right=ia;qr.top=ia;qr.bottom=-ia;qr.near=10;qr.far=1200;$t.shadow.bias=-4e-4;$t.shadow.normalBias=.5;oi.add($t,$t.target);let np=1/0,ip=1/0;const Eo=Ut.sunDir.clone(),il=new A,Uh=new A,eS=new A(0,1,0);function Zm(s=!1){const e=Math.round(qn.position.x/nl)*nl,t=Math.round(qn.position.z/nl)*nl;if(!s&&e===np&&t===ip)return;np=e,ip=t;const n=2*ia/$t.shadow.mapSize.x;il.crossVectors(eS,Eo).normalize(),Uh.crossVectors(Eo,il);const i=$t.target.position.set(e,0,t),r=i.dot(il),o=i.dot(Uh);i.addScaledVector(il,Math.round(r/n)*n-r).addScaledVector(Uh,Math.round(o/n)*n-o),$t.position.copy(Eo).multiplyScalar(400).add($t.target.position),$t.target.updateMatrixWorld(),Gt.shadowMap.needsUpdate=!0}const td=new Ic(16765600,.3);td.position.copy(Ut.jupiterDir).multiplyScalar(400);oi.add(td);const Km=new Pc(6981320,13623551,.5);oi.add(Km);oi.add(fM());FM(oi);const Or=pM();oi.add(Or.group);const nd=vw(),ls=gw(qn,Gt.domElement,nd),{composer:id,bloom:Rr,setSize:tS}=Pw(Gt,oi,qn),nS=id.passes[0],Nh={strength:Rr.strength,radius:Rr.radius,threshold:Rr.threshold},Jm=Iw(ls.controls),Jl=Nw({sun:$t,jupiterShine:td,hemi:Km,sky:Or}),zn=Qw({scene:oi,camera:qn,player:ls,audio:nd,sky:Or,daylight:Jl});Jm.before(s=>zn.prelude.begin(s));const jm=.92;let Wo=!1,kh=0;function jl(){if(!Wo)return Qn;const s=jm*Math.min(innerWidth,innerHeight),e=Math.sqrt(innerWidth*innerHeight/(s*s));return Math.min(ed,Qn*Math.min(1.6,Math.max(1,e*.9)))}function Qm(){const s=jl();qn.aspect=innerWidth/innerHeight,qn.updateProjectionMatrix(),Gt.setPixelRatio(s),Gt.setSize(innerWidth,innerHeight),tS(innerWidth,innerHeight,s,Wo?jm:0)}function e0(s){const e=zn.hud.root.classList;kh=zn.inside&&!zn.dive&&e.contains("inside")&&!e.contains("hidden")?kh+s:0;const n=kh>.6;n!==Wo&&(Wo=n,Qm())}let iu=!1;addEventListener("resize",()=>{iu=!0});const On={frames:0,time:0,fps:60,drawCalls:0,triangles:0};Gt.info.autoReset=!1;let go=0,vo=0,sl=ed,ho=0,uo=!1;function iS(s){if(s>.25||(On.frames++,On.time+=s,On.time<1.5))return;On.fps=On.frames/On.time,On.frames=0,On.time=0;let e=Qn;On.fps<42?(uo&&(sl=Math.max(tp,Qn*.9)),e=Math.max(tp,Math.min(sl,Qn*.85)),ho=0,uo=!1):On.fps>57?(ho++,uo=!1,ho>=8&&Qn<sl-.01&&(e=Math.min(sl,Qn*1.1),ho=0,uo=!0)):(ho=0,uo=!1),Math.abs(e-Qn)>.01&&(go=e),Qn<.8&&$t.shadow.mapSize.x>2048&&(vo=2048)}function sS(){(go||iu)&&(go&&(Qn=go),go=0,iu=!1,Qm()),vo&&($t.shadow.mapSize.set(vo,vo),vo=0,$t.shadow.map&&($t.shadow.map.dispose(),$t.shadow.map=null),Gt.shadowMap.needsUpdate=!0)}function t0(){const s=zn.dive;nS.scene=s?s.scene:oi,Rr.strength=s?.95:Nh.strength,Rr.radius=s?.75:Nh.radius,Rr.threshold=s?.5:Nh.threshold}const rS=new Dc;let su=0,sp=!1;Gt.setAnimationLoop(()=>{const s=rS.getDelta(),e=Math.min(s,.05);su+=e,sS(),zn.frozen||ls.update(e);const t=zn.update(e);e0(e),t0(),zn.dive||(Eo.copy(Jl.lightDir),Or.update(qn,su,jl()),Zm(t)),Jm.update(e),Gt.info.reset(),id.render(),On.drawCalls=Gt.info.render.calls,On.triangles=Gt.info.render.triangles,iS(s),sp||(sp=!0,document.body.classList.remove("loading"))});window.__game={THREE:cM,scene:oi,camera:qn,renderer:Gt,sky:Or,heightAt:ht,perf:On,sun:$t,SKY:Ut,game:zn,daylight:Jl,blocked:(s,e,t,n)=>ls.blocked(s,e,t,n),walk(s,e,t=1/60){let n=!0;for(let i=0;i<e;i+=t)ls.update(t,{...s,jump:n&&s.jump}),n=!1;return ls.state()},get player(){return ls.state()},controls:ls.controls,audio:nd,frame(s=!0){e0(1),t0(),zn.dive||(zn.prelude.active?zn.prelude.update(0):zn.refresh(0),Eo.copy(Jl.lightDir),Or.update(qn,su,jl()),Zm(s)),id.render()},get pixelRatio(){return jl()},get windowOnly(){return Wo},view(s,e,t,n,i,r=1.7){qn.position.set(s,ht(s,e)+r,e),qn.lookAt(t,n,i)}};
