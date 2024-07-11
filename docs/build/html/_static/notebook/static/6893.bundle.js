"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6893,7684],{56893:(t,e,o)=>{o.r(e),o.d(e,{CommandIDs:()=>n,default:()=>i});var n,a=o(44604),r=o(53312),s=o(68722),u=o(12030);!function(t){t.controlPanel="hub:control-panel",t.logout="hub:logout",t.restart="hub:restart"}(n||(n={}));const i=[{activate:function(t,e,o,a){const r=o.load("jupyterlab"),u=e.urls.hubHost||"",i=e.urls.hubPrefix||"",l=e.urls.hubUser||"",c=e.urls.hubServerName||"",d=e.urls.base;if(!i)return;console.debug("hub-extension: Found configuration ",{hubHost:u,hubPrefix:i});const b=s.URLExt.join(i,"spawn");let h;if(c){const t=s.URLExt.join(b,l,c);if(!t.startsWith(b))throw new Error("Can only be used for spawn requests");h=u+t}h=u+b;const{commands:_}=t;if(_.addCommand(n.restart,{label:r.__("Restart Server"),caption:r.__("Request that the Hub restart this server"),execute:()=>{window.open(h,"_blank")}}),_.addCommand(n.controlPanel,{label:r.__("Hub Control Panel"),caption:r.__("Open the Hub control panel in a new browser tab"),execute:()=>{window.open(u+s.URLExt.join(i,"home"),"_blank")}}),_.addCommand(n.logout,{label:r.__("Log Out"),caption:r.__("Log out of the Hub"),execute:()=>{window.location.href=u+s.URLExt.join(d,"logout")}}),a){const t=r.__("Hub");a.addItem({category:t,command:n.controlPanel}),a.addItem({category:t,command:n.logout})}},id:"@jupyterlab/hub-extension:plugin",description:"Registers commands related to the hub server",requires:[a.JupyterFrontEnd.IPaths,u.ITranslator],optional:[r.ICommandPalette],autoStart:!0},{activate:()=>{},id:"@jupyterlab/hub-extension:menu",description:"Adds hub related commands to the menu.",autoStart:!0},{id:"@jupyterlab/hub-extension:connectionlost",description:"Provides a service to be notified when the connection to the hub server is lost.",requires:[a.JupyterFrontEnd.IPaths,u.ITranslator],optional:[a.JupyterLab.IInfo],activate:(t,e,o,s)=>{const u=o.load("jupyterlab"),i=e.urls.hubPrefix||"",l=e.urls.base;if(!i)return a.ConnectionLost;let c=!1;return async(e,o)=>{if(c)return;c=!0,s&&(s.isConnected=!1);const a=await(0,r.showDialog)({title:u.__("Server unavailable or unreachable"),body:u.__("Your server at %1 is not running.\nWould you like to restart it?",l),buttons:[r.Dialog.okButton({label:u.__("Restart")}),r.Dialog.cancelButton({label:u.__("Dismiss")})]});s&&(s.isConnected=!0),c=!1,a.button.accept&&await t.commands.execute(n.restart)}},autoStart:!0,provides:a.IConnectionLost}]}}]);