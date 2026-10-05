CREATE TABLE public.audit_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  revenue text NOT NULL,
  team_size text NOT NULL,
  bottleneck text NOT NULL,
  timeline text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.audit_leads TO service_role;
ALTER TABLE public.audit_leads ENABLE ROW LEVEL SECURITY;