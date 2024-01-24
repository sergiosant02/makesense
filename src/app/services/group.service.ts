import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Group } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class GroupService{

  constructor(private backendService: BackendService) { }

  getGroups(): Group[] {
    return this.backendService.getGroups();
  }


}
