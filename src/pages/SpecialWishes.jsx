import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.jpg";
import fotoHeart from "../assets/images/fotoHeart.jpg"; // ✅ tambahkan import foto

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
aku harap kamu makin seneng kuliah di umj, makin semangat ngejalanin hari hari disana, dan semoga kamu selalu dikelilingi orang orang baik yang bikin kamu nyaman, aku doa in semua urusan kamu dimudahin, entah itu tugas, dosen, atau hal hal kecil yang kadang bikin pusing, semoga kamu bisa lewatin semuanya dengan hati yang ringan, tapi satu hal yang paling aku harap, jangan pernah kamu ngerasa harus nanggung semua sendiri, kalo ada masalah, jangan dipendem yaa, aku pengen kamu inget kalo kamu punya aku, aku mungkin ga selalu ada di samping kamu secara langsung, tapi aku selalu ada buat dengerin kamu, buat nenangin kamu, bahkan cuma buat bikin kamu inget kalo kamu ga pernah sendirian, aku sayang sama kamu, dan aku bener bener tulus pengen liat kamu bahagia, apapun kondisinya, semoga setiap langkah yang kamu ambil selalu diberkahi, setiap doa kamu pelan pelan dikabulin, dan kamu terus nemuin alasan buat senyum, meski lagi capek sekalipun, aku cuma mau jadi orang yang kamu inget waktu kamu lagi ngerasa berat, biar kamu tau, kamu ga harus kuat sendirian, jadi, apapun yang kamu jalanin nanti, jangan lupa kalo aku selalu ada di sini buat kamu, aku ga janji bisa nyelesain semua masalah kamu, tapi aku janji ga akan pernah ninggalin kamu ngadepin semuanya sendirian, aku sayang kamu, lebih dari yang bisa aku tunjukin dengan kata kata, semoga kamu selalu bahagia, karena selama kamu bahagia, aku juga ikut bahagia 🤍✨

  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

        <div className="mb-8">
          <img
            src={vidioWishes}
            alt="Birthday Wishes"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          />
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan Cintaku" : "Lihat Cintaku"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-50 p-4"
            >
              <motion.div
                className="relative text-pink-500 mb-6"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  audrey mudita karuna juhanda 💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  Hanya kamu di hatiku, sayang 🥹
                </div>
              </motion.div>

              {/* ✅ Tambahkan foto di sini */}
              <motion.img
                src={fotoHeart}
                alt="Kenangan Spesial"
                className="w-64 h-64 object-cover rounded-xl shadow-lg border-4 border-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
