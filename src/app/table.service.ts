import { Injectable } from '@angular/core';
import { TableData } from './table-data';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  data: TableData[] = [
    {
      avatar: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      title: 'Software engineer',
      company: 'IT Department',
      status: 1,
      position: true,
    },
    {
      avatar: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
      name: 'Alex Ray',
      email: 'alex.ray@gmail.com',
      title: 'Consultant',
      company: 'Finance',
      status: 2,
      position: false,
    },
    {
      avatar: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
      name: 'Kate Hunington',
      email: 'kate.hunington@gmail.com',
      title: 'Designer',
      company: 'UI/UX',
      status: 3,
      position: true,
    },
  ];

  getAllTableData(): TableData[] {
    return this.data;
  }

  addTableData(name, email, title, company, status, position) {
    this.data.push({
      avatar: '',
      name,
      email,
      title,
      company,
      status,
      position,
    });
  }

  deleteTableData(email: String) {
    this.data = this.data.filter((item) => item.email != email);
    console.log(this.data);
  }

  constructor() {}
}
