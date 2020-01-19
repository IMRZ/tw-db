
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterDeathDistributions } from "./CharacterDeathDistributions";

export namespace CharacterDeathDistributionPoints {
  export const KEY = new CollectionKey("character_death_distribution_points");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterDeathDistribution: string;
    readonly age: number;
    readonly chanceOfDeath: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterDeathDistribution = values["character_death_distribution"];
      this.age = values["age"];
      this.chanceOfDeath = values["chance_of_death"];
    }
    
    get characterDeathDistribution(): CharacterDeathDistributions.Entry | undefined {
      const collection = <CharacterDeathDistributions.Entry[]>this.collectionCache.getCollection(CharacterDeathDistributions.KEY, CharacterDeathDistributions.Entry);
      return collection.find(entry => entry.key === this._characterDeathDistribution);
    }
  }
}

export default CharacterDeathDistributionPoints;
