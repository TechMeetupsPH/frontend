export class XHRStuckModel {

    private activeXHRs = [];

    push(xhr): number {
        const newLength = this.activeXHRs.push(xhr);
        return newLength;
    }

    pop(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        else {
            this.activeXHRs.splice(this.activeXHRs.length - 1, 1);
            return true;
        }
    }

    isEmpty(): boolean {
        return this.activeXHRs.length == 0;
    }

    cleanStuck(): void{
        this.activeXHRs = [];
    }
}
