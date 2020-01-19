import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CaiDiplomacyTreatyHints {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly divisible: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CaiDiplomacyTreatyHints;
