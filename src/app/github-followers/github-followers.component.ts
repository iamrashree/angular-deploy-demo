import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, switchMap } from 'rxjs';
import { GithubFollowersService } from './github-follower.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers!: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .pipe(switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        return this.service.getFollowers();
      }))
      .subscribe(followers => this.followers = followers as any[]);
  }

}
