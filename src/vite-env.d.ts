/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
    readonly API_KEY: string;
    readonly AUTH_DOMAIN: string;
    readonly PROJECT_ID: string;
    readonly STORAGE_BUCKET: string;
    readonly MESSSAGING_SENDER_ID: string;
    readonly APP_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}