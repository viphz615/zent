webpackJsonp([2],{798:function(s,n,a){"use strict";function t(s){return s&&s.__esModule?s:{default:s}}function e(s){return E.default.createElement(s.tag,(0,c.default)({},s.attributes,{dangerouslySetInnerHTML:{__html:s.html}}))}function l(s){return E.default.createElement(e,{tag:"section",html:s.html})}function r(s){return E.default.createElement(e,{tag:"style",html:s.style})}var p=a(12),c=t(p),d=a(803),i=t(d),o=a(317),h=t(o),u=a(15),j=t(u),f=a(1),m=t(f),g=a(2),y=t(g),v=a(5),b=t(v),w=a(4),k=t(w),_=a(3),D=t(_),T=a(0),E=t(T),C=a(177),x=function(){var s=[{id:1,title:"杭州有赞科技有限公司",children:[{id:2,title:"技术",children:[{id:3,title:"后端"},{id:4,title:"运维"},{id:5,title:"前端"}]},{id:6,title:"产品"}]}];return E.default.createElement(C.Tree,{data:s})}(),I=function(){var s=[{id:1,title:"杭州有赞科技有限公司"},{id:2,title:"技术",parentId:1},{id:3,title:"后端",parentId:2},{id:4,title:"运维",parentId:2},{id:5,title:"前端",parentId:2},{id:6,title:"产品",parentId:1}];return E.default.createElement(C.Tree,{dataType:"plain",data:s})}(),z=function(){var s=[{id:1,title:"杭州有赞科技有限公司",children:[{id:2,title:"技术",children:[{id:3,title:"后端"},{id:4,title:"运维"},{id:5,title:"前端"}]},{id:6,title:"产品"}]}];return E.default.createElement("div",null,E.default.createElement(C.Tree,{data:s,size:"small"}),E.default.createElement(C.Tree,{data:s}),E.default.createElement(C.Tree,{data:s,size:"large"}))}(),R=function(){var s=[{id:1,title:"杭州有赞科技有限公司",content:"移动零售服务商",children:[{id:2,title:"技术",content:"职位介绍http://job.youzan.com",children:[{id:3,title:"后端"},{id:4,title:"运维"},{id:5,title:"前端"}]},{id:6,title:"产品",content:E.default.createElement("a",{href:"http://job.youzan.com"},"请将简历发送至 joinus@youzan.com")}]}],n=function(s){return E.default.createElement("span",{style:{fontSize:16,margin:0,lineHeight:1}},s.title,s.content?E.default.createElement("small",{style:{display:"block",fontSize:10}},s.content):"")};return E.default.createElement(C.Tree,{data:s,render:n})}(),S=function(){var s=C.Radio.Group,n=[{id:1,title:"杭州有赞科技有限公司"},{id:2,title:"技术",parentId:1},{id:3,title:"后端",parentId:2},{id:4,title:"运维",parentId:2},{id:5,title:"前端",parentId:2},{id:6,title:"产品",parentId:1}],a=function s(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],e={id:String(Math.random()).replace("0.",""),parentId:a,title:n.title};t.push(e);for(var l=0,r=n.children&&n.children.length||0;l<r;l++)s(n.children[l],e.id,t);return t},t=function(t){function e(){var s,t,l,r;(0,y.default)(this,e);for(var p=arguments.length,c=Array(p),d=0;d<p;d++)c[d]=arguments[d];return t=l=(0,k.default)(this,(s=e.__proto__||(0,m.default)(e)).call.apply(s,[this].concat(c))),l.state={treeData:n,copyType:"shallow"},l.onDelete=function(s){l.setState({treeData:l.state.treeData.filter(function(n){return n.id!==s.id})})},l.onClone=function(s){var n=l.state.copyType;if("shallow"===n){var t=(0,j.default)({},s,{id:Date.now()});l.setState({treeData:[].concat((0,h.default)(l.state.treeData),[t])})}else if("deep"===n){var e=a(s,s.parentId);l.setState({treeData:[].concat((0,h.default)(l.state.treeData),(0,h.default)(e))})}},l.onCopyTypeChange=function(s){return l.setState({copyType:s.target.value})},r=t,(0,k.default)(l,r)}return(0,D.default)(e,t),(0,b.default)(e,[{key:"render",value:function(){var n=this.state,a=n.copyType,t=n.treeData,e=[{name:"Delete",icon:E.default.createElement(C.Icon,{type:"close"}),action:this.onDelete},{name:"Clone",icon:E.default.createElement(C.Icon,{type:"plus"}),action:this.onClone}];return E.default.createElement("div",null,E.default.createElement(s,{onChange:this.onCopyTypeChange,value:a},E.default.createElement(C.Radio,{value:"shallow"},"浅拷贝"),E.default.createElement(C.Radio,{value:"deep"},"深拷贝")),E.default.createElement("hr",null),E.default.createElement(C.Tree,{data:t,dataType:"plain",operations:e}))}}]),e}(E.default.Component);return E.default.createElement(t,null)}(),M=function(){var s=[{id:1,title:"杭州有赞科技有限公司",children:[{id:2,title:"技术",children:[{id:3,title:"后端"},{id:4,title:"运维"},{id:5,title:"前端"}]},{id:6,title:"产品"}]}],n=[2,3],a=[4,5],t=function(s){return console.log(s)};return E.default.createElement(C.Tree,{checkable:!0,data:s,onCheck:t,defaultCheckedKeys:n,disabledCheckedKeys:a})}(),N=function(){var s=function(s,n){s.level<4?setTimeout(function(){for(var a=[],t=Number(s.title.split("-")[0]),e=Math.pow(10,3-s.level),l=s.level+1,r=0,p="",c=!1;r<=9;r++)4===l?(p=String(t+r),c=!0):(p=t+e*r+"-"+(t+e*(r+1)),c=!1),a.push({id:p,level:l,title:p,isLeaf:c});n(a)},200):setTimeout(function(){return n([])},200)},n=function(n){function a(){var n,t,e,l;(0,y.default)(this,a);for(var r=arguments.length,p=Array(r),d=0;d<r;d++)p[d]=arguments[d];return t=e=(0,k.default)(this,(n=a.__proto__||(0,m.default)(a)).call.apply(n,[this].concat(p))),e.state={treeData:[]},e.loadMore=function(n){return new i.default(function(a,t){s(n,function(s){var t=s.map(function(s){return(0,c.default)({},s,{parentId:n.id})});e.setState({treeData:[].concat((0,h.default)(e.state.treeData),(0,h.default)(t))}),a()})})},l=t,(0,k.default)(e,l)}return(0,D.default)(a,n),(0,b.default)(a,[{key:"componentDidMount",value:function(){var n=this,a={id:"1-0-10000",title:"0-10000",level:0,expand:!0};s(a,function(s){var t=s.map(function(s){return(0,c.default)({},s,{parentId:a.id})});n.setState({treeData:[a].concat((0,h.default)(t))})})}},{key:"render",value:function(){var s=this.state.treeData;return E.default.createElement(C.Tree,{dataType:"plain",data:s,loadMore:this.loadMore})}}]),a}(E.default.Component);return E.default.createElement(n,null)}(),P=function(s){function n(){var s,a,t,e;(0,y.default)(this,n);for(var l=arguments.length,r=Array(l),p=0;p<l;p++)r[p]=arguments[p];return a=t=(0,k.default)(this,(s=n.__proto__||(0,m.default)(n)).call.apply(s,[this].concat(r))),t.state={showCode:!0},t.toggle=function(){t.setState({showCode:!t.state.showCode})},e=a,(0,k.default)(t,e)}return(0,D.default)(n,s),(0,b.default)(n,[{key:"render",value:function(){var s=this.state.showCode,n=this.props,a=n.title,t=n.src,l=n.demo;return E.default.createElement("div",{className:"zandoc-react-demo"},E.default.createElement("div",{className:"zandoc-react-demo__preview"},l),E.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},E.default.createElement("i",{className:"zenticon zenticon-right zandoc-react-demo__toggle "+(s?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")}),E.default.createElement(e,{tag:"div",attributes:{className:"zandoc-react-demo__title"},html:a})),s&&E.default.createElement(e,{tag:"pre",html:t,attributes:{className:"zandoc-react-demo__code"}}))}}]),n}(T.Component);s.exports=function(s){function n(){return(0,y.default)(this,n),(0,k.default)(this,(n.__proto__||(0,m.default)(n)).apply(this,arguments))}return(0,D.default)(n,s),(0,b.default)(n,[{key:"render",value:function(){return E.default.createElement("div",{className:"zandoc-react-container "},E.default.createElement(r,{style:""}),E.default.createElement(l,{html:'<h2 id="tree -shu"><a href="#tree%20-shu">¶</a>Tree 树</h2>\n<p>树形控件，展示文件结构、组织架构、地理信息等分层数据的控件。</p>\n<h3 id="shi-yong-zhi-nan"><a href="#shi-yong-zhi-nan">¶</a>使用指南</h3>\n<ul>\n<li>支持两种数据格式，递归树形结构和单层列表结构。</li>\n<li>组件展示对应传入的data属性，内部不会改变data，具体请看自定义操作的例子。</li>\n</ul>\n<h3 id="dai-ma-yan-shi"><a href="#dai-ma-yan-shi">¶</a>代码演示</h3>'}),E.default.createElement(P,{title:"<p>基础用法</p>",src:'<span class="hljs-keyword">import</span> { Tree } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-keyword">const</span> treeData = [{\n  <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'杭州有赞科技有限公司\'</span>,\n  <span class="hljs-attr">children</span>: [{\n    <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,\n    <span class="hljs-attr">title</span>: <span class="hljs-string">\'技术\'</span>,\n    <span class="hljs-attr">children</span>: [{\n      <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'后端\'</span>\n    }, {\n      <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'运维\'</span>\n    }, {\n      <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'前端\'</span>\n    }]\n  }, {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,\n    <span class="hljs-attr">title</span>: <span class="hljs-string">\'产品\'</span>\n  }]\n}];\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tree</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{treeData}</span> /&gt;</span>\n  , mountNode\n);</span>',demo:x}),E.default.createElement(P,{title:"<p>列表格式数据源</p>",src:'<span class="hljs-keyword">import</span> { Tree } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-keyword">const</span> treeData = [{\n  <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'杭州有赞科技有限公司\'</span>,\n}, {\n  <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'技术\'</span>,\n  <span class="hljs-attr">parentId</span>: <span class="hljs-number">1</span>\n}, {\n  <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'后端\'</span>,\n  <span class="hljs-attr">parentId</span>: <span class="hljs-number">2</span>\n}, {\n  <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'运维\'</span>,\n  <span class="hljs-attr">parentId</span>: <span class="hljs-number">2</span>\n}, {\n  <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'前端\'</span>,\n  <span class="hljs-attr">parentId</span>: <span class="hljs-number">2</span>\n}, {\n  <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'产品\'</span>,\n  <span class="hljs-attr">parentId</span>: <span class="hljs-number">1</span>\n}];\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tree</span> <span class="hljs-attr">dataType</span>=<span class="hljs-string">"plain"</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{treeData}</span> /&gt;</span>\n  , mountNode\n)</span>',demo:I}),E.default.createElement(P,{title:"<p>三种大小</p>",src:'<span class="hljs-keyword">import</span> { Tree } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-keyword">const</span> treeData = [{\n  <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'杭州有赞科技有限公司\'</span>,\n  <span class="hljs-attr">children</span>: [{\n    <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,\n    <span class="hljs-attr">title</span>: <span class="hljs-string">\'技术\'</span>,\n    <span class="hljs-attr">children</span>: [{\n      <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'后端\'</span>\n    }, {\n      <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'运维\'</span>\n    }, {\n      <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'前端\'</span>\n    }]\n  }, {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,\n    <span class="hljs-attr">title</span>: <span class="hljs-string">\'产品\'</span>\n  }]\n}];\n\nReactDOM.render(\n  &lt;div&gt;\n    &lt;Tree data={treeData} size="small" /&gt;\n    &lt;Tree data={treeData} /&gt;\n    &lt;Tree data={treeData} size="large" /&gt;\n  &lt;/div&gt;\n  , mountNode\n);',demo:z}),E.default.createElement(P,{title:"<p>自定义节点展示</p>",src:'<span class="hljs-keyword">import</span> { Tree } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-keyword">const</span> treeData = [{\n  <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'杭州有赞科技有限公司\'</span>,\n  <span class="hljs-attr">content</span>: <span class="hljs-string">\'移动零售服务商\'</span>,\n  <span class="hljs-attr">children</span>: [{\n    <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,\n    <span class="hljs-attr">title</span>: <span class="hljs-string">\'技术\'</span>,\n    <span class="hljs-attr">content</span>: <span class="hljs-string">\'职位介绍http://job.youzan.com\'</span>,\n    <span class="hljs-attr">children</span>: [{\n      <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'后端\'</span>\n    }, {\n      <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'运维\'</span>\n    }, {\n      <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'前端\'</span>\n    }]\n  }, {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,\n    <span class="hljs-attr">title</span>: <span class="hljs-string">\'产品\'</span>,\n    <span class="hljs-attr">content</span>: <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"http://job.youzan.com"</span>&gt;</span>请将简历发送至 joinus@youzan.com<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>,\n  }]\n}];\n\n<span class="hljs-keyword">const</span> customRender = <span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> (\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">fontSize:</span> <span class="hljs-attr">16</span>, <span class="hljs-attr">margin:</span> <span class="hljs-attr">0</span>, <span class="hljs-attr">lineHeight:</span> <span class="hljs-attr">1</span> }}&gt;</span>\n    {data.title}\n    {data.content ? <span class="hljs-tag">&lt;<span class="hljs-name">small</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">display:</span> \'<span class="hljs-attr">block</span>\', <span class="hljs-attr">fontSize:</span> <span class="hljs-attr">10</span> }}&gt;</span>{data.content}<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span> : \'\'}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>\n);\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tree</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{treeData}</span> <span class="hljs-attr">render</span>=<span class="hljs-string">{customRender}</span> /&gt;</span>\n  , mountNode\n)</span>',demo:R}),E.default.createElement(P,{title:"<p>自定义操作</p>",src:'<span class="hljs-keyword">import</span> { Tree, Icon, Radio } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-keyword">const</span> RadioGroup = Radio.Group;\n<span class="hljs-keyword">const</span> originData = [{\n  <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'杭州有赞科技有限公司\'</span>,\n}, {\n  <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'技术\'</span>,\n  <span class="hljs-attr">parentId</span>: <span class="hljs-number">1</span>\n}, {\n  <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'后端\'</span>,\n  <span class="hljs-attr">parentId</span>: <span class="hljs-number">2</span>\n}, {\n  <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'运维\'</span>,\n  <span class="hljs-attr">parentId</span>: <span class="hljs-number">2</span>\n}, {\n  <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'前端\'</span>,\n  <span class="hljs-attr">parentId</span>: <span class="hljs-number">2</span>\n}, {\n  <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'产品\'</span>,\n  <span class="hljs-attr">parentId</span>: <span class="hljs-number">1</span>\n}];\n\n<span class="hljs-keyword">const</span> deepClone = <span class="hljs-function">(<span class="hljs-params">node, parentId = <span class="hljs-number">0</span>, nodeArray = []</span>) =&gt;</span> {\n  <span class="hljs-keyword">const</span> copyNode = {\n    <span class="hljs-attr">id</span>: <span class="hljs-built_in">String</span>(<span class="hljs-built_in">Math</span>.random()).replace(<span class="hljs-string">\'0.\'</span>, <span class="hljs-string">\'\'</span>),\n    parentId,\n    <span class="hljs-attr">title</span>: node.title\n  };\n  nodeArray.push(copyNode);\n  \n  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>, l = node.children &amp;&amp; node.children.length || <span class="hljs-number">0</span>; i &lt; l; i++) {\n    deepClone(node.children[i], copyNode.id, nodeArray);\n  }\n  <span class="hljs-keyword">return</span> nodeArray;\n}\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">TreeExample</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{\n  state = {\n    <span class="hljs-attr">treeData</span>: originData,\n    <span class="hljs-attr">copyType</span>: <span class="hljs-string">\'shallow\'</span> \n  }\n\n  onDelete = <span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> {\n    <span class="hljs-keyword">this</span>.setState({\n      <span class="hljs-attr">treeData</span>: <span class="hljs-keyword">this</span>.state.treeData.filter(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.id !== data.id)\n    });\n  };\n\n  onClone = <span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> {\n    <span class="hljs-keyword">const</span> { copyType } = <span class="hljs-keyword">this</span>.state;\n  \n    <span class="hljs-keyword">if</span> (copyType === <span class="hljs-string">\'shallow\'</span>) {\n      <span class="hljs-keyword">const</span> node = <span class="hljs-built_in">Object</span>.assign({}, data, { <span class="hljs-attr">id</span>: <span class="hljs-built_in">Date</span>.now() });\n      <span class="hljs-keyword">this</span>.setState({\n        <span class="hljs-attr">treeData</span>: [...this.state.treeData, node]\n      });\n    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (copyType === <span class="hljs-string">\'deep\'</span>) {\n      <span class="hljs-keyword">const</span> nodeArray = deepClone(data, data.parentId);\n      <span class="hljs-keyword">this</span>.setState({\n        <span class="hljs-attr">treeData</span>: [...this.state.treeData, ...nodeArray]\n      });\n    }\n  };\n\n  onCopyTypeChange = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> <span class="hljs-keyword">this</span>.setState({ <span class="hljs-attr">copyType</span>: e.target.value });\n\n  render() {\n    <span class="hljs-keyword">const</span> { copyType, treeData } = <span class="hljs-keyword">this</span>.state;\n    <span class="hljs-keyword">const</span> operations = [{\n      <span class="hljs-attr">name</span>: <span class="hljs-string">\'Delete\'</span>,\n      <span class="hljs-attr">icon</span>: &lt;Icon type="close" /&gt;,\n      action: this.onDelete\n    }, {\n      name: \'Clone\',\n      icon: &lt;Icon type="plus" /&gt;,\n      action: this.onClone\n    }];\n  \n    return (\n      &lt;div&gt;\n        &lt;RadioGroup onChange={this.onCopyTypeChange} value={copyType}&gt;\n          &lt;Radio value="shallow"&gt;浅拷贝&lt;/Radio&gt;\n          &lt;Radio value="deep"&gt;深拷贝&lt;/Radio&gt;\n        &lt;/RadioGroup&gt;\n        &lt;hr/&gt;\n        &lt;Tree data={treeData} dataType="plain" operations={operations} /&gt;\n      &lt;/div&gt;\n    );\n  }\n}\n\nReactDOM.render(\n  &lt;TreeExample /&gt;\n  , mountNode\n)',demo:S}),E.default.createElement(P,{title:"<p>可选树</p>",src:'<span class="hljs-keyword">import</span> { Tree } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-keyword">const</span> treeData = [{\n  <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,\n  <span class="hljs-attr">title</span>: <span class="hljs-string">\'杭州有赞科技有限公司\'</span>,\n  <span class="hljs-attr">children</span>: [{\n    <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,\n    <span class="hljs-attr">title</span>: <span class="hljs-string">\'技术\'</span>,\n    <span class="hljs-attr">children</span>: [{\n      <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'后端\'</span>\n    }, {\n      <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'运维\'</span>\n    }, {\n      <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'前端\'</span>\n    }]\n  }, {\n    <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,\n    <span class="hljs-attr">title</span>: <span class="hljs-string">\'产品\'</span>\n  }]\n}];\n<span class="hljs-keyword">const</span> defaultCheckedKeys = [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>];\n<span class="hljs-keyword">const</span> disabledCheckedKeys = [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>];\n\n<span class="hljs-keyword">const</span> onCheck = <span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(data);\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tree</span>\n    <span class="hljs-attr">checkable</span>\n    <span class="hljs-attr">data</span>=<span class="hljs-string">{treeData}</span>\n    <span class="hljs-attr">onCheck</span>=<span class="hljs-string">{onCheck}</span>\n    <span class="hljs-attr">defaultCheckedKeys</span>=<span class="hljs-string">{defaultCheckedKeys}</span>\n    <span class="hljs-attr">disabledCheckedKeys</span>=<span class="hljs-string">{disabledCheckedKeys}</span>\n  /&gt;</span>\n  , mountNode\n)</span>',demo:M}),E.default.createElement(P,{title:"<p>异步加载</p>",src:'<span class="hljs-keyword">import</span> { Tree } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\n<span class="hljs-keyword">const</span> fetchData = <span class="hljs-function">(<span class="hljs-params">data, callback</span>) =&gt;</span> {\n  <span class="hljs-keyword">if</span> (data.level &lt; <span class="hljs-number">4</span>) {\n    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n      <span class="hljs-keyword">const</span> resData = [];\n      <span class="hljs-keyword">const</span> base = <span class="hljs-built_in">Number</span>(data.title.split(<span class="hljs-string">\'-\'</span>)[<span class="hljs-number">0</span>]);\n      <span class="hljs-keyword">const</span> step = <span class="hljs-built_in">Math</span>.pow(<span class="hljs-number">10</span>, <span class="hljs-number">3</span> - data.level);\n      <span class="hljs-keyword">const</span> level = data.level + <span class="hljs-number">1</span>;\n      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>, id = <span class="hljs-string">\'\'</span>, isLeaf = <span class="hljs-literal">false</span>; i &lt;= <span class="hljs-number">9</span>; i++) {\n        <span class="hljs-keyword">if</span> (level === <span class="hljs-number">4</span>) {\n          id = <span class="hljs-built_in">String</span>(base + i);\n          isLeaf = <span class="hljs-literal">true</span>;\n        } <span class="hljs-keyword">else</span> {\n          id = <span class="hljs-string">`<span class="hljs-subst">${base + step * i}</span>-<span class="hljs-subst">${base + step * (i + <span class="hljs-number">1</span>)}</span>`</span>;\n          isLeaf = <span class="hljs-literal">false</span>;\n        }\n        resData.push({ id, level, <span class="hljs-attr">title</span>: id, isLeaf });\n      }\n      callback(resData);\n    }, <span class="hljs-number">200</span>);\n  } <span class="hljs-keyword">else</span> {\n    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> callback([]), <span class="hljs-number">200</span>);\n  }\n}\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">TreeExample</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{\n  state = {\n    <span class="hljs-attr">treeData</span>: []\n  }\n\n  componentDidMount() {\n    <span class="hljs-keyword">const</span> rootData = {\n      <span class="hljs-attr">id</span>: <span class="hljs-string">\'1-0-10000\'</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">\'0-10000\'</span>,\n      <span class="hljs-attr">level</span>: <span class="hljs-number">0</span>,\n      <span class="hljs-attr">expand</span>: <span class="hljs-literal">true</span>\n    };\n    fetchData(rootData, (resData) =&gt; {\n      <span class="hljs-keyword">const</span> newData = resData.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> ({\n        ...item,\n        <span class="hljs-attr">parentId</span>: rootData.id\n      }));\n      <span class="hljs-keyword">this</span>.setState({\n        <span class="hljs-attr">treeData</span>: [rootData, ...newData]\n      });\n    });\n  }\n\n  loadMore = <span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {\n    fetchData(data, (resData) =&gt; {\n      <span class="hljs-keyword">const</span> newData = resData.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> ({\n        ...item,\n        <span class="hljs-attr">parentId</span>: data.id\n      }));\n      <span class="hljs-keyword">this</span>.setState({ <span class="hljs-attr">treeData</span>: [...this.state.treeData, ...newData] });\n      resolve();\n    });\n  });\n\n  render() {\n    <span class="hljs-keyword">const</span> { treeData } = <span class="hljs-keyword">this</span>.state;\n    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tree</span> <span class="hljs-attr">dataType</span>=<span class="hljs-string">"plain"</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{treeData}</span> <span class="hljs-attr">loadMore</span>=<span class="hljs-string">{this.loadMore}</span> /&gt;</span>;\n  }\n}\n\nReactDOM.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">TreeExample</span> /&gt;</span>\n  , mountNode\n)</span>',demo:N}),E.default.createElement(l,{html:'<h3 id="api"><a href="#api">¶</a>API</h3>\n<h4 id="tree"><a href="#tree">¶</a>Tree</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dataType</td>\n<td>数据类型, 默认为tree类型</td>\n<td>string</td>\n<td><code>\'tree\'</code></td>\n<td><code>\'plain\'</code></td>\n</tr>\n<tr>\n<td>data</td>\n<td>必填, 实际传入的数据, 根据dataType进行识别</td>\n<td>array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>render</td>\n<td>自定义树条目渲染方法, 传入参数为该节点数据 (包含子树)</td>\n<td>func(data)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>operations</td>\n<td>自定义操作, 包含 \n<code>name</code>\n, \n<code>icon</code>\n, \n<code>action</code>\n, \n<code>shouldRender</code>\n 属性</td>\n<td>array\n[\nobject\n]</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>foldable</td>\n<td>是否支持点击条目时展开与收起动作</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td></td>\n</tr>\n<tr>\n<td>checkable</td>\n<td>是否支持checkbox选择</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onCheck</td>\n<td>点击checkbox的回调函数, 传入包含所有点击节点id数组</td>\n<td>func(data)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>defaultCheckedKeys</td>\n<td>默认选中节点id数组</td>\n<td>array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>disabledCheckedKeys</td>\n<td>默认禁选节点id数组</td>\n<td>array</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>size</td>\n<td>大小</td>\n<td>string</td>\n<td><code>\'medium\'</code></td>\n<td><code>\'small\'</code>\n, \n<code>\'large\'</code></td>\n</tr>\n<tr>\n<td>commonStyle</td>\n<td>设置整个tree的外层style</td>\n<td>object</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>expandAll</td>\n<td>是否展开所有节点</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onExpand</td>\n<td>展开节点之后的回调函数</td>\n<td>func(data, config)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>autoExpandOnSelect</td>\n<td>点击节点是否展开</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onSelect</td>\n<td>选择树的一个节点的回调函数</td>\n<td>func(data, target)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>isRoot</td>\n<td>plain数据类型，判断节点是否为根节点的api</td>\n<td>func(node)</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 id="data"><a href="#data">¶</a>data</h4>\n<p>可在每个节点任意添加初下列属性之外的key-value，回调函数中会拿到用户传入的完整数据。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>必填, 数据的唯一标识</td>\n<td>number/string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td>必填, 显示内容</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>children</td>\n<td>子树 (\n<code>dataType="tree"</code>\n 时生效)</td>\n<td>array\n[\nobject\n]</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>parentId</td>\n<td>父节点Id (\n<code>dataType="plain"</code>\n 时生效), 根节点为0或不定义</td>\n<td>number/string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>expand</td>\n<td>是否展开</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>isLeaf</td>\n<td>是否叶子节点</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 id="operations"><a href="#operations">¶</a>operations</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>必填，显示内容</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>显示icon的className, 或ReactNode</td>\n<td>string／ReactNode</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>action</td>\n<td>必填，点击回调函数，参数为子树信息</td>\n<td>func(data)</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>shouldRender</td>\n<td>是否更新，返回true/false</td>\n<td>func(data)</td>\n<td><code>true</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),n}(T.Component)},802:function(s,n,a){var t,e,l,r=a(116),p=a(807),c=a(309),d=a(178),i=a(36),o=i.process,h=i.setImmediate,u=i.clearImmediate,j=i.MessageChannel,f=0,m={},g=function(){var s=+this;if(m.hasOwnProperty(s)){var n=m[s];delete m[s],n()}},y=function(s){g.call(s.data)};h&&u||(h=function(s){for(var n=[],a=1;arguments.length>a;)n.push(arguments[a++]);return m[++f]=function(){p("function"==typeof s?s:Function(s),n)},t(f),f},u=function(s){delete m[s]},"process"==a(117)(o)?t=function(s){o.nextTick(r(g,s,1))}:j?(e=new j,l=e.port2,e.port1.onmessage=y,t=r(l.postMessage,l,1)):i.addEventListener&&"function"==typeof postMessage&&!i.importScripts?(t=function(s){i.postMessage(s+"","*")},i.addEventListener("message",y,!1)):t="onreadystatechange"in d("script")?function(s){c.appendChild(d("script")).onreadystatechange=function(){c.removeChild(this),g.call(s)}}:function(s){setTimeout(r(g,s,1),0)}),s.exports={set:h,clear:u}},803:function(s,n,a){s.exports={default:a(804),__esModule:!0}},804:function(s,n,a){a(314),a(180),a(315),a(812),s.exports=a(24).Promise},805:function(s,n){s.exports=function(s,n,a,t){if(!(s instanceof n)||void 0!==t&&t in s)throw TypeError(a+": incorrect invocation!");return s}},806:function(s,n,a){var t=a(116),e=a(311),l=a(310),r=a(58),p=a(179),c=a(313),d={},i={},n=s.exports=function(s,n,a,o,h){var u,j,f,m,g=h?function(){return s}:c(s),y=t(a,o,n?2:1),v=0;if("function"!=typeof g)throw TypeError(s+" is not iterable!");if(l(g)){for(u=p(s.length);u>v;v++)if((m=n?y(r(j=s[v])[0],j[1]):y(s[v]))===d||m===i)return m}else for(f=g.call(s);!(j=f.next()).done;)if((m=e(f,y,j.value,n))===d||m===i)return m};n.BREAK=d,n.RETURN=i},807:function(s,n){s.exports=function(s,n,a){var t=void 0===a;switch(n.length){case 0:return t?s():s.call(a);case 1:return t?s(n[0]):s.call(a,n[0]);case 2:return t?s(n[0],n[1]):s.call(a,n[0],n[1]);case 3:return t?s(n[0],n[1],n[2]):s.call(a,n[0],n[1],n[2]);case 4:return t?s(n[0],n[1],n[2],n[3]):s.call(a,n[0],n[1],n[2],n[3])}return s.apply(a,n)}},808:function(s,n,a){var t=a(36),e=a(802).set,l=t.MutationObserver||t.WebKitMutationObserver,r=t.process,p=t.Promise,c="process"==a(117)(r);s.exports=function(){var s,n,a,d=function(){var t,e;for(c&&(t=r.domain)&&t.exit();s;){e=s.fn,s=s.next;try{e()}catch(t){throw s?a():n=void 0,t}}n=void 0,t&&t.enter()};if(c)a=function(){r.nextTick(d)};else if(l){var i=!0,o=document.createTextNode("");new l(d).observe(o,{characterData:!0}),a=function(){o.data=i=!i}}else if(p&&p.resolve){var h=p.resolve();a=function(){h.then(d)}}else a=function(){e.call(t,d)};return function(t){var e={fn:t,next:void 0};n&&(n.next=e),s||(s=e,a()),n=e}}},809:function(s,n,a){var t=a(59);s.exports=function(s,n,a){for(var e in n)a&&s[e]?s[e]=n[e]:t(s,e,n[e]);return s}},810:function(s,n,a){"use strict";var t=a(36),e=a(24),l=a(38),r=a(46),p=a(30)("species");s.exports=function(s){var n="function"==typeof e[s]?e[s]:t[s];r&&n&&!n[p]&&l.f(n,p,{configurable:!0,get:function(){return this}})}},811:function(s,n,a){var t=a(58),e=a(307),l=a(30)("species");s.exports=function(s,n){var a,r=t(s).constructor;return void 0===r||void 0==(a=t(r)[l])?n:e(a)}},812:function(s,n,a){"use strict";var t,e,l,r=a(118),p=a(36),c=a(116),d=a(308),i=a(37),o=a(73),h=a(307),u=a(805),j=a(806),f=a(811),m=a(802).set,g=a(808)(),y=p.TypeError,v=p.process,b=p.Promise,v=p.process,w="process"==d(v),k=function(){},_=!!function(){try{var s=b.resolve(1),n=(s.constructor={})[a(30)("species")]=function(s){s(k,k)};return(w||"function"==typeof PromiseRejectionEvent)&&s.then(k)instanceof n}catch(s){}}(),D=function(s,n){return s===n||s===b&&n===l},T=function(s){var n;return!(!o(s)||"function"!=typeof(n=s.then))&&n},E=function(s){return D(b,s)?new C(s):new e(s)},C=e=function(s){var n,a;this.promise=new s(function(s,t){if(void 0!==n||void 0!==a)throw y("Bad Promise constructor");n=s,a=t}),this.resolve=h(n),this.reject=h(a)},x=function(s){try{s()}catch(s){return{error:s}}},I=function(s,n){if(!s._n){s._n=!0;var a=s._c;g(function(){for(var t=s._v,e=1==s._s,l=0;a.length>l;)!function(n){var a,l,r=e?n.ok:n.fail,p=n.resolve,c=n.reject,d=n.domain;try{r?(e||(2==s._h&&S(s),s._h=1),r===!0?a=t:(d&&d.enter(),a=r(t),d&&d.exit()),a===n.promise?c(y("Promise-chain cycle")):(l=T(a))?l.call(a,p,c):p(a)):c(t)}catch(s){c(s)}}(a[l++]);s._c=[],s._n=!1,n&&!s._h&&z(s)})}},z=function(s){m.call(p,function(){var n,a,t,e=s._v;if(R(s)&&(n=x(function(){w?v.emit("unhandledRejection",e,s):(a=p.onunhandledrejection)?a({promise:s,reason:e}):(t=p.console)&&t.error&&t.error("Unhandled promise rejection",e)}),s._h=w||R(s)?2:1),s._a=void 0,n)throw n.error})},R=function(s){if(1==s._h)return!1;for(var n,a=s._a||s._c,t=0;a.length>t;)if(n=a[t++],n.fail||!R(n.promise))return!1;return!0},S=function(s){m.call(p,function(){var n;w?v.emit("rejectionHandled",s):(n=p.onrejectionhandled)&&n({promise:s,reason:s._v})})},M=function(s){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=s,n._s=2,n._a||(n._a=n._c.slice()),I(n,!0))},N=function(s){var n,a=this;if(!a._d){a._d=!0,a=a._w||a;try{if(a===s)throw y("Promise can't be resolved itself");(n=T(s))?g(function(){var t={_w:a,_d:!1};try{n.call(s,c(N,t,1),c(M,t,1))}catch(s){M.call(t,s)}}):(a._v=s,a._s=1,I(a,!1))}catch(s){M.call({_w:a,_d:!1},s)}}};_||(b=function(s){u(this,b,"Promise","_h"),h(s),t.call(this);try{s(c(N,this,1),c(M,this,1))}catch(s){M.call(this,s)}},t=function(s){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},t.prototype=a(809)(b.prototype,{then:function(s,n){var a=E(f(this,b));return a.ok="function"!=typeof s||s,a.fail="function"==typeof n&&n,a.domain=w?v.domain:void 0,this._c.push(a),this._a&&this._a.push(a),this._s&&I(this,!1),a.promise},catch:function(s){return this.then(void 0,s)}}),C=function(){var s=new t;this.promise=s,this.resolve=c(N,s,1),this.reject=c(M,s,1)}),i(i.G+i.W+i.F*!_,{Promise:b}),a(119)(b,"Promise"),a(810)("Promise"),l=a(24).Promise,i(i.S+i.F*!_,"Promise",{reject:function(s){var n=E(this);return(0,n.reject)(s),n.promise}}),i(i.S+i.F*(r||!_),"Promise",{resolve:function(s){if(s instanceof b&&D(s.constructor,this))return s;var n=E(this);return(0,n.resolve)(s),n.promise}}),i(i.S+i.F*!(_&&a(312)(function(s){b.all(s).catch(k)})),"Promise",{all:function(s){var n=this,a=E(n),t=a.resolve,e=a.reject,l=x(function(){var a=[],l=0,r=1;j(s,!1,function(s){var p=l++,c=!1;a.push(void 0),r++,n.resolve(s).then(function(s){c||(c=!0,a[p]=s,--r||t(a))},e)}),--r||t(a)});return l&&e(l.error),a.promise},race:function(s){var n=this,a=E(n),t=a.reject,e=x(function(){j(s,!1,function(s){n.resolve(s).then(a.resolve,t)})});return e&&t(e.error),a.promise}})}});