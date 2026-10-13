CREATE TABLE `users` (
  `id` VARCHAR(30) NOT NULL,
  `full_name` VARCHAR(160) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(32) NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  UNIQUE INDEX `users_email_key` (`email`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `categories` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(80) NOT NULL,
  `slug` VARCHAR(100) NOT NULL,
  `description` VARCHAR(500) NULL,
  UNIQUE INDEX `categories_name_key` (`name`),
  UNIQUE INDEX `categories_slug_key` (`slug`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `registrations` (
  `id` VARCHAR(30) NOT NULL,
  `user_id` VARCHAR(30) NULL,
  `category_id` INTEGER NOT NULL,
  `full_name` VARCHAR(160) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(32) NOT NULL,
  `location` ENUM('LAGOS', 'AWKA') NOT NULL,
  `bio` TEXT NOT NULL,
  `image_path` VARCHAR(500) NULL,
  `status` ENUM('PENDING', 'REVIEWED', 'SHORTLISTED', 'DECLINED') NOT NULL DEFAULT 'PENDING',
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  INDEX `registrations_email_idx` (`email`),
  INDEX `registrations_status_created_at_idx` (`status`, `created_at`),
  PRIMARY KEY (`id`),
  CONSTRAINT `registrations_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `registrations_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `events` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(180) NOT NULL,
  `slug` VARCHAR(200) NOT NULL,
  `description` TEXT NOT NULL,
  `event_date` DATETIME(3) NOT NULL,
  `is_sample` BOOLEAN NOT NULL DEFAULT false,
  `location` ENUM('LAGOS', 'AWKA') NOT NULL,
  `venue` VARCHAR(180) NULL,
  `image_path` VARCHAR(500) NULL,
  `status` VARCHAR(24) NOT NULL DEFAULT 'UPCOMING',
  `category_id` INTEGER NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  UNIQUE INDEX `events_slug_key` (`slug`),
  INDEX `events_event_date_status_idx` (`event_date`, `status`),
  PRIMARY KEY (`id`),
  CONSTRAINT `events_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO `categories` (`name`, `slug`, `description`) VALUES
  ('Modeling', 'modeling', 'Runway, editorial and commercial modeling.'),
  ('Music', 'music', 'Vocal performance and music development.'),
  ('Dance', 'dance', 'Movement, choreography and dance performance.'),
  ('Acting', 'acting', 'Screen, stage and presenting talent.'),
  ('Baking', 'baking', 'Baking craft and creative enterprise.'),
  ('Makeover', 'makeover', 'Beauty, styling and makeover artistry.');

CREATE TABLE `inquiries` (
  `id` VARCHAR(30) NOT NULL,
  `full_name` VARCHAR(160) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(32) NULL,
  `subject` VARCHAR(180) NOT NULL,
  `message` TEXT NOT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  INDEX `inquiries_created_at_idx` (`created_at`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
