# ☧ Nền Tảng Đọc Thần Học Công Giáo (Catholic Theology Long-Form Reader)

> **Chủ đề nghiên cứu:** *"Phẩm giá con người là ân ban của Thiên Chúa — Cội nguồn, Giáo huấn và Những thách đố đương đại"*  
> **Khẩu hiệu:** *Ad Maiorem Dei Gloriam (Cho vinh danh Thiên Chúa hơn)*

---

## 📖 Giới thiệu Dự án

**Catholic Theology Long-Form Reader** là một nền tảng đọc tài liệu học thuật chuyên sâu được thiết kế riêng biệt cho các văn kiện, luận văn và khảo luận Thần học Công giáo. 

Dự án kết hợp hài hòa giữa:
1. **Tính chuẩn xác, nghiêm ngặt của nghiên cứu học thuật (Academic Standards)**.
2. **Vẻ đẹp trang nghiêm, cổ điển của mỹ học Công giáo (Catholic Aesthetics)**.
3. **Trải nghiệm đọc hiện đại, mượt mà trên mọi thiết bị (Modern Long-form UX)**.

Nội dung toàn văn của bài báo cáo được đồng bộ trực tiếp từ tệp Markdown (`content/PGCN.md`), tối ưu hóa tốc độ tải với **Next.js App Router (Server-Side Rendering)**.

---

## ✨ Tính năng Nổi bật

### 1. Thẩm mỹ & Kiểu chữ Công giáo (Catholic Aesthetic & Typography)
* **Phối màu biểu tượng:** Tông màu Giấy cổ (*Parchment* `#FAF9F6`), Đỏ phẩm phục Giám mục (*Burgundy* `#722F37`), và Ánh kim (*Gold* `#C5A059`). Tuyệt đối không sử dụng màu trắng tinh công nghiệp để bảo vệ mắt độc giả.
* **Font chữ Serif kinh điển:** Sự kết hợp hoàn hảo giữa `Playfair Display` (tiêu đề trang trọng) và `Lora` (nội dung thanh thoát, dễ đọc khi đọc bài viết dài).
* **Chi tiết mỹ thuật thánh:** Biểu tượng Chi-Rho (☧) chìm mờ làm nền trang trọng, chữ hoa đầu dòng (Drop Cap) ở đầu mỗi chương lớn, và các đường phân cách họa tiết chữ thập (✝).

### 2. Hệ thống Giao diện Đa chế độ (Dynamic Theming System)
Tùy biến trải nghiệm đọc tức thì thông qua kiến trúc Biến CSS (*CSS Variables*):
* **Sáng (Parchment):** Giấy ngà cổ điển, tương phản dịu nhẹ thích hợp đọc ban ngày.
* **Sepia (Cổ điển):** Nền vàng nâu trầm mặc mang âm hưởng sách kinh viện xưa.
* **Tối (Dark Mode):** Màu xám than mềm mại (*Charcoal*), viền vàng kim, không gây mỏi mắt trong bóng tối.
* **Cỡ chữ linh hoạt:** 3 nấc điều chỉnh (Chuẩn - Lớn - Cực lớn) co giãn toàn trang tự động.

### 3. Bảng điều khiển Đọc Học thuật (Academic Reading Controls)
* Gọn gàng với một nút tròn nổi (FAB) tinh xảo ở góc trên màn hình.
* Khi nhấp vào sẽ mở ra bảng Popover tùy chỉnh (lấy cảm hứng từ giao diện đọc sách của Apple Books và Medium), tự động đóng khi nhấp ra ngoài.

### 4. Mục lục Động Thông minh (Sticky & Interactive Table of Contents)
* **Vị trí bên trái:** Nằm cố định bên trái màn hình lớn theo chuẩn đọc học thuật, giúp người đọc nắm vững cấu trúc bài luận.
* **Tự động theo dõi tiến trình (Intersection Observer):** Đánh dấu mục đang đọc trong thời gian thực.
* **Hỗ trợ Mobile linh hoạt:** Drawer trượt mượt mà từ cạnh trái màn hình thông qua nút biểu tượng sách nổi.
* **Cuộn thông minh:** Tích hợp `scroll-mt` để khi nhảy đến chương mục không bao giờ bị che khuất tiêu đề.

