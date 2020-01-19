
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CharacterAssignments } from "./CharacterAssignments";

export namespace CampaignGroupCharacterAssignments {
  export const KEY = new CollectionKey("campaign_group_character_assignments");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _assignment: string;
    readonly isTargetTypeDefault: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._assignment = values["assignment"];
      this.isTargetTypeDefault = !!values["is_target_type_default"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get assignment(): CharacterAssignments.Entry | undefined {
      const collection = <CharacterAssignments.Entry[]>this.collectionCache.getCollection(CharacterAssignments.KEY, CharacterAssignments.Entry);
      return collection.find(entry => entry.key === this._assignment);
    }
  }
}

export default CampaignGroupCharacterAssignments;
