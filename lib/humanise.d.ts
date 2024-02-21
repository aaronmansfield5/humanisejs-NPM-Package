declare module 'humanisejs' {
    interface humanise {
        humanise(selector: import('puppeteer').Browser): Promise<Boolean>;
    }
}

declare module 'puppeteer' {
    interface Page {
        humanType(selector: string, text: string, cursor: import('ghost-cursor').GhostCursor): Promise<void>;
    }
}
