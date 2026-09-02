import { query } from "./mysql";

export async function initializeDatabase() {
  console.log("Initializing MySQL Database Schema (Phase 1)...");

  // 1. Categories Table
  await query(`
    CREATE TABLE IF NOT EXISTS categories (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL UNIQUE,
      slug VARCHAR(100) NOT NULL UNIQUE,
      description TEXT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);

  // 2. Tags Table
  await query(`
    CREATE TABLE IF NOT EXISTS tags (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL UNIQUE,
      slug VARCHAR(100) NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);

  // 3. Blogs Table
  await query(`
    CREATE TABLE IF NOT EXISTS blogs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      excerpt TEXT NULL,
      summary TEXT NULL,
      content LONGTEXT NULL,
      cover_image VARCHAR(500) NULL,
      category_id INT NULL,
      status ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
      seo_title VARCHAR(255) NULL,
      meta_description TEXT NULL,
      focus_keyword VARCHAR(255) NULL,
      canonical_url VARCHAR(500) NULL,
      og_title VARCHAR(255) NULL,
      og_description TEXT NULL,
      og_image VARCHAR(500) NULL,
      robots VARCHAR(100) DEFAULT 'index, follow',
      schema_type VARCHAR(100) DEFAULT 'BlogPosting',
      reading_time VARCHAR(50) DEFAULT '5 min read',
      featured TINYINT(1) DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      published_at TIMESTAMP NULL DEFAULT NULL,
      CONSTRAINT fk_blogs_category FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE SET NULL ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);

  // 4. Blog Tags Table
  await query(`
    CREATE TABLE IF NOT EXISTS blog_tags (
      blog_id INT NOT NULL,
      tag_id INT NOT NULL,
      PRIMARY KEY (blog_id, tag_id),
      CONSTRAINT fk_blog_tags_blog FOREIGN KEY (blog_id) REFERENCES blogs (id) ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT fk_blog_tags_tag FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);

  // 5. FAQs Table
  await query(`
    CREATE TABLE IF NOT EXISTS faqs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      blog_id INT NOT NULL,
      question VARCHAR(500) NOT NULL,
      answer TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT fk_faqs_blog FOREIGN KEY (blog_id) REFERENCES blogs (id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);

  // 6. Enquiries Table
  await query(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NULL,
      email VARCHAR(255) NULL,
      service VARCHAR(255) NULL,
      message TEXT NULL,
      source VARCHAR(255) NULL,
      ip_address VARCHAR(100) NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);

  // Seed default categories
  const categories = [
    ["Income Tax", "income-tax", "Guides on ITR filing, tax slabs, capital gains, and deductions."],
    ["GST", "gst", "Goods and Services Tax registration, returns, ITC, and compliance."],
    ["Company Registration", "company-registration", "Private Limited, LLP, OPC, and Section 8 company incorporation."],
    ["ROC", "roc", "Annual MCA returns, DIR-3 KYC, AOC-4, and secretarial compliance."],
    ["Accounting", "accounting", "Bookkeeping, financial audit, balance sheet preparation, and CFO services."],
    ["Trademark", "trademark", "Brand name, logo registration, IP search, and objection filing."],
    ["MSME", "msme", "Udyam registration benefits, government subsidies, and collateral-free loans"]
  ];

  for (const [name, slug, desc] of categories) {
    await query(
      `INSERT INTO categories (name, slug, description) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE description = VALUES(description)`,
      [name, slug, desc]
    );
  }

  console.log("Database initialized successfully!");
}
