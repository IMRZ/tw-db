
import { CollectionCache, CollectionKey } from "../../../common";
import { MissionTypes } from "./MissionTypes";
import { CdirEventsCategories } from "./CdirEventsCategories";
import { BattleSetPieces } from "./BattleSetPieces";

export namespace Missions {
  export const KEY = new CollectionKey("missions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _missionType: string;
    readonly localisedTitle: string;
    readonly localisedDescription: string;
    readonly uiImage: string;
    readonly generate: boolean;
    readonly prioritised: boolean;
    readonly _eventCategory: string;
    readonly _setPieceBattle: string;
    readonly locationX: number;
    readonly locationY: number;
    readonly questMission: boolean;
    readonly triggerRadius: number;
    readonly questCharacter: string;
    readonly stickyByDefault: boolean;
    readonly localisedSupplementaryText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._missionType = values["mission_type"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
      this.uiImage = values["ui_image"];
      this.generate = !!values["generate"];
      this.prioritised = !!values["prioritised"];
      this._eventCategory = values["event_category"];
      this._setPieceBattle = values["set_piece_battle"];
      this.locationX = values["location_x"];
      this.locationY = values["location_y"];
      this.questMission = !!values["quest_mission"];
      this.triggerRadius = values["trigger_radius"];
      this.questCharacter = values["quest_character"];
      this.stickyByDefault = !!values["sticky_by_default"];
      this.localisedSupplementaryText = values["localised_supplementary_text"];
    }
    
    get missionType(): MissionTypes.Entry | undefined {
      const collection = <MissionTypes.Entry[]>this.collectionCache.getCollection(MissionTypes.KEY, MissionTypes.Entry);
      return collection.find(entry => entry.key === this._missionType);
    }
    
    get eventCategory(): CdirEventsCategories.Entry | undefined {
      const collection = <CdirEventsCategories.Entry[]>this.collectionCache.getCollection(CdirEventsCategories.KEY, CdirEventsCategories.Entry);
      return collection.find(entry => entry.categoryKey === this._eventCategory);
    }
    
    get setPieceBattle(): BattleSetPieces.Entry | undefined {
      const collection = <BattleSetPieces.Entry[]>this.collectionCache.getCollection(BattleSetPieces.KEY, BattleSetPieces.Entry);
      return collection.find(entry => entry.battleName === this._setPieceBattle);
    }
  }
}

export default Missions;
