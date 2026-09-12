import { HyruleCompendiumEntityBase } from '../HyruleCompendiumEntityBase';
import type { HyruleCompendiumSDK } from '../HyruleCompendiumSDK';
import type { Control } from '../types';
import type { Region, RegionLoadMatch, RegionListMatch } from '../HyruleCompendiumTypes';
declare class RegionEntity extends HyruleCompendiumEntityBase<Region> {
    constructor(client: HyruleCompendiumSDK, entopts: any);
    make(this: RegionEntity): RegionEntity;
    load(this: any, reqmatch?: RegionLoadMatch, ctrl?: Control): Promise<RegionEntity>;
    list(this: any, reqmatch?: RegionListMatch, ctrl?: Control): Promise<RegionEntity[]>;
}
export { RegionEntity };
