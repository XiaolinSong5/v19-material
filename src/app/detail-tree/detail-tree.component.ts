import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatOptionModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-detail-tree',
  imports: [MatIconModule,
    MatFormFieldModule,
MatOptionModule,
    MatAutocompleteModule,
    ReactiveFormsModule

  ],
  templateUrl: './detail-tree.component.html',
  styleUrl: './detail-tree.component.css'
})
export class DetailTreeComponent implements OnInit, OnDestroy{
  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
      throw new Error('Method not implemented.');
  }
  @Input() searchLabel!: string;
  filteredOptions?: string[] = [];
  searchInTree?: FormControl = new FormControl('');


}
