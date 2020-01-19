
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";

export namespace CampaignDiplomacyTreatyComponentCharacterRelationshipTriggers {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_character_relationship_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _diplomacyTreatyComponent: string;
    readonly _characterRelationshipTriggers: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._diplomacyTreatyComponent = values["diplomacy_treaty_component"];
      this._characterRelationshipTriggers = values["character_relationship_triggers"];
    }
    
    get diplomacyTreatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._diplomacyTreatyComponent);
    }
    
    get characterRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined {
      const collection = <CharacterRelationshipTriggerSets.Entry[]>this.collectionCache.getCollection(CharacterRelationshipTriggerSets.KEY, CharacterRelationshipTriggerSets.Entry);
      return collection.find(entry => entry.key === this._characterRelationshipTriggers);
    }
  }
}

export default CampaignDiplomacyTreatyComponentCharacterRelationshipTriggers;
