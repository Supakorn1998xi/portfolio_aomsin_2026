(() => {
  // ===== DATA (แก้ชื่อบริษัท/โปรเจกต์/รูปได้ตรงนี้) =====
  // รูปอยู่ใน folder: portfolio/
  const DATA = [
    {
      companyId: "possefy",
      companyName: "Possefy Group Company (OPPO Thailand)",
      /*companyNote: "BI / Dashboard / Reporting / Data Model"*/
      projects: [
        {
          projectId: "sales-dashboard",
          projectName: "Tracking Delivery Dashbaord",
          projectNote: "Power BI /" + " SQL /" + " Google Script /" + " Python /" + " API /" + " Dax ",
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
          ]
        },
        {
          projectId: "lost-item",
          projectName: "Lost Item Project Dashboard",
          projectNote: "Power BI /" + " SQL /" + " Excel /" + " Power Query /" + " Dax ",
          slides: [
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
           projectId: "grand-channel",
          projectName: "Grand Channel Dashboard",
          projectNote: "Power BI /" + " SQL /" + " Excel /"+ " Bigquery /" + " Web Dashboard " ,
          slides: [
            {
              img: "portfolio/Grand_Channel-1.png",
              title: "Grand Channel Dashboaed - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน ยอดขายแบ่งตาม Channel และ Area ของแผนก Grand Channel",
              bullets: [
                "กราฟแสดงการเปรียบเทียบยอดขาย MOM ของ Brand โทรศัพท์ภายในร้าน",
                "ตารางสรุปยอดขายในแต่ละ Brand แบ่งตามร้าน และจังหวัก ตามช่วงเวลาการเปรียบเทียบ",
                "กราฟประเทศไทย แสดงจำนวนความหนาแน่น ของยอดขายในแต่ละจังหวัด",
                "ตารางแสดงข้อมูลยอดขายตามจังหวัด และยอดการเปรียบเทียบ MOM และ %Share "
          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
        {
              img: "portfolio/Grand_Channel-2.png",
              title: "Grand Channel Dashboaed - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน ยอดขายแบ่งตาม Channel และ Area ของแผนก Grand Channel",
              bullets: [
                "Pie Chart แสดงสัดส่วนจำนวนยอดขายส่วนต่างแบ่งตามร้านค้า",
                "ตารางแสดงข้อมูลห้างที่มีการตั้งร้านค้า และจังหวัด และจำนวนยอดขายเปรียบเทียบ MOM และ %Share",
                "กราฟแท่งแสดงยอดขายแบ่งตามช่องทาง เปรียบเทียบยอดขาย MOM",
                "ตารางแสดงข้อมูลช่องทางการขาย แบ่งตามแผนกช่องทาง และยอดขายเปรียบเทียบ MOM"
          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
         {
              img: "portfolio/Grand_Channel-4.jpg",
              title: "Grand Channel Dashboaed - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน ยอดขายแบ่งตาม Channel และ Area ของแผนก Grand Channel",
              bullets: [
                "Tred Line แสดงข้อมูลการเปรียบ MOM แบ่งตามร้านค้า",
                "ตารางแสดงข้อมูลห้างที่มีการตั้งร้านค้า และจังหวัด และจำนวนยอดขายเปรียบเทียบ MOM และ %Share",
                "กราฟแท่งแสดงยอดขายแบ่งตามช่องทาง เปรียบเทียบยอดขาย MOM",
                "ตารางแสดงข้อมูลช่องทางการขาย แบ่งตามแผนกช่องทาง และยอดขายเปรียบเทียบ MOM"
          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
         {
              img: "portfolio/Grand_Channel-5.jpg",
              title: "Grand Channel Dashboaed - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน ยอดขายแบ่งตาม Channel และ Area ของแผนก Grand Channel",
              bullets: [
                "กราฟแท่ง แสดงข้อมูลการเปรียบ MOM แบ่งตามร้านค้า",
                "ตารางแสดงข้อมูลห้างที่มีการตั้งร้านค้า และจังหวัด และจำนวนยอดขายเปรียบเทียบ MOM และ %Share",
                "กราฟแท่งแสดงยอดขายแบ่งตามช่องทาง เปรียบเทียบยอดขาย MOM",
                "ตารางแสดงข้อมูลช่องทางการขาย แบ่งตามแผนกช่องทาง และยอดขายเปรียบเทียบ MOM"
          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
         {
              img: "portfolio/Grand_Channel-3.png",
              title: "Grand Channel Dashboaed - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน ยอดขายแบ่งตาม Channel และ Area ของแผนก Grand Channel",
              bullets: [
                "กราฟแท่งแสดงยอดขายเปรียบเทียบ MOM แบ่งตาม Model ของแต่ละ Brand",
                "ตารางแสดงข้อมูล Model และ Brand สรุปแบ่งเป็นยอดขาย แบ่งตามช่วง และยอดเปรียบเทียบ MOM , %Share"
          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        }
      ]},
      /* Display Tracking */
      {
        projectId: "display-tracking",
          projectName: "Display Tracking Dashboard",
          projectNote: "Power BI /" + " SQL /" + " Excel /"+ " Bigquery /" + " Web Dashboard " ,
          slides: [
            {
              img: "portfolio/display_tracking2.jpg",
              title: "Display Tracking - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน ยอดขายแบ่งตาม Brand และราย Model ของแผนก Grand Channel",
              bullets: [
                "กราฟแสดงการเปรียบเทียบยอดขาย แบ่งตาม Brand โดยการคำนวณผ่าน Filter Model ที่เลือก",
                "Pie Chart แสดง %Share แบ่งสัดส่วนยอดขายตาม Brand",
                "ตารางสรุปยอดขาย แสดงรายละเอียด ร้านค้า และพื้นที่ จำนวนพนักงาน PC ที่อยู่ร้าน ณ ช่วงเวลาที่เลือก และจำนวนยอดขาย , ส่วนต่างของแต่ละ Brand ที่เลือก"
          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
         {
              img: "portfolio/display_tracking.jpg",
              title: "Display Tracking - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน ยอดขายแบ่งตาม Brand และการดูยอดเปรียบเทียบระดับช่วงเวลา และราย Model ของแผนก Grand Channel",
              bullets: [
                "กราฟแสดงการเปรียบเทียบยอดขาย แบ่งตาม Brand โดยการคำนวณผ่าน Filter Model ที่เลือก",
                "Pie Chart แสดง %Share แบ่งสัดส่วนยอดขายตาม Brand",
                "ตารางสรุปยอดขาย แสดงรายละเอียด ร้านค้า และพื้นที่ จำนวนพนักงาน PC ที่อยู่ร้าน ณ ช่วงเวลาที่เลือก และจำนวนยอดขาย , ส่วนต่างของแต่ละ Brand ที่เลือก"
          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        }
      ]},
      /* allbrand */
      {
        projectId: "all-brand",
          projectName: "All Brand Report",
          projectNote: "Power BI /" + " SQL /" + " Excel /"+ " Bigquery /" + " Web Dashboard " ,
          slides: [
            {
              img: "portfolio/all-brand-1.jpg",
              title: "All Brand Report - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน MOM และ WOW แยกตาม Sagement All Brand ของแผนก Grand Channel",
              bullets: [
                "ตารางแสดงยอดค่าส่วนต่าง WOW ของ Brand ตามที่เลือก และ %Share ส่วนต่างที่มีการขึ้นลง",
                "ตารางแสดง Sagement Highlight แสดงข้อมูลค่า WOW ของแต่ละ Sagement และรายละเอียด Brand ที่เป็นยอดขายลำดับ 1 ของแต่ละ Sagement และเรียง Top 5 และ Reamrk เหตุการณ์ที่เกิดขึ้นแต่ละ Sagement ตาม Week ที่เลือก",
                "กราฟ Stack ของทุก Brand แยกตาม Segment ให้เห็น %Share การขึ้นลงของ 4 สัปดาห์ย้อนหลัง"
          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
        {
              img: "portfolio/all-brand-1-2.jpg",
              title: "All Brand Report - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน MOM และ WOW แยกตาม Sagement All Brand ของแผนก Grand Channel",
              bullets: [
                "ตารางแสดงยอดค่าส่วนต่าง MOM ของ Brand ตามที่เลือก และ %Share ส่วนต่างที่มีการขึ้นลง",
                "ตารางแสดง Sagement Highlight แสดงข้อมูลค่า MOM ของแต่ละ Sagement และรายละเอียด Brand ที่เป็นยอดขายลำดับ 1 ของแต่ละ Sagement และเรียง Top 5 และ Reamrk เหตุการณ์ที่เกิดขึ้นแต่ละ Sagement ตาม Week ที่เลือก",
                "กราฟ Stack ของทุก Brand แยกตาม Segment ให้เห็น %Share การขึ้นลงของ 4 สัปดาห์ย้อนหลัง"

          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },

         {
              img: "portfolio/all-brand-2.jpg",
              title: "All Brand Report - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน MOM แยกตาม Sagement All Brand ของแผนก Grand Channel",
              bullets: [
                "กราฟ Stack ของทุก Brand แยกตาม Segment ให้เห็น %Share การขึ้นลงของ 4 สัปดาห์ย้อนหลัง",
                "ตารางแสดงรายละเอียดยอดขายของแต่ละ Brand แยกตามเดือน และ %Share MOM"

          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
         
      ]},
      /* model %share */
      {
        projectId: "all-brand",
          projectName: "Model %Share Dashbaord",
          projectNote: "Power BI /" + " SQL /" + " Excel /"+ " Bigquery /" + " Web Dashboard " ,
          slides: [
            {
              img: "portfolio/model-1.jpg",
              title: "All Brand Report - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน MOM และ WOW , Week of month แยกตาม Sagement และเปรียบเทียบรายตามช่วงล่าสุดย้อนหลัง เช่น 1 เดือน , 1 สัปดาห์ย้อนหลัง แยกตาม Model ของแผนก Grand Channel",
              bullets: [
                "กราฟ Stack แสดง %Share ของ All Brand ยอดส่วนต่างยอดหลัง 4 สัปดาห์",
                "ตารางแสดง Brand ที่เลือก และยอดขาย 4 สัปดาห์ย้อนหลังที่เลือก และผลรวมกับ ผลส่วนต่าง WOW จากสัปดาห์ล่าสุด"
          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
        {
              img: "portfolio/model-1-2.jpg",
              title: "All Brand Report - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน MOM และ WOW , Week of month แยกตาม Sagement และเปรียบเทียบรายตามช่วงล่าสุดย้อนหลัง เช่น 1 เดือน , 1 สัปดาห์ย้อนหลัง แยกตาม Model ของแผนก Grand Channel",
              bullets: [
                "กราฟ Stack แสดง %Share ของ All Brand ยอดส่วนต่างตามเดือนเริ่มต้น และเดือนสิ้นสุดที่เลือก",
                "ตารางแสดง Brand ที่เลือก และยอดขายตามเดือนเริ่มต้น และเดือนสิ้นสุดที่เลือก และผลรวมกับ ผลส่วนต่าง MOM จากเดือนล่าสุด"
          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
        {
              img: "portfolio/model-1-3.jpg",
              title: "All Brand Report - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน MOM และ WOW , Week of month แยกตาม Sagement และเปรียบเทียบรายตามช่วงล่าสุดย้อนหลัง เช่น 1 เดือน , 1 สัปดาห์ย้อนหลัง แยกตาม Model ของแผนก Grand Channel",
              bullets: [
                "กราฟ Stack แสดง %Share ของ All Brand ยอดสะสม 5 สัปดาห์ของทุกเดือนที่เลือก",
                "ตารางแสดง Brand ที่เลือก และยอดขายสะสม 5 สัปดาห์ของทุกเดือนที่เลือก และผลรวมกับ ผลส่วนต่าง Week of month สัปดาห์ 4 - 5"
          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
         {
              img: "portfolio/model-2.jpg",
              title: "All Brand Report - Grand Channel (OPPO)",
              badge: "Dashboard",
              desc: "รายงาน MOM และ WOW , Week of month แยกตาม Sagement และเปรียบเทียบรายตามช่วงล่าสุดย้อนหลัง เช่น 1 เดือน , 1 สัปดาห์ย้อนหลัง แยกตาม Model ของแผนก Grand Channel",
              bullets: [
                "ตารางแสดงยอดผลรวม แบ่งตาม Segemnt จำแนกตาม Brand มีค่าผลรวม และ%Share ของแต่ละ Sagment , ยอดส่วนต่างตาม Display ที่เลือก (WOW,MOM) %Share ALl Brand คือ ยอดเปรียบเทียบ %Share ของสัปดาห์ที่แล้ว , เดือนที่แล้ว ของแต่ละ Brand,Segment",
                "ตารางสรุปยอดขายแยกตาม Model แสดงรายการ Model แยกตาม Brand , Remark แสดงการปรับราคา และวันที่เริ่มขาย , ราคาของรุ่น ,ยอดขายรวม , แสดงยอดขายแยกตาม 4 สัปดาห์ก่อนหน้า , เดือนที่เลือก"
          ],
          tags: ["Power BI", "SQL", "Excel", "Bigquery", "Web Dashboard"],
          links: [{ label: "Detail", href: "#", icon: "📄" }]
        },
      ]},
      
        
      ],
      
      
    },
    {
      companyId: "pmg",
      companyName: "Rama 2 Medical Group (PMG Hospital Rama2)",
      /*companyNote: "Web App / Data"*/
      projects: [
        {
          projectId: "hospital-pmg",
          projectName: "PMG Power Bi Dashboard Report",
          projectNote: "Power BI /" + " Excel /" + " Power Query /"+ " Microsoft SQL Server ",
          slides: [
            {
              img: "portfolio/pmg-1.png",
              title: "PMG Power Bi Dashboard Report",
              badge: "Dashboard",
              desc: "รายงานยอดผู้ป่วยรายวันของโรงพยาบาล PMG",
              bullets: ["RBAC", "Session/JWT", "ป้องกันเข้าหน้าโดยตรง"],
              tags: ["Power Bi", "Excel","Power Query","Microsoft SQL Server"],
              /*links: [{ label: "Repo", href: "#", icon: "💻" }]*/
            },
            
          ]
        }
      ]
    },
    {
      companyId: "internal",
      companyName: "Internal / Personal Projects",
      companyNote: "Web App / Data",
      projects: [
        {
          projectId: "contract-tracker",
          projectName: "Contract Status Tracker",
          projectNote: "Web App + Role-based access",
          slides: [
            {
              img: "portfolio/web_1.png",
              title: "Login & Permission",
              badge: "Web App",
              desc: "Login + Permission แยกตาม Role",
              bullets: ["RBAC", "Session/JWT", "ป้องกันเข้าหน้าโดยตรง"],
              tags: ["Laravel", "MySQL"],
              links: [{ label: "Repo", href: "#", icon: "💻" }]
            },
            {
              img: "portfolio/web_2.png",
              title: "Dashboard & Filter",
              badge: "Web App",
              desc: "สรุปสถานะเอกสาร + ค้นหา/กรอง",
              bullets: ["Filter สถานะ/วันที่", "Audit log", "แจ้งเตือนงานค้าง"],
              tags: ["Laravel", "UI"],
              links: [{ label: "Demo", href: "#", icon: "▶" }]
            }
          ]
        }
      ]
    }
  ];

  // ===== ELEMENTS =====
  const companySelect = document.getElementById("companySelect");
  const projectSelect = document.getElementById("projectSelect");

  const trackEl = document.getElementById("portTrack");
  const dotsEl = document.getElementById("portDots");
  const viewportEl = document.querySelector(".port-viewport");
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

  if (!companySelect || !projectSelect || !trackEl || !dotsEl || !viewportEl || !prevBtn || !nextBtn) return;

  // ===== STATE =====
  let activeCompanyIndex = 0;
  let activeProjectIndex = 0;

  let slides = []; // current project slides
  let currentIndex = 0;

  // ===== RENDER: Company =====
  // ===== RENDER: Companies (Dropdown) =====
function renderCompanies() {
  companySelect.innerHTML = DATA.map((c, i) => `
    <option value="${i}">
      ${escapeHtml(c.companyName)}${c.companyNote ? " — " + escapeHtml(c.companyNote) : ""}
    </option>
  `).join("");

  companySelect.value = String(activeCompanyIndex);

  companySelect.addEventListener("change", () => {
  activeCompanyIndex = Number(companySelect.value);
  activeProjectIndex = 0;       // reset โปรเจกต์เมื่อเปลี่ยนบริษัท
  renderProjects();
  loadProjectSlides();
});
}

  // ===== RENDER: Projects (Dropdown) =====
function renderProjects() {
  const company = DATA[activeCompanyIndex];
  const projects = company.projects || [];

  projectSelect.innerHTML = projects.map((p, i) => `
    <option value="${i}">
      ${escapeHtml(p.projectName)}${p.projectNote ? " — " + escapeHtml(p.projectNote) : ""}
    </option>
  `).join("");

  // set ค่า active
  projectSelect.value = String(activeProjectIndex);

  projectSelect.addEventListener("change", () => {
  activeProjectIndex = Number(projectSelect.value);
  loadProjectSlides();
});
}





  // ===== Load slides for active project =====
  function loadProjectSlides() {
    const company = DATA[activeCompanyIndex];
    const project = company.projects?.[activeProjectIndex];

    slides = (project?.slides || []).slice();
    currentIndex = 0;

    renderSlider();
  }

  // ===== Slider render =====
  function renderSlider() {
    if (slides.length === 0) {
      trackEl.innerHTML = `<div class="port-slide"><div style="padding:24px">ยังไม่มีสไลด์ในโปรเจกต์นี้</div></div>`;
      dotsEl.innerHTML = "";
      setDetail(null);
      prevBtn.style.visibility = "hidden";
      nextBtn.style.visibility = "hidden";
      return;
    }

    trackEl.innerHTML = slides.map((s) => `
      <div class="port-slide">
        <img src="${s.img}" alt="${escapeHtml(s.title)}">
        <button
          class="port-zoom"
          type="button"
          aria-label="Expand image"
          data-src="${s.img}"
          data-title="${escapeHtml(s.title)}"
        >⤢</button>
      </div>
    `).join("");

    dotsEl.innerHTML = slides.map((_, i) => `
      <button class="port-dot ${i===0?"is-active":""}" type="button" data-dot="${i}" aria-label="Go to slide ${i+1}"></button>
    `).join("");

    dotsEl.querySelectorAll(".port-dot").forEach(btn => {
      btn.onclick = () => {
        currentIndex = Number(btn.dataset.dot);
        update();
      };
    });

    const single = slides.length <= 1;
    prevBtn.style.visibility = single ? "hidden" : "visible";
    nextBtn.style.visibility = single ? "hidden" : "visible";
    dotsEl.style.visibility = single ? "hidden" : "visible";

    update();
  }

  function update() {
    if (slides.length === 0) return;

    currentIndex = (currentIndex + slides.length) % slides.length;
    trackEl.style.transform = `translateX(-${currentIndex * 100}%)`;

    dotsEl.querySelectorAll(".port-dot").forEach((d, i) => {
      d.classList.toggle("is-active", i === currentIndex);
    });

    setDetail(slides[currentIndex]);
  }

  function setDetail(s) {
    if (!s) {
      slideTitle.textContent = "—";
      slideBadge.textContent = "—";
      slideDesc.textContent = "—";
      slideBullets.innerHTML = "";
      slideTags.innerHTML = "";
      slideActions.innerHTML = "";
      return;
    }

    slideTitle.textContent = s.title || "—";
    slideBadge.textContent = s.badge || "—";
    slideDesc.textContent = s.desc || "";

    slideBullets.innerHTML = (s.bullets || []).map(b => `<li>${escapeHtml(b)}</li>`).join("");
    slideTags.innerHTML = (s.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    slideActions.innerHTML = (s.links || []).map(l =>
      `<a href="${l.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.icon||"↗")} ${escapeHtml(l.label)}</a>`
    ).join("");
  }

  // ===== Slider controls =====
  prevBtn.addEventListener("click", () => { currentIndex -= 1; update(); });
  nextBtn.addEventListener("click", () => { currentIndex += 1; update(); });

  viewportEl.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });

  let startX = null;
  viewportEl.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
  viewportEl.addEventListener("touchend", (e) => {
    if (startX == null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) < 35) return;
    dx > 0 ? prevBtn.click() : nextBtn.click();
  });

  // ===== Lightbox =====
  function openLightboxBy(src, title) {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxImg.src = src;
    lightboxImg.alt = title || "Preview";
    if (lightboxCaption) lightboxCaption.textContent = title || "";
    document.documentElement.style.overflow = "hidden";
  }
  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    if (lightboxCaption) lightboxCaption.textContent = "";
    document.documentElement.style.overflow = "";
  }

  trackEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".port-zoom");
    if (!btn) return;
    const src = btn.dataset.src;
    const title = btn.dataset.title || "";
    if (!src) return;
    openLightboxBy(src, title);
  });

  lightbox?.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox?.classList.contains("is-open")) closeLightbox();
  });

  // ===== Utils =====
  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // ===== Init =====
  renderCompanies();
  renderProjects();
  loadProjectSlides();
})();
