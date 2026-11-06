var Co="160";var Kc=1,zA=2,Mi=3,Li=0,pe=1;var Zc=0;var $i=100;var To=204,Io=205;var $c=0,Qu=1,Gu=2,Ti=0,ku=1,Vu=2,Xu=3,Wu=4,Yu=5,qu=6;var th=300,Vn=301,Xn=302,Lo=303,Ro=304,as=306,zo=1e3,Ye=1001,Uo=1002,ce=1003,bl=1004;var Ys=1005;var le=1006,ju=1007;var Ra=1008;var qe=1009;var UA=1012,eh=1013,ai=1014,Ci=1015,Ri=1016,ih=1017,nh=1018,rn=1020;var xe=1023;var an=1026,Wn=1027,rh=1028,ah=1029;var sh=1031,oh=1033,qs=33776,js=33777,Js=33778,Ks=33779,Dl=35840,El=35841,_l=35842,Bl=35843,Ah=36196,Sl=37492,Cl=37496,Tl=37808,Il=37809,Ll=37810,Rl=37811,zl=37812,Ul=37813,Nl=37814,Ol=37815,Fl=37816,Hl=37817,Ql=37818,Gl=37819,kl=37820,Vl=37821,Zs=36492,Xl=36494,Wl=36495;var Yl=36284,ql=36285,jl=36286;var za=2300,Ua=2301,$s=2302,Jl=2400,Kl=2401,Zl=2402;var lh=3e3,sn=3001;var ri="",Zt="srgb",xi="srgb-linear",NA="display-p3",ss="display-p3-linear",Na="linear",Vt="srgb",Oa="rec709",Fa="p3";var bn=7680;var $l=35044,$e=35048;var tc="300 es",No=1035,Yn=2e3,Ha=2001,zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let n=i.indexOf(e);n!==-1&&i.splice(n,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let e=this._listeners[t.type];if(e!==void 0){t.target=this;let i=e.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,t);t.target=null}}},ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var La=Math.PI/180,Oo=180/Math.PI;function ir(){let r=4294967295*Math.random()|0,t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(ge[255&r]+ge[r>>8&255]+ge[r>>16&255]+ge[r>>24&255]+"-"+ge[255&t]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[63&e|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[255&i]+ge[i>>8&255]+ge[i>>16&255]+ge[i>>24&255]).toLowerCase()}function he(r,t,e){return Math.max(t,Math.min(e,r))}function Ju(r,t){return(r%t+t)%t}function to(r,t,e){return(1-e)*r+e*t}function ec(r){return(r&r-1)==0&&r!==0}function Fo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function fr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function De(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var at=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,s=this.y-t.y;return this.x=a*i-s*n+t.x,this.y=a*n+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},St=class r{constructor(t,e,i,n,a,s,o,A,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,s,o,A,l)}set(t,e,i,n,a,s,o,A,l){let c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=e,c[4]=a,c[5]=A,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,a=this.elements,s=i[0],o=i[3],A=i[6],l=i[1],c=i[4],h=i[7],u=i[2],p=i[5],f=i[8],g=n[0],d=n[3],m=n[6],v=n[1],M=n[4],x=n[7],y=n[2],P=n[5],w=n[8];return a[0]=s*g+o*v+A*y,a[3]=s*d+o*M+A*P,a[6]=s*m+o*x+A*w,a[1]=l*g+c*v+h*y,a[4]=l*d+c*M+h*P,a[7]=l*m+c*x+h*w,a[2]=u*g+p*v+f*y,a[5]=u*d+p*M+f*P,a[8]=u*m+p*x+f*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],A=t[6],l=t[7],c=t[8];return e*s*c-e*o*l-i*a*c+i*o*A+n*a*l-n*s*A}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],A=t[6],l=t[7],c=t[8],h=c*s-o*l,u=o*A-c*a,p=l*a-s*A,f=e*h+i*u+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return t[0]=h*g,t[1]=(n*l-c*i)*g,t[2]=(o*i-n*s)*g,t[3]=u*g,t[4]=(c*e-n*A)*g,t[5]=(n*a-o*e)*g,t[6]=p*g,t[7]=(i*A-l*e)*g,t[8]=(s*e-i*a)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,s,o){let A=Math.cos(a),l=Math.sin(a);return this.set(i*A,i*l,-i*(A*s+l*o)+s+t,-n*l,n*A,-n*(-l*s+A*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(eo.makeScale(t,e)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},eo=new St;function ch(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ku(){let r=Qa("canvas");return r.style.display="block",r}var ic={};function yr(r){r in ic||(ic[r]=!0,console.warn(r))}var nc=new St().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rc=new St().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[xi]:{transfer:Na,primaries:Oa,toReference:r=>r,fromReference:r=>r},[Zt]:{transfer:Vt,primaries:Oa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ss]:{transfer:Na,primaries:Fa,toReference:r=>r.applyMatrix3(rc),fromReference:r=>r.applyMatrix3(nc)},[NA]:{transfer:Vt,primaries:Fa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(rc),fromReference:r=>r.applyMatrix3(nc).convertLinearToSRGB()}},Zu=new Set([xi,ss]),Qt={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Zu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=ea[t].toReference;return(0,ea[e].fromReference)(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ea[r].primaries},getTransfer:function(r){return r===ri?Na:ea[r].transfer}};function Gn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function io(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Dn,Ga=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Dn===void 0&&(Dn=Qa("canvas")),Dn.width=t.width,Dn.height=t.height;let i=Dn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Dn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Qa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=255*Gn(a[s]/255);return i.putImageData(n,0,0),e}if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(255*Gn(e[i]/255)):e[i]=Gn(e[i]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$u=0,ka=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=ir(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(no(n[s].image)):a.push(no(n[s]))}else a=no(n);i.url=a}return e||(t.images[this.uuid]=i),i}};function no(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ga.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tp=0,Ne=class r extends zi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=1001,n=1001,a=1006,s=1008,o=1023,A=1009,l=r.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=ir(),this.name="",this.source=new ka(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=A,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===sn?Zt:ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zo:t.x=t.x-Math.floor(t.x);break;case Ye:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case zo:t.y=t.y-Math.floor(t.y);break;case Ye:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Zt?sn:lh}set encoding(t){yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===sn?Zt:ri}};Ne.DEFAULT_IMAGE=null,Ne.DEFAULT_MAPPING=th,Ne.DEFAULT_ANISOTROPY=1;var Gt=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,a=this.w,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*e+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*e+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*e+s[7]*i+s[11]*n+s[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a,A=t.elements,l=A[0],c=A[4],h=A[8],u=A[1],p=A[5],f=A[9],g=A[2],d=A[6],m=A[10];if(Math.abs(c-u)<.01&&Math.abs(h-g)<.01&&Math.abs(f-d)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+g)<.1&&Math.abs(f+d)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,x=(p+1)/2,y=(m+1)/2,P=(c+u)/4,w=(h+g)/4,T=(f+d)/4;return M>x&&M>y?M<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(M),n=P/i,a=w/i):x>y?x<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(x),i=P/n,a=T/n):y<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(y),i=w/a,n=T/a),this.set(i,n,a,e),this}let v=Math.sqrt((d-f)*(d-f)+(h-g)*(h-g)+(u-c)*(u-c));return Math.abs(v)<.001&&(v=1),this.x=(d-f)/v,this.y=(h-g)/v,this.z=(u-c)/v,this.w=Math.acos((l+p+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ho=class extends zi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Gt(0,0,t,e),this.scissorTest=!1,this.viewport=new Gt(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(yr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===sn?Zt:ri),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:le,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ne(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){this.width===t&&this.height===e&&this.depth===i||(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ka(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ne=class extends Ho{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Va=class extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ce,this.minFilter=ce,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qo=class extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ce,this.minFilter=ce,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $t=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,s,o){let A=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3],u=a[s+0],p=a[s+1],f=a[s+2],g=a[s+3];if(o===0)return t[e+0]=A,t[e+1]=l,t[e+2]=c,void(t[e+3]=h);if(o===1)return t[e+0]=u,t[e+1]=p,t[e+2]=f,void(t[e+3]=g);if(h!==g||A!==u||l!==p||c!==f){let d=1-o,m=A*u+l*p+c*f+h*g,v=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let y=Math.sqrt(M),P=Math.atan2(y,m*v);d=Math.sin(d*P)/y,o=Math.sin(o*P)/y}let x=o*v;if(A=A*d+u*x,l=l*d+p*x,c=c*d+f*x,h=h*d+g*x,d===1-o){let y=1/Math.sqrt(A*A+l*l+c*c+h*h);A*=y,l*=y,c*=y,h*=y}}t[e]=A,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,a,s){let o=i[n],A=i[n+1],l=i[n+2],c=i[n+3],h=a[s],u=a[s+1],p=a[s+2],f=a[s+3];return t[e]=o*f+c*h+A*p-l*u,t[e+1]=A*f+c*u+l*h-o*p,t[e+2]=l*f+c*p+o*u-A*h,t[e+3]=c*f-o*h-A*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,a=t._z,s=t._order,o=Math.cos,A=Math.sin,l=o(i/2),c=o(n/2),h=o(a/2),u=A(i/2),p=A(n/2),f=A(a/2);switch(s){case"XYZ":this._x=u*c*h+l*p*f,this._y=l*p*h-u*c*f,this._z=l*c*f+u*p*h,this._w=l*c*h-u*p*f;break;case"YXZ":this._x=u*c*h+l*p*f,this._y=l*p*h-u*c*f,this._z=l*c*f-u*p*h,this._w=l*c*h+u*p*f;break;case"ZXY":this._x=u*c*h-l*p*f,this._y=l*p*h+u*c*f,this._z=l*c*f+u*p*h,this._w=l*c*h-u*p*f;break;case"ZYX":this._x=u*c*h-l*p*f,this._y=l*p*h+u*c*f,this._z=l*c*f-u*p*h,this._w=l*c*h+u*p*f;break;case"YZX":this._x=u*c*h+l*p*f,this._y=l*p*h+u*c*f,this._z=l*c*f-u*p*h,this._w=l*c*h-u*p*f;break;case"XZY":this._x=u*c*h-l*p*f,this._y=l*p*h-u*c*f,this._z=l*c*f+u*p*h,this._w=l*c*h+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],a=e[8],s=e[1],o=e[5],A=e[9],l=e[2],c=e[6],h=e[10],u=i+o+h;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-A)*p,this._y=(a-l)*p,this._z=(s-n)*p}else if(i>o&&i>h){let p=2*Math.sqrt(1+i-o-h);this._w=(c-A)/p,this._x=.25*p,this._y=(n+s)/p,this._z=(a+l)/p}else if(o>h){let p=2*Math.sqrt(1+o-i-h);this._w=(a-l)/p,this._x=(n+s)/p,this._y=.25*p,this._z=(A+c)/p}else{let p=2*Math.sqrt(1+h-i-o);this._w=(s-n)/p,this._x=(a+l)/p,this._y=(A+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,a=t._z,s=t._w,o=e._x,A=e._y,l=e._z,c=e._w;return this._x=i*c+s*o+n*l-a*A,this._y=n*c+s*A+a*o-i*l,this._z=a*c+s*l+i*A-n*o,this._w=s*c-i*o-n*A-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,a=this._z,s=this._w,o=s*t._w+i*t._x+n*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;let A=1-o*o;if(A<=Number.EPSILON){let p=1-e;return this._w=p*s+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*a+e*this._z,this.normalize(),this}let l=Math.sqrt(A),c=Math.atan2(l,o),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=s*h+this._w*u,this._x=i*h+this._x*u,this._y=n*h+this._y*u,this._z=a*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(a),i*Math.cos(a),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ac.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,a=t.elements,s=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,a=t.x,s=t.y,o=t.z,A=t.w,l=2*(s*n-o*i),c=2*(o*e-a*n),h=2*(a*i-s*e);return this.x=e+A*l+s*h-o*c,this.y=i+A*c+o*l-a*h,this.z=n+A*h+a*c-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,a=t.z,s=e.x,o=e.y,A=e.z;return this.x=n*A-a*o,this.y=a*s-i*A,this.z=i*o-n*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ro.copy(this).projectOnVector(t),this.sub(ro)}reflect(t){return this.sub(ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=2*(Math.random()-.5),e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ro=new _,ac=new $t,Je=class{constructor(t=new _(1/0,1/0,1/0),e=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,ke):ke.fromBufferAttribute(a,s),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}let n=t.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),na.subVectors(this.max,dr),En.subVectors(t.a,dr),_n.subVectors(t.b,dr),Bn.subVectors(t.c,dr),Di.subVectors(_n,En),Ei.subVectors(Bn,_n),qi.subVectors(En,Bn);let e=[0,-Di.z,Di.y,0,-Ei.z,Ei.y,0,-qi.z,qi.y,Di.z,0,-Di.x,Ei.z,0,-Ei.x,qi.z,0,-qi.x,-Di.y,Di.x,0,-Ei.y,Ei.x,0,-qi.y,qi.x,0];return!!ao(e,En,_n,Bn,na)&&(e=[1,0,0,0,1,0,0,0,1],!!ao(e,En,_n,Bn,na)&&(ra.crossVectors(Di,Ei),e=[ra.x,ra.y,ra.z],ao(e,En,_n,Bn,na)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=.5*this.getSize(ke).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},fi=[new _,new _,new _,new _,new _,new _,new _,new _],ke=new _,ia=new Je,En=new _,_n=new _,Bn=new _,Di=new _,Ei=new _,qi=new _,dr=new _,na=new _,ra=new _,ji=new _;function ao(r,t,e,i,n){for(let a=0,s=r.length-3;a<=s;a+=3){ji.fromArray(r,a);let o=n.x*Math.abs(ji.x)+n.y*Math.abs(ji.y)+n.z*Math.abs(ji.z),A=t.dot(ji),l=e.dot(ji),c=i.dot(ji);if(Math.max(-Math.max(A,l,c),Math.min(A,l,c))>o)return!1}return!0}var ep=new Je,gr=new _,so=new _,Ke=class{constructor(t=new _,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ep.setFromPoints(t).getCenter(i);let n=0;for(let a=0,s=t.length;a<s;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);let e=gr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=.5*(i-this.radius);this.center.addScaledVector(gr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(so)),this.expandByPoint(gr.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new _,oo=new _,aa=new _,_i=new _,Ao=new _,sa=new _,lo=new _,qn=class{constructor(t=new _,e=new _(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){oo.copy(t).add(e).multiplyScalar(.5),aa.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(oo);let a=.5*t.distanceTo(e),s=-this.direction.dot(aa),o=_i.dot(this.direction),A=-_i.dot(aa),l=_i.lengthSq(),c=Math.abs(1-s*s),h,u,p,f;if(c>0)if(h=s*A-o,u=s*o-A,f=a*c,h>=0)if(u>=-f)if(u<=f){let g=1/c;h*=g,u*=g,p=h*(h+s*u+2*o)+u*(s*h+u+2*A)+l}else u=a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*A)+l;else u=-a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*A)+l;else u<=-f?(h=Math.max(0,-(-s*a+o)),u=h>0?-a:Math.min(Math.max(-a,-A),a),p=-h*h+u*(u+2*A)+l):u<=f?(h=0,u=Math.min(Math.max(-a,-A),a),p=u*(u+2*A)+l):(h=Math.max(0,-(s*a+o)),u=h>0?a:Math.min(Math.max(-a,-A),a),p=-h*h+u*(u+2*A)+l);else u=s>0?-a:a,h=Math.max(0,-(s*u+o)),p=-h*h+u*(u+2*A)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(oo).addScaledVector(aa,u),p}intersectSphere(t,e){di.subVectors(t.center,this.origin);let i=di.dot(this.direction),n=di.dot(di)-i*i,a=t.radius*t.radius;if(n>a)return null;let s=Math.sqrt(a-n),o=i-s,A=i+s;return A<0?null:o<0?this.at(A,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0?!0:t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,s,o,A,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,n=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,n=(t.min.x-u.x)*l),c>=0?(a=(t.min.y-u.y)*c,s=(t.max.y-u.y)*c):(a=(t.max.y-u.y)*c,s=(t.min.y-u.y)*c),i>s||a>n?null:((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),h>=0?(o=(t.min.z-u.z)*h,A=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,A=(t.min.z-u.z)*h),i>A||o>n?null:((o>i||i!=i)&&(i=o),(A<n||n!=n)&&(n=A),n<0?null:this.at(i>=0?i:n,e)))}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,i,n,a){Ao.subVectors(e,t),sa.subVectors(i,t),lo.crossVectors(Ao,sa);let s,o=this.direction.dot(lo);if(o>0){if(n)return null;s=1}else{if(!(o<0))return null;s=-1,o=-o}_i.subVectors(this.origin,t);let A=s*this.direction.dot(sa.crossVectors(_i,sa));if(A<0)return null;let l=s*this.direction.dot(Ao.cross(_i));if(l<0||A+l>o)return null;let c=-s*_i.dot(lo);return c<0?null:this.at(c/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class r{constructor(t,e,i,n,a,s,o,A,l,c,h,u,p,f,g,d){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,s,o,A,l,c,h,u,p,f,g,d)}set(t,e,i,n,a,s,o,A,l,c,h,u,p,f,g,d){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=a,m[5]=s,m[9]=o,m[13]=A,m[2]=l,m[6]=c,m[10]=h,m[14]=u,m[3]=p,m[7]=f,m[11]=g,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/Sn.setFromMatrixColumn(t,0).length(),a=1/Sn.setFromMatrixColumn(t,1).length(),s=1/Sn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*s,e[9]=i[9]*s,e[10]=i[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,a=t.z,s=Math.cos(i),o=Math.sin(i),A=Math.cos(n),l=Math.sin(n),c=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){let u=s*c,p=s*h,f=o*c,g=o*h;e[0]=A*c,e[4]=-A*h,e[8]=l,e[1]=p+f*l,e[5]=u-g*l,e[9]=-o*A,e[2]=g-u*l,e[6]=f+p*l,e[10]=s*A}else if(t.order==="YXZ"){let u=A*c,p=A*h,f=l*c,g=l*h;e[0]=u+g*o,e[4]=f*o-p,e[8]=s*l,e[1]=s*h,e[5]=s*c,e[9]=-o,e[2]=p*o-f,e[6]=g+u*o,e[10]=s*A}else if(t.order==="ZXY"){let u=A*c,p=A*h,f=l*c,g=l*h;e[0]=u-g*o,e[4]=-s*h,e[8]=f+p*o,e[1]=p+f*o,e[5]=s*c,e[9]=g-u*o,e[2]=-s*l,e[6]=o,e[10]=s*A}else if(t.order==="ZYX"){let u=s*c,p=s*h,f=o*c,g=o*h;e[0]=A*c,e[4]=f*l-p,e[8]=u*l+g,e[1]=A*h,e[5]=g*l+u,e[9]=p*l-f,e[2]=-l,e[6]=o*A,e[10]=s*A}else if(t.order==="YZX"){let u=s*A,p=s*l,f=o*A,g=o*l;e[0]=A*c,e[4]=g-u*h,e[8]=f*h+p,e[1]=h,e[5]=s*c,e[9]=-o*c,e[2]=-l*c,e[6]=p*h+f,e[10]=u-g*h}else if(t.order==="XZY"){let u=s*A,p=s*l,f=o*A,g=o*l;e[0]=A*c,e[4]=-h,e[8]=l*c,e[1]=u*h+g,e[5]=s*c,e[9]=p*h-f,e[2]=f*h-p,e[6]=o*c,e[10]=g*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,np)}lookAt(t,e,i){let n=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Bi.crossVectors(i,Be),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Bi.crossVectors(i,Be)),Bi.normalize(),oa.crossVectors(Be,Bi),n[0]=Bi.x,n[4]=oa.x,n[8]=Be.x,n[1]=Bi.y,n[5]=oa.y,n[9]=Be.y,n[2]=Bi.z,n[6]=oa.z,n[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,a=this.elements,s=i[0],o=i[4],A=i[8],l=i[12],c=i[1],h=i[5],u=i[9],p=i[13],f=i[2],g=i[6],d=i[10],m=i[14],v=i[3],M=i[7],x=i[11],y=i[15],P=n[0],w=n[4],T=n[8],R=n[12],C=n[1],O=n[5],B=n[9],N=n[13],U=n[2],X=n[6],ot=n[10],j=n[14],G=n[3],V=n[7],Q=n[11],Y=n[15];return a[0]=s*P+o*C+A*U+l*G,a[4]=s*w+o*O+A*X+l*V,a[8]=s*T+o*B+A*ot+l*Q,a[12]=s*R+o*N+A*j+l*Y,a[1]=c*P+h*C+u*U+p*G,a[5]=c*w+h*O+u*X+p*V,a[9]=c*T+h*B+u*ot+p*Q,a[13]=c*R+h*N+u*j+p*Y,a[2]=f*P+g*C+d*U+m*G,a[6]=f*w+g*O+d*X+m*V,a[10]=f*T+g*B+d*ot+m*Q,a[14]=f*R+g*N+d*j+m*Y,a[3]=v*P+M*C+x*U+y*G,a[7]=v*w+M*O+x*X+y*V,a[11]=v*T+M*B+x*ot+y*Q,a[15]=v*R+M*N+x*j+y*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],s=t[1],o=t[5],A=t[9],l=t[13],c=t[2],h=t[6],u=t[10],p=t[14];return t[3]*(+a*A*h-n*l*h-a*o*u+i*l*u+n*o*p-i*A*p)+t[7]*(+e*A*p-e*l*u+a*s*u-n*s*p+n*l*c-a*A*c)+t[11]*(+e*l*h-e*o*p-a*s*h+i*s*p+a*o*c-i*l*c)+t[15]*(-n*o*c-e*A*h+e*o*u+n*s*h-i*s*u+i*A*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],A=t[6],l=t[7],c=t[8],h=t[9],u=t[10],p=t[11],f=t[12],g=t[13],d=t[14],m=t[15],v=h*d*l-g*u*l+g*A*p-o*d*p-h*A*m+o*u*m,M=f*u*l-c*d*l-f*A*p+s*d*p+c*A*m-s*u*m,x=c*g*l-f*h*l+f*o*p-s*g*p-c*o*m+s*h*m,y=f*h*A-c*g*A-f*o*u+s*g*u+c*o*d-s*h*d,P=e*v+i*M+n*x+a*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/P;return t[0]=v*w,t[1]=(g*u*a-h*d*a-g*n*p+i*d*p+h*n*m-i*u*m)*w,t[2]=(o*d*a-g*A*a+g*n*l-i*d*l-o*n*m+i*A*m)*w,t[3]=(h*A*a-o*u*a-h*n*l+i*u*l+o*n*p-i*A*p)*w,t[4]=M*w,t[5]=(c*d*a-f*u*a+f*n*p-e*d*p-c*n*m+e*u*m)*w,t[6]=(f*A*a-s*d*a-f*n*l+e*d*l+s*n*m-e*A*m)*w,t[7]=(s*u*a-c*A*a+c*n*l-e*u*l-s*n*p+e*A*p)*w,t[8]=x*w,t[9]=(f*h*a-c*g*a-f*i*p+e*g*p+c*i*m-e*h*m)*w,t[10]=(s*g*a-f*o*a+f*i*l-e*g*l-s*i*m+e*o*m)*w,t[11]=(c*o*a-s*h*a-c*i*l+e*h*l+s*i*p-e*o*p)*w,t[12]=y*w,t[13]=(c*g*n-f*h*n+f*i*u-e*g*u-c*i*d+e*h*d)*w,t[14]=(f*o*n-s*g*n-f*i*A+e*g*A+s*i*d-e*o*d)*w,t[15]=(s*h*n-c*o*n+c*i*A-e*h*A-s*i*u+e*o*u)*w,this}scale(t){let e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),a=1-i,s=t.x,o=t.y,A=t.z,l=a*s,c=a*o;return this.set(l*s+i,l*o-n*A,l*A+n*o,0,l*o+n*A,c*o+i,c*A-n*s,0,l*A-n*o,c*A+n*s,a*A*A+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,s){return this.set(1,i,a,0,t,1,s,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,a=e._x,s=e._y,o=e._z,A=e._w,l=a+a,c=s+s,h=o+o,u=a*l,p=a*c,f=a*h,g=s*c,d=s*h,m=o*h,v=A*l,M=A*c,x=A*h,y=i.x,P=i.y,w=i.z;return n[0]=(1-(g+m))*y,n[1]=(p+x)*y,n[2]=(f-M)*y,n[3]=0,n[4]=(p-x)*P,n[5]=(1-(u+m))*P,n[6]=(d+v)*P,n[7]=0,n[8]=(f+M)*w,n[9]=(d-v)*w,n[10]=(1-(u+g))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,a=Sn.set(n[0],n[1],n[2]).length(),s=Sn.set(n[4],n[5],n[6]).length(),o=Sn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],Ve.copy(this);let A=1/a,l=1/s,c=1/o;return Ve.elements[0]*=A,Ve.elements[1]*=A,Ve.elements[2]*=A,Ve.elements[4]*=l,Ve.elements[5]*=l,Ve.elements[6]*=l,Ve.elements[8]*=c,Ve.elements[9]*=c,Ve.elements[10]*=c,e.setFromRotationMatrix(Ve),i.x=a,i.y=s,i.z=o,this}makePerspective(t,e,i,n,a,s,o=2e3){let A=this.elements,l=2*a/(e-t),c=2*a/(i-n),h=(e+t)/(e-t),u=(i+n)/(i-n),p,f;if(o===Yn)p=-(s+a)/(s-a),f=-2*s*a/(s-a);else{if(o!==Ha)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-s/(s-a),f=-s*a/(s-a)}return A[0]=l,A[4]=0,A[8]=h,A[12]=0,A[1]=0,A[5]=c,A[9]=u,A[13]=0,A[2]=0,A[6]=0,A[10]=p,A[14]=f,A[3]=0,A[7]=0,A[11]=-1,A[15]=0,this}makeOrthographic(t,e,i,n,a,s,o=2e3){let A=this.elements,l=1/(e-t),c=1/(i-n),h=1/(s-a),u=(e+t)*l,p=(i+n)*c,f,g;if(o===Yn)f=(s+a)*h,g=-2*h;else{if(o!==Ha)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=a*h,g=-1*h}return A[0]=2*l,A[4]=0,A[8]=0,A[12]=-u,A[1]=0,A[5]=2*c,A[9]=0,A[13]=-p,A[2]=0,A[6]=0,A[10]=g,A[14]=-f,A[3]=0,A[7]=0,A[11]=0,A[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Sn=new _,Ve=new yt,ip=new _(0,0,0),np=new _(1,1,1),Bi=new _,oa=new _,Be=new _,sc=new yt,oc=new $t,si=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,a=n[0],s=n[4],o=n[8],A=n[1],l=n[5],c=n[9],h=n[2],u=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-he(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(A,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(A,a));break;case"ZYX":this._y=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(A,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(he(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-he(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oc.setFromEuler(this),this.setFromQuaternion(oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var Xa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!=0}isEnabled(t){return(this.mask&(1<<t|0))!=0}},rp=0,Ac=new _,Cn=new $t,gi=new yt,Aa=new _,mr=new _,ap=new _,sp=new $t,lc=new _(1,0,0),cc=new _(0,1,0),hc=new _(0,0,1),op={type:"added"},Ap={type:"removed"},Pe=class r extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new _,e=new si,i=new $t,n=new _(1,1,1);e._onChange(function(){i.setFromEuler(e,!1)}),i._onChange(function(){e.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new yt},normalMatrix:{value:new St}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cn.setFromAxisAngle(t,e),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(t,e){return Cn.setFromAxisAngle(t,e),this.quaternion.premultiply(Cn),this}rotateX(t){return this.rotateOnAxis(lc,t)}rotateY(t){return this.rotateOnAxis(cc,t)}rotateZ(t){return this.rotateOnAxis(hc,t)}translateOnAxis(t,e){return Ac.copy(t).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lc,t)}translateY(t){return this.translateOnAxis(cc,t)}translateZ(t){return this.translateOnAxis(hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Aa.copy(t):Aa.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(mr,Aa,this.up):gi.lookAt(Aa,mr,this.up),this.quaternion.setFromRotationMatrix(gi),n&&(gi.extractRotation(n.matrixWorld),Cn.setFromRotationMatrix(gi),this.quaternion.premultiply(Cn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(op)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ap)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let a=e[i];a.matrixWorldAutoUpdate!==!0&&t!==!0||a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let a=0,s=n.length;a<s;a++){let o=n[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function a(o,A){return o[A.uuid]===void 0&&(o[A.uuid]=A.toJSON(t)),A.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let A=o.shapes;if(Array.isArray(A))for(let l=0,c=A.length;l<c;l++){let h=A[l];a(t.shapes,h)}else a(t.shapes,A)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let A=0,l=this.material.length;A<l;A++)o.push(a(t.materials,this.material[A]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let A=this.animations[o];n.animations.push(a(t.animations,A))}}if(e){let o=s(t.geometries),A=s(t.materials),l=s(t.textures),c=s(t.images),h=s(t.shapes),u=s(t.skeletons),p=s(t.animations),f=s(t.nodes);o.length>0&&(i.geometries=o),A.length>0&&(i.materials=A),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function s(o){let A=[];for(let l in o){let c=o[l];delete c.metadata,A.push(c)}return A}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Pe.DEFAULT_UP=new _(0,1,0),Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=new _,mi=new _,co=new _,vi=new _,Tn=new _,In=new _,uc=new _,ho=new _,uo=new _,po=new _,la=!1,nn=class r{constructor(t=new _,e=new _,i=new _){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Xe.subVectors(t,e),n.cross(Xe);let a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){Xe.subVectors(n,e),mi.subVectors(i,e),co.subVectors(t,e);let s=Xe.dot(Xe),o=Xe.dot(mi),A=Xe.dot(co),l=mi.dot(mi),c=mi.dot(co),h=s*l-o*o;if(h===0)return a.set(0,0,0),null;let u=1/h,p=(l*A-o*c)*u,f=(s*c-o*A)*u;return a.set(1-p-f,f,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,vi)!==null&&vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(t,e,i,n,a,s,o,A){return la===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),la=!0),this.getInterpolation(t,e,i,n,a,s,o,A)}static getInterpolation(t,e,i,n,a,s,o,A){return this.getBarycoord(t,e,i,n,vi)===null?(A.x=0,A.y=0,"z"in A&&(A.z=0),"w"in A&&(A.w=0),null):(A.setScalar(0),A.addScaledVector(a,vi.x),A.addScaledVector(s,vi.y),A.addScaledVector(o,vi.z),A)}static isFrontFacing(t,e,i,n){return Xe.subVectors(i,e),mi.subVectors(t,e),Xe.cross(mi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),.5*Xe.cross(mi).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,a){return la===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),la=!0),r.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}getInterpolation(t,e,i,n,a){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,a=this.c,s,o;Tn.subVectors(n,i),In.subVectors(a,i),ho.subVectors(t,i);let A=Tn.dot(ho),l=In.dot(ho);if(A<=0&&l<=0)return e.copy(i);uo.subVectors(t,n);let c=Tn.dot(uo),h=In.dot(uo);if(c>=0&&h<=c)return e.copy(n);let u=A*h-c*l;if(u<=0&&A>=0&&c<=0)return s=A/(A-c),e.copy(i).addScaledVector(Tn,s);po.subVectors(t,a);let p=Tn.dot(po),f=In.dot(po);if(f>=0&&p<=f)return e.copy(a);let g=p*l-A*f;if(g<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(i).addScaledVector(In,o);let d=c*f-p*h;if(d<=0&&h-c>=0&&p-f>=0)return uc.subVectors(a,n),o=(h-c)/(h-c+(p-f)),e.copy(n).addScaledVector(uc,o);let m=1/(d+g+u);return s=g*m,o=u*m,e.copy(i).addScaledVector(Tn,s).addScaledVector(In,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ca={h:0,s:0,l:0};function fo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+6*(t-r)*e:e<.5?t:e<2/3?r+6*(t-r)*(2/3-e):r}var pt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=Ju(t,1),e=he(e,0,1),i=he(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,s=2*i-a;this.r=fo(s,a,t+1/3),this.g=fo(s,a,t),this.b=fo(s,a,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=Zt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zt){let i=hh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=io(t.r),this.g=io(t.g),this.b=io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zt){return Qt.fromWorkingColorSpace(me.copy(this),t),65536*Math.round(he(255*me.r,0,255))+256*Math.round(he(255*me.g,0,255))+Math.round(he(255*me.b,0,255))}getHexString(t=Zt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(me.copy(this),e);let i=me.r,n=me.g,a=me.b,s=Math.max(i,n,a),o=Math.min(i,n,a),A,l,c=(o+s)/2;if(o===s)A=0,l=0;else{let h=s-o;switch(l=c<=.5?h/(s+o):h/(2-s-o),s){case i:A=(n-a)/h+(n<a?6:0);break;case n:A=(a-i)/h+2;break;case a:A=(i-n)/h+4}A/=6}return t.h=A,t.s=l,t.l=c,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=Zt){Qt.fromWorkingColorSpace(me.copy(this),t);let e=me.r,i=me.g,n=me.b;return t!==Zt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(t,e,i){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(ca);let i=to(Si.h,ca.h,e),n=to(Si.s,ca.s,e),a=to(Si.l,ca.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},me=new pt;pt.NAMES=hh;var lp=0,on=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=1,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=Io,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bn,this.stencilZFail=bn,this.stencilZPass=bn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i:console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`)}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(a){let s=[];for(let o in a){let A=a[o];delete A.metadata,s.push(A)}return s}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==To&&(i.blendSrc=this.blendSrc),this.blendDst!==Io&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),e){let a=n(t.textures),s=n(t.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Oe=class extends on{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},T0=cp();function cp(){let r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let A=0;A<256;++A){let l=A-127;l<-27?(i[A]=0,i[256|A]=32768,n[A]=24,n[256|A]=24):l<-14?(i[A]=1024>>-l-14,i[256|A]=1024>>-l-14|32768,n[A]=-l-1,n[256|A]=-l-1):l<=15?(i[A]=l+15<<10,i[256|A]=l+15<<10|32768,n[A]=13,n[256|A]=13):l<128?(i[A]=31744,i[256|A]=64512,n[A]=24,n[256|A]=24):(i[A]=31744,i[256|A]=64512,n[A]=13,n[256|A]=13)}let a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let A=1;A<1024;++A){let l=A<<13,c=0;for(;!(8388608&l);)l<<=1,c-=8388608;l&=-8388609,c+=947912704,a[A]=l|c}for(let A=1024;A<2048;++A)a[A]=939524096+(A-1024<<13);for(let A=1;A<31;++A)s[A]=A<<23;s[31]=1199570944,s[32]=2147483648;for(let A=33;A<63;++A)s[A]=2147483648+(A-32<<23);s[63]=3347054592;for(let A=1;A<64;++A)A!==32&&(o[A]=1024);return{floatView:t,uint32View:e,baseTable:i,shiftTable:n,mantissaTable:a,exponentTable:s,offsetTable:o}}var ee=new _,ha=new at,Rt=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$l,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix3(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ee.fromBufferAttribute(this,e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ee.fromBufferAttribute(this,e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),n=De(n,this.array),a=De(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$l&&(t.usage=this.usage),t}};var Wa=class extends Rt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ya=class extends Rt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var vt=class extends Rt{constructor(t,e,i){super(new Float32Array(t),e,i)}};var hp=0,Ue=new yt,go=new Pe,Ln=new _,Se=new Je,vr=new Je,Ae=new _,Tt=class r extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ch(t)?Ya:Wa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new St().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,i){return Ue.makeTranslation(t,e,i),this.applyMatrix4(Ue),this}scale(t,e,i){return Ue.makeScale(t,e,i),this.applyMatrix4(Ue),this}lookAt(t){return go.lookAt(t),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new vt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Je);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let a=e[i];Se.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Se.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Se.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Se.min),this.boundingBox.expandByPoint(Se.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ke);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new _,1/0);if(t){let i=this.boundingSphere.center;if(Se.setFromBufferAttribute(t),e)for(let a=0,s=e.length;a<s;a++){let o=e[a];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Se.min,vr.min),Se.expandByPoint(Ae),Ae.addVectors(Se.max,vr.max),Se.expandByPoint(Ae)):(Se.expandByPoint(vr.min),Se.expandByPoint(vr.max))}Se.getCenter(i);let n=0;for(let a=0,s=t.count;a<s;a++)Ae.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(Ae));if(e)for(let a=0,s=e.length;a<s;a++){let o=e[a],A=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)Ae.fromBufferAttribute(o,l),A&&(Ln.fromBufferAttribute(t,l),Ae.add(Ln)),n=Math.max(n,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.array,n=e.position.array,a=e.normal.array,s=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*o),4));let A=this.getAttribute("tangent").array,l=[],c=[];for(let C=0;C<o;C++)l[C]=new _,c[C]=new _;let h=new _,u=new _,p=new _,f=new at,g=new at,d=new at,m=new _,v=new _;function M(C,O,B){h.fromArray(n,3*C),u.fromArray(n,3*O),p.fromArray(n,3*B),f.fromArray(s,2*C),g.fromArray(s,2*O),d.fromArray(s,2*B),u.sub(h),p.sub(h),g.sub(f),d.sub(f);let N=1/(g.x*d.y-d.x*g.y);isFinite(N)&&(m.copy(u).multiplyScalar(d.y).addScaledVector(p,-g.y).multiplyScalar(N),v.copy(p).multiplyScalar(g.x).addScaledVector(u,-d.x).multiplyScalar(N),l[C].add(m),l[O].add(m),l[B].add(m),c[C].add(v),c[O].add(v),c[B].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let C=0,O=x.length;C<O;++C){let B=x[C],N=B.start;for(let U=N,X=N+B.count;U<X;U+=3)M(i[U+0],i[U+1],i[U+2])}let y=new _,P=new _,w=new _,T=new _;function R(C){w.fromArray(a,3*C),T.copy(w);let O=l[C];y.copy(O),y.sub(w.multiplyScalar(w.dot(O))).normalize(),P.crossVectors(T,O);let B=P.dot(c[C])<0?-1:1;A[4*C]=y.x,A[4*C+1]=y.y,A[4*C+2]=y.z,A[4*C+3]=B}for(let C=0,O=x.length;C<O;++C){let B=x[C],N=B.start;for(let U=N,X=N+B.count;U<X;U+=3)R(i[U+0]),R(i[U+1]),R(i[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rt(new Float32Array(3*e.count),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let n=new _,a=new _,s=new _,o=new _,A=new _,l=new _,c=new _,h=new _;if(t)for(let u=0,p=t.count;u<p;u+=3){let f=t.getX(u+0),g=t.getX(u+1),d=t.getX(u+2);n.fromBufferAttribute(e,f),a.fromBufferAttribute(e,g),s.fromBufferAttribute(e,d),c.subVectors(s,a),h.subVectors(n,a),c.cross(h),o.fromBufferAttribute(i,f),A.fromBufferAttribute(i,g),l.fromBufferAttribute(i,d),o.add(c),A.add(c),l.add(c),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(g,A.x,A.y,A.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)n.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),s.fromBufferAttribute(e,u+2),c.subVectors(s,a),h.subVectors(n,a),c.cross(h),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,A){let l=o.array,c=o.itemSize,h=o.normalized,u=new l.constructor(A.length*c),p=0,f=0;for(let g=0,d=A.length;g<d;g++){p=o.isInterleavedBufferAttribute?A[g]*o.data.stride+o.offset:A[g]*c;for(let m=0;m<c;m++)u[f++]=l[p++]}return new Rt(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let A=t(n[o],i);e.setAttribute(o,A)}let a=this.morphAttributes;for(let o in a){let A=[],l=a[o];for(let c=0,h=l.length;c<h;c++){let u=t(l[c],i);A.push(u)}e.morphAttributes[o]=A}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,A=s.length;o<A;o++){let l=s[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let A=this.parameters;for(let l in A)A[l]!==void 0&&(t[l]=A[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let A in i){let l=i[A];t.data.attributes[A]=l.toJSON(t.data)}let n={},a=!1;for(let A in this.morphAttributes){let l=this.morphAttributes[A],c=[];for(let h=0,u=l.length;h<u;h++){let p=l[h];c.push(p.toJSON(t.data))}c.length>0&&(n[A]=c,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(e))}let a=t.morphAttributes;for(let l in a){let c=[],h=a[l];for(let u=0,p=h.length;u<p;u++)c.push(h[u].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let l=0,c=s.length;l<c;l++){let h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let A=t.boundingSphere;return A!==null&&(this.boundingSphere=A.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pc=new yt,Ji=new qn,ua=new Ke,fc=new _,Rn=new _,zn=new _,Un=new _,mo=new _,pa=new _,fa=new at,da=new at,ga=new at,dc=new _,gc=new _,mc=new _,ma=new _,va=new _,kt=class extends Pe{constructor(t=new Tt,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){let s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(a&&o){pa.set(0,0,0);for(let A=0,l=a.length;A<l;A++){let c=o[A],h=a[A];c!==0&&(mo.fromBufferAttribute(h,t),s?pa.addScaledVector(mo,c):pa.addScaledVector(mo.sub(e),c))}e.add(pa)}return e}raycast(t,e){let i=this.geometry,n=this.material,a=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(a),Ji.copy(t.ray).recast(t.near),ua.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(ua,fc)===null||Ji.origin.distanceToSquared(fc)>(t.far-t.near)**2))return;pc.copy(a).invert(),Ji.copy(t.ray).applyMatrix4(pc),i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1||this._computeIntersections(t,e,Ji)}}_computeIntersections(t,e,i){let n,a=this.geometry,s=this.material,o=a.index,A=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let f=0,g=u.length;f<g;f++){let d=u[f],m=s[d.materialIndex];for(let v=Math.max(d.start,p.start),M=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));v<M;v+=3)n=Ma(this,m,t,i,l,c,h,o.getX(v),o.getX(v+1),o.getX(v+2)),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=d.materialIndex,e.push(n))}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3)n=Ma(this,s,t,i,l,c,h,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),e.push(n));else if(A!==void 0)if(Array.isArray(s))for(let f=0,g=u.length;f<g;f++){let d=u[f],m=s[d.materialIndex];for(let v=Math.max(d.start,p.start),M=Math.min(A.count,Math.min(d.start+d.count,p.start+p.count));v<M;v+=3)n=Ma(this,m,t,i,l,c,h,v,v+1,v+2),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=d.materialIndex,e.push(n))}else for(let f=Math.max(0,p.start),g=Math.min(A.count,p.start+p.count);f<g;f+=3)n=Ma(this,s,t,i,l,c,h,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),e.push(n))}};function Ma(r,t,e,i,n,a,s,o,A,l){r.getVertexPosition(o,Rn),r.getVertexPosition(A,zn),r.getVertexPosition(l,Un);let c=function(h,u,p,f,g,d,m,v){let M;if(M=u.side===pe?f.intersectTriangle(m,d,g,!0,v):f.intersectTriangle(g,d,m,u.side===Li,v),M===null)return null;va.copy(v),va.applyMatrix4(h.matrixWorld);let x=p.ray.origin.distanceTo(va);return x<p.near||x>p.far?null:{distance:x,point:va.clone(),object:h}}(r,t,e,i,Rn,zn,Un,ma);if(c){n&&(fa.fromBufferAttribute(n,o),da.fromBufferAttribute(n,A),ga.fromBufferAttribute(n,l),c.uv=nn.getInterpolation(ma,Rn,zn,Un,fa,da,ga,new at)),a&&(fa.fromBufferAttribute(a,o),da.fromBufferAttribute(a,A),ga.fromBufferAttribute(a,l),c.uv1=nn.getInterpolation(ma,Rn,zn,Un,fa,da,ga,new at),c.uv2=c.uv1),s&&(dc.fromBufferAttribute(s,o),gc.fromBufferAttribute(s,A),mc.fromBufferAttribute(s,l),c.normal=nn.getInterpolation(ma,Rn,zn,Un,dc,gc,mc,new _),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let h={a:o,b:A,c:l,normal:new _,materialIndex:0};nn.getNormal(Rn,zn,Un,h.normal),c.face=h}return c}var Ze=class r extends Tt{constructor(t=1,e=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};let o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);let A=[],l=[],c=[],h=[],u=0,p=0;function f(g,d,m,v,M,x,y,P,w,T,R){let C=x/w,O=y/T,B=x/2,N=y/2,U=P/2,X=w+1,ot=T+1,j=0,G=0,V=new _;for(let Q=0;Q<ot;Q++){let Y=Q*O-N;for(let tt=0;tt<X;tt++){let b=tt*C-B;V[g]=b*v,V[d]=Y*M,V[m]=U,l.push(V.x,V.y,V.z),V[g]=0,V[d]=0,V[m]=P>0?1:-1,c.push(V.x,V.y,V.z),h.push(tt/w),h.push(1-Q/T),j+=1}}for(let Q=0;Q<T;Q++)for(let Y=0;Y<w;Y++){let tt=u+Y+X*Q,b=u+Y+X*(Q+1),D=u+(Y+1)+X*(Q+1),H=u+(Y+1)+X*Q;A.push(tt,b,H),A.push(b,D,H),G+=6}o.addGroup(p,G,R),p+=G,u+=j}f("z","y","x",-1,-1,i,e,t,s,a,0),f("z","y","x",1,-1,i,e,-t,s,a,1),f("x","z","y",1,1,t,i,e,n,s,2),f("x","z","y",1,-1,t,i,-e,n,s,3),f("x","y","z",1,-1,t,e,i,n,a,4),f("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(A),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function jn(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Me(r){let t={};for(let e=0;e<r.length;e++){let i=jn(r[e]);for(let n in i)t[n]=i[n]}return t}function uh(r){return r.getRenderTarget()===null?r.outputColorSpace:Qt.workingColorSpace}var OA={clone:jn,merge:Me},ye=class extends on{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jn(t.uniforms),this.uniformsGroups=function(e){let i=[];for(let n=0;n<e.length;n++)i.push(e[n].clone());return i}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},_r=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ue=class extends _r{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=2*Oo*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(.5*La*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*Oo*Math.atan(Math.tan(.5*La*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,a,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(.5*La*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let A=s.fullWidth,l=s.fullHeight;a+=s.offsetX*n/A,e-=s.offsetY*i/l,n*=s.width/A,i*=s.height/l}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Nn=-90,Go=class extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ue(Nn,1,t,e);n.layers=this.layers,this.add(n);let a=new ue(Nn,1,t,e);a.layers=this.layers,this.add(a);let s=new ue(Nn,1,t,e);s.layers=this.layers,this.add(s);let o=new ue(Nn,1,t,e);o.layers=this.layers,this.add(o);let A=new ue(Nn,1,t,e);A.layers=this.layers,this.add(A);let l=new ue(Nn,1,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,a,s,o,A]=e;for(let l of e)this.remove(l);if(t===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),A.up.set(0,1,0),A.lookAt(0,0,-1);else{if(t!==Ha)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),A.up.set(0,-1,0),A.lookAt(0,0,-1)}for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,s,o,A,l,c]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,s),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,A),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(h,u,p),t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},qa=class extends Ne{constructor(t,e,i,n,a,s,o,A,l,c){super(t=t!==void 0?t:[],e=e!==void 0?e:Vn,i,n,a,s,o,A,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ko=class extends ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(yr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===sn?Zt:ri),this.texture=new qa(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0&&e.generateMipmaps,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ze(5,5,5),a=new ye({name:"CubemapFromEquirect",uniforms:jn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pe,blending:0});a.uniforms.tEquirect.value=e;let s=new kt(n,a),o=e.minFilter;return e.minFilter===Ra&&(e.minFilter=le),new Go(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,i,n){let a=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,i,n);t.setRenderTarget(a)}},vo=new _,up=new _,pp=new St,We=class{constructor(t=new _(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=vo.subVectors(i,e).cross(up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(vo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||pp.getNormalMatrix(t),n=this.coplanarPoint(vo).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new Ke,xa=new _,Ui=class{constructor(t=new We,e=new We,i=new We,n=new We,a=new We,s=new We){this.planes=[t,e,i,n,a,s]}set(t,e,i,n,a,s){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=2e3){let i=this.planes,n=t.elements,a=n[0],s=n[1],o=n[2],A=n[3],l=n[4],c=n[5],h=n[6],u=n[7],p=n[8],f=n[9],g=n[10],d=n[11],m=n[12],v=n[13],M=n[14],x=n[15];if(i[0].setComponents(A-a,u-l,d-p,x-m).normalize(),i[1].setComponents(A+a,u+l,d+p,x+m).normalize(),i[2].setComponents(A+s,u+c,d+f,x+v).normalize(),i[3].setComponents(A-s,u-c,d-f,x-v).normalize(),i[4].setComponents(A-o,u-h,d-g,x-M).normalize(),e===Yn)i[5].setComponents(A+o,u+h,d+g,x+M).normalize();else{if(e!==Ha)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);i[5].setComponents(o,h,g,M).normalize()}return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(xa.x=n.normal.x>0?t.max.x:t.min.x,xa.y=n.normal.y>0?t.max.y:t.min.y,xa.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ph(){let r=null,t=!1,e=null,i=null;function n(a,s){e(a,s),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){r=a}}}function fp(r,t){let e=t.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);a&&(r.deleteBuffer(a.buffer),i.delete(n))},update:function(n,a){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let s=i.get(n);if(s===void 0)i.set(n,function(o,A){let l=o.array,c=o.usage,h=l.byteLength,u=r.createBuffer(),p;if(r.bindBuffer(A,u),r.bufferData(A,l,c),o.onUploadCallback(),l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!e)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);p=r.UNSIGNED_BYTE}return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}(n,a));else if(s.version<n.version){if(s.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,A,l){let c=A.array,h=A._updateRange,u=A.updateRanges;if(r.bindBuffer(l,o),h.count===-1&&u.length===0&&r.bufferSubData(l,0,c),u.length!==0){for(let p=0,f=u.length;p<f;p++){let g=u[p];e?r.bufferSubData(l,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count):r.bufferSubData(l,g.start*c.BYTES_PER_ELEMENT,c.subarray(g.start,g.start+g.count))}A.clearUpdateRanges()}h.count!==-1&&(e?r.bufferSubData(l,h.offset*c.BYTES_PER_ELEMENT,c,h.offset,h.count):r.bufferSubData(l,h.offset*c.BYTES_PER_ELEMENT,c.subarray(h.offset,h.offset+h.count)),h.count=-1),A.onUploadCallback()})(s.buffer,n,a),s.version=n.version}}}}var Jn=class r extends Tt{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let a=t/2,s=e/2,o=Math.floor(i),A=Math.floor(n),l=o+1,c=A+1,h=t/o,u=e/A,p=[],f=[],g=[],d=[];for(let m=0;m<c;m++){let v=m*u-s;for(let M=0;M<l;M++){let x=M*h-a;f.push(x,-v,0),g.push(0,0,1),d.push(M/o),d.push(1-m/A)}}for(let m=0;m<A;m++)for(let v=0;v<o;v++){let M=v+l*m,x=v+l*(m+1),y=v+1+l*(m+1),P=v+1+l*m;p.push(M,x,P),p.push(x,y,P)}this.setIndex(p),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(g,3)),this.setAttribute("uv",new vt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Et={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ct={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},ni={basic:{uniforms:Me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new pt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Me([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Me([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new pt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Me([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Me([ct.points,ct.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Me([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Me([ct.common,ct.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Me([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Me([ct.sprite,ct.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:Me([ct.common,ct.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:Me([ct.lights,ct.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};ni.physical={uniforms:Me([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var Pa={r:0,b:0,g:0};function dp(r,t,e,i,n,a,s){let o=new pt(0),A,l,c=a===!0?0:1,h=null,u=0,p=null;function f(g,d){g.getRGB(Pa,uh(r)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(g,d=1){o.set(g),c=d,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,f(o,c)},render:function(g,d){let m=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?f(o,c):v&&v.isColor&&(f(v,1),m=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(r.autoClear||m)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===as)?(l===void 0&&(l=new kt(new Ze(1,1,1),new ye({name:"BackgroundCubeMaterial",uniforms:jn(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:pe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,y,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(v.colorSpace)!==Vt,h===v&&u===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,h=v,u=v.version,p=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(A===void 0&&(A=new kt(new Jn(2,2),new ye({name:"BackgroundMaterial",uniforms:jn(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),A.geometry.deleteAttribute("normal"),Object.defineProperty(A.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(A)),A.material.uniforms.t2D.value=v,A.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,A.material.toneMapped=Qt.getTransfer(v.colorSpace)!==Vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),A.material.uniforms.uvTransform.value.copy(v.matrix),h===v&&u===v.version&&p===r.toneMapping||(A.material.needsUpdate=!0,h=v,u=v.version,p=r.toneMapping),A.layers.enableAll(),g.unshift(A,A.geometry,A.material,0,0,null))}}}function gp(r,t,e,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},A=p(null),l=A,c=!1;function h(y){return i.isWebGL2?r.bindVertexArray(y):a.bindVertexArrayOES(y)}function u(y){return i.isWebGL2?r.deleteVertexArray(y):a.deleteVertexArrayOES(y)}function p(y){let P=[],w=[],T=[];for(let R=0;R<n;R++)P[R]=0,w[R]=0,T[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:w,attributeDivisors:T,object:y,attributes:{},index:null}}function f(){let y=l.newAttributes;for(let P=0,w=y.length;P<w;P++)y[P]=0}function g(y){d(y,0)}function d(y,P){let w=l.newAttributes,T=l.enabledAttributes,R=l.attributeDivisors;w[y]=1,T[y]===0&&(r.enableVertexAttribArray(y),T[y]=1),R[y]!==P&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](y,P),R[y]=P)}function m(){let y=l.newAttributes,P=l.enabledAttributes;for(let w=0,T=P.length;w<T;w++)P[w]!==y[w]&&(r.disableVertexAttribArray(w),P[w]=0)}function v(y,P,w,T,R,C,O){O===!0?r.vertexAttribIPointer(y,P,w,R,C):r.vertexAttribPointer(y,P,w,T,R,C)}function M(){x(),c=!0,l!==A&&(l=A,h(l.object))}function x(){A.geometry=null,A.program=null,A.wireframe=!1}return{setup:function(y,P,w,T,R){let C=!1;if(s){let O=function(B,N,U){let X=U.wireframe===!0,ot=o[B.id];ot===void 0&&(ot={},o[B.id]=ot);let j=ot[N.id];j===void 0&&(j={},ot[N.id]=j);let G=j[X];return G===void 0&&(G=p(i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()),j[X]=G),G}(T,w,P);l!==O&&(l=O,h(l.object)),C=function(B,N,U,X){let ot=l.attributes,j=N.attributes,G=0,V=U.getAttributes();for(let Q in V)if(V[Q].location>=0){let Y=ot[Q],tt=j[Q];if(tt===void 0&&(Q==="instanceMatrix"&&B.instanceMatrix&&(tt=B.instanceMatrix),Q==="instanceColor"&&B.instanceColor&&(tt=B.instanceColor)),Y===void 0||Y.attribute!==tt||tt&&Y.data!==tt.data)return!0;G++}return l.attributesNum!==G||l.index!==X}(y,T,w,R),C&&function(B,N,U,X){let ot={},j=N.attributes,G=0,V=U.getAttributes();for(let Q in V)if(V[Q].location>=0){let Y=j[Q];Y===void 0&&(Q==="instanceMatrix"&&B.instanceMatrix&&(Y=B.instanceMatrix),Q==="instanceColor"&&B.instanceColor&&(Y=B.instanceColor));let tt={};tt.attribute=Y,Y&&Y.data&&(tt.data=Y.data),ot[Q]=tt,G++}l.attributes=ot,l.attributesNum=G,l.index=X}(y,T,w,R)}else{let O=P.wireframe===!0;l.geometry===T.id&&l.program===w.id&&l.wireframe===O||(l.geometry=T.id,l.program=w.id,l.wireframe=O,C=!0)}R!==null&&e.update(R,r.ELEMENT_ARRAY_BUFFER),(C||c)&&(c=!1,function(O,B,N,U){if(i.isWebGL2===!1&&(O.isInstancedMesh||U.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;f();let X=U.attributes,ot=N.getAttributes(),j=B.defaultAttributeValues;for(let G in ot){let V=ot[G];if(V.location>=0){let Q=X[G];if(Q===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),Q!==void 0){let Y=Q.normalized,tt=Q.itemSize,b=e.get(Q);if(b===void 0)continue;let D=b.buffer,H=b.type,Z=b.bytesPerElement,L=i.isWebGL2===!0&&(H===r.INT||H===r.UNSIGNED_INT||Q.gpuType===eh);if(Q.isInterleavedBufferAttribute){let K=Q.data,z=K.stride,F=Q.offset;if(K.isInstancedInterleavedBuffer){for(let k=0;k<V.locationSize;k++)d(V.location+k,K.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let k=0;k<V.locationSize;k++)g(V.location+k);r.bindBuffer(r.ARRAY_BUFFER,D);for(let k=0;k<V.locationSize;k++)v(V.location+k,tt/V.locationSize,H,Y,z*Z,(F+tt/V.locationSize*k)*Z,L)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)d(V.location+K,Q.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<V.locationSize;K++)g(V.location+K);r.bindBuffer(r.ARRAY_BUFFER,D);for(let K=0;K<V.locationSize;K++)v(V.location+K,tt/V.locationSize,H,Y,tt*Z,tt/V.locationSize*K*Z,L)}}else if(j!==void 0){let Y=j[G];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(V.location,Y);break;case 3:r.vertexAttrib3fv(V.location,Y);break;case 4:r.vertexAttrib4fv(V.location,Y);break;default:r.vertexAttrib1fv(V.location,Y)}}}}m()}(y,P,w,T),R!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:M,resetDefaultState:x,dispose:function(){M();for(let y in o){let P=o[y];for(let w in P){let T=P[w];for(let R in T)u(T[R].object),delete T[R];delete P[w]}delete o[y]}},releaseStatesOfGeometry:function(y){if(o[y.id]===void 0)return;let P=o[y.id];for(let w in P){let T=P[w];for(let R in T)u(T[R].object),delete T[R];delete P[w]}delete o[y.id]},releaseStatesOfProgram:function(y){for(let P in o){let w=o[P];if(w[y.id]===void 0)continue;let T=w[y.id];for(let R in T)u(T[R].object),delete T[R];delete w[y.id]}},initAttributes:f,enableAttribute:g,disableUnusedAttributes:m}}function mp(r,t,e,i){let n=i.isWebGL2,a;this.setMode=function(s){a=s},this.render=function(s,o){r.drawArrays(a,s,o),e.update(o,a,1)},this.renderInstances=function(s,o,A){if(A===0)return;let l,c;if(n)l=r,c="drawArraysInstanced";else if(l=t.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",l===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[c](a,s,o,A),e.update(o,a,A)},this.renderMultiDraw=function(s,o,A){if(A===0)return;let l=t.get("WEBGL_multi_draw");if(l===null)for(let c=0;c<A;c++)this.render(s[c],o[c]);else{l.multiDrawArraysWEBGL(a,s,0,o,0,A);let c=0;for(let h=0;h<A;h++)c+=o[h];e.update(c,a,1)}}}function vp(r,t,e){let i;function n(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",s=e.precision!==void 0?e.precision:"highp",o=n(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let A=a||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),m=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=a||t.has("OES_texture_float");return{isWebGL2:a,drawBuffers:A,getMaxAnisotropy:function(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:s,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:v&&M,maxSamples:a?r.getParameter(r.MAX_SAMPLES):0}}function Mp(r){let t=this,e=null,i=0,n=!1,a=!1,s=new We,o=new St,A={value:null,needsUpdate:!1};function l(c,h,u,p){let f=c!==null?c.length:0,g=null;if(f!==0){if(g=A.value,p!==!0||g===null){let d=u+4*f,m=h.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,M=u;v!==f;++v,M+=4)s.copy(c[v]).applyMatrix4(m,o),s.normal.toArray(g,M),g[M+3]=s.constant}A.value=g,A.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,g}this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(c,h){let u=c.length!==0||h||i!==0||n;return n=h,i=c.length,u},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(c,h){e=l(c,h,0)},this.setState=function(c,h,u){let p=c.clippingPlanes,f=c.clipIntersection,g=c.clipShadows,d=r.get(c);if(!n||p===null||p.length===0||a&&!g)a?l(null):function(){A.value!==e&&(A.value=e,A.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}();else{let m=a?0:i,v=4*m,M=d.clippingState||null;A.value=M,M=l(p,h,v,u);for(let x=0;x!==v;++x)M[x]=e[x];d.clippingState=M,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=m}}}function xp(r){let t=new WeakMap;function e(n,a){return a===Lo?n.mapping=Vn:a===Ro&&(n.mapping=Xn),n}function i(n){let a=n.target;a.removeEventListener("dispose",i);let s=t.get(a);s!==void 0&&(t.delete(a),s.dispose())}return{get:function(n){if(n&&n.isTexture){let a=n.mapping;if(a===Lo||a===Ro){if(t.has(n))return e(t.get(n).texture,n.mapping);{let s=n.image;if(s&&s.height>0){let o=new ko(s.height/2);return o.fromEquirectangularTexture(r,n),t.set(n,o),n.addEventListener("dispose",i),e(o.texture,n.mapping)}return null}}}return n},dispose:function(){t=new WeakMap}}}var Kn=class extends _r{constructor(t=-1,e=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,a=i-t,s=i+t,o=n+e,A=n-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=c*this.view.offsetY,A=o-c*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,A,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vc=[.125,.215,.35,.446,.526,.582],Mr=20,Mo=new Kn,Mc=new pt,xo=null,Po=0,yo=0,Zi=(1+Math.sqrt(5))/2,On=1/Zi,xc=[new _(1,1,1),new _(-1,1,1),new _(1,1,-1),new _(-1,1,-1),new _(0,Zi,On),new _(0,Zi,-On),new _(On,0,Zi),new _(-On,0,Zi),new _(Zi,On,0),new _(-Zi,On,0)],ja=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){xo=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xo,Po,yo),t.scissorTest=!1,ya(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vn||t.mapping===Xn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xo=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:le,minFilter:le,generateMipmaps:!1,type:Ri,format:xe,colorSpace:xi,depthBuffer:!1},n=Pc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(t,e,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(s){let o=[],A=[],l=[],c=s,h=s-4+1+vc.length;for(let u=0;u<h;u++){let p=Math.pow(2,c);A.push(p);let f=1/p;u>s-4?f=vc[u-s+4-1]:u===0&&(f=0),l.push(f);let g=1/(p-2),d=-g,m=1+g,v=[d,d,m,d,m,m,d,d,m,m,d,m],M=6,x=6,y=3,P=2,w=1,T=new Float32Array(y*x*M),R=new Float32Array(P*x*M),C=new Float32Array(w*x*M);for(let B=0;B<M;B++){let N=B%3*2/3-1,U=B>2?0:-1,X=[N,U,0,N+2/3,U,0,N+2/3,U+1,0,N,U,0,N+2/3,U+1,0,N,U+1,0];T.set(X,y*x*B),R.set(v,P*x*B);let ot=[B,B,B,B,B,B];C.set(ot,w*x*B)}let O=new Tt;O.setAttribute("position",new Rt(T,y)),O.setAttribute("uv",new Rt(R,P)),O.setAttribute("faceIndex",new Rt(C,w)),o.push(O),c>4&&c--}return{lodPlanes:o,sizeLods:A,sigmas:l}}(a)),this._blurMaterial=function(s,o,A){let l=new Float32Array(Mr),c=new _(0,1,0);return new ye({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/A,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:FA(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(a,t,e)}return n}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,i,n){let a=new ue(90,1,e,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],A=this._renderer,l=A.autoClear,c=A.toneMapping;A.getClearColor(Mc),A.toneMapping=Ti,A.autoClear=!1;let h=new Oe({name:"PMREM.Background",side:pe,depthWrite:!1,depthTest:!1}),u=new kt(new Ze,h),p=!1,f=t.background;f?f.isColor&&(h.color.copy(f),t.background=null,p=!0):(h.color.copy(Mc),p=!0);for(let g=0;g<6;g++){let d=g%3;d===0?(a.up.set(0,s[g],0),a.lookAt(o[g],0,0)):d===1?(a.up.set(0,0,s[g]),a.lookAt(0,o[g],0)):(a.up.set(0,s[g],0),a.lookAt(0,0,o[g]));let m=this._cubeSize;ya(n,d*m,g>2?m:0,m,m),A.setRenderTarget(n),p&&A.render(u,a),A.render(t,a)}u.geometry.dispose(),u.material.dispose(),A.toneMapping=c,A.autoClear=l,t.background=f}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Vn||t.mapping===Xn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());let a=n?this._cubemapMaterial:this._equirectMaterial,s=new kt(this._lodPlanes[0],a);a.uniforms.envMap.value=t;let o=this._cubeSize;ya(e,0,0,3*o,2*o),i.setRenderTarget(e),i.render(s,Mo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=xc[(n-1)%xc.length];this._blur(t,n-1,n,a,s)}e.autoClear=i}_blur(t,e,i,n,a){let s=this._pingPongRenderTarget;this._halfBlur(t,s,e,i,n,"latitudinal",a),this._halfBlur(s,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,s,o){let A=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new kt(this._lodPlanes[n],l),h=l.uniforms,u=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*u):2*Math.PI/39,f=a/p,g=isFinite(a)?1+Math.floor(3*f):Mr;g>Mr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let d=[],m=0;for(let x=0;x<Mr;++x){let y=x/f,P=Math.exp(-y*y/2);d.push(P),x===0?m+=P:x<g&&(m+=2*P)}for(let x=0;x<d.length;x++)d[x]=d[x]/m;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:v}=this;h.dTheta.value=p,h.mipInt.value=v-i;let M=this._sizeLods[n];ya(e,3*M*(n>v-4?n-v+4:0),4*(this._cubeSize-M),3*M,2*M),A.setRenderTarget(e),A.render(c,Mo)}};function Pc(r,t,e){let i=new ne(r,t,e);return i.texture.mapping=as,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function yc(){return new ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:FA(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function wc(){return new ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:FA(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function FA(){return`

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
	`}function Pp(r){let t=new WeakMap,e=null;function i(n){let a=n.target;a.removeEventListener("dispose",i);let s=t.get(a);s!==void 0&&(t.delete(a),s.dispose())}return{get:function(n){if(n&&n.isTexture){let a=n.mapping,s=a===Lo||a===Ro,o=a===Vn||a===Xn;if(s||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let A=t.get(n);return e===null&&(e=new ja(r)),A=s?e.fromEquirectangular(n,A):e.fromCubemap(n,A),t.set(n,A),A.texture}if(t.has(n))return t.get(n).texture;{let A=n.image;if(s&&A&&A.height>0||o&&A&&function(l){let c=0,h=6;for(let u=0;u<h;u++)l[u]!==void 0&&c++;return c===h}(A)){e===null&&(e=new ja(r));let l=s?e.fromEquirectangular(n):e.fromCubemap(n);return t.set(n,l),n.addEventListener("dispose",i),l.texture}return null}}}return n},dispose:function(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}}}function yp(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function wp(r,t,e,i){let n={},a=new WeakMap;function s(A){let l=A.target;l.index!==null&&t.remove(l.index);for(let h in l.attributes)t.remove(l.attributes[h]);for(let h in l.morphAttributes){let u=l.morphAttributes[h];for(let p=0,f=u.length;p<f;p++)t.remove(u[p])}l.removeEventListener("dispose",s),delete n[l.id];let c=a.get(l);c&&(t.remove(c),a.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,e.memory.geometries--}function o(A){let l=[],c=A.index,h=A.attributes.position,u=0;if(c!==null){let g=c.array;u=c.version;for(let d=0,m=g.length;d<m;d+=3){let v=g[d+0],M=g[d+1],x=g[d+2];l.push(v,M,M,x,x,v)}}else{if(h===void 0)return;{let g=h.array;u=h.version;for(let d=0,m=g.length/3-1;d<m;d+=3){let v=d+0,M=d+1,x=d+2;l.push(v,M,M,x,x,v)}}}let p=new(ch(l)?Ya:Wa)(l,1);p.version=u;let f=a.get(A);f&&t.remove(f),a.set(A,p)}return{get:function(A,l){return n[l.id]===!0||(l.addEventListener("dispose",s),n[l.id]=!0,e.memory.geometries++),l},update:function(A){let l=A.attributes;for(let h in l)t.update(l[h],r.ARRAY_BUFFER);let c=A.morphAttributes;for(let h in c){let u=c[h];for(let p=0,f=u.length;p<f;p++)t.update(u[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(A){let l=a.get(A);if(l){let c=A.index;c!==null&&l.version<c.version&&o(A)}else o(A);return a.get(A)}}}function bp(r,t,e,i){let n=i.isWebGL2,a,s,o;this.setMode=function(A){a=A},this.setIndex=function(A){s=A.type,o=A.bytesPerElement},this.render=function(A,l){r.drawElements(a,l,s,A*o),e.update(l,a,1)},this.renderInstances=function(A,l,c){if(c===0)return;let h,u;if(n)h=r,u="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",h===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[u](a,l,s,A*o,c),e.update(l,a,c)},this.renderMultiDraw=function(A,l,c){if(c===0)return;let h=t.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<c;u++)this.render(A[u]/o,l[u]);else{h.multiDrawElementsWEBGL(a,l,0,s,A,0,c);let u=0;for(let p=0;p<c;p++)u+=l[p];e.update(u,a,1)}}}function Dp(r){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(e,i,n){switch(t.calls++,i){case r.TRIANGLES:t.triangles+=n*(e/3);break;case r.LINES:t.lines+=n*(e/2);break;case r.LINE_STRIP:t.lines+=n*(e-1);break;case r.LINE_LOOP:t.lines+=n*e;break;case r.POINTS:t.points+=n*e;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Ep(r,t){return r[0]-t[0]}function _p(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Bp(r,t,e){let i={},n=new Float32Array(8),a=new WeakMap,s=new Gt,o=[];for(let A=0;A<8;A++)o[A]=[A,0];return{update:function(A,l,c){let h=A.morphTargetInfluences;if(t.isWebGL2===!0){let u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=u!==void 0?u.length:0,f=a.get(l);if(f===void 0||f.count!==p){let N=function(){O.dispose(),a.delete(l),l.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();let m=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],P=l.morphAttributes.color||[],w=0;m===!0&&(w=1),v===!0&&(w=2),M===!0&&(w=3);let T=l.attributes.position.count*w,R=1;T>t.maxTextureSize&&(R=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let C=new Float32Array(T*R*4*p),O=new Va(C,T,R,p);O.type=Ci,O.needsUpdate=!0;let B=4*w;for(let U=0;U<p;U++){let X=x[U],ot=y[U],j=P[U],G=T*R*4*U;for(let V=0;V<X.count;V++){let Q=V*B;m===!0&&(s.fromBufferAttribute(X,V),C[G+Q+0]=s.x,C[G+Q+1]=s.y,C[G+Q+2]=s.z,C[G+Q+3]=0),v===!0&&(s.fromBufferAttribute(ot,V),C[G+Q+4]=s.x,C[G+Q+5]=s.y,C[G+Q+6]=s.z,C[G+Q+7]=0),M===!0&&(s.fromBufferAttribute(j,V),C[G+Q+8]=s.x,C[G+Q+9]=s.y,C[G+Q+10]=s.z,C[G+Q+11]=j.itemSize===4?s.w:1)}}f={count:p,texture:O,size:new at(T,R)},a.set(l,f),l.addEventListener("dispose",N)}let g=0;for(let m=0;m<h.length;m++)g+=h[m];let d=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",d),c.getUniforms().setValue(r,"morphTargetInfluences",h),c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{let u=h===void 0?0:h.length,p=i[l.id];if(p===void 0||p.length!==u){p=[];for(let v=0;v<u;v++)p[v]=[v,0];i[l.id]=p}for(let v=0;v<u;v++){let M=p[v];M[0]=v,M[1]=h[v]}p.sort(_p);for(let v=0;v<8;v++)v<u&&p[v][1]?(o[v][0]=p[v][0],o[v][1]=p[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Ep);let f=l.morphAttributes.position,g=l.morphAttributes.normal,d=0;for(let v=0;v<8;v++){let M=o[v],x=M[0],y=M[1];x!==Number.MAX_SAFE_INTEGER&&y?(f&&l.getAttribute("morphTarget"+v)!==f[x]&&l.setAttribute("morphTarget"+v,f[x]),g&&l.getAttribute("morphNormal"+v)!==g[x]&&l.setAttribute("morphNormal"+v,g[x]),n[v]=y,d+=y):(f&&l.hasAttribute("morphTarget"+v)===!0&&l.deleteAttribute("morphTarget"+v),g&&l.hasAttribute("morphNormal"+v)===!0&&l.deleteAttribute("morphNormal"+v),n[v]=0)}let m=l.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",m),c.getUniforms().setValue(r,"morphTargetInfluences",n)}}}}function Sp(r,t,e,i){let n=new WeakMap;function a(s){let o=s.target;o.removeEventListener("dispose",a),e.remove(o.instanceMatrix),o.instanceColor!==null&&e.remove(o.instanceColor)}return{update:function(s){let o=i.render.frame,A=s.geometry,l=t.get(s,A);if(n.get(l)!==o&&(t.update(l),n.set(l,o)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),n.get(s)!==o&&(e.update(s.instanceMatrix,r.ARRAY_BUFFER),s.instanceColor!==null&&e.update(s.instanceColor,r.ARRAY_BUFFER),n.set(s,o))),s.isSkinnedMesh){let c=s.skeleton;n.get(c)!==o&&(c.update(),n.set(c,o))}return l},dispose:function(){n=new WeakMap}}}var Zn=class extends Ne{constructor(t,e,i,n,a,s,o,A,l,c){if((c=c!==void 0?c:an)!==an&&c!==Wn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===an&&(i=ai),i===void 0&&c===Wn&&(i=rn),super(null,n,a,s,o,A,c,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ce,this.minFilter=A!==void 0?A:ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fh=new Ne,dh=new Zn(1,1);dh.compareFunction=515;var gh=new Va,mh=new Qo,vh=new qa,bc=[],Dc=[],Ec=new Float32Array(16),_c=new Float32Array(9),Bc=new Float32Array(4);function nr(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,a=bc[n];if(a===void 0&&(a=new Float32Array(n),bc[n]=a),t!==0){i.toArray(a,0);for(let s=1,o=0;s!==t;++s)o+=e,r[s].toArray(a,o)}return a}function re(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ae(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function os(r,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Cp(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Tp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;r.uniform2fv(this.addr,t),ae(e,t)}}function Ip(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)e[0]===t.r&&e[1]===t.g&&e[2]===t.b||(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(re(e,t))return;r.uniform3fv(this.addr,t),ae(e,t)}}function Lp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;r.uniform4fv(this.addr,t),ae(e,t)}}function Rp(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(re(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ae(e,t)}else{if(re(e,i))return;Bc.set(i),r.uniformMatrix2fv(this.addr,!1,Bc),ae(e,i)}}function zp(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(re(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ae(e,t)}else{if(re(e,i))return;_c.set(i),r.uniformMatrix3fv(this.addr,!1,_c),ae(e,i)}}function Up(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(re(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ae(e,t)}else{if(re(e,i))return;Ec.set(i),r.uniformMatrix4fv(this.addr,!1,Ec),ae(e,i)}}function Np(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Op(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;r.uniform2iv(this.addr,t),ae(e,t)}}function Fp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;r.uniform3iv(this.addr,t),ae(e,t)}}function Hp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;r.uniform4iv(this.addr,t),ae(e,t)}}function Qp(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Gp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;r.uniform2uiv(this.addr,t),ae(e,t)}}function kp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;r.uniform3uiv(this.addr,t),ae(e,t)}}function Vp(r,t){let e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;r.uniform4uiv(this.addr,t),ae(e,t)}}function Xp(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let a=this.type===r.SAMPLER_2D_SHADOW?dh:fh;e.setTexture2D(t||a,n)}function Wp(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||mh,n)}function Yp(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||vh,n)}function qp(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||gh,n)}function jp(r,t){r.uniform1fv(this.addr,t)}function Jp(r,t){let e=nr(t,this.size,2);r.uniform2fv(this.addr,e)}function Kp(r,t){let e=nr(t,this.size,3);r.uniform3fv(this.addr,e)}function Zp(r,t){let e=nr(t,this.size,4);r.uniform4fv(this.addr,e)}function $p(r,t){let e=nr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function tf(r,t){let e=nr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ef(r,t){let e=nr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function nf(r,t){r.uniform1iv(this.addr,t)}function rf(r,t){r.uniform2iv(this.addr,t)}function af(r,t){r.uniform3iv(this.addr,t)}function sf(r,t){r.uniform4iv(this.addr,t)}function of(r,t){r.uniform1uiv(this.addr,t)}function Af(r,t){r.uniform2uiv(this.addr,t)}function lf(r,t){r.uniform3uiv(this.addr,t)}function cf(r,t){r.uniform4uiv(this.addr,t)}function hf(r,t,e){let i=this.cache,n=t.length,a=os(e,n);re(i,a)||(r.uniform1iv(this.addr,a),ae(i,a));for(let s=0;s!==n;++s)e.setTexture2D(t[s]||fh,a[s])}function uf(r,t,e){let i=this.cache,n=t.length,a=os(e,n);re(i,a)||(r.uniform1iv(this.addr,a),ae(i,a));for(let s=0;s!==n;++s)e.setTexture3D(t[s]||mh,a[s])}function pf(r,t,e){let i=this.cache,n=t.length,a=os(e,n);re(i,a)||(r.uniform1iv(this.addr,a),ae(i,a));for(let s=0;s!==n;++s)e.setTextureCube(t[s]||vh,a[s])}function ff(r,t,e){let i=this.cache,n=t.length,a=os(e,n);re(i,a)||(r.uniform1iv(this.addr,a),ae(i,a));for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||gh,a[s])}var Vo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=function(n){switch(n){case 5126:return Cp;case 35664:return Tp;case 35665:return Ip;case 35666:return Lp;case 35674:return Rp;case 35675:return zp;case 35676:return Up;case 5124:case 35670:return Np;case 35667:case 35671:return Op;case 35668:case 35672:return Fp;case 35669:case 35673:return Hp;case 5125:return Qp;case 36294:return Gp;case 36295:return kp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return qp}}(e.type)}},Xo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=function(n){switch(n){case 5126:return jp;case 35664:return Jp;case 35665:return Kp;case 35666:return Zp;case 35674:return $p;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return rf;case 35668:case 35672:return af;case 35669:case 35673:return sf;case 5125:return of;case 36294:return Af;case 36295:return lf;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return ff}}(e.type)}},Wo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let a=0,s=n.length;a!==s;++a){let o=n[a];o.setValue(t,e[o.id],i)}}},wo=/(\w+)(\])?(\[|\.)?/g;function Sc(r,t){r.seq.push(t),r.map[t.id]=t}function df(r,t,e){let i=r.name,n=i.length;for(wo.lastIndex=0;;){let a=wo.exec(i),s=wo.lastIndex,o=a[1],A=a[2]==="]",l=a[3];if(A&&(o|=0),l===void 0||l==="["&&s+2===n){Sc(e,l===void 0?new Vo(o,r,t):new Xo(o,r,t));break}{let c=e.map[o];c===void 0&&(c=new Wo(o),Sc(e,c)),e=c}}}var kn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let a=t.getActiveUniform(e,n);df(a,t.getUniformLocation(e,a.name),this)}}setValue(t,e,i,n){let a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,s=e.length;a!==s;++a){let o=e[a],A=i[o.id];A.needsUpdate!==!1&&o.setValue(t,A.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,a=t.length;n!==a;++n){let s=t[n];s.id in e&&i.push(s)}return i}};function Cc(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var gf=37297,mf=0;function Tc(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let a=/ERROR: 0:(\d+)/.exec(n);if(a){let s=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+function(o,A){let l=o.split(`
`),c=[],h=Math.max(A-6,0),u=Math.min(A+6,l.length);for(let p=h;p<u;p++){let f=p+1;c.push(`${f===A?">":" "} ${f}: ${l[p]}`)}return c.join(`
`)}(r.getShaderSource(t),s)}return n}function vf(r,t){let e=function(i){let n=Qt.getPrimaries(Qt.workingColorSpace),a=Qt.getPrimaries(i),s;switch(n===a?s="":n===Fa&&a===Oa?s="LinearDisplayP3ToLinearSRGB":n===Oa&&a===Fa&&(s="LinearSRGBToLinearDisplayP3"),i){case xi:case ss:return[s,"LinearTransferOETF"];case Zt:case NA:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[s,"LinearTransferOETF"]}}(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Mf(r,t){let e;switch(t){case ku:e="Linear";break;case Vu:e="Reinhard";break;case Xu:e="OptimizedCineon";break;case Wu:e="ACESFilmic";break;case qu:e="AgX";break;case Yu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Fn(r){return r!==""}function Ic(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(r){return r.replace(xf,yf)}var Pf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yf(r,t){let e=Et[t];if(e===void 0){let i=Pf.get(t);if(i===void 0)throw new Error("Can not resolve #include <"+t+">");e=Et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i)}return Yo(e)}var wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(r){return r.replace(wf,bf)}function bf(r,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function zc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Df(r,t,e,i){let n=r.getContext(),a=e.defines,s=e.vertexShader,o=e.fragmentShader,A=function(B){let N="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===Kc?N="SHADOWMAP_TYPE_PCF":B.shadowMapType===zA?N="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===Mi&&(N="SHADOWMAP_TYPE_VSM"),N}(e),l=function(B){let N="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case Vn:case Xn:N="ENVMAP_TYPE_CUBE";break;case as:N="ENVMAP_TYPE_CUBE_UV"}return N}(e),c=function(B){let N="ENVMAP_MODE_REFLECTION";return B.envMap&&B.envMapMode===Xn&&(N="ENVMAP_MODE_REFRACTION"),N}(e),h=function(B){let N="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case $c:N="ENVMAP_BLENDING_MULTIPLY";break;case Qu:N="ENVMAP_BLENDING_MIX";break;case Gu:N="ENVMAP_BLENDING_ADD"}return N}(e),u=function(B){let N=B.envMapCubeUVHeight;if(N===null)return null;let U=Math.log2(N)-2,X=1/N;return{texelWidth:1/(3*Math.max(Math.pow(2,U),112)),texelHeight:X,maxMip:U}}(e),p=e.isWebGL2?"":function(B){return[B.extensionDerivatives||B.envMapCubeUVHeight||B.bumpMap||B.normalMapTangentSpace||B.clearcoatNormalMap||B.flatShading||B.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(B.extensionFragDepth||B.logarithmicDepthBuffer)&&B.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",B.extensionDrawBuffers&&B.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(B.extensionShaderTextureLOD||B.envMap||B.transmission)&&B.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fn).join(`
`)}(e),f=function(B){return[B.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Fn).join(`
`)}(e),g=function(B){let N=[];for(let U in B){let X=B[U];X!==!1&&N.push("#define "+U+" "+X)}return N.join(`
`)}(a),d=n.createProgram(),m,v,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fn).join(`
`),m.length>0&&(m+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fn).join(`
`),v.length>0&&(v+=`
`)):(m=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+A:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fn).join(`
`),v=[p,zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+A:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?Et.tonemapping_pars_fragment:"",e.toneMapping!==Ti?Mf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,vf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fn).join(`
`)),s=Yo(s),s=Ic(s,e),s=Lc(s,e),o=Yo(o),o=Ic(o,e),o=Lc(o,e),s=Rc(s),o=Rc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let x=M+m+s,y=M+v+o,P=Cc(n,n.VERTEX_SHADER,x),w=Cc(n,n.FRAGMENT_SHADER,y);function T(B){if(r.debug.checkShaderErrors){let N=n.getProgramInfoLog(d).trim(),U=n.getShaderInfoLog(P).trim(),X=n.getShaderInfoLog(w).trim(),ot=!0,j=!0;if(n.getProgramParameter(d,n.LINK_STATUS)===!1)if(ot=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,d,P,w);else{let G=Tc(n,P,"vertex"),V=Tc(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,n.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+G+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):U!==""&&X!==""||(j=!1);j&&(B.diagnostics={runnable:ot,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:X,prefix:v}})}n.deleteShader(P),n.deleteShader(w),R=new kn(n,d),C=function(N,U){let X={},ot=N.getProgramParameter(U,N.ACTIVE_ATTRIBUTES);for(let j=0;j<ot;j++){let G=N.getActiveAttrib(U,j),V=G.name,Q=1;G.type===N.FLOAT_MAT2&&(Q=2),G.type===N.FLOAT_MAT3&&(Q=3),G.type===N.FLOAT_MAT4&&(Q=4),X[V]={type:G.type,location:N.getAttribLocation(U,V),locationSize:Q}}return X}(n,d)}let R,C;n.attachShader(d,P),n.attachShader(d,w),e.index0AttributeName!==void 0?n.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d),this.getUniforms=function(){return R===void 0&&T(this),R},this.getAttributes=function(){return C===void 0&&T(this),C};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=n.getProgramParameter(d,gf)),O},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mf++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=P,this.fragmentShader=w,this}var Ef=0,qo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new jo(t),e.set(t,i)),i}},jo=class{constructor(t){this.id=Ef++,this.code=t,this.usedTimes=0}};function _f(r,t,e,i,n,a,s){let o=new Xa,A=new qo,l=[],c=n.isWebGL2,h=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(d){return d===0?"uv":`uv${d}`}return{getParameters:function(d,m,v,M,x){let y=M.fog,P=x.geometry,w=d.isMeshStandardMaterial?M.environment:null,T=(d.isMeshStandardMaterial?e:t).get(d.envMap||w),R=T&&T.mapping===as?T.image.height:null,C=f[d.type];d.precision!==null&&(p=n.getMaxPrecision(d.precision),p!==d.precision&&console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",p,"instead."));let O=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,B=O!==void 0?O.length:0,N,U,X,ot,j=0;if(P.morphAttributes.position!==void 0&&(j=1),P.morphAttributes.normal!==void 0&&(j=2),P.morphAttributes.color!==void 0&&(j=3),C){let fe=ni[C];N=fe.vertexShader,U=fe.fragmentShader}else N=d.vertexShader,U=d.fragmentShader,A.update(d),X=A.getVertexShaderID(d),ot=A.getFragmentShaderID(d);let G=r.getRenderTarget(),V=x.isInstancedMesh===!0,Q=x.isBatchedMesh===!0,Y=!!d.map,tt=!!d.matcap,b=!!T,D=!!d.aoMap,H=!!d.lightMap,Z=!!d.bumpMap,L=!!d.normalMap,K=!!d.displacementMap,z=!!d.emissiveMap,F=!!d.metalnessMap,k=!!d.roughnessMap,nt=d.anisotropy>0,it=d.clearcoat>0,E=d.iridescence>0,st=d.sheen>0,W=d.transmission>0,q=nt&&!!d.anisotropyMap,At=it&&!!d.clearcoatMap,ht=it&&!!d.clearcoatNormalMap,ft=it&&!!d.clearcoatRoughnessMap,dt=E&&!!d.iridescenceMap,Dt=E&&!!d.iridescenceThicknessMap,gt=st&&!!d.sheenColorMap,mt=st&&!!d.sheenRoughnessMap,_t=!!d.specularMap,oe=!!d.specularColorMap,xt=!!d.specularIntensityMap,Ot=W&&!!d.transmissionMap,It=W&&!!d.thicknessMap,jr=!!d.gradientMap,yn=!!d.alphaMap,Jr=d.alphaTest>0,Le=!!d.alphaHash,_e=!!d.extensions,wn=!!P.attributes.uv1,$=!!P.attributes.uv2,Kr=!!P.attributes.uv3,hr=Ti;return d.toneMapped&&(G!==null&&G.isXRRenderTarget!==!0||(hr=r.toneMapping)),{isWebGL2:c,shaderID:C,shaderType:d.type,shaderName:d.name,vertexShader:N,fragmentShader:U,defines:d.defines,customVertexShaderID:X,customFragmentShaderID:ot,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:p,batching:Q,instancing:V,instancingColor:V&&x.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:G===null?r.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:xi,map:Y,matcap:tt,envMap:b,envMapMode:b&&T.mapping,envMapCubeUVHeight:R,aoMap:D,lightMap:H,bumpMap:Z,normalMap:L,displacementMap:u&&K,emissiveMap:z,normalMapObjectSpace:L&&d.normalMapType===1,normalMapTangentSpace:L&&d.normalMapType===0,metalnessMap:F,roughnessMap:k,anisotropy:nt,anisotropyMap:q,clearcoat:it,clearcoatMap:At,clearcoatNormalMap:ht,clearcoatRoughnessMap:ft,iridescence:E,iridescenceMap:dt,iridescenceThicknessMap:Dt,sheen:st,sheenColorMap:gt,sheenRoughnessMap:mt,specularMap:_t,specularColorMap:oe,specularIntensityMap:xt,transmission:W,transmissionMap:Ot,thicknessMap:It,gradientMap:jr,opaque:d.transparent===!1&&d.blending===1,alphaMap:yn,alphaTest:Jr,alphaHash:Le,combine:d.combine,mapUv:Y&&g(d.map.channel),aoMapUv:D&&g(d.aoMap.channel),lightMapUv:H&&g(d.lightMap.channel),bumpMapUv:Z&&g(d.bumpMap.channel),normalMapUv:L&&g(d.normalMap.channel),displacementMapUv:K&&g(d.displacementMap.channel),emissiveMapUv:z&&g(d.emissiveMap.channel),metalnessMapUv:F&&g(d.metalnessMap.channel),roughnessMapUv:k&&g(d.roughnessMap.channel),anisotropyMapUv:q&&g(d.anisotropyMap.channel),clearcoatMapUv:At&&g(d.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&g(d.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&g(d.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&g(d.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&g(d.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(d.sheenRoughnessMap.channel),specularMapUv:_t&&g(d.specularMap.channel),specularColorMapUv:oe&&g(d.specularColorMap.channel),specularIntensityMapUv:xt&&g(d.specularIntensityMap.channel),transmissionMapUv:Ot&&g(d.transmissionMap.channel),thicknessMapUv:It&&g(d.thicknessMap.channel),alphaMapUv:yn&&g(d.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(L||nt),vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:wn,vertexUv2s:$,vertexUv3s:Kr,pointsUvs:x.isPoints===!0&&!!P.attributes.uv&&(Y||yn),fog:!!y,useFog:d.fog===!0,fogExp2:y&&y.isFogExp2,flatShading:d.flatShading===!0,sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:x.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:j,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:d.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:hr,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Y&&d.map.isVideoTexture===!0&&Qt.getTransfer(d.map.colorSpace)===Vt,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===2,flipSided:d.side===pe,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionDerivatives:_e&&d.extensions.derivatives===!0,extensionFragDepth:_e&&d.extensions.fragDepth===!0,extensionDrawBuffers:_e&&d.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&d.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&d.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()}},getProgramCacheKey:function(d){let m=[];if(d.shaderID?m.push(d.shaderID):(m.push(d.customVertexShaderID),m.push(d.customFragmentShaderID)),d.defines!==void 0)for(let v in d.defines)m.push(v),m.push(d.defines[v]);return d.isRawShaderMaterial===!1&&(function(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}(m,d),function(v,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),v.push(o.mask)}(m,d),m.push(r.outputColorSpace)),m.push(d.customProgramCacheKey),m.join()},getUniforms:function(d){let m=f[d.type],v;if(m){let M=ni[m];v=OA.clone(M.uniforms)}else v=d.uniforms;return v},acquireProgram:function(d,m){let v;for(let M=0,x=l.length;M<x;M++){let y=l[M];if(y.cacheKey===m){v=y,++v.usedTimes;break}}return v===void 0&&(v=new Df(r,m,d,a),l.push(v)),v},releaseProgram:function(d){if(--d.usedTimes==0){let m=l.indexOf(d);l[m]=l[l.length-1],l.pop(),d.destroy()}},releaseShaderCache:function(d){A.remove(d)},programs:l,dispose:function(){A.dispose()}}}function Bf(){let r=new WeakMap;return{get:function(t){let e=r.get(t);return e===void 0&&(e={},r.set(t,e)),e},remove:function(t){r.delete(t)},update:function(t,e,i){r.get(t)[e]=i},dispose:function(){r=new WeakMap}}}function Sf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Uc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Nc(){let r=[],t=0,e=[],i=[],n=[];function a(s,o,A,l,c,h){let u=r[t];return u===void 0?(u={id:s.id,object:s,geometry:o,material:A,groupOrder:l,renderOrder:s.renderOrder,z:c,group:h},r[t]=u):(u.id=s.id,u.object=s,u.geometry=o,u.material=A,u.groupOrder=l,u.renderOrder=s.renderOrder,u.z=c,u.group=h),t++,u}return{opaque:e,transmissive:i,transparent:n,init:function(){t=0,e.length=0,i.length=0,n.length=0},push:function(s,o,A,l,c,h){let u=a(s,o,A,l,c,h);A.transmission>0?i.push(u):A.transparent===!0?n.push(u):e.push(u)},unshift:function(s,o,A,l,c,h){let u=a(s,o,A,l,c,h);A.transmission>0?i.unshift(u):A.transparent===!0?n.unshift(u):e.unshift(u)},finish:function(){for(let s=t,o=r.length;s<o;s++){let A=r[s];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}},sort:function(s,o){e.length>1&&e.sort(s||Sf),i.length>1&&i.sort(o||Uc),n.length>1&&n.sort(o||Uc)}}}function Cf(){let r=new WeakMap;return{get:function(t,e){let i=r.get(t),n;return i===void 0?(n=new Nc,r.set(t,[n])):e>=i.length?(n=new Nc,i.push(n)):n=i[e],n},dispose:function(){r=new WeakMap}}}function Tf(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new _,color:new pt};break;case"SpotLight":e={position:new _,direction:new _,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new _,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new _,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new _,halfWidth:new _,halfHeight:new _}}return r[t.id]=e,e}}}var If=0;function Lf(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Rf(r,t){let e=new Tf,i=function(){let A={};return{get:function(l){if(A[l.id]!==void 0)return A[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3}}return A[l.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let A=0;A<9;A++)n.probe.push(new _);let a=new _,s=new yt,o=new yt;return{setup:function(A,l){let c=0,h=0,u=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let p=0,f=0,g=0,d=0,m=0,v=0,M=0,x=0,y=0,P=0,w=0;A.sort(Lf);let T=l===!0?Math.PI:1;for(let C=0,O=A.length;C<O;C++){let B=A[C],N=B.color,U=B.intensity,X=B.distance,ot=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)c+=N.r*U*T,h+=N.g*U*T,u+=N.b*U*T;else if(B.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(B.sh.coefficients[j],U);w++}else if(B.isDirectionalLight){let j=e.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*T),B.castShadow){let G=B.shadow,V=i.get(B);V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=ot,n.directionalShadowMatrix[p]=B.shadow.matrix,v++}n.directional[p]=j,p++}else if(B.isSpotLight){let j=e.get(B);j.position.setFromMatrixPosition(B.matrixWorld),j.color.copy(N).multiplyScalar(U*T),j.distance=X,j.coneCos=Math.cos(B.angle),j.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),j.decay=B.decay,n.spot[g]=j;let G=B.shadow;if(B.map&&(n.spotLightMap[y]=B.map,y++,G.updateMatrices(B),B.castShadow&&P++),n.spotLightMatrix[g]=G.matrix,B.castShadow){let V=i.get(B);V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=ot,x++}g++}else if(B.isRectAreaLight){let j=e.get(B);j.color.copy(N).multiplyScalar(U),j.halfWidth.set(.5*B.width,0,0),j.halfHeight.set(0,.5*B.height,0),n.rectArea[d]=j,d++}else if(B.isPointLight){let j=e.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*T),j.distance=B.distance,j.decay=B.decay,B.castShadow){let G=B.shadow,V=i.get(B);V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,n.pointShadow[f]=V,n.pointShadowMap[f]=ot,n.pointShadowMatrix[f]=B.shadow.matrix,M++}n.point[f]=j,f++}else if(B.isHemisphereLight){let j=e.get(B);j.skyColor.copy(B.color).multiplyScalar(U*T),j.groundColor.copy(B.groundColor).multiplyScalar(U*T),n.hemi[m]=j,m++}}d>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=u;let R=n.hash;R.directionalLength===p&&R.pointLength===f&&R.spotLength===g&&R.rectAreaLength===d&&R.hemiLength===m&&R.numDirectionalShadows===v&&R.numPointShadows===M&&R.numSpotShadows===x&&R.numSpotMaps===y&&R.numLightProbes===w||(n.directional.length=p,n.spot.length=g,n.rectArea.length=d,n.point.length=f,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+y-P,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=w,R.directionalLength=p,R.pointLength=f,R.spotLength=g,R.rectAreaLength=d,R.hemiLength=m,R.numDirectionalShadows=v,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=y,R.numLightProbes=w,n.version=If++)},setupView:function(A,l){let c=0,h=0,u=0,p=0,f=0,g=l.matrixWorldInverse;for(let d=0,m=A.length;d<m;d++){let v=A[d];if(v.isDirectionalLight){let M=n.directional[c];M.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),c++}else if(v.isSpotLight){let M=n.spot[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(g),u++}else if(v.isRectAreaLight){let M=n.rectArea[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(.5*v.width,0,0),M.halfHeight.set(0,.5*v.height,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){let M=n.hemi[f];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),f++}}},state:n}}function Oc(r,t){let e=new Rf(r,t),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:function(a){e.setup(i,a)},setupLightsView:function(a){e.setupView(i,a)},pushLight:function(a){i.push(a)},pushShadow:function(a){n.push(a)}}}function zf(r,t){let e=new WeakMap;return{get:function(i,n=0){let a=e.get(i),s;return a===void 0?(s=new Oc(r,t),e.set(i,[s])):n>=a.length?(s=new Oc(r,t),a.push(s)):s=a[n],s},dispose:function(){e=new WeakMap}}}var Jo=class extends on{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ko=class extends on{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Uf(r,t,e){let i=new Ui,n=new at,a=new at,s=new Gt,o=new Jo({depthPacking:3201}),A=new Ko,l={},c=e.maxTextureSize,h={[Li]:pe,[pe]:Li,2:2},u=new ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new Tt;f.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new kt(f,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let m=this.type;function v(P,w){let T=t.update(g);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ne(n.x,n.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(w,null,T,u,g,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(w,null,T,p,g,null)}function M(P,w,T,R){let C=null,O=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(O!==void 0)C=O;else if(C=T.isPointLight===!0?A:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let B=C.uuid,N=w.uuid,U=l[B];U===void 0&&(U={},l[B]=U);let X=U[N];X===void 0&&(X=C.clone(),U[N]=X,w.addEventListener("dispose",y)),C=X}return C.visible=w.visible,C.wireframe=w.wireframe,C.side=R===Mi?w.shadowSide!==null?w.shadowSide:w.side:w.shadowSide!==null?w.shadowSide:h[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(r.properties.get(C).light=T),C}function x(P,w,T,R,C){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===Mi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);let B=t.update(P),N=P.material;if(Array.isArray(N)){let U=B.groups;for(let X=0,ot=U.length;X<ot;X++){let j=U[X],G=N[j.materialIndex];if(G&&G.visible){let V=M(P,G,R,C);P.onBeforeShadow(r,P,w,T,B,V,j),r.renderBufferDirect(T,null,B,V,P,j),P.onAfterShadow(r,P,w,T,B,V,j)}}}else if(N.visible){let U=M(P,N,R,C);P.onBeforeShadow(r,P,w,T,B,U,null),r.renderBufferDirect(T,null,B,U,P,null),P.onAfterShadow(r,P,w,T,B,U,null)}}let O=P.children;for(let B=0,N=O.length;B<N;B++)x(O[B],w,T,R,C)}function y(P){P.target.removeEventListener("dispose",y);for(let w in l){let T=l[w],R=P.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}this.render=function(P,w,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||P.length===0)return;let R=r.getRenderTarget(),C=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),B=r.state;B.setBlending(0),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let N=m!==Mi&&this.type===Mi,U=m===Mi&&this.type!==Mi;for(let X=0,ot=P.length;X<ot;X++){let j=P[X],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let V=G.getFrameExtents();if(n.multiply(V),a.copy(G.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(a.x=Math.floor(c/V.x),n.x=a.x*V.x,G.mapSize.x=a.x),n.y>c&&(a.y=Math.floor(c/V.y),n.y=a.y*V.y,G.mapSize.y=a.y)),G.map===null||N===!0||U===!0){let Y=this.type!==Mi?{minFilter:ce,magFilter:ce}:{};G.map!==null&&G.map.dispose(),G.map=new ne(n.x,n.y,Y),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let Q=G.getViewportCount();for(let Y=0;Y<Q;Y++){let tt=G.getViewport(Y);s.set(a.x*tt.x,a.y*tt.y,a.x*tt.z,a.y*tt.w),B.viewport(s),G.updateMatrices(j,Y),i=G.getFrustum(),x(w,T,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Mi&&v(G,T),G.needsUpdate=!1}m=this.type,d.needsUpdate=!1,r.setRenderTarget(R,C,O)}}function Nf(r,t,e){let i=e.isWebGL2,n=new function(){let E=!1,st=new Gt,W=null,q=new Gt(0,0,0,0);return{setMask:function(At){W===At||E||(r.colorMask(At,At,At,At),W=At)},setLocked:function(At){E=At},setClear:function(At,ht,ft,dt,Dt){Dt===!0&&(At*=dt,ht*=dt,ft*=dt),st.set(At,ht,ft,dt),q.equals(st)===!1&&(r.clearColor(At,ht,ft,dt),q.copy(st))},reset:function(){E=!1,W=null,q.set(-1,0,0,0)}}},a=new function(){let E=!1,st=null,W=null,q=null;return{setTest:function(At){At?Z(r.DEPTH_TEST):L(r.DEPTH_TEST)},setMask:function(At){st===At||E||(r.depthMask(At),st=At)},setFunc:function(At){if(W!==At){switch(At){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}W=At}},setLocked:function(At){E=At},setClear:function(At){q!==At&&(r.clearDepth(At),q=At)},reset:function(){E=!1,st=null,W=null,q=null}}},s=new function(){let E=!1,st=null,W=null,q=null,At=null,ht=null,ft=null,dt=null,Dt=null;return{setTest:function(gt){E||(gt?Z(r.STENCIL_TEST):L(r.STENCIL_TEST))},setMask:function(gt){st===gt||E||(r.stencilMask(gt),st=gt)},setFunc:function(gt,mt,_t){W===gt&&q===mt&&At===_t||(r.stencilFunc(gt,mt,_t),W=gt,q=mt,At=_t)},setOp:function(gt,mt,_t){ht===gt&&ft===mt&&dt===_t||(r.stencilOp(gt,mt,_t),ht=gt,ft=mt,dt=_t)},setLocked:function(gt){E=gt},setClear:function(gt){Dt!==gt&&(r.clearStencil(gt),Dt=gt)},reset:function(){E=!1,st=null,W=null,q=null,At=null,ht=null,ft=null,dt=null,Dt=null}}},o=new WeakMap,A=new WeakMap,l={},c={},h=new WeakMap,u=[],p=null,f=!1,g=null,d=null,m=null,v=null,M=null,x=null,y=null,P=new pt(0,0,0),w=0,T=!1,R=null,C=null,O=null,B=null,N=null,U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ot=0,j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=ot>=1):j.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=ot>=2);let G=null,V={},Q=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),tt=new Gt().fromArray(Q),b=new Gt().fromArray(Y);function D(E,st,W,q){let At=new Uint8Array(4),ht=r.createTexture();r.bindTexture(E,ht),r.texParameteri(E,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(E,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ft=0;ft<W;ft++)!i||E!==r.TEXTURE_3D&&E!==r.TEXTURE_2D_ARRAY?r.texImage2D(st+ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage3D(st,0,r.RGBA,1,1,q,0,r.RGBA,r.UNSIGNED_BYTE,At);return ht}let H={};function Z(E){l[E]!==!0&&(r.enable(E),l[E]=!0)}function L(E){l[E]!==!1&&(r.disable(E),l[E]=!1)}H[r.TEXTURE_2D]=D(r.TEXTURE_2D,r.TEXTURE_2D,1),H[r.TEXTURE_CUBE_MAP]=D(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(H[r.TEXTURE_2D_ARRAY]=D(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),H[r.TEXTURE_3D]=D(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),n.setClear(0,0,0,1),a.setClear(1),s.setClear(0),Z(r.DEPTH_TEST),a.setFunc(3),k(!1),nt(1),Z(r.CULL_FACE),F(0);let K={[$i]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(i)K[103]=r.MIN,K[104]=r.MAX;else{let E=t.get("EXT_blend_minmax");E!==null&&(K[103]=E.MIN_EXT,K[104]=E.MAX_EXT)}let z={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[To]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[Io]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function F(E,st,W,q,At,ht,ft,dt,Dt,gt){if(E!==0){if(f===!1&&(Z(r.BLEND),f=!0),E===5)At=At||st,ht=ht||W,ft=ft||q,st===d&&At===M||(r.blendEquationSeparate(K[st],K[At]),d=st,M=At),W===m&&q===v&&ht===x&&ft===y||(r.blendFuncSeparate(z[W],z[q],z[ht],z[ft]),m=W,v=q,x=ht,y=ft),dt.equals(P)!==!1&&Dt===w||(r.blendColor(dt.r,dt.g,dt.b,Dt),P.copy(dt),w=Dt),g=E,T=!1;else if(E!==g||gt!==T){if(d===$i&&M===$i||(r.blendEquation(r.FUNC_ADD),d=$i,M=$i),gt)switch(E){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}else switch(E){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}m=null,v=null,x=null,y=null,P.set(0,0,0),w=0,g=E,T=gt}}else f===!0&&(L(r.BLEND),f=!1)}function k(E){R!==E&&(E?r.frontFace(r.CW):r.frontFace(r.CCW),R=E)}function nt(E){E!==0?(Z(r.CULL_FACE),E!==C&&(E===1?r.cullFace(r.BACK):E===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):L(r.CULL_FACE),C=E}function it(E,st,W){E?(Z(r.POLYGON_OFFSET_FILL),B===st&&N===W||(r.polygonOffset(st,W),B=st,N=W)):L(r.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:a,stencil:s},enable:Z,disable:L,bindFramebuffer:function(E,st){return c[E]!==st&&(r.bindFramebuffer(E,st),c[E]=st,i&&(E===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=st),E===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=st)),!0)},drawBuffers:function(E,st){let W=u,q=!1;if(E)if(W=h.get(st),W===void 0&&(W=[],h.set(st,W)),E.isWebGLMultipleRenderTargets){let At=E.texture;if(W.length!==At.length||W[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,ft=At.length;ht<ft;ht++)W[ht]=r.COLOR_ATTACHMENT0+ht;W.length=At.length,q=!0}}else W[0]!==r.COLOR_ATTACHMENT0&&(W[0]=r.COLOR_ATTACHMENT0,q=!0);else W[0]!==r.BACK&&(W[0]=r.BACK,q=!0);q&&(e.isWebGL2?r.drawBuffers(W):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))},useProgram:function(E){return p!==E&&(r.useProgram(E),p=E,!0)},setBlending:F,setMaterial:function(E,st){E.side===2?L(r.CULL_FACE):Z(r.CULL_FACE);let W=E.side===pe;st&&(W=!W),k(W),E.blending===1&&E.transparent===!1?F(0):F(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),a.setFunc(E.depthFunc),a.setTest(E.depthTest),a.setMask(E.depthWrite),n.setMask(E.colorWrite);let q=E.stencilWrite;s.setTest(q),q&&(s.setMask(E.stencilWriteMask),s.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),s.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),it(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):L(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:k,setCullFace:nt,setLineWidth:function(E){E!==O&&(X&&r.lineWidth(E),O=E)},setPolygonOffset:it,setScissorTest:function(E){E?Z(r.SCISSOR_TEST):L(r.SCISSOR_TEST)},activeTexture:function(E){E===void 0&&(E=r.TEXTURE0+U-1),G!==E&&(r.activeTexture(E),G=E)},bindTexture:function(E,st,W){W===void 0&&(W=G===null?r.TEXTURE0+U-1:G);let q=V[W];q===void 0&&(q={type:void 0,texture:void 0},V[W]=q),q.type===E&&q.texture===st||(G!==W&&(r.activeTexture(W),G=W),r.bindTexture(E,st||H[E]),q.type=E,q.texture=st)},unbindTexture:function(){let E=V[G];E!==void 0&&E.type!==void 0&&(r.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},updateUBOMapping:function(E,st){let W=A.get(st);W===void 0&&(W=new WeakMap,A.set(st,W));let q=W.get(E);q===void 0&&(q=r.getUniformBlockIndex(st,E.name),W.set(E,q))},uniformBlockBinding:function(E,st){let W=A.get(st).get(E);o.get(st)!==W&&(r.uniformBlockBinding(st,W,E.__bindingPointIndex),o.set(st,W))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},scissor:function(E){tt.equals(E)===!1&&(r.scissor(E.x,E.y,E.z,E.w),tt.copy(E))},viewport:function(E){b.equals(E)===!1&&(r.viewport(E.x,E.y,E.z,E.w),b.copy(E))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},G=null,V={},c={},h=new WeakMap,u=[],p=null,f=!1,g=null,d=null,m=null,v=null,M=null,x=null,y=null,P=new pt(0,0,0),w=0,T=!1,R=null,C=null,O=null,B=null,N=null,tt.set(0,0,r.canvas.width,r.canvas.height),b.set(0,0,r.canvas.width,r.canvas.height),n.reset(),a.reset(),s.reset()}}}function Of(r,t,e,i,n,a,s){let o=n.isWebGL2,A=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,h,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(b,D){return p?new OffscreenCanvas(b,D):Qa("canvas")}function g(b,D,H,Z){let L=1;if((b.width>Z||b.height>Z)&&(L=Z/Math.max(b.width,b.height)),L<1||D===!0){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let K=D?Fo:Math.floor,z=K(L*b.width),F=K(L*b.height);h===void 0&&(h=f(z,F));let k=H?f(z,F):h;return k.width=z,k.height=F,k.getContext("2d").drawImage(b,0,0,z,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+z+"x"+F+")."),k}return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b}return b}function d(b){return ec(b.width)&&ec(b.height)}function m(b,D){return b.generateMipmaps&&D&&b.minFilter!==ce&&b.minFilter!==le}function v(b){r.generateMipmap(b)}function M(b,D,H,Z,L=!1){if(o===!1)return D;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=D;if(D===r.RED&&(H===r.FLOAT&&(K=r.R32F),H===r.HALF_FLOAT&&(K=r.R16F),H===r.UNSIGNED_BYTE&&(K=r.R8)),D===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.R8UI),H===r.UNSIGNED_SHORT&&(K=r.R16UI),H===r.UNSIGNED_INT&&(K=r.R32UI),H===r.BYTE&&(K=r.R8I),H===r.SHORT&&(K=r.R16I),H===r.INT&&(K=r.R32I)),D===r.RG&&(H===r.FLOAT&&(K=r.RG32F),H===r.HALF_FLOAT&&(K=r.RG16F),H===r.UNSIGNED_BYTE&&(K=r.RG8)),D===r.RGBA){let z=L?Na:Qt.getTransfer(Z);H===r.FLOAT&&(K=r.RGBA32F),H===r.HALF_FLOAT&&(K=r.RGBA16F),H===r.UNSIGNED_BYTE&&(K=z===Vt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return K!==r.R16F&&K!==r.R32F&&K!==r.RG16F&&K!==r.RG32F&&K!==r.RGBA16F&&K!==r.RGBA32F||t.get("EXT_color_buffer_float"),K}function x(b,D,H){return m(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==ce&&b.minFilter!==le?Math.log2(Math.max(D.width,D.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?D.mipmaps.length:1}function y(b){return b===ce||b===bl||b===Ys?r.NEAREST:r.LINEAR}function P(b){let D=b.target;D.removeEventListener("dispose",P),function(H){let Z=i.get(H);if(Z.__webglInit===void 0)return;let L=H.source,K=u.get(L);if(K){let z=K[Z.__cacheKey];z.usedTimes--,z.usedTimes===0&&T(H),Object.keys(K).length===0&&u.delete(L)}i.remove(H)}(D),D.isVideoTexture&&c.delete(D)}function w(b){let D=b.target;D.removeEventListener("dispose",w),function(H){let Z=H.texture,L=i.get(H),K=i.get(Z);if(K.__webglTexture!==void 0&&(r.deleteTexture(K.__webglTexture),s.memory.textures--),H.depthTexture&&H.depthTexture.dispose(),H.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(L.__webglFramebuffer[z]))for(let F=0;F<L.__webglFramebuffer[z].length;F++)r.deleteFramebuffer(L.__webglFramebuffer[z][F]);else r.deleteFramebuffer(L.__webglFramebuffer[z]);L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer[z])}else{if(Array.isArray(L.__webglFramebuffer))for(let z=0;z<L.__webglFramebuffer.length;z++)r.deleteFramebuffer(L.__webglFramebuffer[z]);else r.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&r.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let z=0;z<L.__webglColorRenderbuffer.length;z++)L.__webglColorRenderbuffer[z]&&r.deleteRenderbuffer(L.__webglColorRenderbuffer[z]);L.__webglDepthRenderbuffer&&r.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(H.isWebGLMultipleRenderTargets)for(let z=0,F=Z.length;z<F;z++){let k=i.get(Z[z]);k.__webglTexture&&(r.deleteTexture(k.__webglTexture),s.memory.textures--),i.remove(Z[z])}i.remove(Z),i.remove(H)}(D)}function T(b){let D=i.get(b);r.deleteTexture(D.__webglTexture);let H=b.source;delete u.get(H)[D.__cacheKey],s.memory.textures--}let R=0;function C(b,D){let H=i.get(b);if(b.isVideoTexture&&function(Z){let L=s.render.frame;c.get(Z)!==L&&(c.set(Z,L),Z.update())}(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){let Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(Z.complete!==!1)return void ot(H,b,D);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+D)}let O={[zo]:r.REPEAT,[Ye]:r.CLAMP_TO_EDGE,[Uo]:r.MIRRORED_REPEAT},B={[ce]:r.NEAREST,[bl]:r.NEAREST_MIPMAP_NEAREST,[Ys]:r.NEAREST_MIPMAP_LINEAR,[le]:r.LINEAR,[ju]:r.LINEAR_MIPMAP_NEAREST,[Ra]:r.LINEAR_MIPMAP_LINEAR},N={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function U(b,D,H){if(H?(r.texParameteri(b,r.TEXTURE_WRAP_S,O[D.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,O[D.wrapT]),b!==r.TEXTURE_3D&&b!==r.TEXTURE_2D_ARRAY||r.texParameteri(b,r.TEXTURE_WRAP_R,O[D.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,B[D.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,B[D.minFilter])):(r.texParameteri(b,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(b,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),b!==r.TEXTURE_3D&&b!==r.TEXTURE_2D_ARRAY||r.texParameteri(b,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),D.wrapS===Ye&&D.wrapT===Ye||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,r.TEXTURE_MAG_FILTER,y(D.magFilter)),r.texParameteri(b,r.TEXTURE_MIN_FILTER,y(D.minFilter)),D.minFilter!==ce&&D.minFilter!==le&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),D.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,N[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Z=t.get("EXT_texture_filter_anisotropic");if(D.magFilter===ce||D.minFilter!==Ys&&D.minFilter!==Ra||D.type===Ci&&t.has("OES_texture_float_linear")===!1||o===!1&&D.type===Ri&&t.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(r.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,n.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function X(b,D){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,D.addEventListener("dispose",P));let Z=D.source,L=u.get(Z);L===void 0&&(L={},u.set(Z,L));let K=function(z){let F=[];return F.push(z.wrapS),F.push(z.wrapT),F.push(z.wrapR||0),F.push(z.magFilter),F.push(z.minFilter),F.push(z.anisotropy),F.push(z.internalFormat),F.push(z.format),F.push(z.type),F.push(z.generateMipmaps),F.push(z.premultiplyAlpha),F.push(z.flipY),F.push(z.unpackAlignment),F.push(z.colorSpace),F.join()}(D);if(K!==b.__cacheKey){L[K]===void 0&&(L[K]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,H=!0),L[K].usedTimes++;let z=L[b.__cacheKey];z!==void 0&&(L[b.__cacheKey].usedTimes--,z.usedTimes===0&&T(D)),b.__cacheKey=K,b.__webglTexture=L[K].texture}return H}function ot(b,D,H){let Z=r.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),D.isData3DTexture&&(Z=r.TEXTURE_3D);let L=X(b,D),K=D.source;e.bindTexture(Z,b.__webglTexture,r.TEXTURE0+H);let z=i.get(K);if(K.version!==z.__version||L===!0){e.activeTexture(r.TEXTURE0+H);let F=Qt.getPrimaries(Qt.workingColorSpace),k=D.colorSpace===ri?null:Qt.getPrimaries(D.colorSpace),nt=D.colorSpace===ri||F===k?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let it=function(mt){return!o&&(mt.wrapS!==Ye||mt.wrapT!==Ye||mt.minFilter!==ce&&mt.minFilter!==le)}(D)&&d(D.image)===!1,E=g(D.image,it,!1,n.maxTextureSize);E=tt(D,E);let st=d(E)||o,W=a.convert(D.format,D.colorSpace),q,At=a.convert(D.type),ht=M(D.internalFormat,W,At,D.colorSpace,D.isVideoTexture);U(Z,D,st);let ft=D.mipmaps,dt=o&&D.isVideoTexture!==!0&&ht!==Ah,Dt=z.__version===void 0||L===!0,gt=x(D,E,st);if(D.isDepthTexture)ht=r.DEPTH_COMPONENT,o?ht=D.type===Ci?r.DEPTH_COMPONENT32F:D.type===ai?r.DEPTH_COMPONENT24:D.type===rn?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:D.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===an&&ht===r.DEPTH_COMPONENT&&D.type!==UA&&D.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=ai,At=a.convert(D.type)),D.format===Wn&&ht===r.DEPTH_COMPONENT&&(ht=r.DEPTH_STENCIL,D.type!==rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=rn,At=a.convert(D.type))),Dt&&(dt?e.texStorage2D(r.TEXTURE_2D,1,ht,E.width,E.height):e.texImage2D(r.TEXTURE_2D,0,ht,E.width,E.height,0,W,At,null));else if(D.isDataTexture)if(ft.length>0&&st){dt&&Dt&&e.texStorage2D(r.TEXTURE_2D,gt,ht,ft[0].width,ft[0].height);for(let mt=0,_t=ft.length;mt<_t;mt++)q=ft[mt],dt?e.texSubImage2D(r.TEXTURE_2D,mt,0,0,q.width,q.height,W,At,q.data):e.texImage2D(r.TEXTURE_2D,mt,ht,q.width,q.height,0,W,At,q.data);D.generateMipmaps=!1}else dt?(Dt&&e.texStorage2D(r.TEXTURE_2D,gt,ht,E.width,E.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,W,At,E.data)):e.texImage2D(r.TEXTURE_2D,0,ht,E.width,E.height,0,W,At,E.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){dt&&Dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,ht,ft[0].width,ft[0].height,E.depth);for(let mt=0,_t=ft.length;mt<_t;mt++)q=ft[mt],D.format!==xe?W!==null?dt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,q.width,q.height,E.depth,W,q.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,ht,q.width,q.height,E.depth,0,q.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,q.width,q.height,E.depth,W,At,q.data):e.texImage3D(r.TEXTURE_2D_ARRAY,mt,ht,q.width,q.height,E.depth,0,W,At,q.data)}else{dt&&Dt&&e.texStorage2D(r.TEXTURE_2D,gt,ht,ft[0].width,ft[0].height);for(let mt=0,_t=ft.length;mt<_t;mt++)q=ft[mt],D.format!==xe?W!==null?dt?e.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,q.width,q.height,W,q.data):e.compressedTexImage2D(r.TEXTURE_2D,mt,ht,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage2D(r.TEXTURE_2D,mt,0,0,q.width,q.height,W,At,q.data):e.texImage2D(r.TEXTURE_2D,mt,ht,q.width,q.height,0,W,At,q.data)}else if(D.isDataArrayTexture)dt?(Dt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,ht,E.width,E.height,E.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,E.width,E.height,E.depth,W,At,E.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,ht,E.width,E.height,E.depth,0,W,At,E.data);else if(D.isData3DTexture)dt?(Dt&&e.texStorage3D(r.TEXTURE_3D,gt,ht,E.width,E.height,E.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,E.width,E.height,E.depth,W,At,E.data)):e.texImage3D(r.TEXTURE_3D,0,ht,E.width,E.height,E.depth,0,W,At,E.data);else if(D.isFramebufferTexture){if(Dt)if(dt)e.texStorage2D(r.TEXTURE_2D,gt,ht,E.width,E.height);else{let mt=E.width,_t=E.height;for(let oe=0;oe<gt;oe++)e.texImage2D(r.TEXTURE_2D,oe,ht,mt,_t,0,W,At,null),mt>>=1,_t>>=1}}else if(ft.length>0&&st){dt&&Dt&&e.texStorage2D(r.TEXTURE_2D,gt,ht,ft[0].width,ft[0].height);for(let mt=0,_t=ft.length;mt<_t;mt++)q=ft[mt],dt?e.texSubImage2D(r.TEXTURE_2D,mt,0,0,W,At,q):e.texImage2D(r.TEXTURE_2D,mt,ht,W,At,q);D.generateMipmaps=!1}else dt?(Dt&&e.texStorage2D(r.TEXTURE_2D,gt,ht,E.width,E.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,W,At,E)):e.texImage2D(r.TEXTURE_2D,0,ht,W,At,E);m(D,st)&&v(Z),z.__version=K.version,D.onUpdate&&D.onUpdate(D)}b.__version=D.version}function j(b,D,H,Z,L,K){let z=a.convert(H.format,H.colorSpace),F=a.convert(H.type),k=M(H.internalFormat,z,F,H.colorSpace);if(!i.get(D).__hasExternalTextures){let nt=Math.max(1,D.width>>K),it=Math.max(1,D.height>>K);L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?e.texImage3D(L,K,k,nt,it,D.depth,0,z,F,null):e.texImage2D(L,K,k,nt,it,0,z,F,null)}e.bindFramebuffer(r.FRAMEBUFFER,b),Y(D)?A.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,L,i.get(H).__webglTexture,0,Q(D)):(L===r.TEXTURE_2D||L>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,L,i.get(H).__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function G(b,D,H){if(r.bindRenderbuffer(r.RENDERBUFFER,b),D.depthBuffer&&!D.stencilBuffer){let Z=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(H||Y(D)){let L=D.depthTexture;L&&L.isDepthTexture&&(L.type===Ci?Z=r.DEPTH_COMPONENT32F:L.type===ai&&(Z=r.DEPTH_COMPONENT24));let K=Q(D);Y(D)?A.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,K,Z,D.width,D.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,K,Z,D.width,D.height)}else r.renderbufferStorage(r.RENDERBUFFER,Z,D.width,D.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,b)}else if(D.depthBuffer&&D.stencilBuffer){let Z=Q(D);H&&Y(D)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,D.width,D.height):Y(D)?A.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,b)}else{let Z=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let L=0;L<Z.length;L++){let K=Z[L],z=a.convert(K.format,K.colorSpace),F=a.convert(K.type),k=M(K.internalFormat,z,F,K.colorSpace),nt=Q(D);H&&Y(D)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,k,D.width,D.height):Y(D)?A.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nt,k,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,k,D.width,D.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function V(b){let D=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!D.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");(function(Z,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,Z),!L.depthTexture||!L.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(L.depthTexture).__webglTexture&&L.depthTexture.image.width===L.width&&L.depthTexture.image.height===L.height||(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),C(L.depthTexture,0);let K=i.get(L.depthTexture).__webglTexture,z=Q(L);if(L.depthTexture.format===an)Y(L)?A.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else{if(L.depthTexture.format!==Wn)throw new Error("Unknown depthTexture format");Y(L)?A.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0)}})(D.__webglFramebuffer,b)}else if(H){D.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer[Z]),D.__webglDepthbuffer[Z]=r.createRenderbuffer(),G(D.__webglDepthbuffer[Z],b,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=r.createRenderbuffer(),G(D.__webglDepthbuffer,b,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(b){return Math.min(n.maxSamples,b.samples)}function Y(b){let D=i.get(b);return o&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function tt(b,D){let H=b.colorSpace,Z=b.format,L=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===No||H!==xi&&H!==ri&&(Qt.getTransfer(H)===Vt?o===!1?t.has("EXT_sRGB")===!0&&Z===xe?(b.format=No,b.minFilter=le,b.generateMipmaps=!1):D=Ga.sRGBToLinear(D):Z===xe&&L===qe||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),D}this.allocateTextureUnit=function(){let b=R;return b>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+n.maxTextures),R+=1,b},this.resetTextureUnits=function(){R=0},this.setTexture2D=C,this.setTexture2DArray=function(b,D){let H=i.get(b);b.version>0&&H.__version!==b.version?ot(H,b,D):e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+D)},this.setTexture3D=function(b,D){let H=i.get(b);b.version>0&&H.__version!==b.version?ot(H,b,D):e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+D)},this.setTextureCube=function(b,D){let H=i.get(b);b.version>0&&H.__version!==b.version?function(Z,L,K){if(L.image.length!==6)return;let z=X(Z,L),F=L.source;e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+K);let k=i.get(F);if(F.version!==k.__version||z===!0){e.activeTexture(r.TEXTURE0+K);let nt=Qt.getPrimaries(Qt.workingColorSpace),it=L.colorSpace===ri?null:Qt.getPrimaries(L.colorSpace),E=L.colorSpace===ri||nt===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,E);let st=L.isCompressedTexture||L.image[0].isCompressedTexture,W=L.image[0]&&L.image[0].isDataTexture,q=[];for(let xt=0;xt<6;xt++)q[xt]=st||W?W?L.image[xt].image:L.image[xt]:g(L.image[xt],!1,!0,n.maxCubemapSize),q[xt]=tt(L,q[xt]);let At=q[0],ht=d(At)||o,ft=a.convert(L.format,L.colorSpace),dt=a.convert(L.type),Dt=M(L.internalFormat,ft,dt,L.colorSpace),gt=o&&L.isVideoTexture!==!0,mt=k.__version===void 0||z===!0,_t,oe=x(L,At,ht);if(U(r.TEXTURE_CUBE_MAP,L,ht),st){gt&&mt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,oe,Dt,At.width,At.height);for(let xt=0;xt<6;xt++){_t=q[xt].mipmaps;for(let Ot=0;Ot<_t.length;Ot++){let It=_t[Ot];L.format!==xe?ft!==null?gt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ot,0,0,It.width,It.height,ft,It.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ot,Dt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ot,0,0,It.width,It.height,ft,dt,It.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ot,Dt,It.width,It.height,0,ft,dt,It.data)}}}else{_t=L.mipmaps,gt&&mt&&(_t.length>0&&oe++,e.texStorage2D(r.TEXTURE_CUBE_MAP,oe,Dt,q[0].width,q[0].height));for(let xt=0;xt<6;xt++)if(W){gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,q[xt].width,q[xt].height,ft,dt,q[xt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Dt,q[xt].width,q[xt].height,0,ft,dt,q[xt].data);for(let Ot=0;Ot<_t.length;Ot++){let It=_t[Ot].image[xt].image;gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ot+1,0,0,It.width,It.height,ft,dt,It.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ot+1,Dt,It.width,It.height,0,ft,dt,It.data)}}else{gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,ft,dt,q[xt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Dt,ft,dt,q[xt]);for(let Ot=0;Ot<_t.length;Ot++){let It=_t[Ot];gt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ot+1,0,0,ft,dt,It.image[xt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ot+1,Dt,ft,dt,It.image[xt])}}}m(L,ht)&&v(r.TEXTURE_CUBE_MAP),k.__version=F.version,L.onUpdate&&L.onUpdate(L)}Z.__version=L.version}(H,b,D):e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+D)},this.rebindTextures=function(b,D,H){let Z=i.get(b);D!==void 0&&j(Z.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&V(b)},this.setupRenderTarget=function(b){let D=b.texture,H=i.get(b),Z=i.get(D);b.addEventListener("dispose",w),b.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=D.version,s.memory.textures++);let L=b.isWebGLCubeRenderTarget===!0,K=b.isWebGLMultipleRenderTargets===!0,z=d(b)||o;if(L){H.__webglFramebuffer=[];for(let F=0;F<6;F++)if(o&&D.mipmaps&&D.mipmaps.length>0){H.__webglFramebuffer[F]=[];for(let k=0;k<D.mipmaps.length;k++)H.__webglFramebuffer[F][k]=r.createFramebuffer()}else H.__webglFramebuffer[F]=r.createFramebuffer()}else{if(o&&D.mipmaps&&D.mipmaps.length>0){H.__webglFramebuffer=[];for(let F=0;F<D.mipmaps.length;F++)H.__webglFramebuffer[F]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(K)if(n.drawBuffers){let F=b.texture;for(let k=0,nt=F.length;k<nt;k++){let it=i.get(F[k]);it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Y(b)===!1){let F=K?D:[D];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let k=0;k<F.length;k++){let nt=F[k];H.__webglColorRenderbuffer[k]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[k]);let it=a.convert(nt.format,nt.colorSpace),E=a.convert(nt.type),st=M(nt.internalFormat,it,E,nt.colorSpace,b.isXRRenderTarget===!0),W=Q(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,W,st,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.RENDERBUFFER,H.__webglColorRenderbuffer[k])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),G(H.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(L){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),U(r.TEXTURE_CUBE_MAP,D,z);for(let F=0;F<6;F++)if(o&&D.mipmaps&&D.mipmaps.length>0)for(let k=0;k<D.mipmaps.length;k++)j(H.__webglFramebuffer[F][k],b,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,k);else j(H.__webglFramebuffer[F],b,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);m(D,z)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){let F=b.texture;for(let k=0,nt=F.length;k<nt;k++){let it=F[k],E=i.get(it);e.bindTexture(r.TEXTURE_2D,E.__webglTexture),U(r.TEXTURE_2D,it,z),j(H.__webglFramebuffer,b,it,r.COLOR_ATTACHMENT0+k,r.TEXTURE_2D,0),m(it,z)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let F=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?F=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(F,Z.__webglTexture),U(F,D,z),o&&D.mipmaps&&D.mipmaps.length>0)for(let k=0;k<D.mipmaps.length;k++)j(H.__webglFramebuffer[k],b,D,r.COLOR_ATTACHMENT0,F,k);else j(H.__webglFramebuffer,b,D,r.COLOR_ATTACHMENT0,F,0);m(D,z)&&v(F),e.unbindTexture()}b.depthBuffer&&V(b)},this.updateRenderTargetMipmap=function(b){let D=d(b)||o,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Z=0,L=H.length;Z<L;Z++){let K=H[Z];if(m(K,D)){let z=b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,F=i.get(K).__webglTexture;e.bindTexture(z,F),v(z),e.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(o&&b.samples>0&&Y(b)===!1){let D=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,Z=b.height,L=r.COLOR_BUFFER_BIT,K=[],z=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=i.get(b),k=b.isWebGLMultipleRenderTargets===!0;if(k)for(let nt=0;nt<D.length;nt++)e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let nt=0;nt<D.length;nt++){K.push(r.COLOR_ATTACHMENT0+nt),b.depthBuffer&&K.push(z);let it=F.__ignoreDepthValues!==void 0&&F.__ignoreDepthValues;if(it===!1&&(b.depthBuffer&&(L|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&(L|=r.STENCIL_BUFFER_BIT)),k&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,F.__webglColorRenderbuffer[nt]),it===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[z]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[z])),k){let E=i.get(D[nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,E,0)}r.blitFramebuffer(0,0,H,Z,0,0,H,Z,L,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),k)for(let nt=0;nt<D.length;nt++){e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,F.__webglColorRenderbuffer[nt]);let it=i.get(D[nt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,it,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Y}function Ff(r,t,e){let i=e.isWebGL2;return{convert:function(n,a=""){let s,o=Qt.getTransfer(a);if(n===qe)return r.UNSIGNED_BYTE;if(n===ih)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===UA)return r.UNSIGNED_SHORT;if(n===eh)return r.INT;if(n===ai)return r.UNSIGNED_INT;if(n===Ci)return r.FLOAT;if(n===Ri)return i?r.HALF_FLOAT:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===1021)return r.ALPHA;if(n===xe)return r.RGBA;if(n===1024)return r.LUMINANCE;if(n===1025)return r.LUMINANCE_ALPHA;if(n===an)return r.DEPTH_COMPONENT;if(n===Wn)return r.DEPTH_STENCIL;if(n===No)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(n===1028)return r.RED;if(n===ah)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===sh)return r.RG_INTEGER;if(n===oh)return r.RGBA_INTEGER;if(n===qs||n===js||n===Js||n===Ks)if(o===Vt){if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s===null)return null;if(n===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=t.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(n===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===Dl||n===El||n===_l||n===Bl){if(s=t.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(n===Dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===Ah)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Sl||n===Cl){if(s=t.get("WEBGL_compressed_texture_etc"),s===null)return null;if(n===Sl)return o===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(n===Tl||n===Il||n===Ll||n===Rl||n===zl||n===Ul||n===Nl||n===Ol||n===Fl||n===Hl||n===Ql||n===Gl||n===kl||n===Vl){if(s=t.get("WEBGL_compressed_texture_astc"),s===null)return null;if(n===Tl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ql)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===Zs||n===Xl||n===Wl){if(s=t.get("EXT_texture_compression_bptc"),s===null)return null;if(n===Zs)return o===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===Yl||n===ql||n===jl){if(s=t.get("EXT_texture_compression_rgtc"),s===null)return null;if(n===Zs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===rn?i?r.UNSIGNED_INT_24_8:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}}}var Zo=class extends ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},te=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hf={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,s=null,o=this._targetRay,A=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(let g of t.hand.values()){let d=e.getJointPose(g,i),m=this._getHandJoint(l,g);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=c.position.distanceTo(h.position),p=.02,f=.005;l.inputState.pinching&&u>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else A!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(A.matrix.fromArray(a.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,a.linearVelocity?(A.hasLinearVelocity=!0,A.linearVelocity.copy(a.linearVelocity)):A.hasLinearVelocity=!1,a.angularVelocity?(A.hasAngularVelocity=!0,A.angularVelocity.copy(a.angularVelocity)):A.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hf)))}return o!==null&&(o.visible=n!==null),A!==null&&(A.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},$o=class extends zi{constructor(t,e){super();let i=this,n=null,a=1,s=null,o="local-floor",A=1,l=null,c=null,h=null,u=null,p=null,f=null,g=e.getContextAttributes(),d=null,m=null,v=[],M=[],x=new at,y=null,P=new ue;P.layers.enable(1),P.viewport=new Gt;let w=new ue;w.layers.enable(2),w.viewport=new Gt;let T=[P,w],R=new Zo;R.layers.enable(1),R.layers.enable(2);let C=null,O=null;function B(Q){let Y=M.indexOf(Q.inputSource);if(Y===-1)return;let tt=v[Y];tt!==void 0&&(tt.update(Q.inputSource,Q.frame,l||s),tt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function N(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",U);for(let Q=0;Q<v.length;Q++){let Y=M[Q];Y!==null&&(M[Q]=null,v[Q].disconnect(Y))}C=null,O=null,t.setRenderTarget(d),p=null,u=null,h=null,n=null,m=null,V.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}function U(Q){for(let Y=0;Y<Q.removed.length;Y++){let tt=Q.removed[Y],b=M.indexOf(tt);b>=0&&(M[b]=null,v[b].disconnect(tt))}for(let Y=0;Y<Q.added.length;Y++){let tt=Q.added[Y],b=M.indexOf(tt);if(b===-1){for(let H=0;H<v.length;H++){if(H>=M.length){M.push(tt),b=H;break}if(M[H]===null){M[H]=tt,b=H;break}}if(b===-1)break}let D=v[b];D&&D.connect(tt)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let Y=v[Q];return Y===void 0&&(Y=new wr,v[Q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(Q){let Y=v[Q];return Y===void 0&&(Y=new wr,v[Q]=Y),Y.getGripSpace()},this.getHand=function(Q){let Y=v[Q];return Y===void 0&&(Y=new wr,v[Q]=Y),Y.getHandSpace()},this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(Q){if(n=Q,n!==null){if(d=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",N),n.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(x),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Y={antialias:n.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,e,Y),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new ne(p.framebufferWidth,p.framebufferHeight,{format:xe,type:qe,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Y=null,tt=null,b=null;g.depth&&(b=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=g.stencil?Wn:an,tt=g.stencil?rn:ai);let D={colorFormat:e.RGBA8,depthFormat:b,scaleFactor:a};h=new XRWebGLBinding(n,e),u=h.createProjectionLayer(D),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),m=new ne(u.textureWidth,u.textureHeight,{format:xe,type:qe,depthTexture:new Zn(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0}),t.properties.get(m).__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(A),l=null,s=await n.requestReferenceSpace(o),V.setContext(n),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let X=new _,ot=new _;function j(Q,Y){Y===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(Y.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(n===null)return;R.near=w.near=P.near=Q.near,R.far=w.far=P.far=Q.far,C===R.near&&O===R.far||(n.updateRenderState({depthNear:R.near,depthFar:R.far}),C=R.near,O=R.far);let Y=Q.parent,tt=R.cameras;j(R,Y);for(let b=0;b<tt.length;b++)j(tt[b],Y);tt.length===2?function(b,D,H){X.setFromMatrixPosition(D.matrixWorld),ot.setFromMatrixPosition(H.matrixWorld);let Z=X.distanceTo(ot),L=D.projectionMatrix.elements,K=H.projectionMatrix.elements,z=L[14]/(L[10]-1),F=L[14]/(L[10]+1),k=(L[9]+1)/L[5],nt=(L[9]-1)/L[5],it=(L[8]-1)/L[0],E=(K[8]+1)/K[0],st=z*it,W=z*E,q=Z/(-it+E),At=q*-it;D.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(At),b.translateZ(q),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();let ht=z+q,ft=F+q,dt=st-At,Dt=W+(Z-At),gt=k*F/ft*ht,mt=nt*F/ft*ht;b.projectionMatrix.makePerspective(dt,Dt,gt,mt,ht,ft),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}(R,P,w):R.projectionMatrix.copy(P.projectionMatrix),function(b,D,H){H===null?b.matrix.copy(D.matrixWorld):(b.matrix.copy(H.matrixWorld),b.matrix.invert(),b.matrix.multiply(D.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(D.projectionMatrix),b.projectionMatrixInverse.copy(D.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=2*Oo*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}(Q,R,Y)},this.getCamera=function(){return R},this.getFoveation=function(){if(u!==null||p!==null)return A},this.setFoveation=function(Q){A=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)};let G=null,V=new ph;V.setAnimationLoop(function(Q,Y){if(c=Y.getViewerPose(l||s),f=Y,c!==null){let tt=c.views;p!==null&&(t.setRenderTargetFramebuffer(m,p.framebuffer),t.setRenderTarget(m));let b=!1;tt.length!==R.cameras.length&&(R.cameras.length=0,b=!0);for(let D=0;D<tt.length;D++){let H=tt[D],Z=null;if(p!==null)Z=p.getViewport(H);else{let K=h.getViewSubImage(u,H);Z=K.viewport,D===0&&(t.setRenderTargetTextures(m,K.colorTexture,u.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(m))}let L=T[D];L===void 0&&(L=new ue,L.layers.enable(D),L.viewport=new Gt,T[D]=L),L.matrix.fromArray(H.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(H.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Z.x,Z.y,Z.width,Z.height),D===0&&(R.matrix.copy(L.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),b===!0&&R.cameras.push(L)}}for(let tt=0;tt<v.length;tt++){let b=M[tt],D=v[tt];b!==null&&D!==void 0&&D.update(b,Y,l||s)}G&&G(Q,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),f=null}),this.setAnimationLoop=function(Q){G=Q},this.dispose=function(){}}};function Qf(r,t){function e(n,a){n.matrixAutoUpdate===!0&&n.updateMatrix(),a.value.copy(n.matrix)}function i(n,a){n.opacity.value=a.opacity,a.color&&n.diffuse.value.copy(a.color),a.emissive&&n.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(n.map.value=a.map,e(a.map,n.mapTransform)),a.alphaMap&&(n.alphaMap.value=a.alphaMap,e(a.alphaMap,n.alphaMapTransform)),a.bumpMap&&(n.bumpMap.value=a.bumpMap,e(a.bumpMap,n.bumpMapTransform),n.bumpScale.value=a.bumpScale,a.side===pe&&(n.bumpScale.value*=-1)),a.normalMap&&(n.normalMap.value=a.normalMap,e(a.normalMap,n.normalMapTransform),n.normalScale.value.copy(a.normalScale),a.side===pe&&n.normalScale.value.negate()),a.displacementMap&&(n.displacementMap.value=a.displacementMap,e(a.displacementMap,n.displacementMapTransform),n.displacementScale.value=a.displacementScale,n.displacementBias.value=a.displacementBias),a.emissiveMap&&(n.emissiveMap.value=a.emissiveMap,e(a.emissiveMap,n.emissiveMapTransform)),a.specularMap&&(n.specularMap.value=a.specularMap,e(a.specularMap,n.specularMapTransform)),a.alphaTest>0&&(n.alphaTest.value=a.alphaTest);let s=t.get(a).envMap;if(s&&(n.envMap.value=s,n.flipEnvMap.value=s.isCubeTexture&&s.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=a.reflectivity,n.ior.value=a.ior,n.refractionRatio.value=a.refractionRatio),a.lightMap){n.lightMap.value=a.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=a.lightMapIntensity*o,e(a.lightMap,n.lightMapTransform)}a.aoMap&&(n.aoMap.value=a.aoMap,n.aoMapIntensity.value=a.aoMapIntensity,e(a.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,a){a.color.getRGB(n.fogColor.value,uh(r)),a.isFog?(n.fogNear.value=a.near,n.fogFar.value=a.far):a.isFogExp2&&(n.fogDensity.value=a.density)},refreshMaterialUniforms:function(n,a,s,o,A){a.isMeshBasicMaterial||a.isMeshLambertMaterial?i(n,a):a.isMeshToonMaterial?(i(n,a),function(l,c){c.gradientMap&&(l.gradientMap.value=c.gradientMap)}(n,a)):a.isMeshPhongMaterial?(i(n,a),function(l,c){l.specular.value.copy(c.specular),l.shininess.value=Math.max(c.shininess,1e-4)}(n,a)):a.isMeshStandardMaterial?(i(n,a),function(l,c){l.metalness.value=c.metalness,c.metalnessMap&&(l.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,l.metalnessMapTransform)),l.roughness.value=c.roughness,c.roughnessMap&&(l.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,l.roughnessMapTransform)),t.get(c).envMap&&(l.envMapIntensity.value=c.envMapIntensity)}(n,a),a.isMeshPhysicalMaterial&&function(l,c,h){l.ior.value=c.ior,c.sheen>0&&(l.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),l.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(l.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,l.sheenColorMapTransform)),c.sheenRoughnessMap&&(l.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,l.sheenRoughnessMapTransform))),c.clearcoat>0&&(l.clearcoat.value=c.clearcoat,l.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(l.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,l.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(l.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===pe&&l.clearcoatNormalScale.value.negate())),c.iridescence>0&&(l.iridescence.value=c.iridescence,l.iridescenceIOR.value=c.iridescenceIOR,l.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(l.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,l.iridescenceMapTransform)),c.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),c.transmission>0&&(l.transmission.value=c.transmission,l.transmissionSamplerMap.value=h.texture,l.transmissionSamplerSize.value.set(h.width,h.height),c.transmissionMap&&(l.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,l.transmissionMapTransform)),l.thickness.value=c.thickness,c.thicknessMap&&(l.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=c.attenuationDistance,l.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(l.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(l.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=c.specularIntensity,l.specularColor.value.copy(c.specularColor),c.specularColorMap&&(l.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,l.specularColorMapTransform)),c.specularIntensityMap&&(l.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,l.specularIntensityMapTransform))}(n,a,A)):a.isMeshMatcapMaterial?(i(n,a),function(l,c){c.matcap&&(l.matcap.value=c.matcap)}(n,a)):a.isMeshDepthMaterial?i(n,a):a.isMeshDistanceMaterial?(i(n,a),function(l,c){let h=t.get(c).light;l.referencePosition.value.setFromMatrixPosition(h.matrixWorld),l.nearDistance.value=h.shadow.camera.near,l.farDistance.value=h.shadow.camera.far}(n,a)):a.isMeshNormalMaterial?i(n,a):a.isLineBasicMaterial?(function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,c.map&&(l.map.value=c.map,e(c.map,l.mapTransform))}(n,a),a.isLineDashedMaterial&&function(l,c){l.dashSize.value=c.dashSize,l.totalSize.value=c.dashSize+c.gapSize,l.scale.value=c.scale}(n,a)):a.isPointsMaterial?function(l,c,h,u){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.size.value=c.size*h,l.scale.value=.5*u,c.map&&(l.map.value=c.map,e(c.map,l.uvTransform)),c.alphaMap&&(l.alphaMap.value=c.alphaMap,e(c.alphaMap,l.alphaMapTransform)),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest)}(n,a,s,o):a.isSpriteMaterial?function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.rotation.value=c.rotation,c.map&&(l.map.value=c.map,e(c.map,l.mapTransform)),c.alphaMap&&(l.alphaMap.value=c.alphaMap,e(c.alphaMap,l.alphaMapTransform)),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest)}(n,a):a.isShadowMaterial?(n.color.value.copy(a.color),n.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function Gf(r,t,e,i){let n={},a={},s=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function A(h,u,p,f){let g=h.value,d=u+"_"+p;if(f[d]===void 0)return f[d]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let m=f[d];if(typeof g=="number"||typeof g=="boolean"){if(m!==g)return f[d]=g,!0}else if(m.equals(g)===!1)return m.copy(g),!0}return!1}function l(h){let u={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(u.boundary=4,u.storage=4):h.isVector2?(u.boundary=8,u.storage=8):h.isVector3||h.isColor?(u.boundary=16,u.storage=12):h.isVector4?(u.boundary=16,u.storage=16):h.isMatrix3?(u.boundary=48,u.storage=48):h.isMatrix4?(u.boundary=64,u.storage=64):h.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",h),u}function c(h){let u=h.target;u.removeEventListener("dispose",c);let p=s.indexOf(u.__bindingPointIndex);s.splice(p,1),r.deleteBuffer(n[u.id]),delete n[u.id],delete a[u.id]}return{bind:function(h,u){let p=u.program;i.uniformBlockBinding(h,p)},update:function(h,u){let p=n[h.id];p===void 0&&(function(d){let m=d.uniforms,v=0,M=16;for(let y=0,P=m.length;y<P;y++){let w=Array.isArray(m[y])?m[y]:[m[y]];for(let T=0,R=w.length;T<R;T++){let C=w[T],O=Array.isArray(C.value)?C.value:[C.value];for(let B=0,N=O.length;B<N;B++){let U=l(O[B]),X=v%M;X!==0&&M-X<U.boundary&&(v+=M-X),C.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=v,v+=U.storage}}}let x=v%M;x>0&&(v+=M-x),d.__size=v,d.__cache={}}(h),p=function(d){let m=function(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();d.__bindingPointIndex=m;let v=r.createBuffer(),M=d.__size,x=d.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,M,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,m,v),v}(h),n[h.id]=p,h.addEventListener("dispose",c));let f=u.program;i.updateUBOMapping(h,f);let g=t.render.frame;a[h.id]!==g&&(function(d){let m=n[d.id],v=d.uniforms,M=d.__cache;r.bindBuffer(r.UNIFORM_BUFFER,m);for(let x=0,y=v.length;x<y;x++){let P=Array.isArray(v[x])?v[x]:[v[x]];for(let w=0,T=P.length;w<T;w++){let R=P[w];if(A(R,x,w,M)===!0){let C=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],B=0;for(let N=0;N<O.length;N++){let U=O[N],X=l(U);typeof U=="number"||typeof U=="boolean"?(R.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,C+B,R.__data)):U.isMatrix3?(R.__data[0]=U.elements[0],R.__data[1]=U.elements[1],R.__data[2]=U.elements[2],R.__data[3]=0,R.__data[4]=U.elements[3],R.__data[5]=U.elements[4],R.__data[6]=U.elements[5],R.__data[7]=0,R.__data[8]=U.elements[6],R.__data[9]=U.elements[7],R.__data[10]=U.elements[8],R.__data[11]=0):(U.toArray(R.__data,B),B+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,C,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(h),a[h.id]=g)},dispose:function(){for(let h in n)r.deleteBuffer(n[h]);s=[],n={},a={}}}}var Br=class{constructor(t={}){let{canvas:e=Ku(),context:i=null,depth:n=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:A=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=t,u;this.isWebGLRenderer=!0,u=i!==null?i.getContextAttributes().alpha:s;let p=new Uint32Array(4),f=new Int32Array(4),g=null,d=null,m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;let M=this,x=!1,y=0,P=0,w=null,T=-1,R=null,C=new Gt,O=new Gt,B=null,N=new pt(0),U=0,X=e.width,ot=e.height,j=1,G=null,V=null,Q=new Gt(0,0,X,ot),Y=new Gt(0,0,X,ot),tt=!1,b=new Ui,D=!1,H=!1,Z=null,L=new yt,K=new at,z=new _,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function k(){return w===null?j:1}let nt,it,E,st,W,q,At,ht,ft,dt,Dt,gt,mt,_t,oe,xt,Ot,It,jr,yn,Jr,Le,_e,wn,$=i;function Kr(S,J){for(let et=0;et<S.length;et++){let lt=S[et],rt=e.getContext(lt,J);if(rt!==null)return rt}return null}try{let S={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:A,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Co}`),e.addEventListener("webglcontextlost",Al,!1),e.addEventListener("webglcontextrestored",ll,!1),e.addEventListener("webglcontextcreationerror",cl,!1),$===null){let J=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&J.shift(),$=Kr(J,S),$===null)throw Kr(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}function hr(){nt=new yp($),it=new vp($,nt,t),nt.init(it),Le=new Ff($,nt,it),E=new Nf($,nt,it),st=new Dp($),W=new Bf,q=new Of($,nt,E,W,it,Le,st),At=new xp(M),ht=new Pp(M),ft=new fp($,it),_e=new gp($,nt,ft,it),dt=new wp($,ft,st,_e),Dt=new Sp($,dt,ft,st),jr=new Bp($,it,q),xt=new Mp(W),gt=new _f(M,At,ht,nt,it,_e,xt),mt=new Qf(M,W),_t=new Cf,oe=new zf(nt,it),It=new dp(M,At,ht,E,Dt,u,A),Ot=new Uf(M,Dt,it),wn=new Gf($,st,it,E),yn=new mp($,nt,st,it),Jr=new bp($,nt,st,it),st.programs=gt.programs,M.capabilities=it,M.extensions=nt,M.properties=W,M.renderLists=_t,M.shadowMap=Ot,M.state=E,M.info=st}hr();let fe=new $o(M,$);function Al(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ll(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let S=st.autoReset,J=Ot.enabled,et=Ot.autoUpdate,lt=Ot.needsUpdate,rt=Ot.type;hr(),st.autoReset=S,Ot.enabled=J,Ot.autoUpdate=et,Ot.needsUpdate=lt,Ot.type=rt}function cl(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function hl(S){let J=S.target;J.removeEventListener("dispose",hl),function(et){(function(lt){let rt=W.get(lt).programs;rt!==void 0&&(rt.forEach(function(ut){gt.releaseProgram(ut)}),lt.isShaderMaterial&&gt.releaseShaderCache(lt))})(et),W.remove(et)}(J)}function ul(S,J,et){S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=pe,S.needsUpdate=!0,$r(S,J,et),S.side=Li,S.needsUpdate=!0,$r(S,J,et),S.side=2):$r(S,J,et)}this.xr=fe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let S=nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(X,ot,!1))},this.getSize=function(S){return S.set(X,ot)},this.setSize=function(S,J,et=!0){fe.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(X=S,ot=J,e.width=Math.floor(S*j),e.height=Math.floor(J*j),et===!0&&(e.style.width=S+"px",e.style.height=J+"px"),this.setViewport(0,0,S,J))},this.getDrawingBufferSize=function(S){return S.set(X*j,ot*j).floor()},this.setDrawingBufferSize=function(S,J,et){X=S,ot=J,j=et,e.width=Math.floor(S*et),e.height=Math.floor(J*et),this.setViewport(0,0,S,J)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(Q)},this.setViewport=function(S,J,et,lt){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,J,et,lt),E.viewport(C.copy(Q).multiplyScalar(j).floor())},this.getScissor=function(S){return S.copy(Y)},this.setScissor=function(S,J,et,lt){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,J,et,lt),E.scissor(O.copy(Y).multiplyScalar(j).floor())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){E.setScissorTest(tt=S)},this.setOpaqueSort=function(S){G=S},this.setTransparentSort=function(S){V=S},this.getClearColor=function(S){return S.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(S=!0,J=!0,et=!0){let lt=0;if(S){let rt=!1;if(w!==null){let ut=w.texture.format;rt=ut===oh||ut===sh||ut===ah}if(rt){let ut=w.texture.type,wt=ut===qe||ut===ai||ut===UA||ut===rn||ut===ih||ut===nh,bt=It.getClearColor(),Bt=It.getClearAlpha(),Ct=bt.r,Lt=bt.g,zt=bt.b;wt?(p[0]=Ct,p[1]=Lt,p[2]=zt,p[3]=Bt,$.clearBufferuiv($.COLOR,0,p)):(f[0]=Ct,f[1]=Lt,f[2]=zt,f[3]=Bt,$.clearBufferiv($.COLOR,0,f))}else lt|=$.COLOR_BUFFER_BIT}J&&(lt|=$.DEPTH_BUFFER_BIT),et&&(lt|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Al,!1),e.removeEventListener("webglcontextrestored",ll,!1),e.removeEventListener("webglcontextcreationerror",cl,!1),_t.dispose(),oe.dispose(),W.dispose(),At.dispose(),ht.dispose(),Dt.dispose(),_e.dispose(),wn.dispose(),gt.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",pl),fe.removeEventListener("sessionend",fl),Z&&(Z.dispose(),Z=null),Vi.stop()},this.renderBufferDirect=function(S,J,et,lt,rt,ut){J===null&&(J=F);let wt=rt.isMesh&&rt.matrixWorld.determinant()<0,bt=function(ie,Re,be,Ut,Ft){Re.isScene!==!0&&(Re=F),q.resetTextureUnits();let ur=Re.fog,ks=Ut.isMeshStandardMaterial?Re.environment:null,Iu=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:xi,ta=(Ut.isMeshStandardMaterial?ht:At).get(Ut.envMap||ks),Lu=Ut.vertexColors===!0&&!!be.attributes.color&&be.attributes.color.itemSize===4,Ru=!!be.attributes.tangent&&(!!Ut.normalMap||Ut.anisotropy>0),zu=!!be.morphAttributes.position,Uu=!!be.morphAttributes.normal,Nu=!!be.morphAttributes.color,xl=Ti;Ut.toneMapped&&(w!==null&&w.isXRRenderTarget!==!0||(xl=M.toneMapping));let Pl=be.morphAttributes.position||be.morphAttributes.normal||be.morphAttributes.color,Ou=Pl!==void 0?Pl.length:0,Ht=W.get(Ut),Fu=d.state.lights;if(D===!0&&(H===!0||ie!==R)){let ze=ie===R&&Ut.id===T;xt.setState(Ut,ie,ze)}let Qe=!1;Ut.version===Ht.__version?Ht.needsLights&&Ht.lightsStateVersion!==Fu.state.version||Ht.outputColorSpace!==Iu||Ft.isBatchedMesh&&Ht.batching===!1?Qe=!0:Ft.isBatchedMesh||Ht.batching!==!0?Ft.isInstancedMesh&&Ht.instancing===!1?Qe=!0:Ft.isInstancedMesh||Ht.instancing!==!0?Ft.isSkinnedMesh&&Ht.skinning===!1?Qe=!0:Ft.isSkinnedMesh||Ht.skinning!==!0?Ft.isInstancedMesh&&Ht.instancingColor===!0&&Ft.instanceColor===null||Ft.isInstancedMesh&&Ht.instancingColor===!1&&Ft.instanceColor!==null||Ht.envMap!==ta||Ut.fog===!0&&Ht.fog!==ur?Qe=!0:Ht.numClippingPlanes===void 0||Ht.numClippingPlanes===xt.numPlanes&&Ht.numIntersection===xt.numIntersection?(Ht.vertexAlphas!==Lu||Ht.vertexTangents!==Ru||Ht.morphTargets!==zu||Ht.morphNormals!==Uu||Ht.morphColors!==Nu||Ht.toneMapping!==xl||it.isWebGL2===!0&&Ht.morphTargetsCount!==Ou)&&(Qe=!0):Qe=!0:Qe=!0:Qe=!0:Qe=!0:(Qe=!0,Ht.__version=Ut.version);let Wi=Ht.currentProgram;Qe===!0&&(Wi=$r(Ut,Re,Ft));let yl=!1,pr=!1,Vs=!1,de=Wi.getUniforms(),Yi=Ht.uniforms;if(E.useProgram(Wi.program)&&(yl=!0,pr=!0,Vs=!0),Ut.id!==T&&(T=Ut.id,pr=!0),yl||R!==ie){de.setValue($,"projectionMatrix",ie.projectionMatrix),de.setValue($,"viewMatrix",ie.matrixWorldInverse);let ze=de.map.cameraPosition;ze!==void 0&&ze.setValue($,z.setFromMatrixPosition(ie.matrixWorld)),it.logarithmicDepthBuffer&&de.setValue($,"logDepthBufFC",2/(Math.log(ie.far+1)/Math.LN2)),(Ut.isMeshPhongMaterial||Ut.isMeshToonMaterial||Ut.isMeshLambertMaterial||Ut.isMeshBasicMaterial||Ut.isMeshStandardMaterial||Ut.isShaderMaterial)&&de.setValue($,"isOrthographic",ie.isOrthographicCamera===!0),R!==ie&&(R=ie,pr=!0,Vs=!0)}if(Ft.isSkinnedMesh){de.setOptional($,Ft,"bindMatrix"),de.setOptional($,Ft,"bindMatrixInverse");let ze=Ft.skeleton;ze&&(it.floatVertexTextures?(ze.boneTexture===null&&ze.computeBoneTexture(),de.setValue($,"boneTexture",ze.boneTexture,q)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ft.isBatchedMesh&&(de.setOptional($,Ft,"batchingTexture"),de.setValue($,"batchingTexture",Ft._matricesTexture,q));let Xs=be.morphAttributes;(Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0&&it.isWebGL2===!0)&&jr.update(Ft,be,Wi),(pr||Ht.receiveShadow!==Ft.receiveShadow)&&(Ht.receiveShadow=Ft.receiveShadow,de.setValue($,"receiveShadow",Ft.receiveShadow)),Ut.isMeshGouraudMaterial&&Ut.envMap!==null&&(Yi.envMap.value=ta,Yi.flipEnvMap.value=ta.isCubeTexture&&ta.isRenderTargetTexture===!1?-1:1),pr&&(de.setValue($,"toneMappingExposure",M.toneMappingExposure),Ht.needsLights&&(Ge=Vs,(ii=Yi).ambientLightColor.needsUpdate=Ge,ii.lightProbe.needsUpdate=Ge,ii.directionalLights.needsUpdate=Ge,ii.directionalLightShadows.needsUpdate=Ge,ii.pointLights.needsUpdate=Ge,ii.pointLightShadows.needsUpdate=Ge,ii.spotLights.needsUpdate=Ge,ii.spotLightShadows.needsUpdate=Ge,ii.rectAreaLights.needsUpdate=Ge,ii.hemisphereLights.needsUpdate=Ge),ur&&Ut.fog===!0&&mt.refreshFogUniforms(Yi,ur),mt.refreshMaterialUniforms(Yi,Ut,j,ot,Z),kn.upload($,vl(Ht),Yi,q));var ii,Ge;if(Ut.isShaderMaterial&&Ut.uniformsNeedUpdate===!0&&(kn.upload($,vl(Ht),Yi,q),Ut.uniformsNeedUpdate=!1),Ut.isSpriteMaterial&&de.setValue($,"center",Ft.center),de.setValue($,"modelViewMatrix",Ft.modelViewMatrix),de.setValue($,"normalMatrix",Ft.normalMatrix),de.setValue($,"modelMatrix",Ft.matrixWorld),Ut.isShaderMaterial||Ut.isRawShaderMaterial){let ze=Ut.uniformsGroups;for(let Ws=0,Hu=ze.length;Ws<Hu;Ws++)if(it.isWebGL2){let wl=ze[Ws];wn.update(wl,Wi),wn.bind(wl,Wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wi}(S,J,et,lt,rt);E.setMaterial(lt,wt);let Bt=et.index,Ct=1;if(lt.wireframe===!0){if(Bt=dt.getWireframeAttribute(et),Bt===void 0)return;Ct=2}let Lt=et.drawRange,zt=et.attributes.position,qt=Lt.start*Ct,He=(Lt.start+Lt.count)*Ct;ut!==null&&(qt=Math.max(qt,ut.start*Ct),He=Math.min(He,(ut.start+ut.count)*Ct)),Bt!==null?(qt=Math.max(qt,0),He=Math.min(He,Bt.count)):zt!=null&&(qt=Math.max(qt,0),He=Math.min(He,zt.count));let pi=He-qt;if(pi<0||pi===1/0)return;let Xi;_e.setup(rt,lt,bt,et,Bt);let jt=yn;if(Bt!==null&&(Xi=ft.get(Bt),jt=Jr,jt.setIndex(Xi)),rt.isMesh)lt.wireframe===!0?(E.setLineWidth(lt.wireframeLinewidth*k()),jt.setMode($.LINES)):jt.setMode($.TRIANGLES);else if(rt.isLine){let ie=lt.linewidth;ie===void 0&&(ie=1),E.setLineWidth(ie*k()),rt.isLineSegments?jt.setMode($.LINES):rt.isLineLoop?jt.setMode($.LINE_LOOP):jt.setMode($.LINE_STRIP)}else rt.isPoints?jt.setMode($.POINTS):rt.isSprite&&jt.setMode($.TRIANGLES);if(rt.isBatchedMesh)jt.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else if(rt.isInstancedMesh)jt.renderInstances(qt,pi,rt.count);else if(et.isInstancedBufferGeometry){let ie=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Re=Math.min(et.instanceCount,ie);jt.renderInstances(qt,pi,Re)}else jt.render(qt,pi)},this.compile=function(S,J,et=null){et===null&&(et=S),d=oe.get(et),d.init(),v.push(d),et.traverseVisible(function(rt){rt.isLight&&rt.layers.test(J.layers)&&(d.pushLight(rt),rt.castShadow&&d.pushShadow(rt))}),S!==et&&S.traverseVisible(function(rt){rt.isLight&&rt.layers.test(J.layers)&&(d.pushLight(rt),rt.castShadow&&d.pushShadow(rt))}),d.setupLights(M._useLegacyLights);let lt=new Set;return S.traverse(function(rt){let ut=rt.material;if(ut)if(Array.isArray(ut))for(let wt=0;wt<ut.length;wt++){let bt=ut[wt];ul(bt,et,rt),lt.add(bt)}else ul(ut,et,rt),lt.add(ut)}),v.pop(),d=null,lt},this.compileAsync=function(S,J,et=null){let lt=this.compile(S,J,et);return new Promise(rt=>{function ut(){lt.forEach(function(wt){W.get(wt).currentProgram.isReady()&&lt.delete(wt)}),lt.size!==0?setTimeout(ut,10):rt(S)}nt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Gs=null;function pl(){Vi.stop()}function fl(){Vi.start()}let Vi=new ph;function dl(S,J,et,lt){if(S.visible===!1)return;if(S.layers.test(J.layers)){if(S.isGroup)et=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(J);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||b.intersectsSprite(S)){lt&&z.setFromMatrixPosition(S.matrixWorld).applyMatrix4(L);let ut=Dt.update(S),wt=S.material;wt.visible&&g.push(S,ut,wt,et,z.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||b.intersectsObject(S))){let ut=Dt.update(S),wt=S.material;if(lt&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),z.copy(S.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),z.copy(ut.boundingSphere.center)),z.applyMatrix4(S.matrixWorld).applyMatrix4(L)),Array.isArray(wt)){let bt=ut.groups;for(let Bt=0,Ct=bt.length;Bt<Ct;Bt++){let Lt=bt[Bt],zt=wt[Lt.materialIndex];zt&&zt.visible&&g.push(S,ut,zt,et,z.z,Lt)}}else wt.visible&&g.push(S,ut,wt,et,z.z,null)}}let rt=S.children;for(let ut=0,wt=rt.length;ut<wt;ut++)dl(rt[ut],J,et,lt)}function gl(S,J,et,lt){let rt=S.opaque,ut=S.transmissive,wt=S.transparent;d.setupLightsView(et),D===!0&&xt.setGlobalState(M.clippingPlanes,et),ut.length>0&&function(bt,Bt,Ct,Lt){if((Ct.isScene===!0?Ct.overrideMaterial:null)!==null)return;let qt=it.isWebGL2;Z===null&&(Z=new ne(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")?Ri:qe,minFilter:Ra,samples:qt?4:0})),M.getDrawingBufferSize(K),qt?Z.setSize(K.x,K.y):Z.setSize(Fo(K.x),Fo(K.y));let He=M.getRenderTarget();M.setRenderTarget(Z),M.getClearColor(N),U=M.getClearAlpha(),U<1&&M.setClearColor(16777215,.5),M.clear();let pi=M.toneMapping;M.toneMapping=Ti,Zr(bt,Ct,Lt),q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z);let Xi=!1;for(let jt=0,ie=Bt.length;jt<ie;jt++){let Re=Bt[jt],be=Re.object,Ut=Re.geometry,Ft=Re.material,ur=Re.group;if(Ft.side===2&&be.layers.test(Lt.layers)){let ks=Ft.side;Ft.side=pe,Ft.needsUpdate=!0,ml(be,Ct,Lt,Ut,Ft,ur),Ft.side=ks,Ft.needsUpdate=!0,Xi=!0}}Xi===!0&&(q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z)),M.setRenderTarget(He),M.setClearColor(N,U),M.toneMapping=pi}(rt,ut,J,et),lt&&E.viewport(C.copy(lt)),rt.length>0&&Zr(rt,J,et),ut.length>0&&Zr(ut,J,et),wt.length>0&&Zr(wt,J,et),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Zr(S,J,et){let lt=J.isScene===!0?J.overrideMaterial:null;for(let rt=0,ut=S.length;rt<ut;rt++){let wt=S[rt],bt=wt.object,Bt=wt.geometry,Ct=lt===null?wt.material:lt,Lt=wt.group;bt.layers.test(et.layers)&&ml(bt,J,et,Bt,Ct,Lt)}}function ml(S,J,et,lt,rt,ut){S.onBeforeRender(M,J,et,lt,rt,ut),S.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),rt.onBeforeRender(M,J,et,lt,S,ut),rt.transparent===!0&&rt.side===2&&rt.forceSinglePass===!1?(rt.side=pe,rt.needsUpdate=!0,M.renderBufferDirect(et,J,lt,rt,S,ut),rt.side=Li,rt.needsUpdate=!0,M.renderBufferDirect(et,J,lt,rt,S,ut),rt.side=2):M.renderBufferDirect(et,J,lt,rt,S,ut),S.onAfterRender(M,J,et,lt,rt,ut)}function $r(S,J,et){J.isScene!==!0&&(J=F);let lt=W.get(S),rt=d.state.lights,ut=d.state.shadowsArray,wt=rt.state.version,bt=gt.getParameters(S,rt.state,ut,J,et),Bt=gt.getProgramCacheKey(bt),Ct=lt.programs;lt.environment=S.isMeshStandardMaterial?J.environment:null,lt.fog=J.fog,lt.envMap=(S.isMeshStandardMaterial?ht:At).get(S.envMap||lt.environment),Ct===void 0&&(S.addEventListener("dispose",hl),Ct=new Map,lt.programs=Ct);let Lt=Ct.get(Bt);if(Lt!==void 0){if(lt.currentProgram===Lt&&lt.lightsStateVersion===wt)return Ml(S,bt),Lt}else bt.uniforms=gt.getUniforms(S),S.onBuild(et,bt,M),S.onBeforeCompile(bt,M),Lt=gt.acquireProgram(bt,Bt),Ct.set(Bt,Lt),lt.uniforms=bt.uniforms;let zt=lt.uniforms;return(S.isShaderMaterial||S.isRawShaderMaterial)&&S.clipping!==!0||(zt.clippingPlanes=xt.uniform),Ml(S,bt),lt.needsLights=function(qt){return qt.isMeshLambertMaterial||qt.isMeshToonMaterial||qt.isMeshPhongMaterial||qt.isMeshStandardMaterial||qt.isShadowMaterial||qt.isShaderMaterial&&qt.lights===!0}(S),lt.lightsStateVersion=wt,lt.needsLights&&(zt.ambientLightColor.value=rt.state.ambient,zt.lightProbe.value=rt.state.probe,zt.directionalLights.value=rt.state.directional,zt.directionalLightShadows.value=rt.state.directionalShadow,zt.spotLights.value=rt.state.spot,zt.spotLightShadows.value=rt.state.spotShadow,zt.rectAreaLights.value=rt.state.rectArea,zt.ltc_1.value=rt.state.rectAreaLTC1,zt.ltc_2.value=rt.state.rectAreaLTC2,zt.pointLights.value=rt.state.point,zt.pointLightShadows.value=rt.state.pointShadow,zt.hemisphereLights.value=rt.state.hemi,zt.directionalShadowMap.value=rt.state.directionalShadowMap,zt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,zt.spotShadowMap.value=rt.state.spotShadowMap,zt.spotLightMatrix.value=rt.state.spotLightMatrix,zt.spotLightMap.value=rt.state.spotLightMap,zt.pointShadowMap.value=rt.state.pointShadowMap,zt.pointShadowMatrix.value=rt.state.pointShadowMatrix),lt.currentProgram=Lt,lt.uniformsList=null,Lt}function vl(S){if(S.uniformsList===null){let J=S.currentProgram.getUniforms();S.uniformsList=kn.seqWithValue(J.seq,S.uniforms)}return S.uniformsList}function Ml(S,J){let et=W.get(S);et.outputColorSpace=J.outputColorSpace,et.batching=J.batching,et.instancing=J.instancing,et.instancingColor=J.instancingColor,et.skinning=J.skinning,et.morphTargets=J.morphTargets,et.morphNormals=J.morphNormals,et.morphColors=J.morphColors,et.morphTargetsCount=J.morphTargetsCount,et.numClippingPlanes=J.numClippingPlanes,et.numIntersection=J.numClipIntersection,et.vertexAlphas=J.vertexAlphas,et.vertexTangents=J.vertexTangents,et.toneMapping=J.toneMapping}Vi.setAnimationLoop(function(S){Gs&&Gs(S)}),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(S){Gs=S,fe.setAnimationLoop(S),S===null?Vi.stop():Vi.start()},fe.addEventListener("sessionstart",pl),fe.addEventListener("sessionend",fl),this.render=function(S,J){if(J!==void 0&&J.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(x===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(J),J=fe.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,J,w),d=oe.get(S,v.length),d.init(),v.push(d),L.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),b.setFromProjectionMatrix(L),H=this.localClippingEnabled,D=xt.init(this.clippingPlanes,H),g=_t.get(S,m.length),g.init(),m.push(g),dl(S,J,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(G,V),this.info.render.frame++,D===!0&&xt.beginShadows();let et=d.state.shadowsArray;if(Ot.render(et,S,J),D===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),It.render(g,S),d.setupLights(M._useLegacyLights),J.isArrayCamera){let lt=J.cameras;for(let rt=0,ut=lt.length;rt<ut;rt++){let wt=lt[rt];gl(g,S,wt,wt.viewport)}}else gl(g,S,J);w!==null&&(q.updateMultisampleRenderTarget(w),q.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(M,S,J),_e.resetDefaultState(),T=-1,R=null,v.pop(),d=v.length>0?v[v.length-1]:null,m.pop(),g=m.length>0?m[m.length-1]:null},this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,J,et){W.get(S.texture).__webglTexture=J,W.get(S.depthTexture).__webglTexture=et;let lt=W.get(S);lt.__hasExternalTextures=!0,lt.__hasExternalTextures&&(lt.__autoAllocateDepthBuffer=et===void 0,lt.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,J){let et=W.get(S);et.__webglFramebuffer=J,et.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(S,J=0,et=0){w=S,y=J,P=et;let lt=!0,rt=null,ut=!1,wt=!1;if(S){let bt=W.get(S);bt.__useDefaultFramebuffer!==void 0?(E.bindFramebuffer($.FRAMEBUFFER,null),lt=!1):bt.__webglFramebuffer===void 0?q.setupRenderTarget(S):bt.__hasExternalTextures&&q.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);let Bt=S.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(wt=!0);let Ct=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(rt=Array.isArray(Ct[J])?Ct[J][et]:Ct[J],ut=!0):rt=it.isWebGL2&&S.samples>0&&q.useMultisampledRTT(S)===!1?W.get(S).__webglMultisampledFramebuffer:Array.isArray(Ct)?Ct[et]:Ct,C.copy(S.viewport),O.copy(S.scissor),B=S.scissorTest}else C.copy(Q).multiplyScalar(j).floor(),O.copy(Y).multiplyScalar(j).floor(),B=tt;if(E.bindFramebuffer($.FRAMEBUFFER,rt)&&it.drawBuffers&&lt&&E.drawBuffers(S,rt),E.viewport(C),E.scissor(O),E.setScissorTest(B),ut){let bt=W.get(S.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt.__webglTexture,et)}else if(wt){let bt=W.get(S.texture),Bt=J||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,bt.__webglTexture,et||0,Bt)}T=-1},this.readRenderTargetPixels=function(S,J,et,lt,rt,ut,wt){if(!S||!S.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(bt=bt[wt]),bt){E.bindFramebuffer($.FRAMEBUFFER,bt);try{let Bt=S.texture,Ct=Bt.format,Lt=Bt.type;if(Ct!==xe&&Le.convert(Ct)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let zt=Lt===Ri&&(nt.has("EXT_color_buffer_half_float")||it.isWebGL2&&nt.has("EXT_color_buffer_float"));if(!(Lt===qe||Le.convert(Lt)===$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)||Lt===Ci&&(it.isWebGL2||nt.has("OES_texture_float")||nt.has("WEBGL_color_buffer_float"))||zt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");J>=0&&J<=S.width-lt&&et>=0&&et<=S.height-rt&&$.readPixels(J,et,lt,rt,Le.convert(Ct),Le.convert(Lt),ut)}finally{let Bt=w!==null?W.get(w).__webglFramebuffer:null;E.bindFramebuffer($.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(S,J,et=0){let lt=Math.pow(2,-et),rt=Math.floor(J.image.width*lt),ut=Math.floor(J.image.height*lt);q.setTexture2D(J,0),$.copyTexSubImage2D($.TEXTURE_2D,et,0,0,S.x,S.y,rt,ut),E.unbindTexture()},this.copyTextureToTexture=function(S,J,et,lt=0){let rt=J.image.width,ut=J.image.height,wt=Le.convert(et.format),bt=Le.convert(et.type);q.setTexture2D(et,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,et.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,et.unpackAlignment),J.isDataTexture?$.texSubImage2D($.TEXTURE_2D,lt,S.x,S.y,rt,ut,wt,bt,J.image.data):J.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,lt,S.x,S.y,J.mipmaps[0].width,J.mipmaps[0].height,wt,J.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,lt,S.x,S.y,wt,bt,J.image),lt===0&&et.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),E.unbindTexture()},this.copyTextureToTexture3D=function(S,J,et,lt,rt=0){if(M.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ut=S.max.x-S.min.x+1,wt=S.max.y-S.min.y+1,bt=S.max.z-S.min.z+1,Bt=Le.convert(lt.format),Ct=Le.convert(lt.type),Lt;if(lt.isData3DTexture)q.setTexture3D(lt,0),Lt=$.TEXTURE_3D;else{if(!lt.isDataArrayTexture&&!lt.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");q.setTexture2DArray(lt,0),Lt=$.TEXTURE_2D_ARRAY}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,lt.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,lt.unpackAlignment);let zt=$.getParameter($.UNPACK_ROW_LENGTH),qt=$.getParameter($.UNPACK_IMAGE_HEIGHT),He=$.getParameter($.UNPACK_SKIP_PIXELS),pi=$.getParameter($.UNPACK_SKIP_ROWS),Xi=$.getParameter($.UNPACK_SKIP_IMAGES),jt=et.isCompressedTexture?et.mipmaps[rt]:et.image;$.pixelStorei($.UNPACK_ROW_LENGTH,jt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,jt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,S.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,S.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,S.min.z),et.isDataTexture||et.isData3DTexture?$.texSubImage3D(Lt,rt,J.x,J.y,J.z,ut,wt,bt,Bt,Ct,jt.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Lt,rt,J.x,J.y,J.z,ut,wt,bt,Bt,jt.data)):$.texSubImage3D(Lt,rt,J.x,J.y,J.z,ut,wt,bt,Bt,Ct,jt),$.pixelStorei($.UNPACK_ROW_LENGTH,zt),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,qt),$.pixelStorei($.UNPACK_SKIP_PIXELS,He),$.pixelStorei($.UNPACK_SKIP_ROWS,pi),$.pixelStorei($.UNPACK_SKIP_IMAGES,Xi),rt===0&&lt.generateMipmaps&&$.generateMipmap(Lt),E.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),E.unbindTexture()},this.resetState=function(){y=0,P=0,w=null,E.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===NA?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ss?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Zt?sn:lh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===sn?Zt:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},tA=class extends Br{};tA.prototype.isWebGL1Renderer=!0;var An=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var I0=new _;var L0=new _,R0=new _,z0=new _,U0=new at,N0=new at,O0=new yt,F0=new _,H0=new _,Q0=new _,G0=new at,k0=new at,V0=new at;var X0=new _,W0=new _;var Y0=new _,q0=new Gt,j0=new Gt,J0=new _,K0=new yt,Z0=new _,$0=new Ke,tg=new yt,eg=new qn;var $n=class extends Ne{constructor(t=null,e=1,i=1,n,a,s,o,A,l=1003,c=1003,h,u){super(null,s,o,A,l,c,n,a,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ig=new yt,ng=new yt;var ln=class extends Rt{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hn=new yt,Fc=new yt,wa=[],Hc=new Je,kf=new yt,xr=new kt,Pr=new Ke,cn=class extends kt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ln(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,kf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Je),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hn),Hc.copy(t.boundingBox).applyMatrix4(Hn),this.boundingBox.union(Hc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ke),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hn),Pr.copy(t.boundingSphere).applyMatrix4(Hn),this.boundingSphere.union(Pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(i),t.ray.intersectsSphere(Pr)!==!1))for(let a=0;a<n;a++){this.getMatrixAt(a,Hn),Fc.multiplyMatrices(i,Hn),xr.matrixWorld=Fc,xr.raycast(t,wa);for(let s=0,o=wa.length;s<o;s++){let A=wa[s];A.instanceId=a,A.object=this,e.push(A)}wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ln(new Float32Array(3*this.instanceMatrix.count),3)),e.toArray(this.instanceColor.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var eA=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e){let i=this.pool,n=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let a=i[this.index];n.push(a),this.index++,a.start=t.start,a.count=t.count,a.z=e}reset(){this.list.length=0,this.index=0}};var rg=new yt,ag=new yt,sg=new yt,og=new yt,Ag=new Ui,lg=new Je,cg=new Ke,hg=new _,ug=new eA,pg=new kt;var fg=new _,dg=new _,gg=new yt,mg=new qn,vg=new Ke;var Mg=new _,xg=new _;var Sr=class extends on{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qc=new yt,iA=new qn,ba=new Ke,Da=new _,tr=class extends Pe{constructor(t=new Tt,e=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,a=t.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(n),ba.radius+=a,t.ray.intersectsSphere(ba)===!1)return;Qc.copy(n).invert(),iA.copy(t.ray).applyMatrix4(Qc);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),A=o*o,l=i.index,c=i.attributes.position;if(l!==null)for(let h=Math.max(0,s.start),u=Math.min(l.count,s.start+s.count);h<u;h++){let p=l.getX(h);Da.fromBufferAttribute(c,p),Gc(Da,p,A,n,t,e,this)}else for(let h=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);h<u;h++)Da.fromBufferAttribute(c,h),Gc(Da,h,A,n,t,e,this)}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){let s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function Gc(r,t,e,i,n,a,s){let o=iA.distanceSqToPoint(r);if(o<e){let A=new _;iA.closestPointToPoint(r,A),A.applyMatrix4(i);let l=n.ray.origin.distanceTo(A);if(l<n.near||l>n.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:A,index:t,face:null,object:s})}}var Fe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),a=0;e.push(0);for(let s=1;s<=t;s++)i=this.getPoint(s/t),a+=i.distanceTo(n),e.push(a),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,a=i.length,s;s=e||t*i[a-1];let o,A=0,l=a-1;for(;A<=l;)if(n=Math.floor(A+(l-A)/2),o=i[n]-s,o<0)A=n+1;else{if(!(o>0)){l=n;break}l=n-1}if(n=l,i[n]===s)return n/(a-1);let c=i[n];return(n+(s-c)/(i[n+1]-c))/(a-1)}getTangent(t,e){let n=t-1e-4,a=t+1e-4;n<0&&(n=0),a>1&&(a=1);let s=this.getPoint(n),o=this.getPoint(a),A=e||(s.isVector2?new at:new _);return A.copy(o).sub(s).normalize(),A}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new _,n=[],a=[],s=[],o=new _,A=new yt;for(let p=0;p<=t;p++){let f=p/t;n[p]=this.getTangentAt(f,new _)}a[0]=new _,s[0]=new _;let l=Number.MAX_VALUE,c=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=l&&(l=c,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],o),s[0].crossVectors(n[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(he(n[p-1].dot(n[p]),-1,1));a[p].applyMatrix4(A.makeRotationAxis(o,f))}s[p].crossVectors(n[p],a[p])}if(e===!0){let p=Math.acos(he(a[0].dot(a[t]),-1,1));p/=t,n[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let f=1;f<=t;f++)a[f].applyMatrix4(A.makeRotationAxis(n[f],p*f)),s[f].crossVectors(n[f],a[f])}return{tangents:n,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cr=class extends Fe{constructor(t=0,e=0,i=1,n=1,a=0,s=2*Math.PI,o=!1,A=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=A}getPoint(t,e){let i=e||new at,n=2*Math.PI,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=n;for(;a>n;)a-=n;a<Number.EPSILON&&(a=s?0:n),this.aClockwise!==!0||s||(a===n?a=-n:a-=n);let o=this.aStartAngle+t*a,A=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=A-this.aX,p=l-this.aY;A=u*c-p*h+this.aX,l=u*h+p*c+this.aY}return i.set(A,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},nA=class extends Cr{constructor(t,e,i,n,a,s){super(t,e,i,i,n,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function HA(){let r=0,t=0,e=0,i=0;function n(a,s,o,A){r=a,t=o,e=-3*a+3*s-2*o-A,i=2*a-2*s+o+A}return{initCatmullRom:function(a,s,o,A,l){n(s,o,l*(o-a),l*(A-s))},initNonuniformCatmullRom:function(a,s,o,A,l,c,h){let u=(s-a)/l-(o-a)/(l+c)+(o-s)/c,p=(o-s)/c-(A-s)/(c+h)+(A-o)/h;u*=c,p*=c,n(s,o,u,p)},calc:function(a){let s=a*a;return r+t*a+e*s+i*(s*a)}}}var Ea=new _,bo=new HA,Do=new HA,Eo=new HA,rA=class extends Fe{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new _){let i=e,n=this.points,a=n.length,s=(a-(this.closed?0:1))*t,o,A,l=Math.floor(s),c=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/a)+1)*a:c===0&&l===a-1&&(l=a-2,c=1),this.closed||l>0?o=n[(l-1)%a]:(Ea.subVectors(n[0],n[1]).add(n[0]),o=Ea);let h=n[l%a],u=n[(l+1)%a];if(this.closed||l+2<a?A=n[(l+2)%a]:(Ea.subVectors(n[a-1],n[a-2]).add(n[a-1]),A=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(u),p),d=Math.pow(u.distanceToSquared(A),p);g<1e-4&&(g=1),f<1e-4&&(f=g),d<1e-4&&(d=g),bo.initNonuniformCatmullRom(o.x,h.x,u.x,A.x,f,g,d),Do.initNonuniformCatmullRom(o.y,h.y,u.y,A.y,f,g,d),Eo.initNonuniformCatmullRom(o.z,h.z,u.z,A.z,f,g,d)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(o.x,h.x,u.x,A.x,this.tension),Do.initCatmullRom(o.y,h.y,u.y,A.y,this.tension),Eo.initCatmullRom(o.z,h.z,u.z,A.z,this.tension));return i.set(bo.calc(c),Do.calc(c),Eo.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new _().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function kc(r,t,e,i,n){let a=.5*(i-t),s=.5*(n-e),o=r*r;return(2*e-2*i+a+s)*(r*o)+(-3*e+3*i-2*a-s)*o+a*r+e}function br(r,t,e,i){return function(n,a){let s=1-n;return s*s*a}(r,t)+function(n,a){return 2*(1-n)*n*a}(r,e)+function(n,a){return n*n*a}(r,i)}function Dr(r,t,e,i,n){return function(a,s){let o=1-a;return o*o*o*s}(r,t)+function(a,s){let o=1-a;return 3*o*o*a*s}(r,e)+function(a,s){return 3*(1-a)*a*a*s}(r,i)+function(a,s){return a*a*a*s}(r,n)}var Ja=class extends Fe{constructor(t=new at,e=new at,i=new at,n=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new at){let i=e,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Dr(t,n.x,a.x,s.x,o.x),Dr(t,n.y,a.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},aA=class extends Fe{constructor(t=new _,e=new _,i=new _,n=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new _){let i=e,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Dr(t,n.x,a.x,s.x,o.x),Dr(t,n.y,a.y,s.y,o.y),Dr(t,n.z,a.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ka=class extends Fe{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sA=class extends Fe{constructor(t=new _,e=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new _){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends Fe{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){let i=e,n=this.v0,a=this.v1,s=this.v2;return i.set(br(t,n.x,a.x,s.x),br(t,n.y,a.y,s.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends Fe{constructor(t=new _,e=new _,i=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new _){let i=e,n=this.v0,a=this.v1,s=this.v2;return i.set(br(t,n.x,a.x,s.x),br(t,n.y,a.y,s.y),br(t,n.z,a.z,s.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ts=class extends Fe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let i=e,n=this.points,a=(n.length-1)*t,s=Math.floor(a),o=a-s,A=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return i.set(kc(o,A.x,l.x,c.x,h.x),kc(o,A.y,l.y,c.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new at().fromArray(n))}return this}},es=Object.freeze({__proto__:null,ArcCurve:nA,CatmullRomCurve3:rA,CubicBezierCurve:Ja,CubicBezierCurve3:aA,EllipseCurve:Cr,LineCurve:Ka,LineCurve3:sA,QuadraticBezierCurve:Za,QuadraticBezierCurve3:$a,SplineCurve:ts}),oA=class extends Fe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new es[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),a=0;for(;a<n.length;){if(n[a]>=i){let s=n[a]-i,o=this.curves[a],A=o.getLength(),l=A===0?0:1-s/A;return o.getPointAt(l,e)}a++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,a=this.curves;n<a.length;n++){let s=a[n],o=s.isEllipseCurve?2*t:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,A=s.getPoints(o);for(let l=0;l<A.length;l++){let c=A[l];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new es[n.type]().fromJSON(n))}return this}},Tr=class extends oA{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ka(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let a=new Za(this.currentPoint.clone(),new at(t,e),new at(i,n));return this.curves.push(a),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,a,s){let o=new Ja(this.currentPoint.clone(),new at(t,e),new at(i,n),new at(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ts(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,a,s){let o=this.currentPoint.x,A=this.currentPoint.y;return this.absarc(t+o,e+A,i,n,a,s),this}absarc(t,e,i,n,a,s){return this.absellipse(t,e,i,i,n,a,s),this}ellipse(t,e,i,n,a,s,o,A){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,i,n,a,s,o,A),this}absellipse(t,e,i,n,a,s,o,A){let l=new Cr(t,e,i,n,a,s,o,A);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},is=class r extends Tt{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=he(n,0,2*Math.PI);let a=[],s=[],o=[],A=[],l=[],c=1/e,h=new _,u=new at,p=new _,f=new _,g=new _,d=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:d=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,p.x=1*m,p.y=-d,p.z=0*m,g.copy(p),p.normalize(),A.push(p.x,p.y,p.z);break;case t.length-1:A.push(g.x,g.y,g.z);break;default:d=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,p.x=1*m,p.y=-d,p.z=0*m,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),A.push(p.x,p.y,p.z),g.copy(f)}for(let v=0;v<=e;v++){let M=i+v*c*n,x=Math.sin(M),y=Math.cos(M);for(let P=0;P<=t.length-1;P++){h.x=t[P].x*x,h.y=t[P].y,h.z=t[P].x*y,s.push(h.x,h.y,h.z),u.x=v/e,u.y=P/(t.length-1),o.push(u.x,u.y);let w=A[3*P+0]*x,T=A[3*P+1],R=A[3*P+0]*y;l.push(w,T,R)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){let x=M+v*t.length,y=x,P=x+t.length,w=x+t.length+1,T=x+1;a.push(y,P,T),a.push(w,T,P)}this.setIndex(a),this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(o,2)),this.setAttribute("normal",new vt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},AA=class r extends is{constructor(t=1,e=1,i=4,n=8){let a=new Tr;a.absarc(0,-e/2,t,1.5*Math.PI,0),a.absarc(0,e/2,t,0,.5*Math.PI),super(a.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}},Ni=class r extends Tt{constructor(t=1,e=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let a=[],s=[],o=[],A=[],l=new _,c=new at;s.push(0,0,0),o.push(0,0,1),A.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){let p=i+h/e*n;l.x=t*Math.cos(p),l.y=t*Math.sin(p),s.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(s[u]/t+1)/2,c.y=(s[u+1]/t+1)/2,A.push(c.x,c.y)}for(let h=1;h<=e;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new vt(s,3)),this.setAttribute("normal",new vt(o,3)),this.setAttribute("uv",new vt(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},hn=class r extends Tt{constructor(t=1,e=1,i=1,n=32,a=1,s=!1,o=0,A=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:A};let l=this;n=Math.floor(n),a=Math.floor(a);let c=[],h=[],u=[],p=[],f=0,g=[],d=i/2,m=0;function v(M){let x=f,y=new at,P=new _,w=0,T=M===!0?t:e,R=M===!0?1:-1;for(let O=1;O<=n;O++)h.push(0,d*R,0),u.push(0,R,0),p.push(.5,.5),f++;let C=f;for(let O=0;O<=n;O++){let B=O/n*A+o,N=Math.cos(B),U=Math.sin(B);P.x=T*U,P.y=d*R,P.z=T*N,h.push(P.x,P.y,P.z),u.push(0,R,0),y.x=.5*N+.5,y.y=.5*U*R+.5,p.push(y.x,y.y),f++}for(let O=0;O<n;O++){let B=x+O,N=C+O;M===!0?c.push(N,N+1,B):c.push(N+1,N,B),w+=3}l.addGroup(m,w,M===!0?1:2),m+=w}(function(){let M=new _,x=new _,y=0,P=(e-t)/i;for(let w=0;w<=a;w++){let T=[],R=w/a,C=R*(e-t)+t;for(let O=0;O<=n;O++){let B=O/n,N=B*A+o,U=Math.sin(N),X=Math.cos(N);x.x=C*U,x.y=-R*i+d,x.z=C*X,h.push(x.x,x.y,x.z),M.set(U,P,X).normalize(),u.push(M.x,M.y,M.z),p.push(B,1-R),T.push(f++)}g.push(T)}for(let w=0;w<n;w++)for(let T=0;T<a;T++){let R=g[T][w],C=g[T+1][w],O=g[T+1][w+1],B=g[T][w+1];c.push(R,C,B),c.push(C,O,B),y+=6}l.addGroup(m,y,0),m+=y})(),s===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ir=class r extends hn{constructor(t=1,e=1,i=32,n=1,a=!1,s=0,o=2*Math.PI){super(0,t,e,i,n,a,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},un=class r extends Tt{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let a=[],s=[];function o(u,p,f,g){let d=g+1,m=[];for(let v=0;v<=d;v++){m[v]=[];let M=u.clone().lerp(f,v/d),x=p.clone().lerp(f,v/d),y=d-v;for(let P=0;P<=y;P++)m[v][P]=P===0&&v===d?M:M.clone().lerp(x,P/y)}for(let v=0;v<d;v++)for(let M=0;M<2*(d-v)-1;M++){let x=Math.floor(M/2);M%2==0?(A(m[v][x+1]),A(m[v+1][x]),A(m[v][x])):(A(m[v][x+1]),A(m[v+1][x+1]),A(m[v+1][x]))}}function A(u){a.push(u.x,u.y,u.z)}function l(u,p){let f=3*u;p.x=t[f+0],p.y=t[f+1],p.z=t[f+2]}function c(u,p,f,g){g<0&&u.x===1&&(s[p]=u.x-1),f.x===0&&f.z===0&&(s[p]=g/2/Math.PI+.5)}function h(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new _,f=new _,g=new _;for(let d=0;d<e.length;d+=3)l(e[d+0],p),l(e[d+1],f),l(e[d+2],g),o(p,f,g,u)})(n),function(u){let p=new _;for(let f=0;f<a.length;f+=3)p.x=a[f+0],p.y=a[f+1],p.z=a[f+2],p.normalize().multiplyScalar(u),a[f+0]=p.x,a[f+1]=p.y,a[f+2]=p.z}(i),function(){let u=new _;for(let f=0;f<a.length;f+=3){u.x=a[f+0],u.y=a[f+1],u.z=a[f+2];let g=h(u)/2/Math.PI+.5,d=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);s.push(g,1-d)}var p;(function(){let f=new _,g=new _,d=new _,m=new _,v=new at,M=new at,x=new at;for(let y=0,P=0;y<a.length;y+=9,P+=6){f.set(a[y+0],a[y+1],a[y+2]),g.set(a[y+3],a[y+4],a[y+5]),d.set(a[y+6],a[y+7],a[y+8]),v.set(s[P+0],s[P+1]),M.set(s[P+2],s[P+3]),x.set(s[P+4],s[P+5]),m.copy(f).add(g).add(d).divideScalar(3);let w=h(m);c(v,P+0,f,w),c(M,P+2,g,w),c(x,P+4,d,w)}})(),function(){for(let f=0;f<s.length;f+=6){let g=s[f+0],d=s[f+2],m=s[f+4],v=Math.max(g,d,m),M=Math.min(g,d,m);v>.9&&M<.1&&(g<.2&&(s[f+0]+=1),d<.2&&(s[f+2]+=1),m<.2&&(s[f+4]+=1))}}()}(),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(a.slice(),3)),this.setAttribute("uv",new vt(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}},lA=class r extends un{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},_a=new _,Ba=new _,_o=new _,Sa=new nn,cA=class extends Tt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let n=Math.pow(10,4),a=Math.cos(La*e),s=t.getIndex(),o=t.getAttribute("position"),A=s?s.count:o.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),u={},p=[];for(let f=0;f<A;f+=3){s?(l[0]=s.getX(f),l[1]=s.getX(f+1),l[2]=s.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:g,b:d,c:m}=Sa;if(g.fromBufferAttribute(o,l[0]),d.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Sa.getNormal(_o),h[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,h[1]=`${Math.round(d.x*n)},${Math.round(d.y*n)},${Math.round(d.z*n)}`,h[2]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,h[0]!==h[1]&&h[1]!==h[2]&&h[2]!==h[0])for(let v=0;v<3;v++){let M=(v+1)%3,x=h[v],y=h[M],P=Sa[c[v]],w=Sa[c[M]],T=`${x}_${y}`,R=`${y}_${x}`;R in u&&u[R]?(_o.dot(u[R].normal)<=a&&(p.push(P.x,P.y,P.z),p.push(w.x,w.y,w.z)),u[R]=null):T in u||(u[T]={index0:l[v],index1:l[M],normal:_o.clone()})}}for(let f in u)if(u[f]){let{index0:g,index1:d}=u[f];_a.fromBufferAttribute(o,g),Ba.fromBufferAttribute(o,d),p.push(_a.x,_a.y,_a.z),p.push(Ba.x,Ba.y,Ba.z)}this.setAttribute("position",new vt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},ns=class extends Tr{constructor(t){super(t),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Tr().fromJSON(n))}return this}},Vf=function(r,t,e=2){let i=t&&t.length,n=i?t[0]*e:r.length,a=Vc(r,0,n,e,!0),s=[];if(!a||a.next===a.prev)return s;let o,A,l,c,h,u,p;if(i&&(a=function(f,g,d,m){let v=[],M,x,y,P,w;for(M=0,x=g.length;M<x;M++)y=g[M]*m,P=M<x-1?g[M+1]*m:f.length,w=Vc(f,y,P,m,!1),w===w.next&&(w.steiner=!0),v.push(Zf(w));for(v.sort(jf),M=0;M<v.length;M++)d=Jf(v[M],d);return d}(r,t,a,e)),r.length>80*e){o=l=r[0],A=c=r[1];for(let f=e;f<n;f+=e)h=r[f],u=r[f+1],h<o&&(o=h),u<A&&(A=u),h>l&&(l=h),u>c&&(c=u);p=Math.max(l-o,c-A),p=p!==0?32767/p:0}return Lr(a,s,e,o,A,p,0),s};function Vc(r,t,e,i,n){let a,s;if(n===function(o,A,l,c){let h=0;for(let u=A,p=l-c;u<l;u+=c)h+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return h}(r,t,e,i)>0)for(a=t;a<e;a+=i)s=Xc(a,r[a],r[a+1],s);else for(a=e-i;a>=t;a-=i)s=Xc(a,r[a],r[a+1],s);return s&&As(s,s.next)&&(zr(s),s=s.next),s}function pn(r,t){if(!r)return r;t||(t=r);let e,i=r;do if(e=!1,i.steiner||!As(i,i.next)&&Jt(i.prev,i,i.next)!==0)i=i.next;else{if(zr(i),i=t=i.prev,i===i.next)break;e=!0}while(e||i!==t);return t}function Lr(r,t,e,i,n,a,s){if(!r)return;!s&&a&&function(c,h,u,p){let f=c;do f.z===0&&(f.z=hA(f.x,f.y,h,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==c);f.prevZ.nextZ=null,f.prevZ=null,function(g){let d,m,v,M,x,y,P,w,T=1;do{for(m=g,g=null,x=null,y=0;m;){for(y++,v=m,P=0,d=0;d<T&&(P++,v=v.nextZ,v);d++);for(w=T;P>0||w>0&&v;)P!==0&&(w===0||!v||m.z<=v.z)?(M=m,m=m.nextZ,P--):(M=v,v=v.nextZ,w--),x?x.nextZ=M:g=M,M.prevZ=x,x=M;m=v}x.nextZ=null,T*=2}while(y>1)}(f)}(r,i,n,a);let o,A,l=r;for(;r.prev!==r.next;)if(o=r.prev,A=r.next,a?Wf(r,i,n,a):Xf(r))t.push(o.i/e|0),t.push(r.i/e|0),t.push(A.i/e|0),zr(r),r=A.next,l=A.next;else if((r=A)===l){s?s===1?Lr(r=Yf(pn(r),t,e),t,e,i,n,a,2):s===2&&qf(r,t,e,i,n,a):Lr(pn(r),t,e,i,n,a,1);break}}function Xf(r){let t=r.prev,e=r,i=r.next;if(Jt(t,e,i)>=0)return!1;let n=t.x,a=e.x,s=i.x,o=t.y,A=e.y,l=i.y,c=n<a?n<s?n:s:a<s?a:s,h=o<A?o<l?o:l:A<l?A:l,u=n>a?n>s?n:s:a>s?a:s,p=o>A?o>l?o:l:A>l?A:l,f=i.next;for(;f!==t;){if(f.x>=c&&f.x<=u&&f.y>=h&&f.y<=p&&Qn(n,o,a,A,s,l,f.x,f.y)&&Jt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Wf(r,t,e,i){let n=r.prev,a=r,s=r.next;if(Jt(n,a,s)>=0)return!1;let o=n.x,A=a.x,l=s.x,c=n.y,h=a.y,u=s.y,p=o<A?o<l?o:l:A<l?A:l,f=c<h?c<u?c:u:h<u?h:u,g=o>A?o>l?o:l:A>l?A:l,d=c>h?c>u?c:u:h>u?h:u,m=hA(p,f,t,e,i),v=hA(g,d,t,e,i),M=r.prevZ,x=r.nextZ;for(;M&&M.z>=m&&x&&x.z<=v;){if(M.x>=p&&M.x<=g&&M.y>=f&&M.y<=d&&M!==n&&M!==s&&Qn(o,c,A,h,l,u,M.x,M.y)&&Jt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=p&&x.x<=g&&x.y>=f&&x.y<=d&&x!==n&&x!==s&&Qn(o,c,A,h,l,u,x.x,x.y)&&Jt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=g&&M.y>=f&&M.y<=d&&M!==n&&M!==s&&Qn(o,c,A,h,l,u,M.x,M.y)&&Jt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=g&&x.y>=f&&x.y<=d&&x!==n&&x!==s&&Qn(o,c,A,h,l,u,x.x,x.y)&&Jt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Yf(r,t,e){let i=r;do{let n=i.prev,a=i.next.next;!As(n,a)&&Mh(n,i,i.next,a)&&Rr(n,a)&&Rr(a,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(a.i/e|0),zr(i),zr(i.next),i=r=a),i=i.next}while(i!==r);return pn(i)}function qf(r,t,e,i,n,a){let s=r;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&$f(s,o)){let A=xh(s,o);return s=pn(s,s.next),A=pn(A,A.next),Lr(s,t,e,i,n,a,0),void Lr(A,t,e,i,n,a,0)}o=o.next}s=s.next}while(s!==r)}function jf(r,t){return r.x-t.x}function Jf(r,t){let e=function(n,a){let s,o=a,A=-1/0,l=n.x,c=n.y;do{if(c<=o.y&&c>=o.next.y&&o.next.y!==o.y){let d=o.x+(c-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(d<=l&&d>A&&(A=d,s=o.x<o.next.x?o:o.next,d===l))return s}o=o.next}while(o!==a);if(!s)return null;let h=s,u=s.x,p=s.y,f,g=1/0;o=s;do l>=o.x&&o.x>=u&&l!==o.x&&Qn(c<p?l:A,c,u,p,c<p?A:l,c,o.x,o.y)&&(f=Math.abs(c-o.y)/(l-o.x),Rr(o,n)&&(f<g||f===g&&(o.x>s.x||o.x===s.x&&Kf(s,o)))&&(s=o,g=f)),o=o.next;while(o!==h);return s}(r,t);if(!e)return t;let i=xh(e,r);return pn(i,i.next),pn(e,e.next)}function Kf(r,t){return Jt(r.prev,r,t.prev)<0&&Jt(t.next,r,r.next)<0}function hA(r,t,e,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-e)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-i)*n|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function Zf(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Qn(r,t,e,i,n,a,s,o){return(n-s)*(t-o)>=(r-s)*(a-o)&&(r-s)*(i-o)>=(e-s)*(t-o)&&(e-s)*(a-o)>=(n-s)*(i-o)}function $f(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!function(e,i){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==i.i&&n.next.i!==i.i&&Mh(n,n.next,e,i))return!0;n=n.next}while(n!==e);return!1}(r,t)&&(Rr(r,t)&&Rr(t,r)&&function(e,i){let n=e,a=!1,s=(e.x+i.x)/2,o=(e.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&s<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==e);return a}(r,t)&&(Jt(r.prev,r,t.prev)||Jt(r,t.prev,t))||As(r,t)&&Jt(r.prev,r,r.next)>0&&Jt(t.prev,t,t.next)>0)}function Jt(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function As(r,t){return r.x===t.x&&r.y===t.y}function Mh(r,t,e,i){let n=Ta(Jt(r,t,e)),a=Ta(Jt(r,t,i)),s=Ta(Jt(e,i,r)),o=Ta(Jt(e,i,t));return n!==a&&s!==o||!(n!==0||!Ca(r,e,t))||!(a!==0||!Ca(r,i,t))||!(s!==0||!Ca(e,r,i))||!(o!==0||!Ca(e,t,i))}function Ca(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ta(r){return r>0?1:r<0?-1:0}function Rr(r,t){return Jt(r.prev,r,r.next)<0?Jt(r,t,r.next)>=0&&Jt(r,r.prev,t)>=0:Jt(r,t,r.prev)<0||Jt(r,r.next,t)<0}function xh(r,t){let e=new uA(r.i,r.x,r.y),i=new uA(t.i,t.x,t.y),n=r.next,a=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function Xc(r,t,e,i){let n=new uA(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function zr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function uA(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ii=class r{static area(t){let e=t.length,i=0;for(let n=e-1,a=0;a<e;n=a++)i+=t[n].x*t[a].y-t[a].x*t[n].y;return .5*i}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let i=[],n=[],a=[];Wc(t),Yc(i,t);let s=t.length;e.forEach(Wc);for(let A=0;A<e.length;A++)n.push(s),s+=e[A].length,Yc(i,e[A]);let o=Vf(i,n);for(let A=0;A<o.length;A+=3)a.push(o.slice(A,A+3));return a}};function Wc(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Yc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var pA=class r extends Tt{constructor(t=new ns([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],a=[];for(let o=0,A=t.length;o<A;o++)s(t[o]);function s(o){let A=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,u=e.bevelEnabled===void 0||e.bevelEnabled,p=e.bevelThickness!==void 0?e.bevelThickness:.2,f=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:td,M,x,y,P,w,T=!1;m&&(M=m.getSpacedPoints(c),T=!0,u=!1,x=m.computeFrenetFrames(c,!1),y=new _,P=new _,w=new _),u||(d=0,p=0,f=0,g=0);let R=o.extractPoints(l),C=R.shape,O=R.holes;if(!Ii.isClockWise(C)){C=C.reverse();for(let z=0,F=O.length;z<F;z++){let k=O[z];Ii.isClockWise(k)&&(O[z]=k.reverse())}}let B=Ii.triangulateShape(C,O),N=C;for(let z=0,F=O.length;z<F;z++){let k=O[z];C=C.concat(k)}function U(z,F,k){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(F,k)}let X=C.length,ot=B.length;function j(z,F,k){let nt,it,E,st=z.x-F.x,W=z.y-F.y,q=k.x-z.x,At=k.y-z.y,ht=st*st+W*W,ft=st*At-W*q;if(Math.abs(ft)>Number.EPSILON){let dt=Math.sqrt(ht),Dt=Math.sqrt(q*q+At*At),gt=F.x-W/dt,mt=F.y+st/dt,_t=((k.x-At/Dt-gt)*At-(k.y+q/Dt-mt)*q)/(st*At-W*q);nt=gt+st*_t-z.x,it=mt+W*_t-z.y;let oe=nt*nt+it*it;if(oe<=2)return new at(nt,it);E=Math.sqrt(oe/2)}else{let dt=!1;st>Number.EPSILON?q>Number.EPSILON&&(dt=!0):st<-Number.EPSILON?q<-Number.EPSILON&&(dt=!0):Math.sign(W)===Math.sign(At)&&(dt=!0),dt?(nt=-W,it=st,E=Math.sqrt(ht)):(nt=st,it=W,E=Math.sqrt(ht/2))}return new at(nt/E,it/E)}let G=[];for(let z=0,F=N.length,k=F-1,nt=z+1;z<F;z++,k++,nt++)k===F&&(k=0),nt===F&&(nt=0),G[z]=j(N[z],N[k],N[nt]);let V=[],Q,Y=G.concat();for(let z=0,F=O.length;z<F;z++){let k=O[z];Q=[];for(let nt=0,it=k.length,E=it-1,st=nt+1;nt<it;nt++,E++,st++)E===it&&(E=0),st===it&&(st=0),Q[nt]=j(k[nt],k[E],k[st]);V.push(Q),Y=Y.concat(Q)}for(let z=0;z<d;z++){let F=z/d,k=p*Math.cos(F*Math.PI/2),nt=f*Math.sin(F*Math.PI/2)+g;for(let it=0,E=N.length;it<E;it++){let st=U(N[it],G[it],nt);D(st.x,st.y,-k)}for(let it=0,E=O.length;it<E;it++){let st=O[it];Q=V[it];for(let W=0,q=st.length;W<q;W++){let At=U(st[W],Q[W],nt);D(At.x,At.y,-k)}}}let tt=f+g;for(let z=0;z<X;z++){let F=u?U(C[z],Y[z],tt):C[z];T?(P.copy(x.normals[0]).multiplyScalar(F.x),y.copy(x.binormals[0]).multiplyScalar(F.y),w.copy(M[0]).add(P).add(y),D(w.x,w.y,w.z)):D(F.x,F.y,0)}for(let z=1;z<=c;z++)for(let F=0;F<X;F++){let k=u?U(C[F],Y[F],tt):C[F];T?(P.copy(x.normals[z]).multiplyScalar(k.x),y.copy(x.binormals[z]).multiplyScalar(k.y),w.copy(M[z]).add(P).add(y),D(w.x,w.y,w.z)):D(k.x,k.y,h/c*z)}for(let z=d-1;z>=0;z--){let F=z/d,k=p*Math.cos(F*Math.PI/2),nt=f*Math.sin(F*Math.PI/2)+g;for(let it=0,E=N.length;it<E;it++){let st=U(N[it],G[it],nt);D(st.x,st.y,h+k)}for(let it=0,E=O.length;it<E;it++){let st=O[it];Q=V[it];for(let W=0,q=st.length;W<q;W++){let At=U(st[W],Q[W],nt);T?D(At.x,At.y+M[c-1].y,M[c-1].x+k):D(At.x,At.y,h+k)}}}function b(z,F){let k=z.length;for(;--k>=0;){let nt=k,it=k-1;it<0&&(it=z.length-1);for(let E=0,st=c+2*d;E<st;E++){let W=X*E,q=X*(E+1);Z(F+nt+W,F+it+W,F+it+q,F+nt+q)}}}function D(z,F,k){A.push(z),A.push(F),A.push(k)}function H(z,F,k){L(z),L(F),L(k);let nt=n.length/3,it=v.generateTopUV(i,n,nt-3,nt-2,nt-1);K(it[0]),K(it[1]),K(it[2])}function Z(z,F,k,nt){L(z),L(F),L(nt),L(F),L(k),L(nt);let it=n.length/3,E=v.generateSideWallUV(i,n,it-6,it-3,it-2,it-1);K(E[0]),K(E[1]),K(E[3]),K(E[1]),K(E[2]),K(E[3])}function L(z){n.push(A[3*z+0]),n.push(A[3*z+1]),n.push(A[3*z+2])}function K(z){a.push(z.x),a.push(z.y)}(function(){let z=n.length/3;if(u){let F=0,k=X*F;for(let nt=0;nt<ot;nt++){let it=B[nt];H(it[2]+k,it[1]+k,it[0]+k)}F=c+2*d,k=X*F;for(let nt=0;nt<ot;nt++){let it=B[nt];H(it[0]+k,it[1]+k,it[2]+k)}}else{for(let F=0;F<ot;F++){let k=B[F];H(k[2],k[1],k[0])}for(let F=0;F<ot;F++){let k=B[F];H(k[0]+X*c,k[1]+X*c,k[2]+X*c)}}i.addGroup(z,n.length/3-z,0)})(),function(){let z=n.length/3,F=0;b(N,F),F+=N.length;for(let k=0,nt=O.length;k<nt;k++){let it=O[k];b(it,F),F+=it.length}i.addGroup(z,n.length/3-z,1)}()}this.setAttribute("position",new vt(n,3)),this.setAttribute("uv",new vt(a,2)),this.computeVertexNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return function(e,i,n){if(n.shapes=[],Array.isArray(e))for(let a=0,s=e.length;a<s;a++){let o=e[a];n.shapes.push(o.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,t)}static fromJSON(t,e){let i=[];for(let a=0,s=t.shapes.length;a<s;a++){let o=e[t.shapes[a]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new es[n.type]().fromJSON(n)),new r(i,t.options)}},td={generateTopUV:function(r,t,e,i,n){let a=t[3*e],s=t[3*e+1],o=t[3*i],A=t[3*i+1],l=t[3*n],c=t[3*n+1];return[new at(a,s),new at(o,A),new at(l,c)]},generateSideWallUV:function(r,t,e,i,n,a){let s=t[3*e],o=t[3*e+1],A=t[3*e+2],l=t[3*i],c=t[3*i+1],h=t[3*i+2],u=t[3*n],p=t[3*n+1],f=t[3*n+2],g=t[3*a],d=t[3*a+1],m=t[3*a+2];return Math.abs(o-c)<Math.abs(s-l)?[new at(s,1-A),new at(l,1-h),new at(u,1-f),new at(g,1-m)]:[new at(o,1-A),new at(c,1-h),new at(p,1-f),new at(d,1-m)]}},fn=class r extends un{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},fA=class r extends un{constructor(t=1,e=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},dA=class r extends Tt{constructor(t=.5,e=1,i=32,n=1,a=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:s},i=Math.max(3,i);let o=[],A=[],l=[],c=[],h=t,u=(e-t)/(n=Math.max(1,n)),p=new _,f=new at;for(let g=0;g<=n;g++){for(let d=0;d<=i;d++){let m=a+d/i*s;p.x=h*Math.cos(m),p.y=h*Math.sin(m),A.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/e+1)/2,f.y=(p.y/e+1)/2,c.push(f.x,f.y)}h+=u}for(let g=0;g<n;g++){let d=g*(i+1);for(let m=0;m<i;m++){let v=m+d,M=v,x=v+i+1,y=v+i+2,P=v+1;o.push(M,x,P),o.push(x,y,P)}}this.setIndex(o),this.setAttribute("position",new vt(A,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},gA=class r extends Tt{constructor(t=new ns([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],a=[],s=[],o=0,A=0;if(Array.isArray(t)===!1)l(t);else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(o,A,c),o+=A,A=0;function l(c){let h=n.length/3,u=c.extractPoints(e),p=u.shape,f=u.holes;Ii.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,m=f.length;d<m;d++){let v=f[d];Ii.isClockWise(v)===!0&&(f[d]=v.reverse())}let g=Ii.triangulateShape(p,f);for(let d=0,m=f.length;d<m;d++){let v=f[d];p=p.concat(v)}for(let d=0,m=p.length;d<m;d++){let v=p[d];n.push(v.x,v.y,0),a.push(0,0,1),s.push(v.x,v.y)}for(let d=0,m=g.length;d<m;d++){let v=g[d],M=v[0]+h,x=v[1]+h,y=v[2]+h;i.push(M,x,y),A+=3}}this.setIndex(i),this.setAttribute("position",new vt(n,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(s,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return function(e,i){if(i.shapes=[],Array.isArray(e))for(let n=0,a=e.length;n<a;n++){let s=e[n];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);return i}(this.parameters.shapes,t)}static fromJSON(t,e){let i=[];for(let n=0,a=t.shapes.length;n<a;n++){let s=e[t.shapes[n]];i.push(s)}return new r(i,t.curveSegments)}},mA=class r extends Tt{constructor(t=1,e=32,i=16,n=0,a=2*Math.PI,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let A=Math.min(s+o,Math.PI),l=0,c=[],h=new _,u=new _,p=[],f=[],g=[],d=[];for(let m=0;m<=i;m++){let v=[],M=m/i,x=0;m===0&&s===0?x=.5/e:m===i&&A===Math.PI&&(x=-.5/e);for(let y=0;y<=e;y++){let P=y/e;h.x=-t*Math.cos(n+P*a)*Math.sin(s+M*o),h.y=t*Math.cos(s+M*o),h.z=t*Math.sin(n+P*a)*Math.sin(s+M*o),f.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),d.push(P+x,1-M),v.push(l++)}c.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){let M=c[m][v+1],x=c[m][v],y=c[m+1][v],P=c[m+1][v+1];(m!==0||s>0)&&p.push(M,x,P),(m!==i-1||A<Math.PI)&&p.push(x,y,P)}this.setIndex(p),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(g,3)),this.setAttribute("uv",new vt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},vA=class r extends un{constructor(t=1,e=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},MA=class r extends Tt{constructor(t=1,e=.4,i=12,n=48,a=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:a},i=Math.floor(i),n=Math.floor(n);let s=[],o=[],A=[],l=[],c=new _,h=new _,u=new _;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let g=f/n*a,d=p/i*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(g),h.y=(t+e*Math.cos(d))*Math.sin(g),h.z=e*Math.sin(d),o.push(h.x,h.y,h.z),c.x=t*Math.cos(g),c.y=t*Math.sin(g),u.subVectors(h,c).normalize(),A.push(u.x,u.y,u.z),l.push(f/n),l.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let g=(n+1)*p+f-1,d=(n+1)*(p-1)+f-1,m=(n+1)*(p-1)+f,v=(n+1)*p+f;s.push(g,d,v),s.push(d,m,v)}this.setIndex(s),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(A,3)),this.setAttribute("uv",new vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},xA=class r extends Tt{constructor(t=1,e=.4,i=64,n=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:n,p:a,q:s},i=Math.floor(i),n=Math.floor(n);let o=[],A=[],l=[],c=[],h=new _,u=new _,p=new _,f=new _,g=new _,d=new _,m=new _;for(let M=0;M<=i;++M){let x=M/i*a*Math.PI*2;v(x,a,s,t,p),v(x+.01,a,s,t,f),d.subVectors(f,p),m.addVectors(f,p),g.crossVectors(d,m),m.crossVectors(g,d),g.normalize(),m.normalize();for(let y=0;y<=n;++y){let P=y/n*Math.PI*2,w=-e*Math.cos(P),T=e*Math.sin(P);h.x=p.x+(w*m.x+T*g.x),h.y=p.y+(w*m.y+T*g.y),h.z=p.z+(w*m.z+T*g.z),A.push(h.x,h.y,h.z),u.subVectors(h,p).normalize(),l.push(u.x,u.y,u.z),c.push(M/i),c.push(y/n)}}for(let M=1;M<=i;M++)for(let x=1;x<=n;x++){let y=(n+1)*(M-1)+(x-1),P=(n+1)*M+(x-1),w=(n+1)*M+x,T=(n+1)*(M-1)+x;o.push(y,P,T),o.push(P,w,T)}function v(M,x,y,P,w){let T=Math.cos(M),R=Math.sin(M),C=y/x*M,O=Math.cos(C);w.x=P*(2+O)*.5*T,w.y=P*(2+O)*R*.5,w.z=P*Math.sin(C)*.5}this.setIndex(o),this.setAttribute("position",new vt(A,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},PA=class r extends Tt{constructor(t=new $a(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),e=64,i=1,n=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:a};let s=t.computeFrenetFrames(e,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new _,A=new _,l=new at,c=new _,h=[],u=[],p=[],f=[];function g(d){c=t.getPointAt(d/e,c);let m=s.normals[d],v=s.binormals[d];for(let M=0;M<=n;M++){let x=M/n*Math.PI*2,y=Math.sin(x),P=-Math.cos(x);A.x=P*m.x+y*v.x,A.y=P*m.y+y*v.y,A.z=P*m.z+y*v.z,A.normalize(),u.push(A.x,A.y,A.z),o.x=c.x+i*A.x,o.y=c.y+i*A.y,o.z=c.z+i*A.z,h.push(o.x,o.y,o.z)}}(function(){for(let d=0;d<e;d++)g(d);g(a===!1?e:0),function(){for(let d=0;d<=e;d++)for(let m=0;m<=n;m++)l.x=d/e,l.y=m/n,p.push(l.x,l.y)}(),function(){for(let d=1;d<=e;d++)for(let m=1;m<=n;m++){let v=(n+1)*(d-1)+(m-1),M=(n+1)*d+(m-1),x=(n+1)*d+m,y=(n+1)*(d-1)+m;f.push(v,M,y),f.push(M,x,y)}}()})(),this.setIndex(f),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new es[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},yA=class extends Tt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,n=new _,a=new _;if(t.index!==null){let s=t.attributes.position,o=t.index,A=t.groups;A.length===0&&(A=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,c=A.length;l<c;++l){let h=A[l],u=h.start;for(let p=u,f=u+h.count;p<f;p+=3)for(let g=0;g<3;g++){let d=o.getX(p+g),m=o.getX(p+(g+1)%3);n.fromBufferAttribute(s,d),a.fromBufferAttribute(s,m),qc(n,a,i)===!0&&(e.push(n.x,n.y,n.z),e.push(a.x,a.y,a.z))}}}else{let s=t.attributes.position;for(let o=0,A=s.count/3;o<A;o++)for(let l=0;l<3;l++){let c=3*o+l,h=3*o+(l+1)%3;n.fromBufferAttribute(s,c),a.fromBufferAttribute(s,h),qc(n,a,i)===!0&&(e.push(n.x,n.y,n.z),e.push(a.x,a.y,a.z))}}this.setAttribute("position",new vt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function qc(r,t,e){let i=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,n=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(i)!==!0&&e.has(n)!==!0&&(e.add(i),e.add(n),!0)}var Pg=Object.freeze({__proto__:null,BoxGeometry:Ze,CapsuleGeometry:AA,CircleGeometry:Ni,ConeGeometry:Ir,CylinderGeometry:hn,DodecahedronGeometry:lA,EdgesGeometry:cA,ExtrudeGeometry:pA,IcosahedronGeometry:fn,LatheGeometry:is,OctahedronGeometry:fA,PlaneGeometry:Jn,PolyhedronGeometry:un,RingGeometry:dA,ShapeGeometry:gA,SphereGeometry:mA,TetrahedronGeometry:vA,TorusGeometry:MA,TorusKnotGeometry:xA,TubeGeometry:PA,WireframeGeometry:yA});function Ia(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function ed(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var er=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],a=e[i-1];e:{t:{let s;i:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<a)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=n,n=e[++i],t<n)break t}s=e.length;break i}if(t>=a)break e;{let o=e[1];t<o&&(i=2,a=o);for(let A=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===A)break;if(n=a,a=e[--i-1],t>=a)break t}s=i,i=0}}for(;i<s;){let o=i+s>>>1;t<e[o]?s=o:i=o+1}if(n=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,n)}return this.interpolate_(i,a,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,a=t*n;for(let s=0;s!==n;++s)e[s]=i[a+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wA=class extends er{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jl,endingEnd:Jl}}intervalChanged_(t,e,i){let n=this.parameterPositions,a=t-2,s=t+1,o=n[a],A=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case Kl:a=t,o=2*e-i;break;case Zl:a=n.length-2,o=e+n[a]-n[a+1];break;default:a=t,o=i}if(A===void 0)switch(this.getSettings_().endingEnd){case Kl:s=t,A=2*i-e;break;case Zl:s=1,A=i+n[1]-n[0];break;default:s=t-1,A=e}let l=.5*(i-e),c=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(A-i),this._offsetPrev=a*c,this._offsetNext=s*c}interpolate_(t,e,i,n){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,A=t*o,l=A-o,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-e)/(n-e),g=f*f,d=g*f,m=-u*d+2*u*g-u*f,v=(1+u)*d+(-1.5-2*u)*g+(-.5+u)*f+1,M=(-1-p)*d+(1.5+p)*g+.5*f,x=p*d-p*g;for(let y=0;y!==o;++y)a[y]=m*s[c+y]+v*s[l+y]+M*s[A+y]+x*s[h+y];return a}},bA=class extends er{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,A=t*o,l=A-o,c=(i-e)/(n-e),h=1-c;for(let u=0;u!==o;++u)a[u]=s[l+u]*h+s[A+u]*c;return a}},DA=class extends er{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},je=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ia(e,this.TimeBufferType),this.values=Ia(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ia(t.times,Array),values:Ia(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new DA(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bA(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wA(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case za:e=this.InterpolantFactoryMethodDiscrete;break;case Ua:e=this.InterpolantFactoryMethodLinear;break;case $s:e=this.InterpolantFactoryMethodSmooth}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(t===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return za;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return $s}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,a=0,s=n-1;for(;a!==n&&i[a]<t;)++a;for(;s!==-1&&i[s]>e;)--s;if(++s,a!==0||s!==n){a>=s&&(s=Math.max(s,1),a=s-1);let o=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==a;o++){let A=i[o];if(typeof A=="number"&&isNaN(A)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,A),t=!1;break}if(s!==null&&s>A){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,A,s),t=!1;break}s=A}if(n!==void 0&&ed(n))for(let o=0,A=n.length;o!==A;++o){let l=n[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===$s,a=t.length-1,s=1;for(let o=1;o<a;++o){let A=!1,l=t[o];if(l!==t[o+1]&&(o!==1||l!==t[0]))if(n)A=!0;else{let c=o*i,h=c-i,u=c+i;for(let p=0;p!==i;++p){let f=e[c+p];if(f!==e[h+p]||f!==e[u+p]){A=!0;break}}}if(A){if(o!==s){t[s]=t[o];let c=o*i,h=s*i;for(let u=0;u!==i;++u)e[h+u]=e[c+u]}++s}}if(a>0){t[s]=t[a];for(let o=a*i,A=s*i,l=0;l!==i;++l)e[A+l]=e[o+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};je.prototype.TimeBufferType=Float32Array,je.prototype.ValueBufferType=Float32Array,je.prototype.DefaultInterpolation=Ua;var tn=class extends je{};tn.prototype.ValueTypeName="bool",tn.prototype.ValueBufferType=Array,tn.prototype.DefaultInterpolation=za,tn.prototype.InterpolantFactoryMethodLinear=void 0,tn.prototype.InterpolantFactoryMethodSmooth=void 0;var EA=class extends je{};EA.prototype.ValueTypeName="color";var _A=class extends je{};_A.prototype.ValueTypeName="number";var BA=class extends er{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,A=(i-e)/(n-e),l=t*o;for(let c=l+o;l!==c;l+=4)$t.slerpFlat(a,0,s,l-o,s,l,A);return a}},Er=class extends je{InterpolantFactoryMethodLinear(t){return new BA(this.times,this.values,this.getValueSize(),t)}};Er.prototype.ValueTypeName="quaternion",Er.prototype.DefaultInterpolation=Ua,Er.prototype.InterpolantFactoryMethodSmooth=void 0;var en=class extends je{};en.prototype.ValueTypeName="string",en.prototype.ValueBufferType=Array,en.prototype.DefaultInterpolation=za,en.prototype.InterpolantFactoryMethodLinear=void 0,en.prototype.InterpolantFactoryMethodSmooth=void 0;var SA=class extends je{};SA.prototype.ValueTypeName="vector";var CA=class{constructor(t,e,i){let n=this,a,s=!1,o=0,A=0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){A++,s===!1&&n.onStart!==void 0&&n.onStart(c,o,A),s=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,A),o===A&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=l.length;h<u;h+=2){let p=l[h],f=l[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return f}return null}}},id=new CA,TA=class{constructor(t){this.manager=t!==void 0?t:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,a){i.load(t,n,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};TA.DEFAULT_MATERIAL_NAME="__DEFAULT";var IA=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Bo=new yt,jc=new _,Jc=new _,LA=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(jc),Jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jc),e.updateMatrixWorld(),Bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var yg=new yt,wg=new _,bg=new _;var RA=class extends LA{constructor(){super(new Kn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rs=class extends IA{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new RA}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Dg=new yt,Eg=new yt,_g=new yt;var Bg=new _,Sg=new $t,Cg=new _,Tg=new _;var Ig=new _,Lg=new $t,Rg=new _,zg=new _;var QA="\\[\\]\\.:\\/",nd=new RegExp("["+QA+"]","g"),So="[^"+QA+"]",rd="[^"+QA.replace("\\.","")+"]",ad=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",So)+/(WCOD+)?/.source.replace("WCOD",rd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",So)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",So)+"$"),sd=["material","materials","bones","map"],Wt=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nd,"")}static parseTrackName(t){let e=ad.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let a=i.nodeName.substring(n+1);sd.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===e||o.uuid===e)return o;let A=i(o.children);if(A)return A}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,a=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(t[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[i]}if(l!==void 0){if(t[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[l]}}let s=t[n];if(s===void 0){let l=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t)}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let A=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}A=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(A=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(A=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[A],this.setValue=this.SetterByBindingTypeAndVersioning[A][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=class{constructor(r,t,e){let i=e||Wt.parseTrackName(t);this._targetGroup=r,this._bindings=r.subscribe_(t,i)}getValue(r,t){this.bind();let e=this._targetGroup.nCachedObjects_,i=this._bindings[e];i!==void 0&&i.getValue(r,t)}setValue(r,t){let e=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=e.length;i!==n;++i)e[i].setValue(r,t)}bind(){let r=this._bindings;for(let t=this._targetGroup.nCachedObjects_,e=r.length;t!==e;++t)r[t].bind()}unbind(){let r=this._bindings;for(let t=this._targetGroup.nCachedObjects_,e=r.length;t!==e;++t)r[t].unbind()}},Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray],Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ug=new Float32Array(1);var Ng=new at;var Og=new _,Fg=new _;var Hg=new _;var Qg=new _,Gg=new yt,kg=new yt;var Vg=new _,Xg=new pt,Wg=new pt;var Yg=new _,qg=new _,jg=new _;var Jg=new _,Kg=new _r;var Zg=new Je;var $g=new _;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);var od={aria:0,erba:1,terra:2,pietra:3,sabbia:4,legno:5,foglie:6,neve:7},em=Object.fromEntries(Object.entries(od).map(([r,t])=>[t,r])),GA=16,im=GA*GA*GA;var ls=256/2;function kA(){let r=new Uint8Array(ls*ls*4),t=new $n(r,ls,ls,xe,qe);return t.minFilter=t.magFilter=le,t.wrapS=t.wrapT=Ye,t.needsUpdate=!0,t}var Pi={stagioni:kA(),meteo:kA(),altro:kA(),uniform:null};Pi.uniform={tStagioni:{value:Pi.stagioni},tMeteo:{value:Pi.meteo},tAltro:{value:Pi.altro},uCampoLato:{value:256}};var yh=`
uniform sampler2D tStagioni, tMeteo, tAltro;
uniform float uCampoLato;
vec2 uvCampo(vec2 xz) { return xz / uCampoLato; }
`;var Ad=`
#include <common>
#include <color_pars_vertex>
#include <shadowmap_pars_vertex>
uniform vec3 sole;
attribute float strato;
varying float vVerso;
varying float vSu;
varying vec3 vMondo;
#ifdef STAGIONE
uniform vec3 stagPrima[STAGIONE], stagP[STAGIONE], stagE[STAGIONE], stagA[STAGIONE], stagI[STAGIONE];
uniform sampler2D tStagioni;
uniform float uCampoLato;
#endif
void main() {
  #include <color_vertex>
  #ifdef STAGIONE
  // un colore della primavera diventa quello della stagione del posto (le cose si costruiscono sempre in primavera): il campo dice
  // quanto è primavera, estate, autunno e inverno lì, e i colori si mescolano
  vec4 wpS = modelMatrix * vec4(position, 1.0);
  vec4 qs = texture2D(tStagioni, wpS.xz / uCampoLato);
  qs /= max(qs.x + qs.y + qs.z + qs.w, 0.001);
  for (int k = 0; k < STAGIONE; k++) { if (all(lessThan(abs(vColor - stagPrima[k]), vec3(0.003)))) { vColor = qs.x * stagP[k] + qs.y * stagE[k] + qs.z * stagA[k] + qs.w * stagI[k]; break; } }
  #endif
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
}`,VA=8,wh="3.0",ld=`
#define LAMPADE_MAX ${VA}
uniform vec4 lampadePos[LAMPADE_MAX];   // x, y, z e il raggio (0: spenta)
uniform vec3 lampadeCol[LAMPADE_MAX];
uniform float lampadeForza;
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
  // le lampade: sfere a tre gradini. Dove si incontrano i colori si mescolano (pesati da quanto è forte ognuna) e la luce è quella
  // della più forte: non si sommano
  vec3 somma = vec3(0.0);
  float tot = 0.0, forte = 0.0;
  for (int i = 0; i < LAMPADE_MAX; i++) {
    vec4 l = lampadePos[i];
    if (l.w <= 0.0) continue;
    float caduta = 1.0 - length(vMondo - l.xyz) / l.w;
    if (caduta > 0.0) { float w = ceil(caduta * ${wh}) / ${wh}; somma += lampadeCol[i] * w; tot += w; forte = max(forte, w); }
  }
  vec3 lampade = tot > 0.0 ? somma / tot * forte * lampadeForza : vec3(0.0);
  // la luce di una lampada si vede del suo colore: moltiplicata per il colore
  // della cosa, un azzurro sull'erba arancio spariva. La cosa illuminata ne prende la tinta: conta la sua chiarezza, e del suo colore
  // resta poco
  vec3 riceve = mix(vec3(dot(base, vec3(0.3, 0.59, 0.11))), base, 0.4) * 1.3;
  // acceso fra 0 e 1: una lampada che si accende o si spegne passa dal suo colore alla sua luce
  vec3 c = acceso > 0.999 ? base * emissivo : mix(base * tinta * mix(ombra, vec3(1.0), luce) + riceve * lampade, base * emissivo, acceso);
  gl_FragColor = vec4(c, opacita);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,bh=new pt("#c6bcc6"),Dh={value:bh.clone()},Eh={value:new pt(1,1,1)},Nr={value:1},Or={value:Array.from({length:VA},()=>new Gt(0,0,0,0))},hs={value:Array.from({length:VA},()=>new pt(0,0,0))},XA={value:0},Ur={erba:["#5ac54f","#33984b","#1e6f50","#134c4c"],chioma:["#0c2e44","#134c4c","#1e6f50","#33984b","#5ac54f"]},cs=r=>({value:r.map(t=>new pt(t))}),cd={erba:cs(Ur.erba),chioma:cs(Ur.chioma)},hd=Object.fromEntries(["P","E","A","I"].map(r=>[r,{erba:cs(Ur.erba),chioma:cs(Ur.chioma)}]));var rr={value:new _(-.55,1,-.35).normalize()};function WA({acceso:r=0,opacita:t=1,stagione:e=null}={}){let i=new ye({uniforms:OA.merge([ct.lights,{opacita:{value:t},acceso:{value:r}}]),vertexShader:Ad,fragmentShader:ld,vertexColors:!0,lights:!0,transparent:t<1,depthWrite:t>=1,shadowSide:pe,extensions:{derivatives:!0},defines:e?{STAGIONE:Ur[e].length}:{}});if(e){i.uniforms.stagPrima=cd[e];for(let n of["P","E","A","I"])i.uniforms["stag"+n]=hd[n][e];i.uniforms.tStagioni=Pi.uniform.tStagioni,i.uniforms.uCampoLato=Pi.uniform.uCampoLato}return i.defaultAttributeValues={...i.defaultAttributeValues,strato:[0]},i.uniforms.tinta=Eh,i.uniforms.ombra=Dh,i.uniforms.lampadePos=Or,i.uniforms.lampadeCol=hs,i.uniforms.lampadeForza=XA,i.uniforms.emissivo=Nr,i.uniforms.sole=rr,i}var ud=null,pd=null,oi=()=>ud||=WA(),om=new Oe({colorWrite:!1,depthWrite:!1,shadowSide:pe}),YA=()=>pd||=WA({acceso:1});var _h=(r,t=!1)=>WA({opacita:r,acceso:t?1:0});function Bh(r,t,e){Eh.value.setRGB(r,t,e)}function Sh(r,t,e){Dh.value.setRGB(r,t,e)}function Ch(r=[],t="#000000",e=0){fd=e,Or.value.forEach((i,n)=>{let a=r[n];a?i.set(a[0],a[1],a[2],e*(a[3]??1)):i.set(0,0,0,0)}),hs.value.forEach((i,n)=>i.set(r[n]&&r[n][4]||t))}var fd=0;var Th=new Oe({visible:!1});function Lh(){try{let r=document.createElement("canvas");return!!(globalThis.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}function Rh(r){try{let t=r.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),i=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return/swiftshader|llvmpipe|software|basic render/i.test(String(i))}catch{return!1}}function dd(){try{let r=document.createElement("canvas"),t=r.getContext("webgl2");if(!t)return{resa:!1,lenta:!1};let e={resa:!!(t.getExtension("EXT_color_buffer_float")||t.getExtension("EXT_color_buffer_half_float")),lenta:Rh({getContext:()=>t})},i=t.getExtension("WEBGL_lose_context");return i&&i.loseContext(),e}catch{return{resa:!1,lenta:!1}}}function zh(r){let t=new URLSearchParams(location.search).get("qualita"),e=dd(),i=e.resa&&t!=="bassa"&&(!e.lenta||t==="alta"),n=new Br({canvas:r,antialias:!i,alpha:!0,powerPreference:"high-performance"});n.outputColorSpace=Zt,n.setClearColor(0,0);let a=Rh(n),s=t==="bassa"||t==="alta"?t:a?"bassa":"alta";n.setPixelRatio(a?.75:Math.min(devicePixelRatio,innerWidth<900?1.5:2)),n.shadowMap.enabled=s==="alta",n.shadowMap.type=zA,n.shadowMap.autoUpdate=!1;let o=new An,A=new rs(16777215,1);A.castShadow=s==="alta";let l=Math.min(innerWidth<900?2048:4096,n.capabilities.maxTextureSize);A.shadow.mapSize.set(l,l),A.shadow.bias=0,A.shadow.normalBias=0,o.add(A,A.target);let c=Md();return o.add(c),o.userData.stelle=c,{renderer:n,sc:o,sole:A,qualita:s,lenta:a,stelle:c}}function Uh(r,t,e,i,n=0,a=null){let s=(a||rr.value).clone();r.target.position.set(t,n,e),r.position.set(t,n,e).addScaledVector(s,i*3+10);let o=r.shadow.camera,A=i+2;Object.assign(o,{left:-A,right:A,top:A,bottom:-A,near:.5,far:i*5+20}),o.updateProjectionMatrix(),r.shadow.bias=.02/(o.far-o.near),r.target.updateMatrixWorld(),r.updateMatrixWorld()}var ps=rr.value.clone(),um=ps.clone(),gd=Math.atan2(ps.z,ps.x),pm=Math.asin(ps.y),md=(r,t)=>new _(Math.cos(r)*Math.cos(t),Math.sin(t),Math.sin(r)*Math.cos(t)),fm=md(gd+2.2,.85);var us=[[0,[.2,.23,.38],[.055,.086,.188]],[.2,[.23,.26,.41],[.094,.125,.29]],[.26,[.92,.78,.66],[1,.718,.529]],[.34,[1.04,1,.94],[.561,.827,1]],[.66,[1.04,1,.94],[.561,.827,1]],[.74,[.95,.72,.58],[1,.616,.431]],[.82,[.25,.28,.43],[.102,.129,.282]],[1,[.2,.23,.38],[.055,.086,.188]]],Ih=r=>r<=0?0:r>=1?1:r*r*(3-2*r);function vd(r){let t=(r/24%1+1)%1,e=0;for(;e<us.length-2&&us[e+1][0]<=t;)e++;let[i,n,a]=us[e],[s,o,A]=us[e+1],l=Ih((t-i)/(s-i)),c=(v,M)=>v.map((x,y)=>x+(M[y]-x)*l),h=c(n,o),u=c(a,A),p=Math.sin((t-.25)*Math.PI*2),f=Math.max(p,.24),g=Ih(f/.22)*(.48+.52*Math.pow(f,.85)),d=Math.min(.85,(p<=0?.3:.72)*g),m=Math.max(...u)||1;return{ambiente:h,cielo:u,ombra:u.map(v=>{let M=v/m;return(M+(1-M)*.55)*(1-d)})}}function Nh(r){let t=vd(r);Bh(...t.ambiente),Sh(...t.ombra)}function Md(){let r=42,t=()=>(r=r*16807%2147483647,r/2147483647),e=1500,i=new Float32Array(e*3),n=new Float32Array(e*3);for(let s=0;s<e;s++){let o=t()*2-1,A=t()*Math.PI*2,l=90,c=Math.sqrt(1-o*o);i.set([Math.cos(A)*c*l+4,o*l*.7+10,Math.sin(A)*c*l+4],s*3);let h=.25+Math.pow(t(),2.2)*.75;n.set([h*.92,h*.88,h],s*3)}let a=new Tt;return a.setAttribute("position",new Rt(i,3)),a.setAttribute("color",new Rt(n,3)),new tr(a,new Sr({size:2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1}))}var xd=[{gruppo:"Tempo",voci:[{id:"oraVera",tipo:"si",def:!0,nome:"Ora vera"},{id:"ora",tipo:"num",def:12,min:0,max:24,passo:.25,nome:"Ora"},{id:"giorno",tipo:"scelta",def:0,nome:"Un giorno dura",opzioni:[[0,"Fermo"],[300,"5 min"],[60,"1 min"],[20,"20 s"]]},{id:"stagione",tipo:"scelta",def:"",nome:"Stagione",opzioni:[["","Vera"],["primavera","Prim."],["estate","Est."],["autunno","Aut."],["inverno","Inv."]]}]},{gruppo:"Acqua",voci:[{id:"acquaVicino",tipo:"colore",def:"#8fd4e6",nome:"Accanto all'isola"},{id:"acquaMezzo",tipo:"colore",def:"#6d9fe6",nome:"In mezzo"},{id:"acquaBordo",tipo:"colore",def:"#7f78d8",nome:"Verso il bordo"},{id:"pienaVicino",tipo:"num",def:.94,min:0,max:1,passo:.01,nome:"Piena, vicino"},{id:"pienaBordo",tipo:"num",def:.42,min:0,max:1,passo:.01,nome:"Piena, al bordo"},{id:"pozza",tipo:"num",def:1.24,min:1,max:3,passo:.01,nome:"Larghezza pozza"},{id:"riflessoMin",tipo:"num",def:.2,min:0,max:1,passo:.01,nome:"Riflesso delle cose"},{id:"riflessoMax",tipo:"num",def:.6,min:0,max:1,passo:.01,nome:"Riflesso, al massimo"},{id:"cieloMix",tipo:"num",def:0,min:0,max:.6,passo:.01,nome:"Cielo nell'acqua"},{id:"rifrazione",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Rifrazione"},{id:"ondeFondo",tipo:"num",def:1,min:0,max:2,passo:.05,nome:"Onde di fondo"},{id:"ondeGesto",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Onde del mouse"},{id:"attrito",tipo:"num",def:.9955,min:.98,max:.9995,passo:5e-4,nome:"Quanto durano"},{id:"vuotoPiega",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Il vuoto si piega"},{id:"luccichio",tipo:"num",def:0,min:0,max:3,passo:.05,nome:"Luccichio"},{id:"segni",tipo:"num",def:1,min:0,max:2,passo:.05,nome:"Segni sul pelo"},{id:"schiuma",tipo:"num",def:.7,min:0,max:1,passo:.05,nome:"Schiuma a riva"},{id:"filo",tipo:"num",def:.5,min:0,max:1,passo:.05,nome:"Filo del bordo"}]},{gruppo:"Pesci",voci:[{id:"pesci",tipo:"num",def:7,min:0,max:16,passo:1,nome:"Quanti"},{id:"pesciVelocita",tipo:"num",def:1,min:0,max:4,passo:.05,nome:"Velocità"},{id:"pesciPaura",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Paura"},{id:"pesciScala",tipo:"num",def:1,min:.4,max:3,passo:.05,nome:"Grandezza"},{id:"pesceOro",tipo:"si",def:!0,nome:"Quello d'oro"}]},{gruppo:"Ambiente",voci:[{id:"meteo",tipo:"scelta",def:"sereno",nome:"Tempo",opzioni:[["sereno","Sereno"],["pioggia","Pioggia"],["neve","Neve"],["grandine","Grandine"],["tempesta","Tempesta"],["tromba","Tromba d'aria"]]},{id:"vento",tipo:"num",def:.35,min:0,max:1,passo:.05,nome:"Vento"},{id:"particelle",tipo:"si",def:!0,nome:"Foglie e petali"},{id:"lucciole",tipo:"si",def:!0,nome:"Lucciole di notte"},{id:"quante",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Quante"}]},{gruppo:"Luce",voci:[{id:"bloom",tipo:"num",def:7,min:0,max:16,passo:.1,nome:"Bloom"},{id:"soglia",tipo:"num",def:1.13,min:.4,max:2,passo:.01,nome:"Bloom, soglia"},{id:"dispersione",tipo:"num",def:.268,min:0,max:1,passo:.01,nome:"Bloom, dispersione"},{id:"sole",tipo:"num",def:1.4,min:.5,max:3,passo:.01,nome:"Sole"},{id:"lampadeForza",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Lampade"},{id:"aberrazione",tipo:"num",def:.029,min:0,max:.3,passo:.001,nome:"Aberrazione"},{id:"fxaa",tipo:"si",def:!0,nome:"Antialias"},{id:"ombre",tipo:"si",def:!0,nome:"Ombre"}]}],Pd=xd.flatMap(r=>r.voci),yd=Object.fromEntries(Pd.map(r=>[r.id,r.def]));var Yt={...yd};var dn={soglia:Math.pow(1.13,2.2),intensita:7,dispersione:.05+.268*.9,sole:1.4/1.04,livelli:6},qA=16,Fr=6,wd="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",jA=8,bd=`
precision highp float;
${yh}
varying vec2 vUv;
uniform sampler2D tBase, tProf, tRifl, tOnde;
uniform mat4 uInvVP, uVP, uRiflM;
uniform vec3 uPozza;                      // x e z del centro della pozza, e il suo raggio
uniform vec4 uBolle[BOLLE];               // il mare di chi nuota lontano: x, z, raggio, chi (in fila: la sua scia, poi lui; raggio 0: finita)
uniform vec3 uCam, uAmbiente, uCielo, uPelo, uProfondo, uFondale, uLampoDir, uSoleCol;
uniform vec4 uLampade[LAMPADE_MAX];
uniform vec3 uLampCol[LAMPADE_MAX];
uniform float uLampForza;
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

// La forma del mare (06/11 notte): come una metaball, se più giocatori sono vicini si unisce. Prima la pozza si
// allargava tutta, un cerchio solo che conteneva l'isola e chi nuotava: cresceva in ogni direzione. Adesso è la pozza dell'isola più
// una bolla intorno a ogni giocatore che nuota lontano, unite col minimo liscio delle distanze: dove due si avvicinano si allunga un
// ponte d'acqua, lontano ognuna resta la sua. Chi nuota lascia una scia che si ritira piano: è un tubo che si assottiglia (i punti della
// scia uniti a due a due), unito senza gonfiarsi (il minimo vero: prima ogni punto nuovo della scia, sopra la bolla, la gonfiava di colpo
// e il mare pulsava); poi tutto il suo mare si unisce morbido al resto. x: la distanza col segno (negativa dentro); y: il raggio di chi
// conta lì, mescolato come la forma.
const float MORBIDO = 5.0;
// il tubo fra due cerchi (a, ra) e (b, rb): il loro inviluppo, esatto (iq, «uneven capsule»). Prima ogni punto della scia contava col suo
// cerchio intero, che sporgeva dal tubo: il bordo dietro di te faceva i bozzi
float tubo(vec2 p, vec2 a, vec2 b, float ra, float rb) {
  vec2 pb = b - a;
  float h = dot(pb, pb), k0 = ra - rb;
  if (h <= k0 * k0 + 1e-4) return min(length(p - a) - ra, length(p - b) - rb);   // uno dentro l'altro: il più grande
  p -= a;
  vec2 q = vec2(dot(p, vec2(pb.y, -pb.x)), dot(p, pb)) / h;
  q.x = abs(q.x);
  vec2 c = vec2(sqrt(h - k0 * k0), k0);
  float kk = c.x * q.y - c.y * q.x, m = dot(c, q), n = dot(q, q);
  if (kk < 0.0) return sqrt(h * n) - ra;
  if (kk > c.x) return sqrt(h * (n + 1.0 - 2.0 * q.y)) - rb;
  return m - ra;
}
void unisci(inout float d, inout float r, float e, float re) {
  float h = clamp(0.5 + 0.5 * (e - d) / MORBIDO, 0.0, 1.0);
  d = mix(e, d, h) - MORBIDO * h * (1.0 - h);
  r = mix(re, r, h);
}
vec2 formaMare(vec2 p) {
  float d = length(p - uPozza.xy) - uPozza.z, r = uPozza.z;
  float dc = 1e5, rc = 1.0;
  vec4 pr = vec4(0.0, 0.0, 0.0, -1.0);
  for (int i = 0; i < BOLLE; i++) {
    vec4 b = uBolle[i];
    if (b.z <= 0.0) break;
    // finisce il mare di qualcuno: si unisce al resto
    if (pr.w >= 0.0 && b.w != pr.w) { unisci(d, r, dc, rc); dc = 1e5; }
    // il tubo dal punto prima (che si assottiglia verso la scia più vecchia), o il cerchio da solo per il primo; il raggio di lì, per la
    // sfumatura: quello del punto più vicino lungo il tubo
    float re = b.z, e = length(p - b.xy) - re;
    if (b.w == pr.w) {
      e = tubo(p, pr.xy, b.xy, pr.z, b.z);
      vec2 ab = b.xy - pr.xy;
      re = mix(pr.z, b.z, clamp(dot(p - pr.xy, ab) / max(dot(ab, ab), 1e-4), 0.0, 1.0));
    }
    if (e < dc) { dc = e; rc = re; }
    pr = b;
  }
  if (dc < 1e4) unisci(d, r, dc, rc);
  return vec2(d, r);
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
  vec2 rel = w.xz - uPozza.xy;
  float lung = length(rel);
  // la forma del mare (formaMare): la pozza e le bolle di chi nuota, unite morbide. dove0: 0 al centro della pozza, 1 sul bordo
  vec2 fm = formaMare(w.xz);
  float sd = fm.x, rLoc = fm.y;
  float dove0 = 1.0 + sd / rLoc;
  // lontano dal mare (oltre quanto il bordo respira e le onde lo spostano) e fuori dalla griglia: il vuoto fermo, che è quasi
  // tutto lo schermo e non deve costare niente (su un Chromebook l'acqua era metà del fotogramma)
  bool lontano = sd > max(1.3, rLoc * 0.12);
  if (lontano && min(orlo.x, orlo.y) <= 0.0) return;
  float inGriglia = smoothstep(0.0, 0.08, min(orlo.x, orlo.y));
  vec2 gO = vec2(0.0);
  if (inGriglia > 0.0) gO = inGriglia * vec2(
    textureLod(tOnde, uvO + vec2(uPxOnde.x, 0.0), 0.0).r - textureLod(tOnde, uvO - vec2(uPxOnde.x, 0.0), 0.0).r,
    textureLod(tOnde, uvO + vec2(0.0, uPxOnde.y), 0.0).r - textureLod(tOnde, uvO - vec2(0.0, uPxOnde.y), 0.0).r);
  if (lontano && dot(gO, gO) < 1e-7) return;

  // il bordo: non è un cerchio, respira, e le onde lo spostano. La sua forma sta nel mondo, non intorno a chi nuota («come se
  // l'acqua fosse sempre lì, e io che mi muovo la esploro»): muovendoti scopri le sue anse, non te le porti dietro. Il fuori è dove la
  // forma cresce
  vec2 fuori = vec2(formaMare(w.xz + vec2(0.05, 0.0)).x - sd, formaMare(w.xz + vec2(0.0, 0.05)).x - sd);
  fuori = dot(fuori, fuori) > 1e-12 ? normalize(fuori) : rel / max(lung, 0.001);
  vec2 pm = w.xz;
  float anse = 0.3 * sin(pm.x * 0.29 + sin(pm.y * 0.21) * 1.7 + uTempo * 0.17) + 0.2 * sin(pm.y * 0.37 - sin(pm.x * 0.17) * 1.3 - uTempo * 0.23)
    + 0.14 * sin((pm.x + pm.y) * 0.61 + uTempo * 0.31) + 0.1 * sin(pm.x * 1.21 - pm.y * 0.93 - uTempo * 0.37);
  float dove = dove0 + anse / rLoc;
  dove += dot(gO, fuori) * 1.4;
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

  // com'è il mare qui (campi.js): 0 calmo, 0,5 normale, 1 mosso
  float mareQ = texture2D(tAltro, uvCampo(w.xz)).g;
  float fondoQ = uFondo * (mareQ < 0.5 ? mix(0.12, 1.0, mareQ * 2.0) : mix(1.0, 2.3, mareQ * 2.0 - 1.0));
  vec2 g = pendenza(w.xz, uTempo) * fondoQ + gO * 87.0;
  float lg = length(g);
  if (lg > 6.0) g *= 6.0 / lg;
  vec3 n = normalize(vec3(-g.x * 0.16, 1.0, -g.y * 0.16));
  vec3 v = -raggio;

  // la rifrazione: il vuoto dietro si piega verso il centro vicino al bordo, come una conca, e trema con le onde. Dritta dove c'è
  // poca acqua; un punto emerso non cola dentro (si torna all'immagine dritta)
  float curva = pow(smoothstep(0.7, 1.0, dove), 2.0);
  vec4 qc = uVP * vec4(w - vec3(fuori.x, 0.0, fuori.y) * curva * 1.6, 1.0);
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
  // (al largo, nella bolla di chi nuota, la sfumatura è quella del fuori della pozza: dal blu al viola trasparente del bordo; l'azzurro
  // resta vicino all'isola. Con la sfumatura dal centro di ogni bolla era troppo chiara)
  float prof = max(smoothstep(0.3, 1.0, dove), 0.72 * smoothstep(0.3, 1.0, lung / uPozza.z));
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
  float onde = fract((dove - 1.0) * 6.0 * rLoc / uPozza.z - uTempo * 0.09);
  c += uPelo * uAmbiente * 0.07 * uFilo * 2.0 * smoothstep(0.05, 0.0, abs(onde - 0.5)) * smoothstep(0.4, 0.92, dove);
  c = mix(c, chiara, uFilo * smoothstep(0.007 + aaD, 0.002, abs(dove - 0.985)));

  // le lampade anche sull'acqua: la stessa sfera a gradini
  // (come sulle cose: i colori si mescolano, la luce è quella della più forte)
  vec3 sommaL = vec3(0.0);
  float totL = 0.0, forteL = 0.0;
  for (int i = 0; i < LAMPADE_MAX; i++) {
    vec4 l = uLampade[i];
    if (l.w <= 0.0) continue;
    float caduta = 1.0 - length(w - l.xyz) / l.w;
    if (caduta > 0.0) { float wl = ceil(caduta * 3.0) / 3.0; sommaL += uLampCol[i] * wl; totL += wl; forteL = max(forteL, wl); }
  }
  vec3 luci = totL > 0.0 ? sommaL / totL * forteL * uLampForza : vec3(0.0);
  // del colore della lampada, come sulle cose
  c += mix(vec3(dot(uPelo, vec3(0.3, 0.59, 0.11))), uPelo, 0.35) * luci * 0.85;

  // l'alfa dice quanto una cosa può fare bloom: l'acqua poco, un lampo di sole sì
  float dentro = smoothstep(1.0 + aaD, 1.0 - aaD, dove);
  gl_FragColor = vec4(mix(base.rgb, c, dentro), 1.0 - 0.7 * dentro * (1.0 - min(lampo, 1.0)));
}
`,Dd=`
precision highp float;
varying vec2 vUv;
uniform sampler2D t, tIsola;
uniform vec2 uPx;
uniform vec2 uSposta;                 // la griglia si è spostata (con chi nuota): per un passo si legge da dove stavano le onde
uniform vec4 uGocce[GOCCE_MAX];       // u, v, raggio (in uv), forza
uniform float uAttrito, uRaggio;
void main() {
  vec2 uv = vUv + uSposta;
  vec2 s = texture2D(t, uv).rg;
  float media = (texture2D(t, uv - vec2(uPx.x, 0.0)).r + texture2D(t, uv + vec2(uPx.x, 0.0)).r + texture2D(t, uv - vec2(0.0, uPx.y)).r + texture2D(t, uv + vec2(0.0, uPx.y)).r) * 0.25;
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
}`,Ed=`
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
}`,_d=`
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
}`,Bd=`
precision highp float;
varying vec2 vUv;
uniform sampler2D t, tAlto;
uniform vec2 uPx;
uniform float uDispersione;
vec3 l(float x, float y) { return texture2D(t, vUv + vec2(x, y) * uPx).rgb; }
void main() {
  vec3 c = l(0.0, 0.0) * 4.0 + (l(-1.0, 0.0) + l(1.0, 0.0) + l(0.0, -1.0) + l(0.0, 1.0)) * 2.0 + l(-1.0, -1.0) + l(1.0, -1.0) + l(-1.0, 1.0) + l(1.0, 1.0);
  gl_FragColor = vec4(mix(texture2D(tAlto, vUv).rgb, c / 16.0, uDispersione), 1.0);
}`,Sd=`
precision highp float;
varying vec2 vUv;
uniform sampler2D t, tBloom;
uniform float uForza, uAberrazione, uTrasparente, uGrana;
// un filo di rumore: i grigi scurissimi del vuoto, a 8 bit, farebbero le righe
float grana() { return (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0; }
vec3 srgb(vec3 c) { c = clamp(c, 0.0, 1.0); return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
void main() {
  vec2 d = vUv * 2.0 - 1.0;
  vec2 passo = -d * dot(d, d) * uAberrazione * 0.05 / 3.0;
  vec4 centro = texture2D(t, vUv);
  vec3 c = uAberrazione > 0.0 ? vec3(centro.r, texture2D(t, vUv + passo).g, texture2D(t, vUv + passo * 2.0).b) : centro.rgb;
  vec3 b = texture2D(tBloom, vUv).rgb * uForza;
  vec3 s = srgb(c + b) + grana() * uGrana;
  // sulla stanza dietro c'è la pagina: il bloom la illumina anche fuori dalle cose
  float a = uTrasparente > 0.5 ? clamp(centro.a + max(b.r, max(b.g, b.b)), 0.0, 1.0) : 1.0;
  gl_FragColor = vec4(s, a);
}`,Cd=`
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
}`,Td=`
precision highp float;
uniform sampler2D t;
uniform vec2 uIn, uScala;
vec3 px(vec2 p) { return texture2D(t, (p + 0.5) / uIn).rgb; }
float lu(vec3 c) { return c.b * 0.5 + (c.r * 0.5 + c.g); }
void bordo(inout vec2 dir, inout float len, float w, float lA, float lB, float lC, float lD, float lE) {
  float dc = lD - lC, cb = lC - lB;
  float lenX = 1.0 / max(max(abs(dc), abs(cb)), 1e-5);
  float dirX = lD - lB;
  dir.x += dirX * w;
  lenX = clamp(abs(dirX) * lenX, 0.0, 1.0);
  len += lenX * lenX * w;
  float ec = lE - lC, ca = lC - lA;
  float lenY = 1.0 / max(max(abs(ec), abs(ca)), 1e-5);
  float dirY = lE - lA;
  dir.y += dirY * w;
  lenY = clamp(abs(dirY) * lenY, 0.0, 1.0);
  len += lenY * lenY * w;
}
void tap(inout vec3 aC, inout float aW, vec2 off, vec2 dir, vec2 len2, float lob, float clp, vec3 c) {
  vec2 v = vec2(off.x * dir.x + off.y * dir.y, off.x * -dir.y + off.y * dir.x) * len2;
  float d2 = min(dot(v, v), clp);
  float wB = 0.4 * d2 - 1.0, wA = lob * d2 - 1.0;
  wB *= wB; wA *= wA;
  wB = 1.5625 * wB - 0.5625;
  float w = wB * wA;
  aC += c * w; aW += w;
}
void main() {
  vec2 pp = gl_FragCoord.xy * uScala - 0.5;
  vec2 fp = floor(pp);
  pp -= fp;
  vec3 b = px(fp + vec2(0.0, -1.0)), c = px(fp + vec2(1.0, -1.0));
  vec3 e = px(fp + vec2(-1.0, 0.0)), f = px(fp), g = px(fp + vec2(1.0, 0.0)), h = px(fp + vec2(2.0, 0.0));
  vec3 i = px(fp + vec2(-1.0, 1.0)), j = px(fp + vec2(0.0, 1.0)), k = px(fp + vec2(1.0, 1.0)), l = px(fp + vec2(2.0, 1.0));
  vec3 n = px(fp + vec2(0.0, 2.0)), o = px(fp + vec2(1.0, 2.0));
  float bL = lu(b), cL = lu(c), eL = lu(e), fL = lu(f), gL = lu(g), hL = lu(h), iL = lu(i), jL = lu(j), kL = lu(k), lL = lu(l), nL = lu(n), oL = lu(o);
  vec2 dir = vec2(0.0);
  float len = 0.0;
  bordo(dir, len, (1.0 - pp.x) * (1.0 - pp.y), bL, eL, fL, gL, jL);
  bordo(dir, len, pp.x * (1.0 - pp.y), cL, fL, gL, hL, kL);
  bordo(dir, len, (1.0 - pp.x) * pp.y, fL, iL, jL, kL, nL);
  bordo(dir, len, pp.x * pp.y, gL, jL, kL, lL, oL);
  float dirR = dot(dir, dir);
  bool zero = dirR < 1.0 / 32768.0;
  dirR = zero ? 1.0 : inversesqrt(dirR);
  if (zero) dir.x = 1.0;
  dir *= dirR;
  len = len * 0.5;
  len *= len;
  float stretch = dot(dir, dir) / max(abs(dir.x), abs(dir.y));
  vec2 len2 = vec2(1.0 + (stretch - 1.0) * len, 1.0 - 0.5 * len);
  float lob = 0.5 + ((1.0 / 4.0 - 0.04) - 0.5) * len;
  float clp = 1.0 / lob;
  vec3 mn = min(min(f, g), min(j, k)), mx = max(max(f, g), max(j, k));
  vec3 aC = vec3(0.0);
  float aW = 0.0;
  tap(aC, aW, vec2(0.0, -1.0) - pp, dir, len2, lob, clp, b);
  tap(aC, aW, vec2(1.0, -1.0) - pp, dir, len2, lob, clp, c);
  tap(aC, aW, vec2(-1.0, 1.0) - pp, dir, len2, lob, clp, i);
  tap(aC, aW, vec2(0.0, 1.0) - pp, dir, len2, lob, clp, j);
  tap(aC, aW, vec2(0.0, 0.0) - pp, dir, len2, lob, clp, f);
  tap(aC, aW, vec2(-1.0, 0.0) - pp, dir, len2, lob, clp, e);
  tap(aC, aW, vec2(1.0, 1.0) - pp, dir, len2, lob, clp, k);
  tap(aC, aW, vec2(2.0, 1.0) - pp, dir, len2, lob, clp, l);
  tap(aC, aW, vec2(2.0, 0.0) - pp, dir, len2, lob, clp, h);
  tap(aC, aW, vec2(1.0, 0.0) - pp, dir, len2, lob, clp, g);
  tap(aC, aW, vec2(1.0, 2.0) - pp, dir, len2, lob, clp, o);
  tap(aC, aW, vec2(0.0, 2.0) - pp, dir, len2, lob, clp, n);
  // l'alfa (l'arena sta sopra la pagina): bilineare
  float a = texture2D(t, (gl_FragCoord.xy * uScala) / uIn).a;
  gl_FragColor = vec4(min(mx, max(mn, aC / max(aW, 1e-5))), a);
}`,Id=`
precision highp float;
uniform sampler2D t;
uniform vec2 uPx;
uniform float uNitido;
float grana() { return (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0; }
void main() {
  vec2 uv = gl_FragCoord.xy * uPx;
  vec4 e4 = texture2D(t, uv);
  vec3 b = texture2D(t, uv + vec2(0.0, uPx.y)).rgb, d = texture2D(t, uv - vec2(uPx.x, 0.0)).rgb;
  vec3 f = texture2D(t, uv + vec2(uPx.x, 0.0)).rgb, h = texture2D(t, uv - vec2(0.0, uPx.y)).rgb, e = e4.rgb;
  vec3 mn = min(min(b, d), min(f, h)), mx = max(max(b, d), max(f, h));
  vec3 colpoMin = min(mn, e) / max(4.0 * mx, vec3(1e-5));
  vec3 colpoMax = (1.0 - max(mx, e)) / min(4.0 * min(mn, e) - 4.0, vec3(-1e-5));
  vec3 lobi = max(-colpoMin, colpoMax);
  float lobo = max(-(0.25 - 1.0 / 16.0), min(max(lobi.r, max(lobi.g, lobi.b)), 0.0)) * uNitido;
  vec3 c = (lobo * (b + d + h + f) + e) / (4.0 * lobo + 1.0);
  gl_FragColor = vec4(c + grana(), e4.a);
}`,Hr=class{static puo(t){return t.capabilities.isWebGL2&&(t.extensions.has("EXT_color_buffer_float")||t.extensions.has("EXT_color_buffer_half_float"))}constructor(t,{acqua:e=!1,trasparente:i=!1,sole:n=dn.sole,emissivo:a=2.4}={}){this.emissivo=a,this.scalaInterna=this.scalaBase=t.getPixelRatio()<1.5?1.5:1,this.sopra=new An,this.r=t,this.conAcqua=e,this.trasparente=i,this.ha={riflesso:!1},this.fondo=new pt,this.camSpecchio=new ue,this.scenaQuad=new An,this.camQuad=new Kn(-1,1,1,-1,0,1);let s=new Tt;s.setAttribute("position",new vt([-1,-1,0,3,-1,0,-1,3,0],3)),s.setAttribute("uv",new vt([0,0,2,0,0,2],2)),this.quad=new kt(s,null),this.quad.frustumCulled=!1,this.scenaQuad.add(this.quad);let o=(A,l,c={})=>new ye({vertexShader:wd,fragmentShader:A,uniforms:l,defines:c,depthTest:!1,depthWrite:!1,blending:Zc,extensions:{derivatives:!0}});this.mAcqua=o(bd,{tBase:{value:null},tProf:{value:null},tRifl:{value:null},tOnde:{value:null},uInvVP:{value:new yt},uVP:{value:new yt},uRiflM:{value:new yt},uCentro:{value:new at},uPxOnde:{value:new at},uLato:{value:96},uPozza:{value:new _(0,0,12)},uBolle:{value:Array.from({length:jA},()=>new Gt)},uCam:{value:new _},uAmbiente:{value:new pt(1,1,1)},uCielo:{value:new pt(0,0,0)},uPelo:{value:new pt},uProfondo:{value:new pt},uFondale:{value:new pt},uLampoDir:{value:new _(0,1,0)},uSoleCol:{value:new pt(0,0,0)},uPesci:{value:Array.from({length:qA*2},()=>new Gt)},uNPesci:{value:0},uRiflesso:{value:new at},uPiena:{value:new at},uCieloMix:{value:0},uRifra:{value:1},uFondo:{value:1},uPiega:{value:1},uLuccichio:{value:1},uSegni:{value:1},uSchiuma:{value:1},uFilo:{value:1},uLampade:Or,uLampCol:hs,uLampForza:XA,...Pi.uniform,uLivello:{value:0},uTempo:{value:0}},{LAMPADE_MAX:Or.value.length,PESCI_DATI:qA*2,BOLLE:jA}),this.mOnde=o(Dd,{t:{value:null},tIsola:{value:null},uPx:{value:new at},uSposta:{value:new at},uAttrito:{value:.9955},uRaggio:{value:.1},uGocce:{value:Array.from({length:Fr},()=>new Gt)}},{GOCCE_MAX:Fr}),this.gocce=[],this.versoVista=new _,this.lato=96,this.centro=new at,this.mFiltro=o(Ed,{t:{value:null},uSoglia:{value:dn.soglia},uGinocchio:{value:dn.soglia*.5},uSole:{value:n}}),this.mGiu=o(_d,{t:{value:null},uPx:{value:new at}}),this.mSu=o(Bd,{t:{value:null},tAlto:{value:null},uPx:{value:new at},uDispersione:{value:dn.dispersione}}),this.mFinale=o(Sd,{t:{value:null},tBloom:{value:null},uForza:{value:dn.intensita*.3},uAberrazione:{value:0},uTrasparente:{value:i?1:0},uGrana:{value:1}}),this.mEasu=o(Td,{t:{value:null},uIn:{value:new at},uScala:{value:new at}}),this.mRcas=o(Id,{t:{value:null},uPx:{value:new at},uNitido:{value:Math.pow(2,-.25)}}),this.mFxaa=o(Cd,{t:{value:null},uPx:{value:new at},uAcceso:{value:1}}),this.soleSuo=n,this.misura()}misura(){if(!this.usata)return;let t=this.r.getDrawingBufferSize(new at);if(t.x<1||t.y<1)return;let e=Math.round(t.x*this.scalaInterna),i=Math.round(t.y*this.scalaInterna);if(e===this.w&&i===this.h)return;this.libera(),this.w=e,this.h=i;let n={minFilter:le,magFilter:le,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1},a={...n,type:Ri,format:xe};this.base=new ne(e,i,{...a,depthBuffer:!0}),this.base.depthTexture=new Zn(e,i,ai),this.composto=new ne(e,i,a),this.pronto=new ne(e,i,n),this.rifl=this.conAcqua?new ne(Math.max(2,e>>1),Math.max(2,i>>1),{...a,depthBuffer:!0}):null,this.tela=[t.x,t.y],this.scalaInterna<.99&&(this.liscio=new ne(e,i,n),this.grande=new ne(t.x,t.y,n)),this.giu=[],this.su=[];let s=Math.max(2,e>>1),o=Math.max(2,i>>1);for(let A=0;A<dn.livelli&&Math.min(s,o)>=8;A++)this.giu.push(new ne(s,o,a)),A<dn.livelli-1&&this.su.push(new ne(s,o,a)),s>>=1,o>>=1;this.su.length=Math.max(0,this.giu.length-1)}libera(){for(let t of[this.base,this.composto,this.pronto,this.rifl,this.liscio,this.grande,...this.giu||[],...this.su||[]])t&&t.dispose();this.base&&this.base.depthTexture&&this.base.depthTexture.dispose(),this.base=this.composto=this.pronto=this.rifl=this.liscio=this.grande=null,this.giu=[],this.su=[],this.w=this.h=0,this.specchioDi=null}passata(t,e){this.quad.material=t,this.r.setRenderTarget(e),this.r.render(this.scenaQuad,this.camQuad)}isola(t,e,i,n){let a=this.onde&&this.lato===i?{x:this.centro.x,z:this.centro.y}:null;this.centro.set(t,e),this.lato=i;let s=innerWidth<900?192:320;if(!this.onde){let l=()=>new ne(s,s,{type:Ri,format:xe,minFilter:le,magFilter:le,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});this.onde=[l(),l()],this.nOnde=s}let o=this.nOnde,A=new Uint8Array(o*o);for(let l=0;l<o;l++)for(let c=0;c<o;c++)n(t+((c+.5)/o-.5)*i,e+((l+.5)/o-.5)*i)&&(A[l*o+c]=255);if(this.terra&&this.terra.dispose(),this.terra=new $n(A,o,o,rh,qe),this.terra.minFilter=this.terra.magFilter=ce,this.terra.needsUpdate=!0,a&&(a.x!==t||a.z!==e)){let l=this.mOnde.uniforms;l.uSposta.value.set((t-a.x)/i,(e-a.z)/i),l.t.value=this.onde[0].texture,l.tIsola.value=this.terra,l.uPx.value.set(1/this.nOnde,1/this.nOnde);for(let c=0;c<Fr;c++)l.uGocce.value[c].z=0;this.passata(this.mOnde,this.onde[1]),this.onde.reverse(),l.uSposta.value.set(0,0)}}tocca(t,e,i,n){this.gocce.length>=Fr*3&&this.gocce.shift(),this.gocce.push([(t-this.centro.x)/this.lato+.5,(e-this.centro.y)/this.lato+.5,i/this.lato,n])}passoOnde(){let t=this.mOnde.uniforms;t.t.value=this.onde[0].texture,t.tIsola.value=this.terra,t.uPx.value.set(1/this.nOnde,1/this.nOnde);for(let e=0;e<Fr;e++){let i=this.gocce.shift();i?t.uGocce.value[e].set(i[0],i[1],i[2],i[3]):t.uGocce.value[e].z=0}this.passata(this.mOnde,this.onde[1]),this.onde.reverse()}qualita({scala:t=this.scalaInterna}={}){t!==this.scalaInterna&&(this.scalaInterna=t,this.w&&(this.libera(),this.misura()))}scena(t,e,{cielo:i=null,livello:n=0,specchio:a=!0}={}){if((!this.usata||!this.w)&&(this.usata=!0,this.misura()),!this.w)return;let s=this.r,o=Nr.value;Nr.value=this.emissivo;let A=s.getClearAlpha();s.getClearColor(this.fondo),i?s.setClearColor(i,1):s.setClearColor(0,0),e.updateMatrixWorld();let l=e.matrixWorld.elements.join()+e.projectionMatrix.elements.join()+n;if(this.conAcqua&&(a||l!==this.specchioDi)){this.specchioDi=l;let c=i?i.clone():null;s.setClearColor(0,0);let h=t.userData.stelle,u=h&&h.visible;h&&(h.visible=!!u&&!!this.stelleNelRiflesso),this.specchio(t,e,n),h&&(h.visible=u),c&&s.setClearColor(c,1)}s.setRenderTarget(this.base),s.clear(),s.render(t,e),s.setRenderTarget(null),s.setClearColor(this.fondo,A),Nr.value=o}specchio(t,e,i){let n=this.camSpecchio,a=this.r;e.updateMatrixWorld();let s=new _().setFromMatrixPosition(e.matrixWorld),o=e.getWorldDirection(new _),A=new _(0,1,0).applyQuaternion(e.quaternion);n.position.set(s.x,2*i-s.y,s.z),n.up.set(A.x,-A.y,A.z),n.lookAt(n.position.x+o.x,n.position.y-o.y,n.position.z+o.z),n.near=e.near,n.far=e.far,n.updateMatrixWorld(),n.projectionMatrix.copy(e.projectionMatrix),this.mAcqua.uniforms.uRiflM.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(n.projectionMatrix).multiply(n.matrixWorldInverse);let l=new We(new _(0,1,0),-i).applyMatrix4(n.matrixWorldInverse),c=new Gt(l.normal.x,l.normal.y,l.normal.z,l.constant),h=n.projectionMatrix.elements,u=new Gt((Math.sign(c.x)+h[8])/h[0],(Math.sign(c.y)+h[9])/h[5],-1,(1+h[10])/h[14]);c.multiplyScalar(2/c.dot(u)),h[2]=c.x,h[6]=c.y,h[10]=c.z+1-.003,h[14]=c.w,a.setRenderTarget(this.rifl),a.clear(),a.render(t,n)}pesci(t,e=1){let i=this.mAcqua.uniforms,n=Math.min(t.length,qA);i.uNPesci.value=n;for(let a=0;a<n;a++){let s=t[a];i.uPesci.value[a*2].set(s.x,s.z,Math.cos(s.ang),Math.sin(s.ang)),i.uPesci.value[a*2+1].set(s.s*e,s.fondo,s.fase,s.oro?1:0)}}regole(){let t=this.mFiltro.uniforms,e=Math.pow(Yt.soglia,2.2);if(t.uSoglia.value=e,t.uGinocchio.value=e*.5,this.conAcqua&&(t.uSole.value=Yt.sole/1.04),this.mSu.uniforms.uDispersione.value=.05+Yt.dispersione*.9,this.mFinale.uniforms.uForza.value=Yt.bloom*.3,this.mFinale.uniforms.uAberrazione.value=Yt.aberrazione,this.mFxaa.uniforms.uAcceso.value=Yt.fxaa?1:0,!this.conAcqua)return;let i=this.mAcqua.uniforms;i.uPelo.value.set(Yt.acquaVicino),i.uProfondo.value.set(Yt.acquaMezzo),i.uFondale.value.set(Yt.acquaBordo),i.uRiflesso.value.set(Yt.riflessoMin,Yt.riflessoMax),i.uPiena.value.set(Yt.pienaVicino,Yt.pienaBordo),i.uCieloMix.value=Yt.cieloMix,i.uRifra.value=Yt.rifrazione,i.uFondo.value=Yt.ondeFondo,i.uPiega.value=Yt.vuotoPiega,i.uLuccichio.value=Yt.luccichio,i.uSegni.value=Yt.segni,i.uSchiuma.value=Yt.schiuma,i.uFilo.value=Yt.filo,this.mOnde.uniforms.uAttrito.value=Yt.attrito}effetti(t,e={}){if(!this.base)return;let i=this.r;this.regole();let n=this.base;if(this.conAcqua){let u=this.mAcqua.uniforms;u.tBase.value=this.base.texture,u.tProf.value=this.base.depthTexture,u.tRifl.value=this.rifl.texture,t.updateMatrixWorld(),u.uInvVP.value.multiplyMatrices(t.matrixWorld,t.projectionMatrixInverse),u.uVP.value.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse);let p=e.tempo??0;if(this.onde){let g=Math.min(4,Math.floor((p-(this.tempoOnde??p))*60));(this.tempoOnde===void 0||g>0)&&(this.tempoOnde=p);for(let d=0;d<g;d++)this.passoOnde();u.tOnde.value=this.onde[0].texture,u.uPxOnde.value.set(1/this.nOnde,1/this.nOnde),u.uCentro.value.copy(this.centro),u.uLato.value=this.lato}u.uCam.value.setFromMatrixPosition(t.matrixWorld);let f=t.getWorldDirection(this.versoVista);u.uLampoDir.value.set(f.x,-f.y,f.z).add(rr.value).normalize(),u.uLivello.value=e.livello??0,u.uTempo.value=p,e.ambiente&&u.uAmbiente.value.setRGB(...e.ambiente),e.cielo&&u.uCielo.value.setRGB(...e.cielo),e.luce&&u.uSoleCol.value.setRGB(...e.luce),e.pozza&&(u.uPozza.value.set(e.pozza.x,e.pozza.z,e.pozza.r),this.mOnde.uniforms.uRaggio.value=e.pozza.r/this.lato);for(let g=0;g<jA;g++){let d=e.bolle&&e.bolle[g];d?u.uBolle.value[g].set(d.x,d.z,d.r,d.chi||0):u.uBolle.value[g].set(0,0,0,-1)}if(this.passata(this.mAcqua,this.composto),n=this.composto,this.aria){this.aria.bersaglio(this.base.depthTexture,this.w,this.h);let g=i.autoClear;i.autoClear=!1,i.setRenderTarget(this.composto),i.render(this.aria.scena,t),i.autoClear=g}if(this.sopra.children.length){for(let d of this.sopra.children){let m=d.material&&d.material.uniforms;m&&m.tProf&&(m.tProf.value=this.base.depthTexture,m.uRis.value.set(this.w,this.h),m.uProva.value=1)}let g=i.autoClear;i.autoClear=!1,i.setRenderTarget(this.composto),i.render(this.sopra,t),i.autoClear=g}}let a=this.giu.length;if(a){this.mFiltro.uniforms.t.value=n.texture,this.passata(this.mFiltro,this.giu[0]);for(let p=1;p<a;p++){let f=this.mGiu.uniforms;f.t.value=this.giu[p-1].texture,f.uPx.value.set(1/this.giu[p-1].width,1/this.giu[p-1].height),this.passata(this.mGiu,this.giu[p])}let u=this.giu[a-1];for(let p=a-2;p>=0;p--){let f=this.mSu.uniforms;f.t.value=u.texture,f.tAlto.value=this.giu[p].texture,f.uPx.value.set(1/u.width,1/u.height),this.passata(this.mSu,this.su[p]),u=this.su[p]}this.bloomFatto=u}let s=this.mFinale.uniforms;s.t.value=n.texture,s.tBloom.value=a?this.bloomFatto.texture:n.texture,a||(s.uForza.value=0);let o=Yt.fxaa&&this.r.getPixelRatio()*this.scalaInterna<1.49,A=!!this.grande;s.uGrana.value=A?0:1,this.passata(this.mFinale,o||A?this.pronto:null);let l=this.pronto;if(o&&(this.mFxaa.uniforms.t.value=this.pronto.texture,this.mFxaa.uniforms.uPx.value.set(1/this.w,1/this.h),this.passata(this.mFxaa,A?this.liscio:null),l=this.liscio),!A)return;let c=this.mEasu.uniforms;c.t.value=l.texture,c.uIn.value.set(this.w,this.h),c.uScala.value.set(this.w/this.tela[0],this.h/this.tela[1]),this.passata(this.mEasu,this.grande);let h=this.mRcas.uniforms;h.t.value=this.grande.texture,h.uPx.value.set(1/this.tela[0],1/this.tela[1]),this.passata(this.mRcas,null)}};var Ld=[1.5,1.25,1,.85,.77,.67,.59,.5],JA=1e3/60,Rd=21,zd=18.5,Ud=6e3;function Nd(r){try{let t=r.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),i=String(e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER));return/nvidia|geforce|quadro|rtx|gtx|radeon rx|radeon pro|arc\(tm\) a|arc a\d/i.test(i)?!1:/intel|uhd|iris|mali|adreno|powervr|apple|videocore|mesa|llvmpipe|swiftshader|radeon\(tm\) graphics|vega \d+ graphics|software/i.test(i)}catch{return!0}}var fs=class{constructor(t,{resa:e=null,misura:i=()=>{},alta:n=!1}={}){this.r=t,this.resa=e,this.misura=i,this.prBase=t.getPixelRatio(),this.scala=Ld.filter(l=>e?this.prBase*l<=Math.max(1.5,this.prBase)+1e-6:l<=1);let a=Math.max(1,innerWidth*innerHeight)*this.prBase*this.prBase,s=Nd(t)||!!(globalThis.matchMedia&&matchMedia("(pointer: coarse)").matches),o=n?9e6:s?12e5:42e5,A=this.scala.findIndex(l=>a*l*l<=o);A<0&&(A=this.scala.length-1),s&&!n&&(A=Math.max(A,this.scala.indexOf(1))),this.tetto=0,this.tettoFino=0,this.attesa=2e4,this.gradino=-1,this.vai(A),this.orologio=this.creaOrologio()}get scalaOra(){return this.scala[this.gradino]}vai(t){if(t=Math.max(0,Math.min(this.scala.length-1,t)),t===this.gradino)return;this.gradino=t;let e=this.scala[t];if(this.resa)this.resa.qualita({scala:e});else{let i=this.prBase*e;Math.abs(this.r.getPixelRatio()-i)>.001&&this.r.setPixelRatio(i)}this.misura(),this.somma=0,this.n=0,this.buoni=0,this.salta=2,this.cambiatoA=performance.now()}creaOrologio(){try{let t=this.r.getContext(),e=t.getExtension("EXT_disjoint_timer_query_webgl2");return!e||!t.createQuery?null:{gl:t,ext:e,liberi:[],inVolo:[],aperta:null,ms:null}}catch{return null}}inizio(){let t=this.orologio;if(!t||t.aperta||t.inVolo.length>4)return;let e=t.liberi.pop()||t.gl.createQuery();t.gl.beginQuery(t.ext.TIME_ELAPSED_EXT,e),t.aperta=e}fine(){let t=this.orologio;!t||!t.aperta||(t.gl.endQuery(t.ext.TIME_ELAPSED_EXT),t.inVolo.push(t.aperta),t.aperta=null)}leggiOrologio(){let t=this.orologio;if(!t)return null;let e=t.gl;for(;t.inVolo.length&&e.getQueryParameter(t.inVolo[0],e.QUERY_RESULT_AVAILABLE);){let i=t.inVolo.shift();if(!e.getParameter(t.ext.GPU_DISJOINT_EXT)){let n=e.getQueryParameter(i,e.QUERY_RESULT)/1e6;t.ms=t.ms===null?n:t.ms*.85+n*.15}t.liberi.push(i)}return t.ms}passo(t,e=0){let i=this.leggiOrologio();if(!(t>0)||t>3e3){this.somma=0,this.n=0;return}if(this.salta>0){this.salta--;return}if(this.somma+=t,this.n++,this.massimo=Math.max(this.massimo||0,t),!(this.n>=3&&this.somma>=500||this.n>=2&&this.somma>=1200))return;let n=this.n>=4?(this.somma-this.massimo)/(this.n-1):this.somma/this.n,a=this.somma,s=performance.now();if(this.somma=0,this.n=0,this.massimo=0,n>Rd){if(this.buoni=0,i!==null&&i<JA*.7||(this.saliti&&s-this.cambiatoA<4e3&&(this.tetto=this.gradino+1,this.tettoFino=s+this.attesa,this.attesa=Math.min(this.attesa*2,6e5)),this.saliti=!1,this.gradino>=this.scala.length-1))return;let A=i??Math.max(n-e,n*.35),l=this.scalaOra*Math.sqrt(Math.max(.05,Math.min(1,JA*.9/Math.max(A,1)))),c=this.gradino+1;for(;c<this.scala.length-1&&this.scala[c]>l+.001;)c++;e>n*.75&&(c=this.gradino+1),this.vai(c);return}if(n<zd?this.buoni+=a:this.buoni=0,this.gradino===0||this.buoni<Ud||this.gradino-1<this.tetto&&s<this.tettoFino)return;let o=this.scala[this.gradino-1];if(i!==null&&i*(o*o)/(this.scalaOra*this.scalaOra)>JA*.8){this.buoni=0;return}this.saliti=!0,this.vai(this.gradino-1)}};var Oh=["#33984b","#5d2c28","#edab50","#1e6f50","#391f21","#bf6f4a","#c42430","#f6ca9f","#134c4c","#5ac54f","#e69c69","#657392","#1c121c","#f9e6cf","#2a2f4e","#3d3d3d","#0c2e44","#ed7614","#424c6e","#e07438","#1a1932","#ffa214","#f68187","#ffffff","#b4b4b4","#5d5d5d","#92a1b9","#858585","#8e8e8e","#8a4836","#c64524","#ea323c","#0e071b","#929292"],Fh={"cella-a":{v:"IAGA/wD/IAGA/wABIAGg/gABIAGA/wD/IAGg/gABIAGg/gD/IAGg/gABIAEA/gABIAEA/gD/IAGg/gABIAEA/gD/IAGg/gD/4P6g/gAB4P6A/wAB4P6A/wD/4P6g/gAB4P6A/wD/4P6g/gD/4P4A/gAB4P6g/gAB4P6g/gD/4P4A/gAB4P6g/gD/4P4A/gD/AAGg/wABAAGg/wD/AP+g/wD/AAGg/wABAP+g/wD/AP+g/wABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAGg/iABAAGA/yABAP+A/yABAAGg/iABAP+A/yABAP+g/iABAAEA/iABAAGg/iABAP+g/iABAAEA/iABAP+g/iABAP8A/iABAP+A/+D+AAGA/+D+AAGg/uD+AP+A/+D+AAGg/uD+AP+g/uD+AAGg/uD+AAEA/uD+AP8A/uD+AAGg/uD+AP8A/uD+AP+g/uD+AAGg/wD/AAGg/wABIAGA/wABAAGg/wD/IAGA/wABIAGA/wD/4P6A/wABAP+g/wABAP+g/wD/4P6A/wABAP+g/wD/4P6A/wD/AAGA/yABAAGg/wABAP+g/wABAAGA/yABAP+g/wABAP+A/yABAP+g/wD/AAGg/wD/AAGA/+D+AP+g/wD/AAGA/+D+AP+A/+D+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAGg/uD+AAGA/+D+IAGA/wD/AAGg/uD+IAGA/wD/IAGg/gD/IAEA/gD/AAEA/uD+AAGg/uD+IAEA/gD/AAGg/uD+IAGg/gD/AAGA/yABAAGg/iABIAGg/gABAAGA/yABIAGg/gABIAGA/wABAAGg/iABAAEA/iABIAEA/gABAAGg/iABIAEA/gABIAGg/gABAP+A/+D+AP+g/uD+4P6g/gD/AP+A/+D+4P6g/gD/4P6A/wD/AP+g/uD+AP8A/uD+4P4A/gD/AP+g/uD+4P4A/gD/4P6g/gD/AP+g/iABAP+A/yAB4P6A/wABAP+g/iAB4P6A/wAB4P6g/gAB4P4A/gABAP8A/iABAP+g/iAB4P4A/gABAP+g/iAB4P6g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAGg/wABAAGA/yABIAGA/wABAP+g/wAB4P6A/wABAP+A/yABAAGg/wD/IAGA/wD/AAGA/+D+AP+g/wD/AP+A/+D+4P6A/wD/QAHg/+D+QAHg/yABQAFg/yABQAHg/+D+QAFg/yABQAFg/+D+wP5g/yABwP7g/yABwP7g/+D+wP5g/yABwP7g/+D+wP5g/+D+IAEAACABIAEAAOD+4P4AAOD+IAEAACAB4P4AAOD+4P4AACAB4P5A/+D+IAFA/+D+IAFA/yAB4P5A/+D+IAFA/yAB4P5A/yABIAFg/0ABIAHg/0AB4P7g/0ABIAFg/0AB4P7g/0AB4P5g/0AB4P7g/8D+IAHg/8D+IAFg/8D+4P7g/8D+IAFg/8D+4P5g/8D+IAEAAOD+IAEAACABQAHg/yABIAEAAOD+QAHg/yABQAHg/+D+wP7g/yAB4P4AACAB4P4AAOD+wP7g/yAB4P4AAOD+wP7g/+D+IAHg/0ABIAEAACAB4P4AACABIAHg/0AB4P4AACAB4P7g/0AB4P4AAOD+IAEAAOD+IAHg/8D+4P4AAOD+IAHg/8D+4P7g/8D+QAFg/yABIAFA/yABIAFA/+D+QAFg/yABIAFA/+D+QAFg/+D+4P5A/+D+4P5A/yABwP5g/yAB4P5A/+D+wP5g/yABwP5g/+D+4P5A/yABIAFA/yABIAFg/0AB4P5A/yABIAFg/0AB4P5g/0ABIAFg/8D+IAFA/+D+4P5A/+D+IAFg/8D+4P5A/+D+4P5g/8D+QAFg/+D+IAFg/8D+IAHg/8D+QAFg/+D+IAHg/8D+QAHg/+D+IAHg/0ABIAFg/0ABQAFg/yABIAHg/0ABQAFg/yABQAHg/yAB4P7g/8D+4P5g/8D+wP5g/+D+4P7g/8D+wP5g/+D+wP7g/+D+wP5g/yAB4P5g/0AB4P7g/0ABwP5g/yAB4P7g/0ABwP7g/yABIAFA/yABQAFg/yABIAFg/0AB4P5A/yAB4P5g/0ABwP5g/yABIAFA/+D+IAFg/8D+QAFg/+D+4P5A/+D+wP5g/+D+4P5g/8D+IAEAACABIAHg/0ABQAHg/yAB4P4AACABwP7g/yAB4P7g/0ABIAEAAOD+QAHg/+D+IAHg/8D+4P4AAOD+4P7g/8D+wP7g/+D+",c:"CgoFBQoKBQUKCh0dCgoFBQoKBQUKCgoKCgoKCgUFBQUFBQUFCgoFBQoKBQUKCgUFCgoFBQUFBQUKCgoKAAAAAAkJCQkAAAAACQkJCQkJCQkAAAAAAAAAAAAAAAAAAAAAAAAAAAkJCQk="},"cella-b":{v:"IAGA/wD/IAGA/wABIAGg/gABIAGA/wD/IAGg/gABIAGg/gD/IAGg/gABIAEA/gABIAEA/gD/IAGg/gABIAEA/gD/IAGg/gD/4P6g/gAB4P6A/wAB4P6A/wD/4P6g/gAB4P6A/wD/4P6g/gD/4P4A/gAB4P6g/gAB4P6g/gD/4P4A/gAB4P6g/gD/4P4A/gD/AAGg/wABAAGg/wD/AP+g/wD/AAGg/wABAP+g/wD/AP+g/wABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAGg/iABAAGA/yABAP+A/yABAAGg/iABAP+A/yABAP+g/iABAAEA/iABAAGg/iABAP+g/iABAAEA/iABAP+g/iABAP8A/iABAP+A/+D+AAGA/+D+AAGg/uD+AP+A/+D+AAGg/uD+AP+g/uD+AAGg/uD+AAEA/uD+AP8A/uD+AAGg/uD+AP8A/uD+AP+g/uD+AAGg/wD/AAGg/wABIAGA/wABAAGg/wD/IAGA/wABIAGA/wD/4P6A/wABAP+g/wABAP+g/wD/4P6A/wABAP+g/wD/4P6A/wD/AAGA/yABAAGg/wABAP+g/wABAAGA/yABAP+g/wABAP+A/yABAP+g/wD/AAGg/wD/AAGA/+D+AP+g/wD/AAGA/+D+AP+A/+D+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAGg/uD+AAGA/+D+IAGA/wD/AAGg/uD+IAGA/wD/IAGg/gD/IAEA/gD/AAEA/uD+AAGg/uD+IAEA/gD/AAGg/uD+IAGg/gD/AAGA/yABAAGg/iABIAGg/gABAAGA/yABIAGg/gABIAGA/wABAAGg/iABAAEA/iABIAEA/gABAAGg/iABIAEA/gABIAGg/gABAP+A/+D+AP+g/uD+4P6g/gD/AP+A/+D+4P6g/gD/4P6A/wD/AP+g/uD+AP8A/uD+4P4A/gD/AP+g/uD+4P4A/gD/4P6g/gD/AP+g/iABAP+A/yAB4P6A/wABAP+g/iAB4P6A/wAB4P6g/gAB4P4A/gABAP8A/iABAP+g/iAB4P4A/gABAP+g/iAB4P6g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAGg/wABAAGA/yABIAGA/wABAP+g/wAB4P6A/wABAP+A/yABAAGg/wD/IAGA/wD/AAGA/+D+AP+g/wD/AP+A/+D+4P6A/wD/QAHg/+D+QAHg/yABQAFg/yABQAHg/+D+QAFg/yABQAFg/+D+wP5g/yABwP7g/yABwP7g/+D+wP5g/yABwP7g/+D+wP5g/+D+IAEAACABIAEAAOD+4P4AAOD+IAEAACAB4P4AAOD+4P4AACAB4P5A/+D+IAFA/+D+IAFA/yAB4P5A/+D+IAFA/yAB4P5A/yABIAFg/0ABIAHg/0AB4P7g/0ABIAFg/0AB4P7g/0AB4P5g/0AB4P7g/8D+IAHg/8D+IAFg/8D+4P7g/8D+IAFg/8D+4P5g/8D+IAEAAOD+IAEAACABQAHg/yABIAEAAOD+QAHg/yABQAHg/+D+wP7g/yAB4P4AACAB4P4AAOD+wP7g/yAB4P4AAOD+wP7g/+D+IAHg/0ABIAEAACAB4P4AACABIAHg/0AB4P4AACAB4P7g/0AB4P4AAOD+IAEAAOD+IAHg/8D+4P4AAOD+IAHg/8D+4P7g/8D+QAFg/yABIAFA/yABIAFA/+D+QAFg/yABIAFA/+D+QAFg/+D+4P5A/+D+4P5A/yABwP5g/yAB4P5A/+D+wP5g/yABwP5g/+D+4P5A/yABIAFA/yABIAFg/0AB4P5A/yABIAFg/0AB4P5g/0ABIAFg/8D+IAFA/+D+4P5A/+D+IAFg/8D+4P5A/+D+4P5g/8D+QAFg/+D+IAFg/8D+IAHg/8D+QAFg/+D+IAHg/8D+QAHg/+D+IAHg/0ABIAFg/0ABQAFg/yABIAHg/0ABQAFg/yABQAHg/yAB4P7g/8D+4P5g/8D+wP5g/+D+4P7g/8D+wP5g/+D+wP7g/+D+wP5g/yAB4P5g/0AB4P7g/0ABwP5g/yAB4P7g/0ABwP7g/yABIAFA/yABQAFg/yABIAFg/0AB4P5A/yAB4P5g/0ABwP5g/yABIAFA/+D+IAFg/8D+QAFg/+D+4P5A/+D+wP5g/+D+4P5g/8D+IAEAACABIAHg/0ABQAHg/yAB4P4AACABwP7g/yAB4P7g/0ABIAEAAOD+QAHg/+D+IAHg/8D+4P4AAOD+4P7g/8D+wP7g/+D+",c:"CgoFBQoKBQUKCh0dCgoFBQoKBQUKCgoKCgoKCgUFBQUFBQUFCgoFBQoKBQUKCgUFCgoFBQUFBQUKCgoKAwMDAwAAAAADAwMDAAAAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAA="},"cella-c":{v:"IAGA/wD/IAGA/wABIAGg/gABIAGA/wD/IAGg/gABIAGg/gD/IAGg/gABIAEA/gABIAEA/gD/IAGg/gABIAEA/gD/IAGg/gD/4P6g/gAB4P6A/wAB4P6A/wD/4P6g/gAB4P6A/wD/4P6g/gD/4P4A/gAB4P6g/gAB4P6g/gD/4P4A/gAB4P6g/gD/4P4A/gD/AAGg/wABAAGg/wD/AP+g/wD/AAGg/wABAP+g/wD/AP+g/wABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAGg/iABAAGA/yABAP+A/yABAAGg/iABAP+A/yABAP+g/iABAAEA/iABAAGg/iABAP+g/iABAAEA/iABAP+g/iABAP8A/iABAP+A/+D+AAGA/+D+AAGg/uD+AP+A/+D+AAGg/uD+AP+g/uD+AAGg/uD+AAEA/uD+AP8A/uD+AAGg/uD+AP8A/uD+AP+g/uD+AAGg/wD/AAGg/wABIAGA/wABAAGg/wD/IAGA/wABIAGA/wD/4P6A/wABAP+g/wABAP+g/wD/4P6A/wABAP+g/wD/4P6A/wD/AAGA/yABAAGg/wABAP+g/wABAAGA/yABAP+g/wABAP+A/yABAP+g/wD/AAGg/wD/AAGA/+D+AP+g/wD/AAGA/+D+AP+A/+D+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAGg/uD+AAGA/+D+IAGA/wD/AAGg/uD+IAGA/wD/IAGg/gD/IAEA/gD/AAEA/uD+AAGg/uD+IAEA/gD/AAGg/uD+IAGg/gD/AAGA/yABAAGg/iABIAGg/gABAAGA/yABIAGg/gABIAGA/wABAAGg/iABAAEA/iABIAEA/gABAAGg/iABIAEA/gABIAGg/gABAP+A/+D+AP+g/uD+4P6g/gD/AP+A/+D+4P6g/gD/4P6A/wD/AP+g/uD+AP8A/uD+4P4A/gD/AP+g/uD+4P4A/gD/4P6g/gD/AP+g/iABAP+A/yAB4P6A/wABAP+g/iAB4P6A/wAB4P6g/gAB4P4A/gABAP8A/iABAP+g/iAB4P4A/gABAP+g/iAB4P6g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAGg/wABAAGA/yABIAGA/wABAP+g/wAB4P6A/wABAP+A/yABAAGg/wD/IAGA/wD/AAGA/+D+AP+g/wD/AP+A/+D+4P6A/wD/QAHg/+D+QAHg/yABQAFg/yABQAHg/+D+QAFg/yABQAFg/+D+wP5g/yABwP7g/yABwP7g/+D+wP5g/yABwP7g/+D+wP5g/+D+IAEAACABIAEAAOD+4P4AAOD+IAEAACAB4P4AAOD+4P4AACAB4P5A/+D+IAFA/+D+IAFA/yAB4P5A/+D+IAFA/yAB4P5A/yABIAFg/0ABIAHg/0AB4P7g/0ABIAFg/0AB4P7g/0AB4P5g/0AB4P7g/8D+IAHg/8D+IAFg/8D+4P7g/8D+IAFg/8D+4P5g/8D+IAEAAOD+IAEAACABQAHg/yABIAEAAOD+QAHg/yABQAHg/+D+wP7g/yAB4P4AACAB4P4AAOD+wP7g/yAB4P4AAOD+wP7g/+D+IAHg/0ABIAEAACAB4P4AACABIAHg/0AB4P4AACAB4P7g/0AB4P4AAOD+IAEAAOD+IAHg/8D+4P4AAOD+IAHg/8D+4P7g/8D+QAFg/yABIAFA/yABIAFA/+D+QAFg/yABIAFA/+D+QAFg/+D+4P5A/+D+4P5A/yABwP5g/yAB4P5A/+D+wP5g/yABwP5g/+D+4P5A/yABIAFA/yABIAFg/0AB4P5A/yABIAFg/0AB4P5g/0ABIAFg/8D+IAFA/+D+4P5A/+D+IAFg/8D+4P5A/+D+4P5g/8D+QAFg/+D+IAFg/8D+IAHg/8D+QAFg/+D+IAHg/8D+QAHg/+D+IAHg/0ABIAFg/0ABQAFg/yABIAHg/0ABQAFg/yABQAHg/yAB4P7g/8D+4P5g/8D+wP5g/+D+4P7g/8D+wP5g/+D+wP7g/+D+wP5g/yAB4P5g/0AB4P7g/0ABwP5g/yAB4P7g/0ABwP7g/yABIAFA/yABQAFg/yABIAFg/0AB4P5A/yAB4P5g/0ABwP5g/yABIAFA/+D+IAFg/8D+QAFg/+D+4P5A/+D+wP5g/+D+4P5g/8D+IAEAACABIAHg/0ABQAHg/yAB4P4AACABwP7g/yAB4P7g/0ABIAEAAOD+QAHg/+D+IAHg/8D+4P4AAOD+4P7g/8D+wP7g/+D+",c:"CgoFBQoKBQUKCh0dCgoFBQoKBQUKCgoKCgoKCgUFBQUFBQUFCgoFBQoKBQUKCgUFCgoFBQUFBQUKCgoKCAgICAMDAwMICAgIAwMDAwMDAwMICAgICAgICAgICAgICAgICAgICAMDAwM="},"cella-terra":{v:"IAEAAAD/IAEAAAABIAEA/gABIAEAAAD/IAEA/gABIAEA/gD/4P4A/gAB4P4AAAAB4P4AAAD/4P4A/gAB4P4AAAD/4P4A/gD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAEA/iABAAEAACABAP8AACABAAEA/iABAP8AACABAP8A/iABAP8AAOD+AAEAAOD+AAEA/uD+AP8AAOD+AAEA/uD+AP8A/uD+AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+IAEA/gD/AAEA/uD+AAEAAOD+IAEA/gD/AAEAAOD+IAEAAAD/AAEAACABAAEA/iABIAEA/gABAAEAACABIAEA/gABIAEAAAABAP8AAOD+AP8A/uD+4P4A/gD/AP8AAOD+4P4A/gD/4P4AAAD/4P4A/gABAP8A/iABAP8AACAB4P4A/gABAP8AACAB4P4AAAABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAEgAAABAAEAACABIAEAAAABAP8gAAAB4P4AAAABAP8AACABAAEgAAD/IAEAAAD/AAEAAOD+AP8gAAD/AP8AAOD+4P4AAAD/",c:"BQUFBQoKHR0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU="},"cella-pietra":{v:"IAEAAEAAIAEAAAABIAEg/wABIAEAAEAAIAEg/wABIAEg/0AAIAEAACAAIAEAAEAAIAEg/0AAIAEAACAAIAEg/0AAIAEg/yAAIAEAAAD/IAEAACAAIAEg/yAAIAEAAAD/IAEg/yAAIAEg/wD/IAEg/wABIAEA/wABIAEA/wD/IAEg/wABIAEA/wD/IAEg/wD/IAEA/wABIAEA/gABIAEA/qD/IAEA/wABIAEA/qD/IAEA/6D/IAEA/6D/IAEA/qD/IAEA/oD/IAEA/6D/IAEA/oD/IAEA/4D/IAEA/4D/IAEA/oD/IAEA/gD/IAEA/4D/IAEA/gD/IAEA/wD/4P4AAMD/4P4AAAD/4P4g/wD/4P4AAMD/4P4g/wD/4P4g/8D/4P4AAOD/4P4AAMD/4P4g/8D/4P4AAOD/4P4g/8D/4P4g/+D/4P4g/wAB4P4AAAAB4P4AAOD/4P4g/wAB4P4AAOD/4P4g/+D/4P4A/wAB4P4g/wAB4P4g/wD/4P4A/wAB4P4g/wD/4P4A/wD/4P4A/wD/4P4A/gD/4P4A/mAA4P4A/wD/4P4A/mAA4P4A/2AA4P4A/2AA4P4A/mAA4P4A/oAA4P4A/2AA4P4A/oAA4P4A/4AA4P4A/gAB4P4A/wAB4P4A/4AA4P4A/gAB4P4A/4AA4P4A/oAAAAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABwP8AACABAP8AACABAP8g/yABwP8AACABAP8g/yABwP8g/yAB4P8AACABwP8AACABwP8g/yAB4P8AACABwP8g/yAB4P8g/yABAAEg/yABAAEAACAB4P8AACABAAEg/yAB4P8AACAB4P8g/yABAAEA/yABAAEg/yABAP8g/yABAAEA/yABAP8g/yABAP8A/yABAP8A/yABAP8A/iABYAAA/iABAP8A/yABYAAA/iABYAAA/yABYAAA/yABYAAA/iABgAAA/iABYAAA/yABgAAA/iABgAAA/yABAAEA/iABAAEA/yABgAAA/yABAAEA/iABgAAA/yABgAAA/iABQAAAAOD+AAEAAOD+AAEg/+D+QAAAAOD+AAEg/+D+QAAg/+D+IAAAAOD+QAAAAOD+QAAg/+D+IAAAAOD+QAAg/+D+IAAg/+D+AP8AAOD+IAAAAOD+IAAg/+D+AP8AAOD+IAAg/+D+AP8g/+D+AAEg/+D+AAEA/+D+AP8A/+D+AAEg/+D+AP8A/+D+AP8g/+D+AAEA/+D+AAEA/uD+oP8A/uD+AAEA/+D+oP8A/uD+oP8A/+D+oP8A/+D+oP8A/uD+gP8A/uD+oP8A/+D+gP8A/uD+gP8A/+D+gP8A/+D+gP8A/uD+AP8A/uD+gP8A/+D+AP8A/uD+AP8A/+D+AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/AP8gAMD/AP8gAAD/4P4AAAD/AP8gAMD/4P4AAAD/4P4AAMD/AP8gAOD/AP8gAMD/4P4AAMD/AP8gAOD/4P4AAMD/4P4AAOD/4P4AAAABAP8gAAABAP8gAOD/4P4AAAABAP8gAOD/4P4AAOD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/WAA4P4A/mAAAP/g/QD/4P4A/mAA4P4A/gD/AP/g/WAAAP/g/YAA4P4A/oAAAP/g/WAA4P4A/oAA4P4A/mAAAP/g/YAAAP/g/QAB4P4A/gABAP/g/YAA4P4A/gAB4P4A/oAAAP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+IAEA/gD/AAEA/uD+AAEAAOD+IAEA/gD/AAEAAOD+IAEAAAD/AAEAACABAAEA/iABIAEA/gABAAEAACABIAEA/gABIAEAAAABAP8AAOD+AP8g/+D+4P4g/wD/AP8AAOD+4P4g/wD/4P4AAAD/AP8g/+D+AP8A/+D+4P4A/wD/AP8g/+D+4P4A/wD/4P4g/wD/AP8A/+D+AP8A/uD+4P4A/gD/AP8A/+D+4P4A/gD/4P4A/wD/AP8g/yABAP8AACAB4P4AAAABAP8g/yAB4P4AAAAB4P4g/wABAP8A/yABAP8g/yAB4P4g/wABAP8A/yAB4P4g/wAB4P4A/wAB4P4A/gABAP8A/iABAP8A/yAB4P4A/gABAP8A/yAB4P4A/wABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAEgAAABAAEAACABIAEAAAABAP8gAAAB4P4AAAABAP8AACABAAEgAAD/IAEAAAD/AAEAAOD+AP8gAAD/AP8AAOD+4P4AAAD/",c:"CwsSEgsLEhILCxISCwsLCxISCwsSEgsLEhILCxoaEhILCxISCwsSEgsLEhILCwsLEhILCxISCwsSEgsLCwsLCxISCwsLCwsLCwsLCxISCwsLCwsLCwsLCwsLEhILCwsLEhILCwsLCwsLCwsL"},"cella-sabbia":{v:"IAEAAAD/IAEAAAABIAHg/wABIAEAAAD/IAHg/wABIAHg/wD/IAHg/wABIAFg/wABIAFg/wD/IAHg/wABIAFg/wD/IAHg/wD/IAFg/wABIAEg/wABIAEg/wD/IAFg/wABIAEg/wD/IAFg/wD/IAEg/wABIAHg/gABIAHg/qAAIAEg/wABIAHg/qAAIAEg/6AAIAEg/6AAIAHg/qAAIAHg/mAAIAEg/6AAIAHg/mAAIAEg/2AAIAEg/2AAIAHg/mAAIAHg/qD/IAEg/2AAIAHg/qD/IAEg/6D/IAEg/6D/IAHg/qD/IAHg/mD/IAEg/6D/IAHg/mD/IAEg/2D/IAEg/2D/IAHg/mD/IAHg/gD/IAEg/2D/IAHg/gD/IAEg/wD/IAHg/gABIAEA/gABIAEA/gD/IAHg/gABIAEA/gD/IAHg/gD/4P7g/wAB4P4AAAAB4P4AAAD/4P7g/wAB4P4AAAD/4P7g/wD/4P5g/wAB4P7g/wAB4P7g/wD/4P5g/wAB4P7g/wD/4P5g/wD/4P4g/wAB4P5g/wAB4P5g/wD/4P4g/wAB4P5g/wD/4P4g/wD/4P4g/wD/4P7g/gD/4P7g/mD/4P4g/wD/4P7g/mD/4P4g/2D/4P4g/2D/4P7g/mD/4P7g/qD/4P4g/2D/4P7g/qD/4P4g/6D/4P4g/6D/4P7g/qD/4P7g/mAA4P4g/6D/4P7g/mAA4P4g/2AA4P4g/2AA4P7g/mAA4P7g/qAA4P4g/2AA4P7g/qAA4P4g/6AA4P7g/gAB4P4g/wAB4P4g/6AA4P7g/gAB4P4g/6AA4P7g/qAA4P4A/gAB4P7g/gAB4P7g/gD/4P4A/gAB4P7g/gD/4P4A/gD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAHg/yABAAEAACABAP8AACABAAHg/yABAP8AACABAP/g/yABAAFg/yABAAHg/yABAP/g/yABAAFg/yABAP/g/yABAP9g/yABAAEg/yABAAFg/yABAP9g/yABAAEg/yABAP9g/yABAP8g/yABAP8g/yABAP/g/iABYP/g/iABAP8g/yABYP/g/iABYP8g/yABYP8g/yABYP/g/iABoP/g/iABYP8g/yABoP/g/iABoP8g/yABoP8g/yABoP/g/iABYADg/iABoP8g/yABYADg/iABYAAg/yABYAAg/yABYADg/iABoADg/iABYAAg/yABoADg/iABoAAg/yABAAHg/iABAAEg/yABoAAg/yABAAHg/iABoAAg/yABoADg/iABAAEA/iABAAHg/iABAP/g/iABAAEA/iABAP/g/iABAP8A/iABAP8AAOD+AAEAAOD+AAHg/+D+AP8AAOD+AAHg/+D+AP/g/+D+AAHg/+D+AAFg/+D+AP9g/+D+AAHg/+D+AP9g/+D+AP/g/+D+AAFg/+D+AAEg/+D+AP8g/+D+AAFg/+D+AP8g/+D+AP9g/+D+AAEg/+D+AAHg/uD+oADg/uD+AAEg/+D+oADg/uD+oAAg/+D+oAAg/+D+oADg/uD+YADg/uD+oAAg/+D+YADg/uD+YAAg/+D+YAAg/+D+YADg/uD+oP/g/uD+YAAg/+D+oP/g/uD+oP8g/+D+oP8g/+D+oP/g/uD+YP/g/uD+oP8g/+D+YP/g/uD+YP8g/+D+YP8g/+D+YP/g/uD+AP/g/uD+YP8g/+D+AP/g/uD+AP8g/+D+AAHg/uD+AAEA/uD+AP8A/uD+AAHg/uD+AP8A/uD+AP/g/uD+AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAHg/+D+AAEAAOD+IAEAAAD/AAHg/+D+IAEAAAD/IAHg/wD/AAFg/+D+AAHg/+D+IAHg/wD/AAFg/+D+IAHg/wD/IAFg/wD/AAEg/+D+AAFg/+D+IAFg/wD/AAEg/+D+IAFg/wD/IAEg/wD/AAHg/uD+AAEg/+D+IAEg/wD/AAHg/uD+IAEg/wD/IAHg/gD/IAEA/gD/AAEA/uD+AAHg/uD+IAEA/gD/AAHg/uD+IAHg/gD/AAEAACABAAHg/yABIAHg/wABAAEAACABIAHg/wABIAEAAAABAAHg/yABAAFg/yABIAFg/wABAAHg/yABIAFg/wABIAHg/wABAAFg/yABAAEg/yABIAEg/wABAAFg/yABIAEg/wABIAFg/wABAAEg/yABAAHg/iABIAHg/gABAAEg/yABIAHg/gABIAEg/wABAAHg/iABAAEA/iABIAEA/gABAAHg/iABIAEA/gABIAHg/gABAP8AAOD+AP/g/+D+4P7g/wD/AP8AAOD+4P7g/wD/4P4AAAD/AP/g/+D+AP9g/+D+4P5g/wD/AP/g/+D+4P5g/wD/4P7g/wD/AP9g/+D+AP8g/+D+4P4g/wD/AP9g/+D+4P4g/wD/4P5g/wD/AP8g/+D+AP/g/uD+4P7g/gD/AP8g/+D+4P7g/gD/4P4g/wD/AP/g/uD+AP8A/uD+4P4A/gD/AP/g/uD+4P4A/gD/4P7g/gD/AP/g/yABAP8AACAB4P4AAAABAP/g/yAB4P4AAAAB4P7g/wABAP9g/yABAP/g/yAB4P7g/wABAP9g/yAB4P7g/wAB4P5g/wABAP8g/yABAP9g/yAB4P5g/wABAP8g/yAB4P5g/wAB4P4g/wABAP/g/iABAP8g/yAB4P4g/wABAP/g/iAB4P4g/wAB4P7g/gAB4P4A/gABAP8A/iABAP/g/iAB4P4A/gABAP/g/iAB4P7g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAEgAAABAAEAACABIAEAAAABAP8gAAAB4P4AAAABAP8AACABAAEgAAD/IAEAAAD/AAEAAOD+AP8gAAD/AP8AAOD+4P4AAAD/",c:"BwcNDQcHDQ0HBw0NBwcNDQcHBwcNDQcHDQ0HBw0NBwcNDQcHDQ0KCgcHDQ0HBw0NBwcNDQcHDQ0HBwcHDQ0HBw0NBwcNDQcHDQ0HBwcHBwcHBwcHBwcHBwcHBwcHBw0NBwcNDQcHBwcNDQcHDQ0HBwcHDQ0HBw0NBwcHBw0NBwcNDQcHBwcHBwcHBwc="},albero:{v:"zf4AAP3/X/8AAKL//P8AAP3/zf4AAP3//P9lAP3/X/8AAKL/X/8AAKL/Zf8AAPf+/P8AAP3/X/8AAKL//P9lAP3/Zf8AAPf+Zf8AAPf+/P8AAEf//P8AAP3/Zf8AAPf+/P9lAP3//P8AAEf//P8AAEf/kwAAAPf+/P8AAP3//P8AAEf//P9lAP3/kwAAAPf+kwAAAPf+mQAAAKL//P8AAP3/kwAAAPf+/P9lAP3/mQAAAKL/mQAAAKL/KwEAAP3//P8AAP3/mQAAAKL//P9lAP3/KwEAAP3/KwEAAP3/mQAAAFgA/P8AAP3/KwEAAP3//P9lAP3/mQAAAFgAmQAAAFgAkwAAAAMB/P8AAP3/mQAAAFgA/P9lAP3/kwAAAAMBkwAAAAMB/P8AALMA/P8AAP3/kwAAAAMB/P9lAP3//P8AALMA/P8AALMAZf8AAAMB/P8AAP3//P8AALMA/P9lAP3/Zf8AAAMBZf8AAAMBX/8AAFgA/P8AAP3/Zf8AAAMB/P9lAP3/X/8AAFgAX/8AAFgAzf4AAP3//P8AAP3/X/8AAFgA/P9lAP3/zf4AAP3/tf8AALb//P8AAJj//P8AAP3/l/8AAP3/tf8AALb//P8AAP3/tf8AAEQAl/8AAP3//P8AAP3//P8AAGIAtf8AAEQA/P8AAP3/QwAAAEQA/P8AAGIA/P8AAP3/YQAAAP3/QwAAAEQA/P8AAP3/QwAAALb/YQAAAP3//P8AAP3//P8AAJj/QwAAALb//P8AAP3//P9hAZj/tf9hAbb//P9hAf3/tf9hAbb/l/9hAf3//P9hAf3/l/9hAf3/tf9hAUQA/P9hAf3/tf9hAUQA/P9hAWIA/P9hAf3//P9hAWIAQwBhAUQA/P9hAf3/QwBhAUQAYQBhAf3//P9hAf3/YQBhAf3/QwBhAbb//P9hAf3/QwBhAbb//P9hAZj//P9hAf3//P8AAJj/tf8AALb/tf8AALb/tf8AALb/l/8AAP3/l/8AAP3/l/8AAP3/tf8AAEQAtf8AAEQAtf8AAEQA/P8AAGIA/P8AAGIA/P8AAGIAQwAAAEQAQwAAAEQAQwAAAEQAYQAAAP3/YQAAAP3/YQAAAP3/QwAAALb/QwAAALb/QwAAALb//P8AAJj//P8AAJj//P8AAJj/tf8AALb/tf9hAbb//P8AAJj/tf9hAbb//P9hAZj/tf8AALb/l/8AAP3/l/9hAf3/tf8AALb/l/9hAf3/tf9hAbb/l/8AAP3/tf8AAEQAtf9hAUQAl/8AAP3/tf9hAUQAl/9hAf3/tf8AAEQA/P8AAGIA/P9hAWIAtf8AAEQA/P9hAWIAtf9hAUQA/P8AAGIAQwAAAEQAQwBhAUQA/P8AAGIAQwBhAUQA/P9hAWIAQwAAAEQAYQAAAP3/YQBhAf3/QwAAAEQAYQBhAf3/QwBhAUQAYQAAAP3/QwAAALb/QwBhAbb/YQAAAP3/QwBhAbb/YQBhAf3/QwAAALb//P8AAJj//P9hAZj/QwAAALb//P9hAZj/QwBhAbb//P9hAZj/tf9hAbb/tf9hAbb/tf9hAbb/l/9hAf3/l/9hAf3/l/9hAf3/tf9hAUQAtf9hAUQAtf9hAUQA/P9hAWIA/P9hAWIA/P9hAWIAQwBhAUQAQwBhAUQAQwBhAUQAYQBhAf3/YQBhAf3/YQBhAf3/QwBhAbb/QwBhAbb/QwBhAbb//P9hAZj//P9hAZj/nAFTAp0B/P9TAkoCowAXAnsC/P9TAkoC/P8XAsACowAXAnsCowCQAo8B/P+QAtQB/P9TAkoCnAFTAp0BSQGQAkoBowCQAo8B8AEXAvEBnAFTAp0BSQEXAjYCnAFTAp0BowAXAnsCSQEXAjYCowCQAo8B/P9TAkoCnAFTAp0B/P+5AdQBowAXAnsC/P8XAsACSQG5AUoB8AEXAvEBSQEXAjYCSQEXAjYCowAXAnsCSQG5AUoBowBbAaQA/P+5AdQB/P9bAekAowAXAnsCowBbAaQASQG5AUoB/P/8AP3/owBbAaQA/P9bAekA/P+5AdQBowBbAaQAowAXAnsC/P+QAtQBr/6QAkoBXP5TAp0BAv8XAlgCXP5TAp0BCf4XAvEBXP5TAp0BAv8XAlgC/P9TAkoC/P9TAkoCAv8XAlgC/P8XAsAC/P+QAtQBXP5TAp0B/P9TAkoCr/65AUoB/P+5AdQBAv8XAlgCAv8XAlgC/P+5AdQB/P8XAsACr/65AUoBAv8XAlgCCf4XAvEB/P9bAekAr/65AUoBVv9bAaQAVv9bAaQA/P/8AP3//P9bAekA/P+5AdQBr/65AUoB/P9bAekAxP0XAkoBr/1TAv3/f/0XAqQAr/1TAv3/Ov0XAv3/f/0XAqQAav6QAqQAJf6QAv3/r/1TAv3/XP5TAp0Br/6QAkoBav6QAqQACf4XAvEBXP5TAp0BxP0XAkoBXP5TAp0Br/1TAv3/xP0XAkoBav6QAqQAr/1TAv3/XP5TAp0BJf65Af3/f/0XAqQAOv0XAv3/r/65AUoBCf4XAvEBxP0XAkoBxP0XAkoBf/0XAqQAr/65AUoBVv9bAaQAJf65Af3/Ef9bAf3/Vv9bAaQAr/65AUoBf/0XAqQAEf9bAf3//P/8AP3/Vv9bAaQAJf65Af3/Vv9bAaQAf/0XAqQAof0XAgP/r/1TAv3/Cf4XAgn+r/6QArD+Cf4XAgn+r/1TAv3/r/6QArD+r/1TAv3/Jf6QAv3/of0XAgP/Ov0XAv3/r/1TAv3/r/65AbD+Jf65Af3/of0XAgP/of0XAgP/Jf65Af3/Ov0XAv3/r/65AbD+of0XAgP/Cf4XAgn+Ef9bAf3/r/65AbD+Vv9bAVf/Vv9bAVf//P/8AP3/Ef9bAf3/Jf65Af3/r/65AbD+Ef9bAf3/Av8XAqL9/P+QAib+/P8XAjv9Cf4XAgn+r/6QArD+Av8XAqL9/P+QAib+Av8XAqL9r/6QArD+Av8XAqL9/P8XAjv9/P+5ASb+Av8XAqL9r/65AbD+Cf4XAgn+r/65AbD+Av8XAqL9/P+5ASb+Vv9bAVf//P9bARL//P/8AP3/Vv9bAVf/r/65AbD+/P+5ASb+/P9bARL/Vv9bAVf//P+5ASb+9gAXAqL9SQGQArD+8AEXAgn+/P8XAjv9/P+QAib+9gAXAqL9SQGQArD+9gAXAqL9/P+QAib+SQG5AbD+/P+5ASb+9gAXAqL99gAXAqL9/P+5ASb+/P8XAjv9SQG5AbD+9gAXAqL98AEXAgn+/P9bARL/SQG5AbD+owBbAVf/owBbAVf//P/8AP3//P9bARL//P+5ASb+SQG5AbD+/P9bARL/VwIXAgP/0wGQAv3/vwIXAv3/8AEXAgn+SQGQArD+VwIXAgP/0wGQAv3/VwIXAgP/SQGQArD+VwIXAgP/vwIXAv3/0wG5Af3/VwIXAgP/SQG5AbD+8AEXAgn+SQG5AbD+VwIXAgP/0wG5Af3/owBbAVf/6ABbAf3//P/8AP3/owBbAVf/SQG5AbD+0wG5Af3/6ABbAf3/owBbAVf/0wG5Af3/SQG5AUoB0wG5Af3/VwIXAvcAVwIXAvcA0wG5Af3/vwIXAv3/SQG5AUoBVwIXAvcA8AEXAvEB6ABbAf3/SQG5AUoBowBbAaQAowBbAaQA/P/8AP3/6ABbAf3/0wG5Af3/SQG5AUoB6ABbAf3/0wGQAv3/SQGQAkoBnAFTAp0BVwIXAvcAnAFTAp0B8AEXAvEBVwIXAvcAvwIXAv3/nAFTAp0B0wGQAv3/nAFTAp0BvwIXAv3/owCQAo8Bav6QAqQAr/6QAkoBJf6QAv3/av6QAqQAr/6QArD+av6QAqQA/P+QAib+r/6QArD+/P+QAtQBowCQAo8Br/6QAkoB0wGQAv3/owCQAo8BSQGQAkoBav6QAqQASQGQArD+/P+QAib+0wGQAv3/SQGQArD+owCQAo8BowCQAo8BSQGQArD+av6QAqQAQwFQA0QB/P9QA8wBfwATA/IB/P9QA8wB/P8TAygCfwATA/IBfwCMAzkB/P+MA28B/P9QA8wBQwFQA0QBAgGMAwMBfwCMAzkBhQETA4YBQwFQA0QBAgETA7wBQwFQA0QBfwATA/IBAgETA7wBfwCMAzkB/P9QA8wBQwFQA0QB/P+1Am8BfwATA/IB/P8TAygCAgG1AgMBhQETA4YBAgETA7wBAgETA7wBfwATA/IBAgG1AgMBfwBXAoAA/P+1Am8B/P9XArYAfwATA/IBfwBXAoAAAgG1AgMB/P/5Af3/fwBXAoAA/P9XArYA/P+1Am8BfwBXAoAAfwATA/IB/P+MA28B9v6MAwMBtf5QA0QBOP8TA9cBtf5QA0QBdP4TA4YBtf5QA0QBOP8TA9cB/P9QA8wB/P9QA8wBOP8TA9cB/P8TAygC/P+MA28Btf5QA0QB/P9QA8wB9v61AgMB/P+1Am8BOP8TA9cBOP8TA9cB/P+1Am8B/P8TAygC9v61AgMBOP8TA9cBdP4TA4YB/P9XArYA9v61AgMBef9XAoAAef9XAoAA/P/5Af3//P9XArYA/P+1Am8B9v61AgMB/P9XArYAPf4TAwMBLf5QA/3/B/4TA4AALf5QA/3/0f0TA/3/B/4TA4AAwP6MA4AAiv6MA/3/Lf5QA/3/tf5QA0QB9v6MAwMBwP6MA4AAdP4TA4YBtf5QA0QBPf4TAwMBtf5QA0QBLf5QA/3/Pf4TAwMBwP6MA4AALf5QA/3/tf5QA0QBiv61Av3/B/4TA4AA0f0TA/3/9v61AgMBdP4TA4YBPf4TAwMBPf4TAwMBB/4TA4AA9v61AgMBrv6nAhEAiv61Av3/Q/9XAv3/rv6nAhEAQ/9XAv3/Rf9XAgIAUP9eAkEARv9XAgUAX/9XAkAA9v6HAioA8f6DAgoARf9XAgIA9v6HAioARf9XAgIARv9XAgUA9v6HAioARv9XAgUAS/9aAiIA3/6TAiwArv6nAhEA8f6DAgoA3/6TAiwA8f6DAgoA9v6HAioAGP98AkYAE/94AicAS/9aAiIAGP98AkYAS/9aAiIAUP9eAkEAEf+AAkcA3/6TAiwAE/94AicAEf+AAkcAE/94AicAGP98AkYAVf9jAmAAUP9eAkEAX/9XAkAAVf9jAmAAX/9XAkAAa/9XAl4AQ/9sAmIAEf+AAkcAUP9eAkEAQ/9sAmIAUP9eAkEAVf9jAmAAef9XAoAAQ/9sAmIAa/9XAl4Aef9XAoAA9v61AgMBB/4TA4AAQ/9XAv3/ff86Av3/Rf9XAgIAff86Av3//P/5Af3/w/8iAjYAff86Av3/w/8iAjYAbP9QAj4Aff86Av3/bP9QAj4AYv9IAgAAYv9IAgAAbP9QAj4AX/9XAkAAYv9IAgAAX/9XAkAARv9XAgUAYv9IAgAARv9XAgUARv9WAgIARv9WAgIARv9XAgUARf9XAgIAw/8iAjYAoP87AlkAa/9XAl4Aw/8iAjYAa/9XAl4AX/9XAkAAoP87AlkAkP9HAmkAjv9FAlsAjv9FAlsAkP9HAmkAff9UAnwAjv9FAlsAff9UAnwAeP9XAn0Ajv9FAlsAeP9XAn0Adf9XAncAjv9FAlsAdf9XAncAcf9UAl4Acf9UAl4Adf9XAncAa/9XAl4Aff9UAnwAef9XAoAAeP9XAn0Aiv61Av3/ef9XAoAAB/4TA4AAIv4TAzn/Lf5QA/3/dP4TA3X+9v6MA/f+dP4TA3X+Lf5QA/3/9v6MA/f+Lf5QA/3/iv6MA/3/Iv4TAzn/0f0TA/3/Lf5QA/3/9v61Avf+iv61Av3/Iv4TAzn/Iv4TAzn/iv61Av3/0f0TA/3/9v61Avf+Iv4TAzn/dP4TA3X+Q/9XAv3/9v61Avf+ef9XAnr/ef9XAnr//P/5Af3/Q/9XAv3/iv61Av3/9v61Avf+Q/9XAv3/OP8TAyP+/P+MA4v+/P8TA9L9dP4TA3X+9v6MA/f+OP8TAyP+/P+MA4v+OP8TAyP+9v6MA/f+OP8TAyP+/P8TA9L9/P+1Aov+OP8TAyP+9v61Avf+dP4TA3X+9v61Avf+OP8TAyP+/P+1Aov+ef9XAnr//P9XAkT//P/5Af3/ef9XAnr/9v61Avf+/P+1Aov+/P9XAkT/ef9XAnr//P+1Aov+wAATAyP+AgGMA/f+hQETA3X+/P8TA9L9/P+MA4v+wAATAyP+AgGMA/f+wAATAyP+/P+MA4v+AgG1Avf+/P+1Aov+wAATAyP+wAATAyP+/P+1Aov+/P8TA9L9AgG1Avf+wAATAyP+hQETA3X+/P9XAkT/AgG1Avf+fwBXAnr/fwBXAnr//P/5Af3//P9XAkT//P+1Aov+AgG1Avf+/P9XAkT/1gETAzn/bgGMA/3/JwITA/3/hQETA3X+AgGMA/f+1gETAzn/bgGMA/3/1gETAzn/AgGMA/f+1gETAzn/JwITA/3/bgG1Av3/1gETAzn/AgG1Avf+hQETA3X+AgG1Avf+1gETAzn/bgG1Av3/fwBXAnr/tQBXAv3//P/5Af3/fwBXAnr/AgG1Avf+bgG1Av3/tQBXAv3/fwBXAnr/bgG1Av3/AgG1AgMBbgG1Av3/1gETA8EA1gETA8EAbgG1Av3/JwITA/3/AgG1AgMB1gETA8EAhQETA4YBtQBXAv3/AgG1AgMBfwBXAoAAfwBXAoAA/P/5Af3/tQBXAv3/bgG1Av3/AgG1AgMBtQBXAv3/bgGMA/3/AgGMAwMBQwFQA0QB1gETA8EAQwFQA0QBhQETA4YB1gETA8EAJwITA/3/QwFQA0QBbgGMA/3/QwFQA0QBJwITA/3/fwCMAzkBwP6MA4AA9v6MAwMBiv6MA/3/wP6MA4AA9v6MA/f+wP6MA4AA/P+MA4v+9v6MA/f+/P+MA28BfwCMAzkB9v6MAwMBbgGMA/3/fwCMAzkBAgGMAwMBwP6MA4AAAgGMA/f+/P+MA4v+bgGMA/3/AgGMA/f+fwCMAzkBfwCMAzkBAgGMA/f+wP6MA4AACAFUBAkB/P9UBHgBZwAfBJcB/P9UBHgB/P8fBMMBZwAfBJcBZwCJBP8A/P+JBCwB/P9UBHgBCAFUBAkB0gCJBNMAZwCJBP8APQEfBD4BCAFUBAkB0gAfBGsBCAFUBAkBZwAfBJcB0gAfBGsBZwCJBP8A/P9UBHgBCAFUBAkB/P/MAywBZwAfBJcB/P8fBMMB0gDMA9MAPQEfBD4B0gAfBGsB0gAfBGsBZwAfBJcB0gDMA9MAZwB6A2gA/P/MAywB/P96A5QAZwAfBJcBZwB6A2gA0gDMA9MA/P8nA/3/ZwB6A2gA/P96A5QA/P/MAywBZwB6A2gAZwAfBJcB/P+JBCwBJv+JBNMA8P5UBAkBW/8fBIEB8P5UBAkBu/4fBD4B8P5UBAkBW/8fBIEB/P9UBHgB/P9UBHgBW/8fBIEB/P8fBMMB/P+JBCwB8P5UBAkB/P9UBHgBJv/MA9MA/P/MAywBW/8fBIEBW/8fBIEB/P/MAywB/P8fBMMBJv/MA9MAW/8fBIEBu/4fBD4B/P96A5QAJv/MA9MAkf96A2gAkf96A2gA/P8nA/3//P96A5QA/P/MAywBJv/MA9MA/P96A5QAj/4fBNMAgv5UBP3/Yv4fBGgAgv5UBP3/Nv4fBP3/Yv4fBGgA+v6JBGgAzf6JBP3/gv5UBP3/8P5UBAkBJv+JBNMA+v6JBGgAu/4fBD4B8P5UBAkBj/4fBNMA8P5UBAkBgv5UBP3/j/4fBNMA+v6JBGgAgv5UBP3/8P5UBAkBzf7MA/3/Yv4fBGgANv4fBP3/Jv/MA9MAu/4fBD4Bj/4fBNMAj/4fBNMAYv4fBGgAJv/MA9MAkf96A2gAzf7MA/3/Zf96A/3/kf96A2gAJv/MA9MAYv4fBGgAZf96A/3//P8nA/3/kf96A2gAzf7MA/3/kf96A2gAYv4fBGgAeP4fBFz/gv5UBP3/u/4fBLz+Jv+JBCf/u/4fBLz+gv5UBP3/Jv+JBCf/gv5UBP3/zf6JBP3/eP4fBFz/Nv4fBP3/gv5UBP3/Jv/MAyf/zf7MA/3/eP4fBFz/eP4fBFz/zf7MA/3/Nv4fBP3/Jv/MAyf/eP4fBFz/u/4fBLz+Zf96A/3/Jv/MAyf/kf96A5L/kf96A5L//P8nA/3/Zf96A/3/zf7MA/3/Jv/MAyf/Zf96A/3/W/8fBHn+/P+JBM7+/P8fBDf+u/4fBLz+Jv+JBCf/W/8fBHn+/P+JBM7+W/8fBHn+Jv+JBCf/W/8fBHn+/P8fBDf+/P/MA87+W/8fBHn+Jv/MAyf/u/4fBLz+Jv/MAyf/W/8fBHn+/P/MA87+kf96A5L//P96A2b//P8nA/3/kf96A5L/Jv/MAyf//P/MA87+/P96A2b/kf96A5L//P/MA87+nQAfBHn+0gCJBCf/PQEfBLz+/P8fBDf+/P+JBM7+nQAfBHn+0gCJBCf/nQAfBHn+/P+JBM7+0gDMAyf//P/MA87+nQAfBHn+nQAfBHn+/P/MA87+/P8fBDf+0gDMAyf/nQAfBHn+PQEfBLz+/P96A2b/0gDMAyf/ZwB6A5L/ZwB6A5L//P8nA/3//P96A2b//P/MA87+0gDMAyf//P96A2b/gAEfBFz/KwGJBP3/wgEfBP3/PQEfBLz+0gCJBCf/gAEfBFz/KwGJBP3/gAEfBFz/0gCJBCf/gAEfBFz/wgEfBP3/KwHMA/3/gAEfBFz/0gDMAyf/PQEfBLz+0gDMAyf/gAEfBFz/KwHMA/3/ZwB6A5L/kwB6A/3//P8nA/3/ZwB6A5L/0gDMAyf/KwHMA/3/kwB6A/3/ZwB6A5L/KwHMA/3/0gDMA9MAKwHMA/3/gAEfBJ4AgAEfBJ4AKwHMA/3/wgEfBP3/0gDMA9MAgAEfBJ4APQEfBD4BkwB6A/3/0gDMA9MAZwB6A2gAZwB6A2gA/P8nA/3/kwB6A/3/KwHMA/3/0gDMA9MAkwB6A/3/KwGJBP3/0gCJBNMACAFUBAkBgAEfBJ4ACAFUBAkBPQEfBD4BgAEfBJ4AwgEfBP3/CAFUBAkBKwGJBP3/CAFUBAkBwgEfBP3/ZwCJBP8A+v6JBGgAJv+JBNMAzf6JBP3/+v6JBGgAJv+JBCf/+v6JBGgA/P+JBM7+Jv+JBCf//P+JBCwBZwCJBP8AJv+JBNMAKwGJBP3/ZwCJBP8A0gCJBNMA+v6JBGgA0gCJBCf//P+JBM7+KwGJBP3/0gCJBCf/ZwCJBP8AZwCJBP8A0gCJBCf/+v6JBGgASv++BK8A/P++BPkAtf/zBA4B/P++BPkA/P/zBCwBtf/zBA4Btf+JBKkA/P+JBMcA/P++BPkASv++BK8Abf+JBIwAtf+JBKkAJv/zBNMASv++BK8Abf/zBPEASv++BK8Atf/zBA4Bbf/zBPEAtf+JBKkA/P++BPkASv++BK8A/P9FBccAtf/zBA4B/P/zBCwBbf9FBYwAJv/zBNMAbf/zBPEAbf/zBPEAtf/zBA4Bbf9FBYwAtf+XBUQA/P9FBccA/P+XBWIAtf/zBA4Btf+XBUQAbf9FBYwA/P/qBf3/tf+XBUQA/P+XBWIA/P9FBccAtf+XBUQAtf/zBA4B/P+JBMcAiwCJBIwArgC+BK8AZwDzBP8ArgC+BK8A0gDzBNMArgC+BK8AZwDzBP8A/P++BPkA/P++BPkAZwDzBP8A/P/zBCwB/P+JBMcArgC+BK8A/P++BPkAiwBFBYwA/P9FBccAZwDzBP8AZwDzBP8A/P9FBccA/P/zBCwBiwBFBYwAZwDzBP8A0gDzBNMA/P+XBWIAiwBFBYwAQwCXBUQAQwCXBUQA/P/qBf3//P+XBWIA/P9FBccAiwBFBYwA/P+XBWIA8ADzBIwA+AC+BP3/DQHzBEQA+AC+BP3/KwHzBP3/DQHzBEQAqACJBEQAxgCJBP3/+AC+BP3/rgC+BK8AiwCJBIwAqACJBEQA0gDzBNMArgC+BK8A8ADzBIwArgC+BK8A+AC+BP3/8ADzBIwAqACJBEQA+AC+BP3/rgC+BK8AxgBFBf3/DQHzBEQAKwHzBP3/iwBFBYwA0gDzBNMA8ADzBIwA8ADzBIwADQHzBEQAiwBFBYwAQwCXBUQAxgBFBf3/YQCXBf3/QwCXBUQAiwBFBYwADQHzBEQAYQCXBf3//P/qBf3/QwCXBUQAxgBFBf3/QwCXBUQADQHzBEQA/gDzBJL/+AC+BP3/0gDzBCf/iwCJBG7/0gDzBCf/+AC+BP3/iwCJBG7/+AC+BP3/xgCJBP3//gDzBJL/KwHzBP3/+AC+BP3/iwBFBW7/xgBFBf3//gDzBJL//gDzBJL/xgBFBf3/KwHzBP3/iwBFBW7//gDzBJL/0gDzBCf/YQCXBf3/iwBFBW7/QwCXBbb/QwCXBbb//P/qBf3/YQCXBf3/xgBFBf3/iwBFBW7/YQCXBf3/ZwDzBPv+/P+JBDP//P/zBM7+0gDzBCf/iwCJBG7/ZwDzBPv+/P+JBDP/ZwDzBPv+iwCJBG7/ZwDzBPv+/P/zBM7+/P9FBTP/ZwDzBPv+iwBFBW7/0gDzBCf/iwBFBW7/ZwDzBPv+/P9FBTP/QwCXBbb//P+XBZj//P/qBf3/QwCXBbb/iwBFBW7//P9FBTP//P+XBZj/QwCXBbb//P9FBTP/kf/zBPv+bf+JBG7/Jv/zBCf//P/zBM7+/P+JBDP/kf/zBPv+bf+JBG7/kf/zBPv+/P+JBDP/bf9FBW7//P9FBTP/kf/zBPv+kf/zBPv+/P9FBTP//P/zBM7+bf9FBW7/kf/zBPv+Jv/zBCf//P+XBZj/bf9FBW7/tf+XBbb/tf+XBbb//P/qBf3//P+XBZj//P9FBTP/bf9FBW7//P+XBZj/+v7zBJL/Mv+JBP3/zf7zBP3/Jv/zBCf/bf+JBG7/+v7zBJL/Mv+JBP3/+v7zBJL/bf+JBG7/+v7zBJL/zf7zBP3/Mv9FBf3/+v7zBJL/bf9FBW7/Jv/zBCf/bf9FBW7/+v7zBJL/Mv9FBf3/tf+XBbb/l/+XBf3//P/qBf3/tf+XBbb/bf9FBW7/Mv9FBf3/l/+XBf3/tf+XBbb/Mv9FBf3/bf9FBYwAMv9FBf3/+v7zBGgA+v7zBGgAMv9FBf3/zf7zBP3/bf9FBYwA+v7zBGgAJv/zBNMAl/+XBf3/bf9FBYwAtf+XBUQAtf+XBUQA/P/qBf3/l/+XBf3/Mv9FBf3/bf9FBYwAl/+XBf3/Mv+JBP3/bf+JBIwASv++BK8A+v7zBGgASv++BK8AJv/zBNMA+v7zBGgAzf7zBP3/Sv++BK8AMv+JBP3/Sv++BK8Azf7zBP3/tf+JBKkAqACJBEQAiwCJBIwAxgCJBP3/qACJBEQAiwCJBG7/qACJBEQA/P+JBDP/iwCJBG7//P+JBMcAtf+JBKkAiwCJBIwAMv+JBP3/tf+JBKkAbf+JBIwAqACJBEQAbf+JBG7//P+JBDP/Mv+JBP3/bf+JBG7/tf+JBKkAtf+JBKkAbf+JBG7/qACJBEQA",c:"BAEEAQQBBAEEAQQBBAEEAQQBBAEEAQQBBAQEBAQEBAQBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBCAgICAgICBAQEBAQEBAICAgICBAQEBAQEAgICAgICAgQEBAQEBAQCAgICBAQEBAQEAgICBAQEBAQEAgICBAQEBAQEAgICBAQEBAQEBAQEBAQEAgICAgICAgICAgICAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDCAgIAwMICAMDCAgDAwMDAwMDAwgICAMDAwMICAgIAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJ"},scalini:{v:"AP+KAGAAAAGKAGAAAAFKAGAAAP+KAGAAAAFKAGAAAP9KAGAAAAFKACABAAGKACABAP+KACABAAFKACABAP+KACABAP9KACABAAGKACABAAGKAGAAAP+KAGAAAAGKACABAP+KAGAAAP+KACABAP9KAGAAAAFKAGAAAAFKACABAP9KAGAAAAFKACABAP9KACABAAFKAGAAAAGKAGAAAAGKACABAAFKAGAAAAGKACABAAFKACABAP+KACABAP+KAGAAAP9KAGAAAP+KACABAP9KAGAAAP9KACABAP8zAcD/AAEzAcD/AAHzAMD/AP8zAcD/AAHzAMD/AP/zAMD/AAHzAIAAAAEzAYAAAP8zAYAAAAHzAIAAAP8zAYAAAP/zAIAAAAEzAYAAAAEzAcD/AP8zAcD/AAEzAYAAAP8zAcD/AP8zAYAAAP/zAMD/AAHzAMD/AAHzAIAAAP/zAMD/AAHzAIAAAP/zAIAAAAHzAMD/AAEzAcD/AAEzAYAAAAHzAMD/AAEzAYAAAAHzAIAAAP8zAYAAAP8zAcD/AP/zAMD/AP8zAYAAAP/zAMD/AP/zAIAAAP/gASD/AAHgASD/AAGgASD/AP/gASD/AAGgASD/AP+gASD/AAGgAeD/AAHgAeD/AP/gAeD/AAGgAeD/AP/gAeD/AP+gAeD/AAHgAeD/AAHgASD/AP/gASD/AAHgAeD/AP/gASD/AP/gAeD/AP+gASD/AAGgASD/AAGgAeD/AP+gASD/AAGgAeD/AP+gAeD/AAGgASD/AAHgASD/AAHgAeD/AAGgASD/AAHgAeD/AAGgAeD/AP/gAeD/AP/gASD/AP+gASD/AP/gAeD/AP+gASD/AP+gAeD/YP+mAWD/oP+mAWD/oP8zAWD/YP+mAWD/oP8zAWD/YP8zAWD/oP8zAaD/oP+mAaD/YP+mAaD/oP8zAaD/YP+mAaD/YP8zAaD/oP+mAaD/oP+mAWD/YP+mAWD/oP+mAaD/YP+mAWD/YP+mAaD/YP8zAWD/oP8zAWD/oP8zAaD/YP8zAWD/oP8zAaD/YP8zAaD/oP8zAWD/oP+mAWD/oP+mAaD/oP8zAWD/oP+mAaD/oP8zAaD/YP+mAaD/YP+mAWD/YP8zAWD/YP+mAaD/YP8zAWD/YP8zAaD/YAAzAWD/oAAzAWD/oADzAGD/YAAzAWD/oADzAGD/YADzAGD/oADzAMD/oAAzAcD/YAAzAcD/oADzAMD/YAAzAcD/YADzAMD/oAAzAcD/oAAzAWD/YAAzAWD/oAAzAcD/YAAzAWD/YAAzAcD/YADzAGD/oADzAGD/oADzAMD/YADzAGD/oADzAMD/YADzAMD/oADzAGD/oAAzAWD/oAAzAcD/oADzAGD/oAAzAcD/oADzAMD/YAAzAcD/YAAzAWD/YADzAGD/YAAzAcD/YADzAGD/YADzAMD/YP/gAcD+oP/gAcD+oP+gAcD+YP/gAcD+oP+gAcD+YP+gAcD+oP+gASD/oP/gASD/YP/gASD/oP+gASD/YP/gASD/YP+gASD/oP/gASD/oP/gAcD+YP/gAcD+oP/gASD/YP/gAcD+YP/gASD/YP+gAcD+oP+gAcD+oP+gASD/YP+gAcD+oP+gASD/YP+gASD/oP+gAcD+oP/gAcD+oP/gASD/oP+gAcD+oP/gASD/oP+gASD/YP/gASD/YP/gAcD+YP+gAcD+YP/gASD/YP+gAcD+YP+gASD/YADgAcD+oADgAcD+oACgAcD+YADgAcD+oACgAcD+YACgAcD+oACgASD/oADgASD/YADgASD/oACgASD/YADgASD/YACgASD/oADgASD/oADgAcD+YADgAcD+oADgASD/YADgAcD+YADgASD/YACgAcD+oACgAcD+oACgASD/YACgAcD+oACgASD/YACgASD/oACgAcD+oADgAcD+oADgASD/oACgAcD+oADgASD/oACgASD/YADgASD/YADgAcD+YACgAcD+YADgASD/YACgAcD+YACgASD/YACmAWD/oACmAWD/oAAzAWD/YACmAWD/oAAzAWD/YAAzAWD/oAAzAaD/oACmAaD/YACmAaD/oAAzAaD/YACmAaD/YAAzAaD/oACmAaD/oACmAWD/YACmAWD/oACmAaD/YACmAWD/YACmAaD/YAAzAWD/oAAzAWD/oAAzAaD/YAAzAWD/oAAzAaD/YAAzAaD/oAAzAWD/oACmAWD/oACmAaD/oAAzAWD/oACmAaD/oAAzAaD/YACmAaD/YACmAWD/YAAzAWD/YACmAaD/YAAzAWD/YAAzAaD/YP8zAWD/oP8zAWD/oP/zAGD/YP8zAWD/oP/zAGD/YP/zAGD/oP/zAMD/oP8zAcD/YP8zAcD/oP/zAMD/YP8zAcD/YP/zAMD/oP8zAcD/oP8zAWD/YP8zAWD/oP8zAcD/YP8zAWD/YP8zAcD/YP/zAGD/oP/zAGD/oP/zAMD/YP/zAGD/oP/zAMD/YP/zAMD/oP/zAGD/oP8zAWD/oP8zAcD/oP/zAGD/oP8zAcD/oP/zAMD/YP8zAcD/YP8zAWD/YP/zAGD/YP8zAcD/YP/zAGD/YP/zAMD/YAD9AAAAoAD9AAAAoACKAAAAYAD9AAAAoACKAAAAYACKAAAAoACKAEAAoAD9AEAAYAD9AEAAoACKAEAAYAD9AEAAYACKAEAAoAD9AEAAoAD9AAAAYAD9AAAAoAD9AEAAYAD9AAAAYAD9AEAAYACKAAAAoACKAAAAoACKAEAAYACKAAAAoACKAEAAYACKAEAAoACKAAAAoAD9AAAAoAD9AEAAoACKAAAAoAD9AEAAoACKAEAAYAD9AEAAYAD9AAAAYACKAAAAYAD9AEAAYACKAAAAYACKAEAAYACKAAAAoACKAAAAoABKAAAAYACKAAAAoABKAAAAYABKAAAAoABKAGAAoACKAGAAYACKAGAAoABKAGAAYACKAGAAYABKAGAAoACKAGAAoACKAAAAYACKAAAAoACKAGAAYACKAAAAYACKAGAAYABKAAAAoABKAAAAoABKAGAAYABKAAAAoABKAGAAYABKAGAAoABKAAAAoACKAAAAoACKAGAAoABKAAAAoACKAGAAoABKAGAAYACKAGAAYACKAAAAYABKAAAAYACKAGAAYABKAAAAYABKAGAAYP/9AAAAoP/9AAAAoP+KAAAAYP/9AAAAoP+KAAAAYP+KAAAAoP+KAEAAoP/9AEAAYP/9AEAAoP+KAEAAYP/9AEAAYP+KAEAAoP/9AEAAoP/9AAAAYP/9AAAAoP/9AEAAYP/9AAAAYP/9AEAAYP+KAAAAoP+KAAAAoP+KAEAAYP+KAAAAoP+KAEAAYP+KAEAAoP+KAAAAoP/9AAAAoP/9AEAAoP+KAAAAoP/9AEAAoP+KAEAAYP/9AEAAYP/9AAAAYP+KAAAAYP/9AEAAYP+KAAAAYP+KAEAAYP+KAAAAoP+KAAAAoP9KAAAAYP+KAAAAoP9KAAAAYP9KAAAAoP9KAGAAoP+KAGAAYP+KAGAAoP9KAGAAYP+KAGAAYP9KAGAAoP+KAGAAoP+KAAAAYP+KAAAAoP+KAGAAYP+KAAAAYP+KAGAAYP9KAAAAoP9KAAAAoP9KAGAAYP9KAAAAoP9KAGAAYP9KAGAAoP9KAAAAoP+KAAAAoP+KAGAAoP9KAAAAoP+KAGAAoP9KAGAAYP+KAGAAYP+KAAAAYP9KAAAAYP+KAGAAYP9KAAAAYP9KAGAAYABTAMAAoABTAMAAoADg/8AAYABTAMAAoADg/8AAYADg/8AAoADg/wABoABTAAABYABTAAABoADg/wABYABTAAABYADg/wABoABTAAABoABTAMAAYABTAMAAoABTAAABYABTAMAAYABTAAABYADg/8AAoADg/8AAoADg/wABYADg/8AAoADg/wABYADg/wABoADg/8AAoABTAMAAoABTAAABoADg/8AAoABTAAABoADg/wABYABTAAABYABTAMAAYADg/8AAYABTAAABYADg/8AAYADg/wABYP9TAMAAoP9TAMAAoP/g/8AAYP9TAMAAoP/g/8AAYP/g/8AAoP/g/wABoP9TAAABYP9TAAABoP/g/wABYP9TAAABYP/g/wABoP9TAAABoP9TAMAAYP9TAMAAoP9TAAABYP9TAMAAYP9TAAABYP/g/8AAoP/g/8AAoP/g/wABYP/g/8AAoP/g/wABYP/g/wABoP/g/8AAoP9TAMAAoP9TAAABoP/g/8AAoP9TAAABoP/g/wABYP9TAAABYP9TAMAAYP/g/8AAYP9TAAABYP/g/8AAYP/g/wAB",c:"ExMTEwICHh4TExMTExMTEwICHh4TExMTExMTEwICHh4TExMTAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB"},funghi:{v:"Lf+TAIAAlP++AMAAiP/bAEAALf+TAIAARv9YAIAArP+CAMAALf+TAIAArP+CAMAAlP++AMAArP+CAMAARv9YAIAAuP9lAEAAlP++AMAA+v/oAIAAiP/bAEAAlP++AMAArP+CAMAAEwCtAIAAlP++AMAAEwCtAIAA+v/oAIAAEwCtAIAArP+CAMAAuP9lAEAA+v/oAIAA+v/oAAAAiP/bAEAA+v/oAIAAEwCtAIAAEwCtAAAA+v/oAIAAEwCtAAAA+v/oAAAAEwCtAAAAEwCtAIAAuP9lAEAA+v/oAAAAlP++AMD/iP/bAEAA+v/oAAAAEwCtAAAArP+CAMD/+v/oAAAArP+CAMD/lP++AMD/rP+CAMD/EwCtAAAAuP9lAEAAlP++AMD/Lf+TAAAAiP/bAEAAlP++AMD/rP+CAMD/Rv9YAAAAlP++AMD/Rv9YAAAALf+TAAAARv9YAAAArP+CAMD/uP9lAEAALf+TAAAALf+TAIAAiP/bAEAALf+TAAAARv9YAAAARv9YAIAALf+TAAAARv9YAIAALf+TAIAARv9YAIAARv9YAAAAuP9lAEAANACMACMAhQBqACoAcgCMAOD/NACMACMAIgBgACMAcwA+ACoANACMACMAcwA+ACoAhQBqACoAcwA+ACoAIgBgACMATgA0AOD/hQBqACoAuwBUAOf/cgCMAOD/hQBqACoAcwA+ACoAqAAoAOf/hQBqACoAqAAoAOf/uwBUAOf/qAAoAOf/cwA+ACoATgA0AOD/uwBUAOf/ngBgAJ3/cgCMAOD/uwBUAOf/qAAoAOf/jAA0AJ3/uwBUAOf/jAA0AJ3/ngBgAJ3/jAA0AJ3/qAAoAOf/TgA0AOD/ngBgAJ3/TQCCAJb/cgCMAOD/ngBgAJ3/jAA0AJ3/OwBWAJb/ngBgAJ3/OwBWAJb/TQCCAJb/OwBWAJb/jAA0AJ3/TgA0AOD/TQCCAJb/GACYANn/cgCMAOD/TQCCAJb/OwBWAJb/BQBsANn/TQCCAJb/BQBsANn/GACYANn/BQBsANn/OwBWAJb/TgA0AOD/GACYANn/NACMACMAcgCMAOD/GACYANn/BQBsANn/IgBgACMAGACYANn/IgBgACMANACMACMAIgBgACMABQBsANn/TgA0AOD/u//n/38AmP/d/yYA1P/t/0AAmP/d/yYAu//n/38Amv/GAEAAEQD+/1oAu//n/38A1P/t/0AAu//n/38AEQD+/1oAmv/GAEAA7f/0/wEAEQD+/1oA1P/t/0AAEQD+/1oA7f/0/wEAmv/GAEAAmP/d/yYA7f/0/wEA1P/t/0AA7f/0/wEAmP/d/yYAmv/GAEAAWwDm/wAAHgD5/wAAPQDv/+D/HgD5/wAAWwDm/wAAbQCIAOD/WwDm/8D/WwDm/wAAPQDv/+D/WwDm/wAAWwDm/8D/bQCIAOD/HgD5/8D/WwDm/8D/PQDv/+D/WwDm/8D/HgD5/8D/bQCIAOD/HgD5/wAAHgD5/8D/PQDv/+D/HgD5/8D/HgD5/wAAbQCIAOD/",c:"HwYGDR8GBg0fBgYNHwYGDR8GBg0fBgYNBAwMDQQMDA0EDAwNBAwMDQQMDA0EDAwNBwcHBwcHBwcHBwcHBwcHBw=="},sasso:{v:"bAAgAHIAuv8gALwAuv8AALwAbAAgAHIAuv8AALwAbAAAAHIAQP8AAJT/QP8gAJT/8f8gAEr/QP8AAJT/8f8gAEr/8f8AAEr/ov9gAIAAUwBgADcACgBgAIb/ov9gAIAACgBgAIb/WP9gAM//CgDA/4b/UwDA/zcAov/A/4AACgDA/4b/ov/A/4AAWP/A/8//Z/8AAJkAZ/8gAJkAHf8gAOj/Z/8AAJkAHf8gAOj/Hf8AAOj/RQAgAG3/jgAgAB4AjgAAAB4ARQAgAG3/jgAAAB4ARQAAAG3/UwBgADcAov9gAIAAuv8gALwAUwBgADcAuv8gALwAbAAgAHIAQP8gAJT/WP9gAM//CgBgAIb/QP8gAJT/CgBgAIb/8f8gAEr/Z/8gAJkAov9gAIAAWP9gAM//Z/8gAJkAWP9gAM//Hf8gAOj/CgBgAIb/UwBgADcAjgAgAB4ACgBgAIb/jgAgAB4ARQAgAG3/uv8AALwAov/A/4AAUwDA/zcAuv8AALwAUwDA/zcAbAAAAHIACgDA/4b/WP/A/8//QP8AAJT/CgDA/4b/QP8AAJT/8f8AAEr/WP/A/8//ov/A/4AAZ/8AAJkAWP/A/8//Z/8AAJkAHf8AAOj/jgAAAB4AUwDA/zcACgDA/4b/jgAAAB4ACgDA/4b/RQAAAG3/bAAAAHIAjgAAAB4AjgAgAB4AbAAAAHIAjgAgAB4AbAAgAHIAZ/8gAJkAZ/8AAJkAuv8AALwAZ/8gAJkAuv8AALwAuv8gALwARQAgAG3/RQAAAG3/8f8AAEr/RQAgAG3/8f8AAEr/8f8gAEr/QP8AAJT/Hf8AAOj/Hf8gAOj/QP8AAJT/Hf8gAOj/QP8gAJT/ov/A/4AAuv8AALwAZ/8AAJkAWP/A/8//Hf8AAOj/QP8AAJT/UwDA/zcAjgAAAB4AbAAAAHIACgDA/4b/8f8AAEr/RQAAAG3/ov9gAIAAZ/8gAJkAuv8gALwAWP9gAM//QP8gAJT/Hf8gAOj/UwBgADcAbAAgAHIAjgAgAB4ACgBgAIb/RQAgAG3/8f8gAEr/5QAgAEcAoQAgAIsAoQAAAIsA5QAgAEcAoQAAAIsA5QAAAEcAMAAAABoAMAAgABoAdAAgANb/MAAAABoAdAAgANb/dAAAANb/iwBAAHQAzwBAADAAiwBAAOz/iwBAAHQAiwBAAOz/RwBAADAAiwDg/+z/zwDg/zAAiwDg/3QAiwDg/+z/iwDg/3QARwDg/zAAdAAAAIsAdAAgAIsAMAAgAEcAdAAAAIsAMAAgAEcAMAAAAEcAoQAgANb/5QAgABoA5QAAABoAoQAgANb/5QAAABoAoQAAANb/zwBAADAAiwBAAHQAoQAgAIsAzwBAADAAoQAgAIsA5QAgAEcAMAAgABoARwBAADAAiwBAAOz/MAAgABoAiwBAAOz/dAAgANb/dAAgAIsAiwBAAHQARwBAADAAdAAgAIsARwBAADAAMAAgAEcAiwBAAOz/zwBAADAA5QAgABoAiwBAAOz/5QAgABoAoQAgANb/oQAAAIsAiwDg/3QAzwDg/zAAoQAAAIsAzwDg/zAA5QAAAEcAiwDg/+z/RwDg/zAAMAAAABoAiwDg/+z/MAAAABoAdAAAANb/RwDg/zAAiwDg/3QAdAAAAIsARwDg/zAAdAAAAIsAMAAAAEcA5QAAABoAzwDg/zAAiwDg/+z/5QAAABoAiwDg/+z/oQAAANb/5QAAAEcA5QAAABoA5QAgABoA5QAAAEcA5QAgABoA5QAgAEcAdAAgAIsAdAAAAIsAoQAAAIsAdAAgAIsAoQAAAIsAoQAgAIsAoQAgANb/oQAAANb/dAAAANb/oQAgANb/dAAAANb/dAAgANb/MAAAABoAMAAAAEcAMAAgAEcAMAAAABoAMAAgAEcAMAAgABoAiwDg/3QAoQAAAIsAdAAAAIsARwDg/zAAMAAAAEcAMAAAABoAzwDg/zAA5QAAABoA5QAAAEcAiwDg/+z/dAAAANb/oQAAANb/iwBAAHQAdAAgAIsAoQAgAIsARwBAADAAMAAgABoAMAAgAEcAzwBAADAA5QAgAEcA5QAgABoAiwBAAOz/oQAgANb/dAAgANb/",c:"Dw8PDxsbDw8PDw8PGRkZGRkZGRkPDw8PDw8PDw8PDw8PDw8PDw8PDxkZGRkPDw8PGxsPDw8PDw8ZGRkZGRkZGQ8PDw8PDw8PDw8PDw8PDw8PDw8PGRkZGQ=="},ciuffo:{v:"2//GAN//4//GANj/+f/c/+3/2//GAN//+f/c/+3/8f/c//X/JgDk/xoAEADOAAQACADOAAwAJgDk/xoACADOAAwAHgDk/yIA7//mAOT/6P/mAOv/9//oAPr/7//mAOT/9//oAPr//v/oAPP/EgDE/xUAAwDC/wcACgDC////EgDE/xUACgDC////GQDE/w4ADwDf//X/+f/IAN//CADLAO7/DwDf//X/CADLAO7/HgDi/wQA8v/LAAUA4//IAPb/+f/f/wsA8v/LAAUA+f/f/wsABwDi/xoA6P/mAOv/7//mAOT/4//GANj/6P/mAOv/4//GANj/2//GAN//EADOAAQA/v/oAPP/9//oAPr/EADOAAQA9//oAPr/CADOAAwA+f/IAN//7//mAOT//v/oAPP/+f/IAN///v/oAPP/CADLAO7/9//oAPr/6P/mAOv/4//IAPb/9//oAPr/4//IAPb/8v/LAAUA+f/c/+3/CgDC////AwDC/wcA+f/c/+3/AwDC/wcA8f/c//X/EgDE/xUAGQDE/w4AJgDk/xoAEgDE/xUAJgDk/xoAHgDk/yIAGQDE/w4ACgDC////DwDf//X/GQDE/w4ADwDf//X/HgDi/wQA+f/f/wsAAwDC/wcAEgDE/xUA+f/f/wsAEgDE/xUABwDi/xoA8f/c//X/+f/f/wsA4//IAPb/8f/c//X/4//IAPb/2//GAN//+f/IAN//DwDf//X/+f/c/+3/+f/IAN//+f/c/+3/4//GANj/8v/LAAUABwDi/xoAHgDk/yIA8v/LAAUAHgDk/yIACADOAAwAJgDk/xoAHgDi/wQACADLAO7/JgDk/xoACADLAO7/EADOAAQACgDC////+f/c/+3/DwDf//X/GQDE/w4AHgDi/wQAJgDk/xoAAwDC/wcA+f/f/wsA8f/c//X/EgDE/xUAHgDk/yIABwDi/xoA7//mAOT/+f/IAN//4//GANj//v/oAPP/EADOAAQACADLAO7/6P/mAOv/2//GAN//4//IAPb/9//oAPr/8v/LAAUACADOAAwA0v+qAIEA3P+rAIUADADs/08A0v+qAIEADADs/08AAgDr/0sAAgDh/2sA0v+hAKIAyP+fAJ4AAgDh/2sAyP+fAJ4A+P/g/2cA0//AAJYAyf++AJIAxv+7AJsA0//AAJYAxv+7AJsAz/+8AJ8AAQDM/1cABQDP/00ADgDQ/1EAAQDM/1cADgDQ/1EACwDN/1sAEgDq/1wA4/+pAJMA3/+mAJwAEgDq/1wA3/+mAJwADwDm/2YAwv+iAJAAxf+lAIcA9f/m/1AAwv+iAJAA9f/m/1AA8f/i/1kAyf++AJIA0//AAJYA3P+rAIUAyf++AJIA3P+rAIUA0v+qAIEA0v+hAKIAz/+8AJ8Axv+7AJsA0v+hAKIAxv+7AJsAyP+fAJ4A4/+pAJMA0//AAJYAz/+8AJ8A4/+pAJMAz/+8AJ8A3/+mAJwAxv+7AJsAyf++AJIAxf+lAIcAxv+7AJsAxf+lAIcAwv+iAJAADADs/08ADgDQ/1EABQDP/00ADADs/08ABQDP/00AAgDr/0sAAQDM/1cACwDN/1sAAgDh/2sAAQDM/1cAAgDh/2sA+P/g/2cACwDN/1sADgDQ/1EAEgDq/1wACwDN/1sAEgDq/1wADwDm/2YA9f/m/1AABQDP/00AAQDM/1cA9f/m/1AAAQDM/1cA8f/i/1kAAgDr/0sA9f/m/1AAxf+lAIcAAgDr/0sAxf+lAIcA0v+qAIEA4/+pAJMAEgDq/1wADADs/08A4/+pAJMADADs/08A3P+rAIUAwv+iAJAA8f/i/1kA+P/g/2cAwv+iAJAA+P/g/2cAyP+fAJ4AAgDh/2sADwDm/2YA3/+mAJwAAgDh/2sA3/+mAJwA0v+hAKIADgDQ/1EADADs/08AEgDq/1wACwDN/1sADwDm/2YAAgDh/2sABQDP/00A9f/m/1AAAgDr/0sAAQDM/1cA+P/g/2cA8f/i/1kA0//AAJYA4/+pAJMA3P+rAIUAz/+8AJ8A0v+hAKIA3/+mAJwAyf++AJIA0v+qAIEAxf+lAIcAxv+7AJsAwv+iAJAAyP+fAJ4ATgBtAP3/RgBuAAQAXgDe/zUATgBtAP3/XgDe/zUAZgDd/y0AXgDe/zUARgBuAAQATgBtAP3/XgDe/zUATgBtAP3/ZgDd/y0AQwCAAP7/SwB/APb/SwB/APb/QwCAAP7/SwB/APb/QwCAAP7/aQDL/zMAaQDL/zMAYQDM/zsAaQDL/zMAYQDM/zsAYQDM/zsAVwDg/zwAPwBvAAwAPwBvAAwAVwDg/zwAPwBvAAwAVwDg/zwAVQBsAPX/VQBsAPX/bQDc/yYAVQBsAPX/bQDc/yYAbQDc/yYASwB/APb/QwCAAP7/RgBuAAQASwB/APb/RgBuAAQATgBtAP3/RgBuAAQAQwCAAP7/SwB/APb/RgBuAAQASwB/APb/TgBtAP3/PwBvAAwAQwCAAP7/QwCAAP7/PwBvAAwAQwCAAP7/PwBvAAwASwB/APb/SwB/APb/VQBsAPX/SwB/APb/VQBsAPX/VQBsAPX/XgDe/zUAYQDM/zsAaQDL/zMAXgDe/zUAaQDL/zMAZgDd/y0AaQDL/zMAYQDM/zsAXgDe/zUAaQDL/zMAXgDe/zUAZgDd/y0AYQDM/zsAYQDM/zsAVwDg/zwAYQDM/zsAVwDg/zwAVwDg/zwAbQDc/yYAaQDL/zMAaQDL/zMAbQDc/yYAaQDL/zMAbQDc/yYAZgDd/y0AbQDc/yYAVQBsAPX/ZgDd/y0AVQBsAPX/TgBtAP3/PwBvAAwAVwDg/zwAXgDe/zUAPwBvAAwAXgDe/zUARgBuAAQAVQBsAPX/bQDc/yYAZgDd/y0AVQBsAPX/ZgDd/y0ATgBtAP3/XgDe/zUAVwDg/zwAPwBvAAwAXgDe/zUAPwBvAAwARgBuAAQAYQDM/zsAXgDe/zUAVwDg/zwAYQDM/zsAVwDg/zwAXgDe/zUAaQDL/zMAbQDc/yYAZgDd/y0AaQDL/zMAZgDd/y0AbQDc/yYAQwCAAP7/PwBvAAwARgBuAAQAQwCAAP7/RgBuAAQAPwBvAAwASwB/APb/TgBtAP3/VQBsAPX/SwB/APb/VQBsAPX/TgBtAP3/mAB5APX/nAB5AP7/igDg/wYAmAB5APX/igDg/wYAhgDg//z/bQDl/xIAfwB9AAsAewB9AAEAbQDl/xIAewB9AAEAaQDl/wgAlQCNAAIAkQCNAPj/hwCPAPz/lQCNAAIAhwCPAPz/iwCPAAYAcADQ/wUAegDP/wEAfgDP/wsAcADQ/wUAfgDP/wsAdADQ/w8AhADi/xQAlwB6AAwAjQB7ABAAhADi/xQAjQB7ABAAegDj/xgAgQB7APP/iwB6AO//eADi//b/gQB7APP/eADi//b/bgDj//r/kQCNAPj/lQCNAAIAnAB5AP7/kQCNAPj/nAB5AP7/mAB5APX/fwB9AAsAiwCPAAYAhwCPAPz/fwB9AAsAhwCPAPz/ewB9AAEAlwB6AAwAlQCNAAIAiwCPAAYAlwB6AAwAiwCPAAYAjQB7ABAAhwCPAPz/kQCNAPj/iwB6AO//hwCPAPz/iwB6AO//gQB7APP/igDg/wYAfgDP/wsAegDP/wEAigDg/wYAegDP/wEAhgDg//z/cADQ/wUAdADQ/w8AbQDl/xIAcADQ/wUAbQDl/xIAaQDl/wgAdADQ/w8AfgDP/wsAhADi/xQAdADQ/w8AhADi/xQAegDj/xgAeADi//b/egDP/wEAcADQ/wUAeADi//b/cADQ/wUAbgDj//r/hgDg//z/eADi//b/iwB6AO//hgDg//z/iwB6AO//mAB5APX/lwB6AAwAhADi/xQAigDg/wYAlwB6AAwAigDg/wYAnAB5AP7/gQB7APP/bgDj//r/aQDl/wgAgQB7APP/aQDl/wgAewB9AAEAbQDl/xIAegDj/xgAjQB7ABAAbQDl/xIAjQB7ABAAfwB9AAsAfgDP/wsAigDg/wYAhADi/xQAdADQ/w8AegDj/xgAbQDl/xIAegDP/wEAeADi//b/hgDg//z/cADQ/wUAaQDl/wgAbgDj//r/lQCNAAIAlwB6AAwAnAB5AP7/iwCPAAYAfwB9AAsAjQB7ABAAkQCNAPj/mAB5APX/iwB6AO//hwCPAPz/gQB7APP/ewB9AAEAqP9sANv/oP9sANP/rP/o/8f/qP9sANv/rP/o/8f/tP/o/87/2f/x/5r/zf91AKb/1f91AK7/2f/x/5r/1f91AK7/4f/x/6H/rv+AAMb/tf+AAM3/xP+DAL7/rv+AAMb/xP+DAL7/vP+DALf/0//e/6//xP/b/77/vf/b/7b/0//e/6//vf/b/7b/zP/e/6f/tP/r/7D/qP9vALz/tv9yAK7/tP/r/7D/tv9yAK7/w//u/6H/zf9yAMT/vv9vANP/yv/r/8f/zf9yAMT/yv/r/8f/2f/u/7j/tf+AAM3/rv+AAMb/oP9sANP/tf+AAM3/oP9sANP/qP9sANv/zf91AKb/vP+DALf/xP+DAL7/zf91AKb/xP+DAL7/1f91AK7/qP9vALz/rv+AAMb/vP+DALf/qP9vALz/vP+DALf/tv9yAK7/xP+DAL7/tf+AAM3/vv9vANP/xP+DAL7/vv9vANP/zf9yAMT/rP/o/8f/vf/b/7b/xP/b/77/rP/o/8f/xP/b/77/tP/o/87/0//e/6//zP/e/6f/2f/x/5r/0//e/6//2f/x/5r/4f/x/6H/zP/e/6f/vf/b/7b/tP/r/7D/zP/e/6f/tP/r/7D/w//u/6H/yv/r/8f/xP/b/77/0//e/6//yv/r/8f/0//e/6//2f/u/7j/tP/o/87/yv/r/8f/vv9vANP/tP/o/87/vv9vANP/qP9sANv/qP9vALz/tP/r/7D/rP/o/8f/qP9vALz/rP/o/8f/oP9sANP/zf9yAMT/2f/u/7j/4f/x/6H/zf9yAMT/4f/x/6H/1f91AK7/2f/x/5r/w//u/6H/tv9yAK7/2f/x/5r/tv9yAK7/zf91AKb/vf/b/7b/rP/o/8f/tP/r/7D/zP/e/6f/w//u/6H/2f/x/5r/xP/b/77/yv/r/8f/tP/o/87/0//e/6//4f/x/6H/2f/u/7j/rv+AAMb/qP9vALz/oP9sANP/vP+DALf/zf91AKb/tv9yAK7/tf+AAM3/qP9sANv/vv9vANP/xP+DAL7/zf9yAMT/1f91AK7/+P86ABwA/P87ABIA4P/c//v/+P86ABwA4P/c//v/3P/a/wQA/f/R/wUAGAAxAB0AFAAwACcA/f/R/wUAFAAwACcA+P/Q/w8ACABEABkABABDACMADgA/ACYACABEABkADgA/ACYAEgBAABwA7P/H/wgA4v/L/wUA5v/M//v/7P/H/wgA5v/M//v/8P/J////7v/Z//T/CQA5AAwAEgA2ABAA7v/Z//T/EgA2ABAA9//W//j/BgAyAC0A/f81ACkA4v/W/xIABgAyAC0A4v/W/xIA6//S/xUABABDACMACABEABkA/P87ABIABABDACMA/P87ABIA+P86ABwAGAAxAB0AEgBAABwADgA/ACYAGAAxAB0ADgA/ACYAFAAwACcACQA5AAwACABEABkAEgBAABwACQA5AAwAEgBAABwAEgA2ABAADgA/ACYABABDACMA/f81ACkADgA/ACYA/f81ACkABgAyAC0A4P/c//v/5v/M//v/4v/L/wUA4P/c//v/4v/L/wUA3P/a/wQA7P/H/wgA8P/J/////f/R/wUA7P/H/wgA/f/R/wUA+P/Q/w8A8P/J////5v/M//v/7v/Z//T/8P/J////7v/Z//T/9//W//j/4v/W/xIA4v/L/wUA7P/H/wgA4v/W/xIA7P/H/wgA6//S/xUA3P/a/wQA4v/W/xIA/f81ACkA3P/a/wQA/f81ACkA+P86ABwACQA5AAwA7v/Z//T/4P/c//v/CQA5AAwA4P/c//v//P87ABIABgAyAC0A6//S/xUA+P/Q/w8ABgAyAC0A+P/Q/w8AFAAwACcA/f/R/wUA9//W//j/EgA2ABAA/f/R/wUAEgA2ABAAGAAxAB0A5v/M//v/4P/c//v/7v/Z//T/8P/J////9//W//j//f/R/wUA4v/L/wUA4v/W/xIA3P/a/wQA7P/H/wgA+P/Q/w8A6//S/xUACABEABkACQA5AAwA/P87ABIAEgBAABwAGAAxAB0AEgA2ABAABABDACMA+P86ABwA/f81ACkADgA/ACYABgAyAC0AFAAwACcAGgA/AIX/JAA/AIH/KQDa/47/GgA/AIX/KQDa/47/HwDa/5L/NQDe/6v/MABDAJ//JgBDAKP/NQDe/6v/JgBDAKP/KwDe/6//JwBNAIn/HQBNAI7/IQBPAJf/JwBNAIn/IQBPAJf/KwBPAJP/KADQ/6f/IwDO/53/LQDO/5n/KADQ/6f/LQDO/5n/MQDQ/6P/NwDb/5P/MQBBAIf/NQBCAJH/NwDb/5P/NQBCAJH/OwDd/53/GABCAJ3/FABBAJP/GQDb/6D/GABCAJ3/GQDb/6D/HQDd/6n/HQBNAI7/JwBNAIn/JAA/AIH/HQBNAI7/JAA/AIH/GgA/AIX/MABDAJ//KwBPAJP/IQBPAJf/MABDAJ//IQBPAJf/JgBDAKP/MQBBAIf/JwBNAIn/KwBPAJP/MQBBAIf/KwBPAJP/NQBCAJH/IQBPAJf/HQBNAI7/FABBAJP/IQBPAJf/FABBAJP/GABCAJ3/KQDa/47/LQDO/5n/IwDO/53/KQDa/47/IwDO/53/HwDa/5L/KADQ/6f/MQDQ/6P/NQDe/6v/KADQ/6f/NQDe/6v/KwDe/6//MQDQ/6P/LQDO/5n/NwDb/5P/MQDQ/6P/NwDb/5P/OwDd/53/GQDb/6D/IwDO/53/KADQ/6f/GQDb/6D/KADQ/6f/HQDd/6n/HwDa/5L/GQDb/6D/FABBAJP/HwDa/5L/FABBAJP/GgA/AIX/MQBBAIf/NwDb/5P/KQDa/47/MQBBAIf/KQDa/47/JAA/AIH/GABCAJ3/HQDd/6n/KwDe/6//GABCAJ3/KwDe/6//JgBDAKP/NQDe/6v/OwDd/53/NQBCAJH/NQDe/6v/NQBCAJH/MABDAJ//LQDO/5n/KQDa/47/NwDb/5P/MQDQ/6P/OwDd/53/NQDe/6v/IwDO/53/GQDb/6D/HwDa/5L/KADQ/6f/KwDe/6//HQDd/6n/JwBNAIn/MQBBAIf/JAA/AIH/KwBPAJP/MABDAJ//NQBCAJH/HQBNAI7/GgA/AIX/FABBAJP/IQBPAJf/GABCAJ3/JgBDAKP/Tv9tAF3/Rv9uAGT/Xv/e/5X/Tv9tAF3/Xv/e/5X/Zv/d/43/Xv/e/5X/Rv9uAGT/Tv9tAF3/Xv/e/5X/Tv9tAF3/Zv/d/43/Q/+AAF7/S/9/AFb/S/9/AFb/Q/+AAF7/S/9/AFb/Q/+AAF7/af/L/5P/af/L/5P/Yf/M/5v/af/L/5P/Yf/M/5v/Yf/M/5v/V//g/5z/P/9vAGz/P/9vAGz/V//g/5z/P/9vAGz/V//g/5z/Vf9sAFX/Vf9sAFX/bf/c/4b/Vf9sAFX/bf/c/4b/bf/c/4b/S/9/AFb/Q/+AAF7/Rv9uAGT/S/9/AFb/Rv9uAGT/Tv9tAF3/Rv9uAGT/Q/+AAF7/S/9/AFb/Rv9uAGT/S/9/AFb/Tv9tAF3/P/9vAGz/Q/+AAF7/Q/+AAF7/P/9vAGz/Q/+AAF7/P/9vAGz/S/9/AFb/S/9/AFb/Vf9sAFX/S/9/AFb/Vf9sAFX/Vf9sAFX/Xv/e/5X/Yf/M/5v/af/L/5P/Xv/e/5X/af/L/5P/Zv/d/43/af/L/5P/Yf/M/5v/Xv/e/5X/af/L/5P/Xv/e/5X/Zv/d/43/Yf/M/5v/Yf/M/5v/V//g/5z/Yf/M/5v/V//g/5z/V//g/5z/bf/c/4b/af/L/5P/af/L/5P/bf/c/4b/af/L/5P/bf/c/4b/Zv/d/43/bf/c/4b/Vf9sAFX/Zv/d/43/Vf9sAFX/Tv9tAF3/P/9vAGz/V//g/5z/Xv/e/5X/P/9vAGz/Xv/e/5X/Rv9uAGT/Vf9sAFX/bf/c/4b/Zv/d/43/Vf9sAFX/Zv/d/43/Tv9tAF3/Xv/e/5X/V//g/5z/P/9vAGz/Xv/e/5X/P/9vAGz/Rv9uAGT/Yf/M/5v/Xv/e/5X/V//g/5z/Yf/M/5v/V//g/5z/Xv/e/5X/af/L/5P/bf/c/4b/Zv/d/43/af/L/5P/Zv/d/43/bf/c/4b/Q/+AAF7/P/9vAGz/Rv9uAGT/Q/+AAF7/Rv9uAGT/P/9vAGz/S/9/AFb/Tv9tAF3/Vf9sAFX/S/9/AFb/Vf9sAFX/Tv9tAF3/mP95AFX/nP95AF7/iv/g/2b/mP95AFX/iv/g/2b/hv/g/1z/bf/l/3L/f/99AGv/e/99AGH/bf/l/3L/e/99AGH/af/l/2j/lf+NAGL/kf+NAFj/h/+PAFz/lf+NAGL/h/+PAFz/i/+PAGb/cP/Q/2X/ev/P/2H/fv/P/2v/cP/Q/2X/fv/P/2v/dP/Q/2//hP/i/3T/l/96AGz/jf97AHD/hP/i/3T/jf97AHD/ev/j/3j/gf97AFP/i/96AE//eP/i/1b/gf97AFP/eP/i/1b/bv/j/1r/kf+NAFj/lf+NAGL/nP95AF7/kf+NAFj/nP95AF7/mP95AFX/f/99AGv/i/+PAGb/h/+PAFz/f/99AGv/h/+PAFz/e/99AGH/l/96AGz/lf+NAGL/i/+PAGb/l/96AGz/i/+PAGb/jf97AHD/h/+PAFz/kf+NAFj/i/96AE//h/+PAFz/i/96AE//gf97AFP/iv/g/2b/fv/P/2v/ev/P/2H/iv/g/2b/ev/P/2H/hv/g/1z/cP/Q/2X/dP/Q/2//bf/l/3L/cP/Q/2X/bf/l/3L/af/l/2j/dP/Q/2//fv/P/2v/hP/i/3T/dP/Q/2//hP/i/3T/ev/j/3j/eP/i/1b/ev/P/2H/cP/Q/2X/eP/i/1b/cP/Q/2X/bv/j/1r/hv/g/1z/eP/i/1b/i/96AE//hv/g/1z/i/96AE//mP95AFX/l/96AGz/hP/i/3T/iv/g/2b/l/96AGz/iv/g/2b/nP95AF7/gf97AFP/bv/j/1r/af/l/2j/gf97AFP/af/l/2j/e/99AGH/bf/l/3L/ev/j/3j/jf97AHD/bf/l/3L/jf97AHD/f/99AGv/fv/P/2v/iv/g/2b/hP/i/3T/dP/Q/2//ev/j/3j/bf/l/3L/ev/P/2H/eP/i/1b/hv/g/1z/cP/Q/2X/af/l/2j/bv/j/1r/lf+NAGL/l/96AGz/nP95AF7/i/+PAGb/f/99AGv/jf97AHD/kf+NAFj/mP95AFX/i/96AE//h/+PAFz/gf97AFP/e/99AGH/iABsANsAgABsANMAjADo/8cAiABsANsAjADo/8cAlADo/84AuQDx/5oArQB1AKYAtQB1AK4AuQDx/5oAtQB1AK4AwQDx/6EAjgCAAMYAlQCAAM0ApACDAL4AjgCAAMYApACDAL4AnACDALcAswDe/68ApADb/74AnQDb/7YAswDe/68AnQDb/7YArADe/6cAlADr/7AAiABvALwAlgByAK4AlADr/7AAlgByAK4AowDu/6EArQByAMQAngBvANMAqgDr/8cArQByAMQAqgDr/8cAuQDu/7gAlQCAAM0AjgCAAMYAgABsANMAlQCAAM0AgABsANMAiABsANsArQB1AKYAnACDALcApACDAL4ArQB1AKYApACDAL4AtQB1AK4AiABvALwAjgCAAMYAnACDALcAiABvALwAnACDALcAlgByAK4ApACDAL4AlQCAAM0AngBvANMApACDAL4AngBvANMArQByAMQAjADo/8cAnQDb/7YApADb/74AjADo/8cApADb/74AlADo/84AswDe/68ArADe/6cAuQDx/5oAswDe/68AuQDx/5oAwQDx/6EArADe/6cAnQDb/7YAlADr/7AArADe/6cAlADr/7AAowDu/6EAqgDr/8cApADb/74AswDe/68AqgDr/8cAswDe/68AuQDu/7gAlADo/84AqgDr/8cAngBvANMAlADo/84AngBvANMAiABsANsAiABvALwAlADr/7AAjADo/8cAiABvALwAjADo/8cAgABsANMArQByAMQAuQDu/7gAwQDx/6EArQByAMQAwQDx/6EAtQB1AK4AuQDx/5oAowDu/6EAlgByAK4AuQDx/5oAlgByAK4ArQB1AKYAnQDb/7YAjADo/8cAlADr/7AArADe/6cAowDu/6EAuQDx/5oApADb/74AqgDr/8cAlADo/84AswDe/68AwQDx/6EAuQDu/7gAjgCAAMYAiABvALwAgABsANMAnACDALcArQB1AKYAlgByAK4AlQCAAM0AiABsANsAngBvANMApACDAL4ArQByAMQAtQB1AK4AeAB5AFUAfAB5AF4AagDg/2YAeAB5AFUAagDg/2YAZgDg/1wATQDl/3IAXwB9AGsAWwB9AGEATQDl/3IAWwB9AGEASQDl/2gAdQCNAGIAcQCNAFgAZwCPAFwAdQCNAGIAZwCPAFwAawCPAGYAUADQ/2UAWgDP/2EAXgDP/2sAUADQ/2UAXgDP/2sAVADQ/28AZADi/3QAdwB6AGwAbQB7AHAAZADi/3QAbQB7AHAAWgDj/3gAYQB7AFMAawB6AE8AWADi/1YAYQB7AFMAWADi/1YATgDj/1oAcQCNAFgAdQCNAGIAfAB5AF4AcQCNAFgAfAB5AF4AeAB5AFUAXwB9AGsAawCPAGYAZwCPAFwAXwB9AGsAZwCPAFwAWwB9AGEAdwB6AGwAdQCNAGIAawCPAGYAdwB6AGwAawCPAGYAbQB7AHAAZwCPAFwAcQCNAFgAawB6AE8AZwCPAFwAawB6AE8AYQB7AFMAagDg/2YAXgDP/2sAWgDP/2EAagDg/2YAWgDP/2EAZgDg/1wAUADQ/2UAVADQ/28ATQDl/3IAUADQ/2UATQDl/3IASQDl/2gAVADQ/28AXgDP/2sAZADi/3QAVADQ/28AZADi/3QAWgDj/3gAWADi/1YAWgDP/2EAUADQ/2UAWADi/1YAUADQ/2UATgDj/1oAZgDg/1wAWADi/1YAawB6AE8AZgDg/1wAawB6AE8AeAB5AFUAdwB6AGwAZADi/3QAagDg/2YAdwB6AGwAagDg/2YAfAB5AF4AYQB7AFMATgDj/1oASQDl/2gAYQB7AFMASQDl/2gAWwB9AGEATQDl/3IAWgDj/3gAbQB7AHAATQDl/3IAbQB7AHAAXwB9AGsAXgDP/2sAagDg/2YAZADi/3QAVADQ/28AWgDj/3gATQDl/3IAWgDP/2EAWADi/1YAZgDg/1wAUADQ/2UASQDl/2gATgDj/1oAdQCNAGIAdwB6AGwAfAB5AF4AawCPAGYAXwB9AGsAbQB7AHAAcQCNAFgAeAB5AFUAawB6AE8AZwCPAFwAYQB7AFMAWwB9AGEA3v9tAGoA1/9uAGIApv/e/3sA3v9tAGoApv/e/3sArf/d/4IApv/e/3sA1/9uAGIA3v9tAGoApv/e/3sA3v9tAGoArf/d/4IA3f+AAF8A5P9/AGcA5P9/AGcA3f+AAF8A5P9/AGcA3f+AAF8Ap//L/4UAp//L/4UAoP/M/34Ap//L/4UAoP/M/34AoP/M/34Anv/g/3MAz/9vAFsAz/9vAFsAnv/g/3MAz/9vAFsAnv/g/3MA5v9sAHEA5v9sAHEAtf/c/4kA5v9sAHEAtf/c/4kAtf/c/4kA5P9/AGcA3f+AAF8A1/9uAGIA5P9/AGcA1/9uAGIA3v9tAGoA1/9uAGIA3f+AAF8A5P9/AGcA1/9uAGIA5P9/AGcA3v9tAGoAz/9vAFsA3f+AAF8A3f+AAF8Az/9vAFsA3f+AAF8Az/9vAFsA5P9/AGcA5P9/AGcA5v9sAHEA5P9/AGcA5v9sAHEA5v9sAHEApv/e/3sAoP/M/34Ap//L/4UApv/e/3sAp//L/4UArf/d/4IAp//L/4UAoP/M/34Apv/e/3sAp//L/4UApv/e/3sArf/d/4IAoP/M/34AoP/M/34Anv/g/3MAoP/M/34Anv/g/3MAnv/g/3MAtf/c/4kAp//L/4UAp//L/4UAtf/c/4kAp//L/4UAtf/c/4kArf/d/4IAtf/c/4kA5v9sAHEArf/d/4IA5v9sAHEA3v9tAGoAz/9vAFsAnv/g/3MApv/e/3sAz/9vAFsApv/e/3sA1/9uAGIA5v9sAHEAtf/c/4kArf/d/4IA5v9sAHEArf/d/4IA3v9tAGoApv/e/3sAnv/g/3MAz/9vAFsApv/e/3sAz/9vAFsA1/9uAGIAoP/M/34Apv/e/3sAnv/g/3MAoP/M/34Anv/g/3MApv/e/3sAp//L/4UAtf/c/4kArf/d/4IAp//L/4UArf/d/4IAtf/c/4kA3f+AAF8Az/9vAFsA1/9uAGIA3f+AAF8A1/9uAGIAz/9vAFsA5P9/AGcA3v9tAGoA5v9sAHEA5P9/AGcA5v9sAHEA3v9tAGoAp/+yAHgAnf+yAHwAk//n/2MAp/+yAHgAk//n/2MAnf/n/18Ah//r/0YAkf+2AF4Am/+2AFoAh//r/0YAm/+2AFoAkf/r/0IAm//NAHUApf/NAHEAof/OAGcAm//NAHUAof/OAGcAl//OAGsAlP/Q/0gAmP/P/1IAjv/P/1YAlP/Q/0gAjv/P/1YAiv/Q/0wAhf/o/10AkP+zAHYAjP+1AGwAhf/o/10AjP+1AGwAgf/q/1QAqf+1AGAArf+zAGoAo//o/1EAqf+1AGAAo//o/1EAn//q/0cApf/NAHEAm//NAHUAnf+yAHwApf/NAHEAnf+yAHwAp/+yAHgAkf+2AF4Al//OAGsAof/OAGcAkf+2AF4Aof/OAGcAm/+2AFoAkP+zAHYAm//NAHUAl//OAGsAkP+zAHYAl//OAGsAjP+1AGwAof/OAGcApf/NAHEArf+zAGoAof/OAGcArf+zAGoAqf+1AGAAk//n/2MAjv/P/1YAmP/P/1IAk//n/2MAmP/P/1IAnf/n/18AlP/Q/0gAiv/Q/0wAh//r/0YAlP/Q/0gAh//r/0YAkf/r/0IAiv/Q/0wAjv/P/1YAhf/o/10Aiv/Q/0wAhf/o/10Agf/q/1QAo//o/1EAmP/P/1IAlP/Q/0gAo//o/1EAlP/Q/0gAn//q/0cAnf/n/18Ao//o/1EArf+zAGoAnf/n/18Arf+zAGoAp/+yAHgAkP+zAHYAhf/o/10Ak//n/2MAkP+zAHYAk//n/2MAnf+yAHwAqf+1AGAAn//q/0cAkf/r/0IAqf+1AGAAkf/r/0IAm/+2AFoAh//r/0YAgf/q/1QAjP+1AGwAh//r/0YAjP+1AGwAkf+2AF4Ajv/P/1YAk//n/2MAhf/o/10Aiv/Q/0wAgf/q/1QAh//r/0YAmP/P/1IAo//o/1EAnf/n/18AlP/Q/0gAkf/r/0IAn//q/0cAm//NAHUAkP+zAHYAnf+yAHwAl//OAGsAkf+2AF4AjP+1AGwApf/NAHEAp/+yAHgArf+zAGoAof/OAGcAqf+1AGAAm/+2AFoAhwCnAGr/jgCnAGP/nwDx/3T/hwCnAGr/nwDx/3T/mADx/3v/ugD2/4//qQCtAH7/ogCtAIX/ugD2/4//ogCtAIX/swD2/5b/lQDAAGr/jgDAAHH/lwDCAHr/lQDAAGr/lwDCAHr/ngDCAHP/rADd/5D/owDc/4f/qgDc/3//rADd/5D/qgDc/3//swDd/4j/sADy/3X/nwCpAGT/qACrAG3/sADy/3X/qACrAG3/uQD0/37/kQCrAIT/iACpAHv/mQDy/4z/kQCrAIT/mQDy/4z/ogD0/5X/jgDAAHH/lQDAAGr/jgCnAGP/jgDAAHH/jgCnAGP/hwCnAGr/qQCtAH7/ngDCAHP/lwDCAHr/qQCtAH7/lwDCAHr/ogCtAIX/nwCpAGT/lQDAAGr/ngDCAHP/nwCpAGT/ngDCAHP/qACrAG3/lwDCAHr/jgDAAHH/iACpAHv/lwDCAHr/iACpAHv/kQCrAIT/nwDx/3T/qgDc/3//owDc/4f/nwDx/3T/owDc/4f/mADx/3v/rADd/5D/swDd/4j/ugD2/4//rADd/5D/ugD2/4//swD2/5b/swDd/4j/qgDc/3//sADy/3X/swDd/4j/sADy/3X/uQD0/37/mQDy/4z/owDc/4f/rADd/5D/mQDy/4z/rADd/5D/ogD0/5X/mADx/3v/mQDy/4z/iACpAHv/mADx/3v/iACpAHv/hwCnAGr/nwCpAGT/sADy/3X/nwDx/3T/nwCpAGT/nwDx/3T/jgCnAGP/kQCrAIT/ogD0/5X/swD2/5b/kQCrAIT/swD2/5b/ogCtAIX/ugD2/4//uQD0/37/qACrAG3/ugD2/4//qACrAG3/qQCtAH7/qgDc/3//nwDx/3T/sADy/3X/swDd/4j/uQD0/37/ugD2/4//owDc/4f/mQDy/4z/mADx/3v/rADd/5D/swD2/5b/ogD0/5X/lQDAAGr/nwCpAGT/jgCnAGP/ngDCAHP/qQCtAH7/qACrAG3/jgDAAHH/hwCnAGr/iACpAHv/lwDCAHr/kQCrAIT/ogCtAIX/JwCnAAoALgCnAAMAPwDx/xQAJwCnAAoAPwDx/xQAOADx/xsAWgD2/y8ASQCtAB4AQgCtACUAWgD2/y8AQgCtACUAUwD2/zYANQDAAAoALgDAABEANwDCABoANQDAAAoANwDCABoAPgDCABMATADd/zAAQwDc/ycASgDc/x8ATADd/zAASgDc/x8AUwDd/ygAUADy/xUAPwCpAAQASACrAA0AUADy/xUASACrAA0AWQD0/x4AMQCrACQAKACpABsAOQDy/ywAMQCrACQAOQDy/ywAQgD0/zUALgDAABEANQDAAAoALgCnAAMALgDAABEALgCnAAMAJwCnAAoASQCtAB4APgDCABMANwDCABoASQCtAB4ANwDCABoAQgCtACUAPwCpAAQANQDAAAoAPgDCABMAPwCpAAQAPgDCABMASACrAA0ANwDCABoALgDAABEAKACpABsANwDCABoAKACpABsAMQCrACQAPwDx/xQASgDc/x8AQwDc/ycAPwDx/xQAQwDc/ycAOADx/xsATADd/zAAUwDd/ygAWgD2/y8ATADd/zAAWgD2/y8AUwD2/zYAUwDd/ygASgDc/x8AUADy/xUAUwDd/ygAUADy/xUAWQD0/x4AOQDy/ywAQwDc/ycATADd/zAAOQDy/ywATADd/zAAQgD0/zUAOADx/xsAOQDy/ywAKACpABsAOADx/xsAKACpABsAJwCnAAoAPwCpAAQAUADy/xUAPwDx/xQAPwCpAAQAPwDx/xQALgCnAAMAMQCrACQAQgD0/zUAUwD2/zYAMQCrACQAUwD2/zYAQgCtACUAWgD2/y8AWQD0/x4ASACrAA0AWgD2/y8ASACrAA0ASQCtAB4ASgDc/x8APwDx/xQAUADy/xUAUwDd/ygAWQD0/x4AWgD2/y8AQwDc/ycAOQDy/ywAOADx/xsATADd/zAAUwD2/zYAQgD0/zUANQDAAAoAPwCpAAQALgCnAAMAPgDCABMASQCtAB4ASACrAA0ALgDAABEAJwCnAAoAKACpABsANwDCABoAMQCrACQAQgCtACUAuv8/ACUAxP8/ACEAyf/a/y4Auv8/ACUAyf/a/y4Av//a/zIA1f/e/0sA0P9DAD8Axv9DAEMA1f/e/0sAxv9DAEMAy//e/08Ax/9NACkAvf9NAC4Awf9PADcAx/9NACkAwf9PADcAy/9PADMAyP/Q/0cAw//O/z0Azf/O/zkAyP/Q/0cAzf/O/zkA0f/Q/0MA1//b/zMA0f9BACcA1f9CADEA1//b/zMA1f9CADEA2//d/z0AuP9CAD0AtP9BADMAuf/b/0AAuP9CAD0Auf/b/0AAvf/d/0kAvf9NAC4Ax/9NACkAxP8/ACEAvf9NAC4AxP8/ACEAuv8/ACUA0P9DAD8Ay/9PADMAwf9PADcA0P9DAD8Awf9PADcAxv9DAEMA0f9BACcAx/9NACkAy/9PADMA0f9BACcAy/9PADMA1f9CADEAwf9PADcAvf9NAC4AtP9BADMAwf9PADcAtP9BADMAuP9CAD0Ayf/a/y4Azf/O/zkAw//O/z0Ayf/a/y4Aw//O/z0Av//a/zIAyP/Q/0cA0f/Q/0MA1f/e/0sAyP/Q/0cA1f/e/0sAy//e/08A0f/Q/0MAzf/O/zkA1//b/zMA0f/Q/0MA1//b/zMA2//d/z0Auf/b/0AAw//O/z0AyP/Q/0cAuf/b/0AAyP/Q/0cAvf/d/0kAv//a/zIAuf/b/0AAtP9BADMAv//a/zIAtP9BADMAuv8/ACUA0f9BACcA1//b/zMAyf/a/y4A0f9BACcAyf/a/y4AxP8/ACEAuP9CAD0Avf/d/0kAy//e/08AuP9CAD0Ay//e/08Axv9DAEMA1f/e/0sA2//d/z0A1f9CADEA1f/e/0sA1f9CADEA0P9DAD8Azf/O/zkAyf/a/y4A1//b/zMA0f/Q/0MA2//d/z0A1f/e/0sAw//O/z0Auf/b/0AAv//a/zIAyP/Q/0cAy//e/08Avf/d/0kAx/9NACkA0f9BACcAxP8/ACEAy/9PADMA0P9DAD8A1f9CADEAvf9NAC4Auv8/ACUAtP9BADMAwf9PADcAuP9CAD0Axv9DAEMAGgA/AIUAJAA/AIEAKQDa/44AGgA/AIUAKQDa/44AHwDa/5IANQDe/6sAMABDAJ8AJgBDAKMANQDe/6sAJgBDAKMAKwDe/68AJwBNAIkAHQBNAI4AIQBPAJcAJwBNAIkAIQBPAJcAKwBPAJMAKADQ/6cAIwDO/50ALQDO/5kAKADQ/6cALQDO/5kAMQDQ/6MANwDb/5MAMQBBAIcANQBCAJEANwDb/5MANQBCAJEAOwDd/50AGABCAJ0AFABBAJMAGQDb/6AAGABCAJ0AGQDb/6AAHQDd/6kAHQBNAI4AJwBNAIkAJAA/AIEAHQBNAI4AJAA/AIEAGgA/AIUAMABDAJ8AKwBPAJMAIQBPAJcAMABDAJ8AIQBPAJcAJgBDAKMAMQBBAIcAJwBNAIkAKwBPAJMAMQBBAIcAKwBPAJMANQBCAJEAIQBPAJcAHQBNAI4AFABBAJMAIQBPAJcAFABBAJMAGABCAJ0AKQDa/44ALQDO/5kAIwDO/50AKQDa/44AIwDO/50AHwDa/5IAKADQ/6cAMQDQ/6MANQDe/6sAKADQ/6cANQDe/6sAKwDe/68AMQDQ/6MALQDO/5kANwDb/5MAMQDQ/6MANwDb/5MAOwDd/50AGQDb/6AAIwDO/50AKADQ/6cAGQDb/6AAKADQ/6cAHQDd/6kAHwDa/5IAGQDb/6AAFABBAJMAHwDa/5IAFABBAJMAGgA/AIUAMQBBAIcANwDb/5MAKQDa/44AMQBBAIcAKQDa/44AJAA/AIEAGABCAJ0AHQDd/6kAKwDe/68AGABCAJ0AKwDe/68AJgBDAKMANQDe/6sAOwDd/50ANQBCAJEANQDe/6sANQBCAJEAMABDAJ8ALQDO/5kAKQDa/44ANwDb/5MAMQDQ/6MAOwDd/50ANQDe/6sAIwDO/50AGQDb/6AAHwDa/5IAKADQ/6cAKwDe/68AHQDd/6kAJwBNAIkAMQBBAIcAJAA/AIEAKwBPAJMAMABDAJ8ANQBCAJEAHQBNAI4AGgA/AIUAFABBAJMAIQBPAJcAGABCAJ0AJgBDAKMAGQA/AFcAFQA/AGEACQDa/1wAGQA/AFcACQDa/1wADQDa/1IA7P/e/1AA+P9DAFUA/P9DAEsA7P/e/1AA/P9DAEsA8P/e/0YADQBNAF4AEQBNAFQABwBPAFAADQBNAF4ABwBPAFAAAwBPAFkA+P/Q/0kAAgDO/00A/v/O/1cA+P/Q/0kA/v/O/1cA9P/Q/1MA+//b/2IABwBBAGcA/v9CAGMA+//b/2IA/v9CAGMA8f/d/14ACgBCAEUAFABBAEkABwDb/0QACgBCAEUABwDb/0QA/v/d/0AAEQBNAFQADQBNAF4AFQA/AGEAEQBNAFQAFQA/AGEAGQA/AFcA+P9DAFUAAwBPAFkABwBPAFAA+P9DAFUABwBPAFAA/P9DAEsABwBBAGcADQBNAF4AAwBPAFkABwBBAGcAAwBPAFkA/v9CAGMABwBPAFAAEQBNAFQAFABBAEkABwBPAFAAFABBAEkACgBCAEUACQDa/1wA/v/O/1cAAgDO/00ACQDa/1wAAgDO/00ADQDa/1IA+P/Q/0kA9P/Q/1MA7P/e/1AA+P/Q/0kA7P/e/1AA8P/e/0YA9P/Q/1MA/v/O/1cA+//b/2IA9P/Q/1MA+//b/2IA8f/d/14ABwDb/0QAAgDO/00A+P/Q/0kABwDb/0QA+P/Q/0kA/v/d/0AADQDa/1IABwDb/0QAFABBAEkADQDa/1IAFABBAEkAGQA/AFcABwBBAGcA+//b/2IACQDa/1wABwBBAGcACQDa/1wAFQA/AGEACgBCAEUA/v/d/0AA8P/e/0YACgBCAEUA8P/e/0YA/P9DAEsA7P/e/1AA8f/d/14A/v9CAGMA7P/e/1AA/v9CAGMA+P9DAFUA/v/O/1cACQDa/1wA+//b/2IA9P/Q/1MA8f/d/14A7P/e/1AAAgDO/00ABwDb/0QADQDa/1IA+P/Q/0kA8P/e/0YA/v/d/0AADQBNAF4ABwBBAGcAFQA/AGEAAwBPAFkA+P9DAFUA/v9CAGMAEQBNAFQAGQA/AFcAFABBAEkABwBPAFAACgBCAEUA/P9DAEsAeQA/ALcAdQA/AMEAaQDa/7wAeQA/ALcAaQDa/7wAbQDa/7IATADe/7AAWABDALUAXABDAKsATADe/7AAXABDAKsAUADe/6YAbQBNAL4AcQBNALQAZwBPALAAbQBNAL4AZwBPALAAYwBPALkAWADQ/6kAYgDO/60AXgDO/7cAWADQ/6kAXgDO/7cAVADQ/7MAWwDb/8IAZwBBAMcAXgBCAMMAWwDb/8IAXgBCAMMAUQDd/74AagBCAKUAdABBAKkAZwDb/6QAagBCAKUAZwDb/6QAXgDd/6AAcQBNALQAbQBNAL4AdQA/AMEAcQBNALQAdQA/AMEAeQA/ALcAWABDALUAYwBPALkAZwBPALAAWABDALUAZwBPALAAXABDAKsAZwBBAMcAbQBNAL4AYwBPALkAZwBBAMcAYwBPALkAXgBCAMMAZwBPALAAcQBNALQAdABBAKkAZwBPALAAdABBAKkAagBCAKUAaQDa/7wAXgDO/7cAYgDO/60AaQDa/7wAYgDO/60AbQDa/7IAWADQ/6kAVADQ/7MATADe/7AAWADQ/6kATADe/7AAUADe/6YAVADQ/7MAXgDO/7cAWwDb/8IAVADQ/7MAWwDb/8IAUQDd/74AZwDb/6QAYgDO/60AWADQ/6kAZwDb/6QAWADQ/6kAXgDd/6AAbQDa/7IAZwDb/6QAdABBAKkAbQDa/7IAdABBAKkAeQA/ALcAZwBBAMcAWwDb/8IAaQDa/7wAZwBBAMcAaQDa/7wAdQA/AMEAagBCAKUAXgDd/6AAUADe/6YAagBCAKUAUADe/6YAXABDAKsATADe/7AAUQDd/74AXgBCAMMATADe/7AAXgBCAMMAWABDALUAXgDO/7cAaQDa/7wAWwDb/8IAVADQ/7MAUQDd/74ATADe/7AAYgDO/60AZwDb/6QAbQDa/7IAWADQ/6kAUADe/6YAXgDd/6AAbQBNAL4AZwBBAMcAdQA/AMEAYwBPALkAWABDALUAXgBCAMMAcQBNALQAeQA/ALcAdABBAKkAZwBPALAAagBCAKUAXABDAKsAeQA/ALf/dQA/AMH/aQDa/7z/eQA/ALf/aQDa/7z/bQDa/7L/TADe/7D/WABDALX/XABDAKv/TADe/7D/XABDAKv/UADe/6b/bQBNAL7/cQBNALT/ZwBPALD/bQBNAL7/ZwBPALD/YwBPALn/WADQ/6n/YgDO/63/XgDO/7f/WADQ/6n/XgDO/7f/VADQ/7P/WwDb/8L/ZwBBAMf/XgBCAMP/WwDb/8L/XgBCAMP/UQDd/77/agBCAKX/dABBAKn/ZwDb/6T/agBCAKX/ZwDb/6T/XgDd/6D/cQBNALT/bQBNAL7/dQA/AMH/cQBNALT/dQA/AMH/eQA/ALf/WABDALX/YwBPALn/ZwBPALD/WABDALX/ZwBPALD/XABDAKv/ZwBBAMf/bQBNAL7/YwBPALn/ZwBBAMf/YwBPALn/XgBCAMP/ZwBPALD/cQBNALT/dABBAKn/ZwBPALD/dABBAKn/agBCAKX/aQDa/7z/XgDO/7f/YgDO/63/aQDa/7z/YgDO/63/bQDa/7L/WADQ/6n/VADQ/7P/TADe/7D/WADQ/6n/TADe/7D/UADe/6b/VADQ/7P/XgDO/7f/WwDb/8L/VADQ/7P/WwDb/8L/UQDd/77/ZwDb/6T/YgDO/63/WADQ/6n/ZwDb/6T/WADQ/6n/XgDd/6D/bQDa/7L/ZwDb/6T/dABBAKn/bQDa/7L/dABBAKn/eQA/ALf/ZwBBAMf/WwDb/8L/aQDa/7z/ZwBBAMf/aQDa/7z/dQA/AMH/agBCAKX/XgDd/6D/UADe/6b/agBCAKX/UADe/6b/XABDAKv/TADe/7D/UQDd/77/XgBCAMP/TADe/7D/XgBCAMP/WABDALX/XgDO/7f/aQDa/7z/WwDb/8L/VADQ/7P/UQDd/77/TADe/7D/YgDO/63/ZwDb/6T/bQDa/7L/WADQ/6n/UADe/6b/XgDd/6D/bQBNAL7/ZwBBAMf/dQA/AMH/YwBPALn/WABDALX/XgBCAMP/cQBNALT/eQA/ALf/dABBAKn/ZwBPALD/agBCAKX/XABDAKv/mv8/AIUApP8/AIEAqf/a/44Amv8/AIUAqf/a/44An//a/5IAtf/e/6sAsP9DAJ8Apv9DAKMAtf/e/6sApv9DAKMAq//e/68Ap/9NAIkAnf9NAI4Aof9PAJcAp/9NAIkAof9PAJcAq/9PAJMAqP/Q/6cAo//O/50Arf/O/5kAqP/Q/6cArf/O/5kAsf/Q/6MAt//b/5MAsf9BAIcAtf9CAJEAt//b/5MAtf9CAJEAu//d/50AmP9CAJ0AlP9BAJMAmf/b/6AAmP9CAJ0Amf/b/6AAnf/d/6kAnf9NAI4Ap/9NAIkApP8/AIEAnf9NAI4ApP8/AIEAmv8/AIUAsP9DAJ8Aq/9PAJMAof9PAJcAsP9DAJ8Aof9PAJcApv9DAKMAsf9BAIcAp/9NAIkAq/9PAJMAsf9BAIcAq/9PAJMAtf9CAJEAof9PAJcAnf9NAI4AlP9BAJMAof9PAJcAlP9BAJMAmP9CAJ0Aqf/a/44Arf/O/5kAo//O/50Aqf/a/44Ao//O/50An//a/5IAqP/Q/6cAsf/Q/6MAtf/e/6sAqP/Q/6cAtf/e/6sAq//e/68Asf/Q/6MArf/O/5kAt//b/5MAsf/Q/6MAt//b/5MAu//d/50Amf/b/6AAo//O/50AqP/Q/6cAmf/b/6AAqP/Q/6cAnf/d/6kAn//a/5IAmf/b/6AAlP9BAJMAn//a/5IAlP9BAJMAmv8/AIUAsf9BAIcAt//b/5MAqf/a/44Asf9BAIcAqf/a/44ApP8/AIEAmP9CAJ0Anf/d/6kAq//e/68AmP9CAJ0Aq//e/68Apv9DAKMAtf/e/6sAu//d/50Atf9CAJEAtf/e/6sAtf9CAJEAsP9DAJ8Arf/O/5kAqf/a/44At//b/5MAsf/Q/6MAu//d/50Atf/e/6sAo//O/50Amf/b/6AAn//a/5IAqP/Q/6cAq//e/68Anf/d/6kAp/9NAIkAsf9BAIcApP8/AIEAq/9PAJMAsP9DAJ8Atf9CAJEAnf9NAI4Amv8/AIUAlP9BAJMAof9PAJcAmP9CAJ0Apv9DAKMA",c:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},carote:{v:"4P4AAAAB4P4AAAAB4P4AAAD/4P4AAAAB4P4AAAD/4P4AAAD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/wD/AAHg/wD/AAHg/wABAP/g/wD/AAHg/wABAP/g/wABAAEAACABAAEAACABAP8AACABAAEAACABAP8AACABAP8AACABAAEAAOD+AAEAAOD+AP8AAOD+AAEAAOD+AP8AAOD+AP8AAOD+4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+AP/g/wD/AP/g/wAB4P4AAAABAP/g/wD/4P4AAAAB4P4AAAD/AP/g/wABAAHg/wABAAEAACABAP/g/wABAAEAACABAP8AACABAAEAAOD+AAHg/wD/AP/g/wD/AAEAAOD+AP/g/wD/AP8AAOD+AP8AAOD+AP8AAOD+4P4AAAD/AP8AAOD+4P4AAAD/4P4AAAD/AP8AACABAP8AACAB4P4AAAABAP8AACAB4P4AAAAB4P4AAAABAP/g/wABAP8AACAB4P4AAAABAP/g/wD/4P4AAAD/AP8AAOD+AP8gAAAB4P4AAAABAP8AACABAP8gAAD/AP8AAOD+4P4AAAD/IAEAAAABIAEAAAABIAEAAAD/IAEAAAABIAEAAAD/IAEAAAD/AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/IAEAAAABAAHg/wABAAHg/wD/IAEAAAABAAHg/wD/IAEAAAD/AAEAAOD+AAEAAOD+IAEAAAD/AAEAAOD+IAEAAAD/IAEAAAD/AAEAACABAAEAACABIAEAAAABAAEAACABIAEAAAABIAEAAAABAAEAACABAAHg/wABIAEAAAABIAEAAAD/AAHg/wD/AAEAAOD+IAEAAAABAAEgAAABAAEAACABAAEAAOD+AAEgAAD/IAEAAAD/e/8/AMD/rv9UAKD/e/8/AID/rv9UAKD/e/8/AMD/uP+r/4D/rv9UAKD/rv9UAGD/e/8/AID/rv9UAGD/rv9UAKD/uP+r/4D/rv9UAGD/e/8/AED/e/8/AID/e/8/AED/rv9UAGD/uP+r/4D/e/8/AED/SP8qAGD/e/8/AID/SP8qAGD/e/8/AED/uP+r/4D/SP8qAGD/SP8qAKD/e/8/AID/SP8qAKD/SP8qAGD/uP+r/4D/SP8qAKD/e/8/AMD/e/8/AID/e/8/AMD/SP8qAKD/uP+r/4D/d/9+AFz/fP98AFP/c/94AE//d/9+AFz/c/94AE//bv97AFj/hf8tAG3/jv8wAHH/if8zAHr/hf8tAG3/if8zAHr/gP8vAHb/gf9CAH7/df90AGr/bP9wAGb/gf9CAH7/bP9wAGb/eP8+AHr/e/9pAEv/hP9tAE//kP87AGP/e/9pAEv/kP87AGP/h/83AF//df90AGr/d/9+AFz/bv97AFj/df90AGr/bv97AFj/bP9wAGb/c/94AE//fP98AFP/hP9tAE//c/94AE//hP9tAE//e/9pAEv/gP8vAHb/if8zAHr/gf9CAH7/gP8vAHb/gf9CAH7/eP8+AHr/kP87AGP/jv8wAHH/hf8tAG3/kP87AGP/hf8tAG3/h/83AF//iP9zAFz/g/92AGX/j/9DAHn/iP9zAFz/j/9DAHn/lP9BAHD/fP98AFP/d/9+AFz/g/92AGX/fP98AFP/g/92AGX/iP9zAFz/j/9DAHn/if8zAHr/jv8wAHH/j/9DAHn/jv8wAHH/lP9BAHD/lP9BAHD/kP87AGP/hP9tAE//lP9BAHD/hP9tAE//iP9zAFz/df90AGr/gf9CAH7/j/9DAHn/df90AGr/j/9DAHn/g/92AGX/if8zAHr/j/9DAHn/gf9CAH7/jv8wAHH/kP87AGP/lP9BAHD/d/9+AFz/df90AGr/g/92AGX/fP98AFP/iP9zAFz/hP9tAE//dP84AG3/Z/9qAFn/bf9oAFD/dP84AG3/bf9oAFD/ef81AGT/Z/9qAFn/bv97AFj/c/94AE//Z/9qAFn/c/94AE//bf9oAFD/hf8tAG3/gP8vAHb/dP84AG3/hf8tAG3/dP84AG3/ef81AGT/e/9pAEv/h/83AF//ef81AGT/e/9pAEv/ef81AGT/bf9oAFD/dP84AG3/eP8+AHr/bP9wAGb/dP84AG3/bP9wAGb/Z/9qAFn/dP84AG3/gP8vAHb/eP8+AHr/h/83AF//hf8tAG3/ef81AGT/bP9wAGb/bv97AFj/Z/9qAFn/bf9oAFD/c/94AE//e/9pAEv/W/9oAK7/Xf9tAKX/VP9qAKH/W/9oAK7/VP9qAKH/Uv9kAKr/ff8nAIT/hv8rAIj/hP8mAJH/ff8nAIT/hP8mAJH/e/8iAI3/e/8sAJ//YP9YALL/V/9UAK7/e/8sAJ//V/9UAK7/cv8oAJv/Xf9kAJP/Zv9oAJf/gf87AIT/Xf9kAJP/gf87AIT/eP84AH//YP9YALL/W/9oAK7/Uv9kAKr/YP9YALL/Uv9kAKr/V/9UAK7/VP9qAKH/Xf9tAKX/Zv9oAJf/VP9qAKH/Zv9oAJf/Xf9kAJP/e/8iAI3/hP8mAJH/e/8sAJ//e/8iAI3/e/8sAJ//cv8oAJv/gf87AIT/hv8rAIj/ff8nAIT/gf87AIT/ff8nAIT/eP84AH//bf9mAKT/a/9hAK3/hv81AJr/bf9mAKT/hv81AJr/iP86AJH/Xf9tAKX/W/9oAK7/a/9hAK3/Xf9tAKX/a/9hAK3/bf9mAKT/hv81AJr/hP8mAJH/hv8rAIj/hv81AJr/hv8rAIj/iP86AJH/iP86AJH/gf87AIT/Zv9oAJf/iP86AJH/Zv9oAJf/bf9mAKT/YP9YALL/e/8sAJ//hv81AJr/YP9YALL/hv81AJr/a/9hAK3/e/8sAJ//hP8mAJH/hv81AJr/iP86AJH/hv8rAIj/gf87AIT/a/9hAK3/W/9oAK7/YP9YALL/Zv9oAJf/Xf9tAKX/bf9mAKT/a/8pAI7/UP9WAKH/Uv9bAJj/a/8pAI7/Uv9bAJj/bf8vAIT/UP9WAKH/Uv9kAKr/VP9qAKH/UP9WAKH/VP9qAKH/Uv9bAJj/ff8nAIT/e/8iAI3/a/8pAI7/ff8nAIT/a/8pAI7/bf8vAIT/Xf9kAJP/eP84AH//bf8vAIT/Xf9kAJP/bf8vAIT/Uv9bAJj/a/8pAI7/cv8oAJv/V/9UAK7/a/8pAI7/V/9UAK7/UP9WAKH/e/8iAI3/cv8oAJv/a/8pAI7/ff8nAIT/bf8vAIT/eP84AH//Uv9kAKr/UP9WAKH/V/9UAK7/VP9qAKH/Xf9kAJP/Uv9bAJj/Wf+ZAIf/Xf+aAH3/U/+XAHn/Wf+ZAIf/U/+XAHn/UP+VAIP/hP8gAHn/jv8kAH3/iv8iAIf/hP8gAHn/iv8iAIf/gf8fAIP/fv81AJH/Xf+DAJH/VP+AAI3/fv81AJH/VP+AAI3/df8xAI3/X/+EAG//aP+IAHP/if85AHP/X/+EAG//if85AHP/gP82AG//Xf+DAJH/Wf+ZAIf/UP+VAIP/Xf+DAJH/UP+VAIP/VP+AAI3/U/+XAHn/Xf+aAH3/aP+IAHP/U/+XAHn/aP+IAHP/X/+EAG//gf8fAIP/iv8iAIf/fv81AJH/gf8fAIP/fv81AJH/df8xAI3/if85AHP/jv8kAH3/hP8gAHn/if85AHP/hP8gAHn/gP82AG//bv+KAIH/av+JAIv/i/86AIv/bv+KAIH/i/86AIv/jv87AIH/Xf+aAH3/Wf+ZAIf/av+JAIv/Xf+aAH3/av+JAIv/bv+KAIH/i/86AIv/iv8iAIf/jv8kAH3/i/86AIv/jv8kAH3/jv87AIH/jv87AIH/if85AHP/aP+IAHP/jv87AIH/aP+IAHP/bv+KAIH/Xf+DAJH/fv81AJH/i/86AIv/Xf+DAJH/i/86AIv/av+JAIv/fv81AJH/iv8iAIf/i/86AIv/jv87AIH/jv8kAH3/if85AHP/av+JAIv/Wf+ZAIf/Xf+DAJH/aP+IAHP/Xf+aAH3/bv+KAIH/b/8vAH//T/99AH//Uv9/AHX/b/8vAH//Uv9/AHX/c/8wAHX/T/99AH//UP+VAIP/U/+XAHn/T/99AH//U/+XAHn/Uv9/AHX/hP8gAHn/gf8fAIP/b/8vAH//hP8gAHn/b/8vAH//c/8wAHX/X/+EAG//gP82AG//c/8wAHX/X/+EAG//c/8wAHX/Uv9/AHX/b/8vAH//df8xAI3/VP+AAI3/b/8vAH//VP+AAI3/T/99AH//gf8fAIP/df8xAI3/b/8vAH//hP8gAHn/c/8wAHX/gP82AG//UP+VAIP/T/99AH//VP+AAI3/U/+XAHn/X/+EAG//Uv9/AHX/SP8qAKD/e/8/AMD/e/8/AID/e/8/AMD/SP8qAKD/uP+r/4D/SP8qAGD/SP8qAKD/e/8/AID/SP8qAKD/SP8qAGD/uP+r/4D/e/8/AED/SP8qAGD/e/8/AID/SP8qAGD/e/8/AED/uP+r/4D/rv9UAGD/e/8/AED/e/8/AID/e/8/AED/rv9UAGD/uP+r/4D/rv9UAKD/rv9UAGD/e/8/AID/rv9UAGD/rv9UAKD/uP+r/4D/e/8/AMD/rv9UAKD/e/8/AID/rv9UAKD/e/8/AMD/uP+r/4D/0/9QAKwA+f9cAG8Asf9SAGwA+f9cAG8A0/9QAKwAyv+f/1gA+f9cAG8A1/9eAC8Asf9SAGwA1/9eAC8A+f9cAG8Ayv+f/1gA1/9eAC8Aj/9UACsAsf9SAGwAj/9UACsA1/9eAC8Ayv+f/1gAj/9UACsAaf9IAGgAsf9SAGwAaf9IAGgAj/9UACsAyv+f/1gAaf9IAGgAi/9GAKgAsf9SAGwAi/9GAKgAaf9IAGgAyv+f/1gAi/9GAKgA0/9QAKwAsf9SAGwA0/9QAKwAi/9GAKgAyv+f/1gAqf+bAEUAqP+XADkAnP+WADoAqf+bAEUAnP+WADoAnf+ZAEYArP88AFUAuP8+AFQAuP9BAF8ArP88AFUAuP9BAF8ArP8/AGAAtv9UAGcArP+PAFUAoP+OAFYAtv9UAGcAoP+OAFYAqv9SAGgAnv+DADMAqv+FADIAtf9JAEQAnv+DADMAtf9JAEQAqf9HAEUArP+PAFUAqf+bAEUAnf+ZAEYArP+PAFUAnf+ZAEYAoP+OAFYAnP+WADoAqP+XADkAqv+FADIAnP+WADoAqv+FADIAnv+DADMArP8/AGAAuP9BAF8Atv9UAGcArP8/AGAAtv9UAGcAqv9SAGgAtf9JAEQAuP8+AFQArP88AFUAtf9JAEQArP88AFUAqf9HAEUAt/+KAD0At/+OAEgAwf9SAFoAt/+KAD0Awf9SAFoAwf9OAE4AqP+XADkAqf+bAEUAt/+OAEgAqP+XADkAt/+OAEgAt/+KAD0Awf9SAFoAuP9BAF8AuP8+AFQAwf9SAFoAuP8+AFQAwf9OAE4Awf9OAE4Atf9JAEQAqv+FADIAwf9OAE4Aqv+FADIAt/+KAD0ArP+PAFUAtv9UAGcAwf9SAFoArP+PAFUAwf9SAFoAt/+OAEgAuP9BAF8Awf9SAFoAtv9UAGcAuP8+AFQAtf9JAEQAwf9OAE4Aqf+bAEUArP+PAFUAt/+OAEgAqP+XADkAt/+KAD0Aqv+FADIAnv9NAF0Ak/+IAEsAk/+FAD8Anv9NAF0Ak/+FAD8Anf9JAFEAk/+IAEsAnf+ZAEYAnP+WADoAk/+IAEsAnP+WADoAk/+FAD8ArP88AFUArP8/AGAAnv9NAF0ArP88AFUAnv9NAF0Anf9JAFEAnv+DADMAqf9HAEUAnf9JAFEAnv+DADMAnf9JAFEAk/+FAD8Anv9NAF0Aqv9SAGgAoP+OAFYAnv9NAF0AoP+OAFYAk/+IAEsAnv9NAF0ArP8/AGAAqv9SAGgAqf9HAEUArP88AFUAnf9JAFEAoP+OAFYAnf+ZAEYAk/+IAEsAk/+FAD8AnP+WADoAnv+DADMAtP+GAKcAsv+MAJ0Apv+KAJ4AtP+GAKcApv+KAJ4AqP+EAKgAr/83AHEAu/85AHAAvP8zAHoAr/83AHEAvP8zAHoAsP8yAHsAvf88AIwAt/9zAKsAq/9xAKwAvf88AIwAq/9xAKwAsf86AI0Apv+CAIwAsv+EAIsAt/9MAGwApv+CAIwAt/9MAGwAq/9LAG0At/9zAKsAtP+GAKcAqP+EAKgAt/9zAKsAqP+EAKgAq/9xAKwApv+KAJ4Asv+MAJ0Asv+EAIsApv+KAJ4Asv+EAIsApv+CAIwAsP8yAHsAvP8zAHoAvf88AIwAsP8yAHsAvf88AIwAsf86AI0At/9MAGwAu/85AHAAr/83AHEAt/9MAGwAr/83AHEAq/9LAG0Av/+AAJQAwf96AJ8Ax/9DAIEAv/+AAJQAx/9DAIEAxf9JAHYAsv+MAJ0AtP+GAKcAwf96AJ8Asv+MAJ0Awf96AJ8Av/+AAJQAx/9DAIEAvP8zAHoAu/85AHAAx/9DAIEAu/85AHAAxf9JAHYAxf9JAHYAt/9MAGwAsv+EAIsAxf9JAHYAsv+EAIsAv/+AAJQAt/9zAKsAvf88AIwAx/9DAIEAt/9zAKsAx/9DAIEAwf96AJ8Avf88AIwAvP8zAHoAx/9DAIEAxf9JAHYAu/85AHAAt/9MAGwAwf96AJ8AtP+GAKcAt/9zAKsAsv+EAIsAsv+MAJ0Av/+AAJQAo/8+AIQAnf91AKIAm/97AJcAo/8+AIQAm/97AJcAof9DAHkAnf91AKIAqP+EAKgApv+KAJ4Anf91AKIApv+KAJ4Am/97AJcAr/83AHEAsP8yAHsAo/8+AIQAr/83AHEAo/8+AIQAof9DAHkApv+CAIwAq/9LAG0Aof9DAHkApv+CAIwAof9DAHkAm/97AJcAo/8+AIQAsf86AI0Aq/9xAKwAo/8+AIQAq/9xAKwAnf91AKIAsP8yAHsAsf86AI0Ao/8+AIQAr/83AHEAof9DAHkAq/9LAG0AqP+EAKgAnf91AKIAq/9xAKwApv+KAJ4Apv+CAIwAm/97AJcAqP++AH0Ap/+/AHEAm/++AHIAqP++AH0Am/++AHIAnP+8AH4Ar/8uAGIAu/8wAGEAvP8uAG0Ar/8uAGIAvP8uAG0AsP8tAG4Auv9FAHwArP+lAIYAoP+jAIcAuv9FAHwAoP+jAIcArv9EAH0Anf+nAGMAqf+pAGIAtv9JAFgAnf+nAGMAtv9JAFgAqv9HAFkArP+lAIYAqP++AH0AnP+8AH4ArP+lAIYAnP+8AH4AoP+jAIcAm/++AHIAp/+/AHEAqf+pAGIAm/++AHIAqf+pAGIAnf+nAGMAsP8tAG4AvP8uAG0Auv9FAHwAsP8tAG4Auv9FAHwArv9EAH0Atv9JAFgAu/8wAGEAr/8uAGIAtv9JAFgAr/8uAGIAqv9HAFkAtv+pAG0At/+oAHkAxf9IAG8Atv+pAG0Axf9IAG8Aw/9JAGMAp/+/AHEAqP++AH0At/+oAHkAp/+/AHEAt/+oAHkAtv+pAG0Axf9IAG8AvP8uAG0Au/8wAGEAxf9IAG8Au/8wAGEAw/9JAGMAw/9JAGMAtv9JAFgAqf+pAGIAw/9JAGMAqf+pAGIAtv+pAG0ArP+lAIYAuv9FAHwAxf9IAG8ArP+lAIYAxf9IAG8At/+oAHkAuv9FAHwAvP8uAG0Axf9IAG8Aw/9JAGMAu/8wAGEAtv9JAFgAt/+oAHkAqP++AH0ArP+lAIYAqf+pAGIAp/+/AHEAtv+pAG0Aof9DAHIAk/+jAHwAkv+kAHAAof9DAHIAkv+kAHAAoP9EAGYAk/+jAHwAnP+8AH4Am/++AHIAk/+jAHwAm/++AHIAkv+kAHAAr/8uAGIAsP8tAG4Aof9DAHIAr/8uAGIAof9DAHIAoP9EAGYAnf+nAGMAqv9HAFkAoP9EAGYAnf+nAGMAoP9EAGYAkv+kAHAAof9DAHIArv9EAH0AoP+jAIcAof9DAHIAoP+jAIcAk/+jAHwAsP8tAG4Arv9EAH0Aof9DAHIAr/8uAGIAoP9EAGYAqv9HAFkAnP+8AH4Ak/+jAHwAoP+jAIcAm/++AHIAnf+nAGMAkv+kAHAAi/9GAKgA0/9QAKwAsf9SAGwA0/9QAKwAi/9GAKgAyv+f/1gAaf9IAGgAi/9GAKgAsf9SAGwAi/9GAKgAaf9IAGgAyv+f/1gAj/9UACsAaf9IAGgAsf9SAGwAaf9IAGgAj/9UACsAyv+f/1gA1/9eAC8Aj/9UACsAsf9SAGwAj/9UACsA1/9eAC8Ayv+f/1gA+f9cAG8A1/9eAC8Asf9SAGwA1/9eAC8A+f9cAG8Ayv+f/1gA0/9QAKwA+f9cAG8Asf9SAGwA+f9cAG8A0/9QAKwAyv+f/1gAIwBmAOv/YwBgABQAZQBWAMn/YwBgABQAIwBmAOv/RQCc/+L/YwBgABQApQBQAPL/ZQBWAMn/pQBQAPL/YwBgABQARQCc/+L/pQBQAPL/pwBFAKf/ZQBWAMn/pwBFAKf/pQBQAPL/RQCc/+L/pwBFAKf/aABLAH7/ZQBWAMn/aABLAH7/pwBFAKf/RQCc/+L/aABLAH7/JgBbAJ//ZQBWAMn/JgBbAJ//aABLAH7/RQCc/+L/JgBbAJ//IwBmAOv/ZQBWAMn/IwBmAOv/JgBbAJ//RQCc/+L/oQCTAMH/rACMAMH/qwCLALX/oQCTAMH/qwCLALX/oACSALX/dgA5AMP/dwA6AND/bABBAND/dgA5AMP/bABBAND/awBAAMT/awBWAM7/jgCMAMT/jACLALj/awBWAM7/jACLALj/aQBUAMH/rAB2ALf/rgB4AMP/igBBAM3/rAB2ALf/igBBAM3/iQBAAMH/jgCMAMT/oQCTAMH/oACSALX/jgCMAMT/oACSALX/jACLALj/qwCLALX/rACMAMH/rgB4AMP/qwCLALX/rgB4AMP/rAB2ALf/awBAAMT/bABBAND/awBWAM7/awBAAMT/awBWAM7/aQBUAMH/igBBAM3/dwA6AND/dgA5AMP/igBBAM3/dgA5AMP/iQBAAMH/pACAAND/mgCHAND/dgBQANr/pACAAND/dgBQANr/gQBJANr/rACMAMH/oQCTAMH/mgCHAND/rACMAMH/mgCHAND/pACAAND/dgBQANr/bABBAND/dwA6AND/dgBQANr/dwA6AND/gQBJANr/gQBJANr/igBBAM3/rgB4AMP/gQBJANr/rgB4AMP/pACAAND/jgCMAMT/awBWAM7/dgBQANr/jgCMAMT/dgBQANr/mgCHAND/bABBAND/dgBQANr/awBWAM7/dwA6AND/igBBAM3/gQBJANr/oQCTAMH/jgCMAMT/mgCHAND/rACMAMH/pACAAND/rgB4AMP/cwBMALX/lgCDAKv/oAB8AKv/cwBMALX/oAB8AKv/fQBFALT/lgCDAKv/oACSALX/qwCLALX/lgCDAKv/qwCLALX/oAB8AKv/dgA5AMP/awBAAMT/cwBMALX/dgA5AMP/cwBMALX/fQBFALT/rAB2ALf/iQBAAMH/fQBFALT/rAB2ALf/fQBFALT/oAB8AKv/cwBMALX/aQBUAMH/jACLALj/cwBMALX/jACLALj/lgCDAKv/cwBMALX/awBAAMT/aQBUAMH/iQBAAMH/dgA5AMP/fQBFALT/jACLALj/oACSALX/lgCDAKv/oAB8AKv/qwCLALX/rAB2ALf/OACbAMv/RACdAMn/QwCcAL3/OACbAMv/QwCcAL3/NwCZAL7/WQA8AMb/WgA9ANL/TgA7ANT/WQA8AMb/TgA7ANT/TAA5AMf/PgBIANT/LwCIAM7/LgCHAMH/PgBIANT/LgCHAMH/PABHAMf/UwCOAL3/VACQAMn/YwBQAM//UwCOAL3/YwBQAM//YQBPAMP/LwCIAM7/OACbAMv/NwCZAL7/LwCIAM7/NwCZAL7/LgCHAMH/QwCcAL3/RACdAMn/VACQAMn/QwCcAL3/VACQAMn/UwCOAL3/TAA5AMf/TgA7ANT/PgBIANT/TAA5AMf/PgBIANT/PABHAMf/YwBQAM//WgA9ANL/WQA8AMb/YwBQAM//WQA8AMb/YQBPAMP/SQCPANf/PQCMANn/SwBMAN//SQCPANf/SwBMAN//WABPAN3/RACdAMn/OACbAMv/PQCMANn/RACdAMn/PQCMANn/SQCPANf/SwBMAN//TgA7ANT/WgA9ANL/SwBMAN//WgA9ANL/WABPAN3/WABPAN3/YwBQAM//VACQAMn/WABPAN3/VACQAMn/SQCPANf/LwCIAM7/PgBIANT/SwBMAN//LwCIAM7/SwBMAN//PQCMANn/PgBIANT/TgA7ANT/SwBMAN//WABPAN3/WgA9ANL/YwBQAM//PQCMANn/OACbAMv/LwCIAM7/VACQAMn/RACdAMn/SQCPANf/SABIALn/OQCIALP/RgCKALL/SABIALn/RgCKALL/VABLALj/OQCIALP/NwCZAL7/QwCcAL3/OQCIALP/QwCcAL3/RgCKALL/WQA8AMb/TAA5AMf/SABIALn/WQA8AMb/SABIALn/VABLALj/UwCOAL3/YQBPAMP/VABLALj/UwCOAL3/VABLALj/RgCKALL/SABIALn/PABHAMf/LgCHAMH/SABIALn/LgCHAMH/OQCIALP/TAA5AMf/PABHAMf/SABIALn/WQA8AMb/VABLALj/YQBPAMP/NwCZAL7/OQCIALP/LgCHAMH/QwCcAL3/UwCOAL3/RgCKALL/cwDGAMD/fwDEAL//fgDDALL/cwDGAMD/fgDDALL/cgDFALP/ZAAvAMb/ZQAwANP/WQAyANT/ZAAvAMb/WQAyANT/WAAxAMf/UQBNANH/YgCwAMT/YQCvALj/UQBNANH/YQCvALj/UABMAMX/hgCoALX/iACpAMH/dgBGAM//hgCoALX/dgBGAM//dQBFAML/YgCwAMT/cwDGAMD/cgDFALP/YgCwAMT/cgDFALP/YQCvALj/fgDDALL/fwDEAL//iACpAMH/fgDDALL/iACpAMH/hgCoALX/WAAxAMf/WQAyANT/UQBNANH/WAAxAMf/UQBNANH/UABMAMX/dgBGAM//ZQAwANP/ZAAvAMb/dgBGAM//ZAAvAMb/dQBFAML/fACtAM//cACvAND/XwBMAN3/fACtAM//XwBMAN3/awBKANz/fwDEAL//cwDGAMD/cACvAND/fwDEAL//cACvAND/fACtAM//XwBMAN3/WQAyANT/ZQAwANP/XwBMAN3/ZQAwANP/awBKANz/awBKANz/dgBGAM//iACpAMH/awBKANz/iACpAMH/fACtAM//YgCwAMT/UQBNANH/XwBMAN3/YgCwAMT/XwBMAN3/cACvAND/UQBNANH/WQAyANT/XwBMAN3/awBKANz/ZQAwANP/dgBGAM//cACvAND/cwDGAMD/YgCwAMT/iACpAMH/fwDEAL//fACtAM//WwBIALf/bACrAKr/eQCpAKn/WwBIALf/eQCpAKn/ZwBGALf/bACrAKr/cgDFALP/fgDDALL/bACrAKr/fgDDALL/eQCpAKn/ZAAvAMb/WAAxAMf/WwBIALf/ZAAvAMb/WwBIALf/ZwBGALf/hgCoALX/dQBFAML/ZwBGALf/hgCoALX/ZwBGALf/eQCpAKn/WwBIALf/UABMAMX/YQCvALj/WwBIALf/YQCvALj/bACrAKr/WAAxAMf/UABMAMX/WwBIALf/ZAAvAMb/ZwBGALf/dQBFAML/cgDFALP/bACrAKr/YQCvALj/fgDDALL/hgCoALX/eQCpAKn/JgBbAJ//IwBmAOv/ZQBWAMn/IwBmAOv/JgBbAJ//RQCc/+L/aABLAH7/JgBbAJ//ZQBWAMn/JgBbAJ//aABLAH7/RQCc/+L/pwBFAKf/aABLAH7/ZQBWAMn/aABLAH7/pwBFAKf/RQCc/+L/pQBQAPL/pwBFAKf/ZQBWAMn/pwBFAKf/pQBQAPL/RQCc/+L/YwBgABQApQBQAPL/ZQBWAMn/pQBQAPL/YwBgABQARQCc/+L/IwBmAOv/YwBgABQAZQBWAMn/YwBgABQAIwBmAOv/RQCc/+L/",c:"DAwBAQwMDAwMDAQEBAQEBAwMDAwMDAwMDAwMDAQEDAwEBAwMDAwMDAwMBAQVERURFREVERURFREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEQgRCBEVEQgRCBEVERURFREVERURFREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEQgRCBEVEQgRCBEVERURFREVERURFREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEQgRCBEVEQgRCBE="},"orto-terra":{v:"4P4AAAAB4P4AAAAB4P4AAAD/4P4AAAAB4P4AAAD/4P4AAAD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/wD/AAHg/wD/AAHg/wABAP/g/wD/AAHg/wABAP/g/wABAAEAACABAAEAACABAP8AACABAAEAACABAP8AACABAP8AACABAAEAAOD+AAEAAOD+AP8AAOD+AAEAAOD+AP8AAOD+AP8AAOD+4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+AP/g/wD/AP/g/wAB4P4AAAABAP/g/wD/4P4AAAAB4P4AAAD/AP/g/wABAAHg/wABAAEAACABAP/g/wABAAEAACABAP8AACABAAEAAOD+AAHg/wD/AP/g/wD/AAEAAOD+AP/g/wD/AP8AAOD+AP8AAOD+AP8AAOD+4P4AAAD/AP8AAOD+4P4AAAD/4P4AAAD/AP8AACABAP8AACAB4P4AAAABAP8AACAB4P4AAAAB4P4AAAABAP/g/wABAP8AACAB4P4AAAABAP/g/wD/4P4AAAD/AP8AAOD+AP8gAAAB4P4AAAABAP8AACABAP8gAAD/AP8AAOD+4P4AAAD/IAEAAAABIAEAAAABIAEAAAD/IAEAAAABIAEAAAD/IAEAAAD/AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/IAEAAAABAAHg/wABAAHg/wD/IAEAAAABAAHg/wD/IAEAAAD/AAEAAOD+AAEAAOD+IAEAAAD/AAEAAOD+IAEAAAD/IAEAAAD/AAEAACABAAEAACABIAEAAAABAAEAACABIAEAAAABIAEAAAABAAEAACABAAHg/wABIAEAAAABIAEAAAD/AAHg/wD/AAEAAOD+IAEAAAABAAEgAAABAAEAACABAAEAAOD+AAEgAAD/IAEAAAD/",c:"DAwBAQwMDAwMDAQEBAQEBAwMDAwMDAwMDAwMDAQEDAwEBAwMDAwMDAwMBAQ="},"gatto-corpo":{v:"/f8gAHD/fQAgALj//f8gAAAAfQAgALj//f8gAHD//f8gAwAAff8gALj//f8gAHD//f8gAAAA/f8gAHD/ff8gALj//f8gAwAAff8gAEgAff8gALj//f8gAAAAff8gALj/ff8gAEgA/f8gAwAA/f8gAJAAff8gAEgA/f8gAAAAff8gAEgA/f8gAJAA/f8gAwAAfQAgAEgA/f8gAJAA/f8gAAAA/f8gAJAAfQAgAEgA/f8gAwAAfQAgALj/fQAgAEgA/f8gAAAAfQAgAEgAfQAgALj//f8gAwAA",c:"ExMTExMTExMTExMT"},"gatto-testa":{v:"mwAeA77/PgAeA2H//f9gAwAAmwAeA77/3QCAAqP/WQCAAiD/mwAeA77/WQCAAiD/PgAeA2H/3QCAAqP/mwDiAb7/PgDiAWH/3QCAAqP/PgDiAWH/WQCAAiD/PgDiAWH/mwDiAb7//f+gAQAAPgAeA2H/u/8eA2H//f9gAwAAPgAeA2H/WQCAAiD/oP+AAiD/PgAeA2H/oP+AAiD/u/8eA2H/WQCAAiD/PgDiAWH/u//iAWH/WQCAAiD/u//iAWH/oP+AAiD/u//iAWH/PgDiAWH//f+gAQAAu/8eA2H/Xv8eA77//f9gAwAAu/8eA2H/oP+AAiD/Hf+AAqP/u/8eA2H/Hf+AAqP/Xv8eA77/oP+AAiD/u//iAWH/Xv/iAb7/oP+AAiD/Xv/iAb7/Hf+AAqP/Xv/iAb7/u//iAWH//f+gAQAAXv8eA77/Xv8eA0EA/f9gAwAAXv8eA77/Hf+AAqP/Hf+AAl0AXv8eA77/Hf+AAl0AXv8eA0EAHf+AAqP/Xv/iAb7/Xv/iAUEAHf+AAqP/Xv/iAUEAHf+AAl0AXv/iAUEAXv/iAb7//f+gAQAAXv8eA0EAu/8eA54A/f9gAwAAXv8eA0EARP/fAkwAsP/fArgAXv8eA0EAsP/fArgAu/8eA54ARP/fAkwAHf+AAl0Ac/+AArMARP/fAkwAc/+AArMAjv/fApcAq/+/AsYAsP/fArgAjv/fApcAq/+/AsYAjv/fApcAhf+/AqAAc/+AArMAoP+AAuAAq/+/AsYAc/+AArMAq/+/AsYAhf+/AqAAHf+AAl0AXv/iAUEAu//iAZ4AHf+AAl0Au//iAZ4AoP+AAuAAu//iAZ4AXv/iAUEA/f+gAQAAu/8eA54APgAeA54A/f9gAwAAu/8eA54AoP+AAuAAWQCAAuAAu/8eA54AWQCAAuAAPgAeA54AoP+AAuAAu//iAZ4APgDiAZ4AoP+AAuAAPgDiAZ4AWQCAAuAAPgDiAZ4Au//iAZ4A/f+gAQAAPgAeA54AmwAeA0EA/f9gAwAAPgAeA54ASQDfArgAtQDfAkwAPgAeA54AtQDfAkwAmwAeA0EASQDfArgATwC/AsYAdAC/AqAASQDfArgAdAC/AqAAawDfApcAhwCAArMA3QCAAl0AtQDfAkwAhwCAArMAtQDfAkwAawDfApcATwC/AsYAWQCAAuAAhwCAArMATwC/AsYAhwCAArMAdAC/AqAAWQCAAuAAPgDiAZ4AmwDiAUEAWQCAAuAAmwDiAUEA3QCAAl0AmwDiAUEAPgDiAZ4A/f+gAQAAmwAeA0EAmwAeA77//f9gAwAAmwAeA0EA3QCAAl0A3QCAAqP/mwAeA0EA3QCAAqP/mwAeA77/3QCAAl0AmwDiAUEAmwDiAb7/3QCAAl0AmwDiAb7/3QCAAqP/mwDiAb7/mwDiAUEA/f+gAQAAfQCAAqD/3QCAAtD/fQCAAgAA3QCAAtD/fQCAAqD/fQAmBAAAHQCAAtD/fQCAAqD/fQCAAgAAfQCAAqD/HQCAAtD/fQAmBAAAHQCAAjAAHQCAAtD/fQCAAgAAHQCAAtD/HQCAAjAAfQAmBAAAfQCAAmAAHQCAAjAAfQCAAgAAHQCAAjAAfQCAAmAAfQAmBAAA3QCAAjAAfQCAAmAAfQCAAgAAfQCAAmAA3QCAAjAAfQAmBAAA3QCAAtD/3QCAAjAAfQCAAgAA3QCAAjAA3QCAAtD/fQAmBAAAff+AAqD/3f+AAtD/ff+AAgAA3f+AAtD/ff+AAqD/ff8mBAAAHf+AAtD/ff+AAqD/ff+AAgAAff+AAqD/Hf+AAtD/ff8mBAAAHf+AAjAAHf+AAtD/ff+AAgAAHf+AAtD/Hf+AAjAAff8mBAAAff+AAmAAHf+AAjAAff+AAgAAHf+AAjAAff+AAmAAff8mBAAA3f+AAjAAff+AAmAAff+AAgAAff+AAmAA3f+AAjAAff8mBAAA3f+AAtD/3f+AAjAAff+AAgAA3f+AAjAA3f+AAtD/ff8mBAAAOAD7AYIAXQA8At0A/f/4AegAXQA8At0A/f9lAhYB/f/4AegA/f9lAhYBnf88At0A/f/4AegAnf88At0Awf/7AYIA/f/4AegAwf/7AYIAOAD7AYIA/f/4AegAXQA8At0AOACsAssA/f9lAhYBOAD7AYIAXQBqAm8AXQA8At0Awf/7AYIA/f9BAjcAOAD7AYIAnf88At0Anf9qAm8Awf/7AYIA/f9lAhYBwf+sAssAnf88At0AOACsAssAXQBqAm8A/f+vAmQAXQBqAm8A/f9BAjcA/f+vAmQA/f9BAjcAnf9qAm8A/f+vAmQAnf9qAm8Awf+sAssA/f+vAmQAwf+sAssAOACsAssA/f+vAmQAOACsAssAXQA8At0AXQBqAm8AXQBqAm8AOAD7AYIA/f9BAjcA/f9BAjcAwf/7AYIAnf9qAm8Anf9qAm8Anf88At0Awf+sAssAwf+sAssA/f9lAhYBOACsAssA",c:"AgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXFyAgAgICAgICAgICAgICFxcCAiAgAgICAgICAgICAgICAgICAhYCFgICAgICAgICAhYCFgICAgICAgICAgICAgICAgICAgICAhY="},"gatto-coda":{v:"6f89Afb+6f86AfX+6f8vAQX/6f9kASr/6f9TAQ3/6f89Afb+6f9CAYv/6f9oAWP/6f9kASr/6f/qAGr/6f8PAYf/6f9CAYv/6f/JALj/6f/EAKz/6f++AKD/6f/FALv/6f/IALv/6f/JALj/6f+YALD/6f+jAMH/6f+2AL3/6f+6ADX/6f+PAGj/6f+YALD/6f8SAVf/6f/uADj/6f+6ADX/6f8jARH/6f8jART/6f8vASH/6f89Afb+6f8vAQX/6f8jARH/6f/FALv/6f/JALj/6f++AKD/6f+YALD/6f+2AL3/6f/FALv/6f89Afb+6f8jARH/6f8vASH/6f+YALD/6f/FALv/6f++AKD/6f89Afb+6f8vASH/6f9AATn/6f+YALD/6f++AKD/6f/IAGD/6f9kASr/6f89Afb+6f9AATn/6f+6ADX/6f+YALD/6f/IAGD/6f9kASr/6f9AATn/6f8zAWL/6f+6ADX/6f/IAGD/6f/qAGr/6f9CAYv/6f9kASr/6f8zAWL/6f+6ADX/6f/qAGr/6f9CAYv/6f9CAYv/6f8zAWL/6f8SAVf/6f8SAVf/6f+6ADX/6f9CAYv/EAAvAQX/EAA6AfX+EAA9Afb+EAA9Afb+EABTAQ3/EABkASr/EABkASr/EABoAWP/EABCAYv/EABCAYv/EAAPAYf/EADqAGr/EAC+AKD/EADEAKz/EADJALj/EADJALj/EADIALv/EADFALv/EAC2AL3/EACjAMH/EACYALD/EACYALD/EACPAGj/EAC6ADX/EAC6ADX/EADuADj/EAASAVf/EAAvASH/EAAjART/EAAjARH/EAAjARH/EAAvAQX/EAA9Afb+EAC+AKD/EADJALj/EADFALv/EADFALv/EAC2AL3/EACYALD/EAAvASH/EAAjARH/EAA9Afb+EAC+AKD/EADFALv/EACYALD/EABAATn/EAAvASH/EAA9Afb+EADIAGD/EAC+AKD/EACYALD/EABAATn/EAA9Afb+EABkASr/EADIAGD/EACYALD/EAC6ADX/EAAzAWL/EABAATn/EABkASr/EADqAGr/EADIAGD/EAC6ADX/EAAzAWL/EABkASr/EABCAYv/EABCAYv/EADqAGr/EAC6ADX/EAASAVf/EAAzAWL/EABCAYv/EABCAYv/EAC6ADX/EAASAVf/6f89Afb+6f9TAQ3//f9BAe/+6f9TAQ3//f9ZAQj//f9BAe/+/f9BAe/+/f9ZAQj//f9BAe/+/f9ZAQj//f9ZAQj//f9BAe/+/f9BAe/+/f9ZAQj/EAA9Afb+/f9ZAQj/EABTAQ3/EAA9Afb+6f9TAQ3/6f9kASr//f9ZAQj/6f9kASr//f9sASj//f9ZAQj//f9ZAQj//f9sASj//f9ZAQj//f9sASj//f9sASj//f9ZAQj//f9ZAQj//f9sASj/EABTAQ3//f9sASj/EABkASr/EABTAQ3/6f9kASr/6f9oAWP//f9sASj/6f9oAWP//f9wAWf//f9sASj//f9sASj//f9wAWf//f9sASj//f9wAWf//f9wAWf//f9sASj//f9sASj//f9wAWf/EABkASr//f9wAWf/EABoAWP/EABkASr/6f9oAWP/6f9CAYv//f9wAWf/6f9CAYv//f9GAZP//f9wAWf//f9wAWf//f9GAZP//f9wAWf//f9GAZP//f9GAZP//f9wAWf//f9wAWf//f9GAZP/EABoAWP//f9GAZP/EABCAYv/EABoAWP/6f9CAYv/6f8PAYf//f9GAZP/6f8PAYf//f8NAY///f9GAZP//f9GAZP//f8NAY///f9GAZP//f8NAY///f8NAY///f9GAZP//f9GAZP//f8NAY//EABCAYv//f8NAY//EAAPAYf/EABCAYv/6f8PAYf/6f/qAGr//f8NAY//6f/qAGr//f/nAHH//f8NAY///f8NAY///f/nAHH//f8NAY///f/nAHH//f/nAHH//f8NAY///f8NAY///f/nAHH/EAAPAYf//f/nAHH/EADqAGr/EAAPAYf/6f/qAGr/6f/IAGD//f/nAHH/6f/IAGD//f/OAGr//f/nAHH//f/nAHH//f/OAGr//f/nAHH//f/OAGr//f/OAGr//f/nAHH//f/nAHH//f/OAGr/EADqAGr//f/OAGr/EADIAGD/EADqAGr/6f/IAGD/6f++AKD//f/OAGr/6f++AKD//f/GAJ///f/OAGr//f/OAGr//f/GAJ///f/OAGr//f/GAJ///f/GAJ///f/OAGr//f/OAGr//f/GAJ//EADIAGD//f/GAJ//EAC+AKD/EADIAGD/6f++AKD/6f/EAKz//f/GAJ//6f/EAKz//f/LAKj//f/GAJ///f/GAJ///f/LAKj//f/GAJ///f/LAKj//f/LAKj//f/GAJ///f/GAJ///f/LAKj/EAC+AKD//f/LAKj/EADEAKz/EAC+AKD/6f/EAKz/6f/JALj//f/LAKj/6f/JALj//f/SALf//f/LAKj//f/LAKj//f/SALf//f/LAKj//f/SALf//f/SALf//f/LAKj//f/LAKj//f/SALf/EADEAKz//f/SALf/EADJALj/EADEAKz/6f/JALj/6f/IALv//f/SALf/6f/IALv//f/OAML//f/SALf//f/SALf//f/OAML//f/SALf//f/OAML//f/OAML//f/SALf//f/SALf//f/OAML/EADJALj//f/OAML/EADIALv/EADJALj/6f/IALv/6f/FALv//f/OAML/6f/FALv//f/HAMT//f/OAML//f/OAML//f/HAMT//f/OAML//f/HAMT//f/HAMT//f/OAML//f/OAML//f/HAMT/EADIALv//f/HAMT/EADFALv/EADIALv/6f/FALv/6f+2AL3//f/HAMT/6f+2AL3//f+3AMX//f/HAMT//f/HAMT//f+3AMX//f/HAMT//f+3AMX//f+3AMX//f/HAMT//f/HAMT//f+3AMX/EADFALv//f+3AMX/EAC2AL3/EADFALv/6f+2AL3/6f+jAMH//f+3AMX/6f+jAMH//f+gAMr//f+3AMX//f+3AMX//f+gAMr//f+3AMX//f+gAMr//f+gAMr//f+3AMX//f+3AMX//f+gAMr/EAC2AL3//f+gAMr/EACjAMH/EAC2AL3/6f+jAMH/6f+YALD//f+gAMr/6f+YALD//f+QALP//f+gAMr//f+gAMr//f+QALP//f+gAMr//f+QALP//f+QALP//f+gAMr//f+gAMr//f+QALP/EACjAMH//f+QALP/EACYALD/EACjAMH/6f+YALD/6f+PAGj//f+QALP/6f+PAGj//f+HAGX//f+QALP//f+QALP//f+HAGX//f+QALP//f+HAGX//f+HAGX//f+QALP//f+QALP//f+HAGX/EACYALD//f+HAGX/EACPAGj/EACYALD/6f+PAGj/6f+6ADX//f+HAGX/6f+6ADX//f+2ACz//f+HAGX//f+HAGX//f+2ACz//f+HAGX//f+2ACz//f+2ACz//f+HAGX//f+HAGX//f+2ACz/EACPAGj//f+2ACz/EAC6ADX/EACPAGj/6f+6ADX/6f/uADj//f+2ACz/6f/uADj//f/wADD//f+2ACz//f+2ACz//f/wADD//f+2ACz//f/wADD//f/wADD//f+2ACz//f+2ACz//f/wADD/EAC6ADX//f/wADD/EADuADj/EAC6ADX/6f/uADj/6f8SAVf//f/wADD/6f8SAVf//f8WAVD//f/wADD//f/wADD//f8WAVD//f/wADD//f8WAVD//f8WAVD//f/wADD//f/wADD//f8WAVD/EADuADj//f8WAVD/EAASAVf/EADuADj/6f8SAVf/6f8zAWL//f8WAVD/6f8zAWL//f8uAVj//f8WAVD//f8WAVD//f8uAVj//f8WAVD//f8uAVj//f8uAVj//f8WAVD//f8WAVD//f8uAVj/EAASAVf//f8uAVj/EAAzAWL/EAASAVf/6f8zAWL/6f9AATn//f8uAVj/6f9AATn//f83ATr//f8uAVj//f8uAVj//f83ATr//f8uAVj//f83ATr//f83ATr//f8uAVj//f8uAVj//f83ATr/EAAzAWL//f83ATr/EABAATn/EAAzAWL/6f9AATn/6f8vASH//f83ATr/6f8vASH//f8pASb//f83ATr//f83ATr//f8pASb//f83ATr//f8pASb//f8pASb//f83ATr//f83ATr//f8pASb/EABAATn//f8pASb/EAAvASH/EABAATn/6f8vASH/6f8jART//f8pASb/6f8jART//f8bARb//f8pASb//f8pASb//f8bARb//f8pASb//f8bARb//f8bARb//f8pASb//f8pASb//f8bARb/EAAvASH//f8bARb/EAAjART/EAAvASH/6f8jART/6f8jARH//f8bARb/6f8jARH//f8cAQ3//f8bARb//f8bARb//f8cAQ3//f8bARb//f8cAQ3//f8cAQ3//f8bARb//f8bARb//f8cAQ3/EAAjART//f8cAQ3/EAAjARH/EAAjART/6f8jARH/6f8vAQX//f8cAQ3/6f8vAQX//f8pAf/+/f8cAQ3//f8cAQ3//f8pAf/+/f8cAQ3//f8pAf/+/f8pAf/+/f8cAQ3//f8cAQ3//f8pAf/+EAAjARH//f8pAf/+EAAvAQX/EAAjARH/6f8vAQX/6f86AfX+/f8pAf/+6f86AfX+/f83Aez+/f8pAf/+/f8pAf/+/f83Aez+/f8pAf/+/f83Aez+/f83Aez+/f8pAf/+/f8pAf/+/f83Aez+EAAvAQX//f83Aez+EAA6AfX+EAAvAQX/6f86AfX+6f89Afb+/f83Aez+6f89Afb+/f9BAe/+/f83Aez+/f83Aez+/f9BAe/+/f83Aez+/f9BAe/+/f9BAe/+/f83Aez+/f83Aez+/f9BAe/+EAA6AfX+/f9BAe/+EAA9Afb+EAA6AfX+",c:"AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI="},"gatto-mano-a":{v:"df9rARUAVP9fAfb/Pf+KASEAdf9rARUAjf8zASEAXv8hAfb/df9rARUAXv8hAfb/VP9fAfb/jf8zASEAdf8DAUAAVP/2ACEAjf8zASEAVP/2ACEAXv8hAfb/VP/2ACEAdf8DAUAAPf/2AF4AVP9fAfb/Jf9fAfb/Pf+KASEAVP9fAfb/Xv8hAfb/HP8hAfb/VP9fAfb/HP8hAfb/Jf9fAfb/Xv8hAfb/VP/2ACEAJf/2ACEAXv8hAfb/Jf/2ACEAHP8hAfb/Jf/2ACEAVP/2ACEAPf/2AF4AJf9fAfb/BP9rARUAPf+KASEAJf9fAfb/HP8hAfb/7f4zASEAJf9fAfb/7f4zASEABP9rARUAHP8hAfb/Jf/2ACEABP8DAUAAHP8hAfb/BP8DAUAA7f4zASEABP8DAUAAJf/2ACEAPf/2AF4ABP9rARUABP99AUAAPf+KASEABP9rARUA7f4zASEA7f5NAV4ABP9rARUA7f5NAV4ABP99AUAA7f4zASEABP8DAUAABP8VAWsA7f4zASEABP8VAWsA7f5NAV4ABP8VAWsABP8DAUAAPf/2AF4ABP99AUAAJf+KAV4APf+KASEABP99AUAA7f5NAV4AHP9fAYoABP99AUAAHP9fAYoAJf+KAV4A7f5NAV4ABP8VAWsAJf8hAYoA7f5NAV4AJf8hAYoAHP9fAYoAJf8hAYoABP8VAWsAPf/2AF4AJf+KAV4AVP+KAV4APf+KASEAJf+KAV4AHP9fAYoAXv9fAYoAJf+KAV4AXv9fAYoAVP+KAV4AHP9fAYoAJf8hAYoAVP8hAYoAHP9fAYoAVP8hAYoAXv9fAYoAVP8hAYoAJf8hAYoAPf/2AF4AVP+KAV4Adf99AUAAPf+KASEAVP+KAV4AXv9fAYoAjf9NAV4AVP+KAV4Ajf9NAV4Adf99AUAAXv9fAYoAVP8hAYoAdf8VAWsAXv9fAYoAdf8VAWsAjf9NAV4Adf8VAWsAVP8hAYoAPf/2AF4Adf99AUAAdf9rARUAPf+KASEAdf99AUAAjf9NAV4Ajf8zASEAdf99AUAAjf8zASEAdf9rARUAjf9NAV4Adf8VAWsAdf8DAUAAjf9NAV4Adf8DAUAAjf8zASEAdf8DAUAAdf8VAWsAPf/2AF4A",c:"AgICAgICAgICAgICAgICAgICAgICAgICAhYWFhYCAhYWFhYCAhYWFhYCAgICAgIC"},"gatto-mano-b":{v:"9QBrARUA1ABfAfb/vQCKASEA9QBrARUADQEzASEA3gAhAfb/9QBrARUA3gAhAfb/1ABfAfb/DQEzASEA9QADAUAA1AD2ACEADQEzASEA1AD2ACEA3gAhAfb/1AD2ACEA9QADAUAAvQD2AF4A1ABfAfb/pQBfAfb/vQCKASEA1ABfAfb/3gAhAfb/nAAhAfb/1ABfAfb/nAAhAfb/pQBfAfb/3gAhAfb/1AD2ACEApQD2ACEA3gAhAfb/pQD2ACEAnAAhAfb/pQD2ACEA1AD2ACEAvQD2AF4ApQBfAfb/hABrARUAvQCKASEApQBfAfb/nAAhAfb/bQAzASEApQBfAfb/bQAzASEAhABrARUAnAAhAfb/pQD2ACEAhAADAUAAnAAhAfb/hAADAUAAbQAzASEAhAADAUAApQD2ACEAvQD2AF4AhABrARUAhAB9AUAAvQCKASEAhABrARUAbQAzASEAbQBNAV4AhABrARUAbQBNAV4AhAB9AUAAbQAzASEAhAADAUAAhAAVAWsAbQAzASEAhAAVAWsAbQBNAV4AhAAVAWsAhAADAUAAvQD2AF4AhAB9AUAApQCKAV4AvQCKASEAhAB9AUAAbQBNAV4AnABfAYoAhAB9AUAAnABfAYoApQCKAV4AbQBNAV4AhAAVAWsApQAhAYoAbQBNAV4ApQAhAYoAnABfAYoApQAhAYoAhAAVAWsAvQD2AF4ApQCKAV4A1ACKAV4AvQCKASEApQCKAV4AnABfAYoA3gBfAYoApQCKAV4A3gBfAYoA1ACKAV4AnABfAYoApQAhAYoA1AAhAYoAnABfAYoA1AAhAYoA3gBfAYoA1AAhAYoApQAhAYoAvQD2AF4A1ACKAV4A9QB9AUAAvQCKASEA1ACKAV4A3gBfAYoADQFNAV4A1ACKAV4ADQFNAV4A9QB9AUAA3gBfAYoA1AAhAYoA9QAVAWsA3gBfAYoA9QAVAWsADQFNAV4A9QAVAWsA1AAhAYoAvQD2AF4A9QB9AUAA9QBrARUAvQCKASEA9QB9AUAADQFNAV4ADQEzASEA9QB9AUAADQEzASEA9QBrARUADQFNAV4A9QAVAWsA9QADAUAADQFNAV4A9QADAUAADQEzASEA9QADAUAA9QAVAWsAvQD2AF4A",c:"AgICAgICAgICAgICAgICAgICAgICAgICAhYWFhYCAhYWFhYCAhYWFhYCAgICAgIC"},retino:{v:"+v+O/48A+v+tAXD++v+SAVX++v+O/48A+v+SAVX++v9z/3QAIQCSAVX+IQCtAXD+IQCO/48AIQCSAVX+IQCO/48AIQBz/3QAIQCtAXD++v+tAXD++v+O/48AIQCtAXD++v+O/48AIQCO/48A+v9z/3QA+v+SAVX+IQCSAVX++v9z/3QAIQCSAVX+IQBz/3QA+v+SAVX++v+tAXD+IQCtAXD++v+SAVX+IQCtAXD+IQCSAVX+IQCO/48A+v+O/48A+v9z/3QAIQCO/48A+v9z/3QAIQBz/3QAt/+6AjH9Pv9kAoj9Pv97Ap79t/+6AjH9Pv97Ap79t//RAkj9yf+zAmb9aP9uAqv9aP9YApT9yf+zAmb9aP9YApT9yf+cAk/9yf+cAk/9aP9YApT9Pv9kAoj9yf+cAk/9Pv9kAoj9t/+6AjH9t//RAkj9Pv97Ap79aP9uAqv9t//RAkj9aP9uAqv9yf+zAmb9Pv9kAoj9Pv/qAQH+Pv8BAhj+Pv9kAoj9Pv8BAhj+Pv97Ap79aP9uAqv9aP8NAgz+aP/3AfX9aP9uAqv9aP/3AfX9aP9YApT9aP9YApT9aP/3AfX9Pv/qAQH+aP9YApT9Pv/qAQH+Pv9kAoj9Pv97Ap79Pv8BAhj+aP8NAgz+Pv97Ap79aP8NAgz+aP9uAqv9Pv/qAQH+t/+UAVj+t/+rAW7+Pv/qAQH+t/+rAW7+Pv8BAhj+aP8NAgz+yf/JAVD+yf+yATr+aP8NAgz+yf+yATr+aP/3AfX9aP/3AfX9yf+yATr+t/+UAVj+aP/3AfX9t/+UAVj+Pv/qAQH+Pv8BAhj+t/+rAW7+yf/JAVD+Pv8BAhj+yf/JAVD+aP8NAgz+t/+UAVj+ZACUAVj+ZACrAW7+t/+UAVj+ZACrAW7+t/+rAW7+yf/JAVD+UgDJAVD+UgCyATr+yf/JAVD+UgCyATr+yf+yATr+yf+yATr+UgCyATr+ZACUAVj+yf+yATr+ZACUAVj+t/+UAVj+t/+rAW7+ZACrAW7+UgDJAVD+t/+rAW7+UgDJAVD+yf/JAVD+ZACUAVj+3gDqAQH+3gABAhj+ZACUAVj+3gABAhj+ZACrAW7+UgDJAVD+swANAgz+swD3AfX9UgDJAVD+swD3AfX9UgCyATr+UgCyATr+swD3AfX93gDqAQH+UgCyATr+3gDqAQH+ZACUAVj+ZACrAW7+3gABAhj+swANAgz+ZACrAW7+swANAgz+UgDJAVD+3gDqAQH+3gBkAoj93gB7Ap793gDqAQH+3gB7Ap793gABAhj+swANAgz+swBuAqv9swBYApT9swANAgz+swBYApT9swD3AfX9swD3AfX9swBYApT93gBkAoj9swD3AfX93gBkAoj93gDqAQH+3gABAhj+3gB7Ap79swBuAqv93gABAhj+swBuAqv9swANAgz+3gBkAoj9ZAC6AjH9ZADRAkj93gBkAoj9ZADRAkj93gB7Ap79swBuAqv9UgCzAmb9UgCcAk/9swBuAqv9UgCcAk/9swBYApT9swBYApT9UgCcAk/9ZAC6AjH9swBYApT9ZAC6AjH93gBkAoj93gB7Ap79ZADRAkj9UgCzAmb93gB7Ap79UgCzAmb9swBuAqv9ZAC6AjH9t/+6AjH9t//RAkj9ZAC6AjH9t//RAkj9ZADRAkj9UgCzAmb9yf+zAmb9yf+cAk/9UgCzAmb9yf+cAk/9UgCcAk/9UgCcAk/9yf+cAk/9t/+6AjH9UgCcAk/9t/+6AjH9ZAC6AjH9ZADRAkj9t//RAkj9yf+zAmb9ZADRAkj9yf+zAmb9UgCzAmb97v9+AbL+7v/YAVj+7v+rASr+7v9+AbL+7v+rASr+7v9QAYX+LgCrASr+LgDYAVj+LgB+AbL+LgCrASr+LgB+AbL+LgBQAYX+LgDYAVj+7v/YAVj+7v9+AbL+LgDYAVj+7v9+AbL+LgB+AbL+7v9QAYX+7v+rASr+LgCrASr+7v9QAYX+LgCrASr+LgBQAYX+7v+rASr+7v/YAVj+LgDYAVj+7v+rASr+LgDYAVj+LgCrASr+LgB+AbL+7v9+AbL+7v9QAYX+LgB+AbL+7v9QAYX+LgBQAYX+7v+M/6QA7v9uAML/7v9BAJT/7v+M/6QA7v9BAJT/7v9e/3cALgBBAJT/LgBuAML/LgCM/6QALgBBAJT/LgCM/6QALgBe/3cALgBuAML/7v9uAML/7v+M/6QALgBuAML/7v+M/6QALgCM/6QA7v9e/3cA7v9BAJT/LgBBAJT/7v9e/3cALgBBAJT/LgBe/3cA7v9BAJT/7v9uAML/LgBuAML/7v9BAJT/LgBuAML/LgBBAJT/LgCM/6QA7v+M/6QA7v9e/3cALgCM/6QA7v9e/3cALgBe/3cADgCWAVr+e//BAS/+DgB0ARL9fP/zAZD9DgB0ARL9p/+qAdn9dv/JASf+kP+2AQT+e//BAS/+av/eARL+n/+3Acz9p/+qAdn9av/eARL+p/+qAdn9kP+2AQT+av/eARL+kP+2AQT+dv/JASf+Xv/zAf39k//MAbf9n/+3Acz9Xv/zAf39n/+3Acz9av/eARL+Uf8IAuj9h//hAaL9k//MAbf9Uf8IAuj9k//MAbf9Xv/zAf39Rf8dAtP9cP/9AZv9fP/zAZD9Rf8dAtP9fP/zAZD9h//hAaL9Rf8dAtP9h//hAaL9Uf8IAuj9Pv8pAsf9cP/9AZv9Rf8dAtP9e//BAS/+Pv8pAsf9Pv8pAsf9e//BAS/+Pv8pAsf9e//BAS/++/+ZARz9DgB0ARL95P+ZATb9+/+ZARz95P+ZATb95f+kATH95/+/ASb9+/+ZARz95f+kATH95P+ZATb9xP+1AVL95f+kATH95f/CASf95/+/ASb95f+kATH95f/CASf95f+kATH9xP+1AVL95f/CASf9xP+1AVL9kf/hAX795f/CASf9kf/hAX79kv/tAXn9m/9TAk795f/CASf9kv/tAXn9Pv8pAsf9e/+RAl/9m/9TAk79Pv8pAsf9m/9TAk79kf/hAX79e/+RAl/9DgC9AjT9DgB0ARL9DgC9AjT9oQCRAl/9DgB0ARL9nwDzAZD9DgB0ARL9dQA8Akj9pQCKAmb9iwBnAlP9oQCRAl/9sQB1Anv9fAAvAlX9dQA8Akj9sQB1Anv9dQA8Akj9iwBnAlP9sQB1Anv9iwBnAlP9pQCKAmb9vgBgApD9iAAaAmr9fAAvAlX9vgBgApD9fAAvAlX9sQB1Anv9ygBLAqX9lQAFAn79iAAaAmr9ygBLAqX9iAAaAmr9vgBgApD91gA2Arr9qwD9AZv9nwDzAZD91gA2Arr9nwDzAZD9lQAFAn791gA2Arr9lQAFAn79ygBLAqX93gApAsf9qwD9AZv91gA2Arr9oQCRAl/93gApAsf93gApAsf9oQCRAl/93gApAsf9oQCRAl/9NACJAVz9DgB0ARL9NwCZATb9NwCZATb9VwC1AVL9NgCUAUH9NgCKAWD9NACJAVz9NgCUAUH9NgCKAWD9NgCUAUH9VwC1AVL9NgCKAWD9VwC1AVL9igDhAX79NgCKAWD9igDhAX79iQDcAYr9gQCxAfH9NgCKAWD9iQDcAYr93gApAsf9oQDBAS/+gQCxAfH93gApAsf9gQCxAfH9igDhAX79oQDBAS/+DgCWAVr+DgB0ARL9",c:"BQUFBQUFBQUFBQUFBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBhsYGBwcHBgYISEcHBwYGBgGBhsbGBgYGBsbGxgbGBgcHBwYGCEhHBwcGBgYGxsYGBgYGxsbGA=="},canna:{v:"N/88/0r/kf86APb/qf8TACMAN/88/0r/qf8TACMAT/8V/3f/cP8TAEEAWP86ABQA/v48/2f/cP8TAEEA/v48/2f/Fv8V/5T/WP86ABQAkf86APb/N/88/0r/WP86ABQAN/88/0r//v48/2f/T/8V/3f/qf8TACMAcP8TAEEAT/8V/3f/cP8TAEEAFv8V/5T/qf8TACMAkf86APb/WP86ABQAqf8TACMAWP86ABQAcP8TAEEA/v48/2f/N/88/0r/T/8V/3f//v48/2f/T/8V/3f/Fv8V/5T/9/8lAboAnf8nAA0A9/8lAboA9/8lAboA9/8lAboAnf8nAA0AZP8nACoAvv8lAdcAvv8lAdcAZP8nACoAvv8lAdcAZP8nACoA4/8+AdoA4/8+AdoA4/8+AdoA4/8+AdoA4/8+AdoA4/8+AdoAd/8NAAoAd/8NAAoAd/8NAAoAd/8NAAoAd/8NAAoAd/8NAAoAjP8TADIA5v8RAd8A5v8RAd8AjP8TADIA5v8RAd8AjP8TADIAz/84AbIAdf86AAUAz/84AbIAz/84AbIAz/84AbIAdf86AAUA4/8+AdoA4/8+AdoA9/8lAboA4/8+AdoA9/8lAboA9/8lAboA4/8+AdoA4/8+AdoAvv8lAdcA4/8+AdoAvv8lAdcAvv8lAdcA4/8+AdoA4/8+AdoA5v8RAd8A4/8+AdoA5v8RAd8A5v8RAd8A4/8+AdoA4/8+AdoAz/84AbIA4/8+AdoAz/84AbIAz/84AbIAd/8NAAoAd/8NAAoAnf8nAA0Ad/8NAAoAnf8nAA0Anf8nAA0Ad/8NAAoAd/8NAAoAZP8nACoAd/8NAAoAZP8nACoAZP8nACoAd/8NAAoAd/8NAAoAjP8TADIAd/8NAAoAjP8TADIAjP8TADIAd/8NAAoAd/8NAAoAdf86AAUAd/8NAAoAdf86AAUAdf86AAUAnf8nAA0Adf86AAUAz/84AbIAnf8nAA0Az/84AbIA9/8lAboA5v8RAd8AjP8TADIAnf8nAA0A5v8RAd8Anf8nAA0A9/8lAboAz/84AbIAdf86AAUAZP8nACoAz/84AbIAZP8nACoAvv8lAdcAZP8nACoAjP8TADIA5v8RAd8AZP8nACoA5v8RAd8Avv8lAdcAd/8NAAoAnf8nAA0AjP8TADIAd/8NAAoAjP8TADIAZP8nACoAd/8NAAoAdf86AAUAnf8nAA0Ad/8NAAoAZP8nACoAdf86AAUA4/8+AdoA5v8RAd8A9/8lAboA4/8+AdoAvv8lAdcA5v8RAd8A4/8+AdoA9/8lAboAz/84AbIA4/8+AdoAz/84AbIAvv8lAdcAXwD2AYkB8v8eAbgAXwD2AYkBXwD2AYkBXwD2AYkB8v8eAbgAv/8eAdMALAD2AaQBLAD2AaQBv/8eAdMALAD2AaQBv/8eAdMAUQAMAqsBUQAMAqsBUQAMAqsBUQAMAqsBUQAMAqsBUQAMAqsBzv8JAbAAzv8JAbAAzv8JAbAAzv8JAbAAzv8JAbAAzv8JAbAA4v8JAdcATwDhAagBTwDhAagB4v8JAdcATwDhAagB4v8JAdcAPQAMAoUB0P8zAbQAPQAMAoUBPQAMAoUBPQAMAoUB0P8zAbQAUQAMAqsBUQAMAqsBXwD2AYkBUQAMAqsBXwD2AYkBXwD2AYkBUQAMAqsBUQAMAqsBLAD2AaQBUQAMAqsBLAD2AaQBLAD2AaQBUQAMAqsBUQAMAqsBTwDhAagBUQAMAqsBTwDhAagBTwDhAagBUQAMAqsBUQAMAqsBPQAMAoUBUQAMAqsBPQAMAoUBPQAMAoUBzv8JAbAAzv8JAbAA8v8eAbgAzv8JAbAA8v8eAbgA8v8eAbgAzv8JAbAAzv8JAbAAv/8eAdMAzv8JAbAAv/8eAdMAv/8eAdMAzv8JAbAAzv8JAbAA4v8JAdcAzv8JAbAA4v8JAdcA4v8JAdcAzv8JAbAAzv8JAbAA0P8zAbQAzv8JAbAA0P8zAbQA0P8zAbQA8v8eAbgA0P8zAbQAPQAMAoUB8v8eAbgAPQAMAoUBXwD2AYkBTwDhAagB4v8JAdcA8v8eAbgATwDhAagB8v8eAbgAXwD2AYkBPQAMAoUB0P8zAbQAv/8eAdMAPQAMAoUBv/8eAdMALAD2AaQBv/8eAdMA4v8JAdcATwDhAagBv/8eAdMATwDhAagBLAD2AaQBzv8JAbAA8v8eAbgA4v8JAdcAzv8JAbAA4v8JAdcAv/8eAdMAzv8JAbAA0P8zAbQA8v8eAbgAzv8JAbAAv/8eAdMA0P8zAbQAUQAMAqsBTwDhAagBXwD2AYkBUQAMAqsBLAD2AaQBTwDhAagBUQAMAqsBXwD2AYkBPQAMAoUBUQAMAqsBPQAMAoUBLAD2AaQB1gCCAnwCUwDuAYAB1gCCAnwC1gCCAnwC1gCCAnwCUwDuAYABLADuAZUBrwCCApECrwCCApECLADuAZUBrwCCApECLADuAZUB0ACRAqAC0ACRAqAC0ACRAqAC0ACRAqAC0ACRAqAC0ACRAqACMgDgAXEBMgDgAXEBMgDgAXEBMgDgAXEBMgDgAXEBMgDgAXEBRADdAZIBxwBxAo4CxwBxAo4CRADdAZIBxwBxAo4CRADdAZIBvgCTAn4COwD/AYMBvgCTAn4CvgCTAn4CvgCTAn4COwD/AYMB0ACRAqAC0ACRAqAC1gCCAnwC0ACRAqAC1gCCAnwC1gCCAnwC0ACRAqAC0ACRAqACrwCCApEC0ACRAqACrwCCApECrwCCApEC0ACRAqAC0ACRAqACxwBxAo4C0ACRAqACxwBxAo4CxwBxAo4C0ACRAqAC0ACRAqACvgCTAn4C0ACRAqACvgCTAn4CvgCTAn4CMgDgAXEBMgDgAXEBUwDuAYABMgDgAXEBUwDuAYABUwDuAYABMgDgAXEBMgDgAXEBLADuAZUBMgDgAXEBLADuAZUBLADuAZUBMgDgAXEBMgDgAXEBRADdAZIBMgDgAXEBRADdAZIBRADdAZIBMgDgAXEBMgDgAXEBOwD/AYMBMgDgAXEBOwD/AYMBOwD/AYMBUwDuAYABOwD/AYMBvgCTAn4CUwDuAYABvgCTAn4C1gCCAnwCxwBxAo4CRADdAZIBUwDuAYABxwBxAo4CUwDuAYAB1gCCAnwCvgCTAn4COwD/AYMBLADuAZUBvgCTAn4CLADuAZUBrwCCApECLADuAZUBRADdAZIBxwBxAo4CLADuAZUBxwBxAo4CrwCCApECMgDgAXEBUwDuAYABRADdAZIBMgDgAXEBRADdAZIBLADuAZUBMgDgAXEBOwD/AYMBUwDuAYABMgDgAXEBLADuAZUBOwD/AYMB0ACRAqACxwBxAo4C1gCCAnwC0ACRAqACrwCCApECxwBxAo4C0ACRAqAC1gCCAnwCvgCTAn4C0ACRAqACvgCTAn4CrwCCApECr/9ZAOv/x/9gABkAv/8dAAkAx/9gABkAr/9ZAOv/Pv9ZACYAx/9gABkAPv9ZACYAVv9gAFQAVv9gAFQAPv9ZACYATv8dAEQAoP8vAM7/r/9ZAOv/v/8dAAkAr/9ZAOv/oP8vAM7/L/8vAAkAr/9ZAOv/L/8vAAkAPv9ZACYAPv9ZACYAL/8vAAkATv8dAEQAo//6/9T/oP8vAM7/v/8dAAkAoP8vAM7/o//6/9T/Mv/6/w8AoP8vAM7/Mv/6/w8AL/8vAAkAL/8vAAkAMv/6/w8ATv8dAEQAt//a//n/o//6/9T/v/8dAAkAo//6/9T/t//a//n/Rf/a/zUAo//6/9T/Rf/a/zUAMv/6/w8AMv/6/w8ARf/a/zUATv8dAEQAz//h/ygAt//a//n/v/8dAAkAt//a//n/z//h/ygAXv/h/2MAt//a//n/Xv/h/2MARf/a/zUARf/a/zUAXv/h/2MATv8dAEQA3v8LAEUAz//h/ygAv/8dAAkAz//h/ygA3v8LAEUAbP8LAIAAz//h/ygAbP8LAIAAXv/h/2MAXv/h/2MAbP8LAIAATv8dAEQA2/9AAD8A3v8LAEUAv/8dAAkA3v8LAEUA2/9AAD8Aaf9AAHoA3v8LAEUAaf9AAHoAbP8LAIAAbP8LAIAAaf9AAHoATv8dAEQAx/9gABkA2/9AAD8Av/8dAAkA2/9AAD8Ax/9gABkAVv9gAFQA2/9AAD8AVv9gAFQAaf9AAHoAaf9AAHoAVv9gAFQATv8dAEQA",c:"DAwMDAwMDAwMDAwMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAQEEBAEBAQEEBAEBBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQBAQQEAQEBAQQEAQEEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAEBBAQBAQEBBAQBAQQEGgsLGhoLCxoaCwsaGgsLGhoLCxoaCwsaGgsLGhoLCxo="},galleggiante:{v:"TgBKACcATgBWAPD/EAB1ABQATgBKACcAXwABACMAXgASANX/TgBKACcAXgASANX/TgBWAPD/XwABACMAOADH/wsAOADT/9T/XwABACMAOADT/9T/XgASANX/OADT/9T/OADH/wsA8f+8/+z/TgBWAPD/JgBkAMr/EAB1ABQATgBWAPD/XgASANX/JgAnAKH/TgBWAPD/JgAnAKH/JgBkAMr/XgASANX/OADT/9T/EADh/6//XgASANX/EADh/6//JgAnAKH/EADh/6//OADT/9T/8f+8/+z/JgBkAMr/7/9tAM3/EAB1ABQAJgBkAMr/JgAnAKH/2P8zAKT/JgBkAMr/2P8zAKT/7/9tAM3/JgAnAKH/EADh/6//2f/q/7H/JgAnAKH/2f/q/7H/2P8zAKT/2f/q/7H/EADh/6//8f+8/+z/7/9tAM3/yP9rAPX/EAB1ABQA7/9tAM3/2P8zAKT/of8wAN3/7/9tAM3/of8wAN3/yP9rAPX/2P8zAKT/2f/q/7H/sv/o/9r/2P8zAKT/sv/o/9r/of8wAN3/sv/o/9r/2f/q/7H/8f+8/+z/yP9rAPX/yP9fACwAEAB1ABQAyP9rAPX/of8wAN3/ov8fACsAyP9rAPX/ov8fACsAyP9fACwAof8wAN3/sv/o/9r/sv/c/xEAof8wAN3/sv/c/xEAov8fACsAsv/c/xEAsv/o/9r/8f+8/+z/yP9fACwA8P9QAFIAEAB1ABQAyP9fACwAov8fACsA2v8LAGAAyP9fACwA2v8LAGAA8P9QAFIAov8fACsAsv/c/xEA2v/N/zYAov8fACsA2v/N/zYA2v8LAGAA2v/N/zYAsv/c/xEA8f+8/+z/8P9QAFIAJwBIAE8AEAB1ABQA8P9QAFIA2v8LAGAAKAD+/1wA8P9QAFIAKAD+/1wAJwBIAE8A2v8LAGAA2v/N/zYAEQDF/zMA2v8LAGAAEQDF/zMAKAD+/1wAEQDF/zMA2v/N/zYA8f+8/+z/JwBIAE8ATgBKACcAEAB1ABQAJwBIAE8AKAD+/1wAXwABACMAJwBIAE8AXwABACMATgBKACcAKAD+/1wAEQDF/zMAOADH/wsAKAD+/1wAOADH/wsAXwABACMAOADH/wsAEQDF/zMA8f+8/+z/",c:"BgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcX"},lampione:{v:"gACAAID/gACAAIAAgABAAIAAgACAAID/gABAAIAAgABAAID/gP9AAIAAgP+AAIAAgP+AAID/gP9AAIAAgP+AAID/gP9AAID/gP+AAIAAgACAAIAAgACAAID/gP+AAIAAgACAAID/gP+AAID/gABAAID/gABAAIAAgP9AAIAAgABAAID/gP9AAIAAgP9AAID/gABAAIAAgACAAIAAgP+AAIAAgABAAIAAgP+AAIAAgP9AAIAAgP+AAID/gACAAID/gABAAID/gP+AAID/gABAAID/gP9AAID/YACAACgAKACAAGAAAACAAAAAKACAAGAAYACAACgAYACAASgAKACAAGAAYACAASgAKACAAWAAKACAAWAAYACAASgAAACAAQAAYACAANj/YACAACgAAACAAAAAYACAACgAYACAANj/YACAAdj/YACAACgAYACAAdj/YACAASgAYACAASgAYACAAdj/AACAAQAAKACAAKD/YACAANj/AACAAAAAYACAANj/KACAAKD/KACAAaD/YACAANj/KACAAaD/YACAAdj/YACAAdj/KACAAaD/AACAAQAA2P+AAKD/KACAAKD/AACAAAAAKACAAKD/2P+AAKD/2P+AAaD/KACAAKD/2P+AAaD/KACAAaD/KACAAaD/2P+AAaD/AACAAQAAoP+AANj/2P+AAKD/AACAAAAA2P+AAKD/oP+AANj/oP+AAdj/2P+AAKD/oP+AAdj/2P+AAaD/2P+AAaD/oP+AAdj/AACAAQAAoP+AACgAoP+AANj/AACAAAAAoP+AANj/oP+AACgAoP+AASgAoP+AANj/oP+AASgAoP+AAdj/oP+AAdj/oP+AASgAAACAAQAA2P+AAGAAoP+AACgAAACAAAAAoP+AACgA2P+AAGAA2P+AAWAAoP+AACgA2P+AAWAAoP+AASgAoP+AASgA2P+AAWAAAACAAQAAKACAAGAA2P+AAGAAAACAAAAA2P+AAGAAKACAAGAAKACAAWAA2P+AAGAAKACAAWAA2P+AAWAA2P+AAWAAKACAAWAAAACAAQAAIACgBOD/IACgBCAAIABAASAAIACgBOD/IABAASAAIABAAeD/4P9AASAA4P+gBCAA4P+gBOD/4P9AASAA4P+gBOD/4P9AAeD/4P+gBCAAIACgBCAAIACgBOD/4P+gBCAAIACgBOD/4P+gBOD/IABAAeD/IABAASAA4P9AASAAIABAAeD/4P9AASAA4P9AAeD/IABAASAAIACgBCAA4P+gBCAAIABAASAA4P+gBCAA4P9AASAA4P+gBOD/IACgBOD/IABAAeD/4P+gBOD/IABAAeD/4P9AAeD/oACABWD/oACABaAAoABABaAAoACABWD/oABABaAAoABABWD/YP9ABaAAYP+ABaAAYP+ABWD/YP9ABaAAYP+ABWD/YP9ABWD/YP+ABaAAoACABaAAoACABWD/YP+ABaAAoACABWD/YP+ABWD/oABABWD/oABABaAAYP9ABaAAoABABWD/YP9ABaAAYP9ABWD/oABABaAAoACABaAAYP+ABaAAoABABaAAYP+ABaAAYP9ABaAAYP+ABWD/oACABWD/oABABWD/YP+ABWD/oABABWD/YP9ABWD/gACABYD/gACABYAAgP+ABYAAgACABYD/gP+ABYAAgP+ABYD/gACABYAAgACABYD/AAAgBgAAgP+ABYAAgACABYAAAAAgBgAAgACABYD/gP+ABYD/AAAgBgAAgP+ABYD/gP+ABYAAAAAgBgAAMACgBTAAMACgBdD/0P+gBdD/MACgBTAA0P+gBdD/0P+gBTAA0P9ABND/MABABND/MABABDAA0P9ABND/MABABDAA0P9ABDAAMACgBdD/MACgBTAAcABgBTAAMACgBdD/cABgBTAAcABgBdD/kP9gBTAA0P+gBTAA0P+gBdD/kP9gBTAA0P+gBdD/kP9gBdD/MABgBXAAMACgBTAA0P+gBTAAMABgBXAA0P+gBTAA0P9gBXAA0P+gBdD/MACgBdD/MABgBZD/0P+gBdD/MABgBZD/0P9gBZD/cACABDAAMABABDAAMABABND/cACABDAAMABABND/cACABND/0P9ABND/0P9ABDAAkP+ABDAA0P9ABND/kP+ABDAAkP+ABND/0P9ABDAAMABABDAAMACABHAA0P9ABDAAMACABHAA0P+ABHAAMACABJD/MABABND/0P9ABND/MACABJD/0P9ABND/0P+ABJD/MABABDAAcACABDAAMACABHAA0P9ABDAA0P+ABHAAkP+ABDAAMABABND/MACABJD/cACABND/0P9ABND/kP+ABND/0P+ABJD/MACgBTAAMABgBXAAcABgBTAA0P+gBTAAkP9gBTAA0P9gBXAAMACgBdD/cABgBdD/MABgBZD/0P+gBdD/0P9gBZD/kP9gBdD/oAAgAIAAoAAgAIAAoAAgAID/oAAgAIAAoAAgAID/oAAgAID/YP8gAIAAYP8gAIAAYP8gAID/YP8gAIAAYP8gAID/YP8gAID/gABAAIAAgABAAID/gP9AAID/gABAAIAAgP9AAID/gP9AAIAAgP8AAID/gAAAAID/gAAAAIAAgP8AAID/gAAAAIAAgP8AAIAAgAAgAKAAgAAgAKAAgP8gAKAAgAAgAKAAgP8gAKAAgP8gAKAAgAAgAGD/gAAgAGD/gP8gAGD/gAAgAGD/gP8gAGD/gP8gAGD/gABAAID/gABAAIAAoAAgAIAAgABAAID/oAAgAIAAoAAgAID/YP8gAIAAgP9AAIAAgP9AAID/YP8gAIAAgP9AAID/YP8gAID/gAAgAKAAgABAAIAAgP9AAIAAgAAgAKAAgP9AAIAAgP8gAKAAgP9AAID/gABAAID/gAAgAGD/gP9AAID/gAAgAGD/gP8gAGD/oAAgAIAAgAAAAIAAgAAAAID/oAAgAIAAgAAAAID/oAAgAID/gP8AAID/gP8AAIAAYP8gAIAAgP8AAID/YP8gAIAAYP8gAID/gP8AAIAAgAAAAIAAgAAgAKAAgP8AAIAAgAAgAKAAgP8gAKAAgAAgAGD/gAAAAID/gP8AAID/gAAgAGD/gP8AAID/gP8gAGD/gAAgAGD/gAAgAGD/oAAgAID/gAAgAGD/oAAgAID/oAAgAID/gAAgAKAAgAAgAKAAoAAgAIAAgAAgAKAAoAAgAIAAoAAgAIAAgP8gAGD/gP8gAGD/YP8gAID/gP8gAGD/YP8gAID/YP8gAID/gP8gAKAAgP8gAKAAYP8gAIAAgP8gAKAAYP8gAIAAYP8gAIAAgAAAAIAAoAAgAIAAgAAgAKAAgP8AAIAAgP8gAKAAYP8gAIAAgAAAAID/gAAgAGD/oAAgAID/gP8AAID/YP8gAID/gP8gAGD/gABAAIAAgAAgAKAAoAAgAIAAgP9AAIAAYP8gAIAAgP8gAKAAgABAAID/oAAgAID/gAAgAGD/gP9AAID/gP8gAGD/YP8gAID/",c:"FBQUFA4OFBQUFBQUDg4OEg4ODhIODg4SDg4OEg4ODhIODg4SDg4OEg4ODhIODg4ODg4ODg4ODg4UFBQUDg4UFBQUFBQODg4ODg4ODhQUDg4ODg4ODg4UFBQUFBQUFBQUFBQODg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},"lampione-luce":{v:"cABgBdD/cABgBTAAcACABDAAcABgBdD/cACABDAAcACABND/kP+ABDAAkP9gBTAAkP9gBdD/kP+ABDAAkP9gBdD/kP+ABND/MACABHAAMABgBXAA0P9gBXAAMACABHAA0P9gBXAA0P+ABHAA0P9gBZD/MABgBZD/MACABJD/0P9gBZD/MACABJD/0P+ABJD/cACABND/MACABJD/MABgBZD/cACABND/MABgBZD/cABgBdD/MABgBXAAMACABHAAcACABDAAMABgBXAAcACABDAAcABgBTAA0P9gBZD/0P+ABJD/kP+ABND/0P9gBZD/kP+ABND/kP9gBdD/kP+ABDAA0P+ABHAA0P9gBXAAkP+ABDAA0P9gBXAAkP9gBTAA",c:"FRUVFRUVFRUREREREREREQ=="}};var Hh=r=>Uint8Array.from(atob(r),t=>t.charCodeAt(0)),KA=new Map;function Fd(r){if(KA.has(r))return KA.get(r);let t=Fh[r];if(!t)throw new Error("nel kit non c'è: "+r);let e=Hh(t.v),i=new Int16Array(e.buffer,e.byteOffset,e.length>>1),n=new Float32Array(i.length),a=new Float32Array(i.length);for(let o=0;o<i.length;o++)n[o]=i[o]/512;for(let o=0;o<n.length;o+=9){let A=n[o+3]-n[o],l=n[o+4]-n[o+1],c=n[o+5]-n[o+2],h=n[o+6]-n[o],u=n[o+7]-n[o+1],p=n[o+8]-n[o+2],f=l*p-c*u,g=c*h-A*p,d=A*u-l*h,m=Math.hypot(f,g,d)||1;f/=m,g/=m,d/=m;for(let v=0;v<3;v++)a.set([f,g,d],o+v*3)}Qd(n,a);let s={pos:n,nor:a,tri:Hh(t.c)};return KA.set(r,s),s}var Hd=.0015;function Qd(r,t){let e=new Map;for(let i=0;i<r.length;i+=9){let n=[t[i],t[i+1],t[i+2]],a=n[0]*r[i]+n[1]*r[i+1]+n[2]*r[i+2],s=n.map(o=>Math.round(o*500)).join()+"|"+Math.round(a*300);e.has(s)||e.set(s,[]),e.get(s).push(i)}for(let i of e.values()){if(i.length<2)continue;let n=[0,1,2].reduce((A,l)=>Math.abs(t[i[0]+l])>Math.abs(t[i[0]+A])?l:A,0),a=(A,l)=>n===0?[r[A+l*3+1],r[A+l*3+2]]:n===1?[r[A+l*3],r[A+l*3+2]]:[r[A+l*3],r[A+l*3+1]],s=i.map(A=>[a(A,0),a(A,1),a(A,2)]),o=i.map(()=>0);for(let A=1;A<i.length;A++){for(let h=0;h<A;h++)Gd(s[h],s[A])>=1e-6&&(o[A]=Math.max(o[A],o[h]+1));let l=i[A],c=o[A]*Hd;if(c)for(let h=0;h<3;h++)for(let u=0;u<3;u++)r[l+h*3+u]+=t[l+u]*c}}}function Gd(r,t){let e=a=>{let s=0;for(let o=0;o<a.length;o++){let A=a[o],l=a[(o+1)%a.length];s+=A[0]*l[1]-l[0]*A[1]}return s/2},i=r,n=e(t)<0?[...t].reverse():t;for(let a=0;a<3&&i.length;a++){let s=n[a],o=n[(a+1)%3],A=c=>(o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0]),l=[];for(let c=0;c<i.length;c++){let h=i[c],u=i[(c+1)%i.length],p=A(h),f=A(u);f>=-1e-9?(p<-1e-9&&l.push([h[0]+(u[0]-h[0])*p/(p-f),h[1]+(u[1]-h[1])*p/(p-f)]),l.push(u)):p>=-1e-9&&l.push([h[0]+(u[0]-h[0])*p/(p-f),h[1]+(u[1]-h[1])*p/(p-f)])}i=l}return i.length>=3?Math.abs(e(i)):0}var ds=new pt,ZA=new Map;function kd(r){return ZA.has(r)||(ds.set(r),ZA.set(r,[ds.r,ds.g,ds.b])),ZA.get(r)}function Vd(r,t=null){let{pos:e,nor:i,tri:n}=Fd(r),a=new Float32Array(e.length);for(let s=0;s<n.length;s++){let o=Oh[n[s]],A=kd(t&&t[o]||o);for(let l=0;l<3;l++)a.set(A,s*9+l*3)}return{pos:e,nor:i,col:a}}function ar(r,t=null){let e=Vd(r,t),i=new Tt;return i.setAttribute("position",new Rt(e.pos.slice(),3)),i.setAttribute("normal",new Rt(e.nor.slice(),3)),i.setAttribute("color",new Rt(e.col,3)),i.computeBoundingBox(),i.computeBoundingSphere(),i}var kr=Math.PI/180;function Xd(r,t,e,i){let n=r/2,a=t/2,s=e/2,o=[],A=(u,p,f,g)=>g===0?[u*n,p*(a-i),f*(s-i)]:g===1?[u*(n-i),p*a,f*(s-i)]:[u*(n-i),p*(a-i),f*s],l=(u,p,f)=>{let g=[(p[1]-u[1])*(f[2]-u[2])-(p[2]-u[2])*(f[1]-u[1]),(p[2]-u[2])*(f[0]-u[0])-(p[0]-u[0])*(f[2]-u[2]),(p[0]-u[0])*(f[1]-u[1])-(p[1]-u[1])*(f[0]-u[0])];g[0]*(u[0]+p[0]+f[0])+g[1]*(u[1]+p[1]+f[1])+g[2]*(u[2]+p[2]+f[2])<0?o.push(...u,...f,...p):o.push(...u,...p,...f)},c=(u,p,f,g)=>{l(u,p,f),l(u,f,g)};for(let u of[-1,1]){c(A(u,-1,-1,0),A(u,1,-1,0),A(u,1,1,0),A(u,-1,1,0)),c(A(-1,u,-1,1),A(1,u,-1,1),A(1,u,1,1),A(-1,u,1,1)),c(A(-1,-1,u,2),A(1,-1,u,2),A(1,1,u,2),A(-1,1,u,2));for(let p of[-1,1]){c(A(u,p,-1,0),A(u,p,1,0),A(u,p,1,1),A(u,p,-1,1)),c(A(-1,u,p,1),A(1,u,p,1),A(1,u,p,2),A(-1,u,p,2)),c(A(u,-1,p,0),A(u,1,p,0),A(u,1,p,2),A(u,-1,p,2));for(let f of[-1,1])l(A(u,p,f,0),A(u,p,f,1),A(u,p,f,2))}}let h=new Tt;return h.setAttribute("position",new vt(o,3)),h}function Wd(r,t,e,i){let n=Math.min(t,e)/2,a=3,s=[],o=[[e/2,0,-90],[e/2,t,0],[-e/2,t,90],[-e/2,0,180]],A=[i[1],i[0],i[3],i[2]].map(g=>Math.max(0,Math.min(n,g||0)));o.forEach(([g,d,m],v)=>{let M=A[v];if(M<1e-4){s.push([g,d]);return}let x=g-Math.sign(g)*M,y=d>0?d-M:M;for(let P=0;P<=a;P++){let w=(m+90*P/a)*Math.PI/180;s.push([x+Math.cos(w)*M,y+Math.sin(w)*M])}});let l=s.filter((g,d)=>{let m=s[(d+1)%s.length];return Math.hypot(g[0]-m[0],g[1]-m[1])>1e-5}),c=[],h=r/2,u=[0,t/2,0],p=(g,d,m)=>{let v=[(d[1]-g[1])*(m[2]-g[2])-(d[2]-g[2])*(m[1]-g[1]),(d[2]-g[2])*(m[0]-g[0])-(d[0]-g[0])*(m[2]-g[2]),(d[0]-g[0])*(m[1]-g[1])-(d[1]-g[1])*(m[0]-g[0])],M=[(g[0]+d[0]+m[0])/3-u[0],(g[1]+d[1]+m[1])/3-u[1],(g[2]+d[2]+m[2])/3-u[2]];v[0]*M[0]+v[1]*M[1]+v[2]*M[2]<0?c.push(...g,...m,...d):c.push(...g,...d,...m)};for(let g=0;g<l.length;g++){let[d,m]=l[g],[v,M]=l[(g+1)%l.length];p([-h,m,d],[h,m,d],[h,M,v]),p([-h,m,d],[h,M,v],[-h,M,v])}for(let g of[-h,h])for(let d=1;d<l.length-1;d++)p([g,l[0][1],l[0][0]],[g,l[d][1],l[d][0]],[g,l[d+1][1],l[d+1][0]]);let f=new Tt;return f.setAttribute("position",new vt(c,3)),f}function Yd(r,t,e){switch(r){case"l":return Wd(t[0],t[1],t[2],t.slice(3));case"kit":return ar(t,e.tinte);case"b":{let i=Math.min(.08,Math.min(t[0],t[1],t[2])*.24);return(e.netta||i<.012?new Ze(t[0],t[1],t[2]):Xd(t[0],t[1],t[2],i)).translate(0,t[1]/2,0)}case"c":return new hn(t[3]??t[0],t[0],t[1],t[2]||8).translate(0,t[1]/2,0);case"k":{let i=new Ir(t[0],t[1],t[2]||8);return(t[2]||8)===4&&i.rotateY(Math.PI/4),i.translate(0,t[1]/2,0)}case"s":return new fn(t[0],t[1]||0);case"f":return new hn(t[0],t[0],t[1],t[4]||4,1,!1,t[2]*kr,t[3]*kr).translate(0,t[1]/2,0);default:return new Ze(.1,.1,.1)}}var $A=new Map;function qd(r){return $A.has(r)||$A.set(r,new pt(r)),$A.get(r)}var tl=new Map,Qr={h:0,s:0,l:0};function Gr(r,t){let e=r+t;if(tl.has(e))return tl.get(e);new pt(r).getHSL(Qr,Zt);let i=Qr.h*360,n=i<75?-8:i<240?11:-7,a=new pt().setHSL(((i+n*t)%360+360)%360/360,Math.min(1,Qr.s*(Qr.s<.25?1.2:1)),Math.max(.03,Qr.l*(1-.13*t)),Zt);return tl.set(e,a),a}function Ai(r,{strati:t=!0}={}){let e={pieni:{pos:[],nor:[],col:[],st:[]},luce:{pos:[],nor:[],col:[],st:[]}},i={},n=0,a=new yt,s=new $t,o=new si;for(let l of r){if(!l)continue;if(l[0]==="parte"){i[l[1]]={...Ai(l[2]),at:l[3]||[0,0,0]};continue}let[c,h,u=[0,0,0],p="#ffffff",f={}]=l,g=Yd(c,h,f);g.index&&(g=g.toNonIndexed());let d=f.r||[0,0,0];a.compose(new _(...u),s.setFromEuler(o.set(d[0]*kr,d[1]*kr,d[2]*kr)),new _(...f.s||[1,1,1])),g.applyMatrix4(a),g.computeVertexNormals();let m=f.e?e.luce:e.pieni,v=g.attributes.position.count;t&&n++;for(let M=0;M<v;M++)m.st.push(n);if(m.pos.push(...g.attributes.position.array),m.nor.push(...g.attributes.normal.array),c==="kit")m.col.push(...g.attributes.color.array);else{let M=qd(p),x=!f.e&&!f.uno&&(c==="b"||c==="c"||c==="l"),y=c==="c"&&!!f.r&&(Math.abs(f.r[0])>30||Math.abs(f.r[2])>30),P=g.attributes.normal;for(let w=0;w<v;w+=3){let T=P.getY(w),R=x?y?T>.3?M:Gr(p,1):c==="l"?T>.45?M:T<-.5?Gr(p,2):Gr(p,1):T>.8?M:T<-.5?Gr(p,2):Gr(p,1):M;for(let C=0;C<3;C++)m.col.push(R.r,R.g,R.b)}}g.dispose()}let A=l=>{if(!l.pos.length)return null;let c=new Tt;return c.setAttribute("position",new vt(l.pos,3)),c.setAttribute("normal",new vt(l.nor,3)),c.setAttribute("color",new vt(l.col,3)),c.setAttribute("strato",new vt(l.st,1)),c.computeBoundingBox(),c.computeBoundingSphere(),c};return{pieni:A(e.pieni),luce:A(e.luce),...Object.keys(i).length?{parti:i}:{}}}var Qh=new pt,Gh=new pt;function gs(r,t,e){return Qh.set(r),Gh.set(t),"#"+Qh.lerp(Gh,e).getHexString()}var Kt="#b08cff",Oi="#ffb48f";var Ce="#5ee1ff",Ee="#ffcf5c",se="#6df5a8",we="#ff8a3d",Te="#6f8fff",Ie="#ff7ac6",_m={[Ce]:"#ffc46e",[Ee]:"#fff1b3",[se]:"#d9f56b",[we]:"#ffe16b",[Te]:"#ffd27a",[Ie]:"#ffd0a1",[Kt]:"#e7dcff",[Oi]:"#ffe0cc"},jd=[{id:"studio",colore:Ee,nome:"Studio"},{id:"allenamento",colore:se,nome:"Allenamento"},{id:"lavoro",colore:Ce,nome:"Lavoro"},{id:"svago",colore:Ie,nome:"Svago"},{id:"casa",colore:we,nome:"Casa"},{id:"sera",colore:Te,nome:"Sera"}],Bm=Object.fromEntries(jd.map(r=>[r.id,r]));var kh=r=>{let t=String(r).replace("#","");return[0,2,4].map(e=>parseInt(t.slice(e,e+2),16)||0)},Jd=r=>"#"+r.map(t=>Math.max(0,Math.min(255,Math.round(t))).toString(16).padStart(2,"0")).join("");function Vh(r,t,e){let i=kh(r),n=kh(t);return Jd(i.map((a,s)=>a+(n[s]-a)*e))}function Fi(r,t=Kt){return typeof r=="string"&&/^#[0-9a-f]{6}$/i.test(r)?r.toLowerCase():t}var Kd=["corti","ricci","lunghi","frangia","chignon","rasati"],Zd=["nessuno","cuffie","occhiali","berretto","fiore","fascia"],$d=["felpa","maglietta"];function t0(r={}){return{pelle:Fi(r.pelle,"#f1c7a3"),capelli:Kd.includes(r.capelli)?r.capelli:"corti",coloreCapelli:Fi(r.coloreCapelli,"#3a2a24"),colore:Fi(r.colore,"#5ee1ff"),pantaloni:Fi(r.pantaloni,"#6f8fff"),sopra:$d.includes(r.sopra)?r.sopra:"felpa",accessorio:Zd.includes(r.accessorio)?r.accessorio:"nessuno",coloreAccessorio:Fi(r.coloreAccessorio,"#b08cff"),scarpe:Fi(r.scarpe,"#f2eefb"),occhi:r.occhi==="chiusi"?"chiusi":"aperti"}}function Xh(r={}){let t=t0(r),[e,i,n]=[1,3,5].map(s=>parseInt(t.coloreCapelli.slice(s,s+2),16));return{pelo:.3*e+.59*i+.11*n<64?Vh(t.coloreCapelli,t.colore,.35):t.coloreCapelli,corpo:t.colore,dentro:t.pelle}}var Wh=[{id:"divano",nome:"Divano",gruppo:"sedute",colore:Te,prezzo:40,piedi:[3,2],sedute:[[.99,1.24],[2.01,1.24]],quota:[0,76]},{id:"divano-grande",nome:"Divano grande",gruppo:"sedute",colore:Ie,prezzo:60,piedi:[3,2],sedute:[[.77,1.24],[1.5,1.24],[2.23,1.24]],quota:[0,76]},{id:"poltrona",nome:"Poltrona",gruppo:"sedute",colore:Oi,prezzo:25,piedi:[2,2],sedute:[[1,1.24]],quota:[0,70]},{id:"sedia",nome:"Sedia da scrivania",gruppo:"sedute",colore:Ce,prezzo:15,piedi:[1,1],sedute:[[.5,.45,"dietro"]],quota:[0,83]},{id:"pouf",nome:"Pouf",gruppo:"sedute",colore:Ie,prezzo:12,piedi:[1,1],sedute:[[.5,.5]],quota:[0,50]},{id:"panchina",nome:"Panchina",gruppo:"sedute",colore:we,prezzo:20,piedi:[3,1],sedute:[[.9,.55],[2.1,.55]],quota:[0,50]},{id:"scrivania",nome:"Scrivania",gruppo:"tavoli",colore:Ce,prezzo:35,piedi:[3,2],modulo:"progetti",quota:[0,112]},{id:"tavolino",nome:"Tavolino",gruppo:"tavoli",colore:Ce,prezzo:15,piedi:[3,2],quota:[0,20]},{id:"tavolino-film",nome:"Tavolino coi popcorn",gruppo:"tavoli",colore:Ce,prezzo:20,piedi:[3,2],quota:[0,37]},{id:"tavolo",nome:"Tavolo",gruppo:"tavoli",colore:we,prezzo:30,piedi:[2,2],quota:[0,64]},{id:"libreria",nome:"Libreria",gruppo:"tavoli",colore:Ee,prezzo:35,piedi:[3,1],quota:[0,150]},{id:"mensola",nome:"Mensola coi libri",gruppo:"tavoli",colore:Ee,prezzo:20,piedi:[3,1],alto:!0,quota:[134,173]},{id:"letto",nome:"Letto",gruppo:"casa",colore:Te,prezzo:50,piedi:[3,3],sdraio:[1.5,1.6],modulo:"notte",quota:[0,84]},{id:"comodino",nome:"Comodino",gruppo:"casa",colore:Te,prezzo:15,piedi:[1,1],quota:[0,90]},{id:"frigo",nome:"Frigo",gruppo:"casa",colore:Ce,prezzo:40,piedi:[1,1],quota:[0,176]},{id:"cucina",nome:"Cucina",gruppo:"casa",colore:we,prezzo:45,piedi:[3,1],quota:[0,76]},{id:"camino",nome:"Camino",gruppo:"casa",colore:we,prezzo:45,piedi:[3,1],luce:!0,quota:[0,106]},{id:"parete",nome:"Parete bassa",gruppo:"casa",colore:Kt,prezzo:5,piedi:[1,1],quota:[0,74]},{id:"lampada",nome:"Lampada",gruppo:"luci",colore:Te,prezzo:15,piedi:[1,1],luce:!0,quota:[0,182]},{id:"lanterna",nome:"Lanterna",gruppo:"luci",colore:Ee,prezzo:8,piedi:[1,1],luce:!0,passabile:!0,quota:[0,60]},{id:"pianta",nome:"Pianta",gruppo:"piante",colore:se,prezzo:10,piedi:[1,1],quota:[0,150]},{id:"cactus",nome:"Cactus",gruppo:"piante",colore:se,prezzo:8,piedi:[1,1],quota:[0,100]},{id:"fiori",nome:"Fiori",gruppo:"piante",colore:Ie,prezzo:5,piedi:[1,1],passabile:!0,quota:[0,24]},{id:"albero",nome:"Albero",gruppo:"piante",colore:se,prezzo:30,piedi:[1,1],quota:[0,190]},{id:"albero-altalena",nome:"L'albero con l'altalena",gruppo:"piante",colore:se,prezzo:45,piedi:[1,1],quota:[0,210]},{id:"alberello",nome:"Alberello",gruppo:"piante",colore:se,prezzo:18,piedi:[1,1],quota:[0,140]},{id:"arcade",nome:"Cabinato",gruppo:"svago",colore:Ie,prezzo:60,piedi:[1,1],modulo:"arcade",quota:[0,160]},{id:"televisore",nome:"Televisore",gruppo:"svago",colore:Te,prezzo:90,piedi:[3,1],modulo:"cinema",quota:[0,156]},{id:"giradischi",nome:"Giradischi",gruppo:"svago",colore:Ie,prezzo:50,piedi:[1,1],modulo:"musica",quota:[0,90]},{id:"telescopio",nome:"Telescopio",gruppo:"svago",colore:Ee,prezzo:80,piedi:[1,1],modulo:"cielo",quota:[0,130]},{id:"ruota",nome:"Ruota della fortuna",gruppo:"svago",colore:Ie,prezzo:40,piedi:[1,1],stati:8,quota:[0,172]},{id:"acquario",nome:"Acquario",gruppo:"svago",colore:Ce,prezzo:70,piedi:[3,1],missione:"tre-giorni",quota:[0,118]},{id:"sacco",nome:"Sacco da boxe",gruppo:"palestra",colore:we,prezzo:30,piedi:[1,1],quota:[0,142]},{id:"manubri",nome:"Manubri",gruppo:"palestra",colore:se,prezzo:25,piedi:[3,1],quota:[0,72]},{id:"panca",nome:"Panca",gruppo:"palestra",colore:se,prezzo:25,piedi:[4,1],sedute:[[2,.5]],quota:[0,26]},{id:"borraccia",nome:"Borraccia",gruppo:"palestra",colore:Ce,prezzo:3,piedi:[1,1],passabile:!0,quota:[0,46]},{id:"finestra",nome:"Finestra",gruppo:"muro",colore:Kt,tipo:"muro",prezzo:20,piedi:[2,0],len:2,z:[76,196]},{id:"finestra-alta",nome:"Finestra alta",gruppo:"muro",colore:Kt,tipo:"muro",prezzo:25,piedi:[2,0],len:2,z:[34,204]},{id:"porta",nome:"Porta",gruppo:"muro",colore:we,tipo:"muro",prezzo:0,piedi:[1,0],len:1,z:[0,170],modulo:"stanze"},{id:"orologio",nome:"Orologio",gruppo:"muro",colore:Kt,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[158,202]},{id:"calendario",nome:"Calendario",gruppo:"muro",colore:Kt,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[102,184],modulo:"oggi"},{id:"quadro",nome:"Quadro",gruppo:"muro",colore:Oi,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[138,186]},{id:"quadro-grande",nome:"Quadro grande",gruppo:"muro",colore:Te,tipo:"muro",prezzo:18,piedi:[2,0],len:2,z:[118,198]},{id:"specchio",nome:"Specchio",gruppo:"muro",colore:se,tipo:"muro",prezzo:25,piedi:[2,0],len:2,z:[28,198],modulo:"tu"},{id:"led",nome:"Orologio luminoso",gruppo:"muro",colore:se,tipo:"muro",prezzo:20,piedi:[2,0],len:2,z:[164,202]},{id:"mappa-stelle",nome:"Mappa delle stelle",gruppo:"muro",colore:Ee,tipo:"muro",prezzo:25,piedi:[2,0],len:2,z:[108,202]},{id:"telo",nome:"Telo del cinema",gruppo:"muro",colore:Ie,tipo:"muro",prezzo:70,piedi:[4,0],len:4,z:[62,214],modulo:"cinema"},{id:"lucine",nome:"Lucine",gruppo:"muro",colore:Kt,tipo:"muro",prezzo:15,piedi:[4,0],len:4,z:[188,210]},{id:"mensola-muro",nome:"Mensolina",gruppo:"muro",colore:Ee,tipo:"muro",prezzo:8,piedi:[1,0],len:1,z:[100,146]},{id:"piante-appese",nome:"Pianta appesa",gruppo:"muro",colore:se,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[128,232]},{id:"blocco",nome:"Blocco",gruppo:"costruire",colore:Kt,prezzo:2,piedi:[1,1],impilabile:!0,quota:[0,49]},{id:"mezzo-blocco",nome:"Mezzo blocco",gruppo:"costruire",colore:Kt,prezzo:1,piedi:[1,1],impilabile:!0,quota:[0,24]},{id:"lastra",nome:"Lastra",gruppo:"costruire",colore:Kt,prezzo:1,piedi:[1,1],impilabile:!0,quota:[0,8]},{id:"blocco-lungo",nome:"Blocco lungo",gruppo:"costruire",colore:Kt,prezzo:3,piedi:[2,1],impilabile:!0,quota:[0,49]},{id:"gradini",nome:"Gradini",gruppo:"costruire",colore:Kt,prezzo:3,piedi:[1,1],impilabile:!0,quota:[0,49]},{id:"colonna",nome:"Colonna",gruppo:"costruire",colore:Kt,prezzo:4,piedi:[1,1],impilabile:!0,quota:[0,147]},{id:"muretto",nome:"Muretto",gruppo:"costruire",colore:Kt,prezzo:2,piedi:[1,1],impilabile:!0,quota:[0,98]},{id:"casetta",nome:"Casetta",gruppo:"fuori",colore:we,prezzo:0,piedi:[4,4],entra:!0,quota:[0,580]},{id:"cassetta-lettere",nome:"Cassetta delle lettere",gruppo:"fuori",colore:"#c42430",prezzo:8,piedi:[1,1],modulo:"posta",quota:[0,150]},{id:"lampione",nome:"Lampione",gruppo:"fuori",colore:Te,prezzo:12,piedi:[1,1],luce:!0,quota:[0,230]},{id:"cambia-stagione",nome:"Season Changer",gruppo:"fuori",colore:"#5ee1ff",prezzo:30,piedi:[1,1],stati:10,quota:[0,210]},{id:"orto",nome:"L'orto",gruppo:"fuori",colore:we,prezzo:10,piedi:[3,2],passabile:!0,quota:[0,20]},{id:"orto-vuoto",nome:"Orto da bagnare",gruppo:"fuori",colore:Kt,prezzo:0,piedi:[3,2],passabile:!0,quota:[0,12]},{id:"sasso",nome:"Sasso",gruppo:"fuori",colore:Kt,prezzo:3,piedi:[1,1],quota:[0,30]},{id:"funghi",nome:"Funghi",gruppo:"fuori",colore:Ie,prezzo:3,piedi:[1,1],passabile:!0,quota:[0,20]},{id:"ciuffo",nome:"Ciuffo d'erba",gruppo:"fuori",colore:se,prezzo:1,piedi:[1,1],passabile:!0,quota:[0,25]},{id:"tappeto-tondo",nome:"Tappeto tondo",gruppo:"tappeti",colore:Kt,tipo:"tappeto",prezzo:15,piedi:[3,3],forma:"tondo"},{id:"tappeto",nome:"Tappeto",gruppo:"tappeti",colore:Oi,tipo:"tappeto",prezzo:15,piedi:[3,2],forma:"rettangolo"},{id:"tappetino",nome:"Tappetino",gruppo:"tappeti",colore:we,tipo:"tappeto",prezzo:5,piedi:[1,1],forma:"rettangolo"},{id:"tappeto-lungo",nome:"Tappeto lungo",gruppo:"tappeti",colore:se,tipo:"tappeto",prezzo:20,piedi:[4,2],forma:"rettangolo"},{id:"stagno",nome:"Stagno",gruppo:"tappeti",colore:Ce,tipo:"tappeto",prezzo:35,piedi:[3,3],forma:"stagno"},{id:"pietra",nome:"Pietra",gruppo:"tappeti",colore:Kt,tipo:"tappeto",prezzo:2,piedi:[1,1],forma:"pietra"}];for(let r of Wh)r.tipo=r.tipo||"pavimento",r.tipo==="muro"&&(r.piedi=[r.len,0]);var Yh=Object.fromEntries(Wh.map(r=>[r.id,r]));var e0=0,qh=(r="m")=>r+Date.now().toString(36)+(e0++).toString(36)+Math.random().toString(36).slice(2,5),sr=(r,t)=>r+","+t,Hi=(r,t=r)=>{let e=[];for(let i=0;i<r;i++)for(let n=0;n<t;n++)e.push([i,n]);return e},Mt=(r,t,e,i=0,n=void 0)=>({id:qh(),tipo:r,i:t,j:e,r:i,...n?{c:n}:{}}),Xt=(r,t,e,i,n=void 0)=>({id:qh("a"),tipo:r,piano:t,pos:e,a:i,dir:-1,...n?{c:n}:{}}),i0=[{id:"soggiorno",nome:"Soggiorno",tinta:Kt,fa:()=>({caselle:Hi(8),appesi:[Xt("finestra","i",0,1),Xt("calendario","i",0,5),Xt("orologio","j",0,1),Xt("porta","j",0,6)],mobili:[Mt("tappeto-tondo",2,4),Mt("tappetino",6,0),Mt("pianta",0,0),Mt("mensola",3,0),Mt("scrivania",2,0),Mt("sedia",3,2),Mt("divano",0,4,1),Mt("lampada",0,7)]})},{id:"cinema",nome:"Cinema",tinta:Ie,fa:()=>({caselle:Hi(8),appesi:[Xt("telo","i",0,1),Xt("lucine","j",0,2),Xt("quadro","j",0,1,Oi),Xt("porta","j",0,7)],mobili:[Mt("tappeto-lungo",2,1,0,Oi),Mt("divano-grande",3,0),Mt("tavolino-film",3,2),Mt("pianta",0,0),Mt("giradischi",7,0,0,Ee)]})},{id:"palestra",nome:"Palestra",tinta:se,fa:()=>({caselle:Hi(8),appesi:[Xt("specchio","j",0,2),Xt("finestra","i",0,1),Xt("led","i",0,5),Xt("porta","j",0,6)],mobili:[Mt("tappeto",2,2,0,se),Mt("tappeto",2,4,0,Ce),Mt("manubri",5,0),Mt("sacco",1,1),Mt("panca",5,3,1),Mt("borraccia",6,6),Mt("pianta",0,7)]})},{id:"giardino",nome:"Giardino",tinta:se,aperta:!0,fa:()=>({caselle:Hi(10,9).filter(([r,t])=>![sr(0,8),sr(9,0),sr(9,8),sr(8,8),sr(9,7)].includes(sr(r,t))),appesi:[],mobili:[Mt("stagno",5,4),...[[1,7],[2,6],[3,5],[3,4],[4,3]].map(([r,t])=>Mt("pietra",r,t)),Mt("albero-altalena",1,1),Mt("albero",7,1),Mt("alberello",0,5),Mt("panchina",4,0),Mt("lanterna",3,1),Mt("lanterna",8,3),Mt("lanterna",2,8),Mt("fiori",1,3),Mt("fiori",3,2),Mt("fiori",8,2),Mt("fiori",4,7),Mt("fiori",8,7)]})},{id:"osservatorio",nome:"Osservatorio",tinta:Ee,fa:()=>({caselle:Hi(8),appesi:[Xt("finestra-alta","i",0,1),Xt("mappa-stelle","j",0,4),Xt("orologio","j",0,1),Xt("porta","j",0,7)],mobili:[Mt("tappeto-tondo",3,3,0,Ee),Mt("telescopio",1,1),Mt("libreria",0,4,1),Mt("scrivania",4,0),Mt("sedia",5,2,0,Ee),Mt("lampada",0,7)]})},{id:"camera",nome:"Camera",tinta:Te,fa:()=>({caselle:Hi(7),appesi:[Xt("finestra","i",0,1),Xt("quadro-grande","j",0,1),Xt("porta","j",0,6),Xt("piante-appese","i",0,5)],mobili:[Mt("tappeto",2,3,0,Te),Mt("letto",2,0),Mt("comodino",1,0),Mt("comodino",5,0),Mt("lampada",0,6),Mt("pianta",6,6),Mt("pouf",5,4)]})},{id:"cucina",nome:"Cucina",tinta:we,fa:()=>({caselle:Hi(7),appesi:[Xt("finestra","i",0,2),Xt("mensola-muro","j",0,3),Xt("orologio","j",0,4),Xt("porta","j",0,6)],mobili:[Mt("frigo",0,0),Mt("cucina",1,0),Mt("tavolo",3,3),Mt("tappetino",0,2,0,we),Mt("cactus",6,0),Mt("pianta",0,6)]})},{id:"vuota",nome:"Vuota",tinta:Kt,fa:()=>({caselle:Hi(6),appesi:[Xt("porta","j",0,4)],mobili:[]})}],Qm=Object.fromEntries(i0.map(r=>[r.id,r]));var n0=1/80;var Qi={legno:"#edab50",legnoScuro:"#8a4836",legnoChiaro:"#f6ca9f",erba:"#5ac54f",erbaScura:"#33984b",foglie:["#134c4c","#1e6f50","#33984b","#5ac54f"],terra:["#e69c69","#e69c69","#bf6f4a"],pietra:"#92a1b9",pietraScura:"#657392",ferro:"#2a2f4e",crema:"#f9e6cf",neve:"#f4f1ea",nero:"#1c121c",vaso:"#e07438",luce:"#ffd27a",schermo:"#8fe3ff",acqua:"#0098dc",rosso:"#c42430",rosa:"#f68187"};var jh=2.07,r0=[0,.81,0],Vr=[[-.38,.625,.125],[.37,.625,.125]],a0=[0,.3,-.13],ms=Vr[0][1],Jh=Vr[0][2],s0="#0e071b",o0="#ffffff";function A0(r){let t=r.attributes.position,e=r.attributes.color,i=new pt(s0),n=new pt(o0),a=[[],[]],s=new pt;for(let o=0;o<t.count;o++)s.fromBufferAttribute(e,o),(Math.abs(s.r-i.r)+Math.abs(s.g-i.g)+Math.abs(s.b-i.b)<.02||Math.abs(s.r-n.r)+Math.abs(s.g-n.g)+Math.abs(s.b-n.b)<.02)&&a[t.getX(o)<0?0:1].push(new _(t.getX(o),t.getY(o),t.getZ(o)));return a.filter(o=>o.length>=3).map(o=>{let A=Math.min(...o.map(v=>v.y)),l=Math.max(...o.map(v=>v.y)),c=v=>v.filter((M,x)=>v.findIndex(y=>y.distanceTo(M)<1e-4)===x).sort((M,x)=>M.x-x.x),h=c(o.filter(v=>v.y<A+.001)),u=c(o.filter(v=>v.y>l-.001));if(h.length<2||u.length<2)return null;let p=[h[0],h[h.length-1]],f=[u[0],u[u.length-1]],g=new _().subVectors(p[1],p[0]).cross(new _().subVectors(f[0],p[0])).normalize(),d=p[0].clone().add(p[1]).add(f[0]).add(f[1]).multiplyScalar(.25);g.dot(new _(d.x,0,d.z))<0&&g.negate();let m=g.multiplyScalar(.006);return{giu:p.map(v=>v.clone().add(m)),su:f.map(v=>v.clone().add(m)),n:g.clone().normalize()}}).filter(Boolean)}function el(r=.375){let t=new kt(new Ni(r,8),new Oe({color:"#134430",transparent:!0,opacity:.72,depthWrite:!1}));return t.rotation.set(-Math.PI/2,0,Math.PI/8),t.position.y=.012,t.renderOrder=1,t}var Kh={tazza:()=>[["c",[.07,.12,8],[0,0,0],Qi.neve],["c",[.055,.02,8],[0,.11,0],"#7a4a2a"]],libro:()=>[["b",[.2,.05,.15],[0,0,0],"#e5484d"],["b",[.18,.04,.13],[.01,.005,0],Qi.crema]],annaffiatoio:()=>[["c",[.08,.14,8],[0,0,0],"#5ee1ff"],["b",[.16,.025,.025],[.11,.1,0],"#5ee1ff",{r:[0,0,30]}]],retino:()=>[["kit","retino",[0,0,0],null]],canna:()=>[["kit","canna",[0,0,0],null]],pala:()=>[["c",[.028,.46,6],[0,-.04,0],"#8a5a33"],["b",[.16,.18,.05],[0,-.2,0],Qi.ferro]],cazzuola:()=>[["c",[.028,.16,6],[0,0,0],"#8a5a33"],["b",[.15,.04,.2],[0,-.02,.1],Qi.ferro]],pennello:()=>[["c",[.024,.3,6],[0,0,0],"#8a5a33"],["b",[.09,.09,.05],[0,.3,0],"#ff7ac6"]],torcia:()=>[["c",[.04,.2,6],[0,0,0],Qi.ferro],["c",[.06,.05,8],[0,.2,0],Qi.luce,{e:!0}]],fiore:()=>[["b",[.02,.24,.02],[0,0,0],Qi.erbaScura],["s",[.07,0],[0,.27,0],"#ff8fb1"]]},Zh={ciao:{durata:1.1,saluta:!0},si:{durata:.9,annuisce:!0},no:{durata:.9,scuote:!0},musica:{durata:1.4,balla:!0},idea:{durata:1,salta:!0},sonno:{durata:1.6,dorme:!0}};var vs=class{constructor(t){this.gruppo=new te,this.corpo=new te,this.gruppo.add(this.corpo),this.ombra=el(),this.gruppo.add(this.ombra),this.zona=new kt(new Ze(1,jh+.2,1),Th),this.zona.position.y=(jh+.2)/2,this.gruppo.add(this.zona),this.mano=new te,this.dir=new at(.3,1),this.t=Math.random()*10,this.cammina=!1,this.corre=!1,this.preso=!1,this.seduto=!1,this.dorme=!1,this.salto=null,this.caduta=null,this.unaVolta=null,this.attrezzo=null,this.segno=null,this.imposta(t)}get inAria(){return!!this.salto}ombraSu(t){let e=this.ombra;if(!e)return;if(t==null){e.visible=!1;return}let i=this.gruppo.position.y-t;if(e.visible=i>-.4&&i<9,!e.visible)return;let n=Math.max(.3,1-Math.max(0,i)/5);e.position.y=.012-i,e.scale.setScalar(n),e.material.opacity=.72*n}imposta(t={}){this.aspetto=t;for(let A of[...this.corpo.children])this.corpo.remove(A);let{pelo:e,corpo:i,dentro:n}=Xh(t),a={"#e07438":i,"#edab50":e,"#f68187":n},s=(A,l)=>{let c=new te,h=new kt(ar(A,a),oi());return h.position.set(-l[0],-l[1],-l[2]),c.position.set(l[0],l[1],l[2]),c.add(h),c};this.busto=s("gatto-corpo",[0,0,0]),this.testa=s("gatto-testa",r0),this.coda=s("gatto-coda",a0),this.maniG=[s("gatto-mano-a",Vr[0]),s("gatto-mano-b",Vr[1])],this.corpo.add(this.busto,this.testa,this.coda,...this.maniG),this.maniG[1].add(this.mano),this.attrezzo&&this.impugna(this.attrezzo);let o=this.testa.children[0];if(this.occhi=A0(o.geometry),this.occhi.length){let A=this.occhi.length*2*6,l=new Tt;l.setAttribute("position",new Rt(new Float32Array(A*3),3));let c=new Float32Array(A*3),h=new Float32Array(A*3),u=new pt(e);this.occhi.forEach((p,f)=>{for(let g=0;g<12;g++)c.set([p.n.x,p.n.y,p.n.z],(f*12+g)*3),h.set([u.r,u.g,u.b],(f*12+g)*3)}),l.setAttribute("normal",new Rt(c,3)),l.setAttribute("color",new Rt(h,3)),this.palpebre=new kt(l,oi()),this.palpebre.frustumCulled=!1,this.palpebre.visible=!1,o.add(this.palpebre),this.chiusoSu=-1,this.chiusoGiu=-1}else this.palpebre=null}palpebra(t,e){if(!this.palpebre||(t=Math.max(0,Math.min(1,t)),e=Math.max(0,Math.min(1-t,e)),Math.abs(t-this.chiusoSu)<.004&&Math.abs(e-this.chiusoGiu)<.004)||(this.chiusoSu=t,this.chiusoGiu=e,this.palpebre.visible=t>.02||e>.02,!this.palpebre.visible))return;let i=this.palpebre.geometry.attributes.position,n=new _,a=new _,s=0,o=(A,l,c,h)=>{for(let u of[A,l,c,A,c,h])i.setXYZ(s++,u.x,u.y,u.z)};for(let A of this.occhi)n.lerpVectors(A.su[0],A.giu[0],t),a.lerpVectors(A.su[1],A.giu[1],t),o(A.su[0],n.clone(),a.clone(),A.su[1]),n.lerpVectors(A.giu[0],A.su[0],e),a.lerpVectors(A.giu[1],A.su[1],e),o(A.giu[0],A.giu[1],a.clone(),n.clone());i.needsUpdate=!0}guardaVerso(t,e){this.verso=t==null?null:[t,e]}guarda(t,e){Math.hypot(t,e)>.001&&this.dir.set(t,e).normalize()}rimbalza(){this.caduta={t:0}}salta(){this.salto||(this.salto={t:0})}gesto(t){Zh[t]&&(this.unaVolta={nome:t,t:0,...Zh[t]},this.segno={nome:t,fino:performance.now()+1800})}impugna(t){for(let a of[...this.mano.children])this.mano.remove(a),a.geometry&&a.geometry.dispose();if(this.attrezzo=Kh[t]?t:null,this.punta=null,!this.attrezzo)return;let e=Kh[t](),i=Ai(e);i.pieni&&this.mano.add(new kt(i.pieni,oi())),i.luce&&this.mano.add(new kt(i.luce,YA()));let n=t==="retino"||t==="canna";if(this.mano.position.set(0,n?0:.03,n?0:.1),this.mano.scale.setScalar(n?1:1.65),t==="canna"&&i.pieni){let a=i.pieni.attributes.position,s=0;for(let o=1;o<a.count;o++)a.getY(o)>a.getY(s)&&(s=o);this.punta=new _().fromBufferAttribute(a,s)}}puntaNelMondo(t){return this.mano.updateWorldMatrix(!0,!1),this.punta?t.copy(this.punta).applyMatrix4(this.mano.matrixWorld):t.copy(this.gruppo.position)}aggiorna(t){if(t=Math.min(t,.1),t<=0)return;this.t+=t;let e=this.corpo,i=tt=>1-Math.exp(-tt*t),a=Math.atan2(this.dir.x,this.dir.y)-e.rotation.y;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;let s=a*i(13*(this.svelto||1));e.rotation.y+=s,e.rotation.y>Math.PI&&(e.rotation.y-=Math.PI*2),e.rotation.y<-Math.PI&&(e.rotation.y+=Math.PI*2),this.wGiro=(this.wGiro||0)+(s/t-(this.wGiro||0))*i(10);let o=this.velocita??(this.cammina?this.corre?6:3.4:0);this.vL=this.velocita!==void 0?o:(this.vL??o)+(o-(this.vL??o))*i(5);let A=this.vL,l=this.aTerra===!1&&!this.nuota&&!this.seduto;this.pPasso=(this.pPasso||0)+((this.cammina?1:0)-(this.pPasso||0))*i(9),this.pCorsa=(this.pCorsa||0)+((this.cammina&&A>4.6?1:0)-(this.pCorsa||0))*i(5),this.pAria=(this.pAria||0)+((l?1:0)-(this.pAria||0))*i(14);let c=this.pPasso*(1-this.pAria),h=this.pCorsa,u=this.pAria,p=(A-(this.vPrima??A))/t;this.vPrima=A,this.acc=(this.acc||0)+(Math.max(-30,Math.min(30,p))-(this.acc||0))*i(8);let f=1.1+.5*h;if(this.fase=(this.fase||0)+(this.cammina?Math.max(A,.8)/f:0)*Math.PI*t,!this.cammina){let tt=this.fase%Math.PI;this.fase+=(tt>Math.PI/2?Math.PI-tt:-tt)*i(6)}let g=(this.fase%Math.PI+Math.PI)%Math.PI,d=Math.sin(g),m=Math.sin(this.fase),v=this.nuota?.35:1,M=Math.pow(d,1.6)*(.05+.04*h)*c*v,x=Math.pow(1-d,4)*c*v,y=1+x*(.025+.025*h),P=1-x*(.04+.04*h),w=Math.sin(this.t*2.1)*.014*(1-this.pPasso)*(1-u);P+=w,y-=w*.5;let T=.05*c+.1*h+this.acc*.012*(1-u),R=Math.max(-.28,Math.min(.28,-this.wGiro*Math.min(A,6)*.018))*(1-u),C=m*(.075-.035*h)*c;this.mx=$h(this.mx,Math.max(-.22,Math.min(.3,T)),t,120,.55),this.mz=$h(this.mz,C+R,t,170,.6);let O=this.mx.x,B=this.mz.x,N=0,U=0,X=0,ot=m*(.1+.07*h)*c,j=(.03+.06*h)*c*Math.abs(m),G=0;if(this.preso&&(B=Math.sin(this.t*7)*.18,ot=0,G=.2),u>.01){let tt=this.vy||0,b=Math.max(-.06,Math.min(.09,tt*.013))*u;P*=1+b,y*=1-b*.5,G+=(.16+Math.max(0,-tt)*.012)*u,O+=(tt>0?-.06:.1)*u}if(this.salto){this.salto.t+=t;let tt=this.salto.t/.5;M+=Math.sin(Math.min(1,tt)*Math.PI)*.9,G+=Math.sin(Math.min(1,tt)*Math.PI)*.15,tt>=1&&(this.salto=null,this.rimbalza())}if(this.caduta){this.caduta.t+=t;let tt=this.caduta.t/.42,b=tt<1?Math.sin(tt*Math.PI*1.5)*Math.exp(-tt*3.2)*.17:0;y*=1+b,P*=1-b,G-=b*.4,tt>=1&&(this.caduta=null)}let V=this.unaVolta;if(V){V.t+=t;let tt=V.t/V.durata,b=D=>D*D*(3-2*D);V.saluta&&(this.maniG[1].position.y=ms+Math.sin(b(Math.min(1,tt))*Math.PI)*.8),V.annuisce&&(N=Math.sin(tt*Math.PI*4)*.25*(1-tt)),V.scuote&&(X=Math.sin(tt*Math.PI*4)*.35*(1-tt)),V.balla&&(B=Math.sin(tt*Math.PI*6)*.15,M+=Math.abs(Math.sin(tt*Math.PI*6))*.13),V.salta&&(M+=Math.sin(Math.min(1,tt*2)*Math.PI)*.58),V.dorme&&(U=.3*Math.sin(Math.min(1,tt*2)*Math.PI/2)),tt>=1&&(this.unaVolta=null,this.maniG[1].position.y=ms)}this.dorme&&(U=.3);let Q=Math.max(-.55,Math.min(.55,a*.6));if(this.verso){let tt=this.gruppo.position,D=Math.atan2(this.verso[0]-tt.x,this.verso[1]-tt.z)-e.rotation.y;for(;D>Math.PI;)D-=Math.PI*2;for(;D<-Math.PI;)D+=Math.PI*2;Q=Math.max(-.7,Math.min(.7,D))}else this.pPasso<.1&&!V&&!this.dorme&&!this.preso&&(this.t>(this.prossimaOcchiata||0)&&(this.prossimaOcchiata=this.t+2.5+Math.random()*4,this.occhiata=Math.random()<.35?0:(Math.random()-.5)*.9),Q+=this.occhiata||0);this.pPensa=(this.pPensa||0)+((this.espressione==="pensa"?1:0)-(this.pPensa||0))*i(8);let Y=this.pPensa;if(this.tY=(this.tY||0)+(Q+X-(this.tY||0))*i(9),this.tX=(this.tX||0)+(N-O*.6+M*.4-(this.tX||0))*i(12),this.tZ=(this.tZ||0)+(U-B*.7+Y*.22-(this.tZ||0))*i(10),this.testa.rotation.set(this.tX,this.tY,this.tZ),this.cY=(this.cY||0)+(Math.sin(this.t*2.4+this.fase*.5)*(.14+.22*c)+this.wGiro*.12-(this.cY||0))*i(8),this.cX=(this.cX||0)+(-(.25*h*c+.3*u)-(this.cX||0))*i(6),this.coda.rotation.set(this.cX,this.cY,0),this.mY=(this.mY||0)+(G-(this.mY||0))*i(14),!V||!V.saluta){let tt=this.maniG[0].position,b=this.maniG[1].position;tt.y=ms+j+this.mY,tt.z=Jh+ot,b.y=ms+j*.6+this.mY*(this.attrezzo?.5:1)+(this.attrezzo?.05:0)+Y*.36,b.z=Jh-ot*(this.attrezzo?.5:1)+Y*.2,b.x=Vr[1][0]-Y*.15}if(this.seduta=(this.seduta||0)+((this.seduto?1:0)-(this.seduta||0))*i(12),e.position.y=M-.2*this.seduta,e.rotation.z=B,this.capriola||(e.rotation.x=O),e.scale.set(y,P*(1-.12*this.seduta),y),this.zona.scale.y=1-.3*this.seduta,this.palpebre){this.t>(this.prossimoBattito??1.5)&&(this.battito=0,this.prossimoBattito=this.t+(Math.random()<.18?.32:2.2+Math.random()*3.5));let tt=0;if(this.battito!==void 0&&this.battito!==null){this.battito+=t;let Z=this.battito/.15;tt=Z<1?Math.sin(Z*Math.PI):0,Z>=1&&(this.battito=null)}let b=this.dorme?"sonno":this.espressione,D=b==="sonno"?.92:b==="pensa"?.42:b==="felice"?.18:0,H=b==="felice"?.5:0;this.eSu=(this.eSu||0)+(D-(this.eSu||0))*i(10),this.eGiu=(this.eGiu||0)+(H-(this.eGiu||0))*i(10),this.palpebra(Math.max(this.eSu,tt),this.eGiu*(1-tt))}}};function $h(r,t,e,i,n){r=r||{x:t,v:0};let a=2*Math.sqrt(i)*n,s=e;for(;s>0;){let o=Math.min(s,.008333333333333333);r.v+=((t-r.x)*i-r.v*a)*o,r.x+=r.v*o,s-=o}return r}var I={add:(r,t)=>[r[0]+t[0],r[1]+t[1],r[2]+t[2]],sub:(r,t)=>[r[0]-t[0],r[1]-t[1],r[2]-t[2]],scala:(r,t)=>[r[0]*t,r[1]*t,r[2]*t],madd:(r,t,e)=>[r[0]+t[0]*e,r[1]+t[1]*e,r[2]+t[2]*e],dot:(r,t)=>r[0]*t[0]+r[1]*t[1]+r[2]*t[2],cross:(r,t)=>[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]],len:r=>Math.hypot(r[0],r[1],r[2]),norm:r=>{let t=Math.hypot(r[0],r[1],r[2]);return t>1e-9?[r[0]/t,r[1]/t,r[2]/t]:[0,1,0]}},Nt={mul:(r,t)=>[r[3]*t[0]+r[0]*t[3]+r[1]*t[2]-r[2]*t[1],r[3]*t[1]-r[0]*t[2]+r[1]*t[3]+r[2]*t[0],r[3]*t[2]+r[0]*t[1]-r[1]*t[0]+r[2]*t[3],r[3]*t[3]-r[0]*t[0]-r[1]*t[1]-r[2]*t[2]],ruota:(r,t)=>{let[e,i,n,a]=r,s=a*t[0]+i*t[2]-n*t[1],o=a*t[1]+n*t[0]-e*t[2],A=a*t[2]+e*t[1]-i*t[0],l=-e*t[0]-i*t[1]-n*t[2];return[s*a+l*-e+o*-n-A*-i,o*a+l*-i+A*-e-s*-n,A*a+l*-n+s*-i-o*-e]},coniugato:r=>[-r[0],-r[1],-r[2],r[3]],norm:r=>{let t=Math.hypot(r[0],r[1],r[2],r[3])||1;return[r[0]/t,r[1]/t,r[2]/t,r[3]/t]},asse:(r,t)=>{let e=Math.sin(t/2);return[r[0]*e,r[1]*e,r[2]*e,Math.cos(t/2)]},integra:(r,t,e)=>{let i=Nt.mul([t[0],t[1],t[2],0],r);return Nt.norm([r[0]+i[0]*e/2,r[1]+i[1]*e/2,r[2]+i[2]*e/2,r[3]+i[3]*e/2])}};function l0([r=0,t=0,e=0]=[]){let i=r*Math.PI/180,n=t*Math.PI/180,a=e*Math.PI/180,s=Math.cos(i),o=Math.sin(i),A=Math.cos(n),l=Math.sin(n),c=Math.cos(a),h=Math.sin(a);return[[A*c,-A*h,l],[s*h+o*l*c,s*c-o*l*h,-o*A],[o*h-s*l*c,o*c+s*l*h,s*A]]}function ve(r,t){let e={tipo:r,...t};return r==="b"&&(e.m=l0(t.r),e.raggioB=Math.hypot(...t.h)),r==="c"&&(e.raggioB=Math.hypot(t.raggio,t.lungo/2)),r==="giro"&&(e.raggioB=t.raggio+t.spesso+t.largo+Math.abs(t.sposta)),e}function c0(r,t,e,i){if(r.tipo==="b"){let n=r.m,a=t-r.c[0],s=e-r.c[1],o=i-r.c[2],A=n[0][0]*a+n[1][0]*s+n[2][0]*o,l=n[0][1]*a+n[1][1]*s+n[2][1]*o,c=n[0][2]*a+n[1][2]*s+n[2][2]*o,h=Math.abs(A)-r.h[0],u=Math.abs(l)-r.h[1],p=Math.abs(c)-r.h[2],f=h>0?h:0,g=u>0?u:0,d=p>0?p:0;return Math.sqrt(f*f+g*g+d*d)+Math.min(Math.max(h,u,p),0)}if(r.tipo==="c"){let n=e-r.c[1],a=i-r.c[2],s=Math.abs(t-r.c[0])-r.lungo/2,o=Math.sqrt(n*n+a*a)-r.raggio,A=s>0?s:0,l=o>0?o:0;return Math.sqrt(A*A+l*l)+Math.min(Math.max(s,o),0)}if(r.tipo==="giro"){let n=e-(r.c[1]+r.raggio),a=i-r.c[2],s=Math.sqrt(n*n+a*a),o=Math.atan2(a,-n);o<0&&(o+=Math.PI*2);let A=r.c[0]+r.sposta*o/(Math.PI*2),l=Math.abs(s-(r.raggio+r.spesso/2))-r.spesso/2,c=Math.abs(t-A)-r.largo/2,h=c>0?c:0,u=l>0?l:0;return Math.sqrt(h*h+u*u)+Math.min(Math.max(c,l),0)}return 1/0}var xs=class{constructor(t,e=null){this.forme=t,this.acqua=e,this.t=0}vicine(t,e){let i=[];for(let n=0;n<this.forme.length;n++){let a=this.forme[n],s=t[0]-a.c[0],o=t[1]-a.c[1],A=t[2]-a.c[2],l=a.raggioB+e+1;s*s+o*o+A*A<l*l&&i.push(a)}return i}distanza(t,e=this.forme){return this.distanzaXYZ(t[0],t[1],t[2],e)}distanzaXYZ(t,e,i,n=this.forme){let a=1/0;for(let s=0;s<n.length;s++){let o=c0(n[s],t,e,i);o<a&&(a=o)}return a}normale(t,e=this.forme){let n=t[0],a=t[1],s=t[2],o=(u,p,f)=>this.distanzaXYZ(u,p,f,e),A=o(n+.004,a,s)-o(n-.004,a,s),l=o(n,a+.004,s)-o(n,a-.004,s),c=o(n,a,s+.004)-o(n,a,s-.004),h=Math.sqrt(A*A+l*l+c*c);return h>1e-9?[A/h,l/h,c/h]:[0,1,0]}raggio(t,e,i,n=this.forme){let a=0;for(let s=0;s<64&&a<=i;s++){let o=this.distanzaXYZ(t[0]+e[0]*a,t[1]+e[1]*a,t[2]+e[2]*a,n);if(o<.003)return a;a+=Math.max(o*.9,.004)}return null}pelo(t,e){let i=this.acqua;return!i||t<i.x0||t>i.x1||e<i.z0||e>i.z1?null:i.livello(t,e,this.t)}},tu=[.9,1.33,1.75],il=.32,gn=.55,Ms=.62,iu={RAGGIO:il,GRADINO:gn};function Ps(r){return{p:[...r],v:[0,0,0],aTerra:!1,nuota:!1,salto:!1,corre:!1,dir:[0,1],botta:0}}function eu(r,t,e){let i=null;for(let[n,a]of[[0,0],[.22,0],[-.22,0],[0,.22],[0,-.22]]){let s=[t[0]+n,t[1]+gn+.05,t[2]+a],o=r.raggio(s,[0,-1,0],gn+1.2,e);if(o===null)continue;let A=s[1]-o;(!i||A>i.y)&&(i={y:A,x:s[0],z:s[2]})}return i&&(i.n=r.normale([i.x,i.y+.02,i.z],e)),i}function ys(r,t,e,i){let n={},a=i.vicine([r.p[0],r.p[1]+1,r.p[2]],3);t={x:t.x||0,z:t.z||0,corri:t.corri,salta:t.salta};let s=Math.min(1,Math.hypot(t.x,t.z)),o=i.pelo(r.p[0],r.p[2]),A=r.nuota?2.4:t.corri?6.5:3.6,l=s>.12?t.x/s*A*s:0,c=s>.12?t.z/s*A*s:0,h=s>.12&&r.v[0]*l+r.v[2]*c<0,u=Math.min(1,e/(h?.035:s>.12?.06:.05));if(r.botta>0&&(r.botta-=e,(!r.aTerra||r.botta>.3)&&(u*=.06)),!r.aTerra&&!r.nuota&&!(r.botta>0)&&(u*=.45),r.pattini&&!r.nuota){let d=Math.hypot(r.v[0],r.v[2]);if(r.staccato>0&&(r.staccato-=e),s>.12&&!(r.botta>0)){let m=[t.x/s,t.z/s],v=d>.6?[r.v[0]/d,r.v[2]/d]:m,M=Math.atan2(v[0]*m[1]-v[1]*m[0],v[0]*m[0]+v[1]*m[1]);if(Math.abs(M)>2.5&&d>1.5)d=Math.max(0,d-16*e);else{let x=Math.max(-1,Math.min(1,M/((r.aTerra?3.6:1.2)*e)))*(r.aTerra?3.6:1.2)*e,y=Math.cos(x),P=Math.sin(x);v=[v[0]*y-v[1]*P,v[0]*P+v[1]*y];let w=(t.corri?12.5:9.5)*s;r.aTerra&&(d+=d<w?6.8*e:-1.2*e)}r.v[0]=v[0]*d,r.v[2]=v[1]*d}else if(r.aTerra){let m=1-Math.min(1,.32*e);r.v[0]*=m,r.v[2]*=m}}else r.v[0]+=(l-r.v[0])*u,r.v[2]+=(c-r.v[2])*u;if(r.appoggiato?.t>0){r.appoggiato.t-=e;let d=r.appoggiato.n,m=r.v[0]*d[0]+r.v[2]*d[2];m<0&&(r.v[0]-=d[0]*m,r.v[2]-=d[2]*m)}if(r.pattini&&Math.hypot(r.v[0],r.v[2])>.8){let d=Math.hypot(r.v[0],r.v[2]);r.dir=[r.v[0]/d,r.v[2]/d]}else s>.12&&(r.dir=[t.x/s,t.z/s]);r.premuto=t.salta&&!r.saltaPrima?.13:Math.max(0,(r.premuto||0)-e),r.saltaPrima=!!t.salta,r.coyote=r.aTerra?.1:Math.max(0,(r.coyote||0)-e),r.premuto>0&&(r.aTerra||r.coyote>0||r.nuota)&&!r.salto&&(r.v[1]=r.nuota?5.6:r.pattini?7.3:6.9,r.nuota&&(r.p[1]+=.05),r.aTerra=!1,r.nuota=!1,r.salto=!0,r.premuto=0,r.coyote=0,n.salto=!0),r.salto&&!t.salta&&r.v[1]>4.3&&(r.v[1]=4.3),r.p[0]+=r.v[0]*e,r.p[2]+=r.v[2]*e;for(let d=0;d<3;d++){let m=!1;for(let v of tu){let M=[r.p[0],r.p[1]+v,r.p[2]],x=i.distanza(M,a);if(x>=il)continue;let y=i.normale(M,a);if(y[1]>Ms&&v===tu[0])continue;let P=I.norm([y[0],0,y[2]]),w=il-x;if(y[1]<-.5){r.p[1]-=w,r.v[1]>0&&(r.v[1]=0),m=!0;continue}r.p[0]+=P[0]*w,r.p[2]+=P[2]*w;let T=r.v[0]*P[0]+r.v[2]*P[2];T<0&&(r.v[0]-=P[0]*T,r.v[2]-=P[2]*T),m=!0}if(!m)break}let p=eu(i,r.p,a),f=o!==null?o-(i.galla??.85):null;if(r.risale!==void 0)return r.p[1]=Math.min(r.risale,r.p[1]+7*e),r.v[1]=0,r.nuota=!1,r.aTerra=!1,r.risaleT=(r.risaleT||0)+e,s<=.12&&r.risaleDir&&(r.p[0]+=r.risaleDir[0]*1.8*e,r.p[2]+=r.risaleDir[1]*1.8*e),p&&p.y>=r.risale-.06&&p.n[1]>Ms?(r.p[1]=p.y,r.risale=void 0,r.aTerra=!0,n.risalito=!0):r.risaleT>1.5&&(r.risale=void 0),n;if(f!==null&&r.p[1]<=f+.02&&(!p||p.y<f)){if(r.nuota||(n.tuffo=r.v[1]<-2,r.nuota=!0),r.p[1]=f,r.v[1]=0,r.aTerra=!1,r.salto=!1,i.riva&&s>.12){let d=r.p[0]+t.x/s*.6,m=r.p[2]+t.z/s*.6,v=eu(i,[d,o+i.riva-gn,m],a);v&&v.y>f+.3&&v.y<=o+i.riva&&v.n[1]>Ms&&(r.risale=v.y,r.risaleDir=[t.x/s,t.z/s],r.risaleT=0)}return n}r.nuota=!1;let g=p&&(p.n[1]>Ms||p.y>r.p[1]+.01&&p.y<=r.p[1]+gn);if(r.v[1]<=0&&g&&p.y>=r.p[1]-(r.aTerra?gn:.02)&&p.y<=r.p[1]+gn)!r.aTerra&&r.v[1]<-4&&(n.atterrato=!0),r.p[1]=p.y>r.p[1]?Math.min(p.y,r.p[1]+(i.salita??9)*e):Math.max(p.y,r.p[1]-7*e),r.v[1]=0,r.aTerra=!0,r.salto=!1;else if(r.v[1]-=14*(r.v[1]<0?1.5:1)*e,r.p[1]+=r.v[1]*e,r.aTerra=!1,p&&r.v[1]<=0&&r.p[1]<=p.y)if(g)r.v[1]<-4&&(n.atterrato=!0),r.p[1]=p.y,r.v[1]=0,r.aTerra=!0,r.salto=!1;else{let d=p.n;r.p[1]=p.y,r.v[0]+=d[0]*3*e,r.v[2]+=d[2]*3*e,r.v[1]=0}return n}var yi={quad:{ruote:[[.58,0,.72],[-.58,0,.72],[.58,0,-.72],[-.58,0,-.72]],sterzanti:[0,1],motrici:[0,1,2,3],lungaMolla:.42,raggioRuota:.36,molla:55,smorzo:6.5,vmax:15,spinta:16,sterzoMax:.55,presa:1.7,inerzia:[.55,.6,.4],sfere:[[0,.32,.75,.42],[0,.32,-.75,.42],[0,.6,0,.46]],sedile:[0,.62,-.12]},moto:{ruote:[[0,0,.8],[0,0,-.74]],sterzanti:[0],motrici:[1],lungaMolla:.45,raggioRuota:.4,molla:80,smorzo:8,vmax:18,spinta:19,sterzoMax:.5,presa:1.9,inerzia:[.35,.4,.25],equilibrio:!0,sfere:[[0,.4,.68,.32],[0,.4,-.6,.32],[0,.66,0,.36]],sedile:[0,.66,-.18]},acqua:{galleggia:[[.45,0,.75],[-.45,0,.75],[.45,0,-.7],[-.45,0,-.7]],vmax:15,spinta:14,inerzia:[.5,.5,.4],sfere:[[0,.2,.75,.38],[0,.2,-.65,.38],[0,.38,0,.42]],sedile:[0,.52,-.1]}};function nu(r,t,e=0){let i=yi[r];return{tipo:r,d:i,p:[...t],v:[0,0,0],q:Nt.asse([0,1,0],e),w:[0,0,0],molle:(i.ruote||[]).map(()=>0),contatti:0,inAcqua:0,ribaltato:0,aria:0,acro:{beccheggio:0,rollio:0},saltelli:0,sterzo:0}}function ei(r){return{su:Nt.ruota(r.q,[0,1,0]),avanti:Nt.ruota(r.q,[0,0,1]),destra:Nt.ruota(r.q,[-1,0,0])}}var Gi=(r,t)=>Math.max(-t,Math.min(t,r));function ru(r,t,e={x:0,y:0}){let i=!!t.salta,n=t.x||0,a=t.z||0;if(!r.contatti&&!r.inAcqua)return{gas:e?.y||0,sterzo:e?.x||0,salta:i};let s=Math.min(1,Math.hypot(n,a));if(s<.15)return r.retro=r.frenata=r.volta=!1,{gas:0,sterzo:0,salta:i};let{avanti:o,destra:A}=ei(r),l=I.norm([o[0],0,o[2]]),c=I.norm([A[0],0,A[2]]),h=[n/s,0,a/s],u=I.dot(h,l),p=I.dot(h,c),f=Math.atan2(p,u),g=I.dot(r.v,l);return u<-.3?r.retro||g<-.3?(r.retro=!0,{gas:-s,sterzo:Gi(-Math.atan2(-p,-u)*1.6,1),salta:i}):!r.volta&&(g>.3||r.frenata)?(r.frenata=!0,g<.3&&(r.retro=!0),{gas:-s,sterzo:0,salta:i}):(r.volta=!0,{gas:s*.6,sterzo:p<0?-1:1,salta:i}):(r.retro=r.frenata=r.volta=!1,{gas:s*(u>0?1:.6),sterzo:Gi(f*1.6,1),salta:i})}function au(r,t,e,i){let n=r.d,a={},{su:s,avanti:o,destra:A}=ei(r),l=i.vicine(r.p,5),c=[0,-14,0],h=[0,0,0],u=(C,O)=>{c=I.add(c,C),h=I.add(h,I.cross(I.sub(O,r.p),C))},p=C=>I.add(r.v,I.cross(r.w,I.sub(C,r.p))),f=I.dot(r.v,o),g=t.gas<-.1&&f>1,d=!!t.derapa&&Math.abs(f)>(r.deriva?3:5);if(d&&!r.deriva&&(r.contatti||r.inAcqua)&&(r.deriva={verso:Math.sign(r.sterzo||t.sterzo||1),carica:0,v0:Math.hypot(r.v[0],r.v[2])}),r.deriva&&!d){let C=r.deriva.carica,O=C>1.6?3:C>1?2:C>.5?1:0;if(O){let B=I.norm([o[0],0,o[2]]);r.v=I.madd(r.v,B,[0,4,6.5,9][O]),r.turbo=.6+O*.25,a.turbo=O}r.deriva=null}r.turbo>0&&(r.turbo-=e);let m=0,v=[0,0,0],M=null;for(let C of l){if(C.tipo!=="giro"||!r.contatti)continue;let O=r.p[1]-(C.c[1]+C.raggio),B=r.p[2]-C.c[2],N=Math.hypot(O,B);if(N>C.raggio+.5||N<C.raggio-2)continue;let U=Math.atan2(B,-O);if(U<0&&(U+=Math.PI*2),U<.15||U>Math.PI*2-.15)continue;let X=C.c[0]+C.sposta*U/(Math.PI*2);if(Math.abs(r.p[0]-X)>C.largo/2+.6)continue;let ot=I.norm([C.sposta/(Math.PI*2),C.raggio*Math.sin(U),C.raggio*Math.cos(U)]);I.dot(ot,o)<0&&(ot=I.scala(ot,-1));let j=I.dot(r.v,ot);M={corsia:X,vx:ot[0]*j,t:ot}}if(M&&(h=I.add(h,I.sub(I.scala(I.cross(o,M.t),14),I.scala(s,I.dot(r.w,s)*4)))),r.sterzo+=((M?0:Gi(t.sterzo,1))-r.sterzo)*Math.min(1,e*10),n.ruote){let C=n.lungaMolla+n.raggioRuota,O=new Set(n.motrici);n.ruote.forEach((B,N)=>{let U=I.add(r.p,Nt.ruota(r.q,B)),X=i.raggio(U,I.scala(s,-1),C,l);if(X===null){r.molle[N]=0;return}m++;let ot=C-X,j=I.madd(U,s,-X),G=p(j);r.molle[N]=ot;let V=i.normale(I.madd(j,s,.02),l);v=I.add(v,V);let Q=Math.max(0,n.molla*ot+Math.max(0,ot-C*.6)*520-n.smorzo*I.dot(G,s));u(I.scala(V,Q*Math.max(0,I.dot(V,s))),j);let Y=n.sterzanti.includes(N)?r.sterzo*n.sterzoMax/(1+Math.abs(f)*.04)*(r.deriva?.25:1):0,tt=I.norm(I.add(I.scala(o,Math.cos(Y)),I.scala(A,Math.sin(Y)))),b=I.norm(I.sub(tt,I.scala(V,I.dot(tt,V)))),D=I.cross(V,b),H=M?I.sub(G,[M.vx,0,0]):G,Z=I.dot(H,D),L=I.dot(G,b),K=n.presa*Q,z=-L*(Math.abs(t.gas)<.1?.7:.02)/n.ruote.length;if(g)z+=-Math.sign(L)*Math.min(Math.abs(L)*8,14)/n.ruote.length;else if(O.has(N)){let it=t.gas;it>0?z+=it*n.spinta*Math.max(0,1-f/n.vmax)/O.size:it<0&&(z+=it*n.spinta*.5*Math.max(0,1+f/(n.vmax*.4))/O.size)}let F=!n.sterzanti.includes(N),k=r.deriva&&F?K*.32:K;r.turbo>0&&O.has(N)&&(z+=9/O.size);let nt=I.add(I.scala(D,Gi(-Z*7,k)),I.scala(b,Gi(z,Math.min(K,Q*.9))));u(nt,I.madd(j,s,I.dot(I.sub(r.p,j),s)))})}if(r.deriva&&m){let C=I.dot(r.w,s),O=-r.deriva.verso*(.85+Math.abs(r.sterzo)*.55);r.w=I.madd(r.w,s,O-C),r.derivaW=O;let B=I.norm([o[0],0,o[2]]),N=Math.hypot(r.v[0],r.v[2]);if(N>1){let U=Math.min(1,e*2.4),X=r.v[0]/N+(B[0]-r.v[0]/N)*U,ot=r.v[2]/N+(B[2]-r.v[2]/N)*U,j=Math.hypot(X,ot)||1,G=Math.max(N,r.deriva.v0*.9);r.v[0]=X/j*G,r.v[2]=ot/j*G}r.deriva.carica+=e*(.6+Math.abs(r.sterzo)*.6),a.deriva=r.deriva.carica}let x=0;if(n.galleggia){for(let U of n.galleggia){let X=I.add(r.p,Nt.ruota(r.q,U)),ot=i.pelo(X[0],X[2]);if(ot===null)continue;let j=ot-X[1];if(j<=0)continue;x++;let G=Math.min(j,.7)*24-p(X)[1]*2.4;G>0&&u([0,G,0],X)}let C=I.norm([o[0],0,o[2]]),O=[C[2],0,-C[0]],B=I.dot(r.v,C),N=I.dot(r.v,O);if(x){c=I.add(c,I.add(I.scala(O,-N*3.5),I.scala(C,-B*.3)));let U=t.gas;g?c=I.madd(c,C,-Math.sign(B)*Math.min(Math.abs(B)*4,10)):U>0?c=I.madd(c,C,U*n.spinta*Math.max(0,1-B/n.vmax)):U<0&&(c=I.madd(c,C,U*n.spinta*.45)),h=I.add(h,[0,-r.sterzo*(2.6+Math.abs(B)*.22),0]),h=I.add(h,I.sub(I.scala(I.cross(s,[0,1,0]),16),I.scala(r.w,2)))}}let y=!1;for(let[C,O,B,N]of n.sfere){let U=I.add(r.p,Nt.ruota(r.q,[C,O,B])),X=i.distanza(U,l);if(X>=N)continue;let ot=i.normale(U,l),j=N-X;r.p=I.madd(r.p,ot,j);let G=p(U),V=I.dot(G,ot);if(V<0){r.v=I.madd(r.v,ot,-V*1.12);let Q=I.sub(G,I.scala(ot,V));r.v=I.madd(r.v,Q,-Math.min(1,2.5*e)),r.w=I.add(I.scala(r.w,.92),I.scala(I.cross(I.sub(U,r.p),ot),-V*.25))}ot[1]>.5&&(y=!0),I.dot(s,ot)<-.3&&(r.ribaltato+=e)}if(n.galleggia&&!x&&y){let C=I.norm([o[0],0,o[2]]);r.v=[r.v[0]*(1-Math.min(1,e*4)),r.v[1],r.v[2]*(1-Math.min(1,e*4))],r.saltelli+=e,Math.abs(t.gas)>.2&&r.saltelli>.32&&(r.saltelli=0,r.v=I.add(r.v,I.add([0,2.8,0],I.scala(C,1.6*Math.sign(t.gas))))),h=I.add(h,[0,-r.sterzo*2,0]),h=I.add(h,I.scala(I.cross(s,[0,1,0]),10))}let P=m>0||x>0;if(n.equilibrio){let C=m?I.norm(v):[0,1,0],O=-r.sterzo*Math.min(1,Math.abs(f)/9)*.38,B=I.norm(I.add(C,I.scala(A,O))),N=I.scala(o,I.dot(I.cross(s,B),o)*(m?30:7));h=I.add(h,I.sub(N,I.scala(o,I.dot(r.w,o)*(m?6:1)))),m&&!r.deriva&&(h=I.add(h,I.scala(s,-r.sterzo*Math.min(1,Math.abs(f)/4)*2.2*Math.sign(f||1))))}!P&&!y?(r.aria===0?r.acroPronto=Math.abs(t.gas)<.2&&Math.abs(t.sterzo)<.2:!r.acroPronto&&Math.abs(t.gas)<.2&&Math.abs(t.sterzo)<.2&&(r.acroPronto=!0),r.acroPronto&&r.aria>.2&&(Math.abs(t.gas)>.2||Math.abs(t.sterzo)>.2)||r.aria>.12&&Math.abs(t.sterzo)>.2?(h=I.add(h,I.scala(A,-Gi(t.gas,1)*1.6)),h=I.add(h,[0,-Gi(t.sterzo,1)*4.2,0]),c=I.add(c,I.scala(I.norm([A[0],0,A[2]]),Gi(t.sterzo,1)*3)),h=I.add(h,I.sub(I.scala(I.cross(s,[0,1,0]),1.4),I.scala(r.w,.6)))):h=I.add(h,I.sub(I.scala(I.cross(s,[0,1,0]),2.2),I.scala(r.w,.6))),r.aria+=e,r.acro.beccheggio+=I.dot(r.w,A)*e,r.acro.rollio+=I.dot(r.w,o)*e):(r.aria>.25&&(a.atterrato={aria:r.aria,...r.acro,dritto:s[1]>.4}),r.aria=0,r.acro={beccheggio:0,rollio:0}),t.salta&&(m||x||y)&&r.saltoPronto!==!1&&(r.v=I.madd(r.v,I.norm(I.add(s,[0,1,0])),6.2),a.salto=!0,r.saltoPronto=!1),t.salta||(r.saltoPronto=!0),r.v=I.madd(r.v,c,e);let w=Nt.ruota(Nt.coniugato(r.q),h),T=[w[0]/n.inerzia[0],w[1]/n.inerzia[1],w[2]/n.inerzia[2]];if(r.w=I.madd(r.w,Nt.ruota(r.q,T),e),r.w=I.scala(r.w,1-(P?1.6:.35)*e),r.deriva&&m){let C=I.dot(r.w,s);r.w=I.madd(r.w,s,r.derivaW-C)}return M&&(r.v[0]=M.vx+(M.corsia-r.p[0])*5),r.p=I.madd(r.p,r.v,e),r.q=Nt.integra(r.q,r.w,e),r.contatti=m,r.inAcqua=x,s[1]<.25&&I.len(r.v)<1.2&&(m===0||y)?r.ribaltato+=e:s[1]>.5&&(r.ribaltato=0),r.ribaltato>1.1&&(a.capottato=!0,nl(r)),a}function nl(r){let t=Nt.ruota(r.q,[0,0,1]);r.q=Nt.asse([0,1,0],Math.atan2(t[0],t[2])),r.p[1]+=1.2,r.v=[0,0,0],r.w=[0,0,0],r.ribaltato=0}var or=.09,h0=.25;function u0(r,t,e,i,n){let a=n*n,s=a*n;return[0,1,2].map(o=>.5*(2*t[o]+(-r[o]+e[o])*n+(2*r[o]-5*t[o]+4*e[o]-i[o])*a+(-r[o]+3*t[o]-3*e[o]+i[o])*s))}var wi=class{constructor(t,{chiusa:e=!1,nome:i="rotaia"}={}){this.chiusa=e,this.nome=i;let n=t,a=n.length,s=[],o=u=>e?n[(u+a)%a]:n[Math.max(0,Math.min(a-1,u))],A=e?a:a-1;for(let u=0;u<A;u++)for(let p=0;p<24;p++)s.push(u0(o(u-1),o(u),o(u+1),o(u+2),p/24));s.push(e?[...n[0]]:[...n[a-1]]);let l=[0];for(let u=1;u<s.length;u++)l.push(l[u-1]+Math.hypot(s[u][0]-s[u-1][0],s[u][1]-s[u-1][1],s[u][2]-s[u-1][2]));this.lungo=l[l.length-1];let c=Math.max(2,Math.round(this.lungo/h0)+1);this.passo=this.lungo/(c-1),this.p=new Float64Array(c*3);let h=0;for(let u=0;u<c;u++){let p=u*this.passo;for(;h<l.length-2&&l[h+1]<p;)h++;let f=(p-l[h])/Math.max(1e-9,l[h+1]-l[h]);for(let g=0;g<3;g++)this.p[u*3+g]=s[h][g]+(s[h+1][g]-s[h][g])*f}this.n=c,this.min=[1/0,1/0,1/0],this.max=[-1/0,-1/0,-1/0];for(let u=0;u<c;u++)for(let p=0;p<3;p++)this.min[p]=Math.min(this.min[p],this.p[u*3+p]),this.max[p]=Math.max(this.max[p],this.p[u*3+p])}punto(t){let{n:e,passo:i,p:n}=this;this.chiusa&&(t=(t%this.lungo+this.lungo)%this.lungo);let a=Math.max(0,Math.min(e-1.0001,t/i)),s=Math.floor(a),o=a-s,A=s*3,l=(s+1)*3,c=[n[A]+(n[l]-n[A])*o,n[A+1]+(n[l+1]-n[A+1])*o,n[A+2]+(n[l+2]-n[A+2])*o],h=[n[l]-n[A],n[l+1]-n[A+1],n[l+2]-n[A+2]],u=Math.hypot(h[0],h[1],h[2])||1;return{p:c,t:[h[0]/u,h[1]/u,h[2]/u]}}vicino(t){if(t[0]<this.min[0]-1||t[0]>this.max[0]+1||t[2]<this.min[2]-1||t[2]>this.max[2]+1||t[1]<this.min[1]-2||t[1]>this.max[1]+2)return null;let e=-1,i=1/0;for(let o=0;o<this.n;o++){let A=this.p[o*3]-t[0],l=this.p[o*3+2]-t[2],c=(this.p[o*3+1]-t[1])*.5,h=A*A+l*l+c*c;h<i&&(i=h,e=o)}let n=e*this.passo,{p:a,t:s}=this.punto(n);return{s:n,d:Math.hypot(a[0]-t[0],a[2]-t[2]),dy:t[1]-(a[1]+or),p:a,t:s}}};function su(r,t){if(!r.pattini||r.rotaia||r.nuota||(r.staccato||0)>0)return!1;let e=Math.hypot(r.v[0],r.v[2]);if(e<1.2&&!(!r.aTerra&&r.v[1]<0))return!1;for(let i=0;i<t.length;i++){let n=t[i].vicino(r.p);if(!n||n.d>.55||n.dy>.6||n.dy<-.35||n.dy<0&&r.v[1]>1)continue;let a=r.v[0]*n.t[0]+r.v[1]*n.t[1]+r.v[2]*n.t[2],s=a>=0?1:-1;return r.rotaia={r:i,s:n.s,verso:s,v:Math.max(Math.abs(a),e*.75,2.5),t:0},r.aTerra=!1,r.salto=!1,!0}return!1}function ou(r,t,e,i){let n=r.rotaia,a=i[n.r],s={};n.t+=e;let{t:o}=a.punto(n.s);n.v+=-14*o[1]*n.verso*e-.18*e,n.v<0&&(n.verso=-n.verso,n.v=-n.v),n.s+=n.v*n.verso*e;let A=!a.chiusa&&(n.s<0||n.s>a.lungo),l=a.punto(Math.max(0,Math.min(a.lungo,n.s)));o=l.t,r.p=[l.p[0],l.p[1]+or,l.p[2]],r.v=[o[0]*n.verso*n.v,o[1]*n.verso*n.v,o[2]*n.verso*n.v],r.dir=[o[0]*n.verso,o[2]*n.verso].map((h,u,p)=>h/(Math.hypot(p[0],p[1])||1));let c=t.salta&&!r.saltaPrima;return r.saltaPrima=!!t.salta,(c||A)&&(r.v[1]=Math.max(r.v[1],0)+(c?6.4:2.2),r.rotaia=null,r.aTerra=!1,r.salto=c,r.staccato=.25,s[c?"salto":"fine"]=!0),s}var p0={quad:.34,moto:.78,acqua:.44},f0={quad:.7,moto:.22,acqua:.7};function Au(r,t){if(r.rotaia||(r.staccato||0)>0)return!1;let e=Math.hypot(r.v[0],r.v[2]);if(e<3)return!1;let i=p0[r.tipo]??.4,n=[r.p[0],r.p[1]-i,r.p[2]];for(let a=0;a<t.length;a++){let s=t[a].vicino(n);if(!s||s.d>.7||s.dy>.7||s.dy<(r.inAcqua?-1:-.45)||s.dy<0&&r.v[1]>2)continue;let o=r.v[0]*s.t[0]+r.v[1]*s.t[1]+r.v[2]*s.t[2];if(Math.abs(o)<e*.45)continue;let A=[r.p[0]-s.p[0],r.p[1]-(s.p[1]+or+i),r.p[2]-s.p[2]];return r.rotaia={r:a,s:s.s,verso:o>=0?1:-1,v:Math.max(Math.abs(o),e*.85,4),h:i,piega:0,giro:0,t:0,scarto:A},r.deriva=null,!0}return!1}function lu(r,t,e,i){let n=r.rotaia,a=i[n.r],s={};n.t+=e;let{t:o}=a.punto(n.s);n.v+=(-14*o[1]*n.verso-.12+((t.gas||0)>.2?2.4:0))*e,n.v<0&&(n.verso=-n.verso,n.v=-n.v),n.v=Math.min(n.v,26),n.s+=n.v*n.verso*e;let A=!a.chiusa&&(n.s<0||n.s>a.lungo),l=a.punto(Math.max(0,Math.min(a.lungo,n.s)));o=l.t;let c=[o[0]*n.verso,o[1]*n.verso,o[2]*n.verso],h=a.punto(Math.max(0,Math.min(a.lungo,n.s+n.verso*.8))).t,u=(c[0]*h[2]-c[2]*h[0])*n.verso,p=Math.min(1,e*6);n.piega+=(Math.max(-.6,Math.min(.6,u*(r.tipo==="moto"?2.4:1.4)))-n.piega)*p,n.giro+=(-(t.sterzo||0)*(f0[r.tipo]??.5)-n.giro)*p;let f=Math.exp(-e*28),g=n.scarto;g[0]*=f,g[1]*=f,g[2]*=f,r.p=[l.p[0]+g[0],l.p[1]+or+n.h+g[1],l.p[2]+g[2]],r.v=[c[0]*n.v,c[1]*n.v,c[2]*n.v],r.w=[0,0,0];let d=Math.cos(n.giro),m=Math.sin(n.giro),v=[c[0]*d+c[2]*m,c[1],-c[0]*m+c[2]*d],M=[v[2],0,-v[0]],x=Math.hypot(M[0],M[2])||1;M[0]/=x,M[2]/=x;let y=[v[1]*M[2]-v[2]*M[1],v[2]*M[0]-v[0]*M[2],v[0]*M[1]-v[1]*M[0]],P=Math.cos(n.piega),w=Math.sin(n.piega),T=[M[0]*P+y[0]*w,M[1]*P+y[1]*w,M[2]*P+y[2]*w],R=[y[0]*P-M[0]*w,y[1]*P-M[1]*w,y[2]*P-M[2]*w];if(r.q=d0(T,R,v),r.d&&r.d.ruote){let O=r.tipo==="moto"?Math.max(0,r.d.lungaMolla+r.d.raggioRuota-n.h):0;r.molle=r.d.ruote.map(()=>O)}r.contatti=0,r.inAcqua=0,r.sterzo=t.sterzo||0;let C=t.salta&&!r.saltaPrimaR;if(r.saltaPrimaR=!!t.salta,n.lento=n.v<1.5?(n.lento||0)+e:0,n.lento>1&&!C&&!A)return r.v[0]+=M[0]*1.5,r.v[2]+=M[2]*1.5,r.rotaia=null,r.staccato=.6,r.aria=.15,s.fine=!0,s;if(C||A){if(r.v[1]=Math.max(r.v[1],0)+(C?6.2:2.4),C&&Math.abs(t.sterzo||0)>.2){let O=-t.sterzo*3.4;r.v[0]+=M[0]*O,r.v[2]+=M[2]*O}r.rotaia=null,r.staccato=.3,r.aria=.15,r.saltoPronto=!1,s[C?"salto":"fine"]=!0}return s}function d0(r,t,e){let i=r[0],n=t[0],a=e[0],s=r[1],o=t[1],A=e[1],l=r[2],c=t[2],h=e[2],u=i+o+h,p,f,g,d;if(u>0){let v=.5/Math.sqrt(u+1);d=.25/v,p=(c-A)*v,f=(a-l)*v,g=(s-n)*v}else if(i>o&&i>h){let v=2*Math.sqrt(1+i-o-h);d=(c-A)/v,p=.25*v,f=(n+s)/v,g=(a+l)/v}else if(o>h){let v=2*Math.sqrt(1+o-i-h);d=(a-l)/v,p=(n+s)/v,f=.25*v,g=(A+c)/v}else{let v=2*Math.sqrt(1+h-i-o);d=(s-n)/v,p=(a+l)/v,f=(A+c)/v,g=.25*v}let m=Math.hypot(p,f,g,d)||1;return[p/m,f/m,g/m,d/m]}var bi=Math.PI/180,Pt={rosso:"#ea323c",ruggine:"#c64524",arancio:"#ed7614",giallo:"#ffa214",sabbia:"#edab50",verde:"#5ac54f",bosco:"#1e6f50",mare:"#0098dc",notte:"#424c6e",pietra:"#92a1b9",rosa:"#f68187",crema:"#f9e6cf",terra:"#8a4836",scuro:"#2a2f4e"};function uu(r){let t={position:3,normal:3,color:3,strato:1},e=r.filter(n=>n.g).map(({g:n,m:a})=>{let s=n.clone();return a&&s.applyMatrix4(a),s}),i=new Tt;for(let[n,a]of Object.entries(t)){let s=e.reduce((l,c)=>l+c.attributes.position.count,0),o=new Float32Array(s*a),A=0;for(let l of e){let c=l.attributes[n];c&&o.set(c.array,A),A+=l.attributes.position.count*a}i.setAttribute(n,new Rt(o,a))}for(let n of e)n.dispose();return i.computeBoundingSphere(),i}var cu=(r,t=[0,0,0])=>new yt().compose(new _(...r),new $t().setFromEuler(new si(t[0]*bi,t[1]*bi,t[2]*bi)),new _(1,1,1)),ci=(r,t,e={})=>Ai([["b",[r[0]*2,r[1]*2,r[2]*2],[0,-r[1],0],t,e]]).pieni,ws=class{constructor(t,e){this.arena=t,this.gruppo=new te,e.add(this.gruppo);let i=[],n=(f,g,d)=>i.push({g:f,m:cu(g,d)});for(let f of t.mondo.forme){if(f.tipo==="b"&&f.nome==="prato"){let[g,d,m]=f.c,[v,M,x]=f.h,y=d+M;n(ci([v,M-.2,x],Pt.terra),[g,d-.2,m]);let P=10,w=Math.round(v*2/P),T=Math.round(x*2/P);for(let R=0;R<w;R++)for(let C=0;C<T;C++){let O=g-v+R*P,B=m-x+C*P,N=Math.floor(O/P)+Math.floor(B/P)&1;n(ci([P/2,.2,P/2],N?Pt.verde:gs(Pt.verde,Pt.bosco,.14),{netta:!0}),[O+P/2,y-.2,B+P/2])}continue}if(f.tipo==="b"){n(ci(f.h,f.colore||Pt.pietra),f.c,f.r);continue}if(f.tipo==="c"){let g=Ai([["c",[f.raggio,f.lungo,12],[0,0,0],f.colore||Pt.verde,{r:[0,0,90]}]]).pieni;i.push({g,m:new yt().makeTranslation(f.c[0]+f.lungo/2,f.c[1],f.c[2])});continue}if(f.tipo==="giro"){this.giro(f,n);continue}}let a=new _(0,1,0),s=new $t,o=new si;for(let f of t.rotaie||[]){let g=f.n,d=v=>new _(f.p[v%g*3],f.p[v%g*3+1],f.p[v%g*3+2]),m=f.chiusa?g:g-1;for(let v=0;v<m;v+=2){let M=d(v),x=d(Math.min(v+2,f.chiusa?v+2:g-1)),y=x.clone().sub(M),P=y.length();P<.01||(s.setFromUnitVectors(a,y.normalize()),o.setFromQuaternion(s,"XYZ"),i.push({g:Ai([["c",[or,P+.04,6],[M.x,M.y,M.z],Pt.giallo,{r:[o.x/bi,o.y/bi,o.z/bi],uno:!0}]]).pieni,m:null}))}for(let v=0;v<g;v+=12){let M=d(v),x=t.mondo.raggio([M.x,M.y-.15,M.z],[0,-1,0],20),y=x===null?0:M.y-.15-x;M.y-y>.35&&n(ci([.085,(M.y-y)/2,.085],Pt.notte,{netta:!0}),[M.x,y+(M.y-y)/2,M.z])}}for(let f of t.pattini||[])for(let g of[-1,1])n(ci([.14,.09,.26],g<0?Pt.rosa:Pt.mare),[f.x+g*.24,1.09,f.z]),n(ci([.1,.05,.22],Pt.scuro),[f.x+g*.24,.96,f.z]);for(let f of t.spinte){let g=(f.x0+f.x1)/2,d=(f.z0+f.z1)/2,m=(f.x1-f.x0)/2,v=(f.z1-f.z0)/2;n(ci([m,.03,v],Pt.giallo,{netta:!0}),[g,.03,d]);for(let M=-1;M<=1;M++)for(let x of[-1,1])n(ci([.12,.03,Math.min(m,1.4)*.55],Pt.ruggine,{netta:!0}),[g+x*Math.min(m,1.4)*.36,.07,d+M*v*.6-.25],[0,x*45,0])}let A=[],l=11,c=()=>(l=l*16807%2147483647,l/2147483647),h=(f,g)=>!(f>-56&&f<-19&&g>-56&&g<-19)&&!(f>-52&&f<2&&g>40&&g<78)&&!(Math.abs(f-25)<8&&g>6&&g<46)&&!(g>-60&&g<-36&&f>12&&f<52)&&!(Math.abs(f+32)<6&&g>4&&g<42)&&!(f>-9&&f<12&&g>18&&g<38)&&Math.hypot(f,g-4)>9;for(let f=0;f<70;f++){let g=c()<.7,d=c(),m,v;if(g){let x=Math.floor(c()*4),y=c()*2-1;m=x<2?y*57:x===2?-57:57,v=x<2?x===0?-57:77:10+y*66}else m=c()*110-55,v=c()*130-55;if(!h(m,v))continue;let M=c();A.push([(M<.55,"kit"),M<.55?"albero":M<.75?"sasso":M<.9?"ciuffo":"funghi",[m,0,v],null,{r:[0,d*360,0]}])}let u=Ai(A,{strati:!1}).pieni;u&&i.push({g:u,m:null}),this.fisso=new kt(uu(i),oi()),this.fisso.castShadow=!0,this.fisso.receiveShadow=!0,this.gruppo.add(this.fisso);let p=t.mondo.acqua;if(p){let f=p.x1-p.x0,g=p.z1-p.z0,d=Math.round(f),v=new Jn(f,g,d,Math.round(g)).rotateX(-Math.PI/2).translate((p.x0+p.x1)/2,0,(p.z0+p.z1)/2).toNonIndexed();v.setAttribute("color",new Rt(new Float32Array(v.attributes.position.count*3),3)),v.setAttribute("normal",new Rt(new Float32Array(v.attributes.position.count*3).fill(0).map((M,x)=>x%3===1?1:0),3)),this.acqua=new kt(v,_h(.8)),this.acqua.frustumCulled=!1,this.toni=[new pt(Pt.notte),new pt(Pt.mare),new pt(gs(Pt.mare,Pt.crema,.55))],this.acqua.renderOrder=2,this.gruppo.add(this.acqua),this.livello=p.livello}}giro(t,e){let a=t.raggio,s=t.c[1]+a,o=t.c[2],A=Math.atan2(t.sposta,Math.PI*2*a),l=(Math.PI*2-2*.06)/60,c=(a+t.spesso/2)*l*1.06;for(let h=0;h<60;h++){let u=.06+(h+.5)*l,p=t.c[0]+t.sposta*u/(Math.PI*2),f=a+t.spesso/2,g=s-Math.cos(u)*f,d=o+Math.sin(u)*f,m=[-u/bi,A/bi,0];e(ci([t.largo/2,t.spesso/2,c/2],t.colore||Pt.sabbia,{netta:!0}),[p,g,d],m);let v=cu([p,g,d],m),M=h%2?Pt.rosso:Pt.crema;for(let x of[-1,1]){let y=new _(x*(t.largo/2+.12),t.spesso/2+.06,0).applyMatrix4(v);e(ci([.17,.1,c/2],M,{netta:!0}),[y.x,y.y,y.z],m)}}}passo(t){if(!this.acqua)return;let e=this.acqua.geometry.attributes.position,i=this.acqua.geometry.attributes.color,[n,a,s]=this.toni,o=new pt;for(let A=0;A<e.count;A++)e.setY(A,this.livello(e.getX(A),e.getZ(A),t));for(let A=0;A<e.count;A+=3){let l=(e.getY(A)+e.getY(A+1)+e.getY(A+2))/3+.62,c=Math.max(-1,Math.min(1,l/.42));c>=0?o.copy(a).lerp(s,c*c):o.copy(a).lerp(n,-c*.6);for(let h=0;h<3;h++)i.setXYZ(A+h,o.r,o.g,o.b)}e.needsUpdate=!0,i.needsUpdate=!0}},g0={quad:()=>[["b",[.86,.3,1.3],[0,-.32,0],Pt.scuro],["b",[.6,.3,.5],[0,-.06,.26],Pt.rosso],["b",[.56,.2,.74],[0,-.04,-.2],Pt.scuro],["b",[1.3,.18,.62],[0,-.06,.66],Pt.rosso],["b",[1.3,.18,.62],[0,-.06,-.66],Pt.rosso],["b",[.9,.17,.3],[0,.12,.88],Pt.ruggine],["b",[.22,.17,.12],[.28,-.02,.98],Pt.crema],["b",[.22,.17,.12],[-.28,-.02,.98],Pt.crema],["b",[.9,.17,.3],[0,.12,-.88],Pt.ruggine]],moto:()=>[["b",[.34,.34,.6],[0,-.36,-.02],Pt.scuro],["b",[.46,.3,.62],[0,-.06,.22],Pt.verde],["b",[.34,.16,.86],[0,.04,-.34],Pt.scuro],["b",[.36,.17,.56],[0,0,-.86],Pt.verde,{r:[-14,0,0]}],["b",[.44,.4,.17],[0,0,.62],Pt.giallo,{r:[-16,0,0]}],["c",[.09,.62,8],[.14,-.28,-.3],Pt.pietra,{r:[70,0,0]}]],acqua:()=>[["b",[1,.36,1.9],[0,-.42,-.1],Pt.mare],["b",[.86,.3,.7],[0,-.38,.92],Pt.mare,{r:[16,0,0]}],["b",[1.04,.17,1.92],[0,-.3,-.1],Pt.giallo],["b",[.44,.22,.86],[0,-.06,-.3],Pt.scuro],["b",[.7,.3,.5],[0,-.1,.42],Pt.crema],["b",[.86,.17,.36],[0,-.14,-.86],Pt.notte]]};function Xr(r,t=!1){let e=Ai(r),i=new te;if(e.pieni){let n=new kt(e.pieni,oi());n.castShadow=t,i.add(n)}return i}function m0(r,t){let e=[["c",[r,t,12],[t/2,0,0],Pt.scuro,{r:[0,0,90]}],["c",[r*.5,t+.04,8],[(t+.04)/2,0,0],Pt.pietra,{r:[0,0,90]}]];for(let i=0;i<8;i++){let n=i/8*Math.PI*2;e.push(["b",[t*.96,.1,.17],[0,Math.sin(n)*(r-.05),Math.cos(n)*(r-.05)],Pt.notte,{r:[90-n/bi,0,0],netta:!0}])}return Xr(e,!1)}var bs=class{constructor(t){this.tipo=t,this.d=yi[t],this.gruppo=new te,this.corpo=new te,this.carro=Xr(g0[t](),!1),this.corpo.add(this.carro),this.gruppo.add(this.corpo),this.manubrio=new te;let e=t==="moto"?.5:t==="quad"?.46:.3;if(this.manubrio.position.set(0,t==="acqua"?.05:.16,e),this.manubrio.add(Xr([["c",[.08,.36,6],[0,-.08,0],Pt.notte],["b",[t==="moto"?.8:.86,.12,.14],[0,.26,-.04],Pt.scuro],["b",[.17,.14,.17],[.42,.25,-.04],Pt.notte],["b",[.17,.14,.17],[-.42,.25,-.04],Pt.notte]])),this.manubrio.rotation.x=-.35,this.carro.add(this.manubrio),this.ruote=[],this.d.ruote){let i=t==="moto"?.24:.32;this.d.ruote.forEach((n,a)=>{let s=new te;s.position.set(...n);let o=new te,A=m0(this.d.raggioRuota,i);o.add(A),s.add(o);let l=Xr([["c",[.085,1,6],[0,0,0],Pt.rosso]],!1);l.position.set(n[0]*.75,-.08,n[2]*(t==="moto"?.95:.85)),this.corpo.add(s,l),this.ruote.push({perno:s,sterza:o,gira:A,molla:l,r:n,angolo:0,sterzante:this.d.sterzanti.includes(a)})})}this.ombra=el(t==="moto"?.7:1.05),this.ombra.scale.set(t==="moto"?.6:.9,t==="acqua"?1.6:1.3,1),this.ombraG=new te,this.ombraG.add(this.ombra)}aggiorna(t,e,i=null){let n=this.gruppo;n.position.set(...t.p),n.quaternion.set(...t.q);let a=this.vAvPrima??0,s=this.yawPrima??0,o=new _(0,0,1).applyQuaternion(n.quaternion),A=Math.atan2(o.x,o.z),l=A-s;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;let c=t.v[0]*o.x+t.v[2]*o.z,h=e>0?l/e*c:0,u=e>0?(c-a)/e:0;this.vAvPrima=c,this.yawPrima=A;let p=1-Math.exp(-e*8),f=this.tipo==="moto"?0:1;this.rollio=(this.rollio||0)+(Math.max(-.16,Math.min(.16,h*.012))*f-(this.rollio||0))*p,this.beccheggio=(this.beccheggio||0)+(Math.max(-.1,Math.min(.1,-u*.008))-(this.beccheggio||0))*p,this.carro.rotation.set(this.beccheggio,0,this.rollio);let g=t.molle||t.mo||[],d=t.sterzo??t.s??0,m=new _(0,0,1).applyQuaternion(n.quaternion),v=t.v[0]*m.x+t.v[1]*m.y+t.v[2]*m.z;this.manubrio.rotation.y=-d*this.d.sterzoMax*(this.d.ruote?1:.7);for(let M=0;M<this.ruote.length;M++){let x=this.ruote[M],y=g[M]||0,P=x.r[1]-this.d.lungaMolla+y;x.perno.position.y=P,x.angolo+=v*e/this.d.raggioRuota,x.gira.rotation.x=x.angolo,x.sterzante&&(x.sterza.rotation.y=-d*this.d.sterzoMax);let w=Math.max(.12,-.08-P);x.molla.scale.y=w,x.molla.position.y=P}if(i!==null){this.ombraG.visible=t.p[1]-i<6,this.ombraG.position.set(t.p[0],i+.02,t.p[2]),this.ombraG.rotation.y=Math.atan2(m.x,m.z);let M=Math.max(.3,1-(t.p[1]-i)/6);this.ombra.material.opacity=.72*M}}},pu={quad:[0,0,-.22],moto:[0,.05,-.32],acqua:[0,0,-.3]},v0=["#ea323c","#ffa214","#5ac54f","#0098dc","#f68187","#edab50"].map(r=>new pt(r));function hu(r){let t=new fn(1,r).toNonIndexed(),e=t.attributes.position,i=new Float32Array(e.count*3);for(let n=0;n<e.count;n+=3){let a=(e.getX(n)+e.getX(n+1)+e.getX(n+2))/3,s=(e.getZ(n)+e.getZ(n+1)+e.getZ(n+2))/3,o=(e.getY(n)+e.getY(n+1)+e.getY(n+2))/3,A=Math.floor((Math.atan2(s,a)+Math.PI)/(Math.PI/3))%2,l=Math.abs(o)>.82?.55:A?1:.68;for(let c=0;c<3;c++)i.set([l,l,l],(n+c)*3)}return t.setAttribute("color",new Rt(i,3)),t.setAttribute("strato",new Rt(new Float32Array(e.count),1)),t}var Ds=class{constructor(t,e=4e3){let i=n=>{let a=new cn(n,oi(),e);return a.instanceMatrix.setUsage($e),a.instanceColor=new ln(new Float32Array(e*3),3),a.instanceColor.setUsage($e),a.count=0,a.frustumCulled=!1,t.add(a),a};this.vicine=i(hu(1)),this.lontane=i(hu(0)),this.ombre=new cn(new Ni(1,10).rotateX(-Math.PI/2),new Oe({color:"#134430",transparent:!0,opacity:.5,depthWrite:!1}),e),this.ombre.instanceMatrix.setUsage($e),this.ombre.count=0,this.ombre.frustumCulled=!1,this.ombre.renderOrder=1,t.add(this.ombre),this.m=new yt,this.q=new $t,this.v=new _,this.s=new _,this.fr=new Ui,this.vp=new yt,this.visibili=0}aggiorna(t,e){let{m:i,q:n,v:a,s,fr:o}=this;e.updateMatrixWorld(),this.vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),o.setFromProjectionMatrix(this.vp);let A=o.planes,l=e.position.x,c=e.position.y,h=e.position.z,u=0,p=0,f=0,g=this.vicine.instanceColor.array,d=this.lontane.instanceColor.array;for(let m=0;m<t.n;m++){let v=t.x[m],M=t.y[m],x=t.z[m],y=t.r[m],P=!1;for(let N=0;N<6;N++){let U=A[N];if(U.normal.x*v+U.normal.y*M+U.normal.z*x+U.constant<-y){P=!0;break}}if(P)continue;let w=v-l,T=M-c,R=x-h,C=w*w+T*T+R*R;i.compose(a.set(v,M,x),n.set(t.qx[m],t.qy[m],t.qz[m],t.qw[m]),s.setScalar(y));let O=v0[t.tinta[m]%6];C<900?(this.vicine.setMatrixAt(u,i),g[u*3]=O.r,g[u*3+1]=O.g,g[u*3+2]=O.b,u++):(this.lontane.setMatrixAt(p,i),d[p*3]=O.r,d[p*3+1]=O.g,d[p*3+2]=O.b,p++);let B=M-y-t.suolo[m];if(C<2500&&t.suolo[m]>-999&&B<8){let N=Math.max(.35,1-B/6)*y*1.05;i.compose(a.set(v,t.suolo[m]+.025,x),n.identity(),s.set(N,1,N)),this.ombre.setMatrixAt(f++,i)}}for(let[m,v]of[[this.vicine,u],[this.lontane,p]])m.count=v,v&&(m.instanceMatrix.needsUpdate=!0,m.instanceColor.needsUpdate=!0);this.ombre.count=f,f&&(this.ombre.instanceMatrix.needsUpdate=!0),this.visibili=u+p}},M0=["#ffa214","#5ac54f","#0098dc","#f68187","#92a1b9","#ea323c","#edab50","#c64524"].map(r=>new pt(r)),Es=class{constructor(t,e=300){let i="#f9e6cf",n={"#e07438":i,"#edab50":i,"#f68187":"#f68187"},a=["gatto-corpo","gatto-testa","gatto-coda","gatto-mano-a","gatto-mano-b"].map(o=>({g:ar(o,n),m:null})),s=uu(a);this.mesh=new cn(s,oi(),e),this.mesh.instanceMatrix.setUsage($e),this.mesh.instanceColor=new ln(new Float32Array(e*3).fill(1),3),this.mesh.count=0,this.mesh.frustumCulled=!1,this.ombre=new cn(new Ni(.375,8).rotateX(-Math.PI/2),new Oe({color:"#134430",transparent:!0,opacity:.6,depthWrite:!1}),e),this.ombre.count=0,this.ombre.frustumCulled=!1,this.ombre.renderOrder=1,t.add(this.mesh,this.ombre),this.m=new yt,this.q=new $t,this.e=new si,this.v=new _,this.s=new _(1,1,1),this.t=0,this.tinte=0}aggiorna(t,e,i=n=>t[n].p){let{m:n,q:a,e:s,v:o,s:A}=this;this.t+=e;let l=Math.min(t.length,this.mesh.instanceMatrix.count);if(l!==this.tinte){for(let c=0;c<l;c++)this.mesh.setColorAt(c,M0[(t[c].tinta??t[c].mente?.tinta??c)%8]);this.mesh.instanceColor.needsUpdate=!0,this.tinte=l}for(let c=0;c<l;c++){let h=t[c],u=i(c),p=Math.hypot(h.v[0],h.v[2]),f=p>.4&&h.aTerra,g=f?Math.abs(Math.sin(this.t*(p>4.6?16:11)+c))*.1:0;s.set(0,Math.atan2(h.dir[0],h.dir[1]),f?Math.sin(this.t*11+c)*.06:0),n.compose(o.set(u[0],u[1]+g,u[2]),a.setFromEuler(s),A.set(1,1,1)),this.mesh.setMatrixAt(c,n),(h.aTerra||h.suolo===void 0)&&(h.suolo=u[1]);let d=Math.max(.3,1-Math.max(0,u[1]-h.suolo)/5);n.compose(o.set(u[0],h.suolo+.015,u[2]),a.identity(),A.set(d,1,d)),this.ombre.setMatrixAt(c,n)}this.mesh.count=l,this.ombre.count=l,this.mesh.instanceMatrix.needsUpdate=!0,this.ombre.instanceMatrix.needsUpdate=!0}};function fu(){let r=[];for(let t of[-1,1])r.push(["b",[.24,.17,.46],[t*.2,-.02,.04],t<0?Pt.rosa:Pt.mare]),r.push(["b",[.18,.06,.5],[t*.2,-.1,.04],Pt.scuro,{netta:!0}]);return Xr(r,!1)}var Ar=["#ffa214","#ea323c","#5ac54f","#0098dc","#f68187","#edab50","#f9e6cf"].map(r=>new pt(r)),x0=`
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
}`,P0=`
varying vec3 vColore;
varying float vVita;
varying float vForma;
void main() {
  vec2 q = abs(gl_PointCoord - 0.5);
  // 0 un quadratino, 1 un rombo
  if (vForma > 0.5 ? q.x + q.y > 0.5 : max(q.x, q.y) > 0.42) discard;
  gl_FragColor = vec4(vColore, 1.0);
  #include <colorspace_fragment>
}`,_s=class{constructor(t,e=700){this.max=e,this.i=0;let i=new Tt;this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.mis=new Float32Array(e),this.vita=new Float32Array(e),this.forma=new Float32Array(e),this.peso=new Float32Array(e),this.attrito=new Float32Array(e),i.setAttribute("position",new Rt(this.pos,3).setUsage($e)),i.setAttribute("colore",new Rt(this.col,3).setUsage($e)),i.setAttribute("misura",new Rt(this.mis,1).setUsage($e)),i.setAttribute("vita",new Rt(this.vita,1).setUsage($e)),i.setAttribute("forma",new Rt(this.forma,1).setUsage($e)),this.mat=new ye({vertexShader:x0,fragmentShader:P0,uniforms:{scala:{value:600}}}),this.punti=new tr(i,this.mat),this.punti.frustumCulled=!1,this.punti.renderOrder=3,t.add(this.punti),this.vive=0}misura(t,e){this.mat.uniforms.scala.value=t/(2*Math.tan(e*Math.PI/360))}una(t,e,i,n,a,s=1,o=1,A=0){let l=this.i;this.i=(this.i+1)%this.max,this.pos.set(t,l*3),this.vel.set(e,l*3),this.col[l*3]=i.r,this.col[l*3+1]=i.g,this.col[l*3+2]=i.b,this.mis[l]=n,this.vita[l]=a,this.forma[l]=s,this.peso[l]=o,this.attrito[l]=A}scintille(t,e=[0,0,1]){for(let i=0;i<2;i++){let n=Math.random()*Math.PI*2,a=1.5+Math.random()*2.5;this.una(t,[-e[0]*a+Math.cos(n)*1.2,1.5+Math.random()*2.2,-e[2]*a+Math.sin(n)*1.2],Ar[Math.random()<.7?0:6],.07+Math.random()*.05,.25+Math.random()*.2,0,1.6,0)}}polvere(t,e=1){let i=Math.round(6+e*6);for(let n=0;n<i;n++){let a=n/i*Math.PI*2,s=1.2+e*1.5;this.una([t[0]+Math.cos(a)*.3,t[1]+.05,t[2]+Math.sin(a)*.3],[Math.cos(a)*s,.4+Math.random()*.6,Math.sin(a)*s],Ar[6],.16+Math.random()*.1,.35+Math.random()*.2,0,.2,3)}}stelle(t,e=1){let i=Math.min(40,10+e*6);for(let n=0;n<i;n++){let a=n/i*Math.PI*2,s=2.4+Math.random()*1.6;this.una([t[0],t[1]+1,t[2]],[Math.cos(a)*s,4+Math.random()*3+e,Math.sin(a)*s],Ar[n%6],.2+Math.random()*.12,.8+Math.random()*.4,1,.9,1.2)}}sbuffo(t,e=[0,0,1],i=6){let n=Math.random()*Math.PI*2;this.una([t[0],t[1]+.05,t[2]],[-e[0]*1.2+Math.cos(n)*.5,.5+Math.random()*.6,-e[2]*1.2+Math.sin(n)*.5],Ar[i],.12+Math.random()*.08,.3+Math.random()*.15,0,.15,3)}derapa(t,e){let i=Ar[[6,0,1,4][e]??6];for(let n=0;n<2;n++){let a=Math.random()*Math.PI*2;this.una([t[0],t[1]+.08,t[2]],[Math.cos(a)*2,1.5+Math.random()*2,Math.sin(a)*2],i,.08+Math.random()*.06,.22+Math.random()*.15,1,1.4,0)}}schizzi(t){for(let e=0;e<14;e++){let i=Math.random()*Math.PI*2,n=1+Math.random()*2;this.una(t,[Math.cos(i)*n,3+Math.random()*3,Math.sin(i)*n],Ar[3],.12+Math.random()*.08,.6,0,1,0)}}passo(t){let{pos:e,vel:i,vita:n,peso:a,attrito:s}=this,o=0;for(let l=0;l<this.max;l++){if(n[l]<=0)continue;o++,n[l]-=t;let c=1-Math.min(1,s[l]*t);i[l*3]*=c,i[l*3+2]*=c,i[l*3+1]=i[l*3+1]*c-14*a[l]*t,e[l*3]+=i[l*3]*t,e[l*3+1]+=i[l*3+1]*t,e[l*3+2]+=i[l*3+2]*t}if(this.vive=o,!o&&!this.cerano)return;this.cerano=o>0;let A=this.punti.geometry.attributes;A.position.needsUpdate=!0,A.vita.needsUpdate=!0,A.colore.needsUpdate=!0,A.misura.needsUpdate=!0,A.forma.needsUpdate=!0}};var du=180/Math.PI;function Bs(r,t,e,i,n,a){let s=Math.hypot(e-t,i),o=Math.atan2(i,e-t),A=i*Math.cos(o)+.3,l=[0,Math.cos(o),-Math.sin(o)],c=[r,i/2,(t+e)/2];return ve("b",{c:[c[0]-l[0]*A/2,c[1]-l[1]*A/2,c[2]-l[2]*A/2],h:[n/2,A/2,s/2],r:[-o*du,0,0],colore:a,nome:"rampa"})}function rl(){let r="#5ac54f",t="#e4b86a",e="#edab50",i="#92a1b9",n="#7ad66b",a=[ve("b",{c:[0,-2,30],h:[60,2,50],colore:r,nome:"prato"}),ve("b",{c:[20,-2,-40],h:[40,2,20],colore:r,nome:"prato"}),ve("b",{c:[-57.5,-2,-40],h:[2.5,2,20],colore:r,nome:"prato"}),ve("b",{c:[-37.5,-2,-57.5],h:[17.5,2,2.5],colore:r,nome:"prato"}),ve("b",{c:[-37.5,-3.5,-37.5],h:[17.5,.5,17.5],colore:t,nome:"fondo"})];{let h=Math.hypot(10,3),u=Math.atan2(3,10),p=[-Math.sin(u),Math.cos(u),0],f=[-25,-1.5,-40];a.push(ve("b",{c:[f[0]-p[0]*.5,f[1]-p[1]*.5,-40],h:[h/2,.5,6],r:[0,0,u*du],colore:t,nome:"spiaggia"}))}a.push(Bs(18,-46,-40,1.2,5,e),Bs(30,-48,-39,2.5,6,e),Bs(44,-52,-39,4,7,e));for(let h=0;h<9;h++)a.push(ve("c",{c:[-32,-.3,10+h*3.2],raggio:.65,lungo:7,colore:n,nome:"dosso"}));for(let h=0;h<6;h++)a.push(ve("b",{c:[-5,(h+1)*.2,22+h*1.2],h:[2.5,(h+1)*.2,.6],colore:i,nome:"gradino"}));a.push(ve("b",{c:[-5,1.2,31.6],h:[2.5,1.2,3],colore:i,nome:"ripiano"}));for(let[h,u]of[[4,22],[6,25],[8,28]])a.push(ve("b",{c:[h,.5,u],h:[.5,.5,.5],colore:n,nome:"blocco"}));a.push(ve("b",{c:[6,1.5,36],h:[3,1.5,.5],colore:i,nome:"muro"})),a.push(ve("giro",{c:[25,0,34],raggio:5,largo:4.6,spesso:.6,sposta:5.2,colore:e,nome:"giro"}));let s=[[-14,6],[-18,12],[-14,18]].map(([h,u])=>({x:h,z:u,r:1.55,y:.36,v:13.5}));for(let h of s)a.push(ve("b",{c:[h.x,.18,h.z],h:[1.6,.18,1.6],colore:"#ea323c",nome:"elastico"}));let o=(h,u,p)=>[h,u,p],A=[new wi([o(-46,.6,46),o(-46,.6,74)],{nome:"dritta"}),new wi([o(-39,.7,46),o(-35,.7,52),o(-39,.8,58),o(-35,.8,64),o(-39,.7,70),o(-36,.7,75)],{nome:"esse"}),new wi([o(-28,.6,46),o(-28,1.5,52),o(-28,.8,58),o(-28,2.1,64),o(-28,.7,70),o(-28,.6,75)],{nome:"onde"}),new wi(Array.from({length:31},(h,u)=>{let p=u/30*Math.PI*3,f=4.1-u/30*3.4;return o(-14+Math.cos(p)*5.5,f,60+Math.sin(p)*5.5)}),{nome:"spirale"}),new wi(Array.from({length:12},(h,u)=>{let p=u/12*Math.PI*2;return o(-14+Math.cos(p)*2.6,.8,60+Math.sin(p)*2.6)}),{chiusa:!0,nome:"cerchio"}),new wi([o(-47,-.85,-37),o(-42,.4,-37.6),o(-37.5,1.6,-38),o(-33,.4,-37.6),o(-28,-.85,-37)],{nome:"arco"})];a.push(Bs(-8.5,47,58.5,3.6,3,e));let l=[{x:-7,z:3},{x:-24,z:44}];for(let h of l)a.push(ve("b",{c:[h.x,.5,h.z],h:[.6,.5,.25],colore:"#424c6e",nome:"rastrelliera"}));return{mondo:new xs(a,{x0:-55,x1:-20,z0:-55,z1:-20,livello:(h,u,p)=>-.62+.24*Math.sin(.32*h+1.4*p)+.17*Math.sin(.41*u-1.1*p+1.3)+.08*Math.sin(.9*(h-u)+2.3*p)}),spinte:[{x0:23,x1:27,z0:14,z1:18,verso:[0,0,1],v:24},{x0:23,x1:27,z0:22,z1:26,verso:[0,0,1],v:24},{x0:41,x1:47,z0:-57.5,z1:-55,verso:[0,0,1],v:20}],partenza:[0,0,6],elastici:s,rotaie:A,pattini:l,mezzi:[{tipo:"quad",p:[3,.6,2],yaw:0},{tipo:"moto",p:[7,.6,2],yaw:0},{tipo:"acqua",p:[-34,-.4,-40],yaw:Math.PI/2}],bordo:60}}var mn={gatto:1,quad:6,moto:4,acqua:5};function ki(r){let[t,e,i]=r.p;return[[t,e+.34,i,.34],[t,e+.84,i,.34],[t,e+1.32,i,.34],[t,e+1.72,i,.3]]}function Pu(r,t=!!r.chi){let e=r.d.sfere.map(([i,n,a,s])=>[...I.add(r.p,Nt.ruota(r.q,[i,n,a])),s]);if(r.d.ruote){let i=r.molle||r.mo||[];r.d.ruote.forEach((n,a)=>e.push([...I.add(r.p,Nt.ruota(r.q,[n[0],n[1]-r.d.lungaMolla+(i[a]||0),n[2]])),r.d.raggioRuota]))}else r.d.galleggia&&e.push([...I.add(r.p,Nt.ruota(r.q,[0,-.3,.9])),.4]);return t&&e.push([...I.add(r.p,Nt.ruota(r.q,I.add(r.d.sedile,[0,.62,0]))),.34]),e}function y0(r,t){let e=null;for(let i of r)for(let n of t){let a=[i[0]-n[0],i[1]-n[1],i[2]-n[2]],s=Math.hypot(a[0],a[1],a[2]),o=i[3]+n[3]-s;if(o<=0||e&&o<=e.pen)continue;let A=s>1e-6?I.scala(a,1/s):[1,0,0];e={n:A,pen:o,punto:I.madd(n,A,n[3]-o/2),a:i,b:n}}return e}function Wr(r){return r.d?{tipo:"mezzo",x:r,palle:Pu(r),peso:mn[r.tipo]}:{tipo:"gatto",x:r,palle:ki(r),peso:mn.gatto}}var gu=(r,t)=>r.tipo==="mezzo"?I.add(r.x.v,I.cross(r.x.w||[0,0,0],I.sub(t,r.x.p))):r.x.v;function mu(r,t,e){if(r.tipo==="mezzo"){r.x.p=I.madd(r.x.p,t,e);return}let i=Math.hypot(t[0],t[2])>.2?I.norm([t[0],0,t[2]]):[1,0,0];r.x.appoggiato={n:e>=0?i:I.scala(i,-1),t:.12},r.x.p[0]+=i[0]*e,r.x.p[2]+=i[2]*e,t[1]>.6&&r.x.v[1]<0&&(r.x.p[1]+=t[1]*e,r.x.v[1]=0)}function vu(r,t,e,i){if(r.tipo==="mezzo"){let a=r.x;a.v=I.madd(a.v,t,e);let s=Nt.ruota(Nt.coniugato(a.q),I.cross(I.sub(i,a.p),I.scala(t,e))),o=[s[0]/a.d.inerzia[0],s[1]/a.d.inerzia[1],s[2]/a.d.inerzia[2]];a.w=I.madd(a.w,Nt.ruota(a.q,o),.35);return}let n=r.x;n.v=I.madd(n.v,t,e),e>3&&(n.v[1]=Math.max(n.v[1],Math.min(6,e*.45)),n.aTerra=!1,n.botta=Math.min(.9,.25+e*.06))}function vn(r,t,e=!1){let i=y0(r.palle,t.palle);if(!i)return null;let{n,pen:a,punto:s}=i;if(t.eco){let p=t.eco.lato;p&&p.resta>0&&I.dot(n,p.n)<.5&&(n=p.n,a=i.a[3]+i.b[3]-I.dot(I.sub(i.a,i.b),n),s=I.madd(i.b,n,i.b[3]-a/2)),t.eco.lato={n,resta:.4}}let o=t.peso/(r.peso+t.peso);mu(r,n,a*o),e&&t.x&&mu(t,n,-a*(1-o));let A=gu(r,s),l=t.x?gu(t,s):t.v,c=I.dot(I.sub(A,l),n);if(c>=0)return{forza:0};let u=-(1+(r.tipo===t.tipo?c>-9?0:.3:c>-3?0:.55))*c/(1/r.peso+1/t.peso);return vu(r,n,u/r.peso,s),e&&t.x&&vu(t,I.scala(n,-1),u/t.peso,s),t.eco&&t.eco.colpita(I.scala(n,-1),u/t.peso),{forza:Math.abs(c)}}var yu=r=>Math.round(r*1e3)/1e3,lr=r=>Math.round(r*100)/100;function wu(r,t=null){return{k:"g",p:r.p.map(yu),v:r.v.map(lr),d:lr(Math.atan2(r.dir[0],r.dir[1])),f:(r.aTerra?1:0)|(r.nuota?2:0)|(r.corre?4:0)|(r.botta>0?8:0),m:t}}function Ss(r){return{k:"m",id:r.id,tipo:r.tipo,p:r.p.map(yu),v:r.v.map(lr),q:r.q.map(t=>Math.round(t*1e4)/1e4),w:r.w.map(lr),s:lr(r.sterzo),mo:r.molle.map(lr),chi:r.chi||null}}function Cs(r,t){r.p=[...t.p],r.v=[...t.v],r.q=Nt.norm(t.q),r.w=[...t.w],r.sterzo=t.s,r.molle=[...t.mo],r.chi=t.chi}var Mu=.12,w0=3,xu=.35;function b0(r,t,e){let i=r[0]*t[0]+r[1]*t[1]+r[2]*t[2]+r[3]*t[3],n=i<0?(i=-i,t.map(l=>-l)):t;if(i>.9995)return Nt.norm(r.map((l,c)=>l+(n[c]-l)*e));let a=Math.acos(i),s=Math.sin(a),o=Math.sin(a*(1-e))/s,A=Math.sin(a*e)/s;return Nt.norm(r.map((l,c)=>l*o+n[c]*A))}var cr=class{constructor(t){this.vista=JSON.parse(JSON.stringify(t)),this.meta=JSON.parse(JSON.stringify(t)),this.vista.w??=[0,0,0],this.meta.w??=[0,0,0],this.errore=[0,0,0],this.senza=0,this.salti=0}ricevi(t,e=.05,i=null){let n=JSON.parse(JSON.stringify(t));if(this.eta=e,i!==null&&(this.tempo=i+e),this.colpo&&(i!==null&&this.colpo.t!==void 0?i<this.colpo.t:this.colpo.resta>0)){let A=I.dot(n.v,this.colpo.n)-this.colpo.vn;A<0&&(n.v=I.madd(n.v,this.colpo.n,-A))}let s=n.k==="g"?!(n.f&3):!1;n.p=I.madd(n.p,n.v,e),s&&(n.p[1]-=14*e*e/2,n.v=[n.v[0],n.v[1]-14*e,n.v[2]]),n.q&&n.w&&(n.q=Nt.integra(n.q,n.w,e)),n.w??=[0,0,0];let o=I.len(I.sub(this.vista.p,n.p))>w0;this.errore=o?[0,0,0]:I.sub(this.vista.p,n.p),o&&this.salti++,this.qVista=o||!this.vista.q?null:this.vista.q,this.meta=n,this.senza=0,this.tScioglie=0,this.vista={...n,p:I.add(n.p,this.errore),q:this.qVista||n.q}}passo(t){let e=this.meta;this.senza+=t,this.colpo&&(this.colpo.resta-=t),this.tempo!==void 0&&(this.tempo+=t),this.lato&&(this.lato.resta-=t);let i=this.senza>xu?Math.max(0,1-(this.senza-xu)*4):1;e.p=I.madd(e.p,e.v,t*i),e.q&&e.w&&(e.q=Nt.integra(e.q,I.scala(e.w,i),t));let n=Math.exp(-t/Mu);this.errore=I.scala(this.errore,n),this.tScioglie=Math.min(1,(this.tScioglie||0)+t/(Mu*2));let a=e.q?this.qVista?b0(this.qVista,e.q,this.tScioglie):e.q:void 0;this.vista={...e,p:I.add(e.p,this.errore),v:I.scala(e.v,i),q:a},this.tScioglie>=1&&(this.qVista=null)}corpo(t){let e={...this.meta,v:this.vista.v};if(e.k==="g")return e.m?null:{tipo:"gatto",palle:ki(e),peso:mn.gatto,v:e.v,eco:this};let i=t[e.tipo];return{tipo:"mezzo",palle:Pu({d:i,p:e.p,q:e.q,mo:e.mo},!!e.chi),peso:mn[e.tipo],v:e.v,eco:this}}colpita(t,e){let i=this.meta.k==="g"?I.norm([t[0],0,t[2]]):t;this.colpo?.resta>0||e<.3||(this.meta.v=I.madd(this.meta.v,i,e),this.vista.v=I.madd(this.vista.v,i,e),this.colpo={n:i,resta:(this.eta??.1)*2+.12,vn:I.dot(this.meta.v,i),t:this.tempo})}};var Mn={giro:{nome:"Giro",durata:.62,punti:300},vite:{nome:"Avvitamento",durata:.56,punti:250},superman:{nome:"Superman",durata:.6,punti:400},senzamani:{nome:"Senza mani",durata:.55,punti:350},scivolata:{nome:"Scivolata",durata:0,punti:0},piroetta:{nome:"Piroetta",durata:.5,punti:200}},bu=Object.keys(Mn),Du=r=>r<=0?0:r>=1?1:r*r*(3-2*r),xn=class{constructor(){this.fatti=[],this.ora=null,this.coda=null,this.alterna=!1,this.totale=0,this.scivola=null}inizioScivolata(){this.scivola={t:0}}fineScivolata(){if(!this.scivola)return;let t=this.scivola.t;this.scivola=null,t>.15&&this.fatti.push({nome:"scivolata",segno:1,t,durata:0,punti:Math.round(100+t*160)})}premi(t={x:0,y:0},e=!0){if(!e)return!1;let i,n=1;Math.abs(t.y)>.45&&Math.abs(t.y)>=Math.abs(t.x)?(i="giro",n=t.y>0?1:-1):Math.abs(t.x)>.45?(i="vite",n=t.x>0?1:-1):i=["superman","senzamani","piroetta"][this.alterna=((this.alterna|0)+1)%3];let a={nome:i,segno:n,t:0,durata:Mn[i].durata};return this.ora?(this.coda=a,!0):(this.ora=a,!0)}passo(t,e=!1){this.scivola&&(this.scivola.t+=t);let i=this.ora;if(i&&(i.t+=t,i.t>=i.durata)){if(this.fatti.push(i),e&&!this.coda&&["giro","vite","piroetta"].includes(i.nome)){this.ora={nome:i.nome,segno:i.segno,t:i.t-i.durata,durata:i.durata,giri:(i.giri||1)+1};return}this.ora=this.coda,this.coda=null}}atterra(){if(this.fineScivolata(),!this.ora&&!this.fatti.length)return null;let t=this.fatti.map(i=>Mn[i.nome].nome),e;if(this.ora&&this.ora.t/this.ora.durata<.82)e={esito:"caduta",punti:0,combo:this.fatti.length,nomi:t};else{this.ora&&(this.fatti.push(this.ora),t.push(Mn[this.ora.nome].nome));let i=0;this.fatti.forEach((a,s)=>{i+=(a.punti??Mn[a.nome].punti)*(s&&this.fatti[s-1].nome===a.nome&&!a.giri?.5:1)});let n=this.fatti.length;e={esito:"pulito",punti:Math.round(i*n),combo:n,nomi:t},this.totale+=e.punti}return this.fatti=[],this.ora=null,this.coda=null,e}inCorso(){let t=[];for(let e of[...this.fatti,...this.ora?[this.ora]:[]])e.giri&&t.length?t[t.length-1]=Mn[e.nome].nome+" ×"+e.giri:t.push(Mn[e.nome].nome);return this.scivola&&t.push("Scivolata"),{combo:t.length,nomi:t,scivola:!!this.scivola}}figura(){let t=this.ora;return t?{nome:t.nome,k:Du(t.t/t.durata),segno:t.segno}:null}foto(){let t=this.ora;return t?[bu.indexOf(t.nome),Math.round(t.t/t.durata*100),t.segno]:null}static daFoto(t){return t?{nome:bu[t[0]],k:Du(t[1]/100),segno:t[2]}:null}};function al(r){if(!r)return null;let t=r.k*Math.PI*2*r.segno;return r.nome==="giro"?[[1,0,0],t]:r.nome==="vite"?[[0,0,1],-t]:r.nome==="piroetta"?[[0,1,0],t]:null}var Eu=.62,D0=.58,E0=.35,_0=.35,hi=1.25,Ts=8192,Is=class{constructor(t,e=800){this.mondo=t,this.max=e,this.n=0;let i=()=>new Float64Array(e);this.x=i(),this.y=i(),this.z=i(),this.vx=i(),this.vy=i(),this.vz=i(),this.r=i(),this.im=i(),this.qx=i(),this.qy=i(),this.qz=i(),this.qw=i(),this.sonno=i(),this.suolo=i(),this.dorme=new Uint8Array(e),this.tinta=new Uint8Array(e),this.testa=new Int32Array(Ts),this.dopo=new Int32Array(e),this.svegli=0,this.urti=0,this.grigliaForme()}grigliaForme(){let e=this.mondo.forme;this.celle=new Map,this.L=8;for(let i of e){let n=i.raggioB+1.5;for(let a=Math.floor((i.c[0]-n)/8);a<=Math.floor((i.c[0]+n)/8);a++)for(let s=Math.floor((i.c[2]-n)/8);s<=Math.floor((i.c[2]+n)/8);s++){let o=a*4096+s;this.celle.has(o)||this.celle.set(o,[]),this.celle.get(o).push(i)}}this.vuota=[]}formeIn(t,e){return this.celle.get(Math.floor(t/this.L)*4096+Math.floor(e/this.L))||this.vuota}aggiungi(t,e=[0,0,0],i=.4,n=0){if(this.n>=this.max)return-1;let a=this.n++;this.x[a]=t[0],this.y[a]=t[1],this.z[a]=t[2],this.vx[a]=e[0],this.vy[a]=e[1],this.vz[a]=e[2],this.r[a]=i,this.im[a]=1/(.25+i*i*i*1.6),this.qx[a]=0,this.qy[a]=0,this.qz[a]=0,this.qw[a]=1,this.sonno[a]=0,this.dorme[a]=0,this.tinta[a]=n;let s=this.mondo.raggio([t[0],t[1],t[2]],[0,-1,0],60);return this.suolo[a]=s===null?-1e3:t[1]-s,a}sveglia(t){this.dorme[t]=0,this.sonno[t]=0}cella(t,e,i){return(Math.floor(t/hi)*73856093^Math.floor(e/hi)*19349663^Math.floor(i/hi)*83492791)&Ts-1}passo(t,e=[]){let{x:i,y:n,z:a,vx:s,vy:o,vz:A,r:l,im:c,dorme:h}=this,u=this.mondo,p=this.n,f=0;this.urti=0;for(let m=0;m<p;m++){if(h[m])continue;f++,o[m]-=14*t;let v=u.pelo(i[m],a[m]);if(v!==null&&n[m]-l[m]<v){let M=Math.min(1,(v-(n[m]-l[m]))/(2*l[m]));o[m]+=14*2.6*M*t;let x=1-Math.min(1,1.8*M*t);s[m]*=x,o[m]*=x,A[m]*=x}i[m]+=s[m]*t,n[m]+=o[m]*t,a[m]+=A[m]*t}for(let m=0;m<p;m++){if(h[m])continue;let v=this.formeIn(i[m],a[m]);if(!v.length)continue;let M=u.distanzaXYZ?u.distanzaXYZ(i[m],n[m],a[m],v):u.distanza([i[m],n[m],a[m]],v);if(M>=l[m])continue;let x=u.normale([i[m],n[m],a[m]],v),y=l[m]-M;i[m]+=x[0]*y,n[m]+=x[1]*y,a[m]+=x[2]*y,x[1]>.6&&(this.suolo[m]=n[m]-l[m]),this.rimbalza(m,x,0,0,0,D0,t,!0)}let g=this.testa.fill(-1),d=this.dopo;for(let m=0;m<p;m++){let v=this.cella(i[m],n[m],a[m]);d[m]=g[v],g[v]=m}for(let m=0;m<p;m++){if(h[m])continue;let v=Math.floor(i[m]/hi),M=Math.floor(n[m]/hi),x=Math.floor(a[m]/hi);for(let y=-1;y<=1;y++)for(let P=-1;P<=1;P++)for(let w=-1;w<=1;w++){let T=g[((v+y)*73856093^(M+P)*19349663^(x+w)*83492791)&Ts-1];for(;T!==-1;T=d[T]){if(T===m||T<m&&!h[T])continue;let R=i[T]-i[m],C=n[T]-n[m],O=a[T]-a[m],B=l[m]+l[T],N=R*R+C*C+O*O;if(N>=B*B||N<1e-12)continue;let U=Math.sqrt(N),X=R/U,ot=C/U,j=O/U,G=B-U,V=h[m]?0:c[m],Q=h[T]?0:c[T],Y=V+Q;if(Y===0)continue;i[m]-=X*G*V/Y,n[m]-=ot*G*V/Y,a[m]-=j*G*V/Y,i[T]+=X*G*Q/Y,n[T]+=ot*G*Q/Y,a[T]+=j*G*Q/Y;let tt=(s[T]-s[m])*X+(o[T]-o[m])*ot+(A[T]-A[m])*j;if(tt>=0)continue;let b=-(1+(tt<-.8?Eu:0))*tt/(c[m]+c[T]);(b*c[m]>.6||b*c[T]>.6)&&(h[m]&&this.sveglia(m),h[T]&&this.sveglia(T));let D=h[m]?0:b*c[m],H=h[T]?0:b*c[T];s[m]-=X*D,o[m]-=ot*D,A[m]-=j*D,s[T]+=X*H,o[T]+=ot*H,A[T]+=j*H,this.urti++}}}for(let m of e){if(!m)continue;let v=m.v||[0,0,0],M=m.peso||1,x=0,y=0,P=0;for(let w of m.palle){let T=Math.floor(w[0]/hi),R=Math.floor(w[1]/hi),C=Math.floor(w[2]/hi),O=Math.ceil((w[3]+.6)/hi);for(let B=-O;B<=O;B++)for(let N=-O;N<=O;N++)for(let U=-O;U<=O;U++){let X=g[((T+B)*73856093^(R+N)*19349663^(C+U)*83492791)&Ts-1];for(;X!==-1;X=d[X]){let ot=i[X]-w[0],j=n[X]-w[1],G=a[X]-w[2],V=w[3]+l[X],Q=ot*ot+j*j+G*G;if(Q>=V*V||Q<1e-12)continue;let Y=Math.sqrt(Q),tt=ot/Y,b=j/Y,D=G/Y;h[X]&&this.sveglia(X);let H=V-Y;i[X]+=tt*H,n[X]+=b*H,a[X]+=D*H;let Z=(s[X]-v[0])*tt+(o[X]-v[1])*b+(A[X]-v[2])*D;if(Z>=0)continue;let L=-(1+Eu)*Z/(c[X]+1/M);s[X]+=tt*L*c[X],o[X]+=b*L*c[X]+Math.min(3,-Z*.25),A[X]+=D*L*c[X],x-=tt*L/M,y-=b*L/M,P-=D*L/M,this.urti++}}}if(m.x&&(x||y||P)){let w=m.x.v;w[0]+=x,w[1]+=m.tipo==="gatto"?0:y,w[2]+=P}}for(let m=0;m<p;m++){if(h[m])continue;let v=s[m]*s[m]+o[m]*o[m]+A[m]*A[m],M=A[m],x=-s[m],y=Math.hypot(M,x);y>1e-4&&this.gira(m,M/y,0,x/y,y*t/l[m]),this.sonno[m]=v<.09?this.sonno[m]+t:0,this.sonno[m]>.5&&(h[m]=1,s[m]=o[m]=A[m]=0),n[m]<-40&&(n[m]=30,i[m]=(Math.random()-.5)*40,a[m]=10+(Math.random()-.5)*40,s[m]=o[m]=A[m]=0)}this.svegli=f}rimbalza(t,e,i,n,a,s,o,A){let{vx:l,vy:c,vz:h}=this,u=l[t]-i,p=c[t]-n,f=h[t]-a,g=u*e[0]+p*e[1]+f*e[2];if(g>=0)return;let d=g>-1.2?0:s,m=u-g*e[0],v=p-g*e[1],M=f-g*e[2],x=Math.hypot(m,v,M),P=(1-(x>1e-6?Math.min(1,E0*(1+d)*-g/x):0))*(A?1-Math.min(1,_0*o):1);l[t]=i+m*P-e[0]*g*d,c[t]=n+v*P-e[1]*g*d,h[t]=a+M*P-e[2]*g*d}gira(t,e,i,n,a){let s=Math.sin(a/2),o=Math.cos(a/2),A=e*s,l=i*s,c=n*s,h=this.qx[t],u=this.qy[t],p=this.qz[t],f=this.qw[t],g=o*h+A*f+l*p-c*u,d=o*u-A*p+l*f+c*h,m=o*p+A*u-l*h+c*f,v=o*f-A*h-l*u-c*p,M=Math.hypot(g,d,m,v)||1;this.qx[t]=g/M,this.qy[t]=d/M,this.qz[t]=m/M,this.qw[t]=v/M}foto(t=!1){let e=[];for(let i=0;i<this.n;i++)!t&&this.dorme[i]||e.push(i,Math.round(this.x[i]*100),Math.round(this.y[i]*100),Math.round(this.z[i]*100),Math.round(this.vx[i]*100),Math.round(this.vy[i]*100),Math.round(this.vz[i]*100));return e}correggi(t,e=.05,i=!1){for(let n=0;n<t.length;n+=7){let a=t[n];if(a>=this.n)continue;let s=t[n+4]/100,o=t[n+5]/100,A=t[n+6]/100,l=t[n+1]/100+s*e,c=t[n+2]/100+o*e,h=t[n+3]/100+A*e,u=l-this.x[a],p=c-this.y[a],f=h-this.z[a],g=u*u+p*p+f*f;if(i&&s*s+o*o+A*A<.01){this.x[a]=l,this.y[a]=c,this.z[a]=h,this.vx[a]=this.vy[a]=this.vz[a]=0,this.dorme[a]=1;continue}let d=g>4?1:.35;this.x[a]+=u*d,this.y[a]+=p*d,this.z[a]+=f*d,(g>4e-4||s*s+o*o+A*A>.04)&&(this.vx[a]=s,this.vy[a]=o,this.vz[a]=A,this.sveglia(a))}}};var Ls=4,Rs=class{constructor(t,e=30,i=Math.random){this.caso=i,this.gatti=[];for(let n=0;n<e;n++)this.aggiungi(this.posto())}posto(){let t=this.caso;return[6+t()*28,.2,46+t()*28]}aggiungi(t){let e=Ps(t);return e.mente={voglio:[0,0],fino:0,corri:!1,salta:0,tinta:this.gatti.length%8},e.dt=0,this.gatti.push(e),e}passo(t,e,i,n={}){let a=this.gatti,s=a.length;for(let o=e%Ls;o<s;o+=Ls){let A=a[o],l=A.mente,c=t*Ls;l.fino-=c,l.fino<=0&&this.pensa(A,n);for(let u of n.corpi||[]){if(u.tipo!=="mezzo")continue;let p=u.palle[0],f=u.v||u.x&&u.x.v||[0,0,0],g=A.p[0]-p[0],d=A.p[2]-p[2],m=Math.hypot(g,d);if(m<7&&Math.hypot(f[0],f[2])>5&&f[0]*g+f[2]*d>0){let v=Math.sign(f[0]*d-f[2]*g)||1;l.voglio=[-f[2]*v,f[0]*v].map(M=>M/(Math.hypot(f[0],f[2])||1)),l.corri=!0,l.fino=.8,m<3.5&&(l.salta=1)}}let h={x:l.voglio[0],z:l.voglio[1],corri:l.corri,salta:l.salta>0};l.salta=0,ys(A,h,c,i),A.p[1]<-25&&(A.p=this.posto(),A.v=[0,0,0])}if(e%Ls===0){let o=a.map(A=>({tipo:"gatto",x:A,palle:ki(A),peso:mn.gatto}));for(let A=0;A<s;A++){for(let l=A+1;l<s;l++){let c=a[A].p,h=a[l].p;Math.abs(c[0]-h[0])>.8||Math.abs(c[2]-h[2])>.8||vn(o[A],o[l],!0)&&(o[A].palle=ki(a[A]),o[l].palle=ki(a[l]))}for(let l of n.corpi||[]){let c=l.palle[0],h=a[A].p;Math.abs(h[0]-c[0])>3||Math.abs(h[2]-c[2])>3||vn(o[A],l,!!l.x)&&(o[A].palle=ki(a[A]))}}}}pensa(t,e){let i=t.mente,n=this.caso();i.corri=!1,i.fino=1+this.caso()*1.5;let a=e.palle;if(a&&a.n&&n<.45){let s=-1,o=25;for(let A=0;A<6;A++){let l=Math.floor(this.caso()*a.n),c=Math.hypot(a.x[l]-t.p[0],a.z[l]-t.p[2]);c<o&&(o=c,s=l)}if(s>=0){let A=a.x[s]-t.p[0],l=a.z[s]-t.p[2],c=Math.hypot(A,l)||1;i.voglio=[A/c,l/c],i.corri=c>3,i.fino=Math.min(2.5,c/5+.4);return}}if(n<.75){let s=this.caso()*Math.PI*2,o=.5+this.caso()*.5,A=Math.hypot(t.p[0]-20,t.p[2]-60)>22;i.voglio=A?I.norm([20-t.p[0],0,60-t.p[2]]).filter((l,c)=>c!==1).map(l=>l*o):[Math.sin(s)*o,Math.cos(s)*o],this.caso()<.15&&(i.salta=1);return}i.voglio=[0,0],this.caso()<.3&&(i.salta=1)}foto(){let t=[];for(let e of this.gatti)t.push(Math.round(e.p[0]*100),Math.round(e.p[1]*100),Math.round(e.p[2]*100),Math.round(e.v[0]*100),Math.round(e.v[1]*100),Math.round(e.v[2]*100),Math.round(Math.atan2(e.dir[0],e.dir[1])*100),(e.aTerra?1:0)|(e.nuota?2:0)|e.mente.tinta<<2);return t}},zs=class{constructor(){this.gatti=[]}ricevi(t,e=.05){let i=t.length/8;for(;this.gatti.length<i;)this.gatti.push({p:[0,0,0],v:[0,0,0],dir:[0,1],aTerra:!0,nuota:!1,tinta:0,errore:[0,0,0],nuovo:!0});this.gatti.length=i;for(let n=0;n<i;n++){let a=this.gatti[n],s=n*8,o=[t[s+3]/100,t[s+4]/100,t[s+5]/100],A=[t[s]/100+o[0]*e,t[s+1]/100+(t[s+7]&1?0:o[1]*e),t[s+2]/100+o[2]*e],l=I.sub(a.p,A);a.errore=a.nuovo||I.len(l)>3?[0,0,0]:I.add(a.errore,l),a.p=A,a.v=o,a.nuovo=!1;let c=t[s+6]/100;a.dir=[Math.sin(c),Math.cos(c)],a.aTerra=!!(t[s+7]&1),a.nuota=!!(t[s+7]&2),a.tinta=t[s+7]>>2}}passo(t){let e=Math.exp(-t/.12);for(let i of this.gatti)i.p[0]+=i.v[0]*t,i.p[2]+=i.v[2]*t,i.aTerra||(i.p[1]+=i.v[1]*t,i.v[1]-=14*t),i.errore[0]*=e,i.errore[1]*=e,i.errore[2]*=e}vista(t){let e=this.gatti[t];return[e.p[0]+e.errore[0],e.p[1]+e.errore[1],e.p[2]+e.errore[2]]}corpi(){return this.gatti.map(t=>({tipo:"gatto",palle:ki(t),peso:mn.gatto,v:t.v}))}};var Pn=1/120,_u=1/20,Bu=-25,B0=2.4,Yr=class{constructor(t,e,{tiene:i=!1,capo:n=null,manda:a=()=>{},partenza:s=null,palle:o=1500,folla:A=0,seme:l=7}={}){if(this.id=t,this.arena=e,this.mondo=e.mondo,this.tiene=i,this.capo=i?t:n,this.manda=a,this.partenza=s||e.partenza,this.corpo=Ps(this.partenza),this.sopra=null,this.mezzi=new Map,this.casa=new Map(e.mezzi.map(h=>[h.tipo,h])),i)for(let h of e.mezzi)this.mezzi.set(h.tipo,this.nuovo(h.tipo,h.p,h.yaw));this.eco=new Map,this.dove=new Map,this.ultima=new Map,this.t=0,this.scarto=0,this.tFoto=0,this.eventi=[],this.chiesto=null,this.usaPrima=!1,this.trucchi=new xn,this.inAria=!1,this.truccoPrima=!1;let c=l;this.caso=()=>(c=c*16807%2147483647,c/2147483647),this.tick=0,this.nFoto=0,this.palle=o?new Is(this.mondo,o):null,i?this.folla=new Rs(this.mondo,A,this.caso):this.follaEco=new zs}nuovo(t,e,i){let n=nu(t,e,i);return n.id=t,n.chi=null,n}get ora(){return this.t+this.scarto}passo(t={}){let e=Pn,i=this.corpo,n=this.arena;this.t+=e,this.mondo.t=this.ora,t.usa&&!this.usaPrima&&this.usa(),this.usaPrima=!!t.usa,this.tick++;let a=this.sopra&&this.mezzi.get(this.sopra);if(t.trucco&&!this.truccoPrima&&(this.truccoAttesa=.25,this.truccoAsse=t.asse),this.truccoAttesa>0&&(this.truccoAttesa-=e,(a?!a.contatti&&!a.inAcqua&&a.aria>.03&&!a.rotaia:!i.aTerra&&!i.nuota&&!(i.botta>0)&&!i.rotaia)&&this.trucchi.premi(t.asse||this.truccoAsse,!0)&&(this.eventi.push({tipo:"trucco"}),this.truccoAttesa=0)),this.truccoPrima=!!t.trucco,this.trucchi.passo(e,!!t.truccoTenuto),!this.sopra){let c=i.rotaia?ou(i,t,e,n.rotaie):ys(i,t,e,this.mondo);(c.fine||c.salto&&!i.rotaia&&this.trucchi.scivola)&&(this.trucchi.fineScivolata(),this.eventi.push({tipo:"stacco",p:[...i.p]})),!i.rotaia&&n.rotaie&&su(i,n.rotaie)&&(this.trucchi.inizioScivolata(),this.eventi.push({tipo:"aggancio",p:[...i.p]})),c.atterrato&&this.eventi.push({tipo:"atterrato",chi:"gatto",p:[...i.p]}),c.salto&&this.eventi.push({tipo:"salto",chi:"gatto"});for(let u of n.elastici||[])i.aTerra&&Math.hypot(i.p[0]-u.x,i.p[2]-u.z)<u.r&&Math.abs(i.p[1]-u.y)<.3&&(i.v[1]=t.salta?u.v*1.22:u.v,i.aTerra=!1,i.salto=!1,i.p[1]+=.02,this.eventi.push({tipo:"elastico",p:[...i.p]}));let h=!i.aTerra&&!i.nuota;this.inAria&&!h&&this.atterra(null),this.inAria=h,c.tuffo&&this.eventi.push({tipo:"tuffo"});for(let u of n.spinte)if(Su(u,i.p)&&i.aTerra){let p=I.dot(i.v,u.verso),f=u.v*.5;p<f&&(i.v=I.madd(i.v,u.verso,f-p),i.v[1]=4,i.aTerra=!1,i.botta=.5,this.eventi.push({tipo:"spinta"}))}i.p[1]<Bu&&this.ricompari()}for(let c of this.mezzi.values()){let h=c.id===this.sopra,u=h?t.mezzo?{...t.mezzo,salta:t.salta}:ru(c,t,t.asse):{gas:0,sterzo:0};h&&(u.derapa=!!t.salta&&(Math.abs(u.sterzo)>.3||!!c.deriva)),h&&t.raddrizza&&!this.raddrizzaPrima&&nl(c);let p=c.aria;if(c.staccato>0&&(c.staccato-=e),c.rotaia){let d=lu(c,u,e,n.rotaie);h&&(d.fine||d.salto)&&(this.trucchi.fineScivolata(),this.eventi.push({tipo:"stacco",p:[...c.p]})),h&&d.salto&&this.eventi.push({tipo:"salto",chi:c.tipo});continue}let f=au(c,u,e,this.mondo);n.rotaie&&Au(c,n.rotaie)&&h&&(this.trucchi.inizioScivolata(),this.eventi.push({tipo:"aggancio",p:[...c.p]})),h&&(f.atterrato&&this.eventi.push({tipo:"atterrato",chi:c.tipo,aria:f.atterrato.aria,dritto:f.atterrato.dritto,p:[...c.p]}),p>0&&c.aria===0&&this.atterra(c),f.capottato&&this.eventi.push({tipo:"capottato"}),f.turbo&&this.eventi.push({tipo:"turbo",livello:f.turbo,p:[...c.p]}),f.salto&&this.eventi.push({tipo:"salto",chi:c.tipo}));let g=c.contatti?n.spinte.find(d=>Su(d,c.p)):null;if(g){let d=I.dot(c.v,g.verso);if(d<g.v){let m=I.sub(c.v,I.scala(g.verso,d));m[1]=0,c.v=I.add(I.madd(c.v,g.verso,g.v-d),I.scala(m,-.7))}h&&!c.spinto&&this.eventi.push({tipo:"spinta"})}c.spinto=!!g;for(let d of n.elastici||[])c.contatti&&Math.hypot(c.p[0]-d.x,c.p[2]-d.z)<d.r&&c.v[1]<d.v*.8&&(c.v[1]=d.v*.8,h&&this.eventi.push({tipo:"elastico",p:[...c.p]}));if(c.p[1]<Bu)if(h){this.eventi.push({tipo:"ricompari"});let d=this.partenza;this.metti(c,[d[0]+2,d[1]+1,d[2]],0)}else{let d=this.casa.get(c.tipo);this.metti(c,[d.p[0],d.p[1]+1,d.p[2]],d.yaw)}}this.raddrizzaPrima=!!t.raddrizza;let s=this.sopra&&this.mezzi.get(this.sopra);if(s){i.p=I.add(s.p,Nt.ruota(s.q,s.d.sedile)),i.v=[...s.v];let c=ei(s).avanti;i.dir=I.len([c[0],0,c[2]])>.1?[c[0],c[2]].map(h=>h/Math.hypot(c[0],c[2])):i.dir,i.aTerra=s.contatti>0,i.nuota=!1}for(let c of this.eco.values())c.passo(e);let o=[...this.mezzi.values()].map(Wr);this.sopra||o.unshift(Wr(i));for(let c=0;c<o.length;c++){for(let h=c+1;h<o.length;h++){let u=vn(o[c],o[h],!0);u&&(o[c].palle=Us(o[c]),o[h].palle=Us(o[h]),this.colpo(u,o[c],o[h]))}for(let h of this.eco.values()){let u=h.corpo(yi);if(!u)continue;let p=vn(o[c],u);p&&(o[c].palle=Us(o[c]),this.colpo(p,o[c],u))}}let A=[...this.eco.values()].map(c=>c.corpo(yi)).filter(Boolean);if(this.folla&&this.folla.passo(e,this.tick,this.mondo,{palle:this.palle,corpi:[...o,...A]}),this.follaEco){this.follaEco.passo(e);let c=o[0];if(c&&c.tipo==="gatto")for(let h of this.follaEco.corpi()){let u=h.palle[0];Math.abs(u[0]-i.p[0])<1.2&&Math.abs(u[2]-i.p[2])<1.2&&vn(c,h)&&(c.palle=Us(c))}}let l=this.palle&&this.palle.n>1e3;if(this.palle&&this.palle.n&&(!l||this.tick%2===0)){let c=this.folla?this.folla.gatti.map(h=>Wr(h)):this.follaEco.corpi();this.palle.passo(l?e*2:e,[...o,...A,...c])}if(this.tFoto+=e,this.tFoto>=_u-1e-9){this.tFoto-=_u,this.nFoto++;let c=wu(i,this.sopra),h=[...this.mezzi.values()].map(Ss),u=this.trucchi.foto();i.pattini&&(c.pt=1),i.rotaia&&(c.ro=1);for(let f of h){let g=this.mezzi.get(f.id);g&&g.rotaia&&(f.ro=1)}if(u)if(this.sopra){let f=h.find(g=>g.id===this.sopra);f&&(f.tr=u)}else c.tr=u;let p={tipo:"foto",da:this.id,t:this.ora,cose:[c,...h]};if(this.tiene){if(this.folla.gatti.length&&(p.fo=this.folla.foto()),this.palle&&this.palle.n&&this.nFoto%2===0){let f=this.nFoto%40===0;p.pa=this.palle.foto(f),f&&(p.pk=1)}this.palle&&(p.np=this.palle.n)}this.manda(p)}}colpo(t,e,i){if(t.forza<2.5)return;(e.x===this.corpo||e.tipo==="mezzo"&&e.x.id===this.sopra||i.x===this.corpo||i.tipo==="mezzo"&&i.x?.id===this.sopra)&&this.eventi.push({tipo:"botta",forza:t.forza})}atterra(t){let e=this.trucchi.atterra();if(!e)return;let i=this.corpo;if(this.eventi.push({tipo:"trucchi",...e,p:t?[...t.p]:[...i.p]}),e.esito==="pulito"){if(t){let n=ei(t).avanti,a=I.norm([n[0],0,n[2]]);t.v=I.madd(t.v,a,Math.min(6,2+e.combo*1.5))}else if(i.pattini){let n=Math.hypot(i.v[0],i.v[2])||1;i.v[0]+=i.v[0]/n*2.5,i.v[2]+=i.v[2]/n*2.5}return}t?(t.v=I.scala(t.v,.35),t.w=I.add(t.w,[(this.caso()-.5)*6,(this.caso()-.5)*4,(this.caso()-.5)*6])):(i.v=[i.v[0]*.3,3,i.v[2]*.3],i.aTerra=!1,i.botta=.8,i.rotaia=null)}pioggia(t,e=300){if(this.palle){if(!this.tiene){this.manda({tipo:"pioggia",da:this.id,a:this.capo,p:t,n:e});return}for(let i=0;i<e;i++){let n=this.caso()*Math.PI*2,a=Math.sqrt(this.caso())*9;this.nuovaPalla([t[0]+Math.cos(n)*a,t[1]+8+this.caso()*22,t[2]+Math.sin(n)*a],[0,-this.caso()*4,0])}this.eventi.push({tipo:"pioggia",n:e})}}nuovaPalla(t,e){let i=this.palle.n;return this.palle.aggiungi(t,e,.3+i*2654435761%1e3/1e3*.28,i%6)}gente(t=10){if(!this.tiene){this.manda({tipo:"gente",da:this.id,a:this.capo,n:t});return}for(let e=0;e<t;e++)this.folla.aggiungi(this.folla.posto())}metti(t,e,i){t.p=[...e],t.v=[0,0,0],t.w=[0,0,0],t.q=Nt.asse([0,1,0],i),t.ribaltato=0,t.rotaia=null,t.deriva=null}ricompari(){let t=this.corpo;t.p=[...this.partenza],t.v=[0,0,0],t.botta=0,t.aTerra=!1,this.eventi.push({tipo:"ricompari"})}usa(){if(this.sopra){this.scendi();return}let t=this.corpo,e=(this.arena.pattini||[]).find(a=>Math.hypot(a.x-t.p[0],a.z-t.p[2])<2.2),i=null,n=(a,s,o,A,l,c)=>{if(!l)return;let h=I.add(s,Nt.ruota(o,yi[A].sedile)),u=Math.hypot(h[0]-t.p[0],h[1]-(t.p[1]+.5),h[2]-t.p[2]);u<B0&&(!i||u<i.d)&&(i={id:a,d:u,mio:c})};for(let a of this.mezzi.values())n(a.id,a.p,a.q,a.tipo,!a.chi,!0);for(let[a,s]of this.eco)a.startsWith("m:")&&n(s.vista.id,s.vista.p,s.vista.q,s.vista.tipo,!s.vista.chi,!1);if(e&&!t.rotaia&&(!i||Math.hypot(e.x-t.p[0],e.z-t.p[2])<i.d)){t.pattini=!t.pattini,this.eventi.push({tipo:t.pattini?"pattini":"scarpe"});return}if(i){if(i.mio){this.sali(this.mezzi.get(i.id));return}this.chiesto||(this.chiesto=i.id,this.manda({tipo:"sali",da:this.id,a:this.dove.get(i.id)||this.capo,id:i.id}))}}sali(t){t.chi=this.id,this.sopra=t.id,this.chiesto=null,this.corpo.botta=0,this.eventi.push({tipo:"salgo",id:t.id})}scendi(){let t=this.mezzi.get(this.sopra),e=this.corpo;if(!t){this.sopra=null;return}let{destra:i,avanti:n}=ei(t),a=[I.scala(i,-1.35),I.scala(i,1.35),I.scala(n,-1.6),[0,1.2,0]],s=null;for(let o of a){let A=I.add(t.p,[o[0],o[1]+.1,o[2]]);if([.4,.9,1.4].every(c=>this.mondo.distanza([A[0],A[1]+c,A[2]])>iu.RAGGIO+.05)){s=A;break}}if(e.p=s||I.add(t.p,[0,1.6,0]),e.v=[t.v[0]*.6,Math.max(0,t.v[1])+2.5,t.v[2]*.6],e.aTerra=!1,e.botta=I.len(t.v)>4?.4:0,t.chi=null,this.sopra=null,this.eventi.push({tipo:"scendo",id:t.id}),!this.tiene){let o=Ss(t);this.mezzi.delete(t.id),this.eco.set("m:"+t.id,new cr(o)),this.dove.set(t.id,this.capo),this.manda({tipo:"rendo",da:this.id,a:this.capo,id:t.id,foto:o})}}ricevi(t,e=.05){if(!(t.a&&t.a!==this.id)){if(t.tipo==="foto"){if((this.ultima.get(t.da)??-1/0)>=t.t)return;if(this.ultima.set(t.da,t.t),t.da===this.capo&&!this.tiene){let n=t.t+e-this.t;this.scarto=this.scartoPreso?this.scarto+(n-this.scarto)*.1:n,this.scartoPreso=!0}let i=this.tiene||this.scartoPreso?Math.min(.5,Math.max(0,this.ora-t.t)):e;if(t.fo&&this.follaEco&&this.follaEco.ricevi(t.fo,i),this.palle&&t.np!==void 0&&!this.tiene)for(;this.palle.n<t.np;)this.nuovaPalla([0,-100,0],[0,0,0]);t.pa&&this.palle&&!this.tiene&&this.palle.correggi(t.pa,i,!!t.pk);for(let n of t.cose){if(n.k==="m"&&this.mezzi.has(n.id))continue;let a=n.k==="g"?"g:"+t.da:"m:"+n.id;n.k==="m"&&this.dove.set(n.id,t.da);let s=this.eco.get(a);if(s)s.ricevi(n,i,t.t);else{let o=new cr(n);o.ricevi(n,i,t.t),this.eco.set(a,o)}}return}if(t.tipo==="sali"){let i=this.mezzi.get(t.id);if(!i||i.chi){this.manda({tipo:"no",da:this.id,a:t.da,id:t.id});return}i.chi=t.da;let n=Ss(i);this.mezzi.delete(i.id),this.eco.set("m:"+i.id,new cr(n)),this.dove.set(i.id,t.da),this.manda({tipo:"tuo",da:this.id,a:t.da,id:i.id,foto:n});return}if(t.tipo==="tuo"){let i=t.foto,n=this.nuovo(i.tipo,i.p,0);Cs(n,i),n.p=I.madd(n.p,n.v,e),this.mezzi.set(n.id,n),this.eco.delete("m:"+n.id),this.dove.set(n.id,this.id),this.chiesto===n.id&&!this.sopra?this.sali(n):(n.chi=null,this.chiesto=null);return}if(t.tipo==="no"){this.chiesto=null;return}if(t.tipo==="pioggia"&&this.tiene){this.pioggia(t.p,t.n);return}if(t.tipo==="gente"&&this.tiene){this.gente(t.n);return}if(t.tipo==="rendo"&&this.tiene){let i=t.foto,n=this.nuovo(i.tipo,i.p,0);Cs(n,i),n.p=I.madd(n.p,n.v,e),n.chi=null,this.mezzi.set(n.id,n),this.eco.delete("m:"+n.id),this.dove.set(n.id,this.id);return}if(t.tipo==="via"){this.eco.delete("g:"+t.da);for(let[i,n]of[...this.eco])if(i.startsWith("m:")&&this.dove.get(n.vista.id)===t.da&&(this.eco.delete(i),this.tiene)){let a=this.nuovo(n.vista.tipo,n.vista.p,0);Cs(a,{...n.vista,chi:null,mo:n.vista.mo||[]}),a.molle=(a.d.ruote||[]).map(()=>0),this.mezzi.set(a.id,a),this.dove.set(a.id,this.id)}}}}},Su=(r,t)=>t[0]>r.x0&&t[0]<r.x1&&t[2]>r.z0&&t[2]<r.z1,Us=r=>Wr(r.x).palle;var Ns=class{constructor({ritardo:t=.09,balla:e=.04,perde:i=.08,seme:n=7}={}){this.ritardo=t,this.balla=e,this.perde=i,this.s=n>>>0||1,this.t=0,this.code=[],this.chi=new Map,this.mandati=0,this.persi=0,this.affidabili=new Map}caso(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}collega(t){this.chi.set(t.id,t),t.manda=e=>this.manda(t.id,e)}manda(t,e){let i=JSON.stringify(e);for(let n of this.chi.keys()){if(n===t)continue;if(this.mandati++,e.tipo==="foto"&&this.caso()<this.perde){this.persi++;continue}let a=this.t+Math.max(.004,this.ritardo+(this.caso()*2-1)*this.balla);if(e.tipo!=="foto"){let s=t+">"+n;a=Math.max(a,(this.affidabili.get(s)||0)+1e-6),this.affidabili.set(s,a)}this.code.push({a:n,quando:a,testo:i})}}passo(t){this.t+=t;let e=this.code.filter(i=>i.quando<=this.t);if(e.length){this.code=this.code.filter(i=>i.quando>this.t),e.sort((i,n)=>i.quando-n.quando);for(let i of e)this.chi.get(i.a)?.ricevi(JSON.parse(i.testo),this.ritardo)}}};var Os=[[6,10],[-32,4],[-32,42],[-14,54],[10,44],[25,-2],[25,8],[25,22],[25.5,30],[31,48],[48,62],[56,30],[55,-40],[54,-50],[50,-56],[44,-52],[44,-36],[44,-10],[30,0],[14,4]],sl=8,Fs=class{constructor(t,{caso:e=Math.random}={}){this.g=t,this.caso=e,this.stato="va",this.t=0,this.punto=0,this.giri=0,this.vuole="moto",this.fermo=0,this.usa=!1,this.acro=!1}mezzo(t){let e=this.g,i=e.mezzi.get(t);if(i)return{p:i.p,q:i.q,libero:!i.chi||i.chi===e.id,tipo:i.tipo};let n=e.eco.get("m:"+t);return n?{p:n.vista.p,q:n.vista.q,libero:!n.vista.chi,tipo:n.vista.tipo}:null}comando(t){let e=this.g,i=e.corpo;this.t+=t;let n={x:0,z:0},a=(l,c,h=1)=>{let u=l-i.p[0],p=c-i.p[2],f=Math.hypot(u,p)||1;return n.x=u/f*h,n.z=p/f*h,f};if(this.usa)return this.usa=!1,n;if(e.sopra){let l=e.mezzi.get(e.sopra);if(!l)return n;this.stato!=="guida"&&(this.stato="guida",this.t=0,this.punto=this.vicino(l.p));let{su:c,avanti:h,destra:u}=ei(l),p=(T,R)=>({x:0,z:0,mezzo:{gas:T,sterzo:Math.max(-1,Math.min(1,R))}});if(!l.contatti&&!l.inAcqua)return p(l.aria>.3&&l.aria<1.1&&this.acro?1:0,0);this.acro=this.caso()<.5;let[f,g]=Os[this.punto],d=Math.hypot(f-l.p[0],g-l.p[2]);if(d<4.5&&(this.punto=(this.punto+1)%Os.length,this.punto===0&&this.giri++),this.punto>=sl-2&&this.punto<=sl&&l.p[2]>-4&&(f=25,g=l.p[2]+6),c[1]<.6)return p(1,0);if(this.rincorsa)return l.p[2]<9&&(this.rincorsa=!1,this.punto=sl-1,this.fermo=0),p(-1,0);let m=[h[0],h[2]],v=[u[0],u[2]],M=[(f-l.p[0])/(d||1),(g-l.p[2])/(d||1)],x=Math.atan2(M[0]*v[0]+M[1]*v[1],M[0]*m[0]+M[1]*m[1]),y=Math.hypot(l.v[0],l.v[2]),P=Math.abs(x)>.5&&y>9?-.5:Math.abs(x)>1.2?.55:1,w=x*1.8;if(this.fermo=y<1?this.fermo+t:0,this.fermo>2.5){if(Math.abs(l.p[0]-27)<6&&l.p[2]>27&&l.p[2]<41)return this.rincorsa=!0,p(-1,0);P=-1,w=-w,this.fermo>3.8&&(this.fermo=0)}if(this.giri>=1||this.t>70){if(y<2)return this.usa=!0,this.stato="cammina",this.t=0,this.giri=0,{x:0,z:0,usa:!0};P=-.6}return p(P,w)}if(this.stato==="guida"&&(this.stato="cammina",this.t=0),this.stato==="cammina"){let l=[...e.eco.entries()].find(([c])=>c.startsWith("g:"))?.[1]?.vista;if(l&&!l.m){let c=Math.hypot(l.p[0]-i.p[0],l.p[2]-i.p[2]);c>2.6&&a(l.p[0],l.p[2],c>8?1:.6),n.corri=c>8}return this.t>12&&(this.stato="va",this.t=0,this.vuole=this.caso()<.6?"moto":"quad"),n}let s=this.mezzo(this.vuole);if((!s||!s.libero)&&(this.vuole=this.vuole==="moto"?"quad":"moto",s=this.mezzo(this.vuole)),!s||!s.libero)return this.stato="cammina",this.t=6,n;let o=I.add(s.p,Nt.ruota(s.q,yi[s.tipo].sedile)),A=a(o[0],o[2],1);return n.corri=A>5,A<1.9?(this.usa=!0,{x:0,z:0,usa:!0}):(this.t>25&&(this.t=0,this.vuole=this.vuole==="moto"?"quad":"moto"),n)}vicino(t){let e=0,i=1/0;return Os.forEach(([n,a],s)=>{let o=Math.hypot(n-t[0],a-t[2]);o<i&&(i=o,e=s)}),(e+1)%Os.length}};var ui=new URLSearchParams(location.search),Hs=[.03,.09,.18],qr={indietro:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',aiuto:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.4 2.4c-.7.3-1 .9-1 1.6v.4"/><path d="M12 17.2v.1"/></svg>',rete:'<svg viewBox="0 0 24 24"><circle cx="6" cy="17" r="2"/><circle cx="18" cy="7" r="2"/><path d="M8 15.5l8-7"/></svg>',palle:'<svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4"/><circle cx="16" cy="9" r="4"/><circle cx="17" cy="18" r="2.5"/></svg>',intero:'<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>'},S0={colore:"#5ee1ff",coloreCapelli:"#2a5a8a",pelle:"#f1c7a3"},C0={colore:"#f68187",coloreCapelli:"#424c6e",pelle:"#f9e6cf"},Cu=new _(0,1,0),ol=r=>Math.round(r).toLocaleString("it-IT"),Qs=class{constructor(t){this.radice=t,this.tocco=matchMedia("(pointer: coarse)").matches,document.body.classList.toggle("tocco",this.tocco),this.dom(),this.arena=rl(),this.tu=new Yr("tu",this.arena,{tiene:!0,palle:4e3,folla:Math.min(200,+(ui.get("gente")??20))}),this.conAmica=ui.get("amica")!=="0",this.rete=new Ns({ritardo:Hs[1],balla:.03,perde:.05}),ui.has("rete")&&(this.rete.ritardo=Math.max(.005,+ui.get("rete")/1e3)),this.rete.collega(this.tu),this.conAmica&&(this.mia=new Yr("mia",rl(),{capo:"tu",partenza:[9,0,9],palle:0}),this.rete.collega(this.mia),this.amica=new Fs(this.mia));let e=zh(this.tela);Object.assign(this,{renderer:e.renderer,sc:e.sc,sole:e.sole,qualita:e.qualita}),e.stelle.visible=!1,this.renderer.info.autoReset=!1,this.resa=e.qualita==="alta"&&Hr.puo(e.renderer)?new Hr(e.renderer,{trasparente:!0,sole:1,emissivo:1.4}):null,this.camera=new ue(55,1,.3,400),Nh(ui.has("ora")?+ui.get("ora"):11),this.sole.shadow.mapSize.set(2048,2048),this.prBase=this.renderer.getPixelRatio(),Ch([]),this.scena=new ws(this.arena,this.sc),this.viste=new Map;for(let i of this.arena.mezzi){let n=new bs(i.tipo);this.sc.add(n.gruppo,n.ombraG),this.viste.set(i.tipo,n)}this.gatti={tu:this.gatto(S0),mia:this.conAmica?this.gatto(C0):null},this.vPalle=new Ds(this.sc,this.tu.palle.max),this.vFolla=new Es(this.sc,300),this.part=new _s(this.sc,700),this.cam={yaw:0,pitch:.36,dist:9,voluta:9,centro:new _(0,1.3,6),mossa:-9},this.tasti=new Set,this.leva=null,this.dita=new Map,this.tastiDito={usa:!1,salta:!1,trucco:!1},this.prima=performance.now(),this.resto=0,this.tScritta=0,this.lenti=0,this.corsa=!1,this.fermoDa=0,this.misure={fisica:0,fotogrammi:0,t0:performance.now(),fps:0},this.comandi(),addEventListener("resize",()=>this.misura()),this.misura(),this.adatta=new fs(this.renderer,{resa:this.resa,misura:()=>this.misura(),alta:ui.get("qualita")==="alta"}),ui.has("palle")&&this.tu.pioggia([0,0,14],Math.min(1500,+ui.get("palle"))),this.ciclo=this.ciclo.bind(this),requestAnimationFrame(this.ciclo)}dom(){let t=this.radice;t.innerHTML=`
      <canvas id="tela" tabindex="0"></canvas>
      <div class="ar-su">
        <a class="ar-tasto" href="./" title="Torna a Nookora" aria-label="Torna a Nookora">${qr.indietro}</a>
        <span class="ar-spazio"></span>
        <span class="ar-punti" title="I punti delle acrobazie">0</span>
        <span class="ar-spazio"></span>
        <button class="ar-tasto" data-crash title="Il crash test">${qr.palle}</button>
        <button class="ar-tasto" data-rete title="Quanto ritardo ha Mia (la rete finta)">${qr.rete}<span class="ar-piano">90 ms</span></button>
        <button class="ar-tasto ar-solo-largo" data-intero aria-label="Schermo intero">${qr.intero}</button>
        <button class="ar-tasto" data-aiuto aria-label="I comandi">${qr.aiuto}</button>
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
      </div></div>`,this.tela=t.querySelector("#tela"),this.combo=t.querySelector(".ar-combo"),this.esito=t.querySelector(".ar-esito"),this.puntiDom=t.querySelector(".ar-punti"),this.veloce=t.querySelector(".ar-veloce"),this.aiuto=t.querySelector(".ar-aiuto"),this.levaDom=t.querySelector(".ar-leva"),this.carta=t.querySelector(".ar-carta"),this.crash=t.querySelector(".ar-crash"),this.misureDom=t.querySelector(".ar-misure"),t.querySelector("[data-aiuto]").onclick=()=>this.carta.classList.add("su"),t.querySelector("[data-chiudi]").onclick=()=>{this.carta.classList.remove("su"),this.tela.focus()},this.carta.onclick=i=>{i.target===this.carta&&this.carta.classList.remove("su")},t.querySelector("[data-crash]").onclick=()=>this.crash.classList.toggle("su"),t.querySelector("[data-pioggia]").onclick=()=>{let i=this.tu.corpo.p;this.tu.pioggia([i[0],0,i[2]+6],300),this.tela.focus()},t.querySelector("[data-gente]").onclick=()=>{this.tu.gente(20),this.tela.focus()},t.querySelector("[data-intero]").onclick=()=>this.schermoIntero();for(let i of t.querySelectorAll(this.tocco?".ar-solo-tastiera":".ar-solo-dito"))i.remove();let e=t.querySelector("[data-rete]");e.onclick=()=>{let i=(Hs.indexOf(this.rete.ritardo)+1)%Hs.length;this.rete.ritardo=Hs[i<0?1:i],e.querySelector(".ar-piano").textContent=Math.round(this.rete.ritardo*1e3)+" ms"},ui.get("amica")==="0"&&e.remove(),this.nome=document.createElement("div"),this.nome.className="ar-nome",this.nome.textContent="Mia",t.appendChild(this.nome);try{localStorage.getItem("nookora.arena.vista")||(this.carta.classList.add("su"),localStorage.setItem("nookora.arena.vista","1"))}catch{}}async schermoIntero(){try{if(document.fullscreenElement){await document.exitFullscreen();return}await document.documentElement.requestFullscreen(),await navigator.keyboard?.lock?.(["KeyW","KeyA","KeyS","KeyD","Escape"])}catch{}this.tela.focus()}gatto(t){let e=new vs(t);return this.sc.add(e.gruppo),e.ombra=e.gruppo.children[1],e.pattini=fu(),e.pattini.visible=!1,e.corpo.add(e.pattini),e}misura(){let t=innerWidth,e=innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=t<e?68:55,this.camera.updateProjectionMatrix(),this.resa&&this.resa.misura(),this.part?.misura(e*this.renderer.getPixelRatio()*(this.resa?this.resa.scalaInterna:1),this.camera.fov)}comandi(){let t=this.tela;addEventListener("keydown",i=>{if(i.target.closest?.(".ar-carta")&&i.key!=="Escape")return;if(i.key==="Escape"){this.carta.classList.toggle("su");return}let n=i.key.length===1?i.key.toLowerCase():i.key;(i.ctrlKey||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(n))&&i.preventDefault(),n==="Control"&&!i.repeat&&(this.corsa=!this.corsa),i.repeat||(n==="f"&&(this.usaUnaVolta=!0),n===" "&&(this.saltoUnaVolta=!0),n==="r"&&(this.raddrizzaUnaVolta=!0)),this.tasti.add(n),n==="Shift"&&this.tasti.add("shift")}),addEventListener("keyup",i=>{let n=i.key.length===1?i.key.toLowerCase():i.key;this.tasti.delete(n),n==="Shift"&&this.tasti.delete("shift")}),addEventListener("blur",()=>this.tasti.clear()),addEventListener("contextmenu",i=>i.preventDefault()),t.addEventListener("wheel",i=>{i.preventDefault(),this.cam.voluta=Math.min(40,Math.max(3.5,this.cam.voluta*(i.deltaY>0?1.12:1/1.12)))},{passive:!1}),t.addEventListener("mousedown",i=>{i.button===1&&i.preventDefault()}),t.addEventListener("auxclick",i=>{i.button===1&&i.preventDefault()}),t.addEventListener("pointerdown",i=>{if(t.setPointerCapture(i.pointerId),t.focus(),i.pointerType==="mouse"&&i.button===2){this.truccoUnaVolta=!0,this.truccoGiu=!0;return}let n={x:i.clientX,y:i.clientY,x0:i.clientX,y0:i.clientY,t0:performance.now(),tipo:i.pointerType,tasto:i.button};if(i.pointerType==="touch"&&i.clientX<innerWidth*.45&&i.clientY>innerHeight*.3&&!this.leva&&(n.leva=!0,this.leva={id:i.pointerId,x0:i.clientX,y0:i.clientY,x:0,y:0},this.levaDom.style.display="block",this.posaLeva()),this.dita.set(i.pointerId,n),i.pointerType==="touch"&&this.dita.size>=2){let[a,s]=[...this.dita.values()].filter(o=>!o.leva);a&&s&&(this.pizzico={d:Math.hypot(a.x-s.x,a.y-s.y),voluta:this.cam.voluta})}}),t.addEventListener("pointermove",i=>{let n=this.dita.get(i.pointerId);if(!n)return;let a=i.clientX-n.x,s=i.clientY-n.y;if(n.x=i.clientX,n.y=i.clientY,n.leva){let l=this.leva,c=i.clientX-l.x0,h=i.clientY-l.y0,u=Math.hypot(c,h);u>50&&(l.x0+=c*(1-50/u),l.y0+=h*(1-50/u),c=i.clientX-l.x0,h=i.clientY-l.y0,this.posaLeva());let p=Math.min(1,Math.max(0,(Math.hypot(c,h)-6)/36)),f=Math.hypot(c,h)||1;l.x=c/f*p,l.y=-h/f*p,this.levaDom.firstElementChild.style.transform=`translate(${c}px, ${h}px)`;return}let o=[...this.dita.values()].filter(A=>!A.leva);if(this.pizzico&&o.length>=2){let A=Math.hypot(o[0].x-o[1].x,o[0].y-o[1].y);this.cam.voluta=Math.min(40,Math.max(3.5,this.pizzico.voluta*this.pizzico.d/Math.max(20,A)));return}if(n.tipo==="mouse"&&i.buttons&4){let A=.004*this.cam.dist,l=this.cam.yaw,c=this.cam.sposta||(this.cam.sposta=[0,0]);c[0]+=(Math.cos(l)*a+Math.sin(l)*s)*A,c[1]+=(-Math.sin(l)*a+Math.cos(l)*s)*A,Math.hypot(n.x-n.x0,n.y-n.y0)>6&&(n.trascinato=!0);return}if(n.tipo!=="mouse"||i.buttons&1){let A=n.tipo==="touch"?.007:.0055;this.cam.yaw-=a*A,this.cam.pitch=Math.min(1.25,Math.max(-.05,this.cam.pitch+s*.0045)),Math.hypot(n.x-n.x0,n.y-n.y0)>6&&(n.trascinato=!0,this.cam.mossa=performance.now()/1e3)}}),addEventListener("pointerup",i=>{i.button===2&&(this.truccoGiu=!1)});let e=i=>{let n=this.dita.get(i.pointerId);if(this.dita.delete(i.pointerId),!!n){if(n.leva){this.leva=null,this.levaDom.style.display="none",this.levaDom.firstElementChild.style.transform="";return}this.dita.size<2&&(this.pizzico=null),n.tipo==="mouse"&&n.tasto===0&&!n.trascinato&&performance.now()-n.t0<450&&i.type==="pointerup"&&(this.usaUnaVolta=!0),n.tipo==="mouse"&&n.tasto===1&&!n.trascinato&&i.type==="pointerup"&&(this.cam.sposta=null)}};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e);for(let i of this.radice.querySelectorAll("[data-dito]")){let n=i.dataset.dito;i.addEventListener("pointerdown",s=>{s.preventDefault(),i.setPointerCapture(s.pointerId),this.tastiDito[n]=!0,i.classList.add("giu"),n==="usa"&&(this.usaUnaVolta=!0),n==="trucco"&&(this.truccoUnaVolta=!0),n==="salta"&&(this.saltoUnaVolta=!0),navigator.vibrate?.(8)});let a=()=>{this.tastiDito[n]=!1,i.classList.remove("giu")};i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a)}}posaLeva(){this.levaDom.style.left=this.leva.x0+"px",this.levaDom.style.top=this.leva.y0+"px"}comando(){let t=this.tasti,e=(t.has("d")||t.has("ArrowRight")?1:0)-(t.has("a")||t.has("ArrowLeft")?1:0),i=(t.has("w")||t.has("ArrowUp")?1:0)-(t.has("s")||t.has("ArrowDown")?1:0),n=t.has(" ")||this.tastiDito.salta||this.saltoUnaVolta,a=t.has("f")||this.usaUnaVolta,s=t.has("r")||this.raddrizzaUnaVolta,o=t.has("shift")||t.has("Control")||this.corsa,A=this.truccoUnaVolta||this.tastiDito.trucco,l=null;this.leva&&(e=this.leva.x,i=this.leva.y,o=o||Math.hypot(e,i)>.94);let c=navigator.getGamepads?[...navigator.getGamepads()].find(M=>M&&M.connected):null;if(c){let M=c.axes,x=w=>Math.abs(w)<.18?0:w;(x(M[0])||x(M[1]))&&(e=x(M[0]),i=-x(M[1]),o=Math.hypot(e,i)>.95),(x(M[2])||x(M[3]))&&(this.cam.yaw-=x(M[2])*.05,this.cam.pitch=Math.min(1.25,Math.max(-.05,this.cam.pitch+x(M[3])*.03)),this.cam.mossa=performance.now()/1e3);let y=w=>!!c.buttons[w]?.pressed;y(0)&&(a=!0),y(1)&&(n=!0),y(2)?(A=!this.padTrucco,this.padTruccoTenuto=!0):this.padTruccoTenuto=!1,this.padTrucco=y(2),y(3)&&(s=!0);let P=(c.buttons[7]?.value||0)-(c.buttons[6]?.value||0);Math.abs(P)>.05&&(l=P)}let h=Math.hypot(e,i);h>1&&(e/=h,i/=h),this.fermoDa=h<.1?this.fermoDa+1:0,this.fermoDa>40&&(this.corsa=!1),this.usaUnaVolta=!1,this.truccoUnaVolta=!1,this.saltoUnaVolta=!1,this.raddrizzaUnaVolta=!1;let u=this.cam.yaw,p=Math.sin(u),f=Math.cos(u),g=-Math.cos(u),d=Math.sin(u),m=!!this.truccoGiu||!!this.tastiDito.trucco||!!this.padTruccoTenuto,v={x:p*i+g*e,z:f*i+d*e,corri:o,salta:n,usa:a,raddrizza:s,trucco:A,truccoTenuto:m,asse:{x:e,y:i}};return this.tu.sopra&&(v.mezzo={gas:l??i,sterzo:e}),v}ciclo(t){requestAnimationFrame(this.ciclo),this.dtVero=document.hidden?0:t-this.prima;let e=Math.min(.1,(t-this.prima)/1e3);this.prima=t,this.resto+=e;let i=0,n=performance.now(),a=this.carta.classList.contains("su")?{}:this.comando();for(;this.resto>=Pn&&i<12;)this.prima_=this.istantanea(),this.tu.passo(a),this.mia&&this.mia.passo(this.amica.comando(Pn)),this.rete.passo(Pn),this.resto-=Pn,i++,a.usa=!1,a.trucco=!1,a.salta&&!this.tasti.has(" ")&&!this.tastiDito.salta&&i>2&&(a.salta=!1);if(i===12&&(this.resto=0),this.misure.fisica+=performance.now()-n,this.alfa=Math.max(0,Math.min(1,this.resto/Pn)),this.scena.passo(this.tu.ora),this.eventi(),this.disegnaCose(e),this.part.passo(e),this.telecamera(e),this.scritte(),this.qualita==="alta"){let s=this.cam.centro,o=8,A=Math.round(s.x/o)*o,l=Math.round(s.z/o)*o;(A!==this.soleX||l!==this.soleZ)&&(this.soleX=A,this.soleZ=l,Uh(this.sole,A,l,34,0),this.renderer.shadowMap.needsUpdate=!0)}this.adatta.inizio(),this.resa?(this.resa.scena(this.sc,this.camera),this.resa.effetti(this.camera)):this.renderer.render(this.sc,this.camera),this.adatta.fine(),this.adatta.passo(this.dtVero,this.cpuPrima||0),this.cpuPrima=performance.now()-n,this.contaMisure(),this.renderer.info.reset()}contaMisure(){let t=this.misure;t.fotogrammi++;let e=performance.now();if(this.ultimaInfo={calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles},e-t.t0<500)return;let i=(e-t.t0)/1e3;if(t.fps=t.fotogrammi/i,t.msFisica=t.fisica/t.fotogrammi,t.fotogrammi=0,t.fisica=0,t.t0=e,!this.crash.classList.contains("su"))return;let n=this.tu.palle,a=this.ultimaInfo||this.renderer.info.render;this.misureDom.innerHTML=`<b>${Math.round(t.fps)}</b> fps · fisica <b>${t.msFisica.toFixed(1)}</b> ms<br>palle <b>${n.n}</b> (sveglie ${n.svegli}, inquadrate ${this.vPalle.visibili}) · gente <b>${this.tu.folla.gatti.length}</b><br>disegni <b>${a.calls}</b> · triangoli ${ol(a.triangles)} · pixel ×${(this.renderer.getPixelRatio()*(this.resa?this.resa.scalaInterna:1)).toFixed(2)}${this.resa&&this.resa.scalaInterna<.99?" (FSR)":""}`}eventi(){for(let t of this.tu.eventi)t.tipo==="trucchi"?this.fineCombo(t):t.tipo==="atterrato"&&t.p?this.part.polvere(t.p,Math.min(1.5,t.aria||.6)):t.tipo==="elastico"?this.part.polvere(t.p,.6):t.tipo==="tuffo"?this.part.schizzi(this.tu.corpo.p):t.tipo==="spinta"?this.lampo("Spinta"):t.tipo==="turbo"?(this.lampo(["","Turbo","Turbo!","Super turbo!"][t.livello]),this.part.stelle(t.p,t.livello),this.scossa=.15*t.livello,navigator.vibrate?.(20*t.livello)):t.tipo==="pattini"?this.lampo("Pattini"):t.tipo==="scarpe"?this.lampo("Senza pattini"):t.tipo==="pioggia"?this.lampo(`${t.n} palle`):t.tipo==="trucco"||t.tipo==="aggancio"?navigator.vibrate?.(6):t.tipo==="botta"&&(this.scossa=Math.min(.5,t.forza*.04));this.tu.eventi.length=0,this.mia&&(this.mia.eventi.length=0)}fineCombo(t){clearTimeout(this.tEsito),t.esito==="pulito"?(this.esito.className="ar-esito su",this.esito.innerHTML=`<b>+${ol(t.punti)}</b>${t.combo>1?`<small>combo ×${t.combo}</small>`:""}`,this.part.stelle(t.p,t.combo),this.puntiDom.textContent=ol(this.tu.trucchi.totale),this.puntiDom.classList.remove("salta"),this.puntiDom.offsetWidth,this.puntiDom.classList.add("salta"),navigator.vibrate?.([10,40,14])):(this.esito.className="ar-esito su caduta",this.esito.innerHTML="<b>Caduta</b>",this.part.polvere(t.p,1.4),navigator.vibrate?.(40)),this.tEsito=setTimeout(()=>{this.esito.className="ar-esito"},1300)}lampo(t){this.combo.classList.contains("su")||(clearTimeout(this.tEsito),this.esito.className="ar-esito su piccolo",this.esito.innerHTML=`<b>${t}</b>`,this.tEsito=setTimeout(()=>{this.esito.className="ar-esito"},900))}istantanea(){let t=this.tu,e=new Map;e.set("gatto",[...t.corpo.p]);for(let[i,n]of t.mezzi)e.set(i,{p:[...n.p],q:[...n.q]});return e}fra(t,e){if(!t)return e;let i=this.alfa??1;return Math.hypot(e[0]-t[0],e[2]-t[2])>2?e:[t[0]+(e[0]-t[0])*i,t[1]+(e[1]-t[1])*i,t[2]+(e[2]-t[2])*i]}suolo(t){let e=this.arena.mondo.raggio([t[0],t[1]+.5,t[2]],[0,-1,0],30);return e===null?null:t[1]+.5-e}disegnaCose(t){let e=this.tu;for(let[s,o]of this.viste){let A=e.mezzi.get(s),l=e.eco.get("m:"+s),c=A||l?.vista;if(!c)continue;let h=A&&this.prima_&&this.prima_.get(s);if(h){let g=new $t(...h.q).slerp(new $t(...A.q),this.alfa??1);c={...A,p:this.fra(h.p,A.p),q:[g.x,g.y,g.z,g.w]}}o.aggiorna(c,t,this.suolo(c.p));let u=A?e.sopra===s?e.trucchi.figura():null:xn.daFoto(l.vista.tr);o.figura=u;let p=al(u);if(p&&o.gruppo.quaternion.multiply(new $t().setFromAxisAngle(new _(...p[0]),p[1])),A?A.rotaia:l.vista.ro){let g=A?A.rotaia.h:.45,d=c.v,m=Math.hypot(d[0],d[2])||1,v=[c.p[0],c.p[1]-g,c.p[2]],M=[d[0]/m,0,d[2]/m];this.part.scintille(v,M),this.part.scintille(v,M),o.tipo==="moto"&&this.part.scintille([v[0]-M[0]*.75,v[1],v[2]-M[2]*.75],M)}}let i=e.sopra&&e.mezzi.get(e.sopra);if(i){let s=ei(i),o=Math.hypot(i.v[0],i.v[2]),A=[i.p[0]-s.avanti[0]*.8,i.p[1]-.6,i.p[2]-s.avanti[2]*.8];if(i.contatti&&(o>9||i.deriva)&&Math.random()<(i.deriva?.9:.4)&&this.part.sbuffo(A,s.avanti),i.deriva&&i.contatti){let l=i.deriva.carica;this.part.derapa(A,l>1.6?3:l>1?2:l>.5?1:0)}i.inAcqua&&o>4&&Math.random()<.5&&this.part.sbuffo([A[0],this.arena.mondo.pelo(A[0],A[2])??A[1],A[2]],s.avanti,3)}let n=e.corpo;this.metti(this.gatti.tu,e.sopra?{m:e.sopra}:{p:this.fra(this.prima_&&this.prima_.get("gatto"),n.p),v:n.v,dir:n.dir,aTerra:n.aTerra,nuota:n.nuota,botta:n.botta>0,pattini:n.pattini,rotaia:!!n.rotaia},e.sopra?null:e.trucchi.figura(),t),n.rotaia&&this.part.scintille(n.p,[n.dir[0],0,n.dir[1]]);let a=e.eco.get("g:mia");if(this.gatti.mia&&a){let s=a.vista;this.metti(this.gatti.mia,s.m?{m:s.m}:{p:s.p,v:s.v,dir:[Math.sin(s.d),Math.cos(s.d)],aTerra:!!(s.f&1),nuota:!!(s.f&2),botta:!!(s.f&8),pattini:!!s.pt,rotaia:!!s.ro},xn.daFoto(s.tr),t);let o=this.gatti.mia.gruppo,A=new _;o.getWorldPosition(A),A.y+=2.55,A.project(this.camera);let l=A.z<1&&Math.abs(A.x)<1.1&&Math.abs(A.y)<1.1;this.nome.style.display=l?"block":"none",l&&(this.nome.style.transform=`translate(${(A.x+1)/2*innerWidth}px, ${(1-A.y)/2*innerHeight}px) translate(-50%, -100%)`)}else this.nome.style.display="none";e.palle&&this.vPalle.aggiorna(e.palle,this.camera),this.vFolla.aggiorna(e.folla.gatti,t)}metti(t,e,i,n){if(t.corpo.position.x=0,t.corpo.position.z=0,e.m){let A=this.viste.get(e.m);t.gruppo.parent!==A.gruppo&&(A.gruppo.add(t.gruppo),t.corpo.rotation.set(0,0,0)),t.gruppo.position.set(...pu[A.tipo]),t.gruppo.quaternion.identity();let l=A.figura?.nome==="superman"?Math.sin(A.figura.k*Math.PI):0,c=A.figura?.nome==="senzamani"?Math.sin(A.figura.k*Math.PI):0;l&&(t.gruppo.position.y+=l*.6,t.gruppo.position.z-=l*.4,t.gruppo.rotateX(-l*1.25)),t.dir.set(0,1),t.seduto=!l,t.cammina=!1,t.ombra.visible=!1,t.pattini.visible=!1,t.corpo.rotation.x=0,t.aggiorna(n),c&&(t.gruppo.position.y+=c*.25,t.maniG[0].position.y+=c*.7,t.maniG[1].position.y+=c*.7);return}t.gruppo.parent!==this.sc&&this.sc.add(t.gruppo),t.seduto=!1,t.pattini.visible=!!e.pattini,t.gruppo.position.set(...e.p),t.gruppo.quaternion.identity();let a=Math.hypot(e.v[0],e.v[2]);t.guarda(e.dir[0],e.dir[1]),t.cammina=!e.pattini&&a>.4&&(e.aTerra||e.nuota),t.corre=a>4.6,t.velocita=a,t.vy=e.v[1],t.aTerra=!!e.aTerra||!!e.rotaia,t.nuota=!!e.nuota,t.capriola=e.botta&&!e.aTerra,t.capriola&&(t.corpo.rotation.x+=n*11),t.svelto=e.rotaia?3:1,e.rotaia&&t.guarda(-e.dir[1],e.dir[0]);let s=al(i);if(s||i?.nome==="superman"){let A=new $t;if(s){let c=Math.atan2(e.dir[0],e.dir[1]),h=new _(...s[0]).applyAxisAngle(new _(0,1,0),c);A.setFromAxisAngle(h,s[1])}else{let c=Math.atan2(e.dir[0],e.dir[1]),h=Math.sin(i.k*Math.PI);A.setFromAxisAngle(new _(1,0,0).applyAxisAngle(new _(0,1,0),c),-h*1.4)}t.gruppo.quaternion.copy(A);let l=Cu.clone().sub(Cu.clone().applyQuaternion(A));t.gruppo.position.add(l)}let o=this.suolo(e.p);if(t.ombra.visible=o!==null&&!e.nuota&&!s,o!==null){t.ombra.position.y=o-e.p[1]+.02;let A=Math.max(.35,1-(e.p[1]-o)/5);t.ombra.scale.setScalar(A)}e.aTerra&&t.unoInAria&&t.rimbalza(),t.unoInAria=!e.aTerra&&!e.nuota&&!e.rotaia,t.aggiorna(n),e.rotaia&&(t.corpo.position.y-=.12)}telecamera(t){let e=this.tu,i=this.cam,n=e.corpo,a=e.sopra&&e.mezzi.get(e.sopra),s=this.prima_&&this.prima_.get(a?a.id:"gatto"),o=new _(...this.fra(s&&(s.p||s),a?a.p:n.p));o.y+=a?.9:1.3,i.sposta&&(o.x+=i.sposta[0],o.z+=i.sposta[1]),i.centro.lerp(o,Math.min(1,t*(a?9:12)));let A=performance.now()/1e3-i.mossa>1.4,l=null,c=0;if(a){let m=ei(a),v=Math.hypot(a.v[0],a.v[2]);m.su[1]>.5&&v>3&&(l=Math.atan2(m.avanti[0],m.avanti[2]),c=1.2+v*.12)}else(this.tocco||n.pattini||this.leva)&&Math.hypot(n.v[0],n.v[2])>1.5&&(l=Math.atan2(n.v[0],n.v[2]),c=n.rotaia?2.5:1.1);if(l!==null&&A){let m=l-i.yaw;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;!a&&Math.abs(m)>2.4&&(m*=.15),i.yaw+=m*Math.min(1,t*c),a&&(i.pitch+=(.3-i.pitch)*Math.min(1,t*1.5))}let h=i.voluta*(a?1.15:1);i.dist+=(h-i.dist)*Math.min(1,t*6);let u=Math.cos(i.pitch),p=new _(-Math.sin(i.yaw)*u,Math.sin(i.pitch),-Math.cos(i.yaw)*u).multiplyScalar(i.dist);this.camera.position.copy(i.centro).add(p),this.camera.position.y<.6&&i.centro.y>-1&&(this.camera.position.y=.6),this.scossa>.01&&(this.camera.position.x+=(Math.random()-.5)*this.scossa,this.camera.position.y+=(Math.random()-.5)*this.scossa,this.scossa*=.86),this.camera.lookAt(i.centro);let f=innerWidth<innerHeight?68:55,g=a?Math.hypot(a.v[0],a.v[2]):0,d=f+Math.min(12,Math.max(0,g-8)*.55)+(a&&a.turbo>0?4:0);Math.abs(this.camera.fov-d)>.05&&(this.camera.fov+=(d-this.camera.fov)*Math.min(1,t*3),this.camera.updateProjectionMatrix())}scritte(){let t=this.tu,e=t.sopra&&t.mezzi.get(t.sopra),i=t.corpo,n=t.trucchi.inCorso(),a=n.nomi.join("|");if(a!==this.comboDi){this.comboDi=a,this.combo.classList.toggle("su",n.combo>0);let u=this.combo.querySelector(".ar-nomi");u.innerHTML=n.nomi.map((p,f)=>`<span${f===n.nomi.length-1?' class="nuovo"':""}>${p}</span>`).join(""),this.combo.querySelector(".ar-per").textContent=n.combo>1?"×"+n.combo:""}let s=e?Math.hypot(e.v[0],e.v[2]):i.pattini?Math.hypot(i.v[0],i.v[2]):0;e||i.pattini?(this.veloce.style.display="block",this.veloce.firstElementChild.textContent=Math.round(s*3.6)):this.veloce.style.display="none";let o=e?!e.contatti&&!e.inAcqua:!i.aTerra&&!i.nuota;this.radice.querySelector('[data-dito="trucco"]')?.classList.toggle("spento",!o);let A="";if(e)A="scendi";else{let u=[...this.viste.keys()].some(f=>{let g=t.mezzi.get(f)||t.eco.get("m:"+f)?.vista;return g&&!g.chi&&Math.hypot(g.p[0]-i.p[0],g.p[2]-i.p[2])<2.6}),p=(this.arena.pattini||[]).some(f=>Math.hypot(f.x-i.p[0],f.z-i.p[2])<2.2);u?A="sali":p&&(A=i.pattini?"togli i pattini":"metti i pattini")}let l=A+(e?1:0)+(i.pattini?1:0);if(l===this.aiutoDi)return;this.aiutoDi=l;let c=[];A&&c.push(`<span class="ora"><b>${this.tocco?"Usa":"clic o F"}</b> ${A}</span>`),this.tocco||c.push(e?"<span><b>W</b> gas · <b>S</b> freno · <b>A D</b> sterzo</span>":"<span><b>WASD</b> muovi · <b>Ctrl</b> corri</span>","<span><b>Spazio</b> salta</span>","<span><b>destro</b> in aria: trucco</span>"),this.aiuto.innerHTML=c.join("");let h=this.radice.querySelector('[data-dito="usa"]');h&&(h.textContent=A==="sali"?"Sali":A==="scendi"?"Scendi":A?"Pattini":"Usa")}};var Tu=document.getElementById("arena");Lh()?globalThis.arena=new Qs(Tu):Tu.innerHTML=`<p style="padding:24px;color:#958ead">L'arena ha bisogno del 3D (WebGL), e questo browser non ce l'ha.</p>`;
