
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDealParticipantSets } from "./StartPosDiplomacyComplexDealParticipantSets";
import { CampaignDiplomacyNegotiationRoles } from "./CampaignDiplomacyNegotiationRoles";
import { StartPosFactions } from "./StartPosFactions";

export namespace StartPosDiplomacyComplexDealParticipants {
  export const KEY = new CollectionKey("start_pos_diplomacy_complex_deal_participants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _set: string;
    readonly _role: string;
    readonly _faction: number;
    readonly isAllianceParticipant: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._set = values["set"];
      this._role = values["role"];
      this._faction = values["faction"];
      this.isAllianceParticipant = !!values["is_alliance_participant"];
    }
    
    get set(): StartPosDiplomacyComplexDealParticipantSets.Entry | undefined {
      const collection = <StartPosDiplomacyComplexDealParticipantSets.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyComplexDealParticipantSets.KEY, StartPosDiplomacyComplexDealParticipantSets.Entry);
      return collection.find(entry => entry.id === this._set);
    }
    
    get role(): CampaignDiplomacyNegotiationRoles.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationRoles.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationRoles.KEY, CampaignDiplomacyNegotiationRoles.Entry);
      return collection.find(entry => entry.key === this._role);
    }
    
    get faction(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._faction);
    }
  }
}

export default StartPosDiplomacyComplexDealParticipants;
