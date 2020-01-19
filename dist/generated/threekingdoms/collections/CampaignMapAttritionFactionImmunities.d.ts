import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAttritions } from "./CampaignMapAttritions";
import { Factions } from "./Factions";
export declare namespace CampaignMapAttritionFactionImmunities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _attrition: string;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get attrition(): CampaignMapAttritions.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default CampaignMapAttritionFactionImmunities;
