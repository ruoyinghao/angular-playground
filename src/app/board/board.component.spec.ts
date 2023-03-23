import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start a new game', () => {
    component.newGame();
    expect(component.squares.length).toBe(9);
    expect(component.xIsNext).toBeTrue();
    expect(component.winner).toBeNull();
  });

  it('should return the correct player', () => {
    component.xIsNext = true;
    expect(component.player).toBe('O');
    component.xIsNext = false;
    expect(component.player).toBe('X');
  });

  it('should make a move and calculate winner', () => {
    component.newGame();
    component.makeMove(0);
    expect(component.squares[0]).toBe('O');
    expect(component.xIsNext).toBeFalse();
    expect(component.winner).toBeNull();
    component.makeMove(1);
    component.makeMove(3);
    component.makeMove(4);
    component.makeMove(6);
    expect(component.winner).toBe('O');
  });

  it('should not allow a move if the square is already occupied', () => {
    component.newGame();
    component.makeMove(0);
    component.makeMove(0);
    expect(component.squares[0]).toBe('O');
    expect(component.xIsNext).toBeFalse();
  });

  it('should return null if there is no winner', () => {
    component.xIsNext = true;
    component.newGame();
    expect(component.calcWinner()).toBeNull();
    component.makeMove(0);
    component.makeMove(1);
    component.makeMove(3);
    component.makeMove(4);
    component.makeMove(6);
    component.makeMove(7);
    component.makeMove(2);
    component.makeMove(5);
    component.makeMove(8);
    expect(component.calcWinner()).toBe('O');
  });
});
