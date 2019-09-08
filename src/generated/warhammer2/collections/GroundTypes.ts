
import { CollectionCache, CollectionKey } from "../../../common";
import { Cursors } from "./Cursors";
import { UnitAttributes } from "./UnitAttributes";
import { AudioBattleGroundTypes } from "./AudioBattleGroundTypes";

export namespace GroundTypes {
  export const KEY = new CollectionKey("ground_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;
    readonly description: string;
    readonly _standardCursor: string;
    readonly _selectionCursor: string;
    readonly _penaltyImmuneAttribute: string;
    readonly onscreenName: string;
    readonly _audioType: string;
    readonly burnRate: number;
    readonly colourRed: number;
    readonly colourGreen: number;
    readonly colourBlue: number;
    readonly minimumThreshold: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
      this.description = values["description"];
      this._standardCursor = values["standard_cursor"];
      this._selectionCursor = values["selection_cursor"];
      this._penaltyImmuneAttribute = values["penalty_immune_attribute"];
      this.onscreenName = values["onscreen_name"];
      this._audioType = values["audio_type"];
      this.burnRate = values["burn_rate"];
      this.colourRed = values["colour_red"];
      this.colourGreen = values["colour_green"];
      this.colourBlue = values["colour_blue"];
      this.minimumThreshold = values["minimum_threshold"];
    }
    
    get standardCursor(): Cursors.Entry | undefined {
      const collection = <Cursors.Entry[]>this.collectionCache.getCollection(Cursors.KEY, Cursors.Entry);
      return collection.find(entry => entry.key === this._standardCursor);
    }
    
    get selectionCursor(): Cursors.Entry | undefined {
      const collection = <Cursors.Entry[]>this.collectionCache.getCollection(Cursors.KEY, Cursors.Entry);
      return collection.find(entry => entry.key === this._selectionCursor);
    }
    
    get penaltyImmuneAttribute(): UnitAttributes.Entry | undefined {
      const collection = <UnitAttributes.Entry[]>this.collectionCache.getCollection(UnitAttributes.KEY, UnitAttributes.Entry);
      return collection.find(entry => entry.key === this._penaltyImmuneAttribute);
    }
    
    get audioType(): AudioBattleGroundTypes.Entry | undefined {
      const collection = <AudioBattleGroundTypes.Entry[]>this.collectionCache.getCollection(AudioBattleGroundTypes.KEY, AudioBattleGroundTypes.Entry);
      return collection.find(entry => entry.key === this._audioType);
    }
  }
}

export default GroundTypes;
