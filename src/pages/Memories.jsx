import { motion } from "framer-motion";
import { useState } from "react";
import vidioBunga from "../assets/videos/vidioBungadudu.jpg";
import fotoKenangan from "../assets/images/couple.mp4";

const Memories = ({ isIOS }) => {
  const [flowerBloom, setFlowerBloom] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full text-center"
      >
        <h1 className="text-4xl font-bold text-pink-600 mb-8">
          Kenangan Indah Kita
        </h1>

        {/* Bagian Kenangan, sebelumnya <img> → diganti video */}
        <motion.div whileHover={{ scale: isIOS ? 1 : 1.02 }} className="mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-xl shadow-2xl border-4 border-white"
            style={{ transform: "translateZ(0)" }}
          >
            <source src={fotoKenangan} type="video/mp4" />
          </video>
        </motion.div>

        {/* Card teks ucapan / terima kasih */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8 border border-pink-100"
        >
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">
            Terima Kasih
          </h2>

          <div className="text-left text-pink-800 space-y-4 leading-relaxed">
            <p>
              🤍 <strong>Terima Kasih...</strong>
            </p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              makasih banyakk yaa kamu, serius aku tuh ga nyangka bisa nemu orang
              kaya kamu, awalnya aku kira kita cuma bakal kenal biasa aja eh
              malah jadi sering ngobrol sering bercanda sampe sekarang aku
              ngerasa nyaman banget sama kamu, rasanya tuh kaya tiap hari
              dapet hadiah random dari semesta yang bikin aku senyum senyum
              sendiri tanpa sadar, makasih udah selalu bikin suasana jadi ringan
              makasih udah bikin aku berani cerita hal hal yang biasanya aku
              simpen sendiri, kamu tuh punya cara aja gitu buat bikin aku ngerasa
              aman dan dihargain aku jadi mikir kok bisa ya ada orang kaya kamu,
              dan jujur aja aku tuh sering baper sendiri gara gara kamu, kadang
              cuma hal kecil aja tapi bisa bikin hati aku hangat banget, makasih
              karena kamu udah hadir makasih karena kamu bikin aku percaya kalo
              dunia ini masih ada hal hal manis yang ga bisa dijelasin.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              aku ga tau gimana caranya ngejelasin perasaan aku sepenuhnya tapi
              intinya aku seneng banget kenal sama kamu dan aku bener bener
              bersyukur ada kamu di hidup aku, jangan bosen yaa sama aku soalnya
              aku udah banget betah deket sama kamu 🤍 aku pengen bilang juga tiap
              kali aku inget kamu aku selalu kebayang hal hal receh yang pengen
              aku lakuin bareng kamu nanti, kayak kita cari makanan random terus
              kita call sampe subuh ketawa ketawa sampe sakit perut, hal hal
              kecil itu yang buat aku ngerasa hangat.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              aku pengen jadi orang yang bisa nemenin kamu di momen sekecil itu
              sampai yang gede juga pelan pelan aja tanpa tekanan, aku janji
              bakal tetep jadi orang yang dengerin kamu tanpa ngejudge yang
              inget detil detil kecil yang kadang kamu sendiri lupa dan yang
              selalu nyari cara buat bikin kamu senyum, aku mungkin bakal kikuk
              kadang bakal salah kata juga mungkin tapi aku bakal minta maaf dan
              belajar biar gak ngulangin.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.4 }}
            >
              aku pengen kita tumbuh bareng saling ngertiin saling jaga satu sama
              lain, kalo kamu lagi bad mood atau lagi bt sama dunia kamu boleh
              banget ngeluh ke aku aku siap jadi tempat kamu curhat receh atau
              curhat berat sekalipun, kadang aku cuma pengen banget jadi alasan
              kecil kenapa kamu ngerasa lebih baik di hari itu cukup karena aku
              ada.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              aku bener bener serius sama perasaan aku ini tapi aku juga santai
              pengen jalanin semuanya natural tanpa dipaksa, makasih juga karena
              kamu udah sabar sama aku yang kadang lebay atau kepo makasih karena
              kamu masih mau dengerin ocehan aku yang panjang ini aku ngerasa
              beruntung bisa deket sama kamu dan aku harap kamu ngerasain hal yang
              sama jangan bosen ya soalnya aku udah betah banget dan pengen terus
              deket sama kamu pelan pelan tapi pasti 🤍
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.6 }}
            >
              kalo kamu juga ngerasa nyaman ayo kita lanjutin obrolan ini jalan
              bareng dan bikin banyak momen kecil yang nanti bisa kita inget
              bareng, aku tunggu kamu kapan pun kamu mau karena aku bener bener
              pengen kenal kamu lebih jauh lagi.
            </motion.p>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: isIOS ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFlowerBloom(!flowerBloom)}
          className="relative overflow-hidden bg-rose-600 text-white px-6 py-3 rounded-full shadow-lg mb-8 border border-white/30"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <span className="button-text">
            {flowerBloom ? "Tutup Bunga" : "Buka Bunga Cinta"}
          </span>
        </motion.button>

        {flowerBloom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col md:flex-row items-center justify-center gap-6 mt-8"
            style={{
              WebkitTransform: "translate3d(0,0,0)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Bagian Bunga, sebelumnya <video> → diganti img */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="rounded-xl overflow-hidden shadow-xl border-4 border-rose-200"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img
                src={vidioBunga}
                alt="Bunga Dudu"
                className="w-72 h-72 object-cover"
              />
            </motion.div>

            {/* Realistic Blooming Flower */}
            <motion.div
              initial={{ y: 200, scale: 0 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-64 h-64 overflow-visible"
              style={{
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d",
              }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-48 bg-green-600 rounded-full"></div>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full"
                  style={{
                    top: `${Math.cos((i / 5) * 2 * Math.PI) * 40 + 40}px`,
                    left: `${Math.sin((i / 5) * 2 * Math.PI) * 40 + 40}px`,
                    transform: "translateZ(0)",
                    willChange: "transform, opacity",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                />
              ))}
              <motion.div
                className="absolute w-14 h-14 bg-yellow-300 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              />
            </motion.div>
          </motion.div>
        )}

        {flowerBloom && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="text-center text-pink-600 mt-6 italic text-lg"
          >
            🌸 Bunga ini sebagai hadiah dari permintaan maafku, sayang... Tolong
            diterima ya 🥺❤️
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Memories;
