export interface Alert{
    headline: string,
    msgtype: string,
    severity: string,
    urgency: string,
}

export class Alert {
    constructor(
        public headline: string,
        public msgtype: string,
        public severity: string,
        public urgency: string
    ){}
}