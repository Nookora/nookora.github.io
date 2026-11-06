var xo="160";var Fc=1,EA=2,pi=3,Ti=0,ht=1;var Qc=0;var qi=100;var yo=204,wo=205;var Hc=0,wu=1,Du=2,Si=0,_u=1,Eu=2,bu=3,Bu=4,Su=5,Cu=6;var Gc=300,Hn=301,Gn=302,Do=303,_o=304,Zs=306,Eo=1e3,di=1001,bo=1002,At=1003,ul=1004;var Oa=1005;var mt=1006,Tu=1007;var Es=1008;var fi=1009;var bA=1012,kc=1013,ei=1014,Bi=1015,Ii=1016,Vc=1017,Xc=1018,$i=1020;var St=1023;var en=1026,kn=1027,Wc=1028,Yc=1029;var jc=1031,qc=1033,Fa=33776,Qa=33777,Ha=33778,Ga=33779,pl=35840,dl=35841,fl=35842,gl=35843,Jc=36196,ml=37492,vl=37496,Ml=37808,Pl=37809,xl=37810,yl=37811,wl=37812,Dl=37813,_l=37814,El=37815,bl=37816,Bl=37817,Sl=37818,Cl=37819,Tl=37820,Il=37821,ka=36492,Ll=36494,Rl=36495;var zl=36284,Ul=36285,Nl=36286;var bs=2300,Bs=2301,Va=2302,Ol=2400,Fl=2401,Ql=2402;var Kc=3e3,tn=3001;var $t="",Ze="srgb",gi="srgb-linear",BA="display-p3",$s="display-p3-linear",Ss="linear",Ve="srgb",Cs="rec709",Ts="p3";var xn=7680;var Hl=35044,mi=35048;var Gl="300 es",Bo=1035,Vn=2e3,Is=2001,Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}},ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _s=Math.PI/180,So=180/Math.PI;function er(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(ft[255&r]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]+"-"+ft[255&e]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[63&t|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[255&i]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function Iu(r,e){return(r%e+e)%e}function Xa(r,e,t){return(1-t)*r+t*e}function kl(r){return(r&r-1)==0&&r!==0}function Co(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function lr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var se=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Se=class r{constructor(e,t,i,n,s,a,o,l,A){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,A)}set(e,t,i,n,s,a,o,l,A){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=A,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],A=i[1],c=i[4],h=i[7],u=i[2],p=i[5],d=i[8],m=n[0],f=n[3],v=n[6],g=n[1],M=n[4],P=n[7],b=n[2],x=n[5],_=n[8];return s[0]=a*m+o*g+l*b,s[3]=a*f+o*M+l*x,s[6]=a*v+o*P+l*_,s[1]=A*m+c*g+h*b,s[4]=A*f+c*M+h*x,s[7]=A*v+c*P+h*_,s[2]=u*m+p*g+d*b,s[5]=u*f+p*M+d*x,s[8]=u*v+p*P+d*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],A=e[7],c=e[8];return t*a*c-t*o*A-i*s*c+i*o*l+n*s*A-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],A=e[7],c=e[8],h=c*a-o*A,u=o*l-c*s,p=A*s-a*l,d=t*h+i*u+n*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/d;return e[0]=h*m,e[1]=(n*A-c*i)*m,e[2]=(o*i-n*a)*m,e[3]=u*m,e[4]=(c*t-n*l)*m,e[5]=(n*s-o*t)*m,e[6]=p*m,e[7]=(i*l-A*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),A=Math.sin(s);return this.set(i*l,i*A,-i*(l*a+A*o)+a+e,-n*A,n*l,-n*(-A*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new Se;function Zc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ls(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Lu(){let r=Ls("canvas");return r.style.display="block",r}var Vl={};function mr(r){r in Vl||(Vl[r]=!0,console.warn(r))}var Xl=new Se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wl=new Se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[gi]:{transfer:Ss,primaries:Cs,toReference:r=>r,fromReference:r=>r},[Ze]:{transfer:Ve,primaries:Cs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[$s]:{transfer:Ss,primaries:Ts,toReference:r=>r.applyMatrix3(Wl),fromReference:r=>r.applyMatrix3(Xl)},[BA]:{transfer:Ve,primaries:Ts,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Wl),fromReference:r=>r.applyMatrix3(Xl).convertLinearToSRGB()}},Ru=new Set([gi,$s]),He={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ru.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let i=Yr[e].toReference;return(0,Yr[t].fromReference)(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Yr[r].primaries},getTransfer:function(r){return r===$t?Ss:Yr[r].transfer}};function Fn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Ya(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var yn,Rs=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yn===void 0&&(yn=Ls("canvas")),yn.width=e.width,yn.height=e.height;let i=yn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ls("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Fn(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Fn(t[i]/255)):t[i]=Fn(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zu=0,zs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(ja(n[a].image)):s.push(ja(n[a]))}else s=ja(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function ja(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uu=0,Nt=class r extends Li{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,A=r.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=er(),this.name="",this.source=new zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=A,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===tn?Ze:$t),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ze?tn:Kc}set encoding(e){mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===tn?Ze:$t}};Nt.DEFAULT_IMAGE=null,Nt.DEFAULT_MAPPING=Gc,Nt.DEFAULT_ANISOTROPY=1;var Ge=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,A=l[0],c=l[4],h=l[8],u=l[1],p=l[5],d=l[9],m=l[2],f=l[6],v=l[10];if(Math.abs(c-u)<.01&&Math.abs(h-m)<.01&&Math.abs(d-f)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+m)<.1&&Math.abs(d+f)<.1&&Math.abs(A+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(A+1)/2,P=(p+1)/2,b=(v+1)/2,x=(c+u)/4,_=(h+m)/4,I=(d+f)/4;return M>P&&M>b?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=x/i,s=_/i):P>b?P<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(P),i=x/n,s=I/n):b<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(b),i=_/s,n=I/s),this.set(i,n,s,t),this}let g=Math.sqrt((f-d)*(f-d)+(h-m)*(h-m)+(u-c)*(u-c));return Math.abs(g)<.001&&(g=1),this.x=(f-d)/g,this.y=(h-m)/g,this.z=(u-c)/g,this.w=Math.acos((A+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},To=class extends Li{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ge(0,0,e,t),this.scissorTest=!1,this.viewport=new Ge(0,0,e,t);let n={width:e,height:t,depth:1};i.encoding!==void 0&&(mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===tn?Ze:$t),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Nt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new zs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ut=class extends To{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Us=class extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=At,this.minFilter=At,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Io=class extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=At,this.minFilter=At,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],A=i[n+1],c=i[n+2],h=i[n+3],u=s[a+0],p=s[a+1],d=s[a+2],m=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=A,e[t+2]=c,void(e[t+3]=h);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=d,void(e[t+3]=m);if(h!==m||l!==u||A!==p||c!==d){let f=1-o,v=l*u+A*p+c*d+h*m,g=v>=0?1:-1,M=1-v*v;if(M>Number.EPSILON){let b=Math.sqrt(M),x=Math.atan2(b,v*g);f=Math.sin(f*x)/b,o=Math.sin(o*x)/b}let P=o*g;if(l=l*f+u*P,A=A*f+p*P,c=c*f+d*P,h=h*f+m*P,f===1-o){let b=1/Math.sqrt(l*l+A*A+c*c+h*h);l*=b,A*=b,c*=b,h*=b}}e[t]=l,e[t+1]=A,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],A=i[n+2],c=i[n+3],h=s[a],u=s[a+1],p=s[a+2],d=s[a+3];return e[t]=o*d+c*h+l*p-A*u,e[t+1]=l*d+c*u+A*h-o*p,e[t+2]=A*d+c*p+o*u-l*h,e[t+3]=c*d-o*h-l*u-A*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,A=o(i/2),c=o(n/2),h=o(s/2),u=l(i/2),p=l(n/2),d=l(s/2);switch(a){case"XYZ":this._x=u*c*h+A*p*d,this._y=A*p*h-u*c*d,this._z=A*c*d+u*p*h,this._w=A*c*h-u*p*d;break;case"YXZ":this._x=u*c*h+A*p*d,this._y=A*p*h-u*c*d,this._z=A*c*d-u*p*h,this._w=A*c*h+u*p*d;break;case"ZXY":this._x=u*c*h-A*p*d,this._y=A*p*h+u*c*d,this._z=A*c*d+u*p*h,this._w=A*c*h-u*p*d;break;case"ZYX":this._x=u*c*h-A*p*d,this._y=A*p*h+u*c*d,this._z=A*c*d-u*p*h,this._w=A*c*h+u*p*d;break;case"YZX":this._x=u*c*h+A*p*d,this._y=A*p*h+u*c*d,this._z=A*c*d-u*p*h,this._w=A*c*h-u*p*d;break;case"XZY":this._x=u*c*h-A*p*d,this._y=A*p*h-u*c*d,this._z=A*c*d+u*p*h,this._w=A*c*h+u*p*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],A=t[2],c=t[6],h=t[10],u=i+o+h;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-A)*p,this._z=(a-n)*p}else if(i>o&&i>h){let p=2*Math.sqrt(1+i-o-h);this._w=(c-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+A)/p}else if(o>h){let p=2*Math.sqrt(1+o-i-h);this._w=(s-A)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+h-i-o);this._w=(a-n)/p,this._x=(s+A)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,A=t._z,c=t._w;return this._x=i*c+a*o+n*A-s*l,this._y=n*c+a*l+s*o-i*A,this._z=s*c+a*A+i*l-n*o,this._w=a*c-i*o-n*l-s*A,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let A=Math.sqrt(l),c=Math.atan2(A,o),h=Math.sin((1-t)*c)/A,u=Math.sin(t*c)/A;return this._w=a*h+this._w*u,this._x=i*h+this._x*u,this._y=n*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,A=2*(a*n-o*i),c=2*(o*t-s*n),h=2*(s*i-a*t);return this.x=t+l*A+a*h-o*c,this.y=i+l*c+o*A-s*h,this.z=n+l*h+s*c-a*A,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qa=new E,Yl=new $e,Yt=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gt):Gt.fromBufferAttribute(s,a),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),qr.subVectors(this.max,cr),wn.subVectors(e.a,cr),Dn.subVectors(e.b,cr),_n.subVectors(e.c,cr),wi.subVectors(Dn,wn),Di.subVectors(_n,Dn),Vi.subVectors(wn,_n);let t=[0,-wi.z,wi.y,0,-Di.z,Di.y,0,-Vi.z,Vi.y,wi.z,0,-wi.x,Di.z,0,-Di.x,Vi.z,0,-Vi.x,-wi.y,wi.x,0,-Di.y,Di.x,0,-Vi.y,Vi.x,0];return!!Ja(t,wn,Dn,_n,qr)&&(t=[1,0,0,0,1,0,0,0,1],!!Ja(t,wn,Dn,_n,qr)&&(Jr.crossVectors(wi,Di),t=[Jr.x,Jr.y,Jr.z],Ja(t,wn,Dn,_n,qr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Gt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ai=[new E,new E,new E,new E,new E,new E,new E,new E],Gt=new E,jr=new Yt,wn=new E,Dn=new E,_n=new E,wi=new E,Di=new E,Vi=new E,cr=new E,qr=new E,Jr=new E,Xi=new E;function Ja(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Xi.fromArray(r,s);let o=n.x*Math.abs(Xi.x)+n.y*Math.abs(Xi.y)+n.z*Math.abs(Xi.z),l=e.dot(Xi),A=t.dot(Xi),c=i.dot(Xi);if(Math.max(-Math.max(l,A,c),Math.min(l,A,c))>o)return!1}return!0}var Nu=new Yt,hr=new E,Ka=new E,jt=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Nu.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);let t=hr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(hr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(Ka)),this.expandByPoint(hr.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new E,Za=new E,Kr=new E,_i=new E,$a=new E,Zr=new E,eo=new E,Xn=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Za.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Za);let s=.5*e.distanceTo(t),a=-this.direction.dot(Kr),o=_i.dot(this.direction),l=-_i.dot(Kr),A=_i.lengthSq(),c=Math.abs(1-a*a),h,u,p,d;if(c>0)if(h=a*l-o,u=a*o-l,d=s*c,h>=0)if(u>=-d)if(u<=d){let m=1/c;h*=m,u*=m,p=h*(h+a*u+2*o)+u*(a*h+u+2*l)+A}else u=s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+A;else u=-s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+A;else u<=-d?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+A):u<=d?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+A):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+A);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+A;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Za).addScaledVector(Kr,u),p}intersectSphere(e,t){li.subVectors(e.center,this.origin);let i=li.dot(this.direction),n=li.dot(li)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,A=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return A>=0?(i=(e.min.x-u.x)*A,n=(e.max.x-u.x)*A):(i=(e.max.x-u.x)*A,n=(e.min.x-u.x)*A),c>=0?(s=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(s=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,n,s){$a.subVectors(t,e),Zr.subVectors(i,e),eo.crossVectors($a,Zr);let a,o=this.direction.dot(eo);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}_i.subVectors(this.origin,e);let l=a*this.direction.dot(Zr.crossVectors(_i,Zr));if(l<0)return null;let A=a*this.direction.dot($a.cross(_i));if(A<0||l+A>o)return null;let c=-a*_i.dot(eo);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class r{constructor(e,t,i,n,s,a,o,l,A,c,h,u,p,d,m,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,A,c,h,u,p,d,m,f)}set(e,t,i,n,s,a,o,l,A,c,h,u,p,d,m,f){let v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=n,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=A,v[6]=c,v[10]=h,v[14]=u,v[3]=p,v[7]=d,v[11]=m,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/En.setFromMatrixColumn(e,0).length(),s=1/En.setFromMatrixColumn(e,1).length(),a=1/En.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),A=Math.sin(n),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let u=a*c,p=a*h,d=o*c,m=o*h;t[0]=l*c,t[4]=-l*h,t[8]=A,t[1]=p+d*A,t[5]=u-m*A,t[9]=-o*l,t[2]=m-u*A,t[6]=d+p*A,t[10]=a*l}else if(e.order==="YXZ"){let u=l*c,p=l*h,d=A*c,m=A*h;t[0]=u+m*o,t[4]=d*o-p,t[8]=a*A,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=p*o-d,t[6]=m+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*c,p=l*h,d=A*c,m=A*h;t[0]=u-m*o,t[4]=-a*h,t[8]=d+p*o,t[1]=p+d*o,t[5]=a*c,t[9]=m-u*o,t[2]=-a*A,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*c,p=a*h,d=o*c,m=o*h;t[0]=l*c,t[4]=d*A-p,t[8]=u*A+m,t[1]=l*h,t[5]=m*A+u,t[9]=p*A-d,t[2]=-A,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*A,d=o*l,m=o*A;t[0]=l*c,t[4]=m-u*h,t[8]=d*h+p,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-A*c,t[6]=p*h+d,t[10]=u-m*h}else if(e.order==="XZY"){let u=a*l,p=a*A,d=o*l,m=o*A;t[0]=l*c,t[4]=-h,t[8]=A*c,t[1]=u*h+m,t[5]=a*c,t[9]=p*h-d,t[2]=d*h-p,t[6]=o*c,t[10]=m*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ou,e,Fu)}lookAt(e,t,i){let n=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),Ei.crossVectors(i,bt),Ei.lengthSq()===0&&(Math.abs(i.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),Ei.crossVectors(i,bt)),Ei.normalize(),$r.crossVectors(bt,Ei),n[0]=Ei.x,n[4]=$r.x,n[8]=bt.x,n[1]=Ei.y,n[5]=$r.y,n[9]=bt.y,n[2]=Ei.z,n[6]=$r.z,n[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],A=i[12],c=i[1],h=i[5],u=i[9],p=i[13],d=i[2],m=i[6],f=i[10],v=i[14],g=i[3],M=i[7],P=i[11],b=i[15],x=n[0],_=n[4],I=n[8],C=n[12],R=n[1],H=n[5],S=n[9],N=n[13],F=n[2],k=n[6],Ae=n[10],Z=n[14],G=n[3],$=n[7],Q=n[11],j=n[15];return s[0]=a*x+o*R+l*F+A*G,s[4]=a*_+o*H+l*k+A*$,s[8]=a*I+o*S+l*Ae+A*Q,s[12]=a*C+o*N+l*Z+A*j,s[1]=c*x+h*R+u*F+p*G,s[5]=c*_+h*H+u*k+p*$,s[9]=c*I+h*S+u*Ae+p*Q,s[13]=c*C+h*N+u*Z+p*j,s[2]=d*x+m*R+f*F+v*G,s[6]=d*_+m*H+f*k+v*$,s[10]=d*I+m*S+f*Ae+v*Q,s[14]=d*C+m*N+f*Z+v*j,s[3]=g*x+M*R+P*F+b*G,s[7]=g*_+M*H+P*k+b*$,s[11]=g*I+M*S+P*Ae+b*Q,s[15]=g*C+M*N+P*Z+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],A=e[13],c=e[2],h=e[6],u=e[10],p=e[14];return e[3]*(+s*l*h-n*A*h-s*o*u+i*A*u+n*o*p-i*l*p)+e[7]*(+t*l*p-t*A*u+s*a*u-n*a*p+n*A*c-s*l*c)+e[11]*(+t*A*h-t*o*p-s*a*h+i*a*p+s*o*c-i*A*c)+e[15]*(-n*o*c-t*l*h+t*o*u+n*a*h-i*a*u+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],A=e[7],c=e[8],h=e[9],u=e[10],p=e[11],d=e[12],m=e[13],f=e[14],v=e[15],g=h*f*A-m*u*A+m*l*p-o*f*p-h*l*v+o*u*v,M=d*u*A-c*f*A-d*l*p+a*f*p+c*l*v-a*u*v,P=c*m*A-d*h*A+d*o*p-a*m*p-c*o*v+a*h*v,b=d*h*l-c*m*l-d*o*u+a*m*u+c*o*f-a*h*f,x=t*g+i*M+n*P+s*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=g*_,e[1]=(m*u*s-h*f*s-m*n*p+i*f*p+h*n*v-i*u*v)*_,e[2]=(o*f*s-m*l*s+m*n*A-i*f*A-o*n*v+i*l*v)*_,e[3]=(h*l*s-o*u*s-h*n*A+i*u*A+o*n*p-i*l*p)*_,e[4]=M*_,e[5]=(c*f*s-d*u*s+d*n*p-t*f*p-c*n*v+t*u*v)*_,e[6]=(d*l*s-a*f*s-d*n*A+t*f*A+a*n*v-t*l*v)*_,e[7]=(a*u*s-c*l*s+c*n*A-t*u*A-a*n*p+t*l*p)*_,e[8]=P*_,e[9]=(d*h*s-c*m*s-d*i*p+t*m*p+c*i*v-t*h*v)*_,e[10]=(a*m*s-d*o*s+d*i*A-t*m*A-a*i*v+t*o*v)*_,e[11]=(c*o*s-a*h*s-c*i*A+t*h*A+a*i*p-t*o*p)*_,e[12]=b*_,e[13]=(c*m*n-d*h*n+d*i*u-t*m*u-c*i*f+t*h*f)*_,e[14]=(d*o*n-a*m*n-d*i*l+t*m*l+a*i*f-t*o*f)*_,e[15]=(a*h*n-c*o*n+c*i*l-t*h*l-a*i*u+t*o*u)*_,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,A=s*a,c=s*o;return this.set(A*a+i,A*o-n*l,A*l+n*o,0,A*o+n*l,c*o+i,c*l-n*a,0,A*l-n*o,c*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,A=s+s,c=a+a,h=o+o,u=s*A,p=s*c,d=s*h,m=a*c,f=a*h,v=o*h,g=l*A,M=l*c,P=l*h,b=i.x,x=i.y,_=i.z;return n[0]=(1-(m+v))*b,n[1]=(p+P)*b,n[2]=(d-M)*b,n[3]=0,n[4]=(p-P)*x,n[5]=(1-(u+v))*x,n[6]=(f+g)*x,n[7]=0,n[8]=(d+M)*_,n[9]=(f-g)*_,n[10]=(1-(u+m))*_,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=En.set(n[0],n[1],n[2]).length(),a=En.set(n[4],n[5],n[6]).length(),o=En.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],kt.copy(this);let l=1/s,A=1/a,c=1/o;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=A,kt.elements[5]*=A,kt.elements[6]*=A,kt.elements[8]*=c,kt.elements[9]*=c,kt.elements[10]*=c,t.setFromRotationMatrix(kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3){let l=this.elements,A=2*s/(t-e),c=2*s/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),p,d;if(o===Vn)p=-(a+s)/(a-s),d=-2*a*s/(a-s);else{if(o!==Is)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),d=-a*s/(a-s)}return l[0]=A,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3){let l=this.elements,A=1/(t-e),c=1/(i-n),h=1/(a-s),u=(t+e)*A,p=(i+n)*c,d,m;if(o===Vn)d=(a+s)*h,m=-2*h;else{if(o!==Is)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);d=s*h,m=-1*h}return l[0]=2*A,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},En=new E,kt=new ye,Ou=new E(0,0,0),Fu=new E(1,1,1),Ei=new E,$r=new E,bt=new E,jl=new ye,ql=new $e,ti=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],A=n[5],c=n[9],h=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,A),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,A)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,A)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,A));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,A),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,A),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Ns=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Qu=0,Jl=new E,bn=new $e,ci=new ye,es=new E,ur=new E,Hu=new E,Gu=new $e,Kl=new E(1,0,0),Zl=new E(0,1,0),$l=new E(0,0,1),ku={type:"added"},Vu={type:"removed"},Pt=class r extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new E,t=new ti,i=new $e,n=new E(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ye},normalMatrix:{value:new Se}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?es.copy(e):es.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(ur,es,this.up):ci.lookAt(es,ur,this.up),this.quaternion.setFromRotationMatrix(ci),n&&(ci.extractRotation(n.matrixWorld),bn.setFromRotationMatrix(ci),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ku)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vu)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Hu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let A=0,c=l.length;A<c;A++){let h=l[A];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,A=this.material.length;l<A;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),A=a(e.textures),c=a(e.images),h=a(e.shapes),u=a(e.skeletons),p=a(e.animations),d=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),A.length>0&&(i.textures=A),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),d.length>0&&(i.nodes=d)}return i.object=n,i;function a(o){let l=[];for(let A in o){let c=o[A];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Pt.DEFAULT_UP=new E(0,1,0),Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vt=new E,hi=new E,to=new E,ui=new E,Bn=new E,Sn=new E,ec=new E,io=new E,no=new E,ro=new E,ts=!1,Zi=class r{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Vt.subVectors(e,t),n.cross(Vt);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Vt.subVectors(n,t),hi.subVectors(i,t),to.subVectors(e,t);let a=Vt.dot(Vt),o=Vt.dot(hi),l=Vt.dot(to),A=hi.dot(hi),c=hi.dot(to),h=a*A-o*o;if(h===0)return s.set(0,0,0),null;let u=1/h,p=(A*l-o*c)*u,d=(a*c-o*l)*u;return s.set(1-p-d,d,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ui)!==null&&ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,t,i,n,s,a,o,l){return ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ts=!0),this.getInterpolation(e,t,i,n,s,a,o,l)}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static isFrontFacing(e,t,i,n){return Vt.subVectors(i,t),hi.subVectors(e,t),Vt.cross(hi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),.5*Vt.cross(hi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ts=!0),r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Bn.subVectors(n,i),Sn.subVectors(s,i),io.subVectors(e,i);let l=Bn.dot(io),A=Sn.dot(io);if(l<=0&&A<=0)return t.copy(i);no.subVectors(e,n);let c=Bn.dot(no),h=Sn.dot(no);if(c>=0&&h<=c)return t.copy(n);let u=l*h-c*A;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Bn,a);ro.subVectors(e,s);let p=Bn.dot(ro),d=Sn.dot(ro);if(d>=0&&p<=d)return t.copy(s);let m=p*A-l*d;if(m<=0&&A>=0&&d<=0)return o=A/(A-d),t.copy(i).addScaledVector(Sn,o);let f=c*d-p*h;if(f<=0&&h-c>=0&&p-d>=0)return ec.subVectors(s,n),o=(h-c)/(h-c+(p-d)),t.copy(n).addScaledVector(ec,o);let v=1/(f+m+u);return a=m*v,o=u*v,t.copy(i).addScaledVector(Bn,a).addScaledVector(Sn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},is={h:0,s:0,l:0};function so(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var de=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=He.workingColorSpace){if(e=Iu(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=so(a,s,e+1/3),this.g=so(a,s,e),this.b=so(a,s,e-1/3)}return He.toWorkingColorSpace(this,n),this}setStyle(e,t=Ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){let i=$c[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return He.fromWorkingColorSpace(gt.copy(this),e),65536*Math.round(lt(255*gt.r,0,255))+256*Math.round(lt(255*gt.g,0,255))+Math.round(lt(255*gt.b,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.fromWorkingColorSpace(gt.copy(this),t);let i=gt.r,n=gt.g,s=gt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,A,c=(o+a)/2;if(o===a)l=0,A=0;else{let h=a-o;switch(A=c<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-i)/h+2;break;case s:l=(i-n)/h+4}l/=6}return e.h=l,e.s=A,e.l=c,e}getRGB(e,t=He.workingColorSpace){return He.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Ze){He.fromWorkingColorSpace(gt.copy(this),e);let t=gt.r,i=gt.g,n=gt.b;return e!==Ze?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(is);let i=Xa(bi.h,is.h,t),n=Xa(bi.s,is.s,t),s=Xa(bi.l,is.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gt=new de;de.NAMES=$c;var Xu=0,nn=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=er(),this.name="",this.type="Material",this.blending=1,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=wo,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xn,this.stencilZFail=xn,this.stencilZPass=xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yo&&(i.blendSrc=this.blendSrc),this.blendDst!==wo&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qt=class extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jf=Wu();function Wu(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let A=l-127;A<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):A<-14?(i[l]=1024>>-A-14,i[256|l]=1024>>-A-14|32768,n[l]=-A-1,n[256|l]=-A-1):A<=15?(i[l]=A+15<<10,i[256|l]=A+15<<10|32768,n[l]=13,n[256|l]=13):A<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let A=l<<13,c=0;for(;!(8388608&A);)A<<=1,c-=8388608;A&=-8388609,c+=947912704,s[l]=A|c}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var et=new E,ns=new se,Qe=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),n=Dt(n,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hl&&(e.usage=this.usage),e}};var Os=class extends Qe{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fs=class extends Qe{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ve=class extends Qe{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Yu=0,Ut=new ye,ao=new Pt,Cn=new E,Bt=new Yt,pr=new Yt,ot=new E,Ne=class r extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zc(e)?Fs:Os)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Se().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,i){return Ut.makeTranslation(e,t,i),this.applyMatrix4(Ut),this}scale(e,t,i){return Ut.makeScale(e,t,i),this.applyMatrix4(Ut),this}lookAt(e){return ao.lookAt(e),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cn).negate(),this.translate(Cn.x,Cn.y,Cn.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ve(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new E,1/0);if(e){let i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(ot.addVectors(Bt.min,pr.min),Bt.expandByPoint(ot),ot.addVectors(Bt.max,pr.max),Bt.expandByPoint(ot)):(Bt.expandByPoint(pr.min),Bt.expandByPoint(pr.max))}Bt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)ot.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ot));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let A=0,c=o.count;A<c;A++)ot.fromBufferAttribute(o,A),l&&(Cn.fromBufferAttribute(e,A),ot.add(Cn)),n=Math.max(n,i.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,A=[],c=[];for(let R=0;R<o;R++)A[R]=new E,c[R]=new E;let h=new E,u=new E,p=new E,d=new se,m=new se,f=new se,v=new E,g=new E;function M(R,H,S){h.fromArray(n,3*R),u.fromArray(n,3*H),p.fromArray(n,3*S),d.fromArray(a,2*R),m.fromArray(a,2*H),f.fromArray(a,2*S),u.sub(h),p.sub(h),m.sub(d),f.sub(d);let N=1/(m.x*f.y-f.x*m.y);isFinite(N)&&(v.copy(u).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(N),g.copy(p).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(N),A[R].add(v),A[H].add(v),A[S].add(v),c[R].add(g),c[H].add(g),c[S].add(g))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let R=0,H=P.length;R<H;++R){let S=P[R],N=S.start;for(let F=N,k=N+S.count;F<k;F+=3)M(i[F+0],i[F+1],i[F+2])}let b=new E,x=new E,_=new E,I=new E;function C(R){_.fromArray(s,3*R),I.copy(_);let H=A[R];b.copy(H),b.sub(_.multiplyScalar(_.dot(H))).normalize(),x.crossVectors(I,H);let S=x.dot(c[R])<0?-1:1;l[4*R]=b.x,l[4*R+1]=b.y,l[4*R+2]=b.z,l[4*R+3]=S}for(let R=0,H=P.length;R<H;++R){let S=P[R],N=S.start;for(let F=N,k=N+S.count;F<k;F+=3)C(i[F+0]),C(i[F+1]),C(i[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qe(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let n=new E,s=new E,a=new E,o=new E,l=new E,A=new E,c=new E,h=new E;if(e)for(let u=0,p=e.count;u<p;u+=3){let d=e.getX(u+0),m=e.getX(u+1),f=e.getX(u+2);n.fromBufferAttribute(t,d),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,f),c.subVectors(a,s),h.subVectors(n,s),c.cross(h),o.fromBufferAttribute(i,d),l.fromBufferAttribute(i,m),A.fromBufferAttribute(i,f),o.add(c),l.add(c),A.add(c),i.setXYZ(d,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(f,A.x,A.y,A.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,s),h.subVectors(n,s),c.cross(h),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(o,l){let A=o.array,c=o.itemSize,h=o.normalized,u=new A.constructor(l.length*c),p=0,d=0;for(let m=0,f=l.length;m<f;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*c;for(let v=0;v<c;v++)u[d++]=A[p++]}return new Qe(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],A=s[o];for(let c=0,h=A.length;c<h;c++){let u=e(A[c],i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let A=a[o];t.addGroup(A.start,A.count,A.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let A in l)l[A]!==void 0&&(e[A]=l[A]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let A=i[l];e.data.attributes[l]=A.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let A=this.morphAttributes[l],c=[];for(let h=0,u=A.length;h<u;h++){let p=A[h];c.push(p.toJSON(e.data))}c.length>0&&(n[l]=c,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let A in n){let c=n[A];this.setAttribute(A,c.clone(t))}let s=e.morphAttributes;for(let A in s){let c=[],h=s[A];for(let u=0,p=h.length;u<p;u++)c.push(h[u].clone(t));this.morphAttributes[A]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let A=0,c=a.length;A<c;A++){let h=a[A];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tc=new ye,Wi=new Xn,rs=new jt,ic=new E,Tn=new E,In=new E,Ln=new E,oo=new E,ss=new E,as=new se,os=new se,As=new se,nc=new E,rc=new E,sc=new E,ls=new E,cs=new E,ke=class extends Pt{constructor(e=new Ne,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){ss.set(0,0,0);for(let l=0,A=s.length;l<A;l++){let c=o[l],h=s[l];c!==0&&(oo.fromBufferAttribute(h,e),a?ss.addScaledVector(oo,c):ss.addScaledVector(oo.sub(t),c))}t.add(ss)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere),rs.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),rs.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(rs,ic)===null||Wi.origin.distanceToSquared(ic)>(e.far-e.near)**2))return;tc.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(tc),i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Wi)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,A=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,m=u.length;d<m;d++){let f=u[d],v=a[f.materialIndex];for(let g=Math.max(f.start,p.start),M=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));g<M;g+=3)n=hs(this,v,e,i,A,c,h,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let d=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);d<m;d+=3)n=hs(this,a,e,i,A,c,h,o.getX(d),o.getX(d+1),o.getX(d+2)),n&&(n.faceIndex=Math.floor(d/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let d=0,m=u.length;d<m;d++){let f=u[d],v=a[f.materialIndex];for(let g=Math.max(f.start,p.start),M=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));g<M;g+=3)n=hs(this,v,e,i,A,c,h,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let d=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);d<m;d+=3)n=hs(this,a,e,i,A,c,h,d,d+1,d+2),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}};function hs(r,e,t,i,n,s,a,o,l,A){r.getVertexPosition(o,Tn),r.getVertexPosition(l,In),r.getVertexPosition(A,Ln);let c=function(h,u,p,d,m,f,v,g){let M;if(M=u.side===ht?d.intersectTriangle(v,f,m,!0,g):d.intersectTriangle(m,f,v,u.side===Ti,g),M===null)return null;cs.copy(g),cs.applyMatrix4(h.matrixWorld);let P=p.ray.origin.distanceTo(cs);return P<p.near||P>p.far?null:{distance:P,point:cs.clone(),object:h}}(r,e,t,i,Tn,In,Ln,ls);if(c){n&&(as.fromBufferAttribute(n,o),os.fromBufferAttribute(n,l),As.fromBufferAttribute(n,A),c.uv=Zi.getInterpolation(ls,Tn,In,Ln,as,os,As,new se)),s&&(as.fromBufferAttribute(s,o),os.fromBufferAttribute(s,l),As.fromBufferAttribute(s,A),c.uv1=Zi.getInterpolation(ls,Tn,In,Ln,as,os,As,new se),c.uv2=c.uv1),a&&(nc.fromBufferAttribute(a,o),rc.fromBufferAttribute(a,l),sc.fromBufferAttribute(a,A),c.normal=Zi.getInterpolation(ls,Tn,In,Ln,nc,rc,sc,new E),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let h={a:o,b:l,c:A,normal:new E,materialIndex:0};Zi.getNormal(Tn,In,Ln,h.normal),c.face=h}return c}var Jt=class r extends Ne{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],A=[],c=[],h=[],u=0,p=0;function d(m,f,v,g,M,P,b,x,_,I,C){let R=P/_,H=b/I,S=P/2,N=b/2,F=x/2,k=_+1,Ae=I+1,Z=0,G=0,$=new E;for(let Q=0;Q<Ae;Q++){let j=Q*H-N;for(let le=0;le<k;le++){let w=le*R-S;$[m]=w*g,$[f]=j*M,$[v]=F,A.push($.x,$.y,$.z),$[m]=0,$[f]=0,$[v]=x>0?1:-1,c.push($.x,$.y,$.z),h.push(le/_),h.push(1-Q/I),Z+=1}}for(let Q=0;Q<I;Q++)for(let j=0;j<_;j++){let le=u+j+k*Q,w=u+j+k*(Q+1),D=u+(j+1)+k*(Q+1),O=u+(j+1)+k*Q;l.push(le,w,O),l.push(w,D,O),G+=6}o.addGroup(p,G,C),p+=G,u+=Z}d("z","y","x",-1,-1,i,t,e,a,s,0),d("z","y","x",1,-1,i,t,-e,a,s,1),d("x","z","y",1,1,e,i,t,n,a,2),d("x","z","y",1,-1,e,i,-t,n,a,3),d("x","y","z",1,-1,e,t,i,n,s,4),d("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new ve(A,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Wn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Mt(r){let e={};for(let t=0;t<r.length;t++){let i=Wn(r[t]);for(let n in i)e[n]=i[n]}return e}function eh(r){return r.getRenderTarget()===null?r.outputColorSpace:He.workingColorSpace}var SA={clone:Wn,merge:Mt},xt=class extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wn(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},yr=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ct=class extends yr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*So*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*_s*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*So*Math.atan(Math.tan(.5*_s*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*_s*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,A=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/A,n*=a.width/l,i*=a.height/A}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rn=-90,Lo=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ct(Rn,1,e,t);n.layers=this.layers,this.add(n);let s=new ct(Rn,1,e,t);s.layers=this.layers,this.add(s);let a=new ct(Rn,1,e,t);a.layers=this.layers,this.add(a);let o=new ct(Rn,1,e,t);o.layers=this.layers,this.add(o);let l=new ct(Rn,1,e,t);l.layers=this.layers,this.add(l);let A=new ct(Rn,1,e,t);A.layers=this.layers,this.add(A)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let A of t)this.remove(A);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Is)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let A of t)this.add(A),A.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,A,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,A),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,n),e.render(t,c),e.setRenderTarget(h,u,p),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}},Qs=class extends Nt{constructor(e,t,i,n,s,a,o,l,A,c){super(e=e!==void 0?e:[],t=t!==void 0?t:Hn,i,n,s,a,o,l,A,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ro=class extends ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===tn?Ze:$t),this.texture=new Qs(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Jt(5,5,5),s=new xt({name:"CubemapFromEquirect",uniforms:Wn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ht,blending:0});s.uniforms.tEquirect.value=t;let a=new ke(n,s),o=t.minFilter;return t.minFilter===Es&&(t.minFilter=mt),new Lo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},Ao=new E,ju=new E,qu=new Se,Xt=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Ao.subVectors(i,t).cross(ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ao),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||qu.getNormalMatrix(e),n=this.coplanarPoint(Ao).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new jt,us=new E,Yn=class{constructor(e=new Xt,t=new Xt,i=new Xt,n=new Xt,s=new Xt,a=new Xt){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],A=n[4],c=n[5],h=n[6],u=n[7],p=n[8],d=n[9],m=n[10],f=n[11],v=n[12],g=n[13],M=n[14],P=n[15];if(i[0].setComponents(l-s,u-A,f-p,P-v).normalize(),i[1].setComponents(l+s,u+A,f+p,P+v).normalize(),i[2].setComponents(l+a,u+c,f+d,P+g).normalize(),i[3].setComponents(l-a,u-c,f-d,P-g).normalize(),i[4].setComponents(l-o,u-h,f-m,P-M).normalize(),t===Vn)i[5].setComponents(l+o,u+h,f+m,P+M).normalize();else{if(t!==Is)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,h,m,M).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(us.x=n.normal.x>0?e.max.x:e.min.x,us.y=n.normal.y>0?e.max.y:e.min.y,us.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function th(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ju(r,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let s=i.get(n);s&&(r.deleteBuffer(s.buffer),i.delete(n))},update:function(n,s){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);if(a===void 0)i.set(n,function(o,l){let A=o.array,c=o.usage,h=A.byteLength,u=r.createBuffer(),p;if(r.bindBuffer(l,u),r.bufferData(l,A,c),o.onUploadCallback(),A instanceof Float32Array)p=r.FLOAT;else if(A instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(A instanceof Int16Array)p=r.SHORT;else if(A instanceof Uint32Array)p=r.UNSIGNED_INT;else if(A instanceof Int32Array)p=r.INT;else if(A instanceof Int8Array)p=r.BYTE;else if(A instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(A instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);p=r.UNSIGNED_BYTE}return{buffer:u,type:p,bytesPerElement:A.BYTES_PER_ELEMENT,version:o.version,size:h}}(n,s));else if(a.version<n.version){if(a.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,A){let c=l.array,h=l._updateRange,u=l.updateRanges;if(r.bindBuffer(A,o),h.count===-1&&u.length===0&&r.bufferSubData(A,0,c),u.length!==0){for(let p=0,d=u.length;p<d;p++){let m=u[p];t?r.bufferSubData(A,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count):r.bufferSubData(A,m.start*c.BYTES_PER_ELEMENT,c.subarray(m.start,m.start+m.count))}l.clearUpdateRanges()}h.count!==-1&&(t?r.bufferSubData(A,h.offset*c.BYTES_PER_ELEMENT,c,h.offset,h.count):r.bufferSubData(A,h.offset*c.BYTES_PER_ELEMENT,c.subarray(h.offset,h.offset+h.count)),h.count=-1),l.onUploadCallback()})(a.buffer,n,s),a.version=n.version}}}}var jn=class r extends Ne{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),A=o+1,c=l+1,h=e/o,u=t/l,p=[],d=[],m=[],f=[];for(let v=0;v<c;v++){let g=v*u-a;for(let M=0;M<A;M++){let P=M*h-s;d.push(P,-g,0),m.push(0,0,1),f.push(M/o),f.push(1-v/l)}}for(let v=0;v<l;v++)for(let g=0;g<o;g++){let M=g+A*v,P=g+A*(v+1),b=g+1+A*(v+1),x=g+1+A*v;p.push(M,P,x),p.push(P,b,x)}this.setIndex(p),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(m,3)),this.setAttribute("uv",new ve(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ee={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ce={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Zt={basic:{uniforms:Mt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Mt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new de(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Mt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Mt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Mt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new de(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Mt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Mt([ce.points,ce.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Mt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Mt([ce.common,ce.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Mt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Mt([ce.sprite,ce.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Mt([ce.common,ce.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Mt([ce.lights,ce.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Zt.physical={uniforms:Mt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};var ps={r:0,b:0,g:0};function Ku(r,e,t,i,n,s,a){let o=new de(0),l,A,c=s===!0?0:1,h=null,u=0,p=null;function d(m,f){m.getRGB(ps,eh(r)),i.buffers.color.setClear(ps.r,ps.g,ps.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,d(o,c)},render:function(m,f){let v=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g===null?d(o,c):g&&g.isColor&&(d(g,1),v=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Zs)?(A===void 0&&(A=new ke(new Jt(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Wn(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:ht,depthTest:!1,depthWrite:!1,fog:!1})),A.geometry.deleteAttribute("normal"),A.geometry.deleteAttribute("uv"),A.onBeforeRender=function(P,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(A.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(A)),A.material.uniforms.envMap.value=g,A.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,A.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,A.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,A.material.toneMapped=He.getTransfer(g.colorSpace)!==Ve,h===g&&u===g.version&&p===r.toneMapping||(A.material.needsUpdate=!0,h=g,u=g.version,p=r.toneMapping),A.layers.enableAll(),m.unshift(A,A.geometry,A.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new ke(new jn(2,2),new xt({name:"BackgroundMaterial",uniforms:Wn(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=He.getTransfer(g.colorSpace)!==Ve,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),h===g&&u===g.version&&p===r.toneMapping||(l.material.needsUpdate=!0,h=g,u=g.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function Zu(r,e,t,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null),A=l,c=!1;function h(b){return i.isWebGL2?r.bindVertexArray(b):s.bindVertexArrayOES(b)}function u(b){return i.isWebGL2?r.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function p(b){let x=[],_=[],I=[];for(let C=0;C<n;C++)x[C]=0,_[C]=0,I[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:_,attributeDivisors:I,object:b,attributes:{},index:null}}function d(){let b=A.newAttributes;for(let x=0,_=b.length;x<_;x++)b[x]=0}function m(b){f(b,0)}function f(b,x){let _=A.newAttributes,I=A.enabledAttributes,C=A.attributeDivisors;_[b]=1,I[b]===0&&(r.enableVertexAttribArray(b),I[b]=1),C[b]!==x&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,x),C[b]=x)}function v(){let b=A.newAttributes,x=A.enabledAttributes;for(let _=0,I=x.length;_<I;_++)x[_]!==b[_]&&(r.disableVertexAttribArray(_),x[_]=0)}function g(b,x,_,I,C,R,H){H===!0?r.vertexAttribIPointer(b,x,_,C,R):r.vertexAttribPointer(b,x,_,I,C,R)}function M(){P(),c=!0,A!==l&&(A=l,h(A.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(b,x,_,I,C){let R=!1;if(a){let H=function(S,N,F){let k=F.wireframe===!0,Ae=o[S.id];Ae===void 0&&(Ae={},o[S.id]=Ae);let Z=Ae[N.id];Z===void 0&&(Z={},Ae[N.id]=Z);let G=Z[k];return G===void 0&&(G=p(i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),Z[k]=G),G}(I,_,x);A!==H&&(A=H,h(A.object)),R=function(S,N,F,k){let Ae=A.attributes,Z=N.attributes,G=0,$=F.getAttributes();for(let Q in $)if($[Q].location>=0){let j=Ae[Q],le=Z[Q];if(le===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),j===void 0||j.attribute!==le||le&&j.data!==le.data)return!0;G++}return A.attributesNum!==G||A.index!==k}(b,I,_,C),R&&function(S,N,F,k){let Ae={},Z=N.attributes,G=0,$=F.getAttributes();for(let Q in $)if($[Q].location>=0){let j=Z[Q];j===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(j=S.instanceColor));let le={};le.attribute=j,j&&j.data&&(le.data=j.data),Ae[Q]=le,G++}A.attributes=Ae,A.attributesNum=G,A.index=k}(b,I,_,C)}else{let H=x.wireframe===!0;A.geometry===I.id&&A.program===_.id&&A.wireframe===H||(A.geometry=I.id,A.program=_.id,A.wireframe=H,R=!0)}C!==null&&t.update(C,r.ELEMENT_ARRAY_BUFFER),(R||c)&&(c=!1,function(H,S,N,F){if(i.isWebGL2===!1&&(H.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;d();let k=F.attributes,Ae=N.getAttributes(),Z=S.defaultAttributeValues;for(let G in Ae){let $=Ae[G];if($.location>=0){let Q=k[G];if(Q===void 0&&(G==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),G==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),Q!==void 0){let j=Q.normalized,le=Q.itemSize,w=t.get(Q);if(w===void 0)continue;let D=w.buffer,O=w.type,K=w.bytesPerElement,T=i.isWebGL2===!0&&(O===r.INT||O===r.UNSIGNED_INT||Q.gpuType===kc);if(Q.isInterleavedBufferAttribute){let q=Q.data,z=q.stride,U=Q.offset;if(q.isInstancedInterleavedBuffer){for(let V=0;V<$.locationSize;V++)f($.location+V,q.meshPerAttribute);H.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let V=0;V<$.locationSize;V++)m($.location+V);r.bindBuffer(r.ARRAY_BUFFER,D);for(let V=0;V<$.locationSize;V++)g($.location+V,le/$.locationSize,O,j,z*K,(U+le/$.locationSize*V)*K,T)}else{if(Q.isInstancedBufferAttribute){for(let q=0;q<$.locationSize;q++)f($.location+q,Q.meshPerAttribute);H.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let q=0;q<$.locationSize;q++)m($.location+q);r.bindBuffer(r.ARRAY_BUFFER,D);for(let q=0;q<$.locationSize;q++)g($.location+q,le/$.locationSize,O,j,le*K,le/$.locationSize*q*K,T)}}else if(Z!==void 0){let j=Z[G];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv($.location,j);break;case 3:r.vertexAttrib3fv($.location,j);break;case 4:r.vertexAttrib4fv($.location,j);break;default:r.vertexAttrib1fv($.location,j)}}}}v()}(b,x,_,I),C!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))},reset:M,resetDefaultState:P,dispose:function(){M();for(let b in o){let x=o[b];for(let _ in x){let I=x[_];for(let C in I)u(I[C].object),delete I[C];delete x[_]}delete o[b]}},releaseStatesOfGeometry:function(b){if(o[b.id]===void 0)return;let x=o[b.id];for(let _ in x){let I=x[_];for(let C in I)u(I[C].object),delete I[C];delete x[_]}delete o[b.id]},releaseStatesOfProgram:function(b){for(let x in o){let _=o[x];if(_[b.id]===void 0)continue;let I=_[b.id];for(let C in I)u(I[C].object),delete I[C];delete _[b.id]}},initAttributes:d,enableAttribute:m,disableUnusedAttributes:v}}function $u(r,e,t,i){let n=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let A,c;if(n)A=r,c="drawArraysInstanced";else if(A=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",A===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");A[c](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let A=e.get("WEBGL_multi_draw");if(A===null)for(let c=0;c<l;c++)this.render(a[c],o[c]);else{A.multiDrawArraysWEBGL(s,a,0,o,0,l);let c=0;for(let h=0;h<l;h++)c+=o[h];t.update(c,s,1)}}}function ep(r,e,t){let i;function n(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),A=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,M=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:A,maxTextures:c,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:g&&M,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function tp(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Xt,o=new Se,l={value:null,needsUpdate:!1};function A(c,h,u,p){let d=c!==null?c.length:0,m=null;if(d!==0){if(m=l.value,p!==!0||m===null){let f=u+4*d,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,M=u;g!==d;++g,M+=4)a.copy(c[g]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,h){let u=c.length!==0||h||i!==0||n;return n=h,i=c.length,u},this.beginShadows=function(){s=!0,A(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,h){t=A(c,h,0)},this.setState=function(c,h,u){let p=c.clippingPlanes,d=c.clipIntersection,m=c.clipShadows,f=r.get(c);if(!n||p===null||p.length===0||s&&!m)s?A(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let v=s?0:i,g=4*v,M=f.clippingState||null;l.value=M,M=A(p,h,g,u);for(let P=0;P!==g;++P)M[P]=t[P];f.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}}}function ip(r){let e=new WeakMap;function t(n,s){return s===Do?n.mapping=Hn:s===_o&&(n.mapping=Gn),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===Do||s===_o){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new Ro(a.height/2);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var qn=class extends yr{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let A=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=A*this.view.offsetX,a=s+A*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ac=[.125,.215,.35,.446,.526,.582],dr=20,lo=new qn,oc=new de,co=null,ho=0,uo=0,ji=(1+Math.sqrt(5))/2,zn=1/ji,Ac=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,ji,zn),new E(0,ji,-zn),new E(zn,0,ji),new E(-zn,0,ji),new E(ji,zn,0),new E(-ji,zn,0)],Hs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){co=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(co,ho,uo),e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hn||e.mapping===Gn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),co=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:Ii,format:St,colorSpace:gi,depthBuffer:!1},n=lc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],A=[],c=a,h=a-4+1+ac.length;for(let u=0;u<h;u++){let p=Math.pow(2,c);l.push(p);let d=1/p;u>a-4?d=ac[u-a+4-1]:u===0&&(d=0),A.push(d);let m=1/(p-2),f=-m,v=1+m,g=[f,f,v,f,v,v,f,f,v,v,f,v],M=6,P=6,b=3,x=2,_=1,I=new Float32Array(b*P*M),C=new Float32Array(x*P*M),R=new Float32Array(_*P*M);for(let S=0;S<M;S++){let N=S%3*2/3-1,F=S>2?0:-1,k=[N,F,0,N+2/3,F,0,N+2/3,F+1,0,N,F,0,N+2/3,F+1,0,N,F+1,0];I.set(k,b*P*S),C.set(g,x*P*S);let Ae=[S,S,S,S,S,S];R.set(Ae,_*P*S)}let H=new Ne;H.setAttribute("position",new Qe(I,b)),H.setAttribute("uv",new Qe(C,x)),H.setAttribute("faceIndex",new Qe(R,_)),o.push(H),c>4&&c--}return{lodPlanes:o,sizeLods:l,sigmas:A}}(s)),this._blurMaterial=function(a,o,l){let A=new Float32Array(dr),c=new E(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:CA(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return n}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,i,n){let s=new ct(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,A=l.autoClear,c=l.toneMapping;l.getClearColor(oc),l.toneMapping=Si,l.autoClear=!1;let h=new qt({name:"PMREM.Background",side:ht,depthWrite:!1,depthTest:!1}),u=new ke(new Jt,h),p=!1,d=e.background;d?d.isColor&&(h.color.copy(d),e.background=null,p=!0):(h.color.copy(oc),p=!0);for(let m=0;m<6;m++){let f=m%3;f===0?(s.up.set(0,a[m],0),s.lookAt(o[m],0,0)):f===1?(s.up.set(0,0,a[m]),s.lookAt(0,o[m],0)):(s.up.set(0,a[m],0),s.lookAt(0,0,o[m]));let v=this._cubeSize;ds(n,f*v,m>2?v:0,v,v),l.setRenderTarget(n),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=c,l.autoClear=A,e.background=d}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Hn||e.mapping===Gn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;ds(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,lo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Ac[(n-1)%Ac.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,A=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new ke(this._lodPlanes[n],A),h=A.uniforms,u=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,d=s/p,m=isFinite(s)?1+Math.floor(3*d):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let f=[],v=0;for(let P=0;P<dr;++P){let b=P/d,x=Math.exp(-b*b/2);f.push(x),P===0?v+=x:P<m&&(v+=2*x)}for(let P=0;P<f.length;P++)f[P]=f[P]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:g}=this;h.dTheta.value=p,h.mipInt.value=g-i;let M=this._sizeLods[n];ds(t,3*M*(n>g-4?n-g+4:0),4*(this._cubeSize-M),3*M,2*M),l.setRenderTarget(t),l.render(c,lo)}};function lc(r,e,t){let i=new ut(r,e,t);return i.texture.mapping=Zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function cc(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:CA(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function hc(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:CA(),fragmentShader:`

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
	`}function np(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===Do||s===_o,o=s===Hn||s===Gn;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=e.get(n);return t===null&&(t=new Hs(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),e.set(n,l),l.texture}if(e.has(n))return e.get(n).texture;{let l=n.image;if(a&&l&&l.height>0||o&&l&&function(A){let c=0,h=6;for(let u=0;u<h;u++)A[u]!==void 0&&c++;return c===h}(l)){t===null&&(t=new Hs(r));let A=a?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,A),n.addEventListener("dispose",i),A.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function rp(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function sp(r,e,t,i){let n={},s=new WeakMap;function a(l){let A=l.target;A.index!==null&&e.remove(A.index);for(let h in A.attributes)e.remove(A.attributes[h]);for(let h in A.morphAttributes){let u=A.morphAttributes[h];for(let p=0,d=u.length;p<d;p++)e.remove(u[p])}A.removeEventListener("dispose",a),delete n[A.id];let c=s.get(A);c&&(e.remove(c),s.delete(A)),i.releaseStatesOfGeometry(A),A.isInstancedBufferGeometry===!0&&delete A._maxInstanceCount,t.memory.geometries--}function o(l){let A=[],c=l.index,h=l.attributes.position,u=0;if(c!==null){let m=c.array;u=c.version;for(let f=0,v=m.length;f<v;f+=3){let g=m[f+0],M=m[f+1],P=m[f+2];A.push(g,M,M,P,P,g)}}else{if(h===void 0)return;{let m=h.array;u=h.version;for(let f=0,v=m.length/3-1;f<v;f+=3){let g=f+0,M=f+1,P=f+2;A.push(g,M,M,P,P,g)}}}let p=new(Zc(A)?Fs:Os)(A,1);p.version=u;let d=s.get(l);d&&e.remove(d),s.set(l,p)}return{get:function(l,A){return n[A.id]===!0||(A.addEventListener("dispose",a),n[A.id]=!0,t.memory.geometries++),A},update:function(l){let A=l.attributes;for(let h in A)e.update(A[h],r.ARRAY_BUFFER);let c=l.morphAttributes;for(let h in c){let u=c[h];for(let p=0,d=u.length;p<d;p++)e.update(u[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let A=s.get(l);if(A){let c=l.index;c!==null&&A.version<c.version&&o(l)}else o(l);return s.get(l)}}}function ap(r,e,t,i){let n=i.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,A){r.drawElements(s,A,a,l*o),t.update(A,s,1)},this.renderInstances=function(l,A,c){if(c===0)return;let h,u;if(n)h=r,u="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",h===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[u](s,A,a,l*o,c),t.update(A,s,c)},this.renderMultiDraw=function(l,A,c){if(c===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<c;u++)this.render(l[u]/o,A[u]);else{h.multiDrawElementsWEBGL(s,A,0,a,l,0,c);let u=0;for(let p=0;p<c;p++)u+=A[p];t.update(u,s,1)}}}function op(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Ap(r,e){return r[0]-e[0]}function lp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function cp(r,e,t){let i={},n=new Float32Array(8),s=new WeakMap,a=new Ge,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,A,c){let h=l.morphTargetInfluences;if(e.isWebGL2===!0){let u=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,p=u!==void 0?u.length:0,d=s.get(A);if(d===void 0||d.count!==p){let N=function(){H.dispose(),s.delete(A),A.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let v=A.morphAttributes.position!==void 0,g=A.morphAttributes.normal!==void 0,M=A.morphAttributes.color!==void 0,P=A.morphAttributes.position||[],b=A.morphAttributes.normal||[],x=A.morphAttributes.color||[],_=0;v===!0&&(_=1),g===!0&&(_=2),M===!0&&(_=3);let I=A.attributes.position.count*_,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let R=new Float32Array(I*C*4*p),H=new Us(R,I,C,p);H.type=Bi,H.needsUpdate=!0;let S=4*_;for(let F=0;F<p;F++){let k=P[F],Ae=b[F],Z=x[F],G=I*C*4*F;for(let $=0;$<k.count;$++){let Q=$*S;v===!0&&(a.fromBufferAttribute(k,$),R[G+Q+0]=a.x,R[G+Q+1]=a.y,R[G+Q+2]=a.z,R[G+Q+3]=0),g===!0&&(a.fromBufferAttribute(Ae,$),R[G+Q+4]=a.x,R[G+Q+5]=a.y,R[G+Q+6]=a.z,R[G+Q+7]=0),M===!0&&(a.fromBufferAttribute(Z,$),R[G+Q+8]=a.x,R[G+Q+9]=a.y,R[G+Q+10]=a.z,R[G+Q+11]=Z.itemSize===4?a.w:1)}}d={count:p,texture:H,size:new se(I,C)},s.set(A,d),A.addEventListener("dispose",N)}let m=0;for(let v=0;v<h.length;v++)m+=h[v];let f=A.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",f),c.getUniforms().setValue(r,"morphTargetInfluences",h),c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}else{let u=h===void 0?0:h.length,p=i[A.id];if(p===void 0||p.length!==u){p=[];for(let g=0;g<u;g++)p[g]=[g,0];i[A.id]=p}for(let g=0;g<u;g++){let M=p[g];M[0]=g,M[1]=h[g]}p.sort(lp);for(let g=0;g<8;g++)g<u&&p[g][1]?(o[g][0]=p[g][0],o[g][1]=p[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(Ap);let d=A.morphAttributes.position,m=A.morphAttributes.normal,f=0;for(let g=0;g<8;g++){let M=o[g],P=M[0],b=M[1];P!==Number.MAX_SAFE_INTEGER&&b?(d&&A.getAttribute("morphTarget"+g)!==d[P]&&A.setAttribute("morphTarget"+g,d[P]),m&&A.getAttribute("morphNormal"+g)!==m[P]&&A.setAttribute("morphNormal"+g,m[P]),n[g]=b,f+=b):(d&&A.hasAttribute("morphTarget"+g)===!0&&A.deleteAttribute("morphTarget"+g),m&&A.hasAttribute("morphNormal"+g)===!0&&A.deleteAttribute("morphNormal"+g),n[g]=0)}let v=A.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",n)}}}}function hp(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,A=e.get(a,l);if(n.get(A)!==o&&(e.update(A),n.set(A,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let c=a.skeleton;n.get(c)!==o&&(c.update(),n.set(c,o))}return A},dispose:function(){n=new WeakMap}}}var Jn=class extends Nt{constructor(e,t,i,n,s,a,o,l,A,c){if((c=c!==void 0?c:en)!==en&&c!==kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===en&&(i=ei),i===void 0&&c===kn&&(i=$i),super(null,n,s,a,o,l,c,i,A),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ih=new Nt,nh=new Jn(1,1);nh.compareFunction=515;var rh=new Us,sh=new Io,ah=new Qs,uc=[],pc=[],dc=new Float32Array(16),fc=new Float32Array(9),gc=new Float32Array(4);function tr(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=uc[n];if(s===void 0&&(s=new Float32Array(n),uc[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function nt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function rt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ea(r,e){let t=pc[e];t===void 0&&(t=new Int32Array(e),pc[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function up(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function pp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2fv(this.addr,e),rt(t,e)}}function dp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;r.uniform3fv(this.addr,e),rt(t,e)}}function fp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4fv(this.addr,e),rt(t,e)}}function gp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(nt(t,i))return;gc.set(i),r.uniformMatrix2fv(this.addr,!1,gc),rt(t,i)}}function mp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(nt(t,i))return;fc.set(i),r.uniformMatrix3fv(this.addr,!1,fc),rt(t,i)}}function vp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(nt(t,i))return;dc.set(i),r.uniformMatrix4fv(this.addr,!1,dc),rt(t,i)}}function Mp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Pp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2iv(this.addr,e),rt(t,e)}}function xp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;r.uniform3iv(this.addr,e),rt(t,e)}}function yp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4iv(this.addr,e),rt(t,e)}}function wp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Dp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2uiv(this.addr,e),rt(t,e)}}function _p(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;r.uniform3uiv(this.addr,e),rt(t,e)}}function Ep(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4uiv(this.addr,e),rt(t,e)}}function bp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?nh:ih;t.setTexture2D(e||s,n)}function Bp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||sh,n)}function Sp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ah,n)}function Cp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||rh,n)}function Tp(r,e){r.uniform1fv(this.addr,e)}function Ip(r,e){let t=tr(e,this.size,2);r.uniform2fv(this.addr,t)}function Lp(r,e){let t=tr(e,this.size,3);r.uniform3fv(this.addr,t)}function Rp(r,e){let t=tr(e,this.size,4);r.uniform4fv(this.addr,t)}function zp(r,e){let t=tr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Up(r,e){let t=tr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Np(r,e){let t=tr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Op(r,e){r.uniform1iv(this.addr,e)}function Fp(r,e){r.uniform2iv(this.addr,e)}function Qp(r,e){r.uniform3iv(this.addr,e)}function Hp(r,e){r.uniform4iv(this.addr,e)}function Gp(r,e){r.uniform1uiv(this.addr,e)}function kp(r,e){r.uniform2uiv(this.addr,e)}function Vp(r,e){r.uniform3uiv(this.addr,e)}function Xp(r,e){r.uniform4uiv(this.addr,e)}function Wp(r,e,t){let i=this.cache,n=e.length,s=ea(t,n);nt(i,s)||(r.uniform1iv(this.addr,s),rt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||ih,s[a])}function Yp(r,e,t){let i=this.cache,n=e.length,s=ea(t,n);nt(i,s)||(r.uniform1iv(this.addr,s),rt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||sh,s[a])}function jp(r,e,t){let i=this.cache,n=e.length,s=ea(t,n);nt(i,s)||(r.uniform1iv(this.addr,s),rt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||ah,s[a])}function qp(r,e,t){let i=this.cache,n=e.length,s=ea(t,n);nt(i,s)||(r.uniform1iv(this.addr,s),rt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||rh,s[a])}var zo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return up;case 35664:return pp;case 35665:return dp;case 35666:return fp;case 35674:return gp;case 35675:return mp;case 35676:return vp;case 5124:case 35670:return Mp;case 35667:case 35671:return Pp;case 35668:case 35672:return xp;case 35669:case 35673:return yp;case 5125:return wp;case 36294:return Dp;case 36295:return _p;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Cp}}(t.type)}},Uo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return Tp;case 35664:return Ip;case 35665:return Lp;case 35666:return Rp;case 35674:return zp;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Op;case 35667:case 35671:return Fp;case 35668:case 35672:return Qp;case 35669:case 35673:return Hp;case 5125:return Gp;case 36294:return kp;case 36295:return Vp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return qp}}(t.type)}},No=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},po=/(\w+)(\])?(\[|\.)?/g;function mc(r,e){r.seq.push(e),r.map[e.id]=e}function Jp(r,e,t){let i=r.name,n=i.length;for(po.lastIndex=0;;){let s=po.exec(i),a=po.lastIndex,o=s[1],l=s[2]==="]",A=s[3];if(l&&(o|=0),A===void 0||A==="["&&a+2===n){mc(t,A===void 0?new zo(o,r,e):new Uo(o,r,e));break}{let c=t.map[o];c===void 0&&(c=new No(o),mc(t,c)),t=c}}}var Qn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);Jp(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function vc(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var Kp=37297,Zp=0;function Mc(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+function(o,l){let A=o.split(`
`),c=[],h=Math.max(l-6,0),u=Math.min(l+6,A.length);for(let p=h;p<u;p++){let d=p+1;c.push(`${d===l?">":" "} ${d}: ${A[p]}`)}return c.join(`
`)}(r.getShaderSource(e),a)}return n}function $p(r,e){let t=function(i){let n=He.getPrimaries(He.workingColorSpace),s=He.getPrimaries(i),a;switch(n===s?a="":n===Ts&&s===Cs?a="LinearDisplayP3ToLinearSRGB":n===Cs&&s===Ts&&(a="LinearSRGBToLinearDisplayP3"),i){case gi:case $s:return[a,"LinearTransferOETF"];case Ze:case BA:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ed(r,e){let t;switch(e){case _u:t="Linear";break;case Eu:t="Reinhard";break;case bu:t="OptimizedCineon";break;case Bu:t="ACESFilmic";break;case Cu:t="AgX";break;case Su:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Un(r){return r!==""}function Pc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var td=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(r){return r.replace(td,nd)}var id=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nd(r,e){let t=Ee[e];if(t===void 0){let i=id.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Oo(t)}var rd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(r){return r.replace(rd,sd)}function sd(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function wc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ad(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(S){let N="SHADOWMAP_TYPE_BASIC";return S.shadowMapType===Fc?N="SHADOWMAP_TYPE_PCF":S.shadowMapType===EA?N="SHADOWMAP_TYPE_PCF_SOFT":S.shadowMapType===pi&&(N="SHADOWMAP_TYPE_VSM"),N}(t),A=function(S){let N="ENVMAP_TYPE_CUBE";if(S.envMap)switch(S.envMapMode){case Hn:case Gn:N="ENVMAP_TYPE_CUBE";break;case Zs:N="ENVMAP_TYPE_CUBE_UV"}return N}(t),c=function(S){let N="ENVMAP_MODE_REFLECTION";return S.envMap&&S.envMapMode===Gn&&(N="ENVMAP_MODE_REFRACTION"),N}(t),h=function(S){let N="ENVMAP_BLENDING_NONE";if(S.envMap)switch(S.combine){case Hc:N="ENVMAP_BLENDING_MULTIPLY";break;case wu:N="ENVMAP_BLENDING_MIX";break;case Du:N="ENVMAP_BLENDING_ADD"}return N}(t),u=function(S){let N=S.envMapCubeUVHeight;if(N===null)return null;let F=Math.log2(N)-2,k=1/N;return{texelWidth:1/(3*Math.max(Math.pow(2,F),112)),texelHeight:k,maxMip:F}}(t),p=t.isWebGL2?"":function(S){return[S.extensionDerivatives||S.envMapCubeUVHeight||S.bumpMap||S.normalMapTangentSpace||S.clearcoatNormalMap||S.flatShading||S.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(S.extensionFragDepth||S.logarithmicDepthBuffer)&&S.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",S.extensionDrawBuffers&&S.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(S.extensionShaderTextureLOD||S.envMap||S.transmission)&&S.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Un).join(`
`)}(t),d=function(S){return[S.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Un).join(`
`)}(t),m=function(S){let N=[];for(let F in S){let k=S[F];k!==!1&&N.push("#define "+F+" "+k)}return N.join(`
`)}(s),f=n.createProgram(),v,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Un).join(`
`),v.length>0&&(v+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Un).join(`
`),g.length>0&&(g+=`
`)):(v=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Un).join(`
`),g=[p,wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+A:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Ee.tonemapping_pars_fragment:"",t.toneMapping!==Si?ed("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,$p("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Un).join(`
`)),a=Oo(a),a=Pc(a,t),a=xc(a,t),o=Oo(o),o=Pc(o,t),o=xc(o,t),a=yc(a),o=yc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,v=[d,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let P=M+v+a,b=M+g+o,x=vc(n,n.VERTEX_SHADER,P),_=vc(n,n.FRAGMENT_SHADER,b);function I(S){if(r.debug.checkShaderErrors){let N=n.getProgramInfoLog(f).trim(),F=n.getShaderInfoLog(x).trim(),k=n.getShaderInfoLog(_).trim(),Ae=!0,Z=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(Ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,f,x,_);else{let G=Mc(n,x,"vertex"),$=Mc(n,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+G+`
`+$)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):F!==""&&k!==""||(Z=!1);Z&&(S.diagnostics={runnable:Ae,programLog:N,vertexShader:{log:F,prefix:v},fragmentShader:{log:k,prefix:g}})}n.deleteShader(x),n.deleteShader(_),C=new Qn(n,f),R=function(N,F){let k={},Ae=N.getProgramParameter(F,N.ACTIVE_ATTRIBUTES);for(let Z=0;Z<Ae;Z++){let G=N.getActiveAttrib(F,Z),$=G.name,Q=1;G.type===N.FLOAT_MAT2&&(Q=2),G.type===N.FLOAT_MAT3&&(Q=3),G.type===N.FLOAT_MAT4&&(Q=4),k[$]={type:G.type,location:N.getAttribLocation(F,$),locationSize:Q}}return k}(n,f)}let C,R;n.attachShader(f,x),n.attachShader(f,_),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f),this.getUniforms=function(){return C===void 0&&I(this),C},this.getAttributes=function(){return R===void 0&&I(this),R};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=n.getProgramParameter(f,Kp)),H},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=x,this.fragmentShader=_,this}var od=0,Fo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qo(e),t.set(e,i)),i}},Qo=class{constructor(e){this.id=od++,this.code=e,this.usedTimes=0}};function Ad(r,e,t,i,n,s,a){let o=new Ns,l=new Fo,A=[],c=n.isWebGL2,h=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,v,g,M,P){let b=M.fog,x=P.geometry,_=f.isMeshStandardMaterial?M.environment:null,I=(f.isMeshStandardMaterial?t:e).get(f.envMap||_),C=I&&I.mapping===Zs?I.image.height:null,R=d[f.type];f.precision!==null&&(p=n.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let H=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,S=H!==void 0?H.length:0,N,F,k,Ae,Z=0;if(x.morphAttributes.position!==void 0&&(Z=1),x.morphAttributes.normal!==void 0&&(Z=2),x.morphAttributes.color!==void 0&&(Z=3),R){let pt=Zt[R];N=pt.vertexShader,F=pt.fragmentShader}else N=f.vertexShader,F=f.fragmentShader,l.update(f),k=l.getVertexShaderID(f),Ae=l.getFragmentShaderID(f);let G=r.getRenderTarget(),$=P.isInstancedMesh===!0,Q=P.isBatchedMesh===!0,j=!!f.map,le=!!f.matcap,w=!!I,D=!!f.aoMap,O=!!f.lightMap,K=!!f.bumpMap,T=!!f.normalMap,q=!!f.displacementMap,z=!!f.emissiveMap,U=!!f.metalnessMap,V=!!f.roughnessMap,ne=f.anisotropy>0,te=f.clearcoat>0,y=f.iridescence>0,re=f.sheen>0,X=f.transmission>0,W=ne&&!!f.anisotropyMap,ae=te&&!!f.clearcoatMap,he=te&&!!f.clearcoatNormalMap,pe=te&&!!f.clearcoatRoughnessMap,fe=y&&!!f.iridescenceMap,_e=y&&!!f.iridescenceThicknessMap,ge=re&&!!f.sheenColorMap,me=re&&!!f.sheenRoughnessMap,be=!!f.specularMap,at=!!f.specularColorMap,Pe=!!f.specularIntensityMap,ze=X&&!!f.transmissionMap,Te=X&&!!f.thicknessMap,Hr=!!f.gradientMap,Mn=!!f.alphaMap,Gr=f.alphaTest>0,Lt=!!f.alphaHash,Et=!!f.extensions,Pn=!!x.attributes.uv1,J=!!x.attributes.uv2,kr=!!x.attributes.uv3,ar=Si;return f.toneMapped&&(G!==null&&G.isXRRenderTarget!==!0||(ar=r.toneMapping)),{isWebGL2:c,shaderID:R,shaderType:f.type,shaderName:f.name,vertexShader:N,fragmentShader:F,defines:f.defines,customVertexShaderID:k,customFragmentShaderID:Ae,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:Q,instancing:$,instancingColor:$&&P.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:G===null?r.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:gi,map:j,matcap:le,envMap:w,envMapMode:w&&I.mapping,envMapCubeUVHeight:C,aoMap:D,lightMap:O,bumpMap:K,normalMap:T,displacementMap:u&&q,emissiveMap:z,normalMapObjectSpace:T&&f.normalMapType===1,normalMapTangentSpace:T&&f.normalMapType===0,metalnessMap:U,roughnessMap:V,anisotropy:ne,anisotropyMap:W,clearcoat:te,clearcoatMap:ae,clearcoatNormalMap:he,clearcoatRoughnessMap:pe,iridescence:y,iridescenceMap:fe,iridescenceThicknessMap:_e,sheen:re,sheenColorMap:ge,sheenRoughnessMap:me,specularMap:be,specularColorMap:at,specularIntensityMap:Pe,transmission:X,transmissionMap:ze,thicknessMap:Te,gradientMap:Hr,opaque:f.transparent===!1&&f.blending===1,alphaMap:Mn,alphaTest:Gr,alphaHash:Lt,combine:f.combine,mapUv:j&&m(f.map.channel),aoMapUv:D&&m(f.aoMap.channel),lightMapUv:O&&m(f.lightMap.channel),bumpMapUv:K&&m(f.bumpMap.channel),normalMapUv:T&&m(f.normalMap.channel),displacementMapUv:q&&m(f.displacementMap.channel),emissiveMapUv:z&&m(f.emissiveMap.channel),metalnessMapUv:U&&m(f.metalnessMap.channel),roughnessMapUv:V&&m(f.roughnessMap.channel),anisotropyMapUv:W&&m(f.anisotropyMap.channel),clearcoatMapUv:ae&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(f.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(f.sheenRoughnessMap.channel),specularMapUv:be&&m(f.specularMap.channel),specularColorMapUv:at&&m(f.specularColorMap.channel),specularIntensityMapUv:Pe&&m(f.specularIntensityMap.channel),transmissionMapUv:ze&&m(f.transmissionMap.channel),thicknessMapUv:Te&&m(f.thicknessMap.channel),alphaMapUv:Mn&&m(f.alphaMap.channel),vertexTangents:!!x.attributes.tangent&&(T||ne),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,vertexUv1s:Pn,vertexUv2s:J,vertexUv3s:kr,pointsUvs:P.isPoints===!0&&!!x.attributes.uv&&(j||Mn),fog:!!b,useFog:f.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:x.morphAttributes.position!==void 0,morphNormals:x.morphAttributes.normal!==void 0,morphColors:x.morphAttributes.color!==void 0,morphTargetsCount:S,morphTextureStride:Z,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&g.length>0,shadowMapType:r.shadowMap.type,toneMapping:ar,useLegacyLights:r._useLegacyLights,decodeVideoTexture:j&&f.map.isVideoTexture===!0&&He.getTransfer(f.map.colorSpace)===Ve,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===ht,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:Et&&f.extensions.derivatives===!0,extensionFragDepth:Et&&f.extensions.fragDepth===!0,extensionDrawBuffers:Et&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:Et&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Et&&f.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let v=[];if(f.shaderID?v.push(f.shaderID):(v.push(f.customVertexShaderID),v.push(f.customFragmentShaderID)),f.defines!==void 0)for(let g in f.defines)v.push(g),v.push(f.defines[g]);return f.isRawShaderMaterial===!1&&(function(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}(v,f),function(g,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),g.push(o.mask)}(v,f),v.push(r.outputColorSpace)),v.push(f.customProgramCacheKey),v.join()},getUniforms:function(f){let v=d[f.type],g;if(v){let M=Zt[v];g=SA.clone(M.uniforms)}else g=f.uniforms;return g},acquireProgram:function(f,v){let g;for(let M=0,P=A.length;M<P;M++){let b=A[M];if(b.cacheKey===v){g=b,++g.usedTimes;break}}return g===void 0&&(g=new ad(r,v,f,s),A.push(g)),g},releaseProgram:function(f){if(--f.usedTimes==0){let v=A.indexOf(f);A[v]=A[A.length-1],A.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:A,dispose:function(){l.dispose()}}}function ld(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function cd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Dc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _c(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,A,c,h){let u=r[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:A,renderOrder:a.renderOrder,z:c,group:h},r[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=A,u.renderOrder=a.renderOrder,u.z=c,u.group=h),e++,u}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,A,c,h){let u=s(a,o,l,A,c,h);l.transmission>0?i.push(u):l.transparent===!0?n.push(u):t.push(u)},unshift:function(a,o,l,A,c,h){let u=s(a,o,l,A,c,h);l.transmission>0?i.unshift(u):l.transparent===!0?n.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||cd),i.length>1&&i.sort(o||Dc),n.length>1&&n.sort(o||Dc)}}}function hd(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new _c,r.set(e,[n])):t>=i.length?(n=new _c,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function ud(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new de};break;case"SpotLight":t={position:new E,direction:new E,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new E,halfWidth:new E,halfHeight:new E}}return r[e.id]=t,t}}}var pd=0;function dd(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function fd(r,e){let t=new ud,i=function(){let l={};return{get:function(A){if(l[A.id]!==void 0)return l[A.id];let c;switch(A.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3}}return l[A.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);let s=new E,a=new ye,o=new ye;return{setup:function(l,A){let c=0,h=0,u=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let p=0,d=0,m=0,f=0,v=0,g=0,M=0,P=0,b=0,x=0,_=0;l.sort(dd);let I=A===!0?Math.PI:1;for(let R=0,H=l.length;R<H;R++){let S=l[R],N=S.color,F=S.intensity,k=S.distance,Ae=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)c+=N.r*F*I,h+=N.g*F*I,u+=N.b*F*I;else if(S.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(S.sh.coefficients[Z],F);_++}else if(S.isDirectionalLight){let Z=t.get(S);if(Z.color.copy(S.color).multiplyScalar(S.intensity*I),S.castShadow){let G=S.shadow,$=i.get(S);$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=Ae,n.directionalShadowMatrix[p]=S.shadow.matrix,g++}n.directional[p]=Z,p++}else if(S.isSpotLight){let Z=t.get(S);Z.position.setFromMatrixPosition(S.matrixWorld),Z.color.copy(N).multiplyScalar(F*I),Z.distance=k,Z.coneCos=Math.cos(S.angle),Z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),Z.decay=S.decay,n.spot[m]=Z;let G=S.shadow;if(S.map&&(n.spotLightMap[b]=S.map,b++,G.updateMatrices(S),S.castShadow&&x++),n.spotLightMatrix[m]=G.matrix,S.castShadow){let $=i.get(S);$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,n.spotShadow[m]=$,n.spotShadowMap[m]=Ae,P++}m++}else if(S.isRectAreaLight){let Z=t.get(S);Z.color.copy(N).multiplyScalar(F),Z.halfWidth.set(.5*S.width,0,0),Z.halfHeight.set(0,.5*S.height,0),n.rectArea[f]=Z,f++}else if(S.isPointLight){let Z=t.get(S);if(Z.color.copy(S.color).multiplyScalar(S.intensity*I),Z.distance=S.distance,Z.decay=S.decay,S.castShadow){let G=S.shadow,$=i.get(S);$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,n.pointShadow[d]=$,n.pointShadowMap[d]=Ae,n.pointShadowMatrix[d]=S.shadow.matrix,M++}n.point[d]=Z,d++}else if(S.isHemisphereLight){let Z=t.get(S);Z.skyColor.copy(S.color).multiplyScalar(F*I),Z.groundColor.copy(S.groundColor).multiplyScalar(F*I),n.hemi[v]=Z,v++}}f>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=u;let C=n.hash;C.directionalLength===p&&C.pointLength===d&&C.spotLength===m&&C.rectAreaLength===f&&C.hemiLength===v&&C.numDirectionalShadows===g&&C.numPointShadows===M&&C.numSpotShadows===P&&C.numSpotMaps===b&&C.numLightProbes===_||(n.directional.length=p,n.spot.length=m,n.rectArea.length=f,n.point.length=d,n.hemi.length=v,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=P+b-x,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=_,C.directionalLength=p,C.pointLength=d,C.spotLength=m,C.rectAreaLength=f,C.hemiLength=v,C.numDirectionalShadows=g,C.numPointShadows=M,C.numSpotShadows=P,C.numSpotMaps=b,C.numLightProbes=_,n.version=pd++)},setupView:function(l,A){let c=0,h=0,u=0,p=0,d=0,m=A.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){let g=l[f];if(g.isDirectionalLight){let M=n.directional[c];M.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),c++}else if(g.isSpotLight){let M=n.spot[u];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(g.isRectAreaLight){let M=n.rectArea[p];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),o.identity(),a.copy(g.matrixWorld),a.premultiply(m),o.extractRotation(a),M.halfWidth.set(.5*g.width,0,0),M.halfHeight.set(0,.5*g.height,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){let M=n.hemi[d];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(m),d++}}},state:n}}function Ec(r,e){let t=new fd(r,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){n.push(s)}}}function gd(r,e){let t=new WeakMap;return{get:function(i,n=0){let s=t.get(i),a;return s===void 0?(a=new Ec(r,e),t.set(i,[a])):n>=s.length?(a=new Ec(r,e),s.push(a)):a=s[n],a},dispose:function(){t=new WeakMap}}}var Ho=class extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Go=class extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function md(r,e,t){let i=new Yn,n=new se,s=new se,a=new Ge,o=new Ho({depthPacking:3201}),l=new Go,A={},c=t.maxTextureSize,h={[Ti]:ht,[ht]:Ti,2:2},u=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let d=new Ne;d.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new ke(d,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let v=this.type;function g(x,_){let I=e.update(m);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ut(n.x,n.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(_,null,I,u,m,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(_,null,I,p,m,null)}function M(x,_,I,C){let R=null,H=I.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(H!==void 0)R=H;else if(R=I.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){let S=R.uuid,N=_.uuid,F=A[S];F===void 0&&(F={},A[S]=F);let k=F[N];k===void 0&&(k=R.clone(),F[N]=k,_.addEventListener("dispose",b)),R=k}return R.visible=_.visible,R.wireframe=_.wireframe,R.side=C===pi?_.shadowSide!==null?_.shadowSide:_.side:_.shadowSide!==null?_.shadowSide:h[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,I.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(r.properties.get(R).light=I),R}function P(x,_,I,C,R){if(x.visible===!1)return;if(x.layers.test(_.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&R===pi)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,x.matrixWorld);let S=e.update(x),N=x.material;if(Array.isArray(N)){let F=S.groups;for(let k=0,Ae=F.length;k<Ae;k++){let Z=F[k],G=N[Z.materialIndex];if(G&&G.visible){let $=M(x,G,C,R);x.onBeforeShadow(r,x,_,I,S,$,Z),r.renderBufferDirect(I,null,S,$,x,Z),x.onAfterShadow(r,x,_,I,S,$,Z)}}}else if(N.visible){let F=M(x,N,C,R);x.onBeforeShadow(r,x,_,I,S,F,null),r.renderBufferDirect(I,null,S,F,x,null),x.onAfterShadow(r,x,_,I,S,F,null)}}let H=x.children;for(let S=0,N=H.length;S<N;S++)P(H[S],_,I,C,R)}function b(x){x.target.removeEventListener("dispose",b);for(let _ in A){let I=A[_],C=x.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}this.render=function(x,_,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||x.length===0)return;let C=r.getRenderTarget(),R=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),S=r.state;S.setBlending(0),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);let N=v!==pi&&this.type===pi,F=v===pi&&this.type!==pi;for(let k=0,Ae=x.length;k<Ae;k++){let Z=x[k],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let $=G.getFrameExtents();if(n.multiply($),s.copy(G.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/$.x),n.x=s.x*$.x,G.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/$.y),n.y=s.y*$.y,G.mapSize.y=s.y)),G.map===null||N===!0||F===!0){let j=this.type!==pi?{minFilter:At,magFilter:At}:{};G.map!==null&&G.map.dispose(),G.map=new ut(n.x,n.y,j),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();let Q=G.getViewportCount();for(let j=0;j<Q;j++){let le=G.getViewport(j);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),S.viewport(a),G.updateMatrices(Z,j),i=G.getFrustum(),P(_,I,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===pi&&g(G,I),G.needsUpdate=!1}v=this.type,f.needsUpdate=!1,r.setRenderTarget(C,R,H)}}function vd(r,e,t){let i=t.isWebGL2,n=new function(){let y=!1,re=new Ge,X=null,W=new Ge(0,0,0,0);return{setMask:function(ae){X===ae||y||(r.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){y=ae},setClear:function(ae,he,pe,fe,_e){_e===!0&&(ae*=fe,he*=fe,pe*=fe),re.set(ae,he,pe,fe),W.equals(re)===!1&&(r.clearColor(ae,he,pe,fe),W.copy(re))},reset:function(){y=!1,X=null,W.set(-1,0,0,0)}}},s=new function(){let y=!1,re=null,X=null,W=null;return{setTest:function(ae){ae?K(r.DEPTH_TEST):T(r.DEPTH_TEST)},setMask:function(ae){re===ae||y||(r.depthMask(ae),re=ae)},setFunc:function(ae){if(X!==ae){switch(ae){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}X=ae}},setLocked:function(ae){y=ae},setClear:function(ae){W!==ae&&(r.clearDepth(ae),W=ae)},reset:function(){y=!1,re=null,X=null,W=null}}},a=new function(){let y=!1,re=null,X=null,W=null,ae=null,he=null,pe=null,fe=null,_e=null;return{setTest:function(ge){y||(ge?K(r.STENCIL_TEST):T(r.STENCIL_TEST))},setMask:function(ge){re===ge||y||(r.stencilMask(ge),re=ge)},setFunc:function(ge,me,be){X===ge&&W===me&&ae===be||(r.stencilFunc(ge,me,be),X=ge,W=me,ae=be)},setOp:function(ge,me,be){he===ge&&pe===me&&fe===be||(r.stencilOp(ge,me,be),he=ge,pe=me,fe=be)},setLocked:function(ge){y=ge},setClear:function(ge){_e!==ge&&(r.clearStencil(ge),_e=ge)},reset:function(){y=!1,re=null,X=null,W=null,ae=null,he=null,pe=null,fe=null,_e=null}}},o=new WeakMap,l=new WeakMap,A={},c={},h=new WeakMap,u=[],p=null,d=!1,m=null,f=null,v=null,g=null,M=null,P=null,b=null,x=new de(0,0,0),_=0,I=!1,C=null,R=null,H=null,S=null,N=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Ae=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(Ae=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=Ae>=1):Z.indexOf("OpenGL ES")!==-1&&(Ae=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=Ae>=2);let G=null,$={},Q=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),le=new Ge().fromArray(Q),w=new Ge().fromArray(j);function D(y,re,X,W){let ae=new Uint8Array(4),he=r.createTexture();r.bindTexture(y,he),r.texParameteri(y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pe=0;pe<X;pe++)!i||y!==r.TEXTURE_3D&&y!==r.TEXTURE_2D_ARRAY?r.texImage2D(re+pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage3D(re,0,r.RGBA,1,1,W,0,r.RGBA,r.UNSIGNED_BYTE,ae);return he}let O={};function K(y){A[y]!==!0&&(r.enable(y),A[y]=!0)}function T(y){A[y]!==!1&&(r.disable(y),A[y]=!1)}O[r.TEXTURE_2D]=D(r.TEXTURE_2D,r.TEXTURE_2D,1),O[r.TEXTURE_CUBE_MAP]=D(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(O[r.TEXTURE_2D_ARRAY]=D(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),O[r.TEXTURE_3D]=D(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),K(r.DEPTH_TEST),s.setFunc(3),V(!1),ne(1),K(r.CULL_FACE),U(0);let q={[qi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(i)q[103]=r.MIN,q[104]=r.MAX;else{let y=e.get("EXT_blend_minmax");y!==null&&(q[103]=y.MIN_EXT,q[104]=y.MAX_EXT)}let z={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[yo]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[wo]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function U(y,re,X,W,ae,he,pe,fe,_e,ge){if(y!==0){if(d===!1&&(K(r.BLEND),d=!0),y===5)ae=ae||re,he=he||X,pe=pe||W,re===f&&ae===M||(r.blendEquationSeparate(q[re],q[ae]),f=re,M=ae),X===v&&W===g&&he===P&&pe===b||(r.blendFuncSeparate(z[X],z[W],z[he],z[pe]),v=X,g=W,P=he,b=pe),fe.equals(x)!==!1&&_e===_||(r.blendColor(fe.r,fe.g,fe.b,_e),x.copy(fe),_=_e),m=y,I=!1;else if(y!==m||ge!==I){if(f===qi&&M===qi||(r.blendEquation(r.FUNC_ADD),f=qi,M=qi),ge)switch(y){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}else switch(y){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}v=null,g=null,P=null,b=null,x.set(0,0,0),_=0,m=y,I=ge}}else d===!0&&(T(r.BLEND),d=!1)}function V(y){C!==y&&(y?r.frontFace(r.CW):r.frontFace(r.CCW),C=y)}function ne(y){y!==0?(K(r.CULL_FACE),y!==R&&(y===1?r.cullFace(r.BACK):y===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):T(r.CULL_FACE),R=y}function te(y,re,X){y?(K(r.POLYGON_OFFSET_FILL),S===re&&N===X||(r.polygonOffset(re,X),S=re,N=X)):T(r.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:s,stencil:a},enable:K,disable:T,bindFramebuffer:function(y,re){return c[y]!==re&&(r.bindFramebuffer(y,re),c[y]=re,i&&(y===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=re),y===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=re)),!0)},drawBuffers:function(y,re){let X=u,W=!1;if(y)if(X=h.get(re),X===void 0&&(X=[],h.set(re,X)),y.isWebGLMultipleRenderTargets){let ae=y.texture;if(X.length!==ae.length||X[0]!==r.COLOR_ATTACHMENT0){for(let he=0,pe=ae.length;he<pe;he++)X[he]=r.COLOR_ATTACHMENT0+he;X.length=ae.length,W=!0}}else X[0]!==r.COLOR_ATTACHMENT0&&(X[0]=r.COLOR_ATTACHMENT0,W=!0);else X[0]!==r.BACK&&(X[0]=r.BACK,W=!0);W&&(t.isWebGL2?r.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))},useProgram:function(y){return p!==y&&(r.useProgram(y),p=y,!0)},setBlending:U,setMaterial:function(y,re){y.side===2?T(r.CULL_FACE):K(r.CULL_FACE);let X=y.side===ht;re&&(X=!X),V(X),y.blending===1&&y.transparent===!1?U(0):U(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),n.setMask(y.colorWrite);let W=y.stencilWrite;a.setTest(W),W&&(a.setMask(y.stencilWriteMask),a.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),a.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),te(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):T(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:V,setCullFace:ne,setLineWidth:function(y){y!==H&&(k&&r.lineWidth(y),H=y)},setPolygonOffset:te,setScissorTest:function(y){y?K(r.SCISSOR_TEST):T(r.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=r.TEXTURE0+F-1),G!==y&&(r.activeTexture(y),G=y)},bindTexture:function(y,re,X){X===void 0&&(X=G===null?r.TEXTURE0+F-1:G);let W=$[X];W===void 0&&(W={type:void 0,texture:void 0},$[X]=W),W.type===y&&W.texture===re||(G!==X&&(r.activeTexture(X),G=X),r.bindTexture(y,re||O[y]),W.type=y,W.texture=re)},unbindTexture:function(){let y=$[G];y!==void 0&&y.type!==void 0&&(r.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},updateUBOMapping:function(y,re){let X=l.get(re);X===void 0&&(X=new WeakMap,l.set(re,X));let W=X.get(y);W===void 0&&(W=r.getUniformBlockIndex(re,y.name),X.set(y,W))},uniformBlockBinding:function(y,re){let X=l.get(re).get(y);o.get(re)!==X&&(r.uniformBlockBinding(re,X,y.__bindingPointIndex),o.set(re,X))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(y){console.error("THREE.WebGLState:",y)}},scissor:function(y){le.equals(y)===!1&&(r.scissor(y.x,y.y,y.z,y.w),le.copy(y))},viewport:function(y){w.equals(y)===!1&&(r.viewport(y.x,y.y,y.z,y.w),w.copy(y))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),A={},G=null,$={},c={},h=new WeakMap,u=[],p=null,d=!1,m=null,f=null,v=null,g=null,M=null,P=null,b=null,x=new de(0,0,0),_=0,I=!1,C=null,R=null,H=null,S=null,N=null,le.set(0,0,r.canvas.width,r.canvas.height),w.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}}}function Md(r,e,t,i,n,s,a){let o=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,h,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(w,D){return p?new OffscreenCanvas(w,D):Ls("canvas")}function m(w,D,O,K){let T=1;if((w.width>K||w.height>K)&&(T=K/Math.max(w.width,w.height)),T<1||D===!0){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let q=D?Co:Math.floor,z=q(T*w.width),U=q(T*w.height);h===void 0&&(h=d(z,U));let V=O?d(z,U):h;return V.width=z,V.height=U,V.getContext("2d").drawImage(w,0,0,z,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+z+"x"+U+")."),V}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w}return w}function f(w){return kl(w.width)&&kl(w.height)}function v(w,D){return w.generateMipmaps&&D&&w.minFilter!==At&&w.minFilter!==mt}function g(w){r.generateMipmap(w)}function M(w,D,O,K,T=!1){if(o===!1)return D;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=D;if(D===r.RED&&(O===r.FLOAT&&(q=r.R32F),O===r.HALF_FLOAT&&(q=r.R16F),O===r.UNSIGNED_BYTE&&(q=r.R8)),D===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.R8UI),O===r.UNSIGNED_SHORT&&(q=r.R16UI),O===r.UNSIGNED_INT&&(q=r.R32UI),O===r.BYTE&&(q=r.R8I),O===r.SHORT&&(q=r.R16I),O===r.INT&&(q=r.R32I)),D===r.RG&&(O===r.FLOAT&&(q=r.RG32F),O===r.HALF_FLOAT&&(q=r.RG16F),O===r.UNSIGNED_BYTE&&(q=r.RG8)),D===r.RGBA){let z=T?Ss:He.getTransfer(K);O===r.FLOAT&&(q=r.RGBA32F),O===r.HALF_FLOAT&&(q=r.RGBA16F),O===r.UNSIGNED_BYTE&&(q=z===Ve?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return q!==r.R16F&&q!==r.R32F&&q!==r.RG16F&&q!==r.RG32F&&q!==r.RGBA16F&&q!==r.RGBA32F||e.get("EXT_color_buffer_float"),q}function P(w,D,O){return v(w,O)===!0||w.isFramebufferTexture&&w.minFilter!==At&&w.minFilter!==mt?Math.log2(Math.max(D.width,D.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?D.mipmaps.length:1}function b(w){return w===At||w===ul||w===Oa?r.NEAREST:r.LINEAR}function x(w){let D=w.target;D.removeEventListener("dispose",x),function(O){let K=i.get(O);if(K.__webglInit===void 0)return;let T=O.source,q=u.get(T);if(q){let z=q[K.__cacheKey];z.usedTimes--,z.usedTimes===0&&I(O),Object.keys(q).length===0&&u.delete(T)}i.remove(O)}(D),D.isVideoTexture&&c.delete(D)}function _(w){let D=w.target;D.removeEventListener("dispose",_),function(O){let K=O.texture,T=i.get(O),q=i.get(K);if(q.__webglTexture!==void 0&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(T.__webglFramebuffer[z]))for(let U=0;U<T.__webglFramebuffer[z].length;U++)r.deleteFramebuffer(T.__webglFramebuffer[z][U]);else r.deleteFramebuffer(T.__webglFramebuffer[z]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[z])}else{if(Array.isArray(T.__webglFramebuffer))for(let z=0;z<T.__webglFramebuffer.length;z++)r.deleteFramebuffer(T.__webglFramebuffer[z]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let z=0;z<T.__webglColorRenderbuffer.length;z++)T.__webglColorRenderbuffer[z]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[z]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let z=0,U=K.length;z<U;z++){let V=i.get(K[z]);V.__webglTexture&&(r.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(K[z])}i.remove(K),i.remove(O)}(D)}function I(w){let D=i.get(w);r.deleteTexture(D.__webglTexture);let O=w.source;delete u.get(O)[D.__cacheKey],a.memory.textures--}let C=0;function R(w,D){let O=i.get(w);if(w.isVideoTexture&&function(K){let T=a.render.frame;c.get(K)!==T&&(c.set(K,T),K.update())}(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){let K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(K.complete!==!1)return void Ae(O,w,D);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+D)}let H={[Eo]:r.REPEAT,[di]:r.CLAMP_TO_EDGE,[bo]:r.MIRRORED_REPEAT},S={[At]:r.NEAREST,[ul]:r.NEAREST_MIPMAP_NEAREST,[Oa]:r.NEAREST_MIPMAP_LINEAR,[mt]:r.LINEAR,[Tu]:r.LINEAR_MIPMAP_NEAREST,[Es]:r.LINEAR_MIPMAP_LINEAR},N={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function F(w,D,O){if(O?(r.texParameteri(w,r.TEXTURE_WRAP_S,H[D.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,H[D.wrapT]),w!==r.TEXTURE_3D&&w!==r.TEXTURE_2D_ARRAY||r.texParameteri(w,r.TEXTURE_WRAP_R,H[D.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,S[D.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,S[D.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),w!==r.TEXTURE_3D&&w!==r.TEXTURE_2D_ARRAY||r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),D.wrapS===di&&D.wrapT===di||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,b(D.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,b(D.minFilter)),D.minFilter!==At&&D.minFilter!==mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),D.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,N[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let K=e.get("EXT_texture_filter_anisotropic");if(D.magFilter===At||D.minFilter!==Oa&&D.minFilter!==Es||D.type===Bi&&e.has("OES_texture_float_linear")===!1||o===!1&&D.type===Ii&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(r.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,n.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function k(w,D){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,D.addEventListener("dispose",x));let K=D.source,T=u.get(K);T===void 0&&(T={},u.set(K,T));let q=function(z){let U=[];return U.push(z.wrapS),U.push(z.wrapT),U.push(z.wrapR||0),U.push(z.magFilter),U.push(z.minFilter),U.push(z.anisotropy),U.push(z.internalFormat),U.push(z.format),U.push(z.type),U.push(z.generateMipmaps),U.push(z.premultiplyAlpha),U.push(z.flipY),U.push(z.unpackAlignment),U.push(z.colorSpace),U.join()}(D);if(q!==w.__cacheKey){T[q]===void 0&&(T[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),T[q].usedTimes++;let z=T[w.__cacheKey];z!==void 0&&(T[w.__cacheKey].usedTimes--,z.usedTimes===0&&I(D)),w.__cacheKey=q,w.__webglTexture=T[q].texture}return O}function Ae(w,D,O){let K=r.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),D.isData3DTexture&&(K=r.TEXTURE_3D);let T=k(w,D),q=D.source;t.bindTexture(K,w.__webglTexture,r.TEXTURE0+O);let z=i.get(q);if(q.version!==z.__version||T===!0){t.activeTexture(r.TEXTURE0+O);let U=He.getPrimaries(He.workingColorSpace),V=D.colorSpace===$t?null:He.getPrimaries(D.colorSpace),ne=D.colorSpace===$t||U===V?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let te=function(me){return!o&&(me.wrapS!==di||me.wrapT!==di||me.minFilter!==At&&me.minFilter!==mt)}(D)&&f(D.image)===!1,y=m(D.image,te,!1,n.maxTextureSize);y=le(D,y);let re=f(y)||o,X=s.convert(D.format,D.colorSpace),W,ae=s.convert(D.type),he=M(D.internalFormat,X,ae,D.colorSpace,D.isVideoTexture);F(K,D,re);let pe=D.mipmaps,fe=o&&D.isVideoTexture!==!0&&he!==Jc,_e=z.__version===void 0||T===!0,ge=P(D,y,re);if(D.isDepthTexture)he=r.DEPTH_COMPONENT,o?he=D.type===Bi?r.DEPTH_COMPONENT32F:D.type===ei?r.DEPTH_COMPONENT24:D.type===$i?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:D.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===en&&he===r.DEPTH_COMPONENT&&D.type!==bA&&D.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=ei,ae=s.convert(D.type)),D.format===kn&&he===r.DEPTH_COMPONENT&&(he=r.DEPTH_STENCIL,D.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=$i,ae=s.convert(D.type))),_e&&(fe?t.texStorage2D(r.TEXTURE_2D,1,he,y.width,y.height):t.texImage2D(r.TEXTURE_2D,0,he,y.width,y.height,0,X,ae,null));else if(D.isDataTexture)if(pe.length>0&&re){fe&&_e&&t.texStorage2D(r.TEXTURE_2D,ge,he,pe[0].width,pe[0].height);for(let me=0,be=pe.length;me<be;me++)W=pe[me],fe?t.texSubImage2D(r.TEXTURE_2D,me,0,0,W.width,W.height,X,ae,W.data):t.texImage2D(r.TEXTURE_2D,me,he,W.width,W.height,0,X,ae,W.data);D.generateMipmaps=!1}else fe?(_e&&t.texStorage2D(r.TEXTURE_2D,ge,he,y.width,y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,X,ae,y.data)):t.texImage2D(r.TEXTURE_2D,0,he,y.width,y.height,0,X,ae,y.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){fe&&_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,he,pe[0].width,pe[0].height,y.depth);for(let me=0,be=pe.length;me<be;me++)W=pe[me],D.format!==St?X!==null?fe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,W.width,W.height,y.depth,X,W.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,me,he,W.width,W.height,y.depth,0,W.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,W.width,W.height,y.depth,X,ae,W.data):t.texImage3D(r.TEXTURE_2D_ARRAY,me,he,W.width,W.height,y.depth,0,X,ae,W.data)}else{fe&&_e&&t.texStorage2D(r.TEXTURE_2D,ge,he,pe[0].width,pe[0].height);for(let me=0,be=pe.length;me<be;me++)W=pe[me],D.format!==St?X!==null?fe?t.compressedTexSubImage2D(r.TEXTURE_2D,me,0,0,W.width,W.height,X,W.data):t.compressedTexImage2D(r.TEXTURE_2D,me,he,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage2D(r.TEXTURE_2D,me,0,0,W.width,W.height,X,ae,W.data):t.texImage2D(r.TEXTURE_2D,me,he,W.width,W.height,0,X,ae,W.data)}else if(D.isDataArrayTexture)fe?(_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,he,y.width,y.height,y.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,y.width,y.height,y.depth,X,ae,y.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,he,y.width,y.height,y.depth,0,X,ae,y.data);else if(D.isData3DTexture)fe?(_e&&t.texStorage3D(r.TEXTURE_3D,ge,he,y.width,y.height,y.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,y.width,y.height,y.depth,X,ae,y.data)):t.texImage3D(r.TEXTURE_3D,0,he,y.width,y.height,y.depth,0,X,ae,y.data);else if(D.isFramebufferTexture){if(_e)if(fe)t.texStorage2D(r.TEXTURE_2D,ge,he,y.width,y.height);else{let me=y.width,be=y.height;for(let at=0;at<ge;at++)t.texImage2D(r.TEXTURE_2D,at,he,me,be,0,X,ae,null),me>>=1,be>>=1}}else if(pe.length>0&&re){fe&&_e&&t.texStorage2D(r.TEXTURE_2D,ge,he,pe[0].width,pe[0].height);for(let me=0,be=pe.length;me<be;me++)W=pe[me],fe?t.texSubImage2D(r.TEXTURE_2D,me,0,0,X,ae,W):t.texImage2D(r.TEXTURE_2D,me,he,X,ae,W);D.generateMipmaps=!1}else fe?(_e&&t.texStorage2D(r.TEXTURE_2D,ge,he,y.width,y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,X,ae,y)):t.texImage2D(r.TEXTURE_2D,0,he,X,ae,y);v(D,re)&&g(K),z.__version=q.version,D.onUpdate&&D.onUpdate(D)}w.__version=D.version}function Z(w,D,O,K,T,q){let z=s.convert(O.format,O.colorSpace),U=s.convert(O.type),V=M(O.internalFormat,z,U,O.colorSpace);if(!i.get(D).__hasExternalTextures){let ne=Math.max(1,D.width>>q),te=Math.max(1,D.height>>q);T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY?t.texImage3D(T,q,V,ne,te,D.depth,0,z,U,null):t.texImage2D(T,q,V,ne,te,0,z,U,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),j(D)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,T,i.get(O).__webglTexture,0,Q(D)):(T===r.TEXTURE_2D||T>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&T<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,T,i.get(O).__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function G(w,D,O){if(r.bindRenderbuffer(r.RENDERBUFFER,w),D.depthBuffer&&!D.stencilBuffer){let K=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||j(D)){let T=D.depthTexture;T&&T.isDepthTexture&&(T.type===Bi?K=r.DEPTH_COMPONENT32F:T.type===ei&&(K=r.DEPTH_COMPONENT24));let q=Q(D);j(D)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,q,K,D.width,D.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,q,K,D.width,D.height)}else r.renderbufferStorage(r.RENDERBUFFER,K,D.width,D.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(D.depthBuffer&&D.stencilBuffer){let K=Q(D);O&&j(D)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,K,r.DEPTH24_STENCIL8,D.width,D.height):j(D)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,K,r.DEPTH24_STENCIL8,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{let K=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let T=0;T<K.length;T++){let q=K[T],z=s.convert(q.format,q.colorSpace),U=s.convert(q.type),V=M(q.internalFormat,z,U,q.colorSpace),ne=Q(D);O&&j(D)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,V,D.width,D.height):j(D)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,V,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,V,D.width,D.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $(w){let D=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!D.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");(function(K,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,K),!T.depthTexture||!T.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(T.depthTexture).__webglTexture&&T.depthTexture.image.width===T.width&&T.depthTexture.image.height===T.height||(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),R(T.depthTexture,0);let q=i.get(T.depthTexture).__webglTexture,z=Q(T);if(T.depthTexture.format===en)j(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0,z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0);else{if(T.depthTexture.format!==kn)throw new Error("Unknown depthTexture format");j(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0,z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0)}})(D.__webglFramebuffer,w)}else if(O){D.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer[K]),D.__webglDepthbuffer[K]=r.createRenderbuffer(),G(D.__webglDepthbuffer[K],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=r.createRenderbuffer(),G(D.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(w){return Math.min(n.maxSamples,w.samples)}function j(w){let D=i.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function le(w,D){let O=w.colorSpace,K=w.format,T=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Bo||O!==gi&&O!==$t&&(He.getTransfer(O)===Ve?o===!1?e.has("EXT_sRGB")===!0&&K===St?(w.format=Bo,w.minFilter=mt,w.generateMipmaps=!1):D=Rs.sRGBToLinear(D):K===St&&T===fi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),D}this.allocateTextureUnit=function(){let w=C;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),C+=1,w},this.resetTextureUnits=function(){C=0},this.setTexture2D=R,this.setTexture2DArray=function(w,D){let O=i.get(w);w.version>0&&O.__version!==w.version?Ae(O,w,D):t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+D)},this.setTexture3D=function(w,D){let O=i.get(w);w.version>0&&O.__version!==w.version?Ae(O,w,D):t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+D)},this.setTextureCube=function(w,D){let O=i.get(w);w.version>0&&O.__version!==w.version?function(K,T,q){if(T.image.length!==6)return;let z=k(K,T),U=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+q);let V=i.get(U);if(U.version!==V.__version||z===!0){t.activeTexture(r.TEXTURE0+q);let ne=He.getPrimaries(He.workingColorSpace),te=T.colorSpace===$t?null:He.getPrimaries(T.colorSpace),y=T.colorSpace===$t||ne===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,y);let re=T.isCompressedTexture||T.image[0].isCompressedTexture,X=T.image[0]&&T.image[0].isDataTexture,W=[];for(let Pe=0;Pe<6;Pe++)W[Pe]=re||X?X?T.image[Pe].image:T.image[Pe]:m(T.image[Pe],!1,!0,n.maxCubemapSize),W[Pe]=le(T,W[Pe]);let ae=W[0],he=f(ae)||o,pe=s.convert(T.format,T.colorSpace),fe=s.convert(T.type),_e=M(T.internalFormat,pe,fe,T.colorSpace),ge=o&&T.isVideoTexture!==!0,me=V.__version===void 0||z===!0,be,at=P(T,ae,he);if(F(r.TEXTURE_CUBE_MAP,T,he),re){ge&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,at,_e,ae.width,ae.height);for(let Pe=0;Pe<6;Pe++){be=W[Pe].mipmaps;for(let ze=0;ze<be.length;ze++){let Te=be[ze];T.format!==St?pe!==null?ge?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ze,0,0,Te.width,Te.height,pe,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ze,_e,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ze,0,0,Te.width,Te.height,pe,fe,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ze,_e,Te.width,Te.height,0,pe,fe,Te.data)}}}else{be=T.mipmaps,ge&&me&&(be.length>0&&at++,t.texStorage2D(r.TEXTURE_CUBE_MAP,at,_e,W[0].width,W[0].height));for(let Pe=0;Pe<6;Pe++)if(X){ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,W[Pe].width,W[Pe].height,pe,fe,W[Pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,_e,W[Pe].width,W[Pe].height,0,pe,fe,W[Pe].data);for(let ze=0;ze<be.length;ze++){let Te=be[ze].image[Pe].image;ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ze+1,0,0,Te.width,Te.height,pe,fe,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ze+1,_e,Te.width,Te.height,0,pe,fe,Te.data)}}else{ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,pe,fe,W[Pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,_e,pe,fe,W[Pe]);for(let ze=0;ze<be.length;ze++){let Te=be[ze];ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ze+1,0,0,pe,fe,Te.image[Pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ze+1,_e,pe,fe,Te.image[Pe])}}}v(T,he)&&g(r.TEXTURE_CUBE_MAP),V.__version=U.version,T.onUpdate&&T.onUpdate(T)}K.__version=T.version}(O,w,D):t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+D)},this.rebindTextures=function(w,D,O){let K=i.get(w);D!==void 0&&Z(K.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&$(w)},this.setupRenderTarget=function(w){let D=w.texture,O=i.get(w),K=i.get(D);w.addEventListener("dispose",_),w.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=D.version,a.memory.textures++);let T=w.isWebGLCubeRenderTarget===!0,q=w.isWebGLMultipleRenderTargets===!0,z=f(w)||o;if(T){O.__webglFramebuffer=[];for(let U=0;U<6;U++)if(o&&D.mipmaps&&D.mipmaps.length>0){O.__webglFramebuffer[U]=[];for(let V=0;V<D.mipmaps.length;V++)O.__webglFramebuffer[U][V]=r.createFramebuffer()}else O.__webglFramebuffer[U]=r.createFramebuffer()}else{if(o&&D.mipmaps&&D.mipmaps.length>0){O.__webglFramebuffer=[];for(let U=0;U<D.mipmaps.length;U++)O.__webglFramebuffer[U]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(q)if(n.drawBuffers){let U=w.texture;for(let V=0,ne=U.length;V<ne;V++){let te=i.get(U[V]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&j(w)===!1){let U=q?D:[D];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let V=0;V<U.length;V++){let ne=U[V];O.__webglColorRenderbuffer[V]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[V]);let te=s.convert(ne.format,ne.colorSpace),y=s.convert(ne.type),re=M(ne.internalFormat,te,y,ne.colorSpace,w.isXRRenderTarget===!0),X=Q(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,X,re,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,O.__webglColorRenderbuffer[V])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),G(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(T){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),F(r.TEXTURE_CUBE_MAP,D,z);for(let U=0;U<6;U++)if(o&&D.mipmaps&&D.mipmaps.length>0)for(let V=0;V<D.mipmaps.length;V++)Z(O.__webglFramebuffer[U][V],w,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+U,V);else Z(O.__webglFramebuffer[U],w,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);v(D,z)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(q){let U=w.texture;for(let V=0,ne=U.length;V<ne;V++){let te=U[V],y=i.get(te);t.bindTexture(r.TEXTURE_2D,y.__webglTexture),F(r.TEXTURE_2D,te,z),Z(O.__webglFramebuffer,w,te,r.COLOR_ATTACHMENT0+V,r.TEXTURE_2D,0),v(te,z)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let U=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?U=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(U,K.__webglTexture),F(U,D,z),o&&D.mipmaps&&D.mipmaps.length>0)for(let V=0;V<D.mipmaps.length;V++)Z(O.__webglFramebuffer[V],w,D,r.COLOR_ATTACHMENT0,U,V);else Z(O.__webglFramebuffer,w,D,r.COLOR_ATTACHMENT0,U,0);v(D,z)&&g(U),t.unbindTexture()}w.depthBuffer&&$(w)},this.updateRenderTargetMipmap=function(w){let D=f(w)||o,O=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0,T=O.length;K<T;K++){let q=O[K];if(v(q,D)){let z=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,U=i.get(q).__webglTexture;t.bindTexture(z,U),g(z),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(o&&w.samples>0&&j(w)===!1){let D=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],O=w.width,K=w.height,T=r.COLOR_BUFFER_BIT,q=[],z=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,U=i.get(w),V=w.isWebGLMultipleRenderTargets===!0;if(V)for(let ne=0;ne<D.length;ne++)t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,U.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let ne=0;ne<D.length;ne++){q.push(r.COLOR_ATTACHMENT0+ne),w.depthBuffer&&q.push(z);let te=U.__ignoreDepthValues!==void 0&&U.__ignoreDepthValues;if(te===!1&&(w.depthBuffer&&(T|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(T|=r.STENCIL_BUFFER_BIT)),V&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,U.__webglColorRenderbuffer[ne]),te===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[z]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[z])),V){let y=i.get(D[ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,y,0)}r.blitFramebuffer(0,0,O,K,0,0,O,K,T,r.NEAREST),A&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,q)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),V)for(let ne=0;ne<D.length;ne++){t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,U.__webglColorRenderbuffer[ne]);let te=i.get(D[ne]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,U.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=j}function Pd(r,e,t){let i=t.isWebGL2;return{convert:function(n,s=""){let a,o=He.getTransfer(s);if(n===fi)return r.UNSIGNED_BYTE;if(n===Vc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===bA)return r.UNSIGNED_SHORT;if(n===kc)return r.INT;if(n===ei)return r.UNSIGNED_INT;if(n===Bi)return r.FLOAT;if(n===Ii)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return r.ALPHA;if(n===St)return r.RGBA;if(n===1024)return r.LUMINANCE;if(n===1025)return r.LUMINANCE_ALPHA;if(n===en)return r.DEPTH_COMPONENT;if(n===kn)return r.DEPTH_STENCIL;if(n===Bo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1028)return r.RED;if(n===Yc)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===jc)return r.RG_INTEGER;if(n===qc)return r.RGBA_INTEGER;if(n===Fa||n===Qa||n===Ha||n===Ga)if(o===Ve){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===Fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===Fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===pl||n===dl||n===fl||n===gl){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===pl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===Jc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ml||n===vl){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===ml)return o===Ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===vl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===Ml||n===Pl||n===xl||n===yl||n===wl||n===Dl||n===_l||n===El||n===bl||n===Bl||n===Sl||n===Cl||n===Tl||n===Il){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===Ml)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===ka||n===Ll||n===Rl){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(n===ka)return o===Ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===zl||n===Ul||n===Nl){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(n===ka)return a.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ul)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===$i?i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}}}var ko=class extends ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},tt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xd={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,A=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(A&&e.hand){a=!0;for(let m of e.hand.values()){let f=t.getJointPose(m,i),v=this._getHandJoint(A,m);f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=f.radius),v.visible=f!==null}let c=A.joints["index-finger-tip"],h=A.joints["thumb-tip"],u=c.position.distanceTo(h.position),p=.02,d=.005;A.inputState.pinching&&u>p+d?(A.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!A.inputState.pinching&&u<=p-d&&(A.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),A!==null&&(A.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Vo=class extends Li{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,A=null,c=null,h=null,u=null,p=null,d=null,m=t.getContextAttributes(),f=null,v=null,g=[],M=[],P=new se,b=null,x=new ct;x.layers.enable(1),x.viewport=new Ge;let _=new ct;_.layers.enable(2),_.viewport=new Ge;let I=[x,_],C=new ko;C.layers.enable(1),C.layers.enable(2);let R=null,H=null;function S(Q){let j=M.indexOf(Q.inputSource);if(j===-1)return;let le=g[j];le!==void 0&&(le.update(Q.inputSource,Q.frame,A||a),le.dispatchEvent({type:Q.type,data:Q.inputSource}))}function N(){n.removeEventListener("select",S),n.removeEventListener("selectstart",S),n.removeEventListener("selectend",S),n.removeEventListener("squeeze",S),n.removeEventListener("squeezestart",S),n.removeEventListener("squeezeend",S),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",F);for(let Q=0;Q<g.length;Q++){let j=M[Q];j!==null&&(M[Q]=null,g[Q].disconnect(j))}R=null,H=null,e.setRenderTarget(f),p=null,u=null,h=null,n=null,v=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}function F(Q){for(let j=0;j<Q.removed.length;j++){let le=Q.removed[j],w=M.indexOf(le);w>=0&&(M[w]=null,g[w].disconnect(le))}for(let j=0;j<Q.added.length;j++){let le=Q.added[j],w=M.indexOf(le);if(w===-1){for(let O=0;O<g.length;O++){if(O>=M.length){M.push(le),w=O;break}if(M[O]===null){M[O]=le,w=O;break}}if(w===-1)break}let D=g[w];D&&D.connect(le)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let j=g[Q];return j===void 0&&(j=new vr,g[Q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Q){let j=g[Q];return j===void 0&&(j=new vr,g[Q]=j),j.getGripSpace()},this.getHand=function(Q){let j=g[Q];return j===void 0&&(j=new vr,g[Q]=j),j.getHandSpace()},this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return A||a},this.setReferenceSpace=function(Q){A=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return d},this.getSession=function(){return n},this.setSession=async function(Q){if(n=Q,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",S),n.addEventListener("selectstart",S),n.addEventListener("selectend",S),n.addEventListener("squeeze",S),n.addEventListener("squeezestart",S),n.addEventListener("squeezeend",S),n.addEventListener("end",N),n.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:n.renderState.layers!==void 0||m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,j),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ut(p.framebufferWidth,p.framebufferHeight,{format:St,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,le=null,w=null;m.depth&&(w=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=m.stencil?kn:en,le=m.stencil?$i:ei);let D={colorFormat:t.RGBA8,depthFormat:w,scaleFactor:s};h=new XRWebGLBinding(n,t),u=h.createProjectionLayer(D),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new ut(u.textureWidth,u.textureHeight,{format:St,type:fi,depthTexture:new Jn(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0}),e.properties.get(v).__ignoreDepthValues=u.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),A=null,a=await n.requestReferenceSpace(o),$.setContext(n),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let k=new E,Ae=new E;function Z(Q,j){j===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(j.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(n===null)return;C.near=_.near=x.near=Q.near,C.far=_.far=x.far=Q.far,R===C.near&&H===C.far||(n.updateRenderState({depthNear:C.near,depthFar:C.far}),R=C.near,H=C.far);let j=Q.parent,le=C.cameras;Z(C,j);for(let w=0;w<le.length;w++)Z(le[w],j);le.length===2?function(w,D,O){k.setFromMatrixPosition(D.matrixWorld),Ae.setFromMatrixPosition(O.matrixWorld);let K=k.distanceTo(Ae),T=D.projectionMatrix.elements,q=O.projectionMatrix.elements,z=T[14]/(T[10]-1),U=T[14]/(T[10]+1),V=(T[9]+1)/T[5],ne=(T[9]-1)/T[5],te=(T[8]-1)/T[0],y=(q[8]+1)/q[0],re=z*te,X=z*y,W=K/(-te+y),ae=W*-te;D.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(ae),w.translateZ(W),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();let he=z+W,pe=U+W,fe=re-ae,_e=X+(K-ae),ge=V*U/pe*he,me=ne*U/pe*he;w.projectionMatrix.makePerspective(fe,_e,ge,me,he,pe),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}(C,x,_):C.projectionMatrix.copy(x.projectionMatrix),function(w,D,O){O===null?w.matrix.copy(D.matrixWorld):(w.matrix.copy(O.matrixWorld),w.matrix.invert(),w.matrix.multiply(D.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(D.projectionMatrix),w.projectionMatrixInverse.copy(D.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*So*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}(Q,C,j)},this.getCamera=function(){return C},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)};let G=null,$=new th;$.setAnimationLoop(function(Q,j){if(c=j.getViewerPose(A||a),d=j,c!==null){let le=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let w=!1;le.length!==C.cameras.length&&(C.cameras.length=0,w=!0);for(let D=0;D<le.length;D++){let O=le[D],K=null;if(p!==null)K=p.getViewport(O);else{let q=h.getViewSubImage(u,O);K=q.viewport,D===0&&(e.setRenderTargetTextures(v,q.colorTexture,u.ignoreDepthValues?void 0:q.depthStencilTexture),e.setRenderTarget(v))}let T=I[D];T===void 0&&(T=new ct,T.layers.enable(D),T.viewport=new Ge,I[D]=T),T.matrix.fromArray(O.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(O.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(K.x,K.y,K.width,K.height),D===0&&(C.matrix.copy(T.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),w===!0&&C.cameras.push(T)}}for(let le=0;le<g.length;le++){let w=M[le],D=g[le];w!==null&&D!==void 0&&D.update(w,j,A||a)}G&&G(Q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),d=null}),this.setAnimationLoop=function(Q){G=Q},this.dispose=function(){}}};function yd(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===ht&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===ht&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(n.envMap.value=a,n.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap){n.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,n.lightMapTransform)}s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,eh(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),function(A,c){c.gradientMap&&(A.gradientMap.value=c.gradientMap)}(n,s)):s.isMeshPhongMaterial?(i(n,s),function(A,c){A.specular.value.copy(c.specular),A.shininess.value=Math.max(c.shininess,1e-4)}(n,s)):s.isMeshStandardMaterial?(i(n,s),function(A,c){A.metalness.value=c.metalness,c.metalnessMap&&(A.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,A.metalnessMapTransform)),A.roughness.value=c.roughness,c.roughnessMap&&(A.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,A.roughnessMapTransform)),e.get(c).envMap&&(A.envMapIntensity.value=c.envMapIntensity)}(n,s),s.isMeshPhysicalMaterial&&function(A,c,h){A.ior.value=c.ior,c.sheen>0&&(A.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),A.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(A.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,A.sheenColorMapTransform)),c.sheenRoughnessMap&&(A.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,A.sheenRoughnessMapTransform))),c.clearcoat>0&&(A.clearcoat.value=c.clearcoat,A.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(A.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,A.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(A.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===ht&&A.clearcoatNormalScale.value.negate())),c.iridescence>0&&(A.iridescence.value=c.iridescence,A.iridescenceIOR.value=c.iridescenceIOR,A.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(A.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,A.iridescenceMapTransform)),c.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),c.transmission>0&&(A.transmission.value=c.transmission,A.transmissionSamplerMap.value=h.texture,A.transmissionSamplerSize.value.set(h.width,h.height),c.transmissionMap&&(A.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,A.transmissionMapTransform)),A.thickness.value=c.thickness,c.thicknessMap&&(A.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=c.attenuationDistance,A.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(A.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(A.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=c.specularIntensity,A.specularColor.value.copy(c.specularColor),c.specularColorMap&&(A.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,A.specularColorMapTransform)),c.specularIntensityMap&&(A.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,A.specularIntensityMapTransform))}(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),function(A,c){c.matcap&&(A.matcap.value=c.matcap)}(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),function(A,c){let h=e.get(c).light;A.referencePosition.value.setFromMatrixPosition(h.matrixWorld),A.nearDistance.value=h.shadow.camera.near,A.farDistance.value=h.shadow.camera.far}(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?(function(A,c){A.diffuse.value.copy(c.color),A.opacity.value=c.opacity,c.map&&(A.map.value=c.map,t(c.map,A.mapTransform))}(n,s),s.isLineDashedMaterial&&function(A,c){A.dashSize.value=c.dashSize,A.totalSize.value=c.dashSize+c.gapSize,A.scale.value=c.scale}(n,s)):s.isPointsMaterial?function(A,c,h,u){A.diffuse.value.copy(c.color),A.opacity.value=c.opacity,A.size.value=c.size*h,A.scale.value=.5*u,c.map&&(A.map.value=c.map,t(c.map,A.uvTransform)),c.alphaMap&&(A.alphaMap.value=c.alphaMap,t(c.alphaMap,A.alphaMapTransform)),c.alphaTest>0&&(A.alphaTest.value=c.alphaTest)}(n,s,a,o):s.isSpriteMaterial?function(A,c){A.diffuse.value.copy(c.color),A.opacity.value=c.opacity,A.rotation.value=c.rotation,c.map&&(A.map.value=c.map,t(c.map,A.mapTransform)),c.alphaMap&&(A.alphaMap.value=c.alphaMap,t(c.alphaMap,A.alphaMapTransform)),c.alphaTest>0&&(A.alphaTest.value=c.alphaTest)}(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function wd(r,e,t,i){let n={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(h,u,p,d){let m=h.value,f=u+"_"+p;if(d[f]===void 0)return d[f]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let v=d[f];if(typeof m=="number"||typeof m=="boolean"){if(v!==m)return d[f]=m,!0}else if(v.equals(m)===!1)return v.copy(m),!0}return!1}function A(h){let u={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(u.boundary=4,u.storage=4):h.isVector2?(u.boundary=8,u.storage=8):h.isVector3||h.isColor?(u.boundary=16,u.storage=12):h.isVector4?(u.boundary=16,u.storage=16):h.isMatrix3?(u.boundary=48,u.storage=48):h.isMatrix4?(u.boundary=64,u.storage=64):h.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",h),u}function c(h){let u=h.target;u.removeEventListener("dispose",c);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[u.id]),delete n[u.id],delete s[u.id]}return{bind:function(h,u){let p=u.program;i.uniformBlockBinding(h,p)},update:function(h,u){let p=n[h.id];p===void 0&&(function(f){let v=f.uniforms,g=0,M=16;for(let b=0,x=v.length;b<x;b++){let _=Array.isArray(v[b])?v[b]:[v[b]];for(let I=0,C=_.length;I<C;I++){let R=_[I],H=Array.isArray(R.value)?R.value:[R.value];for(let S=0,N=H.length;S<N;S++){let F=A(H[S]),k=g%M;k!==0&&M-k<F.boundary&&(g+=M-k),R.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=g,g+=F.storage}}}let P=g%M;P>0&&(g+=M-P),f.__size=g,f.__cache={}}(h),p=function(f){let v=function(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();f.__bindingPointIndex=v;let g=r.createBuffer(),M=f.__size,P=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,M,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,g),g}(h),n[h.id]=p,h.addEventListener("dispose",c));let d=u.program;i.updateUBOMapping(h,d);let m=e.render.frame;s[h.id]!==m&&(function(f){let v=n[f.id],g=f.uniforms,M=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let P=0,b=g.length;P<b;P++){let x=Array.isArray(g[P])?g[P]:[g[P]];for(let _=0,I=x.length;_<I;_++){let C=x[_];if(l(C,P,_,M)===!0){let R=C.__offset,H=Array.isArray(C.value)?C.value:[C.value],S=0;for(let N=0;N<H.length;N++){let F=H[N],k=A(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,R+S,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,S),S+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(h),s[h.id]=m)},dispose:function(){for(let h in n)r.deleteBuffer(n[h]);a=[],n={},s={}}}}var wr=class{constructor(e={}){let{canvas:t=Lu(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:A=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e,u;this.isWebGLRenderer=!0,u=i!==null?i.getContextAttributes().alpha:a;let p=new Uint32Array(4),d=new Int32Array(4),m=null,f=null,v=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=Si,this.toneMappingExposure=1;let M=this,P=!1,b=0,x=0,_=null,I=-1,C=null,R=new Ge,H=new Ge,S=null,N=new de(0),F=0,k=t.width,Ae=t.height,Z=1,G=null,$=null,Q=new Ge(0,0,k,Ae),j=new Ge(0,0,k,Ae),le=!1,w=new Yn,D=!1,O=!1,K=null,T=new ye,q=new se,z=new E,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function V(){return _===null?Z:1}let ne,te,y,re,X,W,ae,he,pe,fe,_e,ge,me,be,at,Pe,ze,Te,Hr,Mn,Gr,Lt,Et,Pn,J=i;function kr(B,Y){for(let ee=0;ee<B.length;ee++){let oe=B[ee],ie=t.getContext(oe,Y);if(ie!==null)return ie}return null}try{let B={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:A,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xo}`),t.addEventListener("webglcontextlost",JA,!1),t.addEventListener("webglcontextrestored",KA,!1),t.addEventListener("webglcontextcreationerror",ZA,!1),J===null){let Y=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&Y.shift(),J=kr(Y,B),J===null)throw kr(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}function ar(){ne=new rp(J),te=new ep(J,ne,e),ne.init(te),Lt=new Pd(J,ne,te),y=new vd(J,ne,te),re=new op(J),X=new ld,W=new Md(J,ne,y,X,te,Lt,re),ae=new ip(M),he=new np(M),pe=new Ju(J,te),Et=new Zu(J,ne,pe,te),fe=new sp(J,pe,re,Et),_e=new hp(J,fe,pe,re),Hr=new cp(J,te,W),Pe=new tp(X),ge=new Ad(M,ae,he,ne,te,Et,Pe),me=new yd(M,X),be=new hd,at=new gd(ne,te),Te=new Ku(M,ae,he,y,_e,u,l),ze=new md(M,_e,te),Pn=new wd(J,re,te,y),Mn=new $u(J,ne,re,te),Gr=new ap(J,ne,re,te),re.programs=ge.programs,M.capabilities=te,M.extensions=ne,M.properties=X,M.renderLists=be,M.shadowMap=ze,M.state=y,M.info=re}ar();let pt=new Vo(M,J);function JA(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function KA(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let B=re.autoReset,Y=ze.enabled,ee=ze.autoUpdate,oe=ze.needsUpdate,ie=ze.type;ar(),re.autoReset=B,ze.enabled=Y,ze.autoUpdate=ee,ze.needsUpdate=oe,ze.type=ie}function ZA(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function $A(B){let Y=B.target;Y.removeEventListener("dispose",$A),function(ee){(function(oe){let ie=X.get(oe).programs;ie!==void 0&&(ie.forEach(function(ue){ge.releaseProgram(ue)}),oe.isShaderMaterial&&ge.releaseShaderCache(oe))})(ee),X.remove(ee)}(Y)}function el(B,Y,ee){B.transparent===!0&&B.side===2&&B.forceSinglePass===!1?(B.side=ht,B.needsUpdate=!0,Xr(B,Y,ee),B.side=Ti,B.needsUpdate=!0,Xr(B,Y,ee),B.side=2):Xr(B,Y,ee)}this.xr=pt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let B=ne.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=ne.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(B){B!==void 0&&(Z=B,this.setSize(k,Ae,!1))},this.getSize=function(B){return B.set(k,Ae)},this.setSize=function(B,Y,ee=!0){pt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(k=B,Ae=Y,t.width=Math.floor(B*Z),t.height=Math.floor(Y*Z),ee===!0&&(t.style.width=B+"px",t.style.height=Y+"px"),this.setViewport(0,0,B,Y))},this.getDrawingBufferSize=function(B){return B.set(k*Z,Ae*Z).floor()},this.setDrawingBufferSize=function(B,Y,ee){k=B,Ae=Y,Z=ee,t.width=Math.floor(B*ee),t.height=Math.floor(Y*ee),this.setViewport(0,0,B,Y)},this.getCurrentViewport=function(B){return B.copy(R)},this.getViewport=function(B){return B.copy(Q)},this.setViewport=function(B,Y,ee,oe){B.isVector4?Q.set(B.x,B.y,B.z,B.w):Q.set(B,Y,ee,oe),y.viewport(R.copy(Q).multiplyScalar(Z).floor())},this.getScissor=function(B){return B.copy(j)},this.setScissor=function(B,Y,ee,oe){B.isVector4?j.set(B.x,B.y,B.z,B.w):j.set(B,Y,ee,oe),y.scissor(H.copy(j).multiplyScalar(Z).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(B){y.setScissorTest(le=B)},this.setOpaqueSort=function(B){G=B},this.setTransparentSort=function(B){$=B},this.getClearColor=function(B){return B.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(B=!0,Y=!0,ee=!0){let oe=0;if(B){let ie=!1;if(_!==null){let ue=_.texture.format;ie=ue===qc||ue===jc||ue===Yc}if(ie){let ue=_.texture.type,we=ue===fi||ue===ei||ue===bA||ue===$i||ue===Vc||ue===Xc,De=Te.getClearColor(),Be=Te.getClearAlpha(),Ce=De.r,Ie=De.g,Le=De.b;we?(p[0]=Ce,p[1]=Ie,p[2]=Le,p[3]=Be,J.clearBufferuiv(J.COLOR,0,p)):(d[0]=Ce,d[1]=Ie,d[2]=Le,d[3]=Be,J.clearBufferiv(J.COLOR,0,d))}else oe|=J.COLOR_BUFFER_BIT}Y&&(oe|=J.DEPTH_BUFFER_BIT),ee&&(oe|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",JA,!1),t.removeEventListener("webglcontextrestored",KA,!1),t.removeEventListener("webglcontextcreationerror",ZA,!1),be.dispose(),at.dispose(),X.dispose(),ae.dispose(),he.dispose(),_e.dispose(),Et.dispose(),Pn.dispose(),ge.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",tl),pt.removeEventListener("sessionend",il),K&&(K.dispose(),K=null),Qi.stop()},this.renderBufferDirect=function(B,Y,ee,oe,ie,ue){Y===null&&(Y=U);let we=ie.isMesh&&ie.matrixWorld.determinant()<0,De=function(it,Rt,wt,Re,Ue){Rt.isScene!==!0&&(Rt=U),W.resetTextureUnits();let or=Rt.fog,Ra=Re.isMeshStandardMaterial?Rt.environment:null,du=_===null?M.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:gi,Wr=(Re.isMeshStandardMaterial?he:ae).get(Re.envMap||Ra),fu=Re.vertexColors===!0&&!!wt.attributes.color&&wt.attributes.color.itemSize===4,gu=!!wt.attributes.tangent&&(!!Re.normalMap||Re.anisotropy>0),mu=!!wt.morphAttributes.position,vu=!!wt.morphAttributes.normal,Mu=!!wt.morphAttributes.color,Al=Si;Re.toneMapped&&(_!==null&&_.isXRRenderTarget!==!0||(Al=M.toneMapping));let ll=wt.morphAttributes.position||wt.morphAttributes.normal||wt.morphAttributes.color,Pu=ll!==void 0?ll.length:0,Fe=X.get(Re),xu=f.state.lights;if(D===!0&&(O===!0||it!==C)){let zt=it===C&&Re.id===I;Pe.setState(Re,it,zt)}let Qt=!1;Re.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==xu.state.version||Fe.outputColorSpace!==du||Ue.isBatchedMesh&&Fe.batching===!1?Qt=!0:Ue.isBatchedMesh||Fe.batching!==!0?Ue.isInstancedMesh&&Fe.instancing===!1?Qt=!0:Ue.isInstancedMesh||Fe.instancing!==!0?Ue.isSkinnedMesh&&Fe.skinning===!1?Qt=!0:Ue.isSkinnedMesh||Fe.skinning!==!0?Ue.isInstancedMesh&&Fe.instancingColor===!0&&Ue.instanceColor===null||Ue.isInstancedMesh&&Fe.instancingColor===!1&&Ue.instanceColor!==null||Fe.envMap!==Wr||Re.fog===!0&&Fe.fog!==or?Qt=!0:Fe.numClippingPlanes===void 0||Fe.numClippingPlanes===Pe.numPlanes&&Fe.numIntersection===Pe.numIntersection?(Fe.vertexAlphas!==fu||Fe.vertexTangents!==gu||Fe.morphTargets!==mu||Fe.morphNormals!==vu||Fe.morphColors!==Mu||Fe.toneMapping!==Al||te.isWebGL2===!0&&Fe.morphTargetsCount!==Pu)&&(Qt=!0):Qt=!0:Qt=!0:Qt=!0:Qt=!0:(Qt=!0,Fe.__version=Re.version);let Gi=Fe.currentProgram;Qt===!0&&(Gi=Xr(Re,Rt,Ue));let cl=!1,Ar=!1,za=!1,dt=Gi.getUniforms(),ki=Fe.uniforms;if(y.useProgram(Gi.program)&&(cl=!0,Ar=!0,za=!0),Re.id!==I&&(I=Re.id,Ar=!0),cl||C!==it){dt.setValue(J,"projectionMatrix",it.projectionMatrix),dt.setValue(J,"viewMatrix",it.matrixWorldInverse);let zt=dt.map.cameraPosition;zt!==void 0&&zt.setValue(J,z.setFromMatrixPosition(it.matrixWorld)),te.logarithmicDepthBuffer&&dt.setValue(J,"logDepthBufFC",2/(Math.log(it.far+1)/Math.LN2)),(Re.isMeshPhongMaterial||Re.isMeshToonMaterial||Re.isMeshLambertMaterial||Re.isMeshBasicMaterial||Re.isMeshStandardMaterial||Re.isShaderMaterial)&&dt.setValue(J,"isOrthographic",it.isOrthographicCamera===!0),C!==it&&(C=it,Ar=!0,za=!0)}if(Ue.isSkinnedMesh){dt.setOptional(J,Ue,"bindMatrix"),dt.setOptional(J,Ue,"bindMatrixInverse");let zt=Ue.skeleton;zt&&(te.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),dt.setValue(J,"boneTexture",zt.boneTexture,W)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ue.isBatchedMesh&&(dt.setOptional(J,Ue,"batchingTexture"),dt.setValue(J,"batchingTexture",Ue._matricesTexture,W));let Ua=wt.morphAttributes;(Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0&&te.isWebGL2===!0)&&Hr.update(Ue,wt,Gi),(Ar||Fe.receiveShadow!==Ue.receiveShadow)&&(Fe.receiveShadow=Ue.receiveShadow,dt.setValue(J,"receiveShadow",Ue.receiveShadow)),Re.isMeshGouraudMaterial&&Re.envMap!==null&&(ki.envMap.value=Wr,ki.flipEnvMap.value=Wr.isCubeTexture&&Wr.isRenderTargetTexture===!1?-1:1),Ar&&(dt.setValue(J,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&(Ht=za,(Kt=ki).ambientLightColor.needsUpdate=Ht,Kt.lightProbe.needsUpdate=Ht,Kt.directionalLights.needsUpdate=Ht,Kt.directionalLightShadows.needsUpdate=Ht,Kt.pointLights.needsUpdate=Ht,Kt.pointLightShadows.needsUpdate=Ht,Kt.spotLights.needsUpdate=Ht,Kt.spotLightShadows.needsUpdate=Ht,Kt.rectAreaLights.needsUpdate=Ht,Kt.hemisphereLights.needsUpdate=Ht),or&&Re.fog===!0&&me.refreshFogUniforms(ki,or),me.refreshMaterialUniforms(ki,Re,Z,Ae,K),Qn.upload(J,al(Fe),ki,W));var Kt,Ht;if(Re.isShaderMaterial&&Re.uniformsNeedUpdate===!0&&(Qn.upload(J,al(Fe),ki,W),Re.uniformsNeedUpdate=!1),Re.isSpriteMaterial&&dt.setValue(J,"center",Ue.center),dt.setValue(J,"modelViewMatrix",Ue.modelViewMatrix),dt.setValue(J,"normalMatrix",Ue.normalMatrix),dt.setValue(J,"modelMatrix",Ue.matrixWorld),Re.isShaderMaterial||Re.isRawShaderMaterial){let zt=Re.uniformsGroups;for(let Na=0,yu=zt.length;Na<yu;Na++)if(te.isWebGL2){let hl=zt[Na];Pn.update(hl,Gi),Pn.bind(hl,Gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gi}(B,Y,ee,oe,ie);y.setMaterial(oe,we);let Be=ee.index,Ce=1;if(oe.wireframe===!0){if(Be=fe.getWireframeAttribute(ee),Be===void 0)return;Ce=2}let Ie=ee.drawRange,Le=ee.attributes.position,je=Ie.start*Ce,Ft=(Ie.start+Ie.count)*Ce;ue!==null&&(je=Math.max(je,ue.start*Ce),Ft=Math.min(Ft,(ue.start+ue.count)*Ce)),Be!==null?(je=Math.max(je,0),Ft=Math.min(Ft,Be.count)):Le!=null&&(je=Math.max(je,0),Ft=Math.min(Ft,Le.count));let oi=Ft-je;if(oi<0||oi===1/0)return;let Hi;Et.setup(ie,oe,De,ee,Be);let qe=Mn;if(Be!==null&&(Hi=pe.get(Be),qe=Gr,qe.setIndex(Hi)),ie.isMesh)oe.wireframe===!0?(y.setLineWidth(oe.wireframeLinewidth*V()),qe.setMode(J.LINES)):qe.setMode(J.TRIANGLES);else if(ie.isLine){let it=oe.linewidth;it===void 0&&(it=1),y.setLineWidth(it*V()),ie.isLineSegments?qe.setMode(J.LINES):ie.isLineLoop?qe.setMode(J.LINE_LOOP):qe.setMode(J.LINE_STRIP)}else ie.isPoints?qe.setMode(J.POINTS):ie.isSprite&&qe.setMode(J.TRIANGLES);if(ie.isBatchedMesh)qe.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)qe.renderInstances(je,oi,ie.count);else if(ee.isInstancedBufferGeometry){let it=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Rt=Math.min(ee.instanceCount,it);qe.renderInstances(je,oi,Rt)}else qe.render(je,oi)},this.compile=function(B,Y,ee=null){ee===null&&(ee=B),f=at.get(ee),f.init(),g.push(f),ee.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(f.pushLight(ie),ie.castShadow&&f.pushShadow(ie))}),B!==ee&&B.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(f.pushLight(ie),ie.castShadow&&f.pushShadow(ie))}),f.setupLights(M._useLegacyLights);let oe=new Set;return B.traverse(function(ie){let ue=ie.material;if(ue)if(Array.isArray(ue))for(let we=0;we<ue.length;we++){let De=ue[we];el(De,ee,ie),oe.add(De)}else el(ue,ee,ie),oe.add(ue)}),g.pop(),f=null,oe},this.compileAsync=function(B,Y,ee=null){let oe=this.compile(B,Y,ee);return new Promise(ie=>{function ue(){oe.forEach(function(we){X.get(we).currentProgram.isReady()&&oe.delete(we)}),oe.size!==0?setTimeout(ue,10):ie(B)}ne.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let La=null;function tl(){Qi.stop()}function il(){Qi.start()}let Qi=new th;function nl(B,Y,ee,oe){if(B.visible===!1)return;if(B.layers.test(Y.layers)){if(B.isGroup)ee=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(Y);else if(B.isLight)f.pushLight(B),B.castShadow&&f.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||w.intersectsSprite(B)){oe&&z.setFromMatrixPosition(B.matrixWorld).applyMatrix4(T);let ue=_e.update(B),we=B.material;we.visible&&m.push(B,ue,we,ee,z.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||w.intersectsObject(B))){let ue=_e.update(B),we=B.material;if(oe&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),z.copy(B.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),z.copy(ue.boundingSphere.center)),z.applyMatrix4(B.matrixWorld).applyMatrix4(T)),Array.isArray(we)){let De=ue.groups;for(let Be=0,Ce=De.length;Be<Ce;Be++){let Ie=De[Be],Le=we[Ie.materialIndex];Le&&Le.visible&&m.push(B,ue,Le,ee,z.z,Ie)}}else we.visible&&m.push(B,ue,we,ee,z.z,null)}}let ie=B.children;for(let ue=0,we=ie.length;ue<we;ue++)nl(ie[ue],Y,ee,oe)}function rl(B,Y,ee,oe){let ie=B.opaque,ue=B.transmissive,we=B.transparent;f.setupLightsView(ee),D===!0&&Pe.setGlobalState(M.clippingPlanes,ee),ue.length>0&&function(De,Be,Ce,Ie){if((Ce.isScene===!0?Ce.overrideMaterial:null)!==null)return;let je=te.isWebGL2;K===null&&(K=new ut(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Ii:fi,minFilter:Es,samples:je?4:0})),M.getDrawingBufferSize(q),je?K.setSize(q.x,q.y):K.setSize(Co(q.x),Co(q.y));let Ft=M.getRenderTarget();M.setRenderTarget(K),M.getClearColor(N),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear();let oi=M.toneMapping;M.toneMapping=Si,Vr(De,Ce,Ie),W.updateMultisampleRenderTarget(K),W.updateRenderTargetMipmap(K);let Hi=!1;for(let qe=0,it=Be.length;qe<it;qe++){let Rt=Be[qe],wt=Rt.object,Re=Rt.geometry,Ue=Rt.material,or=Rt.group;if(Ue.side===2&&wt.layers.test(Ie.layers)){let Ra=Ue.side;Ue.side=ht,Ue.needsUpdate=!0,sl(wt,Ce,Ie,Re,Ue,or),Ue.side=Ra,Ue.needsUpdate=!0,Hi=!0}}Hi===!0&&(W.updateMultisampleRenderTarget(K),W.updateRenderTargetMipmap(K)),M.setRenderTarget(Ft),M.setClearColor(N,F),M.toneMapping=oi}(ie,ue,Y,ee),oe&&y.viewport(R.copy(oe)),ie.length>0&&Vr(ie,Y,ee),ue.length>0&&Vr(ue,Y,ee),we.length>0&&Vr(we,Y,ee),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Vr(B,Y,ee){let oe=Y.isScene===!0?Y.overrideMaterial:null;for(let ie=0,ue=B.length;ie<ue;ie++){let we=B[ie],De=we.object,Be=we.geometry,Ce=oe===null?we.material:oe,Ie=we.group;De.layers.test(ee.layers)&&sl(De,Y,ee,Be,Ce,Ie)}}function sl(B,Y,ee,oe,ie,ue){B.onBeforeRender(M,Y,ee,oe,ie,ue),B.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),ie.onBeforeRender(M,Y,ee,oe,B,ue),ie.transparent===!0&&ie.side===2&&ie.forceSinglePass===!1?(ie.side=ht,ie.needsUpdate=!0,M.renderBufferDirect(ee,Y,oe,ie,B,ue),ie.side=Ti,ie.needsUpdate=!0,M.renderBufferDirect(ee,Y,oe,ie,B,ue),ie.side=2):M.renderBufferDirect(ee,Y,oe,ie,B,ue),B.onAfterRender(M,Y,ee,oe,ie,ue)}function Xr(B,Y,ee){Y.isScene!==!0&&(Y=U);let oe=X.get(B),ie=f.state.lights,ue=f.state.shadowsArray,we=ie.state.version,De=ge.getParameters(B,ie.state,ue,Y,ee),Be=ge.getProgramCacheKey(De),Ce=oe.programs;oe.environment=B.isMeshStandardMaterial?Y.environment:null,oe.fog=Y.fog,oe.envMap=(B.isMeshStandardMaterial?he:ae).get(B.envMap||oe.environment),Ce===void 0&&(B.addEventListener("dispose",$A),Ce=new Map,oe.programs=Ce);let Ie=Ce.get(Be);if(Ie!==void 0){if(oe.currentProgram===Ie&&oe.lightsStateVersion===we)return ol(B,De),Ie}else De.uniforms=ge.getUniforms(B),B.onBuild(ee,De,M),B.onBeforeCompile(De,M),Ie=ge.acquireProgram(De,Be),Ce.set(Be,Ie),oe.uniforms=De.uniforms;let Le=oe.uniforms;return(B.isShaderMaterial||B.isRawShaderMaterial)&&B.clipping!==!0||(Le.clippingPlanes=Pe.uniform),ol(B,De),oe.needsLights=function(je){return je.isMeshLambertMaterial||je.isMeshToonMaterial||je.isMeshPhongMaterial||je.isMeshStandardMaterial||je.isShadowMaterial||je.isShaderMaterial&&je.lights===!0}(B),oe.lightsStateVersion=we,oe.needsLights&&(Le.ambientLightColor.value=ie.state.ambient,Le.lightProbe.value=ie.state.probe,Le.directionalLights.value=ie.state.directional,Le.directionalLightShadows.value=ie.state.directionalShadow,Le.spotLights.value=ie.state.spot,Le.spotLightShadows.value=ie.state.spotShadow,Le.rectAreaLights.value=ie.state.rectArea,Le.ltc_1.value=ie.state.rectAreaLTC1,Le.ltc_2.value=ie.state.rectAreaLTC2,Le.pointLights.value=ie.state.point,Le.pointLightShadows.value=ie.state.pointShadow,Le.hemisphereLights.value=ie.state.hemi,Le.directionalShadowMap.value=ie.state.directionalShadowMap,Le.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Le.spotShadowMap.value=ie.state.spotShadowMap,Le.spotLightMatrix.value=ie.state.spotLightMatrix,Le.spotLightMap.value=ie.state.spotLightMap,Le.pointShadowMap.value=ie.state.pointShadowMap,Le.pointShadowMatrix.value=ie.state.pointShadowMatrix),oe.currentProgram=Ie,oe.uniformsList=null,Ie}function al(B){if(B.uniformsList===null){let Y=B.currentProgram.getUniforms();B.uniformsList=Qn.seqWithValue(Y.seq,B.uniforms)}return B.uniformsList}function ol(B,Y){let ee=X.get(B);ee.outputColorSpace=Y.outputColorSpace,ee.batching=Y.batching,ee.instancing=Y.instancing,ee.instancingColor=Y.instancingColor,ee.skinning=Y.skinning,ee.morphTargets=Y.morphTargets,ee.morphNormals=Y.morphNormals,ee.morphColors=Y.morphColors,ee.morphTargetsCount=Y.morphTargetsCount,ee.numClippingPlanes=Y.numClippingPlanes,ee.numIntersection=Y.numClipIntersection,ee.vertexAlphas=Y.vertexAlphas,ee.vertexTangents=Y.vertexTangents,ee.toneMapping=Y.toneMapping}Qi.setAnimationLoop(function(B){La&&La(B)}),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(B){La=B,pt.setAnimationLoop(B),B===null?Qi.stop():Qi.start()},pt.addEventListener("sessionstart",tl),pt.addEventListener("sessionend",il),this.render=function(B,Y){if(Y!==void 0&&Y.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(P===!0)return;B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(Y),Y=pt.getCamera()),B.isScene===!0&&B.onBeforeRender(M,B,Y,_),f=at.get(B,g.length),f.init(),g.push(f),T.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),w.setFromProjectionMatrix(T),O=this.localClippingEnabled,D=Pe.init(this.clippingPlanes,O),m=be.get(B,v.length),m.init(),v.push(m),nl(B,Y,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(G,$),this.info.render.frame++,D===!0&&Pe.beginShadows();let ee=f.state.shadowsArray;if(ze.render(ee,B,Y),D===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Te.render(m,B),f.setupLights(M._useLegacyLights),Y.isArrayCamera){let oe=Y.cameras;for(let ie=0,ue=oe.length;ie<ue;ie++){let we=oe[ie];rl(m,B,we,we.viewport)}}else rl(m,B,Y);_!==null&&(W.updateMultisampleRenderTarget(_),W.updateRenderTargetMipmap(_)),B.isScene===!0&&B.onAfterRender(M,B,Y),Et.resetDefaultState(),I=-1,C=null,g.pop(),f=g.length>0?g[g.length-1]:null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(B,Y,ee){X.get(B.texture).__webglTexture=Y,X.get(B.depthTexture).__webglTexture=ee;let oe=X.get(B);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=ee===void 0,oe.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(B,Y){let ee=X.get(B);ee.__webglFramebuffer=Y,ee.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(B,Y=0,ee=0){_=B,b=Y,x=ee;let oe=!0,ie=null,ue=!1,we=!1;if(B){let De=X.get(B);De.__useDefaultFramebuffer!==void 0?(y.bindFramebuffer(J.FRAMEBUFFER,null),oe=!1):De.__webglFramebuffer===void 0?W.setupRenderTarget(B):De.__hasExternalTextures&&W.rebindTextures(B,X.get(B.texture).__webglTexture,X.get(B.depthTexture).__webglTexture);let Be=B.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);let Ce=X.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(ie=Array.isArray(Ce[Y])?Ce[Y][ee]:Ce[Y],ue=!0):ie=te.isWebGL2&&B.samples>0&&W.useMultisampledRTT(B)===!1?X.get(B).__webglMultisampledFramebuffer:Array.isArray(Ce)?Ce[ee]:Ce,R.copy(B.viewport),H.copy(B.scissor),S=B.scissorTest}else R.copy(Q).multiplyScalar(Z).floor(),H.copy(j).multiplyScalar(Z).floor(),S=le;if(y.bindFramebuffer(J.FRAMEBUFFER,ie)&&te.drawBuffers&&oe&&y.drawBuffers(B,ie),y.viewport(R),y.scissor(H),y.setScissorTest(S),ue){let De=X.get(B.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y,De.__webglTexture,ee)}else if(we){let De=X.get(B.texture),Be=Y||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,De.__webglTexture,ee||0,Be)}I=-1},this.readRenderTargetPixels=function(B,Y,ee,oe,ie,ue,we){if(!B||!B.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=X.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){y.bindFramebuffer(J.FRAMEBUFFER,De);try{let Be=B.texture,Ce=Be.format,Ie=Be.type;if(Ce!==St&&Lt.convert(Ce)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Le=Ie===Ii&&(ne.has("EXT_color_buffer_half_float")||te.isWebGL2&&ne.has("EXT_color_buffer_float"));if(!(Ie===fi||Lt.convert(Ie)===J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)||Ie===Bi&&(te.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float"))||Le))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Y>=0&&Y<=B.width-oe&&ee>=0&&ee<=B.height-ie&&J.readPixels(Y,ee,oe,ie,Lt.convert(Ce),Lt.convert(Ie),ue)}finally{let Be=_!==null?X.get(_).__webglFramebuffer:null;y.bindFramebuffer(J.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(B,Y,ee=0){let oe=Math.pow(2,-ee),ie=Math.floor(Y.image.width*oe),ue=Math.floor(Y.image.height*oe);W.setTexture2D(Y,0),J.copyTexSubImage2D(J.TEXTURE_2D,ee,0,0,B.x,B.y,ie,ue),y.unbindTexture()},this.copyTextureToTexture=function(B,Y,ee,oe=0){let ie=Y.image.width,ue=Y.image.height,we=Lt.convert(ee.format),De=Lt.convert(ee.type);W.setTexture2D(ee,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ee.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ee.unpackAlignment),Y.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,oe,B.x,B.y,ie,ue,we,De,Y.image.data):Y.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,oe,B.x,B.y,Y.mipmaps[0].width,Y.mipmaps[0].height,we,Y.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,oe,B.x,B.y,we,De,Y.image),oe===0&&ee.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),y.unbindTexture()},this.copyTextureToTexture3D=function(B,Y,ee,oe,ie=0){if(M.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ue=B.max.x-B.min.x+1,we=B.max.y-B.min.y+1,De=B.max.z-B.min.z+1,Be=Lt.convert(oe.format),Ce=Lt.convert(oe.type),Ie;if(oe.isData3DTexture)W.setTexture3D(oe,0),Ie=J.TEXTURE_3D;else{if(!oe.isDataArrayTexture&&!oe.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");W.setTexture2DArray(oe,0),Ie=J.TEXTURE_2D_ARRAY}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,oe.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,oe.unpackAlignment);let Le=J.getParameter(J.UNPACK_ROW_LENGTH),je=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Ft=J.getParameter(J.UNPACK_SKIP_PIXELS),oi=J.getParameter(J.UNPACK_SKIP_ROWS),Hi=J.getParameter(J.UNPACK_SKIP_IMAGES),qe=ee.isCompressedTexture?ee.mipmaps[ie]:ee.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,qe.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,qe.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,B.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,B.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,B.min.z),ee.isDataTexture||ee.isData3DTexture?J.texSubImage3D(Ie,ie,Y.x,Y.y,Y.z,ue,we,De,Be,Ce,qe.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Ie,ie,Y.x,Y.y,Y.z,ue,we,De,Be,qe.data)):J.texSubImage3D(Ie,ie,Y.x,Y.y,Y.z,ue,we,De,Be,Ce,qe),J.pixelStorei(J.UNPACK_ROW_LENGTH,Le),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,je),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Ft),J.pixelStorei(J.UNPACK_SKIP_ROWS,oi),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Hi),ie===0&&oe.generateMipmaps&&J.generateMipmap(Ie),y.unbindTexture()},this.initTexture=function(B){B.isCubeTexture?W.setTextureCube(B,0):B.isData3DTexture?W.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?W.setTexture2DArray(B,0):W.setTexture2D(B,0),y.unbindTexture()},this.resetState=function(){b=0,x=0,_=null,y.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===BA?"display-p3":"srgb",t.unpackColorSpace=He.workingColorSpace===$s?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ze?tn:Kc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===tn?Ze:gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Xo=class extends wr{};Xo.prototype.isWebGL1Renderer=!0;var rn=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Kf=new E;var Zf=new E,$f=new E,e0=new E,t0=new se,i0=new se,n0=new ye,r0=new E,s0=new E,a0=new E,o0=new se,A0=new se,l0=new se;var c0=new E,h0=new E;var u0=new E,p0=new Ge,d0=new Ge,f0=new E,g0=new ye,m0=new E,v0=new jt,M0=new ye,P0=new Xn;var Gs=class extends Nt{constructor(e=null,t=1,i=1,n,s,a,o,l,A=1003,c=1003,h,u){super(null,a,o,l,A,c,n,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},x0=new ye,y0=new ye;var sn=class extends Qe{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Nn=new ye,bc=new ye,fs=[],Bc=new Yt,Dd=new ye,fr=new ke,gr=new jt,Kn=class extends ke{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sn(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Dd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Nn),Bc.copy(e.boundingBox).applyMatrix4(Nn),this.boundingBox.union(Bc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Nn),gr.copy(e.boundingSphere).applyMatrix4(Nn),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,n=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(i),e.ray.intersectsSphere(gr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Nn),bc.multiplyMatrices(i,Nn),fr.matrixWorld=bc,fr.raycast(e,fs);for(let a=0,o=fs.length;a<o;a++){let l=fs[a];l.instanceId=s,l.object=this,t.push(l)}fs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sn(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Wo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,n=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let s=i[this.index];n.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var w0=new ye,D0=new ye,_0=new ye,E0=new ye,b0=new Yn,B0=new Yt,S0=new jt,C0=new E,T0=new Wo,I0=new ke;var L0=new E,R0=new E,z0=new ye,U0=new Xn,N0=new jt;var O0=new E,F0=new E;var Dr=class extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sc=new ye,Yo=new Xn,gs=new jt,ms=new E,Zn=class extends Pt{constructor(e=new Ne,t=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(n),gs.radius+=s,e.ray.intersectsSphere(gs)===!1)return;Sc.copy(n).invert(),Yo.copy(e.ray).applyMatrix4(Sc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,A=i.index,c=i.attributes.position;if(A!==null)for(let h=Math.max(0,a.start),u=Math.min(A.count,a.start+a.count);h<u;h++){let p=A.getX(h);ms.fromBufferAttribute(c,p),Cc(ms,p,l,n,e,t,this)}else for(let h=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);h<u;h++)ms.fromBufferAttribute(c,h),Cc(ms,h,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Cc(r,e,t,i,n,s,a){let o=Yo.distanceSqToPoint(r);if(o<t){let l=new E;Yo.closestPointToPoint(r,l),l.applyMatrix4(i);let A=n.ray.origin.distanceTo(l);if(A<n.near||A>n.far)return;s.push({distance:A,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Ot=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,A=s-1;for(;l<=A;)if(n=Math.floor(l+(A-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){A=n;break}A=n-1}if(n=A,i[n]===a)return n/(s-1);let c=i[n];return(n+(a-c)/(i[n+1]-c))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new se:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new E,n=[],s=[],a=[],o=new E,l=new ye;for(let p=0;p<=e;p++){let d=p/e;n[p]=this.getTangentAt(d,new E)}s[0]=new E,a[0]=new E;let A=Number.MAX_VALUE,c=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=A&&(A=c,i.set(1,0,0)),h<=A&&(A=h,i.set(0,1,0)),u<=A&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let d=Math.acos(lt(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,d))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(lt(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let d=1;d<=e;d++)s[d].applyMatrix4(l.makeRotationAxis(n[d],p*d)),a[d].crossVectors(n[d],s[d])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_r=class extends Ot{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new se,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),A=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,p=A-this.aY;l=u*c-p*h+this.aX,A=u*h+p*c+this.aY}return i.set(l,A)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jo=class extends _r{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function TA(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,A){n(a,o,A*(o-s),A*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,A,c,h){let u=(a-s)/A-(o-s)/(A+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+h)+(l-o)/h;u*=c,p*=c,n(a,o,u,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var vs=new E,fo=new TA,go=new TA,mo=new TA,qo=class extends Ot{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new E){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,A=Math.floor(a),c=a-A;this.closed?A+=A>0?0:(Math.floor(Math.abs(A)/s)+1)*s:c===0&&A===s-1&&(A=s-2,c=1),this.closed||A>0?o=n[(A-1)%s]:(vs.subVectors(n[0],n[1]).add(n[0]),o=vs);let h=n[A%s],u=n[(A+1)%s];if(this.closed||A+2<s?l=n[(A+2)%s]:(vs.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=vs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,d=Math.pow(o.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(l),p);m<1e-4&&(m=1),d<1e-4&&(d=m),f<1e-4&&(f=m),fo.initNonuniformCatmullRom(o.x,h.x,u.x,l.x,d,m,f),go.initNonuniformCatmullRom(o.y,h.y,u.y,l.y,d,m,f),mo.initNonuniformCatmullRom(o.z,h.z,u.z,l.z,d,m,f)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(o.x,h.x,u.x,l.x,this.tension),go.initCatmullRom(o.y,h.y,u.y,l.y,this.tension),mo.initCatmullRom(o.z,h.z,u.z,l.z,this.tension));return i.set(fo.calc(c),go.calc(c),mo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new E().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tc(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Mr(r,e,t,i){return function(n,s){let a=1-n;return a*a*s}(r,e)+function(n,s){return 2*(1-n)*n*s}(r,t)+function(n,s){return n*n*s}(r,i)}function Pr(r,e,t,i,n){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,i)+function(s,a){return s*s*s*a}(r,n)}var ks=class extends Ot{constructor(e=new se,t=new se,i=new se,n=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new se){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Pr(e,n.x,s.x,a.x,o.x),Pr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jo=class extends Ot{constructor(e=new E,t=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new E){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Pr(e,n.x,s.x,a.x,o.x),Pr(e,n.y,s.y,a.y,o.y),Pr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vs=class extends Ot{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends Ot{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xs=class extends Ot{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Mr(e,n.x,s.x,a.x),Mr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ws=class extends Ot{constructor(e=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Mr(e,n.x,s.x,a.x),Mr(e,n.y,s.y,a.y),Mr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ys=class extends Ot{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],A=n[a],c=n[a>n.length-2?n.length-1:a+1],h=n[a>n.length-3?n.length-1:a+2];return i.set(Tc(o,l.x,A.x,c.x,h.x),Tc(o,l.y,A.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new se().fromArray(n))}return this}},js=Object.freeze({__proto__:null,ArcCurve:jo,CatmullRomCurve3:qo,CubicBezierCurve:ks,CubicBezierCurve3:Jo,EllipseCurve:_r,LineCurve:Vs,LineCurve3:Ko,QuadraticBezierCurve:Xs,QuadraticBezierCurve3:Ws,SplineCurve:Ys}),Zo=class extends Ot{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new js[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),A=l===0?0:1-a/l;return o.getPointAt(A,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let A=0;A<l.length;A++){let c=l[A];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new js[n.type]().fromJSON(n))}return this}},Er=class extends Zo{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Vs(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Xs(this.currentPoint.clone(),new se(e,t),new se(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new ks(this.currentPoint.clone(),new se(e,t),new se(i,n),new se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ys(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let A=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+A,t+c,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let A=new _r(e,t,i,n,s,a,o,l);if(this.curves.length>0){let h=A.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(A);let c=A.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qs=class r extends Ne{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=lt(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],A=[],c=1/t,h=new E,u=new se,p=new E,d=new E,m=new E,f=0,v=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:f=e[g+1].x-e[g].x,v=e[g+1].y-e[g].y,p.x=1*v,p.y=-f,p.z=0*v,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:f=e[g+1].x-e[g].x,v=e[g+1].y-e[g].y,p.x=1*v,p.y=-f,p.z=0*v,d.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(d)}for(let g=0;g<=t;g++){let M=i+g*c*n,P=Math.sin(M),b=Math.cos(M);for(let x=0;x<=e.length-1;x++){h.x=e[x].x*P,h.y=e[x].y,h.z=e[x].x*b,a.push(h.x,h.y,h.z),u.x=g/t,u.y=x/(e.length-1),o.push(u.x,u.y);let _=l[3*x+0]*P,I=l[3*x+1],C=l[3*x+0]*b;A.push(_,I,C)}}for(let g=0;g<t;g++)for(let M=0;M<e.length-1;M++){let P=M+g*e.length,b=P,x=P+e.length,_=P+e.length+1,I=P+1;s.push(b,x,I),s.push(_,I,x)}this.setIndex(s),this.setAttribute("position",new ve(a,3)),this.setAttribute("uv",new ve(o,2)),this.setAttribute("normal",new ve(A,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},$o=class r extends qs{constructor(e=1,t=1,i=4,n=8){let s=new Er;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},an=class r extends Ne{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],A=new E,c=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){let p=i+h/t*n;A.x=e*Math.cos(p),A.y=e*Math.sin(p),a.push(A.x,A.y,A.z),o.push(0,0,1),c.x=(a[u]/e+1)/2,c.y=(a[u+1]/e+1)/2,l.push(c.x,c.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(o,3)),this.setAttribute("uv",new ve(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},on=class r extends Ne{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let A=this;n=Math.floor(n),s=Math.floor(s);let c=[],h=[],u=[],p=[],d=0,m=[],f=i/2,v=0;function g(M){let P=d,b=new se,x=new E,_=0,I=M===!0?e:t,C=M===!0?1:-1;for(let H=1;H<=n;H++)h.push(0,f*C,0),u.push(0,C,0),p.push(.5,.5),d++;let R=d;for(let H=0;H<=n;H++){let S=H/n*l+o,N=Math.cos(S),F=Math.sin(S);x.x=I*F,x.y=f*C,x.z=I*N,h.push(x.x,x.y,x.z),u.push(0,C,0),b.x=.5*N+.5,b.y=.5*F*C+.5,p.push(b.x,b.y),d++}for(let H=0;H<n;H++){let S=P+H,N=R+H;M===!0?c.push(N,N+1,S):c.push(N+1,N,S),_+=3}A.addGroup(v,_,M===!0?1:2),v+=_}(function(){let M=new E,P=new E,b=0,x=(t-e)/i;for(let _=0;_<=s;_++){let I=[],C=_/s,R=C*(t-e)+e;for(let H=0;H<=n;H++){let S=H/n,N=S*l+o,F=Math.sin(N),k=Math.cos(N);P.x=R*F,P.y=-C*i+f,P.z=R*k,h.push(P.x,P.y,P.z),M.set(F,x,k).normalize(),u.push(M.x,M.y,M.z),p.push(S,1-C),I.push(d++)}m.push(I)}for(let _=0;_<n;_++)for(let I=0;I<s;I++){let C=m[I][_],R=m[I+1][_],H=m[I+1][_+1],S=m[I][_+1];c.push(C,R,S),c.push(R,H,S),b+=6}A.addGroup(v,b,0),v+=b})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(c),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},br=class r extends on{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},An=class r extends Ne{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(u,p,d,m){let f=m+1,v=[];for(let g=0;g<=f;g++){v[g]=[];let M=u.clone().lerp(d,g/f),P=p.clone().lerp(d,g/f),b=f-g;for(let x=0;x<=b;x++)v[g][x]=x===0&&g===f?M:M.clone().lerp(P,x/b)}for(let g=0;g<f;g++)for(let M=0;M<2*(f-g)-1;M++){let P=Math.floor(M/2);M%2==0?(l(v[g][P+1]),l(v[g+1][P]),l(v[g][P])):(l(v[g][P+1]),l(v[g+1][P+1]),l(v[g+1][P]))}}function l(u){s.push(u.x,u.y,u.z)}function A(u,p){let d=3*u;p.x=e[d+0],p.y=e[d+1],p.z=e[d+2]}function c(u,p,d,m){m<0&&u.x===1&&(a[p]=u.x-1),d.x===0&&d.z===0&&(a[p]=m/2/Math.PI+.5)}function h(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new E,d=new E,m=new E;for(let f=0;f<t.length;f+=3)A(t[f+0],p),A(t[f+1],d),A(t[f+2],m),o(p,d,m,u)})(n),function(u){let p=new E;for(let d=0;d<s.length;d+=3)p.x=s[d+0],p.y=s[d+1],p.z=s[d+2],p.normalize().multiplyScalar(u),s[d+0]=p.x,s[d+1]=p.y,s[d+2]=p.z}(i),function(){let u=new E;for(let d=0;d<s.length;d+=3){u.x=s[d+0],u.y=s[d+1],u.z=s[d+2];let m=h(u)/2/Math.PI+.5,f=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(m,1-f)}var p;(function(){let d=new E,m=new E,f=new E,v=new E,g=new se,M=new se,P=new se;for(let b=0,x=0;b<s.length;b+=9,x+=6){d.set(s[b+0],s[b+1],s[b+2]),m.set(s[b+3],s[b+4],s[b+5]),f.set(s[b+6],s[b+7],s[b+8]),g.set(a[x+0],a[x+1]),M.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),v.copy(d).add(m).add(f).divideScalar(3);let _=h(v);c(g,x+0,d,_),c(M,x+2,m,_),c(P,x+4,f,_)}})(),function(){for(let d=0;d<a.length;d+=6){let m=a[d+0],f=a[d+2],v=a[d+4],g=Math.max(m,f,v),M=Math.min(m,f,v);g>.9&&M<.1&&(m<.2&&(a[d+0]+=1),f<.2&&(a[d+2]+=1),v<.2&&(a[d+4]+=1))}}()}(),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(s.slice(),3)),this.setAttribute("uv",new ve(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},eA=class r extends An{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ms=new E,Ps=new E,vo=new E,xs=new Zi,tA=class extends Ne{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(_s*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,A=[0,0,0],c=["a","b","c"],h=new Array(3),u={},p=[];for(let d=0;d<l;d+=3){a?(A[0]=a.getX(d),A[1]=a.getX(d+1),A[2]=a.getX(d+2)):(A[0]=d,A[1]=d+1,A[2]=d+2);let{a:m,b:f,c:v}=xs;if(m.fromBufferAttribute(o,A[0]),f.fromBufferAttribute(o,A[1]),v.fromBufferAttribute(o,A[2]),xs.getNormal(vo),h[0]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,h[1]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,h[2]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,h[0]!==h[1]&&h[1]!==h[2]&&h[2]!==h[0])for(let g=0;g<3;g++){let M=(g+1)%3,P=h[g],b=h[M],x=xs[c[g]],_=xs[c[M]],I=`${P}_${b}`,C=`${b}_${P}`;C in u&&u[C]?(vo.dot(u[C].normal)<=s&&(p.push(x.x,x.y,x.z),p.push(_.x,_.y,_.z)),u[C]=null):I in u||(u[I]={index0:A[g],index1:A[M],normal:vo.clone()})}}for(let d in u)if(u[d]){let{index0:m,index1:f}=u[d];Ms.fromBufferAttribute(o,m),Ps.fromBufferAttribute(o,f),p.push(Ms.x,Ms.y,Ms.z),p.push(Ps.x,Ps.y,Ps.z)}this.setAttribute("position",new ve(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Js=class extends Er{constructor(e){super(e),this.uuid=er(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Er().fromJSON(n))}return this}},_d=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=Ic(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,A,c,h,u,p;if(i&&(s=function(d,m,f,v){let g=[],M,P,b,x,_;for(M=0,P=m.length;M<P;M++)b=m[M]*v,x=M<P-1?m[M+1]*v:d.length,_=Ic(d,b,x,v,!1),_===_.next&&(_.steiner=!0),g.push(Ld(_));for(g.sort(Cd),M=0;M<g.length;M++)f=Td(g[M],f);return f}(r,e,s,t)),r.length>80*t){o=A=r[0],l=c=r[1];for(let d=t;d<n;d+=t)h=r[d],u=r[d+1],h<o&&(o=h),u<l&&(l=u),h>A&&(A=h),u>c&&(c=u);p=Math.max(A-o,c-l),p=p!==0?32767/p:0}return Br(s,a,t,o,l,p,0),a};function Ic(r,e,t,i,n){let s,a;if(n===function(o,l,A,c){let h=0;for(let u=l,p=A-c;u<A;u+=c)h+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return h}(r,e,t,i)>0)for(s=e;s<t;s+=i)a=Lc(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=Lc(s,r[s],r[s+1],a);return a&&ta(a,a.next)&&(Cr(a),a=a.next),a}function ln(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!ta(i,i.next)&&Je(i.prev,i,i.next)!==0)i=i.next;else{if(Cr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Br(r,e,t,i,n,s,a){if(!r)return;!a&&s&&function(c,h,u,p){let d=c;do d.z===0&&(d.z=iA(d.x,d.y,h,u,p)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,function(m){let f,v,g,M,P,b,x,_,I=1;do{for(v=m,m=null,P=null,b=0;v;){for(b++,g=v,x=0,f=0;f<I&&(x++,g=g.nextZ,g);f++);for(_=I;x>0||_>0&&g;)x!==0&&(_===0||!g||v.z<=g.z)?(M=v,v=v.nextZ,x--):(M=g,g=g.nextZ,_--),P?P.nextZ=M:m=M,M.prevZ=P,P=M;v=g}P.nextZ=null,I*=2}while(b>1)}(d)}(r,i,n,s);let o,l,A=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?bd(r,i,n,s):Ed(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Cr(r),r=l.next,A=l.next;else if((r=l)===A){a?a===1?Br(r=Bd(ln(r),e,t),e,t,i,n,s,2):a===2&&Sd(r,e,t,i,n,s):Br(ln(r),e,t,i,n,s,1);break}}function Ed(r){let e=r.prev,t=r,i=r.next;if(Je(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,A=i.y,c=n<s?n<a?n:a:s<a?s:a,h=o<l?o<A?o:A:l<A?l:A,u=n>s?n>a?n:a:s>a?s:a,p=o>l?o>A?o:A:l>A?l:A,d=i.next;for(;d!==e;){if(d.x>=c&&d.x<=u&&d.y>=h&&d.y<=p&&On(n,o,s,l,a,A,d.x,d.y)&&Je(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function bd(r,e,t,i){let n=r.prev,s=r,a=r.next;if(Je(n,s,a)>=0)return!1;let o=n.x,l=s.x,A=a.x,c=n.y,h=s.y,u=a.y,p=o<l?o<A?o:A:l<A?l:A,d=c<h?c<u?c:u:h<u?h:u,m=o>l?o>A?o:A:l>A?l:A,f=c>h?c>u?c:u:h>u?h:u,v=iA(p,d,e,t,i),g=iA(m,f,e,t,i),M=r.prevZ,P=r.nextZ;for(;M&&M.z>=v&&P&&P.z<=g;){if(M.x>=p&&M.x<=m&&M.y>=d&&M.y<=f&&M!==n&&M!==a&&On(o,c,l,h,A,u,M.x,M.y)&&Je(M.prev,M,M.next)>=0||(M=M.prevZ,P.x>=p&&P.x<=m&&P.y>=d&&P.y<=f&&P!==n&&P!==a&&On(o,c,l,h,A,u,P.x,P.y)&&Je(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;M&&M.z>=v;){if(M.x>=p&&M.x<=m&&M.y>=d&&M.y<=f&&M!==n&&M!==a&&On(o,c,l,h,A,u,M.x,M.y)&&Je(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;P&&P.z<=g;){if(P.x>=p&&P.x<=m&&P.y>=d&&P.y<=f&&P!==n&&P!==a&&On(o,c,l,h,A,u,P.x,P.y)&&Je(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function Bd(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!ta(n,s)&&oh(n,i,i.next,s)&&Sr(n,s)&&Sr(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Cr(i),Cr(i.next),i=r=s),i=i.next}while(i!==r);return ln(i)}function Sd(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rd(a,o)){let l=Ah(a,o);return a=ln(a,a.next),l=ln(l,l.next),Br(a,e,t,i,n,s,0),void Br(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Cd(r,e){return r.x-e.x}function Td(r,e){let t=function(n,s){let a,o=s,l=-1/0,A=n.x,c=n.y;do{if(c<=o.y&&c>=o.next.y&&o.next.y!==o.y){let f=o.x+(c-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=A&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===A))return a}o=o.next}while(o!==s);if(!a)return null;let h=a,u=a.x,p=a.y,d,m=1/0;o=a;do A>=o.x&&o.x>=u&&A!==o.x&&On(c<p?A:l,c,u,p,c<p?l:A,c,o.x,o.y)&&(d=Math.abs(c-o.y)/(A-o.x),Sr(o,n)&&(d<m||d===m&&(o.x>a.x||o.x===a.x&&Id(a,o)))&&(a=o,m=d)),o=o.next;while(o!==h);return a}(r,e);if(!t)return e;let i=Ah(t,r);return ln(i,i.next),ln(t,t.next)}function Id(r,e){return Je(r.prev,r,e.prev)<0&&Je(e.next,r,r.next)<0}function iA(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Ld(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function On(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Rd(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&oh(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(r,e)&&(Sr(r,e)&&Sr(e,r)&&function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s}(r,e)&&(Je(r.prev,r,e.prev)||Je(r,e.prev,e))||ta(r,e)&&Je(r.prev,r,r.next)>0&&Je(e.prev,e,e.next)>0)}function Je(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ta(r,e){return r.x===e.x&&r.y===e.y}function oh(r,e,t,i){let n=ws(Je(r,e,t)),s=ws(Je(r,e,i)),a=ws(Je(t,i,r)),o=ws(Je(t,i,e));return n!==s&&a!==o||!(n!==0||!ys(r,t,e))||!(s!==0||!ys(r,i,e))||!(a!==0||!ys(t,r,i))||!(o!==0||!ys(t,e,i))}function ys(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ws(r){return r>0?1:r<0?-1:0}function Sr(r,e){return Je(r.prev,r,r.next)<0?Je(r,e,r.next)>=0&&Je(r,r.prev,e)>=0:Je(r,e,r.prev)<0||Je(r,r.next,e)<0}function Ah(r,e){let t=new nA(r.i,r.x,r.y),i=new nA(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Lc(r,e,t,i){let n=new nA(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Cr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function nA(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ci=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Rc(e),zc(i,e);let a=e.length;t.forEach(Rc);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,zc(i,t[l]);let o=_d(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Rc(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function zc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var rA=class r extends Ne{constructor(e=new Js([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],A=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,d=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:zd,M,P,b,x,_,I=!1;v&&(M=v.getSpacedPoints(c),I=!0,u=!1,P=v.computeFrenetFrames(c,!1),b=new E,x=new E,_=new E),u||(f=0,p=0,d=0,m=0);let C=o.extractPoints(A),R=C.shape,H=C.holes;if(!Ci.isClockWise(R)){R=R.reverse();for(let z=0,U=H.length;z<U;z++){let V=H[z];Ci.isClockWise(V)&&(H[z]=V.reverse())}}let S=Ci.triangulateShape(R,H),N=R;for(let z=0,U=H.length;z<U;z++){let V=H[z];R=R.concat(V)}function F(z,U,V){return U||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(U,V)}let k=R.length,Ae=S.length;function Z(z,U,V){let ne,te,y,re=z.x-U.x,X=z.y-U.y,W=V.x-z.x,ae=V.y-z.y,he=re*re+X*X,pe=re*ae-X*W;if(Math.abs(pe)>Number.EPSILON){let fe=Math.sqrt(he),_e=Math.sqrt(W*W+ae*ae),ge=U.x-X/fe,me=U.y+re/fe,be=((V.x-ae/_e-ge)*ae-(V.y+W/_e-me)*W)/(re*ae-X*W);ne=ge+re*be-z.x,te=me+X*be-z.y;let at=ne*ne+te*te;if(at<=2)return new se(ne,te);y=Math.sqrt(at/2)}else{let fe=!1;re>Number.EPSILON?W>Number.EPSILON&&(fe=!0):re<-Number.EPSILON?W<-Number.EPSILON&&(fe=!0):Math.sign(X)===Math.sign(ae)&&(fe=!0),fe?(ne=-X,te=re,y=Math.sqrt(he)):(ne=re,te=X,y=Math.sqrt(he/2))}return new se(ne/y,te/y)}let G=[];for(let z=0,U=N.length,V=U-1,ne=z+1;z<U;z++,V++,ne++)V===U&&(V=0),ne===U&&(ne=0),G[z]=Z(N[z],N[V],N[ne]);let $=[],Q,j=G.concat();for(let z=0,U=H.length;z<U;z++){let V=H[z];Q=[];for(let ne=0,te=V.length,y=te-1,re=ne+1;ne<te;ne++,y++,re++)y===te&&(y=0),re===te&&(re=0),Q[ne]=Z(V[ne],V[y],V[re]);$.push(Q),j=j.concat(Q)}for(let z=0;z<f;z++){let U=z/f,V=p*Math.cos(U*Math.PI/2),ne=d*Math.sin(U*Math.PI/2)+m;for(let te=0,y=N.length;te<y;te++){let re=F(N[te],G[te],ne);D(re.x,re.y,-V)}for(let te=0,y=H.length;te<y;te++){let re=H[te];Q=$[te];for(let X=0,W=re.length;X<W;X++){let ae=F(re[X],Q[X],ne);D(ae.x,ae.y,-V)}}}let le=d+m;for(let z=0;z<k;z++){let U=u?F(R[z],j[z],le):R[z];I?(x.copy(P.normals[0]).multiplyScalar(U.x),b.copy(P.binormals[0]).multiplyScalar(U.y),_.copy(M[0]).add(x).add(b),D(_.x,_.y,_.z)):D(U.x,U.y,0)}for(let z=1;z<=c;z++)for(let U=0;U<k;U++){let V=u?F(R[U],j[U],le):R[U];I?(x.copy(P.normals[z]).multiplyScalar(V.x),b.copy(P.binormals[z]).multiplyScalar(V.y),_.copy(M[z]).add(x).add(b),D(_.x,_.y,_.z)):D(V.x,V.y,h/c*z)}for(let z=f-1;z>=0;z--){let U=z/f,V=p*Math.cos(U*Math.PI/2),ne=d*Math.sin(U*Math.PI/2)+m;for(let te=0,y=N.length;te<y;te++){let re=F(N[te],G[te],ne);D(re.x,re.y,h+V)}for(let te=0,y=H.length;te<y;te++){let re=H[te];Q=$[te];for(let X=0,W=re.length;X<W;X++){let ae=F(re[X],Q[X],ne);I?D(ae.x,ae.y+M[c-1].y,M[c-1].x+V):D(ae.x,ae.y,h+V)}}}function w(z,U){let V=z.length;for(;--V>=0;){let ne=V,te=V-1;te<0&&(te=z.length-1);for(let y=0,re=c+2*f;y<re;y++){let X=k*y,W=k*(y+1);K(U+ne+X,U+te+X,U+te+W,U+ne+W)}}}function D(z,U,V){l.push(z),l.push(U),l.push(V)}function O(z,U,V){T(z),T(U),T(V);let ne=n.length/3,te=g.generateTopUV(i,n,ne-3,ne-2,ne-1);q(te[0]),q(te[1]),q(te[2])}function K(z,U,V,ne){T(z),T(U),T(ne),T(U),T(V),T(ne);let te=n.length/3,y=g.generateSideWallUV(i,n,te-6,te-3,te-2,te-1);q(y[0]),q(y[1]),q(y[3]),q(y[1]),q(y[2]),q(y[3])}function T(z){n.push(l[3*z+0]),n.push(l[3*z+1]),n.push(l[3*z+2])}function q(z){s.push(z.x),s.push(z.y)}(function(){let z=n.length/3;if(u){let U=0,V=k*U;for(let ne=0;ne<Ae;ne++){let te=S[ne];O(te[2]+V,te[1]+V,te[0]+V)}U=c+2*f,V=k*U;for(let ne=0;ne<Ae;ne++){let te=S[ne];O(te[0]+V,te[1]+V,te[2]+V)}}else{for(let U=0;U<Ae;U++){let V=S[U];O(V[2],V[1],V[0])}for(let U=0;U<Ae;U++){let V=S[U];O(V[0]+k*c,V[1]+k*c,V[2]+k*c)}}i.addGroup(z,n.length/3-z,0)})(),function(){let z=n.length/3,U=0;w(N,U),U+=N.length;for(let V=0,ne=H.length;V<ne;V++){let te=H[V];w(te,U),U+=te.length}i.addGroup(z,n.length/3-z,1)}()}this.setAttribute("position",new ve(n,3)),this.setAttribute("uv",new ve(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new js[n.type]().fromJSON(n)),new r(i,e.options)}},zd={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],A=e[3*n],c=e[3*n+1];return[new se(s,a),new se(o,l),new se(A,c)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],A=e[3*i],c=e[3*i+1],h=e[3*i+2],u=e[3*n],p=e[3*n+1],d=e[3*n+2],m=e[3*s],f=e[3*s+1],v=e[3*s+2];return Math.abs(o-c)<Math.abs(a-A)?[new se(a,1-l),new se(A,1-h),new se(u,1-d),new se(m,1-v)]:[new se(o,1-l),new se(c,1-h),new se(p,1-d),new se(f,1-v)]}},cn=class r extends An{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},sA=class r extends An{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},aA=class r extends Ne{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],A=[],c=[],h=e,u=(t-e)/(n=Math.max(1,n)),p=new E,d=new se;for(let m=0;m<=n;m++){for(let f=0;f<=i;f++){let v=s+f/i*a;p.x=h*Math.cos(v),p.y=h*Math.sin(v),l.push(p.x,p.y,p.z),A.push(0,0,1),d.x=(p.x/t+1)/2,d.y=(p.y/t+1)/2,c.push(d.x,d.y)}h+=u}for(let m=0;m<n;m++){let f=m*(i+1);for(let v=0;v<i;v++){let g=v+f,M=g,P=g+i+1,b=g+i+2,x=g+1;o.push(M,P,x),o.push(P,b,x)}}this.setIndex(o),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(A,3)),this.setAttribute("uv",new ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},oA=class r extends Ne{constructor(e=new Js([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)A(e);else for(let c=0;c<e.length;c++)A(e[c]),this.addGroup(o,l,c),o+=l,l=0;function A(c){let h=n.length/3,u=c.extractPoints(t),p=u.shape,d=u.holes;Ci.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,v=d.length;f<v;f++){let g=d[f];Ci.isClockWise(g)===!0&&(d[f]=g.reverse())}let m=Ci.triangulateShape(p,d);for(let f=0,v=d.length;f<v;f++){let g=d[f];p=p.concat(g)}for(let f=0,v=p.length;f<v;f++){let g=p[f];n.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let f=0,v=m.length;f<v;f++){let g=m[f],M=g[0]+h,P=g[1]+h,b=g[2]+h;i.push(M,P,b),l+=3}}this.setIndex(i),this.setAttribute("position",new ve(n,3)),this.setAttribute("normal",new ve(s,3)),this.setAttribute("uv",new ve(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},AA=class r extends Ne{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),A=0,c=[],h=new E,u=new E,p=[],d=[],m=[],f=[];for(let v=0;v<=i;v++){let g=[],M=v/i,P=0;v===0&&a===0?P=.5/t:v===i&&l===Math.PI&&(P=-.5/t);for(let b=0;b<=t;b++){let x=b/t;h.x=-e*Math.cos(n+x*s)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(n+x*s)*Math.sin(a+M*o),d.push(h.x,h.y,h.z),u.copy(h).normalize(),m.push(u.x,u.y,u.z),f.push(x+P,1-M),g.push(A++)}c.push(g)}for(let v=0;v<i;v++)for(let g=0;g<t;g++){let M=c[v][g+1],P=c[v][g],b=c[v+1][g],x=c[v+1][g+1];(v!==0||a>0)&&p.push(M,P,x),(v!==i-1||l<Math.PI)&&p.push(P,b,x)}this.setIndex(p),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(m,3)),this.setAttribute("uv",new ve(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},lA=class r extends An{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},cA=class r extends Ne{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],A=[],c=new E,h=new E,u=new E;for(let p=0;p<=i;p++)for(let d=0;d<=n;d++){let m=d/n*s,f=p/i*Math.PI*2;h.x=(e+t*Math.cos(f))*Math.cos(m),h.y=(e+t*Math.cos(f))*Math.sin(m),h.z=t*Math.sin(f),o.push(h.x,h.y,h.z),c.x=e*Math.cos(m),c.y=e*Math.sin(m),u.subVectors(h,c).normalize(),l.push(u.x,u.y,u.z),A.push(d/n),A.push(p/i)}for(let p=1;p<=i;p++)for(let d=1;d<=n;d++){let m=(n+1)*p+d-1,f=(n+1)*(p-1)+d-1,v=(n+1)*(p-1)+d,g=(n+1)*p+d;a.push(m,f,g),a.push(f,v,g)}this.setIndex(a),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(l,3)),this.setAttribute("uv",new ve(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},hA=class r extends Ne{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],A=[],c=[],h=new E,u=new E,p=new E,d=new E,m=new E,f=new E,v=new E;for(let M=0;M<=i;++M){let P=M/i*s*Math.PI*2;g(P,s,a,e,p),g(P+.01,s,a,e,d),f.subVectors(d,p),v.addVectors(d,p),m.crossVectors(f,v),v.crossVectors(m,f),m.normalize(),v.normalize();for(let b=0;b<=n;++b){let x=b/n*Math.PI*2,_=-t*Math.cos(x),I=t*Math.sin(x);h.x=p.x+(_*v.x+I*m.x),h.y=p.y+(_*v.y+I*m.y),h.z=p.z+(_*v.z+I*m.z),l.push(h.x,h.y,h.z),u.subVectors(h,p).normalize(),A.push(u.x,u.y,u.z),c.push(M/i),c.push(b/n)}}for(let M=1;M<=i;M++)for(let P=1;P<=n;P++){let b=(n+1)*(M-1)+(P-1),x=(n+1)*M+(P-1),_=(n+1)*M+P,I=(n+1)*(M-1)+P;o.push(b,x,I),o.push(x,_,I)}function g(M,P,b,x,_){let I=Math.cos(M),C=Math.sin(M),R=b/P*M,H=Math.cos(R);_.x=x*(2+H)*.5*I,_.y=x*(2+H)*C*.5,_.z=x*Math.sin(R)*.5}this.setIndex(o),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(A,3)),this.setAttribute("uv",new ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},uA=class r extends Ne{constructor(e=new Ws(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,A=new se,c=new E,h=[],u=[],p=[],d=[];function m(f){c=e.getPointAt(f/t,c);let v=a.normals[f],g=a.binormals[f];for(let M=0;M<=n;M++){let P=M/n*Math.PI*2,b=Math.sin(P),x=-Math.cos(P);l.x=x*v.x+b*g.x,l.y=x*v.y+b*g.y,l.z=x*v.z+b*g.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,h.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)m(f);m(s===!1?t:0),function(){for(let f=0;f<=t;f++)for(let v=0;v<=n;v++)A.x=f/t,A.y=v/n,p.push(A.x,A.y)}(),function(){for(let f=1;f<=t;f++)for(let v=1;v<=n;v++){let g=(n+1)*(f-1)+(v-1),M=(n+1)*f+(v-1),P=(n+1)*f+v,b=(n+1)*(f-1)+v;d.push(g,M,b),d.push(M,P,b)}}()})(),this.setIndex(d),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new js[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},pA=class extends Ne{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new E,s=new E;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let A=0,c=l.length;A<c;++A){let h=l[A],u=h.start;for(let p=u,d=u+h.count;p<d;p+=3)for(let m=0;m<3;m++){let f=o.getX(p+m),v=o.getX(p+(m+1)%3);n.fromBufferAttribute(a,f),s.fromBufferAttribute(a,v),Uc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let A=0;A<3;A++){let c=3*o+A,h=3*o+(A+1)%3;n.fromBufferAttribute(a,c),s.fromBufferAttribute(a,h),Uc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ve(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Uc(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Q0=Object.freeze({__proto__:null,BoxGeometry:Jt,CapsuleGeometry:$o,CircleGeometry:an,ConeGeometry:br,CylinderGeometry:on,DodecahedronGeometry:eA,EdgesGeometry:tA,ExtrudeGeometry:rA,IcosahedronGeometry:cn,LatheGeometry:qs,OctahedronGeometry:sA,PlaneGeometry:jn,PolyhedronGeometry:An,RingGeometry:aA,ShapeGeometry:oA,SphereGeometry:AA,TetrahedronGeometry:lA,TorusGeometry:cA,TorusKnotGeometry:hA,TubeGeometry:uA,WireframeGeometry:pA});function Ds(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ud(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var $n=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=s)break t;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dA=class extends $n{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fl:s=e,o=2*t-i;break;case Ql:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fl:a=e,l=2*i-t;break;case Ql:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let A=.5*(i-t),c=this.valueSize;this._weightPrev=A/(t-o),this._weightNext=A/(l-i),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,A=l-o,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,d=(i-t)/(n-t),m=d*d,f=m*d,v=-u*f+2*u*m-u*d,g=(1+u)*f+(-1.5-2*u)*m+(-.5+u)*d+1,M=(-1-p)*f+(1.5+p)*m+.5*d,P=p*f-p*m;for(let b=0;b!==o;++b)s[b]=v*a[c+b]+g*a[A+b]+M*a[l+b]+P*a[h+b];return s}},fA=class extends $n{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,A=l-o,c=(i-t)/(n-t),h=1-c;for(let u=0;u!==o;++u)s[u]=a[A+u]*h+a[l+u]*c;return s}},gA=class extends $n{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ds(t,this.TimeBufferType),this.values=Ds(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ds(e.times,Array),values:Ds(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Bs:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Bs;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Ud(n))for(let o=0,l=n.length;o!==l;++o){let A=n[o];if(isNaN(A)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,A),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Va,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,A=e[o];if(A!==e[o+1]&&(o!==1||A!==e[0]))if(n)l=!0;else{let c=o*i,h=c-i,u=c+i;for(let p=0;p!==i;++p){let d=t[c+p];if(d!==t[h+p]||d!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let c=o*i,h=a*i;for(let u=0;u!==i;++u)t[h+u]=t[c+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,A=0;A!==i;++A)t[l+A]=t[o+A];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Wt.prototype.TimeBufferType=Float32Array,Wt.prototype.ValueBufferType=Float32Array,Wt.prototype.DefaultInterpolation=Bs;var Ji=class extends Wt{};Ji.prototype.ValueTypeName="bool",Ji.prototype.ValueBufferType=Array,Ji.prototype.DefaultInterpolation=bs,Ji.prototype.InterpolantFactoryMethodLinear=void 0,Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var mA=class extends Wt{};mA.prototype.ValueTypeName="color";var vA=class extends Wt{};vA.prototype.ValueTypeName="number";var MA=class extends $n{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),A=e*o;for(let c=A+o;A!==c;A+=4)$e.slerpFlat(s,0,a,A-o,a,A,l);return s}},xr=class extends Wt{InterpolantFactoryMethodLinear(e){return new MA(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion",xr.prototype.DefaultInterpolation=Bs,xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Wt{};Ki.prototype.ValueTypeName="string",Ki.prototype.ValueBufferType=Array,Ki.prototype.DefaultInterpolation=bs,Ki.prototype.InterpolantFactoryMethodLinear=void 0,Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var PA=class extends Wt{};PA.prototype.ValueTypeName="vector";var xA=class{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,A=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){l++,a===!1&&n.onStart!==void 0&&n.onStart(c,o,l),a=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return s?s(c):c},this.setURLModifier=function(c){return s=c,this},this.addHandler=function(c,h){return A.push(c,h),this},this.removeHandler=function(c){let h=A.indexOf(c);return h!==-1&&A.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=A.length;h<u;h+=2){let p=A[h],d=A[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return d}return null}}},Nd=new xA,yA=class{constructor(e){this.manager=e!==void 0?e:Nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};yA.DEFAULT_MATERIAL_NAME="__DEFAULT";var wA=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Mo=new ye,Nc=new E,Oc=new E,DA=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yn,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oc),t.updateMatrixWorld(),Mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var H0=new ye,G0=new E,k0=new E;var _A=class extends DA{constructor(){super(new qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends wA{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new _A}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var V0=new ye,X0=new ye,W0=new ye;var Y0=new E,j0=new $e,q0=new E,J0=new E;var K0=new E,Z0=new $e,$0=new E,eg=new E;var IA="\\[\\]\\.:\\/",Od=new RegExp("["+IA+"]","g"),Po="[^"+IA+"]",Fd="[^"+IA.replace("\\.","")+"]",Qd=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Po)+/(WCOD+)?/.source.replace("WCOD",Fd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Po)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Po)+"$"),Hd=["material","materials","bones","map"],We=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Od,"")}static parseTrackName(e){let t=Qd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Hd.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let A=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===A){A=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(A!==void 0){if(e[A]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[A]}}let a=e[n];if(a===void 0){let A=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+A+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=class{constructor(r,e,t){let i=t||We.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray],We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tg=new Float32Array(1);var ig=new se;var ng=new E,rg=new E;var sg=new E;var ag=new E,og=new ye,Ag=new ye;var lg=new E,cg=new de,hg=new de;var ug=new E,pg=new E,dg=new E;var fg=new E,gg=new yr;var mg=new Yt;var vg=new E;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);var Gd=`
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
}`,ch=8,lh="3.0",kd=`
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
}`,hh=new de("#c6bcc6"),uh={value:hh.clone()},ph={value:new de(1,1,1)},Tr={value:1},Ir={value:Array.from({length:ch},()=>new Ge(0,0,0,0))},LA={value:new de(0,0,0)},Vd=new de(0,0,0),Lr={value:new E(-.55,1,-.35).normalize()};function RA({acceso:r=0,opacita:e=1}={}){let t=new xt({uniforms:SA.merge([ce.lights,{opacita:{value:e},acceso:{value:r}}]),vertexShader:Gd,fragmentShader:kd,vertexColors:!0,lights:!0,transparent:e<1,depthWrite:e>=1,shadowSide:ht,extensions:{derivatives:!0}});return t.defaultAttributeValues={...t.defaultAttributeValues,strato:[0]},t.uniforms.tinta=ph,t.uniforms.ombra=uh,t.uniforms.lampadePos=Ir,t.uniforms.lampadeCol=LA,t.uniforms.emissivo=Tr,t.uniforms.sole=Lr,t}var Xd=null,Wd=null,vi=()=>Xd||=RA(),Pg=new qt({colorWrite:!1,depthWrite:!1,shadowSide:ht}),zA=()=>Wd||=RA({acceso:1});var dh=(r,e=!1)=>RA({opacita:r,acceso:e?1:0});function fh(r,e,t){ph.value.setRGB(r,e,t)}function gh(r,e,t){uh.value.setRGB(r,e,t)}function mh(r=[],e="#000000",t=0){Yd=t,Ir.value.forEach((i,n)=>{let s=r[n];s?i.set(s[0],s[1],s[2],t*(s[3]??1)):i.set(0,0,0,0)}),Vd=new de(e)}var Yd=0;var vh=new qt({visible:!1});function Ph(){try{let r=document.createElement("canvas");return!!(globalThis.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}function xh(r){try{let e=r.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),i=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER);return/swiftshader|llvmpipe|software|basic render/i.test(String(i))}catch{return!1}}function jd(){try{let r=document.createElement("canvas"),e=r.getContext("webgl2");if(!e)return{resa:!1,lenta:!1};let t={resa:!!(e.getExtension("EXT_color_buffer_float")||e.getExtension("EXT_color_buffer_half_float")),lenta:xh({getContext:()=>e})},i=e.getExtension("WEBGL_lose_context");return i&&i.loseContext(),t}catch{return{resa:!1,lenta:!1}}}function yh(r){let e=new URLSearchParams(location.search).get("qualita"),t=jd(),i=t.resa&&e!=="bassa"&&(!t.lenta||e==="alta"),n=new wr({canvas:r,antialias:!i,alpha:!0,powerPreference:"high-performance"});n.outputColorSpace=Ze,n.setClearColor(0,0);let s=xh(n),a=e==="bassa"||e==="alta"?e:s?"bassa":"alta";n.setPixelRatio(s?.75:Math.min(devicePixelRatio,innerWidth<900?1.5:2)),n.shadowMap.enabled=a==="alta",n.shadowMap.type=EA,n.shadowMap.autoUpdate=!1;let o=new rn,l=new Ks(16777215,1);l.castShadow=a==="alta";let A=Math.min(innerWidth<900?2048:4096,n.capabilities.maxTextureSize);l.shadow.mapSize.set(A,A),l.shadow.bias=-5e-4,l.shadow.normalBias=0,o.add(l,l.target);let c=Jd();return o.add(c),o.userData.stelle=c,{renderer:n,sc:o,sole:l,qualita:a,lenta:s,stelle:c}}function wh(r,e,t,i,n=0){let s=Lr.value.clone();r.target.position.set(e,n,t),r.position.set(e,n,t).addScaledVector(s,i*3+10);let a=r.shadow.camera,o=i+2;Object.assign(a,{left:-o,right:o,top:o,bottom:-o,near:.5,far:i*6+24}),a.updateProjectionMatrix(),r.target.updateMatrixWorld(),r.updateMatrixWorld()}var ia=[[0,[.2,.23,.38],[.055,.086,.188]],[.2,[.23,.26,.41],[.094,.125,.29]],[.26,[.92,.78,.66],[1,.718,.529]],[.34,[1.04,1,.94],[.561,.827,1]],[.66,[1.04,1,.94],[.561,.827,1]],[.74,[.95,.72,.58],[1,.616,.431]],[.82,[.25,.28,.43],[.102,.129,.282]],[1,[.2,.23,.38],[.055,.086,.188]]],Mh=r=>r<=0?0:r>=1?1:r*r*(3-2*r);function qd(r){let e=(r/24%1+1)%1,t=0;for(;t<ia.length-2&&ia[t+1][0]<=e;)t++;let[i,n,s]=ia[t],[a,o,l]=ia[t+1],A=Mh((e-i)/(a-i)),c=(g,M)=>g.map((P,b)=>P+(M[b]-P)*A),h=c(n,o),u=c(s,l),p=Math.sin((e-.25)*Math.PI*2),d=Math.max(p,.24),m=Mh(d/.22)*(.48+.52*Math.pow(d,.85)),f=Math.min(.85,(p<=0?.3:.72)*m),v=Math.max(...u)||1;return{ambiente:h,cielo:u,ombra:u.map(g=>{let M=g/v;return(M+(1-M)*.55)*(1-f)})}}function Dh(r){let e=qd(r);fh(...e.ambiente),gh(...e.ombra)}function Jd(){let r=42,e=()=>(r=r*16807%2147483647,r/2147483647),t=1500,i=new Float32Array(t*3),n=new Float32Array(t*3);for(let a=0;a<t;a++){let o=e()*2-1,l=e()*Math.PI*2,A=90,c=Math.sqrt(1-o*o);i.set([Math.cos(l)*c*A+4,o*A*.7+10,Math.sin(l)*c*A+4],a*3);let h=.25+Math.pow(e(),2.2)*.75;n.set([h*.92,h*.88,h],a*3)}let s=new Ne;return s.setAttribute("position",new Qe(i,3)),s.setAttribute("color",new Qe(n,3)),new Zn(s,new Dr({size:2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1}))}var Kd=[{gruppo:"Tempo",voci:[{id:"oraVera",tipo:"si",def:!0,nome:"Ora vera"},{id:"ora",tipo:"num",def:12,min:0,max:24,passo:.25,nome:"Ora"},{id:"giorno",tipo:"scelta",def:0,nome:"Un giorno dura",opzioni:[[0,"Fermo"],[300,"5 min"],[60,"1 min"],[20,"20 s"]]},{id:"stagione",tipo:"scelta",def:"",nome:"Stagione",opzioni:[["","Vera"],["primavera","Prim."],["estate","Est."],["autunno","Aut."],["inverno","Inv."]]}]},{gruppo:"Acqua",voci:[{id:"acquaVicino",tipo:"colore",def:"#8fd4e6",nome:"Accanto all'isola"},{id:"acquaMezzo",tipo:"colore",def:"#6d9fe6",nome:"In mezzo"},{id:"acquaBordo",tipo:"colore",def:"#7f78d8",nome:"Verso il bordo"},{id:"pienaVicino",tipo:"num",def:.94,min:0,max:1,passo:.01,nome:"Piena, vicino"},{id:"pienaBordo",tipo:"num",def:.42,min:0,max:1,passo:.01,nome:"Piena, al bordo"},{id:"pozza",tipo:"num",def:1.24,min:1,max:3,passo:.01,nome:"Larghezza pozza"},{id:"riflessoMin",tipo:"num",def:.2,min:0,max:1,passo:.01,nome:"Riflesso delle cose"},{id:"riflessoMax",tipo:"num",def:.6,min:0,max:1,passo:.01,nome:"Riflesso, al massimo"},{id:"cieloMix",tipo:"num",def:0,min:0,max:.6,passo:.01,nome:"Cielo nell'acqua"},{id:"rifrazione",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Rifrazione"},{id:"ondeFondo",tipo:"num",def:1,min:0,max:2,passo:.05,nome:"Onde di fondo"},{id:"ondeGesto",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Onde del mouse"},{id:"attrito",tipo:"num",def:.9955,min:.98,max:.9995,passo:5e-4,nome:"Quanto durano"},{id:"vuotoPiega",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Il vuoto si piega"},{id:"luccichio",tipo:"num",def:0,min:0,max:3,passo:.05,nome:"Luccichio"},{id:"segni",tipo:"num",def:1,min:0,max:2,passo:.05,nome:"Segni sul pelo"},{id:"schiuma",tipo:"num",def:.7,min:0,max:1,passo:.05,nome:"Schiuma a riva"},{id:"filo",tipo:"num",def:.5,min:0,max:1,passo:.05,nome:"Filo del bordo"}]},{gruppo:"Pesci",voci:[{id:"pesci",tipo:"num",def:7,min:0,max:16,passo:1,nome:"Quanti"},{id:"pesciVelocita",tipo:"num",def:1,min:0,max:4,passo:.05,nome:"Velocità"},{id:"pesciPaura",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Paura"},{id:"pesciScala",tipo:"num",def:1,min:.4,max:3,passo:.05,nome:"Grandezza"},{id:"pesceOro",tipo:"si",def:!0,nome:"Quello d'oro"}]},{gruppo:"Ambiente",voci:[{id:"meteo",tipo:"scelta",def:"sereno",nome:"Tempo",opzioni:[["sereno","Sereno"],["pioggia","Pioggia"],["neve","Neve"]]},{id:"vento",tipo:"num",def:.35,min:0,max:1,passo:.05,nome:"Vento"},{id:"particelle",tipo:"si",def:!0,nome:"Foglie e petali"},{id:"lucciole",tipo:"si",def:!0,nome:"Lucciole di notte"},{id:"quante",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Quante"}]},{gruppo:"Luce",voci:[{id:"bloom",tipo:"num",def:7,min:0,max:16,passo:.1,nome:"Bloom"},{id:"soglia",tipo:"num",def:1.13,min:.4,max:2,passo:.01,nome:"Bloom, soglia"},{id:"dispersione",tipo:"num",def:.268,min:0,max:1,passo:.01,nome:"Bloom, dispersione"},{id:"sole",tipo:"num",def:1.4,min:.5,max:3,passo:.01,nome:"Sole"},{id:"lampadeForza",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Lampade"},{id:"aberrazione",tipo:"num",def:.029,min:0,max:.3,passo:.001,nome:"Aberrazione"},{id:"fxaa",tipo:"si",def:!0,nome:"Antialias"},{id:"ombre",tipo:"si",def:!0,nome:"Ombre"}]}],Zd=Kd.flatMap(r=>r.voci),$d=Object.fromEntries(Zd.map(r=>[r.id,r.def]));var Ye={...$d};var hn={soglia:Math.pow(1.13,2.2),intensita:7,dispersione:.05+.268*.9,sole:1.4/1.04,livelli:6},UA=16,na=6,ef="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",tf=`
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
`,nf=`
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
}`,rf=`
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
}`,sf=`
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
}`,af=`
precision highp float;
varying vec2 vUv;
uniform sampler2D t, tAlto;
uniform vec2 uPx;
uniform float uDispersione;
vec3 l(float x, float y) { return texture2D(t, vUv + vec2(x, y) * uPx).rgb; }
void main() {
  vec3 c = l(0.0, 0.0) * 4.0 + (l(-1.0, 0.0) + l(1.0, 0.0) + l(0.0, -1.0) + l(0.0, 1.0)) * 2.0 + l(-1.0, -1.0) + l(1.0, -1.0) + l(-1.0, 1.0) + l(1.0, 1.0);
  gl_FragColor = vec4(mix(texture2D(tAlto, vUv).rgb, c / 16.0, uDispersione), 1.0);
}`,of=`
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
}`,Af=`
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
}`,Rr=class{static puo(e){return e.capabilities.isWebGL2&&(e.extensions.has("EXT_color_buffer_float")||e.extensions.has("EXT_color_buffer_half_float"))}constructor(e,{acqua:t=!1,trasparente:i=!1,sole:n=hn.sole,emissivo:s=2.4}={}){this.emissivo=s,this.scalaInterna=this.scalaBase=e.getPixelRatio()<1.5?1.5:1,this.sopra=new rn,this.r=e,this.conAcqua=t,this.trasparente=i,this.ha={riflesso:!1},this.fondo=new de,this.camSpecchio=new ct,this.scenaQuad=new rn,this.camQuad=new qn(-1,1,1,-1,0,1);let a=new Ne;a.setAttribute("position",new ve([-1,-1,0,3,-1,0,-1,3,0],3)),a.setAttribute("uv",new ve([0,0,2,0,0,2],2)),this.quad=new ke(a,null),this.quad.frustumCulled=!1,this.scenaQuad.add(this.quad);let o=(l,A,c={})=>new xt({vertexShader:ef,fragmentShader:l,uniforms:A,defines:c,depthTest:!1,depthWrite:!1,blending:Qc,extensions:{derivatives:!0}});this.mAcqua=o(tf,{tBase:{value:null},tProf:{value:null},tRifl:{value:null},tOnde:{value:null},uInvVP:{value:new ye},uVP:{value:new ye},uRiflM:{value:new ye},uCentro:{value:new se},uPxOnde:{value:new se},uLato:{value:96},uPozza:{value:new E(0,0,12)},uCam:{value:new E},uAmbiente:{value:new de(1,1,1)},uCielo:{value:new de(0,0,0)},uPelo:{value:new de},uProfondo:{value:new de},uFondale:{value:new de},uLampoDir:{value:new E(0,1,0)},uSoleCol:{value:new de(0,0,0)},uPesci:{value:Array.from({length:UA*2},()=>new Ge)},uNPesci:{value:0},uRiflesso:{value:new se},uPiena:{value:new se},uCieloMix:{value:0},uRifra:{value:1},uFondo:{value:1},uPiega:{value:1},uLuccichio:{value:1},uSegni:{value:1},uSchiuma:{value:1},uFilo:{value:1},uLampade:Ir,uLampCol:LA,uLivello:{value:0},uTempo:{value:0}},{LAMPADE_MAX:Ir.value.length,PESCI_DATI:UA*2}),this.mOnde=o(nf,{t:{value:null},tIsola:{value:null},uPx:{value:new se},uAttrito:{value:.9955},uRaggio:{value:.1},uGocce:{value:Array.from({length:na},()=>new Ge)}},{GOCCE_MAX:na}),this.gocce=[],this.versoVista=new E,this.lato=96,this.centro=new se,this.mFiltro=o(rf,{t:{value:null},uSoglia:{value:hn.soglia},uGinocchio:{value:hn.soglia*.5},uSole:{value:n}}),this.mGiu=o(sf,{t:{value:null},uPx:{value:new se}}),this.mSu=o(af,{t:{value:null},tAlto:{value:null},uPx:{value:new se},uDispersione:{value:hn.dispersione}}),this.mFinale=o(of,{t:{value:null},tBloom:{value:null},uForza:{value:hn.intensita*.3},uAberrazione:{value:0},uTrasparente:{value:i?1:0}}),this.mFxaa=o(Af,{t:{value:null},uPx:{value:new se},uAcceso:{value:1}}),this.soleSuo=n,this.misura()}misura(){if(!this.usata)return;let e=this.r.getDrawingBufferSize(new se);if(e.x<1||e.y<1)return;let t=Math.round(e.x*this.scalaInterna),i=Math.round(e.y*this.scalaInterna);if(t===this.w&&i===this.h)return;this.libera(),this.w=t,this.h=i;let n={minFilter:mt,magFilter:mt,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1},s={...n,type:Ii,format:St};this.base=new ut(t,i,{...s,depthBuffer:!0}),this.base.depthTexture=new Jn(t,i,ei),this.composto=new ut(t,i,s),this.pronto=new ut(t,i,n),this.rifl=this.conAcqua?new ut(Math.max(2,t>>1),Math.max(2,i>>1),{...s,depthBuffer:!0}):null,this.giu=[],this.su=[];let a=Math.max(2,t>>1),o=Math.max(2,i>>1);for(let l=0;l<hn.livelli&&Math.min(a,o)>=8;l++)this.giu.push(new ut(a,o,s)),l<hn.livelli-1&&this.su.push(new ut(a,o,s)),a>>=1,o>>=1;this.su.length=Math.max(0,this.giu.length-1)}libera(){for(let e of[this.base,this.composto,this.pronto,this.rifl,...this.giu||[],...this.su||[]])e&&e.dispose();this.base&&this.base.depthTexture&&this.base.depthTexture.dispose(),this.base=this.composto=this.pronto=this.rifl=null,this.giu=[],this.su=[],this.w=this.h=0,this.specchioDi=null}passata(e,t){this.quad.material=e,this.r.setRenderTarget(t),this.r.render(this.scenaQuad,this.camQuad)}isola(e,t,i,n){this.centro.set(e,t),this.lato=i;let s=innerWidth<900?192:320;if(!this.onde){let l=()=>new ut(s,s,{type:Ii,format:St,minFilter:mt,magFilter:mt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});this.onde=[l(),l()],this.nOnde=s}let a=this.nOnde,o=new Uint8Array(a*a);for(let l=0;l<a;l++)for(let A=0;A<a;A++)n(e+((A+.5)/a-.5)*i,t+((l+.5)/a-.5)*i)&&(o[l*a+A]=255);this.terra&&this.terra.dispose(),this.terra=new Gs(o,a,a,Wc,fi),this.terra.minFilter=this.terra.magFilter=At,this.terra.needsUpdate=!0}tocca(e,t,i,n){this.gocce.length>=na*3&&this.gocce.shift(),this.gocce.push([(e-this.centro.x)/this.lato+.5,(t-this.centro.y)/this.lato+.5,i/this.lato,n])}passoOnde(){let e=this.mOnde.uniforms;e.t.value=this.onde[0].texture,e.tIsola.value=this.terra,e.uPx.value.set(1/this.nOnde,1/this.nOnde);for(let t=0;t<na;t++){let i=this.gocce.shift();i?e.uGocce.value[t].set(i[0],i[1],i[2],i[3]):e.uGocce.value[t].z=0}this.passata(this.mOnde,this.onde[1]),this.onde.reverse()}alleggerisci(){let e=[1.25,1,.85].find(t=>t<this.scalaInterna-.01);return e?(this.scalaInterna=e,this.misura(),!0):!1}appesantisci(){let e=[.85,1,1.25,1.5].find(t=>t>this.scalaInterna+.01&&t<=this.scalaBase+.01);return e?(this.scalaInterna=e,this.misura(),!0):!1}scena(e,t,{cielo:i=null,livello:n=0,specchio:s=!0}={}){if((!this.usata||!this.w)&&(this.usata=!0,this.misura()),!this.w)return;let a=this.r,o=Tr.value;Tr.value=this.emissivo;let l=a.getClearAlpha();a.getClearColor(this.fondo),i?a.setClearColor(i,1):a.setClearColor(0,0),t.updateMatrixWorld();let A=t.matrixWorld.elements.join()+t.projectionMatrix.elements.join()+n;if(this.conAcqua&&(s||A!==this.specchioDi)){this.specchioDi=A;let c=i?i.clone():null;a.setClearColor(0,0);let h=e.userData.stelle,u=h&&h.visible;h&&(h.visible=!!u&&!!this.stelleNelRiflesso),this.specchio(e,t,n),h&&(h.visible=u),c&&a.setClearColor(c,1)}a.setRenderTarget(this.base),a.clear(),a.render(e,t),a.setRenderTarget(null),a.setClearColor(this.fondo,l),Tr.value=o}specchio(e,t,i){let n=this.camSpecchio,s=this.r;t.updateMatrixWorld();let a=new E().setFromMatrixPosition(t.matrixWorld),o=t.getWorldDirection(new E),l=new E(0,1,0).applyQuaternion(t.quaternion);n.position.set(a.x,2*i-a.y,a.z),n.up.set(l.x,-l.y,l.z),n.lookAt(n.position.x+o.x,n.position.y-o.y,n.position.z+o.z),n.near=t.near,n.far=t.far,n.updateMatrixWorld(),n.projectionMatrix.copy(t.projectionMatrix),this.mAcqua.uniforms.uRiflM.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(n.projectionMatrix).multiply(n.matrixWorldInverse);let A=new Xt(new E(0,1,0),-i).applyMatrix4(n.matrixWorldInverse),c=new Ge(A.normal.x,A.normal.y,A.normal.z,A.constant),h=n.projectionMatrix.elements,u=new Ge((Math.sign(c.x)+h[8])/h[0],(Math.sign(c.y)+h[9])/h[5],-1,(1+h[10])/h[14]);c.multiplyScalar(2/c.dot(u)),h[2]=c.x,h[6]=c.y,h[10]=c.z+1-.003,h[14]=c.w,s.setRenderTarget(this.rifl),s.clear(),s.render(e,n)}pesci(e,t=1){let i=this.mAcqua.uniforms,n=Math.min(e.length,UA);i.uNPesci.value=n;for(let s=0;s<n;s++){let a=e[s];i.uPesci.value[s*2].set(a.x,a.z,Math.cos(a.ang),Math.sin(a.ang)),i.uPesci.value[s*2+1].set(a.s*t,a.fondo,a.fase,a.oro?1:0)}}regole(){let e=this.mFiltro.uniforms,t=Math.pow(Ye.soglia,2.2);if(e.uSoglia.value=t,e.uGinocchio.value=t*.5,this.conAcqua&&(e.uSole.value=Ye.sole/1.04),this.mSu.uniforms.uDispersione.value=.05+Ye.dispersione*.9,this.mFinale.uniforms.uForza.value=Ye.bloom*.3,this.mFinale.uniforms.uAberrazione.value=Ye.aberrazione,this.mFxaa.uniforms.uAcceso.value=Ye.fxaa?1:0,!this.conAcqua)return;let i=this.mAcqua.uniforms;i.uPelo.value.set(Ye.acquaVicino),i.uProfondo.value.set(Ye.acquaMezzo),i.uFondale.value.set(Ye.acquaBordo),i.uRiflesso.value.set(Ye.riflessoMin,Ye.riflessoMax),i.uPiena.value.set(Ye.pienaVicino,Ye.pienaBordo),i.uCieloMix.value=Ye.cieloMix,i.uRifra.value=Ye.rifrazione,i.uFondo.value=Ye.ondeFondo,i.uPiega.value=Ye.vuotoPiega,i.uLuccichio.value=Ye.luccichio,i.uSegni.value=Ye.segni,i.uSchiuma.value=Ye.schiuma,i.uFilo.value=Ye.filo,this.mOnde.uniforms.uAttrito.value=Ye.attrito}effetti(e,t={}){if(!this.base)return;let i=this.r;this.regole();let n=this.base;if(this.conAcqua){let A=this.mAcqua.uniforms;A.tBase.value=this.base.texture,A.tProf.value=this.base.depthTexture,A.tRifl.value=this.rifl.texture,e.updateMatrixWorld(),A.uInvVP.value.multiplyMatrices(e.matrixWorld,e.projectionMatrixInverse),A.uVP.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);let c=t.tempo??0;if(this.onde){let u=Math.min(4,Math.floor((c-(this.tempoOnde??c))*60));(this.tempoOnde===void 0||u>0)&&(this.tempoOnde=c);for(let p=0;p<u;p++)this.passoOnde();A.tOnde.value=this.onde[0].texture,A.uPxOnde.value.set(1/this.nOnde,1/this.nOnde),A.uCentro.value.copy(this.centro),A.uLato.value=this.lato}A.uCam.value.setFromMatrixPosition(e.matrixWorld);let h=e.getWorldDirection(this.versoVista);if(A.uLampoDir.value.set(h.x,-h.y,h.z).add(Lr.value).normalize(),A.uLivello.value=t.livello??0,A.uTempo.value=c,t.ambiente&&A.uAmbiente.value.setRGB(...t.ambiente),t.cielo&&A.uCielo.value.setRGB(...t.cielo),t.luce&&A.uSoleCol.value.setRGB(...t.luce),t.pozza&&(A.uPozza.value.set(t.pozza.x,t.pozza.z,t.pozza.r),this.mOnde.uniforms.uRaggio.value=t.pozza.r/this.lato),this.passata(this.mAcqua,this.composto),n=this.composto,this.aria){this.aria.bersaglio(this.base.depthTexture,this.w,this.h);let u=i.autoClear;i.autoClear=!1,i.setRenderTarget(this.composto),i.render(this.aria.scena,e),i.autoClear=u}if(this.sopra.children.length){for(let p of this.sopra.children){let d=p.material&&p.material.uniforms;d&&d.tProf&&(d.tProf.value=this.base.depthTexture,d.uRis.value.set(this.w,this.h),d.uProva.value=1)}let u=i.autoClear;i.autoClear=!1,i.setRenderTarget(this.composto),i.render(this.sopra,e),i.autoClear=u}}let s=this.giu.length;this.mFiltro.uniforms.t.value=n.texture,this.passata(this.mFiltro,this.giu[0]);for(let A=1;A<s;A++){let c=this.mGiu.uniforms;c.t.value=this.giu[A-1].texture,c.uPx.value.set(1/this.giu[A-1].width,1/this.giu[A-1].height),this.passata(this.mGiu,this.giu[A])}let a=this.giu[s-1];for(let A=s-2;A>=0;A--){let c=this.mSu.uniforms;c.t.value=a.texture,c.tAlto.value=this.giu[A].texture,c.uPx.value.set(1/a.width,1/a.height),this.passata(this.mSu,this.su[A]),a=this.su[A]}let o=this.mFinale.uniforms;o.t.value=n.texture,o.tBloom.value=a.texture;let l=Ye.fxaa&&this.r.getPixelRatio()*this.scalaInterna<1.49;this.passata(this.mFinale,l?this.pronto:null),l&&(this.mFxaa.uniforms.t.value=this.pronto.texture,this.mFxaa.uniforms.uPx.value.set(1/this.w,1/this.h),this.passata(this.mFxaa,null))}};var _h=["#33984b","#5d2c28","#edab50","#1e6f50","#391f21","#bf6f4a","#c42430","#f6ca9f","#134c4c","#5ac54f","#e69c69","#657392","#1c121c","#f9e6cf","#2a2f4e","#3d3d3d","#0c2e44","#ed7614","#424c6e","#e07438","#1a1932","#ffa214","#f68187","#ffffff","#b4b4b4","#5d5d5d","#92a1b9","#858585","#8e8e8e","#8a4836","#c64524","#ea323c","#0e071b","#929292"],Eh={"cella-a":{v:"IAGA/wD/IAGA/wABIAGg/gABIAGA/wD/IAGg/gABIAGg/gD/IAGg/gABIAEA/gABIAEA/gD/IAGg/gABIAEA/gD/IAGg/gD/4P6g/gAB4P6A/wAB4P6A/wD/4P6g/gAB4P6A/wD/4P6g/gD/4P4A/gAB4P6g/gAB4P6g/gD/4P4A/gAB4P6g/gD/4P4A/gD/AAGg/wABAAGg/wD/AP+g/wD/AAGg/wABAP+g/wD/AP+g/wABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAGg/iABAAGA/yABAP+A/yABAAGg/iABAP+A/yABAP+g/iABAAEA/iABAAGg/iABAP+g/iABAAEA/iABAP+g/iABAP8A/iABAP+A/+D+AAGA/+D+AAGg/uD+AP+A/+D+AAGg/uD+AP+g/uD+AAGg/uD+AAEA/uD+AP8A/uD+AAGg/uD+AP8A/uD+AP+g/uD+AAGg/wD/AAGg/wABIAGA/wABAAGg/wD/IAGA/wABIAGA/wD/4P6A/wABAP+g/wABAP+g/wD/4P6A/wABAP+g/wD/4P6A/wD/AAGA/yABAAGg/wABAP+g/wABAAGA/yABAP+g/wABAP+A/yABAP+g/wD/AAGg/wD/AAGA/+D+AP+g/wD/AAGA/+D+AP+A/+D+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAGg/uD+AAGA/+D+IAGA/wD/AAGg/uD+IAGA/wD/IAGg/gD/IAEA/gD/AAEA/uD+AAGg/uD+IAEA/gD/AAGg/uD+IAGg/gD/AAGA/yABAAGg/iABIAGg/gABAAGA/yABIAGg/gABIAGA/wABAAGg/iABAAEA/iABIAEA/gABAAGg/iABIAEA/gABIAGg/gABAP+A/+D+AP+g/uD+4P6g/gD/AP+A/+D+4P6g/gD/4P6A/wD/AP+g/uD+AP8A/uD+4P4A/gD/AP+g/uD+4P4A/gD/4P6g/gD/AP+g/iABAP+A/yAB4P6A/wABAP+g/iAB4P6A/wAB4P6g/gAB4P4A/gABAP8A/iABAP+g/iAB4P4A/gABAP+g/iAB4P6g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAGg/wABAAGA/yABIAGA/wABAP+g/wAB4P6A/wABAP+A/yABAAGg/wD/IAGA/wD/AAGA/+D+AP+g/wD/AP+A/+D+4P6A/wD/QAHg/+D+QAHg/yABQAFg/yABQAHg/+D+QAFg/yABQAFg/+D+wP5g/yABwP7g/yABwP7g/+D+wP5g/yABwP7g/+D+wP5g/+D+IAEAACABIAEAAOD+4P4AAOD+IAEAACAB4P4AAOD+4P4AACAB4P5A/+D+IAFA/+D+IAFA/yAB4P5A/+D+IAFA/yAB4P5A/yABIAFg/0ABIAHg/0AB4P7g/0ABIAFg/0AB4P7g/0AB4P5g/0AB4P7g/8D+IAHg/8D+IAFg/8D+4P7g/8D+IAFg/8D+4P5g/8D+IAEAAOD+IAEAACABQAHg/yABIAEAAOD+QAHg/yABQAHg/+D+wP7g/yAB4P4AACAB4P4AAOD+wP7g/yAB4P4AAOD+wP7g/+D+IAHg/0ABIAEAACAB4P4AACABIAHg/0AB4P4AACAB4P7g/0AB4P4AAOD+IAEAAOD+IAHg/8D+4P4AAOD+IAHg/8D+4P7g/8D+QAFg/yABIAFA/yABIAFA/+D+QAFg/yABIAFA/+D+QAFg/+D+4P5A/+D+4P5A/yABwP5g/yAB4P5A/+D+wP5g/yABwP5g/+D+4P5A/yABIAFA/yABIAFg/0AB4P5A/yABIAFg/0AB4P5g/0ABIAFg/8D+IAFA/+D+4P5A/+D+IAFg/8D+4P5A/+D+4P5g/8D+QAFg/+D+IAFg/8D+IAHg/8D+QAFg/+D+IAHg/8D+QAHg/+D+IAHg/0ABIAFg/0ABQAFg/yABIAHg/0ABQAFg/yABQAHg/yAB4P7g/8D+4P5g/8D+wP5g/+D+4P7g/8D+wP5g/+D+wP7g/+D+wP5g/yAB4P5g/0AB4P7g/0ABwP5g/yAB4P7g/0ABwP7g/yABIAFA/yABQAFg/yABIAFg/0AB4P5A/yAB4P5g/0ABwP5g/yABIAFA/+D+IAFg/8D+QAFg/+D+4P5A/+D+wP5g/+D+4P5g/8D+IAEAACABIAHg/0ABQAHg/yAB4P4AACABwP7g/yAB4P7g/0ABIAEAAOD+QAHg/+D+IAHg/8D+4P4AAOD+4P7g/8D+wP7g/+D+",c:"CgoFBQoKBQUKCh0dCgoFBQoKBQUKCgoKCgoKCgUFBQUFBQUFCgoFBQoKBQUKCgUFCgoFBQUFBQUKCgoKAAAAAAkJCQkAAAAACQkJCQkJCQkAAAAAAAAAAAAAAAAAAAAAAAAAAAkJCQk="},"cella-b":{v:"IAGA/wD/IAGA/wABIAGg/gABIAGA/wD/IAGg/gABIAGg/gD/IAGg/gABIAEA/gABIAEA/gD/IAGg/gABIAEA/gD/IAGg/gD/4P6g/gAB4P6A/wAB4P6A/wD/4P6g/gAB4P6A/wD/4P6g/gD/4P4A/gAB4P6g/gAB4P6g/gD/4P4A/gAB4P6g/gD/4P4A/gD/AAGg/wABAAGg/wD/AP+g/wD/AAGg/wABAP+g/wD/AP+g/wABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAGg/iABAAGA/yABAP+A/yABAAGg/iABAP+A/yABAP+g/iABAAEA/iABAAGg/iABAP+g/iABAAEA/iABAP+g/iABAP8A/iABAP+A/+D+AAGA/+D+AAGg/uD+AP+A/+D+AAGg/uD+AP+g/uD+AAGg/uD+AAEA/uD+AP8A/uD+AAGg/uD+AP8A/uD+AP+g/uD+AAGg/wD/AAGg/wABIAGA/wABAAGg/wD/IAGA/wABIAGA/wD/4P6A/wABAP+g/wABAP+g/wD/4P6A/wABAP+g/wD/4P6A/wD/AAGA/yABAAGg/wABAP+g/wABAAGA/yABAP+g/wABAP+A/yABAP+g/wD/AAGg/wD/AAGA/+D+AP+g/wD/AAGA/+D+AP+A/+D+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAGg/uD+AAGA/+D+IAGA/wD/AAGg/uD+IAGA/wD/IAGg/gD/IAEA/gD/AAEA/uD+AAGg/uD+IAEA/gD/AAGg/uD+IAGg/gD/AAGA/yABAAGg/iABIAGg/gABAAGA/yABIAGg/gABIAGA/wABAAGg/iABAAEA/iABIAEA/gABAAGg/iABIAEA/gABIAGg/gABAP+A/+D+AP+g/uD+4P6g/gD/AP+A/+D+4P6g/gD/4P6A/wD/AP+g/uD+AP8A/uD+4P4A/gD/AP+g/uD+4P4A/gD/4P6g/gD/AP+g/iABAP+A/yAB4P6A/wABAP+g/iAB4P6A/wAB4P6g/gAB4P4A/gABAP8A/iABAP+g/iAB4P4A/gABAP+g/iAB4P6g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAGg/wABAAGA/yABIAGA/wABAP+g/wAB4P6A/wABAP+A/yABAAGg/wD/IAGA/wD/AAGA/+D+AP+g/wD/AP+A/+D+4P6A/wD/QAHg/+D+QAHg/yABQAFg/yABQAHg/+D+QAFg/yABQAFg/+D+wP5g/yABwP7g/yABwP7g/+D+wP5g/yABwP7g/+D+wP5g/+D+IAEAACABIAEAAOD+4P4AAOD+IAEAACAB4P4AAOD+4P4AACAB4P5A/+D+IAFA/+D+IAFA/yAB4P5A/+D+IAFA/yAB4P5A/yABIAFg/0ABIAHg/0AB4P7g/0ABIAFg/0AB4P7g/0AB4P5g/0AB4P7g/8D+IAHg/8D+IAFg/8D+4P7g/8D+IAFg/8D+4P5g/8D+IAEAAOD+IAEAACABQAHg/yABIAEAAOD+QAHg/yABQAHg/+D+wP7g/yAB4P4AACAB4P4AAOD+wP7g/yAB4P4AAOD+wP7g/+D+IAHg/0ABIAEAACAB4P4AACABIAHg/0AB4P4AACAB4P7g/0AB4P4AAOD+IAEAAOD+IAHg/8D+4P4AAOD+IAHg/8D+4P7g/8D+QAFg/yABIAFA/yABIAFA/+D+QAFg/yABIAFA/+D+QAFg/+D+4P5A/+D+4P5A/yABwP5g/yAB4P5A/+D+wP5g/yABwP5g/+D+4P5A/yABIAFA/yABIAFg/0AB4P5A/yABIAFg/0AB4P5g/0ABIAFg/8D+IAFA/+D+4P5A/+D+IAFg/8D+4P5A/+D+4P5g/8D+QAFg/+D+IAFg/8D+IAHg/8D+QAFg/+D+IAHg/8D+QAHg/+D+IAHg/0ABIAFg/0ABQAFg/yABIAHg/0ABQAFg/yABQAHg/yAB4P7g/8D+4P5g/8D+wP5g/+D+4P7g/8D+wP5g/+D+wP7g/+D+wP5g/yAB4P5g/0AB4P7g/0ABwP5g/yAB4P7g/0ABwP7g/yABIAFA/yABQAFg/yABIAFg/0AB4P5A/yAB4P5g/0ABwP5g/yABIAFA/+D+IAFg/8D+QAFg/+D+4P5A/+D+wP5g/+D+4P5g/8D+IAEAACABIAHg/0ABQAHg/yAB4P4AACABwP7g/yAB4P7g/0ABIAEAAOD+QAHg/+D+IAHg/8D+4P4AAOD+4P7g/8D+wP7g/+D+",c:"CgoFBQoKBQUKCh0dCgoFBQoKBQUKCgoKCgoKCgUFBQUFBQUFCgoFBQoKBQUKCgUFCgoFBQUFBQUKCgoKAwMDAwAAAAADAwMDAAAAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAA="},"cella-c":{v:"IAGA/wD/IAGA/wABIAGg/gABIAGA/wD/IAGg/gABIAGg/gD/IAGg/gABIAEA/gABIAEA/gD/IAGg/gABIAEA/gD/IAGg/gD/4P6g/gAB4P6A/wAB4P6A/wD/4P6g/gAB4P6A/wD/4P6g/gD/4P4A/gAB4P6g/gAB4P6g/gD/4P4A/gAB4P6g/gD/4P4A/gD/AAGg/wABAAGg/wD/AP+g/wD/AAGg/wABAP+g/wD/AP+g/wABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAGg/iABAAGA/yABAP+A/yABAAGg/iABAP+A/yABAP+g/iABAAEA/iABAAGg/iABAP+g/iABAAEA/iABAP+g/iABAP8A/iABAP+A/+D+AAGA/+D+AAGg/uD+AP+A/+D+AAGg/uD+AP+g/uD+AAGg/uD+AAEA/uD+AP8A/uD+AAGg/uD+AP8A/uD+AP+g/uD+AAGg/wD/AAGg/wABIAGA/wABAAGg/wD/IAGA/wABIAGA/wD/4P6A/wABAP+g/wABAP+g/wD/4P6A/wABAP+g/wD/4P6A/wD/AAGA/yABAAGg/wABAP+g/wABAAGA/yABAP+g/wABAP+A/yABAP+g/wD/AAGg/wD/AAGA/+D+AP+g/wD/AAGA/+D+AP+A/+D+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAGg/uD+AAGA/+D+IAGA/wD/AAGg/uD+IAGA/wD/IAGg/gD/IAEA/gD/AAEA/uD+AAGg/uD+IAEA/gD/AAGg/uD+IAGg/gD/AAGA/yABAAGg/iABIAGg/gABAAGA/yABIAGg/gABIAGA/wABAAGg/iABAAEA/iABIAEA/gABAAGg/iABIAEA/gABIAGg/gABAP+A/+D+AP+g/uD+4P6g/gD/AP+A/+D+4P6g/gD/4P6A/wD/AP+g/uD+AP8A/uD+4P4A/gD/AP+g/uD+4P4A/gD/4P6g/gD/AP+g/iABAP+A/yAB4P6A/wABAP+g/iAB4P6A/wAB4P6g/gAB4P4A/gABAP8A/iABAP+g/iAB4P4A/gABAP+g/iAB4P6g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAGg/wABAAGA/yABIAGA/wABAP+g/wAB4P6A/wABAP+A/yABAAGg/wD/IAGA/wD/AAGA/+D+AP+g/wD/AP+A/+D+4P6A/wD/QAHg/+D+QAHg/yABQAFg/yABQAHg/+D+QAFg/yABQAFg/+D+wP5g/yABwP7g/yABwP7g/+D+wP5g/yABwP7g/+D+wP5g/+D+IAEAACABIAEAAOD+4P4AAOD+IAEAACAB4P4AAOD+4P4AACAB4P5A/+D+IAFA/+D+IAFA/yAB4P5A/+D+IAFA/yAB4P5A/yABIAFg/0ABIAHg/0AB4P7g/0ABIAFg/0AB4P7g/0AB4P5g/0AB4P7g/8D+IAHg/8D+IAFg/8D+4P7g/8D+IAFg/8D+4P5g/8D+IAEAAOD+IAEAACABQAHg/yABIAEAAOD+QAHg/yABQAHg/+D+wP7g/yAB4P4AACAB4P4AAOD+wP7g/yAB4P4AAOD+wP7g/+D+IAHg/0ABIAEAACAB4P4AACABIAHg/0AB4P4AACAB4P7g/0AB4P4AAOD+IAEAAOD+IAHg/8D+4P4AAOD+IAHg/8D+4P7g/8D+QAFg/yABIAFA/yABIAFA/+D+QAFg/yABIAFA/+D+QAFg/+D+4P5A/+D+4P5A/yABwP5g/yAB4P5A/+D+wP5g/yABwP5g/+D+4P5A/yABIAFA/yABIAFg/0AB4P5A/yABIAFg/0AB4P5g/0ABIAFg/8D+IAFA/+D+4P5A/+D+IAFg/8D+4P5A/+D+4P5g/8D+QAFg/+D+IAFg/8D+IAHg/8D+QAFg/+D+IAHg/8D+QAHg/+D+IAHg/0ABIAFg/0ABQAFg/yABIAHg/0ABQAFg/yABQAHg/yAB4P7g/8D+4P5g/8D+wP5g/+D+4P7g/8D+wP5g/+D+wP7g/+D+wP5g/yAB4P5g/0AB4P7g/0ABwP5g/yAB4P7g/0ABwP7g/yABIAFA/yABQAFg/yABIAFg/0AB4P5A/yAB4P5g/0ABwP5g/yABIAFA/+D+IAFg/8D+QAFg/+D+4P5A/+D+wP5g/+D+4P5g/8D+IAEAACABIAHg/0ABQAHg/yAB4P4AACABwP7g/yAB4P7g/0ABIAEAAOD+QAHg/+D+IAHg/8D+4P4AAOD+4P7g/8D+wP7g/+D+",c:"CgoFBQoKBQUKCh0dCgoFBQoKBQUKCgoKCgoKCgUFBQUFBQUFCgoFBQoKBQUKCgUFCgoFBQUFBQUKCgoKCAgICAMDAwMICAgIAwMDAwMDAwMICAgICAgICAgICAgICAgICAgICAMDAwM="},"cella-terra":{v:"IAEAAAD/IAEAAAABIAEA/gABIAEAAAD/IAEA/gABIAEA/gD/4P4A/gAB4P4AAAAB4P4AAAD/4P4A/gAB4P4AAAD/4P4A/gD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAEA/iABAAEAACABAP8AACABAAEA/iABAP8AACABAP8A/iABAP8AAOD+AAEAAOD+AAEA/uD+AP8AAOD+AAEA/uD+AP8A/uD+AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+IAEA/gD/AAEA/uD+AAEAAOD+IAEA/gD/AAEAAOD+IAEAAAD/AAEAACABAAEA/iABIAEA/gABAAEAACABIAEA/gABIAEAAAABAP8AAOD+AP8A/uD+4P4A/gD/AP8AAOD+4P4A/gD/4P4AAAD/4P4A/gABAP8A/iABAP8AACAB4P4A/gABAP8AACAB4P4AAAABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAEgAAABAAEAACABIAEAAAABAP8gAAAB4P4AAAABAP8AACABAAEgAAD/IAEAAAD/AAEAAOD+AP8gAAD/AP8AAOD+4P4AAAD/",c:"BQUFBQoKHR0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU="},"cella-pietra":{v:"IAEAAEAAIAEAAAABIAEg/wABIAEAAEAAIAEg/wABIAEg/0AAIAEAACAAIAEAAEAAIAEg/0AAIAEAACAAIAEg/0AAIAEg/yAAIAEAAAD/IAEAACAAIAEg/yAAIAEAAAD/IAEg/yAAIAEg/wD/IAEg/wABIAEA/wABIAEA/wD/IAEg/wABIAEA/wD/IAEg/wD/IAEA/wABIAEA/gABIAEA/qD/IAEA/wABIAEA/qD/IAEA/6D/IAEA/6D/IAEA/qD/IAEA/oD/IAEA/6D/IAEA/oD/IAEA/4D/IAEA/4D/IAEA/oD/IAEA/gD/IAEA/4D/IAEA/gD/IAEA/wD/4P4AAMD/4P4AAAD/4P4g/wD/4P4AAMD/4P4g/wD/4P4g/8D/4P4AAOD/4P4AAMD/4P4g/8D/4P4AAOD/4P4g/8D/4P4g/+D/4P4g/wAB4P4AAAAB4P4AAOD/4P4g/wAB4P4AAOD/4P4g/+D/4P4A/wAB4P4g/wAB4P4g/wD/4P4A/wAB4P4g/wD/4P4A/wD/4P4A/wD/4P4A/gD/4P4A/mAA4P4A/wD/4P4A/mAA4P4A/2AA4P4A/2AA4P4A/mAA4P4A/oAA4P4A/2AA4P4A/oAA4P4A/4AA4P4A/gAB4P4A/wAB4P4A/4AA4P4A/gAB4P4A/4AA4P4A/oAAAAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABwP8AACABAP8AACABAP8g/yABwP8AACABAP8g/yABwP8g/yAB4P8AACABwP8AACABwP8g/yAB4P8AACABwP8g/yAB4P8g/yABAAEg/yABAAEAACAB4P8AACABAAEg/yAB4P8AACAB4P8g/yABAAEA/yABAAEg/yABAP8g/yABAAEA/yABAP8g/yABAP8A/yABAP8A/yABAP8A/iABYAAA/iABAP8A/yABYAAA/iABYAAA/yABYAAA/yABYAAA/iABgAAA/iABYAAA/yABgAAA/iABgAAA/yABAAEA/iABAAEA/yABgAAA/yABAAEA/iABgAAA/yABgAAA/iABQAAAAOD+AAEAAOD+AAEg/+D+QAAAAOD+AAEg/+D+QAAg/+D+IAAAAOD+QAAAAOD+QAAg/+D+IAAAAOD+QAAg/+D+IAAg/+D+AP8AAOD+IAAAAOD+IAAg/+D+AP8AAOD+IAAg/+D+AP8g/+D+AAEg/+D+AAEA/+D+AP8A/+D+AAEg/+D+AP8A/+D+AP8g/+D+AAEA/+D+AAEA/uD+oP8A/uD+AAEA/+D+oP8A/uD+oP8A/+D+oP8A/+D+oP8A/uD+gP8A/uD+oP8A/+D+gP8A/uD+gP8A/+D+gP8A/+D+gP8A/uD+AP8A/uD+gP8A/+D+AP8A/uD+AP8A/+D+AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/AP8gAMD/AP8gAAD/4P4AAAD/AP8gAMD/4P4AAAD/4P4AAMD/AP8gAOD/AP8gAMD/4P4AAMD/AP8gAOD/4P4AAMD/4P4AAOD/4P4AAAABAP8gAAABAP8gAOD/4P4AAAABAP8gAOD/4P4AAOD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/WAA4P4A/mAAAP/g/QD/4P4A/mAA4P4A/gD/AP/g/WAAAP/g/YAA4P4A/oAAAP/g/WAA4P4A/oAA4P4A/mAAAP/g/YAAAP/g/QAB4P4A/gABAP/g/YAA4P4A/gAB4P4A/oAAAP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+IAEA/gD/AAEA/uD+AAEAAOD+IAEA/gD/AAEAAOD+IAEAAAD/AAEAACABAAEA/iABIAEA/gABAAEAACABIAEA/gABIAEAAAABAP8AAOD+AP8g/+D+4P4g/wD/AP8AAOD+4P4g/wD/4P4AAAD/AP8g/+D+AP8A/+D+4P4A/wD/AP8g/+D+4P4A/wD/4P4g/wD/AP8A/+D+AP8A/uD+4P4A/gD/AP8A/+D+4P4A/gD/4P4A/wD/AP8g/yABAP8AACAB4P4AAAABAP8g/yAB4P4AAAAB4P4g/wABAP8A/yABAP8g/yAB4P4g/wABAP8A/yAB4P4g/wAB4P4A/wAB4P4A/gABAP8A/iABAP8A/yAB4P4A/gABAP8A/yAB4P4A/wABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAEgAAABAAEAACABIAEAAAABAP8gAAAB4P4AAAABAP8AACABAAEgAAD/IAEAAAD/AAEAAOD+AP8gAAD/AP8AAOD+4P4AAAD/",c:"CwsSEgsLEhILCxISCwsLCxISCwsSEgsLEhILCxoaEhILCxISCwsSEgsLEhILCwsLEhILCxISCwsSEgsLCwsLCxISCwsLCwsLCwsLCxISCwsLCwsLCwsLCwsLEhILCwsLEhILCwsLCwsLCwsL"},"cella-sabbia":{v:"IAEAAAD/IAEAAAABIAHg/wABIAEAAAD/IAHg/wABIAHg/wD/IAHg/wABIAFg/wABIAFg/wD/IAHg/wABIAFg/wD/IAHg/wD/IAFg/wABIAEg/wABIAEg/wD/IAFg/wABIAEg/wD/IAFg/wD/IAEg/wABIAHg/gABIAHg/qAAIAEg/wABIAHg/qAAIAEg/6AAIAEg/6AAIAHg/qAAIAHg/mAAIAEg/6AAIAHg/mAAIAEg/2AAIAEg/2AAIAHg/mAAIAHg/qD/IAEg/2AAIAHg/qD/IAEg/6D/IAEg/6D/IAHg/qD/IAHg/mD/IAEg/6D/IAHg/mD/IAEg/2D/IAEg/2D/IAHg/mD/IAHg/gD/IAEg/2D/IAHg/gD/IAEg/wD/IAHg/gABIAEA/gABIAEA/gD/IAHg/gABIAEA/gD/IAHg/gD/4P7g/wAB4P4AAAAB4P4AAAD/4P7g/wAB4P4AAAD/4P7g/wD/4P5g/wAB4P7g/wAB4P7g/wD/4P5g/wAB4P7g/wD/4P5g/wD/4P4g/wAB4P5g/wAB4P5g/wD/4P4g/wAB4P5g/wD/4P4g/wD/4P4g/wD/4P7g/gD/4P7g/mD/4P4g/wD/4P7g/mD/4P4g/2D/4P4g/2D/4P7g/mD/4P7g/qD/4P4g/2D/4P7g/qD/4P4g/6D/4P4g/6D/4P7g/qD/4P7g/mAA4P4g/6D/4P7g/mAA4P4g/2AA4P4g/2AA4P7g/mAA4P7g/qAA4P4g/2AA4P7g/qAA4P4g/6AA4P7g/gAB4P4g/wAB4P4g/6AA4P7g/gAB4P4g/6AA4P7g/qAA4P4A/gAB4P7g/gAB4P7g/gD/4P4A/gAB4P7g/gD/4P4A/gD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAHg/yABAAEAACABAP8AACABAAHg/yABAP8AACABAP/g/yABAAFg/yABAAHg/yABAP/g/yABAAFg/yABAP/g/yABAP9g/yABAAEg/yABAAFg/yABAP9g/yABAAEg/yABAP9g/yABAP8g/yABAP8g/yABAP/g/iABYP/g/iABAP8g/yABYP/g/iABYP8g/yABYP8g/yABYP/g/iABoP/g/iABYP8g/yABoP/g/iABoP8g/yABoP8g/yABoP/g/iABYADg/iABoP8g/yABYADg/iABYAAg/yABYAAg/yABYADg/iABoADg/iABYAAg/yABoADg/iABoAAg/yABAAHg/iABAAEg/yABoAAg/yABAAHg/iABoAAg/yABoADg/iABAAEA/iABAAHg/iABAP/g/iABAAEA/iABAP/g/iABAP8A/iABAP8AAOD+AAEAAOD+AAHg/+D+AP8AAOD+AAHg/+D+AP/g/+D+AAHg/+D+AAFg/+D+AP9g/+D+AAHg/+D+AP9g/+D+AP/g/+D+AAFg/+D+AAEg/+D+AP8g/+D+AAFg/+D+AP8g/+D+AP9g/+D+AAEg/+D+AAHg/uD+oADg/uD+AAEg/+D+oADg/uD+oAAg/+D+oAAg/+D+oADg/uD+YADg/uD+oAAg/+D+YADg/uD+YAAg/+D+YAAg/+D+YADg/uD+oP/g/uD+YAAg/+D+oP/g/uD+oP8g/+D+oP8g/+D+oP/g/uD+YP/g/uD+oP8g/+D+YP/g/uD+YP8g/+D+YP8g/+D+YP/g/uD+AP/g/uD+YP8g/+D+AP/g/uD+AP8g/+D+AAHg/uD+AAEA/uD+AP8A/uD+AAHg/uD+AP8A/uD+AP/g/uD+AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAHg/+D+AAEAAOD+IAEAAAD/AAHg/+D+IAEAAAD/IAHg/wD/AAFg/+D+AAHg/+D+IAHg/wD/AAFg/+D+IAHg/wD/IAFg/wD/AAEg/+D+AAFg/+D+IAFg/wD/AAEg/+D+IAFg/wD/IAEg/wD/AAHg/uD+AAEg/+D+IAEg/wD/AAHg/uD+IAEg/wD/IAHg/gD/IAEA/gD/AAEA/uD+AAHg/uD+IAEA/gD/AAHg/uD+IAHg/gD/AAEAACABAAHg/yABIAHg/wABAAEAACABIAHg/wABIAEAAAABAAHg/yABAAFg/yABIAFg/wABAAHg/yABIAFg/wABIAHg/wABAAFg/yABAAEg/yABIAEg/wABAAFg/yABIAEg/wABIAFg/wABAAEg/yABAAHg/iABIAHg/gABAAEg/yABIAHg/gABIAEg/wABAAHg/iABAAEA/iABIAEA/gABAAHg/iABIAEA/gABIAHg/gABAP8AAOD+AP/g/+D+4P7g/wD/AP8AAOD+4P7g/wD/4P4AAAD/AP/g/+D+AP9g/+D+4P5g/wD/AP/g/+D+4P5g/wD/4P7g/wD/AP9g/+D+AP8g/+D+4P4g/wD/AP9g/+D+4P4g/wD/4P5g/wD/AP8g/+D+AP/g/uD+4P7g/gD/AP8g/+D+4P7g/gD/4P4g/wD/AP/g/uD+AP8A/uD+4P4A/gD/AP/g/uD+4P4A/gD/4P7g/gD/AP/g/yABAP8AACAB4P4AAAABAP/g/yAB4P4AAAAB4P7g/wABAP9g/yABAP/g/yAB4P7g/wABAP9g/yAB4P7g/wAB4P5g/wABAP8g/yABAP9g/yAB4P5g/wABAP8g/yAB4P5g/wAB4P4g/wABAP/g/iABAP8g/yAB4P4g/wABAP/g/iAB4P4g/wAB4P7g/gAB4P4A/gABAP8A/iABAP/g/iAB4P4A/gABAP/g/iAB4P7g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAEgAAABAAEAACABIAEAAAABAP8gAAAB4P4AAAABAP8AACABAAEgAAD/IAEAAAD/AAEAAOD+AP8gAAD/AP8AAOD+4P4AAAD/",c:"BwcNDQcHDQ0HBw0NBwcNDQcHBwcNDQcHDQ0HBw0NBwcNDQcHDQ0KCgcHDQ0HBw0NBwcNDQcHDQ0HBwcHDQ0HBw0NBwcNDQcHDQ0HBwcHBwcHBwcHBwcHBwcHBwcHBw0NBwcNDQcHBwcNDQcHDQ0HBwcHDQ0HBw0NBwcHBw0NBwcNDQcHBwcHBwcHBwc="},albero:{v:"zf4AAP3/X/8AAKL//P8AAP3/zf4AAP3//P9lAP3/X/8AAKL/X/8AAKL/Zf8AAPf+/P8AAP3/X/8AAKL//P9lAP3/Zf8AAPf+Zf8AAPf+/P8AAEf//P8AAP3/Zf8AAPf+/P9lAP3//P8AAEf//P8AAEf/kwAAAPf+/P8AAP3//P8AAEf//P9lAP3/kwAAAPf+kwAAAPf+mQAAAKL//P8AAP3/kwAAAPf+/P9lAP3/mQAAAKL/mQAAAKL/KwEAAP3//P8AAP3/mQAAAKL//P9lAP3/KwEAAP3/KwEAAP3/mQAAAFgA/P8AAP3/KwEAAP3//P9lAP3/mQAAAFgAmQAAAFgAkwAAAAMB/P8AAP3/mQAAAFgA/P9lAP3/kwAAAAMBkwAAAAMB/P8AALMA/P8AAP3/kwAAAAMB/P9lAP3//P8AALMA/P8AALMAZf8AAAMB/P8AAP3//P8AALMA/P9lAP3/Zf8AAAMBZf8AAAMBX/8AAFgA/P8AAP3/Zf8AAAMB/P9lAP3/X/8AAFgAX/8AAFgAzf4AAP3//P8AAP3/X/8AAFgA/P9lAP3/zf4AAP3/tf8AALb//P8AAJj//P8AAP3/l/8AAP3/tf8AALb//P8AAP3/tf8AAEQAl/8AAP3//P8AAP3//P8AAGIAtf8AAEQA/P8AAP3/QwAAAEQA/P8AAGIA/P8AAP3/YQAAAP3/QwAAAEQA/P8AAP3/QwAAALb/YQAAAP3//P8AAP3//P8AAJj/QwAAALb//P8AAP3//P9hAZj/tf9hAbb//P9hAf3/tf9hAbb/l/9hAf3//P9hAf3/l/9hAf3/tf9hAUQA/P9hAf3/tf9hAUQA/P9hAWIA/P9hAf3//P9hAWIAQwBhAUQA/P9hAf3/QwBhAUQAYQBhAf3//P9hAf3/YQBhAf3/QwBhAbb//P9hAf3/QwBhAbb//P9hAZj//P9hAf3//P8AAJj/tf8AALb/tf8AALb/tf8AALb/l/8AAP3/l/8AAP3/l/8AAP3/tf8AAEQAtf8AAEQAtf8AAEQA/P8AAGIA/P8AAGIA/P8AAGIAQwAAAEQAQwAAAEQAQwAAAEQAYQAAAP3/YQAAAP3/YQAAAP3/QwAAALb/QwAAALb/QwAAALb//P8AAJj//P8AAJj//P8AAJj/tf8AALb/tf9hAbb//P8AAJj/tf9hAbb//P9hAZj/tf8AALb/l/8AAP3/l/9hAf3/tf8AALb/l/9hAf3/tf9hAbb/l/8AAP3/tf8AAEQAtf9hAUQAl/8AAP3/tf9hAUQAl/9hAf3/tf8AAEQA/P8AAGIA/P9hAWIAtf8AAEQA/P9hAWIAtf9hAUQA/P8AAGIAQwAAAEQAQwBhAUQA/P8AAGIAQwBhAUQA/P9hAWIAQwAAAEQAYQAAAP3/YQBhAf3/QwAAAEQAYQBhAf3/QwBhAUQAYQAAAP3/QwAAALb/QwBhAbb/YQAAAP3/QwBhAbb/YQBhAf3/QwAAALb//P8AAJj//P9hAZj/QwAAALb//P9hAZj/QwBhAbb//P9hAZj/tf9hAbb/tf9hAbb/tf9hAbb/l/9hAf3/l/9hAf3/l/9hAf3/tf9hAUQAtf9hAUQAtf9hAUQA/P9hAWIA/P9hAWIA/P9hAWIAQwBhAUQAQwBhAUQAQwBhAUQAYQBhAf3/YQBhAf3/YQBhAf3/QwBhAbb/QwBhAbb/QwBhAbb//P9hAZj//P9hAZj/nAFTAp0B/P9TAkoCowAXAnsC/P9TAkoC/P8XAsACowAXAnsCowCQAo8B/P+QAtQB/P9TAkoCnAFTAp0BSQGQAkoBowCQAo8B8AEXAvEBnAFTAp0BSQEXAjYCnAFTAp0BowAXAnsCSQEXAjYCowCQAo8B/P9TAkoCnAFTAp0B/P+5AdQBowAXAnsC/P8XAsACSQG5AUoB8AEXAvEBSQEXAjYCSQEXAjYCowAXAnsCSQG5AUoBowBbAaQA/P+5AdQB/P9bAekAowAXAnsCowBbAaQASQG5AUoB/P/8AP3/owBbAaQA/P9bAekA/P+5AdQBowBbAaQAowAXAnsC/P+QAtQBr/6QAkoBXP5TAp0BAv8XAlgCXP5TAp0BCf4XAvEBXP5TAp0BAv8XAlgC/P9TAkoC/P9TAkoCAv8XAlgC/P8XAsAC/P+QAtQBXP5TAp0B/P9TAkoCr/65AUoB/P+5AdQBAv8XAlgCAv8XAlgC/P+5AdQB/P8XAsACr/65AUoBAv8XAlgCCf4XAvEB/P9bAekAr/65AUoBVv9bAaQAVv9bAaQA/P/8AP3//P9bAekA/P+5AdQBr/65AUoB/P9bAekAxP0XAkoBr/1TAv3/f/0XAqQAr/1TAv3/Ov0XAv3/f/0XAqQAav6QAqQAJf6QAv3/r/1TAv3/XP5TAp0Br/6QAkoBav6QAqQACf4XAvEBXP5TAp0BxP0XAkoBXP5TAp0Br/1TAv3/xP0XAkoBav6QAqQAr/1TAv3/XP5TAp0BJf65Af3/f/0XAqQAOv0XAv3/r/65AUoBCf4XAvEBxP0XAkoBxP0XAkoBf/0XAqQAr/65AUoBVv9bAaQAJf65Af3/Ef9bAf3/Vv9bAaQAr/65AUoBf/0XAqQAEf9bAf3//P/8AP3/Vv9bAaQAJf65Af3/Vv9bAaQAf/0XAqQAof0XAgP/r/1TAv3/Cf4XAgn+r/6QArD+Cf4XAgn+r/1TAv3/r/6QArD+r/1TAv3/Jf6QAv3/of0XAgP/Ov0XAv3/r/1TAv3/r/65AbD+Jf65Af3/of0XAgP/of0XAgP/Jf65Af3/Ov0XAv3/r/65AbD+of0XAgP/Cf4XAgn+Ef9bAf3/r/65AbD+Vv9bAVf/Vv9bAVf//P/8AP3/Ef9bAf3/Jf65Af3/r/65AbD+Ef9bAf3/Av8XAqL9/P+QAib+/P8XAjv9Cf4XAgn+r/6QArD+Av8XAqL9/P+QAib+Av8XAqL9r/6QArD+Av8XAqL9/P8XAjv9/P+5ASb+Av8XAqL9r/65AbD+Cf4XAgn+r/65AbD+Av8XAqL9/P+5ASb+Vv9bAVf//P9bARL//P/8AP3/Vv9bAVf/r/65AbD+/P+5ASb+/P9bARL/Vv9bAVf//P+5ASb+9gAXAqL9SQGQArD+8AEXAgn+/P8XAjv9/P+QAib+9gAXAqL9SQGQArD+9gAXAqL9/P+QAib+SQG5AbD+/P+5ASb+9gAXAqL99gAXAqL9/P+5ASb+/P8XAjv9SQG5AbD+9gAXAqL98AEXAgn+/P9bARL/SQG5AbD+owBbAVf/owBbAVf//P/8AP3//P9bARL//P+5ASb+SQG5AbD+/P9bARL/VwIXAgP/0wGQAv3/vwIXAv3/8AEXAgn+SQGQArD+VwIXAgP/0wGQAv3/VwIXAgP/SQGQArD+VwIXAgP/vwIXAv3/0wG5Af3/VwIXAgP/SQG5AbD+8AEXAgn+SQG5AbD+VwIXAgP/0wG5Af3/owBbAVf/6ABbAf3//P/8AP3/owBbAVf/SQG5AbD+0wG5Af3/6ABbAf3/owBbAVf/0wG5Af3/SQG5AUoB0wG5Af3/VwIXAvcAVwIXAvcA0wG5Af3/vwIXAv3/SQG5AUoBVwIXAvcA8AEXAvEB6ABbAf3/SQG5AUoBowBbAaQAowBbAaQA/P/8AP3/6ABbAf3/0wG5Af3/SQG5AUoB6ABbAf3/0wGQAv3/SQGQAkoBnAFTAp0BVwIXAvcAnAFTAp0B8AEXAvEBVwIXAvcAvwIXAv3/nAFTAp0B0wGQAv3/nAFTAp0BvwIXAv3/owCQAo8Bav6QAqQAr/6QAkoBJf6QAv3/av6QAqQAr/6QArD+av6QAqQA/P+QAib+r/6QArD+/P+QAtQBowCQAo8Br/6QAkoB0wGQAv3/owCQAo8BSQGQAkoBav6QAqQASQGQArD+/P+QAib+0wGQAv3/SQGQArD+owCQAo8BowCQAo8BSQGQArD+av6QAqQAQwFQA0QB/P9QA8wBfwATA/IB/P9QA8wB/P8TAygCfwATA/IBfwCMAzkB/P+MA28B/P9QA8wBQwFQA0QBAgGMAwMBfwCMAzkBhQETA4YBQwFQA0QBAgETA7wBQwFQA0QBfwATA/IBAgETA7wBfwCMAzkB/P9QA8wBQwFQA0QB/P+1Am8BfwATA/IB/P8TAygCAgG1AgMBhQETA4YBAgETA7wBAgETA7wBfwATA/IBAgG1AgMBfwBXAoAA/P+1Am8B/P9XArYAfwATA/IBfwBXAoAAAgG1AgMB/P/5Af3/fwBXAoAA/P9XArYA/P+1Am8BfwBXAoAAfwATA/IB/P+MA28B9v6MAwMBtf5QA0QBOP8TA9cBtf5QA0QBdP4TA4YBtf5QA0QBOP8TA9cB/P9QA8wB/P9QA8wBOP8TA9cB/P8TAygC/P+MA28Btf5QA0QB/P9QA8wB9v61AgMB/P+1Am8BOP8TA9cBOP8TA9cB/P+1Am8B/P8TAygC9v61AgMBOP8TA9cBdP4TA4YB/P9XArYA9v61AgMBef9XAoAAef9XAoAA/P/5Af3//P9XArYA/P+1Am8B9v61AgMB/P9XArYAPf4TAwMBLf5QA/3/B/4TA4AALf5QA/3/0f0TA/3/B/4TA4AAwP6MA4AAiv6MA/3/Lf5QA/3/tf5QA0QB9v6MAwMBwP6MA4AAdP4TA4YBtf5QA0QBPf4TAwMBtf5QA0QBLf5QA/3/Pf4TAwMBwP6MA4AALf5QA/3/tf5QA0QBiv61Av3/B/4TA4AA0f0TA/3/9v61AgMBdP4TA4YBPf4TAwMBPf4TAwMBB/4TA4AA9v61AgMBrv6nAhEAiv61Av3/Q/9XAv3/rv6nAhEAQ/9XAv3/Rf9XAgIAUP9eAkEARv9XAgUAX/9XAkAA9v6HAioA8f6DAgoARf9XAgIA9v6HAioARf9XAgIARv9XAgUA9v6HAioARv9XAgUAS/9aAiIA3/6TAiwArv6nAhEA8f6DAgoA3/6TAiwA8f6DAgoA9v6HAioAGP98AkYAE/94AicAS/9aAiIAGP98AkYAS/9aAiIAUP9eAkEAEf+AAkcA3/6TAiwAE/94AicAEf+AAkcAE/94AicAGP98AkYAVf9jAmAAUP9eAkEAX/9XAkAAVf9jAmAAX/9XAkAAa/9XAl4AQ/9sAmIAEf+AAkcAUP9eAkEAQ/9sAmIAUP9eAkEAVf9jAmAAef9XAoAAQ/9sAmIAa/9XAl4Aef9XAoAA9v61AgMBB/4TA4AAQ/9XAv3/ff86Av3/Rf9XAgIAff86Av3//P/5Af3/w/8iAjYAff86Av3/w/8iAjYAbP9QAj4Aff86Av3/bP9QAj4AYv9IAgAAYv9IAgAAbP9QAj4AX/9XAkAAYv9IAgAAX/9XAkAARv9XAgUAYv9IAgAARv9XAgUARv9WAgIARv9WAgIARv9XAgUARf9XAgIAw/8iAjYAoP87AlkAa/9XAl4Aw/8iAjYAa/9XAl4AX/9XAkAAoP87AlkAkP9HAmkAjv9FAlsAjv9FAlsAkP9HAmkAff9UAnwAjv9FAlsAff9UAnwAeP9XAn0Ajv9FAlsAeP9XAn0Adf9XAncAjv9FAlsAdf9XAncAcf9UAl4Acf9UAl4Adf9XAncAa/9XAl4Aff9UAnwAef9XAoAAeP9XAn0Aiv61Av3/ef9XAoAAB/4TA4AAIv4TAzn/Lf5QA/3/dP4TA3X+9v6MA/f+dP4TA3X+Lf5QA/3/9v6MA/f+Lf5QA/3/iv6MA/3/Iv4TAzn/0f0TA/3/Lf5QA/3/9v61Avf+iv61Av3/Iv4TAzn/Iv4TAzn/iv61Av3/0f0TA/3/9v61Avf+Iv4TAzn/dP4TA3X+Q/9XAv3/9v61Avf+ef9XAnr/ef9XAnr//P/5Af3/Q/9XAv3/iv61Av3/9v61Avf+Q/9XAv3/OP8TAyP+/P+MA4v+/P8TA9L9dP4TA3X+9v6MA/f+OP8TAyP+/P+MA4v+OP8TAyP+9v6MA/f+OP8TAyP+/P8TA9L9/P+1Aov+OP8TAyP+9v61Avf+dP4TA3X+9v61Avf+OP8TAyP+/P+1Aov+ef9XAnr//P9XAkT//P/5Af3/ef9XAnr/9v61Avf+/P+1Aov+/P9XAkT/ef9XAnr//P+1Aov+wAATAyP+AgGMA/f+hQETA3X+/P8TA9L9/P+MA4v+wAATAyP+AgGMA/f+wAATAyP+/P+MA4v+AgG1Avf+/P+1Aov+wAATAyP+wAATAyP+/P+1Aov+/P8TA9L9AgG1Avf+wAATAyP+hQETA3X+/P9XAkT/AgG1Avf+fwBXAnr/fwBXAnr//P/5Af3//P9XAkT//P+1Aov+AgG1Avf+/P9XAkT/1gETAzn/bgGMA/3/JwITA/3/hQETA3X+AgGMA/f+1gETAzn/bgGMA/3/1gETAzn/AgGMA/f+1gETAzn/JwITA/3/bgG1Av3/1gETAzn/AgG1Avf+hQETA3X+AgG1Avf+1gETAzn/bgG1Av3/fwBXAnr/tQBXAv3//P/5Af3/fwBXAnr/AgG1Avf+bgG1Av3/tQBXAv3/fwBXAnr/bgG1Av3/AgG1AgMBbgG1Av3/1gETA8EA1gETA8EAbgG1Av3/JwITA/3/AgG1AgMB1gETA8EAhQETA4YBtQBXAv3/AgG1AgMBfwBXAoAAfwBXAoAA/P/5Af3/tQBXAv3/bgG1Av3/AgG1AgMBtQBXAv3/bgGMA/3/AgGMAwMBQwFQA0QB1gETA8EAQwFQA0QBhQETA4YB1gETA8EAJwITA/3/QwFQA0QBbgGMA/3/QwFQA0QBJwITA/3/fwCMAzkBwP6MA4AA9v6MAwMBiv6MA/3/wP6MA4AA9v6MA/f+wP6MA4AA/P+MA4v+9v6MA/f+/P+MA28BfwCMAzkB9v6MAwMBbgGMA/3/fwCMAzkBAgGMAwMBwP6MA4AAAgGMA/f+/P+MA4v+bgGMA/3/AgGMA/f+fwCMAzkBfwCMAzkBAgGMA/f+wP6MA4AACAFUBAkB/P9UBHgBZwAfBJcB/P9UBHgB/P8fBMMBZwAfBJcBZwCJBP8A/P+JBCwB/P9UBHgBCAFUBAkB0gCJBNMAZwCJBP8APQEfBD4BCAFUBAkB0gAfBGsBCAFUBAkBZwAfBJcB0gAfBGsBZwCJBP8A/P9UBHgBCAFUBAkB/P/MAywBZwAfBJcB/P8fBMMB0gDMA9MAPQEfBD4B0gAfBGsB0gAfBGsBZwAfBJcB0gDMA9MAZwB6A2gA/P/MAywB/P96A5QAZwAfBJcBZwB6A2gA0gDMA9MA/P8nA/3/ZwB6A2gA/P96A5QA/P/MAywBZwB6A2gAZwAfBJcB/P+JBCwBJv+JBNMA8P5UBAkBW/8fBIEB8P5UBAkBu/4fBD4B8P5UBAkBW/8fBIEB/P9UBHgB/P9UBHgBW/8fBIEB/P8fBMMB/P+JBCwB8P5UBAkB/P9UBHgBJv/MA9MA/P/MAywBW/8fBIEBW/8fBIEB/P/MAywB/P8fBMMBJv/MA9MAW/8fBIEBu/4fBD4B/P96A5QAJv/MA9MAkf96A2gAkf96A2gA/P8nA/3//P96A5QA/P/MAywBJv/MA9MA/P96A5QAj/4fBNMAgv5UBP3/Yv4fBGgAgv5UBP3/Nv4fBP3/Yv4fBGgA+v6JBGgAzf6JBP3/gv5UBP3/8P5UBAkBJv+JBNMA+v6JBGgAu/4fBD4B8P5UBAkBj/4fBNMA8P5UBAkBgv5UBP3/j/4fBNMA+v6JBGgAgv5UBP3/8P5UBAkBzf7MA/3/Yv4fBGgANv4fBP3/Jv/MA9MAu/4fBD4Bj/4fBNMAj/4fBNMAYv4fBGgAJv/MA9MAkf96A2gAzf7MA/3/Zf96A/3/kf96A2gAJv/MA9MAYv4fBGgAZf96A/3//P8nA/3/kf96A2gAzf7MA/3/kf96A2gAYv4fBGgAeP4fBFz/gv5UBP3/u/4fBLz+Jv+JBCf/u/4fBLz+gv5UBP3/Jv+JBCf/gv5UBP3/zf6JBP3/eP4fBFz/Nv4fBP3/gv5UBP3/Jv/MAyf/zf7MA/3/eP4fBFz/eP4fBFz/zf7MA/3/Nv4fBP3/Jv/MAyf/eP4fBFz/u/4fBLz+Zf96A/3/Jv/MAyf/kf96A5L/kf96A5L//P8nA/3/Zf96A/3/zf7MA/3/Jv/MAyf/Zf96A/3/W/8fBHn+/P+JBM7+/P8fBDf+u/4fBLz+Jv+JBCf/W/8fBHn+/P+JBM7+W/8fBHn+Jv+JBCf/W/8fBHn+/P8fBDf+/P/MA87+W/8fBHn+Jv/MAyf/u/4fBLz+Jv/MAyf/W/8fBHn+/P/MA87+kf96A5L//P96A2b//P8nA/3/kf96A5L/Jv/MAyf//P/MA87+/P96A2b/kf96A5L//P/MA87+nQAfBHn+0gCJBCf/PQEfBLz+/P8fBDf+/P+JBM7+nQAfBHn+0gCJBCf/nQAfBHn+/P+JBM7+0gDMAyf//P/MA87+nQAfBHn+nQAfBHn+/P/MA87+/P8fBDf+0gDMAyf/nQAfBHn+PQEfBLz+/P96A2b/0gDMAyf/ZwB6A5L/ZwB6A5L//P8nA/3//P96A2b//P/MA87+0gDMAyf//P96A2b/gAEfBFz/KwGJBP3/wgEfBP3/PQEfBLz+0gCJBCf/gAEfBFz/KwGJBP3/gAEfBFz/0gCJBCf/gAEfBFz/wgEfBP3/KwHMA/3/gAEfBFz/0gDMAyf/PQEfBLz+0gDMAyf/gAEfBFz/KwHMA/3/ZwB6A5L/kwB6A/3//P8nA/3/ZwB6A5L/0gDMAyf/KwHMA/3/kwB6A/3/ZwB6A5L/KwHMA/3/0gDMA9MAKwHMA/3/gAEfBJ4AgAEfBJ4AKwHMA/3/wgEfBP3/0gDMA9MAgAEfBJ4APQEfBD4BkwB6A/3/0gDMA9MAZwB6A2gAZwB6A2gA/P8nA/3/kwB6A/3/KwHMA/3/0gDMA9MAkwB6A/3/KwGJBP3/0gCJBNMACAFUBAkBgAEfBJ4ACAFUBAkBPQEfBD4BgAEfBJ4AwgEfBP3/CAFUBAkBKwGJBP3/CAFUBAkBwgEfBP3/ZwCJBP8A+v6JBGgAJv+JBNMAzf6JBP3/+v6JBGgAJv+JBCf/+v6JBGgA/P+JBM7+Jv+JBCf//P+JBCwBZwCJBP8AJv+JBNMAKwGJBP3/ZwCJBP8A0gCJBNMA+v6JBGgA0gCJBCf//P+JBM7+KwGJBP3/0gCJBCf/ZwCJBP8AZwCJBP8A0gCJBCf/+v6JBGgASv++BK8A/P++BPkAtf/zBA4B/P++BPkA/P/zBCwBtf/zBA4Btf+JBKkA/P+JBMcA/P++BPkASv++BK8Abf+JBIwAtf+JBKkAJv/zBNMASv++BK8Abf/zBPEASv++BK8Atf/zBA4Bbf/zBPEAtf+JBKkA/P++BPkASv++BK8A/P9FBccAtf/zBA4B/P/zBCwBbf9FBYwAJv/zBNMAbf/zBPEAbf/zBPEAtf/zBA4Bbf9FBYwAtf+XBUQA/P9FBccA/P+XBWIAtf/zBA4Btf+XBUQAbf9FBYwA/P/qBf3/tf+XBUQA/P+XBWIA/P9FBccAtf+XBUQAtf/zBA4B/P+JBMcAiwCJBIwArgC+BK8AZwDzBP8ArgC+BK8A0gDzBNMArgC+BK8AZwDzBP8A/P++BPkA/P++BPkAZwDzBP8A/P/zBCwB/P+JBMcArgC+BK8A/P++BPkAiwBFBYwA/P9FBccAZwDzBP8AZwDzBP8A/P9FBccA/P/zBCwBiwBFBYwAZwDzBP8A0gDzBNMA/P+XBWIAiwBFBYwAQwCXBUQAQwCXBUQA/P/qBf3//P+XBWIA/P9FBccAiwBFBYwA/P+XBWIA8ADzBIwA+AC+BP3/DQHzBEQA+AC+BP3/KwHzBP3/DQHzBEQAqACJBEQAxgCJBP3/+AC+BP3/rgC+BK8AiwCJBIwAqACJBEQA0gDzBNMArgC+BK8A8ADzBIwArgC+BK8A+AC+BP3/8ADzBIwAqACJBEQA+AC+BP3/rgC+BK8AxgBFBf3/DQHzBEQAKwHzBP3/iwBFBYwA0gDzBNMA8ADzBIwA8ADzBIwADQHzBEQAiwBFBYwAQwCXBUQAxgBFBf3/YQCXBf3/QwCXBUQAiwBFBYwADQHzBEQAYQCXBf3//P/qBf3/QwCXBUQAxgBFBf3/QwCXBUQADQHzBEQA/gDzBJL/+AC+BP3/0gDzBCf/iwCJBG7/0gDzBCf/+AC+BP3/iwCJBG7/+AC+BP3/xgCJBP3//gDzBJL/KwHzBP3/+AC+BP3/iwBFBW7/xgBFBf3//gDzBJL//gDzBJL/xgBFBf3/KwHzBP3/iwBFBW7//gDzBJL/0gDzBCf/YQCXBf3/iwBFBW7/QwCXBbb/QwCXBbb//P/qBf3/YQCXBf3/xgBFBf3/iwBFBW7/YQCXBf3/ZwDzBPv+/P+JBDP//P/zBM7+0gDzBCf/iwCJBG7/ZwDzBPv+/P+JBDP/ZwDzBPv+iwCJBG7/ZwDzBPv+/P/zBM7+/P9FBTP/ZwDzBPv+iwBFBW7/0gDzBCf/iwBFBW7/ZwDzBPv+/P9FBTP/QwCXBbb//P+XBZj//P/qBf3/QwCXBbb/iwBFBW7//P9FBTP//P+XBZj/QwCXBbb//P9FBTP/kf/zBPv+bf+JBG7/Jv/zBCf//P/zBM7+/P+JBDP/kf/zBPv+bf+JBG7/kf/zBPv+/P+JBDP/bf9FBW7//P9FBTP/kf/zBPv+kf/zBPv+/P9FBTP//P/zBM7+bf9FBW7/kf/zBPv+Jv/zBCf//P+XBZj/bf9FBW7/tf+XBbb/tf+XBbb//P/qBf3//P+XBZj//P9FBTP/bf9FBW7//P+XBZj/+v7zBJL/Mv+JBP3/zf7zBP3/Jv/zBCf/bf+JBG7/+v7zBJL/Mv+JBP3/+v7zBJL/bf+JBG7/+v7zBJL/zf7zBP3/Mv9FBf3/+v7zBJL/bf9FBW7/Jv/zBCf/bf9FBW7/+v7zBJL/Mv9FBf3/tf+XBbb/l/+XBf3//P/qBf3/tf+XBbb/bf9FBW7/Mv9FBf3/l/+XBf3/tf+XBbb/Mv9FBf3/bf9FBYwAMv9FBf3/+v7zBGgA+v7zBGgAMv9FBf3/zf7zBP3/bf9FBYwA+v7zBGgAJv/zBNMAl/+XBf3/bf9FBYwAtf+XBUQAtf+XBUQA/P/qBf3/l/+XBf3/Mv9FBf3/bf9FBYwAl/+XBf3/Mv+JBP3/bf+JBIwASv++BK8A+v7zBGgASv++BK8AJv/zBNMA+v7zBGgAzf7zBP3/Sv++BK8AMv+JBP3/Sv++BK8Azf7zBP3/tf+JBKkAqACJBEQAiwCJBIwAxgCJBP3/qACJBEQAiwCJBG7/qACJBEQA/P+JBDP/iwCJBG7//P+JBMcAtf+JBKkAiwCJBIwAMv+JBP3/tf+JBKkAbf+JBIwAqACJBEQAbf+JBG7//P+JBDP/Mv+JBP3/bf+JBG7/tf+JBKkAtf+JBKkAbf+JBG7/qACJBEQA",c:"BAEEAQQBBAEEAQQBBAEEAQQBBAEEAQQBBAQEBAQEBAQBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBCAgICAgICBAQEBAQEBAICAgICBAQEBAQEAgICAgICAgQEBAQEBAQCAgICBAQEBAQEAgICBAQEBAQEAgICBAQEBAQEAgICBAQEBAQEBAQEBAQEAgICAgICAgICAgICAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDCAgIAwMICAMDCAgDAwMDAwMDAwgICAMDAwMICAgIAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJ"},scalini:{v:"AP+KAGAAAAGKAGAAAAFKAGAAAP+KAGAAAAFKAGAAAP9KAGAAAAFKACABAAGKACABAP+KACABAAFKACABAP+KACABAP9KACABAAGKACABAAGKAGAAAP+KAGAAAAGKACABAP+KAGAAAP+KACABAP9KAGAAAAFKAGAAAAFKACABAP9KAGAAAAFKACABAP9KACABAAFKAGAAAAGKAGAAAAGKACABAAFKAGAAAAGKACABAAFKACABAP+KACABAP+KAGAAAP9KAGAAAP+KACABAP9KAGAAAP9KACABAP8zAcD/AAEzAcD/AAHzAMD/AP8zAcD/AAHzAMD/AP/zAMD/AAHzAIAAAAEzAYAAAP8zAYAAAAHzAIAAAP8zAYAAAP/zAIAAAAEzAYAAAAEzAcD/AP8zAcD/AAEzAYAAAP8zAcD/AP8zAYAAAP/zAMD/AAHzAMD/AAHzAIAAAP/zAMD/AAHzAIAAAP/zAIAAAAHzAMD/AAEzAcD/AAEzAYAAAAHzAMD/AAEzAYAAAAHzAIAAAP8zAYAAAP8zAcD/AP/zAMD/AP8zAYAAAP/zAMD/AP/zAIAAAP/gASD/AAHgASD/AAGgASD/AP/gASD/AAGgASD/AP+gASD/AAGgAeD/AAHgAeD/AP/gAeD/AAGgAeD/AP/gAeD/AP+gAeD/AAHgAeD/AAHgASD/AP/gASD/AAHgAeD/AP/gASD/AP/gAeD/AP+gASD/AAGgASD/AAGgAeD/AP+gASD/AAGgAeD/AP+gAeD/AAGgASD/AAHgASD/AAHgAeD/AAGgASD/AAHgAeD/AAGgAeD/AP/gAeD/AP/gASD/AP+gASD/AP/gAeD/AP+gASD/AP+gAeD/YP+mAWD/oP+mAWD/oP8zAWD/YP+mAWD/oP8zAWD/YP8zAWD/oP8zAaD/oP+mAaD/YP+mAaD/oP8zAaD/YP+mAaD/YP8zAaD/oP+mAaD/oP+mAWD/YP+mAWD/oP+mAaD/YP+mAWD/YP+mAaD/YP8zAWD/oP8zAWD/oP8zAaD/YP8zAWD/oP8zAaD/YP8zAaD/oP8zAWD/oP+mAWD/oP+mAaD/oP8zAWD/oP+mAaD/oP8zAaD/YP+mAaD/YP+mAWD/YP8zAWD/YP+mAaD/YP8zAWD/YP8zAaD/YAAzAWD/oAAzAWD/oADzAGD/YAAzAWD/oADzAGD/YADzAGD/oADzAMD/oAAzAcD/YAAzAcD/oADzAMD/YAAzAcD/YADzAMD/oAAzAcD/oAAzAWD/YAAzAWD/oAAzAcD/YAAzAWD/YAAzAcD/YADzAGD/oADzAGD/oADzAMD/YADzAGD/oADzAMD/YADzAMD/oADzAGD/oAAzAWD/oAAzAcD/oADzAGD/oAAzAcD/oADzAMD/YAAzAcD/YAAzAWD/YADzAGD/YAAzAcD/YADzAGD/YADzAMD/YP/gAcD+oP/gAcD+oP+gAcD+YP/gAcD+oP+gAcD+YP+gAcD+oP+gASD/oP/gASD/YP/gASD/oP+gASD/YP/gASD/YP+gASD/oP/gASD/oP/gAcD+YP/gAcD+oP/gASD/YP/gAcD+YP/gASD/YP+gAcD+oP+gAcD+oP+gASD/YP+gAcD+oP+gASD/YP+gASD/oP+gAcD+oP/gAcD+oP/gASD/oP+gAcD+oP/gASD/oP+gASD/YP/gASD/YP/gAcD+YP+gAcD+YP/gASD/YP+gAcD+YP+gASD/YADgAcD+oADgAcD+oACgAcD+YADgAcD+oACgAcD+YACgAcD+oACgASD/oADgASD/YADgASD/oACgASD/YADgASD/YACgASD/oADgASD/oADgAcD+YADgAcD+oADgASD/YADgAcD+YADgASD/YACgAcD+oACgAcD+oACgASD/YACgAcD+oACgASD/YACgASD/oACgAcD+oADgAcD+oADgASD/oACgAcD+oADgASD/oACgASD/YADgASD/YADgAcD+YACgAcD+YADgASD/YACgAcD+YACgASD/YACmAWD/oACmAWD/oAAzAWD/YACmAWD/oAAzAWD/YAAzAWD/oAAzAaD/oACmAaD/YACmAaD/oAAzAaD/YACmAaD/YAAzAaD/oACmAaD/oACmAWD/YACmAWD/oACmAaD/YACmAWD/YACmAaD/YAAzAWD/oAAzAWD/oAAzAaD/YAAzAWD/oAAzAaD/YAAzAaD/oAAzAWD/oACmAWD/oACmAaD/oAAzAWD/oACmAaD/oAAzAaD/YACmAaD/YACmAWD/YAAzAWD/YACmAaD/YAAzAWD/YAAzAaD/YP8zAWD/oP8zAWD/oP/zAGD/YP8zAWD/oP/zAGD/YP/zAGD/oP/zAMD/oP8zAcD/YP8zAcD/oP/zAMD/YP8zAcD/YP/zAMD/oP8zAcD/oP8zAWD/YP8zAWD/oP8zAcD/YP8zAWD/YP8zAcD/YP/zAGD/oP/zAGD/oP/zAMD/YP/zAGD/oP/zAMD/YP/zAMD/oP/zAGD/oP8zAWD/oP8zAcD/oP/zAGD/oP8zAcD/oP/zAMD/YP8zAcD/YP8zAWD/YP/zAGD/YP8zAcD/YP/zAGD/YP/zAMD/YAD9AAAAoAD9AAAAoACKAAAAYAD9AAAAoACKAAAAYACKAAAAoACKAEAAoAD9AEAAYAD9AEAAoACKAEAAYAD9AEAAYACKAEAAoAD9AEAAoAD9AAAAYAD9AAAAoAD9AEAAYAD9AAAAYAD9AEAAYACKAAAAoACKAAAAoACKAEAAYACKAAAAoACKAEAAYACKAEAAoACKAAAAoAD9AAAAoAD9AEAAoACKAAAAoAD9AEAAoACKAEAAYAD9AEAAYAD9AAAAYACKAAAAYAD9AEAAYACKAAAAYACKAEAAYACKAAAAoACKAAAAoABKAAAAYACKAAAAoABKAAAAYABKAAAAoABKAGAAoACKAGAAYACKAGAAoABKAGAAYACKAGAAYABKAGAAoACKAGAAoACKAAAAYACKAAAAoACKAGAAYACKAAAAYACKAGAAYABKAAAAoABKAAAAoABKAGAAYABKAAAAoABKAGAAYABKAGAAoABKAAAAoACKAAAAoACKAGAAoABKAAAAoACKAGAAoABKAGAAYACKAGAAYACKAAAAYABKAAAAYACKAGAAYABKAAAAYABKAGAAYP/9AAAAoP/9AAAAoP+KAAAAYP/9AAAAoP+KAAAAYP+KAAAAoP+KAEAAoP/9AEAAYP/9AEAAoP+KAEAAYP/9AEAAYP+KAEAAoP/9AEAAoP/9AAAAYP/9AAAAoP/9AEAAYP/9AAAAYP/9AEAAYP+KAAAAoP+KAAAAoP+KAEAAYP+KAAAAoP+KAEAAYP+KAEAAoP+KAAAAoP/9AAAAoP/9AEAAoP+KAAAAoP/9AEAAoP+KAEAAYP/9AEAAYP/9AAAAYP+KAAAAYP/9AEAAYP+KAAAAYP+KAEAAYP+KAAAAoP+KAAAAoP9KAAAAYP+KAAAAoP9KAAAAYP9KAAAAoP9KAGAAoP+KAGAAYP+KAGAAoP9KAGAAYP+KAGAAYP9KAGAAoP+KAGAAoP+KAAAAYP+KAAAAoP+KAGAAYP+KAAAAYP+KAGAAYP9KAAAAoP9KAAAAoP9KAGAAYP9KAAAAoP9KAGAAYP9KAGAAoP9KAAAAoP+KAAAAoP+KAGAAoP9KAAAAoP+KAGAAoP9KAGAAYP+KAGAAYP+KAAAAYP9KAAAAYP+KAGAAYP9KAAAAYP9KAGAAYABTAMAAoABTAMAAoADg/8AAYABTAMAAoADg/8AAYADg/8AAoADg/wABoABTAAABYABTAAABoADg/wABYABTAAABYADg/wABoABTAAABoABTAMAAYABTAMAAoABTAAABYABTAMAAYABTAAABYADg/8AAoADg/8AAoADg/wABYADg/8AAoADg/wABYADg/wABoADg/8AAoABTAMAAoABTAAABoADg/8AAoABTAAABoADg/wABYABTAAABYABTAMAAYADg/8AAYABTAAABYADg/8AAYADg/wABYP9TAMAAoP9TAMAAoP/g/8AAYP9TAMAAoP/g/8AAYP/g/8AAoP/g/wABoP9TAAABYP9TAAABoP/g/wABYP9TAAABYP/g/wABoP9TAAABoP9TAMAAYP9TAMAAoP9TAAABYP9TAMAAYP9TAAABYP/g/8AAoP/g/8AAoP/g/wABYP/g/8AAoP/g/wABYP/g/wABoP/g/8AAoP9TAMAAoP9TAAABoP/g/8AAoP9TAAABoP/g/wABYP9TAAABYP9TAMAAYP/g/8AAYP9TAAABYP/g/8AAYP/g/wAB",c:"ExMTEwICHh4TExMTExMTEwICHh4TExMTExMTEwICHh4TExMTAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB"},funghi:{v:"Lf+TAIAAlP++AMAAiP/bAEAALf+TAIAARv9YAIAArP+CAMAALf+TAIAArP+CAMAAlP++AMAArP+CAMAARv9YAIAAuP9lAEAAlP++AMAA+v/oAIAAiP/bAEAAlP++AMAArP+CAMAAEwCtAIAAlP++AMAAEwCtAIAA+v/oAIAAEwCtAIAArP+CAMAAuP9lAEAA+v/oAIAA+v/oAAAAiP/bAEAA+v/oAIAAEwCtAIAAEwCtAAAA+v/oAIAAEwCtAAAA+v/oAAAAEwCtAAAAEwCtAIAAuP9lAEAA+v/oAAAAlP++AMD/iP/bAEAA+v/oAAAAEwCtAAAArP+CAMD/+v/oAAAArP+CAMD/lP++AMD/rP+CAMD/EwCtAAAAuP9lAEAAlP++AMD/Lf+TAAAAiP/bAEAAlP++AMD/rP+CAMD/Rv9YAAAAlP++AMD/Rv9YAAAALf+TAAAARv9YAAAArP+CAMD/uP9lAEAALf+TAAAALf+TAIAAiP/bAEAALf+TAAAARv9YAAAARv9YAIAALf+TAAAARv9YAIAALf+TAIAARv9YAIAARv9YAAAAuP9lAEAANACMACMAhQBqACoAcgCMAOD/NACMACMAIgBgACMAcwA+ACoANACMACMAcwA+ACoAhQBqACoAcwA+ACoAIgBgACMATgA0AOD/hQBqACoAuwBUAOf/cgCMAOD/hQBqACoAcwA+ACoAqAAoAOf/hQBqACoAqAAoAOf/uwBUAOf/qAAoAOf/cwA+ACoATgA0AOD/uwBUAOf/ngBgAJ3/cgCMAOD/uwBUAOf/qAAoAOf/jAA0AJ3/uwBUAOf/jAA0AJ3/ngBgAJ3/jAA0AJ3/qAAoAOf/TgA0AOD/ngBgAJ3/TQCCAJb/cgCMAOD/ngBgAJ3/jAA0AJ3/OwBWAJb/ngBgAJ3/OwBWAJb/TQCCAJb/OwBWAJb/jAA0AJ3/TgA0AOD/TQCCAJb/GACYANn/cgCMAOD/TQCCAJb/OwBWAJb/BQBsANn/TQCCAJb/BQBsANn/GACYANn/BQBsANn/OwBWAJb/TgA0AOD/GACYANn/NACMACMAcgCMAOD/GACYANn/BQBsANn/IgBgACMAGACYANn/IgBgACMANACMACMAIgBgACMABQBsANn/TgA0AOD/u//n/38AmP/d/yYA1P/t/0AAmP/d/yYAu//n/38Amv/GAEAAEQD+/1oAu//n/38A1P/t/0AAu//n/38AEQD+/1oAmv/GAEAA7f/0/wEAEQD+/1oA1P/t/0AAEQD+/1oA7f/0/wEAmv/GAEAAmP/d/yYA7f/0/wEA1P/t/0AA7f/0/wEAmP/d/yYAmv/GAEAAWwDm/wAAHgD5/wAAPQDv/+D/HgD5/wAAWwDm/wAAbQCIAOD/WwDm/8D/WwDm/wAAPQDv/+D/WwDm/wAAWwDm/8D/bQCIAOD/HgD5/8D/WwDm/8D/PQDv/+D/WwDm/8D/HgD5/8D/bQCIAOD/HgD5/wAAHgD5/8D/PQDv/+D/HgD5/8D/HgD5/wAAbQCIAOD/",c:"HwYGDR8GBg0fBgYNHwYGDR8GBg0fBgYNBAwMDQQMDA0EDAwNBAwMDQQMDA0EDAwNBwcHBwcHBwcHBwcHBwcHBw=="},sasso:{v:"bAAgAHIAuv8gALwAuv8AALwAbAAgAHIAuv8AALwAbAAAAHIAQP8AAJT/QP8gAJT/8f8gAEr/QP8AAJT/8f8gAEr/8f8AAEr/ov9gAIAAUwBgADcACgBgAIb/ov9gAIAACgBgAIb/WP9gAM//CgDA/4b/UwDA/zcAov/A/4AACgDA/4b/ov/A/4AAWP/A/8//Z/8AAJkAZ/8gAJkAHf8gAOj/Z/8AAJkAHf8gAOj/Hf8AAOj/RQAgAG3/jgAgAB4AjgAAAB4ARQAgAG3/jgAAAB4ARQAAAG3/UwBgADcAov9gAIAAuv8gALwAUwBgADcAuv8gALwAbAAgAHIAQP8gAJT/WP9gAM//CgBgAIb/QP8gAJT/CgBgAIb/8f8gAEr/Z/8gAJkAov9gAIAAWP9gAM//Z/8gAJkAWP9gAM//Hf8gAOj/CgBgAIb/UwBgADcAjgAgAB4ACgBgAIb/jgAgAB4ARQAgAG3/uv8AALwAov/A/4AAUwDA/zcAuv8AALwAUwDA/zcAbAAAAHIACgDA/4b/WP/A/8//QP8AAJT/CgDA/4b/QP8AAJT/8f8AAEr/WP/A/8//ov/A/4AAZ/8AAJkAWP/A/8//Z/8AAJkAHf8AAOj/jgAAAB4AUwDA/zcACgDA/4b/jgAAAB4ACgDA/4b/RQAAAG3/bAAAAHIAjgAAAB4AjgAgAB4AbAAAAHIAjgAgAB4AbAAgAHIAZ/8gAJkAZ/8AAJkAuv8AALwAZ/8gAJkAuv8AALwAuv8gALwARQAgAG3/RQAAAG3/8f8AAEr/RQAgAG3/8f8AAEr/8f8gAEr/QP8AAJT/Hf8AAOj/Hf8gAOj/QP8AAJT/Hf8gAOj/QP8gAJT/ov/A/4AAuv8AALwAZ/8AAJkAWP/A/8//Hf8AAOj/QP8AAJT/UwDA/zcAjgAAAB4AbAAAAHIACgDA/4b/8f8AAEr/RQAAAG3/ov9gAIAAZ/8gAJkAuv8gALwAWP9gAM//QP8gAJT/Hf8gAOj/UwBgADcAbAAgAHIAjgAgAB4ACgBgAIb/RQAgAG3/8f8gAEr/5QAgAEcAoQAgAIsAoQAAAIsA5QAgAEcAoQAAAIsA5QAAAEcAMAAAABoAMAAgABoAdAAgANb/MAAAABoAdAAgANb/dAAAANb/iwBAAHQAzwBAADAAiwBAAOz/iwBAAHQAiwBAAOz/RwBAADAAiwDg/+z/zwDg/zAAiwDg/3QAiwDg/+z/iwDg/3QARwDg/zAAdAAAAIsAdAAgAIsAMAAgAEcAdAAAAIsAMAAgAEcAMAAAAEcAoQAgANb/5QAgABoA5QAAABoAoQAgANb/5QAAABoAoQAAANb/zwBAADAAiwBAAHQAoQAgAIsAzwBAADAAoQAgAIsA5QAgAEcAMAAgABoARwBAADAAiwBAAOz/MAAgABoAiwBAAOz/dAAgANb/dAAgAIsAiwBAAHQARwBAADAAdAAgAIsARwBAADAAMAAgAEcAiwBAAOz/zwBAADAA5QAgABoAiwBAAOz/5QAgABoAoQAgANb/oQAAAIsAiwDg/3QAzwDg/zAAoQAAAIsAzwDg/zAA5QAAAEcAiwDg/+z/RwDg/zAAMAAAABoAiwDg/+z/MAAAABoAdAAAANb/RwDg/zAAiwDg/3QAdAAAAIsARwDg/zAAdAAAAIsAMAAAAEcA5QAAABoAzwDg/zAAiwDg/+z/5QAAABoAiwDg/+z/oQAAANb/5QAAAEcA5QAAABoA5QAgABoA5QAAAEcA5QAgABoA5QAgAEcAdAAgAIsAdAAAAIsAoQAAAIsAdAAgAIsAoQAAAIsAoQAgAIsAoQAgANb/oQAAANb/dAAAANb/oQAgANb/dAAAANb/dAAgANb/MAAAABoAMAAAAEcAMAAgAEcAMAAAABoAMAAgAEcAMAAgABoAiwDg/3QAoQAAAIsAdAAAAIsARwDg/zAAMAAAAEcAMAAAABoAzwDg/zAA5QAAABoA5QAAAEcAiwDg/+z/dAAAANb/oQAAANb/iwBAAHQAdAAgAIsAoQAgAIsARwBAADAAMAAgABoAMAAgAEcAzwBAADAA5QAgAEcA5QAgABoAiwBAAOz/oQAgANb/dAAgANb/",c:"Dw8PDxsbDw8PDw8PGRkZGRkZGRkPDw8PDw8PDw8PDw8PDw8PDw8PDxkZGRkPDw8PGxsPDw8PDw8ZGRkZGRkZGQ8PDw8PDw8PDw8PDw8PDw8PDw8PGRkZGQ=="},ciuffo:{v:"2//GAN//4//GANj/+f/c/+3/2//GAN//+f/c/+3/8f/c//X/JgDk/xoAEADOAAQACADOAAwAJgDk/xoACADOAAwAHgDk/yIA7//mAOT/6P/mAOv/9//oAPr/7//mAOT/9//oAPr//v/oAPP/EgDE/xUAAwDC/wcACgDC////EgDE/xUACgDC////GQDE/w4ADwDf//X/+f/IAN//CADLAO7/DwDf//X/CADLAO7/HgDi/wQA8v/LAAUA4//IAPb/+f/f/wsA8v/LAAUA+f/f/wsABwDi/xoA6P/mAOv/7//mAOT/4//GANj/6P/mAOv/4//GANj/2//GAN//EADOAAQA/v/oAPP/9//oAPr/EADOAAQA9//oAPr/CADOAAwA+f/IAN//7//mAOT//v/oAPP/+f/IAN///v/oAPP/CADLAO7/9//oAPr/6P/mAOv/4//IAPb/9//oAPr/4//IAPb/8v/LAAUA+f/c/+3/CgDC////AwDC/wcA+f/c/+3/AwDC/wcA8f/c//X/EgDE/xUAGQDE/w4AJgDk/xoAEgDE/xUAJgDk/xoAHgDk/yIAGQDE/w4ACgDC////DwDf//X/GQDE/w4ADwDf//X/HgDi/wQA+f/f/wsAAwDC/wcAEgDE/xUA+f/f/wsAEgDE/xUABwDi/xoA8f/c//X/+f/f/wsA4//IAPb/8f/c//X/4//IAPb/2//GAN//+f/IAN//DwDf//X/+f/c/+3/+f/IAN//+f/c/+3/4//GANj/8v/LAAUABwDi/xoAHgDk/yIA8v/LAAUAHgDk/yIACADOAAwAJgDk/xoAHgDi/wQACADLAO7/JgDk/xoACADLAO7/EADOAAQACgDC////+f/c/+3/DwDf//X/GQDE/w4AHgDi/wQAJgDk/xoAAwDC/wcA+f/f/wsA8f/c//X/EgDE/xUAHgDk/yIABwDi/xoA7//mAOT/+f/IAN//4//GANj//v/oAPP/EADOAAQACADLAO7/6P/mAOv/2//GAN//4//IAPb/9//oAPr/8v/LAAUACADOAAwA0v+qAIEA3P+rAIUADADs/08A0v+qAIEADADs/08AAgDr/0sAAgDh/2sA0v+hAKIAyP+fAJ4AAgDh/2sAyP+fAJ4A+P/g/2cA0//AAJYAyf++AJIAxv+7AJsA0//AAJYAxv+7AJsAz/+8AJ8AAQDM/1cABQDP/00ADgDQ/1EAAQDM/1cADgDQ/1EACwDN/1sAEgDq/1wA4/+pAJMA3/+mAJwAEgDq/1wA3/+mAJwADwDm/2YAwv+iAJAAxf+lAIcA9f/m/1AAwv+iAJAA9f/m/1AA8f/i/1kAyf++AJIA0//AAJYA3P+rAIUAyf++AJIA3P+rAIUA0v+qAIEA0v+hAKIAz/+8AJ8Axv+7AJsA0v+hAKIAxv+7AJsAyP+fAJ4A4/+pAJMA0//AAJYAz/+8AJ8A4/+pAJMAz/+8AJ8A3/+mAJwAxv+7AJsAyf++AJIAxf+lAIcAxv+7AJsAxf+lAIcAwv+iAJAADADs/08ADgDQ/1EABQDP/00ADADs/08ABQDP/00AAgDr/0sAAQDM/1cACwDN/1sAAgDh/2sAAQDM/1cAAgDh/2sA+P/g/2cACwDN/1sADgDQ/1EAEgDq/1wACwDN/1sAEgDq/1wADwDm/2YA9f/m/1AABQDP/00AAQDM/1cA9f/m/1AAAQDM/1cA8f/i/1kAAgDr/0sA9f/m/1AAxf+lAIcAAgDr/0sAxf+lAIcA0v+qAIEA4/+pAJMAEgDq/1wADADs/08A4/+pAJMADADs/08A3P+rAIUAwv+iAJAA8f/i/1kA+P/g/2cAwv+iAJAA+P/g/2cAyP+fAJ4AAgDh/2sADwDm/2YA3/+mAJwAAgDh/2sA3/+mAJwA0v+hAKIADgDQ/1EADADs/08AEgDq/1wACwDN/1sADwDm/2YAAgDh/2sABQDP/00A9f/m/1AAAgDr/0sAAQDM/1cA+P/g/2cA8f/i/1kA0//AAJYA4/+pAJMA3P+rAIUAz/+8AJ8A0v+hAKIA3/+mAJwAyf++AJIA0v+qAIEAxf+lAIcAxv+7AJsAwv+iAJAAyP+fAJ4ATgBtAP3/RgBuAAQAXgDe/zUATgBtAP3/XgDe/zUAZgDd/y0AXgDe/zUARgBuAAQATgBtAP3/XgDe/zUATgBtAP3/ZgDd/y0AQwCAAP7/SwB/APb/SwB/APb/QwCAAP7/SwB/APb/QwCAAP7/aQDL/zMAaQDL/zMAYQDM/zsAaQDL/zMAYQDM/zsAYQDM/zsAVwDg/zwAPwBvAAwAPwBvAAwAVwDg/zwAPwBvAAwAVwDg/zwAVQBsAPX/VQBsAPX/bQDc/yYAVQBsAPX/bQDc/yYAbQDc/yYASwB/APb/QwCAAP7/RgBuAAQASwB/APb/RgBuAAQATgBtAP3/RgBuAAQAQwCAAP7/SwB/APb/RgBuAAQASwB/APb/TgBtAP3/PwBvAAwAQwCAAP7/QwCAAP7/PwBvAAwAQwCAAP7/PwBvAAwASwB/APb/SwB/APb/VQBsAPX/SwB/APb/VQBsAPX/VQBsAPX/XgDe/zUAYQDM/zsAaQDL/zMAXgDe/zUAaQDL/zMAZgDd/y0AaQDL/zMAYQDM/zsAXgDe/zUAaQDL/zMAXgDe/zUAZgDd/y0AYQDM/zsAYQDM/zsAVwDg/zwAYQDM/zsAVwDg/zwAVwDg/zwAbQDc/yYAaQDL/zMAaQDL/zMAbQDc/yYAaQDL/zMAbQDc/yYAZgDd/y0AbQDc/yYAVQBsAPX/ZgDd/y0AVQBsAPX/TgBtAP3/PwBvAAwAVwDg/zwAXgDe/zUAPwBvAAwAXgDe/zUARgBuAAQAVQBsAPX/bQDc/yYAZgDd/y0AVQBsAPX/ZgDd/y0ATgBtAP3/XgDe/zUAVwDg/zwAPwBvAAwAXgDe/zUAPwBvAAwARgBuAAQAYQDM/zsAXgDe/zUAVwDg/zwAYQDM/zsAVwDg/zwAXgDe/zUAaQDL/zMAbQDc/yYAZgDd/y0AaQDL/zMAZgDd/y0AbQDc/yYAQwCAAP7/PwBvAAwARgBuAAQAQwCAAP7/RgBuAAQAPwBvAAwASwB/APb/TgBtAP3/VQBsAPX/SwB/APb/VQBsAPX/TgBtAP3/mAB5APX/nAB5AP7/igDg/wYAmAB5APX/igDg/wYAhgDg//z/bQDl/xIAfwB9AAsAewB9AAEAbQDl/xIAewB9AAEAaQDl/wgAlQCNAAIAkQCNAPj/hwCPAPz/lQCNAAIAhwCPAPz/iwCPAAYAcADQ/wUAegDP/wEAfgDP/wsAcADQ/wUAfgDP/wsAdADQ/w8AhADi/xQAlwB6AAwAjQB7ABAAhADi/xQAjQB7ABAAegDj/xgAgQB7APP/iwB6AO//eADi//b/gQB7APP/eADi//b/bgDj//r/kQCNAPj/lQCNAAIAnAB5AP7/kQCNAPj/nAB5AP7/mAB5APX/fwB9AAsAiwCPAAYAhwCPAPz/fwB9AAsAhwCPAPz/ewB9AAEAlwB6AAwAlQCNAAIAiwCPAAYAlwB6AAwAiwCPAAYAjQB7ABAAhwCPAPz/kQCNAPj/iwB6AO//hwCPAPz/iwB6AO//gQB7APP/igDg/wYAfgDP/wsAegDP/wEAigDg/wYAegDP/wEAhgDg//z/cADQ/wUAdADQ/w8AbQDl/xIAcADQ/wUAbQDl/xIAaQDl/wgAdADQ/w8AfgDP/wsAhADi/xQAdADQ/w8AhADi/xQAegDj/xgAeADi//b/egDP/wEAcADQ/wUAeADi//b/cADQ/wUAbgDj//r/hgDg//z/eADi//b/iwB6AO//hgDg//z/iwB6AO//mAB5APX/lwB6AAwAhADi/xQAigDg/wYAlwB6AAwAigDg/wYAnAB5AP7/gQB7APP/bgDj//r/aQDl/wgAgQB7APP/aQDl/wgAewB9AAEAbQDl/xIAegDj/xgAjQB7ABAAbQDl/xIAjQB7ABAAfwB9AAsAfgDP/wsAigDg/wYAhADi/xQAdADQ/w8AegDj/xgAbQDl/xIAegDP/wEAeADi//b/hgDg//z/cADQ/wUAaQDl/wgAbgDj//r/lQCNAAIAlwB6AAwAnAB5AP7/iwCPAAYAfwB9AAsAjQB7ABAAkQCNAPj/mAB5APX/iwB6AO//hwCPAPz/gQB7APP/ewB9AAEAqP9sANv/oP9sANP/rP/o/8f/qP9sANv/rP/o/8f/tP/o/87/2f/x/5r/zf91AKb/1f91AK7/2f/x/5r/1f91AK7/4f/x/6H/rv+AAMb/tf+AAM3/xP+DAL7/rv+AAMb/xP+DAL7/vP+DALf/0//e/6//xP/b/77/vf/b/7b/0//e/6//vf/b/7b/zP/e/6f/tP/r/7D/qP9vALz/tv9yAK7/tP/r/7D/tv9yAK7/w//u/6H/zf9yAMT/vv9vANP/yv/r/8f/zf9yAMT/yv/r/8f/2f/u/7j/tf+AAM3/rv+AAMb/oP9sANP/tf+AAM3/oP9sANP/qP9sANv/zf91AKb/vP+DALf/xP+DAL7/zf91AKb/xP+DAL7/1f91AK7/qP9vALz/rv+AAMb/vP+DALf/qP9vALz/vP+DALf/tv9yAK7/xP+DAL7/tf+AAM3/vv9vANP/xP+DAL7/vv9vANP/zf9yAMT/rP/o/8f/vf/b/7b/xP/b/77/rP/o/8f/xP/b/77/tP/o/87/0//e/6//zP/e/6f/2f/x/5r/0//e/6//2f/x/5r/4f/x/6H/zP/e/6f/vf/b/7b/tP/r/7D/zP/e/6f/tP/r/7D/w//u/6H/yv/r/8f/xP/b/77/0//e/6//yv/r/8f/0//e/6//2f/u/7j/tP/o/87/yv/r/8f/vv9vANP/tP/o/87/vv9vANP/qP9sANv/qP9vALz/tP/r/7D/rP/o/8f/qP9vALz/rP/o/8f/oP9sANP/zf9yAMT/2f/u/7j/4f/x/6H/zf9yAMT/4f/x/6H/1f91AK7/2f/x/5r/w//u/6H/tv9yAK7/2f/x/5r/tv9yAK7/zf91AKb/vf/b/7b/rP/o/8f/tP/r/7D/zP/e/6f/w//u/6H/2f/x/5r/xP/b/77/yv/r/8f/tP/o/87/0//e/6//4f/x/6H/2f/u/7j/rv+AAMb/qP9vALz/oP9sANP/vP+DALf/zf91AKb/tv9yAK7/tf+AAM3/qP9sANv/vv9vANP/xP+DAL7/zf9yAMT/1f91AK7/+P86ABwA/P87ABIA4P/c//v/+P86ABwA4P/c//v/3P/a/wQA/f/R/wUAGAAxAB0AFAAwACcA/f/R/wUAFAAwACcA+P/Q/w8ACABEABkABABDACMADgA/ACYACABEABkADgA/ACYAEgBAABwA7P/H/wgA4v/L/wUA5v/M//v/7P/H/wgA5v/M//v/8P/J////7v/Z//T/CQA5AAwAEgA2ABAA7v/Z//T/EgA2ABAA9//W//j/BgAyAC0A/f81ACkA4v/W/xIABgAyAC0A4v/W/xIA6//S/xUABABDACMACABEABkA/P87ABIABABDACMA/P87ABIA+P86ABwAGAAxAB0AEgBAABwADgA/ACYAGAAxAB0ADgA/ACYAFAAwACcACQA5AAwACABEABkAEgBAABwACQA5AAwAEgBAABwAEgA2ABAADgA/ACYABABDACMA/f81ACkADgA/ACYA/f81ACkABgAyAC0A4P/c//v/5v/M//v/4v/L/wUA4P/c//v/4v/L/wUA3P/a/wQA7P/H/wgA8P/J/////f/R/wUA7P/H/wgA/f/R/wUA+P/Q/w8A8P/J////5v/M//v/7v/Z//T/8P/J////7v/Z//T/9//W//j/4v/W/xIA4v/L/wUA7P/H/wgA4v/W/xIA7P/H/wgA6//S/xUA3P/a/wQA4v/W/xIA/f81ACkA3P/a/wQA/f81ACkA+P86ABwACQA5AAwA7v/Z//T/4P/c//v/CQA5AAwA4P/c//v//P87ABIABgAyAC0A6//S/xUA+P/Q/w8ABgAyAC0A+P/Q/w8AFAAwACcA/f/R/wUA9//W//j/EgA2ABAA/f/R/wUAEgA2ABAAGAAxAB0A5v/M//v/4P/c//v/7v/Z//T/8P/J////9//W//j//f/R/wUA4v/L/wUA4v/W/xIA3P/a/wQA7P/H/wgA+P/Q/w8A6//S/xUACABEABkACQA5AAwA/P87ABIAEgBAABwAGAAxAB0AEgA2ABAABABDACMA+P86ABwA/f81ACkADgA/ACYABgAyAC0AFAAwACcAGgA/AIX/JAA/AIH/KQDa/47/GgA/AIX/KQDa/47/HwDa/5L/NQDe/6v/MABDAJ//JgBDAKP/NQDe/6v/JgBDAKP/KwDe/6//JwBNAIn/HQBNAI7/IQBPAJf/JwBNAIn/IQBPAJf/KwBPAJP/KADQ/6f/IwDO/53/LQDO/5n/KADQ/6f/LQDO/5n/MQDQ/6P/NwDb/5P/MQBBAIf/NQBCAJH/NwDb/5P/NQBCAJH/OwDd/53/GABCAJ3/FABBAJP/GQDb/6D/GABCAJ3/GQDb/6D/HQDd/6n/HQBNAI7/JwBNAIn/JAA/AIH/HQBNAI7/JAA/AIH/GgA/AIX/MABDAJ//KwBPAJP/IQBPAJf/MABDAJ//IQBPAJf/JgBDAKP/MQBBAIf/JwBNAIn/KwBPAJP/MQBBAIf/KwBPAJP/NQBCAJH/IQBPAJf/HQBNAI7/FABBAJP/IQBPAJf/FABBAJP/GABCAJ3/KQDa/47/LQDO/5n/IwDO/53/KQDa/47/IwDO/53/HwDa/5L/KADQ/6f/MQDQ/6P/NQDe/6v/KADQ/6f/NQDe/6v/KwDe/6//MQDQ/6P/LQDO/5n/NwDb/5P/MQDQ/6P/NwDb/5P/OwDd/53/GQDb/6D/IwDO/53/KADQ/6f/GQDb/6D/KADQ/6f/HQDd/6n/HwDa/5L/GQDb/6D/FABBAJP/HwDa/5L/FABBAJP/GgA/AIX/MQBBAIf/NwDb/5P/KQDa/47/MQBBAIf/KQDa/47/JAA/AIH/GABCAJ3/HQDd/6n/KwDe/6//GABCAJ3/KwDe/6//JgBDAKP/NQDe/6v/OwDd/53/NQBCAJH/NQDe/6v/NQBCAJH/MABDAJ//LQDO/5n/KQDa/47/NwDb/5P/MQDQ/6P/OwDd/53/NQDe/6v/IwDO/53/GQDb/6D/HwDa/5L/KADQ/6f/KwDe/6//HQDd/6n/JwBNAIn/MQBBAIf/JAA/AIH/KwBPAJP/MABDAJ//NQBCAJH/HQBNAI7/GgA/AIX/FABBAJP/IQBPAJf/GABCAJ3/JgBDAKP/Tv9tAF3/Rv9uAGT/Xv/e/5X/Tv9tAF3/Xv/e/5X/Zv/d/43/Xv/e/5X/Rv9uAGT/Tv9tAF3/Xv/e/5X/Tv9tAF3/Zv/d/43/Q/+AAF7/S/9/AFb/S/9/AFb/Q/+AAF7/S/9/AFb/Q/+AAF7/af/L/5P/af/L/5P/Yf/M/5v/af/L/5P/Yf/M/5v/Yf/M/5v/V//g/5z/P/9vAGz/P/9vAGz/V//g/5z/P/9vAGz/V//g/5z/Vf9sAFX/Vf9sAFX/bf/c/4b/Vf9sAFX/bf/c/4b/bf/c/4b/S/9/AFb/Q/+AAF7/Rv9uAGT/S/9/AFb/Rv9uAGT/Tv9tAF3/Rv9uAGT/Q/+AAF7/S/9/AFb/Rv9uAGT/S/9/AFb/Tv9tAF3/P/9vAGz/Q/+AAF7/Q/+AAF7/P/9vAGz/Q/+AAF7/P/9vAGz/S/9/AFb/S/9/AFb/Vf9sAFX/S/9/AFb/Vf9sAFX/Vf9sAFX/Xv/e/5X/Yf/M/5v/af/L/5P/Xv/e/5X/af/L/5P/Zv/d/43/af/L/5P/Yf/M/5v/Xv/e/5X/af/L/5P/Xv/e/5X/Zv/d/43/Yf/M/5v/Yf/M/5v/V//g/5z/Yf/M/5v/V//g/5z/V//g/5z/bf/c/4b/af/L/5P/af/L/5P/bf/c/4b/af/L/5P/bf/c/4b/Zv/d/43/bf/c/4b/Vf9sAFX/Zv/d/43/Vf9sAFX/Tv9tAF3/P/9vAGz/V//g/5z/Xv/e/5X/P/9vAGz/Xv/e/5X/Rv9uAGT/Vf9sAFX/bf/c/4b/Zv/d/43/Vf9sAFX/Zv/d/43/Tv9tAF3/Xv/e/5X/V//g/5z/P/9vAGz/Xv/e/5X/P/9vAGz/Rv9uAGT/Yf/M/5v/Xv/e/5X/V//g/5z/Yf/M/5v/V//g/5z/Xv/e/5X/af/L/5P/bf/c/4b/Zv/d/43/af/L/5P/Zv/d/43/bf/c/4b/Q/+AAF7/P/9vAGz/Rv9uAGT/Q/+AAF7/Rv9uAGT/P/9vAGz/S/9/AFb/Tv9tAF3/Vf9sAFX/S/9/AFb/Vf9sAFX/Tv9tAF3/mP95AFX/nP95AF7/iv/g/2b/mP95AFX/iv/g/2b/hv/g/1z/bf/l/3L/f/99AGv/e/99AGH/bf/l/3L/e/99AGH/af/l/2j/lf+NAGL/kf+NAFj/h/+PAFz/lf+NAGL/h/+PAFz/i/+PAGb/cP/Q/2X/ev/P/2H/fv/P/2v/cP/Q/2X/fv/P/2v/dP/Q/2//hP/i/3T/l/96AGz/jf97AHD/hP/i/3T/jf97AHD/ev/j/3j/gf97AFP/i/96AE//eP/i/1b/gf97AFP/eP/i/1b/bv/j/1r/kf+NAFj/lf+NAGL/nP95AF7/kf+NAFj/nP95AF7/mP95AFX/f/99AGv/i/+PAGb/h/+PAFz/f/99AGv/h/+PAFz/e/99AGH/l/96AGz/lf+NAGL/i/+PAGb/l/96AGz/i/+PAGb/jf97AHD/h/+PAFz/kf+NAFj/i/96AE//h/+PAFz/i/96AE//gf97AFP/iv/g/2b/fv/P/2v/ev/P/2H/iv/g/2b/ev/P/2H/hv/g/1z/cP/Q/2X/dP/Q/2//bf/l/3L/cP/Q/2X/bf/l/3L/af/l/2j/dP/Q/2//fv/P/2v/hP/i/3T/dP/Q/2//hP/i/3T/ev/j/3j/eP/i/1b/ev/P/2H/cP/Q/2X/eP/i/1b/cP/Q/2X/bv/j/1r/hv/g/1z/eP/i/1b/i/96AE//hv/g/1z/i/96AE//mP95AFX/l/96AGz/hP/i/3T/iv/g/2b/l/96AGz/iv/g/2b/nP95AF7/gf97AFP/bv/j/1r/af/l/2j/gf97AFP/af/l/2j/e/99AGH/bf/l/3L/ev/j/3j/jf97AHD/bf/l/3L/jf97AHD/f/99AGv/fv/P/2v/iv/g/2b/hP/i/3T/dP/Q/2//ev/j/3j/bf/l/3L/ev/P/2H/eP/i/1b/hv/g/1z/cP/Q/2X/af/l/2j/bv/j/1r/lf+NAGL/l/96AGz/nP95AF7/i/+PAGb/f/99AGv/jf97AHD/kf+NAFj/mP95AFX/i/96AE//h/+PAFz/gf97AFP/e/99AGH/iABsANsAgABsANMAjADo/8cAiABsANsAjADo/8cAlADo/84AuQDx/5oArQB1AKYAtQB1AK4AuQDx/5oAtQB1AK4AwQDx/6EAjgCAAMYAlQCAAM0ApACDAL4AjgCAAMYApACDAL4AnACDALcAswDe/68ApADb/74AnQDb/7YAswDe/68AnQDb/7YArADe/6cAlADr/7AAiABvALwAlgByAK4AlADr/7AAlgByAK4AowDu/6EArQByAMQAngBvANMAqgDr/8cArQByAMQAqgDr/8cAuQDu/7gAlQCAAM0AjgCAAMYAgABsANMAlQCAAM0AgABsANMAiABsANsArQB1AKYAnACDALcApACDAL4ArQB1AKYApACDAL4AtQB1AK4AiABvALwAjgCAAMYAnACDALcAiABvALwAnACDALcAlgByAK4ApACDAL4AlQCAAM0AngBvANMApACDAL4AngBvANMArQByAMQAjADo/8cAnQDb/7YApADb/74AjADo/8cApADb/74AlADo/84AswDe/68ArADe/6cAuQDx/5oAswDe/68AuQDx/5oAwQDx/6EArADe/6cAnQDb/7YAlADr/7AArADe/6cAlADr/7AAowDu/6EAqgDr/8cApADb/74AswDe/68AqgDr/8cAswDe/68AuQDu/7gAlADo/84AqgDr/8cAngBvANMAlADo/84AngBvANMAiABsANsAiABvALwAlADr/7AAjADo/8cAiABvALwAjADo/8cAgABsANMArQByAMQAuQDu/7gAwQDx/6EArQByAMQAwQDx/6EAtQB1AK4AuQDx/5oAowDu/6EAlgByAK4AuQDx/5oAlgByAK4ArQB1AKYAnQDb/7YAjADo/8cAlADr/7AArADe/6cAowDu/6EAuQDx/5oApADb/74AqgDr/8cAlADo/84AswDe/68AwQDx/6EAuQDu/7gAjgCAAMYAiABvALwAgABsANMAnACDALcArQB1AKYAlgByAK4AlQCAAM0AiABsANsAngBvANMApACDAL4ArQByAMQAtQB1AK4AeAB5AFUAfAB5AF4AagDg/2YAeAB5AFUAagDg/2YAZgDg/1wATQDl/3IAXwB9AGsAWwB9AGEATQDl/3IAWwB9AGEASQDl/2gAdQCNAGIAcQCNAFgAZwCPAFwAdQCNAGIAZwCPAFwAawCPAGYAUADQ/2UAWgDP/2EAXgDP/2sAUADQ/2UAXgDP/2sAVADQ/28AZADi/3QAdwB6AGwAbQB7AHAAZADi/3QAbQB7AHAAWgDj/3gAYQB7AFMAawB6AE8AWADi/1YAYQB7AFMAWADi/1YATgDj/1oAcQCNAFgAdQCNAGIAfAB5AF4AcQCNAFgAfAB5AF4AeAB5AFUAXwB9AGsAawCPAGYAZwCPAFwAXwB9AGsAZwCPAFwAWwB9AGEAdwB6AGwAdQCNAGIAawCPAGYAdwB6AGwAawCPAGYAbQB7AHAAZwCPAFwAcQCNAFgAawB6AE8AZwCPAFwAawB6AE8AYQB7AFMAagDg/2YAXgDP/2sAWgDP/2EAagDg/2YAWgDP/2EAZgDg/1wAUADQ/2UAVADQ/28ATQDl/3IAUADQ/2UATQDl/3IASQDl/2gAVADQ/28AXgDP/2sAZADi/3QAVADQ/28AZADi/3QAWgDj/3gAWADi/1YAWgDP/2EAUADQ/2UAWADi/1YAUADQ/2UATgDj/1oAZgDg/1wAWADi/1YAawB6AE8AZgDg/1wAawB6AE8AeAB5AFUAdwB6AGwAZADi/3QAagDg/2YAdwB6AGwAagDg/2YAfAB5AF4AYQB7AFMATgDj/1oASQDl/2gAYQB7AFMASQDl/2gAWwB9AGEATQDl/3IAWgDj/3gAbQB7AHAATQDl/3IAbQB7AHAAXwB9AGsAXgDP/2sAagDg/2YAZADi/3QAVADQ/28AWgDj/3gATQDl/3IAWgDP/2EAWADi/1YAZgDg/1wAUADQ/2UASQDl/2gATgDj/1oAdQCNAGIAdwB6AGwAfAB5AF4AawCPAGYAXwB9AGsAbQB7AHAAcQCNAFgAeAB5AFUAawB6AE8AZwCPAFwAYQB7AFMAWwB9AGEA3v9tAGoA1/9uAGIApv/e/3sA3v9tAGoApv/e/3sArf/d/4IApv/e/3sA1/9uAGIA3v9tAGoApv/e/3sA3v9tAGoArf/d/4IA3f+AAF8A5P9/AGcA5P9/AGcA3f+AAF8A5P9/AGcA3f+AAF8Ap//L/4UAp//L/4UAoP/M/34Ap//L/4UAoP/M/34AoP/M/34Anv/g/3MAz/9vAFsAz/9vAFsAnv/g/3MAz/9vAFsAnv/g/3MA5v9sAHEA5v9sAHEAtf/c/4kA5v9sAHEAtf/c/4kAtf/c/4kA5P9/AGcA3f+AAF8A1/9uAGIA5P9/AGcA1/9uAGIA3v9tAGoA1/9uAGIA3f+AAF8A5P9/AGcA1/9uAGIA5P9/AGcA3v9tAGoAz/9vAFsA3f+AAF8A3f+AAF8Az/9vAFsA3f+AAF8Az/9vAFsA5P9/AGcA5P9/AGcA5v9sAHEA5P9/AGcA5v9sAHEA5v9sAHEApv/e/3sAoP/M/34Ap//L/4UApv/e/3sAp//L/4UArf/d/4IAp//L/4UAoP/M/34Apv/e/3sAp//L/4UApv/e/3sArf/d/4IAoP/M/34AoP/M/34Anv/g/3MAoP/M/34Anv/g/3MAnv/g/3MAtf/c/4kAp//L/4UAp//L/4UAtf/c/4kAp//L/4UAtf/c/4kArf/d/4IAtf/c/4kA5v9sAHEArf/d/4IA5v9sAHEA3v9tAGoAz/9vAFsAnv/g/3MApv/e/3sAz/9vAFsApv/e/3sA1/9uAGIA5v9sAHEAtf/c/4kArf/d/4IA5v9sAHEArf/d/4IA3v9tAGoApv/e/3sAnv/g/3MAz/9vAFsApv/e/3sAz/9vAFsA1/9uAGIAoP/M/34Apv/e/3sAnv/g/3MAoP/M/34Anv/g/3MApv/e/3sAp//L/4UAtf/c/4kArf/d/4IAp//L/4UArf/d/4IAtf/c/4kA3f+AAF8Az/9vAFsA1/9uAGIA3f+AAF8A1/9uAGIAz/9vAFsA5P9/AGcA3v9tAGoA5v9sAHEA5P9/AGcA5v9sAHEA3v9tAGoAp/+yAHgAnf+yAHwAk//n/2MAp/+yAHgAk//n/2MAnf/n/18Ah//r/0YAkf+2AF4Am/+2AFoAh//r/0YAm/+2AFoAkf/r/0IAm//NAHUApf/NAHEAof/OAGcAm//NAHUAof/OAGcAl//OAGsAlP/Q/0gAmP/P/1IAjv/P/1YAlP/Q/0gAjv/P/1YAiv/Q/0wAhf/o/10AkP+zAHYAjP+1AGwAhf/o/10AjP+1AGwAgf/q/1QAqf+1AGAArf+zAGoAo//o/1EAqf+1AGAAo//o/1EAn//q/0cApf/NAHEAm//NAHUAnf+yAHwApf/NAHEAnf+yAHwAp/+yAHgAkf+2AF4Al//OAGsAof/OAGcAkf+2AF4Aof/OAGcAm/+2AFoAkP+zAHYAm//NAHUAl//OAGsAkP+zAHYAl//OAGsAjP+1AGwAof/OAGcApf/NAHEArf+zAGoAof/OAGcArf+zAGoAqf+1AGAAk//n/2MAjv/P/1YAmP/P/1IAk//n/2MAmP/P/1IAnf/n/18AlP/Q/0gAiv/Q/0wAh//r/0YAlP/Q/0gAh//r/0YAkf/r/0IAiv/Q/0wAjv/P/1YAhf/o/10Aiv/Q/0wAhf/o/10Agf/q/1QAo//o/1EAmP/P/1IAlP/Q/0gAo//o/1EAlP/Q/0gAn//q/0cAnf/n/18Ao//o/1EArf+zAGoAnf/n/18Arf+zAGoAp/+yAHgAkP+zAHYAhf/o/10Ak//n/2MAkP+zAHYAk//n/2MAnf+yAHwAqf+1AGAAn//q/0cAkf/r/0IAqf+1AGAAkf/r/0IAm/+2AFoAh//r/0YAgf/q/1QAjP+1AGwAh//r/0YAjP+1AGwAkf+2AF4Ajv/P/1YAk//n/2MAhf/o/10Aiv/Q/0wAgf/q/1QAh//r/0YAmP/P/1IAo//o/1EAnf/n/18AlP/Q/0gAkf/r/0IAn//q/0cAm//NAHUAkP+zAHYAnf+yAHwAl//OAGsAkf+2AF4AjP+1AGwApf/NAHEAp/+yAHgArf+zAGoAof/OAGcAqf+1AGAAm/+2AFoAhwCnAGr/jgCnAGP/nwDx/3T/hwCnAGr/nwDx/3T/mADx/3v/ugD2/4//qQCtAH7/ogCtAIX/ugD2/4//ogCtAIX/swD2/5b/lQDAAGr/jgDAAHH/lwDCAHr/lQDAAGr/lwDCAHr/ngDCAHP/rADd/5D/owDc/4f/qgDc/3//rADd/5D/qgDc/3//swDd/4j/sADy/3X/nwCpAGT/qACrAG3/sADy/3X/qACrAG3/uQD0/37/kQCrAIT/iACpAHv/mQDy/4z/kQCrAIT/mQDy/4z/ogD0/5X/jgDAAHH/lQDAAGr/jgCnAGP/jgDAAHH/jgCnAGP/hwCnAGr/qQCtAH7/ngDCAHP/lwDCAHr/qQCtAH7/lwDCAHr/ogCtAIX/nwCpAGT/lQDAAGr/ngDCAHP/nwCpAGT/ngDCAHP/qACrAG3/lwDCAHr/jgDAAHH/iACpAHv/lwDCAHr/iACpAHv/kQCrAIT/nwDx/3T/qgDc/3//owDc/4f/nwDx/3T/owDc/4f/mADx/3v/rADd/5D/swDd/4j/ugD2/4//rADd/5D/ugD2/4//swD2/5b/swDd/4j/qgDc/3//sADy/3X/swDd/4j/sADy/3X/uQD0/37/mQDy/4z/owDc/4f/rADd/5D/mQDy/4z/rADd/5D/ogD0/5X/mADx/3v/mQDy/4z/iACpAHv/mADx/3v/iACpAHv/hwCnAGr/nwCpAGT/sADy/3X/nwDx/3T/nwCpAGT/nwDx/3T/jgCnAGP/kQCrAIT/ogD0/5X/swD2/5b/kQCrAIT/swD2/5b/ogCtAIX/ugD2/4//uQD0/37/qACrAG3/ugD2/4//qACrAG3/qQCtAH7/qgDc/3//nwDx/3T/sADy/3X/swDd/4j/uQD0/37/ugD2/4//owDc/4f/mQDy/4z/mADx/3v/rADd/5D/swD2/5b/ogD0/5X/lQDAAGr/nwCpAGT/jgCnAGP/ngDCAHP/qQCtAH7/qACrAG3/jgDAAHH/hwCnAGr/iACpAHv/lwDCAHr/kQCrAIT/ogCtAIX/JwCnAAoALgCnAAMAPwDx/xQAJwCnAAoAPwDx/xQAOADx/xsAWgD2/y8ASQCtAB4AQgCtACUAWgD2/y8AQgCtACUAUwD2/zYANQDAAAoALgDAABEANwDCABoANQDAAAoANwDCABoAPgDCABMATADd/zAAQwDc/ycASgDc/x8ATADd/zAASgDc/x8AUwDd/ygAUADy/xUAPwCpAAQASACrAA0AUADy/xUASACrAA0AWQD0/x4AMQCrACQAKACpABsAOQDy/ywAMQCrACQAOQDy/ywAQgD0/zUALgDAABEANQDAAAoALgCnAAMALgDAABEALgCnAAMAJwCnAAoASQCtAB4APgDCABMANwDCABoASQCtAB4ANwDCABoAQgCtACUAPwCpAAQANQDAAAoAPgDCABMAPwCpAAQAPgDCABMASACrAA0ANwDCABoALgDAABEAKACpABsANwDCABoAKACpABsAMQCrACQAPwDx/xQASgDc/x8AQwDc/ycAPwDx/xQAQwDc/ycAOADx/xsATADd/zAAUwDd/ygAWgD2/y8ATADd/zAAWgD2/y8AUwD2/zYAUwDd/ygASgDc/x8AUADy/xUAUwDd/ygAUADy/xUAWQD0/x4AOQDy/ywAQwDc/ycATADd/zAAOQDy/ywATADd/zAAQgD0/zUAOADx/xsAOQDy/ywAKACpABsAOADx/xsAKACpABsAJwCnAAoAPwCpAAQAUADy/xUAPwDx/xQAPwCpAAQAPwDx/xQALgCnAAMAMQCrACQAQgD0/zUAUwD2/zYAMQCrACQAUwD2/zYAQgCtACUAWgD2/y8AWQD0/x4ASACrAA0AWgD2/y8ASACrAA0ASQCtAB4ASgDc/x8APwDx/xQAUADy/xUAUwDd/ygAWQD0/x4AWgD2/y8AQwDc/ycAOQDy/ywAOADx/xsATADd/zAAUwD2/zYAQgD0/zUANQDAAAoAPwCpAAQALgCnAAMAPgDCABMASQCtAB4ASACrAA0ALgDAABEAJwCnAAoAKACpABsANwDCABoAMQCrACQAQgCtACUAuv8/ACUAxP8/ACEAyf/a/y4Auv8/ACUAyf/a/y4Av//a/zIA1f/e/0sA0P9DAD8Axv9DAEMA1f/e/0sAxv9DAEMAy//e/08Ax/9NACkAvf9NAC4Awf9PADcAx/9NACkAwf9PADcAy/9PADMAyP/Q/0cAw//O/z0Azf/O/zkAyP/Q/0cAzf/O/zkA0f/Q/0MA1//b/zMA0f9BACcA1f9CADEA1//b/zMA1f9CADEA2//d/z0AuP9CAD0AtP9BADMAuf/b/0AAuP9CAD0Auf/b/0AAvf/d/0kAvf9NAC4Ax/9NACkAxP8/ACEAvf9NAC4AxP8/ACEAuv8/ACUA0P9DAD8Ay/9PADMAwf9PADcA0P9DAD8Awf9PADcAxv9DAEMA0f9BACcAx/9NACkAy/9PADMA0f9BACcAy/9PADMA1f9CADEAwf9PADcAvf9NAC4AtP9BADMAwf9PADcAtP9BADMAuP9CAD0Ayf/a/y4Azf/O/zkAw//O/z0Ayf/a/y4Aw//O/z0Av//a/zIAyP/Q/0cA0f/Q/0MA1f/e/0sAyP/Q/0cA1f/e/0sAy//e/08A0f/Q/0MAzf/O/zkA1//b/zMA0f/Q/0MA1//b/zMA2//d/z0Auf/b/0AAw//O/z0AyP/Q/0cAuf/b/0AAyP/Q/0cAvf/d/0kAv//a/zIAuf/b/0AAtP9BADMAv//a/zIAtP9BADMAuv8/ACUA0f9BACcA1//b/zMAyf/a/y4A0f9BACcAyf/a/y4AxP8/ACEAuP9CAD0Avf/d/0kAy//e/08AuP9CAD0Ay//e/08Axv9DAEMA1f/e/0sA2//d/z0A1f9CADEA1f/e/0sA1f9CADEA0P9DAD8Azf/O/zkAyf/a/y4A1//b/zMA0f/Q/0MA2//d/z0A1f/e/0sAw//O/z0Auf/b/0AAv//a/zIAyP/Q/0cAy//e/08Avf/d/0kAx/9NACkA0f9BACcAxP8/ACEAy/9PADMA0P9DAD8A1f9CADEAvf9NAC4Auv8/ACUAtP9BADMAwf9PADcAuP9CAD0Axv9DAEMAGgA/AIUAJAA/AIEAKQDa/44AGgA/AIUAKQDa/44AHwDa/5IANQDe/6sAMABDAJ8AJgBDAKMANQDe/6sAJgBDAKMAKwDe/68AJwBNAIkAHQBNAI4AIQBPAJcAJwBNAIkAIQBPAJcAKwBPAJMAKADQ/6cAIwDO/50ALQDO/5kAKADQ/6cALQDO/5kAMQDQ/6MANwDb/5MAMQBBAIcANQBCAJEANwDb/5MANQBCAJEAOwDd/50AGABCAJ0AFABBAJMAGQDb/6AAGABCAJ0AGQDb/6AAHQDd/6kAHQBNAI4AJwBNAIkAJAA/AIEAHQBNAI4AJAA/AIEAGgA/AIUAMABDAJ8AKwBPAJMAIQBPAJcAMABDAJ8AIQBPAJcAJgBDAKMAMQBBAIcAJwBNAIkAKwBPAJMAMQBBAIcAKwBPAJMANQBCAJEAIQBPAJcAHQBNAI4AFABBAJMAIQBPAJcAFABBAJMAGABCAJ0AKQDa/44ALQDO/5kAIwDO/50AKQDa/44AIwDO/50AHwDa/5IAKADQ/6cAMQDQ/6MANQDe/6sAKADQ/6cANQDe/6sAKwDe/68AMQDQ/6MALQDO/5kANwDb/5MAMQDQ/6MANwDb/5MAOwDd/50AGQDb/6AAIwDO/50AKADQ/6cAGQDb/6AAKADQ/6cAHQDd/6kAHwDa/5IAGQDb/6AAFABBAJMAHwDa/5IAFABBAJMAGgA/AIUAMQBBAIcANwDb/5MAKQDa/44AMQBBAIcAKQDa/44AJAA/AIEAGABCAJ0AHQDd/6kAKwDe/68AGABCAJ0AKwDe/68AJgBDAKMANQDe/6sAOwDd/50ANQBCAJEANQDe/6sANQBCAJEAMABDAJ8ALQDO/5kAKQDa/44ANwDb/5MAMQDQ/6MAOwDd/50ANQDe/6sAIwDO/50AGQDb/6AAHwDa/5IAKADQ/6cAKwDe/68AHQDd/6kAJwBNAIkAMQBBAIcAJAA/AIEAKwBPAJMAMABDAJ8ANQBCAJEAHQBNAI4AGgA/AIUAFABBAJMAIQBPAJcAGABCAJ0AJgBDAKMAGQA/AFcAFQA/AGEACQDa/1wAGQA/AFcACQDa/1wADQDa/1IA7P/e/1AA+P9DAFUA/P9DAEsA7P/e/1AA/P9DAEsA8P/e/0YADQBNAF4AEQBNAFQABwBPAFAADQBNAF4ABwBPAFAAAwBPAFkA+P/Q/0kAAgDO/00A/v/O/1cA+P/Q/0kA/v/O/1cA9P/Q/1MA+//b/2IABwBBAGcA/v9CAGMA+//b/2IA/v9CAGMA8f/d/14ACgBCAEUAFABBAEkABwDb/0QACgBCAEUABwDb/0QA/v/d/0AAEQBNAFQADQBNAF4AFQA/AGEAEQBNAFQAFQA/AGEAGQA/AFcA+P9DAFUAAwBPAFkABwBPAFAA+P9DAFUABwBPAFAA/P9DAEsABwBBAGcADQBNAF4AAwBPAFkABwBBAGcAAwBPAFkA/v9CAGMABwBPAFAAEQBNAFQAFABBAEkABwBPAFAAFABBAEkACgBCAEUACQDa/1wA/v/O/1cAAgDO/00ACQDa/1wAAgDO/00ADQDa/1IA+P/Q/0kA9P/Q/1MA7P/e/1AA+P/Q/0kA7P/e/1AA8P/e/0YA9P/Q/1MA/v/O/1cA+//b/2IA9P/Q/1MA+//b/2IA8f/d/14ABwDb/0QAAgDO/00A+P/Q/0kABwDb/0QA+P/Q/0kA/v/d/0AADQDa/1IABwDb/0QAFABBAEkADQDa/1IAFABBAEkAGQA/AFcABwBBAGcA+//b/2IACQDa/1wABwBBAGcACQDa/1wAFQA/AGEACgBCAEUA/v/d/0AA8P/e/0YACgBCAEUA8P/e/0YA/P9DAEsA7P/e/1AA8f/d/14A/v9CAGMA7P/e/1AA/v9CAGMA+P9DAFUA/v/O/1cACQDa/1wA+//b/2IA9P/Q/1MA8f/d/14A7P/e/1AAAgDO/00ABwDb/0QADQDa/1IA+P/Q/0kA8P/e/0YA/v/d/0AADQBNAF4ABwBBAGcAFQA/AGEAAwBPAFkA+P9DAFUA/v9CAGMAEQBNAFQAGQA/AFcAFABBAEkABwBPAFAACgBCAEUA/P9DAEsAeQA/ALcAdQA/AMEAaQDa/7wAeQA/ALcAaQDa/7wAbQDa/7IATADe/7AAWABDALUAXABDAKsATADe/7AAXABDAKsAUADe/6YAbQBNAL4AcQBNALQAZwBPALAAbQBNAL4AZwBPALAAYwBPALkAWADQ/6kAYgDO/60AXgDO/7cAWADQ/6kAXgDO/7cAVADQ/7MAWwDb/8IAZwBBAMcAXgBCAMMAWwDb/8IAXgBCAMMAUQDd/74AagBCAKUAdABBAKkAZwDb/6QAagBCAKUAZwDb/6QAXgDd/6AAcQBNALQAbQBNAL4AdQA/AMEAcQBNALQAdQA/AMEAeQA/ALcAWABDALUAYwBPALkAZwBPALAAWABDALUAZwBPALAAXABDAKsAZwBBAMcAbQBNAL4AYwBPALkAZwBBAMcAYwBPALkAXgBCAMMAZwBPALAAcQBNALQAdABBAKkAZwBPALAAdABBAKkAagBCAKUAaQDa/7wAXgDO/7cAYgDO/60AaQDa/7wAYgDO/60AbQDa/7IAWADQ/6kAVADQ/7MATADe/7AAWADQ/6kATADe/7AAUADe/6YAVADQ/7MAXgDO/7cAWwDb/8IAVADQ/7MAWwDb/8IAUQDd/74AZwDb/6QAYgDO/60AWADQ/6kAZwDb/6QAWADQ/6kAXgDd/6AAbQDa/7IAZwDb/6QAdABBAKkAbQDa/7IAdABBAKkAeQA/ALcAZwBBAMcAWwDb/8IAaQDa/7wAZwBBAMcAaQDa/7wAdQA/AMEAagBCAKUAXgDd/6AAUADe/6YAagBCAKUAUADe/6YAXABDAKsATADe/7AAUQDd/74AXgBCAMMATADe/7AAXgBCAMMAWABDALUAXgDO/7cAaQDa/7wAWwDb/8IAVADQ/7MAUQDd/74ATADe/7AAYgDO/60AZwDb/6QAbQDa/7IAWADQ/6kAUADe/6YAXgDd/6AAbQBNAL4AZwBBAMcAdQA/AMEAYwBPALkAWABDALUAXgBCAMMAcQBNALQAeQA/ALcAdABBAKkAZwBPALAAagBCAKUAXABDAKsAeQA/ALf/dQA/AMH/aQDa/7z/eQA/ALf/aQDa/7z/bQDa/7L/TADe/7D/WABDALX/XABDAKv/TADe/7D/XABDAKv/UADe/6b/bQBNAL7/cQBNALT/ZwBPALD/bQBNAL7/ZwBPALD/YwBPALn/WADQ/6n/YgDO/63/XgDO/7f/WADQ/6n/XgDO/7f/VADQ/7P/WwDb/8L/ZwBBAMf/XgBCAMP/WwDb/8L/XgBCAMP/UQDd/77/agBCAKX/dABBAKn/ZwDb/6T/agBCAKX/ZwDb/6T/XgDd/6D/cQBNALT/bQBNAL7/dQA/AMH/cQBNALT/dQA/AMH/eQA/ALf/WABDALX/YwBPALn/ZwBPALD/WABDALX/ZwBPALD/XABDAKv/ZwBBAMf/bQBNAL7/YwBPALn/ZwBBAMf/YwBPALn/XgBCAMP/ZwBPALD/cQBNALT/dABBAKn/ZwBPALD/dABBAKn/agBCAKX/aQDa/7z/XgDO/7f/YgDO/63/aQDa/7z/YgDO/63/bQDa/7L/WADQ/6n/VADQ/7P/TADe/7D/WADQ/6n/TADe/7D/UADe/6b/VADQ/7P/XgDO/7f/WwDb/8L/VADQ/7P/WwDb/8L/UQDd/77/ZwDb/6T/YgDO/63/WADQ/6n/ZwDb/6T/WADQ/6n/XgDd/6D/bQDa/7L/ZwDb/6T/dABBAKn/bQDa/7L/dABBAKn/eQA/ALf/ZwBBAMf/WwDb/8L/aQDa/7z/ZwBBAMf/aQDa/7z/dQA/AMH/agBCAKX/XgDd/6D/UADe/6b/agBCAKX/UADe/6b/XABDAKv/TADe/7D/UQDd/77/XgBCAMP/TADe/7D/XgBCAMP/WABDALX/XgDO/7f/aQDa/7z/WwDb/8L/VADQ/7P/UQDd/77/TADe/7D/YgDO/63/ZwDb/6T/bQDa/7L/WADQ/6n/UADe/6b/XgDd/6D/bQBNAL7/ZwBBAMf/dQA/AMH/YwBPALn/WABDALX/XgBCAMP/cQBNALT/eQA/ALf/dABBAKn/ZwBPALD/agBCAKX/XABDAKv/mv8/AIUApP8/AIEAqf/a/44Amv8/AIUAqf/a/44An//a/5IAtf/e/6sAsP9DAJ8Apv9DAKMAtf/e/6sApv9DAKMAq//e/68Ap/9NAIkAnf9NAI4Aof9PAJcAp/9NAIkAof9PAJcAq/9PAJMAqP/Q/6cAo//O/50Arf/O/5kAqP/Q/6cArf/O/5kAsf/Q/6MAt//b/5MAsf9BAIcAtf9CAJEAt//b/5MAtf9CAJEAu//d/50AmP9CAJ0AlP9BAJMAmf/b/6AAmP9CAJ0Amf/b/6AAnf/d/6kAnf9NAI4Ap/9NAIkApP8/AIEAnf9NAI4ApP8/AIEAmv8/AIUAsP9DAJ8Aq/9PAJMAof9PAJcAsP9DAJ8Aof9PAJcApv9DAKMAsf9BAIcAp/9NAIkAq/9PAJMAsf9BAIcAq/9PAJMAtf9CAJEAof9PAJcAnf9NAI4AlP9BAJMAof9PAJcAlP9BAJMAmP9CAJ0Aqf/a/44Arf/O/5kAo//O/50Aqf/a/44Ao//O/50An//a/5IAqP/Q/6cAsf/Q/6MAtf/e/6sAqP/Q/6cAtf/e/6sAq//e/68Asf/Q/6MArf/O/5kAt//b/5MAsf/Q/6MAt//b/5MAu//d/50Amf/b/6AAo//O/50AqP/Q/6cAmf/b/6AAqP/Q/6cAnf/d/6kAn//a/5IAmf/b/6AAlP9BAJMAn//a/5IAlP9BAJMAmv8/AIUAsf9BAIcAt//b/5MAqf/a/44Asf9BAIcAqf/a/44ApP8/AIEAmP9CAJ0Anf/d/6kAq//e/68AmP9CAJ0Aq//e/68Apv9DAKMAtf/e/6sAu//d/50Atf9CAJEAtf/e/6sAtf9CAJEAsP9DAJ8Arf/O/5kAqf/a/44At//b/5MAsf/Q/6MAu//d/50Atf/e/6sAo//O/50Amf/b/6AAn//a/5IAqP/Q/6cAq//e/68Anf/d/6kAp/9NAIkAsf9BAIcApP8/AIEAq/9PAJMAsP9DAJ8Atf9CAJEAnf9NAI4Amv8/AIUAlP9BAJMAof9PAJcAmP9CAJ0Apv9DAKMA",c:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},carote:{v:"4P4AAAAB4P4AAAAB4P4AAAD/4P4AAAAB4P4AAAD/4P4AAAD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/wD/AAHg/wD/AAHg/wABAP/g/wD/AAHg/wABAP/g/wABAAEAACABAAEAACABAP8AACABAAEAACABAP8AACABAP8AACABAAEAAOD+AAEAAOD+AP8AAOD+AAEAAOD+AP8AAOD+AP8AAOD+4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+AP/g/wD/AP/g/wAB4P4AAAABAP/g/wD/4P4AAAAB4P4AAAD/AP/g/wABAAHg/wABAAEAACABAP/g/wABAAEAACABAP8AACABAAEAAOD+AAHg/wD/AP/g/wD/AAEAAOD+AP/g/wD/AP8AAOD+AP8AAOD+AP8AAOD+4P4AAAD/AP8AAOD+4P4AAAD/4P4AAAD/AP8AACABAP8AACAB4P4AAAABAP8AACAB4P4AAAAB4P4AAAABAP/g/wABAP8AACAB4P4AAAABAP/g/wD/4P4AAAD/AP8AAOD+AP8gAAAB4P4AAAABAP8AACABAP8gAAD/AP8AAOD+4P4AAAD/IAEAAAABIAEAAAABIAEAAAD/IAEAAAABIAEAAAD/IAEAAAD/AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/IAEAAAABAAHg/wABAAHg/wD/IAEAAAABAAHg/wD/IAEAAAD/AAEAAOD+AAEAAOD+IAEAAAD/AAEAAOD+IAEAAAD/IAEAAAD/AAEAACABAAEAACABIAEAAAABAAEAACABIAEAAAABIAEAAAABAAEAACABAAHg/wABIAEAAAABIAEAAAD/AAHg/wD/AAEAAOD+IAEAAAABAAEgAAABAAEAACABAAEAAOD+AAEgAAD/IAEAAAD/e/8/AMD/rv9UAKD/e/8/AID/rv9UAKD/e/8/AMD/uP+r/4D/rv9UAKD/rv9UAGD/e/8/AID/rv9UAGD/rv9UAKD/uP+r/4D/rv9UAGD/e/8/AED/e/8/AID/e/8/AED/rv9UAGD/uP+r/4D/e/8/AED/SP8qAGD/e/8/AID/SP8qAGD/e/8/AED/uP+r/4D/SP8qAGD/SP8qAKD/e/8/AID/SP8qAKD/SP8qAGD/uP+r/4D/SP8qAKD/e/8/AMD/e/8/AID/e/8/AMD/SP8qAKD/uP+r/4D/d/9+AFz/fP98AFP/c/94AE//d/9+AFz/c/94AE//bv97AFj/hf8tAG3/jv8wAHH/if8zAHr/hf8tAG3/if8zAHr/gP8vAHb/gf9CAH7/df90AGr/bP9wAGb/gf9CAH7/bP9wAGb/eP8+AHr/e/9pAEv/hP9tAE//kP87AGP/e/9pAEv/kP87AGP/h/83AF//df90AGr/d/9+AFz/bv97AFj/df90AGr/bv97AFj/bP9wAGb/c/94AE//fP98AFP/hP9tAE//c/94AE//hP9tAE//e/9pAEv/gP8vAHb/if8zAHr/gf9CAH7/gP8vAHb/gf9CAH7/eP8+AHr/kP87AGP/jv8wAHH/hf8tAG3/kP87AGP/hf8tAG3/h/83AF//iP9zAFz/g/92AGX/j/9DAHn/iP9zAFz/j/9DAHn/lP9BAHD/fP98AFP/d/9+AFz/g/92AGX/fP98AFP/g/92AGX/iP9zAFz/j/9DAHn/if8zAHr/jv8wAHH/j/9DAHn/jv8wAHH/lP9BAHD/lP9BAHD/kP87AGP/hP9tAE//lP9BAHD/hP9tAE//iP9zAFz/df90AGr/gf9CAH7/j/9DAHn/df90AGr/j/9DAHn/g/92AGX/if8zAHr/j/9DAHn/gf9CAH7/jv8wAHH/kP87AGP/lP9BAHD/d/9+AFz/df90AGr/g/92AGX/fP98AFP/iP9zAFz/hP9tAE//dP84AG3/Z/9qAFn/bf9oAFD/dP84AG3/bf9oAFD/ef81AGT/Z/9qAFn/bv97AFj/c/94AE//Z/9qAFn/c/94AE//bf9oAFD/hf8tAG3/gP8vAHb/dP84AG3/hf8tAG3/dP84AG3/ef81AGT/e/9pAEv/h/83AF//ef81AGT/e/9pAEv/ef81AGT/bf9oAFD/dP84AG3/eP8+AHr/bP9wAGb/dP84AG3/bP9wAGb/Z/9qAFn/dP84AG3/gP8vAHb/eP8+AHr/h/83AF//hf8tAG3/ef81AGT/bP9wAGb/bv97AFj/Z/9qAFn/bf9oAFD/c/94AE//e/9pAEv/W/9oAK7/Xf9tAKX/VP9qAKH/W/9oAK7/VP9qAKH/Uv9kAKr/ff8nAIT/hv8rAIj/hP8mAJH/ff8nAIT/hP8mAJH/e/8iAI3/e/8sAJ//YP9YALL/V/9UAK7/e/8sAJ//V/9UAK7/cv8oAJv/Xf9kAJP/Zv9oAJf/gf87AIT/Xf9kAJP/gf87AIT/eP84AH//YP9YALL/W/9oAK7/Uv9kAKr/YP9YALL/Uv9kAKr/V/9UAK7/VP9qAKH/Xf9tAKX/Zv9oAJf/VP9qAKH/Zv9oAJf/Xf9kAJP/e/8iAI3/hP8mAJH/e/8sAJ//e/8iAI3/e/8sAJ//cv8oAJv/gf87AIT/hv8rAIj/ff8nAIT/gf87AIT/ff8nAIT/eP84AH//bf9mAKT/a/9hAK3/hv81AJr/bf9mAKT/hv81AJr/iP86AJH/Xf9tAKX/W/9oAK7/a/9hAK3/Xf9tAKX/a/9hAK3/bf9mAKT/hv81AJr/hP8mAJH/hv8rAIj/hv81AJr/hv8rAIj/iP86AJH/iP86AJH/gf87AIT/Zv9oAJf/iP86AJH/Zv9oAJf/bf9mAKT/YP9YALL/e/8sAJ//hv81AJr/YP9YALL/hv81AJr/a/9hAK3/e/8sAJ//hP8mAJH/hv81AJr/iP86AJH/hv8rAIj/gf87AIT/a/9hAK3/W/9oAK7/YP9YALL/Zv9oAJf/Xf9tAKX/bf9mAKT/a/8pAI7/UP9WAKH/Uv9bAJj/a/8pAI7/Uv9bAJj/bf8vAIT/UP9WAKH/Uv9kAKr/VP9qAKH/UP9WAKH/VP9qAKH/Uv9bAJj/ff8nAIT/e/8iAI3/a/8pAI7/ff8nAIT/a/8pAI7/bf8vAIT/Xf9kAJP/eP84AH//bf8vAIT/Xf9kAJP/bf8vAIT/Uv9bAJj/a/8pAI7/cv8oAJv/V/9UAK7/a/8pAI7/V/9UAK7/UP9WAKH/e/8iAI3/cv8oAJv/a/8pAI7/ff8nAIT/bf8vAIT/eP84AH//Uv9kAKr/UP9WAKH/V/9UAK7/VP9qAKH/Xf9kAJP/Uv9bAJj/Wf+ZAIf/Xf+aAH3/U/+XAHn/Wf+ZAIf/U/+XAHn/UP+VAIP/hP8gAHn/jv8kAH3/iv8iAIf/hP8gAHn/iv8iAIf/gf8fAIP/fv81AJH/Xf+DAJH/VP+AAI3/fv81AJH/VP+AAI3/df8xAI3/X/+EAG//aP+IAHP/if85AHP/X/+EAG//if85AHP/gP82AG//Xf+DAJH/Wf+ZAIf/UP+VAIP/Xf+DAJH/UP+VAIP/VP+AAI3/U/+XAHn/Xf+aAH3/aP+IAHP/U/+XAHn/aP+IAHP/X/+EAG//gf8fAIP/iv8iAIf/fv81AJH/gf8fAIP/fv81AJH/df8xAI3/if85AHP/jv8kAH3/hP8gAHn/if85AHP/hP8gAHn/gP82AG//bv+KAIH/av+JAIv/i/86AIv/bv+KAIH/i/86AIv/jv87AIH/Xf+aAH3/Wf+ZAIf/av+JAIv/Xf+aAH3/av+JAIv/bv+KAIH/i/86AIv/iv8iAIf/jv8kAH3/i/86AIv/jv8kAH3/jv87AIH/jv87AIH/if85AHP/aP+IAHP/jv87AIH/aP+IAHP/bv+KAIH/Xf+DAJH/fv81AJH/i/86AIv/Xf+DAJH/i/86AIv/av+JAIv/fv81AJH/iv8iAIf/i/86AIv/jv87AIH/jv8kAH3/if85AHP/av+JAIv/Wf+ZAIf/Xf+DAJH/aP+IAHP/Xf+aAH3/bv+KAIH/b/8vAH//T/99AH//Uv9/AHX/b/8vAH//Uv9/AHX/c/8wAHX/T/99AH//UP+VAIP/U/+XAHn/T/99AH//U/+XAHn/Uv9/AHX/hP8gAHn/gf8fAIP/b/8vAH//hP8gAHn/b/8vAH//c/8wAHX/X/+EAG//gP82AG//c/8wAHX/X/+EAG//c/8wAHX/Uv9/AHX/b/8vAH//df8xAI3/VP+AAI3/b/8vAH//VP+AAI3/T/99AH//gf8fAIP/df8xAI3/b/8vAH//hP8gAHn/c/8wAHX/gP82AG//UP+VAIP/T/99AH//VP+AAI3/U/+XAHn/X/+EAG//Uv9/AHX/SP8qAKD/e/8/AMD/e/8/AID/e/8/AMD/SP8qAKD/uP+r/4D/SP8qAGD/SP8qAKD/e/8/AID/SP8qAKD/SP8qAGD/uP+r/4D/e/8/AED/SP8qAGD/e/8/AID/SP8qAGD/e/8/AED/uP+r/4D/rv9UAGD/e/8/AED/e/8/AID/e/8/AED/rv9UAGD/uP+r/4D/rv9UAKD/rv9UAGD/e/8/AID/rv9UAGD/rv9UAKD/uP+r/4D/e/8/AMD/rv9UAKD/e/8/AID/rv9UAKD/e/8/AMD/uP+r/4D/0/9QAKwA+f9cAG8Asf9SAGwA+f9cAG8A0/9QAKwAyv+f/1gA+f9cAG8A1/9eAC8Asf9SAGwA1/9eAC8A+f9cAG8Ayv+f/1gA1/9eAC8Aj/9UACsAsf9SAGwAj/9UACsA1/9eAC8Ayv+f/1gAj/9UACsAaf9IAGgAsf9SAGwAaf9IAGgAj/9UACsAyv+f/1gAaf9IAGgAi/9GAKgAsf9SAGwAi/9GAKgAaf9IAGgAyv+f/1gAi/9GAKgA0/9QAKwAsf9SAGwA0/9QAKwAi/9GAKgAyv+f/1gAqf+bAEUAqP+XADkAnP+WADoAqf+bAEUAnP+WADoAnf+ZAEYArP88AFUAuP8+AFQAuP9BAF8ArP88AFUAuP9BAF8ArP8/AGAAtv9UAGcArP+PAFUAoP+OAFYAtv9UAGcAoP+OAFYAqv9SAGgAnv+DADMAqv+FADIAtf9JAEQAnv+DADMAtf9JAEQAqf9HAEUArP+PAFUAqf+bAEUAnf+ZAEYArP+PAFUAnf+ZAEYAoP+OAFYAnP+WADoAqP+XADkAqv+FADIAnP+WADoAqv+FADIAnv+DADMArP8/AGAAuP9BAF8Atv9UAGcArP8/AGAAtv9UAGcAqv9SAGgAtf9JAEQAuP8+AFQArP88AFUAtf9JAEQArP88AFUAqf9HAEUAt/+KAD0At/+OAEgAwf9SAFoAt/+KAD0Awf9SAFoAwf9OAE4AqP+XADkAqf+bAEUAt/+OAEgAqP+XADkAt/+OAEgAt/+KAD0Awf9SAFoAuP9BAF8AuP8+AFQAwf9SAFoAuP8+AFQAwf9OAE4Awf9OAE4Atf9JAEQAqv+FADIAwf9OAE4Aqv+FADIAt/+KAD0ArP+PAFUAtv9UAGcAwf9SAFoArP+PAFUAwf9SAFoAt/+OAEgAuP9BAF8Awf9SAFoAtv9UAGcAuP8+AFQAtf9JAEQAwf9OAE4Aqf+bAEUArP+PAFUAt/+OAEgAqP+XADkAt/+KAD0Aqv+FADIAnv9NAF0Ak/+IAEsAk/+FAD8Anv9NAF0Ak/+FAD8Anf9JAFEAk/+IAEsAnf+ZAEYAnP+WADoAk/+IAEsAnP+WADoAk/+FAD8ArP88AFUArP8/AGAAnv9NAF0ArP88AFUAnv9NAF0Anf9JAFEAnv+DADMAqf9HAEUAnf9JAFEAnv+DADMAnf9JAFEAk/+FAD8Anv9NAF0Aqv9SAGgAoP+OAFYAnv9NAF0AoP+OAFYAk/+IAEsAnv9NAF0ArP8/AGAAqv9SAGgAqf9HAEUArP88AFUAnf9JAFEAoP+OAFYAnf+ZAEYAk/+IAEsAk/+FAD8AnP+WADoAnv+DADMAtP+GAKcAsv+MAJ0Apv+KAJ4AtP+GAKcApv+KAJ4AqP+EAKgAr/83AHEAu/85AHAAvP8zAHoAr/83AHEAvP8zAHoAsP8yAHsAvf88AIwAt/9zAKsAq/9xAKwAvf88AIwAq/9xAKwAsf86AI0Apv+CAIwAsv+EAIsAt/9MAGwApv+CAIwAt/9MAGwAq/9LAG0At/9zAKsAtP+GAKcAqP+EAKgAt/9zAKsAqP+EAKgAq/9xAKwApv+KAJ4Asv+MAJ0Asv+EAIsApv+KAJ4Asv+EAIsApv+CAIwAsP8yAHsAvP8zAHoAvf88AIwAsP8yAHsAvf88AIwAsf86AI0At/9MAGwAu/85AHAAr/83AHEAt/9MAGwAr/83AHEAq/9LAG0Av/+AAJQAwf96AJ8Ax/9DAIEAv/+AAJQAx/9DAIEAxf9JAHYAsv+MAJ0AtP+GAKcAwf96AJ8Asv+MAJ0Awf96AJ8Av/+AAJQAx/9DAIEAvP8zAHoAu/85AHAAx/9DAIEAu/85AHAAxf9JAHYAxf9JAHYAt/9MAGwAsv+EAIsAxf9JAHYAsv+EAIsAv/+AAJQAt/9zAKsAvf88AIwAx/9DAIEAt/9zAKsAx/9DAIEAwf96AJ8Avf88AIwAvP8zAHoAx/9DAIEAxf9JAHYAu/85AHAAt/9MAGwAwf96AJ8AtP+GAKcAt/9zAKsAsv+EAIsAsv+MAJ0Av/+AAJQAo/8+AIQAnf91AKIAm/97AJcAo/8+AIQAm/97AJcAof9DAHkAnf91AKIAqP+EAKgApv+KAJ4Anf91AKIApv+KAJ4Am/97AJcAr/83AHEAsP8yAHsAo/8+AIQAr/83AHEAo/8+AIQAof9DAHkApv+CAIwAq/9LAG0Aof9DAHkApv+CAIwAof9DAHkAm/97AJcAo/8+AIQAsf86AI0Aq/9xAKwAo/8+AIQAq/9xAKwAnf91AKIAsP8yAHsAsf86AI0Ao/8+AIQAr/83AHEAof9DAHkAq/9LAG0AqP+EAKgAnf91AKIAq/9xAKwApv+KAJ4Apv+CAIwAm/97AJcAqP++AH0Ap/+/AHEAm/++AHIAqP++AH0Am/++AHIAnP+8AH4Ar/8uAGIAu/8wAGEAvP8uAG0Ar/8uAGIAvP8uAG0AsP8tAG4Auv9FAHwArP+lAIYAoP+jAIcAuv9FAHwAoP+jAIcArv9EAH0Anf+nAGMAqf+pAGIAtv9JAFgAnf+nAGMAtv9JAFgAqv9HAFkArP+lAIYAqP++AH0AnP+8AH4ArP+lAIYAnP+8AH4AoP+jAIcAm/++AHIAp/+/AHEAqf+pAGIAm/++AHIAqf+pAGIAnf+nAGMAsP8tAG4AvP8uAG0Auv9FAHwAsP8tAG4Auv9FAHwArv9EAH0Atv9JAFgAu/8wAGEAr/8uAGIAtv9JAFgAr/8uAGIAqv9HAFkAtv+pAG0At/+oAHkAxf9IAG8Atv+pAG0Axf9IAG8Aw/9JAGMAp/+/AHEAqP++AH0At/+oAHkAp/+/AHEAt/+oAHkAtv+pAG0Axf9IAG8AvP8uAG0Au/8wAGEAxf9IAG8Au/8wAGEAw/9JAGMAw/9JAGMAtv9JAFgAqf+pAGIAw/9JAGMAqf+pAGIAtv+pAG0ArP+lAIYAuv9FAHwAxf9IAG8ArP+lAIYAxf9IAG8At/+oAHkAuv9FAHwAvP8uAG0Axf9IAG8Aw/9JAGMAu/8wAGEAtv9JAFgAt/+oAHkAqP++AH0ArP+lAIYAqf+pAGIAp/+/AHEAtv+pAG0Aof9DAHIAk/+jAHwAkv+kAHAAof9DAHIAkv+kAHAAoP9EAGYAk/+jAHwAnP+8AH4Am/++AHIAk/+jAHwAm/++AHIAkv+kAHAAr/8uAGIAsP8tAG4Aof9DAHIAr/8uAGIAof9DAHIAoP9EAGYAnf+nAGMAqv9HAFkAoP9EAGYAnf+nAGMAoP9EAGYAkv+kAHAAof9DAHIArv9EAH0AoP+jAIcAof9DAHIAoP+jAIcAk/+jAHwAsP8tAG4Arv9EAH0Aof9DAHIAr/8uAGIAoP9EAGYAqv9HAFkAnP+8AH4Ak/+jAHwAoP+jAIcAm/++AHIAnf+nAGMAkv+kAHAAi/9GAKgA0/9QAKwAsf9SAGwA0/9QAKwAi/9GAKgAyv+f/1gAaf9IAGgAi/9GAKgAsf9SAGwAi/9GAKgAaf9IAGgAyv+f/1gAj/9UACsAaf9IAGgAsf9SAGwAaf9IAGgAj/9UACsAyv+f/1gA1/9eAC8Aj/9UACsAsf9SAGwAj/9UACsA1/9eAC8Ayv+f/1gA+f9cAG8A1/9eAC8Asf9SAGwA1/9eAC8A+f9cAG8Ayv+f/1gA0/9QAKwA+f9cAG8Asf9SAGwA+f9cAG8A0/9QAKwAyv+f/1gAIwBmAOv/YwBgABQAZQBWAMn/YwBgABQAIwBmAOv/RQCc/+L/YwBgABQApQBQAPL/ZQBWAMn/pQBQAPL/YwBgABQARQCc/+L/pQBQAPL/pwBFAKf/ZQBWAMn/pwBFAKf/pQBQAPL/RQCc/+L/pwBFAKf/aABLAH7/ZQBWAMn/aABLAH7/pwBFAKf/RQCc/+L/aABLAH7/JgBbAJ//ZQBWAMn/JgBbAJ//aABLAH7/RQCc/+L/JgBbAJ//IwBmAOv/ZQBWAMn/IwBmAOv/JgBbAJ//RQCc/+L/oQCTAMH/rACMAMH/qwCLALX/oQCTAMH/qwCLALX/oACSALX/dgA5AMP/dwA6AND/bABBAND/dgA5AMP/bABBAND/awBAAMT/awBWAM7/jgCMAMT/jACLALj/awBWAM7/jACLALj/aQBUAMH/rAB2ALf/rgB4AMP/igBBAM3/rAB2ALf/igBBAM3/iQBAAMH/jgCMAMT/oQCTAMH/oACSALX/jgCMAMT/oACSALX/jACLALj/qwCLALX/rACMAMH/rgB4AMP/qwCLALX/rgB4AMP/rAB2ALf/awBAAMT/bABBAND/awBWAM7/awBAAMT/awBWAM7/aQBUAMH/igBBAM3/dwA6AND/dgA5AMP/igBBAM3/dgA5AMP/iQBAAMH/pACAAND/mgCHAND/dgBQANr/pACAAND/dgBQANr/gQBJANr/rACMAMH/oQCTAMH/mgCHAND/rACMAMH/mgCHAND/pACAAND/dgBQANr/bABBAND/dwA6AND/dgBQANr/dwA6AND/gQBJANr/gQBJANr/igBBAM3/rgB4AMP/gQBJANr/rgB4AMP/pACAAND/jgCMAMT/awBWAM7/dgBQANr/jgCMAMT/dgBQANr/mgCHAND/bABBAND/dgBQANr/awBWAM7/dwA6AND/igBBAM3/gQBJANr/oQCTAMH/jgCMAMT/mgCHAND/rACMAMH/pACAAND/rgB4AMP/cwBMALX/lgCDAKv/oAB8AKv/cwBMALX/oAB8AKv/fQBFALT/lgCDAKv/oACSALX/qwCLALX/lgCDAKv/qwCLALX/oAB8AKv/dgA5AMP/awBAAMT/cwBMALX/dgA5AMP/cwBMALX/fQBFALT/rAB2ALf/iQBAAMH/fQBFALT/rAB2ALf/fQBFALT/oAB8AKv/cwBMALX/aQBUAMH/jACLALj/cwBMALX/jACLALj/lgCDAKv/cwBMALX/awBAAMT/aQBUAMH/iQBAAMH/dgA5AMP/fQBFALT/jACLALj/oACSALX/lgCDAKv/oAB8AKv/qwCLALX/rAB2ALf/OACbAMv/RACdAMn/QwCcAL3/OACbAMv/QwCcAL3/NwCZAL7/WQA8AMb/WgA9ANL/TgA7ANT/WQA8AMb/TgA7ANT/TAA5AMf/PgBIANT/LwCIAM7/LgCHAMH/PgBIANT/LgCHAMH/PABHAMf/UwCOAL3/VACQAMn/YwBQAM//UwCOAL3/YwBQAM//YQBPAMP/LwCIAM7/OACbAMv/NwCZAL7/LwCIAM7/NwCZAL7/LgCHAMH/QwCcAL3/RACdAMn/VACQAMn/QwCcAL3/VACQAMn/UwCOAL3/TAA5AMf/TgA7ANT/PgBIANT/TAA5AMf/PgBIANT/PABHAMf/YwBQAM//WgA9ANL/WQA8AMb/YwBQAM//WQA8AMb/YQBPAMP/SQCPANf/PQCMANn/SwBMAN//SQCPANf/SwBMAN//WABPAN3/RACdAMn/OACbAMv/PQCMANn/RACdAMn/PQCMANn/SQCPANf/SwBMAN//TgA7ANT/WgA9ANL/SwBMAN//WgA9ANL/WABPAN3/WABPAN3/YwBQAM//VACQAMn/WABPAN3/VACQAMn/SQCPANf/LwCIAM7/PgBIANT/SwBMAN//LwCIAM7/SwBMAN//PQCMANn/PgBIANT/TgA7ANT/SwBMAN//WABPAN3/WgA9ANL/YwBQAM//PQCMANn/OACbAMv/LwCIAM7/VACQAMn/RACdAMn/SQCPANf/SABIALn/OQCIALP/RgCKALL/SABIALn/RgCKALL/VABLALj/OQCIALP/NwCZAL7/QwCcAL3/OQCIALP/QwCcAL3/RgCKALL/WQA8AMb/TAA5AMf/SABIALn/WQA8AMb/SABIALn/VABLALj/UwCOAL3/YQBPAMP/VABLALj/UwCOAL3/VABLALj/RgCKALL/SABIALn/PABHAMf/LgCHAMH/SABIALn/LgCHAMH/OQCIALP/TAA5AMf/PABHAMf/SABIALn/WQA8AMb/VABLALj/YQBPAMP/NwCZAL7/OQCIALP/LgCHAMH/QwCcAL3/UwCOAL3/RgCKALL/cwDGAMD/fwDEAL//fgDDALL/cwDGAMD/fgDDALL/cgDFALP/ZAAvAMb/ZQAwANP/WQAyANT/ZAAvAMb/WQAyANT/WAAxAMf/UQBNANH/YgCwAMT/YQCvALj/UQBNANH/YQCvALj/UABMAMX/hgCoALX/iACpAMH/dgBGAM//hgCoALX/dgBGAM//dQBFAML/YgCwAMT/cwDGAMD/cgDFALP/YgCwAMT/cgDFALP/YQCvALj/fgDDALL/fwDEAL//iACpAMH/fgDDALL/iACpAMH/hgCoALX/WAAxAMf/WQAyANT/UQBNANH/WAAxAMf/UQBNANH/UABMAMX/dgBGAM//ZQAwANP/ZAAvAMb/dgBGAM//ZAAvAMb/dQBFAML/fACtAM//cACvAND/XwBMAN3/fACtAM//XwBMAN3/awBKANz/fwDEAL//cwDGAMD/cACvAND/fwDEAL//cACvAND/fACtAM//XwBMAN3/WQAyANT/ZQAwANP/XwBMAN3/ZQAwANP/awBKANz/awBKANz/dgBGAM//iACpAMH/awBKANz/iACpAMH/fACtAM//YgCwAMT/UQBNANH/XwBMAN3/YgCwAMT/XwBMAN3/cACvAND/UQBNANH/WQAyANT/XwBMAN3/awBKANz/ZQAwANP/dgBGAM//cACvAND/cwDGAMD/YgCwAMT/iACpAMH/fwDEAL//fACtAM//WwBIALf/bACrAKr/eQCpAKn/WwBIALf/eQCpAKn/ZwBGALf/bACrAKr/cgDFALP/fgDDALL/bACrAKr/fgDDALL/eQCpAKn/ZAAvAMb/WAAxAMf/WwBIALf/ZAAvAMb/WwBIALf/ZwBGALf/hgCoALX/dQBFAML/ZwBGALf/hgCoALX/ZwBGALf/eQCpAKn/WwBIALf/UABMAMX/YQCvALj/WwBIALf/YQCvALj/bACrAKr/WAAxAMf/UABMAMX/WwBIALf/ZAAvAMb/ZwBGALf/dQBFAML/cgDFALP/bACrAKr/YQCvALj/fgDDALL/hgCoALX/eQCpAKn/JgBbAJ//IwBmAOv/ZQBWAMn/IwBmAOv/JgBbAJ//RQCc/+L/aABLAH7/JgBbAJ//ZQBWAMn/JgBbAJ//aABLAH7/RQCc/+L/pwBFAKf/aABLAH7/ZQBWAMn/aABLAH7/pwBFAKf/RQCc/+L/pQBQAPL/pwBFAKf/ZQBWAMn/pwBFAKf/pQBQAPL/RQCc/+L/YwBgABQApQBQAPL/ZQBWAMn/pQBQAPL/YwBgABQARQCc/+L/IwBmAOv/YwBgABQAZQBWAMn/YwBgABQAIwBmAOv/RQCc/+L/",c:"DAwBAQwMDAwMDAQEBAQEBAwMDAwMDAwMDAwMDAQEDAwEBAwMDAwMDAwMBAQVERURFREVERURFREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEQgRCBEVEQgRCBEVERURFREVERURFREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEQgRCBEVEQgRCBEVERURFREVERURFREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEQgRCBEVEQgRCBE="},"orto-terra":{v:"4P4AAAAB4P4AAAAB4P4AAAD/4P4AAAAB4P4AAAD/4P4AAAD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/wD/AAHg/wD/AAHg/wABAP/g/wD/AAHg/wABAP/g/wABAAEAACABAAEAACABAP8AACABAAEAACABAP8AACABAP8AACABAAEAAOD+AAEAAOD+AP8AAOD+AAEAAOD+AP8AAOD+AP8AAOD+4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+AP/g/wD/AP/g/wAB4P4AAAABAP/g/wD/4P4AAAAB4P4AAAD/AP/g/wABAAHg/wABAAEAACABAP/g/wABAAEAACABAP8AACABAAEAAOD+AAHg/wD/AP/g/wD/AAEAAOD+AP/g/wD/AP8AAOD+AP8AAOD+AP8AAOD+4P4AAAD/AP8AAOD+4P4AAAD/4P4AAAD/AP8AACABAP8AACAB4P4AAAABAP8AACAB4P4AAAAB4P4AAAABAP/g/wABAP8AACAB4P4AAAABAP/g/wD/4P4AAAD/AP8AAOD+AP8gAAAB4P4AAAABAP8AACABAP8gAAD/AP8AAOD+4P4AAAD/IAEAAAABIAEAAAABIAEAAAD/IAEAAAABIAEAAAD/IAEAAAD/AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/IAEAAAABAAHg/wABAAHg/wD/IAEAAAABAAHg/wD/IAEAAAD/AAEAAOD+AAEAAOD+IAEAAAD/AAEAAOD+IAEAAAD/IAEAAAD/AAEAACABAAEAACABIAEAAAABAAEAACABIAEAAAABIAEAAAABAAEAACABAAHg/wABIAEAAAABIAEAAAD/AAHg/wD/AAEAAOD+IAEAAAABAAEgAAABAAEAACABAAEAAOD+AAEgAAD/IAEAAAD/",c:"DAwBAQwMDAwMDAQEBAQEBAwMDAwMDAwMDAwMDAQEDAwEBAwMDAwMDAwMBAQ="},"gatto-corpo":{v:"/f8gAHD/fQAgALj//f8gAAAAfQAgALj//f8gAHD//f8gAwAAff8gALj//f8gAHD//f8gAAAA/f8gAHD/ff8gALj//f8gAwAAff8gAEgAff8gALj//f8gAAAAff8gALj/ff8gAEgA/f8gAwAA/f8gAJAAff8gAEgA/f8gAAAAff8gAEgA/f8gAJAA/f8gAwAAfQAgAEgA/f8gAJAA/f8gAAAA/f8gAJAAfQAgAEgA/f8gAwAAfQAgALj/fQAgAEgA/f8gAAAAfQAgAEgAfQAgALj//f8gAwAA",c:"ExMTExMTExMTExMT"},"gatto-testa":{v:"mwAeA77/PgAeA2H//f9gAwAAmwAeA77/3QCAAqP/WQCAAiD/mwAeA77/WQCAAiD/PgAeA2H/3QCAAqP/mwDiAb7/PgDiAWH/3QCAAqP/PgDiAWH/WQCAAiD/PgDiAWH/mwDiAb7//f+gAQAAPgAeA2H/u/8eA2H//f9gAwAAPgAeA2H/WQCAAiD/oP+AAiD/PgAeA2H/oP+AAiD/u/8eA2H/WQCAAiD/PgDiAWH/u//iAWH/WQCAAiD/u//iAWH/oP+AAiD/u//iAWH/PgDiAWH//f+gAQAAu/8eA2H/Xv8eA77//f9gAwAAu/8eA2H/oP+AAiD/Hf+AAqP/u/8eA2H/Hf+AAqP/Xv8eA77/oP+AAiD/u//iAWH/Xv/iAb7/oP+AAiD/Xv/iAb7/Hf+AAqP/Xv/iAb7/u//iAWH//f+gAQAAXv8eA77/Xv8eA0EA/f9gAwAAXv8eA77/Hf+AAqP/Hf+AAl0AXv8eA77/Hf+AAl0AXv8eA0EAHf+AAqP/Xv/iAb7/Xv/iAUEAHf+AAqP/Xv/iAUEAHf+AAl0AXv/iAUEAXv/iAb7//f+gAQAAXv8eA0EAu/8eA54A/f9gAwAAXv8eA0EARP/fAkwAsP/fArgAXv8eA0EAsP/fArgAu/8eA54ARP/fAkwAHf+AAl0Ac/+AArMARP/fAkwAc/+AArMAjv/fApcAq/+/AsYAsP/fArgAjv/fApcAq/+/AsYAjv/fApcAhf+/AqAAc/+AArMAoP+AAuAAq/+/AsYAc/+AArMAq/+/AsYAhf+/AqAAHf+AAl0AXv/iAUEAu//iAZ4AHf+AAl0Au//iAZ4AoP+AAuAAu//iAZ4AXv/iAUEA/f+gAQAAu/8eA54APgAeA54A/f9gAwAAu/8eA54AoP+AAuAAWQCAAuAAu/8eA54AWQCAAuAAPgAeA54AoP+AAuAAu//iAZ4APgDiAZ4AoP+AAuAAPgDiAZ4AWQCAAuAAPgDiAZ4Au//iAZ4A/f+gAQAAPgAeA54AmwAeA0EA/f9gAwAAPgAeA54ASQDfArgAtQDfAkwAPgAeA54AtQDfAkwAmwAeA0EASQDfArgATwC/AsYAdAC/AqAASQDfArgAdAC/AqAAawDfApcAhwCAArMA3QCAAl0AtQDfAkwAhwCAArMAtQDfAkwAawDfApcATwC/AsYAWQCAAuAAhwCAArMATwC/AsYAhwCAArMAdAC/AqAAWQCAAuAAPgDiAZ4AmwDiAUEAWQCAAuAAmwDiAUEA3QCAAl0AmwDiAUEAPgDiAZ4A/f+gAQAAmwAeA0EAmwAeA77//f9gAwAAmwAeA0EA3QCAAl0A3QCAAqP/mwAeA0EA3QCAAqP/mwAeA77/3QCAAl0AmwDiAUEAmwDiAb7/3QCAAl0AmwDiAb7/3QCAAqP/mwDiAb7/mwDiAUEA/f+gAQAAfQCAAqD/3QCAAtD/fQCAAgAA3QCAAtD/fQCAAqD/fQAmBAAAHQCAAtD/fQCAAqD/fQCAAgAAfQCAAqD/HQCAAtD/fQAmBAAAHQCAAjAAHQCAAtD/fQCAAgAAHQCAAtD/HQCAAjAAfQAmBAAAfQCAAmAAHQCAAjAAfQCAAgAAHQCAAjAAfQCAAmAAfQAmBAAA3QCAAjAAfQCAAmAAfQCAAgAAfQCAAmAA3QCAAjAAfQAmBAAA3QCAAtD/3QCAAjAAfQCAAgAA3QCAAjAA3QCAAtD/fQAmBAAAff+AAqD/3f+AAtD/ff+AAgAA3f+AAtD/ff+AAqD/ff8mBAAAHf+AAtD/ff+AAqD/ff+AAgAAff+AAqD/Hf+AAtD/ff8mBAAAHf+AAjAAHf+AAtD/ff+AAgAAHf+AAtD/Hf+AAjAAff8mBAAAff+AAmAAHf+AAjAAff+AAgAAHf+AAjAAff+AAmAAff8mBAAA3f+AAjAAff+AAmAAff+AAgAAff+AAmAA3f+AAjAAff8mBAAA3f+AAtD/3f+AAjAAff+AAgAA3f+AAjAA3f+AAtD/ff8mBAAAOAD7AYIAXQA8At0A/f/4AegAXQA8At0A/f9lAhYB/f/4AegA/f9lAhYBnf88At0A/f/4AegAnf88At0Awf/7AYIA/f/4AegAwf/7AYIAOAD7AYIA/f/4AegAXQA8At0AOACsAssA/f9lAhYBOAD7AYIAXQBqAm8AXQA8At0Awf/7AYIA/f9BAjcAOAD7AYIAnf88At0Anf9qAm8Awf/7AYIA/f9lAhYBwf+sAssAnf88At0AOACsAssAXQBqAm8A/f+vAmQAXQBqAm8A/f9BAjcA/f+vAmQA/f9BAjcAnf9qAm8A/f+vAmQAnf9qAm8Awf+sAssA/f+vAmQAwf+sAssAOACsAssA/f+vAmQAOACsAssAXQA8At0AXQBqAm8AXQBqAm8AOAD7AYIA/f9BAjcA/f9BAjcAwf/7AYIAnf9qAm8Anf9qAm8Anf88At0Awf+sAssAwf+sAssA/f9lAhYBOACsAssA",c:"AgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXFyAgAgICAgICAgICAgICFxcCAiAgAgICAgICAgICAgICAgICAhYCFgICAgICAgICAhYCFgICAgICAgICAgICAgICAgICAgICAhY="},"gatto-coda":{v:"6f89Afb+6f86AfX+6f8vAQX/6f9kASr/6f9TAQ3/6f89Afb+6f9CAYv/6f9oAWP/6f9kASr/6f/qAGr/6f8PAYf/6f9CAYv/6f/JALj/6f/EAKz/6f++AKD/6f/FALv/6f/IALv/6f/JALj/6f+YALD/6f+jAMH/6f+2AL3/6f+6ADX/6f+PAGj/6f+YALD/6f8SAVf/6f/uADj/6f+6ADX/6f8jARH/6f8jART/6f8vASH/6f89Afb+6f8vAQX/6f8jARH/6f/FALv/6f/JALj/6f++AKD/6f+YALD/6f+2AL3/6f/FALv/6f89Afb+6f8jARH/6f8vASH/6f+YALD/6f/FALv/6f++AKD/6f89Afb+6f8vASH/6f9AATn/6f+YALD/6f++AKD/6f/IAGD/6f9kASr/6f89Afb+6f9AATn/6f+6ADX/6f+YALD/6f/IAGD/6f9kASr/6f9AATn/6f8zAWL/6f+6ADX/6f/IAGD/6f/qAGr/6f9CAYv/6f9kASr/6f8zAWL/6f+6ADX/6f/qAGr/6f9CAYv/6f9CAYv/6f8zAWL/6f8SAVf/6f8SAVf/6f+6ADX/6f9CAYv/EAAvAQX/EAA6AfX+EAA9Afb+EAA9Afb+EABTAQ3/EABkASr/EABkASr/EABoAWP/EABCAYv/EABCAYv/EAAPAYf/EADqAGr/EAC+AKD/EADEAKz/EADJALj/EADJALj/EADIALv/EADFALv/EAC2AL3/EACjAMH/EACYALD/EACYALD/EACPAGj/EAC6ADX/EAC6ADX/EADuADj/EAASAVf/EAAvASH/EAAjART/EAAjARH/EAAjARH/EAAvAQX/EAA9Afb+EAC+AKD/EADJALj/EADFALv/EADFALv/EAC2AL3/EACYALD/EAAvASH/EAAjARH/EAA9Afb+EAC+AKD/EADFALv/EACYALD/EABAATn/EAAvASH/EAA9Afb+EADIAGD/EAC+AKD/EACYALD/EABAATn/EAA9Afb+EABkASr/EADIAGD/EACYALD/EAC6ADX/EAAzAWL/EABAATn/EABkASr/EADqAGr/EADIAGD/EAC6ADX/EAAzAWL/EABkASr/EABCAYv/EABCAYv/EADqAGr/EAC6ADX/EAASAVf/EAAzAWL/EABCAYv/EABCAYv/EAC6ADX/EAASAVf/6f89Afb+6f9TAQ3//f9BAe/+6f9TAQ3//f9ZAQj//f9BAe/+/f9BAe/+/f9ZAQj//f9BAe/+/f9ZAQj//f9ZAQj//f9BAe/+/f9BAe/+/f9ZAQj/EAA9Afb+/f9ZAQj/EABTAQ3/EAA9Afb+6f9TAQ3/6f9kASr//f9ZAQj/6f9kASr//f9sASj//f9ZAQj//f9ZAQj//f9sASj//f9ZAQj//f9sASj//f9sASj//f9ZAQj//f9ZAQj//f9sASj/EABTAQ3//f9sASj/EABkASr/EABTAQ3/6f9kASr/6f9oAWP//f9sASj/6f9oAWP//f9wAWf//f9sASj//f9sASj//f9wAWf//f9sASj//f9wAWf//f9wAWf//f9sASj//f9sASj//f9wAWf/EABkASr//f9wAWf/EABoAWP/EABkASr/6f9oAWP/6f9CAYv//f9wAWf/6f9CAYv//f9GAZP//f9wAWf//f9wAWf//f9GAZP//f9wAWf//f9GAZP//f9GAZP//f9wAWf//f9wAWf//f9GAZP/EABoAWP//f9GAZP/EABCAYv/EABoAWP/6f9CAYv/6f8PAYf//f9GAZP/6f8PAYf//f8NAY///f9GAZP//f9GAZP//f8NAY///f9GAZP//f8NAY///f8NAY///f9GAZP//f9GAZP//f8NAY//EABCAYv//f8NAY//EAAPAYf/EABCAYv/6f8PAYf/6f/qAGr//f8NAY//6f/qAGr//f/nAHH//f8NAY///f8NAY///f/nAHH//f8NAY///f/nAHH//f/nAHH//f8NAY///f8NAY///f/nAHH/EAAPAYf//f/nAHH/EADqAGr/EAAPAYf/6f/qAGr/6f/IAGD//f/nAHH/6f/IAGD//f/OAGr//f/nAHH//f/nAHH//f/OAGr//f/nAHH//f/OAGr//f/OAGr//f/nAHH//f/nAHH//f/OAGr/EADqAGr//f/OAGr/EADIAGD/EADqAGr/6f/IAGD/6f++AKD//f/OAGr/6f++AKD//f/GAJ///f/OAGr//f/OAGr//f/GAJ///f/OAGr//f/GAJ///f/GAJ///f/OAGr//f/OAGr//f/GAJ//EADIAGD//f/GAJ//EAC+AKD/EADIAGD/6f++AKD/6f/EAKz//f/GAJ//6f/EAKz//f/LAKj//f/GAJ///f/GAJ///f/LAKj//f/GAJ///f/LAKj//f/LAKj//f/GAJ///f/GAJ///f/LAKj/EAC+AKD//f/LAKj/EADEAKz/EAC+AKD/6f/EAKz/6f/JALj//f/LAKj/6f/JALj//f/SALf//f/LAKj//f/LAKj//f/SALf//f/LAKj//f/SALf//f/SALf//f/LAKj//f/LAKj//f/SALf/EADEAKz//f/SALf/EADJALj/EADEAKz/6f/JALj/6f/IALv//f/SALf/6f/IALv//f/OAML//f/SALf//f/SALf//f/OAML//f/SALf//f/OAML//f/OAML//f/SALf//f/SALf//f/OAML/EADJALj//f/OAML/EADIALv/EADJALj/6f/IALv/6f/FALv//f/OAML/6f/FALv//f/HAMT//f/OAML//f/OAML//f/HAMT//f/OAML//f/HAMT//f/HAMT//f/OAML//f/OAML//f/HAMT/EADIALv//f/HAMT/EADFALv/EADIALv/6f/FALv/6f+2AL3//f/HAMT/6f+2AL3//f+3AMX//f/HAMT//f/HAMT//f+3AMX//f/HAMT//f+3AMX//f+3AMX//f/HAMT//f/HAMT//f+3AMX/EADFALv//f+3AMX/EAC2AL3/EADFALv/6f+2AL3/6f+jAMH//f+3AMX/6f+jAMH//f+gAMr//f+3AMX//f+3AMX//f+gAMr//f+3AMX//f+gAMr//f+gAMr//f+3AMX//f+3AMX//f+gAMr/EAC2AL3//f+gAMr/EACjAMH/EAC2AL3/6f+jAMH/6f+YALD//f+gAMr/6f+YALD//f+QALP//f+gAMr//f+gAMr//f+QALP//f+gAMr//f+QALP//f+QALP//f+gAMr//f+gAMr//f+QALP/EACjAMH//f+QALP/EACYALD/EACjAMH/6f+YALD/6f+PAGj//f+QALP/6f+PAGj//f+HAGX//f+QALP//f+QALP//f+HAGX//f+QALP//f+HAGX//f+HAGX//f+QALP//f+QALP//f+HAGX/EACYALD//f+HAGX/EACPAGj/EACYALD/6f+PAGj/6f+6ADX//f+HAGX/6f+6ADX//f+2ACz//f+HAGX//f+HAGX//f+2ACz//f+HAGX//f+2ACz//f+2ACz//f+HAGX//f+HAGX//f+2ACz/EACPAGj//f+2ACz/EAC6ADX/EACPAGj/6f+6ADX/6f/uADj//f+2ACz/6f/uADj//f/wADD//f+2ACz//f+2ACz//f/wADD//f+2ACz//f/wADD//f/wADD//f+2ACz//f+2ACz//f/wADD/EAC6ADX//f/wADD/EADuADj/EAC6ADX/6f/uADj/6f8SAVf//f/wADD/6f8SAVf//f8WAVD//f/wADD//f/wADD//f8WAVD//f/wADD//f8WAVD//f8WAVD//f/wADD//f/wADD//f8WAVD/EADuADj//f8WAVD/EAASAVf/EADuADj/6f8SAVf/6f8zAWL//f8WAVD/6f8zAWL//f8uAVj//f8WAVD//f8WAVD//f8uAVj//f8WAVD//f8uAVj//f8uAVj//f8WAVD//f8WAVD//f8uAVj/EAASAVf//f8uAVj/EAAzAWL/EAASAVf/6f8zAWL/6f9AATn//f8uAVj/6f9AATn//f83ATr//f8uAVj//f8uAVj//f83ATr//f8uAVj//f83ATr//f83ATr//f8uAVj//f8uAVj//f83ATr/EAAzAWL//f83ATr/EABAATn/EAAzAWL/6f9AATn/6f8vASH//f83ATr/6f8vASH//f8pASb//f83ATr//f83ATr//f8pASb//f83ATr//f8pASb//f8pASb//f83ATr//f83ATr//f8pASb/EABAATn//f8pASb/EAAvASH/EABAATn/6f8vASH/6f8jART//f8pASb/6f8jART//f8bARb//f8pASb//f8pASb//f8bARb//f8pASb//f8bARb//f8bARb//f8pASb//f8pASb//f8bARb/EAAvASH//f8bARb/EAAjART/EAAvASH/6f8jART/6f8jARH//f8bARb/6f8jARH//f8cAQ3//f8bARb//f8bARb//f8cAQ3//f8bARb//f8cAQ3//f8cAQ3//f8bARb//f8bARb//f8cAQ3/EAAjART//f8cAQ3/EAAjARH/EAAjART/6f8jARH/6f8vAQX//f8cAQ3/6f8vAQX//f8pAf/+/f8cAQ3//f8cAQ3//f8pAf/+/f8cAQ3//f8pAf/+/f8pAf/+/f8cAQ3//f8cAQ3//f8pAf/+EAAjARH//f8pAf/+EAAvAQX/EAAjARH/6f8vAQX/6f86AfX+/f8pAf/+6f86AfX+/f83Aez+/f8pAf/+/f8pAf/+/f83Aez+/f8pAf/+/f83Aez+/f83Aez+/f8pAf/+/f8pAf/+/f83Aez+EAAvAQX//f83Aez+EAA6AfX+EAAvAQX/6f86AfX+6f89Afb+/f83Aez+6f89Afb+/f9BAe/+/f83Aez+/f83Aez+/f9BAe/+/f83Aez+/f9BAe/+/f9BAe/+/f83Aez+/f83Aez+/f9BAe/+EAA6AfX+/f9BAe/+EAA9Afb+EAA6AfX+",c:"AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI="},"gatto-mano-a":{v:"df9rARUAVP9fAfb/Pf+KASEAdf9rARUAjf8zASEAXv8hAfb/df9rARUAXv8hAfb/VP9fAfb/jf8zASEAdf8DAUAAVP/2ACEAjf8zASEAVP/2ACEAXv8hAfb/VP/2ACEAdf8DAUAAPf/2AF4AVP9fAfb/Jf9fAfb/Pf+KASEAVP9fAfb/Xv8hAfb/HP8hAfb/VP9fAfb/HP8hAfb/Jf9fAfb/Xv8hAfb/VP/2ACEAJf/2ACEAXv8hAfb/Jf/2ACEAHP8hAfb/Jf/2ACEAVP/2ACEAPf/2AF4AJf9fAfb/BP9rARUAPf+KASEAJf9fAfb/HP8hAfb/7f4zASEAJf9fAfb/7f4zASEABP9rARUAHP8hAfb/Jf/2ACEABP8DAUAAHP8hAfb/BP8DAUAA7f4zASEABP8DAUAAJf/2ACEAPf/2AF4ABP9rARUABP99AUAAPf+KASEABP9rARUA7f4zASEA7f5NAV4ABP9rARUA7f5NAV4ABP99AUAA7f4zASEABP8DAUAABP8VAWsA7f4zASEABP8VAWsA7f5NAV4ABP8VAWsABP8DAUAAPf/2AF4ABP99AUAAJf+KAV4APf+KASEABP99AUAA7f5NAV4AHP9fAYoABP99AUAAHP9fAYoAJf+KAV4A7f5NAV4ABP8VAWsAJf8hAYoA7f5NAV4AJf8hAYoAHP9fAYoAJf8hAYoABP8VAWsAPf/2AF4AJf+KAV4AVP+KAV4APf+KASEAJf+KAV4AHP9fAYoAXv9fAYoAJf+KAV4AXv9fAYoAVP+KAV4AHP9fAYoAJf8hAYoAVP8hAYoAHP9fAYoAVP8hAYoAXv9fAYoAVP8hAYoAJf8hAYoAPf/2AF4AVP+KAV4Adf99AUAAPf+KASEAVP+KAV4AXv9fAYoAjf9NAV4AVP+KAV4Ajf9NAV4Adf99AUAAXv9fAYoAVP8hAYoAdf8VAWsAXv9fAYoAdf8VAWsAjf9NAV4Adf8VAWsAVP8hAYoAPf/2AF4Adf99AUAAdf9rARUAPf+KASEAdf99AUAAjf9NAV4Ajf8zASEAdf99AUAAjf8zASEAdf9rARUAjf9NAV4Adf8VAWsAdf8DAUAAjf9NAV4Adf8DAUAAjf8zASEAdf8DAUAAdf8VAWsAPf/2AF4A",c:"AgICAgICAgICAgICAgICAgICAgICAgICAhYWFhYCAhYWFhYCAhYWFhYCAgICAgIC"},"gatto-mano-b":{v:"9QBrARUA1ABfAfb/vQCKASEA9QBrARUADQEzASEA3gAhAfb/9QBrARUA3gAhAfb/1ABfAfb/DQEzASEA9QADAUAA1AD2ACEADQEzASEA1AD2ACEA3gAhAfb/1AD2ACEA9QADAUAAvQD2AF4A1ABfAfb/pQBfAfb/vQCKASEA1ABfAfb/3gAhAfb/nAAhAfb/1ABfAfb/nAAhAfb/pQBfAfb/3gAhAfb/1AD2ACEApQD2ACEA3gAhAfb/pQD2ACEAnAAhAfb/pQD2ACEA1AD2ACEAvQD2AF4ApQBfAfb/hABrARUAvQCKASEApQBfAfb/nAAhAfb/bQAzASEApQBfAfb/bQAzASEAhABrARUAnAAhAfb/pQD2ACEAhAADAUAAnAAhAfb/hAADAUAAbQAzASEAhAADAUAApQD2ACEAvQD2AF4AhABrARUAhAB9AUAAvQCKASEAhABrARUAbQAzASEAbQBNAV4AhABrARUAbQBNAV4AhAB9AUAAbQAzASEAhAADAUAAhAAVAWsAbQAzASEAhAAVAWsAbQBNAV4AhAAVAWsAhAADAUAAvQD2AF4AhAB9AUAApQCKAV4AvQCKASEAhAB9AUAAbQBNAV4AnABfAYoAhAB9AUAAnABfAYoApQCKAV4AbQBNAV4AhAAVAWsApQAhAYoAbQBNAV4ApQAhAYoAnABfAYoApQAhAYoAhAAVAWsAvQD2AF4ApQCKAV4A1ACKAV4AvQCKASEApQCKAV4AnABfAYoA3gBfAYoApQCKAV4A3gBfAYoA1ACKAV4AnABfAYoApQAhAYoA1AAhAYoAnABfAYoA1AAhAYoA3gBfAYoA1AAhAYoApQAhAYoAvQD2AF4A1ACKAV4A9QB9AUAAvQCKASEA1ACKAV4A3gBfAYoADQFNAV4A1ACKAV4ADQFNAV4A9QB9AUAA3gBfAYoA1AAhAYoA9QAVAWsA3gBfAYoA9QAVAWsADQFNAV4A9QAVAWsA1AAhAYoAvQD2AF4A9QB9AUAA9QBrARUAvQCKASEA9QB9AUAADQFNAV4ADQEzASEA9QB9AUAADQEzASEA9QBrARUADQFNAV4A9QAVAWsA9QADAUAADQFNAV4A9QADAUAADQEzASEA9QADAUAA9QAVAWsAvQD2AF4A",c:"AgICAgICAgICAgICAgICAgICAgICAgICAhYWFhYCAhYWFhYCAhYWFhYCAgICAgIC"},retino:{v:"+v+O/48A+v+tAXD++v+SAVX++v+O/48A+v+SAVX++v9z/3QAIQCSAVX+IQCtAXD+IQCO/48AIQCSAVX+IQCO/48AIQBz/3QAIQCtAXD++v+tAXD++v+O/48AIQCtAXD++v+O/48AIQCO/48A+v9z/3QA+v+SAVX+IQCSAVX++v9z/3QAIQCSAVX+IQBz/3QA+v+SAVX++v+tAXD+IQCtAXD++v+SAVX+IQCtAXD+IQCSAVX+IQCO/48A+v+O/48A+v9z/3QAIQCO/48A+v9z/3QAIQBz/3QAt/+6AjH9Pv9kAoj9Pv97Ap79t/+6AjH9Pv97Ap79t//RAkj9yf+zAmb9aP9uAqv9aP9YApT9yf+zAmb9aP9YApT9yf+cAk/9yf+cAk/9aP9YApT9Pv9kAoj9yf+cAk/9Pv9kAoj9t/+6AjH9t//RAkj9Pv97Ap79aP9uAqv9t//RAkj9aP9uAqv9yf+zAmb9Pv9kAoj9Pv/qAQH+Pv8BAhj+Pv9kAoj9Pv8BAhj+Pv97Ap79aP9uAqv9aP8NAgz+aP/3AfX9aP9uAqv9aP/3AfX9aP9YApT9aP9YApT9aP/3AfX9Pv/qAQH+aP9YApT9Pv/qAQH+Pv9kAoj9Pv97Ap79Pv8BAhj+aP8NAgz+Pv97Ap79aP8NAgz+aP9uAqv9Pv/qAQH+t/+UAVj+t/+rAW7+Pv/qAQH+t/+rAW7+Pv8BAhj+aP8NAgz+yf/JAVD+yf+yATr+aP8NAgz+yf+yATr+aP/3AfX9aP/3AfX9yf+yATr+t/+UAVj+aP/3AfX9t/+UAVj+Pv/qAQH+Pv8BAhj+t/+rAW7+yf/JAVD+Pv8BAhj+yf/JAVD+aP8NAgz+t/+UAVj+ZACUAVj+ZACrAW7+t/+UAVj+ZACrAW7+t/+rAW7+yf/JAVD+UgDJAVD+UgCyATr+yf/JAVD+UgCyATr+yf+yATr+yf+yATr+UgCyATr+ZACUAVj+yf+yATr+ZACUAVj+t/+UAVj+t/+rAW7+ZACrAW7+UgDJAVD+t/+rAW7+UgDJAVD+yf/JAVD+ZACUAVj+3gDqAQH+3gABAhj+ZACUAVj+3gABAhj+ZACrAW7+UgDJAVD+swANAgz+swD3AfX9UgDJAVD+swD3AfX9UgCyATr+UgCyATr+swD3AfX93gDqAQH+UgCyATr+3gDqAQH+ZACUAVj+ZACrAW7+3gABAhj+swANAgz+ZACrAW7+swANAgz+UgDJAVD+3gDqAQH+3gBkAoj93gB7Ap793gDqAQH+3gB7Ap793gABAhj+swANAgz+swBuAqv9swBYApT9swANAgz+swBYApT9swD3AfX9swD3AfX9swBYApT93gBkAoj9swD3AfX93gBkAoj93gDqAQH+3gABAhj+3gB7Ap79swBuAqv93gABAhj+swBuAqv9swANAgz+3gBkAoj9ZAC6AjH9ZADRAkj93gBkAoj9ZADRAkj93gB7Ap79swBuAqv9UgCzAmb9UgCcAk/9swBuAqv9UgCcAk/9swBYApT9swBYApT9UgCcAk/9ZAC6AjH9swBYApT9ZAC6AjH93gBkAoj93gB7Ap79ZADRAkj9UgCzAmb93gB7Ap79UgCzAmb9swBuAqv9ZAC6AjH9t/+6AjH9t//RAkj9ZAC6AjH9t//RAkj9ZADRAkj9UgCzAmb9yf+zAmb9yf+cAk/9UgCzAmb9yf+cAk/9UgCcAk/9UgCcAk/9yf+cAk/9t/+6AjH9UgCcAk/9t/+6AjH9ZAC6AjH9ZADRAkj9t//RAkj9yf+zAmb9ZADRAkj9yf+zAmb9UgCzAmb97v9+AbL+7v/YAVj+7v+rASr+7v9+AbL+7v+rASr+7v9QAYX+LgCrASr+LgDYAVj+LgB+AbL+LgCrASr+LgB+AbL+LgBQAYX+LgDYAVj+7v/YAVj+7v9+AbL+LgDYAVj+7v9+AbL+LgB+AbL+7v9QAYX+7v+rASr+LgCrASr+7v9QAYX+LgCrASr+LgBQAYX+7v+rASr+7v/YAVj+LgDYAVj+7v+rASr+LgDYAVj+LgCrASr+LgB+AbL+7v9+AbL+7v9QAYX+LgB+AbL+7v9QAYX+LgBQAYX+7v+M/6QA7v9uAML/7v9BAJT/7v+M/6QA7v9BAJT/7v9e/3cALgBBAJT/LgBuAML/LgCM/6QALgBBAJT/LgCM/6QALgBe/3cALgBuAML/7v9uAML/7v+M/6QALgBuAML/7v+M/6QALgCM/6QA7v9e/3cA7v9BAJT/LgBBAJT/7v9e/3cALgBBAJT/LgBe/3cA7v9BAJT/7v9uAML/LgBuAML/7v9BAJT/LgBuAML/LgBBAJT/LgCM/6QA7v+M/6QA7v9e/3cALgCM/6QA7v9e/3cALgBe/3cADgCWAVr+e//BAS/+DgB0ARL9fP/zAZD9DgB0ARL9p/+qAdn9dv/JASf+kP+2AQT+e//BAS/+av/eARL+n/+3Acz9p/+qAdn9av/eARL+p/+qAdn9kP+2AQT+av/eARL+kP+2AQT+dv/JASf+Xv/zAf39k//MAbf9n/+3Acz9Xv/zAf39n/+3Acz9av/eARL+Uf8IAuj9h//hAaL9k//MAbf9Uf8IAuj9k//MAbf9Xv/zAf39Rf8dAtP9cP/9AZv9fP/zAZD9Rf8dAtP9fP/zAZD9h//hAaL9Rf8dAtP9h//hAaL9Uf8IAuj9Pv8pAsf9cP/9AZv9Rf8dAtP9e//BAS/+Pv8pAsf9Pv8pAsf9e//BAS/+Pv8pAsf9e//BAS/++/+ZARz9DgB0ARL95P+ZATb9+/+ZARz95P+ZATb95f+kATH95/+/ASb9+/+ZARz95f+kATH95P+ZATb9xP+1AVL95f+kATH95f/CASf95/+/ASb95f+kATH95f/CASf95f+kATH9xP+1AVL95f/CASf9xP+1AVL9kf/hAX795f/CASf9kf/hAX79kv/tAXn9m/9TAk795f/CASf9kv/tAXn9Pv8pAsf9e/+RAl/9m/9TAk79Pv8pAsf9m/9TAk79kf/hAX79e/+RAl/9DgC9AjT9DgB0ARL9DgC9AjT9oQCRAl/9DgB0ARL9nwDzAZD9DgB0ARL9dQA8Akj9pQCKAmb9iwBnAlP9oQCRAl/9sQB1Anv9fAAvAlX9dQA8Akj9sQB1Anv9dQA8Akj9iwBnAlP9sQB1Anv9iwBnAlP9pQCKAmb9vgBgApD9iAAaAmr9fAAvAlX9vgBgApD9fAAvAlX9sQB1Anv9ygBLAqX9lQAFAn79iAAaAmr9ygBLAqX9iAAaAmr9vgBgApD91gA2Arr9qwD9AZv9nwDzAZD91gA2Arr9nwDzAZD9lQAFAn791gA2Arr9lQAFAn79ygBLAqX93gApAsf9qwD9AZv91gA2Arr9oQCRAl/93gApAsf93gApAsf9oQCRAl/93gApAsf9oQCRAl/9NACJAVz9DgB0ARL9NwCZATb9NwCZATb9VwC1AVL9NgCUAUH9NgCKAWD9NACJAVz9NgCUAUH9NgCKAWD9NgCUAUH9VwC1AVL9NgCKAWD9VwC1AVL9igDhAX79NgCKAWD9igDhAX79iQDcAYr9gQCxAfH9NgCKAWD9iQDcAYr93gApAsf9oQDBAS/+gQCxAfH93gApAsf9gQCxAfH9igDhAX79oQDBAS/+DgCWAVr+DgB0ARL9",c:"BQUFBQUFBQUFBQUFBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBhsYGBwcHBgYISEcHBwYGBgGBhsbGBgYGBsbGxgbGBgcHBwYGCEhHBwcGBgYGxsYGBgYGxsbGA=="},canna:{v:"N/88/0r/kf86APb/qf8TACMAN/88/0r/qf8TACMAT/8V/3f/cP8TAEEAWP86ABQA/v48/2f/cP8TAEEA/v48/2f/Fv8V/5T/WP86ABQAkf86APb/N/88/0r/WP86ABQAN/88/0r//v48/2f/T/8V/3f/qf8TACMAcP8TAEEAT/8V/3f/cP8TAEEAFv8V/5T/qf8TACMAkf86APb/WP86ABQAqf8TACMAWP86ABQAcP8TAEEA/v48/2f/N/88/0r/T/8V/3f//v48/2f/T/8V/3f/Fv8V/5T/9/8lAboAnf8nAA0A9/8lAboA9/8lAboA9/8lAboAnf8nAA0AZP8nACoAvv8lAdcAvv8lAdcAZP8nACoAvv8lAdcAZP8nACoA4/8+AdoA4/8+AdoA4/8+AdoA4/8+AdoA4/8+AdoA4/8+AdoAd/8NAAoAd/8NAAoAd/8NAAoAd/8NAAoAd/8NAAoAd/8NAAoAjP8TADIA5v8RAd8A5v8RAd8AjP8TADIA5v8RAd8AjP8TADIAz/84AbIAdf86AAUAz/84AbIAz/84AbIAz/84AbIAdf86AAUA4/8+AdoA4/8+AdoA9/8lAboA4/8+AdoA9/8lAboA9/8lAboA4/8+AdoA4/8+AdoAvv8lAdcA4/8+AdoAvv8lAdcAvv8lAdcA4/8+AdoA4/8+AdoA5v8RAd8A4/8+AdoA5v8RAd8A5v8RAd8A4/8+AdoA4/8+AdoAz/84AbIA4/8+AdoAz/84AbIAz/84AbIAd/8NAAoAd/8NAAoAnf8nAA0Ad/8NAAoAnf8nAA0Anf8nAA0Ad/8NAAoAd/8NAAoAZP8nACoAd/8NAAoAZP8nACoAZP8nACoAd/8NAAoAd/8NAAoAjP8TADIAd/8NAAoAjP8TADIAjP8TADIAd/8NAAoAd/8NAAoAdf86AAUAd/8NAAoAdf86AAUAdf86AAUAnf8nAA0Adf86AAUAz/84AbIAnf8nAA0Az/84AbIA9/8lAboA5v8RAd8AjP8TADIAnf8nAA0A5v8RAd8Anf8nAA0A9/8lAboAz/84AbIAdf86AAUAZP8nACoAz/84AbIAZP8nACoAvv8lAdcAZP8nACoAjP8TADIA5v8RAd8AZP8nACoA5v8RAd8Avv8lAdcAd/8NAAoAnf8nAA0AjP8TADIAd/8NAAoAjP8TADIAZP8nACoAd/8NAAoAdf86AAUAnf8nAA0Ad/8NAAoAZP8nACoAdf86AAUA4/8+AdoA5v8RAd8A9/8lAboA4/8+AdoAvv8lAdcA5v8RAd8A4/8+AdoA9/8lAboAz/84AbIA4/8+AdoAz/84AbIAvv8lAdcAXwD2AYkB8v8eAbgAXwD2AYkBXwD2AYkBXwD2AYkB8v8eAbgAv/8eAdMALAD2AaQBLAD2AaQBv/8eAdMALAD2AaQBv/8eAdMAUQAMAqsBUQAMAqsBUQAMAqsBUQAMAqsBUQAMAqsBUQAMAqsBzv8JAbAAzv8JAbAAzv8JAbAAzv8JAbAAzv8JAbAAzv8JAbAA4v8JAdcATwDhAagBTwDhAagB4v8JAdcATwDhAagB4v8JAdcAPQAMAoUB0P8zAbQAPQAMAoUBPQAMAoUBPQAMAoUB0P8zAbQAUQAMAqsBUQAMAqsBXwD2AYkBUQAMAqsBXwD2AYkBXwD2AYkBUQAMAqsBUQAMAqsBLAD2AaQBUQAMAqsBLAD2AaQBLAD2AaQBUQAMAqsBUQAMAqsBTwDhAagBUQAMAqsBTwDhAagBTwDhAagBUQAMAqsBUQAMAqsBPQAMAoUBUQAMAqsBPQAMAoUBPQAMAoUBzv8JAbAAzv8JAbAA8v8eAbgAzv8JAbAA8v8eAbgA8v8eAbgAzv8JAbAAzv8JAbAAv/8eAdMAzv8JAbAAv/8eAdMAv/8eAdMAzv8JAbAAzv8JAbAA4v8JAdcAzv8JAbAA4v8JAdcA4v8JAdcAzv8JAbAAzv8JAbAA0P8zAbQAzv8JAbAA0P8zAbQA0P8zAbQA8v8eAbgA0P8zAbQAPQAMAoUB8v8eAbgAPQAMAoUBXwD2AYkBTwDhAagB4v8JAdcA8v8eAbgATwDhAagB8v8eAbgAXwD2AYkBPQAMAoUB0P8zAbQAv/8eAdMAPQAMAoUBv/8eAdMALAD2AaQBv/8eAdMA4v8JAdcATwDhAagBv/8eAdMATwDhAagBLAD2AaQBzv8JAbAA8v8eAbgA4v8JAdcAzv8JAbAA4v8JAdcAv/8eAdMAzv8JAbAA0P8zAbQA8v8eAbgAzv8JAbAAv/8eAdMA0P8zAbQAUQAMAqsBTwDhAagBXwD2AYkBUQAMAqsBLAD2AaQBTwDhAagBUQAMAqsBXwD2AYkBPQAMAoUBUQAMAqsBPQAMAoUBLAD2AaQB1gCCAnwCUwDuAYAB1gCCAnwC1gCCAnwC1gCCAnwCUwDuAYABLADuAZUBrwCCApECrwCCApECLADuAZUBrwCCApECLADuAZUB0ACRAqAC0ACRAqAC0ACRAqAC0ACRAqAC0ACRAqAC0ACRAqACMgDgAXEBMgDgAXEBMgDgAXEBMgDgAXEBMgDgAXEBMgDgAXEBRADdAZIBxwBxAo4CxwBxAo4CRADdAZIBxwBxAo4CRADdAZIBvgCTAn4COwD/AYMBvgCTAn4CvgCTAn4CvgCTAn4COwD/AYMB0ACRAqAC0ACRAqAC1gCCAnwC0ACRAqAC1gCCAnwC1gCCAnwC0ACRAqAC0ACRAqACrwCCApEC0ACRAqACrwCCApECrwCCApEC0ACRAqAC0ACRAqACxwBxAo4C0ACRAqACxwBxAo4CxwBxAo4C0ACRAqAC0ACRAqACvgCTAn4C0ACRAqACvgCTAn4CvgCTAn4CMgDgAXEBMgDgAXEBUwDuAYABMgDgAXEBUwDuAYABUwDuAYABMgDgAXEBMgDgAXEBLADuAZUBMgDgAXEBLADuAZUBLADuAZUBMgDgAXEBMgDgAXEBRADdAZIBMgDgAXEBRADdAZIBRADdAZIBMgDgAXEBMgDgAXEBOwD/AYMBMgDgAXEBOwD/AYMBOwD/AYMBUwDuAYABOwD/AYMBvgCTAn4CUwDuAYABvgCTAn4C1gCCAnwCxwBxAo4CRADdAZIBUwDuAYABxwBxAo4CUwDuAYAB1gCCAnwCvgCTAn4COwD/AYMBLADuAZUBvgCTAn4CLADuAZUBrwCCApECLADuAZUBRADdAZIBxwBxAo4CLADuAZUBxwBxAo4CrwCCApECMgDgAXEBUwDuAYABRADdAZIBMgDgAXEBRADdAZIBLADuAZUBMgDgAXEBOwD/AYMBUwDuAYABMgDgAXEBLADuAZUBOwD/AYMB0ACRAqACxwBxAo4C1gCCAnwC0ACRAqACrwCCApECxwBxAo4C0ACRAqAC1gCCAnwCvgCTAn4C0ACRAqACvgCTAn4CrwCCApECr/9ZAOv/x/9gABkAv/8dAAkAx/9gABkAr/9ZAOv/Pv9ZACYAx/9gABkAPv9ZACYAVv9gAFQAVv9gAFQAPv9ZACYATv8dAEQAoP8vAM7/r/9ZAOv/v/8dAAkAr/9ZAOv/oP8vAM7/L/8vAAkAr/9ZAOv/L/8vAAkAPv9ZACYAPv9ZACYAL/8vAAkATv8dAEQAo//6/9T/oP8vAM7/v/8dAAkAoP8vAM7/o//6/9T/Mv/6/w8AoP8vAM7/Mv/6/w8AL/8vAAkAL/8vAAkAMv/6/w8ATv8dAEQAt//a//n/o//6/9T/v/8dAAkAo//6/9T/t//a//n/Rf/a/zUAo//6/9T/Rf/a/zUAMv/6/w8AMv/6/w8ARf/a/zUATv8dAEQAz//h/ygAt//a//n/v/8dAAkAt//a//n/z//h/ygAXv/h/2MAt//a//n/Xv/h/2MARf/a/zUARf/a/zUAXv/h/2MATv8dAEQA3v8LAEUAz//h/ygAv/8dAAkAz//h/ygA3v8LAEUAbP8LAIAAz//h/ygAbP8LAIAAXv/h/2MAXv/h/2MAbP8LAIAATv8dAEQA2/9AAD8A3v8LAEUAv/8dAAkA3v8LAEUA2/9AAD8Aaf9AAHoA3v8LAEUAaf9AAHoAbP8LAIAAbP8LAIAAaf9AAHoATv8dAEQAx/9gABkA2/9AAD8Av/8dAAkA2/9AAD8Ax/9gABkAVv9gAFQA2/9AAD8AVv9gAFQAaf9AAHoAaf9AAHoAVv9gAFQATv8dAEQA",c:"DAwMDAwMDAwMDAwMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAQEEBAEBAQEEBAEBBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQBAQQEAQEBAQQEAQEEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAEBBAQBAQEBBAQBAQQEGgsLGhoLCxoaCwsaGgsLGhoLCxoaCwsaGgsLGhoLCxo="},galleggiante:{v:"TgBKACcATgBWAPD/EAB1ABQATgBKACcAXwABACMAXgASANX/TgBKACcAXgASANX/TgBWAPD/XwABACMAOADH/wsAOADT/9T/XwABACMAOADT/9T/XgASANX/OADT/9T/OADH/wsA8f+8/+z/TgBWAPD/JgBkAMr/EAB1ABQATgBWAPD/XgASANX/JgAnAKH/TgBWAPD/JgAnAKH/JgBkAMr/XgASANX/OADT/9T/EADh/6//XgASANX/EADh/6//JgAnAKH/EADh/6//OADT/9T/8f+8/+z/JgBkAMr/7/9tAM3/EAB1ABQAJgBkAMr/JgAnAKH/2P8zAKT/JgBkAMr/2P8zAKT/7/9tAM3/JgAnAKH/EADh/6//2f/q/7H/JgAnAKH/2f/q/7H/2P8zAKT/2f/q/7H/EADh/6//8f+8/+z/7/9tAM3/yP9rAPX/EAB1ABQA7/9tAM3/2P8zAKT/of8wAN3/7/9tAM3/of8wAN3/yP9rAPX/2P8zAKT/2f/q/7H/sv/o/9r/2P8zAKT/sv/o/9r/of8wAN3/sv/o/9r/2f/q/7H/8f+8/+z/yP9rAPX/yP9fACwAEAB1ABQAyP9rAPX/of8wAN3/ov8fACsAyP9rAPX/ov8fACsAyP9fACwAof8wAN3/sv/o/9r/sv/c/xEAof8wAN3/sv/c/xEAov8fACsAsv/c/xEAsv/o/9r/8f+8/+z/yP9fACwA8P9QAFIAEAB1ABQAyP9fACwAov8fACsA2v8LAGAAyP9fACwA2v8LAGAA8P9QAFIAov8fACsAsv/c/xEA2v/N/zYAov8fACsA2v/N/zYA2v8LAGAA2v/N/zYAsv/c/xEA8f+8/+z/8P9QAFIAJwBIAE8AEAB1ABQA8P9QAFIA2v8LAGAAKAD+/1wA8P9QAFIAKAD+/1wAJwBIAE8A2v8LAGAA2v/N/zYAEQDF/zMA2v8LAGAAEQDF/zMAKAD+/1wAEQDF/zMA2v/N/zYA8f+8/+z/JwBIAE8ATgBKACcAEAB1ABQAJwBIAE8AKAD+/1wAXwABACMAJwBIAE8AXwABACMATgBKACcAKAD+/1wAEQDF/zMAOADH/wsAKAD+/1wAOADH/wsAXwABACMAOADH/wsAEQDF/zMA8f+8/+z/",c:"BgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcX"},lampione:{v:"gACAAID/gACAAIAAgABAAIAAgACAAID/gABAAIAAgABAAID/gP9AAIAAgP+AAIAAgP+AAID/gP9AAIAAgP+AAID/gP9AAID/gP+AAIAAgACAAIAAgACAAID/gP+AAIAAgACAAID/gP+AAID/gABAAID/gABAAIAAgP9AAIAAgABAAID/gP9AAIAAgP9AAID/gABAAIAAgACAAIAAgP+AAIAAgABAAIAAgP+AAIAAgP9AAIAAgP+AAID/gACAAID/gABAAID/gP+AAID/gABAAID/gP9AAID/YACAACgAKACAAGAAAACAAAAAKACAAGAAYACAACgAYACAASgAKACAAGAAYACAASgAKACAAWAAKACAAWAAYACAASgAAACAAQAAYACAANj/YACAACgAAACAAAAAYACAACgAYACAANj/YACAAdj/YACAACgAYACAAdj/YACAASgAYACAASgAYACAAdj/AACAAQAAKACAAKD/YACAANj/AACAAAAAYACAANj/KACAAKD/KACAAaD/YACAANj/KACAAaD/YACAAdj/YACAAdj/KACAAaD/AACAAQAA2P+AAKD/KACAAKD/AACAAAAAKACAAKD/2P+AAKD/2P+AAaD/KACAAKD/2P+AAaD/KACAAaD/KACAAaD/2P+AAaD/AACAAQAAoP+AANj/2P+AAKD/AACAAAAA2P+AAKD/oP+AANj/oP+AAdj/2P+AAKD/oP+AAdj/2P+AAaD/2P+AAaD/oP+AAdj/AACAAQAAoP+AACgAoP+AANj/AACAAAAAoP+AANj/oP+AACgAoP+AASgAoP+AANj/oP+AASgAoP+AAdj/oP+AAdj/oP+AASgAAACAAQAA2P+AAGAAoP+AACgAAACAAAAAoP+AACgA2P+AAGAA2P+AAWAAoP+AACgA2P+AAWAAoP+AASgAoP+AASgA2P+AAWAAAACAAQAAKACAAGAA2P+AAGAAAACAAAAA2P+AAGAAKACAAGAAKACAAWAA2P+AAGAAKACAAWAA2P+AAWAA2P+AAWAAKACAAWAAAACAAQAAIACgBOD/IACgBCAAIABAASAAIACgBOD/IABAASAAIABAAeD/4P9AASAA4P+gBCAA4P+gBOD/4P9AASAA4P+gBOD/4P9AAeD/4P+gBCAAIACgBCAAIACgBOD/4P+gBCAAIACgBOD/4P+gBOD/IABAAeD/IABAASAA4P9AASAAIABAAeD/4P9AASAA4P9AAeD/IABAASAAIACgBCAA4P+gBCAAIABAASAA4P+gBCAA4P9AASAA4P+gBOD/IACgBOD/IABAAeD/4P+gBOD/IABAAeD/4P9AAeD/oACABWD/oACABaAAoABABaAAoACABWD/oABABaAAoABABWD/YP9ABaAAYP+ABaAAYP+ABWD/YP9ABaAAYP+ABWD/YP9ABWD/YP+ABaAAoACABaAAoACABWD/YP+ABaAAoACABWD/YP+ABWD/oABABWD/oABABaAAYP9ABaAAoABABWD/YP9ABaAAYP9ABWD/oABABaAAoACABaAAYP+ABaAAoABABaAAYP+ABaAAYP9ABaAAYP+ABWD/oACABWD/oABABWD/YP+ABWD/oABABWD/YP9ABWD/gACABYD/gACABYAAgP+ABYAAgACABYD/gP+ABYAAgP+ABYD/gACABYAAgACABYD/AAAgBgAAgP+ABYAAgACABYAAAAAgBgAAgACABYD/gP+ABYD/AAAgBgAAgP+ABYD/gP+ABYAAAAAgBgAAMACgBTAAMACgBdD/0P+gBdD/MACgBTAA0P+gBdD/0P+gBTAA0P9ABND/MABABND/MABABDAA0P9ABND/MABABDAA0P9ABDAAMACgBdD/MACgBTAAcABgBTAAMACgBdD/cABgBTAAcABgBdD/kP9gBTAA0P+gBTAA0P+gBdD/kP9gBTAA0P+gBdD/kP9gBdD/MABgBXAAMACgBTAA0P+gBTAAMABgBXAA0P+gBTAA0P9gBXAA0P+gBdD/MACgBdD/MABgBZD/0P+gBdD/MABgBZD/0P9gBZD/cACABDAAMABABDAAMABABND/cACABDAAMABABND/cACABND/0P9ABND/0P9ABDAAkP+ABDAA0P9ABND/kP+ABDAAkP+ABND/0P9ABDAAMABABDAAMACABHAA0P9ABDAAMACABHAA0P+ABHAAMACABJD/MABABND/0P9ABND/MACABJD/0P9ABND/0P+ABJD/MABABDAAcACABDAAMACABHAA0P9ABDAA0P+ABHAAkP+ABDAAMABABND/MACABJD/cACABND/0P9ABND/kP+ABND/0P+ABJD/MACgBTAAMABgBXAAcABgBTAA0P+gBTAAkP9gBTAA0P9gBXAAMACgBdD/cABgBdD/MABgBZD/0P+gBdD/0P9gBZD/kP9gBdD/oAAgAIAAoAAgAIAAoAAgAID/oAAgAIAAoAAgAID/oAAgAID/YP8gAIAAYP8gAIAAYP8gAID/YP8gAIAAYP8gAID/YP8gAID/gABAAIAAgABAAID/gP9AAID/gABAAIAAgP9AAID/gP9AAIAAgP8AAID/gAAAAID/gAAAAIAAgP8AAID/gAAAAIAAgP8AAIAAgAAgAKAAgAAgAKAAgP8gAKAAgAAgAKAAgP8gAKAAgP8gAKAAgAAgAGD/gAAgAGD/gP8gAGD/gAAgAGD/gP8gAGD/gP8gAGD/gABAAID/gABAAIAAoAAgAIAAgABAAID/oAAgAIAAoAAgAID/YP8gAIAAgP9AAIAAgP9AAID/YP8gAIAAgP9AAID/YP8gAID/gAAgAKAAgABAAIAAgP9AAIAAgAAgAKAAgP9AAIAAgP8gAKAAgP9AAID/gABAAID/gAAgAGD/gP9AAID/gAAgAGD/gP8gAGD/oAAgAIAAgAAAAIAAgAAAAID/oAAgAIAAgAAAAID/oAAgAID/gP8AAID/gP8AAIAAYP8gAIAAgP8AAID/YP8gAIAAYP8gAID/gP8AAIAAgAAAAIAAgAAgAKAAgP8AAIAAgAAgAKAAgP8gAKAAgAAgAGD/gAAAAID/gP8AAID/gAAgAGD/gP8AAID/gP8gAGD/gAAgAGD/gAAgAGD/oAAgAID/gAAgAGD/oAAgAID/oAAgAID/gAAgAKAAgAAgAKAAoAAgAIAAgAAgAKAAoAAgAIAAoAAgAIAAgP8gAGD/gP8gAGD/YP8gAID/gP8gAGD/YP8gAID/YP8gAID/gP8gAKAAgP8gAKAAYP8gAIAAgP8gAKAAYP8gAIAAYP8gAIAAgAAAAIAAoAAgAIAAgAAgAKAAgP8AAIAAgP8gAKAAYP8gAIAAgAAAAID/gAAgAGD/oAAgAID/gP8AAID/YP8gAID/gP8gAGD/gABAAIAAgAAgAKAAoAAgAIAAgP9AAIAAYP8gAIAAgP8gAKAAgABAAID/oAAgAID/gAAgAGD/gP9AAID/gP8gAGD/YP8gAID/",c:"FBQUFA4OFBQUFBQUDg4OEg4ODhIODg4SDg4OEg4ODhIODg4SDg4OEg4ODhIODg4ODg4ODg4ODg4UFBQUDg4UFBQUFBQODg4ODg4ODhQUDg4ODg4ODg4UFBQUFBQUFBQUFBQODg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},"lampione-luce":{v:"cABgBdD/cABgBTAAcACABDAAcABgBdD/cACABDAAcACABND/kP+ABDAAkP9gBTAAkP9gBdD/kP+ABDAAkP9gBdD/kP+ABND/MACABHAAMABgBXAA0P9gBXAAMACABHAA0P9gBXAA0P+ABHAA0P9gBZD/MABgBZD/MACABJD/0P9gBZD/MACABJD/0P+ABJD/cACABND/MACABJD/MABgBZD/cACABND/MABgBZD/cABgBdD/MABgBXAAMACABHAAcACABDAAMABgBXAAcACABDAAcABgBTAA0P9gBZD/0P+ABJD/kP+ABND/0P9gBZD/kP+ABND/kP9gBdD/kP+ABDAA0P+ABHAA0P9gBXAAkP+ABDAA0P9gBXAAkP9gBTAA",c:"FRUVFRUVFRUREREREREREQ=="}};var bh=r=>Uint8Array.from(atob(r),e=>e.charCodeAt(0)),NA=new Map;function cf(r){if(NA.has(r))return NA.get(r);let e=Eh[r];if(!e)throw new Error("nel kit non c'è: "+r);let t=bh(e.v),i=new Int16Array(t.buffer,t.byteOffset,t.length>>1),n=new Float32Array(i.length),s=new Float32Array(i.length);for(let o=0;o<i.length;o++)n[o]=i[o]/512;for(let o=0;o<n.length;o+=9){let l=n[o+3]-n[o],A=n[o+4]-n[o+1],c=n[o+5]-n[o+2],h=n[o+6]-n[o],u=n[o+7]-n[o+1],p=n[o+8]-n[o+2],d=A*p-c*u,m=c*h-l*p,f=l*u-A*h,v=Math.hypot(d,m,f)||1;d/=v,m/=v,f/=v;for(let g=0;g<3;g++)s.set([d,m,f],o+g*3)}uf(n,s);let a={pos:n,nor:s,tri:bh(e.c)};return NA.set(r,a),a}var hf=.0015;function uf(r,e){let t=new Map;for(let i=0;i<r.length;i+=9){let n=[e[i],e[i+1],e[i+2]],s=n[0]*r[i]+n[1]*r[i+1]+n[2]*r[i+2],a=n.map(o=>Math.round(o*500)).join()+"|"+Math.round(s*300);t.has(a)||t.set(a,[]),t.get(a).push(i)}for(let i of t.values()){if(i.length<2)continue;let n=[0,1,2].reduce((l,A)=>Math.abs(e[i[0]+A])>Math.abs(e[i[0]+l])?A:l,0),s=(l,A)=>n===0?[r[l+A*3+1],r[l+A*3+2]]:n===1?[r[l+A*3],r[l+A*3+2]]:[r[l+A*3],r[l+A*3+1]],a=i.map(l=>[s(l,0),s(l,1),s(l,2)]),o=i.map(()=>0);for(let l=1;l<i.length;l++){for(let h=0;h<l;h++)pf(a[h],a[l])>=1e-6&&(o[l]=Math.max(o[l],o[h]+1));let A=i[l],c=o[l]*hf;if(c)for(let h=0;h<3;h++)for(let u=0;u<3;u++)r[A+h*3+u]+=e[A+u]*c}}}function pf(r,e){let t=s=>{let a=0;for(let o=0;o<s.length;o++){let l=s[o],A=s[(o+1)%s.length];a+=l[0]*A[1]-A[0]*l[1]}return a/2},i=r,n=t(e)<0?[...e].reverse():e;for(let s=0;s<3&&i.length;s++){let a=n[s],o=n[(s+1)%3],l=c=>(o[0]-a[0])*(c[1]-a[1])-(o[1]-a[1])*(c[0]-a[0]),A=[];for(let c=0;c<i.length;c++){let h=i[c],u=i[(c+1)%i.length],p=l(h),d=l(u);d>=-1e-9?(p<-1e-9&&A.push([h[0]+(u[0]-h[0])*p/(p-d),h[1]+(u[1]-h[1])*p/(p-d)]),A.push(u)):p>=-1e-9&&A.push([h[0]+(u[0]-h[0])*p/(p-d),h[1]+(u[1]-h[1])*p/(p-d)])}i=A}return i.length>=3?Math.abs(t(i)):0}var ra=new de,OA=new Map;function df(r){return OA.has(r)||(ra.set(r),OA.set(r,[ra.r,ra.g,ra.b])),OA.get(r)}function ff(r,e=null){let{pos:t,nor:i,tri:n}=cf(r),s=new Float32Array(t.length);for(let a=0;a<n.length;a++){let o=_h[n[a]],l=df(e&&e[o]||o);for(let A=0;A<3;A++)s.set(l,a*9+A*3)}return{pos:t,nor:i,col:s}}function ir(r,e=null){let t=ff(r,e),i=new Ne;return i.setAttribute("position",new Qe(t.pos.slice(),3)),i.setAttribute("normal",new Qe(t.nor.slice(),3)),i.setAttribute("color",new Qe(t.col,3)),i.computeBoundingBox(),i.computeBoundingSphere(),i}var Ur=Math.PI/180;function gf(r,e,t,i){let n=r/2,s=e/2,a=t/2,o=[],l=(u,p,d,m)=>m===0?[u*n,p*(s-i),d*(a-i)]:m===1?[u*(n-i),p*s,d*(a-i)]:[u*(n-i),p*(s-i),d*a],A=(u,p,d)=>{let m=[(p[1]-u[1])*(d[2]-u[2])-(p[2]-u[2])*(d[1]-u[1]),(p[2]-u[2])*(d[0]-u[0])-(p[0]-u[0])*(d[2]-u[2]),(p[0]-u[0])*(d[1]-u[1])-(p[1]-u[1])*(d[0]-u[0])];m[0]*(u[0]+p[0]+d[0])+m[1]*(u[1]+p[1]+d[1])+m[2]*(u[2]+p[2]+d[2])<0?o.push(...u,...d,...p):o.push(...u,...p,...d)},c=(u,p,d,m)=>{A(u,p,d),A(u,d,m)};for(let u of[-1,1]){c(l(u,-1,-1,0),l(u,1,-1,0),l(u,1,1,0),l(u,-1,1,0)),c(l(-1,u,-1,1),l(1,u,-1,1),l(1,u,1,1),l(-1,u,1,1)),c(l(-1,-1,u,2),l(1,-1,u,2),l(1,1,u,2),l(-1,1,u,2));for(let p of[-1,1]){c(l(u,p,-1,0),l(u,p,1,0),l(u,p,1,1),l(u,p,-1,1)),c(l(-1,u,p,1),l(1,u,p,1),l(1,u,p,2),l(-1,u,p,2)),c(l(u,-1,p,0),l(u,1,p,0),l(u,1,p,2),l(u,-1,p,2));for(let d of[-1,1])A(l(u,p,d,0),l(u,p,d,1),l(u,p,d,2))}}let h=new Ne;return h.setAttribute("position",new ve(o,3)),h}function mf(r,e,t){switch(r){case"kit":return ir(e,t.tinte);case"b":{let i=Math.min(.08,Math.min(e[0],e[1],e[2])*.24);return(t.netta||i<.012?new Jt(e[0],e[1],e[2]):gf(e[0],e[1],e[2],i)).translate(0,e[1]/2,0)}case"c":return new on(e[3]??e[0],e[0],e[1],e[2]||8).translate(0,e[1]/2,0);case"k":{let i=new br(e[0],e[1],e[2]||8);return(e[2]||8)===4&&i.rotateY(Math.PI/4),i.translate(0,e[1]/2,0)}case"s":return new cn(e[0],e[1]||0);case"f":return new on(e[0],e[0],e[1],e[4]||4,1,!1,e[2]*Ur,e[3]*Ur).translate(0,e[1]/2,0);default:return new Jt(.1,.1,.1)}}var FA=new Map;function vf(r){return FA.has(r)||FA.set(r,new de(r)),FA.get(r)}var QA=new Map,zr={h:0,s:0,l:0};function HA(r,e){let t=r+e;if(QA.has(t))return QA.get(t);new de(r).getHSL(zr,Ze);let i=zr.h*360,n=i<75?-8:i<240?11:-7,s=new de().setHSL(((i+n*e)%360+360)%360/360,Math.min(1,zr.s*(zr.s<.25?1.2:1)),Math.max(.03,zr.l*(1-.13*e)),Ze);return QA.set(t,s),s}function ni(r){let e={pieni:{pos:[],nor:[],col:[],st:[]},luce:{pos:[],nor:[],col:[],st:[]}},t={},i=0,n=new ye,s=new $e,a=new ti;for(let l of r){if(!l)continue;if(l[0]==="parte"){t[l[1]]={...ni(l[2]),at:l[3]||[0,0,0]};continue}let[A,c,h=[0,0,0],u="#ffffff",p={}]=l,d=mf(A,c,p);d.index&&(d=d.toNonIndexed());let m=p.r||[0,0,0];n.compose(new E(...h),s.setFromEuler(a.set(m[0]*Ur,m[1]*Ur,m[2]*Ur)),new E(...p.s||[1,1,1])),d.applyMatrix4(n),d.computeVertexNormals();let f=p.e?e.luce:e.pieni,v=d.attributes.position.count;i++;for(let g=0;g<v;g++)f.st.push(i);if(f.pos.push(...d.attributes.position.array),f.nor.push(...d.attributes.normal.array),A==="kit")f.col.push(...d.attributes.color.array);else{let g=vf(u),M=!p.e&&!p.uno&&(A==="b"||A==="c"),P=A==="c"&&!!p.r&&(Math.abs(p.r[0])>30||Math.abs(p.r[2])>30),b=d.attributes.normal;for(let x=0;x<v;x+=3){let _=b.getY(x),I=M?P?_>.3?g:HA(u,1):_>.8?g:_<-.5?HA(u,2):HA(u,1):g;for(let C=0;C<3;C++)f.col.push(I.r,I.g,I.b)}}d.dispose()}let o=l=>{if(!l.pos.length)return null;let A=new Ne;return A.setAttribute("position",new ve(l.pos,3)),A.setAttribute("normal",new ve(l.nor,3)),A.setAttribute("color",new ve(l.col,3)),A.setAttribute("strato",new ve(l.st,1)),A.computeBoundingBox(),A.computeBoundingSphere(),A};return{pieni:o(e.pieni),luce:o(e.luce),...Object.keys(t).length?{parti:t}:{}}}var Bh=new de,Sh=new de;function sa(r,e,t){return Bh.set(r),Sh.set(e),"#"+Bh.lerp(Sh,t).getHexString()}var Ke="#b08cff",Ri="#ffb48f";var Ct="#5ee1ff",_t="#ffcf5c",st="#6df5a8",yt="#ff8a3d",Tt="#6f8fff",It="#ff7ac6",zg={[Ct]:"#ffc46e",[_t]:"#fff1b3",[st]:"#d9f56b",[yt]:"#ffe16b",[Tt]:"#ffd27a",[It]:"#ffd0a1",[Ke]:"#e7dcff",[Ri]:"#ffe0cc"},Mf=[{id:"studio",colore:_t,nome:"Studio"},{id:"allenamento",colore:st,nome:"Allenamento"},{id:"lavoro",colore:Ct,nome:"Lavoro"},{id:"svago",colore:It,nome:"Svago"},{id:"casa",colore:yt,nome:"Casa"},{id:"sera",colore:Tt,nome:"Sera"}],Ug=Object.fromEntries(Mf.map(r=>[r.id,r]));var Ch=r=>{let e=String(r).replace("#","");return[0,2,4].map(t=>parseInt(e.slice(t,t+2),16)||0)},Pf=r=>"#"+r.map(e=>Math.max(0,Math.min(255,Math.round(e))).toString(16).padStart(2,"0")).join("");function Th(r,e,t){let i=Ch(r),n=Ch(e);return Pf(i.map((s,a)=>s+(n[a]-s)*t))}function zi(r,e=Ke){return typeof r=="string"&&/^#[0-9a-f]{6}$/i.test(r)?r.toLowerCase():e}var xf=["corti","ricci","lunghi","frangia","chignon","rasati"],yf=["nessuno","cuffie","occhiali","berretto","fiore","fascia"],wf=["felpa","maglietta"];function Df(r={}){return{pelle:zi(r.pelle,"#f1c7a3"),capelli:xf.includes(r.capelli)?r.capelli:"corti",coloreCapelli:zi(r.coloreCapelli,"#3a2a24"),colore:zi(r.colore,"#5ee1ff"),pantaloni:zi(r.pantaloni,"#6f8fff"),sopra:wf.includes(r.sopra)?r.sopra:"felpa",accessorio:yf.includes(r.accessorio)?r.accessorio:"nessuno",coloreAccessorio:zi(r.coloreAccessorio,"#b08cff"),scarpe:zi(r.scarpe,"#f2eefb"),occhi:r.occhi==="chiusi"?"chiusi":"aperti"}}function Ih(r={}){let e=Df(r),[t,i,n]=[1,3,5].map(a=>parseInt(e.coloreCapelli.slice(a,a+2),16));return{pelo:.3*t+.59*i+.11*n<64?Th(e.coloreCapelli,e.colore,.35):e.coloreCapelli,corpo:e.colore,dentro:e.pelle}}var Lh=[{id:"divano",nome:"Divano",gruppo:"sedute",colore:Tt,prezzo:40,piedi:[3,2],sedute:[[.99,1.24],[2.01,1.24]],quota:[0,76]},{id:"divano-grande",nome:"Divano grande",gruppo:"sedute",colore:It,prezzo:60,piedi:[3,2],sedute:[[.77,1.24],[1.5,1.24],[2.23,1.24]],quota:[0,76]},{id:"poltrona",nome:"Poltrona",gruppo:"sedute",colore:Ri,prezzo:25,piedi:[2,2],sedute:[[1,1.24]],quota:[0,70]},{id:"sedia",nome:"Sedia da scrivania",gruppo:"sedute",colore:Ct,prezzo:15,piedi:[1,1],sedute:[[.5,.45,"dietro"]],quota:[0,83]},{id:"pouf",nome:"Pouf",gruppo:"sedute",colore:It,prezzo:12,piedi:[1,1],sedute:[[.5,.5]],quota:[0,50]},{id:"panchina",nome:"Panchina",gruppo:"sedute",colore:yt,prezzo:20,piedi:[3,1],sedute:[[.9,.55],[2.1,.55]],quota:[0,50]},{id:"scrivania",nome:"Scrivania",gruppo:"tavoli",colore:Ct,prezzo:35,piedi:[3,2],modulo:"progetti",quota:[0,112]},{id:"tavolino",nome:"Tavolino",gruppo:"tavoli",colore:Ct,prezzo:15,piedi:[3,2],quota:[0,20]},{id:"tavolino-film",nome:"Tavolino coi popcorn",gruppo:"tavoli",colore:Ct,prezzo:20,piedi:[3,2],quota:[0,37]},{id:"tavolo",nome:"Tavolo",gruppo:"tavoli",colore:yt,prezzo:30,piedi:[2,2],quota:[0,64]},{id:"libreria",nome:"Libreria",gruppo:"tavoli",colore:_t,prezzo:35,piedi:[3,1],quota:[0,150]},{id:"mensola",nome:"Mensola coi libri",gruppo:"tavoli",colore:_t,prezzo:20,piedi:[3,1],alto:!0,quota:[134,173]},{id:"letto",nome:"Letto",gruppo:"casa",colore:Tt,prezzo:50,piedi:[3,3],sdraio:[1.5,1.6],modulo:"notte",quota:[0,84]},{id:"comodino",nome:"Comodino",gruppo:"casa",colore:Tt,prezzo:15,piedi:[1,1],quota:[0,90]},{id:"frigo",nome:"Frigo",gruppo:"casa",colore:Ct,prezzo:40,piedi:[1,1],quota:[0,176]},{id:"cucina",nome:"Cucina",gruppo:"casa",colore:yt,prezzo:45,piedi:[3,1],quota:[0,76]},{id:"camino",nome:"Camino",gruppo:"casa",colore:yt,prezzo:45,piedi:[3,1],luce:!0,quota:[0,106]},{id:"parete",nome:"Parete bassa",gruppo:"casa",colore:Ke,prezzo:5,piedi:[1,1],quota:[0,74]},{id:"lampada",nome:"Lampada",gruppo:"luci",colore:Tt,prezzo:15,piedi:[1,1],luce:!0,quota:[0,182]},{id:"lanterna",nome:"Lanterna",gruppo:"luci",colore:_t,prezzo:8,piedi:[1,1],luce:!0,passabile:!0,quota:[0,60]},{id:"pianta",nome:"Pianta",gruppo:"piante",colore:st,prezzo:10,piedi:[1,1],quota:[0,150]},{id:"cactus",nome:"Cactus",gruppo:"piante",colore:st,prezzo:8,piedi:[1,1],quota:[0,100]},{id:"fiori",nome:"Fiori",gruppo:"piante",colore:It,prezzo:5,piedi:[1,1],passabile:!0,quota:[0,24]},{id:"albero",nome:"Albero",gruppo:"piante",colore:st,prezzo:30,piedi:[1,1],quota:[0,190]},{id:"albero-altalena",nome:"L'albero con l'altalena",gruppo:"piante",colore:st,prezzo:45,piedi:[1,1],quota:[0,210]},{id:"alberello",nome:"Alberello",gruppo:"piante",colore:st,prezzo:18,piedi:[1,1],quota:[0,140]},{id:"arcade",nome:"Cabinato",gruppo:"svago",colore:It,prezzo:60,piedi:[1,1],modulo:"arcade",quota:[0,160]},{id:"televisore",nome:"Televisore",gruppo:"svago",colore:Tt,prezzo:90,piedi:[3,1],modulo:"cinema",quota:[0,156]},{id:"giradischi",nome:"Giradischi",gruppo:"svago",colore:It,prezzo:50,piedi:[1,1],modulo:"musica",quota:[0,90]},{id:"telescopio",nome:"Telescopio",gruppo:"svago",colore:_t,prezzo:80,piedi:[1,1],modulo:"cielo",quota:[0,130]},{id:"ruota",nome:"Ruota della fortuna",gruppo:"svago",colore:It,prezzo:40,piedi:[1,1],stati:8,quota:[0,172]},{id:"acquario",nome:"Acquario",gruppo:"svago",colore:Ct,prezzo:70,piedi:[3,1],missione:"tre-giorni",quota:[0,118]},{id:"sacco",nome:"Sacco da boxe",gruppo:"palestra",colore:yt,prezzo:30,piedi:[1,1],quota:[0,142]},{id:"manubri",nome:"Manubri",gruppo:"palestra",colore:st,prezzo:25,piedi:[3,1],quota:[0,72]},{id:"panca",nome:"Panca",gruppo:"palestra",colore:st,prezzo:25,piedi:[4,1],sedute:[[2,.5]],quota:[0,26]},{id:"borraccia",nome:"Borraccia",gruppo:"palestra",colore:Ct,prezzo:3,piedi:[1,1],passabile:!0,quota:[0,46]},{id:"finestra",nome:"Finestra",gruppo:"muro",colore:Ke,tipo:"muro",prezzo:20,piedi:[2,0],len:2,z:[76,196]},{id:"finestra-alta",nome:"Finestra alta",gruppo:"muro",colore:Ke,tipo:"muro",prezzo:25,piedi:[2,0],len:2,z:[34,204]},{id:"porta",nome:"Porta",gruppo:"muro",colore:yt,tipo:"muro",prezzo:0,piedi:[1,0],len:1,z:[0,170],modulo:"stanze"},{id:"orologio",nome:"Orologio",gruppo:"muro",colore:Ke,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[158,202]},{id:"calendario",nome:"Calendario",gruppo:"muro",colore:Ke,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[102,184],modulo:"oggi"},{id:"quadro",nome:"Quadro",gruppo:"muro",colore:Ri,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[138,186]},{id:"quadro-grande",nome:"Quadro grande",gruppo:"muro",colore:Tt,tipo:"muro",prezzo:18,piedi:[2,0],len:2,z:[118,198]},{id:"specchio",nome:"Specchio",gruppo:"muro",colore:st,tipo:"muro",prezzo:25,piedi:[2,0],len:2,z:[28,198],modulo:"tu"},{id:"led",nome:"Orologio luminoso",gruppo:"muro",colore:st,tipo:"muro",prezzo:20,piedi:[2,0],len:2,z:[164,202]},{id:"mappa-stelle",nome:"Mappa delle stelle",gruppo:"muro",colore:_t,tipo:"muro",prezzo:25,piedi:[2,0],len:2,z:[108,202]},{id:"telo",nome:"Telo del cinema",gruppo:"muro",colore:It,tipo:"muro",prezzo:70,piedi:[4,0],len:4,z:[62,214],modulo:"cinema"},{id:"lucine",nome:"Lucine",gruppo:"muro",colore:Ke,tipo:"muro",prezzo:15,piedi:[4,0],len:4,z:[188,210]},{id:"mensola-muro",nome:"Mensolina",gruppo:"muro",colore:_t,tipo:"muro",prezzo:8,piedi:[1,0],len:1,z:[100,146]},{id:"piante-appese",nome:"Pianta appesa",gruppo:"muro",colore:st,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[128,232]},{id:"blocco",nome:"Blocco",gruppo:"costruire",colore:Ke,prezzo:2,piedi:[1,1],impilabile:!0,quota:[0,49]},{id:"mezzo-blocco",nome:"Mezzo blocco",gruppo:"costruire",colore:Ke,prezzo:1,piedi:[1,1],impilabile:!0,quota:[0,24]},{id:"lastra",nome:"Lastra",gruppo:"costruire",colore:Ke,prezzo:1,piedi:[1,1],impilabile:!0,quota:[0,8]},{id:"blocco-lungo",nome:"Blocco lungo",gruppo:"costruire",colore:Ke,prezzo:3,piedi:[2,1],impilabile:!0,quota:[0,49]},{id:"gradini",nome:"Gradini",gruppo:"costruire",colore:Ke,prezzo:3,piedi:[1,1],impilabile:!0,quota:[0,49]},{id:"colonna",nome:"Colonna",gruppo:"costruire",colore:Ke,prezzo:4,piedi:[1,1],impilabile:!0,quota:[0,147]},{id:"muretto",nome:"Muretto",gruppo:"costruire",colore:Ke,prezzo:2,piedi:[1,1],impilabile:!0,quota:[0,98]},{id:"casetta",nome:"Casetta",gruppo:"fuori",colore:yt,prezzo:0,piedi:[4,4],entra:!0,quota:[0,580]},{id:"cassetta-lettere",nome:"Cassetta delle lettere",gruppo:"fuori",colore:"#c42430",prezzo:8,piedi:[1,1],modulo:"posta",quota:[0,150]},{id:"lampione",nome:"Lampione",gruppo:"fuori",colore:Tt,prezzo:12,piedi:[1,1],luce:!0,quota:[0,230]},{id:"orto",nome:"L'orto",gruppo:"fuori",colore:yt,prezzo:10,piedi:[3,2],passabile:!0,quota:[0,20]},{id:"orto-vuoto",nome:"Orto da bagnare",gruppo:"fuori",colore:Ke,prezzo:0,piedi:[3,2],passabile:!0,quota:[0,12]},{id:"sasso",nome:"Sasso",gruppo:"fuori",colore:Ke,prezzo:3,piedi:[1,1],quota:[0,30]},{id:"funghi",nome:"Funghi",gruppo:"fuori",colore:It,prezzo:3,piedi:[1,1],passabile:!0,quota:[0,20]},{id:"ciuffo",nome:"Ciuffo d'erba",gruppo:"fuori",colore:st,prezzo:1,piedi:[1,1],passabile:!0,quota:[0,25]},{id:"tappeto-tondo",nome:"Tappeto tondo",gruppo:"tappeti",colore:Ke,tipo:"tappeto",prezzo:15,piedi:[3,3],forma:"tondo"},{id:"tappeto",nome:"Tappeto",gruppo:"tappeti",colore:Ri,tipo:"tappeto",prezzo:15,piedi:[3,2],forma:"rettangolo"},{id:"tappetino",nome:"Tappetino",gruppo:"tappeti",colore:yt,tipo:"tappeto",prezzo:5,piedi:[1,1],forma:"rettangolo"},{id:"tappeto-lungo",nome:"Tappeto lungo",gruppo:"tappeti",colore:st,tipo:"tappeto",prezzo:20,piedi:[4,2],forma:"rettangolo"},{id:"stagno",nome:"Stagno",gruppo:"tappeti",colore:Ct,tipo:"tappeto",prezzo:35,piedi:[3,3],forma:"stagno"},{id:"pietra",nome:"Pietra",gruppo:"tappeti",colore:Ke,tipo:"tappeto",prezzo:2,piedi:[1,1],forma:"pietra"}];for(let r of Lh)r.tipo=r.tipo||"pavimento",r.tipo==="muro"&&(r.piedi=[r.len,0]);var Rh=Object.fromEntries(Lh.map(r=>[r.id,r]));var _f=0,zh=(r="m")=>r+Date.now().toString(36)+(_f++).toString(36)+Math.random().toString(36).slice(2,5),nr=(r,e)=>r+","+e,Ui=(r,e=r)=>{let t=[];for(let i=0;i<r;i++)for(let n=0;n<e;n++)t.push([i,n]);return t},Me=(r,e,t,i=0,n=void 0)=>({id:zh(),tipo:r,i:e,j:t,r:i,...n?{c:n}:{}}),Xe=(r,e,t,i,n=void 0)=>({id:zh("a"),tipo:r,piano:e,pos:t,a:i,dir:-1,...n?{c:n}:{}}),Ef=[{id:"soggiorno",nome:"Soggiorno",tinta:Ke,fa:()=>({caselle:Ui(8),appesi:[Xe("finestra","i",0,1),Xe("calendario","i",0,5),Xe("orologio","j",0,1),Xe("porta","j",0,6)],mobili:[Me("tappeto-tondo",2,4),Me("tappetino",6,0),Me("pianta",0,0),Me("mensola",3,0),Me("scrivania",2,0),Me("sedia",3,2),Me("divano",0,4,1),Me("lampada",0,7)]})},{id:"cinema",nome:"Cinema",tinta:It,fa:()=>({caselle:Ui(8),appesi:[Xe("telo","i",0,1),Xe("lucine","j",0,2),Xe("quadro","j",0,1,Ri),Xe("porta","j",0,7)],mobili:[Me("tappeto-lungo",2,1,0,Ri),Me("divano-grande",3,0),Me("tavolino-film",3,2),Me("pianta",0,0),Me("giradischi",7,0,0,_t)]})},{id:"palestra",nome:"Palestra",tinta:st,fa:()=>({caselle:Ui(8),appesi:[Xe("specchio","j",0,2),Xe("finestra","i",0,1),Xe("led","i",0,5),Xe("porta","j",0,6)],mobili:[Me("tappeto",2,2,0,st),Me("tappeto",2,4,0,Ct),Me("manubri",5,0),Me("sacco",1,1),Me("panca",5,3,1),Me("borraccia",6,6),Me("pianta",0,7)]})},{id:"giardino",nome:"Giardino",tinta:st,aperta:!0,fa:()=>({caselle:Ui(10,9).filter(([r,e])=>![nr(0,8),nr(9,0),nr(9,8),nr(8,8),nr(9,7)].includes(nr(r,e))),appesi:[],mobili:[Me("stagno",5,4),...[[1,7],[2,6],[3,5],[3,4],[4,3]].map(([r,e])=>Me("pietra",r,e)),Me("albero-altalena",1,1),Me("albero",7,1),Me("alberello",0,5),Me("panchina",4,0),Me("lanterna",3,1),Me("lanterna",8,3),Me("lanterna",2,8),Me("fiori",1,3),Me("fiori",3,2),Me("fiori",8,2),Me("fiori",4,7),Me("fiori",8,7)]})},{id:"osservatorio",nome:"Osservatorio",tinta:_t,fa:()=>({caselle:Ui(8),appesi:[Xe("finestra-alta","i",0,1),Xe("mappa-stelle","j",0,4),Xe("orologio","j",0,1),Xe("porta","j",0,7)],mobili:[Me("tappeto-tondo",3,3,0,_t),Me("telescopio",1,1),Me("libreria",0,4,1),Me("scrivania",4,0),Me("sedia",5,2,0,_t),Me("lampada",0,7)]})},{id:"camera",nome:"Camera",tinta:Tt,fa:()=>({caselle:Ui(7),appesi:[Xe("finestra","i",0,1),Xe("quadro-grande","j",0,1),Xe("porta","j",0,6),Xe("piante-appese","i",0,5)],mobili:[Me("tappeto",2,3,0,Tt),Me("letto",2,0),Me("comodino",1,0),Me("comodino",5,0),Me("lampada",0,6),Me("pianta",6,6),Me("pouf",5,4)]})},{id:"cucina",nome:"Cucina",tinta:yt,fa:()=>({caselle:Ui(7),appesi:[Xe("finestra","i",0,2),Xe("mensola-muro","j",0,3),Xe("orologio","j",0,4),Xe("porta","j",0,6)],mobili:[Me("frigo",0,0),Me("cucina",1,0),Me("tavolo",3,3),Me("tappetino",0,2,0,yt),Me("cactus",6,0),Me("pianta",0,6)]})},{id:"vuota",nome:"Vuota",tinta:Ke,fa:()=>({caselle:Ui(6),appesi:[Xe("porta","j",0,4)],mobili:[]})}],qg=Object.fromEntries(Ef.map(r=>[r.id,r]));var bf=1/80;var Ni={legno:"#edab50",legnoScuro:"#8a4836",legnoChiaro:"#f6ca9f",erba:"#5ac54f",erbaScura:"#33984b",foglie:["#134c4c","#1e6f50","#33984b","#5ac54f"],terra:["#e69c69","#e69c69","#bf6f4a"],pietra:"#92a1b9",pietraScura:"#657392",ferro:"#2a2f4e",crema:"#f9e6cf",neve:"#f4f1ea",nero:"#1c121c",vaso:"#e07438",luce:"#ffd27a",schermo:"#8fe3ff",acqua:"#0098dc",rosso:"#c42430",rosa:"#f68187"};var Uh=2.07,Bf=[0,.81,0],GA=[[-.38,.625,.125],[.37,.625,.125]],Sf=[0,.3,-.13],aa=GA[0][1];function kA(r=.375){let e=new ke(new an(r,8),new qt({color:"#134430",transparent:!0,opacity:.72,depthWrite:!1}));return e.rotation.set(-Math.PI/2,0,Math.PI/8),e.position.y=.012,e.renderOrder=1,e}var Nh={tazza:()=>[["c",[.07,.12,8],[0,0,0],Ni.neve],["c",[.055,.02,8],[0,.11,0],"#7a4a2a"]],libro:()=>[["b",[.2,.05,.15],[0,0,0],"#e5484d"],["b",[.18,.04,.13],[.01,.005,0],Ni.crema]],annaffiatoio:()=>[["c",[.08,.14,8],[0,0,0],"#5ee1ff"],["b",[.16,.025,.025],[.11,.1,0],"#5ee1ff",{r:[0,0,30]}]],retino:()=>[["kit","retino",[0,0,0],null]],canna:()=>[["kit","canna",[0,0,0],null]],pala:()=>[["c",[.028,.46,6],[0,-.04,0],"#8a5a33"],["b",[.16,.18,.05],[0,-.2,0],Ni.ferro]],cazzuola:()=>[["c",[.028,.16,6],[0,0,0],"#8a5a33"],["b",[.15,.04,.2],[0,-.02,.1],Ni.ferro]],pennello:()=>[["c",[.024,.3,6],[0,0,0],"#8a5a33"],["b",[.09,.09,.05],[0,.3,0],"#ff7ac6"]],torcia:()=>[["c",[.04,.2,6],[0,0,0],Ni.ferro],["c",[.06,.05,8],[0,.2,0],Ni.luce,{e:!0}]],fiore:()=>[["b",[.02,.24,.02],[0,0,0],Ni.erbaScura],["s",[.07,0],[0,.27,0],"#ff8fb1"]]},Oh={ciao:{durata:1.1,saluta:!0},si:{durata:.9,annuisce:!0},no:{durata:.9,scuote:!0},musica:{durata:1.4,balla:!0},idea:{durata:1,salta:!0},sonno:{durata:1.6,dorme:!0}};var oa=class{constructor(e){this.gruppo=new tt,this.corpo=new tt,this.gruppo.add(this.corpo),this.gruppo.add(kA()),this.zona=new ke(new Jt(1,Uh+.2,1),vh),this.zona.position.y=(Uh+.2)/2,this.gruppo.add(this.zona),this.mano=new tt,this.dir=new se(.3,1),this.t=Math.random()*10,this.cammina=!1,this.corre=!1,this.preso=!1,this.seduto=!1,this.dorme=!1,this.salto=null,this.caduta=null,this.unaVolta=null,this.attrezzo=null,this.segno=null,this.imposta(e)}get inAria(){return!!this.salto}imposta(e={}){this.aspetto=e;for(let o of[...this.corpo.children])this.corpo.remove(o);let{pelo:t,corpo:i,dentro:n}=Ih(e),s={"#e07438":i,"#edab50":t,"#f68187":n},a=(o,l)=>{let A=new tt,c=new ke(ir(o,s),vi());return c.position.set(-l[0],-l[1],-l[2]),A.position.set(l[0],l[1],l[2]),A.add(c),A};this.busto=a("gatto-corpo",[0,0,0]),this.testa=a("gatto-testa",Bf),this.coda=a("gatto-coda",Sf),this.maniG=[a("gatto-mano-a",GA[0]),a("gatto-mano-b",GA[1])],this.corpo.add(this.busto,this.testa,this.coda,...this.maniG),this.maniG[1].add(this.mano),this.attrezzo&&this.impugna(this.attrezzo)}guarda(e,t){Math.hypot(e,t)>.001&&this.dir.set(e,t).normalize()}rimbalza(){this.caduta={t:0}}salta(){this.salto||(this.salto={t:0})}gesto(e){Oh[e]&&(this.unaVolta={nome:e,t:0,...Oh[e]},this.segno={nome:e,fino:performance.now()+1800})}impugna(e){for(let s of[...this.mano.children])this.mano.remove(s),s.geometry&&s.geometry.dispose();if(this.attrezzo=Nh[e]?e:null,this.punta=null,!this.attrezzo)return;let t=Nh[e](),i=ni(t);i.pieni&&this.mano.add(new ke(i.pieni,vi())),i.luce&&this.mano.add(new ke(i.luce,zA()));let n=e==="retino"||e==="canna";if(this.mano.position.set(0,n?0:.03,n?0:.1),this.mano.scale.setScalar(n?1:1.65),e==="canna"&&i.pieni){let s=i.pieni.attributes.position,a=0;for(let o=1;o<s.count;o++)s.getY(o)>s.getY(a)&&(a=o);this.punta=new E().fromBufferAttribute(s,a)}}puntaNelMondo(e){return this.mano.updateWorldMatrix(!0,!1),this.punta?e.copy(this.punta).applyMatrix4(this.mano.matrixWorld):e.copy(this.gruppo.position)}aggiorna(e){e=Math.min(e,.1),this.t+=e;let t=this.corpo,i=M=>1-Math.exp(-M*e),s=Math.atan2(this.dir.x,this.dir.y)-t.rotation.y;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;t.rotation.y+=s*i(14*(this.svelto||1));let a=this.velocita??(this.cammina?this.corre?6:3.4:0);this.pPasso=(this.pPasso||0)+((this.cammina?1:0)-(this.pPasso||0))*i(10),this.pCorsa=(this.pCorsa||0)+((this.cammina&&this.corre?1:0)-(this.pCorsa||0))*i(6),this.fase=(this.fase||0)+e*(this.cammina?3.2+a*1.9:7)*Math.PI/2;let o=this.pPasso,l=this.pCorsa,A=Math.sin(this.fase),c=Math.abs(A)*(.09+.06*l)*o,h=1,u=1+Math.sin(this.t*2.2)*.015*(1-o),p=0,d=0,m=A*(.06-.02*l)*o,f=.12*l*o,v=A*(.12+.06*l)*o;if(this.preso&&(m=Math.sin(this.t*7)*.18,v=.2),this.salto){this.salto.t+=e;let M=this.salto.t/.5;c+=Math.sin(Math.min(1,M)*Math.PI)*.9,M>=1&&(this.salto=null,this.rimbalza())}if(this.caduta){this.caduta.t+=e;let M=this.caduta.t/.42,P=M<1?Math.sin(M*Math.PI*1.5)*Math.exp(-M*3.2)*.17:0;h=1+P,u=1-P,M>=1&&(this.caduta=null)}let g=this.unaVolta;if(g){g.t+=e;let M=g.t/g.durata,P=b=>b*b*(3-2*b);g.saluta&&(this.maniG[1].position.y=aa+Math.sin(P(Math.min(1,M))*Math.PI)*.8),g.annuisce&&(p=Math.sin(M*Math.PI*4)*.25*(1-M)),g.scuote&&(d=Math.sin(M*Math.PI*4)*.3*(1-M)),g.balla&&(m=Math.sin(M*Math.PI*6)*.15,c+=Math.abs(Math.sin(M*Math.PI*6))*.13),g.salta&&(c+=Math.sin(Math.min(1,M*2)*Math.PI)*.58),g.dorme&&(d=.3*Math.sin(Math.min(1,M*2)*Math.PI/2)),M>=1&&(this.unaVolta=null,this.maniG[1].position.y=aa)}this.dorme&&(d=.3),this.testaX=(this.testaX||0)+(p+-f*.5+A*.03*o-(this.testaX||0))*i(12),this.testa.rotation.set(this.testaX,0,d),this.coda.rotation.y=Math.sin(this.t*2.4+this.fase*.5*o)*(.14+.24*o),(!g||!g.saluta)&&(this.maniG[0].position.y=aa+v,this.maniG[1].position.y=aa-v+(this.attrezzo?.05:0)),this.seduta=(this.seduta||0)+((this.seduto?1:0)-(this.seduta||0))*i(12),t.position.y=c-.2*this.seduta,t.rotation.z+=(m-t.rotation.z)*i(16),this.capriola||(t.rotation.x+=(f-t.rotation.x)*i(10)),t.scale.set(h,u*(1-.12*this.seduta),h),this.zona.scale.y=1-.3*this.seduta}};var L={add:(r,e)=>[r[0]+e[0],r[1]+e[1],r[2]+e[2]],sub:(r,e)=>[r[0]-e[0],r[1]-e[1],r[2]-e[2]],scala:(r,e)=>[r[0]*e,r[1]*e,r[2]*e],madd:(r,e,t)=>[r[0]+e[0]*t,r[1]+e[1]*t,r[2]+e[2]*t],dot:(r,e)=>r[0]*e[0]+r[1]*e[1]+r[2]*e[2],cross:(r,e)=>[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]],len:r=>Math.hypot(r[0],r[1],r[2]),norm:r=>{let e=Math.hypot(r[0],r[1],r[2]);return e>1e-9?[r[0]/e,r[1]/e,r[2]/e]:[0,1,0]}},Oe={mul:(r,e)=>[r[3]*e[0]+r[0]*e[3]+r[1]*e[2]-r[2]*e[1],r[3]*e[1]-r[0]*e[2]+r[1]*e[3]+r[2]*e[0],r[3]*e[2]+r[0]*e[1]-r[1]*e[0]+r[2]*e[3],r[3]*e[3]-r[0]*e[0]-r[1]*e[1]-r[2]*e[2]],ruota:(r,e)=>{let[t,i,n,s]=r,a=s*e[0]+i*e[2]-n*e[1],o=s*e[1]+n*e[0]-t*e[2],l=s*e[2]+t*e[1]-i*e[0],A=-t*e[0]-i*e[1]-n*e[2];return[a*s+A*-t+o*-n-l*-i,o*s+A*-i+l*-t-a*-n,l*s+A*-n+a*-i-o*-t]},coniugato:r=>[-r[0],-r[1],-r[2],r[3]],norm:r=>{let e=Math.hypot(r[0],r[1],r[2],r[3])||1;return[r[0]/e,r[1]/e,r[2]/e,r[3]/e]},asse:(r,e)=>{let t=Math.sin(e/2);return[r[0]*t,r[1]*t,r[2]*t,Math.cos(e/2)]},integra:(r,e,t)=>{let i=Oe.mul([e[0],e[1],e[2],0],r);return Oe.norm([r[0]+i[0]*t/2,r[1]+i[1]*t/2,r[2]+i[2]*t/2,r[3]+i[3]*t/2])}};function Cf([r=0,e=0,t=0]=[]){let i=r*Math.PI/180,n=e*Math.PI/180,s=t*Math.PI/180,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),A=Math.sin(n),c=Math.cos(s),h=Math.sin(s);return[[l*c,-l*h,A],[a*h+o*A*c,a*c-o*A*h,-o*l],[o*h-a*A*c,o*c+a*A*h,a*l]]}var Tf=(r,e)=>[r[0][0]*e[0]+r[1][0]*e[1]+r[2][0]*e[2],r[0][1]*e[0]+r[1][1]*e[1]+r[2][1]*e[2],r[0][2]*e[0]+r[1][2]*e[1]+r[2][2]*e[2]];function vt(r,e){let t={tipo:r,...e};return r==="b"&&(t.m=Cf(e.r),t.raggioB=Math.hypot(...e.h)),r==="c"&&(t.raggioB=Math.hypot(e.raggio,e.lungo/2)),r==="giro"&&(t.raggioB=e.raggio+e.spesso+e.largo+Math.abs(e.sposta)),t}function If(r,e){if(r.tipo==="b"){let t=Tf(r.m,[e[0]-r.c[0],e[1]-r.c[1],e[2]-r.c[2]]),i=Math.abs(t[0])-r.h[0],n=Math.abs(t[1])-r.h[1],s=Math.abs(t[2])-r.h[2];return Math.hypot(Math.max(i,0),Math.max(n,0),Math.max(s,0))+Math.min(Math.max(i,n,s),0)}if(r.tipo==="c"){let t=Math.abs(e[0]-r.c[0])-r.lungo/2,i=Math.hypot(e[1]-r.c[1],e[2]-r.c[2])-r.raggio;return Math.hypot(Math.max(t,0),Math.max(i,0))+Math.min(Math.max(t,i),0)}if(r.tipo==="giro"){let t=e[1]-(r.c[1]+r.raggio),i=e[2]-r.c[2],n=Math.hypot(t,i),s=Math.atan2(i,-t);s<0&&(s+=Math.PI*2);let a=r.c[0]+r.sposta*s/(Math.PI*2),o=Math.abs(n-(r.raggio+r.spesso/2))-r.spesso/2,l=Math.abs(e[0]-a)-r.largo/2;return Math.hypot(Math.max(l,0),Math.max(o,0))+Math.min(Math.max(l,o),0)}return 1/0}var la=class{constructor(e,t=null){this.forme=e,this.acqua=t,this.t=0}vicine(e,t){return this.forme.filter(i=>Math.hypot(e[0]-i.c[0],e[1]-i.c[1],e[2]-i.c[2])<i.raggioB+t+1)}distanza(e,t=this.forme){let i=1/0;for(let n of t){let s=If(n,e);s<i&&(i=s)}return i}normale(e,t=this.forme){let n=s=>this.distanza(s,t);return L.norm([n([e[0]+.004,e[1],e[2]])-n([e[0]-.004,e[1],e[2]]),n([e[0],e[1]+.004,e[2]])-n([e[0],e[1]-.004,e[2]]),n([e[0],e[1],e[2]+.004])-n([e[0],e[1],e[2]-.004])])}raggio(e,t,i,n=this.forme){let s=0;for(let a=0;a<64&&s<=i;a++){let o=this.distanza([e[0]+t[0]*s,e[1]+t[1]*s,e[2]+t[2]*s],n);if(o<.003)return s;s+=Math.max(o*.9,.004)}return null}pelo(e,t){let i=this.acqua;return!i||e<i.x0||e>i.x1||t<i.z0||t>i.z1?null:i.livello(e,t,this.t)}},Fh=[.9,1.33,1.75],VA=.32,un=.55,Aa=.62,Hh={RAGGIO:VA,GRADINO:un};function ca(r){return{p:[...r],v:[0,0,0],aTerra:!1,nuota:!1,salto:!1,corre:!1,dir:[0,1],botta:0}}function Qh(r,e,t){let i=null;for(let[n,s]of[[0,0],[.22,0],[-.22,0],[0,.22],[0,-.22]]){let a=[e[0]+n,e[1]+un+.05,e[2]+s],o=r.raggio(a,[0,-1,0],un+1.2,t);if(o===null)continue;let l=a[1]-o;(!i||l>i.y)&&(i={y:l,x:a[0],z:a[2]})}return i&&(i.n=r.normale([i.x,i.y-.01,i.z],t)),i}function ha(r,e,t,i){let n={},s=i.vicine([r.p[0],r.p[1]+1,r.p[2]],3);e={x:e.x||0,z:e.z||0,corri:e.corri,salta:e.salta};let a=Math.min(1,Math.hypot(e.x,e.z)),o=i.pelo(r.p[0],r.p[2]),l=r.nuota?2.4:e.corri?6.5:3.6,A=a>.12?e.x/a*l*a:0,c=a>.12?e.z/a*l*a:0,h=a>.12&&r.v[0]*A+r.v[2]*c<0,u=Math.min(1,t/(h?.035:a>.12?.06:.05));if(r.botta>0&&(r.botta-=t,(!r.aTerra||r.botta>.3)&&(u*=.06)),!r.aTerra&&!r.nuota&&!(r.botta>0)&&(u*=.45),r.pattini&&!r.nuota){let f=Math.hypot(r.v[0],r.v[2]);if(r.staccato>0&&(r.staccato-=t),a>.12&&!(r.botta>0)){let v=[e.x/a,e.z/a],g=f>.6?[r.v[0]/f,r.v[2]/f]:v,M=Math.atan2(g[0]*v[1]-g[1]*v[0],g[0]*v[0]+g[1]*v[1]);if(Math.abs(M)>2.5&&f>1.5)f=Math.max(0,f-16*t);else{let P=Math.max(-1,Math.min(1,M/((r.aTerra?3.6:1.2)*t)))*(r.aTerra?3.6:1.2)*t,b=Math.cos(P),x=Math.sin(P);g=[g[0]*b-g[1]*x,g[0]*x+g[1]*b];let _=(e.corri?12.5:9.5)*a;r.aTerra&&(f+=f<_?6.8*t:-1.2*t)}r.v[0]=g[0]*f,r.v[2]=g[1]*f}else if(r.aTerra){let v=1-Math.min(1,.32*t);r.v[0]*=v,r.v[2]*=v}}else r.v[0]+=(A-r.v[0])*u,r.v[2]+=(c-r.v[2])*u;if(r.appoggiato?.t>0){r.appoggiato.t-=t;let f=r.appoggiato.n,v=r.v[0]*f[0]+r.v[2]*f[2];v<0&&(r.v[0]-=f[0]*v,r.v[2]-=f[2]*v)}if(r.pattini&&Math.hypot(r.v[0],r.v[2])>.8){let f=Math.hypot(r.v[0],r.v[2]);r.dir=[r.v[0]/f,r.v[2]/f]}else a>.12&&(r.dir=[e.x/a,e.z/a]);r.premuto=e.salta&&!r.saltaPrima?.13:Math.max(0,(r.premuto||0)-t),r.saltaPrima=!!e.salta,r.coyote=r.aTerra?.1:Math.max(0,(r.coyote||0)-t),r.premuto>0&&(r.aTerra||r.coyote>0||r.nuota)&&!r.salto&&(r.v[1]=r.nuota?5.6:r.pattini?7.3:6.9,r.nuota&&(r.p[1]+=.05),r.aTerra=!1,r.nuota=!1,r.salto=!0,r.premuto=0,r.coyote=0,n.salto=!0),r.salto&&!e.salta&&r.v[1]>4.3&&(r.v[1]=4.3),r.p[0]+=r.v[0]*t,r.p[2]+=r.v[2]*t;for(let f=0;f<3;f++){let v=!1;for(let g of Fh){let M=[r.p[0],r.p[1]+g,r.p[2]],P=i.distanza(M,s);if(P>=VA)continue;let b=i.normale(M,s);if(b[1]>Aa&&g===Fh[0])continue;let x=L.norm([b[0],0,b[2]]),_=VA-P;if(b[1]<-.5){r.p[1]-=_,r.v[1]>0&&(r.v[1]=0),v=!0;continue}r.p[0]+=x[0]*_,r.p[2]+=x[2]*_;let I=r.v[0]*x[0]+r.v[2]*x[2];I<0&&(r.v[0]-=x[0]*I,r.v[2]-=x[2]*I),v=!0}if(!v)break}let p=Qh(i,r.p,s),d=o!==null?o-(i.galla??.85):null;if(r.risale!==void 0)return r.p[1]=Math.min(r.risale,r.p[1]+7*t),r.v[1]=0,r.nuota=!1,r.aTerra=!1,p&&p.y>=r.risale-.06&&p.n[1]>Aa?(r.p[1]=p.y,r.risale=void 0,r.aTerra=!0,n.risalito=!0):r.p[1]>=r.risale&&a<=.12&&(r.risale=void 0),n;if(d!==null&&r.p[1]<=d+.02&&(!p||p.y<d)){if(r.nuota||(n.tuffo=r.v[1]<-2,r.nuota=!0),r.p[1]=d,r.v[1]=0,r.aTerra=!1,r.salto=!1,i.riva&&a>.12){let f=r.p[0]+e.x/a*.6,v=r.p[2]+e.z/a*.6,g=Qh(i,[f,o+i.riva-un,v],s);g&&g.y>d+.3&&g.y<=o+i.riva&&g.n[1]>Aa&&(r.risale=g.y)}return n}r.nuota=!1;let m=p&&(p.n[1]>Aa||p.y>r.p[1]+.01&&p.y<=r.p[1]+un);if(r.v[1]<=0&&m&&p.y>=r.p[1]-(r.aTerra?un:.02)&&p.y<=r.p[1]+un)!r.aTerra&&r.v[1]<-4&&(n.atterrato=!0),r.p[1]=p.y>r.p[1]?Math.min(p.y,r.p[1]+(i.salita??9)*t):Math.max(p.y,r.p[1]-7*t),r.v[1]=0,r.aTerra=!0,r.salto=!1;else if(r.v[1]-=14*(r.v[1]<0?1.5:1)*t,r.p[1]+=r.v[1]*t,r.aTerra=!1,p&&r.v[1]<=0&&r.p[1]<=p.y)if(m)r.v[1]<-4&&(n.atterrato=!0),r.p[1]=p.y,r.v[1]=0,r.aTerra=!0,r.salto=!1;else{let f=p.n;r.p[1]=p.y,r.v[0]+=f[0]*3*t,r.v[2]+=f[2]*3*t,r.v[1]=0}return n}var Pi={quad:{ruote:[[.58,0,.72],[-.58,0,.72],[.58,0,-.72],[-.58,0,-.72]],sterzanti:[0,1],motrici:[0,1,2,3],lungaMolla:.42,raggioRuota:.36,molla:55,smorzo:6.5,vmax:15,spinta:16,sterzoMax:.55,presa:1.7,inerzia:[.55,.6,.4],sfere:[[0,.32,.75,.42],[0,.32,-.75,.42],[0,.6,0,.46]],sedile:[0,.62,-.12]},moto:{ruote:[[0,0,.8],[0,0,-.74]],sterzanti:[0],motrici:[1],lungaMolla:.45,raggioRuota:.4,molla:80,smorzo:8,vmax:18,spinta:19,sterzoMax:.5,presa:1.9,inerzia:[.35,.4,.25],equilibrio:!0,sfere:[[0,.4,.68,.32],[0,.4,-.6,.32],[0,.66,0,.36]],sedile:[0,.66,-.18]},acqua:{galleggia:[[.45,0,.75],[-.45,0,.75],[.45,0,-.7],[-.45,0,-.7]],vmax:15,spinta:14,inerzia:[.5,.5,.4],sfere:[[0,.2,.75,.38],[0,.2,-.65,.38],[0,.38,0,.42]],sedile:[0,.52,-.1]}};function Gh(r,e,t=0){let i=Pi[r];return{tipo:r,d:i,p:[...e],v:[0,0,0],q:Oe.asse([0,1,0],t),w:[0,0,0],molle:(i.ruote||[]).map(()=>0),contatti:0,inAcqua:0,ribaltato:0,aria:0,acro:{beccheggio:0,rollio:0},saltelli:0,sterzo:0}}function ri(r){return{su:Oe.ruota(r.q,[0,1,0]),avanti:Oe.ruota(r.q,[0,0,1]),destra:Oe.ruota(r.q,[-1,0,0])}}var pn=(r,e)=>Math.max(-e,Math.min(e,r));function kh(r,e,t={x:0,y:0}){let i=!!e.salta,n=e.x||0,s=e.z||0;if(!r.contatti&&!r.inAcqua)return{gas:t?.y||0,sterzo:t?.x||0,salta:i};let a=Math.min(1,Math.hypot(n,s));if(a<.15)return r.retro=r.frenata=r.volta=!1,{gas:0,sterzo:0,salta:i};let{avanti:o,destra:l}=ri(r),A=L.norm([o[0],0,o[2]]),c=L.norm([l[0],0,l[2]]),h=[n/a,0,s/a],u=L.dot(h,A),p=L.dot(h,c),d=Math.atan2(p,u),m=L.dot(r.v,A);return u<-.3?r.retro||m<-.3?(r.retro=!0,{gas:-a,sterzo:pn(-Math.atan2(-p,-u)*1.6,1),salta:i}):!r.volta&&(m>.3||r.frenata)?(r.frenata=!0,m<.3&&(r.retro=!0),{gas:-a,sterzo:0,salta:i}):(r.volta=!0,{gas:a*.6,sterzo:p<0?-1:1,salta:i}):(r.retro=r.frenata=r.volta=!1,{gas:a*(u>0?1:.6),sterzo:pn(d*1.6,1),salta:i})}function Vh(r,e,t,i){let n=r.d,s={},{su:a,avanti:o,destra:l}=ri(r),A=i.vicine(r.p,5),c=[0,-14,0],h=[0,0,0],u=(C,R)=>{c=L.add(c,C),h=L.add(h,L.cross(L.sub(R,r.p),C))},p=C=>L.add(r.v,L.cross(r.w,L.sub(C,r.p))),d=L.dot(r.v,o),m=e.gas<-.1&&d>1,f=0,v=[0,0,0],g=null;for(let C of A){if(C.tipo!=="giro"||!r.contatti)continue;let R=r.p[1]-(C.c[1]+C.raggio),H=r.p[2]-C.c[2],S=Math.hypot(R,H);if(S>C.raggio+.5||S<C.raggio-2)continue;let N=Math.atan2(H,-R);if(N<0&&(N+=Math.PI*2),N<.15||N>Math.PI*2-.15)continue;let F=C.c[0]+C.sposta*N/(Math.PI*2);if(Math.abs(r.p[0]-F)>C.largo/2+.6)continue;let k=L.norm([C.sposta/(Math.PI*2),C.raggio*Math.sin(N),C.raggio*Math.cos(N)]);L.dot(k,o)<0&&(k=L.scala(k,-1));let Ae=L.dot(r.v,k);g={corsia:F,vx:k[0]*Ae,t:k}}if(g&&(h=L.add(h,L.sub(L.scala(L.cross(o,g.t),14),L.scala(a,L.dot(r.w,a)*4)))),r.sterzo+=((g?0:pn(e.sterzo,1))-r.sterzo)*Math.min(1,t*10),n.ruote){let C=n.lungaMolla+n.raggioRuota,R=new Set(n.motrici);n.ruote.forEach((H,S)=>{let N=L.add(r.p,Oe.ruota(r.q,H)),F=i.raggio(N,L.scala(a,-1),C,A);if(F===null){r.molle[S]=0;return}f++;let k=C-F,Ae=L.madd(N,a,-F),Z=p(Ae);r.molle[S]=k;let G=i.normale(L.madd(Ae,a,.02),A);v=L.add(v,G);let $=Math.max(0,n.molla*k+Math.max(0,k-C*.6)*520-n.smorzo*L.dot(Z,a));u(L.scala(G,$*Math.max(0,L.dot(G,a))),Ae);let Q=n.sterzanti.includes(S)?r.sterzo*n.sterzoMax/(1+Math.abs(d)*.04):0,j=L.norm(L.add(L.scala(o,Math.cos(Q)),L.scala(l,Math.sin(Q)))),le=L.norm(L.sub(j,L.scala(G,L.dot(j,G)))),w=L.cross(G,le),D=g?L.sub(Z,[g.vx,0,0]):Z,O=L.dot(D,w),K=L.dot(Z,le),T=n.presa*$,q=-K*(Math.abs(e.gas)<.1?.7:.02)/n.ruote.length;if(m)q+=-Math.sign(K)*Math.min(Math.abs(K)*8,14)/n.ruote.length;else if(R.has(S)){let U=e.gas;U>0?q+=U*n.spinta*Math.max(0,1-d/n.vmax)/R.size:U<0&&(q+=U*n.spinta*.5*Math.max(0,1+d/(n.vmax*.4))/R.size)}let z=L.add(L.scala(w,pn(-O*7,T)),L.scala(le,pn(q,Math.min(T,$*.9))));u(z,L.madd(Ae,a,L.dot(L.sub(r.p,Ae),a)))})}let M=0;if(n.galleggia){for(let N of n.galleggia){let F=L.add(r.p,Oe.ruota(r.q,N)),k=i.pelo(F[0],F[2]);if(k===null)continue;let Ae=k-F[1];if(Ae<=0)continue;M++;let Z=Math.min(Ae,.7)*24-p(F)[1]*2.4;Z>0&&u([0,Z,0],F)}let C=L.norm([o[0],0,o[2]]),R=[C[2],0,-C[0]],H=L.dot(r.v,C),S=L.dot(r.v,R);if(M){c=L.add(c,L.add(L.scala(R,-S*3.5),L.scala(C,-H*.3)));let N=e.gas;m?c=L.madd(c,C,-Math.sign(H)*Math.min(Math.abs(H)*4,10)):N>0?c=L.madd(c,C,N*n.spinta*Math.max(0,1-H/n.vmax)):N<0&&(c=L.madd(c,C,N*n.spinta*.45)),h=L.add(h,[0,-r.sterzo*(2.6+Math.abs(H)*.22),0]),h=L.add(h,L.sub(L.scala(L.cross(a,[0,1,0]),16),L.scala(r.w,2)))}}let P=!1;for(let[C,R,H,S]of n.sfere){let N=L.add(r.p,Oe.ruota(r.q,[C,R,H])),F=i.distanza(N,A);if(F>=S)continue;let k=i.normale(N,A),Ae=S-F;r.p=L.madd(r.p,k,Ae);let Z=p(N),G=L.dot(Z,k);if(G<0){r.v=L.madd(r.v,k,-G*1.12);let $=L.sub(Z,L.scala(k,G));r.v=L.madd(r.v,$,-Math.min(1,2.5*t)),r.w=L.add(L.scala(r.w,.92),L.scala(L.cross(L.sub(N,r.p),k),-G*.25))}k[1]>.5&&(P=!0),L.dot(a,k)<-.3&&(r.ribaltato+=t)}if(n.galleggia&&!M&&P){let C=L.norm([o[0],0,o[2]]);r.v=[r.v[0]*(1-Math.min(1,t*4)),r.v[1],r.v[2]*(1-Math.min(1,t*4))],r.saltelli+=t,Math.abs(e.gas)>.2&&r.saltelli>.32&&(r.saltelli=0,r.v=L.add(r.v,L.add([0,2.8,0],L.scala(C,1.6*Math.sign(e.gas))))),h=L.add(h,[0,-r.sterzo*2,0]),h=L.add(h,L.scala(L.cross(a,[0,1,0]),10))}let b=f>0||M>0;if(n.equilibrio){let C=f?L.norm(v):[0,1,0],R=-r.sterzo*Math.min(1,Math.abs(d)/9)*.38,H=L.norm(L.add(C,L.scala(l,R))),S=L.scala(o,L.dot(L.cross(a,H),o)*(f?30:7));h=L.add(h,L.sub(S,L.scala(o,L.dot(r.w,o)*(f?6:1)))),f&&(h=L.add(h,L.scala(a,-r.sterzo*Math.min(1,Math.abs(d)/4)*2.2*Math.sign(d||1))))}!b&&!P?(r.aria===0?r.acroPronto=Math.abs(e.gas)<.2&&Math.abs(e.sterzo)<.2:!r.acroPronto&&Math.abs(e.gas)<.2&&Math.abs(e.sterzo)<.2&&(r.acroPronto=!0),r.acroPronto&&r.aria>.2&&(Math.abs(e.gas)>.2||Math.abs(e.sterzo)>.2)?(h=L.add(h,L.scala(l,-pn(e.gas,1)*1.6)),h=L.add(h,L.scala(o,pn(e.sterzo,1)*1.4)),h=L.add(h,L.sub(L.scala(L.cross(a,[0,1,0]),1.4),L.scala(r.w,.6)))):h=L.add(h,L.sub(L.scala(L.cross(a,[0,1,0]),2.2),L.scala(r.w,.6))),r.aria+=t,r.acro.beccheggio+=L.dot(r.w,l)*t,r.acro.rollio+=L.dot(r.w,o)*t):(r.aria>.25&&(s.atterrato={aria:r.aria,...r.acro,dritto:a[1]>.4}),r.aria=0,r.acro={beccheggio:0,rollio:0}),e.salta&&(f||M||P)&&r.saltoPronto!==!1&&(r.v=L.madd(r.v,L.norm(L.add(a,[0,1,0])),6.2),s.salto=!0,r.saltoPronto=!1),e.salta||(r.saltoPronto=!0),r.v=L.madd(r.v,c,t);let x=Oe.ruota(Oe.coniugato(r.q),h),_=[x[0]/n.inerzia[0],x[1]/n.inerzia[1],x[2]/n.inerzia[2]];return r.w=L.madd(r.w,Oe.ruota(r.q,_),t),r.w=L.scala(r.w,1-(b?1.6:.35)*t),g&&(r.v[0]=g.vx+(g.corsia-r.p[0])*5),r.p=L.madd(r.p,r.v,t),r.q=Oe.integra(r.q,r.w,t),r.contatti=f,r.inAcqua=M,a[1]<.25&&L.len(r.v)<1.2&&(f===0||P)?r.ribaltato+=t:a[1]>.5&&(r.ribaltato=0),r.ribaltato>1.1&&(s.capottato=!0,XA(r)),s}function XA(r){let e=Oe.ruota(r.q,[0,0,1]);r.q=Oe.asse([0,1,0],Math.atan2(e[0],e[2])),r.p[1]+=1.2,r.v=[0,0,0],r.w=[0,0,0],r.ribaltato=0}var ua=.09,Lf=.25;function Rf(r,e,t,i,n){let s=n*n,a=s*n;return[0,1,2].map(o=>.5*(2*e[o]+(-r[o]+t[o])*n+(2*r[o]-5*e[o]+4*t[o]-i[o])*s+(-r[o]+3*e[o]-3*t[o]+i[o])*a))}var Oi=class{constructor(e,{chiusa:t=!1,nome:i="rotaia"}={}){this.chiusa=t,this.nome=i;let n=e,s=n.length,a=[],o=u=>t?n[(u+s)%s]:n[Math.max(0,Math.min(s-1,u))],l=t?s:s-1;for(let u=0;u<l;u++)for(let p=0;p<24;p++)a.push(Rf(o(u-1),o(u),o(u+1),o(u+2),p/24));a.push(t?[...n[0]]:[...n[s-1]]);let A=[0];for(let u=1;u<a.length;u++)A.push(A[u-1]+Math.hypot(a[u][0]-a[u-1][0],a[u][1]-a[u-1][1],a[u][2]-a[u-1][2]));this.lungo=A[A.length-1];let c=Math.max(2,Math.round(this.lungo/Lf)+1);this.passo=this.lungo/(c-1),this.p=new Float64Array(c*3);let h=0;for(let u=0;u<c;u++){let p=u*this.passo;for(;h<A.length-2&&A[h+1]<p;)h++;let d=(p-A[h])/Math.max(1e-9,A[h+1]-A[h]);for(let m=0;m<3;m++)this.p[u*3+m]=a[h][m]+(a[h+1][m]-a[h][m])*d}this.n=c,this.min=[1/0,1/0,1/0],this.max=[-1/0,-1/0,-1/0];for(let u=0;u<c;u++)for(let p=0;p<3;p++)this.min[p]=Math.min(this.min[p],this.p[u*3+p]),this.max[p]=Math.max(this.max[p],this.p[u*3+p])}punto(e){let{n:t,passo:i,p:n}=this;this.chiusa&&(e=(e%this.lungo+this.lungo)%this.lungo);let s=Math.max(0,Math.min(t-1.0001,e/i)),a=Math.floor(s),o=s-a,l=a*3,A=(a+1)*3,c=[n[l]+(n[A]-n[l])*o,n[l+1]+(n[A+1]-n[l+1])*o,n[l+2]+(n[A+2]-n[l+2])*o],h=[n[A]-n[l],n[A+1]-n[l+1],n[A+2]-n[l+2]],u=Math.hypot(h[0],h[1],h[2])||1;return{p:c,t:[h[0]/u,h[1]/u,h[2]/u]}}vicino(e){if(e[0]<this.min[0]-1||e[0]>this.max[0]+1||e[2]<this.min[2]-1||e[2]>this.max[2]+1||e[1]<this.min[1]-2||e[1]>this.max[1]+2)return null;let t=-1,i=1/0;for(let o=0;o<this.n;o++){let l=this.p[o*3]-e[0],A=this.p[o*3+2]-e[2],c=(this.p[o*3+1]-e[1])*.5,h=l*l+A*A+c*c;h<i&&(i=h,t=o)}let n=t*this.passo,{p:s,t:a}=this.punto(n);return{s:n,d:Math.hypot(s[0]-e[0],s[2]-e[2]),dy:e[1]-(s[1]+ua),p:s,t:a}}};function Xh(r,e){if(!r.pattini||r.rotaia||r.nuota||(r.staccato||0)>0)return!1;let t=Math.hypot(r.v[0],r.v[2]);if(t<1.2&&!(!r.aTerra&&r.v[1]<0))return!1;for(let i=0;i<e.length;i++){let n=e[i].vicino(r.p);if(!n||n.d>.55||n.dy>.6||n.dy<-.35||n.dy<0&&r.v[1]>1)continue;let s=r.v[0]*n.t[0]+r.v[1]*n.t[1]+r.v[2]*n.t[2],a=s>=0?1:-1;return r.rotaia={r:i,s:n.s,verso:a,v:Math.max(Math.abs(s),t*.75,2.5),t:0},r.aTerra=!1,r.salto=!1,!0}return!1}function Wh(r,e,t,i){let n=r.rotaia,s=i[n.r],a={};n.t+=t;let{t:o}=s.punto(n.s);n.v+=-14*o[1]*n.verso*t-.18*t,n.v<0&&(n.verso=-n.verso,n.v=-n.v),n.s+=n.v*n.verso*t;let l=!s.chiusa&&(n.s<0||n.s>s.lungo),A=s.punto(Math.max(0,Math.min(s.lungo,n.s)));o=A.t,r.p=[A.p[0],A.p[1]+ua,A.p[2]],r.v=[o[0]*n.verso*n.v,o[1]*n.verso*n.v,o[2]*n.verso*n.v],r.dir=[o[0]*n.verso,o[2]*n.verso].map((h,u,p)=>h/(Math.hypot(p[0],p[1])||1));let c=e.salta&&!r.saltaPrima;return r.saltaPrima=!!e.salta,(c||l)&&(r.v[1]=Math.max(r.v[1],0)+(c?6.4:2.2),r.rotaia=null,r.aTerra=!1,r.salto=c,r.staccato=.25,a[c?"salto":"fine"]=!0),a}var xi=Math.PI/180,xe={rosso:"#ea323c",ruggine:"#c64524",arancio:"#ed7614",giallo:"#ffa214",sabbia:"#edab50",verde:"#5ac54f",bosco:"#1e6f50",mare:"#0098dc",notte:"#424c6e",pietra:"#92a1b9",rosa:"#f68187",crema:"#f9e6cf",terra:"#8a4836",scuro:"#2a2f4e"};function jh(r){let e={position:3,normal:3,color:3,strato:1},t=r.filter(n=>n.g).map(({g:n,m:s})=>{let a=n.clone();return s&&a.applyMatrix4(s),a}),i=new Ne;for(let[n,s]of Object.entries(e)){let a=t.reduce((A,c)=>A+c.attributes.position.count,0),o=new Float32Array(a*s),l=0;for(let A of t){let c=A.attributes[n];c&&o.set(c.array,l),l+=A.attributes.position.count*s}i.setAttribute(n,new Qe(o,s))}for(let n of t)n.dispose();return i.computeBoundingSphere(),i}var Yh=(r,e=[0,0,0])=>new ye().compose(new E(...r),new $e().setFromEuler(new ti(e[0]*xi,e[1]*xi,e[2]*xi)),new E(1,1,1)),si=(r,e,t={})=>ni([["b",[r[0]*2,r[1]*2,r[2]*2],[0,-r[1],0],e,t]]).pieni,pa=class{constructor(e,t){this.arena=e,this.gruppo=new tt,t.add(this.gruppo);let i=[],n=(d,m,f)=>i.push({g:d,m:Yh(m,f)});for(let d of e.mondo.forme){if(d.tipo==="b"&&d.nome==="prato"){let[m,f,v]=d.c,[g,M,P]=d.h,b=f+M;n(si([g,M-.2,P],xe.terra),[m,f-.2,v]);let x=10,_=Math.round(g*2/x),I=Math.round(P*2/x);for(let C=0;C<_;C++)for(let R=0;R<I;R++){let H=m-g+C*x,S=v-P+R*x,N=Math.floor(H/x)+Math.floor(S/x)&1;n(si([x/2,.2,x/2],N?xe.verde:sa(xe.verde,xe.bosco,.14),{netta:!0}),[H+x/2,b-.2,S+x/2])}continue}if(d.tipo==="b"){n(si(d.h,d.colore||xe.pietra),d.c,d.r);continue}if(d.tipo==="c"){let m=ni([["c",[d.raggio,d.lungo,12],[0,0,0],d.colore||xe.verde,{r:[0,0,90]}]]).pieni;i.push({g:m,m:new ye().makeTranslation(d.c[0]+d.lungo/2,d.c[1],d.c[2])});continue}if(d.tipo==="giro"){this.giro(d,n);continue}}let s=new E(0,1,0),a=new $e,o=new ti;for(let d of e.rotaie||[]){let m=d.n,f=g=>new E(d.p[g%m*3],d.p[g%m*3+1],d.p[g%m*3+2]),v=d.chiusa?m:m-1;for(let g=0;g<v;g+=2){let M=f(g),P=f(Math.min(g+2,d.chiusa?g+2:m-1)),b=P.clone().sub(M),x=b.length();x<.01||(a.setFromUnitVectors(s,b.normalize()),o.setFromQuaternion(a,"XYZ"),i.push({g:ni([["c",[ua,x+.04,6],[M.x,M.y,M.z],xe.giallo,{r:[o.x/xi,o.y/xi,o.z/xi],uno:!0}]]).pieni,m:null}))}for(let g=0;g<m;g+=12){let M=f(g);M.y>.35&&n(si([.085,M.y/2,.085],xe.notte,{netta:!0}),[M.x,M.y/2,M.z])}}for(let d of e.pattini||[])for(let m of[-1,1])n(si([.14,.09,.26],m<0?xe.rosa:xe.mare),[d.x+m*.24,1.09,d.z]),n(si([.1,.05,.22],xe.scuro),[d.x+m*.24,.96,d.z]);for(let d of e.spinte){let m=(d.x0+d.x1)/2,f=(d.z0+d.z1)/2,v=(d.x1-d.x0)/2,g=(d.z1-d.z0)/2;n(si([v,.03,g],xe.giallo,{netta:!0}),[m,.03,f]);for(let M=-1;M<=1;M++)for(let P of[-1,1])n(si([.12,.03,Math.min(v,1.4)*.55],xe.ruggine,{netta:!0}),[m+P*Math.min(v,1.4)*.36,.07,f+M*g*.6-.25],[0,P*45,0])}let l=[],A=11,c=()=>(A=A*16807%2147483647,A/2147483647),h=(d,m)=>!(d>-56&&d<-19&&m>-56&&m<-19)&&!(d>-52&&d<2&&m>40&&m<78)&&!(Math.abs(d-25)<8&&m>6&&m<46)&&!(m>-60&&m<-36&&d>12&&d<52)&&!(Math.abs(d+32)<6&&m>4&&m<42)&&!(d>-9&&d<12&&m>18&&m<38)&&Math.hypot(d,m-4)>9;for(let d=0;d<70;d++){let m=c()<.7,f=c(),v,g;if(m){let P=Math.floor(c()*4),b=c()*2-1;v=P<2?b*57:P===2?-57:57,g=P<2?P===0?-57:77:10+b*66}else v=c()*110-55,g=c()*130-55;if(!h(v,g))continue;let M=c();l.push([(M<.55,"kit"),M<.55?"albero":M<.75?"sasso":M<.9?"ciuffo":"funghi",[v,0,g],null,{r:[0,f*360,0]}])}let u=ni(l).pieni;u&&i.push({g:u,m:null}),this.fisso=new ke(jh(i),vi()),this.fisso.castShadow=!0,this.fisso.receiveShadow=!0,this.gruppo.add(this.fisso);let p=e.mondo.acqua;if(p){let d=p.x1-p.x0,m=p.z1-p.z0,f=Math.round(d),g=new jn(d,m,f,Math.round(m)).rotateX(-Math.PI/2).translate((p.x0+p.x1)/2,0,(p.z0+p.z1)/2).toNonIndexed();g.setAttribute("color",new Qe(new Float32Array(g.attributes.position.count*3),3)),g.setAttribute("normal",new Qe(new Float32Array(g.attributes.position.count*3).fill(0).map((M,P)=>P%3===1?1:0),3)),this.acqua=new ke(g,dh(.8)),this.acqua.frustumCulled=!1,this.toni=[new de(xe.notte),new de(xe.mare),new de(sa(xe.mare,xe.crema,.55))],this.acqua.renderOrder=2,this.gruppo.add(this.acqua),this.livello=p.livello}}giro(e,t){let s=e.raggio,a=e.c[1]+s,o=e.c[2],l=Math.atan2(e.sposta,Math.PI*2*s),A=(Math.PI*2-2*.06)/60,c=(s+e.spesso/2)*A*1.06;for(let h=0;h<60;h++){let u=.06+(h+.5)*A,p=e.c[0]+e.sposta*u/(Math.PI*2),d=s+e.spesso/2,m=a-Math.cos(u)*d,f=o+Math.sin(u)*d,v=[-u/xi,l/xi,0];t(si([e.largo/2,e.spesso/2,c/2],e.colore||xe.sabbia,{netta:!0}),[p,m,f],v);let g=Yh([p,m,f],v),M=h%2?xe.rosso:xe.crema;for(let P of[-1,1]){let b=new E(P*(e.largo/2+.12),e.spesso/2+.06,0).applyMatrix4(g);t(si([.17,.1,c/2],M,{netta:!0}),[b.x,b.y,b.z],v)}}}passo(e){if(!this.acqua)return;let t=this.acqua.geometry.attributes.position,i=this.acqua.geometry.attributes.color,[n,s,a]=this.toni,o=new de;for(let l=0;l<t.count;l++)t.setY(l,this.livello(t.getX(l),t.getZ(l),e));for(let l=0;l<t.count;l+=3){let A=(t.getY(l)+t.getY(l+1)+t.getY(l+2))/3+.62,c=Math.max(-1,Math.min(1,A/.42));c>=0?o.copy(s).lerp(a,c*c):o.copy(s).lerp(n,-c*.6);for(let h=0;h<3;h++)i.setXYZ(l+h,o.r,o.g,o.b)}t.needsUpdate=!0,i.needsUpdate=!0}},zf={quad:()=>[["b",[.86,.3,1.3],[0,-.32,0],xe.scuro],["b",[.6,.3,.5],[0,-.06,.26],xe.rosso],["b",[.56,.2,.74],[0,-.04,-.2],xe.scuro],["b",[1.3,.18,.62],[0,-.06,.66],xe.rosso],["b",[1.3,.18,.62],[0,-.06,-.66],xe.rosso],["b",[.9,.17,.3],[0,.12,.88],xe.ruggine],["b",[.22,.17,.12],[.28,-.02,.98],xe.crema],["b",[.22,.17,.12],[-.28,-.02,.98],xe.crema],["b",[.9,.17,.3],[0,.12,-.88],xe.ruggine]],moto:()=>[["b",[.34,.34,.6],[0,-.36,-.02],xe.scuro],["b",[.46,.3,.62],[0,-.06,.22],xe.verde],["b",[.34,.16,.86],[0,.04,-.34],xe.scuro],["b",[.36,.17,.56],[0,0,-.86],xe.verde,{r:[-14,0,0]}],["b",[.44,.4,.17],[0,0,.62],xe.giallo,{r:[-16,0,0]}],["c",[.09,.62,8],[.14,-.28,-.3],xe.pietra,{r:[70,0,0]}]],acqua:()=>[["b",[1,.36,1.9],[0,-.42,-.1],xe.mare],["b",[.86,.3,.7],[0,-.38,.92],xe.mare,{r:[16,0,0]}],["b",[1.04,.17,1.92],[0,-.3,-.1],xe.giallo],["b",[.44,.22,.86],[0,-.06,-.3],xe.scuro],["b",[.7,.3,.5],[0,-.1,.42],xe.crema],["b",[.86,.17,.36],[0,-.14,-.86],xe.notte]]};function Nr(r,e=!0){let t=ni(r),i=new tt;if(t.pieni){let n=new ke(t.pieni,vi());n.castShadow=e,i.add(n)}return i}function Uf(r,e){let t=[["c",[r,e,12],[e/2,0,0],xe.scuro,{r:[0,0,90]}],["c",[r*.5,e+.04,8],[(e+.04)/2,0,0],xe.pietra,{r:[0,0,90]}]];for(let i=0;i<8;i++){let n=i/8*Math.PI*2;t.push(["b",[e*.96,.1,.17],[0,Math.sin(n)*(r-.05),Math.cos(n)*(r-.05)],xe.notte,{r:[90-n/xi,0,0],netta:!0}])}return Nr(t)}var da=class{constructor(e){this.tipo=e,this.d=Pi[e],this.gruppo=new tt,this.corpo=Nr(zf[e]()),this.gruppo.add(this.corpo),this.manubrio=new tt;let t=e==="moto"?.5:e==="quad"?.46:.3;if(this.manubrio.position.set(0,e==="acqua"?.05:.16,t),this.manubrio.add(Nr([["c",[.08,.36,6],[0,-.08,0],xe.notte],["b",[e==="moto"?.8:.86,.12,.14],[0,.26,-.04],xe.scuro],["b",[.17,.14,.17],[.42,.25,-.04],xe.notte],["b",[.17,.14,.17],[-.42,.25,-.04],xe.notte]])),this.manubrio.rotation.x=-.35,this.corpo.add(this.manubrio),this.ruote=[],this.d.ruote){let i=e==="moto"?.24:.32;this.d.ruote.forEach((n,s)=>{let a=new tt;a.position.set(...n);let o=new tt,l=Uf(this.d.raggioRuota,i);o.add(l),a.add(o);let A=Nr([["c",[.085,1,6],[0,0,0],xe.rosso]],!1);A.position.set(n[0]*.75,-.08,n[2]*(e==="moto"?.95:.85)),this.corpo.add(a,A),this.ruote.push({perno:a,sterza:o,gira:l,molla:A,r:n,angolo:0,sterzante:this.d.sterzanti.includes(s)})})}this.ombra=kA(e==="moto"?.7:1.05),this.ombra.scale.set(e==="moto"?.6:.9,e==="acqua"?1.6:1.3,1),this.ombraG=new tt,this.ombraG.add(this.ombra)}aggiorna(e,t,i=null){let n=this.gruppo;n.position.set(...e.p),n.quaternion.set(...e.q);let s=e.molle||e.mo||[],a=e.sterzo??e.s??0,o=new E(0,0,1).applyQuaternion(n.quaternion),l=e.v[0]*o.x+e.v[1]*o.y+e.v[2]*o.z;this.manubrio.rotation.y=-a*this.d.sterzoMax*(this.d.ruote?1:.7);for(let A=0;A<this.ruote.length;A++){let c=this.ruote[A],h=s[A]||0,u=c.r[1]-this.d.lungaMolla+h;c.perno.position.y=u,c.angolo+=l*t/this.d.raggioRuota,c.gira.rotation.x=c.angolo,c.sterzante&&(c.sterza.rotation.y=-a*this.d.sterzoMax);let p=Math.max(.12,-.08-u);c.molla.scale.y=p,c.molla.position.y=u}if(i!==null){this.ombraG.visible=e.p[1]-i<6,this.ombraG.position.set(e.p[0],i+.02,e.p[2]),this.ombraG.rotation.y=Math.atan2(o.x,o.z);let A=Math.max(.3,1-(e.p[1]-i)/6);this.ombra.material.opacity=.72*A}}},qh={quad:[0,0,-.22],moto:[0,.05,-.32],acqua:[0,0,-.3]},Nf=["#ea323c","#ffa214","#5ac54f","#0098dc","#f68187","#edab50"].map(r=>new de(r)),fa=class{constructor(e,t=1500){let i=new cn(1,1).toNonIndexed(),n=i.attributes.position,s=new Float32Array(n.count*3);for(let a=0;a<n.count;a+=3){let o=(n.getX(a)+n.getX(a+1)+n.getX(a+2))/3,l=(n.getZ(a)+n.getZ(a+1)+n.getZ(a+2))/3,A=Math.floor((Math.atan2(l,o)+Math.PI)/(Math.PI/3))%2,c=(n.getY(a)+n.getY(a+1)+n.getY(a+2))/3,h=Math.abs(c)>.82?.55:A?1:.68;for(let u=0;u<3;u++)s.set([h,h,h],(a+u)*3)}i.setAttribute("color",new Qe(s,3)),i.setAttribute("strato",new Qe(new Float32Array(n.count),1)),this.mesh=new Kn(i,vi(),t),this.mesh.instanceMatrix.setUsage(mi),this.mesh.instanceColor=new sn(new Float32Array(t*3),3),this.mesh.count=0,this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,e.add(this.mesh),this.fatte=0,this.ferma=new Uint8Array(t),this.m=new ye,this.q=new $e,this.v=new E,this.s=new E}aggiorna(e){let{m:t,q:i,v:n,s}=this,a=!1;for(let o=this.fatte;o<e.n;o++)this.mesh.setColorAt(o,Nf[e.tinta[o]%6]);e.n>this.fatte&&(this.mesh.instanceColor.needsUpdate=!0,this.fatte=e.n,this.ferma.fill(0));for(let o=0;o<e.n;o++)e.dorme[o]&&this.ferma[o]||(this.ferma[o]=e.dorme[o],t.compose(n.set(e.x[o],e.y[o],e.z[o]),i.set(e.qx[o],e.qy[o],e.qz[o],e.qw[o]),s.setScalar(e.r[o])),this.mesh.setMatrixAt(o,t),a=!0);this.mesh.count=e.n,a&&(this.mesh.instanceMatrix.needsUpdate=!0)}},Of=["#ffa214","#5ac54f","#0098dc","#f68187","#92a1b9","#ea323c","#edab50","#c64524"].map(r=>new de(r)),ga=class{constructor(e,t=300){let i="#f9e6cf",n={"#e07438":i,"#edab50":i,"#f68187":"#f68187"},s=["gatto-corpo","gatto-testa","gatto-coda","gatto-mano-a","gatto-mano-b"].map(o=>({g:ir(o,n),m:null})),a=jh(s);this.mesh=new Kn(a,vi(),t),this.mesh.instanceMatrix.setUsage(mi),this.mesh.instanceColor=new sn(new Float32Array(t*3).fill(1),3),this.mesh.count=0,this.mesh.frustumCulled=!1,this.ombre=new Kn(new an(.375,8).rotateX(-Math.PI/2),new qt({color:"#134430",transparent:!0,opacity:.6,depthWrite:!1}),t),this.ombre.count=0,this.ombre.frustumCulled=!1,this.ombre.renderOrder=1,e.add(this.mesh,this.ombre),this.m=new ye,this.q=new $e,this.e=new ti,this.v=new E,this.s=new E(1,1,1),this.t=0,this.tinte=0}aggiorna(e,t,i=n=>e[n].p){let{m:n,q:s,e:a,v:o,s:l}=this;this.t+=t;let A=Math.min(e.length,this.mesh.instanceMatrix.count);if(A!==this.tinte){for(let c=0;c<A;c++)this.mesh.setColorAt(c,Of[(e[c].tinta??e[c].mente?.tinta??c)%8]);this.mesh.instanceColor.needsUpdate=!0,this.tinte=A}for(let c=0;c<A;c++){let h=e[c],u=i(c),p=Math.hypot(h.v[0],h.v[2]),d=p>.4&&h.aTerra,m=d?Math.abs(Math.sin(this.t*(p>4.6?16:11)+c))*.1:0;a.set(0,Math.atan2(h.dir[0],h.dir[1]),d?Math.sin(this.t*11+c)*.06:0),n.compose(o.set(u[0],u[1]+m,u[2]),s.setFromEuler(a),l.set(1,1,1)),this.mesh.setMatrixAt(c,n),n.compose(o.set(u[0],h.aTerra?u[1]+.015:-999,u[2]),s.identity(),l.set(1,1,1)),this.ombre.setMatrixAt(c,n)}this.mesh.count=A,this.ombre.count=A,this.mesh.instanceMatrix.needsUpdate=!0,this.ombre.instanceMatrix.needsUpdate=!0}};function Jh(){let r=[];for(let e of[-1,1])r.push(["b",[.24,.17,.46],[e*.2,-.02,.04],e<0?xe.rosa:xe.mare]),r.push(["b",[.18,.06,.5],[e*.2,-.1,.04],xe.scuro,{netta:!0}]);return Nr(r,!1)}var ma=["#ffa214","#ea323c","#5ac54f","#0098dc","#f68187","#edab50","#f9e6cf"].map(r=>new de(r)),Ff=`
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
}`,Qf=`
varying vec3 vColore;
varying float vVita;
varying float vForma;
void main() {
  vec2 q = abs(gl_PointCoord - 0.5);
  // 0 un quadratino, 1 un rombo
  if (vForma > 0.5 ? q.x + q.y > 0.5 : max(q.x, q.y) > 0.42) discard;
  gl_FragColor = vec4(vColore, 1.0);
  #include <colorspace_fragment>
}`,va=class{constructor(e,t=700){this.max=t,this.i=0;let i=new Ne;this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.mis=new Float32Array(t),this.vita=new Float32Array(t),this.forma=new Float32Array(t),this.peso=new Float32Array(t),this.attrito=new Float32Array(t),i.setAttribute("position",new Qe(this.pos,3).setUsage(mi)),i.setAttribute("colore",new Qe(this.col,3).setUsage(mi)),i.setAttribute("misura",new Qe(this.mis,1).setUsage(mi)),i.setAttribute("vita",new Qe(this.vita,1).setUsage(mi)),i.setAttribute("forma",new Qe(this.forma,1).setUsage(mi)),this.mat=new xt({vertexShader:Ff,fragmentShader:Qf,uniforms:{scala:{value:600}}}),this.punti=new Zn(i,this.mat),this.punti.frustumCulled=!1,this.punti.renderOrder=3,e.add(this.punti),this.vive=0}misura(e,t){this.mat.uniforms.scala.value=e/(2*Math.tan(t*Math.PI/360))}una(e,t,i,n,s,a=1,o=1,l=0){let A=this.i;this.i=(this.i+1)%this.max,this.pos.set(e,A*3),this.vel.set(t,A*3),this.col[A*3]=i.r,this.col[A*3+1]=i.g,this.col[A*3+2]=i.b,this.mis[A]=n,this.vita[A]=s,this.forma[A]=a,this.peso[A]=o,this.attrito[A]=l}scintille(e,t=[0,0,1]){for(let i=0;i<2;i++){let n=Math.random()*Math.PI*2,s=1.5+Math.random()*2.5;this.una(e,[-t[0]*s+Math.cos(n)*1.2,1.5+Math.random()*2.2,-t[2]*s+Math.sin(n)*1.2],ma[Math.random()<.7?0:6],.07+Math.random()*.05,.25+Math.random()*.2,0,1.6,0)}}polvere(e,t=1){let i=Math.round(6+t*6);for(let n=0;n<i;n++){let s=n/i*Math.PI*2,a=1.2+t*1.5;this.una([e[0]+Math.cos(s)*.3,e[1]+.05,e[2]+Math.sin(s)*.3],[Math.cos(s)*a,.4+Math.random()*.6,Math.sin(s)*a],ma[6],.16+Math.random()*.1,.35+Math.random()*.2,0,.2,3)}}stelle(e,t=1){let i=Math.min(40,10+t*6);for(let n=0;n<i;n++){let s=n/i*Math.PI*2,a=2.4+Math.random()*1.6;this.una([e[0],e[1]+1,e[2]],[Math.cos(s)*a,4+Math.random()*3+t,Math.sin(s)*a],ma[n%6],.2+Math.random()*.12,.8+Math.random()*.4,1,.9,1.2)}}schizzi(e){for(let t=0;t<14;t++){let i=Math.random()*Math.PI*2,n=1+Math.random()*2;this.una(e,[Math.cos(i)*n,3+Math.random()*3,Math.sin(i)*n],ma[3],.12+Math.random()*.08,.6,0,1,0)}}passo(e){let{pos:t,vel:i,vita:n,peso:s,attrito:a}=this,o=0;for(let A=0;A<this.max;A++){if(n[A]<=0)continue;o++,n[A]-=e;let c=1-Math.min(1,a[A]*e);i[A*3]*=c,i[A*3+2]*=c,i[A*3+1]=i[A*3+1]*c-14*s[A]*e,t[A*3]+=i[A*3]*e,t[A*3+1]+=i[A*3+1]*e,t[A*3+2]+=i[A*3+2]*e}if(this.vive=o,!o&&!this.cerano)return;this.cerano=o>0;let l=this.punti.geometry.attributes;l.position.needsUpdate=!0,l.vita.needsUpdate=!0,l.colore.needsUpdate=!0,l.misura.needsUpdate=!0,l.forma.needsUpdate=!0}};var Kh=180/Math.PI;function Ma(r,e,t,i,n,s){let a=Math.hypot(t-e,i),o=Math.atan2(i,t-e),l=i*Math.cos(o)+.3,A=[0,Math.cos(o),-Math.sin(o)],c=[r,i/2,(e+t)/2];return vt("b",{c:[c[0]-A[0]*l/2,c[1]-A[1]*l/2,c[2]-A[2]*l/2],h:[n/2,l/2,a/2],r:[-o*Kh,0,0],colore:s,nome:"rampa"})}function WA(){let r="#5ac54f",e="#e4b86a",t="#edab50",i="#92a1b9",n="#7ad66b",s=[vt("b",{c:[0,-2,30],h:[60,2,50],colore:r,nome:"prato"}),vt("b",{c:[20,-2,-40],h:[40,2,20],colore:r,nome:"prato"}),vt("b",{c:[-57.5,-2,-40],h:[2.5,2,20],colore:r,nome:"prato"}),vt("b",{c:[-37.5,-2,-57.5],h:[17.5,2,2.5],colore:r,nome:"prato"}),vt("b",{c:[-37.5,-3.5,-37.5],h:[17.5,.5,17.5],colore:e,nome:"fondo"})];{let h=Math.hypot(10,3),u=Math.atan2(3,10),p=[-Math.sin(u),Math.cos(u),0],d=[-25,-1.5,-40];s.push(vt("b",{c:[d[0]-p[0]*.5,d[1]-p[1]*.5,-40],h:[h/2,.5,6],r:[0,0,u*Kh],colore:e,nome:"spiaggia"}))}s.push(Ma(18,-46,-40,1.2,5,t),Ma(30,-48,-39,2.5,6,t),Ma(44,-52,-39,4,7,t));for(let h=0;h<9;h++)s.push(vt("c",{c:[-32,-.3,10+h*3.2],raggio:.65,lungo:7,colore:n,nome:"dosso"}));for(let h=0;h<6;h++)s.push(vt("b",{c:[-5,(h+1)*.2,22+h*1.2],h:[2.5,(h+1)*.2,.6],colore:i,nome:"gradino"}));s.push(vt("b",{c:[-5,1.2,31.6],h:[2.5,1.2,3],colore:i,nome:"ripiano"}));for(let[h,u]of[[4,22],[6,25],[8,28]])s.push(vt("b",{c:[h,.5,u],h:[.5,.5,.5],colore:n,nome:"blocco"}));s.push(vt("b",{c:[6,1.5,36],h:[3,1.5,.5],colore:i,nome:"muro"})),s.push(vt("giro",{c:[25,0,34],raggio:5,largo:4.6,spesso:.6,sposta:5.2,colore:t,nome:"giro"}));let a=[[-14,6],[-18,12],[-14,18]].map(([h,u])=>({x:h,z:u,r:1.55,y:.36,v:13.5}));for(let h of a)s.push(vt("b",{c:[h.x,.18,h.z],h:[1.6,.18,1.6],colore:"#ea323c",nome:"elastico"}));let o=(h,u,p)=>[h,u,p],l=[new Oi([o(-46,.6,46),o(-46,.6,74)],{nome:"dritta"}),new Oi([o(-39,.7,46),o(-35,.7,52),o(-39,.8,58),o(-35,.8,64),o(-39,.7,70),o(-36,.7,75)],{nome:"esse"}),new Oi([o(-28,.6,46),o(-28,1.5,52),o(-28,.8,58),o(-28,2.1,64),o(-28,.7,70),o(-28,.6,75)],{nome:"onde"}),new Oi(Array.from({length:31},(h,u)=>{let p=u/30*Math.PI*3,d=4.1-u/30*3.4;return o(-14+Math.cos(p)*5.5,d,60+Math.sin(p)*5.5)}),{nome:"spirale"}),new Oi(Array.from({length:12},(h,u)=>{let p=u/12*Math.PI*2;return o(-14+Math.cos(p)*2.6,.8,60+Math.sin(p)*2.6)}),{chiusa:!0,nome:"cerchio"})];s.push(Ma(-8.5,47,58.5,3.6,3,t));let A=[{x:-7,z:3},{x:-24,z:44}];for(let h of A)s.push(vt("b",{c:[h.x,.5,h.z],h:[.6,.5,.25],colore:"#424c6e",nome:"rastrelliera"}));return{mondo:new la(s,{x0:-55,x1:-20,z0:-55,z1:-20,livello:(h,u,p)=>-.62+.24*Math.sin(.32*h+1.4*p)+.17*Math.sin(.41*u-1.1*p+1.3)+.08*Math.sin(.9*(h-u)+2.3*p)}),spinte:[{x0:23,x1:27,z0:14,z1:18,verso:[0,0,1],v:24},{x0:23,x1:27,z0:22,z1:26,verso:[0,0,1],v:24},{x0:41,x1:47,z0:-57.5,z1:-55,verso:[0,0,1],v:20}],partenza:[0,0,6],elastici:a,rotaie:l,pattini:A,mezzi:[{tipo:"quad",p:[3,.6,2],yaw:0},{tipo:"moto",p:[7,.6,2],yaw:0},{tipo:"acqua",p:[-34,-.4,-40],yaw:Math.PI/2}],bordo:60}}var dn={gatto:1,quad:6,moto:4,acqua:5};function Fi(r){let[e,t,i]=r.p;return[[e,t+.34,i,.34],[e,t+.84,i,.34],[e,t+1.32,i,.34],[e,t+1.72,i,.3]]}function nu(r,e=!!r.chi){let t=r.d.sfere.map(([i,n,s,a])=>[...L.add(r.p,Oe.ruota(r.q,[i,n,s])),a]);return e&&t.push([...L.add(r.p,Oe.ruota(r.q,L.add(r.d.sedile,[0,.62,0]))),.34]),t}function Hf(r,e){let t=null;for(let i of r)for(let n of e){let s=[i[0]-n[0],i[1]-n[1],i[2]-n[2]],a=Math.hypot(s[0],s[1],s[2]),o=i[3]+n[3]-a;if(o<=0||t&&o<=t.pen)continue;let l=a>1e-6?L.scala(s,1/a):[1,0,0];t={n:l,pen:o,punto:L.madd(n,l,n[3]-o/2),a:i,b:n}}return t}function Or(r){return r.d?{tipo:"mezzo",x:r,palle:nu(r),peso:dn[r.tipo]}:{tipo:"gatto",x:r,palle:Fi(r),peso:dn.gatto}}var Zh=(r,e)=>r.tipo==="mezzo"?L.add(r.x.v,L.cross(r.x.w||[0,0,0],L.sub(e,r.x.p))):r.x.v;function $h(r,e,t){if(r.tipo==="mezzo"){r.x.p=L.madd(r.x.p,e,t);return}let i=Math.hypot(e[0],e[2])>.2?L.norm([e[0],0,e[2]]):[1,0,0];r.x.appoggiato={n:t>=0?i:L.scala(i,-1),t:.12},r.x.p[0]+=i[0]*t,r.x.p[2]+=i[2]*t,e[1]>.6&&r.x.v[1]<0&&(r.x.p[1]+=e[1]*t,r.x.v[1]=0)}function eu(r,e,t,i){if(r.tipo==="mezzo"){let s=r.x;s.v=L.madd(s.v,e,t);let a=Oe.ruota(Oe.coniugato(s.q),L.cross(L.sub(i,s.p),L.scala(e,t))),o=[a[0]/s.d.inerzia[0],a[1]/s.d.inerzia[1],a[2]/s.d.inerzia[2]];s.w=L.madd(s.w,Oe.ruota(s.q,o),.35);return}let n=r.x;n.v=L.madd(n.v,e,t),t>3&&(n.v[1]=Math.max(n.v[1],Math.min(6,t*.45)),n.aTerra=!1,n.botta=Math.min(.9,.25+t*.06))}function fn(r,e,t=!1){let i=Hf(r.palle,e.palle);if(!i)return null;let{n,pen:s,punto:a}=i;if(e.eco){let p=e.eco.lato;p&&p.resta>0&&L.dot(n,p.n)<.5&&(n=p.n,s=i.a[3]+i.b[3]-L.dot(L.sub(i.a,i.b),n),a=L.madd(i.b,n,i.b[3]-s/2)),e.eco.lato={n,resta:.4}}let o=e.peso/(r.peso+e.peso);$h(r,n,s*o),t&&e.x&&$h(e,n,-s*(1-o));let l=Zh(r,a),A=e.x?Zh(e,a):e.v,c=L.dot(L.sub(l,A),n);if(c>=0)return{forza:0};let u=-(1+(r.tipo===e.tipo?c>-9?0:.3:c>-3?0:.55))*c/(1/r.peso+1/e.peso);return eu(r,n,u/r.peso,a),t&&e.x&&eu(e,L.scala(n,-1),u/e.peso,a),e.eco&&e.eco.colpita(L.scala(n,-1),u/e.peso),{forza:Math.abs(c)}}var ru=r=>Math.round(r*1e3)/1e3,rr=r=>Math.round(r*100)/100;function su(r,e=null){return{k:"g",p:r.p.map(ru),v:r.v.map(rr),d:rr(Math.atan2(r.dir[0],r.dir[1])),f:(r.aTerra?1:0)|(r.nuota?2:0)|(r.corre?4:0)|(r.botta>0?8:0),m:e}}function Pa(r){return{k:"m",id:r.id,tipo:r.tipo,p:r.p.map(ru),v:r.v.map(rr),q:r.q.map(e=>Math.round(e*1e4)/1e4),w:r.w.map(rr),s:rr(r.sterzo),mo:r.molle.map(rr),chi:r.chi||null}}function xa(r,e){r.p=[...e.p],r.v=[...e.v],r.q=Oe.norm(e.q),r.w=[...e.w],r.sterzo=e.s,r.molle=[...e.mo],r.chi=e.chi}var tu=.12,Gf=3,iu=.35;function kf(r,e,t){let i=r[0]*e[0]+r[1]*e[1]+r[2]*e[2]+r[3]*e[3],n=i<0?(i=-i,e.map(A=>-A)):e;if(i>.9995)return Oe.norm(r.map((A,c)=>A+(n[c]-A)*t));let s=Math.acos(i),a=Math.sin(s),o=Math.sin(s*(1-t))/a,l=Math.sin(s*t)/a;return Oe.norm(r.map((A,c)=>A*o+n[c]*l))}var sr=class{constructor(e){this.vista=JSON.parse(JSON.stringify(e)),this.meta=JSON.parse(JSON.stringify(e)),this.vista.w??=[0,0,0],this.meta.w??=[0,0,0],this.errore=[0,0,0],this.senza=0,this.salti=0}ricevi(e,t=.05,i=null){let n=JSON.parse(JSON.stringify(e));if(this.eta=t,i!==null&&(this.tempo=i+t),this.colpo&&(i!==null&&this.colpo.t!==void 0?i<this.colpo.t:this.colpo.resta>0)){let l=L.dot(n.v,this.colpo.n)-this.colpo.vn;l<0&&(n.v=L.madd(n.v,this.colpo.n,-l))}let a=n.k==="g"?!(n.f&3):!1;n.p=L.madd(n.p,n.v,t),a&&(n.p[1]-=14*t*t/2,n.v=[n.v[0],n.v[1]-14*t,n.v[2]]),n.q&&n.w&&(n.q=Oe.integra(n.q,n.w,t)),n.w??=[0,0,0];let o=L.len(L.sub(this.vista.p,n.p))>Gf;this.errore=o?[0,0,0]:L.sub(this.vista.p,n.p),o&&this.salti++,this.qVista=o||!this.vista.q?null:this.vista.q,this.meta=n,this.senza=0,this.tScioglie=0,this.vista={...n,p:L.add(n.p,this.errore),q:this.qVista||n.q}}passo(e){let t=this.meta;this.senza+=e,this.colpo&&(this.colpo.resta-=e),this.tempo!==void 0&&(this.tempo+=e),this.lato&&(this.lato.resta-=e);let i=this.senza>iu?Math.max(0,1-(this.senza-iu)*4):1;t.p=L.madd(t.p,t.v,e*i),t.q&&t.w&&(t.q=Oe.integra(t.q,L.scala(t.w,i),e));let n=Math.exp(-e/tu);this.errore=L.scala(this.errore,n),this.tScioglie=Math.min(1,(this.tScioglie||0)+e/(tu*2));let s=t.q?this.qVista?kf(this.qVista,t.q,this.tScioglie):t.q:void 0;this.vista={...t,p:L.add(t.p,this.errore),v:L.scala(t.v,i),q:s},this.tScioglie>=1&&(this.qVista=null)}corpo(e){let t={...this.meta,v:this.vista.v};if(t.k==="g")return t.m?null:{tipo:"gatto",palle:Fi(t),peso:dn.gatto,v:t.v,eco:this};let i=e[t.tipo];return{tipo:"mezzo",palle:nu({d:i,p:t.p,q:t.q},!!t.chi),peso:dn[t.tipo],v:t.v,eco:this}}colpita(e,t){let i=this.meta.k==="g"?L.norm([e[0],0,e[2]]):e;this.colpo?.resta>0||t<.3||(this.meta.v=L.madd(this.meta.v,i,t),this.vista.v=L.madd(this.vista.v,i,t),this.colpo={n:i,resta:(this.eta??.1)*2+.12,vn:L.dot(this.meta.v,i),t:this.tempo})}};var gn={giro:{nome:"Giro",durata:.62,punti:300},vite:{nome:"Avvitamento",durata:.56,punti:250},superman:{nome:"Superman",durata:.6,punti:400},scivolata:{nome:"Scivolata",durata:0,punti:0},piroetta:{nome:"Piroetta",durata:.5,punti:200}},au=Object.keys(gn),ou=r=>r<=0?0:r>=1?1:r*r*(3-2*r),mn=class{constructor(){this.fatti=[],this.ora=null,this.coda=null,this.alterna=!1,this.totale=0,this.scivola=null}inizioScivolata(){this.scivola={t:0}}fineScivolata(){if(!this.scivola)return;let e=this.scivola.t;this.scivola=null,e>.15&&this.fatti.push({nome:"scivolata",segno:1,t:e,durata:0,punti:Math.round(100+e*160)})}premi(e={x:0,y:0},t=!0){if(!t)return!1;let i,n=1;Math.abs(e.y)>.45&&Math.abs(e.y)>=Math.abs(e.x)?(i="giro",n=e.y>0?1:-1):Math.abs(e.x)>.45?(i="vite",n=e.x>0?1:-1):(i=this.alterna?"piroetta":"superman",this.alterna=!this.alterna);let s={nome:i,segno:n,t:0,durata:gn[i].durata};return this.ora?(this.coda=s,!0):(this.ora=s,!0)}passo(e){this.scivola&&(this.scivola.t+=e);let t=this.ora;t&&(t.t+=e,t.t>=t.durata&&(this.fatti.push(t),this.ora=this.coda,this.coda=null))}atterra(){if(this.fineScivolata(),!this.ora&&!this.fatti.length)return null;let e=this.fatti.map(i=>gn[i.nome].nome),t;if(this.ora&&this.ora.t/this.ora.durata<.82)t={esito:"caduta",punti:0,combo:this.fatti.length,nomi:e};else{this.ora&&(this.fatti.push(this.ora),e.push(gn[this.ora.nome].nome));let i=0;this.fatti.forEach((s,a)=>{i+=(s.punti??gn[s.nome].punti)*(a&&this.fatti[a-1].nome===s.nome?.5:1)});let n=this.fatti.length;t={esito:"pulito",punti:Math.round(i*n),combo:n,nomi:e},this.totale+=t.punti}return this.fatti=[],this.ora=null,this.coda=null,t}inCorso(){let e=this.fatti.map(t=>gn[t.nome].nome);return this.ora&&e.push(gn[this.ora.nome].nome),this.scivola&&e.push("Scivolata"),{combo:e.length,nomi:e,scivola:!!this.scivola}}figura(){let e=this.ora;return e?{nome:e.nome,k:ou(e.t/e.durata),segno:e.segno}:null}foto(){let e=this.ora;return e?[au.indexOf(e.nome),Math.round(e.t/e.durata*100),e.segno]:null}static daFoto(e){return e?{nome:au[e[0]],k:ou(e[1]/100),segno:e[2]}:null}};function YA(r){if(!r)return null;let e=r.k*Math.PI*2*r.segno;return r.nome==="giro"?[[1,0,0],e]:r.nome==="vite"?[[0,0,1],-e]:r.nome==="piroetta"?[[0,1,0],e]:null}var Au=.62,Vf=.58,Xf=.35,Wf=.35,ai=1.25,ya=8192,wa=class{constructor(e,t=800){this.mondo=e,this.max=t,this.n=0;let i=()=>new Float64Array(t);this.x=i(),this.y=i(),this.z=i(),this.vx=i(),this.vy=i(),this.vz=i(),this.r=i(),this.im=i(),this.qx=i(),this.qy=i(),this.qz=i(),this.qw=i(),this.sonno=i(),this.dorme=new Uint8Array(t),this.tinta=new Uint8Array(t),this.testa=new Int32Array(ya),this.dopo=new Int32Array(t),this.svegli=0,this.urti=0,this.grigliaForme()}grigliaForme(){let t=this.mondo.forme;this.celle=new Map,this.L=8;for(let i of t){let n=i.raggioB+1.5;for(let s=Math.floor((i.c[0]-n)/8);s<=Math.floor((i.c[0]+n)/8);s++)for(let a=Math.floor((i.c[2]-n)/8);a<=Math.floor((i.c[2]+n)/8);a++){let o=s*4096+a;this.celle.has(o)||this.celle.set(o,[]),this.celle.get(o).push(i)}}this.vuota=[]}formeIn(e,t){return this.celle.get(Math.floor(e/this.L)*4096+Math.floor(t/this.L))||this.vuota}aggiungi(e,t=[0,0,0],i=.4,n=0){if(this.n>=this.max)return-1;let s=this.n++;return this.x[s]=e[0],this.y[s]=e[1],this.z[s]=e[2],this.vx[s]=t[0],this.vy[s]=t[1],this.vz[s]=t[2],this.r[s]=i,this.im[s]=1/(.25+i*i*i*1.6),this.qx[s]=0,this.qy[s]=0,this.qz[s]=0,this.qw[s]=1,this.sonno[s]=0,this.dorme[s]=0,this.tinta[s]=n,s}sveglia(e){this.dorme[e]=0,this.sonno[e]=0}cella(e,t,i){return(Math.floor(e/ai)*73856093^Math.floor(t/ai)*19349663^Math.floor(i/ai)*83492791)&ya-1}passo(e,t=[]){let{x:i,y:n,z:s,vx:a,vy:o,vz:l,r:A,im:c,dorme:h}=this,u=this.mondo,p=this.n,d=0;this.urti=0;for(let v=0;v<p;v++){if(h[v])continue;d++,o[v]-=14*e;let g=u.pelo(i[v],s[v]);if(g!==null&&n[v]-A[v]<g){let M=Math.min(1,(g-(n[v]-A[v]))/(2*A[v]));o[v]+=14*2.6*M*e;let P=1-Math.min(1,1.8*M*e);a[v]*=P,o[v]*=P,l[v]*=P}i[v]+=a[v]*e,n[v]+=o[v]*e,s[v]+=l[v]*e}for(let v=0;v<p;v++){if(h[v])continue;let g=this.formeIn(i[v],s[v]);if(!g.length)continue;let M=[i[v],n[v],s[v]],P=u.distanza(M,g);if(P>=A[v])continue;let b=u.normale(M,g),x=A[v]-P;i[v]+=b[0]*x,n[v]+=b[1]*x,s[v]+=b[2]*x,this.rimbalza(v,b,0,0,0,Vf,e,!0)}let m=this.testa.fill(-1),f=this.dopo;for(let v=0;v<p;v++){let g=this.cella(i[v],n[v],s[v]);f[v]=m[g],m[g]=v}for(let v=0;v<p;v++){if(h[v])continue;let g=Math.floor(i[v]/ai),M=Math.floor(n[v]/ai),P=Math.floor(s[v]/ai);for(let b=-1;b<=1;b++)for(let x=-1;x<=1;x++)for(let _=-1;_<=1;_++){let I=m[((g+b)*73856093^(M+x)*19349663^(P+_)*83492791)&ya-1];for(;I!==-1;I=f[I]){if(I===v||I<v&&!h[I])continue;let C=i[I]-i[v],R=n[I]-n[v],H=s[I]-s[v],S=A[v]+A[I],N=C*C+R*R+H*H;if(N>=S*S||N<1e-12)continue;let F=Math.sqrt(N),k=C/F,Ae=R/F,Z=H/F,G=S-F,$=h[v]?0:c[v],Q=h[I]?0:c[I],j=$+Q;if(j===0)continue;i[v]-=k*G*$/j,n[v]-=Ae*G*$/j,s[v]-=Z*G*$/j,i[I]+=k*G*Q/j,n[I]+=Ae*G*Q/j,s[I]+=Z*G*Q/j;let le=(a[I]-a[v])*k+(o[I]-o[v])*Ae+(l[I]-l[v])*Z;if(le>=0)continue;let w=-(1+(le<-.8?Au:0))*le/(c[v]+c[I]);(w*c[v]>.6||w*c[I]>.6)&&(h[v]&&this.sveglia(v),h[I]&&this.sveglia(I));let D=h[v]?0:w*c[v],O=h[I]?0:w*c[I];a[v]-=k*D,o[v]-=Ae*D,l[v]-=Z*D,a[I]+=k*O,o[I]+=Ae*O,l[I]+=Z*O,this.urti++}}}for(let v of t){if(!v)continue;let g=v.v||[0,0,0],M=v.peso||1,P=0,b=0,x=0;for(let _ of v.palle){let I=Math.floor(_[0]/ai),C=Math.floor(_[1]/ai),R=Math.floor(_[2]/ai),H=Math.ceil((_[3]+.6)/ai);for(let S=-H;S<=H;S++)for(let N=-H;N<=H;N++)for(let F=-H;F<=H;F++){let k=m[((I+S)*73856093^(C+N)*19349663^(R+F)*83492791)&ya-1];for(;k!==-1;k=f[k]){let Ae=i[k]-_[0],Z=n[k]-_[1],G=s[k]-_[2],$=_[3]+A[k],Q=Ae*Ae+Z*Z+G*G;if(Q>=$*$||Q<1e-12)continue;let j=Math.sqrt(Q),le=Ae/j,w=Z/j,D=G/j;h[k]&&this.sveglia(k);let O=$-j;i[k]+=le*O,n[k]+=w*O,s[k]+=D*O;let K=(a[k]-g[0])*le+(o[k]-g[1])*w+(l[k]-g[2])*D;if(K>=0)continue;let T=-(1+Au)*K/(c[k]+1/M);a[k]+=le*T*c[k],o[k]+=w*T*c[k]+Math.min(3,-K*.25),l[k]+=D*T*c[k],P-=le*T/M,b-=w*T/M,x-=D*T/M,this.urti++}}}if(v.x&&(P||b||x)){let _=v.x.v;_[0]+=P,_[1]+=v.tipo==="gatto"?0:b,_[2]+=x}}for(let v=0;v<p;v++){if(h[v])continue;let g=a[v]*a[v]+o[v]*o[v]+l[v]*l[v],M=l[v],P=-a[v],b=Math.hypot(M,P);b>1e-4&&this.gira(v,M/b,0,P/b,b*e/A[v]),this.sonno[v]=g<.09?this.sonno[v]+e:0,this.sonno[v]>.5&&(h[v]=1,a[v]=o[v]=l[v]=0),n[v]<-40&&(n[v]=30,i[v]=(Math.random()-.5)*40,s[v]=10+(Math.random()-.5)*40,a[v]=o[v]=l[v]=0)}this.svegli=d}rimbalza(e,t,i,n,s,a,o,l){let{vx:A,vy:c,vz:h}=this,u=A[e]-i,p=c[e]-n,d=h[e]-s,m=u*t[0]+p*t[1]+d*t[2];if(m>=0)return;let f=m>-1.2?0:a,v=u-m*t[0],g=p-m*t[1],M=d-m*t[2],P=Math.hypot(v,g,M),x=(1-(P>1e-6?Math.min(1,Xf*(1+f)*-m/P):0))*(l?1-Math.min(1,Wf*o):1);A[e]=i+v*x-t[0]*m*f,c[e]=n+g*x-t[1]*m*f,h[e]=s+M*x-t[2]*m*f}gira(e,t,i,n,s){let a=Math.sin(s/2),o=Math.cos(s/2),l=t*a,A=i*a,c=n*a,h=this.qx[e],u=this.qy[e],p=this.qz[e],d=this.qw[e],m=o*h+l*d+A*p-c*u,f=o*u-l*p+A*d+c*h,v=o*p+l*u-A*h+c*d,g=o*d-l*h-A*u-c*p,M=Math.hypot(m,f,v,g)||1;this.qx[e]=m/M,this.qy[e]=f/M,this.qz[e]=v/M,this.qw[e]=g/M}foto(e=!1){let t=[];for(let i=0;i<this.n;i++)!e&&this.dorme[i]||t.push(i,Math.round(this.x[i]*100),Math.round(this.y[i]*100),Math.round(this.z[i]*100),Math.round(this.vx[i]*100),Math.round(this.vy[i]*100),Math.round(this.vz[i]*100));return t}correggi(e,t=.05,i=!1){for(let n=0;n<e.length;n+=7){let s=e[n];if(s>=this.n)continue;let a=e[n+4]/100,o=e[n+5]/100,l=e[n+6]/100,A=e[n+1]/100+a*t,c=e[n+2]/100+o*t,h=e[n+3]/100+l*t,u=A-this.x[s],p=c-this.y[s],d=h-this.z[s],m=u*u+p*p+d*d;if(i&&a*a+o*o+l*l<.01){this.x[s]=A,this.y[s]=c,this.z[s]=h,this.vx[s]=this.vy[s]=this.vz[s]=0,this.dorme[s]=1;continue}let f=m>4?1:.35;this.x[s]+=u*f,this.y[s]+=p*f,this.z[s]+=d*f,(m>4e-4||a*a+o*o+l*l>.04)&&(this.vx[s]=a,this.vy[s]=o,this.vz[s]=l,this.sveglia(s))}}};var Da=4,_a=class{constructor(e,t=30,i=Math.random){this.caso=i,this.gatti=[];for(let n=0;n<t;n++)this.aggiungi(this.posto())}posto(){let e=this.caso;return[6+e()*28,.2,46+e()*28]}aggiungi(e){let t=ca(e);return t.mente={voglio:[0,0],fino:0,corri:!1,salta:0,tinta:this.gatti.length%8},t.dt=0,this.gatti.push(t),t}passo(e,t,i,n={}){let s=this.gatti,a=s.length;for(let o=t%Da;o<a;o+=Da){let l=s[o],A=l.mente,c=e*Da;A.fino-=c,A.fino<=0&&this.pensa(l,n);for(let u of n.corpi||[]){if(u.tipo!=="mezzo")continue;let p=u.palle[0],d=u.v||u.x&&u.x.v||[0,0,0],m=l.p[0]-p[0],f=l.p[2]-p[2],v=Math.hypot(m,f);if(v<7&&Math.hypot(d[0],d[2])>5&&d[0]*m+d[2]*f>0){let g=Math.sign(d[0]*f-d[2]*m)||1;A.voglio=[-d[2]*g,d[0]*g].map(M=>M/(Math.hypot(d[0],d[2])||1)),A.corri=!0,A.fino=.8,v<3.5&&(A.salta=1)}}let h={x:A.voglio[0],z:A.voglio[1],corri:A.corri,salta:A.salta>0};A.salta=0,ha(l,h,c,i),l.p[1]<-25&&(l.p=this.posto(),l.v=[0,0,0])}if(t%Da===0){let o=s.map(l=>({tipo:"gatto",x:l,palle:Fi(l),peso:dn.gatto}));for(let l=0;l<a;l++){for(let A=l+1;A<a;A++){let c=s[l].p,h=s[A].p;Math.abs(c[0]-h[0])>.8||Math.abs(c[2]-h[2])>.8||fn(o[l],o[A],!0)&&(o[l].palle=Fi(s[l]),o[A].palle=Fi(s[A]))}for(let A of n.corpi||[]){let c=A.palle[0],h=s[l].p;Math.abs(h[0]-c[0])>3||Math.abs(h[2]-c[2])>3||fn(o[l],A,!!A.x)&&(o[l].palle=Fi(s[l]))}}}}pensa(e,t){let i=e.mente,n=this.caso();i.corri=!1,i.fino=1+this.caso()*1.5;let s=t.palle;if(s&&s.n&&n<.45){let a=-1,o=25;for(let l=0;l<6;l++){let A=Math.floor(this.caso()*s.n),c=Math.hypot(s.x[A]-e.p[0],s.z[A]-e.p[2]);c<o&&(o=c,a=A)}if(a>=0){let l=s.x[a]-e.p[0],A=s.z[a]-e.p[2],c=Math.hypot(l,A)||1;i.voglio=[l/c,A/c],i.corri=c>3,i.fino=Math.min(2.5,c/5+.4);return}}if(n<.75){let a=this.caso()*Math.PI*2,o=.5+this.caso()*.5,l=Math.hypot(e.p[0]-20,e.p[2]-60)>22;i.voglio=l?L.norm([20-e.p[0],0,60-e.p[2]]).filter((A,c)=>c!==1).map(A=>A*o):[Math.sin(a)*o,Math.cos(a)*o],this.caso()<.15&&(i.salta=1);return}i.voglio=[0,0],this.caso()<.3&&(i.salta=1)}foto(){let e=[];for(let t of this.gatti)e.push(Math.round(t.p[0]*100),Math.round(t.p[1]*100),Math.round(t.p[2]*100),Math.round(t.v[0]*100),Math.round(t.v[1]*100),Math.round(t.v[2]*100),Math.round(Math.atan2(t.dir[0],t.dir[1])*100),(t.aTerra?1:0)|(t.nuota?2:0)|t.mente.tinta<<2);return e}},Ea=class{constructor(){this.gatti=[]}ricevi(e,t=.05){let i=e.length/8;for(;this.gatti.length<i;)this.gatti.push({p:[0,0,0],v:[0,0,0],dir:[0,1],aTerra:!0,nuota:!1,tinta:0,errore:[0,0,0],nuovo:!0});this.gatti.length=i;for(let n=0;n<i;n++){let s=this.gatti[n],a=n*8,o=[e[a+3]/100,e[a+4]/100,e[a+5]/100],l=[e[a]/100+o[0]*t,e[a+1]/100+(e[a+7]&1?0:o[1]*t),e[a+2]/100+o[2]*t],A=L.sub(s.p,l);s.errore=s.nuovo||L.len(A)>3?[0,0,0]:L.add(s.errore,A),s.p=l,s.v=o,s.nuovo=!1;let c=e[a+6]/100;s.dir=[Math.sin(c),Math.cos(c)],s.aTerra=!!(e[a+7]&1),s.nuota=!!(e[a+7]&2),s.tinta=e[a+7]>>2}}passo(e){let t=Math.exp(-e/.12);for(let i of this.gatti)i.p[0]+=i.v[0]*e,i.p[2]+=i.v[2]*e,i.aTerra||(i.p[1]+=i.v[1]*e,i.v[1]-=14*e),i.errore[0]*=t,i.errore[1]*=t,i.errore[2]*=t}vista(e){let t=this.gatti[e];return[t.p[0]+t.errore[0],t.p[1]+t.errore[1],t.p[2]+t.errore[2]]}corpi(){return this.gatti.map(e=>({tipo:"gatto",palle:Fi(e),peso:dn.gatto,v:e.v}))}};var vn=1/120,lu=1/20,cu=-25,Yf=2.4,Fr=class{constructor(e,t,{tiene:i=!1,capo:n=null,manda:s=()=>{},partenza:a=null,palle:o=1500,folla:l=0,seme:A=7}={}){if(this.id=e,this.arena=t,this.mondo=t.mondo,this.tiene=i,this.capo=i?e:n,this.manda=s,this.partenza=a||t.partenza,this.corpo=ca(this.partenza),this.sopra=null,this.mezzi=new Map,this.casa=new Map(t.mezzi.map(h=>[h.tipo,h])),i)for(let h of t.mezzi)this.mezzi.set(h.tipo,this.nuovo(h.tipo,h.p,h.yaw));this.eco=new Map,this.dove=new Map,this.ultima=new Map,this.t=0,this.scarto=0,this.tFoto=0,this.eventi=[],this.chiesto=null,this.usaPrima=!1,this.trucchi=new mn,this.inAria=!1,this.truccoPrima=!1;let c=A;this.caso=()=>(c=c*16807%2147483647,c/2147483647),this.tick=0,this.nFoto=0,this.palle=o?new wa(this.mondo,o):null,i?this.folla=new _a(this.mondo,l,this.caso):this.follaEco=new Ea}nuovo(e,t,i){let n=Gh(e,t,i);return n.id=e,n.chi=null,n}get ora(){return this.t+this.scarto}passo(e={}){let t=vn,i=this.corpo,n=this.arena;this.t+=t,this.mondo.t=this.ora,e.usa&&!this.usaPrima&&this.usa(),this.usaPrima=!!e.usa,this.tick++;let s=this.sopra&&this.mezzi.get(this.sopra);if(e.trucco&&!this.truccoPrima){let A=s?!s.contatti&&!s.inAcqua&&s.aria>.08:!i.aTerra&&!i.nuota&&!(i.botta>0)&&!i.rotaia;this.trucchi.premi(e.asse,A)&&this.eventi.push({tipo:"trucco"})}if(this.truccoPrima=!!e.trucco,this.trucchi.passo(t),!this.sopra){let A=i.rotaia?Wh(i,e,t,n.rotaie):ha(i,e,t,this.mondo);(A.fine||A.salto&&!i.rotaia&&this.trucchi.scivola)&&(this.trucchi.fineScivolata(),this.eventi.push({tipo:"stacco",p:[...i.p]})),!i.rotaia&&n.rotaie&&Xh(i,n.rotaie)&&(this.trucchi.inizioScivolata(),this.eventi.push({tipo:"aggancio",p:[...i.p]})),A.atterrato&&this.eventi.push({tipo:"atterrato",chi:"gatto",p:[...i.p]}),A.salto&&this.eventi.push({tipo:"salto",chi:"gatto"});for(let h of n.elastici||[])i.aTerra&&Math.hypot(i.p[0]-h.x,i.p[2]-h.z)<h.r&&Math.abs(i.p[1]-h.y)<.3&&(i.v[1]=e.salta?h.v*1.22:h.v,i.aTerra=!1,i.salto=!1,i.p[1]+=.02,this.eventi.push({tipo:"elastico",p:[...i.p]}));let c=!i.aTerra&&!i.nuota;this.inAria&&!c&&this.atterra(null),this.inAria=c,A.tuffo&&this.eventi.push({tipo:"tuffo"});for(let h of n.spinte)if(hu(h,i.p)&&i.aTerra){let u=L.dot(i.v,h.verso),p=h.v*.5;u<p&&(i.v=L.madd(i.v,h.verso,p-u),i.v[1]=4,i.aTerra=!1,i.botta=.5,this.eventi.push({tipo:"spinta"}))}i.p[1]<cu&&this.ricompari()}for(let A of this.mezzi.values()){let c=A.id===this.sopra,h=c?e.mezzo?{...e.mezzo,salta:e.salta}:kh(A,e,e.asse):{gas:0,sterzo:0};c&&e.raddrizza&&!this.raddrizzaPrima&&XA(A);let u=A.aria,p=Vh(A,h,t,this.mondo);c&&(p.atterrato&&this.eventi.push({tipo:"atterrato",chi:A.tipo,aria:p.atterrato.aria,dritto:p.atterrato.dritto,p:[...A.p]}),u>0&&A.aria===0&&this.atterra(A),p.capottato&&this.eventi.push({tipo:"capottato"}),p.salto&&this.eventi.push({tipo:"salto",chi:A.tipo}));let d=A.contatti?n.spinte.find(m=>hu(m,A.p)):null;if(d){let m=L.dot(A.v,d.verso);if(m<d.v){let f=L.sub(A.v,L.scala(d.verso,m));f[1]=0,A.v=L.add(L.madd(A.v,d.verso,d.v-m),L.scala(f,-.7))}c&&!A.spinto&&this.eventi.push({tipo:"spinta"})}A.spinto=!!d;for(let m of n.elastici||[])A.contatti&&Math.hypot(A.p[0]-m.x,A.p[2]-m.z)<m.r&&A.v[1]<m.v*.8&&(A.v[1]=m.v*.8,c&&this.eventi.push({tipo:"elastico",p:[...A.p]}));if(A.p[1]<cu)if(c){this.eventi.push({tipo:"ricompari"});let m=this.partenza;this.metti(A,[m[0]+2,m[1]+1,m[2]],0)}else{let m=this.casa.get(A.tipo);this.metti(A,[m.p[0],m.p[1]+1,m.p[2]],m.yaw)}}this.raddrizzaPrima=!!e.raddrizza;let a=this.sopra&&this.mezzi.get(this.sopra);if(a){i.p=L.add(a.p,Oe.ruota(a.q,a.d.sedile)),i.v=[...a.v];let A=ri(a).avanti;i.dir=L.len([A[0],0,A[2]])>.1?[A[0],A[2]].map(c=>c/Math.hypot(A[0],A[2])):i.dir,i.aTerra=a.contatti>0,i.nuota=!1}for(let A of this.eco.values())A.passo(t);let o=[...this.mezzi.values()].map(Or);this.sopra||o.unshift(Or(i));for(let A=0;A<o.length;A++){for(let c=A+1;c<o.length;c++){let h=fn(o[A],o[c],!0);h&&(o[A].palle=ba(o[A]),o[c].palle=ba(o[c]),this.colpo(h,o[A],o[c]))}for(let c of this.eco.values()){let h=c.corpo(Pi);if(!h)continue;let u=fn(o[A],h);u&&(o[A].palle=ba(o[A]),this.colpo(u,o[A],h))}}let l=[...this.eco.values()].map(A=>A.corpo(Pi)).filter(Boolean);if(this.folla&&this.folla.passo(t,this.tick,this.mondo,{palle:this.palle,corpi:[...o,...l]}),this.follaEco){this.follaEco.passo(t);let A=o[0];if(A&&A.tipo==="gatto")for(let c of this.follaEco.corpi()){let h=c.palle[0];Math.abs(h[0]-i.p[0])<1.2&&Math.abs(h[2]-i.p[2])<1.2&&fn(A,c)&&(A.palle=ba(A))}}if(this.palle&&this.palle.n){let A=this.folla?this.folla.gatti.map(c=>Or(c)):this.follaEco.corpi();this.palle.passo(t,[...o,...l,...A])}if(this.tFoto+=t,this.tFoto>=lu-1e-9){this.tFoto-=lu,this.nFoto++;let A=su(i,this.sopra),c=[...this.mezzi.values()].map(Pa),h=this.trucchi.foto();if(i.pattini&&(A.pt=1),i.rotaia&&(A.ro=1),h)if(this.sopra){let p=c.find(d=>d.id===this.sopra);p&&(p.tr=h)}else A.tr=h;let u={tipo:"foto",da:this.id,t:this.ora,cose:[A,...c]};if(this.tiene){if(this.folla.gatti.length&&(u.fo=this.folla.foto()),this.palle&&this.palle.n&&this.nFoto%2===0){let p=this.nFoto%40===0;u.pa=this.palle.foto(p),p&&(u.pk=1)}this.palle&&(u.np=this.palle.n)}this.manda(u)}}colpo(e,t,i){if(e.forza<2.5)return;(t.x===this.corpo||t.tipo==="mezzo"&&t.x.id===this.sopra||i.x===this.corpo||i.tipo==="mezzo"&&i.x?.id===this.sopra)&&this.eventi.push({tipo:"botta",forza:e.forza})}atterra(e){let t=this.trucchi.atterra();if(!t)return;let i=this.corpo;if(this.eventi.push({tipo:"trucchi",...t,p:e?[...e.p]:[...i.p]}),t.esito==="pulito"){if(e){let n=ri(e).avanti,s=L.norm([n[0],0,n[2]]);e.v=L.madd(e.v,s,Math.min(6,2+t.combo*1.5))}else if(i.pattini){let n=Math.hypot(i.v[0],i.v[2])||1;i.v[0]+=i.v[0]/n*2.5,i.v[2]+=i.v[2]/n*2.5}return}e?(e.v=L.scala(e.v,.35),e.w=L.add(e.w,[(this.caso()-.5)*6,(this.caso()-.5)*4,(this.caso()-.5)*6])):(i.v=[i.v[0]*.3,3,i.v[2]*.3],i.aTerra=!1,i.botta=.8,i.rotaia=null)}pioggia(e,t=300){if(this.palle){if(!this.tiene){this.manda({tipo:"pioggia",da:this.id,a:this.capo,p:e,n:t});return}for(let i=0;i<t;i++){let n=this.caso()*Math.PI*2,s=Math.sqrt(this.caso())*9;this.nuovaPalla([e[0]+Math.cos(n)*s,e[1]+8+this.caso()*22,e[2]+Math.sin(n)*s],[0,-this.caso()*4,0])}this.eventi.push({tipo:"pioggia",n:t})}}nuovaPalla(e,t){let i=this.palle.n;return this.palle.aggiungi(e,t,.3+i*2654435761%1e3/1e3*.28,i%6)}gente(e=10){if(!this.tiene){this.manda({tipo:"gente",da:this.id,a:this.capo,n:e});return}for(let t=0;t<e;t++)this.folla.aggiungi(this.folla.posto())}metti(e,t,i){e.p=[...t],e.v=[0,0,0],e.w=[0,0,0],e.q=Oe.asse([0,1,0],i),e.ribaltato=0}ricompari(){let e=this.corpo;e.p=[...this.partenza],e.v=[0,0,0],e.botta=0,e.aTerra=!1,this.eventi.push({tipo:"ricompari"})}usa(){if(this.sopra){this.scendi();return}let e=this.corpo,t=(this.arena.pattini||[]).find(s=>Math.hypot(s.x-e.p[0],s.z-e.p[2])<2.2),i=null,n=(s,a,o,l,A,c)=>{if(!A)return;let h=L.add(a,Oe.ruota(o,Pi[l].sedile)),u=Math.hypot(h[0]-e.p[0],h[1]-(e.p[1]+.5),h[2]-e.p[2]);u<Yf&&(!i||u<i.d)&&(i={id:s,d:u,mio:c})};for(let s of this.mezzi.values())n(s.id,s.p,s.q,s.tipo,!s.chi,!0);for(let[s,a]of this.eco)s.startsWith("m:")&&n(a.vista.id,a.vista.p,a.vista.q,a.vista.tipo,!a.vista.chi,!1);if(t&&!e.rotaia&&(!i||Math.hypot(t.x-e.p[0],t.z-e.p[2])<i.d)){e.pattini=!e.pattini,this.eventi.push({tipo:e.pattini?"pattini":"scarpe"});return}if(i){if(i.mio){this.sali(this.mezzi.get(i.id));return}this.chiesto||(this.chiesto=i.id,this.manda({tipo:"sali",da:this.id,a:this.dove.get(i.id)||this.capo,id:i.id}))}}sali(e){e.chi=this.id,this.sopra=e.id,this.chiesto=null,this.corpo.botta=0,this.eventi.push({tipo:"salgo",id:e.id})}scendi(){let e=this.mezzi.get(this.sopra),t=this.corpo;if(!e){this.sopra=null;return}let{destra:i,avanti:n}=ri(e),s=[L.scala(i,-1.35),L.scala(i,1.35),L.scala(n,-1.6),[0,1.2,0]],a=null;for(let o of s){let l=L.add(e.p,[o[0],o[1]+.1,o[2]]);if([.4,.9,1.4].every(c=>this.mondo.distanza([l[0],l[1]+c,l[2]])>Hh.RAGGIO+.05)){a=l;break}}if(t.p=a||L.add(e.p,[0,1.6,0]),t.v=[e.v[0]*.6,Math.max(0,e.v[1])+2.5,e.v[2]*.6],t.aTerra=!1,t.botta=L.len(e.v)>4?.4:0,e.chi=null,this.sopra=null,this.eventi.push({tipo:"scendo",id:e.id}),!this.tiene){let o=Pa(e);this.mezzi.delete(e.id),this.eco.set("m:"+e.id,new sr(o)),this.dove.set(e.id,this.capo),this.manda({tipo:"rendo",da:this.id,a:this.capo,id:e.id,foto:o})}}ricevi(e,t=.05){if(!(e.a&&e.a!==this.id)){if(e.tipo==="foto"){if((this.ultima.get(e.da)??-1/0)>=e.t)return;if(this.ultima.set(e.da,e.t),e.da===this.capo&&!this.tiene){let n=e.t+t-this.t;this.scarto=this.scartoPreso?this.scarto+(n-this.scarto)*.1:n,this.scartoPreso=!0}let i=this.tiene||this.scartoPreso?Math.min(.5,Math.max(0,this.ora-e.t)):t;if(e.fo&&this.follaEco&&this.follaEco.ricevi(e.fo,i),this.palle&&e.np!==void 0&&!this.tiene)for(;this.palle.n<e.np;)this.nuovaPalla([0,-100,0],[0,0,0]);e.pa&&this.palle&&!this.tiene&&this.palle.correggi(e.pa,i,!!e.pk);for(let n of e.cose){if(n.k==="m"&&this.mezzi.has(n.id))continue;let s=n.k==="g"?"g:"+e.da:"m:"+n.id;n.k==="m"&&this.dove.set(n.id,e.da);let a=this.eco.get(s);if(a)a.ricevi(n,i,e.t);else{let o=new sr(n);o.ricevi(n,i,e.t),this.eco.set(s,o)}}return}if(e.tipo==="sali"){let i=this.mezzi.get(e.id);if(!i||i.chi){this.manda({tipo:"no",da:this.id,a:e.da,id:e.id});return}i.chi=e.da;let n=Pa(i);this.mezzi.delete(i.id),this.eco.set("m:"+i.id,new sr(n)),this.dove.set(i.id,e.da),this.manda({tipo:"tuo",da:this.id,a:e.da,id:i.id,foto:n});return}if(e.tipo==="tuo"){let i=e.foto,n=this.nuovo(i.tipo,i.p,0);xa(n,i),n.p=L.madd(n.p,n.v,t),this.mezzi.set(n.id,n),this.eco.delete("m:"+n.id),this.dove.set(n.id,this.id),this.chiesto===n.id&&!this.sopra?this.sali(n):(n.chi=null,this.chiesto=null);return}if(e.tipo==="no"){this.chiesto=null;return}if(e.tipo==="pioggia"&&this.tiene){this.pioggia(e.p,e.n);return}if(e.tipo==="gente"&&this.tiene){this.gente(e.n);return}if(e.tipo==="rendo"&&this.tiene){let i=e.foto,n=this.nuovo(i.tipo,i.p,0);xa(n,i),n.p=L.madd(n.p,n.v,t),n.chi=null,this.mezzi.set(n.id,n),this.eco.delete("m:"+n.id),this.dove.set(n.id,this.id);return}if(e.tipo==="via"){this.eco.delete("g:"+e.da);for(let[i,n]of[...this.eco])if(i.startsWith("m:")&&this.dove.get(n.vista.id)===e.da&&(this.eco.delete(i),this.tiene)){let s=this.nuovo(n.vista.tipo,n.vista.p,0);xa(s,{...n.vista,chi:null,mo:n.vista.mo||[]}),s.molle=(s.d.ruote||[]).map(()=>0),this.mezzi.set(s.id,s),this.dove.set(s.id,this.id)}}}}},hu=(r,e)=>e[0]>r.x0&&e[0]<r.x1&&e[2]>r.z0&&e[2]<r.z1,ba=r=>Or(r.x).palle;var Ba=class{constructor({ritardo:e=.09,balla:t=.04,perde:i=.08,seme:n=7}={}){this.ritardo=e,this.balla=t,this.perde=i,this.s=n>>>0||1,this.t=0,this.code=[],this.chi=new Map,this.mandati=0,this.persi=0,this.affidabili=new Map}caso(){let e=this.s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}collega(e){this.chi.set(e.id,e),e.manda=t=>this.manda(e.id,t)}manda(e,t){let i=JSON.stringify(t);for(let n of this.chi.keys()){if(n===e)continue;if(this.mandati++,t.tipo==="foto"&&this.caso()<this.perde){this.persi++;continue}let s=this.t+Math.max(.004,this.ritardo+(this.caso()*2-1)*this.balla);if(t.tipo!=="foto"){let a=e+">"+n;s=Math.max(s,(this.affidabili.get(a)||0)+1e-6),this.affidabili.set(a,s)}this.code.push({a:n,quando:s,testo:i})}}passo(e){this.t+=e;let t=this.code.filter(i=>i.quando<=this.t);if(t.length){this.code=this.code.filter(i=>i.quando>this.t),t.sort((i,n)=>i.quando-n.quando);for(let i of t)this.chi.get(i.a)?.ricevi(JSON.parse(i.testo),this.ritardo)}}};var Sa=[[6,10],[-32,4],[-32,42],[-14,54],[10,44],[25,-2],[25,8],[25,22],[25.5,30],[31,48],[48,62],[56,30],[55,-40],[54,-50],[50,-56],[44,-52],[44,-36],[44,-10],[30,0],[14,4]],jA=8,Ca=class{constructor(e,{caso:t=Math.random}={}){this.g=e,this.caso=t,this.stato="va",this.t=0,this.punto=0,this.giri=0,this.vuole="moto",this.fermo=0,this.usa=!1,this.acro=!1}mezzo(e){let t=this.g,i=t.mezzi.get(e);if(i)return{p:i.p,q:i.q,libero:!i.chi||i.chi===t.id,tipo:i.tipo};let n=t.eco.get("m:"+e);return n?{p:n.vista.p,q:n.vista.q,libero:!n.vista.chi,tipo:n.vista.tipo}:null}comando(e){let t=this.g,i=t.corpo;this.t+=e;let n={x:0,z:0},s=(A,c,h=1)=>{let u=A-i.p[0],p=c-i.p[2],d=Math.hypot(u,p)||1;return n.x=u/d*h,n.z=p/d*h,d};if(this.usa)return this.usa=!1,n;if(t.sopra){let A=t.mezzi.get(t.sopra);if(!A)return n;this.stato!=="guida"&&(this.stato="guida",this.t=0,this.punto=this.vicino(A.p));let{su:c,avanti:h,destra:u}=ri(A),p=(I,C)=>({x:0,z:0,mezzo:{gas:I,sterzo:Math.max(-1,Math.min(1,C))}});if(!A.contatti&&!A.inAcqua)return p(A.aria>.3&&A.aria<1.1&&this.acro?1:0,0);this.acro=this.caso()<.5;let[d,m]=Sa[this.punto],f=Math.hypot(d-A.p[0],m-A.p[2]);if(f<4.5&&(this.punto=(this.punto+1)%Sa.length,this.punto===0&&this.giri++),this.punto>=jA-2&&this.punto<=jA&&A.p[2]>-4&&(d=25,m=A.p[2]+6),c[1]<.6)return p(1,0);if(this.rincorsa)return A.p[2]<9&&(this.rincorsa=!1,this.punto=jA-1,this.fermo=0),p(-1,0);let v=[h[0],h[2]],g=[u[0],u[2]],M=[(d-A.p[0])/(f||1),(m-A.p[2])/(f||1)],P=Math.atan2(M[0]*g[0]+M[1]*g[1],M[0]*v[0]+M[1]*v[1]),b=Math.hypot(A.v[0],A.v[2]),x=Math.abs(P)>.5&&b>9?-.5:Math.abs(P)>1.2?.55:1,_=P*1.8;if(this.fermo=b<1?this.fermo+e:0,this.fermo>2.5){if(Math.abs(A.p[0]-27)<6&&A.p[2]>27&&A.p[2]<41)return this.rincorsa=!0,p(-1,0);x=-1,_=-_,this.fermo>3.8&&(this.fermo=0)}if(this.giri>=1||this.t>70){if(b<2)return this.usa=!0,this.stato="cammina",this.t=0,this.giri=0,{x:0,z:0,usa:!0};x=-.6}return p(x,_)}if(this.stato==="guida"&&(this.stato="cammina",this.t=0),this.stato==="cammina"){let A=[...t.eco.entries()].find(([c])=>c.startsWith("g:"))?.[1]?.vista;if(A&&!A.m){let c=Math.hypot(A.p[0]-i.p[0],A.p[2]-i.p[2]);c>2.6&&s(A.p[0],A.p[2],c>8?1:.6),n.corri=c>8}return this.t>12&&(this.stato="va",this.t=0,this.vuole=this.caso()<.6?"moto":"quad"),n}let a=this.mezzo(this.vuole);if((!a||!a.libero)&&(this.vuole=this.vuole==="moto"?"quad":"moto",a=this.mezzo(this.vuole)),!a||!a.libero)return this.stato="cammina",this.t=6,n;let o=L.add(a.p,Oe.ruota(a.q,Pi[a.tipo].sedile)),l=s(o[0],o[2],1);return n.corri=l>5,l<1.9?(this.usa=!0,{x:0,z:0,usa:!0}):(this.t>25&&(this.t=0,this.vuole=this.vuole==="moto"?"quad":"moto"),n)}vicino(e){let t=0,i=1/0;return Sa.forEach(([n,s],a)=>{let o=Math.hypot(n-e[0],s-e[2]);o<i&&(i=o,t=a)}),(t+1)%Sa.length}};var yi=new URLSearchParams(location.search),Ta=[.03,.09,.18],Qr={indietro:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',aiuto:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.4 2.4c-.7.3-1 .9-1 1.6v.4"/><path d="M12 17.2v.1"/></svg>',rete:'<svg viewBox="0 0 24 24"><circle cx="6" cy="17" r="2"/><circle cx="18" cy="7" r="2"/><path d="M8 15.5l8-7"/></svg>',palle:'<svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4"/><circle cx="16" cy="9" r="4"/><circle cx="17" cy="18" r="2.5"/></svg>',intero:'<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>'},jf={colore:"#5ee1ff",coloreCapelli:"#2a5a8a",pelle:"#f1c7a3"},qf={colore:"#f68187",coloreCapelli:"#424c6e",pelle:"#f9e6cf"},uu=new E(0,1,0),qA=r=>Math.round(r).toLocaleString("it-IT"),Ia=class{constructor(e){this.radice=e,this.tocco=matchMedia("(pointer: coarse)").matches,document.body.classList.toggle("tocco",this.tocco),this.dom(),this.arena=WA(),this.tu=new Fr("tu",this.arena,{tiene:!0,folla:Math.min(200,+(yi.get("gente")??20))}),this.conAmica=yi.get("amica")!=="0",this.rete=new Ba({ritardo:Ta[1],balla:.03,perde:.05}),yi.has("rete")&&(this.rete.ritardo=Math.max(.005,+yi.get("rete")/1e3)),this.rete.collega(this.tu),this.conAmica&&(this.mia=new Fr("mia",WA(),{capo:"tu",partenza:[9,0,9],palle:0}),this.rete.collega(this.mia),this.amica=new Ca(this.mia));let t=yh(this.tela);Object.assign(this,{renderer:t.renderer,sc:t.sc,sole:t.sole,qualita:t.qualita}),t.stelle.visible=!1,this.renderer.info.autoReset=!1,this.resa=t.qualita==="alta"&&Rr.puo(t.renderer)?new Rr(t.renderer,{trasparente:!0,sole:1,emissivo:1.4}):null,this.camera=new ct(55,1,.3,400),Dh(yi.has("ora")?+yi.get("ora"):11),mh([]),this.scena=new pa(this.arena,this.sc),this.viste=new Map;for(let i of this.arena.mezzi){let n=new da(i.tipo);this.sc.add(n.gruppo,n.ombraG),this.viste.set(i.tipo,n)}this.gatti={tu:this.gatto(jf),mia:this.conAmica?this.gatto(qf):null},this.vPalle=new fa(this.sc,this.tu.palle.max),this.vFolla=new ga(this.sc,300),this.part=new va(this.sc,700),this.cam={yaw:0,pitch:.36,dist:9,voluta:9,centro:new E(0,1.3,6),mossa:-9},this.tasti=new Set,this.leva=null,this.dita=new Map,this.tastiDito={usa:!1,salta:!1,trucco:!1},this.prima=performance.now(),this.resto=0,this.tScritta=0,this.lenti=0,this.corsa=!1,this.fermoDa=0,this.misure={fisica:0,fotogrammi:0,t0:performance.now(),fps:0},this.comandi(),addEventListener("resize",()=>this.misura()),this.misura(),yi.has("palle")&&this.tu.pioggia([0,0,14],Math.min(1500,+yi.get("palle"))),this.ciclo=this.ciclo.bind(this),requestAnimationFrame(this.ciclo)}dom(){let e=this.radice;e.innerHTML=`
      <canvas id="tela" tabindex="0"></canvas>
      <div class="ar-su">
        <a class="ar-tasto" href="./" title="Torna a Nookora" aria-label="Torna a Nookora">${Qr.indietro}</a>
        <span class="ar-spazio"></span>
        <span class="ar-punti" title="I punti delle acrobazie">0</span>
        <span class="ar-spazio"></span>
        <button class="ar-tasto" data-crash title="Il crash test">${Qr.palle}</button>
        <button class="ar-tasto" data-rete title="Quanto ritardo ha Mia (la rete finta)">${Qr.rete}<span class="ar-piano">90 ms</span></button>
        <button class="ar-tasto ar-solo-largo" data-intero aria-label="Schermo intero">${Qr.intero}</button>
        <button class="ar-tasto" data-aiuto aria-label="I comandi">${Qr.aiuto}</button>
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
      </div></div>`,this.tela=e.querySelector("#tela"),this.combo=e.querySelector(".ar-combo"),this.esito=e.querySelector(".ar-esito"),this.puntiDom=e.querySelector(".ar-punti"),this.veloce=e.querySelector(".ar-veloce"),this.aiuto=e.querySelector(".ar-aiuto"),this.levaDom=e.querySelector(".ar-leva"),this.carta=e.querySelector(".ar-carta"),this.crash=e.querySelector(".ar-crash"),this.misureDom=e.querySelector(".ar-misure"),e.querySelector("[data-aiuto]").onclick=()=>this.carta.classList.add("su"),e.querySelector("[data-chiudi]").onclick=()=>{this.carta.classList.remove("su"),this.tela.focus()},this.carta.onclick=i=>{i.target===this.carta&&this.carta.classList.remove("su")},e.querySelector("[data-crash]").onclick=()=>this.crash.classList.toggle("su"),e.querySelector("[data-pioggia]").onclick=()=>{let i=this.tu.corpo.p;this.tu.pioggia([i[0],0,i[2]+6],300),this.tela.focus()},e.querySelector("[data-gente]").onclick=()=>{this.tu.gente(20),this.tela.focus()},e.querySelector("[data-intero]").onclick=()=>this.schermoIntero();for(let i of e.querySelectorAll(this.tocco?".ar-solo-tastiera":".ar-solo-dito"))i.remove();let t=e.querySelector("[data-rete]");t.onclick=()=>{let i=(Ta.indexOf(this.rete.ritardo)+1)%Ta.length;this.rete.ritardo=Ta[i<0?1:i],t.querySelector(".ar-piano").textContent=Math.round(this.rete.ritardo*1e3)+" ms"},yi.get("amica")==="0"&&t.remove(),this.nome=document.createElement("div"),this.nome.className="ar-nome",this.nome.textContent="Mia",e.appendChild(this.nome);try{localStorage.getItem("nookora.arena.vista")||(this.carta.classList.add("su"),localStorage.setItem("nookora.arena.vista","1"))}catch{}}async schermoIntero(){try{if(document.fullscreenElement){await document.exitFullscreen();return}await document.documentElement.requestFullscreen(),await navigator.keyboard?.lock?.(["KeyW","KeyA","KeyS","KeyD","Escape"])}catch{}this.tela.focus()}gatto(e){let t=new oa(e);return this.sc.add(t.gruppo),t.ombra=t.gruppo.children[1],t.pattini=Jh(),t.pattini.visible=!1,t.corpo.add(t.pattini),t}misura(){let e=innerWidth,t=innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e<t?68:55,this.camera.updateProjectionMatrix(),this.resa&&this.resa.misura(),this.part?.misura(t*this.renderer.getPixelRatio(),this.camera.fov)}comandi(){let e=this.tela;addEventListener("keydown",i=>{if(i.target.closest?.(".ar-carta")&&i.key!=="Escape")return;if(i.key==="Escape"){this.carta.classList.toggle("su");return}let n=i.key.length===1?i.key.toLowerCase():i.key;(i.ctrlKey||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(n))&&i.preventDefault(),n==="Control"&&!i.repeat&&(this.corsa=!this.corsa),i.repeat||(n==="f"&&(this.usaUnaVolta=!0),n===" "&&(this.saltoUnaVolta=!0),n==="r"&&(this.raddrizzaUnaVolta=!0)),this.tasti.add(n),n==="Shift"&&this.tasti.add("shift")}),addEventListener("keyup",i=>{let n=i.key.length===1?i.key.toLowerCase():i.key;this.tasti.delete(n),n==="Shift"&&this.tasti.delete("shift")}),addEventListener("blur",()=>this.tasti.clear()),addEventListener("contextmenu",i=>i.preventDefault()),e.addEventListener("wheel",i=>{i.preventDefault(),this.cam.voluta=Math.min(40,Math.max(3.5,this.cam.voluta*(i.deltaY>0?1.12:1/1.12)))},{passive:!1}),e.addEventListener("mousedown",i=>{i.button===1&&i.preventDefault()}),e.addEventListener("auxclick",i=>{i.button===1&&i.preventDefault()}),e.addEventListener("pointerdown",i=>{if(e.setPointerCapture(i.pointerId),e.focus(),i.pointerType==="mouse"&&i.button===2){this.truccoUnaVolta=!0;return}let n={x:i.clientX,y:i.clientY,x0:i.clientX,y0:i.clientY,t0:performance.now(),tipo:i.pointerType,tasto:i.button};if(i.pointerType==="touch"&&i.clientX<innerWidth*.45&&i.clientY>innerHeight*.3&&!this.leva&&(n.leva=!0,this.leva={id:i.pointerId,x0:i.clientX,y0:i.clientY,x:0,y:0},this.levaDom.style.display="block",this.posaLeva()),this.dita.set(i.pointerId,n),i.pointerType==="touch"&&this.dita.size>=2){let[s,a]=[...this.dita.values()].filter(o=>!o.leva);s&&a&&(this.pizzico={d:Math.hypot(s.x-a.x,s.y-a.y),voluta:this.cam.voluta})}}),e.addEventListener("pointermove",i=>{let n=this.dita.get(i.pointerId);if(!n)return;let s=i.clientX-n.x,a=i.clientY-n.y;if(n.x=i.clientX,n.y=i.clientY,n.leva){let A=this.leva,c=i.clientX-A.x0,h=i.clientY-A.y0,u=Math.hypot(c,h);u>50&&(A.x0+=c*(1-50/u),A.y0+=h*(1-50/u),c=i.clientX-A.x0,h=i.clientY-A.y0,this.posaLeva());let p=Math.min(1,Math.max(0,(Math.hypot(c,h)-6)/36)),d=Math.hypot(c,h)||1;A.x=c/d*p,A.y=-h/d*p,this.levaDom.firstElementChild.style.transform=`translate(${c}px, ${h}px)`;return}let o=[...this.dita.values()].filter(l=>!l.leva);if(this.pizzico&&o.length>=2){let l=Math.hypot(o[0].x-o[1].x,o[0].y-o[1].y);this.cam.voluta=Math.min(40,Math.max(3.5,this.pizzico.voluta*this.pizzico.d/Math.max(20,l)));return}if(n.tipo==="mouse"&&i.buttons&4){let l=.004*this.cam.dist,A=this.cam.yaw,c=this.cam.sposta||(this.cam.sposta=[0,0]);c[0]+=(Math.cos(A)*s+Math.sin(A)*a)*l,c[1]+=(-Math.sin(A)*s+Math.cos(A)*a)*l,Math.hypot(n.x-n.x0,n.y-n.y0)>6&&(n.trascinato=!0);return}if(n.tipo!=="mouse"||i.buttons&1){let l=n.tipo==="touch"?.007:.0055;this.cam.yaw-=s*l,this.cam.pitch=Math.min(1.25,Math.max(-.05,this.cam.pitch+a*.0045)),Math.hypot(n.x-n.x0,n.y-n.y0)>6&&(n.trascinato=!0,this.cam.mossa=performance.now()/1e3)}});let t=i=>{let n=this.dita.get(i.pointerId);if(this.dita.delete(i.pointerId),!!n){if(n.leva){this.leva=null,this.levaDom.style.display="none",this.levaDom.firstElementChild.style.transform="";return}this.dita.size<2&&(this.pizzico=null),n.tipo==="mouse"&&n.tasto===0&&!n.trascinato&&performance.now()-n.t0<450&&i.type==="pointerup"&&(this.usaUnaVolta=!0),n.tipo==="mouse"&&n.tasto===1&&!n.trascinato&&i.type==="pointerup"&&(this.cam.sposta=null)}};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t);for(let i of this.radice.querySelectorAll("[data-dito]")){let n=i.dataset.dito;i.addEventListener("pointerdown",a=>{a.preventDefault(),i.setPointerCapture(a.pointerId),this.tastiDito[n]=!0,i.classList.add("giu"),n==="usa"&&(this.usaUnaVolta=!0),n==="trucco"&&(this.truccoUnaVolta=!0),n==="salta"&&(this.saltoUnaVolta=!0),navigator.vibrate?.(8)});let s=()=>{this.tastiDito[n]=!1,i.classList.remove("giu")};i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s)}}posaLeva(){this.levaDom.style.left=this.leva.x0+"px",this.levaDom.style.top=this.leva.y0+"px"}comando(){let e=this.tasti,t=(e.has("d")||e.has("ArrowRight")?1:0)-(e.has("a")||e.has("ArrowLeft")?1:0),i=(e.has("w")||e.has("ArrowUp")?1:0)-(e.has("s")||e.has("ArrowDown")?1:0),n=e.has(" ")||this.tastiDito.salta||this.saltoUnaVolta,s=e.has("f")||this.usaUnaVolta,a=e.has("r")||this.raddrizzaUnaVolta,o=e.has("shift")||e.has("Control")||this.corsa,l=this.truccoUnaVolta||this.tastiDito.trucco,A=null;this.leva&&(t=this.leva.x,i=this.leva.y,o=o||Math.hypot(t,i)>.94);let c=navigator.getGamepads?[...navigator.getGamepads()].find(g=>g&&g.connected):null;if(c){let g=c.axes,M=x=>Math.abs(x)<.18?0:x;(M(g[0])||M(g[1]))&&(t=M(g[0]),i=-M(g[1]),o=Math.hypot(t,i)>.95),(M(g[2])||M(g[3]))&&(this.cam.yaw-=M(g[2])*.05,this.cam.pitch=Math.min(1.25,Math.max(-.05,this.cam.pitch+M(g[3])*.03)),this.cam.mossa=performance.now()/1e3);let P=x=>!!c.buttons[x]?.pressed;P(0)&&(s=!0),P(1)&&(n=!0),P(2)&&(l=!0),P(3)&&(a=!0);let b=(c.buttons[7]?.value||0)-(c.buttons[6]?.value||0);Math.abs(b)>.05&&(A=b)}let h=Math.hypot(t,i);h>1&&(t/=h,i/=h),this.fermoDa=h<.1?this.fermoDa+1:0,this.fermoDa>40&&(this.corsa=!1),this.usaUnaVolta=!1,this.truccoUnaVolta=!1,this.saltoUnaVolta=!1,this.raddrizzaUnaVolta=!1;let u=this.cam.yaw,p=Math.sin(u),d=Math.cos(u),m=-Math.cos(u),f=Math.sin(u),v={x:p*i+m*t,z:d*i+f*t,corri:o,salta:n,usa:s,raddrizza:a,trucco:l,asse:{x:t,y:i}};return this.tu.sopra&&(v.mezzo={gas:A??i,sterzo:t}),v}ciclo(e){requestAnimationFrame(this.ciclo);let t=Math.min(.1,(e-this.prima)/1e3);this.prima=e,this.resto+=t;let i=0,n=performance.now(),s=this.carta.classList.contains("su")?{}:this.comando();for(;this.resto>=vn&&i<12;)this.prima_=this.istantanea(),this.tu.passo(s),this.mia&&this.mia.passo(this.amica.comando(vn)),this.rete.passo(vn),this.resto-=vn,i++,s.usa=!1,s.trucco=!1,s.salta&&!this.tasti.has(" ")&&!this.tastiDito.salta&&i>2&&(s.salta=!1);if(i===12&&(this.resto=0),this.misure.fisica+=performance.now()-n,this.alfa=Math.max(0,Math.min(1,this.resto/vn)),this.scena.passo(this.tu.ora),this.eventi(),this.disegnaCose(t),this.part.passo(t),this.telecamera(t),this.scritte(),this.qualita==="alta"){let a=this.cam.centro,o=4;wh(this.sole,Math.round(a.x/o)*o,Math.round(a.z/o)*o,30,0),this.renderer.shadowMap.needsUpdate=!0}this.resa?(this.resa.scena(this.sc,this.camera),this.resa.effetti(this.camera)):this.renderer.render(this.sc,this.camera),this.lenti=t>.028?this.lenti+1:Math.max(0,this.lenti-.5),this.lenti>40&&this.resa&&(this.resa.alleggerisci(),this.lenti=0),this.contaMisure(),this.renderer.info.reset()}contaMisure(){let e=this.misure;e.fotogrammi++;let t=performance.now();if(this.ultimaInfo={calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles},t-e.t0<500)return;let i=(t-e.t0)/1e3;if(e.fps=e.fotogrammi/i,e.msFisica=e.fisica/e.fotogrammi,e.fotogrammi=0,e.fisica=0,e.t0=t,!this.crash.classList.contains("su"))return;let n=this.tu.palle,s=this.ultimaInfo||this.renderer.info.render;this.misureDom.innerHTML=`<b>${Math.round(e.fps)}</b> fps · fisica <b>${e.msFisica.toFixed(1)}</b> ms<br>palle <b>${n.n}</b> (sveglie ${n.svegli}) · gente <b>${this.tu.folla.gatti.length}</b><br>disegni <b>${s.calls}</b> · triangoli ${qA(s.triangles)}`}eventi(){for(let e of this.tu.eventi)e.tipo==="trucchi"?this.fineCombo(e):e.tipo==="atterrato"&&e.p?this.part.polvere(e.p,Math.min(1.5,e.aria||.6)):e.tipo==="elastico"?this.part.polvere(e.p,.6):e.tipo==="tuffo"?this.part.schizzi(this.tu.corpo.p):e.tipo==="spinta"?this.lampo("Spinta"):e.tipo==="pattini"?this.lampo("Pattini"):e.tipo==="scarpe"?this.lampo("Senza pattini"):e.tipo==="pioggia"?this.lampo(`${e.n} palle`):e.tipo==="trucco"||e.tipo==="aggancio"?navigator.vibrate?.(6):e.tipo==="botta"&&(this.scossa=Math.min(.5,e.forza*.04));this.tu.eventi.length=0,this.mia&&(this.mia.eventi.length=0)}fineCombo(e){clearTimeout(this.tEsito),e.esito==="pulito"?(this.esito.className="ar-esito su",this.esito.innerHTML=`<b>+${qA(e.punti)}</b>${e.combo>1?`<small>combo ×${e.combo}</small>`:""}`,this.part.stelle(e.p,e.combo),this.puntiDom.textContent=qA(this.tu.trucchi.totale),this.puntiDom.classList.remove("salta"),this.puntiDom.offsetWidth,this.puntiDom.classList.add("salta"),navigator.vibrate?.([10,40,14])):(this.esito.className="ar-esito su caduta",this.esito.innerHTML="<b>Caduta</b>",this.part.polvere(e.p,1.4),navigator.vibrate?.(40)),this.tEsito=setTimeout(()=>{this.esito.className="ar-esito"},1300)}lampo(e){this.combo.classList.contains("su")||(clearTimeout(this.tEsito),this.esito.className="ar-esito su piccolo",this.esito.innerHTML=`<b>${e}</b>`,this.tEsito=setTimeout(()=>{this.esito.className="ar-esito"},900))}istantanea(){let e=this.tu,t=new Map;t.set("gatto",[...e.corpo.p]);for(let[i,n]of e.mezzi)t.set(i,{p:[...n.p],q:[...n.q]});return t}fra(e,t){if(!e)return t;let i=this.alfa??1;return Math.hypot(t[0]-e[0],t[2]-e[2])>2?t:[e[0]+(t[0]-e[0])*i,e[1]+(t[1]-e[1])*i,e[2]+(t[2]-e[2])*i]}suolo(e){let t=this.arena.mondo.raggio([e[0],e[1]+.5,e[2]],[0,-1,0],30);return t===null?null:e[1]+.5-t}disegnaCose(e){let t=this.tu;for(let[s,a]of this.viste){let o=t.mezzi.get(s),l=t.eco.get("m:"+s),A=o||l?.vista;if(!A)continue;let c=o&&this.prima_&&this.prima_.get(s);if(c){let p=new $e(...c.q).slerp(new $e(...o.q),this.alfa??1);A={...o,p:this.fra(c.p,o.p),q:[p.x,p.y,p.z,p.w]}}a.aggiorna(A,e,this.suolo(A.p));let h=o?t.sopra===s?t.trucchi.figura():null:mn.daFoto(l.vista.tr);a.figura=h;let u=YA(h);u&&a.gruppo.quaternion.multiply(new $e().setFromAxisAngle(new E(...u[0]),u[1]))}let i=t.corpo;this.metti(this.gatti.tu,t.sopra?{m:t.sopra}:{p:this.fra(this.prima_&&this.prima_.get("gatto"),i.p),v:i.v,dir:i.dir,aTerra:i.aTerra,nuota:i.nuota,botta:i.botta>0,pattini:i.pattini,rotaia:!!i.rotaia},t.sopra?null:t.trucchi.figura(),e),i.rotaia&&this.part.scintille(i.p,[i.dir[0],0,i.dir[1]]);let n=t.eco.get("g:mia");if(this.gatti.mia&&n){let s=n.vista;this.metti(this.gatti.mia,s.m?{m:s.m}:{p:s.p,v:s.v,dir:[Math.sin(s.d),Math.cos(s.d)],aTerra:!!(s.f&1),nuota:!!(s.f&2),botta:!!(s.f&8),pattini:!!s.pt,rotaia:!!s.ro},mn.daFoto(s.tr),e);let a=this.gatti.mia.gruppo,o=new E;a.getWorldPosition(o),o.y+=2.55,o.project(this.camera);let l=o.z<1&&Math.abs(o.x)<1.1&&Math.abs(o.y)<1.1;this.nome.style.display=l?"block":"none",l&&(this.nome.style.transform=`translate(${(o.x+1)/2*innerWidth}px, ${(1-o.y)/2*innerHeight}px) translate(-50%, -100%)`)}else this.nome.style.display="none";t.palle&&this.vPalle.aggiorna(t.palle),this.vFolla.aggiorna(t.folla.gatti,e)}metti(e,t,i,n){if(e.corpo.position.x=0,e.corpo.position.z=0,t.m){let l=this.viste.get(t.m);e.gruppo.parent!==l.gruppo&&(l.gruppo.add(e.gruppo),e.corpo.rotation.set(0,0,0)),e.gruppo.position.set(...qh[l.tipo]),e.gruppo.quaternion.identity();let A=l.figura?.nome==="superman"?Math.sin(l.figura.k*Math.PI):0;A&&(e.gruppo.position.y+=A*.6,e.gruppo.position.z-=A*.4,e.gruppo.rotateX(-A*1.25)),e.dir.set(0,1),e.seduto=!A,e.cammina=!1,e.ombra.visible=!1,e.pattini.visible=!1,e.corpo.rotation.x=0,e.aggiorna(n);return}e.gruppo.parent!==this.sc&&this.sc.add(e.gruppo),e.seduto=!1,e.pattini.visible=!!t.pattini,e.gruppo.position.set(...t.p),e.gruppo.quaternion.identity();let s=Math.hypot(t.v[0],t.v[2]);e.guarda(t.dir[0],t.dir[1]),e.cammina=!t.pattini&&s>.4&&(t.aTerra||t.nuota),e.corre=s>4.6,e.velocita=s,e.capriola=t.botta&&!t.aTerra,e.capriola&&(e.corpo.rotation.x+=n*11),e.svelto=t.rotaia?3:1,t.rotaia&&e.guarda(-t.dir[1],t.dir[0]);let a=YA(i);if(a||i?.nome==="superman"){let l=new $e;if(a){let c=Math.atan2(t.dir[0],t.dir[1]),h=new E(...a[0]).applyAxisAngle(new E(0,1,0),c);l.setFromAxisAngle(h,a[1])}else{let c=Math.atan2(t.dir[0],t.dir[1]),h=Math.sin(i.k*Math.PI);l.setFromAxisAngle(new E(1,0,0).applyAxisAngle(new E(0,1,0),c),-h*1.4)}e.gruppo.quaternion.copy(l);let A=uu.clone().sub(uu.clone().applyQuaternion(l));e.gruppo.position.add(A)}let o=this.suolo(t.p);if(e.ombra.visible=o!==null&&!t.nuota&&!a,o!==null){e.ombra.position.y=o-t.p[1]+.02;let l=Math.max(.35,1-(t.p[1]-o)/5);e.ombra.scale.setScalar(l)}t.aTerra&&e.unoInAria&&e.rimbalza(),e.unoInAria=!t.aTerra&&!t.nuota&&!t.rotaia,e.aggiorna(n),t.rotaia&&(e.corpo.position.y-=.12)}telecamera(e){let t=this.tu,i=this.cam,n=t.corpo,s=t.sopra&&t.mezzi.get(t.sopra),a=new E(...s?s.p:n.p);a.y+=s?.9:1.3,i.sposta&&(a.x+=i.sposta[0],a.z+=i.sposta[1]),i.centro.lerp(a,Math.min(1,e*(s?9:12)));let o=performance.now()/1e3-i.mossa>1.4,l=null,A=0;if(s){let p=ri(s),d=Math.hypot(s.v[0],s.v[2]);p.su[1]>.5&&d>3&&(l=Math.atan2(p.avanti[0],p.avanti[2]),A=1.2+d*.12)}else(this.tocco||n.pattini||this.leva)&&Math.hypot(n.v[0],n.v[2])>1.5&&(l=Math.atan2(n.v[0],n.v[2]),A=n.rotaia?2.5:1.1);if(l!==null&&o){let p=l-i.yaw;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;!s&&Math.abs(p)>2.4&&(p*=.15),i.yaw+=p*Math.min(1,e*A),s&&(i.pitch+=(.3-i.pitch)*Math.min(1,e*1.5))}let c=i.voluta*(s?1.15:1);i.dist+=(c-i.dist)*Math.min(1,e*6);let h=Math.cos(i.pitch),u=new E(-Math.sin(i.yaw)*h,Math.sin(i.pitch),-Math.cos(i.yaw)*h).multiplyScalar(i.dist);this.camera.position.copy(i.centro).add(u),this.camera.position.y<.6&&i.centro.y>-1&&(this.camera.position.y=.6),this.scossa>.01&&(this.camera.position.x+=(Math.random()-.5)*this.scossa,this.camera.position.y+=(Math.random()-.5)*this.scossa,this.scossa*=.86),this.camera.lookAt(i.centro)}scritte(){let e=this.tu,t=e.sopra&&e.mezzi.get(e.sopra),i=e.corpo,n=e.trucchi.inCorso(),s=n.nomi.join("|");if(s!==this.comboDi){this.comboDi=s,this.combo.classList.toggle("su",n.combo>0);let u=this.combo.querySelector(".ar-nomi");u.innerHTML=n.nomi.map((p,d)=>`<span${d===n.nomi.length-1?' class="nuovo"':""}>${p}</span>`).join(""),this.combo.querySelector(".ar-per").textContent=n.combo>1?"×"+n.combo:""}let a=t?Math.hypot(t.v[0],t.v[2]):i.pattini?Math.hypot(i.v[0],i.v[2]):0;t||i.pattini?(this.veloce.style.display="block",this.veloce.firstElementChild.textContent=Math.round(a*3.6)):this.veloce.style.display="none";let o=t?!t.contatti&&!t.inAcqua:!i.aTerra&&!i.nuota;this.radice.querySelector('[data-dito="trucco"]')?.classList.toggle("spento",!o);let l="";if(t)l="scendi";else{let u=[...this.viste.keys()].some(d=>{let m=e.mezzi.get(d)||e.eco.get("m:"+d)?.vista;return m&&!m.chi&&Math.hypot(m.p[0]-i.p[0],m.p[2]-i.p[2])<2.6}),p=(this.arena.pattini||[]).some(d=>Math.hypot(d.x-i.p[0],d.z-i.p[2])<2.2);u?l="sali":p&&(l=i.pattini?"togli i pattini":"metti i pattini")}let A=l+(t?1:0)+(i.pattini?1:0);if(A===this.aiutoDi)return;this.aiutoDi=A;let c=[];l&&c.push(`<span class="ora"><b>${this.tocco?"Usa":"clic o F"}</b> ${l}</span>`),this.tocco||c.push(t?"<span><b>W</b> gas · <b>S</b> freno · <b>A D</b> sterzo</span>":"<span><b>WASD</b> muovi · <b>Ctrl</b> corri</span>","<span><b>Spazio</b> salta</span>","<span><b>destro</b> in aria: trucco</span>"),this.aiuto.innerHTML=c.join("");let h=this.radice.querySelector('[data-dito="usa"]');h&&(h.textContent=l==="sali"?"Sali":l==="scendi"?"Scendi":l?"Pattini":"Usa")}};var pu=document.getElementById("arena");Ph()?globalThis.arena=new Ia(pu):pu.innerHTML=`<p style="padding:24px;color:#958ead">L'arena ha bisogno del 3D (WebGL), e questo browser non ce l'ha.</p>`;
