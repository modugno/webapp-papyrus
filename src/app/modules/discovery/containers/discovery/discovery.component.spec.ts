import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { asapScheduler, of } from 'rxjs';
import { DiscoveryComponent } from './discovery.component';
import { DiscoveryService } from '../../shared/services/discovery.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { _discovery, responseMultiDiscoveries, responseSingleDiscovery } from '../../shared/mock/discovery-mock';

fdescribe('DiscoveryComponent', () => {
  let component: DiscoveryComponent;
  let fixture: ComponentFixture<DiscoveryComponent>;
  const discoveryServiceStub: jasmine.SpyObj<DiscoveryService> = createDiscoveryService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [
        DiscoveryComponent
      ],
      providers: [
        { provide: DiscoveryService, useValue: discoveryServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    resetDiscoveryService(discoveryServiceStub);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call some functions on init', () => {
    spyOn(component, '_observableSearch');
    spyOn(component, '_getAll');
    spyOn(component, '_createForm');

    component.ngOnInit();

    expect(component._observableSearch).toHaveBeenCalled();
    expect(component._getAll).toHaveBeenCalled();
    expect(component._createForm).toHaveBeenCalled();
  });
  
  it(`should returns all discoveries in ${DiscoveryService.name}.getAll`, () => {
    expect(discoveryServiceStub.getAll).toHaveBeenCalledTimes(1);
  });

  it(`should createForm`, () => {
    expect(component.formGroup).toBeTruthy();
    expect(component.formGroup).toEqual(jasmine.any(FormGroup))
  });

  it('should create a discovery', fakeAsync(() => {
    component._create(_discovery);
    tick();
    expect(discoveryServiceStub.save).toHaveBeenCalledTimes(1);
    expect(discoveryServiceStub.save).toHaveBeenCalledWith(_discovery);
  }));

  it('should update a discovery', fakeAsync(() => {
    const newDiscovery = { ..._discovery, title: 'Atualizando o valor' };
    
    component._update(newDiscovery);
    tick();
    
    expect(discoveryServiceStub.update).toHaveBeenCalledTimes(1);
    expect(discoveryServiceStub.update).not.toHaveBeenCalledWith(_discovery._id, _discovery);
    expect(discoveryServiceStub.update).toHaveBeenCalledWith(newDiscovery._id, newDiscovery);

    fixture.whenStable().then(() => {
      expect(newDiscovery).toEqual(component.collectionData.find((x) => x._id === newDiscovery._id));
    });
  }));

  it('should delete a discovery', fakeAsync(() => {
    component.onRemove(_discovery);
    tick();

    expect(discoveryServiceStub.delete).toHaveBeenCalledTimes(1);
    expect(discoveryServiceStub.delete).toHaveBeenCalledWith(_discovery._id);

    const { result: discoveries } = responseMultiDiscoveries();

    fixture.whenStable().then(() => {
      expect(component.collectionData).toEqual(discoveries.filter((x) => x._id !== _discovery._id))
    });

  }));


});

function createDiscoveryService(): jasmine.SpyObj<DiscoveryService> {
  const stub: jasmine.SpyObj<DiscoveryService> = jasmine.createSpyObj(
    DiscoveryService.name,
    [
      'getAll',
      'getById',
      'save',
      'update',
      'delete'
    ]
  );
  
  resetDiscoveryService(stub);

  return stub;
}

function resetDiscoveryService(stub: jasmine.SpyObj<DiscoveryService>) {

  stub.getAll
  .and.returnValue(of(responseMultiDiscoveries(), asapScheduler))
  .calls.reset();

  stub.getById
  .and.callFake((_id) => of(responseSingleDiscovery(_discovery), asapScheduler))
  .calls.reset();

  stub.save
  .and.callFake((discovery) => of(responseSingleDiscovery(discovery), asapScheduler))
  .calls.reset();

  stub.update
  .and.callFake((discovery) => of(responseSingleDiscovery(discovery), asapScheduler))
  .calls.reset();

  stub.delete
  .and.callFake((_id: string) => of(responseSingleDiscovery(_discovery), asapScheduler))
  .calls.reset();
}
