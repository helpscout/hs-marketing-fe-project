import IconBeacon from '../../../../../static/images/nav/icon-beacon.svg';
import IconCustomers from '../../../../../static/images/nav/icon-customers.svg';
import IconDocs from '../../../../../static/images/nav/icon-docs.svg';
import IconHelpDesk from '../../../../../static/images/nav/icon-helpdesk.svg';
import IconIntegrations from '../../../../../static/images/nav/icon-integrations.svg';
import IconMessages from '../../../../../static/images/nav/icon-messages.svg';
import IconReports from '../../../../../static/images/nav/icon-reports.svg';

const NAV_OPTION_ICONS = {
  IconBeacon,
  IconCustomers,
  IconDocs,
  IconHelpDesk,
  IconIntegrations,
  IconMessages,
  IconReports,
};

export const getNavOptionIcon = (iconName) => NAV_OPTION_ICONS[iconName];
