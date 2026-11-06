var xo="160";var Fc=1,EA=2,fi=3,Ii=0,he=1;var Qc=0;var Zi=100;var yo=204,wo=205;var Hc=0,Eu=1,bu=2,Ci=0,Bu=1,Su=2,Cu=3,Tu=4,Iu=5,Ru=6;var Gc=300,kn=301,Vn=302,Do=303,_o=304,ta=306,Eo=1e3,gi=1001,bo=1002,Ae=1003,ul=1004;var Oa=1005;var me=1006,Lu=1007;var Bs=1008;var mi=1009;var bA=1012,kc=1013,ii=1014,Si=1015,Ri=1016,Vc=1017,Xc=1018,nn=1020;var Se=1023;var rn=1026,Xn=1027,Wc=1028,Yc=1029;var qc=1031,jc=1033,Fa=33776,Qa=33777,Ha=33778,Ga=33779,pl=35840,dl=35841,fl=35842,gl=35843,Jc=36196,ml=37492,vl=37496,Ml=37808,Pl=37809,xl=37810,yl=37811,wl=37812,Dl=37813,_l=37814,El=37815,bl=37816,Bl=37817,Sl=37818,Cl=37819,Tl=37820,Il=37821,ka=36492,Rl=36494,Ll=36495;var zl=36284,Ul=36285,Nl=36286;var Ss=2300,Cs=2301,Va=2302,Ol=2400,Fl=2401,Ql=2402;var Kc=3e3,sn=3001;var ei="",Zt="srgb",vi="srgb-linear",BA="display-p3",ea="display-p3-linear",Ts="linear",Vt="srgb",Is="rec709",Rs="p3";var wn=7680;var Hl=35044,Ke=35048;var Gl="300 es",Bo=1035,Wn=2e3,Ls=2001,Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let n=i.indexOf(e);n!==-1&&i.splice(n,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let e=this._listeners[t.type];if(e!==void 0){t.target=this;let i=e.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,t);t.target=null}}},fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bs=Math.PI/180,So=180/Math.PI;function tr(){let r=4294967295*Math.random()|0,t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(fe[255&r]+fe[r>>8&255]+fe[r>>16&255]+fe[r>>24&255]+"-"+fe[255&t]+fe[t>>8&255]+"-"+fe[t>>16&15|64]+fe[t>>24&255]+"-"+fe[63&e|128]+fe[e>>8&255]+"-"+fe[e>>16&255]+fe[e>>24&255]+fe[255&i]+fe[i>>8&255]+fe[i>>16&255]+fe[i>>24&255]).toLowerCase()}function le(r,t,e){return Math.max(t,Math.min(e,r))}function zu(r,t){return(r%t+t)%t}function Xa(r,t,e){return(1-e)*r+e*t}function kl(r){return(r&r-1)==0&&r!==0}function Co(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function De(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var st=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},St=class r{constructor(t,e,i,n,s,a,o,l,A){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,A)}set(t,e,i,n,s,a,o,l,A){let c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=A,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],A=i[1],c=i[4],h=i[7],u=i[2],p=i[5],d=i[8],M=n[0],f=n[3],g=n[6],m=n[1],v=n[4],P=n[7],y=n[2],x=n[5],w=n[8];return s[0]=a*M+o*m+l*y,s[3]=a*f+o*v+l*x,s[6]=a*g+o*P+l*w,s[1]=A*M+c*m+h*y,s[4]=A*f+c*v+h*x,s[7]=A*g+c*P+h*w,s[2]=u*M+p*m+d*y,s[5]=u*f+p*v+d*x,s[8]=u*g+p*P+d*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],A=t[7],c=t[8];return e*a*c-e*o*A-i*s*c+i*o*l+n*s*A-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],A=t[7],c=t[8],h=c*a-o*A,u=o*l-c*s,p=A*s-a*l,d=e*h+i*u+n*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/d;return t[0]=h*M,t[1]=(n*A-c*i)*M,t[2]=(o*i-n*a)*M,t[3]=u*M,t[4]=(c*e-n*l)*M,t[5]=(n*s-o*e)*M,t[6]=p*M,t[7]=(i*l-A*e)*M,t[8]=(a*e-i*s)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),A=Math.sin(s);return this.set(i*l,i*A,-i*(l*a+A*o)+a+t,-n*A,n*l,-n*(-A*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new St;function Zc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function zs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Uu(){let r=zs("canvas");return r.style.display="block",r}var Vl={};function Mr(r){r in Vl||(Vl[r]=!0,console.warn(r))}var Xl=new St().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wl=new St().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[vi]:{transfer:Ts,primaries:Is,toReference:r=>r,fromReference:r=>r},[Zt]:{transfer:Vt,primaries:Is,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ea]:{transfer:Ts,primaries:Rs,toReference:r=>r.applyMatrix3(Wl),fromReference:r=>r.applyMatrix3(Xl)},[BA]:{transfer:Vt,primaries:Rs,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Wl),fromReference:r=>r.applyMatrix3(Xl).convertLinearToSRGB()}},Nu=new Set([vi,ea]),Ht={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Nu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=jr[t].toReference;return(0,jr[e].fromReference)(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return jr[r].primaries},getTransfer:function(r){return r===ei?Ts:jr[r].transfer}};function Hn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Ya(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Dn,Us=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Dn===void 0&&(Dn=zs("canvas")),Dn.width=t.width,Dn.height=t.height;let i=Dn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Dn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Hn(s[a]/255);return i.putImageData(n,0,0),e}if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(255*Hn(e[i]/255)):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ou=0,Ns=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=tr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(qa(n[a].image)):s.push(qa(n[a]))}else s=qa(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Us.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fu=0,Ne=class r extends Li{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,A=r.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=tr(),this.name="",this.source=new Ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=A,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===sn?Zt:ei),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Eo:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case Eo:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Zt?sn:Kc}set encoding(t){Mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===sn?Zt:ei}};Ne.DEFAULT_IMAGE=null,Ne.DEFAULT_MAPPING=Gc,Ne.DEFAULT_ANISOTROPY=1;var Gt=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,A=l[0],c=l[4],h=l[8],u=l[1],p=l[5],d=l[9],M=l[2],f=l[6],g=l[10];if(Math.abs(c-u)<.01&&Math.abs(h-M)<.01&&Math.abs(d-f)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+M)<.1&&Math.abs(d+f)<.1&&Math.abs(A+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(A+1)/2,P=(p+1)/2,y=(g+1)/2,x=(c+u)/4,w=(h+M)/4,I=(d+f)/4;return v>P&&v>y?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=x/i,s=w/i):P>y?P<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(P),i=x/n,s=I/n):y<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(y),i=w/s,n=I/s),this.set(i,n,s,e),this}let m=Math.sqrt((f-d)*(f-d)+(h-M)*(h-M)+(u-c)*(u-c));return Math.abs(m)<.001&&(m=1),this.x=(f-d)/m,this.y=(h-M)/m,this.z=(u-c)/m,this.w=Math.acos((A+p+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},To=class extends Li{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Gt(0,0,t,e),this.scissorTest=!1,this.viewport=new Gt(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(Mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===sn?Zt:ei),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:me,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ne(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){this.width===t&&this.height===e&&this.depth===i||(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ns(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ue=class extends To{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Os=class extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Io=class extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $t=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],A=i[n+1],c=i[n+2],h=i[n+3],u=s[a+0],p=s[a+1],d=s[a+2],M=s[a+3];if(o===0)return t[e+0]=l,t[e+1]=A,t[e+2]=c,void(t[e+3]=h);if(o===1)return t[e+0]=u,t[e+1]=p,t[e+2]=d,void(t[e+3]=M);if(h!==M||l!==u||A!==p||c!==d){let f=1-o,g=l*u+A*p+c*d+h*M,m=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let y=Math.sqrt(v),x=Math.atan2(y,g*m);f=Math.sin(f*x)/y,o=Math.sin(o*x)/y}let P=o*m;if(l=l*f+u*P,A=A*f+p*P,c=c*f+d*P,h=h*f+M*P,f===1-o){let y=1/Math.sqrt(l*l+A*A+c*c+h*h);l*=y,A*=y,c*=y,h*=y}}t[e]=l,t[e+1]=A,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],A=i[n+2],c=i[n+3],h=s[a],u=s[a+1],p=s[a+2],d=s[a+3];return t[e]=o*d+c*h+l*p-A*u,t[e+1]=l*d+c*u+A*h-o*p,t[e+2]=A*d+c*p+o*u-l*h,t[e+3]=c*d-o*h-l*u-A*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,A=o(i/2),c=o(n/2),h=o(s/2),u=l(i/2),p=l(n/2),d=l(s/2);switch(a){case"XYZ":this._x=u*c*h+A*p*d,this._y=A*p*h-u*c*d,this._z=A*c*d+u*p*h,this._w=A*c*h-u*p*d;break;case"YXZ":this._x=u*c*h+A*p*d,this._y=A*p*h-u*c*d,this._z=A*c*d-u*p*h,this._w=A*c*h+u*p*d;break;case"ZXY":this._x=u*c*h-A*p*d,this._y=A*p*h+u*c*d,this._z=A*c*d+u*p*h,this._w=A*c*h-u*p*d;break;case"ZYX":this._x=u*c*h-A*p*d,this._y=A*p*h+u*c*d,this._z=A*c*d-u*p*h,this._w=A*c*h+u*p*d;break;case"YZX":this._x=u*c*h+A*p*d,this._y=A*p*h+u*c*d,this._z=A*c*d-u*p*h,this._w=A*c*h-u*p*d;break;case"XZY":this._x=u*c*h-A*p*d,this._y=A*p*h-u*c*d,this._z=A*c*d+u*p*h,this._w=A*c*h+u*p*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],A=e[2],c=e[6],h=e[10],u=i+o+h;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-A)*p,this._z=(a-n)*p}else if(i>o&&i>h){let p=2*Math.sqrt(1+i-o-h);this._w=(c-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+A)/p}else if(o>h){let p=2*Math.sqrt(1+o-i-h);this._w=(s-A)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+h-i-o);this._w=(a-n)/p,this._x=(s+A)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,A=e._z,c=e._w;return this._x=i*c+a*o+n*A-s*l,this._y=n*c+a*l+s*o-i*A,this._z=s*c+a*A+i*l-n*o,this._w=a*c-i*o-n*l-s*A,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}let A=Math.sqrt(l),c=Math.atan2(A,o),h=Math.sin((1-e)*c)/A,u=Math.sin(e*c)/A;return this._w=a*h+this._w*u,this._x=i*h+this._x*u,this._y=n*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,A=2*(a*n-o*i),c=2*(o*e-s*n),h=2*(s*i-a*e);return this.x=e+l*A+a*h-o*c,this.y=i+l*c+o*A-s*h,this.z=n+l*h+s*c-a*A,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=2*(Math.random()-.5),e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ja=new b,Yl=new $t,qe=class{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ke):ke.fromBufferAttribute(s,a),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Kr.subVectors(this.max,ur),_n.subVectors(t.a,ur),En.subVectors(t.b,ur),bn.subVectors(t.c,ur),Di.subVectors(En,_n),_i.subVectors(bn,En),Yi.subVectors(_n,bn);let e=[0,-Di.z,Di.y,0,-_i.z,_i.y,0,-Yi.z,Yi.y,Di.z,0,-Di.x,_i.z,0,-_i.x,Yi.z,0,-Yi.x,-Di.y,Di.x,0,-_i.y,_i.x,0,-Yi.y,Yi.x,0];return!!Ja(e,_n,En,bn,Kr)&&(e=[1,0,0,0,1,0,0,0,1],!!Ja(e,_n,En,bn,Kr)&&(Zr.crossVectors(Di,_i),e=[Zr.x,Zr.y,Zr.z],Ja(e,_n,En,bn,Kr)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=.5*this.getSize(ke).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ci=[new b,new b,new b,new b,new b,new b,new b,new b],ke=new b,Jr=new qe,_n=new b,En=new b,bn=new b,Di=new b,_i=new b,Yi=new b,ur=new b,Kr=new b,Zr=new b,qi=new b;function Ja(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){qi.fromArray(r,s);let o=n.x*Math.abs(qi.x)+n.y*Math.abs(qi.y)+n.z*Math.abs(qi.z),l=t.dot(qi),A=e.dot(qi),c=i.dot(qi);if(Math.max(-Math.max(l,A,c),Math.min(l,A,c))>o)return!1}return!0}var Qu=new qe,pr=new b,Ka=new b,je=class{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Qu.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=.5*(i-this.radius);this.center.addScaledVector(pr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Ka)),this.expandByPoint(pr.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new b,Za=new b,$r=new b,Ei=new b,$a=new b,ts=new b,to=new b,Yn=class{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Za.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Za);let s=.5*t.distanceTo(e),a=-this.direction.dot($r),o=Ei.dot(this.direction),l=-Ei.dot($r),A=Ei.lengthSq(),c=Math.abs(1-a*a),h,u,p,d;if(c>0)if(h=a*l-o,u=a*o-l,d=s*c,h>=0)if(u>=-d)if(u<=d){let M=1/c;h*=M,u*=M,p=h*(h+a*u+2*o)+u*(a*h+u+2*l)+A}else u=s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+A;else u=-s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+A;else u<=-d?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+A):u<=d?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+A):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+A);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+A;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Za).addScaledVector($r,u),p}intersectSphere(t,e){hi.subVectors(t.center,this.origin);let i=hi.dot(this.direction),n=hi.dot(hi)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0?!0:t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,A=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return A>=0?(i=(t.min.x-u.x)*A,n=(t.max.x-u.x)*A):(i=(t.max.x-u.x)*A,n=(t.min.x-u.x)*A),c>=0?(s=(t.min.y-u.y)*c,a=(t.max.y-u.y)*c):(s=(t.max.y-u.y)*c,a=(t.min.y-u.y)*c),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),h>=0?(o=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,e)))}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,i,n,s){$a.subVectors(e,t),ts.subVectors(i,t),to.crossVectors($a,ts);let a,o=this.direction.dot(to);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ei.subVectors(this.origin,t);let l=a*this.direction.dot(ts.crossVectors(Ei,ts));if(l<0)return null;let A=a*this.direction.dot($a.cross(Ei));if(A<0||l+A>o)return null;let c=-a*Ei.dot(to);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class r{constructor(t,e,i,n,s,a,o,l,A,c,h,u,p,d,M,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,A,c,h,u,p,d,M,f)}set(t,e,i,n,s,a,o,l,A,c,h,u,p,d,M,f){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=A,g[6]=c,g[10]=h,g[14]=u,g[3]=p,g[7]=d,g[11]=M,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/Bn.setFromMatrixColumn(t,0).length(),s=1/Bn.setFromMatrixColumn(t,1).length(),a=1/Bn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),A=Math.sin(n),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let u=a*c,p=a*h,d=o*c,M=o*h;e[0]=l*c,e[4]=-l*h,e[8]=A,e[1]=p+d*A,e[5]=u-M*A,e[9]=-o*l,e[2]=M-u*A,e[6]=d+p*A,e[10]=a*l}else if(t.order==="YXZ"){let u=l*c,p=l*h,d=A*c,M=A*h;e[0]=u+M*o,e[4]=d*o-p,e[8]=a*A,e[1]=a*h,e[5]=a*c,e[9]=-o,e[2]=p*o-d,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*c,p=l*h,d=A*c,M=A*h;e[0]=u-M*o,e[4]=-a*h,e[8]=d+p*o,e[1]=p+d*o,e[5]=a*c,e[9]=M-u*o,e[2]=-a*A,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*c,p=a*h,d=o*c,M=o*h;e[0]=l*c,e[4]=d*A-p,e[8]=u*A+M,e[1]=l*h,e[5]=M*A+u,e[9]=p*A-d,e[2]=-A,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*A,d=o*l,M=o*A;e[0]=l*c,e[4]=M-u*h,e[8]=d*h+p,e[1]=h,e[5]=a*c,e[9]=-o*c,e[2]=-A*c,e[6]=p*h+d,e[10]=u-M*h}else if(t.order==="XZY"){let u=a*l,p=a*A,d=o*l,M=o*A;e[0]=l*c,e[4]=-h,e[8]=A*c,e[1]=u*h+M,e[5]=a*c,e[9]=p*h-d,e[2]=d*h-p,e[6]=o*c,e[10]=M*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hu,t,Gu)}lookAt(t,e,i){let n=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),bi.crossVectors(i,be),bi.lengthSq()===0&&(Math.abs(i.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),bi.crossVectors(i,be)),bi.normalize(),es.crossVectors(be,bi),n[0]=bi.x,n[4]=es.x,n[8]=be.x,n[1]=bi.y,n[5]=es.y,n[9]=be.y,n[2]=bi.z,n[6]=es.z,n[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],A=i[12],c=i[1],h=i[5],u=i[9],p=i[13],d=i[2],M=i[6],f=i[10],g=i[14],m=i[3],v=i[7],P=i[11],y=i[15],x=n[0],w=n[4],I=n[8],L=n[12],C=n[1],O=n[5],S=n[9],U=n[13],N=n[2],X=n[6],ot=n[10],j=n[14],G=n[3],K=n[7],H=n[11],q=n[15];return s[0]=a*x+o*C+l*N+A*G,s[4]=a*w+o*O+l*X+A*K,s[8]=a*I+o*S+l*ot+A*H,s[12]=a*L+o*U+l*j+A*q,s[1]=c*x+h*C+u*N+p*G,s[5]=c*w+h*O+u*X+p*K,s[9]=c*I+h*S+u*ot+p*H,s[13]=c*L+h*U+u*j+p*q,s[2]=d*x+M*C+f*N+g*G,s[6]=d*w+M*O+f*X+g*K,s[10]=d*I+M*S+f*ot+g*H,s[14]=d*L+M*U+f*j+g*q,s[3]=m*x+v*C+P*N+y*G,s[7]=m*w+v*O+P*X+y*K,s[11]=m*I+v*S+P*ot+y*H,s[15]=m*L+v*U+P*j+y*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],A=t[13],c=t[2],h=t[6],u=t[10],p=t[14];return t[3]*(+s*l*h-n*A*h-s*o*u+i*A*u+n*o*p-i*l*p)+t[7]*(+e*l*p-e*A*u+s*a*u-n*a*p+n*A*c-s*l*c)+t[11]*(+e*A*h-e*o*p-s*a*h+i*a*p+s*o*c-i*A*c)+t[15]*(-n*o*c-e*l*h+e*o*u+n*a*h-i*a*u+i*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],A=t[7],c=t[8],h=t[9],u=t[10],p=t[11],d=t[12],M=t[13],f=t[14],g=t[15],m=h*f*A-M*u*A+M*l*p-o*f*p-h*l*g+o*u*g,v=d*u*A-c*f*A-d*l*p+a*f*p+c*l*g-a*u*g,P=c*M*A-d*h*A+d*o*p-a*M*p-c*o*g+a*h*g,y=d*h*l-c*M*l-d*o*u+a*M*u+c*o*f-a*h*f,x=e*m+i*v+n*P+s*y;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/x;return t[0]=m*w,t[1]=(M*u*s-h*f*s-M*n*p+i*f*p+h*n*g-i*u*g)*w,t[2]=(o*f*s-M*l*s+M*n*A-i*f*A-o*n*g+i*l*g)*w,t[3]=(h*l*s-o*u*s-h*n*A+i*u*A+o*n*p-i*l*p)*w,t[4]=v*w,t[5]=(c*f*s-d*u*s+d*n*p-e*f*p-c*n*g+e*u*g)*w,t[6]=(d*l*s-a*f*s-d*n*A+e*f*A+a*n*g-e*l*g)*w,t[7]=(a*u*s-c*l*s+c*n*A-e*u*A-a*n*p+e*l*p)*w,t[8]=P*w,t[9]=(d*h*s-c*M*s-d*i*p+e*M*p+c*i*g-e*h*g)*w,t[10]=(a*M*s-d*o*s+d*i*A-e*M*A-a*i*g+e*o*g)*w,t[11]=(c*o*s-a*h*s-c*i*A+e*h*A+a*i*p-e*o*p)*w,t[12]=y*w,t[13]=(c*M*n-d*h*n+d*i*u-e*M*u-c*i*f+e*h*f)*w,t[14]=(d*o*n-a*M*n-d*i*l+e*M*l+a*i*f-e*o*f)*w,t[15]=(a*h*n-c*o*n+c*i*l-e*h*l-a*i*u+e*o*u)*w,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,A=s*a,c=s*o;return this.set(A*a+i,A*o-n*l,A*l+n*o,0,A*o+n*l,c*o+i,c*l-n*a,0,A*l-n*o,c*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,A=s+s,c=a+a,h=o+o,u=s*A,p=s*c,d=s*h,M=a*c,f=a*h,g=o*h,m=l*A,v=l*c,P=l*h,y=i.x,x=i.y,w=i.z;return n[0]=(1-(M+g))*y,n[1]=(p+P)*y,n[2]=(d-v)*y,n[3]=0,n[4]=(p-P)*x,n[5]=(1-(u+g))*x,n[6]=(f+m)*x,n[7]=0,n[8]=(d+v)*w,n[9]=(f-m)*w,n[10]=(1-(u+M))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=Bn.set(n[0],n[1],n[2]).length(),a=Bn.set(n[4],n[5],n[6]).length(),o=Bn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ve.copy(this);let l=1/s,A=1/a,c=1/o;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=A,Ve.elements[5]*=A,Ve.elements[6]*=A,Ve.elements[8]*=c,Ve.elements[9]*=c,Ve.elements[10]*=c,e.setFromRotationMatrix(Ve),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=2e3){let l=this.elements,A=2*s/(e-t),c=2*s/(i-n),h=(e+t)/(e-t),u=(i+n)/(i-n),p,d;if(o===Wn)p=-(a+s)/(a-s),d=-2*a*s/(a-s);else{if(o!==Ls)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),d=-a*s/(a-s)}return l[0]=A,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=2e3){let l=this.elements,A=1/(e-t),c=1/(i-n),h=1/(a-s),u=(e+t)*A,p=(i+n)*c,d,M;if(o===Wn)d=(a+s)*h,M=-2*h;else{if(o!==Ls)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);d=s*h,M=-1*h}return l[0]=2*A,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Bn=new b,Ve=new yt,Hu=new b(0,0,0),Gu=new b(1,1,1),bi=new b,es=new b,be=new b,ql=new yt,jl=new $t,ni=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],A=n[5],c=n[9],h=n[2],u=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,A),this._z=0);break;case"YXZ":this._x=Math.asin(-le(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,A)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,A)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,A));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,A),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,A),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ql,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!=0}isEnabled(t){return(this.mask&(1<<t|0))!=0}},ku=0,Jl=new b,Sn=new $t,ui=new yt,is=new b,dr=new b,Vu=new b,Xu=new $t,Kl=new b(1,0,0),Zl=new b(0,1,0),$l=new b(0,0,1),Wu={type:"added"},Yu={type:"removed"},Pe=class r extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new b,e=new ni,i=new $t,n=new b(1,1,1);e._onChange(function(){i.setFromEuler(e,!1)}),i._onChange(function(){e.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new yt},normalMatrix:{value:new St}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Sn.setFromAxisAngle(t,e),this.quaternion.multiply(Sn),this}rotateOnWorldAxis(t,e){return Sn.setFromAxisAngle(t,e),this.quaternion.premultiply(Sn),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(Zl,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,e){return Jl.copy(t).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(Zl,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?is.copy(t):is.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(dr,is,this.up):ui.lookAt(is,dr,this.up),this.quaternion.setFromRotationMatrix(ui),n&&(ui.extractRotation(n.matrixWorld),Sn.setFromRotationMatrix(ui),this.quaternion.premultiply(Sn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yu)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let s=e[i];s.matrixWorldAutoUpdate!==!0&&t!==!0||s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let A=0,c=l.length;A<c;A++){let h=l[A];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,A=this.material.length;l<A;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),A=a(t.textures),c=a(t.images),h=a(t.shapes),u=a(t.skeletons),p=a(t.animations),d=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),A.length>0&&(i.textures=A),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),d.length>0&&(i.nodes=d)}return i.object=n,i;function a(o){let l=[];for(let A in o){let c=o[A];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Pe.DEFAULT_UP=new b(0,1,0),Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=new b,pi=new b,eo=new b,di=new b,Cn=new b,Tn=new b,tc=new b,io=new b,no=new b,ro=new b,ns=!1,en=class r{constructor(t=new b,e=new b,i=new b){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Xe.subVectors(t,e),n.cross(Xe);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Xe.subVectors(n,e),pi.subVectors(i,e),eo.subVectors(t,e);let a=Xe.dot(Xe),o=Xe.dot(pi),l=Xe.dot(eo),A=pi.dot(pi),c=pi.dot(eo),h=a*A-o*o;if(h===0)return s.set(0,0,0),null;let u=1/h,p=(A*l-o*c)*u,d=(a*c-o*l)*u;return s.set(1-p-d,d,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,di)!==null&&di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(t,e,i,n,s,a,o,l){return ns===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ns=!0),this.getInterpolation(t,e,i,n,s,a,o,l)}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static isFrontFacing(t,e,i,n){return Xe.subVectors(i,e),pi.subVectors(t,e),Xe.cross(pi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),.5*Xe.cross(pi).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return ns===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ns=!0),r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;Cn.subVectors(n,i),Tn.subVectors(s,i),io.subVectors(t,i);let l=Cn.dot(io),A=Tn.dot(io);if(l<=0&&A<=0)return e.copy(i);no.subVectors(t,n);let c=Cn.dot(no),h=Tn.dot(no);if(c>=0&&h<=c)return e.copy(n);let u=l*h-c*A;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(i).addScaledVector(Cn,a);ro.subVectors(t,s);let p=Cn.dot(ro),d=Tn.dot(ro);if(d>=0&&p<=d)return e.copy(s);let M=p*A-l*d;if(M<=0&&A>=0&&d<=0)return o=A/(A-d),e.copy(i).addScaledVector(Tn,o);let f=c*d-p*h;if(f<=0&&h-c>=0&&p-d>=0)return tc.subVectors(s,n),o=(h-c)/(h-c+(p-d)),e.copy(n).addScaledVector(tc,o);let g=1/(f+M+u);return a=M*g,o=u*g,e.copy(i).addScaledVector(Cn,a).addScaledVector(Tn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},rs={h:0,s:0,l:0};function so(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+6*(t-r)*e:e<.5?t:e<2/3?r+6*(t-r)*(2/3-e):r}var dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,Ht.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ht.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Ht.workingColorSpace){if(t=zu(t,1),e=le(e,0,1),i=le(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=so(a,s,t+1/3),this.g=so(a,s,t),this.b=so(a,s,t-1/3)}return Ht.toWorkingColorSpace(this,n),this}setStyle(t,e=Zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zt){let i=$c[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Ya(t.r),this.g=Ya(t.g),this.b=Ya(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zt){return Ht.fromWorkingColorSpace(ge.copy(this),t),65536*Math.round(le(255*ge.r,0,255))+256*Math.round(le(255*ge.g,0,255))+Math.round(le(255*ge.b,0,255))}getHexString(t=Zt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.fromWorkingColorSpace(ge.copy(this),e);let i=ge.r,n=ge.g,s=ge.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,A,c=(o+a)/2;if(o===a)l=0,A=0;else{let h=a-o;switch(A=c<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-i)/h+2;break;case s:l=(i-n)/h+4}l/=6}return t.h=l,t.s=A,t.l=c,t}getRGB(t,e=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(ge.copy(this),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t=Zt){Ht.fromWorkingColorSpace(ge.copy(this),t);let e=ge.r,i=ge.g,n=ge.b;return t!==Zt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(t,e,i){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(rs);let i=Xa(Bi.h,rs.h,e),n=Xa(Bi.s,rs.s,e),s=Xa(Bi.l,rs.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ge=new dt;dt.NAMES=$c;var qu=0,an=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=1,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=wo,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wn,this.stencilZFail=wn,this.stencilZPass=wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i:console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`)}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yo&&(i.blendSrc=this.blendSrc),this.blendDst!==wo&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Oe=class extends an{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},e0=ju();function ju(){let r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let A=l-127;A<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):A<-14?(i[l]=1024>>-A-14,i[256|l]=1024>>-A-14|32768,n[l]=-A-1,n[256|l]=-A-1):A<=15?(i[l]=A+15<<10,i[256|l]=A+15<<10|32768,n[l]=13,n[256|l]=13):A<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let A=l<<13,c=0;for(;!(8388608&A);)A<<=1,c-=8388608;A&=-8388609,c+=947912704,s[l]=A|c}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var ee=new b,ss=new st,Qt=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Hl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix3(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ee.fromBufferAttribute(this,e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ee.fromBufferAttribute(this,e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hr(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hr(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hr(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hl&&(t.usage=this.usage),t}};var Qs=class extends Qt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Hs=class extends Qt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var vt=class extends Qt{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Ju=0,Ue=new yt,ao=new Pe,In=new b,Be=new qe,fr=new qe,oe=new b,Ot=class r extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zc(t)?Hs:Qs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new St().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,i){return Ue.makeTranslation(t,e,i),this.applyMatrix4(Ue),this}scale(t,e,i){return Ue.makeScale(t,e,i),this.applyMatrix4(Ue),this}lookAt(t){return ao.lookAt(t),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(In).negate(),this.translate(In.x,In.y,In.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Be.setFromBufferAttribute(s),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new je);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new b,1/0);if(t){let i=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(oe.addVectors(Be.min,fr.min),Be.expandByPoint(oe),oe.addVectors(Be.max,fr.max),Be.expandByPoint(oe)):(Be.expandByPoint(fr.min),Be.expandByPoint(fr.max))}Be.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)oe.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(oe));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let A=0,c=o.count;A<c;A++)oe.fromBufferAttribute(o,A),l&&(In.fromBufferAttribute(t,A),oe.add(In)),n=Math.max(n,i.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,A=[],c=[];for(let C=0;C<o;C++)A[C]=new b,c[C]=new b;let h=new b,u=new b,p=new b,d=new st,M=new st,f=new st,g=new b,m=new b;function v(C,O,S){h.fromArray(n,3*C),u.fromArray(n,3*O),p.fromArray(n,3*S),d.fromArray(a,2*C),M.fromArray(a,2*O),f.fromArray(a,2*S),u.sub(h),p.sub(h),M.sub(d),f.sub(d);let U=1/(M.x*f.y-f.x*M.y);isFinite(U)&&(g.copy(u).multiplyScalar(f.y).addScaledVector(p,-M.y).multiplyScalar(U),m.copy(p).multiplyScalar(M.x).addScaledVector(u,-f.x).multiplyScalar(U),A[C].add(g),A[O].add(g),A[S].add(g),c[C].add(m),c[O].add(m),c[S].add(m))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let C=0,O=P.length;C<O;++C){let S=P[C],U=S.start;for(let N=U,X=U+S.count;N<X;N+=3)v(i[N+0],i[N+1],i[N+2])}let y=new b,x=new b,w=new b,I=new b;function L(C){w.fromArray(s,3*C),I.copy(w);let O=A[C];y.copy(O),y.sub(w.multiplyScalar(w.dot(O))).normalize(),x.crossVectors(I,O);let S=x.dot(c[C])<0?-1:1;l[4*C]=y.x,l[4*C+1]=y.y,l[4*C+2]=y.z,l[4*C+3]=S}for(let C=0,O=P.length;C<O;++C){let S=P[C],U=S.start;for(let N=U,X=U+S.count;N<X;N+=3)L(i[N+0]),L(i[N+1]),L(i[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(3*e.count),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let n=new b,s=new b,a=new b,o=new b,l=new b,A=new b,c=new b,h=new b;if(t)for(let u=0,p=t.count;u<p;u+=3){let d=t.getX(u+0),M=t.getX(u+1),f=t.getX(u+2);n.fromBufferAttribute(e,d),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,f),c.subVectors(a,s),h.subVectors(n,s),c.cross(h),o.fromBufferAttribute(i,d),l.fromBufferAttribute(i,M),A.fromBufferAttribute(i,f),o.add(c),l.add(c),A.add(c),i.setXYZ(d,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(f,A.x,A.y,A.z)}else for(let u=0,p=e.count;u<p;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),c.subVectors(a,s),h.subVectors(n,s),c.cross(h),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)oe.fromBufferAttribute(t,e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)}toNonIndexed(){function t(o,l){let A=o.array,c=o.itemSize,h=o.normalized,u=new A.constructor(l.length*c),p=0,d=0;for(let M=0,f=l.length;M<f;M++){p=o.isInterleavedBufferAttribute?l[M]*o.data.stride+o.offset:l[M]*c;for(let g=0;g<c;g++)u[d++]=A[p++]}return new Qt(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=t(n[o],i);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],A=s[o];for(let c=0,h=A.length;c<h;c++){let u=t(A[c],i);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let A=a[o];e.addGroup(A.start,A.count,A.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let A in l)l[A]!==void 0&&(t[A]=l[A]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let A=i[l];t.data.attributes[l]=A.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let A=this.morphAttributes[l],c=[];for(let h=0,u=A.length;h<u;h++){let p=A[h];c.push(p.toJSON(t.data))}c.length>0&&(n[l]=c,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let A in n){let c=n[A];this.setAttribute(A,c.clone(e))}let s=t.morphAttributes;for(let A in s){let c=[],h=s[A];for(let u=0,p=h.length;u<p;u++)c.push(h[u].clone(e));this.morphAttributes[A]=c}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let A=0,c=a.length;A<c;A++){let h=a[A];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ec=new yt,ji=new Yn,as=new je,ic=new b,Rn=new b,Ln=new b,zn=new b,oo=new b,os=new b,As=new st,ls=new st,cs=new st,nc=new b,rc=new b,sc=new b,hs=new b,us=new b,kt=class extends Pe{constructor(t=new Ot,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){os.set(0,0,0);for(let l=0,A=s.length;l<A;l++){let c=o[l],h=s[l];c!==0&&(oo.fromBufferAttribute(h,t),a?os.addScaledVector(oo,c):os.addScaledVector(oo.sub(e),c))}e.add(os)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),as.copy(i.boundingSphere),as.applyMatrix4(s),ji.copy(t.ray).recast(t.near),as.containsPoint(ji.origin)===!1&&(ji.intersectSphere(as,ic)===null||ji.origin.distanceToSquared(ic)>(t.far-t.near)**2))return;ec.copy(s).invert(),ji.copy(t.ray).applyMatrix4(ec),i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1||this._computeIntersections(t,e,ji)}}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,A=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,M=u.length;d<M;d++){let f=u[d],g=a[f.materialIndex];for(let m=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));m<v;m+=3)n=ps(this,g,t,i,A,c,h,o.getX(m),o.getX(m+1),o.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=f.materialIndex,e.push(n))}else for(let d=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);d<M;d+=3)n=ps(this,a,t,i,A,c,h,o.getX(d),o.getX(d+1),o.getX(d+2)),n&&(n.faceIndex=Math.floor(d/3),e.push(n));else if(l!==void 0)if(Array.isArray(a))for(let d=0,M=u.length;d<M;d++){let f=u[d],g=a[f.materialIndex];for(let m=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));m<v;m+=3)n=ps(this,g,t,i,A,c,h,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=f.materialIndex,e.push(n))}else for(let d=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);d<M;d+=3)n=ps(this,a,t,i,A,c,h,d,d+1,d+2),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}};function ps(r,t,e,i,n,s,a,o,l,A){r.getVertexPosition(o,Rn),r.getVertexPosition(l,Ln),r.getVertexPosition(A,zn);let c=function(h,u,p,d,M,f,g,m){let v;if(v=u.side===he?d.intersectTriangle(g,f,M,!0,m):d.intersectTriangle(M,f,g,u.side===Ii,m),v===null)return null;us.copy(m),us.applyMatrix4(h.matrixWorld);let P=p.ray.origin.distanceTo(us);return P<p.near||P>p.far?null:{distance:P,point:us.clone(),object:h}}(r,t,e,i,Rn,Ln,zn,hs);if(c){n&&(As.fromBufferAttribute(n,o),ls.fromBufferAttribute(n,l),cs.fromBufferAttribute(n,A),c.uv=en.getInterpolation(hs,Rn,Ln,zn,As,ls,cs,new st)),s&&(As.fromBufferAttribute(s,o),ls.fromBufferAttribute(s,l),cs.fromBufferAttribute(s,A),c.uv1=en.getInterpolation(hs,Rn,Ln,zn,As,ls,cs,new st),c.uv2=c.uv1),a&&(nc.fromBufferAttribute(a,o),rc.fromBufferAttribute(a,l),sc.fromBufferAttribute(a,A),c.normal=en.getInterpolation(hs,Rn,Ln,zn,nc,rc,sc,new b),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let h={a:o,b:l,c:A,normal:new b,materialIndex:0};en.getNormal(Rn,Ln,zn,h.normal),c.face=h}return c}var Je=class r extends Ot{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],A=[],c=[],h=[],u=0,p=0;function d(M,f,g,m,v,P,y,x,w,I,L){let C=P/w,O=y/I,S=P/2,U=y/2,N=x/2,X=w+1,ot=I+1,j=0,G=0,K=new b;for(let H=0;H<ot;H++){let q=H*O-U;for(let lt=0;lt<X;lt++){let _=lt*C-S;K[M]=_*m,K[f]=q*v,K[g]=N,A.push(K.x,K.y,K.z),K[M]=0,K[f]=0,K[g]=x>0?1:-1,c.push(K.x,K.y,K.z),h.push(lt/w),h.push(1-H/I),j+=1}}for(let H=0;H<I;H++)for(let q=0;q<w;q++){let lt=u+q+X*H,_=u+q+X*(H+1),E=u+(q+1)+X*(H+1),Q=u+(q+1)+X*H;l.push(lt,_,Q),l.push(_,E,Q),G+=6}o.addGroup(p,G,L),p+=G,u+=j}d("z","y","x",-1,-1,i,e,t,a,s,0),d("z","y","x",1,-1,i,e,-t,a,s,1),d("x","z","y",1,1,t,i,e,n,a,2),d("x","z","y",1,-1,t,i,-e,n,a,3),d("x","y","z",1,-1,t,e,i,n,s,4),d("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new vt(A,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qn(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Me(r){let t={};for(let e=0;e<r.length;e++){let i=qn(r[e]);for(let n in i)t[n]=i[n]}return t}function th(r){return r.getRenderTarget()===null?r.outputColorSpace:Ht.workingColorSpace}var SA={clone:qn,merge:Me},xe=class extends an{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qn(t.uniforms),this.uniformsGroups=function(e){let i=[];for(let n=0;n<e.length;n++)i.push(e[n].clone());return i}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?e.uniforms[n]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[n]={type:"m4",value:s.toArray()}:e.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Dr=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ce=class extends Dr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=2*So*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(.5*bs*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*So*Math.atan(Math.tan(.5*bs*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(.5*bs*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,A=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/A,n*=a.width/l,i*=a.height/A}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Un=-90,Ro=class extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ce(Un,1,t,e);n.layers=this.layers,this.add(n);let s=new ce(Un,1,t,e);s.layers=this.layers,this.add(s);let a=new ce(Un,1,t,e);a.layers=this.layers,this.add(a);let o=new ce(Un,1,t,e);o.layers=this.layers,this.add(o);let l=new ce(Un,1,t,e);l.layers=this.layers,this.add(l);let A=new ce(Un,1,t,e);A.layers=this.layers,this.add(A)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let A of e)this.remove(A);if(t===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(t!==Ls)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let A of e)this.add(A),A.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,A,c]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,A),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(h,u,p),t.xr.enabled=d,i.texture.needsPMREMUpdate=!0}},Gs=class extends Ne{constructor(t,e,i,n,s,a,o,l,A,c){super(t=t!==void 0?t:[],e=e!==void 0?e:kn,i,n,s,a,o,l,A,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Lo=class extends ue{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(Mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===sn?Zt:ei),this.texture=new Gs(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0&&e.generateMipmaps,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:me}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Je(5,5,5),s=new xe({name:"CubemapFromEquirect",uniforms:qn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:he,blending:0});s.uniforms.tEquirect.value=e;let a=new kt(n,s),o=e.minFilter;return e.minFilter===Bs&&(e.minFilter=me),new Ro(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},Ao=new b,Ku=new b,Zu=new St,We=class{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Ao.subVectors(i,e).cross(Ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ao),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Zu.getNormalMatrix(t),n=this.coplanarPoint(Ao).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new je,ds=new b,zi=class{constructor(t=new We,e=new We,i=new We,n=new We,s=new We,a=new We){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=2e3){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],A=n[4],c=n[5],h=n[6],u=n[7],p=n[8],d=n[9],M=n[10],f=n[11],g=n[12],m=n[13],v=n[14],P=n[15];if(i[0].setComponents(l-s,u-A,f-p,P-g).normalize(),i[1].setComponents(l+s,u+A,f+p,P+g).normalize(),i[2].setComponents(l+a,u+c,f+d,P+m).normalize(),i[3].setComponents(l-a,u-c,f-d,P-m).normalize(),i[4].setComponents(l-o,u-h,f-M,P-v).normalize(),e===Wn)i[5].setComponents(l+o,u+h,f+M,P+v).normalize();else{if(e!==Ls)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);i[5].setComponents(o,h,M,v).normalize()}return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(ds.x=n.normal.x>0?t.max.x:t.min.x,ds.y=n.normal.y>0?t.max.y:t.min.y,ds.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ds)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function eh(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function $u(r,t){let e=t.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let s=i.get(n);s&&(r.deleteBuffer(s.buffer),i.delete(n))},update:function(n,s){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);if(a===void 0)i.set(n,function(o,l){let A=o.array,c=o.usage,h=A.byteLength,u=r.createBuffer(),p;if(r.bindBuffer(l,u),r.bufferData(l,A,c),o.onUploadCallback(),A instanceof Float32Array)p=r.FLOAT;else if(A instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!e)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(A instanceof Int16Array)p=r.SHORT;else if(A instanceof Uint32Array)p=r.UNSIGNED_INT;else if(A instanceof Int32Array)p=r.INT;else if(A instanceof Int8Array)p=r.BYTE;else if(A instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(A instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);p=r.UNSIGNED_BYTE}return{buffer:u,type:p,bytesPerElement:A.BYTES_PER_ELEMENT,version:o.version,size:h}}(n,s));else if(a.version<n.version){if(a.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,A){let c=l.array,h=l._updateRange,u=l.updateRanges;if(r.bindBuffer(A,o),h.count===-1&&u.length===0&&r.bufferSubData(A,0,c),u.length!==0){for(let p=0,d=u.length;p<d;p++){let M=u[p];e?r.bufferSubData(A,M.start*c.BYTES_PER_ELEMENT,c,M.start,M.count):r.bufferSubData(A,M.start*c.BYTES_PER_ELEMENT,c.subarray(M.start,M.start+M.count))}l.clearUpdateRanges()}h.count!==-1&&(e?r.bufferSubData(A,h.offset*c.BYTES_PER_ELEMENT,c,h.offset,h.count):r.bufferSubData(A,h.offset*c.BYTES_PER_ELEMENT,c.subarray(h.offset,h.offset+h.count)),h.count=-1),l.onUploadCallback()})(a.buffer,n,s),a.version=n.version}}}}var jn=class r extends Ot{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),A=o+1,c=l+1,h=t/o,u=e/l,p=[],d=[],M=[],f=[];for(let g=0;g<c;g++){let m=g*u-a;for(let v=0;v<A;v++){let P=v*h-s;d.push(P,-m,0),M.push(0,0,1),f.push(v/o),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let m=0;m<o;m++){let v=m+A*g,P=m+A*(g+1),y=m+1+A*(g+1),x=m+1+A*g;p.push(v,P,x),p.push(P,y,x)}this.setIndex(p),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(M,3)),this.setAttribute("uv",new vt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Et={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,lights_fragment_begin:`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`},ct={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},ti={basic:{uniforms:Me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new dt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Me([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Me([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new dt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Me([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Me([ct.points,ct.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Me([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Me([ct.common,ct.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Me([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Me([ct.sprite,ct.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:Me([ct.common,ct.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:Me([ct.lights,ct.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};ti.physical={uniforms:Me([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var fs={r:0,b:0,g:0};function tp(r,t,e,i,n,s,a){let o=new dt(0),l,A,c=s===!0?0:1,h=null,u=0,p=null;function d(M,f){M.getRGB(fs,th(r)),i.buffers.color.setClear(fs.r,fs.g,fs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(M,f=1){o.set(M),c=f,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(o,c)},render:function(M,f){let g=!1,m=f.isScene===!0?f.background:null;m&&m.isTexture&&(m=(f.backgroundBlurriness>0?e:t).get(m)),m===null?d(o,c):m&&m.isColor&&(d(m,1),g=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),m&&(m.isCubeTexture||m.mapping===ta)?(A===void 0&&(A=new kt(new Je(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:qn(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:he,depthTest:!1,depthWrite:!1,fog:!1})),A.geometry.deleteAttribute("normal"),A.geometry.deleteAttribute("uv"),A.onBeforeRender=function(P,y,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(A.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(A)),A.material.uniforms.envMap.value=m,A.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,A.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,A.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,A.material.toneMapped=Ht.getTransfer(m.colorSpace)!==Vt,h===m&&u===m.version&&p===r.toneMapping||(A.material.needsUpdate=!0,h=m,u=m.version,p=r.toneMapping),A.layers.enableAll(),M.unshift(A,A.geometry,A.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new kt(new jn(2,2),new xe({name:"BackgroundMaterial",uniforms:qn(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=m,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ht.getTransfer(m.colorSpace)!==Vt,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),h===m&&u===m.version&&p===r.toneMapping||(l.material.needsUpdate=!0,h=m,u=m.version,p=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}}}function ep(r,t,e,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null),A=l,c=!1;function h(y){return i.isWebGL2?r.bindVertexArray(y):s.bindVertexArrayOES(y)}function u(y){return i.isWebGL2?r.deleteVertexArray(y):s.deleteVertexArrayOES(y)}function p(y){let x=[],w=[],I=[];for(let L=0;L<n;L++)x[L]=0,w[L]=0,I[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:w,attributeDivisors:I,object:y,attributes:{},index:null}}function d(){let y=A.newAttributes;for(let x=0,w=y.length;x<w;x++)y[x]=0}function M(y){f(y,0)}function f(y,x){let w=A.newAttributes,I=A.enabledAttributes,L=A.attributeDivisors;w[y]=1,I[y]===0&&(r.enableVertexAttribArray(y),I[y]=1),L[y]!==x&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](y,x),L[y]=x)}function g(){let y=A.newAttributes,x=A.enabledAttributes;for(let w=0,I=x.length;w<I;w++)x[w]!==y[w]&&(r.disableVertexAttribArray(w),x[w]=0)}function m(y,x,w,I,L,C,O){O===!0?r.vertexAttribIPointer(y,x,w,L,C):r.vertexAttribPointer(y,x,w,I,L,C)}function v(){P(),c=!0,A!==l&&(A=l,h(A.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(y,x,w,I,L){let C=!1;if(a){let O=function(S,U,N){let X=N.wireframe===!0,ot=o[S.id];ot===void 0&&(ot={},o[S.id]=ot);let j=ot[U.id];j===void 0&&(j={},ot[U.id]=j);let G=j[X];return G===void 0&&(G=p(i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),j[X]=G),G}(I,w,x);A!==O&&(A=O,h(A.object)),C=function(S,U,N,X){let ot=A.attributes,j=U.attributes,G=0,K=N.getAttributes();for(let H in K)if(K[H].location>=0){let q=ot[H],lt=j[H];if(lt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),q===void 0||q.attribute!==lt||lt&&q.data!==lt.data)return!0;G++}return A.attributesNum!==G||A.index!==X}(y,I,w,L),C&&function(S,U,N,X){let ot={},j=U.attributes,G=0,K=N.getAttributes();for(let H in K)if(K[H].location>=0){let q=j[H];q===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));let lt={};lt.attribute=q,q&&q.data&&(lt.data=q.data),ot[H]=lt,G++}A.attributes=ot,A.attributesNum=G,A.index=X}(y,I,w,L)}else{let O=x.wireframe===!0;A.geometry===I.id&&A.program===w.id&&A.wireframe===O||(A.geometry=I.id,A.program=w.id,A.wireframe=O,C=!0)}L!==null&&e.update(L,r.ELEMENT_ARRAY_BUFFER),(C||c)&&(c=!1,function(O,S,U,N){if(i.isWebGL2===!1&&(O.isInstancedMesh||N.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;d();let X=N.attributes,ot=U.getAttributes(),j=S.defaultAttributeValues;for(let G in ot){let K=ot[G];if(K.location>=0){let H=X[G];if(H===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(H=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(H=O.instanceColor)),H!==void 0){let q=H.normalized,lt=H.itemSize,_=e.get(H);if(_===void 0)continue;let E=_.buffer,Q=_.type,$=_.bytesPerElement,R=i.isWebGL2===!0&&(Q===r.INT||Q===r.UNSIGNED_INT||H.gpuType===kc);if(H.isInterleavedBufferAttribute){let J=H.data,z=J.stride,F=H.offset;if(J.isInstancedInterleavedBuffer){for(let k=0;k<K.locationSize;k++)f(K.location+k,J.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let k=0;k<K.locationSize;k++)M(K.location+k);r.bindBuffer(r.ARRAY_BUFFER,E);for(let k=0;k<K.locationSize;k++)m(K.location+k,lt/K.locationSize,Q,q,z*$,(F+lt/K.locationSize*k)*$,R)}else{if(H.isInstancedBufferAttribute){for(let J=0;J<K.locationSize;J++)f(K.location+J,H.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let J=0;J<K.locationSize;J++)M(K.location+J);r.bindBuffer(r.ARRAY_BUFFER,E);for(let J=0;J<K.locationSize;J++)m(K.location+J,lt/K.locationSize,Q,q,lt*$,lt/K.locationSize*J*$,R)}}else if(j!==void 0){let q=j[G];if(q!==void 0)switch(q.length){case 2:r.vertexAttrib2fv(K.location,q);break;case 3:r.vertexAttrib3fv(K.location,q);break;case 4:r.vertexAttrib4fv(K.location,q);break;default:r.vertexAttrib1fv(K.location,q)}}}}g()}(y,x,w,I),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))},reset:v,resetDefaultState:P,dispose:function(){v();for(let y in o){let x=o[y];for(let w in x){let I=x[w];for(let L in I)u(I[L].object),delete I[L];delete x[w]}delete o[y]}},releaseStatesOfGeometry:function(y){if(o[y.id]===void 0)return;let x=o[y.id];for(let w in x){let I=x[w];for(let L in I)u(I[L].object),delete I[L];delete x[w]}delete o[y.id]},releaseStatesOfProgram:function(y){for(let x in o){let w=o[x];if(w[y.id]===void 0)continue;let I=w[y.id];for(let L in I)u(I[L].object),delete I[L];delete w[y.id]}},initAttributes:d,enableAttribute:M,disableUnusedAttributes:g}}function ip(r,t,e,i){let n=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),e.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let A,c;if(n)A=r,c="drawArraysInstanced";else if(A=t.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",A===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");A[c](s,a,o,l),e.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let A=t.get("WEBGL_multi_draw");if(A===null)for(let c=0;c<l;c++)this.render(a[c],o[c]);else{A.multiDrawArraysWEBGL(s,a,0,o,0,l);let c=0;for(let h=0;h<l;h++)c+=o[h];e.update(c,s,1)}}}function np(r,t,e){let i;function n(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||t.has("WEBGL_draw_buffers"),A=e.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),g=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),m=h>0,v=s||t.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:A,maxTextures:c,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:v,floatVertexTextures:m&&v,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function rp(r){let t=this,e=null,i=0,n=!1,s=!1,a=new We,o=new St,l={value:null,needsUpdate:!1};function A(c,h,u,p){let d=c!==null?c.length:0,M=null;if(d!==0){if(M=l.value,p!==!0||M===null){let f=u+4*d,g=h.matrixWorldInverse;o.getNormalMatrix(g),(M===null||M.length<f)&&(M=new Float32Array(f));for(let m=0,v=u;m!==d;++m,v+=4)a.copy(c[m]).applyMatrix4(g,o),a.normal.toArray(M,v),M[v+3]=a.constant}l.value=M,l.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,M}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,h){let u=c.length!==0||h||i!==0||n;return n=h,i=c.length,u},this.beginShadows=function(){s=!0,A(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,h){e=A(c,h,0)},this.setState=function(c,h,u){let p=c.clippingPlanes,d=c.clipIntersection,M=c.clipShadows,f=r.get(c);if(!n||p===null||p.length===0||s&&!M)s?A(null):function(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}();else{let g=s?0:i,m=4*g,v=f.clippingState||null;l.value=v,v=A(p,h,m,u);for(let P=0;P!==m;++P)v[P]=e[P];f.clippingState=v,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=g}}}function sp(r){let t=new WeakMap;function e(n,s){return s===Do?n.mapping=kn:s===_o&&(n.mapping=Vn),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=t.get(s);a!==void 0&&(t.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===Do||s===_o){if(t.has(n))return e(t.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new Lo(a.height/2);return o.fromEquirectangularTexture(r,n),t.set(n,o),n.addEventListener("dispose",i),e(o.texture,n.mapping)}return null}}}return n},dispose:function(){t=new WeakMap}}}var Jn=class extends Dr{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let A=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=A*this.view.offsetX,a=s+A*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ac=[.125,.215,.35,.446,.526,.582],gr=20,lo=new Jn,oc=new dt,co=null,ho=0,uo=0,Ki=(1+Math.sqrt(5))/2,Nn=1/Ki,Ac=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,Ki,Nn),new b(0,Ki,-Nn),new b(Nn,0,Ki),new b(-Nn,0,Ki),new b(Ki,Nn,0),new b(-Ki,Nn,0)],ks=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){co=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(co,ho,uo),t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===kn||t.mapping===Vn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),co=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:me,minFilter:me,generateMipmaps:!1,type:Ri,format:Se,colorSpace:vi,depthBuffer:!1},n=lc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],A=[],c=a,h=a-4+1+ac.length;for(let u=0;u<h;u++){let p=Math.pow(2,c);l.push(p);let d=1/p;u>a-4?d=ac[u-a+4-1]:u===0&&(d=0),A.push(d);let M=1/(p-2),f=-M,g=1+M,m=[f,f,g,f,g,g,f,f,g,g,f,g],v=6,P=6,y=3,x=2,w=1,I=new Float32Array(y*P*v),L=new Float32Array(x*P*v),C=new Float32Array(w*P*v);for(let S=0;S<v;S++){let U=S%3*2/3-1,N=S>2?0:-1,X=[U,N,0,U+2/3,N,0,U+2/3,N+1,0,U,N,0,U+2/3,N+1,0,U,N+1,0];I.set(X,y*P*S),L.set(m,x*P*S);let ot=[S,S,S,S,S,S];C.set(ot,w*P*S)}let O=new Ot;O.setAttribute("position",new Qt(I,y)),O.setAttribute("uv",new Qt(L,x)),O.setAttribute("faceIndex",new Qt(C,w)),o.push(O),c>4&&c--}return{lodPlanes:o,sizeLods:l,sigmas:A}}(s)),this._blurMaterial=function(a,o,l){let A=new Float32Array(gr),c=new b(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:CA(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,t,e)}return n}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,i,n){let s=new ce(90,1,e,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,A=l.autoClear,c=l.toneMapping;l.getClearColor(oc),l.toneMapping=Ci,l.autoClear=!1;let h=new Oe({name:"PMREM.Background",side:he,depthWrite:!1,depthTest:!1}),u=new kt(new Je,h),p=!1,d=t.background;d?d.isColor&&(h.color.copy(d),t.background=null,p=!0):(h.color.copy(oc),p=!0);for(let M=0;M<6;M++){let f=M%3;f===0?(s.up.set(0,a[M],0),s.lookAt(o[M],0,0)):f===1?(s.up.set(0,0,a[M]),s.lookAt(0,o[M],0)):(s.up.set(0,a[M],0),s.lookAt(0,0,o[M]));let g=this._cubeSize;gs(n,f*g,M>2?g:0,g,g),l.setRenderTarget(n),p&&l.render(u,s),l.render(t,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=c,l.autoClear=A,t.background=d}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===kn||t.mapping===Vn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],s);s.uniforms.envMap.value=t;let o=this._cubeSize;gs(e,0,0,3*o,2*o),i.setRenderTarget(e),i.render(a,lo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Ac[(n-1)%Ac.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let l=this._renderer,A=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new kt(this._lodPlanes[n],A),h=A.uniforms,u=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,d=s/p,M=isFinite(s)?1+Math.floor(3*d):gr;M>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${M} samples when the maximum is set to 20`);let f=[],g=0;for(let P=0;P<gr;++P){let y=P/d,x=Math.exp(-y*y/2);f.push(x),P===0?g+=x:P<M&&(g+=2*x)}for(let P=0;P<f.length;P++)f[P]=f[P]/g;h.envMap.value=t.texture,h.samples.value=M,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:m}=this;h.dTheta.value=p,h.mipInt.value=m-i;let v=this._sizeLods[n];gs(e,3*v*(n>m-4?n-m+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(e),l.render(c,lo)}};function lc(r,t,e){let i=new ue(r,t,e);return i.texture.mapping=ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function cc(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:CA(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function hc(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:CA(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function CA(){return`

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
	`}function ap(r){let t=new WeakMap,e=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=t.get(s);a!==void 0&&(t.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===Do||s===_o,o=s===kn||s===Vn;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=t.get(n);return e===null&&(e=new ks(r)),l=a?e.fromEquirectangular(n,l):e.fromCubemap(n,l),t.set(n,l),l.texture}if(t.has(n))return t.get(n).texture;{let l=n.image;if(a&&l&&l.height>0||o&&l&&function(A){let c=0,h=6;for(let u=0;u<h;u++)A[u]!==void 0&&c++;return c===h}(l)){e===null&&(e=new ks(r));let A=a?e.fromEquirectangular(n):e.fromCubemap(n);return t.set(n,A),n.addEventListener("dispose",i),A.texture}return null}}}return n},dispose:function(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}}}function op(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Ap(r,t,e,i){let n={},s=new WeakMap;function a(l){let A=l.target;A.index!==null&&t.remove(A.index);for(let h in A.attributes)t.remove(A.attributes[h]);for(let h in A.morphAttributes){let u=A.morphAttributes[h];for(let p=0,d=u.length;p<d;p++)t.remove(u[p])}A.removeEventListener("dispose",a),delete n[A.id];let c=s.get(A);c&&(t.remove(c),s.delete(A)),i.releaseStatesOfGeometry(A),A.isInstancedBufferGeometry===!0&&delete A._maxInstanceCount,e.memory.geometries--}function o(l){let A=[],c=l.index,h=l.attributes.position,u=0;if(c!==null){let M=c.array;u=c.version;for(let f=0,g=M.length;f<g;f+=3){let m=M[f+0],v=M[f+1],P=M[f+2];A.push(m,v,v,P,P,m)}}else{if(h===void 0)return;{let M=h.array;u=h.version;for(let f=0,g=M.length/3-1;f<g;f+=3){let m=f+0,v=f+1,P=f+2;A.push(m,v,v,P,P,m)}}}let p=new(Zc(A)?Hs:Qs)(A,1);p.version=u;let d=s.get(l);d&&t.remove(d),s.set(l,p)}return{get:function(l,A){return n[A.id]===!0||(A.addEventListener("dispose",a),n[A.id]=!0,e.memory.geometries++),A},update:function(l){let A=l.attributes;for(let h in A)t.update(A[h],r.ARRAY_BUFFER);let c=l.morphAttributes;for(let h in c){let u=c[h];for(let p=0,d=u.length;p<d;p++)t.update(u[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let A=s.get(l);if(A){let c=l.index;c!==null&&A.version<c.version&&o(l)}else o(l);return s.get(l)}}}function lp(r,t,e,i){let n=i.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,A){r.drawElements(s,A,a,l*o),e.update(A,s,1)},this.renderInstances=function(l,A,c){if(c===0)return;let h,u;if(n)h=r,u="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",h===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[u](s,A,a,l*o,c),e.update(A,s,c)},this.renderMultiDraw=function(l,A,c){if(c===0)return;let h=t.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<c;u++)this.render(l[u]/o,A[u]);else{h.multiDrawElementsWEBGL(s,A,0,a,l,0,c);let u=0;for(let p=0;p<c;p++)u+=A[p];e.update(u,s,1)}}}function cp(r){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(e,i,n){switch(t.calls++,i){case r.TRIANGLES:t.triangles+=n*(e/3);break;case r.LINES:t.lines+=n*(e/2);break;case r.LINE_STRIP:t.lines+=n*(e-1);break;case r.LINE_LOOP:t.lines+=n*e;break;case r.POINTS:t.points+=n*e;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function hp(r,t){return r[0]-t[0]}function up(r,t){return Math.abs(t[1])-Math.abs(r[1])}function pp(r,t,e){let i={},n=new Float32Array(8),s=new WeakMap,a=new Gt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,A,c){let h=l.morphTargetInfluences;if(t.isWebGL2===!0){let u=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,p=u!==void 0?u.length:0,d=s.get(A);if(d===void 0||d.count!==p){let U=function(){O.dispose(),s.delete(A),A.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let g=A.morphAttributes.position!==void 0,m=A.morphAttributes.normal!==void 0,v=A.morphAttributes.color!==void 0,P=A.morphAttributes.position||[],y=A.morphAttributes.normal||[],x=A.morphAttributes.color||[],w=0;g===!0&&(w=1),m===!0&&(w=2),v===!0&&(w=3);let I=A.attributes.position.count*w,L=1;I>t.maxTextureSize&&(L=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);let C=new Float32Array(I*L*4*p),O=new Os(C,I,L,p);O.type=Si,O.needsUpdate=!0;let S=4*w;for(let N=0;N<p;N++){let X=P[N],ot=y[N],j=x[N],G=I*L*4*N;for(let K=0;K<X.count;K++){let H=K*S;g===!0&&(a.fromBufferAttribute(X,K),C[G+H+0]=a.x,C[G+H+1]=a.y,C[G+H+2]=a.z,C[G+H+3]=0),m===!0&&(a.fromBufferAttribute(ot,K),C[G+H+4]=a.x,C[G+H+5]=a.y,C[G+H+6]=a.z,C[G+H+7]=0),v===!0&&(a.fromBufferAttribute(j,K),C[G+H+8]=a.x,C[G+H+9]=a.y,C[G+H+10]=a.z,C[G+H+11]=j.itemSize===4?a.w:1)}}d={count:p,texture:O,size:new st(I,L)},s.set(A,d),A.addEventListener("dispose",U)}let M=0;for(let g=0;g<h.length;g++)M+=h[g];let f=A.morphTargetsRelative?1:1-M;c.getUniforms().setValue(r,"morphTargetBaseInfluence",f),c.getUniforms().setValue(r,"morphTargetInfluences",h),c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}else{let u=h===void 0?0:h.length,p=i[A.id];if(p===void 0||p.length!==u){p=[];for(let m=0;m<u;m++)p[m]=[m,0];i[A.id]=p}for(let m=0;m<u;m++){let v=p[m];v[0]=m,v[1]=h[m]}p.sort(up);for(let m=0;m<8;m++)m<u&&p[m][1]?(o[m][0]=p[m][0],o[m][1]=p[m][1]):(o[m][0]=Number.MAX_SAFE_INTEGER,o[m][1]=0);o.sort(hp);let d=A.morphAttributes.position,M=A.morphAttributes.normal,f=0;for(let m=0;m<8;m++){let v=o[m],P=v[0],y=v[1];P!==Number.MAX_SAFE_INTEGER&&y?(d&&A.getAttribute("morphTarget"+m)!==d[P]&&A.setAttribute("morphTarget"+m,d[P]),M&&A.getAttribute("morphNormal"+m)!==M[P]&&A.setAttribute("morphNormal"+m,M[P]),n[m]=y,f+=y):(d&&A.hasAttribute("morphTarget"+m)===!0&&A.deleteAttribute("morphTarget"+m),M&&A.hasAttribute("morphNormal"+m)===!0&&A.deleteAttribute("morphNormal"+m),n[m]=0)}let g=A.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",n)}}}}function dp(r,t,e,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),e.remove(o.instanceMatrix),o.instanceColor!==null&&e.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,A=t.get(a,l);if(n.get(A)!==o&&(t.update(A),n.set(A,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(e.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let c=a.skeleton;n.get(c)!==o&&(c.update(),n.set(c,o))}return A},dispose:function(){n=new WeakMap}}}var Kn=class extends Ne{constructor(t,e,i,n,s,a,o,l,A,c){if((c=c!==void 0?c:rn)!==rn&&c!==Xn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===rn&&(i=ii),i===void 0&&c===Xn&&(i=nn),super(null,n,s,a,o,l,c,i,A),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ae,this.minFilter=l!==void 0?l:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ih=new Ne,nh=new Kn(1,1);nh.compareFunction=515;var rh=new Os,sh=new Io,ah=new Gs,uc=[],pc=[],dc=new Float32Array(16),fc=new Float32Array(9),gc=new Float32Array(4);function er(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=uc[n];if(s===void 0&&(s=new Float32Array(n),uc[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ne(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function re(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function ia(r,t){let e=pc[t];e===void 0&&(e=new Int32Array(t),pc[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function fp(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function gp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;r.uniform2fv(this.addr,t),re(e,t)}}function mp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)e[0]===t.r&&e[1]===t.g&&e[2]===t.b||(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ne(e,t))return;r.uniform3fv(this.addr,t),re(e,t)}}function vp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;r.uniform4fv(this.addr,t),re(e,t)}}function Mp(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ne(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),re(e,t)}else{if(ne(e,i))return;gc.set(i),r.uniformMatrix2fv(this.addr,!1,gc),re(e,i)}}function Pp(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ne(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),re(e,t)}else{if(ne(e,i))return;fc.set(i),r.uniformMatrix3fv(this.addr,!1,fc),re(e,i)}}function xp(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ne(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),re(e,t)}else{if(ne(e,i))return;dc.set(i),r.uniformMatrix4fv(this.addr,!1,dc),re(e,i)}}function yp(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function wp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;r.uniform2iv(this.addr,t),re(e,t)}}function Dp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;r.uniform3iv(this.addr,t),re(e,t)}}function _p(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;r.uniform4iv(this.addr,t),re(e,t)}}function Ep(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function bp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;r.uniform2uiv(this.addr,t),re(e,t)}}function Bp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;r.uniform3uiv(this.addr,t),re(e,t)}}function Sp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;r.uniform4uiv(this.addr,t),re(e,t)}}function Cp(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?nh:ih;e.setTexture2D(t||s,n)}function Tp(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||sh,n)}function Ip(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ah,n)}function Rp(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||rh,n)}function Lp(r,t){r.uniform1fv(this.addr,t)}function zp(r,t){let e=er(t,this.size,2);r.uniform2fv(this.addr,e)}function Up(r,t){let e=er(t,this.size,3);r.uniform3fv(this.addr,e)}function Np(r,t){let e=er(t,this.size,4);r.uniform4fv(this.addr,e)}function Op(r,t){let e=er(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Fp(r,t){let e=er(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Qp(r,t){let e=er(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Hp(r,t){r.uniform1iv(this.addr,t)}function Gp(r,t){r.uniform2iv(this.addr,t)}function kp(r,t){r.uniform3iv(this.addr,t)}function Vp(r,t){r.uniform4iv(this.addr,t)}function Xp(r,t){r.uniform1uiv(this.addr,t)}function Wp(r,t){r.uniform2uiv(this.addr,t)}function Yp(r,t){r.uniform3uiv(this.addr,t)}function qp(r,t){r.uniform4uiv(this.addr,t)}function jp(r,t,e){let i=this.cache,n=t.length,s=ia(e,n);ne(i,s)||(r.uniform1iv(this.addr,s),re(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||ih,s[a])}function Jp(r,t,e){let i=this.cache,n=t.length,s=ia(e,n);ne(i,s)||(r.uniform1iv(this.addr,s),re(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||sh,s[a])}function Kp(r,t,e){let i=this.cache,n=t.length,s=ia(e,n);ne(i,s)||(r.uniform1iv(this.addr,s),re(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||ah,s[a])}function Zp(r,t,e){let i=this.cache,n=t.length,s=ia(e,n);ne(i,s)||(r.uniform1iv(this.addr,s),re(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||rh,s[a])}var zo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=function(n){switch(n){case 5126:return fp;case 35664:return gp;case 35665:return mp;case 35666:return vp;case 35674:return Mp;case 35675:return Pp;case 35676:return xp;case 5124:case 35670:return yp;case 35667:case 35671:return wp;case 35668:case 35672:return Dp;case 35669:case 35673:return _p;case 5125:return Ep;case 36294:return bp;case 36295:return Bp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Rp}}(e.type)}},Uo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=function(n){switch(n){case 5126:return Lp;case 35664:return zp;case 35665:return Up;case 35666:return Np;case 35674:return Op;case 35675:return Fp;case 35676:return Qp;case 5124:case 35670:return Hp;case 35667:case 35671:return Gp;case 35668:case 35672:return kp;case 35669:case 35673:return Vp;case 5125:return Xp;case 36294:return Wp;case 36295:return Yp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}(e.type)}},No=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},po=/(\w+)(\])?(\[|\.)?/g;function mc(r,t){r.seq.push(t),r.map[t.id]=t}function $p(r,t,e){let i=r.name,n=i.length;for(po.lastIndex=0;;){let s=po.exec(i),a=po.lastIndex,o=s[1],l=s[2]==="]",A=s[3];if(l&&(o|=0),A===void 0||A==="["&&a+2===n){mc(e,A===void 0?new zo(o,r,t):new Uo(o,r,t));break}{let c=e.map[o];c===void 0&&(c=new No(o),mc(e,c)),e=c}}}var Gn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n);$p(s,t.getUniformLocation(e,s.name),this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function vc(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var td=37297,ed=0;function Mc(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+function(o,l){let A=o.split(`
`),c=[],h=Math.max(l-6,0),u=Math.min(l+6,A.length);for(let p=h;p<u;p++){let d=p+1;c.push(`${d===l?">":" "} ${d}: ${A[p]}`)}return c.join(`
`)}(r.getShaderSource(t),a)}return n}function id(r,t){let e=function(i){let n=Ht.getPrimaries(Ht.workingColorSpace),s=Ht.getPrimaries(i),a;switch(n===s?a="":n===Rs&&s===Is?a="LinearDisplayP3ToLinearSRGB":n===Is&&s===Rs&&(a="LinearSRGBToLinearDisplayP3"),i){case vi:case ea:return[a,"LinearTransferOETF"];case Zt:case BA:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function nd(r,t){let e;switch(t){case Bu:e="Linear";break;case Su:e="Reinhard";break;case Cu:e="OptimizedCineon";break;case Tu:e="ACESFilmic";break;case Ru:e="AgX";break;case Iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function On(r){return r!==""}function Pc(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(r){return r.replace(rd,ad)}var sd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ad(r,t){let e=Et[t];if(e===void 0){let i=sd.get(t);if(i===void 0)throw new Error("Can not resolve #include <"+t+">");e=Et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i)}return Oo(e)}var od=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(r){return r.replace(od,Ad)}function Ad(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function wc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ld(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=function(S){let U="SHADOWMAP_TYPE_BASIC";return S.shadowMapType===Fc?U="SHADOWMAP_TYPE_PCF":S.shadowMapType===EA?U="SHADOWMAP_TYPE_PCF_SOFT":S.shadowMapType===fi&&(U="SHADOWMAP_TYPE_VSM"),U}(e),A=function(S){let U="ENVMAP_TYPE_CUBE";if(S.envMap)switch(S.envMapMode){case kn:case Vn:U="ENVMAP_TYPE_CUBE";break;case ta:U="ENVMAP_TYPE_CUBE_UV"}return U}(e),c=function(S){let U="ENVMAP_MODE_REFLECTION";return S.envMap&&S.envMapMode===Vn&&(U="ENVMAP_MODE_REFRACTION"),U}(e),h=function(S){let U="ENVMAP_BLENDING_NONE";if(S.envMap)switch(S.combine){case Hc:U="ENVMAP_BLENDING_MULTIPLY";break;case Eu:U="ENVMAP_BLENDING_MIX";break;case bu:U="ENVMAP_BLENDING_ADD"}return U}(e),u=function(S){let U=S.envMapCubeUVHeight;if(U===null)return null;let N=Math.log2(U)-2,X=1/U;return{texelWidth:1/(3*Math.max(Math.pow(2,N),112)),texelHeight:X,maxMip:N}}(e),p=e.isWebGL2?"":function(S){return[S.extensionDerivatives||S.envMapCubeUVHeight||S.bumpMap||S.normalMapTangentSpace||S.clearcoatNormalMap||S.flatShading||S.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(S.extensionFragDepth||S.logarithmicDepthBuffer)&&S.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",S.extensionDrawBuffers&&S.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(S.extensionShaderTextureLOD||S.envMap||S.transmission)&&S.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(On).join(`
`)}(e),d=function(S){return[S.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(On).join(`
`)}(e),M=function(S){let U=[];for(let N in S){let X=S[N];X!==!1&&U.push("#define "+N+" "+X)}return U.join(`
`)}(s),f=n.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(On).join(`
`),g.length>0&&(g+=`
`),m=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(On).join(`
`),m.length>0&&(m+=`
`)):(g=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(On).join(`
`),m=[p,wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+A:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?Et.tonemapping_pars_fragment:"",e.toneMapping!==Ci?nd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,id("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(On).join(`
`)),a=Oo(a),a=Pc(a,e),a=xc(a,e),o=Oo(o),o=Pc(o,e),o=xc(o,e),a=yc(a),o=yc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let P=v+g+a,y=v+m+o,x=vc(n,n.VERTEX_SHADER,P),w=vc(n,n.FRAGMENT_SHADER,y);function I(S){if(r.debug.checkShaderErrors){let U=n.getProgramInfoLog(f).trim(),N=n.getShaderInfoLog(x).trim(),X=n.getShaderInfoLog(w).trim(),ot=!0,j=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(ot=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,f,x,w);else{let G=Mc(n,x,"vertex"),K=Mc(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+G+`
`+K)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):N!==""&&X!==""||(j=!1);j&&(S.diagnostics={runnable:ot,programLog:U,vertexShader:{log:N,prefix:g},fragmentShader:{log:X,prefix:m}})}n.deleteShader(x),n.deleteShader(w),L=new Gn(n,f),C=function(U,N){let X={},ot=U.getProgramParameter(N,U.ACTIVE_ATTRIBUTES);for(let j=0;j<ot;j++){let G=U.getActiveAttrib(N,j),K=G.name,H=1;G.type===U.FLOAT_MAT2&&(H=2),G.type===U.FLOAT_MAT3&&(H=3),G.type===U.FLOAT_MAT4&&(H=4),X[K]={type:G.type,location:U.getAttribLocation(N,K),locationSize:H}}return X}(n,f)}let L,C;n.attachShader(f,x),n.attachShader(f,w),e.index0AttributeName!==void 0?n.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f),this.getUniforms=function(){return L===void 0&&I(this),L},this.getAttributes=function(){return C===void 0&&I(this),C};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=n.getProgramParameter(f,td)),O},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ed++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=x,this.fragmentShader=w,this}var cd=0,Fo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Qo(t),e.set(t,i)),i}},Qo=class{constructor(t){this.id=cd++,this.code=t,this.usedTimes=0}};function hd(r,t,e,i,n,s,a){let o=new Fs,l=new Fo,A=[],c=n.isWebGL2,h=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,g,m,v,P){let y=v.fog,x=P.geometry,w=f.isMeshStandardMaterial?v.environment:null,I=(f.isMeshStandardMaterial?e:t).get(f.envMap||w),L=I&&I.mapping===ta?I.image.height:null,C=d[f.type];f.precision!==null&&(p=n.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let O=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,S=O!==void 0?O.length:0,U,N,X,ot,j=0;if(x.morphAttributes.position!==void 0&&(j=1),x.morphAttributes.normal!==void 0&&(j=2),x.morphAttributes.color!==void 0&&(j=3),C){let pe=ti[C];U=pe.vertexShader,N=pe.fragmentShader}else U=f.vertexShader,N=f.fragmentShader,l.update(f),X=l.getVertexShaderID(f),ot=l.getFragmentShaderID(f);let G=r.getRenderTarget(),K=P.isInstancedMesh===!0,H=P.isBatchedMesh===!0,q=!!f.map,lt=!!f.matcap,_=!!I,E=!!f.aoMap,Q=!!f.lightMap,$=!!f.bumpMap,R=!!f.normalMap,J=!!f.displacementMap,z=!!f.emissiveMap,F=!!f.metalnessMap,k=!!f.roughnessMap,it=f.anisotropy>0,et=f.clearcoat>0,D=f.iridescence>0,rt=f.sheen>0,V=f.transmission>0,W=it&&!!f.anisotropyMap,at=et&&!!f.clearcoatMap,ht=et&&!!f.clearcoatNormalMap,pt=et&&!!f.clearcoatRoughnessMap,ft=D&&!!f.iridescenceMap,_t=D&&!!f.iridescenceThicknessMap,gt=rt&&!!f.sheenColorMap,mt=rt&&!!f.sheenRoughnessMap,bt=!!f.specularMap,ae=!!f.specularColorMap,Pt=!!f.specularIntensityMap,Ut=V&&!!f.transmissionMap,Tt=V&&!!f.thicknessMap,kr=!!f.gradientMap,xn=!!f.alphaMap,Vr=f.alphaTest>0,Re=!!f.alphaHash,Ee=!!f.extensions,yn=!!x.attributes.uv1,Z=!!x.attributes.uv2,Xr=!!x.attributes.uv3,Ar=Ci;return f.toneMapped&&(G!==null&&G.isXRRenderTarget!==!0||(Ar=r.toneMapping)),{isWebGL2:c,shaderID:C,shaderType:f.type,shaderName:f.name,vertexShader:U,fragmentShader:N,defines:f.defines,customVertexShaderID:X,customFragmentShaderID:ot,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:H,instancing:K,instancingColor:K&&P.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:G===null?r.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:vi,map:q,matcap:lt,envMap:_,envMapMode:_&&I.mapping,envMapCubeUVHeight:L,aoMap:E,lightMap:Q,bumpMap:$,normalMap:R,displacementMap:u&&J,emissiveMap:z,normalMapObjectSpace:R&&f.normalMapType===1,normalMapTangentSpace:R&&f.normalMapType===0,metalnessMap:F,roughnessMap:k,anisotropy:it,anisotropyMap:W,clearcoat:et,clearcoatMap:at,clearcoatNormalMap:ht,clearcoatRoughnessMap:pt,iridescence:D,iridescenceMap:ft,iridescenceThicknessMap:_t,sheen:rt,sheenColorMap:gt,sheenRoughnessMap:mt,specularMap:bt,specularColorMap:ae,specularIntensityMap:Pt,transmission:V,transmissionMap:Ut,thicknessMap:Tt,gradientMap:kr,opaque:f.transparent===!1&&f.blending===1,alphaMap:xn,alphaTest:Vr,alphaHash:Re,combine:f.combine,mapUv:q&&M(f.map.channel),aoMapUv:E&&M(f.aoMap.channel),lightMapUv:Q&&M(f.lightMap.channel),bumpMapUv:$&&M(f.bumpMap.channel),normalMapUv:R&&M(f.normalMap.channel),displacementMapUv:J&&M(f.displacementMap.channel),emissiveMapUv:z&&M(f.emissiveMap.channel),metalnessMapUv:F&&M(f.metalnessMap.channel),roughnessMapUv:k&&M(f.roughnessMap.channel),anisotropyMapUv:W&&M(f.anisotropyMap.channel),clearcoatMapUv:at&&M(f.clearcoatMap.channel),clearcoatNormalMapUv:ht&&M(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&M(f.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&M(f.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&M(f.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&M(f.sheenColorMap.channel),sheenRoughnessMapUv:mt&&M(f.sheenRoughnessMap.channel),specularMapUv:bt&&M(f.specularMap.channel),specularColorMapUv:ae&&M(f.specularColorMap.channel),specularIntensityMapUv:Pt&&M(f.specularIntensityMap.channel),transmissionMapUv:Ut&&M(f.transmissionMap.channel),thicknessMapUv:Tt&&M(f.thicknessMap.channel),alphaMapUv:xn&&M(f.alphaMap.channel),vertexTangents:!!x.attributes.tangent&&(R||it),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,vertexUv1s:yn,vertexUv2s:Z,vertexUv3s:Xr,pointsUvs:P.isPoints===!0&&!!x.attributes.uv&&(q||xn),fog:!!y,useFog:f.fog===!0,fogExp2:y&&y.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:x.morphAttributes.position!==void 0,morphNormals:x.morphAttributes.normal!==void 0,morphColors:x.morphAttributes.color!==void 0,morphTargetsCount:S,morphTextureStride:j,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&m.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ar,useLegacyLights:r._useLegacyLights,decodeVideoTexture:q&&f.map.isVideoTexture===!0&&Ht.getTransfer(f.map.colorSpace)===Vt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===he,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:Ee&&f.extensions.derivatives===!0,extensionFragDepth:Ee&&f.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&f.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let g=[];if(f.shaderID?g.push(f.shaderID):(g.push(f.customVertexShaderID),g.push(f.customFragmentShaderID)),f.defines!==void 0)for(let m in f.defines)g.push(m),g.push(f.defines[m]);return f.isRawShaderMaterial===!1&&(function(m,v){m.push(v.precision),m.push(v.outputColorSpace),m.push(v.envMapMode),m.push(v.envMapCubeUVHeight),m.push(v.mapUv),m.push(v.alphaMapUv),m.push(v.lightMapUv),m.push(v.aoMapUv),m.push(v.bumpMapUv),m.push(v.normalMapUv),m.push(v.displacementMapUv),m.push(v.emissiveMapUv),m.push(v.metalnessMapUv),m.push(v.roughnessMapUv),m.push(v.anisotropyMapUv),m.push(v.clearcoatMapUv),m.push(v.clearcoatNormalMapUv),m.push(v.clearcoatRoughnessMapUv),m.push(v.iridescenceMapUv),m.push(v.iridescenceThicknessMapUv),m.push(v.sheenColorMapUv),m.push(v.sheenRoughnessMapUv),m.push(v.specularMapUv),m.push(v.specularColorMapUv),m.push(v.specularIntensityMapUv),m.push(v.transmissionMapUv),m.push(v.thicknessMapUv),m.push(v.combine),m.push(v.fogExp2),m.push(v.sizeAttenuation),m.push(v.morphTargetsCount),m.push(v.morphAttributeCount),m.push(v.numDirLights),m.push(v.numPointLights),m.push(v.numSpotLights),m.push(v.numSpotLightMaps),m.push(v.numHemiLights),m.push(v.numRectAreaLights),m.push(v.numDirLightShadows),m.push(v.numPointLightShadows),m.push(v.numSpotLightShadows),m.push(v.numSpotLightShadowsWithMaps),m.push(v.numLightProbes),m.push(v.shadowMapType),m.push(v.toneMapping),m.push(v.numClippingPlanes),m.push(v.numClipIntersection),m.push(v.depthPacking)}(g,f),function(m,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),m.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),m.push(o.mask)}(g,f),g.push(r.outputColorSpace)),g.push(f.customProgramCacheKey),g.join()},getUniforms:function(f){let g=d[f.type],m;if(g){let v=ti[g];m=SA.clone(v.uniforms)}else m=f.uniforms;return m},acquireProgram:function(f,g){let m;for(let v=0,P=A.length;v<P;v++){let y=A[v];if(y.cacheKey===g){m=y,++m.usedTimes;break}}return m===void 0&&(m=new ld(r,g,f,s),A.push(m)),m},releaseProgram:function(f){if(--f.usedTimes==0){let g=A.indexOf(f);A[g]=A[A.length-1],A.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:A,dispose:function(){l.dispose()}}}function ud(){let r=new WeakMap;return{get:function(t){let e=r.get(t);return e===void 0&&(e={},r.set(t,e)),e},remove:function(t){r.delete(t)},update:function(t,e,i){r.get(t)[e]=i},dispose:function(){r=new WeakMap}}}function pd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Dc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function _c(){let r=[],t=0,e=[],i=[],n=[];function s(a,o,l,A,c,h){let u=r[t];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:A,renderOrder:a.renderOrder,z:c,group:h},r[t]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=A,u.renderOrder=a.renderOrder,u.z=c,u.group=h),t++,u}return{opaque:e,transmissive:i,transparent:n,init:function(){t=0,e.length=0,i.length=0,n.length=0},push:function(a,o,l,A,c,h){let u=s(a,o,l,A,c,h);l.transmission>0?i.push(u):l.transparent===!0?n.push(u):e.push(u)},unshift:function(a,o,l,A,c,h){let u=s(a,o,l,A,c,h);l.transmission>0?i.unshift(u):l.transparent===!0?n.unshift(u):e.unshift(u)},finish:function(){for(let a=t,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){e.length>1&&e.sort(a||pd),i.length>1&&i.sort(o||Dc),n.length>1&&n.sort(o||Dc)}}}function dd(){let r=new WeakMap;return{get:function(t,e){let i=r.get(t),n;return i===void 0?(n=new _c,r.set(t,[n])):e>=i.length?(n=new _c,i.push(n)):n=i[e],n},dispose:function(){r=new WeakMap}}}function fd(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new dt};break;case"SpotLight":e={position:new b,direction:new b,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new b,halfWidth:new b,halfHeight:new b}}return r[t.id]=e,e}}}var gd=0;function md(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function vd(r,t){let e=new fd,i=function(){let l={};return{get:function(A){if(l[A.id]!==void 0)return l[A.id];let c;switch(A.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3}}return l[A.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);let s=new b,a=new yt,o=new yt;return{setup:function(l,A){let c=0,h=0,u=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let p=0,d=0,M=0,f=0,g=0,m=0,v=0,P=0,y=0,x=0,w=0;l.sort(md);let I=A===!0?Math.PI:1;for(let C=0,O=l.length;C<O;C++){let S=l[C],U=S.color,N=S.intensity,X=S.distance,ot=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)c+=U.r*N*I,h+=U.g*N*I,u+=U.b*N*I;else if(S.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(S.sh.coefficients[j],N);w++}else if(S.isDirectionalLight){let j=e.get(S);if(j.color.copy(S.color).multiplyScalar(S.intensity*I),S.castShadow){let G=S.shadow,K=i.get(S);K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=ot,n.directionalShadowMatrix[p]=S.shadow.matrix,m++}n.directional[p]=j,p++}else if(S.isSpotLight){let j=e.get(S);j.position.setFromMatrixPosition(S.matrixWorld),j.color.copy(U).multiplyScalar(N*I),j.distance=X,j.coneCos=Math.cos(S.angle),j.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),j.decay=S.decay,n.spot[M]=j;let G=S.shadow;if(S.map&&(n.spotLightMap[y]=S.map,y++,G.updateMatrices(S),S.castShadow&&x++),n.spotLightMatrix[M]=G.matrix,S.castShadow){let K=i.get(S);K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.spotShadow[M]=K,n.spotShadowMap[M]=ot,P++}M++}else if(S.isRectAreaLight){let j=e.get(S);j.color.copy(U).multiplyScalar(N),j.halfWidth.set(.5*S.width,0,0),j.halfHeight.set(0,.5*S.height,0),n.rectArea[f]=j,f++}else if(S.isPointLight){let j=e.get(S);if(j.color.copy(S.color).multiplyScalar(S.intensity*I),j.distance=S.distance,j.decay=S.decay,S.castShadow){let G=S.shadow,K=i.get(S);K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,n.pointShadow[d]=K,n.pointShadowMap[d]=ot,n.pointShadowMatrix[d]=S.shadow.matrix,v++}n.point[d]=j,d++}else if(S.isHemisphereLight){let j=e.get(S);j.skyColor.copy(S.color).multiplyScalar(N*I),j.groundColor.copy(S.groundColor).multiplyScalar(N*I),n.hemi[g]=j,g++}}f>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=u;let L=n.hash;L.directionalLength===p&&L.pointLength===d&&L.spotLength===M&&L.rectAreaLength===f&&L.hemiLength===g&&L.numDirectionalShadows===m&&L.numPointShadows===v&&L.numSpotShadows===P&&L.numSpotMaps===y&&L.numLightProbes===w||(n.directional.length=p,n.spot.length=M,n.rectArea.length=f,n.point.length=d,n.hemi.length=g,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=P+y-x,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=w,L.directionalLength=p,L.pointLength=d,L.spotLength=M,L.rectAreaLength=f,L.hemiLength=g,L.numDirectionalShadows=m,L.numPointShadows=v,L.numSpotShadows=P,L.numSpotMaps=y,L.numLightProbes=w,n.version=gd++)},setupView:function(l,A){let c=0,h=0,u=0,p=0,d=0,M=A.matrixWorldInverse;for(let f=0,g=l.length;f<g;f++){let m=l[f];if(m.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(M),c++}else if(m.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(M),v.direction.setFromMatrixPosition(m.matrixWorld),s.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(M),u++}else if(m.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(M),o.identity(),a.copy(m.matrixWorld),a.premultiply(M),o.extractRotation(a),v.halfWidth.set(.5*m.width,0,0),v.halfHeight.set(0,.5*m.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(m.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(M),h++}else if(m.isHemisphereLight){let v=n.hemi[d];v.direction.setFromMatrixPosition(m.matrixWorld),v.direction.transformDirection(M),d++}}},state:n}}function Ec(r,t){let e=new vd(r,t),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:function(s){e.setup(i,s)},setupLightsView:function(s){e.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){n.push(s)}}}function Md(r,t){let e=new WeakMap;return{get:function(i,n=0){let s=e.get(i),a;return s===void 0?(a=new Ec(r,t),e.set(i,[a])):n>=s.length?(a=new Ec(r,t),s.push(a)):a=s[n],a},dispose:function(){e=new WeakMap}}}var Ho=class extends an{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Go=class extends an{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pd(r,t,e){let i=new zi,n=new st,s=new st,a=new Gt,o=new Ho({depthPacking:3201}),l=new Go,A={},c=e.maxTextureSize,h={[Ii]:he,[he]:Ii,2:2},u=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let d=new Ot;d.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new kt(d,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let g=this.type;function m(x,w){let I=t.update(M);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ue(n.x,n.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(w,null,I,u,M,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(w,null,I,p,M,null)}function v(x,w,I,L){let C=null,O=I.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(O!==void 0)C=O;else if(C=I.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let S=C.uuid,U=w.uuid,N=A[S];N===void 0&&(N={},A[S]=N);let X=N[U];X===void 0&&(X=C.clone(),N[U]=X,w.addEventListener("dispose",y)),C=X}return C.visible=w.visible,C.wireframe=w.wireframe,C.side=L===fi?w.shadowSide!==null?w.shadowSide:w.side:w.shadowSide!==null?w.shadowSide:h[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,I.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(r.properties.get(C).light=I),C}function P(x,w,I,L,C){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&C===fi)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,x.matrixWorld);let S=t.update(x),U=x.material;if(Array.isArray(U)){let N=S.groups;for(let X=0,ot=N.length;X<ot;X++){let j=N[X],G=U[j.materialIndex];if(G&&G.visible){let K=v(x,G,L,C);x.onBeforeShadow(r,x,w,I,S,K,j),r.renderBufferDirect(I,null,S,K,x,j),x.onAfterShadow(r,x,w,I,S,K,j)}}}else if(U.visible){let N=v(x,U,L,C);x.onBeforeShadow(r,x,w,I,S,N,null),r.renderBufferDirect(I,null,S,N,x,null),x.onAfterShadow(r,x,w,I,S,N,null)}}let O=x.children;for(let S=0,U=O.length;S<U;S++)P(O[S],w,I,L,C)}function y(x){x.target.removeEventListener("dispose",y);for(let w in A){let I=A[w],L=x.target.uuid;L in I&&(I[L].dispose(),delete I[L])}}this.render=function(x,w,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||x.length===0)return;let L=r.getRenderTarget(),C=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),S=r.state;S.setBlending(0),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);let U=g!==fi&&this.type===fi,N=g===fi&&this.type!==fi;for(let X=0,ot=x.length;X<ot;X++){let j=x[X],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let K=G.getFrameExtents();if(n.multiply(K),s.copy(G.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/K.x),n.x=s.x*K.x,G.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/K.y),n.y=s.y*K.y,G.mapSize.y=s.y)),G.map===null||U===!0||N===!0){let q=this.type!==fi?{minFilter:Ae,magFilter:Ae}:{};G.map!==null&&G.map.dispose(),G.map=new ue(n.x,n.y,q),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let H=G.getViewportCount();for(let q=0;q<H;q++){let lt=G.getViewport(q);a.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),S.viewport(a),G.updateMatrices(j,q),i=G.getFrustum(),P(w,I,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===fi&&m(G,I),G.needsUpdate=!1}g=this.type,f.needsUpdate=!1,r.setRenderTarget(L,C,O)}}function xd(r,t,e){let i=e.isWebGL2,n=new function(){let D=!1,rt=new Gt,V=null,W=new Gt(0,0,0,0);return{setMask:function(at){V===at||D||(r.colorMask(at,at,at,at),V=at)},setLocked:function(at){D=at},setClear:function(at,ht,pt,ft,_t){_t===!0&&(at*=ft,ht*=ft,pt*=ft),rt.set(at,ht,pt,ft),W.equals(rt)===!1&&(r.clearColor(at,ht,pt,ft),W.copy(rt))},reset:function(){D=!1,V=null,W.set(-1,0,0,0)}}},s=new function(){let D=!1,rt=null,V=null,W=null;return{setTest:function(at){at?$(r.DEPTH_TEST):R(r.DEPTH_TEST)},setMask:function(at){rt===at||D||(r.depthMask(at),rt=at)},setFunc:function(at){if(V!==at){switch(at){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}V=at}},setLocked:function(at){D=at},setClear:function(at){W!==at&&(r.clearDepth(at),W=at)},reset:function(){D=!1,rt=null,V=null,W=null}}},a=new function(){let D=!1,rt=null,V=null,W=null,at=null,ht=null,pt=null,ft=null,_t=null;return{setTest:function(gt){D||(gt?$(r.STENCIL_TEST):R(r.STENCIL_TEST))},setMask:function(gt){rt===gt||D||(r.stencilMask(gt),rt=gt)},setFunc:function(gt,mt,bt){V===gt&&W===mt&&at===bt||(r.stencilFunc(gt,mt,bt),V=gt,W=mt,at=bt)},setOp:function(gt,mt,bt){ht===gt&&pt===mt&&ft===bt||(r.stencilOp(gt,mt,bt),ht=gt,pt=mt,ft=bt)},setLocked:function(gt){D=gt},setClear:function(gt){_t!==gt&&(r.clearStencil(gt),_t=gt)},reset:function(){D=!1,rt=null,V=null,W=null,at=null,ht=null,pt=null,ft=null,_t=null}}},o=new WeakMap,l=new WeakMap,A={},c={},h=new WeakMap,u=[],p=null,d=!1,M=null,f=null,g=null,m=null,v=null,P=null,y=null,x=new dt(0,0,0),w=0,I=!1,L=null,C=null,O=null,S=null,U=null,N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ot=0,j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=ot>=1):j.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=ot>=2);let G=null,K={},H=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),lt=new Gt().fromArray(H),_=new Gt().fromArray(q);function E(D,rt,V,W){let at=new Uint8Array(4),ht=r.createTexture();r.bindTexture(D,ht),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pt=0;pt<V;pt++)!i||D!==r.TEXTURE_3D&&D!==r.TEXTURE_2D_ARRAY?r.texImage2D(rt+pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,at):r.texImage3D(rt,0,r.RGBA,1,1,W,0,r.RGBA,r.UNSIGNED_BYTE,at);return ht}let Q={};function $(D){A[D]!==!0&&(r.enable(D),A[D]=!0)}function R(D){A[D]!==!1&&(r.disable(D),A[D]=!1)}Q[r.TEXTURE_2D]=E(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=E(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Q[r.TEXTURE_2D_ARRAY]=E(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=E(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),$(r.DEPTH_TEST),s.setFunc(3),k(!1),it(1),$(r.CULL_FACE),F(0);let J={[Zi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(i)J[103]=r.MIN,J[104]=r.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&(J[103]=D.MIN_EXT,J[104]=D.MAX_EXT)}let z={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[yo]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[wo]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function F(D,rt,V,W,at,ht,pt,ft,_t,gt){if(D!==0){if(d===!1&&($(r.BLEND),d=!0),D===5)at=at||rt,ht=ht||V,pt=pt||W,rt===f&&at===v||(r.blendEquationSeparate(J[rt],J[at]),f=rt,v=at),V===g&&W===m&&ht===P&&pt===y||(r.blendFuncSeparate(z[V],z[W],z[ht],z[pt]),g=V,m=W,P=ht,y=pt),ft.equals(x)!==!1&&_t===w||(r.blendColor(ft.r,ft.g,ft.b,_t),x.copy(ft),w=_t),M=D,I=!1;else if(D!==M||gt!==I){if(f===Zi&&v===Zi||(r.blendEquation(r.FUNC_ADD),f=Zi,v=Zi),gt)switch(D){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D)}else switch(D){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D)}g=null,m=null,P=null,y=null,x.set(0,0,0),w=0,M=D,I=gt}}else d===!0&&(R(r.BLEND),d=!1)}function k(D){L!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),L=D)}function it(D){D!==0?($(r.CULL_FACE),D!==C&&(D===1?r.cullFace(r.BACK):D===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):R(r.CULL_FACE),C=D}function et(D,rt,V){D?($(r.POLYGON_OFFSET_FILL),S===rt&&U===V||(r.polygonOffset(rt,V),S=rt,U=V)):R(r.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:s,stencil:a},enable:$,disable:R,bindFramebuffer:function(D,rt){return c[D]!==rt&&(r.bindFramebuffer(D,rt),c[D]=rt,i&&(D===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=rt),D===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=rt)),!0)},drawBuffers:function(D,rt){let V=u,W=!1;if(D)if(V=h.get(rt),V===void 0&&(V=[],h.set(rt,V)),D.isWebGLMultipleRenderTargets){let at=D.texture;if(V.length!==at.length||V[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,pt=at.length;ht<pt;ht++)V[ht]=r.COLOR_ATTACHMENT0+ht;V.length=at.length,W=!0}}else V[0]!==r.COLOR_ATTACHMENT0&&(V[0]=r.COLOR_ATTACHMENT0,W=!0);else V[0]!==r.BACK&&(V[0]=r.BACK,W=!0);W&&(e.isWebGL2?r.drawBuffers(V):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))},useProgram:function(D){return p!==D&&(r.useProgram(D),p=D,!0)},setBlending:F,setMaterial:function(D,rt){D.side===2?R(r.CULL_FACE):$(r.CULL_FACE);let V=D.side===he;rt&&(V=!V),k(V),D.blending===1&&D.transparent===!1?F(0):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),n.setMask(D.colorWrite);let W=D.stencilWrite;a.setTest(W),W&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),et(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):R(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:k,setCullFace:it,setLineWidth:function(D){D!==O&&(X&&r.lineWidth(D),O=D)},setPolygonOffset:et,setScissorTest:function(D){D?$(r.SCISSOR_TEST):R(r.SCISSOR_TEST)},activeTexture:function(D){D===void 0&&(D=r.TEXTURE0+N-1),G!==D&&(r.activeTexture(D),G=D)},bindTexture:function(D,rt,V){V===void 0&&(V=G===null?r.TEXTURE0+N-1:G);let W=K[V];W===void 0&&(W={type:void 0,texture:void 0},K[V]=W),W.type===D&&W.texture===rt||(G!==V&&(r.activeTexture(V),G=V),r.bindTexture(D,rt||Q[D]),W.type=D,W.texture=rt)},unbindTexture:function(){let D=K[G];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}},updateUBOMapping:function(D,rt){let V=l.get(rt);V===void 0&&(V=new WeakMap,l.set(rt,V));let W=V.get(D);W===void 0&&(W=r.getUniformBlockIndex(rt,D.name),V.set(D,W))},uniformBlockBinding:function(D,rt){let V=l.get(rt).get(D);o.get(rt)!==V&&(r.uniformBlockBinding(rt,V,D.__bindingPointIndex),o.set(rt,V))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}},scissor:function(D){lt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),lt.copy(D))},viewport:function(D){_.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),_.copy(D))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),A={},G=null,K={},c={},h=new WeakMap,u=[],p=null,d=!1,M=null,f=null,g=null,m=null,v=null,P=null,y=null,x=new dt(0,0,0),w=0,I=!1,L=null,C=null,O=null,S=null,U=null,lt.set(0,0,r.canvas.width,r.canvas.height),_.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}}}function yd(r,t,e,i,n,s,a){let o=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,h,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(_,E){return p?new OffscreenCanvas(_,E):zs("canvas")}function M(_,E,Q,$){let R=1;if((_.width>$||_.height>$)&&(R=$/Math.max(_.width,_.height)),R<1||E===!0){if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap){let J=E?Co:Math.floor,z=J(R*_.width),F=J(R*_.height);h===void 0&&(h=d(z,F));let k=Q?d(z,F):h;return k.width=z,k.height=F,k.getContext("2d").drawImage(_,0,0,z,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+z+"x"+F+")."),k}return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_}return _}function f(_){return kl(_.width)&&kl(_.height)}function g(_,E){return _.generateMipmaps&&E&&_.minFilter!==Ae&&_.minFilter!==me}function m(_){r.generateMipmap(_)}function v(_,E,Q,$,R=!1){if(o===!1)return E;if(_!==null){if(r[_]!==void 0)return r[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let J=E;if(E===r.RED&&(Q===r.FLOAT&&(J=r.R32F),Q===r.HALF_FLOAT&&(J=r.R16F),Q===r.UNSIGNED_BYTE&&(J=r.R8)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(J=r.R8UI),Q===r.UNSIGNED_SHORT&&(J=r.R16UI),Q===r.UNSIGNED_INT&&(J=r.R32UI),Q===r.BYTE&&(J=r.R8I),Q===r.SHORT&&(J=r.R16I),Q===r.INT&&(J=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(J=r.RG32F),Q===r.HALF_FLOAT&&(J=r.RG16F),Q===r.UNSIGNED_BYTE&&(J=r.RG8)),E===r.RGBA){let z=R?Ts:Ht.getTransfer($);Q===r.FLOAT&&(J=r.RGBA32F),Q===r.HALF_FLOAT&&(J=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(J=z===Vt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return J!==r.R16F&&J!==r.R32F&&J!==r.RG16F&&J!==r.RG32F&&J!==r.RGBA16F&&J!==r.RGBA32F||t.get("EXT_color_buffer_float"),J}function P(_,E,Q){return g(_,Q)===!0||_.isFramebufferTexture&&_.minFilter!==Ae&&_.minFilter!==me?Math.log2(Math.max(E.width,E.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?E.mipmaps.length:1}function y(_){return _===Ae||_===ul||_===Oa?r.NEAREST:r.LINEAR}function x(_){let E=_.target;E.removeEventListener("dispose",x),function(Q){let $=i.get(Q);if($.__webglInit===void 0)return;let R=Q.source,J=u.get(R);if(J){let z=J[$.__cacheKey];z.usedTimes--,z.usedTimes===0&&I(Q),Object.keys(J).length===0&&u.delete(R)}i.remove(Q)}(E),E.isVideoTexture&&c.delete(E)}function w(_){let E=_.target;E.removeEventListener("dispose",w),function(Q){let $=Q.texture,R=i.get(Q),J=i.get($);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),Q.depthTexture&&Q.depthTexture.dispose(),Q.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(R.__webglFramebuffer[z]))for(let F=0;F<R.__webglFramebuffer[z].length;F++)r.deleteFramebuffer(R.__webglFramebuffer[z][F]);else r.deleteFramebuffer(R.__webglFramebuffer[z]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[z])}else{if(Array.isArray(R.__webglFramebuffer))for(let z=0;z<R.__webglFramebuffer.length;z++)r.deleteFramebuffer(R.__webglFramebuffer[z]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let z=0;z<R.__webglColorRenderbuffer.length;z++)R.__webglColorRenderbuffer[z]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[z]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(Q.isWebGLMultipleRenderTargets)for(let z=0,F=$.length;z<F;z++){let k=i.get($[z]);k.__webglTexture&&(r.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove($[z])}i.remove($),i.remove(Q)}(E)}function I(_){let E=i.get(_);r.deleteTexture(E.__webglTexture);let Q=_.source;delete u.get(Q)[E.__cacheKey],a.memory.textures--}let L=0;function C(_,E){let Q=i.get(_);if(_.isVideoTexture&&function($){let R=a.render.frame;c.get($)!==R&&(c.set($,R),$.update())}(_),_.isRenderTargetTexture===!1&&_.version>0&&Q.__version!==_.version){let $=_.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if($.complete!==!1)return void ot(Q,_,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}e.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}let O={[Eo]:r.REPEAT,[gi]:r.CLAMP_TO_EDGE,[bo]:r.MIRRORED_REPEAT},S={[Ae]:r.NEAREST,[ul]:r.NEAREST_MIPMAP_NEAREST,[Oa]:r.NEAREST_MIPMAP_LINEAR,[me]:r.LINEAR,[Lu]:r.LINEAR_MIPMAP_NEAREST,[Bs]:r.LINEAR_MIPMAP_LINEAR},U={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function N(_,E,Q){if(Q?(r.texParameteri(_,r.TEXTURE_WRAP_S,O[E.wrapS]),r.texParameteri(_,r.TEXTURE_WRAP_T,O[E.wrapT]),_!==r.TEXTURE_3D&&_!==r.TEXTURE_2D_ARRAY||r.texParameteri(_,r.TEXTURE_WRAP_R,O[E.wrapR]),r.texParameteri(_,r.TEXTURE_MAG_FILTER,S[E.magFilter]),r.texParameteri(_,r.TEXTURE_MIN_FILTER,S[E.minFilter])):(r.texParameteri(_,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(_,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),_!==r.TEXTURE_3D&&_!==r.TEXTURE_2D_ARRAY||r.texParameteri(_,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),E.wrapS===gi&&E.wrapT===gi||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(_,r.TEXTURE_MAG_FILTER,y(E.magFilter)),r.texParameteri(_,r.TEXTURE_MIN_FILTER,y(E.minFilter)),E.minFilter!==Ae&&E.minFilter!==me&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(_,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(_,r.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let $=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ae||E.minFilter!==Oa&&E.minFilter!==Bs||E.type===Si&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===Ri&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(r.texParameterf(_,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function X(_,E){let Q=!1;_.__webglInit===void 0&&(_.__webglInit=!0,E.addEventListener("dispose",x));let $=E.source,R=u.get($);R===void 0&&(R={},u.set($,R));let J=function(z){let F=[];return F.push(z.wrapS),F.push(z.wrapT),F.push(z.wrapR||0),F.push(z.magFilter),F.push(z.minFilter),F.push(z.anisotropy),F.push(z.internalFormat),F.push(z.format),F.push(z.type),F.push(z.generateMipmaps),F.push(z.premultiplyAlpha),F.push(z.flipY),F.push(z.unpackAlignment),F.push(z.colorSpace),F.join()}(E);if(J!==_.__cacheKey){R[J]===void 0&&(R[J]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),R[J].usedTimes++;let z=R[_.__cacheKey];z!==void 0&&(R[_.__cacheKey].usedTimes--,z.usedTimes===0&&I(E)),_.__cacheKey=J,_.__webglTexture=R[J].texture}return Q}function ot(_,E,Q){let $=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=r.TEXTURE_3D);let R=X(_,E),J=E.source;e.bindTexture($,_.__webglTexture,r.TEXTURE0+Q);let z=i.get(J);if(J.version!==z.__version||R===!0){e.activeTexture(r.TEXTURE0+Q);let F=Ht.getPrimaries(Ht.workingColorSpace),k=E.colorSpace===ei?null:Ht.getPrimaries(E.colorSpace),it=E.colorSpace===ei||F===k?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let et=function(mt){return!o&&(mt.wrapS!==gi||mt.wrapT!==gi||mt.minFilter!==Ae&&mt.minFilter!==me)}(E)&&f(E.image)===!1,D=M(E.image,et,!1,n.maxTextureSize);D=lt(E,D);let rt=f(D)||o,V=s.convert(E.format,E.colorSpace),W,at=s.convert(E.type),ht=v(E.internalFormat,V,at,E.colorSpace,E.isVideoTexture);N($,E,rt);let pt=E.mipmaps,ft=o&&E.isVideoTexture!==!0&&ht!==Jc,_t=z.__version===void 0||R===!0,gt=P(E,D,rt);if(E.isDepthTexture)ht=r.DEPTH_COMPONENT,o?ht=E.type===Si?r.DEPTH_COMPONENT32F:E.type===ii?r.DEPTH_COMPONENT24:E.type===nn?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:E.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===rn&&ht===r.DEPTH_COMPONENT&&E.type!==bA&&E.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ii,at=s.convert(E.type)),E.format===Xn&&ht===r.DEPTH_COMPONENT&&(ht=r.DEPTH_STENCIL,E.type!==nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=nn,at=s.convert(E.type))),_t&&(ft?e.texStorage2D(r.TEXTURE_2D,1,ht,D.width,D.height):e.texImage2D(r.TEXTURE_2D,0,ht,D.width,D.height,0,V,at,null));else if(E.isDataTexture)if(pt.length>0&&rt){ft&&_t&&e.texStorage2D(r.TEXTURE_2D,gt,ht,pt[0].width,pt[0].height);for(let mt=0,bt=pt.length;mt<bt;mt++)W=pt[mt],ft?e.texSubImage2D(r.TEXTURE_2D,mt,0,0,W.width,W.height,V,at,W.data):e.texImage2D(r.TEXTURE_2D,mt,ht,W.width,W.height,0,V,at,W.data);E.generateMipmaps=!1}else ft?(_t&&e.texStorage2D(r.TEXTURE_2D,gt,ht,D.width,D.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,D.width,D.height,V,at,D.data)):e.texImage2D(r.TEXTURE_2D,0,ht,D.width,D.height,0,V,at,D.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ft&&_t&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,ht,pt[0].width,pt[0].height,D.depth);for(let mt=0,bt=pt.length;mt<bt;mt++)W=pt[mt],E.format!==Se?V!==null?ft?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,W.width,W.height,D.depth,V,W.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,ht,W.width,W.height,D.depth,0,W.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,W.width,W.height,D.depth,V,at,W.data):e.texImage3D(r.TEXTURE_2D_ARRAY,mt,ht,W.width,W.height,D.depth,0,V,at,W.data)}else{ft&&_t&&e.texStorage2D(r.TEXTURE_2D,gt,ht,pt[0].width,pt[0].height);for(let mt=0,bt=pt.length;mt<bt;mt++)W=pt[mt],E.format!==Se?V!==null?ft?e.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,W.width,W.height,V,W.data):e.compressedTexImage2D(r.TEXTURE_2D,mt,ht,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage2D(r.TEXTURE_2D,mt,0,0,W.width,W.height,V,at,W.data):e.texImage2D(r.TEXTURE_2D,mt,ht,W.width,W.height,0,V,at,W.data)}else if(E.isDataArrayTexture)ft?(_t&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,ht,D.width,D.height,D.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,V,at,D.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,ht,D.width,D.height,D.depth,0,V,at,D.data);else if(E.isData3DTexture)ft?(_t&&e.texStorage3D(r.TEXTURE_3D,gt,ht,D.width,D.height,D.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,V,at,D.data)):e.texImage3D(r.TEXTURE_3D,0,ht,D.width,D.height,D.depth,0,V,at,D.data);else if(E.isFramebufferTexture){if(_t)if(ft)e.texStorage2D(r.TEXTURE_2D,gt,ht,D.width,D.height);else{let mt=D.width,bt=D.height;for(let ae=0;ae<gt;ae++)e.texImage2D(r.TEXTURE_2D,ae,ht,mt,bt,0,V,at,null),mt>>=1,bt>>=1}}else if(pt.length>0&&rt){ft&&_t&&e.texStorage2D(r.TEXTURE_2D,gt,ht,pt[0].width,pt[0].height);for(let mt=0,bt=pt.length;mt<bt;mt++)W=pt[mt],ft?e.texSubImage2D(r.TEXTURE_2D,mt,0,0,V,at,W):e.texImage2D(r.TEXTURE_2D,mt,ht,V,at,W);E.generateMipmaps=!1}else ft?(_t&&e.texStorage2D(r.TEXTURE_2D,gt,ht,D.width,D.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,V,at,D)):e.texImage2D(r.TEXTURE_2D,0,ht,V,at,D);g(E,rt)&&m($),z.__version=J.version,E.onUpdate&&E.onUpdate(E)}_.__version=E.version}function j(_,E,Q,$,R,J){let z=s.convert(Q.format,Q.colorSpace),F=s.convert(Q.type),k=v(Q.internalFormat,z,F,Q.colorSpace);if(!i.get(E).__hasExternalTextures){let it=Math.max(1,E.width>>J),et=Math.max(1,E.height>>J);R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY?e.texImage3D(R,J,k,it,et,E.depth,0,z,F,null):e.texImage2D(R,J,k,it,et,0,z,F,null)}e.bindFramebuffer(r.FRAMEBUFFER,_),q(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,R,i.get(Q).__webglTexture,0,H(E)):(R===r.TEXTURE_2D||R>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,R,i.get(Q).__webglTexture,J),e.bindFramebuffer(r.FRAMEBUFFER,null)}function G(_,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,_),E.depthBuffer&&!E.stencilBuffer){let $=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(Q||q(E)){let R=E.depthTexture;R&&R.isDepthTexture&&(R.type===Si?$=r.DEPTH_COMPONENT32F:R.type===ii&&($=r.DEPTH_COMPONENT24));let J=H(E);q(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,$,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,J,$,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,$,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,_)}else if(E.depthBuffer&&E.stencilBuffer){let $=H(E);Q&&q(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$,r.DEPTH24_STENCIL8,E.width,E.height):q(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,_)}else{let $=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let R=0;R<$.length;R++){let J=$[R],z=s.convert(J.format,J.colorSpace),F=s.convert(J.type),k=v(J.internalFormat,z,F,J.colorSpace),it=H(E);Q&&q(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,k,E.width,E.height):q(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,k,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,k,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function K(_){let E=i.get(_),Q=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");(function($,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,$),!R.depthTexture||!R.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(R.depthTexture).__webglTexture&&R.depthTexture.image.width===R.width&&R.depthTexture.image.height===R.height||(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),C(R.depthTexture,0);let J=i.get(R.depthTexture).__webglTexture,z=H(R);if(R.depthTexture.format===rn)q(R)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else{if(R.depthTexture.format!==Xn)throw new Error("Unknown depthTexture format");q(R)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0)}})(E.__webglFramebuffer,_)}else if(Q){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]=r.createRenderbuffer(),G(E.__webglDepthbuffer[$],_,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),G(E.__webglDepthbuffer,_,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function H(_){return Math.min(n.maxSamples,_.samples)}function q(_){let E=i.get(_);return o&&_.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function lt(_,E){let Q=_.colorSpace,$=_.format,R=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===Bo||Q!==vi&&Q!==ei&&(Ht.getTransfer(Q)===Vt?o===!1?t.has("EXT_sRGB")===!0&&$===Se?(_.format=Bo,_.minFilter=me,_.generateMipmaps=!1):E=Us.sRGBToLinear(E):$===Se&&R===mi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}this.allocateTextureUnit=function(){let _=L;return _>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+n.maxTextures),L+=1,_},this.resetTextureUnits=function(){L=0},this.setTexture2D=C,this.setTexture2DArray=function(_,E){let Q=i.get(_);_.version>0&&Q.__version!==_.version?ot(Q,_,E):e.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)},this.setTexture3D=function(_,E){let Q=i.get(_);_.version>0&&Q.__version!==_.version?ot(Q,_,E):e.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)},this.setTextureCube=function(_,E){let Q=i.get(_);_.version>0&&Q.__version!==_.version?function($,R,J){if(R.image.length!==6)return;let z=X($,R),F=R.source;e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+J);let k=i.get(F);if(F.version!==k.__version||z===!0){e.activeTexture(r.TEXTURE0+J);let it=Ht.getPrimaries(Ht.workingColorSpace),et=R.colorSpace===ei?null:Ht.getPrimaries(R.colorSpace),D=R.colorSpace===ei||it===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);let rt=R.isCompressedTexture||R.image[0].isCompressedTexture,V=R.image[0]&&R.image[0].isDataTexture,W=[];for(let Pt=0;Pt<6;Pt++)W[Pt]=rt||V?V?R.image[Pt].image:R.image[Pt]:M(R.image[Pt],!1,!0,n.maxCubemapSize),W[Pt]=lt(R,W[Pt]);let at=W[0],ht=f(at)||o,pt=s.convert(R.format,R.colorSpace),ft=s.convert(R.type),_t=v(R.internalFormat,pt,ft,R.colorSpace),gt=o&&R.isVideoTexture!==!0,mt=k.__version===void 0||z===!0,bt,ae=P(R,at,ht);if(N(r.TEXTURE_CUBE_MAP,R,ht),rt){gt&&mt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ae,_t,at.width,at.height);for(let Pt=0;Pt<6;Pt++){bt=W[Pt].mipmaps;for(let Ut=0;Ut<bt.length;Ut++){let Tt=bt[Ut];R.format!==Se?pt!==null?gt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ut,0,0,Tt.width,Tt.height,pt,Tt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ut,_t,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ut,0,0,Tt.width,Tt.height,pt,ft,Tt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ut,_t,Tt.width,Tt.height,0,pt,ft,Tt.data)}}}else{bt=R.mipmaps,gt&&mt&&(bt.length>0&&ae++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ae,_t,W[0].width,W[0].height));for(let Pt=0;Pt<6;Pt++)if(V){gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,W[Pt].width,W[Pt].height,pt,ft,W[Pt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,_t,W[Pt].width,W[Pt].height,0,pt,ft,W[Pt].data);for(let Ut=0;Ut<bt.length;Ut++){let Tt=bt[Ut].image[Pt].image;gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ut+1,0,0,Tt.width,Tt.height,pt,ft,Tt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ut+1,_t,Tt.width,Tt.height,0,pt,ft,Tt.data)}}else{gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,pt,ft,W[Pt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,_t,pt,ft,W[Pt]);for(let Ut=0;Ut<bt.length;Ut++){let Tt=bt[Ut];gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ut+1,0,0,pt,ft,Tt.image[Pt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ut+1,_t,pt,ft,Tt.image[Pt])}}}g(R,ht)&&m(r.TEXTURE_CUBE_MAP),k.__version=F.version,R.onUpdate&&R.onUpdate(R)}$.__version=R.version}(Q,_,E):e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)},this.rebindTextures=function(_,E,Q){let $=i.get(_);E!==void 0&&j($.__webglFramebuffer,_,_.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&K(_)},this.setupRenderTarget=function(_){let E=_.texture,Q=i.get(_),$=i.get(E);_.addEventListener("dispose",w),_.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=E.version,a.memory.textures++);let R=_.isWebGLCubeRenderTarget===!0,J=_.isWebGLMultipleRenderTargets===!0,z=f(_)||o;if(R){Q.__webglFramebuffer=[];for(let F=0;F<6;F++)if(o&&E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[F]=[];for(let k=0;k<E.mipmaps.length;k++)Q.__webglFramebuffer[F][k]=r.createFramebuffer()}else Q.__webglFramebuffer[F]=r.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let F=0;F<E.mipmaps.length;F++)Q.__webglFramebuffer[F]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(J)if(n.drawBuffers){let F=_.texture;for(let k=0,it=F.length;k<it;k++){let et=i.get(F[k]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&_.samples>0&&q(_)===!1){let F=J?E:[E];Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let k=0;k<F.length;k++){let it=F[k];Q.__webglColorRenderbuffer[k]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[k]);let et=s.convert(it.format,it.colorSpace),D=s.convert(it.type),rt=v(it.internalFormat,et,D,it.colorSpace,_.isXRRenderTarget===!0),V=H(_);r.renderbufferStorageMultisample(r.RENDERBUFFER,V,rt,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.RENDERBUFFER,Q.__webglColorRenderbuffer[k])}r.bindRenderbuffer(r.RENDERBUFFER,null),_.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),G(Q.__webglDepthRenderbuffer,_,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(R){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),N(r.TEXTURE_CUBE_MAP,E,z);for(let F=0;F<6;F++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let k=0;k<E.mipmaps.length;k++)j(Q.__webglFramebuffer[F][k],_,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,k);else j(Q.__webglFramebuffer[F],_,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);g(E,z)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){let F=_.texture;for(let k=0,it=F.length;k<it;k++){let et=F[k],D=i.get(et);e.bindTexture(r.TEXTURE_2D,D.__webglTexture),N(r.TEXTURE_2D,et,z),j(Q.__webglFramebuffer,_,et,r.COLOR_ATTACHMENT0+k,r.TEXTURE_2D,0),g(et,z)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let F=r.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(o?F=_.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(F,$.__webglTexture),N(F,E,z),o&&E.mipmaps&&E.mipmaps.length>0)for(let k=0;k<E.mipmaps.length;k++)j(Q.__webglFramebuffer[k],_,E,r.COLOR_ATTACHMENT0,F,k);else j(Q.__webglFramebuffer,_,E,r.COLOR_ATTACHMENT0,F,0);g(E,z)&&m(F),e.unbindTexture()}_.depthBuffer&&K(_)},this.updateRenderTargetMipmap=function(_){let E=f(_)||o,Q=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let $=0,R=Q.length;$<R;$++){let J=Q[$];if(g(J,E)){let z=_.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,F=i.get(J).__webglTexture;e.bindTexture(z,F),m(z),e.unbindTexture()}}},this.updateMultisampleRenderTarget=function(_){if(o&&_.samples>0&&q(_)===!1){let E=_.isWebGLMultipleRenderTargets?_.texture:[_.texture],Q=_.width,$=_.height,R=r.COLOR_BUFFER_BIT,J=[],z=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=i.get(_),k=_.isWebGLMultipleRenderTargets===!0;if(k)for(let it=0;it<E.length;it++)e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let it=0;it<E.length;it++){J.push(r.COLOR_ATTACHMENT0+it),_.depthBuffer&&J.push(z);let et=F.__ignoreDepthValues!==void 0&&F.__ignoreDepthValues;if(et===!1&&(_.depthBuffer&&(R|=r.DEPTH_BUFFER_BIT),_.stencilBuffer&&(R|=r.STENCIL_BUFFER_BIT)),k&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,F.__webglColorRenderbuffer[it]),et===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[z]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[z])),k){let D=i.get(E[it]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,D,0)}r.blitFramebuffer(0,0,Q,$,0,0,Q,$,R,r.NEAREST),A&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),k)for(let it=0;it<E.length;it++){e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,F.__webglColorRenderbuffer[it]);let et=i.get(E[it]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,et,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=j,this.useMultisampledRTT=q}function wd(r,t,e){let i=e.isWebGL2;return{convert:function(n,s=""){let a,o=Ht.getTransfer(s);if(n===mi)return r.UNSIGNED_BYTE;if(n===Vc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===bA)return r.UNSIGNED_SHORT;if(n===kc)return r.INT;if(n===ii)return r.UNSIGNED_INT;if(n===Si)return r.FLOAT;if(n===Ri)return i?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return r.ALPHA;if(n===Se)return r.RGBA;if(n===1024)return r.LUMINANCE;if(n===1025)return r.LUMINANCE_ALPHA;if(n===rn)return r.DEPTH_COMPONENT;if(n===Xn)return r.DEPTH_STENCIL;if(n===Bo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1028)return r.RED;if(n===Yc)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===qc)return r.RG_INTEGER;if(n===jc)return r.RGBA_INTEGER;if(n===Fa||n===Qa||n===Ha||n===Ga)if(o===Vt){if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===Fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=t.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===Fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===pl||n===dl||n===fl||n===gl){if(a=t.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===pl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===Jc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ml||n===vl){if(a=t.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===ml)return o===Vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===vl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===Ml||n===Pl||n===xl||n===yl||n===wl||n===Dl||n===_l||n===El||n===bl||n===Bl||n===Sl||n===Cl||n===Tl||n===Il){if(a=t.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===Ml)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return o===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===ka||n===Rl||n===Ll){if(a=t.get("EXT_texture_compression_bptc"),a===null)return null;if(n===ka)return o===Vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ll)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===zl||n===Ul||n===Nl){if(a=t.get("EXT_texture_compression_rgtc"),a===null)return null;if(n===ka)return a.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ul)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===nn?i?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}}}var ko=class extends ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},te=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dd={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,A=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(A&&t.hand){a=!0;for(let M of t.hand.values()){let f=e.getJointPose(M,i),g=this._getHandJoint(A,M);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let c=A.joints["index-finger-tip"],h=A.joints["thumb-tip"],u=c.position.distanceTo(h.position),p=.02,d=.005;A.inputState.pinching&&u>p+d?(A.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!A.inputState.pinching&&u<=p-d&&(A.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),A!==null&&(A.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Vo=class extends Li{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,A=null,c=null,h=null,u=null,p=null,d=null,M=e.getContextAttributes(),f=null,g=null,m=[],v=[],P=new st,y=null,x=new ce;x.layers.enable(1),x.viewport=new Gt;let w=new ce;w.layers.enable(2),w.viewport=new Gt;let I=[x,w],L=new ko;L.layers.enable(1),L.layers.enable(2);let C=null,O=null;function S(H){let q=v.indexOf(H.inputSource);if(q===-1)return;let lt=m[q];lt!==void 0&&(lt.update(H.inputSource,H.frame,A||a),lt.dispatchEvent({type:H.type,data:H.inputSource}))}function U(){n.removeEventListener("select",S),n.removeEventListener("selectstart",S),n.removeEventListener("selectend",S),n.removeEventListener("squeeze",S),n.removeEventListener("squeezestart",S),n.removeEventListener("squeezeend",S),n.removeEventListener("end",U),n.removeEventListener("inputsourceschange",N);for(let H=0;H<m.length;H++){let q=v[H];q!==null&&(v[H]=null,m[H].disconnect(q))}C=null,O=null,t.setRenderTarget(f),p=null,u=null,h=null,n=null,g=null,K.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}function N(H){for(let q=0;q<H.removed.length;q++){let lt=H.removed[q],_=v.indexOf(lt);_>=0&&(v[_]=null,m[_].disconnect(lt))}for(let q=0;q<H.added.length;q++){let lt=H.added[q],_=v.indexOf(lt);if(_===-1){for(let Q=0;Q<m.length;Q++){if(Q>=v.length){v.push(lt),_=Q;break}if(v[Q]===null){v[Q]=lt,_=Q;break}}if(_===-1)break}let E=m[_];E&&E.connect(lt)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let q=m[H];return q===void 0&&(q=new Pr,m[H]=q),q.getTargetRaySpace()},this.getControllerGrip=function(H){let q=m[H];return q===void 0&&(q=new Pr,m[H]=q),q.getGripSpace()},this.getHand=function(H){let q=m[H];return q===void 0&&(q=new Pr,m[H]=q),q.getHandSpace()},this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return A||a},this.setReferenceSpace=function(H){A=H},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return d},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(f=t.getRenderTarget(),n.addEventListener("select",S),n.addEventListener("selectstart",S),n.addEventListener("selectend",S),n.addEventListener("squeeze",S),n.addEventListener("squeezestart",S),n.addEventListener("squeezeend",S),n.addEventListener("end",U),n.addEventListener("inputsourceschange",N),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(P),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let q={antialias:n.renderState.layers!==void 0||M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,e,q),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new ue(p.framebufferWidth,p.framebufferHeight,{format:Se,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let q=null,lt=null,_=null;M.depth&&(_=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=M.stencil?Xn:rn,lt=M.stencil?nn:ii);let E={colorFormat:e.RGBA8,depthFormat:_,scaleFactor:s};h=new XRWebGLBinding(n,e),u=h.createProjectionLayer(E),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),g=new ue(u.textureWidth,u.textureHeight,{format:Se,type:mi,depthTexture:new Kn(u.textureWidth,u.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0}),t.properties.get(g).__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),A=null,a=await n.requestReferenceSpace(o),K.setContext(n),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let X=new b,ot=new b;function j(H,q){q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;L.near=w.near=x.near=H.near,L.far=w.far=x.far=H.far,C===L.near&&O===L.far||(n.updateRenderState({depthNear:L.near,depthFar:L.far}),C=L.near,O=L.far);let q=H.parent,lt=L.cameras;j(L,q);for(let _=0;_<lt.length;_++)j(lt[_],q);lt.length===2?function(_,E,Q){X.setFromMatrixPosition(E.matrixWorld),ot.setFromMatrixPosition(Q.matrixWorld);let $=X.distanceTo(ot),R=E.projectionMatrix.elements,J=Q.projectionMatrix.elements,z=R[14]/(R[10]-1),F=R[14]/(R[10]+1),k=(R[9]+1)/R[5],it=(R[9]-1)/R[5],et=(R[8]-1)/R[0],D=(J[8]+1)/J[0],rt=z*et,V=z*D,W=$/(-et+D),at=W*-et;E.matrixWorld.decompose(_.position,_.quaternion,_.scale),_.translateX(at),_.translateZ(W),_.matrixWorld.compose(_.position,_.quaternion,_.scale),_.matrixWorldInverse.copy(_.matrixWorld).invert();let ht=z+W,pt=F+W,ft=rt-at,_t=V+($-at),gt=k*F/pt*ht,mt=it*F/pt*ht;_.projectionMatrix.makePerspective(ft,_t,gt,mt,ht,pt),_.projectionMatrixInverse.copy(_.projectionMatrix).invert()}(L,x,w):L.projectionMatrix.copy(x.projectionMatrix),function(_,E,Q){Q===null?_.matrix.copy(E.matrixWorld):(_.matrix.copy(Q.matrixWorld),_.matrix.invert(),_.matrix.multiply(E.matrixWorld)),_.matrix.decompose(_.position,_.quaternion,_.scale),_.updateMatrixWorld(!0),_.projectionMatrix.copy(E.projectionMatrix),_.projectionMatrixInverse.copy(E.projectionMatrixInverse),_.isPerspectiveCamera&&(_.fov=2*So*Math.atan(1/_.projectionMatrix.elements[5]),_.zoom=1)}(H,L,q)},this.getCamera=function(){return L},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let G=null,K=new eh;K.setAnimationLoop(function(H,q){if(c=q.getViewerPose(A||a),d=q,c!==null){let lt=c.views;p!==null&&(t.setRenderTargetFramebuffer(g,p.framebuffer),t.setRenderTarget(g));let _=!1;lt.length!==L.cameras.length&&(L.cameras.length=0,_=!0);for(let E=0;E<lt.length;E++){let Q=lt[E],$=null;if(p!==null)$=p.getViewport(Q);else{let J=h.getViewSubImage(u,Q);$=J.viewport,E===0&&(t.setRenderTargetTextures(g,J.colorTexture,u.ignoreDepthValues?void 0:J.depthStencilTexture),t.setRenderTarget(g))}let R=I[E];R===void 0&&(R=new ce,R.layers.enable(E),R.viewport=new Gt,I[E]=R),R.matrix.fromArray(Q.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Q.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set($.x,$.y,$.width,$.height),E===0&&(L.matrix.copy(R.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),_===!0&&L.cameras.push(R)}}for(let lt=0;lt<m.length;lt++){let _=v[lt],E=m[lt];_!==null&&E!==void 0&&E.update(_,q,A||a)}G&&G(H,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),d=null}),this.setAnimationLoop=function(H){G=H},this.dispose=function(){}}};function _d(r,t){function e(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,e(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,e(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,e(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===he&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,e(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===he&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,e(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,e(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,e(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=t.get(s).envMap;if(a&&(n.envMap.value=a,n.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap){n.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=s.lightMapIntensity*o,e(s.lightMap,n.lightMapTransform)}s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,e(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,th(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),function(A,c){c.gradientMap&&(A.gradientMap.value=c.gradientMap)}(n,s)):s.isMeshPhongMaterial?(i(n,s),function(A,c){A.specular.value.copy(c.specular),A.shininess.value=Math.max(c.shininess,1e-4)}(n,s)):s.isMeshStandardMaterial?(i(n,s),function(A,c){A.metalness.value=c.metalness,c.metalnessMap&&(A.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,A.metalnessMapTransform)),A.roughness.value=c.roughness,c.roughnessMap&&(A.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,A.roughnessMapTransform)),t.get(c).envMap&&(A.envMapIntensity.value=c.envMapIntensity)}(n,s),s.isMeshPhysicalMaterial&&function(A,c,h){A.ior.value=c.ior,c.sheen>0&&(A.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),A.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(A.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,A.sheenColorMapTransform)),c.sheenRoughnessMap&&(A.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,A.sheenRoughnessMapTransform))),c.clearcoat>0&&(A.clearcoat.value=c.clearcoat,A.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(A.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,A.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(A.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===he&&A.clearcoatNormalScale.value.negate())),c.iridescence>0&&(A.iridescence.value=c.iridescence,A.iridescenceIOR.value=c.iridescenceIOR,A.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(A.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,A.iridescenceMapTransform)),c.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),c.transmission>0&&(A.transmission.value=c.transmission,A.transmissionSamplerMap.value=h.texture,A.transmissionSamplerSize.value.set(h.width,h.height),c.transmissionMap&&(A.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,A.transmissionMapTransform)),A.thickness.value=c.thickness,c.thicknessMap&&(A.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=c.attenuationDistance,A.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(A.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(A.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=c.specularIntensity,A.specularColor.value.copy(c.specularColor),c.specularColorMap&&(A.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,A.specularColorMapTransform)),c.specularIntensityMap&&(A.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,A.specularIntensityMapTransform))}(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),function(A,c){c.matcap&&(A.matcap.value=c.matcap)}(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),function(A,c){let h=t.get(c).light;A.referencePosition.value.setFromMatrixPosition(h.matrixWorld),A.nearDistance.value=h.shadow.camera.near,A.farDistance.value=h.shadow.camera.far}(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?(function(A,c){A.diffuse.value.copy(c.color),A.opacity.value=c.opacity,c.map&&(A.map.value=c.map,e(c.map,A.mapTransform))}(n,s),s.isLineDashedMaterial&&function(A,c){A.dashSize.value=c.dashSize,A.totalSize.value=c.dashSize+c.gapSize,A.scale.value=c.scale}(n,s)):s.isPointsMaterial?function(A,c,h,u){A.diffuse.value.copy(c.color),A.opacity.value=c.opacity,A.size.value=c.size*h,A.scale.value=.5*u,c.map&&(A.map.value=c.map,e(c.map,A.uvTransform)),c.alphaMap&&(A.alphaMap.value=c.alphaMap,e(c.alphaMap,A.alphaMapTransform)),c.alphaTest>0&&(A.alphaTest.value=c.alphaTest)}(n,s,a,o):s.isSpriteMaterial?function(A,c){A.diffuse.value.copy(c.color),A.opacity.value=c.opacity,A.rotation.value=c.rotation,c.map&&(A.map.value=c.map,e(c.map,A.mapTransform)),c.alphaMap&&(A.alphaMap.value=c.alphaMap,e(c.alphaMap,A.alphaMapTransform)),c.alphaTest>0&&(A.alphaTest.value=c.alphaTest)}(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Ed(r,t,e,i){let n={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(h,u,p,d){let M=h.value,f=u+"_"+p;if(d[f]===void 0)return d[f]=typeof M=="number"||typeof M=="boolean"?M:M.clone(),!0;{let g=d[f];if(typeof M=="number"||typeof M=="boolean"){if(g!==M)return d[f]=M,!0}else if(g.equals(M)===!1)return g.copy(M),!0}return!1}function A(h){let u={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(u.boundary=4,u.storage=4):h.isVector2?(u.boundary=8,u.storage=8):h.isVector3||h.isColor?(u.boundary=16,u.storage=12):h.isVector4?(u.boundary=16,u.storage=16):h.isMatrix3?(u.boundary=48,u.storage=48):h.isMatrix4?(u.boundary=64,u.storage=64):h.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",h),u}function c(h){let u=h.target;u.removeEventListener("dispose",c);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[u.id]),delete n[u.id],delete s[u.id]}return{bind:function(h,u){let p=u.program;i.uniformBlockBinding(h,p)},update:function(h,u){let p=n[h.id];p===void 0&&(function(f){let g=f.uniforms,m=0,v=16;for(let y=0,x=g.length;y<x;y++){let w=Array.isArray(g[y])?g[y]:[g[y]];for(let I=0,L=w.length;I<L;I++){let C=w[I],O=Array.isArray(C.value)?C.value:[C.value];for(let S=0,U=O.length;S<U;S++){let N=A(O[S]),X=m%v;X!==0&&v-X<N.boundary&&(m+=v-X),C.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=m,m+=N.storage}}}let P=m%v;P>0&&(m+=v-P),f.__size=m,f.__cache={}}(h),p=function(f){let g=function(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();f.__bindingPointIndex=g;let m=r.createBuffer(),v=f.__size,P=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,m),r.bufferData(r.UNIFORM_BUFFER,v,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,m),m}(h),n[h.id]=p,h.addEventListener("dispose",c));let d=u.program;i.updateUBOMapping(h,d);let M=t.render.frame;s[h.id]!==M&&(function(f){let g=n[f.id],m=f.uniforms,v=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let P=0,y=m.length;P<y;P++){let x=Array.isArray(m[P])?m[P]:[m[P]];for(let w=0,I=x.length;w<I;w++){let L=x[w];if(l(L,P,w,v)===!0){let C=L.__offset,O=Array.isArray(L.value)?L.value:[L.value],S=0;for(let U=0;U<O.length;U++){let N=O[U],X=A(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,C+S,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,S),S+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,C,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(h),s[h.id]=M)},dispose:function(){for(let h in n)r.deleteBuffer(n[h]);a=[],n={},s={}}}}var _r=class{constructor(t={}){let{canvas:e=Uu(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:A=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=t,u;this.isWebGLRenderer=!0,u=i!==null?i.getContextAttributes().alpha:a;let p=new Uint32Array(4),d=new Int32Array(4),M=null,f=null,g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=Ci,this.toneMappingExposure=1;let v=this,P=!1,y=0,x=0,w=null,I=-1,L=null,C=new Gt,O=new Gt,S=null,U=new dt(0),N=0,X=e.width,ot=e.height,j=1,G=null,K=null,H=new Gt(0,0,X,ot),q=new Gt(0,0,X,ot),lt=!1,_=new zi,E=!1,Q=!1,$=null,R=new yt,J=new st,z=new b,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function k(){return w===null?j:1}let it,et,D,rt,V,W,at,ht,pt,ft,_t,gt,mt,bt,ae,Pt,Ut,Tt,kr,xn,Vr,Re,Ee,yn,Z=i;function Xr(B,Y){for(let tt=0;tt<B.length;tt++){let At=B[tt],nt=e.getContext(At,Y);if(nt!==null)return nt}return null}try{let B={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:A,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xo}`),e.addEventListener("webglcontextlost",JA,!1),e.addEventListener("webglcontextrestored",KA,!1),e.addEventListener("webglcontextcreationerror",ZA,!1),Z===null){let Y=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Y.shift(),Z=Xr(Y,B),Z===null)throw Xr(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}function Ar(){it=new op(Z),et=new np(Z,it,t),it.init(et),Re=new wd(Z,it,et),D=new xd(Z,it,et),rt=new cp(Z),V=new ud,W=new yd(Z,it,D,V,et,Re,rt),at=new sp(v),ht=new ap(v),pt=new $u(Z,et),Ee=new ep(Z,it,pt,et),ft=new Ap(Z,pt,rt,Ee),_t=new dp(Z,ft,pt,rt),kr=new pp(Z,et,W),Pt=new rp(V),gt=new hd(v,at,ht,it,et,Ee,Pt),mt=new _d(v,V),bt=new dd,ae=new Md(it,et),Tt=new tp(v,at,ht,D,_t,u,l),Ut=new Pd(v,_t,et),yn=new Ed(Z,rt,et,D),xn=new ip(Z,it,rt,et),Vr=new lp(Z,it,rt,et),rt.programs=gt.programs,v.capabilities=et,v.extensions=it,v.properties=V,v.renderLists=bt,v.shadowMap=Ut,v.state=D,v.info=rt}Ar();let pe=new Vo(v,Z);function JA(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function KA(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let B=rt.autoReset,Y=Ut.enabled,tt=Ut.autoUpdate,At=Ut.needsUpdate,nt=Ut.type;Ar(),rt.autoReset=B,Ut.enabled=Y,Ut.autoUpdate=tt,Ut.needsUpdate=At,Ut.type=nt}function ZA(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function $A(B){let Y=B.target;Y.removeEventListener("dispose",$A),function(tt){(function(At){let nt=V.get(At).programs;nt!==void 0&&(nt.forEach(function(ut){gt.releaseProgram(ut)}),At.isShaderMaterial&&gt.releaseShaderCache(At))})(tt),V.remove(tt)}(Y)}function tl(B,Y,tt){B.transparent===!0&&B.side===2&&B.forceSinglePass===!1?(B.side=he,B.needsUpdate=!0,Yr(B,Y,tt),B.side=Ii,B.needsUpdate=!0,Yr(B,Y,tt),B.side=2):Yr(B,Y,tt)}this.xr=pe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let B=it.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=it.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(B){B!==void 0&&(j=B,this.setSize(X,ot,!1))},this.getSize=function(B){return B.set(X,ot)},this.setSize=function(B,Y,tt=!0){pe.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(X=B,ot=Y,e.width=Math.floor(B*j),e.height=Math.floor(Y*j),tt===!0&&(e.style.width=B+"px",e.style.height=Y+"px"),this.setViewport(0,0,B,Y))},this.getDrawingBufferSize=function(B){return B.set(X*j,ot*j).floor()},this.setDrawingBufferSize=function(B,Y,tt){X=B,ot=Y,j=tt,e.width=Math.floor(B*tt),e.height=Math.floor(Y*tt),this.setViewport(0,0,B,Y)},this.getCurrentViewport=function(B){return B.copy(C)},this.getViewport=function(B){return B.copy(H)},this.setViewport=function(B,Y,tt,At){B.isVector4?H.set(B.x,B.y,B.z,B.w):H.set(B,Y,tt,At),D.viewport(C.copy(H).multiplyScalar(j).floor())},this.getScissor=function(B){return B.copy(q)},this.setScissor=function(B,Y,tt,At){B.isVector4?q.set(B.x,B.y,B.z,B.w):q.set(B,Y,tt,At),D.scissor(O.copy(q).multiplyScalar(j).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(B){D.setScissorTest(lt=B)},this.setOpaqueSort=function(B){G=B},this.setTransparentSort=function(B){K=B},this.getClearColor=function(B){return B.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(B=!0,Y=!0,tt=!0){let At=0;if(B){let nt=!1;if(w!==null){let ut=w.texture.format;nt=ut===jc||ut===qc||ut===Yc}if(nt){let ut=w.texture.type,wt=ut===mi||ut===ii||ut===bA||ut===nn||ut===Vc||ut===Xc,Dt=Tt.getClearColor(),Bt=Tt.getClearAlpha(),Ct=Dt.r,It=Dt.g,Rt=Dt.b;wt?(p[0]=Ct,p[1]=It,p[2]=Rt,p[3]=Bt,Z.clearBufferuiv(Z.COLOR,0,p)):(d[0]=Ct,d[1]=It,d[2]=Rt,d[3]=Bt,Z.clearBufferiv(Z.COLOR,0,d))}else At|=Z.COLOR_BUFFER_BIT}Y&&(At|=Z.DEPTH_BUFFER_BIT),tt&&(At|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(At)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",JA,!1),e.removeEventListener("webglcontextrestored",KA,!1),e.removeEventListener("webglcontextcreationerror",ZA,!1),bt.dispose(),ae.dispose(),V.dispose(),at.dispose(),ht.dispose(),_t.dispose(),Ee.dispose(),yn.dispose(),gt.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",el),pe.removeEventListener("sessionend",il),$&&($.dispose(),$=null),ki.stop()},this.renderBufferDirect=function(B,Y,tt,At,nt,ut){Y===null&&(Y=F);let wt=nt.isMesh&&nt.matrixWorld.determinant()<0,Dt=function(ie,Le,we,Lt,Nt){Le.isScene!==!0&&(Le=F),W.resetTextureUnits();let lr=Le.fog,La=Lt.isMeshStandardMaterial?Le.environment:null,mu=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:vi,qr=(Lt.isMeshStandardMaterial?ht:at).get(Lt.envMap||La),vu=Lt.vertexColors===!0&&!!we.attributes.color&&we.attributes.color.itemSize===4,Mu=!!we.attributes.tangent&&(!!Lt.normalMap||Lt.anisotropy>0),Pu=!!we.morphAttributes.position,xu=!!we.morphAttributes.normal,yu=!!we.morphAttributes.color,Al=Ci;Lt.toneMapped&&(w!==null&&w.isXRRenderTarget!==!0||(Al=v.toneMapping));let ll=we.morphAttributes.position||we.morphAttributes.normal||we.morphAttributes.color,wu=ll!==void 0?ll.length:0,Ft=V.get(Lt),Du=f.state.lights;if(E===!0&&(Q===!0||ie!==L)){let ze=ie===L&&Lt.id===I;Pt.setState(Lt,ie,ze)}let He=!1;Lt.version===Ft.__version?Ft.needsLights&&Ft.lightsStateVersion!==Du.state.version||Ft.outputColorSpace!==mu||Nt.isBatchedMesh&&Ft.batching===!1?He=!0:Nt.isBatchedMesh||Ft.batching!==!0?Nt.isInstancedMesh&&Ft.instancing===!1?He=!0:Nt.isInstancedMesh||Ft.instancing!==!0?Nt.isSkinnedMesh&&Ft.skinning===!1?He=!0:Nt.isSkinnedMesh||Ft.skinning!==!0?Nt.isInstancedMesh&&Ft.instancingColor===!0&&Nt.instanceColor===null||Nt.isInstancedMesh&&Ft.instancingColor===!1&&Nt.instanceColor!==null||Ft.envMap!==qr||Lt.fog===!0&&Ft.fog!==lr?He=!0:Ft.numClippingPlanes===void 0||Ft.numClippingPlanes===Pt.numPlanes&&Ft.numIntersection===Pt.numIntersection?(Ft.vertexAlphas!==vu||Ft.vertexTangents!==Mu||Ft.morphTargets!==Pu||Ft.morphNormals!==xu||Ft.morphColors!==yu||Ft.toneMapping!==Al||et.isWebGL2===!0&&Ft.morphTargetsCount!==wu)&&(He=!0):He=!0:He=!0:He=!0:He=!0:(He=!0,Ft.__version=Lt.version);let Xi=Ft.currentProgram;He===!0&&(Xi=Yr(Lt,Le,Nt));let cl=!1,cr=!1,za=!1,de=Xi.getUniforms(),Wi=Ft.uniforms;if(D.useProgram(Xi.program)&&(cl=!0,cr=!0,za=!0),Lt.id!==I&&(I=Lt.id,cr=!0),cl||L!==ie){de.setValue(Z,"projectionMatrix",ie.projectionMatrix),de.setValue(Z,"viewMatrix",ie.matrixWorldInverse);let ze=de.map.cameraPosition;ze!==void 0&&ze.setValue(Z,z.setFromMatrixPosition(ie.matrixWorld)),et.logarithmicDepthBuffer&&de.setValue(Z,"logDepthBufFC",2/(Math.log(ie.far+1)/Math.LN2)),(Lt.isMeshPhongMaterial||Lt.isMeshToonMaterial||Lt.isMeshLambertMaterial||Lt.isMeshBasicMaterial||Lt.isMeshStandardMaterial||Lt.isShaderMaterial)&&de.setValue(Z,"isOrthographic",ie.isOrthographicCamera===!0),L!==ie&&(L=ie,cr=!0,za=!0)}if(Nt.isSkinnedMesh){de.setOptional(Z,Nt,"bindMatrix"),de.setOptional(Z,Nt,"bindMatrixInverse");let ze=Nt.skeleton;ze&&(et.floatVertexTextures?(ze.boneTexture===null&&ze.computeBoneTexture(),de.setValue(Z,"boneTexture",ze.boneTexture,W)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Nt.isBatchedMesh&&(de.setOptional(Z,Nt,"batchingTexture"),de.setValue(Z,"batchingTexture",Nt._matricesTexture,W));let Ua=we.morphAttributes;(Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0&&et.isWebGL2===!0)&&kr.update(Nt,we,Xi),(cr||Ft.receiveShadow!==Nt.receiveShadow)&&(Ft.receiveShadow=Nt.receiveShadow,de.setValue(Z,"receiveShadow",Nt.receiveShadow)),Lt.isMeshGouraudMaterial&&Lt.envMap!==null&&(Wi.envMap.value=qr,Wi.flipEnvMap.value=qr.isCubeTexture&&qr.isRenderTargetTexture===!1?-1:1),cr&&(de.setValue(Z,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&(Ge=za,($e=Wi).ambientLightColor.needsUpdate=Ge,$e.lightProbe.needsUpdate=Ge,$e.directionalLights.needsUpdate=Ge,$e.directionalLightShadows.needsUpdate=Ge,$e.pointLights.needsUpdate=Ge,$e.pointLightShadows.needsUpdate=Ge,$e.spotLights.needsUpdate=Ge,$e.spotLightShadows.needsUpdate=Ge,$e.rectAreaLights.needsUpdate=Ge,$e.hemisphereLights.needsUpdate=Ge),lr&&Lt.fog===!0&&mt.refreshFogUniforms(Wi,lr),mt.refreshMaterialUniforms(Wi,Lt,j,ot,$),Gn.upload(Z,al(Ft),Wi,W));var $e,Ge;if(Lt.isShaderMaterial&&Lt.uniformsNeedUpdate===!0&&(Gn.upload(Z,al(Ft),Wi,W),Lt.uniformsNeedUpdate=!1),Lt.isSpriteMaterial&&de.setValue(Z,"center",Nt.center),de.setValue(Z,"modelViewMatrix",Nt.modelViewMatrix),de.setValue(Z,"normalMatrix",Nt.normalMatrix),de.setValue(Z,"modelMatrix",Nt.matrixWorld),Lt.isShaderMaterial||Lt.isRawShaderMaterial){let ze=Lt.uniformsGroups;for(let Na=0,_u=ze.length;Na<_u;Na++)if(et.isWebGL2){let hl=ze[Na];yn.update(hl,Xi),yn.bind(hl,Xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xi}(B,Y,tt,At,nt);D.setMaterial(At,wt);let Bt=tt.index,Ct=1;if(At.wireframe===!0){if(Bt=ft.getWireframeAttribute(tt),Bt===void 0)return;Ct=2}let It=tt.drawRange,Rt=tt.attributes.position,qt=It.start*Ct,Qe=(It.start+It.count)*Ct;ut!==null&&(qt=Math.max(qt,ut.start*Ct),Qe=Math.min(Qe,(ut.start+ut.count)*Ct)),Bt!==null?(qt=Math.max(qt,0),Qe=Math.min(Qe,Bt.count)):Rt!=null&&(qt=Math.max(qt,0),Qe=Math.min(Qe,Rt.count));let li=Qe-qt;if(li<0||li===1/0)return;let Vi;Ee.setup(nt,At,Dt,tt,Bt);let jt=xn;if(Bt!==null&&(Vi=pt.get(Bt),jt=Vr,jt.setIndex(Vi)),nt.isMesh)At.wireframe===!0?(D.setLineWidth(At.wireframeLinewidth*k()),jt.setMode(Z.LINES)):jt.setMode(Z.TRIANGLES);else if(nt.isLine){let ie=At.linewidth;ie===void 0&&(ie=1),D.setLineWidth(ie*k()),nt.isLineSegments?jt.setMode(Z.LINES):nt.isLineLoop?jt.setMode(Z.LINE_LOOP):jt.setMode(Z.LINE_STRIP)}else nt.isPoints?jt.setMode(Z.POINTS):nt.isSprite&&jt.setMode(Z.TRIANGLES);if(nt.isBatchedMesh)jt.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else if(nt.isInstancedMesh)jt.renderInstances(qt,li,nt.count);else if(tt.isInstancedBufferGeometry){let ie=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Le=Math.min(tt.instanceCount,ie);jt.renderInstances(qt,li,Le)}else jt.render(qt,li)},this.compile=function(B,Y,tt=null){tt===null&&(tt=B),f=ae.get(tt),f.init(),m.push(f),tt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Y.layers)&&(f.pushLight(nt),nt.castShadow&&f.pushShadow(nt))}),B!==tt&&B.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Y.layers)&&(f.pushLight(nt),nt.castShadow&&f.pushShadow(nt))}),f.setupLights(v._useLegacyLights);let At=new Set;return B.traverse(function(nt){let ut=nt.material;if(ut)if(Array.isArray(ut))for(let wt=0;wt<ut.length;wt++){let Dt=ut[wt];tl(Dt,tt,nt),At.add(Dt)}else tl(ut,tt,nt),At.add(ut)}),m.pop(),f=null,At},this.compileAsync=function(B,Y,tt=null){let At=this.compile(B,Y,tt);return new Promise(nt=>{function ut(){At.forEach(function(wt){V.get(wt).currentProgram.isReady()&&At.delete(wt)}),At.size!==0?setTimeout(ut,10):nt(B)}it.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Ra=null;function el(){ki.stop()}function il(){ki.start()}let ki=new eh;function nl(B,Y,tt,At){if(B.visible===!1)return;if(B.layers.test(Y.layers)){if(B.isGroup)tt=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(Y);else if(B.isLight)f.pushLight(B),B.castShadow&&f.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||_.intersectsSprite(B)){At&&z.setFromMatrixPosition(B.matrixWorld).applyMatrix4(R);let ut=_t.update(B),wt=B.material;wt.visible&&M.push(B,ut,wt,tt,z.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||_.intersectsObject(B))){let ut=_t.update(B),wt=B.material;if(At&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),z.copy(B.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),z.copy(ut.boundingSphere.center)),z.applyMatrix4(B.matrixWorld).applyMatrix4(R)),Array.isArray(wt)){let Dt=ut.groups;for(let Bt=0,Ct=Dt.length;Bt<Ct;Bt++){let It=Dt[Bt],Rt=wt[It.materialIndex];Rt&&Rt.visible&&M.push(B,ut,Rt,tt,z.z,It)}}else wt.visible&&M.push(B,ut,wt,tt,z.z,null)}}let nt=B.children;for(let ut=0,wt=nt.length;ut<wt;ut++)nl(nt[ut],Y,tt,At)}function rl(B,Y,tt,At){let nt=B.opaque,ut=B.transmissive,wt=B.transparent;f.setupLightsView(tt),E===!0&&Pt.setGlobalState(v.clippingPlanes,tt),ut.length>0&&function(Dt,Bt,Ct,It){if((Ct.isScene===!0?Ct.overrideMaterial:null)!==null)return;let qt=et.isWebGL2;$===null&&($=new ue(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")?Ri:mi,minFilter:Bs,samples:qt?4:0})),v.getDrawingBufferSize(J),qt?$.setSize(J.x,J.y):$.setSize(Co(J.x),Co(J.y));let Qe=v.getRenderTarget();v.setRenderTarget($),v.getClearColor(U),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();let li=v.toneMapping;v.toneMapping=Ci,Wr(Dt,Ct,It),W.updateMultisampleRenderTarget($),W.updateRenderTargetMipmap($);let Vi=!1;for(let jt=0,ie=Bt.length;jt<ie;jt++){let Le=Bt[jt],we=Le.object,Lt=Le.geometry,Nt=Le.material,lr=Le.group;if(Nt.side===2&&we.layers.test(It.layers)){let La=Nt.side;Nt.side=he,Nt.needsUpdate=!0,sl(we,Ct,It,Lt,Nt,lr),Nt.side=La,Nt.needsUpdate=!0,Vi=!0}}Vi===!0&&(W.updateMultisampleRenderTarget($),W.updateRenderTargetMipmap($)),v.setRenderTarget(Qe),v.setClearColor(U,N),v.toneMapping=li}(nt,ut,Y,tt),At&&D.viewport(C.copy(At)),nt.length>0&&Wr(nt,Y,tt),ut.length>0&&Wr(ut,Y,tt),wt.length>0&&Wr(wt,Y,tt),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Wr(B,Y,tt){let At=Y.isScene===!0?Y.overrideMaterial:null;for(let nt=0,ut=B.length;nt<ut;nt++){let wt=B[nt],Dt=wt.object,Bt=wt.geometry,Ct=At===null?wt.material:At,It=wt.group;Dt.layers.test(tt.layers)&&sl(Dt,Y,tt,Bt,Ct,It)}}function sl(B,Y,tt,At,nt,ut){B.onBeforeRender(v,Y,tt,At,nt,ut),B.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),nt.onBeforeRender(v,Y,tt,At,B,ut),nt.transparent===!0&&nt.side===2&&nt.forceSinglePass===!1?(nt.side=he,nt.needsUpdate=!0,v.renderBufferDirect(tt,Y,At,nt,B,ut),nt.side=Ii,nt.needsUpdate=!0,v.renderBufferDirect(tt,Y,At,nt,B,ut),nt.side=2):v.renderBufferDirect(tt,Y,At,nt,B,ut),B.onAfterRender(v,Y,tt,At,nt,ut)}function Yr(B,Y,tt){Y.isScene!==!0&&(Y=F);let At=V.get(B),nt=f.state.lights,ut=f.state.shadowsArray,wt=nt.state.version,Dt=gt.getParameters(B,nt.state,ut,Y,tt),Bt=gt.getProgramCacheKey(Dt),Ct=At.programs;At.environment=B.isMeshStandardMaterial?Y.environment:null,At.fog=Y.fog,At.envMap=(B.isMeshStandardMaterial?ht:at).get(B.envMap||At.environment),Ct===void 0&&(B.addEventListener("dispose",$A),Ct=new Map,At.programs=Ct);let It=Ct.get(Bt);if(It!==void 0){if(At.currentProgram===It&&At.lightsStateVersion===wt)return ol(B,Dt),It}else Dt.uniforms=gt.getUniforms(B),B.onBuild(tt,Dt,v),B.onBeforeCompile(Dt,v),It=gt.acquireProgram(Dt,Bt),Ct.set(Bt,It),At.uniforms=Dt.uniforms;let Rt=At.uniforms;return(B.isShaderMaterial||B.isRawShaderMaterial)&&B.clipping!==!0||(Rt.clippingPlanes=Pt.uniform),ol(B,Dt),At.needsLights=function(qt){return qt.isMeshLambertMaterial||qt.isMeshToonMaterial||qt.isMeshPhongMaterial||qt.isMeshStandardMaterial||qt.isShadowMaterial||qt.isShaderMaterial&&qt.lights===!0}(B),At.lightsStateVersion=wt,At.needsLights&&(Rt.ambientLightColor.value=nt.state.ambient,Rt.lightProbe.value=nt.state.probe,Rt.directionalLights.value=nt.state.directional,Rt.directionalLightShadows.value=nt.state.directionalShadow,Rt.spotLights.value=nt.state.spot,Rt.spotLightShadows.value=nt.state.spotShadow,Rt.rectAreaLights.value=nt.state.rectArea,Rt.ltc_1.value=nt.state.rectAreaLTC1,Rt.ltc_2.value=nt.state.rectAreaLTC2,Rt.pointLights.value=nt.state.point,Rt.pointLightShadows.value=nt.state.pointShadow,Rt.hemisphereLights.value=nt.state.hemi,Rt.directionalShadowMap.value=nt.state.directionalShadowMap,Rt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Rt.spotShadowMap.value=nt.state.spotShadowMap,Rt.spotLightMatrix.value=nt.state.spotLightMatrix,Rt.spotLightMap.value=nt.state.spotLightMap,Rt.pointShadowMap.value=nt.state.pointShadowMap,Rt.pointShadowMatrix.value=nt.state.pointShadowMatrix),At.currentProgram=It,At.uniformsList=null,It}function al(B){if(B.uniformsList===null){let Y=B.currentProgram.getUniforms();B.uniformsList=Gn.seqWithValue(Y.seq,B.uniforms)}return B.uniformsList}function ol(B,Y){let tt=V.get(B);tt.outputColorSpace=Y.outputColorSpace,tt.batching=Y.batching,tt.instancing=Y.instancing,tt.instancingColor=Y.instancingColor,tt.skinning=Y.skinning,tt.morphTargets=Y.morphTargets,tt.morphNormals=Y.morphNormals,tt.morphColors=Y.morphColors,tt.morphTargetsCount=Y.morphTargetsCount,tt.numClippingPlanes=Y.numClippingPlanes,tt.numIntersection=Y.numClipIntersection,tt.vertexAlphas=Y.vertexAlphas,tt.vertexTangents=Y.vertexTangents,tt.toneMapping=Y.toneMapping}ki.setAnimationLoop(function(B){Ra&&Ra(B)}),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(B){Ra=B,pe.setAnimationLoop(B),B===null?ki.stop():ki.start()},pe.addEventListener("sessionstart",el),pe.addEventListener("sessionend",il),this.render=function(B,Y){if(Y!==void 0&&Y.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(P===!0)return;B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(Y),Y=pe.getCamera()),B.isScene===!0&&B.onBeforeRender(v,B,Y,w),f=ae.get(B,m.length),f.init(),m.push(f),R.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),_.setFromProjectionMatrix(R),Q=this.localClippingEnabled,E=Pt.init(this.clippingPlanes,Q),M=bt.get(B,g.length),M.init(),g.push(M),nl(B,Y,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(G,K),this.info.render.frame++,E===!0&&Pt.beginShadows();let tt=f.state.shadowsArray;if(Ut.render(tt,B,Y),E===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Tt.render(M,B),f.setupLights(v._useLegacyLights),Y.isArrayCamera){let At=Y.cameras;for(let nt=0,ut=At.length;nt<ut;nt++){let wt=At[nt];rl(M,B,wt,wt.viewport)}}else rl(M,B,Y);w!==null&&(W.updateMultisampleRenderTarget(w),W.updateRenderTargetMipmap(w)),B.isScene===!0&&B.onAfterRender(v,B,Y),Ee.resetDefaultState(),I=-1,L=null,m.pop(),f=m.length>0?m[m.length-1]:null,g.pop(),M=g.length>0?g[g.length-1]:null},this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(B,Y,tt){V.get(B.texture).__webglTexture=Y,V.get(B.depthTexture).__webglTexture=tt;let At=V.get(B);At.__hasExternalTextures=!0,At.__hasExternalTextures&&(At.__autoAllocateDepthBuffer=tt===void 0,At.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),At.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(B,Y){let tt=V.get(B);tt.__webglFramebuffer=Y,tt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(B,Y=0,tt=0){w=B,y=Y,x=tt;let At=!0,nt=null,ut=!1,wt=!1;if(B){let Dt=V.get(B);Dt.__useDefaultFramebuffer!==void 0?(D.bindFramebuffer(Z.FRAMEBUFFER,null),At=!1):Dt.__webglFramebuffer===void 0?W.setupRenderTarget(B):Dt.__hasExternalTextures&&W.rebindTextures(B,V.get(B.texture).__webglTexture,V.get(B.depthTexture).__webglTexture);let Bt=B.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(wt=!0);let Ct=V.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(nt=Array.isArray(Ct[Y])?Ct[Y][tt]:Ct[Y],ut=!0):nt=et.isWebGL2&&B.samples>0&&W.useMultisampledRTT(B)===!1?V.get(B).__webglMultisampledFramebuffer:Array.isArray(Ct)?Ct[tt]:Ct,C.copy(B.viewport),O.copy(B.scissor),S=B.scissorTest}else C.copy(H).multiplyScalar(j).floor(),O.copy(q).multiplyScalar(j).floor(),S=lt;if(D.bindFramebuffer(Z.FRAMEBUFFER,nt)&&et.drawBuffers&&At&&D.drawBuffers(B,nt),D.viewport(C),D.scissor(O),D.setScissorTest(S),ut){let Dt=V.get(B.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Dt.__webglTexture,tt)}else if(wt){let Dt=V.get(B.texture),Bt=Y||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Dt.__webglTexture,tt||0,Bt)}I=-1},this.readRenderTargetPixels=function(B,Y,tt,At,nt,ut,wt){if(!B||!B.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=V.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){D.bindFramebuffer(Z.FRAMEBUFFER,Dt);try{let Bt=B.texture,Ct=Bt.format,It=Bt.type;if(Ct!==Se&&Re.convert(Ct)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Rt=It===Ri&&(it.has("EXT_color_buffer_half_float")||et.isWebGL2&&it.has("EXT_color_buffer_float"));if(!(It===mi||Re.convert(It)===Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)||It===Si&&(et.isWebGL2||it.has("OES_texture_float")||it.has("WEBGL_color_buffer_float"))||Rt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Y>=0&&Y<=B.width-At&&tt>=0&&tt<=B.height-nt&&Z.readPixels(Y,tt,At,nt,Re.convert(Ct),Re.convert(It),ut)}finally{let Bt=w!==null?V.get(w).__webglFramebuffer:null;D.bindFramebuffer(Z.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(B,Y,tt=0){let At=Math.pow(2,-tt),nt=Math.floor(Y.image.width*At),ut=Math.floor(Y.image.height*At);W.setTexture2D(Y,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,tt,0,0,B.x,B.y,nt,ut),D.unbindTexture()},this.copyTextureToTexture=function(B,Y,tt,At=0){let nt=Y.image.width,ut=Y.image.height,wt=Re.convert(tt.format),Dt=Re.convert(tt.type);W.setTexture2D(tt,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,tt.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,tt.unpackAlignment),Y.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,At,B.x,B.y,nt,ut,wt,Dt,Y.image.data):Y.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,At,B.x,B.y,Y.mipmaps[0].width,Y.mipmaps[0].height,wt,Y.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,At,B.x,B.y,wt,Dt,Y.image),At===0&&tt.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(B,Y,tt,At,nt=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ut=B.max.x-B.min.x+1,wt=B.max.y-B.min.y+1,Dt=B.max.z-B.min.z+1,Bt=Re.convert(At.format),Ct=Re.convert(At.type),It;if(At.isData3DTexture)W.setTexture3D(At,0),It=Z.TEXTURE_3D;else{if(!At.isDataArrayTexture&&!At.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");W.setTexture2DArray(At,0),It=Z.TEXTURE_2D_ARRAY}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,At.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,At.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,At.unpackAlignment);let Rt=Z.getParameter(Z.UNPACK_ROW_LENGTH),qt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Qe=Z.getParameter(Z.UNPACK_SKIP_PIXELS),li=Z.getParameter(Z.UNPACK_SKIP_ROWS),Vi=Z.getParameter(Z.UNPACK_SKIP_IMAGES),jt=tt.isCompressedTexture?tt.mipmaps[nt]:tt.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,jt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,jt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,B.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,B.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,B.min.z),tt.isDataTexture||tt.isData3DTexture?Z.texSubImage3D(It,nt,Y.x,Y.y,Y.z,ut,wt,Dt,Bt,Ct,jt.data):tt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(It,nt,Y.x,Y.y,Y.z,ut,wt,Dt,Bt,jt.data)):Z.texSubImage3D(It,nt,Y.x,Y.y,Y.z,ut,wt,Dt,Bt,Ct,jt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Rt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,qt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Qe),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,li),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Vi),nt===0&&At.generateMipmaps&&Z.generateMipmap(It),D.unbindTexture()},this.initTexture=function(B){B.isCubeTexture?W.setTextureCube(B,0):B.isData3DTexture?W.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?W.setTexture2DArray(B,0):W.setTexture2D(B,0),D.unbindTexture()},this.resetState=function(){y=0,x=0,w=null,D.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===BA?"display-p3":"srgb",e.unpackColorSpace=Ht.workingColorSpace===ea?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Zt?sn:Kc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===sn?Zt:vi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Xo=class extends _r{};Xo.prototype.isWebGL1Renderer=!0;var on=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var i0=new b;var n0=new b,r0=new b,s0=new b,a0=new st,o0=new st,A0=new yt,l0=new b,c0=new b,h0=new b,u0=new st,p0=new st,d0=new st;var f0=new b,g0=new b;var m0=new b,v0=new Gt,M0=new Gt,P0=new b,x0=new yt,y0=new b,w0=new je,D0=new yt,_0=new Yn;var Vs=class extends Ne{constructor(t=null,e=1,i=1,n,s,a,o,l,A=1003,c=1003,h,u){super(null,a,o,l,A,c,n,s,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},E0=new yt,b0=new yt;var An=class extends Qt{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fn=new yt,bc=new yt,ms=[],Bc=new qe,bd=new yt,mr=new kt,vr=new je,ln=class extends kt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new An(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,bd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fn),Bc.copy(t.boundingBox).applyMatrix4(Fn),this.boundingBox.union(Bc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new je),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fn),vr.copy(t.boundingSphere).applyMatrix4(Fn),this.boundingSphere.union(vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(i),t.ray.intersectsSphere(vr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Fn),bc.multiplyMatrices(i,Fn),mr.matrixWorld=bc,mr.raycast(t,ms);for(let a=0,o=ms.length;a<o;a++){let l=ms[a];l.instanceId=s,l.object=this,e.push(l)}ms.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new An(new Float32Array(3*this.instanceMatrix.count),3)),e.toArray(this.instanceColor.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Wo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e){let i=this.pool,n=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let s=i[this.index];n.push(s),this.index++,s.start=t.start,s.count=t.count,s.z=e}reset(){this.list.length=0,this.index=0}};var B0=new yt,S0=new yt,C0=new yt,T0=new yt,I0=new zi,R0=new qe,L0=new je,z0=new b,U0=new Wo,N0=new kt;var O0=new b,F0=new b,Q0=new yt,H0=new Yn,G0=new je;var k0=new b,V0=new b;var Er=class extends an{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sc=new yt,Yo=new Yn,vs=new je,Ms=new b,Zn=class extends Pe{constructor(t=new Ot,e=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(n),vs.radius+=s,t.ray.intersectsSphere(vs)===!1)return;Sc.copy(n).invert(),Yo.copy(t.ray).applyMatrix4(Sc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,A=i.index,c=i.attributes.position;if(A!==null)for(let h=Math.max(0,a.start),u=Math.min(A.count,a.start+a.count);h<u;h++){let p=A.getX(h);Ms.fromBufferAttribute(c,p),Cc(Ms,p,l,n,t,e,this)}else for(let h=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);h<u;h++)Ms.fromBufferAttribute(c,h),Cc(Ms,h,l,n,t,e,this)}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Cc(r,t,e,i,n,s,a){let o=Yo.distanceSqToPoint(r);if(o<e){let l=new b;Yo.closestPointToPoint(r,l),l.applyMatrix4(i);let A=n.ray.origin.distanceTo(l);if(A<n.near||A>n.far)return;s.push({distance:A,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var Fe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;a=e||t*i[s-1];let o,l=0,A=s-1;for(;l<=A;)if(n=Math.floor(l+(A-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){A=n;break}A=n-1}if(n=A,i[n]===a)return n/(s-1);let c=i[n];return(n+(a-c)/(i[n+1]-c))/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new st:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new b,n=[],s=[],a=[],o=new b,l=new yt;for(let p=0;p<=t;p++){let d=p/t;n[p]=this.getTangentAt(d,new b)}s[0]=new b,a[0]=new b;let A=Number.MAX_VALUE,c=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=A&&(A=c,i.set(1,0,0)),h<=A&&(A=h,i.set(0,1,0)),u<=A&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(le(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,d))}a[p].crossVectors(n[p],s[p])}if(e===!0){let p=Math.acos(le(s[0].dot(s[t]),-1,1));p/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let d=1;d<=t;d++)s[d].applyMatrix4(l.makeRotationAxis(n[d],p*d)),a[d].crossVectors(n[d],s[d])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},br=class extends Fe{constructor(t=0,e=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let i=e||new st,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),A=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,p=A-this.aY;l=u*c-p*h+this.aX,A=u*h+p*c+this.aY}return i.set(l,A)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},qo=class extends br{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function TA(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,A){n(a,o,A*(o-s),A*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,A,c,h){let u=(a-s)/A-(o-s)/(A+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+h)+(l-o)/h;u*=c,p*=c,n(a,o,u,p)},calc:function(s){let a=s*s;return r+t*s+e*a+i*(a*s)}}}var Ps=new b,fo=new TA,go=new TA,mo=new TA,jo=class extends Fe{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new b){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o,l,A=Math.floor(a),c=a-A;this.closed?A+=A>0?0:(Math.floor(Math.abs(A)/s)+1)*s:c===0&&A===s-1&&(A=s-2,c=1),this.closed||A>0?o=n[(A-1)%s]:(Ps.subVectors(n[0],n[1]).add(n[0]),o=Ps);let h=n[A%s],u=n[(A+1)%s];if(this.closed||A+2<s?l=n[(A+2)%s]:(Ps.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=Ps),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,d=Math.pow(o.distanceToSquared(h),p),M=Math.pow(h.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(l),p);M<1e-4&&(M=1),d<1e-4&&(d=M),f<1e-4&&(f=M),fo.initNonuniformCatmullRom(o.x,h.x,u.x,l.x,d,M,f),go.initNonuniformCatmullRom(o.y,h.y,u.y,l.y,d,M,f),mo.initNonuniformCatmullRom(o.z,h.z,u.z,l.z,d,M,f)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(o.x,h.x,u.x,l.x,this.tension),go.initCatmullRom(o.y,h.y,u.y,l.y,this.tension),mo.initCatmullRom(o.z,h.z,u.z,l.z,this.tension));return i.set(fo.calc(c),go.calc(c),mo.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new b().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Tc(r,t,e,i,n){let s=.5*(i-t),a=.5*(n-e),o=r*r;return(2*e-2*i+s+a)*(r*o)+(-3*e+3*i-2*s-a)*o+s*r+e}function xr(r,t,e,i){return function(n,s){let a=1-n;return a*a*s}(r,t)+function(n,s){return 2*(1-n)*n*s}(r,e)+function(n,s){return n*n*s}(r,i)}function yr(r,t,e,i,n){return function(s,a){let o=1-s;return o*o*o*a}(r,t)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,e)+function(s,a){return 3*(1-s)*s*s*a}(r,i)+function(s,a){return s*s*s*a}(r,n)}var Xs=class extends Fe{constructor(t=new st,e=new st,i=new st,n=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new st){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(yr(t,n.x,s.x,a.x,o.x),yr(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jo=class extends Fe{constructor(t=new b,e=new b,i=new b,n=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new b){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(yr(t,n.x,s.x,a.x,o.x),yr(t,n.y,s.y,a.y,o.y),yr(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ws=class extends Fe{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends Fe{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ys=class extends Fe{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(xr(t,n.x,s.x,a.x),xr(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qs=class extends Fe{constructor(t=new b,e=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new b){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(xr(t,n.x,s.x,a.x),xr(t,n.y,s.y,a.y),xr(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},js=class extends Fe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],A=n[a],c=n[a>n.length-2?n.length-1:a+1],h=n[a>n.length-3?n.length-1:a+2];return i.set(Tc(o,l.x,A.x,c.x,h.x),Tc(o,l.y,A.y,c.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new st().fromArray(n))}return this}},Js=Object.freeze({__proto__:null,ArcCurve:qo,CatmullRomCurve3:jo,CubicBezierCurve:Xs,CubicBezierCurve3:Jo,EllipseCurve:br,LineCurve:Ws,LineCurve3:Ko,QuadraticBezierCurve:Ys,QuadraticBezierCurve3:qs,SplineCurve:js}),Zo=class extends Fe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Js[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),A=l===0?0:1-a/l;return o.getPointAt(A,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*t:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let A=0;A<l.length;A++){let c=l[A];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Js[n.type]().fromJSON(n))}return this}},Br=class extends Zo{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ws(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Ys(this.currentPoint.clone(),new st(t,e),new st(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new Xs(this.currentPoint.clone(),new st(t,e),new st(i,n),new st(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new js(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,l){let A=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+A,e+c,i,n,s,a,o,l),this}absellipse(t,e,i,n,s,a,o,l){let A=new br(t,e,i,n,s,a,o,l);if(this.curves.length>0){let h=A.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(A);let c=A.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ks=class r extends Ot{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=le(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],A=[],c=1/e,h=new b,u=new st,p=new b,d=new b,M=new b,f=0,g=0;for(let m=0;m<=t.length-1;m++)switch(m){case 0:f=t[m+1].x-t[m].x,g=t[m+1].y-t[m].y,p.x=1*g,p.y=-f,p.z=0*g,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:f=t[m+1].x-t[m].x,g=t[m+1].y-t[m].y,p.x=1*g,p.y=-f,p.z=0*g,d.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(d)}for(let m=0;m<=e;m++){let v=i+m*c*n,P=Math.sin(v),y=Math.cos(v);for(let x=0;x<=t.length-1;x++){h.x=t[x].x*P,h.y=t[x].y,h.z=t[x].x*y,a.push(h.x,h.y,h.z),u.x=m/e,u.y=x/(t.length-1),o.push(u.x,u.y);let w=l[3*x+0]*P,I=l[3*x+1],L=l[3*x+0]*y;A.push(w,I,L)}}for(let m=0;m<e;m++)for(let v=0;v<t.length-1;v++){let P=v+m*t.length,y=P,x=P+t.length,w=P+t.length+1,I=P+1;s.push(y,x,I),s.push(w,I,x)}this.setIndex(s),this.setAttribute("position",new vt(a,3)),this.setAttribute("uv",new vt(o,2)),this.setAttribute("normal",new vt(A,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},$o=class r extends Ks{constructor(t=1,e=1,i=4,n=8){let s=new Br;s.absarc(0,-e/2,t,1.5*Math.PI,0),s.absarc(0,e/2,t,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}},Ui=class r extends Ot{constructor(t=1,e=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],l=[],A=new b,c=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){let p=i+h/e*n;A.x=t*Math.cos(p),A.y=t*Math.sin(p),a.push(A.x,A.y,A.z),o.push(0,0,1),c.x=(a[u]/t+1)/2,c.y=(a[u+1]/t+1)/2,l.push(c.x,c.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(o,3)),this.setAttribute("uv",new vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},cn=class r extends Ot{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let A=this;n=Math.floor(n),s=Math.floor(s);let c=[],h=[],u=[],p=[],d=0,M=[],f=i/2,g=0;function m(v){let P=d,y=new st,x=new b,w=0,I=v===!0?t:e,L=v===!0?1:-1;for(let O=1;O<=n;O++)h.push(0,f*L,0),u.push(0,L,0),p.push(.5,.5),d++;let C=d;for(let O=0;O<=n;O++){let S=O/n*l+o,U=Math.cos(S),N=Math.sin(S);x.x=I*N,x.y=f*L,x.z=I*U,h.push(x.x,x.y,x.z),u.push(0,L,0),y.x=.5*U+.5,y.y=.5*N*L+.5,p.push(y.x,y.y),d++}for(let O=0;O<n;O++){let S=P+O,U=C+O;v===!0?c.push(U,U+1,S):c.push(U+1,U,S),w+=3}A.addGroup(g,w,v===!0?1:2),g+=w}(function(){let v=new b,P=new b,y=0,x=(e-t)/i;for(let w=0;w<=s;w++){let I=[],L=w/s,C=L*(e-t)+t;for(let O=0;O<=n;O++){let S=O/n,U=S*l+o,N=Math.sin(U),X=Math.cos(U);P.x=C*N,P.y=-L*i+f,P.z=C*X,h.push(P.x,P.y,P.z),v.set(N,x,X).normalize(),u.push(v.x,v.y,v.z),p.push(S,1-L),I.push(d++)}M.push(I)}for(let w=0;w<n;w++)for(let I=0;I<s;I++){let L=M[I][w],C=M[I+1][w],O=M[I+1][w+1],S=M[I][w+1];c.push(L,C,S),c.push(C,O,S),y+=6}A.addGroup(g,y,0),g+=y})(),a===!1&&(t>0&&m(!0),e>0&&m(!1)),this.setIndex(c),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sr=class r extends cn{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hn=class r extends Ot{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];function o(u,p,d,M){let f=M+1,g=[];for(let m=0;m<=f;m++){g[m]=[];let v=u.clone().lerp(d,m/f),P=p.clone().lerp(d,m/f),y=f-m;for(let x=0;x<=y;x++)g[m][x]=x===0&&m===f?v:v.clone().lerp(P,x/y)}for(let m=0;m<f;m++)for(let v=0;v<2*(f-m)-1;v++){let P=Math.floor(v/2);v%2==0?(l(g[m][P+1]),l(g[m+1][P]),l(g[m][P])):(l(g[m][P+1]),l(g[m+1][P+1]),l(g[m+1][P]))}}function l(u){s.push(u.x,u.y,u.z)}function A(u,p){let d=3*u;p.x=t[d+0],p.y=t[d+1],p.z=t[d+2]}function c(u,p,d,M){M<0&&u.x===1&&(a[p]=u.x-1),d.x===0&&d.z===0&&(a[p]=M/2/Math.PI+.5)}function h(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new b,d=new b,M=new b;for(let f=0;f<e.length;f+=3)A(e[f+0],p),A(e[f+1],d),A(e[f+2],M),o(p,d,M,u)})(n),function(u){let p=new b;for(let d=0;d<s.length;d+=3)p.x=s[d+0],p.y=s[d+1],p.z=s[d+2],p.normalize().multiplyScalar(u),s[d+0]=p.x,s[d+1]=p.y,s[d+2]=p.z}(i),function(){let u=new b;for(let d=0;d<s.length;d+=3){u.x=s[d+0],u.y=s[d+1],u.z=s[d+2];let M=h(u)/2/Math.PI+.5,f=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(M,1-f)}var p;(function(){let d=new b,M=new b,f=new b,g=new b,m=new st,v=new st,P=new st;for(let y=0,x=0;y<s.length;y+=9,x+=6){d.set(s[y+0],s[y+1],s[y+2]),M.set(s[y+3],s[y+4],s[y+5]),f.set(s[y+6],s[y+7],s[y+8]),m.set(a[x+0],a[x+1]),v.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),g.copy(d).add(M).add(f).divideScalar(3);let w=h(g);c(m,x+0,d,w),c(v,x+2,M,w),c(P,x+4,f,w)}})(),function(){for(let d=0;d<a.length;d+=6){let M=a[d+0],f=a[d+2],g=a[d+4],m=Math.max(M,f,g),v=Math.min(M,f,g);m>.9&&v<.1&&(M<.2&&(a[d+0]+=1),f<.2&&(a[d+2]+=1),g<.2&&(a[d+4]+=1))}}()}(),this.setAttribute("position",new vt(s,3)),this.setAttribute("normal",new vt(s.slice(),3)),this.setAttribute("uv",new vt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}},tA=class r extends hn{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},xs=new b,ys=new b,vo=new b,ws=new en,eA=class extends Ot{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let n=Math.pow(10,4),s=Math.cos(bs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,A=[0,0,0],c=["a","b","c"],h=new Array(3),u={},p=[];for(let d=0;d<l;d+=3){a?(A[0]=a.getX(d),A[1]=a.getX(d+1),A[2]=a.getX(d+2)):(A[0]=d,A[1]=d+1,A[2]=d+2);let{a:M,b:f,c:g}=ws;if(M.fromBufferAttribute(o,A[0]),f.fromBufferAttribute(o,A[1]),g.fromBufferAttribute(o,A[2]),ws.getNormal(vo),h[0]=`${Math.round(M.x*n)},${Math.round(M.y*n)},${Math.round(M.z*n)}`,h[1]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,h[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,h[0]!==h[1]&&h[1]!==h[2]&&h[2]!==h[0])for(let m=0;m<3;m++){let v=(m+1)%3,P=h[m],y=h[v],x=ws[c[m]],w=ws[c[v]],I=`${P}_${y}`,L=`${y}_${P}`;L in u&&u[L]?(vo.dot(u[L].normal)<=s&&(p.push(x.x,x.y,x.z),p.push(w.x,w.y,w.z)),u[L]=null):I in u||(u[I]={index0:A[m],index1:A[v],normal:vo.clone()})}}for(let d in u)if(u[d]){let{index0:M,index1:f}=u[d];xs.fromBufferAttribute(o,M),ys.fromBufferAttribute(o,f),p.push(xs.x,xs.y,xs.z),p.push(ys.x,ys.y,ys.z)}this.setAttribute("position",new vt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Zs=class extends Br{constructor(t){super(t),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Br().fromJSON(n))}return this}},Bd=function(r,t,e=2){let i=t&&t.length,n=i?t[0]*e:r.length,s=Ic(r,0,n,e,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,A,c,h,u,p;if(i&&(s=function(d,M,f,g){let m=[],v,P,y,x,w;for(v=0,P=M.length;v<P;v++)y=M[v]*g,x=v<P-1?M[v+1]*g:d.length,w=Ic(d,y,x,g,!1),w===w.next&&(w.steiner=!0),m.push(Ud(w));for(m.sort(Rd),v=0;v<m.length;v++)f=Ld(m[v],f);return f}(r,t,s,e)),r.length>80*e){o=A=r[0],l=c=r[1];for(let d=e;d<n;d+=e)h=r[d],u=r[d+1],h<o&&(o=h),u<l&&(l=u),h>A&&(A=h),u>c&&(c=u);p=Math.max(A-o,c-l),p=p!==0?32767/p:0}return Cr(s,a,e,o,l,p,0),a};function Ic(r,t,e,i,n){let s,a;if(n===function(o,l,A,c){let h=0;for(let u=l,p=A-c;u<A;u+=c)h+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return h}(r,t,e,i)>0)for(s=t;s<e;s+=i)a=Rc(s,r[s],r[s+1],a);else for(s=e-i;s>=t;s-=i)a=Rc(s,r[s],r[s+1],a);return a&&na(a,a.next)&&(Ir(a),a=a.next),a}function un(r,t){if(!r)return r;t||(t=r);let e,i=r;do if(e=!1,i.steiner||!na(i,i.next)&&Jt(i.prev,i,i.next)!==0)i=i.next;else{if(Ir(i),i=t=i.prev,i===i.next)break;e=!0}while(e||i!==t);return t}function Cr(r,t,e,i,n,s,a){if(!r)return;!a&&s&&function(c,h,u,p){let d=c;do d.z===0&&(d.z=iA(d.x,d.y,h,u,p)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,function(M){let f,g,m,v,P,y,x,w,I=1;do{for(g=M,M=null,P=null,y=0;g;){for(y++,m=g,x=0,f=0;f<I&&(x++,m=m.nextZ,m);f++);for(w=I;x>0||w>0&&m;)x!==0&&(w===0||!m||g.z<=m.z)?(v=g,g=g.nextZ,x--):(v=m,m=m.nextZ,w--),P?P.nextZ=v:M=v,v.prevZ=P,P=v;g=m}P.nextZ=null,I*=2}while(y>1)}(d)}(r,i,n,s);let o,l,A=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Cd(r,i,n,s):Sd(r))t.push(o.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),Ir(r),r=l.next,A=l.next;else if((r=l)===A){a?a===1?Cr(r=Td(un(r),t,e),t,e,i,n,s,2):a===2&&Id(r,t,e,i,n,s):Cr(un(r),t,e,i,n,s,1);break}}function Sd(r){let t=r.prev,e=r,i=r.next;if(Jt(t,e,i)>=0)return!1;let n=t.x,s=e.x,a=i.x,o=t.y,l=e.y,A=i.y,c=n<s?n<a?n:a:s<a?s:a,h=o<l?o<A?o:A:l<A?l:A,u=n>s?n>a?n:a:s>a?s:a,p=o>l?o>A?o:A:l>A?l:A,d=i.next;for(;d!==t;){if(d.x>=c&&d.x<=u&&d.y>=h&&d.y<=p&&Qn(n,o,s,l,a,A,d.x,d.y)&&Jt(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function Cd(r,t,e,i){let n=r.prev,s=r,a=r.next;if(Jt(n,s,a)>=0)return!1;let o=n.x,l=s.x,A=a.x,c=n.y,h=s.y,u=a.y,p=o<l?o<A?o:A:l<A?l:A,d=c<h?c<u?c:u:h<u?h:u,M=o>l?o>A?o:A:l>A?l:A,f=c>h?c>u?c:u:h>u?h:u,g=iA(p,d,t,e,i),m=iA(M,f,t,e,i),v=r.prevZ,P=r.nextZ;for(;v&&v.z>=g&&P&&P.z<=m;){if(v.x>=p&&v.x<=M&&v.y>=d&&v.y<=f&&v!==n&&v!==a&&Qn(o,c,l,h,A,u,v.x,v.y)&&Jt(v.prev,v,v.next)>=0||(v=v.prevZ,P.x>=p&&P.x<=M&&P.y>=d&&P.y<=f&&P!==n&&P!==a&&Qn(o,c,l,h,A,u,P.x,P.y)&&Jt(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;v&&v.z>=g;){if(v.x>=p&&v.x<=M&&v.y>=d&&v.y<=f&&v!==n&&v!==a&&Qn(o,c,l,h,A,u,v.x,v.y)&&Jt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;P&&P.z<=m;){if(P.x>=p&&P.x<=M&&P.y>=d&&P.y<=f&&P!==n&&P!==a&&Qn(o,c,l,h,A,u,P.x,P.y)&&Jt(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function Td(r,t,e){let i=r;do{let n=i.prev,s=i.next.next;!na(n,s)&&oh(n,i,i.next,s)&&Tr(n,s)&&Tr(s,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Ir(i),Ir(i.next),i=r=s),i=i.next}while(i!==r);return un(i)}function Id(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nd(a,o)){let l=Ah(a,o);return a=un(a,a.next),l=un(l,l.next),Cr(a,t,e,i,n,s,0),void Cr(l,t,e,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Rd(r,t){return r.x-t.x}function Ld(r,t){let e=function(n,s){let a,o=s,l=-1/0,A=n.x,c=n.y;do{if(c<=o.y&&c>=o.next.y&&o.next.y!==o.y){let f=o.x+(c-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=A&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===A))return a}o=o.next}while(o!==s);if(!a)return null;let h=a,u=a.x,p=a.y,d,M=1/0;o=a;do A>=o.x&&o.x>=u&&A!==o.x&&Qn(c<p?A:l,c,u,p,c<p?l:A,c,o.x,o.y)&&(d=Math.abs(c-o.y)/(A-o.x),Tr(o,n)&&(d<M||d===M&&(o.x>a.x||o.x===a.x&&zd(a,o)))&&(a=o,M=d)),o=o.next;while(o!==h);return a}(r,t);if(!e)return t;let i=Ah(e,r);return un(i,i.next),un(e,e.next)}function zd(r,t){return Jt(r.prev,r,t.prev)<0&&Jt(t.next,r,r.next)<0}function iA(r,t,e,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-e)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-i)*n|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function Ud(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Qn(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function Nd(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!function(e,i){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==i.i&&n.next.i!==i.i&&oh(n,n.next,e,i))return!0;n=n.next}while(n!==e);return!1}(r,t)&&(Tr(r,t)&&Tr(t,r)&&function(e,i){let n=e,s=!1,a=(e.x+i.x)/2,o=(e.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==e);return s}(r,t)&&(Jt(r.prev,r,t.prev)||Jt(r,t.prev,t))||na(r,t)&&Jt(r.prev,r,r.next)>0&&Jt(t.prev,t,t.next)>0)}function Jt(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function na(r,t){return r.x===t.x&&r.y===t.y}function oh(r,t,e,i){let n=_s(Jt(r,t,e)),s=_s(Jt(r,t,i)),a=_s(Jt(e,i,r)),o=_s(Jt(e,i,t));return n!==s&&a!==o||!(n!==0||!Ds(r,e,t))||!(s!==0||!Ds(r,i,t))||!(a!==0||!Ds(e,r,i))||!(o!==0||!Ds(e,t,i))}function Ds(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function _s(r){return r>0?1:r<0?-1:0}function Tr(r,t){return Jt(r.prev,r,r.next)<0?Jt(r,t,r.next)>=0&&Jt(r,r.prev,t)>=0:Jt(r,t,r.prev)<0||Jt(r,r.next,t)<0}function Ah(r,t){let e=new nA(r.i,r.x,r.y),i=new nA(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Rc(r,t,e,i){let n=new nA(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Ir(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function nA(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ti=class r{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return .5*i}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];Lc(t),zc(i,t);let a=t.length;e.forEach(Lc);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,zc(i,e[l]);let o=Bd(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Lc(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function zc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var rA=class r extends Ot{constructor(t=new Zs([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],s=[];for(let o=0,l=t.length;o<l;o++)a(t[o]);function a(o){let l=[],A=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,u=e.bevelEnabled===void 0||e.bevelEnabled,p=e.bevelThickness!==void 0?e.bevelThickness:.2,d=e.bevelSize!==void 0?e.bevelSize:p-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,m=e.UVGenerator!==void 0?e.UVGenerator:Od,v,P,y,x,w,I=!1;g&&(v=g.getSpacedPoints(c),I=!0,u=!1,P=g.computeFrenetFrames(c,!1),y=new b,x=new b,w=new b),u||(f=0,p=0,d=0,M=0);let L=o.extractPoints(A),C=L.shape,O=L.holes;if(!Ti.isClockWise(C)){C=C.reverse();for(let z=0,F=O.length;z<F;z++){let k=O[z];Ti.isClockWise(k)&&(O[z]=k.reverse())}}let S=Ti.triangulateShape(C,O),U=C;for(let z=0,F=O.length;z<F;z++){let k=O[z];C=C.concat(k)}function N(z,F,k){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(F,k)}let X=C.length,ot=S.length;function j(z,F,k){let it,et,D,rt=z.x-F.x,V=z.y-F.y,W=k.x-z.x,at=k.y-z.y,ht=rt*rt+V*V,pt=rt*at-V*W;if(Math.abs(pt)>Number.EPSILON){let ft=Math.sqrt(ht),_t=Math.sqrt(W*W+at*at),gt=F.x-V/ft,mt=F.y+rt/ft,bt=((k.x-at/_t-gt)*at-(k.y+W/_t-mt)*W)/(rt*at-V*W);it=gt+rt*bt-z.x,et=mt+V*bt-z.y;let ae=it*it+et*et;if(ae<=2)return new st(it,et);D=Math.sqrt(ae/2)}else{let ft=!1;rt>Number.EPSILON?W>Number.EPSILON&&(ft=!0):rt<-Number.EPSILON?W<-Number.EPSILON&&(ft=!0):Math.sign(V)===Math.sign(at)&&(ft=!0),ft?(it=-V,et=rt,D=Math.sqrt(ht)):(it=rt,et=V,D=Math.sqrt(ht/2))}return new st(it/D,et/D)}let G=[];for(let z=0,F=U.length,k=F-1,it=z+1;z<F;z++,k++,it++)k===F&&(k=0),it===F&&(it=0),G[z]=j(U[z],U[k],U[it]);let K=[],H,q=G.concat();for(let z=0,F=O.length;z<F;z++){let k=O[z];H=[];for(let it=0,et=k.length,D=et-1,rt=it+1;it<et;it++,D++,rt++)D===et&&(D=0),rt===et&&(rt=0),H[it]=j(k[it],k[D],k[rt]);K.push(H),q=q.concat(H)}for(let z=0;z<f;z++){let F=z/f,k=p*Math.cos(F*Math.PI/2),it=d*Math.sin(F*Math.PI/2)+M;for(let et=0,D=U.length;et<D;et++){let rt=N(U[et],G[et],it);E(rt.x,rt.y,-k)}for(let et=0,D=O.length;et<D;et++){let rt=O[et];H=K[et];for(let V=0,W=rt.length;V<W;V++){let at=N(rt[V],H[V],it);E(at.x,at.y,-k)}}}let lt=d+M;for(let z=0;z<X;z++){let F=u?N(C[z],q[z],lt):C[z];I?(x.copy(P.normals[0]).multiplyScalar(F.x),y.copy(P.binormals[0]).multiplyScalar(F.y),w.copy(v[0]).add(x).add(y),E(w.x,w.y,w.z)):E(F.x,F.y,0)}for(let z=1;z<=c;z++)for(let F=0;F<X;F++){let k=u?N(C[F],q[F],lt):C[F];I?(x.copy(P.normals[z]).multiplyScalar(k.x),y.copy(P.binormals[z]).multiplyScalar(k.y),w.copy(v[z]).add(x).add(y),E(w.x,w.y,w.z)):E(k.x,k.y,h/c*z)}for(let z=f-1;z>=0;z--){let F=z/f,k=p*Math.cos(F*Math.PI/2),it=d*Math.sin(F*Math.PI/2)+M;for(let et=0,D=U.length;et<D;et++){let rt=N(U[et],G[et],it);E(rt.x,rt.y,h+k)}for(let et=0,D=O.length;et<D;et++){let rt=O[et];H=K[et];for(let V=0,W=rt.length;V<W;V++){let at=N(rt[V],H[V],it);I?E(at.x,at.y+v[c-1].y,v[c-1].x+k):E(at.x,at.y,h+k)}}}function _(z,F){let k=z.length;for(;--k>=0;){let it=k,et=k-1;et<0&&(et=z.length-1);for(let D=0,rt=c+2*f;D<rt;D++){let V=X*D,W=X*(D+1);$(F+it+V,F+et+V,F+et+W,F+it+W)}}}function E(z,F,k){l.push(z),l.push(F),l.push(k)}function Q(z,F,k){R(z),R(F),R(k);let it=n.length/3,et=m.generateTopUV(i,n,it-3,it-2,it-1);J(et[0]),J(et[1]),J(et[2])}function $(z,F,k,it){R(z),R(F),R(it),R(F),R(k),R(it);let et=n.length/3,D=m.generateSideWallUV(i,n,et-6,et-3,et-2,et-1);J(D[0]),J(D[1]),J(D[3]),J(D[1]),J(D[2]),J(D[3])}function R(z){n.push(l[3*z+0]),n.push(l[3*z+1]),n.push(l[3*z+2])}function J(z){s.push(z.x),s.push(z.y)}(function(){let z=n.length/3;if(u){let F=0,k=X*F;for(let it=0;it<ot;it++){let et=S[it];Q(et[2]+k,et[1]+k,et[0]+k)}F=c+2*f,k=X*F;for(let it=0;it<ot;it++){let et=S[it];Q(et[0]+k,et[1]+k,et[2]+k)}}else{for(let F=0;F<ot;F++){let k=S[F];Q(k[2],k[1],k[0])}for(let F=0;F<ot;F++){let k=S[F];Q(k[0]+X*c,k[1]+X*c,k[2]+X*c)}}i.addGroup(z,n.length/3-z,0)})(),function(){let z=n.length/3,F=0;_(U,F),F+=U.length;for(let k=0,it=O.length;k<it;k++){let et=O[k];_(et,F),F+=et.length}i.addGroup(z,n.length/3-z,1)}()}this.setAttribute("position",new vt(n,3)),this.setAttribute("uv",new vt(s,2)),this.computeVertexNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return function(e,i,n){if(n.shapes=[],Array.isArray(e))for(let s=0,a=e.length;s<a;s++){let o=e[s];n.shapes.push(o.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,t)}static fromJSON(t,e){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let o=e[t.shapes[s]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Js[n.type]().fromJSON(n)),new r(i,t.options)}},Od={generateTopUV:function(r,t,e,i,n){let s=t[3*e],a=t[3*e+1],o=t[3*i],l=t[3*i+1],A=t[3*n],c=t[3*n+1];return[new st(s,a),new st(o,l),new st(A,c)]},generateSideWallUV:function(r,t,e,i,n,s){let a=t[3*e],o=t[3*e+1],l=t[3*e+2],A=t[3*i],c=t[3*i+1],h=t[3*i+2],u=t[3*n],p=t[3*n+1],d=t[3*n+2],M=t[3*s],f=t[3*s+1],g=t[3*s+2];return Math.abs(o-c)<Math.abs(a-A)?[new st(a,1-l),new st(A,1-h),new st(u,1-d),new st(M,1-g)]:[new st(o,1-l),new st(c,1-h),new st(p,1-d),new st(f,1-g)]}},pn=class r extends hn{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},sA=class r extends hn{constructor(t=1,e=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},aA=class r extends Ot{constructor(t=.5,e=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],A=[],c=[],h=t,u=(e-t)/(n=Math.max(1,n)),p=new b,d=new st;for(let M=0;M<=n;M++){for(let f=0;f<=i;f++){let g=s+f/i*a;p.x=h*Math.cos(g),p.y=h*Math.sin(g),l.push(p.x,p.y,p.z),A.push(0,0,1),d.x=(p.x/e+1)/2,d.y=(p.y/e+1)/2,c.push(d.x,d.y)}h+=u}for(let M=0;M<n;M++){let f=M*(i+1);for(let g=0;g<i;g++){let m=g+f,v=m,P=m+i+1,y=m+i+2,x=m+1;o.push(v,P,x),o.push(P,y,x)}}this.setIndex(o),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(A,3)),this.setAttribute("uv",new vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},oA=class r extends Ot{constructor(t=new Zs([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)A(t);else for(let c=0;c<t.length;c++)A(t[c]),this.addGroup(o,l,c),o+=l,l=0;function A(c){let h=n.length/3,u=c.extractPoints(e),p=u.shape,d=u.holes;Ti.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,g=d.length;f<g;f++){let m=d[f];Ti.isClockWise(m)===!0&&(d[f]=m.reverse())}let M=Ti.triangulateShape(p,d);for(let f=0,g=d.length;f<g;f++){let m=d[f];p=p.concat(m)}for(let f=0,g=p.length;f<g;f++){let m=p[f];n.push(m.x,m.y,0),s.push(0,0,1),a.push(m.x,m.y)}for(let f=0,g=M.length;f<g;f++){let m=M[f],v=m[0]+h,P=m[1]+h,y=m[2]+h;i.push(v,P,y),l+=3}}this.setIndex(i),this.setAttribute("position",new vt(n,3)),this.setAttribute("normal",new vt(s,3)),this.setAttribute("uv",new vt(a,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return function(e,i){if(i.shapes=[],Array.isArray(e))for(let n=0,s=e.length;n<s;n++){let a=e[n];i.shapes.push(a.uuid)}else i.shapes.push(e.uuid);return i}(this.parameters.shapes,t)}static fromJSON(t,e){let i=[];for(let n=0,s=t.shapes.length;n<s;n++){let a=e[t.shapes[n]];i.push(a)}return new r(i,t.curveSegments)}},AA=class r extends Ot{constructor(t=1,e=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),A=0,c=[],h=new b,u=new b,p=[],d=[],M=[],f=[];for(let g=0;g<=i;g++){let m=[],v=g/i,P=0;g===0&&a===0?P=.5/e:g===i&&l===Math.PI&&(P=-.5/e);for(let y=0;y<=e;y++){let x=y/e;h.x=-t*Math.cos(n+x*s)*Math.sin(a+v*o),h.y=t*Math.cos(a+v*o),h.z=t*Math.sin(n+x*s)*Math.sin(a+v*o),d.push(h.x,h.y,h.z),u.copy(h).normalize(),M.push(u.x,u.y,u.z),f.push(x+P,1-v),m.push(A++)}c.push(m)}for(let g=0;g<i;g++)for(let m=0;m<e;m++){let v=c[g][m+1],P=c[g][m],y=c[g+1][m],x=c[g+1][m+1];(g!==0||a>0)&&p.push(v,P,x),(g!==i-1||l<Math.PI)&&p.push(P,y,x)}this.setIndex(p),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(M,3)),this.setAttribute("uv",new vt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},lA=class r extends hn{constructor(t=1,e=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},cA=class r extends Ot{constructor(t=1,e=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],A=[],c=new b,h=new b,u=new b;for(let p=0;p<=i;p++)for(let d=0;d<=n;d++){let M=d/n*s,f=p/i*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(M),h.y=(t+e*Math.cos(f))*Math.sin(M),h.z=e*Math.sin(f),o.push(h.x,h.y,h.z),c.x=t*Math.cos(M),c.y=t*Math.sin(M),u.subVectors(h,c).normalize(),l.push(u.x,u.y,u.z),A.push(d/n),A.push(p/i)}for(let p=1;p<=i;p++)for(let d=1;d<=n;d++){let M=(n+1)*p+d-1,f=(n+1)*(p-1)+d-1,g=(n+1)*(p-1)+d,m=(n+1)*p+d;a.push(M,f,m),a.push(f,g,m)}this.setIndex(a),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},hA=class r extends Ot{constructor(t=1,e=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],A=[],c=[],h=new b,u=new b,p=new b,d=new b,M=new b,f=new b,g=new b;for(let v=0;v<=i;++v){let P=v/i*s*Math.PI*2;m(P,s,a,t,p),m(P+.01,s,a,t,d),f.subVectors(d,p),g.addVectors(d,p),M.crossVectors(f,g),g.crossVectors(M,f),M.normalize(),g.normalize();for(let y=0;y<=n;++y){let x=y/n*Math.PI*2,w=-e*Math.cos(x),I=e*Math.sin(x);h.x=p.x+(w*g.x+I*M.x),h.y=p.y+(w*g.y+I*M.y),h.z=p.z+(w*g.z+I*M.z),l.push(h.x,h.y,h.z),u.subVectors(h,p).normalize(),A.push(u.x,u.y,u.z),c.push(v/i),c.push(y/n)}}for(let v=1;v<=i;v++)for(let P=1;P<=n;P++){let y=(n+1)*(v-1)+(P-1),x=(n+1)*v+(P-1),w=(n+1)*v+P,I=(n+1)*(v-1)+P;o.push(y,x,I),o.push(x,w,I)}function m(v,P,y,x,w){let I=Math.cos(v),L=Math.sin(v),C=y/P*v,O=Math.cos(C);w.x=x*(2+O)*.5*I,w.y=x*(2+O)*L*.5,w.z=x*Math.sin(C)*.5}this.setIndex(o),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(A,3)),this.setAttribute("uv",new vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},uA=class r extends Ot{constructor(t=new qs(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),e=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:s};let a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,A=new st,c=new b,h=[],u=[],p=[],d=[];function M(f){c=t.getPointAt(f/e,c);let g=a.normals[f],m=a.binormals[f];for(let v=0;v<=n;v++){let P=v/n*Math.PI*2,y=Math.sin(P),x=-Math.cos(P);l.x=x*g.x+y*m.x,l.y=x*g.y+y*m.y,l.z=x*g.z+y*m.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,h.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<e;f++)M(f);M(s===!1?e:0),function(){for(let f=0;f<=e;f++)for(let g=0;g<=n;g++)A.x=f/e,A.y=g/n,p.push(A.x,A.y)}(),function(){for(let f=1;f<=e;f++)for(let g=1;g<=n;g++){let m=(n+1)*(f-1)+(g-1),v=(n+1)*f+(g-1),P=(n+1)*f+g,y=(n+1)*(f-1)+g;d.push(m,v,y),d.push(v,P,y)}}()})(),this.setIndex(d),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Js[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},pA=class extends Ot{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,n=new b,s=new b;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let A=0,c=l.length;A<c;++A){let h=l[A],u=h.start;for(let p=u,d=u+h.count;p<d;p+=3)for(let M=0;M<3;M++){let f=o.getX(p+M),g=o.getX(p+(M+1)%3);n.fromBufferAttribute(a,f),s.fromBufferAttribute(a,g),Uc(n,s,i)===!0&&(e.push(n.x,n.y,n.z),e.push(s.x,s.y,s.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let A=0;A<3;A++){let c=3*o+A,h=3*o+(A+1)%3;n.fromBufferAttribute(a,c),s.fromBufferAttribute(a,h),Uc(n,s,i)===!0&&(e.push(n.x,n.y,n.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new vt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Uc(r,t,e){let i=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,n=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(i)!==!0&&e.has(n)!==!0&&(e.add(i),e.add(n),!0)}var X0=Object.freeze({__proto__:null,BoxGeometry:Je,CapsuleGeometry:$o,CircleGeometry:Ui,ConeGeometry:Sr,CylinderGeometry:cn,DodecahedronGeometry:tA,EdgesGeometry:eA,ExtrudeGeometry:rA,IcosahedronGeometry:pn,LatheGeometry:Ks,OctahedronGeometry:sA,PlaneGeometry:jn,PolyhedronGeometry:hn,RingGeometry:aA,ShapeGeometry:oA,SphereGeometry:AA,TetrahedronGeometry:lA,TorusGeometry:cA,TorusKnotGeometry:hA,TubeGeometry:uA,WireframeGeometry:pA});function Es(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Fd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var $n=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];e:{t:{let a;i:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break i}if(t>=s)break e;{let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0}}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dA=class extends $n{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fl:s=t,o=2*e-i;break;case Ql:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fl:a=t,l=2*i-e;break;case Ql:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let A=.5*(i-e),c=this.valueSize;this._weightPrev=A/(e-o),this._weightNext=A/(l-i),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,A=l-o,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,d=(i-e)/(n-e),M=d*d,f=M*d,g=-u*f+2*u*M-u*d,m=(1+u)*f+(-1.5-2*u)*M+(-.5+u)*d+1,v=(-1-p)*f+(1.5+p)*M+.5*d,P=p*f-p*M;for(let y=0;y!==o;++y)s[y]=g*a[c+y]+m*a[A+y]+v*a[l+y]+P*a[h+y];return s}},fA=class extends $n{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,A=l-o,c=(i-e)/(n-e),h=1-c;for(let u=0;u!==o;++u)s[u]=a[A+u]*h+a[l+u]*c;return s}},gA=class extends $n{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ye=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Es(e,this.TimeBufferType),this.values=Es(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Es(t.times,Array),values:Es(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gA(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fA(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dA(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ss:e=this.InterpolantFactoryMethodDiscrete;break;case Cs:e=this.InterpolantFactoryMethodLinear;break;case Va:e=this.InterpolantFactoryMethodSmooth}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(t===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return Cs;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Fd(n))for(let o=0,l=n.length;o!==l;++o){let A=n[o];if(isNaN(A)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,A),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Va,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,A=t[o];if(A!==t[o+1]&&(o!==1||A!==t[0]))if(n)l=!0;else{let c=o*i,h=c-i,u=c+i;for(let p=0;p!==i;++p){let d=e[c+p];if(d!==e[h+p]||d!==e[u+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let c=o*i,h=a*i;for(let u=0;u!==i;++u)e[h+u]=e[c+u]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,A=0;A!==i;++A)e[l+A]=e[o+A];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Ye.prototype.TimeBufferType=Float32Array,Ye.prototype.ValueBufferType=Float32Array,Ye.prototype.DefaultInterpolation=Cs;var $i=class extends Ye{};$i.prototype.ValueTypeName="bool",$i.prototype.ValueBufferType=Array,$i.prototype.DefaultInterpolation=Ss,$i.prototype.InterpolantFactoryMethodLinear=void 0,$i.prototype.InterpolantFactoryMethodSmooth=void 0;var mA=class extends Ye{};mA.prototype.ValueTypeName="color";var vA=class extends Ye{};vA.prototype.ValueTypeName="number";var MA=class extends $n{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),A=t*o;for(let c=A+o;A!==c;A+=4)$t.slerpFlat(s,0,a,A-o,a,A,l);return s}},wr=class extends Ye{InterpolantFactoryMethodLinear(t){return new MA(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion",wr.prototype.DefaultInterpolation=Cs,wr.prototype.InterpolantFactoryMethodSmooth=void 0;var tn=class extends Ye{};tn.prototype.ValueTypeName="string",tn.prototype.ValueBufferType=Array,tn.prototype.DefaultInterpolation=Ss,tn.prototype.InterpolantFactoryMethodLinear=void 0,tn.prototype.InterpolantFactoryMethodSmooth=void 0;var PA=class extends Ye{};PA.prototype.ValueTypeName="vector";var xA=class{constructor(t,e,i){let n=this,s,a=!1,o=0,l=0,A=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){l++,a===!1&&n.onStart!==void 0&&n.onStart(c,o,l),a=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return s?s(c):c},this.setURLModifier=function(c){return s=c,this},this.addHandler=function(c,h){return A.push(c,h),this},this.removeHandler=function(c){let h=A.indexOf(c);return h!==-1&&A.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=A.length;h<u;h+=2){let p=A[h],d=A[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return d}return null}}},Qd=new xA,yA=class{constructor(t){this.manager=t!==void 0?t:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};yA.DEFAULT_MATERIAL_NAME="__DEFAULT";var wA=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Mo=new yt,Nc=new b,Oc=new b,DA=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zi,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nc),Oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oc),e.updateMatrixWorld(),Mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var W0=new yt,Y0=new b,q0=new b;var _A=class extends DA{constructor(){super(new Jn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends wA{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new _A}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var j0=new yt,J0=new yt,K0=new yt;var Z0=new b,$0=new $t,tg=new b,eg=new b;var ig=new b,ng=new $t,rg=new b,sg=new b;var IA="\\[\\]\\.:\\/",Hd=new RegExp("["+IA+"]","g"),Po="[^"+IA+"]",Gd="[^"+IA.replace("\\.","")+"]",kd=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Po)+/(WCOD+)?/.source.replace("WCOD",Gd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Po)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Po)+"$"),Vd=["material","materials","bones","map"],Wt=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hd,"")}static parseTrackName(t){let e=kd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Vd.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let A=e.objectIndex;switch(i){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===A){A=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(t[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[i]}if(A!==void 0){if(t[A]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[A]}}let a=t[n];if(a===void 0){let A=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+A+"."+n+" but it wasn't found.",t)}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=class{constructor(r,t,e){let i=e||Wt.parseTrackName(t);this._targetGroup=r,this._bindings=r.subscribe_(t,i)}getValue(r,t){this.bind();let e=this._targetGroup.nCachedObjects_,i=this._bindings[e];i!==void 0&&i.getValue(r,t)}setValue(r,t){let e=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=e.length;i!==n;++i)e[i].setValue(r,t)}bind(){let r=this._bindings;for(let t=this._targetGroup.nCachedObjects_,e=r.length;t!==e;++t)r[t].bind()}unbind(){let r=this._bindings;for(let t=this._targetGroup.nCachedObjects_,e=r.length;t!==e;++t)r[t].unbind()}},Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray],Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ag=new Float32Array(1);var og=new st;var Ag=new b,lg=new b;var cg=new b;var hg=new b,ug=new yt,pg=new yt;var dg=new b,fg=new dt,gg=new dt;var mg=new b,vg=new b,Mg=new b;var Pg=new b,xg=new Dr;var yg=new qe;var wg=new b;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);var Xd=`
#include <common>
#include <color_pars_vertex>
#include <shadowmap_pars_vertex>
uniform vec3 sole;
attribute float strato;
varying float vVerso;
varying float vSu;
varying vec3 vMondo;
void main() {
  #include <color_vertex>
  #include <beginnormal_vertex>
  #include <defaultnormal_vertex>
  #include <begin_vertex>
  #include <project_vertex>
  // lo strato del pezzo: a parità di posto vince quello dopo (un soffio di profondità, invisibile: un decimo di millimetro)
  gl_Position.z -= strato * 2.0e-6 * gl_Position.w;
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  vMondo = (modelMatrix * vec4(transformed, 1.0)).xyz;
  // quanto la faccia guarda il sole: le facce girate dall'altra parte non si fanno ombra da sole (in Leafy il colore
  // di una cosa è uguale su tutte le facce)
  vec3 nMondo = normalize((modelMatrix * vec4(objectNormal, 0.0)).xyz);
  vVerso = dot(nMondo, sole);
  vSu = nMondo.y;
}`,ch=8,lh="3.0",Wd=`
#define LAMPADE_MAX ${ch}
uniform vec4 lampadePos[LAMPADE_MAX];   // x, y, z e il raggio (0: spenta)
uniform vec3 lampadeCol;
uniform vec3 ombra;
uniform vec3 tinta;
uniform float opacita;
uniform float acceso;
uniform float emissivo;
varying float vVerso;
varying float vSu;
varying vec3 vMondo;
#include <common>
#include <packing>
#include <color_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
  vec3 base = vColor;
  // l'ombra è un gradino, non una rampa: un bordo solo, netto, senza scalini né puntini (il filtro della mappa dà un campo
  // continuo, e il suo livello a metà è una curva liscia). E cade solo sulle facce che guardano in su: i fianchi e gli smussi
  // restano del loro colore pieno, così non ci sono mai righe sotto gli sbalzi; il volume lo danno i toni.
  float luce = 1.0;
  if (acceso < 0.999) {
    float m = vSu < 0.8 ? 1.0 : getShadowMask();
    float aa = max(fwidth(m), 0.02);
    luce = smoothstep(0.5 - aa, 0.5 + aa, m);
  }
  vec3 lampade = vec3(0.0);
  for (int i = 0; i < LAMPADE_MAX; i++) {
    vec4 l = lampadePos[i];
    if (l.w <= 0.0) continue;
    float caduta = 1.0 - length(vMondo - l.xyz) / l.w;
    if (caduta > 0.0) lampade += lampadeCol * ceil(caduta * ${lh}) / ${lh};
  }
  // acceso fra 0 e 1: una lampada che si accende o si spegne passa dal suo colore alla sua luce
  vec3 c = acceso > 0.999 ? base * emissivo : mix(base * (tinta * mix(ombra, vec3(1.0), luce) + lampade), base * emissivo, acceso);
  gl_FragColor = vec4(c, opacita);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,hh=new dt("#c6bcc6"),uh={value:hh.clone()},ph={value:new dt(1,1,1)},Rr={value:1},Lr={value:Array.from({length:ch},()=>new Gt(0,0,0,0))},RA={value:new dt(0,0,0)},Yd=new dt(0,0,0),zr={value:new b(-.55,1,-.35).normalize()};function LA({acceso:r=0,opacita:t=1}={}){let e=new xe({uniforms:SA.merge([ct.lights,{opacita:{value:t},acceso:{value:r}}]),vertexShader:Xd,fragmentShader:Wd,vertexColors:!0,lights:!0,transparent:t<1,depthWrite:t>=1,shadowSide:he,extensions:{derivatives:!0}});return e.defaultAttributeValues={...e.defaultAttributeValues,strato:[0]},e.uniforms.tinta=ph,e.uniforms.ombra=uh,e.uniforms.lampadePos=Lr,e.uniforms.lampadeCol=RA,e.uniforms.emissivo=Rr,e.uniforms.sole=zr,e}var qd=null,jd=null,Mi=()=>qd||=LA(),_g=new Oe({colorWrite:!1,depthWrite:!1,shadowSide:he}),zA=()=>jd||=LA({acceso:1});var dh=(r,t=!1)=>LA({opacita:r,acceso:t?1:0});function fh(r,t,e){ph.value.setRGB(r,t,e)}function gh(r,t,e){uh.value.setRGB(r,t,e)}function mh(r=[],t="#000000",e=0){Jd=e,Lr.value.forEach((i,n)=>{let s=r[n];s?i.set(s[0],s[1],s[2],e*(s[3]??1)):i.set(0,0,0,0)}),Yd=new dt(t)}var Jd=0;var vh=new Oe({visible:!1});function Ph(){try{let r=document.createElement("canvas");return!!(globalThis.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}function xh(r){try{let t=r.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),i=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return/swiftshader|llvmpipe|software|basic render/i.test(String(i))}catch{return!1}}function Kd(){try{let r=document.createElement("canvas"),t=r.getContext("webgl2");if(!t)return{resa:!1,lenta:!1};let e={resa:!!(t.getExtension("EXT_color_buffer_float")||t.getExtension("EXT_color_buffer_half_float")),lenta:xh({getContext:()=>t})},i=t.getExtension("WEBGL_lose_context");return i&&i.loseContext(),e}catch{return{resa:!1,lenta:!1}}}function yh(r){let t=new URLSearchParams(location.search).get("qualita"),e=Kd(),i=e.resa&&t!=="bassa"&&(!e.lenta||t==="alta"),n=new _r({canvas:r,antialias:!i,alpha:!0,powerPreference:"high-performance"});n.outputColorSpace=Zt,n.setClearColor(0,0);let s=xh(n),a=t==="bassa"||t==="alta"?t:s?"bassa":"alta";n.setPixelRatio(s?.75:Math.min(devicePixelRatio,innerWidth<900?1.5:2)),n.shadowMap.enabled=a==="alta",n.shadowMap.type=EA,n.shadowMap.autoUpdate=!1;let o=new on,l=new $s(16777215,1);l.castShadow=a==="alta";let A=Math.min(innerWidth<900?2048:4096,n.capabilities.maxTextureSize);l.shadow.mapSize.set(A,A),l.shadow.bias=-5e-4,l.shadow.normalBias=0,o.add(l,l.target);let c=$d();return o.add(c),o.userData.stelle=c,{renderer:n,sc:o,sole:l,qualita:a,lenta:s,stelle:c}}function wh(r,t,e,i,n=0){let s=zr.value.clone();r.target.position.set(t,n,e),r.position.set(t,n,e).addScaledVector(s,i*3+10);let a=r.shadow.camera,o=i+2;Object.assign(a,{left:-o,right:o,top:o,bottom:-o,near:.5,far:i*6+24}),a.updateProjectionMatrix(),r.target.updateMatrixWorld(),r.updateMatrixWorld()}var ra=[[0,[.2,.23,.38],[.055,.086,.188]],[.2,[.23,.26,.41],[.094,.125,.29]],[.26,[.92,.78,.66],[1,.718,.529]],[.34,[1.04,1,.94],[.561,.827,1]],[.66,[1.04,1,.94],[.561,.827,1]],[.74,[.95,.72,.58],[1,.616,.431]],[.82,[.25,.28,.43],[.102,.129,.282]],[1,[.2,.23,.38],[.055,.086,.188]]],Mh=r=>r<=0?0:r>=1?1:r*r*(3-2*r);function Zd(r){let t=(r/24%1+1)%1,e=0;for(;e<ra.length-2&&ra[e+1][0]<=t;)e++;let[i,n,s]=ra[e],[a,o,l]=ra[e+1],A=Mh((t-i)/(a-i)),c=(m,v)=>m.map((P,y)=>P+(v[y]-P)*A),h=c(n,o),u=c(s,l),p=Math.sin((t-.25)*Math.PI*2),d=Math.max(p,.24),M=Mh(d/.22)*(.48+.52*Math.pow(d,.85)),f=Math.min(.85,(p<=0?.3:.72)*M),g=Math.max(...u)||1;return{ambiente:h,cielo:u,ombra:u.map(m=>{let v=m/g;return(v+(1-v)*.55)*(1-f)})}}function Dh(r){let t=Zd(r);fh(...t.ambiente),gh(...t.ombra)}function $d(){let r=42,t=()=>(r=r*16807%2147483647,r/2147483647),e=1500,i=new Float32Array(e*3),n=new Float32Array(e*3);for(let a=0;a<e;a++){let o=t()*2-1,l=t()*Math.PI*2,A=90,c=Math.sqrt(1-o*o);i.set([Math.cos(l)*c*A+4,o*A*.7+10,Math.sin(l)*c*A+4],a*3);let h=.25+Math.pow(t(),2.2)*.75;n.set([h*.92,h*.88,h],a*3)}let s=new Ot;return s.setAttribute("position",new Qt(i,3)),s.setAttribute("color",new Qt(n,3)),new Zn(s,new Er({size:2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1}))}var tf=[{gruppo:"Tempo",voci:[{id:"oraVera",tipo:"si",def:!0,nome:"Ora vera"},{id:"ora",tipo:"num",def:12,min:0,max:24,passo:.25,nome:"Ora"},{id:"giorno",tipo:"scelta",def:0,nome:"Un giorno dura",opzioni:[[0,"Fermo"],[300,"5 min"],[60,"1 min"],[20,"20 s"]]},{id:"stagione",tipo:"scelta",def:"",nome:"Stagione",opzioni:[["","Vera"],["primavera","Prim."],["estate","Est."],["autunno","Aut."],["inverno","Inv."]]}]},{gruppo:"Acqua",voci:[{id:"acquaVicino",tipo:"colore",def:"#8fd4e6",nome:"Accanto all'isola"},{id:"acquaMezzo",tipo:"colore",def:"#6d9fe6",nome:"In mezzo"},{id:"acquaBordo",tipo:"colore",def:"#7f78d8",nome:"Verso il bordo"},{id:"pienaVicino",tipo:"num",def:.94,min:0,max:1,passo:.01,nome:"Piena, vicino"},{id:"pienaBordo",tipo:"num",def:.42,min:0,max:1,passo:.01,nome:"Piena, al bordo"},{id:"pozza",tipo:"num",def:1.24,min:1,max:3,passo:.01,nome:"Larghezza pozza"},{id:"riflessoMin",tipo:"num",def:.2,min:0,max:1,passo:.01,nome:"Riflesso delle cose"},{id:"riflessoMax",tipo:"num",def:.6,min:0,max:1,passo:.01,nome:"Riflesso, al massimo"},{id:"cieloMix",tipo:"num",def:0,min:0,max:.6,passo:.01,nome:"Cielo nell'acqua"},{id:"rifrazione",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Rifrazione"},{id:"ondeFondo",tipo:"num",def:1,min:0,max:2,passo:.05,nome:"Onde di fondo"},{id:"ondeGesto",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Onde del mouse"},{id:"attrito",tipo:"num",def:.9955,min:.98,max:.9995,passo:5e-4,nome:"Quanto durano"},{id:"vuotoPiega",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Il vuoto si piega"},{id:"luccichio",tipo:"num",def:0,min:0,max:3,passo:.05,nome:"Luccichio"},{id:"segni",tipo:"num",def:1,min:0,max:2,passo:.05,nome:"Segni sul pelo"},{id:"schiuma",tipo:"num",def:.7,min:0,max:1,passo:.05,nome:"Schiuma a riva"},{id:"filo",tipo:"num",def:.5,min:0,max:1,passo:.05,nome:"Filo del bordo"}]},{gruppo:"Pesci",voci:[{id:"pesci",tipo:"num",def:7,min:0,max:16,passo:1,nome:"Quanti"},{id:"pesciVelocita",tipo:"num",def:1,min:0,max:4,passo:.05,nome:"Velocità"},{id:"pesciPaura",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Paura"},{id:"pesciScala",tipo:"num",def:1,min:.4,max:3,passo:.05,nome:"Grandezza"},{id:"pesceOro",tipo:"si",def:!0,nome:"Quello d'oro"}]},{gruppo:"Ambiente",voci:[{id:"meteo",tipo:"scelta",def:"sereno",nome:"Tempo",opzioni:[["sereno","Sereno"],["pioggia","Pioggia"],["neve","Neve"]]},{id:"vento",tipo:"num",def:.35,min:0,max:1,passo:.05,nome:"Vento"},{id:"particelle",tipo:"si",def:!0,nome:"Foglie e petali"},{id:"lucciole",tipo:"si",def:!0,nome:"Lucciole di notte"},{id:"quante",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Quante"}]},{gruppo:"Luce",voci:[{id:"bloom",tipo:"num",def:7,min:0,max:16,passo:.1,nome:"Bloom"},{id:"soglia",tipo:"num",def:1.13,min:.4,max:2,passo:.01,nome:"Bloom, soglia"},{id:"dispersione",tipo:"num",def:.268,min:0,max:1,passo:.01,nome:"Bloom, dispersione"},{id:"sole",tipo:"num",def:1.4,min:.5,max:3,passo:.01,nome:"Sole"},{id:"lampadeForza",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Lampade"},{id:"aberrazione",tipo:"num",def:.029,min:0,max:.3,passo:.001,nome:"Aberrazione"},{id:"fxaa",tipo:"si",def:!0,nome:"Antialias"},{id:"ombre",tipo:"si",def:!0,nome:"Ombre"}]}],ef=tf.flatMap(r=>r.voci),nf=Object.fromEntries(ef.map(r=>[r.id,r.def]));var Yt={...nf};var dn={soglia:Math.pow(1.13,2.2),intensita:7,dispersione:.05+.268*.9,sole:1.4/1.04,livelli:6},UA=16,sa=6,rf="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",sf=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tBase, tProf, tRifl, tOnde;
uniform mat4 uInvVP, uVP, uRiflM;
uniform vec3 uPozza;                      // x e z del centro della pozza, e il suo raggio
uniform vec3 uCam, uAmbiente, uCielo, uPelo, uProfondo, uFondale, uLampCol, uLampoDir, uSoleCol;
uniform vec4 uLampade[LAMPADE_MAX];
uniform vec4 uPesci[PESCI_DATI];          // per ogni pesce due: x, z, verso x, verso z; grandezza, fondo, fase, d'oro
uniform int uNPesci;
uniform vec2 uCentro, uPxOnde, uRiflesso, uPiena;
uniform float uCieloMix, uLivello, uTempo, uLato, uRifra, uFondo, uPiega, uLuccichio, uSegni, uSchiuma, uFilo;

vec3 mondo(vec2 uv, float d) {
  vec4 q = uInvVP * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
  return q.xyz / q.w;
}

// le onde di Leafy: quattro seni a ventaglio, con frequenze che non si ripetono, e due pieghe lente che curvano i fronti.
// Sopra, due ottave più fini per la distorsione da vicino.
vec2 pendenza(vec2 p, float t) {
  float a = 0.8 * sin(p.x * 0.11 + p.y * 0.07 + t * 0.13), b = 0.8 * sin(p.y * 0.09 - p.x * 0.05 - t * 0.11);
  float f1 = p.x * 0.83 + p.y * 0.24 + t * 1.07 + a, f2 = p.x * 0.51 - p.y * 1.04 - t * 0.71 - 0.7 * b;
  float f3 = p.x * 0.47 + p.y * 1.39 + t * 0.53 + 0.6 * b, f4 = p.y * 0.95 - p.x * 1.27 + t * 0.89 - 0.5 * a;
  vec2 g = vec2(0.46 * cos(f1) + 0.23 * cos(f2) + 0.16 * cos(f3) - 0.32 * cos(f4), 0.13 * cos(f1) - 0.47 * cos(f2) + 0.49 * cos(f3) + 0.24 * cos(f4));
  vec2 q = p * 2.71 + vec2(b, a);
  g += 0.5 * vec2(cos(q.x * 1.13 + q.y * 0.41 + t * 1.7), cos(q.y * 1.29 - q.x * 0.37 - t * 1.4));
  q = p * 6.13 - vec2(a, b) * 2.0;
  g += 0.22 * vec2(cos(q.x * 0.93 - q.y * 0.61 - t * 2.3), cos(q.y * 1.07 + q.x * 0.53 + t * 2.1));
  return g;
}

// i pesci: sagome sotto il pelo, ognuna alla sua profondità. Si guardano lungo il raggio rifratto, così scivolano e tremano con
// l'acqua. Dove e come stanno lo decide la simulazione (gioco/pesci.js). Torna (quanto è in ombra, quanto è d'oro)
vec2 pesci(vec3 w, vec3 giu, float tetto) {
  vec2 tot = vec2(0.0);
  for (int i = 0; i < uNPesci; i++) {
    vec4 a = uPesci[i * 2], b = uPesci[i * 2 + 1];
    if (b.y >= tetto) continue;
    vec3 q = w + giu * (b.y / -giu.y);
    vec2 d = q.xz - a.xy;
    float s = b.x;
    if (dot(d, d) > s * s * 5.0) continue;
    float u = dot(d, a.zw), v = dot(d, vec2(-a.w, a.z));
    // il corpo si piega: più dietro, più batte
    float dietro = clamp(-u / s, 0.0, 1.6);
    v += sin(u * 5.0 / s + b.z) * 0.07 * s * (0.25 + dietro * 1.4);
    float corpo = smoothstep(1.06, 0.94, length(vec2(u / s, v / (s * 0.36))));
    float t = -u - s * 0.8;
    float coda = t > 0.0 && t < s * 0.6 ? smoothstep(-0.02, 0.02, t * 0.9 - abs(v)) : 0.0;
    // le pinne: due triangoli ai lati
    float e = u - s * 0.15;
    float pinne = e < 0.0 && e > -s * 0.42 ? smoothstep(-0.02, 0.02, (e + s * 0.42) * 0.85 - (abs(v) - s * 0.3)) : 0.0;
    float m = max(max(corpo, coda), pinne) * (1.0 - b.y * 0.14);
    if (b.w > 0.5) tot.y = max(tot.y, m); else tot.x = max(tot.x, m);
  }
  return tot;
}

void main() {
  float dDritto = texture2D(tProf, vUv).x;
  vec3 pDritto = mondo(vUv, dDritto);
  vec3 raggio = normalize(pDritto - uCam);
  vec4 base = texture2D(tBase, vUv);
  gl_FragColor = vec4(base.rgb, 1.0);
  if (raggio.y > -0.0005) return;                                 // sopra il pelo: il vuoto
  float aPelo = (uLivello - uCam.y) / raggio.y;
  if (aPelo < 0.0) return;
  if (dDritto < 1.0 && length(pDritto - uCam) < aPelo) return;    // una cosa emersa: resta intatta
  vec3 w = uCam + raggio * aPelo;
  float scala = 1.0 / (1.0 + aPelo * 0.03);

  // la superficie vera: una griglia che si muove quando la si tocca, e continua anche fuori dalla pozza
  vec2 uvO = (w.xz - uCentro) / uLato + 0.5;
  vec2 orlo = min(uvO, 1.0 - uvO);
  float inGriglia = smoothstep(0.0, 0.08, min(orlo.x, orlo.y));
  vec2 gO = vec2(0.0);
  if (inGriglia > 0.0) gO = inGriglia * vec2(
    textureLod(tOnde, uvO + vec2(uPxOnde.x, 0.0), 0.0).r - textureLod(tOnde, uvO - vec2(uPxOnde.x, 0.0), 0.0).r,
    textureLod(tOnde, uvO + vec2(0.0, uPxOnde.y), 0.0).r - textureLod(tOnde, uvO - vec2(0.0, uPxOnde.y), 0.0).r);

  // la pozza: non è un cerchio, il suo bordo respira, e le onde lo spostano
  vec2 rel = w.xz - uPozza.xy;
  float lung = length(rel), ang = atan(rel.y, rel.x);
  float dove = lung / uPozza.z + 0.035 * sin(ang * 3.0 + uTempo * 0.17) + 0.02 * sin(ang * 7.0 - uTempo * 0.23) + 0.012 * sin(ang * 13.0 + uTempo * 0.31);
  dove += dot(gO, rel / max(lung, 0.001)) * 1.4;
  float aaD = clamp(fwidth(dove), 0.001, 0.02);
  // i cerchi delle onde: un filo sottile dove l'onda passa per lo zero, che si spegne con l'onda
  float hO = inGriglia > 0.0 ? textureLod(tOnde, uvO, 0.0).r : 0.0;
  float wH = max(fwidth(hO), 1e-5);
  float filo = smoothstep(1.7 * wH, 0.6 * wH, abs(hO)) * smoothstep(0.0012, 0.007, length(gO));

  // FUORI dalla pozza l'acqua non c'è, ma c'è la sua superficie: è il vuoto che si piega al passaggio delle onde, e nient'altro
  if (dove > 1.0 + aaD) {
    if (dot(gO, gO) < 1e-7) return;
    vec2 uvV = vUv + gO * 2.8 * scala * uPiega;
    float dV = texture2D(tProf, uvV).x;
    vec3 pV = mondo(uvV, dV);
    vec3 s = dV < 1.0 && pV.y > uLivello ? base.rgb : texture2D(tBase, uvV).rgb;
    gl_FragColor = vec4(s + uPelo * max(uAmbiente, vec3(0.5)) * filo * smoothstep(0.003, 0.012, length(gO)) * 0.1 * min(uPiega, 1.5), 1.0);
    return;
  }

  vec2 g = pendenza(w.xz, uTempo) * uFondo + gO * 87.0;
  float lg = length(g);
  if (lg > 6.0) g *= 6.0 / lg;
  vec3 n = normalize(vec3(-g.x * 0.16, 1.0, -g.y * 0.16));
  vec3 v = -raggio;

  // la rifrazione: il vuoto dietro si piega verso il centro vicino al bordo, come una conca, e trema con le onde. Dritta dove c'è
  // poca acqua; un punto emerso non cola dentro (si torna all'immagine dritta)
  float curva = pow(smoothstep(0.7, 1.0, dove), 2.0);
  vec4 qc = uVP * vec4(w - vec3(rel.x, 0.0, rel.y) / max(lung, 0.001) * curva * 1.6, 1.0);
  float spDritto = dDritto < 1.0 ? uLivello - pDritto.y : 40.0;
  vec2 uvR = qc.xy / qc.w * 0.5 + 0.5 + n.xz * scala * (dDritto < 1.0 ? 0.035 : 0.16) * uRifra;
  float dR = texture2D(tProf, uvR).x;
  vec3 pR = mondo(uvR, dR);
  if (dR < 1.0 && pR.y > uLivello) { uvR = vUv; dR = dDritto; pR = pDritto; }

  // quanta acqua c'è dietro: giù è il dislivello, via il cammino nel volume (radente si attraversa più acqua)
  bool senzaFondo = dR >= 1.0;
  float giu = senzaFondo ? 40.0 : max(0.0, uLivello - pR.y);
  float via = senzaFondo ? 40.0 : length(pR - w);
  // il colore cambia andando verso il bordo: azzurro accanto all'isola, poi blu, poi violaceo, e sempre più trasparente: la
  // pozza si scioglie nel vuoto, che si vede tremare attraverso
  float prof = smoothstep(0.3, 1.0, dove);
  vec3 tinta = mix(mix(uPelo, uProfondo, smoothstep(0.0, 0.5, prof)), uFondale, smoothstep(0.45, 1.0, prof)) * uAmbiente;
  vec3 dietro = texture2D(tBase, uvR).rgb;
  vec3 c;
  if (senzaFondo) c = mix(dietro, tinta, mix(uPiena.x, uPiena.y, prof * prof));
  else {
    float fondale = 1.0 - exp(-0.12 * giu), corpo = 1.0 - exp(-0.075 * via);
    // quello che sta sotto si legge come una forma tenue, senza macchie: più si scende e più è acqua
    c = mix(dietro, tinta, clamp(0.4 + corpo * 0.5 + fondale * 0.5, 0.0, 0.92));
  }

  // i pesci, sotto
  vec2 sagome = uNPesci > 0 ? pesci(w, refract(raggio, n, 0.75), giu) : vec2(0.0);
  c = mix(c, c * 0.42, sagome.x * 0.85);
  c = mix(c, vec3(1.0, 0.62, 0.1) * max(uAmbiente, vec3(0.5)), sagome.y * 0.9);

  // i segni sul pelo: a colore pieno, a gradini, come tutto il resto. Anche i cerchi delle onde sono fatti così: due toni netti
  float segno = g.x * 0.6 + g.y * 0.8;
  float wS = max(fwidth(segno), 0.002);
  c = mix(c, c * 1.07 + uPelo * uAmbiente * 0.025, smoothstep(0.8 - wS, 0.8 + wS, segno) * min(uSegni, 1.0));
  c = mix(c, c * 0.95, smoothstep(-0.8 + wS, -0.8 - wS, segno) * min(uSegni, 1.0));
  c += mix(uPelo, vec3(1.0), 0.5) * uAmbiente * 0.13 * uSegni * filo;

  // lo specchio: l'acqua aperta resta del suo colore, senza niente sopra, perché la bellezza sta nella sfumatura. Si riflettono solo le
  // cose (dove il riflesso è vuoto l'alfa è 0): dall'alto appena, radente di più
  float fr = pow(1.0 - clamp(dot(v, normalize(vec3(n.x * 0.5, 1.0, n.z * 0.5))), 0.0, 1.0), 3.0);
  float f = clamp(uRiflesso.x + fr * 0.7, 0.0, uRiflesso.y);
  vec4 qr = uRiflM * vec4(w + vec3(n.x, 0.0, n.z) * 0.5, 1.0);
  vec4 rf = texture2D(tRifl, qr.xy / qr.w);
  float cosa = clamp(rf.a, 0.0, 1.0);
  if (uCieloMix > 0.0) c = mix(c, uCielo, uCieloMix * (1.0 - cosa));
  c = mix(c, rf.rgb, f * cosa);
  c = mix(c, vec3(1.0, 0.6, 0.08) * max(uAmbiente, vec3(0.5)), sagome.y * 0.6);

  // il luccichio: il sole (di notte la luna) sulle onde, a piccole macchie nette. Spento (com'è di base) non costa niente
  float lampo = 0.0;
  if (uLuccichio > 0.0) {
    vec2 fini = pendenza(w.xz * 2.7, uTempo * 1.6);
    vec3 rr = reflect(raggio, normalize(vec3(-(g.x * 0.1 + fini.x * 0.14), 1.0, -(g.y * 0.1 + fini.y * 0.14))));
    float sp = dot(rr, uLampoDir);
    float wG = max(fwidth(sp), 0.0004);
    float sogliaL = 1.0 - 0.0013 * uLuccichio;
    lampo = smoothstep(sogliaL - wG, sogliaL + wG, sp) * (1.0 - cosa);
    c += uSoleCol * lampo;
  }

  // la schiuma: un bordino dove il pelo tocca le cose
  vec3 chiara = mix(uPelo, vec3(1.0), 0.6) * uAmbiente;
  if (dDritto < 1.0) {
    float bordo = 0.05 + g.x * 0.016 + g.y * 0.014;
    float aa = clamp(fwidth(spDritto), 0.003, 0.03);
    c = mix(c, chiara, uSchiuma * smoothstep(bordo + aa, bordo - aa, spDritto));
  }

  // il bordo della pozza: una riga chiara, e le increspature che ci vanno incontro
  float onde = fract(dove * 6.0 - uTempo * 0.09);
  c += uPelo * uAmbiente * 0.07 * uFilo * 2.0 * smoothstep(0.05, 0.0, abs(onde - 0.5)) * smoothstep(0.4, 0.92, dove);
  c = mix(c, chiara, uFilo * smoothstep(0.007 + aaD, 0.002, abs(dove - 0.985)));

  // le lampade anche sull'acqua: la stessa sfera a gradini
  vec3 luci = vec3(0.0);
  for (int i = 0; i < LAMPADE_MAX; i++) {
    vec4 l = uLampade[i];
    if (l.w <= 0.0) continue;
    float caduta = 1.0 - length(w - l.xyz) / l.w;
    if (caduta > 0.0) luci += uLampCol * ceil(caduta * 3.0) / 3.0;
  }
  c += uPelo * luci * 0.7;

  // l'alfa dice quanto una cosa può fare bloom: l'acqua poco, un lampo di sole sì
  float dentro = smoothstep(1.0 + aaD, 1.0 - aaD, dove);
  gl_FragColor = vec4(mix(base.rgb, c, dentro), 1.0 - 0.7 * dentro * (1.0 - min(lampo, 1.0)));
}
`,af=`
precision highp float;
varying vec2 vUv;
uniform sampler2D t, tIsola;
uniform vec2 uPx;
uniform vec4 uGocce[GOCCE_MAX];       // u, v, raggio (in uv), forza
uniform float uAttrito, uRaggio;
void main() {
  vec2 s = texture2D(t, vUv).rg;
  float media = (texture2D(t, vUv - vec2(uPx.x, 0.0)).r + texture2D(t, vUv + vec2(uPx.x, 0.0)).r + texture2D(t, vUv - vec2(0.0, uPx.y)).r + texture2D(t, vUv + vec2(0.0, uPx.y)).r) * 0.25;
  float vel = (s.g + (media - s.r) * 0.62) * uAttrito;
  float lontano = smoothstep(1.05, 2.2, length(vUv - 0.5) / uRaggio);
  vel *= 1.0 - 0.035 * lontano;
  float alt = (s.r + vel) * (0.9995 - 0.01 * lontano);
  for (int i = 0; i < GOCCE_MAX; i++) {
    vec4 q = uGocce[i];
    if (q.z <= 0.0) continue;
    float d = length((vUv - q.xy) / q.z);
    if (d < 2.2) alt += q.w * exp(-d * d * 1.6);
  }
  // sul bordo della griglia le onde si spengono; contro l'isola sbattono
  vec2 orlo = min(vUv, 1.0 - vUv);
  float fuori = smoothstep(0.0, 0.05, min(orlo.x, orlo.y));
  float pieno = 1.0 - texture2D(tIsola, vUv).r;
  gl_FragColor = vec4(alt * fuori * pieno, vel * fuori * pieno, 0.0, 1.0);
}`,of=`
precision highp float;
varying vec2 vUv;
uniform sampler2D t;
uniform float uSoglia, uGinocchio, uSole;
void main() {
  vec4 q = texture2D(t, vUv);
  vec3 c = min(q.rgb * q.a * uSole, vec3(16.0));
  float b = max(c.r, max(c.g, c.b));
  float s = clamp(b - uSoglia + uGinocchio, 0.0, 2.0 * uGinocchio);
  s = s * s / (4.0 * uGinocchio + 1e-4);
  gl_FragColor = vec4(c * max(b - uSoglia, s) / max(b, 1e-4), 1.0);
}`,Af=`
precision highp float;
varying vec2 vUv;
uniform sampler2D t;
uniform vec2 uPx;
vec3 l(float x, float y) { return texture2D(t, vUv + vec2(x, y) * uPx).rgb; }
void main() {
  vec3 c = l(0.0, 0.0) * 0.125;
  c += (l(-1.0, -1.0) + l(1.0, -1.0) + l(-1.0, 1.0) + l(1.0, 1.0)) * 0.125;
  c += (l(-2.0, 0.0) + l(2.0, 0.0) + l(0.0, -2.0) + l(0.0, 2.0)) * 0.0625;
  c += (l(-2.0, -2.0) + l(2.0, -2.0) + l(-2.0, 2.0) + l(2.0, 2.0)) * 0.03125;
  gl_FragColor = vec4(c, 1.0);
}`,lf=`
precision highp float;
varying vec2 vUv;
uniform sampler2D t, tAlto;
uniform vec2 uPx;
uniform float uDispersione;
vec3 l(float x, float y) { return texture2D(t, vUv + vec2(x, y) * uPx).rgb; }
void main() {
  vec3 c = l(0.0, 0.0) * 4.0 + (l(-1.0, 0.0) + l(1.0, 0.0) + l(0.0, -1.0) + l(0.0, 1.0)) * 2.0 + l(-1.0, -1.0) + l(1.0, -1.0) + l(-1.0, 1.0) + l(1.0, 1.0);
  gl_FragColor = vec4(mix(texture2D(tAlto, vUv).rgb, c / 16.0, uDispersione), 1.0);
}`,cf=`
precision highp float;
varying vec2 vUv;
uniform sampler2D t, tBloom;
uniform float uForza, uAberrazione, uTrasparente;
// un filo di rumore: i grigi scurissimi del vuoto, a 8 bit, farebbero le righe
float grana() { return (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0; }
vec3 srgb(vec3 c) { c = clamp(c, 0.0, 1.0); return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
void main() {
  vec2 d = vUv * 2.0 - 1.0;
  vec2 passo = -d * dot(d, d) * uAberrazione * 0.05 / 3.0;
  vec4 centro = texture2D(t, vUv);
  vec3 c = vec3(centro.r, texture2D(t, vUv + passo).g, texture2D(t, vUv + passo * 2.0).b);
  vec3 b = texture2D(tBloom, vUv).rgb * uForza;
  vec3 s = srgb(c + b) + grana();
  // sulla stanza dietro c'è la pagina: il bloom la illumina anche fuori dalle cose
  float a = uTrasparente > 0.5 ? clamp(centro.a + max(b.r, max(b.g, b.b)), 0.0, 1.0) : 1.0;
  gl_FragColor = vec4(s, a);
}`,hf=`
precision highp float;
varying vec2 vUv;
uniform sampler2D t;
uniform vec2 uPx;
uniform float uAcceso;
float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
void main() {
  vec4 m = texture2D(t, vUv);
  if (uAcceso < 0.5) { gl_FragColor = m; return; }
  float ln = luma(texture2D(t, vUv + vec2(-1.0, -1.0) * uPx).rgb), ne = luma(texture2D(t, vUv + vec2(1.0, -1.0) * uPx).rgb);
  float so = luma(texture2D(t, vUv + vec2(-1.0, 1.0) * uPx).rgb), se = luma(texture2D(t, vUv + vec2(1.0, 1.0) * uPx).rgb);
  float lm = luma(m.rgb);
  float lmin = min(lm, min(min(ln, ne), min(so, se))), lmax = max(lm, max(max(ln, ne), max(so, se)));
  if (lmax - lmin < max(0.0312, lmax * 0.125)) { gl_FragColor = m; return; }
  vec2 dir = vec2(-((ln + ne) - (so + se)), (ln + so) - (ne + se));
  float ridotto = max((ln + ne + so + se) * 0.03125, 0.0078125);
  dir = clamp(dir / (min(abs(dir.x), abs(dir.y)) + ridotto), vec2(-8.0), vec2(8.0)) * uPx;
  vec4 a = 0.5 * (texture2D(t, vUv + dir * (1.0 / 3.0 - 0.5)) + texture2D(t, vUv + dir * (2.0 / 3.0 - 0.5)));
  vec4 b = a * 0.5 + 0.25 * (texture2D(t, vUv + dir * -0.5) + texture2D(t, vUv + dir * 0.5));
  float lb = luma(b.rgb);
  gl_FragColor = lb < lmin || lb > lmax ? a : b;
}`,Ur=class{static puo(t){return t.capabilities.isWebGL2&&(t.extensions.has("EXT_color_buffer_float")||t.extensions.has("EXT_color_buffer_half_float"))}constructor(t,{acqua:e=!1,trasparente:i=!1,sole:n=dn.sole,emissivo:s=2.4}={}){this.emissivo=s,this.scalaInterna=this.scalaBase=t.getPixelRatio()<1.5?1.5:1,this.sopra=new on,this.r=t,this.conAcqua=e,this.trasparente=i,this.ha={riflesso:!1},this.fondo=new dt,this.camSpecchio=new ce,this.scenaQuad=new on,this.camQuad=new Jn(-1,1,1,-1,0,1);let a=new Ot;a.setAttribute("position",new vt([-1,-1,0,3,-1,0,-1,3,0],3)),a.setAttribute("uv",new vt([0,0,2,0,0,2],2)),this.quad=new kt(a,null),this.quad.frustumCulled=!1,this.scenaQuad.add(this.quad);let o=(l,A,c={})=>new xe({vertexShader:rf,fragmentShader:l,uniforms:A,defines:c,depthTest:!1,depthWrite:!1,blending:Qc,extensions:{derivatives:!0}});this.mAcqua=o(sf,{tBase:{value:null},tProf:{value:null},tRifl:{value:null},tOnde:{value:null},uInvVP:{value:new yt},uVP:{value:new yt},uRiflM:{value:new yt},uCentro:{value:new st},uPxOnde:{value:new st},uLato:{value:96},uPozza:{value:new b(0,0,12)},uCam:{value:new b},uAmbiente:{value:new dt(1,1,1)},uCielo:{value:new dt(0,0,0)},uPelo:{value:new dt},uProfondo:{value:new dt},uFondale:{value:new dt},uLampoDir:{value:new b(0,1,0)},uSoleCol:{value:new dt(0,0,0)},uPesci:{value:Array.from({length:UA*2},()=>new Gt)},uNPesci:{value:0},uRiflesso:{value:new st},uPiena:{value:new st},uCieloMix:{value:0},uRifra:{value:1},uFondo:{value:1},uPiega:{value:1},uLuccichio:{value:1},uSegni:{value:1},uSchiuma:{value:1},uFilo:{value:1},uLampade:Lr,uLampCol:RA,uLivello:{value:0},uTempo:{value:0}},{LAMPADE_MAX:Lr.value.length,PESCI_DATI:UA*2}),this.mOnde=o(af,{t:{value:null},tIsola:{value:null},uPx:{value:new st},uAttrito:{value:.9955},uRaggio:{value:.1},uGocce:{value:Array.from({length:sa},()=>new Gt)}},{GOCCE_MAX:sa}),this.gocce=[],this.versoVista=new b,this.lato=96,this.centro=new st,this.mFiltro=o(of,{t:{value:null},uSoglia:{value:dn.soglia},uGinocchio:{value:dn.soglia*.5},uSole:{value:n}}),this.mGiu=o(Af,{t:{value:null},uPx:{value:new st}}),this.mSu=o(lf,{t:{value:null},tAlto:{value:null},uPx:{value:new st},uDispersione:{value:dn.dispersione}}),this.mFinale=o(cf,{t:{value:null},tBloom:{value:null},uForza:{value:dn.intensita*.3},uAberrazione:{value:0},uTrasparente:{value:i?1:0}}),this.mFxaa=o(hf,{t:{value:null},uPx:{value:new st},uAcceso:{value:1}}),this.soleSuo=n,this.misura()}misura(){if(!this.usata)return;let t=this.r.getDrawingBufferSize(new st);if(t.x<1||t.y<1)return;let e=Math.round(t.x*this.scalaInterna),i=Math.round(t.y*this.scalaInterna);if(e===this.w&&i===this.h)return;this.libera(),this.w=e,this.h=i;let n={minFilter:me,magFilter:me,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1},s={...n,type:Ri,format:Se};this.base=new ue(e,i,{...s,depthBuffer:!0}),this.base.depthTexture=new Kn(e,i,ii),this.composto=new ue(e,i,s),this.pronto=new ue(e,i,n),this.rifl=this.conAcqua?new ue(Math.max(2,e>>1),Math.max(2,i>>1),{...s,depthBuffer:!0}):null,this.giu=[],this.su=[];let a=Math.max(2,e>>1),o=Math.max(2,i>>1);for(let l=0;l<dn.livelli&&Math.min(a,o)>=8;l++)this.giu.push(new ue(a,o,s)),l<dn.livelli-1&&this.su.push(new ue(a,o,s)),a>>=1,o>>=1;this.su.length=Math.max(0,this.giu.length-1)}libera(){for(let t of[this.base,this.composto,this.pronto,this.rifl,...this.giu||[],...this.su||[]])t&&t.dispose();this.base&&this.base.depthTexture&&this.base.depthTexture.dispose(),this.base=this.composto=this.pronto=this.rifl=null,this.giu=[],this.su=[],this.w=this.h=0,this.specchioDi=null}passata(t,e){this.quad.material=t,this.r.setRenderTarget(e),this.r.render(this.scenaQuad,this.camQuad)}isola(t,e,i,n){this.centro.set(t,e),this.lato=i;let s=innerWidth<900?192:320;if(!this.onde){let l=()=>new ue(s,s,{type:Ri,format:Se,minFilter:me,magFilter:me,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});this.onde=[l(),l()],this.nOnde=s}let a=this.nOnde,o=new Uint8Array(a*a);for(let l=0;l<a;l++)for(let A=0;A<a;A++)n(t+((A+.5)/a-.5)*i,e+((l+.5)/a-.5)*i)&&(o[l*a+A]=255);this.terra&&this.terra.dispose(),this.terra=new Vs(o,a,a,Wc,mi),this.terra.minFilter=this.terra.magFilter=Ae,this.terra.needsUpdate=!0}tocca(t,e,i,n){this.gocce.length>=sa*3&&this.gocce.shift(),this.gocce.push([(t-this.centro.x)/this.lato+.5,(e-this.centro.y)/this.lato+.5,i/this.lato,n])}passoOnde(){let t=this.mOnde.uniforms;t.t.value=this.onde[0].texture,t.tIsola.value=this.terra,t.uPx.value.set(1/this.nOnde,1/this.nOnde);for(let e=0;e<sa;e++){let i=this.gocce.shift();i?t.uGocce.value[e].set(i[0],i[1],i[2],i[3]):t.uGocce.value[e].z=0}this.passata(this.mOnde,this.onde[1]),this.onde.reverse()}alleggerisci(){let t=[1.25,1,.85].find(e=>e<this.scalaInterna-.01);return t?(this.scalaInterna=t,this.misura(),!0):!1}appesantisci(){let t=[.85,1,1.25,1.5].find(e=>e>this.scalaInterna+.01&&e<=this.scalaBase+.01);return t?(this.scalaInterna=t,this.misura(),!0):!1}scena(t,e,{cielo:i=null,livello:n=0,specchio:s=!0}={}){if((!this.usata||!this.w)&&(this.usata=!0,this.misura()),!this.w)return;let a=this.r,o=Rr.value;Rr.value=this.emissivo;let l=a.getClearAlpha();a.getClearColor(this.fondo),i?a.setClearColor(i,1):a.setClearColor(0,0),e.updateMatrixWorld();let A=e.matrixWorld.elements.join()+e.projectionMatrix.elements.join()+n;if(this.conAcqua&&(s||A!==this.specchioDi)){this.specchioDi=A;let c=i?i.clone():null;a.setClearColor(0,0);let h=t.userData.stelle,u=h&&h.visible;h&&(h.visible=!!u&&!!this.stelleNelRiflesso),this.specchio(t,e,n),h&&(h.visible=u),c&&a.setClearColor(c,1)}a.setRenderTarget(this.base),a.clear(),a.render(t,e),a.setRenderTarget(null),a.setClearColor(this.fondo,l),Rr.value=o}specchio(t,e,i){let n=this.camSpecchio,s=this.r;e.updateMatrixWorld();let a=new b().setFromMatrixPosition(e.matrixWorld),o=e.getWorldDirection(new b),l=new b(0,1,0).applyQuaternion(e.quaternion);n.position.set(a.x,2*i-a.y,a.z),n.up.set(l.x,-l.y,l.z),n.lookAt(n.position.x+o.x,n.position.y-o.y,n.position.z+o.z),n.near=e.near,n.far=e.far,n.updateMatrixWorld(),n.projectionMatrix.copy(e.projectionMatrix),this.mAcqua.uniforms.uRiflM.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(n.projectionMatrix).multiply(n.matrixWorldInverse);let A=new We(new b(0,1,0),-i).applyMatrix4(n.matrixWorldInverse),c=new Gt(A.normal.x,A.normal.y,A.normal.z,A.constant),h=n.projectionMatrix.elements,u=new Gt((Math.sign(c.x)+h[8])/h[0],(Math.sign(c.y)+h[9])/h[5],-1,(1+h[10])/h[14]);c.multiplyScalar(2/c.dot(u)),h[2]=c.x,h[6]=c.y,h[10]=c.z+1-.003,h[14]=c.w,s.setRenderTarget(this.rifl),s.clear(),s.render(t,n)}pesci(t,e=1){let i=this.mAcqua.uniforms,n=Math.min(t.length,UA);i.uNPesci.value=n;for(let s=0;s<n;s++){let a=t[s];i.uPesci.value[s*2].set(a.x,a.z,Math.cos(a.ang),Math.sin(a.ang)),i.uPesci.value[s*2+1].set(a.s*e,a.fondo,a.fase,a.oro?1:0)}}regole(){let t=this.mFiltro.uniforms,e=Math.pow(Yt.soglia,2.2);if(t.uSoglia.value=e,t.uGinocchio.value=e*.5,this.conAcqua&&(t.uSole.value=Yt.sole/1.04),this.mSu.uniforms.uDispersione.value=.05+Yt.dispersione*.9,this.mFinale.uniforms.uForza.value=Yt.bloom*.3,this.mFinale.uniforms.uAberrazione.value=Yt.aberrazione,this.mFxaa.uniforms.uAcceso.value=Yt.fxaa?1:0,!this.conAcqua)return;let i=this.mAcqua.uniforms;i.uPelo.value.set(Yt.acquaVicino),i.uProfondo.value.set(Yt.acquaMezzo),i.uFondale.value.set(Yt.acquaBordo),i.uRiflesso.value.set(Yt.riflessoMin,Yt.riflessoMax),i.uPiena.value.set(Yt.pienaVicino,Yt.pienaBordo),i.uCieloMix.value=Yt.cieloMix,i.uRifra.value=Yt.rifrazione,i.uFondo.value=Yt.ondeFondo,i.uPiega.value=Yt.vuotoPiega,i.uLuccichio.value=Yt.luccichio,i.uSegni.value=Yt.segni,i.uSchiuma.value=Yt.schiuma,i.uFilo.value=Yt.filo,this.mOnde.uniforms.uAttrito.value=Yt.attrito}effetti(t,e={}){if(!this.base)return;let i=this.r;this.regole();let n=this.base;if(this.conAcqua){let A=this.mAcqua.uniforms;A.tBase.value=this.base.texture,A.tProf.value=this.base.depthTexture,A.tRifl.value=this.rifl.texture,t.updateMatrixWorld(),A.uInvVP.value.multiplyMatrices(t.matrixWorld,t.projectionMatrixInverse),A.uVP.value.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse);let c=e.tempo??0;if(this.onde){let u=Math.min(4,Math.floor((c-(this.tempoOnde??c))*60));(this.tempoOnde===void 0||u>0)&&(this.tempoOnde=c);for(let p=0;p<u;p++)this.passoOnde();A.tOnde.value=this.onde[0].texture,A.uPxOnde.value.set(1/this.nOnde,1/this.nOnde),A.uCentro.value.copy(this.centro),A.uLato.value=this.lato}A.uCam.value.setFromMatrixPosition(t.matrixWorld);let h=t.getWorldDirection(this.versoVista);if(A.uLampoDir.value.set(h.x,-h.y,h.z).add(zr.value).normalize(),A.uLivello.value=e.livello??0,A.uTempo.value=c,e.ambiente&&A.uAmbiente.value.setRGB(...e.ambiente),e.cielo&&A.uCielo.value.setRGB(...e.cielo),e.luce&&A.uSoleCol.value.setRGB(...e.luce),e.pozza&&(A.uPozza.value.set(e.pozza.x,e.pozza.z,e.pozza.r),this.mOnde.uniforms.uRaggio.value=e.pozza.r/this.lato),this.passata(this.mAcqua,this.composto),n=this.composto,this.aria){this.aria.bersaglio(this.base.depthTexture,this.w,this.h);let u=i.autoClear;i.autoClear=!1,i.setRenderTarget(this.composto),i.render(this.aria.scena,t),i.autoClear=u}if(this.sopra.children.length){for(let p of this.sopra.children){let d=p.material&&p.material.uniforms;d&&d.tProf&&(d.tProf.value=this.base.depthTexture,d.uRis.value.set(this.w,this.h),d.uProva.value=1)}let u=i.autoClear;i.autoClear=!1,i.setRenderTarget(this.composto),i.render(this.sopra,t),i.autoClear=u}}let s=this.giu.length;this.mFiltro.uniforms.t.value=n.texture,this.passata(this.mFiltro,this.giu[0]);for(let A=1;A<s;A++){let c=this.mGiu.uniforms;c.t.value=this.giu[A-1].texture,c.uPx.value.set(1/this.giu[A-1].width,1/this.giu[A-1].height),this.passata(this.mGiu,this.giu[A])}let a=this.giu[s-1];for(let A=s-2;A>=0;A--){let c=this.mSu.uniforms;c.t.value=a.texture,c.tAlto.value=this.giu[A].texture,c.uPx.value.set(1/a.width,1/a.height),this.passata(this.mSu,this.su[A]),a=this.su[A]}let o=this.mFinale.uniforms;o.t.value=n.texture,o.tBloom.value=a.texture;let l=Yt.fxaa&&this.r.getPixelRatio()*this.scalaInterna<1.49;this.passata(this.mFinale,l?this.pronto:null),l&&(this.mFxaa.uniforms.t.value=this.pronto.texture,this.mFxaa.uniforms.uPx.value.set(1/this.w,1/this.h),this.passata(this.mFxaa,null))}};var _h=["#33984b","#5d2c28","#edab50","#1e6f50","#391f21","#bf6f4a","#c42430","#f6ca9f","#134c4c","#5ac54f","#e69c69","#657392","#1c121c","#f9e6cf","#2a2f4e","#3d3d3d","#0c2e44","#ed7614","#424c6e","#e07438","#1a1932","#ffa214","#f68187","#ffffff","#b4b4b4","#5d5d5d","#92a1b9","#858585","#8e8e8e","#8a4836","#c64524","#ea323c","#0e071b","#929292"],Eh={"cella-a":{v:"IAGA/wD/IAGA/wABIAGg/gABIAGA/wD/IAGg/gABIAGg/gD/IAGg/gABIAEA/gABIAEA/gD/IAGg/gABIAEA/gD/IAGg/gD/4P6g/gAB4P6A/wAB4P6A/wD/4P6g/gAB4P6A/wD/4P6g/gD/4P4A/gAB4P6g/gAB4P6g/gD/4P4A/gAB4P6g/gD/4P4A/gD/AAGg/wABAAGg/wD/AP+g/wD/AAGg/wABAP+g/wD/AP+g/wABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAGg/iABAAGA/yABAP+A/yABAAGg/iABAP+A/yABAP+g/iABAAEA/iABAAGg/iABAP+g/iABAAEA/iABAP+g/iABAP8A/iABAP+A/+D+AAGA/+D+AAGg/uD+AP+A/+D+AAGg/uD+AP+g/uD+AAGg/uD+AAEA/uD+AP8A/uD+AAGg/uD+AP8A/uD+AP+g/uD+AAGg/wD/AAGg/wABIAGA/wABAAGg/wD/IAGA/wABIAGA/wD/4P6A/wABAP+g/wABAP+g/wD/4P6A/wABAP+g/wD/4P6A/wD/AAGA/yABAAGg/wABAP+g/wABAAGA/yABAP+g/wABAP+A/yABAP+g/wD/AAGg/wD/AAGA/+D+AP+g/wD/AAGA/+D+AP+A/+D+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAGg/uD+AAGA/+D+IAGA/wD/AAGg/uD+IAGA/wD/IAGg/gD/IAEA/gD/AAEA/uD+AAGg/uD+IAEA/gD/AAGg/uD+IAGg/gD/AAGA/yABAAGg/iABIAGg/gABAAGA/yABIAGg/gABIAGA/wABAAGg/iABAAEA/iABIAEA/gABAAGg/iABIAEA/gABIAGg/gABAP+A/+D+AP+g/uD+4P6g/gD/AP+A/+D+4P6g/gD/4P6A/wD/AP+g/uD+AP8A/uD+4P4A/gD/AP+g/uD+4P4A/gD/4P6g/gD/AP+g/iABAP+A/yAB4P6A/wABAP+g/iAB4P6A/wAB4P6g/gAB4P4A/gABAP8A/iABAP+g/iAB4P4A/gABAP+g/iAB4P6g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAGg/wABAAGA/yABIAGA/wABAP+g/wAB4P6A/wABAP+A/yABAAGg/wD/IAGA/wD/AAGA/+D+AP+g/wD/AP+A/+D+4P6A/wD/QAHg/+D+QAHg/yABQAFg/yABQAHg/+D+QAFg/yABQAFg/+D+wP5g/yABwP7g/yABwP7g/+D+wP5g/yABwP7g/+D+wP5g/+D+IAEAACABIAEAAOD+4P4AAOD+IAEAACAB4P4AAOD+4P4AACAB4P5A/+D+IAFA/+D+IAFA/yAB4P5A/+D+IAFA/yAB4P5A/yABIAFg/0ABIAHg/0AB4P7g/0ABIAFg/0AB4P7g/0AB4P5g/0AB4P7g/8D+IAHg/8D+IAFg/8D+4P7g/8D+IAFg/8D+4P5g/8D+IAEAAOD+IAEAACABQAHg/yABIAEAAOD+QAHg/yABQAHg/+D+wP7g/yAB4P4AACAB4P4AAOD+wP7g/yAB4P4AAOD+wP7g/+D+IAHg/0ABIAEAACAB4P4AACABIAHg/0AB4P4AACAB4P7g/0AB4P4AAOD+IAEAAOD+IAHg/8D+4P4AAOD+IAHg/8D+4P7g/8D+QAFg/yABIAFA/yABIAFA/+D+QAFg/yABIAFA/+D+QAFg/+D+4P5A/+D+4P5A/yABwP5g/yAB4P5A/+D+wP5g/yABwP5g/+D+4P5A/yABIAFA/yABIAFg/0AB4P5A/yABIAFg/0AB4P5g/0ABIAFg/8D+IAFA/+D+4P5A/+D+IAFg/8D+4P5A/+D+4P5g/8D+QAFg/+D+IAFg/8D+IAHg/8D+QAFg/+D+IAHg/8D+QAHg/+D+IAHg/0ABIAFg/0ABQAFg/yABIAHg/0ABQAFg/yABQAHg/yAB4P7g/8D+4P5g/8D+wP5g/+D+4P7g/8D+wP5g/+D+wP7g/+D+wP5g/yAB4P5g/0AB4P7g/0ABwP5g/yAB4P7g/0ABwP7g/yABIAFA/yABQAFg/yABIAFg/0AB4P5A/yAB4P5g/0ABwP5g/yABIAFA/+D+IAFg/8D+QAFg/+D+4P5A/+D+wP5g/+D+4P5g/8D+IAEAACABIAHg/0ABQAHg/yAB4P4AACABwP7g/yAB4P7g/0ABIAEAAOD+QAHg/+D+IAHg/8D+4P4AAOD+4P7g/8D+wP7g/+D+",c:"CgoFBQoKBQUKCh0dCgoFBQoKBQUKCgoKCgoKCgUFBQUFBQUFCgoFBQoKBQUKCgUFCgoFBQUFBQUKCgoKAAAAAAkJCQkAAAAACQkJCQkJCQkAAAAAAAAAAAAAAAAAAAAAAAAAAAkJCQk="},"cella-b":{v:"IAGA/wD/IAGA/wABIAGg/gABIAGA/wD/IAGg/gABIAGg/gD/IAGg/gABIAEA/gABIAEA/gD/IAGg/gABIAEA/gD/IAGg/gD/4P6g/gAB4P6A/wAB4P6A/wD/4P6g/gAB4P6A/wD/4P6g/gD/4P4A/gAB4P6g/gAB4P6g/gD/4P4A/gAB4P6g/gD/4P4A/gD/AAGg/wABAAGg/wD/AP+g/wD/AAGg/wABAP+g/wD/AP+g/wABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAGg/iABAAGA/yABAP+A/yABAAGg/iABAP+A/yABAP+g/iABAAEA/iABAAGg/iABAP+g/iABAAEA/iABAP+g/iABAP8A/iABAP+A/+D+AAGA/+D+AAGg/uD+AP+A/+D+AAGg/uD+AP+g/uD+AAGg/uD+AAEA/uD+AP8A/uD+AAGg/uD+AP8A/uD+AP+g/uD+AAGg/wD/AAGg/wABIAGA/wABAAGg/wD/IAGA/wABIAGA/wD/4P6A/wABAP+g/wABAP+g/wD/4P6A/wABAP+g/wD/4P6A/wD/AAGA/yABAAGg/wABAP+g/wABAAGA/yABAP+g/wABAP+A/yABAP+g/wD/AAGg/wD/AAGA/+D+AP+g/wD/AAGA/+D+AP+A/+D+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAGg/uD+AAGA/+D+IAGA/wD/AAGg/uD+IAGA/wD/IAGg/gD/IAEA/gD/AAEA/uD+AAGg/uD+IAEA/gD/AAGg/uD+IAGg/gD/AAGA/yABAAGg/iABIAGg/gABAAGA/yABIAGg/gABIAGA/wABAAGg/iABAAEA/iABIAEA/gABAAGg/iABIAEA/gABIAGg/gABAP+A/+D+AP+g/uD+4P6g/gD/AP+A/+D+4P6g/gD/4P6A/wD/AP+g/uD+AP8A/uD+4P4A/gD/AP+g/uD+4P4A/gD/4P6g/gD/AP+g/iABAP+A/yAB4P6A/wABAP+g/iAB4P6A/wAB4P6g/gAB4P4A/gABAP8A/iABAP+g/iAB4P4A/gABAP+g/iAB4P6g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAGg/wABAAGA/yABIAGA/wABAP+g/wAB4P6A/wABAP+A/yABAAGg/wD/IAGA/wD/AAGA/+D+AP+g/wD/AP+A/+D+4P6A/wD/QAHg/+D+QAHg/yABQAFg/yABQAHg/+D+QAFg/yABQAFg/+D+wP5g/yABwP7g/yABwP7g/+D+wP5g/yABwP7g/+D+wP5g/+D+IAEAACABIAEAAOD+4P4AAOD+IAEAACAB4P4AAOD+4P4AACAB4P5A/+D+IAFA/+D+IAFA/yAB4P5A/+D+IAFA/yAB4P5A/yABIAFg/0ABIAHg/0AB4P7g/0ABIAFg/0AB4P7g/0AB4P5g/0AB4P7g/8D+IAHg/8D+IAFg/8D+4P7g/8D+IAFg/8D+4P5g/8D+IAEAAOD+IAEAACABQAHg/yABIAEAAOD+QAHg/yABQAHg/+D+wP7g/yAB4P4AACAB4P4AAOD+wP7g/yAB4P4AAOD+wP7g/+D+IAHg/0ABIAEAACAB4P4AACABIAHg/0AB4P4AACAB4P7g/0AB4P4AAOD+IAEAAOD+IAHg/8D+4P4AAOD+IAHg/8D+4P7g/8D+QAFg/yABIAFA/yABIAFA/+D+QAFg/yABIAFA/+D+QAFg/+D+4P5A/+D+4P5A/yABwP5g/yAB4P5A/+D+wP5g/yABwP5g/+D+4P5A/yABIAFA/yABIAFg/0AB4P5A/yABIAFg/0AB4P5g/0ABIAFg/8D+IAFA/+D+4P5A/+D+IAFg/8D+4P5A/+D+4P5g/8D+QAFg/+D+IAFg/8D+IAHg/8D+QAFg/+D+IAHg/8D+QAHg/+D+IAHg/0ABIAFg/0ABQAFg/yABIAHg/0ABQAFg/yABQAHg/yAB4P7g/8D+4P5g/8D+wP5g/+D+4P7g/8D+wP5g/+D+wP7g/+D+wP5g/yAB4P5g/0AB4P7g/0ABwP5g/yAB4P7g/0ABwP7g/yABIAFA/yABQAFg/yABIAFg/0AB4P5A/yAB4P5g/0ABwP5g/yABIAFA/+D+IAFg/8D+QAFg/+D+4P5A/+D+wP5g/+D+4P5g/8D+IAEAACABIAHg/0ABQAHg/yAB4P4AACABwP7g/yAB4P7g/0ABIAEAAOD+QAHg/+D+IAHg/8D+4P4AAOD+4P7g/8D+wP7g/+D+",c:"CgoFBQoKBQUKCh0dCgoFBQoKBQUKCgoKCgoKCgUFBQUFBQUFCgoFBQoKBQUKCgUFCgoFBQUFBQUKCgoKAwMDAwAAAAADAwMDAAAAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAA="},"cella-c":{v:"IAGA/wD/IAGA/wABIAGg/gABIAGA/wD/IAGg/gABIAGg/gD/IAGg/gABIAEA/gABIAEA/gD/IAGg/gABIAEA/gD/IAGg/gD/4P6g/gAB4P6A/wAB4P6A/wD/4P6g/gAB4P6A/wD/4P6g/gD/4P4A/gAB4P6g/gAB4P6g/gD/4P4A/gAB4P6g/gD/4P4A/gD/AAGg/wABAAGg/wD/AP+g/wD/AAGg/wABAP+g/wD/AP+g/wABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAGg/iABAAGA/yABAP+A/yABAAGg/iABAP+A/yABAP+g/iABAAEA/iABAAGg/iABAP+g/iABAAEA/iABAP+g/iABAP8A/iABAP+A/+D+AAGA/+D+AAGg/uD+AP+A/+D+AAGg/uD+AP+g/uD+AAGg/uD+AAEA/uD+AP8A/uD+AAGg/uD+AP8A/uD+AP+g/uD+AAGg/wD/AAGg/wABIAGA/wABAAGg/wD/IAGA/wABIAGA/wD/4P6A/wABAP+g/wABAP+g/wD/4P6A/wABAP+g/wD/4P6A/wD/AAGA/yABAAGg/wABAP+g/wABAAGA/yABAP+g/wABAP+A/yABAP+g/wD/AAGg/wD/AAGA/+D+AP+g/wD/AAGA/+D+AP+A/+D+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAGg/uD+AAGA/+D+IAGA/wD/AAGg/uD+IAGA/wD/IAGg/gD/IAEA/gD/AAEA/uD+AAGg/uD+IAEA/gD/AAGg/uD+IAGg/gD/AAGA/yABAAGg/iABIAGg/gABAAGA/yABIAGg/gABIAGA/wABAAGg/iABAAEA/iABIAEA/gABAAGg/iABIAEA/gABIAGg/gABAP+A/+D+AP+g/uD+4P6g/gD/AP+A/+D+4P6g/gD/4P6A/wD/AP+g/uD+AP8A/uD+4P4A/gD/AP+g/uD+4P4A/gD/4P6g/gD/AP+g/iABAP+A/yAB4P6A/wABAP+g/iAB4P6A/wAB4P6g/gAB4P4A/gABAP8A/iABAP+g/iAB4P4A/gABAP+g/iAB4P6g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAGg/wABAAGA/yABIAGA/wABAP+g/wAB4P6A/wABAP+A/yABAAGg/wD/IAGA/wD/AAGA/+D+AP+g/wD/AP+A/+D+4P6A/wD/QAHg/+D+QAHg/yABQAFg/yABQAHg/+D+QAFg/yABQAFg/+D+wP5g/yABwP7g/yABwP7g/+D+wP5g/yABwP7g/+D+wP5g/+D+IAEAACABIAEAAOD+4P4AAOD+IAEAACAB4P4AAOD+4P4AACAB4P5A/+D+IAFA/+D+IAFA/yAB4P5A/+D+IAFA/yAB4P5A/yABIAFg/0ABIAHg/0AB4P7g/0ABIAFg/0AB4P7g/0AB4P5g/0AB4P7g/8D+IAHg/8D+IAFg/8D+4P7g/8D+IAFg/8D+4P5g/8D+IAEAAOD+IAEAACABQAHg/yABIAEAAOD+QAHg/yABQAHg/+D+wP7g/yAB4P4AACAB4P4AAOD+wP7g/yAB4P4AAOD+wP7g/+D+IAHg/0ABIAEAACAB4P4AACABIAHg/0AB4P4AACAB4P7g/0AB4P4AAOD+IAEAAOD+IAHg/8D+4P4AAOD+IAHg/8D+4P7g/8D+QAFg/yABIAFA/yABIAFA/+D+QAFg/yABIAFA/+D+QAFg/+D+4P5A/+D+4P5A/yABwP5g/yAB4P5A/+D+wP5g/yABwP5g/+D+4P5A/yABIAFA/yABIAFg/0AB4P5A/yABIAFg/0AB4P5g/0ABIAFg/8D+IAFA/+D+4P5A/+D+IAFg/8D+4P5A/+D+4P5g/8D+QAFg/+D+IAFg/8D+IAHg/8D+QAFg/+D+IAHg/8D+QAHg/+D+IAHg/0ABIAFg/0ABQAFg/yABIAHg/0ABQAFg/yABQAHg/yAB4P7g/8D+4P5g/8D+wP5g/+D+4P7g/8D+wP5g/+D+wP7g/+D+wP5g/yAB4P5g/0AB4P7g/0ABwP5g/yAB4P7g/0ABwP7g/yABIAFA/yABQAFg/yABIAFg/0AB4P5A/yAB4P5g/0ABwP5g/yABIAFA/+D+IAFg/8D+QAFg/+D+4P5A/+D+wP5g/+D+4P5g/8D+IAEAACABIAHg/0ABQAHg/yAB4P4AACABwP7g/yAB4P7g/0ABIAEAAOD+QAHg/+D+IAHg/8D+4P4AAOD+4P7g/8D+wP7g/+D+",c:"CgoFBQoKBQUKCh0dCgoFBQoKBQUKCgoKCgoKCgUFBQUFBQUFCgoFBQoKBQUKCgUFCgoFBQUFBQUKCgoKCAgICAMDAwMICAgIAwMDAwMDAwMICAgICAgICAgICAgICAgICAgICAMDAwM="},"cella-terra":{v:"IAEAAAD/IAEAAAABIAEA/gABIAEAAAD/IAEA/gABIAEA/gD/4P4A/gAB4P4AAAAB4P4AAAD/4P4A/gAB4P4AAAD/4P4A/gD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAEA/iABAAEAACABAP8AACABAAEA/iABAP8AACABAP8A/iABAP8AAOD+AAEAAOD+AAEA/uD+AP8AAOD+AAEA/uD+AP8A/uD+AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+IAEA/gD/AAEA/uD+AAEAAOD+IAEA/gD/AAEAAOD+IAEAAAD/AAEAACABAAEA/iABIAEA/gABAAEAACABIAEA/gABIAEAAAABAP8AAOD+AP8A/uD+4P4A/gD/AP8AAOD+4P4A/gD/4P4AAAD/4P4A/gABAP8A/iABAP8AACAB4P4A/gABAP8AACAB4P4AAAABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAEgAAABAAEAACABIAEAAAABAP8gAAAB4P4AAAABAP8AACABAAEgAAD/IAEAAAD/AAEAAOD+AP8gAAD/AP8AAOD+4P4AAAD/",c:"BQUFBQoKHR0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU="},"cella-pietra":{v:"IAEAAEAAIAEAAAABIAEg/wABIAEAAEAAIAEg/wABIAEg/0AAIAEAACAAIAEAAEAAIAEg/0AAIAEAACAAIAEg/0AAIAEg/yAAIAEAAAD/IAEAACAAIAEg/yAAIAEAAAD/IAEg/yAAIAEg/wD/IAEg/wABIAEA/wABIAEA/wD/IAEg/wABIAEA/wD/IAEg/wD/IAEA/wABIAEA/gABIAEA/qD/IAEA/wABIAEA/qD/IAEA/6D/IAEA/6D/IAEA/qD/IAEA/oD/IAEA/6D/IAEA/oD/IAEA/4D/IAEA/4D/IAEA/oD/IAEA/gD/IAEA/4D/IAEA/gD/IAEA/wD/4P4AAMD/4P4AAAD/4P4g/wD/4P4AAMD/4P4g/wD/4P4g/8D/4P4AAOD/4P4AAMD/4P4g/8D/4P4AAOD/4P4g/8D/4P4g/+D/4P4g/wAB4P4AAAAB4P4AAOD/4P4g/wAB4P4AAOD/4P4g/+D/4P4A/wAB4P4g/wAB4P4g/wD/4P4A/wAB4P4g/wD/4P4A/wD/4P4A/wD/4P4A/gD/4P4A/mAA4P4A/wD/4P4A/mAA4P4A/2AA4P4A/2AA4P4A/mAA4P4A/oAA4P4A/2AA4P4A/oAA4P4A/4AA4P4A/gAB4P4A/wAB4P4A/4AA4P4A/gAB4P4A/4AA4P4A/oAAAAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABwP8AACABAP8AACABAP8g/yABwP8AACABAP8g/yABwP8g/yAB4P8AACABwP8AACABwP8g/yAB4P8AACABwP8g/yAB4P8g/yABAAEg/yABAAEAACAB4P8AACABAAEg/yAB4P8AACAB4P8g/yABAAEA/yABAAEg/yABAP8g/yABAAEA/yABAP8g/yABAP8A/yABAP8A/yABAP8A/iABYAAA/iABAP8A/yABYAAA/iABYAAA/yABYAAA/yABYAAA/iABgAAA/iABYAAA/yABgAAA/iABgAAA/yABAAEA/iABAAEA/yABgAAA/yABAAEA/iABgAAA/yABgAAA/iABQAAAAOD+AAEAAOD+AAEg/+D+QAAAAOD+AAEg/+D+QAAg/+D+IAAAAOD+QAAAAOD+QAAg/+D+IAAAAOD+QAAg/+D+IAAg/+D+AP8AAOD+IAAAAOD+IAAg/+D+AP8AAOD+IAAg/+D+AP8g/+D+AAEg/+D+AAEA/+D+AP8A/+D+AAEg/+D+AP8A/+D+AP8g/+D+AAEA/+D+AAEA/uD+oP8A/uD+AAEA/+D+oP8A/uD+oP8A/+D+oP8A/+D+oP8A/uD+gP8A/uD+oP8A/+D+gP8A/uD+gP8A/+D+gP8A/+D+gP8A/uD+AP8A/uD+gP8A/+D+AP8A/uD+AP8A/+D+AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/AP8gAMD/AP8gAAD/4P4AAAD/AP8gAMD/4P4AAAD/4P4AAMD/AP8gAOD/AP8gAMD/4P4AAMD/AP8gAOD/4P4AAMD/4P4AAOD/4P4AAAABAP8gAAABAP8gAOD/4P4AAAABAP8gAOD/4P4AAOD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/WAA4P4A/mAAAP/g/QD/4P4A/mAA4P4A/gD/AP/g/WAAAP/g/YAA4P4A/oAAAP/g/WAA4P4A/oAA4P4A/mAAAP/g/YAAAP/g/QAB4P4A/gABAP/g/YAA4P4A/gAB4P4A/oAAAP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+IAEA/gD/AAEA/uD+AAEAAOD+IAEA/gD/AAEAAOD+IAEAAAD/AAEAACABAAEA/iABIAEA/gABAAEAACABIAEA/gABIAEAAAABAP8AAOD+AP8g/+D+4P4g/wD/AP8AAOD+4P4g/wD/4P4AAAD/AP8g/+D+AP8A/+D+4P4A/wD/AP8g/+D+4P4A/wD/4P4g/wD/AP8A/+D+AP8A/uD+4P4A/gD/AP8A/+D+4P4A/gD/4P4A/wD/AP8g/yABAP8AACAB4P4AAAABAP8g/yAB4P4AAAAB4P4g/wABAP8A/yABAP8g/yAB4P4g/wABAP8A/yAB4P4g/wAB4P4A/wAB4P4A/gABAP8A/iABAP8A/yAB4P4A/gABAP8A/yAB4P4A/wABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAEgAAABAAEAACABIAEAAAABAP8gAAAB4P4AAAABAP8AACABAAEgAAD/IAEAAAD/AAEAAOD+AP8gAAD/AP8AAOD+4P4AAAD/",c:"CwsSEgsLEhILCxISCwsLCxISCwsSEgsLEhILCxoaEhILCxISCwsSEgsLEhILCwsLEhILCxISCwsSEgsLCwsLCxISCwsLCwsLCwsLCxISCwsLCwsLCwsLCwsLEhILCwsLEhILCwsLCwsLCwsL"},"cella-sabbia":{v:"IAEAAAD/IAEAAAABIAHg/wABIAEAAAD/IAHg/wABIAHg/wD/IAHg/wABIAFg/wABIAFg/wD/IAHg/wABIAFg/wD/IAHg/wD/IAFg/wABIAEg/wABIAEg/wD/IAFg/wABIAEg/wD/IAFg/wD/IAEg/wABIAHg/gABIAHg/qAAIAEg/wABIAHg/qAAIAEg/6AAIAEg/6AAIAHg/qAAIAHg/mAAIAEg/6AAIAHg/mAAIAEg/2AAIAEg/2AAIAHg/mAAIAHg/qD/IAEg/2AAIAHg/qD/IAEg/6D/IAEg/6D/IAHg/qD/IAHg/mD/IAEg/6D/IAHg/mD/IAEg/2D/IAEg/2D/IAHg/mD/IAHg/gD/IAEg/2D/IAHg/gD/IAEg/wD/IAHg/gABIAEA/gABIAEA/gD/IAHg/gABIAEA/gD/IAHg/gD/4P7g/wAB4P4AAAAB4P4AAAD/4P7g/wAB4P4AAAD/4P7g/wD/4P5g/wAB4P7g/wAB4P7g/wD/4P5g/wAB4P7g/wD/4P5g/wD/4P4g/wAB4P5g/wAB4P5g/wD/4P4g/wAB4P5g/wD/4P4g/wD/4P4g/wD/4P7g/gD/4P7g/mD/4P4g/wD/4P7g/mD/4P4g/2D/4P4g/2D/4P7g/mD/4P7g/qD/4P4g/2D/4P7g/qD/4P4g/6D/4P4g/6D/4P7g/qD/4P7g/mAA4P4g/6D/4P7g/mAA4P4g/2AA4P4g/2AA4P7g/mAA4P7g/qAA4P4g/2AA4P7g/qAA4P4g/6AA4P7g/gAB4P4g/wAB4P4g/6AA4P7g/gAB4P4g/6AA4P7g/qAA4P4A/gAB4P7g/gAB4P7g/gD/4P4A/gAB4P7g/gD/4P4A/gD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAHg/yABAAEAACABAP8AACABAAHg/yABAP8AACABAP/g/yABAAFg/yABAAHg/yABAP/g/yABAAFg/yABAP/g/yABAP9g/yABAAEg/yABAAFg/yABAP9g/yABAAEg/yABAP9g/yABAP8g/yABAP8g/yABAP/g/iABYP/g/iABAP8g/yABYP/g/iABYP8g/yABYP8g/yABYP/g/iABoP/g/iABYP8g/yABoP/g/iABoP8g/yABoP8g/yABoP/g/iABYADg/iABoP8g/yABYADg/iABYAAg/yABYAAg/yABYADg/iABoADg/iABYAAg/yABoADg/iABoAAg/yABAAHg/iABAAEg/yABoAAg/yABAAHg/iABoAAg/yABoADg/iABAAEA/iABAAHg/iABAP/g/iABAAEA/iABAP/g/iABAP8A/iABAP8AAOD+AAEAAOD+AAHg/+D+AP8AAOD+AAHg/+D+AP/g/+D+AAHg/+D+AAFg/+D+AP9g/+D+AAHg/+D+AP9g/+D+AP/g/+D+AAFg/+D+AAEg/+D+AP8g/+D+AAFg/+D+AP8g/+D+AP9g/+D+AAEg/+D+AAHg/uD+oADg/uD+AAEg/+D+oADg/uD+oAAg/+D+oAAg/+D+oADg/uD+YADg/uD+oAAg/+D+YADg/uD+YAAg/+D+YAAg/+D+YADg/uD+oP/g/uD+YAAg/+D+oP/g/uD+oP8g/+D+oP8g/+D+oP/g/uD+YP/g/uD+oP8g/+D+YP/g/uD+YP8g/+D+YP8g/+D+YP/g/uD+AP/g/uD+YP8g/+D+AP/g/uD+AP8g/+D+AAHg/uD+AAEA/uD+AP8A/uD+AAHg/uD+AP8A/uD+AP/g/uD+AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAHg/+D+AAEAAOD+IAEAAAD/AAHg/+D+IAEAAAD/IAHg/wD/AAFg/+D+AAHg/+D+IAHg/wD/AAFg/+D+IAHg/wD/IAFg/wD/AAEg/+D+AAFg/+D+IAFg/wD/AAEg/+D+IAFg/wD/IAEg/wD/AAHg/uD+AAEg/+D+IAEg/wD/AAHg/uD+IAEg/wD/IAHg/gD/IAEA/gD/AAEA/uD+AAHg/uD+IAEA/gD/AAHg/uD+IAHg/gD/AAEAACABAAHg/yABIAHg/wABAAEAACABIAHg/wABIAEAAAABAAHg/yABAAFg/yABIAFg/wABAAHg/yABIAFg/wABIAHg/wABAAFg/yABAAEg/yABIAEg/wABAAFg/yABIAEg/wABIAFg/wABAAEg/yABAAHg/iABIAHg/gABAAEg/yABIAHg/gABIAEg/wABAAHg/iABAAEA/iABIAEA/gABAAHg/iABIAEA/gABIAHg/gABAP8AAOD+AP/g/+D+4P7g/wD/AP8AAOD+4P7g/wD/4P4AAAD/AP/g/+D+AP9g/+D+4P5g/wD/AP/g/+D+4P5g/wD/4P7g/wD/AP9g/+D+AP8g/+D+4P4g/wD/AP9g/+D+4P4g/wD/4P5g/wD/AP8g/+D+AP/g/uD+4P7g/gD/AP8g/+D+4P7g/gD/4P4g/wD/AP/g/uD+AP8A/uD+4P4A/gD/AP/g/uD+4P4A/gD/4P7g/gD/AP/g/yABAP8AACAB4P4AAAABAP/g/yAB4P4AAAAB4P7g/wABAP9g/yABAP/g/yAB4P7g/wABAP9g/yAB4P7g/wAB4P5g/wABAP8g/yABAP9g/yAB4P5g/wABAP8g/yAB4P5g/wAB4P4g/wABAP/g/iABAP8g/yAB4P4g/wABAP/g/iAB4P4g/wAB4P7g/gAB4P4A/gABAP8A/iABAP/g/iAB4P4A/gABAP/g/iAB4P7g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAEgAAABAAEAACABIAEAAAABAP8gAAAB4P4AAAABAP8AACABAAEgAAD/IAEAAAD/AAEAAOD+AP8gAAD/AP8AAOD+4P4AAAD/",c:"BwcNDQcHDQ0HBw0NBwcNDQcHBwcNDQcHDQ0HBw0NBwcNDQcHDQ0KCgcHDQ0HBw0NBwcNDQcHDQ0HBwcHDQ0HBw0NBwcNDQcHDQ0HBwcHBwcHBwcHBwcHBwcHBwcHBw0NBwcNDQcHBwcNDQcHDQ0HBwcHDQ0HBw0NBwcHBw0NBwcNDQcHBwcHBwcHBwc="},albero:{v:"zf4AAP3/X/8AAKL//P8AAP3/zf4AAP3//P9lAP3/X/8AAKL/X/8AAKL/Zf8AAPf+/P8AAP3/X/8AAKL//P9lAP3/Zf8AAPf+Zf8AAPf+/P8AAEf//P8AAP3/Zf8AAPf+/P9lAP3//P8AAEf//P8AAEf/kwAAAPf+/P8AAP3//P8AAEf//P9lAP3/kwAAAPf+kwAAAPf+mQAAAKL//P8AAP3/kwAAAPf+/P9lAP3/mQAAAKL/mQAAAKL/KwEAAP3//P8AAP3/mQAAAKL//P9lAP3/KwEAAP3/KwEAAP3/mQAAAFgA/P8AAP3/KwEAAP3//P9lAP3/mQAAAFgAmQAAAFgAkwAAAAMB/P8AAP3/mQAAAFgA/P9lAP3/kwAAAAMBkwAAAAMB/P8AALMA/P8AAP3/kwAAAAMB/P9lAP3//P8AALMA/P8AALMAZf8AAAMB/P8AAP3//P8AALMA/P9lAP3/Zf8AAAMBZf8AAAMBX/8AAFgA/P8AAP3/Zf8AAAMB/P9lAP3/X/8AAFgAX/8AAFgAzf4AAP3//P8AAP3/X/8AAFgA/P9lAP3/zf4AAP3/tf8AALb//P8AAJj//P8AAP3/l/8AAP3/tf8AALb//P8AAP3/tf8AAEQAl/8AAP3//P8AAP3//P8AAGIAtf8AAEQA/P8AAP3/QwAAAEQA/P8AAGIA/P8AAP3/YQAAAP3/QwAAAEQA/P8AAP3/QwAAALb/YQAAAP3//P8AAP3//P8AAJj/QwAAALb//P8AAP3//P9hAZj/tf9hAbb//P9hAf3/tf9hAbb/l/9hAf3//P9hAf3/l/9hAf3/tf9hAUQA/P9hAf3/tf9hAUQA/P9hAWIA/P9hAf3//P9hAWIAQwBhAUQA/P9hAf3/QwBhAUQAYQBhAf3//P9hAf3/YQBhAf3/QwBhAbb//P9hAf3/QwBhAbb//P9hAZj//P9hAf3//P8AAJj/tf8AALb/tf8AALb/tf8AALb/l/8AAP3/l/8AAP3/l/8AAP3/tf8AAEQAtf8AAEQAtf8AAEQA/P8AAGIA/P8AAGIA/P8AAGIAQwAAAEQAQwAAAEQAQwAAAEQAYQAAAP3/YQAAAP3/YQAAAP3/QwAAALb/QwAAALb/QwAAALb//P8AAJj//P8AAJj//P8AAJj/tf8AALb/tf9hAbb//P8AAJj/tf9hAbb//P9hAZj/tf8AALb/l/8AAP3/l/9hAf3/tf8AALb/l/9hAf3/tf9hAbb/l/8AAP3/tf8AAEQAtf9hAUQAl/8AAP3/tf9hAUQAl/9hAf3/tf8AAEQA/P8AAGIA/P9hAWIAtf8AAEQA/P9hAWIAtf9hAUQA/P8AAGIAQwAAAEQAQwBhAUQA/P8AAGIAQwBhAUQA/P9hAWIAQwAAAEQAYQAAAP3/YQBhAf3/QwAAAEQAYQBhAf3/QwBhAUQAYQAAAP3/QwAAALb/QwBhAbb/YQAAAP3/QwBhAbb/YQBhAf3/QwAAALb//P8AAJj//P9hAZj/QwAAALb//P9hAZj/QwBhAbb//P9hAZj/tf9hAbb/tf9hAbb/tf9hAbb/l/9hAf3/l/9hAf3/l/9hAf3/tf9hAUQAtf9hAUQAtf9hAUQA/P9hAWIA/P9hAWIA/P9hAWIAQwBhAUQAQwBhAUQAQwBhAUQAYQBhAf3/YQBhAf3/YQBhAf3/QwBhAbb/QwBhAbb/QwBhAbb//P9hAZj//P9hAZj/nAFTAp0B/P9TAkoCowAXAnsC/P9TAkoC/P8XAsACowAXAnsCowCQAo8B/P+QAtQB/P9TAkoCnAFTAp0BSQGQAkoBowCQAo8B8AEXAvEBnAFTAp0BSQEXAjYCnAFTAp0BowAXAnsCSQEXAjYCowCQAo8B/P9TAkoCnAFTAp0B/P+5AdQBowAXAnsC/P8XAsACSQG5AUoB8AEXAvEBSQEXAjYCSQEXAjYCowAXAnsCSQG5AUoBowBbAaQA/P+5AdQB/P9bAekAowAXAnsCowBbAaQASQG5AUoB/P/8AP3/owBbAaQA/P9bAekA/P+5AdQBowBbAaQAowAXAnsC/P+QAtQBr/6QAkoBXP5TAp0BAv8XAlgCXP5TAp0BCf4XAvEBXP5TAp0BAv8XAlgC/P9TAkoC/P9TAkoCAv8XAlgC/P8XAsAC/P+QAtQBXP5TAp0B/P9TAkoCr/65AUoB/P+5AdQBAv8XAlgCAv8XAlgC/P+5AdQB/P8XAsACr/65AUoBAv8XAlgCCf4XAvEB/P9bAekAr/65AUoBVv9bAaQAVv9bAaQA/P/8AP3//P9bAekA/P+5AdQBr/65AUoB/P9bAekAxP0XAkoBr/1TAv3/f/0XAqQAr/1TAv3/Ov0XAv3/f/0XAqQAav6QAqQAJf6QAv3/r/1TAv3/XP5TAp0Br/6QAkoBav6QAqQACf4XAvEBXP5TAp0BxP0XAkoBXP5TAp0Br/1TAv3/xP0XAkoBav6QAqQAr/1TAv3/XP5TAp0BJf65Af3/f/0XAqQAOv0XAv3/r/65AUoBCf4XAvEBxP0XAkoBxP0XAkoBf/0XAqQAr/65AUoBVv9bAaQAJf65Af3/Ef9bAf3/Vv9bAaQAr/65AUoBf/0XAqQAEf9bAf3//P/8AP3/Vv9bAaQAJf65Af3/Vv9bAaQAf/0XAqQAof0XAgP/r/1TAv3/Cf4XAgn+r/6QArD+Cf4XAgn+r/1TAv3/r/6QArD+r/1TAv3/Jf6QAv3/of0XAgP/Ov0XAv3/r/1TAv3/r/65AbD+Jf65Af3/of0XAgP/of0XAgP/Jf65Af3/Ov0XAv3/r/65AbD+of0XAgP/Cf4XAgn+Ef9bAf3/r/65AbD+Vv9bAVf/Vv9bAVf//P/8AP3/Ef9bAf3/Jf65Af3/r/65AbD+Ef9bAf3/Av8XAqL9/P+QAib+/P8XAjv9Cf4XAgn+r/6QArD+Av8XAqL9/P+QAib+Av8XAqL9r/6QArD+Av8XAqL9/P8XAjv9/P+5ASb+Av8XAqL9r/65AbD+Cf4XAgn+r/65AbD+Av8XAqL9/P+5ASb+Vv9bAVf//P9bARL//P/8AP3/Vv9bAVf/r/65AbD+/P+5ASb+/P9bARL/Vv9bAVf//P+5ASb+9gAXAqL9SQGQArD+8AEXAgn+/P8XAjv9/P+QAib+9gAXAqL9SQGQArD+9gAXAqL9/P+QAib+SQG5AbD+/P+5ASb+9gAXAqL99gAXAqL9/P+5ASb+/P8XAjv9SQG5AbD+9gAXAqL98AEXAgn+/P9bARL/SQG5AbD+owBbAVf/owBbAVf//P/8AP3//P9bARL//P+5ASb+SQG5AbD+/P9bARL/VwIXAgP/0wGQAv3/vwIXAv3/8AEXAgn+SQGQArD+VwIXAgP/0wGQAv3/VwIXAgP/SQGQArD+VwIXAgP/vwIXAv3/0wG5Af3/VwIXAgP/SQG5AbD+8AEXAgn+SQG5AbD+VwIXAgP/0wG5Af3/owBbAVf/6ABbAf3//P/8AP3/owBbAVf/SQG5AbD+0wG5Af3/6ABbAf3/owBbAVf/0wG5Af3/SQG5AUoB0wG5Af3/VwIXAvcAVwIXAvcA0wG5Af3/vwIXAv3/SQG5AUoBVwIXAvcA8AEXAvEB6ABbAf3/SQG5AUoBowBbAaQAowBbAaQA/P/8AP3/6ABbAf3/0wG5Af3/SQG5AUoB6ABbAf3/0wGQAv3/SQGQAkoBnAFTAp0BVwIXAvcAnAFTAp0B8AEXAvEBVwIXAvcAvwIXAv3/nAFTAp0B0wGQAv3/nAFTAp0BvwIXAv3/owCQAo8Bav6QAqQAr/6QAkoBJf6QAv3/av6QAqQAr/6QArD+av6QAqQA/P+QAib+r/6QArD+/P+QAtQBowCQAo8Br/6QAkoB0wGQAv3/owCQAo8BSQGQAkoBav6QAqQASQGQArD+/P+QAib+0wGQAv3/SQGQArD+owCQAo8BowCQAo8BSQGQArD+av6QAqQAQwFQA0QB/P9QA8wBfwATA/IB/P9QA8wB/P8TAygCfwATA/IBfwCMAzkB/P+MA28B/P9QA8wBQwFQA0QBAgGMAwMBfwCMAzkBhQETA4YBQwFQA0QBAgETA7wBQwFQA0QBfwATA/IBAgETA7wBfwCMAzkB/P9QA8wBQwFQA0QB/P+1Am8BfwATA/IB/P8TAygCAgG1AgMBhQETA4YBAgETA7wBAgETA7wBfwATA/IBAgG1AgMBfwBXAoAA/P+1Am8B/P9XArYAfwATA/IBfwBXAoAAAgG1AgMB/P/5Af3/fwBXAoAA/P9XArYA/P+1Am8BfwBXAoAAfwATA/IB/P+MA28B9v6MAwMBtf5QA0QBOP8TA9cBtf5QA0QBdP4TA4YBtf5QA0QBOP8TA9cB/P9QA8wB/P9QA8wBOP8TA9cB/P8TAygC/P+MA28Btf5QA0QB/P9QA8wB9v61AgMB/P+1Am8BOP8TA9cBOP8TA9cB/P+1Am8B/P8TAygC9v61AgMBOP8TA9cBdP4TA4YB/P9XArYA9v61AgMBef9XAoAAef9XAoAA/P/5Af3//P9XArYA/P+1Am8B9v61AgMB/P9XArYAPf4TAwMBLf5QA/3/B/4TA4AALf5QA/3/0f0TA/3/B/4TA4AAwP6MA4AAiv6MA/3/Lf5QA/3/tf5QA0QB9v6MAwMBwP6MA4AAdP4TA4YBtf5QA0QBPf4TAwMBtf5QA0QBLf5QA/3/Pf4TAwMBwP6MA4AALf5QA/3/tf5QA0QBiv61Av3/B/4TA4AA0f0TA/3/9v61AgMBdP4TA4YBPf4TAwMBPf4TAwMBB/4TA4AA9v61AgMBrv6nAhEAiv61Av3/Q/9XAv3/rv6nAhEAQ/9XAv3/Rf9XAgIAUP9eAkEARv9XAgUAX/9XAkAA9v6HAioA8f6DAgoARf9XAgIA9v6HAioARf9XAgIARv9XAgUA9v6HAioARv9XAgUAS/9aAiIA3/6TAiwArv6nAhEA8f6DAgoA3/6TAiwA8f6DAgoA9v6HAioAGP98AkYAE/94AicAS/9aAiIAGP98AkYAS/9aAiIAUP9eAkEAEf+AAkcA3/6TAiwAE/94AicAEf+AAkcAE/94AicAGP98AkYAVf9jAmAAUP9eAkEAX/9XAkAAVf9jAmAAX/9XAkAAa/9XAl4AQ/9sAmIAEf+AAkcAUP9eAkEAQ/9sAmIAUP9eAkEAVf9jAmAAef9XAoAAQ/9sAmIAa/9XAl4Aef9XAoAA9v61AgMBB/4TA4AAQ/9XAv3/ff86Av3/Rf9XAgIAff86Av3//P/5Af3/w/8iAjYAff86Av3/w/8iAjYAbP9QAj4Aff86Av3/bP9QAj4AYv9IAgAAYv9IAgAAbP9QAj4AX/9XAkAAYv9IAgAAX/9XAkAARv9XAgUAYv9IAgAARv9XAgUARv9WAgIARv9WAgIARv9XAgUARf9XAgIAw/8iAjYAoP87AlkAa/9XAl4Aw/8iAjYAa/9XAl4AX/9XAkAAoP87AlkAkP9HAmkAjv9FAlsAjv9FAlsAkP9HAmkAff9UAnwAjv9FAlsAff9UAnwAeP9XAn0Ajv9FAlsAeP9XAn0Adf9XAncAjv9FAlsAdf9XAncAcf9UAl4Acf9UAl4Adf9XAncAa/9XAl4Aff9UAnwAef9XAoAAeP9XAn0Aiv61Av3/ef9XAoAAB/4TA4AAIv4TAzn/Lf5QA/3/dP4TA3X+9v6MA/f+dP4TA3X+Lf5QA/3/9v6MA/f+Lf5QA/3/iv6MA/3/Iv4TAzn/0f0TA/3/Lf5QA/3/9v61Avf+iv61Av3/Iv4TAzn/Iv4TAzn/iv61Av3/0f0TA/3/9v61Avf+Iv4TAzn/dP4TA3X+Q/9XAv3/9v61Avf+ef9XAnr/ef9XAnr//P/5Af3/Q/9XAv3/iv61Av3/9v61Avf+Q/9XAv3/OP8TAyP+/P+MA4v+/P8TA9L9dP4TA3X+9v6MA/f+OP8TAyP+/P+MA4v+OP8TAyP+9v6MA/f+OP8TAyP+/P8TA9L9/P+1Aov+OP8TAyP+9v61Avf+dP4TA3X+9v61Avf+OP8TAyP+/P+1Aov+ef9XAnr//P9XAkT//P/5Af3/ef9XAnr/9v61Avf+/P+1Aov+/P9XAkT/ef9XAnr//P+1Aov+wAATAyP+AgGMA/f+hQETA3X+/P8TA9L9/P+MA4v+wAATAyP+AgGMA/f+wAATAyP+/P+MA4v+AgG1Avf+/P+1Aov+wAATAyP+wAATAyP+/P+1Aov+/P8TA9L9AgG1Avf+wAATAyP+hQETA3X+/P9XAkT/AgG1Avf+fwBXAnr/fwBXAnr//P/5Af3//P9XAkT//P+1Aov+AgG1Avf+/P9XAkT/1gETAzn/bgGMA/3/JwITA/3/hQETA3X+AgGMA/f+1gETAzn/bgGMA/3/1gETAzn/AgGMA/f+1gETAzn/JwITA/3/bgG1Av3/1gETAzn/AgG1Avf+hQETA3X+AgG1Avf+1gETAzn/bgG1Av3/fwBXAnr/tQBXAv3//P/5Af3/fwBXAnr/AgG1Avf+bgG1Av3/tQBXAv3/fwBXAnr/bgG1Av3/AgG1AgMBbgG1Av3/1gETA8EA1gETA8EAbgG1Av3/JwITA/3/AgG1AgMB1gETA8EAhQETA4YBtQBXAv3/AgG1AgMBfwBXAoAAfwBXAoAA/P/5Af3/tQBXAv3/bgG1Av3/AgG1AgMBtQBXAv3/bgGMA/3/AgGMAwMBQwFQA0QB1gETA8EAQwFQA0QBhQETA4YB1gETA8EAJwITA/3/QwFQA0QBbgGMA/3/QwFQA0QBJwITA/3/fwCMAzkBwP6MA4AA9v6MAwMBiv6MA/3/wP6MA4AA9v6MA/f+wP6MA4AA/P+MA4v+9v6MA/f+/P+MA28BfwCMAzkB9v6MAwMBbgGMA/3/fwCMAzkBAgGMAwMBwP6MA4AAAgGMA/f+/P+MA4v+bgGMA/3/AgGMA/f+fwCMAzkBfwCMAzkBAgGMA/f+wP6MA4AACAFUBAkB/P9UBHgBZwAfBJcB/P9UBHgB/P8fBMMBZwAfBJcBZwCJBP8A/P+JBCwB/P9UBHgBCAFUBAkB0gCJBNMAZwCJBP8APQEfBD4BCAFUBAkB0gAfBGsBCAFUBAkBZwAfBJcB0gAfBGsBZwCJBP8A/P9UBHgBCAFUBAkB/P/MAywBZwAfBJcB/P8fBMMB0gDMA9MAPQEfBD4B0gAfBGsB0gAfBGsBZwAfBJcB0gDMA9MAZwB6A2gA/P/MAywB/P96A5QAZwAfBJcBZwB6A2gA0gDMA9MA/P8nA/3/ZwB6A2gA/P96A5QA/P/MAywBZwB6A2gAZwAfBJcB/P+JBCwBJv+JBNMA8P5UBAkBW/8fBIEB8P5UBAkBu/4fBD4B8P5UBAkBW/8fBIEB/P9UBHgB/P9UBHgBW/8fBIEB/P8fBMMB/P+JBCwB8P5UBAkB/P9UBHgBJv/MA9MA/P/MAywBW/8fBIEBW/8fBIEB/P/MAywB/P8fBMMBJv/MA9MAW/8fBIEBu/4fBD4B/P96A5QAJv/MA9MAkf96A2gAkf96A2gA/P8nA/3//P96A5QA/P/MAywBJv/MA9MA/P96A5QAj/4fBNMAgv5UBP3/Yv4fBGgAgv5UBP3/Nv4fBP3/Yv4fBGgA+v6JBGgAzf6JBP3/gv5UBP3/8P5UBAkBJv+JBNMA+v6JBGgAu/4fBD4B8P5UBAkBj/4fBNMA8P5UBAkBgv5UBP3/j/4fBNMA+v6JBGgAgv5UBP3/8P5UBAkBzf7MA/3/Yv4fBGgANv4fBP3/Jv/MA9MAu/4fBD4Bj/4fBNMAj/4fBNMAYv4fBGgAJv/MA9MAkf96A2gAzf7MA/3/Zf96A/3/kf96A2gAJv/MA9MAYv4fBGgAZf96A/3//P8nA/3/kf96A2gAzf7MA/3/kf96A2gAYv4fBGgAeP4fBFz/gv5UBP3/u/4fBLz+Jv+JBCf/u/4fBLz+gv5UBP3/Jv+JBCf/gv5UBP3/zf6JBP3/eP4fBFz/Nv4fBP3/gv5UBP3/Jv/MAyf/zf7MA/3/eP4fBFz/eP4fBFz/zf7MA/3/Nv4fBP3/Jv/MAyf/eP4fBFz/u/4fBLz+Zf96A/3/Jv/MAyf/kf96A5L/kf96A5L//P8nA/3/Zf96A/3/zf7MA/3/Jv/MAyf/Zf96A/3/W/8fBHn+/P+JBM7+/P8fBDf+u/4fBLz+Jv+JBCf/W/8fBHn+/P+JBM7+W/8fBHn+Jv+JBCf/W/8fBHn+/P8fBDf+/P/MA87+W/8fBHn+Jv/MAyf/u/4fBLz+Jv/MAyf/W/8fBHn+/P/MA87+kf96A5L//P96A2b//P8nA/3/kf96A5L/Jv/MAyf//P/MA87+/P96A2b/kf96A5L//P/MA87+nQAfBHn+0gCJBCf/PQEfBLz+/P8fBDf+/P+JBM7+nQAfBHn+0gCJBCf/nQAfBHn+/P+JBM7+0gDMAyf//P/MA87+nQAfBHn+nQAfBHn+/P/MA87+/P8fBDf+0gDMAyf/nQAfBHn+PQEfBLz+/P96A2b/0gDMAyf/ZwB6A5L/ZwB6A5L//P8nA/3//P96A2b//P/MA87+0gDMAyf//P96A2b/gAEfBFz/KwGJBP3/wgEfBP3/PQEfBLz+0gCJBCf/gAEfBFz/KwGJBP3/gAEfBFz/0gCJBCf/gAEfBFz/wgEfBP3/KwHMA/3/gAEfBFz/0gDMAyf/PQEfBLz+0gDMAyf/gAEfBFz/KwHMA/3/ZwB6A5L/kwB6A/3//P8nA/3/ZwB6A5L/0gDMAyf/KwHMA/3/kwB6A/3/ZwB6A5L/KwHMA/3/0gDMA9MAKwHMA/3/gAEfBJ4AgAEfBJ4AKwHMA/3/wgEfBP3/0gDMA9MAgAEfBJ4APQEfBD4BkwB6A/3/0gDMA9MAZwB6A2gAZwB6A2gA/P8nA/3/kwB6A/3/KwHMA/3/0gDMA9MAkwB6A/3/KwGJBP3/0gCJBNMACAFUBAkBgAEfBJ4ACAFUBAkBPQEfBD4BgAEfBJ4AwgEfBP3/CAFUBAkBKwGJBP3/CAFUBAkBwgEfBP3/ZwCJBP8A+v6JBGgAJv+JBNMAzf6JBP3/+v6JBGgAJv+JBCf/+v6JBGgA/P+JBM7+Jv+JBCf//P+JBCwBZwCJBP8AJv+JBNMAKwGJBP3/ZwCJBP8A0gCJBNMA+v6JBGgA0gCJBCf//P+JBM7+KwGJBP3/0gCJBCf/ZwCJBP8AZwCJBP8A0gCJBCf/+v6JBGgASv++BK8A/P++BPkAtf/zBA4B/P++BPkA/P/zBCwBtf/zBA4Btf+JBKkA/P+JBMcA/P++BPkASv++BK8Abf+JBIwAtf+JBKkAJv/zBNMASv++BK8Abf/zBPEASv++BK8Atf/zBA4Bbf/zBPEAtf+JBKkA/P++BPkASv++BK8A/P9FBccAtf/zBA4B/P/zBCwBbf9FBYwAJv/zBNMAbf/zBPEAbf/zBPEAtf/zBA4Bbf9FBYwAtf+XBUQA/P9FBccA/P+XBWIAtf/zBA4Btf+XBUQAbf9FBYwA/P/qBf3/tf+XBUQA/P+XBWIA/P9FBccAtf+XBUQAtf/zBA4B/P+JBMcAiwCJBIwArgC+BK8AZwDzBP8ArgC+BK8A0gDzBNMArgC+BK8AZwDzBP8A/P++BPkA/P++BPkAZwDzBP8A/P/zBCwB/P+JBMcArgC+BK8A/P++BPkAiwBFBYwA/P9FBccAZwDzBP8AZwDzBP8A/P9FBccA/P/zBCwBiwBFBYwAZwDzBP8A0gDzBNMA/P+XBWIAiwBFBYwAQwCXBUQAQwCXBUQA/P/qBf3//P+XBWIA/P9FBccAiwBFBYwA/P+XBWIA8ADzBIwA+AC+BP3/DQHzBEQA+AC+BP3/KwHzBP3/DQHzBEQAqACJBEQAxgCJBP3/+AC+BP3/rgC+BK8AiwCJBIwAqACJBEQA0gDzBNMArgC+BK8A8ADzBIwArgC+BK8A+AC+BP3/8ADzBIwAqACJBEQA+AC+BP3/rgC+BK8AxgBFBf3/DQHzBEQAKwHzBP3/iwBFBYwA0gDzBNMA8ADzBIwA8ADzBIwADQHzBEQAiwBFBYwAQwCXBUQAxgBFBf3/YQCXBf3/QwCXBUQAiwBFBYwADQHzBEQAYQCXBf3//P/qBf3/QwCXBUQAxgBFBf3/QwCXBUQADQHzBEQA/gDzBJL/+AC+BP3/0gDzBCf/iwCJBG7/0gDzBCf/+AC+BP3/iwCJBG7/+AC+BP3/xgCJBP3//gDzBJL/KwHzBP3/+AC+BP3/iwBFBW7/xgBFBf3//gDzBJL//gDzBJL/xgBFBf3/KwHzBP3/iwBFBW7//gDzBJL/0gDzBCf/YQCXBf3/iwBFBW7/QwCXBbb/QwCXBbb//P/qBf3/YQCXBf3/xgBFBf3/iwBFBW7/YQCXBf3/ZwDzBPv+/P+JBDP//P/zBM7+0gDzBCf/iwCJBG7/ZwDzBPv+/P+JBDP/ZwDzBPv+iwCJBG7/ZwDzBPv+/P/zBM7+/P9FBTP/ZwDzBPv+iwBFBW7/0gDzBCf/iwBFBW7/ZwDzBPv+/P9FBTP/QwCXBbb//P+XBZj//P/qBf3/QwCXBbb/iwBFBW7//P9FBTP//P+XBZj/QwCXBbb//P9FBTP/kf/zBPv+bf+JBG7/Jv/zBCf//P/zBM7+/P+JBDP/kf/zBPv+bf+JBG7/kf/zBPv+/P+JBDP/bf9FBW7//P9FBTP/kf/zBPv+kf/zBPv+/P9FBTP//P/zBM7+bf9FBW7/kf/zBPv+Jv/zBCf//P+XBZj/bf9FBW7/tf+XBbb/tf+XBbb//P/qBf3//P+XBZj//P9FBTP/bf9FBW7//P+XBZj/+v7zBJL/Mv+JBP3/zf7zBP3/Jv/zBCf/bf+JBG7/+v7zBJL/Mv+JBP3/+v7zBJL/bf+JBG7/+v7zBJL/zf7zBP3/Mv9FBf3/+v7zBJL/bf9FBW7/Jv/zBCf/bf9FBW7/+v7zBJL/Mv9FBf3/tf+XBbb/l/+XBf3//P/qBf3/tf+XBbb/bf9FBW7/Mv9FBf3/l/+XBf3/tf+XBbb/Mv9FBf3/bf9FBYwAMv9FBf3/+v7zBGgA+v7zBGgAMv9FBf3/zf7zBP3/bf9FBYwA+v7zBGgAJv/zBNMAl/+XBf3/bf9FBYwAtf+XBUQAtf+XBUQA/P/qBf3/l/+XBf3/Mv9FBf3/bf9FBYwAl/+XBf3/Mv+JBP3/bf+JBIwASv++BK8A+v7zBGgASv++BK8AJv/zBNMA+v7zBGgAzf7zBP3/Sv++BK8AMv+JBP3/Sv++BK8Azf7zBP3/tf+JBKkAqACJBEQAiwCJBIwAxgCJBP3/qACJBEQAiwCJBG7/qACJBEQA/P+JBDP/iwCJBG7//P+JBMcAtf+JBKkAiwCJBIwAMv+JBP3/tf+JBKkAbf+JBIwAqACJBEQAbf+JBG7//P+JBDP/Mv+JBP3/bf+JBG7/tf+JBKkAtf+JBKkAbf+JBG7/qACJBEQA",c:"BAEEAQQBBAEEAQQBBAEEAQQBBAEEAQQBBAQEBAQEBAQBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBCAgICAgICBAQEBAQEBAICAgICBAQEBAQEAgICAgICAgQEBAQEBAQCAgICBAQEBAQEAgICBAQEBAQEAgICBAQEBAQEAgICBAQEBAQEBAQEBAQEAgICAgICAgICAgICAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDCAgIAwMICAMDCAgDAwMDAwMDAwgICAMDAwMICAgIAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJ"},scalini:{v:"AP+KAGAAAAGKAGAAAAFKAGAAAP+KAGAAAAFKAGAAAP9KAGAAAAFKACABAAGKACABAP+KACABAAFKACABAP+KACABAP9KACABAAGKACABAAGKAGAAAP+KAGAAAAGKACABAP+KAGAAAP+KACABAP9KAGAAAAFKAGAAAAFKACABAP9KAGAAAAFKACABAP9KACABAAFKAGAAAAGKAGAAAAGKACABAAFKAGAAAAGKACABAAFKACABAP+KACABAP+KAGAAAP9KAGAAAP+KACABAP9KAGAAAP9KACABAP8zAcD/AAEzAcD/AAHzAMD/AP8zAcD/AAHzAMD/AP/zAMD/AAHzAIAAAAEzAYAAAP8zAYAAAAHzAIAAAP8zAYAAAP/zAIAAAAEzAYAAAAEzAcD/AP8zAcD/AAEzAYAAAP8zAcD/AP8zAYAAAP/zAMD/AAHzAMD/AAHzAIAAAP/zAMD/AAHzAIAAAP/zAIAAAAHzAMD/AAEzAcD/AAEzAYAAAAHzAMD/AAEzAYAAAAHzAIAAAP8zAYAAAP8zAcD/AP/zAMD/AP8zAYAAAP/zAMD/AP/zAIAAAP/gASD/AAHgASD/AAGgASD/AP/gASD/AAGgASD/AP+gASD/AAGgAeD/AAHgAeD/AP/gAeD/AAGgAeD/AP/gAeD/AP+gAeD/AAHgAeD/AAHgASD/AP/gASD/AAHgAeD/AP/gASD/AP/gAeD/AP+gASD/AAGgASD/AAGgAeD/AP+gASD/AAGgAeD/AP+gAeD/AAGgASD/AAHgASD/AAHgAeD/AAGgASD/AAHgAeD/AAGgAeD/AP/gAeD/AP/gASD/AP+gASD/AP/gAeD/AP+gASD/AP+gAeD/YP+mAWD/oP+mAWD/oP8zAWD/YP+mAWD/oP8zAWD/YP8zAWD/oP8zAaD/oP+mAaD/YP+mAaD/oP8zAaD/YP+mAaD/YP8zAaD/oP+mAaD/oP+mAWD/YP+mAWD/oP+mAaD/YP+mAWD/YP+mAaD/YP8zAWD/oP8zAWD/oP8zAaD/YP8zAWD/oP8zAaD/YP8zAaD/oP8zAWD/oP+mAWD/oP+mAaD/oP8zAWD/oP+mAaD/oP8zAaD/YP+mAaD/YP+mAWD/YP8zAWD/YP+mAaD/YP8zAWD/YP8zAaD/YAAzAWD/oAAzAWD/oADzAGD/YAAzAWD/oADzAGD/YADzAGD/oADzAMD/oAAzAcD/YAAzAcD/oADzAMD/YAAzAcD/YADzAMD/oAAzAcD/oAAzAWD/YAAzAWD/oAAzAcD/YAAzAWD/YAAzAcD/YADzAGD/oADzAGD/oADzAMD/YADzAGD/oADzAMD/YADzAMD/oADzAGD/oAAzAWD/oAAzAcD/oADzAGD/oAAzAcD/oADzAMD/YAAzAcD/YAAzAWD/YADzAGD/YAAzAcD/YADzAGD/YADzAMD/YP/gAcD+oP/gAcD+oP+gAcD+YP/gAcD+oP+gAcD+YP+gAcD+oP+gASD/oP/gASD/YP/gASD/oP+gASD/YP/gASD/YP+gASD/oP/gASD/oP/gAcD+YP/gAcD+oP/gASD/YP/gAcD+YP/gASD/YP+gAcD+oP+gAcD+oP+gASD/YP+gAcD+oP+gASD/YP+gASD/oP+gAcD+oP/gAcD+oP/gASD/oP+gAcD+oP/gASD/oP+gASD/YP/gASD/YP/gAcD+YP+gAcD+YP/gASD/YP+gAcD+YP+gASD/YADgAcD+oADgAcD+oACgAcD+YADgAcD+oACgAcD+YACgAcD+oACgASD/oADgASD/YADgASD/oACgASD/YADgASD/YACgASD/oADgASD/oADgAcD+YADgAcD+oADgASD/YADgAcD+YADgASD/YACgAcD+oACgAcD+oACgASD/YACgAcD+oACgASD/YACgASD/oACgAcD+oADgAcD+oADgASD/oACgAcD+oADgASD/oACgASD/YADgASD/YADgAcD+YACgAcD+YADgASD/YACgAcD+YACgASD/YACmAWD/oACmAWD/oAAzAWD/YACmAWD/oAAzAWD/YAAzAWD/oAAzAaD/oACmAaD/YACmAaD/oAAzAaD/YACmAaD/YAAzAaD/oACmAaD/oACmAWD/YACmAWD/oACmAaD/YACmAWD/YACmAaD/YAAzAWD/oAAzAWD/oAAzAaD/YAAzAWD/oAAzAaD/YAAzAaD/oAAzAWD/oACmAWD/oACmAaD/oAAzAWD/oACmAaD/oAAzAaD/YACmAaD/YACmAWD/YAAzAWD/YACmAaD/YAAzAWD/YAAzAaD/YP8zAWD/oP8zAWD/oP/zAGD/YP8zAWD/oP/zAGD/YP/zAGD/oP/zAMD/oP8zAcD/YP8zAcD/oP/zAMD/YP8zAcD/YP/zAMD/oP8zAcD/oP8zAWD/YP8zAWD/oP8zAcD/YP8zAWD/YP8zAcD/YP/zAGD/oP/zAGD/oP/zAMD/YP/zAGD/oP/zAMD/YP/zAMD/oP/zAGD/oP8zAWD/oP8zAcD/oP/zAGD/oP8zAcD/oP/zAMD/YP8zAcD/YP8zAWD/YP/zAGD/YP8zAcD/YP/zAGD/YP/zAMD/YAD9AAAAoAD9AAAAoACKAAAAYAD9AAAAoACKAAAAYACKAAAAoACKAEAAoAD9AEAAYAD9AEAAoACKAEAAYAD9AEAAYACKAEAAoAD9AEAAoAD9AAAAYAD9AAAAoAD9AEAAYAD9AAAAYAD9AEAAYACKAAAAoACKAAAAoACKAEAAYACKAAAAoACKAEAAYACKAEAAoACKAAAAoAD9AAAAoAD9AEAAoACKAAAAoAD9AEAAoACKAEAAYAD9AEAAYAD9AAAAYACKAAAAYAD9AEAAYACKAAAAYACKAEAAYACKAAAAoACKAAAAoABKAAAAYACKAAAAoABKAAAAYABKAAAAoABKAGAAoACKAGAAYACKAGAAoABKAGAAYACKAGAAYABKAGAAoACKAGAAoACKAAAAYACKAAAAoACKAGAAYACKAAAAYACKAGAAYABKAAAAoABKAAAAoABKAGAAYABKAAAAoABKAGAAYABKAGAAoABKAAAAoACKAAAAoACKAGAAoABKAAAAoACKAGAAoABKAGAAYACKAGAAYACKAAAAYABKAAAAYACKAGAAYABKAAAAYABKAGAAYP/9AAAAoP/9AAAAoP+KAAAAYP/9AAAAoP+KAAAAYP+KAAAAoP+KAEAAoP/9AEAAYP/9AEAAoP+KAEAAYP/9AEAAYP+KAEAAoP/9AEAAoP/9AAAAYP/9AAAAoP/9AEAAYP/9AAAAYP/9AEAAYP+KAAAAoP+KAAAAoP+KAEAAYP+KAAAAoP+KAEAAYP+KAEAAoP+KAAAAoP/9AAAAoP/9AEAAoP+KAAAAoP/9AEAAoP+KAEAAYP/9AEAAYP/9AAAAYP+KAAAAYP/9AEAAYP+KAAAAYP+KAEAAYP+KAAAAoP+KAAAAoP9KAAAAYP+KAAAAoP9KAAAAYP9KAAAAoP9KAGAAoP+KAGAAYP+KAGAAoP9KAGAAYP+KAGAAYP9KAGAAoP+KAGAAoP+KAAAAYP+KAAAAoP+KAGAAYP+KAAAAYP+KAGAAYP9KAAAAoP9KAAAAoP9KAGAAYP9KAAAAoP9KAGAAYP9KAGAAoP9KAAAAoP+KAAAAoP+KAGAAoP9KAAAAoP+KAGAAoP9KAGAAYP+KAGAAYP+KAAAAYP9KAAAAYP+KAGAAYP9KAAAAYP9KAGAAYABTAMAAoABTAMAAoADg/8AAYABTAMAAoADg/8AAYADg/8AAoADg/wABoABTAAABYABTAAABoADg/wABYABTAAABYADg/wABoABTAAABoABTAMAAYABTAMAAoABTAAABYABTAMAAYABTAAABYADg/8AAoADg/8AAoADg/wABYADg/8AAoADg/wABYADg/wABoADg/8AAoABTAMAAoABTAAABoADg/8AAoABTAAABoADg/wABYABTAAABYABTAMAAYADg/8AAYABTAAABYADg/8AAYADg/wABYP9TAMAAoP9TAMAAoP/g/8AAYP9TAMAAoP/g/8AAYP/g/8AAoP/g/wABoP9TAAABYP9TAAABoP/g/wABYP9TAAABYP/g/wABoP9TAAABoP9TAMAAYP9TAMAAoP9TAAABYP9TAMAAYP9TAAABYP/g/8AAoP/g/8AAoP/g/wABYP/g/8AAoP/g/wABYP/g/wABoP/g/8AAoP9TAMAAoP9TAAABoP/g/8AAoP9TAAABoP/g/wABYP9TAAABYP9TAMAAYP/g/8AAYP9TAAABYP/g/8AAYP/g/wAB",c:"ExMTEwICHh4TExMTExMTEwICHh4TExMTExMTEwICHh4TExMTAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB"},funghi:{v:"Lf+TAIAAlP++AMAAiP/bAEAALf+TAIAARv9YAIAArP+CAMAALf+TAIAArP+CAMAAlP++AMAArP+CAMAARv9YAIAAuP9lAEAAlP++AMAA+v/oAIAAiP/bAEAAlP++AMAArP+CAMAAEwCtAIAAlP++AMAAEwCtAIAA+v/oAIAAEwCtAIAArP+CAMAAuP9lAEAA+v/oAIAA+v/oAAAAiP/bAEAA+v/oAIAAEwCtAIAAEwCtAAAA+v/oAIAAEwCtAAAA+v/oAAAAEwCtAAAAEwCtAIAAuP9lAEAA+v/oAAAAlP++AMD/iP/bAEAA+v/oAAAAEwCtAAAArP+CAMD/+v/oAAAArP+CAMD/lP++AMD/rP+CAMD/EwCtAAAAuP9lAEAAlP++AMD/Lf+TAAAAiP/bAEAAlP++AMD/rP+CAMD/Rv9YAAAAlP++AMD/Rv9YAAAALf+TAAAARv9YAAAArP+CAMD/uP9lAEAALf+TAAAALf+TAIAAiP/bAEAALf+TAAAARv9YAAAARv9YAIAALf+TAAAARv9YAIAALf+TAIAARv9YAIAARv9YAAAAuP9lAEAANACMACMAhQBqACoAcgCMAOD/NACMACMAIgBgACMAcwA+ACoANACMACMAcwA+ACoAhQBqACoAcwA+ACoAIgBgACMATgA0AOD/hQBqACoAuwBUAOf/cgCMAOD/hQBqACoAcwA+ACoAqAAoAOf/hQBqACoAqAAoAOf/uwBUAOf/qAAoAOf/cwA+ACoATgA0AOD/uwBUAOf/ngBgAJ3/cgCMAOD/uwBUAOf/qAAoAOf/jAA0AJ3/uwBUAOf/jAA0AJ3/ngBgAJ3/jAA0AJ3/qAAoAOf/TgA0AOD/ngBgAJ3/TQCCAJb/cgCMAOD/ngBgAJ3/jAA0AJ3/OwBWAJb/ngBgAJ3/OwBWAJb/TQCCAJb/OwBWAJb/jAA0AJ3/TgA0AOD/TQCCAJb/GACYANn/cgCMAOD/TQCCAJb/OwBWAJb/BQBsANn/TQCCAJb/BQBsANn/GACYANn/BQBsANn/OwBWAJb/TgA0AOD/GACYANn/NACMACMAcgCMAOD/GACYANn/BQBsANn/IgBgACMAGACYANn/IgBgACMANACMACMAIgBgACMABQBsANn/TgA0AOD/u//n/38AmP/d/yYA1P/t/0AAmP/d/yYAu//n/38Amv/GAEAAEQD+/1oAu//n/38A1P/t/0AAu//n/38AEQD+/1oAmv/GAEAA7f/0/wEAEQD+/1oA1P/t/0AAEQD+/1oA7f/0/wEAmv/GAEAAmP/d/yYA7f/0/wEA1P/t/0AA7f/0/wEAmP/d/yYAmv/GAEAAWwDm/wAAHgD5/wAAPQDv/+D/HgD5/wAAWwDm/wAAbQCIAOD/WwDm/8D/WwDm/wAAPQDv/+D/WwDm/wAAWwDm/8D/bQCIAOD/HgD5/8D/WwDm/8D/PQDv/+D/WwDm/8D/HgD5/8D/bQCIAOD/HgD5/wAAHgD5/8D/PQDv/+D/HgD5/8D/HgD5/wAAbQCIAOD/",c:"HwYGDR8GBg0fBgYNHwYGDR8GBg0fBgYNBAwMDQQMDA0EDAwNBAwMDQQMDA0EDAwNBwcHBwcHBwcHBwcHBwcHBw=="},sasso:{v:"bAAgAHIAuv8gALwAuv8AALwAbAAgAHIAuv8AALwAbAAAAHIAQP8AAJT/QP8gAJT/8f8gAEr/QP8AAJT/8f8gAEr/8f8AAEr/ov9gAIAAUwBgADcACgBgAIb/ov9gAIAACgBgAIb/WP9gAM//CgDA/4b/UwDA/zcAov/A/4AACgDA/4b/ov/A/4AAWP/A/8//Z/8AAJkAZ/8gAJkAHf8gAOj/Z/8AAJkAHf8gAOj/Hf8AAOj/RQAgAG3/jgAgAB4AjgAAAB4ARQAgAG3/jgAAAB4ARQAAAG3/UwBgADcAov9gAIAAuv8gALwAUwBgADcAuv8gALwAbAAgAHIAQP8gAJT/WP9gAM//CgBgAIb/QP8gAJT/CgBgAIb/8f8gAEr/Z/8gAJkAov9gAIAAWP9gAM//Z/8gAJkAWP9gAM//Hf8gAOj/CgBgAIb/UwBgADcAjgAgAB4ACgBgAIb/jgAgAB4ARQAgAG3/uv8AALwAov/A/4AAUwDA/zcAuv8AALwAUwDA/zcAbAAAAHIACgDA/4b/WP/A/8//QP8AAJT/CgDA/4b/QP8AAJT/8f8AAEr/WP/A/8//ov/A/4AAZ/8AAJkAWP/A/8//Z/8AAJkAHf8AAOj/jgAAAB4AUwDA/zcACgDA/4b/jgAAAB4ACgDA/4b/RQAAAG3/bAAAAHIAjgAAAB4AjgAgAB4AbAAAAHIAjgAgAB4AbAAgAHIAZ/8gAJkAZ/8AAJkAuv8AALwAZ/8gAJkAuv8AALwAuv8gALwARQAgAG3/RQAAAG3/8f8AAEr/RQAgAG3/8f8AAEr/8f8gAEr/QP8AAJT/Hf8AAOj/Hf8gAOj/QP8AAJT/Hf8gAOj/QP8gAJT/ov/A/4AAuv8AALwAZ/8AAJkAWP/A/8//Hf8AAOj/QP8AAJT/UwDA/zcAjgAAAB4AbAAAAHIACgDA/4b/8f8AAEr/RQAAAG3/ov9gAIAAZ/8gAJkAuv8gALwAWP9gAM//QP8gAJT/Hf8gAOj/UwBgADcAbAAgAHIAjgAgAB4ACgBgAIb/RQAgAG3/8f8gAEr/5QAgAEcAoQAgAIsAoQAAAIsA5QAgAEcAoQAAAIsA5QAAAEcAMAAAABoAMAAgABoAdAAgANb/MAAAABoAdAAgANb/dAAAANb/iwBAAHQAzwBAADAAiwBAAOz/iwBAAHQAiwBAAOz/RwBAADAAiwDg/+z/zwDg/zAAiwDg/3QAiwDg/+z/iwDg/3QARwDg/zAAdAAAAIsAdAAgAIsAMAAgAEcAdAAAAIsAMAAgAEcAMAAAAEcAoQAgANb/5QAgABoA5QAAABoAoQAgANb/5QAAABoAoQAAANb/zwBAADAAiwBAAHQAoQAgAIsAzwBAADAAoQAgAIsA5QAgAEcAMAAgABoARwBAADAAiwBAAOz/MAAgABoAiwBAAOz/dAAgANb/dAAgAIsAiwBAAHQARwBAADAAdAAgAIsARwBAADAAMAAgAEcAiwBAAOz/zwBAADAA5QAgABoAiwBAAOz/5QAgABoAoQAgANb/oQAAAIsAiwDg/3QAzwDg/zAAoQAAAIsAzwDg/zAA5QAAAEcAiwDg/+z/RwDg/zAAMAAAABoAiwDg/+z/MAAAABoAdAAAANb/RwDg/zAAiwDg/3QAdAAAAIsARwDg/zAAdAAAAIsAMAAAAEcA5QAAABoAzwDg/zAAiwDg/+z/5QAAABoAiwDg/+z/oQAAANb/5QAAAEcA5QAAABoA5QAgABoA5QAAAEcA5QAgABoA5QAgAEcAdAAgAIsAdAAAAIsAoQAAAIsAdAAgAIsAoQAAAIsAoQAgAIsAoQAgANb/oQAAANb/dAAAANb/oQAgANb/dAAAANb/dAAgANb/MAAAABoAMAAAAEcAMAAgAEcAMAAAABoAMAAgAEcAMAAgABoAiwDg/3QAoQAAAIsAdAAAAIsARwDg/zAAMAAAAEcAMAAAABoAzwDg/zAA5QAAABoA5QAAAEcAiwDg/+z/dAAAANb/oQAAANb/iwBAAHQAdAAgAIsAoQAgAIsARwBAADAAMAAgABoAMAAgAEcAzwBAADAA5QAgAEcA5QAgABoAiwBAAOz/oQAgANb/dAAgANb/",c:"Dw8PDxsbDw8PDw8PGRkZGRkZGRkPDw8PDw8PDw8PDw8PDw8PDw8PDxkZGRkPDw8PGxsPDw8PDw8ZGRkZGRkZGQ8PDw8PDw8PDw8PDw8PDw8PDw8PGRkZGQ=="},ciuffo:{v:"2//GAN//4//GANj/+f/c/+3/2//GAN//+f/c/+3/8f/c//X/JgDk/xoAEADOAAQACADOAAwAJgDk/xoACADOAAwAHgDk/yIA7//mAOT/6P/mAOv/9//oAPr/7//mAOT/9//oAPr//v/oAPP/EgDE/xUAAwDC/wcACgDC////EgDE/xUACgDC////GQDE/w4ADwDf//X/+f/IAN//CADLAO7/DwDf//X/CADLAO7/HgDi/wQA8v/LAAUA4//IAPb/+f/f/wsA8v/LAAUA+f/f/wsABwDi/xoA6P/mAOv/7//mAOT/4//GANj/6P/mAOv/4//GANj/2//GAN//EADOAAQA/v/oAPP/9//oAPr/EADOAAQA9//oAPr/CADOAAwA+f/IAN//7//mAOT//v/oAPP/+f/IAN///v/oAPP/CADLAO7/9//oAPr/6P/mAOv/4//IAPb/9//oAPr/4//IAPb/8v/LAAUA+f/c/+3/CgDC////AwDC/wcA+f/c/+3/AwDC/wcA8f/c//X/EgDE/xUAGQDE/w4AJgDk/xoAEgDE/xUAJgDk/xoAHgDk/yIAGQDE/w4ACgDC////DwDf//X/GQDE/w4ADwDf//X/HgDi/wQA+f/f/wsAAwDC/wcAEgDE/xUA+f/f/wsAEgDE/xUABwDi/xoA8f/c//X/+f/f/wsA4//IAPb/8f/c//X/4//IAPb/2//GAN//+f/IAN//DwDf//X/+f/c/+3/+f/IAN//+f/c/+3/4//GANj/8v/LAAUABwDi/xoAHgDk/yIA8v/LAAUAHgDk/yIACADOAAwAJgDk/xoAHgDi/wQACADLAO7/JgDk/xoACADLAO7/EADOAAQACgDC////+f/c/+3/DwDf//X/GQDE/w4AHgDi/wQAJgDk/xoAAwDC/wcA+f/f/wsA8f/c//X/EgDE/xUAHgDk/yIABwDi/xoA7//mAOT/+f/IAN//4//GANj//v/oAPP/EADOAAQACADLAO7/6P/mAOv/2//GAN//4//IAPb/9//oAPr/8v/LAAUACADOAAwA0v+qAIEA3P+rAIUADADs/08A0v+qAIEADADs/08AAgDr/0sAAgDh/2sA0v+hAKIAyP+fAJ4AAgDh/2sAyP+fAJ4A+P/g/2cA0//AAJYAyf++AJIAxv+7AJsA0//AAJYAxv+7AJsAz/+8AJ8AAQDM/1cABQDP/00ADgDQ/1EAAQDM/1cADgDQ/1EACwDN/1sAEgDq/1wA4/+pAJMA3/+mAJwAEgDq/1wA3/+mAJwADwDm/2YAwv+iAJAAxf+lAIcA9f/m/1AAwv+iAJAA9f/m/1AA8f/i/1kAyf++AJIA0//AAJYA3P+rAIUAyf++AJIA3P+rAIUA0v+qAIEA0v+hAKIAz/+8AJ8Axv+7AJsA0v+hAKIAxv+7AJsAyP+fAJ4A4/+pAJMA0//AAJYAz/+8AJ8A4/+pAJMAz/+8AJ8A3/+mAJwAxv+7AJsAyf++AJIAxf+lAIcAxv+7AJsAxf+lAIcAwv+iAJAADADs/08ADgDQ/1EABQDP/00ADADs/08ABQDP/00AAgDr/0sAAQDM/1cACwDN/1sAAgDh/2sAAQDM/1cAAgDh/2sA+P/g/2cACwDN/1sADgDQ/1EAEgDq/1wACwDN/1sAEgDq/1wADwDm/2YA9f/m/1AABQDP/00AAQDM/1cA9f/m/1AAAQDM/1cA8f/i/1kAAgDr/0sA9f/m/1AAxf+lAIcAAgDr/0sAxf+lAIcA0v+qAIEA4/+pAJMAEgDq/1wADADs/08A4/+pAJMADADs/08A3P+rAIUAwv+iAJAA8f/i/1kA+P/g/2cAwv+iAJAA+P/g/2cAyP+fAJ4AAgDh/2sADwDm/2YA3/+mAJwAAgDh/2sA3/+mAJwA0v+hAKIADgDQ/1EADADs/08AEgDq/1wACwDN/1sADwDm/2YAAgDh/2sABQDP/00A9f/m/1AAAgDr/0sAAQDM/1cA+P/g/2cA8f/i/1kA0//AAJYA4/+pAJMA3P+rAIUAz/+8AJ8A0v+hAKIA3/+mAJwAyf++AJIA0v+qAIEAxf+lAIcAxv+7AJsAwv+iAJAAyP+fAJ4ATgBtAP3/RgBuAAQAXgDe/zUATgBtAP3/XgDe/zUAZgDd/y0AXgDe/zUARgBuAAQATgBtAP3/XgDe/zUATgBtAP3/ZgDd/y0AQwCAAP7/SwB/APb/SwB/APb/QwCAAP7/SwB/APb/QwCAAP7/aQDL/zMAaQDL/zMAYQDM/zsAaQDL/zMAYQDM/zsAYQDM/zsAVwDg/zwAPwBvAAwAPwBvAAwAVwDg/zwAPwBvAAwAVwDg/zwAVQBsAPX/VQBsAPX/bQDc/yYAVQBsAPX/bQDc/yYAbQDc/yYASwB/APb/QwCAAP7/RgBuAAQASwB/APb/RgBuAAQATgBtAP3/RgBuAAQAQwCAAP7/SwB/APb/RgBuAAQASwB/APb/TgBtAP3/PwBvAAwAQwCAAP7/QwCAAP7/PwBvAAwAQwCAAP7/PwBvAAwASwB/APb/SwB/APb/VQBsAPX/SwB/APb/VQBsAPX/VQBsAPX/XgDe/zUAYQDM/zsAaQDL/zMAXgDe/zUAaQDL/zMAZgDd/y0AaQDL/zMAYQDM/zsAXgDe/zUAaQDL/zMAXgDe/zUAZgDd/y0AYQDM/zsAYQDM/zsAVwDg/zwAYQDM/zsAVwDg/zwAVwDg/zwAbQDc/yYAaQDL/zMAaQDL/zMAbQDc/yYAaQDL/zMAbQDc/yYAZgDd/y0AbQDc/yYAVQBsAPX/ZgDd/y0AVQBsAPX/TgBtAP3/PwBvAAwAVwDg/zwAXgDe/zUAPwBvAAwAXgDe/zUARgBuAAQAVQBsAPX/bQDc/yYAZgDd/y0AVQBsAPX/ZgDd/y0ATgBtAP3/XgDe/zUAVwDg/zwAPwBvAAwAXgDe/zUAPwBvAAwARgBuAAQAYQDM/zsAXgDe/zUAVwDg/zwAYQDM/zsAVwDg/zwAXgDe/zUAaQDL/zMAbQDc/yYAZgDd/y0AaQDL/zMAZgDd/y0AbQDc/yYAQwCAAP7/PwBvAAwARgBuAAQAQwCAAP7/RgBuAAQAPwBvAAwASwB/APb/TgBtAP3/VQBsAPX/SwB/APb/VQBsAPX/TgBtAP3/mAB5APX/nAB5AP7/igDg/wYAmAB5APX/igDg/wYAhgDg//z/bQDl/xIAfwB9AAsAewB9AAEAbQDl/xIAewB9AAEAaQDl/wgAlQCNAAIAkQCNAPj/hwCPAPz/lQCNAAIAhwCPAPz/iwCPAAYAcADQ/wUAegDP/wEAfgDP/wsAcADQ/wUAfgDP/wsAdADQ/w8AhADi/xQAlwB6AAwAjQB7ABAAhADi/xQAjQB7ABAAegDj/xgAgQB7APP/iwB6AO//eADi//b/gQB7APP/eADi//b/bgDj//r/kQCNAPj/lQCNAAIAnAB5AP7/kQCNAPj/nAB5AP7/mAB5APX/fwB9AAsAiwCPAAYAhwCPAPz/fwB9AAsAhwCPAPz/ewB9AAEAlwB6AAwAlQCNAAIAiwCPAAYAlwB6AAwAiwCPAAYAjQB7ABAAhwCPAPz/kQCNAPj/iwB6AO//hwCPAPz/iwB6AO//gQB7APP/igDg/wYAfgDP/wsAegDP/wEAigDg/wYAegDP/wEAhgDg//z/cADQ/wUAdADQ/w8AbQDl/xIAcADQ/wUAbQDl/xIAaQDl/wgAdADQ/w8AfgDP/wsAhADi/xQAdADQ/w8AhADi/xQAegDj/xgAeADi//b/egDP/wEAcADQ/wUAeADi//b/cADQ/wUAbgDj//r/hgDg//z/eADi//b/iwB6AO//hgDg//z/iwB6AO//mAB5APX/lwB6AAwAhADi/xQAigDg/wYAlwB6AAwAigDg/wYAnAB5AP7/gQB7APP/bgDj//r/aQDl/wgAgQB7APP/aQDl/wgAewB9AAEAbQDl/xIAegDj/xgAjQB7ABAAbQDl/xIAjQB7ABAAfwB9AAsAfgDP/wsAigDg/wYAhADi/xQAdADQ/w8AegDj/xgAbQDl/xIAegDP/wEAeADi//b/hgDg//z/cADQ/wUAaQDl/wgAbgDj//r/lQCNAAIAlwB6AAwAnAB5AP7/iwCPAAYAfwB9AAsAjQB7ABAAkQCNAPj/mAB5APX/iwB6AO//hwCPAPz/gQB7APP/ewB9AAEAqP9sANv/oP9sANP/rP/o/8f/qP9sANv/rP/o/8f/tP/o/87/2f/x/5r/zf91AKb/1f91AK7/2f/x/5r/1f91AK7/4f/x/6H/rv+AAMb/tf+AAM3/xP+DAL7/rv+AAMb/xP+DAL7/vP+DALf/0//e/6//xP/b/77/vf/b/7b/0//e/6//vf/b/7b/zP/e/6f/tP/r/7D/qP9vALz/tv9yAK7/tP/r/7D/tv9yAK7/w//u/6H/zf9yAMT/vv9vANP/yv/r/8f/zf9yAMT/yv/r/8f/2f/u/7j/tf+AAM3/rv+AAMb/oP9sANP/tf+AAM3/oP9sANP/qP9sANv/zf91AKb/vP+DALf/xP+DAL7/zf91AKb/xP+DAL7/1f91AK7/qP9vALz/rv+AAMb/vP+DALf/qP9vALz/vP+DALf/tv9yAK7/xP+DAL7/tf+AAM3/vv9vANP/xP+DAL7/vv9vANP/zf9yAMT/rP/o/8f/vf/b/7b/xP/b/77/rP/o/8f/xP/b/77/tP/o/87/0//e/6//zP/e/6f/2f/x/5r/0//e/6//2f/x/5r/4f/x/6H/zP/e/6f/vf/b/7b/tP/r/7D/zP/e/6f/tP/r/7D/w//u/6H/yv/r/8f/xP/b/77/0//e/6//yv/r/8f/0//e/6//2f/u/7j/tP/o/87/yv/r/8f/vv9vANP/tP/o/87/vv9vANP/qP9sANv/qP9vALz/tP/r/7D/rP/o/8f/qP9vALz/rP/o/8f/oP9sANP/zf9yAMT/2f/u/7j/4f/x/6H/zf9yAMT/4f/x/6H/1f91AK7/2f/x/5r/w//u/6H/tv9yAK7/2f/x/5r/tv9yAK7/zf91AKb/vf/b/7b/rP/o/8f/tP/r/7D/zP/e/6f/w//u/6H/2f/x/5r/xP/b/77/yv/r/8f/tP/o/87/0//e/6//4f/x/6H/2f/u/7j/rv+AAMb/qP9vALz/oP9sANP/vP+DALf/zf91AKb/tv9yAK7/tf+AAM3/qP9sANv/vv9vANP/xP+DAL7/zf9yAMT/1f91AK7/+P86ABwA/P87ABIA4P/c//v/+P86ABwA4P/c//v/3P/a/wQA/f/R/wUAGAAxAB0AFAAwACcA/f/R/wUAFAAwACcA+P/Q/w8ACABEABkABABDACMADgA/ACYACABEABkADgA/ACYAEgBAABwA7P/H/wgA4v/L/wUA5v/M//v/7P/H/wgA5v/M//v/8P/J////7v/Z//T/CQA5AAwAEgA2ABAA7v/Z//T/EgA2ABAA9//W//j/BgAyAC0A/f81ACkA4v/W/xIABgAyAC0A4v/W/xIA6//S/xUABABDACMACABEABkA/P87ABIABABDACMA/P87ABIA+P86ABwAGAAxAB0AEgBAABwADgA/ACYAGAAxAB0ADgA/ACYAFAAwACcACQA5AAwACABEABkAEgBAABwACQA5AAwAEgBAABwAEgA2ABAADgA/ACYABABDACMA/f81ACkADgA/ACYA/f81ACkABgAyAC0A4P/c//v/5v/M//v/4v/L/wUA4P/c//v/4v/L/wUA3P/a/wQA7P/H/wgA8P/J/////f/R/wUA7P/H/wgA/f/R/wUA+P/Q/w8A8P/J////5v/M//v/7v/Z//T/8P/J////7v/Z//T/9//W//j/4v/W/xIA4v/L/wUA7P/H/wgA4v/W/xIA7P/H/wgA6//S/xUA3P/a/wQA4v/W/xIA/f81ACkA3P/a/wQA/f81ACkA+P86ABwACQA5AAwA7v/Z//T/4P/c//v/CQA5AAwA4P/c//v//P87ABIABgAyAC0A6//S/xUA+P/Q/w8ABgAyAC0A+P/Q/w8AFAAwACcA/f/R/wUA9//W//j/EgA2ABAA/f/R/wUAEgA2ABAAGAAxAB0A5v/M//v/4P/c//v/7v/Z//T/8P/J////9//W//j//f/R/wUA4v/L/wUA4v/W/xIA3P/a/wQA7P/H/wgA+P/Q/w8A6//S/xUACABEABkACQA5AAwA/P87ABIAEgBAABwAGAAxAB0AEgA2ABAABABDACMA+P86ABwA/f81ACkADgA/ACYABgAyAC0AFAAwACcAGgA/AIX/JAA/AIH/KQDa/47/GgA/AIX/KQDa/47/HwDa/5L/NQDe/6v/MABDAJ//JgBDAKP/NQDe/6v/JgBDAKP/KwDe/6//JwBNAIn/HQBNAI7/IQBPAJf/JwBNAIn/IQBPAJf/KwBPAJP/KADQ/6f/IwDO/53/LQDO/5n/KADQ/6f/LQDO/5n/MQDQ/6P/NwDb/5P/MQBBAIf/NQBCAJH/NwDb/5P/NQBCAJH/OwDd/53/GABCAJ3/FABBAJP/GQDb/6D/GABCAJ3/GQDb/6D/HQDd/6n/HQBNAI7/JwBNAIn/JAA/AIH/HQBNAI7/JAA/AIH/GgA/AIX/MABDAJ//KwBPAJP/IQBPAJf/MABDAJ//IQBPAJf/JgBDAKP/MQBBAIf/JwBNAIn/KwBPAJP/MQBBAIf/KwBPAJP/NQBCAJH/IQBPAJf/HQBNAI7/FABBAJP/IQBPAJf/FABBAJP/GABCAJ3/KQDa/47/LQDO/5n/IwDO/53/KQDa/47/IwDO/53/HwDa/5L/KADQ/6f/MQDQ/6P/NQDe/6v/KADQ/6f/NQDe/6v/KwDe/6//MQDQ/6P/LQDO/5n/NwDb/5P/MQDQ/6P/NwDb/5P/OwDd/53/GQDb/6D/IwDO/53/KADQ/6f/GQDb/6D/KADQ/6f/HQDd/6n/HwDa/5L/GQDb/6D/FABBAJP/HwDa/5L/FABBAJP/GgA/AIX/MQBBAIf/NwDb/5P/KQDa/47/MQBBAIf/KQDa/47/JAA/AIH/GABCAJ3/HQDd/6n/KwDe/6//GABCAJ3/KwDe/6//JgBDAKP/NQDe/6v/OwDd/53/NQBCAJH/NQDe/6v/NQBCAJH/MABDAJ//LQDO/5n/KQDa/47/NwDb/5P/MQDQ/6P/OwDd/53/NQDe/6v/IwDO/53/GQDb/6D/HwDa/5L/KADQ/6f/KwDe/6//HQDd/6n/JwBNAIn/MQBBAIf/JAA/AIH/KwBPAJP/MABDAJ//NQBCAJH/HQBNAI7/GgA/AIX/FABBAJP/IQBPAJf/GABCAJ3/JgBDAKP/Tv9tAF3/Rv9uAGT/Xv/e/5X/Tv9tAF3/Xv/e/5X/Zv/d/43/Xv/e/5X/Rv9uAGT/Tv9tAF3/Xv/e/5X/Tv9tAF3/Zv/d/43/Q/+AAF7/S/9/AFb/S/9/AFb/Q/+AAF7/S/9/AFb/Q/+AAF7/af/L/5P/af/L/5P/Yf/M/5v/af/L/5P/Yf/M/5v/Yf/M/5v/V//g/5z/P/9vAGz/P/9vAGz/V//g/5z/P/9vAGz/V//g/5z/Vf9sAFX/Vf9sAFX/bf/c/4b/Vf9sAFX/bf/c/4b/bf/c/4b/S/9/AFb/Q/+AAF7/Rv9uAGT/S/9/AFb/Rv9uAGT/Tv9tAF3/Rv9uAGT/Q/+AAF7/S/9/AFb/Rv9uAGT/S/9/AFb/Tv9tAF3/P/9vAGz/Q/+AAF7/Q/+AAF7/P/9vAGz/Q/+AAF7/P/9vAGz/S/9/AFb/S/9/AFb/Vf9sAFX/S/9/AFb/Vf9sAFX/Vf9sAFX/Xv/e/5X/Yf/M/5v/af/L/5P/Xv/e/5X/af/L/5P/Zv/d/43/af/L/5P/Yf/M/5v/Xv/e/5X/af/L/5P/Xv/e/5X/Zv/d/43/Yf/M/5v/Yf/M/5v/V//g/5z/Yf/M/5v/V//g/5z/V//g/5z/bf/c/4b/af/L/5P/af/L/5P/bf/c/4b/af/L/5P/bf/c/4b/Zv/d/43/bf/c/4b/Vf9sAFX/Zv/d/43/Vf9sAFX/Tv9tAF3/P/9vAGz/V//g/5z/Xv/e/5X/P/9vAGz/Xv/e/5X/Rv9uAGT/Vf9sAFX/bf/c/4b/Zv/d/43/Vf9sAFX/Zv/d/43/Tv9tAF3/Xv/e/5X/V//g/5z/P/9vAGz/Xv/e/5X/P/9vAGz/Rv9uAGT/Yf/M/5v/Xv/e/5X/V//g/5z/Yf/M/5v/V//g/5z/Xv/e/5X/af/L/5P/bf/c/4b/Zv/d/43/af/L/5P/Zv/d/43/bf/c/4b/Q/+AAF7/P/9vAGz/Rv9uAGT/Q/+AAF7/Rv9uAGT/P/9vAGz/S/9/AFb/Tv9tAF3/Vf9sAFX/S/9/AFb/Vf9sAFX/Tv9tAF3/mP95AFX/nP95AF7/iv/g/2b/mP95AFX/iv/g/2b/hv/g/1z/bf/l/3L/f/99AGv/e/99AGH/bf/l/3L/e/99AGH/af/l/2j/lf+NAGL/kf+NAFj/h/+PAFz/lf+NAGL/h/+PAFz/i/+PAGb/cP/Q/2X/ev/P/2H/fv/P/2v/cP/Q/2X/fv/P/2v/dP/Q/2//hP/i/3T/l/96AGz/jf97AHD/hP/i/3T/jf97AHD/ev/j/3j/gf97AFP/i/96AE//eP/i/1b/gf97AFP/eP/i/1b/bv/j/1r/kf+NAFj/lf+NAGL/nP95AF7/kf+NAFj/nP95AF7/mP95AFX/f/99AGv/i/+PAGb/h/+PAFz/f/99AGv/h/+PAFz/e/99AGH/l/96AGz/lf+NAGL/i/+PAGb/l/96AGz/i/+PAGb/jf97AHD/h/+PAFz/kf+NAFj/i/96AE//h/+PAFz/i/96AE//gf97AFP/iv/g/2b/fv/P/2v/ev/P/2H/iv/g/2b/ev/P/2H/hv/g/1z/cP/Q/2X/dP/Q/2//bf/l/3L/cP/Q/2X/bf/l/3L/af/l/2j/dP/Q/2//fv/P/2v/hP/i/3T/dP/Q/2//hP/i/3T/ev/j/3j/eP/i/1b/ev/P/2H/cP/Q/2X/eP/i/1b/cP/Q/2X/bv/j/1r/hv/g/1z/eP/i/1b/i/96AE//hv/g/1z/i/96AE//mP95AFX/l/96AGz/hP/i/3T/iv/g/2b/l/96AGz/iv/g/2b/nP95AF7/gf97AFP/bv/j/1r/af/l/2j/gf97AFP/af/l/2j/e/99AGH/bf/l/3L/ev/j/3j/jf97AHD/bf/l/3L/jf97AHD/f/99AGv/fv/P/2v/iv/g/2b/hP/i/3T/dP/Q/2//ev/j/3j/bf/l/3L/ev/P/2H/eP/i/1b/hv/g/1z/cP/Q/2X/af/l/2j/bv/j/1r/lf+NAGL/l/96AGz/nP95AF7/i/+PAGb/f/99AGv/jf97AHD/kf+NAFj/mP95AFX/i/96AE//h/+PAFz/gf97AFP/e/99AGH/iABsANsAgABsANMAjADo/8cAiABsANsAjADo/8cAlADo/84AuQDx/5oArQB1AKYAtQB1AK4AuQDx/5oAtQB1AK4AwQDx/6EAjgCAAMYAlQCAAM0ApACDAL4AjgCAAMYApACDAL4AnACDALcAswDe/68ApADb/74AnQDb/7YAswDe/68AnQDb/7YArADe/6cAlADr/7AAiABvALwAlgByAK4AlADr/7AAlgByAK4AowDu/6EArQByAMQAngBvANMAqgDr/8cArQByAMQAqgDr/8cAuQDu/7gAlQCAAM0AjgCAAMYAgABsANMAlQCAAM0AgABsANMAiABsANsArQB1AKYAnACDALcApACDAL4ArQB1AKYApACDAL4AtQB1AK4AiABvALwAjgCAAMYAnACDALcAiABvALwAnACDALcAlgByAK4ApACDAL4AlQCAAM0AngBvANMApACDAL4AngBvANMArQByAMQAjADo/8cAnQDb/7YApADb/74AjADo/8cApADb/74AlADo/84AswDe/68ArADe/6cAuQDx/5oAswDe/68AuQDx/5oAwQDx/6EArADe/6cAnQDb/7YAlADr/7AArADe/6cAlADr/7AAowDu/6EAqgDr/8cApADb/74AswDe/68AqgDr/8cAswDe/68AuQDu/7gAlADo/84AqgDr/8cAngBvANMAlADo/84AngBvANMAiABsANsAiABvALwAlADr/7AAjADo/8cAiABvALwAjADo/8cAgABsANMArQByAMQAuQDu/7gAwQDx/6EArQByAMQAwQDx/6EAtQB1AK4AuQDx/5oAowDu/6EAlgByAK4AuQDx/5oAlgByAK4ArQB1AKYAnQDb/7YAjADo/8cAlADr/7AArADe/6cAowDu/6EAuQDx/5oApADb/74AqgDr/8cAlADo/84AswDe/68AwQDx/6EAuQDu/7gAjgCAAMYAiABvALwAgABsANMAnACDALcArQB1AKYAlgByAK4AlQCAAM0AiABsANsAngBvANMApACDAL4ArQByAMQAtQB1AK4AeAB5AFUAfAB5AF4AagDg/2YAeAB5AFUAagDg/2YAZgDg/1wATQDl/3IAXwB9AGsAWwB9AGEATQDl/3IAWwB9AGEASQDl/2gAdQCNAGIAcQCNAFgAZwCPAFwAdQCNAGIAZwCPAFwAawCPAGYAUADQ/2UAWgDP/2EAXgDP/2sAUADQ/2UAXgDP/2sAVADQ/28AZADi/3QAdwB6AGwAbQB7AHAAZADi/3QAbQB7AHAAWgDj/3gAYQB7AFMAawB6AE8AWADi/1YAYQB7AFMAWADi/1YATgDj/1oAcQCNAFgAdQCNAGIAfAB5AF4AcQCNAFgAfAB5AF4AeAB5AFUAXwB9AGsAawCPAGYAZwCPAFwAXwB9AGsAZwCPAFwAWwB9AGEAdwB6AGwAdQCNAGIAawCPAGYAdwB6AGwAawCPAGYAbQB7AHAAZwCPAFwAcQCNAFgAawB6AE8AZwCPAFwAawB6AE8AYQB7AFMAagDg/2YAXgDP/2sAWgDP/2EAagDg/2YAWgDP/2EAZgDg/1wAUADQ/2UAVADQ/28ATQDl/3IAUADQ/2UATQDl/3IASQDl/2gAVADQ/28AXgDP/2sAZADi/3QAVADQ/28AZADi/3QAWgDj/3gAWADi/1YAWgDP/2EAUADQ/2UAWADi/1YAUADQ/2UATgDj/1oAZgDg/1wAWADi/1YAawB6AE8AZgDg/1wAawB6AE8AeAB5AFUAdwB6AGwAZADi/3QAagDg/2YAdwB6AGwAagDg/2YAfAB5AF4AYQB7AFMATgDj/1oASQDl/2gAYQB7AFMASQDl/2gAWwB9AGEATQDl/3IAWgDj/3gAbQB7AHAATQDl/3IAbQB7AHAAXwB9AGsAXgDP/2sAagDg/2YAZADi/3QAVADQ/28AWgDj/3gATQDl/3IAWgDP/2EAWADi/1YAZgDg/1wAUADQ/2UASQDl/2gATgDj/1oAdQCNAGIAdwB6AGwAfAB5AF4AawCPAGYAXwB9AGsAbQB7AHAAcQCNAFgAeAB5AFUAawB6AE8AZwCPAFwAYQB7AFMAWwB9AGEA3v9tAGoA1/9uAGIApv/e/3sA3v9tAGoApv/e/3sArf/d/4IApv/e/3sA1/9uAGIA3v9tAGoApv/e/3sA3v9tAGoArf/d/4IA3f+AAF8A5P9/AGcA5P9/AGcA3f+AAF8A5P9/AGcA3f+AAF8Ap//L/4UAp//L/4UAoP/M/34Ap//L/4UAoP/M/34AoP/M/34Anv/g/3MAz/9vAFsAz/9vAFsAnv/g/3MAz/9vAFsAnv/g/3MA5v9sAHEA5v9sAHEAtf/c/4kA5v9sAHEAtf/c/4kAtf/c/4kA5P9/AGcA3f+AAF8A1/9uAGIA5P9/AGcA1/9uAGIA3v9tAGoA1/9uAGIA3f+AAF8A5P9/AGcA1/9uAGIA5P9/AGcA3v9tAGoAz/9vAFsA3f+AAF8A3f+AAF8Az/9vAFsA3f+AAF8Az/9vAFsA5P9/AGcA5P9/AGcA5v9sAHEA5P9/AGcA5v9sAHEA5v9sAHEApv/e/3sAoP/M/34Ap//L/4UApv/e/3sAp//L/4UArf/d/4IAp//L/4UAoP/M/34Apv/e/3sAp//L/4UApv/e/3sArf/d/4IAoP/M/34AoP/M/34Anv/g/3MAoP/M/34Anv/g/3MAnv/g/3MAtf/c/4kAp//L/4UAp//L/4UAtf/c/4kAp//L/4UAtf/c/4kArf/d/4IAtf/c/4kA5v9sAHEArf/d/4IA5v9sAHEA3v9tAGoAz/9vAFsAnv/g/3MApv/e/3sAz/9vAFsApv/e/3sA1/9uAGIA5v9sAHEAtf/c/4kArf/d/4IA5v9sAHEArf/d/4IA3v9tAGoApv/e/3sAnv/g/3MAz/9vAFsApv/e/3sAz/9vAFsA1/9uAGIAoP/M/34Apv/e/3sAnv/g/3MAoP/M/34Anv/g/3MApv/e/3sAp//L/4UAtf/c/4kArf/d/4IAp//L/4UArf/d/4IAtf/c/4kA3f+AAF8Az/9vAFsA1/9uAGIA3f+AAF8A1/9uAGIAz/9vAFsA5P9/AGcA3v9tAGoA5v9sAHEA5P9/AGcA5v9sAHEA3v9tAGoAp/+yAHgAnf+yAHwAk//n/2MAp/+yAHgAk//n/2MAnf/n/18Ah//r/0YAkf+2AF4Am/+2AFoAh//r/0YAm/+2AFoAkf/r/0IAm//NAHUApf/NAHEAof/OAGcAm//NAHUAof/OAGcAl//OAGsAlP/Q/0gAmP/P/1IAjv/P/1YAlP/Q/0gAjv/P/1YAiv/Q/0wAhf/o/10AkP+zAHYAjP+1AGwAhf/o/10AjP+1AGwAgf/q/1QAqf+1AGAArf+zAGoAo//o/1EAqf+1AGAAo//o/1EAn//q/0cApf/NAHEAm//NAHUAnf+yAHwApf/NAHEAnf+yAHwAp/+yAHgAkf+2AF4Al//OAGsAof/OAGcAkf+2AF4Aof/OAGcAm/+2AFoAkP+zAHYAm//NAHUAl//OAGsAkP+zAHYAl//OAGsAjP+1AGwAof/OAGcApf/NAHEArf+zAGoAof/OAGcArf+zAGoAqf+1AGAAk//n/2MAjv/P/1YAmP/P/1IAk//n/2MAmP/P/1IAnf/n/18AlP/Q/0gAiv/Q/0wAh//r/0YAlP/Q/0gAh//r/0YAkf/r/0IAiv/Q/0wAjv/P/1YAhf/o/10Aiv/Q/0wAhf/o/10Agf/q/1QAo//o/1EAmP/P/1IAlP/Q/0gAo//o/1EAlP/Q/0gAn//q/0cAnf/n/18Ao//o/1EArf+zAGoAnf/n/18Arf+zAGoAp/+yAHgAkP+zAHYAhf/o/10Ak//n/2MAkP+zAHYAk//n/2MAnf+yAHwAqf+1AGAAn//q/0cAkf/r/0IAqf+1AGAAkf/r/0IAm/+2AFoAh//r/0YAgf/q/1QAjP+1AGwAh//r/0YAjP+1AGwAkf+2AF4Ajv/P/1YAk//n/2MAhf/o/10Aiv/Q/0wAgf/q/1QAh//r/0YAmP/P/1IAo//o/1EAnf/n/18AlP/Q/0gAkf/r/0IAn//q/0cAm//NAHUAkP+zAHYAnf+yAHwAl//OAGsAkf+2AF4AjP+1AGwApf/NAHEAp/+yAHgArf+zAGoAof/OAGcAqf+1AGAAm/+2AFoAhwCnAGr/jgCnAGP/nwDx/3T/hwCnAGr/nwDx/3T/mADx/3v/ugD2/4//qQCtAH7/ogCtAIX/ugD2/4//ogCtAIX/swD2/5b/lQDAAGr/jgDAAHH/lwDCAHr/lQDAAGr/lwDCAHr/ngDCAHP/rADd/5D/owDc/4f/qgDc/3//rADd/5D/qgDc/3//swDd/4j/sADy/3X/nwCpAGT/qACrAG3/sADy/3X/qACrAG3/uQD0/37/kQCrAIT/iACpAHv/mQDy/4z/kQCrAIT/mQDy/4z/ogD0/5X/jgDAAHH/lQDAAGr/jgCnAGP/jgDAAHH/jgCnAGP/hwCnAGr/qQCtAH7/ngDCAHP/lwDCAHr/qQCtAH7/lwDCAHr/ogCtAIX/nwCpAGT/lQDAAGr/ngDCAHP/nwCpAGT/ngDCAHP/qACrAG3/lwDCAHr/jgDAAHH/iACpAHv/lwDCAHr/iACpAHv/kQCrAIT/nwDx/3T/qgDc/3//owDc/4f/nwDx/3T/owDc/4f/mADx/3v/rADd/5D/swDd/4j/ugD2/4//rADd/5D/ugD2/4//swD2/5b/swDd/4j/qgDc/3//sADy/3X/swDd/4j/sADy/3X/uQD0/37/mQDy/4z/owDc/4f/rADd/5D/mQDy/4z/rADd/5D/ogD0/5X/mADx/3v/mQDy/4z/iACpAHv/mADx/3v/iACpAHv/hwCnAGr/nwCpAGT/sADy/3X/nwDx/3T/nwCpAGT/nwDx/3T/jgCnAGP/kQCrAIT/ogD0/5X/swD2/5b/kQCrAIT/swD2/5b/ogCtAIX/ugD2/4//uQD0/37/qACrAG3/ugD2/4//qACrAG3/qQCtAH7/qgDc/3//nwDx/3T/sADy/3X/swDd/4j/uQD0/37/ugD2/4//owDc/4f/mQDy/4z/mADx/3v/rADd/5D/swD2/5b/ogD0/5X/lQDAAGr/nwCpAGT/jgCnAGP/ngDCAHP/qQCtAH7/qACrAG3/jgDAAHH/hwCnAGr/iACpAHv/lwDCAHr/kQCrAIT/ogCtAIX/JwCnAAoALgCnAAMAPwDx/xQAJwCnAAoAPwDx/xQAOADx/xsAWgD2/y8ASQCtAB4AQgCtACUAWgD2/y8AQgCtACUAUwD2/zYANQDAAAoALgDAABEANwDCABoANQDAAAoANwDCABoAPgDCABMATADd/zAAQwDc/ycASgDc/x8ATADd/zAASgDc/x8AUwDd/ygAUADy/xUAPwCpAAQASACrAA0AUADy/xUASACrAA0AWQD0/x4AMQCrACQAKACpABsAOQDy/ywAMQCrACQAOQDy/ywAQgD0/zUALgDAABEANQDAAAoALgCnAAMALgDAABEALgCnAAMAJwCnAAoASQCtAB4APgDCABMANwDCABoASQCtAB4ANwDCABoAQgCtACUAPwCpAAQANQDAAAoAPgDCABMAPwCpAAQAPgDCABMASACrAA0ANwDCABoALgDAABEAKACpABsANwDCABoAKACpABsAMQCrACQAPwDx/xQASgDc/x8AQwDc/ycAPwDx/xQAQwDc/ycAOADx/xsATADd/zAAUwDd/ygAWgD2/y8ATADd/zAAWgD2/y8AUwD2/zYAUwDd/ygASgDc/x8AUADy/xUAUwDd/ygAUADy/xUAWQD0/x4AOQDy/ywAQwDc/ycATADd/zAAOQDy/ywATADd/zAAQgD0/zUAOADx/xsAOQDy/ywAKACpABsAOADx/xsAKACpABsAJwCnAAoAPwCpAAQAUADy/xUAPwDx/xQAPwCpAAQAPwDx/xQALgCnAAMAMQCrACQAQgD0/zUAUwD2/zYAMQCrACQAUwD2/zYAQgCtACUAWgD2/y8AWQD0/x4ASACrAA0AWgD2/y8ASACrAA0ASQCtAB4ASgDc/x8APwDx/xQAUADy/xUAUwDd/ygAWQD0/x4AWgD2/y8AQwDc/ycAOQDy/ywAOADx/xsATADd/zAAUwD2/zYAQgD0/zUANQDAAAoAPwCpAAQALgCnAAMAPgDCABMASQCtAB4ASACrAA0ALgDAABEAJwCnAAoAKACpABsANwDCABoAMQCrACQAQgCtACUAuv8/ACUAxP8/ACEAyf/a/y4Auv8/ACUAyf/a/y4Av//a/zIA1f/e/0sA0P9DAD8Axv9DAEMA1f/e/0sAxv9DAEMAy//e/08Ax/9NACkAvf9NAC4Awf9PADcAx/9NACkAwf9PADcAy/9PADMAyP/Q/0cAw//O/z0Azf/O/zkAyP/Q/0cAzf/O/zkA0f/Q/0MA1//b/zMA0f9BACcA1f9CADEA1//b/zMA1f9CADEA2//d/z0AuP9CAD0AtP9BADMAuf/b/0AAuP9CAD0Auf/b/0AAvf/d/0kAvf9NAC4Ax/9NACkAxP8/ACEAvf9NAC4AxP8/ACEAuv8/ACUA0P9DAD8Ay/9PADMAwf9PADcA0P9DAD8Awf9PADcAxv9DAEMA0f9BACcAx/9NACkAy/9PADMA0f9BACcAy/9PADMA1f9CADEAwf9PADcAvf9NAC4AtP9BADMAwf9PADcAtP9BADMAuP9CAD0Ayf/a/y4Azf/O/zkAw//O/z0Ayf/a/y4Aw//O/z0Av//a/zIAyP/Q/0cA0f/Q/0MA1f/e/0sAyP/Q/0cA1f/e/0sAy//e/08A0f/Q/0MAzf/O/zkA1//b/zMA0f/Q/0MA1//b/zMA2//d/z0Auf/b/0AAw//O/z0AyP/Q/0cAuf/b/0AAyP/Q/0cAvf/d/0kAv//a/zIAuf/b/0AAtP9BADMAv//a/zIAtP9BADMAuv8/ACUA0f9BACcA1//b/zMAyf/a/y4A0f9BACcAyf/a/y4AxP8/ACEAuP9CAD0Avf/d/0kAy//e/08AuP9CAD0Ay//e/08Axv9DAEMA1f/e/0sA2//d/z0A1f9CADEA1f/e/0sA1f9CADEA0P9DAD8Azf/O/zkAyf/a/y4A1//b/zMA0f/Q/0MA2//d/z0A1f/e/0sAw//O/z0Auf/b/0AAv//a/zIAyP/Q/0cAy//e/08Avf/d/0kAx/9NACkA0f9BACcAxP8/ACEAy/9PADMA0P9DAD8A1f9CADEAvf9NAC4Auv8/ACUAtP9BADMAwf9PADcAuP9CAD0Axv9DAEMAGgA/AIUAJAA/AIEAKQDa/44AGgA/AIUAKQDa/44AHwDa/5IANQDe/6sAMABDAJ8AJgBDAKMANQDe/6sAJgBDAKMAKwDe/68AJwBNAIkAHQBNAI4AIQBPAJcAJwBNAIkAIQBPAJcAKwBPAJMAKADQ/6cAIwDO/50ALQDO/5kAKADQ/6cALQDO/5kAMQDQ/6MANwDb/5MAMQBBAIcANQBCAJEANwDb/5MANQBCAJEAOwDd/50AGABCAJ0AFABBAJMAGQDb/6AAGABCAJ0AGQDb/6AAHQDd/6kAHQBNAI4AJwBNAIkAJAA/AIEAHQBNAI4AJAA/AIEAGgA/AIUAMABDAJ8AKwBPAJMAIQBPAJcAMABDAJ8AIQBPAJcAJgBDAKMAMQBBAIcAJwBNAIkAKwBPAJMAMQBBAIcAKwBPAJMANQBCAJEAIQBPAJcAHQBNAI4AFABBAJMAIQBPAJcAFABBAJMAGABCAJ0AKQDa/44ALQDO/5kAIwDO/50AKQDa/44AIwDO/50AHwDa/5IAKADQ/6cAMQDQ/6MANQDe/6sAKADQ/6cANQDe/6sAKwDe/68AMQDQ/6MALQDO/5kANwDb/5MAMQDQ/6MANwDb/5MAOwDd/50AGQDb/6AAIwDO/50AKADQ/6cAGQDb/6AAKADQ/6cAHQDd/6kAHwDa/5IAGQDb/6AAFABBAJMAHwDa/5IAFABBAJMAGgA/AIUAMQBBAIcANwDb/5MAKQDa/44AMQBBAIcAKQDa/44AJAA/AIEAGABCAJ0AHQDd/6kAKwDe/68AGABCAJ0AKwDe/68AJgBDAKMANQDe/6sAOwDd/50ANQBCAJEANQDe/6sANQBCAJEAMABDAJ8ALQDO/5kAKQDa/44ANwDb/5MAMQDQ/6MAOwDd/50ANQDe/6sAIwDO/50AGQDb/6AAHwDa/5IAKADQ/6cAKwDe/68AHQDd/6kAJwBNAIkAMQBBAIcAJAA/AIEAKwBPAJMAMABDAJ8ANQBCAJEAHQBNAI4AGgA/AIUAFABBAJMAIQBPAJcAGABCAJ0AJgBDAKMAGQA/AFcAFQA/AGEACQDa/1wAGQA/AFcACQDa/1wADQDa/1IA7P/e/1AA+P9DAFUA/P9DAEsA7P/e/1AA/P9DAEsA8P/e/0YADQBNAF4AEQBNAFQABwBPAFAADQBNAF4ABwBPAFAAAwBPAFkA+P/Q/0kAAgDO/00A/v/O/1cA+P/Q/0kA/v/O/1cA9P/Q/1MA+//b/2IABwBBAGcA/v9CAGMA+//b/2IA/v9CAGMA8f/d/14ACgBCAEUAFABBAEkABwDb/0QACgBCAEUABwDb/0QA/v/d/0AAEQBNAFQADQBNAF4AFQA/AGEAEQBNAFQAFQA/AGEAGQA/AFcA+P9DAFUAAwBPAFkABwBPAFAA+P9DAFUABwBPAFAA/P9DAEsABwBBAGcADQBNAF4AAwBPAFkABwBBAGcAAwBPAFkA/v9CAGMABwBPAFAAEQBNAFQAFABBAEkABwBPAFAAFABBAEkACgBCAEUACQDa/1wA/v/O/1cAAgDO/00ACQDa/1wAAgDO/00ADQDa/1IA+P/Q/0kA9P/Q/1MA7P/e/1AA+P/Q/0kA7P/e/1AA8P/e/0YA9P/Q/1MA/v/O/1cA+//b/2IA9P/Q/1MA+//b/2IA8f/d/14ABwDb/0QAAgDO/00A+P/Q/0kABwDb/0QA+P/Q/0kA/v/d/0AADQDa/1IABwDb/0QAFABBAEkADQDa/1IAFABBAEkAGQA/AFcABwBBAGcA+//b/2IACQDa/1wABwBBAGcACQDa/1wAFQA/AGEACgBCAEUA/v/d/0AA8P/e/0YACgBCAEUA8P/e/0YA/P9DAEsA7P/e/1AA8f/d/14A/v9CAGMA7P/e/1AA/v9CAGMA+P9DAFUA/v/O/1cACQDa/1wA+//b/2IA9P/Q/1MA8f/d/14A7P/e/1AAAgDO/00ABwDb/0QADQDa/1IA+P/Q/0kA8P/e/0YA/v/d/0AADQBNAF4ABwBBAGcAFQA/AGEAAwBPAFkA+P9DAFUA/v9CAGMAEQBNAFQAGQA/AFcAFABBAEkABwBPAFAACgBCAEUA/P9DAEsAeQA/ALcAdQA/AMEAaQDa/7wAeQA/ALcAaQDa/7wAbQDa/7IATADe/7AAWABDALUAXABDAKsATADe/7AAXABDAKsAUADe/6YAbQBNAL4AcQBNALQAZwBPALAAbQBNAL4AZwBPALAAYwBPALkAWADQ/6kAYgDO/60AXgDO/7cAWADQ/6kAXgDO/7cAVADQ/7MAWwDb/8IAZwBBAMcAXgBCAMMAWwDb/8IAXgBCAMMAUQDd/74AagBCAKUAdABBAKkAZwDb/6QAagBCAKUAZwDb/6QAXgDd/6AAcQBNALQAbQBNAL4AdQA/AMEAcQBNALQAdQA/AMEAeQA/ALcAWABDALUAYwBPALkAZwBPALAAWABDALUAZwBPALAAXABDAKsAZwBBAMcAbQBNAL4AYwBPALkAZwBBAMcAYwBPALkAXgBCAMMAZwBPALAAcQBNALQAdABBAKkAZwBPALAAdABBAKkAagBCAKUAaQDa/7wAXgDO/7cAYgDO/60AaQDa/7wAYgDO/60AbQDa/7IAWADQ/6kAVADQ/7MATADe/7AAWADQ/6kATADe/7AAUADe/6YAVADQ/7MAXgDO/7cAWwDb/8IAVADQ/7MAWwDb/8IAUQDd/74AZwDb/6QAYgDO/60AWADQ/6kAZwDb/6QAWADQ/6kAXgDd/6AAbQDa/7IAZwDb/6QAdABBAKkAbQDa/7IAdABBAKkAeQA/ALcAZwBBAMcAWwDb/8IAaQDa/7wAZwBBAMcAaQDa/7wAdQA/AMEAagBCAKUAXgDd/6AAUADe/6YAagBCAKUAUADe/6YAXABDAKsATADe/7AAUQDd/74AXgBCAMMATADe/7AAXgBCAMMAWABDALUAXgDO/7cAaQDa/7wAWwDb/8IAVADQ/7MAUQDd/74ATADe/7AAYgDO/60AZwDb/6QAbQDa/7IAWADQ/6kAUADe/6YAXgDd/6AAbQBNAL4AZwBBAMcAdQA/AMEAYwBPALkAWABDALUAXgBCAMMAcQBNALQAeQA/ALcAdABBAKkAZwBPALAAagBCAKUAXABDAKsAeQA/ALf/dQA/AMH/aQDa/7z/eQA/ALf/aQDa/7z/bQDa/7L/TADe/7D/WABDALX/XABDAKv/TADe/7D/XABDAKv/UADe/6b/bQBNAL7/cQBNALT/ZwBPALD/bQBNAL7/ZwBPALD/YwBPALn/WADQ/6n/YgDO/63/XgDO/7f/WADQ/6n/XgDO/7f/VADQ/7P/WwDb/8L/ZwBBAMf/XgBCAMP/WwDb/8L/XgBCAMP/UQDd/77/agBCAKX/dABBAKn/ZwDb/6T/agBCAKX/ZwDb/6T/XgDd/6D/cQBNALT/bQBNAL7/dQA/AMH/cQBNALT/dQA/AMH/eQA/ALf/WABDALX/YwBPALn/ZwBPALD/WABDALX/ZwBPALD/XABDAKv/ZwBBAMf/bQBNAL7/YwBPALn/ZwBBAMf/YwBPALn/XgBCAMP/ZwBPALD/cQBNALT/dABBAKn/ZwBPALD/dABBAKn/agBCAKX/aQDa/7z/XgDO/7f/YgDO/63/aQDa/7z/YgDO/63/bQDa/7L/WADQ/6n/VADQ/7P/TADe/7D/WADQ/6n/TADe/7D/UADe/6b/VADQ/7P/XgDO/7f/WwDb/8L/VADQ/7P/WwDb/8L/UQDd/77/ZwDb/6T/YgDO/63/WADQ/6n/ZwDb/6T/WADQ/6n/XgDd/6D/bQDa/7L/ZwDb/6T/dABBAKn/bQDa/7L/dABBAKn/eQA/ALf/ZwBBAMf/WwDb/8L/aQDa/7z/ZwBBAMf/aQDa/7z/dQA/AMH/agBCAKX/XgDd/6D/UADe/6b/agBCAKX/UADe/6b/XABDAKv/TADe/7D/UQDd/77/XgBCAMP/TADe/7D/XgBCAMP/WABDALX/XgDO/7f/aQDa/7z/WwDb/8L/VADQ/7P/UQDd/77/TADe/7D/YgDO/63/ZwDb/6T/bQDa/7L/WADQ/6n/UADe/6b/XgDd/6D/bQBNAL7/ZwBBAMf/dQA/AMH/YwBPALn/WABDALX/XgBCAMP/cQBNALT/eQA/ALf/dABBAKn/ZwBPALD/agBCAKX/XABDAKv/mv8/AIUApP8/AIEAqf/a/44Amv8/AIUAqf/a/44An//a/5IAtf/e/6sAsP9DAJ8Apv9DAKMAtf/e/6sApv9DAKMAq//e/68Ap/9NAIkAnf9NAI4Aof9PAJcAp/9NAIkAof9PAJcAq/9PAJMAqP/Q/6cAo//O/50Arf/O/5kAqP/Q/6cArf/O/5kAsf/Q/6MAt//b/5MAsf9BAIcAtf9CAJEAt//b/5MAtf9CAJEAu//d/50AmP9CAJ0AlP9BAJMAmf/b/6AAmP9CAJ0Amf/b/6AAnf/d/6kAnf9NAI4Ap/9NAIkApP8/AIEAnf9NAI4ApP8/AIEAmv8/AIUAsP9DAJ8Aq/9PAJMAof9PAJcAsP9DAJ8Aof9PAJcApv9DAKMAsf9BAIcAp/9NAIkAq/9PAJMAsf9BAIcAq/9PAJMAtf9CAJEAof9PAJcAnf9NAI4AlP9BAJMAof9PAJcAlP9BAJMAmP9CAJ0Aqf/a/44Arf/O/5kAo//O/50Aqf/a/44Ao//O/50An//a/5IAqP/Q/6cAsf/Q/6MAtf/e/6sAqP/Q/6cAtf/e/6sAq//e/68Asf/Q/6MArf/O/5kAt//b/5MAsf/Q/6MAt//b/5MAu//d/50Amf/b/6AAo//O/50AqP/Q/6cAmf/b/6AAqP/Q/6cAnf/d/6kAn//a/5IAmf/b/6AAlP9BAJMAn//a/5IAlP9BAJMAmv8/AIUAsf9BAIcAt//b/5MAqf/a/44Asf9BAIcAqf/a/44ApP8/AIEAmP9CAJ0Anf/d/6kAq//e/68AmP9CAJ0Aq//e/68Apv9DAKMAtf/e/6sAu//d/50Atf9CAJEAtf/e/6sAtf9CAJEAsP9DAJ8Arf/O/5kAqf/a/44At//b/5MAsf/Q/6MAu//d/50Atf/e/6sAo//O/50Amf/b/6AAn//a/5IAqP/Q/6cAq//e/68Anf/d/6kAp/9NAIkAsf9BAIcApP8/AIEAq/9PAJMAsP9DAJ8Atf9CAJEAnf9NAI4Amv8/AIUAlP9BAJMAof9PAJcAmP9CAJ0Apv9DAKMA",c:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},carote:{v:"4P4AAAAB4P4AAAAB4P4AAAD/4P4AAAAB4P4AAAD/4P4AAAD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/wD/AAHg/wD/AAHg/wABAP/g/wD/AAHg/wABAP/g/wABAAEAACABAAEAACABAP8AACABAAEAACABAP8AACABAP8AACABAAEAAOD+AAEAAOD+AP8AAOD+AAEAAOD+AP8AAOD+AP8AAOD+4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+AP/g/wD/AP/g/wAB4P4AAAABAP/g/wD/4P4AAAAB4P4AAAD/AP/g/wABAAHg/wABAAEAACABAP/g/wABAAEAACABAP8AACABAAEAAOD+AAHg/wD/AP/g/wD/AAEAAOD+AP/g/wD/AP8AAOD+AP8AAOD+AP8AAOD+4P4AAAD/AP8AAOD+4P4AAAD/4P4AAAD/AP8AACABAP8AACAB4P4AAAABAP8AACAB4P4AAAAB4P4AAAABAP/g/wABAP8AACAB4P4AAAABAP/g/wD/4P4AAAD/AP8AAOD+AP8gAAAB4P4AAAABAP8AACABAP8gAAD/AP8AAOD+4P4AAAD/IAEAAAABIAEAAAABIAEAAAD/IAEAAAABIAEAAAD/IAEAAAD/AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/IAEAAAABAAHg/wABAAHg/wD/IAEAAAABAAHg/wD/IAEAAAD/AAEAAOD+AAEAAOD+IAEAAAD/AAEAAOD+IAEAAAD/IAEAAAD/AAEAACABAAEAACABIAEAAAABAAEAACABIAEAAAABIAEAAAABAAEAACABAAHg/wABIAEAAAABIAEAAAD/AAHg/wD/AAEAAOD+IAEAAAABAAEgAAABAAEAACABAAEAAOD+AAEgAAD/IAEAAAD/e/8/AMD/rv9UAKD/e/8/AID/rv9UAKD/e/8/AMD/uP+r/4D/rv9UAKD/rv9UAGD/e/8/AID/rv9UAGD/rv9UAKD/uP+r/4D/rv9UAGD/e/8/AED/e/8/AID/e/8/AED/rv9UAGD/uP+r/4D/e/8/AED/SP8qAGD/e/8/AID/SP8qAGD/e/8/AED/uP+r/4D/SP8qAGD/SP8qAKD/e/8/AID/SP8qAKD/SP8qAGD/uP+r/4D/SP8qAKD/e/8/AMD/e/8/AID/e/8/AMD/SP8qAKD/uP+r/4D/d/9+AFz/fP98AFP/c/94AE//d/9+AFz/c/94AE//bv97AFj/hf8tAG3/jv8wAHH/if8zAHr/hf8tAG3/if8zAHr/gP8vAHb/gf9CAH7/df90AGr/bP9wAGb/gf9CAH7/bP9wAGb/eP8+AHr/e/9pAEv/hP9tAE//kP87AGP/e/9pAEv/kP87AGP/h/83AF//df90AGr/d/9+AFz/bv97AFj/df90AGr/bv97AFj/bP9wAGb/c/94AE//fP98AFP/hP9tAE//c/94AE//hP9tAE//e/9pAEv/gP8vAHb/if8zAHr/gf9CAH7/gP8vAHb/gf9CAH7/eP8+AHr/kP87AGP/jv8wAHH/hf8tAG3/kP87AGP/hf8tAG3/h/83AF//iP9zAFz/g/92AGX/j/9DAHn/iP9zAFz/j/9DAHn/lP9BAHD/fP98AFP/d/9+AFz/g/92AGX/fP98AFP/g/92AGX/iP9zAFz/j/9DAHn/if8zAHr/jv8wAHH/j/9DAHn/jv8wAHH/lP9BAHD/lP9BAHD/kP87AGP/hP9tAE//lP9BAHD/hP9tAE//iP9zAFz/df90AGr/gf9CAH7/j/9DAHn/df90AGr/j/9DAHn/g/92AGX/if8zAHr/j/9DAHn/gf9CAH7/jv8wAHH/kP87AGP/lP9BAHD/d/9+AFz/df90AGr/g/92AGX/fP98AFP/iP9zAFz/hP9tAE//dP84AG3/Z/9qAFn/bf9oAFD/dP84AG3/bf9oAFD/ef81AGT/Z/9qAFn/bv97AFj/c/94AE//Z/9qAFn/c/94AE//bf9oAFD/hf8tAG3/gP8vAHb/dP84AG3/hf8tAG3/dP84AG3/ef81AGT/e/9pAEv/h/83AF//ef81AGT/e/9pAEv/ef81AGT/bf9oAFD/dP84AG3/eP8+AHr/bP9wAGb/dP84AG3/bP9wAGb/Z/9qAFn/dP84AG3/gP8vAHb/eP8+AHr/h/83AF//hf8tAG3/ef81AGT/bP9wAGb/bv97AFj/Z/9qAFn/bf9oAFD/c/94AE//e/9pAEv/W/9oAK7/Xf9tAKX/VP9qAKH/W/9oAK7/VP9qAKH/Uv9kAKr/ff8nAIT/hv8rAIj/hP8mAJH/ff8nAIT/hP8mAJH/e/8iAI3/e/8sAJ//YP9YALL/V/9UAK7/e/8sAJ//V/9UAK7/cv8oAJv/Xf9kAJP/Zv9oAJf/gf87AIT/Xf9kAJP/gf87AIT/eP84AH//YP9YALL/W/9oAK7/Uv9kAKr/YP9YALL/Uv9kAKr/V/9UAK7/VP9qAKH/Xf9tAKX/Zv9oAJf/VP9qAKH/Zv9oAJf/Xf9kAJP/e/8iAI3/hP8mAJH/e/8sAJ//e/8iAI3/e/8sAJ//cv8oAJv/gf87AIT/hv8rAIj/ff8nAIT/gf87AIT/ff8nAIT/eP84AH//bf9mAKT/a/9hAK3/hv81AJr/bf9mAKT/hv81AJr/iP86AJH/Xf9tAKX/W/9oAK7/a/9hAK3/Xf9tAKX/a/9hAK3/bf9mAKT/hv81AJr/hP8mAJH/hv8rAIj/hv81AJr/hv8rAIj/iP86AJH/iP86AJH/gf87AIT/Zv9oAJf/iP86AJH/Zv9oAJf/bf9mAKT/YP9YALL/e/8sAJ//hv81AJr/YP9YALL/hv81AJr/a/9hAK3/e/8sAJ//hP8mAJH/hv81AJr/iP86AJH/hv8rAIj/gf87AIT/a/9hAK3/W/9oAK7/YP9YALL/Zv9oAJf/Xf9tAKX/bf9mAKT/a/8pAI7/UP9WAKH/Uv9bAJj/a/8pAI7/Uv9bAJj/bf8vAIT/UP9WAKH/Uv9kAKr/VP9qAKH/UP9WAKH/VP9qAKH/Uv9bAJj/ff8nAIT/e/8iAI3/a/8pAI7/ff8nAIT/a/8pAI7/bf8vAIT/Xf9kAJP/eP84AH//bf8vAIT/Xf9kAJP/bf8vAIT/Uv9bAJj/a/8pAI7/cv8oAJv/V/9UAK7/a/8pAI7/V/9UAK7/UP9WAKH/e/8iAI3/cv8oAJv/a/8pAI7/ff8nAIT/bf8vAIT/eP84AH//Uv9kAKr/UP9WAKH/V/9UAK7/VP9qAKH/Xf9kAJP/Uv9bAJj/Wf+ZAIf/Xf+aAH3/U/+XAHn/Wf+ZAIf/U/+XAHn/UP+VAIP/hP8gAHn/jv8kAH3/iv8iAIf/hP8gAHn/iv8iAIf/gf8fAIP/fv81AJH/Xf+DAJH/VP+AAI3/fv81AJH/VP+AAI3/df8xAI3/X/+EAG//aP+IAHP/if85AHP/X/+EAG//if85AHP/gP82AG//Xf+DAJH/Wf+ZAIf/UP+VAIP/Xf+DAJH/UP+VAIP/VP+AAI3/U/+XAHn/Xf+aAH3/aP+IAHP/U/+XAHn/aP+IAHP/X/+EAG//gf8fAIP/iv8iAIf/fv81AJH/gf8fAIP/fv81AJH/df8xAI3/if85AHP/jv8kAH3/hP8gAHn/if85AHP/hP8gAHn/gP82AG//bv+KAIH/av+JAIv/i/86AIv/bv+KAIH/i/86AIv/jv87AIH/Xf+aAH3/Wf+ZAIf/av+JAIv/Xf+aAH3/av+JAIv/bv+KAIH/i/86AIv/iv8iAIf/jv8kAH3/i/86AIv/jv8kAH3/jv87AIH/jv87AIH/if85AHP/aP+IAHP/jv87AIH/aP+IAHP/bv+KAIH/Xf+DAJH/fv81AJH/i/86AIv/Xf+DAJH/i/86AIv/av+JAIv/fv81AJH/iv8iAIf/i/86AIv/jv87AIH/jv8kAH3/if85AHP/av+JAIv/Wf+ZAIf/Xf+DAJH/aP+IAHP/Xf+aAH3/bv+KAIH/b/8vAH//T/99AH//Uv9/AHX/b/8vAH//Uv9/AHX/c/8wAHX/T/99AH//UP+VAIP/U/+XAHn/T/99AH//U/+XAHn/Uv9/AHX/hP8gAHn/gf8fAIP/b/8vAH//hP8gAHn/b/8vAH//c/8wAHX/X/+EAG//gP82AG//c/8wAHX/X/+EAG//c/8wAHX/Uv9/AHX/b/8vAH//df8xAI3/VP+AAI3/b/8vAH//VP+AAI3/T/99AH//gf8fAIP/df8xAI3/b/8vAH//hP8gAHn/c/8wAHX/gP82AG//UP+VAIP/T/99AH//VP+AAI3/U/+XAHn/X/+EAG//Uv9/AHX/SP8qAKD/e/8/AMD/e/8/AID/e/8/AMD/SP8qAKD/uP+r/4D/SP8qAGD/SP8qAKD/e/8/AID/SP8qAKD/SP8qAGD/uP+r/4D/e/8/AED/SP8qAGD/e/8/AID/SP8qAGD/e/8/AED/uP+r/4D/rv9UAGD/e/8/AED/e/8/AID/e/8/AED/rv9UAGD/uP+r/4D/rv9UAKD/rv9UAGD/e/8/AID/rv9UAGD/rv9UAKD/uP+r/4D/e/8/AMD/rv9UAKD/e/8/AID/rv9UAKD/e/8/AMD/uP+r/4D/0/9QAKwA+f9cAG8Asf9SAGwA+f9cAG8A0/9QAKwAyv+f/1gA+f9cAG8A1/9eAC8Asf9SAGwA1/9eAC8A+f9cAG8Ayv+f/1gA1/9eAC8Aj/9UACsAsf9SAGwAj/9UACsA1/9eAC8Ayv+f/1gAj/9UACsAaf9IAGgAsf9SAGwAaf9IAGgAj/9UACsAyv+f/1gAaf9IAGgAi/9GAKgAsf9SAGwAi/9GAKgAaf9IAGgAyv+f/1gAi/9GAKgA0/9QAKwAsf9SAGwA0/9QAKwAi/9GAKgAyv+f/1gAqf+bAEUAqP+XADkAnP+WADoAqf+bAEUAnP+WADoAnf+ZAEYArP88AFUAuP8+AFQAuP9BAF8ArP88AFUAuP9BAF8ArP8/AGAAtv9UAGcArP+PAFUAoP+OAFYAtv9UAGcAoP+OAFYAqv9SAGgAnv+DADMAqv+FADIAtf9JAEQAnv+DADMAtf9JAEQAqf9HAEUArP+PAFUAqf+bAEUAnf+ZAEYArP+PAFUAnf+ZAEYAoP+OAFYAnP+WADoAqP+XADkAqv+FADIAnP+WADoAqv+FADIAnv+DADMArP8/AGAAuP9BAF8Atv9UAGcArP8/AGAAtv9UAGcAqv9SAGgAtf9JAEQAuP8+AFQArP88AFUAtf9JAEQArP88AFUAqf9HAEUAt/+KAD0At/+OAEgAwf9SAFoAt/+KAD0Awf9SAFoAwf9OAE4AqP+XADkAqf+bAEUAt/+OAEgAqP+XADkAt/+OAEgAt/+KAD0Awf9SAFoAuP9BAF8AuP8+AFQAwf9SAFoAuP8+AFQAwf9OAE4Awf9OAE4Atf9JAEQAqv+FADIAwf9OAE4Aqv+FADIAt/+KAD0ArP+PAFUAtv9UAGcAwf9SAFoArP+PAFUAwf9SAFoAt/+OAEgAuP9BAF8Awf9SAFoAtv9UAGcAuP8+AFQAtf9JAEQAwf9OAE4Aqf+bAEUArP+PAFUAt/+OAEgAqP+XADkAt/+KAD0Aqv+FADIAnv9NAF0Ak/+IAEsAk/+FAD8Anv9NAF0Ak/+FAD8Anf9JAFEAk/+IAEsAnf+ZAEYAnP+WADoAk/+IAEsAnP+WADoAk/+FAD8ArP88AFUArP8/AGAAnv9NAF0ArP88AFUAnv9NAF0Anf9JAFEAnv+DADMAqf9HAEUAnf9JAFEAnv+DADMAnf9JAFEAk/+FAD8Anv9NAF0Aqv9SAGgAoP+OAFYAnv9NAF0AoP+OAFYAk/+IAEsAnv9NAF0ArP8/AGAAqv9SAGgAqf9HAEUArP88AFUAnf9JAFEAoP+OAFYAnf+ZAEYAk/+IAEsAk/+FAD8AnP+WADoAnv+DADMAtP+GAKcAsv+MAJ0Apv+KAJ4AtP+GAKcApv+KAJ4AqP+EAKgAr/83AHEAu/85AHAAvP8zAHoAr/83AHEAvP8zAHoAsP8yAHsAvf88AIwAt/9zAKsAq/9xAKwAvf88AIwAq/9xAKwAsf86AI0Apv+CAIwAsv+EAIsAt/9MAGwApv+CAIwAt/9MAGwAq/9LAG0At/9zAKsAtP+GAKcAqP+EAKgAt/9zAKsAqP+EAKgAq/9xAKwApv+KAJ4Asv+MAJ0Asv+EAIsApv+KAJ4Asv+EAIsApv+CAIwAsP8yAHsAvP8zAHoAvf88AIwAsP8yAHsAvf88AIwAsf86AI0At/9MAGwAu/85AHAAr/83AHEAt/9MAGwAr/83AHEAq/9LAG0Av/+AAJQAwf96AJ8Ax/9DAIEAv/+AAJQAx/9DAIEAxf9JAHYAsv+MAJ0AtP+GAKcAwf96AJ8Asv+MAJ0Awf96AJ8Av/+AAJQAx/9DAIEAvP8zAHoAu/85AHAAx/9DAIEAu/85AHAAxf9JAHYAxf9JAHYAt/9MAGwAsv+EAIsAxf9JAHYAsv+EAIsAv/+AAJQAt/9zAKsAvf88AIwAx/9DAIEAt/9zAKsAx/9DAIEAwf96AJ8Avf88AIwAvP8zAHoAx/9DAIEAxf9JAHYAu/85AHAAt/9MAGwAwf96AJ8AtP+GAKcAt/9zAKsAsv+EAIsAsv+MAJ0Av/+AAJQAo/8+AIQAnf91AKIAm/97AJcAo/8+AIQAm/97AJcAof9DAHkAnf91AKIAqP+EAKgApv+KAJ4Anf91AKIApv+KAJ4Am/97AJcAr/83AHEAsP8yAHsAo/8+AIQAr/83AHEAo/8+AIQAof9DAHkApv+CAIwAq/9LAG0Aof9DAHkApv+CAIwAof9DAHkAm/97AJcAo/8+AIQAsf86AI0Aq/9xAKwAo/8+AIQAq/9xAKwAnf91AKIAsP8yAHsAsf86AI0Ao/8+AIQAr/83AHEAof9DAHkAq/9LAG0AqP+EAKgAnf91AKIAq/9xAKwApv+KAJ4Apv+CAIwAm/97AJcAqP++AH0Ap/+/AHEAm/++AHIAqP++AH0Am/++AHIAnP+8AH4Ar/8uAGIAu/8wAGEAvP8uAG0Ar/8uAGIAvP8uAG0AsP8tAG4Auv9FAHwArP+lAIYAoP+jAIcAuv9FAHwAoP+jAIcArv9EAH0Anf+nAGMAqf+pAGIAtv9JAFgAnf+nAGMAtv9JAFgAqv9HAFkArP+lAIYAqP++AH0AnP+8AH4ArP+lAIYAnP+8AH4AoP+jAIcAm/++AHIAp/+/AHEAqf+pAGIAm/++AHIAqf+pAGIAnf+nAGMAsP8tAG4AvP8uAG0Auv9FAHwAsP8tAG4Auv9FAHwArv9EAH0Atv9JAFgAu/8wAGEAr/8uAGIAtv9JAFgAr/8uAGIAqv9HAFkAtv+pAG0At/+oAHkAxf9IAG8Atv+pAG0Axf9IAG8Aw/9JAGMAp/+/AHEAqP++AH0At/+oAHkAp/+/AHEAt/+oAHkAtv+pAG0Axf9IAG8AvP8uAG0Au/8wAGEAxf9IAG8Au/8wAGEAw/9JAGMAw/9JAGMAtv9JAFgAqf+pAGIAw/9JAGMAqf+pAGIAtv+pAG0ArP+lAIYAuv9FAHwAxf9IAG8ArP+lAIYAxf9IAG8At/+oAHkAuv9FAHwAvP8uAG0Axf9IAG8Aw/9JAGMAu/8wAGEAtv9JAFgAt/+oAHkAqP++AH0ArP+lAIYAqf+pAGIAp/+/AHEAtv+pAG0Aof9DAHIAk/+jAHwAkv+kAHAAof9DAHIAkv+kAHAAoP9EAGYAk/+jAHwAnP+8AH4Am/++AHIAk/+jAHwAm/++AHIAkv+kAHAAr/8uAGIAsP8tAG4Aof9DAHIAr/8uAGIAof9DAHIAoP9EAGYAnf+nAGMAqv9HAFkAoP9EAGYAnf+nAGMAoP9EAGYAkv+kAHAAof9DAHIArv9EAH0AoP+jAIcAof9DAHIAoP+jAIcAk/+jAHwAsP8tAG4Arv9EAH0Aof9DAHIAr/8uAGIAoP9EAGYAqv9HAFkAnP+8AH4Ak/+jAHwAoP+jAIcAm/++AHIAnf+nAGMAkv+kAHAAi/9GAKgA0/9QAKwAsf9SAGwA0/9QAKwAi/9GAKgAyv+f/1gAaf9IAGgAi/9GAKgAsf9SAGwAi/9GAKgAaf9IAGgAyv+f/1gAj/9UACsAaf9IAGgAsf9SAGwAaf9IAGgAj/9UACsAyv+f/1gA1/9eAC8Aj/9UACsAsf9SAGwAj/9UACsA1/9eAC8Ayv+f/1gA+f9cAG8A1/9eAC8Asf9SAGwA1/9eAC8A+f9cAG8Ayv+f/1gA0/9QAKwA+f9cAG8Asf9SAGwA+f9cAG8A0/9QAKwAyv+f/1gAIwBmAOv/YwBgABQAZQBWAMn/YwBgABQAIwBmAOv/RQCc/+L/YwBgABQApQBQAPL/ZQBWAMn/pQBQAPL/YwBgABQARQCc/+L/pQBQAPL/pwBFAKf/ZQBWAMn/pwBFAKf/pQBQAPL/RQCc/+L/pwBFAKf/aABLAH7/ZQBWAMn/aABLAH7/pwBFAKf/RQCc/+L/aABLAH7/JgBbAJ//ZQBWAMn/JgBbAJ//aABLAH7/RQCc/+L/JgBbAJ//IwBmAOv/ZQBWAMn/IwBmAOv/JgBbAJ//RQCc/+L/oQCTAMH/rACMAMH/qwCLALX/oQCTAMH/qwCLALX/oACSALX/dgA5AMP/dwA6AND/bABBAND/dgA5AMP/bABBAND/awBAAMT/awBWAM7/jgCMAMT/jACLALj/awBWAM7/jACLALj/aQBUAMH/rAB2ALf/rgB4AMP/igBBAM3/rAB2ALf/igBBAM3/iQBAAMH/jgCMAMT/oQCTAMH/oACSALX/jgCMAMT/oACSALX/jACLALj/qwCLALX/rACMAMH/rgB4AMP/qwCLALX/rgB4AMP/rAB2ALf/awBAAMT/bABBAND/awBWAM7/awBAAMT/awBWAM7/aQBUAMH/igBBAM3/dwA6AND/dgA5AMP/igBBAM3/dgA5AMP/iQBAAMH/pACAAND/mgCHAND/dgBQANr/pACAAND/dgBQANr/gQBJANr/rACMAMH/oQCTAMH/mgCHAND/rACMAMH/mgCHAND/pACAAND/dgBQANr/bABBAND/dwA6AND/dgBQANr/dwA6AND/gQBJANr/gQBJANr/igBBAM3/rgB4AMP/gQBJANr/rgB4AMP/pACAAND/jgCMAMT/awBWAM7/dgBQANr/jgCMAMT/dgBQANr/mgCHAND/bABBAND/dgBQANr/awBWAM7/dwA6AND/igBBAM3/gQBJANr/oQCTAMH/jgCMAMT/mgCHAND/rACMAMH/pACAAND/rgB4AMP/cwBMALX/lgCDAKv/oAB8AKv/cwBMALX/oAB8AKv/fQBFALT/lgCDAKv/oACSALX/qwCLALX/lgCDAKv/qwCLALX/oAB8AKv/dgA5AMP/awBAAMT/cwBMALX/dgA5AMP/cwBMALX/fQBFALT/rAB2ALf/iQBAAMH/fQBFALT/rAB2ALf/fQBFALT/oAB8AKv/cwBMALX/aQBUAMH/jACLALj/cwBMALX/jACLALj/lgCDAKv/cwBMALX/awBAAMT/aQBUAMH/iQBAAMH/dgA5AMP/fQBFALT/jACLALj/oACSALX/lgCDAKv/oAB8AKv/qwCLALX/rAB2ALf/OACbAMv/RACdAMn/QwCcAL3/OACbAMv/QwCcAL3/NwCZAL7/WQA8AMb/WgA9ANL/TgA7ANT/WQA8AMb/TgA7ANT/TAA5AMf/PgBIANT/LwCIAM7/LgCHAMH/PgBIANT/LgCHAMH/PABHAMf/UwCOAL3/VACQAMn/YwBQAM//UwCOAL3/YwBQAM//YQBPAMP/LwCIAM7/OACbAMv/NwCZAL7/LwCIAM7/NwCZAL7/LgCHAMH/QwCcAL3/RACdAMn/VACQAMn/QwCcAL3/VACQAMn/UwCOAL3/TAA5AMf/TgA7ANT/PgBIANT/TAA5AMf/PgBIANT/PABHAMf/YwBQAM//WgA9ANL/WQA8AMb/YwBQAM//WQA8AMb/YQBPAMP/SQCPANf/PQCMANn/SwBMAN//SQCPANf/SwBMAN//WABPAN3/RACdAMn/OACbAMv/PQCMANn/RACdAMn/PQCMANn/SQCPANf/SwBMAN//TgA7ANT/WgA9ANL/SwBMAN//WgA9ANL/WABPAN3/WABPAN3/YwBQAM//VACQAMn/WABPAN3/VACQAMn/SQCPANf/LwCIAM7/PgBIANT/SwBMAN//LwCIAM7/SwBMAN//PQCMANn/PgBIANT/TgA7ANT/SwBMAN//WABPAN3/WgA9ANL/YwBQAM//PQCMANn/OACbAMv/LwCIAM7/VACQAMn/RACdAMn/SQCPANf/SABIALn/OQCIALP/RgCKALL/SABIALn/RgCKALL/VABLALj/OQCIALP/NwCZAL7/QwCcAL3/OQCIALP/QwCcAL3/RgCKALL/WQA8AMb/TAA5AMf/SABIALn/WQA8AMb/SABIALn/VABLALj/UwCOAL3/YQBPAMP/VABLALj/UwCOAL3/VABLALj/RgCKALL/SABIALn/PABHAMf/LgCHAMH/SABIALn/LgCHAMH/OQCIALP/TAA5AMf/PABHAMf/SABIALn/WQA8AMb/VABLALj/YQBPAMP/NwCZAL7/OQCIALP/LgCHAMH/QwCcAL3/UwCOAL3/RgCKALL/cwDGAMD/fwDEAL//fgDDALL/cwDGAMD/fgDDALL/cgDFALP/ZAAvAMb/ZQAwANP/WQAyANT/ZAAvAMb/WQAyANT/WAAxAMf/UQBNANH/YgCwAMT/YQCvALj/UQBNANH/YQCvALj/UABMAMX/hgCoALX/iACpAMH/dgBGAM//hgCoALX/dgBGAM//dQBFAML/YgCwAMT/cwDGAMD/cgDFALP/YgCwAMT/cgDFALP/YQCvALj/fgDDALL/fwDEAL//iACpAMH/fgDDALL/iACpAMH/hgCoALX/WAAxAMf/WQAyANT/UQBNANH/WAAxAMf/UQBNANH/UABMAMX/dgBGAM//ZQAwANP/ZAAvAMb/dgBGAM//ZAAvAMb/dQBFAML/fACtAM//cACvAND/XwBMAN3/fACtAM//XwBMAN3/awBKANz/fwDEAL//cwDGAMD/cACvAND/fwDEAL//cACvAND/fACtAM//XwBMAN3/WQAyANT/ZQAwANP/XwBMAN3/ZQAwANP/awBKANz/awBKANz/dgBGAM//iACpAMH/awBKANz/iACpAMH/fACtAM//YgCwAMT/UQBNANH/XwBMAN3/YgCwAMT/XwBMAN3/cACvAND/UQBNANH/WQAyANT/XwBMAN3/awBKANz/ZQAwANP/dgBGAM//cACvAND/cwDGAMD/YgCwAMT/iACpAMH/fwDEAL//fACtAM//WwBIALf/bACrAKr/eQCpAKn/WwBIALf/eQCpAKn/ZwBGALf/bACrAKr/cgDFALP/fgDDALL/bACrAKr/fgDDALL/eQCpAKn/ZAAvAMb/WAAxAMf/WwBIALf/ZAAvAMb/WwBIALf/ZwBGALf/hgCoALX/dQBFAML/ZwBGALf/hgCoALX/ZwBGALf/eQCpAKn/WwBIALf/UABMAMX/YQCvALj/WwBIALf/YQCvALj/bACrAKr/WAAxAMf/UABMAMX/WwBIALf/ZAAvAMb/ZwBGALf/dQBFAML/cgDFALP/bACrAKr/YQCvALj/fgDDALL/hgCoALX/eQCpAKn/JgBbAJ//IwBmAOv/ZQBWAMn/IwBmAOv/JgBbAJ//RQCc/+L/aABLAH7/JgBbAJ//ZQBWAMn/JgBbAJ//aABLAH7/RQCc/+L/pwBFAKf/aABLAH7/ZQBWAMn/aABLAH7/pwBFAKf/RQCc/+L/pQBQAPL/pwBFAKf/ZQBWAMn/pwBFAKf/pQBQAPL/RQCc/+L/YwBgABQApQBQAPL/ZQBWAMn/pQBQAPL/YwBgABQARQCc/+L/IwBmAOv/YwBgABQAZQBWAMn/YwBgABQAIwBmAOv/RQCc/+L/",c:"DAwBAQwMDAwMDAQEBAQEBAwMDAwMDAwMDAwMDAQEDAwEBAwMDAwMDAwMBAQVERURFREVERURFREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEQgRCBEVEQgRCBEVERURFREVERURFREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEQgRCBEVEQgRCBEVERURFREVERURFREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEQgRCBEVEQgRCBE="},"orto-terra":{v:"4P4AAAAB4P4AAAAB4P4AAAD/4P4AAAAB4P4AAAD/4P4AAAD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/wD/AAHg/wD/AAHg/wABAP/g/wD/AAHg/wABAP/g/wABAAEAACABAAEAACABAP8AACABAAEAACABAP8AACABAP8AACABAAEAAOD+AAEAAOD+AP8AAOD+AAEAAOD+AP8AAOD+AP8AAOD+4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+AP/g/wD/AP/g/wAB4P4AAAABAP/g/wD/4P4AAAAB4P4AAAD/AP/g/wABAAHg/wABAAEAACABAP/g/wABAAEAACABAP8AACABAAEAAOD+AAHg/wD/AP/g/wD/AAEAAOD+AP/g/wD/AP8AAOD+AP8AAOD+AP8AAOD+4P4AAAD/AP8AAOD+4P4AAAD/4P4AAAD/AP8AACABAP8AACAB4P4AAAABAP8AACAB4P4AAAAB4P4AAAABAP/g/wABAP8AACAB4P4AAAABAP/g/wD/4P4AAAD/AP8AAOD+AP8gAAAB4P4AAAABAP8AACABAP8gAAD/AP8AAOD+4P4AAAD/IAEAAAABIAEAAAABIAEAAAD/IAEAAAABIAEAAAD/IAEAAAD/AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/IAEAAAABAAHg/wABAAHg/wD/IAEAAAABAAHg/wD/IAEAAAD/AAEAAOD+AAEAAOD+IAEAAAD/AAEAAOD+IAEAAAD/IAEAAAD/AAEAACABAAEAACABIAEAAAABAAEAACABIAEAAAABIAEAAAABAAEAACABAAHg/wABIAEAAAABIAEAAAD/AAHg/wD/AAEAAOD+IAEAAAABAAEgAAABAAEAACABAAEAAOD+AAEgAAD/IAEAAAD/",c:"DAwBAQwMDAwMDAQEBAQEBAwMDAwMDAwMDAwMDAQEDAwEBAwMDAwMDAwMBAQ="},"gatto-corpo":{v:"/f8gAHD/fQAgALj//f8gAAAAfQAgALj//f8gAHD//f8gAwAAff8gALj//f8gAHD//f8gAAAA/f8gAHD/ff8gALj//f8gAwAAff8gAEgAff8gALj//f8gAAAAff8gALj/ff8gAEgA/f8gAwAA/f8gAJAAff8gAEgA/f8gAAAAff8gAEgA/f8gAJAA/f8gAwAAfQAgAEgA/f8gAJAA/f8gAAAA/f8gAJAAfQAgAEgA/f8gAwAAfQAgALj/fQAgAEgA/f8gAAAAfQAgAEgAfQAgALj//f8gAwAA",c:"ExMTExMTExMTExMT"},"gatto-testa":{v:"mwAeA77/PgAeA2H//f9gAwAAmwAeA77/3QCAAqP/WQCAAiD/mwAeA77/WQCAAiD/PgAeA2H/3QCAAqP/mwDiAb7/PgDiAWH/3QCAAqP/PgDiAWH/WQCAAiD/PgDiAWH/mwDiAb7//f+gAQAAPgAeA2H/u/8eA2H//f9gAwAAPgAeA2H/WQCAAiD/oP+AAiD/PgAeA2H/oP+AAiD/u/8eA2H/WQCAAiD/PgDiAWH/u//iAWH/WQCAAiD/u//iAWH/oP+AAiD/u//iAWH/PgDiAWH//f+gAQAAu/8eA2H/Xv8eA77//f9gAwAAu/8eA2H/oP+AAiD/Hf+AAqP/u/8eA2H/Hf+AAqP/Xv8eA77/oP+AAiD/u//iAWH/Xv/iAb7/oP+AAiD/Xv/iAb7/Hf+AAqP/Xv/iAb7/u//iAWH//f+gAQAAXv8eA77/Xv8eA0EA/f9gAwAAXv8eA77/Hf+AAqP/Hf+AAl0AXv8eA77/Hf+AAl0AXv8eA0EAHf+AAqP/Xv/iAb7/Xv/iAUEAHf+AAqP/Xv/iAUEAHf+AAl0AXv/iAUEAXv/iAb7//f+gAQAAXv8eA0EAu/8eA54A/f9gAwAAXv8eA0EARP/fAkwAsP/fArgAXv8eA0EAsP/fArgAu/8eA54ARP/fAkwAHf+AAl0Ac/+AArMARP/fAkwAc/+AArMAjv/fApcAq/+/AsYAsP/fArgAjv/fApcAq/+/AsYAjv/fApcAhf+/AqAAc/+AArMAoP+AAuAAq/+/AsYAc/+AArMAq/+/AsYAhf+/AqAAHf+AAl0AXv/iAUEAu//iAZ4AHf+AAl0Au//iAZ4AoP+AAuAAu//iAZ4AXv/iAUEA/f+gAQAAu/8eA54APgAeA54A/f9gAwAAu/8eA54AoP+AAuAAWQCAAuAAu/8eA54AWQCAAuAAPgAeA54AoP+AAuAAu//iAZ4APgDiAZ4AoP+AAuAAPgDiAZ4AWQCAAuAAPgDiAZ4Au//iAZ4A/f+gAQAAPgAeA54AmwAeA0EA/f9gAwAAPgAeA54ASQDfArgAtQDfAkwAPgAeA54AtQDfAkwAmwAeA0EASQDfArgATwC/AsYAdAC/AqAASQDfArgAdAC/AqAAawDfApcAhwCAArMA3QCAAl0AtQDfAkwAhwCAArMAtQDfAkwAawDfApcATwC/AsYAWQCAAuAAhwCAArMATwC/AsYAhwCAArMAdAC/AqAAWQCAAuAAPgDiAZ4AmwDiAUEAWQCAAuAAmwDiAUEA3QCAAl0AmwDiAUEAPgDiAZ4A/f+gAQAAmwAeA0EAmwAeA77//f9gAwAAmwAeA0EA3QCAAl0A3QCAAqP/mwAeA0EA3QCAAqP/mwAeA77/3QCAAl0AmwDiAUEAmwDiAb7/3QCAAl0AmwDiAb7/3QCAAqP/mwDiAb7/mwDiAUEA/f+gAQAAfQCAAqD/3QCAAtD/fQCAAgAA3QCAAtD/fQCAAqD/fQAmBAAAHQCAAtD/fQCAAqD/fQCAAgAAfQCAAqD/HQCAAtD/fQAmBAAAHQCAAjAAHQCAAtD/fQCAAgAAHQCAAtD/HQCAAjAAfQAmBAAAfQCAAmAAHQCAAjAAfQCAAgAAHQCAAjAAfQCAAmAAfQAmBAAA3QCAAjAAfQCAAmAAfQCAAgAAfQCAAmAA3QCAAjAAfQAmBAAA3QCAAtD/3QCAAjAAfQCAAgAA3QCAAjAA3QCAAtD/fQAmBAAAff+AAqD/3f+AAtD/ff+AAgAA3f+AAtD/ff+AAqD/ff8mBAAAHf+AAtD/ff+AAqD/ff+AAgAAff+AAqD/Hf+AAtD/ff8mBAAAHf+AAjAAHf+AAtD/ff+AAgAAHf+AAtD/Hf+AAjAAff8mBAAAff+AAmAAHf+AAjAAff+AAgAAHf+AAjAAff+AAmAAff8mBAAA3f+AAjAAff+AAmAAff+AAgAAff+AAmAA3f+AAjAAff8mBAAA3f+AAtD/3f+AAjAAff+AAgAA3f+AAjAA3f+AAtD/ff8mBAAAOAD7AYIAXQA8At0A/f/4AegAXQA8At0A/f9lAhYB/f/4AegA/f9lAhYBnf88At0A/f/4AegAnf88At0Awf/7AYIA/f/4AegAwf/7AYIAOAD7AYIA/f/4AegAXQA8At0AOACsAssA/f9lAhYBOAD7AYIAXQBqAm8AXQA8At0Awf/7AYIA/f9BAjcAOAD7AYIAnf88At0Anf9qAm8Awf/7AYIA/f9lAhYBwf+sAssAnf88At0AOACsAssAXQBqAm8A/f+vAmQAXQBqAm8A/f9BAjcA/f+vAmQA/f9BAjcAnf9qAm8A/f+vAmQAnf9qAm8Awf+sAssA/f+vAmQAwf+sAssAOACsAssA/f+vAmQAOACsAssAXQA8At0AXQBqAm8AXQBqAm8AOAD7AYIA/f9BAjcA/f9BAjcAwf/7AYIAnf9qAm8Anf9qAm8Anf88At0Awf+sAssAwf+sAssA/f9lAhYBOACsAssA",c:"AgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXFyAgAgICAgICAgICAgICFxcCAiAgAgICAgICAgICAgICAgICAhYCFgICAgICAgICAhYCFgICAgICAgICAgICAgICAgICAgICAhY="},"gatto-coda":{v:"6f89Afb+6f86AfX+6f8vAQX/6f9kASr/6f9TAQ3/6f89Afb+6f9CAYv/6f9oAWP/6f9kASr/6f/qAGr/6f8PAYf/6f9CAYv/6f/JALj/6f/EAKz/6f++AKD/6f/FALv/6f/IALv/6f/JALj/6f+YALD/6f+jAMH/6f+2AL3/6f+6ADX/6f+PAGj/6f+YALD/6f8SAVf/6f/uADj/6f+6ADX/6f8jARH/6f8jART/6f8vASH/6f89Afb+6f8vAQX/6f8jARH/6f/FALv/6f/JALj/6f++AKD/6f+YALD/6f+2AL3/6f/FALv/6f89Afb+6f8jARH/6f8vASH/6f+YALD/6f/FALv/6f++AKD/6f89Afb+6f8vASH/6f9AATn/6f+YALD/6f++AKD/6f/IAGD/6f9kASr/6f89Afb+6f9AATn/6f+6ADX/6f+YALD/6f/IAGD/6f9kASr/6f9AATn/6f8zAWL/6f+6ADX/6f/IAGD/6f/qAGr/6f9CAYv/6f9kASr/6f8zAWL/6f+6ADX/6f/qAGr/6f9CAYv/6f9CAYv/6f8zAWL/6f8SAVf/6f8SAVf/6f+6ADX/6f9CAYv/EAAvAQX/EAA6AfX+EAA9Afb+EAA9Afb+EABTAQ3/EABkASr/EABkASr/EABoAWP/EABCAYv/EABCAYv/EAAPAYf/EADqAGr/EAC+AKD/EADEAKz/EADJALj/EADJALj/EADIALv/EADFALv/EAC2AL3/EACjAMH/EACYALD/EACYALD/EACPAGj/EAC6ADX/EAC6ADX/EADuADj/EAASAVf/EAAvASH/EAAjART/EAAjARH/EAAjARH/EAAvAQX/EAA9Afb+EAC+AKD/EADJALj/EADFALv/EADFALv/EAC2AL3/EACYALD/EAAvASH/EAAjARH/EAA9Afb+EAC+AKD/EADFALv/EACYALD/EABAATn/EAAvASH/EAA9Afb+EADIAGD/EAC+AKD/EACYALD/EABAATn/EAA9Afb+EABkASr/EADIAGD/EACYALD/EAC6ADX/EAAzAWL/EABAATn/EABkASr/EADqAGr/EADIAGD/EAC6ADX/EAAzAWL/EABkASr/EABCAYv/EABCAYv/EADqAGr/EAC6ADX/EAASAVf/EAAzAWL/EABCAYv/EABCAYv/EAC6ADX/EAASAVf/6f89Afb+6f9TAQ3//f9BAe/+6f9TAQ3//f9ZAQj//f9BAe/+/f9BAe/+/f9ZAQj//f9BAe/+/f9ZAQj//f9ZAQj//f9BAe/+/f9BAe/+/f9ZAQj/EAA9Afb+/f9ZAQj/EABTAQ3/EAA9Afb+6f9TAQ3/6f9kASr//f9ZAQj/6f9kASr//f9sASj//f9ZAQj//f9ZAQj//f9sASj//f9ZAQj//f9sASj//f9sASj//f9ZAQj//f9ZAQj//f9sASj/EABTAQ3//f9sASj/EABkASr/EABTAQ3/6f9kASr/6f9oAWP//f9sASj/6f9oAWP//f9wAWf//f9sASj//f9sASj//f9wAWf//f9sASj//f9wAWf//f9wAWf//f9sASj//f9sASj//f9wAWf/EABkASr//f9wAWf/EABoAWP/EABkASr/6f9oAWP/6f9CAYv//f9wAWf/6f9CAYv//f9GAZP//f9wAWf//f9wAWf//f9GAZP//f9wAWf//f9GAZP//f9GAZP//f9wAWf//f9wAWf//f9GAZP/EABoAWP//f9GAZP/EABCAYv/EABoAWP/6f9CAYv/6f8PAYf//f9GAZP/6f8PAYf//f8NAY///f9GAZP//f9GAZP//f8NAY///f9GAZP//f8NAY///f8NAY///f9GAZP//f9GAZP//f8NAY//EABCAYv//f8NAY//EAAPAYf/EABCAYv/6f8PAYf/6f/qAGr//f8NAY//6f/qAGr//f/nAHH//f8NAY///f8NAY///f/nAHH//f8NAY///f/nAHH//f/nAHH//f8NAY///f8NAY///f/nAHH/EAAPAYf//f/nAHH/EADqAGr/EAAPAYf/6f/qAGr/6f/IAGD//f/nAHH/6f/IAGD//f/OAGr//f/nAHH//f/nAHH//f/OAGr//f/nAHH//f/OAGr//f/OAGr//f/nAHH//f/nAHH//f/OAGr/EADqAGr//f/OAGr/EADIAGD/EADqAGr/6f/IAGD/6f++AKD//f/OAGr/6f++AKD//f/GAJ///f/OAGr//f/OAGr//f/GAJ///f/OAGr//f/GAJ///f/GAJ///f/OAGr//f/OAGr//f/GAJ//EADIAGD//f/GAJ//EAC+AKD/EADIAGD/6f++AKD/6f/EAKz//f/GAJ//6f/EAKz//f/LAKj//f/GAJ///f/GAJ///f/LAKj//f/GAJ///f/LAKj//f/LAKj//f/GAJ///f/GAJ///f/LAKj/EAC+AKD//f/LAKj/EADEAKz/EAC+AKD/6f/EAKz/6f/JALj//f/LAKj/6f/JALj//f/SALf//f/LAKj//f/LAKj//f/SALf//f/LAKj//f/SALf//f/SALf//f/LAKj//f/LAKj//f/SALf/EADEAKz//f/SALf/EADJALj/EADEAKz/6f/JALj/6f/IALv//f/SALf/6f/IALv//f/OAML//f/SALf//f/SALf//f/OAML//f/SALf//f/OAML//f/OAML//f/SALf//f/SALf//f/OAML/EADJALj//f/OAML/EADIALv/EADJALj/6f/IALv/6f/FALv//f/OAML/6f/FALv//f/HAMT//f/OAML//f/OAML//f/HAMT//f/OAML//f/HAMT//f/HAMT//f/OAML//f/OAML//f/HAMT/EADIALv//f/HAMT/EADFALv/EADIALv/6f/FALv/6f+2AL3//f/HAMT/6f+2AL3//f+3AMX//f/HAMT//f/HAMT//f+3AMX//f/HAMT//f+3AMX//f+3AMX//f/HAMT//f/HAMT//f+3AMX/EADFALv//f+3AMX/EAC2AL3/EADFALv/6f+2AL3/6f+jAMH//f+3AMX/6f+jAMH//f+gAMr//f+3AMX//f+3AMX//f+gAMr//f+3AMX//f+gAMr//f+gAMr//f+3AMX//f+3AMX//f+gAMr/EAC2AL3//f+gAMr/EACjAMH/EAC2AL3/6f+jAMH/6f+YALD//f+gAMr/6f+YALD//f+QALP//f+gAMr//f+gAMr//f+QALP//f+gAMr//f+QALP//f+QALP//f+gAMr//f+gAMr//f+QALP/EACjAMH//f+QALP/EACYALD/EACjAMH/6f+YALD/6f+PAGj//f+QALP/6f+PAGj//f+HAGX//f+QALP//f+QALP//f+HAGX//f+QALP//f+HAGX//f+HAGX//f+QALP//f+QALP//f+HAGX/EACYALD//f+HAGX/EACPAGj/EACYALD/6f+PAGj/6f+6ADX//f+HAGX/6f+6ADX//f+2ACz//f+HAGX//f+HAGX//f+2ACz//f+HAGX//f+2ACz//f+2ACz//f+HAGX//f+HAGX//f+2ACz/EACPAGj//f+2ACz/EAC6ADX/EACPAGj/6f+6ADX/6f/uADj//f+2ACz/6f/uADj//f/wADD//f+2ACz//f+2ACz//f/wADD//f+2ACz//f/wADD//f/wADD//f+2ACz//f+2ACz//f/wADD/EAC6ADX//f/wADD/EADuADj/EAC6ADX/6f/uADj/6f8SAVf//f/wADD/6f8SAVf//f8WAVD//f/wADD//f/wADD//f8WAVD//f/wADD//f8WAVD//f8WAVD//f/wADD//f/wADD//f8WAVD/EADuADj//f8WAVD/EAASAVf/EADuADj/6f8SAVf/6f8zAWL//f8WAVD/6f8zAWL//f8uAVj//f8WAVD//f8WAVD//f8uAVj//f8WAVD//f8uAVj//f8uAVj//f8WAVD//f8WAVD//f8uAVj/EAASAVf//f8uAVj/EAAzAWL/EAASAVf/6f8zAWL/6f9AATn//f8uAVj/6f9AATn//f83ATr//f8uAVj//f8uAVj//f83ATr//f8uAVj//f83ATr//f83ATr//f8uAVj//f8uAVj//f83ATr/EAAzAWL//f83ATr/EABAATn/EAAzAWL/6f9AATn/6f8vASH//f83ATr/6f8vASH//f8pASb//f83ATr//f83ATr//f8pASb//f83ATr//f8pASb//f8pASb//f83ATr//f83ATr//f8pASb/EABAATn//f8pASb/EAAvASH/EABAATn/6f8vASH/6f8jART//f8pASb/6f8jART//f8bARb//f8pASb//f8pASb//f8bARb//f8pASb//f8bARb//f8bARb//f8pASb//f8pASb//f8bARb/EAAvASH//f8bARb/EAAjART/EAAvASH/6f8jART/6f8jARH//f8bARb/6f8jARH//f8cAQ3//f8bARb//f8bARb//f8cAQ3//f8bARb//f8cAQ3//f8cAQ3//f8bARb//f8bARb//f8cAQ3/EAAjART//f8cAQ3/EAAjARH/EAAjART/6f8jARH/6f8vAQX//f8cAQ3/6f8vAQX//f8pAf/+/f8cAQ3//f8cAQ3//f8pAf/+/f8cAQ3//f8pAf/+/f8pAf/+/f8cAQ3//f8cAQ3//f8pAf/+EAAjARH//f8pAf/+EAAvAQX/EAAjARH/6f8vAQX/6f86AfX+/f8pAf/+6f86AfX+/f83Aez+/f8pAf/+/f8pAf/+/f83Aez+/f8pAf/+/f83Aez+/f83Aez+/f8pAf/+/f8pAf/+/f83Aez+EAAvAQX//f83Aez+EAA6AfX+EAAvAQX/6f86AfX+6f89Afb+/f83Aez+6f89Afb+/f9BAe/+/f83Aez+/f83Aez+/f9BAe/+/f83Aez+/f9BAe/+/f9BAe/+/f83Aez+/f83Aez+/f9BAe/+EAA6AfX+/f9BAe/+EAA9Afb+EAA6AfX+",c:"AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI="},"gatto-mano-a":{v:"df9rARUAVP9fAfb/Pf+KASEAdf9rARUAjf8zASEAXv8hAfb/df9rARUAXv8hAfb/VP9fAfb/jf8zASEAdf8DAUAAVP/2ACEAjf8zASEAVP/2ACEAXv8hAfb/VP/2ACEAdf8DAUAAPf/2AF4AVP9fAfb/Jf9fAfb/Pf+KASEAVP9fAfb/Xv8hAfb/HP8hAfb/VP9fAfb/HP8hAfb/Jf9fAfb/Xv8hAfb/VP/2ACEAJf/2ACEAXv8hAfb/Jf/2ACEAHP8hAfb/Jf/2ACEAVP/2ACEAPf/2AF4AJf9fAfb/BP9rARUAPf+KASEAJf9fAfb/HP8hAfb/7f4zASEAJf9fAfb/7f4zASEABP9rARUAHP8hAfb/Jf/2ACEABP8DAUAAHP8hAfb/BP8DAUAA7f4zASEABP8DAUAAJf/2ACEAPf/2AF4ABP9rARUABP99AUAAPf+KASEABP9rARUA7f4zASEA7f5NAV4ABP9rARUA7f5NAV4ABP99AUAA7f4zASEABP8DAUAABP8VAWsA7f4zASEABP8VAWsA7f5NAV4ABP8VAWsABP8DAUAAPf/2AF4ABP99AUAAJf+KAV4APf+KASEABP99AUAA7f5NAV4AHP9fAYoABP99AUAAHP9fAYoAJf+KAV4A7f5NAV4ABP8VAWsAJf8hAYoA7f5NAV4AJf8hAYoAHP9fAYoAJf8hAYoABP8VAWsAPf/2AF4AJf+KAV4AVP+KAV4APf+KASEAJf+KAV4AHP9fAYoAXv9fAYoAJf+KAV4AXv9fAYoAVP+KAV4AHP9fAYoAJf8hAYoAVP8hAYoAHP9fAYoAVP8hAYoAXv9fAYoAVP8hAYoAJf8hAYoAPf/2AF4AVP+KAV4Adf99AUAAPf+KASEAVP+KAV4AXv9fAYoAjf9NAV4AVP+KAV4Ajf9NAV4Adf99AUAAXv9fAYoAVP8hAYoAdf8VAWsAXv9fAYoAdf8VAWsAjf9NAV4Adf8VAWsAVP8hAYoAPf/2AF4Adf99AUAAdf9rARUAPf+KASEAdf99AUAAjf9NAV4Ajf8zASEAdf99AUAAjf8zASEAdf9rARUAjf9NAV4Adf8VAWsAdf8DAUAAjf9NAV4Adf8DAUAAjf8zASEAdf8DAUAAdf8VAWsAPf/2AF4A",c:"AgICAgICAgICAgICAgICAgICAgICAgICAhYWFhYCAhYWFhYCAhYWFhYCAgICAgIC"},"gatto-mano-b":{v:"9QBrARUA1ABfAfb/vQCKASEA9QBrARUADQEzASEA3gAhAfb/9QBrARUA3gAhAfb/1ABfAfb/DQEzASEA9QADAUAA1AD2ACEADQEzASEA1AD2ACEA3gAhAfb/1AD2ACEA9QADAUAAvQD2AF4A1ABfAfb/pQBfAfb/vQCKASEA1ABfAfb/3gAhAfb/nAAhAfb/1ABfAfb/nAAhAfb/pQBfAfb/3gAhAfb/1AD2ACEApQD2ACEA3gAhAfb/pQD2ACEAnAAhAfb/pQD2ACEA1AD2ACEAvQD2AF4ApQBfAfb/hABrARUAvQCKASEApQBfAfb/nAAhAfb/bQAzASEApQBfAfb/bQAzASEAhABrARUAnAAhAfb/pQD2ACEAhAADAUAAnAAhAfb/hAADAUAAbQAzASEAhAADAUAApQD2ACEAvQD2AF4AhABrARUAhAB9AUAAvQCKASEAhABrARUAbQAzASEAbQBNAV4AhABrARUAbQBNAV4AhAB9AUAAbQAzASEAhAADAUAAhAAVAWsAbQAzASEAhAAVAWsAbQBNAV4AhAAVAWsAhAADAUAAvQD2AF4AhAB9AUAApQCKAV4AvQCKASEAhAB9AUAAbQBNAV4AnABfAYoAhAB9AUAAnABfAYoApQCKAV4AbQBNAV4AhAAVAWsApQAhAYoAbQBNAV4ApQAhAYoAnABfAYoApQAhAYoAhAAVAWsAvQD2AF4ApQCKAV4A1ACKAV4AvQCKASEApQCKAV4AnABfAYoA3gBfAYoApQCKAV4A3gBfAYoA1ACKAV4AnABfAYoApQAhAYoA1AAhAYoAnABfAYoA1AAhAYoA3gBfAYoA1AAhAYoApQAhAYoAvQD2AF4A1ACKAV4A9QB9AUAAvQCKASEA1ACKAV4A3gBfAYoADQFNAV4A1ACKAV4ADQFNAV4A9QB9AUAA3gBfAYoA1AAhAYoA9QAVAWsA3gBfAYoA9QAVAWsADQFNAV4A9QAVAWsA1AAhAYoAvQD2AF4A9QB9AUAA9QBrARUAvQCKASEA9QB9AUAADQFNAV4ADQEzASEA9QB9AUAADQEzASEA9QBrARUADQFNAV4A9QAVAWsA9QADAUAADQFNAV4A9QADAUAADQEzASEA9QADAUAA9QAVAWsAvQD2AF4A",c:"AgICAgICAgICAgICAgICAgICAgICAgICAhYWFhYCAhYWFhYCAhYWFhYCAgICAgIC"},retino:{v:"+v+O/48A+v+tAXD++v+SAVX++v+O/48A+v+SAVX++v9z/3QAIQCSAVX+IQCtAXD+IQCO/48AIQCSAVX+IQCO/48AIQBz/3QAIQCtAXD++v+tAXD++v+O/48AIQCtAXD++v+O/48AIQCO/48A+v9z/3QA+v+SAVX+IQCSAVX++v9z/3QAIQCSAVX+IQBz/3QA+v+SAVX++v+tAXD+IQCtAXD++v+SAVX+IQCtAXD+IQCSAVX+IQCO/48A+v+O/48A+v9z/3QAIQCO/48A+v9z/3QAIQBz/3QAt/+6AjH9Pv9kAoj9Pv97Ap79t/+6AjH9Pv97Ap79t//RAkj9yf+zAmb9aP9uAqv9aP9YApT9yf+zAmb9aP9YApT9yf+cAk/9yf+cAk/9aP9YApT9Pv9kAoj9yf+cAk/9Pv9kAoj9t/+6AjH9t//RAkj9Pv97Ap79aP9uAqv9t//RAkj9aP9uAqv9yf+zAmb9Pv9kAoj9Pv/qAQH+Pv8BAhj+Pv9kAoj9Pv8BAhj+Pv97Ap79aP9uAqv9aP8NAgz+aP/3AfX9aP9uAqv9aP/3AfX9aP9YApT9aP9YApT9aP/3AfX9Pv/qAQH+aP9YApT9Pv/qAQH+Pv9kAoj9Pv97Ap79Pv8BAhj+aP8NAgz+Pv97Ap79aP8NAgz+aP9uAqv9Pv/qAQH+t/+UAVj+t/+rAW7+Pv/qAQH+t/+rAW7+Pv8BAhj+aP8NAgz+yf/JAVD+yf+yATr+aP8NAgz+yf+yATr+aP/3AfX9aP/3AfX9yf+yATr+t/+UAVj+aP/3AfX9t/+UAVj+Pv/qAQH+Pv8BAhj+t/+rAW7+yf/JAVD+Pv8BAhj+yf/JAVD+aP8NAgz+t/+UAVj+ZACUAVj+ZACrAW7+t/+UAVj+ZACrAW7+t/+rAW7+yf/JAVD+UgDJAVD+UgCyATr+yf/JAVD+UgCyATr+yf+yATr+yf+yATr+UgCyATr+ZACUAVj+yf+yATr+ZACUAVj+t/+UAVj+t/+rAW7+ZACrAW7+UgDJAVD+t/+rAW7+UgDJAVD+yf/JAVD+ZACUAVj+3gDqAQH+3gABAhj+ZACUAVj+3gABAhj+ZACrAW7+UgDJAVD+swANAgz+swD3AfX9UgDJAVD+swD3AfX9UgCyATr+UgCyATr+swD3AfX93gDqAQH+UgCyATr+3gDqAQH+ZACUAVj+ZACrAW7+3gABAhj+swANAgz+ZACrAW7+swANAgz+UgDJAVD+3gDqAQH+3gBkAoj93gB7Ap793gDqAQH+3gB7Ap793gABAhj+swANAgz+swBuAqv9swBYApT9swANAgz+swBYApT9swD3AfX9swD3AfX9swBYApT93gBkAoj9swD3AfX93gBkAoj93gDqAQH+3gABAhj+3gB7Ap79swBuAqv93gABAhj+swBuAqv9swANAgz+3gBkAoj9ZAC6AjH9ZADRAkj93gBkAoj9ZADRAkj93gB7Ap79swBuAqv9UgCzAmb9UgCcAk/9swBuAqv9UgCcAk/9swBYApT9swBYApT9UgCcAk/9ZAC6AjH9swBYApT9ZAC6AjH93gBkAoj93gB7Ap79ZADRAkj9UgCzAmb93gB7Ap79UgCzAmb9swBuAqv9ZAC6AjH9t/+6AjH9t//RAkj9ZAC6AjH9t//RAkj9ZADRAkj9UgCzAmb9yf+zAmb9yf+cAk/9UgCzAmb9yf+cAk/9UgCcAk/9UgCcAk/9yf+cAk/9t/+6AjH9UgCcAk/9t/+6AjH9ZAC6AjH9ZADRAkj9t//RAkj9yf+zAmb9ZADRAkj9yf+zAmb9UgCzAmb97v9+AbL+7v/YAVj+7v+rASr+7v9+AbL+7v+rASr+7v9QAYX+LgCrASr+LgDYAVj+LgB+AbL+LgCrASr+LgB+AbL+LgBQAYX+LgDYAVj+7v/YAVj+7v9+AbL+LgDYAVj+7v9+AbL+LgB+AbL+7v9QAYX+7v+rASr+LgCrASr+7v9QAYX+LgCrASr+LgBQAYX+7v+rASr+7v/YAVj+LgDYAVj+7v+rASr+LgDYAVj+LgCrASr+LgB+AbL+7v9+AbL+7v9QAYX+LgB+AbL+7v9QAYX+LgBQAYX+7v+M/6QA7v9uAML/7v9BAJT/7v+M/6QA7v9BAJT/7v9e/3cALgBBAJT/LgBuAML/LgCM/6QALgBBAJT/LgCM/6QALgBe/3cALgBuAML/7v9uAML/7v+M/6QALgBuAML/7v+M/6QALgCM/6QA7v9e/3cA7v9BAJT/LgBBAJT/7v9e/3cALgBBAJT/LgBe/3cA7v9BAJT/7v9uAML/LgBuAML/7v9BAJT/LgBuAML/LgBBAJT/LgCM/6QA7v+M/6QA7v9e/3cALgCM/6QA7v9e/3cALgBe/3cADgCWAVr+e//BAS/+DgB0ARL9fP/zAZD9DgB0ARL9p/+qAdn9dv/JASf+kP+2AQT+e//BAS/+av/eARL+n/+3Acz9p/+qAdn9av/eARL+p/+qAdn9kP+2AQT+av/eARL+kP+2AQT+dv/JASf+Xv/zAf39k//MAbf9n/+3Acz9Xv/zAf39n/+3Acz9av/eARL+Uf8IAuj9h//hAaL9k//MAbf9Uf8IAuj9k//MAbf9Xv/zAf39Rf8dAtP9cP/9AZv9fP/zAZD9Rf8dAtP9fP/zAZD9h//hAaL9Rf8dAtP9h//hAaL9Uf8IAuj9Pv8pAsf9cP/9AZv9Rf8dAtP9e//BAS/+Pv8pAsf9Pv8pAsf9e//BAS/+Pv8pAsf9e//BAS/++/+ZARz9DgB0ARL95P+ZATb9+/+ZARz95P+ZATb95f+kATH95/+/ASb9+/+ZARz95f+kATH95P+ZATb9xP+1AVL95f+kATH95f/CASf95/+/ASb95f+kATH95f/CASf95f+kATH9xP+1AVL95f/CASf9xP+1AVL9kf/hAX795f/CASf9kf/hAX79kv/tAXn9m/9TAk795f/CASf9kv/tAXn9Pv8pAsf9e/+RAl/9m/9TAk79Pv8pAsf9m/9TAk79kf/hAX79e/+RAl/9DgC9AjT9DgB0ARL9DgC9AjT9oQCRAl/9DgB0ARL9nwDzAZD9DgB0ARL9dQA8Akj9pQCKAmb9iwBnAlP9oQCRAl/9sQB1Anv9fAAvAlX9dQA8Akj9sQB1Anv9dQA8Akj9iwBnAlP9sQB1Anv9iwBnAlP9pQCKAmb9vgBgApD9iAAaAmr9fAAvAlX9vgBgApD9fAAvAlX9sQB1Anv9ygBLAqX9lQAFAn79iAAaAmr9ygBLAqX9iAAaAmr9vgBgApD91gA2Arr9qwD9AZv9nwDzAZD91gA2Arr9nwDzAZD9lQAFAn791gA2Arr9lQAFAn79ygBLAqX93gApAsf9qwD9AZv91gA2Arr9oQCRAl/93gApAsf93gApAsf9oQCRAl/93gApAsf9oQCRAl/9NACJAVz9DgB0ARL9NwCZATb9NwCZATb9VwC1AVL9NgCUAUH9NgCKAWD9NACJAVz9NgCUAUH9NgCKAWD9NgCUAUH9VwC1AVL9NgCKAWD9VwC1AVL9igDhAX79NgCKAWD9igDhAX79iQDcAYr9gQCxAfH9NgCKAWD9iQDcAYr93gApAsf9oQDBAS/+gQCxAfH93gApAsf9gQCxAfH9igDhAX79oQDBAS/+DgCWAVr+DgB0ARL9",c:"BQUFBQUFBQUFBQUFBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBhsYGBwcHBgYISEcHBwYGBgGBhsbGBgYGBsbGxgbGBgcHBwYGCEhHBwcGBgYGxsYGBgYGxsbGA=="},canna:{v:"N/88/0r/kf86APb/qf8TACMAN/88/0r/qf8TACMAT/8V/3f/cP8TAEEAWP86ABQA/v48/2f/cP8TAEEA/v48/2f/Fv8V/5T/WP86ABQAkf86APb/N/88/0r/WP86ABQAN/88/0r//v48/2f/T/8V/3f/qf8TACMAcP8TAEEAT/8V/3f/cP8TAEEAFv8V/5T/qf8TACMAkf86APb/WP86ABQAqf8TACMAWP86ABQAcP8TAEEA/v48/2f/N/88/0r/T/8V/3f//v48/2f/T/8V/3f/Fv8V/5T/9/8lAboAnf8nAA0A9/8lAboA9/8lAboA9/8lAboAnf8nAA0AZP8nACoAvv8lAdcAvv8lAdcAZP8nACoAvv8lAdcAZP8nACoA4/8+AdoA4/8+AdoA4/8+AdoA4/8+AdoA4/8+AdoA4/8+AdoAd/8NAAoAd/8NAAoAd/8NAAoAd/8NAAoAd/8NAAoAd/8NAAoAjP8TADIA5v8RAd8A5v8RAd8AjP8TADIA5v8RAd8AjP8TADIAz/84AbIAdf86AAUAz/84AbIAz/84AbIAz/84AbIAdf86AAUA4/8+AdoA4/8+AdoA9/8lAboA4/8+AdoA9/8lAboA9/8lAboA4/8+AdoA4/8+AdoAvv8lAdcA4/8+AdoAvv8lAdcAvv8lAdcA4/8+AdoA4/8+AdoA5v8RAd8A4/8+AdoA5v8RAd8A5v8RAd8A4/8+AdoA4/8+AdoAz/84AbIA4/8+AdoAz/84AbIAz/84AbIAd/8NAAoAd/8NAAoAnf8nAA0Ad/8NAAoAnf8nAA0Anf8nAA0Ad/8NAAoAd/8NAAoAZP8nACoAd/8NAAoAZP8nACoAZP8nACoAd/8NAAoAd/8NAAoAjP8TADIAd/8NAAoAjP8TADIAjP8TADIAd/8NAAoAd/8NAAoAdf86AAUAd/8NAAoAdf86AAUAdf86AAUAnf8nAA0Adf86AAUAz/84AbIAnf8nAA0Az/84AbIA9/8lAboA5v8RAd8AjP8TADIAnf8nAA0A5v8RAd8Anf8nAA0A9/8lAboAz/84AbIAdf86AAUAZP8nACoAz/84AbIAZP8nACoAvv8lAdcAZP8nACoAjP8TADIA5v8RAd8AZP8nACoA5v8RAd8Avv8lAdcAd/8NAAoAnf8nAA0AjP8TADIAd/8NAAoAjP8TADIAZP8nACoAd/8NAAoAdf86AAUAnf8nAA0Ad/8NAAoAZP8nACoAdf86AAUA4/8+AdoA5v8RAd8A9/8lAboA4/8+AdoAvv8lAdcA5v8RAd8A4/8+AdoA9/8lAboAz/84AbIA4/8+AdoAz/84AbIAvv8lAdcAXwD2AYkB8v8eAbgAXwD2AYkBXwD2AYkBXwD2AYkB8v8eAbgAv/8eAdMALAD2AaQBLAD2AaQBv/8eAdMALAD2AaQBv/8eAdMAUQAMAqsBUQAMAqsBUQAMAqsBUQAMAqsBUQAMAqsBUQAMAqsBzv8JAbAAzv8JAbAAzv8JAbAAzv8JAbAAzv8JAbAAzv8JAbAA4v8JAdcATwDhAagBTwDhAagB4v8JAdcATwDhAagB4v8JAdcAPQAMAoUB0P8zAbQAPQAMAoUBPQAMAoUBPQAMAoUB0P8zAbQAUQAMAqsBUQAMAqsBXwD2AYkBUQAMAqsBXwD2AYkBXwD2AYkBUQAMAqsBUQAMAqsBLAD2AaQBUQAMAqsBLAD2AaQBLAD2AaQBUQAMAqsBUQAMAqsBTwDhAagBUQAMAqsBTwDhAagBTwDhAagBUQAMAqsBUQAMAqsBPQAMAoUBUQAMAqsBPQAMAoUBPQAMAoUBzv8JAbAAzv8JAbAA8v8eAbgAzv8JAbAA8v8eAbgA8v8eAbgAzv8JAbAAzv8JAbAAv/8eAdMAzv8JAbAAv/8eAdMAv/8eAdMAzv8JAbAAzv8JAbAA4v8JAdcAzv8JAbAA4v8JAdcA4v8JAdcAzv8JAbAAzv8JAbAA0P8zAbQAzv8JAbAA0P8zAbQA0P8zAbQA8v8eAbgA0P8zAbQAPQAMAoUB8v8eAbgAPQAMAoUBXwD2AYkBTwDhAagB4v8JAdcA8v8eAbgATwDhAagB8v8eAbgAXwD2AYkBPQAMAoUB0P8zAbQAv/8eAdMAPQAMAoUBv/8eAdMALAD2AaQBv/8eAdMA4v8JAdcATwDhAagBv/8eAdMATwDhAagBLAD2AaQBzv8JAbAA8v8eAbgA4v8JAdcAzv8JAbAA4v8JAdcAv/8eAdMAzv8JAbAA0P8zAbQA8v8eAbgAzv8JAbAAv/8eAdMA0P8zAbQAUQAMAqsBTwDhAagBXwD2AYkBUQAMAqsBLAD2AaQBTwDhAagBUQAMAqsBXwD2AYkBPQAMAoUBUQAMAqsBPQAMAoUBLAD2AaQB1gCCAnwCUwDuAYAB1gCCAnwC1gCCAnwC1gCCAnwCUwDuAYABLADuAZUBrwCCApECrwCCApECLADuAZUBrwCCApECLADuAZUB0ACRAqAC0ACRAqAC0ACRAqAC0ACRAqAC0ACRAqAC0ACRAqACMgDgAXEBMgDgAXEBMgDgAXEBMgDgAXEBMgDgAXEBMgDgAXEBRADdAZIBxwBxAo4CxwBxAo4CRADdAZIBxwBxAo4CRADdAZIBvgCTAn4COwD/AYMBvgCTAn4CvgCTAn4CvgCTAn4COwD/AYMB0ACRAqAC0ACRAqAC1gCCAnwC0ACRAqAC1gCCAnwC1gCCAnwC0ACRAqAC0ACRAqACrwCCApEC0ACRAqACrwCCApECrwCCApEC0ACRAqAC0ACRAqACxwBxAo4C0ACRAqACxwBxAo4CxwBxAo4C0ACRAqAC0ACRAqACvgCTAn4C0ACRAqACvgCTAn4CvgCTAn4CMgDgAXEBMgDgAXEBUwDuAYABMgDgAXEBUwDuAYABUwDuAYABMgDgAXEBMgDgAXEBLADuAZUBMgDgAXEBLADuAZUBLADuAZUBMgDgAXEBMgDgAXEBRADdAZIBMgDgAXEBRADdAZIBRADdAZIBMgDgAXEBMgDgAXEBOwD/AYMBMgDgAXEBOwD/AYMBOwD/AYMBUwDuAYABOwD/AYMBvgCTAn4CUwDuAYABvgCTAn4C1gCCAnwCxwBxAo4CRADdAZIBUwDuAYABxwBxAo4CUwDuAYAB1gCCAnwCvgCTAn4COwD/AYMBLADuAZUBvgCTAn4CLADuAZUBrwCCApECLADuAZUBRADdAZIBxwBxAo4CLADuAZUBxwBxAo4CrwCCApECMgDgAXEBUwDuAYABRADdAZIBMgDgAXEBRADdAZIBLADuAZUBMgDgAXEBOwD/AYMBUwDuAYABMgDgAXEBLADuAZUBOwD/AYMB0ACRAqACxwBxAo4C1gCCAnwC0ACRAqACrwCCApECxwBxAo4C0ACRAqAC1gCCAnwCvgCTAn4C0ACRAqACvgCTAn4CrwCCApECr/9ZAOv/x/9gABkAv/8dAAkAx/9gABkAr/9ZAOv/Pv9ZACYAx/9gABkAPv9ZACYAVv9gAFQAVv9gAFQAPv9ZACYATv8dAEQAoP8vAM7/r/9ZAOv/v/8dAAkAr/9ZAOv/oP8vAM7/L/8vAAkAr/9ZAOv/L/8vAAkAPv9ZACYAPv9ZACYAL/8vAAkATv8dAEQAo//6/9T/oP8vAM7/v/8dAAkAoP8vAM7/o//6/9T/Mv/6/w8AoP8vAM7/Mv/6/w8AL/8vAAkAL/8vAAkAMv/6/w8ATv8dAEQAt//a//n/o//6/9T/v/8dAAkAo//6/9T/t//a//n/Rf/a/zUAo//6/9T/Rf/a/zUAMv/6/w8AMv/6/w8ARf/a/zUATv8dAEQAz//h/ygAt//a//n/v/8dAAkAt//a//n/z//h/ygAXv/h/2MAt//a//n/Xv/h/2MARf/a/zUARf/a/zUAXv/h/2MATv8dAEQA3v8LAEUAz//h/ygAv/8dAAkAz//h/ygA3v8LAEUAbP8LAIAAz//h/ygAbP8LAIAAXv/h/2MAXv/h/2MAbP8LAIAATv8dAEQA2/9AAD8A3v8LAEUAv/8dAAkA3v8LAEUA2/9AAD8Aaf9AAHoA3v8LAEUAaf9AAHoAbP8LAIAAbP8LAIAAaf9AAHoATv8dAEQAx/9gABkA2/9AAD8Av/8dAAkA2/9AAD8Ax/9gABkAVv9gAFQA2/9AAD8AVv9gAFQAaf9AAHoAaf9AAHoAVv9gAFQATv8dAEQA",c:"DAwMDAwMDAwMDAwMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAQEEBAEBAQEEBAEBBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQBAQQEAQEBAQQEAQEEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAEBBAQBAQEBBAQBAQQEGgsLGhoLCxoaCwsaGgsLGhoLCxoaCwsaGgsLGhoLCxo="},galleggiante:{v:"TgBKACcATgBWAPD/EAB1ABQATgBKACcAXwABACMAXgASANX/TgBKACcAXgASANX/TgBWAPD/XwABACMAOADH/wsAOADT/9T/XwABACMAOADT/9T/XgASANX/OADT/9T/OADH/wsA8f+8/+z/TgBWAPD/JgBkAMr/EAB1ABQATgBWAPD/XgASANX/JgAnAKH/TgBWAPD/JgAnAKH/JgBkAMr/XgASANX/OADT/9T/EADh/6//XgASANX/EADh/6//JgAnAKH/EADh/6//OADT/9T/8f+8/+z/JgBkAMr/7/9tAM3/EAB1ABQAJgBkAMr/JgAnAKH/2P8zAKT/JgBkAMr/2P8zAKT/7/9tAM3/JgAnAKH/EADh/6//2f/q/7H/JgAnAKH/2f/q/7H/2P8zAKT/2f/q/7H/EADh/6//8f+8/+z/7/9tAM3/yP9rAPX/EAB1ABQA7/9tAM3/2P8zAKT/of8wAN3/7/9tAM3/of8wAN3/yP9rAPX/2P8zAKT/2f/q/7H/sv/o/9r/2P8zAKT/sv/o/9r/of8wAN3/sv/o/9r/2f/q/7H/8f+8/+z/yP9rAPX/yP9fACwAEAB1ABQAyP9rAPX/of8wAN3/ov8fACsAyP9rAPX/ov8fACsAyP9fACwAof8wAN3/sv/o/9r/sv/c/xEAof8wAN3/sv/c/xEAov8fACsAsv/c/xEAsv/o/9r/8f+8/+z/yP9fACwA8P9QAFIAEAB1ABQAyP9fACwAov8fACsA2v8LAGAAyP9fACwA2v8LAGAA8P9QAFIAov8fACsAsv/c/xEA2v/N/zYAov8fACsA2v/N/zYA2v8LAGAA2v/N/zYAsv/c/xEA8f+8/+z/8P9QAFIAJwBIAE8AEAB1ABQA8P9QAFIA2v8LAGAAKAD+/1wA8P9QAFIAKAD+/1wAJwBIAE8A2v8LAGAA2v/N/zYAEQDF/zMA2v8LAGAAEQDF/zMAKAD+/1wAEQDF/zMA2v/N/zYA8f+8/+z/JwBIAE8ATgBKACcAEAB1ABQAJwBIAE8AKAD+/1wAXwABACMAJwBIAE8AXwABACMATgBKACcAKAD+/1wAEQDF/zMAOADH/wsAKAD+/1wAOADH/wsAXwABACMAOADH/wsAEQDF/zMA8f+8/+z/",c:"BgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcX"},lampione:{v:"gACAAID/gACAAIAAgABAAIAAgACAAID/gABAAIAAgABAAID/gP9AAIAAgP+AAIAAgP+AAID/gP9AAIAAgP+AAID/gP9AAID/gP+AAIAAgACAAIAAgACAAID/gP+AAIAAgACAAID/gP+AAID/gABAAID/gABAAIAAgP9AAIAAgABAAID/gP9AAIAAgP9AAID/gABAAIAAgACAAIAAgP+AAIAAgABAAIAAgP+AAIAAgP9AAIAAgP+AAID/gACAAID/gABAAID/gP+AAID/gABAAID/gP9AAID/YACAACgAKACAAGAAAACAAAAAKACAAGAAYACAACgAYACAASgAKACAAGAAYACAASgAKACAAWAAKACAAWAAYACAASgAAACAAQAAYACAANj/YACAACgAAACAAAAAYACAACgAYACAANj/YACAAdj/YACAACgAYACAAdj/YACAASgAYACAASgAYACAAdj/AACAAQAAKACAAKD/YACAANj/AACAAAAAYACAANj/KACAAKD/KACAAaD/YACAANj/KACAAaD/YACAAdj/YACAAdj/KACAAaD/AACAAQAA2P+AAKD/KACAAKD/AACAAAAAKACAAKD/2P+AAKD/2P+AAaD/KACAAKD/2P+AAaD/KACAAaD/KACAAaD/2P+AAaD/AACAAQAAoP+AANj/2P+AAKD/AACAAAAA2P+AAKD/oP+AANj/oP+AAdj/2P+AAKD/oP+AAdj/2P+AAaD/2P+AAaD/oP+AAdj/AACAAQAAoP+AACgAoP+AANj/AACAAAAAoP+AANj/oP+AACgAoP+AASgAoP+AANj/oP+AASgAoP+AAdj/oP+AAdj/oP+AASgAAACAAQAA2P+AAGAAoP+AACgAAACAAAAAoP+AACgA2P+AAGAA2P+AAWAAoP+AACgA2P+AAWAAoP+AASgAoP+AASgA2P+AAWAAAACAAQAAKACAAGAA2P+AAGAAAACAAAAA2P+AAGAAKACAAGAAKACAAWAA2P+AAGAAKACAAWAA2P+AAWAA2P+AAWAAKACAAWAAAACAAQAAIACgBOD/IACgBCAAIABAASAAIACgBOD/IABAASAAIABAAeD/4P9AASAA4P+gBCAA4P+gBOD/4P9AASAA4P+gBOD/4P9AAeD/4P+gBCAAIACgBCAAIACgBOD/4P+gBCAAIACgBOD/4P+gBOD/IABAAeD/IABAASAA4P9AASAAIABAAeD/4P9AASAA4P9AAeD/IABAASAAIACgBCAA4P+gBCAAIABAASAA4P+gBCAA4P9AASAA4P+gBOD/IACgBOD/IABAAeD/4P+gBOD/IABAAeD/4P9AAeD/oACABWD/oACABaAAoABABaAAoACABWD/oABABaAAoABABWD/YP9ABaAAYP+ABaAAYP+ABWD/YP9ABaAAYP+ABWD/YP9ABWD/YP+ABaAAoACABaAAoACABWD/YP+ABaAAoACABWD/YP+ABWD/oABABWD/oABABaAAYP9ABaAAoABABWD/YP9ABaAAYP9ABWD/oABABaAAoACABaAAYP+ABaAAoABABaAAYP+ABaAAYP9ABaAAYP+ABWD/oACABWD/oABABWD/YP+ABWD/oABABWD/YP9ABWD/gACABYD/gACABYAAgP+ABYAAgACABYD/gP+ABYAAgP+ABYD/gACABYAAgACABYD/AAAgBgAAgP+ABYAAgACABYAAAAAgBgAAgACABYD/gP+ABYD/AAAgBgAAgP+ABYD/gP+ABYAAAAAgBgAAMACgBTAAMACgBdD/0P+gBdD/MACgBTAA0P+gBdD/0P+gBTAA0P9ABND/MABABND/MABABDAA0P9ABND/MABABDAA0P9ABDAAMACgBdD/MACgBTAAcABgBTAAMACgBdD/cABgBTAAcABgBdD/kP9gBTAA0P+gBTAA0P+gBdD/kP9gBTAA0P+gBdD/kP9gBdD/MABgBXAAMACgBTAA0P+gBTAAMABgBXAA0P+gBTAA0P9gBXAA0P+gBdD/MACgBdD/MABgBZD/0P+gBdD/MABgBZD/0P9gBZD/cACABDAAMABABDAAMABABND/cACABDAAMABABND/cACABND/0P9ABND/0P9ABDAAkP+ABDAA0P9ABND/kP+ABDAAkP+ABND/0P9ABDAAMABABDAAMACABHAA0P9ABDAAMACABHAA0P+ABHAAMACABJD/MABABND/0P9ABND/MACABJD/0P9ABND/0P+ABJD/MABABDAAcACABDAAMACABHAA0P9ABDAA0P+ABHAAkP+ABDAAMABABND/MACABJD/cACABND/0P9ABND/kP+ABND/0P+ABJD/MACgBTAAMABgBXAAcABgBTAA0P+gBTAAkP9gBTAA0P9gBXAAMACgBdD/cABgBdD/MABgBZD/0P+gBdD/0P9gBZD/kP9gBdD/oAAgAIAAoAAgAIAAoAAgAID/oAAgAIAAoAAgAID/oAAgAID/YP8gAIAAYP8gAIAAYP8gAID/YP8gAIAAYP8gAID/YP8gAID/gABAAIAAgABAAID/gP9AAID/gABAAIAAgP9AAID/gP9AAIAAgP8AAID/gAAAAID/gAAAAIAAgP8AAID/gAAAAIAAgP8AAIAAgAAgAKAAgAAgAKAAgP8gAKAAgAAgAKAAgP8gAKAAgP8gAKAAgAAgAGD/gAAgAGD/gP8gAGD/gAAgAGD/gP8gAGD/gP8gAGD/gABAAID/gABAAIAAoAAgAIAAgABAAID/oAAgAIAAoAAgAID/YP8gAIAAgP9AAIAAgP9AAID/YP8gAIAAgP9AAID/YP8gAID/gAAgAKAAgABAAIAAgP9AAIAAgAAgAKAAgP9AAIAAgP8gAKAAgP9AAID/gABAAID/gAAgAGD/gP9AAID/gAAgAGD/gP8gAGD/oAAgAIAAgAAAAIAAgAAAAID/oAAgAIAAgAAAAID/oAAgAID/gP8AAID/gP8AAIAAYP8gAIAAgP8AAID/YP8gAIAAYP8gAID/gP8AAIAAgAAAAIAAgAAgAKAAgP8AAIAAgAAgAKAAgP8gAKAAgAAgAGD/gAAAAID/gP8AAID/gAAgAGD/gP8AAID/gP8gAGD/gAAgAGD/gAAgAGD/oAAgAID/gAAgAGD/oAAgAID/oAAgAID/gAAgAKAAgAAgAKAAoAAgAIAAgAAgAKAAoAAgAIAAoAAgAIAAgP8gAGD/gP8gAGD/YP8gAID/gP8gAGD/YP8gAID/YP8gAID/gP8gAKAAgP8gAKAAYP8gAIAAgP8gAKAAYP8gAIAAYP8gAIAAgAAAAIAAoAAgAIAAgAAgAKAAgP8AAIAAgP8gAKAAYP8gAIAAgAAAAID/gAAgAGD/oAAgAID/gP8AAID/YP8gAID/gP8gAGD/gABAAIAAgAAgAKAAoAAgAIAAgP9AAIAAYP8gAIAAgP8gAKAAgABAAID/oAAgAID/gAAgAGD/gP9AAID/gP8gAGD/YP8gAID/",c:"FBQUFA4OFBQUFBQUDg4OEg4ODhIODg4SDg4OEg4ODhIODg4SDg4OEg4ODhIODg4ODg4ODg4ODg4UFBQUDg4UFBQUFBQODg4ODg4ODhQUDg4ODg4ODg4UFBQUFBQUFBQUFBQODg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},"lampione-luce":{v:"cABgBdD/cABgBTAAcACABDAAcABgBdD/cACABDAAcACABND/kP+ABDAAkP9gBTAAkP9gBdD/kP+ABDAAkP9gBdD/kP+ABND/MACABHAAMABgBXAA0P9gBXAAMACABHAA0P9gBXAA0P+ABHAA0P9gBZD/MABgBZD/MACABJD/0P9gBZD/MACABJD/0P+ABJD/cACABND/MACABJD/MABgBZD/cACABND/MABgBZD/cABgBdD/MABgBXAAMACABHAAcACABDAAMABgBXAAcACABDAAcABgBTAA0P9gBZD/0P+ABJD/kP+ABND/0P9gBZD/kP+ABND/kP9gBdD/kP+ABDAA0P+ABHAA0P9gBXAAkP+ABDAA0P9gBXAAkP9gBTAA",c:"FRUVFRUVFRUREREREREREQ=="}};var bh=r=>Uint8Array.from(atob(r),t=>t.charCodeAt(0)),NA=new Map;function pf(r){if(NA.has(r))return NA.get(r);let t=Eh[r];if(!t)throw new Error("nel kit non c'è: "+r);let e=bh(t.v),i=new Int16Array(e.buffer,e.byteOffset,e.length>>1),n=new Float32Array(i.length),s=new Float32Array(i.length);for(let o=0;o<i.length;o++)n[o]=i[o]/512;for(let o=0;o<n.length;o+=9){let l=n[o+3]-n[o],A=n[o+4]-n[o+1],c=n[o+5]-n[o+2],h=n[o+6]-n[o],u=n[o+7]-n[o+1],p=n[o+8]-n[o+2],d=A*p-c*u,M=c*h-l*p,f=l*u-A*h,g=Math.hypot(d,M,f)||1;d/=g,M/=g,f/=g;for(let m=0;m<3;m++)s.set([d,M,f],o+m*3)}ff(n,s);let a={pos:n,nor:s,tri:bh(t.c)};return NA.set(r,a),a}var df=.0015;function ff(r,t){let e=new Map;for(let i=0;i<r.length;i+=9){let n=[t[i],t[i+1],t[i+2]],s=n[0]*r[i]+n[1]*r[i+1]+n[2]*r[i+2],a=n.map(o=>Math.round(o*500)).join()+"|"+Math.round(s*300);e.has(a)||e.set(a,[]),e.get(a).push(i)}for(let i of e.values()){if(i.length<2)continue;let n=[0,1,2].reduce((l,A)=>Math.abs(t[i[0]+A])>Math.abs(t[i[0]+l])?A:l,0),s=(l,A)=>n===0?[r[l+A*3+1],r[l+A*3+2]]:n===1?[r[l+A*3],r[l+A*3+2]]:[r[l+A*3],r[l+A*3+1]],a=i.map(l=>[s(l,0),s(l,1),s(l,2)]),o=i.map(()=>0);for(let l=1;l<i.length;l++){for(let h=0;h<l;h++)gf(a[h],a[l])>=1e-6&&(o[l]=Math.max(o[l],o[h]+1));let A=i[l],c=o[l]*df;if(c)for(let h=0;h<3;h++)for(let u=0;u<3;u++)r[A+h*3+u]+=t[A+u]*c}}}function gf(r,t){let e=s=>{let a=0;for(let o=0;o<s.length;o++){let l=s[o],A=s[(o+1)%s.length];a+=l[0]*A[1]-A[0]*l[1]}return a/2},i=r,n=e(t)<0?[...t].reverse():t;for(let s=0;s<3&&i.length;s++){let a=n[s],o=n[(s+1)%3],l=c=>(o[0]-a[0])*(c[1]-a[1])-(o[1]-a[1])*(c[0]-a[0]),A=[];for(let c=0;c<i.length;c++){let h=i[c],u=i[(c+1)%i.length],p=l(h),d=l(u);d>=-1e-9?(p<-1e-9&&A.push([h[0]+(u[0]-h[0])*p/(p-d),h[1]+(u[1]-h[1])*p/(p-d)]),A.push(u)):p>=-1e-9&&A.push([h[0]+(u[0]-h[0])*p/(p-d),h[1]+(u[1]-h[1])*p/(p-d)])}i=A}return i.length>=3?Math.abs(e(i)):0}var aa=new dt,OA=new Map;function mf(r){return OA.has(r)||(aa.set(r),OA.set(r,[aa.r,aa.g,aa.b])),OA.get(r)}function vf(r,t=null){let{pos:e,nor:i,tri:n}=pf(r),s=new Float32Array(e.length);for(let a=0;a<n.length;a++){let o=_h[n[a]],l=mf(t&&t[o]||o);for(let A=0;A<3;A++)s.set(l,a*9+A*3)}return{pos:e,nor:i,col:s}}function ir(r,t=null){let e=vf(r,t),i=new Ot;return i.setAttribute("position",new Qt(e.pos.slice(),3)),i.setAttribute("normal",new Qt(e.nor.slice(),3)),i.setAttribute("color",new Qt(e.col,3)),i.computeBoundingBox(),i.computeBoundingSphere(),i}var Or=Math.PI/180;function Mf(r,t,e,i){let n=r/2,s=t/2,a=e/2,o=[],l=(u,p,d,M)=>M===0?[u*n,p*(s-i),d*(a-i)]:M===1?[u*(n-i),p*s,d*(a-i)]:[u*(n-i),p*(s-i),d*a],A=(u,p,d)=>{let M=[(p[1]-u[1])*(d[2]-u[2])-(p[2]-u[2])*(d[1]-u[1]),(p[2]-u[2])*(d[0]-u[0])-(p[0]-u[0])*(d[2]-u[2]),(p[0]-u[0])*(d[1]-u[1])-(p[1]-u[1])*(d[0]-u[0])];M[0]*(u[0]+p[0]+d[0])+M[1]*(u[1]+p[1]+d[1])+M[2]*(u[2]+p[2]+d[2])<0?o.push(...u,...d,...p):o.push(...u,...p,...d)},c=(u,p,d,M)=>{A(u,p,d),A(u,d,M)};for(let u of[-1,1]){c(l(u,-1,-1,0),l(u,1,-1,0),l(u,1,1,0),l(u,-1,1,0)),c(l(-1,u,-1,1),l(1,u,-1,1),l(1,u,1,1),l(-1,u,1,1)),c(l(-1,-1,u,2),l(1,-1,u,2),l(1,1,u,2),l(-1,1,u,2));for(let p of[-1,1]){c(l(u,p,-1,0),l(u,p,1,0),l(u,p,1,1),l(u,p,-1,1)),c(l(-1,u,p,1),l(1,u,p,1),l(1,u,p,2),l(-1,u,p,2)),c(l(u,-1,p,0),l(u,1,p,0),l(u,1,p,2),l(u,-1,p,2));for(let d of[-1,1])A(l(u,p,d,0),l(u,p,d,1),l(u,p,d,2))}}let h=new Ot;return h.setAttribute("position",new vt(o,3)),h}function Pf(r,t,e){switch(r){case"kit":return ir(t,e.tinte);case"b":{let i=Math.min(.08,Math.min(t[0],t[1],t[2])*.24);return(e.netta||i<.012?new Je(t[0],t[1],t[2]):Mf(t[0],t[1],t[2],i)).translate(0,t[1]/2,0)}case"c":return new cn(t[3]??t[0],t[0],t[1],t[2]||8).translate(0,t[1]/2,0);case"k":{let i=new Sr(t[0],t[1],t[2]||8);return(t[2]||8)===4&&i.rotateY(Math.PI/4),i.translate(0,t[1]/2,0)}case"s":return new pn(t[0],t[1]||0);case"f":return new cn(t[0],t[0],t[1],t[4]||4,1,!1,t[2]*Or,t[3]*Or).translate(0,t[1]/2,0);default:return new Je(.1,.1,.1)}}var FA=new Map;function xf(r){return FA.has(r)||FA.set(r,new dt(r)),FA.get(r)}var QA=new Map,Nr={h:0,s:0,l:0};function HA(r,t){let e=r+t;if(QA.has(e))return QA.get(e);new dt(r).getHSL(Nr,Zt);let i=Nr.h*360,n=i<75?-8:i<240?11:-7,s=new dt().setHSL(((i+n*t)%360+360)%360/360,Math.min(1,Nr.s*(Nr.s<.25?1.2:1)),Math.max(.03,Nr.l*(1-.13*t)),Zt);return QA.set(e,s),s}function si(r){let t={pieni:{pos:[],nor:[],col:[],st:[]},luce:{pos:[],nor:[],col:[],st:[]}},e={},i=0,n=new yt,s=new $t,a=new ni;for(let l of r){if(!l)continue;if(l[0]==="parte"){e[l[1]]={...si(l[2]),at:l[3]||[0,0,0]};continue}let[A,c,h=[0,0,0],u="#ffffff",p={}]=l,d=Pf(A,c,p);d.index&&(d=d.toNonIndexed());let M=p.r||[0,0,0];n.compose(new b(...h),s.setFromEuler(a.set(M[0]*Or,M[1]*Or,M[2]*Or)),new b(...p.s||[1,1,1])),d.applyMatrix4(n),d.computeVertexNormals();let f=p.e?t.luce:t.pieni,g=d.attributes.position.count;i++;for(let m=0;m<g;m++)f.st.push(i);if(f.pos.push(...d.attributes.position.array),f.nor.push(...d.attributes.normal.array),A==="kit")f.col.push(...d.attributes.color.array);else{let m=xf(u),v=!p.e&&!p.uno&&(A==="b"||A==="c"),P=A==="c"&&!!p.r&&(Math.abs(p.r[0])>30||Math.abs(p.r[2])>30),y=d.attributes.normal;for(let x=0;x<g;x+=3){let w=y.getY(x),I=v?P?w>.3?m:HA(u,1):w>.8?m:w<-.5?HA(u,2):HA(u,1):m;for(let L=0;L<3;L++)f.col.push(I.r,I.g,I.b)}}d.dispose()}let o=l=>{if(!l.pos.length)return null;let A=new Ot;return A.setAttribute("position",new vt(l.pos,3)),A.setAttribute("normal",new vt(l.nor,3)),A.setAttribute("color",new vt(l.col,3)),A.setAttribute("strato",new vt(l.st,1)),A.computeBoundingBox(),A.computeBoundingSphere(),A};return{pieni:o(t.pieni),luce:o(t.luce),...Object.keys(e).length?{parti:e}:{}}}var Bh=new dt,Sh=new dt;function oa(r,t,e){return Bh.set(r),Sh.set(t),"#"+Bh.lerp(Sh,e).getHexString()}var Kt="#b08cff",Ni="#ffb48f";var Ce="#5ee1ff",_e="#ffcf5c",se="#6df5a8",ye="#ff8a3d",Te="#6f8fff",Ie="#ff7ac6",Qg={[Ce]:"#ffc46e",[_e]:"#fff1b3",[se]:"#d9f56b",[ye]:"#ffe16b",[Te]:"#ffd27a",[Ie]:"#ffd0a1",[Kt]:"#e7dcff",[Ni]:"#ffe0cc"},yf=[{id:"studio",colore:_e,nome:"Studio"},{id:"allenamento",colore:se,nome:"Allenamento"},{id:"lavoro",colore:Ce,nome:"Lavoro"},{id:"svago",colore:Ie,nome:"Svago"},{id:"casa",colore:ye,nome:"Casa"},{id:"sera",colore:Te,nome:"Sera"}],Hg=Object.fromEntries(yf.map(r=>[r.id,r]));var Ch=r=>{let t=String(r).replace("#","");return[0,2,4].map(e=>parseInt(t.slice(e,e+2),16)||0)},wf=r=>"#"+r.map(t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")).join("");function Th(r,t,e){let i=Ch(r),n=Ch(t);return wf(i.map((s,a)=>s+(n[a]-s)*e))}function Oi(r,t=Kt){return typeof r=="string"&&/^#[0-9a-f]{6}$/i.test(r)?r.toLowerCase():t}var Df=["corti","ricci","lunghi","frangia","chignon","rasati"],_f=["nessuno","cuffie","occhiali","berretto","fiore","fascia"],Ef=["felpa","maglietta"];function bf(r={}){return{pelle:Oi(r.pelle,"#f1c7a3"),capelli:Df.includes(r.capelli)?r.capelli:"corti",coloreCapelli:Oi(r.coloreCapelli,"#3a2a24"),colore:Oi(r.colore,"#5ee1ff"),pantaloni:Oi(r.pantaloni,"#6f8fff"),sopra:Ef.includes(r.sopra)?r.sopra:"felpa",accessorio:_f.includes(r.accessorio)?r.accessorio:"nessuno",coloreAccessorio:Oi(r.coloreAccessorio,"#b08cff"),scarpe:Oi(r.scarpe,"#f2eefb"),occhi:r.occhi==="chiusi"?"chiusi":"aperti"}}function Ih(r={}){let t=bf(r),[e,i,n]=[1,3,5].map(a=>parseInt(t.coloreCapelli.slice(a,a+2),16));return{pelo:.3*e+.59*i+.11*n<64?Th(t.coloreCapelli,t.colore,.35):t.coloreCapelli,corpo:t.colore,dentro:t.pelle}}var Rh=[{id:"divano",nome:"Divano",gruppo:"sedute",colore:Te,prezzo:40,piedi:[3,2],sedute:[[.99,1.24],[2.01,1.24]],quota:[0,76]},{id:"divano-grande",nome:"Divano grande",gruppo:"sedute",colore:Ie,prezzo:60,piedi:[3,2],sedute:[[.77,1.24],[1.5,1.24],[2.23,1.24]],quota:[0,76]},{id:"poltrona",nome:"Poltrona",gruppo:"sedute",colore:Ni,prezzo:25,piedi:[2,2],sedute:[[1,1.24]],quota:[0,70]},{id:"sedia",nome:"Sedia da scrivania",gruppo:"sedute",colore:Ce,prezzo:15,piedi:[1,1],sedute:[[.5,.45,"dietro"]],quota:[0,83]},{id:"pouf",nome:"Pouf",gruppo:"sedute",colore:Ie,prezzo:12,piedi:[1,1],sedute:[[.5,.5]],quota:[0,50]},{id:"panchina",nome:"Panchina",gruppo:"sedute",colore:ye,prezzo:20,piedi:[3,1],sedute:[[.9,.55],[2.1,.55]],quota:[0,50]},{id:"scrivania",nome:"Scrivania",gruppo:"tavoli",colore:Ce,prezzo:35,piedi:[3,2],modulo:"progetti",quota:[0,112]},{id:"tavolino",nome:"Tavolino",gruppo:"tavoli",colore:Ce,prezzo:15,piedi:[3,2],quota:[0,20]},{id:"tavolino-film",nome:"Tavolino coi popcorn",gruppo:"tavoli",colore:Ce,prezzo:20,piedi:[3,2],quota:[0,37]},{id:"tavolo",nome:"Tavolo",gruppo:"tavoli",colore:ye,prezzo:30,piedi:[2,2],quota:[0,64]},{id:"libreria",nome:"Libreria",gruppo:"tavoli",colore:_e,prezzo:35,piedi:[3,1],quota:[0,150]},{id:"mensola",nome:"Mensola coi libri",gruppo:"tavoli",colore:_e,prezzo:20,piedi:[3,1],alto:!0,quota:[134,173]},{id:"letto",nome:"Letto",gruppo:"casa",colore:Te,prezzo:50,piedi:[3,3],sdraio:[1.5,1.6],modulo:"notte",quota:[0,84]},{id:"comodino",nome:"Comodino",gruppo:"casa",colore:Te,prezzo:15,piedi:[1,1],quota:[0,90]},{id:"frigo",nome:"Frigo",gruppo:"casa",colore:Ce,prezzo:40,piedi:[1,1],quota:[0,176]},{id:"cucina",nome:"Cucina",gruppo:"casa",colore:ye,prezzo:45,piedi:[3,1],quota:[0,76]},{id:"camino",nome:"Camino",gruppo:"casa",colore:ye,prezzo:45,piedi:[3,1],luce:!0,quota:[0,106]},{id:"parete",nome:"Parete bassa",gruppo:"casa",colore:Kt,prezzo:5,piedi:[1,1],quota:[0,74]},{id:"lampada",nome:"Lampada",gruppo:"luci",colore:Te,prezzo:15,piedi:[1,1],luce:!0,quota:[0,182]},{id:"lanterna",nome:"Lanterna",gruppo:"luci",colore:_e,prezzo:8,piedi:[1,1],luce:!0,passabile:!0,quota:[0,60]},{id:"pianta",nome:"Pianta",gruppo:"piante",colore:se,prezzo:10,piedi:[1,1],quota:[0,150]},{id:"cactus",nome:"Cactus",gruppo:"piante",colore:se,prezzo:8,piedi:[1,1],quota:[0,100]},{id:"fiori",nome:"Fiori",gruppo:"piante",colore:Ie,prezzo:5,piedi:[1,1],passabile:!0,quota:[0,24]},{id:"albero",nome:"Albero",gruppo:"piante",colore:se,prezzo:30,piedi:[1,1],quota:[0,190]},{id:"albero-altalena",nome:"L'albero con l'altalena",gruppo:"piante",colore:se,prezzo:45,piedi:[1,1],quota:[0,210]},{id:"alberello",nome:"Alberello",gruppo:"piante",colore:se,prezzo:18,piedi:[1,1],quota:[0,140]},{id:"arcade",nome:"Cabinato",gruppo:"svago",colore:Ie,prezzo:60,piedi:[1,1],modulo:"arcade",quota:[0,160]},{id:"televisore",nome:"Televisore",gruppo:"svago",colore:Te,prezzo:90,piedi:[3,1],modulo:"cinema",quota:[0,156]},{id:"giradischi",nome:"Giradischi",gruppo:"svago",colore:Ie,prezzo:50,piedi:[1,1],modulo:"musica",quota:[0,90]},{id:"telescopio",nome:"Telescopio",gruppo:"svago",colore:_e,prezzo:80,piedi:[1,1],modulo:"cielo",quota:[0,130]},{id:"ruota",nome:"Ruota della fortuna",gruppo:"svago",colore:Ie,prezzo:40,piedi:[1,1],stati:8,quota:[0,172]},{id:"acquario",nome:"Acquario",gruppo:"svago",colore:Ce,prezzo:70,piedi:[3,1],missione:"tre-giorni",quota:[0,118]},{id:"sacco",nome:"Sacco da boxe",gruppo:"palestra",colore:ye,prezzo:30,piedi:[1,1],quota:[0,142]},{id:"manubri",nome:"Manubri",gruppo:"palestra",colore:se,prezzo:25,piedi:[3,1],quota:[0,72]},{id:"panca",nome:"Panca",gruppo:"palestra",colore:se,prezzo:25,piedi:[4,1],sedute:[[2,.5]],quota:[0,26]},{id:"borraccia",nome:"Borraccia",gruppo:"palestra",colore:Ce,prezzo:3,piedi:[1,1],passabile:!0,quota:[0,46]},{id:"finestra",nome:"Finestra",gruppo:"muro",colore:Kt,tipo:"muro",prezzo:20,piedi:[2,0],len:2,z:[76,196]},{id:"finestra-alta",nome:"Finestra alta",gruppo:"muro",colore:Kt,tipo:"muro",prezzo:25,piedi:[2,0],len:2,z:[34,204]},{id:"porta",nome:"Porta",gruppo:"muro",colore:ye,tipo:"muro",prezzo:0,piedi:[1,0],len:1,z:[0,170],modulo:"stanze"},{id:"orologio",nome:"Orologio",gruppo:"muro",colore:Kt,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[158,202]},{id:"calendario",nome:"Calendario",gruppo:"muro",colore:Kt,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[102,184],modulo:"oggi"},{id:"quadro",nome:"Quadro",gruppo:"muro",colore:Ni,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[138,186]},{id:"quadro-grande",nome:"Quadro grande",gruppo:"muro",colore:Te,tipo:"muro",prezzo:18,piedi:[2,0],len:2,z:[118,198]},{id:"specchio",nome:"Specchio",gruppo:"muro",colore:se,tipo:"muro",prezzo:25,piedi:[2,0],len:2,z:[28,198],modulo:"tu"},{id:"led",nome:"Orologio luminoso",gruppo:"muro",colore:se,tipo:"muro",prezzo:20,piedi:[2,0],len:2,z:[164,202]},{id:"mappa-stelle",nome:"Mappa delle stelle",gruppo:"muro",colore:_e,tipo:"muro",prezzo:25,piedi:[2,0],len:2,z:[108,202]},{id:"telo",nome:"Telo del cinema",gruppo:"muro",colore:Ie,tipo:"muro",prezzo:70,piedi:[4,0],len:4,z:[62,214],modulo:"cinema"},{id:"lucine",nome:"Lucine",gruppo:"muro",colore:Kt,tipo:"muro",prezzo:15,piedi:[4,0],len:4,z:[188,210]},{id:"mensola-muro",nome:"Mensolina",gruppo:"muro",colore:_e,tipo:"muro",prezzo:8,piedi:[1,0],len:1,z:[100,146]},{id:"piante-appese",nome:"Pianta appesa",gruppo:"muro",colore:se,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[128,232]},{id:"blocco",nome:"Blocco",gruppo:"costruire",colore:Kt,prezzo:2,piedi:[1,1],impilabile:!0,quota:[0,49]},{id:"mezzo-blocco",nome:"Mezzo blocco",gruppo:"costruire",colore:Kt,prezzo:1,piedi:[1,1],impilabile:!0,quota:[0,24]},{id:"lastra",nome:"Lastra",gruppo:"costruire",colore:Kt,prezzo:1,piedi:[1,1],impilabile:!0,quota:[0,8]},{id:"blocco-lungo",nome:"Blocco lungo",gruppo:"costruire",colore:Kt,prezzo:3,piedi:[2,1],impilabile:!0,quota:[0,49]},{id:"gradini",nome:"Gradini",gruppo:"costruire",colore:Kt,prezzo:3,piedi:[1,1],impilabile:!0,quota:[0,49]},{id:"colonna",nome:"Colonna",gruppo:"costruire",colore:Kt,prezzo:4,piedi:[1,1],impilabile:!0,quota:[0,147]},{id:"muretto",nome:"Muretto",gruppo:"costruire",colore:Kt,prezzo:2,piedi:[1,1],impilabile:!0,quota:[0,98]},{id:"casetta",nome:"Casetta",gruppo:"fuori",colore:ye,prezzo:0,piedi:[4,4],entra:!0,quota:[0,580]},{id:"cassetta-lettere",nome:"Cassetta delle lettere",gruppo:"fuori",colore:"#c42430",prezzo:8,piedi:[1,1],modulo:"posta",quota:[0,150]},{id:"lampione",nome:"Lampione",gruppo:"fuori",colore:Te,prezzo:12,piedi:[1,1],luce:!0,quota:[0,230]},{id:"orto",nome:"L'orto",gruppo:"fuori",colore:ye,prezzo:10,piedi:[3,2],passabile:!0,quota:[0,20]},{id:"orto-vuoto",nome:"Orto da bagnare",gruppo:"fuori",colore:Kt,prezzo:0,piedi:[3,2],passabile:!0,quota:[0,12]},{id:"sasso",nome:"Sasso",gruppo:"fuori",colore:Kt,prezzo:3,piedi:[1,1],quota:[0,30]},{id:"funghi",nome:"Funghi",gruppo:"fuori",colore:Ie,prezzo:3,piedi:[1,1],passabile:!0,quota:[0,20]},{id:"ciuffo",nome:"Ciuffo d'erba",gruppo:"fuori",colore:se,prezzo:1,piedi:[1,1],passabile:!0,quota:[0,25]},{id:"tappeto-tondo",nome:"Tappeto tondo",gruppo:"tappeti",colore:Kt,tipo:"tappeto",prezzo:15,piedi:[3,3],forma:"tondo"},{id:"tappeto",nome:"Tappeto",gruppo:"tappeti",colore:Ni,tipo:"tappeto",prezzo:15,piedi:[3,2],forma:"rettangolo"},{id:"tappetino",nome:"Tappetino",gruppo:"tappeti",colore:ye,tipo:"tappeto",prezzo:5,piedi:[1,1],forma:"rettangolo"},{id:"tappeto-lungo",nome:"Tappeto lungo",gruppo:"tappeti",colore:se,tipo:"tappeto",prezzo:20,piedi:[4,2],forma:"rettangolo"},{id:"stagno",nome:"Stagno",gruppo:"tappeti",colore:Ce,tipo:"tappeto",prezzo:35,piedi:[3,3],forma:"stagno"},{id:"pietra",nome:"Pietra",gruppo:"tappeti",colore:Kt,tipo:"tappeto",prezzo:2,piedi:[1,1],forma:"pietra"}];for(let r of Rh)r.tipo=r.tipo||"pavimento",r.tipo==="muro"&&(r.piedi=[r.len,0]);var Lh=Object.fromEntries(Rh.map(r=>[r.id,r]));var Bf=0,zh=(r="m")=>r+Date.now().toString(36)+(Bf++).toString(36)+Math.random().toString(36).slice(2,5),nr=(r,t)=>r+","+t,Fi=(r,t=r)=>{let e=[];for(let i=0;i<r;i++)for(let n=0;n<t;n++)e.push([i,n]);return e},Mt=(r,t,e,i=0,n=void 0)=>({id:zh(),tipo:r,i:t,j:e,r:i,...n?{c:n}:{}}),Xt=(r,t,e,i,n=void 0)=>({id:zh("a"),tipo:r,piano:t,pos:e,a:i,dir:-1,...n?{c:n}:{}}),Sf=[{id:"soggiorno",nome:"Soggiorno",tinta:Kt,fa:()=>({caselle:Fi(8),appesi:[Xt("finestra","i",0,1),Xt("calendario","i",0,5),Xt("orologio","j",0,1),Xt("porta","j",0,6)],mobili:[Mt("tappeto-tondo",2,4),Mt("tappetino",6,0),Mt("pianta",0,0),Mt("mensola",3,0),Mt("scrivania",2,0),Mt("sedia",3,2),Mt("divano",0,4,1),Mt("lampada",0,7)]})},{id:"cinema",nome:"Cinema",tinta:Ie,fa:()=>({caselle:Fi(8),appesi:[Xt("telo","i",0,1),Xt("lucine","j",0,2),Xt("quadro","j",0,1,Ni),Xt("porta","j",0,7)],mobili:[Mt("tappeto-lungo",2,1,0,Ni),Mt("divano-grande",3,0),Mt("tavolino-film",3,2),Mt("pianta",0,0),Mt("giradischi",7,0,0,_e)]})},{id:"palestra",nome:"Palestra",tinta:se,fa:()=>({caselle:Fi(8),appesi:[Xt("specchio","j",0,2),Xt("finestra","i",0,1),Xt("led","i",0,5),Xt("porta","j",0,6)],mobili:[Mt("tappeto",2,2,0,se),Mt("tappeto",2,4,0,Ce),Mt("manubri",5,0),Mt("sacco",1,1),Mt("panca",5,3,1),Mt("borraccia",6,6),Mt("pianta",0,7)]})},{id:"giardino",nome:"Giardino",tinta:se,aperta:!0,fa:()=>({caselle:Fi(10,9).filter(([r,t])=>![nr(0,8),nr(9,0),nr(9,8),nr(8,8),nr(9,7)].includes(nr(r,t))),appesi:[],mobili:[Mt("stagno",5,4),...[[1,7],[2,6],[3,5],[3,4],[4,3]].map(([r,t])=>Mt("pietra",r,t)),Mt("albero-altalena",1,1),Mt("albero",7,1),Mt("alberello",0,5),Mt("panchina",4,0),Mt("lanterna",3,1),Mt("lanterna",8,3),Mt("lanterna",2,8),Mt("fiori",1,3),Mt("fiori",3,2),Mt("fiori",8,2),Mt("fiori",4,7),Mt("fiori",8,7)]})},{id:"osservatorio",nome:"Osservatorio",tinta:_e,fa:()=>({caselle:Fi(8),appesi:[Xt("finestra-alta","i",0,1),Xt("mappa-stelle","j",0,4),Xt("orologio","j",0,1),Xt("porta","j",0,7)],mobili:[Mt("tappeto-tondo",3,3,0,_e),Mt("telescopio",1,1),Mt("libreria",0,4,1),Mt("scrivania",4,0),Mt("sedia",5,2,0,_e),Mt("lampada",0,7)]})},{id:"camera",nome:"Camera",tinta:Te,fa:()=>({caselle:Fi(7),appesi:[Xt("finestra","i",0,1),Xt("quadro-grande","j",0,1),Xt("porta","j",0,6),Xt("piante-appese","i",0,5)],mobili:[Mt("tappeto",2,3,0,Te),Mt("letto",2,0),Mt("comodino",1,0),Mt("comodino",5,0),Mt("lampada",0,6),Mt("pianta",6,6),Mt("pouf",5,4)]})},{id:"cucina",nome:"Cucina",tinta:ye,fa:()=>({caselle:Fi(7),appesi:[Xt("finestra","i",0,2),Xt("mensola-muro","j",0,3),Xt("orologio","j",0,4),Xt("porta","j",0,6)],mobili:[Mt("frigo",0,0),Mt("cucina",1,0),Mt("tavolo",3,3),Mt("tappetino",0,2,0,ye),Mt("cactus",6,0),Mt("pianta",0,6)]})},{id:"vuota",nome:"Vuota",tinta:Kt,fa:()=>({caselle:Fi(6),appesi:[Xt("porta","j",0,4)],mobili:[]})}],tm=Object.fromEntries(Sf.map(r=>[r.id,r]));var Cf=1/80;var Qi={legno:"#edab50",legnoScuro:"#8a4836",legnoChiaro:"#f6ca9f",erba:"#5ac54f",erbaScura:"#33984b",foglie:["#134c4c","#1e6f50","#33984b","#5ac54f"],terra:["#e69c69","#e69c69","#bf6f4a"],pietra:"#92a1b9",pietraScura:"#657392",ferro:"#2a2f4e",crema:"#f9e6cf",neve:"#f4f1ea",nero:"#1c121c",vaso:"#e07438",luce:"#ffd27a",schermo:"#8fe3ff",acqua:"#0098dc",rosso:"#c42430",rosa:"#f68187"};var Uh=2.07,Tf=[0,.81,0],GA=[[-.38,.625,.125],[.37,.625,.125]],If=[0,.3,-.13],Aa=GA[0][1];function kA(r=.375){let t=new kt(new Ui(r,8),new Oe({color:"#134430",transparent:!0,opacity:.72,depthWrite:!1}));return t.rotation.set(-Math.PI/2,0,Math.PI/8),t.position.y=.012,t.renderOrder=1,t}var Nh={tazza:()=>[["c",[.07,.12,8],[0,0,0],Qi.neve],["c",[.055,.02,8],[0,.11,0],"#7a4a2a"]],libro:()=>[["b",[.2,.05,.15],[0,0,0],"#e5484d"],["b",[.18,.04,.13],[.01,.005,0],Qi.crema]],annaffiatoio:()=>[["c",[.08,.14,8],[0,0,0],"#5ee1ff"],["b",[.16,.025,.025],[.11,.1,0],"#5ee1ff",{r:[0,0,30]}]],retino:()=>[["kit","retino",[0,0,0],null]],canna:()=>[["kit","canna",[0,0,0],null]],pala:()=>[["c",[.028,.46,6],[0,-.04,0],"#8a5a33"],["b",[.16,.18,.05],[0,-.2,0],Qi.ferro]],cazzuola:()=>[["c",[.028,.16,6],[0,0,0],"#8a5a33"],["b",[.15,.04,.2],[0,-.02,.1],Qi.ferro]],pennello:()=>[["c",[.024,.3,6],[0,0,0],"#8a5a33"],["b",[.09,.09,.05],[0,.3,0],"#ff7ac6"]],torcia:()=>[["c",[.04,.2,6],[0,0,0],Qi.ferro],["c",[.06,.05,8],[0,.2,0],Qi.luce,{e:!0}]],fiore:()=>[["b",[.02,.24,.02],[0,0,0],Qi.erbaScura],["s",[.07,0],[0,.27,0],"#ff8fb1"]]},Oh={ciao:{durata:1.1,saluta:!0},si:{durata:.9,annuisce:!0},no:{durata:.9,scuote:!0},musica:{durata:1.4,balla:!0},idea:{durata:1,salta:!0},sonno:{durata:1.6,dorme:!0}};var la=class{constructor(t){this.gruppo=new te,this.corpo=new te,this.gruppo.add(this.corpo),this.ombra=kA(),this.gruppo.add(this.ombra),this.zona=new kt(new Je(1,Uh+.2,1),vh),this.zona.position.y=(Uh+.2)/2,this.gruppo.add(this.zona),this.mano=new te,this.dir=new st(.3,1),this.t=Math.random()*10,this.cammina=!1,this.corre=!1,this.preso=!1,this.seduto=!1,this.dorme=!1,this.salto=null,this.caduta=null,this.unaVolta=null,this.attrezzo=null,this.segno=null,this.imposta(t)}get inAria(){return!!this.salto}ombraSu(t){let e=this.ombra;if(!e)return;if(t==null){e.visible=!1;return}let i=this.gruppo.position.y-t;if(e.visible=i>-.4&&i<9,!e.visible)return;let n=Math.max(.3,1-Math.max(0,i)/5);e.position.y=.012-i,e.scale.setScalar(n),e.material.opacity=.72*n}imposta(t={}){this.aspetto=t;for(let o of[...this.corpo.children])this.corpo.remove(o);let{pelo:e,corpo:i,dentro:n}=Ih(t),s={"#e07438":i,"#edab50":e,"#f68187":n},a=(o,l)=>{let A=new te,c=new kt(ir(o,s),Mi());return c.position.set(-l[0],-l[1],-l[2]),A.position.set(l[0],l[1],l[2]),A.add(c),A};this.busto=a("gatto-corpo",[0,0,0]),this.testa=a("gatto-testa",Tf),this.coda=a("gatto-coda",If),this.maniG=[a("gatto-mano-a",GA[0]),a("gatto-mano-b",GA[1])],this.corpo.add(this.busto,this.testa,this.coda,...this.maniG),this.maniG[1].add(this.mano),this.attrezzo&&this.impugna(this.attrezzo)}guarda(t,e){Math.hypot(t,e)>.001&&this.dir.set(t,e).normalize()}rimbalza(){this.caduta={t:0}}salta(){this.salto||(this.salto={t:0})}gesto(t){Oh[t]&&(this.unaVolta={nome:t,t:0,...Oh[t]},this.segno={nome:t,fino:performance.now()+1800})}impugna(t){for(let s of[...this.mano.children])this.mano.remove(s),s.geometry&&s.geometry.dispose();if(this.attrezzo=Nh[t]?t:null,this.punta=null,!this.attrezzo)return;let e=Nh[t](),i=si(e);i.pieni&&this.mano.add(new kt(i.pieni,Mi())),i.luce&&this.mano.add(new kt(i.luce,zA()));let n=t==="retino"||t==="canna";if(this.mano.position.set(0,n?0:.03,n?0:.1),this.mano.scale.setScalar(n?1:1.65),t==="canna"&&i.pieni){let s=i.pieni.attributes.position,a=0;for(let o=1;o<s.count;o++)s.getY(o)>s.getY(a)&&(a=o);this.punta=new b().fromBufferAttribute(s,a)}}puntaNelMondo(t){return this.mano.updateWorldMatrix(!0,!1),this.punta?t.copy(this.punta).applyMatrix4(this.mano.matrixWorld):t.copy(this.gruppo.position)}aggiorna(t){t=Math.min(t,.1),this.t+=t;let e=this.corpo,i=v=>1-Math.exp(-v*t),s=Math.atan2(this.dir.x,this.dir.y)-e.rotation.y;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;e.rotation.y+=s*i(14*(this.svelto||1));let a=this.velocita??(this.cammina?this.corre?6:3.4:0);this.pPasso=(this.pPasso||0)+((this.cammina?1:0)-(this.pPasso||0))*i(10),this.pCorsa=(this.pCorsa||0)+((this.cammina&&this.corre?1:0)-(this.pCorsa||0))*i(6),this.fase=(this.fase||0)+t*(this.cammina?3.2+a*1.9:7)*Math.PI/2;let o=this.pPasso,l=this.pCorsa,A=Math.sin(this.fase),c=Math.abs(A)*(.09+.06*l)*o,h=1,u=1+Math.sin(this.t*2.2)*.015*(1-o),p=0,d=0,M=A*(.06-.02*l)*o,f=.12*l*o,g=A*(.12+.06*l)*o;if(this.preso&&(M=Math.sin(this.t*7)*.18,g=.2),this.salto){this.salto.t+=t;let v=this.salto.t/.5;c+=Math.sin(Math.min(1,v)*Math.PI)*.9,v>=1&&(this.salto=null,this.rimbalza())}if(this.caduta){this.caduta.t+=t;let v=this.caduta.t/.42,P=v<1?Math.sin(v*Math.PI*1.5)*Math.exp(-v*3.2)*.17:0;h=1+P,u=1-P,v>=1&&(this.caduta=null)}let m=this.unaVolta;if(m){m.t+=t;let v=m.t/m.durata,P=y=>y*y*(3-2*y);m.saluta&&(this.maniG[1].position.y=Aa+Math.sin(P(Math.min(1,v))*Math.PI)*.8),m.annuisce&&(p=Math.sin(v*Math.PI*4)*.25*(1-v)),m.scuote&&(d=Math.sin(v*Math.PI*4)*.3*(1-v)),m.balla&&(M=Math.sin(v*Math.PI*6)*.15,c+=Math.abs(Math.sin(v*Math.PI*6))*.13),m.salta&&(c+=Math.sin(Math.min(1,v*2)*Math.PI)*.58),m.dorme&&(d=.3*Math.sin(Math.min(1,v*2)*Math.PI/2)),v>=1&&(this.unaVolta=null,this.maniG[1].position.y=Aa)}this.dorme&&(d=.3),this.testaX=(this.testaX||0)+(p+-f*.5+A*.03*o-(this.testaX||0))*i(12),this.testa.rotation.set(this.testaX,0,d),this.coda.rotation.y=Math.sin(this.t*2.4+this.fase*.5*o)*(.14+.24*o),(!m||!m.saluta)&&(this.maniG[0].position.y=Aa+g,this.maniG[1].position.y=Aa-g+(this.attrezzo?.05:0)),this.seduta=(this.seduta||0)+((this.seduto?1:0)-(this.seduta||0))*i(12),e.position.y=c-.2*this.seduta,e.rotation.z+=(M-e.rotation.z)*i(16),this.capriola||(e.rotation.x+=(f-e.rotation.x)*i(10)),e.scale.set(h,u*(1-.12*this.seduta),h),this.zona.scale.y=1-.3*this.seduta}};var T={add:(r,t)=>[r[0]+t[0],r[1]+t[1],r[2]+t[2]],sub:(r,t)=>[r[0]-t[0],r[1]-t[1],r[2]-t[2]],scala:(r,t)=>[r[0]*t,r[1]*t,r[2]*t],madd:(r,t,e)=>[r[0]+t[0]*e,r[1]+t[1]*e,r[2]+t[2]*e],dot:(r,t)=>r[0]*t[0]+r[1]*t[1]+r[2]*t[2],cross:(r,t)=>[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]],len:r=>Math.hypot(r[0],r[1],r[2]),norm:r=>{let t=Math.hypot(r[0],r[1],r[2]);return t>1e-9?[r[0]/t,r[1]/t,r[2]/t]:[0,1,0]}},zt={mul:(r,t)=>[r[3]*t[0]+r[0]*t[3]+r[1]*t[2]-r[2]*t[1],r[3]*t[1]-r[0]*t[2]+r[1]*t[3]+r[2]*t[0],r[3]*t[2]+r[0]*t[1]-r[1]*t[0]+r[2]*t[3],r[3]*t[3]-r[0]*t[0]-r[1]*t[1]-r[2]*t[2]],ruota:(r,t)=>{let[e,i,n,s]=r,a=s*t[0]+i*t[2]-n*t[1],o=s*t[1]+n*t[0]-e*t[2],l=s*t[2]+e*t[1]-i*t[0],A=-e*t[0]-i*t[1]-n*t[2];return[a*s+A*-e+o*-n-l*-i,o*s+A*-i+l*-e-a*-n,l*s+A*-n+a*-i-o*-e]},coniugato:r=>[-r[0],-r[1],-r[2],r[3]],norm:r=>{let t=Math.hypot(r[0],r[1],r[2],r[3])||1;return[r[0]/t,r[1]/t,r[2]/t,r[3]/t]},asse:(r,t)=>{let e=Math.sin(t/2);return[r[0]*e,r[1]*e,r[2]*e,Math.cos(t/2)]},integra:(r,t,e)=>{let i=zt.mul([t[0],t[1],t[2],0],r);return zt.norm([r[0]+i[0]*e/2,r[1]+i[1]*e/2,r[2]+i[2]*e/2,r[3]+i[3]*e/2])}};function Rf([r=0,t=0,e=0]=[]){let i=r*Math.PI/180,n=t*Math.PI/180,s=e*Math.PI/180,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),A=Math.sin(n),c=Math.cos(s),h=Math.sin(s);return[[l*c,-l*h,A],[a*h+o*A*c,a*c-o*A*h,-o*l],[o*h-a*A*c,o*c+a*A*h,a*l]]}function ve(r,t){let e={tipo:r,...t};return r==="b"&&(e.m=Rf(t.r),e.raggioB=Math.hypot(...t.h)),r==="c"&&(e.raggioB=Math.hypot(t.raggio,t.lungo/2)),r==="giro"&&(e.raggioB=t.raggio+t.spesso+t.largo+Math.abs(t.sposta)),e}function Lf(r,t,e,i){if(r.tipo==="b"){let n=r.m,s=t-r.c[0],a=e-r.c[1],o=i-r.c[2],l=n[0][0]*s+n[1][0]*a+n[2][0]*o,A=n[0][1]*s+n[1][1]*a+n[2][1]*o,c=n[0][2]*s+n[1][2]*a+n[2][2]*o,h=Math.abs(l)-r.h[0],u=Math.abs(A)-r.h[1],p=Math.abs(c)-r.h[2],d=h>0?h:0,M=u>0?u:0,f=p>0?p:0;return Math.sqrt(d*d+M*M+f*f)+Math.min(Math.max(h,u,p),0)}if(r.tipo==="c"){let n=e-r.c[1],s=i-r.c[2],a=Math.abs(t-r.c[0])-r.lungo/2,o=Math.sqrt(n*n+s*s)-r.raggio,l=a>0?a:0,A=o>0?o:0;return Math.sqrt(l*l+A*A)+Math.min(Math.max(a,o),0)}if(r.tipo==="giro"){let n=e-(r.c[1]+r.raggio),s=i-r.c[2],a=Math.sqrt(n*n+s*s),o=Math.atan2(s,-n);o<0&&(o+=Math.PI*2);let l=r.c[0]+r.sposta*o/(Math.PI*2),A=Math.abs(a-(r.raggio+r.spesso/2))-r.spesso/2,c=Math.abs(t-l)-r.largo/2,h=c>0?c:0,u=A>0?A:0;return Math.sqrt(h*h+u*u)+Math.min(Math.max(c,A),0)}return 1/0}var ha=class{constructor(t,e=null){this.forme=t,this.acqua=e,this.t=0}vicine(t,e){let i=[];for(let n=0;n<this.forme.length;n++){let s=this.forme[n],a=t[0]-s.c[0],o=t[1]-s.c[1],l=t[2]-s.c[2],A=s.raggioB+e+1;a*a+o*o+l*l<A*A&&i.push(s)}return i}distanza(t,e=this.forme){return this.distanzaXYZ(t[0],t[1],t[2],e)}distanzaXYZ(t,e,i,n=this.forme){let s=1/0;for(let a=0;a<n.length;a++){let o=Lf(n[a],t,e,i);o<s&&(s=o)}return s}normale(t,e=this.forme){let n=t[0],s=t[1],a=t[2],o=(u,p,d)=>this.distanzaXYZ(u,p,d,e),l=o(n+.004,s,a)-o(n-.004,s,a),A=o(n,s+.004,a)-o(n,s-.004,a),c=o(n,s,a+.004)-o(n,s,a-.004),h=Math.sqrt(l*l+A*A+c*c);return h>1e-9?[l/h,A/h,c/h]:[0,1,0]}raggio(t,e,i,n=this.forme){let s=0;for(let a=0;a<64&&s<=i;a++){let o=this.distanzaXYZ(t[0]+e[0]*s,t[1]+e[1]*s,t[2]+e[2]*s,n);if(o<.003)return s;s+=Math.max(o*.9,.004)}return null}pelo(t,e){let i=this.acqua;return!i||t<i.x0||t>i.x1||e<i.z0||e>i.z1?null:i.livello(t,e,this.t)}},Fh=[.9,1.33,1.75],VA=.32,fn=.55,ca=.62,Hh={RAGGIO:VA,GRADINO:fn};function ua(r){return{p:[...r],v:[0,0,0],aTerra:!1,nuota:!1,salto:!1,corre:!1,dir:[0,1],botta:0}}function Qh(r,t,e){let i=null;for(let[n,s]of[[0,0],[.22,0],[-.22,0],[0,.22],[0,-.22]]){let a=[t[0]+n,t[1]+fn+.05,t[2]+s],o=r.raggio(a,[0,-1,0],fn+1.2,e);if(o===null)continue;let l=a[1]-o;(!i||l>i.y)&&(i={y:l,x:a[0],z:a[2]})}return i&&(i.n=r.normale([i.x,i.y-.01,i.z],e)),i}function pa(r,t,e,i){let n={},s=i.vicine([r.p[0],r.p[1]+1,r.p[2]],3);t={x:t.x||0,z:t.z||0,corri:t.corri,salta:t.salta};let a=Math.min(1,Math.hypot(t.x,t.z)),o=i.pelo(r.p[0],r.p[2]),l=r.nuota?2.4:t.corri?6.5:3.6,A=a>.12?t.x/a*l*a:0,c=a>.12?t.z/a*l*a:0,h=a>.12&&r.v[0]*A+r.v[2]*c<0,u=Math.min(1,e/(h?.035:a>.12?.06:.05));if(r.botta>0&&(r.botta-=e,(!r.aTerra||r.botta>.3)&&(u*=.06)),!r.aTerra&&!r.nuota&&!(r.botta>0)&&(u*=.45),r.pattini&&!r.nuota){let f=Math.hypot(r.v[0],r.v[2]);if(r.staccato>0&&(r.staccato-=e),a>.12&&!(r.botta>0)){let g=[t.x/a,t.z/a],m=f>.6?[r.v[0]/f,r.v[2]/f]:g,v=Math.atan2(m[0]*g[1]-m[1]*g[0],m[0]*g[0]+m[1]*g[1]);if(Math.abs(v)>2.5&&f>1.5)f=Math.max(0,f-16*e);else{let P=Math.max(-1,Math.min(1,v/((r.aTerra?3.6:1.2)*e)))*(r.aTerra?3.6:1.2)*e,y=Math.cos(P),x=Math.sin(P);m=[m[0]*y-m[1]*x,m[0]*x+m[1]*y];let w=(t.corri?12.5:9.5)*a;r.aTerra&&(f+=f<w?6.8*e:-1.2*e)}r.v[0]=m[0]*f,r.v[2]=m[1]*f}else if(r.aTerra){let g=1-Math.min(1,.32*e);r.v[0]*=g,r.v[2]*=g}}else r.v[0]+=(A-r.v[0])*u,r.v[2]+=(c-r.v[2])*u;if(r.appoggiato?.t>0){r.appoggiato.t-=e;let f=r.appoggiato.n,g=r.v[0]*f[0]+r.v[2]*f[2];g<0&&(r.v[0]-=f[0]*g,r.v[2]-=f[2]*g)}if(r.pattini&&Math.hypot(r.v[0],r.v[2])>.8){let f=Math.hypot(r.v[0],r.v[2]);r.dir=[r.v[0]/f,r.v[2]/f]}else a>.12&&(r.dir=[t.x/a,t.z/a]);r.premuto=t.salta&&!r.saltaPrima?.13:Math.max(0,(r.premuto||0)-e),r.saltaPrima=!!t.salta,r.coyote=r.aTerra?.1:Math.max(0,(r.coyote||0)-e),r.premuto>0&&(r.aTerra||r.coyote>0||r.nuota)&&!r.salto&&(r.v[1]=r.nuota?5.6:r.pattini?7.3:6.9,r.nuota&&(r.p[1]+=.05),r.aTerra=!1,r.nuota=!1,r.salto=!0,r.premuto=0,r.coyote=0,n.salto=!0),r.salto&&!t.salta&&r.v[1]>4.3&&(r.v[1]=4.3),r.p[0]+=r.v[0]*e,r.p[2]+=r.v[2]*e;for(let f=0;f<3;f++){let g=!1;for(let m of Fh){let v=[r.p[0],r.p[1]+m,r.p[2]],P=i.distanza(v,s);if(P>=VA)continue;let y=i.normale(v,s);if(y[1]>ca&&m===Fh[0])continue;let x=T.norm([y[0],0,y[2]]),w=VA-P;if(y[1]<-.5){r.p[1]-=w,r.v[1]>0&&(r.v[1]=0),g=!0;continue}r.p[0]+=x[0]*w,r.p[2]+=x[2]*w;let I=r.v[0]*x[0]+r.v[2]*x[2];I<0&&(r.v[0]-=x[0]*I,r.v[2]-=x[2]*I),g=!0}if(!g)break}let p=Qh(i,r.p,s),d=o!==null?o-(i.galla??.85):null;if(r.risale!==void 0)return r.p[1]=Math.min(r.risale,r.p[1]+7*e),r.v[1]=0,r.nuota=!1,r.aTerra=!1,p&&p.y>=r.risale-.06&&p.n[1]>ca?(r.p[1]=p.y,r.risale=void 0,r.aTerra=!0,n.risalito=!0):r.p[1]>=r.risale&&a<=.12&&(r.risale=void 0),n;if(d!==null&&r.p[1]<=d+.02&&(!p||p.y<d)){if(r.nuota||(n.tuffo=r.v[1]<-2,r.nuota=!0),r.p[1]=d,r.v[1]=0,r.aTerra=!1,r.salto=!1,i.riva&&a>.12){let f=r.p[0]+t.x/a*.6,g=r.p[2]+t.z/a*.6,m=Qh(i,[f,o+i.riva-fn,g],s);m&&m.y>d+.3&&m.y<=o+i.riva&&m.n[1]>ca&&(r.risale=m.y)}return n}r.nuota=!1;let M=p&&(p.n[1]>ca||p.y>r.p[1]+.01&&p.y<=r.p[1]+fn);if(r.v[1]<=0&&M&&p.y>=r.p[1]-(r.aTerra?fn:.02)&&p.y<=r.p[1]+fn)!r.aTerra&&r.v[1]<-4&&(n.atterrato=!0),r.p[1]=p.y>r.p[1]?Math.min(p.y,r.p[1]+(i.salita??9)*e):Math.max(p.y,r.p[1]-7*e),r.v[1]=0,r.aTerra=!0,r.salto=!1;else if(r.v[1]-=14*(r.v[1]<0?1.5:1)*e,r.p[1]+=r.v[1]*e,r.aTerra=!1,p&&r.v[1]<=0&&r.p[1]<=p.y)if(M)r.v[1]<-4&&(n.atterrato=!0),r.p[1]=p.y,r.v[1]=0,r.aTerra=!0,r.salto=!1;else{let f=p.n;r.p[1]=p.y,r.v[0]+=f[0]*3*e,r.v[2]+=f[2]*3*e,r.v[1]=0}return n}var Pi={quad:{ruote:[[.58,0,.72],[-.58,0,.72],[.58,0,-.72],[-.58,0,-.72]],sterzanti:[0,1],motrici:[0,1,2,3],lungaMolla:.42,raggioRuota:.36,molla:55,smorzo:6.5,vmax:15,spinta:16,sterzoMax:.55,presa:1.7,inerzia:[.55,.6,.4],sfere:[[0,.32,.75,.42],[0,.32,-.75,.42],[0,.6,0,.46]],sedile:[0,.62,-.12]},moto:{ruote:[[0,0,.8],[0,0,-.74]],sterzanti:[0],motrici:[1],lungaMolla:.45,raggioRuota:.4,molla:80,smorzo:8,vmax:18,spinta:19,sterzoMax:.5,presa:1.9,inerzia:[.35,.4,.25],equilibrio:!0,sfere:[[0,.4,.68,.32],[0,.4,-.6,.32],[0,.66,0,.36]],sedile:[0,.66,-.18]},acqua:{galleggia:[[.45,0,.75],[-.45,0,.75],[.45,0,-.7],[-.45,0,-.7]],vmax:15,spinta:14,inerzia:[.5,.5,.4],sfere:[[0,.2,.75,.38],[0,.2,-.65,.38],[0,.38,0,.42]],sedile:[0,.52,-.1]}};function Gh(r,t,e=0){let i=Pi[r];return{tipo:r,d:i,p:[...t],v:[0,0,0],q:zt.asse([0,1,0],e),w:[0,0,0],molle:(i.ruote||[]).map(()=>0),contatti:0,inAcqua:0,ribaltato:0,aria:0,acro:{beccheggio:0,rollio:0},saltelli:0,sterzo:0}}function Ze(r){return{su:zt.ruota(r.q,[0,1,0]),avanti:zt.ruota(r.q,[0,0,1]),destra:zt.ruota(r.q,[-1,0,0])}}var Hi=(r,t)=>Math.max(-t,Math.min(t,r));function kh(r,t,e={x:0,y:0}){let i=!!t.salta,n=t.x||0,s=t.z||0;if(!r.contatti&&!r.inAcqua)return{gas:e?.y||0,sterzo:e?.x||0,salta:i};let a=Math.min(1,Math.hypot(n,s));if(a<.15)return r.retro=r.frenata=r.volta=!1,{gas:0,sterzo:0,salta:i};let{avanti:o,destra:l}=Ze(r),A=T.norm([o[0],0,o[2]]),c=T.norm([l[0],0,l[2]]),h=[n/a,0,s/a],u=T.dot(h,A),p=T.dot(h,c),d=Math.atan2(p,u),M=T.dot(r.v,A);return u<-.3?r.retro||M<-.3?(r.retro=!0,{gas:-a,sterzo:Hi(-Math.atan2(-p,-u)*1.6,1),salta:i}):!r.volta&&(M>.3||r.frenata)?(r.frenata=!0,M<.3&&(r.retro=!0),{gas:-a,sterzo:0,salta:i}):(r.volta=!0,{gas:a*.6,sterzo:p<0?-1:1,salta:i}):(r.retro=r.frenata=r.volta=!1,{gas:a*(u>0?1:.6),sterzo:Hi(d*1.6,1),salta:i})}function Vh(r,t,e,i){let n=r.d,s={},{su:a,avanti:o,destra:l}=Ze(r),A=i.vicine(r.p,5),c=[0,-14,0],h=[0,0,0],u=(C,O)=>{c=T.add(c,C),h=T.add(h,T.cross(T.sub(O,r.p),C))},p=C=>T.add(r.v,T.cross(r.w,T.sub(C,r.p))),d=T.dot(r.v,o),M=t.gas<-.1&&d>1,f=!!t.derapa&&Math.abs(d)>(r.deriva?3:5);if(f&&!r.deriva&&(r.contatti||r.inAcqua)&&(r.deriva={verso:Math.sign(r.sterzo||t.sterzo||1),carica:0,v0:Math.hypot(r.v[0],r.v[2])}),r.deriva&&!f){let C=r.deriva.carica,O=C>1.6?3:C>1?2:C>.5?1:0;if(O){let S=T.norm([o[0],0,o[2]]);r.v=T.madd(r.v,S,[0,4,6.5,9][O]),r.turbo=.6+O*.25,s.turbo=O}r.deriva=null}r.turbo>0&&(r.turbo-=e);let g=0,m=[0,0,0],v=null;for(let C of A){if(C.tipo!=="giro"||!r.contatti)continue;let O=r.p[1]-(C.c[1]+C.raggio),S=r.p[2]-C.c[2],U=Math.hypot(O,S);if(U>C.raggio+.5||U<C.raggio-2)continue;let N=Math.atan2(S,-O);if(N<0&&(N+=Math.PI*2),N<.15||N>Math.PI*2-.15)continue;let X=C.c[0]+C.sposta*N/(Math.PI*2);if(Math.abs(r.p[0]-X)>C.largo/2+.6)continue;let ot=T.norm([C.sposta/(Math.PI*2),C.raggio*Math.sin(N),C.raggio*Math.cos(N)]);T.dot(ot,o)<0&&(ot=T.scala(ot,-1));let j=T.dot(r.v,ot);v={corsia:X,vx:ot[0]*j,t:ot}}if(v&&(h=T.add(h,T.sub(T.scala(T.cross(o,v.t),14),T.scala(a,T.dot(r.w,a)*4)))),r.sterzo+=((v?0:Hi(t.sterzo,1))-r.sterzo)*Math.min(1,e*10),n.ruote){let C=n.lungaMolla+n.raggioRuota,O=new Set(n.motrici);n.ruote.forEach((S,U)=>{let N=T.add(r.p,zt.ruota(r.q,S)),X=i.raggio(N,T.scala(a,-1),C,A);if(X===null){r.molle[U]=0;return}g++;let ot=C-X,j=T.madd(N,a,-X),G=p(j);r.molle[U]=ot;let K=i.normale(T.madd(j,a,.02),A);m=T.add(m,K);let H=Math.max(0,n.molla*ot+Math.max(0,ot-C*.6)*520-n.smorzo*T.dot(G,a));u(T.scala(K,H*Math.max(0,T.dot(K,a))),j);let q=n.sterzanti.includes(U)?r.sterzo*n.sterzoMax/(1+Math.abs(d)*.04)*(r.deriva?.25:1):0,lt=T.norm(T.add(T.scala(o,Math.cos(q)),T.scala(l,Math.sin(q)))),_=T.norm(T.sub(lt,T.scala(K,T.dot(lt,K)))),E=T.cross(K,_),Q=v?T.sub(G,[v.vx,0,0]):G,$=T.dot(Q,E),R=T.dot(G,_),J=n.presa*H,z=-R*(Math.abs(t.gas)<.1?.7:.02)/n.ruote.length;if(M)z+=-Math.sign(R)*Math.min(Math.abs(R)*8,14)/n.ruote.length;else if(O.has(U)){let et=t.gas;et>0?z+=et*n.spinta*Math.max(0,1-d/n.vmax)/O.size:et<0&&(z+=et*n.spinta*.5*Math.max(0,1+d/(n.vmax*.4))/O.size)}let F=!n.sterzanti.includes(U),k=r.deriva&&F?J*.32:J;r.turbo>0&&O.has(U)&&(z+=9/O.size);let it=T.add(T.scala(E,Hi(-$*7,k)),T.scala(_,Hi(z,Math.min(J,H*.9))));u(it,T.madd(j,a,T.dot(T.sub(r.p,j),a)))})}if(r.deriva&&g){let C=T.dot(r.w,a),O=-r.deriva.verso*(.85+Math.abs(r.sterzo)*.55);r.w=T.madd(r.w,a,O-C),r.derivaW=O;let S=T.norm([o[0],0,o[2]]),U=Math.hypot(r.v[0],r.v[2]);if(U>1){let N=Math.min(1,e*2.4),X=r.v[0]/U+(S[0]-r.v[0]/U)*N,ot=r.v[2]/U+(S[2]-r.v[2]/U)*N,j=Math.hypot(X,ot)||1,G=Math.max(U,r.deriva.v0*.9);r.v[0]=X/j*G,r.v[2]=ot/j*G}r.deriva.carica+=e*(.6+Math.abs(r.sterzo)*.6),s.deriva=r.deriva.carica}let P=0;if(n.galleggia){for(let N of n.galleggia){let X=T.add(r.p,zt.ruota(r.q,N)),ot=i.pelo(X[0],X[2]);if(ot===null)continue;let j=ot-X[1];if(j<=0)continue;P++;let G=Math.min(j,.7)*24-p(X)[1]*2.4;G>0&&u([0,G,0],X)}let C=T.norm([o[0],0,o[2]]),O=[C[2],0,-C[0]],S=T.dot(r.v,C),U=T.dot(r.v,O);if(P){c=T.add(c,T.add(T.scala(O,-U*3.5),T.scala(C,-S*.3)));let N=t.gas;M?c=T.madd(c,C,-Math.sign(S)*Math.min(Math.abs(S)*4,10)):N>0?c=T.madd(c,C,N*n.spinta*Math.max(0,1-S/n.vmax)):N<0&&(c=T.madd(c,C,N*n.spinta*.45)),h=T.add(h,[0,-r.sterzo*(2.6+Math.abs(S)*.22),0]),h=T.add(h,T.sub(T.scala(T.cross(a,[0,1,0]),16),T.scala(r.w,2)))}}let y=!1;for(let[C,O,S,U]of n.sfere){let N=T.add(r.p,zt.ruota(r.q,[C,O,S])),X=i.distanza(N,A);if(X>=U)continue;let ot=i.normale(N,A),j=U-X;r.p=T.madd(r.p,ot,j);let G=p(N),K=T.dot(G,ot);if(K<0){r.v=T.madd(r.v,ot,-K*1.12);let H=T.sub(G,T.scala(ot,K));r.v=T.madd(r.v,H,-Math.min(1,2.5*e)),r.w=T.add(T.scala(r.w,.92),T.scala(T.cross(T.sub(N,r.p),ot),-K*.25))}ot[1]>.5&&(y=!0),T.dot(a,ot)<-.3&&(r.ribaltato+=e)}if(n.galleggia&&!P&&y){let C=T.norm([o[0],0,o[2]]);r.v=[r.v[0]*(1-Math.min(1,e*4)),r.v[1],r.v[2]*(1-Math.min(1,e*4))],r.saltelli+=e,Math.abs(t.gas)>.2&&r.saltelli>.32&&(r.saltelli=0,r.v=T.add(r.v,T.add([0,2.8,0],T.scala(C,1.6*Math.sign(t.gas))))),h=T.add(h,[0,-r.sterzo*2,0]),h=T.add(h,T.scala(T.cross(a,[0,1,0]),10))}let x=g>0||P>0;if(n.equilibrio){let C=g?T.norm(m):[0,1,0],O=-r.sterzo*Math.min(1,Math.abs(d)/9)*.38,S=T.norm(T.add(C,T.scala(l,O))),U=T.scala(o,T.dot(T.cross(a,S),o)*(g?30:7));h=T.add(h,T.sub(U,T.scala(o,T.dot(r.w,o)*(g?6:1)))),g&&!r.deriva&&(h=T.add(h,T.scala(a,-r.sterzo*Math.min(1,Math.abs(d)/4)*2.2*Math.sign(d||1))))}!x&&!y?(r.aria===0?r.acroPronto=Math.abs(t.gas)<.2&&Math.abs(t.sterzo)<.2:!r.acroPronto&&Math.abs(t.gas)<.2&&Math.abs(t.sterzo)<.2&&(r.acroPronto=!0),r.acroPronto&&r.aria>.2&&(Math.abs(t.gas)>.2||Math.abs(t.sterzo)>.2)||r.aria>.12&&Math.abs(t.sterzo)>.2?(h=T.add(h,T.scala(l,-Hi(t.gas,1)*1.6)),h=T.add(h,[0,-Hi(t.sterzo,1)*4.2,0]),c=T.add(c,T.scala(T.norm([l[0],0,l[2]]),Hi(t.sterzo,1)*3)),h=T.add(h,T.sub(T.scala(T.cross(a,[0,1,0]),1.4),T.scala(r.w,.6)))):h=T.add(h,T.sub(T.scala(T.cross(a,[0,1,0]),2.2),T.scala(r.w,.6))),r.aria+=e,r.acro.beccheggio+=T.dot(r.w,l)*e,r.acro.rollio+=T.dot(r.w,o)*e):(r.aria>.25&&(s.atterrato={aria:r.aria,...r.acro,dritto:a[1]>.4}),r.aria=0,r.acro={beccheggio:0,rollio:0}),t.salta&&(g||P||y)&&r.saltoPronto!==!1&&(r.v=T.madd(r.v,T.norm(T.add(a,[0,1,0])),6.2),s.salto=!0,r.saltoPronto=!1),t.salta||(r.saltoPronto=!0),r.v=T.madd(r.v,c,e);let w=zt.ruota(zt.coniugato(r.q),h),I=[w[0]/n.inerzia[0],w[1]/n.inerzia[1],w[2]/n.inerzia[2]];if(r.w=T.madd(r.w,zt.ruota(r.q,I),e),r.w=T.scala(r.w,1-(x?1.6:.35)*e),r.deriva&&g){let C=T.dot(r.w,a);r.w=T.madd(r.w,a,r.derivaW-C)}return v&&(r.v[0]=v.vx+(v.corsia-r.p[0])*5),r.p=T.madd(r.p,r.v,e),r.q=zt.integra(r.q,r.w,e),r.contatti=g,r.inAcqua=P,a[1]<.25&&T.len(r.v)<1.2&&(g===0||y)?r.ribaltato+=e:a[1]>.5&&(r.ribaltato=0),r.ribaltato>1.1&&(s.capottato=!0,XA(r)),s}function XA(r){let t=zt.ruota(r.q,[0,0,1]);r.q=zt.asse([0,1,0],Math.atan2(t[0],t[2])),r.p[1]+=1.2,r.v=[0,0,0],r.w=[0,0,0],r.ribaltato=0}var rr=.09,zf=.25;function Uf(r,t,e,i,n){let s=n*n,a=s*n;return[0,1,2].map(o=>.5*(2*t[o]+(-r[o]+e[o])*n+(2*r[o]-5*t[o]+4*e[o]-i[o])*s+(-r[o]+3*t[o]-3*e[o]+i[o])*a))}var xi=class{constructor(t,{chiusa:e=!1,nome:i="rotaia"}={}){this.chiusa=e,this.nome=i;let n=t,s=n.length,a=[],o=u=>e?n[(u+s)%s]:n[Math.max(0,Math.min(s-1,u))],l=e?s:s-1;for(let u=0;u<l;u++)for(let p=0;p<24;p++)a.push(Uf(o(u-1),o(u),o(u+1),o(u+2),p/24));a.push(e?[...n[0]]:[...n[s-1]]);let A=[0];for(let u=1;u<a.length;u++)A.push(A[u-1]+Math.hypot(a[u][0]-a[u-1][0],a[u][1]-a[u-1][1],a[u][2]-a[u-1][2]));this.lungo=A[A.length-1];let c=Math.max(2,Math.round(this.lungo/zf)+1);this.passo=this.lungo/(c-1),this.p=new Float64Array(c*3);let h=0;for(let u=0;u<c;u++){let p=u*this.passo;for(;h<A.length-2&&A[h+1]<p;)h++;let d=(p-A[h])/Math.max(1e-9,A[h+1]-A[h]);for(let M=0;M<3;M++)this.p[u*3+M]=a[h][M]+(a[h+1][M]-a[h][M])*d}this.n=c,this.min=[1/0,1/0,1/0],this.max=[-1/0,-1/0,-1/0];for(let u=0;u<c;u++)for(let p=0;p<3;p++)this.min[p]=Math.min(this.min[p],this.p[u*3+p]),this.max[p]=Math.max(this.max[p],this.p[u*3+p])}punto(t){let{n:e,passo:i,p:n}=this;this.chiusa&&(t=(t%this.lungo+this.lungo)%this.lungo);let s=Math.max(0,Math.min(e-1.0001,t/i)),a=Math.floor(s),o=s-a,l=a*3,A=(a+1)*3,c=[n[l]+(n[A]-n[l])*o,n[l+1]+(n[A+1]-n[l+1])*o,n[l+2]+(n[A+2]-n[l+2])*o],h=[n[A]-n[l],n[A+1]-n[l+1],n[A+2]-n[l+2]],u=Math.hypot(h[0],h[1],h[2])||1;return{p:c,t:[h[0]/u,h[1]/u,h[2]/u]}}vicino(t){if(t[0]<this.min[0]-1||t[0]>this.max[0]+1||t[2]<this.min[2]-1||t[2]>this.max[2]+1||t[1]<this.min[1]-2||t[1]>this.max[1]+2)return null;let e=-1,i=1/0;for(let o=0;o<this.n;o++){let l=this.p[o*3]-t[0],A=this.p[o*3+2]-t[2],c=(this.p[o*3+1]-t[1])*.5,h=l*l+A*A+c*c;h<i&&(i=h,e=o)}let n=e*this.passo,{p:s,t:a}=this.punto(n);return{s:n,d:Math.hypot(s[0]-t[0],s[2]-t[2]),dy:t[1]-(s[1]+rr),p:s,t:a}}};function Xh(r,t){if(!r.pattini||r.rotaia||r.nuota||(r.staccato||0)>0)return!1;let e=Math.hypot(r.v[0],r.v[2]);if(e<1.2&&!(!r.aTerra&&r.v[1]<0))return!1;for(let i=0;i<t.length;i++){let n=t[i].vicino(r.p);if(!n||n.d>.55||n.dy>.6||n.dy<-.35||n.dy<0&&r.v[1]>1)continue;let s=r.v[0]*n.t[0]+r.v[1]*n.t[1]+r.v[2]*n.t[2],a=s>=0?1:-1;return r.rotaia={r:i,s:n.s,verso:a,v:Math.max(Math.abs(s),e*.75,2.5),t:0},r.aTerra=!1,r.salto=!1,!0}return!1}function Wh(r,t,e,i){let n=r.rotaia,s=i[n.r],a={};n.t+=e;let{t:o}=s.punto(n.s);n.v+=-14*o[1]*n.verso*e-.18*e,n.v<0&&(n.verso=-n.verso,n.v=-n.v),n.s+=n.v*n.verso*e;let l=!s.chiusa&&(n.s<0||n.s>s.lungo),A=s.punto(Math.max(0,Math.min(s.lungo,n.s)));o=A.t,r.p=[A.p[0],A.p[1]+rr,A.p[2]],r.v=[o[0]*n.verso*n.v,o[1]*n.verso*n.v,o[2]*n.verso*n.v],r.dir=[o[0]*n.verso,o[2]*n.verso].map((h,u,p)=>h/(Math.hypot(p[0],p[1])||1));let c=t.salta&&!r.saltaPrima;return r.saltaPrima=!!t.salta,(c||l)&&(r.v[1]=Math.max(r.v[1],0)+(c?6.4:2.2),r.rotaia=null,r.aTerra=!1,r.salto=c,r.staccato=.25,a[c?"salto":"fine"]=!0),a}var Nf={quad:.34,moto:.78,acqua:.44},Of={quad:.7,moto:.22,acqua:.7};function Yh(r,t){if(r.rotaia||(r.staccato||0)>0)return!1;let e=Math.hypot(r.v[0],r.v[2]);if(e<3)return!1;let i=Nf[r.tipo]??.4,n=[r.p[0],r.p[1]-i,r.p[2]];for(let s=0;s<t.length;s++){let a=t[s].vicino(n);if(!a||a.d>.7||a.dy>.7||a.dy<(r.inAcqua?-1:-.45)||a.dy<0&&r.v[1]>2)continue;let o=r.v[0]*a.t[0]+r.v[1]*a.t[1]+r.v[2]*a.t[2];if(Math.abs(o)<e*.45)continue;let l=[r.p[0]-a.p[0],r.p[1]-(a.p[1]+rr+i),r.p[2]-a.p[2]];return r.rotaia={r:s,s:a.s,verso:o>=0?1:-1,v:Math.max(Math.abs(o),e*.85,4),h:i,piega:0,giro:0,t:0,scarto:l},r.deriva=null,!0}return!1}function qh(r,t,e,i){let n=r.rotaia,s=i[n.r],a={};n.t+=e;let{t:o}=s.punto(n.s);n.v+=(-14*o[1]*n.verso-.12+((t.gas||0)>.2?2.4:0))*e,n.v<0&&(n.verso=-n.verso,n.v=-n.v),n.v=Math.min(n.v,26),n.s+=n.v*n.verso*e;let l=!s.chiusa&&(n.s<0||n.s>s.lungo),A=s.punto(Math.max(0,Math.min(s.lungo,n.s)));o=A.t;let c=[o[0]*n.verso,o[1]*n.verso,o[2]*n.verso],h=s.punto(Math.max(0,Math.min(s.lungo,n.s+n.verso*.8))).t,u=(c[0]*h[2]-c[2]*h[0])*n.verso,p=Math.min(1,e*6);n.piega+=(Math.max(-.6,Math.min(.6,u*(r.tipo==="moto"?2.4:1.4)))-n.piega)*p,n.giro+=(-(t.sterzo||0)*(Of[r.tipo]??.5)-n.giro)*p;let d=Math.exp(-e*28),M=n.scarto;M[0]*=d,M[1]*=d,M[2]*=d,r.p=[A.p[0]+M[0],A.p[1]+rr+n.h+M[1],A.p[2]+M[2]],r.v=[c[0]*n.v,c[1]*n.v,c[2]*n.v],r.w=[0,0,0];let f=Math.cos(n.giro),g=Math.sin(n.giro),m=[c[0]*f+c[2]*g,c[1],-c[0]*g+c[2]*f],v=[m[2],0,-m[0]],P=Math.hypot(v[0],v[2])||1;v[0]/=P,v[2]/=P;let y=[m[1]*v[2]-m[2]*v[1],m[2]*v[0]-m[0]*v[2],m[0]*v[1]-m[1]*v[0]],x=Math.cos(n.piega),w=Math.sin(n.piega),I=[v[0]*x+y[0]*w,v[1]*x+y[1]*w,v[2]*x+y[2]*w],L=[y[0]*x-v[0]*w,y[1]*x-v[1]*w,y[2]*x-v[2]*w];if(r.q=Ff(I,L,m),r.d&&r.d.ruote){let O=r.tipo==="moto"?Math.max(0,r.d.lungaMolla+r.d.raggioRuota-n.h):0;r.molle=r.d.ruote.map(()=>O)}r.contatti=0,r.inAcqua=0,r.sterzo=t.sterzo||0;let C=t.salta&&!r.saltaPrimaR;if(r.saltaPrimaR=!!t.salta,n.lento=n.v<1.5?(n.lento||0)+e:0,n.lento>1&&!C&&!l)return r.v[0]+=v[0]*1.5,r.v[2]+=v[2]*1.5,r.rotaia=null,r.staccato=.6,r.aria=.15,a.fine=!0,a;if(C||l){if(r.v[1]=Math.max(r.v[1],0)+(C?6.2:2.4),C&&Math.abs(t.sterzo||0)>.2){let O=-t.sterzo*3.4;r.v[0]+=v[0]*O,r.v[2]+=v[2]*O}r.rotaia=null,r.staccato=.3,r.aria=.15,r.saltoPronto=!1,a[C?"salto":"fine"]=!0}return a}function Ff(r,t,e){let i=r[0],n=t[0],s=e[0],a=r[1],o=t[1],l=e[1],A=r[2],c=t[2],h=e[2],u=i+o+h,p,d,M,f;if(u>0){let m=.5/Math.sqrt(u+1);f=.25/m,p=(c-l)*m,d=(s-A)*m,M=(a-n)*m}else if(i>o&&i>h){let m=2*Math.sqrt(1+i-o-h);f=(c-l)/m,p=.25*m,d=(n+a)/m,M=(s+A)/m}else if(o>h){let m=2*Math.sqrt(1+o-i-h);f=(s-A)/m,p=(n+a)/m,d=.25*m,M=(l+c)/m}else{let m=2*Math.sqrt(1+h-i-o);f=(a-n)/m,p=(s+A)/m,d=(l+c)/m,M=.25*m}let g=Math.hypot(p,d,M,f)||1;return[p/g,d/g,M/g,f/g]}var yi=Math.PI/180,xt={rosso:"#ea323c",ruggine:"#c64524",arancio:"#ed7614",giallo:"#ffa214",sabbia:"#edab50",verde:"#5ac54f",bosco:"#1e6f50",mare:"#0098dc",notte:"#424c6e",pietra:"#92a1b9",rosa:"#f68187",crema:"#f9e6cf",terra:"#8a4836",scuro:"#2a2f4e"};function Kh(r){let t={position:3,normal:3,color:3,strato:1},e=r.filter(n=>n.g).map(({g:n,m:s})=>{let a=n.clone();return s&&a.applyMatrix4(s),a}),i=new Ot;for(let[n,s]of Object.entries(t)){let a=e.reduce((A,c)=>A+c.attributes.position.count,0),o=new Float32Array(a*s),l=0;for(let A of e){let c=A.attributes[n];c&&o.set(c.array,l),l+=A.attributes.position.count*s}i.setAttribute(n,new Qt(o,s))}for(let n of e)n.dispose();return i.computeBoundingSphere(),i}var jh=(r,t=[0,0,0])=>new yt().compose(new b(...r),new $t().setFromEuler(new ni(t[0]*yi,t[1]*yi,t[2]*yi)),new b(1,1,1)),oi=(r,t,e={})=>si([["b",[r[0]*2,r[1]*2,r[2]*2],[0,-r[1],0],t,e]]).pieni,da=class{constructor(t,e){this.arena=t,this.gruppo=new te,e.add(this.gruppo);let i=[],n=(d,M,f)=>i.push({g:d,m:jh(M,f)});for(let d of t.mondo.forme){if(d.tipo==="b"&&d.nome==="prato"){let[M,f,g]=d.c,[m,v,P]=d.h,y=f+v;n(oi([m,v-.2,P],xt.terra),[M,f-.2,g]);let x=10,w=Math.round(m*2/x),I=Math.round(P*2/x);for(let L=0;L<w;L++)for(let C=0;C<I;C++){let O=M-m+L*x,S=g-P+C*x,U=Math.floor(O/x)+Math.floor(S/x)&1;n(oi([x/2,.2,x/2],U?xt.verde:oa(xt.verde,xt.bosco,.14),{netta:!0}),[O+x/2,y-.2,S+x/2])}continue}if(d.tipo==="b"){n(oi(d.h,d.colore||xt.pietra),d.c,d.r);continue}if(d.tipo==="c"){let M=si([["c",[d.raggio,d.lungo,12],[0,0,0],d.colore||xt.verde,{r:[0,0,90]}]]).pieni;i.push({g:M,m:new yt().makeTranslation(d.c[0]+d.lungo/2,d.c[1],d.c[2])});continue}if(d.tipo==="giro"){this.giro(d,n);continue}}let s=new b(0,1,0),a=new $t,o=new ni;for(let d of t.rotaie||[]){let M=d.n,f=m=>new b(d.p[m%M*3],d.p[m%M*3+1],d.p[m%M*3+2]),g=d.chiusa?M:M-1;for(let m=0;m<g;m+=2){let v=f(m),P=f(Math.min(m+2,d.chiusa?m+2:M-1)),y=P.clone().sub(v),x=y.length();x<.01||(a.setFromUnitVectors(s,y.normalize()),o.setFromQuaternion(a,"XYZ"),i.push({g:si([["c",[rr,x+.04,6],[v.x,v.y,v.z],xt.giallo,{r:[o.x/yi,o.y/yi,o.z/yi],uno:!0}]]).pieni,m:null}))}for(let m=0;m<M;m+=12){let v=f(m),P=t.mondo.raggio([v.x,v.y-.15,v.z],[0,-1,0],20),y=P===null?0:v.y-.15-P;v.y-y>.35&&n(oi([.085,(v.y-y)/2,.085],xt.notte,{netta:!0}),[v.x,y+(v.y-y)/2,v.z])}}for(let d of t.pattini||[])for(let M of[-1,1])n(oi([.14,.09,.26],M<0?xt.rosa:xt.mare),[d.x+M*.24,1.09,d.z]),n(oi([.1,.05,.22],xt.scuro),[d.x+M*.24,.96,d.z]);for(let d of t.spinte){let M=(d.x0+d.x1)/2,f=(d.z0+d.z1)/2,g=(d.x1-d.x0)/2,m=(d.z1-d.z0)/2;n(oi([g,.03,m],xt.giallo,{netta:!0}),[M,.03,f]);for(let v=-1;v<=1;v++)for(let P of[-1,1])n(oi([.12,.03,Math.min(g,1.4)*.55],xt.ruggine,{netta:!0}),[M+P*Math.min(g,1.4)*.36,.07,f+v*m*.6-.25],[0,P*45,0])}let l=[],A=11,c=()=>(A=A*16807%2147483647,A/2147483647),h=(d,M)=>!(d>-56&&d<-19&&M>-56&&M<-19)&&!(d>-52&&d<2&&M>40&&M<78)&&!(Math.abs(d-25)<8&&M>6&&M<46)&&!(M>-60&&M<-36&&d>12&&d<52)&&!(Math.abs(d+32)<6&&M>4&&M<42)&&!(d>-9&&d<12&&M>18&&M<38)&&Math.hypot(d,M-4)>9;for(let d=0;d<70;d++){let M=c()<.7,f=c(),g,m;if(M){let P=Math.floor(c()*4),y=c()*2-1;g=P<2?y*57:P===2?-57:57,m=P<2?P===0?-57:77:10+y*66}else g=c()*110-55,m=c()*130-55;if(!h(g,m))continue;let v=c();l.push([(v<.55,"kit"),v<.55?"albero":v<.75?"sasso":v<.9?"ciuffo":"funghi",[g,0,m],null,{r:[0,f*360,0]}])}let u=si(l).pieni;u&&i.push({g:u,m:null}),this.fisso=new kt(Kh(i),Mi()),this.fisso.castShadow=!0,this.fisso.receiveShadow=!0,this.gruppo.add(this.fisso);let p=t.mondo.acqua;if(p){let d=p.x1-p.x0,M=p.z1-p.z0,f=Math.round(d),m=new jn(d,M,f,Math.round(M)).rotateX(-Math.PI/2).translate((p.x0+p.x1)/2,0,(p.z0+p.z1)/2).toNonIndexed();m.setAttribute("color",new Qt(new Float32Array(m.attributes.position.count*3),3)),m.setAttribute("normal",new Qt(new Float32Array(m.attributes.position.count*3).fill(0).map((v,P)=>P%3===1?1:0),3)),this.acqua=new kt(m,dh(.8)),this.acqua.frustumCulled=!1,this.toni=[new dt(xt.notte),new dt(xt.mare),new dt(oa(xt.mare,xt.crema,.55))],this.acqua.renderOrder=2,this.gruppo.add(this.acqua),this.livello=p.livello}}giro(t,e){let s=t.raggio,a=t.c[1]+s,o=t.c[2],l=Math.atan2(t.sposta,Math.PI*2*s),A=(Math.PI*2-2*.06)/60,c=(s+t.spesso/2)*A*1.06;for(let h=0;h<60;h++){let u=.06+(h+.5)*A,p=t.c[0]+t.sposta*u/(Math.PI*2),d=s+t.spesso/2,M=a-Math.cos(u)*d,f=o+Math.sin(u)*d,g=[-u/yi,l/yi,0];e(oi([t.largo/2,t.spesso/2,c/2],t.colore||xt.sabbia,{netta:!0}),[p,M,f],g);let m=jh([p,M,f],g),v=h%2?xt.rosso:xt.crema;for(let P of[-1,1]){let y=new b(P*(t.largo/2+.12),t.spesso/2+.06,0).applyMatrix4(m);e(oi([.17,.1,c/2],v,{netta:!0}),[y.x,y.y,y.z],g)}}}passo(t){if(!this.acqua)return;let e=this.acqua.geometry.attributes.position,i=this.acqua.geometry.attributes.color,[n,s,a]=this.toni,o=new dt;for(let l=0;l<e.count;l++)e.setY(l,this.livello(e.getX(l),e.getZ(l),t));for(let l=0;l<e.count;l+=3){let A=(e.getY(l)+e.getY(l+1)+e.getY(l+2))/3+.62,c=Math.max(-1,Math.min(1,A/.42));c>=0?o.copy(s).lerp(a,c*c):o.copy(s).lerp(n,-c*.6);for(let h=0;h<3;h++)i.setXYZ(l+h,o.r,o.g,o.b)}e.needsUpdate=!0,i.needsUpdate=!0}},Qf={quad:()=>[["b",[.86,.3,1.3],[0,-.32,0],xt.scuro],["b",[.6,.3,.5],[0,-.06,.26],xt.rosso],["b",[.56,.2,.74],[0,-.04,-.2],xt.scuro],["b",[1.3,.18,.62],[0,-.06,.66],xt.rosso],["b",[1.3,.18,.62],[0,-.06,-.66],xt.rosso],["b",[.9,.17,.3],[0,.12,.88],xt.ruggine],["b",[.22,.17,.12],[.28,-.02,.98],xt.crema],["b",[.22,.17,.12],[-.28,-.02,.98],xt.crema],["b",[.9,.17,.3],[0,.12,-.88],xt.ruggine]],moto:()=>[["b",[.34,.34,.6],[0,-.36,-.02],xt.scuro],["b",[.46,.3,.62],[0,-.06,.22],xt.verde],["b",[.34,.16,.86],[0,.04,-.34],xt.scuro],["b",[.36,.17,.56],[0,0,-.86],xt.verde,{r:[-14,0,0]}],["b",[.44,.4,.17],[0,0,.62],xt.giallo,{r:[-16,0,0]}],["c",[.09,.62,8],[.14,-.28,-.3],xt.pietra,{r:[70,0,0]}]],acqua:()=>[["b",[1,.36,1.9],[0,-.42,-.1],xt.mare],["b",[.86,.3,.7],[0,-.38,.92],xt.mare,{r:[16,0,0]}],["b",[1.04,.17,1.92],[0,-.3,-.1],xt.giallo],["b",[.44,.22,.86],[0,-.06,-.3],xt.scuro],["b",[.7,.3,.5],[0,-.1,.42],xt.crema],["b",[.86,.17,.36],[0,-.14,-.86],xt.notte]]};function Fr(r,t=!1){let e=si(r),i=new te;if(e.pieni){let n=new kt(e.pieni,Mi());n.castShadow=t,i.add(n)}return i}function Hf(r,t){let e=[["c",[r,t,12],[t/2,0,0],xt.scuro,{r:[0,0,90]}],["c",[r*.5,t+.04,8],[(t+.04)/2,0,0],xt.pietra,{r:[0,0,90]}]];for(let i=0;i<8;i++){let n=i/8*Math.PI*2;e.push(["b",[t*.96,.1,.17],[0,Math.sin(n)*(r-.05),Math.cos(n)*(r-.05)],xt.notte,{r:[90-n/yi,0,0],netta:!0}])}return Fr(e,!1)}var fa=class{constructor(t){this.tipo=t,this.d=Pi[t],this.gruppo=new te,this.corpo=new te,this.carro=Fr(Qf[t](),!1),this.corpo.add(this.carro),this.gruppo.add(this.corpo),this.manubrio=new te;let e=t==="moto"?.5:t==="quad"?.46:.3;if(this.manubrio.position.set(0,t==="acqua"?.05:.16,e),this.manubrio.add(Fr([["c",[.08,.36,6],[0,-.08,0],xt.notte],["b",[t==="moto"?.8:.86,.12,.14],[0,.26,-.04],xt.scuro],["b",[.17,.14,.17],[.42,.25,-.04],xt.notte],["b",[.17,.14,.17],[-.42,.25,-.04],xt.notte]])),this.manubrio.rotation.x=-.35,this.carro.add(this.manubrio),this.ruote=[],this.d.ruote){let i=t==="moto"?.24:.32;this.d.ruote.forEach((n,s)=>{let a=new te;a.position.set(...n);let o=new te,l=Hf(this.d.raggioRuota,i);o.add(l),a.add(o);let A=Fr([["c",[.085,1,6],[0,0,0],xt.rosso]],!1);A.position.set(n[0]*.75,-.08,n[2]*(t==="moto"?.95:.85)),this.corpo.add(a,A),this.ruote.push({perno:a,sterza:o,gira:l,molla:A,r:n,angolo:0,sterzante:this.d.sterzanti.includes(s)})})}this.ombra=kA(t==="moto"?.7:1.05),this.ombra.scale.set(t==="moto"?.6:.9,t==="acqua"?1.6:1.3,1),this.ombraG=new te,this.ombraG.add(this.ombra)}aggiorna(t,e,i=null){let n=this.gruppo;n.position.set(...t.p),n.quaternion.set(...t.q);let s=this.vAvPrima??0,a=this.yawPrima??0,o=new b(0,0,1).applyQuaternion(n.quaternion),l=Math.atan2(o.x,o.z),A=l-a;for(;A>Math.PI;)A-=Math.PI*2;for(;A<-Math.PI;)A+=Math.PI*2;let c=t.v[0]*o.x+t.v[2]*o.z,h=e>0?A/e*c:0,u=e>0?(c-s)/e:0;this.vAvPrima=c,this.yawPrima=l;let p=1-Math.exp(-e*8),d=this.tipo==="moto"?0:1;this.rollio=(this.rollio||0)+(Math.max(-.16,Math.min(.16,h*.012))*d-(this.rollio||0))*p,this.beccheggio=(this.beccheggio||0)+(Math.max(-.1,Math.min(.1,-u*.008))-(this.beccheggio||0))*p,this.carro.rotation.set(this.beccheggio,0,this.rollio);let M=t.molle||t.mo||[],f=t.sterzo??t.s??0,g=new b(0,0,1).applyQuaternion(n.quaternion),m=t.v[0]*g.x+t.v[1]*g.y+t.v[2]*g.z;this.manubrio.rotation.y=-f*this.d.sterzoMax*(this.d.ruote?1:.7);for(let v=0;v<this.ruote.length;v++){let P=this.ruote[v],y=M[v]||0,x=P.r[1]-this.d.lungaMolla+y;P.perno.position.y=x,P.angolo+=m*e/this.d.raggioRuota,P.gira.rotation.x=P.angolo,P.sterzante&&(P.sterza.rotation.y=-f*this.d.sterzoMax);let w=Math.max(.12,-.08-x);P.molla.scale.y=w,P.molla.position.y=x}if(i!==null){this.ombraG.visible=t.p[1]-i<6,this.ombraG.position.set(t.p[0],i+.02,t.p[2]),this.ombraG.rotation.y=Math.atan2(g.x,g.z);let v=Math.max(.3,1-(t.p[1]-i)/6);this.ombra.material.opacity=.72*v}}},Zh={quad:[0,0,-.22],moto:[0,.05,-.32],acqua:[0,0,-.3]},Gf=["#ea323c","#ffa214","#5ac54f","#0098dc","#f68187","#edab50"].map(r=>new dt(r));function Jh(r){let t=new pn(1,r).toNonIndexed(),e=t.attributes.position,i=new Float32Array(e.count*3);for(let n=0;n<e.count;n+=3){let s=(e.getX(n)+e.getX(n+1)+e.getX(n+2))/3,a=(e.getZ(n)+e.getZ(n+1)+e.getZ(n+2))/3,o=(e.getY(n)+e.getY(n+1)+e.getY(n+2))/3,l=Math.floor((Math.atan2(a,s)+Math.PI)/(Math.PI/3))%2,A=Math.abs(o)>.82?.55:l?1:.68;for(let c=0;c<3;c++)i.set([A,A,A],(n+c)*3)}return t.setAttribute("color",new Qt(i,3)),t.setAttribute("strato",new Qt(new Float32Array(e.count),1)),t}var ga=class{constructor(t,e=4e3){let i=n=>{let s=new ln(n,Mi(),e);return s.instanceMatrix.setUsage(Ke),s.instanceColor=new An(new Float32Array(e*3),3),s.instanceColor.setUsage(Ke),s.count=0,s.frustumCulled=!1,t.add(s),s};this.vicine=i(Jh(1)),this.lontane=i(Jh(0)),this.ombre=new ln(new Ui(1,10).rotateX(-Math.PI/2),new Oe({color:"#134430",transparent:!0,opacity:.5,depthWrite:!1}),e),this.ombre.instanceMatrix.setUsage(Ke),this.ombre.count=0,this.ombre.frustumCulled=!1,this.ombre.renderOrder=1,t.add(this.ombre),this.m=new yt,this.q=new $t,this.v=new b,this.s=new b,this.fr=new zi,this.vp=new yt,this.visibili=0}aggiorna(t,e){let{m:i,q:n,v:s,s:a,fr:o}=this;e.updateMatrixWorld(),this.vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),o.setFromProjectionMatrix(this.vp);let l=o.planes,A=e.position.x,c=e.position.y,h=e.position.z,u=0,p=0,d=0,M=this.vicine.instanceColor.array,f=this.lontane.instanceColor.array;for(let g=0;g<t.n;g++){let m=t.x[g],v=t.y[g],P=t.z[g],y=t.r[g],x=!1;for(let U=0;U<6;U++){let N=l[U];if(N.normal.x*m+N.normal.y*v+N.normal.z*P+N.constant<-y){x=!0;break}}if(x)continue;let w=m-A,I=v-c,L=P-h,C=w*w+I*I+L*L;i.compose(s.set(m,v,P),n.set(t.qx[g],t.qy[g],t.qz[g],t.qw[g]),a.setScalar(y));let O=Gf[t.tinta[g]%6];C<900?(this.vicine.setMatrixAt(u,i),M[u*3]=O.r,M[u*3+1]=O.g,M[u*3+2]=O.b,u++):(this.lontane.setMatrixAt(p,i),f[p*3]=O.r,f[p*3+1]=O.g,f[p*3+2]=O.b,p++);let S=v-y-t.suolo[g];if(C<2500&&t.suolo[g]>-999&&S<8){let U=Math.max(.35,1-S/6)*y*1.05;i.compose(s.set(m,t.suolo[g]+.025,P),n.identity(),a.set(U,1,U)),this.ombre.setMatrixAt(d++,i)}}for(let[g,m]of[[this.vicine,u],[this.lontane,p]])g.count=m,m&&(g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0);this.ombre.count=d,d&&(this.ombre.instanceMatrix.needsUpdate=!0),this.visibili=u+p}},kf=["#ffa214","#5ac54f","#0098dc","#f68187","#92a1b9","#ea323c","#edab50","#c64524"].map(r=>new dt(r)),ma=class{constructor(t,e=300){let i="#f9e6cf",n={"#e07438":i,"#edab50":i,"#f68187":"#f68187"},s=["gatto-corpo","gatto-testa","gatto-coda","gatto-mano-a","gatto-mano-b"].map(o=>({g:ir(o,n),m:null})),a=Kh(s);this.mesh=new ln(a,Mi(),e),this.mesh.instanceMatrix.setUsage(Ke),this.mesh.instanceColor=new An(new Float32Array(e*3).fill(1),3),this.mesh.count=0,this.mesh.frustumCulled=!1,this.ombre=new ln(new Ui(.375,8).rotateX(-Math.PI/2),new Oe({color:"#134430",transparent:!0,opacity:.6,depthWrite:!1}),e),this.ombre.count=0,this.ombre.frustumCulled=!1,this.ombre.renderOrder=1,t.add(this.mesh,this.ombre),this.m=new yt,this.q=new $t,this.e=new ni,this.v=new b,this.s=new b(1,1,1),this.t=0,this.tinte=0}aggiorna(t,e,i=n=>t[n].p){let{m:n,q:s,e:a,v:o,s:l}=this;this.t+=e;let A=Math.min(t.length,this.mesh.instanceMatrix.count);if(A!==this.tinte){for(let c=0;c<A;c++)this.mesh.setColorAt(c,kf[(t[c].tinta??t[c].mente?.tinta??c)%8]);this.mesh.instanceColor.needsUpdate=!0,this.tinte=A}for(let c=0;c<A;c++){let h=t[c],u=i(c),p=Math.hypot(h.v[0],h.v[2]),d=p>.4&&h.aTerra,M=d?Math.abs(Math.sin(this.t*(p>4.6?16:11)+c))*.1:0;a.set(0,Math.atan2(h.dir[0],h.dir[1]),d?Math.sin(this.t*11+c)*.06:0),n.compose(o.set(u[0],u[1]+M,u[2]),s.setFromEuler(a),l.set(1,1,1)),this.mesh.setMatrixAt(c,n),(h.aTerra||h.suolo===void 0)&&(h.suolo=u[1]);let f=Math.max(.3,1-Math.max(0,u[1]-h.suolo)/5);n.compose(o.set(u[0],h.suolo+.015,u[2]),s.identity(),l.set(f,1,f)),this.ombre.setMatrixAt(c,n)}this.mesh.count=A,this.ombre.count=A,this.mesh.instanceMatrix.needsUpdate=!0,this.ombre.instanceMatrix.needsUpdate=!0}};function $h(){let r=[];for(let t of[-1,1])r.push(["b",[.24,.17,.46],[t*.2,-.02,.04],t<0?xt.rosa:xt.mare]),r.push(["b",[.18,.06,.5],[t*.2,-.1,.04],xt.scuro,{netta:!0}]);return Fr(r,!1)}var sr=["#ffa214","#ea323c","#5ac54f","#0098dc","#f68187","#edab50","#f9e6cf"].map(r=>new dt(r)),Vf=`
attribute float misura;
attribute float forma;
attribute vec3 colore;
attribute float vita;
varying vec3 vColore;
varying float vVita;
varying float vForma;
uniform float scala;
void main() {
  vColore = colore; vVita = vita; vForma = forma;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  // le particelle finiscono rimpicciolendosi (non sfumando: niente trasparenze che pesano)
  gl_PointSize = vita > 0.0 ? misura * scala * min(1.0, vita * 4.0) / -mv.z : 0.0;
}`,Xf=`
varying vec3 vColore;
varying float vVita;
varying float vForma;
void main() {
  vec2 q = abs(gl_PointCoord - 0.5);
  // 0 un quadratino, 1 un rombo
  if (vForma > 0.5 ? q.x + q.y > 0.5 : max(q.x, q.y) > 0.42) discard;
  gl_FragColor = vec4(vColore, 1.0);
  #include <colorspace_fragment>
}`,va=class{constructor(t,e=700){this.max=e,this.i=0;let i=new Ot;this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.mis=new Float32Array(e),this.vita=new Float32Array(e),this.forma=new Float32Array(e),this.peso=new Float32Array(e),this.attrito=new Float32Array(e),i.setAttribute("position",new Qt(this.pos,3).setUsage(Ke)),i.setAttribute("colore",new Qt(this.col,3).setUsage(Ke)),i.setAttribute("misura",new Qt(this.mis,1).setUsage(Ke)),i.setAttribute("vita",new Qt(this.vita,1).setUsage(Ke)),i.setAttribute("forma",new Qt(this.forma,1).setUsage(Ke)),this.mat=new xe({vertexShader:Vf,fragmentShader:Xf,uniforms:{scala:{value:600}}}),this.punti=new Zn(i,this.mat),this.punti.frustumCulled=!1,this.punti.renderOrder=3,t.add(this.punti),this.vive=0}misura(t,e){this.mat.uniforms.scala.value=t/(2*Math.tan(e*Math.PI/360))}una(t,e,i,n,s,a=1,o=1,l=0){let A=this.i;this.i=(this.i+1)%this.max,this.pos.set(t,A*3),this.vel.set(e,A*3),this.col[A*3]=i.r,this.col[A*3+1]=i.g,this.col[A*3+2]=i.b,this.mis[A]=n,this.vita[A]=s,this.forma[A]=a,this.peso[A]=o,this.attrito[A]=l}scintille(t,e=[0,0,1]){for(let i=0;i<2;i++){let n=Math.random()*Math.PI*2,s=1.5+Math.random()*2.5;this.una(t,[-e[0]*s+Math.cos(n)*1.2,1.5+Math.random()*2.2,-e[2]*s+Math.sin(n)*1.2],sr[Math.random()<.7?0:6],.07+Math.random()*.05,.25+Math.random()*.2,0,1.6,0)}}polvere(t,e=1){let i=Math.round(6+e*6);for(let n=0;n<i;n++){let s=n/i*Math.PI*2,a=1.2+e*1.5;this.una([t[0]+Math.cos(s)*.3,t[1]+.05,t[2]+Math.sin(s)*.3],[Math.cos(s)*a,.4+Math.random()*.6,Math.sin(s)*a],sr[6],.16+Math.random()*.1,.35+Math.random()*.2,0,.2,3)}}stelle(t,e=1){let i=Math.min(40,10+e*6);for(let n=0;n<i;n++){let s=n/i*Math.PI*2,a=2.4+Math.random()*1.6;this.una([t[0],t[1]+1,t[2]],[Math.cos(s)*a,4+Math.random()*3+e,Math.sin(s)*a],sr[n%6],.2+Math.random()*.12,.8+Math.random()*.4,1,.9,1.2)}}sbuffo(t,e=[0,0,1],i=6){let n=Math.random()*Math.PI*2;this.una([t[0],t[1]+.05,t[2]],[-e[0]*1.2+Math.cos(n)*.5,.5+Math.random()*.6,-e[2]*1.2+Math.sin(n)*.5],sr[i],.12+Math.random()*.08,.3+Math.random()*.15,0,.15,3)}derapa(t,e){let i=sr[[6,0,1,4][e]??6];for(let n=0;n<2;n++){let s=Math.random()*Math.PI*2;this.una([t[0],t[1]+.08,t[2]],[Math.cos(s)*2,1.5+Math.random()*2,Math.sin(s)*2],i,.08+Math.random()*.06,.22+Math.random()*.15,1,1.4,0)}}schizzi(t){for(let e=0;e<14;e++){let i=Math.random()*Math.PI*2,n=1+Math.random()*2;this.una(t,[Math.cos(i)*n,3+Math.random()*3,Math.sin(i)*n],sr[3],.12+Math.random()*.08,.6,0,1,0)}}passo(t){let{pos:e,vel:i,vita:n,peso:s,attrito:a}=this,o=0;for(let A=0;A<this.max;A++){if(n[A]<=0)continue;o++,n[A]-=t;let c=1-Math.min(1,a[A]*t);i[A*3]*=c,i[A*3+2]*=c,i[A*3+1]=i[A*3+1]*c-14*s[A]*t,e[A*3]+=i[A*3]*t,e[A*3+1]+=i[A*3+1]*t,e[A*3+2]+=i[A*3+2]*t}if(this.vive=o,!o&&!this.cerano)return;this.cerano=o>0;let l=this.punti.geometry.attributes;l.position.needsUpdate=!0,l.vita.needsUpdate=!0,l.colore.needsUpdate=!0,l.misura.needsUpdate=!0,l.forma.needsUpdate=!0}};var tu=180/Math.PI;function Ma(r,t,e,i,n,s){let a=Math.hypot(e-t,i),o=Math.atan2(i,e-t),l=i*Math.cos(o)+.3,A=[0,Math.cos(o),-Math.sin(o)],c=[r,i/2,(t+e)/2];return ve("b",{c:[c[0]-A[0]*l/2,c[1]-A[1]*l/2,c[2]-A[2]*l/2],h:[n/2,l/2,a/2],r:[-o*tu,0,0],colore:s,nome:"rampa"})}function WA(){let r="#5ac54f",t="#e4b86a",e="#edab50",i="#92a1b9",n="#7ad66b",s=[ve("b",{c:[0,-2,30],h:[60,2,50],colore:r,nome:"prato"}),ve("b",{c:[20,-2,-40],h:[40,2,20],colore:r,nome:"prato"}),ve("b",{c:[-57.5,-2,-40],h:[2.5,2,20],colore:r,nome:"prato"}),ve("b",{c:[-37.5,-2,-57.5],h:[17.5,2,2.5],colore:r,nome:"prato"}),ve("b",{c:[-37.5,-3.5,-37.5],h:[17.5,.5,17.5],colore:t,nome:"fondo"})];{let h=Math.hypot(10,3),u=Math.atan2(3,10),p=[-Math.sin(u),Math.cos(u),0],d=[-25,-1.5,-40];s.push(ve("b",{c:[d[0]-p[0]*.5,d[1]-p[1]*.5,-40],h:[h/2,.5,6],r:[0,0,u*tu],colore:t,nome:"spiaggia"}))}s.push(Ma(18,-46,-40,1.2,5,e),Ma(30,-48,-39,2.5,6,e),Ma(44,-52,-39,4,7,e));for(let h=0;h<9;h++)s.push(ve("c",{c:[-32,-.3,10+h*3.2],raggio:.65,lungo:7,colore:n,nome:"dosso"}));for(let h=0;h<6;h++)s.push(ve("b",{c:[-5,(h+1)*.2,22+h*1.2],h:[2.5,(h+1)*.2,.6],colore:i,nome:"gradino"}));s.push(ve("b",{c:[-5,1.2,31.6],h:[2.5,1.2,3],colore:i,nome:"ripiano"}));for(let[h,u]of[[4,22],[6,25],[8,28]])s.push(ve("b",{c:[h,.5,u],h:[.5,.5,.5],colore:n,nome:"blocco"}));s.push(ve("b",{c:[6,1.5,36],h:[3,1.5,.5],colore:i,nome:"muro"})),s.push(ve("giro",{c:[25,0,34],raggio:5,largo:4.6,spesso:.6,sposta:5.2,colore:e,nome:"giro"}));let a=[[-14,6],[-18,12],[-14,18]].map(([h,u])=>({x:h,z:u,r:1.55,y:.36,v:13.5}));for(let h of a)s.push(ve("b",{c:[h.x,.18,h.z],h:[1.6,.18,1.6],colore:"#ea323c",nome:"elastico"}));let o=(h,u,p)=>[h,u,p],l=[new xi([o(-46,.6,46),o(-46,.6,74)],{nome:"dritta"}),new xi([o(-39,.7,46),o(-35,.7,52),o(-39,.8,58),o(-35,.8,64),o(-39,.7,70),o(-36,.7,75)],{nome:"esse"}),new xi([o(-28,.6,46),o(-28,1.5,52),o(-28,.8,58),o(-28,2.1,64),o(-28,.7,70),o(-28,.6,75)],{nome:"onde"}),new xi(Array.from({length:31},(h,u)=>{let p=u/30*Math.PI*3,d=4.1-u/30*3.4;return o(-14+Math.cos(p)*5.5,d,60+Math.sin(p)*5.5)}),{nome:"spirale"}),new xi(Array.from({length:12},(h,u)=>{let p=u/12*Math.PI*2;return o(-14+Math.cos(p)*2.6,.8,60+Math.sin(p)*2.6)}),{chiusa:!0,nome:"cerchio"}),new xi([o(-47,-.85,-37),o(-42,.4,-37.6),o(-37.5,1.6,-38),o(-33,.4,-37.6),o(-28,-.85,-37)],{nome:"arco"})];s.push(Ma(-8.5,47,58.5,3.6,3,e));let A=[{x:-7,z:3},{x:-24,z:44}];for(let h of A)s.push(ve("b",{c:[h.x,.5,h.z],h:[.6,.5,.25],colore:"#424c6e",nome:"rastrelliera"}));return{mondo:new ha(s,{x0:-55,x1:-20,z0:-55,z1:-20,livello:(h,u,p)=>-.62+.24*Math.sin(.32*h+1.4*p)+.17*Math.sin(.41*u-1.1*p+1.3)+.08*Math.sin(.9*(h-u)+2.3*p)}),spinte:[{x0:23,x1:27,z0:14,z1:18,verso:[0,0,1],v:24},{x0:23,x1:27,z0:22,z1:26,verso:[0,0,1],v:24},{x0:41,x1:47,z0:-57.5,z1:-55,verso:[0,0,1],v:20}],partenza:[0,0,6],elastici:a,rotaie:l,pattini:A,mezzi:[{tipo:"quad",p:[3,.6,2],yaw:0},{tipo:"moto",p:[7,.6,2],yaw:0},{tipo:"acqua",p:[-34,-.4,-40],yaw:Math.PI/2}],bordo:60}}var gn={gatto:1,quad:6,moto:4,acqua:5};function Gi(r){let[t,e,i]=r.p;return[[t,e+.34,i,.34],[t,e+.84,i,.34],[t,e+1.32,i,.34],[t,e+1.72,i,.3]]}function au(r,t=!!r.chi){let e=r.d.sfere.map(([i,n,s,a])=>[...T.add(r.p,zt.ruota(r.q,[i,n,s])),a]);if(r.d.ruote){let i=r.molle||r.mo||[];r.d.ruote.forEach((n,s)=>e.push([...T.add(r.p,zt.ruota(r.q,[n[0],n[1]-r.d.lungaMolla+(i[s]||0),n[2]])),r.d.raggioRuota]))}else r.d.galleggia&&e.push([...T.add(r.p,zt.ruota(r.q,[0,-.3,.9])),.4]);return t&&e.push([...T.add(r.p,zt.ruota(r.q,T.add(r.d.sedile,[0,.62,0]))),.34]),e}function Wf(r,t){let e=null;for(let i of r)for(let n of t){let s=[i[0]-n[0],i[1]-n[1],i[2]-n[2]],a=Math.hypot(s[0],s[1],s[2]),o=i[3]+n[3]-a;if(o<=0||e&&o<=e.pen)continue;let l=a>1e-6?T.scala(s,1/a):[1,0,0];e={n:l,pen:o,punto:T.madd(n,l,n[3]-o/2),a:i,b:n}}return e}function Qr(r){return r.d?{tipo:"mezzo",x:r,palle:au(r),peso:gn[r.tipo]}:{tipo:"gatto",x:r,palle:Gi(r),peso:gn.gatto}}var eu=(r,t)=>r.tipo==="mezzo"?T.add(r.x.v,T.cross(r.x.w||[0,0,0],T.sub(t,r.x.p))):r.x.v;function iu(r,t,e){if(r.tipo==="mezzo"){r.x.p=T.madd(r.x.p,t,e);return}let i=Math.hypot(t[0],t[2])>.2?T.norm([t[0],0,t[2]]):[1,0,0];r.x.appoggiato={n:e>=0?i:T.scala(i,-1),t:.12},r.x.p[0]+=i[0]*e,r.x.p[2]+=i[2]*e,t[1]>.6&&r.x.v[1]<0&&(r.x.p[1]+=t[1]*e,r.x.v[1]=0)}function nu(r,t,e,i){if(r.tipo==="mezzo"){let s=r.x;s.v=T.madd(s.v,t,e);let a=zt.ruota(zt.coniugato(s.q),T.cross(T.sub(i,s.p),T.scala(t,e))),o=[a[0]/s.d.inerzia[0],a[1]/s.d.inerzia[1],a[2]/s.d.inerzia[2]];s.w=T.madd(s.w,zt.ruota(s.q,o),.35);return}let n=r.x;n.v=T.madd(n.v,t,e),e>3&&(n.v[1]=Math.max(n.v[1],Math.min(6,e*.45)),n.aTerra=!1,n.botta=Math.min(.9,.25+e*.06))}function mn(r,t,e=!1){let i=Wf(r.palle,t.palle);if(!i)return null;let{n,pen:s,punto:a}=i;if(t.eco){let p=t.eco.lato;p&&p.resta>0&&T.dot(n,p.n)<.5&&(n=p.n,s=i.a[3]+i.b[3]-T.dot(T.sub(i.a,i.b),n),a=T.madd(i.b,n,i.b[3]-s/2)),t.eco.lato={n,resta:.4}}let o=t.peso/(r.peso+t.peso);iu(r,n,s*o),e&&t.x&&iu(t,n,-s*(1-o));let l=eu(r,a),A=t.x?eu(t,a):t.v,c=T.dot(T.sub(l,A),n);if(c>=0)return{forza:0};let u=-(1+(r.tipo===t.tipo?c>-9?0:.3:c>-3?0:.55))*c/(1/r.peso+1/t.peso);return nu(r,n,u/r.peso,a),e&&t.x&&nu(t,T.scala(n,-1),u/t.peso,a),t.eco&&t.eco.colpita(T.scala(n,-1),u/t.peso),{forza:Math.abs(c)}}var ou=r=>Math.round(r*1e3)/1e3,ar=r=>Math.round(r*100)/100;function Au(r,t=null){return{k:"g",p:r.p.map(ou),v:r.v.map(ar),d:ar(Math.atan2(r.dir[0],r.dir[1])),f:(r.aTerra?1:0)|(r.nuota?2:0)|(r.corre?4:0)|(r.botta>0?8:0),m:t}}function Pa(r){return{k:"m",id:r.id,tipo:r.tipo,p:r.p.map(ou),v:r.v.map(ar),q:r.q.map(t=>Math.round(t*1e4)/1e4),w:r.w.map(ar),s:ar(r.sterzo),mo:r.molle.map(ar),chi:r.chi||null}}function xa(r,t){r.p=[...t.p],r.v=[...t.v],r.q=zt.norm(t.q),r.w=[...t.w],r.sterzo=t.s,r.molle=[...t.mo],r.chi=t.chi}var ru=.12,Yf=3,su=.35;function qf(r,t,e){let i=r[0]*t[0]+r[1]*t[1]+r[2]*t[2]+r[3]*t[3],n=i<0?(i=-i,t.map(A=>-A)):t;if(i>.9995)return zt.norm(r.map((A,c)=>A+(n[c]-A)*e));let s=Math.acos(i),a=Math.sin(s),o=Math.sin(s*(1-e))/a,l=Math.sin(s*e)/a;return zt.norm(r.map((A,c)=>A*o+n[c]*l))}var or=class{constructor(t){this.vista=JSON.parse(JSON.stringify(t)),this.meta=JSON.parse(JSON.stringify(t)),this.vista.w??=[0,0,0],this.meta.w??=[0,0,0],this.errore=[0,0,0],this.senza=0,this.salti=0}ricevi(t,e=.05,i=null){let n=JSON.parse(JSON.stringify(t));if(this.eta=e,i!==null&&(this.tempo=i+e),this.colpo&&(i!==null&&this.colpo.t!==void 0?i<this.colpo.t:this.colpo.resta>0)){let l=T.dot(n.v,this.colpo.n)-this.colpo.vn;l<0&&(n.v=T.madd(n.v,this.colpo.n,-l))}let a=n.k==="g"?!(n.f&3):!1;n.p=T.madd(n.p,n.v,e),a&&(n.p[1]-=14*e*e/2,n.v=[n.v[0],n.v[1]-14*e,n.v[2]]),n.q&&n.w&&(n.q=zt.integra(n.q,n.w,e)),n.w??=[0,0,0];let o=T.len(T.sub(this.vista.p,n.p))>Yf;this.errore=o?[0,0,0]:T.sub(this.vista.p,n.p),o&&this.salti++,this.qVista=o||!this.vista.q?null:this.vista.q,this.meta=n,this.senza=0,this.tScioglie=0,this.vista={...n,p:T.add(n.p,this.errore),q:this.qVista||n.q}}passo(t){let e=this.meta;this.senza+=t,this.colpo&&(this.colpo.resta-=t),this.tempo!==void 0&&(this.tempo+=t),this.lato&&(this.lato.resta-=t);let i=this.senza>su?Math.max(0,1-(this.senza-su)*4):1;e.p=T.madd(e.p,e.v,t*i),e.q&&e.w&&(e.q=zt.integra(e.q,T.scala(e.w,i),t));let n=Math.exp(-t/ru);this.errore=T.scala(this.errore,n),this.tScioglie=Math.min(1,(this.tScioglie||0)+t/(ru*2));let s=e.q?this.qVista?qf(this.qVista,e.q,this.tScioglie):e.q:void 0;this.vista={...e,p:T.add(e.p,this.errore),v:T.scala(e.v,i),q:s},this.tScioglie>=1&&(this.qVista=null)}corpo(t){let e={...this.meta,v:this.vista.v};if(e.k==="g")return e.m?null:{tipo:"gatto",palle:Gi(e),peso:gn.gatto,v:e.v,eco:this};let i=t[e.tipo];return{tipo:"mezzo",palle:au({d:i,p:e.p,q:e.q,mo:e.mo},!!e.chi),peso:gn[e.tipo],v:e.v,eco:this}}colpita(t,e){let i=this.meta.k==="g"?T.norm([t[0],0,t[2]]):t;this.colpo?.resta>0||e<.3||(this.meta.v=T.madd(this.meta.v,i,e),this.vista.v=T.madd(this.vista.v,i,e),this.colpo={n:i,resta:(this.eta??.1)*2+.12,vn:T.dot(this.meta.v,i),t:this.tempo})}};var vn={giro:{nome:"Giro",durata:.62,punti:300},vite:{nome:"Avvitamento",durata:.56,punti:250},superman:{nome:"Superman",durata:.6,punti:400},senzamani:{nome:"Senza mani",durata:.55,punti:350},scivolata:{nome:"Scivolata",durata:0,punti:0},piroetta:{nome:"Piroetta",durata:.5,punti:200}},lu=Object.keys(vn),cu=r=>r<=0?0:r>=1?1:r*r*(3-2*r),Mn=class{constructor(){this.fatti=[],this.ora=null,this.coda=null,this.alterna=!1,this.totale=0,this.scivola=null}inizioScivolata(){this.scivola={t:0}}fineScivolata(){if(!this.scivola)return;let t=this.scivola.t;this.scivola=null,t>.15&&this.fatti.push({nome:"scivolata",segno:1,t,durata:0,punti:Math.round(100+t*160)})}premi(t={x:0,y:0},e=!0){if(!e)return!1;let i,n=1;Math.abs(t.y)>.45&&Math.abs(t.y)>=Math.abs(t.x)?(i="giro",n=t.y>0?1:-1):Math.abs(t.x)>.45?(i="vite",n=t.x>0?1:-1):i=["superman","senzamani","piroetta"][this.alterna=((this.alterna|0)+1)%3];let s={nome:i,segno:n,t:0,durata:vn[i].durata};return this.ora?(this.coda=s,!0):(this.ora=s,!0)}passo(t,e=!1){this.scivola&&(this.scivola.t+=t);let i=this.ora;if(i&&(i.t+=t,i.t>=i.durata)){if(this.fatti.push(i),e&&!this.coda&&["giro","vite","piroetta"].includes(i.nome)){this.ora={nome:i.nome,segno:i.segno,t:i.t-i.durata,durata:i.durata,giri:(i.giri||1)+1};return}this.ora=this.coda,this.coda=null}}atterra(){if(this.fineScivolata(),!this.ora&&!this.fatti.length)return null;let t=this.fatti.map(i=>vn[i.nome].nome),e;if(this.ora&&this.ora.t/this.ora.durata<.82)e={esito:"caduta",punti:0,combo:this.fatti.length,nomi:t};else{this.ora&&(this.fatti.push(this.ora),t.push(vn[this.ora.nome].nome));let i=0;this.fatti.forEach((s,a)=>{i+=(s.punti??vn[s.nome].punti)*(a&&this.fatti[a-1].nome===s.nome&&!s.giri?.5:1)});let n=this.fatti.length;e={esito:"pulito",punti:Math.round(i*n),combo:n,nomi:t},this.totale+=e.punti}return this.fatti=[],this.ora=null,this.coda=null,e}inCorso(){let t=[];for(let e of[...this.fatti,...this.ora?[this.ora]:[]])e.giri&&t.length?t[t.length-1]=vn[e.nome].nome+" ×"+e.giri:t.push(vn[e.nome].nome);return this.scivola&&t.push("Scivolata"),{combo:t.length,nomi:t,scivola:!!this.scivola}}figura(){let t=this.ora;return t?{nome:t.nome,k:cu(t.t/t.durata),segno:t.segno}:null}foto(){let t=this.ora;return t?[lu.indexOf(t.nome),Math.round(t.t/t.durata*100),t.segno]:null}static daFoto(t){return t?{nome:lu[t[0]],k:cu(t[1]/100),segno:t[2]}:null}};function YA(r){if(!r)return null;let t=r.k*Math.PI*2*r.segno;return r.nome==="giro"?[[1,0,0],t]:r.nome==="vite"?[[0,0,1],-t]:r.nome==="piroetta"?[[0,1,0],t]:null}var hu=.62,jf=.58,Jf=.35,Kf=.35,Ai=1.25,ya=8192,wa=class{constructor(t,e=800){this.mondo=t,this.max=e,this.n=0;let i=()=>new Float64Array(e);this.x=i(),this.y=i(),this.z=i(),this.vx=i(),this.vy=i(),this.vz=i(),this.r=i(),this.im=i(),this.qx=i(),this.qy=i(),this.qz=i(),this.qw=i(),this.sonno=i(),this.suolo=i(),this.dorme=new Uint8Array(e),this.tinta=new Uint8Array(e),this.testa=new Int32Array(ya),this.dopo=new Int32Array(e),this.svegli=0,this.urti=0,this.grigliaForme()}grigliaForme(){let e=this.mondo.forme;this.celle=new Map,this.L=8;for(let i of e){let n=i.raggioB+1.5;for(let s=Math.floor((i.c[0]-n)/8);s<=Math.floor((i.c[0]+n)/8);s++)for(let a=Math.floor((i.c[2]-n)/8);a<=Math.floor((i.c[2]+n)/8);a++){let o=s*4096+a;this.celle.has(o)||this.celle.set(o,[]),this.celle.get(o).push(i)}}this.vuota=[]}formeIn(t,e){return this.celle.get(Math.floor(t/this.L)*4096+Math.floor(e/this.L))||this.vuota}aggiungi(t,e=[0,0,0],i=.4,n=0){if(this.n>=this.max)return-1;let s=this.n++;this.x[s]=t[0],this.y[s]=t[1],this.z[s]=t[2],this.vx[s]=e[0],this.vy[s]=e[1],this.vz[s]=e[2],this.r[s]=i,this.im[s]=1/(.25+i*i*i*1.6),this.qx[s]=0,this.qy[s]=0,this.qz[s]=0,this.qw[s]=1,this.sonno[s]=0,this.dorme[s]=0,this.tinta[s]=n;let a=this.mondo.raggio([t[0],t[1],t[2]],[0,-1,0],60);return this.suolo[s]=a===null?-1e3:t[1]-a,s}sveglia(t){this.dorme[t]=0,this.sonno[t]=0}cella(t,e,i){return(Math.floor(t/Ai)*73856093^Math.floor(e/Ai)*19349663^Math.floor(i/Ai)*83492791)&ya-1}passo(t,e=[]){let{x:i,y:n,z:s,vx:a,vy:o,vz:l,r:A,im:c,dorme:h}=this,u=this.mondo,p=this.n,d=0;this.urti=0;for(let g=0;g<p;g++){if(h[g])continue;d++,o[g]-=14*t;let m=u.pelo(i[g],s[g]);if(m!==null&&n[g]-A[g]<m){let v=Math.min(1,(m-(n[g]-A[g]))/(2*A[g]));o[g]+=14*2.6*v*t;let P=1-Math.min(1,1.8*v*t);a[g]*=P,o[g]*=P,l[g]*=P}i[g]+=a[g]*t,n[g]+=o[g]*t,s[g]+=l[g]*t}for(let g=0;g<p;g++){if(h[g])continue;let m=this.formeIn(i[g],s[g]);if(!m.length)continue;let v=u.distanzaXYZ?u.distanzaXYZ(i[g],n[g],s[g],m):u.distanza([i[g],n[g],s[g]],m);if(v>=A[g])continue;let P=u.normale([i[g],n[g],s[g]],m),y=A[g]-v;i[g]+=P[0]*y,n[g]+=P[1]*y,s[g]+=P[2]*y,P[1]>.6&&(this.suolo[g]=n[g]-A[g]),this.rimbalza(g,P,0,0,0,jf,t,!0)}let M=this.testa.fill(-1),f=this.dopo;for(let g=0;g<p;g++){let m=this.cella(i[g],n[g],s[g]);f[g]=M[m],M[m]=g}for(let g=0;g<p;g++){if(h[g])continue;let m=Math.floor(i[g]/Ai),v=Math.floor(n[g]/Ai),P=Math.floor(s[g]/Ai);for(let y=-1;y<=1;y++)for(let x=-1;x<=1;x++)for(let w=-1;w<=1;w++){let I=M[((m+y)*73856093^(v+x)*19349663^(P+w)*83492791)&ya-1];for(;I!==-1;I=f[I]){if(I===g||I<g&&!h[I])continue;let L=i[I]-i[g],C=n[I]-n[g],O=s[I]-s[g],S=A[g]+A[I],U=L*L+C*C+O*O;if(U>=S*S||U<1e-12)continue;let N=Math.sqrt(U),X=L/N,ot=C/N,j=O/N,G=S-N,K=h[g]?0:c[g],H=h[I]?0:c[I],q=K+H;if(q===0)continue;i[g]-=X*G*K/q,n[g]-=ot*G*K/q,s[g]-=j*G*K/q,i[I]+=X*G*H/q,n[I]+=ot*G*H/q,s[I]+=j*G*H/q;let lt=(a[I]-a[g])*X+(o[I]-o[g])*ot+(l[I]-l[g])*j;if(lt>=0)continue;let _=-(1+(lt<-.8?hu:0))*lt/(c[g]+c[I]);(_*c[g]>.6||_*c[I]>.6)&&(h[g]&&this.sveglia(g),h[I]&&this.sveglia(I));let E=h[g]?0:_*c[g],Q=h[I]?0:_*c[I];a[g]-=X*E,o[g]-=ot*E,l[g]-=j*E,a[I]+=X*Q,o[I]+=ot*Q,l[I]+=j*Q,this.urti++}}}for(let g of e){if(!g)continue;let m=g.v||[0,0,0],v=g.peso||1,P=0,y=0,x=0;for(let w of g.palle){let I=Math.floor(w[0]/Ai),L=Math.floor(w[1]/Ai),C=Math.floor(w[2]/Ai),O=Math.ceil((w[3]+.6)/Ai);for(let S=-O;S<=O;S++)for(let U=-O;U<=O;U++)for(let N=-O;N<=O;N++){let X=M[((I+S)*73856093^(L+U)*19349663^(C+N)*83492791)&ya-1];for(;X!==-1;X=f[X]){let ot=i[X]-w[0],j=n[X]-w[1],G=s[X]-w[2],K=w[3]+A[X],H=ot*ot+j*j+G*G;if(H>=K*K||H<1e-12)continue;let q=Math.sqrt(H),lt=ot/q,_=j/q,E=G/q;h[X]&&this.sveglia(X);let Q=K-q;i[X]+=lt*Q,n[X]+=_*Q,s[X]+=E*Q;let $=(a[X]-m[0])*lt+(o[X]-m[1])*_+(l[X]-m[2])*E;if($>=0)continue;let R=-(1+hu)*$/(c[X]+1/v);a[X]+=lt*R*c[X],o[X]+=_*R*c[X]+Math.min(3,-$*.25),l[X]+=E*R*c[X],P-=lt*R/v,y-=_*R/v,x-=E*R/v,this.urti++}}}if(g.x&&(P||y||x)){let w=g.x.v;w[0]+=P,w[1]+=g.tipo==="gatto"?0:y,w[2]+=x}}for(let g=0;g<p;g++){if(h[g])continue;let m=a[g]*a[g]+o[g]*o[g]+l[g]*l[g],v=l[g],P=-a[g],y=Math.hypot(v,P);y>1e-4&&this.gira(g,v/y,0,P/y,y*t/A[g]),this.sonno[g]=m<.09?this.sonno[g]+t:0,this.sonno[g]>.5&&(h[g]=1,a[g]=o[g]=l[g]=0),n[g]<-40&&(n[g]=30,i[g]=(Math.random()-.5)*40,s[g]=10+(Math.random()-.5)*40,a[g]=o[g]=l[g]=0)}this.svegli=d}rimbalza(t,e,i,n,s,a,o,l){let{vx:A,vy:c,vz:h}=this,u=A[t]-i,p=c[t]-n,d=h[t]-s,M=u*e[0]+p*e[1]+d*e[2];if(M>=0)return;let f=M>-1.2?0:a,g=u-M*e[0],m=p-M*e[1],v=d-M*e[2],P=Math.hypot(g,m,v),x=(1-(P>1e-6?Math.min(1,Jf*(1+f)*-M/P):0))*(l?1-Math.min(1,Kf*o):1);A[t]=i+g*x-e[0]*M*f,c[t]=n+m*x-e[1]*M*f,h[t]=s+v*x-e[2]*M*f}gira(t,e,i,n,s){let a=Math.sin(s/2),o=Math.cos(s/2),l=e*a,A=i*a,c=n*a,h=this.qx[t],u=this.qy[t],p=this.qz[t],d=this.qw[t],M=o*h+l*d+A*p-c*u,f=o*u-l*p+A*d+c*h,g=o*p+l*u-A*h+c*d,m=o*d-l*h-A*u-c*p,v=Math.hypot(M,f,g,m)||1;this.qx[t]=M/v,this.qy[t]=f/v,this.qz[t]=g/v,this.qw[t]=m/v}foto(t=!1){let e=[];for(let i=0;i<this.n;i++)!t&&this.dorme[i]||e.push(i,Math.round(this.x[i]*100),Math.round(this.y[i]*100),Math.round(this.z[i]*100),Math.round(this.vx[i]*100),Math.round(this.vy[i]*100),Math.round(this.vz[i]*100));return e}correggi(t,e=.05,i=!1){for(let n=0;n<t.length;n+=7){let s=t[n];if(s>=this.n)continue;let a=t[n+4]/100,o=t[n+5]/100,l=t[n+6]/100,A=t[n+1]/100+a*e,c=t[n+2]/100+o*e,h=t[n+3]/100+l*e,u=A-this.x[s],p=c-this.y[s],d=h-this.z[s],M=u*u+p*p+d*d;if(i&&a*a+o*o+l*l<.01){this.x[s]=A,this.y[s]=c,this.z[s]=h,this.vx[s]=this.vy[s]=this.vz[s]=0,this.dorme[s]=1;continue}let f=M>4?1:.35;this.x[s]+=u*f,this.y[s]+=p*f,this.z[s]+=d*f,(M>4e-4||a*a+o*o+l*l>.04)&&(this.vx[s]=a,this.vy[s]=o,this.vz[s]=l,this.sveglia(s))}}};var Da=4,_a=class{constructor(t,e=30,i=Math.random){this.caso=i,this.gatti=[];for(let n=0;n<e;n++)this.aggiungi(this.posto())}posto(){let t=this.caso;return[6+t()*28,.2,46+t()*28]}aggiungi(t){let e=ua(t);return e.mente={voglio:[0,0],fino:0,corri:!1,salta:0,tinta:this.gatti.length%8},e.dt=0,this.gatti.push(e),e}passo(t,e,i,n={}){let s=this.gatti,a=s.length;for(let o=e%Da;o<a;o+=Da){let l=s[o],A=l.mente,c=t*Da;A.fino-=c,A.fino<=0&&this.pensa(l,n);for(let u of n.corpi||[]){if(u.tipo!=="mezzo")continue;let p=u.palle[0],d=u.v||u.x&&u.x.v||[0,0,0],M=l.p[0]-p[0],f=l.p[2]-p[2],g=Math.hypot(M,f);if(g<7&&Math.hypot(d[0],d[2])>5&&d[0]*M+d[2]*f>0){let m=Math.sign(d[0]*f-d[2]*M)||1;A.voglio=[-d[2]*m,d[0]*m].map(v=>v/(Math.hypot(d[0],d[2])||1)),A.corri=!0,A.fino=.8,g<3.5&&(A.salta=1)}}let h={x:A.voglio[0],z:A.voglio[1],corri:A.corri,salta:A.salta>0};A.salta=0,pa(l,h,c,i),l.p[1]<-25&&(l.p=this.posto(),l.v=[0,0,0])}if(e%Da===0){let o=s.map(l=>({tipo:"gatto",x:l,palle:Gi(l),peso:gn.gatto}));for(let l=0;l<a;l++){for(let A=l+1;A<a;A++){let c=s[l].p,h=s[A].p;Math.abs(c[0]-h[0])>.8||Math.abs(c[2]-h[2])>.8||mn(o[l],o[A],!0)&&(o[l].palle=Gi(s[l]),o[A].palle=Gi(s[A]))}for(let A of n.corpi||[]){let c=A.palle[0],h=s[l].p;Math.abs(h[0]-c[0])>3||Math.abs(h[2]-c[2])>3||mn(o[l],A,!!A.x)&&(o[l].palle=Gi(s[l]))}}}}pensa(t,e){let i=t.mente,n=this.caso();i.corri=!1,i.fino=1+this.caso()*1.5;let s=e.palle;if(s&&s.n&&n<.45){let a=-1,o=25;for(let l=0;l<6;l++){let A=Math.floor(this.caso()*s.n),c=Math.hypot(s.x[A]-t.p[0],s.z[A]-t.p[2]);c<o&&(o=c,a=A)}if(a>=0){let l=s.x[a]-t.p[0],A=s.z[a]-t.p[2],c=Math.hypot(l,A)||1;i.voglio=[l/c,A/c],i.corri=c>3,i.fino=Math.min(2.5,c/5+.4);return}}if(n<.75){let a=this.caso()*Math.PI*2,o=.5+this.caso()*.5,l=Math.hypot(t.p[0]-20,t.p[2]-60)>22;i.voglio=l?T.norm([20-t.p[0],0,60-t.p[2]]).filter((A,c)=>c!==1).map(A=>A*o):[Math.sin(a)*o,Math.cos(a)*o],this.caso()<.15&&(i.salta=1);return}i.voglio=[0,0],this.caso()<.3&&(i.salta=1)}foto(){let t=[];for(let e of this.gatti)t.push(Math.round(e.p[0]*100),Math.round(e.p[1]*100),Math.round(e.p[2]*100),Math.round(e.v[0]*100),Math.round(e.v[1]*100),Math.round(e.v[2]*100),Math.round(Math.atan2(e.dir[0],e.dir[1])*100),(e.aTerra?1:0)|(e.nuota?2:0)|e.mente.tinta<<2);return t}},Ea=class{constructor(){this.gatti=[]}ricevi(t,e=.05){let i=t.length/8;for(;this.gatti.length<i;)this.gatti.push({p:[0,0,0],v:[0,0,0],dir:[0,1],aTerra:!0,nuota:!1,tinta:0,errore:[0,0,0],nuovo:!0});this.gatti.length=i;for(let n=0;n<i;n++){let s=this.gatti[n],a=n*8,o=[t[a+3]/100,t[a+4]/100,t[a+5]/100],l=[t[a]/100+o[0]*e,t[a+1]/100+(t[a+7]&1?0:o[1]*e),t[a+2]/100+o[2]*e],A=T.sub(s.p,l);s.errore=s.nuovo||T.len(A)>3?[0,0,0]:T.add(s.errore,A),s.p=l,s.v=o,s.nuovo=!1;let c=t[a+6]/100;s.dir=[Math.sin(c),Math.cos(c)],s.aTerra=!!(t[a+7]&1),s.nuota=!!(t[a+7]&2),s.tinta=t[a+7]>>2}}passo(t){let e=Math.exp(-t/.12);for(let i of this.gatti)i.p[0]+=i.v[0]*t,i.p[2]+=i.v[2]*t,i.aTerra||(i.p[1]+=i.v[1]*t,i.v[1]-=14*t),i.errore[0]*=e,i.errore[1]*=e,i.errore[2]*=e}vista(t){let e=this.gatti[t];return[e.p[0]+e.errore[0],e.p[1]+e.errore[1],e.p[2]+e.errore[2]]}corpi(){return this.gatti.map(t=>({tipo:"gatto",palle:Gi(t),peso:gn.gatto,v:t.v}))}};var Pn=1/120,uu=1/20,pu=-25,Zf=2.4,Hr=class{constructor(t,e,{tiene:i=!1,capo:n=null,manda:s=()=>{},partenza:a=null,palle:o=1500,folla:l=0,seme:A=7}={}){if(this.id=t,this.arena=e,this.mondo=e.mondo,this.tiene=i,this.capo=i?t:n,this.manda=s,this.partenza=a||e.partenza,this.corpo=ua(this.partenza),this.sopra=null,this.mezzi=new Map,this.casa=new Map(e.mezzi.map(h=>[h.tipo,h])),i)for(let h of e.mezzi)this.mezzi.set(h.tipo,this.nuovo(h.tipo,h.p,h.yaw));this.eco=new Map,this.dove=new Map,this.ultima=new Map,this.t=0,this.scarto=0,this.tFoto=0,this.eventi=[],this.chiesto=null,this.usaPrima=!1,this.trucchi=new Mn,this.inAria=!1,this.truccoPrima=!1;let c=A;this.caso=()=>(c=c*16807%2147483647,c/2147483647),this.tick=0,this.nFoto=0,this.palle=o?new wa(this.mondo,o):null,i?this.folla=new _a(this.mondo,l,this.caso):this.follaEco=new Ea}nuovo(t,e,i){let n=Gh(t,e,i);return n.id=t,n.chi=null,n}get ora(){return this.t+this.scarto}passo(t={}){let e=Pn,i=this.corpo,n=this.arena;this.t+=e,this.mondo.t=this.ora,t.usa&&!this.usaPrima&&this.usa(),this.usaPrima=!!t.usa,this.tick++;let s=this.sopra&&this.mezzi.get(this.sopra);if(t.trucco&&!this.truccoPrima&&(this.truccoAttesa=.25,this.truccoAsse=t.asse),this.truccoAttesa>0&&(this.truccoAttesa-=e,(s?!s.contatti&&!s.inAcqua&&s.aria>.03&&!s.rotaia:!i.aTerra&&!i.nuota&&!(i.botta>0)&&!i.rotaia)&&this.trucchi.premi(t.asse||this.truccoAsse,!0)&&(this.eventi.push({tipo:"trucco"}),this.truccoAttesa=0)),this.truccoPrima=!!t.trucco,this.trucchi.passo(e,!!t.truccoTenuto),!this.sopra){let c=i.rotaia?Wh(i,t,e,n.rotaie):pa(i,t,e,this.mondo);(c.fine||c.salto&&!i.rotaia&&this.trucchi.scivola)&&(this.trucchi.fineScivolata(),this.eventi.push({tipo:"stacco",p:[...i.p]})),!i.rotaia&&n.rotaie&&Xh(i,n.rotaie)&&(this.trucchi.inizioScivolata(),this.eventi.push({tipo:"aggancio",p:[...i.p]})),c.atterrato&&this.eventi.push({tipo:"atterrato",chi:"gatto",p:[...i.p]}),c.salto&&this.eventi.push({tipo:"salto",chi:"gatto"});for(let u of n.elastici||[])i.aTerra&&Math.hypot(i.p[0]-u.x,i.p[2]-u.z)<u.r&&Math.abs(i.p[1]-u.y)<.3&&(i.v[1]=t.salta?u.v*1.22:u.v,i.aTerra=!1,i.salto=!1,i.p[1]+=.02,this.eventi.push({tipo:"elastico",p:[...i.p]}));let h=!i.aTerra&&!i.nuota;this.inAria&&!h&&this.atterra(null),this.inAria=h,c.tuffo&&this.eventi.push({tipo:"tuffo"});for(let u of n.spinte)if(du(u,i.p)&&i.aTerra){let p=T.dot(i.v,u.verso),d=u.v*.5;p<d&&(i.v=T.madd(i.v,u.verso,d-p),i.v[1]=4,i.aTerra=!1,i.botta=.5,this.eventi.push({tipo:"spinta"}))}i.p[1]<pu&&this.ricompari()}for(let c of this.mezzi.values()){let h=c.id===this.sopra,u=h?t.mezzo?{...t.mezzo,salta:t.salta}:kh(c,t,t.asse):{gas:0,sterzo:0};h&&(u.derapa=!!t.salta&&(Math.abs(u.sterzo)>.3||!!c.deriva)),h&&t.raddrizza&&!this.raddrizzaPrima&&XA(c);let p=c.aria;if(c.staccato>0&&(c.staccato-=e),c.rotaia){let f=qh(c,u,e,n.rotaie);h&&(f.fine||f.salto)&&(this.trucchi.fineScivolata(),this.eventi.push({tipo:"stacco",p:[...c.p]})),h&&f.salto&&this.eventi.push({tipo:"salto",chi:c.tipo});continue}let d=Vh(c,u,e,this.mondo);n.rotaie&&Yh(c,n.rotaie)&&h&&(this.trucchi.inizioScivolata(),this.eventi.push({tipo:"aggancio",p:[...c.p]})),h&&(d.atterrato&&this.eventi.push({tipo:"atterrato",chi:c.tipo,aria:d.atterrato.aria,dritto:d.atterrato.dritto,p:[...c.p]}),p>0&&c.aria===0&&this.atterra(c),d.capottato&&this.eventi.push({tipo:"capottato"}),d.turbo&&this.eventi.push({tipo:"turbo",livello:d.turbo,p:[...c.p]}),d.salto&&this.eventi.push({tipo:"salto",chi:c.tipo}));let M=c.contatti?n.spinte.find(f=>du(f,c.p)):null;if(M){let f=T.dot(c.v,M.verso);if(f<M.v){let g=T.sub(c.v,T.scala(M.verso,f));g[1]=0,c.v=T.add(T.madd(c.v,M.verso,M.v-f),T.scala(g,-.7))}h&&!c.spinto&&this.eventi.push({tipo:"spinta"})}c.spinto=!!M;for(let f of n.elastici||[])c.contatti&&Math.hypot(c.p[0]-f.x,c.p[2]-f.z)<f.r&&c.v[1]<f.v*.8&&(c.v[1]=f.v*.8,h&&this.eventi.push({tipo:"elastico",p:[...c.p]}));if(c.p[1]<pu)if(h){this.eventi.push({tipo:"ricompari"});let f=this.partenza;this.metti(c,[f[0]+2,f[1]+1,f[2]],0)}else{let f=this.casa.get(c.tipo);this.metti(c,[f.p[0],f.p[1]+1,f.p[2]],f.yaw)}}this.raddrizzaPrima=!!t.raddrizza;let a=this.sopra&&this.mezzi.get(this.sopra);if(a){i.p=T.add(a.p,zt.ruota(a.q,a.d.sedile)),i.v=[...a.v];let c=Ze(a).avanti;i.dir=T.len([c[0],0,c[2]])>.1?[c[0],c[2]].map(h=>h/Math.hypot(c[0],c[2])):i.dir,i.aTerra=a.contatti>0,i.nuota=!1}for(let c of this.eco.values())c.passo(e);let o=[...this.mezzi.values()].map(Qr);this.sopra||o.unshift(Qr(i));for(let c=0;c<o.length;c++){for(let h=c+1;h<o.length;h++){let u=mn(o[c],o[h],!0);u&&(o[c].palle=ba(o[c]),o[h].palle=ba(o[h]),this.colpo(u,o[c],o[h]))}for(let h of this.eco.values()){let u=h.corpo(Pi);if(!u)continue;let p=mn(o[c],u);p&&(o[c].palle=ba(o[c]),this.colpo(p,o[c],u))}}let l=[...this.eco.values()].map(c=>c.corpo(Pi)).filter(Boolean);if(this.folla&&this.folla.passo(e,this.tick,this.mondo,{palle:this.palle,corpi:[...o,...l]}),this.follaEco){this.follaEco.passo(e);let c=o[0];if(c&&c.tipo==="gatto")for(let h of this.follaEco.corpi()){let u=h.palle[0];Math.abs(u[0]-i.p[0])<1.2&&Math.abs(u[2]-i.p[2])<1.2&&mn(c,h)&&(c.palle=ba(c))}}let A=this.palle&&this.palle.n>1e3;if(this.palle&&this.palle.n&&(!A||this.tick%2===0)){let c=this.folla?this.folla.gatti.map(h=>Qr(h)):this.follaEco.corpi();this.palle.passo(A?e*2:e,[...o,...l,...c])}if(this.tFoto+=e,this.tFoto>=uu-1e-9){this.tFoto-=uu,this.nFoto++;let c=Au(i,this.sopra),h=[...this.mezzi.values()].map(Pa),u=this.trucchi.foto();i.pattini&&(c.pt=1),i.rotaia&&(c.ro=1);for(let d of h){let M=this.mezzi.get(d.id);M&&M.rotaia&&(d.ro=1)}if(u)if(this.sopra){let d=h.find(M=>M.id===this.sopra);d&&(d.tr=u)}else c.tr=u;let p={tipo:"foto",da:this.id,t:this.ora,cose:[c,...h]};if(this.tiene){if(this.folla.gatti.length&&(p.fo=this.folla.foto()),this.palle&&this.palle.n&&this.nFoto%2===0){let d=this.nFoto%40===0;p.pa=this.palle.foto(d),d&&(p.pk=1)}this.palle&&(p.np=this.palle.n)}this.manda(p)}}colpo(t,e,i){if(t.forza<2.5)return;(e.x===this.corpo||e.tipo==="mezzo"&&e.x.id===this.sopra||i.x===this.corpo||i.tipo==="mezzo"&&i.x?.id===this.sopra)&&this.eventi.push({tipo:"botta",forza:t.forza})}atterra(t){let e=this.trucchi.atterra();if(!e)return;let i=this.corpo;if(this.eventi.push({tipo:"trucchi",...e,p:t?[...t.p]:[...i.p]}),e.esito==="pulito"){if(t){let n=Ze(t).avanti,s=T.norm([n[0],0,n[2]]);t.v=T.madd(t.v,s,Math.min(6,2+e.combo*1.5))}else if(i.pattini){let n=Math.hypot(i.v[0],i.v[2])||1;i.v[0]+=i.v[0]/n*2.5,i.v[2]+=i.v[2]/n*2.5}return}t?(t.v=T.scala(t.v,.35),t.w=T.add(t.w,[(this.caso()-.5)*6,(this.caso()-.5)*4,(this.caso()-.5)*6])):(i.v=[i.v[0]*.3,3,i.v[2]*.3],i.aTerra=!1,i.botta=.8,i.rotaia=null)}pioggia(t,e=300){if(this.palle){if(!this.tiene){this.manda({tipo:"pioggia",da:this.id,a:this.capo,p:t,n:e});return}for(let i=0;i<e;i++){let n=this.caso()*Math.PI*2,s=Math.sqrt(this.caso())*9;this.nuovaPalla([t[0]+Math.cos(n)*s,t[1]+8+this.caso()*22,t[2]+Math.sin(n)*s],[0,-this.caso()*4,0])}this.eventi.push({tipo:"pioggia",n:e})}}nuovaPalla(t,e){let i=this.palle.n;return this.palle.aggiungi(t,e,.3+i*2654435761%1e3/1e3*.28,i%6)}gente(t=10){if(!this.tiene){this.manda({tipo:"gente",da:this.id,a:this.capo,n:t});return}for(let e=0;e<t;e++)this.folla.aggiungi(this.folla.posto())}metti(t,e,i){t.p=[...e],t.v=[0,0,0],t.w=[0,0,0],t.q=zt.asse([0,1,0],i),t.ribaltato=0,t.rotaia=null,t.deriva=null}ricompari(){let t=this.corpo;t.p=[...this.partenza],t.v=[0,0,0],t.botta=0,t.aTerra=!1,this.eventi.push({tipo:"ricompari"})}usa(){if(this.sopra){this.scendi();return}let t=this.corpo,e=(this.arena.pattini||[]).find(s=>Math.hypot(s.x-t.p[0],s.z-t.p[2])<2.2),i=null,n=(s,a,o,l,A,c)=>{if(!A)return;let h=T.add(a,zt.ruota(o,Pi[l].sedile)),u=Math.hypot(h[0]-t.p[0],h[1]-(t.p[1]+.5),h[2]-t.p[2]);u<Zf&&(!i||u<i.d)&&(i={id:s,d:u,mio:c})};for(let s of this.mezzi.values())n(s.id,s.p,s.q,s.tipo,!s.chi,!0);for(let[s,a]of this.eco)s.startsWith("m:")&&n(a.vista.id,a.vista.p,a.vista.q,a.vista.tipo,!a.vista.chi,!1);if(e&&!t.rotaia&&(!i||Math.hypot(e.x-t.p[0],e.z-t.p[2])<i.d)){t.pattini=!t.pattini,this.eventi.push({tipo:t.pattini?"pattini":"scarpe"});return}if(i){if(i.mio){this.sali(this.mezzi.get(i.id));return}this.chiesto||(this.chiesto=i.id,this.manda({tipo:"sali",da:this.id,a:this.dove.get(i.id)||this.capo,id:i.id}))}}sali(t){t.chi=this.id,this.sopra=t.id,this.chiesto=null,this.corpo.botta=0,this.eventi.push({tipo:"salgo",id:t.id})}scendi(){let t=this.mezzi.get(this.sopra),e=this.corpo;if(!t){this.sopra=null;return}let{destra:i,avanti:n}=Ze(t),s=[T.scala(i,-1.35),T.scala(i,1.35),T.scala(n,-1.6),[0,1.2,0]],a=null;for(let o of s){let l=T.add(t.p,[o[0],o[1]+.1,o[2]]);if([.4,.9,1.4].every(c=>this.mondo.distanza([l[0],l[1]+c,l[2]])>Hh.RAGGIO+.05)){a=l;break}}if(e.p=a||T.add(t.p,[0,1.6,0]),e.v=[t.v[0]*.6,Math.max(0,t.v[1])+2.5,t.v[2]*.6],e.aTerra=!1,e.botta=T.len(t.v)>4?.4:0,t.chi=null,this.sopra=null,this.eventi.push({tipo:"scendo",id:t.id}),!this.tiene){let o=Pa(t);this.mezzi.delete(t.id),this.eco.set("m:"+t.id,new or(o)),this.dove.set(t.id,this.capo),this.manda({tipo:"rendo",da:this.id,a:this.capo,id:t.id,foto:o})}}ricevi(t,e=.05){if(!(t.a&&t.a!==this.id)){if(t.tipo==="foto"){if((this.ultima.get(t.da)??-1/0)>=t.t)return;if(this.ultima.set(t.da,t.t),t.da===this.capo&&!this.tiene){let n=t.t+e-this.t;this.scarto=this.scartoPreso?this.scarto+(n-this.scarto)*.1:n,this.scartoPreso=!0}let i=this.tiene||this.scartoPreso?Math.min(.5,Math.max(0,this.ora-t.t)):e;if(t.fo&&this.follaEco&&this.follaEco.ricevi(t.fo,i),this.palle&&t.np!==void 0&&!this.tiene)for(;this.palle.n<t.np;)this.nuovaPalla([0,-100,0],[0,0,0]);t.pa&&this.palle&&!this.tiene&&this.palle.correggi(t.pa,i,!!t.pk);for(let n of t.cose){if(n.k==="m"&&this.mezzi.has(n.id))continue;let s=n.k==="g"?"g:"+t.da:"m:"+n.id;n.k==="m"&&this.dove.set(n.id,t.da);let a=this.eco.get(s);if(a)a.ricevi(n,i,t.t);else{let o=new or(n);o.ricevi(n,i,t.t),this.eco.set(s,o)}}return}if(t.tipo==="sali"){let i=this.mezzi.get(t.id);if(!i||i.chi){this.manda({tipo:"no",da:this.id,a:t.da,id:t.id});return}i.chi=t.da;let n=Pa(i);this.mezzi.delete(i.id),this.eco.set("m:"+i.id,new or(n)),this.dove.set(i.id,t.da),this.manda({tipo:"tuo",da:this.id,a:t.da,id:i.id,foto:n});return}if(t.tipo==="tuo"){let i=t.foto,n=this.nuovo(i.tipo,i.p,0);xa(n,i),n.p=T.madd(n.p,n.v,e),this.mezzi.set(n.id,n),this.eco.delete("m:"+n.id),this.dove.set(n.id,this.id),this.chiesto===n.id&&!this.sopra?this.sali(n):(n.chi=null,this.chiesto=null);return}if(t.tipo==="no"){this.chiesto=null;return}if(t.tipo==="pioggia"&&this.tiene){this.pioggia(t.p,t.n);return}if(t.tipo==="gente"&&this.tiene){this.gente(t.n);return}if(t.tipo==="rendo"&&this.tiene){let i=t.foto,n=this.nuovo(i.tipo,i.p,0);xa(n,i),n.p=T.madd(n.p,n.v,e),n.chi=null,this.mezzi.set(n.id,n),this.eco.delete("m:"+n.id),this.dove.set(n.id,this.id);return}if(t.tipo==="via"){this.eco.delete("g:"+t.da);for(let[i,n]of[...this.eco])if(i.startsWith("m:")&&this.dove.get(n.vista.id)===t.da&&(this.eco.delete(i),this.tiene)){let s=this.nuovo(n.vista.tipo,n.vista.p,0);xa(s,{...n.vista,chi:null,mo:n.vista.mo||[]}),s.molle=(s.d.ruote||[]).map(()=>0),this.mezzi.set(s.id,s),this.dove.set(s.id,this.id)}}}}},du=(r,t)=>t[0]>r.x0&&t[0]<r.x1&&t[2]>r.z0&&t[2]<r.z1,ba=r=>Qr(r.x).palle;var Ba=class{constructor({ritardo:t=.09,balla:e=.04,perde:i=.08,seme:n=7}={}){this.ritardo=t,this.balla=e,this.perde=i,this.s=n>>>0||1,this.t=0,this.code=[],this.chi=new Map,this.mandati=0,this.persi=0,this.affidabili=new Map}caso(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}collega(t){this.chi.set(t.id,t),t.manda=e=>this.manda(t.id,e)}manda(t,e){let i=JSON.stringify(e);for(let n of this.chi.keys()){if(n===t)continue;if(this.mandati++,e.tipo==="foto"&&this.caso()<this.perde){this.persi++;continue}let s=this.t+Math.max(.004,this.ritardo+(this.caso()*2-1)*this.balla);if(e.tipo!=="foto"){let a=t+">"+n;s=Math.max(s,(this.affidabili.get(a)||0)+1e-6),this.affidabili.set(a,s)}this.code.push({a:n,quando:s,testo:i})}}passo(t){this.t+=t;let e=this.code.filter(i=>i.quando<=this.t);if(e.length){this.code=this.code.filter(i=>i.quando>this.t),e.sort((i,n)=>i.quando-n.quando);for(let i of e)this.chi.get(i.a)?.ricevi(JSON.parse(i.testo),this.ritardo)}}};var Sa=[[6,10],[-32,4],[-32,42],[-14,54],[10,44],[25,-2],[25,8],[25,22],[25.5,30],[31,48],[48,62],[56,30],[55,-40],[54,-50],[50,-56],[44,-52],[44,-36],[44,-10],[30,0],[14,4]],qA=8,Ca=class{constructor(t,{caso:e=Math.random}={}){this.g=t,this.caso=e,this.stato="va",this.t=0,this.punto=0,this.giri=0,this.vuole="moto",this.fermo=0,this.usa=!1,this.acro=!1}mezzo(t){let e=this.g,i=e.mezzi.get(t);if(i)return{p:i.p,q:i.q,libero:!i.chi||i.chi===e.id,tipo:i.tipo};let n=e.eco.get("m:"+t);return n?{p:n.vista.p,q:n.vista.q,libero:!n.vista.chi,tipo:n.vista.tipo}:null}comando(t){let e=this.g,i=e.corpo;this.t+=t;let n={x:0,z:0},s=(A,c,h=1)=>{let u=A-i.p[0],p=c-i.p[2],d=Math.hypot(u,p)||1;return n.x=u/d*h,n.z=p/d*h,d};if(this.usa)return this.usa=!1,n;if(e.sopra){let A=e.mezzi.get(e.sopra);if(!A)return n;this.stato!=="guida"&&(this.stato="guida",this.t=0,this.punto=this.vicino(A.p));let{su:c,avanti:h,destra:u}=Ze(A),p=(I,L)=>({x:0,z:0,mezzo:{gas:I,sterzo:Math.max(-1,Math.min(1,L))}});if(!A.contatti&&!A.inAcqua)return p(A.aria>.3&&A.aria<1.1&&this.acro?1:0,0);this.acro=this.caso()<.5;let[d,M]=Sa[this.punto],f=Math.hypot(d-A.p[0],M-A.p[2]);if(f<4.5&&(this.punto=(this.punto+1)%Sa.length,this.punto===0&&this.giri++),this.punto>=qA-2&&this.punto<=qA&&A.p[2]>-4&&(d=25,M=A.p[2]+6),c[1]<.6)return p(1,0);if(this.rincorsa)return A.p[2]<9&&(this.rincorsa=!1,this.punto=qA-1,this.fermo=0),p(-1,0);let g=[h[0],h[2]],m=[u[0],u[2]],v=[(d-A.p[0])/(f||1),(M-A.p[2])/(f||1)],P=Math.atan2(v[0]*m[0]+v[1]*m[1],v[0]*g[0]+v[1]*g[1]),y=Math.hypot(A.v[0],A.v[2]),x=Math.abs(P)>.5&&y>9?-.5:Math.abs(P)>1.2?.55:1,w=P*1.8;if(this.fermo=y<1?this.fermo+t:0,this.fermo>2.5){if(Math.abs(A.p[0]-27)<6&&A.p[2]>27&&A.p[2]<41)return this.rincorsa=!0,p(-1,0);x=-1,w=-w,this.fermo>3.8&&(this.fermo=0)}if(this.giri>=1||this.t>70){if(y<2)return this.usa=!0,this.stato="cammina",this.t=0,this.giri=0,{x:0,z:0,usa:!0};x=-.6}return p(x,w)}if(this.stato==="guida"&&(this.stato="cammina",this.t=0),this.stato==="cammina"){let A=[...e.eco.entries()].find(([c])=>c.startsWith("g:"))?.[1]?.vista;if(A&&!A.m){let c=Math.hypot(A.p[0]-i.p[0],A.p[2]-i.p[2]);c>2.6&&s(A.p[0],A.p[2],c>8?1:.6),n.corri=c>8}return this.t>12&&(this.stato="va",this.t=0,this.vuole=this.caso()<.6?"moto":"quad"),n}let a=this.mezzo(this.vuole);if((!a||!a.libero)&&(this.vuole=this.vuole==="moto"?"quad":"moto",a=this.mezzo(this.vuole)),!a||!a.libero)return this.stato="cammina",this.t=6,n;let o=T.add(a.p,zt.ruota(a.q,Pi[a.tipo].sedile)),l=s(o[0],o[2],1);return n.corri=l>5,l<1.9?(this.usa=!0,{x:0,z:0,usa:!0}):(this.t>25&&(this.t=0,this.vuole=this.vuole==="moto"?"quad":"moto"),n)}vicino(t){let e=0,i=1/0;return Sa.forEach(([n,s],a)=>{let o=Math.hypot(n-t[0],s-t[2]);o<i&&(i=o,e=a)}),(e+1)%Sa.length}};var wi=new URLSearchParams(location.search),Ta=[.03,.09,.18],Gr={indietro:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',aiuto:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.4 2.4c-.7.3-1 .9-1 1.6v.4"/><path d="M12 17.2v.1"/></svg>',rete:'<svg viewBox="0 0 24 24"><circle cx="6" cy="17" r="2"/><circle cx="18" cy="7" r="2"/><path d="M8 15.5l8-7"/></svg>',palle:'<svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4"/><circle cx="16" cy="9" r="4"/><circle cx="17" cy="18" r="2.5"/></svg>',intero:'<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>'},$f={colore:"#5ee1ff",coloreCapelli:"#2a5a8a",pelle:"#f1c7a3"},t0={colore:"#f68187",coloreCapelli:"#424c6e",pelle:"#f9e6cf"},fu=new b(0,1,0),jA=r=>Math.round(r).toLocaleString("it-IT"),Ia=class{constructor(t){this.radice=t,this.tocco=matchMedia("(pointer: coarse)").matches,document.body.classList.toggle("tocco",this.tocco),this.dom(),this.arena=WA(),this.tu=new Hr("tu",this.arena,{tiene:!0,palle:4e3,folla:Math.min(200,+(wi.get("gente")??20))}),this.conAmica=wi.get("amica")!=="0",this.rete=new Ba({ritardo:Ta[1],balla:.03,perde:.05}),wi.has("rete")&&(this.rete.ritardo=Math.max(.005,+wi.get("rete")/1e3)),this.rete.collega(this.tu),this.conAmica&&(this.mia=new Hr("mia",WA(),{capo:"tu",partenza:[9,0,9],palle:0}),this.rete.collega(this.mia),this.amica=new Ca(this.mia));let e=yh(this.tela);Object.assign(this,{renderer:e.renderer,sc:e.sc,sole:e.sole,qualita:e.qualita}),e.stelle.visible=!1,this.renderer.info.autoReset=!1,this.resa=e.qualita==="alta"&&Ur.puo(e.renderer)?new Ur(e.renderer,{trasparente:!0,sole:1,emissivo:1.4}):null,this.camera=new ce(55,1,.3,400),Dh(wi.has("ora")?+wi.get("ora"):11),this.sole.shadow.mapSize.set(2048,2048),this.prBase=this.renderer.getPixelRatio(),mh([]),this.scena=new da(this.arena,this.sc),this.viste=new Map;for(let i of this.arena.mezzi){let n=new fa(i.tipo);this.sc.add(n.gruppo,n.ombraG),this.viste.set(i.tipo,n)}this.gatti={tu:this.gatto($f),mia:this.conAmica?this.gatto(t0):null},this.vPalle=new ga(this.sc,this.tu.palle.max),this.vFolla=new ma(this.sc,300),this.part=new va(this.sc,700),this.cam={yaw:0,pitch:.36,dist:9,voluta:9,centro:new b(0,1.3,6),mossa:-9},this.tasti=new Set,this.leva=null,this.dita=new Map,this.tastiDito={usa:!1,salta:!1,trucco:!1},this.prima=performance.now(),this.resto=0,this.tScritta=0,this.lenti=0,this.corsa=!1,this.fermoDa=0,this.misure={fisica:0,fotogrammi:0,t0:performance.now(),fps:0},this.comandi(),addEventListener("resize",()=>this.misura()),this.misura(),wi.has("palle")&&this.tu.pioggia([0,0,14],Math.min(1500,+wi.get("palle"))),this.ciclo=this.ciclo.bind(this),requestAnimationFrame(this.ciclo)}dom(){let t=this.radice;t.innerHTML=`
      <canvas id="tela" tabindex="0"></canvas>
      <div class="ar-su">
        <a class="ar-tasto" href="./" title="Torna a Nookora" aria-label="Torna a Nookora">${Gr.indietro}</a>
        <span class="ar-spazio"></span>
        <span class="ar-punti" title="I punti delle acrobazie">0</span>
        <span class="ar-spazio"></span>
        <button class="ar-tasto" data-crash title="Il crash test">${Gr.palle}</button>
        <button class="ar-tasto" data-rete title="Quanto ritardo ha Mia (la rete finta)">${Gr.rete}<span class="ar-piano">90 ms</span></button>
        <button class="ar-tasto ar-solo-largo" data-intero aria-label="Schermo intero">${Gr.intero}</button>
        <button class="ar-tasto" data-aiuto aria-label="I comandi">${Gr.aiuto}</button>
      </div>
      <div class="ar-crash">
        <button class="ar-tasto" data-pioggia>Pioggia di palle</button>
        <button class="ar-tasto" data-gente>Folla +20</button>
        <div class="ar-misure"></div>
      </div>
      <div class="ar-combo"><div class="ar-nomi"></div><div class="ar-per"></div></div>
      <div class="ar-esito"></div>
      <div class="ar-veloce"><b>0</b>km/h</div>
      <div class="ar-aiuto tastiera"></div>
      <div class="ar-dito"><div class="ar-leva"><i></i></div>
        <div class="ar-tasti"><button class="ar-tondo" data-dito="trucco">Trucco</button><button class="ar-tondo" data-dito="salta">Salta</button><button class="ar-tondo grande" data-dito="usa">Usa</button></div></div>
      <div class="ar-carta"><div>
        <h2>L'arena</h2>
        <p>Il <b>quad</b>, la <b>moto da cross</b> e la <b>moto d'acqua</b> (nella piscina); i <b>pattini</b> sulle rastrelliere, e lo skatepark con le ringhiere a nord-ovest; le rampe, i dossi, il giro della morte, i tappeti elastici.</p>
        <p class="ar-solo-tastiera"><b>WASD</b> muovi · <b>Maiusc</b> o un tocco di <b>Ctrl</b> corri · <b>Spazio</b> salta · <b>clic</b> o <b>F</b> Usa · <b>destro in aria</b> un trucco · <b>trascina</b> la vista · <b>rotella</b> avvicina</p>
        <p class="ar-solo-dito"><b>Il pollice a sinistra</b> muove · <b>Usa</b> · <b>Salta</b> · <b>Trucco</b> in aria · <b>trascina a destra</b> la vista · <b>due dita</b> avvicinano</p>
        <p>In sella: avanti gas, indietro frena e poi la retromarcia, di lato sterzi. In aria il trucco cambia con la direzione: <b>avanti o indietro</b> il giro, <b>di lato</b> l'avvitamento, <b>niente</b> il superman. Atterri pulito: punti × combo e una spinta; a trucco non finito, cadi.</p>
        <p>Il <b>crash test</b> (le palle, in alto) fa piovere palle vere e aggiunge gente. <b>Mia</b> gioca da un'altra macchina con la rete finta.</p>
        <button class="ar-tasto" data-chiudi>Gioca</button>
      </div></div>`,this.tela=t.querySelector("#tela"),this.combo=t.querySelector(".ar-combo"),this.esito=t.querySelector(".ar-esito"),this.puntiDom=t.querySelector(".ar-punti"),this.veloce=t.querySelector(".ar-veloce"),this.aiuto=t.querySelector(".ar-aiuto"),this.levaDom=t.querySelector(".ar-leva"),this.carta=t.querySelector(".ar-carta"),this.crash=t.querySelector(".ar-crash"),this.misureDom=t.querySelector(".ar-misure"),t.querySelector("[data-aiuto]").onclick=()=>this.carta.classList.add("su"),t.querySelector("[data-chiudi]").onclick=()=>{this.carta.classList.remove("su"),this.tela.focus()},this.carta.onclick=i=>{i.target===this.carta&&this.carta.classList.remove("su")},t.querySelector("[data-crash]").onclick=()=>this.crash.classList.toggle("su"),t.querySelector("[data-pioggia]").onclick=()=>{let i=this.tu.corpo.p;this.tu.pioggia([i[0],0,i[2]+6],300),this.tela.focus()},t.querySelector("[data-gente]").onclick=()=>{this.tu.gente(20),this.tela.focus()},t.querySelector("[data-intero]").onclick=()=>this.schermoIntero();for(let i of t.querySelectorAll(this.tocco?".ar-solo-tastiera":".ar-solo-dito"))i.remove();let e=t.querySelector("[data-rete]");e.onclick=()=>{let i=(Ta.indexOf(this.rete.ritardo)+1)%Ta.length;this.rete.ritardo=Ta[i<0?1:i],e.querySelector(".ar-piano").textContent=Math.round(this.rete.ritardo*1e3)+" ms"},wi.get("amica")==="0"&&e.remove(),this.nome=document.createElement("div"),this.nome.className="ar-nome",this.nome.textContent="Mia",t.appendChild(this.nome);try{localStorage.getItem("nookora.arena.vista")||(this.carta.classList.add("su"),localStorage.setItem("nookora.arena.vista","1"))}catch{}}async schermoIntero(){try{if(document.fullscreenElement){await document.exitFullscreen();return}await document.documentElement.requestFullscreen(),await navigator.keyboard?.lock?.(["KeyW","KeyA","KeyS","KeyD","Escape"])}catch{}this.tela.focus()}gatto(t){let e=new la(t);return this.sc.add(e.gruppo),e.ombra=e.gruppo.children[1],e.pattini=$h(),e.pattini.visible=!1,e.corpo.add(e.pattini),e}misura(){let t=innerWidth,e=innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t<e?68:55,this.camera.updateProjectionMatrix(),this.resa&&this.resa.misura(),this.part?.misura(e*this.renderer.getPixelRatio(),this.camera.fov)}comandi(){let t=this.tela;addEventListener("keydown",i=>{if(i.target.closest?.(".ar-carta")&&i.key!=="Escape")return;if(i.key==="Escape"){this.carta.classList.toggle("su");return}let n=i.key.length===1?i.key.toLowerCase():i.key;(i.ctrlKey||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(n))&&i.preventDefault(),n==="Control"&&!i.repeat&&(this.corsa=!this.corsa),i.repeat||(n==="f"&&(this.usaUnaVolta=!0),n===" "&&(this.saltoUnaVolta=!0),n==="r"&&(this.raddrizzaUnaVolta=!0)),this.tasti.add(n),n==="Shift"&&this.tasti.add("shift")}),addEventListener("keyup",i=>{let n=i.key.length===1?i.key.toLowerCase():i.key;this.tasti.delete(n),n==="Shift"&&this.tasti.delete("shift")}),addEventListener("blur",()=>this.tasti.clear()),addEventListener("contextmenu",i=>i.preventDefault()),t.addEventListener("wheel",i=>{i.preventDefault(),this.cam.voluta=Math.min(40,Math.max(3.5,this.cam.voluta*(i.deltaY>0?1.12:1/1.12)))},{passive:!1}),t.addEventListener("mousedown",i=>{i.button===1&&i.preventDefault()}),t.addEventListener("auxclick",i=>{i.button===1&&i.preventDefault()}),t.addEventListener("pointerdown",i=>{if(t.setPointerCapture(i.pointerId),t.focus(),i.pointerType==="mouse"&&i.button===2){this.truccoUnaVolta=!0,this.truccoGiu=!0;return}let n={x:i.clientX,y:i.clientY,x0:i.clientX,y0:i.clientY,t0:performance.now(),tipo:i.pointerType,tasto:i.button};if(i.pointerType==="touch"&&i.clientX<innerWidth*.45&&i.clientY>innerHeight*.3&&!this.leva&&(n.leva=!0,this.leva={id:i.pointerId,x0:i.clientX,y0:i.clientY,x:0,y:0},this.levaDom.style.display="block",this.posaLeva()),this.dita.set(i.pointerId,n),i.pointerType==="touch"&&this.dita.size>=2){let[s,a]=[...this.dita.values()].filter(o=>!o.leva);s&&a&&(this.pizzico={d:Math.hypot(s.x-a.x,s.y-a.y),voluta:this.cam.voluta})}}),t.addEventListener("pointermove",i=>{let n=this.dita.get(i.pointerId);if(!n)return;let s=i.clientX-n.x,a=i.clientY-n.y;if(n.x=i.clientX,n.y=i.clientY,n.leva){let A=this.leva,c=i.clientX-A.x0,h=i.clientY-A.y0,u=Math.hypot(c,h);u>50&&(A.x0+=c*(1-50/u),A.y0+=h*(1-50/u),c=i.clientX-A.x0,h=i.clientY-A.y0,this.posaLeva());let p=Math.min(1,Math.max(0,(Math.hypot(c,h)-6)/36)),d=Math.hypot(c,h)||1;A.x=c/d*p,A.y=-h/d*p,this.levaDom.firstElementChild.style.transform=`translate(${c}px, ${h}px)`;return}let o=[...this.dita.values()].filter(l=>!l.leva);if(this.pizzico&&o.length>=2){let l=Math.hypot(o[0].x-o[1].x,o[0].y-o[1].y);this.cam.voluta=Math.min(40,Math.max(3.5,this.pizzico.voluta*this.pizzico.d/Math.max(20,l)));return}if(n.tipo==="mouse"&&i.buttons&4){let l=.004*this.cam.dist,A=this.cam.yaw,c=this.cam.sposta||(this.cam.sposta=[0,0]);c[0]+=(Math.cos(A)*s+Math.sin(A)*a)*l,c[1]+=(-Math.sin(A)*s+Math.cos(A)*a)*l,Math.hypot(n.x-n.x0,n.y-n.y0)>6&&(n.trascinato=!0);return}if(n.tipo!=="mouse"||i.buttons&1){let l=n.tipo==="touch"?.007:.0055;this.cam.yaw-=s*l,this.cam.pitch=Math.min(1.25,Math.max(-.05,this.cam.pitch+a*.0045)),Math.hypot(n.x-n.x0,n.y-n.y0)>6&&(n.trascinato=!0,this.cam.mossa=performance.now()/1e3)}}),addEventListener("pointerup",i=>{i.button===2&&(this.truccoGiu=!1)});let e=i=>{let n=this.dita.get(i.pointerId);if(this.dita.delete(i.pointerId),!!n){if(n.leva){this.leva=null,this.levaDom.style.display="none",this.levaDom.firstElementChild.style.transform="";return}this.dita.size<2&&(this.pizzico=null),n.tipo==="mouse"&&n.tasto===0&&!n.trascinato&&performance.now()-n.t0<450&&i.type==="pointerup"&&(this.usaUnaVolta=!0),n.tipo==="mouse"&&n.tasto===1&&!n.trascinato&&i.type==="pointerup"&&(this.cam.sposta=null)}};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e);for(let i of this.radice.querySelectorAll("[data-dito]")){let n=i.dataset.dito;i.addEventListener("pointerdown",a=>{a.preventDefault(),i.setPointerCapture(a.pointerId),this.tastiDito[n]=!0,i.classList.add("giu"),n==="usa"&&(this.usaUnaVolta=!0),n==="trucco"&&(this.truccoUnaVolta=!0),n==="salta"&&(this.saltoUnaVolta=!0),navigator.vibrate?.(8)});let s=()=>{this.tastiDito[n]=!1,i.classList.remove("giu")};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s)}}posaLeva(){this.levaDom.style.left=this.leva.x0+"px",this.levaDom.style.top=this.leva.y0+"px"}comando(){let t=this.tasti,e=(t.has("d")||t.has("ArrowRight")?1:0)-(t.has("a")||t.has("ArrowLeft")?1:0),i=(t.has("w")||t.has("ArrowUp")?1:0)-(t.has("s")||t.has("ArrowDown")?1:0),n=t.has(" ")||this.tastiDito.salta||this.saltoUnaVolta,s=t.has("f")||this.usaUnaVolta,a=t.has("r")||this.raddrizzaUnaVolta,o=t.has("shift")||t.has("Control")||this.corsa,l=this.truccoUnaVolta||this.tastiDito.trucco,A=null;this.leva&&(e=this.leva.x,i=this.leva.y,o=o||Math.hypot(e,i)>.94);let c=navigator.getGamepads?[...navigator.getGamepads()].find(v=>v&&v.connected):null;if(c){let v=c.axes,P=w=>Math.abs(w)<.18?0:w;(P(v[0])||P(v[1]))&&(e=P(v[0]),i=-P(v[1]),o=Math.hypot(e,i)>.95),(P(v[2])||P(v[3]))&&(this.cam.yaw-=P(v[2])*.05,this.cam.pitch=Math.min(1.25,Math.max(-.05,this.cam.pitch+P(v[3])*.03)),this.cam.mossa=performance.now()/1e3);let y=w=>!!c.buttons[w]?.pressed;y(0)&&(s=!0),y(1)&&(n=!0),y(2)?(l=!this.padTrucco,this.padTruccoTenuto=!0):this.padTruccoTenuto=!1,this.padTrucco=y(2),y(3)&&(a=!0);let x=(c.buttons[7]?.value||0)-(c.buttons[6]?.value||0);Math.abs(x)>.05&&(A=x)}let h=Math.hypot(e,i);h>1&&(e/=h,i/=h),this.fermoDa=h<.1?this.fermoDa+1:0,this.fermoDa>40&&(this.corsa=!1),this.usaUnaVolta=!1,this.truccoUnaVolta=!1,this.saltoUnaVolta=!1,this.raddrizzaUnaVolta=!1;let u=this.cam.yaw,p=Math.sin(u),d=Math.cos(u),M=-Math.cos(u),f=Math.sin(u),g=!!this.truccoGiu||!!this.tastiDito.trucco||!!this.padTruccoTenuto,m={x:p*i+M*e,z:d*i+f*e,corri:o,salta:n,usa:s,raddrizza:a,trucco:l,truccoTenuto:g,asse:{x:e,y:i}};return this.tu.sopra&&(m.mezzo={gas:A??i,sterzo:e}),m}ciclo(t){requestAnimationFrame(this.ciclo);let e=Math.min(.1,(t-this.prima)/1e3);this.prima=t,this.resto+=e;let i=0,n=performance.now(),s=this.carta.classList.contains("su")?{}:this.comando();for(;this.resto>=Pn&&i<12;)this.prima_=this.istantanea(),this.tu.passo(s),this.mia&&this.mia.passo(this.amica.comando(Pn)),this.rete.passo(Pn),this.resto-=Pn,i++,s.usa=!1,s.trucco=!1,s.salta&&!this.tasti.has(" ")&&!this.tastiDito.salta&&i>2&&(s.salta=!1);if(i===12&&(this.resto=0),this.misure.fisica+=performance.now()-n,this.alfa=Math.max(0,Math.min(1,this.resto/Pn)),this.scena.passo(this.tu.ora),this.eventi(),this.disegnaCose(e),this.part.passo(e),this.telecamera(e),this.scritte(),this.qualita==="alta"){let a=this.cam.centro,o=8,l=Math.round(a.x/o)*o,A=Math.round(a.z/o)*o;(l!==this.soleX||A!==this.soleZ)&&(this.soleX=l,this.soleZ=A,wh(this.sole,l,A,34,0),this.renderer.shadowMap.needsUpdate=!0)}this.resa?(this.resa.scena(this.sc,this.camera),this.resa.effetti(this.camera)):this.renderer.render(this.sc,this.camera),this.adatta(e),this.contaMisure(),this.renderer.info.reset()}adatta(t){this.dtMedio=(this.dtMedio??.016)*.94+Math.min(t,.1)*.06;let e=performance.now();if(e-(this.cambiatoA||0)<1200)return;let i=this.renderer;if(this.dtMedio>.021){if(this.cambiatoA=e,this.resa&&this.resa.alleggerisci())return;let n=i.getPixelRatio();if(this.resa&&n<=.72){this.resa.libera(),this.resa=null;return}n>.5&&(i.setPixelRatio(Math.max(.5,n*.82)),this.misura())}else if(this.dtMedio<.0125&&e-(this.cambiatoA||0)>6e3){this.cambiatoA=e;let n=i.getPixelRatio();n<this.prBase?(i.setPixelRatio(Math.min(this.prBase,n*1.12)),this.misura()):this.resa&&this.resa.appesantisci()}}contaMisure(){let t=this.misure;t.fotogrammi++;let e=performance.now();if(this.ultimaInfo={calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles},e-t.t0<500)return;let i=(e-t.t0)/1e3;if(t.fps=t.fotogrammi/i,t.msFisica=t.fisica/t.fotogrammi,t.fotogrammi=0,t.fisica=0,t.t0=e,!this.crash.classList.contains("su"))return;let n=this.tu.palle,s=this.ultimaInfo||this.renderer.info.render;this.misureDom.innerHTML=`<b>${Math.round(t.fps)}</b> fps · fisica <b>${t.msFisica.toFixed(1)}</b> ms<br>palle <b>${n.n}</b> (sveglie ${n.svegli}, inquadrate ${this.vPalle.visibili}) · gente <b>${this.tu.folla.gatti.length}</b><br>disegni <b>${s.calls}</b> · triangoli ${jA(s.triangles)} · pixel ×${this.renderer.getPixelRatio().toFixed(2)}`}eventi(){for(let t of this.tu.eventi)t.tipo==="trucchi"?this.fineCombo(t):t.tipo==="atterrato"&&t.p?this.part.polvere(t.p,Math.min(1.5,t.aria||.6)):t.tipo==="elastico"?this.part.polvere(t.p,.6):t.tipo==="tuffo"?this.part.schizzi(this.tu.corpo.p):t.tipo==="spinta"?this.lampo("Spinta"):t.tipo==="turbo"?(this.lampo(["","Turbo","Turbo!","Super turbo!"][t.livello]),this.part.stelle(t.p,t.livello),this.scossa=.15*t.livello,navigator.vibrate?.(20*t.livello)):t.tipo==="pattini"?this.lampo("Pattini"):t.tipo==="scarpe"?this.lampo("Senza pattini"):t.tipo==="pioggia"?this.lampo(`${t.n} palle`):t.tipo==="trucco"||t.tipo==="aggancio"?navigator.vibrate?.(6):t.tipo==="botta"&&(this.scossa=Math.min(.5,t.forza*.04));this.tu.eventi.length=0,this.mia&&(this.mia.eventi.length=0)}fineCombo(t){clearTimeout(this.tEsito),t.esito==="pulito"?(this.esito.className="ar-esito su",this.esito.innerHTML=`<b>+${jA(t.punti)}</b>${t.combo>1?`<small>combo ×${t.combo}</small>`:""}`,this.part.stelle(t.p,t.combo),this.puntiDom.textContent=jA(this.tu.trucchi.totale),this.puntiDom.classList.remove("salta"),this.puntiDom.offsetWidth,this.puntiDom.classList.add("salta"),navigator.vibrate?.([10,40,14])):(this.esito.className="ar-esito su caduta",this.esito.innerHTML="<b>Caduta</b>",this.part.polvere(t.p,1.4),navigator.vibrate?.(40)),this.tEsito=setTimeout(()=>{this.esito.className="ar-esito"},1300)}lampo(t){this.combo.classList.contains("su")||(clearTimeout(this.tEsito),this.esito.className="ar-esito su piccolo",this.esito.innerHTML=`<b>${t}</b>`,this.tEsito=setTimeout(()=>{this.esito.className="ar-esito"},900))}istantanea(){let t=this.tu,e=new Map;e.set("gatto",[...t.corpo.p]);for(let[i,n]of t.mezzi)e.set(i,{p:[...n.p],q:[...n.q]});return e}fra(t,e){if(!t)return e;let i=this.alfa??1;return Math.hypot(e[0]-t[0],e[2]-t[2])>2?e:[t[0]+(e[0]-t[0])*i,t[1]+(e[1]-t[1])*i,t[2]+(e[2]-t[2])*i]}suolo(t){let e=this.arena.mondo.raggio([t[0],t[1]+.5,t[2]],[0,-1,0],30);return e===null?null:t[1]+.5-e}disegnaCose(t){let e=this.tu;for(let[a,o]of this.viste){let l=e.mezzi.get(a),A=e.eco.get("m:"+a),c=l||A?.vista;if(!c)continue;let h=l&&this.prima_&&this.prima_.get(a);if(h){let M=new $t(...h.q).slerp(new $t(...l.q),this.alfa??1);c={...l,p:this.fra(h.p,l.p),q:[M.x,M.y,M.z,M.w]}}o.aggiorna(c,t,this.suolo(c.p));let u=l?e.sopra===a?e.trucchi.figura():null:Mn.daFoto(A.vista.tr);o.figura=u;let p=YA(u);if(p&&o.gruppo.quaternion.multiply(new $t().setFromAxisAngle(new b(...p[0]),p[1])),l?l.rotaia:A.vista.ro){let M=l?l.rotaia.h:.45,f=c.v,g=Math.hypot(f[0],f[2])||1,m=[c.p[0],c.p[1]-M,c.p[2]],v=[f[0]/g,0,f[2]/g];this.part.scintille(m,v),this.part.scintille(m,v),o.tipo==="moto"&&this.part.scintille([m[0]-v[0]*.75,m[1],m[2]-v[2]*.75],v)}}let i=e.sopra&&e.mezzi.get(e.sopra);if(i){let a=Ze(i),o=Math.hypot(i.v[0],i.v[2]),l=[i.p[0]-a.avanti[0]*.8,i.p[1]-.6,i.p[2]-a.avanti[2]*.8];if(i.contatti&&(o>9||i.deriva)&&Math.random()<(i.deriva?.9:.4)&&this.part.sbuffo(l,a.avanti),i.deriva&&i.contatti){let A=i.deriva.carica;this.part.derapa(l,A>1.6?3:A>1?2:A>.5?1:0)}i.inAcqua&&o>4&&Math.random()<.5&&this.part.sbuffo([l[0],this.arena.mondo.pelo(l[0],l[2])??l[1],l[2]],a.avanti,3)}let n=e.corpo;this.metti(this.gatti.tu,e.sopra?{m:e.sopra}:{p:this.fra(this.prima_&&this.prima_.get("gatto"),n.p),v:n.v,dir:n.dir,aTerra:n.aTerra,nuota:n.nuota,botta:n.botta>0,pattini:n.pattini,rotaia:!!n.rotaia},e.sopra?null:e.trucchi.figura(),t),n.rotaia&&this.part.scintille(n.p,[n.dir[0],0,n.dir[1]]);let s=e.eco.get("g:mia");if(this.gatti.mia&&s){let a=s.vista;this.metti(this.gatti.mia,a.m?{m:a.m}:{p:a.p,v:a.v,dir:[Math.sin(a.d),Math.cos(a.d)],aTerra:!!(a.f&1),nuota:!!(a.f&2),botta:!!(a.f&8),pattini:!!a.pt,rotaia:!!a.ro},Mn.daFoto(a.tr),t);let o=this.gatti.mia.gruppo,l=new b;o.getWorldPosition(l),l.y+=2.55,l.project(this.camera);let A=l.z<1&&Math.abs(l.x)<1.1&&Math.abs(l.y)<1.1;this.nome.style.display=A?"block":"none",A&&(this.nome.style.transform=`translate(${(l.x+1)/2*innerWidth}px, ${(1-l.y)/2*innerHeight}px) translate(-50%, -100%)`)}else this.nome.style.display="none";e.palle&&this.vPalle.aggiorna(e.palle,this.camera),this.vFolla.aggiorna(e.folla.gatti,t)}metti(t,e,i,n){if(t.corpo.position.x=0,t.corpo.position.z=0,e.m){let l=this.viste.get(e.m);t.gruppo.parent!==l.gruppo&&(l.gruppo.add(t.gruppo),t.corpo.rotation.set(0,0,0)),t.gruppo.position.set(...Zh[l.tipo]),t.gruppo.quaternion.identity();let A=l.figura?.nome==="superman"?Math.sin(l.figura.k*Math.PI):0,c=l.figura?.nome==="senzamani"?Math.sin(l.figura.k*Math.PI):0;A&&(t.gruppo.position.y+=A*.6,t.gruppo.position.z-=A*.4,t.gruppo.rotateX(-A*1.25)),t.dir.set(0,1),t.seduto=!A,t.cammina=!1,t.ombra.visible=!1,t.pattini.visible=!1,t.corpo.rotation.x=0,t.aggiorna(n),c&&(t.gruppo.position.y+=c*.25,t.maniG[0].position.y+=c*.7,t.maniG[1].position.y+=c*.7);return}t.gruppo.parent!==this.sc&&this.sc.add(t.gruppo),t.seduto=!1,t.pattini.visible=!!e.pattini,t.gruppo.position.set(...e.p),t.gruppo.quaternion.identity();let s=Math.hypot(e.v[0],e.v[2]);t.guarda(e.dir[0],e.dir[1]),t.cammina=!e.pattini&&s>.4&&(e.aTerra||e.nuota),t.corre=s>4.6,t.velocita=s,t.capriola=e.botta&&!e.aTerra,t.capriola&&(t.corpo.rotation.x+=n*11),t.svelto=e.rotaia?3:1,e.rotaia&&t.guarda(-e.dir[1],e.dir[0]);let a=YA(i);if(a||i?.nome==="superman"){let l=new $t;if(a){let c=Math.atan2(e.dir[0],e.dir[1]),h=new b(...a[0]).applyAxisAngle(new b(0,1,0),c);l.setFromAxisAngle(h,a[1])}else{let c=Math.atan2(e.dir[0],e.dir[1]),h=Math.sin(i.k*Math.PI);l.setFromAxisAngle(new b(1,0,0).applyAxisAngle(new b(0,1,0),c),-h*1.4)}t.gruppo.quaternion.copy(l);let A=fu.clone().sub(fu.clone().applyQuaternion(l));t.gruppo.position.add(A)}let o=this.suolo(e.p);if(t.ombra.visible=o!==null&&!e.nuota&&!a,o!==null){t.ombra.position.y=o-e.p[1]+.02;let l=Math.max(.35,1-(e.p[1]-o)/5);t.ombra.scale.setScalar(l)}e.aTerra&&t.unoInAria&&t.rimbalza(),t.unoInAria=!e.aTerra&&!e.nuota&&!e.rotaia,t.aggiorna(n),e.rotaia&&(t.corpo.position.y-=.12)}telecamera(t){let e=this.tu,i=this.cam,n=e.corpo,s=e.sopra&&e.mezzi.get(e.sopra),a=this.prima_&&this.prima_.get(s?s.id:"gatto"),o=new b(...this.fra(a&&(a.p||a),s?s.p:n.p));o.y+=s?.9:1.3,i.sposta&&(o.x+=i.sposta[0],o.z+=i.sposta[1]),i.centro.lerp(o,Math.min(1,t*(s?9:12)));let l=performance.now()/1e3-i.mossa>1.4,A=null,c=0;if(s){let g=Ze(s),m=Math.hypot(s.v[0],s.v[2]);g.su[1]>.5&&m>3&&(A=Math.atan2(g.avanti[0],g.avanti[2]),c=1.2+m*.12)}else(this.tocco||n.pattini||this.leva)&&Math.hypot(n.v[0],n.v[2])>1.5&&(A=Math.atan2(n.v[0],n.v[2]),c=n.rotaia?2.5:1.1);if(A!==null&&l){let g=A-i.yaw;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;!s&&Math.abs(g)>2.4&&(g*=.15),i.yaw+=g*Math.min(1,t*c),s&&(i.pitch+=(.3-i.pitch)*Math.min(1,t*1.5))}let h=i.voluta*(s?1.15:1);i.dist+=(h-i.dist)*Math.min(1,t*6);let u=Math.cos(i.pitch),p=new b(-Math.sin(i.yaw)*u,Math.sin(i.pitch),-Math.cos(i.yaw)*u).multiplyScalar(i.dist);this.camera.position.copy(i.centro).add(p),this.camera.position.y<.6&&i.centro.y>-1&&(this.camera.position.y=.6),this.scossa>.01&&(this.camera.position.x+=(Math.random()-.5)*this.scossa,this.camera.position.y+=(Math.random()-.5)*this.scossa,this.scossa*=.86),this.camera.lookAt(i.centro);let d=innerWidth<innerHeight?68:55,M=s?Math.hypot(s.v[0],s.v[2]):0,f=d+Math.min(12,Math.max(0,M-8)*.55)+(s&&s.turbo>0?4:0);Math.abs(this.camera.fov-f)>.05&&(this.camera.fov+=(f-this.camera.fov)*Math.min(1,t*3),this.camera.updateProjectionMatrix())}scritte(){let t=this.tu,e=t.sopra&&t.mezzi.get(t.sopra),i=t.corpo,n=t.trucchi.inCorso(),s=n.nomi.join("|");if(s!==this.comboDi){this.comboDi=s,this.combo.classList.toggle("su",n.combo>0);let u=this.combo.querySelector(".ar-nomi");u.innerHTML=n.nomi.map((p,d)=>`<span${d===n.nomi.length-1?' class="nuovo"':""}>${p}</span>`).join(""),this.combo.querySelector(".ar-per").textContent=n.combo>1?"×"+n.combo:""}let a=e?Math.hypot(e.v[0],e.v[2]):i.pattini?Math.hypot(i.v[0],i.v[2]):0;e||i.pattini?(this.veloce.style.display="block",this.veloce.firstElementChild.textContent=Math.round(a*3.6)):this.veloce.style.display="none";let o=e?!e.contatti&&!e.inAcqua:!i.aTerra&&!i.nuota;this.radice.querySelector('[data-dito="trucco"]')?.classList.toggle("spento",!o);let l="";if(e)l="scendi";else{let u=[...this.viste.keys()].some(d=>{let M=t.mezzi.get(d)||t.eco.get("m:"+d)?.vista;return M&&!M.chi&&Math.hypot(M.p[0]-i.p[0],M.p[2]-i.p[2])<2.6}),p=(this.arena.pattini||[]).some(d=>Math.hypot(d.x-i.p[0],d.z-i.p[2])<2.2);u?l="sali":p&&(l=i.pattini?"togli i pattini":"metti i pattini")}let A=l+(e?1:0)+(i.pattini?1:0);if(A===this.aiutoDi)return;this.aiutoDi=A;let c=[];l&&c.push(`<span class="ora"><b>${this.tocco?"Usa":"clic o F"}</b> ${l}</span>`),this.tocco||c.push(e?"<span><b>W</b> gas · <b>S</b> freno · <b>A D</b> sterzo</span>":"<span><b>WASD</b> muovi · <b>Ctrl</b> corri</span>","<span><b>Spazio</b> salta</span>","<span><b>destro</b> in aria: trucco</span>"),this.aiuto.innerHTML=c.join("");let h=this.radice.querySelector('[data-dito="usa"]');h&&(h.textContent=l==="sali"?"Sali":l==="scendi"?"Scendi":l?"Pattini":"Usa")}};var gu=document.getElementById("arena");Ph()?globalThis.arena=new Ia(gu):gu.innerHTML=`<p style="padding:24px;color:#958ead">L'arena ha bisogno del 3D (WebGL), e questo browser non ce l'ha.</p>`;
