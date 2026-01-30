import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import travelImg from "../../../assets/istanbul2.jpg";

const Zapros = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const SendMessage = async (e) => {
    e.preventDefault();

    if (!name || !lastname || !phone) {
      alert(t("zapros.alertFill"));
      return;
    }

    setLoading(true);

    const token = "7945664430:AAFL7TIsL_ZjGEG-W3knv26wtHpXGMHn1bk";
    const chatId = 6318746325;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const text = `
🆕 ${t("zapros.telegramTitle")}

👤 ${t("zapros.name")}: ${name}
👤 ${t("zapros.lastname")}: ${lastname}
📞 ${t("zapros.phone")}: ${phone}

📝 ${t("zapros.commentLabel")}:
${comment || t("zapros.noComment")}
    `;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text,
      });

      alert(t("zapros.alertSuccess"));
      setName("");
      setLastname("");
      setPhone("");
      setComment("");
    } catch (error) {
      alert(t("zapros.alertError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100 px-4 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT: IMAGE + COMMENT */}
        <div className="p-8 bg-blue-50 flex flex-col items-center">
          <img
            src={travelImg}
            alt="Travel"
            className="w-full max-w-sm mb-6"
          />

          <label className="w-full text-left text-gray-700 font-medium mb-2">
            {t("zapros.commentLabel")}
          </label>

          <textarea
            rows="4"
            placeholder={t("zapros.commentPlaceholder")}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-4 border rounded-xl resize-none
                       focus:outline-none focus:ring-2
                       focus:ring-blue-500 transition"
          />
        </div>

        {/* RIGHT: FORM */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-2">
            {t("zapros.title")}
          </h2>

          <p className="text-gray-500 mb-6">
            {t("zapros.subtitle")}
          </p>

          <form onSubmit={SendMessage} className="space-y-4">
            <input
              type="text"
              placeholder={t("zapros.name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg
                         focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <input
              type="text"
              placeholder={t("zapros.lastname")}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg
                         focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <input
              type="tel"
              placeholder={t("zapros.phone")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg
                         focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 rounded-lg
                         font-semibold hover:bg-blue-600 transition
                         disabled:opacity-60"
            >
              {loading ? t("zapros.loading") : t("zapros.button")}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Zapros;
