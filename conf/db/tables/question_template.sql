CREATE TABLE question_template
(
  id bigint NOT NULL DEFAULT id_generator(),
  name text,
  questions jsonb,
  CONSTRAINT question_template_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
