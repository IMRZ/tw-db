
import { CollectionCache, CollectionKey } from "../../../common";
import { GraphicsSettings } from "./GraphicsSettings";
import { GraphicsSettingsOptions } from "./GraphicsSettingsOptions";

export namespace GraphicsSettingsToGraphicsOptionsJunctions {
  export const KEY = new CollectionKey("graphics_settings_to_graphics_options_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _setting: string;
    readonly _option: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._setting = values["setting"];
      this._option = values["option"];
      this.order = values["order"];
    }
    
    get setting(): GraphicsSettings.Entry | undefined {
      const collection = <GraphicsSettings.Entry[]>this.collectionCache.getCollection(GraphicsSettings.KEY, GraphicsSettings.Entry);
      return collection.find(entry => entry.key === this._setting);
    }
    
    get option(): GraphicsSettingsOptions.Entry | undefined {
      const collection = <GraphicsSettingsOptions.Entry[]>this.collectionCache.getCollection(GraphicsSettingsOptions.KEY, GraphicsSettingsOptions.Entry);
      return collection.find(entry => entry.key === this._option);
    }
  }
}

export default GraphicsSettingsToGraphicsOptionsJunctions;
