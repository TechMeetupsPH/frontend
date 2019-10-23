interface IDate{
  /** expects a Date object */
  toShortString(param: object): string;
}

export class Meetup implements IDate {
  id: number;
  title: string;
  description: string;
  agenda: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  organizer: string;
  communityName: string;

  constructor(id: number,
              title: string,
              description: string,
              agenda: string,
              startDate: string,
              startTime: string,
              endDate: string,
              endTime: string,
              organizer: string,
              communityName: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.agenda = agenda;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endDate = endDate;
    this.endTime = endTime;
    this.organizer = organizer;
    this.communityName = communityName;

  }

  toShortString(dateObject: any) {
    // tslint:disable-next-line: whitespace
    let stringDate = '';
    try {
      const aDate = dateObject.toISOString();
      stringDate = aDate.substring(0, 10);
    } catch(error) {
      throw Error(error);
    }

    return stringDate;
  }
}
