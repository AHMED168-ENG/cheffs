(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2930],{43322:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/restaurant/popular",function(){return t(49751)}])},98592:function(n,e,t){"use strict";var r=t(85893),a=t(67294),i=t(11057),l=t(90948),s=t(99226),u=t(86886);t(36624),t(11163);var o=t(88767),d=t(57849),c=t(25617),v=t(33709),p=t(26793),x=t(12315),_=t(7036),g=t(2213);e.Z=n=>{var e,t;let{restaurantType:m}=n,{t:f}=(0,p.$)(),{global:j}=(0,c.v9)(n=>n.globalSettings);null==j||null===(e=j.base_urls)||void 0===e||e.restaurant_cover_photo_url;let[h,Z]=(0,a.useState)("all");(0,l.ZP)(i.Z)(n=>{let{theme:e}=n;return{color:"#fff",backgroundColor:"#EF7822","&:hover":{backgroundColor:"#ff903f"}}});let[b,y]=a.useState(!1),[P,w]=a.useState("web"),{isLoading:N,data:E,isError:k,error:C,refetch:S}=(0,o.useQuery)(["restaurant-list",m],()=>d.G.typeWiseRestaurantList({restaurantType:m,type:h}));return(0,a.useEffect)(()=>{S()},[h]),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(u.ZP,{container:!0,item:!0,md:12,lg:12,xs:12,spacing:{xs:2,md:3},sx:{padding:"20px 0px"},children:(0,r.jsx)(u.ZP,{item:!0,xs:12,sm:12,md:12,align:"center",children:(0,r.jsx)(_.Xw,{alignItems:"center",justifyContent:"center",children:(0,r.jsx)(g.Z,{setType:Z,type:h})})})}),(0,r.jsx)(u.ZP,{item:!0,container:!0,spacing:{xs:2,md:2},rowGap:"30px",children:E?(0,r.jsx)(r.Fragment,{children:null==E?void 0:null===(t=E.data)||void 0===t?void 0:t.map(n=>{var e,t,a,i;return(0,r.jsx)(u.ZP,{item:!0,xs:4,sm:3,md:3,children:(0,r.jsx)(v.Z,{image:null==n?void 0:n.logo,name:null==n?void 0:n.name,rating:null==n?void 0:n.avg_rating,restaurantImageUrl:null==j?void 0:null===(e=j.base_urls)||void 0===e?void 0:e.restaurant_image_url,id:null==n?void 0:n.id,active:null==n?void 0:n.active,open:null==n?void 0:n.open,restaurantDiscount:null==n?void 0:n.discount,freeDelivery:null==n?void 0:n.free_delivery,rating_count:null===(t=restaurant)||void 0===t?void 0:t.rating_count,coupons:null===(a=restaurant)||void 0===a?void 0:a.coupons,cuisines:null===(i=restaurant)||void 0===i?void 0:i.cuisine})})})}):(0,r.jsx)(x.Z,{})}),(0,r.jsx)(s.Z,{sx:{display:"flex",justifyContent:"center",padding:"30px 0px 70px 0px"}})]})}},56755:function(n,e,t){"use strict";var r=t(85893);t(67294);var a=t(66720),i=t(98592),l=t(7036),s=t(29406);t(46089),t(25617);var u=t(40795);e.Z=n=>{let{restaurantType:e,title:t,description:o}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.ZP,{}),(0,r.jsx)(u.Z,{children:(0,r.jsxs)(l.iD,{sx:{marginTop:"5rem"},children:[(0,r.jsx)(s.Z,{title:t}),(0,r.jsx)(i.Z,{restaurantType:e})]})})]})}},49751:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSP:function(){return s}});var r=t(85893);t(67294);var a=t(56755);t(55720);var i=t(46089),l=t(26793),s=!0;e.default=n=>{var e,t;let{configData:s,landingPageData:u,pathName:o}=n,{t:d}=(0,l.$)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"div",children:[(0,r.jsx)(i.Z,{title:"".concat(d("Popular Restaurant")," ").concat(d("on")," ").concat(null==s?void 0:s.business_name),ogImage:"".concat(null==s?void 0:null===(e=s.base_urls)||void 0===e?void 0:e.react_landing_page_images,"/").concat(null==u?void 0:null===(t=u.banner_section_full)||void 0===t?void 0:t.banner_section_img_full),pathName:o}),(0,r.jsx)(a.Z,{restaurantType:"popular",title:"Popular Restaurant ",description:"Popular Restaurant Nearby"})]})})}}},function(n){n.O(0,[2888,9774,179],function(){return n(n.s=43322)}),_N_E=n.O()}]);