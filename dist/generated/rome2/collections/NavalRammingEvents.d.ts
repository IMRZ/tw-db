import { CollectionCache, CollectionKey } from "../../../common";
import { UnitCategory } from "./UnitCategory";
export declare namespace NavalRammingEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _rammingShip: string;
        readonly _rammedShip: string;
        readonly baseDamage: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly rammingShip: UnitCategory.Entry | undefined;
        readonly rammedShip: UnitCategory.Entry | undefined;
    }
}
export default NavalRammingEvents;
