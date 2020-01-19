import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitAbilityTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly showCursorTrail: boolean;
        readonly iconPath: string;
        readonly localisedDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitAbilityTypes;