### 5. Chú thích Nguồn Nổi (Interactive Citation Tooltips)
* Người đọc không cần phải cuộn xuống tận cuối trang để xem nguồn. Chỉ cần rà chuột hoặc chạm nhẹ vào các chỉ số tham chiếu `[1]`, `[14]`, một bảng chú thích sẽ hiện lên tóm tắt thông tin nguồn tài liệu và liên kết trực tiếp đến văn kiện gốc của Tòa Thánh hoặc Hội đồng Giám mục Việt Nam.

### 6. Trích dẫn & Chia sẻ Đoạn văn (Highlight & Share)
* Khi bôi đen bất kỳ đoạn văn bản tâm đắc nào, một thanh công cụ nổi phong cách iOS sẽ xuất hiện.
* Người đọc có thể bấm **Sao chép** kèm nguồn tự động, hoặc kích hoạt **Chia sẻ** (Web Share API) qua tin nhắn, mạng xã hội trên cả thiết bị di động lẫn máy tính.

### 7. Thanh Tiến trình & Ước tính Thời gian Đọc
* Thanh tiến trình mỏng màu ánh kim ở viền trên cùng cho biết tỷ lệ hoàn thành bài viết.
* Tự động tính toán thời lượng đọc trung bình dựa trên tổng số từ vựng tiếng Việt.

### 8. Chuẩn mực Ngôn ngữ & Thần học
* Bài viết tuân thủ 100% văn phong Thần học Công giáo chuẩn mực của Giáo hội Việt Nam (sử dụng các từ ngữ: *Thiên Chúa, Đức Giêsu Kitô, Chúa Thánh Thần, Tông đồ, Mặc khải, Ân sủng, Ơn cứu độ, Huấn quyền, Đức Thánh Cha*...).

### 9. Tối ưu hóa SEO & Open Graph Đẳng cấp
* Tích hợp cấu trúc dữ liệu **JSON-LD Schema.org** định dạng `Article` giúp Google Index bài viết một cách sâu rộng.
* Thẻ Open Graph và Twitter Card được thiết lập chuẩn xác để hiển thị hình ảnh và mô tả bài viết chuyên nghiệp khi chia sẻ link lên Facebook, Zalo, X/Twitter.

---

## 🛠 Ngăn xếp Công nghệ (Tech Stack)

| Thành phần | Công nghệ | Mục đích sử dụng |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) | Tối ưu hóa tốc độ, cấu trúc thư mục hiện đại, SEO vượt trội |
| **Rendering** | React 18 Server Components | Render Markdown trực tiếp trên server, giảm tải dung lượng client bundle |
| **Ngôn ngữ** | TypeScript 5 | Đảm bảo tính toàn vẹn kiểu dữ liệu và độ tin cậy của mã nguồn |
| **Styling** | Tailwind CSS + `@tailwindcss/typography` | Hệ thống class tiện ích, plugin typography dành riêng cho bài viết dài |
| **Biểu tượng** | Lucide React | Hệ thống icon tối giản, hiện đại |
| **Phân tích cú pháp** | `react-markdown` + `remark-gfm` + `rehype-raw` | Hiển thị bảng biểu (tables), trích dẫn và các thẻ HTML nâng cao |
| **Font chữ** | Next/Font (`Playfair Display`, `Lora`) | Tự động tối ưu hóa font chữ Google, không gây hiện tượng layout shift |

---

## 📁 Cấu trúc Thư mục Dự án

```bash
PGCC/
├── content/
│   └── PGCN.md                 # Toàn văn bài khảo luận Thần học (.md)
├── public/
│   ├── og-image.jpg            # Ảnh xem trước (Open Graph Thumbnail 1200x630)
│   └── favicon.ico             # Biểu tượng trang web
├── src/
│   ├── app/
│   │   ├── globals.css         # Hệ màu, CSS Variables, Drop Cap, Watermark
│   │   ├── layout.tsx          # Root Layout, cấu hình Font, SEO Metadata & JSON-LD
│   │   └── page.tsx            # Trang chủ, nạp dữ liệu Server-Side & bố cục bài
│   ├── components/
│   │   ├── CitationTooltip.tsx # Popup hiển thị chi tiết chú thích khi rê chuột
│   │   ├── HeroSection.tsx     # Tiêu đề lớn, thời gian đọc, dấu ấn Chi-Rho
│   │   ├── MarkdownRenderer.tsx# Component phân giải Markdown & Custom HTML
│   │   ├── ReadingControls.tsx # Nút FAB menu tùy chọn cỡ chữ và theme
│   │   ├── ReadingProgressBar.tsx # Thanh tiến trình đọc trên cùng
│   │   ├── ReadingProvider.tsx # Quản lý State cho Theme & Font Size
│   │   ├── ScrollToTop.tsx     # Nút cuộn nhanh về đầu trang
│   │   ├── SelectionMenu.tsx   # Menu nổi khi bôi đen văn bản để copy/share
│   │   └── TableOfContents.tsx # Mục lục cố định bên trái & Mobile Drawer
│   └── lib/
│       ├── markdown.ts         # Xử lý nội dung: trích xuất headings, tính giờ đọc, chú thích
│       └── utils.ts            # Hàm tạo slug tiếng Việt không dấu chuẩn URL
├── tailwind.config.ts          # Cấu hình bảng màu Công giáo và Typography
├── tsconfig.json               # Cấu hình trình biên dịch TypeScript
└── package.json                # Danh sách thư viện và scripts dự án
```

