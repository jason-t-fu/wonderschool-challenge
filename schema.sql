
CREATE TABLE IF NOT EXISTS task_groups(
  id SERIAL,
  "group" VARCHAR(50) NOT NULL,
  UNIQUE ("group"),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tasks(
  id SERIAL,
  task VARCHAR(50) NOT NULL,
  completed_at TIMESTAMP,
  group_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (group_id) REFERENCES task_groups(id) ON DELETE CASCADE
);

CREATE INDEX ON tasks (group_id);

CREATE TABLE IF NOT EXISTS dependent_tasks(
  id SERIAL,
  parent_id INT NOT NULL,
  child_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (parent_id) REFERENCES tasks(id) ON DELETE CASCADE,
  FOREIGN KEY (child_id) REFERENCES tasks(id) ON DELETE CASCADE
);

CREATE INDEX ON dependent_tasks (parent_id);

CREATE INDEX ON dependent_tasks (child_id);
