class Airways {

    public static readonly custname: string="vijaya";
    public static seatno: number;

    constructor(seat: number) {
        Airways.seatno = seat;
    }

    public static display(): void {
        console.log(`Welcome to the Airways Ms. ${Airways.custname}`);
    }
}

const a = new Airways(1);
Airways.display();