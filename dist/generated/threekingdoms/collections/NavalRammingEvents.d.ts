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
        get rammingShip(): UnitCategory.Entry | undefined;
        get rammedShip(): UnitCategory.Entry | undefined;
    }
}
export default NavalRammingEvents;
