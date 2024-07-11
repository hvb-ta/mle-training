"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2184],{42184:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(44604),o=n(53312),i=n(73166),r=n(51429),s=n(67260),l=n(68722),d=n(63050),c=n(65903),u=n(34663),g=n(44182),b=n(25460),p=n(81221),v=n(23295),m=n(12030);function h(e){Object.values(d.Debugger.CommandIDs).forEach((t=>{e.commands.hasCommand(t)&&e.commands.notifyCommandChanged(t)}))}const I={id:"@jupyterlab/debugger-extension:consoles",description:"Add debugger capability to the consoles.",autoStart:!0,requires:[d.IDebugger,s.IConsoleTracker],optional:[a.ILabShell],activate:(e,t,n,a)=>{const o=new d.Debugger.Handler({type:"console",shell:e.shell,service:t}),i=async t=>{const{sessionContext:n}=t;await n.ready,await o.updateContext(t,n),h(e)};a?a.currentChanged.connect(((e,t)=>{const n=t.newValue;n instanceof s.ConsolePanel&&i(n)})):n.currentChanged.connect(((e,t)=>{t&&i(t)}))}},f={id:"@jupyterlab/debugger-extension:files",description:"Adds debugger capabilities to files.",autoStart:!0,requires:[d.IDebugger,u.IEditorTracker],optional:[a.ILabShell],activate:(e,t,n,a)=>{const o=new d.Debugger.Handler({type:"file",shell:e.shell,service:t}),i={},r=async t=>{const n=e.serviceManager.sessions;try{const a=await n.findByPath(t.context.path);if(!a)return;let r=i[a.id];r||(r=n.connectTo({model:a}),i[a.id]=r),await o.update(t,r),h(e)}catch(e){return}};a?a.currentChanged.connect(((e,t)=>{const n=t.newValue;if(n instanceof c.DocumentWidget){const{content:e}=n;e instanceof u.FileEditor&&r(n)}})):n.currentChanged.connect(((e,t)=>{t&&r(t)}))}},y={id:"@jupyterlab/debugger-extension:notebooks",description:"Adds debugger capability to notebooks and provides the debugger notebook handler.",autoStart:!0,requires:[d.IDebugger,b.INotebookTracker],optional:[a.ILabShell,o.ICommandPalette,o.ISessionContextDialogs,m.ITranslator],provides:d.IDebuggerHandler,activate:(e,t,n,a,i,r,s)=>{const l=null!=s?s:m.nullTranslator,c=null!=r?r:new o.SessionContextDialogs({translator:l}),u=new d.Debugger.Handler({type:"notebook",shell:e.shell,service:t}),g=l.load("jupyterlab");e.commands.addCommand(d.Debugger.CommandIDs.restartDebug,{label:g.__("Restart Kernel and Debug…"),caption:g.__("Restart Kernel and Debug…"),isEnabled:()=>t.isStarted,execute:async()=>{const e=t.getDebuggerState();await t.stop();const a=n.currentWidget;if(!a)return;const{content:o,sessionContext:i}=a;await c.restart(i)&&(await t.restoreDebuggerState(e),await u.updateWidget(a,i.session),await b.NotebookActions.runAll(o,i,c,l))}});const p=async t=>{if(t){const{sessionContext:e}=t;await e.ready,await u.updateContext(t,e)}h(e)};return a?a.currentChanged.connect(((e,t)=>{const n=t.newValue;n instanceof b.NotebookPanel&&p(n)})):n.currentChanged.connect(((e,t)=>{t&&p(t)})),i&&i.addItem({category:"Notebook Operations",command:d.Debugger.CommandIDs.restartDebug}),u}},C={id:"@jupyterlab/debugger-extension:service",description:"Provides the debugger service.",autoStart:!0,provides:d.IDebugger,requires:[d.IDebuggerConfig],optional:[d.IDebuggerSources,m.ITranslator],activate:(e,t,n,a)=>new d.Debugger.Service({config:t,debuggerSources:n,specsManager:e.serviceManager.kernelspecs,translator:a})},_={id:"@jupyterlab/debugger-extension:config",description:"Provides the debugger configuration",provides:d.IDebuggerConfig,autoStart:!0,activate:()=>new d.Debugger.Config},D={id:"@jupyterlab/debugger-extension:sources",description:"Provides the source feature for debugging",autoStart:!0,provides:d.IDebuggerSources,requires:[d.IDebuggerConfig,r.IEditorServices],optional:[b.INotebookTracker,s.IConsoleTracker,u.IEditorTracker],activate:(e,t,n,a,o,i)=>new d.Debugger.Sources({config:t,shell:e.shell,editorServices:n,notebookTracker:a,consoleTracker:o,editorTracker:i})},S={id:"@jupyterlab/debugger-extension:variables",description:"Adds variables renderer and inspection in the debugger variable panel.",autoStart:!0,requires:[d.IDebugger,d.IDebuggerHandler,m.ITranslator],optional:[o.IThemeManager,p.IRenderMimeRegistry],activate:(e,t,n,a,i,r)=>{const s=a.load("jupyterlab"),{commands:l,shell:c}=e,u=new o.WidgetTracker({namespace:"debugger/inspect-variable"}),g=new o.WidgetTracker({namespace:"debugger/render-variable"}),p=d.Debugger.CommandIDs;l.addCommand(p.inspectVariable,{label:s.__("Inspect Variable"),caption:s.__("Inspect Variable"),isEnabled:e=>{var n,a,o,i;return!!(null===(n=t.session)||void 0===n?void 0:n.isStarted)&&Number(null!==(i=null!==(a=e.variableReference)&&void 0!==a?a:null===(o=t.model.variables.selectedVariable)||void 0===o?void 0:o.variablesReference)&&void 0!==i?i:0)>0},execute:async e=>{var n,a,r,s;let{variableReference:g,name:b}=e;g||(g=null===(n=t.model.variables.selectedVariable)||void 0===n?void 0:n.variablesReference),b||(b=null===(a=t.model.variables.selectedVariable)||void 0===a?void 0:a.name);const p=`jp-debugger-variable-${b}`;if(!b||!g||u.find((e=>e.id===p)))return;const v=await t.inspectVariable(g);if(!v||0===v.length)return;const m=t.model.variables,h=new o.MainAreaWidget({content:new d.Debugger.VariablesGrid({model:m,commands:l,scopes:[{name:b,variables:v}],themeManager:i})});h.addClass("jp-DebuggerVariables"),h.id=p,h.title.icon=d.Debugger.Icons.variableIcon,h.title.label=`${null===(s=null===(r=t.session)||void 0===r?void 0:r.connection)||void 0===s?void 0:s.name} - ${b}`,u.add(h);const I=()=>{h.dispose(),m.changed.disconnect(I)};m.changed.connect(I),c.add(h,"main",{mode:u.currentWidget?"split-right":"split-bottom",activate:!1,type:"Debugger Variables"})}}),l.addCommand(p.renderMimeVariable,{label:s.__("Render Variable"),caption:s.__("Render variable according to its mime type"),isEnabled:()=>{var e;return!!(null===(e=t.session)||void 0===e?void 0:e.isStarted)},isVisible:()=>t.model.hasRichVariableRendering&&(null!==r||n.activeWidget instanceof b.NotebookPanel),execute:e=>{var o,i,s,l,u,p,v,m;let{name:h,frameId:I}=e;h||(h=null===(o=t.model.variables.selectedVariable)||void 0===o?void 0:o.name),I||(I=null===(i=t.model.callstack.frame)||void 0===i?void 0:i.id);const f=n.activeWidget;let y=f instanceof b.NotebookPanel?f.content.rendermime:r;if(!y)return;const C=`jp-debugger-variable-mime-${h}-${null===(l=null===(s=t.session)||void 0===s?void 0:s.connection)||void 0===l?void 0:l.path.replace("/","-")}`;if(!h||g.find((e=>e.id===C))||!I&&t.hasStoppedThreads())return;const _=t.model.variables,D=new d.Debugger.VariableRenderer({dataLoader:()=>t.inspectRichVariable(h,I),rendermime:y,translator:a});D.addClass("jp-DebuggerRichVariable"),D.id=C,D.title.icon=d.Debugger.Icons.variableIcon,D.title.label=`${h} - ${null===(p=null===(u=t.session)||void 0===u?void 0:u.connection)||void 0===p?void 0:p.name}`,D.title.caption=`${h} - ${null===(m=null===(v=t.session)||void 0===v?void 0:v.connection)||void 0===m?void 0:m.path}`,g.add(D);const S=()=>{D.dispose(),_.changed.disconnect(w),null==f||f.disposed.disconnect(S)},w=()=>{n.activeWidget===f&&D.refresh()};D.disposed.connect(S),_.changed.connect(w),null==f||f.disposed.connect(S),c.add(D,"main",{mode:g.currentWidget?"split-right":"split-bottom",activate:!1,type:"Debugger Variables"})}}),l.addCommand(p.copyToClipboard,{label:s.__("Copy to Clipboard"),caption:s.__("Copy text representation of the value to clipboard"),isEnabled:()=>{var e,n;return!!(null===(e=t.session)||void 0===e?void 0:e.isStarted)&&!!(null===(n=t.model.variables.selectedVariable)||void 0===n?void 0:n.value)},isVisible:()=>n.activeWidget instanceof b.NotebookPanel,execute:async()=>{const e=t.model.variables.selectedVariable.value;e&&o.Clipboard.copyToSystem(e)}}),l.addCommand(p.copyToGlobals,{label:s.__("Copy Variable to Globals"),caption:s.__("Copy variable to globals scope"),isEnabled:()=>{var e;return!!(null===(e=t.session)||void 0===e?void 0:e.isStarted)},isVisible:()=>n.activeWidget instanceof b.NotebookPanel&&t.model.supportCopyToGlobals,execute:async e=>{const n=t.model.variables.selectedVariable.name;await t.copyToGlobals(n)}})}},w={id:"@jupyterlab/debugger-extension:sidebar",description:"Provides the debugger sidebar.",provides:d.IDebuggerSidebar,requires:[d.IDebugger,r.IEditorServices,m.ITranslator],optional:[o.IThemeManager,v.ISettingRegistry],autoStart:!0,activate:async(e,t,n,a,o,i)=>{const{commands:r}=e,s=d.Debugger.CommandIDs,l={registry:r,continue:s.debugContinue,terminate:s.terminate,next:s.next,stepIn:s.stepIn,stepOut:s.stepOut,evaluate:s.evaluate},c={registry:r,pauseOnExceptions:s.pauseOnExceptions},u=new d.Debugger.Sidebar({service:t,callstackCommands:l,breakpointsCommands:c,editorServices:n,themeManager:o,translator:a});if(i){const e=await i.load(k.id),n=()=>{var n,a,o,i;const r=e.get("variableFilters").composite,s=null!==(i=null===(o=null===(a=null===(n=t.session)||void 0===n?void 0:n.connection)||void 0===a?void 0:a.kernel)||void 0===o?void 0:o.name)&&void 0!==i?i:"";s&&r[s]&&(u.variables.filter=new Set(r[s]));const l=e.get("defaultKernelSourcesFilter").composite;u.kernelSources.filter=l};n(),e.changed.connect(n),t.sessionChanged.connect(n)}return u}},x={id:"@jupyterlab/debugger-extension:source-viewer",description:"Initialize the debugger sources viewer.",requires:[d.IDebugger,r.IEditorServices,d.IDebuggerSources,m.ITranslator],provides:d.IDebuggerSourceViewer,autoStart:!0,activate:async(e,t,n,a,i)=>{const r=new d.Debugger.ReadOnlyEditorFactory({editorServices:n}),{model:s}=t;s.callstack.currentFrameChanged.connect(((e,n)=>{var o,i,r,s,l,c,u,g,b;a.find({focus:!0,kernel:null!==(s=null===(r=null===(i=null===(o=t.session)||void 0===o?void 0:o.connection)||void 0===i?void 0:i.kernel)||void 0===r?void 0:r.name)&&void 0!==s?s:"",path:null!==(u=null===(c=null===(l=t.session)||void 0===l?void 0:l.connection)||void 0===c?void 0:c.path)&&void 0!==u?u:"",source:null!==(b=null===(g=null==n?void 0:n.source)||void 0===g?void 0:g.path)&&void 0!==b?b:""}).forEach((e=>{requestAnimationFrame((()=>{e.reveal().then((()=>{const t=e.get();t&&d.Debugger.EditorHandler.showCurrentLine(t,n.line)}))}))}))}));const c=(e,n)=>{var o,i,s,c,u,g,b;if(!e)return;const{content:p,mimeType:v,path:m}=e,h=a.find({focus:!0,kernel:null!==(c=null===(s=null===(i=null===(o=t.session)||void 0===o?void 0:o.connection)||void 0===i?void 0:i.kernel)||void 0===s?void 0:s.name)&&void 0!==c?c:"",path:null!==(b=null===(g=null===(u=t.session)||void 0===u?void 0:u.connection)||void 0===g?void 0:g.path)&&void 0!==b?b:"",source:m});if(h.length>0)return void(n&&void 0!==n.line&&h.forEach((e=>{e.reveal().then((()=>{var t;null===(t=e.get())||void 0===t||t.revealPosition({line:n.line-1,column:n.column||0})}))})));const I=r.createNewEditor({content:p,mimeType:v,path:m}),f=I.editor,y=new d.Debugger.EditorHandler({debuggerService:t,editorReady:()=>Promise.resolve(f),getEditor:()=>f,path:m,src:f.model.sharedModel});I.disposed.connect((()=>y.dispose())),a.open({label:l.PathExt.basename(m),caption:m,editorWrapper:I});const C=t.model.callstack.frame;C&&d.Debugger.EditorHandler.showCurrentLine(f,C.line)},u=i.load("jupyterlab");return e.commands.addCommand(d.Debugger.CommandIDs.openSource,{label:u.__("Open Source"),caption:u.__("Open Source"),isEnabled:()=>!!x,execute:async e=>{const n=e.path||"";if(!n)throw Error("Path to open is needed");if(!t.isStarted){if(!(await(0,o.showDialog)({title:u.__("Start debugger?"),body:u.__("The debugger service is needed to open the source %1",n),buttons:[o.Dialog.cancelButton({label:u.__("Cancel")}),o.Dialog.okButton({label:u.__("Start debugger")})]})).button.accept)return;await t.start()}const a=await t.getSource({path:n});return c(a)}}),Object.freeze({open:c})}},k={id:"@jupyterlab/debugger-extension:main",description:"Initialize the debugger user interface.",requires:[d.IDebugger,d.IDebuggerSidebar,r.IEditorServices,m.ITranslator],optional:[o.ICommandPalette,d.IDebuggerSourceViewer,a.ILabShell,a.ILayoutRestorer,g.ILoggerRegistry,v.ISettingRegistry],autoStart:!0,activate:async(e,t,n,a,r,s,c,u,g,b,v)=>{var m;const I=r.load("jupyterlab"),{commands:f,shell:y,serviceManager:C}=e,{kernelspecs:_}=C,D=d.Debugger.CommandIDs;if("true"!==l.PageConfig.getOption("alwaysShowDebuggerExtension").toLowerCase()){await _.ready;const e=null===(m=_.specs)||void 0===m?void 0:m.kernelspecs;if(!e)return;const t=Object.keys(e).some((t=>{var n,a,o;return!(null===(o=null===(a=null===(n=e[t])||void 0===n?void 0:n.metadata)||void 0===a?void 0:a.debugger)||void 0===o||!o)}));if(!t)return}const S=new p.RenderMimeRegistry({initialFactories:p.standardRendererFactories});f.addCommand(D.evaluate,{label:I.__("Evaluate Code"),caption:I.__("Evaluate Code"),icon:d.Debugger.Icons.evaluateIcon,isEnabled:()=>t.hasStoppedThreads(),execute:async()=>{var e,n,o;const r=await(async()=>{var e,n,o;const i=null===(n=null===(e=t.session)||void 0===e?void 0:e.connection)||void 0===n?void 0:n.kernel;if(!i)return"";const r=(await i.info).language_info.name;return null!==(o=a.mimeTypeService.getMimeTypeByLanguage({name:r}))&&void 0!==o?o:""})(),s=await d.Debugger.Dialogs.getCode({title:I.__("Evaluate Code"),okLabel:I.__("Evaluate"),cancelLabel:I.__("Cancel"),mimeType:r,contentFactory:new i.CodeCell.ContentFactory({editorFactory:e=>a.factoryService.newInlineEditor(e)}),rendermime:S}),l=s.value;if(!s.button.accept||!l)return;const c=await t.evaluate(l);if(c){const a=c.result,i=null===(n=null===(e=null==t?void 0:t.session)||void 0===e?void 0:e.connection)||void 0===n?void 0:n.path,r=i?null===(o=null==b?void 0:b.getLogger)||void 0===o?void 0:o.call(b,i):void 0;r?r.log({type:"text",data:a,level:r.level}):console.debug(a)}}}),f.addCommand(D.debugContinue,{label:()=>t.hasStoppedThreads()?I.__("Continue"):I.__("Pause"),caption:()=>t.hasStoppedThreads()?I.__("Continue"):I.__("Pause"),icon:()=>t.hasStoppedThreads()?d.Debugger.Icons.continueIcon:d.Debugger.Icons.pauseIcon,isEnabled:()=>{var e,n;return null!==(n=null===(e=t.session)||void 0===e?void 0:e.isStarted)&&void 0!==n&&n},execute:async()=>{t.hasStoppedThreads()?await t.continue():await t.pause(),f.notifyCommandChanged(D.debugContinue)}}),f.addCommand(D.terminate,{label:I.__("Terminate"),caption:I.__("Terminate"),icon:d.Debugger.Icons.terminateIcon,isEnabled:()=>t.hasStoppedThreads(),execute:async()=>{await t.restart(),h(e)}}),f.addCommand(D.next,{label:I.__("Next"),caption:I.__("Next"),icon:d.Debugger.Icons.stepOverIcon,isEnabled:()=>t.hasStoppedThreads(),execute:async()=>{await t.next()}}),f.addCommand(D.stepIn,{label:I.__("Step In"),caption:I.__("Step In"),icon:d.Debugger.Icons.stepIntoIcon,isEnabled:()=>t.hasStoppedThreads(),execute:async()=>{await t.stepIn()}}),f.addCommand(D.stepOut,{label:I.__("Step Out"),caption:I.__("Step Out"),icon:d.Debugger.Icons.stepOutIcon,isEnabled:()=>t.hasStoppedThreads(),execute:async()=>{await t.stepOut()}}),f.addCommand(D.pauseOnExceptions,{label:e=>e.filter||"Breakpoints on exception",caption:e=>e.description,isToggled:e=>{var n;return(null===(n=t.session)||void 0===n?void 0:n.isPausingOnException(e.filter))||!1},isEnabled:()=>t.pauseOnExceptionsIsValid(),execute:async e=>{var n,a,i;if(null==e?void 0:e.filter){let n=e.filter;await t.pauseOnExceptionsFilter(n)}else{let e=[];null===(a=null===(n=t.session)||void 0===n?void 0:n.exceptionBreakpointFilters)||void 0===a||a.forEach((t=>{e.push(t.filter)}));const r=await o.InputDialog.getMultipleItems({title:I.__("Select a filter for breakpoints on exception"),items:e,defaults:(null===(i=t.session)||void 0===i?void 0:i.currentExceptionFilters)||[]});let s=r.button.accept?r.value:null;null!==s&&await t.pauseOnExceptions(s)}}});let w=!1;if(v){const e=await v.load(k.id),t=()=>{w=e.get("autoCollapseDebuggerSidebar").composite};t(),e.changed.connect(t)}if(t.eventMessage.connect(((t,a)=>{h(e),u&&"initialized"===a.event?u.activateById(n.id):u&&n.isVisible&&"terminated"===a.event&&w&&u.collapseRight()})),t.sessionChanged.connect((t=>{h(e)})),g&&g.add(n,"debugger-sidebar"),n.node.setAttribute("role","region"),n.node.setAttribute("aria-label",I.__("Debugger section")),n.title.caption=I.__("Debugger"),y.add(n,"right",{type:"Debugger"}),f.addCommand(D.showPanel,{label:I.__("Debugger Panel"),execute:()=>{y.activateById(n.id)}}),s){const e=I.__("Debugger");[D.debugContinue,D.terminate,D.next,D.stepIn,D.stepOut,D.evaluate,D.pauseOnExceptions].forEach((t=>{s.addItem({command:t,category:e})}))}if(c){const{model:e}=t,n=(e,t,n)=>{t&&c.open(t,n)};e.sources.currentSourceOpened.connect(((e,t)=>{c.open(t)})),e.kernelSources.kernelSourceOpened.connect(n),e.breakpoints.clicked.connect((async(e,n)=>{var a;const o=null===(a=n.source)||void 0===a?void 0:a.path,i=await t.getSource({sourceReference:0,path:o});c.open(i,n)}))}}},E=[C,I,f,y,S,w,k,D,x,_]}}]);