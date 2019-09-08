import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { BattlefieldBuildings } from "./BattlefieldBuildings";
export declare namespace BattleBridgeSubcultureJcts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subculture: string;
        readonly _simpleBridge: string;
        readonly _refinedBridge: any;
        constructor(collectionCache: CollectionCache, values: any);
        readonly subculture: CulturesSubcultures.Entry | undefined;
        readonly simpleBridge: BattlefieldBuildings.Entry | undefined;
    }
}
export default BattleBridgeSubcultureJcts;
