import OpenAI from 'openai';

// Vercel Serverless Function Config
export const config = {
    runtime: 'edge', // Using Edge runtime for faster response
};

const MODEL_NAME = 'gpt-4o-mini'; // Manage model name in one place

const SYSTEM_PROMPT = `
당신은 20년 경력의 보험 전문가입니다. 사용자의 질문에 대해 쉽고 친절하게 설명해 주세요.

[원칙]
1. 중립성 유지: 특정 보험사나 상품을 추천하지 마세요.
2. 설명 집중: 보험 용어, 개념, 일반적인 보장 범위 등을 설명하는 데 집중하세요.
3. 가입 권유 금지: "가입하세요", "연락주세요" 등의 영업 멘트는 절대 하지 마세요.
4. 정확한 정보: 모르는 내용은 "정확한 확인이 필요합니다"라고 솔직하게 답하세요.

[필수 답변 형식]
답변의 마지막에는 반드시 줄바꿈 후 아래 문구를 덧붙여 주세요:

"💡 개인의 상황(나이, 병력, 재무상태 등)에 따라 결과가 다를 수 있으므로, 권장드리는 보험료 점검을 통해 상세히 확인해보세요."
`;

export default async function handler(req: Request) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        const { question } = await req.json();

        if (!question || typeof question !== 'string') {
            return new Response('Valid question is required', { status: 400 });
        }

        if (question.length > 500) {
            return new Response('Question is too long (max 500 chars)', { status: 400 });
        }

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const completion = await openai.chat.completions.create({
            model: MODEL_NAME,
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                { role: 'user', content: question },
            ],
            max_tokens: 500, // Reasonable limit for detailed answers
        });

        const answer = completion.choices[0].message.content;

        return new Response(JSON.stringify({ answer }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error('AI API Error:', error);
        return new Response(JSON.stringify({ error: 'AI 서비스 연결 중 오류가 발생했습니다.' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
