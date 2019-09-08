
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CultureSettlementOccupationOptions } from "./CultureSettlementOccupationOptions";

export namespace CampaignGroupMemberCriteriaCultureSettlementOccupationOptions {
  export const KEY = new CollectionKey("campaign_group_member_criteria_culture_settlement_occupation_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _cultureSettlementOccupationOption: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._cultureSettlementOccupationOption = values["culture_settlement_occupation_option"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get cultureSettlementOccupationOption(): CultureSettlementOccupationOptions.Entry | undefined {
      const collection = <CultureSettlementOccupationOptions.Entry[]>this.collectionCache.getCollection(CultureSettlementOccupationOptions.KEY, CultureSettlementOccupationOptions.Entry);
      return collection.find(entry => entry.id === this._cultureSettlementOccupationOption);
    }
  }
}

export default CampaignGroupMemberCriteriaCultureSettlementOccupationOptions;
