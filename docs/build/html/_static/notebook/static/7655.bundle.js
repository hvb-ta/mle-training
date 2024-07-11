"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7655],{97655:(e,t,o)=>{o.r(t),o.d(t,{default:()=>S,lineColItem:()=>w});var r,n=o(44604),i=o(51429),a=o(71098),s=o(12030),d=o(87797),l=o(24636);!function(e){e.deleteLine="codemirror:delete-line",e.toggleBlockComment="codemirror:toggle-block-comment",e.toggleComment="codemirror:toggle-comment",e.selectNextOccurrence="codemirror:select-next-occurrence"}(r||(r={}));const c=".cm-content",m={id:"@jupyterlab/codemirror-extension:commands",description:"Registers commands acting on selected/active CodeMirror editor.",autoStart:!0,optional:[s.ITranslator],activate:(e,t)=>{const o=(t=null!=t?t:s.nullTranslator).load("jupyterlab"),n=e=>e.classList.contains(c),i=()=>{var t,o;const r=null!==(t=e.contextMenuHitTest(n))&&void 0!==t?t:null===(o=document.activeElement)||void 0===o?void 0:o.closest(c);if(r&&"cmView"in r)return r.cmView.view},a=()=>!!i();e.commands.addCommand(r.deleteLine,{label:o.__("Delete the current line"),execute:()=>{const e=i();e&&(0,d.deleteLine)(e)},isEnabled:a}),e.commands.addCommand(r.toggleBlockComment,{label:o.__("Toggle Block Comment"),caption:o.__("Toggles block commends in languages which support it (e.g. C, JavaScript)"),execute:()=>{const e=i();e&&(0,d.toggleBlockComment)(e)},isEnabled:a}),e.commands.addCommand(r.toggleComment,{label:o.__("Toggle Comment"),execute:()=>{const e=i();e&&(0,d.toggleComment)(e)},isEnabled:a}),e.commands.addCommand(r.selectNextOccurrence,{label:o.__("Select Next Occurrence"),execute:()=>{const e=i();e&&(0,l.selectNextOccurrence)(e)},isEnabled:a})}};var u=o(17592),g=o(30525),p=o(23295),h=o(35613),v=o(20998),y=o(27478),f=o.n(y),E=o(78156),x=o.n(E);const b="@jupyterlab/codemirror-extension:plugin",C={id:"@jupyterlab/codemirror-extension:languages",description:"Provides the CodeMirror languages registry.",provides:g.IEditorLanguageRegistry,optional:[s.ITranslator],activate:(e,t)=>{const r=new g.EditorLanguageRegistry;for(const e of g.EditorLanguageRegistry.getDefaultLanguages(t))r.addLanguage(e);return r.addLanguage({name:"ipythongfm",mime:"text/x-ipythongfm",load:async()=>{const[e,t,n]=await Promise.all([o.e(1120).then(o.t.bind(o,51120,23)),Promise.all([o.e(9799),o.e(2552),o.e(3546),o.e(9843),o.e(9352),o.e(2209)]).then(o.bind(o,12552)),o.e(311).then(o.bind(o,60311))]),i=e.markdown({base:e.markdownLanguage,codeLanguages:e=>r.findBest(e),extensions:[(0,g.parseMathIPython)(u.StreamLanguage.define(n.stexMath).parser)]});return new u.LanguageSupport(i.language,[i.support,(0,g.pythonBuiltin)(t.pythonLanguage)])}}),r}},T={id:"@jupyterlab/codemirror-extension:themes",description:"Provides the CodeMirror theme registry",provides:g.IEditorThemeRegistry,optional:[s.ITranslator],activate:(e,t)=>{const o=new g.EditorThemeRegistry;for(const e of g.EditorThemeRegistry.getDefaultThemes(t))o.addTheme(e);return o}},R={id:"@jupyterlab/codemirror-extension:extensions",description:"Provides the CodeMirror extension factory registry.",provides:g.IEditorExtensionRegistry,requires:[g.IEditorThemeRegistry],optional:[s.ITranslator,p.ISettingRegistry,h.IFormRendererRegistry],activate:(e,t,o,r,n)=>{const i=new g.EditorExtensionRegistry;for(const e of g.EditorExtensionRegistry.getDefaultExtensions({themes:t,translator:o}))i.addExtension(e);if(r){const t=e=>{var t;i.baseConfiguration=null!==(t=e.get("defaultConfig").composite)&&void 0!==t?t:{}};Promise.all([r.load(b),e.restored]).then((([e])=>{t(e),e.changed.connect(t)})),null==n||n.addRenderer(`${b}.defaultConfig`,{fieldRenderer:e=>{const t=x().useMemo((()=>i.settingsSchema),[]),r={};for(const[e,o]of Object.entries(i.defaultConfiguration))void 0!==t[e]&&(r[e]=o);return x().createElement("div",{className:"jp-FormGroup-contentNormal"},x().createElement("h3",{className:"jp-FormGroup-fieldLabel jp-FormGroup-contentItem"},e.schema.title),e.schema.description&&x().createElement("div",{className:"jp-FormGroup-description"},e.schema.description),x().createElement(h.FormComponent,{schema:{title:e.schema.title,description:e.schema.description,type:"object",properties:t,additionalProperties:!1},validator:f(),formData:{...r,...e.formData},formContext:{defaultFormData:r},liveValidate:!0,onChange:t=>{var o;const n={};for(const[e,i]of Object.entries(null!==(o=t.formData)&&void 0!==o?o:{})){const t=r[e];void 0!==t&&v.JSONExt.deepEqual(i,t)||(n[e]=i)}e.onChange(n)},tagName:"div",translator:null!=o?o:s.nullTranslator}))}})}return i}},I={id:"@jupyterlab/codemirror-extension:binding",description:"Register the CodeMirror extension factory binding the editor and the shared model.",autoStart:!0,requires:[g.IEditorExtensionRegistry],activate:(e,t)=>{t.addExtension({name:"shared-model-binding",factory:e=>{var t;const o=e.model.sharedModel;return g.EditorExtensionRegistry.createImmutableExtension((0,g.ybinding)({ytext:o.ysource,undoManager:null!==(t=o.undoManager)&&void 0!==t?t:void 0}))}})}},L={id:"@jupyterlab/codemirror-extension:services",description:"Provides the service to instantiate CodeMirror editors.",provides:i.IEditorServices,requires:[g.IEditorLanguageRegistry,g.IEditorExtensionRegistry],optional:[s.ITranslator],activate:(e,t,o,r)=>({factoryService:new g.CodeMirrorEditorFactory({extensions:o,languages:t,translator:null!=r?r:s.nullTranslator}),mimeTypeService:new g.CodeMirrorMimeTypeService(t)})},w={id:"@jupyterlab/codemirror-extension:line-col-status",description:"Provides the code editor cursor position model.",autoStart:!0,requires:[s.ITranslator],optional:[n.ILabShell,a.IStatusBar],provides:i.IPositionModel,activate:(e,t,o,r)=>{const n=new i.LineCol(t),a=new Set;function s(e,t){Promise.all([...a].map((e=>e(t.newValue)))).then((e=>{var t;n.model.editor=null!==(t=e.filter((e=>null!==e))[0])&&void 0!==t?t:null})).catch((e=>{console.error("Get editors",e)}))}return r&&r.registerStatusItem(w.id,{priority:1,item:n,align:"right",rank:2,isActive:()=>!!n.model.editor}),o&&o.currentChanged.connect(s),{addEditorProvider:t=>{a.add(t),e.shell.currentWidget&&s(e.shell,{newValue:e.shell.currentWidget,oldValue:null})},update:()=>{s(e.shell,{oldValue:e.shell.currentWidget,newValue:e.shell.currentWidget})}}}},S=[m,C,T,I,R,L,w]}}]);