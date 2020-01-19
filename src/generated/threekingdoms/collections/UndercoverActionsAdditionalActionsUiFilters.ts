
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentActionsCharacterPositionInFactionEnums } from "./AgentActionsCharacterPositionInFactionEnums";

export namespace UndercoverActionsAdditionalActionsUiFilters {
  export const KEY = new CollectionKey("undercover_actions_additional_actions_ui_filters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly agentGender: string;
    readonly _agentRole: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.agentGender = values["agent_gender"];
      this._agentRole = values["agent_role"];
    }
    
    get agentRole(): AgentActionsCharacterPositionInFactionEnums.Entry | undefined {
      const collection = <AgentActionsCharacterPositionInFactionEnums.Entry[]>this.collectionCache.getCollection(AgentActionsCharacterPositionInFactionEnums.KEY, AgentActionsCharacterPositionInFactionEnums.Entry);
      return collection.find(entry => entry.key === this._agentRole);
    }
  }
}

export default UndercoverActionsAdditionalActionsUiFilters;
