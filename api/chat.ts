
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const config = {
    runtime: 'edge',
};

const SYSTEM_PROMPT = `
당신은 20년 경력의 보험 전문가입니다. 
친절하고 객관적으로 답변하며, 영업 멘트는 금지합니다.
마지막에 항상 조언 문구를 덧붙이세요.
`;

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        const { messages } = await req.json();

        const result = streamText({
            model: openai('gpt-4o-mini'),
            system: SYSTEM_PROMPT,
            messages,
        });

        // Use toDataStreamResponse for latest Vercel AI SDK compatibility
        return result.toDataStreamResponse();
    } catch (err) {
        console.error('Chat route error:', err);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
