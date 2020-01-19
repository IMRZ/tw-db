
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";

export namespace CampaignGroupCharacterRelationshipStartOfRoundTriggers {
  export const KEY = new CollectionKey("campaign_group_character_relationship_start_of_round_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _characterRelationshipTriggers: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._characterRelationshipTriggers = values["character_relationship_triggers"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get characterRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._characterRelationshipTriggers);
    }
  }
}

export default CampaignGroupCharacterRelationshipStartOfRoundTriggers;
