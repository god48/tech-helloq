"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3"
          alt="Tech background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }} // 初期状態: 少しズームイン
          animate={{ scale: 1 }} // アニメーション後: ズームアウト
          transition={{ duration: 5, ease: "easeOut" }} // アニメーションの時間
        />
        <motion.div
          className="absolute inset-0 bg-black opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>

      {/* テキストとボタン */}
      <motion.div
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: 50 }} // 初期状態: 下からスライド
        animate={{ opacity: 1, y: 0 }} // アニメーション後: 元の位置
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-7xl font-bold mb-8 leading-tight"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          TECH INNOVATION
        </motion.h1>
        <motion.p
          className="text-xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          世界をテクノロジーでつなぐ
        </motion.p>
        <motion.div
          className="text-6xl font-bold"
          animate={{ y: [0, 20, 0] }} // 上下にバウンスするアニメーション
          transition={{
            duration: 1.5,
            repeat: Infinity, // 無限ループ
            repeatType: "loop",
          }}
        >
          <ChevronDown className="mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
