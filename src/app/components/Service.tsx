"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Service() {
  const services = [
    {
      title: "System development",
      subtitle: "Webシステム開発サービス",
      description: "Webシステムの構築に関するコンサルティング、設計、開発、運用を行います。",
    },
    {
      title: "Application development",
      subtitle: "アプリ開発",
      description: "iOS、Androidともに高品質なアプリをスピーディーに開発致します。",
    },
    {
      title: "Own Service",
      subtitle: "自社サービスの企画、開発",
      description: "自社サービスの企画、開発も行っております。",
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* タイトル */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-red-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SERVICE
        </motion.h2>
        <motion.h3
          className="text-2xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We Make
        </motion.h3>

        {/* サービスリスト */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="border border-white rounded-full w-64 h-64 mx-auto flex items-center justify-center p-6 mb-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <h5 className="text-lg font-semibold mb-4">{service.subtitle}</h5>
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* サービスページへのリンク */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="/service"
            className="inline-block bg-[#0076DF] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-400 transition-colors"
          >
            サービス一覧を見る
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function Service() {
//   const services = [
//     {
//       title: "System development",
//       subtitle: "Webシステム開発サービス",
//       description: "Webシステムの構築に関するコンサルティング、設計、開発、運用を行います。",
//     },
//     {
//       title: "Application development",
//       subtitle: "アプリ開発",
//       description: "iOS、Androidともに高品質なアプリをスピーディーに開発致します。",
//     },
//     {
//       title: "Own Service",
//       subtitle: "自社サービスの企画、開発",
//       description: "自社サービスの企画、開発も行っております。",
//     },
//   ];

//   return (
//     <section className="py-20 bg-black text-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* タイトル */}
//         <motion.h2
//           className="text-4xl font-bold mb-12 text-red-500"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           SERVICE
//         </motion.h2>
//         <motion.h3
//           className="text-2xl font-bold mb-12 text-center"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           We Make
//         </motion.h3>

//         {/* サービスリスト */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-8"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           {services.map((service, index) => (
//             <div key={index} className="w-full md:w-1/3 text-center">
//               <div className="border border-white rounded-full w-64 h-64 mx-auto flex items-center justify-center p-6 mb-6">
//                 <div>
//                   <h4 className="text-xl font-bold mb-2">{service.title}</h4>
//                   <h5 className="text-lg font-semibold mb-4">{service.subtitle}</h5>
//                   <p className="text-sm">{service.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         {/* サービスページへのリンク */}
//         <motion.div
//           className="mt-12 text-center"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }} // サービスリストと同じタイミング
//         >
//           <Link
//             href="/service"
//             className="inline-block bg-[#EB4C4C] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#D84343] transition-colors"
//           >
//             サービス一覧を見る
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