---

## 🚀 Hướng dẫn Cài đặt & Khởi chạy

### 1. Yêu cầu Môi trường
* **Node.js:** Phiên bản `>= 18.17.0` (Khuyên dùng bản LTS mới nhất).
* **Trình quản lý gói:** `npm`, `yarn` hoặc `pnpm`.

### 2. Cài đặt Thư viện
Mở Terminal tại thư mục dự án và chạy:
```bash
npm install
```

### 3. Chạy môi trường Phát triển (Development)
```bash
npm run dev
```
Truy cập trình duyệt tại: **`http://localhost:3000`**

### 4. Đóng gói Sản phẩm (Production Build)
Để kiểm tra tính toàn vẹn và tạo bản build tối ưu:
```bash
npm run build
npm run start
```

---

## ✍️ Hướng dẫn Tùy biến & Biên soạn

### Cập nhật hoặc Thay thế Nội dung Bài viết
1. Mở tệp **`content/PGCN.md`**.
2. Bài viết được định dạng theo chuẩn Markdown:
   * Dùng `##` cho các phần lớn (sẽ tự động xuất hiện trên Mục lục cấp 1).
   * Dùng `###` cho các tiểu mục (sẽ tự động xuất hiện trên Mục lục cấp 2).
   * Đặt chú thích nguồn dưới dạng thẻ `<sup>số_thứ_tự</sup>` (Ví dụ: `<sup>1</sup>`, `<sup>2</sup>`).
   * Mục cuối cùng luôn là:
     ```markdown
     ## Nguồn trích dẫn
     1. [Tên tài liệu](đường_link)
     2. [Tên tài liệu](đường_link)
     ```
     Hệ thống sẽ tự động quét danh sách này để làm dữ liệu cho các Tooltip chú thích tương tác!

### Tùy chỉnh Ảnh xem trước khi Chia sẻ (OG Image)
* Hãy chuẩn bị một bức ảnh kích thước khuyến nghị **1200 x 630 px** (có thể chứa hình ảnh trang trọng về chủ đề bài viết).
* Lưu ảnh với tên **`og-image.jpg`** và đưa vào thư mục **`public/`**. Khi gửi link qua Zalo hoặc Facebook, hình ảnh này sẽ hiển thị làm banner đại diện.

---

## 🌐 Triển khai lên Internet (Deployment)

Dự án được tối ưu hóa tốt nhất để triển khai trên các nền tảng điện toán đám mây hiện đại:

### Triển khai nhanh với Vercel (Khuyến nghị)
1. Đẩy mã nguồn lên tài khoản **GitHub** hoặc **GitLab** của bạn.
2. Truy cập [Vercel](https://vercel.com/) và bấm **Add New Project**.
3. Chọn kho chứa GitHub của bạn, Vercel sẽ tự động phát hiện Next.js và cài đặt tối ưu.
4. Bấm **Deploy** — Bạn sẽ có ngay một tên miền miễn phí dạng `https://ten-du-an.vercel.app` để chia sẻ cho cộng đồng.

---

## ⚖️ Bản quyền & Ý nghĩa

Dự án được phát triển phục vụ mục đích nghiên cứu, học tập, giảng dạy và loan báo các giá trị nhân bản của Thần học Công giáo.

* **Nội dung:** Được trích xuất và tổng hợp từ các Huấn quyền chính thức của Giáo hội Công giáo, các Tông hiến, Thông điệp, và Tuyên ngôn của Tòa Thánh Vatican.
* **Mục tiêu tối hậu:** *Ad Maiorem Dei Gloriam* — Vì sự thăng tiến phẩm giá đích thực của con người trong tình yêu Thiên Chúa.
