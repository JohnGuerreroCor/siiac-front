import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  setMinutes,
  setHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { OnInit, Inject, ElementRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import { AuthService } from 'src/app/services/auth.service';
import { InstitucionService } from 'src/app/services/institucion.service';
import { CabecerasCentrosPoblados } from 'src/app/models/cabeceras-centros-poblados';
import { SedeTipo } from 'src/app/models/sede-tipo';
import { Sede } from 'src/app/models/sede';
import { SedeService } from 'src/app/services/sede.service';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})
export class ReservaComponent {
  constructor(public dialog: MatDialog) {}
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  locale: string = 'es';

  dialogRef!: MatDialogRef<any>;

  viewDate: Date = new Date();

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt fa-1x text-white"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {},
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt fa-1x text-white"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    {
      start: setMinutes(setHours(new Date(), 21), 0), // 9:00 PM 0074d9
      end: setMinutes(setHours(new Date(), 23), 0), // 11:00 PM FFF5E1
      title: 'Sala uno',
      color: { primary: '#0074d9', secondary: '#0074d9' },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: setMinutes(setHours(new Date(), 23), 0), // 9:00 PM 0074d9
      end: setMinutes(setHours(new Date(), 24), 0), // 11:00 PM FFF5E1
      title: 'Sala uno',
      color: { primary: '#009640', secondary: '#009640' },
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    /* {
      start: startOfDay(new Date()),
      title: 'Sala dos',
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'Sala tres',
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'Sala cuatro',
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    }, */
  ];

  activeDayIsOpen: boolean = true;

  registrarFormulario(): void {
    this.dialogRef = this.dialog.open(ModalFormularioReserva, {
      width: '70%',
      disableClose: true,
    });
    this.dialogRef.afterClosed().subscribe(() => {
      this.onModalClosed();
    });
  }

  editarFormulario(element: any): void {
    this.dialogRef = this.dialog.open(ModalFormularioReserva, {
      width: '70%',
      disableClose: true,
      data: { sede: element },
    });
    this.dialogRef.afterClosed().subscribe(() => {
      this.onModalClosed();
    });
  }

  onModalClosed() {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}

//// MODAL FORMULARIO

@Component({
  selector: 'modal-formulario-reserva',
  templateUrl: './modal-formulario-reserva.html',
  styleUrls: ['./reserva.component.css'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { subscriptSizing: 'dynamic' },
    },
  ],
})
export class ModalFormularioReserva {
  editar: boolean = false;
  formSede!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalFormularioReserva>,
    private formBuilder: FormBuilder,
    public ubicacionService: UbicacionService,
    public institucionService: InstitucionService,
    public sedeService: SedeService,
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.authService.validacionToken()) {
      this.crearFormSede();
      if (JSON.stringify(data) !== 'null') {
        this.editarSede(data.sede);
        console.log('Entra');
      } else {
        console.log('No entra');
      }
    }
  }

  private crearFormSede(): void {
    this.formSede = this.formBuilder.group({
      codigo: new FormControl(''),
      nit: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      pais: new FormControl('', Validators.required),
      departamento: new FormControl('', Validators.required),
      municipio: new FormControl('', Validators.required),
      ccp: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      estado: new FormControl(''),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  generarSede(): void {
    let sede: Sede = new Sede();
    sede.codigo = this.formSede.get('codigo')!.value;
    sede.nit = this.formSede.get('nit')!.value;
    sede.nombre = this.formSede.get('nombre')!.value;
    let ccp: CabecerasCentrosPoblados = new CabecerasCentrosPoblados();
    ccp.divipola = this.formSede.get('ccp')!.value;
    sede.ccp = ccp;
    sede.direccion = this.formSede.get('direccion')!.value;
    sede.telefono = this.formSede.get('telefono')!.value;
    let tipo: SedeTipo = new SedeTipo();
    tipo.codigo = this.formSede.get('tipo')!.value;
    sede.sedeTipo = tipo;
    sede.estado = this.formSede.get('estado')!.value;
    if (this.editar) {
      this.actualizarSede(sede);
    } else {
      this.registrarSede(sede);
    }
  }

  registrarSede(sede: Sede) {
    this.sedeService.registrarSede(sede).subscribe(
      (data) => {
        if (data > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Registrado',
            text: '¡Operación exitosa!',
            showConfirmButton: false,
            timer: 2500,
          });
          this.cancelar();
          this.dialogRef.close();
          this.crearFormSede();
        } else {
          this.mensajeError();
        }
      },
      (err) => this.fError(err)
    );
  }

  actualizarSede(sede: Sede) {
    this.sedeService.actualizarSede(sede).subscribe(
      (data) => {
        if (data > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Actualizado',
            text: '¡Operación exitosa!',
            showConfirmButton: false,
          });
          this.dialogRef.close();
          this.cancelar();
        } else {
          this.mensajeError();
        }
      },
      (err) => this.fError(err)
    );
  }

  editarSede(element: Sede) {
    this.editar = true;
    this.formSede.get('codigo')!.setValue(element.codigo);
    this.formSede.get('nit')!.setValue(element.nit);
    this.formSede.get('nombre')!.setValue(element.nombre);
    this.formSede.get('pais')!.setValue(element.pais.codigo);
    this.formSede.get('departamento')!.setValue(element.departamento.divipola);
    this.formSede.get('municipio')!.setValue(element.municipio.divipola);
    this.formSede.get('ccp')!.setValue(element.ccp.divipola);
    this.formSede.get('direccion')!.setValue(element.direccion);
    this.formSede.get('telefono')!.setValue(element.telefono);
    this.formSede.get('tipo')!.setValue(element.sedeTipo.codigo);
    this.formSede.get('estado')!.setValue(element.estado);
  }

  cancelar() {
    this.formSede.reset();
    this.crearFormSede();
    this.editar = false;
  }

  mensajeSuccses() {
    Swal.fire({
      icon: 'success',
      title: 'Proceso realizado',
      text: '¡Operación exitosa!',
      showConfirmButton: false,
      timer: 2500,
    });
  }

  mensajeError() {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo completar el proceso.',
      showConfirmButton: true,
      confirmButtonText: 'Listo',
      confirmButtonColor: '#8f141b',
    });
  }

  fError(er: any): void {
    let err = er.error.error_description;
    let arr: string[] = err.split(':');
    if (arr[0] == 'Access token expired') {
      this.authService.logout();
      this.router.navigate(['login']);
    } else {
      this.mensajeError();
    }
  }
}
