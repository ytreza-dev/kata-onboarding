import {describe, expect, it} from 'vitest';

// brancher express
// gestion de ts
// test d'un controller qui renvoi ok

// todo verifier que je recois une confirmation de reservation OK (quand la plce est libre)
// todo verifier que la place est reservé (que ca a mis ma place en statut reservé ? )

interface SeatRepoInterface {
  book(seat: string): void
}

class SeatRepo {

  seats: string[] = [];

  feed(seatsToFeed: string[]) {
    this.seats = seatsToFeed;
  }

  book(seat: string) {
    this.seats.push(seat);
  }
}

class BookSeatUseCase {
  constructor(private seatRepo: SeatRepo) {
  }

  public execute(seats: string[]): string {
    for (const seat of seats) {
      if (!this.isValidSeat(seat)) {
        return "ko"
      }

      if (this.seatRepo.seats.includes(seat)) {
        return 'ko';
      }
    }

    for (const seat of seats) {
      this.seatRepo.book(seat);
    }

    return 'ok';
  }

  private isValidSeat(seat: string) {
    const regex = /^[a-r]([0-9]{1,2})$/;

    const match = regex.exec(seat);
    if (!match) {
      return false;
    }

    const seatNumber = +match[1];
    return !(seatNumber >= 23 || seatNumber === 0);
  }
}

describe('Book Seat', () => {
  it('should book an empty and specific seat', () => {
    //GIVEN
    const seatRepo = new SeatRepo();
    const bookSeatUseCase = new BookSeatUseCase(seatRepo);

    //WHEN
    const result = bookSeatUseCase.execute(['a1']);

    //THEN
    expect(result).toBe('ok');
    expect(seatRepo.seats).toEqual(['a1']);
  });

  it('should book several seats', () => {
    //GIVEN
    const seatRepo = new SeatRepo();
    const bookSeatUseCase = new BookSeatUseCase(seatRepo);

    //WHEN
    const result = bookSeatUseCase.execute(['a1', 'a2']);

    //THEN
    expect(result).toBe('ok');
    expect(seatRepo.seats).toEqual(['a1', 'a2']);
  });

  it('should return a KO if a seat is already taken', () => {
    //GIVEN
    const seatRepo = new SeatRepo();
    const bookSeatUseCase = new BookSeatUseCase(seatRepo);
    seatRepo.feed(['a1']);

    //WHEN
    const result = bookSeatUseCase.execute(['a1']);

    //THEN
    expect(result).toBe('ko');
  });

  it('should return a KO if any seat is already taken', () => {
    //GIVEN
    const seatRepo = new SeatRepo();
    const bookSeatUseCase = new BookSeatUseCase(seatRepo);
    seatRepo.feed(['a2']);

    //WHEN
    const result = bookSeatUseCase.execute(['a1', 'a2']);

    //THEN
    expect(result).toBe('ko');
    expect(seatRepo.seats).toEqual(['a2']);
  });

  it.each(['a23', 'a24', 's5', '3', 't5', 'b', 'a0', 'aa', 'a2.5'])('should return a KO if seat does %s not exist', (seat) => {
    //GIVEN
    const seatRepo = new SeatRepo();
    const bookSeatUseCase = new BookSeatUseCase(seatRepo);

    //WHEN
    const result = bookSeatUseCase.execute([seat]);

    //THEN
    expect(result).toBe('ko');
    expect(seatRepo.seats).toEqual([]);
  });
});
