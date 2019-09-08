
import { CollectionCache, CollectionKey } from "../../../common";


export namespace LabSettings {
  export const KEY = new CollectionKey("lab_settings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedName: string;
    readonly localisedTooltip: string;
    readonly minValue: number;
    readonly maxValue: number;
    readonly stepSize: number;
    readonly sortOrder: number;
    readonly displayAsPercentage: boolean;
    readonly defaultValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedName = values["localised_name"];
      this.localisedTooltip = values["localised_tooltip"];
      this.minValue = values["min_value"];
      this.maxValue = values["max_value"];
      this.stepSize = values["step_size"];
      this.sortOrder = values["sort_order"];
      this.displayAsPercentage = !!values["display_as_percentage"];
      this.defaultValue = values["default_value"];
    }
    
  }
}

export default LabSettings;
