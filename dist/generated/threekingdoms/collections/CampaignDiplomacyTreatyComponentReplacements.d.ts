import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyExistingComponents } from "./CampaignDiplomacyExistingComponents";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CampaignDiplomacyTreatyComponentReplacements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _toBeReplaced: string;
        readonly _replacedBy: string;
        readonly replacedComponentIsBroken: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get toBeReplaced(): CampaignDiplomacyExistingComponents.Entry | undefined;
        get replacedBy(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentReplacements;
