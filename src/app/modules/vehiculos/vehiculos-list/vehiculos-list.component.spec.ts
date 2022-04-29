import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { VehiculosListComponent } from './vehiculos-list.component';
import {Vehiculo} from "../model/vehiculo";
import {faker} from "@faker-js/faker";
import {By} from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {VehiculoService} from "../service/vehiculo.service";

describe('VehiculosListComponent', () => {
  let component: VehiculosListComponent;
  let fixture: ComponentFixture<VehiculosListComponent>;
  let debug: DebugElement;
  let testVehiculos: Vehiculo[] = [
    new Vehiculo(
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.image.imageUrl(),
    ),
    new Vehiculo(
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.image.imageUrl(),
    ),
    new Vehiculo(
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.lorem.word(10),
      faker.datatype.number(),
      faker.lorem.word(10),
      faker.image.imageUrl(),
    )
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculosListComponent ],
      providers: [ VehiculoService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    VehiculosListComponent.prototype.ngOnInit = () => {} ;
    fixture = TestBed.createComponent(VehiculosListComponent);
    component = fixture.componentInstance;
    component.vehiculos = testVehiculos;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  })

  it('should create vehiculos', () => {
    expect(component.vehiculos).toEqual(testVehiculos);
    expect(component.vehiculos.length).toEqual(3);
  })

  it('should test the table ', (done) => {

    fixture.detectChanges();
    fixture.whenStable().then(
      () => {
        fixture.detectChanges(); // missed

        let tableRows = fixture.nativeElement.querySelectorAll('tr');
        // Validar listado de (3) vehiculos + 1 (encabezado) - Length = 4
        expect(tableRows.length).toEqual(4);

        // Validar encabezado
        let headerRow = tableRows[0];
        expect(headerRow.cells[0].innerHTML).toEqual('#');
        expect(headerRow.cells[1].innerHTML).toEqual('Marca');
        expect(headerRow.cells[2].innerHTML).toEqual('Línea');
        expect(headerRow.cells[3].innerHTML).toEqual('Modelo');

        // Validar primera fila contiene información del vehiculo 1
        let row1 = tableRows[1];
        expect(row1.cells[0].innerHTML).toEqual(testVehiculos[0].id.toString());
        expect(row1.cells[1].innerHTML).toEqual(testVehiculos[0].marca);
        expect(row1.cells[2].innerHTML).toEqual(testVehiculos[0].linea);
        expect(row1.cells[3].innerHTML).toEqual(testVehiculos[0].modelo);

        done();
      }
    );

  });

});
