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