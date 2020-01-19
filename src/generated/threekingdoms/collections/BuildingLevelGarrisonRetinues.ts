
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CampaignRetinueChains } from "./CampaignRetinueChains";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace BuildingLevelGarrisonRetinues {
  export const KEY = new CollectionKey("building_level_garrison_retinues");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevel: string;
    readonly _retinueChain: string;
    readonly _subculture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevel = values["building_level"];
      this._retinueChain = values["retinue_chain"];
      this._subculture = values["subculture"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get retinueChain(): CampaignRetinueChains.Entry | undefined {
      const collection = <CampaignRetinueChains.Entry[]>this.collectionCache.getCollection(CampaignRetinueChains.KEY, CampaignRetinueChains.Entry);
      return collection.find(entry => entry.key === this._retinueChain);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default BuildingLevelGarrisonRetinues;
