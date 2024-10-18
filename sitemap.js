import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

async function generateSitemap() {
  const sitemapStream = new SitemapStream({
    hostname: 'https://cmsportfolioprofissional.netlify.app/',
  });

  // Adicione suas URLs aqui
  sitemapStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemapStream.write({ url: '/sobre', changefreq: 'monthly', priority: 0.7 });
  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream).then((data) =>
    data.toString(),
  );
  fs.writeFileSync(path.resolve('public', 'sitemap.xml'), sitemap);

  console.log('Sitemap gerado com sucesso!');

  // Gerar o robots.txt
  const robotsContent = `User-agent: *\nAllow: /\n`;
  fs.writeFileSync(path.resolve('public', 'robots.txt'), robotsContent);

  console.log('robots.txt gerado com sucesso!');
}

generateSitemap()
  .then(() => console.log('Sitemap e robots.txt gerados com sucesso!'))
  .catch(console.error);
