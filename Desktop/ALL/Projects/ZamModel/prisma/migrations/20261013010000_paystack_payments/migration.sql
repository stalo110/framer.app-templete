ALTER TABLE `events`
  ADD COLUMN `registration_fee_kobo` INTEGER UNSIGNED NULL;

CREATE TABLE `payments` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `reference` VARCHAR(100) NOT NULL,
  `event_id` INTEGER NULL,
  `registration_id` VARCHAR(30) NULL,
  `email` VARCHAR(255) NOT NULL,
  `amount_kobo` INTEGER UNSIGNED NOT NULL,
  `currency` CHAR(3) NOT NULL DEFAULT 'NGN',
  `status` ENUM('PENDING', 'SUCCESS', 'FAILED') NOT NULL DEFAULT 'PENDING',
  `gateway_transaction_id` VARCHAR(100) NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `paid_at` DATETIME(3) NULL,
  UNIQUE INDEX `payments_reference_key` (`reference`),
  UNIQUE INDEX `payments_gateway_transaction_id_key` (`gateway_transaction_id`),
  INDEX `payments_event_id_status_idx` (`event_id`, `status`),
  INDEX `payments_registration_id_status_idx` (`registration_id`, `status`),
  PRIMARY KEY (`id`),
  CONSTRAINT `payments_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `payments_registration_id_fkey` FOREIGN KEY (`registration_id`) REFERENCES `registrations` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `payments_checkout_target_check` CHECK ((`event_id` IS NULL) <> (`registration_id` IS NULL))
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
