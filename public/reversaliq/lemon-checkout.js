/* ReversalIQ Lemon Squeezy checkout adapter.
 * Insert ONLY your public shareable buy link after merchant approval.
 * NEVER put API keys, webhook signing secrets or bank details into this file.
 * Example shape: https://YOURSTORE.lemonsqueezy.com/checkout/buy/YOUR_VARIANT_ID
 */
const REVERSALIQ_LEMON_CHECKOUT_URL = "";

(function enableApprovedCheckout() {
  const button = document.querySelector('button[title="Payment link is not configured"]');
  if (!button || !REVERSALIQ_LEMON_CHECKOUT_URL) return;
  try {
    const target = new URL(REVERSALIQ_LEMON_CHECKOUT_URL);
    const official = target.hostname === "lemonsqueezy.com" || target.hostname.endsWith(".lemonsqueezy.com");
    if (target.protocol !== "https:" || !official || !target.pathname.startsWith("/checkout/buy/")) return;
    button.disabled = false;
    button.removeAttribute("title");
    button.textContent = "Subscribe with Lemon Squeezy →";
    button.addEventListener("click", () => { window.location.href = target.href; });
  } catch (_) { /* fail closed when config is missing or invalid */ }
})();