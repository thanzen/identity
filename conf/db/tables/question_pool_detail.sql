CREATE TABLE question_pool_detail
(
  id bigint NOT NULL DEFAULT id_generator(),
  options jsonb,
  input_type text,
  help text,
  name text,
  sub_text text,
  CONSTRAINT question_pool_detail_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
