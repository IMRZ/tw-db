import { CollectionCache, CollectionKey } from "../../../common";
import { UnitClass } from "./UnitClass";
export declare namespace AutoresolverModifierTargets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _targetUnitClass: string;
        readonly _vsUnitClass: string;
        constructor(collectionCache: CollectionCache, values: any);
        get targetUnitClass(): UnitClass.Entry | undefined;
        get vsUnitClass(): UnitClass.Entry | undefined;
    }
}
export default AutoresolverModifierTargets;
