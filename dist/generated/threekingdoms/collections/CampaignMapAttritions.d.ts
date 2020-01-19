import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAttritionTypes } from "./CampaignMapAttritionTypes";
import { CampaignMapAttritionDamages } from "./CampaignMapAttritionDamages";
import { CampaignMapAttritionApplicationPhases } from "./CampaignMapAttritionApplicationPhases";
export declare namespace CampaignMapAttritions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _type: string;
        readonly _damage: string;
        readonly campaignMapTooltip: string;
        readonly unitCardTooltip: string;
        readonly unitImmunityText: string;
        readonly isSnow: boolean;
        readonly showWarningOnMap: boolean;
        readonly _applicationPhase: string;
        constructor(collectionCache: CollectionCache, values: any);
        get type(): CampaignMapAttritionTypes.Entry | undefined;
        get damage(): CampaignMapAttritionDamages.Entry | undefined;
        get applicationPhase(): CampaignMapAttritionApplicationPhases.Entry | undefined;
    }
}
export default CampaignMapAttritions;
