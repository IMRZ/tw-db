
import { CollectionCache, CollectionKey } from "../../../common";
import { TExcLocalisableFields } from "./TExcLocalisableFields";
import { Languages } from "./Languages";
import { VoScripts } from "./VoScripts";

export namespace SubtitleTimings {
  export const KEY = new CollectionKey("subtitle_timings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _subtitleField: number;
    readonly _language: string;
    readonly start: number;
    readonly end: number;
    readonly _scriptId: number;
    readonly textSection: number;
    readonly foreignKey: string;
    readonly textId: string;
    readonly alwaysShow: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._subtitleField = values["subtitle_field"];
      this._language = values["language"];
      this.start = values["start"];
      this.end = values["end"];
      this._scriptId = values["script_id"];
      this.textSection = values["text_section"];
      this.foreignKey = values["foreign_key"];
      this.textId = values["text_id"];
      this.alwaysShow = !!values["always_show"];
    }
    
    get subtitleField(): TExcLocalisableFields.Entry | undefined {
      const collection = <TExcLocalisableFields.Entry[]>this.collectionCache.getCollection(TExcLocalisableFields.KEY, TExcLocalisableFields.Entry);
      return collection.find(entry => entry.key === this._subtitleField);
    }
    
    get language(): Languages.Entry | undefined {
      const collection = <Languages.Entry[]>this.collectionCache.getCollection(Languages.KEY, Languages.Entry);
      return collection.find(entry => entry.key === this._language);
    }
    
    get scriptId(): VoScripts.Entry | undefined {
      const collection = <VoScripts.Entry[]>this.collectionCache.getCollection(VoScripts.KEY, VoScripts.Entry);
      return collection.find(entry => entry.id === this._scriptId);
    }
  }
}

export default SubtitleTimings;
