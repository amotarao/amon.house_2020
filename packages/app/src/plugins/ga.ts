import { Plugin, Context } from '@nuxt/types';

const plugin: Plugin = ({ app }) => {
  if (!('gtag' in (window as any))) {
    return;
  }

  const { gtag } = window as any;

  (app as any).router.afterEach((to: any) => {
    gtag('config', process.env.GA_ID, { page_path: to.fullPath });
  });
};

export default plugin;
