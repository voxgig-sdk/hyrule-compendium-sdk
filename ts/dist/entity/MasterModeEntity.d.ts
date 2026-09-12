import { HyruleCompendiumEntityBase } from '../HyruleCompendiumEntityBase';
import type { HyruleCompendiumSDK } from '../HyruleCompendiumSDK';
import type { Control } from '../types';
import type { MasterMode, MasterModeLoadMatch } from '../HyruleCompendiumTypes';
declare class MasterModeEntity extends HyruleCompendiumEntityBase<MasterMode> {
    constructor(client: HyruleCompendiumSDK, entopts: any);
    make(this: MasterModeEntity): MasterModeEntity;
    load(this: any, reqmatch?: MasterModeLoadMatch, ctrl?: Control): Promise<MasterModeEntity>;
}
export { MasterModeEntity };
