"use client";
import Image from 'next/image';
import { Activity } from '@/types';
import { motion } from 'framer-motion';

const activities: Activity[] = [
    {
        id: "hackathon-egh",
        title: "EGHハッカソン出場",
        period: "2025年9月",
        description: "教育×テクノロジーをテーマにしたハッカソンに参加。ChemiLensプロジェクトで本戦出場を果たし、化学を日常に落とし込むWebアプリを開発しました。",
        url: "https://demo-project-delta-henna.vercel.app/",
        type: "work",
        image: "/images/activities/hackathon.png"
    },
    {
        id: "international-conference",
        title: "国際学会に出場",
        period: "2025年3月",
        description: "3回生の実験で認知負荷のレベルを定量化、可視化することに成功し、Augmented Humans 2025 in Abu Dhabiにてポスター発表しました。",
        url: "https://doi.org/10.1145/3745900.3746119",
        type: "research",
        image: "/images/activities/conference.jpg"
    },
];

const Activities = () => {
    return (
        <section className="bg-gray-50 py-16" id="activities">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-12 text-gray-900">
                    Activities
                </h2>
                <div className="space-y-16">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={`flex flex-col gap-6 md:gap-8 items-center ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                        >
                            {activity.image && (
                                <div className="w-full md:flex-1">
                                    <div className="relative w-full h-48 md:h-80">
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover rounded-lg"
                                            loading={index === 0 ? "eager" : "lazy"}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="w-full md:flex-1 space-y-3">
                                <h3 className="text-2xl font-bold text-gray-900">{activity.title}</h3>
                                <p className="text-sm text-gray-600">{activity.period}</p>
                                <p className="text-gray-700">{activity.description}</p>
                                {activity.url && (
                                    <a
                                        href={activity.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                                    >
                                        詳細を見る
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;