export interface release {
    kind: string;
    metadata: {
        labels: {
            product_suite: string;
        };
    };
    spec: service[];
}

export type service = {
    service_name: string;
    backend_ip: string;
    backend_port: number;
    block_mode: boolean;
    fab: string;
}
