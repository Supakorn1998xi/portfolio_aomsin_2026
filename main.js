const items = document.querySelectorAll(".tl-item");

const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting){
                e.target.classList.add("is-in");
                io.unobserve(e.target);
            }
        });
    },
    { threshold: 0.15 }
);

items.forEach((el) => io.observe(el));

/*panell*/
document.addEventListener("DOMContentLoaded", () => {
  const data = {
    sql: {
      title: "SQL",
      desc: "ทักษะการใช้ภาษา SQL สำหรับงานวิเคราะห์ข้อมูล",
      bullets: [
        "เขียนคำสั่ง SQL เพื่อดึง กรอง และสรุปข้อมูลด้วย SELECT, WHERE, GROUP BY, HAVING",
        "เชื่อมโยงข้อมูลจากหลายตารางด้วย JOIN พร้อมใช้งาน Subquery และ CTE",
        "มีประสบการณ์ใช้งาน MySQL, MariaDB และ Google BigQuery สำหรับงานวิเคราะห์และจัดทำรายงาน",
      ],
    },
    powerbi: {
      title: "Power BI",
      desc: "ทักษะการใช้ Power BI สำหรับงานวิเคราะห์และแสดงผลข้อมูล",
      bullets: [
        "ออกแบบและพัฒนา Dashboard เชิงวิเคราะห์ด้วย Power BI พร้อมรองรับผู้ใช้งานระดับผู้บริหาร",
        "ใช้งาน DAX, Power Query และ Data Model เพื่อคำนวณ แปลง และจัดโครงสร้างข้อมูลอย่างมีประสิทธิภาพ",
        "เชื่อมต่อข้อมูลจากหลายแหล่ง เช่น MySQL, Google BigQuery ทั้งแบบ Import และ Direct Query",
      ],
    },
    looker: {
      title: "Looker Studio",
      desc: "ทักษะการใช้ Looker Studio สำหรับการวิเคราะห์และนำเสนอข้อมูล",
      bullets: [
        "ออกแบบและพัฒนา Dashboard แบบ Interactive เพื่อสื่อสารข้อมูลเชิงธุรกิจ",
        "เชื่อมต่อข้อมูลจาก Google BigQuery และแหล่งอื่น ๆ พร้อมเขียน Custom Query",
        "ใช้งาน Parameter ร่วมกับ SQL Query ใน BigQuery เพื่อควบคุมเงื่อนไขการดึงข้อมูลแบบ Dynamic ตามผู้ใช้งาน",
      ],
    },
    bigquery: {
      title: "BigQuery",
      desc: "ทักษะการใช้ Google BigQuery สำหรับการจัดการและวิเคราะห์ข้อมูล",
      bullets: [
        "เขียน SQL เพื่อดึง วิเคราะห์ และสรุปข้อมูลปริมาณมากบน BigQuery อย่างมีประสิทธิภาพ",
        "สร้าง tables/views สำหรับ analyออกแบบและใช้งาน View, CTE และ Subquery เพื่อรองรับงานวิเคราะห์และ BI",
        "เชื่อมต่อ BigQuery กับเครื่องมือ BI เช่น Power BI และ Looker Studio เพื่อสร้างรายงานเชิงธุรกิจ",
      ],
    },
    python: {
      title: "Python",
      desc: "ทักษะการใช้ภาษา Python สำหรับงานวิเคราะห์และพัฒนาแอปพลิเคชันข้อมูล",
      bullets: [
        "ทำความสะอาดและเตรียมข้อมูล (Data Cleaning & Preprocessing) ด้วย Python และ Pandas",
        "ใช้ Python พื้นฐานในการเทรนโมเดล AI/ML และทดสอบโมเดลสำหรับงานวิเคราะห์ข้อมูล",
        "พัฒนา Dashboard และ Web App ด้วย Streamlit รวมถึงสร้าง API เบื้องต้นเพื่อเชื่อมต่อและให้บริการข้อมูล",
      ],
    },
    excel: {
      title: "Excel",
      desc: "ทักษะการใช้ Microsoft Excel สำหรับงานวิเคราะห์และจัดการข้อมูล",
      bullets: [
        "วิเคราะห์และจัดการข้อมูลด้วยสูตรพื้นฐานและขั้นกลาง เช่น IF, VLOOKUP/XLOOKUP, SUMIFS",
        "ใช้งาน Pivot Table และ Pivot Chart เพื่อสรุปและวิเคราะห์ข้อมูลเชิงธุรกิจ",
        "ทำความสะอาด แปลง และรวมข้อมูลจากหลายแหล่งด้วย Power Query เพื่อเตรียมข้อมูลอย่างเป็นระบบ",
      ],
    },
    datamodel: {
      title: "HTML",
      desc: "ทักษะการใช้ภาษา HTML สำหรับพัฒนาเว็บไซต์",
      bullets: [
        "เขียนโครงสร้างเว็บไซต์ด้วย HTML5 ตามมาตรฐานเว็บ",
        "จัดโครงสร้างเนื้อหาโดยใช้ Semantic HTML เพื่อรองรับ SEO และการเข้าถึง (Accessibility)",
        "เชื่อมต่อ HTML กับ CSS และ JavaScript เพื่อพัฒนาเว็บไซต์และหน้า Dashboard แบบโต้ตอบ",
      ],
    },
    dashboard: {
      title: "CSS",
      desc: "ทักษะการใช้ภาษา CSS สำหรับออกแบบและจัดรูปแบบเว็บไซต์",
      bullets: [
        "ออกแบบและจัดรูปแบบเว็บไซต์ด้วย CSS3 ให้สวยงามและเป็นระเบียบ",
        "ใช้ Flexbox และ Grid ในการจัด Layout เพื่อรองรับ Responsive Design",
        "ปรับแต่ง UI ให้เหมาะกับ Dashboard และเว็บแอปพลิเคชันที่แสดงผลข้อมูล",
      ],
    },
    java: {
      title: "Javascript",
      desc: "ทักษะการใช้ภาษา JavaScript สำหรับพัฒนาเว็บแอปพลิเคชัน",
      bullets: [
        "เขียน JavaScript พื้นฐานเพื่อควบคุมการทำงานของหน้าเว็บและจัดการเหตุการณ์ (Events)",
        "จัดการข้อมูลและโต้ตอบกับผู้ใช้ผ่าน DOM Manipulation",
        "เชื่อมต่อและเรียกใช้งาน API เพื่อดึงและแสดงผลข้อมูลบนหน้าเว็บหรือ Dashboard",
      ],
    },
    rappid: {
      title: "Rappid Minner",
      desc: "ทักษะการใช้ RapidMiner สำหรับงานวิเคราะห์ข้อมูลและเหมืองข้อมูล",
      bullets: [
        "ใช้งาน RapidMiner ในการเตรียมข้อมูล (Data Preparation) และทำความสะอาดข้อมูล",
        "สร้างและทดสอบโมเดล Machine Learning แบบไม่ต้องเขียนโค้ด (No-Code / Low-Code)",
        "วิเคราะห์และประเมินผลโมเดลเพื่อสนับสนุนการตัดสินใจทางธุรกิจ",
      ],
    },
    quick: {
      title: "Quick Sight",
      desc: "ทักษะการใช้ Amazon QuickSight สำหรับการวิเคราะห์และแสดงผลข้อมูล",
      bullets: [
        "ออกแบบและพัฒนา Dashboard เพื่อแสดงผลข้อมูลเชิงธุรกิจบน Cloud",
        "เชื่อมต่อข้อมูลจากแหล่งต่าง ๆ เช่น Database และ Cloud Data Source เพื่อการวิเคราะห์",
        "สร้าง Visualization, Filter และ Calculation เพื่อสนับสนุนการตัดสินใจของผู้ใช้งาน",
      ],
    },
  };

  const pills = document.querySelectorAll(".skill-pill");
  const panel = document.getElementById("skillPanel");
  const titleEl = document.getElementById("skillTitle");
  const descEl = document.getElementById("skillDesc");
  const bulletsEl = document.getElementById("skillBullets");
  const closeBtn = document.getElementById("skillClose");

  let activeKey = null;

  function openPanel(key){
    const d = data[key];
    if (!d) return;

    titleEl.textContent = d.title;
    descEl.textContent = d.desc;

    bulletsEl.innerHTML = "";
    d.bullets.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t;
      bulletsEl.appendChild(li);
    });

    panel.classList.add("is-open");
  }

  function closePanel(){
    panel.classList.remove("is-open");
    activeKey = null;
    pills.forEach(p => p.classList.remove("is-active"));
  }

  pills.forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.skill;

      // toggle ถ้ากดซ้ำตัวเดิม
      if (activeKey === key && panel.classList.contains("is-open")) {
        closePanel();
        return;
      }

      activeKey = key;
      pills.forEach(p => p.classList.remove("is-active"));
      btn.classList.add("is-active");

      openPanel(key);

      // เลื่อนให้เห็น panel ชัด ๆ (optional)
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  closeBtn?.addEventListener("click", closePanel);
});

