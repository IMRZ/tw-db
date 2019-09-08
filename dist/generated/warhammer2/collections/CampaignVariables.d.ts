import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignVariables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly variableKey: string;
        readonly value: number;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignVariables;
