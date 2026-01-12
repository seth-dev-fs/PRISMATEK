import { NextRequest, NextResponse } from 'next/server';
import { getRecommendation } from '@/lib/comparador/gemini';
import { ComparadorRequestPayload } from '@/lib/comparador/types';

export async function POST(request: NextRequest) {
  try {
    const body: ComparadorRequestPayload = await request.json();
    const { categoria, respostas } = body;

    // Validate input
    if (!categoria || !respostas || !Array.isArray(respostas)) {
      return NextResponse.json(
        { error: 'Categoria e respostas são obrigatórias' },
        { status: 400 }
      );
    }

    if (respostas.length === 0) {
      return NextResponse.json(
        { error: 'Respostas não podem estar vazias' },
        { status: 400 }
      );
    }

    // Get recommendation from Gemini
    const recommendation = await getRecommendation(categoria, respostas);

    return NextResponse.json(recommendation);
  } catch (error) {
    console.error('Error in /api/comparador/recommend:', error);

    const errorMessage =
      error instanceof Error ? error.message : 'Erro ao processar recomendação';

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
