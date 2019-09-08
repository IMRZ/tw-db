
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { RitualBeamTypes } from "./RitualBeamTypes";

export namespace RitualBeams {
  export const KEY = new CollectionKey("ritual_beams");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _culture: string;
    readonly _beamType: string;
    readonly bmd: string;
    readonly id: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._culture = values["culture"];
      this._beamType = values["beam_type"];
      this.bmd = values["bmd"];
      this.id = values["id"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get beamType(): RitualBeamTypes.Entry | undefined {
      const collection = <RitualBeamTypes.Entry[]>this.collectionCache.getCollection(RitualBeamTypes.KEY, RitualBeamTypes.Entry);
      return collection.find(entry => entry.type === this._beamType);
    }
  }
}

export default RitualBeams;
