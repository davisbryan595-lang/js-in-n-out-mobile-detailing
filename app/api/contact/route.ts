export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let data: Record<string, string> = {};

    if (contentType.includes("application/json")) {
      data = await req.json();
    } else {
      const form = await req.formData();
      form.forEach((v, k) => (data[k] = String(v)));
    }

    console.log("Contact form submission:", {
      name: data.name || "",
      email: data.email || "",
      phone: data.phone || "",
      message: data.message || "",
      ts: new Date().toISOString(),
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
