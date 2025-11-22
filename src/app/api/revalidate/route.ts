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

      const path = request.nextUrl.searchParams.get('path');

      let revalidatedPaths = [];

  

      if (path) {

        revalidatePath(path);

        revalidatedPaths.push(path);

      } else {

        // Revalidate homepage

        revalidatePath('/');

        revalidatedPaths.push('/');

  

        // Revalidate all category pages

        const allArticles = getAllArticles();

        const categories = new Set(allArticles.map(article => article.category.toLowerCase()));

        

        categories.forEach(category => {

          const categoryPath = `/categoria/${category}`;

          revalidatePath(categoryPath);

          revalidatedPaths.push(categoryPath);

        });

      }

  

      return new NextResponse(JSON.stringify({ revalidated: true, now: Date.now(), paths: revalidatedPaths }), {

        status: 200,

        headers: {

          'Content-Type': 'application/json',

        },

      });

        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            return new NextResponse(JSON.stringify({ message: 'Error revalidating', error: errorMessage }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }}
