import { CollectionCache, CollectionKey } from "../../../common";
import { PoliticalParties } from "./PoliticalParties";
export declare namespace FrontendFactionLeaders {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly uniform: string;
        readonly animation: string;
        readonly xOffset: number;
        readonly yOffset: number;
        readonly _party: string;
        constructor(collectionCache: CollectionCache, values: any);
        get party(): PoliticalParties.Entry | undefined;
    }
}
export default FrontendFactionLeaders;
