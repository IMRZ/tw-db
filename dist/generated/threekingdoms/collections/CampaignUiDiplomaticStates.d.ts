import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignUiDiplomaticCcoStates } from "./CampaignUiDiplomaticCcoStates";
export declare namespace CampaignUiDiplomaticStates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _ccoState: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get ccoState(): CampaignUiDiplomaticCcoStates.Entry | undefined;
    }
}
export default CampaignUiDiplomaticStates;
