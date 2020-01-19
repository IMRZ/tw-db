
import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsDilemmaChoices } from "./CdirEventsDilemmaChoices";
import { Incidents } from "./Incidents";

export namespace CdirEventsDilemmaIncidents {
  export const KEY = new CollectionKey("cdir_events_dilemma_incidents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _dilemmaKey: string;
    readonly _choiceKey: string;
    readonly _incidentKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._dilemmaKey = values["dilemma_key"];
      this._choiceKey = values["choice_key"];
      this._incidentKey = values["incident_key"];
    }
    
    get dilemmaKey(): Dilemmas.Entry | undefined {
      const collection = <Dilemmas.Entry[]>this.collectionCache.getCollection(Dilemmas.KEY, Dilemmas.Entry);
      return collection.find(entry => entry.key === this._dilemmaKey);
    }
    
    get choiceKey(): CdirEventsDilemmaChoices.Entry | undefined {
      const collection = <CdirEventsDilemmaChoices.Entry[]>this.collectionCache.getCollection(CdirEventsDilemmaChoices.KEY, CdirEventsDilemmaChoices.Entry);
      return collection.find(entry => entry.choiceKey === this._choiceKey);
    }
    
    get incidentKey(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._incidentKey);
    }
  }
}

export default CdirEventsDilemmaIncidents;
