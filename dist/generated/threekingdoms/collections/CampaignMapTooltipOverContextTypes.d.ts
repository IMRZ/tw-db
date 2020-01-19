import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignMapTooltipOverContexts } from "./CampaignMapTooltipOverContexts";
export declare namespace CampaignMapTooltipOverContextTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _overContext: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get overContext(): CampaignMapTooltipOverContexts.Entry | undefined;
    }
}
export default CampaignMapTooltipOverContextTypes;
