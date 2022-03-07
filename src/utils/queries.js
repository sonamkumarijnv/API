export const createMessageTable = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR UNIQUE,
  designation VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
  )
  `;

export const insertMessages = `
INSERT INTO messages(name, designation, message)
VALUES ('jay prakash', 'Devops', 'Entory level'),
      ('sonam singh', 'Senior SE' ,'Two Year IN Org'),
      ('deepak singh gautam', 'Lead', 'Seven year in Org')
`;

export const dropMessagesTable = 'DROP TABLE messages';
