// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
if(!window.CanvasRenderingContext2D){(function(){var N=Math;var O=N.round;var L=N.sin;var U=N.cos;var A=10;var I=A/2;var G={init:function(W){var X=W||document;if(/MSIE/.test(navigator.userAgent)&&!window.opera){var V=this;X.attachEvent("onreadystatechange",function(){V.init_(X)})}},init_:function(Y){if(Y.readyState=="complete"){if(!Y.namespaces.g_vml_){Y.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml")}var X=Y.createStyleSheet();X.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}";var W=Y.getElementsByTagName("canvas");for(var V=0;V<W.length;V++){if(!W[V].getContext){this.initElement(W[V])}}}},fixElement_:function(X){var Z=X.outerHTML;var Y=X.ownerDocument.createElement(Z);if(Z.slice(-2)!="/>"){var V="/"+X.tagName;var W;while((W=X.nextSibling)&&W.tagName!=V){W.removeNode()}if(W){W.removeNode()}}X.parentNode.replaceChild(Y,X);return Y},initElement:function(W){W=this.fixElement_(W);W.getContext=function(){if(this.context_){return this.context_}return this.context_=new J(this)};W.attachEvent("onpropertychange",T);W.attachEvent("onresize",B);var V=W.attributes;if(V.width&&V.width.specified){W.style.width=V.width.nodeValue+"px"}else{W.width=W.clientWidth}if(V.height&&V.height.specified){W.style.height=V.height.nodeValue+"px"}else{W.height=W.clientHeight}return W}};function T(W){var V=W.srcElement;switch(W.propertyName){case"width":V.style.width=V.attributes.width.nodeValue+"px";V.getContext().clearRect();break;case"height":V.style.height=V.attributes.height.nodeValue+"px";V.getContext().clearRect();break}}function B(W){var V=W.srcElement;if(V.firstChild){V.firstChild.style.width=V.clientWidth+"px";V.firstChild.style.height=V.clientHeight+"px"}}G.init();var D=[];for(var R=0;R<16;R++){for(var Q=0;Q<16;Q++){D[R*16+Q]=R.toString(16)+Q.toString(16)}}function K(){return[[1,0,0],[0,1,0],[0,0,1]]}function E(Y,X){var W=K();for(var V=0;V<3;V++){for(var b=0;b<3;b++){var Z=0;for(var a=0;a<3;a++){Z+=Y[V][a]*X[a][b]}W[V][b]=Z}}return W}function P(W,V){V.fillStyle=W.fillStyle;V.lineCap=W.lineCap;V.lineJoin=W.lineJoin;V.lineWidth=W.lineWidth;V.miterLimit=W.miterLimit;V.shadowBlur=W.shadowBlur;V.shadowColor=W.shadowColor;V.shadowOffsetX=W.shadowOffsetX;V.shadowOffsetY=W.shadowOffsetY;V.strokeStyle=W.strokeStyle;V.arcScaleX_=W.arcScaleX_;V.arcScaleY_=W.arcScaleY_}function C(W){var Z,Y=1;W=String(W);if(W.substring(0,3)=="rgb"){var b=W.indexOf("(",3);var V=W.indexOf(")",b+1);var a=W.substring(b+1,V).split(",");Z="#";for(var X=0;X<3;X++){Z+=D[Number(a[X])]}if((a.length==4)&&(W.substr(3,1)=="a")){Y=a[3]}}else{Z=W}return[Z,Y]}function M(V){switch(V){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function J(W){this.m_=K();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle="#000";this.fillStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=A*1;this.globalAlpha=1;this.canvas=W;var V=W.ownerDocument.createElement("div");V.style.width=W.clientWidth+"px";V.style.height=W.clientHeight+"px";V.style.overflow="hidden";V.style.position="absolute";W.appendChild(V);this.element_=V;this.arcScaleX_=1;this.arcScaleY_=1}var H=J.prototype;H.clearRect=function(){this.element_.innerHTML="";this.currentPath_=[]};H.beginPath=function(){this.currentPath_=[]};H.moveTo=function(W,V){this.currentPath_.push({type:"moveTo",x:W,y:V});this.currentX_=W;this.currentY_=V};H.lineTo=function(W,V){this.currentPath_.push({type:"lineTo",x:W,y:V});this.currentX_=W;this.currentY_=V};H.bezierCurveTo=function(X,V,a,Z,Y,W){this.currentPath_.push({type:"bezierCurveTo",cp1x:X,cp1y:V,cp2x:a,cp2y:Z,x:Y,y:W});this.currentX_=Y;this.currentY_=W};H.quadraticCurveTo=function(c,b,a,Z){var W=this.currentX_+2/3*(c-this.currentX_);var V=this.currentY_+2/3*(b-this.currentY_);var Y=W+(a-this.currentX_)/3;var X=V+(Z-this.currentY_)/3;this.bezierCurveTo(W,V,Y,X,a,Z)};H.arc=function(b,Z,a,Y,W,X){a*=A;var f=X?"at":"wa";var c=b+(U(Y)*a)-I;var e=Z+(L(Y)*a)-I;var V=b+(U(W)*a)-I;var d=Z+(L(W)*a)-I;if(c==V&&!X){c+=0.125}this.currentPath_.push({type:f,x:b,y:Z,radius:a,xStart:c,yStart:e,xEnd:V,yEnd:d})};H.rect=function(X,W,V,Y){this.moveTo(X,W);this.lineTo(X+V,W);this.lineTo(X+V,W+Y);this.lineTo(X,W+Y);this.closePath()};H.strokeRect=function(X,W,V,Y){this.beginPath();this.moveTo(X,W);this.lineTo(X+V,W);this.lineTo(X+V,W+Y);this.lineTo(X,W+Y);this.closePath();this.stroke()};H.fillRect=function(X,W,V,Y){this.beginPath();this.moveTo(X,W);this.lineTo(X+V,W);this.lineTo(X+V,W+Y);this.lineTo(X,W+Y);this.closePath();this.fill()};H.createLinearGradient=function(W,Y,V,X){var Z=new S("gradient");return Z};H.createRadialGradient=function(Y,a,X,W,Z,V){var b=new S("gradientradial");b.radius1_=X;b.radius2_=V;b.focus_.x=Y;b.focus_.y=a;return b};H.drawImage=function(n,Y){var f,c,i,u,l,j,p,x;var g=n.runtimeStyle.width;var m=n.runtimeStyle.height;n.runtimeStyle.width="auto";n.runtimeStyle.height="auto";var e=n.width;var s=n.height;n.runtimeStyle.width=g;n.runtimeStyle.height=m;if(arguments.length==3){f=arguments[1];c=arguments[2];l=j=0;p=i=e;x=u=s}else{if(arguments.length==5){f=arguments[1];c=arguments[2];i=arguments[3];u=arguments[4];l=j=0;p=e;x=s}else{if(arguments.length==9){l=arguments[1];j=arguments[2];p=arguments[3];x=arguments[4];f=arguments[5];c=arguments[6];i=arguments[7];u=arguments[8]}else{throw"Invalid number of arguments"}}}var v=this.getCoords_(f,c);var Z=p/2;var X=x/2;var t=[];var V=10;var b=10;t.push(" <g_vml_:group",' coordsize="',A*V,",",A*b,'"',' coordorigin="0,0"',' style="width:',V,";height:",b,";position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]){var a=[];a.push("M11='",this.m_[0][0],"',","M12='",this.m_[1][0],"',","M21='",this.m_[0][1],"',","M22='",this.m_[1][1],"',","Dx='",O(v.x/A),"',","Dy='",O(v.y/A),"'");var r=v;var q=this.getCoords_(f+i,c);var o=this.getCoords_(f,c+u);var k=this.getCoords_(f+i,c+u);r.x=Math.max(r.x,q.x,o.x,k.x);r.y=Math.max(r.y,q.y,o.y,k.y);t.push("padding:0 ",O(r.x/A),"px ",O(r.y/A),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",a.join(""),", sizingmethod='clip');")}else{t.push("top:",O(v.y/A),"px;left:",O(v.x/A),"px;")}t.push(' ">','<g_vml_:image src="',n.src,'"',' style="width:',A*i,";"," height:",A*u,';"',' cropleft="',l/e,'"',' croptop="',j/s,'"',' cropright="',(e-l-p)/e,'"',' cropbottom="',(s-j-x)/s,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",t.join(""))};H.stroke=function(y){var e=[];var d=false;var AB=C(y?this.fillStyle:this.strokeStyle);var u=AB[0];var Y=AB[1]*this.globalAlpha;var X=10;var j=10;e.push("<g_vml_:shape",' fillcolor="',u,'"',' filled="',Boolean(y),'"',' style="position:absolute;width:',X,";height:",j,';"',' coordorigin="0 0" coordsize="',A*X," ",A*j,'"',' stroked="',!y,'"',' strokeweight="',this.lineWidth,'"',' strokecolor="',u,'"',' path="');var h=false;var t={x:null,y:null};var v={x:null,y:null};for(var w=0;w<this.currentPath_.length;w++){var o=this.currentPath_[w];if(o.type=="moveTo"){e.push(" m ");var AA=this.getCoords_(o.x,o.y);e.push(O(AA.x),",",O(AA.y))}else{if(o.type=="lineTo"){e.push(" l ");var AA=this.getCoords_(o.x,o.y);e.push(O(AA.x),",",O(AA.y))}else{if(o.type=="close"){e.push(" x ")}else{if(o.type=="bezierCurveTo"){e.push(" c ");var AA=this.getCoords_(o.x,o.y);var s=this.getCoords_(o.cp1x,o.cp1y);var q=this.getCoords_(o.cp2x,o.cp2y);e.push(O(s.x),",",O(s.y),",",O(q.x),",",O(q.y),",",O(AA.x),",",O(AA.y))}else{if(o.type=="at"||o.type=="wa"){e.push(" ",o.type," ");var AA=this.getCoords_(o.x,o.y);var k=this.getCoords_(o.xStart,o.yStart);var b=this.getCoords_(o.xEnd,o.yEnd);e.push(O(AA.x-this.arcScaleX_*o.radius),",",O(AA.y-this.arcScaleY_*o.radius)," ",O(AA.x+this.arcScaleX_*o.radius),",",O(AA.y+this.arcScaleY_*o.radius)," ",O(k.x),",",O(k.y)," ",O(b.x),",",O(b.y))}}}}}if(AA){if(t.x==null||AA.x<t.x){t.x=AA.x}if(v.x==null||AA.x>v.x){v.x=AA.x}if(t.y==null||AA.y<t.y){t.y=AA.y}if(v.y==null||AA.y>v.y){v.y=AA.y}}}e.push(' ">');if(typeof this.fillStyle=="object"){var n={x:"50%",y:"50%"};var r=(v.x-t.x);var l=(v.y-t.y);var z=(r>l)?r:l;n.x=O((this.fillStyle.focus_.x/r)*100+50)+"%";n.y=O((this.fillStyle.focus_.y/l)*100+50)+"%";var g=[];if(this.fillStyle.type_=="gradientradial"){var x=(this.fillStyle.radius1_/z*100);var m=(this.fillStyle.radius2_/z*100)-x}else{var x=0;var m=100}var V={offset:null,color:null};var Z={offset:null,color:null};this.fillStyle.colors_.sort(function(a,W){return a.offset-W.offset});for(var w=0;w<this.fillStyle.colors_.length;w++){var f=this.fillStyle.colors_[w];g.push((f.offset*m)+x,"% ",f.color,",");if(f.offset>V.offset||V.offset==null){V.offset=f.offset;V.color=f.color}if(f.offset<Z.offset||Z.offset==null){Z.offset=f.offset;Z.color=f.color}}g.pop();e.push("<g_vml_:fill",' color="',Z.color,'"',' color2="',V.color,'"',' type="',this.fillStyle.type_,'"',' focusposition="',n.x,", ",n.y,'"',' colors="',g.join(""),'"',' opacity="',Y,'" />')}else{if(y){e.push('<g_vml_:fill color="',u,'" opacity="',Y,'" />')}else{e.push("<g_vml_:stroke",' opacity="',Y,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',M(this.lineCap),'"',' weight="',this.lineWidth,'px"',' color="',u,'" />')}}e.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",e.join(""))};H.fill=function(){this.stroke(true)};H.closePath=function(){this.currentPath_.push({type:"close"})};H.getCoords_=function(W,V){return{x:A*(W*this.m_[0][0]+V*this.m_[1][0]+this.m_[2][0])-I,y:A*(W*this.m_[0][1]+V*this.m_[1][1]+this.m_[2][1])-I}};H.save=function(){var V={};P(this,V);this.aStack_.push(V);this.mStack_.push(this.m_);this.m_=E(K(),this.m_)};H.restore=function(){P(this.aStack_.pop(),this);this.m_=this.mStack_.pop()};H.translate=function(X,W){var V=[[1,0,0],[0,1,0],[X,W,1]];this.m_=E(V,this.m_)};H.rotate=function(W){var Y=U(W);var X=L(W);var V=[[Y,X,0],[-X,Y,0],[0,0,1]];this.m_=E(V,this.m_)};H.scale=function(X,W){this.arcScaleX_*=X;this.arcScaleY_*=W;var V=[[X,0,0],[0,W,0],[0,0,1]];this.m_=E(V,this.m_)};H.clip=function(){};H.arcTo=function(){};H.createPattern=function(){return new F};function S(V){this.type_=V;this.radius1_=0;this.radius2_=0;this.colors_=[];this.focus_={x:0,y:0}}S.prototype.addColorStop=function(W,V){V=C(V);this.colors_.push({offset:1-W,color:V})};function F(){}G_vmlCanvasManager=G;CanvasRenderingContext2D=J;CanvasGradient=S;CanvasPattern=F})()};