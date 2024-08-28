import {z} from 'zod';

const BackendOption = z.object({
    backend_host: z.string(),
    backend_port: z.number(),
    slb_service_name: z.undefined(), // make sure another not exists
    slb_service_port: z.undefined(),
}).strict();

const SlbServiceOption = z.object({
    backend_host: z.undefined(), // make sure another not exists
    backend_port: z.undefined(),
    slb_service_name: z.string(),
    slb_service_port: z.number(),
}).strict();

const CommonFields = z.object({
    service_name: z.string(),
    block_mode: z.boolean().optional(),
    fab: z.string(),
}).strict();

// 使用 union 實現二選一邏輯
const ServiceSpecSchema = z.union([
    CommonFields.merge(BackendOption),
    CommonFields.merge(SlbServiceOption)
]);

// const ServiceSpecSchema = z.object({
//     service_name: z.string(),
//     block_mode: z.boolean().optional(),
//     fab: z.string(),
// }).and(z.union([BackendOption, SlbServiceOption]));

const WebApplicationFirewallSchema = z.object({
    kind: z.string(),
    metadata: z.object({
      labels: z.object({
        product_suite: z.string(),
      }).strict(),
    }).strict(),
    spec: z.array(ServiceSpecSchema),
}).strict();

export const validateYAML = (yaml: any) => {
    try {
        WebApplicationFirewallSchema.parse(yaml);
        console.log("YAML is valid.");
    } catch (e) {
        if (e instanceof z.ZodError) {
            console.error("YAML is invalid.", JSON.stringify(e.errors, null, 2));
          } else {
            console.error("Unexpected error:", e);
          }
    }
};
