
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignUnitPermissions } from "./CampaignUnitPermissions";
import { CampaignUnitRequirements } from "./CampaignUnitRequirements";
import { MainUnits } from "./MainUnits";

export namespace CampaignUnitPermissionRequirements {
  export const KEY = new CollectionKey("campaign_unit_permission_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _permission: string;
    readonly _requirement: string;
    readonly isRestriction: boolean;
    readonly _unit: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._permission = values["permission"];
      this._requirement = values["requirement"];
      this.isRestriction = !!values["is_restriction"];
      this._unit = values["unit"];
    }
    
    get permission(): CampaignUnitPermissions.Entry | undefined {
      const collection = <CampaignUnitPermissions.Entry[]>this.collectionCache.getCollection(CampaignUnitPermissions.KEY, CampaignUnitPermissions.Entry);
      return collection.find(entry => entry.key === this._permission);
    }
    
    get requirement(): CampaignUnitRequirements.Entry | undefined {
      const collection = <CampaignUnitRequirements.Entry[]>this.collectionCache.getCollection(CampaignUnitRequirements.KEY, CampaignUnitRequirements.Entry);
      return collection.find(entry => entry.key === this._requirement);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default CampaignUnitPermissionRequirements;
