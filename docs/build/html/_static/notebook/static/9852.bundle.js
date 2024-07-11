"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9852,2924],{22924:(t,e,o)=>{o.r(e),o.d(e,{FormWidget:()=>r,IMetadataFormProvider:()=>g,MetadataFormProvider:()=>v,MetadataFormWidget:()=>_});var a=o(53312),i=o(35613),s=o(27478),l=o.n(s),d=o(78156),n=o.n(d);class r extends a.ReactWidget{constructor(t){super(),this.addClass("jp-FormWidget"),this._props=t}render(){const t={defaultFormData:this._props.settings.default(),updateMetadata:this._props.metadataFormWidget.updateMetadata};return n().createElement(i.FormComponent,{validator:l(),schema:this._props.properties,formData:this._props.formData,formContext:t,uiSchema:this._props.uiSchema,liveValidate:!0,idPrefix:`jp-MetadataForm-${this._props.pluginId}`,onChange:t=>{this._props.metadataFormWidget.updateMetadata(t.formData||{})},compact:!0,showModifiedFromDefault:this._props.showModified,translator:this._props.translator})}}var h,m=o(25460),p=o(23295),c=o(12030),u=o(20998),f=o(63485);class _ extends m.NotebookTools.Tool{constructor(t){super(),this.updateMetadata=(t,e)=>{var o,a,i,s,l,d,n,r;if(null==this.notebookTools)return;const m=this.notebookTools.activeNotebookPanel,p=this.notebookTools.activeCell;if(null==p)return;this._updatingMetadata=!0;const c={},u={};for(let[e,f]of Object.entries(t)){if(!this.metadataKeys.includes(e))continue;if("notebook"===(null===(o=this._metaInformation[e])||void 0===o?void 0:o.level)&&this._notebookModelNull)continue;if((null===(a=this._metaInformation[e])||void 0===a?void 0:a.cellTypes)&&!(null===(s=null===(i=this._metaInformation[e])||void 0===i?void 0:i.cellTypes)||void 0===s?void 0:s.includes(p.model.type)))continue;let t,_;"notebook"===(null===(l=this._metaInformation[e])||void 0===l?void 0:l.level)?(t=m.model.metadata,_=u):(t=p.model.metadata,_=c);let v=e.replace(/^\/+/,"").replace(/\/+$/,"").split("/"),g=v[0];if(null==g)continue;let b=void 0!==f&&(null===(n=null===(d=this._metaInformation[e])||void 0===d?void 0:d.writeDefault)||void 0===n||n||f!==(null===(r=this._metaInformation[e])||void 0===r?void 0:r.default));if(1==v.length){_[g]=b?f:void 0;continue}let M=v.slice(1,-1),k=v[v.length-1];g in _||(_[g]=t[g]),void 0===_[g]&&(_[g]={});let C=_[g],w=!0;for(let t of M){if(!(t in C)){if(!b){w=!1;break}C[t]={}}C=C[t]}w&&(b?C[k]=f:delete C[k]),b||(_[g]=h.deleteEmptyNested(_[g],v.slice(1)),Object.keys(_[g]).length||(_[g]=void 0))}for(let[t,e]of Object.entries(c))void 0===e?p.model.deleteMetadata(t):p.model.setMetadata(t,e);if(!this._notebookModelNull)for(let[t,e]of Object.entries(u))void 0===e?m.model.deleteMetadata(t):m.model.setMetadata(t,e);this._updatingMetadata=!1,e&&this._update()},this._notebookModelNull=!1,this._metadataSchema=t.metadataSchema,this._metaInformation=t.metaInformation,this._uiSchema=t.uiSchema||{},this._pluginId=t.pluginId,this._showModified=t.showModified||!1,this.translator=t.translator||c.nullTranslator,this._trans=this.translator.load("jupyterlab"),this._updatingMetadata=!1;const e=this.layout=new f.SingletonLayout,o=document.createElement("div"),a=document.createElement("div");a.textContent=this._trans.__("No metadata."),a.className="jp-MetadataForm-placeholderContent",o.appendChild(a),this._placeholder=new f.Widget({node:o}),this._placeholder.addClass("jp-MetadataForm-placeholder"),e.widget=this._placeholder}get form(){return this._form}get metadataKeys(){var t;const e=[];for(let t of Object.keys(this._metadataSchema.properties))e.push(t);return null===(t=this._metadataSchema.allOf)||void 0===t||t.forEach((t=>{if(void 0!==t.then&&void 0!==t.then.properties){let o=t.then.properties;for(let t of Object.keys(o))e.includes(t)||e.push(t)}if(void 0!==t.else&&void 0!==t.else.properties){let o=t.else.properties;for(let t of Object.keys(o))e.includes(t)||e.push(t)}})),e}getProperties(t){return u.JSONExt.deepCopy(this._metadataSchema.properties[t])||null}setProperties(t,e){Object.entries(e).forEach((([e,o])=>{this._metadataSchema.properties[t][e]=o}))}setContent(t){const e=this.layout;e.widget&&(e.widget.removeClass("jp-MetadataForm-content"),e.removeWidget(e.widget)),t||(t=this._placeholder),t.addClass("jp-MetadataForm-content"),e.widget=t}buildWidget(t){this._form=new r(t),this._form.addClass("jp-MetadataForm"),this.setContent(this._form)}onAfterShow(t){this._update()}onActiveCellChanged(t){this.isVisible&&this._update()}onActiveCellMetadataChanged(t){!this._updatingMetadata&&this.isVisible&&this._update()}onActiveNotebookPanelChanged(t){const e=this.notebookTools.activeNotebookPanel;this._notebookModelNull=null===e||null===e.model,!this._updatingMetadata&&this.isVisible&&this._update()}onActiveNotebookPanelMetadataChanged(t){!this._updatingMetadata&&this.isVisible&&this._update()}_update(){var t,e,o,a,i;const s=this.notebookTools.activeNotebookPanel,l=this.notebookTools.activeCell;if(null==l)return;const d=u.JSONExt.deepCopy(this._metadataSchema),n={};for(let r of Object.keys(this._metadataSchema.properties||u.JSONExt.emptyObject)){if("notebook"===(null===(t=this._metaInformation[r])||void 0===t?void 0:t.level)&&this._notebookModelNull){delete d.properties[r];continue}if((null===(e=this._metaInformation[r])||void 0===e?void 0:e.cellTypes)&&!(null===(a=null===(o=this._metaInformation[r])||void 0===o?void 0:o.cellTypes)||void 0===a?void 0:a.includes(l.model.type))){delete d.properties[r];continue}let h,m=r.replace(/^\/+/,"").replace(/\/+$/,"").split("/");h="notebook"===(null===(i=this._metaInformation[r])||void 0===i?void 0:i.level)?s.model.metadata:l.model.metadata;let p=!0;for(let t of m){if(!(t in h)){p=!1;break}h=h[t]}p&&(n[r]=h)}this.buildWidget({properties:d,settings:new p.BaseSettings({schema:this._metadataSchema}),uiSchema:this._uiSchema,translator:this.translator||null,formData:n,metadataFormWidget:this,showModified:this._showModified,pluginId:this._pluginId})}}!function(t){t.deleteEmptyNested=function t(e,o){let a=o.shift();return void 0!==a&&a in e&&(Object.keys(e[a]).length&&(e[a]=t(e[a],o)),Object.keys(e[a]).length||delete e[a]),e}}(h||(h={}));class v{constructor(){this._items={}}add(t,e){this._items[t]?console.warn(`A MetadataformWidget is already registered with id ${t}`):this._items[t]=e}get(t){if(this._items[t])return this._items[t];console.warn(`There is no MetadataformWidget registered with id ${t}`)}}const g=new u.Token("@jupyterlab/metadataform:IMetadataFormProvider","A service to register new metadata editor widgets.")}}]);