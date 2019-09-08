
import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";

export namespace BattleEntityEffects {
  export const KEY = new CollectionKey("battle_entity_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly _forest: string;
    readonly _grass: string;
    readonly _mud: string;
    readonly _sand: string;
    readonly _scrub: string;
    readonly _rock: string;
    readonly _deepWater: string;
    readonly _shallowWater: string;
    readonly _road: string;
    readonly _woodenFloor: string;
    readonly _snow: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this._forest = values["forest"];
      this._grass = values["grass"];
      this._mud = values["mud"];
      this._sand = values["sand"];
      this._scrub = values["scrub"];
      this._rock = values["rock"];
      this._deepWater = values["deep_water"];
      this._shallowWater = values["shallow_water"];
      this._road = values["road"];
      this._woodenFloor = values["wooden_floor"];
      this._snow = values["snow"];
    }
    
    get forest(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._forest);
    }
    
    get grass(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._grass);
    }
    
    get mud(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._mud);
    }
    
    get sand(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._sand);
    }
    
    get scrub(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._scrub);
    }
    
    get rock(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._rock);
    }
    
    get deepWater(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._deepWater);
    }
    
    get shallowWater(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._shallowWater);
    }
    
    get road(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._road);
    }
    
    get woodenFloor(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._woodenFloor);
    }
    
    get snow(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._snow);
    }
  }
}

export default BattleEntityEffects;
