"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7906,4382],{54382:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(95183),o=r(23817);const c="jp-mod-searchable",a=[{id:"@jupyter-notebook/documentsearch-extension:notebookShellWidgetListener",requires:[o.INotebookShell,n.ISearchProviderRegistry],autoStart:!0,description:"A plugin to add document search functionalities",activate:(e,t,r)=>{const n=e=>{e&&(r.hasProvider(e)?e.addClass(c):e.removeClass(c))};r.changed.connect((()=>n(t.currentWidget))),t.currentChanged.connect(((e,r)=>{t.currentWidget&&n(t.currentWidget)}))}}]}}]);