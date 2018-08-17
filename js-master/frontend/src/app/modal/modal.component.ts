import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject, Component, OnInit } from '@angular/core';

@Component({
	selector: 'modal-component',
	templateUrl: 'modal-component.html'
})
export class EjemploDialogo implements OnInit {
	nombre: string = '';
	ngOnInit(): void {
		this.nombre = this.data.nombre;
	}

	constructor(public dialogRef: MatDialogRef<EjemploDialogo>, @Inject(MAT_DIALOG_DATA) public data) {}

	cerrar(): void {
		this.dialogRef.close({ nombre: this.nombre });
	}
}
