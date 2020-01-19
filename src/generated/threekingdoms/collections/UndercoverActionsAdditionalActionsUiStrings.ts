
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentActions } from "./AgentActions";
import { UndercoverActionsAdditionalActionsUiFilters } from "./UndercoverActionsAdditionalActionsUiFilters";

export namespace UndercoverActionsAdditionalActionsUiStrings {
  export const KEY = new CollectionKey("undercover_actions_additional_actions_ui_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _action: string;
    readonly title: string;
    readonly description: string;
    readonly imageKey: string;
    readonly actionConfirm: string;
    readonly actionCancel: string;
    readonly _filter: string;
    readonly id: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._action = values["action"];
      this.title = values["title"];
      this.description = values["description"];
      this.imageKey = values["image_key"];
      this.actionConfirm = values["action_confirm"];
      this.actionCancel = values["action_cancel"];
      this._filter = values["filter"];
      this.id = values["id"];
    }
    
    get action(): AgentActions.Entry | undefined {
      const collection = <AgentActions.Entry[]>this.collectionCache.getCollection(AgentActions.KEY, AgentActions.Entry);
      return collection.find(entry => entry.uniqueId === this._action);
    }
    
    get filter(): UndercoverActionsAdditionalActionsUiFilters.Entry | undefined {
      const collection = <UndercoverActionsAdditionalActionsUiFilters.Entry[]>this.collectionCache.getCollection(UndercoverActionsAdditionalActionsUiFilters.KEY, UndercoverActionsAdditionalActionsUiFilters.Entry);
      return collection.find(entry => entry.key === this._filter);
    }
  }
}

export default UndercoverActionsAdditionalActionsUiStrings;
