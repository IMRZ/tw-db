
import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsDilemmaOptions } from "./CdirEventsDilemmaOptions";

export namespace CdirEventsDilemmaOptionJunctions {
  export const KEY = new CollectionKey("cdir_events_dilemma_option_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _dilemmaKey: string;
    readonly _optionKey: string;
    readonly value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._dilemmaKey = values["dilemma_key"];
      this._optionKey = values["option_key"];
      this.value = values["value"];
    }
    
    get dilemmaKey(): Dilemmas.Entry | undefined {
      const collection = <Dilemmas.Entry[]>this.collectionCache.getCollection(Dilemmas.KEY, Dilemmas.Entry);
      return collection.find(entry => entry.key === this._dilemmaKey);
    }
    
    get optionKey(): CdirEventsDilemmaOptions.Entry | undefined {
      const collection = <CdirEventsDilemmaOptions.Entry[]>this.collectionCache.getCollection(CdirEventsDilemmaOptions.KEY, CdirEventsDilemmaOptions.Entry);
      return collection.find(entry => entry.optionKey === this._optionKey);
    }
  }
}

export default CdirEventsDilemmaOptionJunctions;
