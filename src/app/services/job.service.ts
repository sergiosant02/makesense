import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Job } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private backendService: BackendService) { }

  getJobs(): Job[] {
    return this.backendService.getJobs();
  }
}
