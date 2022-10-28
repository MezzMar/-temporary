import{r as D,j as e,O as S,Q as c,U as k,g as x,V as G,F,G as N,D as I,T as j}from"./index.7d4875b7.js";import{f as b}from"./imagesService.67646b8b.js";import{I as f}from"./ImageGrade.c4fe692a.js";import{S as E}from"./index.911d3244.js";var l="C:\\git\\cynergy\\telus-device-report\\src\\components\\TelusCompare.tsx";const{Title:s}=j;function A({searchResults:o}){const[a,...m]=o,[r,n]=D.exports.useState(m[0].test_id),t=m.find(({test_id:d})=>d===r);return e(S,{children:[e(v,{current:!0,selected:a.test_id,data:a,options:[a]},void 0,!1,{fileName:l,lineNumber:26,columnNumber:7},this),e(v,{selected:r,setSelected:n,data:t,options:m},void 0,!1,{fileName:l,lineNumber:27,columnNumber:7},this)]},void 0,!0,{fileName:l,lineNumber:25,columnNumber:5},this)}const v=o=>{const{data:a={},selected:m,setSelected:r,options:n=[],current:t}=o,{grade_overall:d,start_time:g,grade_sides:p}=a,_=n.map(i=>({label:e(c,{test_id:i.test_id,start_time:i.start_time},void 0,!1,{fileName:l,lineNumber:49,columnNumber:12},void 0),value:i.test_id})),h=[{label:"Front",image:"image_front",grade:"grade_front"},{label:"Back",image:"image_back",grade:"grade_back"}],y=[{label:"Top",image:"image_top",grade:"grade_top"},{label:"Bottom",image:"image_bottom",grade:"grade_bottom"},{label:"Left",image:"image_left",grade:"grade_left"},{label:"Right",image:"image_right",grade:"grade_right"}],T=[{key:"test_id",label:"Test ID"},{key:"start_time",label:"Start Time"},{key:"end_time",label:"End Time"},{key:"elapsed_time",label:"Elapsed Time"},{key:"test_profile",label:"Test Profile"}],C=h.map(i=>b(a,i)),B=y.map(i=>b(a,i));return e(k,{children:e(x,{style:{minHeight:"50vh",textAlign:"left",gap:"2rem"},children:[t?e(G,{children:[e(c,{test_id:"Current",start_time:g},void 0,!1,{fileName:l,lineNumber:81,columnNumber:13},void 0),e(F,{},void 0,!1)]},void 0,!0,{fileName:l,lineNumber:80,columnNumber:11},void 0):e(E,{style:{borderBottom:"1px solid rgb(216, 216, 216)",paddingBottom:"0.5rem",marginBottom:"1rem"},disabled:t,bordered:!1,options:_,onSelect:r,value:m},void 0,!1,{fileName:l,lineNumber:85,columnNumber:11},void 0),e("div",{children:[e(s,{level:3,children:"Details"},void 0,!1,{fileName:l,lineNumber:100,columnNumber:11},void 0),T.map(({label:i,key:u})=>e("div",{style:{marginBottom:"1rem"},children:e("h4",{children:[e("b",{children:i},void 0,!1,{fileName:l,lineNumber:104,columnNumber:17},void 0),e("br",{},void 0,!1,{fileName:l,lineNumber:105,columnNumber:17},void 0),e("span",{children:a[u]||"-"},void 0,!1,{fileName:l,lineNumber:106,columnNumber:17},void 0)]},void 0,!0,{fileName:l,lineNumber:103,columnNumber:15},void 0)},u,!1,{fileName:l,lineNumber:102,columnNumber:13},void 0))]},void 0,!0,{fileName:l,lineNumber:99,columnNumber:9},void 0),e("div",{children:[e(s,{level:3,style:{marginBottom:0},children:"Overall Grade"},void 0,!1,{fileName:l,lineNumber:113,columnNumber:11},void 0),e(N,{children:d||"-"},void 0,!1,{fileName:l,lineNumber:116,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:112,columnNumber:9},void 0),C.map(i=>e(f,{...i},i.label,!1,{fileName:l,lineNumber:120,columnNumber:11},void 0)),e(I,{style:{marginTop:0}},void 0,!1,{fileName:l,lineNumber:122,columnNumber:9},void 0),e("div",{children:[e(s,{level:3,style:{marginBottom:0},children:"Sides Grade"},void 0,!1,{fileName:l,lineNumber:125,columnNumber:11},void 0),e(N,{children:p||"-"},void 0,!1,{fileName:l,lineNumber:128,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:124,columnNumber:9},void 0),B.map(i=>e(f,{...i},i.label,!1,{fileName:l,lineNumber:132,columnNumber:11},void 0))]},void 0,!0,{fileName:l,lineNumber:78,columnNumber:7},void 0)},void 0,!1,{fileName:l,lineNumber:77,columnNumber:5},void 0)};export{v as TelusCompareDetail,A as default};
