const categoryNames = {
  kerusakan: "Kerusakan",
  optimasi: "Optimasi performa",
  upgrade: "Upgrade perangkat",
  rekomendasi: "Rekomendasi beli"
};

const params = new URLSearchParams(window.location.search);
const category = params.get("category") || "kerusakan";

document.getElementById("categoryBadge").textContent =
  categoryNames[category] || "Konsultasi";

const options = document.querySelectorAll(".device-option");
const continueBtn = document.getElementById("continueBtn");
const backBtn = document.getElementById("backBtn");

let selectedDevice = "";

options.forEach((option) => {
  option.addEventListener("click", () => {
    selectedDevice = option.dataset.device;

    options.forEach((item) => {
      const selected = item === option;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });

    continueBtn.disabled = false;
  });
});

backBtn.addEventListener("click", () => {
  window.location.href = "home.html";
});

continueBtn.addEventListener("click", () => {
  if (!selectedDevice) return;

  if (selectedDevice === "phone") {
    alert("Konsultasi Hape belum didukung backend.");
    return;
  }

  const query = new URLSearchParams({
    category,
    device: selectedDevice
  });

  window.location.href = `consultation.html?${query.toString()}`;
});