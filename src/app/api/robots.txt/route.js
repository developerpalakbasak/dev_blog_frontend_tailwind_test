export async function GET() {
    const robots = `
      User-agent: *
      Disallow: ${process.env.DISALLOW_PATH || "/admin/"}
      Allow: /
      Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml
    `;
  
    return new Response(robots, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  