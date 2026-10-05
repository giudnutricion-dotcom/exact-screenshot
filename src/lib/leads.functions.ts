import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(40),
  revenue: z.string().min(1).max(60),
  team_size: z.string().min(1).max(60),
  bottleneck: z.string().min(1).max(120),
  timeline: z.string().min(1).max(60),
  website: z.string().max(0).optional(), // honeypot
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { website: _hp, ...row } = data;
    const { error } = await supabaseAdmin.from("audit_leads").insert(row);
    if (error) throw new Error("Could not save your request. Please try again.");
    return { ok: true };
  });
