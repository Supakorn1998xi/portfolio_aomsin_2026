(() => {
  const PROJECTS = [
    {
      id: "dash-1",
      category: "dashboard",
      categoryLabel: "Dashboard",
      slides: [
        {
          img: "portfolio/dashboard_4.jpg",
          title: "Tracking Delivery - Human resources & Warehouse (OPPO)",
          badge: "Dashboard",
          desc: "Dashboard Monitor",
          bullets: [
            "รายงาน จำนวนสินค้า Sell in และ Sell out ที่เข้ามาในคลังสินค้า แบ่งตาม ช่องทาง และเปรียบเทียบรายการยืนยันแล้ว กับรายการที่กำลังดำเนินการ",
            "แสดงจำนวนสินค้าที่เข้ามาตามช่วงเวลาใน 1 วัน"
          ],
          tags: ["Power BI", "SQL", "Google Script", "Python", "API", "Dax"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
        {
          img: "portfolio/dashboard_5.jpg",
          title: "Tracking Delivery - Human resources & Warehouse (OPPO)",
          badge: "Dashboard",
          desc: "Dashboard Monitor",
          bullets: [
            "รายการจำนวนรายการสินค้าจำแนกตามตามสถานะ แบ่งตามช่องทางการขนส่ง",
            "ตารางสรุปผลการดำเนินงานของแต่ละช่องทาง และสถานะภาพรวมของการส่งสินค้าในวันนี้",
            "มีเวลาแสดงแบบ Real Time และปุ่ม Refresh ยิง API ไปดึงข้อมูลใหม่ และเวลาครั้งล่าสุดในการ Update",
            "มี Function ให้สามารถ User ดึงข้อมูลไม่ชนกัน เมื่ออีกคนดึงอยู่ อีกคนจะดึงไม่ได้ จนกว่าคนแรกจะดึงเสร็จ"
          ],
          tags: ["Power BI", "SQL", "Google Script", "Python", "API", "Dax"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
        {
          img: "portfolio/dashboard_1.jpg",
          title: "Lost Item Project - Finance & Ecommerce (OPPO)",
          badge: "Dashboard",
          desc: "รายงาน รายการสถานะสินค้าที่ขายใน Platform Online",
          bullets: [
            "Card bar สรุปจำนวนรายกาสินค้า และจำนวนเงินภาพรวมของแต่ละ Table ที่มีการนำมาเปรียบเทียบ และยอดคงเหลือจากการตรวจสอบแล้ว",
            "นำเสนอจำนวนรายการสินค้าแยกตาม ช่องทาง Online และจำแนกผ่านทางสถานะ Clear / Not Clear",
            "กราฟแสดงจำนวนรายการสินค้าแบ่งตามช่องทาง Online ที่ Not Clear ว่าเป็นเวลากี่วันแล้วที่ยังดำเนินการไม่แล้วเสร็จ"
          ],
          tags: ["Power BI", "SQL", "Excel", "Power Query", "Dax"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
        {
          img: "portfolio/dashboard_2.jpg",
          title: "Lost Item Project - Finance & Ecommerce (OPPO)",
          badge: "Dashboard",
          desc: "รายงาน รายการสถานะสินค้าที่ขายใน Platform Online",
          bullets: [
            "แนวโน้มจำนวนรายการสินค้า จำแนกตามประเภท การขนส่ง ชำระเงิน Online / เก็บเงินปลายทาง",
            "ตารางแสดง จำนวนสินค้าแบ่งตามประเภทสินค้า จำแนกตามประเภทการขนส่ง",
            "ช่องทาง Other มีการแบ่ง Sub ให้เลือกได้"
          ],
          tags: ["Power BI", "SQL", "Excel", "Power Query", "Dax"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
        {
          img: "portfolio/dashboard_3.jpg",
          title: "Lost Item Project - Finance & Ecommerce (OPPO)",
          badge: "Dashboard",
          desc: "รายงาน รายการสถานะสินค้าที่ขายใน Platform Online",
          bullets: [
            "ตารางแสดงรายการสินค้า แบ่งเป็นประเภทของ Table ข้อมูล และผลรวมจากการนำมาเปรียบเทียบกันแล้ว",
            "ปุ่มที่สามารถกดเข้าไปดู Detail ของข้อมูลในแต่ละ Table ได้",
            "ปุ่ม Export เป็น Excel สามารถนำไปตรวจสอบ และวิเคราะห์ข้อมูลต่อได้"
          ],
          tags: ["Power BI", "SQL", "Excel", "Power Query", "Dax"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        }
      ]
    },
    {
      id: "web-1",
      category: "webapp",
      categoryLabel: "Web App",
      slides: [
        {
          img: "portfolio/web_1.png",
          title: "Contract Tracker — Login",
          badge: "Web App",
          desc: "หน้า Login + Permission ตาม Role",
          bullets: ["RBAC", "Session/JWT", "ป้องกันเข้าหน้าโดยตรง"],
          tags: ["Laravel", "MySQL"],
          links: [{ label: "Repo", href: "#", icon: "💻" }]
        },
        {
          img: "portfolio/web_2.png",
          title: "Contract Tracker — Dashboard",
          badge: "Web App",
          desc: "สรุปสถานะเอกสาร + ค้นหา/กรอง",
          bullets: ["Filter สถานะ/วันที่", "Audit log", "แจ้งเตือนสถานะค้าง"],
          tags: ["Laravel", "UI"],
          links: [{ label: "Demo", href: "#", icon: "▶" }]
        }
      ]
    }
  ];

  // Utility function
  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // Elements
  const track = document.getElementById("portTrack");
  const dots = document.getElementById("portDots");
  const viewport = document.querySelector(".port-viewport");
  const prevBtn = document.querySelector(".port-nav.prev");
  const nextBtn = document.querySelector(".port-nav.next");

  const slideTitle = document.getElementById("slideTitle");
  const slideBadge = document.getElementById("slideBadge");
  const slideDesc = document.getElementById("slideDesc");
  const slideBullets = document.getElementById("slideBullets");
  const slideTags = document.getElementById("slideTags");
  const slideActions = document.getElementById("slideActions");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");

  if (!track || !dots || !viewport || !prevBtn || !nextBtn) return;

  // Flatten slides
  function flatten(list) {
    const out = [];
    list.forEach(p => {
      p.slides.forEach((s, idx) => {
        out.push({
          key: `${p.id}-${idx}`,
          category: p.category,
          projectLabel: p.categoryLabel,
          ...s
        });
      });
    });
    return out;
  }

  let allSlides = flatten(PROJECTS);
  let filteredSlides = allSlides.slice();
  let currentIndex = 0;

  // Lightbox functions
  function openLightbox(slide) {
    if (!lightbox || !lightboxImg) {
      console.error("Lightbox elements not found!");
      return;
    }
    
    console.log("Lightbox found, showing image:", slide.img);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.style.display = "flex"; // เพิ่มบรรทัดนี้
    lightboxImg.src = slide.img;
    lightboxImg.alt = slide.title || "Preview";
    if (lightboxCaption) lightboxCaption.textContent = slide.title || "";
    document.documentElement.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.style.display = "none"; // เพิ่มบรรทัดนี้
    lightboxImg.src = "";
    if (lightboxCaption) lightboxCaption.textContent = "";
    document.documentElement.style.overflow = "";
  }

  function renderSlides() {
    if (filteredSlides.length === 0) {
      track.innerHTML = `<div class="port-slide"><div style="padding:24px">ยังไม่มีรายการในหมวดนี้</div></div>`;
      dots.innerHTML = "";
      setDetail(null);
      prevBtn.style.visibility = "hidden";
      nextBtn.style.visibility = "hidden";
      return;
    }

    track.innerHTML = filteredSlides.map((s, i) => `
      <div class="port-slide">
        <img src="${s.img}" alt="${escapeHtml(s.title)}">
        <button class="port-zoom" type="button" aria-label="Expand image" data-zoom="${i}">
          ⤢
        </button>
      </div>
    `).join("");

    dots.innerHTML = filteredSlides.map((_, i) => `
      <button class="port-dot ${i === 0 ? "is-active" : ""}" type="button" data-dot="${i}" aria-label="Go to slide ${i + 1}"></button>
    `).join("");

    dots.querySelectorAll(".port-dot").forEach(btn => {
      btn.onclick = () => {
        currentIndex = Number(btn.dataset.dot);
        update();
      };
    });

    prevBtn.style.visibility = filteredSlides.length <= 1 ? "hidden" : "visible";
    nextBtn.style.visibility = filteredSlides.length <= 1 ? "hidden" : "visible";

    currentIndex = 0;
    update();
  }

  function setDetail(slide) {
    if (!slide) {
      slideTitle.textContent = "—";
      slideBadge.textContent = "—";
      slideDesc.textContent = "—";
      slideBullets.innerHTML = "";
      slideTags.innerHTML = "";
      slideActions.innerHTML = "";
      return;
    }

    slideTitle.textContent = slide.title || "—";
    slideBadge.textContent = slide.badge || slide.projectLabel || "—";
    slideDesc.textContent = slide.desc || "";

    slideBullets.innerHTML = (slide.bullets || []).map(b => `<li>${escapeHtml(b)}</li>`).join("");
    slideTags.innerHTML = (slide.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    slideActions.innerHTML = (slide.links || [])
      .map(l => `<a href="${l.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.icon || "↗")} ${escapeHtml(l.label)}</a>`)
      .join("");
  }

  function update() {
    const total = filteredSlides.length;
    if (total === 0) return;

    currentIndex = (currentIndex + total) % total;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.querySelectorAll(".port-dot").forEach((d, i) => {
      d.classList.toggle("is-active", i === currentIndex);
    });

    setDetail(filteredSlides[currentIndex]);
  }

  // Navigation controls
  prevBtn.addEventListener("click", () => { 
    currentIndex -= 1; 
    update(); 
  });
  
  nextBtn.addEventListener("click", () => { 
    currentIndex += 1; 
    update(); 
  });

  viewport.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });

  // Touch swipe support
  let startX = null;
  viewport.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  viewport.addEventListener("touchend", (e) => {
    if (startX == null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) < 35) return;
    dx > 0 ? prevBtn.click() : nextBtn.click();
  });

  // Tab filters
  document.querySelectorAll(".port-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;

      document.querySelectorAll(".port-tab").forEach(t => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });

      filteredSlides = (filter === "all")
        ? allSlides.slice()
        : allSlides.filter(s => s.category === filter);

      renderSlides();
    });
  });

  // Lightbox event handlers
  track.addEventListener("click", (e) => {
    const btn = e.target.closest(".port-zoom");
    if (!btn) return;

    const idx = Number(btn.dataset.zoom);
    const slide = filteredSlides[idx];
    if (!slide) return;

    console.log("Opening lightbox for:", slide.title); // debug
    openLightbox(slide);
  });

  lightbox?.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]") || e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox?.classList.contains("is-open")) {
      closeLightbox();
    }
  });

  // Initialize
  renderSlides();
})();