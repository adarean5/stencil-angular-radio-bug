import {Component, DestroyRef, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {takeUntil} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    customRadio: new FormControl('option-1'),
    nativeRadio: new FormControl('option-1'),
  })


  constructor(private dr: DestroyRef) {}

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntilDestroyed(this.dr)).subscribe((changes) => {
      console.log("Form control value changes", changes)
    })
  }

  onSubmit() {
    console.log("On submit", this.form.value)
  }
}
