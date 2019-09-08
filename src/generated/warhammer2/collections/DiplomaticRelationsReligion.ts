
import { CollectionCache, CollectionKey } from "../../../common";
import { Religions } from "./Religions";

export namespace DiplomaticRelationsReligion {
  export const KEY = new CollectionKey("diplomatic_relations_religion");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _religionA: string;
    readonly _religionB: any;
    readonly relationsModifier: number;
    readonly religiousUnhappinessModifier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._religionA = values["religion_A"];
      this._religionB = values["religion_B"];
      this.relationsModifier = values["relations_modifier"];
      this.religiousUnhappinessModifier = values["religious_unhappiness_modifier"];
    }
    
    get religionA(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religionA);
    }
  }
}

export default DiplomaticRelationsReligion;
