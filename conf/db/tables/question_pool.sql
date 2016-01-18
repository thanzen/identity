CREATE TABLE question_pool
(
  id bigint NOT NULL DEFAULT id_generator(),
  name text,
  categories jsonb,
  CONSTRAINT question_pool_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE question_pool
  OWNER TO postgres;
