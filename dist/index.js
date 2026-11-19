"use strict";var k=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var R=k(function(T,O){
function E(e,a,v,i,t,c,r,s,f){var n,u,g,x,q,o,P,j;for(n=v.data,u=r.data,g=v.accessors[0],q=r.accessors[0],x=r.accessors[1],o=t,P=f,j=0;j<e;j++)x(u,P,a*g(n,o)+c*q(u,P)),o+=i,P+=s;return r}O.exports=E
});var M=k(function(U,z){
var w=require('@stdlib/array-base-arraylike2object/dist'),F=require('@stdlib/blas-base-gaxpy/dist').ndarray,G=require('@stdlib/blas-base-gscal/dist').ndarray,H=R(),m=5;function I(e,a,v,i,t,c,r,s,f){var n,u,g,x,q,o;if(e<=0)return r;if(a===0)return G(e,c,r,s,f);if(c===1)return F(e,a,v,i,t,r,s,f);if(g=w(v),x=w(r),g.accessorProtocol||x.accessorProtocol)return H(e,a,g,i,t,c,x,s,f),r;if(n=t,u=f,i===1&&s===1){if(q=e%m,q>0)for(o=0;o<q;o++)r[u]=a*v[n]+c*r[u],n+=i,u+=s;if(e<m)return r;for(o=q;o<e;o+=m)r[u]=a*v[n]+c*r[u],r[u+1]=a*v[n+1]+c*r[u+1],r[u+2]=a*v[n+2]+c*r[u+2],r[u+3]=a*v[n+3]+c*r[u+3],r[u+4]=a*v[n+4]+c*r[u+4],n+=m,u+=m;return r}for(o=0;o<e;o++)r[u]=a*v[n]+c*r[u],n+=i,u+=s;return r}z.exports=I
});var C=k(function(V,B){
var A=require('@stdlib/strided-base-stride2offset/dist'),J=M();function K(e,a,v,i,t,c,r){return J(e,a,v,i,A(e,i),t,c,r,A(e,r))}B.exports=K
});var L=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),D=C(),Q=M();L(D,"ndarray",Q);module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
