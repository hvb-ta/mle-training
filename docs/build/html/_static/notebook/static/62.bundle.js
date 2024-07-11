"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[62],{40062:(e,o,n)=>{n.r(o),n.d(o,{default:()=>c});var t,l=n(44604),a=n(23295),d=n(79426),i=n(12030),s=n(35613);!function(e){e.displayNumbering="toc:display-numbering",e.displayH1Numbering="toc:display-h1-numbering",e.displayOutputNumbering="toc:display-outputs-numbering",e.showPanel="toc:show-panel",e.toggleCollapse="toc:toggle-collapse"}(t||(t={}));const r={id:"@jupyterlab/toc-extension:registry",description:"Provides the table of contents registry.",autoStart:!0,provides:d.ITableOfContentsRegistry,activate:()=>new d.TableOfContentsRegistry},u={id:"@jupyterlab/toc-extension:tracker",description:"Adds the table of content widget and provides its tracker.",autoStart:!0,provides:d.ITableOfContentsTracker,requires:[d.ITableOfContentsRegistry],optional:[i.ITranslator,l.ILayoutRestorer,l.ILabShell,a.ISettingRegistry],activate:async function(e,o,n,l,a,u){const c=(null!=n?n:i.nullTranslator).load("jupyterlab");let m={...d.TableOfContents.defaultConfig};const g=new d.TableOfContentsPanel(null!=n?n:void 0);function b(e){return e.headings.some((e=>{var o;return!(null!==(o=e.collapsed)&&void 0!==o&&o)}))}g.title.icon=s.tocIcon,g.title.caption=c.__("Table of Contents"),g.id="table-of-contents",g.node.setAttribute("role","region"),g.node.setAttribute("aria-label",c.__("Table of Contents section")),e.commands.addCommand(t.displayH1Numbering,{label:c.__("Show first-level heading number"),execute:()=>{g.model&&g.model.setConfiguration({numberingH1:!g.model.configuration.numberingH1})},isEnabled:()=>{var e,o;return null!==(o=null===(e=g.model)||void 0===e?void 0:e.supportedOptions.includes("numberingH1"))&&void 0!==o&&o},isToggled:()=>{var e,o;return null!==(o=null===(e=g.model)||void 0===e?void 0:e.configuration.numberingH1)&&void 0!==o&&o}}),e.commands.addCommand(t.displayNumbering,{label:c.__("Show heading number in the document"),icon:e=>e.toolbar?s.numberingIcon:void 0,execute:()=>{g.model&&(g.model.setConfiguration({numberHeaders:!g.model.configuration.numberHeaders}),e.commands.notifyCommandChanged(t.displayNumbering))},isEnabled:()=>{var e,o;return null!==(o=null===(e=g.model)||void 0===e?void 0:e.supportedOptions.includes("numberHeaders"))&&void 0!==o&&o},isToggled:()=>{var e,o;return null!==(o=null===(e=g.model)||void 0===e?void 0:e.configuration.numberHeaders)&&void 0!==o&&o}}),e.commands.addCommand(t.displayOutputNumbering,{label:c.__("Show output headings"),execute:()=>{g.model&&g.model.setConfiguration({includeOutput:!g.model.configuration.includeOutput})},isEnabled:()=>{var e,o;return null!==(o=null===(e=g.model)||void 0===e?void 0:e.supportedOptions.includes("includeOutput"))&&void 0!==o&&o},isToggled:()=>{var e,o;return null!==(o=null===(e=g.model)||void 0===e?void 0:e.configuration.includeOutput)&&void 0!==o&&o}}),e.commands.addCommand(t.showPanel,{label:c.__("Table of Contents"),execute:()=>{e.shell.activateById(g.id)}}),e.commands.addCommand(t.toggleCollapse,{label:()=>g.model&&!b(g.model)?c.__("Expand All Headings"):c.__("Collapse All Headings"),icon:e=>e.toolbar?g.model&&!b(g.model)?s.expandAllIcon:s.collapseAllIcon:void 0,execute:()=>{g.model&&(b(g.model)?g.model.toggleCollapse({collapsed:!0}):g.model.toggleCollapse({collapsed:!1}))},isEnabled:()=>null!==g.model});const p=new d.TableOfContentsTracker;let C;if(l&&l.add(g,"@jupyterlab/toc:plugin"),u)try{C=await u.load(r.id);const o=o=>{const n=o.composite;for(const e of[...Object.keys(m)]){const o=n[e];void 0!==o&&(m[e]=o)}if(a)for(const e of a.widgets("main")){const o=p.get(e);o&&o.setConfiguration(m)}else if(e.shell.currentWidget){const o=p.get(e.shell.currentWidget);o&&o.setConfiguration(m)}};C&&(C.changed.connect(o),o(C))}catch(e){console.error(`Failed to load settings for the Table of Contents extension.\n\n${e}`)}const f=new s.CommandToolbarButton({commands:e.commands,id:t.displayNumbering,args:{toolbar:!0},label:""});f.addClass("jp-toc-numberingButton"),g.toolbar.addItem("display-numbering",f),g.toolbar.addItem("spacer",s.Toolbar.createSpacerItem()),g.toolbar.addItem("collapse-all",new s.CommandToolbarButton({commands:e.commands,id:t.toggleCollapse,args:{toolbar:!0},label:""}));const v=new s.MenuSvg({commands:e.commands});v.addItem({command:t.displayH1Numbering}),v.addItem({command:t.displayOutputNumbering});const h=new s.ToolbarButton({tooltip:c.__("More actions…"),icon:s.ellipsesIcon,actualOnClick:!0,onClick:()=>{const e=h.node.getBoundingClientRect();v.open(e.x,e.bottom)}});return g.toolbar.addItem("submenu",h),e.shell.add(g,"left",{rank:400,type:"Table of Contents"}),a&&a.currentChanged.connect(y),e.restored.then((()=>{y()})),p;function y(){var n;let l=e.shell.currentWidget;if(!l)return;let a=p.get(l);a||(a=null!==(n=o.getModel(l,m))&&void 0!==n?n:null,a&&p.add(l,a),l.disposed.connect((()=>{null==a||a.dispose()}))),g.model&&(g.model.headingsChanged.disconnect(T),g.model.collapseChanged.disconnect(T)),g.model=a,g.model&&(g.model.headingsChanged.connect(T),g.model.collapseChanged.connect(T)),e.commands.notifyCommandChanged(t.displayNumbering),e.commands.notifyCommandChanged(t.toggleCollapse)}function T(){e.commands.notifyCommandChanged(t.toggleCollapse)}}},c=[r,u]}}]);