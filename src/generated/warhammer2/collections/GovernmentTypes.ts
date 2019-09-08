
import { CollectionCache, CollectionKey } from "../../../common";
import { PopulationClasses } from "./PopulationClasses";

export namespace GovernmentTypes {
  export const KEY = new CollectionKey("government_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly governmentType: string;
    readonly onscreen: string;
    readonly electedMinisters: boolean;
    readonly hereditaryMinisters: boolean;
    readonly rank: number;
    readonly _activeUpperClass: string;
    readonly _activeLowerClass: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.governmentType = values["government_type"];
      this.onscreen = values["onscreen"];
      this.electedMinisters = !!values["elected_ministers"];
      this.hereditaryMinisters = !!values["hereditary_ministers"];
      this.rank = values["rank"];
      this._activeUpperClass = values["active_upper_class"];
      this._activeLowerClass = values["active_lower_class"];
    }
    
    get activeUpperClass(): PopulationClasses.Entry | undefined {
      const collection = <PopulationClasses.Entry[]>this.collectionCache.getCollection(PopulationClasses.KEY, PopulationClasses.Entry);
      return collection.find(entry => entry.populationClass === this._activeUpperClass);
    }
  }
}

export default GovernmentTypes;
