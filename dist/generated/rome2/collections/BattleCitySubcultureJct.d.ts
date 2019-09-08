import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { BattleCities } from "./BattleCities";
export declare namespace BattleCitySubcultureJct {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subculture: string;
        readonly _city: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly subculture: CulturesSubcultures.Entry | undefined;
        readonly city: BattleCities.Entry | undefined;
    }
}
export default BattleCitySubcultureJct;
