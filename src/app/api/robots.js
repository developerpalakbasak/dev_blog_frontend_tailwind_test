export default function handler(req, res) {
    res.setHeader("Content-Type", "text/plain");
    res.send(`
        User-agent: *
        Disallow: ${process.env.NEXT_PUBLIC_SITE_URL || "/admin/"}
        Allow: /
        Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml
    `);
}
