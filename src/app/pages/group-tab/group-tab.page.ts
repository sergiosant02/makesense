import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/app/types/types';

@Component({
  selector: 'app-group-tab',
  templateUrl: './group-tab.page.html',
  styleUrls: ['./group-tab.page.scss'],
})
export class GroupTabPage implements OnInit {

  public groups: Group[] = [];

  constructor(private groupService: GroupService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.groups = this.groupService.getGroups();
  }

  onClick() {
    this.router.navigate(['job'], { relativeTo: this.route });
  }

}
