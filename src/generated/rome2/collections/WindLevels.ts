
import { CollectionCache, CollectionKey } from "../../../common";
import { SeaSurfaces } from "./SeaSurfaces";

export namespace WindLevels {
  export const KEY = new CollectionKey("wind_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _seaSurface: string;
    readonly onscreen: string;
    readonly magnitudeX: number;
    readonly magnitudeY: number;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._seaSurface = values["sea_surface"];
      this.onscreen = values["onscreen"];
      this.magnitudeX = values["magnitudeX"];
      this.magnitudeY = values["magnitudeY"];
      this.sortOrder = values["sort_order"];
    }
    
    get seaSurface(): SeaSurfaces.Entry | undefined {
      const collection = <SeaSurfaces.Entry[]>this.collectionCache.getCollection(SeaSurfaces.KEY, SeaSurfaces.Entry);
      return collection.find(entry => entry.key === this._seaSurface);
    }
  }
}

export default WindLevels;
