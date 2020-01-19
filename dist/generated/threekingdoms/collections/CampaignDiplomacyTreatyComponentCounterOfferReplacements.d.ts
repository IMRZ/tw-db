import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CampaignDiplomacyTreatyComponentCounterOfferReplacements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _toBeReplaced: string;
        readonly _replacedBy: string;
        constructor(collectionCache: CollectionCache, values: any);
        get toBeReplaced(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get replacedBy(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentCounterOfferReplacements;
