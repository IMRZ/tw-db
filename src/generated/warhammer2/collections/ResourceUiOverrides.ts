
import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";
import { Factions } from "./Factions";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace ResourceUiOverrides {
  export const KEY = new CollectionKey("resource_ui_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _sourceResource: string;
    readonly _targetResource: string;
    readonly _overrideFaction: string;
    readonly _overrideSubculture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._sourceResource = values["source_resource"];
      this._targetResource = values["target_resource"];
      this._overrideFaction = values["override_faction"];
      this._overrideSubculture = values["override_subculture"];
    }
    
    get sourceResource(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._sourceResource);
    }
    
    get targetResource(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._targetResource);
    }
    
    get overrideFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._overrideFaction);
    }
    
    get overrideSubculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._overrideSubculture);
    }
  }
}

export default ResourceUiOverrides;
