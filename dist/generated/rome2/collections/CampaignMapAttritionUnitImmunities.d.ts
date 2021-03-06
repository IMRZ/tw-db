import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAttritions } from "./CampaignMapAttritions";
import { MainUnits } from "./MainUnits";
export declare namespace CampaignMapAttritionUnitImmunities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _attrition: string;
        readonly _unit: string;
        constructor(collectionCache: CollectionCache, values: any);
        get attrition(): CampaignMapAttritions.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
    }
}
export default CampaignMapAttritionUnitImmunities;
