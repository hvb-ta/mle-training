"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5099],{25099:(e,t,a)=>{a.r(t),a.d(t,{default:()=>re,toggleHeader:()=>ae});var n=a(44604),o=a(53312),s=a(68722),i=a(23295),r=a(41053),l=a(12030),c=a(35613),d=a(20998),u=a(2549),m=a(97934),p=a(87408);const h="help:open",g="https://jupyterlab.readthedocs.io/en/latest/privacy_policies.html";async function b(e,t={}){const a=p.ServerConnection.makeSettings(),n=s.URLExt.join(a.baseUrl,e);let o;try{o=await p.ServerConnection.makeRequest(n,t,a)}catch(e){throw new p.ServerConnection.NetworkError(e)}const i=await o.json();if(!o.ok)throw new p.ServerConnection.ResponseError(o,i.message);return i}const f={id:"@jupyterlab/apputils-extension:announcements",description:"Add the announcement feature. It will fetch news on the internet and check for application updates.",autoStart:!0,optional:[i.ISettingRegistry,l.ITranslator],activate:(e,t,a)=>{var n;const s=f.id.replace(/[^\w]/g,"");Promise.all([e.restored,null!==(n=null==t?void 0:t.load("@jupyterlab/apputils-extension:notification"))&&void 0!==n?n:Promise.resolve(null),p.ConfigSection.create({name:s})]).then((async([t,n,s])=>{const i=(null!=a?a:l.nullTranslator).load("jupyterlab");if(o.Notification.manager.changed.connect(((e,t)=>{var a;if("removed"!==t.type)return;const{id:n,tags:o}=null!==(a=t.notification.options.data)&&void 0!==a?a:{};if((null!=o?o:[]).some((e=>["news","update"].includes(e)))&&n){const e={};e[n]={seen:!0,dismissed:!0},s.update(e).catch((e=>{console.error(`Failed to update the announcements config:\n${e}`)}))}})),"none"===(null==n?void 0:n.get("fetchNews").composite)){const t=o.Notification.emit(i.__("Would you like to get notified about official Jupyter news?"),"default",{autoClose:!1,actions:[{label:i.__("Open privacy policy"),caption:g,callback:t=>{t.preventDefault(),e.commands.hasCommand(h)?e.commands.execute(h,{text:i.__("Privacy policies"),url:g}):window.open(g,"_blank","noreferrer")},displayType:"link"},{label:i.__("Yes"),callback:()=>{o.Notification.dismiss(t),s.update({}).then((()=>r())).catch((e=>{console.error(`Failed to get the news:\n${e}`)})),null==n||n.set("fetchNews","true").catch((e=>{console.error(`Failed to save setting 'fetchNews':\n${e}`)}))}},{label:i.__("No"),callback:()=>{o.Notification.dismiss(t),null==n||n.set("fetchNews","false").catch((e=>{console.error(`Failed to save setting 'fetchNews':\n${e}`)}))}}]})}else await r();async function r(){var e,t,a,r;if("true"===(null!==(e=null==n?void 0:n.get("fetchNews").composite)&&void 0!==e?e:"false"))try{const e=await b("/lab/api/news");for(const{link:a,message:n,type:r,options:l}of e.news){const e=l.data.id,c=null!==(t=s.data[e])&&void 0!==t?t:{seen:!1,dismissed:!1};if(!c.dismissed){if(l.actions=[{label:i.__("Hide"),caption:i.__("Never show this notification again."),callback:()=>{const t={};t[e]={seen:!0,dismissed:!0},s.update(t).catch((e=>{console.error(`Failed to update the announcements config:\n${e}`)}))}}],2===(null==a?void 0:a.length)&&l.actions.push({label:a[0],caption:a[1],callback:()=>{window.open(a[1],"_blank","noreferrer")},displayType:"link"}),!c.seen){l.autoClose=5e3;const t={};t[e]={seen:!0},s.update(t).catch((e=>{console.error(`Failed to update the announcements config:\n${e}`)}))}o.Notification.emit(n,r,l)}}}catch(e){console.log("Failed to get the announcements.",e)}if(null===(a=null==n?void 0:n.get("checkForUpdates").composite)||void 0===a||a){const e=await b("/lab/api/update");if(e.notification){const{link:t,message:a,type:l,options:c}=e.notification,d=c.data.id,u=null!==(r=s.data[d])&&void 0!==r?r:{seen:!1,dismissed:!1};if(!u.dismissed){let e;if(c.actions=[{label:i.__("Do not check for updates"),caption:i.__("If pressed, you will not be prompted if a new JupyterLab version is found."),callback:()=>{null==n||n.set("checkForUpdates",!1).then((()=>{o.Notification.dismiss(e)})).catch((e=>{console.error("Failed to set the `checkForUpdates` setting.",e)}))}}],2===(null==t?void 0:t.length)&&c.actions.push({label:t[0],caption:t[1],callback:()=>{window.open(t[1],"_blank","noreferrer")},displayType:"link"}),!u.seen){c.autoClose=5e3;const e={};e[d]={seen:!0},s.update(e).catch((e=>{console.error(`Failed to update the announcements config:\n${e}`)}))}e=o.Notification.emit(a,l,c)}}}}}))}};var y,v=a(71098),_=a(63485),w=a(78156),k=a(37634);function C(e){const{manager:t,onClose:a,trans:n}=e,[o,s]=w.useState([]),[i,r]=w.useState(null);return w.useEffect((()=>{async function e(){s(await Promise.all(t.notifications.map((async e=>Object.freeze({...e})))))}return o.length!==t.count&&e(),t.changed.connect(e),()=>{t.changed.disconnect(e)}}),[t]),w.useEffect((()=>{E.getIcons().then((e=>{r(e)})).catch((e=>{console.error(`Failed to get react-toastify icons:\n${e}`)}))}),[]),w.createElement(c.UseSignal,{signal:t.changed},(()=>w.createElement(w.Fragment,null,w.createElement("h2",{className:"jp-Notification-Header jp-Toolbar"},w.createElement("span",{className:"jp-Toolbar-item"},t.count>0?n._n("%1 notification","%1 notifications",t.count):n.__("No notifications")),w.createElement("span",{className:"jp-Toolbar-item jp-Toolbar-spacer"}),w.createElement(c.ToolbarButtonComponent,{actualOnClick:!0,onClick:()=>{t.dismiss()},icon:c.deleteIcon,tooltip:n.__("Dismiss all notifications"),enabled:t.count>0}),w.createElement(c.ToolbarButtonComponent,{actualOnClick:!0,onClick:a,icon:c.closeIcon,tooltip:n.__("Hide notifications")})),w.createElement("ol",{className:"jp-Notification-List"},o.map((e=>{var a;const{id:o,message:s,type:r,options:l}=e,d="in-progress"===r?"default":r,u=()=>{t.dismiss(o)},m="default"===r?null:"in-progress"===r?null!==(a=null==i?void 0:i.spinner)&&void 0!==a?a:null:i&&i[r];return w.createElement("li",{className:"jp-Notification-List-Item",key:e.id,onClick:e=>{e.stopPropagation()}},w.createElement("div",{className:`Toastify__toast Toastify__toast-theme--light Toastify__toast--${d} jp-Notification-Toast-${d}`},w.createElement("div",{className:"Toastify__toast-body"},m&&w.createElement("div",{className:"Toastify__toast-icon"},m({theme:"light",type:d})),w.createElement("div",null,E.createContent(s,u,l.actions))),w.createElement(E.CloseButton,{close:u,closeIcon:c.deleteIcon.react,title:n.__("Dismiss notification"),closeIconMargin:!0})))}))))))}!function(e){e.dismiss="apputils:dismiss-notification",e.display="apputils:display-notifications",e.notify="apputils:notify",e.update="apputils:update-notification"}(y||(y={}));class S extends c.VDomModel{constructor(e){super(),this.manager=e,this._highlight=!1,this._listOpened=!1,this._doNotDisturbMode=!1,this._count=e.count,this.manager.changed.connect(this.onNotificationChanged,this)}get count(){return this._count}get doNotDisturbMode(){return this._doNotDisturbMode}set doNotDisturbMode(e){this._doNotDisturbMode=e}get highlight(){return this._highlight}get listOpened(){return this._listOpened}set listOpened(e){this._listOpened=e,(this._listOpened||this._highlight)&&(this._highlight=!1),this.stateChanged.emit()}onNotificationChanged(e,t){this._count=this.manager.count;const{autoClose:a}=t.notification.options,n=this.doNotDisturbMode||"number"==typeof a&&a<=0;!this._listOpened&&"removed"!==t.type&&n&&(this._highlight=!0),this.stateChanged.emit()}}function T(e){return w.createElement(v.GroupItem,{spacing:4,onClick:()=>{e.onClick()},title:e.count>0?e.trans._n("%1 notification","%1 notifications",e.count):e.trans.__("No notifications")},w.createElement(v.TextItem,{className:"jp-Notification-Status-Text",source:`${e.count}`}),w.createElement(c.bellIcon.react,{top:"2px",stylesheet:"statusBar"}))}const j={id:"@jupyterlab/apputils-extension:notification",description:"Add the notification center and its status indicator.",autoStart:!0,optional:[v.IStatusBar,i.ISettingRegistry,l.ITranslator],activate:(e,t,a,n)=>{E.translator=null!=n?n:l.nullTranslator;const s=E.translator.load("jupyterlab"),i=new S(o.Notification.manager);i.doNotDisturbMode=!1,a&&Promise.all([a.load(j.id),e.restored]).then((([e])=>{const t=()=>{i.doNotDisturbMode=e.get("doNotDisturbMode").composite};t(),e.changed.connect(t)})),e.commands.addCommand(y.notify,{label:s.__("Emit a notification"),caption:s.__("Notification is described by {message: string, type?: string, options?: {autoClose?: number | false, actions: {label: string, commandId: string, args?: ReadOnlyJSONObject, caption?: string, className?: string}[], data?: ReadOnlyJSONValue}}."),execute:t=>{var a;const{message:n,type:s}=t,i=null!==(a=t.options)&&void 0!==a?a:{};return o.Notification.manager.notify(n,null!=s?s:"default",{...i,actions:i.actions?i.actions.map((t=>({...t,callback:()=>{e.commands.execute(t.commandId,t.args).catch((e=>{console.error(`Failed to executed '${t.commandId}':\n${e}`)}))}}))):null})}}),e.commands.addCommand(y.update,{label:s.__("Update a notification"),caption:s.__("Notification is described by {id: string, message: string, type?: string, options?: {autoClose?: number | false, actions: {label: string, commandId: string, args?: ReadOnlyJSONObject, caption?: string, className?: string}[], data?: ReadOnlyJSONValue}}."),execute:t=>{const{id:a,message:n,type:s,...i}=t;return o.Notification.manager.update({id:a,message:n,type:null!=s?s:"default",...i,actions:i.actions?i.actions.map((t=>({...t,callback:()=>{e.commands.execute(t.commandId,t.args).catch((e=>{console.error(`Failed to executed '${t.commandId}':\n${e}`)}))}}))):null})}}),e.commands.addCommand(y.dismiss,{label:s.__("Dismiss a notification"),execute:e=>{const{id:t}=e;o.Notification.manager.dismiss(t)}});let r=null;i.listOpened=!1;const d=o.ReactWidget.create(w.createElement(C,{manager:o.Notification.manager,onClose:()=>{null==r||r.dispose()},trans:s}));d.addClass("jp-Notification-Center"),o.Notification.manager.changed.connect((async function(e,t){var a;if(i.doNotDisturbMode||null!==r&&!r.isDisposed)return;const{message:n,type:o,options:s,id:l}=t.notification;if(!("number"==typeof s.autoClose&&s.autoClose<=0))switch(t.type){case"added":await E.createToast(l,n,o,s);break;case"updated":{const t=await E.toast(),i=s.actions,r=null!==(a=s.autoClose)&&void 0!==a?a:!(i&&i.length>0)&&null;if(t.isActive(l)){const a=()=>{t.dismiss(l),e.dismiss(l)};t.update(l,{type:"in-progress"===o?null:o,isLoading:"in-progress"===o,autoClose:r,render:E.createContent(n,a,s.actions)})}else await E.createToast(l,n,o,s)}break;case"removed":await E.toast().then((e=>{e.dismiss(l)}))}}));const u=()=>{r?(r.dispose(),r=null):(r=(0,v.showPopup)({body:d,anchor:m,align:"right",hasDynamicSize:!0,startHidden:!0}),E.toast().then((e=>{e.dismiss()})).catch((e=>{console.error(`Failed to dismiss all toasts:\n${e}`)})).finally((()=>{null==r||r.launch(),d.node.focus(),null==r||r.disposed.connect((()=>{i.listOpened=!1,r=null}))}))),i.listOpened=null!==r};e.commands.addCommand(y.display,{label:s.__("Show Notifications"),execute:u});const m=o.ReactWidget.create(w.createElement(c.UseSignal,{signal:i.stateChanged},(()=>(i.highlight||r&&!r.isDisposed?m.addClass("jp-mod-selected"):m.removeClass("jp-mod-selected"),w.createElement(T,{count:i.count,highlight:i.highlight,trans:s,onClick:u})))));m.addClass("jp-Notification-Status"),t?t.registerStatusItem(j.id,{item:m,align:"right",rank:-1}):(m.node.style.position="fixed",m.node.style.bottom="0",m.node.style.right="10px",_.Widget.attach(m,document.body),m.show())}};var E;!function(e){e.translator=l.nullTranslator;let t=null;function n(e){var t;return w.createElement("button",{className:"jp-Button jp-mod-minimal jp-Notification-Toast-Close"+(e.closeIconMargin?" jp-Notification-Toast-Close-Margin":""),title:null!==(t=e.title)&&void 0!==t?t:"",onClick:e.close},w.createElement(e.closeIcon,{className:"jp-icon-hover",tag:"span"}))}function s(t){const a=e.translator.load("jupyterlab");return w.createElement(n,{close:t.closeToast,closeIcon:c.closeIcon.react,title:a.__("Hide notification")})}e.CloseButton=n;let i=null;async function r(){if(null===i?i=new d.PromiseDelegate:await i.promise,null===t){t=await a.e(53).then(a.t.bind(a,60053,23));const e=document.body.appendChild(document.createElement("div"));e.id="react-toastify-container",(0,k.s)(e).render(w.createElement(t.ToastContainer,{draggable:!1,closeOnClick:!1,hideProgressBar:!0,newestOnTop:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,position:"bottom-right",className:"jp-toastContainer",transition:t.Slide,closeButton:s})),i.resolve()}return t.toast}e.toast=r,e.getIcons=async function(){return null===t&&await r(),t.Icons};const u={accent:"jp-mod-accept",link:"jp-mod-link",warn:"jp-mod-warn",default:""};function m({action:e,closeToast:t}){var a,n;const o=["jp-toast-button",u[null!==(a=e.displayType)&&void 0!==a?a:"default"]].join(" ");return w.createElement(c.Button,{title:null!==(n=e.caption)&&void 0!==n?n:e.label,className:o,onClick:a=>{e.callback(a),a.defaultPrevented||t()},small:!0},e.label)}function p(e,t,a){var n;const o=e.length>140?e.slice(0,140)+"…":e;return w.createElement(w.Fragment,null,w.createElement("div",{className:"jp-toast-message"},o.split("\n").map(((e,t)=>w.createElement(w.Fragment,{key:`part-${t}`},t>0?w.createElement("br",null):null,e)))),(null!==(n=null==a?void 0:a.length)&&void 0!==n?n:0)>0&&w.createElement("div",{className:"jp-toast-buttonBar"},w.createElement("div",{className:"jp-toast-spacer"}),a.map(((e,a)=>w.createElement(m,{key:"button-"+a,action:e,closeToast:t})))))}e.createContent=p,e.createToast=async function(e,t,a,n={}){const{actions:s,autoClose:i,data:l}=n;return(await r())((({closeToast:a})=>p(t,(()=>{a&&a(),o.Notification.manager.dismiss(e)}),s)),{autoClose:null!=i?i:!(s&&s.length>0)&&void 0,data:l,className:`jp-Notification-Toast-${a}`,toastId:e,type:"in-progress"===a?null:a,isLoading:"in-progress"===a})}}(E||(E={}));var I,x,N=a(33625),P=a(16934);!function(e){e.activate="apputils:activate-command-palette"}(I||(I={}));class D{constructor(e,t){this.translator=t||l.nullTranslator;const a=this.translator.load("jupyterlab");this._palette=e,this._palette.title.label="",this._palette.title.caption=a.__("Command Palette")}set placeholder(e){this._palette.inputNode.placeholder=e}get placeholder(){return this._palette.inputNode.placeholder}activate(){this._palette.activate()}addItem(e){const t=this._palette.addItem(e);return new u.DisposableDelegate((()=>{this._palette.removeItem(t)}))}}!function(e){e.activate=function(t,a,n){const{commands:s,shell:i}=t,r=a.load("jupyterlab"),l=x.createPalette(t,a),c=new o.ModalCommandPalette({commandPalette:l});let d=!1;if(l.node.setAttribute("role","region"),l.node.setAttribute("aria-label",r.__("Command Palette Section")),i.add(l,"left",{rank:300,type:"Command Palette"}),n){const e=n.load("@jupyterlab/apputils-extension:palette"),a=e=>{const t=e.get("modal").composite;d&&!t?(l.parent=null,c.detach(),i.add(l,"left",{rank:300,type:"Command Palette"})):!d&&t&&(l.parent=null,c.palette=l,l.show(),c.attach()),d=t};Promise.all([e,t.restored]).then((([e])=>{a(e),e.changed.connect((e=>{a(e)}))})).catch((e=>{console.error(e.message)}))}const u=()=>{const e=(0,N.find)(t.commands.keyBindings,(e=>e.command===I.activate));if(e){const t=e.keys.map(P.CommandRegistry.formatKeystroke).join(", ");l.title.caption=r.__("Commands (%1)",t)}else l.title.caption=r.__("Commands")};return u(),t.commands.keyBindingChanged.connect((()=>{u()})),s.addCommand(I.activate,{execute:()=>{d?c.activate():i.activateById(l.id)},label:r.__("Activate Command Palette")}),l.inputNode.placeholder=r.__("SEARCH"),new e(l,a)},e.restore=function(e,t,a){const n=x.createPalette(e,a);t.add(n,"command-palette")}}(D||(D={})),function(e){let t;e.createPalette=function(e,a){if(!t){t=new _.CommandPalette({commands:e.commands,renderer:c.CommandPaletteSvg.defaultRenderer}),t.id="command-palette",t.title.icon=c.paletteIcon;const n=a.load("jupyterlab");t.title.label=n.__("Commands")}return t}}(x||(x={}));class F extends r.DataConnector{constructor(e){super(),this._throttlers=Object.create(null),this._connector=e}fetch(e){const t=this._throttlers;return e in t||(t[e]=new m.Throttler((()=>this._connector.fetch(e)),100)),t[e].invoke()}async list(e="all"){const{isDisabled:t}=s.PageConfig.Extension,{ids:a,values:n}=await this._connector.list("ids"===e?"ids":void 0);return"all"===e?{ids:a,values:n}:"ids"===e?{ids:a}:{ids:a.filter((e=>!t(e))),values:n.filter((({id:e})=>!t(e)))}}async save(e,t){await this._connector.save(e,t)}}const R={id:"@jupyterlab/apputils-extension:settings",description:"Provides the setting registry.",activate:async e=>{const{isDisabled:t}=s.PageConfig.Extension,a=new F(e.serviceManager.settings),n=new i.SettingRegistry({connector:a,plugins:(await a.list("active")).values.filter((t=>e.hasPlugin(t.id)))});return e.restored.then((async()=>{(await a.list("ids")).ids.forEach((async a=>{if(e.hasPlugin(a)&&!t(a)&&!(a in n.plugins))try{await n.load(a)}catch(t){console.warn(`Settings failed to load for (${a})`,t),e.isPluginActivated(a)||console.warn(`If 'jupyter.lab.transform=true' in the plugin schema, this may happen if {autoStart: false} in (${a}) or if it is one of the deferredExtensions in page config.`)}}))})),n},autoStart:!0,provides:i.ISettingRegistry},A={id:"@jupyterlab/apputils-extension:kernel-status",description:"Provides the kernel status indicator model.",autoStart:!0,requires:[v.IStatusBar],provides:o.IKernelStatusModel,optional:[o.ISessionContextDialogs,l.ITranslator,n.ILabShell],activate:(e,t,a,n,s)=>{const i=null!=n?n:l.nullTranslator,r=null!=a?a:new o.SessionContextDialogs({translator:i}),c=async()=>{d.model.sessionContext&&await r.selectKernel(d.model.sessionContext)},d=new o.KernelStatus({onClick:c,onKeyDown:async e=>{if("Enter"===e.key||"Spacebar"===e.key||" "===e.key)return e.preventDefault(),e.stopPropagation(),c()}},i),u=new Set;function m(e,t){var a;const{oldValue:n,newValue:o}=t;n&&n.title.changed.disconnect(p),d.model.sessionContext=null!==(a=[...u].map((e=>e(t.newValue))).filter((e=>null!==e))[0])&&void 0!==a?a:null,o&&d.model.sessionContext&&(p(o.title),o.title.changed.connect(p))}const p=e=>{d.model.activityName=e.label};return s&&s.currentChanged.connect(m),t.registerStatusItem(A.id,{priority:1,item:d,align:"left",rank:1,isActive:()=>null!==d.model.sessionContext}),{addSessionProvider:t=>{u.add(t),e.shell.currentWidget&&m(e.shell,{newValue:e.shell.currentWidget,oldValue:null})}}}},M={id:"@jupyterlab/apputils-extension:running-sessions-status",description:"Add the running sessions and terminals status bar item.",autoStart:!0,requires:[v.IStatusBar,l.ITranslator],activate:(e,t,a)=>{const n=new o.RunningSessions({onClick:()=>e.shell.activateById("jp-running-sessions"),onKeyDown:t=>{"Enter"!==t.key&&"Spacebar"!==t.key&&" "!==t.key||(t.preventDefault(),t.stopPropagation(),e.shell.activateById("jp-running-sessions"))},serviceManager:e.serviceManager,translator:a});n.model.sessions=Array.from(e.serviceManager.sessions.running()).length,n.model.terminals=Array.from(e.serviceManager.terminals.running()).length,t.registerStatusItem(M.id,{item:n,align:"left",rank:0})}};var O,L=a(29879);!function(e){e.changeTheme="apputils:change-theme",e.changePreferredLightTheme="apputils:change-light-theme",e.changePreferredDarkTheme="apputils:change-dark-theme",e.toggleAdaptiveTheme="apputils:adaptive-theme",e.themeScrollbars="apputils:theme-scrollbars",e.changeFont="apputils:change-font",e.incrFontSize="apputils:incr-font-size",e.decrFontSize="apputils:decr-font-size"}(O||(O={}));const z={id:"@jupyterlab/apputils-extension:themes",description:"Provides the theme manager.",requires:[i.ISettingRegistry,n.JupyterFrontEnd.IPaths,l.ITranslator],optional:[o.ISplashScreen],activate:(e,t,a,n,i)=>{const r=n.load("jupyterlab"),l=e.shell,c=e.commands,d=s.URLExt.join(s.PageConfig.getBaseUrl(),a.urls.themes),u=z.id,m=new o.ThemeManager({key:u,host:l,settings:t,splash:null!=i?i:void 0,url:d});let p,h=null;return m.themeChanged.connect(((e,t)=>{p=t.newValue,document.body.dataset.jpThemeLight=String(m.isLight(p)),document.body.dataset.jpThemeName=p,document.body.dataset.jpThemeScrollbars!==String(m.themeScrollbars(p))&&(document.body.dataset.jpThemeScrollbars=String(m.themeScrollbars(p)),m.themeScrollbars(p)?(h||(h=function(e){const t=document.createElement("style");return t.setAttribute("type","text/css"),t.appendChild(document.createTextNode("/*\n * Copyright (c) Jupyter Development Team.\n * Distributed under the terms of the Modified BSD License.\n */\n\n/*\n * Webkit scrollbar styling.\n * Separate file which is dynamically loaded based on user/theme settings.\n */\n\n/* use standard opaque scrollbars for most nodes */\n\n::-webkit-scrollbar,\n::-webkit-scrollbar-corner {\n  background: var(--jp-scrollbar-background-color);\n}\n\n::-webkit-scrollbar-thumb {\n  background: rgb(var(--jp-scrollbar-thumb-color));\n  border: var(--jp-scrollbar-thumb-margin) solid transparent;\n  background-clip: content-box;\n  border-radius: var(--jp-scrollbar-thumb-radius);\n}\n\n::-webkit-scrollbar-track:horizontal {\n  border-left: var(--jp-scrollbar-endpad) solid\n    var(--jp-scrollbar-background-color);\n  border-right: var(--jp-scrollbar-endpad) solid\n    var(--jp-scrollbar-background-color);\n}\n\n::-webkit-scrollbar-track:vertical {\n  border-top: var(--jp-scrollbar-endpad) solid\n    var(--jp-scrollbar-background-color);\n  border-bottom: var(--jp-scrollbar-endpad) solid\n    var(--jp-scrollbar-background-color);\n}\n\n/* for code nodes, use a transparent style of scrollbar */\n\n.CodeMirror-hscrollbar::-webkit-scrollbar,\n.CodeMirror-vscrollbar::-webkit-scrollbar,\n.CodeMirror-hscrollbar::-webkit-scrollbar-corner,\n.CodeMirror-vscrollbar::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n.CodeMirror-hscrollbar::-webkit-scrollbar-thumb,\n.CodeMirror-vscrollbar::-webkit-scrollbar-thumb {\n  background: rgba(var(--jp-scrollbar-thumb-color), 0.5);\n  border: var(--jp-scrollbar-thumb-margin) solid transparent;\n  background-clip: content-box;\n  border-radius: var(--jp-scrollbar-thumb-radius);\n}\n\n.CodeMirror-hscrollbar::-webkit-scrollbar-track:horizontal {\n  border-left: var(--jp-scrollbar-endpad) solid transparent;\n  border-right: var(--jp-scrollbar-endpad) solid transparent;\n}\n\n.CodeMirror-vscrollbar::-webkit-scrollbar-track:vertical {\n  border-top: var(--jp-scrollbar-endpad) solid transparent;\n  border-bottom: var(--jp-scrollbar-endpad) solid transparent;\n}\n")),t}()),h.parentElement||document.body.appendChild(h)):h&&h.parentElement&&h.parentElement.removeChild(h)),c.notifyCommandChanged(O.changeTheme)})),c.addCommand(O.changeTheme,{label:e=>{if(void 0===e.theme)return r.__("Switch to the provided `theme`.");const t=e.theme,a=m.getDisplayName(t);return e.isPalette?r.__("Use Theme: %1",a):a},isToggled:e=>e.theme===p,execute:e=>{const t=e.theme;if(t!==m.theme)return m.isToggledAdaptiveTheme()?m.toggleAdaptiveTheme():m.setTheme(t)}}),c.addCommand(O.changePreferredLightTheme,{label:e=>{if(void 0===e.theme)return r.__("Switch to the provided light `theme`.");const t=e.theme,a=m.getDisplayName(t);return e.isPalette?r.__("Set Preferred Light Theme: %1",a):a},isToggled:e=>e.theme===m.preferredLightTheme,execute:e=>{const t=e.theme;if(t!==m.preferredLightTheme)return m.setPreferredLightTheme(t)}}),c.addCommand(O.changePreferredDarkTheme,{label:e=>{if(void 0===e.theme)return r.__("Switch to the provided dark `theme`.");const t=e.theme,a=m.getDisplayName(t);return e.isPalette?r.__("Set Preferred Dark Theme: %1",a):a},isToggled:e=>e.theme===m.preferredDarkTheme,execute:e=>{const t=e.theme;if(t!==m.preferredDarkTheme)return m.setPreferredDarkTheme(t)}}),c.addCommand(O.toggleAdaptiveTheme,{label:e=>e.isPalette?r.__("Synchronize Styling Theme with System Settings"):r.__("Synchronize with System Settings"),isToggled:()=>m.isToggledAdaptiveTheme(),execute:()=>{m.toggleAdaptiveTheme().catch(console.warn)}}),c.addCommand(O.themeScrollbars,{label:r.__("Theme Scrollbars"),isToggled:()=>m.isToggledThemeScrollbars(),execute:()=>m.toggleThemeScrollbars()}),c.addCommand(O.changeFont,{label:e=>e.enabled?`${e.font}`:r.__("waiting for fonts"),isEnabled:e=>e.enabled,isToggled:e=>m.getCSS(e.key)===e.font,execute:e=>m.setCSSOverride(e.key,e.font)}),c.addCommand(O.incrFontSize,{label:e=>{switch(e.key){case"code-font-size":return r.__("Increase Code Font Size");case"content-font-size1":return r.__("Increase Content Font Size");case"ui-font-size1":return r.__("Increase UI Font Size");default:return r.__("Increase Font Size")}},execute:e=>m.incrFontSize(e.key)}),c.addCommand(O.decrFontSize,{label:e=>{switch(e.key){case"code-font-size":return r.__("Decrease Code Font Size");case"content-font-size1":return r.__("Decrease Content Font Size");case"ui-font-size1":return r.__("Decrease UI Font Size");default:return r.__("Decrease Font Size")}},execute:e=>m.decrFontSize(e.key)}),m},autoStart:!0,provides:o.IThemeManager},$={id:"@jupyterlab/apputils-extension:themes-palette-menu",description:"Adds theme commands to the menu and the command palette.",requires:[o.IThemeManager,l.ITranslator],optional:[o.ICommandPalette,L.IMainMenu],activate:(e,t,a,n,o)=>{const s=a.load("jupyterlab");o&&e.restored.then((()=>{var e;const a=null===(e=o.settingsMenu.items.find((e=>{var t;return"submenu"===e.type&&"jp-mainmenu-settings-apputilstheme"===(null===(t=e.submenu)||void 0===t?void 0:t.id)})))||void 0===e?void 0:e.submenu;a&&t.themes.forEach(((e,t)=>{a.insertItem(t,{command:O.changeTheme,args:{isPalette:!1,theme:e}})}))})),n&&e.restored.then((()=>{const e=s.__("Theme"),a=O.changeTheme,o=!0;t.themes.forEach((t=>{n.addItem({command:a,args:{isPalette:o,theme:t},category:e})})),t.themes.forEach((t=>{n.addItem({command:O.changePreferredLightTheme,args:{isPalette:o,theme:t},category:e})})),t.themes.forEach((t=>{n.addItem({command:O.changePreferredDarkTheme,args:{isPalette:o,theme:t},category:e})})),n.addItem({command:O.toggleAdaptiveTheme,args:{isPalette:o},category:e}),n.addItem({command:O.themeScrollbars,category:e}),n.addItem({command:O.incrFontSize,args:{key:"code-font-size"},category:e}),n.addItem({command:O.decrFontSize,args:{key:"code-font-size"},category:e}),n.addItem({command:O.incrFontSize,args:{key:"content-font-size1"},category:e}),n.addItem({command:O.decrFontSize,args:{key:"content-font-size1"},category:e}),n.addItem({command:O.incrFontSize,args:{key:"ui-font-size1"},category:e}),n.addItem({command:O.decrFontSize,args:{key:"ui-font-size1"},category:e})}))},autoStart:!0},W={id:"@jupyterlab/apputils-extension:toolbar-registry",description:"Provides toolbar items registry.",autoStart:!0,provides:o.IToolbarWidgetRegistry,activate:e=>new o.ToolbarWidgetRegistry({defaultFactory:(0,o.createDefaultFactory)(e.commands)})};var U=a(65903),B=a(72164);const H="jupyterlab-workspace",q="."+H,J={id:"@jupyterlab/apputils-extension:workspaces",description:"Add workspace file type.",autoStart:!0,requires:[r.IStateDB,l.ITranslator,n.JupyterFrontEnd.IPaths],optional:[n.IRouter,B.IWorkspaceCommands],activate:(e,t,a,n,o,i)=>{const r=new K.WorkspaceFactory({workspaces:e.serviceManager.workspaces,state:t,translator:a,open:async t=>{if(i)await e.commands.execute(i.open,{workspace:t});else{const e=s.URLExt.join(n.urls.app,"workspaces"),a=s.URLExt.join(e,t);if(!a.startsWith(e))throw new Error("Can only be used for workspaces");o?o.navigate(a,{hard:!0}):document.location.href=a}}}),l=a.load("jupyterlab");e.docRegistry.addFileType({name:H,contentType:"file",fileFormat:"text",displayName:l.__("JupyterLab Workspace File"),extensions:[q],mimeTypes:["text/json"],iconClass:"jp-JupyterIcon"}),e.docRegistry.addWidgetFactory(r)}};var K;!function(e){class t extends U.ABCWidgetFactory{constructor(e){super({name:"Workspace loader",label:(e.translator||l.nullTranslator).load("jupyterlab").__("Workspace loader"),fileTypes:[H],defaultFor:[H],readOnly:!0}),this._state=e.state,this._workspaces=e.workspaces,this._open=e.open}createNewWidget(e){return e.ready.then((async()=>{const t=e.model.toJSON(),a=e.path,n=t.metadata.id;await this._workspaces.save(n,t),await this._state.save("workspace-ui:lastSave",a),await this._open(n)})),function(e){const t=new U.DocumentWidget({content:new _.Widget,context:e});return t.content.dispose(),t}(e)}}e.WorkspaceFactory=t}(K||(K={}));var V=a(18395);const Q="jp-ContextualShortcut-TableItem";var Y;!function(e){e.loadState="apputils:load-statedb",e.print="apputils:print",e.reset="apputils:reset",e.resetOnLoad="apputils:reset-on-load",e.runFirstEnabled="apputils:run-first-enabled",e.runAllEnabled="apputils:run-all-enabled",e.toggleHeader="apputils:toggle-header",e.displayShortcuts="apputils:display-shortcuts"}(Y||(Y={}));const G={id:"@jupyterlab/apputils-extension:palette",description:"Provides the command palette.",autoStart:!0,requires:[l.ITranslator],provides:o.ICommandPalette,optional:[i.ISettingRegistry],activate:(e,t,a)=>D.activate(e,t,a)},X={id:"@jupyterlab/apputils-extension:palette-restorer",description:"Restores the command palette.",autoStart:!0,requires:[n.ILayoutRestorer,l.ITranslator],activate:(e,t,a)=>{D.restore(e,t,a)}},Z={id:"@jupyterlab/apputils-extension:resolver",description:"Provides the window name resolver.",autoStart:!0,provides:o.IWindowResolver,requires:[n.JupyterFrontEnd.IPaths,n.IRouter],activate:async(e,t,a)=>{const{hash:n,search:i}=a.current,r=s.URLExt.queryStringToObject(i||""),l=new o.WindowResolver,c=s.PageConfig.getOption("workspace"),d=s.PageConfig.getOption("treePath"),u="multiple-document"===s.PageConfig.getOption("mode")?"lab":"doc",m=c||s.PageConfig.defaultWorkspace,p=d?s.URLExt.join("tree",d):"";try{return await l.resolve(m),l}catch(e){return new Promise((()=>{const{base:e}=t.urls,o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(62*Math.random())];let i=s.URLExt.join(e,u,"workspaces",`auto-${o}`);i=p?s.URLExt.join(i,s.URLExt.encodeParts(p)):i,r.reset="";const l=i+s.URLExt.objectToQueryString(r)+(n||"");a.navigate(l,{hard:!0})}))}}},ee={id:"@jupyterlab/apputils-extension:splash",description:"Provides the splash screen.",autoStart:!0,requires:[l.ITranslator],provides:o.ISplashScreen,activate:(e,t)=>{const a=t.load("jupyterlab"),{commands:n,restored:s}=e,i=document.createElement("div"),r=document.createElement("div"),l=document.createElement("div");let d;i.id="jupyterlab-splash",r.id="galaxy",l.id="main-logo",c.jupyterFaviconIcon.element({container:l,stylesheet:"splash"}),r.appendChild(l),["1","2","3"].forEach((e=>{const t=document.createElement("div"),a=document.createElement("div");t.id=`moon${e}`,t.className="moon orbit",a.id=`planet${e}`,a.className="planet",t.appendChild(a),r.appendChild(t)})),i.appendChild(r);const p=new m.Throttler((async()=>{if(!d){d=new o.Dialog({title:a.__("Loading…"),body:a.__("The loading screen is taking a long time.\nWould you like to clear the workspace or keep waiting?"),buttons:[o.Dialog.cancelButton({label:a.__("Keep Waiting")}),o.Dialog.warnButton({label:a.__("Clear Workspace")})]});try{const e=await d.launch();if(d.dispose(),d=null,e.button.accept&&n.hasCommand(Y.reset))return n.execute(Y.reset);requestAnimationFrame((()=>{p.invoke().catch((e=>{}))}))}catch(e){}}}),{limit:12e3,edge:"trailing"});let h=0;return{show:(e=!0)=>(i.classList.remove("splash-fade"),i.classList.toggle("light",e),i.classList.toggle("dark",!e),h++,document.body.appendChild(i),p.invoke().catch((e=>{})),new u.DisposableDelegate((async()=>{await s,0==--h&&(p.stop(),d&&(d.dispose(),d=null),i.classList.add("splash-fade"),window.setTimeout((()=>{document.body.removeChild(i)}),200))})))}}},te={id:"@jupyterlab/apputils-extension:print",description:"Add the print capability",autoStart:!0,requires:[l.ITranslator],activate:(e,t)=>{var a;const n=t.load("jupyterlab");e.commands.addCommand(Y.print,{label:n.__("Print…"),isEnabled:()=>{const t=e.shell.currentWidget;return null!==o.Printing.getPrintFunction(t)},execute:async()=>{const t=e.shell.currentWidget,a=o.Printing.getPrintFunction(t);a&&await a()}}),null===(a=e.shell.currentChanged)||void 0===a||a.connect((()=>{e.commands.notifyCommandChanged(Y.print)}))}},ae={id:"@jupyterlab/apputils-extension:toggle-header",description:"Adds a command to display the main area widget content header.",autoStart:!0,requires:[l.ITranslator],optional:[o.ICommandPalette],activate:(e,t,a)=>{var n;const s=t.load("jupyterlab"),i=s.__("Main Area");e.commands.addCommand(Y.toggleHeader,{label:s.__("Show Header Above Content"),isEnabled:()=>e.shell.currentWidget instanceof o.MainAreaWidget&&!e.shell.currentWidget.contentHeader.isDisposed&&e.shell.currentWidget.contentHeader.widgets.length>0,isToggled:()=>{const t=e.shell.currentWidget;return t instanceof o.MainAreaWidget&&!t.contentHeader.isHidden},execute:async()=>{const t=e.shell.currentWidget;t instanceof o.MainAreaWidget&&t.contentHeader.setHidden(!t.contentHeader.isHidden)}}),null===(n=e.shell.currentChanged)||void 0===n||n.connect((()=>{e.commands.notifyCommandChanged(Y.toggleHeader)})),a&&a.addItem({command:Y.toggleHeader,category:i})}},ne={id:"@jupyterlab/apputils-extension:state",description:"Provides the application state. It is stored per workspaces.",autoStart:!0,provides:r.IStateDB,requires:[n.JupyterFrontEnd.IPaths,n.IRouter,l.ITranslator],optional:[o.IWindowResolver],activate:(e,t,a,n,o)=>{const i=n.load("jupyterlab");if(null===o)return new r.StateDB;let l=!1;const{commands:c,name:u,serviceManager:p}=e,{workspaces:h}=p,g=o.name,b=new d.PromiseDelegate,f=new r.StateDB({transform:b.promise}),y=new m.Debouncer((async()=>{const e=g,t={id:e},a=await f.toJSON();await h.save(e,{data:a,metadata:t})}));return f.changed.connect((()=>{y.invoke()}),f),f.changed.connect((()=>async function(e,t,a){var n,o;const i=await t.toJSON();if(void 0===(null===(o=null===(n=i["layout-restorer:data"])||void 0===n?void 0:n.main)||void 0===o?void 0:o.current))document.title=`${s.PageConfig.getOption("appName")||"JupyterLab"}${e.startsWith("auto-")?` (${e})`:""}`;else{let t=s.PathExt.basename(decodeURIComponent(window.location.href));t=t.length>15?t.slice(0,12).concat("…"):t;const n=Object.keys(i).filter((e=>e.startsWith("notebook")||e.startsWith("editor"))).length;e.startsWith("auto-")?document.title=`${t} (${e}${n>1?` : ${n}`:""}) - ${a}`:document.title=`${t}${n>1?` (${n})`:""} - ${a}`}}(g,f,u))),c.addCommand(Y.loadState,{label:i.__("Load state for the current workspace."),execute:async e=>{if(l)return;const{hash:t,path:n,search:o}=e,i=s.URLExt.queryStringToObject(o||""),r="string"==typeof i.clone?""===i.clone?s.PageConfig.defaultWorkspace:i.clone:null,c=r||g||null;if(null!==c){try{const e=await h.fetch(c);l||(l=!0,b.resolve({type:"overwrite",contents:e.data}))}catch({message:e}){console.warn(`Fetching workspace "${g}" failed.`,e),l||(l=!0,b.resolve({type:"cancel",contents:null}))}if(c===r){delete i.clone;const e=n+s.URLExt.objectToQueryString(i)+t,o=y.invoke().then((()=>a.stop));return o.then((()=>{a.navigate(e)})),o}await y.invoke()}else console.error(`${Y.loadState} cannot load null workspace.`)}}),c.addCommand(Y.reset,{label:i.__("Reset Application State"),execute:async({reload:e})=>{await f.clear(),await y.invoke(),e&&a.reload()}}),c.addCommand(Y.resetOnLoad,{label:i.__("Reset state when loading for the workspace."),execute:e=>{const{hash:t,path:n,search:o}=e,i=s.URLExt.queryStringToObject(o||""),r="clone"in i;if(!("reset"in i))return;if(l)return a.reload();l=!0,b.resolve({type:"clear",contents:null}),delete i.reset;const c=n+s.URLExt.objectToQueryString(i)+t,d=f.clear().then((()=>y.invoke()));return r?d.then((()=>{a.navigate(c,{hard:!0})})):d.then((()=>{a.navigate(c)})),d}}),a.register({command:Y.loadState,pattern:/.?/,rank:30}),a.register({command:Y.resetOnLoad,pattern:/(\?reset|\&reset)($|&)/,rank:20}),f}},oe={id:"@jupyterlab/apputils-extension:sessionDialogs",description:"Provides the session context dialogs.",provides:o.ISessionContextDialogs,optional:[l.ITranslator],autoStart:!0,activate:async(e,t)=>new o.SessionContextDialogs({translator:null!=t?t:l.nullTranslator})},se={id:"@jupyterlab/apputils-extension:utilityCommands",description:"Adds meta commands to run set of other commands.",requires:[l.ITranslator],optional:[o.ICommandPalette],autoStart:!0,activate:(e,t,a)=>{const n=t.load("jupyterlab"),{commands:s}=e;if(s.addCommand(Y.runFirstEnabled,{label:n.__("Run First Enabled Command"),execute:t=>{const a=t.commands,n=t.args,o=Array.isArray(t);for(let t=0;t<a.length;t++){const s=a[t],i=o?n[t]:n;if(e.commands.isEnabled(s,i))return e.commands.execute(s,i)}}}),s.addCommand(Y.runAllEnabled,{label:n.__("Run All Enabled Commands Passed as Args"),execute:async t=>{var a,n;const o=null!==(a=t.commands)&&void 0!==a?a:[],s=t.args,i=Array.isArray(t),r=null!==(n=t.errorIfNotEnabled)&&void 0!==n&&n;for(let t=0;t<o.length;t++){const a=o[t],n=i?s[t]:s;e.commands.isEnabled(a,n)?await e.commands.execute(a,n):r&&console.error(`${a} is not enabled.`)}},isEnabled:t=>{var a;const n=null!==(a=t.commands)&&void 0!==a?a:[],o=t.args,s=Array.isArray(t);return n.some(((t,a)=>e.commands.isEnabled(t,s?o[a]:o)))}}),s.addCommand(Y.displayShortcuts,{label:n.__("Show Keyboard Shortcuts…"),caption:n.__("Show relevant keyboard shortcuts for the current active widget"),execute:t=>{var a;const i=e.shell.currentWidget;if(!(null==i?void 0:i.node.contains(document.activeElement))&&i instanceof o.MainAreaWidget){const e=null!==(a=i.content.node)&&void 0!==a?a:null==i?void 0:i.node;null==e||e.focus()}return function(e){const{commands:t,trans:a,activeElement:n}=e,s=null!=n?n:document.activeElement;function i(e){const t=[];return e.forEach(((e,a)=>{const n=[];e.split(" ").forEach(((e,t)=>{n.push(w.createElement("span",{className:"jp-ContextualShortcut-Key",key:`ch-${t}`},w.createElement("kbd",null,e)),w.createElement(w.Fragment,{key:`fragment-${t}`}," + "))})),t.push(w.createElement("span",{key:`key-${a}`},n.slice(0,-1)),w.createElement(w.Fragment,{key:`fragment-${a}`}," + "))})),w.createElement("span",null,t.slice(0,-1))}function r(e){const a=t.label(e.command),n=e.command.split(":")[1].split("-");let o="";for(let e=0;e<n.length;e++)o=o+" "+((s=n[e]).charAt(0).toUpperCase()+s.slice(1));var s;return a.length>0?a:o}function l(e,t){let a=t;for(let t=0;null!==a&&a!==a.parentElement;a=a.parentElement,++t){if(a.hasAttribute("data-lm-suppress-shortcuts"))return-1;if(a.matches(e))return t}return-1}const c=new Map;for(let e=0;e<t.keyBindings.length;e++){const a=t.keyBindings[e];let n=l(a.selector,s);if(n<0)continue;let o=P.CommandRegistry.formatKeystroke(a.keys);if(c.has(o)){let e=c.get(o);if(e[0]<n||e[0]===n&&V.Selector.calculateSpecificity(e[1].selector)>V.Selector.calculateSpecificity(a.selector))continue}c.set(o,[n,a])}let d=-1;const u=new Map;for(let[e,t]of c.values())d=Math.max(e,d),u.has(e)||u.set(e,[]),u.get(e).push(t);const m=[];for(let e=0;e<=d;e++)u.has(e)&&(m.push(u.get(e).map((e=>w.createElement("tr",{className:"jp-ContextualShortcut-TableRow",key:`${e.command}-${e.keys.join("-").replace(" ","_")}`},w.createElement("td",{className:Q},r(e)),w.createElement("td",{className:Q},i([...e.keys])))))),m.push(w.createElement("tr",{className:"jp-ContextualShortcut-TableLastRow",key:`group-${e}-last`})));const p=w.createElement("table",null,w.createElement("tbody",null,m));return(0,o.showDialog)({title:a.__("Keyboard Shortcuts"),body:p,buttons:[o.Dialog.cancelButton({label:a.__("Close")})]})}({commands:s,trans:n})}}),a){const e=n.__("Help");a.addItem({command:Y.displayShortcuts,category:e})}}},ie={id:"@jupyterlab/apputils-extension:sanitizer",description:"Provides the HTML sanitizer.",autoStart:!0,provides:o.ISanitizer,requires:[i.ISettingRegistry],activate:(e,t)=>{const a=new o.Sanitizer,n=e=>{const t=e.get("allowedSchemes").composite,n=e.get("autolink").composite;t&&a.setAllowedSchemes(t),a.setAutolink(n)};return t.load("@jupyterlab/apputils-extension:sanitizer").then((e=>{n(e),e.changed.connect(n)})).catch((e=>{console.error("Failed to load sanitizer settings:",e)})),a}},re=[f,A,j,G,X,te,Z,M,ie,R,ne,ee,oe,z,$,ae,W,se,J]},37634:(e,t,a)=>{var n=a(38005);t.s=n.createRoot,n.hydrateRoot}}]);