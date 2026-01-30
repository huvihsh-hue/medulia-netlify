export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { email } = JSON.parse(event.body || "{}");

    if (!email || !isValidEmail(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: "Invalid email" }),
      };
    }

    const API_KEY = process.env.MAILJET_API_KEY;
    const API_SECRET = process.env.MAILJET_API_SECRET;

    if (!API_KEY || !API_SECRET) {
      return {
        statusCode: 500,
        body: JSON.stringify({ ok: false, error: "Server Mailjet credentials missing" }),
      };
    }

    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

    // Opcjonalnie: lista newsletterowa w Mailjet (Contacts list ID)
    // Ustaw w Netlify ENV: MAILJET_NEWSLETTER_LIST_ID
    const LIST_ID = process.env.MAILJET_NEWSLETTER_LIST_ID;

    if (LIST_ID) {
      // Zapis do listy kontaktów
      const mjRes = await fetch(
        `https://api.mailjet.com/v3/REST/contactslist/${encodeURIComponent(
          LIST_ID
        )}/managecontact`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Email: email,
            Action: "addnoforce", // nie usuwa z "unsub", ale dodaje jeśli można
          }),
        }
      );

      const mjJson = await mjRes.json().catch(() => ({}));

      if (!mjRes.ok) {
        return {
          statusCode: 502,
          body: JSON.stringify({
            ok: false,
            error: "Mailjet subscribe failed",
            details: mjJson,
          }),
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify({ ok: true, mode: "list" }),
      };
    }

    // Fallback: jeśli nie masz LIST_ID, to chociaż wyślij maila do siebie,
    // żeby było widać, że zapis działa.
    const MAIL_FROM = process.env.MAIL_FROM;
    const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME || "Medulia";
    const MAIL_TO = process.env.MAIL_TO;

    if (!MAIL_FROM || !MAIL_TO) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          ok: false,
          error:
            "Missing MAILJET_NEWSLETTER_LIST_ID and fallback email config (MAIL_FROM/MAIL_TO).",
        }),
      };
    }

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
            Subject: "Medulia – nowy zapis do newslettera",
            TextPart: `Nowy zapis do newslettera: ${email}`,
            HTMLPart: `<p><b>Nowy zapis do newslettera:</b> ${escapeHtml(email)}</p>`,
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
      body: JSON.stringify({ ok: true, mode: "fallback-email" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: err?.message || "Unknown error" }),
    };
  }
};

function isValidEmail(email) {
  const e = String(email || "").trim();
  // prosta walidacja - wystarczy na front/back
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
}

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
