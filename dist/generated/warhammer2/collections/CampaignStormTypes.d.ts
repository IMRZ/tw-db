import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignStormTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly type: string;
        readonly forLand: boolean;
        readonly forSea: boolean;
        readonly canMove: boolean;
        readonly canDecay: boolean;
        readonly canSpawnOverCharacter: boolean;
        readonly respectExcludedRegionsTable: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignStormTypes;
