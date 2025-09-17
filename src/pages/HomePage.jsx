import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ConfettiBackground from "../components/ConfettiBackground";
import FloatingHearts from "../components/FloatingHearts";
import heartImage from "../assets/images/heart-animation.jpg"; // ganti file jadi gambar

const HomePage = ({ isIOS }) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ConfettiBackground />
      <FloatingHearts />

      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-lg text-pink-600 pt-4">Untuk yang tersayang</p>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 via-pink-400 to-purple-500 text-transparent bg-clip-text drop-shadow-md">
            audrey mudita karuna juhanda
          </h1>
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="mb-8"
        >
          <div className="w-64 h-64 mx-auto rounded-full border-4 border-pink-300 shadow-lg overflow-hidden">
            <img
              src={heartImage}
              alt="Heart Animation"
              className="w-full h-full object-cover"
              style={{ transform: "translateZ(0)" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-pink-600">
            Selamat Ulang Tahun Sayang!
          </h2>
          <p className="text-xl text-pink-600">🎉 20 september 2025 🎉</p>

          <div className="mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-lg max-w-md mx-auto border border-pink-200">
            <p className="text-pink-800 italic">
              "happy birthday cantikkk 🎂✨ semoga di umur baru ini kamu makin sehat, makin cantik (meskipun jujur dari awal kamu udah cantik sih), makin bahagia, dan makin nemuin banyak hal hal seru yang bikin kamu senyum tiap bangun tidur, aku bener bener seneng bisa kenal sama kamu, awalnya aku kira kita cuma kenal biasa aja, eh ternyata malah jadi orang yang bisa bikin aku betah ngobrol lama lama tanpa bosen. aku harap di umur baru ini, kamu selalu dikelilingi orang orang baik yang bikin kamu nyaman, tapi jangan lupa ada aku juga yaa yang pelan pelan pengen jadi bagian dari hari hari kamu, rasanya tiap ngobrol sama kamu tuh kaya lagi dapet hadiah gratis dari semesta, bisa bikin aku senyum senyum sendiri padahal gaada orang lain yang tau, kamu itu unik banget, nyebelin ada, gemes ada, tapi semua campuran itu justru bikin aku makin ga bisa berhenti kagum sama kamu 🤍 semoga semua mimpi kamu satu per satu bisa jadi kenyataan, aku percaya kamu pantas banget dapetin hal hal baik, dan kalo suatu hari nanti kamu capek atau ngerasa sendirian, jangan lupa kalau kamu punya aku yang selalu siap dengerin cerita kamu, nemenin kamu, bahkan cuma buat bikin kamu ketawa receh aja biar mood kamu balik lagi. jadi sekali lagi, happy birthday sayangg, semoga ini jadi awal dari banyak cerita indah yang bakal kamu lewatin, aku berharap semesta terus baik sama kamu, dan… kalo boleh jujur, aku juga pengen jadi salah satu alasan kamu bahagia ke depannya 🤍
"
            </p>
            <p className="mt-4 text-right text-pink-600 font-medium">
              - jarcoks
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/gift")}
            className="relative overflow-hidden bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg text-xl font-bold"
          >
            <span className="button-text flex items-center">
              <span className="mr-2">🎁</span>
              Buka Hadiah Spesial
              <span className="ml-2">🎁</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
