import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { UiColours } from "./UiColours";
import { Campaigns } from "./Campaigns";
export declare namespace FrontendFactionMapRelationships {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _primaryFaction: string;
        readonly _secondaryFaction: string;
        readonly _relationshipColour: string;
        readonly _campaignKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get primaryFaction(): Factions.Entry | undefined;
        get secondaryFaction(): Factions.Entry | undefined;
        get relationshipColour(): UiColours.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
    }
}
export default FrontendFactionMapRelationships;
