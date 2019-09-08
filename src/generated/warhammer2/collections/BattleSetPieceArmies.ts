
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { CampaignCharacterArts } from "./CampaignCharacterArts";
import { MilitaryForceLegacyEmblems } from "./MilitaryForceLegacyEmblems";

export namespace BattleSetPieceArmies {
  export const KEY = new CollectionKey("battle_set_piece_armies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly armyName: string;
    readonly _faction: string;
    readonly isAlliedToPlayer: boolean;
    readonly isReinforcementArmy: boolean;
    readonly armyOnscreenName: string;
    readonly _armyModel: number;
    readonly _armyEmblem: string;
    readonly approachAngle: number;
    readonly deploymentZoneId: number;
    readonly aiArmyTactic: string;
    readonly isFrontendPlayerArmy: boolean;
    readonly useDefaultDeploymentZones: boolean;
    readonly isHiddenArmy: boolean;
    readonly shouldMergeArmy: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.armyName = values["army_name"];
      this._faction = values["faction"];
      this.isAlliedToPlayer = !!values["is_allied_to_player"];
      this.isReinforcementArmy = !!values["is_reinforcement_army"];
      this.armyOnscreenName = values["army_onscreen_name"];
      this._armyModel = values["army_model"];
      this._armyEmblem = values["army_emblem"];
      this.approachAngle = values["approach_angle"];
      this.deploymentZoneId = values["deployment_zone_id"];
      this.aiArmyTactic = values["ai_army_tactic"];
      this.isFrontendPlayerArmy = !!values["is_frontend_player_army"];
      this.useDefaultDeploymentZones = !!values["use_default_deployment_zones"];
      this.isHiddenArmy = !!values["is_hidden_army"];
      this.shouldMergeArmy = !!values["should_merge_army"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get armyModel(): CampaignCharacterArts.Entry | undefined {
      const collection = <CampaignCharacterArts.Entry[]>this.collectionCache.getCollection(CampaignCharacterArts.KEY, CampaignCharacterArts.Entry);
      return collection.find(entry => entry.id === this._armyModel);
    }
    
    get armyEmblem(): MilitaryForceLegacyEmblems.Entry | undefined {
      const collection = <MilitaryForceLegacyEmblems.Entry[]>this.collectionCache.getCollection(MilitaryForceLegacyEmblems.KEY, MilitaryForceLegacyEmblems.Entry);
      return collection.find(entry => entry.key === this._armyEmblem);
    }
  }
}

export default BattleSetPieceArmies;
