
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyDeals } from "./StartPosDiplomacyDeals";
import { StartPosFactions } from "./StartPosFactions";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace StartPosDiplomacySimpleDeals {
  export const KEY = new CollectionKey("start_pos_diplomacy_simple_deals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _id: string;
    readonly _proposer: number;
    readonly _recipient: number;
    readonly _component: string;
    readonly establishedHowManyTurnsBeforeStartOfGame: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._id = values["id"];
      this._proposer = values["proposer"];
      this._recipient = values["recipient"];
      this._component = values["component"];
      this.establishedHowManyTurnsBeforeStartOfGame = values["established_how_many_turns_before_start_of_game"];
    }
    
    get id(): StartPosDiplomacyDeals.Entry | undefined {
      const collection = <StartPosDiplomacyDeals.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDeals.KEY, StartPosDiplomacyDeals.Entry);
      return collection.find(entry => entry.id === this._id);
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

export default StartPosDiplomacySimpleDeals;
