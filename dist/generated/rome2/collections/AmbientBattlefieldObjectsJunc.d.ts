import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
export declare namespace AmbientBattlefieldObjectsJunc {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _climate: string;
        readonly _season: any;
        readonly _ambientBattlefieldObject: any;
        constructor(collectionCache: CollectionCache, values: any);
        get climate(): Climates.Entry | undefined;
    }
}
export default AmbientBattlefieldObjectsJunc;
