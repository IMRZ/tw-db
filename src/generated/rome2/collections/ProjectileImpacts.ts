
import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";

export namespace ProjectileImpacts {
  export const KEY = new CollectionKey("projectile_impacts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _water: string;
    readonly _sails: string;
    readonly _mud: string;
    readonly _grass: string;
    readonly _road: string;
    readonly _rock: string;
    readonly _sand: string;
    readonly _cloth: string;
    readonly _snow: string;
    readonly _leather: string;
    readonly _wood: string;
    readonly _foliage: string;
    readonly _glass: string;
    readonly size: string;
    readonly _blood: string;
    readonly _metal: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._water = values["water"];
      this._sails = values["sails"];
      this._mud = values["mud"];
      this._grass = values["grass"];
      this._road = values["road"];
      this._rock = values["rock"];
      this._sand = values["sand"];
      this._cloth = values["cloth"];
      this._snow = values["snow"];
      this._leather = values["leather"];
      this._wood = values["wood"];
      this._foliage = values["foliage"];
      this._glass = values["glass"];
      this.size = values["size"];
      this._blood = values["blood"];
      this._metal = values["metal"];
    }
    
    get water(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._water);
    }
    
    get sails(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._sails);
    }
    
    get mud(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._mud);
    }
    
    get grass(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._grass);
    }
    
    get road(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._road);
    }
    
    get rock(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._rock);
    }
    
    get sand(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._sand);
    }
    
    get cloth(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._cloth);
    }
    
    get snow(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._snow);
    }
    
    get leather(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._leather);
    }
    
    get wood(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._wood);
    }
    
    get foliage(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._foliage);
    }
    
    get glass(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._glass);
    }
    
    get blood(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._blood);
    }
    
    get metal(): ParticleEffects.Entry | undefined {
      const collection = <ParticleEffects.Entry[]>this.collectionCache.getCollection(ParticleEffects.KEY, ParticleEffects.Entry);
      return collection.find(entry => entry.key === this._metal);
    }
  }
}

export default ProjectileImpacts;
