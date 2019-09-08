
import { CollectionCache, CollectionKey } from "../../../common";
import { UniqueAgents } from "./UniqueAgents";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";

export namespace UniqueAgentSpawnVfxJunctions {
  export const KEY = new CollectionKey("unique_agent_spawn_vfx_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _uniqueAgent: string;
    readonly _compositeScene: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._uniqueAgent = values["unique_agent"];
      this._compositeScene = values["composite_scene"];
    }
    
    get uniqueAgent(): UniqueAgents.Entry | undefined {
      const collection = <UniqueAgents.Entry[]>this.collectionCache.getCollection(UniqueAgents.KEY, UniqueAgents.Entry);
      return collection.find(entry => entry._agentSubtype === this._uniqueAgent);
    }
    
    get compositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._compositeScene);
    }
  }
}

export default UniqueAgentSpawnVfxJunctions;
