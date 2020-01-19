
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoPermissions } from "./CeoPermissions";
import { CeoGroups } from "./CeoGroups";

export namespace CeoPermissionsGroups {
  export const KEY = new CollectionKey("ceo_permissions_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _permissions: string;
    readonly _group: string;
    readonly pointGainEnabledOverride: boolean;
    readonly pointGainDisabledOverride: boolean;
    readonly stateActiveOverride: boolean;
    readonly stateInactiveOverride: boolean;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._permissions = values["permissions"];
      this._group = values["group"];
      this.pointGainEnabledOverride = !!values["point_gain_enabled_override"];
      this.pointGainDisabledOverride = !!values["point_gain_disabled_override"];
      this.stateActiveOverride = !!values["state_active_override"];
      this.stateInactiveOverride = !!values["state_inactive_override"];
      this.autoId = values["auto_id"];
    }
    
    get permissions(): CeoPermissions.Entry | undefined {
      const collection = <CeoPermissions.Entry[]>this.collectionCache.getCollection(CeoPermissions.KEY, CeoPermissions.Entry);
      return collection.find(entry => entry.key === this._permissions);
    }
    
    get group(): CeoGroups.Entry | undefined {
      const collection = <CeoGroups.Entry[]>this.collectionCache.getCollection(CeoGroups.KEY, CeoGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
  }
}

export default CeoPermissionsGroups;
