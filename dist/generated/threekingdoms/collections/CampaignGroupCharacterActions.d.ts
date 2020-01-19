import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignPayloads } from "./CampaignPayloads";
import { UiCharacterActions } from "./UiCharacterActions";
import { CampaignCharacterActionSharedPerTurnLimits } from "./CampaignCharacterActionSharedPerTurnLimits";
export declare namespace CampaignGroupCharacterActions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _payload: string;
        readonly _uiRecord: string;
        readonly allowedTimesPerCharacterPerTurn: number;
        readonly _sharedAllowedTimesPerTurn: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get payload(): CampaignPayloads.Entry | undefined;
        get uiRecord(): UiCharacterActions.Entry | undefined;
        get sharedAllowedTimesPerTurn(): CampaignCharacterActionSharedPerTurnLimits.Entry | undefined;
    }
}
export default CampaignGroupCharacterActions;
