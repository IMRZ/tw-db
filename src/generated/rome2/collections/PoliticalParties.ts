
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { PoliticalTraits } from "./PoliticalTraits";

export namespace PoliticalParties {
  export const KEY = new CollectionKey("political_parties");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly nameLocalised: string;
    readonly playable: boolean;
    readonly associatedSurname: string;
    readonly uiIcon: string;
    readonly _effectBundle: string;
    readonly descriptionLocalised: string;
    readonly initialPower: number;
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly _trait1: string;
    readonly _trait2: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.nameLocalised = values["name_localised"];
      this.playable = !!values["playable"];
      this.associatedSurname = values["associated_surname"];
      this.uiIcon = values["ui_icon"];
      this._effectBundle = values["effect_bundle"];
      this.descriptionLocalised = values["description_localised"];
      this.initialPower = values["initial_power"];
      this.r = values["r"];
      this.g = values["g"];
      this.b = values["b"];
      this._trait1 = values["trait1"];
      this._trait2 = values["trait2"];
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get trait1(): PoliticalTraits.Entry | undefined {
      const collection = <PoliticalTraits.Entry[]>this.collectionCache.getCollection(PoliticalTraits.KEY, PoliticalTraits.Entry);
      return collection.find(entry => entry.key === this._trait1);
    }
    
    get trait2(): PoliticalTraits.Entry | undefined {
      const collection = <PoliticalTraits.Entry[]>this.collectionCache.getCollection(PoliticalTraits.KEY, PoliticalTraits.Entry);
      return collection.find(entry => entry.key === this._trait2);
    }
  }
}

export default PoliticalParties;
