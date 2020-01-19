
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";

export namespace CdirEventDiplomaticConditions {
  export const KEY = new CollectionKey("cdir_event_diplomatic_conditions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _treatyComponentSet: string;
    readonly validForRebels: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._treatyComponentSet = values["treaty_component_set"];
      this.validForRebels = !!values["valid_for_rebels"];
    }
    
    get treatyComponentSet(): CampaignDiplomacyTreatyComponentSets.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponentSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponentSets.KEY, CampaignDiplomacyTreatyComponentSets.Entry);
      return collection.find(entry => entry.set === this._treatyComponentSet);
    }
  }
}

export default CdirEventDiplomaticConditions;
