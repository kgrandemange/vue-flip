(function(e){function t(t){for(var c,i,o=t[0],l=t[1],d=t[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);s&&s(t);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},r=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-flip/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var s=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2200:function(e,t,n){var c=n("6b59");"string"===typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);var a=n("499e").default;a("797fdab2",c,!0,{sourceMap:!1,shadowMode:!1})},2272:function(e,t,n){var c=n("75e8");"string"===typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);var a=n("499e").default;a("2baa8b54",c,!0,{sourceMap:!1,shadowMode:!1})},"35cc":function(e,t,n){var c=n("b026");"string"===typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);var a=n("499e").default;a("626a8d64",c,!0,{sourceMap:!1,shadowMode:!1})},"64be":function(e,t,n){"use strict";n("2200")},"6b59":function(e,t,n){var c=n("24fb");t=c(!1),t.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap);"]),t.push([e.i,":root{font-family:Open Sans,sans-serif}body{margin:0;min-width:350px}header{margin:0;background:linear-gradient(90deg,#673ab7,#ffc107);height:20vh;display:flex;flex-direction:column;justify-content:center;align-items:center}header h1,header h2{margin:0;color:#fff}section{margin:1rem}h1,h2{font-weight:300}.front{background-color:#673ab7}.back,.front{display:flex;align-items:center;justify-content:center;color:#fff;width:100%;height:100%}.back{background-color:#ffc107}",""]),e.exports=t},"75e8":function(e,t,n){var c=n("24fb");t=c(!1),t.push([e.i,"pre{padding:1rem 0;background-color:#251a35;color:#fff;overflow:auto}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e66569}",""]),e.exports=t},"8a77":function(e,t,n){var c=n("24fb");t=c(!1),t.push([e.i,".flip-cards[data-v-15d133fb]{display:flex;flex-wrap:wrap}h1[data-v-15d133fb]{width:100%}.card[data-v-15d133fb]{margin:10px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:4rem}button[data-v-15d133fb]{height:-webkit-max-content;height:-moz-max-content;height:max-content}",""]),e.exports=t},a477:function(e,t,n){"use strict";n("c9a8")},a660:function(e,t,n){"use strict";n("c1c7")},b026:function(e,t,n){var c=n("24fb");t=c(!1),t.push([e.i,".pairs[data-v-7d064164]{display:flex;flex-wrap:wrap}h1[data-v-7d064164]{width:100%}.card[data-v-7d064164]{margin:10px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:4rem}.font[data-v-7d064164]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.front.found[data-v-7d064164]{background-color:green}",""]),e.exports=t},bd27:function(e,t,n){var c=n("24fb");t=c(!1),t.push([e.i,".flip-container{perspective:1000}.flip-container.active-hover:hover .flipper,.flip-container.hover .flipper{transform:rotateY(180deg)}.flipper{transition:.6s;position:relative;width:100%;height:100%}.back,.flipper,.front{transform-style:preserve-3d}.back,.front{-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0}.front{z-index:2;transform:rotateY(0)}.back{transform:rotateY(180deg)}",""]),e.exports=t},c1c7:function(e,t,n){var c=n("bd27");"string"===typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);var a=n("499e").default;a("627a3b7a",c,!0,{sourceMap:!1,shadowMode:!1})},c9a8:function(e,t,n){var c=n("8a77");"string"===typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);var a=n("499e").default;a("499d0f03",c,!0,{sourceMap:!1,shadowMode:!1})},cd49:function(e,t,n){"use strict";n.r(t),n.d(t,"app",(function(){return Ue}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=Object(c["e"])("header",null,[Object(c["e"])("h1",null,"Vue Flip"),Object(c["e"])("h2",null,"A component to flip elements")],-1),r=Object(c["e"])("h1",null,"Simple Example (hover)",-1),i=Object(c["d"])(" front "),o=Object(c["d"])(" back "),l=Object(c["d"])("        "),d=Object(c["e"])("code",null,[Object(c["d"])("\n        "),Object(c["e"])("div",{"active-hover":!0,width:"200px",height:"50px"},[Object(c["d"])("\n          "),Object(c["e"])("p",{class:"front"},"\n            front\n          "),Object(c["d"])("\n          "),Object(c["e"])("p",{class:"back"},"\n            back\n          "),Object(c["d"])("\n        ")]),Object(c["d"])("\n        ")],-1),s=Object(c["d"])("\n      "),u=Object(c["e"])("h1",null,"Simple Example (click)",-1),p=Object(c["d"])(" front "),b=Object(c["d"])(" back "),f=Object(c["d"])("        "),h=Object(c["e"])("code",null,[Object(c["d"])("\n        "),Object(c["e"])("div",{"active-click":"",width:"200px",height:"50px"},[Object(c["d"])("\n          "),Object(c["e"])("p",{class:"front"},"\n            front\n          "),Object(c["d"])("\n          "),Object(c["e"])("p",{class:"back"},"\n            back\n          "),Object(c["d"])("\n        ")]),Object(c["d"])("\n        ")],-1),j=Object(c["d"])("\n      "),O=Object(c["e"])("hr",null,null,-1),v=Object(c["e"])("h1",null,"Example with transition property",-1),m=Object(c["d"])(" front "),g=Object(c["d"])(" back "),k=Object(c["d"])("        "),x=Object(c["e"])("code",null,[Object(c["d"])("\n        "),Object(c["e"])("div",{"active-hover":"",width:"200px",height:"50px",transition:"2s"},[Object(c["d"])("\n          "),Object(c["e"])("p",{class:"front"},"\n            front\n          "),Object(c["d"])("\n          "),Object(c["e"])("p",{class:"back"},"\n            back\n          "),Object(c["d"])("\n        ")]),Object(c["d"])("\n        ")],-1),y=Object(c["d"])("\n      "),w=Object(c["e"])("hr",null,null,-1),C=Object(c["e"])("h1",null,"Flip card programmatically",-1),M=Object(c["d"])(" front "),V=Object(c["d"])(" back "),S={style:{margin:"10px"}},_={style:{"margin-inline-end":"10px"}},F=Object(c["d"])("        "),$=Object(c["d"])("\n        "),N=Object(c["e"])("div",{"active-hover":"",width:"200px",height:"50px",class:"simple-test",model:"model"},[Object(c["d"])("\n          "),Object(c["e"])("p",{class:"front"},"\n            front\n          "),Object(c["d"])("\n          "),Object(c["e"])("p",{class:"back"},"\n            back\n          "),Object(c["d"])("\n        ")],-1),P=Object(c["d"])("\n        "),U={style:{margin:"10px"}},q=Object(c["d"])("\n          "),z={style:{"margin-inline-end":"10px"}},H=Object(c["d"])("\n          "),T=Object(c["d"])("\n        "),A=Object(c["d"])("\n        "),I=Object(c["d"])("\n      "),B=Object(c["e"])("hr",null,null,-1),E=Object(c["e"])("h1",null,"Flip one time",-1),Y=Object(c["d"])(" back "),J=Object(c["d"])("        "),L=Object(c["d"])("\n        "),Q={model:"model2",class:"simple-test",width:"20%",height:"50px"},D=Object(c["d"])("\n          "),G={class:"front"},K=Object(c["d"])("\n            "),R=Object(c["d"])("\n          "),W=Object(c["d"])("\n          "),X=Object(c["e"])("p",{class:"back"},"\n            back\n          ",-1),Z=Object(c["d"])("\n        "),ee=Object(c["d"])("\n        "),te=Object(c["d"])("\n      "),ne=Object(c["d"])("        "),ce=Object(c["e"])("code",null,"\n          export default {\n            methods: {\n              handleClick () {\n                this.model2 = true\n              }\n            }\n          }\n        ",-1),ae=Object(c["d"])("\n      "),re=Object(c["e"])("hr",null,null,-1),ie=Object(c["e"])("hr",null,null,-1);function oe(e,t,n,oe,le,de){var se=Object(c["l"])("vue-flip"),ue=Object(c["l"])("pairs"),pe=Object(c["l"])("flip-cards"),be=Object(c["m"])("prism");return Object(c["h"])(),Object(c["c"])("div",null,[a,Object(c["e"])("section",null,[r,Object(c["e"])(se,{"active-hover":"",width:"200px",height:"50px"},{front:Object(c["o"])((function(){return[i]})),back:Object(c["o"])((function(){return[o]})),_:1}),Object(c["p"])(Object(c["e"])("pre",null,[l,d,s],512),[[be]]),u,Object(c["e"])(se,{"active-click":"",width:"200px",height:"50px"},{front:Object(c["o"])((function(){return[p]})),back:Object(c["o"])((function(){return[b]})),_:1}),Object(c["p"])(Object(c["e"])("pre",null,[f,h,j],512),[[be]]),O,v,Object(c["e"])(se,{"active-hover":"",width:"200px",height:"50px",transition:"2s"},{front:Object(c["o"])((function(){return[m]})),back:Object(c["o"])((function(){return[g]})),_:1}),Object(c["p"])(Object(c["e"])("pre",null,[k,x,y],512),[[be]]),w,C,Object(c["e"])(se,{"active-click":"",width:"200px",height:"50px",class:"simple-test",modelValue:e.model,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.model=t})},{front:Object(c["o"])((function(){return[M]})),back:Object(c["o"])((function(){return[V]})),_:1},8,["modelValue"]),Object(c["e"])("div",S,[Object(c["e"])("span",_,Object(c["n"])(e.model),1),Object(c["e"])("button",{onClick:t[2]||(t[2]=function(t){return e.model=!e.model})},"Click")]),Object(c["p"])(Object(c["e"])("pre",null,[F,Object(c["e"])("code",null,[$,N,P,Object(c["e"])("div",U,[q,Object(c["e"])("span",z,Object(c["n"])(e.model),1),H,Object(c["e"])("button",{onClick:t[3]||(t[3]=function(t){return e.model=!e.model})},"Click"),T]),A]),I],512),[[be]]),B,E,Object(c["e"])(se,{modelValue:e.model2,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.model2=t}),class:"simple-test",width:"20%",height:"50px"},{front:Object(c["o"])((function(){return[Object(c["e"])("span",{style:{display:"flex","align-items":"center","justify-content":"center",height:"100%",width:"100%"},onClick:t[4]||(t[4]=function(){return e.handleClick.apply(e,arguments)})},"disable me!")]})),back:Object(c["o"])((function(){return[Y]})),_:1},8,["modelValue"]),Object(c["p"])(Object(c["e"])("pre",null,[J,Object(c["e"])("code",null,[L,Object(c["e"])("div",Q,[D,Object(c["e"])("p",G,[K,Object(c["e"])("span",{style:{display:"flex","align-items":"center","justify-content":"center",height:"100%",width:"100%"},onClick:t[6]||(t[6]=function(){return e.handleClick.apply(e,arguments)})},"disable me!"),R]),W,X,Z]),ee]),te],512),[[be]]),Object(c["p"])(Object(c["e"])("pre",null,[ne,ce,ae],512),[[be,"javascript"]]),re,Object(c["e"])(ue),ie,Object(c["e"])(pe)])])}n("caad"),n("fb6a");function le(e){return/(%|Q)$/i.test(e)?!isNaN(parseFloat(e.slice(0,-1))):/(px|cm|mm|in|pc|pt|em|ex|ch|lh|vh|vw)$/i.test(e)?!isNaN(parseFloat(e.slice(0,-2))):/(rem|vmin|vmax)$/i.test(e)?!isNaN(parseFloat(e.slice(0,-3))):["max-content","min-content","available","fit-content","auto","inherit","initial","unset"].includes(e)}function de(e){return le(e)}function se(e){return le(e)}function ue(e){return/s$/i.test(e)?!isNaN(parseFloat(e.slice(0,-1))):/(ms)$/i.test(e)?!isNaN(parseFloat(e.slice(0,-2))):"0"===e}var pe=Object(c["f"])({name:"flip",props:{activeClick:{type:Boolean,required:!1,default:!1},activeHover:{type:Boolean,required:!1,default:!1},width:{type:String,required:!0,validator:de},height:{type:String,required:!0,validator:se},transition:{type:String,required:!1,default:"0.5s",validator:ue},modelValue:{type:Boolean,required:!1}},render:function(){return Object(c["g"])("div",{class:"flip-container "+(this.activeHover?"active-hover ":"")+(this.hover?"hover":""),style:"width: "+this.width+"; height: "+this.height,onClick:this.handleClick,onMouseOver:this.handleMouseover,onMouseOut:this.handleMouseout},Object(c["g"])("div",{class:"flipper",style:"transition-duration: "+this.transition},[Object(c["g"])("div",{class:"front"},this.$slots.front?this.$slots.front():""),Object(c["g"])("div",{class:"back"},this.$slots.back?this.$slots.back():"")]))},data:function(){return{hover:!1}},methods:{handleClick:function(){this.activeClick&&(this.hover=!this.hover,this.$emit("update:modelValue",this.hover))},handleMouseout:function(){this.activeHover&&this.$emit("update:modelValue",!1)},handleMouseover:function(){this.activeHover&&this.$emit("update:modelValue",!0)}},mounted:function(){this.modelValue&&(this.hover=this.modelValue)},watch:{modelValue:function(e){this.hover=e}}}),be=(n("a660"),pe),fe=Object(c["q"])("data-v-7d064164");Object(c["j"])("data-v-7d064164");var he={class:"pairs"},je=Object(c["e"])("h1",null,"Use case: Pairs",-1);Object(c["i"])();var Oe=fe((function(e,t,n,a,r,i){var o=Object(c["l"])("vue-flip");return Object(c["h"])(),Object(c["c"])("div",he,[je,(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["k"])(e.deck,(function(t,n){return Object(c["h"])(),Object(c["c"])(o,{key:n,width:"120px",height:"200px",class:"card",modelValue:t.flipped,"onUpdate:modelValue":function(e){return t.flipped=e},onClick:function(n){return e.handleClick(t)}},{front:fe((function(){return[Object(c["e"])("div",{class:[{found:t.found},"front"]},Object(c["n"])(t.found?"✔️":"?"),3)]})),back:fe((function(){return[Object(c["d"])(Object(c["n"])(t.value),1)]})),_:2},1032,["modelValue","onUpdate:modelValue","onClick"])})),128))])})),ve=(n("d81d"),n("d3b7"),n("25f0"),n("9ab4")),me=0,ge=Object(c["f"])({name:"Pairs",components:{VueFlip:be},data:function(){return{deck:[],cardSelected:[]}},created:function(){var e=Object(ve["a"])(Array(5)).map((function(){return(me+=1).toString(36).toUpperCase()}),me=9);this.deck=Object(ve["a"])(e,e).map((function(e){return{value:e,flipped:!1,found:!1}})).sort((function(){return.5-Math.random()}))},methods:{handleClick:function(e){var t=this;e.found||e.flipped||this.cardSelected.length<2&&(e.flipped=!0,this.cardSelected.push(e),2===this.cardSelected.length&&setTimeout((function(){t.cardSelected.map((function(e){return e.flipped=!1})),t.cardSelected[0].value===e.value&&(t.cardSelected[0].found=!0,e.found=!0),t.cardSelected=[]}),1e3))}}});n("f5e1");ge.render=Oe,ge.__scopeId="data-v-7d064164";var ke=ge,xe=Object(c["q"])("data-v-15d133fb");Object(c["j"])("data-v-15d133fb");var ye={class:"flip-cards"},we=Object(c["e"])("h1",null,"Use case: Flip Cards",-1),Ce=Object(c["d"])(" 😀 ");Object(c["i"])();var Me=xe((function(e,t,n,a,r,i){var o=Object(c["l"])("vue-flip");return Object(c["h"])(),Object(c["c"])("div",ye,[we,(Object(c["h"])(!0),Object(c["c"])(c["a"],null,Object(c["k"])(e.items,(function(e){return Object(c["h"])(),Object(c["c"])(o,{modelValue:e.flip,"onUpdate:modelValue":function(t){return e.flip=t},key:e.value,width:"120px",height:"200px",class:"card","active-click":""},{front:xe((function(){return[Object(c["e"])("div",{class:[{found:e.found},"front"]},Object(c["n"])(e.value),3)]})),back:xe((function(){return[Ce]})),_:2},1032,["modelValue","onUpdate:modelValue"])})),128)),Object(c["e"])("button",{onClick:t[1]||(t[1]=function(){return e.flipCards.apply(e,arguments)})},"Flip Cards")])})),Ve=(n("a630"),n("3ca3"),Object(c["f"])({components:{VueFlip:be},data:function(){return{items:Array.from(Array(10),(function(e,t){return{value:t,flip:!1}}))}},methods:{flipCards:function(){var e=this,t=0,n=setInterval((function(){e.items[t].flip=!e.items[t].flip,t++,t>=e.items.length&&clearInterval(n)}),100)}}}));n("a477");Ve.render=Me,Ve.__scopeId="data-v-15d133fb";var Se=Ve,_e=Object(c["f"])({name:"app",components:{vueFlip:be,Pairs:ke,FlipCards:Se},data:function(){return{model:!1,model2:!1,model3:!1}},methods:{handleClick:function(){this.model2=!0}}});n("64be");_e.render=oe;var Fe=_e,$e=(n("ac1f"),n("5319"),n("c197")),Ne=n.n($e),Pe=(n("84bf"),n("2272"),{beforeMount:function(e,t){var n=e.children[0].children[0]||e.children[0],c=Ne.a.highlight(n.outerHTML,Ne.a.languages[t.value||"html"],t.value||"html");t.value&&"html"!==t.value||(c=c.replace(/div/g,"vue-flip").replace(/<\/span>p<\/span>/,"</span>template v-slot:front</span>").replace(/<\/span>p<\/span>/,"</span>template</span>").replace(/<\/span>p<\/span>/,"</span>template v-slot:back</span>").replace(/<\/span>p<\/span>/,"</span>template</span>").replace(/active-hover/,":active-hover").replace(/model/,"v-model")),e.children[0].outerHTML=c}}),Ue=Object(c["b"])(Fe);Ue.directive("prism",Pe),Ue.mount("#app")},f5e1:function(e,t,n){"use strict";n("35cc")}});
//# sourceMappingURL=app.3ee83716.js.map