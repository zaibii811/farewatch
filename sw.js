// Shows device pop-ups sent by the FareWatch server (Web Push).
self.addEventListener("push", e => {
  let d = {};
  try { d = e.data.json(); } catch { d = { title: "FareWatch", body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || "FareWatch", { body: d.body || "", data: { url: d.url }, icon: "" }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  if (e.notification.data && e.notification.data.url) e.waitUntil(clients.openWindow(e.notification.data.url));
});
