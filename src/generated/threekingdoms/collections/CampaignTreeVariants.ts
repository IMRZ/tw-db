
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignTreeIds } from "./CampaignTreeIds";
import { AudioCampaignTreeTypes } from "./AudioCampaignTreeTypes";
import { Seasons } from "./Seasons";

export namespace CampaignTreeVariants {
  export const KEY = new CollectionKey("campaign_tree_variants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treeId: string;
    readonly treeRigid: string;
    readonly _treeAudio: string;
    readonly _season: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treeId = values["tree_id"];
      this.treeRigid = values["tree_rigid"];
      this._treeAudio = values["tree_audio"];
      this._season = values["season"];
    }
    
    get treeId(): CampaignTreeIds.Entry | undefined {
      const collection = <CampaignTreeIds.Entry[]>this.collectionCache.getCollection(CampaignTreeIds.KEY, CampaignTreeIds.Entry);
      return collection.find(entry => entry.treeId === this._treeId);
    }
    
    get treeAudio(): AudioCampaignTreeTypes.Entry | undefined {
      const collection = <AudioCampaignTreeTypes.Entry[]>this.collectionCache.getCollection(AudioCampaignTreeTypes.KEY, AudioCampaignTreeTypes.Entry);
      return collection.find(entry => entry.key === this._treeAudio);
    }
    
    get season(): Seasons.Entry | undefined {
      const collection = <Seasons.Entry[]>this.collectionCache.getCollection(Seasons.KEY, Seasons.Entry);
      return collection.find(entry => entry.season === this._season);
    }
  }
}

export default CampaignTreeVariants;
