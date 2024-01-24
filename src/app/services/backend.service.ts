import { Injectable } from '@angular/core';
import { Category, Genre, Group, Job, User } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      genre: Genre.MALE,
      phone: '123-456-7890',
      birthday: new Date('1990-01-01'),
      createdAt: new Date('2024-01-01T10:00:00Z'),
      updatedAt: new Date('2024-01-01T10:00:00Z'),
    },
    // Agrega más usuarios según sea necesario
  ];

  private groups: Group[] = [
    {
      id: 1,
      name: 'Group A',
      description: "grupo de los colegas",
      code: 'ABC123',
      user: this.users, // IDs de los usuarios asociados al grupo
      createdBy: this.users[0], // Usuario que creó el grupo
      createdAt: new Date('2024-01-03T12:00:00Z'),
      updatedAt: new Date('2024-01-03T12:00:00Z'),
    },
    // Agrega más grupos según sea necesario
  ];

  private category1: Category = {
    name: "category1",
    group: this.groups[0]
  }

  private jobs: Job[] = [
    {
      id: 1,
      name: 'Job 1',
      description: 'Description for Job 1',
      quantity: 5,
      category: this.category1,
      check: true,
      group: this.groups[0], // Grupo asociado al trabajo
      createdBy: this.users[0], // Usuario que creó el trabajo
      createdAt: new Date('2024-01-05T14:00:00Z'),
      updatedAt: new Date('2024-01-05T14:00:00Z'),
    },
    // Agrega más trabajos según sea necesario
  ];

  getUsers(): User[] {
    return this.users;
  }

  getGroups(): Group[] {
    return this.groups;
  }

  getJobs(): Job[] {
    return this.jobs;
  }


  data = {
    "users": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "genre": "MALE",
        "phone": "123-456-7890",
        "birthday": "1990-01-01",
        "createdAt": "2024-01-01T10:00:00Z",
        "updatedAt": "2024-01-01T10:00:00Z"
      },
      {
        "id": 2,
        "name": "Jane Doe",
        "email": "jane.doe@example.com",
        "genre": "FEMALE",
        "phone": "987-654-3210",
        "birthday": "1992-02-02",
        "createdAt": "2024-01-02T11:00:00Z",
        "updatedAt": "2024-01-02T11:00:00Z"
      }
    ],
    "groups": [
      {
        "id": 1,
        "name": "Group A",
        "code": "ABC123",
        "user": [1, 2],
        "createdBy": 1,
        "createdAt": "2024-01-03T12:00:00Z",
        "updatedAt": "2024-01-03T12:00:00Z"
      },
      {
        "id": 2,
        "name": "Group B",
        "code": "XYZ789",
        "user": [2],
        "createdBy": 2,
        "createdAt": "2024-01-04T13:00:00Z",
        "updatedAt": "2024-01-04T13:00:00Z"
      }
    ],
    "jobs": [
      {
        "id": 1,
        "name": "Job 1",
        "description": "Description for Job 1",
        "quantity": 5,
        "check": true,
        "group": 1,
        "createdBy": 1,
        "createdAt": "2024-01-05T14:00:00Z",
        "updatedAt": "2024-01-05T14:00:00Z"
      },
      {
        "id": 2,
        "name": "Job 2",
        "description": "Description for Job 2",
        "quantity": 10,
        "check": false,
        "group": 2,
        "createdBy": 2,
        "createdAt": "2024-01-06T15:00:00Z",
        "updatedAt": "2024-01-06T15:00:00Z"
      }
    ]
  };

  constructor() { }
}
