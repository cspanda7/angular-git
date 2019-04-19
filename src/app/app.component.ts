import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from "./models/user";
import {Repository} from "./models/repo";
import {UserService} from "./services/user.service";
import {RepositoryService} from "./services/repo.service";
import {BranchService} from "./services/branch.service"

import {Subject} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


    cache = {
        users: [],
        selectedUser: [],
    };

    users: User[] = [];
    repos: Repository[] = [];
    search: Subject<string> = new Subject<string>();
    selectedUser: User = new User();
    loadingFollowers: boolean = false;


    constructor(private userService: UserService,private repositoryService:RepositoryService,private branchService:BranchService,
    private router:Router) {

        // this.search.debounceTime(200).distinctUntilChanged().subscribe((searchTerm) => {

        //     // call to user service and search by query

        //     this.userService.search(searchTerm).subscribe(res => {

        //         this.users = res.items as User[];
        //     });
        // });
      
    }

    ngOnInit() {


        // this.userService.getUsers().subscribe(res => {

        //     this.cache.users = res; // store cached for next time.

        //     this.users = res;
        // }, error => {

        //     console.log(error); // for development only.
        // });
          // this.repositoryService.getRepos().subscribe(res => {
          //       this.repos=res as Repository[];
          //       console.log(res as Repository[]);
          //   });
    }

    /**
     * On user typing key to search.
     */
    onSearch(q: string) {

        if (q !== "") {
            this.search.next(q);
        } else {
            //if empty search box we restore first users
            this.users = this.cache.users;
        }

    }

    go(s: string) {

        if (s == 'home') {

            this.selectedUser = new User();
            this.users = this.cache.users;
        }
    }

    // viewBranches(repo:Repository){
    //   this.router.navigate(['/branch']);
    // }
    viewUser(user: User) {

        this.selectedUser = user;

        let userInCache: User = this.findUserInCache(user);
        // let find if existing in cache we return and no longer call to api again
        if (userInCache) {
            this.selectedUser = userInCache;
        } else {
            // get followers of this user
            this.loadingFollowers = true;

            this.userService.getUserFollowers(user.login).subscribe(res => {
                this.selectedUser.followers = res as User[];

                this.cacheSelectUser(this.selectedUser);

                this.loadingFollowers = false;

            }, err => {
                console.log(err);
                this.loadingFollowers = false;
            });

        }


    }

    /**
     * we storage selected user and dont again to api. just simply function for now.
     * */

    cacheSelectUser(user: User) {
        if (!this.findUserInCache(user)) {
            this.cache.selectedUser.push(user);
        }

    }

    /**
     * Find user if exist in cache we return user object
     * @param user
     * @returns {boolean}
     */
    findUserInCache(user: User): User {

        for (var i = 0; i < this.cache.selectedUser.length; i++) {
            if (this.cache.selectedUser[i].login == user.login) {
                return this.cache.selectedUser[i];
            }
        }

        return null;
    }
}
