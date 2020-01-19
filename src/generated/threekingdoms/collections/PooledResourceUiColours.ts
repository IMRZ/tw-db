
import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResources } from "./PooledResources";
import { UiColours } from "./UiColours";

export namespace PooledResourceUiColours {
  export const KEY = new CollectionKey("pooled_resource_ui_colours");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _pooledResource: string;
    readonly _primaryColour: string;
    readonly _increaseColour: string;
    readonly _decreaseColour: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._pooledResource = values["pooled_resource"];
      this._primaryColour = values["primary_colour"];
      this._increaseColour = values["increase_colour"];
      this._decreaseColour = values["decrease_colour"];
    }
    
    get pooledResource(): PooledResources.Entry | undefined {
      const collection = <PooledResources.Entry[]>this.collectionCache.getCollection(PooledResources.KEY, PooledResources.Entry);
      return collection.find(entry => entry.key === this._pooledResource);
    }
    
    get primaryColour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._primaryColour);
    }
    
    get increaseColour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._increaseColour);
    }
    
    get decreaseColour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._decreaseColour);
    }
  }
}

export default PooledResourceUiColours;
