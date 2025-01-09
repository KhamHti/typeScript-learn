interface User {
    readonly dbId: number,
    name: string,
    email: string,
    id: number,
    googleId?: string,
    startTrial(): string
    getCoupon(couponname: string, off: number): number
}

interface User {
    gitHubId: string
}

interface Admin extends User {
    role: 'admin' | "hr" | "it"
}

const twys: Admin = {
    dbId: 22,
    name: 'twys',
    email: 'admin@gmail.com',
    id: 2,
    googleId: "googleid",
    startTrial: () => {
        return 'started trial is weak'
    },
    getCoupon(couponname: 'summber', off: 12) {
        return 12
    },
    role: 'admin',
    gitHubId: 'girhub'
}

const hhk: User = {
    dbId: 22,
    name: "hhk",
    email: 'em,ail@.com',
    gitHubId: 'sadf',
    id: 12,
    startTrial: () => {
        return 'asdf'
    },
    getCoupon(couponname: 'winter-sale', off: 20) {
        return 20
    },
}

hhk.name = 'asdfasdf';
