
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoThresholds } from "./CeoThresholds";
import { CeoNodes } from "./CeoNodes";

export namespace CeoThresholdNodes {
  export const KEY = new CollectionKey("ceo_threshold_nodes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ceoThreshold: string;
    readonly _ceoNode: string;
    readonly pointsThresholdToActivateNode: number;
    readonly canDowngradeToPreviousNode: boolean;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ceoThreshold = values["ceo_threshold"];
      this._ceoNode = values["ceo_node"];
      this.pointsThresholdToActivateNode = values["points_threshold_to_activate_node"];
      this.canDowngradeToPreviousNode = !!values["can_downgrade_to_previous_node"];
      this.autoId = values["auto_id"];
    }
    
    get ceoThreshold(): CeoThresholds.Entry | undefined {
      const collection = <CeoThresholds.Entry[]>this.collectionCache.getCollection(CeoThresholds.KEY, CeoThresholds.Entry);
      return collection.find(entry => entry.key === this._ceoThreshold);
    }
    
    get ceoNode(): CeoNodes.Entry | undefined {
      const collection = <CeoNodes.Entry[]>this.collectionCache.getCollection(CeoNodes.KEY, CeoNodes.Entry);
      return collection.find(entry => entry.key === this._ceoNode);
    }
  }
}

export default CeoThresholdNodes;
