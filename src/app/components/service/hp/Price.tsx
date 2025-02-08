"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const hpPlans = [
  {
    category: "LP",
    items: [
      { title: "デザイン", description: "サイトデザイン制作", price: "¥15,000~" },
      { title: "コーディング", description: "サイト制作・開発", price: "¥100,000~" },
      { title: "メンテナンス", description: "サイト更新・運用", price: "¥15,000~/月" },
    ],
  },
  {
    category: "ハイエンド",
    items: [
      { title: "デザイン", description: "サイトデザイン制作", price: "¥30,000~" },
      { title: "コーディング", description: "サイト制作・開発", price: "¥250,000~" },
      { title: "メンテナンス", description: "サイト更新・運用", price: "¥25,000~/月" },
    ],
  },
  {
    category: "プレミアム",
    items: [
      { title: "デザイン", description: "サイトデザイン制作", price: "¥30,000~" },
      { title: "コーディング", description: "サイト制作・開発", price: "¥150,000~" },
      { title: "メンテナンス", description: "サイト更新・運用", price: "¥20,000~/月" },
    ],
  },
];

export default function HpPrice() {
  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">3つのプラン</h2>

        {/* カテゴリー選択 */}
        <div className="flex justify-center gap-8 mb-12">
          {hpPlans.map((plan, index) => (
            <button
              key={index}
              className={`text-lg font-semibold pb-2 border-b-2 transition-all ${
                selectedPlan === index ? "text-red-500 border-red-500" : "text-white border-transparent"
              }`}
              onClick={() => setSelectedPlan(index)}
            >
              {plan.category}
            </button>
          ))}
        </div>

        {/* 価格リスト */}
        <motion.div
          key={selectedPlan}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {hpPlans[selectedPlan].items.map((item, index) => (
            <div key={index} className="bg-black shadow-lg rounded-lg p-6 border">
              <h3 className="text-xl font-bold">{item.title}</h3>
              {/* <p className="text-gray-600">{item.description}</p> */}
              <p className="text-white opacity-80">{item.description}</p>
              <p className="text-lg font-semibold mt-4">{item.price}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
