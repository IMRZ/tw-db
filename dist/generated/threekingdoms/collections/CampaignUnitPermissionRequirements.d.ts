import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignUnitPermissions } from "./CampaignUnitPermissions";
import { CampaignUnitRequirements } from "./CampaignUnitRequirements";
import { MainUnits } from "./MainUnits";
export declare namespace CampaignUnitPermissionRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _permission: string;
        readonly _requirement: string;
        readonly isRestriction: boolean;
        readonly _unit: string;
        constructor(collectionCache: CollectionCache, values: any);
        get permission(): CampaignUnitPermissions.Entry | undefined;
        get requirement(): CampaignUnitRequirements.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
    }
}
export default CampaignUnitPermissionRequirements;
