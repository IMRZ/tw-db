
import { CollectionCache, CollectionKey } from "../../../common";
import { VoScripts } from "./VoScripts";
import { TExcLocalisableFields } from "./TExcLocalisableFields";

export namespace VoTexts {
  export const KEY = new CollectionKey("vo_texts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly recordedFilename: string;
    readonly _scriptId: number;
    readonly order: number;
    readonly comment: string;
    readonly _tableField: number;
    readonly foreignKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.recordedFilename = values["recorded_filename"];
      this._scriptId = values["script_id"];
      this.order = values["order"];
      this.comment = values["comment"];
      this._tableField = values["table_field"];
      this.foreignKey = values["foreign_key"];
    }
    
    get scriptId(): VoScripts.Entry | undefined {
      const collection = <VoScripts.Entry[]>this.collectionCache.getCollection(VoScripts.KEY, VoScripts.Entry);
      return collection.find(entry => entry.id === this._scriptId);
    }
    
    get tableField(): TExcLocalisableFields.Entry | undefined {
      const collection = <TExcLocalisableFields.Entry[]>this.collectionCache.getCollection(TExcLocalisableFields.KEY, TExcLocalisableFields.Entry);
      return collection.find(entry => entry.key === this._tableField);
    }
  }
}

export default VoTexts;
