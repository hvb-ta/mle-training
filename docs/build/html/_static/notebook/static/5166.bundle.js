"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5166,1828],{11828:(a,e,s)=>{s.r(e),s.d(e,{IWorkspaceCommands:()=>o,IWorkspacesModel:()=>n,WorkspacesModel:()=>r});var t=s(97934),i=s(81997);class r{constructor(a){var e;this._refreshed=new i.Signal(this),this._isDisposed=!1,this._workspaceData={ids:[],values:[]},this._manager=a.manager;const s=a.refreshInterval||1e4;this._poll=new t.Poll({auto:null===(e=a.auto)||void 0===e||e,name:"@jupyterlab/workspaces:Model",factory:()=>this._fetchList(),frequency:{interval:s,backoff:!0,max:3e5},standby:a.refreshStandby||"when-hidden"})}get workspaces(){return this._workspaceData.values}get identifiers(){return this._workspaceData.ids}async create(a){await this._manager.save(a,{metadata:{id:a},data:{}}),await this.refresh()}get refreshed(){return this._refreshed}async refresh(){await this._poll.refresh(),await this._poll.tick}async rename(a,e){const s=await this._manager.fetch(a);s.metadata.id=e,await this._manager.save(e,s),await this._manager.remove(a),await this.refresh()}async reset(a){const e=await this._manager.fetch(a);e.data={},await this._manager.save(a,e),await this.refresh()}async remove(a){await this._manager.remove(a),await this.refresh()}async saveAs(a,e){const s=await this._manager.fetch(a);s.metadata.id=e,await this._manager.save(e,s),await this.refresh()}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this._poll.dispose(),i.Signal.clearData(this))}async _fetchList(){this._workspaceData=await this._manager.list(),this._refreshed.emit(void 0)}}var h=s(20998);const o=new h.Token("@jupyterlab/workspaces:IWorkspaceCommands","Provides identifiers of workspace commands."),n=new h.Token("@jupyterlab/workspaces:IWorkspacesModel","Provides a model for available workspaces.")}}]);