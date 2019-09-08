
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Abilities } from "./Abilities";
import { AgentAttributes } from "./AgentAttributes";
import { ActionResults } from "./ActionResults";
import { AudioVoCampaignSpecialAbilityStates } from "./AudioVoCampaignSpecialAbilityStates";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace AgentActions {
  export const KEY = new CollectionKey("agent_actions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agent: string;
    readonly _ability: string;
    readonly _attribute: string;
    readonly _criticalFailure: string;
    readonly _failure: string;
    readonly _opportuneFailure: string;
    readonly _success: string;
    readonly _criticalSuccess: string;
    readonly _cannotFail: string;
    readonly localisedActionName: string;
    readonly localisedActionDescription: string;
    readonly _targetAttribute: string;
    readonly criticalSuccessProportionModifier: number;
    readonly opportuneFailureProportionModifier: number;
    readonly criticalFailureProportionModifier: number;
    readonly uniqueId: string;
    readonly chanceOfSuccess: number;
    readonly _voiceover: string;
    readonly iconPath: string;
    readonly showActionInfoInUi: boolean;
    readonly _subculture: string;
    readonly succeedAlwaysOverride: boolean;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agent = values["agent"];
      this._ability = values["ability"];
      this._attribute = values["attribute"];
      this._criticalFailure = values["critical_failure"];
      this._failure = values["failure"];
      this._opportuneFailure = values["opportune_failure"];
      this._success = values["success"];
      this._criticalSuccess = values["critical_success"];
      this._cannotFail = values["cannot_fail"];
      this.localisedActionName = values["localised_action_name"];
      this.localisedActionDescription = values["localised_action_description"];
      this._targetAttribute = values["target_attribute"];
      this.criticalSuccessProportionModifier = values["critical_success_proportion_modifier"];
      this.opportuneFailureProportionModifier = values["opportune_failure_proportion_modifier"];
      this.criticalFailureProportionModifier = values["critical_failure_proportion_modifier"];
      this.uniqueId = values["unique_id"];
      this.chanceOfSuccess = values["chance_of_success"];
      this._voiceover = values["voiceover"];
      this.iconPath = values["icon_path"];
      this.showActionInfoInUi = !!values["show_action_info_in_ui"];
      this._subculture = values["subculture"];
      this.succeedAlwaysOverride = !!values["succeed_always_override"];
      this.order = values["order"];
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
    
    get ability(): Abilities.Entry | undefined {
      const collection = <Abilities.Entry[]>this.collectionCache.getCollection(Abilities.KEY, Abilities.Entry);
      return collection.find(entry => entry.ability === this._ability);
    }
    
    get attribute(): AgentAttributes.Entry | undefined {
      const collection = <AgentAttributes.Entry[]>this.collectionCache.getCollection(AgentAttributes.KEY, AgentAttributes.Entry);
      return collection.find(entry => entry.key === this._attribute);
    }
    
    get criticalFailure(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._criticalFailure);
    }
    
    get failure(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._failure);
    }
    
    get opportuneFailure(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._opportuneFailure);
    }
    
    get success(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._success);
    }
    
    get criticalSuccess(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._criticalSuccess);
    }
    
    get cannotFail(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._cannotFail);
    }
    
    get targetAttribute(): AgentAttributes.Entry | undefined {
      const collection = <AgentAttributes.Entry[]>this.collectionCache.getCollection(AgentAttributes.KEY, AgentAttributes.Entry);
      return collection.find(entry => entry.key === this._targetAttribute);
    }
    
    get voiceover(): AudioVoCampaignSpecialAbilityStates.Entry | undefined {
      const collection = <AudioVoCampaignSpecialAbilityStates.Entry[]>this.collectionCache.getCollection(AudioVoCampaignSpecialAbilityStates.KEY, AudioVoCampaignSpecialAbilityStates.Entry);
      return collection.find(entry => entry.name === this._voiceover);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default AgentActions;
