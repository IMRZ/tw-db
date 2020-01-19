
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";

export namespace SettlementSiegeActionEffectDistributeSlavePoints {
  export const KEY = new CollectionKey("settlement_siege_action_effect_distribute_slave_points");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectGroup: string;
    readonly slavePointDistributionPercentage: number;
    readonly clearRegionSlavePoints: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectGroup = values["effect_group"];
      this.slavePointDistributionPercentage = values["slave_point_distribution_percentage"];
      this.clearRegionSlavePoints = !!values["clear_region_slave_points"];
    }
    
    get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined {
      const collection = <SettlementSiegeActionEffectGroups.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectGroups.KEY, SettlementSiegeActionEffectGroups.Entry);
      return collection.find(entry => entry.effectGroup === this._effectGroup);
    }
  }
}

export default SettlementSiegeActionEffectDistributeSlavePoints;
