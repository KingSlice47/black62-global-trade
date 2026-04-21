/**
 * Cloudflare Pages Function: POST /api/contact
 *
 * Handles the enquiry form submission. This runs at the edge on Cloudflare
 * Pages Functions (separate from the static Astro build).
 *
 * To wire up real delivery (email / webhook / KV storage), fill in the TODO
 * block below. For now it validates the payload and returns 200.
 */

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  commodity?: string;
  volume?: string;
  message?: string;
}

interface Env {
  // Add bindings here if/when email delivery is wired up, e.g.:
  // RESEND_API_KEY?: string;
  // CONTACT_KV?: KVNamespace;
}

export const onRequestPost: PagesFunction<Env> = async ({ request }) => {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const { name, company, email } = data;
  if (!name || !company || !email) {
    return json({ error: 'Missing required fields: name, company, email' }, 400);
  }

  // TODO: deliver the enquiry (e.g. Resend / MailChannels / webhook / KV write)
  // Example with MailChannels (free on Cloudflare):
  //
  // await fetch('https://api.mailchannels.net/tx/v1/send', {
  //   method: 'POST',
  //   headers: { 'content-type': 'application/json' },
  //   body: JSON.stringify({
  //     personalizations: [{ to: [{ email: 'info@black62.co.za' }] }],
  //     from: { email: 'no-reply@black62.co.za', name: 'Black62 Website' },
  //     subject: `New enquiry from ${name} (${company})`,
  //     content: [{ type: 'text/plain', value: JSON.stringify(data, null, 2) }],
  //   }),
  // });

  return json({ success: true });
};

export const onRequest: PagesFunction = async () =>
  new Response('Method not allowed', { status: 405, headers: { allow: 'POST' } });

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}
