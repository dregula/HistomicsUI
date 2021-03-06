import { restRequest } from '@girder/core/rest';

/* Utility items for HistomicUI views
  In the future more utility classes/functions can be added for export
*/
class HuiSettings {
    constructor() {
        HuiSettings._hui_settings = null;
    }

    static getSettings() {
        if (HuiSettings._hui_settings) {
            return HuiSettings._hui_settings;
        } else {
            HuiSettings._hui_settings = restRequest({
                type: 'GET',
                url: 'histomicsui/settings'
            }).then((resp) => {
                return resp;
            });
        }
        return HuiSettings._hui_settings;
    }

    static clearSettingsCache() {
        delete HuiSettings._hui_settings;
    }
}

export { HuiSettings };
