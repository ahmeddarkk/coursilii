/**
 * ============================================================
 *  COURSILI DATABASE  —  coursili_db.js
 *  Single source of truth for all website data.
 *  Import / include this file in any page to access data.
 *  Uses localStorage for persistence in the browser.
 * ============================================================
 */

const CoursiliDB = (() => {

  /* ──────────────────────────────────────────
     SEED DATA  (initial state if DB is empty)
  ────────────────────────────────────────── */
  const SEED = {
    version: "1.0.0",
    seeded_at: "2025-01-01T00:00:00.000Z",

    /* ── USERS ── */
    users: [
      {
        id: "usr_001",
        name: "Ahmed Abbes",
        email: "ahmed@coursili.tn",
        password_hash: "admin2025",   // plain for demo – hash in production
        role: "instructor",           // instructor | student | admin
        avatar_initial: "A",
        avatar_gradient: "linear-gradient(135deg,#6c63ff,#a78bfa)",
        bio: "Founder of Coursili. Entrepreneur and educator with 6+ years in online business.",
        location: "Sfax, Tunisia",
        joined_at: "2024-01-15T10:00:00.000Z",
        courses_uploaded: ["crs_001", "crs_004"],
        enrolled_courses: [],
        progress: {},
        wishlist: [],
        certificates: [],
        total_revenue: 0,
        is_verified: true
      },
      {
        id: "usr_002",
        name: "Mariem Ben Ali",
        email: "mariem@coursili.tn",
        password_hash: "design2025",
        role: "instructor",
        avatar_initial: "M",
        avatar_gradient: "linear-gradient(135deg,#ff6b6b,#fb923c)",
        bio: "Senior graphic designer with experience at top Tunisian agencies.",
        location: "Tunis, Tunisia",
        joined_at: "2024-02-20T10:00:00.000Z",
        courses_uploaded: ["crs_002"],
        enrolled_courses: [],
        progress: {},
        wishlist: [],
        certificates: [],
        total_revenue: 0,
        is_verified: true
      },
      {
        id: "usr_003",
        name: "Karim Jlassi",
        email: "karim@coursili.tn",
        password_hash: "webdev2025",
        role: "instructor",
        avatar_initial: "K",
        avatar_gradient: "linear-gradient(135deg,#43e97b,#0ea5e9)",
        bio: "Full-stack developer. Built products used by thousands across North Africa.",
        location: "Sousse, Tunisia",
        joined_at: "2024-03-01T10:00:00.000Z",
        courses_uploaded: ["crs_003"],
        enrolled_courses: [],
        progress: {},
        wishlist: [],
        certificates: [],
        total_revenue: 0,
        is_verified: true
      },
      {
        id: "usr_004",
        name: "Ahmed K.",
        email: "ahmedk@student.tn",
        password_hash: "student123",
        role: "student",
        avatar_initial: "A",
        avatar_gradient: "linear-gradient(135deg,#6c63ff,#a78bfa)",
        bio: "",
        location: "Sfax, Tunisia",
        joined_at: "2024-04-10T10:00:00.000Z",
        courses_uploaded: [],
        enrolled_courses: ["crs_001"],
        progress: { "crs_001": 72 },
        wishlist: ["crs_002"],
        certificates: [],
        total_revenue: 0,
        is_verified: false
      },
      {
        id: "usr_005",
        name: "Sana M.",
        email: "sanam@student.tn",
        password_hash: "student123",
        role: "student",
        avatar_initial: "S",
        avatar_gradient: "linear-gradient(135deg,#ff6b6b,#fb923c)",
        bio: "",
        location: "Tunis, Tunisia",
        joined_at: "2024-05-05T10:00:00.000Z",
        courses_uploaded: [],
        enrolled_courses: ["crs_002", "crs_003"],
        progress: { "crs_002": 100, "crs_003": 45 },
        wishlist: [],
        certificates: ["cert_001"],
        total_revenue: 0,
        is_verified: false
      },
      {
        id: "usr_006",
        name: "Youssef B.",
        email: "youssefb@student.tn",
        password_hash: "student123",
        role: "student",
        avatar_initial: "Y",
        avatar_gradient: "linear-gradient(135deg,#43e97b,#0ea5e9)",
        bio: "",
        location: "Sousse, Tunisia",
        joined_at: "2024-06-01T10:00:00.000Z",
        courses_uploaded: [],
        enrolled_courses: ["crs_003"],
        progress: { "crs_003": 88 },
        wishlist: ["crs_001"],
        certificates: [],
        total_revenue: 0,
        is_verified: false
      }
    ],

    /* ── COURSES ── */
    courses: [
      {
        id: "crs_001",
        title: "Trading Fundamentals",
        slug: "trading-fundamentals",
        instructor_id: "usr_001",
        instructor_name: "Ahmed Abbes",
        category: "finance",
        level: "Beginner",
        description: "Learn Forex, stocks & crypto from scratch. Understand charts, indicators, and develop your own strategies.",
        thumbnail_emoji: "📈",
        thumbnail_color: "linear-gradient(135deg,#1a1a3e,#2a1a4e)",
        price: 199,
        original_price: 350,
        currency: "TND",
        lessons_count: 48,
        duration_hours: 12,
        language: "Arabic / French",
        badge: "🔥 Popular",
        rating: 4.9,
        reviews_count: 87,
        students_count: 234,
        is_published: true,
        is_featured: true,
        created_at: "2024-02-01T10:00:00.000Z",
        updated_at: "2025-01-10T10:00:00.000Z",
        tags: ["trading", "forex", "crypto", "stocks", "finance"],
        perks: ["Lifetime access", "Certificate included", "7-day money back", "Instructor support"],
        total_revenue: 46566,
        monthly_revenue: [3200, 4100, 5200, 4800, 6100, 5900, 7200, 6500, 7800, 8100, 7400, 8200],
        enrollments_by_month: [12, 16, 21, 19, 24, 23, 28, 25, 30, 32, 29, 33]
      },
      {
        id: "crs_002",
        title: "Graphic Design Pro",
        slug: "graphic-design-pro",
        instructor_id: "usr_002",
        instructor_name: "Mariem Ben Ali",
        category: "design",
        level: "All Levels",
        description: "Master Photoshop, Illustrator & Canva. Learn design principles, color theory and typography.",
        thumbnail_emoji: "🎨",
        thumbnail_color: "linear-gradient(135deg,#1a2a1a,#0a3a2a)",
        price: 149,
        original_price: 280,
        currency: "TND",
        lessons_count: 35,
        duration_hours: 9,
        language: "Arabic / French",
        badge: null,
        rating: 4.8,
        reviews_count: 54,
        students_count: 162,
        is_published: true,
        is_featured: false,
        created_at: "2024-03-15T10:00:00.000Z",
        updated_at: "2025-01-08T10:00:00.000Z",
        tags: ["design", "photoshop", "illustrator", "canva", "graphic design"],
        perks: ["Lifetime access", "Certificate included", "7-day money back", "Downloadable assets"],
        total_revenue: 24138,
        monthly_revenue: [1800, 2100, 2400, 2200, 2600, 2800, 3100, 2900, 3200, 3500, 3200, 3600],
        enrollments_by_month: [8, 10, 11, 10, 12, 13, 14, 13, 15, 16, 15, 17]
      },
      {
        id: "crs_003",
        title: "Web Development From Scratch",
        slug: "web-development",
        instructor_id: "usr_003",
        instructor_name: "Karim Jlassi",
        category: "tech",
        level: "Beginner",
        description: "HTML, CSS & JavaScript — build modern responsive websites and launch your career in tech.",
        thumbnail_emoji: "💻",
        thumbnail_color: "linear-gradient(135deg,#2a1a1a,#3a0a1a)",
        price: 249,
        original_price: 400,
        currency: "TND",
        lessons_count: 60,
        duration_hours: 16,
        language: "Arabic / French",
        badge: "⭐ Best Seller",
        rating: 4.9,
        reviews_count: 121,
        students_count: 318,
        is_published: true,
        is_featured: true,
        created_at: "2024-01-20T10:00:00.000Z",
        updated_at: "2025-01-12T10:00:00.000Z",
        tags: ["web development", "html", "css", "javascript", "coding", "tech"],
        perks: ["Lifetime access", "Certificate included", "7-day money back", "Source code included"],
        total_revenue: 79182,
        monthly_revenue: [4500, 5800, 7100, 6900, 8200, 8500, 9600, 9100, 10200, 11000, 10500, 12000],
        enrollments_by_month: [14, 18, 22, 21, 25, 26, 29, 28, 31, 34, 32, 38]
      },
      {
        id: "crs_004",
        title: "Advanced Trading Strategies",
        slug: "advanced-trading",
        instructor_id: "usr_001",
        instructor_name: "Ahmed Abbes",
        category: "finance",
        level: "Intermediate",
        description: "Risk management, advanced chart patterns & algorithmic thinking for serious traders.",
        thumbnail_emoji: "📊",
        thumbnail_color: "linear-gradient(135deg,#1a2a3a,#0a1a2a)",
        price: 279,
        original_price: 279,
        currency: "TND",
        lessons_count: 30,
        duration_hours: 8,
        language: "Arabic / French",
        badge: null,
        rating: 4.7,
        reviews_count: 32,
        students_count: 89,
        is_published: true,
        is_featured: false,
        created_at: "2024-06-01T10:00:00.000Z",
        updated_at: "2025-01-05T10:00:00.000Z",
        tags: ["trading", "advanced", "risk management", "technical analysis"],
        perks: ["Lifetime access", "Certificate included", "7-day money back"],
        total_revenue: 24831,
        monthly_revenue: [1200, 1600, 1900, 2100, 2400, 2200, 2600, 2800, 2900, 3100, 3000, 3300],
        enrollments_by_month: [4, 5, 6, 7, 8, 7, 9, 10, 10, 11, 10, 12]
      }
    ],

    /* ── ENROLLMENTS ── */
    enrollments: [
      { id: "enr_001", user_id: "usr_004", course_id: "crs_001", price_paid: 199, enrolled_at: "2024-05-15T10:00:00.000Z", completed: false, progress: 72 },
      { id: "enr_002", user_id: "usr_005", course_id: "crs_002", price_paid: 149, enrolled_at: "2024-06-10T10:00:00.000Z", completed: true, progress: 100 },
      { id: "enr_003", user_id: "usr_005", course_id: "crs_003", price_paid: 249, enrolled_at: "2024-07-01T10:00:00.000Z", completed: false, progress: 45 },
      { id: "enr_004", user_id: "usr_006", course_id: "crs_003", price_paid: 249, enrolled_at: "2024-07-20T10:00:00.000Z", completed: false, progress: 88 }
    ],

    /* ── REVIEWS ── */
    reviews: [
      { id: "rev_001", user_id: "usr_004", course_id: "crs_001", rating: 5, comment: "The trading course changed how I look at money. I went from zero to my first profitable trade in 2 months.", created_at: "2024-08-01T10:00:00.000Z" },
      { id: "rev_002", user_id: "usr_005", course_id: "crs_002", rating: 5, comment: "The graphic design course is so well structured. I landed my first freelance client before finishing!", created_at: "2024-09-01T10:00:00.000Z" },
      { id: "rev_003", user_id: "usr_006", course_id: "crs_003", rating: 5, comment: "I had zero coding experience. Now I build websites for local businesses. Coursili made it simple.", created_at: "2024-09-15T10:00:00.000Z" }
    ],

    /* ── CERTIFICATES ── */
    certificates: [
      { id: "cert_001", user_id: "usr_005", course_id: "crs_002", user_name: "Sana M.", course_title: "Graphic Design Pro", issued_at: "2025-01-05T10:00:00.000Z", certificate_code: "CSL-2025-GD-001" }
    ],

    /* ── SHOP PRODUCTS ── */
    products: [
      { id: "prd_001", name: "Trading Fundamentals Guide", type: "E-Book", emoji: "📘", color: "linear-gradient(135deg,#1a1a3e,#2a1a4e)", price: 29, original_price: 49, discount_pct: 40, description: "Complete beginner's guide to Forex & crypto. 120 pages of practical knowledge.", sales: 89 },
      { id: "prd_002", name: "Design Templates Bundle", type: "Template Pack", emoji: "🎨", color: "linear-gradient(135deg,#1a2a1a,#0a3a2a)", price: 49, original_price: 49, discount_pct: 0, description: "50+ professional Canva & Photoshop templates for social media and business.", sales: 67 },
      { id: "prd_003", name: "Web Dev Complete Bundle", type: "Course Bundle", emoji: "💻", color: "linear-gradient(135deg,#2a1a1a,#3a0a1a)", price: 299, original_price: 450, discount_pct: 0, description: "Full course access + starter code pack + HTML/CSS cheatsheet.", sales: 43 },
      { id: "prd_004", name: "Trading Journal Template", type: "Worksheet", emoji: "📊", color: "linear-gradient(135deg,#2a2a1a,#3a3a0a)", price: 15, original_price: 15, discount_pct: 0, description: "Professional trading journal spreadsheet to track your trades and profits.", sales: 156 },
      { id: "prd_005", name: "Freelancer Starter Pack", type: "Resource Kit", emoji: "🗂️", color: "linear-gradient(135deg,#1a2a2a,#0a3a3a)", price: 35, original_price: 35, discount_pct: 0, description: "Contract templates, invoice templates & client pitch scripts.", sales: 72 },
      { id: "prd_006", name: "All-Access Skills Pack", type: "Mega Bundle", emoji: "🚀", color: "linear-gradient(135deg,#2a1a2a,#3a0a3a)", price: 99, original_price: 200, discount_pct: 50, description: "Every e-book, template & resource from Coursili in one massive bundle.", sales: 38 }
    ],

    /* ── ORDERS ── */
    orders: [
      { id: "ord_001", user_id: "usr_004", product_id: "prd_001", price_paid: 29, ordered_at: "2024-09-10T10:00:00.000Z", status: "completed" },
      { id: "ord_002", user_id: "usr_005", product_id: "prd_004", price_paid: 15, ordered_at: "2024-10-05T10:00:00.000Z", status: "completed" },
      { id: "ord_003", user_id: "usr_006", product_id: "prd_002", price_paid: 49, ordered_at: "2024-11-01T10:00:00.000Z", status: "completed" }
    ],

    /* ── MESSAGES / CONTACT ── */
    messages: [
      { id: "msg_001", name: "Omar Chabbi", email: "omar@gmail.com", phone: "+216 55 123 456", subject: "Course Enrollment", message: "I want to know more about the trading course and how to pay.", received_at: "2025-01-15T10:00:00.000Z", is_read: true },
      { id: "msg_002", name: "Fatma Trabelsi", email: "fatma@gmail.com", phone: "+216 22 987 654", subject: "Technical Support", message: "I can't access my course videos. Please help.", received_at: "2025-01-18T10:00:00.000Z", is_read: false },
      { id: "msg_003", name: "Zied Hamdi", email: "zied@gmail.com", phone: "+216 99 456 789", subject: "Partnership", message: "I am a trainer and would like to upload my course on Coursili.", received_at: "2025-01-20T10:00:00.000Z", is_read: false }
    ],

    /* ── SITE ANALYTICS ── */
    analytics: {
      total_revenue: 174717,
      total_students: 803,
      total_courses: 4,
      total_instructors: 3,
      total_orders: 3,
      monthly_visitors: [1200, 1450, 1800, 2100, 2400, 2200, 2800, 3100, 3400, 3800, 3600, 4200],
      monthly_signups: [45, 58, 72, 81, 94, 88, 106, 118, 127, 142, 138, 158],
      monthly_revenue: [10700, 13600, 16600, 16000, 19300, 19400, 22500, 21300, 24100, 25700, 24100, 27100],
      top_countries: [
        { country: "Tunisia", pct: 78 },
        { country: "Algeria", pct: 9 },
        { country: "Morocco", pct: 7 },
        { country: "France", pct: 4 },
        { country: "Other", pct: 2 }
      ],
      device_split: { desktop: 52, mobile: 39, tablet: 9 }
    },

    /* ── SITE SETTINGS ── */
    settings: {
      site_name: "Coursili",
      site_tagline: "Tunisia's #1 Skills Platform",
      site_email: "coursilitn@gmail.com",
      site_phone: "+216 29 608 030",
      site_address: "Sfax & Tunis, Tunisia",
      whatsapp: "+21629608030",
      social: {
        facebook: "https://facebook.com/coursili",
        instagram: "https://instagram.com/coursili",
        twitter: "https://twitter.com/coursili",
        linkedin: "https://linkedin.com/company/coursili"
      },
      currencies: ["TND"],
      languages: ["Arabic", "French"],
      money_back_days: 7,
      platform_fee_pct: 20,
      instructor_share_pct: 80
    }
  };

  /* ──────────────────────────────────────────
     INIT — seed localStorage if empty
  ────────────────────────────────────────── */
  function init() {
    if (!localStorage.getItem('cdb_seeded')) {
      localStorage.setItem('cdb_users', JSON.stringify(SEED.users));
      localStorage.setItem('cdb_courses', JSON.stringify(SEED.courses));
      localStorage.setItem('cdb_enrollments', JSON.stringify(SEED.enrollments));
      localStorage.setItem('cdb_reviews', JSON.stringify(SEED.reviews));
      localStorage.setItem('cdb_certificates', JSON.stringify(SEED.certificates));
      localStorage.setItem('cdb_products', JSON.stringify(SEED.products));
      localStorage.setItem('cdb_orders', JSON.stringify(SEED.orders));
      localStorage.setItem('cdb_messages', JSON.stringify(SEED.messages));
      localStorage.setItem('cdb_analytics', JSON.stringify(SEED.analytics));
      localStorage.setItem('cdb_settings', JSON.stringify(SEED.settings));
      localStorage.setItem('cdb_seeded', '1');
    }
  }

  /* ──────────────────────────────────────────
     GENERIC CRUD HELPERS
  ────────────────────────────────────────── */
  function getAll(table) { try { return JSON.parse(localStorage.getItem('cdb_' + table) || '[]'); } catch(e) { return []; } }
  function getObj(table) { try { return JSON.parse(localStorage.getItem('cdb_' + table) || '{}'); } catch(e) { return {}; } }
  function saveAll(table, data) { localStorage.setItem('cdb_' + table, JSON.stringify(data)); }
  function findById(table, id) { return getAll(table).find(r => r.id === id) || null; }
  function findWhere(table, key, value) { return getAll(table).filter(r => r[key] === value); }
  function insert(table, record) { const all = getAll(table); all.push(record); saveAll(table, all); return record; }
  function update(table, id, changes) {
    const all = getAll(table);
    const idx = all.findIndex(r => r.id === id);
    if (idx === -1) return null;
    all[idx] = { ...all[idx], ...changes };
    saveAll(table, all);
    return all[idx];
  }
  function remove(table, id) {
    const all = getAll(table).filter(r => r.id !== id);
    saveAll(table, all);
  }
  function genId(prefix) { return prefix + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5); }

  /* ──────────────────────────────────────────
     PUBLIC API
  ────────────────────────────────────────── */
  return {
    init,

    /* ── USERS ── */
    users: {
      getAll: () => getAll('users'),
      getById: id => findById('users', id),
      getByEmail: email => getAll('users').find(u => u.email === email) || null,
      getByRole: role => findWhere('users', 'role', role),
      create: (data) => insert('users', { id: genId('usr'), ...data, joined_at: new Date().toISOString() }),
      update: (id, data) => update('users', id, data),
      authenticate: (email, password) => {
        const u = getAll('users').find(u => u.email === email && u.password_hash === password);
        return u || null;
      },
      setSession: (user) => {
        const safe = { ...user };
        delete safe.password_hash;
        localStorage.setItem('coursili_user', JSON.stringify({ ...safe, loggedIn: true }));
      },
      getSession: () => { try { return JSON.parse(localStorage.getItem('coursili_user') || 'null'); } catch(e) { return null; } },
      clearSession: () => localStorage.removeItem('coursili_user'),
      isInstructor: (userId) => {
        const u = findById('users', userId);
        return u && (u.role === 'instructor' || u.role === 'admin');
      }
    },

    /* ── COURSES ── */
    courses: {
      getAll: () => getAll('courses'),
      getById: id => findById('courses', id),
      getPublished: () => getAll('courses').filter(c => c.is_published),
      getByInstructor: (instructorId) => findWhere('courses', 'instructor_id', instructorId),
      getByCategory: (cat) => getAll('courses').filter(c => c.category === cat && c.is_published),
      getFeatured: () => getAll('courses').filter(c => c.is_featured && c.is_published),
      search: (q) => {
        const ql = q.toLowerCase();
        return getAll('courses').filter(c => c.is_published && (c.title.toLowerCase().includes(ql) || c.category.toLowerCase().includes(ql) || (c.tags||[]).some(t => t.includes(ql))));
      },
      create: (data) => insert('courses', { id: genId('crs'), ...data, created_at: new Date().toISOString(), updated_at: new Date().toISOString(), students_count: 0, total_revenue: 0, monthly_revenue: new Array(12).fill(0), enrollments_by_month: new Array(12).fill(0) }),
      update: (id, data) => update('courses', id, { ...data, updated_at: new Date().toISOString() }),
      delete: (id) => remove('courses', id),
      getStats: (courseId) => {
        const course = findById('courses', courseId);
        if (!course) return null;
        const enrollments = findWhere('enrollments', 'course_id', courseId);
        const reviews = findWhere('reviews', 'course_id', courseId);
        const avgRating = reviews.length ? (reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(1) : 0;
        return { course, enrollments, reviews, avgRating, total_revenue: enrollments.reduce((s,e)=>s+e.price_paid,0) };
      }
    },

    /* ── ENROLLMENTS ── */
    enrollments: {
      getAll: () => getAll('enrollments'),
      getById: id => findById('enrollments', id),
      getByCourse: (courseId) => findWhere('enrollments', 'course_id', courseId),
      getByUser: (userId) => findWhere('enrollments', 'user_id', userId),
      isEnrolled: (userId, courseId) => !!getAll('enrollments').find(e => e.user_id === userId && e.course_id === courseId),
      create: (userId, courseId, pricePaid) => {
        const e = insert('enrollments', { id: genId('enr'), user_id: userId, course_id: courseId, price_paid: pricePaid, enrolled_at: new Date().toISOString(), completed: false, progress: 0 });
        // update course student count
        const course = findById('courses', courseId);
        if (course) update('courses', courseId, { students_count: (course.students_count||0) + 1, total_revenue: (course.total_revenue||0) + pricePaid });
        return e;
      },
      updateProgress: (userId, courseId, pct) => {
        const all = getAll('enrollments');
        const idx = all.findIndex(e => e.user_id === userId && e.course_id === courseId);
        if (idx !== -1) { all[idx].progress = pct; all[idx].completed = pct >= 100; saveAll('enrollments', all); }
      }
    },

    /* ── REVIEWS ── */
    reviews: {
      getAll: () => getAll('reviews'),
      getByCourse: (courseId) => findWhere('reviews', 'course_id', courseId),
      getByUser: (userId) => findWhere('reviews', 'user_id', userId),
      create: (data) => insert('reviews', { id: genId('rev'), ...data, created_at: new Date().toISOString() })
    },

    /* ── CERTIFICATES ── */
    certificates: {
      getAll: () => getAll('certificates'),
      getByUser: (userId) => findWhere('certificates', 'user_id', userId),
      create: (userId, courseId) => {
        const user = findById('users', userId);
        const course = findById('courses', courseId);
        if (!user || !course) return null;
        return insert('certificates', { id: genId('cert'), user_id: userId, course_id: courseId, user_name: user.name, course_title: course.title, issued_at: new Date().toISOString(), certificate_code: 'CSL-' + new Date().getFullYear() + '-' + Math.random().toString(36).substr(2,6).toUpperCase() });
      }
    },

    /* ── PRODUCTS / SHOP ── */
    products: {
      getAll: () => getAll('products'),
      getById: id => findById('products', id),
      create: (data) => insert('products', { id: genId('prd'), ...data, sales: 0 }),
      update: (id, data) => update('products', id, data)
    },

    /* ── ORDERS ── */
    orders: {
      getAll: () => getAll('orders'),
      getByUser: (userId) => findWhere('orders', 'user_id', userId),
      create: (userId, productId, price) => insert('orders', { id: genId('ord'), user_id: userId, product_id: productId, price_paid: price, ordered_at: new Date().toISOString(), status: 'pending' }),
      updateStatus: (id, status) => update('orders', id, { status })
    },

    /* ── MESSAGES ── */
    messages: {
      getAll: () => getAll('messages'),
      getUnread: () => getAll('messages').filter(m => !m.is_read),
      create: (data) => insert('messages', { id: genId('msg'), ...data, received_at: new Date().toISOString(), is_read: false }),
      markRead: (id) => update('messages', id, { is_read: true }),
      delete: (id) => remove('messages', id)
    },

    /* ── ANALYTICS ── */
    analytics: {
      get: () => getObj('analytics'),
      getSiteStats: () => {
        const users = getAll('users');
        const courses = getAll('courses');
        const enrollments = getAll('enrollments');
        const orders = getAll('orders');
        return {
          total_students: users.filter(u=>u.role==='student').length,
          total_instructors: users.filter(u=>u.role==='instructor').length,
          total_courses: courses.filter(c=>c.is_published).length,
          total_enrollments: enrollments.length,
          total_orders: orders.length,
          total_revenue: enrollments.reduce((s,e)=>s+e.price_paid,0) + orders.reduce((s,o)=>s+o.price_paid,0)
        };
      }
    },

    /* ── SETTINGS ── */
    settings: {
      get: () => getObj('settings'),
      update: (data) => { const s = getObj('settings'); localStorage.setItem('cdb_settings', JSON.stringify({...s,...data})); }
    },

    /* ── UTILS ── */
    reset: () => {
      ['users','courses','enrollments','reviews','certificates','products','orders','messages','analytics','settings'].forEach(t=>localStorage.removeItem('cdb_'+t));
      localStorage.removeItem('cdb_seeded');
      localStorage.removeItem('coursili_user');
      location.reload();
    },

    exportJSON: () => {
      const data = {};
      ['users','courses','enrollments','reviews','certificates','products','orders','messages','analytics','settings'].forEach(t=>{ data[t]=JSON.parse(localStorage.getItem('cdb_'+t)||'[]'); });
      return JSON.stringify(data, null, 2);
    }
  };
})();

// Auto-init on load
CoursiliDB.init();
