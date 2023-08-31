import { Component, inject } from '@angular/core';
import { TableService } from './table.service';
import { TableData } from './table-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tableData: TableData[] = [];
  tableService: TableService = inject(TableService);

  status: Number = 1;
  position: Boolean = true;

  constructor() {
    this.tableData = this.tableService.getAllTableData();
  }

  onSubmit(name: String, email: String, title: String, company: String) {
    this.tableService.addTableData(
      name,
      email,
      title,
      company,
      this.status,
      this.position
    );
  }

  onDelete(email: String) {
    console.log(email);
    this.tableService.deleteTableData(email);
    this.tableData = this.tableService.getAllTableData();
  }
}
