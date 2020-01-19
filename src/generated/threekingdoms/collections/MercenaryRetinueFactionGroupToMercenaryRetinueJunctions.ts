
import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryRetinueFactionGroups } from "./MercenaryRetinueFactionGroups";
import { MercenaryRetinueDetails } from "./MercenaryRetinueDetails";
import { CampaignBonusValueIdsBasic } from "./CampaignBonusValueIdsBasic";

export namespace MercenaryRetinueFactionGroupToMercenaryRetinueJunctions {
  export const KEY = new CollectionKey("mercenary_retinue_faction_group_to_mercenary_retinue_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly autoId: number;
    readonly _factionGroup: string;
    readonly _mercenaryRetinue: string;
    readonly _levelingBonusValue: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.autoId = values["auto_id"];
      this._factionGroup = values["faction_group"];
      this._mercenaryRetinue = values["mercenary_retinue"];
      this._levelingBonusValue = values["leveling_bonus_value"];
    }
    
    get factionGroup(): MercenaryRetinueFactionGroups.Entry | undefined {
      const collection = <MercenaryRetinueFactionGroups.Entry[]>this.collectionCache.getCollection(MercenaryRetinueFactionGroups.KEY, MercenaryRetinueFactionGroups.Entry);
      return collection.find(entry => entry.key === this._factionGroup);
    }
    
    get mercenaryRetinue(): MercenaryRetinueDetails.Entry | undefined {
      const collection = <MercenaryRetinueDetails.Entry[]>this.collectionCache.getCollection(MercenaryRetinueDetails.KEY, MercenaryRetinueDetails.Entry);
      return collection.find(entry => entry.key === this._mercenaryRetinue);
    }
    
    get levelingBonusValue(): CampaignBonusValueIdsBasic.Entry | undefined {
      const collection = <CampaignBonusValueIdsBasic.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsBasic.KEY, CampaignBonusValueIdsBasic.Entry);
      return collection.find(entry => entry.key === this._levelingBonusValue);
    }
  }
}

export default MercenaryRetinueFactionGroupToMercenaryRetinueJunctions;
