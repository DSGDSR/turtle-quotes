import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Template', () => {

  })

  describe('Methods', () => {
    describe('onClick', () => {
      it('should call onClick function when button is clicked', () => {
        const onClickSpy = jest.spyOn(component, 'onClick');
        const buttonElement = document.querySelector('.button') as HTMLButtonElement
        buttonElement.click()

        expect(onClickSpy).toHaveBeenCalled()
      })

      it('should emit action output when onClick funtion is called', () => {
        const actionEmitSpy = jest.spyOn(component.action, 'emit');
        component.onClick()

        expect(actionEmitSpy).toHaveBeenCalled()
      })
    })
  })
});
