'use client';

// Using @ai-sdk/react as confirmed in package.json
import { useChat } from '@ai-sdk/react';

// Using named export to match App.tsx
export function AiAssistant() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: '/api/chat',
    } as any) as any;

    return (
        <section className="py-16">
            <div className="mx-auto max-w-2xl space-y-4">
                <h2 className="text-2xl font-semibold">AI Assistant</h2>

                <div className="border rounded-lg p-4 h-80 overflow-y-auto space-y-3 bg-gray-50">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {messages.map((m: any) => (
                        <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                            <div className="text-xs text-gray-500 mb-1 capitalize">
                                {m.role}
                            </div>
                            <div className="inline-block px-3 py-2 rounded-lg bg-white shadow-sm max-w-[80%] text-sm">
                                {m.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && <div className="text-gray-500 text-sm">AI가 답변을 작성 중입니다...</div>}
                </div>

                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        className="flex-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="AI에게 물어보세요..."
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-medium"
                    >
                        {isLoading ? '생각중...' : '보내기'}
                    </button>
                </form>
            </div>
        </section>
    );
}
