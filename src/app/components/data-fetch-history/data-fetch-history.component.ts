import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { PaginatorModule } from 'primeng/paginator';

interface DataFetchRecord {
  id: number;
  date: string;
  time: string;
  status: string;
  totalRecords: number;
  successCount: number;
  failureCount: number;
  successPercentage: number;
  failurePercentage: number;
  user: {
    name: string;
    id: string;
    avatar: string;
  };
  statusColor: string;
}

@Component({
  selector: 'app-data-fetch-history',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    TagModule,
    ProgressBarModule,
    AvatarModule,
    PaginatorModule
  ],
  templateUrl: './data-fetch-history.component.html',
  styleUrl: './data-fetch-history.component.css'
})
export class DataFetchHistoryComponent {
  Math = Math; // Make Math available in template
  
  // Dialog/Sidebar properties
  isDialogOpen = false;
  selectedRecord: DataFetchRecord | null = null;
  
  dataFetchRecords: DataFetchRecord[] = [
    {
      id: 1,
      date: '12 มิ.ย. 2025',
      time: '13:48',
      status: 'ข้อมูลสินค้า',
      totalRecords: 160,
      successCount: 160,
      failureCount: 0,
      successPercentage: 100,
      failurePercentage: 0,
      user: { name: 'Olivia Rhye', id: 'i7383737', avatar: 'OR' },
      statusColor: 'success'
    },
    {
      id: 2,
      date: '12 มิ.ย. 2025',
      time: '09:33',
      status: 'ข้อมูลสินค้า',
      totalRecords: 160,
      successCount: 120,
      failureCount: 40,
      successPercentage: 75,
      failurePercentage: 25,
      user: { name: 'System', id: 'Scheduling Job', avatar: 'SY' },
      statusColor: 'warning'
    },
    {
      id: 3,
      date: '11 มิ.ย. 2025',
      time: '13:48',
      status: 'ข้อมูลสินค้า',
      totalRecords: 160,
      successCount: 0,
      failureCount: 160,
      successPercentage: 0,
      failurePercentage: 100,
      user: { name: 'Olivia Rhye', id: 'i7383737', avatar: 'OR' },
      statusColor: 'danger'
    },
    {
      id: 4,
      date: '10 มิ.ย. 2025',
      time: '13:48',
      status: 'ข้อมูลราคา',
      totalRecords: 160,
      successCount: 120,
      failureCount: 40,
      successPercentage: 75,
      failurePercentage: 25,
      user: { name: 'Olivia Rhye', id: 'i7383737', avatar: 'OR' },
      statusColor: 'warning'
    },
    {
      id: 5,
      date: '10 มิ.ย. 2025',
      time: '13:48',
      status: 'ข้อมูลราคา',
      totalRecords: 160,
      successCount: 120,
      failureCount: 40,
      successPercentage: 75,
      failurePercentage: 25,
      user: { name: 'Olivia Rhye', id: 'i7383737', avatar: 'OR' },
      statusColor: 'warning'
    },
    {
      id: 6,
      date: '10 มิ.ย. 2025',
      time: '11:13',
      status: 'ข้อมูลสินค้า',
      totalRecords: 160,
      successCount: 160,
      failureCount: 0,
      successPercentage: 100,
      failurePercentage: 0,
      user: { name: 'Olivia Rhye', id: 'i7383737', avatar: 'OR' },
      statusColor: 'success'
    },
    {
      id: 7,
      date: '09 มิ.ย. 2025',
      time: '13:48',
      status: 'ข้อมูลสินค้า',
      totalRecords: 160,
      successCount: 160,
      failureCount: 0,
      successPercentage: 100,
      failurePercentage: 0,
      user: { name: 'Olivia Rhye', id: 'i7383737', avatar: 'OR' },
      statusColor: 'success'
    },
    {
      id: 8,
      date: '08 มิ.ย. 2025',
      time: '13:48',
      status: 'ข้อมูลราคา',
      totalRecords: 160,
      successCount: 160,
      failureCount: 0,
      successPercentage: 100,
      failurePercentage: 0,
      user: { name: 'Olivia Rhye', id: 'i7383737', avatar: 'OR' },
      statusColor: 'success'
    },
    {
      id: 9,
      date: '07 มิ.ย. 2025',
      time: '13:48',
      status: 'ข้อมูลสินค้า',
      totalRecords: 160,
      successCount: 0,
      failureCount: 160,
      successPercentage: 0,
      failurePercentage: 100,
      user: { name: 'Olivia Rhye', id: 'i7383737', avatar: 'OR' },
      statusColor: 'danger'
    },
    {
      id: 10,
      date: '06 มิ.ย. 2025',
      time: '13:48',
      status: 'ข้อมูลสินค้า',
      totalRecords: 160,
      successCount: 0,
      failureCount: 160,
      successPercentage: 0,
      failurePercentage: 100,
      user: { name: 'Olivia Rhye', id: 'i7383737', avatar: 'OR' },
      statusColor: 'danger'
    }
  ];

  dateRangeOptions = [
    { label: '01 มิ.ย. 2025 - 30 มิ.ย. 2025', value: 'current' }
  ];

  selectedDateRange = this.dateRangeOptions[0];

  departmentOptions = [
    { label: 'ทั้งหมด', value: 'all' }
  ];

  selectedDepartment = this.departmentOptions[0];

  userOptions = [
    { label: 'ทั้งหมด', value: 'all' }
  ];

  selectedUser = this.userOptions[0];

  searchText = '';

  // Dialog/Sidebar methods
  openDialog(record: DataFetchRecord) {
    this.selectedRecord = record;
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
    this.selectedRecord = null;
  }
}
