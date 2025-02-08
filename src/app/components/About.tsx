"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <motion.section
      className="py-20 bg-black text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* タイトル: 左からスライドイン */}
        <motion.h2
          className="text-4xl font-bold mb-8 text-red-500"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          ABOUT US
        </motion.h2>

        {/* テキスト: 右からスライドイン */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-6 text-lg">
            TECH INNOVATION WORLDでは新規サービスの受託開発、既存サービスの追加開発や保守運用、自社サービスの企画開発を行っております。
          </p>
          <p className="mb-8 text-lg">
            様々なニーズに合わせて、それぞれの事業フェーズ・課題に応じた支援が可能です。私たちと一緒に世界をハックするサービスを生み出しましょう。
          </p>
        </motion.div>

        {/* リンク: 中央配置、色を指定の赤に変更 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            href="/about"
            className="inline-block text-lg font-semibold text-white px-6 py-2 bg-[#0076DF] rounded-full hover:bg-[#D84343] transition-colors"
          >
            TECH IINOVATIONについて
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
