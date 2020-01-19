import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMarkerTypes } from "./AudioMarkerTypes";
export declare namespace AudioMarkers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _type: string;
        readonly colourRed: number;
        readonly colourGreen: number;
        readonly colourBlue: number;
        readonly battleStart: string;
        readonly battleStop: string;
        readonly battleRtpc: string;
        readonly campaignStart: string;
        readonly campaignStop: string;
        readonly campaignRtpc: string;
        readonly distanceBattle: number;
        readonly distanceCampaign: number;
        readonly minTime: number;
        readonly maxTime: number;
        readonly randomPosition: boolean;
        readonly flattenRtpcTo2D: boolean;
        readonly dopplerRtpcName: string;
        readonly reverb: boolean;
        readonly obstruction: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get type(): AudioMarkerTypes.Entry | undefined;
    }
}
export default AudioMarkers;
