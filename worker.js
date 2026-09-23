export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/chat" && request.method === "POST") {
      return new Response(
        JSON.stringify({
          message: "Your AI backend is connected!"
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    return new Response("Nuvio AI API is running.");
  }
};
