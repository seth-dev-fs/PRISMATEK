import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getAllArticles } from '@/lib/markdown'; // Assuming this can get all unique categories

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return new NextResponse(JSON.stringify({ message: 'Invalid token' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    // Revalidate homepage
    revalidatePath('/');

    // Revalidate all category pages
    const allArticles = getAllArticles();
    const categories = new Set(allArticles.map(article => article.category.toLowerCase()));
    
    categories.forEach(category => {
      revalidatePath(`/categoria/${category}`);
    });

    // Revalidate all article pages that might have been updated/added
    // Revalidating individual article pages would require knowing their slugs here.
    // For simplicity, we assume new articles will be discovered via homepage/category revalidation.
    // If specific article slugs need revalidation, they would need to be passed here.

    return new NextResponse(JSON.stringify({ revalidated: true, now: Date.now() }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Error revalidating', error: err.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
