
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDeals } from "./StartPosDiplomacyComplexDeals";
import { StartPosFactions } from "./StartPosFactions";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace StartPosDiplomacyComplexDealComponents {
  export const KEY = new CollectionKey("start_pos_diplomacy_complex_deal_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _deal: string;
    readonly _proposer: number;
    readonly _recipient: number;
    readonly _component: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._deal = values["deal"];
      this._proposer = values["proposer"];
      this._recipient = values["recipient"];
      this._component = values["component"];
    }
    
    get deal(): StartPosDiplomacyComplexDeals.Entry | undefined {
      const collection = <StartPosDiplomacyComplexDeals.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyComplexDeals.KEY, StartPosDiplomacyComplexDeals.Entry);
      return collection.find(entry => entry._deal === this._deal);
    }
    
    get proposer(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._proposer);
    }
    
    get recipient(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._recipient);
    }
    
    get component(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._component);
    }
  }
}

export default StartPosDiplomacyComplexDealComponents;
