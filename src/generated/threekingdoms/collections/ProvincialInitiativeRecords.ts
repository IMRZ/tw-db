
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { CampaignVfxCampaignVfxEventIds } from "./CampaignVfxCampaignVfxEventIds";
import { Religions } from "./Religions";

export namespace ProvincialInitiativeRecords {
  export const KEY = new CollectionKey("provincial_initiative_records");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedName: string;
    readonly _effectBundle: string;
    readonly order: number;
    readonly iconPath: string;
    readonly _campaignVfxId: string;
    readonly _religionRestriction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedName = values["localised_name"];
      this._effectBundle = values["effect_bundle"];
      this.order = values["order"];
      this.iconPath = values["icon_path"];
      this._campaignVfxId = values["campaign_vfx_id"];
      this._religionRestriction = values["religion_restriction"];
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get campaignVfxId(): CampaignVfxCampaignVfxEventIds.Entry | undefined {
      const collection = <CampaignVfxCampaignVfxEventIds.Entry[]>this.collectionCache.getCollection(CampaignVfxCampaignVfxEventIds.KEY, CampaignVfxCampaignVfxEventIds.Entry);
      return collection.find(entry => entry.campaignVfxEvent === this._campaignVfxId);
    }
    
    get religionRestriction(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religionRestriction);
    }
  }
}

export default ProvincialInitiativeRecords;