/* back to top */
(() => {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  const toggle = () => {
    const show = window.scrollY > 300;
    btn.classList.toggle("is-show", show);
  };

  window.addEventListener("scroll", toggle, { passive: true});
  toggle();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavios: "smooth" });
  });
})();

/* amout me */
// ===== About: Certificate Lightbox (reuse portfolio lightbox) =====
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("certGrid");
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCaption");

  // debug กันเงียบ
  if (!grid) { console.warn("certGrid not found"); return; }
  if (!lb || !img || !cap) { console.warn("lightbox elements not found"); return; }

  const open = (src, text) => {
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    img.src = src;
    img.alt = text || "Preview";
    cap.textContent = text || "";
    document.documentElement.style.overflow = "hidden";
  };

  const close = () => {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    img.src = "";
    img.alt = "";
    cap.textContent = "";
    document.documentElement.style.overflow = "";
  };

  grid.addEventListener("click", (e) => {
    const item = e.target.closest(".cert");
    if (!item) return;
    const src = item.dataset.img;
    const text = item.dataset.cap || "";
    if (!src) return;
    open(src, text);
  });

  grid.addEventListener("keydown", (e) => {
    const item = e.target.closest(".cert");
    if (!item) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const src = item.dataset.img;
      const text = item.dataset.cap || "";
      if (!src) return;
      open(src, text);
    }
  });

  lb.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lb.classList.contains("is-open")) close();
  });
});

/* doc model */
(function(){
  const modal = document.getElementById('docModal');
  const img  = document.getElementById('docPreview');
  const dl = document.getElementById('docDownload');

  function openModel(previewSrc, downloadSrc){
    img.src = previewSrc;
    dl.href = downloadSrc;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'
  }

  function closeModel(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    img.src = '';
    dl.removeAttribute('href');
    document.body.style.overflow = '';
  }

  //click buttom document (support mulitiper buttom)
  document.addEventListener('click', (e) =>{
    const btn = e.target.closest('.doc-btn');
    if (btn){
      const previewSrc = btn.dataset.preview;
      const downloadSrc = btn.dataset.download || previewSrc;
      openModel(previewSrc, downloadSrc);
      return;
    }

    // close model
    if (e.target.matches('[data-close]')) closeModel();
  });

  // esc close
  document.addEventListener('keydown', (e) =>{
    if (e.key === 'Escape' && model.classList.contains('is-open')) closeModel();
  });
})();
