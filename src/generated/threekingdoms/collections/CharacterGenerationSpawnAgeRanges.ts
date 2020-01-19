
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CharacterGenerationSpawnAgeRanges {
  export const KEY = new CollectionKey("character_generation_spawn_age_ranges");

  export class Entry {
    private readonly collectionCache: CollectionCache;

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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.minRandomAge = values["min_random_age"];
      this.maxRandomAge = values["max_random_age"];
      this.birthYear = values["birth_year"];
      this.minAgeForBirthYear = values["min_age_for_birth_year"];
      this.maxAgeForBirthYear = values["max_age_for_birth_year"];
      this.hasValidBirthYear = !!values["has_valid_birth_year"];
      this.minSpawnYear = values["min_spawn_year"];
      this.minSpawnYearRound = values["min_spawn_year_round"];
      this.maxSpawnYear = values["max_spawn_year"];
      this.maxSpawnYearRound = values["max_spawn_year_round"];
    }
    
  }
}

export default CharacterGenerationSpawnAgeRanges;
