
export const config = {
    runtime: 'edge',
};

const posts: { id: string; title: string; content: string; createdAt: string }[] = [];

export default async function handler(req: Request) {
    if (req.method === 'GET') {
        return new Response(JSON.stringify(posts), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    if (req.method === 'POST') {
        try {
            const body = await req.json();
            const { title, content } = body;

            const newPost = {
                id: Date.now().toString(),
                title: title || 'No Title', // Fallback to avoid breaking
                content: content || '',
                createdAt: new Date().toISOString(),
            };

            posts.unshift(newPost);

            return new Response(JSON.stringify(newPost), {
                status: 201,
                headers: { 'Content-Type': 'application/json' },
            });
        } catch (e) {
            return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }

    return new Response('Method Not Allowed', { status: 405 });
}
