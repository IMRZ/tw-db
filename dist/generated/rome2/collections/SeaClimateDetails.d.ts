import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
export declare namespace SeaClimateDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly seaDeepColour: string;
        readonly seaShallowColour: string;
        readonly sunColour: string;
        readonly skyColour: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: Climates.Entry | undefined;
    }
}
export default SeaClimateDetails;
