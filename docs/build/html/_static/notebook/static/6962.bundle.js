"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6962],{56962:(t,e,r)=>{r.r(e),r.d(e,{default:()=>T});var n=r(44604),a=r(53312),o=r(57957),s=r(23295),i=r(12030),c=r(35613);const l="@jupyterlab/htmlviewer-extension:plugin",d="HTML Viewer";var u;!function(t){t.trustHTML="htmlviewer:trust-html"}(u||(u={}));const m={activate:function(t,e,r,n,s,i){let T;const h=e.load("jupyterlab");i&&(i.addFactory(d,"refresh",(t=>o.ToolbarItems.createRefreshButton(t,e))),i.addFactory(d,"trust",(t=>o.ToolbarItems.createTrustButton(t,e))),s&&(T=(0,a.createToolbarFactory)(i,s,d,m.id,e)));const y={name:"html",contentType:"file",fileFormat:"text",displayName:h.__("HTML File"),extensions:[".html"],mimeTypes:["text/html"],icon:c.html5Icon};t.docRegistry.addFileType(y);const g=new o.HTMLViewerFactory({name:d,label:h.__("HTML Viewer"),fileTypes:["html"],defaultFor:["html"],readOnly:!0,toolbarFactory:T,translator:e}),p=new a.WidgetTracker({namespace:"htmlviewer"});n&&n.restore(p,{command:"docmanager:open",args:t=>({path:t.context.path,factory:"HTML Viewer"}),name:t=>t.context.path});let f=!1;if(s){const e=s.load(l),r=t=>{f=t.get("trustByDefault").composite};Promise.all([e,t.restored]).then((([t])=>{r(t),t.changed.connect((t=>{r(t)}))})).catch((t=>{console.error(t.message)}))}return t.docRegistry.addWidgetFactory(g),g.widgetCreated.connect(((e,r)=>{var n,a;p.add(r),r.context.pathChanged.connect((()=>{p.save(r)})),r.trustedChanged.connect((()=>{t.commands.notifyCommandChanged(u.trustHTML)})),r.trusted=f,r.title.icon=y.icon,r.title.iconClass=null!==(n=y.iconClass)&&void 0!==n?n:"",r.title.iconLabel=null!==(a=y.iconLabel)&&void 0!==a?a:""})),t.commands.addCommand(u.trustHTML,{label:h.__("Trust HTML File"),caption:h.__("Whether the HTML file is trusted.\n    Trusting the file allows scripts to run in it,\n    which may result in security risks.\n    Only enable for files you trust."),isEnabled:()=>!!p.currentWidget,isToggled:()=>{const t=p.currentWidget;return!!t&&-1!==t.content.sandbox.indexOf("allow-scripts")},execute:()=>{const t=p.currentWidget;t&&(t.trusted=!t.trusted)}}),p.currentChanged.connect((()=>{t.commands.notifyCommandChanged(u.trustHTML)})),r&&r.addItem({command:u.trustHTML,category:h.__("File Operations")}),p},id:l,description:"Adds HTML file viewer and provides its tracker.",provides:o.IHTMLViewerTracker,requires:[i.ITranslator],optional:[a.ICommandPalette,n.ILayoutRestorer,s.ISettingRegistry,a.IToolbarWidgetRegistry],autoStart:!0},T=m}}]);