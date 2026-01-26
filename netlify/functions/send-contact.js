export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const {
      name,
      class: studentClass,
      lessonType,
      city,
      email,
      phone,
      message,
    } = JSON.parse(event.body || "{}");

    // Minimalna walidacja po stronie backendu
    const missing = [];
    if (!name) missing.push("name");
    if (!lessonType) missing.push("lessonType");
    if (!city) missing.push("city");
    if (!email) missing.push("email");
    if (!phone) missing.push("phone");

    if (missing.length) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: `Missing: ${missing.join(", ")}` }),
      };
    }

    const API_KEY = process.env.MAILJET_API_KEY;
    const API_SECRET = process.env.MAILJET_API_SECRET;

    const MAIL_FROM = process.env.MAIL_FROM;
    const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME || "Medulia";
    const MAIL_TO = process.env.MAIL_TO;

    if (!API_KEY || !API_SECRET || !MAIL_FROM || !MAIL_TO) {
      return {
        statusCode: 500,
        body: JSON.stringify({ ok: false, error: "Server email configuration missing" }),
      };
    }

    const subject = `Medulia – formularz: ${lessonType} | ${name}`;

    const text = [
      `NOWE ZGŁOSZENIE – MEDULIA`,
      ``,
      `Imię: ${name}`,
      studentClass ? `Klasa: ${studentClass}` : null,
      `Rodzaj zajęć: ${lessonType}`,
      `Miasto: ${city}`,
      `Email: ${email}`,
      `Telefon: ${phone}`,
      ``,
      `Wiadomość:`,
      message?.trim() ? message.trim() : "(brak)",
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>Nowe zgłoszenie – Medulia</h2>
        <p><b>Imię:</b> ${escapeHtml(name)}</p>
        ${studentClass ? `<p><b>Klasa:</b> ${escapeHtml(studentClass)}</p>` : ""}
        <p><b>Rodzaj zajęć:</b> ${escapeHtml(lessonType)}</p>
        <p><b>Miasto:</b> ${escapeHtml(city)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Telefon:</b> ${escapeHtml(phone)}</p>
        <hr/>
        <p><b>Wiadomość:</b><br/>${escapeHtml(message?.trim() || "(brak)").replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

    const mjRes = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: MAIL_FROM, Name: MAIL_FROM_NAME },
            To: [{ Email: MAIL_TO }],
            ReplyTo: { Email: email, Name: name },
            Subject: subject,
            TextPart: text,
            HTMLPart: html,
          },
        ],
      }),
    });

    const mjJson = await mjRes.json().catch(() => ({}));

    if (!mjRes.ok) {
      return {
        statusCode: 502,
        body: JSON.stringify({ ok: false, error: "Mailjet send failed", details: mjJson }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: err?.message || "Unknown error" }),
    };
  }
};

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
