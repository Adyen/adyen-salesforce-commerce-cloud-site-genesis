import CheckoutPageSG from '../pages/CheckoutPageSG.mjs';
import AccountPageSG from '../pages/AccountPageSG.mjs';

export const environments = [];

if (!process.env.SFRA_VERSION) {
  environments.push({
    name: 'SG',
    CheckoutPage: CheckoutPageSG,
    urlExtension: '/on/demandware.store/Sites-SiteGenesis-Site',
    AccountPage: AccountPageSG,
  },);
}

