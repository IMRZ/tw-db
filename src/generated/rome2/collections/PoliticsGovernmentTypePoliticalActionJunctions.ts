
import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticsGovernmentTypes } from "./PoliticsGovernmentTypes";
import { PoliticalActions } from "./PoliticalActions";

export namespace PoliticsGovernmentTypePoliticalActionJunctions {
  export const KEY = new CollectionKey("politics_government_type_political_action_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _governmentType: string;
    readonly _politicalAction: string;
    readonly isAvailableForFactionLeader: boolean;
    readonly isAvailableForNonRulingPartyLeaders: boolean;
    readonly isAvailableForRulingPartyMembers: boolean;
    readonly isAvailableForNonRulingPartyMembers: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._governmentType = values["government_type"];
      this._politicalAction = values["political_action"];
      this.isAvailableForFactionLeader = !!values["is_available_for_faction_leader"];
      this.isAvailableForNonRulingPartyLeaders = !!values["is_available_for_non_ruling_party_leaders"];
      this.isAvailableForRulingPartyMembers = !!values["is_available_for_ruling_party_members"];
      this.isAvailableForNonRulingPartyMembers = !!values["is_available_for_non_ruling_party_members"];
    }
    
    get governmentType(): PoliticsGovernmentTypes.Entry | undefined {
      const collection = <PoliticsGovernmentTypes.Entry[]>this.collectionCache.getCollection(PoliticsGovernmentTypes.KEY, PoliticsGovernmentTypes.Entry);
      return collection.find(entry => entry.governmentType === this._governmentType);
    }
    
    get politicalAction(): PoliticalActions.Entry | undefined {
      const collection = <PoliticalActions.Entry[]>this.collectionCache.getCollection(PoliticalActions.KEY, PoliticalActions.Entry);
      return collection.find(entry => entry.politicalActionKey === this._politicalAction);
    }
  }
}

export default PoliticsGovernmentTypePoliticalActionJunctions;
