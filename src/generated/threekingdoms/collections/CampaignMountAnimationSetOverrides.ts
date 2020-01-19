
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";
import { MainUnits } from "./MainUnits";

export namespace CampaignMountAnimationSetOverrides {
  export const KEY = new CollectionKey("campaign_mount_animation_set_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterAnimationSet: string;
    readonly _mountUnit: string;
    readonly _riderAnimationSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterAnimationSet = values["character_animation_set"];
      this._mountUnit = values["mount_unit"];
      this._riderAnimationSet = values["rider_animation_set"];
    }
    
    get characterAnimationSet(): CampaignAnimSetEnums.Entry | undefined {
      const collection = <CampaignAnimSetEnums.Entry[]>this.collectionCache.getCollection(CampaignAnimSetEnums.KEY, CampaignAnimSetEnums.Entry);
      return collection.find(entry => entry.name === this._characterAnimationSet);
    }
    
    get mountUnit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._mountUnit);
    }
    
    get riderAnimationSet(): CampaignAnimSetEnums.Entry | undefined {
      const collection = <CampaignAnimSetEnums.Entry[]>this.collectionCache.getCollection(CampaignAnimSetEnums.KEY, CampaignAnimSetEnums.Entry);
      return collection.find(entry => entry.name === this._riderAnimationSet);
    }
  }
}

export default CampaignMountAnimationSetOverrides;
