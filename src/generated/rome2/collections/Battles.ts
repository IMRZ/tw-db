
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleTypes } from "./BattleTypes";

export namespace Battles {
  export const KEY = new CollectionKey("battles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _type: string;
    readonly isNaval: boolean;
    readonly specification: string;
    readonly localisedName: string;
    readonly description: string;
    readonly objectivesTeam1: string;
    readonly objectivesTeam2: string;
    readonly screenshotPath: string;
    readonly mapPath: string;
    readonly teamSize1: number;
    readonly teamSize2: number;
    readonly release: boolean;
    readonly multiplayer: boolean;
    readonly singleplayer: boolean;
    readonly introMovie: string;
    readonly year: number;
    readonly defenderFundsRatio: number;
    readonly hasKeyBuildings: boolean;
    readonly matchmaking: boolean;
    readonly playableAreaWidth: number;
    readonly playableAreaHeight: number;
    readonly isLargeSettlement: boolean;
    readonly has15MWalls: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._type = values["type"];
      this.isNaval = !!values["is_naval"];
      this.specification = values["specification"];
      this.localisedName = values["localised_name"];
      this.description = values["description"];
      this.objectivesTeam1 = values["objectives_team_1"];
      this.objectivesTeam2 = values["objectives_team_2"];
      this.screenshotPath = values["screenshot_path"];
      this.mapPath = values["map_path"];
      this.teamSize1 = values["team_size_1"];
      this.teamSize2 = values["team_size_2"];
      this.release = !!values["release"];
      this.multiplayer = !!values["multiplayer"];
      this.singleplayer = !!values["singleplayer"];
      this.introMovie = values["intro_movie"];
      this.year = values["year"];
      this.defenderFundsRatio = values["defender_funds_ratio"];
      this.hasKeyBuildings = !!values["has_key_buildings"];
      this.matchmaking = !!values["matchmaking"];
      this.playableAreaWidth = values["playable_area_width"];
      this.playableAreaHeight = values["playable_area_height"];
      this.isLargeSettlement = !!values["is_large_settlement"];
      this.has15MWalls = !!values["has_15m_walls"];
    }
    
    get type(): BattleTypes.Entry | undefined {
      const collection = <BattleTypes.Entry[]>this.collectionCache.getCollection(BattleTypes.KEY, BattleTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
  }
}

export default Battles;
