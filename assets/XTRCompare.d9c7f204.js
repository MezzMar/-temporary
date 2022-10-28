import{j as e,r as b,ap as f,aq as n,T as d,Q as g,U as v,g as p,F as h,D as _}from"./index.7d4875b7.js";import{I as u}from"./ImageGrade.c4fe692a.js";import{S as y}from"./index.911d3244.js";var l="C:\\git\\cynergy\\telus-device-report\\src\\components\\XTRCompare.tsx";const{Title:T}=d;function S({searchResults:i}){const{before:a,after:o}=i.reduce((m,r)=>r.flag==="BEFORE"?(m.before.push(r),m):(m.after.push(r),m),{before:[],after:[]});return e(b.exports.Fragment,{children:[e(T,{level:3,children:"Details"},void 0,!1,{fileName:l,lineNumber:31,columnNumber:7},this),e(f,{gutter:16,children:[e(n,{span:12,children:e(N,{options:a},void 0,!1,{fileName:l,lineNumber:34,columnNumber:11},this)},void 0,!1,{fileName:l,lineNumber:33,columnNumber:9},this),e(n,{span:12,children:e(N,{options:o,title:"After"},void 0,!1,{fileName:l,lineNumber:37,columnNumber:11},this)},void 0,!1,{fileName:l,lineNumber:36,columnNumber:9},this)]},void 0,!0,{fileName:l,lineNumber:32,columnNumber:7},this)]},void 0,!0,{fileName:l,lineNumber:30,columnNumber:5},this)}const N=({options:i,title:a="Before"})=>{var s;const[o,m]=b.exports.useState((s=i[0])==null?void 0:s.test_id),r=i.find(({test_id:t})=>t===o),c=i.map(t=>({label:e(g,{test_id:t.test_id,start_time:t.start_time},void 0,!1,{fileName:l,lineNumber:54,columnNumber:12},void 0),value:t.test_id}));return e(v,{children:e(p,{style:{minHeight:"50vh",textAlign:"left",gap:"2rem"},children:[e(f,{children:[e(n,{span:6,children:e(d.Title,{level:3,children:a},void 0,!1,{fileName:l,lineNumber:63,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:62,columnNumber:11},void 0),e(n,{span:18,children:e(y,{style:{borderBottom:"1px solid rgb(216, 216, 216)",paddingBottom:"0.5rem",marginBottom:"1rem",width:"100%"},bordered:!1,options:c,onSelect:m,value:o},void 0,!1,{fileName:l,lineNumber:66,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:65,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:61,columnNumber:9},void 0),r&&e(x,{device:r},void 0,!1,{fileName:l,lineNumber:81,columnNumber:20},void 0)]},void 0,!0,{fileName:l,lineNumber:60,columnNumber:7},void 0)},void 0,!1,{fileName:l,lineNumber:59,columnNumber:5},void 0)},x=({device:i})=>{const a=[{label:"Top",old_image:"old_image_top",image:"image_top",grade:"grade_top"},{label:"Bottom",old_image:"old_image_bottom",image:"image_bottom",grade:"grade_bottom"},{label:"Left",old_image:"old_image_left",image:"image_left",grade:"grade_left"},{label:"Right",old_image:"old_image_right",image:"image_right",grade:"grade_right"}];return e(h,{children:[e("div",{children:[{key:"test_id",label:"Test ID"},{key:"start_time",label:"Start Time"},{key:"end_time",label:"End Time"},{key:"elapsed_time",label:"Elapsed Time"},{key:"test_profile",label:"Test Profile"}].map(({label:m,key:r})=>e("h4",{style:{margin:"4px"},children:[e("b",{children:m},void 0,!1,{fileName:l,lineNumber:113,columnNumber:13},void 0),e("br",{},void 0,!1,{fileName:l,lineNumber:114,columnNumber:13},void 0),e("span",{children:i[r]||"--"},void 0,!1,{fileName:l,lineNumber:115,columnNumber:13},void 0)]},r,!0,{fileName:l,lineNumber:112,columnNumber:11},void 0))},void 0,!1,{fileName:l,lineNumber:110,columnNumber:7},void 0),e("div",{style:{height:"20px"},children:e(d.Title,{level:3,style:{marginBottom:0},children:["Overall Grade ",e("span",{style:{color:"gray"},children:i.grade_overall||"-"},void 0,!1,{fileName:l,lineNumber:122,columnNumber:25},void 0)]},void 0,!0,{fileName:l,lineNumber:121,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:120,columnNumber:7},void 0),e(u,{label:"Front",grade:i.grade_front,image:i.image_front},void 0,!1,{fileName:l,lineNumber:126,columnNumber:7},void 0),e(u,{label:"Back",grade:i.grade_back,image:i.image_back},void 0,!1,{fileName:l,lineNumber:127,columnNumber:7},void 0),e(_,{style:{marginTop:0}},void 0,!1,{fileName:l,lineNumber:129,columnNumber:7},void 0),e("div",{style:{height:"20px"},children:e(d.Title,{level:3,style:{marginBottom:0},children:["Sides Grade ",e("span",{style:{color:"gray"},children:i.grade_sides||"-"},void 0,!1,{fileName:l,lineNumber:133,columnNumber:23},void 0)]},void 0,!0,{fileName:l,lineNumber:132,columnNumber:9},void 0)},void 0,!1,{fileName:l,lineNumber:131,columnNumber:7},void 0),a.map(m=>e(u,{label:m.label,grade:i[m.grade],image:i[m.image]},m.label,!1,{fileName:l,lineNumber:138,columnNumber:9},void 0))]},void 0,!0)};export{N as DeviceComparison,S as default};