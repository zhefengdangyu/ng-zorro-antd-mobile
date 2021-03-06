import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagePickerModule } from './image-picker.module';
<<<<<<< HEAD
import { ImagePicker } from './image-picker.component';
=======
import { ImagePickerComponent } from './image-picker.component';
>>>>>>> upstream/master

const data = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
  }
];

describe('ImagePicker', () => {
  let component: TestImagePickerComponent;
  let fixture: ComponentFixture<TestImagePickerComponent>;
  let ImagePickers;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ImagePickerModule],
      declarations: [TestImagePickerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImagePickerComponent);
    component = fixture.componentInstance;
    ImagePickers = fixture.debugElement.query(By.css('ImagePicker'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should imageClick work', () => {
    const imageDiv = ImagePickers.nativeElement.querySelector('.am-image-picker-item-content');
    imageDiv.click();
    expect(component.imageClickCallback).toHaveBeenCalled();
  });

  it('should imageChange work', () => {
    const removeDiv = ImagePickers.nativeElement.querySelector('.am-image-picker-item-remove');
    removeDiv.click();
    fixture.detectChanges();
    expect(component.imageChangeCallback).toHaveBeenCalled();
  });

  it('should selectable work', () => {
    const inputBtn = ImagePickers.nativeElement.querySelector('input[type=file]');
    expect(inputBtn).toBeTruthy();
    expect(component.imagePicker.selectable).toBe(component.selectable);
  });

  it('should addImageClick work', () => {
    const inputBtn = ImagePickers.nativeElement.querySelector('input[type=file]');
    inputBtn.click();
    fixture.detectChanges();
    expect(component.files.length).toBe(3);
  });

  it('fileChange work', () => {
    const inputBtn = ImagePickers.nativeElement.querySelector('input[type=file]');
    spyOn(component.imagePicker, 'fileChange');
    inputBtn.dispatchEvent(new Event('change'));
    expect(component.imagePicker.fileChange).toHaveBeenCalled();
<<<<<<< HEAD
  });

  it('parseFile work', () => {
    const mockFile = new File([''], 'filename', { type: 'image/png' });
    const mockEvt = { target: { files: [mockFile] } };
    const mockOnLoadEvt = { target: { result: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg' } };
    const mockReader: FileReader = jasmine.createSpyObj('FileReader', ['readAsDataURL', 'onload', 'readAsArrayBuffer']);
    spyOn(window as any, 'FileReader').and.returnValue(mockReader);
    component.imagePicker.fileChange(mockEvt as any);
    mockReader.onload(mockOnLoadEvt as any);

    expect((window as any).FileReader).toHaveBeenCalled();
    expect(mockReader.readAsDataURL).toHaveBeenCalledWith(mockFile);
  });

  it('getOrientation work', () => {
    const mockOnLoadEvt = { target: { result: new ArrayBuffer(100) } };
    const mockReader: FileReader = jasmine.createSpyObj('FileReader', ['readAsDataURL', 'onload', 'readAsArrayBuffer']);
    const mockCallback = (num) => num;
    const mockFile = new File([''], 'filename', { type: 'image/png' });
    spyOn(window as any, 'FileReader').and.returnValue(mockReader);
    mockReader.onload(mockOnLoadEvt as any);
    component.imagePicker.getOrientation(mockFile, mockCallback)
=======
  });

  it('parseFile work', () => {
    const mockFile = new File([''], 'filename', { type: 'image/png' });
    const mockEvt = { target: { files: [mockFile] } };
    const mockOnLoadEvt = { target: { result: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg' } };
    const mockReader: FileReader = jasmine.createSpyObj('FileReader', ['readAsDataURL', 'onload', 'readAsArrayBuffer']);
    spyOn(window as any, 'FileReader').and.returnValue(mockReader);
    component.imagePicker.fileChange(mockEvt as any);
    mockReader.onload(mockOnLoadEvt as any);

    expect((window as any).FileReader).toHaveBeenCalled();
    expect(mockReader.readAsDataURL).toHaveBeenCalledWith(mockFile);
  });

  it('getOrientation work', () => {
    const mockOnLoadEvt = { target: { result: new ArrayBuffer(100) } };
    const mockReader: FileReader = jasmine.createSpyObj('FileReader', ['readAsDataURL', 'onload', 'readAsArrayBuffer']);
    const mockCallback = num => num;
    const mockFile = new File([''], 'filename', { type: 'image/png' });
    spyOn(window as any, 'FileReader').and.returnValue(mockReader);
    mockReader.onload(mockOnLoadEvt as any);
    component.imagePicker.getOrientation(mockFile, mockCallback);
>>>>>>> upstream/master

    expect((window as any).FileReader).toHaveBeenCalled();
    expect(mockReader.readAsArrayBuffer).toHaveBeenCalled();
  });

  it('addImage work', () => {
    const mockItem = {
<<<<<<< HEAD
      'url': 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      'orientation': 0
=======
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      orientation: 0
>>>>>>> upstream/master
    };
    component.imagePicker.addImage(mockItem);
    expect(component.imageChangeCallback).toHaveBeenCalled();
  });

  it('getRotation work', () => {
    expect(component.imagePicker.getRotation(1)).toBe(0);
    expect(component.imagePicker.getRotation(3)).toBe(180);
    expect(component.imagePicker.getRotation(6)).toBe(90);
    expect(component.imagePicker.getRotation(8)).toBe(270);
    expect(component.imagePicker.getRotation(2)).toBe(0);
  });

  it('should length work', () => {
    expect(component.imagePicker.length).toBe(3);
    component.len = -1;
    fixture.detectChanges();
    expect(component.imagePicker.length).toBe(4);
  });

<<<<<<< HEAD

=======
>>>>>>> upstream/master
  it('should files work', () => {
    const imageDiv = ImagePickers.nativeElement.querySelector('.am-image-picker-item-content');
    expect(imageDiv.style['background-image']).toBe(
      'url("https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg")'
    );
    expect(component.imagePicker.files.length).toBe(2);
  });
});

@Component({
  selector: 'test-image-picker-child',
  template: `
<<<<<<< HEAD
    <ImagePicker [files]="files"
                 [multiple]="multiple"
                 [selectable]="selectable"
                 [length]="len"
                 [accept]="'image/gif,image/jpeg,image/jpg,image/png'"
                 (onChange)="imageChangeCallback($event)"
                 (onImageClick)="imageClickCallback($event)"
                 (onAddImageClick)="addImageClick($event)"
=======
    <ImagePicker
      [length]="len"
      [files]="files"
      [multiple]="multiple"
      [selectable]="selectable"
      [accept]="'image/gif,image/jpeg,image/jpg,image/png'"
      (onChange)="imageChangeCallback($event)"
      (onAddImageClick)="addImageClick($event)"
      (onImageClick)="imageClickCallback($event)"
>>>>>>> upstream/master
    >
    </ImagePicker>
  `
})
<<<<<<< HEAD
export class TestImagePicker {
=======
export class TestImagePickerComponent {
>>>>>>> upstream/master
  files = data.slice(0);
  multiple = true;
  selectable = true;
  len = 3;
<<<<<<< HEAD
  @ViewChild(ImagePicker) imagePicker: ImagePicker;
=======
  @ViewChild(ImagePickerComponent) imagePicker: ImagePickerComponent;
>>>>>>> upstream/master
  imageChangeCallback = jasmine.createSpy('imageChangeCallback is callback');
  imageClickCallback = jasmine.createSpy('imageClickCallback is callback');

  constructor() {
  }

  addImageClick(e) {
    e.preventDefault();
    this.files = this.files.concat({
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
    });
  }
}
