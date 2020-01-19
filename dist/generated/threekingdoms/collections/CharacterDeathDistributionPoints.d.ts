import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterDeathDistributions } from "./CharacterDeathDistributions";
export declare namespace CharacterDeathDistributionPoints {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _characterDeathDistribution: string;
        readonly age: number;
        readonly chanceOfDeath: number;
        constructor(collectionCache: CollectionCache, values: any);
        get characterDeathDistribution(): CharacterDeathDistributions.Entry | undefined;
    }
}
export default CharacterDeathDistributionPoints;
