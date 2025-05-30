import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {GlobalState} from 'mattermost-redux/types/store';

import {Registry} from 'mattermost-webapp/packages/mattermost-redux/src/registry';

const pluginId = 'fingrad_link';

export default class Plugin {

  initialize(registry: any, store: any) {

    const helpText = 'Открыть Fingrad';

    const action = () => {
            window.open('http://fin.cdc.business', '_blank');
        };

    if (registry.registerAppBarComponent) {
            const config = getConfig(store.getState() as GlobalState);
            const siteUrl = (config && config.SiteURL) || '';
            const iconURL = `${siteUrl}/plugins/${pluginId}/public/app-bar-icon.jpg`;
            registry.registerAppBarComponent(iconURL, action, helpText);
        }
  }
}

(global as any).window.registerPlugin(pluginId, new Plugin());