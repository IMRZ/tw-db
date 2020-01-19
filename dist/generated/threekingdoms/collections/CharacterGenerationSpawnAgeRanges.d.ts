import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CharacterGenerationSpawnAgeRanges {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly minRandomAge: number;
        readonly maxRandomAge: number;
        readonly birthYear: number;
        readonly minAgeForBirthYear: number;
        readonly maxAgeForBirthYear: number;
        readonly hasValidBirthYear: boolean;
        readonly minSpawnYear: number;
        readonly minSpawnYearRound: number;
        readonly maxSpawnYear: number;
        readonly maxSpawnYearRound: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CharacterGenerationSpawnAgeRanges;
