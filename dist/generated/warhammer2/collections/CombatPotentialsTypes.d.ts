import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CombatPotentialsTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly combatPotentialTypeKey: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CombatPotentialsTypes;
