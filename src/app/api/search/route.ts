import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

interface SearchResult {
  title: string
  url: string
  snippet: string
  rank: number
}

interface SearchResponse {
  results: SearchResult[]
  query: string
  total: number
}

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()
    
    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return NextResponse.json(
        { error: 'Invalid search query' },
        { status: 400 }
      )
    }

    // Initialize ZAI client
    const zai = await ZAI.create()

    // Perform web search using z-ai-web-dev-sdk
    const searchResult = await zai.functions.invoke("web_search", {
      query: query.trim(),
      num: 10 // Limit to 10 results for performance
    })

    // Transform the search results to match our frontend expectations
    const results: SearchResult[] = searchResult.map((item: any, index: number) => ({
      title: item.name || item.title || `Result ${index + 1}`,
      url: item.url,
      snippet: item.snippet || 'No description available',
      rank: index + 1
    }))

    const response: SearchResponse = {
      results,
      query: query.trim(),
      total: results.length
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Search API error:', error)
    
    // Return fallback results if the search fails
    const fallbackResults: SearchResult[] = [
      {
        title: 'Search Service Unavailable',
        url: '#',
        snippet: 'The search service is currently unavailable. Please try again later.',
        rank: 1
      }
    ]

    const response: SearchResponse = {
      results: fallbackResults,
      query: '',
      total: 1
    }

    return NextResponse.json(response, { status: 500 })
  }
}