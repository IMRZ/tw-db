import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CaiDiplomacyTreatyDecompositions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _decompositionKey: string;
        readonly _mainKey: string;
        readonly _secondaryKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get decompositionKey(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get mainKey(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get secondaryKey(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CaiDiplomacyTreatyDecompositions;
