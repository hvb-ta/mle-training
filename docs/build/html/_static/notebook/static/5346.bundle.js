"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5346],{15346:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(25460),l=a(78156),s=a.n(l),d=a(35613),i=a(33625),r=a(12030);const o="jp-CellTags-Tag",c="jp-CellTags-Unapplied",g="jp-CellTags-Holder",p="jp-CellTags-Add",u="jp-CellTags-Empty";class h{constructor(e,t){this._tracker=e,this._translator=t||r.nullTranslator,this._trans=this._translator.load("jupyterlab"),this._editing=!1}addTag(e,t){const a=e.formData;t&&!a.includes(t)&&(a.push(t),e.formContext.updateMetadata({[e.name]:a},!0))}pullTags(){var e,t;const a=null===(e=this._tracker)||void 0===e?void 0:e.currentWidget,n=null===(t=null==a?void 0:a.model)||void 0===t?void 0:t.cells;if(void 0===n)return[];const l=(0,i.reduce)(n,((e,t)=>{var a;return[...e,...null!==(a=t.getMetadata("tags"))&&void 0!==a?a:[]]}),[]);return[...new Set(l)].filter((e=>""!==e))}_emptyAddTag(e){e.value="",e.style.width="",e.classList.add(u)}_onAddTagKeyDown(e,t){const a=t.target;t.ctrlKey||("Enter"===t.key?this.addTag(e,a.value):"Escape"===t.key&&this._emptyAddTag(a))}_onAddTagFocus(e){this._editing||e.target.blur()}_onAddTagBlur(e){this._editing&&(this._editing=!1,this._emptyAddTag(e))}_onChange(e){if(e.target.value){e.target.classList.remove(u);const t=document.createElement("span");t.className=p,t.textContent=e.target.value,document.body.appendChild(t),e.target.style.setProperty("width",`calc(${t.getBoundingClientRect().width}px + var(--jp-add-tag-extra-width))`),document.body.removeChild(t)}else this._emptyAddTag(e.target)}_onAddTagClick(e,t){const a=t.target.closest("div"),n=null==a?void 0:a.childNodes[0];this._editing?t.target!==n&&this.addTag(e,n.value):(this._editing=!0,n.value="",n.focus()),t.preventDefault()}_onTagClick(e,t){const a=e.formData;a.includes(t)?a.splice(a.indexOf(t),1):a.push(t),e.formContext.updateMetadata({[e.name]:a},!0)}render(e){const t=this.pullTags();return s().createElement("div",{className:"jp-CellTags"},s().createElement("div",{className:"jp-FormGroup-fieldLabel jp-FormGroup-contentItem"},"Cell Tags"),t&&t.map(((t,a)=>s().createElement("div",{key:a,className:`${o} ${e.formData.includes(t)?"jp-CellTags-Applied":c}`,onClick:()=>this._onTagClick(e,t)},s().createElement("div",{className:g},s().createElement("span",null,t),e.formData.includes(t)&&s().createElement(d.LabIcon.resolveReact,{icon:d.checkIcon,tag:"span",elementPosition:"center",height:"18px",width:"18px",marginLeft:"5px",marginRight:"-3px"}))))),s().createElement("div",{className:`${o} ${c}`},s().createElement("div",{className:g,onMouseDown:t=>this._onAddTagClick(e,t)},s().createElement("input",{className:`${p} ${u}`,type:"text",placeholder:this._trans.__("Add Tag"),onKeyDown:t=>this._onAddTagKeyDown(e,t),onFocus:e=>this._onAddTagFocus(e),onBlur:e=>this._onAddTagBlur(e.target),onChange:e=>{this._onChange(e)}}),s().createElement(d.LabIcon.resolveReact,{icon:d.addIcon,tag:"span",height:"18px",width:"18px",marginLeft:"5px",marginRight:"-3px"}))))}}const m=[{id:"@jupyterlab/celltags-extension:plugin",description:"Adds the cell tags editor.",autoStart:!0,requires:[n.INotebookTracker],optional:[d.IFormRendererRegistry],activate:(e,t,a)=>{if(a){const e={fieldRenderer:e=>new h(t).render(e)};a.addRenderer("@jupyterlab/celltags-extension:plugin.renderer",e)}}}]}}]);