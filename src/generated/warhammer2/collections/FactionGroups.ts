
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";

export namespace FactionGroups {
  export const KEY = new CollectionKey("faction_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly nameLocalised: string;
    readonly uiIcon: string;
    readonly _effectBundle: string;
    readonly descriptionLocalised: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.nameLocalised = values["name_localised"];
      this.uiIcon = values["ui_icon"];
      this._effectBundle = values["effect_bundle"];
      this.descriptionLocalised = values["description_localised"];
      this.order = values["order"];
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default FactionGroups;
