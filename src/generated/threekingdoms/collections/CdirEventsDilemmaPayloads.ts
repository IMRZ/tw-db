
import { CollectionCache, CollectionKey } from "../../../common";
import { Dilemmas } from "./Dilemmas";
import { CdirEventsDilemmaChoices } from "./CdirEventsDilemmaChoices";
import { CdirEventsPayloads } from "./CdirEventsPayloads";
import { CdirEventsTargets } from "./CdirEventsTargets";

export namespace CdirEventsDilemmaPayloads {
  export const KEY = new CollectionKey("cdir_events_dilemma_payloads");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _dilemmaKey: string;
    readonly _choiceKey: string;
    readonly _payloadKey: string;
    readonly value: string;
    readonly _targetKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._dilemmaKey = values["dilemma_key"];
      this._choiceKey = values["choice_key"];
      this._payloadKey = values["payload_key"];
      this.value = values["value"];
      this._targetKey = values["target_key"];
    }
    
    get dilemmaKey(): Dilemmas.Entry | undefined {
      const collection = <Dilemmas.Entry[]>this.collectionCache.getCollection(Dilemmas.KEY, Dilemmas.Entry);
      return collection.find(entry => entry.key === this._dilemmaKey);
    }
    
    get choiceKey(): CdirEventsDilemmaChoices.Entry | undefined {
      const collection = <CdirEventsDilemmaChoices.Entry[]>this.collectionCache.getCollection(CdirEventsDilemmaChoices.KEY, CdirEventsDilemmaChoices.Entry);
      return collection.find(entry => entry.choiceKey === this._choiceKey);
    }
    
    get payloadKey(): CdirEventsPayloads.Entry | undefined {
      const collection = <CdirEventsPayloads.Entry[]>this.collectionCache.getCollection(CdirEventsPayloads.KEY, CdirEventsPayloads.Entry);
      return collection.find(entry => entry.payloadKey === this._payloadKey);
    }
    
    get targetKey(): CdirEventsTargets.Entry | undefined {
      const collection = <CdirEventsTargets.Entry[]>this.collectionCache.getCollection(CdirEventsTargets.KEY, CdirEventsTargets.Entry);
      return collection.find(entry => entry.targetKey === this._targetKey);
    }
  }
}

export default CdirEventsDilemmaPayloads;
