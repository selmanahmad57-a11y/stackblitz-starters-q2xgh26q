import { NextResponse } from 'next/server';
import axios from 'axios';
import cheerio from 'cheerio';

export async function POST(req: Request) {
  const { url } = await req.json();

  if (!url || !url.startsWith('http')) {
    return NextResponse.json({ error: 'URL invalide' }, { status: 400 });
  }

  try {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const titleTag = $('title').text();
    const metaDescription = $('meta[name="description"]').attr('content') || '';
    const h1Count = $('h1').length;
    const internalLinks = $('a[href^="/"]').length;
    const externalLinks = $('a[href^="http"]').length;
    const imagesWithoutAlt = $('img:not([alt])').length;

    const issues = [];
    if (!titleTag) issues.push('Balise <title> manquante');
    if (!metaDescription) issues.push('Balise meta description manquante');
    if (imagesWithoutAlt > 0)
      issues.push(`${imagesWithoutAlt} image(s) sans attribut alt`);

    const score = 100 - issues.length * 10;

    return NextResponse.json({
      url,
      titleTag,
      metaDescription,
      h1Count,
      internalLinks,
      externalLinks,
      issues,
      score: Math.max(score, 0),
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de l’analyse' },
      { status: 500 }
    );
  }
}
