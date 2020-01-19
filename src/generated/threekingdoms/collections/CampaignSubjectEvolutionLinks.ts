
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSubjectEvolutions } from "./CampaignSubjectEvolutions";

export namespace CampaignSubjectEvolutionLinks {
  export const KEY = new CollectionKey("campaign_subject_evolution_links");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _parent: string;
    readonly _child: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._parent = values["parent"];
      this._child = values["child"];
    }
    
    get parent(): CampaignSubjectEvolutions.Entry | undefined {
      const collection = <CampaignSubjectEvolutions.Entry[]>this.collectionCache.getCollection(CampaignSubjectEvolutions.KEY, CampaignSubjectEvolutions.Entry);
      return collection.find(entry => entry.key === this._parent);
    }
    
    get child(): CampaignSubjectEvolutions.Entry | undefined {
      const collection = <CampaignSubjectEvolutions.Entry[]>this.collectionCache.getCollection(CampaignSubjectEvolutions.KEY, CampaignSubjectEvolutions.Entry);
      return collection.find(entry => entry.key === this._child);
    }
  }
}

export default CampaignSubjectEvolutionLinks;
