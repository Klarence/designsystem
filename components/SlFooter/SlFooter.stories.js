import { SlFooter } from './SlFooter.js';

export default {
  title: 'Templates/SlFooter',
  component: SlFooter,
  argTypes: {
    siteUrl: {
      control: 'text',
      description: 'URL of site',
    },
    siteName: {
      control: 'text',
      description: 'Name of site',
    },
  },
  render: ({ ...args }) => {
    return `
      <sl-footer 
          ${args.siteUrl ? `site-url="${args.siteUrl}"` : ''}
          ${args.siteName ? `site-nom="${args.siteName}"` : ''}
      >
        <div slot="secondary-links">
          <nav>
            <h3>Section 1</h3>
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Section 1</h3>
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Section 1</h3>
            <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
            </ul>
          </nav>
<!--          <sl-social-->
<!--            title="Follow Us"-->
<!--            theme="dark"-->
<!--            medias='[{"icon":"/assets/icons/facebook-dark.svg","url":"https://facebook.com","text":"Facebook"},{"icon":"/assets/icons/twitterX-dark.svg","url":"https://twitter.com","text":"Twitter"},{"icon":"/assets/icons/youtube-dark.svg","url":"https://linkedin.com","text":"LinkedIn"}]'-->
<!--          >-->
<!--          </sl-social>-->
        </div>
        <div slot="secondary-links">
            <ul>
                <li><a href="/accessibility">Accessibility</a></li>
                <li><a href="/sitemap">Sitemap</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/conditions-of-use">Conditions of use</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
        <div slot="copyright">
        <a href="/copyright">© KOYdesigns&nbsp;2024</a>
        </div>
      </sl-footer>
    `;
  },
};

export const Default = {
  args: {
    siteUrl: 'https://koydesigns.net',
    siteName: 'KOYdesigns',
  },
};
