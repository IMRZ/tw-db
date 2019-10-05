
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { MilitaryForceTypes } from "./MilitaryForceTypes";

export namespace AgentSubtypeMilitaryForceCreationOverrides {
  export const KEY = new CollectionKey("agent_subtype_military_force_creation_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _validGroup: string;
    readonly _militaryForceType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._validGroup = values["valid_group"];
      this._militaryForceType = values["military_force_type"];
    }
    
    get validGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._validGroup);
    }
    
    get militaryForceType(): MilitaryForceTypes.Entry | undefined {
      const collection = <MilitaryForceTypes.Entry[]>this.collectionCache.getCollection(MilitaryForceTypes.KEY, MilitaryForceTypes.Entry);
      return collection.find(entry => entry.key === this._militaryForceType);
    }
  }
}

export default AgentSubtypeMilitaryForceCreationOverrides;
