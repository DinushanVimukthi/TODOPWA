if(!self.define){let n,e={};const i=(i,c)=>(i=new URL(i+".js",c).href,e[i]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=e,document.head.appendChild(n)}else n=i,importScripts(i),e()})).then((()=>{let n=e[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(c,s)=>{const l=n||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const r=n=>i(n,l),f={module:{uri:l},exports:o,require:r};e[l]=Promise.all(c.map((n=>f[n]||r(n)))).then((n=>(s(...n),o)))}}define(["./workbox-8a99996d"],(function(n){"use strict";n.setCacheNameDetails({prefix:"todo-project"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"css/189.6ae01867.css",revision:null},{url:"css/534.1fcb2b48.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.b264cb36.css",revision:null},{url:"favicon.ico",revision:"eb66525fd20b00f9cb50d5837e04b25d"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.824b570f.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.97b9b185.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"ffa250509a6acc085055b19dbbbee467"},{url:"icons/apple-icon-152x152.png",revision:"836b5f9d168f5c126d0a9b4e2d31fef5"},{url:"icons/apple-icon-167x167.png",revision:"3559ff4d9f2cbeba1a13f6af8087f034"},{url:"icons/apple-icon-180x180.png",revision:"879a92bef86501f21225215598660ec2"},{url:"icons/apple-launch-1125x2436.png",revision:"443ae397ee0b7c0ed960923c7587e3b7"},{url:"icons/apple-launch-1170x2532.png",revision:"a685878148e25dcd342b1d62922ac29f"},{url:"icons/apple-launch-1242x2208.png",revision:"8aee070cd5365e6ce42e083c6f85fd97"},{url:"icons/apple-launch-1242x2688.png",revision:"7f13051709907b7f5cdf99903ca5ba5d"},{url:"icons/apple-launch-1284x2778.png",revision:"c5d6f57e27fd7821631978a0a06e457b"},{url:"icons/apple-launch-1536x2048.png",revision:"9199ca77c90ee3ba0e4421f9d64fb1ca"},{url:"icons/apple-launch-1620x2160.png",revision:"4d4f76e7a2e7fbc6f88c6906cc2cbe90"},{url:"icons/apple-launch-1668x2224.png",revision:"55cf429d782a5540fd741dcc7e84926f"},{url:"icons/apple-launch-1668x2388.png",revision:"831e15c87205a6882ea08c573285cc72"},{url:"icons/apple-launch-2048x2732.png",revision:"5902958239082ee994dc71a3eaeb011d"},{url:"icons/apple-launch-750x1334.png",revision:"64c4d79649d9294cc7cf1ccfb18d4d29"},{url:"icons/apple-launch-828x1792.png",revision:"797099c896f7a2f772a3db5f27fe1768"},{url:"icons/favicon-128x128.png",revision:"36027b09ba0e7d9bb6d3253e8e15ef2c"},{url:"icons/favicon-16x16.png",revision:"2dd4d52f6ad1ebbfa5c23dca7c8e3dae"},{url:"icons/favicon-32x32.png",revision:"02515d581eafb2d40d3dc646658b9b28"},{url:"icons/favicon-96x96.png",revision:"c567c133d728ef378782b912b0800766"},{url:"icons/icon-128x128.png",revision:"36027b09ba0e7d9bb6d3253e8e15ef2c"},{url:"icons/icon-192x192.png",revision:"3f8c2a5b87e846ea1e568dfff47444f7"},{url:"icons/icon-256x256.png",revision:"8941c99188ce7cb220108487a467e7f9"},{url:"icons/icon-384x384.png",revision:"1f7c2ba9163cd1a6abd02249a39cc765"},{url:"icons/icon-512x512.png",revision:"c25886599c9a82e2da4937645330ab73"},{url:"icons/ms-icon-144x144.png",revision:"660fe056efe8225961671500d2992000"},{url:"icons/safari-pinned-tab.svg",revision:"849f7d2b7a4939a34a28d97dbd238fd6"},{url:"index.html",revision:"5e4470da34cf1d7779c7ce6301b39b2d"},{url:"js/189.087ed8a7.js",revision:null},{url:"js/431.5e648272.js",revision:null},{url:"js/534.ab4bbc05.js",revision:null},{url:"js/57.65e1fb77.js",revision:null},{url:"js/880.93d143e1.js",revision:null},{url:"js/app.ecbae71b.js",revision:null},{url:"js/vendor.b58e8848.js",revision:null},{url:"manifest.json",revision:"e4119f9d2a7b385d527d7dfd2e9e67fc"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
