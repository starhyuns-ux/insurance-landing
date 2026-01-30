import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { Bot, Send, User, Loader2, AlertCircle } from 'lucide-react';

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

export const AiAssistant: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setError(null);
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: userMessage }),
            });

            if (!response.ok) {
                throw new Error('답변을 받아오는데 실패했습니다.');
            }

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setMessages(prev => [...prev, { role: 'assistant', content: data.answer }]);
        } catch (err) {
            console.error(err);
            setError('죄송합니다. 오류가 발생하여 답변을 드릴 수 없습니다. 잠시 후 다시 시도해 주세요.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="ai-assistant" className="py-20 bg-white">
            <Container>
                <SectionTitle
                    title="보험 궁금증, AI에게 물어보세요"
                    subtitle="20년 경력 전문가 수준의 AI가 객관적이고 친절하게 설명해 드립니다."
                />

                <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[500px]">
                    {/* Chat Window */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                        {messages.length === 0 && !isLoading && (
                            <div className="text-center text-gray-400 mt-20">
                                <Bot className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                <p>궁금한 보험 용어나 개념을 물어보세요.<br />상품 추천이나 권유 없이 순수 정보만 드립니다.</p>
                                <div className="mt-6 space-y-2">
                                    <p className="text-xs bg-white/50 inline-block px-3 py-1 rounded-full border border-gray-200 cursor-pointer hover:bg-white transition-colors"
                                        onClick={() => setInput("갱신형과 비갱신형 차이가 뭐야?")}>
                                        "갱신형과 비갱신형 차이가 뭐야?"
                                    </p>
                                    <br />
                                    <p className="text-xs bg-white/50 inline-block px-3 py-1 rounded-full border border-gray-200 cursor-pointer hover:bg-white transition-colors"
                                        onClick={() => setInput("실비보험이 꼭 필요할까?")}>
                                        "실비보험이 꼭 필요할까?"
                                    </p>
                                </div>
                            </div>
                        )}

                        {messages.map((m, index) => (
                            <div key={index} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${m.role === 'user'
                                            ? 'bg-navy-600 text-white rounded-br-none'
                                            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                                        }`}
                                >
                                    <div className="flex items-center gap-2 mb-1 opacity-70 text-xs">
                                        {m.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                                        <span>{m.role === 'user' ? '나' : '보험 도우미 AI'}</span>
                                    </div>
                                    <div className="whitespace-pre-wrap">{m.content}</div>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin text-navy-600" />
                                    <span className="text-xs text-gray-500">답변을 작성 중입니다...</span>
                                </div>
                            </div>
                        )}

                        {error && (
                            <div className="flex justify-center">
                                <div className="bg-red-50 text-red-600 text-xs px-4 py-2 rounded-lg flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-2" />
                                    {error}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 flex gap-2">
                        <input
                            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy-500 bg-gray-50 focus:bg-white transition-colors"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="무엇이든 물어보세요... (500자 이내)"
                            maxLength={500}
                            disabled={isLoading}
                        />
                        <Button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="rounded-xl aspect-square px-0 w-12 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="w-5 h-5" />
                        </Button>
                    </form>
                </div>

                <p className="text-center text-xs text-gray-400 mt-6 max-w-lg mx-auto leading-normal">
                    AI의 답변은 일반적인 정보 제공을 목적으로 하며, <br className="hidden sm:block" />
                    개인의 구체적인 상황에 대한 정확한 판단은 반드시 전문가와의 상담을 통해 확인하시기 바랍니다.
                </p>
            </Container>
        </section>
    );
};
