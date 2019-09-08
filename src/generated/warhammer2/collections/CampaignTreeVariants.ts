
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignTreeIds } from "./CampaignTreeIds";
import { CampaignTreeTypes } from "./CampaignTreeTypes";
import { AudioCampaignTreeTypes } from "./AudioCampaignTreeTypes";

export namespace CampaignTreeVariants {
  export const KEY = new CollectionKey("campaign_tree_variants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _treeId: string;
    readonly _treeType: string;
    readonly treeRigid: string;
    readonly _treeAudio: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._treeId = values["tree_id"];
      this._treeType = values["tree_type"];
      this.treeRigid = values["tree_rigid"];
      this._treeAudio = values["tree_audio"];
    }
    
    get treeId(): CampaignTreeIds.Entry | undefined {
      const collection = <CampaignTreeIds.Entry[]>this.collectionCache.getCollection(CampaignTreeIds.KEY, CampaignTreeIds.Entry);
      return collection.find(entry => entry.treeId === this._treeId);
    }
    
    get treeType(): CampaignTreeTypes.Entry | undefined {
      const collection = <CampaignTreeTypes.Entry[]>this.collectionCache.getCollection(CampaignTreeTypes.KEY, CampaignTreeTypes.Entry);
      return collection.find(entry => entry.treeType === this._treeType);
    }
    
    get treeAudio(): AudioCampaignTreeTypes.Entry | undefined {
      const collection = <AudioCampaignTreeTypes.Entry[]>this.collectionCache.getCollection(AudioCampaignTreeTypes.KEY, AudioCampaignTreeTypes.Entry);
      return collection.find(entry => entry.key === this._treeAudio);
    }
  }
}

export default CampaignTreeVariants;
