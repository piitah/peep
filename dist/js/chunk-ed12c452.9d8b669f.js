(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed12c452"],{"0a49":function(t,e,s){var n=s("9b43"),r=s("626a"),a=s("4bf8"),i=s("9def"),o=s("cd1c");t.exports=function(t,e){var s=1==t,c=2==t,l=3==t,u=4==t,d=6==t,m=5==t||d,p=e||o;return function(e,o,f){for(var v,h,w=a(e),g=r(w),C=n(o,f,3),_=i(g.length),b=0,x=s?p(e,_):c?p(e,0):void 0;_>b;b++)if((m||b in g)&&(v=g[b],h=C(v,b,w),t))if(s)x[b]=h;else if(h)switch(t){case 3:return!0;case 5:return v;case 6:return b;case 2:x.push(v)}else if(u)return!1;return d?-1:l||u?u:x}}},1169:function(t,e,s){var n=s("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"30b4":function(t,e,s){},"426d":function(t,e,s){},7514:function(t,e,s){"use strict";var n=s("5ca1"),r=s("0a49")(5),a="find",i=!0;a in[]&&Array(1)[a](function(){i=!1}),n(n.P+n.F*i,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")(a)},"7b6a":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"border-top",class:t.show===t.postId?"show":"hide"},[s("div",{staticClass:"d-flex flex-row align-items-center pt-2 pl-1 pr-3"},[s("div",{staticClass:"comment-input pt-2"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Comment,expression:"Comment"}],staticClass:"formControl",attrs:{placeholder:"Add Comment"},domProps:{value:t.Comment},on:{input:function(e){e.target.composing||(t.Comment=e.target.value)}}})]),s("div",{staticClass:"comment-post",on:{click:function(e){return e.preventDefault(),t.createComment(t.postId)}}},[t._v("Post")])])]),s("div",{staticClass:"border-top",class:t.show===t.postId?"show":"hide"},t._l(t.comments,function(e){return s("div",{key:e._id,staticClass:"d-flex flex-row align-items-cer pt-2 pl-3 pb-2 pr-3"},[s("div",{},[e.author.image?s("div",{staticClass:"style-img mr-2",style:{backgroundImage:"url("+e.author.image+")"}},[t._v(" ")]):s("svg",{staticClass:"mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",viewBox:"0 0 53 53"}},[s("path",{attrs:{d:"M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z",fill:"#e7eced"}}),s("path",{attrs:{d:"M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z",fill:"#757575"}})])]),s("div",{staticClass:"user-comment"},[s("span",{staticClass:"user-name"},[t._v(t._s(e.author.firstname))]),t._v("\n        "+t._s(e.comment)+"\n      ")])])}),0)])},r=[],a={props:["show","comments","postId"],data:function(){return{Comment:""}},methods:{createComment:function(t){this.$emit("commentData",{comment:this.Comment,postId:t}),this.Comment=""}}},i=a,o=(s("f3e1"),s("2877")),c=Object(o["a"])(i,n,r,!1,null,"2a02850c",null);e["a"]=c.exports},"7bea":function(t,e,s){},"9e3b":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[s("div",{staticClass:"main-profile-wrap mt-0"},[s("div",{staticClass:"profile-bg"}),s("div",{staticClass:"profile-overlay",style:{backgroundImage:"url("+t.authUser.coverImage+")"}},[t._v(" ")]),s("div",{staticClass:"profile-img"},[t.authUser.image?s("div",{staticClass:"profile-img-1"},[s("img",{staticClass:"img-fluid profile-img-1",attrs:{src:t.authUser.image,alt:""}})]):s("div",{staticClass:"profile-img-1"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"181",viewBox:"0 0 53 53"}},[s("path",{attrs:{d:"M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z",fill:"#e7eced"}}),s("path",{attrs:{d:"M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z",fill:"#757575"}})])])])]),s("div",{staticClass:"profile-title mb-4"},[s("div",{staticClass:"d-flex flex-row justify-content-center align-items-center mb-2"},[s("div",[s("h2",[t._v(t._s(t.authUser.firstname)+" "+t._s(t.authUser.lastname))])]),t.auth!==t.authUser._id?s("div",{staticClass:"ml-3"},[s("Follow",{attrs:{following:t.authUser,isFollowing:t.isFollowing(t.authUser)}})],1):t._e()]),s("div",{staticClass:"d-flex flex-row justify-content-around align-items-center w-75",staticStyle:{margin:"auto!important"}},[s("div",{staticClass:"text-sec"},[s("span",{staticClass:"num"},[s("b",[t._v(t._s(t.authUser.posts.length))])]),t._v(" posts\n      ")]),s("div",{staticClass:"text-sec"},[s("span",{staticClass:"num"},[s("b",[t._v(t._s(t.authUser.followers.length))])]),t._v(" followers\n      ")]),s("div",{staticClass:"text-sec"},[s("span",{staticClass:"num"},[s("b",[t._v(t._s(t.authUser.following.length))])]),t._v(" following\n      ")])])]),s("section",[t.auth===t.authUser._id?s("div",{staticClass:"search-wrap container"},[s("div",{staticClass:"d-flex flex-row w-100 justify-content-center align-items-center g-success"},[t._m(0),s("div",{staticClass:"w-75"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.createPost()}}},[s("div",{staticClass:"input-group mb"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.post,expression:"post"}],staticClass:"form-control",staticStyle:{"background-color":"rgb(236, 236, 236)",border:"none",outline:"none"},attrs:{type:"text",placeholder:"Add Post"},domProps:{value:t.post},on:{input:function(e){e.target.composing||(t.post=e.target.value)}}})])])]),t._m(2)])]):t._e()]),s("section",t._l(t.authPost,function(e){return s("div",{key:e._id,staticClass:"post-wrapper mb-5"},[s("div",{staticClass:"d-flex flex-row w-100 align-items-center post-header"},[s("svg",{staticClass:"mr-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",viewBox:"0 0 53 53"}},[s("path",{attrs:{d:"M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z",fill:"#e7eced"}}),s("path",{attrs:{d:"M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z",fill:"#757575"}})]),s("div",{staticClass:"post-h1"},[s("div",{staticClass:"d-flex flex-column",staticStyle:{"line-height":"18px"}},[s("div",{staticClass:"user-name"},[t._v(t._s(e.author.firstname)+" "+t._s(e.author.lastname))]),s("div",{staticClass:"time"},[t._v("10 days ago")])])]),t._m(3,!0)]),s("div",{staticClass:"mb-3 post-title text-left ml-4 mr-3"},[t._v(t._s(e.title))]),s("div",{staticClass:"post-img"},[s("div",[s("img",{staticClass:"img-fluid",attrs:{src:e.image,alt:""}})])]),s("div",{staticClass:"post-detais pl-4 pr-4 pt-3 pb-3"},[s("div",{staticClass:"d-flex flex-row w-100 pb-2 border-bottom"},[s("div",{staticClass:"like text-sec"},[s("b",[t._v(t._s(e.likes.length))]),t._v(" Likes\n          ")]),s("div",{staticClass:"comment text-sec",staticStyle:{cursor:"pointer !important"},on:{click:function(s){return s.preventDefault(),t.toggle(e._id)}}},[s("b",[t._v(t._s(e.comments.length))]),t._v(" Comments\n          ")])]),s("div",{staticClass:"d-flex flex-row w-100 pt-2 pl-3 pr-3"},[s("Like",{staticClass:"w-50 text-sec",attrs:{likes:e.likes,userId:t.user._id,postId:e._id}}),s("div",{staticClass:"w-50 text-sec",staticStyle:{cursor:"pointer !important"},on:{click:function(s){return s.preventDefault(),t.toggle(e._id)}}},[s("b"),s("i",{staticClass:"fas fa-comment"}),t._v(" Comment\n          ")])],1)]),s("div",{staticClass:"border-top",class:t.show===e._id?"show":"hide"},[s("div",{staticClass:"d-flex flex-row align-items-center pt-2 pl-1 pr-3"},[s("div",{staticClass:"comment-input pt-2"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"formControl",attrs:{placeholder:"Add Comment"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),s("div",{staticClass:"comment-post",staticStyle:{cursor:"pointer !important"},on:{click:function(s){return s.preventDefault(),t.createComment(e._id)}}},[t._v("Post")])])]),s("div",{staticClass:"border-top",class:t.show===e._id?"show":"hide"},t._l(e.comments,function(n){return s("div",{key:n._id,staticClass:"d-flex flex-row align-items-cer pt-2 pl-3 pb-2 pr-3"},[t._m(4,!0),s("div",{staticClass:"user-comment"},[s("span",{staticClass:"user-name"},[t._v(t._s(e.author.firstname)+" "+t._s(e.author.lastname))]),t._v("\n            "+t._s(n.comment)+"\n          ")])])}),0)])}),0)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mr-2"},[s("span",{staticClass:"mr-2",staticStyle:{"font-size":"20px"}},[s("i",{staticClass:"fas fa-user-circle icon"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text",staticStyle:{border:"none !important","background-color":"rgb(236, 236, 236)"}},[s("i",{staticClass:"fas fa-search"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ml-3"},[s("span",{staticClass:"mr-2",staticStyle:{"font-size":"20px"}},[s("i",{staticClass:"fas fa-camera icon"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"float-left post-h2"},[s("b",[t._v("...")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"user-avatar mr-2"})])}],a=(s("8e6e"),s("ac6a"),s("456d"),s("96cf"),s("3b8d")),i=(s("7514"),s("bd86")),o=s("b7ec"),c=(s("fef9"),s("7b6a")),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"bt",class:t.isFollowing?"btn-grey":"btn-pri",on:{click:function(e){return e.preventDefault(),t.followHandler()}}},[t._v(t._s(t.isFollowing?"Unfollow":"follow"))])])},u=[],d=s("56d7"),m={props:["isFollowing","following"],data:function(){return{}},methods:{followHandler:function(){this.isFollowing?this.deleteFollow(this.isFollowing._id):this.createFollow(this.following._id),d["EventBus"].$emit("updateUser")},createFollow:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].CREATE_FOLLOW({userId:e});case 2:t.sent;case 3:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),deleteFollow:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].DELETE_FOLLOW(e);case 2:t.sent;case 3:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}},p=m,f=(s("b930"),s("2877")),v=Object(f["a"])(p,l,u,!1,null,"675b14ae",null),h=v.exports,w=s("a4d1"),g=s("2f62");function C(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,n)}return s}function _(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?C(s,!0).forEach(function(e){Object(i["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):C(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var b={name:"search",data:function(){return{hideLike:!0,show:"",authUser:null,authPost:null,auth:"",comment:"",post:"",follow:null,isFollow:!1}},components:{Comment:c["a"],Follow:h,Like:w["a"]},computed:_({},Object(g["b"])("userModule",["isAuthenticated","user"])),created:function(){var t=this;this.auth=this.user._id,d["EventBus"].$on("updateUser",function(){console.log("listening to event");var e=t;setTimeout(function(){e.getUser(),e.isFollowing(e.authUser)},2e3)})},mounted:function(){this.getUser(),this.getPost(),console.log("remounting")},methods:{toggle:function(t){this.show===t?this.show=!1:this.show=t},isFollowing:function(t){console.log(t);var e=this.user.following.find(function(e){return e.user===t._id});return e},createFollow:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].CREATE_Follow({userId:e});case 2:s=t.sent,this.follow=s.data.payload;case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getUser:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.id,t.next=3,o["a"].GET_USER(e);case 3:s=t.sent,this.authUser=s.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getPost:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.id,t.next=3,o["a"].GET_POST(e);case 3:s=t.sent,this.authPost=s.data.payload;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),createPost:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].CREATE_POST({title:this.post});case 2:t.sent,this.post="",this.getPost(),this.getUser();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),createLike:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].CREATE_LIKE({postId:e});case 2:t.sent,this.getPost(),this.hideLike=!1;case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),createComment:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].CREATE_COMMENT({postId:e,comment:this.comment});case 2:t.sent,this.comment="",this.getPost();case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},x=b,k=(s("c498"),Object(f["a"])(x,n,r,!1,null,"79532cc2",null));e["default"]=k.exports},a4d1:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"w-50 text-sec",staticStyle:{cursor:"pointer !important"},on:{click:function(e){return e.preventDefault(),t.likeHandler(e)}}},[s("i",{staticClass:"fas fa-thumbs-up"}),t._v("\n    "+t._s(t.checkLiked?"Unlike":"like")+"\n  ")])])},r=[],a=(s("96cf"),s("3b8d")),i=s("b7ec"),o=s("56d7"),c={props:["postId","checkLiked"],data:function(){return{hasLiked:""}},mounted:function(){console.log("like is liked")},methods:{likeHandler:function(t){this.checkLiked?this.deleteLike(this.checkLiked._id):this.createLike(this.postId),o["EventBus"].$emit("updateRender",t)},createLike:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].CREATE_LIKE({postId:e});case 2:t.sent;case 3:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),deleteLike:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].DELETE_LIKE(e);case 2:t.sent;case 3:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}},l=c,u=(s("fe3f"),s("2877")),d=Object(u["a"])(l,n,r,!1,null,"5ebf2835",null);e["a"]=d.exports},b930:function(t,e,s){"use strict";var n=s("d50e"),r=s.n(n);r.a},c498:function(t,e,s){"use strict";var n=s("30b4"),r=s.n(n);r.a},cd1c:function(t,e,s){var n=s("e853");t.exports=function(t,e){return new(n(t))(e)}},d50e:function(t,e,s){},e853:function(t,e,s){var n=s("d3f4"),r=s("1169"),a=s("2b4c")("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}},f3e1:function(t,e,s){"use strict";var n=s("7bea"),r=s.n(n);r.a},fe3f:function(t,e,s){"use strict";var n=s("426d"),r=s.n(n);r.a}}]);
//# sourceMappingURL=chunk-ed12c452.9d8b669f.js.map