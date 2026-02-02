
import React, { useState, useEffect } from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

interface Post {
    id: string;
    title: string;
    content: string;
    createdAt: string;
}

export const Board: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await fetch('/api/posts');
            if (res.ok) {
                const data = await res.json();
                setPosts(data);
            } else {
                console.error("Failed to fetch:", res.status, res.statusText);
            }
        } catch (error) {
            console.error('Failed to fetch posts', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        setIsLoading(true);
        try {
            const res = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content }),
            });

            if (res.ok) {
                setTitle('');
                setContent('');
                fetchPosts(); // Refresh list
            }
        } catch (error) {
            console.error('Failed to post', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="board" className="py-20 bg-gray-50">
            <Container>
                <SectionTitle
                    title="자유 게시판"
                    subtitle="보험에 대한 의견이나 질문을 자유롭게 남겨주세요."
                />

                <div className="max-w-2xl mx-auto space-y-8">
                    {/* Write Post */}
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                        <input
                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                            placeholder="제목을 입력하세요"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            disabled={isLoading}
                        />
                        <textarea
                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 min-h-[100px]"
                            placeholder="내용을 작성하세요..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            disabled={isLoading}
                        />
                        <div className="flex justify-end">
                            <Button type="submit" disabled={isLoading || !title.trim() || !content.trim()}>
                                {isLoading ? '등록 중...' : '글 올리기'}
                            </Button>
                        </div>
                    </form>

                    {/* Post List */}
                    <div className="space-y-4">
                        {posts.length === 0 ? (
                            <p className="text-center text-gray-400 py-10">아직 등록된 글이 없습니다.</p>
                        ) : (
                            posts.map((post) => (
                                <div key={post.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-lg text-navy-900 mb-2">{post.title}</h3>
                                    <p className="whitespace-pre-wrap text-gray-800">{post.content}</p>
                                    <p className="text-xs text-gray-400 mt-3">{new Date(post.createdAt).toLocaleString()}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};
