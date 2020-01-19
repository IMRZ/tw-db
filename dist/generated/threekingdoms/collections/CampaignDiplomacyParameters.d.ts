import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyParameterTypes } from "./CampaignDiplomacyParameterTypes";
export declare namespace CampaignDiplomacyParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _type: string;
        constructor(collectionCache: CollectionCache, values: any);
        get type(): CampaignDiplomacyParameterTypes.Entry | undefined;
    }
}
export default CampaignDiplomacyParameters;
