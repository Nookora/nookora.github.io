var Wh=Object.defineProperty;var Ti=(r,e)=>()=>(r&&(e=r(r=0)),e);var Xh=(r,e)=>{for(var t in e)Wh(r,t,{get:e[t],enumerable:!0})};function tr(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(St[255&r]+St[r>>8&255]+St[r>>16&255]+St[r>>24&255]+"-"+St[255&e]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[63&t|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[255&i]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function bt(r,e,t){return Math.max(e,Math.min(t,r))}function nf(r,e){return(r%e+e)%e}function vs(r,e,t){return(1-t)*r+t*e}function k0(r){return(r&r-1)==0&&r!==0}function iA(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function dr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}function Jc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rf(){let r=Xa("canvas");return r.style.display="block",r}function Pr(r){r in V0||(V0[r]=!0,console.warn(r))}function Qn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function xs(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}function Ps(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ya.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function bs(r,e,t,i,n){for(let a=0,o=r.length-3;a<=o;a+=3){$i.fromArray(r,a);let s=n.x*Math.abs($i.x)+n.y*Math.abs($i.y)+n.z*Math.abs($i.z),l=e.dot($i),A=t.dot($i),c=i.dot($i);if(Math.max(-Math.max(l,A,c),Math.min(l,A,c))>s)return!1}return!0}function Is(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}function mf(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let A=l-127;A<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):A<-14?(i[l]=1024>>-A-14,i[256|l]=1024>>-A-14|32768,n[l]=-A-1,n[256|l]=-A-1):A<=15?(i[l]=A+15<<10,i[256|l]=A+15<<10|32768,n[l]=13,n[256|l]=13):A<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let l=1;l<1024;++l){let A=l<<13,c=0;for(;!(8388608&A);)A<<=1,c-=8388608;A&=-8388609,c+=947912704,a[l]=A|c}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(s[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:a,exponentTable:o,offsetTable:s}}function Da(r,e,t,i,n,a,o,s,l,A){r.getVertexPosition(s,Rn),r.getVertexPosition(l,zn),r.getVertexPosition(A,Un);let c=function(h,u,f,g,m,p,P,d){let M;if(M=u.side===Dt?g.intersectTriangle(P,p,m,!0,d):g.intersectTriangle(m,p,P,u.side===Hi,d),M===null)return null;wa.copy(d),wa.applyMatrix4(h.matrixWorld);let v=f.ray.origin.distanceTo(wa);return v<f.near||v>f.far?null:{distance:v,point:wa.clone(),object:h}}(r,e,t,i,Rn,zn,Un,ba);if(c){n&&(xa.fromBufferAttribute(n,s),Pa.fromBufferAttribute(n,l),ya.fromBufferAttribute(n,A),c.uv=sn.getInterpolation(ba,Rn,zn,Un,xa,Pa,ya,new oe)),a&&(xa.fromBufferAttribute(a,s),Pa.fromBufferAttribute(a,l),ya.fromBufferAttribute(a,A),c.uv1=sn.getInterpolation(ba,Rn,zn,Un,xa,Pa,ya,new oe),c.uv2=c.uv1),o&&(nc.fromBufferAttribute(o,s),rc.fromBufferAttribute(o,l),ac.fromBufferAttribute(o,A),c.normal=sn.getInterpolation(ba,Rn,zn,Un,nc,rc,ac,new C),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let h={a:s,b:l,c:A,normal:new C,materialIndex:0};sn.getNormal(Rn,zn,Un,h.normal),c.face=h}return c}function jn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Lt(r){let e={};for(let t=0;t<r.length;t++){let i=jn(r[t]);for(let n in i)e[n]=i[n]}return e}function Zc(r){return r.getRenderTarget()===null?r.outputColorSpace:Je.workingColorSpace}function $c(){let r=null,e=!1,t=null,i=null;function n(a,o){t(a,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Pf(r,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);a&&(r.deleteBuffer(a.buffer),i.delete(n))},update:function(n,a){if(n.isGLBufferAttribute){let s=i.get(n);return void((!s||s.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let o=i.get(n);if(o===void 0)i.set(n,function(s,l){let A=s.array,c=s.usage,h=A.byteLength,u=r.createBuffer(),f;if(r.bindBuffer(l,u),r.bufferData(l,A,c),s.onUploadCallback(),A instanceof Float32Array)f=r.FLOAT;else if(A instanceof Uint16Array)if(s.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");f=r.HALF_FLOAT}else f=r.UNSIGNED_SHORT;else if(A instanceof Int16Array)f=r.SHORT;else if(A instanceof Uint32Array)f=r.UNSIGNED_INT;else if(A instanceof Int32Array)f=r.INT;else if(A instanceof Int8Array)f=r.BYTE;else if(A instanceof Uint8Array)f=r.UNSIGNED_BYTE;else{if(!(A instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);f=r.UNSIGNED_BYTE}return{buffer:u,type:f,bytesPerElement:A.BYTES_PER_ELEMENT,version:s.version,size:h}}(n,a));else if(o.version<n.version){if(o.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,l,A){let c=l.array,h=l._updateRange,u=l.updateRanges;if(r.bindBuffer(A,s),h.count===-1&&u.length===0&&r.bufferSubData(A,0,c),u.length!==0){for(let f=0,g=u.length;f<g;f++){let m=u[f];t?r.bufferSubData(A,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count):r.bufferSubData(A,m.start*c.BYTES_PER_ELEMENT,c.subarray(m.start,m.start+m.count))}l.clearUpdateRanges()}h.count!==-1&&(t?r.bufferSubData(A,h.offset*c.BYTES_PER_ELEMENT,c,h.offset,h.count):r.bufferSubData(A,h.offset*c.BYTES_PER_ELEMENT,c.subarray(h.offset,h.offset+h.count)),h.count=-1),l.onUploadCallback()})(o.buffer,n,a),o.version=n.version}}}}function yf(r,e,t,i,n,a,o){let s=new ge(0),l,A,c=a===!0?0:1,h=null,u=0,f=null;function g(m,p){m.getRGB(Ea,Zc(r)),i.buffers.color.setClear(Ea.r,Ea.g,Ea.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(m,p=1){s.set(m),c=p,g(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(s,c)},render:function(m,p){let P=!1,d=p.isScene===!0?p.background:null;d&&d.isTexture&&(d=(p.backgroundBlurriness>0?t:e).get(d)),d===null?g(s,c):d&&d.isColor&&(g(d,1),P=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||P)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),d&&(d.isCubeTexture||d.mapping===uo)?(A===void 0&&(A=new Ze(new si(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:jn(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),A.geometry.deleteAttribute("normal"),A.geometry.deleteAttribute("uv"),A.onBeforeRender=function(v,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(A.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(A)),A.material.uniforms.envMap.value=d,A.material.uniforms.flipEnvMap.value=d.isCubeTexture&&d.isRenderTargetTexture===!1?-1:1,A.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,A.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,A.material.toneMapped=Je.getTransfer(d.colorSpace)!==it,h===d&&u===d.version&&f===r.toneMapping||(A.material.needsUpdate=!0,h=d,u=d.version,f=r.toneMapping),A.layers.enableAll(),m.unshift(A,A.geometry,A.material,0,0,null)):d&&d.isTexture&&(l===void 0&&(l=new Ze(new Jn(2,2),new kt({name:"BackgroundMaterial",uniforms:jn(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=d,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Je.getTransfer(d.colorSpace)!==it,d.matrixAutoUpdate===!0&&d.updateMatrix(),l.material.uniforms.uvTransform.value.copy(d.matrix),h===d&&u===d.version&&f===r.toneMapping||(l.material.needsUpdate=!0,h=d,u=d.version,f=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function bf(r,e,t,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=f(null),A=l,c=!1;function h(b){return i.isWebGL2?r.bindVertexArray(b):a.bindVertexArrayOES(b)}function u(b){return i.isWebGL2?r.deleteVertexArray(b):a.deleteVertexArrayOES(b)}function f(b){let y=[],w=[],U=[];for(let I=0;I<n;I++)y[I]=0,w[I]=0,U[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:w,attributeDivisors:U,object:b,attributes:{},index:null}}function g(){let b=A.newAttributes;for(let y=0,w=b.length;y<w;y++)b[y]=0}function m(b){p(b,0)}function p(b,y){let w=A.newAttributes,U=A.enabledAttributes,I=A.attributeDivisors;w[b]=1,U[b]===0&&(r.enableVertexAttribArray(b),U[b]=1),I[b]!==y&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,y),I[b]=y)}function P(){let b=A.newAttributes,y=A.enabledAttributes;for(let w=0,U=y.length;w<U;w++)y[w]!==b[w]&&(r.disableVertexAttribArray(w),y[w]=0)}function d(b,y,w,U,I,z,Q){Q===!0?r.vertexAttribIPointer(b,y,w,I,z):r.vertexAttribPointer(b,y,w,U,I,z)}function M(){v(),c=!0,A!==l&&(A=l,h(A.object))}function v(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(b,y,w,U,I){let z=!1;if(o){let Q=function(R,k,X){let ae=X.wireframe===!0,ue=s[R.id];ue===void 0&&(ue={},s[R.id]=ue);let x=ue[k.id];x===void 0&&(x={},ue[k.id]=x);let D=x[ae];return D===void 0&&(D=f(i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()),x[ae]=D),D}(U,w,y);A!==Q&&(A=Q,h(A.object)),z=function(R,k,X,ae){let ue=A.attributes,x=k.attributes,D=0,S=X.getAttributes();for(let T in S)if(S[T].location>=0){let V=ue[T],J=x[T];if(J===void 0&&(T==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),T==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),V===void 0||V.attribute!==J||J&&V.data!==J.data)return!0;D++}return A.attributesNum!==D||A.index!==ae}(b,U,w,I),z&&function(R,k,X,ae){let ue={},x=k.attributes,D=0,S=X.getAttributes();for(let T in S)if(S[T].location>=0){let V=x[T];V===void 0&&(T==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),T==="instanceColor"&&R.instanceColor&&(V=R.instanceColor));let J={};J.attribute=V,V&&V.data&&(J.data=V.data),ue[T]=J,D++}A.attributes=ue,A.attributesNum=D,A.index=ae}(b,U,w,I)}else{let Q=y.wireframe===!0;A.geometry===U.id&&A.program===w.id&&A.wireframe===Q||(A.geometry=U.id,A.program=w.id,A.wireframe=Q,z=!0)}I!==null&&t.update(I,r.ELEMENT_ARRAY_BUFFER),(z||c)&&(c=!1,function(Q,R,k,X){if(i.isWebGL2===!1&&(Q.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let ae=X.attributes,ue=k.getAttributes(),x=R.defaultAttributeValues;for(let D in ue){let S=ue[D];if(S.location>=0){let T=ae[D];if(T===void 0&&(D==="instanceMatrix"&&Q.instanceMatrix&&(T=Q.instanceMatrix),D==="instanceColor"&&Q.instanceColor&&(T=Q.instanceColor)),T!==void 0){let V=T.normalized,J=T.itemSize,_=t.get(T);if(_===void 0)continue;let E=_.buffer,W=_.type,ee=_.bytesPerElement,N=i.isWebGL2===!0&&(W===r.INT||W===r.UNSIGNED_INT||T.gpuType===Qc);if(T.isInterleavedBufferAttribute){let $=T.data,H=$.stride,G=T.offset;if($.isInstancedInterleavedBuffer){for(let Y=0;Y<S.locationSize;Y++)p(S.location+Y,$.meshPerAttribute);Q.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Y=0;Y<S.locationSize;Y++)m(S.location+Y);r.bindBuffer(r.ARRAY_BUFFER,E);for(let Y=0;Y<S.locationSize;Y++)d(S.location+Y,J/S.locationSize,W,V,H*ee,(G+J/S.locationSize*Y)*ee,N)}else{if(T.isInstancedBufferAttribute){for(let $=0;$<S.locationSize;$++)p(S.location+$,T.meshPerAttribute);Q.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=T.meshPerAttribute*T.count)}else for(let $=0;$<S.locationSize;$++)m(S.location+$);r.bindBuffer(r.ARRAY_BUFFER,E);for(let $=0;$<S.locationSize;$++)d(S.location+$,J/S.locationSize,W,V,J*ee,J/S.locationSize*$*ee,N)}}else if(x!==void 0){let V=x[D];if(V!==void 0)switch(V.length){case 2:r.vertexAttrib2fv(S.location,V);break;case 3:r.vertexAttrib3fv(S.location,V);break;case 4:r.vertexAttrib4fv(S.location,V);break;default:r.vertexAttrib1fv(S.location,V)}}}}P()}(b,y,w,U),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))},reset:M,resetDefaultState:v,dispose:function(){M();for(let b in s){let y=s[b];for(let w in y){let U=y[w];for(let I in U)u(U[I].object),delete U[I];delete y[w]}delete s[b]}},releaseStatesOfGeometry:function(b){if(s[b.id]===void 0)return;let y=s[b.id];for(let w in y){let U=y[w];for(let I in U)u(U[I].object),delete U[I];delete y[w]}delete s[b.id]},releaseStatesOfProgram:function(b){for(let y in s){let w=s[y];if(w[b.id]===void 0)continue;let U=w[b.id];for(let I in U)u(U[I].object),delete U[I];delete w[b.id]}},initAttributes:g,enableAttribute:m,disableUnusedAttributes:P}}function wf(r,e,t,i){let n=i.isWebGL2,a;this.setMode=function(o){a=o},this.render=function(o,s){r.drawArrays(a,o,s),t.update(s,a,1)},this.renderInstances=function(o,s,l){if(l===0)return;let A,c;if(n)A=r,c="drawArraysInstanced";else if(A=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",A===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");A[c](a,o,s,l),t.update(s,a,l)},this.renderMultiDraw=function(o,s,l){if(l===0)return;let A=e.get("WEBGL_multi_draw");if(A===null)for(let c=0;c<l;c++)this.render(o[c],s[c]);else{A.multiDrawArraysWEBGL(a,o,0,s,0,l);let c=0;for(let h=0;h<l;h++)c+=s[h];t.update(c,a,1)}}}function Df(r,e,t){let i;function n(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",s=n(o);s!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",s,"instead."),o=s);let l=a||e.has("WEBGL_draw_buffers"),A=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),d=h>0,M=a||e.has("OES_texture_float");return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:o,logarithmicDepthBuffer:A,maxTextures:c,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:P,vertexTextures:d,floatFragmentTextures:M,floatVertexTextures:d&&M,maxSamples:a?r.getParameter(r.MAX_SAMPLES):0}}function _f(r){let e=this,t=null,i=0,n=!1,a=!1,o=new ni,s=new Ne,l={value:null,needsUpdate:!1};function A(c,h,u,f){let g=c!==null?c.length:0,m=null;if(g!==0){if(m=l.value,f!==!0||m===null){let p=u+4*g,P=h.matrixWorldInverse;s.getNormalMatrix(P),(m===null||m.length<p)&&(m=new Float32Array(p));for(let d=0,M=u;d!==g;++d,M+=4)o.copy(c[d]).applyMatrix4(P,s),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,h){let u=c.length!==0||h||i!==0||n;return n=h,i=c.length,u},this.beginShadows=function(){a=!0,A(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(c,h){t=A(c,h,0)},this.setState=function(c,h,u){let f=c.clippingPlanes,g=c.clipIntersection,m=c.clipShadows,p=r.get(c);if(!n||f===null||f.length===0||a&&!m)a?A(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let P=a?0:i,d=4*P,M=p.clippingState||null;l.value=M,M=A(f,h,d,u);for(let v=0;v!==d;++v)M[v]=t[v];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=P}}}function Ef(r){let e=new WeakMap;function t(n,a){return a===Js?n.mapping=kn:a===Ks&&(n.mapping=Vn),n}function i(n){let a=n.target;a.removeEventListener("dispose",i);let o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}return{get:function(n){if(n&&n.isTexture){let a=n.mapping;if(a===Js||a===Ks){if(e.has(n))return t(e.get(n).texture,n.mapping);{let o=n.image;if(o&&o.height>0){let s=new oA(o.height/2);return s.fromEquirectangularTexture(r,n),e.set(n,s),n.addEventListener("dispose",i),t(s.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}function lc(r,e,t){let i=new gt(r,e,t);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ba(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function cc(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function uc(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function Bf(r){let e=new WeakMap,t=null;function i(n){let a=n.target;a.removeEventListener("dispose",i);let o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}return{get:function(n){if(n&&n.isTexture){let a=n.mapping,o=a===Js||a===Ks,s=a===kn||a===Vn;if(o||s){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=e.get(n);return t===null&&(t=new eo(r)),l=o?t.fromEquirectangular(n,l):t.fromCubemap(n,l),e.set(n,l),l.texture}if(e.has(n))return e.get(n).texture;{let l=n.image;if(o&&l&&l.height>0||s&&l&&function(A){let c=0,h=6;for(let u=0;u<h;u++)A[u]!==void 0&&c++;return c===h}(l)){t===null&&(t=new eo(r));let A=o?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,A),n.addEventListener("dispose",i),A.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Sf(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Cf(r,e,t,i){let n={},a=new WeakMap;function o(l){let A=l.target;A.index!==null&&e.remove(A.index);for(let h in A.attributes)e.remove(A.attributes[h]);for(let h in A.morphAttributes){let u=A.morphAttributes[h];for(let f=0,g=u.length;f<g;f++)e.remove(u[f])}A.removeEventListener("dispose",o),delete n[A.id];let c=a.get(A);c&&(e.remove(c),a.delete(A)),i.releaseStatesOfGeometry(A),A.isInstancedBufferGeometry===!0&&delete A._maxInstanceCount,t.memory.geometries--}function s(l){let A=[],c=l.index,h=l.attributes.position,u=0;if(c!==null){let m=c.array;u=c.version;for(let p=0,P=m.length;p<P;p+=3){let d=m[p+0],M=m[p+1],v=m[p+2];A.push(d,M,M,v,v,d)}}else{if(h===void 0)return;{let m=h.array;u=h.version;for(let p=0,P=m.length/3-1;p<P;p+=3){let d=p+0,M=p+1,v=p+2;A.push(d,M,M,v,v,d)}}}let f=new(Jc(A)?Za:Ka)(A,1);f.version=u;let g=a.get(l);g&&e.remove(g),a.set(l,f)}return{get:function(l,A){return n[A.id]===!0||(A.addEventListener("dispose",o),n[A.id]=!0,t.memory.geometries++),A},update:function(l){let A=l.attributes;for(let h in A)e.update(A[h],r.ARRAY_BUFFER);let c=l.morphAttributes;for(let h in c){let u=c[h];for(let f=0,g=u.length;f<g;f++)e.update(u[f],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let A=a.get(l);if(A){let c=l.index;c!==null&&A.version<c.version&&s(l)}else s(l);return a.get(l)}}}function Tf(r,e,t,i){let n=i.isWebGL2,a,o,s;this.setMode=function(l){a=l},this.setIndex=function(l){o=l.type,s=l.bytesPerElement},this.render=function(l,A){r.drawElements(a,A,o,l*s),t.update(A,a,1)},this.renderInstances=function(l,A,c){if(c===0)return;let h,u;if(n)h=r,u="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",h===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[u](a,A,o,l*s,c),t.update(A,a,c)},this.renderMultiDraw=function(l,A,c){if(c===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<c;u++)this.render(l[u]/s,A[u]);else{h.multiDrawElementsWEBGL(a,A,0,o,l,0,c);let u=0;for(let f=0;f<c;f++)u+=A[f];t.update(u,a,1)}}}function If(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Lf(r,e){return r[0]-e[0]}function Rf(r,e){return Math.abs(e[1])-Math.abs(r[1])}function zf(r,e,t){let i={},n=new Float32Array(8),a=new WeakMap,o=new Ke,s=[];for(let l=0;l<8;l++)s[l]=[l,0];return{update:function(l,A,c){let h=l.morphTargetInfluences;if(e.isWebGL2===!0){let u=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,f=u!==void 0?u.length:0,g=a.get(A);if(g===void 0||g.count!==f){let k=function(){Q.dispose(),a.delete(A),A.removeEventListener("dispose",k)};g!==void 0&&g.texture.dispose();let P=A.morphAttributes.position!==void 0,d=A.morphAttributes.normal!==void 0,M=A.morphAttributes.color!==void 0,v=A.morphAttributes.position||[],b=A.morphAttributes.normal||[],y=A.morphAttributes.color||[],w=0;P===!0&&(w=1),d===!0&&(w=2),M===!0&&(w=3);let U=A.attributes.position.count*w,I=1;U>e.maxTextureSize&&(I=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);let z=new Float32Array(U*I*4*f),Q=new qa(z,U,I,f);Q.type=Oi,Q.needsUpdate=!0;let R=4*w;for(let X=0;X<f;X++){let ae=v[X],ue=b[X],x=y[X],D=U*I*4*X;for(let S=0;S<ae.count;S++){let T=S*R;P===!0&&(o.fromBufferAttribute(ae,S),z[D+T+0]=o.x,z[D+T+1]=o.y,z[D+T+2]=o.z,z[D+T+3]=0),d===!0&&(o.fromBufferAttribute(ue,S),z[D+T+4]=o.x,z[D+T+5]=o.y,z[D+T+6]=o.z,z[D+T+7]=0),M===!0&&(o.fromBufferAttribute(x,S),z[D+T+8]=o.x,z[D+T+9]=o.y,z[D+T+10]=o.z,z[D+T+11]=x.itemSize===4?o.w:1)}}g={count:f,texture:Q,size:new oe(U,I)},a.set(A,g),A.addEventListener("dispose",k)}let m=0;for(let P=0;P<h.length;P++)m+=h[P];let p=A.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",p),c.getUniforms().setValue(r,"morphTargetInfluences",h),c.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{let u=h===void 0?0:h.length,f=i[A.id];if(f===void 0||f.length!==u){f=[];for(let d=0;d<u;d++)f[d]=[d,0];i[A.id]=f}for(let d=0;d<u;d++){let M=f[d];M[0]=d,M[1]=h[d]}f.sort(Rf);for(let d=0;d<8;d++)d<u&&f[d][1]?(s[d][0]=f[d][0],s[d][1]=f[d][1]):(s[d][0]=Number.MAX_SAFE_INTEGER,s[d][1]=0);s.sort(Lf);let g=A.morphAttributes.position,m=A.morphAttributes.normal,p=0;for(let d=0;d<8;d++){let M=s[d],v=M[0],b=M[1];v!==Number.MAX_SAFE_INTEGER&&b?(g&&A.getAttribute("morphTarget"+d)!==g[v]&&A.setAttribute("morphTarget"+d,g[v]),m&&A.getAttribute("morphNormal"+d)!==m[v]&&A.setAttribute("morphNormal"+d,m[v]),n[d]=b,p+=b):(g&&A.hasAttribute("morphTarget"+d)===!0&&A.deleteAttribute("morphTarget"+d),m&&A.hasAttribute("morphNormal"+d)===!0&&A.deleteAttribute("morphNormal"+d),n[d]=0)}let P=A.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",P),c.getUniforms().setValue(r,"morphTargetInfluences",n)}}}}function Uf(r,e,t,i){let n=new WeakMap;function a(o){let s=o.target;s.removeEventListener("dispose",a),t.remove(s.instanceMatrix),s.instanceColor!==null&&t.remove(s.instanceColor)}return{update:function(o){let s=i.render.frame,l=o.geometry,A=e.get(o,l);if(n.get(A)!==s&&(e.update(A),n.set(A,s)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),n.get(o)!==s&&(t.update(o.instanceMatrix,r.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,r.ARRAY_BUFFER),n.set(o,s))),o.isSkinnedMesh){let c=o.skeleton;n.get(c)!==s&&(c.update(),n.set(c,s))}return A},dispose:function(){n=new WeakMap}}}function ir(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,a=hc[n];if(a===void 0&&(a=new Float32Array(n),hc[n]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,r[o].toArray(a,s)}return a}function mt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function vt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function fo(r,e){let t=fc[e];t===void 0&&(t=new Int32Array(e),fc[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Of(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Nf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2fv(this.addr,e),vt(t,e)}}function Ff(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;r.uniform3fv(this.addr,e),vt(t,e)}}function Hf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4fv(this.addr,e),vt(t,e)}}function Qf(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(mt(t,i))return;gc.set(i),r.uniformMatrix2fv(this.addr,!1,gc),vt(t,i)}}function Gf(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(mt(t,i))return;dc.set(i),r.uniformMatrix3fv(this.addr,!1,dc),vt(t,i)}}function kf(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(mt(t,i))return;pc.set(i),r.uniformMatrix4fv(this.addr,!1,pc),vt(t,i)}}function Vf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Wf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2iv(this.addr,e),vt(t,e)}}function Xf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;r.uniform3iv(this.addr,e),vt(t,e)}}function Yf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4iv(this.addr,e),vt(t,e)}}function jf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2uiv(this.addr,e),vt(t,e)}}function Jf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;r.uniform3uiv(this.addr,e),vt(t,e)}}function Kf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4uiv(this.addr,e),vt(t,e)}}function Zf(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let a=this.type===r.SAMPLER_2D_SHADOW?tu:eu;t.setTexture2D(e||a,n)}function $f(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||nu,n)}function ep(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ru,n)}function tp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||iu,n)}function ip(r,e){r.uniform1fv(this.addr,e)}function np(r,e){let t=ir(e,this.size,2);r.uniform2fv(this.addr,t)}function rp(r,e){let t=ir(e,this.size,3);r.uniform3fv(this.addr,t)}function ap(r,e){let t=ir(e,this.size,4);r.uniform4fv(this.addr,t)}function op(r,e){let t=ir(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sp(r,e){let t=ir(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ap(r,e){let t=ir(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function lp(r,e){r.uniform1iv(this.addr,e)}function cp(r,e){r.uniform2iv(this.addr,e)}function up(r,e){r.uniform3iv(this.addr,e)}function hp(r,e){r.uniform4iv(this.addr,e)}function fp(r,e){r.uniform1uiv(this.addr,e)}function pp(r,e){r.uniform2uiv(this.addr,e)}function dp(r,e){r.uniform3uiv(this.addr,e)}function gp(r,e){r.uniform4uiv(this.addr,e)}function mp(r,e,t){let i=this.cache,n=e.length,a=fo(t,n);mt(i,a)||(r.uniform1iv(this.addr,a),vt(i,a));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||eu,a[o])}function vp(r,e,t){let i=this.cache,n=e.length,a=fo(t,n);mt(i,a)||(r.uniform1iv(this.addr,a),vt(i,a));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||nu,a[o])}function Mp(r,e,t){let i=this.cache,n=e.length,a=fo(t,n);mt(i,a)||(r.uniform1iv(this.addr,a),vt(i,a));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||ru,a[o])}function xp(r,e,t){let i=this.cache,n=e.length,a=fo(t,n);mt(i,a)||(r.uniform1iv(this.addr,a),vt(i,a));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||iu,a[o])}function mc(r,e){r.seq.push(e),r.map[e.id]=e}function Pp(r,e,t){let i=r.name,n=i.length;for(Hs.lastIndex=0;;){let a=Hs.exec(i),o=Hs.lastIndex,s=a[1],l=a[2]==="]",A=a[3];if(l&&(s|=0),A===void 0||A==="["&&o+2===n){mc(t,A===void 0?new sA(s,r,e):new AA(s,r,e));break}{let c=t.map[s];c===void 0&&(c=new lA(s),mc(t,c)),t=c}}}function vc(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}function Mc(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let a=/ERROR: 0:(\d+)/.exec(n);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+function(s,l){let A=s.split(`
`),c=[],h=Math.max(l-6,0),u=Math.min(l+6,A.length);for(let f=h;f<u;f++){let g=f+1;c.push(`${g===l?">":" "} ${g}: ${A[f]}`)}return c.join(`
`)}(r.getShaderSource(e),o)}return n}function wp(r,e){let t=function(i){let n=Je.getPrimaries(Je.workingColorSpace),a=Je.getPrimaries(i),o;switch(n===a?o="":n===Va&&a===ka?o="LinearDisplayP3ToLinearSRGB":n===ka&&a===Va&&(o="LinearSRGBToLinearDisplayP3"),i){case Di:case ho:return[o,"LinearTransferOETF"];case At:case el:return[o,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[o,"LinearTransferOETF"]}}(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dp(r,e){let t;switch(e){case qh:t="Linear";break;case Jh:t="Reinhard";break;case Kh:t="OptimizedCineon";break;case Zh:t="ACESFilmic";break;case ef:t="AgX";break;case $h:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fn(r){return r!==""}function xc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function cA(r){return r.replace(_p,Bp)}function Bp(r,e){let t=ze[e];if(t===void 0){let i=Ep.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return cA(t)}function yc(r){return r.replace(Sp,Cp)}function Cp(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function bc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tp(r,e,t,i){let n=r.getContext(),a=t.defines,o=t.vertexShader,s=t.fragmentShader,l=function(R){let k="SHADOWMAP_TYPE_BASIC";return R.shadowMapType===Oc?k="SHADOWMAP_TYPE_PCF":R.shadowMapType===ZA?k="SHADOWMAP_TYPE_PCF_SOFT":R.shadowMapType===wi&&(k="SHADOWMAP_TYPE_VSM"),k}(t),A=function(R){let k="ENVMAP_TYPE_CUBE";if(R.envMap)switch(R.envMapMode){case kn:case Vn:k="ENVMAP_TYPE_CUBE";break;case uo:k="ENVMAP_TYPE_CUBE_UV"}return k}(t),c=function(R){let k="ENVMAP_MODE_REFLECTION";return R.envMap&&R.envMapMode===Vn&&(k="ENVMAP_MODE_REFRACTION"),k}(t),h=function(R){let k="ENVMAP_BLENDING_NONE";if(R.envMap)switch(R.combine){case Fc:k="ENVMAP_BLENDING_MULTIPLY";break;case Yh:k="ENVMAP_BLENDING_MIX";break;case jh:k="ENVMAP_BLENDING_ADD"}return k}(t),u=function(R){let k=R.envMapCubeUVHeight;if(k===null)return null;let X=Math.log2(k)-2,ae=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,X),112)),texelHeight:ae,maxMip:X}}(t),f=t.isWebGL2?"":function(R){return[R.extensionDerivatives||R.envMapCubeUVHeight||R.bumpMap||R.normalMapTangentSpace||R.clearcoatNormalMap||R.flatShading||R.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(R.extensionFragDepth||R.logarithmicDepthBuffer)&&R.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",R.extensionDrawBuffers&&R.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(R.extensionShaderTextureLOD||R.envMap||R.transmission)&&R.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fn).join(`
`)}(t),g=function(R){return[R.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Fn).join(`
`)}(t),m=function(R){let k=[];for(let X in R){let ae=R[X];ae!==!1&&k.push("#define "+X+" "+ae)}return k.join(`
`)}(a),p=n.createProgram(),P,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(P=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Fn).join(`
`),P.length>0&&(P+=`
`),d=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Fn).join(`
`),d.length>0&&(d+=`
`)):(P=[bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fn).join(`
`),d=[f,bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+A:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Dp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,wp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fn).join(`
`)),o=cA(o),o=xc(o,t),o=Pc(o,t),s=cA(s),s=xc(s,t),s=Pc(s,t),o=yc(o),s=yc(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,P=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+P,d=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===G0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===G0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=M+P+o,b=M+d+s,y=vc(n,n.VERTEX_SHADER,v),w=vc(n,n.FRAGMENT_SHADER,b);function U(R){if(r.debug.checkShaderErrors){let k=n.getProgramInfoLog(p).trim(),X=n.getShaderInfoLog(y).trim(),ae=n.getShaderInfoLog(w).trim(),ue=!0,x=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(ue=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,p,y,w);else{let D=Mc(n,y,"vertex"),S=Mc(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+D+`
`+S)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):X!==""&&ae!==""||(x=!1);x&&(R.diagnostics={runnable:ue,programLog:k,vertexShader:{log:X,prefix:P},fragmentShader:{log:ae,prefix:d}})}n.deleteShader(y),n.deleteShader(w),I=new Gn(n,p),z=function(k,X){let ae={},ue=k.getProgramParameter(X,k.ACTIVE_ATTRIBUTES);for(let x=0;x<ue;x++){let D=k.getActiveAttrib(X,x),S=D.name,T=1;D.type===k.FLOAT_MAT2&&(T=2),D.type===k.FLOAT_MAT3&&(T=3),D.type===k.FLOAT_MAT4&&(T=4),ae[S]={type:D.type,location:k.getAttribLocation(X,S),locationSize:T}}return ae}(n,p)}let I,z;n.attachShader(p,y),n.attachShader(p,w),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p),this.getUniforms=function(){return I===void 0&&U(this),I},this.getAttributes=function(){return z===void 0&&U(this),z};let Q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=n.getProgramParameter(p,yp)),Q},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=w,this}function Lp(r,e,t,i,n,a,o){let s=new Ja,l=new uA,A=[],c=n.isWebGL2,h=n.logarithmicDepthBuffer,u=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(p){return p===0?"uv":`uv${p}`}return{getParameters:function(p,P,d,M,v){let b=M.fog,y=v.geometry,w=p.isMeshStandardMaterial?M.environment:null,U=(p.isMeshStandardMaterial?t:e).get(p.envMap||w),I=U&&U.mapping===uo?U.image.height:null,z=g[p.type];p.precision!==null&&(f=n.getMaxPrecision(p.precision),f!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",f,"instead."));let Q=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,R=Q!==void 0?Q.length:0,k,X,ae,ue,x=0;if(y.morphAttributes.position!==void 0&&(x=1),y.morphAttributes.normal!==void 0&&(x=2),y.morphAttributes.color!==void 0&&(x=3),z){let Et=ui[z];k=Et.vertexShader,X=Et.fragmentShader}else k=p.vertexShader,X=p.fragmentShader,l.update(p),ae=l.getVertexShaderID(p),ue=l.getFragmentShaderID(p);let D=r.getRenderTarget(),S=v.isInstancedMesh===!0,T=v.isBatchedMesh===!0,V=!!p.map,J=!!p.matcap,_=!!U,E=!!p.aoMap,W=!!p.lightMap,ee=!!p.bumpMap,N=!!p.normalMap,$=!!p.displacementMap,H=!!p.emissiveMap,G=!!p.metalnessMap,Y=!!p.roughnessMap,re=p.anisotropy>0,ie=p.clearcoat>0,B=p.iridescence>0,se=p.sheen>0,j=p.transmission>0,q=re&&!!p.anisotropyMap,Ae=ie&&!!p.clearcoatMap,he=ie&&!!p.clearcoatNormalMap,de=ie&&!!p.clearcoatRoughnessMap,me=B&&!!p.iridescenceMap,Ie=B&&!!p.iridescenceThicknessMap,ve=se&&!!p.sheenColorMap,Me=se&&!!p.sheenRoughnessMap,Ue=!!p.specularMap,Mt=!!p.specularColorMap,be=!!p.specularIntensityMap,Xe=j&&!!p.transmissionMap,He=j&&!!p.thicknessMap,ta=!!p.gradientMap,yn=!!p.alphaMap,ia=p.alphaTest>0,Vt=!!p.alphaHash,Ht=!!p.extensions,bn=!!y.attributes.uv1,Z=!!y.attributes.uv2,na=!!y.attributes.uv3,hr=Ni;return p.toneMapped&&(D!==null&&D.isXRRenderTarget!==!0||(hr=r.toneMapping)),{isWebGL2:c,shaderID:z,shaderType:p.type,shaderName:p.name,vertexShader:k,fragmentShader:X,defines:p.defines,customVertexShaderID:ae,customFragmentShaderID:ue,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:f,batching:T,instancing:S,instancingColor:S&&v.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:D===null?r.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Di,map:V,matcap:J,envMap:_,envMapMode:_&&U.mapping,envMapCubeUVHeight:I,aoMap:E,lightMap:W,bumpMap:ee,normalMap:N,displacementMap:u&&$,emissiveMap:H,normalMapObjectSpace:N&&p.normalMapType===1,normalMapTangentSpace:N&&p.normalMapType===0,metalnessMap:G,roughnessMap:Y,anisotropy:re,anisotropyMap:q,clearcoat:ie,clearcoatMap:Ae,clearcoatNormalMap:he,clearcoatRoughnessMap:de,iridescence:B,iridescenceMap:me,iridescenceThicknessMap:Ie,sheen:se,sheenColorMap:ve,sheenRoughnessMap:Me,specularMap:Ue,specularColorMap:Mt,specularIntensityMap:be,transmission:j,transmissionMap:Xe,thicknessMap:He,gradientMap:ta,opaque:p.transparent===!1&&p.blending===1,alphaMap:yn,alphaTest:ia,alphaHash:Vt,combine:p.combine,mapUv:V&&m(p.map.channel),aoMapUv:E&&m(p.aoMap.channel),lightMapUv:W&&m(p.lightMap.channel),bumpMapUv:ee&&m(p.bumpMap.channel),normalMapUv:N&&m(p.normalMap.channel),displacementMapUv:$&&m(p.displacementMap.channel),emissiveMapUv:H&&m(p.emissiveMap.channel),metalnessMapUv:G&&m(p.metalnessMap.channel),roughnessMapUv:Y&&m(p.roughnessMap.channel),anisotropyMapUv:q&&m(p.anisotropyMap.channel),clearcoatMapUv:Ae&&m(p.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&m(p.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&m(p.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(p.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(p.sheenColorMap.channel),sheenRoughnessMapUv:Me&&m(p.sheenRoughnessMap.channel),specularMapUv:Ue&&m(p.specularMap.channel),specularColorMapUv:Mt&&m(p.specularColorMap.channel),specularIntensityMapUv:be&&m(p.specularIntensityMap.channel),transmissionMapUv:Xe&&m(p.transmissionMap.channel),thicknessMapUv:He&&m(p.thicknessMap.channel),alphaMapUv:yn&&m(p.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(N||re),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUv1s:bn,vertexUv2s:Z,vertexUv3s:na,pointsUvs:v.isPoints===!0&&!!y.attributes.uv&&(V||yn),fog:!!b,useFog:p.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:v.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:x,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:p.dithering,shadowMapEnabled:r.shadowMap.enabled&&d.length>0,shadowMapType:r.shadowMap.type,toneMapping:hr,useLegacyLights:r._useLegacyLights,decodeVideoTexture:V&&p.map.isVideoTexture===!0&&Je.getTransfer(p.map.colorSpace)===it,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===2,flipSided:p.side===Dt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionDerivatives:Ht&&p.extensions.derivatives===!0,extensionFragDepth:Ht&&p.extensions.fragDepth===!0,extensionDrawBuffers:Ht&&p.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ht&&p.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ht&&p.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()}},getProgramCacheKey:function(p){let P=[];if(p.shaderID?P.push(p.shaderID):(P.push(p.customVertexShaderID),P.push(p.customFragmentShaderID)),p.defines!==void 0)for(let d in p.defines)P.push(d),P.push(p.defines[d]);return p.isRawShaderMaterial===!1&&(function(d,M){d.push(M.precision),d.push(M.outputColorSpace),d.push(M.envMapMode),d.push(M.envMapCubeUVHeight),d.push(M.mapUv),d.push(M.alphaMapUv),d.push(M.lightMapUv),d.push(M.aoMapUv),d.push(M.bumpMapUv),d.push(M.normalMapUv),d.push(M.displacementMapUv),d.push(M.emissiveMapUv),d.push(M.metalnessMapUv),d.push(M.roughnessMapUv),d.push(M.anisotropyMapUv),d.push(M.clearcoatMapUv),d.push(M.clearcoatNormalMapUv),d.push(M.clearcoatRoughnessMapUv),d.push(M.iridescenceMapUv),d.push(M.iridescenceThicknessMapUv),d.push(M.sheenColorMapUv),d.push(M.sheenRoughnessMapUv),d.push(M.specularMapUv),d.push(M.specularColorMapUv),d.push(M.specularIntensityMapUv),d.push(M.transmissionMapUv),d.push(M.thicknessMapUv),d.push(M.combine),d.push(M.fogExp2),d.push(M.sizeAttenuation),d.push(M.morphTargetsCount),d.push(M.morphAttributeCount),d.push(M.numDirLights),d.push(M.numPointLights),d.push(M.numSpotLights),d.push(M.numSpotLightMaps),d.push(M.numHemiLights),d.push(M.numRectAreaLights),d.push(M.numDirLightShadows),d.push(M.numPointLightShadows),d.push(M.numSpotLightShadows),d.push(M.numSpotLightShadowsWithMaps),d.push(M.numLightProbes),d.push(M.shadowMapType),d.push(M.toneMapping),d.push(M.numClippingPlanes),d.push(M.numClipIntersection),d.push(M.depthPacking)}(P,p),function(d,M){s.disableAll(),M.isWebGL2&&s.enable(0),M.supportsVertexTextures&&s.enable(1),M.instancing&&s.enable(2),M.instancingColor&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUv1s&&s.enable(13),M.vertexUv2s&&s.enable(14),M.vertexUv3s&&s.enable(15),M.vertexTangents&&s.enable(16),M.anisotropy&&s.enable(17),M.alphaHash&&s.enable(18),M.batching&&s.enable(19),d.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.skinning&&s.enable(4),M.morphTargets&&s.enable(5),M.morphNormals&&s.enable(6),M.morphColors&&s.enable(7),M.premultipliedAlpha&&s.enable(8),M.shadowMapEnabled&&s.enable(9),M.useLegacyLights&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),d.push(s.mask)}(P,p),P.push(r.outputColorSpace)),P.push(p.customProgramCacheKey),P.join()},getUniforms:function(p){let P=g[p.type],d;if(P){let M=ui[P];d=tl.clone(M.uniforms)}else d=p.uniforms;return d},acquireProgram:function(p,P){let d;for(let M=0,v=A.length;M<v;M++){let b=A[M];if(b.cacheKey===P){d=b,++d.usedTimes;break}}return d===void 0&&(d=new Tp(r,P,p,a),A.push(d)),d},releaseProgram:function(p){if(--p.usedTimes==0){let P=A.indexOf(p);A[P]=A[A.length-1],A.pop(),p.destroy()}},releaseShaderCache:function(p){l.remove(p)},programs:A,dispose:function(){l.dispose()}}}function Rp(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function zp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function wc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Dc(){let r=[],e=0,t=[],i=[],n=[];function a(o,s,l,A,c,h){let u=r[e];return u===void 0?(u={id:o.id,object:o,geometry:s,material:l,groupOrder:A,renderOrder:o.renderOrder,z:c,group:h},r[e]=u):(u.id=o.id,u.object=o,u.geometry=s,u.material=l,u.groupOrder=A,u.renderOrder=o.renderOrder,u.z=c,u.group=h),e++,u}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(o,s,l,A,c,h){let u=a(o,s,l,A,c,h);l.transmission>0?i.push(u):l.transparent===!0?n.push(u):t.push(u)},unshift:function(o,s,l,A,c,h){let u=a(o,s,l,A,c,h);l.transmission>0?i.unshift(u):l.transparent===!0?n.unshift(u):t.unshift(u)},finish:function(){for(let o=e,s=r.length;o<s;o++){let l=r[o];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(o,s){t.length>1&&t.sort(o||zp),i.length>1&&i.sort(s||wc),n.length>1&&n.sort(s||wc)}}}function Up(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new Dc,r.set(e,[n])):t>=i.length?(n=new Dc,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Op(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ge};break;case"SpotLight":t={position:new C,direction:new C,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new C,halfWidth:new C,halfHeight:new C}}return r[e.id]=t,t}}}function Fp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Hp(r,e){let t=new Op,i=function(){let l={};return{get:function(A){if(l[A.id]!==void 0)return l[A.id];let c;switch(A.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3}}return l[A.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let a=new C,o=new xe,s=new xe;return{setup:function(l,A){let c=0,h=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,g=0,m=0,p=0,P=0,d=0,M=0,v=0,b=0,y=0,w=0;l.sort(Fp);let U=A===!0?Math.PI:1;for(let z=0,Q=l.length;z<Q;z++){let R=l[z],k=R.color,X=R.intensity,ae=R.distance,ue=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=k.r*X*U,h+=k.g*X*U,u+=k.b*X*U;else if(R.isLightProbe){for(let x=0;x<9;x++)n.probe[x].addScaledVector(R.sh.coefficients[x],X);w++}else if(R.isDirectionalLight){let x=t.get(R);if(x.color.copy(R.color).multiplyScalar(R.intensity*U),R.castShadow){let D=R.shadow,S=i.get(R);S.shadowBias=D.bias,S.shadowNormalBias=D.normalBias,S.shadowRadius=D.radius,S.shadowMapSize=D.mapSize,n.directionalShadow[f]=S,n.directionalShadowMap[f]=ue,n.directionalShadowMatrix[f]=R.shadow.matrix,d++}n.directional[f]=x,f++}else if(R.isSpotLight){let x=t.get(R);x.position.setFromMatrixPosition(R.matrixWorld),x.color.copy(k).multiplyScalar(X*U),x.distance=ae,x.coneCos=Math.cos(R.angle),x.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),x.decay=R.decay,n.spot[m]=x;let D=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,D.updateMatrices(R),R.castShadow&&y++),n.spotLightMatrix[m]=D.matrix,R.castShadow){let S=i.get(R);S.shadowBias=D.bias,S.shadowNormalBias=D.normalBias,S.shadowRadius=D.radius,S.shadowMapSize=D.mapSize,n.spotShadow[m]=S,n.spotShadowMap[m]=ue,v++}m++}else if(R.isRectAreaLight){let x=t.get(R);x.color.copy(k).multiplyScalar(X),x.halfWidth.set(.5*R.width,0,0),x.halfHeight.set(0,.5*R.height,0),n.rectArea[p]=x,p++}else if(R.isPointLight){let x=t.get(R);if(x.color.copy(R.color).multiplyScalar(R.intensity*U),x.distance=R.distance,x.decay=R.decay,R.castShadow){let D=R.shadow,S=i.get(R);S.shadowBias=D.bias,S.shadowNormalBias=D.normalBias,S.shadowRadius=D.radius,S.shadowMapSize=D.mapSize,S.shadowCameraNear=D.camera.near,S.shadowCameraFar=D.camera.far,n.pointShadow[g]=S,n.pointShadowMap[g]=ue,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=x,g++}else if(R.isHemisphereLight){let x=t.get(R);x.skyColor.copy(R.color).multiplyScalar(X*U),x.groundColor.copy(R.groundColor).multiplyScalar(X*U),n.hemi[P]=x,P++}}p>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=u;let I=n.hash;I.directionalLength===f&&I.pointLength===g&&I.spotLength===m&&I.rectAreaLength===p&&I.hemiLength===P&&I.numDirectionalShadows===d&&I.numPointShadows===M&&I.numSpotShadows===v&&I.numSpotMaps===b&&I.numLightProbes===w||(n.directional.length=f,n.spot.length=m,n.rectArea.length=p,n.point.length=g,n.hemi.length=P,n.directionalShadow.length=d,n.directionalShadowMap.length=d,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=d,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+b-y,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=w,I.directionalLength=f,I.pointLength=g,I.spotLength=m,I.rectAreaLength=p,I.hemiLength=P,I.numDirectionalShadows=d,I.numPointShadows=M,I.numSpotShadows=v,I.numSpotMaps=b,I.numLightProbes=w,n.version=Np++)},setupView:function(l,A){let c=0,h=0,u=0,f=0,g=0,m=A.matrixWorldInverse;for(let p=0,P=l.length;p<P;p++){let d=l[p];if(d.isDirectionalLight){let M=n.directional[c];M.direction.setFromMatrixPosition(d.matrixWorld),a.setFromMatrixPosition(d.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),c++}else if(d.isSpotLight){let M=n.spot[u];M.position.setFromMatrixPosition(d.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(d.matrixWorld),a.setFromMatrixPosition(d.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),u++}else if(d.isRectAreaLight){let M=n.rectArea[f];M.position.setFromMatrixPosition(d.matrixWorld),M.position.applyMatrix4(m),s.identity(),o.copy(d.matrixWorld),o.premultiply(m),s.extractRotation(o),M.halfWidth.set(.5*d.width,0,0),M.halfHeight.set(0,.5*d.height,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),f++}else if(d.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(d.matrixWorld),M.position.applyMatrix4(m),h++}else if(d.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(d.matrixWorld),M.direction.transformDirection(m),g++}}},state:n}}function _c(r,e){let t=new Hp(r,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(a){t.setup(i,a)},setupLightsView:function(a){t.setupView(i,a)},pushLight:function(a){i.push(a)},pushShadow:function(a){n.push(a)}}}function Qp(r,e){let t=new WeakMap;return{get:function(i,n=0){let a=t.get(i),o;return a===void 0?(o=new _c(r,e),t.set(i,[o])):n>=a.length?(o=new _c(r,e),a.push(o)):o=a[n],o},dispose:function(){t=new WeakMap}}}function Gp(r,e,t){let i=new qn,n=new oe,a=new oe,o=new Ke,s=new fA({depthPacking:3201}),l=new pA,A={},c=t.maxTextureSize,h={[Hi]:Dt,[Dt]:Hi,2:2},u=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:`void main() {
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
}`}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ge;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Ze(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let P=this.type;function d(y,w){let U=e.update(m);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new gt(n.x,n.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(w,null,U,u,m,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(w,null,U,f,m,null)}function M(y,w,U,I){let z=null,Q=U.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(Q!==void 0)z=Q;else if(z=U.isPointLight===!0?l:s,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let R=z.uuid,k=w.uuid,X=A[R];X===void 0&&(X={},A[R]=X);let ae=X[k];ae===void 0&&(ae=z.clone(),X[k]=ae,w.addEventListener("dispose",b)),z=ae}return z.visible=w.visible,z.wireframe=w.wireframe,z.side=I===wi?w.shadowSide!==null?w.shadowSide:w.side:w.shadowSide!==null?w.shadowSide:h[w.side],z.alphaMap=w.alphaMap,z.alphaTest=w.alphaTest,z.map=w.map,z.clipShadows=w.clipShadows,z.clippingPlanes=w.clippingPlanes,z.clipIntersection=w.clipIntersection,z.displacementMap=w.displacementMap,z.displacementScale=w.displacementScale,z.displacementBias=w.displacementBias,z.wireframeLinewidth=w.wireframeLinewidth,z.linewidth=w.linewidth,U.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(r.properties.get(z).light=U),z}function v(y,w,U,I,z){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&z===wi)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,y.matrixWorld);let R=e.update(y),k=y.material;if(Array.isArray(k)){let X=R.groups;for(let ae=0,ue=X.length;ae<ue;ae++){let x=X[ae],D=k[x.materialIndex];if(D&&D.visible){let S=M(y,D,I,z);y.onBeforeShadow(r,y,w,U,R,S,x),r.renderBufferDirect(U,null,R,S,y,x),y.onAfterShadow(r,y,w,U,R,S,x)}}}else if(k.visible){let X=M(y,k,I,z);y.onBeforeShadow(r,y,w,U,R,X,null),r.renderBufferDirect(U,null,R,X,y,null),y.onAfterShadow(r,y,w,U,R,X,null)}}let Q=y.children;for(let R=0,k=Q.length;R<k;R++)v(Q[R],w,U,I,z)}function b(y){y.target.removeEventListener("dispose",b);for(let w in A){let U=A[w],I=y.target.uuid;I in U&&(U[I].dispose(),delete U[I])}}this.render=function(y,w,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;let I=r.getRenderTarget(),z=r.getActiveCubeFace(),Q=r.getActiveMipmapLevel(),R=r.state;R.setBlending(0),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let k=P!==wi&&this.type===wi,X=P===wi&&this.type!==wi;for(let ae=0,ue=y.length;ae<ue;ae++){let x=y[ae],D=x.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",x,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;n.copy(D.mapSize);let S=D.getFrameExtents();if(n.multiply(S),a.copy(D.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(a.x=Math.floor(c/S.x),n.x=a.x*S.x,D.mapSize.x=a.x),n.y>c&&(a.y=Math.floor(c/S.y),n.y=a.y*S.y,D.mapSize.y=a.y)),D.map===null||k===!0||X===!0){let V=this.type!==wi?{minFilter:yt,magFilter:yt}:{};D.map!==null&&D.map.dispose(),D.map=new gt(n.x,n.y,V),D.map.texture.name=x.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();let T=D.getViewportCount();for(let V=0;V<T;V++){let J=D.getViewport(V);o.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),R.viewport(o),D.updateMatrices(x,V),i=D.getFrustum(),v(w,U,D.camera,x,this.type)}D.isPointLightShadow!==!0&&this.type===wi&&d(D,U),D.needsUpdate=!1}P=this.type,p.needsUpdate=!1,r.setRenderTarget(I,z,Q)}}function kp(r,e,t){let i=t.isWebGL2,n=new function(){let B=!1,se=new Ke,j=null,q=new Ke(0,0,0,0);return{setMask:function(Ae){j===Ae||B||(r.colorMask(Ae,Ae,Ae,Ae),j=Ae)},setLocked:function(Ae){B=Ae},setClear:function(Ae,he,de,me,Ie){Ie===!0&&(Ae*=me,he*=me,de*=me),se.set(Ae,he,de,me),q.equals(se)===!1&&(r.clearColor(Ae,he,de,me),q.copy(se))},reset:function(){B=!1,j=null,q.set(-1,0,0,0)}}},a=new function(){let B=!1,se=null,j=null,q=null;return{setTest:function(Ae){Ae?ee(r.DEPTH_TEST):N(r.DEPTH_TEST)},setMask:function(Ae){se===Ae||B||(r.depthMask(Ae),se=Ae)},setFunc:function(Ae){if(j!==Ae){switch(Ae){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}j=Ae}},setLocked:function(Ae){B=Ae},setClear:function(Ae){q!==Ae&&(r.clearDepth(Ae),q=Ae)},reset:function(){B=!1,se=null,j=null,q=null}}},o=new function(){let B=!1,se=null,j=null,q=null,Ae=null,he=null,de=null,me=null,Ie=null;return{setTest:function(ve){B||(ve?ee(r.STENCIL_TEST):N(r.STENCIL_TEST))},setMask:function(ve){se===ve||B||(r.stencilMask(ve),se=ve)},setFunc:function(ve,Me,Ue){j===ve&&q===Me&&Ae===Ue||(r.stencilFunc(ve,Me,Ue),j=ve,q=Me,Ae=Ue)},setOp:function(ve,Me,Ue){he===ve&&de===Me&&me===Ue||(r.stencilOp(ve,Me,Ue),he=ve,de=Me,me=Ue)},setLocked:function(ve){B=ve},setClear:function(ve){Ie!==ve&&(r.clearStencil(ve),Ie=ve)},reset:function(){B=!1,se=null,j=null,q=null,Ae=null,he=null,de=null,me=null,Ie=null}}},s=new WeakMap,l=new WeakMap,A={},c={},h=new WeakMap,u=[],f=null,g=!1,m=null,p=null,P=null,d=null,M=null,v=null,b=null,y=new ge(0,0,0),w=0,U=!1,I=null,z=null,Q=null,R=null,k=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ae=!1,ue=0,x=r.getParameter(r.VERSION);x.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(x)[1]),ae=ue>=1):x.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(x)[1]),ae=ue>=2);let D=null,S={},T=r.getParameter(r.SCISSOR_BOX),V=r.getParameter(r.VIEWPORT),J=new Ke().fromArray(T),_=new Ke().fromArray(V);function E(B,se,j,q){let Ae=new Uint8Array(4),he=r.createTexture();r.bindTexture(B,he),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<j;de++)!i||B!==r.TEXTURE_3D&&B!==r.TEXTURE_2D_ARRAY?r.texImage2D(se+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage3D(se,0,r.RGBA,1,1,q,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return he}let W={};function ee(B){A[B]!==!0&&(r.enable(B),A[B]=!0)}function N(B){A[B]!==!1&&(r.disable(B),A[B]=!1)}W[r.TEXTURE_2D]=E(r.TEXTURE_2D,r.TEXTURE_2D,1),W[r.TEXTURE_CUBE_MAP]=E(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(W[r.TEXTURE_2D_ARRAY]=E(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),W[r.TEXTURE_3D]=E(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),n.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(3),Y(!1),re(1),ee(r.CULL_FACE),G(0);let $={[rn]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(i)$[103]=r.MIN,$[104]=r.MAX;else{let B=e.get("EXT_blend_minmax");B!==null&&($[103]=B.MIN_EXT,$[104]=B.MAX_EXT)}let H={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[js]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[qs]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function G(B,se,j,q,Ae,he,de,me,Ie,ve){if(B!==0){if(g===!1&&(ee(r.BLEND),g=!0),B===5)Ae=Ae||se,he=he||j,de=de||q,se===p&&Ae===M||(r.blendEquationSeparate($[se],$[Ae]),p=se,M=Ae),j===P&&q===d&&he===v&&de===b||(r.blendFuncSeparate(H[j],H[q],H[he],H[de]),P=j,d=q,v=he,b=de),me.equals(y)!==!1&&Ie===w||(r.blendColor(me.r,me.g,me.b,Ie),y.copy(me),w=Ie),m=B,U=!1;else if(B!==m||ve!==U){if(p===rn&&M===rn||(r.blendEquation(r.FUNC_ADD),p=rn,M=rn),ve)switch(B){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B)}else switch(B){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B)}P=null,d=null,v=null,b=null,y.set(0,0,0),w=0,m=B,U=ve}}else g===!0&&(N(r.BLEND),g=!1)}function Y(B){I!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),I=B)}function re(B){B!==0?(ee(r.CULL_FACE),B!==z&&(B===1?r.cullFace(r.BACK):B===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):N(r.CULL_FACE),z=B}function ie(B,se,j){B?(ee(r.POLYGON_OFFSET_FILL),R===se&&k===j||(r.polygonOffset(se,j),R=se,k=j)):N(r.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:a,stencil:o},enable:ee,disable:N,bindFramebuffer:function(B,se){return c[B]!==se&&(r.bindFramebuffer(B,se),c[B]=se,i&&(B===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=se),B===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=se)),!0)},drawBuffers:function(B,se){let j=u,q=!1;if(B)if(j=h.get(se),j===void 0&&(j=[],h.set(se,j)),B.isWebGLMultipleRenderTargets){let Ae=B.texture;if(j.length!==Ae.length||j[0]!==r.COLOR_ATTACHMENT0){for(let he=0,de=Ae.length;he<de;he++)j[he]=r.COLOR_ATTACHMENT0+he;j.length=Ae.length,q=!0}}else j[0]!==r.COLOR_ATTACHMENT0&&(j[0]=r.COLOR_ATTACHMENT0,q=!0);else j[0]!==r.BACK&&(j[0]=r.BACK,q=!0);q&&(t.isWebGL2?r.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))},useProgram:function(B){return f!==B&&(r.useProgram(B),f=B,!0)},setBlending:G,setMaterial:function(B,se){B.side===2?N(r.CULL_FACE):ee(r.CULL_FACE);let j=B.side===Dt;se&&(j=!j),Y(j),B.blending===1&&B.transparent===!1?G(0):G(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),n.setMask(B.colorWrite);let q=B.stencilWrite;o.setTest(q),q&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ie(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):N(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:Y,setCullFace:re,setLineWidth:function(B){B!==Q&&(ae&&r.lineWidth(B),Q=B)},setPolygonOffset:ie,setScissorTest:function(B){B?ee(r.SCISSOR_TEST):N(r.SCISSOR_TEST)},activeTexture:function(B){B===void 0&&(B=r.TEXTURE0+X-1),D!==B&&(r.activeTexture(B),D=B)},bindTexture:function(B,se,j){j===void 0&&(j=D===null?r.TEXTURE0+X-1:D);let q=S[j];q===void 0&&(q={type:void 0,texture:void 0},S[j]=q),q.type===B&&q.texture===se||(D!==j&&(r.activeTexture(j),D=j),r.bindTexture(B,se||W[B]),q.type=B,q.texture=se)},unbindTexture:function(){let B=S[D];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}},updateUBOMapping:function(B,se){let j=l.get(se);j===void 0&&(j=new WeakMap,l.set(se,j));let q=j.get(B);q===void 0&&(q=r.getUniformBlockIndex(se,B.name),j.set(B,q))},uniformBlockBinding:function(B,se){let j=l.get(se).get(B);s.get(se)!==j&&(r.uniformBlockBinding(se,j,B.__bindingPointIndex),s.set(se,j))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}},scissor:function(B){J.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),J.copy(B))},viewport:function(B){_.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),_.copy(B))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),A={},D=null,S={},c={},h=new WeakMap,u=[],f=null,g=!1,m=null,p=null,P=null,d=null,M=null,v=null,b=null,y=new ge(0,0,0),w=0,U=!1,I=null,z=null,Q=null,R=null,k=null,J.set(0,0,r.canvas.width,r.canvas.height),_.set(0,0,r.canvas.width,r.canvas.height),n.reset(),a.reset(),o.reset()}}}function Vp(r,e,t,i,n,a,o){let s=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,h,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(_,E){return f?new OffscreenCanvas(_,E):Xa("canvas")}function m(_,E,W,ee){let N=1;if((_.width>ee||_.height>ee)&&(N=ee/Math.max(_.width,_.height)),N<1||E===!0){if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap){let $=E?iA:Math.floor,H=$(N*_.width),G=$(N*_.height);h===void 0&&(h=g(H,G));let Y=W?g(H,G):h;return Y.width=H,Y.height=G,Y.getContext("2d").drawImage(_,0,0,H,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+H+"x"+G+")."),Y}return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_}return _}function p(_){return k0(_.width)&&k0(_.height)}function P(_,E){return _.generateMipmaps&&E&&_.minFilter!==yt&&_.minFilter!==Pt}function d(_){r.generateMipmap(_)}function M(_,E,W,ee,N=!1){if(s===!1)return E;if(_!==null){if(r[_]!==void 0)return r[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let $=E;if(E===r.RED&&(W===r.FLOAT&&($=r.R32F),W===r.HALF_FLOAT&&($=r.R16F),W===r.UNSIGNED_BYTE&&($=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&($=r.R8UI),W===r.UNSIGNED_SHORT&&($=r.R16UI),W===r.UNSIGNED_INT&&($=r.R32UI),W===r.BYTE&&($=r.R8I),W===r.SHORT&&($=r.R16I),W===r.INT&&($=r.R32I)),E===r.RG&&(W===r.FLOAT&&($=r.RG32F),W===r.HALF_FLOAT&&($=r.RG16F),W===r.UNSIGNED_BYTE&&($=r.RG8)),E===r.RGBA){let H=N?Ga:Je.getTransfer(ee);W===r.FLOAT&&($=r.RGBA32F),W===r.HALF_FLOAT&&($=r.RGBA16F),W===r.UNSIGNED_BYTE&&($=H===it?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return $!==r.R16F&&$!==r.R32F&&$!==r.RG16F&&$!==r.RG32F&&$!==r.RGBA16F&&$!==r.RGBA32F||e.get("EXT_color_buffer_float"),$}function v(_,E,W){return P(_,W)===!0||_.isFramebufferTexture&&_.minFilter!==yt&&_.minFilter!==Pt?Math.log2(Math.max(E.width,E.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?E.mipmaps.length:1}function b(_){return _===yt||_===h0||_===us?r.NEAREST:r.LINEAR}function y(_){let E=_.target;E.removeEventListener("dispose",y),function(W){let ee=i.get(W);if(ee.__webglInit===void 0)return;let N=W.source,$=u.get(N);if($){let H=$[ee.__cacheKey];H.usedTimes--,H.usedTimes===0&&U(W),Object.keys($).length===0&&u.delete(N)}i.remove(W)}(E),E.isVideoTexture&&c.delete(E)}function w(_){let E=_.target;E.removeEventListener("dispose",w),function(W){let ee=W.texture,N=i.get(W),$=i.get(ee);if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),o.memory.textures--),W.depthTexture&&W.depthTexture.dispose(),W.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(N.__webglFramebuffer[H]))for(let G=0;G<N.__webglFramebuffer[H].length;G++)r.deleteFramebuffer(N.__webglFramebuffer[H][G]);else r.deleteFramebuffer(N.__webglFramebuffer[H]);N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer[H])}else{if(Array.isArray(N.__webglFramebuffer))for(let H=0;H<N.__webglFramebuffer.length;H++)r.deleteFramebuffer(N.__webglFramebuffer[H]);else r.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&r.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let H=0;H<N.__webglColorRenderbuffer.length;H++)N.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(N.__webglColorRenderbuffer[H]);N.__webglDepthRenderbuffer&&r.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(W.isWebGLMultipleRenderTargets)for(let H=0,G=ee.length;H<G;H++){let Y=i.get(ee[H]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(ee[H])}i.remove(ee),i.remove(W)}(E)}function U(_){let E=i.get(_);r.deleteTexture(E.__webglTexture);let W=_.source;delete u.get(W)[E.__cacheKey],o.memory.textures--}let I=0;function z(_,E){let W=i.get(_);if(_.isVideoTexture&&function(ee){let N=o.render.frame;c.get(ee)!==N&&(c.set(ee,N),ee.update())}(_),_.isRenderTargetTexture===!1&&_.version>0&&W.__version!==_.version){let ee=_.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(ee.complete!==!1)return void ue(W,_,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}let Q={[Zs]:r.REPEAT,[ri]:r.CLAMP_TO_EDGE,[$s]:r.MIRRORED_REPEAT},R={[yt]:r.NEAREST,[h0]:r.NEAREST_MIPMAP_NEAREST,[us]:r.NEAREST_MIPMAP_LINEAR,[Pt]:r.LINEAR,[tf]:r.LINEAR_MIPMAP_NEAREST,[Fa]:r.LINEAR_MIPMAP_LINEAR},k={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function X(_,E,W){if(W?(r.texParameteri(_,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(_,r.TEXTURE_WRAP_T,Q[E.wrapT]),_!==r.TEXTURE_3D&&_!==r.TEXTURE_2D_ARRAY||r.texParameteri(_,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(_,r.TEXTURE_MAG_FILTER,R[E.magFilter]),r.texParameteri(_,r.TEXTURE_MIN_FILTER,R[E.minFilter])):(r.texParameteri(_,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(_,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),_!==r.TEXTURE_3D&&_!==r.TEXTURE_2D_ARRAY||r.texParameteri(_,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),E.wrapS===ri&&E.wrapT===ri||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(_,r.TEXTURE_MAG_FILTER,b(E.magFilter)),r.texParameteri(_,r.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==yt&&E.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(_,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(_,r.TEXTURE_COMPARE_FUNC,k[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===yt||E.minFilter!==us&&E.minFilter!==Fa||E.type===Oi&&e.has("OES_texture_float_linear")===!1||s===!1&&E.type===Qi&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(r.texParameterf(_,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function ae(_,E){let W=!1;_.__webglInit===void 0&&(_.__webglInit=!0,E.addEventListener("dispose",y));let ee=E.source,N=u.get(ee);N===void 0&&(N={},u.set(ee,N));let $=function(H){let G=[];return G.push(H.wrapS),G.push(H.wrapT),G.push(H.wrapR||0),G.push(H.magFilter),G.push(H.minFilter),G.push(H.anisotropy),G.push(H.internalFormat),G.push(H.format),G.push(H.type),G.push(H.generateMipmaps),G.push(H.premultiplyAlpha),G.push(H.flipY),G.push(H.unpackAlignment),G.push(H.colorSpace),G.join()}(E);if($!==_.__cacheKey){N[$]===void 0&&(N[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),N[$].usedTimes++;let H=N[_.__cacheKey];H!==void 0&&(N[_.__cacheKey].usedTimes--,H.usedTimes===0&&U(E)),_.__cacheKey=$,_.__webglTexture=N[$].texture}return W}function ue(_,E,W){let ee=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=r.TEXTURE_3D);let N=ae(_,E),$=E.source;t.bindTexture(ee,_.__webglTexture,r.TEXTURE0+W);let H=i.get($);if($.version!==H.__version||N===!0){t.activeTexture(r.TEXTURE0+W);let G=Je.getPrimaries(Je.workingColorSpace),Y=E.colorSpace===hi?null:Je.getPrimaries(E.colorSpace),re=E.colorSpace===hi||G===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ie=function(Me){return!s&&(Me.wrapS!==ri||Me.wrapT!==ri||Me.minFilter!==yt&&Me.minFilter!==Pt)}(E)&&p(E.image)===!1,B=m(E.image,ie,!1,n.maxTextureSize);B=J(E,B);let se=p(B)||s,j=a.convert(E.format,E.colorSpace),q,Ae=a.convert(E.type),he=M(E.internalFormat,j,Ae,E.colorSpace,E.isVideoTexture);X(ee,E,se);let de=E.mipmaps,me=s&&E.isVideoTexture!==!0&&he!==jc,Ie=H.__version===void 0||N===!0,ve=v(E,B,se);if(E.isDepthTexture)he=r.DEPTH_COMPONENT,s?he=E.type===Oi?r.DEPTH_COMPONENT32F:E.type===fi?r.DEPTH_COMPONENT24:E.type===An?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:E.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ln&&he===r.DEPTH_COMPONENT&&E.type!==$A&&E.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=fi,Ae=a.convert(E.type)),E.format===Wn&&he===r.DEPTH_COMPONENT&&(he=r.DEPTH_STENCIL,E.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=An,Ae=a.convert(E.type))),Ie&&(me?t.texStorage2D(r.TEXTURE_2D,1,he,B.width,B.height):t.texImage2D(r.TEXTURE_2D,0,he,B.width,B.height,0,j,Ae,null));else if(E.isDataTexture)if(de.length>0&&se){me&&Ie&&t.texStorage2D(r.TEXTURE_2D,ve,he,de[0].width,de[0].height);for(let Me=0,Ue=de.length;Me<Ue;Me++)q=de[Me],me?t.texSubImage2D(r.TEXTURE_2D,Me,0,0,q.width,q.height,j,Ae,q.data):t.texImage2D(r.TEXTURE_2D,Me,he,q.width,q.height,0,j,Ae,q.data);E.generateMipmaps=!1}else me?(Ie&&t.texStorage2D(r.TEXTURE_2D,ve,he,B.width,B.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,B.width,B.height,j,Ae,B.data)):t.texImage2D(r.TEXTURE_2D,0,he,B.width,B.height,0,j,Ae,B.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){me&&Ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,he,de[0].width,de[0].height,B.depth);for(let Me=0,Ue=de.length;Me<Ue;Me++)q=de[Me],E.format!==Rt?j!==null?me?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,q.width,q.height,B.depth,j,q.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,he,q.width,q.height,B.depth,0,q.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,q.width,q.height,B.depth,j,Ae,q.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Me,he,q.width,q.height,B.depth,0,j,Ae,q.data)}else{me&&Ie&&t.texStorage2D(r.TEXTURE_2D,ve,he,de[0].width,de[0].height);for(let Me=0,Ue=de.length;Me<Ue;Me++)q=de[Me],E.format!==Rt?j!==null?me?t.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,q.width,q.height,j,q.data):t.compressedTexImage2D(r.TEXTURE_2D,Me,he,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage2D(r.TEXTURE_2D,Me,0,0,q.width,q.height,j,Ae,q.data):t.texImage2D(r.TEXTURE_2D,Me,he,q.width,q.height,0,j,Ae,q.data)}else if(E.isDataArrayTexture)me?(Ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,he,B.width,B.height,B.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,j,Ae,B.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,he,B.width,B.height,B.depth,0,j,Ae,B.data);else if(E.isData3DTexture)me?(Ie&&t.texStorage3D(r.TEXTURE_3D,ve,he,B.width,B.height,B.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,j,Ae,B.data)):t.texImage3D(r.TEXTURE_3D,0,he,B.width,B.height,B.depth,0,j,Ae,B.data);else if(E.isFramebufferTexture){if(Ie)if(me)t.texStorage2D(r.TEXTURE_2D,ve,he,B.width,B.height);else{let Me=B.width,Ue=B.height;for(let Mt=0;Mt<ve;Mt++)t.texImage2D(r.TEXTURE_2D,Mt,he,Me,Ue,0,j,Ae,null),Me>>=1,Ue>>=1}}else if(de.length>0&&se){me&&Ie&&t.texStorage2D(r.TEXTURE_2D,ve,he,de[0].width,de[0].height);for(let Me=0,Ue=de.length;Me<Ue;Me++)q=de[Me],me?t.texSubImage2D(r.TEXTURE_2D,Me,0,0,j,Ae,q):t.texImage2D(r.TEXTURE_2D,Me,he,j,Ae,q);E.generateMipmaps=!1}else me?(Ie&&t.texStorage2D(r.TEXTURE_2D,ve,he,B.width,B.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,j,Ae,B)):t.texImage2D(r.TEXTURE_2D,0,he,j,Ae,B);P(E,se)&&d(ee),H.__version=$.version,E.onUpdate&&E.onUpdate(E)}_.__version=E.version}function x(_,E,W,ee,N,$){let H=a.convert(W.format,W.colorSpace),G=a.convert(W.type),Y=M(W.internalFormat,H,G,W.colorSpace);if(!i.get(E).__hasExternalTextures){let re=Math.max(1,E.width>>$),ie=Math.max(1,E.height>>$);N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?t.texImage3D(N,$,Y,re,ie,E.depth,0,H,G,null):t.texImage2D(N,$,Y,re,ie,0,H,G,null)}t.bindFramebuffer(r.FRAMEBUFFER,_),V(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,N,i.get(W).__webglTexture,0,T(E)):(N===r.TEXTURE_2D||N>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,N,i.get(W).__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function D(_,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,_),E.depthBuffer&&!E.stencilBuffer){let ee=s===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(W||V(E)){let N=E.depthTexture;N&&N.isDepthTexture&&(N.type===Oi?ee=r.DEPTH_COMPONENT32F:N.type===fi&&(ee=r.DEPTH_COMPONENT24));let $=T(E);V(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$,ee,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,$,ee,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,ee,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,_)}else if(E.depthBuffer&&E.stencilBuffer){let ee=T(E);W&&V(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,E.width,E.height):V(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,_)}else{let ee=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let N=0;N<ee.length;N++){let $=ee[N],H=a.convert($.format,$.colorSpace),G=a.convert($.type),Y=M($.internalFormat,H,G,$.colorSpace),re=T(E);W&&V(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,Y,E.width,E.height):V(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,Y,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Y,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function S(_){let E=i.get(_),W=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");(function(ee,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,ee),!N.depthTexture||!N.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(N.depthTexture).__webglTexture&&N.depthTexture.image.width===N.width&&N.depthTexture.image.height===N.height||(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),z(N.depthTexture,0);let $=i.get(N.depthTexture).__webglTexture,H=T(N);if(N.depthTexture.format===ln)V(N)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,H):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else{if(N.depthTexture.format!==Wn)throw new Error("Unknown depthTexture format");V(N)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,H):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0)}})(E.__webglFramebuffer,_)}else if(W){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=r.createRenderbuffer(),D(E.__webglDepthbuffer[ee],_,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),D(E.__webglDepthbuffer,_,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function T(_){return Math.min(n.maxSamples,_.samples)}function V(_){let E=i.get(_);return s&&_.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function J(_,E){let W=_.colorSpace,ee=_.format,N=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===eA||W!==Di&&W!==hi&&(Je.getTransfer(W)===it?s===!1?e.has("EXT_sRGB")===!0&&ee===Rt?(_.format=eA,_.minFilter=Pt,_.generateMipmaps=!1):E=Ya.sRGBToLinear(E):ee===Rt&&N===ai||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}this.allocateTextureUnit=function(){let _=I;return _>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+n.maxTextures),I+=1,_},this.resetTextureUnits=function(){I=0},this.setTexture2D=z,this.setTexture2DArray=function(_,E){let W=i.get(_);_.version>0&&W.__version!==_.version?ue(W,_,E):t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)},this.setTexture3D=function(_,E){let W=i.get(_);_.version>0&&W.__version!==_.version?ue(W,_,E):t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)},this.setTextureCube=function(_,E){let W=i.get(_);_.version>0&&W.__version!==_.version?function(ee,N,$){if(N.image.length!==6)return;let H=ae(ee,N),G=N.source;t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture,r.TEXTURE0+$);let Y=i.get(G);if(G.version!==Y.__version||H===!0){t.activeTexture(r.TEXTURE0+$);let re=Je.getPrimaries(Je.workingColorSpace),ie=N.colorSpace===hi?null:Je.getPrimaries(N.colorSpace),B=N.colorSpace===hi||re===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,N.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,N.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let se=N.isCompressedTexture||N.image[0].isCompressedTexture,j=N.image[0]&&N.image[0].isDataTexture,q=[];for(let be=0;be<6;be++)q[be]=se||j?j?N.image[be].image:N.image[be]:m(N.image[be],!1,!0,n.maxCubemapSize),q[be]=J(N,q[be]);let Ae=q[0],he=p(Ae)||s,de=a.convert(N.format,N.colorSpace),me=a.convert(N.type),Ie=M(N.internalFormat,de,me,N.colorSpace),ve=s&&N.isVideoTexture!==!0,Me=Y.__version===void 0||H===!0,Ue,Mt=v(N,Ae,he);if(X(r.TEXTURE_CUBE_MAP,N,he),se){ve&&Me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,Ie,Ae.width,Ae.height);for(let be=0;be<6;be++){Ue=q[be].mipmaps;for(let Xe=0;Xe<Ue.length;Xe++){let He=Ue[Xe];N.format!==Rt?de!==null?ve?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,0,0,He.width,He.height,de,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,Ie,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,0,0,He.width,He.height,de,me,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,Ie,He.width,He.height,0,de,me,He.data)}}}else{Ue=N.mipmaps,ve&&Me&&(Ue.length>0&&Mt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,Ie,q[0].width,q[0].height));for(let be=0;be<6;be++)if(j){ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,q[be].width,q[be].height,de,me,q[be].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ie,q[be].width,q[be].height,0,de,me,q[be].data);for(let Xe=0;Xe<Ue.length;Xe++){let He=Ue[Xe].image[be].image;ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,0,0,He.width,He.height,de,me,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,Ie,He.width,He.height,0,de,me,He.data)}}else{ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,de,me,q[be]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ie,de,me,q[be]);for(let Xe=0;Xe<Ue.length;Xe++){let He=Ue[Xe];ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,0,0,de,me,He.image[be]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,Ie,de,me,He.image[be])}}}P(N,he)&&d(r.TEXTURE_CUBE_MAP),Y.__version=G.version,N.onUpdate&&N.onUpdate(N)}ee.__version=N.version}(W,_,E):t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)},this.rebindTextures=function(_,E,W){let ee=i.get(_);E!==void 0&&x(ee.__webglFramebuffer,_,_.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&S(_)},this.setupRenderTarget=function(_){let E=_.texture,W=i.get(_),ee=i.get(E);_.addEventListener("dispose",w),_.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=E.version,o.memory.textures++);let N=_.isWebGLCubeRenderTarget===!0,$=_.isWebGLMultipleRenderTargets===!0,H=p(_)||s;if(N){W.__webglFramebuffer=[];for(let G=0;G<6;G++)if(s&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[G]=[];for(let Y=0;Y<E.mipmaps.length;Y++)W.__webglFramebuffer[G][Y]=r.createFramebuffer()}else W.__webglFramebuffer[G]=r.createFramebuffer()}else{if(s&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let G=0;G<E.mipmaps.length;G++)W.__webglFramebuffer[G]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if($)if(n.drawBuffers){let G=_.texture;for(let Y=0,re=G.length;Y<re;Y++){let ie=i.get(G[Y]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&_.samples>0&&V(_)===!1){let G=$?E:[E];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Y=0;Y<G.length;Y++){let re=G[Y];W.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Y]);let ie=a.convert(re.format,re.colorSpace),B=a.convert(re.type),se=M(re.internalFormat,ie,B,re.colorSpace,_.isXRRenderTarget===!0),j=T(_);r.renderbufferStorageMultisample(r.RENDERBUFFER,j,se,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,W.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),_.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),D(W.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(N){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),X(r.TEXTURE_CUBE_MAP,E,H);for(let G=0;G<6;G++)if(s&&E.mipmaps&&E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)x(W.__webglFramebuffer[G][Y],_,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,Y);else x(W.__webglFramebuffer[G],_,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);P(E,H)&&d(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){let G=_.texture;for(let Y=0,re=G.length;Y<re;Y++){let ie=G[Y],B=i.get(ie);t.bindTexture(r.TEXTURE_2D,B.__webglTexture),X(r.TEXTURE_2D,ie,H),x(W.__webglFramebuffer,_,ie,r.COLOR_ATTACHMENT0+Y,r.TEXTURE_2D,0),P(ie,H)&&d(r.TEXTURE_2D)}t.unbindTexture()}else{let G=r.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(s?G=_.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(G,ee.__webglTexture),X(G,E,H),s&&E.mipmaps&&E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)x(W.__webglFramebuffer[Y],_,E,r.COLOR_ATTACHMENT0,G,Y);else x(W.__webglFramebuffer,_,E,r.COLOR_ATTACHMENT0,G,0);P(E,H)&&d(G),t.unbindTexture()}_.depthBuffer&&S(_)},this.updateRenderTargetMipmap=function(_){let E=p(_)||s,W=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ee=0,N=W.length;ee<N;ee++){let $=W[ee];if(P($,E)){let H=_.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,G=i.get($).__webglTexture;t.bindTexture(H,G),d(H),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(_){if(s&&_.samples>0&&V(_)===!1){let E=_.isWebGLMultipleRenderTargets?_.texture:[_.texture],W=_.width,ee=_.height,N=r.COLOR_BUFFER_BIT,$=[],H=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=i.get(_),Y=_.isWebGLMultipleRenderTargets===!0;if(Y)for(let re=0;re<E.length;re++)t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,G.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let re=0;re<E.length;re++){$.push(r.COLOR_ATTACHMENT0+re),_.depthBuffer&&$.push(H);let ie=G.__ignoreDepthValues!==void 0&&G.__ignoreDepthValues;if(ie===!1&&(_.depthBuffer&&(N|=r.DEPTH_BUFFER_BIT),_.stencilBuffer&&(N|=r.STENCIL_BUFFER_BIT)),Y&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,G.__webglColorRenderbuffer[re]),ie===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[H]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[H])),Y){let B=i.get(E[re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,B,0)}r.blitFramebuffer(0,0,W,ee,0,0,W,ee,N,r.NEAREST),A&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let re=0;re<E.length;re++){t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,G.__webglColorRenderbuffer[re]);let ie=i.get(E[re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,G.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=S,this.setupFrameBufferTexture=x,this.useMultisampledRTT=V}function Wp(r,e,t){let i=t.isWebGL2;return{convert:function(n,a=""){let o,s=Je.getTransfer(a);if(n===ai)return r.UNSIGNED_BYTE;if(n===Gc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===kc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===$A)return r.UNSIGNED_SHORT;if(n===Qc)return r.INT;if(n===fi)return r.UNSIGNED_INT;if(n===Oi)return r.FLOAT;if(n===Qi)return i?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(n===1021)return r.ALPHA;if(n===Rt)return r.RGBA;if(n===1024)return r.LUMINANCE;if(n===1025)return r.LUMINANCE_ALPHA;if(n===ln)return r.DEPTH_COMPONENT;if(n===Wn)return r.DEPTH_STENCIL;if(n===eA)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(n===1028)return r.RED;if(n===Wc)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===Xc)return r.RG_INTEGER;if(n===Yc)return r.RGBA_INTEGER;if(n===hs||n===fs||n===ps||n===ds)if(s===it){if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o===null)return null;if(n===hs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(o=e.get("WEBGL_compressed_texture_s3tc"),o===null)return null;if(n===hs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ps)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===f0||n===p0||n===d0||n===g0){if(o=e.get("WEBGL_compressed_texture_pvrtc"),o===null)return null;if(n===f0)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===p0)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===d0)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===g0)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===jc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===m0||n===v0){if(o=e.get("WEBGL_compressed_texture_etc"),o===null)return null;if(n===m0)return s===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===v0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}if(n===M0||n===x0||n===P0||n===y0||n===b0||n===w0||n===D0||n===_0||n===E0||n===B0||n===S0||n===C0||n===T0||n===I0){if(o=e.get("WEBGL_compressed_texture_astc"),o===null)return null;if(n===M0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===x0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===P0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===y0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===b0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===w0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===D0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===E0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===B0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===S0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===C0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===T0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===I0)return s===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===gs||n===L0||n===R0){if(o=e.get("EXT_texture_compression_bptc"),o===null)return null;if(n===gs)return s===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===L0)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===R0)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===z0||n===U0||n===O0){if(o=e.get("EXT_texture_compression_rgtc"),o===null)return null;if(n===gs)return o.COMPRESSED_RED_RGTC1_EXT;if(n===z0)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===U0)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===O0)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===An?i?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}}}function Yp(r,e){function t(n,a){n.matrixAutoUpdate===!0&&n.updateMatrix(),a.value.copy(n.matrix)}function i(n,a){n.opacity.value=a.opacity,a.color&&n.diffuse.value.copy(a.color),a.emissive&&n.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(n.map.value=a.map,t(a.map,n.mapTransform)),a.alphaMap&&(n.alphaMap.value=a.alphaMap,t(a.alphaMap,n.alphaMapTransform)),a.bumpMap&&(n.bumpMap.value=a.bumpMap,t(a.bumpMap,n.bumpMapTransform),n.bumpScale.value=a.bumpScale,a.side===Dt&&(n.bumpScale.value*=-1)),a.normalMap&&(n.normalMap.value=a.normalMap,t(a.normalMap,n.normalMapTransform),n.normalScale.value.copy(a.normalScale),a.side===Dt&&n.normalScale.value.negate()),a.displacementMap&&(n.displacementMap.value=a.displacementMap,t(a.displacementMap,n.displacementMapTransform),n.displacementScale.value=a.displacementScale,n.displacementBias.value=a.displacementBias),a.emissiveMap&&(n.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,n.emissiveMapTransform)),a.specularMap&&(n.specularMap.value=a.specularMap,t(a.specularMap,n.specularMapTransform)),a.alphaTest>0&&(n.alphaTest.value=a.alphaTest);let o=e.get(a).envMap;if(o&&(n.envMap.value=o,n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=a.reflectivity,n.ior.value=a.ior,n.refractionRatio.value=a.refractionRatio),a.lightMap){n.lightMap.value=a.lightMap;let s=r._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=a.lightMapIntensity*s,t(a.lightMap,n.lightMapTransform)}a.aoMap&&(n.aoMap.value=a.aoMap,n.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,a){a.color.getRGB(n.fogColor.value,Zc(r)),a.isFog?(n.fogNear.value=a.near,n.fogFar.value=a.far):a.isFogExp2&&(n.fogDensity.value=a.density)},refreshMaterialUniforms:function(n,a,o,s,l){a.isMeshBasicMaterial||a.isMeshLambertMaterial?i(n,a):a.isMeshToonMaterial?(i(n,a),function(A,c){c.gradientMap&&(A.gradientMap.value=c.gradientMap)}(n,a)):a.isMeshPhongMaterial?(i(n,a),function(A,c){A.specular.value.copy(c.specular),A.shininess.value=Math.max(c.shininess,1e-4)}(n,a)):a.isMeshStandardMaterial?(i(n,a),function(A,c){A.metalness.value=c.metalness,c.metalnessMap&&(A.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,A.metalnessMapTransform)),A.roughness.value=c.roughness,c.roughnessMap&&(A.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,A.roughnessMapTransform)),e.get(c).envMap&&(A.envMapIntensity.value=c.envMapIntensity)}(n,a),a.isMeshPhysicalMaterial&&function(A,c,h){A.ior.value=c.ior,c.sheen>0&&(A.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),A.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(A.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,A.sheenColorMapTransform)),c.sheenRoughnessMap&&(A.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,A.sheenRoughnessMapTransform))),c.clearcoat>0&&(A.clearcoat.value=c.clearcoat,A.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(A.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,A.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(A.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Dt&&A.clearcoatNormalScale.value.negate())),c.iridescence>0&&(A.iridescence.value=c.iridescence,A.iridescenceIOR.value=c.iridescenceIOR,A.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(A.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,A.iridescenceMapTransform)),c.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),c.transmission>0&&(A.transmission.value=c.transmission,A.transmissionSamplerMap.value=h.texture,A.transmissionSamplerSize.value.set(h.width,h.height),c.transmissionMap&&(A.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,A.transmissionMapTransform)),A.thickness.value=c.thickness,c.thicknessMap&&(A.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=c.attenuationDistance,A.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(A.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(A.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=c.specularIntensity,A.specularColor.value.copy(c.specularColor),c.specularColorMap&&(A.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,A.specularColorMapTransform)),c.specularIntensityMap&&(A.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,A.specularIntensityMapTransform))}(n,a,l)):a.isMeshMatcapMaterial?(i(n,a),function(A,c){c.matcap&&(A.matcap.value=c.matcap)}(n,a)):a.isMeshDepthMaterial?i(n,a):a.isMeshDistanceMaterial?(i(n,a),function(A,c){let h=e.get(c).light;A.referencePosition.value.setFromMatrixPosition(h.matrixWorld),A.nearDistance.value=h.shadow.camera.near,A.farDistance.value=h.shadow.camera.far}(n,a)):a.isMeshNormalMaterial?i(n,a):a.isLineBasicMaterial?(function(A,c){A.diffuse.value.copy(c.color),A.opacity.value=c.opacity,c.map&&(A.map.value=c.map,t(c.map,A.mapTransform))}(n,a),a.isLineDashedMaterial&&function(A,c){A.dashSize.value=c.dashSize,A.totalSize.value=c.dashSize+c.gapSize,A.scale.value=c.scale}(n,a)):a.isPointsMaterial?function(A,c,h,u){A.diffuse.value.copy(c.color),A.opacity.value=c.opacity,A.size.value=c.size*h,A.scale.value=.5*u,c.map&&(A.map.value=c.map,t(c.map,A.uvTransform)),c.alphaMap&&(A.alphaMap.value=c.alphaMap,t(c.alphaMap,A.alphaMapTransform)),c.alphaTest>0&&(A.alphaTest.value=c.alphaTest)}(n,a,o,s):a.isSpriteMaterial?function(A,c){A.diffuse.value.copy(c.color),A.opacity.value=c.opacity,A.rotation.value=c.rotation,c.map&&(A.map.value=c.map,t(c.map,A.mapTransform)),c.alphaMap&&(A.alphaMap.value=c.alphaMap,t(c.alphaMap,A.alphaMapTransform)),c.alphaTest>0&&(A.alphaTest.value=c.alphaTest)}(n,a):a.isShadowMaterial?(n.color.value.copy(a.color),n.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function jp(r,e,t,i){let n={},a={},o=[],s=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(h,u,f,g){let m=h.value,p=u+"_"+f;if(g[p]===void 0)return g[p]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let P=g[p];if(typeof m=="number"||typeof m=="boolean"){if(P!==m)return g[p]=m,!0}else if(P.equals(m)===!1)return P.copy(m),!0}return!1}function A(h){let u={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(u.boundary=4,u.storage=4):h.isVector2?(u.boundary=8,u.storage=8):h.isVector3||h.isColor?(u.boundary=16,u.storage=12):h.isVector4?(u.boundary=16,u.storage=16):h.isMatrix3?(u.boundary=48,u.storage=48):h.isMatrix4?(u.boundary=64,u.storage=64):h.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",h),u}function c(h){let u=h.target;u.removeEventListener("dispose",c);let f=o.indexOf(u.__bindingPointIndex);o.splice(f,1),r.deleteBuffer(n[u.id]),delete n[u.id],delete a[u.id]}return{bind:function(h,u){let f=u.program;i.uniformBlockBinding(h,f)},update:function(h,u){let f=n[h.id];f===void 0&&(function(p){let P=p.uniforms,d=0,M=16;for(let b=0,y=P.length;b<y;b++){let w=Array.isArray(P[b])?P[b]:[P[b]];for(let U=0,I=w.length;U<I;U++){let z=w[U],Q=Array.isArray(z.value)?z.value:[z.value];for(let R=0,k=Q.length;R<k;R++){let X=A(Q[R]),ae=d%M;ae!==0&&M-ae<X.boundary&&(d+=M-ae),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=d,d+=X.storage}}}let v=d%M;v>0&&(d+=M-v),p.__size=d,p.__cache={}}(h),f=function(p){let P=function(){for(let b=0;b<s;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();p.__bindingPointIndex=P;let d=r.createBuffer(),M=p.__size,v=p.usage;return r.bindBuffer(r.UNIFORM_BUFFER,d),r.bufferData(r.UNIFORM_BUFFER,M,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,d),d}(h),n[h.id]=f,h.addEventListener("dispose",c));let g=u.program;i.updateUBOMapping(h,g);let m=e.render.frame;a[h.id]!==m&&(function(p){let P=n[p.id],d=p.uniforms,M=p.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let v=0,b=d.length;v<b;v++){let y=Array.isArray(d[v])?d[v]:[d[v]];for(let w=0,U=y.length;w<U;w++){let I=y[w];if(l(I,v,w,M)===!0){let z=I.__offset,Q=Array.isArray(I.value)?I.value:[I.value],R=0;for(let k=0;k<Q.length;k++){let X=Q[k],ae=A(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,z+R,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,R),R+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(h),a[h.id]=m)},dispose:function(){for(let h in n)r.deleteBuffer(n[h]);o=[],n={},a={}}}}function Bc(r,e,t,i,n,a,o){let s=MA.distanceSqToPoint(r);if(s<t){let l=new C;MA.closestPointToPoint(r,l),l.applyMatrix4(i);let A=n.ray.origin.distanceTo(l);if(A<n.near||A>n.far)return;a.push({distance:A,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}function nl(){let r=0,e=0,t=0,i=0;function n(a,o,s,l){r=a,e=s,t=-3*a+3*o-2*s-l,i=2*a-2*o+s+l}return{initCatmullRom:function(a,o,s,l,A){n(o,s,A*(s-a),A*(l-o))},initNonuniformCatmullRom:function(a,o,s,l,A,c,h){let u=(o-a)/A-(s-a)/(A+c)+(s-o)/c,f=(s-o)/c-(l-o)/(c+h)+(l-s)/h;u*=c,f*=c,n(o,s,u,f)},calc:function(a){let o=a*a;return r+e*a+t*o+i*(o*a)}}}function Sc(r,e,t,i,n){let a=.5*(i-e),o=.5*(n-t),s=r*r;return(2*t-2*i+a+o)*(r*s)+(-3*t+3*i-2*a-o)*s+a*r+t}function br(r,e,t,i){return function(n,a){let o=1-n;return o*o*a}(r,e)+function(n,a){return 2*(1-n)*n*a}(r,t)+function(n,a){return n*n*a}(r,i)}function wr(r,e,t,i,n){return function(a,o){let s=1-a;return s*s*s*o}(r,e)+function(a,o){let s=1-a;return 3*s*s*a*o}(r,t)+function(a,o){return 3*(1-a)*a*a*o}(r,i)+function(a,o){return a*a*a*o}(r,n)}function Cc(r,e,t,i,n){let a,o;if(n===function(s,l,A,c){let h=0;for(let u=l,f=A-c;u<A;u+=c)h+=(s[f]-s[u])*(s[u+1]+s[f+1]),f=u;return h}(r,e,t,i)>0)for(a=e;a<t;a+=i)o=Tc(a,r[a],r[a+1],o);else for(a=t-i;a>=e;a-=i)o=Tc(a,r[a],r[a+1],o);return o&&po(o,o.next)&&(zr(o),o=o.next),o}function dn(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!po(i,i.next)&&st(i.prev,i,i.next)!==0)i=i.next;else{if(zr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Lr(r,e,t,i,n,a,o){if(!r)return;!o&&a&&function(c,h,u,f){let g=c;do g.z===0&&(g.z=BA(g.x,g.y,h,u,f)),g.prevZ=g.prev,g.nextZ=g.next,g=g.next;while(g!==c);g.prevZ.nextZ=null,g.prevZ=null,function(m){let p,P,d,M,v,b,y,w,U=1;do{for(P=m,m=null,v=null,b=0;P;){for(b++,d=P,y=0,p=0;p<U&&(y++,d=d.nextZ,d);p++);for(w=U;y>0||w>0&&d;)y!==0&&(w===0||!d||P.z<=d.z)?(M=P,P=P.nextZ,y--):(M=d,d=d.nextZ,w--),v?v.nextZ=M:m=M,M.prevZ=v,v=M;P=d}v.nextZ=null,U*=2}while(b>1)}(g)}(r,i,n,a);let s,l,A=r;for(;r.prev!==r.next;)if(s=r.prev,l=r.next,a?Kp(r,i,n,a):Jp(r))e.push(s.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),zr(r),r=l.next,A=l.next;else if((r=l)===A){o?o===1?Lr(r=Zp(dn(r),e,t),e,t,i,n,a,2):o===2&&$p(r,e,t,i,n,a):Lr(dn(r),e,t,i,n,a,1);break}}function Jp(r){let e=r.prev,t=r,i=r.next;if(st(e,t,i)>=0)return!1;let n=e.x,a=t.x,o=i.x,s=e.y,l=t.y,A=i.y,c=n<a?n<o?n:o:a<o?a:o,h=s<l?s<A?s:A:l<A?l:A,u=n>a?n>o?n:o:a>o?a:o,f=s>l?s>A?s:A:l>A?l:A,g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=u&&g.y>=h&&g.y<=f&&Hn(n,s,a,l,o,A,g.x,g.y)&&st(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kp(r,e,t,i){let n=r.prev,a=r,o=r.next;if(st(n,a,o)>=0)return!1;let s=n.x,l=a.x,A=o.x,c=n.y,h=a.y,u=o.y,f=s<l?s<A?s:A:l<A?l:A,g=c<h?c<u?c:u:h<u?h:u,m=s>l?s>A?s:A:l>A?l:A,p=c>h?c>u?c:u:h>u?h:u,P=BA(f,g,e,t,i),d=BA(m,p,e,t,i),M=r.prevZ,v=r.nextZ;for(;M&&M.z>=P&&v&&v.z<=d;){if(M.x>=f&&M.x<=m&&M.y>=g&&M.y<=p&&M!==n&&M!==o&&Hn(s,c,l,h,A,u,M.x,M.y)&&st(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=m&&v.y>=g&&v.y<=p&&v!==n&&v!==o&&Hn(s,c,l,h,A,u,v.x,v.y)&&st(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=P;){if(M.x>=f&&M.x<=m&&M.y>=g&&M.y<=p&&M!==n&&M!==o&&Hn(s,c,l,h,A,u,M.x,M.y)&&st(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=d;){if(v.x>=f&&v.x<=m&&v.y>=g&&v.y<=p&&v!==n&&v!==o&&Hn(s,c,l,h,A,u,v.x,v.y)&&st(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Zp(r,e,t){let i=r;do{let n=i.prev,a=i.next.next;!po(n,a)&&au(n,i,i.next,a)&&Rr(n,a)&&Rr(a,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),zr(i),zr(i.next),i=r=a),i=i.next}while(i!==r);return dn(i)}function $p(r,e,t,i,n,a){let o=r;do{let s=o.next.next;for(;s!==o.prev;){if(o.i!==s.i&&rd(o,s)){let l=ou(o,s);return o=dn(o,o.next),l=dn(l,l.next),Lr(o,e,t,i,n,a,0),void Lr(l,e,t,i,n,a,0)}s=s.next}o=o.next}while(o!==r)}function ed(r,e){return r.x-e.x}function td(r,e){let t=function(n,a){let o,s=a,l=-1/0,A=n.x,c=n.y;do{if(c<=s.y&&c>=s.next.y&&s.next.y!==s.y){let p=s.x+(c-s.y)*(s.next.x-s.x)/(s.next.y-s.y);if(p<=A&&p>l&&(l=p,o=s.x<s.next.x?s:s.next,p===A))return o}s=s.next}while(s!==a);if(!o)return null;let h=o,u=o.x,f=o.y,g,m=1/0;s=o;do A>=s.x&&s.x>=u&&A!==s.x&&Hn(c<f?A:l,c,u,f,c<f?l:A,c,s.x,s.y)&&(g=Math.abs(c-s.y)/(A-s.x),Rr(s,n)&&(g<m||g===m&&(s.x>o.x||s.x===o.x&&id(o,s)))&&(o=s,m=g)),s=s.next;while(s!==h);return o}(r,e);if(!t)return e;let i=ou(t,r);return dn(i,i.next),dn(t,t.next)}function id(r,e){return st(r.prev,r,e.prev)<0&&st(e.next,r,r.next)<0}function BA(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function nd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Hn(r,e,t,i,n,a,o,s){return(n-o)*(e-s)>=(r-o)*(a-s)&&(r-o)*(i-s)>=(t-o)*(e-s)&&(t-o)*(a-s)>=(n-o)*(i-s)}function rd(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&au(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(r,e)&&(Rr(r,e)&&Rr(e,r)&&function(t,i){let n=t,a=!1,o=(t.x+i.x)/2,s=(t.y+i.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&o<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==t);return a}(r,e)&&(st(r.prev,r,e.prev)||st(r,e.prev,e))||po(r,e)&&st(r.prev,r,r.next)>0&&st(e.prev,e,e.next)>0)}function st(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function po(r,e){return r.x===e.x&&r.y===e.y}function au(r,e,t,i){let n=Ua(st(r,e,t)),a=Ua(st(r,e,i)),o=Ua(st(t,i,r)),s=Ua(st(t,i,e));return n!==a&&o!==s||!(n!==0||!za(r,t,e))||!(a!==0||!za(r,i,e))||!(o!==0||!za(t,r,i))||!(s!==0||!za(t,e,i))}function za(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ua(r){return r>0?1:r<0?-1:0}function Rr(r,e){return st(r.prev,r,r.next)<0?st(r,e,r.next)>=0&&st(r,r.prev,e)>=0:st(r,e,r.prev)<0||st(r,r.next,e)<0}function ou(r,e){let t=new SA(r.i,r.x,r.y),i=new SA(e.i,e.x,e.y),n=r.next,a=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Tc(r,e,t,i){let n=new SA(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function zr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function SA(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ic(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Lc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}function Rc(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}function Oa(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function od(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ys,Oc,ZA,wi,Hi,Dt,Nc,rn,js,qs,Fc,Yh,jh,Ni,qh,Jh,Kh,Zh,$h,ef,Hc,kn,Vn,Js,Ks,uo,Zs,ri,$s,yt,h0,us,Pt,tf,Fa,ai,$A,Qc,fi,Oi,Qi,Gc,kc,An,Rt,ln,Wn,Vc,Wc,Xc,Yc,hs,fs,ps,ds,f0,p0,d0,g0,jc,m0,v0,M0,x0,P0,y0,b0,w0,D0,_0,E0,B0,S0,C0,T0,I0,gs,L0,R0,z0,U0,O0,Ha,Qa,ms,N0,F0,H0,qc,cn,hi,At,Di,el,ho,Ga,it,ka,Va,wn,Q0,G0,eA,Xn,Wa,Gi,St,Na,tA,oe,Ne,Ms,V0,W0,X0,sa,af,Je,Dn,Ya,of,ja,sf,jt,Ke,nA,gt,qa,rA,Nt,C,ys,Y0,pi,Mi,ei,Aa,_n,En,Bn,Ii,Li,Zi,gr,la,ca,$i,Af,mr,ws,di,xi,Ds,ua,Ri,_s,ha,Es,ki,xe,Sn,ti,lf,cf,zi,fa,Qt,j0,q0,Yn,Ja,uf,J0,Cn,Pi,pa,vr,hf,ff,K0,Z0,$0,pf,df,zt,ii,yi,Bs,bi,Tn,In,ec,Ss,Cs,Ts,da,sn,Kc,Ui,ga,ge,Ct,gf,un,_i,zm,ut,ma,$e,Ka,Za,Pe,vf,Yt,Ls,Ln,Gt,Mr,xt,Ge,tc,en,va,ic,Rn,zn,Un,Rs,Ma,xa,Pa,ya,nc,rc,ac,ba,wa,Ze,si,tl,kt,_r,wt,On,aA,$a,oA,zs,Mf,xf,ni,tn,_a,qn,Jn,ze,ce,ui,Ea,Kn,oc,xr,Us,sc,Os,Ns,Fs,nn,Nn,Ac,eo,Zn,eu,tu,iu,nu,ru,hc,fc,pc,dc,gc,sA,AA,lA,Hs,Gn,yp,bp,_p,Ep,Sp,Ip,uA,hA,Np,fA,pA,dA,ct,Xp,yr,gA,Er,mA,hn,Um,Om,Nm,Fm,Hm,Qm,Gm,km,Vm,Wm,Xm,Ym,jm,qm,Jm,Km,Zm,$m,e1,t1,i1,n1,r1,a1,$n,o1,s1,A1,l1,c1,u1,h1,f1,vA,p1,d1,g1,m1,v1,M1,x1,P1,y1,b1,w1,D1,_1,E1,B1,S1,C1,Br,Ec,MA,Sa,Ca,to,qt,Sr,xA,Ta,Qs,Gs,ks,PA,io,yA,no,bA,ro,ao,oo,so,wA,Cr,Ao,DA,Tr,fn,Ir,pn,_A,Ia,La,Vs,Ra,EA,lo,qp,Fi,CA,ad,Ur,TA,IA,LA,RA,zA,UA,OA,NA,FA,T1,er,HA,QA,GA,oi,an,kA,VA,WA,Dr,on,XA,YA,sd,jA,qA,Ws,zc,Uc,JA,I1,L1,R1,KA,co,z1,U1,O1,N1,F1,H1,Q1,G1,k1,V1,W1,rl,Ad,Xs,ld,cd,ud,nt,X1,Y1,j1,q1,J1,K1,Z1,$1,ev,tv,iv,nv,rv,av,ov,sv,Av,lv,_t=Ti(()=>{Ys="160",Oc=1,ZA=2,wi=3,Hi=0,Dt=1,Nc=0,rn=100,js=204,qs=205,Fc=0,Yh=1,jh=2,Ni=0,qh=1,Jh=2,Kh=3,Zh=4,$h=5,ef=6,Hc=300,kn=301,Vn=302,Js=303,Ks=304,uo=306,Zs=1e3,ri=1001,$s=1002,yt=1003,h0=1004,us=1005,Pt=1006,tf=1007,Fa=1008,ai=1009,$A=1012,Qc=1013,fi=1014,Oi=1015,Qi=1016,Gc=1017,kc=1018,An=1020,Rt=1023,ln=1026,Wn=1027,Vc=1028,Wc=1029,Xc=1031,Yc=1033,hs=33776,fs=33777,ps=33778,ds=33779,f0=35840,p0=35841,d0=35842,g0=35843,jc=36196,m0=37492,v0=37496,M0=37808,x0=37809,P0=37810,y0=37811,b0=37812,w0=37813,D0=37814,_0=37815,E0=37816,B0=37817,S0=37818,C0=37819,T0=37820,I0=37821,gs=36492,L0=36494,R0=36495,z0=36284,U0=36285,O0=36286,Ha=2300,Qa=2301,ms=2302,N0=2400,F0=2401,H0=2402,qc=3e3,cn=3001,hi="",At="srgb",Di="srgb-linear",el="display-p3",ho="display-p3-linear",Ga="linear",it="srgb",ka="rec709",Va="p3",wn=7680,Q0=35044,G0="300 es",eA=1035,Xn=2e3,Wa=2001,Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}},St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Na=Math.PI/180,tA=180/Math.PI;oe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*n+e.x,this.y=a*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ne=class r{constructor(e,t,i,n,a,o,s,l,A){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,o,s,l,A)}set(e,t,i,n,a,o,s,l,A){let c=this.elements;return c[0]=e,c[1]=n,c[2]=s,c[3]=t,c[4]=a,c[5]=l,c[6]=i,c[7]=o,c[8]=A,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],A=i[1],c=i[4],h=i[7],u=i[2],f=i[5],g=i[8],m=n[0],p=n[3],P=n[6],d=n[1],M=n[4],v=n[7],b=n[2],y=n[5],w=n[8];return a[0]=o*m+s*d+l*b,a[3]=o*p+s*M+l*y,a[6]=o*P+s*v+l*w,a[1]=A*m+c*d+h*b,a[4]=A*p+c*M+h*y,a[7]=A*P+c*v+h*w,a[2]=u*m+f*d+g*b,a[5]=u*p+f*M+g*y,a[8]=u*P+f*v+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],A=e[7],c=e[8];return t*o*c-t*s*A-i*a*c+i*s*l+n*a*A-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],A=e[7],c=e[8],h=c*o-s*A,u=s*l-c*a,f=A*a-o*l,g=t*h+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return e[0]=h*m,e[1]=(n*A-c*i)*m,e[2]=(s*i-n*o)*m,e[3]=u*m,e[4]=(c*t-n*l)*m,e[5]=(n*a-s*t)*m,e[6]=f*m,e[7]=(i*l-A*t)*m,e[8]=(o*t-i*a)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,o,s){let l=Math.cos(a),A=Math.sin(a);return this.set(i*l,i*A,-i*(l*o+A*s)+o+e,-n*A,n*l,-n*(-A*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ms.makeScale(e,t)),this}rotate(e){return this.premultiply(Ms.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ms.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ms=new Ne;V0={};W0=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),X0=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sa={[Di]:{transfer:Ga,primaries:ka,toReference:r=>r,fromReference:r=>r},[At]:{transfer:it,primaries:ka,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ho]:{transfer:Ga,primaries:Va,toReference:r=>r.applyMatrix3(X0),fromReference:r=>r.applyMatrix3(W0)},[el]:{transfer:it,primaries:Va,toReference:r=>r.convertSRGBToLinear().applyMatrix3(X0),fromReference:r=>r.applyMatrix3(W0).convertLinearToSRGB()}},af=new Set([Di,ho]),Je={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!af.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let i=sa[e].toReference;return(0,sa[t].fromReference)(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return sa[r].primaries},getTransfer:function(r){return r===hi?Ga:sa[r].transfer}};Ya=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Dn===void 0&&(Dn=Xa("canvas")),Dn.width=e.width,Dn.height=e.height;let i=Dn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Dn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=255*Qn(a[o]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Qn(t[i]/255)):t[i]=Qn(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},of=0,ja=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=tr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(Ps(n[o].image)):a.push(Ps(n[o]))}else a=Ps(n);i.url=a}return t||(e.images[this.uuid]=i),i}};sf=0,jt=class r extends Gi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,a=1006,o=1008,s=1023,l=1009,A=r.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=tr(),this.name="",this.source=new ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=A,this.format=s,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===cn?At:hi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case $s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case $s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?cn:qc}set encoding(e){Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cn?At:hi}};jt.DEFAULT_IMAGE=null,jt.DEFAULT_MAPPING=Hc,jt.DEFAULT_ANISOTROPY=1;Ke=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a,l=e.elements,A=l[0],c=l[4],h=l[8],u=l[1],f=l[5],g=l[9],m=l[2],p=l[6],P=l[10];if(Math.abs(c-u)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(A+f+P-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(A+1)/2,v=(f+1)/2,b=(P+1)/2,y=(c+u)/4,w=(h+m)/4,U=(g+p)/4;return M>v&&M>b?M<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(M),n=y/i,a=w/i):v>b?v<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(v),i=y/n,a=U/n):b<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(b),i=w/a,n=U/a),this.set(i,n,a,t),this}let d=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(u-c)*(u-c));return Math.abs(d)<.001&&(d=1),this.x=(p-g)/d,this.y=(h-m)/d,this.z=(u-c)/d,this.w=Math.acos((A+f+P-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nA=class extends Gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);let n={width:e,height:t,depth:1};i.encoding!==void 0&&(Pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===cn?At:hi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new jt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ja(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gt=class extends nA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},qa=class extends jt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=yt,this.minFilter=yt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rA=class extends jt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=yt,this.minFilter=yt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,o,s){let l=i[n+0],A=i[n+1],c=i[n+2],h=i[n+3],u=a[o+0],f=a[o+1],g=a[o+2],m=a[o+3];if(s===0)return e[t+0]=l,e[t+1]=A,e[t+2]=c,void(e[t+3]=h);if(s===1)return e[t+0]=u,e[t+1]=f,e[t+2]=g,void(e[t+3]=m);if(h!==m||l!==u||A!==f||c!==g){let p=1-s,P=l*u+A*f+c*g+h*m,d=P>=0?1:-1,M=1-P*P;if(M>Number.EPSILON){let b=Math.sqrt(M),y=Math.atan2(b,P*d);p=Math.sin(p*y)/b,s=Math.sin(s*y)/b}let v=s*d;if(l=l*p+u*v,A=A*p+f*v,c=c*p+g*v,h=h*p+m*v,p===1-s){let b=1/Math.sqrt(l*l+A*A+c*c+h*h);l*=b,A*=b,c*=b,h*=b}}e[t]=l,e[t+1]=A,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,a,o){let s=i[n],l=i[n+1],A=i[n+2],c=i[n+3],h=a[o],u=a[o+1],f=a[o+2],g=a[o+3];return e[t]=s*g+c*h+l*f-A*u,e[t+1]=l*g+c*u+A*h-s*f,e[t+2]=A*g+c*f+s*u-l*h,e[t+3]=c*g-s*h-l*u-A*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,A=s(i/2),c=s(n/2),h=s(a/2),u=l(i/2),f=l(n/2),g=l(a/2);switch(o){case"XYZ":this._x=u*c*h+A*f*g,this._y=A*f*h-u*c*g,this._z=A*c*g+u*f*h,this._w=A*c*h-u*f*g;break;case"YXZ":this._x=u*c*h+A*f*g,this._y=A*f*h-u*c*g,this._z=A*c*g-u*f*h,this._w=A*c*h+u*f*g;break;case"ZXY":this._x=u*c*h-A*f*g,this._y=A*f*h+u*c*g,this._z=A*c*g+u*f*h,this._w=A*c*h-u*f*g;break;case"ZYX":this._x=u*c*h-A*f*g,this._y=A*f*h+u*c*g,this._z=A*c*g-u*f*h,this._w=A*c*h+u*f*g;break;case"YZX":this._x=u*c*h+A*f*g,this._y=A*f*h+u*c*g,this._z=A*c*g-u*f*h,this._w=A*c*h-u*f*g;break;case"XZY":this._x=u*c*h-A*f*g,this._y=A*f*h-u*c*g,this._z=A*c*g+u*f*h,this._w=A*c*h+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],A=t[2],c=t[6],h=t[10],u=i+s+h;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(a-A)*f,this._z=(o-n)*f}else if(i>s&&i>h){let f=2*Math.sqrt(1+i-s-h);this._w=(c-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(a+A)/f}else if(s>h){let f=2*Math.sqrt(1+s-i-h);this._w=(a-A)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+h-i-s);this._w=(o-n)/f,this._x=(a+A)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,A=t._z,c=t._w;return this._x=i*c+o*s+n*A-a*l,this._y=n*c+o*l+a*s-i*A,this._z=a*c+o*A+i*l-n*s,this._w=o*c-i*s-n*l-a*A,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,a=this._z,o=this._w,s=o*e._w+i*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;let l=1-s*s;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}let A=Math.sqrt(l),c=Math.atan2(A,s),h=Math.sin((1-t)*c)/A,u=Math.sin(t*c)/A;return this._w=o*h+this._w*u,this._x=i*h+this._x*u,this._y=n*h+this._y*u,this._z=a*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(a),i*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Y0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Y0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,A=2*(o*n-s*i),c=2*(s*t-a*n),h=2*(a*i-o*t);return this.x=t+l*A+o*h-s*c,this.y=i+l*c+s*A-a*h,this.z=n+l*h+a*c-o*A,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-i*l,this.z=i*s-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ys.copy(this).projectOnVector(e),this.sub(ys)}reflect(e){return this.sub(ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ys=new C,Y0=new Nt,pi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(a,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}let n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),la.subVectors(this.max,gr),_n.subVectors(e.a,gr),En.subVectors(e.b,gr),Bn.subVectors(e.c,gr),Ii.subVectors(En,_n),Li.subVectors(Bn,En),Zi.subVectors(_n,Bn);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-Zi.z,Zi.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,Zi.z,0,-Zi.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-Zi.y,Zi.x,0];return!!bs(t,_n,En,Bn,la)&&(t=[1,0,0,0,1,0,0,0,1],!!bs(t,_n,En,Bn,la)&&(ca.crossVectors(Ii,Li),t=[ca.x,ca.y,ca.z],bs(t,_n,En,Bn,la)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ei).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new C,new C,new C,new C,new C,new C,new C,new C],ei=new C,Aa=new pi,_n=new C,En=new C,Bn=new C,Ii=new C,Li=new C,Zi=new C,gr=new C,la=new C,ca=new C,$i=new C;Af=new pi,mr=new C,ws=new C,di=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Af.setFromPoints(e).getCenter(i);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(mr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(ws)),this.expandByPoint(mr.copy(e.center).sub(ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new C,Ds=new C,ua=new C,Ri=new C,_s=new C,ha=new C,Es=new C,ki=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ds.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Ds);let a=.5*e.distanceTo(t),o=-this.direction.dot(ua),s=Ri.dot(this.direction),l=-Ri.dot(ua),A=Ri.lengthSq(),c=Math.abs(1-o*o),h,u,f,g;if(c>0)if(h=o*l-s,u=o*s-l,g=a*c,h>=0)if(u>=-g)if(u<=g){let m=1/c;h*=m,u*=m,f=h*(h+o*u+2*s)+u*(o*h+u+2*l)+A}else u=a,h=Math.max(0,-(o*u+s)),f=-h*h+u*(u+2*l)+A;else u=-a,h=Math.max(0,-(o*u+s)),f=-h*h+u*(u+2*l)+A;else u<=-g?(h=Math.max(0,-(-o*a+s)),u=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+u*(u+2*l)+A):u<=g?(h=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+A):(h=Math.max(0,-(o*a+s)),u=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+u*(u+2*l)+A);else u=o>0?-a:a,h=Math.max(0,-(o*u+s)),f=-h*h+u*(u+2*l)+A;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ds).addScaledVector(ua,u),f}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let i=xi.dot(this.direction),n=xi.dot(xi)-i*i,a=e.radius*e.radius;if(n>a)return null;let o=Math.sqrt(a-n),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,o,s,l,A=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return A>=0?(i=(e.min.x-u.x)*A,n=(e.max.x-u.x)*A):(i=(e.max.x-u.x)*A,n=(e.min.x-u.x)*A),c>=0?(a=(e.min.y-u.y)*c,o=(e.max.y-u.y)*c):(a=(e.max.y-u.y)*c,o=(e.min.y-u.y)*c),i>o||a>n?null:((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),h>=0?(s=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(s=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||s>n?null:((s>i||i!=i)&&(i=s),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,n,a){_s.subVectors(t,e),ha.subVectors(i,e),Es.crossVectors(_s,ha);let o,s=this.direction.dot(Es);if(s>0){if(n)return null;o=1}else{if(!(s<0))return null;o=-1,s=-s}Ri.subVectors(this.origin,e);let l=o*this.direction.dot(ha.crossVectors(Ri,ha));if(l<0)return null;let A=o*this.direction.dot(_s.cross(Ri));if(A<0||l+A>s)return null;let c=-o*Ri.dot(Es);return c<0?null:this.at(c/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class r{constructor(e,t,i,n,a,o,s,l,A,c,h,u,f,g,m,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,o,s,l,A,c,h,u,f,g,m,p)}set(e,t,i,n,a,o,s,l,A,c,h,u,f,g,m,p){let P=this.elements;return P[0]=e,P[4]=t,P[8]=i,P[12]=n,P[1]=a,P[5]=o,P[9]=s,P[13]=l,P[2]=A,P[6]=c,P[10]=h,P[14]=u,P[3]=f,P[7]=g,P[11]=m,P[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Sn.setFromMatrixColumn(e,0).length(),a=1/Sn.setFromMatrixColumn(e,1).length(),o=1/Sn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(n),A=Math.sin(n),c=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){let u=o*c,f=o*h,g=s*c,m=s*h;t[0]=l*c,t[4]=-l*h,t[8]=A,t[1]=f+g*A,t[5]=u-m*A,t[9]=-s*l,t[2]=m-u*A,t[6]=g+f*A,t[10]=o*l}else if(e.order==="YXZ"){let u=l*c,f=l*h,g=A*c,m=A*h;t[0]=u+m*s,t[4]=g*s-f,t[8]=o*A,t[1]=o*h,t[5]=o*c,t[9]=-s,t[2]=f*s-g,t[6]=m+u*s,t[10]=o*l}else if(e.order==="ZXY"){let u=l*c,f=l*h,g=A*c,m=A*h;t[0]=u-m*s,t[4]=-o*h,t[8]=g+f*s,t[1]=f+g*s,t[5]=o*c,t[9]=m-u*s,t[2]=-o*A,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){let u=o*c,f=o*h,g=s*c,m=s*h;t[0]=l*c,t[4]=g*A-f,t[8]=u*A+m,t[1]=l*h,t[5]=m*A+u,t[9]=f*A-g,t[2]=-A,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*A,g=s*l,m=s*A;t[0]=l*c,t[4]=m-u*h,t[8]=g*h+f,t[1]=h,t[5]=o*c,t[9]=-s*c,t[2]=-A*c,t[6]=f*h+g,t[10]=u-m*h}else if(e.order==="XZY"){let u=o*l,f=o*A,g=s*l,m=s*A;t[0]=l*c,t[4]=-h,t[8]=A*c,t[1]=u*h+m,t[5]=o*c,t[9]=f*h-g,t[2]=g*h-f,t[6]=s*c,t[10]=m*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lf,e,cf)}lookAt(e,t,i){let n=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),zi.crossVectors(i,Qt),zi.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),zi.crossVectors(i,Qt)),zi.normalize(),fa.crossVectors(Qt,zi),n[0]=zi.x,n[4]=fa.x,n[8]=Qt.x,n[1]=zi.y,n[5]=fa.y,n[9]=Qt.y,n[2]=zi.z,n[6]=fa.z,n[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],A=i[12],c=i[1],h=i[5],u=i[9],f=i[13],g=i[2],m=i[6],p=i[10],P=i[14],d=i[3],M=i[7],v=i[11],b=i[15],y=n[0],w=n[4],U=n[8],I=n[12],z=n[1],Q=n[5],R=n[9],k=n[13],X=n[2],ae=n[6],ue=n[10],x=n[14],D=n[3],S=n[7],T=n[11],V=n[15];return a[0]=o*y+s*z+l*X+A*D,a[4]=o*w+s*Q+l*ae+A*S,a[8]=o*U+s*R+l*ue+A*T,a[12]=o*I+s*k+l*x+A*V,a[1]=c*y+h*z+u*X+f*D,a[5]=c*w+h*Q+u*ae+f*S,a[9]=c*U+h*R+u*ue+f*T,a[13]=c*I+h*k+u*x+f*V,a[2]=g*y+m*z+p*X+P*D,a[6]=g*w+m*Q+p*ae+P*S,a[10]=g*U+m*R+p*ue+P*T,a[14]=g*I+m*k+p*x+P*V,a[3]=d*y+M*z+v*X+b*D,a[7]=d*w+M*Q+v*ae+b*S,a[11]=d*U+M*R+v*ue+b*T,a[15]=d*I+M*k+v*x+b*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],A=e[13],c=e[2],h=e[6],u=e[10],f=e[14];return e[3]*(+a*l*h-n*A*h-a*s*u+i*A*u+n*s*f-i*l*f)+e[7]*(+t*l*f-t*A*u+a*o*u-n*o*f+n*A*c-a*l*c)+e[11]*(+t*A*h-t*s*f-a*o*h+i*o*f+a*s*c-i*A*c)+e[15]*(-n*s*c-t*l*h+t*s*u+n*o*h-i*o*u+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],A=e[7],c=e[8],h=e[9],u=e[10],f=e[11],g=e[12],m=e[13],p=e[14],P=e[15],d=h*p*A-m*u*A+m*l*f-s*p*f-h*l*P+s*u*P,M=g*u*A-c*p*A-g*l*f+o*p*f+c*l*P-o*u*P,v=c*m*A-g*h*A+g*s*f-o*m*f-c*s*P+o*h*P,b=g*h*l-c*m*l-g*s*u+o*m*u+c*s*p-o*h*p,y=t*d+i*M+n*v+a*b;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/y;return e[0]=d*w,e[1]=(m*u*a-h*p*a-m*n*f+i*p*f+h*n*P-i*u*P)*w,e[2]=(s*p*a-m*l*a+m*n*A-i*p*A-s*n*P+i*l*P)*w,e[3]=(h*l*a-s*u*a-h*n*A+i*u*A+s*n*f-i*l*f)*w,e[4]=M*w,e[5]=(c*p*a-g*u*a+g*n*f-t*p*f-c*n*P+t*u*P)*w,e[6]=(g*l*a-o*p*a-g*n*A+t*p*A+o*n*P-t*l*P)*w,e[7]=(o*u*a-c*l*a+c*n*A-t*u*A-o*n*f+t*l*f)*w,e[8]=v*w,e[9]=(g*h*a-c*m*a-g*i*f+t*m*f+c*i*P-t*h*P)*w,e[10]=(o*m*a-g*s*a+g*i*A-t*m*A-o*i*P+t*s*P)*w,e[11]=(c*s*a-o*h*a-c*i*A+t*h*A+o*i*f-t*s*f)*w,e[12]=b*w,e[13]=(c*m*n-g*h*n+g*i*u-t*m*u-c*i*p+t*h*p)*w,e[14]=(g*s*n-o*m*n-g*i*l+t*m*l+o*i*p-t*s*p)*w,e[15]=(o*h*n-c*s*n+c*i*l-t*h*l-o*i*u+t*s*u)*w,this}scale(e){let t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,A=a*o,c=a*s;return this.set(A*o+i,A*s-n*l,A*l+n*s,0,A*s+n*l,c*s+i,c*l-n*o,0,A*l-n*s,c*l+n*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,o){return this.set(1,i,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,A=a+a,c=o+o,h=s+s,u=a*A,f=a*c,g=a*h,m=o*c,p=o*h,P=s*h,d=l*A,M=l*c,v=l*h,b=i.x,y=i.y,w=i.z;return n[0]=(1-(m+P))*b,n[1]=(f+v)*b,n[2]=(g-M)*b,n[3]=0,n[4]=(f-v)*y,n[5]=(1-(u+P))*y,n[6]=(p+d)*y,n[7]=0,n[8]=(g+M)*w,n[9]=(p-d)*w,n[10]=(1-(u+m))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,a=Sn.set(n[0],n[1],n[2]).length(),o=Sn.set(n[4],n[5],n[6]).length(),s=Sn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],ti.copy(this);let l=1/a,A=1/o,c=1/s;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=A,ti.elements[5]*=A,ti.elements[6]*=A,ti.elements[8]*=c,ti.elements[9]*=c,ti.elements[10]*=c,t.setFromRotationMatrix(ti),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,n,a,o,s=2e3){let l=this.elements,A=2*a/(t-e),c=2*a/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),f,g;if(s===Xn)f=-(o+a)/(o-a),g=-2*o*a/(o-a);else{if(s!==Wa)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);f=-o/(o-a),g=-o*a/(o-a)}return l[0]=A,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,o,s=2e3){let l=this.elements,A=1/(t-e),c=1/(i-n),h=1/(o-a),u=(t+e)*A,f=(i+n)*c,g,m;if(s===Xn)g=(o+a)*h,m=-2*h;else{if(s!==Wa)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);g=a*h,m=-1*h}return l[0]=2*A,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Sn=new C,ti=new xe,lf=new C(0,0,0),cf=new C(1,1,1),zi=new C,fa=new C,Qt=new C,j0=new xe,q0=new Nt,Yn=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],A=n[5],c=n[9],h=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(u,A),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,A)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,A)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,A));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,A),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,A),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return j0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return q0.setFromEuler(this),this.setFromQuaternion(q0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";Ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},uf=0,J0=new C,Cn=new Nt,Pi=new xe,pa=new C,vr=new C,hf=new C,ff=new Nt,K0=new C(1,0,0),Z0=new C(0,1,0),$0=new C(0,0,1),pf={type:"added"},df={type:"removed"},zt=class r extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new C,t=new Yn,i=new Nt,n=new C(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new xe},normalMatrix:{value:new Ne}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(e,t){return Cn.setFromAxisAngle(e,t),this.quaternion.premultiply(Cn),this}rotateX(e){return this.rotateOnAxis(K0,e)}rotateY(e){return this.rotateOnAxis(Z0,e)}rotateZ(e){return this.rotateOnAxis($0,e)}translateOnAxis(e,t){return J0.copy(e).applyQuaternion(this.quaternion),this.position.add(J0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(K0,e)}translateY(e){return this.translateOnAxis(Z0,e)}translateZ(e){return this.translateOnAxis($0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pa.copy(e):pa.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(vr,pa,this.up):Pi.lookAt(pa,vr,this.up),this.quaternion.setFromRotationMatrix(Pi),n&&(Pi.extractRotation(n.matrixWorld),Cn.setFromRotationMatrix(Pi),this.quaternion.premultiply(Cn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(df)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let a=t[i];a.matrixWorldAutoUpdate!==!0&&e!==!0||a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let a=0,o=n.length;a<o;a++){let s=n[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let l=s.shapes;if(Array.isArray(l))for(let A=0,c=l.length;A<c;A++){let h=l[A];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let l=0,A=this.material.length;l<A;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){let l=this.animations[s];n.animations.push(a(e.animations,l))}}if(t){let s=o(e.geometries),l=o(e.materials),A=o(e.textures),c=o(e.images),h=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),A.length>0&&(i.textures=A),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(s){let l=[];for(let A in s){let c=s[A];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};zt.DEFAULT_UP=new C(0,1,0),zt.DEFAULT_MATRIX_AUTO_UPDATE=!0,zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ii=new C,yi=new C,Bs=new C,bi=new C,Tn=new C,In=new C,ec=new C,Ss=new C,Cs=new C,Ts=new C,da=!1,sn=class r{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ii.subVectors(e,t),n.cross(ii);let a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){ii.subVectors(n,t),yi.subVectors(i,t),Bs.subVectors(e,t);let o=ii.dot(ii),s=ii.dot(yi),l=ii.dot(Bs),A=yi.dot(yi),c=yi.dot(Bs),h=o*A-s*s;if(h===0)return a.set(0,0,0),null;let u=1/h,f=(A*l-s*c)*u,g=(o*c-s*l)*u;return a.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,bi)!==null&&bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,i,n,a,o,s,l){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),this.getInterpolation(e,t,i,n,a,o,s,l)}static getInterpolation(e,t,i,n,a,o,s,l){return this.getBarycoord(e,t,i,n,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(s,bi.z),l)}static isFrontFacing(e,t,i,n){return ii.subVectors(i,t),yi.subVectors(e,t),ii.cross(yi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),.5*ii.cross(yi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,a){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),r.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}getInterpolation(e,t,i,n,a){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,a=this.c,o,s;Tn.subVectors(n,i),In.subVectors(a,i),Ss.subVectors(e,i);let l=Tn.dot(Ss),A=In.dot(Ss);if(l<=0&&A<=0)return t.copy(i);Cs.subVectors(e,n);let c=Tn.dot(Cs),h=In.dot(Cs);if(c>=0&&h<=c)return t.copy(n);let u=l*h-c*A;if(u<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Tn,o);Ts.subVectors(e,a);let f=Tn.dot(Ts),g=In.dot(Ts);if(g>=0&&f<=g)return t.copy(a);let m=f*A-l*g;if(m<=0&&A>=0&&g<=0)return s=A/(A-g),t.copy(i).addScaledVector(In,s);let p=c*g-f*h;if(p<=0&&h-c>=0&&f-g>=0)return ec.subVectors(a,n),s=(h-c)/(h-c+(f-g)),t.copy(n).addScaledVector(ec,s);let P=1/(p+m+u);return o=m*P,s=u*P,t.copy(i).addScaledVector(Tn,o).addScaledVector(In,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},ga={h:0,s:0,l:0};ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Je.workingColorSpace){if(e=nf(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Is(o,a,e+1/3),this.g=Is(o,a,e),this.b=Is(o,a,e-1/3)}return Je.toWorkingColorSpace(this,n),this}setStyle(e,t=At){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=Kc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Je.fromWorkingColorSpace(Ct.copy(this),e),65536*Math.round(bt(255*Ct.r,0,255))+256*Math.round(bt(255*Ct.g,0,255))+Math.round(bt(255*Ct.b,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Ct.copy(this),t);let i=Ct.r,n=Ct.g,a=Ct.b,o=Math.max(i,n,a),s=Math.min(i,n,a),l,A,c=(s+o)/2;if(s===o)l=0,A=0;else{let h=o-s;switch(A=c<=.5?h/(o+s):h/(2-o-s),o){case i:l=(n-a)/h+(n<a?6:0);break;case n:l=(a-i)/h+2;break;case a:l=(i-n)/h+4}l/=6}return e.h=l,e.s=A,e.l=c,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=At){Je.fromWorkingColorSpace(Ct.copy(this),e);let t=Ct.r,i=Ct.g,n=Ct.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(ga);let i=vs(Ui.h,ga.h,t),n=vs(Ui.s,ga.s,t),a=vs(Ui.l,ga.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new ge;ge.NAMES=Kc;gf=0,un=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=1,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=qs,this.blendEquation=rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wn,this.stencilZFail=wn,this.stencilZPass=wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(a){let o=[];for(let s in a){let l=a[s];delete l.metadata,o.push(l)}return o}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==js&&(i.blendSrc=this.blendSrc),this.blendDst!==qs&&(i.blendDst=this.blendDst),this.blendEquation!==rn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let a=n(e.textures),o=n(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_i=class extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zm=mf();ut=new C,ma=new oe,$e=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Q0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),n=Ot(n,this.array),a=Ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Q0&&(e.usage=this.usage),e}},Ka=class extends $e{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Za=class extends $e{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Pe=class extends $e{constructor(e,t,i){super(new Float32Array(e),t,i)}},vf=0,Yt=new xe,Ls=new zt,Ln=new C,Gt=new pi,Mr=new pi,xt=new C,Ge=class r extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jc(e)?Za:Ka)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ne().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return Ls.lookAt(e),Ls.updateMatrix(),this.applyMatrix4(Ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Pe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let a=t[i];Gt.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new C,1/0);if(e){let i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){let s=t[a];Mr.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(Gt.min,Mr.min),Gt.expandByPoint(xt),xt.addVectors(Gt.max,Mr.max),Gt.expandByPoint(xt)):(Gt.expandByPoint(Mr.min),Gt.expandByPoint(Mr.max))}Gt.getCenter(i);let n=0;for(let a=0,o=e.count;a<o;a++)xt.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(xt));if(t)for(let a=0,o=t.length;a<o;a++){let s=t[a],l=this.morphTargetsRelative;for(let A=0,c=s.count;A<c;A++)xt.fromBufferAttribute(s,A),l&&(Ln.fromBufferAttribute(e,A),xt.add(Ln)),n=Math.max(n,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,a=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*s),4));let l=this.getAttribute("tangent").array,A=[],c=[];for(let z=0;z<s;z++)A[z]=new C,c[z]=new C;let h=new C,u=new C,f=new C,g=new oe,m=new oe,p=new oe,P=new C,d=new C;function M(z,Q,R){h.fromArray(n,3*z),u.fromArray(n,3*Q),f.fromArray(n,3*R),g.fromArray(o,2*z),m.fromArray(o,2*Q),p.fromArray(o,2*R),u.sub(h),f.sub(h),m.sub(g),p.sub(g);let k=1/(m.x*p.y-p.x*m.y);isFinite(k)&&(P.copy(u).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(k),d.copy(f).multiplyScalar(m.x).addScaledVector(u,-p.x).multiplyScalar(k),A[z].add(P),A[Q].add(P),A[R].add(P),c[z].add(d),c[Q].add(d),c[R].add(d))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let z=0,Q=v.length;z<Q;++z){let R=v[z],k=R.start;for(let X=k,ae=k+R.count;X<ae;X+=3)M(i[X+0],i[X+1],i[X+2])}let b=new C,y=new C,w=new C,U=new C;function I(z){w.fromArray(a,3*z),U.copy(w);let Q=A[z];b.copy(Q),b.sub(w.multiplyScalar(w.dot(Q))).normalize(),y.crossVectors(U,Q);let R=y.dot(c[z])<0?-1:1;l[4*z]=b.x,l[4*z+1]=b.y,l[4*z+2]=b.z,l[4*z+3]=R}for(let z=0,Q=v.length;z<Q;++z){let R=v[z],k=R.start;for(let X=k,ae=k+R.count;X<ae;X+=3)I(i[X+0]),I(i[X+1]),I(i[X+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $e(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new C,a=new C,o=new C,s=new C,l=new C,A=new C,c=new C,h=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),m=e.getX(u+1),p=e.getX(u+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),c.subVectors(o,a),h.subVectors(n,a),c.cross(h),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),A.fromBufferAttribute(i,p),s.add(c),l.add(c),A.add(c),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,A.x,A.y,A.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),c.subVectors(o,a),h.subVectors(n,a),c.cross(h),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(s,l){let A=s.array,c=s.itemSize,h=s.normalized,u=new A.constructor(l.length*c),f=0,g=0;for(let m=0,p=l.length;m<p;m++){f=s.isInterleavedBufferAttribute?l[m]*s.data.stride+s.offset:l[m]*c;for(let P=0;P<c;P++)u[g++]=A[f++]}return new $e(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let s in n){let l=e(n[s],i);t.setAttribute(s,l)}let a=this.morphAttributes;for(let s in a){let l=[],A=a[s];for(let c=0,h=A.length;c<h;c++){let u=e(A[c],i);l.push(u)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let s=0,l=o.length;s<l;s++){let A=o[s];t.addGroup(A.start,A.count,A.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let A in l)l[A]!==void 0&&(e[A]=l[A]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let A=i[l];e.data.attributes[l]=A.toJSON(e.data)}let n={},a=!1;for(let l in this.morphAttributes){let A=this.morphAttributes[l],c=[];for(let h=0,u=A.length;h<u;h++){let f=A[h];c.push(f.toJSON(e.data))}c.length>0&&(n[l]=c,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let A in n){let c=n[A];this.setAttribute(A,c.clone(t))}let a=e.morphAttributes;for(let A in a){let c=[],h=a[A];for(let u=0,f=h.length;u<f;u++)c.push(h[u].clone(t));this.morphAttributes[A]=c}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let A=0,c=o.length;A<c;A++){let h=o[A];this.addGroup(h.start,h.count,h.materialIndex)}let s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tc=new xe,en=new ki,va=new di,ic=new C,Rn=new C,zn=new C,Un=new C,Rs=new C,Ma=new C,xa=new oe,Pa=new oe,ya=new oe,nc=new C,rc=new C,ac=new C,ba=new C,wa=new C,Ze=class extends zt{constructor(e=new Ge,t=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){let o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let s=this.morphTargetInfluences;if(a&&s){Ma.set(0,0,0);for(let l=0,A=a.length;l<A;l++){let c=s[l],h=a[l];c!==0&&(Rs.fromBufferAttribute(h,e),o?Ma.addScaledVector(Rs,c):Ma.addScaledVector(Rs.sub(t),c))}t.add(Ma)}return t}raycast(e,t){let i=this.geometry,n=this.material,a=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(a),en.copy(e.ray).recast(e.near),va.containsPoint(en.origin)===!1&&(en.intersectSphere(va,ic)===null||en.origin.distanceToSquared(ic)>(e.far-e.near)**2))return;tc.copy(a).invert(),en.copy(e.ray).applyMatrix4(tc),i.boundingBox!==null&&en.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,en)}}_computeIntersections(e,t,i){let n,a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,A=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,u=a.groups,f=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,m=u.length;g<m;g++){let p=u[g],P=o[p.materialIndex];for(let d=Math.max(p.start,f.start),M=Math.min(s.count,Math.min(p.start+p.count,f.start+f.count));d<M;d+=3)n=Da(this,P,e,i,A,c,h,s.getX(d),s.getX(d+1),s.getX(d+2)),n&&(n.faceIndex=Math.floor(d/3),n.face.materialIndex=p.materialIndex,t.push(n))}else for(let g=Math.max(0,f.start),m=Math.min(s.count,f.start+f.count);g<m;g+=3)n=Da(this,o,e,i,A,c,h,s.getX(g),s.getX(g+1),s.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),t.push(n));else if(l!==void 0)if(Array.isArray(o))for(let g=0,m=u.length;g<m;g++){let p=u[g],P=o[p.materialIndex];for(let d=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));d<M;d+=3)n=Da(this,P,e,i,A,c,h,d,d+1,d+2),n&&(n.faceIndex=Math.floor(d/3),n.face.materialIndex=p.materialIndex,t.push(n))}else for(let g=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);g<m;g+=3)n=Da(this,o,e,i,A,c,h,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}};si=class r extends Ge{constructor(e=1,t=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};let s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);let l=[],A=[],c=[],h=[],u=0,f=0;function g(m,p,P,d,M,v,b,y,w,U,I){let z=v/w,Q=b/U,R=v/2,k=b/2,X=y/2,ae=w+1,ue=U+1,x=0,D=0,S=new C;for(let T=0;T<ue;T++){let V=T*Q-k;for(let J=0;J<ae;J++){let _=J*z-R;S[m]=_*d,S[p]=V*M,S[P]=X,A.push(S.x,S.y,S.z),S[m]=0,S[p]=0,S[P]=y>0?1:-1,c.push(S.x,S.y,S.z),h.push(J/w),h.push(1-T/U),x+=1}}for(let T=0;T<U;T++)for(let V=0;V<w;V++){let J=u+V+ae*T,_=u+V+ae*(T+1),E=u+(V+1)+ae*(T+1),W=u+(V+1)+ae*T;l.push(J,_,W),l.push(_,E,W),D+=6}s.addGroup(f,D,I),f+=D,u+=x}g("z","y","x",-1,-1,i,t,e,o,a,0),g("z","y","x",1,-1,i,t,-e,o,a,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,a,4),g("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new Pe(A,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};tl={clone:jn,merge:Lt},kt=class extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jn(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},_r=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wt=class extends _r{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*tA*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Na*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*tA*Math.atan(Math.tan(.5*Na*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Na*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,A=o.fullHeight;a+=o.offsetX*n/l,t-=o.offsetY*i/A,n*=o.width/l,i*=o.height/A}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},On=-90,aA=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new wt(On,1,e,t);n.layers=this.layers,this.add(n);let a=new wt(On,1,e,t);a.layers=this.layers,this.add(a);let o=new wt(On,1,e,t);o.layers=this.layers,this.add(o);let s=new wt(On,1,e,t);s.layers=this.layers,this.add(s);let l=new wt(On,1,e,t);l.layers=this.layers,this.add(l);let A=new wt(On,1,e,t);A.layers=this.layers,this.add(A)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,a,o,s,l]=t;for(let A of t)this.remove(A);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Wa)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let A of t)this.add(A),A.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,o,s,l,A,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,s),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,A),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,n),e.render(t,c),e.setRenderTarget(h,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},$a=class extends jt{constructor(e,t,i,n,a,o,s,l,A,c){super(e=e!==void 0?e:[],t=t!==void 0?t:kn,i,n,a,o,s,l,A,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oA=class extends gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(Pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===cn?At:hi),this.texture=new $a(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new si(5,5,5),a=new kt({name:"CubemapFromEquirect",uniforms:jn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:0});a.uniforms.tEquirect.value=t;let o=new Ze(n,a),s=t.minFilter;return t.minFilter===Fa&&(t.minFilter=Pt),new aA(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){let a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(a)}},zs=new C,Mf=new C,xf=new Ne,ni=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=zs.subVectors(i,t).cross(Mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(zs),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||xf.getNormalMatrix(e),n=this.coplanarPoint(zs).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},tn=new di,_a=new C,qn=class{constructor(e=new ni,t=new ni,i=new ni,n=new ni,a=new ni,o=new ni){this.planes=[e,t,i,n,a,o]}set(e,t,i,n,a,o){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],A=n[4],c=n[5],h=n[6],u=n[7],f=n[8],g=n[9],m=n[10],p=n[11],P=n[12],d=n[13],M=n[14],v=n[15];if(i[0].setComponents(l-a,u-A,p-f,v-P).normalize(),i[1].setComponents(l+a,u+A,p+f,v+P).normalize(),i[2].setComponents(l+o,u+c,p+g,v+d).normalize(),i[3].setComponents(l-o,u-c,p-g,v-d).normalize(),i[4].setComponents(l-s,u-h,p-m,v-M).normalize(),t===Xn)i[5].setComponents(l+s,u+h,p+m,v+M).normalize();else{if(t!==Wa)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(s,h,m,M).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tn)}intersectsSprite(e){return tn.center.set(0,0,0),tn.radius=.7071067811865476,tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(tn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(_a.x=n.normal.x>0?e.max.x:e.min.x,_a.y=n.normal.y>0?e.max.y:e.min.y,_a.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Jn=class r extends Ge{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(n),A=s+1,c=l+1,h=e/s,u=t/l,f=[],g=[],m=[],p=[];for(let P=0;P<c;P++){let d=P*u-o;for(let M=0;M<A;M++){let v=M*h-a;g.push(v,-d,0),m.push(0,0,1),p.push(M/s),p.push(1-P/l)}}for(let P=0;P<l;P++)for(let d=0;d<s;d++){let M=d+A*P,v=d+A*(P+1),b=d+1+A*(P+1),y=d+1+A*P;f.push(M,v,y),f.push(v,b,y)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(m,3)),this.setAttribute("uv",new Pe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},ze={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ce={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},ui={basic:{uniforms:Lt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Lt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ge(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Lt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Lt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Lt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ge(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Lt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Lt([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Lt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Lt([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Lt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Lt([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Lt([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Lt([ce.lights,ce.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ui.physical={uniforms:Lt([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};Ea={r:0,b:0,g:0};Kn=class extends _r{constructor(e=-1,t=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,a=i-e,o=i+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let A=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=A*this.view.offsetX,o=a+A*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oc=[.125,.215,.35,.446,.526,.582],xr=20,Us=new Kn,sc=new ge,Os=null,Ns=0,Fs=0,nn=(1+Math.sqrt(5))/2,Nn=1/nn,Ac=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,nn,Nn),new C(0,nn,-Nn),new C(Nn,0,nn),new C(-Nn,0,nn),new C(nn,Nn,0),new C(-nn,Nn,0)],eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Os=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Os,Ns,Fs),e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kn||e.mapping===Vn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Os=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Qi,format:Rt,colorSpace:Di,depthBuffer:!1},n=lc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(o){let s=[],l=[],A=[],c=o,h=o-4+1+oc.length;for(let u=0;u<h;u++){let f=Math.pow(2,c);l.push(f);let g=1/f;u>o-4?g=oc[u-o+4-1]:u===0&&(g=0),A.push(g);let m=1/(f-2),p=-m,P=1+m,d=[p,p,P,p,P,P,p,p,P,P,p,P],M=6,v=6,b=3,y=2,w=1,U=new Float32Array(b*v*M),I=new Float32Array(y*v*M),z=new Float32Array(w*v*M);for(let R=0;R<M;R++){let k=R%3*2/3-1,X=R>2?0:-1,ae=[k,X,0,k+2/3,X,0,k+2/3,X+1,0,k,X,0,k+2/3,X+1,0,k,X+1,0];U.set(ae,b*v*R),I.set(d,y*v*R);let ue=[R,R,R,R,R,R];z.set(ue,w*v*R)}let Q=new Ge;Q.setAttribute("position",new $e(U,b)),Q.setAttribute("uv",new $e(I,y)),Q.setAttribute("faceIndex",new $e(z,w)),s.push(Q),c>4&&c--}return{lodPlanes:s,sizeLods:l,sigmas:A}}(a)),this._blurMaterial=function(o,s,l){let A=new Float32Array(xr),c=new C(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/s,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:il(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(a,e,t)}return n}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,i,n){let a=new wt(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,A=l.autoClear,c=l.toneMapping;l.getClearColor(sc),l.toneMapping=Ni,l.autoClear=!1;let h=new _i({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),u=new Ze(new si,h),f=!1,g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,f=!0):(h.color.copy(sc),f=!0);for(let m=0;m<6;m++){let p=m%3;p===0?(a.up.set(0,o[m],0),a.lookAt(s[m],0,0)):p===1?(a.up.set(0,0,o[m]),a.lookAt(0,s[m],0)):(a.up.set(0,o[m],0),a.lookAt(0,0,s[m]));let P=this._cubeSize;Ba(n,p*P,m>2?P:0,P,P),l.setRenderTarget(n),f&&l.render(u,a),l.render(e,a)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=c,l.autoClear=A,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===kn||e.mapping===Vn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());let a=n?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],a);a.uniforms.envMap.value=e;let s=this._cubeSize;Ba(t,0,0,3*s,2*s),i.setRenderTarget(t),i.render(o,Us)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Ac[(n-1)%Ac.length];this._blur(e,n-1,n,a,o)}t.autoClear=i}_blur(e,t,i,n,a){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",a),this._halfBlur(o,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,o,s){let l=this._renderer,A=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new Ze(this._lodPlanes[n],A),h=A.uniforms,u=this._sizeLods[i]-1,f=isFinite(a)?Math.PI/(2*u):2*Math.PI/39,g=a/f,m=isFinite(a)?1+Math.floor(3*g):xr;m>xr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let p=[],P=0;for(let v=0;v<xr;++v){let b=v/g,y=Math.exp(-b*b/2);p.push(y),v===0?P+=y:v<m&&(P+=2*y)}for(let v=0;v<p.length;v++)p[v]=p[v]/P;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);let{_lodMax:d}=this;h.dTheta.value=f,h.mipInt.value=d-i;let M=this._sizeLods[n];Ba(t,3*M*(n>d-4?n-d+4:0),4*(this._cubeSize-M),3*M,2*M),l.setRenderTarget(t),l.render(c,Us)}};Zn=class extends jt{constructor(e,t,i,n,a,o,s,l,A,c){if((c=c!==void 0?c:ln)!==ln&&c!==Wn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ln&&(i=fi),i===void 0&&c===Wn&&(i=An),super(null,n,a,o,s,l,c,i,A),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},eu=new jt,tu=new Zn(1,1);tu.compareFunction=515;iu=new qa,nu=new rA,ru=new $a,hc=[],fc=[],pc=new Float32Array(16),dc=new Float32Array(9),gc=new Float32Array(4);sA=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return Of;case 35664:return Nf;case 35665:return Ff;case 35666:return Hf;case 35674:return Qf;case 35675:return Gf;case 35676:return kf;case 5124:case 35670:return Vf;case 35667:case 35671:return Wf;case 35668:case 35672:return Xf;case 35669:case 35673:return Yf;case 5125:return jf;case 36294:return qf;case 36295:return Jf;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Zf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return tp}}(t.type)}},AA=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return ip;case 35664:return np;case 35665:return rp;case 35666:return ap;case 35674:return op;case 35675:return sp;case 35676:return Ap;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return up;case 35669:case 35673:return hp;case 5125:return fp;case 36294:return pp;case 36295:return dp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return xp}}(t.type)}},lA=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let a=0,o=n.length;a!==o;++a){let s=n[a];s.setValue(e,t[s.id],i)}}},Hs=/(\w+)(\])?(\[|\.)?/g;Gn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let a=e.getActiveUniform(t,n);Pp(a,e.getUniformLocation(t,a.name),this)}}setValue(e,t,i,n){let a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,o=t.length;a!==o;++a){let s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,a=e.length;n!==a;++n){let o=e[n];o.id in t&&i.push(o)}return i}};yp=37297,bp=0;_p=/^[ \t]*#include +<([\w\d./]+)>/gm;Ep=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);Sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ip=0,uA=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hA(e),t.set(e,i)),i}},hA=class{constructor(e){this.id=Ip++,this.code=e,this.usedTimes=0}};Np=0;fA=class extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pA=class extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};dA=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xp={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,o=null,s=this._targetRay,l=this._grip,A=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(A&&e.hand){o=!0;for(let m of e.hand.values()){let p=t.getJointPose(m,i),P=this._getHandJoint(A,m);p!==null&&(P.matrix.fromArray(p.transform.matrix),P.matrix.decompose(P.position,P.rotation,P.scale),P.matrixWorldNeedsUpdate=!0,P.jointRadius=p.radius),P.visible=p!==null}let c=A.joints["index-finger-tip"],h=A.joints["thumb-tip"],u=c.position.distanceTo(h.position),f=.02,g=.005;A.inputState.pinching&&u>f+g?(A.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!A.inputState.pinching&&u<=f-g&&(A.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),A!==null&&(A.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},gA=class extends Gi{constructor(e,t){super();let i=this,n=null,a=1,o=null,s="local-floor",l=1,A=null,c=null,h=null,u=null,f=null,g=null,m=t.getContextAttributes(),p=null,P=null,d=[],M=[],v=new oe,b=null,y=new wt;y.layers.enable(1),y.viewport=new Ke;let w=new wt;w.layers.enable(2),w.viewport=new Ke;let U=[y,w],I=new dA;I.layers.enable(1),I.layers.enable(2);let z=null,Q=null;function R(T){let V=M.indexOf(T.inputSource);if(V===-1)return;let J=d[V];J!==void 0&&(J.update(T.inputSource,T.frame,A||o),J.dispatchEvent({type:T.type,data:T.inputSource}))}function k(){n.removeEventListener("select",R),n.removeEventListener("selectstart",R),n.removeEventListener("selectend",R),n.removeEventListener("squeeze",R),n.removeEventListener("squeezestart",R),n.removeEventListener("squeezeend",R),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",X);for(let T=0;T<d.length;T++){let V=M[T];V!==null&&(M[T]=null,d[T].disconnect(V))}z=null,Q=null,e.setRenderTarget(p),f=null,u=null,h=null,n=null,P=null,S.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(v.width,v.height,!1),i.dispatchEvent({type:"sessionend"})}function X(T){for(let V=0;V<T.removed.length;V++){let J=T.removed[V],_=M.indexOf(J);_>=0&&(M[_]=null,d[_].disconnect(J))}for(let V=0;V<T.added.length;V++){let J=T.added[V],_=M.indexOf(J);if(_===-1){for(let W=0;W<d.length;W++){if(W>=M.length){M.push(J),_=W;break}if(M[W]===null){M[W]=J,_=W;break}}if(_===-1)break}let E=d[_];E&&E.connect(J)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let V=d[T];return V===void 0&&(V=new yr,d[T]=V),V.getTargetRaySpace()},this.getControllerGrip=function(T){let V=d[T];return V===void 0&&(V=new yr,d[T]=V),V.getGripSpace()},this.getHand=function(T){let V=d[T];return V===void 0&&(V=new yr,d[T]=V),V.getHandSpace()},this.setFramebufferScaleFactor=function(T){a=T,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){s=T,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return A||o},this.setReferenceSpace=function(T){A=T},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(T){if(n=T,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",R),n.addEventListener("selectstart",R),n.addEventListener("selectend",R),n.addEventListener("squeeze",R),n.addEventListener("squeezestart",R),n.addEventListener("squeezeend",R),n.addEventListener("end",k),n.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(v),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let V={antialias:n.renderState.layers!==void 0||m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(n,t,V),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),P=new gt(f.framebufferWidth,f.framebufferHeight,{format:Rt,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,J=null,_=null;m.depth&&(_=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=m.stencil?Wn:ln,J=m.stencil?An:fi);let E={colorFormat:t.RGBA8,depthFormat:_,scaleFactor:a};h=new XRWebGLBinding(n,t),u=h.createProjectionLayer(E),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),P=new gt(u.textureWidth,u.textureHeight,{format:Rt,type:ai,depthTexture:new Zn(u.textureWidth,u.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0}),e.properties.get(P).__ignoreDepthValues=u.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(l),A=null,o=await n.requestReferenceSpace(s),S.setContext(n),S.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let ae=new C,ue=new C;function x(T,V){V===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(V.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(n===null)return;I.near=w.near=y.near=T.near,I.far=w.far=y.far=T.far,z===I.near&&Q===I.far||(n.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,Q=I.far);let V=T.parent,J=I.cameras;x(I,V);for(let _=0;_<J.length;_++)x(J[_],V);J.length===2?function(_,E,W){ae.setFromMatrixPosition(E.matrixWorld),ue.setFromMatrixPosition(W.matrixWorld);let ee=ae.distanceTo(ue),N=E.projectionMatrix.elements,$=W.projectionMatrix.elements,H=N[14]/(N[10]-1),G=N[14]/(N[10]+1),Y=(N[9]+1)/N[5],re=(N[9]-1)/N[5],ie=(N[8]-1)/N[0],B=($[8]+1)/$[0],se=H*ie,j=H*B,q=ee/(-ie+B),Ae=q*-ie;E.matrixWorld.decompose(_.position,_.quaternion,_.scale),_.translateX(Ae),_.translateZ(q),_.matrixWorld.compose(_.position,_.quaternion,_.scale),_.matrixWorldInverse.copy(_.matrixWorld).invert();let he=H+q,de=G+q,me=se-Ae,Ie=j+(ee-Ae),ve=Y*G/de*he,Me=re*G/de*he;_.projectionMatrix.makePerspective(me,Ie,ve,Me,he,de),_.projectionMatrixInverse.copy(_.projectionMatrix).invert()}(I,y,w):I.projectionMatrix.copy(y.projectionMatrix),function(_,E,W){W===null?_.matrix.copy(E.matrixWorld):(_.matrix.copy(W.matrixWorld),_.matrix.invert(),_.matrix.multiply(E.matrixWorld)),_.matrix.decompose(_.position,_.quaternion,_.scale),_.updateMatrixWorld(!0),_.projectionMatrix.copy(E.projectionMatrix),_.projectionMatrixInverse.copy(E.projectionMatrixInverse),_.isPerspectiveCamera&&(_.fov=2*tA*Math.atan(1/_.projectionMatrix.elements[5]),_.zoom=1)}(T,I,V)},this.getCamera=function(){return I},this.getFoveation=function(){if(u!==null||f!==null)return l},this.setFoveation=function(T){l=T,u!==null&&(u.fixedFoveation=T),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=T)};let D=null,S=new $c;S.setAnimationLoop(function(T,V){if(c=V.getViewerPose(A||o),g=V,c!==null){let J=c.views;f!==null&&(e.setRenderTargetFramebuffer(P,f.framebuffer),e.setRenderTarget(P));let _=!1;J.length!==I.cameras.length&&(I.cameras.length=0,_=!0);for(let E=0;E<J.length;E++){let W=J[E],ee=null;if(f!==null)ee=f.getViewport(W);else{let $=h.getViewSubImage(u,W);ee=$.viewport,E===0&&(e.setRenderTargetTextures(P,$.colorTexture,u.ignoreDepthValues?void 0:$.depthStencilTexture),e.setRenderTarget(P))}let N=U[E];N===void 0&&(N=new wt,N.layers.enable(E),N.viewport=new Ke,U[E]=N),N.matrix.fromArray(W.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(W.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(ee.x,ee.y,ee.width,ee.height),E===0&&(I.matrix.copy(N.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),_===!0&&I.cameras.push(N)}}for(let J=0;J<d.length;J++){let _=M[J],E=d[J];_!==null&&E!==void 0&&E.update(_,V,A||o)}D&&D(T,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}),this.setAnimationLoop=function(T){D=T},this.dispose=function(){}}};Er=class{constructor(e={}){let{canvas:t=rf(),context:i=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:A=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e,u;this.isWebGLRenderer=!0,u=i!==null?i.getContextAttributes().alpha:o;let f=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,P=[],d=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=Ni,this.toneMappingExposure=1;let M=this,v=!1,b=0,y=0,w=null,U=-1,I=null,z=new Ke,Q=new Ke,R=null,k=new ge(0),X=0,ae=t.width,ue=t.height,x=1,D=null,S=null,T=new Ke(0,0,ae,ue),V=new Ke(0,0,ae,ue),J=!1,_=new qn,E=!1,W=!1,ee=null,N=new xe,$=new oe,H=new C,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Y(){return w===null?x:1}let re,ie,B,se,j,q,Ae,he,de,me,Ie,ve,Me,Ue,Mt,be,Xe,He,ta,yn,ia,Vt,Ht,bn,Z=i;function na(L,K){for(let te=0;te<L.length;te++){let le=L[te],ne=t.getContext(le,K);if(ne!==null)return ne}return null}try{let L={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:A,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ys}`),t.addEventListener("webglcontextlost",Jl,!1),t.addEventListener("webglcontextrestored",Kl,!1),t.addEventListener("webglcontextcreationerror",Zl,!1),Z===null){let K=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&K.shift(),Z=na(K,L),Z===null)throw na(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}function hr(){re=new Sf(Z),ie=new Df(Z,re,e),re.init(ie),Vt=new Wp(Z,re,ie),B=new kp(Z,re,ie),se=new If(Z),j=new Rp,q=new Vp(Z,re,B,j,ie,Vt,se),Ae=new Ef(M),he=new Bf(M),de=new Pf(Z,ie),Ht=new bf(Z,re,de,ie),me=new Cf(Z,de,se,Ht),Ie=new Uf(Z,me,de,se),ta=new zf(Z,ie,q),be=new _f(j),ve=new Lp(M,Ae,he,re,ie,Ht,be),Me=new Yp(M,j),Ue=new Up,Mt=new Qp(re,ie),He=new yf(M,Ae,he,B,Ie,u,l),Xe=new Gp(M,Ie,ie),bn=new jp(Z,se,ie,B),yn=new wf(Z,re,se,ie),ia=new Tf(Z,re,se,ie),se.programs=ve.programs,M.capabilities=ie,M.extensions=re,M.properties=j,M.renderLists=Ue,M.shadowMap=Xe,M.state=B,M.info=se}hr();let Et=new gA(M,Z);function Jl(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Kl(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let L=se.autoReset,K=Xe.enabled,te=Xe.autoUpdate,le=Xe.needsUpdate,ne=Xe.type;hr(),se.autoReset=L,Xe.enabled=K,Xe.autoUpdate=te,Xe.needsUpdate=le,Xe.type=ne}function Zl(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function $l(L){let K=L.target;K.removeEventListener("dispose",$l),function(te){(function(le){let ne=j.get(le).programs;ne!==void 0&&(ne.forEach(function(fe){ve.releaseProgram(fe)}),le.isShaderMaterial&&ve.releaseShaderCache(le))})(te),j.remove(te)}(K)}function e0(L,K,te){L.transparent===!0&&L.side===2&&L.forceSinglePass===!1?(L.side=Dt,L.needsUpdate=!0,aa(L,K,te),L.side=Hi,L.needsUpdate=!0,aa(L,K,te),L.side=2):aa(L,K,te)}this.xr=Et,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let L=re.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=re.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return x},this.setPixelRatio=function(L){L!==void 0&&(x=L,this.setSize(ae,ue,!1))},this.getSize=function(L){return L.set(ae,ue)},this.setSize=function(L,K,te=!0){Et.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ae=L,ue=K,t.width=Math.floor(L*x),t.height=Math.floor(K*x),te===!0&&(t.style.width=L+"px",t.style.height=K+"px"),this.setViewport(0,0,L,K))},this.getDrawingBufferSize=function(L){return L.set(ae*x,ue*x).floor()},this.setDrawingBufferSize=function(L,K,te){ae=L,ue=K,x=te,t.width=Math.floor(L*te),t.height=Math.floor(K*te),this.setViewport(0,0,L,K)},this.getCurrentViewport=function(L){return L.copy(z)},this.getViewport=function(L){return L.copy(T)},this.setViewport=function(L,K,te,le){L.isVector4?T.set(L.x,L.y,L.z,L.w):T.set(L,K,te,le),B.viewport(z.copy(T).multiplyScalar(x).floor())},this.getScissor=function(L){return L.copy(V)},this.setScissor=function(L,K,te,le){L.isVector4?V.set(L.x,L.y,L.z,L.w):V.set(L,K,te,le),B.scissor(Q.copy(V).multiplyScalar(x).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(L){B.setScissorTest(J=L)},this.setOpaqueSort=function(L){D=L},this.setTransparentSort=function(L){S=L},this.getClearColor=function(L){return L.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(L=!0,K=!0,te=!0){let le=0;if(L){let ne=!1;if(w!==null){let fe=w.texture.format;ne=fe===Yc||fe===Xc||fe===Wc}if(ne){let fe=w.texture.type,_e=fe===ai||fe===fi||fe===$A||fe===An||fe===Gc||fe===kc,Ce=He.getClearColor(),Oe=He.getClearAlpha(),Fe=Ce.r,Qe=Ce.g,ke=Ce.b;_e?(f[0]=Fe,f[1]=Qe,f[2]=ke,f[3]=Oe,Z.clearBufferuiv(Z.COLOR,0,f)):(g[0]=Fe,g[1]=Qe,g[2]=ke,g[3]=Oe,Z.clearBufferiv(Z.COLOR,0,g))}else le|=Z.COLOR_BUFFER_BIT}K&&(le|=Z.DEPTH_BUFFER_BIT),te&&(le|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Jl,!1),t.removeEventListener("webglcontextrestored",Kl,!1),t.removeEventListener("webglcontextcreationerror",Zl,!1),Ue.dispose(),Mt.dispose(),j.dispose(),Ae.dispose(),he.dispose(),Ie.dispose(),Ht.dispose(),bn.dispose(),ve.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",t0),Et.removeEventListener("sessionend",i0),ee&&(ee.dispose(),ee=null),ji.stop()},this.renderBufferDirect=function(L,K,te,le,ne,fe){K===null&&(K=G);let _e=ne.isMesh&&ne.matrixWorld.determinant()<0,Ce=function(dt,Wt,Ut,Ve,Ye){Wt.isScene!==!0&&(Wt=G),q.resetTextureUnits();let fr=Wt.fog,ss=Ve.isMeshStandardMaterial?Wt.environment:null,Uh=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Di,oa=(Ve.isMeshStandardMaterial?he:Ae).get(Ve.envMap||ss),Oh=Ve.vertexColors===!0&&!!Ut.attributes.color&&Ut.attributes.color.itemSize===4,Nh=!!Ut.attributes.tangent&&(!!Ve.normalMap||Ve.anisotropy>0),Fh=!!Ut.morphAttributes.position,Hh=!!Ut.morphAttributes.normal,Qh=!!Ut.morphAttributes.color,A0=Ni;Ve.toneMapped&&(w!==null&&w.isXRRenderTarget!==!0||(A0=M.toneMapping));let l0=Ut.morphAttributes.position||Ut.morphAttributes.normal||Ut.morphAttributes.color,Gh=l0!==void 0?l0.length:0,je=j.get(Ve),kh=p.state.lights;if(E===!0&&(W===!0||dt!==I)){let Xt=dt===I&&Ve.id===U;be.setState(Ve,dt,Xt)}let Zt=!1;Ve.version===je.__version?je.needsLights&&je.lightsStateVersion!==kh.state.version||je.outputColorSpace!==Uh||Ye.isBatchedMesh&&je.batching===!1?Zt=!0:Ye.isBatchedMesh||je.batching!==!0?Ye.isInstancedMesh&&je.instancing===!1?Zt=!0:Ye.isInstancedMesh||je.instancing!==!0?Ye.isSkinnedMesh&&je.skinning===!1?Zt=!0:Ye.isSkinnedMesh||je.skinning!==!0?Ye.isInstancedMesh&&je.instancingColor===!0&&Ye.instanceColor===null||Ye.isInstancedMesh&&je.instancingColor===!1&&Ye.instanceColor!==null||je.envMap!==oa||Ve.fog===!0&&je.fog!==fr?Zt=!0:je.numClippingPlanes===void 0||je.numClippingPlanes===be.numPlanes&&je.numIntersection===be.numIntersection?(je.vertexAlphas!==Oh||je.vertexTangents!==Nh||je.morphTargets!==Fh||je.morphNormals!==Hh||je.morphColors!==Qh||je.toneMapping!==A0||ie.isWebGL2===!0&&je.morphTargetsCount!==Gh)&&(Zt=!0):Zt=!0:Zt=!0:Zt=!0:Zt=!0:(Zt=!0,je.__version=Ve.version);let Ji=je.currentProgram;Zt===!0&&(Ji=aa(Ve,Wt,Ye));let c0=!1,pr=!1,As=!1,Bt=Ji.getUniforms(),Ki=je.uniforms;if(B.useProgram(Ji.program)&&(c0=!0,pr=!0,As=!0),Ve.id!==U&&(U=Ve.id,pr=!0),c0||I!==dt){Bt.setValue(Z,"projectionMatrix",dt.projectionMatrix),Bt.setValue(Z,"viewMatrix",dt.matrixWorldInverse);let Xt=Bt.map.cameraPosition;Xt!==void 0&&Xt.setValue(Z,H.setFromMatrixPosition(dt.matrixWorld)),ie.logarithmicDepthBuffer&&Bt.setValue(Z,"logDepthBufFC",2/(Math.log(dt.far+1)/Math.LN2)),(Ve.isMeshPhongMaterial||Ve.isMeshToonMaterial||Ve.isMeshLambertMaterial||Ve.isMeshBasicMaterial||Ve.isMeshStandardMaterial||Ve.isShaderMaterial)&&Bt.setValue(Z,"isOrthographic",dt.isOrthographicCamera===!0),I!==dt&&(I=dt,pr=!0,As=!0)}if(Ye.isSkinnedMesh){Bt.setOptional(Z,Ye,"bindMatrix"),Bt.setOptional(Z,Ye,"bindMatrixInverse");let Xt=Ye.skeleton;Xt&&(ie.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Bt.setValue(Z,"boneTexture",Xt.boneTexture,q)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ye.isBatchedMesh&&(Bt.setOptional(Z,Ye,"batchingTexture"),Bt.setValue(Z,"batchingTexture",Ye._matricesTexture,q));let ls=Ut.morphAttributes;(ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0&&ie.isWebGL2===!0)&&ta.update(Ye,Ut,Ji),(pr||je.receiveShadow!==Ye.receiveShadow)&&(je.receiveShadow=Ye.receiveShadow,Bt.setValue(Z,"receiveShadow",Ye.receiveShadow)),Ve.isMeshGouraudMaterial&&Ve.envMap!==null&&(Ki.envMap.value=oa,Ki.flipEnvMap.value=oa.isCubeTexture&&oa.isRenderTargetTexture===!1?-1:1),pr&&(Bt.setValue(Z,"toneMappingExposure",M.toneMappingExposure),je.needsLights&&($t=As,(ci=Ki).ambientLightColor.needsUpdate=$t,ci.lightProbe.needsUpdate=$t,ci.directionalLights.needsUpdate=$t,ci.directionalLightShadows.needsUpdate=$t,ci.pointLights.needsUpdate=$t,ci.pointLightShadows.needsUpdate=$t,ci.spotLights.needsUpdate=$t,ci.spotLightShadows.needsUpdate=$t,ci.rectAreaLights.needsUpdate=$t,ci.hemisphereLights.needsUpdate=$t),fr&&Ve.fog===!0&&Me.refreshFogUniforms(Ki,fr),Me.refreshMaterialUniforms(Ki,Ve,x,ue,ee),Gn.upload(Z,o0(je),Ki,q));var ci,$t;if(Ve.isShaderMaterial&&Ve.uniformsNeedUpdate===!0&&(Gn.upload(Z,o0(je),Ki,q),Ve.uniformsNeedUpdate=!1),Ve.isSpriteMaterial&&Bt.setValue(Z,"center",Ye.center),Bt.setValue(Z,"modelViewMatrix",Ye.modelViewMatrix),Bt.setValue(Z,"normalMatrix",Ye.normalMatrix),Bt.setValue(Z,"modelMatrix",Ye.matrixWorld),Ve.isShaderMaterial||Ve.isRawShaderMaterial){let Xt=Ve.uniformsGroups;for(let cs=0,Vh=Xt.length;cs<Vh;cs++)if(ie.isWebGL2){let u0=Xt[cs];bn.update(u0,Ji),bn.bind(u0,Ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ji}(L,K,te,le,ne);B.setMaterial(le,_e);let Oe=te.index,Fe=1;if(le.wireframe===!0){if(Oe=me.getWireframeAttribute(te),Oe===void 0)return;Fe=2}let Qe=te.drawRange,ke=te.attributes.position,at=Qe.start*Fe,Kt=(Qe.start+Qe.count)*Fe;fe!==null&&(at=Math.max(at,fe.start*Fe),Kt=Math.min(Kt,(fe.start+fe.count)*Fe)),Oe!==null?(at=Math.max(at,0),Kt=Math.min(Kt,Oe.count)):ke!=null&&(at=Math.max(at,0),Kt=Math.min(Kt,ke.count));let vi=Kt-at;if(vi<0||vi===1/0)return;let qi;Ht.setup(ne,le,Ce,te,Oe);let ot=yn;if(Oe!==null&&(qi=de.get(Oe),ot=ia,ot.setIndex(qi)),ne.isMesh)le.wireframe===!0?(B.setLineWidth(le.wireframeLinewidth*Y()),ot.setMode(Z.LINES)):ot.setMode(Z.TRIANGLES);else if(ne.isLine){let dt=le.linewidth;dt===void 0&&(dt=1),B.setLineWidth(dt*Y()),ne.isLineSegments?ot.setMode(Z.LINES):ne.isLineLoop?ot.setMode(Z.LINE_LOOP):ot.setMode(Z.LINE_STRIP)}else ne.isPoints?ot.setMode(Z.POINTS):ne.isSprite&&ot.setMode(Z.TRIANGLES);if(ne.isBatchedMesh)ot.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)ot.renderInstances(at,vi,ne.count);else if(te.isInstancedBufferGeometry){let dt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Wt=Math.min(te.instanceCount,dt);ot.renderInstances(at,vi,Wt)}else ot.render(at,vi)},this.compile=function(L,K,te=null){te===null&&(te=L),p=Mt.get(te),p.init(),d.push(p),te.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),L!==te&&L.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),p.setupLights(M._useLegacyLights);let le=new Set;return L.traverse(function(ne){let fe=ne.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){let Ce=fe[_e];e0(Ce,te,ne),le.add(Ce)}else e0(fe,te,ne),le.add(fe)}),d.pop(),p=null,le},this.compileAsync=function(L,K,te=null){let le=this.compile(L,K,te);return new Promise(ne=>{function fe(){le.forEach(function(_e){j.get(_e).currentProgram.isReady()&&le.delete(_e)}),le.size!==0?setTimeout(fe,10):ne(L)}re.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let os=null;function t0(){ji.stop()}function i0(){ji.start()}let ji=new $c;function n0(L,K,te,le){if(L.visible===!1)return;if(L.layers.test(K.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(K);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||_.intersectsSprite(L)){le&&H.setFromMatrixPosition(L.matrixWorld).applyMatrix4(N);let fe=Ie.update(L),_e=L.material;_e.visible&&m.push(L,fe,_e,te,H.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||_.intersectsObject(L))){let fe=Ie.update(L),_e=L.material;if(le&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),H.copy(L.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),H.copy(fe.boundingSphere.center)),H.applyMatrix4(L.matrixWorld).applyMatrix4(N)),Array.isArray(_e)){let Ce=fe.groups;for(let Oe=0,Fe=Ce.length;Oe<Fe;Oe++){let Qe=Ce[Oe],ke=_e[Qe.materialIndex];ke&&ke.visible&&m.push(L,fe,ke,te,H.z,Qe)}}else _e.visible&&m.push(L,fe,_e,te,H.z,null)}}let ne=L.children;for(let fe=0,_e=ne.length;fe<_e;fe++)n0(ne[fe],K,te,le)}function r0(L,K,te,le){let ne=L.opaque,fe=L.transmissive,_e=L.transparent;p.setupLightsView(te),E===!0&&be.setGlobalState(M.clippingPlanes,te),fe.length>0&&function(Ce,Oe,Fe,Qe){if((Fe.isScene===!0?Fe.overrideMaterial:null)!==null)return;let at=ie.isWebGL2;ee===null&&(ee=new gt(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?Qi:ai,minFilter:Fa,samples:at?4:0})),M.getDrawingBufferSize($),at?ee.setSize($.x,$.y):ee.setSize(iA($.x),iA($.y));let Kt=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(k),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear();let vi=M.toneMapping;M.toneMapping=Ni,ra(Ce,Fe,Qe),q.updateMultisampleRenderTarget(ee),q.updateRenderTargetMipmap(ee);let qi=!1;for(let ot=0,dt=Oe.length;ot<dt;ot++){let Wt=Oe[ot],Ut=Wt.object,Ve=Wt.geometry,Ye=Wt.material,fr=Wt.group;if(Ye.side===2&&Ut.layers.test(Qe.layers)){let ss=Ye.side;Ye.side=Dt,Ye.needsUpdate=!0,a0(Ut,Fe,Qe,Ve,Ye,fr),Ye.side=ss,Ye.needsUpdate=!0,qi=!0}}qi===!0&&(q.updateMultisampleRenderTarget(ee),q.updateRenderTargetMipmap(ee)),M.setRenderTarget(Kt),M.setClearColor(k,X),M.toneMapping=vi}(ne,fe,K,te),le&&B.viewport(z.copy(le)),ne.length>0&&ra(ne,K,te),fe.length>0&&ra(fe,K,te),_e.length>0&&ra(_e,K,te),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function ra(L,K,te){let le=K.isScene===!0?K.overrideMaterial:null;for(let ne=0,fe=L.length;ne<fe;ne++){let _e=L[ne],Ce=_e.object,Oe=_e.geometry,Fe=le===null?_e.material:le,Qe=_e.group;Ce.layers.test(te.layers)&&a0(Ce,K,te,Oe,Fe,Qe)}}function a0(L,K,te,le,ne,fe){L.onBeforeRender(M,K,te,le,ne,fe),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ne.onBeforeRender(M,K,te,le,L,fe),ne.transparent===!0&&ne.side===2&&ne.forceSinglePass===!1?(ne.side=Dt,ne.needsUpdate=!0,M.renderBufferDirect(te,K,le,ne,L,fe),ne.side=Hi,ne.needsUpdate=!0,M.renderBufferDirect(te,K,le,ne,L,fe),ne.side=2):M.renderBufferDirect(te,K,le,ne,L,fe),L.onAfterRender(M,K,te,le,ne,fe)}function aa(L,K,te){K.isScene!==!0&&(K=G);let le=j.get(L),ne=p.state.lights,fe=p.state.shadowsArray,_e=ne.state.version,Ce=ve.getParameters(L,ne.state,fe,K,te),Oe=ve.getProgramCacheKey(Ce),Fe=le.programs;le.environment=L.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(L.isMeshStandardMaterial?he:Ae).get(L.envMap||le.environment),Fe===void 0&&(L.addEventListener("dispose",$l),Fe=new Map,le.programs=Fe);let Qe=Fe.get(Oe);if(Qe!==void 0){if(le.currentProgram===Qe&&le.lightsStateVersion===_e)return s0(L,Ce),Qe}else Ce.uniforms=ve.getUniforms(L),L.onBuild(te,Ce,M),L.onBeforeCompile(Ce,M),Qe=ve.acquireProgram(Ce,Oe),Fe.set(Oe,Qe),le.uniforms=Ce.uniforms;let ke=le.uniforms;return(L.isShaderMaterial||L.isRawShaderMaterial)&&L.clipping!==!0||(ke.clippingPlanes=be.uniform),s0(L,Ce),le.needsLights=function(at){return at.isMeshLambertMaterial||at.isMeshToonMaterial||at.isMeshPhongMaterial||at.isMeshStandardMaterial||at.isShadowMaterial||at.isShaderMaterial&&at.lights===!0}(L),le.lightsStateVersion=_e,le.needsLights&&(ke.ambientLightColor.value=ne.state.ambient,ke.lightProbe.value=ne.state.probe,ke.directionalLights.value=ne.state.directional,ke.directionalLightShadows.value=ne.state.directionalShadow,ke.spotLights.value=ne.state.spot,ke.spotLightShadows.value=ne.state.spotShadow,ke.rectAreaLights.value=ne.state.rectArea,ke.ltc_1.value=ne.state.rectAreaLTC1,ke.ltc_2.value=ne.state.rectAreaLTC2,ke.pointLights.value=ne.state.point,ke.pointLightShadows.value=ne.state.pointShadow,ke.hemisphereLights.value=ne.state.hemi,ke.directionalShadowMap.value=ne.state.directionalShadowMap,ke.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ke.spotShadowMap.value=ne.state.spotShadowMap,ke.spotLightMatrix.value=ne.state.spotLightMatrix,ke.spotLightMap.value=ne.state.spotLightMap,ke.pointShadowMap.value=ne.state.pointShadowMap,ke.pointShadowMatrix.value=ne.state.pointShadowMatrix),le.currentProgram=Qe,le.uniformsList=null,Qe}function o0(L){if(L.uniformsList===null){let K=L.currentProgram.getUniforms();L.uniformsList=Gn.seqWithValue(K.seq,L.uniforms)}return L.uniformsList}function s0(L,K){let te=j.get(L);te.outputColorSpace=K.outputColorSpace,te.batching=K.batching,te.instancing=K.instancing,te.instancingColor=K.instancingColor,te.skinning=K.skinning,te.morphTargets=K.morphTargets,te.morphNormals=K.morphNormals,te.morphColors=K.morphColors,te.morphTargetsCount=K.morphTargetsCount,te.numClippingPlanes=K.numClippingPlanes,te.numIntersection=K.numClipIntersection,te.vertexAlphas=K.vertexAlphas,te.vertexTangents=K.vertexTangents,te.toneMapping=K.toneMapping}ji.setAnimationLoop(function(L){os&&os(L)}),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(L){os=L,Et.setAnimationLoop(L),L===null?ji.stop():ji.start()},Et.addEventListener("sessionstart",t0),Et.addEventListener("sessionend",i0),this.render=function(L,K){if(K!==void 0&&K.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(v===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(K),K=Et.getCamera()),L.isScene===!0&&L.onBeforeRender(M,L,K,w),p=Mt.get(L,d.length),p.init(),d.push(p),N.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),_.setFromProjectionMatrix(N),W=this.localClippingEnabled,E=be.init(this.clippingPlanes,W),m=Ue.get(L,P.length),m.init(),P.push(m),n0(L,K,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(D,S),this.info.render.frame++,E===!0&&be.beginShadows();let te=p.state.shadowsArray;if(Xe.render(te,L,K),E===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),He.render(m,L),p.setupLights(M._useLegacyLights),K.isArrayCamera){let le=K.cameras;for(let ne=0,fe=le.length;ne<fe;ne++){let _e=le[ne];r0(m,L,_e,_e.viewport)}}else r0(m,L,K);w!==null&&(q.updateMultisampleRenderTarget(w),q.updateRenderTargetMipmap(w)),L.isScene===!0&&L.onAfterRender(M,L,K),Ht.resetDefaultState(),U=-1,I=null,d.pop(),p=d.length>0?d[d.length-1]:null,P.pop(),m=P.length>0?P[P.length-1]:null},this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,K,te){j.get(L.texture).__webglTexture=K,j.get(L.depthTexture).__webglTexture=te;let le=j.get(L);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=te===void 0,le.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,K){let te=j.get(L);te.__webglFramebuffer=K,te.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(L,K=0,te=0){w=L,b=K,y=te;let le=!0,ne=null,fe=!1,_e=!1;if(L){let Ce=j.get(L);Ce.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(Z.FRAMEBUFFER,null),le=!1):Ce.__webglFramebuffer===void 0?q.setupRenderTarget(L):Ce.__hasExternalTextures&&q.rebindTextures(L,j.get(L.texture).__webglTexture,j.get(L.depthTexture).__webglTexture);let Oe=L.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);let Fe=j.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ne=Array.isArray(Fe[K])?Fe[K][te]:Fe[K],fe=!0):ne=ie.isWebGL2&&L.samples>0&&q.useMultisampledRTT(L)===!1?j.get(L).__webglMultisampledFramebuffer:Array.isArray(Fe)?Fe[te]:Fe,z.copy(L.viewport),Q.copy(L.scissor),R=L.scissorTest}else z.copy(T).multiplyScalar(x).floor(),Q.copy(V).multiplyScalar(x).floor(),R=J;if(B.bindFramebuffer(Z.FRAMEBUFFER,ne)&&ie.drawBuffers&&le&&B.drawBuffers(L,ne),B.viewport(z),B.scissor(Q),B.setScissorTest(R),fe){let Ce=j.get(L.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ce.__webglTexture,te)}else if(_e){let Ce=j.get(L.texture),Oe=K||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ce.__webglTexture,te||0,Oe)}U=-1},this.readRenderTargetPixels=function(L,K,te,le,ne,fe,_e){if(!L||!L.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=j.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce){B.bindFramebuffer(Z.FRAMEBUFFER,Ce);try{let Oe=L.texture,Fe=Oe.format,Qe=Oe.type;if(Fe!==Rt&&Vt.convert(Fe)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let ke=Qe===Qi&&(re.has("EXT_color_buffer_half_float")||ie.isWebGL2&&re.has("EXT_color_buffer_float"));if(!(Qe===ai||Vt.convert(Qe)===Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)||Qe===Oi&&(ie.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float"))||ke))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");K>=0&&K<=L.width-le&&te>=0&&te<=L.height-ne&&Z.readPixels(K,te,le,ne,Vt.convert(Fe),Vt.convert(Qe),fe)}finally{let Oe=w!==null?j.get(w).__webglFramebuffer:null;B.bindFramebuffer(Z.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(L,K,te=0){let le=Math.pow(2,-te),ne=Math.floor(K.image.width*le),fe=Math.floor(K.image.height*le);q.setTexture2D(K,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,te,0,0,L.x,L.y,ne,fe),B.unbindTexture()},this.copyTextureToTexture=function(L,K,te,le=0){let ne=K.image.width,fe=K.image.height,_e=Vt.convert(te.format),Ce=Vt.convert(te.type);q.setTexture2D(te,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,te.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,te.unpackAlignment),K.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,le,L.x,L.y,ne,fe,_e,Ce,K.image.data):K.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,le,L.x,L.y,K.mipmaps[0].width,K.mipmaps[0].height,_e,K.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,le,L.x,L.y,_e,Ce,K.image),le===0&&te.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(L,K,te,le,ne=0){if(M.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let fe=L.max.x-L.min.x+1,_e=L.max.y-L.min.y+1,Ce=L.max.z-L.min.z+1,Oe=Vt.convert(le.format),Fe=Vt.convert(le.type),Qe;if(le.isData3DTexture)q.setTexture3D(le,0),Qe=Z.TEXTURE_3D;else{if(!le.isDataArrayTexture&&!le.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");q.setTexture2DArray(le,0),Qe=Z.TEXTURE_2D_ARRAY}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,le.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,le.unpackAlignment);let ke=Z.getParameter(Z.UNPACK_ROW_LENGTH),at=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Kt=Z.getParameter(Z.UNPACK_SKIP_PIXELS),vi=Z.getParameter(Z.UNPACK_SKIP_ROWS),qi=Z.getParameter(Z.UNPACK_SKIP_IMAGES),ot=te.isCompressedTexture?te.mipmaps[ne]:te.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,ot.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ot.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,L.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,L.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,L.min.z),te.isDataTexture||te.isData3DTexture?Z.texSubImage3D(Qe,ne,K.x,K.y,K.z,fe,_e,Ce,Oe,Fe,ot.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Qe,ne,K.x,K.y,K.z,fe,_e,Ce,Oe,ot.data)):Z.texSubImage3D(Qe,ne,K.x,K.y,K.z,fe,_e,Ce,Oe,Fe,ot),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,ke),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,at),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Kt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,vi),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,qi),ne===0&&le.generateMipmaps&&Z.generateMipmap(Qe),B.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?q.setTextureCube(L,0):L.isData3DTexture?q.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?q.setTexture2DArray(L,0):q.setTexture2D(L,0),B.unbindTexture()},this.resetState=function(){b=0,y=0,w=null,B.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===el?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===ho?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?cn:qc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cn?At:Di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},mA=class extends Er{};mA.prototype.isWebGL1Renderer=!0;hn=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Um=new C,Om=new C,Nm=new C,Fm=new C,Hm=new oe,Qm=new oe,Gm=new xe,km=new C,Vm=new C,Wm=new C,Xm=new oe,Ym=new oe,jm=new oe,qm=new C,Jm=new C,Km=new C,Zm=new Ke,$m=new Ke,e1=new C,t1=new xe,i1=new C,n1=new di,r1=new xe,a1=new ki,$n=class extends jt{constructor(e=null,t=1,i=1,n,a,o,s,l,A=1003,c=1003,h,u){super(null,o,s,l,A,c,n,a,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},o1=new xe,s1=new xe,A1=new xe,l1=new xe,c1=new pi,u1=new xe,h1=new Ze,f1=new di,vA=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,n=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let a=i[this.index];n.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t}reset(){this.list.length=0,this.index=0}},p1=new xe,d1=new xe,g1=new xe,m1=new xe,v1=new qn,M1=new pi,x1=new di,P1=new C,y1=new vA,b1=new Ze,w1=new C,D1=new C,_1=new xe,E1=new ki,B1=new di,S1=new C,C1=new C,Br=class extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ec=new xe,MA=new ki,Sa=new di,Ca=new C,to=class extends zt{constructor(e=new Ge,t=new Br){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(n),Sa.radius+=a,e.ray.intersectsSphere(Sa)===!1)return;Ec.copy(n).invert(),MA.copy(e.ray).applyMatrix4(Ec);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,A=i.index,c=i.attributes.position;if(A!==null)for(let h=Math.max(0,o.start),u=Math.min(A.count,o.start+o.count);h<u;h++){let f=A.getX(h);Ca.fromBufferAttribute(c,f),Bc(Ca,f,l,n,e,t,this)}else for(let h=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);h<u;h++)Ca.fromBufferAttribute(c,h),Bc(Ca,h,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){let o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}};qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),a+=i.distanceTo(n),t.push(a),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,a=i.length,o;o=t||e*i[a-1];let s,l=0,A=a-1;for(;l<=A;)if(n=Math.floor(l+(A-l)/2),s=i[n]-o,s<0)l=n+1;else{if(!(s>0)){A=n;break}A=n-1}if(n=A,i[n]===o)return n/(a-1);let c=i[n];return(n+(o-c)/(i[n+1]-c))/(a-1)}getTangent(e,t){let n=e-1e-4,a=e+1e-4;n<0&&(n=0),a>1&&(a=1);let o=this.getPoint(n),s=this.getPoint(a),l=t||(o.isVector2?new oe:new C);return l.copy(s).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new C,n=[],a=[],o=[],s=new C,l=new xe;for(let f=0;f<=e;f++){let g=f/e;n[f]=this.getTangentAt(g,new C)}a[0]=new C,o[0]=new C;let A=Number.MAX_VALUE,c=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=A&&(A=c,i.set(1,0,0)),h<=A&&(A=h,i.set(0,1,0)),u<=A&&i.set(0,0,1),s.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],s),o[0].crossVectors(n[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),o[f]=o[f-1].clone(),s.crossVectors(n[f-1],n[f]),s.length()>Number.EPSILON){s.normalize();let g=Math.acos(bt(n[f-1].dot(n[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(s,g))}o[f].crossVectors(n[f],a[f])}if(t===!0){let f=Math.acos(bt(a[0].dot(a[e]),-1,1));f/=e,n[0].dot(s.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],a[g])}return{tangents:n,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sr=class extends qt{constructor(e=0,t=0,i=1,n=1,a=0,o=2*Math.PI,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=l}getPoint(e,t){let i=t||new oe,n=2*Math.PI,a=this.aEndAngle-this.aStartAngle,o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=n;for(;a>n;)a-=n;a<Number.EPSILON&&(a=o?0:n),this.aClockwise!==!0||o||(a===n?a=-n:a-=n);let s=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(s),A=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,f=A-this.aY;l=u*c-f*h+this.aX,A=u*h+f*c+this.aY}return i.set(l,A)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xA=class extends Sr{constructor(e,t,i,n,a,o){super(e,t,i,i,n,a,o),this.isArcCurve=!0,this.type="ArcCurve"}};Ta=new C,Qs=new nl,Gs=new nl,ks=new nl,PA=class extends qt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new C){let i=t,n=this.points,a=n.length,o=(a-(this.closed?0:1))*e,s,l,A=Math.floor(o),c=o-A;this.closed?A+=A>0?0:(Math.floor(Math.abs(A)/a)+1)*a:c===0&&A===a-1&&(A=a-2,c=1),this.closed||A>0?s=n[(A-1)%a]:(Ta.subVectors(n[0],n[1]).add(n[0]),s=Ta);let h=n[A%a],u=n[(A+1)%a];if(this.closed||A+2<a?l=n[(A+2)%a]:(Ta.subVectors(n[a-1],n[a-2]).add(n[a-1]),l=Ta),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(s.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(l),f);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),Qs.initNonuniformCatmullRom(s.x,h.x,u.x,l.x,g,m,p),Gs.initNonuniformCatmullRom(s.y,h.y,u.y,l.y,g,m,p),ks.initNonuniformCatmullRom(s.z,h.z,u.z,l.z,g,m,p)}else this.curveType==="catmullrom"&&(Qs.initCatmullRom(s.x,h.x,u.x,l.x,this.tension),Gs.initCatmullRom(s.y,h.y,u.y,l.y,this.tension),ks.initCatmullRom(s.z,h.z,u.z,l.z,this.tension));return i.set(Qs.calc(c),Gs.calc(c),ks.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new C().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};io=class extends qt{constructor(e=new oe,t=new oe,i=new oe,n=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new oe){let i=t,n=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(wr(e,n.x,a.x,o.x,s.x),wr(e,n.y,a.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yA=class extends qt{constructor(e=new C,t=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new C){let i=t,n=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(wr(e,n.x,a.x,o.x,s.x),wr(e,n.y,a.y,o.y,s.y),wr(e,n.z,a.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},no=class extends qt{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bA=class extends qt{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends qt{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,n=this.v0,a=this.v1,o=this.v2;return i.set(br(e,n.x,a.x,o.x),br(e,n.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends qt{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,n=this.v0,a=this.v1,o=this.v2;return i.set(br(e,n.x,a.x,o.x),br(e,n.y,a.y,o.y),br(e,n.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,n=this.points,a=(n.length-1)*e,o=Math.floor(a),s=a-o,l=n[o===0?o:o-1],A=n[o],c=n[o>n.length-2?n.length-1:o+1],h=n[o>n.length-3?n.length-1:o+2];return i.set(Sc(s,l.x,A.x,c.x,h.x),Sc(s,l.y,A.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new oe().fromArray(n))}return this}},so=Object.freeze({__proto__:null,ArcCurve:xA,CatmullRomCurve3:PA,CubicBezierCurve:io,CubicBezierCurve3:yA,EllipseCurve:Sr,LineCurve:no,LineCurve3:bA,QuadraticBezierCurve:ro,QuadraticBezierCurve3:ao,SplineCurve:oo}),wA=class extends qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new so[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),a=0;for(;a<n.length;){if(n[a]>=i){let o=n[a]-i,s=this.curves[a],l=s.getLength(),A=l===0?0:1-o/l;return s.getPointAt(A,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,a=this.curves;n<a.length;n++){let o=a[n],s=o.isEllipseCurve?2*e:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(s);for(let A=0;A<l.length;A++){let c=l[A];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new so[n.type]().fromJSON(n))}return this}},Cr=class extends wA{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new no(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let a=new ro(this.currentPoint.clone(),new oe(e,t),new oe(i,n));return this.curves.push(a),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,a,o){let s=new io(this.currentPoint.clone(),new oe(e,t),new oe(i,n),new oe(a,o));return this.curves.push(s),this.currentPoint.set(a,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new oo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,a,o){let s=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+s,t+l,i,n,a,o),this}absarc(e,t,i,n,a,o){return this.absellipse(e,t,i,i,n,a,o),this}ellipse(e,t,i,n,a,o,s,l){let A=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+A,t+c,i,n,a,o,s,l),this}absellipse(e,t,i,n,a,o,s,l){let A=new Sr(e,t,i,n,a,o,s,l);if(this.curves.length>0){let h=A.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(A);let c=A.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ao=class r extends Ge{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=bt(n,0,2*Math.PI);let a=[],o=[],s=[],l=[],A=[],c=1/t,h=new C,u=new oe,f=new C,g=new C,m=new C,p=0,P=0;for(let d=0;d<=e.length-1;d++)switch(d){case 0:p=e[d+1].x-e[d].x,P=e[d+1].y-e[d].y,f.x=1*P,f.y=-p,f.z=0*P,m.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:p=e[d+1].x-e[d].x,P=e[d+1].y-e[d].y,f.x=1*P,f.y=-p,f.z=0*P,g.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),l.push(f.x,f.y,f.z),m.copy(g)}for(let d=0;d<=t;d++){let M=i+d*c*n,v=Math.sin(M),b=Math.cos(M);for(let y=0;y<=e.length-1;y++){h.x=e[y].x*v,h.y=e[y].y,h.z=e[y].x*b,o.push(h.x,h.y,h.z),u.x=d/t,u.y=y/(e.length-1),s.push(u.x,u.y);let w=l[3*y+0]*v,U=l[3*y+1],I=l[3*y+0]*b;A.push(w,U,I)}}for(let d=0;d<t;d++)for(let M=0;M<e.length-1;M++){let v=M+d*e.length,b=v,y=v+e.length,w=v+e.length+1,U=v+1;a.push(b,y,U),a.push(w,U,y)}this.setIndex(a),this.setAttribute("position",new Pe(o,3)),this.setAttribute("uv",new Pe(s,2)),this.setAttribute("normal",new Pe(A,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},DA=class r extends Ao{constructor(e=1,t=1,i=4,n=8){let a=new Cr;a.absarc(0,-t/2,e,1.5*Math.PI,0),a.absarc(0,t/2,e,0,.5*Math.PI),super(a.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Tr=class r extends Ge{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let a=[],o=[],s=[],l=[],A=new C,c=new oe;o.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){let f=i+h/t*n;A.x=e*Math.cos(f),A.y=e*Math.sin(f),o.push(A.x,A.y,A.z),s.push(0,0,1),c.x=(o[u]/e+1)/2,c.y=(o[u+1]/e+1)/2,l.push(c.x,c.y)}for(let h=1;h<=t;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(s,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},fn=class r extends Ge{constructor(e=1,t=1,i=1,n=32,a=1,o=!1,s=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:l};let A=this;n=Math.floor(n),a=Math.floor(a);let c=[],h=[],u=[],f=[],g=0,m=[],p=i/2,P=0;function d(M){let v=g,b=new oe,y=new C,w=0,U=M===!0?e:t,I=M===!0?1:-1;for(let Q=1;Q<=n;Q++)h.push(0,p*I,0),u.push(0,I,0),f.push(.5,.5),g++;let z=g;for(let Q=0;Q<=n;Q++){let R=Q/n*l+s,k=Math.cos(R),X=Math.sin(R);y.x=U*X,y.y=p*I,y.z=U*k,h.push(y.x,y.y,y.z),u.push(0,I,0),b.x=.5*k+.5,b.y=.5*X*I+.5,f.push(b.x,b.y),g++}for(let Q=0;Q<n;Q++){let R=v+Q,k=z+Q;M===!0?c.push(k,k+1,R):c.push(k+1,k,R),w+=3}A.addGroup(P,w,M===!0?1:2),P+=w}(function(){let M=new C,v=new C,b=0,y=(t-e)/i;for(let w=0;w<=a;w++){let U=[],I=w/a,z=I*(t-e)+e;for(let Q=0;Q<=n;Q++){let R=Q/n,k=R*l+s,X=Math.sin(k),ae=Math.cos(k);v.x=z*X,v.y=-I*i+p,v.z=z*ae,h.push(v.x,v.y,v.z),M.set(X,y,ae).normalize(),u.push(M.x,M.y,M.z),f.push(R,1-I),U.push(g++)}m.push(U)}for(let w=0;w<n;w++)for(let U=0;U<a;U++){let I=m[U][w],z=m[U+1][w],Q=m[U+1][w+1],R=m[U][w+1];c.push(I,z,R),c.push(z,Q,R),b+=6}A.addGroup(P,b,0),P+=b})(),o===!1&&(e>0&&d(!0),t>0&&d(!1)),this.setIndex(c),this.setAttribute("position",new Pe(h,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ir=class r extends fn{constructor(e=1,t=1,i=32,n=1,a=!1,o=0,s=2*Math.PI){super(0,e,t,i,n,a,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:o,thetaLength:s}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pn=class r extends Ge{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let a=[],o=[];function s(u,f,g,m){let p=m+1,P=[];for(let d=0;d<=p;d++){P[d]=[];let M=u.clone().lerp(g,d/p),v=f.clone().lerp(g,d/p),b=p-d;for(let y=0;y<=b;y++)P[d][y]=y===0&&d===p?M:M.clone().lerp(v,y/b)}for(let d=0;d<p;d++)for(let M=0;M<2*(p-d)-1;M++){let v=Math.floor(M/2);M%2==0?(l(P[d][v+1]),l(P[d+1][v]),l(P[d][v])):(l(P[d][v+1]),l(P[d+1][v+1]),l(P[d+1][v]))}}function l(u){a.push(u.x,u.y,u.z)}function A(u,f){let g=3*u;f.x=e[g+0],f.y=e[g+1],f.z=e[g+2]}function c(u,f,g,m){m<0&&u.x===1&&(o[f]=u.x-1),g.x===0&&g.z===0&&(o[f]=m/2/Math.PI+.5)}function h(u){return Math.atan2(u.z,-u.x)}(function(u){let f=new C,g=new C,m=new C;for(let p=0;p<t.length;p+=3)A(t[p+0],f),A(t[p+1],g),A(t[p+2],m),s(f,g,m,u)})(n),function(u){let f=new C;for(let g=0;g<a.length;g+=3)f.x=a[g+0],f.y=a[g+1],f.z=a[g+2],f.normalize().multiplyScalar(u),a[g+0]=f.x,a[g+1]=f.y,a[g+2]=f.z}(i),function(){let u=new C;for(let g=0;g<a.length;g+=3){u.x=a[g+0],u.y=a[g+1],u.z=a[g+2];let m=h(u)/2/Math.PI+.5,p=(f=u,Math.atan2(-f.y,Math.sqrt(f.x*f.x+f.z*f.z))/Math.PI+.5);o.push(m,1-p)}var f;(function(){let g=new C,m=new C,p=new C,P=new C,d=new oe,M=new oe,v=new oe;for(let b=0,y=0;b<a.length;b+=9,y+=6){g.set(a[b+0],a[b+1],a[b+2]),m.set(a[b+3],a[b+4],a[b+5]),p.set(a[b+6],a[b+7],a[b+8]),d.set(o[y+0],o[y+1]),M.set(o[y+2],o[y+3]),v.set(o[y+4],o[y+5]),P.copy(g).add(m).add(p).divideScalar(3);let w=h(P);c(d,y+0,g,w),c(M,y+2,m,w),c(v,y+4,p,w)}})(),function(){for(let g=0;g<o.length;g+=6){let m=o[g+0],p=o[g+2],P=o[g+4],d=Math.max(m,p,P),M=Math.min(m,p,P);d>.9&&M<.1&&(m<.2&&(o[g+0]+=1),p<.2&&(o[g+2]+=1),P<.2&&(o[g+4]+=1))}}()}(),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(a.slice(),3)),this.setAttribute("uv",new Pe(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},_A=class r extends pn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ia=new C,La=new C,Vs=new C,Ra=new sn,EA=class extends Ge{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),a=Math.cos(Na*t),o=e.getIndex(),s=e.getAttribute("position"),l=o?o.count:s.count,A=[0,0,0],c=["a","b","c"],h=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){o?(A[0]=o.getX(g),A[1]=o.getX(g+1),A[2]=o.getX(g+2)):(A[0]=g,A[1]=g+1,A[2]=g+2);let{a:m,b:p,c:P}=Ra;if(m.fromBufferAttribute(s,A[0]),p.fromBufferAttribute(s,A[1]),P.fromBufferAttribute(s,A[2]),Ra.getNormal(Vs),h[0]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,h[1]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,h[2]=`${Math.round(P.x*n)},${Math.round(P.y*n)},${Math.round(P.z*n)}`,h[0]!==h[1]&&h[1]!==h[2]&&h[2]!==h[0])for(let d=0;d<3;d++){let M=(d+1)%3,v=h[d],b=h[M],y=Ra[c[d]],w=Ra[c[M]],U=`${v}_${b}`,I=`${b}_${v}`;I in u&&u[I]?(Vs.dot(u[I].normal)<=a&&(f.push(y.x,y.y,y.z),f.push(w.x,w.y,w.z)),u[I]=null):U in u||(u[U]={index0:A[d],index1:A[M],normal:Vs.clone()})}}for(let g in u)if(u[g]){let{index0:m,index1:p}=u[g];Ia.fromBufferAttribute(s,m),La.fromBufferAttribute(s,p),f.push(Ia.x,Ia.y,Ia.z),f.push(La.x,La.y,La.z)}this.setAttribute("position",new Pe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},lo=class extends Cr{constructor(e){super(e),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Cr().fromJSON(n))}return this}},qp=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,a=Cc(r,0,n,t,!0),o=[];if(!a||a.next===a.prev)return o;let s,l,A,c,h,u,f;if(i&&(a=function(g,m,p,P){let d=[],M,v,b,y,w;for(M=0,v=m.length;M<v;M++)b=m[M]*P,y=M<v-1?m[M+1]*P:g.length,w=Cc(g,b,y,P,!1),w===w.next&&(w.steiner=!0),d.push(nd(w));for(d.sort(ed),M=0;M<d.length;M++)p=td(d[M],p);return p}(r,e,a,t)),r.length>80*t){s=A=r[0],l=c=r[1];for(let g=t;g<n;g+=t)h=r[g],u=r[g+1],h<s&&(s=h),u<l&&(l=u),h>A&&(A=h),u>c&&(c=u);f=Math.max(A-s,c-l),f=f!==0?32767/f:0}return Lr(a,o,t,s,l,f,0),o};Fi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,a=0;a<t;n=a++)i+=e[n].x*e[a].y-e[a].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],a=[];Ic(e),Lc(i,e);let o=e.length;t.forEach(Ic);for(let l=0;l<t.length;l++)n.push(o),o+=t[l].length,Lc(i,t[l]);let s=qp(i,n);for(let l=0;l<s.length;l+=3)a.push(s.slice(l,l+3));return a}};CA=class r extends Ge{constructor(e=new lo([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],a=[];for(let s=0,l=e.length;s<l;s++)o(e[s]);function o(s){let l=[],A=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,P=t.extrudePath,d=t.UVGenerator!==void 0?t.UVGenerator:ad,M,v,b,y,w,U=!1;P&&(M=P.getSpacedPoints(c),U=!0,u=!1,v=P.computeFrenetFrames(c,!1),b=new C,y=new C,w=new C),u||(p=0,f=0,g=0,m=0);let I=s.extractPoints(A),z=I.shape,Q=I.holes;if(!Fi.isClockWise(z)){z=z.reverse();for(let H=0,G=Q.length;H<G;H++){let Y=Q[H];Fi.isClockWise(Y)&&(Q[H]=Y.reverse())}}let R=Fi.triangulateShape(z,Q),k=z;for(let H=0,G=Q.length;H<G;H++){let Y=Q[H];z=z.concat(Y)}function X(H,G,Y){return G||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(G,Y)}let ae=z.length,ue=R.length;function x(H,G,Y){let re,ie,B,se=H.x-G.x,j=H.y-G.y,q=Y.x-H.x,Ae=Y.y-H.y,he=se*se+j*j,de=se*Ae-j*q;if(Math.abs(de)>Number.EPSILON){let me=Math.sqrt(he),Ie=Math.sqrt(q*q+Ae*Ae),ve=G.x-j/me,Me=G.y+se/me,Ue=((Y.x-Ae/Ie-ve)*Ae-(Y.y+q/Ie-Me)*q)/(se*Ae-j*q);re=ve+se*Ue-H.x,ie=Me+j*Ue-H.y;let Mt=re*re+ie*ie;if(Mt<=2)return new oe(re,ie);B=Math.sqrt(Mt/2)}else{let me=!1;se>Number.EPSILON?q>Number.EPSILON&&(me=!0):se<-Number.EPSILON?q<-Number.EPSILON&&(me=!0):Math.sign(j)===Math.sign(Ae)&&(me=!0),me?(re=-j,ie=se,B=Math.sqrt(he)):(re=se,ie=j,B=Math.sqrt(he/2))}return new oe(re/B,ie/B)}let D=[];for(let H=0,G=k.length,Y=G-1,re=H+1;H<G;H++,Y++,re++)Y===G&&(Y=0),re===G&&(re=0),D[H]=x(k[H],k[Y],k[re]);let S=[],T,V=D.concat();for(let H=0,G=Q.length;H<G;H++){let Y=Q[H];T=[];for(let re=0,ie=Y.length,B=ie-1,se=re+1;re<ie;re++,B++,se++)B===ie&&(B=0),se===ie&&(se=0),T[re]=x(Y[re],Y[B],Y[se]);S.push(T),V=V.concat(T)}for(let H=0;H<p;H++){let G=H/p,Y=f*Math.cos(G*Math.PI/2),re=g*Math.sin(G*Math.PI/2)+m;for(let ie=0,B=k.length;ie<B;ie++){let se=X(k[ie],D[ie],re);E(se.x,se.y,-Y)}for(let ie=0,B=Q.length;ie<B;ie++){let se=Q[ie];T=S[ie];for(let j=0,q=se.length;j<q;j++){let Ae=X(se[j],T[j],re);E(Ae.x,Ae.y,-Y)}}}let J=g+m;for(let H=0;H<ae;H++){let G=u?X(z[H],V[H],J):z[H];U?(y.copy(v.normals[0]).multiplyScalar(G.x),b.copy(v.binormals[0]).multiplyScalar(G.y),w.copy(M[0]).add(y).add(b),E(w.x,w.y,w.z)):E(G.x,G.y,0)}for(let H=1;H<=c;H++)for(let G=0;G<ae;G++){let Y=u?X(z[G],V[G],J):z[G];U?(y.copy(v.normals[H]).multiplyScalar(Y.x),b.copy(v.binormals[H]).multiplyScalar(Y.y),w.copy(M[H]).add(y).add(b),E(w.x,w.y,w.z)):E(Y.x,Y.y,h/c*H)}for(let H=p-1;H>=0;H--){let G=H/p,Y=f*Math.cos(G*Math.PI/2),re=g*Math.sin(G*Math.PI/2)+m;for(let ie=0,B=k.length;ie<B;ie++){let se=X(k[ie],D[ie],re);E(se.x,se.y,h+Y)}for(let ie=0,B=Q.length;ie<B;ie++){let se=Q[ie];T=S[ie];for(let j=0,q=se.length;j<q;j++){let Ae=X(se[j],T[j],re);U?E(Ae.x,Ae.y+M[c-1].y,M[c-1].x+Y):E(Ae.x,Ae.y,h+Y)}}}function _(H,G){let Y=H.length;for(;--Y>=0;){let re=Y,ie=Y-1;ie<0&&(ie=H.length-1);for(let B=0,se=c+2*p;B<se;B++){let j=ae*B,q=ae*(B+1);ee(G+re+j,G+ie+j,G+ie+q,G+re+q)}}}function E(H,G,Y){l.push(H),l.push(G),l.push(Y)}function W(H,G,Y){N(H),N(G),N(Y);let re=n.length/3,ie=d.generateTopUV(i,n,re-3,re-2,re-1);$(ie[0]),$(ie[1]),$(ie[2])}function ee(H,G,Y,re){N(H),N(G),N(re),N(G),N(Y),N(re);let ie=n.length/3,B=d.generateSideWallUV(i,n,ie-6,ie-3,ie-2,ie-1);$(B[0]),$(B[1]),$(B[3]),$(B[1]),$(B[2]),$(B[3])}function N(H){n.push(l[3*H+0]),n.push(l[3*H+1]),n.push(l[3*H+2])}function $(H){a.push(H.x),a.push(H.y)}(function(){let H=n.length/3;if(u){let G=0,Y=ae*G;for(let re=0;re<ue;re++){let ie=R[re];W(ie[2]+Y,ie[1]+Y,ie[0]+Y)}G=c+2*p,Y=ae*G;for(let re=0;re<ue;re++){let ie=R[re];W(ie[0]+Y,ie[1]+Y,ie[2]+Y)}}else{for(let G=0;G<ue;G++){let Y=R[G];W(Y[2],Y[1],Y[0])}for(let G=0;G<ue;G++){let Y=R[G];W(Y[0]+ae*c,Y[1]+ae*c,Y[2]+ae*c)}}i.addGroup(H,n.length/3-H,0)})(),function(){let H=n.length/3,G=0;_(k,G),G+=k.length;for(let Y=0,re=Q.length;Y<re;Y++){let ie=Q[Y];_(ie,G),G+=ie.length}i.addGroup(H,n.length/3-H,1)}()}this.setAttribute("position",new Pe(n,3)),this.setAttribute("uv",new Pe(a,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let a=0,o=t.length;a<o;a++){let s=t[a];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let a=0,o=e.shapes.length;a<o;a++){let s=t[e.shapes[a]];i.push(s)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new so[n.type]().fromJSON(n)),new r(i,e.options)}},ad={generateTopUV:function(r,e,t,i,n){let a=e[3*t],o=e[3*t+1],s=e[3*i],l=e[3*i+1],A=e[3*n],c=e[3*n+1];return[new oe(a,o),new oe(s,l),new oe(A,c)]},generateSideWallUV:function(r,e,t,i,n,a){let o=e[3*t],s=e[3*t+1],l=e[3*t+2],A=e[3*i],c=e[3*i+1],h=e[3*i+2],u=e[3*n],f=e[3*n+1],g=e[3*n+2],m=e[3*a],p=e[3*a+1],P=e[3*a+2];return Math.abs(s-c)<Math.abs(o-A)?[new oe(o,1-l),new oe(A,1-h),new oe(u,1-g),new oe(m,1-P)]:[new oe(s,1-l),new oe(c,1-h),new oe(f,1-g),new oe(p,1-P)]}},Ur=class r extends pn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},TA=class r extends pn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},IA=class r extends Ge{constructor(e=.5,t=1,i=32,n=1,a=0,o=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:o},i=Math.max(3,i);let s=[],l=[],A=[],c=[],h=e,u=(t-e)/(n=Math.max(1,n)),f=new C,g=new oe;for(let m=0;m<=n;m++){for(let p=0;p<=i;p++){let P=a+p/i*o;f.x=h*Math.cos(P),f.y=h*Math.sin(P),l.push(f.x,f.y,f.z),A.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,c.push(g.x,g.y)}h+=u}for(let m=0;m<n;m++){let p=m*(i+1);for(let P=0;P<i;P++){let d=P+p,M=d,v=d+i+1,b=d+i+2,y=d+1;s.push(M,v,y),s.push(v,b,y)}}this.setIndex(s),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(A,3)),this.setAttribute("uv",new Pe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},LA=class r extends Ge{constructor(e=new lo([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],a=[],o=[],s=0,l=0;if(Array.isArray(e)===!1)A(e);else for(let c=0;c<e.length;c++)A(e[c]),this.addGroup(s,l,c),s+=l,l=0;function A(c){let h=n.length/3,u=c.extractPoints(t),f=u.shape,g=u.holes;Fi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,P=g.length;p<P;p++){let d=g[p];Fi.isClockWise(d)===!0&&(g[p]=d.reverse())}let m=Fi.triangulateShape(f,g);for(let p=0,P=g.length;p<P;p++){let d=g[p];f=f.concat(d)}for(let p=0,P=f.length;p<P;p++){let d=f[p];n.push(d.x,d.y,0),a.push(0,0,1),o.push(d.x,d.y)}for(let p=0,P=m.length;p<P;p++){let d=m[p],M=d[0]+h,v=d[1]+h,b=d[2]+h;i.push(M,v,b),l+=3}}this.setIndex(i),this.setAttribute("position",new Pe(n,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,a=t.length;n<a;n++){let o=t[n];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,a=e.shapes.length;n<a;n++){let o=t[e.shapes[n]];i.push(o)}return new r(i,e.curveSegments)}},RA=class r extends Ge{constructor(e=1,t=32,i=16,n=0,a=2*Math.PI,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+s,Math.PI),A=0,c=[],h=new C,u=new C,f=[],g=[],m=[],p=[];for(let P=0;P<=i;P++){let d=[],M=P/i,v=0;P===0&&o===0?v=.5/t:P===i&&l===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){let y=b/t;h.x=-e*Math.cos(n+y*a)*Math.sin(o+M*s),h.y=e*Math.cos(o+M*s),h.z=e*Math.sin(n+y*a)*Math.sin(o+M*s),g.push(h.x,h.y,h.z),u.copy(h).normalize(),m.push(u.x,u.y,u.z),p.push(y+v,1-M),d.push(A++)}c.push(d)}for(let P=0;P<i;P++)for(let d=0;d<t;d++){let M=c[P][d+1],v=c[P][d],b=c[P+1][d],y=c[P+1][d+1];(P!==0||o>0)&&f.push(M,v,y),(P!==i-1||l<Math.PI)&&f.push(v,b,y)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(m,3)),this.setAttribute("uv",new Pe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},zA=class r extends pn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},UA=class r extends Ge{constructor(e=1,t=.4,i=12,n=48,a=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:a},i=Math.floor(i),n=Math.floor(n);let o=[],s=[],l=[],A=[],c=new C,h=new C,u=new C;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let m=g/n*a,p=f/i*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(m),h.y=(e+t*Math.cos(p))*Math.sin(m),h.z=t*Math.sin(p),s.push(h.x,h.y,h.z),c.x=e*Math.cos(m),c.y=e*Math.sin(m),u.subVectors(h,c).normalize(),l.push(u.x,u.y,u.z),A.push(g/n),A.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let m=(n+1)*f+g-1,p=(n+1)*(f-1)+g-1,P=(n+1)*(f-1)+g,d=(n+1)*f+g;o.push(m,p,d),o.push(p,P,d)}this.setIndex(o),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},OA=class r extends Ge{constructor(e=1,t=.4,i=64,n=8,a=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:a,q:o},i=Math.floor(i),n=Math.floor(n);let s=[],l=[],A=[],c=[],h=new C,u=new C,f=new C,g=new C,m=new C,p=new C,P=new C;for(let M=0;M<=i;++M){let v=M/i*a*Math.PI*2;d(v,a,o,e,f),d(v+.01,a,o,e,g),p.subVectors(g,f),P.addVectors(g,f),m.crossVectors(p,P),P.crossVectors(m,p),m.normalize(),P.normalize();for(let b=0;b<=n;++b){let y=b/n*Math.PI*2,w=-t*Math.cos(y),U=t*Math.sin(y);h.x=f.x+(w*P.x+U*m.x),h.y=f.y+(w*P.y+U*m.y),h.z=f.z+(w*P.z+U*m.z),l.push(h.x,h.y,h.z),u.subVectors(h,f).normalize(),A.push(u.x,u.y,u.z),c.push(M/i),c.push(b/n)}}for(let M=1;M<=i;M++)for(let v=1;v<=n;v++){let b=(n+1)*(M-1)+(v-1),y=(n+1)*M+(v-1),w=(n+1)*M+v,U=(n+1)*(M-1)+v;s.push(b,y,U),s.push(y,w,U)}function d(M,v,b,y,w){let U=Math.cos(M),I=Math.sin(M),z=b/v*M,Q=Math.cos(z);w.x=y*(2+Q)*.5*U,w.y=y*(2+Q)*I*.5,w.z=y*Math.sin(z)*.5}this.setIndex(s),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(A,3)),this.setAttribute("uv",new Pe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},NA=class r extends Ge{constructor(e=new ao(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,n=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:a};let o=e.computeFrenetFrames(t,a);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let s=new C,l=new C,A=new oe,c=new C,h=[],u=[],f=[],g=[];function m(p){c=e.getPointAt(p/t,c);let P=o.normals[p],d=o.binormals[p];for(let M=0;M<=n;M++){let v=M/n*Math.PI*2,b=Math.sin(v),y=-Math.cos(v);l.x=y*P.x+b*d.x,l.y=y*P.y+b*d.y,l.z=y*P.z+b*d.z,l.normalize(),u.push(l.x,l.y,l.z),s.x=c.x+i*l.x,s.y=c.y+i*l.y,s.z=c.z+i*l.z,h.push(s.x,s.y,s.z)}}(function(){for(let p=0;p<t;p++)m(p);m(a===!1?t:0),function(){for(let p=0;p<=t;p++)for(let P=0;P<=n;P++)A.x=p/t,A.y=P/n,f.push(A.x,A.y)}(),function(){for(let p=1;p<=t;p++)for(let P=1;P<=n;P++){let d=(n+1)*(p-1)+(P-1),M=(n+1)*p+(P-1),v=(n+1)*p+P,b=(n+1)*(p-1)+P;g.push(d,M,b),g.push(M,v,b)}}()})(),this.setIndex(g),this.setAttribute("position",new Pe(h,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new so[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},FA=class extends Ge{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new C,a=new C;if(e.index!==null){let o=e.attributes.position,s=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:s.count,materialIndex:0}]);for(let A=0,c=l.length;A<c;++A){let h=l[A],u=h.start;for(let f=u,g=u+h.count;f<g;f+=3)for(let m=0;m<3;m++){let p=s.getX(f+m),P=s.getX(f+(m+1)%3);n.fromBufferAttribute(o,p),a.fromBufferAttribute(o,P),Rc(n,a,i)===!0&&(t.push(n.x,n.y,n.z),t.push(a.x,a.y,a.z))}}}else{let o=e.attributes.position;for(let s=0,l=o.count/3;s<l;s++)for(let A=0;A<3;A++){let c=3*s+A,h=3*s+(A+1)%3;n.fromBufferAttribute(o,c),a.fromBufferAttribute(o,h),Rc(n,a,i)===!0&&(t.push(n.x,n.y,n.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Pe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};T1=Object.freeze({__proto__:null,BoxGeometry:si,CapsuleGeometry:DA,CircleGeometry:Tr,ConeGeometry:Ir,CylinderGeometry:fn,DodecahedronGeometry:_A,EdgesGeometry:EA,ExtrudeGeometry:CA,IcosahedronGeometry:Ur,LatheGeometry:Ao,OctahedronGeometry:TA,PlaneGeometry:Jn,PolyhedronGeometry:pn,RingGeometry:IA,ShapeGeometry:LA,SphereGeometry:RA,TetrahedronGeometry:zA,TorusGeometry:UA,TorusKnotGeometry:OA,TubeGeometry:NA,WireframeGeometry:FA});er=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],a=t[i-1];t:{e:{let o;i:{n:if(!(e<n)){for(let s=i+2;;){if(n===void 0){if(e<a)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=n,n=t[++i],e<n)break e}o=t.length;break i}if(e>=a)break t;{let s=t[1];e<s&&(i=2,a=s);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=a,a=t[--i-1],e>=a)break e}o=i,i=0}}for(;i<o;){let s=i+o>>>1;e<t[s]?o=s:i=s+1}if(n=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,n)}return this.interpolate_(i,a,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,a=e*n;for(let o=0;o!==n;++o)t[o]=i[a+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},HA=class extends er{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:N0,endingEnd:N0}}intervalChanged_(e,t,i){let n=this.parameterPositions,a=e-2,o=e+1,s=n[a],l=n[o];if(s===void 0)switch(this.getSettings_().endingStart){case F0:a=e,s=2*t-i;break;case H0:a=n.length-2,s=t+n[a]-n[a+1];break;default:a=e,s=i}if(l===void 0)switch(this.getSettings_().endingEnd){case F0:o=e,l=2*i-t;break;case H0:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let A=.5*(i-t),c=this.valueSize;this._weightPrev=A/(t-s),this._weightNext=A/(l-i),this._offsetPrev=a*c,this._offsetNext=o*c}interpolate_(e,t,i,n){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=e*s,A=l-s,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),m=g*g,p=m*g,P=-u*p+2*u*m-u*g,d=(1+u)*p+(-1.5-2*u)*m+(-.5+u)*g+1,M=(-1-f)*p+(1.5+f)*m+.5*g,v=f*p-f*m;for(let b=0;b!==s;++b)a[b]=P*o[c+b]+d*o[A+b]+M*o[l+b]+v*o[h+b];return a}},QA=class extends er{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=e*s,A=l-s,c=(i-t)/(n-t),h=1-c;for(let u=0;u!==s;++u)a[u]=o[A+u]*h+o[l+u]*c;return a}},GA=class extends er{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},oi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new GA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new QA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new HA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ha:t=this.InterpolantFactoryMethodDiscrete;break;case Qa:t=this.InterpolantFactoryMethodLinear;break;case ms:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return ms}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,a=0,o=n-1;for(;a!==n&&i[a]<e;)++a;for(;o!==-1&&i[o]>t;)--o;if(++o,a!==0||o!==n){a>=o&&(o=Math.max(o,1),a=o-1);let s=this.getValueSize();this.times=i.slice(a,o),this.values=this.values.slice(a*s,o*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let s=0;s!==a;s++){let l=i[s];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,l,o),e=!1;break}o=l}if(n!==void 0&&od(n))for(let s=0,l=n.length;s!==l;++s){let A=n[s];if(isNaN(A)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,A),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ms,a=e.length-1,o=1;for(let s=1;s<a;++s){let l=!1,A=e[s];if(A!==e[s+1]&&(s!==1||A!==e[0]))if(n)l=!0;else{let c=s*i,h=c-i,u=c+i;for(let f=0;f!==i;++f){let g=t[c+f];if(g!==t[h+f]||g!==t[u+f]){l=!0;break}}}if(l){if(s!==o){e[o]=e[s];let c=s*i,h=o*i;for(let u=0;u!==i;++u)t[h+u]=t[c+u]}++o}}if(a>0){e[o]=e[a];for(let s=a*i,l=o*i,A=0;A!==i;++A)t[l+A]=t[s+A];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};oi.prototype.TimeBufferType=Float32Array,oi.prototype.ValueBufferType=Float32Array,oi.prototype.DefaultInterpolation=Qa;an=class extends oi{};an.prototype.ValueTypeName="bool",an.prototype.ValueBufferType=Array,an.prototype.DefaultInterpolation=Ha,an.prototype.InterpolantFactoryMethodLinear=void 0,an.prototype.InterpolantFactoryMethodSmooth=void 0;kA=class extends oi{};kA.prototype.ValueTypeName="color";VA=class extends oi{};VA.prototype.ValueTypeName="number";WA=class extends er{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=(i-t)/(n-t),A=e*s;for(let c=A+s;A!==c;A+=4)Nt.slerpFlat(a,0,o,A-s,o,A,l);return a}},Dr=class extends oi{InterpolantFactoryMethodLinear(e){return new WA(this.times,this.values,this.getValueSize(),e)}};Dr.prototype.ValueTypeName="quaternion",Dr.prototype.DefaultInterpolation=Qa,Dr.prototype.InterpolantFactoryMethodSmooth=void 0;on=class extends oi{};on.prototype.ValueTypeName="string",on.prototype.ValueBufferType=Array,on.prototype.DefaultInterpolation=Ha,on.prototype.InterpolantFactoryMethodLinear=void 0,on.prototype.InterpolantFactoryMethodSmooth=void 0;XA=class extends oi{};XA.prototype.ValueTypeName="vector";YA=class{constructor(e,t,i){let n=this,a,o=!1,s=0,l=0,A=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){l++,o===!1&&n.onStart!==void 0&&n.onStart(c,s,l),o=!0},this.itemEnd=function(c){s++,n.onProgress!==void 0&&n.onProgress(c,s,l),s===l&&(o=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return a?a(c):c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return A.push(c,h),this},this.removeHandler=function(c){let h=A.indexOf(c);return h!==-1&&A.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=A.length;h<u;h+=2){let f=A[h],g=A[h+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}},sd=new YA,jA=class{constructor(e){this.manager=e!==void 0?e:sd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,a){i.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};jA.DEFAULT_MATERIAL_NAME="__DEFAULT";qA=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ws=new xe,zc=new C,Uc=new C,JA=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qn,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(zc),Uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uc),t.updateMatrixWorld(),Ws.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ws),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ws)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},I1=new xe,L1=new C,R1=new C,KA=class extends JA{constructor(){super(new Kn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},co=class extends qA{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new KA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},z1=new xe,U1=new xe,O1=new xe,N1=new C,F1=new Nt,H1=new C,Q1=new C,G1=new C,k1=new Nt,V1=new C,W1=new C,rl="\\[\\]\\.:\\/",Ad=new RegExp("["+rl+"]","g"),Xs="[^"+rl+"]",ld="[^"+rl.replace("\\.","")+"]",cd=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Xs)+/(WCOD+)?/.source.replace("WCOD",ld)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xs)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xs)+"$"),ud=["material","materials","bones","map"],nt=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ad,"")}static parseTrackName(e){let t=cd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let a=i.nodeName.substring(n+1);ud.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let o=0;o<a.length;o++){let s=a[o];if(s.name===t||s.uuid===t)return s;let l=i(s.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,a=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let A=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===A){A=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(A!==void 0){if(e[A]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[A]}}let o=e[n];if(o===void 0){let A=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+A+"."+n+" but it wasn't found.",e)}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=class{constructor(r,e,t){let i=t||nt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray],nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];X1=new Float32Array(1),Y1=new oe,j1=new C,q1=new C,J1=new C,K1=new C,Z1=new xe,$1=new xe,ev=new C,tv=new ge,iv=new ge,nv=new C,rv=new C,av=new C,ov=new C,sv=new _r,Av=new pi,lv=new C;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ys}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ys)});function hd(r){let e="";for(let t of r)e+=String.fromCharCode(t);return btoa(e)}function fd(r){let e=atob(r),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}function Au(){let r=new Or,e=256/2,t=120,{erba:i,terra:n,legno:a}=mn,o=[".11113335555.",".11113335555.",".1111333t555.",".111111s11111","1111111111144","1111111111144","1111111111111",".11111111111."],s={1:0,3:2,5:4,4:2,s:1,t:3};o.forEach((h,u)=>[...h].forEach((f,g)=>{if(f===".")return;let m=e-6+g,p=e-4+u,P=t+s[f];for(let d=t-3;d<=P;d++)r.set(m,d,p,d===P?f==="s"||f==="t"?a:i:n)}));let l=(h,u)=>[e-6+h,e-4+u],A=(h,u,f,g=0)=>{let[m,p]=l(u,f);return{tipo:h,x:m,z:p,r:g}},c=[A("casetta",1,0),A("albero",9,1),A("lampione",1,4),A("orto",4,5),A("sasso",11,6),A("funghi",6,0),A("ciuffo",5,1),A("ciuffo",8,0),A("ciuffo",11,3),A("ciuffo",0,6),A("ciuffo",8,6)];return{mondo:r,cose:c,arrivo:l(8,5)}}var mn,su,ht,gn,al,go,nr,Or,rr=Ti(()=>{mn={aria:0,erba:1,terra:2,pietra:3,sabbia:4,legno:5,foglie:6,neve:7},su=Object.fromEntries(Object.entries(mn).map(([r,e])=>[e,r])),ht=16,gn=ht*ht*ht,al=(r,e,t)=>r>=0&&e>=0&&t>=0&&r<256&&e<256&&t<256,go=(r,e,t)=>r+","+e+","+t,nr=(r,e)=>r+","+e,Or=class r{constructor(){this.chunk=new Map,this.cime=new Map}get(e,t,i){if(!al(e,t,i))return 0;let n=this.chunk.get(go(e>>4,t>>4,i>>4));return n?n[((t&15)*ht+(i&15))*ht+(e&15)]:0}set(e,t,i,n){if(!al(e,t,i)||!Number.isInteger(n)||!su[n]&&n!==0)return[];let a=go(e>>4,t>>4,i>>4),o=this.chunk.get(a);if(!o){if(!n)return[];o=new Uint8Array(gn),this.chunk.set(a,o)}let s=((t&15)*ht+(i&15))*ht+(e&15);if(o[s]===n)return[];o[s]=n,this.cime.delete(nr(e,i));let l=new Set([a]);for(let[A,c,h]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){let[u,f,g]=[e+A,t+c,i+h];al(u,f,g)&&l.add(go(u>>4,f>>4,g>>4))}return[...l].filter(A=>A===a||this.chunk.has(A))}cima(e,t){let i=nr(e,t);if(this.cime.has(i))return this.cime.get(i);let n=-1;if(e>=0&&t>=0&&e<256&&t<256)for(let a=15;a>=0&&n<0;a--){let o=this.chunk.get(go(e>>4,a,t>>4));if(o){for(let s=ht-1;s>=0;s--)if(o[(s*ht+(t&15))*ht+(e&15)]){n=a*ht+s;break}}}return this.cime.set(i,n),n}quota(e,t){let i=this.cima(Math.floor(e),Math.floor(t));return i<0?null:(i+1)*.5}calpestabile(e,t){let i=this.cima(e,t);return i>=0&&!this.get(e,i+1,t)&&!this.get(e,i+2,t)}percorso(e,t,i=null){let n=(A,c)=>this.calpestabile(A,c)&&!(i&&i.has(nr(A,c)));if(!n(t[0],t[1]))return null;let a=(A,c)=>Math.abs(this.cima(A[0],A[1])-this.cima(c[0],c[1]))<=1,o=new Map([[nr(e[0],e[1]),{p:e,g:0,f:0,prima:null}]]),s=new Set,l=0;for(;o.size&&l++<6e3;){let A=null;for(let h of o.values())(!A||h.f<A.f)&&(A=h);let c=nr(A.p[0],A.p[1]);if(o.delete(c),s.add(c),A.p[0]===t[0]&&A.p[1]===t[1]){let h=[];for(let u=A;u;u=u.prima)h.unshift(u.p);return h.slice(1)}for(let[h,u]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){let f=[A.p[0]+h,A.p[1]+u],g=nr(f[0],f[1]);if(s.has(g)||!n(f[0],f[1])||!a(A.p,f))continue;if(h&&u){let P=this.cima(A.p[0],A.p[1]);if(this.cima(f[0],f[1])!==P||this.cima(A.p[0]+h,A.p[1])!==P||this.cima(A.p[0],A.p[1]+u)!==P||!n(A.p[0]+h,A.p[1])||!n(A.p[0],A.p[1]+u))continue}let m=A.g+(h&&u?Math.SQRT2:1),p=o.get(g);(!p||m<p.g)&&o.set(g,{p:f,g:m,f:m+Math.hypot(f[0]-t[0],f[1]-t[1]),prima:A})}}return null}confini(){let e=256,t=256,i=256,n=0,a=0,o=0;for(let[s,l]of this.chunk){let[A,c,h]=s.split(",").map(Number);for(let u=0;u<gn;u++){if(!l[u])continue;let f=A*ht+u%ht,g=h*ht+Math.floor(u/ht)%ht,m=c*ht+Math.floor(u/(ht*ht));f<e&&(e=f),f+1>n&&(n=f+1),g<i&&(i=g),g+1>a&&(a=g+1),m+1>o&&(o=m+1),m<t&&(t=m)}}return n?{x0:e,y0:t,z0:i,x1:n,y1:o,z1:a}:{x0:0,y0:0,z0:0,x1:1,y1:1,z1:1}}salva(){let e={};for(let[t,i]of this.chunk){let n=[];for(let a=0;a<gn;){let o=1;for(;a+o<gn&&i[a+o]===i[a]&&o<255;)o++;n.push(i[a],o),a+=o}n.length===2&&n[0]===0||(e[t]=hd(Uint8Array.from(n)))}return e}static leggi(e){let t=new r;if(!e||typeof e!="object")return t;for(let[i,n]of Object.entries(e).slice(0,4096)){let a=i.split(",").map(Number);if(a.length!==3||a.some(c=>!Number.isInteger(c)||c<0||c>=256/ht)||typeof n!="string"||n.length>2e4)continue;let o;try{o=fd(n)}catch{continue}let s=new Uint8Array(gn),l=0,A=o.length%2===0;for(let c=0;c<o.length&&A;c+=2){let h=o[c],u=o[c+1];if(h&&!su[h]||!u||l+u>gn){A=!1;break}s.fill(h,l,l+u),l+=u}A&&l===gn&&t.chunk.set(i,s)}return t}}});function ol(){let r=new Uint8Array(ar*ar*4),e=new $n(r,ar,ar,Rt,ai);return e.minFilter=e.magFilter=Pt,e.wrapS=e.wrapT=ri,e.needsUpdate=!0,e}function dd(r){return[r==="pioggia"||r==="tempesta"?1:0,r==="neve"?1:0,r==="grandine"?1:0,r==="tempesta"?1:0]}function vd(r){return{stagioni:r.stagione?gd(r.stagione):null,meteo:r.meteo?dd(r.meteo):null,altro:r.vento!==void 0||r.mare!==void 0||r.tromba!==void 0?[r.vento??null,r.mare!==void 0?md[r.mare]??r.mare:null,r.tromba??null,null]:null}}function cu(r){let e=vd({stagione:"primavera",meteo:"sereno",vento:.35,mare:"normale",tromba:0,...r});for(let t of["stagioni","meteo","altro"]){let i=Ai[t].image.data,n=e[t];for(let a=0;a<ar*ar;a++)for(let o=0;o<4;o++)i[a*4+o]=Math.round((n[o]??0)*255);Ai[t].needsUpdate=!0}}var ar,pd,Ai,gd,md,uu,mo=Ti(()=>{_t();rr();ar=256/2,pd=["primavera","estate","autunno","inverno"];Ai={stagioni:ol(),meteo:ol(),altro:ol(),uniform:null};Ai.uniform={tStagioni:{value:Ai.stagioni},tMeteo:{value:Ai.meteo},tAltro:{value:Ai.altro},uCampoLato:{value:256}};gd=r=>pd.map(e=>e===r?1:0),md={calmo:0,normale:.5,mosso:1};uu=`
uniform sampler2D tStagioni, tMeteo, tAltro;
uniform float uCampoLato;
vec2 uvCampo(vec2 xz) { return xz / uCampoLato; }
`});function mu(r){["primavera","estate","autunno","inverno"].forEach((e,t)=>{let i=gu["PEAI"[t]];for(let n of["erba","chioma"])i[n].value.forEach((a,o)=>a.set(r[e][n][o]))})}function xo({acceso:r=0,opacita:e=1,stagione:t=null}={}){let i=new kt({uniforms:tl.merge([ce.lights,{opacita:{value:e},acceso:{value:r}}]),vertexShader:Md,fragmentShader:xd,vertexColors:!0,lights:!0,transparent:e<1,depthWrite:e>=1,shadowSide:Dt,extensions:{derivatives:!0},defines:t?{STAGIONE:Nr[t].length}:{}});if(t){i.uniforms.stagPrima=Pd[t];for(let n of["P","E","A","I"])i.uniforms["stag"+n]=gu[n][t];i.uniforms.tStagioni=Ai.uniform.tStagioni,i.uniforms.uCampoLato=Ai.uniform.uCampoLato}return i.defaultAttributeValues={...i.defaultAttributeValues,strato:[0]},i.uniforms.tinta=du,i.uniforms.ombra=pu,i.uniforms.lampadePos=Hr,i.uniforms.lampadeCol=Mo,i.uniforms.lampadeForza=Al,i.uniforms.emissivo=Fr,i.uniforms.sole=Ei,i}function yo(r,e,t){du.value.setRGB(r,e,t)}function bo(r,e,t){pu.value.setRGB(r,e,t)}function xu(r=[],e="#000000",t=0){Dd=t,Hr.value.forEach((i,n)=>{let a=r[n];a?i.set(a[0],a[1],a[2],t*(a[3]??1)):i.set(0,0,0,0)}),Mo.value.forEach((i,n)=>i.set(r[n]&&r[n][4]||e))}var Md,sl,hu,xd,fu,pu,du,Fr,Hr,Mo,Al,Nr,vo,Pd,gu,Ei,yd,bd,gi,vu,Po,wd,ll,Mu,Dd,wo,Bi=Ti(()=>{_t();mo();Md=`
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
}`,sl=8,hu="3.0",xd=`
#define LAMPADE_MAX ${sl}
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
    if (caduta > 0.0) { float w = ceil(caduta * ${hu}) / ${hu}; somma += lampadeCol[i] * w; tot += w; forte = max(forte, w); }
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
}`,fu=new ge("#c6bcc6"),pu={value:fu.clone()},du={value:new ge(1,1,1)},Fr={value:1},Hr={value:Array.from({length:sl},()=>new Ke(0,0,0,0))},Mo={value:Array.from({length:sl},()=>new ge(0,0,0))},Al={value:0},Nr={erba:["#5ac54f","#33984b","#1e6f50","#134c4c"],chioma:["#0c2e44","#134c4c","#1e6f50","#33984b","#5ac54f"]},vo=r=>({value:r.map(e=>new ge(e))}),Pd={erba:vo(Nr.erba),chioma:vo(Nr.chioma)},gu=Object.fromEntries(["P","E","A","I"].map(r=>[r,{erba:vo(Nr.erba),chioma:vo(Nr.chioma)}]));Ei={value:new C(-.55,1,-.35).normalize()};yd=null,bd=null,gi=()=>yd||=xo(),vu=new _i({colorWrite:!1,depthWrite:!1,shadowSide:Dt}),Po=()=>bd||=xo({acceso:1}),wd={},ll=r=>wd[r]||=xo({stagione:r}),Mu=(r=1)=>xo({acceso:r});Dd=0,wo=new _i({visible:!1})});function Pu(r,{massimo:e=ul.desktop}={}){let t=r?.capabilities?.maxTextureSize||e,i=Number(new URLSearchParams(globalThis.location?.search||"").get("ombra"));if([512,1024,2048,4096].includes(i))return Math.min(i,t);let n=!!(globalThis.matchMedia&&matchMedia("(pointer: coarse)").matches),a=(globalThis.innerWidth||1920)*(globalThis.innerHeight||1080),o=globalThis.navigator?.deviceMemory,s=e;return n&&(s=Math.min(s,ul.tocco)),n&&(a<Cd||o&&o<Td)&&(s=Math.min(s,ul.piccolo)),Math.min(s,t)}function Id(r){try{let e=r.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),i=String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER));return/nvidia|geforce|quadro|rtx|gtx|radeon rx|radeon pro|arc\(tm\) a|arc a\d/i.test(i)?!1:/intel|uhd|iris|mali|adreno|powervr|apple|videocore|mesa|llvmpipe|swiftshader|radeon\(tm\) graphics|vega \d+ graphics|software/i.test(i)}catch{return!0}}var _d,cl,Ed,Bd,Sd,ul,Cd,Td,Do,hl=Ti(()=>{_d=[1.5,1.25,1,.85,.77,.67,.59,.5],cl=1e3/60,Ed=21,Bd=18.5,Sd=6e3,ul={desktop:2048,tocco:1024,piccolo:512},Cd=900*500,Td=4;Do=class{constructor(e,{resa:t=null,misura:i=()=>{},alta:n=!1}={}){this.r=e,this.resa=t,this.misura=i,this.prBase=e.getPixelRatio(),this.scala=_d.filter(A=>t?this.prBase*A<=Math.max(1.5,this.prBase)+1e-6:A<=1);let a=Math.max(1,innerWidth*innerHeight)*this.prBase*this.prBase,o=Id(e)||!!(globalThis.matchMedia&&matchMedia("(pointer: coarse)").matches),s=n?9e6:o?12e5:42e5,l=this.scala.findIndex(A=>a*A*A<=s);l<0&&(l=this.scala.length-1),o&&!n&&(l=Math.max(l,this.scala.indexOf(1))),this.tetto=0,this.tettoFino=0,this.attesa=2e4,this.gradino=-1,this.vai(l),this.orologio=this.creaOrologio()}get scalaOra(){return this.scala[this.gradino]}vai(e){if(e=Math.max(0,Math.min(this.scala.length-1,e)),e===this.gradino)return;this.gradino=e;let t=this.scala[e];if(this.resa)this.resa.qualita({scala:t});else{let i=this.prBase*t;Math.abs(this.r.getPixelRatio()-i)>.001&&this.r.setPixelRatio(i)}this.misura(),this.somma=0,this.n=0,this.buoni=0,this.salta=2,this.cambiatoA=performance.now()}creaOrologio(){try{let e=this.r.getContext(),t=e.getExtension("EXT_disjoint_timer_query_webgl2");return!t||!e.createQuery?null:{gl:e,ext:t,liberi:[],inVolo:[],aperta:null,ms:null}}catch{return null}}inizio(){let e=this.orologio;if(!e||e.aperta||e.inVolo.length>4)return;let t=e.liberi.pop()||e.gl.createQuery();e.gl.beginQuery(e.ext.TIME_ELAPSED_EXT,t),e.aperta=t}fine(){let e=this.orologio;!e||!e.aperta||(e.gl.endQuery(e.ext.TIME_ELAPSED_EXT),e.inVolo.push(e.aperta),e.aperta=null)}leggiOrologio(){let e=this.orologio;if(!e)return null;let t=e.gl;for(;e.inVolo.length&&t.getQueryParameter(e.inVolo[0],t.QUERY_RESULT_AVAILABLE);){let i=e.inVolo.shift();if(!t.getParameter(e.ext.GPU_DISJOINT_EXT)){let n=t.getQueryParameter(i,t.QUERY_RESULT)/1e6;e.ms=e.ms===null?n:e.ms*.85+n*.15}e.liberi.push(i)}return e.ms}passo(e,t=0){let i=this.leggiOrologio();if(!(e>0)||e>3e3){this.somma=0,this.n=0;return}if(this.salta>0){this.salta--;return}if(this.somma+=e,this.n++,this.massimo=Math.max(this.massimo||0,e),!(this.n>=3&&this.somma>=500||this.n>=2&&this.somma>=1200))return;let n=this.n>=4?(this.somma-this.massimo)/(this.n-1):this.somma/this.n,a=this.somma,o=performance.now();if(this.somma=0,this.n=0,this.massimo=0,n>Ed){if(this.buoni=0,i!==null&&i<cl*.7||(this.saliti&&o-this.cambiatoA<4e3&&(this.tetto=this.gradino+1,this.tettoFino=o+this.attesa,this.attesa=Math.min(this.attesa*2,6e5)),this.saliti=!1,this.gradino>=this.scala.length-1))return;let l=i??Math.max(n-t,n*.35),A=this.scalaOra*Math.sqrt(Math.max(.05,Math.min(1,cl*.9/Math.max(l,1)))),c=this.gradino+1;for(;c<this.scala.length-1&&this.scala[c]>A+.001;)c++;t>n*.75&&(c=this.gradino+1),this.vai(c);return}if(n<Bd?this.buoni+=a:this.buoni=0,this.gradino===0||this.buoni<Sd||this.gradino-1<this.tetto&&o<this.tettoFino)return;let s=this.scala[this.gradino-1];if(i!==null&&i*(s*s)/(this.scalaOra*this.scalaOra)>cl*.8){this.buoni=0;return}this.saliti=!0,this.vai(this.gradino-1)}}});function bu(r){try{let e=r.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),i=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER);return/swiftshader|llvmpipe|software|basic render/i.test(String(i))}catch{return!1}}function Ld(){try{let r=document.createElement("canvas"),e=r.getContext("webgl2");if(!e)return{resa:!1,lenta:!1};let t={resa:!!(e.getExtension("EXT_color_buffer_float")||e.getExtension("EXT_color_buffer_half_float")),lenta:bu({getContext:()=>e})},i=e.getExtension("WEBGL_lose_context");return i&&i.loseContext(),t}catch{return{resa:!1,lenta:!1}}}function wu(r){let e=new URLSearchParams(location.search).get("qualita"),t=Ld(),i=t.resa&&e!=="bassa"&&(!t.lenta||e==="alta"),n=new Er({canvas:r,antialias:!i,alpha:!0,powerPreference:"high-performance"});n.outputColorSpace=At,n.setClearColor(0,0);let a=bu(n),o=e==="bassa"||e==="alta"?e:a?"bassa":"alta";n.setPixelRatio(a?.75:Math.min(devicePixelRatio,innerWidth<900?1.5:2)),n.shadowMap.enabled=o==="alta",n.shadowMap.type=ZA,n.shadowMap.autoUpdate=!1;let s=new hn,l=new co(16777215,1);l.castShadow=o==="alta";let A=Pu(n,{massimo:innerWidth<900?2048:4096});l.shadow.mapSize.set(A,A),l.shadow.bias=0,l.shadow.normalBias=0,s.add(l,l.target);let c=zd();return s.add(c),s.userData.stelle=c,{renderer:n,sc:s,sole:l,qualita:o,lenta:a,stelle:c}}function or(r,e,t,i,n=0,a=null){let o=(a||Ei.value).clone();r.target.position.set(e,n,t),r.position.set(e,n,t).addScaledVector(o,i*3+10);let s=r.shadow.camera,l=i+2;Object.assign(s,{left:-l,right:l,top:l,bottom:-l,near:.5,far:i*5+20}),s.updateProjectionMatrix(),r.shadow.bias=.02/(s.far-s.near),r.target.updateMatrixWorld(),r.updateMatrixWorld()}function Du(r){let e=(r%24+24)%24,t=i=>{let n=Math.max(-1,Math.min(1,(i-12)/6));return gl(dl+n*1.2,Math.max(.42,Rd*Math.cos(n*Math.PI/2*.75)))};return e>=6.5&&e<=17.5?t(e):e>17.5&&e<19.5?t(17.5).lerp(fl,(e-17.5)/2).normalize():e>4.5&&e<6.5?fl.clone().lerp(t(6.5),(e-4.5)/2).normalize():fl.clone()}function ml(r){let e=(r/24%1+1)%1,t=0;for(;t<_o.length-2&&_o[t+1][0]<=e;)t++;let[i,n,a]=_o[t],[o,s,l]=_o[t+1],A=yu((e-i)/(o-i)),c=(d,M)=>d.map((v,b)=>v+(M[b]-v)*A),h=c(n,s),u=c(a,l),f=Math.sin((e-.25)*Math.PI*2),g=Math.max(f,.24),m=yu(g/.22)*(.48+.52*Math.pow(g,.85)),p=Math.min(.85,(f<=0?.3:.72)*m),P=Math.max(...u)||1;return{ambiente:h,cielo:u,ombra:u.map(d=>{let M=d/P;return(M+(1-M)*.55)*(1-p)})}}function _u(r){let e=ml(r);yo(...e.ambiente),bo(...e.ombra)}function zd(){let r=42,e=()=>(r=r*16807%2147483647,r/2147483647),t=1500,i=new Float32Array(t*3),n=new Float32Array(t*3);for(let o=0;o<t;o++){let s=e()*2-1,l=e()*Math.PI*2,A=90,c=Math.sqrt(1-s*s);i.set([Math.cos(l)*c*A+4,s*A*.7+10,Math.sin(l)*c*A+4],o*3);let h=.25+Math.pow(e(),2.2)*.75;n.set([h*.92,h*.88,h],o*3)}let a=new Ge;return a.setAttribute("position",new $e(i,3)),a.setAttribute("color",new $e(n,3)),new to(a,new Br({size:2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.7,depthWrite:!1}))}var pl,dl,Rd,gl,Pv,fl,_o,yu,Qr=Ti(()=>{_t();Bi();hl();pl=Ei.value.clone(),dl=Math.atan2(pl.z,pl.x),Rd=Math.asin(pl.y),gl=(r,e)=>new C(Math.cos(r)*Math.cos(e),Math.sin(e),Math.sin(r)*Math.cos(e)),Pv=gl(dl+.35,1.2),fl=gl(dl+2.2,.85);_o=[[0,[.2,.23,.38],[.055,.086,.188]],[.2,[.23,.26,.41],[.094,.125,.29]],[.26,[.92,.78,.66],[1,.718,.529]],[.34,[1.04,1,.94],[.561,.827,1]],[.66,[1.04,1,.94],[.561,.827,1]],[.74,[.95,.72,.58],[1,.616,.431]],[.82,[.25,.28,.43],[.102,.129,.282]],[1,[.2,.23,.38],[.055,.086,.188]]],yu=r=>r<=0?0:r>=1?1:r*r*(3-2*r)});function Bo(r,e,{attivo:t=!1}={}){if(!r||!e)throw new Error("modoAR vuole il renderer e la scena.");r.setClearColor(0,0);let i=e.userData.stelle;return t&&!e.userData.ar?(e.userData.primaAR={sfondo:e.background,stelle:i?i.visible:!1},e.background=null,i&&(i.visible=!1)):!t&&e.userData.ar&&e.userData.primaAR&&(e.background=e.userData.primaAR.sfondo,i&&(i.visible=e.userData.primaAR.stelle),delete e.userData.primaAR),e.userData.ar=!!t,e.userData.ar}var qd,Jd,Eo,So=Ti(()=>{_t();qd=new xe,Jd=new xe,Eo=class{constructor(e,t="ancora-del-mondo"){this.sc=e,this.gruppo=new ct,this.gruppo.name=t,this.gruppo.matrixAutoUpdate=!1,this.fattore=1,this.base=new xe,this.inversa=new xe,this.tmpRaggio=new ki,e.add(this.gruppo),this.ricomponi()}aggiungi(...e){return this.gruppo.add(...e),this}togli(...e){return this.gruppo.remove(...e),this}contiene(e){for(let t=e;t;t=t.parent)if(t===this.gruppo)return!0;return!1}scala(e){if(!(Number.isFinite(e)&&e>0))throw new Error(`La scala del mondo deve essere un numero positivo: ${e}`);return this.fattore=e,this.ricomponi(),this}posa(e){if(e==null)this.base.identity();else if(e.isMatrix4)this.base.copy(e);else if(Array.isArray(e)||ArrayBuffer.isView(e)){if(e.length!==16||!Array.from(e).every(Number.isFinite))throw new Error("La posa del tavolo vuole 16 numeri finiti.");this.base.fromArray(e)}else throw new Error("La posa del tavolo vuole una Matrix4, 16 numeri, o null.");return this.ricomponi(),this}get identita(){return this.fattore===1&&this.base.equals(qd)}ricomponi(){let e=this.gruppo;e.matrix.copy(this.base).multiply(Jd.makeScale(this.fattore,this.fattore,this.fattore)),e.matrixWorldNeedsUpdate=!0,e.updateMatrixWorld(!0),this.inversa.copy(e.matrixWorld).invert()}alMondo(e){return this.identita?e:e.applyMatrix4(this.gruppo.matrixWorld)}dalMondo(e){return this.identita?e:e.applyMatrix4(this.inversa)}raggio(e){return this.identita?e.ray:this.tmpRaggio.copy(e.ray).applyMatrix4(this.inversa)}seguiSole(e){return this.gruppo.add(e,e.target),this}}});var Th={};Xh(Th,{ARCarta:()=>Yl});var bm,wm,Dm,_m,Yl,Ih=Ti(()=>{_t();So();Qr();rr();bm="js/vendor/mindar/mindar-image.prod.js",wm="ar/carta.mind",Dm=.55,_m=new xe().makeRotationX(Math.PI/2),Yl=class{constructor(e){this.e=e,this.vista=!1,this.m=new xe,this.tmp=new xe,this.cam=new C}async avvia(){let e=this.e,t=e.gioco.gui;t.avviso("Apro la fotocamera…"),this.video=Object.assign(document.createElement("video"),{className:"ar-video",muted:!0,playsInline:!0,autoplay:!0}),this.video.setAttribute("playsinline",""),this.flusso=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}}),this.video.srcObject=this.flusso,e.contenitore.prepend(this.video),await new Promise(A=>{this.video.readyState>=1?A():this.video.onloadedmetadata=A}),await this.video.play(),this.video.width=this.video.videoWidth,this.video.height=this.video.videoHeight;let{Controller:i}=await import(new URL(bm,document.baseURI).href);this.ctrl=new i({inputWidth:this.video.videoWidth,inputHeight:this.video.videoHeight,maxTrack:1,onUpdate:A=>{A.type==="updateMatrix"&&(this.posa=A.worldMatrix)}});let{dimensions:n}=await this.ctrl.addImageTargets(new URL(wm,document.baseURI).href),[a,o]=n[0];this.dopo=new xe().compose(new C(a/2,o/2,0),new Nt,new C(a,a,a)),this.ctrl.dummyRun(this.video),Bo(e.renderer,e.sc,{attivo:!0}),e.resa=null,e.banco=null;let s=e.mondo;this.scala=Dm/s.raggio,e.ancora.scala(this.scala);let l=s.blocchi.confini().y0*.5;this.centro=new xe().makeTranslation(-s.centro[0]*this.scala,-l*this.scala,-s.centro[2]*this.scala),document.body.classList.add("ar-carta"),this.ctrl.processVideo(this.video),t.avviso("Inquadra la carta")}proiezione(){let e=this.e,t=e.camera,i=this.ctrl.getProjectionMatrix(),n=e.contenitore.clientWidth,a=e.contenitore.clientHeight,o=this.ctrl.inputWidth,s=this.ctrl.inputHeight,l=o/s>n/a?a:n/o*s;t.fov=2*Math.atan(1/i[5]*(a/l))*180/Math.PI,t.aspect=n/a,t.near=i[14]/(i[10]-1),t.far=i[14]/(i[10]+1),t.updateProjectionMatrix()}passo(){let e=this.e,t=e.ancora.gruppo;if(!this.ctrl)return;this.proiezione(),e.camera.position.set(0,0,0),e.camera.quaternion.identity(),e.camera.updateMatrixWorld();let i=!!this.posa;if(i!==this.vista&&(this.vista=i,document.body.classList.toggle("ar-vista",i),i||e.gioco.gui.avviso("Inquadra la carta")),t.visible=i,!i)return;this.m.fromArray(this.posa).multiply(this.dopo).multiply(_m).multiply(this.centro),e.ancora.posa(this.m);let n=e.mondo;or(e.sole,n.centro[0],n.centro[2],n.raggio+2,n.centro[1]),e.ancora.dalMondo(this.cam.set(0,0,0));let a=e.giocatore.disegnato;e.telecamera.yaw=Math.atan2(this.cam.x-a[0],this.cam.z-a[2])}ferma(){if(this.ctrl&&(this.ctrl.stopProcessVideo(),this.ctrl=null),this.flusso)for(let e of this.flusso.getTracks())e.stop();this.video&&this.video.remove(),document.body.classList.remove("ar-carta","ar-vista")}}});_t();Qr();_t();Bi();var Ud=[{gruppo:"Tempo",voci:[{id:"oraVera",tipo:"si",def:!0,nome:"Ora vera"},{id:"ora",tipo:"num",def:12,min:0,max:24,passo:.25,nome:"Ora"},{id:"giorno",tipo:"scelta",def:0,nome:"Un giorno dura",opzioni:[[0,"Fermo"],[300,"5 min"],[60,"1 min"],[20,"20 s"]]},{id:"stagione",tipo:"scelta",def:"",nome:"Stagione",opzioni:[["","Vera"],["primavera","Prim."],["estate","Est."],["autunno","Aut."],["inverno","Inv."]]}]},{gruppo:"Acqua",voci:[{id:"acquaVicino",tipo:"colore",def:"#8fd4e6",nome:"Accanto all'isola"},{id:"acquaMezzo",tipo:"colore",def:"#6d9fe6",nome:"In mezzo"},{id:"acquaBordo",tipo:"colore",def:"#7f78d8",nome:"Verso il bordo"},{id:"pienaVicino",tipo:"num",def:.94,min:0,max:1,passo:.01,nome:"Piena, vicino"},{id:"pienaBordo",tipo:"num",def:.42,min:0,max:1,passo:.01,nome:"Piena, al bordo"},{id:"pozza",tipo:"num",def:1.24,min:1,max:3,passo:.01,nome:"Larghezza pozza"},{id:"riflessoMin",tipo:"num",def:.2,min:0,max:1,passo:.01,nome:"Riflesso delle cose"},{id:"riflessoMax",tipo:"num",def:.6,min:0,max:1,passo:.01,nome:"Riflesso, al massimo"},{id:"cieloMix",tipo:"num",def:0,min:0,max:.6,passo:.01,nome:"Cielo nell'acqua"},{id:"rifrazione",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Rifrazione"},{id:"ondeFondo",tipo:"num",def:1,min:0,max:2,passo:.05,nome:"Onde di fondo"},{id:"ondeGesto",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Onde del mouse"},{id:"attrito",tipo:"num",def:.9955,min:.98,max:.9995,passo:5e-4,nome:"Quanto durano"},{id:"vuotoPiega",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Il vuoto si piega"},{id:"luccichio",tipo:"num",def:0,min:0,max:3,passo:.05,nome:"Luccichio"},{id:"segni",tipo:"num",def:1,min:0,max:2,passo:.05,nome:"Segni sul pelo"},{id:"schiuma",tipo:"num",def:.7,min:0,max:1,passo:.05,nome:"Schiuma a riva"},{id:"filo",tipo:"num",def:.5,min:0,max:1,passo:.05,nome:"Filo del bordo"}]},{gruppo:"Pesci",voci:[{id:"pesci",tipo:"num",def:7,min:0,max:16,passo:1,nome:"Quanti"},{id:"pesciVelocita",tipo:"num",def:1,min:0,max:4,passo:.05,nome:"Velocità"},{id:"pesciPaura",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Paura"},{id:"pesciScala",tipo:"num",def:1,min:.4,max:3,passo:.05,nome:"Grandezza"},{id:"pesceOro",tipo:"si",def:!0,nome:"Quello d'oro"}]},{gruppo:"Ambiente",voci:[{id:"meteo",tipo:"scelta",def:"sereno",nome:"Tempo",opzioni:[["sereno","Sereno"],["pioggia","Pioggia"],["neve","Neve"],["grandine","Grandine"],["tempesta","Tempesta"],["tromba","Tromba d'aria"]]},{id:"vento",tipo:"num",def:.35,min:0,max:1,passo:.05,nome:"Vento"},{id:"particelle",tipo:"si",def:!0,nome:"Foglie e petali"},{id:"lucciole",tipo:"si",def:!0,nome:"Lucciole di notte"},{id:"quante",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Quante"}]},{gruppo:"Luce",voci:[{id:"bloom",tipo:"num",def:7,min:0,max:16,passo:.1,nome:"Bloom"},{id:"soglia",tipo:"num",def:1.13,min:.4,max:2,passo:.01,nome:"Bloom, soglia"},{id:"dispersione",tipo:"num",def:.268,min:0,max:1,passo:.01,nome:"Bloom, dispersione"},{id:"sole",tipo:"num",def:1.4,min:.5,max:3,passo:.01,nome:"Sole"},{id:"lampadeForza",tipo:"num",def:1,min:0,max:3,passo:.05,nome:"Lampade"},{id:"aberrazione",tipo:"num",def:.029,min:0,max:.3,passo:.001,nome:"Aberrazione"},{id:"fxaa",tipo:"si",def:!0,nome:"Antialias"},{id:"ombre",tipo:"si",def:!0,nome:"Ombre"}]}],Od=Ud.flatMap(r=>r.voci),Nd=Object.fromEntries(Od.map(r=>[r.id,r.def]));var rt={...Nd};mo();var vn={soglia:Math.pow(1.13,2.2),intensita:7,dispersione:.05+.268*.9,sole:1.4/1.04,livelli:6},vl=16,Gr=6,Fd="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Ml=8,Hd=`
precision highp float;
${uu}
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
`,Qd=`
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
}`,Gd=`
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
}`,kd=`
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
}`,Vd=`
precision highp float;
varying vec2 vUv;
uniform sampler2D t, tAlto;
uniform vec2 uPx;
uniform float uDispersione;
vec3 l(float x, float y) { return texture2D(t, vUv + vec2(x, y) * uPx).rgb; }
void main() {
  vec3 c = l(0.0, 0.0) * 4.0 + (l(-1.0, 0.0) + l(1.0, 0.0) + l(0.0, -1.0) + l(0.0, 1.0)) * 2.0 + l(-1.0, -1.0) + l(1.0, -1.0) + l(-1.0, 1.0) + l(1.0, 1.0);
  gl_FragColor = vec4(mix(texture2D(tAlto, vUv).rgb, c / 16.0, uDispersione), 1.0);
}`,Wd=`
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
}`,Xd=`
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
}`,Yd=`
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
}`,jd=`
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
}`,kr=class{static puo(e){return e.capabilities.isWebGL2&&(e.extensions.has("EXT_color_buffer_float")||e.extensions.has("EXT_color_buffer_half_float"))}constructor(e,{acqua:t=!1,trasparente:i=!1,sole:n=vn.sole,emissivo:a=2.4}={}){this.emissivo=a,this.scalaInterna=this.scalaBase=e.getPixelRatio()<1.5?1.5:1,this.sopra=new hn,this.r=e,this.conAcqua=t,this.trasparente=i,this.ha={riflesso:!1},this.fondo=new ge,this.camSpecchio=new wt,this.scenaQuad=new hn,this.camQuad=new Kn(-1,1,1,-1,0,1);let o=new Ge;o.setAttribute("position",new Pe([-1,-1,0,3,-1,0,-1,3,0],3)),o.setAttribute("uv",new Pe([0,0,2,0,0,2],2)),this.quad=new Ze(o,null),this.quad.frustumCulled=!1,this.scenaQuad.add(this.quad);let s=(l,A,c={})=>new kt({vertexShader:Fd,fragmentShader:l,uniforms:A,defines:c,depthTest:!1,depthWrite:!1,blending:Nc,extensions:{derivatives:!0}});this.mAcqua=s(Hd,{tBase:{value:null},tProf:{value:null},tRifl:{value:null},tOnde:{value:null},uInvVP:{value:new xe},uVP:{value:new xe},uRiflM:{value:new xe},uCentro:{value:new oe},uPxOnde:{value:new oe},uLato:{value:96},uPozza:{value:new C(0,0,12)},uBolle:{value:Array.from({length:Ml},()=>new Ke)},uCam:{value:new C},uAmbiente:{value:new ge(1,1,1)},uCielo:{value:new ge(0,0,0)},uPelo:{value:new ge},uProfondo:{value:new ge},uFondale:{value:new ge},uLampoDir:{value:new C(0,1,0)},uSoleCol:{value:new ge(0,0,0)},uPesci:{value:Array.from({length:vl*2},()=>new Ke)},uNPesci:{value:0},uRiflesso:{value:new oe},uPiena:{value:new oe},uCieloMix:{value:0},uRifra:{value:1},uFondo:{value:1},uPiega:{value:1},uLuccichio:{value:1},uSegni:{value:1},uSchiuma:{value:1},uFilo:{value:1},uLampade:Hr,uLampCol:Mo,uLampForza:Al,...Ai.uniform,uLivello:{value:0},uTempo:{value:0}},{LAMPADE_MAX:Hr.value.length,PESCI_DATI:vl*2,BOLLE:Ml}),this.mOnde=s(Qd,{t:{value:null},tIsola:{value:null},uPx:{value:new oe},uSposta:{value:new oe},uAttrito:{value:.9955},uRaggio:{value:.1},uGocce:{value:Array.from({length:Gr},()=>new Ke)}},{GOCCE_MAX:Gr}),this.gocce=[],this.versoVista=new C,this.lato=96,this.centro=new oe,this.mFiltro=s(Gd,{t:{value:null},uSoglia:{value:vn.soglia},uGinocchio:{value:vn.soglia*.5},uSole:{value:n}}),this.mGiu=s(kd,{t:{value:null},uPx:{value:new oe}}),this.mSu=s(Vd,{t:{value:null},tAlto:{value:null},uPx:{value:new oe},uDispersione:{value:vn.dispersione}}),this.mFinale=s(Wd,{t:{value:null},tBloom:{value:null},uForza:{value:vn.intensita*.3},uAberrazione:{value:0},uTrasparente:{value:i?1:0},uGrana:{value:1}}),this.mEasu=s(Yd,{t:{value:null},uIn:{value:new oe},uScala:{value:new oe}}),this.mRcas=s(jd,{t:{value:null},uPx:{value:new oe},uNitido:{value:Math.pow(2,-.25)}}),this.mFxaa=s(Xd,{t:{value:null},uPx:{value:new oe},uAcceso:{value:1}}),this.soleSuo=n,this.misura()}misura(){if(!this.usata)return;let e=this.r.getDrawingBufferSize(new oe);if(e.x<1||e.y<1)return;let t=Math.round(e.x*this.scalaInterna),i=Math.round(e.y*this.scalaInterna);if(t===this.w&&i===this.h)return;this.libera(),this.w=t,this.h=i;let n={minFilter:Pt,magFilter:Pt,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1},a={...n,type:Qi,format:Rt};this.base=new gt(t,i,{...a,depthBuffer:!0}),this.base.depthTexture=new Zn(t,i,fi),this.composto=new gt(t,i,a),this.pronto=new gt(t,i,n),this.rifl=this.conAcqua?new gt(Math.max(2,t>>1),Math.max(2,i>>1),{...a,depthBuffer:!0}):null,this.tela=[e.x,e.y],this.scalaInterna<.99&&(this.liscio=new gt(t,i,n),this.grande=new gt(e.x,e.y,n)),this.giu=[],this.su=[];let o=Math.max(2,t>>1),s=Math.max(2,i>>1);for(let l=0;l<vn.livelli&&Math.min(o,s)>=8;l++)this.giu.push(new gt(o,s,a)),l<vn.livelli-1&&this.su.push(new gt(o,s,a)),o>>=1,s>>=1;this.su.length=Math.max(0,this.giu.length-1)}libera(){for(let e of[this.base,this.composto,this.pronto,this.rifl,this.liscio,this.grande,...this.giu||[],...this.su||[]])e&&e.dispose();this.base&&this.base.depthTexture&&this.base.depthTexture.dispose(),this.base=this.composto=this.pronto=this.rifl=this.liscio=this.grande=null,this.giu=[],this.su=[],this.w=this.h=0,this.specchioDi=null}passata(e,t){this.quad.material=e,this.r.setRenderTarget(t),this.r.render(this.scenaQuad,this.camQuad)}isola(e,t,i,n){let a=this.onde&&this.lato===i?{x:this.centro.x,z:this.centro.y}:null;this.centro.set(e,t),this.lato=i;let o=innerWidth<900?192:320;if(!this.onde){let A=()=>new gt(o,o,{type:Qi,format:Rt,minFilter:Pt,magFilter:Pt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});this.onde=[A(),A()],this.nOnde=o}let s=this.nOnde,l=new Uint8Array(s*s);for(let A=0;A<s;A++)for(let c=0;c<s;c++)n(e+((c+.5)/s-.5)*i,t+((A+.5)/s-.5)*i)&&(l[A*s+c]=255);if(this.terra&&this.terra.dispose(),this.terra=new $n(l,s,s,Vc,ai),this.terra.minFilter=this.terra.magFilter=yt,this.terra.needsUpdate=!0,a&&(a.x!==e||a.z!==t)){let A=this.mOnde.uniforms;A.uSposta.value.set((e-a.x)/i,(t-a.z)/i),A.t.value=this.onde[0].texture,A.tIsola.value=this.terra,A.uPx.value.set(1/this.nOnde,1/this.nOnde);for(let c=0;c<Gr;c++)A.uGocce.value[c].z=0;this.passata(this.mOnde,this.onde[1]),this.onde.reverse(),A.uSposta.value.set(0,0)}}tocca(e,t,i,n){this.gocce.length>=Gr*3&&this.gocce.shift(),this.gocce.push([(e-this.centro.x)/this.lato+.5,(t-this.centro.y)/this.lato+.5,i/this.lato,n])}passoOnde(){let e=this.mOnde.uniforms;e.t.value=this.onde[0].texture,e.tIsola.value=this.terra,e.uPx.value.set(1/this.nOnde,1/this.nOnde);for(let t=0;t<Gr;t++){let i=this.gocce.shift();i?e.uGocce.value[t].set(i[0],i[1],i[2],i[3]):e.uGocce.value[t].z=0}this.passata(this.mOnde,this.onde[1]),this.onde.reverse()}qualita({scala:e=this.scalaInterna}={}){e!==this.scalaInterna&&(this.scalaInterna=e,this.w&&(this.libera(),this.misura()))}scena(e,t,{cielo:i=null,livello:n=0,specchio:a=!0}={}){if((!this.usata||!this.w)&&(this.usata=!0,this.misura()),!this.w)return;let o=this.r,s=Fr.value;Fr.value=this.emissivo;let l=o.getClearAlpha();o.getClearColor(this.fondo),i?o.setClearColor(i,1):o.setClearColor(0,0),t.updateMatrixWorld();let A=t.matrixWorld.elements.join()+t.projectionMatrix.elements.join()+n;if(this.conAcqua&&(a||A!==this.specchioDi)){this.specchioDi=A;let c=i?i.clone():null;o.setClearColor(0,0);let h=e.userData.stelle,u=h&&h.visible;h&&(h.visible=!!u&&!!this.stelleNelRiflesso),this.specchio(e,t,n),h&&(h.visible=u),c&&o.setClearColor(c,1)}o.setRenderTarget(this.base),o.clear(),o.render(e,t),o.setRenderTarget(null),o.setClearColor(this.fondo,l),Fr.value=s}specchio(e,t,i){let n=this.camSpecchio,a=this.r;t.updateMatrixWorld();let o=new C().setFromMatrixPosition(t.matrixWorld),s=t.getWorldDirection(new C),l=new C(0,1,0).applyQuaternion(t.quaternion);n.position.set(o.x,2*i-o.y,o.z),n.up.set(l.x,-l.y,l.z),n.lookAt(n.position.x+s.x,n.position.y-s.y,n.position.z+s.z),n.near=t.near,n.far=t.far,n.updateMatrixWorld(),n.projectionMatrix.copy(t.projectionMatrix),this.mAcqua.uniforms.uRiflM.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(n.projectionMatrix).multiply(n.matrixWorldInverse);let A=new ni(new C(0,1,0),-i).applyMatrix4(n.matrixWorldInverse),c=new Ke(A.normal.x,A.normal.y,A.normal.z,A.constant),h=n.projectionMatrix.elements,u=new Ke((Math.sign(c.x)+h[8])/h[0],(Math.sign(c.y)+h[9])/h[5],-1,(1+h[10])/h[14]);c.multiplyScalar(2/c.dot(u)),h[2]=c.x,h[6]=c.y,h[10]=c.z+1-.003,h[14]=c.w,a.setRenderTarget(this.rifl),a.clear(),a.render(e,n)}pesci(e,t=1){let i=this.mAcqua.uniforms,n=Math.min(e.length,vl);i.uNPesci.value=n;for(let a=0;a<n;a++){let o=e[a];i.uPesci.value[a*2].set(o.x,o.z,Math.cos(o.ang),Math.sin(o.ang)),i.uPesci.value[a*2+1].set(o.s*t,o.fondo,o.fase,o.oro?1:0)}}regole(){let e=this.mFiltro.uniforms,t=Math.pow(rt.soglia,2.2);if(e.uSoglia.value=t,e.uGinocchio.value=t*.5,this.conAcqua&&(e.uSole.value=rt.sole/1.04),this.mSu.uniforms.uDispersione.value=.05+rt.dispersione*.9,this.mFinale.uniforms.uForza.value=rt.bloom*.3,this.mFinale.uniforms.uAberrazione.value=rt.aberrazione,this.mFxaa.uniforms.uAcceso.value=rt.fxaa?1:0,!this.conAcqua)return;let i=this.mAcqua.uniforms;i.uPelo.value.set(rt.acquaVicino),i.uProfondo.value.set(rt.acquaMezzo),i.uFondale.value.set(rt.acquaBordo),i.uRiflesso.value.set(rt.riflessoMin,rt.riflessoMax),i.uPiena.value.set(rt.pienaVicino,rt.pienaBordo),i.uCieloMix.value=rt.cieloMix,i.uRifra.value=rt.rifrazione,i.uFondo.value=rt.ondeFondo,i.uPiega.value=rt.vuotoPiega,i.uLuccichio.value=rt.luccichio,i.uSegni.value=rt.segni,i.uSchiuma.value=rt.schiuma,i.uFilo.value=rt.filo,this.mOnde.uniforms.uAttrito.value=rt.attrito}effetti(e,t={}){if(!this.base)return;let i=this.r;this.regole();let n=this.base;if(this.conAcqua){let u=this.mAcqua.uniforms;u.tBase.value=this.base.texture,u.tProf.value=this.base.depthTexture,u.tRifl.value=this.rifl.texture,e.updateMatrixWorld(),u.uInvVP.value.multiplyMatrices(e.matrixWorld,e.projectionMatrixInverse),u.uVP.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);let f=t.tempo??0;if(this.onde){let m=Math.min(4,Math.floor((f-(this.tempoOnde??f))*60));(this.tempoOnde===void 0||m>0)&&(this.tempoOnde=f);for(let p=0;p<m;p++)this.passoOnde();u.tOnde.value=this.onde[0].texture,u.uPxOnde.value.set(1/this.nOnde,1/this.nOnde),u.uCentro.value.copy(this.centro),u.uLato.value=this.lato}u.uCam.value.setFromMatrixPosition(e.matrixWorld);let g=e.getWorldDirection(this.versoVista);u.uLampoDir.value.set(g.x,-g.y,g.z).add(Ei.value).normalize(),u.uLivello.value=t.livello??0,u.uTempo.value=f,t.ambiente&&u.uAmbiente.value.setRGB(...t.ambiente),t.cielo&&u.uCielo.value.setRGB(...t.cielo),t.luce&&u.uSoleCol.value.setRGB(...t.luce),t.pozza&&(u.uPozza.value.set(t.pozza.x,t.pozza.z,t.pozza.r),this.mOnde.uniforms.uRaggio.value=t.pozza.r/this.lato);for(let m=0;m<Ml;m++){let p=t.bolle&&t.bolle[m];p?u.uBolle.value[m].set(p.x,p.z,p.r,p.chi||0):u.uBolle.value[m].set(0,0,0,-1)}if(this.passata(this.mAcqua,this.composto),n=this.composto,this.aria){this.aria.bersaglio(this.base.depthTexture,this.w,this.h);let m=i.autoClear;i.autoClear=!1,i.setRenderTarget(this.composto),i.render(this.aria.scena,e),i.autoClear=m}if(this.sopra.children.length){for(let p of this.sopra.children){let P=p.material&&p.material.uniforms;P&&P.tProf&&(P.tProf.value=this.base.depthTexture,P.uRis.value.set(this.w,this.h),P.uProva.value=1)}let m=i.autoClear;i.autoClear=!1,i.setRenderTarget(this.composto),i.render(this.sopra,e),i.autoClear=m}}let a=this.giu.length;if(a){this.mFiltro.uniforms.t.value=n.texture,this.passata(this.mFiltro,this.giu[0]);for(let f=1;f<a;f++){let g=this.mGiu.uniforms;g.t.value=this.giu[f-1].texture,g.uPx.value.set(1/this.giu[f-1].width,1/this.giu[f-1].height),this.passata(this.mGiu,this.giu[f])}let u=this.giu[a-1];for(let f=a-2;f>=0;f--){let g=this.mSu.uniforms;g.t.value=u.texture,g.tAlto.value=this.giu[f].texture,g.uPx.value.set(1/u.width,1/u.height),this.passata(this.mSu,this.su[f]),u=this.su[f]}this.bloomFatto=u}let o=this.mFinale.uniforms;o.t.value=n.texture,o.tBloom.value=a?this.bloomFatto.texture:n.texture,a||(o.uForza.value=0);let s=rt.fxaa&&this.r.getPixelRatio()*this.scalaInterna<1.49,l=!!this.grande;o.uGrana.value=l?0:1,this.passata(this.mFinale,s||l?this.pronto:null);let A=this.pronto;if(s&&(this.mFxaa.uniforms.t.value=this.pronto.texture,this.mFxaa.uniforms.uPx.value.set(1/this.w,1/this.h),this.passata(this.mFxaa,l?this.liscio:null),A=this.liscio),!l)return;let c=this.mEasu.uniforms;c.t.value=A.texture,c.uIn.value.set(this.w,this.h),c.uScala.value.set(this.w/this.tela[0],this.h/this.tela[1]),this.passata(this.mEasu,this.grande);let h=this.mRcas.uniforms;h.t.value=this.grande.texture,h.uPx.value.set(1/this.tela[0],1/this.tela[1]),this.passata(this.mRcas,null)}};hl();So();Bi();var Eu=r=>{let{B:e,C:t,K:i,S:n,L:a,V:o,lastra:s,gambeT:l,chiaro:A,mescola:c,LUCI:h,rulloX:u,rulloZ:f,cuscino:g}=r,m=a.nero,p=a.legnoScuro,P=a.legno,d=a.ferro,M=a.crema,v=a.pietra,b=a.acqua,y=a.neve,w=a.luce,U=(x,D=.4)=>c(x,d,D),I=(x,D,S)=>({r:[x,D,S]}),z=(x,D,S,T,V,J)=>J?[e(x-.14,D-.12,.04,0,S+.06,T+.01,m),e(.1,D,.26,-(x/2-.05),S,T+.12,A(V,.1)),e(.1,D,.26,x/2-.05,S,T+.12,A(V,.1))]:[e(x/2-.02,D,.1,-x/4,S,T,A(V,.08)),e(x/2-.02,D,.1,x/4,S,T,A(V,.08)),n(.04,-.07,S+D/2,T+.06,p),n(.04,.07,S+D/2,T+.06,p)],Q=(x,D,S,T,V,J)=>J?[e(x-.12,D-.1,.04,0,S+.05,T+.01,m),e(x,.1,.26,0,S,T+.12,A(V,.1))]:[e(x,D,.1,0,S,T,A(V,.08)),u(x*.5,.035,S+D-.12,T+.09,d)],R=(x,D,S,T,V,J)=>J?[e(x,D,.3,0,S,T+.1,A(V,.14)),e(x-.12,.05,.22,0,S+D-.02,T+.1,U(V))]:[e(x,D,.1,0,S,T,A(V,.1)),n(.045,0,S+D/2,T+.07,p)],k=(x,D,S)=>t(.05,.07,x,D,S,m,8,void 0,I(90,0,0)),X=(x,D,S,T=d)=>t(.05,.12,x,D,S,T,6),ae=(x,D,S)=>n(.1,x,D,S,"#8fe3ff",0,{uno:!0});return{forno:(x,D,S)=>[e(.9,1,.76,0,0,0,x),e(.94,.1,.8,0,1,0,v),...[-.22,.22].flatMap(T=>[t(.17,.04,T,1.1,-.1,m,10),t(.08,.04,T,1.14,-.1,d,8)]),k(-.25,.8,.38),k(0,.8,.38),k(.25,.8,.38),...S?[e(.64,.46,.03,0,.26,.39,m),e(.76,.08,.26,0,.24,.52,A(x,.12))]:[e(.76,.5,.06,0,.24,.4,A(x,.1)),e(.54,.26,.03,0,.36,.44,m),u(.5,.04,.68,.46,d)]],microonde:(x,D,S)=>[...l(.8,.7,.3,p,.12),e(.92,.6,.76,0,.3,0,x),e(.62,.42,.04,-.12,.4,.38,S?m:U(x,.7)),...S?[e(.52,.1,.1,-.12,.44,.2,w,h),n(.12,-.12,.45,.1,M)]:[],e(.2,.42,.04,.34,.4,.38,A(x,.14)),k(.34,.66,.38),k(.34,.5,.38)],tostapane:(x,D,S)=>[e(.74,.32,.5,0,0,0,x),e(.76,.06,.52,0,.3,0,v),e(.5,.05,.08,0,.35,-.1,m),e(.5,.05,.08,0,.35,.12,m),e(.1,.1,.1,.4,S?.04:.16,.18,d),...S?[e(.4,.2,.06,0,.36,-.1,"#edab50"),e(.4,.2,.06,0,.36,.12,"#edab50")]:[]],bollitore:(x,D,S)=>[t(.3,.1,0,0,0,d,12),t(.3,.34,0,.1,0,x,12,.24),t(.2,.07,0,.44,0,A(x,.1),12),n(.07,0,.55,0,d),e(.14,.34,.14,.36,.12,0,p),i(.1,.14,-.3,.3,0,x,5,I(0,0,80)),...S?[e(.14,.06,.14,0,0,.38,"#ea323c",h)]:[]],credenza:(x,D,S)=>[...l(2.7,.7,.24,p,.16),e(2.8,.9,.76,0,.24,0,x),s(2.9,.14,.84,0,1.14,0,A(x,.1)),e(.1,.9,.04,0,.24,.38,U(x)),...z(1.3,.8,.29,.38,x,S).map(T=>[T[0],T[1],[T[2][0]-.7,T[2][1],T[2][2]],T[3],T[4]]),...z(1.3,.8,.29,.38,x,0).map(T=>[T[0],T[1],[T[2][0]+.7,T[2][1],T[2][2]],T[3],T[4]]),...ue(-.9,1.28,0)],"sgabello-alto":x=>[...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([D,S])=>t(.06,.6,D*.26,0,S*.26,p,6,.09)),t(.4,.1,0,.6,0,x,12),t(.36,.08,0,.7,0,A(x,.14),12),t(.3,.05,0,.25,0,p,8)],"tavolo-cucina":x=>[s(2.85,.16,1.7,0,.78,0,x),...l(2.85,1.7,.78,p,.22),e(2,.05,1,0,.94,0,c(x,"#ea323c",.6)),t(.14,.15,0,.94,0,"#ffa214",8,.1)],"isola-cucina":x=>[e(2.8,.9,1.5,0,0,0,x),s(3,.14,1.7,0,.9,0,v),e(.6,.3,.04,-.7,.35,.76,U(x)),e(.6,.3,.04,.7,.35,.76,U(x)),e(.7,.04,.5,-.9,1.04,.2,P),t(.12,.2,.7,1.04,-.1,"#ea323c",8,.16),n(.15,1.05,1.04,.3,"#ffa214",0)],lavello:(x,D,S)=>[e(2.8,1,.76,0,0,0,x),s(2.92,.12,.84,0,1,0,v),e(1,.04,.5,-.5,1.12,.02,"#657392",{netta:!0}),t(.06,.4,-.5,1.1,-.3,d,8),e(.12,.1,.4,-.5,1.46,-.15,d),...S?[e(.07,.3,.07,-.5,1.1,-0,"#8fe3ff",h)]:[],...z(1.2,.8,.1,.38,x,S).map(T=>[T[0],T[1],[T[2][0]+.7,T[2][1],T[2][2]],T[3],T[4]]),e(.7,.3,.04,-.6,.35,.39,U(x)),k(.8,.95,.35)],lavastoviglie:(x,D,S)=>[e(.9,.98,.76,0,0,0,x),e(.94,.06,.8,0,.98,0,v),...S?[e(.78,.5,.04,0,.16,.39,m),e(.78,.07,.26,0,.14,.5,A(x,.12)),e(.6,.04,.3,0,.4,.5,d)]:[e(.78,.66,.06,0,.12,.4,A(x,.1)),u(.5,.04,.72,.46,d)],k(-.22,.88,.38),k(.22,.88,.38)],dispensa:(x,D,S)=>[e(1.9,2,.76,0,0,0,x),s(2,.12,.84,0,2,0,A(x,.1)),...[-.5,.5].flatMap(T=>[.3,.9,1.5].map(V=>e(.8,.06,.04,T,V,.39,U(x)))),...S?[e(1.76,1.9,.04,0,.05,.39,m),...[.35,.95,1.55].flatMap(T=>[e(1.7,.06,.3,0,T,.2,P),t(.1,.22,-.5,T+.06,.2,"#ea323c",8),t(.1,.18,0,T+.06,.2,"#5ac54f",8),e(.3,.2,.2,.5,T+.06,.2,M)]),e(.1,1.95,.26,-.9,.05,.52,A(x,.1)),e(.1,1.95,.26,.9,.05,.52,A(x,.1))]:[e(.9,1.9,.1,-.46,.05,.4,A(x,.08)),e(.9,1.9,.1,.46,.05,.4,A(x,.08)),n(.05,-.1,1,.47,p),n(.05,.1,1,.47,p)]],pentola:x=>[t(.5,.1,0,0,0,d,12),t(.46,.4,0,0,0,x,12,.46),t(.5,.06,0,.4,0,A(x,.14),12),e(.22,.12,.1,-.46,.3,0,d),e(.22,.12,.1,.46,.3,0,d),n(.07,0,.52,0,d)],"frigo-basso":(x,D,S)=>[e(.9,1.1,.76,0,0,0,x),s(.96,.1,.8,0,1.1,0,A(x,.14)),...S?[e(.74,.74,.04,0,.3,.39,m),e(.7,.05,.3,0,.5,.25,v),e(.14,.2,.14,-.2,.55,.25,"#ea323c"),e(.14,.14,.14,.2,.55,.25,w),e(.1,.9,.26,-.42,.1,.52,A(x,.1))]:[e(.8,.86,.1,0,.14,.4,A(x,.1)),e(.8,.04,.1,0,.62,.41,U(x)),e(.07,.3,.07,.3,.7,.47,d),e(.07,.2,.07,.3,.3,.47,d)]],"cesto-frutta":x=>[t(.4,.22,0,0,0,P,12,.52),...[[-.2,0],[.2,.05],[0,-.2],[.05,.2],[-.15,.2]].map(([D,S],T)=>n(.17,D,.3,S,["#ea323c","#ffa214","#5ac54f","#ed7614","#ea323c"][T],0)),e(.04,.2,.04,.1,.42,0,p)],torta:(x,D,S)=>[t(.46,.1,0,0,0,M,14,.5),t(.38,.22,0,.1,0,x,14),t(.38,.05,0,.32,0,y,14),...S?[]:[t(.05,.12,0,.37,0,"#ea323c",6),n(.045,0,.5,0,w,0,h)],...[0,1,2,3,4].map(T=>n(.07,Math.cos(T*1.26)*.3,.38,Math.sin(T*1.26)*.3,"#ea323c",0)),...S?[e(.3,.3,.3,.1,0,.1,M,{r:[0,45,0]}),e(.35,.3,.35,.15,0,.15,M,{r:[0,45,0]})].slice(0,0):[]],"forno-legna":x=>[e(1.8,.8,1.4,0,0,0,U(x,.2)),t(.78,.7,0,.8,0,x,14,.7,void 0),n(.8,0,.8,0,x,1,{uno:!0}),e(.6,.55,.3,0,.8,.7,m),e(.46,.4,.1,0,.84,.82,"#ed7614",h),e(.24,.2,.1,0,.86,.85,w,h),t(.16,.9,.3,1.4,-.4,d,8,.2),e(.3,.06,.4,-.5,.8,.9,p)].slice(0,7).concat([t(.16,.9,.3,1.1,-.4,d,8,.2)]),"macchina-caffe":(x,D,S)=>[e(.8,.14,.7,0,0,0,d),e(.8,.6,.5,0,.14,-.1,x),e(.8,.12,.62,0,.74,-.06,U(x)),e(.1,.28,.1,0,.3,.26,d),e(.2,.08,.2,0,.18,.26,d),t(.1,.12,0,0,.3,M,8,.12),...S?[e(.08,.08,.08,.25,.52,.17,"#5ac54f",h),e(.05,.16,.05,0,.18,.26,"#6b3a1e")]:[],n(.07,-.25,.5,.17,m)],"barbecue-carbone":x=>[...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([D,S])=>t(.05,.62,D*.8,0,S*.32,d,6,.07)),t(.5,.44,0,.62,0,x,14,.58),t(.62,.03,0,1,0,d,14),e(1,.1,.8,0,.96,0,"#ed7614",h),e(.8,.05,.5,0,1,0,w,h),e(1.4,.06,.1,0,1.04,-.3,d),e(1.4,.06,.1,0,1.04,.3,d),e(.6,.1,.1,.95,.9,0,p),n(.07,1,.93,0,m)].slice(0,5).concat([e(1.2,.04,.5,0,.96,0,"#ed7614",h),e(.7,.05,.3,0,1,0,w,h)]),"carretto-gelati":x=>[e(1.6,.9,.9,0,.3,0,x),e(1.7,.1,1,0,1.2,0,M),...[-.7,-.35,0,.35,.7].map((D,S)=>i(.2,.3,D,1.3,.1,["#ea323c","#f68187",M,"#5ac54f","#ffa214"][S],5)),...[-.7,-.35,0,.35,.7].map((D,S)=>n(.17,D,1.64,.1,["#ea323c","#f68187",M,"#5ac54f","#ffa214"][S],0)),t(.28,.14,-.7,0,.2,m,10),t(.28,.14,.7,0,.2,m,10),e(.1,.9,.1,-.78,1.3,-.4,p),e(.1,.9,.1,.78,1.3,-.4,p),e(1.8,.12,1.1,0,2.2,-.05,"#ea323c"),e(1.8,.07,.4,0,2.2,.5,M).slice(0,0)].filter(D=>D.length),"bancone-bar":x=>[e(2.8,1.1,.8,0,0,-.1,x),s(3,.14,1,0,1.1,0,A(x,.12)),e(2.5,.12,.2,0,.22,.4,p),...[-.9,0,.9].map(D=>e(.6,.6,.04,D,.35,.31,U(x))),t(.1,.24,-1,1.24,0,"#5ac54f",8,.12),t(.1,.2,-.8,1.24,.1,"#ea323c",8,.1),t(.12,.16,.8,1.24,0,M,8,.14)],"tavola-apparecchiata":x=>[s(1.9,.14,1.8,0,.7,0,x),...l(1.9,1.8,.7,p,.2),e(1.5,.03,1.2,0,.84,0,M),t(.28,.05,-.5,.87,.3,y,12),t(.28,.05,.5,.87,.3,y,12),t(.28,.05,-.5,.87,-.3,y,12),t(.28,.05,.5,.87,-.3,y,12),t(.1,.3,0,.87,0,"#8fe3ff",8,.12),n(.09,.25,.9,0,"#ea323c",0)],"carrello-dolci":(x,D,S)=>[...[-.8,.8].map(T=>t(.2,.1,T,0,.3,m,10)),e(1.7,.14,.7,0,.24,0,x),e(1.7,.14,.7,0,.74,0,x),e(.1,1.2,.1,-.8,.24,-.25,d),e(.1,1.2,.1,.8,.24,-.25,d),e(.7,.1,.1,.45,1.1,-.28,d),...S?[t(.5,.04,-.4,.88,.05,y,10),t(.34,.2,-.4,.92,.05,"#f68187",12),n(.07,-.4,1.14,.05,"#ea323c",0),t(.3,.1,.4,.38,0,M,10,.4),n(.13,.4,.5,0,"#ffa214",0)]:[t(.4,.25,-.4,.88,.05,"#8fe3ff",12,.44,{uno:!0}),t(.3,.1,-.4,.88,.05,"#f68187",12),t(.3,.1,.4,.38,0,M,10,.4),n(.13,.4,.5,0,"#ffa214",0)]],"barattolo-biscotti":(x,D,S)=>[t(.34,.5,0,0,0,x,12,.4),t(.3,.06,0,.1,0,A(x,.15),12,.42),...S?[t(.42,.1,.35,.5,.2,A(x,.1),12,.42),n(.1,0,.56,0,"#8a4836",0),n(.1,.12,.5,.1,"#c64524",0)]:[t(.4,.1,0,.5,0,A(x,.1),12,.42),n(.07,0,.64,0,p,0)]],cappa:x=>[e(1.8,.1,.6,0,150*o,.3,x),i(1,.7,0,160*o,.3,x,4,I(0,45,0)),e(.5,.74,.3,0,150*o+.5,.15,d),e(1.5,.05,.1,0,150*o-0,.55,m),...[-.5,.5].map(D=>k(D,150*o+.02,.05))],vasca:(x,D,S)=>[s(2.9,.62,1.7,0,0,0,x,[.22,.22,.22,.22]),...[-1.1,1.1].flatMap(T=>[t(.1,.12,T,0,.6,d,6),t(.1,.12,T,0,-.6,d,6)]),e(2.56,.04,1.38,0,.6,0,S?b:U(v,.1),{uno:!0,netta:!0}),t(.07,.4,1.2,.62,-.7,d,8),e(.1,.1,.3,1.2,1,-.62,d),...S?[n(.14,-.5,.7,.2,y,0),n(.11,-.3,.72,-.2,y,0),n(.1,.4,.7,.3,y,0)]:[]],doccia:(x,D,S)=>[e(.92,.12,.92,0,0,0,v),e(.1,2.3,.1,-.42,.12,-.42,d),e(.1,2.3,.1,.42,.12,-.42,d),e(.1,2.3,.1,-.42,.12,.42,d),e(.1,2.3,.1,.42,.12,.42,d),e(.76,2,.04,0,.18,.42,"#8fe3ff",{uno:!0}),e(.04,2,.76,-.42,.18,0,"#8fe3ff",{uno:!0}),e(.08,.08,.56,0,2.05,-.1,d),t(.22,.06,0,2,.14,d,10),...S?[...[-.12,0,.12].map(T=>e(.04,1.4,.04,T,.6,.14,"#8fe3ff",h))]:[],e(.05,.16,.12,.3,1.2,-.34,d)],lavandino:(x,D,S)=>[e(.9,.7,.74,0,0,0,x),s(.96,.14,.8,0,.7,0,y),e(.6,.04,.46,0,.84,.02,b,{uno:!0,netta:!0}),t(.05,.36,0,.84,-.24,d,8),e(.07,.06,.24,0,1.14,-.14,d),e(.9,.26,.1,0,.84,-.32,x),...S?[e(.05,.22,.05,0,.9,-.04,"#8fe3ff",h)]:[],...z(.74,.5,.1,.3,x,0)],water:(x,D,S)=>[e(.64,.96,.26,0,0,-.34,x),s(.68,.14,.3,0,.9,-.34,A(x,.1)),t(.28,.3,0,0,.08,x,12,.34),s(.64,.08,.7,0,.3,.1,y,[.04,.04,.04,.04]),...S?[s(.7,.08,.6,0,.56,-.2,A(x,.1),[.04,.04,.04,.04])].slice(0,0).concat([e(.62,.5,.1,0,.3,-.24,A(x,.1)),e(.5,.04,.5,0,.3,.1,b,{uno:!0,netta:!0})]):[s(.66,.1,.66,0,.38,.1,A(x,.1),[.05,.05,.05,.05])],n(.06,0,.98,-.34,d)],"mobiletto-bagno":(x,D,S)=>[e(.84,1,.56,0,0,0,x),s(.9,.1,.62,0,1,0,A(x,.14)),...Q(.72,.78,.1,.28,x,S),...S?[e(.6,.05,.3,0,.5,.1,P),t(.08,.2,-.15,.55,.1,"#8fe3ff",6),e(.12,.2,.1,.15,.55,.1,"#f68187")]:[],t(.1,.1,0,1.1,0,"#5ac54f",6,.14)],"cesto-biancheria":(x,D,S)=>[t(.42,.78,0,0,0,x,12,.48),u(.6,.03,.5,.45,U(x),0),u(.6,.03,.3,.45,U(x),0),t(.5,.09,0,.78,0,A(x,.12),12),...S?[n(.22,0,.9,0,"#f68187",0),e(.3,.14,.3,.1,.88,.05,"#0098dc")]:[t(.46,.1,0,.86,0,A(x,.08),12,.5)]],lavatrice:(x,D,S)=>[e(.9,.98,.76,0,0,0,x),e(.94,.06,.8,0,.98,0,A(x,.1)),t(.3,.06,0,.45,.37,d,14,void 0,I(90,0,0)),t(.24,.05,0,.45,.42,S?"#8fe3ff":m,14,void 0,{r:[90,0,0],uno:!0}),...S?[n(.12,.04,.4,.45,"#f68187",0,{uno:!0})]:[],k(-.3,.88,.38),e(.12,.08,.05,.28,.88,.39,S?"#5ac54f":U(x),S?h:void 0)],bilancia:x=>[s(.8,.14,.7,0,0,0,x,[.06,.06,.06,.06]),e(.32,.04,.12,0,.14,-.1,m),e(.1,.05,.1,0,.15,-.1,"#5ac54f",h),t(.07,.04,-.2,.14,.15,v,8),t(.07,.04,.2,.14,.15,v,8)],paperella:x=>[n(.34,0,.3,0,x,1),n(.22,0,.58,.24,x,1),e(.2,.08,.2,0,.5,.48,"#ed7614"),n(.04,-.1,.64,.4,m,0),n(.04,.1,.64,.4,m,0),i(.16,.26,0,.3,-.34,A(x,.1),5,I(-60,0,0))],"porta-asciugamani":x=>[t(.3,.08,0,0,0,d,10),t(.05,1.4,0,.08,0,d,6),u(.9,.04,1.3,0,d),u(.9,.04,.9,0,d),t(.06,.1,0,1.4,0,d,6),e(.7,.55,.12,-.05,.78,.05,"#f68187"),e(.6,.38,.12,.05,.96,-.05,"#0098dc",{r:[0,0,0]})].slice(0,5).concat([e(.7,.4,.14,-.05,.92,.06,"#f68187"),e(.7,.4,.14,.05,1.3-.4+0,-.06,"#0098dc")].map(D=>D)),"secchio-mocio":x=>[t(.34,.5,0,0,.1,x,12,.42),t(.3,.04,0,.5,.1,b,12,void 0,{uno:!0}),u(.5,.025,.5,.1,d),t(.05,1.2,-.3,0,-.3,P,6),t(.2,.16,-.3,0,-.3,M,8,.26)].slice(0,4).concat([t(.05,1.2,-.3,0,-.3,P,6),t(.2,.2,-.3,0,-.3,M,8,.26)]),"botte-sauna":(x,D,S)=>[t(.92,1.5,0,0,0,x,14,.92),t(.95,.06,0,.3,0,d,14),t(.95,.06,0,1.1,0,d,14),t(.9,.12,0,1.5,0,A(x,.14),14,.7),i(.3,.3,0,1.62,0,A(x,.2),14).slice(0,5),e(.6,1,.1,0,0,.87,A(x,.1)).slice(0,5),...S?[e(.6,1.05,.04,0,.1,.84,m),e(.1,1.05,.3,-.35,.1,.96,A(x,.1)),e(.7,.2,.1,0,.5,.82,"#ed7614",h)]:[e(.7,1.05,.06,0,.1,.86,A(x,.1)),n(.05,.26,.6,.92,d),ae(0,.9,.9)]].filter(T=>Array.isArray(T)&&typeof T[0]=="string"),"specchio-bagno":x=>[e(1.06,1.12,.07,0,110*o-0,.04,x),e(.9,.96,.03,0,110*o+.08,.08,"#8fe3ff",{netta:!0}),e(.4,.06,.06,0,110*o+.15,.1,y,{netta:!0})],"armadietto-bagno":(x,D,S)=>[e(.9,.86,.34,0,110*o,.17,x),...S?[e(.76,.72,.04,0,110*o+.07,.35,m),e(.1,.8,.22,-.4,110*o+.03,.44,A(x,.1)),e(.6,.05,.2,.05,110*o+.4,.4,P),t(.07,.18,0,110*o+.45,.4,"#f68187",6)]:[e(.8,.74,.07,0,110*o+.06,.37,A(x,.1)),n(.05,.3,110*o+.45,.42,d)]],asciugamani:x=>[u(.8,.04,180*o-.1,.1,d),e(.72,.5,.1,0,180*o-.58,.12,x),e(.72,.1,.12,0,180*o-.6,.14,A(x,.25)),e(.6,.4,.1,0,180*o-.5,.2,"#0098dc")].slice(0,3),armadio:(x,D,S)=>[e(1.9,2.3,.76,0,0,0,x),s(2,.12,.84,0,2.3,0,A(x,.1)),...S?[e(1.76,2.1,.04,0,.1,.39,m),u(1.6,.03,1.9,.2,d),...[-.5,-.2,.1,.4].map((T,V)=>e(.1,.9,.3,T,1,.2,["#ea323c","#0098dc","#5ac54f","#ffa214"][V])),e(.9,.08,.3,-.45,.4,.2,P),e(.1,2.2,.26,-.9,.05,.52,A(x,.1)),e(.1,2.2,.26,.9,.05,.52,A(x,.1))]:[e(.9,2.1,.1,-.46,.1,.4,A(x,.08)),e(.9,2.1,.1,.46,.1,.4,A(x,.08)),n(.05,-.1,1.15,.47,p),n(.05,.1,1.15,.47,p)],...[-.8,.8].map(T=>e(.14,.1,.14,T,-0,.3,p).slice(0,0))].filter(T=>T.length),cassettiera:(x,D,S)=>[...l(1.7,.6,.14,p,.1),e(1.9,.96,.76,0,.14,0,x),s(2,.12,.84,0,1.1,0,A(x,.1)),...[0,1].flatMap(T=>[-.47,.47].flatMap(V=>(T===1&&V<0?R(.84,.4,.2+T*.46,.38,x,S):R(.84,.4,.2+T*.46,.38,x,0)).map(J=>[J[0],J[1],[J[2][0]+V,J[2][1],J[2][2]],J[3],J[4]])))],"letto-castello":x=>[...[-.9,.9].flatMap(D=>[-1.35,1.35].map(S=>e(.16,2.6,.16,D,0,S,p))),e(1.8,.14,2.6,0,.35,0,x),e(1.7,.16,2.4,0,.49,0,M),e(1.8,.14,2.6,0,1.45,0,x),e(1.7,.16,2.4,0,1.59,0,"#0098dc"),e(.6,.14,.4,0,.65,-.9,y),e(.6,.14,.4,0,1.75,-.9,y),e(.1,.5,2.6,-.9,1.74,0,p),e(.1,.5,2.6,.9,1.74,0,p),...[.4,.7,1,1.3].map(D=>e(.5,.08,.1,.9,D,1.4,P)),e(1.8,.12,.1,0,2.5,-1.35,x).slice(0,5)].filter(D=>D.length),"letto-singolo":x=>[...[-.85,.85].flatMap(D=>[-1.35,1.35].map(S=>e(.16,.3,.16,D,0,S,p))),s(1.8,.3,2.9,0,.2,0,p,[.08,.08,.08,.08]),s(1.66,.3,2.6,0,.5,.1,M,[.14,.14,.14,.14]),s(1.7,.2,1.6,0,.62,.55,x,[.08,.08,.08,.08]),e(1.8,.8,.14,0,.1,-1.4,p),...g(1,.22,.6,0,.84,-.85,y)],culla:x=>[e(1.7,.1,2.2,0,.18,0,p),e(.16,.9,.16,-.75,0,-.95,p),e(.16,.9,.16,.75,0,-.95,p),e(.16,.7,.16,-.75,0,.95,p),e(.16,.7,.16,.75,0,.95,p),...[-.4,0,.4].flatMap(D=>[e(.1,.5,.1,-.75,.3,D,x),e(.1,.5,.1,.75,.3,D,x)]),e(1.5,.2,2.1,0,.28,0,"#f68187"),e(1.5,.16,1,0,.48,.5,"#8fe3ff"),n(.2,0,.62,-.5,M,1),e(1.8,.14,.14,0,0,0,d).slice(0,5)].filter(D=>D.length),toeletta:x=>[e(1.9,.9,.8,0,0,0,x),s(2,.12,.88,0,.9,0,A(x,.12)),e(1,.8,.1,-.4,1,-.3,d),e(.84,.64,.04,-.4,1.08,-.24,"#8fe3ff",{netta:!0}),...[.1,.5].map(D=>e(.7,.3,.06,.5,D+.1,.4,A(x,.1))),n(.04,.5,.35,.45,p),n(.04,.5,.75,.45,p),t(.08,.2,.5,1.02,.1,"#f68187",6),t(.07,.16,.75,1.02,.2,"#ffa214",6),e(.3,.1,.2,0,1.02,.15,"#ea323c")],"specchio-pieno":x=>[t(.4,.1,0,0,0,p,8,.46).slice(0,5),e(.84,.1,.4,0,0,0,p),e(.86,1.9,.12,0,.08,0,x,I(-4,0,0)),e(.68,1.7,.04,0,.18,.08,"#8fe3ff",{netta:!0,r:[-4,0,0]}),e(.14,1.2,.1,0,0,-.3,p,I(14,0,0))].filter(D=>D.length),baule:(x,D,S)=>[e(1.8,.6,.8,0,0,0,x),e(1.84,.1,.84,0,.18,0,p),e(1.84,.1,.84,0,.5,0,p),e(.14,.62,.84,-.8,0,0,p),e(.14,.62,.84,.8,0,0,p),...S?[s(1.8,.18,.5,0,.74,-.34,A(x,.1),[.06,.06,.06,.06]),e(1.6,.04,.62,0,.6,.02,"#ffa214"),n(.14,.2,.68,.05,w,0,h),n(.1,-.4,.66,0,"#ea323c",0)]:[s(1.8,.2,.84,0,.6,0,A(x,.1),[.1,.1,.06,.06]),e(.16,.2,.06,0,.5,.42,w)]],attaccapanni:x=>[t(.34,.08,0,0,0,p,10),t(.06,2,0,.08,0,x,8),...[0,1,2,3].map(D=>e(.5,.07,.07,Math.cos(D*1.57+.5)*.22,1.85-D%2*.2,Math.sin(D*1.57+.5)*.22,x,I(0,-(D*90+29),0))),e(.5,.6,.14,.25,1.15,.1,"#0098dc"),t(.3,.1,0,2.04,0,"#ea323c",10,.26).slice(0,5)].filter(D=>D.length),scarpiera:(x,D,S)=>[e(1.9,.9,.7,0,0,0,x),s(2,.1,.78,0,.9,0,A(x,.1)),...S?[e(1.76,.7,.04,0,.1,.36,m),...[.2,.55].flatMap(T=>[-.6,0,.6].map((V,J)=>e(.34,.14,.2,V,T,.15,["#ea323c","#0098dc","#ffa214"][J]))),e(1.8,.04,.5,0,.45,.1,P),e(.1,.8,.26,-.9,.05,.46,A(x,.1)),e(.1,.8,.26,.9,.05,.46,A(x,.1))]:[e(.9,.74,.08,-.46,.08,.37,A(x,.08)),e(.9,.74,.08,.46,.08,.37,A(x,.08)),n(.05,-.1,.45,.42,p),n(.05,.1,.45,.42,p)]],"panca-letto":x=>[...l(2.7,.7,.3,p,.14),...g(2.8,.26,.9,0,.55,0,x),s(2.9,.12,.92,0,.3,0,p,[.05,.05,.05,.05]),e(.9,.04,.5,.6,.55,0,A(x,.2))],"peluche-gigante":x=>[n(.5,0,.5,0,x,1),n(.4,0,1.15,0,x,1),n(.17,-.3,1.5,0,x,1),n(.17,.3,1.5,0,x,1),n(.16,0,1.08,.36,A(x,.3),1),n(.06,-.14,1.22,.34,m,0),n(.06,.14,1.22,.34,m,0),n(.07,0,1.12,.5,m,0),n(.2,-.45,.6,.15,x,1),n(.2,.45,.6,.15,x,1),n(.18,-.3,.2,.2,x,1),n(.18,.3,.2,.2,x,1)],orsetto:x=>[n(.26,0,.26,0,x,1),n(.2,0,.62,.02,x,1),n(.08,-.14,.78,0,x,0),n(.08,.14,.78,0,x,0),n(.07,0,.6,.18,A(x,.3),0),n(.035,-.07,.66,.18,m,0),n(.035,.07,.66,.18,m,0),n(.1,-.24,.18,.16,x,0),n(.1,.24,.18,.16,x,0),e(.3,.1,.06,0,.42,.18,"#ea323c")],valigia:(x,D,S)=>[e(.84,.5,.36,0,0,S?-.2:0,x),e(.88,.06,.4,0,.12,S?-.2:0,A(x,.15)),e(.88,.06,.4,0,.36,S?-.2:0,A(x,.15)),...S?[e(.84,.1,.4,0,.5,-.2,x),e(.76,.3,.1,0,.5,.2,x,I(-80,0,0)).slice(0,0),e(.8,.5,.1,0,.04,.2,x).slice(0,0),e(.7,.06,.3,0,.5,0,"#f68187"),e(.3,.1,.3,.1,.54,.05,"#0098dc")].filter(T=>T.length):[e(.3,.1,.12,0,.5,0,d)],e(.12,.1,.1,-.36,0,.2,m).slice(0,0)].filter(T=>T.length),"amaca-a-stelo":x=>[t(.1,1.3,-1.35,0,0,p,8,.14),t(.1,1.3,1.35,0,0,p,8,.14),t(.2,.08,-1.35,0,0,p,8),t(.2,.08,1.35,0,0,p,8),s(2.1,.22,.9,0,.62,0,x,[.11,.11,.11,.11]),s(2,.14,.7,0,.8,0,A(x,.2),[.07,.07,.07,.07]),e(1.6,.05,.05,-.8,0,0,M).slice(0,0),...g(.6,.2,.5,-.6,.98,0,"#f68187"),u(2.7,.04,1.2,0,d),n(.1,-1.35,1.34,0,d,0)].filter(D=>D.length),"tenda-indiana":x=>[i(1.1,1.9,0,0,0,x,4,I(0,45,0)),e(.08,1.9,.08,-.3,0,0,p,I(0,0,0)).slice(0,0),i(.8,1.3,0,0,0,A(x,.2),4,I(0,45,0)).slice(0,0),e(.5,.9,.04,0,0,.64,m,{r:[0,0,0]}),e(1.2,.08,1.2,0,0,0,"#f68187").slice(0,0),n(.12,0,1.92,0,"#ea323c",0),e(.28,.3,.28,-.4,0,.2,"#ffa214").slice(0,0)].filter(D=>D.length),paravento:x=>[...[-.66,0,.66].map((D,S)=>e(.6,1.7,.1,D,.1,S===1?0:(S===0?.12:-0)*0+0,[x,A(x,.14),x][S],I(0,S===0?24:S===2?-24:0,0))),...[-.66,0,.66].map((D,S)=>e(.5,1.3,.04,D,.3,.07,["#f68187","#ffa214","#5ac54f"][S],I(0,S===0?24:S===2?-24:0,0))),e(1.9,.1,.14,0,0,0,p).slice(0,0)].filter(D=>D.length),"sacco-a-pelo":x=>[s(1,.26,2.2,0,0,0,x,[.13,.13,.13,.13]),s(.9,.18,.6,0,.14,-.8,y,[.09,.09,.09,.09]),e(.06,.04,1.4,0,.27,.35,A(x,.3))],"cuccia-gatto":x=>[t(.5,.16,0,0,0,x,14,.56),t(.4,.06,0,.14,0,"#f68187",14),n(.2,0,.26,0,"#ffa214",1),n(.1,0,.2,.2,"#ffa214",0),i(.06,.1,-.1,.34,0,"#ffa214",3),i(.06,.1,.1,.34,0,"#ffa214",3)],"poltrona-lettura":x=>[...l(.9,.9,.3,p,.12),e(1.1,.2,1,0,.3,0,U(x,.2)),...g(.9,.24,.8,0,.74,.08,x),e(1.1,1,.2,0,.3,-.4,x),s(.9,.5,.2,0,.9,-.38,A(x,.1),[.18,.18,.05,.05]),e(.18,.4,.8,-.5,.3,.05,x),e(.18,.4,.8,.5,.3,.05,x)].filter(D=>D.length).map(D=>D),"comodino-alto":(x,D,S)=>[...l(.7,.6,.2,p,.1),e(.84,.76,.66,0,.2,0,x),s(.92,.12,.74,0,.96,0,A(x,.12)),...R(.7,.28,.6,.34,x,S),...R(.7,.28,.28,.34,x,0),t(.1,.1,.2,1.08,0,"#f68187",6,.14)].slice(0,20),"abat-jour":x=>[t(.26,.08,0,0,0,d,10),t(.06,.4,0,.08,0,d,6),t(.2,.36,0,.5,0,c(x,a.luce,.7),12,.34,h)],"applique-ottone":x=>[e(.3,.3,.1,0,130*o,.05,d),t(.05,.24,0,130*o+.15,.2,d,6,void 0,I(90,0,0)).slice(0,5),t(.18,.36,0,130*o+.1,.3,c(x,a.luce,.7),10,.28,h)],"lampadario-stelo":x=>[t(.34,.1,0,0,0,d,10),t(.06,2.2,0,.1,0,d,6),t(.5,.5,0,2.2,0,c(x,a.luce,.7),12,.34,h),i(.5,.1,0,2.7,0,d,12)].slice(0,4),candele:x=>[t(.4,.06,0,0,0,p,10),...[[-.2,.1,.3],[.15,-.1,.4],[.05,.2,.22]].flatMap(([D,S,T],V)=>[t(.09,T,D,.06,S,[M,"#f68187",y][V],8),i(.05,.1,D,.06+T,S,w,4,h)])],candelabro:x=>[t(.3,.08,0,0,0,x,10),t(.06,.8,0,.08,0,x,6),u(.9,.05,.9,0,x),...[-.4,0,.4].flatMap(D=>[t(.1,.1,D,.9,0,x,8),t(.07,.18,D,1,0,M,8),i(.05,.1,D,1.18,0,w,4,h)])],"lampada-tavolo":x=>[t(.3,.1,0,0,0,x,10),t(.05,.28,0,.1,0,d,6),e(.06,.06,.34,0,.36,.1,d,I(-30,0,0)),t(.18,.2,0,.5,.3,c(x,a.luce,.6),10,.1,h)].slice(0,3).concat([t(.1,.34,0,.36,0,d,6,void 0,I(0,0,0)).slice(0,0),t(.18,.24,0,.36,.1,c(x,a.luce,.6),10,.1,h)]).filter(D=>D.length),faretto:x=>[...[0,1,2].map(D=>e(.08,1.6,.08,Math.cos(D*2.09)*.28,0,Math.sin(D*2.09)*.28,d,I(Math.sin(D*2.09)*-9,0,Math.cos(D*2.09)*9))),t(.06,.2,0,1.5,0,d,6),t(.26,.4,0,1.55,0,x,10,.2),t(.2,.06,0,1.58,0,w,10,void 0,h).slice(0,5)].filter(D=>D.length),"neon-muro":x=>[e(1.9,.14,.08,0,150*o+.3,.04,d),e(1.8,.08,.06,0,150*o+.33,.1,c(x,"#f68187",.4),h),e(.08,.5,.06,-.7,150*o,.1,c(x,"#f68187",.4),h),e(.08,.5,.06,0,150*o,.1,c(x,"#8fe3ff",.4),h),e(.08,.5,.06,.7,150*o,.1,c(x,"#f68187",.4),h)],"catena-luci":x=>[e(1.9,.04,.04,0,214*o-.1,.03,d),...Array.from({length:6},(D,S)=>n(.1,-.9+S*.36,214*o-.22-S%2*.1,.07,[w,"#f68187","#8fe3ff"][S%3],0,h))],"lampada-sale":x=>[e(.5,.1,.4,0,0,0,P),e(.4,.46,.34,0,.1,0,c(x,"#f68187",.4),h),e(.3,.1,.24,0,.54,0,c(x,"#f68187",.4),h)],"lampada-lava":x=>[t(.26,.12,0,0,0,d,10,.34),t(.16,.5,0,.12,0,c(x,"#8fe3ff",.2),10,.26,h),n(.09,0,.35,0,"#f68187",0,h),n(.06,.04,.5,0,"#ffa214",0,h),t(.18,.1,0,.62,0,d,10,.1)],"sfera-luminosa":x=>[t(.3,.1,0,0,0,d,10),n(.36,0,.5,0,c(x,"#8fe3ff",.4),1,h),n(.2,0,.5,0,w,0,h)].slice(0,2),"lampada-fungo":x=>[t(.12,.34,0,0,0,M,8,.16),i(.5,.22,0,.3,0,x,12).slice(0,5),t(.42,.26,0,.34,0,c(x,w,.2),12,.2,h),n(.06,.2,.52,.2,y,0,h)].filter(D=>D.length).slice(0,2).concat([t(.46,.22,0,.34,0,c(x,w,.3),12,.2,h),n(.06,.2,.54,.2,y,0),n(.05,-.15,.52,-.2,y,0)]),"lampada-luna":x=>[t(.3,.1,0,0,0,d,10),t(.05,1,0,.1,0,d,6),n(.5,0,1.1,0,c(x,w,.5),1,h),n(.12,-.14,1.2,.4,A(x,.3),0),n(.09,.2,1,.4,A(x,.3),0)],braciere:x=>[...[0,1,2].map(D=>e(.08,.5,.08,Math.cos(D*2.09)*.3,0,Math.sin(D*2.09)*.3,d)),t(.5,.26,0,.5,0,x,12,.34),t(.4,.06,0,.76,0,"#ed7614",12,void 0,h),i(.2,.3,0,.8,0,w,5,h),i(.12,.2,.18,.8,.1,"#ed7614",4,h)],"lampada-arco":x=>[t(.7,.14,-.4,0,-.4,v,12,.6).slice(0,5),e(.8,.14,.8,-.5,0,-.5,v),t(.06,2,-.5,.14,-.5,d,6),e(.08,.08,1.4,-.5,2.1,.1,d),e(.08,.08,.7,-.5,1.95,-.45,d).slice(0,5),t(.34,.4,-.5,2,.78,c(x,w,.6),12,.2,h)].filter(D=>D.length),"lampione-giardino":x=>[t(.3,.12,0,0,0,x,8,.4),t(.07,2,0,.12,0,x,8),e(.46,.5,.46,0,2.1,0,w,h),i(.5,.26,0,2.6,0,x,4,I(0,45,0)),e(.52,.1,.52,0,2,0,x)],"stella-muro":x=>[i(.5,.2,0,170*o+.35,.1,c(x,w,.6),5,{r:[90,0,0],...h})].concat([e(.5,.5,.1,0,170*o,.06,c(x,w,.6),{r:[0,0,0],...h}),e(.5,.5,.1,0,170*o,.06,c(x,w,.6),{r:[0,0,45],...h})]).slice(1),"lanterna-carta":x=>[t(.3,.06,0,0,0,p,10,.2),t(.38,.8,0,.06,0,c(x,w,.5),12,.38,h),t(.3,.06,0,.86,0,p,10,.2),...[.3,.6].map(D=>t(.4,.04,0,D,0,x,12,.4)),i(.06,.2,0,.92,0,"#ea323c",4)].slice(0,5),"lampada-papavero":x=>[t(.3,.1,0,0,0,d,10),t(.05,1.4,0,.1,0,"#5ac54f",6),e(.4,.04,.14,.2,.5,0,"#5ac54f",I(0,0,30)),...[0,1,2,3,4].map(D=>e(.34,.34,.06,Math.cos(D*1.26)*.22,1.7+Math.sin(D*1.26)*.22-.17,0,x,h)),n(.14,0,1.54,0,m,0)].slice(0,5),mappamondo:(x,D,S)=>[t(.3,.08,0,0,0,p,10),t(.05,.32,0,.08,0,p,6),t(.04,.1,0,.9,0,d,6),n(.44,0,.7,0,"#0098dc",1,I(0,S*90,0)),...[[-.2,.9,.2,.2],[.3,.6,.15,.25],[.1,.55,-.3,.2]].map(([T,V,J,_],E)=>n(_*.7,T,V+.1,J+.28,["#5ac54f","#33984b","#edab50"][E],0)).map((T,V)=>{let J=S*(Math.PI/2),_=T[2][0],E=T[2][2];return[T[0],T[1],[_*Math.cos(J)+E*Math.sin(J),T[2][1],-_*Math.sin(J)+E*Math.cos(J)],T[3],T[4]]})].filter(T=>T.length),lavagna:x=>[e(.14,1.4,.14,-.9,0,-.2,p),e(.14,1.4,.14,.9,0,-.2,p),e(.14,.14,.8,-.9,0,0,p).slice(0,0),e(2,1.2,.12,0,.8,-.1,x),e(1.76,1,.04,0,.9,-.03,"#1e6f50",{netta:!0}),e(1.9,.1,.14,0,.7,.02,p),e(.3,.05,.1,-.5,.8,.04,y),e(.5,.05,.03,.1,1.3,-0,y),e(.8,.05,.03,0,1.5,-0,y),e(1.7,.1,.2,0,0,0,p)].filter(D=>D.length),scaffale:x=>[e(.14,2.2,.76,-.93,0,0,x),e(.14,2.2,.76,.93,0,0,x),e(1.8,2.2,.08,0,0,-.34,U(x,.2)),...[0,.7,1.4,2.08].map(D=>e(1.8,.14,.76,0,D,0,x)),...[.14,.84,1.54].flatMap((D,S)=>S===0?[e(.3,.4,.34,-.5,D,0,P),e(.3,.4,.34,.1,D,0,"#ea323c"),t(.16,.34,.6,D,0,"#5ac54f",8,.18)]:S===1?[e(.2,.46,.34,-.6,D,0,"#0098dc"),e(.2,.4,.34,-.38,D,0,"#ffa214"),e(.2,.46,.34,-.16,D,0,"#ea323c"),n(.2,.5,D+.2,0,b,1)]:[e(.7,.3,.34,-.3,D,0,M),t(.15,.4,.5,D,0,"#f68187",8,.18)])],cestino:x=>[t(.3,.46,0,0,0,x,12,.38),t(.4,.06,0,.44,0,A(x,.14),12,.38).slice(0,5),u(.5,.025,.2,.34,U(x),0),e(.2,.16,.2,0,.46,0,M,I(20,30,10))].filter(D=>D.length),"scrivania-piccola":x=>[s(1.9,.14,.9,0,.8,0,x),...l(1.9,.9,.8,p,.15),e(.7,.4,.7,.6,.36,0,A(x,.1)),...R(.6,.18,.5,.34,x,0).map(D=>[D[0],D[1],[D[2][0]+.6,D[2][1],D[2][2]],D[3],D[4]]).slice(0,0),e(.5,.04,.36,-.4,.94,0,"#0098dc"),t(.07,.2,.6,.94,-.2,"#ea323c",6),e(.3,.04,.22,-.4,.98,0,M)].filter(D=>D.length),"sedia-studio":x=>[...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([D,S])=>t(.05,.5,D*.28,0,S*.28,d,6,.07)),s(.76,.14,.72,0,.46,.04,x),e(.7,.5,.12,0,.6,-.3,x),u(.7,.08,1.12,-.3,A(x,.14))],leggio:x=>[t(.3,.1,0,0,0,p,8),t(.07,1.2,0,.1,0,x,6),e(.7,.06,.5,0,1.28,0,x,I(-25,0,0)),e(.7,.08,.1,0,1.2,.2,p),e(.56,.04,.4,0,1.35,.02,M,I(-25,0,0)),e(.04,.04,.4,0,1.38,0,"#ea323c",I(-25,0,0))],"cavalletto-pittore":x=>[e(.1,1.9,.1,0,0,-.1,x,I(8,0,0)),e(.1,1.6,.1,-.4,0,.2,x,I(-6,0,-10)),e(.1,1.6,.1,.4,0,.2,x,I(-6,0,10)),e(.8,.1,.12,0,.7,.18,x),e(.84,.9,.06,0,.8,.05,M,I(-6,0,0)),e(.5,.4,.04,0,1.1,.1,"#0098dc",I(-6,0,0)),n(.16,-.12,1,.12,"#ffa214",0),n(.1,.18,1.25,.12,"#5ac54f",0)],"tavolo-disegno":x=>[s(1.9,.14,1.6,0,.9,0,x,[.07,.07,.07,.07],I(-10,0,0)),e(.1,1,.1,-.8,0,-.5,d),e(.1,.8,.1,.8,0,-.5,d).slice(0,0),e(.1,.7,.1,-.8,0,.6,d),e(.1,.7,.1,.8,0,.6,d),e(.1,1,.1,.8,0,-.5,d),e(1.4,.04,1,0,1,0,M,I(-10,0,0)),e(1.6,.1,.1,0,.5,.55,p),t(.06,.4,.7,1,-.5,"#ea323c",6),e(.5,.04,.3,-.4,1.06,.1,"#0098dc",I(-10,0,0))].filter(D=>D.length).map(D=>D[0]==="l"?[D[0],D[1],D[2],D[3],I(-10,0,0)]:D),microscopio:(x,D,S)=>[s(.7,.1,.6,0,0,0,d,[.05,.05,.05,.05]),e(.14,.7,.14,0,.1,-.2,x),t(.1,.5,0,.5,0,x,8,.1,I(-20,0,0)),t(.08,.2,0,.7,.05,d,8),e(.4,.04,.3,0,.3,.1,d),n(.07,0,.18,.1,S?w:m,0,S?h:void 0)].filter(T=>T.length).map((T,V)=>V===2?e(.14,.5,.14,0,.3,0,x,I(-25,0,0)):T),"pila-libri":x=>[e(.84,.18,.62,0,0,0,"#ea323c",I(0,4,0)),e(.74,.16,.56,.02,.18,0,"#0098dc",I(0,-6,0)),e(.8,.2,.58,-.02,.34,0,"#ffa214",I(0,8,0)),e(.64,.14,.5,0,.54,0,"#5ac54f",I(0,-3,0)),e(.5,.06,.04,0,.68,0,M,{netta:!0}).slice(0,0)].filter(D=>D.length),schedario:(x,D,S)=>[e(.84,1.4,.7,0,0,0,x),...[0,1,2].flatMap(T=>(T===1&&S?R(.7,.4,.06+T*.45,.35,x,1):R(.7,.4,.06+T*.45,.35,x,0)).concat([e(.2,.1,.03,0,.2+T*.45,.4+(T===1&&S?.26:.06),M)])),e(.9,.08,.76,0,1.4,0,A(x,.1))],stampante:(x,D,S)=>[e(.9,.4,.66,0,0,0,x),e(.9,.12,.66,0,.4,0,A(x,.1)),e(.7,.04,.3,0,.5,-.1,M,I(-20,0,0)),e(.6,.04,.34,0,.1,.4,m),...S?[e(.58,.03,.34,0,.12,.52,y),e(.12,.05,.05,.3,.42,.33,"#5ac54f",h)]:[e(.12,.05,.05,.3,.42,.33,"#ea323c")]],computer:(x,D,S)=>[s(1.8,.14,.9,0,0,0,p,[.05,.05,.05,.05]).slice(0,0),e(1,.1,.5,0,.55,0,x),...[-.8,.8].map(T=>e(.1,.55,.5,T,0,0,p)).slice(0,0),e(.14,.4,.14,0,.6,-.1,d),e(1.3,.8,.12,0,.9,-.15,x),e(1.14,.64,.03,0,.98,-.08,S?"#0098dc":m,S?h:void 0),...S?[e(.8,.06,.03,-.1,1.3,-.065,"#8fe3ff",h),e(.5,.06,.03,-.25,1.15,-.065,"#f68187",h)]:[],e(.8,.08,.3,-.1,0,0,p).slice(0,0),e(.9,.08,.3,0,0,.38,m,{netta:!0}).slice(0,0),e(.34,.8,.5,0,0,0,x).slice(0,0)].filter(T=>T.length),cattedra:x=>[s(2.9,.16,1.7,0,1,0,x),e(.14,1,1.5,-1.3,0,0,U(x,.15)),e(.14,1,1.5,1.3,0,0,U(x,.15)),e(2.6,.6,.1,0,.4,-.7,U(x,.15)),e(.5,.06,.4,-.8,1.16,.2,M),e(.3,.3,.3,.9,1.16,0,"#ea323c"),t(.2,.1,0,1.16,-.4,d,8),n(.2,0,1.5,-.4,b,1)].filter(D=>D.length).slice(0,7).concat([t(.14,.3,.6,1.16,-.4,"#5ac54f",8,.18)]),"banco-scuola":x=>[e(.08,1,.08,-.85,0,-.1,d),e(.08,1,.08,.85,0,-.1,d),e(.08,.5,.08,-.85,0,.5,d),e(.08,.5,.08,.85,0,.5,d),s(1.9,.12,.7,0,.84,-.12,x,[.06,.06,.06,.06],I(-8,0,0)),s(.8,.12,.6,0,.46,.3,A(x,.1),[.06,.06,.06,.06]).map(D=>D),e(1.7,.1,.1,0,.3,-.1,d).slice(0,0),e(.3,.04,.2,.5,.97,-.12,M,I(-8,0,0))].filter(D=>D.length).map(D=>D[0]==="l"&&D[1][2]===.7?[D[0],D[1],D[2],D[3],I(-8,0,0)]:D),pianola:(x,D,S)=>[...[-1.2,1.2].map(T=>e(.14,.7,.6,T,0,0,d)),e(2.7,.2,.8,0,.7,0,x),e(2.5,.06,.4,0,.9,.2,y),...Array.from({length:8},(T,V)=>e(.1,.08,.24,-1.05+V*.3+.15,.96,.1,m)),e(2.5,.5,.2,0,.9,-.3,U(x)),e(.4,.05,.04,.9,1.1,-.18,S?"#5ac54f":"#ea323c",h),...S?[e(1.8,.04,.03,-.2,1.2,-.18,"#8fe3ff",h)]:[],e(.5,.5,.04,0,0,0,p).slice(0,0)].filter(T=>T.length),bacheca:x=>[e(1.9,.9,.08,0,110*o,.04,p),e(1.74,.74,.04,0,110*o+.08,.1,P,{netta:!0}),e(.4,.3,.03,-.5,110*o+.5,.14,M),e(.36,.34,.03,.1,110*o+.35,.14,"#ffa214"),e(.5,.24,.03,.6,110*o+.18,.14,"#8fe3ff"),n(.05,-.5,110*o+.74,.16,"#ea323c",0),n(.05,.1,110*o+.66,.16,"#0098dc",0)].slice(0,7),"mappa-muro":x=>[e(1.9,1.1,.06,0,100*o,.03,p),e(1.74,.94,.03,0,100*o+.08,.08,"#8fe3ff",{netta:!0}),e(.6,.4,.03,-.4,100*o+.3,.11,"#5ac54f",{netta:!0}),e(.5,.3,.03,.4,100*o+.5,.11,"#edab50",{netta:!0}),e(.2,.2,.03,.6,100*o+.15,.11,"#33984b",{netta:!0}),n(.05,-.4,100*o+.4,.14,"#ea323c",0)],"zaino-scuola":(x,D,S)=>[e(.64,.8,.42,0,0,0,x).slice(0,0),s(.7,.5,.42,0,0,0,x,[.2,.2,.2,.2]),s(.5,.26,.14,0,0,.3,A(x,.14),[.1,.1,.1,.1]),...S?[e(.5,.06,.1,0,.5,0,m),e(.34,.2,.2,0,.5,0,"#0098dc"),e(.1,.34,.1,.2,.5,0,"#ea323c")]:[e(.5,.1,.4,0,.5,0,A(x,.1)),n(.05,0,.32,.37,"#ffa214",0)],e(.1,.4,.06,-.3,.1,-.2,m).slice(0,0)].filter(T=>T.length)};function ue(x,D,S){return[t(.14,.2,x,D,S,a.vaso,8,.2),i(.2,.34,x,D+.2,S,a.foglie[2],5)]}};var Bu=r=>{let{B:e,C:t,K:i,S:n,L:a,V:o,LUCI:s,chiaro:l,mescola:A,rulloX:c,rulloZ:h}=r,u=(v,b,y,w,U,I,z=14)=>t(v,b,y,w,U-b/2,I,z,void 0,{r:[90,0,0]}),f=["#ea323c","#ffa214","#5ac54f","#0098dc","#92a1b9","#f68187"],g=(v,b,y=a.vaso)=>[t(v*.8,b,0,0,0,y,8,v),t(v*1.08,.1,0,b-.05,0,l(y,.12),8)],m=(v,b,y,w,U=.14)=>[[-1,-1],[1,-1],[-1,1],[1,1]].map(([I,z])=>e(U,y,U,I*(v/2-U),0,z*(b/2-U),w)),p=(v,b,y,w,U)=>n(v,b,y,w,U,1),P=(v,b,y,w)=>e(v,(y-b)*o,.08,0,b*o,.04,w),d=(v,b,y,w,U=.09)=>e(v,(y-b)*o,U,0,b*o,U/2,w),M=(v,b)=>(v+b)/2*o;return{pianoforte:(v,b,y=0)=>[...m(1.7,.7,.4,a.legnoScuro,.16),e(1.9,.6,.8,0,.4,-.05,v),e(1.9,.1,.3,0,.4,.38,l(v,.1)),e(1.7,.05,.26,0,.5,.4,a.crema),e(1.4,.05,.12,0,.55,.34,a.nero),y?e(1.9,.7,.07,0,1,-.42,v):e(1.9,.08,.8,0,1,-.05,l(v,.1)),e(.6,.1,.34,0,0,.1,a.legnoScuro,{netta:!0})].slice(0,7).concat(y?[e(.5,.4,.07,0,1.1,-.36,a.crema)]:[]),chitarra:v=>[t(.3,.08,0,0,0,a.ferro,10,.3),t(.06,.3,0,.08,0,a.ferro,6),u(.3,.16,0,.6,0,v),u(.22,.16,0,1,0,v),u(.09,.02,0,.6,.09,a.nero,10),e(.1,.7,.07,0,1.2,0,a.legnoScuro),e(.17,.2,.08,0,1.9-.15,0,a.legno)],batteria:v=>[t(.4,.45,0,.45,-.2,v,12,void 0,{r:[90,0,0]}),u(.3,.02,0,.45,.26,a.crema),t(.28,.28,-.4,.8,-.15,v,12),t(.24,.03,-.4,1.08,-.15,a.crema,12),t(.3,.25,.45,.6,.35,v,12),t(.26,.03,.45,.85,.35,a.crema,12),t(.03,1.4,-.6,0,-.3,a.ferro,6),t(.4,.03,-.6,1.5,-.3,a.luce,12),t(.03,1,.7,0,0,a.ferro,6),t(.3,.03,.7,1.1,0,a.luce,12),t(.04,.5,0,0,.8,a.ferro,6),t(.28,.1,0,.5,.8,a.rosso,10)],flipper:v=>[...m(.7,1.5,.6,a.ferro,.12),e(.9,.35,1.7,0,.6,0,v),e(.9,.8,.3,0,.95,-.7,a.ferro),e(.7,.5,.04,0,1.1,-.54,"#ffa214",s),e(.7,.05,1.4,0,.95,.1,"#0098dc"),t(.1,.1,-.15,1,-.2,a.rosso,8),t(.1,.1,.18,1,-.05,a.rosa,8),e(.22,.07,.08,-.2,1,.65,a.neve),e(.22,.07,.08,.2,1,.65,a.neve),n(.05,0,1.05,.4,a.luce)],biliardino:(v,b,y=0)=>{let w=(y-1)*.1,U=[];for(let I of[-.5,0,.5])U.push(h(1,.03,I,1.05,a.ferro,w),n(.08,I,1.05,.45+w,a.rosso),e(.13,.3,.1,I,.9,-.2+w,f[2]),e(.13,.3,.1,I,.9,.2+w,f[0]));return[...m(1.8,.9,.5,a.ferro,.12),e(1.8,.35,.9,0,.5,0,v),e(1.6,.04,.7,0,.85,0,a.erba),e(1.8,.1,.1,0,.85,-.4,l(v,.1)),e(1.8,.1,.1,0,.85,.4,l(v,.1)),...U]},console:v=>[e(.9,.35,.7,0,0,0,a.legnoScuro),e(.8,.55,.1,0,.35,-.2,a.ferro),e(.7,.42,.03,0,.41,-.14,a.schermo),e(.42,.08,.25,-.15,.35,.15,v),e(.18,.06,.12,.25,.35,.15,a.rosso),n(.04,-.15,.45,.15,a.luce)],"juke-box":(v,b,y=0)=>[e(1,.1,.7,0,0,0,a.legnoScuro),e(.9,1.2,.6,0,.1,0,v),h(.6,.45,0,1.2,v),e(.62,.8,.04,0,.35,.31,y?"#ffd27a":a.ferro,y?s:void 0),u(.18,.02,0,.75,.34,a.nero),e(.5,.1,.04,0,1.4,.31,y?"#f68187":a.legnoScuro,y?s:void 0),...y?[n(.06,.52,1.4,.1,a.rosa),n(.06,-.52,1.1,.1,"#ffa214")]:[]],dadi:(v,b,y=0)=>{let w=[[[0,0]],[[-.2,-.2],[.2,.2]],[[-.2,-.2],[0,0],[.2,.2]],[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]],[[-.2,-.2],[.2,-.2],[0,0],[-.2,.2],[.2,.2]],[[-.2,-.2],[.2,-.2],[-.2,0],[.2,0],[-.2,.2],[.2,.2]]];return[e(.8,.8,.8,0,0,0,v),...w[y%6].map(([U,I])=>e(.13,.02,.13,U,.8,I,a.nero)),e(.13,.13,.02,-.15,.55,.4,a.nero),e(.13,.13,.02,.15,.2,.4,a.nero)]},"ping-pong":v=>[...m(2.6,1.3,.8,a.ferro,.14),e(2.7,.1,1.5,0,.8,0,v),e(.05,.22,1.55,0,.9,0,a.crema),e(2.6,.02,.06,0,.9,0,a.neve),n(.06,.8,.96,.3,a.neve),e(.3,.05,.3,-.9,.9,.3,a.rosso)],biliardo:v=>[...m(2.6,1.5,.45,a.legnoScuro,.22),e(2.8,.45,1.7,0,.4,0,a.legnoScuro),e(2.4,.06,1.3,0,.85,0,v),e(2.8,.12,.2,0,.85,-.75,a.legno),e(2.8,.12,.2,0,.85,.75,a.legno),e(.2,.12,1.3,-1.3,.85,0,a.legno),e(.2,.12,1.3,1.3,.85,0,a.legno),n(.1,-.3,.98,0,a.rosso),n(.1,.1,.98,.2,"#ffa214"),n(.1,.5,.98,-.1,a.neve)],microfono:v=>[t(.3,.08,0,0,0,a.ferro,10,.3),t(.06,1.3,0,.08,0,a.ferro,6),t(.14,.3,0,1.38,.04,v,8),n(.17,0,1.6,.04,a.ferro,1)],tamburo:v=>[e(.12,.35,.12,-.3,0,.12,a.ferro),e(.12,.35,.12,.3,0,.12,a.ferro),e(.12,.35,.12,0,0,-.3,a.ferro),t(.4,.5,0,.3,0,v,12),t(.42,.06,0,.8,0,a.crema,12),e(.07,.05,.5,-.12,.86,.1,a.legno),e(.07,.05,.5,.15,.86,.05,a.legno)],xilofono:v=>[e(.1,.2,.1,-.8,0,-.2,a.legnoScuro),e(.1,.2,.1,.8,0,-.2,a.legnoScuro),e(.1,.2,.1,-.8,0,.2,a.legnoScuro),e(.1,.2,.1,.8,0,.2,a.legnoScuro),e(1.8,.07,.07,0,.2,-.2,a.legnoScuro),e(1.8,.07,.07,0,.2,.2,a.legnoScuro),...[0,1,2,3,4,5,6,7].map(b=>e(.19,.08,.7-b*.04,-.75+b*.215,.27,0,f[b%6])),e(.06,.06,.4,.5,.36,.38,a.legno)],tastiera:v=>[e(.12,.8,.12,-.7,0,0,a.ferro),e(.12,.8,.12,.7,0,0,a.ferro),e(1.9,.15,.6,0,.8,0,v),e(1.7,.04,.25,0,.95,.15,a.crema),e(1.5,.04,.12,0,.99,.08,a.nero),n(.05,-.8,.97,-.18,a.rosso),n(.05,-.6,.97,-.18,a.luce)],arpa:v=>[e(.9,.1,.5,0,0,0,v),e(.12,1.8,.14,.32,.1,0,v),e(.12,1.2,.14,-.32,.1,0,v),c(.9,.08,1.88,0,l(v,.1),0),...[-.2,-.07,.07,.2].map(b=>e(.06,1.3,.06,b,.2,0,a.luce)).map((b,y)=>(b[1][1]=1.4+y*.1,b))],radio:(v,b,y=0)=>[e(.9,.5,.4,0,0,0,v),u(.18,.02,-.2,.25,.21,a.legnoScuro,12),e(.28,.2,.02,.22,.2,.21,a.luce),n(.05,.3,.1,.22,a.rosso),e(.06,.4,.06,.3,.5,-.1,a.ferro),...y?[n(.07,-.2,.75,.1,a.rosa),n(.06,.05,.9,.1,"#ffa214")]:[]],"tavolo-carte":v=>[t(.4,.06,0,0,0,a.legnoScuro,10),t(.1,.7,0,.06,0,a.legnoScuro,8),t(.9,.08,0,.72,0,v,16),e(.22,.02,.32,-.25,.8,.1,a.crema),e(.22,.02,.32,0,.82,.12,a.crema),e(.22,.02,.32,.25,.84,.08,a.crema),t(.08,.05,-.5,.8,-.35,a.rosso,8),t(.08,.05,-.5,.85,-.35,a.luce,8),t(.08,.05,.5,.8,-.3,a.acqua,8)],"pista-macchinine":v=>[e(2.9,.15,1.9,0,0,0,v),e(2.2,.04,.3,0,.15,-.6,a.ferro),e(2.2,.04,.3,0,.15,.6,a.ferro),e(.3,.04,.9,-1,.15,0,a.ferro),e(.3,.04,.9,1,.15,0,a.ferro),e(.32,.14,.2,-.6,.19,.6,a.rosso),e(.32,.14,.2,.6,.19,-.6,a.acqua),e(.32,.14,.2,1,.19,.1,"#ffa214"),t(.2,.05,-.2,.15,0,a.erba,8)],cavalletto:v=>[e(.1,1.8,.1,-.35,0,0,a.legno),e(.1,1.8,.1,.35,0,0,a.legno),e(.1,1.5,.1,0,0,-.38,a.legno),e(.9,.08,.22,0,.8,.14,a.legnoScuro),e(.8,.7,.05,0,.9,.16,a.crema),e(.3,.25,.02,-.15,1.2,.2,v),n(.1,.15,1.2,.2,a.rosso),e(.2,.1,.02,.1,1,.2,a.acqua),e(.08,.1,.08,.3,.88,.22,a.rosa)],"castello-gonfiabile":v=>[e(2.8,.3,1.8,0,0,0,v),e(2.2,.8,.3,0,.3,-.7,l(v,.15)),e(.5,.8,.3,-.85,.3,.75,l(v,.15)),e(.5,.8,.3,.85,.3,.75,l(v,.15)),...[[-1.2,-.65],[1.2,-.65],[-1.2,.65],[1.2,.65]].flatMap(([b,y],w)=>[t(.3,1.2,b,.3,y,f[w%6+(w>1?2:0)],10),i(.4,.55,b,1.5,y,a.rosso,10)]),n(.14,0,1,.85,a.luce)],palloncini:(v,b,y=0)=>[t(.2,.15,0,0,0,a.ferro,8),e(.06,1.5,.06,0,.15,0,a.crema),n(.32,-.25,1.75,0,f[y%6],1),n(.32,.25,1.95,.05,f[(y+2)%6],1),n(.32,0,2.12,-.1,f[(y+4)%6],1)],carillon:(v,b,y=0)=>[e(.8,.35,.8,0,0,0,a.legnoScuro),t(.25,.4,0,.35,0,v,12),i(.1,.25,y?.12:-.12,.75,0,a.rosa,6),n(.08,y?.12:-.12,1.02,0,a.crema,1),...y?[n(.05,-.3,.8,.2,a.luce)]:[]],proiettore:(v,b,y=0)=>[e(.1,.8,.1,-.3,0,-.1,a.ferro),e(.1,.8,.1,.3,0,-.1,a.ferro),e(.1,.8,.1,0,0,.3,a.ferro),e(.7,.3,.5,0,.8,0,v),t(.14,.2,0,.88,.25,a.ferro,8,void 0,{r:[90,0,0]}),u(.1,.02,0,.88,.46,y?"#ffd27a":a.pietra,8),t(.14,.05,-.2,1.1,0,a.rosso,8)].map((w,U)=>U===6&&y?[w[0],w[1],w[2],w[3],s]:w),altoparlante:(v,b,y=0)=>[e(.8,1.4,.6,0,0,0,a.ferro),u(y?.3:.26,.05,0,.5,.31,v),u(.1,.03,0,.5,.35,a.nero),u(.12,.04,0,1.1,.31,v),...y?[n(.06,.45,1.5,0,a.rosa),n(.05,-.45,1.3,0,a.luce)]:[]],gong:(v,b,y=0)=>[e(.12,1.8,.12,-.55,0,0,a.legnoScuro),e(.12,1.8,.12,.55,0,0,a.legnoScuro),e(.15,.1,.6,-.55,0,0,a.legnoScuro,{netta:!0}),e(.15,.1,.6,.55,0,0,a.legnoScuro,{netta:!0}),c(1.3,.07,1.7,0,a.legnoScuro,0),u(.42,.07,0,1,y*.1,v,16),u(.12,.03,0,1,y*.1+.05,l(v,.25),10),n(.1,.5,.6,.25,a.legno)],altalena:(v,b,y=0)=>{let w=(y-1)*.25;return[...[[-1.3,-.3],[-1.3,.3],[1.3,-.3],[1.3,.3]].map(([U,I])=>e(.14,2.2,.14,U,0,I,a.legnoScuro)),c(2.8,.07,2.2,0,v),e(.06,1.5,.06,-.4,.68,w,a.crema),e(.06,1.5,.06,.4,.68,w,a.crema),e(.95,.08,.36,0,.6,w,a.legno)]},scivolo:v=>[...[[-1,-.9],[-.2,-.9],[-1,-.1],[-.2,-.1]].map(([b,y])=>e(.1,1.2,.1,b,0,y,a.ferro)),e(.95,.1,.95,-.6,1.2,-.5,v),e(.08,1.2,.08,-1.05,0,.45,a.ferro),...[0,1,2,3,4,5].map(b=>e(.56+b%2*.02,.1,.34,-.6,1.1-b*.2,.15+b*.16,a.legno)),...[0,1,2].map(b=>e(.14,.06,.5,-1.05,.3+b*.35,0,a.legnoScuro))].slice(0,12).concat([e(.08,.5,.08,-.12,1.3,.25,a.ferro)]),fontana:(v,b,y=0)=>[t(1,.45,0,0,0,a.pietra,14,.9),t(.82,.05,0,.45,0,a.acqua,14),t(.22,.9,0,.45,0,a.pietra,10),t(.5,.1,0,1.2,0,a.pietraScura,12,.35),t(.4,.04,0,1.3,0,a.acqua,12),...y?[t(.07,.4,0,1.3,0,a.acqua,6),n(.15,0,1.75,0,a.acqua,1),n(.08,.5,.6,.3,a.acqua,1),n(.08,-.5,.6,-.2,a.acqua,1)]:[]],barbecue:(v,b,y=0)=>[e(.12,.7,.12,-.8,0,-.3,a.ferro),e(.12,.7,.12,.8,0,-.3,a.ferro),e(.12,.7,.12,-.8,0,.3,a.ferro),e(.12,.7,.12,.8,0,.3,a.ferro),e(1.8,.4,.9,0,.7,0,v),e(1.5,.05,.6,0,1.1,0,y?"#c64524":a.ferro),...y===2?[i(.2,.4,-.3,1.15,0,"#ed7614",5,s),i(.15,.3,.3,1.15,.1,"#ffa214",5,s)]:[],e(1.7,.06,.8,0,1.2,0,a.pietraScura,{uno:!0}),e(.5,.2,.04,0,.25,.37,a.legno),e(.1,.3,.1,.9,1.2,.35,a.legnoScuro)].filter((w,U)=>!(U===6&&y===0)),tenda:(v,b,y=0)=>[e(2,.06,1.9,0,0,0,l(v,.2)),i(1.1,1.5,0,.06,0,v,4,{r:[0,45,0]}),...y?[]:[i(.3,.8,0,.06,.5,a.legnoScuro,4,{r:[0,45,0]})]],falo:()=>[...[0,1,2,3,4].map(v=>e(.28,.2,.28,Math.cos(v*1.2566)*.42,0,Math.sin(v*1.2566)*.42,a.pietra)),c(.8,.09,.1,0,a.legnoScuro),h(.8,.09,0,.28,a.legnoScuro),i(.28,.6,-.05,.12,0,"#ed7614",5,s),i(.17,.4,.1,.12,.05,"#ffa214",5,s)],"casetta-uccelli":v=>[t(.07,1.2,0,0,0,a.legnoScuro,6),e(.7,.6,.6,0,1.2,0,v),i(.62,.4,0,1.8,0,a.rosso,4,{r:[0,45,0]}),u(.13,.02,0,1.4,.31,a.nero,10),e(.4,.07,.15,0,1.2,.35,a.legnoScuro)],steccato:v=>[...[-1.2,-.6,0,.6,1.2].map(b=>e(.3,1,.14,b,0,0,v)),...[-1.2,-.6,0,.6,1.2].map(b=>i(.21,.2,b,1,0,v,4,{r:[0,45,0]})),e(2.9,.14,.12,0,.3,-.12,a.legnoScuro),e(2.9,.14,.12,0,.65,-.12,a.legnoScuro)],cartello:(v,b,y=0)=>{let w=y===1?-1:1;return[e(.15,1.5,.15,0,0,0,a.legnoScuro),e(.7,.32,.1,w*.05,1.2,.12,v),i(.2,.2,w*.4,1.26,.12,v,3,{r:[0,0,-w*90]}),e(.6,.3,.1,y===2?.05:-.05,.8,-.12,l(v,.2)),e(.4,.06,.02,w*.05,1.33,.18,a.crema)]},carriola:v=>[e(1,.45,.7,.2,.45,0,v),e(.9,.06,.6,.2,.9,0,a.terra[2]),u(.28,.1,-.7,.28,0,a.ferro,10),e(.9,.1,.1,-.2,.4,-.3,a.legno),e(.9,.1,.1,-.2,.4,.3,a.legno),e(.1,.4,.1,.85,0,-.3,a.legnoScuro),e(.1,.4,.1,.85,0,.3,a.legnoScuro),e(.4,.1,.1,.9,.8,-.3,a.legno),e(.4,.1,.1,.9,.8,.3,a.legno)],pozzo:v=>[t(.6,.6,0,0,0,a.pietra,12),t(.42,.04,0,.6,0,a.nero,12),e(.12,1.2,.12,-.5,.6,0,a.legnoScuro),e(.12,1.2,.12,.5,.6,0,a.legnoScuro),i(.65,.5,0,1.8,0,v,4,{r:[0,45,0]}),c(1,.06,1.1,0,a.legno)],cassonetto:(v,b,y=0)=>[e(.9,.9,.8,0,.1,0,v),e(.12,.1,.1,-.35,0,.3,a.ferro),e(.12,.1,.1,.35,0,.3,a.ferro),y?e(.96,.1,.4,0,1.15,-.45,l(v,.2)):e(.96,.1,.86,0,1,0,l(v,.2)),u(.14,.02,0,.6,.41,a.neve,8)],amaca:v=>[e(.18,1.5,.18,-1.35,0,0,a.legnoScuro),e(.18,1.5,.18,1.35,0,0,a.legnoScuro),e(1.6,.12,.7,0,.7,0,v),e(.1,.5,.1,-.9,.9,0,a.crema),e(.7,.1,.1,-1.1,1.3,0,a.crema).slice(0,5),e(.1,.5,.1,.9,.9,0,a.crema)].map(b=>Array.isArray(b)&&b.length===5&&typeof b[0]=="number"?n(.2,0,.83,0,l(v,.2),1):b),sabbiera:v=>[e(1.9,.4,.3,0,0,-.85,v),e(1.9,.4,.3,0,0,.85,v),e(.3,.4,1.4,-.8,0,0,v),e(.3,.4,1.4,.8,0,0,v),e(1.3,.25,1.4,0,0,0,"#edab50"),i(.3,.3,.1,.25,0,"#edab50",6),t(.12,.2,-.3,.25,.3,a.rosso,8,.18)],"dondolo-molla":(v,b,y=0)=>[t(.4,.08,0,0,0,a.ferro,10),t(.1,.5,y*.1,.08,0,a.ferro,8),e(.45,.5,.9,y*.15,.55,0,v),n(.28,y*.15,1.1,.35,v,1),n(.06,y*.15-.12,1.25,.55,a.nero),n(.06,y*.15+.12,1.25,.55,a.nero),e(.1,.1,.5,y*.15-.3,1.05,0,a.legnoScuro)].slice(0,6),giostra:(v,b,y=0)=>{let w=y*.5;return[t(1,.15,0,.1,0,a.ferro,16),t(.1,.5,0,.25,0,a.ferro,8),...[0,1,2,3,4,5].map(U=>e(.1,.9,.1,Math.cos(w+U*1.0472)*.8,.25,Math.sin(w+U*1.0472)*.8,f[U])),...[0,1,2].map(U=>t(.08,.6,Math.cos(w+U*2.0944)*.35,.25,Math.sin(w+U*2.0944)*.35,a.rosso,6)),c(.9,.06,1.05,0,v,0),h(.9,.06,0,1.05,v,0)]},bilico:(v,b,y=0)=>[i(.5,.7,0,0,0,a.legnoScuro,4,{r:[0,45,0]}),e(2.6,.12,.35,0,.7+(y-1)*0,0,v),e(.1,.35,.1,-1.1+0,.82+(y===0?-0:0),0,a.ferro),e(.5,.3,.5,-1.15,0,0,a.ferro,{netta:!0}),n(.14,y===1?0:y===2?.7:-.7,.95,0,f[y]),e(.5,.1,.5,1.15,0,0,a.legnoScuro)].slice(0,5),"tavolo-picnic":v=>[e(2.8,.1,1,0,.8,0,v),e(2.8,.1,.4,0,.45,-.75,v),e(2.8,.1,.4,0,.45,.75,v),e(.14,.8,1.7,-1,0,0,a.legnoScuro,{netta:!0}),e(.14,.8,1.7,1,0,0,a.legnoScuro,{netta:!0}),e(.9,.04,.6,0,.9,0,a.rosso),e(.6,.02,.4,0,.94,0,a.crema)],ombrellone:(v,b,y=0)=>[t(.5,.12,0,0,0,a.pietraScura,10,.5),t(.06,1.9,0,.12,0,a.legno,6),...y?[i(.95,.5,0,1.9,0,v,8)]:[i(.2,1.2,0,1,0,v,8),n(.06,0,2,0,a.legno)],...y?[i(.55,.3,0,1.9,0,l(v,.3),8,{s:[1,.5,1]}),n(.06,0,2.4,0,a.legno)]:[]].slice(0,y?5:4),sdraio:v=>[e(.1,.5,.1,-.4,0,-.7,a.legnoScuro),e(.1,.5,.1,.4,0,-.7,a.legnoScuro),e(.1,.35,.1,-.4,0,.7,a.legnoScuro),e(.1,.35,.1,.4,0,.7,a.legnoScuro),e(.9,.1,1.5,0,.35,0,v),e(.9,.7,.12,0,.45,-.7,l(v,.15)),e(.14,.14,1.5,-.46,.35,0,a.legno),e(.14,.14,1.5,.46,.35,0,a.legno)],botte:v=>[t(.5,.95,0,0,0,v,12,.5),t(.57,.12,0,.2,0,a.ferro,12,.57),t(.57,.12,0,.68,0,a.ferro,12,.57),t(.47,.04,0,.95,0,l(v,.2),12),e(.12,.12,.1,0,.4,.5,a.luce)].slice(0,5),mulino:(v,b,y=0)=>[t(.95,1.6,0,0,0,v,8,.65),i(.8,.9,0,1.6,0,a.rosso,8),e(.4,.55,.05,0,0,.8,a.legnoScuro),e(.3,.3,.1,0,1,.6,a.crema),n(.15,0,1.9,.62,a.legnoScuro),...[0,1,2,3].map(w=>t(.1,.8,0,1.9,.86,w%2?a.crema:a.legnoChiaro,4,void 0,{r:[0,0,y*25+w*90]}))],legna:v=>[...[-.6,-.2,.2,.6].map(b=>h(.8,.2,b*1.5,.2,a.legno,0)),...[-.45,0,.45].map(b=>h(.8,.2,b*1.5,.58,a.legnoChiaro,0)),h(.8,.2,0,.95,a.legno,0),e(.1,.1,.05,0,0,0,v,{netta:!0}),h(.8,.2,-.9,.2,a.legnoScuro,0)].slice(0,9),ceppo:v=>[t(.45,.6,0,0,0,a.legnoScuro,10,.4),t(.4,.04,0,.6,0,a.legnoChiaro,10),e(.1,.7,.1,.15,.6,.1,a.legno),e(.45,.25,.07,.15,1,.1,a.ferro)],spaventapasseri:v=>[e(.15,1.8,.15,0,0,0,a.legnoScuro),e(1.2,.15,.15,0,1.1,0,a.legno),e(.55,.7,.35,0,.7,0,v),n(.28,0,1.55,.05,a.legnoChiaro,1),t(.4,.04,0,1.75,.05,"#8a4836",10),t(.22,.3,0,1.78,.05,"#8a4836",10),n(.04,-.08,1.58,.3,a.nero),n(.04,.08,1.58,.3,a.nero),i(.07,.15,0,1.45,.3,"#ffa214",6,{r:[90,0,0]})],pollaio:(v,b,y=0)=>[e(1.8,.6,.7,0,.3,-.1,v),e(1.9,.15,.9,0,.9,-.1,a.rosso),e(1.6,.25,.5,0,1.05,-.1,a.rosso),...[-.7,.7].flatMap(w=>[e(.14,.3,.14,w,0,.1,a.legnoScuro),e(.14,.3,.14,w,0,-.3,a.legnoScuro)]),y?e(.5,.03,.4,.4,.3,.25,a.legno):e(.5,.45,.05,.4,.3,.27,a.legnoScuro),n(.2,-.5,.15,.4,a.neve,1),n(.08,-.5,.4,.55,a.rosso)],cuccia:v=>[e(1,.8,1,0,0,0,v),i(.65,.5,0,.8,0,a.rosso,4,{r:[0,45,0]}),u(.25,.02,0,.3,.51,a.nero,12),e(.4,.1,.2,0,0,.55,a.rosso)],bici:v=>[u(.4,.1,-.72,.45,0,a.ferro,14),u(.4,.1,.72,.45,0,a.ferro,14),u(.26,.12,-.72,.45,0,a.crema,12),u(.26,.12,.72,.45,0,a.crema,12),e(1.4,.14,.12,0,.7,0,v),e(.14,.7,.12,-.2,.45,0,v),e(.14,.5,.12,.65,.7,0,v),e(.5,.1,.3,-.25,1.1,0,a.legnoScuro),e(.12,.1,.55,.7,1.15,0,a.ferro)],gazebo:v=>[...[[-1.2,-1.2],[1.2,-1.2],[-1.2,1.2],[1.2,1.2]].map(([b,y])=>e(.2,2,.2,b,0,y,a.legno)),e(3,.1,3,0,0,0,a.legnoChiaro),i(1.6,.9,0,2,0,v,4,{r:[0,45,0]}),e(2.6,.2,.15,0,1.8,-1.2,a.legnoScuro),e(2.6,.2,.15,0,1.8,1.2,a.legnoScuro),e(.15,.2,2.6,-1.2,1.8,0,a.legnoScuro),e(.15,.2,2.6,1.2,1.8,0,a.legnoScuro),n(.12,0,2.95,0,a.luce)].slice(0,10).map((b,y)=>y===4?i(1.6,.85,0,2,0,v,4,{r:[0,45,0]}):b),canestro:v=>[t(.3,.1,0,0,0,a.ferro,10,.3),t(.08,3,0,.1,-.3,a.ferro,6),e(.1,.1,.5,0,3,-.05,a.ferro),e(1,.7,.07,0,2.85,.25,a.neve),e(.45,.35,.02,0,2.95,.3,v),t(.22,.06,0,2.8,.35,a.rosso,12,.22),n(.16,0,2.55,.35,a.crema,1)],"vaso-terracotta":()=>[...g(.45,.8),p(.5,0,1,0,a.foglie[2]),p(.3,.2,1.1,.1,a.foglie[3])],cespuglio:v=>[p(.5,0,.5,0,a.foglie[2]),p(.38,.25,.4,.12,a.foglie[3]),p(.33,-.25,.4,-.1,a.foglie[1])],"cespuglio-bacche":(v,b,y=0)=>[p(.5,0,.5,0,a.foglie[1]),p(.36,.25,.4,.15,a.foglie[2]),...y?[n(.1,-.2,.9,.3,a.rosso),n(.1,.3,.7,.4,a.rosso),n(.1,.1,1,-.2,"#ed7614"),n(.1,-.4,.5,.2,"#ed7614")]:[n(.06,-.2,.9,.3,a.foglie[3]),n(.06,.3,.7,.4,a.foglie[3])]],girasoli:()=>[...g(.3,.35),e(.1,1.5,.1,0,.3,0,a.foglie[2]),u(.4,.1,0,1.9,0,"#ffa214",12),u(.22,.12,0,1.9,.01,a.legnoScuro,10),e(.08,.9,.08,.3,.3,.1,a.foglie[2]),u(.28,.08,.3,1.2,.1,"#ffa214",10),u(.15,.1,.3,1.2,.11,a.legnoScuro,8),n(.18,-.25,.7,0,a.foglie[3],1)],bonsai:()=>[e(.9,.2,.6,0,0,0,a.pietraScura),t(.1,.45,0,.2,0,a.legnoScuro,6,.14),e(.1,.1,.1,.2,.55,0,a.legnoScuro),p(.3,0,.85,0,a.foglie[2]),p(.2,.3,.7,0,a.foglie[3]),p(.18,-.25,.6,.1,a.foglie[1])],"palma-vaso":()=>[...g(.4,.6),t(.08,1.4,0,.5,0,a.legnoScuro,6,.12),...[0,1,2,3,4].map(v=>i(.12,.65,Math.cos(v*1.2566)*.1,1.9,Math.sin(v*1.2566)*.1,a.foglie[2+v%2],4,{r:[Math.sin(v*1.2566)*35,0,-Math.cos(v*1.2566)*35]})),n(.18,0,2,0,a.foglie[1],1)],felce:()=>[...g(.35,.4),...[0,1,2,3,4,5].map(v=>i(.12,.75,Math.cos(v*1.0472)*.12,.4,Math.sin(v*1.0472)*.12,a.foglie[1+v%3],4,{r:[Math.sin(v*1.0472)*28,0,-Math.cos(v*1.0472)*28]}))],orchidea:()=>[...g(.25,.3,a.crema),e(.07,.8,.07,0,.3,0,a.foglie[2]),n(.16,-.12,1.15,0,a.rosa,1),n(.16,.12,1,.04,a.rosa,1),n(.14,0,.82,.08,a.rosa,1),n(.14,-.3,.45,.1,a.foglie[3]),n(.14,.3,.45,.1,a.foglie[3])],bambu:()=>[...g(.4,.5,a.crema),...[[-.2,2.5],[.05,2.1],[.25,2.3],[-.05,1.7]].map(([v,b],y)=>t(.07,b,v,.45,y%2?.1:-.1,a.erba,6)),p(.25,-.2,2.6,0,a.foglie[3]),p(.22,.25,2.4,0,a.foglie[2])],lavanda:()=>[...g(.3,.3),...[-.18,0,.18].map((v,b)=>i(.1,.55+b%2*.1,v,.3,b*.05-.05,"#92a1b9",5)),p(.2,0,.35,0,a.foglie[2])],tulipani:()=>[t(.25,.1,0,0,0,a.terra[2],8),...[-.15,.05,.2].map((v,b)=>[e(.07,.3+b*.05,.07,v,.1,b*.08-.05,a.foglie[2]),i(.14,.2,v,.4+b*.05,b*.08-.05,[a.rosso,a.rosa,"#ffa214"][b],6,{r:[180,0,0]})]).flat()],rose:()=>[...g(.35,.4),p(.45,0,.8,0,a.foglie[1]),n(.1,-.2,1.05,.25,a.rosso),n(.1,.25,.95,.2,a.rosso),n(.1,0,1.2,-.1,a.rosa),n(.08,.1,.85,.38,a.rosa)],margherite:()=>[t(.3,.1,0,0,0,a.terra[2],8),...[-.15,.1,.2].map((v,b)=>[e(.06,.2+b*.05,.06,v,.1,b*.1-.1,a.foglie[2]),u(.12,.04,v,.38+b*.05,b*.1-.1,a.neve,8),u(.05,.05,v,.38+b*.05,b*.1-.1+.01,"#ffa214",6)]).flat()],aloe:()=>[...g(.3,.3),...[0,1,2,3,4,5].map(v=>i(.1,.7,Math.cos(v*1.0472)*.12,.3,Math.sin(v*1.0472)*.12,a.foglie[2],4,{r:[Math.sin(v*1.0472)*25,0,-Math.cos(v*1.0472)*25]}))],ficus:()=>[...g(.45,.7),t(.09,1,0,.6,0,a.legnoScuro,6),p(.55,0,2,0,a.foglie[2]),p(.34,.3,1.7,.1,a.foglie[3]),p(.33,-.3,1.6,-.05,a.foglie[1])],traliccio:()=>[e(.12,2,.12,-.8,0,0,a.legnoScuro),e(.12,2,.12,.8,0,0,a.legnoScuro),...[.4,.9,1.4,1.9].map(v=>e(1.7,.1,.1,0,v,0,a.legno)),p(.25,-.5,.6,.1,a.foglie[2]),p(.3,.3,1,.1,a.foglie[3]),p(.25,-.2,1.4,.1,a.foglie[2]),p(.28,.5,1.8,.1,a.foglie[3]),n(.09,.3,1.2,.2,a.rosa)],zucche:()=>[n(.38,-.1,.35,0,"#ed7614",1),n(.28,.35,.25,.15,"#ffa214",1),e(.08,.15,.08,-.1,.65,0,a.foglie[1]),e(.07,.12,.07,.35,.5,.15,a.foglie[1]),p(.15,.1,.1,-.3,a.foglie[3])],"cassetta-erbe":()=>[e(1.8,.45,.7,0,0,0,a.legnoScuro),e(1.6,.06,.5,0,.45,0,a.terra[2]),p(.22,-.6,.65,0,a.foglie[3]),p(.2,-.2,.62,0,a.foglie[2]),p(.22,.2,.65,0,a.foglie[1]),p(.2,.6,.62,0,a.foglie[3]),e(.2,.15,.04,-.6,.3,.37,a.crema),e(.2,.15,.04,.2,.3,.37,a.crema)],ninfea:()=>[t(.55,.35,0,0,0,a.pietra,12,.6),t(.48,.04,0,.35,0,a.acqua,12),t(.2,.05,-.15,.37,.1,a.erba,8),t(.16,.05,.2,.37,-.15,a.erba,8),n(.1,-.15,.48,.1,a.rosa,1)],topiario:()=>[...g(.4,.5),t(.08,.4,0,.5,0,a.legnoScuro,6),n(.6,0,1.2,0,a.foglie[2],2)],poster:v=>[d(.84,120,196,a.crema,.06),i(.3,.6,-.1,130*o+.1,.1,v,3),i(.2,.4,.2,130*o+.1,.1,l(v,.2),3),n(.12,.2,180*o-.15,.1,a.luce)],"tenda-muro":(v,b,y=0)=>[c(1.9,.05,212*o-.1,.12,a.legnoScuro,0),...y?[e(.4,170*o,.14,-.72,40*o,.1,v),e(.4,170*o,.14,.72,40*o,.1,v)]:[e(.95,170*o,.14,-.47,40*o,.1,v),e(.95,170*o,.14,.47,40*o,.1,l(v,.08))]],"mensola-tazze":v=>[e(1.9,.12,.4,0,110*o,.2,v),...[-.55,0,.55].map((b,y)=>t(.1,.16,b,110*o+.12,.2,f[y*2%6],8)),...[-.55,0,.55].map(b=>e(.06,.1,.06,b+.12,110*o+.15,.2,a.crema,{netta:!0}))],cucu:(v,b,y=0)=>[d(.78,120,190,v,.2),i(.55,.3,0,190*o,.1,a.rosso,4,{r:[0,45,0],s:[1,1,.7]}),u(.2,.03,0,160*o,.21,a.crema,12),e(.05,.14,.02,0,160*o,.24,a.nero),e(.12,.05,.02,.05,160*o,.25,a.nero),e(.3,.2,.1,0,130*o,y?.34:.19,a.legnoScuro),n(.07,0,130*o+.28,y?.34:.22,"#ffa214"),t(.07,.3,-.18,120*o-.3,.1,a.luce,6),t(.07,.3,.18,120*o-.25,.1,a.luce,6)].slice(0,8),ghirlanda:v=>[t(.4,.1,0,176*o,.1,v,12,void 0,{r:[90,0,0]}),n(.1,-.3,176*o+.15,.17,a.rosso),n(.1,.25,176*o-.2,.17,a.rosso),n(.1,0,176*o+.38,.17,a.luce),e(.3,.2,.06,0,176*o-.45,.12,a.rosso)].map((b,y)=>y===0?t(.4,.1,0,176*o,.05,v,12,void 0,{r:[90,0,0]}):b).slice(0,5),"specchio-tondo":()=>[u(.48,.1,0,M(120,192),.05,a.legno,16),u(.4,.03,0,M(120,192),.13,"#cfe8ff",16)],"mappamondo-muro":v=>[d(1.9,110,200,a.crema,.07),d(1.9,110,114,a.legnoScuro,.1),d(1.9,196,200,a.legnoScuro,.1),e(.7,.45,.02,-.4,140*o,.08,v),e(.5,.35,.02,.45,150*o,.08,a.erba),e(.35,.25,.02,.2,125*o,.08,"#edab50"),n(.07,-.7,185*o,.1,a.rosso)],scaffaletto:v=>[e(.08,110*o,.28,-.4,90*o,.14,v),e(.08,110*o,.28,.4,90*o,.14,v),...[90,130,170].map(b=>e(.9,.1,.3,0,b*o,.15,l(v,.15))),t(.1,.18,-.2,130*o+.1,.15,a.vaso,8),p(.13,-.2,130*o+.38,.15,a.foglie[2]),e(.2,.2,.2,.2,170*o+.1,.15,a.rosso),n(.12,.1,90*o+.2,.15,a.luce)].slice(0,8),"cornice-foto":v=>[d(.84,130,190,v,.1),e(.62,.35,.03,-0,130*o+.35,.12,a.schermo),e(.62,.35,.03,0,130*o+.78,.12,"#f68187"),i(.15,.2,-.1,130*o+.4,.15,a.erba,3),n(.07,.15,130*o+.88,.15,a.luce)],bersaglio:()=>[u(.45,.1,0,M(130,190),.05,a.nero,16),u(.37,.03,0,M(130,190),.12,a.crema,16),u(.27,.03,0,M(130,190),.145,a.rosso,16),u(.17,.03,0,M(130,190),.175,a.crema,14),u(.08,.03,0,M(130,190),.205,a.rosso,10),i(.04,.3,.15,M(130,190)+.1,.2,a.acqua,4,{r:[-90,0,0]})].slice(0,5),"lavagna-muro":v=>[d(1.9,100,200,a.legno,.1),e(1.7,80*o,.03,0,110*o,.115,v),e(.5,.05,.03,-.4,170*o,.15,a.neve,{uno:!0}),e(.9,.05,.03,.2,150*o,.15,a.neve),e(.3,.05,.03,-.5,130*o,.15,a.rosa),e(.4,.06,.12,.6,100*o,.16,a.legnoChiaro)],bandierine:()=>[e(3.8,.04,.04,0,210*o,.03,a.ferro),...Array.from({length:8},(v,b)=>i(.2,.34,-1.65+b*.47,210*o-.32,.05,f[b%6],3,{r:[180,0,0],s:[1,1,.4]}))],"chitarra-muro":v=>[e(.1,.9,.08,0,160*o+.3,.06,a.legnoScuro),u(.3,.14,0,90*o+.5,.08,v,12),u(.22,.14,0,90*o+.95,.08,v,12),u(.09,.02,0,90*o+.5,.16,a.nero,10),e(.17,.2,.08,0,190*o+.15,.06,a.legno),e(.14,.14,.08,0,200*o+.05,.1,a.ferro).slice(0,5)].slice(0,5),appendiabiti:v=>[e(1.8,.2,.1,0,170*o,.05,v),...[-.65,-.2,.25,.7].map((b,y)=>[t(.05,.3,b,170*o+.07,.1,a.legnoScuro,6,void 0,{r:[90,0,0]}),n(.09,b,170*o+.1,.4,f[y])]).flat().slice(0,8),e(.5,.7,.12,-.2,130*o+0,.25,a.rosso,{netta:!0}).slice(0,5)].slice(0,9).map(b=>(b.length===5&&typeof b[0]=="string",b)),"bacheca-sughero":v=>[d(1.9,100,190,a.legnoScuro,.1),e(1.7,70*o,.03,0,110*o,.115,"#e69c69"),e(.4,.4,.02,-.5,130*o,.15,a.crema),e(.35,.3,.02,.1,150*o,.15,a.rosa),e(.4,.35,.02,.6,125*o,.15,a.schermo),n(.05,-.5,130*o+.35,.18,a.rosso),n(.05,.1,150*o+.25,.18,a.acqua),n(.05,.6,125*o+.3,.18,a.rosso)],applique:v=>[e(.3,.25,.1,0,130*o,.05,a.ferro),e(.08,.3,.08,0,130*o+.15,.15,a.ferro),t(.2,.25,0,130*o+.35,.2,A(v,a.luce,.7),8,.3,s),i(.22,.12,0,130*o+.6,.2,a.ferro,8)].slice(0,4),acchiappasogni:v=>[u(.35,.07,0,150*o,.06,v,12),u(.22,.04,0,150*o,.1,a.crema,10),u(.12,.05,0,150*o,.12,v,8),e(.06,.6,.05,0,100*o+0,.07,a.crema),n(.08,-.15,100*o+.1,.07,a.rosa),n(.08,.15,100*o+.3,.07,a.schermo)].map((b,y)=>y===1?u(.3,.02,0,150*o,.1,a.crema,10):b).slice(0,6),scudo:v=>[e(.75,90*o-.2,.1,0,110*o+.2,.05,v),i(.38,.2,0,100*o,.05,v,4,{r:[180,0,45]}),e(.12,.7,.04,0,120*o+.15,.12,a.luce),e(.5,.12,.04,0,150*o,.12,a.luce)].slice(0,4),"pesce-trofeo":v=>[e(1.6,.14,.1,0,130*o,.05,a.legno),n(.32,0,130*o+.5,.18,v,1),i(.25,.4,-.5,130*o+.5,.15,v,3,{r:[0,0,90],s:[1,1,.4]}),i(.2,.3,.5,130*o+.5,.15,l(v,.15),3,{r:[0,0,-90],s:[1,1,.4]}),n(.06,.28,130*o+.58,.45,a.nero)].map((b,y)=>y===1?e(.9,.4,.25,0,130*o+.3,.2,v):b),meridiana:v=>[u(.45,.1,0,M(130,190),.05,a.pietra,16),u(.38,.03,0,M(130,190),.12,a.crema,14),e(.06,.4,.06,0,M(130,190),.16,v),i(.14,.2,0,M(130,190)+.36,.15,v,3),n(.09,0,M(130,190)-.1,.15,"#ffa214")].slice(0,5),termometro:v=>[e(.3,100*o,.08,0,90*o,.04,a.legno),e(.1,.9,.03,0,90*o+.3,.095,a.crema),e(.08,.5,.03,0,90*o+.3,.13,v),n(.14,0,90*o+.2,.12,v)],maschere:v=>[e(.12,.1,.1,-.45,190*o-.15,.05,a.legnoScuro).slice(0,5),d(.7,130,185,a.crema,.1).slice(0,5),d(.7,130,185,a.crema,.1)].map((b,y)=>y<2?[]:b).flat().length?[e(.7,.7,.1,-.5,130*o,.05,a.crema),n(.08,-.65,130*o+.5,.12,a.nero),n(.08,-.35,130*o+.5,.12,a.nero),e(.3,.07,.04,-.5,130*o+.2,.11,a.rosso),e(.7,.7,.1,.5,130*o+.12,.05,v),n(.08,.35,130*o+.62,.12,a.nero),n(.08,.65,130*o+.62,.12,a.nero),e(.3,.07,.04,.5,130*o+.32,.11,a.luce)]:[],"lanterne-carta":v=>[e(1.9,.04,.04,0,212*o,.03,a.ferro),...[-.6,.6].flatMap((b,y)=>[e(.03,.4,.03,b,212*o-.4,.04,a.crema),n(.28,b,212*o-.7,.06,y?A(v,a.luce,.5):v,1,s)]),e(.03,.2,.03,0,212*o-.2,.04,a.crema),n(.2,0,212*o-.4,.06,a.luce,1,s)],stendardo:v=>[c(.9,.05,212*o-.05,.06,a.legnoScuro,0),e(.7,140*o,.06,0,72*o,.04,v),i(.35,.3,0,72*o-.3,.04,v,4,{r:[180,45,0],s:[1,1,.3]}),e(.3,.3,.02,0,140*o,.09,a.luce)].slice(0,4),vetrinetta:v=>[d(1.9,110,190,v,.3),e(1.7,80*o-.2,.03,0,110*o+.1,.31,"#8fe3ff"),e(1.7,.1,.24,0,140*o,.15,l(v,.2)),n(.14,-.5,110*o+.3,.15,a.rosso),e(.3,.3,.2,.1,110*o+.2,.15,a.luce),n(.14,.6,140*o+.3,.15,a.acqua),t(.1,.3,-.3,140*o+.1,.15,a.vaso,8,.15)].slice(0,6)}};_t();_t();_t();var Su=["#33984b","#5d2c28","#edab50","#1e6f50","#391f21","#bf6f4a","#c42430","#f6ca9f","#134c4c","#5ac54f","#e69c69","#657392","#1c121c","#f9e6cf","#2a2f4e","#3d3d3d","#0c2e44","#ed7614","#424c6e","#e07438","#1a1932","#ffa214","#f68187","#ffffff","#b4b4b4","#5d5d5d","#92a1b9","#858585","#8e8e8e","#8a4836","#c64524","#ea323c","#0e071b","#929292"],Cu={"cella-a":{v:"IAGA/wD/IAGA/wABIAGg/gABIAGA/wD/IAGg/gABIAGg/gD/IAGg/gABIAEA/gABIAEA/gD/IAGg/gABIAEA/gD/IAGg/gD/4P6g/gAB4P6A/wAB4P6A/wD/4P6g/gAB4P6A/wD/4P6g/gD/4P4A/gAB4P6g/gAB4P6g/gD/4P4A/gAB4P6g/gD/4P4A/gD/AAGg/wABAAGg/wD/AP+g/wD/AAGg/wABAP+g/wD/AP+g/wABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAGg/iABAAGA/yABAP+A/yABAAGg/iABAP+A/yABAP+g/iABAAEA/iABAAGg/iABAP+g/iABAAEA/iABAP+g/iABAP8A/iABAP+A/+D+AAGA/+D+AAGg/uD+AP+A/+D+AAGg/uD+AP+g/uD+AAGg/uD+AAEA/uD+AP8A/uD+AAGg/uD+AP8A/uD+AP+g/uD+AAGg/wD/AAGg/wABIAGA/wABAAGg/wD/IAGA/wABIAGA/wD/4P6A/wABAP+g/wABAP+g/wD/4P6A/wABAP+g/wD/4P6A/wD/AAGA/yABAAGg/wABAP+g/wABAAGA/yABAP+g/wABAP+A/yABAP+g/wD/AAGg/wD/AAGA/+D+AP+g/wD/AAGA/+D+AP+A/+D+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAGg/uD+AAGA/+D+IAGA/wD/AAGg/uD+IAGA/wD/IAGg/gD/IAEA/gD/AAEA/uD+AAGg/uD+IAEA/gD/AAGg/uD+IAGg/gD/AAGA/yABAAGg/iABIAGg/gABAAGA/yABIAGg/gABIAGA/wABAAGg/iABAAEA/iABIAEA/gABAAGg/iABIAEA/gABIAGg/gABAP+A/+D+AP+g/uD+4P6g/gD/AP+A/+D+4P6g/gD/4P6A/wD/AP+g/uD+AP8A/uD+4P4A/gD/AP+g/uD+4P4A/gD/4P6g/gD/AP+g/iABAP+A/yAB4P6A/wABAP+g/iAB4P6A/wAB4P6g/gAB4P4A/gABAP8A/iABAP+g/iAB4P4A/gABAP+g/iAB4P6g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAGg/wABAAGA/yABIAGA/wABAP+g/wAB4P6A/wABAP+A/yABAAGg/wD/IAGA/wD/AAGA/+D+AP+g/wD/AP+A/+D+4P6A/wD/QAHg/+D+QAHg/yABQAFg/yABQAHg/+D+QAFg/yABQAFg/+D+wP5g/yABwP7g/yABwP7g/+D+wP5g/yABwP7g/+D+wP5g/+D+IAEAACABIAEAAOD+4P4AAOD+IAEAACAB4P4AAOD+4P4AACAB4P5A/+D+IAFA/+D+IAFA/yAB4P5A/+D+IAFA/yAB4P5A/yABIAFg/0ABIAHg/0AB4P7g/0ABIAFg/0AB4P7g/0AB4P5g/0AB4P7g/8D+IAHg/8D+IAFg/8D+4P7g/8D+IAFg/8D+4P5g/8D+IAEAAOD+IAEAACABQAHg/yABIAEAAOD+QAHg/yABQAHg/+D+wP7g/yAB4P4AACAB4P4AAOD+wP7g/yAB4P4AAOD+wP7g/+D+IAHg/0ABIAEAACAB4P4AACABIAHg/0AB4P4AACAB4P7g/0AB4P4AAOD+IAEAAOD+IAHg/8D+4P4AAOD+IAHg/8D+4P7g/8D+QAFg/yABIAFA/yABIAFA/+D+QAFg/yABIAFA/+D+QAFg/+D+4P5A/+D+4P5A/yABwP5g/yAB4P5A/+D+wP5g/yABwP5g/+D+4P5A/yABIAFA/yABIAFg/0AB4P5A/yABIAFg/0AB4P5g/0ABIAFg/8D+IAFA/+D+4P5A/+D+IAFg/8D+4P5A/+D+4P5g/8D+QAFg/+D+IAFg/8D+IAHg/8D+QAFg/+D+IAHg/8D+QAHg/+D+IAHg/0ABIAFg/0ABQAFg/yABIAHg/0ABQAFg/yABQAHg/yAB4P7g/8D+4P5g/8D+wP5g/+D+4P7g/8D+wP5g/+D+wP7g/+D+wP5g/yAB4P5g/0AB4P7g/0ABwP5g/yAB4P7g/0ABwP7g/yABIAFA/yABQAFg/yABIAFg/0AB4P5A/yAB4P5g/0ABwP5g/yABIAFA/+D+IAFg/8D+QAFg/+D+4P5A/+D+wP5g/+D+4P5g/8D+IAEAACABIAHg/0ABQAHg/yAB4P4AACABwP7g/yAB4P7g/0ABIAEAAOD+QAHg/+D+IAHg/8D+4P4AAOD+4P7g/8D+wP7g/+D+",c:"CgoFBQoKBQUKCh0dCgoFBQoKBQUKCgoKCgoKCgUFBQUFBQUFCgoFBQoKBQUKCgUFCgoFBQUFBQUKCgoKAAAAAAkJCQkAAAAACQkJCQkJCQkAAAAAAAAAAAAAAAAAAAAAAAAAAAkJCQk="},"cella-b":{v:"IAGA/wD/IAGA/wABIAGg/gABIAGA/wD/IAGg/gABIAGg/gD/IAGg/gABIAEA/gABIAEA/gD/IAGg/gABIAEA/gD/IAGg/gD/4P6g/gAB4P6A/wAB4P6A/wD/4P6g/gAB4P6A/wD/4P6g/gD/4P4A/gAB4P6g/gAB4P6g/gD/4P4A/gAB4P6g/gD/4P4A/gD/AAGg/wABAAGg/wD/AP+g/wD/AAGg/wABAP+g/wD/AP+g/wABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAGg/iABAAGA/yABAP+A/yABAAGg/iABAP+A/yABAP+g/iABAAEA/iABAAGg/iABAP+g/iABAAEA/iABAP+g/iABAP8A/iABAP+A/+D+AAGA/+D+AAGg/uD+AP+A/+D+AAGg/uD+AP+g/uD+AAGg/uD+AAEA/uD+AP8A/uD+AAGg/uD+AP8A/uD+AP+g/uD+AAGg/wD/AAGg/wABIAGA/wABAAGg/wD/IAGA/wABIAGA/wD/4P6A/wABAP+g/wABAP+g/wD/4P6A/wABAP+g/wD/4P6A/wD/AAGA/yABAAGg/wABAP+g/wABAAGA/yABAP+g/wABAP+A/yABAP+g/wD/AAGg/wD/AAGA/+D+AP+g/wD/AAGA/+D+AP+A/+D+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAGg/uD+AAGA/+D+IAGA/wD/AAGg/uD+IAGA/wD/IAGg/gD/IAEA/gD/AAEA/uD+AAGg/uD+IAEA/gD/AAGg/uD+IAGg/gD/AAGA/yABAAGg/iABIAGg/gABAAGA/yABIAGg/gABIAGA/wABAAGg/iABAAEA/iABIAEA/gABAAGg/iABIAEA/gABIAGg/gABAP+A/+D+AP+g/uD+4P6g/gD/AP+A/+D+4P6g/gD/4P6A/wD/AP+g/uD+AP8A/uD+4P4A/gD/AP+g/uD+4P4A/gD/4P6g/gD/AP+g/iABAP+A/yAB4P6A/wABAP+g/iAB4P6A/wAB4P6g/gAB4P4A/gABAP8A/iABAP+g/iAB4P4A/gABAP+g/iAB4P6g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAGg/wABAAGA/yABIAGA/wABAP+g/wAB4P6A/wABAP+A/yABAAGg/wD/IAGA/wD/AAGA/+D+AP+g/wD/AP+A/+D+4P6A/wD/QAHg/+D+QAHg/yABQAFg/yABQAHg/+D+QAFg/yABQAFg/+D+wP5g/yABwP7g/yABwP7g/+D+wP5g/yABwP7g/+D+wP5g/+D+IAEAACABIAEAAOD+4P4AAOD+IAEAACAB4P4AAOD+4P4AACAB4P5A/+D+IAFA/+D+IAFA/yAB4P5A/+D+IAFA/yAB4P5A/yABIAFg/0ABIAHg/0AB4P7g/0ABIAFg/0AB4P7g/0AB4P5g/0AB4P7g/8D+IAHg/8D+IAFg/8D+4P7g/8D+IAFg/8D+4P5g/8D+IAEAAOD+IAEAACABQAHg/yABIAEAAOD+QAHg/yABQAHg/+D+wP7g/yAB4P4AACAB4P4AAOD+wP7g/yAB4P4AAOD+wP7g/+D+IAHg/0ABIAEAACAB4P4AACABIAHg/0AB4P4AACAB4P7g/0AB4P4AAOD+IAEAAOD+IAHg/8D+4P4AAOD+IAHg/8D+4P7g/8D+QAFg/yABIAFA/yABIAFA/+D+QAFg/yABIAFA/+D+QAFg/+D+4P5A/+D+4P5A/yABwP5g/yAB4P5A/+D+wP5g/yABwP5g/+D+4P5A/yABIAFA/yABIAFg/0AB4P5A/yABIAFg/0AB4P5g/0ABIAFg/8D+IAFA/+D+4P5A/+D+IAFg/8D+4P5A/+D+4P5g/8D+QAFg/+D+IAFg/8D+IAHg/8D+QAFg/+D+IAHg/8D+QAHg/+D+IAHg/0ABIAFg/0ABQAFg/yABIAHg/0ABQAFg/yABQAHg/yAB4P7g/8D+4P5g/8D+wP5g/+D+4P7g/8D+wP5g/+D+wP7g/+D+wP5g/yAB4P5g/0AB4P7g/0ABwP5g/yAB4P7g/0ABwP7g/yABIAFA/yABQAFg/yABIAFg/0AB4P5A/yAB4P5g/0ABwP5g/yABIAFA/+D+IAFg/8D+QAFg/+D+4P5A/+D+wP5g/+D+4P5g/8D+IAEAACABIAHg/0ABQAHg/yAB4P4AACABwP7g/yAB4P7g/0ABIAEAAOD+QAHg/+D+IAHg/8D+4P4AAOD+4P7g/8D+wP7g/+D+",c:"CgoFBQoKBQUKCh0dCgoFBQoKBQUKCgoKCgoKCgUFBQUFBQUFCgoFBQoKBQUKCgUFCgoFBQUFBQUKCgoKAwMDAwAAAAADAwMDAAAAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAA="},"cella-c":{v:"IAGA/wD/IAGA/wABIAGg/gABIAGA/wD/IAGg/gABIAGg/gD/IAGg/gABIAEA/gABIAEA/gD/IAGg/gABIAEA/gD/IAGg/gD/4P6g/gAB4P6A/wAB4P6A/wD/4P6g/gAB4P6A/wD/4P6g/gD/4P4A/gAB4P6g/gAB4P6g/gD/4P4A/gAB4P6g/gD/4P4A/gD/AAGg/wABAAGg/wD/AP+g/wD/AAGg/wABAP+g/wD/AP+g/wABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAGg/iABAAGA/yABAP+A/yABAAGg/iABAP+A/yABAP+g/iABAAEA/iABAAGg/iABAP+g/iABAAEA/iABAP+g/iABAP8A/iABAP+A/+D+AAGA/+D+AAGg/uD+AP+A/+D+AAGg/uD+AP+g/uD+AAGg/uD+AAEA/uD+AP8A/uD+AAGg/uD+AP8A/uD+AP+g/uD+AAGg/wD/AAGg/wABIAGA/wABAAGg/wD/IAGA/wABIAGA/wD/4P6A/wABAP+g/wABAP+g/wD/4P6A/wABAP+g/wD/4P6A/wD/AAGA/yABAAGg/wABAP+g/wABAAGA/yABAP+g/wABAP+A/yABAP+g/wD/AAGg/wD/AAGA/+D+AP+g/wD/AAGA/+D+AP+A/+D+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAGg/uD+AAGA/+D+IAGA/wD/AAGg/uD+IAGA/wD/IAGg/gD/IAEA/gD/AAEA/uD+AAGg/uD+IAEA/gD/AAGg/uD+IAGg/gD/AAGA/yABAAGg/iABIAGg/gABAAGA/yABIAGg/gABIAGA/wABAAGg/iABAAEA/iABIAEA/gABAAGg/iABIAEA/gABIAGg/gABAP+A/+D+AP+g/uD+4P6g/gD/AP+A/+D+4P6g/gD/4P6A/wD/AP+g/uD+AP8A/uD+4P4A/gD/AP+g/uD+4P4A/gD/4P6g/gD/AP+g/iABAP+A/yAB4P6A/wABAP+g/iAB4P6A/wAB4P6g/gAB4P4A/gABAP8A/iABAP+g/iAB4P4A/gABAP+g/iAB4P6g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAGg/wABAAGA/yABIAGA/wABAP+g/wAB4P6A/wABAP+A/yABAAGg/wD/IAGA/wD/AAGA/+D+AP+g/wD/AP+A/+D+4P6A/wD/QAHg/+D+QAHg/yABQAFg/yABQAHg/+D+QAFg/yABQAFg/+D+wP5g/yABwP7g/yABwP7g/+D+wP5g/yABwP7g/+D+wP5g/+D+IAEAACABIAEAAOD+4P4AAOD+IAEAACAB4P4AAOD+4P4AACAB4P5A/+D+IAFA/+D+IAFA/yAB4P5A/+D+IAFA/yAB4P5A/yABIAFg/0ABIAHg/0AB4P7g/0ABIAFg/0AB4P7g/0AB4P5g/0AB4P7g/8D+IAHg/8D+IAFg/8D+4P7g/8D+IAFg/8D+4P5g/8D+IAEAAOD+IAEAACABQAHg/yABIAEAAOD+QAHg/yABQAHg/+D+wP7g/yAB4P4AACAB4P4AAOD+wP7g/yAB4P4AAOD+wP7g/+D+IAHg/0ABIAEAACAB4P4AACABIAHg/0AB4P4AACAB4P7g/0AB4P4AAOD+IAEAAOD+IAHg/8D+4P4AAOD+IAHg/8D+4P7g/8D+QAFg/yABIAFA/yABIAFA/+D+QAFg/yABIAFA/+D+QAFg/+D+4P5A/+D+4P5A/yABwP5g/yAB4P5A/+D+wP5g/yABwP5g/+D+4P5A/yABIAFA/yABIAFg/0AB4P5A/yABIAFg/0AB4P5g/0ABIAFg/8D+IAFA/+D+4P5A/+D+IAFg/8D+4P5A/+D+4P5g/8D+QAFg/+D+IAFg/8D+IAHg/8D+QAFg/+D+IAHg/8D+QAHg/+D+IAHg/0ABIAFg/0ABQAFg/yABIAHg/0ABQAFg/yABQAHg/yAB4P7g/8D+4P5g/8D+wP5g/+D+4P7g/8D+wP5g/+D+wP7g/+D+wP5g/yAB4P5g/0AB4P7g/0ABwP5g/yAB4P7g/0ABwP7g/yABIAFA/yABQAFg/yABIAFg/0AB4P5A/yAB4P5g/0ABwP5g/yABIAFA/+D+IAFg/8D+QAFg/+D+4P5A/+D+wP5g/+D+4P5g/8D+IAEAACABIAHg/0ABQAHg/yAB4P4AACABwP7g/yAB4P7g/0ABIAEAAOD+QAHg/+D+IAHg/8D+4P4AAOD+4P7g/8D+wP7g/+D+",c:"CgoFBQoKBQUKCh0dCgoFBQoKBQUKCgoKCgoKCgUFBQUFBQUFCgoFBQoKBQUKCgUFCgoFBQUFBQUKCgoKCAgICAMDAwMICAgIAwMDAwMDAwMICAgICAgICAgICAgICAgICAgICAMDAwM="},"cella-terra":{v:"IAEAAAD/IAEAAAABIAEA/gABIAEAAAD/IAEA/gABIAEA/gD/4P4A/gAB4P4AAAAB4P4AAAD/4P4A/gAB4P4AAAD/4P4A/gD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAEA/iABAAEAACABAP8AACABAAEA/iABAP8AACABAP8A/iABAP8AAOD+AAEAAOD+AAEA/uD+AP8AAOD+AAEA/uD+AP8A/uD+AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+IAEA/gD/AAEA/uD+AAEAAOD+IAEA/gD/AAEAAOD+IAEAAAD/AAEAACABAAEA/iABIAEA/gABAAEAACABIAEA/gABIAEAAAABAP8AAOD+AP8A/uD+4P4A/gD/AP8AAOD+4P4A/gD/4P4AAAD/4P4A/gABAP8A/iABAP8AACAB4P4A/gABAP8AACAB4P4AAAABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAEgAAABAAEAACABIAEAAAABAP8gAAAB4P4AAAABAP8AACABAAEgAAD/IAEAAAD/AAEAAOD+AP8gAAD/AP8AAOD+4P4AAAD/",c:"BQUFBQoKHR0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU="},"cella-pietra":{v:"IAEAAEAAIAEAAAABIAEg/wABIAEAAEAAIAEg/wABIAEg/0AAIAEAACAAIAEAAEAAIAEg/0AAIAEAACAAIAEg/0AAIAEg/yAAIAEAAAD/IAEAACAAIAEg/yAAIAEAAAD/IAEg/yAAIAEg/wD/IAEg/wABIAEA/wABIAEA/wD/IAEg/wABIAEA/wD/IAEg/wD/IAEA/wABIAEA/gABIAEA/qD/IAEA/wABIAEA/qD/IAEA/6D/IAEA/6D/IAEA/qD/IAEA/oD/IAEA/6D/IAEA/oD/IAEA/4D/IAEA/4D/IAEA/oD/IAEA/gD/IAEA/4D/IAEA/gD/IAEA/wD/4P4AAMD/4P4AAAD/4P4g/wD/4P4AAMD/4P4g/wD/4P4g/8D/4P4AAOD/4P4AAMD/4P4g/8D/4P4AAOD/4P4g/8D/4P4g/+D/4P4g/wAB4P4AAAAB4P4AAOD/4P4g/wAB4P4AAOD/4P4g/+D/4P4A/wAB4P4g/wAB4P4g/wD/4P4A/wAB4P4g/wD/4P4A/wD/4P4A/wD/4P4A/gD/4P4A/mAA4P4A/wD/4P4A/mAA4P4A/2AA4P4A/2AA4P4A/mAA4P4A/oAA4P4A/2AA4P4A/oAA4P4A/4AA4P4A/gAB4P4A/wAB4P4A/4AA4P4A/gAB4P4A/4AA4P4A/oAAAAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABwP8AACABAP8AACABAP8g/yABwP8AACABAP8g/yABwP8g/yAB4P8AACABwP8AACABwP8g/yAB4P8AACABwP8g/yAB4P8g/yABAAEg/yABAAEAACAB4P8AACABAAEg/yAB4P8AACAB4P8g/yABAAEA/yABAAEg/yABAP8g/yABAAEA/yABAP8g/yABAP8A/yABAP8A/yABAP8A/iABYAAA/iABAP8A/yABYAAA/iABYAAA/yABYAAA/yABYAAA/iABgAAA/iABYAAA/yABgAAA/iABgAAA/yABAAEA/iABAAEA/yABgAAA/yABAAEA/iABgAAA/yABgAAA/iABQAAAAOD+AAEAAOD+AAEg/+D+QAAAAOD+AAEg/+D+QAAg/+D+IAAAAOD+QAAAAOD+QAAg/+D+IAAAAOD+QAAg/+D+IAAg/+D+AP8AAOD+IAAAAOD+IAAg/+D+AP8AAOD+IAAg/+D+AP8g/+D+AAEg/+D+AAEA/+D+AP8A/+D+AAEg/+D+AP8A/+D+AP8g/+D+AAEA/+D+AAEA/uD+oP8A/uD+AAEA/+D+oP8A/uD+oP8A/+D+oP8A/+D+oP8A/uD+gP8A/uD+oP8A/+D+gP8A/uD+gP8A/+D+gP8A/+D+gP8A/uD+AP8A/uD+gP8A/+D+AP8A/uD+AP8A/+D+AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/AP8gAMD/AP8gAAD/4P4AAAD/AP8gAMD/4P4AAAD/4P4AAMD/AP8gAOD/AP8gAMD/4P4AAMD/AP8gAOD/4P4AAMD/4P4AAOD/4P4AAAABAP8gAAABAP8gAOD/4P4AAAABAP8gAOD/4P4AAOD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/WAA4P4A/mAAAP/g/QD/4P4A/mAA4P4A/gD/AP/g/WAAAP/g/YAA4P4A/oAAAP/g/WAA4P4A/oAA4P4A/mAAAP/g/YAAAP/g/QAB4P4A/gABAP/g/YAA4P4A/gAB4P4A/oAAAP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+IAEA/gD/AAEA/uD+AAEAAOD+IAEA/gD/AAEAAOD+IAEAAAD/AAEAACABAAEA/iABIAEA/gABAAEAACABIAEA/gABIAEAAAABAP8AAOD+AP8g/+D+4P4g/wD/AP8AAOD+4P4g/wD/4P4AAAD/AP8g/+D+AP8A/+D+4P4A/wD/AP8g/+D+4P4A/wD/4P4g/wD/AP8A/+D+AP8A/uD+4P4A/gD/AP8A/+D+4P4A/gD/4P4A/wD/AP8g/yABAP8AACAB4P4AAAABAP8g/yAB4P4AAAAB4P4g/wABAP8A/yABAP8g/yAB4P4g/wABAP8A/yAB4P4g/wAB4P4A/wAB4P4A/gABAP8A/iABAP8A/yAB4P4A/gABAP8A/yAB4P4A/wABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAEgAAABAAEAACABIAEAAAABAP8gAAAB4P4AAAABAP8AACABAAEgAAD/IAEAAAD/AAEAAOD+AP8gAAD/AP8AAOD+4P4AAAD/",c:"CwsSEgsLEhILCxISCwsLCxISCwsSEgsLEhILCxoaEhILCxISCwsSEgsLEhILCwsLEhILCxISCwsSEgsLCwsLCxISCwsLCwsLCwsLCxISCwsLCwsLCwsLCwsLEhILCwsLEhILCwsLCwsLCwsL"},"cella-sabbia":{v:"IAEAAAD/IAEAAAABIAHg/wABIAEAAAD/IAHg/wABIAHg/wD/IAHg/wABIAFg/wABIAFg/wD/IAHg/wABIAFg/wD/IAHg/wD/IAFg/wABIAEg/wABIAEg/wD/IAFg/wABIAEg/wD/IAFg/wD/IAEg/wABIAHg/gABIAHg/qAAIAEg/wABIAHg/qAAIAEg/6AAIAEg/6AAIAHg/qAAIAHg/mAAIAEg/6AAIAHg/mAAIAEg/2AAIAEg/2AAIAHg/mAAIAHg/qD/IAEg/2AAIAHg/qD/IAEg/6D/IAEg/6D/IAHg/qD/IAHg/mD/IAEg/6D/IAHg/mD/IAEg/2D/IAEg/2D/IAHg/mD/IAHg/gD/IAEg/2D/IAHg/gD/IAEg/wD/IAHg/gABIAEA/gABIAEA/gD/IAHg/gABIAEA/gD/IAHg/gD/4P7g/wAB4P4AAAAB4P4AAAD/4P7g/wAB4P4AAAD/4P7g/wD/4P5g/wAB4P7g/wAB4P7g/wD/4P5g/wAB4P7g/wD/4P5g/wD/4P4g/wAB4P5g/wAB4P5g/wD/4P4g/wAB4P5g/wD/4P4g/wD/4P4g/wD/4P7g/gD/4P7g/mD/4P4g/wD/4P7g/mD/4P4g/2D/4P4g/2D/4P7g/mD/4P7g/qD/4P4g/2D/4P7g/qD/4P4g/6D/4P4g/6D/4P7g/qD/4P7g/mAA4P4g/6D/4P7g/mAA4P4g/2AA4P4g/2AA4P7g/mAA4P7g/qAA4P4g/2AA4P7g/qAA4P4g/6AA4P7g/gAB4P4g/wAB4P4g/6AA4P7g/gAB4P4g/6AA4P7g/qAA4P4A/gAB4P7g/gAB4P7g/gD/4P4A/gAB4P7g/gD/4P4A/gD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/QD/AAHg/QD/AAHg/QABAP/g/QD/AAHg/QABAP/g/QABAAHg/yABAAEAACABAP8AACABAAHg/yABAP8AACABAP/g/yABAAFg/yABAAHg/yABAP/g/yABAAFg/yABAP/g/yABAP9g/yABAAEg/yABAAFg/yABAP9g/yABAAEg/yABAP9g/yABAP8g/yABAP8g/yABAP/g/iABYP/g/iABAP8g/yABYP/g/iABYP8g/yABYP8g/yABYP/g/iABoP/g/iABYP8g/yABoP/g/iABoP8g/yABoP8g/yABoP/g/iABYADg/iABoP8g/yABYADg/iABYAAg/yABYAAg/yABYADg/iABoADg/iABYAAg/yABoADg/iABoAAg/yABAAHg/iABAAEg/yABoAAg/yABAAHg/iABoAAg/yABoADg/iABAAEA/iABAAHg/iABAP/g/iABAAEA/iABAP/g/iABAP8A/iABAP8AAOD+AAEAAOD+AAHg/+D+AP8AAOD+AAHg/+D+AP/g/+D+AAHg/+D+AAFg/+D+AP9g/+D+AAHg/+D+AP9g/+D+AP/g/+D+AAFg/+D+AAEg/+D+AP8g/+D+AAFg/+D+AP8g/+D+AP9g/+D+AAEg/+D+AAHg/uD+oADg/uD+AAEg/+D+oADg/uD+oAAg/+D+oAAg/+D+oADg/uD+YADg/uD+oAAg/+D+YADg/uD+YAAg/+D+YAAg/+D+YADg/uD+oP/g/uD+YAAg/+D+oP/g/uD+oP8g/+D+oP8g/+D+oP/g/uD+YP/g/uD+oP8g/+D+YP/g/uD+YP8g/+D+YP8g/+D+YP/g/uD+AP/g/uD+YP8g/+D+AP/g/uD+AP8g/+D+AAHg/uD+AAEA/uD+AP8A/uD+AAHg/uD+AP8A/uD+AP/g/uD+AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+IAEA/gABAAHg/QABAAHg/QD/IAEA/gABAAHg/QD/IAEA/gD/AP/g/QD/AP/g/QAB4P4A/gABAP/g/QD/4P4A/gAB4P4A/gD/AP/g/QABAAHg/QABAAEA/iABAP/g/QABAAEA/iABAP8A/iABAAEA/uD+AAHg/QD/AP/g/QD/AAEA/uD+AP/g/QD/AP8A/uD+AAHg/+D+AAEAAOD+IAEAAAD/AAHg/+D+IAEAAAD/IAHg/wD/AAFg/+D+AAHg/+D+IAHg/wD/AAFg/+D+IAHg/wD/IAFg/wD/AAEg/+D+AAFg/+D+IAFg/wD/AAEg/+D+IAFg/wD/IAEg/wD/AAHg/uD+AAEg/+D+IAEg/wD/AAHg/uD+IAEg/wD/IAHg/gD/IAEA/gD/AAEA/uD+AAHg/uD+IAEA/gD/AAHg/uD+IAHg/gD/AAEAACABAAHg/yABIAHg/wABAAEAACABIAHg/wABIAEAAAABAAHg/yABAAFg/yABIAFg/wABAAHg/yABIAFg/wABIAHg/wABAAFg/yABAAEg/yABIAEg/wABAAFg/yABIAEg/wABIAFg/wABAAEg/yABAAHg/iABIAHg/gABAAEg/yABIAHg/gABIAEg/wABAAHg/iABAAEA/iABIAEA/gABAAHg/iABIAEA/gABIAHg/gABAP8AAOD+AP/g/+D+4P7g/wD/AP8AAOD+4P7g/wD/4P4AAAD/AP/g/+D+AP9g/+D+4P5g/wD/AP/g/+D+4P5g/wD/4P7g/wD/AP9g/+D+AP8g/+D+4P4g/wD/AP9g/+D+4P4g/wD/4P5g/wD/AP8g/+D+AP/g/uD+4P7g/gD/AP8g/+D+4P7g/gD/4P4g/wD/AP/g/uD+AP8A/uD+4P4A/gD/AP/g/uD+4P4A/gD/4P7g/gD/AP/g/yABAP8AACAB4P4AAAABAP/g/yAB4P4AAAAB4P7g/wABAP9g/yABAP/g/yAB4P7g/wABAP9g/yAB4P7g/wAB4P5g/wABAP8g/yABAP9g/yAB4P5g/wABAP8g/yAB4P5g/wAB4P4g/wABAP/g/iABAP8g/yAB4P4g/wABAP/g/iAB4P4g/wAB4P7g/gAB4P4A/gABAP8A/iABAP/g/iAB4P4A/gABAP/g/iAB4P7g/gABAAHg/QABIAEA/gABAAEA/iABAP/g/QABAP8A/iAB4P4A/gABAAHg/QD/AAEA/uD+IAEA/gD/AP/g/QD/4P4A/gD/AP8A/uD+AAEgAAABAAEAACABIAEAAAABAP8gAAAB4P4AAAABAP8AACABAAEgAAD/IAEAAAD/AAEAAOD+AP8gAAD/AP8AAOD+4P4AAAD/",c:"BwcNDQcHDQ0HBw0NBwcNDQcHBwcNDQcHDQ0HBw0NBwcNDQcHDQ0KCgcHDQ0HBw0NBwcNDQcHDQ0HBwcHDQ0HBw0NBwcNDQcHDQ0HBwcHBwcHBwcHBwcHBwcHBwcHBw0NBwcNDQcHBwcNDQcHDQ0HBwcHDQ0HBw0NBwcHBw0NBwcNDQcHBwcHBwcHBwc="},albero:{v:"zf4AAP3/X/8AAKL//P8AAP3/zf4AAP3//P9lAP3/X/8AAKL/X/8AAKL/Zf8AAPf+/P8AAP3/X/8AAKL//P9lAP3/Zf8AAPf+Zf8AAPf+/P8AAEf//P8AAP3/Zf8AAPf+/P9lAP3//P8AAEf//P8AAEf/kwAAAPf+/P8AAP3//P8AAEf//P9lAP3/kwAAAPf+kwAAAPf+mQAAAKL//P8AAP3/kwAAAPf+/P9lAP3/mQAAAKL/mQAAAKL/KwEAAP3//P8AAP3/mQAAAKL//P9lAP3/KwEAAP3/KwEAAP3/mQAAAFgA/P8AAP3/KwEAAP3//P9lAP3/mQAAAFgAmQAAAFgAkwAAAAMB/P8AAP3/mQAAAFgA/P9lAP3/kwAAAAMBkwAAAAMB/P8AALMA/P8AAP3/kwAAAAMB/P9lAP3//P8AALMA/P8AALMAZf8AAAMB/P8AAP3//P8AALMA/P9lAP3/Zf8AAAMBZf8AAAMBX/8AAFgA/P8AAP3/Zf8AAAMB/P9lAP3/X/8AAFgAX/8AAFgAzf4AAP3//P8AAP3/X/8AAFgA/P9lAP3/zf4AAP3/tf8AALb//P8AAJj//P8AAP3/l/8AAP3/tf8AALb//P8AAP3/tf8AAEQAl/8AAP3//P8AAP3//P8AAGIAtf8AAEQA/P8AAP3/QwAAAEQA/P8AAGIA/P8AAP3/YQAAAP3/QwAAAEQA/P8AAP3/QwAAALb/YQAAAP3//P8AAP3//P8AAJj/QwAAALb//P8AAP3//P9hAZj/tf9hAbb//P9hAf3/tf9hAbb/l/9hAf3//P9hAf3/l/9hAf3/tf9hAUQA/P9hAf3/tf9hAUQA/P9hAWIA/P9hAf3//P9hAWIAQwBhAUQA/P9hAf3/QwBhAUQAYQBhAf3//P9hAf3/YQBhAf3/QwBhAbb//P9hAf3/QwBhAbb//P9hAZj//P9hAf3//P8AAJj/tf8AALb/tf8AALb/tf8AALb/l/8AAP3/l/8AAP3/l/8AAP3/tf8AAEQAtf8AAEQAtf8AAEQA/P8AAGIA/P8AAGIA/P8AAGIAQwAAAEQAQwAAAEQAQwAAAEQAYQAAAP3/YQAAAP3/YQAAAP3/QwAAALb/QwAAALb/QwAAALb//P8AAJj//P8AAJj//P8AAJj/tf8AALb/tf9hAbb//P8AAJj/tf9hAbb//P9hAZj/tf8AALb/l/8AAP3/l/9hAf3/tf8AALb/l/9hAf3/tf9hAbb/l/8AAP3/tf8AAEQAtf9hAUQAl/8AAP3/tf9hAUQAl/9hAf3/tf8AAEQA/P8AAGIA/P9hAWIAtf8AAEQA/P9hAWIAtf9hAUQA/P8AAGIAQwAAAEQAQwBhAUQA/P8AAGIAQwBhAUQA/P9hAWIAQwAAAEQAYQAAAP3/YQBhAf3/QwAAAEQAYQBhAf3/QwBhAUQAYQAAAP3/QwAAALb/QwBhAbb/YQAAAP3/QwBhAbb/YQBhAf3/QwAAALb//P8AAJj//P9hAZj/QwAAALb//P9hAZj/QwBhAbb//P9hAZj/tf9hAbb/tf9hAbb/tf9hAbb/l/9hAf3/l/9hAf3/l/9hAf3/tf9hAUQAtf9hAUQAtf9hAUQA/P9hAWIA/P9hAWIA/P9hAWIAQwBhAUQAQwBhAUQAQwBhAUQAYQBhAf3/YQBhAf3/YQBhAf3/QwBhAbb/QwBhAbb/QwBhAbb//P9hAZj//P9hAZj/nAFTAp0B/P9TAkoCowAXAnsC/P9TAkoC/P8XAsACowAXAnsCowCQAo8B/P+QAtQB/P9TAkoCnAFTAp0BSQGQAkoBowCQAo8B8AEXAvEBnAFTAp0BSQEXAjYCnAFTAp0BowAXAnsCSQEXAjYCowCQAo8B/P9TAkoCnAFTAp0B/P+5AdQBowAXAnsC/P8XAsACSQG5AUoB8AEXAvEBSQEXAjYCSQEXAjYCowAXAnsCSQG5AUoBowBbAaQA/P+5AdQB/P9bAekAowAXAnsCowBbAaQASQG5AUoB/P/8AP3/owBbAaQA/P9bAekA/P+5AdQBowBbAaQAowAXAnsC/P+QAtQBr/6QAkoBXP5TAp0BAv8XAlgCXP5TAp0BCf4XAvEBXP5TAp0BAv8XAlgC/P9TAkoC/P9TAkoCAv8XAlgC/P8XAsAC/P+QAtQBXP5TAp0B/P9TAkoCr/65AUoB/P+5AdQBAv8XAlgCAv8XAlgC/P+5AdQB/P8XAsACr/65AUoBAv8XAlgCCf4XAvEB/P9bAekAr/65AUoBVv9bAaQAVv9bAaQA/P/8AP3//P9bAekA/P+5AdQBr/65AUoB/P9bAekAxP0XAkoBr/1TAv3/f/0XAqQAr/1TAv3/Ov0XAv3/f/0XAqQAav6QAqQAJf6QAv3/r/1TAv3/XP5TAp0Br/6QAkoBav6QAqQACf4XAvEBXP5TAp0BxP0XAkoBXP5TAp0Br/1TAv3/xP0XAkoBav6QAqQAr/1TAv3/XP5TAp0BJf65Af3/f/0XAqQAOv0XAv3/r/65AUoBCf4XAvEBxP0XAkoBxP0XAkoBf/0XAqQAr/65AUoBVv9bAaQAJf65Af3/Ef9bAf3/Vv9bAaQAr/65AUoBf/0XAqQAEf9bAf3//P/8AP3/Vv9bAaQAJf65Af3/Vv9bAaQAf/0XAqQAof0XAgP/r/1TAv3/Cf4XAgn+r/6QArD+Cf4XAgn+r/1TAv3/r/6QArD+r/1TAv3/Jf6QAv3/of0XAgP/Ov0XAv3/r/1TAv3/r/65AbD+Jf65Af3/of0XAgP/of0XAgP/Jf65Af3/Ov0XAv3/r/65AbD+of0XAgP/Cf4XAgn+Ef9bAf3/r/65AbD+Vv9bAVf/Vv9bAVf//P/8AP3/Ef9bAf3/Jf65Af3/r/65AbD+Ef9bAf3/Av8XAqL9/P+QAib+/P8XAjv9Cf4XAgn+r/6QArD+Av8XAqL9/P+QAib+Av8XAqL9r/6QArD+Av8XAqL9/P8XAjv9/P+5ASb+Av8XAqL9r/65AbD+Cf4XAgn+r/65AbD+Av8XAqL9/P+5ASb+Vv9bAVf//P9bARL//P/8AP3/Vv9bAVf/r/65AbD+/P+5ASb+/P9bARL/Vv9bAVf//P+5ASb+9gAXAqL9SQGQArD+8AEXAgn+/P8XAjv9/P+QAib+9gAXAqL9SQGQArD+9gAXAqL9/P+QAib+SQG5AbD+/P+5ASb+9gAXAqL99gAXAqL9/P+5ASb+/P8XAjv9SQG5AbD+9gAXAqL98AEXAgn+/P9bARL/SQG5AbD+owBbAVf/owBbAVf//P/8AP3//P9bARL//P+5ASb+SQG5AbD+/P9bARL/VwIXAgP/0wGQAv3/vwIXAv3/8AEXAgn+SQGQArD+VwIXAgP/0wGQAv3/VwIXAgP/SQGQArD+VwIXAgP/vwIXAv3/0wG5Af3/VwIXAgP/SQG5AbD+8AEXAgn+SQG5AbD+VwIXAgP/0wG5Af3/owBbAVf/6ABbAf3//P/8AP3/owBbAVf/SQG5AbD+0wG5Af3/6ABbAf3/owBbAVf/0wG5Af3/SQG5AUoB0wG5Af3/VwIXAvcAVwIXAvcA0wG5Af3/vwIXAv3/SQG5AUoBVwIXAvcA8AEXAvEB6ABbAf3/SQG5AUoBowBbAaQAowBbAaQA/P/8AP3/6ABbAf3/0wG5Af3/SQG5AUoB6ABbAf3/0wGQAv3/SQGQAkoBnAFTAp0BVwIXAvcAnAFTAp0B8AEXAvEBVwIXAvcAvwIXAv3/nAFTAp0B0wGQAv3/nAFTAp0BvwIXAv3/owCQAo8Bav6QAqQAr/6QAkoBJf6QAv3/av6QAqQAr/6QArD+av6QAqQA/P+QAib+r/6QArD+/P+QAtQBowCQAo8Br/6QAkoB0wGQAv3/owCQAo8BSQGQAkoBav6QAqQASQGQArD+/P+QAib+0wGQAv3/SQGQArD+owCQAo8BowCQAo8BSQGQArD+av6QAqQAQwFQA0QB/P9QA8wBfwATA/IB/P9QA8wB/P8TAygCfwATA/IBfwCMAzkB/P+MA28B/P9QA8wBQwFQA0QBAgGMAwMBfwCMAzkBhQETA4YBQwFQA0QBAgETA7wBQwFQA0QBfwATA/IBAgETA7wBfwCMAzkB/P9QA8wBQwFQA0QB/P+1Am8BfwATA/IB/P8TAygCAgG1AgMBhQETA4YBAgETA7wBAgETA7wBfwATA/IBAgG1AgMBfwBXAoAA/P+1Am8B/P9XArYAfwATA/IBfwBXAoAAAgG1AgMB/P/5Af3/fwBXAoAA/P9XArYA/P+1Am8BfwBXAoAAfwATA/IB/P+MA28B9v6MAwMBtf5QA0QBOP8TA9cBtf5QA0QBdP4TA4YBtf5QA0QBOP8TA9cB/P9QA8wB/P9QA8wBOP8TA9cB/P8TAygC/P+MA28Btf5QA0QB/P9QA8wB9v61AgMB/P+1Am8BOP8TA9cBOP8TA9cB/P+1Am8B/P8TAygC9v61AgMBOP8TA9cBdP4TA4YB/P9XArYA9v61AgMBef9XAoAAef9XAoAA/P/5Af3//P9XArYA/P+1Am8B9v61AgMB/P9XArYAPf4TAwMBLf5QA/3/B/4TA4AALf5QA/3/0f0TA/3/B/4TA4AAwP6MA4AAiv6MA/3/Lf5QA/3/tf5QA0QB9v6MAwMBwP6MA4AAdP4TA4YBtf5QA0QBPf4TAwMBtf5QA0QBLf5QA/3/Pf4TAwMBwP6MA4AALf5QA/3/tf5QA0QBiv61Av3/B/4TA4AA0f0TA/3/9v61AgMBdP4TA4YBPf4TAwMBPf4TAwMBB/4TA4AA9v61AgMBrv6nAhEAiv61Av3/Q/9XAv3/rv6nAhEAQ/9XAv3/Rf9XAgIAUP9eAkEARv9XAgUAX/9XAkAA9v6HAioA8f6DAgoARf9XAgIA9v6HAioARf9XAgIARv9XAgUA9v6HAioARv9XAgUAS/9aAiIA3/6TAiwArv6nAhEA8f6DAgoA3/6TAiwA8f6DAgoA9v6HAioAGP98AkYAE/94AicAS/9aAiIAGP98AkYAS/9aAiIAUP9eAkEAEf+AAkcA3/6TAiwAE/94AicAEf+AAkcAE/94AicAGP98AkYAVf9jAmAAUP9eAkEAX/9XAkAAVf9jAmAAX/9XAkAAa/9XAl4AQ/9sAmIAEf+AAkcAUP9eAkEAQ/9sAmIAUP9eAkEAVf9jAmAAef9XAoAAQ/9sAmIAa/9XAl4Aef9XAoAA9v61AgMBB/4TA4AAQ/9XAv3/ff86Av3/Rf9XAgIAff86Av3//P/5Af3/w/8iAjYAff86Av3/w/8iAjYAbP9QAj4Aff86Av3/bP9QAj4AYv9IAgAAYv9IAgAAbP9QAj4AX/9XAkAAYv9IAgAAX/9XAkAARv9XAgUAYv9IAgAARv9XAgUARv9WAgIARv9WAgIARv9XAgUARf9XAgIAw/8iAjYAoP87AlkAa/9XAl4Aw/8iAjYAa/9XAl4AX/9XAkAAoP87AlkAkP9HAmkAjv9FAlsAjv9FAlsAkP9HAmkAff9UAnwAjv9FAlsAff9UAnwAeP9XAn0Ajv9FAlsAeP9XAn0Adf9XAncAjv9FAlsAdf9XAncAcf9UAl4Acf9UAl4Adf9XAncAa/9XAl4Aff9UAnwAef9XAoAAeP9XAn0Aiv61Av3/ef9XAoAAB/4TA4AAIv4TAzn/Lf5QA/3/dP4TA3X+9v6MA/f+dP4TA3X+Lf5QA/3/9v6MA/f+Lf5QA/3/iv6MA/3/Iv4TAzn/0f0TA/3/Lf5QA/3/9v61Avf+iv61Av3/Iv4TAzn/Iv4TAzn/iv61Av3/0f0TA/3/9v61Avf+Iv4TAzn/dP4TA3X+Q/9XAv3/9v61Avf+ef9XAnr/ef9XAnr//P/5Af3/Q/9XAv3/iv61Av3/9v61Avf+Q/9XAv3/OP8TAyP+/P+MA4v+/P8TA9L9dP4TA3X+9v6MA/f+OP8TAyP+/P+MA4v+OP8TAyP+9v6MA/f+OP8TAyP+/P8TA9L9/P+1Aov+OP8TAyP+9v61Avf+dP4TA3X+9v61Avf+OP8TAyP+/P+1Aov+ef9XAnr//P9XAkT//P/5Af3/ef9XAnr/9v61Avf+/P+1Aov+/P9XAkT/ef9XAnr//P+1Aov+wAATAyP+AgGMA/f+hQETA3X+/P8TA9L9/P+MA4v+wAATAyP+AgGMA/f+wAATAyP+/P+MA4v+AgG1Avf+/P+1Aov+wAATAyP+wAATAyP+/P+1Aov+/P8TA9L9AgG1Avf+wAATAyP+hQETA3X+/P9XAkT/AgG1Avf+fwBXAnr/fwBXAnr//P/5Af3//P9XAkT//P+1Aov+AgG1Avf+/P9XAkT/1gETAzn/bgGMA/3/JwITA/3/hQETA3X+AgGMA/f+1gETAzn/bgGMA/3/1gETAzn/AgGMA/f+1gETAzn/JwITA/3/bgG1Av3/1gETAzn/AgG1Avf+hQETA3X+AgG1Avf+1gETAzn/bgG1Av3/fwBXAnr/tQBXAv3//P/5Af3/fwBXAnr/AgG1Avf+bgG1Av3/tQBXAv3/fwBXAnr/bgG1Av3/AgG1AgMBbgG1Av3/1gETA8EA1gETA8EAbgG1Av3/JwITA/3/AgG1AgMB1gETA8EAhQETA4YBtQBXAv3/AgG1AgMBfwBXAoAAfwBXAoAA/P/5Af3/tQBXAv3/bgG1Av3/AgG1AgMBtQBXAv3/bgGMA/3/AgGMAwMBQwFQA0QB1gETA8EAQwFQA0QBhQETA4YB1gETA8EAJwITA/3/QwFQA0QBbgGMA/3/QwFQA0QBJwITA/3/fwCMAzkBwP6MA4AA9v6MAwMBiv6MA/3/wP6MA4AA9v6MA/f+wP6MA4AA/P+MA4v+9v6MA/f+/P+MA28BfwCMAzkB9v6MAwMBbgGMA/3/fwCMAzkBAgGMAwMBwP6MA4AAAgGMA/f+/P+MA4v+bgGMA/3/AgGMA/f+fwCMAzkBfwCMAzkBAgGMA/f+wP6MA4AACAFUBAkB/P9UBHgBZwAfBJcB/P9UBHgB/P8fBMMBZwAfBJcBZwCJBP8A/P+JBCwB/P9UBHgBCAFUBAkB0gCJBNMAZwCJBP8APQEfBD4BCAFUBAkB0gAfBGsBCAFUBAkBZwAfBJcB0gAfBGsBZwCJBP8A/P9UBHgBCAFUBAkB/P/MAywBZwAfBJcB/P8fBMMB0gDMA9MAPQEfBD4B0gAfBGsB0gAfBGsBZwAfBJcB0gDMA9MAZwB6A2gA/P/MAywB/P96A5QAZwAfBJcBZwB6A2gA0gDMA9MA/P8nA/3/ZwB6A2gA/P96A5QA/P/MAywBZwB6A2gAZwAfBJcB/P+JBCwBJv+JBNMA8P5UBAkBW/8fBIEB8P5UBAkBu/4fBD4B8P5UBAkBW/8fBIEB/P9UBHgB/P9UBHgBW/8fBIEB/P8fBMMB/P+JBCwB8P5UBAkB/P9UBHgBJv/MA9MA/P/MAywBW/8fBIEBW/8fBIEB/P/MAywB/P8fBMMBJv/MA9MAW/8fBIEBu/4fBD4B/P96A5QAJv/MA9MAkf96A2gAkf96A2gA/P8nA/3//P96A5QA/P/MAywBJv/MA9MA/P96A5QAj/4fBNMAgv5UBP3/Yv4fBGgAgv5UBP3/Nv4fBP3/Yv4fBGgA+v6JBGgAzf6JBP3/gv5UBP3/8P5UBAkBJv+JBNMA+v6JBGgAu/4fBD4B8P5UBAkBj/4fBNMA8P5UBAkBgv5UBP3/j/4fBNMA+v6JBGgAgv5UBP3/8P5UBAkBzf7MA/3/Yv4fBGgANv4fBP3/Jv/MA9MAu/4fBD4Bj/4fBNMAj/4fBNMAYv4fBGgAJv/MA9MAkf96A2gAzf7MA/3/Zf96A/3/kf96A2gAJv/MA9MAYv4fBGgAZf96A/3//P8nA/3/kf96A2gAzf7MA/3/kf96A2gAYv4fBGgAeP4fBFz/gv5UBP3/u/4fBLz+Jv+JBCf/u/4fBLz+gv5UBP3/Jv+JBCf/gv5UBP3/zf6JBP3/eP4fBFz/Nv4fBP3/gv5UBP3/Jv/MAyf/zf7MA/3/eP4fBFz/eP4fBFz/zf7MA/3/Nv4fBP3/Jv/MAyf/eP4fBFz/u/4fBLz+Zf96A/3/Jv/MAyf/kf96A5L/kf96A5L//P8nA/3/Zf96A/3/zf7MA/3/Jv/MAyf/Zf96A/3/W/8fBHn+/P+JBM7+/P8fBDf+u/4fBLz+Jv+JBCf/W/8fBHn+/P+JBM7+W/8fBHn+Jv+JBCf/W/8fBHn+/P8fBDf+/P/MA87+W/8fBHn+Jv/MAyf/u/4fBLz+Jv/MAyf/W/8fBHn+/P/MA87+kf96A5L//P96A2b//P8nA/3/kf96A5L/Jv/MAyf//P/MA87+/P96A2b/kf96A5L//P/MA87+nQAfBHn+0gCJBCf/PQEfBLz+/P8fBDf+/P+JBM7+nQAfBHn+0gCJBCf/nQAfBHn+/P+JBM7+0gDMAyf//P/MA87+nQAfBHn+nQAfBHn+/P/MA87+/P8fBDf+0gDMAyf/nQAfBHn+PQEfBLz+/P96A2b/0gDMAyf/ZwB6A5L/ZwB6A5L//P8nA/3//P96A2b//P/MA87+0gDMAyf//P96A2b/gAEfBFz/KwGJBP3/wgEfBP3/PQEfBLz+0gCJBCf/gAEfBFz/KwGJBP3/gAEfBFz/0gCJBCf/gAEfBFz/wgEfBP3/KwHMA/3/gAEfBFz/0gDMAyf/PQEfBLz+0gDMAyf/gAEfBFz/KwHMA/3/ZwB6A5L/kwB6A/3//P8nA/3/ZwB6A5L/0gDMAyf/KwHMA/3/kwB6A/3/ZwB6A5L/KwHMA/3/0gDMA9MAKwHMA/3/gAEfBJ4AgAEfBJ4AKwHMA/3/wgEfBP3/0gDMA9MAgAEfBJ4APQEfBD4BkwB6A/3/0gDMA9MAZwB6A2gAZwB6A2gA/P8nA/3/kwB6A/3/KwHMA/3/0gDMA9MAkwB6A/3/KwGJBP3/0gCJBNMACAFUBAkBgAEfBJ4ACAFUBAkBPQEfBD4BgAEfBJ4AwgEfBP3/CAFUBAkBKwGJBP3/CAFUBAkBwgEfBP3/ZwCJBP8A+v6JBGgAJv+JBNMAzf6JBP3/+v6JBGgAJv+JBCf/+v6JBGgA/P+JBM7+Jv+JBCf//P+JBCwBZwCJBP8AJv+JBNMAKwGJBP3/ZwCJBP8A0gCJBNMA+v6JBGgA0gCJBCf//P+JBM7+KwGJBP3/0gCJBCf/ZwCJBP8AZwCJBP8A0gCJBCf/+v6JBGgASv++BK8A/P++BPkAtf/zBA4B/P++BPkA/P/zBCwBtf/zBA4Btf+JBKkA/P+JBMcA/P++BPkASv++BK8Abf+JBIwAtf+JBKkAJv/zBNMASv++BK8Abf/zBPEASv++BK8Atf/zBA4Bbf/zBPEAtf+JBKkA/P++BPkASv++BK8A/P9FBccAtf/zBA4B/P/zBCwBbf9FBYwAJv/zBNMAbf/zBPEAbf/zBPEAtf/zBA4Bbf9FBYwAtf+XBUQA/P9FBccA/P+XBWIAtf/zBA4Btf+XBUQAbf9FBYwA/P/qBf3/tf+XBUQA/P+XBWIA/P9FBccAtf+XBUQAtf/zBA4B/P+JBMcAiwCJBIwArgC+BK8AZwDzBP8ArgC+BK8A0gDzBNMArgC+BK8AZwDzBP8A/P++BPkA/P++BPkAZwDzBP8A/P/zBCwB/P+JBMcArgC+BK8A/P++BPkAiwBFBYwA/P9FBccAZwDzBP8AZwDzBP8A/P9FBccA/P/zBCwBiwBFBYwAZwDzBP8A0gDzBNMA/P+XBWIAiwBFBYwAQwCXBUQAQwCXBUQA/P/qBf3//P+XBWIA/P9FBccAiwBFBYwA/P+XBWIA8ADzBIwA+AC+BP3/DQHzBEQA+AC+BP3/KwHzBP3/DQHzBEQAqACJBEQAxgCJBP3/+AC+BP3/rgC+BK8AiwCJBIwAqACJBEQA0gDzBNMArgC+BK8A8ADzBIwArgC+BK8A+AC+BP3/8ADzBIwAqACJBEQA+AC+BP3/rgC+BK8AxgBFBf3/DQHzBEQAKwHzBP3/iwBFBYwA0gDzBNMA8ADzBIwA8ADzBIwADQHzBEQAiwBFBYwAQwCXBUQAxgBFBf3/YQCXBf3/QwCXBUQAiwBFBYwADQHzBEQAYQCXBf3//P/qBf3/QwCXBUQAxgBFBf3/QwCXBUQADQHzBEQA/gDzBJL/+AC+BP3/0gDzBCf/iwCJBG7/0gDzBCf/+AC+BP3/iwCJBG7/+AC+BP3/xgCJBP3//gDzBJL/KwHzBP3/+AC+BP3/iwBFBW7/xgBFBf3//gDzBJL//gDzBJL/xgBFBf3/KwHzBP3/iwBFBW7//gDzBJL/0gDzBCf/YQCXBf3/iwBFBW7/QwCXBbb/QwCXBbb//P/qBf3/YQCXBf3/xgBFBf3/iwBFBW7/YQCXBf3/ZwDzBPv+/P+JBDP//P/zBM7+0gDzBCf/iwCJBG7/ZwDzBPv+/P+JBDP/ZwDzBPv+iwCJBG7/ZwDzBPv+/P/zBM7+/P9FBTP/ZwDzBPv+iwBFBW7/0gDzBCf/iwBFBW7/ZwDzBPv+/P9FBTP/QwCXBbb//P+XBZj//P/qBf3/QwCXBbb/iwBFBW7//P9FBTP//P+XBZj/QwCXBbb//P9FBTP/kf/zBPv+bf+JBG7/Jv/zBCf//P/zBM7+/P+JBDP/kf/zBPv+bf+JBG7/kf/zBPv+/P+JBDP/bf9FBW7//P9FBTP/kf/zBPv+kf/zBPv+/P9FBTP//P/zBM7+bf9FBW7/kf/zBPv+Jv/zBCf//P+XBZj/bf9FBW7/tf+XBbb/tf+XBbb//P/qBf3//P+XBZj//P9FBTP/bf9FBW7//P+XBZj/+v7zBJL/Mv+JBP3/zf7zBP3/Jv/zBCf/bf+JBG7/+v7zBJL/Mv+JBP3/+v7zBJL/bf+JBG7/+v7zBJL/zf7zBP3/Mv9FBf3/+v7zBJL/bf9FBW7/Jv/zBCf/bf9FBW7/+v7zBJL/Mv9FBf3/tf+XBbb/l/+XBf3//P/qBf3/tf+XBbb/bf9FBW7/Mv9FBf3/l/+XBf3/tf+XBbb/Mv9FBf3/bf9FBYwAMv9FBf3/+v7zBGgA+v7zBGgAMv9FBf3/zf7zBP3/bf9FBYwA+v7zBGgAJv/zBNMAl/+XBf3/bf9FBYwAtf+XBUQAtf+XBUQA/P/qBf3/l/+XBf3/Mv9FBf3/bf9FBYwAl/+XBf3/Mv+JBP3/bf+JBIwASv++BK8A+v7zBGgASv++BK8AJv/zBNMA+v7zBGgAzf7zBP3/Sv++BK8AMv+JBP3/Sv++BK8Azf7zBP3/tf+JBKkAqACJBEQAiwCJBIwAxgCJBP3/qACJBEQAiwCJBG7/qACJBEQA/P+JBDP/iwCJBG7//P+JBMcAtf+JBKkAiwCJBIwAMv+JBP3/tf+JBKkAbf+JBIwAqACJBEQAbf+JBG7//P+JBDP/Mv+JBP3/bf+JBG7/tf+JBKkAtf+JBKkAbf+JBG7/qACJBEQA",c:"BAEEAQQBBAEEAQQBBAEEAQQBBAEEAQQBBAQEBAQEBAQBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBCAgICAgICBAQEBAQEBAICAgICBAQEBAQEAgICAgICAgQEBAQEBAQCAgICBAQEBAQEAgICBAQEBAQEAgICBAQEBAQEAgICBAQEBAQEBAQEBAQEAgICAgICAgICAgICAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDCAgIAwMICAMDCAgDAwMDAwMDAwgICAMDAwMICAgIAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJ"},scalini:{v:"AP+KAGAAAAGKAGAAAAFKAGAAAP+KAGAAAAFKAGAAAP9KAGAAAAFKACABAAGKACABAP+KACABAAFKACABAP+KACABAP9KACABAAGKACABAAGKAGAAAP+KAGAAAAGKACABAP+KAGAAAP+KACABAP9KAGAAAAFKAGAAAAFKACABAP9KAGAAAAFKACABAP9KACABAAFKAGAAAAGKAGAAAAGKACABAAFKAGAAAAGKACABAAFKACABAP+KACABAP+KAGAAAP9KAGAAAP+KACABAP9KAGAAAP9KACABAP8zAcD/AAEzAcD/AAHzAMD/AP8zAcD/AAHzAMD/AP/zAMD/AAHzAIAAAAEzAYAAAP8zAYAAAAHzAIAAAP8zAYAAAP/zAIAAAAEzAYAAAAEzAcD/AP8zAcD/AAEzAYAAAP8zAcD/AP8zAYAAAP/zAMD/AAHzAMD/AAHzAIAAAP/zAMD/AAHzAIAAAP/zAIAAAAHzAMD/AAEzAcD/AAEzAYAAAAHzAMD/AAEzAYAAAAHzAIAAAP8zAYAAAP8zAcD/AP/zAMD/AP8zAYAAAP/zAMD/AP/zAIAAAP/gASD/AAHgASD/AAGgASD/AP/gASD/AAGgASD/AP+gASD/AAGgAeD/AAHgAeD/AP/gAeD/AAGgAeD/AP/gAeD/AP+gAeD/AAHgAeD/AAHgASD/AP/gASD/AAHgAeD/AP/gASD/AP/gAeD/AP+gASD/AAGgASD/AAGgAeD/AP+gASD/AAGgAeD/AP+gAeD/AAGgASD/AAHgASD/AAHgAeD/AAGgASD/AAHgAeD/AAGgAeD/AP/gAeD/AP/gASD/AP+gASD/AP/gAeD/AP+gASD/AP+gAeD/YP+mAWD/oP+mAWD/oP8zAWD/YP+mAWD/oP8zAWD/YP8zAWD/oP8zAaD/oP+mAaD/YP+mAaD/oP8zAaD/YP+mAaD/YP8zAaD/oP+mAaD/oP+mAWD/YP+mAWD/oP+mAaD/YP+mAWD/YP+mAaD/YP8zAWD/oP8zAWD/oP8zAaD/YP8zAWD/oP8zAaD/YP8zAaD/oP8zAWD/oP+mAWD/oP+mAaD/oP8zAWD/oP+mAaD/oP8zAaD/YP+mAaD/YP+mAWD/YP8zAWD/YP+mAaD/YP8zAWD/YP8zAaD/YAAzAWD/oAAzAWD/oADzAGD/YAAzAWD/oADzAGD/YADzAGD/oADzAMD/oAAzAcD/YAAzAcD/oADzAMD/YAAzAcD/YADzAMD/oAAzAcD/oAAzAWD/YAAzAWD/oAAzAcD/YAAzAWD/YAAzAcD/YADzAGD/oADzAGD/oADzAMD/YADzAGD/oADzAMD/YADzAMD/oADzAGD/oAAzAWD/oAAzAcD/oADzAGD/oAAzAcD/oADzAMD/YAAzAcD/YAAzAWD/YADzAGD/YAAzAcD/YADzAGD/YADzAMD/YP/gAcD+oP/gAcD+oP+gAcD+YP/gAcD+oP+gAcD+YP+gAcD+oP+gASD/oP/gASD/YP/gASD/oP+gASD/YP/gASD/YP+gASD/oP/gASD/oP/gAcD+YP/gAcD+oP/gASD/YP/gAcD+YP/gASD/YP+gAcD+oP+gAcD+oP+gASD/YP+gAcD+oP+gASD/YP+gASD/oP+gAcD+oP/gAcD+oP/gASD/oP+gAcD+oP/gASD/oP+gASD/YP/gASD/YP/gAcD+YP+gAcD+YP/gASD/YP+gAcD+YP+gASD/YADgAcD+oADgAcD+oACgAcD+YADgAcD+oACgAcD+YACgAcD+oACgASD/oADgASD/YADgASD/oACgASD/YADgASD/YACgASD/oADgASD/oADgAcD+YADgAcD+oADgASD/YADgAcD+YADgASD/YACgAcD+oACgAcD+oACgASD/YACgAcD+oACgASD/YACgASD/oACgAcD+oADgAcD+oADgASD/oACgAcD+oADgASD/oACgASD/YADgASD/YADgAcD+YACgAcD+YADgASD/YACgAcD+YACgASD/YACmAWD/oACmAWD/oAAzAWD/YACmAWD/oAAzAWD/YAAzAWD/oAAzAaD/oACmAaD/YACmAaD/oAAzAaD/YACmAaD/YAAzAaD/oACmAaD/oACmAWD/YACmAWD/oACmAaD/YACmAWD/YACmAaD/YAAzAWD/oAAzAWD/oAAzAaD/YAAzAWD/oAAzAaD/YAAzAaD/oAAzAWD/oACmAWD/oACmAaD/oAAzAWD/oACmAaD/oAAzAaD/YACmAaD/YACmAWD/YAAzAWD/YACmAaD/YAAzAWD/YAAzAaD/YP8zAWD/oP8zAWD/oP/zAGD/YP8zAWD/oP/zAGD/YP/zAGD/oP/zAMD/oP8zAcD/YP8zAcD/oP/zAMD/YP8zAcD/YP/zAMD/oP8zAcD/oP8zAWD/YP8zAWD/oP8zAcD/YP8zAWD/YP8zAcD/YP/zAGD/oP/zAGD/oP/zAMD/YP/zAGD/oP/zAMD/YP/zAMD/oP/zAGD/oP8zAWD/oP8zAcD/oP/zAGD/oP8zAcD/oP/zAMD/YP8zAcD/YP8zAWD/YP/zAGD/YP8zAcD/YP/zAGD/YP/zAMD/YAD9AAAAoAD9AAAAoACKAAAAYAD9AAAAoACKAAAAYACKAAAAoACKAEAAoAD9AEAAYAD9AEAAoACKAEAAYAD9AEAAYACKAEAAoAD9AEAAoAD9AAAAYAD9AAAAoAD9AEAAYAD9AAAAYAD9AEAAYACKAAAAoACKAAAAoACKAEAAYACKAAAAoACKAEAAYACKAEAAoACKAAAAoAD9AAAAoAD9AEAAoACKAAAAoAD9AEAAoACKAEAAYAD9AEAAYAD9AAAAYACKAAAAYAD9AEAAYACKAAAAYACKAEAAYACKAAAAoACKAAAAoABKAAAAYACKAAAAoABKAAAAYABKAAAAoABKAGAAoACKAGAAYACKAGAAoABKAGAAYACKAGAAYABKAGAAoACKAGAAoACKAAAAYACKAAAAoACKAGAAYACKAAAAYACKAGAAYABKAAAAoABKAAAAoABKAGAAYABKAAAAoABKAGAAYABKAGAAoABKAAAAoACKAAAAoACKAGAAoABKAAAAoACKAGAAoABKAGAAYACKAGAAYACKAAAAYABKAAAAYACKAGAAYABKAAAAYABKAGAAYP/9AAAAoP/9AAAAoP+KAAAAYP/9AAAAoP+KAAAAYP+KAAAAoP+KAEAAoP/9AEAAYP/9AEAAoP+KAEAAYP/9AEAAYP+KAEAAoP/9AEAAoP/9AAAAYP/9AAAAoP/9AEAAYP/9AAAAYP/9AEAAYP+KAAAAoP+KAAAAoP+KAEAAYP+KAAAAoP+KAEAAYP+KAEAAoP+KAAAAoP/9AAAAoP/9AEAAoP+KAAAAoP/9AEAAoP+KAEAAYP/9AEAAYP/9AAAAYP+KAAAAYP/9AEAAYP+KAAAAYP+KAEAAYP+KAAAAoP+KAAAAoP9KAAAAYP+KAAAAoP9KAAAAYP9KAAAAoP9KAGAAoP+KAGAAYP+KAGAAoP9KAGAAYP+KAGAAYP9KAGAAoP+KAGAAoP+KAAAAYP+KAAAAoP+KAGAAYP+KAAAAYP+KAGAAYP9KAAAAoP9KAAAAoP9KAGAAYP9KAAAAoP9KAGAAYP9KAGAAoP9KAAAAoP+KAAAAoP+KAGAAoP9KAAAAoP+KAGAAoP9KAGAAYP+KAGAAYP+KAAAAYP9KAAAAYP+KAGAAYP9KAAAAYP9KAGAAYABTAMAAoABTAMAAoADg/8AAYABTAMAAoADg/8AAYADg/8AAoADg/wABoABTAAABYABTAAABoADg/wABYABTAAABYADg/wABoABTAAABoABTAMAAYABTAMAAoABTAAABYABTAMAAYABTAAABYADg/8AAoADg/8AAoADg/wABYADg/8AAoADg/wABYADg/wABoADg/8AAoABTAMAAoABTAAABoADg/8AAoABTAAABoADg/wABYABTAAABYABTAMAAYADg/8AAYABTAAABYADg/8AAYADg/wABYP9TAMAAoP9TAMAAoP/g/8AAYP9TAMAAoP/g/8AAYP/g/8AAoP/g/wABoP9TAAABYP9TAAABoP/g/wABYP9TAAABYP/g/wABoP9TAAABoP9TAMAAYP9TAMAAoP9TAAABYP9TAMAAYP9TAAABYP/g/8AAoP/g/8AAoP/g/wABYP/g/8AAoP/g/wABYP/g/wABoP/g/8AAoP9TAMAAoP9TAAABoP/g/8AAoP9TAAABoP/g/wABYP9TAAABYP9TAMAAYP/g/8AAYP9TAAABYP/g/8AAYP/g/wAB",c:"ExMTEwICHh4TExMTExMTEwICHh4TExMTExMTEwICHh4TExMTAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB"},funghi:{v:"Lf+TAIAAlP++AMAAiP/bAEAALf+TAIAARv9YAIAArP+CAMAALf+TAIAArP+CAMAAlP++AMAArP+CAMAARv9YAIAAuP9lAEAAlP++AMAA+v/oAIAAiP/bAEAAlP++AMAArP+CAMAAEwCtAIAAlP++AMAAEwCtAIAA+v/oAIAAEwCtAIAArP+CAMAAuP9lAEAA+v/oAIAA+v/oAAAAiP/bAEAA+v/oAIAAEwCtAIAAEwCtAAAA+v/oAIAAEwCtAAAA+v/oAAAAEwCtAAAAEwCtAIAAuP9lAEAA+v/oAAAAlP++AMD/iP/bAEAA+v/oAAAAEwCtAAAArP+CAMD/+v/oAAAArP+CAMD/lP++AMD/rP+CAMD/EwCtAAAAuP9lAEAAlP++AMD/Lf+TAAAAiP/bAEAAlP++AMD/rP+CAMD/Rv9YAAAAlP++AMD/Rv9YAAAALf+TAAAARv9YAAAArP+CAMD/uP9lAEAALf+TAAAALf+TAIAAiP/bAEAALf+TAAAARv9YAAAARv9YAIAALf+TAAAARv9YAIAALf+TAIAARv9YAIAARv9YAAAAuP9lAEAANACMACMAhQBqACoAcgCMAOD/NACMACMAIgBgACMAcwA+ACoANACMACMAcwA+ACoAhQBqACoAcwA+ACoAIgBgACMATgA0AOD/hQBqACoAuwBUAOf/cgCMAOD/hQBqACoAcwA+ACoAqAAoAOf/hQBqACoAqAAoAOf/uwBUAOf/qAAoAOf/cwA+ACoATgA0AOD/uwBUAOf/ngBgAJ3/cgCMAOD/uwBUAOf/qAAoAOf/jAA0AJ3/uwBUAOf/jAA0AJ3/ngBgAJ3/jAA0AJ3/qAAoAOf/TgA0AOD/ngBgAJ3/TQCCAJb/cgCMAOD/ngBgAJ3/jAA0AJ3/OwBWAJb/ngBgAJ3/OwBWAJb/TQCCAJb/OwBWAJb/jAA0AJ3/TgA0AOD/TQCCAJb/GACYANn/cgCMAOD/TQCCAJb/OwBWAJb/BQBsANn/TQCCAJb/BQBsANn/GACYANn/BQBsANn/OwBWAJb/TgA0AOD/GACYANn/NACMACMAcgCMAOD/GACYANn/BQBsANn/IgBgACMAGACYANn/IgBgACMANACMACMAIgBgACMABQBsANn/TgA0AOD/u//n/38AmP/d/yYA1P/t/0AAmP/d/yYAu//n/38Amv/GAEAAEQD+/1oAu//n/38A1P/t/0AAu//n/38AEQD+/1oAmv/GAEAA7f/0/wEAEQD+/1oA1P/t/0AAEQD+/1oA7f/0/wEAmv/GAEAAmP/d/yYA7f/0/wEA1P/t/0AA7f/0/wEAmP/d/yYAmv/GAEAAWwDm/wAAHgD5/wAAPQDv/+D/HgD5/wAAWwDm/wAAbQCIAOD/WwDm/8D/WwDm/wAAPQDv/+D/WwDm/wAAWwDm/8D/bQCIAOD/HgD5/8D/WwDm/8D/PQDv/+D/WwDm/8D/HgD5/8D/bQCIAOD/HgD5/wAAHgD5/8D/PQDv/+D/HgD5/8D/HgD5/wAAbQCIAOD/",c:"HwYGDR8GBg0fBgYNHwYGDR8GBg0fBgYNBAwMDQQMDA0EDAwNBAwMDQQMDA0EDAwNBwcHBwcHBwcHBwcHBwcHBw=="},sasso:{v:"bAAgAHIAuv8gALwAuv8AALwAbAAgAHIAuv8AALwAbAAAAHIAQP8AAJT/QP8gAJT/8f8gAEr/QP8AAJT/8f8gAEr/8f8AAEr/ov9gAIAAUwBgADcACgBgAIb/ov9gAIAACgBgAIb/WP9gAM//CgDA/4b/UwDA/zcAov/A/4AACgDA/4b/ov/A/4AAWP/A/8//Z/8AAJkAZ/8gAJkAHf8gAOj/Z/8AAJkAHf8gAOj/Hf8AAOj/RQAgAG3/jgAgAB4AjgAAAB4ARQAgAG3/jgAAAB4ARQAAAG3/UwBgADcAov9gAIAAuv8gALwAUwBgADcAuv8gALwAbAAgAHIAQP8gAJT/WP9gAM//CgBgAIb/QP8gAJT/CgBgAIb/8f8gAEr/Z/8gAJkAov9gAIAAWP9gAM//Z/8gAJkAWP9gAM//Hf8gAOj/CgBgAIb/UwBgADcAjgAgAB4ACgBgAIb/jgAgAB4ARQAgAG3/uv8AALwAov/A/4AAUwDA/zcAuv8AALwAUwDA/zcAbAAAAHIACgDA/4b/WP/A/8//QP8AAJT/CgDA/4b/QP8AAJT/8f8AAEr/WP/A/8//ov/A/4AAZ/8AAJkAWP/A/8//Z/8AAJkAHf8AAOj/jgAAAB4AUwDA/zcACgDA/4b/jgAAAB4ACgDA/4b/RQAAAG3/bAAAAHIAjgAAAB4AjgAgAB4AbAAAAHIAjgAgAB4AbAAgAHIAZ/8gAJkAZ/8AAJkAuv8AALwAZ/8gAJkAuv8AALwAuv8gALwARQAgAG3/RQAAAG3/8f8AAEr/RQAgAG3/8f8AAEr/8f8gAEr/QP8AAJT/Hf8AAOj/Hf8gAOj/QP8AAJT/Hf8gAOj/QP8gAJT/ov/A/4AAuv8AALwAZ/8AAJkAWP/A/8//Hf8AAOj/QP8AAJT/UwDA/zcAjgAAAB4AbAAAAHIACgDA/4b/8f8AAEr/RQAAAG3/ov9gAIAAZ/8gAJkAuv8gALwAWP9gAM//QP8gAJT/Hf8gAOj/UwBgADcAbAAgAHIAjgAgAB4ACgBgAIb/RQAgAG3/8f8gAEr/5QAgAEcAoQAgAIsAoQAAAIsA5QAgAEcAoQAAAIsA5QAAAEcAMAAAABoAMAAgABoAdAAgANb/MAAAABoAdAAgANb/dAAAANb/iwBAAHQAzwBAADAAiwBAAOz/iwBAAHQAiwBAAOz/RwBAADAAiwDg/+z/zwDg/zAAiwDg/3QAiwDg/+z/iwDg/3QARwDg/zAAdAAAAIsAdAAgAIsAMAAgAEcAdAAAAIsAMAAgAEcAMAAAAEcAoQAgANb/5QAgABoA5QAAABoAoQAgANb/5QAAABoAoQAAANb/zwBAADAAiwBAAHQAoQAgAIsAzwBAADAAoQAgAIsA5QAgAEcAMAAgABoARwBAADAAiwBAAOz/MAAgABoAiwBAAOz/dAAgANb/dAAgAIsAiwBAAHQARwBAADAAdAAgAIsARwBAADAAMAAgAEcAiwBAAOz/zwBAADAA5QAgABoAiwBAAOz/5QAgABoAoQAgANb/oQAAAIsAiwDg/3QAzwDg/zAAoQAAAIsAzwDg/zAA5QAAAEcAiwDg/+z/RwDg/zAAMAAAABoAiwDg/+z/MAAAABoAdAAAANb/RwDg/zAAiwDg/3QAdAAAAIsARwDg/zAAdAAAAIsAMAAAAEcA5QAAABoAzwDg/zAAiwDg/+z/5QAAABoAiwDg/+z/oQAAANb/5QAAAEcA5QAAABoA5QAgABoA5QAAAEcA5QAgABoA5QAgAEcAdAAgAIsAdAAAAIsAoQAAAIsAdAAgAIsAoQAAAIsAoQAgAIsAoQAgANb/oQAAANb/dAAAANb/oQAgANb/dAAAANb/dAAgANb/MAAAABoAMAAAAEcAMAAgAEcAMAAAABoAMAAgAEcAMAAgABoAiwDg/3QAoQAAAIsAdAAAAIsARwDg/zAAMAAAAEcAMAAAABoAzwDg/zAA5QAAABoA5QAAAEcAiwDg/+z/dAAAANb/oQAAANb/iwBAAHQAdAAgAIsAoQAgAIsARwBAADAAMAAgABoAMAAgAEcAzwBAADAA5QAgAEcA5QAgABoAiwBAAOz/oQAgANb/dAAgANb/",c:"Dw8PDxsbDw8PDw8PGRkZGRkZGRkPDw8PDw8PDw8PDw8PDw8PDw8PDxkZGRkPDw8PGxsPDw8PDw8ZGRkZGRkZGQ8PDw8PDw8PDw8PDw8PDw8PDw8PGRkZGQ=="},ciuffo:{v:"2//GAN//4//GANj/+f/c/+3/2//GAN//+f/c/+3/8f/c//X/JgDk/xoAEADOAAQACADOAAwAJgDk/xoACADOAAwAHgDk/yIA7//mAOT/6P/mAOv/9//oAPr/7//mAOT/9//oAPr//v/oAPP/EgDE/xUAAwDC/wcACgDC////EgDE/xUACgDC////GQDE/w4ADwDf//X/+f/IAN//CADLAO7/DwDf//X/CADLAO7/HgDi/wQA8v/LAAUA4//IAPb/+f/f/wsA8v/LAAUA+f/f/wsABwDi/xoA6P/mAOv/7//mAOT/4//GANj/6P/mAOv/4//GANj/2//GAN//EADOAAQA/v/oAPP/9//oAPr/EADOAAQA9//oAPr/CADOAAwA+f/IAN//7//mAOT//v/oAPP/+f/IAN///v/oAPP/CADLAO7/9//oAPr/6P/mAOv/4//IAPb/9//oAPr/4//IAPb/8v/LAAUA+f/c/+3/CgDC////AwDC/wcA+f/c/+3/AwDC/wcA8f/c//X/EgDE/xUAGQDE/w4AJgDk/xoAEgDE/xUAJgDk/xoAHgDk/yIAGQDE/w4ACgDC////DwDf//X/GQDE/w4ADwDf//X/HgDi/wQA+f/f/wsAAwDC/wcAEgDE/xUA+f/f/wsAEgDE/xUABwDi/xoA8f/c//X/+f/f/wsA4//IAPb/8f/c//X/4//IAPb/2//GAN//+f/IAN//DwDf//X/+f/c/+3/+f/IAN//+f/c/+3/4//GANj/8v/LAAUABwDi/xoAHgDk/yIA8v/LAAUAHgDk/yIACADOAAwAJgDk/xoAHgDi/wQACADLAO7/JgDk/xoACADLAO7/EADOAAQACgDC////+f/c/+3/DwDf//X/GQDE/w4AHgDi/wQAJgDk/xoAAwDC/wcA+f/f/wsA8f/c//X/EgDE/xUAHgDk/yIABwDi/xoA7//mAOT/+f/IAN//4//GANj//v/oAPP/EADOAAQACADLAO7/6P/mAOv/2//GAN//4//IAPb/9//oAPr/8v/LAAUACADOAAwA0v+qAIEA3P+rAIUADADs/08A0v+qAIEADADs/08AAgDr/0sAAgDh/2sA0v+hAKIAyP+fAJ4AAgDh/2sAyP+fAJ4A+P/g/2cA0//AAJYAyf++AJIAxv+7AJsA0//AAJYAxv+7AJsAz/+8AJ8AAQDM/1cABQDP/00ADgDQ/1EAAQDM/1cADgDQ/1EACwDN/1sAEgDq/1wA4/+pAJMA3/+mAJwAEgDq/1wA3/+mAJwADwDm/2YAwv+iAJAAxf+lAIcA9f/m/1AAwv+iAJAA9f/m/1AA8f/i/1kAyf++AJIA0//AAJYA3P+rAIUAyf++AJIA3P+rAIUA0v+qAIEA0v+hAKIAz/+8AJ8Axv+7AJsA0v+hAKIAxv+7AJsAyP+fAJ4A4/+pAJMA0//AAJYAz/+8AJ8A4/+pAJMAz/+8AJ8A3/+mAJwAxv+7AJsAyf++AJIAxf+lAIcAxv+7AJsAxf+lAIcAwv+iAJAADADs/08ADgDQ/1EABQDP/00ADADs/08ABQDP/00AAgDr/0sAAQDM/1cACwDN/1sAAgDh/2sAAQDM/1cAAgDh/2sA+P/g/2cACwDN/1sADgDQ/1EAEgDq/1wACwDN/1sAEgDq/1wADwDm/2YA9f/m/1AABQDP/00AAQDM/1cA9f/m/1AAAQDM/1cA8f/i/1kAAgDr/0sA9f/m/1AAxf+lAIcAAgDr/0sAxf+lAIcA0v+qAIEA4/+pAJMAEgDq/1wADADs/08A4/+pAJMADADs/08A3P+rAIUAwv+iAJAA8f/i/1kA+P/g/2cAwv+iAJAA+P/g/2cAyP+fAJ4AAgDh/2sADwDm/2YA3/+mAJwAAgDh/2sA3/+mAJwA0v+hAKIADgDQ/1EADADs/08AEgDq/1wACwDN/1sADwDm/2YAAgDh/2sABQDP/00A9f/m/1AAAgDr/0sAAQDM/1cA+P/g/2cA8f/i/1kA0//AAJYA4/+pAJMA3P+rAIUAz/+8AJ8A0v+hAKIA3/+mAJwAyf++AJIA0v+qAIEAxf+lAIcAxv+7AJsAwv+iAJAAyP+fAJ4ATgBtAP3/RgBuAAQAXgDe/zUATgBtAP3/XgDe/zUAZgDd/y0AXgDe/zUARgBuAAQATgBtAP3/XgDe/zUATgBtAP3/ZgDd/y0AQwCAAP7/SwB/APb/SwB/APb/QwCAAP7/SwB/APb/QwCAAP7/aQDL/zMAaQDL/zMAYQDM/zsAaQDL/zMAYQDM/zsAYQDM/zsAVwDg/zwAPwBvAAwAPwBvAAwAVwDg/zwAPwBvAAwAVwDg/zwAVQBsAPX/VQBsAPX/bQDc/yYAVQBsAPX/bQDc/yYAbQDc/yYASwB/APb/QwCAAP7/RgBuAAQASwB/APb/RgBuAAQATgBtAP3/RgBuAAQAQwCAAP7/SwB/APb/RgBuAAQASwB/APb/TgBtAP3/PwBvAAwAQwCAAP7/QwCAAP7/PwBvAAwAQwCAAP7/PwBvAAwASwB/APb/SwB/APb/VQBsAPX/SwB/APb/VQBsAPX/VQBsAPX/XgDe/zUAYQDM/zsAaQDL/zMAXgDe/zUAaQDL/zMAZgDd/y0AaQDL/zMAYQDM/zsAXgDe/zUAaQDL/zMAXgDe/zUAZgDd/y0AYQDM/zsAYQDM/zsAVwDg/zwAYQDM/zsAVwDg/zwAVwDg/zwAbQDc/yYAaQDL/zMAaQDL/zMAbQDc/yYAaQDL/zMAbQDc/yYAZgDd/y0AbQDc/yYAVQBsAPX/ZgDd/y0AVQBsAPX/TgBtAP3/PwBvAAwAVwDg/zwAXgDe/zUAPwBvAAwAXgDe/zUARgBuAAQAVQBsAPX/bQDc/yYAZgDd/y0AVQBsAPX/ZgDd/y0ATgBtAP3/XgDe/zUAVwDg/zwAPwBvAAwAXgDe/zUAPwBvAAwARgBuAAQAYQDM/zsAXgDe/zUAVwDg/zwAYQDM/zsAVwDg/zwAXgDe/zUAaQDL/zMAbQDc/yYAZgDd/y0AaQDL/zMAZgDd/y0AbQDc/yYAQwCAAP7/PwBvAAwARgBuAAQAQwCAAP7/RgBuAAQAPwBvAAwASwB/APb/TgBtAP3/VQBsAPX/SwB/APb/VQBsAPX/TgBtAP3/mAB5APX/nAB5AP7/igDg/wYAmAB5APX/igDg/wYAhgDg//z/bQDl/xIAfwB9AAsAewB9AAEAbQDl/xIAewB9AAEAaQDl/wgAlQCNAAIAkQCNAPj/hwCPAPz/lQCNAAIAhwCPAPz/iwCPAAYAcADQ/wUAegDP/wEAfgDP/wsAcADQ/wUAfgDP/wsAdADQ/w8AhADi/xQAlwB6AAwAjQB7ABAAhADi/xQAjQB7ABAAegDj/xgAgQB7APP/iwB6AO//eADi//b/gQB7APP/eADi//b/bgDj//r/kQCNAPj/lQCNAAIAnAB5AP7/kQCNAPj/nAB5AP7/mAB5APX/fwB9AAsAiwCPAAYAhwCPAPz/fwB9AAsAhwCPAPz/ewB9AAEAlwB6AAwAlQCNAAIAiwCPAAYAlwB6AAwAiwCPAAYAjQB7ABAAhwCPAPz/kQCNAPj/iwB6AO//hwCPAPz/iwB6AO//gQB7APP/igDg/wYAfgDP/wsAegDP/wEAigDg/wYAegDP/wEAhgDg//z/cADQ/wUAdADQ/w8AbQDl/xIAcADQ/wUAbQDl/xIAaQDl/wgAdADQ/w8AfgDP/wsAhADi/xQAdADQ/w8AhADi/xQAegDj/xgAeADi//b/egDP/wEAcADQ/wUAeADi//b/cADQ/wUAbgDj//r/hgDg//z/eADi//b/iwB6AO//hgDg//z/iwB6AO//mAB5APX/lwB6AAwAhADi/xQAigDg/wYAlwB6AAwAigDg/wYAnAB5AP7/gQB7APP/bgDj//r/aQDl/wgAgQB7APP/aQDl/wgAewB9AAEAbQDl/xIAegDj/xgAjQB7ABAAbQDl/xIAjQB7ABAAfwB9AAsAfgDP/wsAigDg/wYAhADi/xQAdADQ/w8AegDj/xgAbQDl/xIAegDP/wEAeADi//b/hgDg//z/cADQ/wUAaQDl/wgAbgDj//r/lQCNAAIAlwB6AAwAnAB5AP7/iwCPAAYAfwB9AAsAjQB7ABAAkQCNAPj/mAB5APX/iwB6AO//hwCPAPz/gQB7APP/ewB9AAEAqP9sANv/oP9sANP/rP/o/8f/qP9sANv/rP/o/8f/tP/o/87/2f/x/5r/zf91AKb/1f91AK7/2f/x/5r/1f91AK7/4f/x/6H/rv+AAMb/tf+AAM3/xP+DAL7/rv+AAMb/xP+DAL7/vP+DALf/0//e/6//xP/b/77/vf/b/7b/0//e/6//vf/b/7b/zP/e/6f/tP/r/7D/qP9vALz/tv9yAK7/tP/r/7D/tv9yAK7/w//u/6H/zf9yAMT/vv9vANP/yv/r/8f/zf9yAMT/yv/r/8f/2f/u/7j/tf+AAM3/rv+AAMb/oP9sANP/tf+AAM3/oP9sANP/qP9sANv/zf91AKb/vP+DALf/xP+DAL7/zf91AKb/xP+DAL7/1f91AK7/qP9vALz/rv+AAMb/vP+DALf/qP9vALz/vP+DALf/tv9yAK7/xP+DAL7/tf+AAM3/vv9vANP/xP+DAL7/vv9vANP/zf9yAMT/rP/o/8f/vf/b/7b/xP/b/77/rP/o/8f/xP/b/77/tP/o/87/0//e/6//zP/e/6f/2f/x/5r/0//e/6//2f/x/5r/4f/x/6H/zP/e/6f/vf/b/7b/tP/r/7D/zP/e/6f/tP/r/7D/w//u/6H/yv/r/8f/xP/b/77/0//e/6//yv/r/8f/0//e/6//2f/u/7j/tP/o/87/yv/r/8f/vv9vANP/tP/o/87/vv9vANP/qP9sANv/qP9vALz/tP/r/7D/rP/o/8f/qP9vALz/rP/o/8f/oP9sANP/zf9yAMT/2f/u/7j/4f/x/6H/zf9yAMT/4f/x/6H/1f91AK7/2f/x/5r/w//u/6H/tv9yAK7/2f/x/5r/tv9yAK7/zf91AKb/vf/b/7b/rP/o/8f/tP/r/7D/zP/e/6f/w//u/6H/2f/x/5r/xP/b/77/yv/r/8f/tP/o/87/0//e/6//4f/x/6H/2f/u/7j/rv+AAMb/qP9vALz/oP9sANP/vP+DALf/zf91AKb/tv9yAK7/tf+AAM3/qP9sANv/vv9vANP/xP+DAL7/zf9yAMT/1f91AK7/+P86ABwA/P87ABIA4P/c//v/+P86ABwA4P/c//v/3P/a/wQA/f/R/wUAGAAxAB0AFAAwACcA/f/R/wUAFAAwACcA+P/Q/w8ACABEABkABABDACMADgA/ACYACABEABkADgA/ACYAEgBAABwA7P/H/wgA4v/L/wUA5v/M//v/7P/H/wgA5v/M//v/8P/J////7v/Z//T/CQA5AAwAEgA2ABAA7v/Z//T/EgA2ABAA9//W//j/BgAyAC0A/f81ACkA4v/W/xIABgAyAC0A4v/W/xIA6//S/xUABABDACMACABEABkA/P87ABIABABDACMA/P87ABIA+P86ABwAGAAxAB0AEgBAABwADgA/ACYAGAAxAB0ADgA/ACYAFAAwACcACQA5AAwACABEABkAEgBAABwACQA5AAwAEgBAABwAEgA2ABAADgA/ACYABABDACMA/f81ACkADgA/ACYA/f81ACkABgAyAC0A4P/c//v/5v/M//v/4v/L/wUA4P/c//v/4v/L/wUA3P/a/wQA7P/H/wgA8P/J/////f/R/wUA7P/H/wgA/f/R/wUA+P/Q/w8A8P/J////5v/M//v/7v/Z//T/8P/J////7v/Z//T/9//W//j/4v/W/xIA4v/L/wUA7P/H/wgA4v/W/xIA7P/H/wgA6//S/xUA3P/a/wQA4v/W/xIA/f81ACkA3P/a/wQA/f81ACkA+P86ABwACQA5AAwA7v/Z//T/4P/c//v/CQA5AAwA4P/c//v//P87ABIABgAyAC0A6//S/xUA+P/Q/w8ABgAyAC0A+P/Q/w8AFAAwACcA/f/R/wUA9//W//j/EgA2ABAA/f/R/wUAEgA2ABAAGAAxAB0A5v/M//v/4P/c//v/7v/Z//T/8P/J////9//W//j//f/R/wUA4v/L/wUA4v/W/xIA3P/a/wQA7P/H/wgA+P/Q/w8A6//S/xUACABEABkACQA5AAwA/P87ABIAEgBAABwAGAAxAB0AEgA2ABAABABDACMA+P86ABwA/f81ACkADgA/ACYABgAyAC0AFAAwACcAGgA/AIX/JAA/AIH/KQDa/47/GgA/AIX/KQDa/47/HwDa/5L/NQDe/6v/MABDAJ//JgBDAKP/NQDe/6v/JgBDAKP/KwDe/6//JwBNAIn/HQBNAI7/IQBPAJf/JwBNAIn/IQBPAJf/KwBPAJP/KADQ/6f/IwDO/53/LQDO/5n/KADQ/6f/LQDO/5n/MQDQ/6P/NwDb/5P/MQBBAIf/NQBCAJH/NwDb/5P/NQBCAJH/OwDd/53/GABCAJ3/FABBAJP/GQDb/6D/GABCAJ3/GQDb/6D/HQDd/6n/HQBNAI7/JwBNAIn/JAA/AIH/HQBNAI7/JAA/AIH/GgA/AIX/MABDAJ//KwBPAJP/IQBPAJf/MABDAJ//IQBPAJf/JgBDAKP/MQBBAIf/JwBNAIn/KwBPAJP/MQBBAIf/KwBPAJP/NQBCAJH/IQBPAJf/HQBNAI7/FABBAJP/IQBPAJf/FABBAJP/GABCAJ3/KQDa/47/LQDO/5n/IwDO/53/KQDa/47/IwDO/53/HwDa/5L/KADQ/6f/MQDQ/6P/NQDe/6v/KADQ/6f/NQDe/6v/KwDe/6//MQDQ/6P/LQDO/5n/NwDb/5P/MQDQ/6P/NwDb/5P/OwDd/53/GQDb/6D/IwDO/53/KADQ/6f/GQDb/6D/KADQ/6f/HQDd/6n/HwDa/5L/GQDb/6D/FABBAJP/HwDa/5L/FABBAJP/GgA/AIX/MQBBAIf/NwDb/5P/KQDa/47/MQBBAIf/KQDa/47/JAA/AIH/GABCAJ3/HQDd/6n/KwDe/6//GABCAJ3/KwDe/6//JgBDAKP/NQDe/6v/OwDd/53/NQBCAJH/NQDe/6v/NQBCAJH/MABDAJ//LQDO/5n/KQDa/47/NwDb/5P/MQDQ/6P/OwDd/53/NQDe/6v/IwDO/53/GQDb/6D/HwDa/5L/KADQ/6f/KwDe/6//HQDd/6n/JwBNAIn/MQBBAIf/JAA/AIH/KwBPAJP/MABDAJ//NQBCAJH/HQBNAI7/GgA/AIX/FABBAJP/IQBPAJf/GABCAJ3/JgBDAKP/Tv9tAF3/Rv9uAGT/Xv/e/5X/Tv9tAF3/Xv/e/5X/Zv/d/43/Xv/e/5X/Rv9uAGT/Tv9tAF3/Xv/e/5X/Tv9tAF3/Zv/d/43/Q/+AAF7/S/9/AFb/S/9/AFb/Q/+AAF7/S/9/AFb/Q/+AAF7/af/L/5P/af/L/5P/Yf/M/5v/af/L/5P/Yf/M/5v/Yf/M/5v/V//g/5z/P/9vAGz/P/9vAGz/V//g/5z/P/9vAGz/V//g/5z/Vf9sAFX/Vf9sAFX/bf/c/4b/Vf9sAFX/bf/c/4b/bf/c/4b/S/9/AFb/Q/+AAF7/Rv9uAGT/S/9/AFb/Rv9uAGT/Tv9tAF3/Rv9uAGT/Q/+AAF7/S/9/AFb/Rv9uAGT/S/9/AFb/Tv9tAF3/P/9vAGz/Q/+AAF7/Q/+AAF7/P/9vAGz/Q/+AAF7/P/9vAGz/S/9/AFb/S/9/AFb/Vf9sAFX/S/9/AFb/Vf9sAFX/Vf9sAFX/Xv/e/5X/Yf/M/5v/af/L/5P/Xv/e/5X/af/L/5P/Zv/d/43/af/L/5P/Yf/M/5v/Xv/e/5X/af/L/5P/Xv/e/5X/Zv/d/43/Yf/M/5v/Yf/M/5v/V//g/5z/Yf/M/5v/V//g/5z/V//g/5z/bf/c/4b/af/L/5P/af/L/5P/bf/c/4b/af/L/5P/bf/c/4b/Zv/d/43/bf/c/4b/Vf9sAFX/Zv/d/43/Vf9sAFX/Tv9tAF3/P/9vAGz/V//g/5z/Xv/e/5X/P/9vAGz/Xv/e/5X/Rv9uAGT/Vf9sAFX/bf/c/4b/Zv/d/43/Vf9sAFX/Zv/d/43/Tv9tAF3/Xv/e/5X/V//g/5z/P/9vAGz/Xv/e/5X/P/9vAGz/Rv9uAGT/Yf/M/5v/Xv/e/5X/V//g/5z/Yf/M/5v/V//g/5z/Xv/e/5X/af/L/5P/bf/c/4b/Zv/d/43/af/L/5P/Zv/d/43/bf/c/4b/Q/+AAF7/P/9vAGz/Rv9uAGT/Q/+AAF7/Rv9uAGT/P/9vAGz/S/9/AFb/Tv9tAF3/Vf9sAFX/S/9/AFb/Vf9sAFX/Tv9tAF3/mP95AFX/nP95AF7/iv/g/2b/mP95AFX/iv/g/2b/hv/g/1z/bf/l/3L/f/99AGv/e/99AGH/bf/l/3L/e/99AGH/af/l/2j/lf+NAGL/kf+NAFj/h/+PAFz/lf+NAGL/h/+PAFz/i/+PAGb/cP/Q/2X/ev/P/2H/fv/P/2v/cP/Q/2X/fv/P/2v/dP/Q/2//hP/i/3T/l/96AGz/jf97AHD/hP/i/3T/jf97AHD/ev/j/3j/gf97AFP/i/96AE//eP/i/1b/gf97AFP/eP/i/1b/bv/j/1r/kf+NAFj/lf+NAGL/nP95AF7/kf+NAFj/nP95AF7/mP95AFX/f/99AGv/i/+PAGb/h/+PAFz/f/99AGv/h/+PAFz/e/99AGH/l/96AGz/lf+NAGL/i/+PAGb/l/96AGz/i/+PAGb/jf97AHD/h/+PAFz/kf+NAFj/i/96AE//h/+PAFz/i/96AE//gf97AFP/iv/g/2b/fv/P/2v/ev/P/2H/iv/g/2b/ev/P/2H/hv/g/1z/cP/Q/2X/dP/Q/2//bf/l/3L/cP/Q/2X/bf/l/3L/af/l/2j/dP/Q/2//fv/P/2v/hP/i/3T/dP/Q/2//hP/i/3T/ev/j/3j/eP/i/1b/ev/P/2H/cP/Q/2X/eP/i/1b/cP/Q/2X/bv/j/1r/hv/g/1z/eP/i/1b/i/96AE//hv/g/1z/i/96AE//mP95AFX/l/96AGz/hP/i/3T/iv/g/2b/l/96AGz/iv/g/2b/nP95AF7/gf97AFP/bv/j/1r/af/l/2j/gf97AFP/af/l/2j/e/99AGH/bf/l/3L/ev/j/3j/jf97AHD/bf/l/3L/jf97AHD/f/99AGv/fv/P/2v/iv/g/2b/hP/i/3T/dP/Q/2//ev/j/3j/bf/l/3L/ev/P/2H/eP/i/1b/hv/g/1z/cP/Q/2X/af/l/2j/bv/j/1r/lf+NAGL/l/96AGz/nP95AF7/i/+PAGb/f/99AGv/jf97AHD/kf+NAFj/mP95AFX/i/96AE//h/+PAFz/gf97AFP/e/99AGH/iABsANsAgABsANMAjADo/8cAiABsANsAjADo/8cAlADo/84AuQDx/5oArQB1AKYAtQB1AK4AuQDx/5oAtQB1AK4AwQDx/6EAjgCAAMYAlQCAAM0ApACDAL4AjgCAAMYApACDAL4AnACDALcAswDe/68ApADb/74AnQDb/7YAswDe/68AnQDb/7YArADe/6cAlADr/7AAiABvALwAlgByAK4AlADr/7AAlgByAK4AowDu/6EArQByAMQAngBvANMAqgDr/8cArQByAMQAqgDr/8cAuQDu/7gAlQCAAM0AjgCAAMYAgABsANMAlQCAAM0AgABsANMAiABsANsArQB1AKYAnACDALcApACDAL4ArQB1AKYApACDAL4AtQB1AK4AiABvALwAjgCAAMYAnACDALcAiABvALwAnACDALcAlgByAK4ApACDAL4AlQCAAM0AngBvANMApACDAL4AngBvANMArQByAMQAjADo/8cAnQDb/7YApADb/74AjADo/8cApADb/74AlADo/84AswDe/68ArADe/6cAuQDx/5oAswDe/68AuQDx/5oAwQDx/6EArADe/6cAnQDb/7YAlADr/7AArADe/6cAlADr/7AAowDu/6EAqgDr/8cApADb/74AswDe/68AqgDr/8cAswDe/68AuQDu/7gAlADo/84AqgDr/8cAngBvANMAlADo/84AngBvANMAiABsANsAiABvALwAlADr/7AAjADo/8cAiABvALwAjADo/8cAgABsANMArQByAMQAuQDu/7gAwQDx/6EArQByAMQAwQDx/6EAtQB1AK4AuQDx/5oAowDu/6EAlgByAK4AuQDx/5oAlgByAK4ArQB1AKYAnQDb/7YAjADo/8cAlADr/7AArADe/6cAowDu/6EAuQDx/5oApADb/74AqgDr/8cAlADo/84AswDe/68AwQDx/6EAuQDu/7gAjgCAAMYAiABvALwAgABsANMAnACDALcArQB1AKYAlgByAK4AlQCAAM0AiABsANsAngBvANMApACDAL4ArQByAMQAtQB1AK4AeAB5AFUAfAB5AF4AagDg/2YAeAB5AFUAagDg/2YAZgDg/1wATQDl/3IAXwB9AGsAWwB9AGEATQDl/3IAWwB9AGEASQDl/2gAdQCNAGIAcQCNAFgAZwCPAFwAdQCNAGIAZwCPAFwAawCPAGYAUADQ/2UAWgDP/2EAXgDP/2sAUADQ/2UAXgDP/2sAVADQ/28AZADi/3QAdwB6AGwAbQB7AHAAZADi/3QAbQB7AHAAWgDj/3gAYQB7AFMAawB6AE8AWADi/1YAYQB7AFMAWADi/1YATgDj/1oAcQCNAFgAdQCNAGIAfAB5AF4AcQCNAFgAfAB5AF4AeAB5AFUAXwB9AGsAawCPAGYAZwCPAFwAXwB9AGsAZwCPAFwAWwB9AGEAdwB6AGwAdQCNAGIAawCPAGYAdwB6AGwAawCPAGYAbQB7AHAAZwCPAFwAcQCNAFgAawB6AE8AZwCPAFwAawB6AE8AYQB7AFMAagDg/2YAXgDP/2sAWgDP/2EAagDg/2YAWgDP/2EAZgDg/1wAUADQ/2UAVADQ/28ATQDl/3IAUADQ/2UATQDl/3IASQDl/2gAVADQ/28AXgDP/2sAZADi/3QAVADQ/28AZADi/3QAWgDj/3gAWADi/1YAWgDP/2EAUADQ/2UAWADi/1YAUADQ/2UATgDj/1oAZgDg/1wAWADi/1YAawB6AE8AZgDg/1wAawB6AE8AeAB5AFUAdwB6AGwAZADi/3QAagDg/2YAdwB6AGwAagDg/2YAfAB5AF4AYQB7AFMATgDj/1oASQDl/2gAYQB7AFMASQDl/2gAWwB9AGEATQDl/3IAWgDj/3gAbQB7AHAATQDl/3IAbQB7AHAAXwB9AGsAXgDP/2sAagDg/2YAZADi/3QAVADQ/28AWgDj/3gATQDl/3IAWgDP/2EAWADi/1YAZgDg/1wAUADQ/2UASQDl/2gATgDj/1oAdQCNAGIAdwB6AGwAfAB5AF4AawCPAGYAXwB9AGsAbQB7AHAAcQCNAFgAeAB5AFUAawB6AE8AZwCPAFwAYQB7AFMAWwB9AGEA3v9tAGoA1/9uAGIApv/e/3sA3v9tAGoApv/e/3sArf/d/4IApv/e/3sA1/9uAGIA3v9tAGoApv/e/3sA3v9tAGoArf/d/4IA3f+AAF8A5P9/AGcA5P9/AGcA3f+AAF8A5P9/AGcA3f+AAF8Ap//L/4UAp//L/4UAoP/M/34Ap//L/4UAoP/M/34AoP/M/34Anv/g/3MAz/9vAFsAz/9vAFsAnv/g/3MAz/9vAFsAnv/g/3MA5v9sAHEA5v9sAHEAtf/c/4kA5v9sAHEAtf/c/4kAtf/c/4kA5P9/AGcA3f+AAF8A1/9uAGIA5P9/AGcA1/9uAGIA3v9tAGoA1/9uAGIA3f+AAF8A5P9/AGcA1/9uAGIA5P9/AGcA3v9tAGoAz/9vAFsA3f+AAF8A3f+AAF8Az/9vAFsA3f+AAF8Az/9vAFsA5P9/AGcA5P9/AGcA5v9sAHEA5P9/AGcA5v9sAHEA5v9sAHEApv/e/3sAoP/M/34Ap//L/4UApv/e/3sAp//L/4UArf/d/4IAp//L/4UAoP/M/34Apv/e/3sAp//L/4UApv/e/3sArf/d/4IAoP/M/34AoP/M/34Anv/g/3MAoP/M/34Anv/g/3MAnv/g/3MAtf/c/4kAp//L/4UAp//L/4UAtf/c/4kAp//L/4UAtf/c/4kArf/d/4IAtf/c/4kA5v9sAHEArf/d/4IA5v9sAHEA3v9tAGoAz/9vAFsAnv/g/3MApv/e/3sAz/9vAFsApv/e/3sA1/9uAGIA5v9sAHEAtf/c/4kArf/d/4IA5v9sAHEArf/d/4IA3v9tAGoApv/e/3sAnv/g/3MAz/9vAFsApv/e/3sAz/9vAFsA1/9uAGIAoP/M/34Apv/e/3sAnv/g/3MAoP/M/34Anv/g/3MApv/e/3sAp//L/4UAtf/c/4kArf/d/4IAp//L/4UArf/d/4IAtf/c/4kA3f+AAF8Az/9vAFsA1/9uAGIA3f+AAF8A1/9uAGIAz/9vAFsA5P9/AGcA3v9tAGoA5v9sAHEA5P9/AGcA5v9sAHEA3v9tAGoAp/+yAHgAnf+yAHwAk//n/2MAp/+yAHgAk//n/2MAnf/n/18Ah//r/0YAkf+2AF4Am/+2AFoAh//r/0YAm/+2AFoAkf/r/0IAm//NAHUApf/NAHEAof/OAGcAm//NAHUAof/OAGcAl//OAGsAlP/Q/0gAmP/P/1IAjv/P/1YAlP/Q/0gAjv/P/1YAiv/Q/0wAhf/o/10AkP+zAHYAjP+1AGwAhf/o/10AjP+1AGwAgf/q/1QAqf+1AGAArf+zAGoAo//o/1EAqf+1AGAAo//o/1EAn//q/0cApf/NAHEAm//NAHUAnf+yAHwApf/NAHEAnf+yAHwAp/+yAHgAkf+2AF4Al//OAGsAof/OAGcAkf+2AF4Aof/OAGcAm/+2AFoAkP+zAHYAm//NAHUAl//OAGsAkP+zAHYAl//OAGsAjP+1AGwAof/OAGcApf/NAHEArf+zAGoAof/OAGcArf+zAGoAqf+1AGAAk//n/2MAjv/P/1YAmP/P/1IAk//n/2MAmP/P/1IAnf/n/18AlP/Q/0gAiv/Q/0wAh//r/0YAlP/Q/0gAh//r/0YAkf/r/0IAiv/Q/0wAjv/P/1YAhf/o/10Aiv/Q/0wAhf/o/10Agf/q/1QAo//o/1EAmP/P/1IAlP/Q/0gAo//o/1EAlP/Q/0gAn//q/0cAnf/n/18Ao//o/1EArf+zAGoAnf/n/18Arf+zAGoAp/+yAHgAkP+zAHYAhf/o/10Ak//n/2MAkP+zAHYAk//n/2MAnf+yAHwAqf+1AGAAn//q/0cAkf/r/0IAqf+1AGAAkf/r/0IAm/+2AFoAh//r/0YAgf/q/1QAjP+1AGwAh//r/0YAjP+1AGwAkf+2AF4Ajv/P/1YAk//n/2MAhf/o/10Aiv/Q/0wAgf/q/1QAh//r/0YAmP/P/1IAo//o/1EAnf/n/18AlP/Q/0gAkf/r/0IAn//q/0cAm//NAHUAkP+zAHYAnf+yAHwAl//OAGsAkf+2AF4AjP+1AGwApf/NAHEAp/+yAHgArf+zAGoAof/OAGcAqf+1AGAAm/+2AFoAhwCnAGr/jgCnAGP/nwDx/3T/hwCnAGr/nwDx/3T/mADx/3v/ugD2/4//qQCtAH7/ogCtAIX/ugD2/4//ogCtAIX/swD2/5b/lQDAAGr/jgDAAHH/lwDCAHr/lQDAAGr/lwDCAHr/ngDCAHP/rADd/5D/owDc/4f/qgDc/3//rADd/5D/qgDc/3//swDd/4j/sADy/3X/nwCpAGT/qACrAG3/sADy/3X/qACrAG3/uQD0/37/kQCrAIT/iACpAHv/mQDy/4z/kQCrAIT/mQDy/4z/ogD0/5X/jgDAAHH/lQDAAGr/jgCnAGP/jgDAAHH/jgCnAGP/hwCnAGr/qQCtAH7/ngDCAHP/lwDCAHr/qQCtAH7/lwDCAHr/ogCtAIX/nwCpAGT/lQDAAGr/ngDCAHP/nwCpAGT/ngDCAHP/qACrAG3/lwDCAHr/jgDAAHH/iACpAHv/lwDCAHr/iACpAHv/kQCrAIT/nwDx/3T/qgDc/3//owDc/4f/nwDx/3T/owDc/4f/mADx/3v/rADd/5D/swDd/4j/ugD2/4//rADd/5D/ugD2/4//swD2/5b/swDd/4j/qgDc/3//sADy/3X/swDd/4j/sADy/3X/uQD0/37/mQDy/4z/owDc/4f/rADd/5D/mQDy/4z/rADd/5D/ogD0/5X/mADx/3v/mQDy/4z/iACpAHv/mADx/3v/iACpAHv/hwCnAGr/nwCpAGT/sADy/3X/nwDx/3T/nwCpAGT/nwDx/3T/jgCnAGP/kQCrAIT/ogD0/5X/swD2/5b/kQCrAIT/swD2/5b/ogCtAIX/ugD2/4//uQD0/37/qACrAG3/ugD2/4//qACrAG3/qQCtAH7/qgDc/3//nwDx/3T/sADy/3X/swDd/4j/uQD0/37/ugD2/4//owDc/4f/mQDy/4z/mADx/3v/rADd/5D/swD2/5b/ogD0/5X/lQDAAGr/nwCpAGT/jgCnAGP/ngDCAHP/qQCtAH7/qACrAG3/jgDAAHH/hwCnAGr/iACpAHv/lwDCAHr/kQCrAIT/ogCtAIX/JwCnAAoALgCnAAMAPwDx/xQAJwCnAAoAPwDx/xQAOADx/xsAWgD2/y8ASQCtAB4AQgCtACUAWgD2/y8AQgCtACUAUwD2/zYANQDAAAoALgDAABEANwDCABoANQDAAAoANwDCABoAPgDCABMATADd/zAAQwDc/ycASgDc/x8ATADd/zAASgDc/x8AUwDd/ygAUADy/xUAPwCpAAQASACrAA0AUADy/xUASACrAA0AWQD0/x4AMQCrACQAKACpABsAOQDy/ywAMQCrACQAOQDy/ywAQgD0/zUALgDAABEANQDAAAoALgCnAAMALgDAABEALgCnAAMAJwCnAAoASQCtAB4APgDCABMANwDCABoASQCtAB4ANwDCABoAQgCtACUAPwCpAAQANQDAAAoAPgDCABMAPwCpAAQAPgDCABMASACrAA0ANwDCABoALgDAABEAKACpABsANwDCABoAKACpABsAMQCrACQAPwDx/xQASgDc/x8AQwDc/ycAPwDx/xQAQwDc/ycAOADx/xsATADd/zAAUwDd/ygAWgD2/y8ATADd/zAAWgD2/y8AUwD2/zYAUwDd/ygASgDc/x8AUADy/xUAUwDd/ygAUADy/xUAWQD0/x4AOQDy/ywAQwDc/ycATADd/zAAOQDy/ywATADd/zAAQgD0/zUAOADx/xsAOQDy/ywAKACpABsAOADx/xsAKACpABsAJwCnAAoAPwCpAAQAUADy/xUAPwDx/xQAPwCpAAQAPwDx/xQALgCnAAMAMQCrACQAQgD0/zUAUwD2/zYAMQCrACQAUwD2/zYAQgCtACUAWgD2/y8AWQD0/x4ASACrAA0AWgD2/y8ASACrAA0ASQCtAB4ASgDc/x8APwDx/xQAUADy/xUAUwDd/ygAWQD0/x4AWgD2/y8AQwDc/ycAOQDy/ywAOADx/xsATADd/zAAUwD2/zYAQgD0/zUANQDAAAoAPwCpAAQALgCnAAMAPgDCABMASQCtAB4ASACrAA0ALgDAABEAJwCnAAoAKACpABsANwDCABoAMQCrACQAQgCtACUAuv8/ACUAxP8/ACEAyf/a/y4Auv8/ACUAyf/a/y4Av//a/zIA1f/e/0sA0P9DAD8Axv9DAEMA1f/e/0sAxv9DAEMAy//e/08Ax/9NACkAvf9NAC4Awf9PADcAx/9NACkAwf9PADcAy/9PADMAyP/Q/0cAw//O/z0Azf/O/zkAyP/Q/0cAzf/O/zkA0f/Q/0MA1//b/zMA0f9BACcA1f9CADEA1//b/zMA1f9CADEA2//d/z0AuP9CAD0AtP9BADMAuf/b/0AAuP9CAD0Auf/b/0AAvf/d/0kAvf9NAC4Ax/9NACkAxP8/ACEAvf9NAC4AxP8/ACEAuv8/ACUA0P9DAD8Ay/9PADMAwf9PADcA0P9DAD8Awf9PADcAxv9DAEMA0f9BACcAx/9NACkAy/9PADMA0f9BACcAy/9PADMA1f9CADEAwf9PADcAvf9NAC4AtP9BADMAwf9PADcAtP9BADMAuP9CAD0Ayf/a/y4Azf/O/zkAw//O/z0Ayf/a/y4Aw//O/z0Av//a/zIAyP/Q/0cA0f/Q/0MA1f/e/0sAyP/Q/0cA1f/e/0sAy//e/08A0f/Q/0MAzf/O/zkA1//b/zMA0f/Q/0MA1//b/zMA2//d/z0Auf/b/0AAw//O/z0AyP/Q/0cAuf/b/0AAyP/Q/0cAvf/d/0kAv//a/zIAuf/b/0AAtP9BADMAv//a/zIAtP9BADMAuv8/ACUA0f9BACcA1//b/zMAyf/a/y4A0f9BACcAyf/a/y4AxP8/ACEAuP9CAD0Avf/d/0kAy//e/08AuP9CAD0Ay//e/08Axv9DAEMA1f/e/0sA2//d/z0A1f9CADEA1f/e/0sA1f9CADEA0P9DAD8Azf/O/zkAyf/a/y4A1//b/zMA0f/Q/0MA2//d/z0A1f/e/0sAw//O/z0Auf/b/0AAv//a/zIAyP/Q/0cAy//e/08Avf/d/0kAx/9NACkA0f9BACcAxP8/ACEAy/9PADMA0P9DAD8A1f9CADEAvf9NAC4Auv8/ACUAtP9BADMAwf9PADcAuP9CAD0Axv9DAEMAGgA/AIUAJAA/AIEAKQDa/44AGgA/AIUAKQDa/44AHwDa/5IANQDe/6sAMABDAJ8AJgBDAKMANQDe/6sAJgBDAKMAKwDe/68AJwBNAIkAHQBNAI4AIQBPAJcAJwBNAIkAIQBPAJcAKwBPAJMAKADQ/6cAIwDO/50ALQDO/5kAKADQ/6cALQDO/5kAMQDQ/6MANwDb/5MAMQBBAIcANQBCAJEANwDb/5MANQBCAJEAOwDd/50AGABCAJ0AFABBAJMAGQDb/6AAGABCAJ0AGQDb/6AAHQDd/6kAHQBNAI4AJwBNAIkAJAA/AIEAHQBNAI4AJAA/AIEAGgA/AIUAMABDAJ8AKwBPAJMAIQBPAJcAMABDAJ8AIQBPAJcAJgBDAKMAMQBBAIcAJwBNAIkAKwBPAJMAMQBBAIcAKwBPAJMANQBCAJEAIQBPAJcAHQBNAI4AFABBAJMAIQBPAJcAFABBAJMAGABCAJ0AKQDa/44ALQDO/5kAIwDO/50AKQDa/44AIwDO/50AHwDa/5IAKADQ/6cAMQDQ/6MANQDe/6sAKADQ/6cANQDe/6sAKwDe/68AMQDQ/6MALQDO/5kANwDb/5MAMQDQ/6MANwDb/5MAOwDd/50AGQDb/6AAIwDO/50AKADQ/6cAGQDb/6AAKADQ/6cAHQDd/6kAHwDa/5IAGQDb/6AAFABBAJMAHwDa/5IAFABBAJMAGgA/AIUAMQBBAIcANwDb/5MAKQDa/44AMQBBAIcAKQDa/44AJAA/AIEAGABCAJ0AHQDd/6kAKwDe/68AGABCAJ0AKwDe/68AJgBDAKMANQDe/6sAOwDd/50ANQBCAJEANQDe/6sANQBCAJEAMABDAJ8ALQDO/5kAKQDa/44ANwDb/5MAMQDQ/6MAOwDd/50ANQDe/6sAIwDO/50AGQDb/6AAHwDa/5IAKADQ/6cAKwDe/68AHQDd/6kAJwBNAIkAMQBBAIcAJAA/AIEAKwBPAJMAMABDAJ8ANQBCAJEAHQBNAI4AGgA/AIUAFABBAJMAIQBPAJcAGABCAJ0AJgBDAKMAGQA/AFcAFQA/AGEACQDa/1wAGQA/AFcACQDa/1wADQDa/1IA7P/e/1AA+P9DAFUA/P9DAEsA7P/e/1AA/P9DAEsA8P/e/0YADQBNAF4AEQBNAFQABwBPAFAADQBNAF4ABwBPAFAAAwBPAFkA+P/Q/0kAAgDO/00A/v/O/1cA+P/Q/0kA/v/O/1cA9P/Q/1MA+//b/2IABwBBAGcA/v9CAGMA+//b/2IA/v9CAGMA8f/d/14ACgBCAEUAFABBAEkABwDb/0QACgBCAEUABwDb/0QA/v/d/0AAEQBNAFQADQBNAF4AFQA/AGEAEQBNAFQAFQA/AGEAGQA/AFcA+P9DAFUAAwBPAFkABwBPAFAA+P9DAFUABwBPAFAA/P9DAEsABwBBAGcADQBNAF4AAwBPAFkABwBBAGcAAwBPAFkA/v9CAGMABwBPAFAAEQBNAFQAFABBAEkABwBPAFAAFABBAEkACgBCAEUACQDa/1wA/v/O/1cAAgDO/00ACQDa/1wAAgDO/00ADQDa/1IA+P/Q/0kA9P/Q/1MA7P/e/1AA+P/Q/0kA7P/e/1AA8P/e/0YA9P/Q/1MA/v/O/1cA+//b/2IA9P/Q/1MA+//b/2IA8f/d/14ABwDb/0QAAgDO/00A+P/Q/0kABwDb/0QA+P/Q/0kA/v/d/0AADQDa/1IABwDb/0QAFABBAEkADQDa/1IAFABBAEkAGQA/AFcABwBBAGcA+//b/2IACQDa/1wABwBBAGcACQDa/1wAFQA/AGEACgBCAEUA/v/d/0AA8P/e/0YACgBCAEUA8P/e/0YA/P9DAEsA7P/e/1AA8f/d/14A/v9CAGMA7P/e/1AA/v9CAGMA+P9DAFUA/v/O/1cACQDa/1wA+//b/2IA9P/Q/1MA8f/d/14A7P/e/1AAAgDO/00ABwDb/0QADQDa/1IA+P/Q/0kA8P/e/0YA/v/d/0AADQBNAF4ABwBBAGcAFQA/AGEAAwBPAFkA+P9DAFUA/v9CAGMAEQBNAFQAGQA/AFcAFABBAEkABwBPAFAACgBCAEUA/P9DAEsAeQA/ALcAdQA/AMEAaQDa/7wAeQA/ALcAaQDa/7wAbQDa/7IATADe/7AAWABDALUAXABDAKsATADe/7AAXABDAKsAUADe/6YAbQBNAL4AcQBNALQAZwBPALAAbQBNAL4AZwBPALAAYwBPALkAWADQ/6kAYgDO/60AXgDO/7cAWADQ/6kAXgDO/7cAVADQ/7MAWwDb/8IAZwBBAMcAXgBCAMMAWwDb/8IAXgBCAMMAUQDd/74AagBCAKUAdABBAKkAZwDb/6QAagBCAKUAZwDb/6QAXgDd/6AAcQBNALQAbQBNAL4AdQA/AMEAcQBNALQAdQA/AMEAeQA/ALcAWABDALUAYwBPALkAZwBPALAAWABDALUAZwBPALAAXABDAKsAZwBBAMcAbQBNAL4AYwBPALkAZwBBAMcAYwBPALkAXgBCAMMAZwBPALAAcQBNALQAdABBAKkAZwBPALAAdABBAKkAagBCAKUAaQDa/7wAXgDO/7cAYgDO/60AaQDa/7wAYgDO/60AbQDa/7IAWADQ/6kAVADQ/7MATADe/7AAWADQ/6kATADe/7AAUADe/6YAVADQ/7MAXgDO/7cAWwDb/8IAVADQ/7MAWwDb/8IAUQDd/74AZwDb/6QAYgDO/60AWADQ/6kAZwDb/6QAWADQ/6kAXgDd/6AAbQDa/7IAZwDb/6QAdABBAKkAbQDa/7IAdABBAKkAeQA/ALcAZwBBAMcAWwDb/8IAaQDa/7wAZwBBAMcAaQDa/7wAdQA/AMEAagBCAKUAXgDd/6AAUADe/6YAagBCAKUAUADe/6YAXABDAKsATADe/7AAUQDd/74AXgBCAMMATADe/7AAXgBCAMMAWABDALUAXgDO/7cAaQDa/7wAWwDb/8IAVADQ/7MAUQDd/74ATADe/7AAYgDO/60AZwDb/6QAbQDa/7IAWADQ/6kAUADe/6YAXgDd/6AAbQBNAL4AZwBBAMcAdQA/AMEAYwBPALkAWABDALUAXgBCAMMAcQBNALQAeQA/ALcAdABBAKkAZwBPALAAagBCAKUAXABDAKsAeQA/ALf/dQA/AMH/aQDa/7z/eQA/ALf/aQDa/7z/bQDa/7L/TADe/7D/WABDALX/XABDAKv/TADe/7D/XABDAKv/UADe/6b/bQBNAL7/cQBNALT/ZwBPALD/bQBNAL7/ZwBPALD/YwBPALn/WADQ/6n/YgDO/63/XgDO/7f/WADQ/6n/XgDO/7f/VADQ/7P/WwDb/8L/ZwBBAMf/XgBCAMP/WwDb/8L/XgBCAMP/UQDd/77/agBCAKX/dABBAKn/ZwDb/6T/agBCAKX/ZwDb/6T/XgDd/6D/cQBNALT/bQBNAL7/dQA/AMH/cQBNALT/dQA/AMH/eQA/ALf/WABDALX/YwBPALn/ZwBPALD/WABDALX/ZwBPALD/XABDAKv/ZwBBAMf/bQBNAL7/YwBPALn/ZwBBAMf/YwBPALn/XgBCAMP/ZwBPALD/cQBNALT/dABBAKn/ZwBPALD/dABBAKn/agBCAKX/aQDa/7z/XgDO/7f/YgDO/63/aQDa/7z/YgDO/63/bQDa/7L/WADQ/6n/VADQ/7P/TADe/7D/WADQ/6n/TADe/7D/UADe/6b/VADQ/7P/XgDO/7f/WwDb/8L/VADQ/7P/WwDb/8L/UQDd/77/ZwDb/6T/YgDO/63/WADQ/6n/ZwDb/6T/WADQ/6n/XgDd/6D/bQDa/7L/ZwDb/6T/dABBAKn/bQDa/7L/dABBAKn/eQA/ALf/ZwBBAMf/WwDb/8L/aQDa/7z/ZwBBAMf/aQDa/7z/dQA/AMH/agBCAKX/XgDd/6D/UADe/6b/agBCAKX/UADe/6b/XABDAKv/TADe/7D/UQDd/77/XgBCAMP/TADe/7D/XgBCAMP/WABDALX/XgDO/7f/aQDa/7z/WwDb/8L/VADQ/7P/UQDd/77/TADe/7D/YgDO/63/ZwDb/6T/bQDa/7L/WADQ/6n/UADe/6b/XgDd/6D/bQBNAL7/ZwBBAMf/dQA/AMH/YwBPALn/WABDALX/XgBCAMP/cQBNALT/eQA/ALf/dABBAKn/ZwBPALD/agBCAKX/XABDAKv/mv8/AIUApP8/AIEAqf/a/44Amv8/AIUAqf/a/44An//a/5IAtf/e/6sAsP9DAJ8Apv9DAKMAtf/e/6sApv9DAKMAq//e/68Ap/9NAIkAnf9NAI4Aof9PAJcAp/9NAIkAof9PAJcAq/9PAJMAqP/Q/6cAo//O/50Arf/O/5kAqP/Q/6cArf/O/5kAsf/Q/6MAt//b/5MAsf9BAIcAtf9CAJEAt//b/5MAtf9CAJEAu//d/50AmP9CAJ0AlP9BAJMAmf/b/6AAmP9CAJ0Amf/b/6AAnf/d/6kAnf9NAI4Ap/9NAIkApP8/AIEAnf9NAI4ApP8/AIEAmv8/AIUAsP9DAJ8Aq/9PAJMAof9PAJcAsP9DAJ8Aof9PAJcApv9DAKMAsf9BAIcAp/9NAIkAq/9PAJMAsf9BAIcAq/9PAJMAtf9CAJEAof9PAJcAnf9NAI4AlP9BAJMAof9PAJcAlP9BAJMAmP9CAJ0Aqf/a/44Arf/O/5kAo//O/50Aqf/a/44Ao//O/50An//a/5IAqP/Q/6cAsf/Q/6MAtf/e/6sAqP/Q/6cAtf/e/6sAq//e/68Asf/Q/6MArf/O/5kAt//b/5MAsf/Q/6MAt//b/5MAu//d/50Amf/b/6AAo//O/50AqP/Q/6cAmf/b/6AAqP/Q/6cAnf/d/6kAn//a/5IAmf/b/6AAlP9BAJMAn//a/5IAlP9BAJMAmv8/AIUAsf9BAIcAt//b/5MAqf/a/44Asf9BAIcAqf/a/44ApP8/AIEAmP9CAJ0Anf/d/6kAq//e/68AmP9CAJ0Aq//e/68Apv9DAKMAtf/e/6sAu//d/50Atf9CAJEAtf/e/6sAtf9CAJEAsP9DAJ8Arf/O/5kAqf/a/44At//b/5MAsf/Q/6MAu//d/50Atf/e/6sAo//O/50Amf/b/6AAn//a/5IAqP/Q/6cAq//e/68Anf/d/6kAp/9NAIkAsf9BAIcApP8/AIEAq/9PAJMAsP9DAJ8Atf9CAJEAnf9NAI4Amv8/AIUAlP9BAJMAof9PAJcAmP9CAJ0Apv9DAKMA",c:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},carote:{v:"4P4AAAAB4P4AAAAB4P4AAAD/4P4AAAAB4P4AAAD/4P4AAAD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/wD/AAHg/wD/AAHg/wABAP/g/wD/AAHg/wABAP/g/wABAAEAACABAAEAACABAP8AACABAAEAACABAP8AACABAP8AACABAAEAAOD+AAEAAOD+AP8AAOD+AAEAAOD+AP8AAOD+AP8AAOD+4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+AP/g/wD/AP/g/wAB4P4AAAABAP/g/wD/4P4AAAAB4P4AAAD/AP/g/wABAAHg/wABAAEAACABAP/g/wABAAEAACABAP8AACABAAEAAOD+AAHg/wD/AP/g/wD/AAEAAOD+AP/g/wD/AP8AAOD+AP8AAOD+AP8AAOD+4P4AAAD/AP8AAOD+4P4AAAD/4P4AAAD/AP8AACABAP8AACAB4P4AAAABAP8AACAB4P4AAAAB4P4AAAABAP/g/wABAP8AACAB4P4AAAABAP/g/wD/4P4AAAD/AP8AAOD+AP8gAAAB4P4AAAABAP8AACABAP8gAAD/AP8AAOD+4P4AAAD/IAEAAAABIAEAAAABIAEAAAD/IAEAAAABIAEAAAD/IAEAAAD/AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/IAEAAAABAAHg/wABAAHg/wD/IAEAAAABAAHg/wD/IAEAAAD/AAEAAOD+AAEAAOD+IAEAAAD/AAEAAOD+IAEAAAD/IAEAAAD/AAEAACABAAEAACABIAEAAAABAAEAACABIAEAAAABIAEAAAABAAEAACABAAHg/wABIAEAAAABIAEAAAD/AAHg/wD/AAEAAOD+IAEAAAABAAEgAAABAAEAACABAAEAAOD+AAEgAAD/IAEAAAD/e/8/AMD/rv9UAKD/e/8/AID/rv9UAKD/e/8/AMD/uP+r/4D/rv9UAKD/rv9UAGD/e/8/AID/rv9UAGD/rv9UAKD/uP+r/4D/rv9UAGD/e/8/AED/e/8/AID/e/8/AED/rv9UAGD/uP+r/4D/e/8/AED/SP8qAGD/e/8/AID/SP8qAGD/e/8/AED/uP+r/4D/SP8qAGD/SP8qAKD/e/8/AID/SP8qAKD/SP8qAGD/uP+r/4D/SP8qAKD/e/8/AMD/e/8/AID/e/8/AMD/SP8qAKD/uP+r/4D/d/9+AFz/fP98AFP/c/94AE//d/9+AFz/c/94AE//bv97AFj/hf8tAG3/jv8wAHH/if8zAHr/hf8tAG3/if8zAHr/gP8vAHb/gf9CAH7/df90AGr/bP9wAGb/gf9CAH7/bP9wAGb/eP8+AHr/e/9pAEv/hP9tAE//kP87AGP/e/9pAEv/kP87AGP/h/83AF//df90AGr/d/9+AFz/bv97AFj/df90AGr/bv97AFj/bP9wAGb/c/94AE//fP98AFP/hP9tAE//c/94AE//hP9tAE//e/9pAEv/gP8vAHb/if8zAHr/gf9CAH7/gP8vAHb/gf9CAH7/eP8+AHr/kP87AGP/jv8wAHH/hf8tAG3/kP87AGP/hf8tAG3/h/83AF//iP9zAFz/g/92AGX/j/9DAHn/iP9zAFz/j/9DAHn/lP9BAHD/fP98AFP/d/9+AFz/g/92AGX/fP98AFP/g/92AGX/iP9zAFz/j/9DAHn/if8zAHr/jv8wAHH/j/9DAHn/jv8wAHH/lP9BAHD/lP9BAHD/kP87AGP/hP9tAE//lP9BAHD/hP9tAE//iP9zAFz/df90AGr/gf9CAH7/j/9DAHn/df90AGr/j/9DAHn/g/92AGX/if8zAHr/j/9DAHn/gf9CAH7/jv8wAHH/kP87AGP/lP9BAHD/d/9+AFz/df90AGr/g/92AGX/fP98AFP/iP9zAFz/hP9tAE//dP84AG3/Z/9qAFn/bf9oAFD/dP84AG3/bf9oAFD/ef81AGT/Z/9qAFn/bv97AFj/c/94AE//Z/9qAFn/c/94AE//bf9oAFD/hf8tAG3/gP8vAHb/dP84AG3/hf8tAG3/dP84AG3/ef81AGT/e/9pAEv/h/83AF//ef81AGT/e/9pAEv/ef81AGT/bf9oAFD/dP84AG3/eP8+AHr/bP9wAGb/dP84AG3/bP9wAGb/Z/9qAFn/dP84AG3/gP8vAHb/eP8+AHr/h/83AF//hf8tAG3/ef81AGT/bP9wAGb/bv97AFj/Z/9qAFn/bf9oAFD/c/94AE//e/9pAEv/W/9oAK7/Xf9tAKX/VP9qAKH/W/9oAK7/VP9qAKH/Uv9kAKr/ff8nAIT/hv8rAIj/hP8mAJH/ff8nAIT/hP8mAJH/e/8iAI3/e/8sAJ//YP9YALL/V/9UAK7/e/8sAJ//V/9UAK7/cv8oAJv/Xf9kAJP/Zv9oAJf/gf87AIT/Xf9kAJP/gf87AIT/eP84AH//YP9YALL/W/9oAK7/Uv9kAKr/YP9YALL/Uv9kAKr/V/9UAK7/VP9qAKH/Xf9tAKX/Zv9oAJf/VP9qAKH/Zv9oAJf/Xf9kAJP/e/8iAI3/hP8mAJH/e/8sAJ//e/8iAI3/e/8sAJ//cv8oAJv/gf87AIT/hv8rAIj/ff8nAIT/gf87AIT/ff8nAIT/eP84AH//bf9mAKT/a/9hAK3/hv81AJr/bf9mAKT/hv81AJr/iP86AJH/Xf9tAKX/W/9oAK7/a/9hAK3/Xf9tAKX/a/9hAK3/bf9mAKT/hv81AJr/hP8mAJH/hv8rAIj/hv81AJr/hv8rAIj/iP86AJH/iP86AJH/gf87AIT/Zv9oAJf/iP86AJH/Zv9oAJf/bf9mAKT/YP9YALL/e/8sAJ//hv81AJr/YP9YALL/hv81AJr/a/9hAK3/e/8sAJ//hP8mAJH/hv81AJr/iP86AJH/hv8rAIj/gf87AIT/a/9hAK3/W/9oAK7/YP9YALL/Zv9oAJf/Xf9tAKX/bf9mAKT/a/8pAI7/UP9WAKH/Uv9bAJj/a/8pAI7/Uv9bAJj/bf8vAIT/UP9WAKH/Uv9kAKr/VP9qAKH/UP9WAKH/VP9qAKH/Uv9bAJj/ff8nAIT/e/8iAI3/a/8pAI7/ff8nAIT/a/8pAI7/bf8vAIT/Xf9kAJP/eP84AH//bf8vAIT/Xf9kAJP/bf8vAIT/Uv9bAJj/a/8pAI7/cv8oAJv/V/9UAK7/a/8pAI7/V/9UAK7/UP9WAKH/e/8iAI3/cv8oAJv/a/8pAI7/ff8nAIT/bf8vAIT/eP84AH//Uv9kAKr/UP9WAKH/V/9UAK7/VP9qAKH/Xf9kAJP/Uv9bAJj/Wf+ZAIf/Xf+aAH3/U/+XAHn/Wf+ZAIf/U/+XAHn/UP+VAIP/hP8gAHn/jv8kAH3/iv8iAIf/hP8gAHn/iv8iAIf/gf8fAIP/fv81AJH/Xf+DAJH/VP+AAI3/fv81AJH/VP+AAI3/df8xAI3/X/+EAG//aP+IAHP/if85AHP/X/+EAG//if85AHP/gP82AG//Xf+DAJH/Wf+ZAIf/UP+VAIP/Xf+DAJH/UP+VAIP/VP+AAI3/U/+XAHn/Xf+aAH3/aP+IAHP/U/+XAHn/aP+IAHP/X/+EAG//gf8fAIP/iv8iAIf/fv81AJH/gf8fAIP/fv81AJH/df8xAI3/if85AHP/jv8kAH3/hP8gAHn/if85AHP/hP8gAHn/gP82AG//bv+KAIH/av+JAIv/i/86AIv/bv+KAIH/i/86AIv/jv87AIH/Xf+aAH3/Wf+ZAIf/av+JAIv/Xf+aAH3/av+JAIv/bv+KAIH/i/86AIv/iv8iAIf/jv8kAH3/i/86AIv/jv8kAH3/jv87AIH/jv87AIH/if85AHP/aP+IAHP/jv87AIH/aP+IAHP/bv+KAIH/Xf+DAJH/fv81AJH/i/86AIv/Xf+DAJH/i/86AIv/av+JAIv/fv81AJH/iv8iAIf/i/86AIv/jv87AIH/jv8kAH3/if85AHP/av+JAIv/Wf+ZAIf/Xf+DAJH/aP+IAHP/Xf+aAH3/bv+KAIH/b/8vAH//T/99AH//Uv9/AHX/b/8vAH//Uv9/AHX/c/8wAHX/T/99AH//UP+VAIP/U/+XAHn/T/99AH//U/+XAHn/Uv9/AHX/hP8gAHn/gf8fAIP/b/8vAH//hP8gAHn/b/8vAH//c/8wAHX/X/+EAG//gP82AG//c/8wAHX/X/+EAG//c/8wAHX/Uv9/AHX/b/8vAH//df8xAI3/VP+AAI3/b/8vAH//VP+AAI3/T/99AH//gf8fAIP/df8xAI3/b/8vAH//hP8gAHn/c/8wAHX/gP82AG//UP+VAIP/T/99AH//VP+AAI3/U/+XAHn/X/+EAG//Uv9/AHX/SP8qAKD/e/8/AMD/e/8/AID/e/8/AMD/SP8qAKD/uP+r/4D/SP8qAGD/SP8qAKD/e/8/AID/SP8qAKD/SP8qAGD/uP+r/4D/e/8/AED/SP8qAGD/e/8/AID/SP8qAGD/e/8/AED/uP+r/4D/rv9UAGD/e/8/AED/e/8/AID/e/8/AED/rv9UAGD/uP+r/4D/rv9UAKD/rv9UAGD/e/8/AID/rv9UAGD/rv9UAKD/uP+r/4D/e/8/AMD/rv9UAKD/e/8/AID/rv9UAKD/e/8/AMD/uP+r/4D/0/9QAKwA+f9cAG8Asf9SAGwA+f9cAG8A0/9QAKwAyv+f/1gA+f9cAG8A1/9eAC8Asf9SAGwA1/9eAC8A+f9cAG8Ayv+f/1gA1/9eAC8Aj/9UACsAsf9SAGwAj/9UACsA1/9eAC8Ayv+f/1gAj/9UACsAaf9IAGgAsf9SAGwAaf9IAGgAj/9UACsAyv+f/1gAaf9IAGgAi/9GAKgAsf9SAGwAi/9GAKgAaf9IAGgAyv+f/1gAi/9GAKgA0/9QAKwAsf9SAGwA0/9QAKwAi/9GAKgAyv+f/1gAqf+bAEUAqP+XADkAnP+WADoAqf+bAEUAnP+WADoAnf+ZAEYArP88AFUAuP8+AFQAuP9BAF8ArP88AFUAuP9BAF8ArP8/AGAAtv9UAGcArP+PAFUAoP+OAFYAtv9UAGcAoP+OAFYAqv9SAGgAnv+DADMAqv+FADIAtf9JAEQAnv+DADMAtf9JAEQAqf9HAEUArP+PAFUAqf+bAEUAnf+ZAEYArP+PAFUAnf+ZAEYAoP+OAFYAnP+WADoAqP+XADkAqv+FADIAnP+WADoAqv+FADIAnv+DADMArP8/AGAAuP9BAF8Atv9UAGcArP8/AGAAtv9UAGcAqv9SAGgAtf9JAEQAuP8+AFQArP88AFUAtf9JAEQArP88AFUAqf9HAEUAt/+KAD0At/+OAEgAwf9SAFoAt/+KAD0Awf9SAFoAwf9OAE4AqP+XADkAqf+bAEUAt/+OAEgAqP+XADkAt/+OAEgAt/+KAD0Awf9SAFoAuP9BAF8AuP8+AFQAwf9SAFoAuP8+AFQAwf9OAE4Awf9OAE4Atf9JAEQAqv+FADIAwf9OAE4Aqv+FADIAt/+KAD0ArP+PAFUAtv9UAGcAwf9SAFoArP+PAFUAwf9SAFoAt/+OAEgAuP9BAF8Awf9SAFoAtv9UAGcAuP8+AFQAtf9JAEQAwf9OAE4Aqf+bAEUArP+PAFUAt/+OAEgAqP+XADkAt/+KAD0Aqv+FADIAnv9NAF0Ak/+IAEsAk/+FAD8Anv9NAF0Ak/+FAD8Anf9JAFEAk/+IAEsAnf+ZAEYAnP+WADoAk/+IAEsAnP+WADoAk/+FAD8ArP88AFUArP8/AGAAnv9NAF0ArP88AFUAnv9NAF0Anf9JAFEAnv+DADMAqf9HAEUAnf9JAFEAnv+DADMAnf9JAFEAk/+FAD8Anv9NAF0Aqv9SAGgAoP+OAFYAnv9NAF0AoP+OAFYAk/+IAEsAnv9NAF0ArP8/AGAAqv9SAGgAqf9HAEUArP88AFUAnf9JAFEAoP+OAFYAnf+ZAEYAk/+IAEsAk/+FAD8AnP+WADoAnv+DADMAtP+GAKcAsv+MAJ0Apv+KAJ4AtP+GAKcApv+KAJ4AqP+EAKgAr/83AHEAu/85AHAAvP8zAHoAr/83AHEAvP8zAHoAsP8yAHsAvf88AIwAt/9zAKsAq/9xAKwAvf88AIwAq/9xAKwAsf86AI0Apv+CAIwAsv+EAIsAt/9MAGwApv+CAIwAt/9MAGwAq/9LAG0At/9zAKsAtP+GAKcAqP+EAKgAt/9zAKsAqP+EAKgAq/9xAKwApv+KAJ4Asv+MAJ0Asv+EAIsApv+KAJ4Asv+EAIsApv+CAIwAsP8yAHsAvP8zAHoAvf88AIwAsP8yAHsAvf88AIwAsf86AI0At/9MAGwAu/85AHAAr/83AHEAt/9MAGwAr/83AHEAq/9LAG0Av/+AAJQAwf96AJ8Ax/9DAIEAv/+AAJQAx/9DAIEAxf9JAHYAsv+MAJ0AtP+GAKcAwf96AJ8Asv+MAJ0Awf96AJ8Av/+AAJQAx/9DAIEAvP8zAHoAu/85AHAAx/9DAIEAu/85AHAAxf9JAHYAxf9JAHYAt/9MAGwAsv+EAIsAxf9JAHYAsv+EAIsAv/+AAJQAt/9zAKsAvf88AIwAx/9DAIEAt/9zAKsAx/9DAIEAwf96AJ8Avf88AIwAvP8zAHoAx/9DAIEAxf9JAHYAu/85AHAAt/9MAGwAwf96AJ8AtP+GAKcAt/9zAKsAsv+EAIsAsv+MAJ0Av/+AAJQAo/8+AIQAnf91AKIAm/97AJcAo/8+AIQAm/97AJcAof9DAHkAnf91AKIAqP+EAKgApv+KAJ4Anf91AKIApv+KAJ4Am/97AJcAr/83AHEAsP8yAHsAo/8+AIQAr/83AHEAo/8+AIQAof9DAHkApv+CAIwAq/9LAG0Aof9DAHkApv+CAIwAof9DAHkAm/97AJcAo/8+AIQAsf86AI0Aq/9xAKwAo/8+AIQAq/9xAKwAnf91AKIAsP8yAHsAsf86AI0Ao/8+AIQAr/83AHEAof9DAHkAq/9LAG0AqP+EAKgAnf91AKIAq/9xAKwApv+KAJ4Apv+CAIwAm/97AJcAqP++AH0Ap/+/AHEAm/++AHIAqP++AH0Am/++AHIAnP+8AH4Ar/8uAGIAu/8wAGEAvP8uAG0Ar/8uAGIAvP8uAG0AsP8tAG4Auv9FAHwArP+lAIYAoP+jAIcAuv9FAHwAoP+jAIcArv9EAH0Anf+nAGMAqf+pAGIAtv9JAFgAnf+nAGMAtv9JAFgAqv9HAFkArP+lAIYAqP++AH0AnP+8AH4ArP+lAIYAnP+8AH4AoP+jAIcAm/++AHIAp/+/AHEAqf+pAGIAm/++AHIAqf+pAGIAnf+nAGMAsP8tAG4AvP8uAG0Auv9FAHwAsP8tAG4Auv9FAHwArv9EAH0Atv9JAFgAu/8wAGEAr/8uAGIAtv9JAFgAr/8uAGIAqv9HAFkAtv+pAG0At/+oAHkAxf9IAG8Atv+pAG0Axf9IAG8Aw/9JAGMAp/+/AHEAqP++AH0At/+oAHkAp/+/AHEAt/+oAHkAtv+pAG0Axf9IAG8AvP8uAG0Au/8wAGEAxf9IAG8Au/8wAGEAw/9JAGMAw/9JAGMAtv9JAFgAqf+pAGIAw/9JAGMAqf+pAGIAtv+pAG0ArP+lAIYAuv9FAHwAxf9IAG8ArP+lAIYAxf9IAG8At/+oAHkAuv9FAHwAvP8uAG0Axf9IAG8Aw/9JAGMAu/8wAGEAtv9JAFgAt/+oAHkAqP++AH0ArP+lAIYAqf+pAGIAp/+/AHEAtv+pAG0Aof9DAHIAk/+jAHwAkv+kAHAAof9DAHIAkv+kAHAAoP9EAGYAk/+jAHwAnP+8AH4Am/++AHIAk/+jAHwAm/++AHIAkv+kAHAAr/8uAGIAsP8tAG4Aof9DAHIAr/8uAGIAof9DAHIAoP9EAGYAnf+nAGMAqv9HAFkAoP9EAGYAnf+nAGMAoP9EAGYAkv+kAHAAof9DAHIArv9EAH0AoP+jAIcAof9DAHIAoP+jAIcAk/+jAHwAsP8tAG4Arv9EAH0Aof9DAHIAr/8uAGIAoP9EAGYAqv9HAFkAnP+8AH4Ak/+jAHwAoP+jAIcAm/++AHIAnf+nAGMAkv+kAHAAi/9GAKgA0/9QAKwAsf9SAGwA0/9QAKwAi/9GAKgAyv+f/1gAaf9IAGgAi/9GAKgAsf9SAGwAi/9GAKgAaf9IAGgAyv+f/1gAj/9UACsAaf9IAGgAsf9SAGwAaf9IAGgAj/9UACsAyv+f/1gA1/9eAC8Aj/9UACsAsf9SAGwAj/9UACsA1/9eAC8Ayv+f/1gA+f9cAG8A1/9eAC8Asf9SAGwA1/9eAC8A+f9cAG8Ayv+f/1gA0/9QAKwA+f9cAG8Asf9SAGwA+f9cAG8A0/9QAKwAyv+f/1gAIwBmAOv/YwBgABQAZQBWAMn/YwBgABQAIwBmAOv/RQCc/+L/YwBgABQApQBQAPL/ZQBWAMn/pQBQAPL/YwBgABQARQCc/+L/pQBQAPL/pwBFAKf/ZQBWAMn/pwBFAKf/pQBQAPL/RQCc/+L/pwBFAKf/aABLAH7/ZQBWAMn/aABLAH7/pwBFAKf/RQCc/+L/aABLAH7/JgBbAJ//ZQBWAMn/JgBbAJ//aABLAH7/RQCc/+L/JgBbAJ//IwBmAOv/ZQBWAMn/IwBmAOv/JgBbAJ//RQCc/+L/oQCTAMH/rACMAMH/qwCLALX/oQCTAMH/qwCLALX/oACSALX/dgA5AMP/dwA6AND/bABBAND/dgA5AMP/bABBAND/awBAAMT/awBWAM7/jgCMAMT/jACLALj/awBWAM7/jACLALj/aQBUAMH/rAB2ALf/rgB4AMP/igBBAM3/rAB2ALf/igBBAM3/iQBAAMH/jgCMAMT/oQCTAMH/oACSALX/jgCMAMT/oACSALX/jACLALj/qwCLALX/rACMAMH/rgB4AMP/qwCLALX/rgB4AMP/rAB2ALf/awBAAMT/bABBAND/awBWAM7/awBAAMT/awBWAM7/aQBUAMH/igBBAM3/dwA6AND/dgA5AMP/igBBAM3/dgA5AMP/iQBAAMH/pACAAND/mgCHAND/dgBQANr/pACAAND/dgBQANr/gQBJANr/rACMAMH/oQCTAMH/mgCHAND/rACMAMH/mgCHAND/pACAAND/dgBQANr/bABBAND/dwA6AND/dgBQANr/dwA6AND/gQBJANr/gQBJANr/igBBAM3/rgB4AMP/gQBJANr/rgB4AMP/pACAAND/jgCMAMT/awBWAM7/dgBQANr/jgCMAMT/dgBQANr/mgCHAND/bABBAND/dgBQANr/awBWAM7/dwA6AND/igBBAM3/gQBJANr/oQCTAMH/jgCMAMT/mgCHAND/rACMAMH/pACAAND/rgB4AMP/cwBMALX/lgCDAKv/oAB8AKv/cwBMALX/oAB8AKv/fQBFALT/lgCDAKv/oACSALX/qwCLALX/lgCDAKv/qwCLALX/oAB8AKv/dgA5AMP/awBAAMT/cwBMALX/dgA5AMP/cwBMALX/fQBFALT/rAB2ALf/iQBAAMH/fQBFALT/rAB2ALf/fQBFALT/oAB8AKv/cwBMALX/aQBUAMH/jACLALj/cwBMALX/jACLALj/lgCDAKv/cwBMALX/awBAAMT/aQBUAMH/iQBAAMH/dgA5AMP/fQBFALT/jACLALj/oACSALX/lgCDAKv/oAB8AKv/qwCLALX/rAB2ALf/OACbAMv/RACdAMn/QwCcAL3/OACbAMv/QwCcAL3/NwCZAL7/WQA8AMb/WgA9ANL/TgA7ANT/WQA8AMb/TgA7ANT/TAA5AMf/PgBIANT/LwCIAM7/LgCHAMH/PgBIANT/LgCHAMH/PABHAMf/UwCOAL3/VACQAMn/YwBQAM//UwCOAL3/YwBQAM//YQBPAMP/LwCIAM7/OACbAMv/NwCZAL7/LwCIAM7/NwCZAL7/LgCHAMH/QwCcAL3/RACdAMn/VACQAMn/QwCcAL3/VACQAMn/UwCOAL3/TAA5AMf/TgA7ANT/PgBIANT/TAA5AMf/PgBIANT/PABHAMf/YwBQAM//WgA9ANL/WQA8AMb/YwBQAM//WQA8AMb/YQBPAMP/SQCPANf/PQCMANn/SwBMAN//SQCPANf/SwBMAN//WABPAN3/RACdAMn/OACbAMv/PQCMANn/RACdAMn/PQCMANn/SQCPANf/SwBMAN//TgA7ANT/WgA9ANL/SwBMAN//WgA9ANL/WABPAN3/WABPAN3/YwBQAM//VACQAMn/WABPAN3/VACQAMn/SQCPANf/LwCIAM7/PgBIANT/SwBMAN//LwCIAM7/SwBMAN//PQCMANn/PgBIANT/TgA7ANT/SwBMAN//WABPAN3/WgA9ANL/YwBQAM//PQCMANn/OACbAMv/LwCIAM7/VACQAMn/RACdAMn/SQCPANf/SABIALn/OQCIALP/RgCKALL/SABIALn/RgCKALL/VABLALj/OQCIALP/NwCZAL7/QwCcAL3/OQCIALP/QwCcAL3/RgCKALL/WQA8AMb/TAA5AMf/SABIALn/WQA8AMb/SABIALn/VABLALj/UwCOAL3/YQBPAMP/VABLALj/UwCOAL3/VABLALj/RgCKALL/SABIALn/PABHAMf/LgCHAMH/SABIALn/LgCHAMH/OQCIALP/TAA5AMf/PABHAMf/SABIALn/WQA8AMb/VABLALj/YQBPAMP/NwCZAL7/OQCIALP/LgCHAMH/QwCcAL3/UwCOAL3/RgCKALL/cwDGAMD/fwDEAL//fgDDALL/cwDGAMD/fgDDALL/cgDFALP/ZAAvAMb/ZQAwANP/WQAyANT/ZAAvAMb/WQAyANT/WAAxAMf/UQBNANH/YgCwAMT/YQCvALj/UQBNANH/YQCvALj/UABMAMX/hgCoALX/iACpAMH/dgBGAM//hgCoALX/dgBGAM//dQBFAML/YgCwAMT/cwDGAMD/cgDFALP/YgCwAMT/cgDFALP/YQCvALj/fgDDALL/fwDEAL//iACpAMH/fgDDALL/iACpAMH/hgCoALX/WAAxAMf/WQAyANT/UQBNANH/WAAxAMf/UQBNANH/UABMAMX/dgBGAM//ZQAwANP/ZAAvAMb/dgBGAM//ZAAvAMb/dQBFAML/fACtAM//cACvAND/XwBMAN3/fACtAM//XwBMAN3/awBKANz/fwDEAL//cwDGAMD/cACvAND/fwDEAL//cACvAND/fACtAM//XwBMAN3/WQAyANT/ZQAwANP/XwBMAN3/ZQAwANP/awBKANz/awBKANz/dgBGAM//iACpAMH/awBKANz/iACpAMH/fACtAM//YgCwAMT/UQBNANH/XwBMAN3/YgCwAMT/XwBMAN3/cACvAND/UQBNANH/WQAyANT/XwBMAN3/awBKANz/ZQAwANP/dgBGAM//cACvAND/cwDGAMD/YgCwAMT/iACpAMH/fwDEAL//fACtAM//WwBIALf/bACrAKr/eQCpAKn/WwBIALf/eQCpAKn/ZwBGALf/bACrAKr/cgDFALP/fgDDALL/bACrAKr/fgDDALL/eQCpAKn/ZAAvAMb/WAAxAMf/WwBIALf/ZAAvAMb/WwBIALf/ZwBGALf/hgCoALX/dQBFAML/ZwBGALf/hgCoALX/ZwBGALf/eQCpAKn/WwBIALf/UABMAMX/YQCvALj/WwBIALf/YQCvALj/bACrAKr/WAAxAMf/UABMAMX/WwBIALf/ZAAvAMb/ZwBGALf/dQBFAML/cgDFALP/bACrAKr/YQCvALj/fgDDALL/hgCoALX/eQCpAKn/JgBbAJ//IwBmAOv/ZQBWAMn/IwBmAOv/JgBbAJ//RQCc/+L/aABLAH7/JgBbAJ//ZQBWAMn/JgBbAJ//aABLAH7/RQCc/+L/pwBFAKf/aABLAH7/ZQBWAMn/aABLAH7/pwBFAKf/RQCc/+L/pQBQAPL/pwBFAKf/ZQBWAMn/pwBFAKf/pQBQAPL/RQCc/+L/YwBgABQApQBQAPL/ZQBWAMn/pQBQAPL/YwBgABQARQCc/+L/IwBmAOv/YwBgABQAZQBWAMn/YwBgABQAIwBmAOv/RQCc/+L/",c:"DAwBAQwMDAwMDAQEBAQEBAwMDAwMDAwMDAwMDAQEDAwEBAwMDAwMDAwMBAQVERURFREVERURFREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEQgRCBEVEQgRCBEVERURFREVERURFREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEQgRCBEVEQgRCBEVERURFREVERURFREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVEQgRCBEVEQgRCBE="},"orto-terra":{v:"4P4AAAAB4P4AAAAB4P4AAAD/4P4AAAAB4P4AAAD/4P4AAAD/AAEgAAABAAEgAAD/AP8gAAD/AAEgAAABAP8gAAD/AP8gAAABAP/g/wD/AAHg/wD/AAHg/wABAP/g/wD/AAHg/wABAP/g/wABAAEAACABAAEAACABAP8AACABAAEAACABAP8AACABAP8AACABAAEAAOD+AAEAAOD+AP8AAOD+AAEAAOD+AP8AAOD+AP8AAOD+4P4AAAABAP8gAAABAP8gAAD/4P4AAAABAP8gAAD/4P4AAAD/AAEAACABAAEgAAABAP8gAAABAAEAACABAP8gAAABAP8AACABAP8gAAD/AAEgAAD/AAEAAOD+AP8gAAD/AAEAAOD+AP8AAOD+AP/g/wD/AP/g/wAB4P4AAAABAP/g/wD/4P4AAAAB4P4AAAD/AP/g/wABAAHg/wABAAEAACABAP/g/wABAAEAACABAP8AACABAAEAAOD+AAHg/wD/AP/g/wD/AAEAAOD+AP/g/wD/AP8AAOD+AP8AAOD+AP8AAOD+4P4AAAD/AP8AAOD+4P4AAAD/4P4AAAD/AP8AACABAP8AACAB4P4AAAABAP8AACAB4P4AAAAB4P4AAAABAP/g/wABAP8AACAB4P4AAAABAP/g/wD/4P4AAAD/AP8AAOD+AP8gAAAB4P4AAAABAP8AACABAP8gAAD/AP8AAOD+4P4AAAD/IAEAAAABIAEAAAABIAEAAAD/IAEAAAABIAEAAAD/IAEAAAD/AAEgAAD/AAEgAAABIAEAAAABAAEgAAD/IAEAAAABIAEAAAD/IAEAAAABAAHg/wABAAHg/wD/IAEAAAABAAHg/wD/IAEAAAD/AAEAAOD+AAEAAOD+IAEAAAD/AAEAAOD+IAEAAAD/IAEAAAD/AAEAACABAAEAACABIAEAAAABAAEAACABIAEAAAABIAEAAAABAAEAACABAAHg/wABIAEAAAABIAEAAAD/AAHg/wD/AAEAAOD+IAEAAAABAAEgAAABAAEAACABAAEAAOD+AAEgAAD/IAEAAAD/",c:"DAwBAQwMDAwMDAQEBAQEBAwMDAwMDAwMDAwMDAQEDAwEBAwMDAwMDAwMBAQ="},"gatto-corpo":{v:"/f8gAHD/fQAgALj//f8gAAAAfQAgALj//f8gAHD//f8gAwAAff8gALj//f8gAHD//f8gAAAA/f8gAHD/ff8gALj//f8gAwAAff8gAEgAff8gALj//f8gAAAAff8gALj/ff8gAEgA/f8gAwAA/f8gAJAAff8gAEgA/f8gAAAAff8gAEgA/f8gAJAA/f8gAwAAfQAgAEgA/f8gAJAA/f8gAAAA/f8gAJAAfQAgAEgA/f8gAwAAfQAgALj/fQAgAEgA/f8gAAAAfQAgAEgAfQAgALj//f8gAwAA",c:"ExMTExMTExMTExMT"},"gatto-testa":{v:"mwAeA77/PgAeA2H//f9gAwAAmwAeA77/3QCAAqP/WQCAAiD/mwAeA77/WQCAAiD/PgAeA2H/3QCAAqP/mwDiAb7/PgDiAWH/3QCAAqP/PgDiAWH/WQCAAiD/PgDiAWH/mwDiAb7//f+gAQAAPgAeA2H/u/8eA2H//f9gAwAAPgAeA2H/WQCAAiD/oP+AAiD/PgAeA2H/oP+AAiD/u/8eA2H/WQCAAiD/PgDiAWH/u//iAWH/WQCAAiD/u//iAWH/oP+AAiD/u//iAWH/PgDiAWH//f+gAQAAu/8eA2H/Xv8eA77//f9gAwAAu/8eA2H/oP+AAiD/Hf+AAqP/u/8eA2H/Hf+AAqP/Xv8eA77/oP+AAiD/u//iAWH/Xv/iAb7/oP+AAiD/Xv/iAb7/Hf+AAqP/Xv/iAb7/u//iAWH//f+gAQAAXv8eA77/Xv8eA0EA/f9gAwAAXv8eA77/Hf+AAqP/Hf+AAl0AXv8eA77/Hf+AAl0AXv8eA0EAHf+AAqP/Xv/iAb7/Xv/iAUEAHf+AAqP/Xv/iAUEAHf+AAl0AXv/iAUEAXv/iAb7//f+gAQAAXv8eA0EAu/8eA54A/f9gAwAAXv8eA0EARP/fAkwAsP/fArgAXv8eA0EAsP/fArgAu/8eA54ARP/fAkwAHf+AAl0Ac/+AArMARP/fAkwAc/+AArMAjv/fApcAq/+/AsYAsP/fArgAjv/fApcAq/+/AsYAjv/fApcAhf+/AqAAc/+AArMAoP+AAuAAq/+/AsYAc/+AArMAq/+/AsYAhf+/AqAAHf+AAl0AXv/iAUEAu//iAZ4AHf+AAl0Au//iAZ4AoP+AAuAAu//iAZ4AXv/iAUEA/f+gAQAAu/8eA54APgAeA54A/f9gAwAAu/8eA54AoP+AAuAAWQCAAuAAu/8eA54AWQCAAuAAPgAeA54AoP+AAuAAu//iAZ4APgDiAZ4AoP+AAuAAPgDiAZ4AWQCAAuAAPgDiAZ4Au//iAZ4A/f+gAQAAPgAeA54AmwAeA0EA/f9gAwAAPgAeA54ASQDfArgAtQDfAkwAPgAeA54AtQDfAkwAmwAeA0EASQDfArgATwC/AsYAdAC/AqAASQDfArgAdAC/AqAAawDfApcAhwCAArMA3QCAAl0AtQDfAkwAhwCAArMAtQDfAkwAawDfApcATwC/AsYAWQCAAuAAhwCAArMATwC/AsYAhwCAArMAdAC/AqAAWQCAAuAAPgDiAZ4AmwDiAUEAWQCAAuAAmwDiAUEA3QCAAl0AmwDiAUEAPgDiAZ4A/f+gAQAAmwAeA0EAmwAeA77//f9gAwAAmwAeA0EA3QCAAl0A3QCAAqP/mwAeA0EA3QCAAqP/mwAeA77/3QCAAl0AmwDiAUEAmwDiAb7/3QCAAl0AmwDiAb7/3QCAAqP/mwDiAb7/mwDiAUEA/f+gAQAAfQCAAqD/3QCAAtD/fQCAAgAA3QCAAtD/fQCAAqD/fQAmBAAAHQCAAtD/fQCAAqD/fQCAAgAAfQCAAqD/HQCAAtD/fQAmBAAAHQCAAjAAHQCAAtD/fQCAAgAAHQCAAtD/HQCAAjAAfQAmBAAAfQCAAmAAHQCAAjAAfQCAAgAAHQCAAjAAfQCAAmAAfQAmBAAA3QCAAjAAfQCAAmAAfQCAAgAAfQCAAmAA3QCAAjAAfQAmBAAA3QCAAtD/3QCAAjAAfQCAAgAA3QCAAjAA3QCAAtD/fQAmBAAAff+AAqD/3f+AAtD/ff+AAgAA3f+AAtD/ff+AAqD/ff8mBAAAHf+AAtD/ff+AAqD/ff+AAgAAff+AAqD/Hf+AAtD/ff8mBAAAHf+AAjAAHf+AAtD/ff+AAgAAHf+AAtD/Hf+AAjAAff8mBAAAff+AAmAAHf+AAjAAff+AAgAAHf+AAjAAff+AAmAAff8mBAAA3f+AAjAAff+AAmAAff+AAgAAff+AAmAA3f+AAjAAff8mBAAA3f+AAtD/3f+AAjAAff+AAgAA3f+AAjAA3f+AAtD/ff8mBAAAOAD7AYIAXQA8At0A/f/4AegAXQA8At0A/f9lAhYB/f/4AegA/f9lAhYBnf88At0A/f/4AegAnf88At0Awf/7AYIA/f/4AegAwf/7AYIAOAD7AYIA/f/4AegAXQA8At0AOACsAssA/f9lAhYBOAD7AYIAXQBqAm8AXQA8At0Awf/7AYIA/f9BAjcAOAD7AYIAnf88At0Anf9qAm8Awf/7AYIA/f9lAhYBwf+sAssAnf88At0AOACsAssAXQBqAm8A/f+vAmQAXQBqAm8A/f9BAjcA/f+vAmQA/f9BAjcAnf9qAm8A/f+vAmQAnf9qAm8Awf+sAssA/f+vAmQAwf+sAssAOACsAssA/f+vAmQAOACsAssAXQA8At0AXQBqAm8AXQBqAm8AOAD7AYIA/f9BAjcA/f9BAjcAwf/7AYIAnf9qAm8Anf9qAm8Anf88At0Awf+sAssAwf+sAssA/f9lAhYBOACsAssA",c:"AgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXFyAgAgICAgICAgICAgICFxcCAiAgAgICAgICAgICAgICAgICAhYCFgICAgICAgICAhYCFgICAgICAgICAgICAgICAgICAgICAhY="},"gatto-coda":{v:"6f89Afb+6f86AfX+6f8vAQX/6f9kASr/6f9TAQ3/6f89Afb+6f9CAYv/6f9oAWP/6f9kASr/6f/qAGr/6f8PAYf/6f9CAYv/6f/JALj/6f/EAKz/6f++AKD/6f/FALv/6f/IALv/6f/JALj/6f+YALD/6f+jAMH/6f+2AL3/6f+6ADX/6f+PAGj/6f+YALD/6f8SAVf/6f/uADj/6f+6ADX/6f8jARH/6f8jART/6f8vASH/6f89Afb+6f8vAQX/6f8jARH/6f/FALv/6f/JALj/6f++AKD/6f+YALD/6f+2AL3/6f/FALv/6f89Afb+6f8jARH/6f8vASH/6f+YALD/6f/FALv/6f++AKD/6f89Afb+6f8vASH/6f9AATn/6f+YALD/6f++AKD/6f/IAGD/6f9kASr/6f89Afb+6f9AATn/6f+6ADX/6f+YALD/6f/IAGD/6f9kASr/6f9AATn/6f8zAWL/6f+6ADX/6f/IAGD/6f/qAGr/6f9CAYv/6f9kASr/6f8zAWL/6f+6ADX/6f/qAGr/6f9CAYv/6f9CAYv/6f8zAWL/6f8SAVf/6f8SAVf/6f+6ADX/6f9CAYv/EAAvAQX/EAA6AfX+EAA9Afb+EAA9Afb+EABTAQ3/EABkASr/EABkASr/EABoAWP/EABCAYv/EABCAYv/EAAPAYf/EADqAGr/EAC+AKD/EADEAKz/EADJALj/EADJALj/EADIALv/EADFALv/EAC2AL3/EACjAMH/EACYALD/EACYALD/EACPAGj/EAC6ADX/EAC6ADX/EADuADj/EAASAVf/EAAvASH/EAAjART/EAAjARH/EAAjARH/EAAvAQX/EAA9Afb+EAC+AKD/EADJALj/EADFALv/EADFALv/EAC2AL3/EACYALD/EAAvASH/EAAjARH/EAA9Afb+EAC+AKD/EADFALv/EACYALD/EABAATn/EAAvASH/EAA9Afb+EADIAGD/EAC+AKD/EACYALD/EABAATn/EAA9Afb+EABkASr/EADIAGD/EACYALD/EAC6ADX/EAAzAWL/EABAATn/EABkASr/EADqAGr/EADIAGD/EAC6ADX/EAAzAWL/EABkASr/EABCAYv/EABCAYv/EADqAGr/EAC6ADX/EAASAVf/EAAzAWL/EABCAYv/EABCAYv/EAC6ADX/EAASAVf/6f89Afb+6f9TAQ3//f9BAe/+6f9TAQ3//f9ZAQj//f9BAe/+/f9BAe/+/f9ZAQj//f9BAe/+/f9ZAQj//f9ZAQj//f9BAe/+/f9BAe/+/f9ZAQj/EAA9Afb+/f9ZAQj/EABTAQ3/EAA9Afb+6f9TAQ3/6f9kASr//f9ZAQj/6f9kASr//f9sASj//f9ZAQj//f9ZAQj//f9sASj//f9ZAQj//f9sASj//f9sASj//f9ZAQj//f9ZAQj//f9sASj/EABTAQ3//f9sASj/EABkASr/EABTAQ3/6f9kASr/6f9oAWP//f9sASj/6f9oAWP//f9wAWf//f9sASj//f9sASj//f9wAWf//f9sASj//f9wAWf//f9wAWf//f9sASj//f9sASj//f9wAWf/EABkASr//f9wAWf/EABoAWP/EABkASr/6f9oAWP/6f9CAYv//f9wAWf/6f9CAYv//f9GAZP//f9wAWf//f9wAWf//f9GAZP//f9wAWf//f9GAZP//f9GAZP//f9wAWf//f9wAWf//f9GAZP/EABoAWP//f9GAZP/EABCAYv/EABoAWP/6f9CAYv/6f8PAYf//f9GAZP/6f8PAYf//f8NAY///f9GAZP//f9GAZP//f8NAY///f9GAZP//f8NAY///f8NAY///f9GAZP//f9GAZP//f8NAY//EABCAYv//f8NAY//EAAPAYf/EABCAYv/6f8PAYf/6f/qAGr//f8NAY//6f/qAGr//f/nAHH//f8NAY///f8NAY///f/nAHH//f8NAY///f/nAHH//f/nAHH//f8NAY///f8NAY///f/nAHH/EAAPAYf//f/nAHH/EADqAGr/EAAPAYf/6f/qAGr/6f/IAGD//f/nAHH/6f/IAGD//f/OAGr//f/nAHH//f/nAHH//f/OAGr//f/nAHH//f/OAGr//f/OAGr//f/nAHH//f/nAHH//f/OAGr/EADqAGr//f/OAGr/EADIAGD/EADqAGr/6f/IAGD/6f++AKD//f/OAGr/6f++AKD//f/GAJ///f/OAGr//f/OAGr//f/GAJ///f/OAGr//f/GAJ///f/GAJ///f/OAGr//f/OAGr//f/GAJ//EADIAGD//f/GAJ//EAC+AKD/EADIAGD/6f++AKD/6f/EAKz//f/GAJ//6f/EAKz//f/LAKj//f/GAJ///f/GAJ///f/LAKj//f/GAJ///f/LAKj//f/LAKj//f/GAJ///f/GAJ///f/LAKj/EAC+AKD//f/LAKj/EADEAKz/EAC+AKD/6f/EAKz/6f/JALj//f/LAKj/6f/JALj//f/SALf//f/LAKj//f/LAKj//f/SALf//f/LAKj//f/SALf//f/SALf//f/LAKj//f/LAKj//f/SALf/EADEAKz//f/SALf/EADJALj/EADEAKz/6f/JALj/6f/IALv//f/SALf/6f/IALv//f/OAML//f/SALf//f/SALf//f/OAML//f/SALf//f/OAML//f/OAML//f/SALf//f/SALf//f/OAML/EADJALj//f/OAML/EADIALv/EADJALj/6f/IALv/6f/FALv//f/OAML/6f/FALv//f/HAMT//f/OAML//f/OAML//f/HAMT//f/OAML//f/HAMT//f/HAMT//f/OAML//f/OAML//f/HAMT/EADIALv//f/HAMT/EADFALv/EADIALv/6f/FALv/6f+2AL3//f/HAMT/6f+2AL3//f+3AMX//f/HAMT//f/HAMT//f+3AMX//f/HAMT//f+3AMX//f+3AMX//f/HAMT//f/HAMT//f+3AMX/EADFALv//f+3AMX/EAC2AL3/EADFALv/6f+2AL3/6f+jAMH//f+3AMX/6f+jAMH//f+gAMr//f+3AMX//f+3AMX//f+gAMr//f+3AMX//f+gAMr//f+gAMr//f+3AMX//f+3AMX//f+gAMr/EAC2AL3//f+gAMr/EACjAMH/EAC2AL3/6f+jAMH/6f+YALD//f+gAMr/6f+YALD//f+QALP//f+gAMr//f+gAMr//f+QALP//f+gAMr//f+QALP//f+QALP//f+gAMr//f+gAMr//f+QALP/EACjAMH//f+QALP/EACYALD/EACjAMH/6f+YALD/6f+PAGj//f+QALP/6f+PAGj//f+HAGX//f+QALP//f+QALP//f+HAGX//f+QALP//f+HAGX//f+HAGX//f+QALP//f+QALP//f+HAGX/EACYALD//f+HAGX/EACPAGj/EACYALD/6f+PAGj/6f+6ADX//f+HAGX/6f+6ADX//f+2ACz//f+HAGX//f+HAGX//f+2ACz//f+HAGX//f+2ACz//f+2ACz//f+HAGX//f+HAGX//f+2ACz/EACPAGj//f+2ACz/EAC6ADX/EACPAGj/6f+6ADX/6f/uADj//f+2ACz/6f/uADj//f/wADD//f+2ACz//f+2ACz//f/wADD//f+2ACz//f/wADD//f/wADD//f+2ACz//f+2ACz//f/wADD/EAC6ADX//f/wADD/EADuADj/EAC6ADX/6f/uADj/6f8SAVf//f/wADD/6f8SAVf//f8WAVD//f/wADD//f/wADD//f8WAVD//f/wADD//f8WAVD//f8WAVD//f/wADD//f/wADD//f8WAVD/EADuADj//f8WAVD/EAASAVf/EADuADj/6f8SAVf/6f8zAWL//f8WAVD/6f8zAWL//f8uAVj//f8WAVD//f8WAVD//f8uAVj//f8WAVD//f8uAVj//f8uAVj//f8WAVD//f8WAVD//f8uAVj/EAASAVf//f8uAVj/EAAzAWL/EAASAVf/6f8zAWL/6f9AATn//f8uAVj/6f9AATn//f83ATr//f8uAVj//f8uAVj//f83ATr//f8uAVj//f83ATr//f83ATr//f8uAVj//f8uAVj//f83ATr/EAAzAWL//f83ATr/EABAATn/EAAzAWL/6f9AATn/6f8vASH//f83ATr/6f8vASH//f8pASb//f83ATr//f83ATr//f8pASb//f83ATr//f8pASb//f8pASb//f83ATr//f83ATr//f8pASb/EABAATn//f8pASb/EAAvASH/EABAATn/6f8vASH/6f8jART//f8pASb/6f8jART//f8bARb//f8pASb//f8pASb//f8bARb//f8pASb//f8bARb//f8bARb//f8pASb//f8pASb//f8bARb/EAAvASH//f8bARb/EAAjART/EAAvASH/6f8jART/6f8jARH//f8bARb/6f8jARH//f8cAQ3//f8bARb//f8bARb//f8cAQ3//f8bARb//f8cAQ3//f8cAQ3//f8bARb//f8bARb//f8cAQ3/EAAjART//f8cAQ3/EAAjARH/EAAjART/6f8jARH/6f8vAQX//f8cAQ3/6f8vAQX//f8pAf/+/f8cAQ3//f8cAQ3//f8pAf/+/f8cAQ3//f8pAf/+/f8pAf/+/f8cAQ3//f8cAQ3//f8pAf/+EAAjARH//f8pAf/+EAAvAQX/EAAjARH/6f8vAQX/6f86AfX+/f8pAf/+6f86AfX+/f83Aez+/f8pAf/+/f8pAf/+/f83Aez+/f8pAf/+/f83Aez+/f83Aez+/f8pAf/+/f8pAf/+/f83Aez+EAAvAQX//f83Aez+EAA6AfX+EAAvAQX/6f86AfX+6f89Afb+/f83Aez+6f89Afb+/f9BAe/+/f83Aez+/f83Aez+/f9BAe/+/f83Aez+/f9BAe/+/f9BAe/+/f83Aez+/f83Aez+/f9BAe/+EAA6AfX+/f9BAe/+EAA9Afb+EAA6AfX+",c:"AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI="},"gatto-mano-a":{v:"df9rARUAVP9fAfb/Pf+KASEAdf9rARUAjf8zASEAXv8hAfb/df9rARUAXv8hAfb/VP9fAfb/jf8zASEAdf8DAUAAVP/2ACEAjf8zASEAVP/2ACEAXv8hAfb/VP/2ACEAdf8DAUAAPf/2AF4AVP9fAfb/Jf9fAfb/Pf+KASEAVP9fAfb/Xv8hAfb/HP8hAfb/VP9fAfb/HP8hAfb/Jf9fAfb/Xv8hAfb/VP/2ACEAJf/2ACEAXv8hAfb/Jf/2ACEAHP8hAfb/Jf/2ACEAVP/2ACEAPf/2AF4AJf9fAfb/BP9rARUAPf+KASEAJf9fAfb/HP8hAfb/7f4zASEAJf9fAfb/7f4zASEABP9rARUAHP8hAfb/Jf/2ACEABP8DAUAAHP8hAfb/BP8DAUAA7f4zASEABP8DAUAAJf/2ACEAPf/2AF4ABP9rARUABP99AUAAPf+KASEABP9rARUA7f4zASEA7f5NAV4ABP9rARUA7f5NAV4ABP99AUAA7f4zASEABP8DAUAABP8VAWsA7f4zASEABP8VAWsA7f5NAV4ABP8VAWsABP8DAUAAPf/2AF4ABP99AUAAJf+KAV4APf+KASEABP99AUAA7f5NAV4AHP9fAYoABP99AUAAHP9fAYoAJf+KAV4A7f5NAV4ABP8VAWsAJf8hAYoA7f5NAV4AJf8hAYoAHP9fAYoAJf8hAYoABP8VAWsAPf/2AF4AJf+KAV4AVP+KAV4APf+KASEAJf+KAV4AHP9fAYoAXv9fAYoAJf+KAV4AXv9fAYoAVP+KAV4AHP9fAYoAJf8hAYoAVP8hAYoAHP9fAYoAVP8hAYoAXv9fAYoAVP8hAYoAJf8hAYoAPf/2AF4AVP+KAV4Adf99AUAAPf+KASEAVP+KAV4AXv9fAYoAjf9NAV4AVP+KAV4Ajf9NAV4Adf99AUAAXv9fAYoAVP8hAYoAdf8VAWsAXv9fAYoAdf8VAWsAjf9NAV4Adf8VAWsAVP8hAYoAPf/2AF4Adf99AUAAdf9rARUAPf+KASEAdf99AUAAjf9NAV4Ajf8zASEAdf99AUAAjf8zASEAdf9rARUAjf9NAV4Adf8VAWsAdf8DAUAAjf9NAV4Adf8DAUAAjf8zASEAdf8DAUAAdf8VAWsAPf/2AF4A",c:"AgICAgICAgICAgICAgICAgICAgICAgICAhYWFhYCAhYWFhYCAhYWFhYCAgICAgIC"},"gatto-mano-b":{v:"9QBrARUA1ABfAfb/vQCKASEA9QBrARUADQEzASEA3gAhAfb/9QBrARUA3gAhAfb/1ABfAfb/DQEzASEA9QADAUAA1AD2ACEADQEzASEA1AD2ACEA3gAhAfb/1AD2ACEA9QADAUAAvQD2AF4A1ABfAfb/pQBfAfb/vQCKASEA1ABfAfb/3gAhAfb/nAAhAfb/1ABfAfb/nAAhAfb/pQBfAfb/3gAhAfb/1AD2ACEApQD2ACEA3gAhAfb/pQD2ACEAnAAhAfb/pQD2ACEA1AD2ACEAvQD2AF4ApQBfAfb/hABrARUAvQCKASEApQBfAfb/nAAhAfb/bQAzASEApQBfAfb/bQAzASEAhABrARUAnAAhAfb/pQD2ACEAhAADAUAAnAAhAfb/hAADAUAAbQAzASEAhAADAUAApQD2ACEAvQD2AF4AhABrARUAhAB9AUAAvQCKASEAhABrARUAbQAzASEAbQBNAV4AhABrARUAbQBNAV4AhAB9AUAAbQAzASEAhAADAUAAhAAVAWsAbQAzASEAhAAVAWsAbQBNAV4AhAAVAWsAhAADAUAAvQD2AF4AhAB9AUAApQCKAV4AvQCKASEAhAB9AUAAbQBNAV4AnABfAYoAhAB9AUAAnABfAYoApQCKAV4AbQBNAV4AhAAVAWsApQAhAYoAbQBNAV4ApQAhAYoAnABfAYoApQAhAYoAhAAVAWsAvQD2AF4ApQCKAV4A1ACKAV4AvQCKASEApQCKAV4AnABfAYoA3gBfAYoApQCKAV4A3gBfAYoA1ACKAV4AnABfAYoApQAhAYoA1AAhAYoAnABfAYoA1AAhAYoA3gBfAYoA1AAhAYoApQAhAYoAvQD2AF4A1ACKAV4A9QB9AUAAvQCKASEA1ACKAV4A3gBfAYoADQFNAV4A1ACKAV4ADQFNAV4A9QB9AUAA3gBfAYoA1AAhAYoA9QAVAWsA3gBfAYoA9QAVAWsADQFNAV4A9QAVAWsA1AAhAYoAvQD2AF4A9QB9AUAA9QBrARUAvQCKASEA9QB9AUAADQFNAV4ADQEzASEA9QB9AUAADQEzASEA9QBrARUADQFNAV4A9QAVAWsA9QADAUAADQFNAV4A9QADAUAADQEzASEA9QADAUAA9QAVAWsAvQD2AF4A",c:"AgICAgICAgICAgICAgICAgICAgICAgICAhYWFhYCAhYWFhYCAhYWFhYCAgICAgIC"},retino:{v:"+v+O/48A+v+tAXD++v+SAVX++v+O/48A+v+SAVX++v9z/3QAIQCSAVX+IQCtAXD+IQCO/48AIQCSAVX+IQCO/48AIQBz/3QAIQCtAXD++v+tAXD++v+O/48AIQCtAXD++v+O/48AIQCO/48A+v9z/3QA+v+SAVX+IQCSAVX++v9z/3QAIQCSAVX+IQBz/3QA+v+SAVX++v+tAXD+IQCtAXD++v+SAVX+IQCtAXD+IQCSAVX+IQCO/48A+v+O/48A+v9z/3QAIQCO/48A+v9z/3QAIQBz/3QAt/+6AjH9Pv9kAoj9Pv97Ap79t/+6AjH9Pv97Ap79t//RAkj9yf+zAmb9aP9uAqv9aP9YApT9yf+zAmb9aP9YApT9yf+cAk/9yf+cAk/9aP9YApT9Pv9kAoj9yf+cAk/9Pv9kAoj9t/+6AjH9t//RAkj9Pv97Ap79aP9uAqv9t//RAkj9aP9uAqv9yf+zAmb9Pv9kAoj9Pv/qAQH+Pv8BAhj+Pv9kAoj9Pv8BAhj+Pv97Ap79aP9uAqv9aP8NAgz+aP/3AfX9aP9uAqv9aP/3AfX9aP9YApT9aP9YApT9aP/3AfX9Pv/qAQH+aP9YApT9Pv/qAQH+Pv9kAoj9Pv97Ap79Pv8BAhj+aP8NAgz+Pv97Ap79aP8NAgz+aP9uAqv9Pv/qAQH+t/+UAVj+t/+rAW7+Pv/qAQH+t/+rAW7+Pv8BAhj+aP8NAgz+yf/JAVD+yf+yATr+aP8NAgz+yf+yATr+aP/3AfX9aP/3AfX9yf+yATr+t/+UAVj+aP/3AfX9t/+UAVj+Pv/qAQH+Pv8BAhj+t/+rAW7+yf/JAVD+Pv8BAhj+yf/JAVD+aP8NAgz+t/+UAVj+ZACUAVj+ZACrAW7+t/+UAVj+ZACrAW7+t/+rAW7+yf/JAVD+UgDJAVD+UgCyATr+yf/JAVD+UgCyATr+yf+yATr+yf+yATr+UgCyATr+ZACUAVj+yf+yATr+ZACUAVj+t/+UAVj+t/+rAW7+ZACrAW7+UgDJAVD+t/+rAW7+UgDJAVD+yf/JAVD+ZACUAVj+3gDqAQH+3gABAhj+ZACUAVj+3gABAhj+ZACrAW7+UgDJAVD+swANAgz+swD3AfX9UgDJAVD+swD3AfX9UgCyATr+UgCyATr+swD3AfX93gDqAQH+UgCyATr+3gDqAQH+ZACUAVj+ZACrAW7+3gABAhj+swANAgz+ZACrAW7+swANAgz+UgDJAVD+3gDqAQH+3gBkAoj93gB7Ap793gDqAQH+3gB7Ap793gABAhj+swANAgz+swBuAqv9swBYApT9swANAgz+swBYApT9swD3AfX9swD3AfX9swBYApT93gBkAoj9swD3AfX93gBkAoj93gDqAQH+3gABAhj+3gB7Ap79swBuAqv93gABAhj+swBuAqv9swANAgz+3gBkAoj9ZAC6AjH9ZADRAkj93gBkAoj9ZADRAkj93gB7Ap79swBuAqv9UgCzAmb9UgCcAk/9swBuAqv9UgCcAk/9swBYApT9swBYApT9UgCcAk/9ZAC6AjH9swBYApT9ZAC6AjH93gBkAoj93gB7Ap79ZADRAkj9UgCzAmb93gB7Ap79UgCzAmb9swBuAqv9ZAC6AjH9t/+6AjH9t//RAkj9ZAC6AjH9t//RAkj9ZADRAkj9UgCzAmb9yf+zAmb9yf+cAk/9UgCzAmb9yf+cAk/9UgCcAk/9UgCcAk/9yf+cAk/9t/+6AjH9UgCcAk/9t/+6AjH9ZAC6AjH9ZADRAkj9t//RAkj9yf+zAmb9ZADRAkj9yf+zAmb9UgCzAmb97v9+AbL+7v/YAVj+7v+rASr+7v9+AbL+7v+rASr+7v9QAYX+LgCrASr+LgDYAVj+LgB+AbL+LgCrASr+LgB+AbL+LgBQAYX+LgDYAVj+7v/YAVj+7v9+AbL+LgDYAVj+7v9+AbL+LgB+AbL+7v9QAYX+7v+rASr+LgCrASr+7v9QAYX+LgCrASr+LgBQAYX+7v+rASr+7v/YAVj+LgDYAVj+7v+rASr+LgDYAVj+LgCrASr+LgB+AbL+7v9+AbL+7v9QAYX+LgB+AbL+7v9QAYX+LgBQAYX+7v+M/6QA7v9uAML/7v9BAJT/7v+M/6QA7v9BAJT/7v9e/3cALgBBAJT/LgBuAML/LgCM/6QALgBBAJT/LgCM/6QALgBe/3cALgBuAML/7v9uAML/7v+M/6QALgBuAML/7v+M/6QALgCM/6QA7v9e/3cA7v9BAJT/LgBBAJT/7v9e/3cALgBBAJT/LgBe/3cA7v9BAJT/7v9uAML/LgBuAML/7v9BAJT/LgBuAML/LgBBAJT/LgCM/6QA7v+M/6QA7v9e/3cALgCM/6QA7v9e/3cALgBe/3cADgCWAVr+e//BAS/+DgB0ARL9fP/zAZD9DgB0ARL9p/+qAdn9dv/JASf+kP+2AQT+e//BAS/+av/eARL+n/+3Acz9p/+qAdn9av/eARL+p/+qAdn9kP+2AQT+av/eARL+kP+2AQT+dv/JASf+Xv/zAf39k//MAbf9n/+3Acz9Xv/zAf39n/+3Acz9av/eARL+Uf8IAuj9h//hAaL9k//MAbf9Uf8IAuj9k//MAbf9Xv/zAf39Rf8dAtP9cP/9AZv9fP/zAZD9Rf8dAtP9fP/zAZD9h//hAaL9Rf8dAtP9h//hAaL9Uf8IAuj9Pv8pAsf9cP/9AZv9Rf8dAtP9e//BAS/+Pv8pAsf9Pv8pAsf9e//BAS/+Pv8pAsf9e//BAS/++/+ZARz9DgB0ARL95P+ZATb9+/+ZARz95P+ZATb95f+kATH95/+/ASb9+/+ZARz95f+kATH95P+ZATb9xP+1AVL95f+kATH95f/CASf95/+/ASb95f+kATH95f/CASf95f+kATH9xP+1AVL95f/CASf9xP+1AVL9kf/hAX795f/CASf9kf/hAX79kv/tAXn9m/9TAk795f/CASf9kv/tAXn9Pv8pAsf9e/+RAl/9m/9TAk79Pv8pAsf9m/9TAk79kf/hAX79e/+RAl/9DgC9AjT9DgB0ARL9DgC9AjT9oQCRAl/9DgB0ARL9nwDzAZD9DgB0ARL9dQA8Akj9pQCKAmb9iwBnAlP9oQCRAl/9sQB1Anv9fAAvAlX9dQA8Akj9sQB1Anv9dQA8Akj9iwBnAlP9sQB1Anv9iwBnAlP9pQCKAmb9vgBgApD9iAAaAmr9fAAvAlX9vgBgApD9fAAvAlX9sQB1Anv9ygBLAqX9lQAFAn79iAAaAmr9ygBLAqX9iAAaAmr9vgBgApD91gA2Arr9qwD9AZv9nwDzAZD91gA2Arr9nwDzAZD9lQAFAn791gA2Arr9lQAFAn79ygBLAqX93gApAsf9qwD9AZv91gA2Arr9oQCRAl/93gApAsf93gApAsf9oQCRAl/93gApAsf9oQCRAl/9NACJAVz9DgB0ARL9NwCZATb9NwCZATb9VwC1AVL9NgCUAUH9NgCKAWD9NACJAVz9NgCUAUH9NgCKAWD9NgCUAUH9VwC1AVL9NgCKAWD9VwC1AVL9igDhAX79NgCKAWD9igDhAX79iQDcAYr9gQCxAfH9NgCKAWD9iQDcAYr93gApAsf9oQDBAS/+gQCxAfH93gApAsf9gQCxAfH9igDhAX79oQDBAS/+DgCWAVr+DgB0ARL9",c:"BQUFBQUFBQUFBQUFBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBhsYGBwcHBgYISEcHBwYGBgGBhsbGBgYGBsbGxgbGBgcHBwYGCEhHBwcGBgYGxsYGBgYGxsbGA=="},canna:{v:"N/88/0r/kf86APb/qf8TACMAN/88/0r/qf8TACMAT/8V/3f/cP8TAEEAWP86ABQA/v48/2f/cP8TAEEA/v48/2f/Fv8V/5T/WP86ABQAkf86APb/N/88/0r/WP86ABQAN/88/0r//v48/2f/T/8V/3f/qf8TACMAcP8TAEEAT/8V/3f/cP8TAEEAFv8V/5T/qf8TACMAkf86APb/WP86ABQAqf8TACMAWP86ABQAcP8TAEEA/v48/2f/N/88/0r/T/8V/3f//v48/2f/T/8V/3f/Fv8V/5T/9/8lAboAnf8nAA0A9/8lAboA9/8lAboA9/8lAboAnf8nAA0AZP8nACoAvv8lAdcAvv8lAdcAZP8nACoAvv8lAdcAZP8nACoA4/8+AdoA4/8+AdoA4/8+AdoA4/8+AdoA4/8+AdoA4/8+AdoAd/8NAAoAd/8NAAoAd/8NAAoAd/8NAAoAd/8NAAoAd/8NAAoAjP8TADIA5v8RAd8A5v8RAd8AjP8TADIA5v8RAd8AjP8TADIAz/84AbIAdf86AAUAz/84AbIAz/84AbIAz/84AbIAdf86AAUA4/8+AdoA4/8+AdoA9/8lAboA4/8+AdoA9/8lAboA9/8lAboA4/8+AdoA4/8+AdoAvv8lAdcA4/8+AdoAvv8lAdcAvv8lAdcA4/8+AdoA4/8+AdoA5v8RAd8A4/8+AdoA5v8RAd8A5v8RAd8A4/8+AdoA4/8+AdoAz/84AbIA4/8+AdoAz/84AbIAz/84AbIAd/8NAAoAd/8NAAoAnf8nAA0Ad/8NAAoAnf8nAA0Anf8nAA0Ad/8NAAoAd/8NAAoAZP8nACoAd/8NAAoAZP8nACoAZP8nACoAd/8NAAoAd/8NAAoAjP8TADIAd/8NAAoAjP8TADIAjP8TADIAd/8NAAoAd/8NAAoAdf86AAUAd/8NAAoAdf86AAUAdf86AAUAnf8nAA0Adf86AAUAz/84AbIAnf8nAA0Az/84AbIA9/8lAboA5v8RAd8AjP8TADIAnf8nAA0A5v8RAd8Anf8nAA0A9/8lAboAz/84AbIAdf86AAUAZP8nACoAz/84AbIAZP8nACoAvv8lAdcAZP8nACoAjP8TADIA5v8RAd8AZP8nACoA5v8RAd8Avv8lAdcAd/8NAAoAnf8nAA0AjP8TADIAd/8NAAoAjP8TADIAZP8nACoAd/8NAAoAdf86AAUAnf8nAA0Ad/8NAAoAZP8nACoAdf86AAUA4/8+AdoA5v8RAd8A9/8lAboA4/8+AdoAvv8lAdcA5v8RAd8A4/8+AdoA9/8lAboAz/84AbIA4/8+AdoAz/84AbIAvv8lAdcAXwD2AYkB8v8eAbgAXwD2AYkBXwD2AYkBXwD2AYkB8v8eAbgAv/8eAdMALAD2AaQBLAD2AaQBv/8eAdMALAD2AaQBv/8eAdMAUQAMAqsBUQAMAqsBUQAMAqsBUQAMAqsBUQAMAqsBUQAMAqsBzv8JAbAAzv8JAbAAzv8JAbAAzv8JAbAAzv8JAbAAzv8JAbAA4v8JAdcATwDhAagBTwDhAagB4v8JAdcATwDhAagB4v8JAdcAPQAMAoUB0P8zAbQAPQAMAoUBPQAMAoUBPQAMAoUB0P8zAbQAUQAMAqsBUQAMAqsBXwD2AYkBUQAMAqsBXwD2AYkBXwD2AYkBUQAMAqsBUQAMAqsBLAD2AaQBUQAMAqsBLAD2AaQBLAD2AaQBUQAMAqsBUQAMAqsBTwDhAagBUQAMAqsBTwDhAagBTwDhAagBUQAMAqsBUQAMAqsBPQAMAoUBUQAMAqsBPQAMAoUBPQAMAoUBzv8JAbAAzv8JAbAA8v8eAbgAzv8JAbAA8v8eAbgA8v8eAbgAzv8JAbAAzv8JAbAAv/8eAdMAzv8JAbAAv/8eAdMAv/8eAdMAzv8JAbAAzv8JAbAA4v8JAdcAzv8JAbAA4v8JAdcA4v8JAdcAzv8JAbAAzv8JAbAA0P8zAbQAzv8JAbAA0P8zAbQA0P8zAbQA8v8eAbgA0P8zAbQAPQAMAoUB8v8eAbgAPQAMAoUBXwD2AYkBTwDhAagB4v8JAdcA8v8eAbgATwDhAagB8v8eAbgAXwD2AYkBPQAMAoUB0P8zAbQAv/8eAdMAPQAMAoUBv/8eAdMALAD2AaQBv/8eAdMA4v8JAdcATwDhAagBv/8eAdMATwDhAagBLAD2AaQBzv8JAbAA8v8eAbgA4v8JAdcAzv8JAbAA4v8JAdcAv/8eAdMAzv8JAbAA0P8zAbQA8v8eAbgAzv8JAbAAv/8eAdMA0P8zAbQAUQAMAqsBTwDhAagBXwD2AYkBUQAMAqsBLAD2AaQBTwDhAagBUQAMAqsBXwD2AYkBPQAMAoUBUQAMAqsBPQAMAoUBLAD2AaQB1gCCAnwCUwDuAYAB1gCCAnwC1gCCAnwC1gCCAnwCUwDuAYABLADuAZUBrwCCApECrwCCApECLADuAZUBrwCCApECLADuAZUB0ACRAqAC0ACRAqAC0ACRAqAC0ACRAqAC0ACRAqAC0ACRAqACMgDgAXEBMgDgAXEBMgDgAXEBMgDgAXEBMgDgAXEBMgDgAXEBRADdAZIBxwBxAo4CxwBxAo4CRADdAZIBxwBxAo4CRADdAZIBvgCTAn4COwD/AYMBvgCTAn4CvgCTAn4CvgCTAn4COwD/AYMB0ACRAqAC0ACRAqAC1gCCAnwC0ACRAqAC1gCCAnwC1gCCAnwC0ACRAqAC0ACRAqACrwCCApEC0ACRAqACrwCCApECrwCCApEC0ACRAqAC0ACRAqACxwBxAo4C0ACRAqACxwBxAo4CxwBxAo4C0ACRAqAC0ACRAqACvgCTAn4C0ACRAqACvgCTAn4CvgCTAn4CMgDgAXEBMgDgAXEBUwDuAYABMgDgAXEBUwDuAYABUwDuAYABMgDgAXEBMgDgAXEBLADuAZUBMgDgAXEBLADuAZUBLADuAZUBMgDgAXEBMgDgAXEBRADdAZIBMgDgAXEBRADdAZIBRADdAZIBMgDgAXEBMgDgAXEBOwD/AYMBMgDgAXEBOwD/AYMBOwD/AYMBUwDuAYABOwD/AYMBvgCTAn4CUwDuAYABvgCTAn4C1gCCAnwCxwBxAo4CRADdAZIBUwDuAYABxwBxAo4CUwDuAYAB1gCCAnwCvgCTAn4COwD/AYMBLADuAZUBvgCTAn4CLADuAZUBrwCCApECLADuAZUBRADdAZIBxwBxAo4CLADuAZUBxwBxAo4CrwCCApECMgDgAXEBUwDuAYABRADdAZIBMgDgAXEBRADdAZIBLADuAZUBMgDgAXEBOwD/AYMBUwDuAYABMgDgAXEBLADuAZUBOwD/AYMB0ACRAqACxwBxAo4C1gCCAnwC0ACRAqACrwCCApECxwBxAo4C0ACRAqAC1gCCAnwCvgCTAn4C0ACRAqACvgCTAn4CrwCCApECr/9ZAOv/x/9gABkAv/8dAAkAx/9gABkAr/9ZAOv/Pv9ZACYAx/9gABkAPv9ZACYAVv9gAFQAVv9gAFQAPv9ZACYATv8dAEQAoP8vAM7/r/9ZAOv/v/8dAAkAr/9ZAOv/oP8vAM7/L/8vAAkAr/9ZAOv/L/8vAAkAPv9ZACYAPv9ZACYAL/8vAAkATv8dAEQAo//6/9T/oP8vAM7/v/8dAAkAoP8vAM7/o//6/9T/Mv/6/w8AoP8vAM7/Mv/6/w8AL/8vAAkAL/8vAAkAMv/6/w8ATv8dAEQAt//a//n/o//6/9T/v/8dAAkAo//6/9T/t//a//n/Rf/a/zUAo//6/9T/Rf/a/zUAMv/6/w8AMv/6/w8ARf/a/zUATv8dAEQAz//h/ygAt//a//n/v/8dAAkAt//a//n/z//h/ygAXv/h/2MAt//a//n/Xv/h/2MARf/a/zUARf/a/zUAXv/h/2MATv8dAEQA3v8LAEUAz//h/ygAv/8dAAkAz//h/ygA3v8LAEUAbP8LAIAAz//h/ygAbP8LAIAAXv/h/2MAXv/h/2MAbP8LAIAATv8dAEQA2/9AAD8A3v8LAEUAv/8dAAkA3v8LAEUA2/9AAD8Aaf9AAHoA3v8LAEUAaf9AAHoAbP8LAIAAbP8LAIAAaf9AAHoATv8dAEQAx/9gABkA2/9AAD8Av/8dAAkA2/9AAD8Ax/9gABkAVv9gAFQA2/9AAD8AVv9gAFQAaf9AAHoAaf9AAHoAVv9gAFQATv8dAEQA",c:"DAwMDAwMDAwMDAwMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAQEEBAEBAQEEBAEBBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQBAQQEAQEBAQQEAQEEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAEBBAQBAQEBBAQBAQQEGgsLGhoLCxoaCwsaGgsLGhoLCxoaCwsaGgsLGhoLCxo="},galleggiante:{v:"TgBKACcATgBWAPD/EAB1ABQATgBKACcAXwABACMAXgASANX/TgBKACcAXgASANX/TgBWAPD/XwABACMAOADH/wsAOADT/9T/XwABACMAOADT/9T/XgASANX/OADT/9T/OADH/wsA8f+8/+z/TgBWAPD/JgBkAMr/EAB1ABQATgBWAPD/XgASANX/JgAnAKH/TgBWAPD/JgAnAKH/JgBkAMr/XgASANX/OADT/9T/EADh/6//XgASANX/EADh/6//JgAnAKH/EADh/6//OADT/9T/8f+8/+z/JgBkAMr/7/9tAM3/EAB1ABQAJgBkAMr/JgAnAKH/2P8zAKT/JgBkAMr/2P8zAKT/7/9tAM3/JgAnAKH/EADh/6//2f/q/7H/JgAnAKH/2f/q/7H/2P8zAKT/2f/q/7H/EADh/6//8f+8/+z/7/9tAM3/yP9rAPX/EAB1ABQA7/9tAM3/2P8zAKT/of8wAN3/7/9tAM3/of8wAN3/yP9rAPX/2P8zAKT/2f/q/7H/sv/o/9r/2P8zAKT/sv/o/9r/of8wAN3/sv/o/9r/2f/q/7H/8f+8/+z/yP9rAPX/yP9fACwAEAB1ABQAyP9rAPX/of8wAN3/ov8fACsAyP9rAPX/ov8fACsAyP9fACwAof8wAN3/sv/o/9r/sv/c/xEAof8wAN3/sv/c/xEAov8fACsAsv/c/xEAsv/o/9r/8f+8/+z/yP9fACwA8P9QAFIAEAB1ABQAyP9fACwAov8fACsA2v8LAGAAyP9fACwA2v8LAGAA8P9QAFIAov8fACsAsv/c/xEA2v/N/zYAov8fACsA2v/N/zYA2v8LAGAA2v/N/zYAsv/c/xEA8f+8/+z/8P9QAFIAJwBIAE8AEAB1ABQA8P9QAFIA2v8LAGAAKAD+/1wA8P9QAFIAKAD+/1wAJwBIAE8A2v8LAGAA2v/N/zYAEQDF/zMA2v8LAGAAEQDF/zMAKAD+/1wAEQDF/zMA2v/N/zYA8f+8/+z/JwBIAE8ATgBKACcAEAB1ABQAJwBIAE8AKAD+/1wAXwABACMAJwBIAE8AXwABACMATgBKACcAKAD+/1wAEQDF/zMAOADH/wsAKAD+/1wAOADH/wsAXwABACMAOADH/wsAEQDF/zMA8f+8/+z/",c:"BgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcXBgYGFxcX"},lampione:{v:"gACAAID/gACAAIAAgABAAIAAgACAAID/gABAAIAAgABAAID/gP9AAIAAgP+AAIAAgP+AAID/gP9AAIAAgP+AAID/gP9AAID/gP+AAIAAgACAAIAAgACAAID/gP+AAIAAgACAAID/gP+AAID/gABAAID/gABAAIAAgP9AAIAAgABAAID/gP9AAIAAgP9AAID/gABAAIAAgACAAIAAgP+AAIAAgABAAIAAgP+AAIAAgP9AAIAAgP+AAID/gACAAID/gABAAID/gP+AAID/gABAAID/gP9AAID/YACAACgAKACAAGAAAACAAAAAKACAAGAAYACAACgAYACAASgAKACAAGAAYACAASgAKACAAWAAKACAAWAAYACAASgAAACAAQAAYACAANj/YACAACgAAACAAAAAYACAACgAYACAANj/YACAAdj/YACAACgAYACAAdj/YACAASgAYACAASgAYACAAdj/AACAAQAAKACAAKD/YACAANj/AACAAAAAYACAANj/KACAAKD/KACAAaD/YACAANj/KACAAaD/YACAAdj/YACAAdj/KACAAaD/AACAAQAA2P+AAKD/KACAAKD/AACAAAAAKACAAKD/2P+AAKD/2P+AAaD/KACAAKD/2P+AAaD/KACAAaD/KACAAaD/2P+AAaD/AACAAQAAoP+AANj/2P+AAKD/AACAAAAA2P+AAKD/oP+AANj/oP+AAdj/2P+AAKD/oP+AAdj/2P+AAaD/2P+AAaD/oP+AAdj/AACAAQAAoP+AACgAoP+AANj/AACAAAAAoP+AANj/oP+AACgAoP+AASgAoP+AANj/oP+AASgAoP+AAdj/oP+AAdj/oP+AASgAAACAAQAA2P+AAGAAoP+AACgAAACAAAAAoP+AACgA2P+AAGAA2P+AAWAAoP+AACgA2P+AAWAAoP+AASgAoP+AASgA2P+AAWAAAACAAQAAKACAAGAA2P+AAGAAAACAAAAA2P+AAGAAKACAAGAAKACAAWAA2P+AAGAAKACAAWAA2P+AAWAA2P+AAWAAKACAAWAAAACAAQAAIACgBOD/IACgBCAAIABAASAAIACgBOD/IABAASAAIABAAeD/4P9AASAA4P+gBCAA4P+gBOD/4P9AASAA4P+gBOD/4P9AAeD/4P+gBCAAIACgBCAAIACgBOD/4P+gBCAAIACgBOD/4P+gBOD/IABAAeD/IABAASAA4P9AASAAIABAAeD/4P9AASAA4P9AAeD/IABAASAAIACgBCAA4P+gBCAAIABAASAA4P+gBCAA4P9AASAA4P+gBOD/IACgBOD/IABAAeD/4P+gBOD/IABAAeD/4P9AAeD/oACABWD/oACABaAAoABABaAAoACABWD/oABABaAAoABABWD/YP9ABaAAYP+ABaAAYP+ABWD/YP9ABaAAYP+ABWD/YP9ABWD/YP+ABaAAoACABaAAoACABWD/YP+ABaAAoACABWD/YP+ABWD/oABABWD/oABABaAAYP9ABaAAoABABWD/YP9ABaAAYP9ABWD/oABABaAAoACABaAAYP+ABaAAoABABaAAYP+ABaAAYP9ABaAAYP+ABWD/oACABWD/oABABWD/YP+ABWD/oABABWD/YP9ABWD/gACABYD/gACABYAAgP+ABYAAgACABYD/gP+ABYAAgP+ABYD/gACABYAAgACABYD/AAAgBgAAgP+ABYAAgACABYAAAAAgBgAAgACABYD/gP+ABYD/AAAgBgAAgP+ABYD/gP+ABYAAAAAgBgAAMACgBTAAMACgBdD/0P+gBdD/MACgBTAA0P+gBdD/0P+gBTAA0P9ABND/MABABND/MABABDAA0P9ABND/MABABDAA0P9ABDAAMACgBdD/MACgBTAAcABgBTAAMACgBdD/cABgBTAAcABgBdD/kP9gBTAA0P+gBTAA0P+gBdD/kP9gBTAA0P+gBdD/kP9gBdD/MABgBXAAMACgBTAA0P+gBTAAMABgBXAA0P+gBTAA0P9gBXAA0P+gBdD/MACgBdD/MABgBZD/0P+gBdD/MABgBZD/0P9gBZD/cACABDAAMABABDAAMABABND/cACABDAAMABABND/cACABND/0P9ABND/0P9ABDAAkP+ABDAA0P9ABND/kP+ABDAAkP+ABND/0P9ABDAAMABABDAAMACABHAA0P9ABDAAMACABHAA0P+ABHAAMACABJD/MABABND/0P9ABND/MACABJD/0P9ABND/0P+ABJD/MABABDAAcACABDAAMACABHAA0P9ABDAA0P+ABHAAkP+ABDAAMABABND/MACABJD/cACABND/0P9ABND/kP+ABND/0P+ABJD/MACgBTAAMABgBXAAcABgBTAA0P+gBTAAkP9gBTAA0P9gBXAAMACgBdD/cABgBdD/MABgBZD/0P+gBdD/0P9gBZD/kP9gBdD/oAAgAIAAoAAgAIAAoAAgAID/oAAgAIAAoAAgAID/oAAgAID/YP8gAIAAYP8gAIAAYP8gAID/YP8gAIAAYP8gAID/YP8gAID/gABAAIAAgABAAID/gP9AAID/gABAAIAAgP9AAID/gP9AAIAAgP8AAID/gAAAAID/gAAAAIAAgP8AAID/gAAAAIAAgP8AAIAAgAAgAKAAgAAgAKAAgP8gAKAAgAAgAKAAgP8gAKAAgP8gAKAAgAAgAGD/gAAgAGD/gP8gAGD/gAAgAGD/gP8gAGD/gP8gAGD/gABAAID/gABAAIAAoAAgAIAAgABAAID/oAAgAIAAoAAgAID/YP8gAIAAgP9AAIAAgP9AAID/YP8gAIAAgP9AAID/YP8gAID/gAAgAKAAgABAAIAAgP9AAIAAgAAgAKAAgP9AAIAAgP8gAKAAgP9AAID/gABAAID/gAAgAGD/gP9AAID/gAAgAGD/gP8gAGD/oAAgAIAAgAAAAIAAgAAAAID/oAAgAIAAgAAAAID/oAAgAID/gP8AAID/gP8AAIAAYP8gAIAAgP8AAID/YP8gAIAAYP8gAID/gP8AAIAAgAAAAIAAgAAgAKAAgP8AAIAAgAAgAKAAgP8gAKAAgAAgAGD/gAAAAID/gP8AAID/gAAgAGD/gP8AAID/gP8gAGD/gAAgAGD/gAAgAGD/oAAgAID/gAAgAGD/oAAgAID/oAAgAID/gAAgAKAAgAAgAKAAoAAgAIAAgAAgAKAAoAAgAIAAoAAgAIAAgP8gAGD/gP8gAGD/YP8gAID/gP8gAGD/YP8gAID/YP8gAID/gP8gAKAAgP8gAKAAYP8gAIAAgP8gAKAAYP8gAIAAYP8gAIAAgAAAAIAAoAAgAIAAgAAgAKAAgP8AAIAAgP8gAKAAYP8gAIAAgAAAAID/gAAgAGD/oAAgAID/gP8AAID/YP8gAID/gP8gAGD/gABAAIAAgAAgAKAAoAAgAIAAgP9AAIAAYP8gAIAAgP8gAKAAgABAAID/oAAgAID/gAAgAGD/gP9AAID/gP8gAGD/YP8gAID/",c:"FBQUFA4OFBQUFBQUDg4OEg4ODhIODg4SDg4OEg4ODhIODg4SDg4OEg4ODhIODg4ODg4ODg4ODg4UFBQUDg4UFBQUFBQODg4ODg4ODhQUDg4ODg4ODg4UFBQUFBQUFBQUFBQODg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},"lampione-luce":{v:"cABgBdD/cABgBTAAcACABDAAcABgBdD/cACABDAAcACABND/kP+ABDAAkP9gBTAAkP9gBdD/kP+ABDAAkP9gBdD/kP+ABND/MACABHAAMABgBXAA0P9gBXAAMACABHAA0P9gBXAA0P+ABHAA0P9gBZD/MABgBZD/MACABJD/0P9gBZD/MACABJD/0P+ABJD/cACABND/MACABJD/MABgBZD/cACABND/MABgBZD/cABgBdD/MABgBXAAMACABHAAcACABDAAMABgBXAAcACABDAAcABgBTAA0P9gBZD/0P+ABJD/kP+ABND/0P9gBZD/kP+ABND/kP9gBdD/kP+ABDAA0P+ABHAA0P9gBXAAkP+ABDAA0P9gBXAAkP9gBTAA",c:"FRUVFRUVFRUREREREREREQ=="}};var Tu=r=>Uint8Array.from(atob(r),e=>e.charCodeAt(0)),xl=new Map;function Zd(r){if(xl.has(r))return xl.get(r);let e=Cu[r];if(!e)throw new Error("nel kit non c'è: "+r);let t=Tu(e.v),i=new Int16Array(t.buffer,t.byteOffset,t.length>>1),n=new Float32Array(i.length),a=new Float32Array(i.length);for(let s=0;s<i.length;s++)n[s]=i[s]/512;for(let s=0;s<n.length;s+=9){let l=n[s+3]-n[s],A=n[s+4]-n[s+1],c=n[s+5]-n[s+2],h=n[s+6]-n[s],u=n[s+7]-n[s+1],f=n[s+8]-n[s+2],g=A*f-c*u,m=c*h-l*f,p=l*u-A*h,P=Math.hypot(g,m,p)||1;g/=P,m/=P,p/=P;for(let d=0;d<3;d++)a.set([g,m,p],s+d*3)}eg(n,a);let o={pos:n,nor:a,tri:Tu(e.c)};return xl.set(r,o),o}var $d=.0015;function eg(r,e){let t=new Map;for(let i=0;i<r.length;i+=9){let n=[e[i],e[i+1],e[i+2]],a=n[0]*r[i]+n[1]*r[i+1]+n[2]*r[i+2],o=n.map(s=>Math.round(s*500)).join()+"|"+Math.round(a*300);t.has(o)||t.set(o,[]),t.get(o).push(i)}for(let i of t.values()){if(i.length<2)continue;let n=[0,1,2].reduce((l,A)=>Math.abs(e[i[0]+A])>Math.abs(e[i[0]+l])?A:l,0),a=(l,A)=>n===0?[r[l+A*3+1],r[l+A*3+2]]:n===1?[r[l+A*3],r[l+A*3+2]]:[r[l+A*3],r[l+A*3+1]],o=i.map(l=>[a(l,0),a(l,1),a(l,2)]),s=i.map(()=>0);for(let l=1;l<i.length;l++){for(let h=0;h<l;h++)tg(o[h],o[l])>=1e-6&&(s[l]=Math.max(s[l],s[h]+1));let A=i[l],c=s[l]*$d;if(c)for(let h=0;h<3;h++)for(let u=0;u<3;u++)r[A+h*3+u]+=e[A+u]*c}}}function tg(r,e){let t=a=>{let o=0;for(let s=0;s<a.length;s++){let l=a[s],A=a[(s+1)%a.length];o+=l[0]*A[1]-A[0]*l[1]}return o/2},i=r,n=t(e)<0?[...e].reverse():e;for(let a=0;a<3&&i.length;a++){let o=n[a],s=n[(a+1)%3],l=c=>(s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0]),A=[];for(let c=0;c<i.length;c++){let h=i[c],u=i[(c+1)%i.length],f=l(h),g=l(u);g>=-1e-9?(f<-1e-9&&A.push([h[0]+(u[0]-h[0])*f/(f-g),h[1]+(u[1]-h[1])*f/(f-g)]),A.push(u)):f>=-1e-9&&A.push([h[0]+(u[0]-h[0])*f/(f-g),h[1]+(u[1]-h[1])*f/(f-g)])}i=A}return i.length>=3?Math.abs(t(i)):0}var Co=new ge,Pl=new Map;function ig(r){return Pl.has(r)||(Co.set(r),Pl.set(r,[Co.r,Co.g,Co.b])),Pl.get(r)}function yl(r,e=null){let{pos:t,nor:i,tri:n}=Zd(r),a=new Float32Array(t.length);for(let o=0;o<n.length;o++){let s=Su[n[o]],l=ig(e&&e[s]||s);for(let A=0;A<3;A++)a.set(l,o*9+A*3)}return{pos:t,nor:i,col:a}}function To(r,e=null){let t=yl(r,e),i=new Ge;return i.setAttribute("position",new $e(t.pos.slice(),3)),i.setAttribute("normal",new $e(t.nor.slice(),3)),i.setAttribute("color",new $e(t.col,3)),i.computeBoundingBox(),i.computeBoundingSphere(),i}var Xr=Math.PI/180;function ng(r,e,t,i){let n=r/2,a=e/2,o=t/2,s=[],l=(u,f,g,m)=>m===0?[u*n,f*(a-i),g*(o-i)]:m===1?[u*(n-i),f*a,g*(o-i)]:[u*(n-i),f*(a-i),g*o],A=(u,f,g)=>{let m=[(f[1]-u[1])*(g[2]-u[2])-(f[2]-u[2])*(g[1]-u[1]),(f[2]-u[2])*(g[0]-u[0])-(f[0]-u[0])*(g[2]-u[2]),(f[0]-u[0])*(g[1]-u[1])-(f[1]-u[1])*(g[0]-u[0])];m[0]*(u[0]+f[0]+g[0])+m[1]*(u[1]+f[1]+g[1])+m[2]*(u[2]+f[2]+g[2])<0?s.push(...u,...g,...f):s.push(...u,...f,...g)},c=(u,f,g,m)=>{A(u,f,g),A(u,g,m)};for(let u of[-1,1]){c(l(u,-1,-1,0),l(u,1,-1,0),l(u,1,1,0),l(u,-1,1,0)),c(l(-1,u,-1,1),l(1,u,-1,1),l(1,u,1,1),l(-1,u,1,1)),c(l(-1,-1,u,2),l(1,-1,u,2),l(1,1,u,2),l(-1,1,u,2));for(let f of[-1,1]){c(l(u,f,-1,0),l(u,f,1,0),l(u,f,1,1),l(u,f,-1,1)),c(l(-1,u,f,1),l(1,u,f,1),l(1,u,f,2),l(-1,u,f,2)),c(l(u,-1,f,0),l(u,1,f,0),l(u,1,f,2),l(u,-1,f,2));for(let g of[-1,1])A(l(u,f,g,0),l(u,f,g,1),l(u,f,g,2))}}let h=new Ge;return h.setAttribute("position",new Pe(s,3)),h}function rg(r,e,t,i){let n=Math.min(e,t)/2,a=3,o=[],s=[[t/2,0,-90],[t/2,e,0],[-t/2,e,90],[-t/2,0,180]],l=[i[1],i[0],i[3],i[2]].map(m=>Math.max(0,Math.min(n,m||0)));s.forEach(([m,p,P],d)=>{let M=l[d];if(M<1e-4){o.push([m,p]);return}let v=m-Math.sign(m)*M,b=p>0?p-M:M;for(let y=0;y<=a;y++){let w=(P+90*y/a)*Math.PI/180;o.push([v+Math.cos(w)*M,b+Math.sin(w)*M])}});let A=o.filter((m,p)=>{let P=o[(p+1)%o.length];return Math.hypot(m[0]-P[0],m[1]-P[1])>1e-5}),c=[],h=r/2,u=[0,e/2,0],f=(m,p,P)=>{let d=[(p[1]-m[1])*(P[2]-m[2])-(p[2]-m[2])*(P[1]-m[1]),(p[2]-m[2])*(P[0]-m[0])-(p[0]-m[0])*(P[2]-m[2]),(p[0]-m[0])*(P[1]-m[1])-(p[1]-m[1])*(P[0]-m[0])],M=[(m[0]+p[0]+P[0])/3-u[0],(m[1]+p[1]+P[1])/3-u[1],(m[2]+p[2]+P[2])/3-u[2]];d[0]*M[0]+d[1]*M[1]+d[2]*M[2]<0?c.push(...m,...P,...p):c.push(...m,...p,...P)};for(let m=0;m<A.length;m++){let[p,P]=A[m],[d,M]=A[(m+1)%A.length];f([-h,P,p],[h,P,p],[h,M,d]),f([-h,P,p],[h,M,d],[-h,M,d])}for(let m of[-h,h])for(let p=1;p<A.length-1;p++)f([m,A[0][1],A[0][0]],[m,A[p][1],A[p][0]],[m,A[p+1][1],A[p+1][0]]);let g=new Ge;return g.setAttribute("position",new Pe(c,3)),g}function ag(r,e,t){switch(r){case"l":return rg(e[0],e[1],e[2],e.slice(3));case"kit":return To(e,t.tinte);case"b":{let i=Math.min(.08,Math.min(e[0],e[1],e[2])*.24);return(t.netta||i<.012?new si(e[0],e[1],e[2]):ng(e[0],e[1],e[2],i)).translate(0,e[1]/2,0)}case"c":return new fn(e[3]??e[0],e[0],e[1],e[2]||8).translate(0,e[1]/2,0);case"k":{let i=new Ir(e[0],e[1],e[2]||8);return(e[2]||8)===4&&i.rotateY(Math.PI/4),i.translate(0,e[1]/2,0)}case"s":return new Ur(e[0],e[1]||0);case"f":return new fn(e[0],e[0],e[1],e[4]||4,1,!1,e[2]*Xr,e[3]*Xr).translate(0,e[1]/2,0);default:return new si(.1,.1,.1)}}var bl=new Map;function og(r){return bl.has(r)||bl.set(r,new ge(r)),bl.get(r)}var wl=new Map,Vr={h:0,s:0,l:0};function Wr(r,e){let t=r+e;if(wl.has(t))return wl.get(t);new ge(r).getHSL(Vr,At);let i=Vr.h*360,n=i<75?-8:i<240?11:-7,a=new ge().setHSL(((i+n*e)%360+360)%360/360,Math.min(1,Vr.s*(Vr.s<.25?1.2:1)),Math.max(.03,Vr.l*(1-.13*e)),At);return wl.set(t,a),a}function Yr(r,{strati:e=!0}={}){let t={pieni:{pos:[],nor:[],col:[],st:[]},luce:{pos:[],nor:[],col:[],st:[]}},i={},n=0,a=new xe,o=new Nt,s=new Yn;for(let A of r){if(!A)continue;if(A[0]==="parte"){i[A[1]]={...Yr(A[2]),at:A[3]||[0,0,0]};continue}let[c,h,u=[0,0,0],f="#ffffff",g={}]=A,m=ag(c,h,g);m.index&&(m=m.toNonIndexed());let p=g.r||[0,0,0];a.compose(new C(...u),o.setFromEuler(s.set(p[0]*Xr,p[1]*Xr,p[2]*Xr)),new C(...g.s||[1,1,1])),m.applyMatrix4(a),m.computeVertexNormals();let P=g.e?t.luce:t.pieni,d=m.attributes.position.count;e&&n++;for(let M=0;M<d;M++)P.st.push(n);if(P.pos.push(...m.attributes.position.array),P.nor.push(...m.attributes.normal.array),c==="kit")P.col.push(...m.attributes.color.array);else{let M=og(f),v=!g.e&&!g.uno&&(c==="b"||c==="c"||c==="l"),b=c==="c"&&!!g.r&&(Math.abs(g.r[0])>30||Math.abs(g.r[2])>30),y=m.attributes.normal;for(let w=0;w<d;w+=3){let U=y.getY(w),I=v?b?U>.3?M:Wr(f,1):c==="l"?U>.45?M:U<-.5?Wr(f,2):Wr(f,1):U>.8?M:U<-.5?Wr(f,2):Wr(f,1):M;for(let z=0;z<3;z++)P.col.push(I.r,I.g,I.b)}}m.dispose()}let l=A=>{if(!A.pos.length)return null;let c=new Ge;return c.setAttribute("position",new Pe(A.pos,3)),c.setAttribute("normal",new Pe(A.nor,3)),c.setAttribute("color",new Pe(A.col,3)),c.setAttribute("strato",new Pe(A.st,1)),c.computeBoundingBox(),c.computeBoundingSphere(),c};return{pieni:l(t.pieni),luce:l(t.luce),...Object.keys(i).length?{parti:i}:{}}}var Iu=new ge,Lu=new ge;function Jt(r,e,t){return Iu.set(r),Lu.set(e),"#"+Iu.lerp(Lu,t).getHexString()}var Mn=(r,e=.25)=>Jt(r,"#1d1630",e),qe=(r,e=.25)=>Jt(r,"#ffffff",e);Bi();var et="#b08cff",Le="#ffb48f";var Te="#5ee1ff",Re="#ffcf5c",Ee="#6df5a8",Be="#ff8a3d",We="#6f8fff",De="#ff7ac6",Uv={[Te]:"#ffc46e",[Re]:"#fff1b3",[Ee]:"#d9f56b",[Be]:"#ffe16b",[We]:"#ffd27a",[De]:"#ffd0a1",[et]:"#e7dcff",[Le]:"#ffe0cc"},sg=[{id:"studio",colore:Re,nome:"Studio"},{id:"allenamento",colore:Ee,nome:"Allenamento"},{id:"lavoro",colore:Te,nome:"Lavoro"},{id:"svago",colore:De,nome:"Svago"},{id:"casa",colore:Be,nome:"Casa"},{id:"sera",colore:We,nome:"Sera"}],Ov=Object.fromEntries(sg.map(r=>[r.id,r]));var Ru=r=>{let e=String(r).replace("#","");return[0,2,4].map(t=>parseInt(e.slice(t,t+2),16)||0)},Ag=r=>"#"+r.map(e=>Math.max(0,Math.min(255,Math.round(e))).toString(16).padStart(2,"0")).join("");function zu(r,e,t){let i=Ru(r),n=Ru(e);return Ag(i.map((a,o)=>a+(n[o]-a)*t))}function Vi(r,e=et){return typeof r=="string"&&/^#[0-9a-f]{6}$/i.test(r)?r.toLowerCase():e}var lg=[["forno","Forno","Oven","casa",Te,35,1,1,1.1,{cambia:!0,stati:2}],["microonde","Microonde","Microwave","casa",Te,20,1,1,.9,{cambia:!0,stati:2}],["tostapane","Tostapane","Toaster","casa",Le,8,1,1,.56,{cambia:!0,stati:2,passabile:!0}],["bollitore","Bollitore","Kettle","casa",De,8,1,1,.61,{cambia:!0,stati:2,passabile:!0}],["credenza","Credenza","Sideboard","casa",Be,40,3,1,1.82,{cambia:!0,stati:2}],["sgabello-alto","Sgabello alto","Bar stool","sedute",Le,12,1,1,.78,{sedute:[[.5,.5]],seduta:.72}],["tavolo-cucina","Tavolo da cucina","Kitchen table","tavoli",Be,30,3,2,1.09,{}],["isola-cucina","Isola della cucina","Kitchen island","casa",Be,55,3,2,1.24,{}],["lavello","Lavello","Sink","casa",Te,30,3,1,1.56,{cambia:!0,stati:2}],["lavastoviglie","Lavastoviglie","Dishwasher","casa",Te,35,1,1,1,{cambia:!0,stati:2}],["dispensa","Dispensa","Pantry","casa",Be,40,2,1,2.1,{cambia:!0,stati:2}],["pentola","Pentola","Cooking pot","casa",Re,6,1,1,.5,{passabile:!0}],["frigo-basso","Frigo basso","Mini fridge","casa",Le,25,1,1,1.1,{cambia:!0,stati:2}],["cesto-frutta","Cesto di frutta","Fruit basket","tavoli",De,8,1,1,.62,{passabile:!0}],["torta","Torta","Cake","tavoli",De,12,1,1,.55,{cambia:!0,stati:2,passabile:!0}],["forno-legna","Forno a legna","Wood oven","casa",Be,60,2,2,2.3,{luce:!0}],["macchina-caffe","Macchina del caffè","Coffee machine","casa",We,25,1,1,.8,{cambia:!0,stati:2}],["barbecue-carbone","Barbecue","Barbecue","casa",We,45,2,1,1.06,{luce:!0}],["carretto-gelati","Carretto dei gelati","Ice cream cart","svago",De,50,2,1,2.32,{}],["bancone-bar","Bancone del bar","Bar counter","tavoli",Be,45,3,1,1.48,{}],["tavola-apparecchiata","Tavola apparecchiata","Laid table","tavoli",Be,40,2,2,1.17,{}],["carrello-dolci","Carrello dei dolci","Dessert trolley","svago",Le,30,2,1,1.44,{cambia:!0,stati:2}],["barattolo-biscotti","Barattolo dei biscotti","Cookie jar","tavoli",Re,5,1,1,.7,{cambia:!0,stati:2,passabile:!0}],["cappa","Cappa","Range hood","muro",Te,25,2,0,0,{tipo:"muro",len:2,z:[150,220]}],["vasca","Vasca","Bathtub","casa",Te,55,3,2,1.1,{cambia:!0,stati:2}],["doccia","Doccia","Shower","casa",Te,45,1,1,2.42,{cambia:!0,stati:2}],["lavandino","Lavandino","Washbasin","casa",Te,25,1,1,1.2,{cambia:!0,stati:2}],["water","Water","Toilet","casa",Te,20,1,1,1.04,{cambia:!0,stati:2}],["mobiletto-bagno","Mobiletto del bagno","Bathroom cabinet","casa",Te,25,1,1,1.1,{cambia:!0,stati:2}],["cesto-biancheria","Cesto della biancheria","Laundry basket","casa",Re,10,1,1,1.09,{cambia:!0,stati:2}],["lavatrice","Lavatrice","Washing machine","casa",Te,40,1,1,1,{cambia:!0,stati:2}],["bilancia","Bilancia","Scale","casa",Le,8,1,1,.2,{passabile:!0}],["paperella","Paperella","Rubber duck","svago",Re,5,1,1,.8,{passabile:!0}],["porta-asciugamani","Porta asciugamani","Towel stand","casa",Le,12,1,1,1.5,{}],["secchio-mocio","Secchio col mocio","Mop bucket","casa",Te,8,1,1,1.2,{}],["botte-sauna","Botte sauna","Barrel sauna","casa",Be,70,2,2,1.92,{cambia:!0,stati:2}],["specchio-bagno","Specchio del bagno","Bathroom mirror","muro",Te,15,1,0,0,{tipo:"muro",len:1,z:[110,200]}],["armadietto-bagno","Armadietto a muro","Wall cabinet","muro",Te,18,1,0,0,{tipo:"muro",len:1,z:[110,180],cambia:!0,stati:2}],["asciugamani","Asciugamani","Towels","muro",Le,8,1,0,0,{tipo:"muro",len:1,z:[120,180]}],["armadio","Armadio","Wardrobe","casa",We,45,2,1,2.4,{cambia:!0,stati:2}],["cassettiera","Cassettiera","Chest of drawers","casa",We,30,2,1,1.22,{cambia:!0,stati:2}],["letto-castello","Letto a castello","Bunk bed","casa",De,70,2,3,2.6,{}],["letto-singolo","Letto singolo","Single bed","casa",We,35,2,3,.95,{}],["culla","Culla","Cradle","casa",De,25,2,2,.9,{}],["toeletta","Toeletta","Dressing table","casa",Le,35,2,1,1.8,{}],["specchio-pieno","Specchio a figura intera","Full mirror","casa",Re,25,1,1,2,{}],["baule","Baule","Trunk","casa",Be,22,2,1,.92,{cambia:!0,stati:2}],["attaccapanni","Appendiabiti","Coat stand","casa",Te,12,1,1,2.1,{}],["scarpiera","Scarpiera","Shoe rack","casa",Be,20,2,1,.9,{cambia:!0,stati:2}],["panca-letto","Panca del letto","Bed bench","sedute",We,18,3,1,.68,{sedute:[[1,.5],[2,.5]],seduta:.55}],["peluche-gigante","Peluche gigante","Giant plush","svago",De,28,1,1,1.67,{}],["orsetto","Orsetto","Teddy bear","svago",Le,6,1,1,.85,{passabile:!0}],["valigia","Valigia","Suitcase","casa",Le,10,1,1,.6,{cambia:!0,stati:2,passabile:!0}],["amaca-a-stelo","Amaca","Hammock","svago",Ee,35,3,2,1.43,{}],["tenda-indiana","Tenda indiana","Play tent","svago",Le,40,2,2,2.02,{}],["paravento","Paravento","Folding screen","casa",Re,22,2,1,1.8,{}],["sacco-a-pelo","Sacco a pelo","Sleeping bag","casa",Ee,12,1,2,.3,{passabile:!0}],["cuccia-gatto","Cuccia del gatto","Cat bed","svago",We,10,1,1,.4,{passabile:!0}],["poltrona-lettura","Poltrona da lettura","Reading chair","sedute",De,30,1,1,1.4,{sedute:[[.5,.55]],seduta:.5}],["comodino-alto","Comodino col cassetto","Tall nightstand","casa",We,16,1,1,1.1,{cambia:!0,stati:2}],["abat-jour","Abat-jour","Table lamp","luci",We,12,1,1,.9,{luce:!0}],["applique-ottone","Applique","Wall sconce","muro",We,12,1,0,0,{tipo:"muro",len:1,z:[130,180],luce:!0}],["lampadario-stelo","Lampada a stelo","Floor lamp","luci",We,25,1,1,2.8,{luce:!0}],["candele","Candele","Candles","luci",Re,6,1,1,.5,{luce:!0,passabile:!0}],["candelabro","Candelabro","Candelabra","luci",Re,22,1,1,1.2,{luce:!0}],["lampada-tavolo","Lampada da tavolo","Desk lamp","luci",Te,10,1,1,.7,{luce:!0,passabile:!0}],["faretto","Faretto col treppiede","Spotlight","luci",Te,20,1,1,1.95,{luce:!0}],["neon-muro","Neon","Neon strip","muro",De,20,2,0,0,{tipo:"muro",len:2,z:[150,196],luce:!0}],["catena-luci","Catena di luci","String lights","muro",Re,14,2,0,0,{tipo:"muro",len:2,z:[180,214],luce:!0}],["lampada-sale","Lampada di sale","Salt lamp","luci",Le,12,1,1,.6,{luce:!0,passabile:!0}],["lampada-lava","Lampada lava","Lava lamp","luci",De,15,1,1,.8,{luce:!0}],["sfera-luminosa","Sfera luminosa","Glow orb","luci",Ee,18,1,1,.86,{luce:!0}],["lampada-fungo","Lampada fungo","Mushroom lamp","luci",De,14,1,1,.59,{luce:!0}],["lampada-luna","Lampada luna","Moon lamp","luci",Re,28,1,1,1.6,{luce:!0}],["braciere","Braciere","Brazier","luci",Le,20,1,1,1.1,{luce:!0}],["lampada-arco","Lampada ad arco","Arc lamp","luci",Te,35,2,2,2.4,{luce:!0}],["lampione-giardino","Lampione da giardino","Garden lamp","luci",Be,20,1,1,2.8,{luce:!0}],["stella-muro","Stella luminosa","Star light","muro",Re,12,1,0,0,{tipo:"muro",len:1,z:[140,200],luce:!0}],["lanterna-carta","Lanterna di carta","Paper lantern","luci",Le,12,1,1,.92,{luce:!0}],["lampada-papavero","Lampada papavero","Poppy lamp","luci",Le,18,1,1,2.08,{luce:!0}],["mappamondo","Mappamondo","Globe","tavoli",Re,25,1,1,1.2,{cambia:!0,stati:4}],["lavagna","Lavagna","Blackboard","tavoli",Te,30,2,1,2,{}],["scaffale","Scaffale","Shelf unit","tavoli",Re,28,2,1,2.2,{}],["cestino","Cestino","Bin","tavoli",Te,4,1,1,.64,{passabile:!0}],["scrivania-piccola","Scrivania piccola","Small desk","tavoli",Te,22,2,1,1.14,{}],["sedia-studio","Sedia da studio","Study chair","sedute",Te,12,1,1,1.1,{sedute:[[.5,.45,"dietro"]],seduta:.5}],["leggio","Leggio","Lectern","tavoli",Be,15,1,1,1.5,{}],["cavalletto-pittore","Cavalletto","Easel","tavoli",Re,20,1,1,1.9,{}],["tavolo-disegno","Tavolo da disegno","Drawing table","tavoli",Te,35,2,2,1.4,{}],["microscopio","Microscopio","Microscope","tavoli",Te,30,1,1,.8,{passabile:!0,cambia:!0,stati:2}],["pila-libri","Pila di libri","Book stack","tavoli",Re,6,1,1,.7,{passabile:!0}],["schedario","Schedario","Filing cabinet","tavoli",Te,25,1,1,1.4,{cambia:!0,stati:2}],["stampante","Stampante","Printer","tavoli",We,18,1,1,.59,{cambia:!0,stati:2}],["computer","Computer","Computer","tavoli",We,50,2,1,1.7,{cambia:!0,stati:2}],["cattedra","Cattedra","Teacher desk","tavoli",Be,38,3,2,1.46,{}],["banco-scuola","Banco di scuola","School desk","sedute",Re,16,2,1,1,{sedute:[[.6,.65]],seduta:.5}],["pianola","Pianola","Keyboard piano","svago",We,45,3,1,1.4,{cambia:!0,stati:2}],["bacheca","Bacheca","Pin board","muro",Re,15,2,0,0,{tipo:"muro",len:2,z:[110,190]}],["mappa-muro","Mappa","Wall map","muro",Re,15,2,0,0,{tipo:"muro",len:2,z:[100,190]}],["zaino-scuola","Zaino","Backpack","tavoli",Le,8,1,1,.84,{cambia:!0,stati:2,passabile:!0}]],Dl=[],Uu={it:{},en:{}};for(let[r,e,t,i,n,a,o,s,l,A]of lg){let c=A.tipo==="muro";Dl.push({id:r,nome:e,gruppo:i,colore:n,prezzo:a,piedi:[o,s],...A,...c?{}:{quota:[0,Math.round(l*80)]}}),Uu.it["mobile."+r]=e,Uu.en["mobile."+r]=t}var _l=[["pianoforte","Pianoforte","Piano","svago",We,80,2,1,1.5,{cambia:!0,stati:2}],["chitarra","Chitarra","Guitar","svago",De,30,1,1,1.95],["batteria","Batteria","Drum kit","svago",De,70,2,2,1.6],["flipper","Flipper","Pinball","svago",We,75,1,2,1.75,{luce:!0}],["biliardino","Calcetto","Foosball","svago",De,55,2,1,1.15,{cambia:!0,stati:3}],["console","Consolle coi giochi","Game console","svago",Te,50,1,1,.95],["juke-box","Juke-box","Jukebox","svago",Le,85,1,1,1.7,{cambia:!0,stati:2}],["dadi","Dado gigante","Giant die","svago",Le,15,1,1,.85,{cambia:!0,stati:6}],["ping-pong","Ping pong","Ping pong","svago",Ee,50,3,2,1.12],["biliardo","Biliardo","Pool table","svago",Ee,75,3,2,1.1],["microfono","Microfono","Microphone","svago",De,20,1,1,1.7],["tamburo","Tamburo","Drum","svago",Le,18,1,1,.95],["xilofono","Xilofono","Xylophone","svago",De,22,2,1,.4],["tastiera","Tastiera","Keyboard","svago",We,40,2,1,1],["arpa","Arpa","Harp","svago",Re,60,1,1,2],["radio","Radio","Radio","svago",Be,20,1,1,.95,{cambia:!0,stati:2}],["tavolo-carte","Tavolo da carte","Card table","svago",Ee,35,2,2,.95],["pista-macchinine","Pista delle macchinine","Toy car track","svago",Te,40,3,2,.4],["cavalletto","Cavalletto","Easel","svago",Re,28,1,1,1.8],["castello-gonfiabile","Castello gonfiabile","Bouncy castle","svago",De,65,3,2,2.1],["palloncini","Palloncini","Balloons","svago",De,10,1,1,2.45,{cambia:!0,stati:3}],["carillon","Carillon","Music box","svago",We,24,1,1,1.1,{cambia:!0,stati:2,passabile:!0}],["proiettore","Proiettore","Projector","svago",Te,45,1,1,1.1,{cambia:!0,stati:2}],["altoparlante","Altoparlante","Speaker","svago",De,30,1,1,1.5,{cambia:!0,stati:2}],["gong","Gong","Gong","svago",Le,26,1,1,1.85,{cambia:!0,stati:2}],["altalena","Altalena","Swing","fuori",Ee,40,3,1,2.3,{cambia:!0,stati:3}],["scivolo","Scivolo","Slide","fuori",De,45,2,2,1.8],["fontana","Fontana","Fountain","fuori",Ee,55,2,2,1.9,{cambia:!0,stati:2}],["barbecue","Barbecue","Barbecue","fuori",Be,35,2,1,1.45,{cambia:!0,stati:3}],["tenda","Tenda da campeggio","Camping tent","fuori",Le,35,2,2,1.56,{cambia:!0,stati:2}],["falo","Falò","Campfire","fuori",We,12,1,1,.72,{luce:!0}],["casetta-uccelli","Casetta per uccelli","Birdhouse","fuori",Be,14,1,1,2.1],["steccato","Steccato","Fence","fuori",Be,8,3,1,1.2],["cartello","Cartello","Signpost","fuori",Be,8,1,1,1.52,{cambia:!0,stati:3}],["carriola","Carriola","Wheelbarrow","fuori",Ee,16,2,1,.95],["pozzo","Pozzo","Well","fuori",Be,38,1,1,2.3],["cassonetto","Cassonetto","Bin","fuori",Ee,12,1,1,1.25,{cambia:!0,stati:2}],["amaca","Amaca","Hammock","fuori",De,30,3,1,1.5],["sabbiera","Sabbiera","Sandbox","fuori",Le,18,2,2,.5,{passabile:!0}],["dondolo-molla","Dondolo a molla","Spring rider","fuori",De,22,1,1,1.38,{cambia:!0,stati:2}],["giostra","Giostra","Merry-go-round","fuori",De,48,2,2,1.15,{cambia:!0,stati:4}],["bilico","Altalena a bilico","Seesaw","fuori",De,28,3,1,1.17,{cambia:!0,stati:3}],["tavolo-picnic","Tavolo da picnic","Picnic table","fuori",Be,36,3,2,1],["ombrellone","Ombrellone","Parasol","fuori",Le,30,2,2,2.45,{cambia:!0,stati:2}],["sdraio","Sdraio","Deck chair","fuori",De,24,1,2,1.15],["botte","Botte","Barrel","fuori",Be,14,1,1,1],["mulino","Mulino a vento","Windmill","fuori",Be,70,2,2,2.7,{cambia:!0,stati:3}],["legna","Catasta di legna","Woodpile","fuori",Be,14,2,1,1.15],["ceppo","Ceppo con l'ascia","Chopping block","fuori",Be,10,1,1,1.3],["spaventapasseri","Spaventapasseri","Scarecrow","fuori",Le,22,1,1,2.08],["pollaio","Pollaio","Chicken coop","fuori",Be,32,2,1,1.3,{cambia:!0,stati:2}],["cuccia","Cuccia","Doghouse","fuori",Be,20,1,1,1.2],["bici","Bicicletta","Bicycle","fuori",Le,34,2,1,1.2],["gazebo","Gazebo","Gazebo","fuori",Be,80,3,3,2.9],["canestro","Canestro","Hoop","fuori",Le,28,1,1,3.55],["vaso-terracotta","Vaso grande","Big pot","piante",Ee,8,1,1,1.5],["cespuglio","Cespuglio","Bush","piante",Ee,10,1,1,1],["cespuglio-bacche","Cespuglio di bacche","Berry bush","piante",Ee,14,1,1,1.1,{cambia:!0,stati:2}],["girasoli","Girasoli","Sunflowers","piante",Le,12,1,1,2.3],["bonsai","Bonsai","Bonsai","piante",Ee,30,1,1,1.15],["palma-vaso","Palma in vaso","Potted palm","piante",Ee,24,1,1,2.4],["felce","Felce","Fern","piante",Ee,9,1,1,1],["orchidea","Orchidea","Orchid","piante",De,16,1,1,1.31],["bambu","Bambù","Bamboo","piante",Ee,18,1,1,2.95],["lavanda","Lavanda","Lavender","piante",De,8,1,1,.95,{passabile:!0}],["tulipani","Tulipani","Tulips","piante",De,6,1,1,.6,{passabile:!0}],["rose","Rosaio","Rose bush","piante",De,14,1,1,1.2],["margherite","Margherite","Daisies","piante",De,5,1,1,.5,{passabile:!0}],["aloe","Aloe","Aloe","piante",Ee,8,1,1,.94],["ficus","Ficus","Ficus","piante",Ee,26,1,1,2.6],["traliccio","Traliccio con l'edera","Ivy trellis","piante",Ee,16,2,1,2.08],["zucche","Zucche","Pumpkins","piante",Le,9,1,1,.7,{passabile:!0}],["cassetta-erbe","Cassetta delle erbe","Herb box","piante",Ee,12,2,1,.8],["ninfea","Ninfea nella conca","Water lily bowl","piante",Ee,14,1,1,.55],["topiario","Siepe a palla","Topiary ball","piante",Ee,18,1,1,1.79],["poster","Poster","Poster","muro",Le,8,1,120,196],["tenda-muro","Tenda","Curtain","muro",De,22,2,36,214,{cambia:!0,stati:2}],["mensola-tazze","Mensola con le tazze","Mug shelf","muro",Re,12,2,110,150],["cucu","Orologio a cucù","Cuckoo clock","muro",Be,28,1,120,214,{cambia:!0,stati:2}],["ghirlanda","Ghirlanda","Wreath","muro",Ee,10,1,150,202],["specchio-tondo","Specchio tondo","Round mirror","muro",Ee,20,1,120,192],["mappamondo-muro","Mappa del mondo","World map","muro",Re,24,2,110,200],["scaffaletto","Scaffaletto","Wall shelves","muro",Re,18,1,90,200],["cornice-foto","Cornice con le foto","Photo frame","muro",et,10,1,130,190],["bersaglio","Bersaglio","Dartboard","muro",Le,14,1,130,190],["lavagna-muro","Lavagna","Chalkboard","muro",Te,16,2,100,200],["bandierine","Bandierine","Bunting","muro",De,12,4,180,214],["chitarra-muro","Chitarra appesa","Hanging guitar","muro",De,22,1,70,210],["appendiabiti","Appendiabiti","Coat rack","muro",Be,12,2,130,190],["bacheca-sughero","Bacheca di sughero","Corkboard","muro",Re,14,2,100,190],["applique","Applique","Wall lamp","muro",We,15,1,130,190,{luce:!0}],["acchiappasogni","Acchiappasogni","Dreamcatcher","muro",De,12,1,90,214],["scudo","Scudo","Shield","muro",Te,18,1,100,190],["pesce-trofeo","Pesce trofeo","Fish trophy","muro",Ee,16,2,130,180],["meridiana","Meridiana","Sun dial","muro",Le,12,1,130,190],["termometro","Termometro","Thermometer","muro",et,6,1,90,190],["maschere","Maschere","Masks","muro",De,14,2,120,190],["lanterne-carta","Lanterne di carta","Paper lanterns","muro",Le,18,2,150,214,{luce:!0}],["stendardo","Stendardo","Banner","muro",Le,14,1,70,214],["vetrinetta","Vetrinetta","Display case","muro",Re,24,2,110,190]],Ou=_l.map(([r,e,t,i,n,a,o,s,l,A={}])=>i==="muro"?{id:r,nome:e,gruppo:i,colore:n,tipo:"muro",prezzo:a,piedi:[o,0],len:o,z:[s,l],...A}:{id:r,nome:e,gruppo:i,colore:n,prezzo:a,piedi:[o,s],quota:[0,Math.round(l*80)],...A}),kv={it:Object.fromEntries(_l.map(r=>["mobile."+r[0],r[1]])),en:Object.fromEntries(_l.map(r=>["mobile."+r[0],r[2]]))};var El=[{id:"divano",nome:"Divano",gruppo:"sedute",colore:We,prezzo:40,piedi:[3,2],sedute:[[.99,1.24],[2.01,1.24]],quota:[0,76]},{id:"divano-grande",nome:"Divano grande",gruppo:"sedute",colore:De,prezzo:60,piedi:[3,2],sedute:[[.77,1.24],[1.5,1.24],[2.23,1.24]],quota:[0,76]},{id:"poltrona",nome:"Poltrona",gruppo:"sedute",colore:Le,prezzo:25,piedi:[2,2],sedute:[[1,1.24]],quota:[0,70]},{id:"sedia",nome:"Sedia da scrivania",gruppo:"sedute",colore:Te,prezzo:15,piedi:[1,1],sedute:[[.5,.45,"dietro"]],quota:[0,83]},{id:"pouf",nome:"Pouf",gruppo:"sedute",colore:De,prezzo:12,piedi:[1,1],sedute:[[.5,.5]],quota:[0,50]},{id:"panchina",nome:"Panchina",gruppo:"sedute",colore:Be,prezzo:20,piedi:[3,1],sedute:[[.9,.55],[2.1,.55]],quota:[0,50]},{id:"scrivania",nome:"Scrivania",gruppo:"tavoli",colore:Te,prezzo:35,piedi:[3,2],modulo:"progetti",quota:[0,112]},{id:"tavolino",nome:"Tavolino",gruppo:"tavoli",colore:Te,prezzo:15,piedi:[3,2],quota:[0,20]},{id:"tavolino-film",nome:"Tavolino coi popcorn",gruppo:"tavoli",colore:Te,prezzo:20,piedi:[3,2],quota:[0,37]},{id:"tavolo",nome:"Tavolo",gruppo:"tavoli",colore:Be,prezzo:30,piedi:[2,2],quota:[0,64]},{id:"libreria",nome:"Libreria",gruppo:"tavoli",colore:Re,prezzo:35,piedi:[3,1],quota:[0,150]},{id:"mensola",nome:"Mensola coi libri",gruppo:"tavoli",colore:Re,prezzo:20,piedi:[3,1],alto:!0,quota:[134,173]},{id:"letto",nome:"Letto",gruppo:"casa",colore:We,prezzo:50,piedi:[3,3],sdraio:[1.5,1.6],modulo:"notte",quota:[0,84]},{id:"comodino",nome:"Comodino",gruppo:"casa",colore:We,prezzo:15,piedi:[1,1],quota:[0,90]},{id:"frigo",nome:"Frigo",gruppo:"casa",colore:Te,prezzo:40,piedi:[1,1],quota:[0,176]},{id:"cucina",nome:"Cucina",gruppo:"casa",colore:Be,prezzo:45,piedi:[3,1],quota:[0,76]},{id:"camino",nome:"Camino",gruppo:"casa",colore:Be,prezzo:45,piedi:[3,1],luce:!0,quota:[0,106]},{id:"parete",nome:"Parete bassa",gruppo:"casa",colore:et,prezzo:5,piedi:[1,1],quota:[0,74]},{id:"lampada",nome:"Lampada",gruppo:"luci",colore:We,prezzo:15,piedi:[1,1],luce:!0,quota:[0,182]},{id:"lanterna",nome:"Lanterna",gruppo:"luci",colore:Re,prezzo:8,piedi:[1,1],luce:!0,passabile:!0,quota:[0,60]},{id:"pianta",nome:"Pianta",gruppo:"piante",colore:Ee,prezzo:10,piedi:[1,1],quota:[0,150]},{id:"cactus",nome:"Cactus",gruppo:"piante",colore:Ee,prezzo:8,piedi:[1,1],quota:[0,100]},{id:"fiori",nome:"Fiori",gruppo:"piante",colore:De,prezzo:5,piedi:[1,1],passabile:!0,quota:[0,24]},{id:"albero",nome:"Albero",gruppo:"piante",colore:Ee,prezzo:30,piedi:[1,1],quota:[0,190]},{id:"albero-altalena",nome:"L'albero con l'altalena",gruppo:"piante",colore:Ee,prezzo:45,piedi:[1,1],quota:[0,210]},{id:"alberello",nome:"Alberello",gruppo:"piante",colore:Ee,prezzo:18,piedi:[1,1],quota:[0,140]},{id:"arcade",nome:"Cabinato",gruppo:"svago",colore:De,prezzo:60,piedi:[1,1],modulo:"arcade",quota:[0,160]},{id:"televisore",nome:"Televisore",gruppo:"svago",colore:We,prezzo:90,piedi:[3,1],modulo:"cinema",quota:[0,156]},{id:"giradischi",nome:"Giradischi",gruppo:"svago",colore:De,prezzo:50,piedi:[1,1],modulo:"musica",quota:[0,90]},{id:"telescopio",nome:"Telescopio",gruppo:"svago",colore:Re,prezzo:80,piedi:[1,1],modulo:"cielo",quota:[0,130]},{id:"ruota",nome:"Ruota della fortuna",gruppo:"svago",colore:De,prezzo:40,piedi:[1,1],stati:8,quota:[0,172]},{id:"acquario",nome:"Acquario",gruppo:"svago",colore:Te,prezzo:70,piedi:[3,1],missione:"tre-giorni",quota:[0,118]},{id:"sacco",nome:"Sacco da boxe",gruppo:"palestra",colore:Be,prezzo:30,piedi:[1,1],quota:[0,142]},{id:"manubri",nome:"Manubri",gruppo:"palestra",colore:Ee,prezzo:25,piedi:[3,1],quota:[0,72]},{id:"panca",nome:"Panca",gruppo:"palestra",colore:Ee,prezzo:25,piedi:[4,1],sedute:[[2,.5]],quota:[0,26]},{id:"borraccia",nome:"Borraccia",gruppo:"palestra",colore:Te,prezzo:3,piedi:[1,1],passabile:!0,quota:[0,46]},{id:"finestra",nome:"Finestra",gruppo:"muro",colore:et,tipo:"muro",prezzo:20,piedi:[2,0],len:2,z:[76,196]},{id:"finestra-alta",nome:"Finestra alta",gruppo:"muro",colore:et,tipo:"muro",prezzo:25,piedi:[2,0],len:2,z:[34,204]},{id:"porta",nome:"Porta",gruppo:"muro",colore:Be,tipo:"muro",prezzo:0,piedi:[1,0],len:1,z:[0,170],modulo:"stanze"},{id:"interruttore",nome:"Interruttore",gruppo:"muro",colore:Be,tipo:"muro",prezzo:5,piedi:[1,0],len:1,z:[100,132],modulo:"luce"},{id:"orologio",nome:"Orologio",gruppo:"muro",colore:et,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[158,202]},{id:"calendario",nome:"Calendario",gruppo:"muro",colore:et,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[102,184],modulo:"oggi"},{id:"quadro",nome:"Quadro",gruppo:"muro",colore:Le,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[138,186]},{id:"quadro-grande",nome:"Quadro grande",gruppo:"muro",colore:We,tipo:"muro",prezzo:18,piedi:[2,0],len:2,z:[118,198]},{id:"specchio",nome:"Specchio",gruppo:"muro",colore:Ee,tipo:"muro",prezzo:25,piedi:[2,0],len:2,z:[28,198],modulo:"tu"},{id:"led",nome:"Orologio luminoso",gruppo:"muro",colore:Ee,tipo:"muro",prezzo:20,piedi:[2,0],len:2,z:[164,202]},{id:"mappa-stelle",nome:"Mappa delle stelle",gruppo:"muro",colore:Re,tipo:"muro",prezzo:25,piedi:[2,0],len:2,z:[108,202]},{id:"telo",nome:"Telo del cinema",gruppo:"muro",colore:De,tipo:"muro",prezzo:70,piedi:[4,0],len:4,z:[62,214],modulo:"cinema"},{id:"lucine",nome:"Lucine",gruppo:"muro",colore:et,tipo:"muro",prezzo:15,piedi:[4,0],len:4,z:[188,210]},{id:"mensola-muro",nome:"Mensolina",gruppo:"muro",colore:Re,tipo:"muro",prezzo:8,piedi:[1,0],len:1,z:[100,146]},{id:"piante-appese",nome:"Pianta appesa",gruppo:"muro",colore:Ee,tipo:"muro",prezzo:10,piedi:[1,0],len:1,z:[128,232]},{id:"blocco",nome:"Blocco",gruppo:"costruire",colore:et,prezzo:2,piedi:[1,1],impilabile:!0,quota:[0,49]},{id:"mezzo-blocco",nome:"Mezzo blocco",gruppo:"costruire",colore:et,prezzo:1,piedi:[1,1],impilabile:!0,quota:[0,24]},{id:"lastra",nome:"Lastra",gruppo:"costruire",colore:et,prezzo:1,piedi:[1,1],impilabile:!0,quota:[0,8]},{id:"blocco-lungo",nome:"Blocco lungo",gruppo:"costruire",colore:et,prezzo:3,piedi:[2,1],impilabile:!0,quota:[0,49]},{id:"gradini",nome:"Gradini",gruppo:"costruire",colore:et,prezzo:3,piedi:[1,1],impilabile:!0,quota:[0,49]},{id:"colonna",nome:"Colonna",gruppo:"costruire",colore:et,prezzo:4,piedi:[1,1],impilabile:!0,quota:[0,147]},{id:"muretto",nome:"Muretto",gruppo:"costruire",colore:et,prezzo:2,piedi:[1,1],impilabile:!0,quota:[0,98]},{id:"casetta",nome:"Casetta",gruppo:"fuori",colore:Be,prezzo:0,piedi:[4,4],entra:!0,quota:[0,580]},{id:"cassetta-lettere",nome:"Cassetta delle lettere",gruppo:"fuori",colore:"#c42430",prezzo:8,piedi:[1,1],modulo:"posta",quota:[0,150]},{id:"lampione",nome:"Lampione",gruppo:"fuori",colore:We,prezzo:12,piedi:[1,1],luce:!0,quota:[0,230]},{id:"cambia-stagione",nome:"Season Changer",gruppo:"fuori",colore:"#5ee1ff",prezzo:30,piedi:[1,1],stati:10,quota:[0,210]},{id:"orto",nome:"L'orto",gruppo:"fuori",colore:Be,prezzo:10,piedi:[3,2],passabile:!0,quota:[0,20]},{id:"orto-vuoto",nome:"Orto da bagnare",gruppo:"fuori",colore:et,prezzo:0,piedi:[3,2],passabile:!0,quota:[0,12]},{id:"sasso",nome:"Sasso",gruppo:"fuori",colore:et,prezzo:3,piedi:[1,1],quota:[0,30]},{id:"funghi",nome:"Funghi",gruppo:"fuori",colore:De,prezzo:3,piedi:[1,1],passabile:!0,quota:[0,20]},{id:"ciuffo",nome:"Ciuffo d'erba",gruppo:"fuori",colore:Ee,prezzo:1,piedi:[1,1],passabile:!0,quota:[0,25]},{id:"tappeto-tondo",nome:"Tappeto tondo",gruppo:"tappeti",colore:et,tipo:"tappeto",prezzo:15,piedi:[3,3],forma:"tondo"},{id:"tappeto",nome:"Tappeto",gruppo:"tappeti",colore:Le,tipo:"tappeto",prezzo:15,piedi:[3,2],forma:"rettangolo"},{id:"tappetino",nome:"Tappetino",gruppo:"tappeti",colore:Be,tipo:"tappeto",prezzo:5,piedi:[1,1],forma:"rettangolo"},{id:"tappeto-lungo",nome:"Tappeto lungo",gruppo:"tappeti",colore:Ee,tipo:"tappeto",prezzo:20,piedi:[4,2],forma:"rettangolo"},{id:"stagno",nome:"Stagno",gruppo:"tappeti",colore:Te,tipo:"tappeto",prezzo:35,piedi:[3,3],forma:"stagno"},{id:"pietra",nome:"Pietra",gruppo:"tappeti",colore:et,tipo:"tappeto",prezzo:2,piedi:[1,1],forma:"pietra"}];El.push(...Dl,...Ou);for(let r of El)r.tipo=r.tipo||"pavimento",r.tipo==="muro"&&(r.piedi=[r.len,0]);var Ft=Object.fromEntries(El.map(r=>[r.id,r]));function Bl(r,e=0){let[t,i]=r.piedi;return e%2?[i,t]:[t,i]}var cg=0,Nu=(r="m")=>r+Date.now().toString(36)+(cg++).toString(36)+Math.random().toString(36).slice(2,5),sr=(r,e)=>r+","+e,Wi=(r,e=r)=>{let t=[];for(let i=0;i<r;i++)for(let n=0;n<e;n++)t.push([i,n]);return t},ye=(r,e,t,i=0,n=void 0)=>({id:Nu(),tipo:r,i:e,j:t,r:i,...n?{c:n}:{}}),tt=(r,e,t,i,n=void 0)=>({id:Nu("a"),tipo:r,piano:e,pos:t,a:i,dir:-1,...n?{c:n}:{}}),ug=[{id:"soggiorno",nome:"Soggiorno",tinta:et,fa:()=>({caselle:Wi(8),appesi:[tt("finestra","i",0,1),tt("calendario","i",0,5),tt("orologio","j",0,1),tt("interruttore","j",0,5),tt("porta","j",0,6)],mobili:[ye("tappeto-tondo",2,4),ye("tappetino",6,0),ye("pianta",0,0),ye("mensola",3,0),ye("scrivania",2,0),ye("sedia",3,2),ye("divano",0,4,1),ye("lampada",0,7)]})},{id:"cinema",nome:"Cinema",tinta:De,fa:()=>({caselle:Wi(8),appesi:[tt("telo","i",0,1),tt("lucine","j",0,2),tt("quadro","j",0,1,Le),tt("porta","j",0,7)],mobili:[ye("tappeto-lungo",2,1,0,Le),ye("divano-grande",3,0),ye("tavolino-film",3,2),ye("pianta",0,0),ye("giradischi",7,0,0,Re)]})},{id:"palestra",nome:"Palestra",tinta:Ee,fa:()=>({caselle:Wi(8),appesi:[tt("specchio","j",0,2),tt("finestra","i",0,1),tt("led","i",0,5),tt("porta","j",0,6)],mobili:[ye("tappeto",2,2,0,Ee),ye("tappeto",2,4,0,Te),ye("manubri",5,0),ye("sacco",1,1),ye("panca",5,3,1),ye("borraccia",6,6),ye("pianta",0,7)]})},{id:"giardino",nome:"Giardino",tinta:Ee,aperta:!0,fa:()=>({caselle:Wi(10,9).filter(([r,e])=>![sr(0,8),sr(9,0),sr(9,8),sr(8,8),sr(9,7)].includes(sr(r,e))),appesi:[],mobili:[ye("stagno",5,4),...[[1,7],[2,6],[3,5],[3,4],[4,3]].map(([r,e])=>ye("pietra",r,e)),ye("albero-altalena",1,1),ye("albero",7,1),ye("alberello",0,5),ye("panchina",4,0),ye("lanterna",3,1),ye("lanterna",8,3),ye("lanterna",2,8),ye("fiori",1,3),ye("fiori",3,2),ye("fiori",8,2),ye("fiori",4,7),ye("fiori",8,7)]})},{id:"osservatorio",nome:"Osservatorio",tinta:Re,fa:()=>({caselle:Wi(8),appesi:[tt("finestra-alta","i",0,1),tt("mappa-stelle","j",0,4),tt("orologio","j",0,1),tt("porta","j",0,7)],mobili:[ye("tappeto-tondo",3,3,0,Re),ye("telescopio",1,1),ye("libreria",0,4,1),ye("scrivania",4,0),ye("sedia",5,2,0,Re),ye("lampada",0,7)]})},{id:"camera",nome:"Camera",tinta:We,fa:()=>({caselle:Wi(7),appesi:[tt("finestra","i",0,1),tt("quadro-grande","j",0,1),tt("porta","j",0,6),tt("piante-appese","i",0,5)],mobili:[ye("tappeto",2,3,0,We),ye("letto",2,0),ye("comodino",1,0),ye("comodino",5,0),ye("lampada",0,6),ye("pianta",6,6),ye("pouf",5,4)]})},{id:"cucina",nome:"Cucina",tinta:Be,fa:()=>({caselle:Wi(7),appesi:[tt("finestra","i",0,2),tt("mensola-muro","j",0,3),tt("orologio","j",0,4),tt("porta","j",0,6)],mobili:[ye("frigo",0,0),ye("cucina",1,0),ye("tavolo",3,3),ye("tappetino",0,2,0,Be),ye("cactus",6,0),ye("pianta",0,6)]})},{id:"vuota",nome:"Vuota",tinta:et,fa:()=>({caselle:Wi(6),appesi:[tt("porta","j",0,4)],mobili:[]})}],t2=Object.fromEntries(ug.map(r=>[r.id,r]));var we=1/80;var O={legno:"#edab50",legnoScuro:"#8a4836",legnoChiaro:"#f6ca9f",erba:"#5ac54f",erbaScura:"#33984b",foglie:["#134c4c","#1e6f50","#33984b","#5ac54f"],terra:["#e69c69","#e69c69","#bf6f4a"],pietra:"#92a1b9",pietraScura:"#657392",ferro:"#2a2f4e",crema:"#f9e6cf",neve:"#f4f1ea",nero:"#1c121c",vaso:"#e07438",luce:"#ffd27a",schermo:"#8fe3ff",acqua:"#0098dc",rosso:"#c42430",rosa:"#f68187"},F=(r,e,t,i,n,a,o,s)=>["b",[r,e,t],[i,n,a],o,s],pe=(r,e,t,i,n,a,o=8,s,l)=>["c",[r,e,o,s],[t,i,n],a,l],ft=(r,e,t,i,n,a,o=8,s)=>["k",[r,e,o],[t,i,n],a,s],Se=(r,e,t,i,n,a=0,o)=>["s",[r,a],[e,t,i],n,o],Xi=(r,e=1,t=0,i=0,n=0,a={})=>["kit",r,[t,i,n],null,{s:[e,e,e],...a}],lt={e:!0},Ll=(r,e,t)=>["parte",r,t,e],hg=(r,e,t,i,n,a=0)=>["f",[r,e,t,i,3],[0,0,a],n,{r:[90,0,0],uno:!0}],fg={uno:!0,netta:!0},li=(r,e,t,i,n=.18)=>[[-1,-1],[1,-1],[-1,1],[1,1]].map(([a,o])=>pe(.075,t,a*(r/2-n),0,o*(e/2-n),i,8,.11)),Si=(r,e,t,i,n,a=0)=>pe(e,r,a+r/2,t,i,n,10,void 0,{r:[0,0,90]}),Rl=(r,e,t,i,n,a=0)=>pe(e,r,t,i,a-r/2,n,10,void 0,{r:[90,0,0]}),It=(r,e,t,i,n,a,o,s=[e/2,e/2,0,0],l)=>["l",[r,e,t,...s],[i,n,a],o,l],Lo=(r,e,t,i,n,a,o,s)=>["l",[r,t,e,...s],[i,n,a],o,{r:[0,-90,0]}],lr=(r,e,t,i,n,a,o)=>[It(r,e,Math.max(e,t),i,n-e/2,a,o,[e/2,e/2,e/2,e/2])];function Sl(r,e,t,i){let n=qe(r,.14),a=.42,o=[...li(e-.16,t-.16,.14,O.legnoScuro,.2),F(e,.34,t,0,.12,0,r),It(e-.24,.81,.42,0,.42,-(t/2-.25),r,[.21,0,0,.21]),Lo(t,a,.57,-(e/2-a/2),.42,0,r,[.21,0,0,.21]),Lo(t,a,.57,e/2-a/2,.42,0,r,[.21,0,0,.21])],s=(e-2*a-.04)/i;for(let l=0;l<i;l++){let A=-(e-2*a)/2+.02+s*(l+.5);o.push(...lr(s*.97,.26,t*.62,A,.6,.12,n),It(s*.92,.65,.3,A,.62,-(t/2-.5),n,[.15,.06,.06,.15]))}return o}function Fu(r,e,t,i="x"){let n=e*Math.PI/180,a=Math.cos(n),o=Math.sin(n),[s,l,A]=t;return r.map(([c,h,u,f,g={}])=>{let[m,p,P]=u,d=g.r||[0,0,0];if(i==="x"){let b=p-l,y=P-A;return[c,h,[m,l+b*a-y*o,A+b*o+y*a],f,{...g,r:[d[0]+e,d[1],d[2]]}]}let M=m-s,v=p-l;return[c,h,[s+M*a-v*o,l+M*o+v*a,P],f,{...g,r:[d[0],d[1],d[2]+e]}]})}var Io=(r,e,t,i)=>r.map(n=>[n[0],n[1],[n[2][0]+e,n[2][1]+t,n[2][2]+i],n[3],n[4]]),Cl=["#ea323c","#c64524","#ed7614","#ffa214","#edab50","#5ac54f","#1e6f50","#0098dc","#424c6e","#92a1b9","#f68187","#f9e6cf","#8a4836","#2a2f4e"],Hu={"#5ee1ff":"#0098dc","#ffcf5c":"#edab50","#6df5a8":"#5ac54f","#ff8a3d":"#c64524","#6f8fff":"#424c6e","#ff7ac6":"#f68187","#b08cff":"#92a1b9","#ffb48f":"#e07438"},Qu=r=>{let e=new ge(r),t=e.r,i=e.g,n=e.b,a=Math.cbrt(.4122*t+.5363*i+.0514*n),o=Math.cbrt(.2119*t+.6807*i+.1074*n),s=Math.cbrt(.0883*t+.2817*i+.63*n);return[.2105*a+.7936*o-.0041*s,1.9779*a-2.4286*o+.4506*s,.0259*a+.7828*o-.8087*s]},Tl=new Map;function pg(r){let e=String(r||"").toLowerCase();if(Hu[e])return Hu[e];if(Cl.includes(e))return e;if(!Tl.has(e)){let t=Qu(e),i=Cl[0],n=1/0;for(let a of Cl){let o=Qu(a),s=(t[0]-o[0])**2+(t[1]-o[1])**2+(t[2]-o[2])**2;s<n&&(n=s,i=a)}Tl.set(e,i)}return Tl.get(e)}function jr(r,e,t,i,n=.32,a=1){let o=["#c42430","#ffa214","#5ac54f","#0098dc","#f9e6cf","#ed7614"],s=[],l=r,A=a;for(;l<e-.17;){let c=Math.min(e-l,.2+A*7%3*.05),h=n*(.74+A*3%4*.085);s.push(F(c,h,.3,l+c/2,t,i,o[A%o.length])),l+=c+.015,A++}return s}var Xu=["#0c2e44","#134c4c","#1e6f50","#33984b","#5ac54f"],zl={chioma:Xu,ciuffo:"#33984b"};function Yu(r){zl=r,xn.clear()}var dg=()=>Object.fromEntries(Xu.map((r,e)=>[r,zl.chioma[e]])),Il=r=>Xi("albero",r,0,0,0,{tinte:dg()}),qr=(r=.2,e=.3)=>[pe(r*.8,e,0,0,0,O.vaso,8,r),pe(r*1.1,.09,0,e-.04,0,O.vaso,8)],Gu=(r,e)=>[F(.22,.9,.22,0,0,0,O.legnoScuro),F(.62,.46,.82,0,.88,0,r),F(.46,.14,.82,0,1.34,0,qe(r,.14)),F(.44,.3,.17,0,.94,.36,Mn(r,.25)),...e?[F(.17,.62,.17,.4,.96,-.18,"#ffa214"),F(.17,.24,.34,.4,1.34,-.03,"#ffa214")]:[F(.17,.17,.52,.4,1,-.06,"#ffa214")]],ku={B:F,C:pe,K:ft,S:Se,PARTE:Ll,LUCI:lt,L:O,V:we,lastra:It,lastraZ:Lo,rulloX:Si,rulloZ:Rl,gambeT:li,cuscino:lr,chiaro:qe,mescola:Jt,PIANA:fg},ju={"cassetta-lettere":r=>Gu(r,!1),"cassetta-lettere-su":r=>Gu(r,!0),divano:r=>Sl(r,2.9,1.6,2),"divano-grande":r=>Sl(r,2.9,1.6,3),poltrona:r=>Sl(r,1.7,1.5,1),sedia:r=>[...li(.72,.72,.44,O.legnoScuro,.13),F(.78,.14,.76,0,.42,0,r),...lr(.66,.16,.6,0,.62,.05,qe(r,.14)),F(.7,.58,.17,0,.56,-.3,r),Si(.7,.11,1.14,-.3,r)],pouf:r=>[pe(.4,.34,0,0,0,r,12,.46),pe(.44,.16,0,.32,0,qe(r,.16),12,.36)],panchina:r=>[...[-1,1].flatMap(e=>[F(.2,.62,.7,e*1.32,0,0,O.legnoScuro,{netta:!0}),F(.2,.5,.18,e*1.32,.62,-.27,O.legnoScuro,{netta:!0}),Lo(.82,.26,.1,e*1.32,.62,.02,O.legnoScuro,[.05,.05,.05,.05])]),It(2.44,.14,.72,0,.38,.02,r),It(2.44,.18,.1,0,.72,-.27,r,[.05,.05,.05,.05]),It(2.44,.18,.1,0,.96,-.27,r,[.05,.05,.05,.05])],scrivania:r=>[It(2.85,.18,1.5,0,.64,.025,r),...li(2.85,1.45,.64,O.legnoScuro,.24),F(.8,.32,1.2,.86,.34,-.02,qe(r,.1)),Se(.06,.86,.5,.6,O.legno),F(.3,.16,.26,0,.82,-.36,O.ferro),F(1.2,.68,.18,0,.96,-.4,O.ferro),F(1.02,.5,.04,0,1.05,-.3,Jt(O.acqua,O.ferro,.74),lt),F(.11,.3,.012,-.26,1.13,-.272,Jt(O.acqua,O.ferro,.5),{...lt,r:[0,0,-24]}),F(.05,.3,.012,-.12,1.13,-.272,Jt(O.acqua,O.ferro,.56),{...lt,r:[0,0,-24]}),F(.86,.09,.32,0,.82,.22,O.pietra)],tavolino:r=>[It(2.4,.16,1.32,0,.22,0,r,[.08,.08,.08,.08]),...li(2.4,1.25,.22,O.legnoScuro,.22)],"tavolino-film":r=>[It(2.4,.16,1.32,0,.22,0,r,[.08,.08,.08,.08]),...li(2.4,1.25,.22,O.legnoScuro,.22),pe(.2,.32,0,.38,0,"#ea323c",10,.26),pe(.27,.07,0,.66,0,qe("#ea323c",.12),10),Se(.22,0,.74,0,O.crema,1,{s:[1,.55,1]}),Se(.09,.12,.84,.05,O.crema),Se(.08,-.1,.85,-.06,O.crema)],tavolo:r=>[pe(.42,.08,0,0,0,O.legnoScuro,10,.3),pe(.12,.56,0,.08,0,O.legnoScuro,8,.17),pe(.92,.16,0,.64,0,r,16),pe(.86,.04,0,.8,0,qe(r,.12),16)],libreria:r=>[F(2.86,.16,.74,0,0,-.02,r),F(2.8,1.56,.14,0,.12,-.32,r),F(.2,1.56,.74,-1.33,.12,-.02,r),F(.2,1.56,.74,1.33,.12,-.02,r),It(2.94,.18,.85,0,1.68,.005,r),F(2.48,.12,.62,0,.62,-.04,r),F(2.48,.12,.62,0,1.12,-.04,r),...jr(-1.18,1.18,.16,-.04,.42,2),...jr(-1.18,.62,.74,-.04,.34,3),Se(.17,.92,.91,-.04,O.acqua,1),pe(.12,.05,.92,.74,-.04,O.legnoScuro,8),...jr(-1.18,.5,1.24,-.04,.4,4),...Io(qr(.14,.2),.88,1.24,-.04),Se(.18,.88,1.58,-.04,O.foglie[2],1)],mensola:r=>[It(2.85,.18,.67,0,1.68,-.155,r),F(.24,.36,.46,-1.1,1.32,-.26,O.legnoScuro),F(.24,.36,.46,1.1,1.32,-.26,O.legnoScuro),...jr(-1.2,.5,1.86,-.18,.36,3),...Io(qr(.17,.2),.95,1.86,-.18),Se(.2,.95,2.2,-.18,O.foglie[2],1)],letto:r=>[F(2.85,.36,2.9,0,0,0,O.legno),F(2.62,.24,2.6,0,.36,.1,O.crema),F(2.7,.18,1.72,0,.5,.56,r),Si(2.7,.11,.66,-.3,qe(r,.16)),...lr(1,.24,.6,-.66,.74,-.82,O.crema),...lr(1,.24,.6,.66,.74,-.82,O.crema),F(2.85,.9,.3,0,0,-1.3,O.legnoScuro),Si(2.85,.16,.9,-1.3,O.legnoScuro)],comodino:r=>[...li(.8,.76,.14,O.legnoScuro,.14),F(.84,.5,.8,0,.12,0,r),F(.66,.2,.04,0,.26,.4,qe(r,.14)),Se(.06,0,.36,.44,O.legno),Si(.84,.06,.62,.36,r)],frigo:r=>[...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([e,t])=>F(.2,.1,.2,e*.3,0,t*.26,O.ferro)),F(.92,2.1,.8,0,.08,-.04,r),F(.84,.64,.1,0,1.46,.36,qe(r,.08)),F(.84,1.18,.1,0,.16,.36,qe(r,.08)),F(.13,.36,.13,.28,1.6,.44,O.pietra),F(.13,.52,.13,.28,.82,.44,O.pietra),F(.28,.32,.04,-.14,.86,.44,O.crema),Se(.06,-.14,1.16,.47,"#ea323c")],cucina:r=>{let e=qe(r,.1),t=.76,i="#ea323c";return[F(2.8,.1,.74,0,0,-.04,O.ferro),F(2.9,.66,.84,0,.1,-.02,r),...[-.95,0,.95].flatMap(n=>[F(.84,.5,.08,n,.18,.42,e),F(.32,.1,.1,n,.56,.48,O.pietra)]),It(2.98,.14,.99,0,t,.035,O.legno),F(1,.05,.62,-.86,t+.14,-.04,O.ferro),pe(.2,.05,-1.1,t+.19,-.04,O.pietraScura,12),pe(.2,.05,-.62,t+.19,-.04,O.pietraScura,12),pe(.22,.28,-.62,t+.22,-.04,i,12,.24),pe(.26,.06,-.62,t+.48,-.04,Mn(i,.1),12),Se(.07,-.62,t+.57,-.04,O.ferro),F(.92,.06,.62,.86,t+.14,-.04,O.pietra),F(.7,.03,.42,.86,t+.18,-.04,O.acqua),pe(.09,.42,.86,t+.14,-.34,O.pietra,8),F(.17,.14,.34,.86,t+.5,-.24,O.pietra),F(.52,.06,.36,.06,t+.14,.08,O.legnoChiaro),ft(.07,.34,-.12,t+.27,.08,"#ed7614",6,{r:[0,0,-90]}),Se(.06,-.16,t+.29,.08,O.erba)]},camino:()=>{let r=O.pietra,e=O.pietraScura;return[F(2.96,.14,1,0,0,.02,e),F(2.7,1,.74,0,.14,-.12,r),F(1.2,.42,.1,0,.14,.22,e),pe(.6,.1,0,.56,.22,e,16,void 0,{r:[90,0,0]}),F(.96,.42,.1,0,.14,.27,O.nero),pe(.48,.1,0,.56,.27,O.nero,16,void 0,{r:[90,0,0]}),Si(.72,.09,.23,.44,O.legnoScuro),Rl(.4,.08,.14,.38,O.legnoScuro,.42),Ll("fuoco",[0,.28,.44],[ft(.2,.42,-.08,0,0,"#ed7614",5,lt),ft(.13,.28,.16,0,0,"#ffa214",5,lt)]),It(2.96,.18,1.05,0,1.14,-.035,O.legno),F(.48,.42,.12,.82,1.32,-.36,O.legnoScuro),F(.34,.28,.04,.82,1.39,-.29,O.crema),ft(.1,.16,.76,1.42,-.26,O.erba,4,{r:[90,0,0]}),...Io(qr(.13,.2),-.9,1.32,-.22),Se(.17,-.9,1.64,-.22,O.foglie[2],1)]},parete:r=>[F(1,.95,.32,0,0,0,r)],lampada:r=>[pe(.3,.1,0,0,0,O.ferro,10,.24),pe(.085,1.46,0,.1,0,O.ferro,8),pe(.52,.56,0,1.5,0,Jt(r,O.luce,.7),12,.3,lt),Se(.08,0,2.1,0,O.ferro)],lanterna:()=>[F(.44,.12,.44,0,0,0,O.ferro),F(.32,.4,.32,0,.12,0,O.luce,lt),ft(.36,.26,0,.52,0,O.ferro,4)],pianta:()=>[pe(.24,.4,0,0,0,O.vaso,10,.32),pe(.36,.09,0,.36,0,qe(O.vaso,.12),10),Se(.44,0,.78,0,O.foglie[2],1),Se(.3,-.16,1.1,.06,O.foglie[3],1),Se(.26,.18,1.04,-.12,O.foglie[3],1)],cactus:()=>[...qr(.28,.3),pe(.2,.86,0,.3,0,O.erbaScura,6,.17),pe(.1,.3,.27,.6,0,O.erbaScura,6),pe(.1,.24,-.27,.48,0,O.erbaScura,6),Se(.09,0,1.2,0,O.rosa)],fiori:()=>[[0,0],[.22,.14],[-.2,.12],[.06,-.22]].flatMap(([r,e],t)=>[F(.07,.24,.07,r,0,e,O.erbaScura),Se(.13,r,.3,e,[O.rosa,"#ffa214",O.crema,"#ea323c"][t])]),albero:()=>[Il(1)],"albero-altalena":()=>[Il(1.3),F(.07,.46,.07,.5,.33,0,O.crema),F(.07,.46,.07,1,.33,0,O.crema),F(.7,.12,.34,.75,.26,0,O.legno)],alberello:()=>[Il(.6)],arcade:r=>{let e=qe(r,.12),t=i=>Jt(i,O.ferro,.4);return[F(.92,.1,.84,0,0,-.02,O.ferro),F(.9,1.62,.74,0,.08,-.07,r),F(.56,.44,.06,0,.2,.3,e),F(.18,.08,.04,0,.5,.34,O.ferro),F(.9,.18,.4,0,.78,.36,e),pe(.06,.2,-.2,.96,.42,O.ferro,6),Se(.11,-.2,1.18,.42,"#ea323c"),pe(.08,.06,.08,.96,.44,"#ffa214",8),pe(.08,.06,.28,.96,.38,"#0098dc",8),F(.74,.6,.06,0,1,.3,O.ferro),F(.12,.12,.03,-.18,1.36,.34,t("#5ac54f"),lt),F(.12,.12,.03,.14,1.2,.34,t("#ffa214"),lt),F(.4,.06,.03,0,1.08,.34,t("#0098dc"),lt),F(.96,.3,.84,0,1.7,-.02,Mn(r,.08)),F(.74,.18,.04,0,1.76,.42,O.crema)]},televisore:r=>{let e=Jt(O.acqua,O.ferro,.74),t=Jt(O.acqua,O.ferro,.5);return[...li(2.6,.7,.12,O.legnoScuro,.2),F(2.66,.44,.76,0,.1,-.06,O.legno),F(1.18,.3,.06,-.64,.17,.33,qe(O.legno,.08)),F(1.18,.3,.06,.64,.17,.33,qe(O.legno,.08)),Se(.06,-.14,.32,.38,O.legnoScuro),Se(.06,.14,.32,.38,O.legnoScuro),F(.72,.08,.36,0,.54,-.12,O.ferro),F(.24,.16,.16,0,.6,-.14,O.ferro),F(2.3,1.2,.22,0,.74,-.14,r),F(2.04,.96,.04,0,.86,-.02,e,lt),F(.24,.68,.012,-.56,.96,.008,t,{...lt,r:[0,0,-24]}),F(.09,.68,.012,-.3,.96,.008,t,{...lt,r:[0,0,-24]}),Se(.04,1.02,.8,-.02,"#ea323c")]},giradischi:r=>[...li(.82,.76,.16,O.legnoScuro,.14),F(.86,.5,.8,0,.14,0,O.legno),F(.66,.32,.05,0,.22,.4,qe(O.legno,.1)),pe(.12,.05,-.16,.38,.42,O.legnoScuro,10,void 0,{r:[90,0,0]}),pe(.12,.05,.16,.38,.42,O.legnoScuro,10,void 0,{r:[90,0,0]}),F(.84,.14,.76,0,.64,0,r),pe(.32,.05,-.04,.78,.02,O.nero,16),pe(.1,.03,-.04,.83,.02,"#ea323c",10),pe(.08,.1,.3,.78,-.26,O.pietra,8),F(.09,.07,.42,.24,.86,-.08,O.pietra,{r:[0,18,0]})],telescopio:r=>{let e=[0,Math.sin(55*Math.PI/180),Math.cos(55*Math.PI/180)].map((A,c)=>c?A:0),t=1.1,i=.96,n=-.09,a=t-e[1]*i/2,o=n-e[2]*i/2,s=t+e[1]*i/2,l=n+e[2]*i/2;return[F(.17,1.02,.17,0,0,-.3,O.legnoScuro,{r:[17,0,0]}),F(.17,1.02,.17,-.26,0,.16,O.legnoScuro,{r:[-9,0,-15]}),F(.17,1.02,.17,.26,0,.16,O.legnoScuro,{r:[-9,0,15]}),F(.32,.2,.32,0,.94,0,O.ferro),pe(.17,i,0,a,o,r,10,.21,{r:[55,0,0]}),pe(.24,.1,0,s,l,O.ferro,10,void 0,{r:[55,0,0]}),pe(.15,.04,0,s+e[1]*.1,l+e[2]*.1,O.acqua,10,void 0,{r:[55,0,0]}),pe(.08,.18,0,a+.04,o,O.ferro,8,void 0,{r:[-35,0,0]})]},acquario:()=>{let r=O.acqua,e=O.legnoScuro;return[...li(2.5,.68,.14,e,.2),F(2.6,.46,.76,0,.12,0,e),F(1.16,.3,.05,-.62,.2,.38,qe(e,.08)),F(1.16,.3,.05,.62,.2,.38,qe(e,.08)),F(2.5,.08,.66,0,.58,0,O.ferro),F(2.36,.7,.54,0,.66,0,r),F(2.5,.12,.66,0,1.36,0,O.ferro),F(2.36,.12,.05,0,.66,.27,O.legnoChiaro),Se(.1,.24,.78,.27,O.pietra),Se(.08,.42,.76,.27,O.pietraScura),ft(.12,.46,-.95,.74,.26,O.foglie[2],5),ft(.1,.32,-.8,.74,.26,O.foglie[3],5),ft(.12,.4,.95,.74,.26,O.foglie[2],5),Se(.12,-.42,1.04,.28,"#ed7614",0,{s:[1.3,.85,.5]}),ft(.09,.13,-.56,1.04,.28,"#ed7614",4,{r:[0,0,90]}),Se(.1,.5,.92,.28,"#ffa214",0,{s:[1.3,.85,.5]}),ft(.08,.11,.62,.92,.28,"#ffa214",4,{r:[0,0,-90]}),F(.16,.6,.02,-.12,.7,.28,qe(r,.25),{r:[0,0,-22]})]},ruota:r=>{let e=O.legnoScuro,t=["#ea323c","#ffa214","#5ac54f","#0098dc","#f68187","#f9e6cf","#ed7614","#1e6f50"],i=[];for(let n=0;n<Ar;n++)i.push(hg(.6,.14,n*360/Ar,360/Ar,t[n],-.07));for(let n=0;n<Ar;n++){let a=n*360/Ar*Math.PI/180;i.push(Se(.06,.54*Math.sin(a),-.54*Math.cos(a),.06,O.crema))}return i.push(pe(.15,.2,0,0,-.04,r,10,void 0,{r:[90,0,0]}),Se(.08,0,0,.18,O.legno)),[F(1,.16,.7,0,0,-.05,e),F(.2,1.2,.2,-.36,.16,-.22,e,{r:[0,0,8]}),F(.2,1.2,.2,.36,.16,-.22,e,{r:[0,0,-8]}),F(.56,.2,.22,0,1.08,-.22,e),Ll("ruota",[0,1.2,.02],i),ft(.12,.26,0,2.06,.04,"#ea323c",4,{r:[180,0,0]}),F(.2,.12,.16,0,2.06,.04,"#ea323c")]},"cambia-stagione":(r,e,t=0)=>{let i=O.pietra,n=1.42,a=s=>[Se(.26,-.18,n,0,s,1),Se(.32,.06,n+.08,0,s,1),Se(.24,.3,n-.02,0,s,1)],o=[()=>[...[0,1,2,3,4].map(s=>Se(.17,Math.cos(s*1.2566)*.22,n+Math.sin(s*1.2566)*.22,0,"#ff7ac6",1)),Se(.14,0,n,.06,"#ffcf5c",1),ft(.16,.3,.3,n-.42,0,"#5ac54f",4,{r:[0,0,-40]})],()=>[Se(.3,0,n,0,"#ffcf5c",1),...[0,1,2,3].map(s=>F(.17,.17,.17,Math.cos(s*Math.PI/2)*.48,n-.085+Math.sin(s*Math.PI/2)*.48,0,"#ffa214"))],()=>[ft(.34,.62,0,n-.3,0,"#ed7614",4,{r:[0,45,0],s:[1,1,.4]}),F(.17,.3,.17,0,n-.55,0,"#8a4836")],()=>[Se(.3,0,n-.2,0,"#ffffff",1),Se(.22,0,n+.24,0,"#ffffff",1),ft(.06,.2,0,n+.22,.2,"#ed7614",6,{r:[90,0,0]}),F(.36,.1,.3,0,n+.42,0,"#c42430")],()=>[...a(O.crema),...[-.2,.05,.3].map((s,l)=>ft(.08,.22,s,n-.5-l%2*.08,0,r,6,{r:[180,0,0]}))],()=>[...a(O.crema),...[-.2,.05,.3].map((s,l)=>Se(.08,s,n-.42-l%2*.1,0,"#ffffff",1))],()=>[...a(O.pietra),...[-.2,.05,.3].map((s,l)=>F(.17,.17,.17,s,n-.55-l%2*.1,0,"#cfe2f2"))],()=>[-.1,.12,.32].map((s,l)=>It(.9-l*.2,.17,.17,(l-1)*.06,n-.2+s,0,"#6df5a8",[.085,.085,.085,.085])),()=>[...a(O.pietraScura),F(.17,.42,.17,.02,n-.6,0,"#ffcf5c",{r:[0,0,-24]}),F(.17,.32,.17,.08,n-.86,0,"#ffcf5c",{r:[0,0,24]})],()=>[ft(.42,.9,0,n+.45,0,O.pietra,8,{r:[180,0,0]}),pe(.22,.1,0,n-.5,0,O.pietraScura,8)]][t%10]();return[pe(.36,.2,0,0,0,i,10,.32),pe(.26,.12,0,.2,0,O.pietraScura,10),pe(.09,.62,0,.32,0,r,8,.075),pe(.16,.1,0,.92,0,r,10),...o]},sacco:r=>[pe(.42,.22,0,0,0,O.ferro,12,.36),pe(.12,.2,0,.22,0,O.pietra,8),pe(.32,1.2,0,.4,0,r,12),Se(.32,0,1.6,0,r,1,{s:[1,.45,1]}),pe(.335,.12,0,.66,0,qe(r,.14),12),pe(.335,.12,0,1.34,0,qe(r,.14),12)],manubri:r=>{let e=[...li(2.6,.62,.36,O.ferro,.18),F(2.66,.14,.66,0,.36,0,O.ferro)];return[[-.85,.13],[0,.16],[.85,.19]].forEach(([t,i])=>e.push(Si(.56,.06,.5+i,0,O.pietra,t),Si(.14,i,.5+i,0,r,t-.24),Si(.14,i,.5+i,0,r,t+.24))),e},panca:r=>[...[-1.5,1.5].flatMap(e=>[F(.36,.08,.62,e,0,0,O.ferro),F(.22,.16,.4,e,.08,0,O.ferro)]),F(3.6,.08,.56,0,.22,0,O.ferro),...lr(3.56,.16,.6,0,.38,0,r)],borraccia:r=>[pe(.17,.44,-.16,0,0,r,10),pe(.18,.08,-.16,.16,0,qe(r,.14),10),pe(.12,.12,-.16,.44,0,O.ferro,10),It(.4,.14,.37,.2,0,.155,O.rosa)],blocco:r=>[F(1,49*we,1,0,0,0,r)],"mezzo-blocco":r=>[F(1,24*we,1,0,0,0,r)],lastra:r=>[F(1,8*we,1,0,0,0,r)],"blocco-lungo":r=>[F(2,49*we,1,0,0,0,r)],gradini:r=>[F(1,16*we,1,0,0,0,r),F(1,16*we,.66,0,16*we,-.17,r),F(1,17*we,.33,0,32*we,-.33,r)],colonna:r=>[F(.86,.16,.86,0,0,0,r),pe(.34,147*we-.32,0,.16,0,r,8),F(.86,.16,.86,0,147*we-.16,0,r)],muretto:r=>[F(1,98*we,.5,0,0,0,r)],lampione:()=>[Xi("lampione"),Xi("lampione-luce",1,0,0,0,lt)],casetta:r=>{let e=O.legnoScuro,t=Jt(O.legnoScuro,O.legno,.3),i=Mn(r,.14),n=.25,a=2.5,o=n+a,s=1.42,l=1.6,A=o+l,c=(l-s)/a,h=Math.atan(c)*180/Math.PI,u=b=>pe(1,.1,0,o+l/3,b,O.crema,3,void 0,{r:[-90,0,0],s:[l/.866,1,l/1.5]}),f=[F(3.7,n,3.7,0,0,0,O.pietra),F(1.5,.16,.32,0,0,1.97,O.pietraScura),pe(s*Math.SQRT2,a,0,n,0,O.crema,4,l*Math.SQRT2,{r:[0,45,0]}),F(3,.3,3,0,n,0,e),F(3.3,.22,3.3,0,o-.22,0,e),...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([b,y])=>F(.3,a,.3,b*(s+.02),n,y*(s+.02),e,{r:[y*h,0,-b*h]})),u(l+.02),u(-l+.08),F(3.36,.2,.16,0,o-.05,l+.06,e),F(.2,1.3,.14,0,o,l+.06,e),F(.16,.96,.12,-.32,o+.08,l+.06,e,{r:[0,0,38]}),F(.16,.96,.12,.32,o+.08,l+.06,e,{r:[0,0,-38]}),...Fu([F(1.24,1.62,.1,0,0,.02,e),pe(.62,.1,0,1.62,-.03,e,16,void 0,{r:[90,0,0]}),F(1,1.55,.1,0,.02,.07,t),pe(.5,.1,0,1.57,.02,t,16,void 0,{r:[90,0,0]}),F(.5,.34,.05,0,1.3,.13,O.luce,lt),pe(.25,.05,0,1.64,.105,O.luce,12,void 0,{r:[90,0,0],e:!0}),F(.07,.6,.05,0,1.3,.16,e),F(.5,.07,.05,0,1.5,.16,e),...[-.27,0,.27].map(b=>F(.2,.74,.04,b,.2,.13,Mn(t,.12))),Se(.07,-.33,.92,.16,"#ffcf5c")].map(([b,y,[w,U,I],z,Q])=>[b,y,[w,n+U,s+I],z,Q]),h,[0,n,s]),F(.6,1.55,.6,-.85,A-1.3,-.6,O.pietra),F(.74,.16,.74,-.85,A+.25,-.6,O.pietraScura)];for(let b of[-1,1])f.push(...Fu([F(.12,.96,.96,b*.02,.82,-.12,e),F(.06,.76,.76,b*.07,.92,-.12,O.luce,lt),F(.05,.76,.07,b*.1,.92,-.12,e),F(.05,.07,.76,b*.1,1.27,-.12,e),F(.3,.12,1.1,b*.1,.74,-.12,e)].map(([y,w,[U,I,z],Q,R])=>[y,w,[b*s+U,n+I,z],Q,R]),-b*h,[b*s,n,0],"z"));let g=.35,m=l+g,p=m*Math.SQRT2,P=.24,d=4,M=.1,v=Math.SQRT1_2;for(let b of[-1,1]){f.push(F(p,P,d,b*(p/2)*v,A-p/2*v,M,r,{r:[0,0,-b*45]}));for(let y=0;y<3;y++){let w=.55+y*.8,U=.84,I=w*v+P*v,z=A-w*v+P*v;f.push(F(U,.09,d+.02,b*I,z-.02,M,y%2?Mn(r,.05):qe(r,.04),{r:[0,0,-b*41]}))}}return f.push(Rl(d+.04,.2,0,A+.2,i,M)),f},orto:()=>[-1,0,1].flatMap(r=>[-.5,.5].map(e=>Xi("carote",1,r,0,e))),"orto-vuoto":()=>[-1,0,1].flatMap(r=>[-.5,.5].map(e=>Xi("orto-terra",1,r,0,e))),sasso:()=>[Xi("sasso")],funghi:()=>[Xi("funghi")],ciuffo:(r,e)=>[Xi("ciuffo",1,0,0,0,{tinte:{"#33984b":e||zl.ciuffo}})],"tappeto-tondo":r=>[pe(1.4,.05,0,0,0,r,16),pe(1,.06,0,0,0,qe(r,.2),16)],tappeto:r=>[F(2.8,.05,1.8,0,0,0,r),F(2.3,.06,1.3,0,0,0,qe(r,.2))],tappetino:r=>[F(.85,.05,.85,0,0,0,r)],"tappeto-lungo":r=>[F(3.8,.05,1.8,0,0,0,r),F(3.3,.06,1.3,0,0,0,qe(r,.2))],stagno:()=>[pe(1.4,.05,0,0,0,O.pietra,12),pe(1.2,.06,0,0,0,O.acqua,12),pe(.26,.07,-.4,0,.3,O.erba,8),pe(.2,.07,.45,0,-.35,O.erba,8),Se(.09,-.4,.1,.3,O.rosa)],pietra:()=>[Se(.3,0,.1,0,O.pietra,0),Se(.18,.26,.05,.16,O.pietraScura,0)],finestra:()=>Vu(2,76,196),"finestra-alta":()=>Vu(2,34,204),porta:()=>[F(1,170*we,.1,0,0,.05,O.legnoScuro),F(.76,170*we-.14,.08,0,0,.12,O.legno),Se(.09,.26,85*we,.2,O.luce)],interruttore:()=>[F(.3,.36,.06,0,102*we,.03,O.legnoChiaro),F(.13,.18,.07,0,102*we+.09,.07,"#ff9f43")],orologio:()=>[pe(.34,.12,0,180*we,.06,O.legno,12,void 0,{r:[90,0,0]}),pe(.27,.03,0,180*we,.17,O.neve,12,void 0,{r:[90,0,0],uno:!0}),F(.06,.2,.03,0,180*we-.02,.21,O.nero,{netta:!0}),F(.17,.06,.03,.08,180*we-.03,.21,O.nero,{netta:!0})],calendario:()=>[F(.74,82*we,.08,0,102*we,.04,O.legnoScuro),F(.58,82*we-.3,.04,0,102*we+.07,.09,O.neve,{uno:!0}),F(.74,.2,.1,0,184*we-.2,.05,O.rosso)],quadro:()=>Wu(.84,138,186,"#0098dc"),"quadro-grande":()=>Wu(1.74,118,198,O.rosa),specchio:()=>[F(1.24,170*we,.1,0,28*we,.05,O.legno),F(.98,170*we-.26,.04,0,28*we+.13,.11,"#cfe8ff",lt)],led:r=>[F(1.9,.1,.06,0,180*we,.03,r,lt)],"mappa-stelle":()=>[F(1.72,94*we,.08,0,108*we,.04,O.ferro),...[[-.5,.3],[-.2,.6],[.1,.4],[.4,.75],[.6,.2],[-.6,.8]].map(([r,e])=>Se(.05,r,108*we+e,.1,O.luce,0,lt))],telo:()=>[pe(.09,3.9,0,205*we,.08,O.ferro,6,void 0,{r:[0,0,90]}),F(3.6,143*we,.04,0,62*we,.08,O.neve)],lucine:()=>[F(3.8,.04,.04,0,200*we,.03,O.ferro),...Array.from({length:7},(r,e)=>Se(.09,-1.62+e*.54,196*we-e%2*.06,.06,[O.luce,O.rosa,"#8fe3ff"][e%3],0,lt))],"mensola-muro":r=>[F(.88,.13,.42,0,100*we,.21,r),...Io(qr(.14,.18),-.2,100*we+.13,.21),ft(.15,.28,-.2,100*we+.31,.21,O.foglie[2],5),...jr(.02,.38,100*we+.13,.21,.26,5)],"piante-appese":()=>[F(.05,.4,.05,0,192*we,.24,O.crema),pe(.18,.22,0,170*we,.24,O.vaso,8,.22),ft(.26,.46,0,134*we,.24,O.foglie[2],5,{r:[180,0,0]})]};function Vu(r,e,t){let i={netta:!0},n=e*we,a=(t-e)*we,o=r-.24,s=.13,l=o-2*s,A=a-2*s;return[F(o,s,.16,0,n,.08,O.legno,i),F(o,s,.16,0,n+a-s,.08,O.legno,i),F(s,A,.16,-(o-s)/2,n+s,.08,O.legno,i),F(s,A,.16,(o-s)/2,n+s,.08,O.legno,i),F(l,A,.04,0,n+s,.05,"#9fd8ff",lt),F(.09,A,.08,0,n+s,.08,O.legno,i),F(l,.09,.08,0,n+a/2-.045,.08,O.legno,i),F(o+.16,.14,.28,0,n-.08,.14,O.legnoScuro)]}function Wu(r,e,t,i){let n=e*we,a=(t-e)*we;return[F(r,a,.09,0,n,.045,O.legnoScuro),F(r-.2,a-.2,.03,0,n+.1,.1,O.crema),ft(r*.28,a*.42,-r*.1,n+.12,.12,i,4,{r:[90,0,0]}),Se(a*.09,r*.2,n+a*.68,.12,"#ffa214")]}Object.assign(ju,Eu(ku),Bu(ku));var Jr={divano:.52,"divano-grande":.52,poltrona:.52,sedia:.58,pouf:.5,panchina:.54,panca:.4};for(let r of Object.values(Ft))r.sedute&&r.seduta!=null&&Jr[r.id]==null&&(Jr[r.id]=r.seduta);var xn=new Map;function gg(r,e,t,i){let n=r+"|"+e+"|"+(t||"")+"|"+(i||0);if(!xn.has(n)){let a=ju[r],o=a?a(e,t,i||0):[F(.8,.8,.8,0,0,0,e)],s=Yr(o),l=.05;for(let A of[s.pieni,s.luce])A&&(l=Math.max(l,A.boundingBox.max.y));for(let A of Object.values(s.parti||{}))for(let c of[A.pieni,A.luce])c&&(l=Math.max(l,c.boundingBox.max.y+A.at[1]));xn.set(n,{...s,alto:l}),xn.size>400&&xn.delete(xn.keys().next().value)}return xn.get(n)}var mg=(r,e)=>pg(e||Ft[r]&&Ft[r].colore||"#b08cff");function qu(r,e=null,t=null,i=0){let n=gg(r,mg(r,e),t,i),a=new ct,o=(s,l)=>{if(l.pieni){let A=new Ze(l.pieni,gi());A.castShadow=!0,s.add(A)}if(l.luce){let A=new Ze(l.luce,Po());A.castShadow=!0,A.userData.luce=!0,s.add(A)}};if(o(a,n),n.parti){a.userData.parti={};for(let[s,l]of Object.entries(n.parti)){let A=new ct;A.position.set(...l.at),A.name=s,o(A,l),a.add(A),a.userData.parti[s]=A}r==="ruota"&&(a.userData.parti.ruota.rotation.z=vg(i))}return a.userData.alto=n.alto,a}function Ju(r,e){e=Math.max(0,Math.min(1,e)),r.traverse(i=>{!i.isMesh||!i.userData.luce||(i.userData.suo||(i.material=Mu(e),i.userData.suo=!0),i.material.uniforms.acceso.value=e)});let t=r.userData.parti&&r.userData.parti.fuoco;t&&(t.scale.setScalar(Math.max(.001,e)),t.visible=e>.01),r.userData.k=e}var Ar=8,vg=r=>(180-(r+.5)*360/Ar)*Math.PI/180;_t();Bi();rr();var Ci={primavera:{erba:["#5ac54f","#33984b","#1e6f50","#134c4c"],chioma:["#0c2e44","#134c4c","#1e6f50","#33984b","#5ac54f"],ciuffo:"#33984b"},estate:{erba:["#f6d77c","#e5c062","#a8892f","#6b5a26"],chioma:["#6b4a1f","#8a6326","#a87f2e","#c49e3c","#e2c25a"],ciuffo:"#d1b04a"},autunno:{erba:["#ffa36c","#f28750","#e2553a","#a83a2e"],chioma:["#9c2f2a","#b83e2f","#d24f36","#ea6a3f","#f79a58"],ciuffo:"#ef7a48"},inverno:{erba:["#f7f8f6","#dce8e4","#9fb4b6","#6f8a90"],chioma:["#4f7680","#6a8f97","#8eaab0","#bfd1d2","#eef4f2"],ciuffo:"#b7cfd0"}};mu(Ci);function Zu(r=new Date){let e=typeof location<"u"&&new URLSearchParams(location.search).get("stagione");if(e&&Ci[e])return e;let t=r.getMonth();return t>=2&&t<=4?"primavera":t>=5&&t<=7?"estate":t>=8&&t<=10?"autunno":"inverno"}var Ku=["cella-a","cella-b","cella-c"],Mg={[mn.pietra]:"cella-pietra",[mn.sabbia]:"cella-sabbia",[mn.terra]:"cella-terra"},Ro=2,xg={"cella-pietra":.0625,"cella-sabbia":.0625,"cella-terra":.0625},Ul=(r,e)=>r+","+e,Pg=new Jn(1,1),yg=.125,$u=(r,e,t)=>(typeof r=="object"?r:Ci[r]||Ci.primavera).erba[Math.min(3,Math.max(0,Math.floor((e-t)/Ro))+1)];function eh(r,e="primavera",t=null){let i=typeof e=="object"?e:Ci[e]||Ci.primavera,n=Object.fromEntries(Ci.primavera.erba.map((z,Q)=>[z,i.erba[Q]])),a=r.confini(),o=new Map,s=1/0;for(let z=a.x0;z<a.x1;z++)for(let Q=a.z0;Q<a.z1;Q++){let R=r.cima(z,Q);if(R<0)continue;let k=r.get(z,R,Q)===mn.legno,X=k?R-1:R,ae=X;for(;ae>a.y0&&r.get(z,ae-1,Q);)ae--;o.set(Ul(z,Q),{x:z,z:Q,y:R,legno:k,suolo:X,fondo:ae}),s=Math.min(s,X)}let l=a.x0-1,A=a.z0-1,c=a.x1-a.x0+2,h=a.z1-a.z0+2,u=-1e9,f=new Float64Array(c*h).fill(u),g=new Float64Array(c*h).fill(u);for(let z of o.values()){let Q=(z.x-l)*h+(z.z-A);f[Q]=(z.suolo+1)*.5,g[Q]=z.fondo*.5}let m={X0:l,Z0:A,LX:c,LZ:h,suoloA:f,fondoA:g,NIENTE:u},p=new ct,P=[],d=new ct;d.visible=!1,p.add(d);let M=[],v=new Map,b=z=>(v.has(z)||v.set(z,yl(z,n)),v.get(z));for(let z of o.values()){let Q=(z.suolo+1)*.5,R=z.x+.5,k=z.z+.5,X=r.get(z.x,z.suolo,z.z),ae=Math.max(0,Math.floor((z.suolo-s)/Ro)),ue=Mg[X]||Ku[Math.min(Ku.length-1,ae)];M.push([b(ue),R,Q-(xg[ue]||0),k,0]);for(let D=z.suolo-Ro;D>=z.fondo;D-=Ro)[[1,0],[-1,0],[0,1],[0,-1]].every(([T,V])=>{let J=o.get(Ul(z.x+T,z.z+V));return J&&J.suolo>=D+1&&J.fondo<=D})||M.push([b("cella-terra"),R,(D+1)*.5,k,0]);if(z.legno){let D=[[0,-1,0],[-1,0,1],[0,1,2],[1,0,3]].find(([S,T])=>{let V=o.get(Ul(z.x+S,z.z+T));return V&&V.y===z.y+1});M.push([b("scalini"),R,Q,k,D?D[2]:0])}let x=new Ze(Pg,wo);x.rotation.x=-Math.PI/2,x.position.set(R,(z.y+1)*.5,k),x.userData.casella=[z.x,z.z],x.matrixAutoUpdate=!1,x.updateMatrix(),d.add(x),P.push(x)}let y=new Map;for(let z of M){let Q=Math.floor(z[1]/16)+","+Math.floor(z[3]/16);y.has(Q)||y.set(Q,[]),y.get(Q).push(z)}let w=[...y.values()].map(z=>{let Q=new Ze(wg(z,m),t||gi());return Q.receiveShadow=!0,p.add(Q),Q}),U=w[0],I=new Ze(bg(o.values(),m),vu);return I.castShadow=!0,p.add(I),{gruppo:p,tocca:P,mesh:U,pezzi:w,ombra:I,base:s}}function bg(r,e){let t=[],i=(o,s,l,A,c)=>{let h=s[0]-o[0],u=s[1]-o[1],f=s[2]-o[2],g=l[0]-o[0],m=l[1]-o[1],p=l[2]-o[2];(u*p-f*m)*c[0]+(f*g-h*p)*c[1]+(h*m-u*g)*c[2]<0?t.push(...o,...l,...s,...o,...A,...l):t.push(...o,...s,...l,...o,...l,...A)},n=(o,s)=>{let l=(o-e.X0)*e.LZ+(s-e.Z0);return l>=0&&l<e.suoloA.length&&o-e.X0>=0&&o-e.X0<e.LX&&s-e.Z0>=0&&s-e.Z0<e.LZ?e.suoloA[l]:e.NIENTE};for(let o of r){let s=o.fondo*.5,l=(o.suolo+1)*.5,A=o.x,c=o.x+1,h=o.z,u=o.z+1;i([A,s,h],[c,s,h],[c,s,u],[A,s,u],[0,-1,0]);let f=yg;for(let[g,m,p,P,d]of[[1,0,[1,0,0],[c+f,h-f],[c+f,u+f]],[-1,0,[-1,0,0],[A-f,u+f],[A-f,h-f]],[0,1,[0,0,1],[c+f,u+f],[A-f,u+f]],[0,-1,[0,0,-1],[A-f,h-f],[c+f,h-f]]]){let M=Math.max(s,n(o.x+g,o.z+m));M>=l-1e-6||i([P[0],M,P[1]],[d[0],M,d[1]],[d[0],l,d[1]],[P[0],l,P[1]],p)}}let a=new Ge;return a.setAttribute("position",new Pe(t,3)),a.computeBoundingSphere(),a}function wg(r,e){let i=-1,n=(f,g,m)=>{let p=Math.floor(f)-e.X0,P=Math.floor(m)-e.Z0;if(p<0||P<0||p>=e.LX||P>=e.LZ)return!1;let d=p*e.LZ+P,M=e.suoloA[d];return M!==e.NIENTE&&g>e.fondoA[d]-1e-4&&g<M+(d===i?-1e-4:.015)},a=(f,g,m,p)=>{let P=(f[0]+f[3]+f[6])/3,d=(f[1]+f[4]+f[7])/3,M=(f[2]+f[5]+f[8])/3,v=(b,y,w)=>n(b+(P-b)*.04+g*.012,y+(d-y)*.04+m*.012,w+(M-w)*.04+p*.012);if(!v(P,d,M))return!1;for(let b=0;b<9;b+=3){if(!v(f[b],f[b+1],f[b+2]))return!1;let y=(b+3)%9;if(!v((f[b]+f[y])/2,(f[b+1]+f[y+1])/2,(f[b+2]+f[y+2])/2))return!1}return!0},o=new Float64Array(9),s=r.reduce((f,[g])=>f+g.pos.length,0),l=new Float32Array(s),A=new Float32Array(s),c=new Float32Array(s),h=0;for(let[f,g,m,p,P]of r){let d=[0,1,0,-1][P],M=[1,0,-1,0][P];i=(Math.floor(g)-e.X0)*e.LZ+(Math.floor(p)-e.Z0);for(let v=0;v<f.pos.length;v+=9){let b=f.nor[v],y=f.nor[v+2],w=f.nor[v+1],U=b*M+y*d,I=-b*d+y*M;for(let z=0;z<9;z+=3){let Q=f.pos[v+z],R=f.pos[v+z+2];o[z]=Q*M+R*d+g,o[z+1]=f.pos[v+z+1]+m,o[z+2]=-Q*d+R*M+p}if(!(w<.9&&a(o,U,w,I)))for(let z=0;z<9;z+=3){let Q=v+z;l[h]=o[z],l[h+1]=o[z+1],l[h+2]=o[z+2],A[h]=U,A[h+1]=w,A[h+2]=I,c[h]=f.col[Q],c[h+1]=f.col[Q+1],c[h+2]=f.col[Q+2],h+=3}}}l=l.slice(0,h),A=A.slice(0,h),c=c.slice(0,h);let u=new Ge;return u.setAttribute("position",new $e(l,3)),u.setAttribute("normal",new $e(A,3)),u.setAttribute("color",new $e(c,3)),u.computeBoundingSphere(),u}mo();_t();var Dg=["corti","ricci","lunghi","frangia","chignon","rasati"],_g=["nessuno","cuffie","occhiali","berretto","fiore","fascia"],Eg=["felpa","maglietta"];function Bg(r={}){return{pelle:Vi(r.pelle,"#f1c7a3"),capelli:Dg.includes(r.capelli)?r.capelli:"corti",coloreCapelli:Vi(r.coloreCapelli,"#3a2a24"),colore:Vi(r.colore,"#5ee1ff"),pantaloni:Vi(r.pantaloni,"#6f8fff"),sopra:Eg.includes(r.sopra)?r.sopra:"felpa",accessorio:_g.includes(r.accessorio)?r.accessorio:"nessuno",coloreAccessorio:Vi(r.coloreAccessorio,"#b08cff"),scarpe:Vi(r.scarpe,"#f2eefb"),occhi:r.occhi==="chiusi"?"chiusi":"aperti"}}function th(r={}){let e=Bg(r),[t,i,n]=[1,3,5].map(o=>parseInt(e.coloreCapelli.slice(o,o+2),16));return{pelo:.3*t+.59*i+.11*n<64?zu(e.coloreCapelli,e.colore,.35):e.coloreCapelli,corpo:e.colore,dentro:e.pelle}}Bi();var ih=2.07,Sg=[0,.81,0],Kr=[[-.38,.625,.125],[.37,.625,.125]],Cg=[0,.3,-.13],zo=Kr[0][1],nh=Kr[0][2],Tg="#0e071b",Ig="#ffffff";function Lg(r){let e=r.attributes.position,t=r.attributes.color,i=new ge(Tg),n=new ge(Ig),a=[[],[]],o=new ge;for(let s=0;s<e.count;s++)o.fromBufferAttribute(t,s),(Math.abs(o.r-i.r)+Math.abs(o.g-i.g)+Math.abs(o.b-i.b)<.02||Math.abs(o.r-n.r)+Math.abs(o.g-n.g)+Math.abs(o.b-n.b)<.02)&&a[e.getX(s)<0?0:1].push(new C(e.getX(s),e.getY(s),e.getZ(s)));return a.filter(s=>s.length>=3).map(s=>{let l=Math.min(...s.map(d=>d.y)),A=Math.max(...s.map(d=>d.y)),c=d=>d.filter((M,v)=>d.findIndex(b=>b.distanceTo(M)<1e-4)===v).sort((M,v)=>M.x-v.x),h=c(s.filter(d=>d.y<l+.001)),u=c(s.filter(d=>d.y>A-.001));if(h.length<2||u.length<2)return null;let f=[h[0],h[h.length-1]],g=[u[0],u[u.length-1]],m=new C().subVectors(f[1],f[0]).cross(new C().subVectors(g[0],f[0])).normalize(),p=f[0].clone().add(f[1]).add(g[0]).add(g[1]).multiplyScalar(.25);m.dot(new C(p.x,0,p.z))<0&&m.negate();let P=m.multiplyScalar(.006);return{giu:f.map(d=>d.clone().add(P)),su:g.map(d=>d.clone().add(P)),n:m.clone().normalize()}}).filter(Boolean)}function Rg(r=.375){let e=new Ze(new Tr(r,8),new _i({color:"#134430",transparent:!0,opacity:.72,depthWrite:!1}));return e.rotation.set(-Math.PI/2,0,Math.PI/8),e.position.y=.012,e.renderOrder=1,e}var rh={tazza:()=>[["c",[.07,.12,8],[0,0,0],O.neve],["c",[.055,.02,8],[0,.11,0],"#7a4a2a"]],libro:()=>[["b",[.2,.05,.15],[0,0,0],"#e5484d"],["b",[.18,.04,.13],[.01,.005,0],O.crema]],annaffiatoio:()=>[["c",[.08,.14,8],[0,0,0],"#5ee1ff"],["b",[.16,.025,.025],[.11,.1,0],"#5ee1ff",{r:[0,0,30]}]],retino:()=>[["kit","retino",[0,0,0],null]],canna:()=>[["kit","canna",[0,0,0],null]],pala:()=>[["c",[.028,.46,6],[0,-.04,0],"#8a5a33"],["b",[.16,.18,.05],[0,-.2,0],O.ferro]],cazzuola:()=>[["c",[.028,.16,6],[0,0,0],"#8a5a33"],["b",[.15,.04,.2],[0,-.02,.1],O.ferro]],pennello:()=>[["c",[.024,.3,6],[0,0,0],"#8a5a33"],["b",[.09,.09,.05],[0,.3,0],"#ff7ac6"]],torcia:()=>[["c",[.04,.2,6],[0,0,0],O.ferro],["c",[.06,.05,8],[0,.2,0],O.luce,{e:!0}]],fiore:()=>[["b",[.02,.24,.02],[0,0,0],O.erbaScura],["s",[.07,0],[0,.27,0],"#ff8fb1"]]},ah={ciao:{durata:1.1,saluta:!0},si:{durata:.9,annuisce:!0},no:{durata:.9,scuote:!0},musica:{durata:1.4,balla:!0},idea:{durata:1,salta:!0},sonno:{durata:1.6,dorme:!0}};var Uo=class{constructor(e){this.gruppo=new ct,this.corpo=new ct,this.gruppo.add(this.corpo),this.ombra=Rg(),this.gruppo.add(this.ombra),this.zona=new Ze(new si(1,ih+.2,1),wo),this.zona.position.y=(ih+.2)/2,this.gruppo.add(this.zona),this.mano=new ct,this.dir=new oe(.3,1),this.t=Math.random()*10,this.cammina=!1,this.corre=!1,this.preso=!1,this.seduto=!1,this.dorme=!1,this.salto=null,this.caduta=null,this.unaVolta=null,this.attrezzo=null,this.segno=null,this.imposta(e)}get inAria(){return!!this.salto}ombraSu(e){let t=this.ombra;if(!t)return;if(e==null){t.visible=!1;return}let i=this.gruppo.position.y-e;if(t.visible=i>-.4&&i<9,!t.visible)return;let n=Math.max(.3,1-Math.max(0,i)/5);t.position.y=.012-i,t.scale.setScalar(n),t.material.opacity=.72*n}imposta(e={}){this.aspetto=e;for(let l of[...this.corpo.children])this.corpo.remove(l);let{pelo:t,corpo:i,dentro:n}=th(e),a={"#e07438":i,"#edab50":t,"#f68187":n},o=(l,A)=>{let c=new ct,h=new Ze(To(l,a),gi());return h.position.set(-A[0],-A[1],-A[2]),c.position.set(A[0],A[1],A[2]),c.add(h),c};this.busto=o("gatto-corpo",[0,0,0]),this.testa=o("gatto-testa",Sg),this.coda=o("gatto-coda",Cg),this.maniG=[o("gatto-mano-a",Kr[0]),o("gatto-mano-b",Kr[1])],this.corpo.add(this.busto,this.testa,this.coda,...this.maniG),this.maniG[1].add(this.mano),this.attrezzo&&this.impugna(this.attrezzo);let s=this.testa.children[0];if(this.occhi=Lg(s.geometry),this.occhi.length){let l=this.occhi.length*2*6,A=new Ge;A.setAttribute("position",new $e(new Float32Array(l*3),3));let c=new Float32Array(l*3),h=new Float32Array(l*3),u=new ge(t);this.occhi.forEach((f,g)=>{for(let m=0;m<12;m++)c.set([f.n.x,f.n.y,f.n.z],(g*12+m)*3),h.set([u.r,u.g,u.b],(g*12+m)*3)}),A.setAttribute("normal",new $e(c,3)),A.setAttribute("color",new $e(h,3)),this.palpebre=new Ze(A,gi()),this.palpebre.frustumCulled=!1,this.palpebre.visible=!1,s.add(this.palpebre),this.chiusoSu=-1,this.chiusoGiu=-1}else this.palpebre=null}palpebra(e,t){if(!this.palpebre||(e=Math.max(0,Math.min(1,e)),t=Math.max(0,Math.min(1-e,t)),Math.abs(e-this.chiusoSu)<.004&&Math.abs(t-this.chiusoGiu)<.004)||(this.chiusoSu=e,this.chiusoGiu=t,this.palpebre.visible=e>.02||t>.02,!this.palpebre.visible))return;let i=this.palpebre.geometry.attributes.position,n=new C,a=new C,o=0,s=(l,A,c,h)=>{for(let u of[l,A,c,l,c,h])i.setXYZ(o++,u.x,u.y,u.z)};for(let l of this.occhi)n.lerpVectors(l.su[0],l.giu[0],e),a.lerpVectors(l.su[1],l.giu[1],e),s(l.su[0],n.clone(),a.clone(),l.su[1]),n.lerpVectors(l.giu[0],l.su[0],t),a.lerpVectors(l.giu[1],l.su[1],t),s(l.giu[0],l.giu[1],a.clone(),n.clone());i.needsUpdate=!0}guardaVerso(e,t){this.verso=e==null?null:[e,t]}guarda(e,t){Math.hypot(e,t)>.001&&this.dir.set(e,t).normalize()}rimbalza(){this.caduta={t:0}}salta(){this.salto||(this.salto={t:0})}gesto(e){ah[e]&&(this.unaVolta={nome:e,t:0,...ah[e]},this.segno={nome:e,fino:performance.now()+1800})}impugna(e){for(let a of[...this.mano.children])this.mano.remove(a),a.geometry&&a.geometry.dispose();if(this.attrezzo=rh[e]?e:null,this.punta=null,!this.attrezzo)return;let t=rh[e](),i=Yr(t);i.pieni&&this.mano.add(new Ze(i.pieni,gi())),i.luce&&this.mano.add(new Ze(i.luce,Po()));let n=e==="retino"||e==="canna";if(this.mano.position.set(0,n?0:.03,n?0:.1),this.mano.scale.setScalar(n?1:1.65),e==="canna"&&i.pieni){let a=i.pieni.attributes.position,o=0;for(let s=1;s<a.count;s++)a.getY(s)>a.getY(o)&&(o=s);this.punta=new C().fromBufferAttribute(a,o)}}puntaNelMondo(e){return this.mano.updateWorldMatrix(!0,!1),this.punta?e.copy(this.punta).applyMatrix4(this.mano.matrixWorld):e.copy(this.gruppo.position)}aggiorna(e){if(e=Math.min(e,.1),e<=0)return;this.t+=e;let t=this.corpo,i=J=>1-Math.exp(-J*e),a=Math.atan2(this.dir.x,this.dir.y)-t.rotation.y;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;let o=a*i(13*(this.svelto||1));t.rotation.y+=o,t.rotation.y>Math.PI&&(t.rotation.y-=Math.PI*2),t.rotation.y<-Math.PI&&(t.rotation.y+=Math.PI*2),this.wGiro=(this.wGiro||0)+(o/e-(this.wGiro||0))*i(10);let s=this.velocita??(this.cammina?this.corre?6:3.4:0);this.vL=this.velocita!==void 0?s:(this.vL??s)+(s-(this.vL??s))*i(5);let l=this.vL,A=this.aTerra===!1&&!this.nuota&&!this.seduto;this.pPasso=(this.pPasso||0)+((this.cammina?1:0)-(this.pPasso||0))*i(9),this.pCorsa=(this.pCorsa||0)+((this.cammina&&l>4.6?1:0)-(this.pCorsa||0))*i(5),this.pAria=(this.pAria||0)+((A?1:0)-(this.pAria||0))*i(14);let c=this.pPasso*(1-this.pAria),h=this.pCorsa,u=this.pAria,f=(l-(this.vPrima??l))/e;this.vPrima=l,this.acc=(this.acc||0)+(Math.max(-30,Math.min(30,f))-(this.acc||0))*i(8);let g=1.1+.5*h;if(this.fase=(this.fase||0)+(this.cammina?Math.max(l,.8)/g:0)*Math.PI*e,!this.cammina){let J=this.fase%Math.PI;this.fase+=(J>Math.PI/2?Math.PI-J:-J)*i(6)}let m=(this.fase%Math.PI+Math.PI)%Math.PI,p=Math.sin(m),P=Math.sin(this.fase),d=this.nuota?.35:1,M=Math.pow(p,1.6)*(.05+.04*h)*c*d,v=Math.pow(1-p,4)*c*d,b=1+v*(.025+.025*h),y=1-v*(.04+.04*h),w=Math.sin(this.t*2.1)*.014*(1-this.pPasso)*(1-u);y+=w,b-=w*.5;let U=.05*c+.1*h+this.acc*.012*(1-u),I=Math.max(-.28,Math.min(.28,-this.wGiro*Math.min(l,6)*.018))*(1-u),z=P*(.075-.035*h)*c;this.mx=oh(this.mx,Math.max(-.22,Math.min(.3,U)),e,120,.55),this.mz=oh(this.mz,z+I,e,170,.6);let Q=this.mx.x,R=this.mz.x,k=0,X=0,ae=0,ue=P*(.1+.07*h)*c,x=(.03+.06*h)*c*Math.abs(P),D=0;if(this.preso&&(R=Math.sin(this.t*7)*.18,ue=0,D=.2),u>.01){let J=this.vy||0,_=Math.max(-.06,Math.min(.09,J*.013))*u;y*=1+_,b*=1-_*.5,D+=(.16+Math.max(0,-J)*.012)*u,Q+=(J>0?-.06:.1)*u}if(this.salto){this.salto.t+=e;let J=this.salto.t/.5;M+=Math.sin(Math.min(1,J)*Math.PI)*.9,D+=Math.sin(Math.min(1,J)*Math.PI)*.15,J>=1&&(this.salto=null,this.rimbalza())}if(this.caduta){this.caduta.t+=e;let J=this.caduta.t/.42,_=J<1?Math.sin(J*Math.PI*1.5)*Math.exp(-J*3.2)*.17:0;b*=1+_,y*=1-_,D-=_*.4,J>=1&&(this.caduta=null)}let S=this.unaVolta;if(S){S.t+=e;let J=S.t/S.durata,_=E=>E*E*(3-2*E);S.saluta&&(this.maniG[1].position.y=zo+Math.sin(_(Math.min(1,J))*Math.PI)*.8),S.annuisce&&(k=Math.sin(J*Math.PI*4)*.25*(1-J)),S.scuote&&(ae=Math.sin(J*Math.PI*4)*.35*(1-J)),S.balla&&(R=Math.sin(J*Math.PI*6)*.15,M+=Math.abs(Math.sin(J*Math.PI*6))*.13),S.salta&&(M+=Math.sin(Math.min(1,J*2)*Math.PI)*.58),S.dorme&&(X=.3*Math.sin(Math.min(1,J*2)*Math.PI/2)),J>=1&&(this.unaVolta=null,this.maniG[1].position.y=zo)}this.dorme&&(X=.3);let T=Math.max(-.55,Math.min(.55,a*.6));if(this.verso){let J=this.gruppo.position,E=Math.atan2(this.verso[0]-J.x,this.verso[1]-J.z)-t.rotation.y;for(;E>Math.PI;)E-=Math.PI*2;for(;E<-Math.PI;)E+=Math.PI*2;T=Math.max(-.7,Math.min(.7,E))}else this.pPasso<.1&&!S&&!this.dorme&&!this.preso&&(this.t>(this.prossimaOcchiata||0)&&(this.prossimaOcchiata=this.t+2.5+Math.random()*4,this.occhiata=Math.random()<.35?0:(Math.random()-.5)*.9),T+=this.occhiata||0);this.pPensa=(this.pPensa||0)+((this.espressione==="pensa"?1:0)-(this.pPensa||0))*i(8);let V=this.pPensa;if(this.tY=(this.tY||0)+(T+ae-(this.tY||0))*i(9),this.tX=(this.tX||0)+(k-Q*.6+M*.4-(this.tX||0))*i(12),this.tZ=(this.tZ||0)+(X-R*.7+V*.22-(this.tZ||0))*i(10),this.testa.rotation.set(this.tX,this.tY,this.tZ),this.cY=(this.cY||0)+(Math.sin(this.t*2.4+this.fase*.5)*(.14+.22*c)+this.wGiro*.12-(this.cY||0))*i(8),this.cX=(this.cX||0)+(-(.25*h*c+.3*u)-(this.cX||0))*i(6),this.coda.rotation.set(this.cX,this.cY,0),this.mY=(this.mY||0)+(D-(this.mY||0))*i(14),!S||!S.saluta){let J=this.maniG[0].position,_=this.maniG[1].position;J.y=zo+x+this.mY,J.z=nh+ue,_.y=zo+x*.6+this.mY*(this.attrezzo?.5:1)+(this.attrezzo?.05:0)+V*.36,_.z=nh-ue*(this.attrezzo?.5:1)+V*.2,_.x=Kr[1][0]-V*.15}if(this.seduta=(this.seduta||0)+((this.seduto?1:0)-(this.seduta||0))*i(12),t.position.y=M-.2*this.seduta,t.rotation.z=R,this.capriola||(t.rotation.x=Q),t.scale.set(b,y*(1-.12*this.seduta),b),this.zona.scale.y=1-.3*this.seduta,this.palpebre){this.t>(this.prossimoBattito??1.5)&&(this.battito=0,this.prossimoBattito=this.t+(Math.random()<.18?.32:2.2+Math.random()*3.5));let J=0;if(this.battito!==void 0&&this.battito!==null){this.battito+=e;let ee=this.battito/.15;J=ee<1?Math.sin(ee*Math.PI):0,ee>=1&&(this.battito=null)}let _=this.dorme?"sonno":this.espressione,E=_==="sonno"?.92:_==="pensa"?.42:_==="felice"?.18:0,W=_==="felice"?.5:0;this.eSu=(this.eSu||0)+(E-(this.eSu||0))*i(10),this.eGiu=(this.eGiu||0)+(W-(this.eGiu||0))*i(10),this.palpebra(Math.max(this.eSu,J),this.eGiu*(1-J))}}};function oh(r,e,t,i,n){r=r||{x:e,v:0};let a=2*Math.sqrt(i)*n,o=t;for(;o>0;){let s=Math.min(o,.008333333333333333);r.v+=((e-r.x)*i-r.v*a)*s,r.x+=r.v*s,o-=s}return r}var Pn=Math.PI*2,Ol=r=>(r=(r+Math.PI)%Pn,r<0&&(r+=Pn),r-Math.PI),Oo=class{constructor({x:e=0,z:t=0,r:i=10,pieno:n=()=>!1,n:a=7,seme:o=7}={}){Object.assign(this,{x:e,z:t,r:i,pieno:n,seme:o}),this.pesci=[],this.conta(a)}caso(){return this.seme=this.seme*16807%2147483647,this.seme/2147483647}posto(){for(let e=0;e<60;e++){let t=this.caso()*Pn,i=this.r*(.45+this.caso()*.45),n=this.x+Math.cos(t)*i,a=this.z+Math.sin(t)*i;if(!this.vicinoTerra(n,a,1))return[n,a]}return[this.x+this.r*.85,this.z]}conta(e){for(;this.pesci.length>e;)this.pesci.pop();for(;this.pesci.length<e;){let t=this.pesci.length,[i,n]=this.posto();this.pesci.push({x:i,z:n,ang:this.caso()*Pn,punta:this.caso()*Pn,s:.42+this.caso()*.2,fondo:.5+t%6*.26,fase:this.caso()*Pn,oro:t===2,paura:0,via:[0,0],calma:this.caso()*3})}}vicinoTerra(e,t,i){return this.pieno(e,t)||this.pieno(e+i,t)||this.pieno(e-i,t)||this.pieno(e,t+i)||this.pieno(e,t-i)}spaventa(e,t,i,n){for(let a of this.pesci){let o=a.x-e,s=a.z-t,l=Math.hypot(o,s);if(l>i)continue;let A=n*(1-l/i);A<=a.paura||(a.paura=Math.min(1,A),a.via=l>.001?[o/l,s/l]:[Math.cos(a.ang),Math.sin(a.ang)])}}vicino(e,t){let i=this.pesci.find(o=>o.oro);if(i&&this.caso()<.125)return i;let n=null,a=1/0;for(let o of this.pesci){let s=Math.hypot(o.x-e,o.z-t)+o.paura*20;s<a&&(a=s,n=o)}return n}chiama(e,t,i){e.esca=[t,i]}lascia(e){e.esca=null}rinasci(e){let[t,i]=this.posto();Object.assign(e,{x:t,z:i,esca:null,paura:0})}passo(e,t=1){let{pesci:i}=this;for(let n of i){n.calma-=e,n.calma<=0&&(n.calma=1.5+this.caso()*3.5,n.punta=n.ang+(this.caso()-.5)*1.8);let a=Math.cos(n.punta),o=Math.sin(n.punta),s=this.x-n.x,l=this.z-n.z,A=Math.hypot(s,l)||1,c=Math.max(0,A/this.r-.74)/.16;a+=s/A*c*2.2,o+=l/A*c*2.2;for(let[p,P]of[[.9,3.5],[1.8,1.8]]){let d=n.x+Math.cos(n.ang)*p,M=n.z+Math.sin(n.ang)*p;this.pieno(d,M)&&(a+=-Math.sin(n.ang)*P+(n.x-d)*P,o+=Math.cos(n.ang)*P+(n.z-M)*P)}for(let p of i){if(p===n)continue;let P=n.x-p.x,d=n.z-p.z,M=Math.hypot(P,d);M>0&&M<1.3&&(a+=P/M*(1.3-M)*1.5,o+=d/M*(1.3-M)*1.5)}let h=n.esca&&n.paura<.05?Math.hypot(n.esca[0]-n.x,n.esca[1]-n.z):-1;if(h>.01){let p=h>.5?9:2;a+=(n.esca[0]-n.x)/h*p,o+=(n.esca[1]-n.z)/h*p}a+=n.via[0]*n.paura*6,o+=n.via[1]*n.paura*6,n.paura=Math.max(0,n.paura-e*.75);let u=Ol(Math.atan2(o,a)-n.ang);n.ang=Ol(n.ang+Math.max(-1,Math.min(1,u))*e*((h>=0?3.6:1.6)+n.paura*7));let f=(h>=0?h>.5?1.5:.12:.55+n.paura*3.8)*t,g=n.x+Math.cos(n.ang)*f*e,m=n.z+Math.sin(n.ang)*f*e;n.fase=(n.fase+e*(5+f*6))%Pn,!this.pieno(g,m)&&Math.hypot(g-this.x,m-this.z)<this.r*.93?(n.x=g,n.z=m):(n.punta=Math.atan2(l,s),n.ang=Ol(n.ang+e*3))}}};var Zr=class{constructor(e,t,i){Object.assign(this,{tela:e,fai:t,vista:i,levetta:null,gira:null,punti:new Map,pizzico:null}),e.addEventListener("contextmenu",n=>n.preventDefault()),e.addEventListener("pointerdown",n=>this.giu(n)),e.addEventListener("pointermove",n=>this.muovi(n)),e.addEventListener("pointerup",n=>this.su(n)),e.addEventListener("pointercancel",n=>this.su(n)),e.addEventListener("wheel",n=>{n.preventDefault(),n.ctrlKey?t("hotbar",Math.sign(n.deltaY)):i.zoom-=Math.sign(n.deltaY)*.12},{passive:!1})}svuota(){this.levetta=null,this.gira=null,this.punti.clear(),this.pizzico=null}giu(e){try{this.tela.setPointerCapture(e.pointerId)}catch{}if(this.punti.set(e.pointerId,[e.clientX,e.clientY]),e.pointerType==="mouse"){e.button===2?this.fai("tasca"):e.button===0&&(this.gira={id:e.pointerId,x:e.clientX,y:e.clientY,mosso:!1});return}e.clientX<this.tela.clientWidth/2&&!this.levetta?this.levetta={id:e.pointerId,x0:e.clientX,y0:e.clientY,x:e.clientX,y:e.clientY}:this.gira||(this.gira={id:e.pointerId,x:e.clientX,y:e.clientY,mosso:!1}),this.punti.size===2&&!this.levetta&&(this.pizzico=this.distanza())}muovi(e){if(this.punti.has(e.pointerId)&&this.punti.set(e.pointerId,[e.clientX,e.clientY]),this.pizzico!==null&&this.punti.size===2){let n=this.distanza();this.vista.zoom+=(n-this.pizzico)*.006,this.pizzico=n;return}if(this.levetta&&e.pointerId===this.levetta.id){this.levetta.x=e.clientX,this.levetta.y=e.clientY;return}let t=this.gira;if(!t||e.pointerId!==t.id)return;let i=e.pointerType==="mouse"?.008:.009;Math.hypot(e.clientX-t.x,e.clientY-t.y)>3&&(t.mosso=!0),this.vista.dx-=(e.clientX-t.x)*i,this.vista.dy+=(e.clientY-t.y)*i*.75,t.x=e.clientX,t.y=e.clientY}su(e){if(this.punti.delete(e.pointerId),this.punti.size<2&&(this.pizzico=null),this.levetta&&e.pointerId===this.levetta.id){this.levetta=null;return}let t=this.gira;!t||e.pointerId!==t.id||(e.pointerType==="mouse"&&!t.mosso&&e.type==="pointerup"&&this.fai("usa"),this.gira=null)}distanza(){let[e,t]=[...this.punti.values()];return Math.hypot(e[0]-t[0],e[1]-t[1])}leggi(){let e=this.levetta;if(!e)return null;let t=(e.x-e.x0)/56,i=(e.y-e.y0)/56,n=Math.hypot(t,i);if(n<=.18)return null;let a=Math.min(1,n);return{x:t/n*a,z:-i/n*a,corri:n>=1.5,salta:!1}}};var $r={w:[0,1],arrowup:[0,1],s:[0,-1],arrowdown:[0,-1],a:[-1,0],arrowleft:[-1,0],d:[1,0],arrowright:[1,0]},zg=.18,Ug=.94,sh=2.6,Og=r=>!!(r.target&&r.target.closest&&r.target.closest("input, textarea, [contenteditable]")),No=class{constructor(e,t){this.tasti=new Set,e.addEventListener("keydown",i=>{if(Og(i))return;let n=i.key.toLowerCase();if($r[n]||n==="shift"){$r[n]&&i.preventDefault(),this.tasti.add(n);return}n===" "&&(i.preventDefault(),this.tasti.add(n)),!i.repeat&&(n===" "?t("salta"):n==="e"?t("usa"):n==="q"?t("tasca"):n==="tab"?(i.preventDefault(),t("telefono")):/^[1-8]$/.test(n)&&t("hotbar",0,+n-1))}),e.addEventListener("keyup",i=>this.tasti.delete(i.key.toLowerCase())),e.addEventListener("blur",()=>this.svuota())}svuota(){this.tasti.clear()}leggi(){let e=0,t=0;for(let i of this.tasti)$r[i]&&(e+=$r[i][0],t+=$r[i][1]);return{x:e,z:t,corri:this.tasti.has("shift"),salta:this.tasti.has(" ")}}},Fo=class{constructor(e,t,i){Object.assign(this,{finestra:e,fai:t,vista:i,prima:[]})}leggi(e){let t=this.finestra.navigator,i=t&&t.getGamepads?[...t.getGamepads()].find(c=>c&&c.connected):null;if(!i)return null;let n=c=>Math.abs(c)<zg?0:c,a=i.axes,o=i.buttons.map(c=>!!(c&&c.pressed)),s=c=>o[c]&&!this.prima[c];this.prima=o,this.vista.dx-=n(a[2]||0)*e*sh,this.vista.dy+=n(a[3]||0)*e*sh*.6,s(0)&&this.fai("salta"),s(1)&&this.fai("usa"),s(2)&&this.fai("tasca"),s(4)&&this.fai("hotbar",-1),s(5)&&this.fai("hotbar",1),s(9)&&this.fai("telefono");let l=n(a[0]||0),A=n(a[1]||0);return{x:l,z:-A,corri:Math.hypot(l,A)>Ug||(i.buttons[7]?.value||0)>.5,salta:o[0]}}};var Ng=["usa","tasca","salta","telefono","hotbar"],Ho=class{constructor(e,t=globalThis){this.ascolti=Object.fromEntries(Ng.map(n=>[n,[]])),this.attivi=!0,this.vista={dx:0,dy:0,zoom:0};let i=(n,...a)=>this.fai(n,...a);this.tastiera=new No(t,i),this.dita=new Zr(e,i,this.vista),this.pad=new Fo(t,i,this.vista),this.stato={x:0,z:0,corri:!1,salta:!1}}on(e,t){if(!this.ascolti[e])throw new Error("Azione sconosciuta: "+e);return this.ascolti[e].push(t),this}fai(e,...t){if(this.attivi)for(let i of this.ascolti[e])i(...t)}attiva(e){this.attivi=e,e||(this.tastiera.svuota(),this.dita.svuota())}tieniSalto(e){this.saltoTenuto=e,e&&(this.saltoPreso=!0)}passo(e=1/60){let t=[this.tastiera.leggi(),this.dita.leggi(),this.pad.leggi(e)].filter(Boolean),i=0,n=0,a=!1,o=!!(this.saltoTenuto||this.saltoPreso);this.saltoPreso=!1;for(let l of t)i+=l.x,n+=l.z,a||=l.corri,o||=l.salta;let s=Math.hypot(i,n);return s>1&&(i/=s,n/=s),this.attivi||(i=0,n=0,a=!1,o=!1),this.stato.x=i,this.stato.z=n,this.stato.corri=a,this.stato.salta=o,this.stato}prendiVista(){let e={...this.vista};return this.vista.dx=0,this.vista.dy=0,this.vista.zoom=0,e}};_t();var Fg={distanza:10,min:3.5,max:18,pitch:.68,pitchMin:.1,pitchMax:1.25,altezza:1.2,segue:9,dietro:1.1,pausaDietro:1.4},Ah=.35,Hg=.9,Qo=class{constructor(e,t=Fg){this.camera=e,this.v=t,this.yaw=Math.PI,this.pitch=t.pitch,this.dist=t.distanza,this.voluta=t.distanza,this.centro=new C,this.mossa=-1/0,this.avanti=new C(0,0,-1),this.destra=new C(1,0,0),this.primo=!0}passo(e,t,{vista:i=null,velocita:n=null,dito:a=!1,ostacolo:o=null}={}){let s=this.v,l=performance.now()/1e3;if(i&&((i.dx||i.dy)&&(this.mossa=l),this.yaw+=i.dx,this.pitch=Math.max(s.pitchMin,Math.min(s.pitchMax,this.pitch+i.dy)),this.voluta=Math.max(s.min,Math.min(s.max,this.voluta*Math.exp(-i.zoom)))),a&&n&&Math.hypot(n[0],n[1])>1.5&&l-this.mossa>s.pausaDietro){let f=Math.atan2(-n[0],-n[1])-this.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;Math.abs(f)<2.4&&(this.yaw+=f*Math.min(1,e*s.dietro))}let A=new C(t[0],t[1]+s.altezza,t[2]);if(this.primo)this.centro.copy(A),this.primo=!1;else{let f=1-Math.exp(-e*s.segue),g=1-Math.exp(-e*s.segue*.5);this.centro.x+=(A.x-this.centro.x)*f,this.centro.z+=(A.z-this.centro.z)*f,this.centro.y+=(A.y-this.centro.y)*g}this.dist+=(this.voluta-this.dist)*Math.min(1,e*6);let c=Math.cos(this.pitch),h=new C(Math.sin(this.yaw)*c,Math.sin(this.pitch),Math.cos(this.yaw)*c),u=this.dist;if(o){let f=o([this.centro.x,this.centro.y,this.centro.z],[h.x,h.y,h.z],u+Ah);f!==null&&(u=Math.max(Hg,f-Ah))}this.libera=this.libera===void 0||u<this.libera?u:this.libera+(u-this.libera)*Math.min(1,e*3),this.camera.position.copy(this.centro).addScaledVector(h,this.libera),this.camera.lookAt(this.centro),this.avanti.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.destra.set(-this.avanti.z,0,this.avanti.x)}nelMondo(e,t){return[this.avanti.x*t+this.destra.x*e,this.avanti.z*t+this.destra.z*e]}};var Nl=[.9,1.33,1.75],lh=.32,cr=.55,Go=.62;var Fl=r=>{let e=r.map(()=>.5);for(let t=0;t<r.length;t++)e[t]=+r[t];return e};function uh(r){return{p:Fl(r),v:Fl([0,0,0]),aTerra:!1,nuota:!1,salto:!1,corre:!1,dir:Fl([0,1]),botta:0,premuto:0,saltaPrima:!1,coyote:0,appoggiato:null,pattini:!1,staccato:0,rotaia:null,risale:void 0,risaleT:0,risaleDir:null}}var Hl=[[0,0],[.22,0],[-.22,0],[0,.22],[0,-.22]],Qg=[0,-1,0],Gg=[0,0,0],kg=[0,0,0],ko=[0,0,0],Vo=[0,0,0],Vg=[0,0,0],Wg={y:0,x:0,z:0,n:[0,0,0]},Xg={y:0,x:0,z:0,n:[0,0,0]},Yg={atterrato:!1,tuffo:!1,salto:!1,risalito:!1};function hh(r,e,t,i){return r.normaleIn?r.normaleIn(e,t,i):r.normale(e,t)}function ch(r,e,t,i=null){let n=!1,a=0,o=0,s=0,l=Gg;for(let c=0;c<Hl.length;c++){l[0]=e[0]+Hl[c][0],l[1]=e[1]+cr+.05,l[2]=e[2]+Hl[c][1];let h=r.raggio(l,Qg,cr+1.2,t);if(h===null)continue;let u=l[1]-h;(!n||u>a)&&(n=!0,a=u,o=l[0],s=l[2])}if(!n)return null;let A=i||{y:0,x:0,z:0,n:[0,0,0]};return A.y=a,A.x=o,A.z=s,l[0]=o,l[1]=a+.02,l[2]=s,A.n=hh(r,l,t,A.n),A}function fh(r,e,t,i){let n=Yg;n.atterrato=!1,n.tuffo=!1,n.salto=!1,n.risalito=!1,ko[0]=r.p[0],ko[1]=r.p[1]+1,ko[2]=r.p[2];let a=i.vicine(ko,3),o=e.x||0,s=e.z||0,l=e.corri,A=e.salta;e=null;let c=Math.min(1,Math.hypot(o,s)),h=i.pelo(r.p[0],r.p[2]),u=r.nuota?2.4:l?6.5:3.6,f=c>.12?o/c*u*c:0,g=c>.12?s/c*u*c:0,m=c>.12&&r.v[0]*f+r.v[2]*g<0,p=Math.min(1,t/(m?.035:c>.12?.06:.05));if(r.botta>0&&(r.botta-=t,(!r.aTerra||r.botta>.3)&&(p*=.06)),!r.aTerra&&!r.nuota&&!(r.botta>0)&&(p*=.45),r.pattini&&!r.nuota){let b=Math.hypot(r.v[0],r.v[2]);if(r.staccato>0&&(r.staccato-=t),c>.12&&!(r.botta>0)){let y=o/c,w=s/c,U=b>.6?r.v[0]/b:y,I=b>.6?r.v[2]/b:w,z=Math.atan2(U*w-I*y,U*y+I*w);if(Math.abs(z)>2.5&&b>1.5)b=Math.max(0,b-16*t);else{let Q=Math.max(-1,Math.min(1,z/((r.aTerra?3.6:1.2)*t)))*(r.aTerra?3.6:1.2)*t,R=Math.cos(Q),k=Math.sin(Q),X=U*R-I*k,ae=U*k+I*R;U=X,I=ae;let ue=(l?12.5:9.5)*c;r.aTerra&&(b+=b<ue?6.8*t:-1.2*t)}r.v[0]=U*b,r.v[2]=I*b}else if(r.aTerra){let y=1-Math.min(1,.32*t);r.v[0]*=y,r.v[2]*=y}}else r.v[0]+=(f-r.v[0])*p,r.v[2]+=(g-r.v[2])*p;if(r.appoggiato?.t>0){r.appoggiato.t-=t;let b=r.appoggiato.n,y=r.v[0]*b[0]+r.v[2]*b[2];y<0&&(r.v[0]-=b[0]*y,r.v[2]-=b[2]*y)}if(r.dir||(r.dir=[0,1]),r.pattini&&Math.hypot(r.v[0],r.v[2])>.8){let b=Math.hypot(r.v[0],r.v[2]);r.dir[0]=r.v[0]/b,r.dir[1]=r.v[2]/b}else c>.12&&(r.dir[0]=o/c,r.dir[1]=s/c);r.premuto=A&&!r.saltaPrima?.13:Math.max(0,(r.premuto||0)-t),r.saltaPrima=!!A,r.coyote=r.aTerra?.1:Math.max(0,(r.coyote||0)-t),r.premuto>0&&(r.aTerra||r.coyote>0||r.nuota)&&!r.salto&&(r.v[1]=r.nuota?5.6:r.pattini?7.3:6.9,r.nuota&&(r.p[1]+=.05),r.aTerra=!1,r.nuota=!1,r.salto=!0,r.premuto=0,r.coyote=0,n.salto=!0),r.salto&&!A&&r.v[1]>4.3&&(r.v[1]=4.3),r.p[0]+=r.v[0]*t,r.p[2]+=r.v[2]*t;let P=kg;for(let b=0;b<3;b++){let y=!1;for(let w=0;w<Nl.length;w++){let U=Nl[w];P[0]=r.p[0],P[1]=r.p[1]+U,P[2]=r.p[2];let I=i.distanza(P,a);if(I>=lh)continue;let z=hh(i,P,a,Vg);if(z[1]>Go&&U===Nl[0])continue;let Q=Math.hypot(z[0],0,z[2]),R=Q>1e-9?z[0]/Q:0,k=Q>1e-9?z[2]/Q:0,X=lh-I;if(z[1]<-.5){r.p[1]-=X,r.v[1]>0&&(r.v[1]=0),y=!0;continue}r.p[0]+=R*X,r.p[2]+=k*X;let ae=r.v[0]*R+r.v[2]*k;ae<0&&(r.v[0]-=R*ae,r.v[2]-=k*ae),y=!0}if(!y)break}let d=ch(i,r.p,a,Wg),M=h!==null?h-(i.galla??.85):null;if(r.risale!==void 0)return r.p[1]=Math.min(r.risale,r.p[1]+7*t),r.v[1]=0,r.nuota=!1,r.aTerra=!1,r.risaleT=(r.risaleT||0)+t,c<=.12&&r.risaleDir&&(r.p[0]+=r.risaleDir[0]*1.8*t,r.p[2]+=r.risaleDir[1]*1.8*t),d&&d.y>=r.risale-.06&&d.n[1]>Go?(r.p[1]=d.y,r.risale=void 0,r.aTerra=!0,n.risalito=!0):r.risaleT>1.5&&(r.risale=void 0),n;if(M!==null&&r.p[1]<=M+.02&&(!d||d.y<M)){if(r.nuota||(n.tuffo=r.v[1]<-2,r.nuota=!0),r.p[1]=M,r.v[1]=0,r.aTerra=!1,r.salto=!1,i.riva&&c>.12){Vo[0]=r.p[0]+o/c*.6,Vo[1]=h+i.riva-cr,Vo[2]=r.p[2]+s/c*.6;let b=ch(i,Vo,a,Xg);b&&b.y>M+.3&&b.y<=h+i.riva&&b.n[1]>Go&&(r.risale=b.y,r.risaleDir=[o/c,s/c],r.risaleT=0)}return n}r.nuota=!1;let v=d&&(d.n[1]>Go||d.y>r.p[1]+.01&&d.y<=r.p[1]+cr);if(r.v[1]<=0&&v&&d.y>=r.p[1]-(r.aTerra?cr:.02)&&d.y<=r.p[1]+cr)!r.aTerra&&r.v[1]<-4&&(n.atterrato=!0),r.p[1]=d.y>r.p[1]?Math.min(d.y,r.p[1]+(i.salita??9)*t):Math.max(d.y,r.p[1]-7*t),r.v[1]=0,r.aTerra=!0,r.salto=!1;else if(r.v[1]-=14*(r.v[1]<0?1.5:1)*t,r.p[1]+=r.v[1]*t,r.aTerra=!1,d&&r.v[1]<=0&&r.p[1]<=d.y)if(v)r.v[1]<-4&&(n.atterrato=!0),r.p[1]=d.y,r.v[1]=0,r.aTerra=!0,r.salto=!1;else{let b=d.n;r.p[1]=d.y,r.v[0]+=b[0]*3*t,r.v[2]+=b[2]*3*t,r.v[1]=0}return n}var ea=1/120,jg=12,qg=-30,Wo=class{constructor(e,t,i){this.mondo=e,this.fig=t,this.partenza=[...i],this.corpo=uh(i),this.resto=0,this.prima=[...i],this.disegnato=[...i],this.eventi={salto:!1,atterrato:!1,tuffo:!1,risalito:!1},this.saltoPrima=!1}ricompari(){let e=this.corpo;e.p[0]=this.partenza[0],e.p[1]=this.partenza[1],e.p[2]=this.partenza[2],e.v[0]=e.v[1]=e.v[2]=0,e.aTerra=!1,e.nuota=!1,e.risale=void 0,e.botta=0,this.prima=[...e.p],this.fig.rimbalza()}siediti(e,t,i,n){let a=this.corpo;this.seduta={x:e,y:t,z:i},a.v[0]=a.v[1]=a.v[2]=0,this.fig.seduto=!0,this.fig.guarda(Math.sin(n),Math.cos(n))}alzati(){this.seduta&&(this.seduta=null,this.fig.seduto=!1,this.prima=[...this.corpo.p],this.fig.rimbalza())}passo(e,t,i=null){let n=this.corpo,a=this.eventi;if(a.salto=a.atterrato=a.tuffo=a.risalito=!1,this.seduta)if(Math.hypot(t.x,t.z)>.2||t.salta)this.alzati(),this.alSedersi&&this.alSedersi(!1);else{this.resto=0,this.disegnato=[this.seduta.x,this.seduta.y,this.seduta.z],this.anima(e);return}let o={x:t.x,z:t.z,corri:t.corri,salta:t.salta};for(this.resto=Math.min(jg*ea,this.resto+e);this.resto>=ea;){this.prima[0]=n.p[0],this.prima[1]=n.p[1],this.prima[2]=n.p[2];let c=fh(n,o,ea,this.mondo);c.salto&&(a.salto=!0),c.atterrato&&(a.atterrato=!0),c.tuffo&&(a.tuffo=!0),c.risalito&&(a.risalito=!0),i&&i(n),this.resto-=ea}n.p[1]<(this.mondo.livello??0)+qg&&this.ricompari();let s=this.resto/ea,l=this.prima,A=Math.hypot(n.p[0]-l[0],n.p[2]-l[2])>1;for(let c=0;c<3;c++)this.disegnato[c]=A?n.p[c]:l[c]+(n.p[c]-l[c])*s;this.anima(e)}anima(e){let t=this.corpo,i=this.fig,n=this.seduta?0:Math.hypot(t.v[0],t.v[2]);i.cammina=n>.3&&(t.aTerra||t.nuota),i.corre=n>4.6,i.velocita=n,i.vy=t.v[1],i.aTerra=t.aTerra||t.risale!==void 0||!!this.seduta,i.nuota=t.nuota,n>.2&&i.guarda(t.dir[0],t.dir[1]),(this.eventi.atterrato||this.eventi.risalito)&&i.rimbalza();let a=this.disegnato;i.gruppo.position.set(a[0],a[1]+(t.nuota?Math.sin(performance.now()/380)*.05:0),a[2]),i.aggiorna(e)}};_t();Bi();rr();rr();function ph(r,e,t,i,n,a,o){let s=Math.max(e-r[0],r[0]-n),l=Math.max(t-r[1],r[1]-a),A=Math.max(i-r[2],r[2]-o);return Math.hypot(Math.max(s,0),Math.max(l,0),Math.max(A,0))+Math.min(Math.max(s,l,A),0)}var Xo=class{constructor(e,{livello:t=0,solido:i=()=>null,acqua:n=()=>!0,riva:a=1.7,galla:o=.85,salita:s=4}={}){this.mondo=e,this.livello=t,this.solido=i,this.acqua=n,this.riva=a,this.galla=o,this.salita=s,this.t=0}vicine(){return null}distanza(e){let t=this.mondo,i=1.5,n=Math.floor(e[0]-1),a=Math.floor(e[0]+1),o=Math.floor(e[2]-1),s=Math.floor(e[2]+1),l=Math.max(0,Math.floor((e[1]-1)/.5)),A=Math.floor((e[1]+1)/.5);for(let c=n;c<=a;c++)for(let h=o;h<=s;h++){let u=this.solido(c,h);u&&(i=Math.min(i,ph(e,c,u[0],h,c+1,u[1],h+1)));for(let f=l;f<=A;f++)t.get(c,f,h)&&(i=Math.min(i,ph(e,c,f*.5,h,c+1,(f+1)*.5,h+1)))}return i}normale(e){let i=o=>this.distanza(o),n=[i([e[0]+.004,e[1],e[2]])-i([e[0]-.004,e[1],e[2]]),i([e[0],e[1]+.004,e[2]])-i([e[0],e[1]-.004,e[2]]),i([e[0],e[1],e[2]+.004])-i([e[0],e[1],e[2]-.004])],a=Math.hypot(n[0],n[1],n[2]);return a>1e-9?[n[0]/a,n[1]/a,n[2]/a]:[0,1,0]}raggio(e,t,i){if(t[1]<-.999){let a=Math.floor(e[0]),o=Math.floor(e[2]),s=null,l=this.solido(a,o);if(l&&l[1]<=e[1]+1e-6)s=e[1]-l[1];else if(l&&l[0]<=e[1])return 0;for(let A=Math.floor(e[1]/.5);A>=Math.max(0,Math.floor((e[1]-i)/.5)-1);A--){if(!this.mondo.get(a,A,o))continue;let c=(A+1)*.5,h=c>e[1]?0:e[1]-c;(s===null||h<s)&&(s=h);break}return s!==null&&s<=i?s:null}let n=0;for(let a=0;a<64&&n<=i;a++){let o=this.distanza([e[0]+t[0]*n,e[1]+t[1]*n,e[2]+t[2]*n]);if(o<.003)return n;n+=Math.max(o*.9,.004)}return null}pelo(e,t){return this.acqua(e,t)?this.livello:null}};var Jg=1.2,Kg=.8,Zg=1.7,$g=3,em=new Set(["albero","alberello","albero-altalena"]),dh={albero:.035,ciuffo:.14,orto:.05,funghi:.012},Yo=class{constructor(e,t=null){this.ancora=e;let i=Au(),n=t&&t.mondo?{mondo:Or.leggi(t.mondo),cose:t.cose||[],arrivo:t.arrivo||i.arrivo}:i;this.blocchi=n.mondo,this.cose=n.cose,this.radice=new ct,e.add(this.radice),this.mossi=[],this.occupate=new Set,this.costruisci(),this.livello=(this.terreno.base+1)*.5-Jg;let a=this.blocchi.confini();this.centro=[(a.x0+a.x1)/2,(a.y0+a.y1)/2*.5,(a.z0+a.z1)/2],this.raggio=Math.hypot(a.x1-a.x0,a.z1-a.z0)/2+1,this.pozza={x:this.centro[0],z:this.centro[2],r:this.raggio+1};let[o,s]=n.arrivo;this.arrivo=[o+.5,this.blocchi.quota(o+.5,s+.5)??0,s+.5],this.fisica=new Xo(this.blocchi,{livello:this.livello,solido:(l,A)=>this.solidoIn(l,A),riva:Zg,galla:Kg})}costruisci(){if(this.terreno){this.ancora.remove(this.terreno.gruppo);for(let e of this.terreno.pezzi)e.geometry.dispose();this.terreno.ombra.geometry.dispose()}this.terreno=eh(this.blocchi,"primavera",ll("erba")),this.ancora.add(this.terreno.gruppo);for(let e of[...this.radice.children])this.radice.remove(e);this.mossi=[],this.occupate.clear();for(let e of this.cose)this.metti(e)}metti(e){let t=Ft[e.tipo];if(!t)return;let[i,n]=Bl(t,e.r||0),a=e.tipo==="orto"&&e.raccolto?"orto-vuoto":e.tipo,o=qu(Ft[a]?a:e.tipo,e.c||null,e.tipo==="ciuffo"?$u("primavera",this.blocchi.cima(e.x,e.z),this.terreno.base):null,e.s||0);if(t.luce&&Ju(o,e.s===2?0:1),o.rotation.y=(e.r||0)*Math.PI/2,em.has(e.tipo)||e.tipo==="ciuffo"){let s=ll(e.tipo==="ciuffo"?"erba":"chioma"),l=gi();o.traverse(A=>{A.isMesh&&A.material===l&&(A.material=s)})}if(o.position.set(e.x+i/2,this.blocchi.quota(e.x,e.z)??0,e.z+n/2),o.traverse(s=>{s.userData.cosa=e}),dh[e.tipo]&&(o.updateMatrix(),o.matrixAutoUpdate=!1,this.mossi.push({o,m0:o.matrix.clone(),k:dh[e.tipo],fase:e.x*.9+e.z*1.3})),this.radice.add(o),!t.passabile)for(let s=0;s<i;s++)for(let l=0;l<n;l++)this.occupate.add(e.x+s+","+(e.z+l))}solidoIn(e,t){if(!this.occupate.has(e+","+t))return null;let i=this.blocchi.quota(e+.5,t+.5)??0;return[i-.01,i+$g]}passo(e,t){if(!t||!this.mossi.length)return!1;let i=.55+.45*Math.sin(e*.37)*Math.sin(e*.13+1.1);for(let n of this.mossi){let a=Math.sin(e*1.3+n.fase)*.6+Math.sin(e*2.9+n.fase*1.7)*.25+.5,o=t*i*a*n.k,s=t*i*Math.sin(e*1.1+n.fase*.7)*n.k*.45,l=n.m0.elements,A=n.o.matrix.elements;for(let c=0;c<16;c++)A[c]=l[c];for(let c=0;c<3;c++)A[c*4]+=o*l[c*4+1],A[c*4+2]+=s*l[c*4+1];n.o.matrixWorldNeedsUpdate=!0}return!0}suolo(e,t,i){let n=this.fisica.raggio([e,t+.3,i],[0,-1,0],40),a=n===null?null:t+.3-n;return a===null||a<this.livello?this.livello:a}dati(){return{mondo:this.blocchi.salva(),cose:this.cose.map(e=>({...e})),arrivo:[Math.floor(this.arrivo[0]),Math.floor(this.arrivo[2])]}}};Qr();Bi();var jo=class{constructor(e){this.e=e,this.oraLuce=null,this.ambiente=[1,1,1],this.cieloLin=[0,0,0]}ora(){let e=this.e.oraFissa;if(e!=null&&Number.isFinite(e))return e;let t=new Date;return t.getHours()+t.getMinutes()/60}aggiorna(){let e=Math.round(this.ora()*60)/60,t=this.e,i=t.mondo;if(e===this.oraLuce)return;this.oraLuce=e,_u(e);let n=Du(e);(n.angleTo(Ei.value)>.006||!this.sole)&&(Ei.value.copy(n),or(t.sole,i.centro[0],i.centro[2],i.raggio+2,i.centro[1]),t.renderer.shadowMap.needsUpdate=!0,this.sole=!0);let a=ml(e);this.ambiente=a.ambiente,yo(...a.ambiente),bo(...a.ombra),this.cieloLin=a.cielo.map(o=>Math.pow(o,2.2)),t.sc.background=t.resa||t.ar?null:t.cielo}disegna(e){let t=this.e,i=t.mondo;if(!t.resa){t.renderer.render(t.sc,t.camera);return}t.resa.scena(t.sc,t.camera,{cielo:t.ar?null:t.cielo,livello:i.livello,specchio:!0}),t.resa.effetti(t.camera,{tempo:e,livello:i.livello,ambiente:this.ambiente,cielo:this.cieloLin,luce:this.ambiente,pozza:i.pozza,bolle:[]})}};_t();So();Qr();var tm=1/60,qo={davanti:.55,sotto:.3},Jo=class{constructor(e,t=tm){this.e=e,this.scala=t,Bo(e.renderer,e.sc,{attivo:!0}),e.resa=null,e.banco=null,e.ancora.scala(t),document.body.classList.add("ar-prova")}passo(){let e=this.e,t=e.mondo,i=this.scala;e.ancora.posa(new xe().makeTranslation(-t.centro[0]*i,-qo.sotto-t.centro[1]*i,-qo.davanti-t.centro[2]*i)),e.camera.position.set(0,.05,0),e.camera.lookAt(0,-qo.sotto,-qo.davanti),or(e.sole,t.centro[0],t.centro[2],t.raggio+2,t.centro[1])}};_t();var im=[{id:"alborella",c:"#9fd3ff",cm:[8,16],forza:.55,peso:40,stelle:1},{id:"persico",c:"#7fe0a0",cm:[15,30],forza:.75,peso:26,stelle:2},{id:"carpa",c:"#ffb36b",cm:[25,55],forza:.95,peso:18,stelle:3},{id:"lanterna",c:"#b08cff",cm:[12,24],forza:.9,peso:16,notte:!0,stelle:5},{id:"luccio",c:"#c7d36f",cm:[40,90],forza:1.2,peso:8,stelle:6},{id:"koi",c:"#ff7a6b",cm:[30,70],forza:1.1,peso:5,stelle:8},{id:"oro",c:"#ffd24a",cm:[10,22],forza:1.35,peso:0,stelle:15}],gh=r=>im.find(e=>e.id===r)||null;var Ko=6,Mh=24,Zo=99,nm=["canna","retino","annaffiatoio","pala","cazzuola","pennello","torcia","tazza","libro"],rm=["erba","terra","pietra","sabbia"],am=["carota"];function Gl(r){return typeof r!="string"?null:nm.includes(r)?"attrezzo":r.startsWith("b:")?rm.includes(r.slice(2))?"blocco":null:r.startsWith("p:")?gh(r.slice(2))?"pesce":null:r.startsWith("r:")?am.includes(r.slice(2))?"raccolto":null:Object.hasOwn(Ft,r)?"mobile":null}var Ql=r=>Gl(r)!=="attrezzo";var mh=r=>Array.from({length:r},()=>null);function kl(){let r={hot:mh(Ko),tas:mh(Mh),sel:-1};return[["canna"],["retino"],["annaffiatoio"],["pala"],["b:erba",64],["b:terra",32]].forEach(([e,t=1],i)=>{r.hot[i]={id:e,q:t}}),[["b:pietra",32],["b:sabbia",32],["cazzuola"],["pennello"],["torcia"],["tazza"],["libro"]].forEach(([e,t=1],i)=>{r.tas[i]={id:e,q:t}}),r}var vh=r=>{if(!r||!Gl(r.id))return null;let e=Math.floor(+r.q);return e>0?{id:r.id,q:Ql(r.id)?Math.min(Zo,e):1}:null};function xh(r){if(!r||!Array.isArray(r.hot)||!Array.isArray(r.tas))return kl();let e=(n,a)=>Array.from({length:a},(o,s)=>vh(n[s])),t=Number.isInteger(r.sel)&&r.sel>=0&&r.sel<Ko?r.sel:-1,i={hot:e(r.hot,Ko),tas:e(r.tas,Mh),sel:t};for(let n of r.hot.slice(Ko).map(vh).filter(Boolean)){let a=i.tas.findIndex(o=>!o);a>=0&&(i.tas[a]=n)}return i}var Ph=r=>r.sel>=0?r.hot[r.sel]:null;function Vl(r,e,t=1){let i=t;if(Ql(e)){for(let n of[...r.hot,...r.tas])if(n&&n.id===e&&n.q<Zo&&i>0){let a=Math.min(Zo-n.q,i);n.q+=a,i-=a}}for(let n of[r.tas,r.hot])for(let a=0;a<n.length&&i>0;a++)if(!n[a]){let o=Ql(e)?Math.min(Zo,i):1;n[a]={id:e,q:o},i-=o}return i}var yh=r=>String(r).padStart(2,"0"),om=r=>`${r.getFullYear()}-${yh(r.getMonth()+1)}-${yh(r.getDate())}`;function bh(r=new Date){let e=new Date(r.getTime());return e.getHours()<4&&e.setDate(e.getDate()-1),om(e)}var Yi={raccogli:{nome:"Raccogli tre cose",stelle:8,evento:"raccolte",soglia:3},pesca:{nome:"Pesca un pesce",stelle:10,evento:"pesci",soglia:1},esplora:{nome:"Fai un giro dell'isola",stelle:6,evento:"metri",soglia:150},nuota:{nome:"Una nuotata",stelle:6,evento:"nuoto",soglia:30},amico:{nome:"Gioca con un amico",stelle:12,evento:"amici",soglia:1},vendi:{nome:"Vendi qualcosa",stelle:5,evento:"vendite",soglia:1}},sm=3;function Am(r){let e=0;for(let n of r)e=e*31+n.charCodeAt(0)>>>0;let t=Object.keys(Yi),i=[];for(;i.length<sm&&t.length;)e=e*1664525+1013904223>>>0,i.push(t.splice(e%t.length,1)[0]);return i}var lm=()=>Object.fromEntries(Object.values(Yi).map(r=>[r.evento,0]));function cm(r){return{giorno:r,eventi:lm(),prese:[]}}function wh(){return{saldo:40,totale:40,storia:[],contatori:{giorni:0}}}function Dh(r,e=new Date){let t=bh(e);return(!r.giornata||r.giornata.giorno!==t)&&(r.giornata=cm(t),r.stelle.contatori.giorni++),r.giornata}function _h(r,e,t=1,i=new Date){let n=Dh(r,i);n.eventi[e]=(n.eventi[e]||0)+t}function um(r,e){let t=Yi[e];return!!t&&(r.giornata.eventi[t.evento]||0)>=t.soglia}function hm(r,e,t,i=null){r.stelle.saldo+=e,r.stelle.totale+=e,r.stelle.storia.push({quando:new Date().toISOString().slice(0,16),quante:e,perche:String(t).slice(0,60)}),r.stelle.storia.length>200&&r.stelle.storia.splice(0,r.stelle.storia.length-200),i&&fm(r,i)}function fm(r,e){(r.movimenti||(r.movimenti=[])).push(e)}function Eh(r,e=new Date){let t=Dh(r,e),i=[];for(let n of Am(t.giorno))t.prese.includes(n)||!um(r,n)||(t.prese.push(n),hm(r,Yi[n].stelle,Yi[n].nome,{motivo:"missione",cosa:n,giorno:t.giorno}),i.push(n));return i}var Wl={usa:'<svg viewBox="0 0 24 24"><path d="M8 12.5V6.5a1.5 1.5 0 0 1 3 0V11m0-1.5V5a1.5 1.5 0 0 1 3 0v5m0-3.5a1.5 1.5 0 0 1 3 0V13a6 6 0 0 1-6 6h-.6a5 5 0 0 1-3.9-1.9L4.6 14a1.5 1.5 0 0 1 2.3-1.9L8 13.5"/></svg>',salta:'<svg viewBox="0 0 24 24"><path d="M12 19V6m0 0l-5 5m5-5l5 5"/></svg>',tasca:'<svg viewBox="0 0 24 24"><path d="M5 8h14l-1.2 10.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>',stella:'<svg viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/></svg>',ar:'<svg viewBox="0 0 24 24"><path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"/><path d="M12 7.5l4 2.3v4.4l-4 2.3-4-2.3V9.8z"/></svg>'},pm=6,dm=1800,mi=(r,e,t="")=>{let i=document.createElement(r);return i.className=e,i.innerHTML=t,i},$o=class{constructor(e,t,{dito:i=!1,nomi:n={}}={}){this.radice=e,this.nomi=n,this.strato=mi("div","gui"+(i?" dito":"")),this.saldo=mi("div","gui-stelle",Wl.stella+"<b>0</b>"),this.ar=mi("button","gui-ar",Wl.ar),this.ar.type="button",this.ar.title="Gioca sul tavolo (AR)",this.ar.setAttribute("aria-label","Gioca sul tavolo (AR)"),this.barra=mi("div","gui-hot"),this.posti=Array.from({length:pm},(a,o)=>{let s=mi("button","gui-posto",`<i>${o+1}</i><span></span>`);return s.type="button",s.addEventListener("pointerdown",l=>{l.stopPropagation(),t.fai("hotbar",0,o)}),this.barra.append(s),s}),this.sugg=mi("div","gui-sugg"),this.avvisi=mi("div","gui-avvisi"),this.strato.append(this.saldo,this.ar,this.barra,this.sugg,this.avvisi),i&&this.strato.append(this.tastiDito(t)),e.append(this.strato)}tastiDito(e){let t=mi("div","gui-tasti");for(let[i,n]of[["tasca","piccolo"],["salta","medio"],["usa","grande"]]){let a=mi("button","gui-tasto "+n,Wl[i]);a.type="button",a.setAttribute("aria-label",i),a.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),a.classList.add("giu"),i==="salta"&&e.tieniSalto(!0),e.fai(i)});let o=()=>{a.classList.remove("giu"),i==="salta"&&e.tieniSalto(!1)};a.addEventListener("pointerup",o),a.addEventListener("pointercancel",o),a.addEventListener("pointerleave",o),t.append(a)}return t}stelle(e){let t=this.saldo.querySelector("b");t.textContent!==String(e)&&(t.textContent=String(e),this.saldo.classList.remove("salta"),this.saldo.offsetWidth,this.saldo.classList.add("salta"))}hotbar(e,t,i){let n=JSON.stringify([e,t]);n!==this.firmaHot&&(this.firmaHot=n,this.posti.forEach((a,o)=>{let s=e[o];a.classList.toggle("scelto",o===t),a.classList.toggle("vuoto",!s),a.querySelector("span").innerHTML=s?i(s.id)+(s.q>1?`<em>${s.q}</em>`:""):"",a.title=s?this.nomi[s.id]||s.id:""}))}suggerisci(e,t=0,i=0){if(!e){this.sugg.classList.remove("su");return}this.sugg.dataset.t!==e&&(this.sugg.dataset.t=e,this.sugg.innerHTML=`<kbd>${this.strato.classList.contains("dito")?"":"E"}</kbd>${e}`),this.sugg.style.transform=`translate(${t}px, ${i}px) translate(-50%, -100%)`,this.sugg.classList.add("su")}avviso(e){let t=mi("div","gui-avviso",e);this.avvisi.append(t),setTimeout(()=>t.remove(),dm)}};var gm=1.6,mm=Math.cos(70*Math.PI/180),Bh={funghi:"Raccogli",fiori:"Raccogli",sasso:"Raccogli",ciuffo:"Raccogli",orto:"Raccogli"},vm={funghi:"Funghi",fiori:"Fiori",sasso:"Sasso",ciuffo:"Ciuffo",orto:"Carota"},es=class{constructor(e){this.e=e,this.seduto=null}davanti(){let e=this.e.giocatore,t=e.corpo,[i,n]=t.dir,a=null,o=1/0;for(let s of this.e.mondo.cose){let l=Ft[s.tipo];if(!l)continue;let A=this.azioneDi(s,l);if(!A)continue;let c=s.x+(l.piedi?.[0]||1)/2,h=s.z+(l.piedi?.[1]||1)/2,u=c-t.p[0],f=h-t.p[2],g=Math.hypot(u,f)-Math.max(l.piedi?.[0]||1,l.piedi?.[1]||1)/2+.5;if(g>gm||g>=o)continue;let m=Math.hypot(u,f)||1;(u*i+f*n)/m<mm&&g>.4||(a={cosa:s,azione:A.azione,testo:A.testo,x:c,z:h},o=g)}return a}azioneDi(e,t){return Bh[e.tipo]?e.tipo==="orto"&&e.raccolto?null:{azione:"raccogli",testo:Bh[e.tipo]}:t.luce?{azione:"accendi",testo:e.s===2?"Accendi":"Spegni"}:Jr&&Jr[e.tipo]?{azione:"siediti",testo:"Siediti"}:null}usa(){if(this.seduto){this.alzati();return}let e=this.davanti(),t=this.e.giocatore.fig;if(!e){t.gesto("ciao");return}t.guardaVerso(e.x,e.z),e.azione==="raccogli"?this.raccogli(e.cosa):e.azione==="accendi"?this.accendi(e.cosa):e.azione==="siediti"&&this.siediti(e.cosa)}tasca(){let e=this.davanti();e&&e.azione==="raccogli"&&this.raccogli(e.cosa)}raccogli(e){let t=this.e.mondo,i=e.tipo==="orto"?"r:carota":e.tipo;e.tipo==="orto"?e.raccolto=!0:t.cose=t.cose.filter(n=>n!==e),t.costruisci(),this.e.giocatore.fig.rimbalza(),this.e.prendi(i,vm[e.tipo]||e.tipo)}accendi(e){e.s=e.s===2?1:2,this.e.mondo.costruisci(),this.e.giocatore.fig.rimbalza(),this.e.salva()}siediti(e){let t=Ft[e.tipo],i=this.e.giocatore;this.seduto={x:e.x+(t.piedi?.[0]||1)/2,z:e.z+(t.piedi?.[1]||1)/2,cosa:e},i.siediti(this.seduto.x,this.e.mondo.blocchi.quota(this.seduto.x,this.seduto.z)??i.corpo.p[1],this.seduto.z,(e.r||0)*Math.PI/2),i.alSedersi=n=>{n||(this.seduto=null)}}alzati(){this.seduto=null,this.e.giocatore.alzati()}};var ur=r=>`<svg viewBox="0 0 32 32">${r}</svg>`,Mm={funghi:ur('<path d="M6 16a10 8 0 0 1 20 0z" fill="#ea323c"/><circle cx="12" cy="12" r="1.8" fill="#f9e6cf"/><circle cx="19" cy="10.5" r="1.5" fill="#f9e6cf"/><rect x="13" y="16" width="6" height="9" rx="2.5" fill="#f9e6cf"/>'),fiori:ur('<path d="M16 17v9" stroke="#5ac54f" stroke-width="2.5"/><circle cx="16" cy="9" r="3.4" fill="#f68187"/><circle cx="11.5" cy="13" r="3.4" fill="#f68187"/><circle cx="20.5" cy="13" r="3.4" fill="#f68187"/><circle cx="13" cy="18" r="3.4" fill="#f68187"/><circle cx="19" cy="18" r="3.4" fill="#f68187"/><circle cx="16" cy="14" r="3" fill="#ffc23d"/>'),sasso:ur('<path d="M6 22l4-9 7-4 7 5 2 8z" fill="#92a1b9"/><path d="M10 13l7-4 7 5" fill="none" stroke="#c7d0de" stroke-width="2"/>'),ciuffo:ur('<path d="M16 26c-1-7-5-12-9-14 4 4 5 9 5 14m4 0c1-8 0-14-1-18 3 5 4 11 3 18m2 0c1-6 4-10 8-12-4 4-5 8-5 12" fill="#5ac54f" stroke="#3a9a3a" stroke-width="1"/>'),"r:carota":ur('<path d="M10 12l12 2-9 13z" fill="#ed7614"/><path d="M17 12c0-4 2-6 4-7m-3 7c2-3 5-3 7-2m-8 2c-1-3 0-6 1-7" stroke="#5ac54f" stroke-width="2.4" fill="none" stroke-linecap="round"/>')},xm=ur('<circle cx="16" cy="16" r="7" fill="#958ead"/>'),Sh=r=>Mm[r]||xm;var Ch="nookora.esterno",ts=6,Pm=800;function ym(r,e){if(r.hot.some(i=>i&&i.id===e)||r.tas.some(i=>i&&i.id===e))return Vl(r,e,1);let t=r.hot.findIndex(i=>!i);return t<0?Vl(r,e,1):(r.hot[t]={id:e,q:1},0)}function Xl(){try{return JSON.parse(localStorage.getItem(Ch)||"null")}catch{return null}}var is=class{constructor(e){this.e=e,this.stato=this.leggi(),this.azioni=new es(e),this.gui=new $o(e.contenitore,e.comandi,{dito:e.dito});let t=e.comandi;t.on("usa",()=>this.azioni.usa()),t.on("tasca",()=>this.azioni.tasca()),t.on("hotbar",(i,n)=>this.scegli(i,n)),this.gui.ar.addEventListener("click",()=>e.alternaAR()),this.v=new C,this.disegna()}leggi(){let e=Xl(),t=e&&e.tasche?xh(e.tasche):kl();return e||(t.hot=t.hot.map(()=>null),t.tas=t.tas.map(()=>null),t.sel=-1),{tasche:t,stelle:e&&e.stelle?e.stelle:wh(),giornata:e&&e.giornata,magazzino:e&&e.magazzino||{}}}salva(){clearTimeout(this.tSalva),this.tSalva=setTimeout(()=>{try{localStorage.setItem(Ch,JSON.stringify({...this.stato,mondo:this.e.mondo.dati()}))}catch(e){console.warn("salvataggio",e)}},Pm)}prendi(e,t){let i=ym(this.stato.tasche,e);i>0&&(this.stato.magazzino[e]=(this.stato.magazzino[e]||0)+i),this.stato.tasche.sel<0&&(this.stato.tasche.sel=this.stato.tasche.hot.findIndex(n=>n&&n.id===e)),this.gui.avviso(`+1 ${t}`),this.evento("raccolte"),this.disegna(),this.salva()}evento(e,t=1){_h(this.stato,e,t);for(let i of Eh(this.stato))this.gui.avviso(`★ ${Yi[i].nome} +${Yi[i].stelle}`)}scegli(e,t){let i=this.stato.tasche;if(t>=ts)return;t!==void 0?i.sel=i.sel===t?-1:t:i.sel=((i.sel<0?0:i.sel+e)+ts)%ts;let n=Ph(i);this.e.giocatore.fig.impugna(n?n.id:null),this.disegna(),this.salva()}disegna(){this.gui.hotbar(this.stato.tasche.hot.slice(0,ts),this.stato.tasche.sel,Sh),this.gui.stelle(this.stato.stelle.saldo)}passo(){let e=this.azioni.seduto?{testo:"Alzati",x:this.azioni.seduto.x,z:this.azioni.seduto.z}:this.azioni.davanti();if(!e){this.gui.suggerisci(null);return}let t=this.e,i=t.giocatore.disegnato[1]+2.4;if(this.v.set(e.x,i,e.z),t.ancora.alMondo(this.v).project(t.camera),this.v.z>1){this.gui.suggerisci(null);return}let n=t.tela.getBoundingClientRect();this.gui.suggerisci(e.testo,(this.v.x+1)/2*n.width,(1-this.v.y)/2*n.height)}};var Em="#0b0916",Bm=96,Sm=7,Lh=.35,ns=class{constructor(e,{dati:t=null,aspetto:i={},ora:n=null}={}){this.contenitore=e,this.oraFissa=n,this.tela=Object.assign(document.createElement("canvas"),{className:"tela3d",tabIndex:0}),e.append(this.tela);let a=wu(this.tela);Object.assign(this,{renderer:a.renderer,sc:a.sc,sole:a.sole,stelle:a.stelle}),this.resa=a.qualita==="alta"&&kr.puo(a.renderer)?new kr(a.renderer,{acqua:!0}):null,this.cielo=new ge(Em),this.ancora=new Eo(this.sc),this.ancora.seguiSole(this.sole),Yu(Ci.primavera),cu({stagione:Zu(),meteo:"sereno",vento:Lh,mare:"normale",tromba:0}),xu([]),this.mondo=new Yo(this.ancora.gruppo,t||Xl()?.mondo||null),this.acqua(),this.camera=new wt(50,1,.1,400),this.stelle.position.set(...this.mondo.centro);let o=new Uo(i);this.ancora.gruppo.add(o.gruppo),this.giocatore=new Wo(this.mondo.fisica,o,this.mondo.arrivo),this.comandi=new Ho(this.tela),this.telecamera=new Qo(this.camera);let s=this.mondo,l=s.arrivo;this.telecamera.yaw=Math.atan2(l[0]-s.centro[0],l[2]-s.centro[2])||0,this.luce=new jo(this),this.ostacolo=(c,h,u)=>this.mondo.fisica.raggio(c,h,u),this.dito=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,this.adatta=new Do(this.renderer,{resa:this.resa,misura:()=>this.misura()}),this.misure={fps:0,ms:0,fisica:0,n:0,t0:performance.now(),somma:0,fis:0},this.gioco=new is(this);let A=new URLSearchParams(location.search).get("ar");A==="tavolo"?this.ar=new Jo(this):A==="carta"&&this.alternaAR(),addEventListener("resize",()=>this.misura()),this.misura(),this.prima=performance.now(),this.ciclo=this.ciclo.bind(this),requestAnimationFrame(this.ciclo)}prendi(e,t){this.gioco.prendi(e,t)}salva(){this.gioco.salva()}async alternaAR(){if(this.ar&&this.ar.ferma){this.ar.ferma();let e=new URL(location.href);e.searchParams.delete("ar"),location.replace(e);return}try{let{ARCarta:e}=await Promise.resolve().then(()=>(Ih(),Th));this.ar=new e(this),await this.ar.avvia()}catch(e){console.error("AR",e),this.gioco.gui.avviso("La fotocamera non si apre: serve il permesso (e HTTPS)."),this.ar=null}}acqua(){let e=this.mondo,t=(i,n)=>e.blocchi.cima(Math.floor(i),Math.floor(n))>=0;this.resa&&(this.resa.isola(e.pozza.x,e.pozza.z,Bm,t),this.banco=new Oo({x:e.pozza.x,z:e.pozza.z,r:e.pozza.r,pieno:t,n:Sm}))}misura(){let e=this.contenitore.clientWidth||innerWidth,t=this.contenitore.clientHeight||innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e<t?62:50,this.camera.updateProjectionMatrix(),this.resa&&this.resa.misura()}ciclo(e){requestAnimationFrame(this.ciclo);let t=e-this.prima,i=Math.min(.1,t/1e3);if(this.prima=e,document.hidden)return;let n=performance.now();this.adatta.inizio();let a=this.comandi.passo(i),[o,s]=this.telecamera.nelMondo(a.x,a.z),l=performance.now();this.giocatore.passo(i,{x:o,z:s,corri:a.corri,salta:a.salta});let A=performance.now()-l,c=this.giocatore,h=c.corpo,u=c.disegnato;c.fig.ombraSu(h.nuota?null:this.mondo.suolo(u[0],u[1],u[2])),this.resa&&c.eventi.tuffo&&this.resa.tocca(h.p[0],h.p[2],1.4,-.4),this.telecamera.passo(i,u,{vista:this.comandi.prendiVista(),velocita:[h.v[0],h.v[2]],dito:this.dito,ostacolo:this.ostacolo}),this.ar&&this.ar.passo(),this.gioco.passo(),this.luce.aggiorna(),this.mondo.passo(e/1e3,Lh),this.banco&&(this.banco.passo(i),this.resa.pesci(this.banco.pesci,1)),this.luce.disegna(e/1e3),this.adatta.fine(),this.adatta.passo(t,performance.now()-n),this.conta(performance.now()-n,A)}conta(e,t){let i=this.misure,n=performance.now();i.n++,i.somma+=e,i.fis+=t,!(n-i.t0<1e3)&&(i.fps=Math.round(i.n*1e3/(n-i.t0)),i.ms=+(i.somma/i.n).toFixed(2),i.fisica=+(i.fis/i.n).toFixed(3),i.n=0,i.somma=0,i.fis=0,i.t0=n)}};var Cm="https://nookora-server.nookora.workers.dev",jl="nookora.sessione",Rh=[{urls:["stun:stun.cloudflare.com:3478","stun:stun.l.google.com:19302"]}];function Tm(){try{let r=new URLSearchParams(location.search).get("server");if(r&&/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&/^http:\/\/(localhost|127\.0\.0\.1):\d+\/?$/.test(r))return r.replace(/\/$/,"")}catch{}return Cm}var rs=class extends Error{constructor(e,t,i=null){super(t),this.stato=e,this.data=i}},as=class{constructor(e=Tm(),t=globalThis.localStorage){this.base=e,this.memoria=t,this.icePresi=null}get token(){try{return this.memoria?.getItem(jl)||null}catch{return null}}set token(e){try{e?this.memoria?.setItem(jl,e):this.memoria?.removeItem(jl)}catch{}}get entrato(){return!!this.token}async chiama(e,t,i){let n={"Content-Type":"application/json"};this.token&&(n.Authorization="Bearer "+this.token);let a;try{a=await fetch(this.base+t,{method:e,headers:n,body:i===void 0?void 0:JSON.stringify(i)})}catch{throw new rs(0,"Niente rete: riprovo appena torna.")}let o=null;try{o=await a.json()}catch{}if(a.status===401&&(this.token=null),!a.ok||!o||!o.success)throw new rs(a.status,o&&o.error||"Il server non risponde come dovrebbe.",o&&o.data);return o.data}async registrati(e,t){let i=await this.chiama("POST","/api/registrati",{email:e,password:t});return this.token=i.token,i}async entra(e,t){let i=await this.chiama("POST","/api/entra",{email:e,password:t});return this.token=i.token,i}async esci(){try{await this.chiama("POST","/api/esci")}finally{this.token=null}}io(){return this.chiama("GET","/api/io")}leggi(){return this.chiama("GET","/api/salvataggio")}async salva(e,t){try{return await this.chiama("PUT","/api/salvataggio",{rev:e,dati:t})}catch(i){if(i.stato===409)return{conflitto:!0,corrente:i.data};throw i}}stelle(e){return this.chiama("POST","/api/stelle",e)}async ice(){if(this.icePresi&&Date.now()<this.icePresi.fino)return this.icePresi.lista;if(!this.entrato)return Rh;try{let e=await this.chiama("GET","/api/turn");return this.icePresi={lista:e.iceServers,fino:Date.now()+Math.max(60,e.ttl-900)*1e3},e.iceServers}catch{return Rh}}urlSegnala(e){return this.base.replace(/^http/,"ws")+"/api/segnala?stanza="+encodeURIComponent(e)+"&token="+encodeURIComponent(this.token||"")}};function zh(r,e=document.body){return new Promise(t=>{let i=document.createElement("form");i.className="accesso",i.setAttribute("aria-label","Entra in Nookora"),i.noValidate=!0,i.innerHTML=`
      <div class="accesso-carta">
        <h1 class="accesso-titolo">Nookora</h1>
        <p class="accesso-sotto">Entra per giocare e ritrovare la tua isola su ogni dispositivo.</p>
        <label class="accesso-campo"><span>Email</span><input name="email" type="email" autocomplete="email" required maxlength="200"></label>
        <label class="accesso-campo"><span>Password</span><input name="password" type="password" autocomplete="current-password" required minlength="8" maxlength="200"></label>
        <p class="accesso-errore" role="alert" hidden></p>
        <button class="accesso-entra" type="submit" name="azione" value="entra">Entra</button>
        <button class="accesso-crea" type="submit" name="azione" value="crea">Crea l'account</button>
        <p class="accesso-nota">Per ora Nookora è solo su invito.</p>
      </div>`;let n=i.querySelector(".accesso-errore"),a=i.querySelectorAll("button"),o=s=>{n.textContent=s,n.hidden=!s};i.addEventListener("submit",async s=>{s.preventDefault();let l=s.submitter&&s.submitter.value==="crea",A=i.email.value.trim(),c=i.password.value;if(!/^\S+@\S+\.\S+$/.test(A)){o("Scrivi un'email valida.");return}if(c.length<8){o("La password deve avere almeno 8 caratteri.");return}o(""),a.forEach(h=>{h.disabled=!0});try{let h=l?await r.registrati(A,c):await r.entra(A,c);i.remove(),t({email:h.email})}catch(h){o(h.message||"Non è andata: riprova."),a.forEach(u=>{u.disabled=!1})}}),e.append(i),i.email.focus()})}var Im={colore:"#5ee1ff",coloreCapelli:"#2a5a8a",pelle:"#f1c7a3"},ql=document.getElementById("app");async function Lm(){let r=new URLSearchParams(location.search);if(!r.has("offline")){let e=new as;e.entrato||await zh(e,document.body),globalThis.server=e}ql.replaceChildren(),globalThis.esterno=new ns(ql,{aspetto:Im,ora:r.has("ora")?+r.get("ora"):null})}Lm().catch(r=>{console.error(r),ql.textContent="Nookora non è partita: ricarica la pagina."});"serviceWorker"in navigator&&location.protocol.startsWith("http")&&navigator.serviceWorker.register("sw.js").then(r=>setInterval(()=>r.update().catch(()=>{}),3*3600*1e3)).catch(r=>console.warn("service worker",r));
