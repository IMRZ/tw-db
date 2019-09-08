
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleCatchmentOverrideAreas } from "./BattleCatchmentOverrideAreas";
import { Cultures } from "./Cultures";
import { CampaignBattleTypeEnums } from "./CampaignBattleTypeEnums";
import { CampaignBattlePaths } from "./CampaignBattlePaths";
import { BattleCatchmentOverrideGroups } from "./BattleCatchmentOverrideGroups";

export namespace BattleCatchmentOverrideBattleMappings {
  export const KEY = new CollectionKey("battle_catchment_override_battle_mappings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _area: string;
    readonly _attacker: string;
    readonly _defender: string;
    readonly _battleType: string;
    readonly _battlePath: string;
    readonly _battleGroup: string;
    readonly requiredTileUpgrades: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._area = values["area"];
      this._attacker = values["attacker"];
      this._defender = values["defender"];
      this._battleType = values["battle_type"];
      this._battlePath = values["battle_path"];
      this._battleGroup = values["battle_group"];
      this.requiredTileUpgrades = values["required_tile_upgrades"];
    }
    
    get area(): BattleCatchmentOverrideAreas.Entry | undefined {
      const collection = <BattleCatchmentOverrideAreas.Entry[]>this.collectionCache.getCollection(BattleCatchmentOverrideAreas.KEY, BattleCatchmentOverrideAreas.Entry);
      return collection.find(entry => entry.area === this._area);
    }
    
    get attacker(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._attacker);
    }
    
    get defender(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._defender);
    }
    
    get battleType(): CampaignBattleTypeEnums.Entry | undefined {
      const collection = <CampaignBattleTypeEnums.Entry[]>this.collectionCache.getCollection(CampaignBattleTypeEnums.KEY, CampaignBattleTypeEnums.Entry);
      return collection.find(entry => entry.key === this._battleType);
    }
    
    get battlePath(): CampaignBattlePaths.Entry | undefined {
      const collection = <CampaignBattlePaths.Entry[]>this.collectionCache.getCollection(CampaignBattlePaths.KEY, CampaignBattlePaths.Entry);
      return collection.find(entry => entry.path === this._battlePath);
    }
    
    get battleGroup(): BattleCatchmentOverrideGroups.Entry | undefined {
      const collection = <BattleCatchmentOverrideGroups.Entry[]>this.collectionCache.getCollection(BattleCatchmentOverrideGroups.KEY, BattleCatchmentOverrideGroups.Entry);
      return collection.find(entry => entry.group === this._battleGroup);
    }
  }
}

export default BattleCatchmentOverrideBattleMappings;
