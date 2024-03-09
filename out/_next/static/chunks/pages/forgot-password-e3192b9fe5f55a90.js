(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9742],{91686:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return s(70931)}])},70931:function(e,r,s){"use strict";s.r(r),s.d(r,{__N_SSP:function(){return H},default:function(){return X}});var o=s(85893),n=s(67294),t=s(99226),a=s(7036),i=s(26447),d=s(15861),l=s(82580),c=s(26793),u=s(57126),h=s(25617),p=s(83287),m=s(75904),w=s(88767);let x=async e=>{let{data:r}=await m.Z.post("/api/v1/auth/forgot-password",e);return r},j=e=>{let{onSuccessHandlerForForgotpass:r,onErrorResponse:s}=e;return(0,w.useMutation)("forgot_password",x,{onSuccess:r,onError:s})};var f=s(74231),Z=s(74931),_=s(22400),g=e=>{let{data:r,goNext:s,handleFirstForm:n}=e,{t:m}=(0,c.$)(),{global:w,token:x}=(0,h.v9)(e=>e.globalSettings),g=(0,l.TA)({initialValues:{phone:r?r.phone:""},validationSchema:f.Ry({phone:f.Z_().required(m("Please give a phone number")).min(10,"number must be 10 digits")}),onSubmit:async(e,r)=>{try{y(e)}catch(e){}}}),v=e=>{e&&(s(),Z.ZP.success(e.message))},{mutate:b,isLoading:S}=j({onSuccessHandler:v,onError:e=>{(0,_.R)(e)}}),y=e=>{n(e),b(e,{onSuccess:v,onError:_.R})};return(0,o.jsx)(t.Z,{children:(0,o.jsxs)(a.Xw,{children:[(0,o.jsx)(i.Z,{children:(0,o.jsx)(d.Z,{children:m("Please enter your register Mobile Number")})}),(0,o.jsx)(i.Z,{mt:"2rem",padding:"0 20px",children:(0,o.jsxs)("form",{noValidate:!0,onSubmit:g.handleSubmit,children:[(0,o.jsx)(u.Z,{value:g.values.phone,onHandleChange:e=>{g.setFieldValue("phone","+".concat(e))},initCountry:null==w?void 0:w.country,touched:g.touched.phone,errors:g.errors.phone,rtlChange:"true"}),(0,o.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},loading:S,children:m("Next")})]})})]})})},v=s(30968),b=s(47312),S=s(57709),y=s(87109),C=s(93946),P=s(72450),k=s(22961),F=s(56815),E=s(94054),N=s(93186);let T=async e=>{let{data:r}=await m.Z.put("/api/v1/auth/reset-password",e);return r},A=(e,r)=>(0,w.useMutation)("reset_password",T,{onSuccess:e,onError:_.f});var q=s(11163),R=e=>{let{data:r,goBack:s}=e,[u,h]=(0,n.useState)(!1),[m,w]=(0,n.useState)(!1),{t:x}=(0,c.$)(),j=(0,q.useRouter)(),_=(0,l.TA)({initialValues:{reset_token:r.reset_token,phone:r.phone,password:"",confirm_password:""},validationSchema:f.Ry({password:f.Z_().required(x("No password provided.")).min(6,x("Password is too short - should be 6 chars minimum.")),confirm_password:f.Z_().required(x("No Confirm Password provided.")).oneOf([f.iH("password"),null],x("Passwords must match"))}),onSubmit:async(e,r)=>{try{T(e)}catch(e){}}}),g=e=>{e&&(Z.ZP.success(e.message),j.push("/home"))},{mutate:v,isLoading:N}=A(g),T=e=>{v(e,{onSuccess:g})};return(0,o.jsx)(t.Z,{children:(0,o.jsxs)(a.Xw,{children:[(0,o.jsx)(i.Z,{children:(0,o.jsx)(d.Z,{children:x("Enter your new password")})}),(0,o.jsxs)(i.Z,{mt:"2rem",padding:"0 20px",children:[(0,o.jsxs)("form",{noValidate:!0,onSubmit:_.handleSubmit,children:[(0,o.jsxs)(E.Z,{sx:{mt:2},variant:"outlined",fullWidth:!0,children:[(0,o.jsx)(b.Z,{htmlFor:"outlined-adornment-password",children:x("Password")}),(0,o.jsx)(S.Z,{require:!0,type:u?"text":"password",id:"password",name:"password",value:_.values.password,onChange:_.handleChange,error:_.touched.password&&!!_.errors.password,helperText:_.touched.password&&_.errors.password,touched:_.touched.password,endAdornment:(0,o.jsx)(y.Z,{position:"end",children:(0,o.jsx)(C.Z,{"aria-label":"toggle password visibility",onClick:()=>h(e=>!e),edge:"end",children:u?(0,o.jsx)(P.Z,{}):(0,o.jsx)(k.Z,{})})}),label:x("Password")}),_.errors.password&&(0,o.jsx)(F.Z,{sx:{color:"#FF686A"},children:_.errors.password})]}),(0,o.jsxs)(E.Z,{sx:{mt:2},variant:"outlined",fullWidth:!0,children:[(0,o.jsx)(b.Z,{htmlFor:"outlined-adornment-password",children:x("Confirm Password")}),(0,o.jsx)(S.Z,{require:!0,type:m?"text":"password",id:"confirm_password",name:"confirm_password",value:_.values.confirm_password,onChange:_.handleChange,error:_.touched.confirm_password&&!!_.errors.confirm_password,helperText:_.touched.confirm_password&&_.errors.confirm_password,touched:_.touched.confirm_password,endAdornment:(0,o.jsx)(y.Z,{position:"end",children:(0,o.jsx)(C.Z,{"aria-label":"toggle password visibility",onClick:()=>w(e=>!e),edge:"end",children:m?(0,o.jsx)(P.Z,{}):(0,o.jsx)(k.Z,{})})}),label:x("Confirm Password")}),_.errors.confirm_password&&(0,o.jsx)(F.Z,{sx:{color:"#FF686A"},children:_.errors.confirm_password})]}),(0,o.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:x("Done")})]}),(0,o.jsx)(p.Z,{onClick:s,fullWidth:!0,variant:"contained",sx:{mb:2},children:x("Back")})]})]})})},V=()=>{let[e,r]=(0,n.useState)(0),[s,i]=(0,n.useState)({phone:"",otp:""}),d=()=>{r(e=>e+1)},l=()=>{r(e=>e-1)},c=e=>{i({phone:e.phone,reset_token:e.reset_token})},u=e=>{e&&d()},{mutate:h,isLoading:p}=(0,N.Y)(u);return(0,o.jsx)(t.Z,{minHeight:"50vh",marginTop:"200px",children:(0,o.jsx)(a.E4,{children:(0,o.jsx)(a.J8,{elevation:5,children:0===e?(0,o.jsx)(g,{goNext:d,handleFirstForm:c,data:s}):1===e?(0,o.jsx)(v.Z,{data:s,goBack:l,formSubmitHandler:e=>{c(e),h(e,{onSuccess:u})},isLoading:p}):(0,o.jsx)(R,{data:s,handleFirstForm:c,goBack:l})})})})};s(55720);var W=s(46089),H=!0,X=e=>{let{configData:r}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(W.Z,{title:"Forgot Password - ".concat(null==r?void 0:r.business_name)}),(0,o.jsx)(V,{})]})}}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=91686)}),_N_E=e.O()}]);