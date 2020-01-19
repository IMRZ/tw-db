import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldBuildings } from "./BattlefieldBuildings";
export declare namespace BattlefieldSnowProps {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _prop: string;
        readonly _enableForSnow: any;
        constructor(collectionCache: CollectionCache, values: any);
        get prop(): BattlefieldBuildings.Entry | undefined;
    }
}
export default BattlefieldSnowProps;
