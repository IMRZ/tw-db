import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiCharacterSkillSynergyLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly relativeEffect: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiCharacterSkillSynergyLevels;
